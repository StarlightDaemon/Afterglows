// Regenerative Braking. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptRegenerativeBraking extends HTMLElement {
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
        .road {
          stroke:#375b51;
          stroke-width:1.4
        }
        .car-body {
          fill:#173c2b;
          stroke:#70edb1;
          stroke-width:1.5
        }
        .window {
          fill:#07120f;
          stroke:#77c9ef;
          stroke-width:1
        }
        .car-position {
          animation:brake-position 12s linear infinite
        }
        .tire,.zoom-wheel {
          fill:#07120f;
          stroke:#77c9ef;
          stroke-width:1.5
        }
        .spoke {
          stroke:#70edb1;
          stroke-width:1.1
        }
        .wheel-turn {
          animation:brake-wheel 12s linear infinite
        }
        .zoom {
          fill:none;
          stroke:#375b51;
          stroke-width:.7;
          stroke-dasharray:2 2
        }
        .shaft {
          stroke:#77c9ef;
          stroke-width:2
        }
        .motor {
          fill:#142b20;
          stroke:#70edb1;
          stroke-width:1.3
        }
        .motor-symbol {
          fill:none;
          stroke:#70edb1;
          stroke-width:1
        }
        .conductor {
          stroke:#375b51;
          stroke-width:1
        }
        .brake-torque {
          fill:none;
          stroke:#ed8eab;
          stroke-width:1.2;
          animation:brake-torque 12s linear infinite
        }
        .energy-flow {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.8;
          animation:brake-power 12s linear infinite
        }
        .battery {
          fill:#07120f;
          stroke:#f3c977;
          stroke-width:1.3
        }
        .battery-terminal {
          fill:none;
          stroke:#f3c977;
          stroke-width:1
        }
        .charge {
          fill:#70edb1;
          animation:brake-charge 12s linear infinite
        }
        .heat-flow {
          fill:none;
          stroke:#f3c977;
          stroke-width:1;
          animation:brake-power 12s linear infinite
        }
        .braking-cycle {
          animation:brake-cycle 12s linear infinite
        }
        @keyframes brake-position {
          0.0000% {
            transform:translateX(0px)
          }
          0.4167% {
            transform:translateX(0.6px)
          }
          0.8333% {
            transform:translateX(1.2px)
          }
          1.2500% {
            transform:translateX(1.8px)
          }
          1.6667% {
            transform:translateX(2.4px)
          }
          2.0833% {
            transform:translateX(3px)
          }
          2.5000% {
            transform:translateX(3.6px)
          }
          2.9167% {
            transform:translateX(4.2px)
          }
          3.3333% {
            transform:translateX(4.8px)
          }
          3.7500% {
            transform:translateX(5.4px)
          }
          4.1667% {
            transform:translateX(6px)
          }
          4.5833% {
            transform:translateX(6.6px)
          }
          5.0000% {
            transform:translateX(7.2px)
          }
          5.4167% {
            transform:translateX(7.8px)
          }
          5.8333% {
            transform:translateX(8.4px)
          }
          6.2500% {
            transform:translateX(9px)
          }
          6.6667% {
            transform:translateX(9.6px)
          }
          7.0833% {
            transform:translateX(10.2px)
          }
          7.5000% {
            transform:translateX(10.8px)
          }
          7.9167% {
            transform:translateX(11.4px)
          }
          8.3333% {
            transform:translateX(12px)
          }
          8.7500% {
            transform:translateX(12.6px)
          }
          9.1667% {
            transform:translateX(13.2px)
          }
          9.5833% {
            transform:translateX(13.8px)
          }
          10.0000% {
            transform:translateX(14.4px)
          }
          10.4167% {
            transform:translateX(15px)
          }
          10.8333% {
            transform:translateX(15.6px)
          }
          11.2500% {
            transform:translateX(16.2px)
          }
          11.6667% {
            transform:translateX(16.8px)
          }
          12.0833% {
            transform:translateX(17.4px)
          }
          12.5000% {
            transform:translateX(18px)
          }
          12.9167% {
            transform:translateX(18.6px)
          }
          13.3333% {
            transform:translateX(19.2px)
          }
          13.7500% {
            transform:translateX(19.8px)
          }
          14.1667% {
            transform:translateX(20.4px)
          }
          14.5833% {
            transform:translateX(21px)
          }
          15.0000% {
            transform:translateX(21.6px)
          }
          15.4167% {
            transform:translateX(22.2px)
          }
          15.8333% {
            transform:translateX(22.8px)
          }
          16.2500% {
            transform:translateX(23.4px)
          }
          16.6667% {
            transform:translateX(24px)
          }
          17.0833% {
            transform:translateX(24.6px)
          }
          17.5000% {
            transform:translateX(25.2px)
          }
          17.9167% {
            transform:translateX(25.798px)
          }
          18.3333% {
            transform:translateX(26.396px)
          }
          18.7500% {
            transform:translateX(26.993px)
          }
          19.1667% {
            transform:translateX(27.587px)
          }
          19.5833% {
            transform:translateX(28.18px)
          }
          20.0000% {
            transform:translateX(28.771px)
          }
          20.4167% {
            transform:translateX(29.358px)
          }
          20.8333% {
            transform:translateX(29.943px)
          }
          21.2500% {
            transform:translateX(30.525px)
          }
          21.6667% {
            transform:translateX(31.103px)
          }
          22.0833% {
            transform:translateX(31.677px)
          }
          22.5000% {
            transform:translateX(32.247px)
          }
          22.9167% {
            transform:translateX(32.813px)
          }
          23.3333% {
            transform:translateX(33.374px)
          }
          23.7500% {
            transform:translateX(33.93px)
          }
          24.1667% {
            transform:translateX(34.482px)
          }
          24.5833% {
            transform:translateX(35.028px)
          }
          25.0000% {
            transform:translateX(35.568px)
          }
          25.4167% {
            transform:translateX(36.103px)
          }
          25.8333% {
            transform:translateX(36.631px)
          }
          26.2500% {
            transform:translateX(37.154px)
          }
          26.6667% {
            transform:translateX(37.67px)
          }
          27.0833% {
            transform:translateX(38.18px)
          }
          27.5000% {
            transform:translateX(38.683px)
          }
          27.9167% {
            transform:translateX(39.178px)
          }
          28.3333% {
            transform:translateX(39.667px)
          }
          28.7500% {
            transform:translateX(40.149px)
          }
          29.1667% {
            transform:translateX(40.623px)
          }
          29.5833% {
            transform:translateX(41.09px)
          }
          30.0000% {
            transform:translateX(41.548px)
          }
          30.4167% {
            transform:translateX(42.0px)
          }
          30.8333% {
            transform:translateX(42.443px)
          }
          31.2500% {
            transform:translateX(42.878px)
          }
          31.6667% {
            transform:translateX(43.305px)
          }
          32.0833% {
            transform:translateX(43.723px)
          }
          32.5000% {
            transform:translateX(44.133px)
          }
          32.9167% {
            transform:translateX(44.535px)
          }
          33.3333% {
            transform:translateX(44.928px)
          }
          33.7500% {
            transform:translateX(45.312px)
          }
          34.1667% {
            transform:translateX(45.688px)
          }
          34.5833% {
            transform:translateX(46.055px)
          }
          35.0000% {
            transform:translateX(46.413px)
          }
          35.4167% {
            transform:translateX(46.763px)
          }
          35.8333% {
            transform:translateX(47.103px)
          }
          36.2500% {
            transform:translateX(47.435px)
          }
          36.6667% {
            transform:translateX(47.757px)
          }
          37.0833% {
            transform:translateX(48.071px)
          }
          37.5000% {
            transform:translateX(48.375px)
          }
          37.9167% {
            transform:translateX(48.671px)
          }
          38.3333% {
            transform:translateX(48.957px)
          }
          38.7500% {
            transform:translateX(49.235px)
          }
          39.1667% {
            transform:translateX(49.503px)
          }
          39.5833% {
            transform:translateX(49.763px)
          }
          40.0000% {
            transform:translateX(50.013px)
          }
          40.4167% {
            transform:translateX(50.255px)
          }
          40.8333% {
            transform:translateX(50.488px)
          }
          41.2500% {
            transform:translateX(50.712px)
          }
          41.6667% {
            transform:translateX(50.928px)
          }
          42.0833% {
            transform:translateX(51.135px)
          }
          42.5000% {
            transform:translateX(51.333px)
          }
          42.9167% {
            transform:translateX(51.523px)
          }
          43.3333% {
            transform:translateX(51.705px)
          }
          43.7500% {
            transform:translateX(51.878px)
          }
          44.1667% {
            transform:translateX(52.043px)
          }
          44.5833% {
            transform:translateX(52.2px)
          }
          45.0000% {
            transform:translateX(52.348px)
          }
          45.4167% {
            transform:translateX(52.49px)
          }
          45.8333% {
            transform:translateX(52.623px)
          }
          46.2500% {
            transform:translateX(52.749px)
          }
          46.6667% {
            transform:translateX(52.867px)
          }
          47.0833% {
            transform:translateX(52.978px)
          }
          47.5000% {
            transform:translateX(53.083px)
          }
          47.9167% {
            transform:translateX(53.18px)
          }
          48.3333% {
            transform:translateX(53.27px)
          }
          48.7500% {
            transform:translateX(53.354px)
          }
          49.1667% {
            transform:translateX(53.431px)
          }
          49.5833% {
            transform:translateX(53.503px)
          }
          50.0000% {
            transform:translateX(53.568px)
          }
          50.4167% {
            transform:translateX(53.628px)
          }
          50.8333% {
            transform:translateX(53.682px)
          }
          51.2500% {
            transform:translateX(53.73px)
          }
          51.6667% {
            transform:translateX(53.774px)
          }
          52.0833% {
            transform:translateX(53.813px)
          }
          52.5000% {
            transform:translateX(53.847px)
          }
          52.9167% {
            transform:translateX(53.877px)
          }
          53.3333% {
            transform:translateX(53.903px)
          }
          53.7500% {
            transform:translateX(53.925px)
          }
          54.1667% {
            transform:translateX(53.943px)
          }
          54.5833% {
            transform:translateX(53.958px)
          }
          55.0000% {
            transform:translateX(53.971px)
          }
          55.4167% {
            transform:translateX(53.98px)
          }
          55.8333% {
            transform:translateX(53.987px)
          }
          56.2500% {
            transform:translateX(53.993px)
          }
          56.6667% {
            transform:translateX(53.996px)
          }
          57.0833% {
            transform:translateX(53.998px)
          }
          57.5000% {
            transform:translateX(54.0px)
          }
          57.9167% {
            transform:translateX(54.0px)
          }
          58.3333% {
            transform:translateX(54px)
          }
          58.7500% {
            transform:translateX(54px)
          }
          59.1667% {
            transform:translateX(54px)
          }
          59.5833% {
            transform:translateX(54px)
          }
          60.0000% {
            transform:translateX(54px)
          }
          60.4167% {
            transform:translateX(54px)
          }
          60.8333% {
            transform:translateX(54px)
          }
          61.2500% {
            transform:translateX(54px)
          }
          61.6667% {
            transform:translateX(54px)
          }
          62.0833% {
            transform:translateX(54px)
          }
          62.5000% {
            transform:translateX(54px)
          }
          62.9167% {
            transform:translateX(54px)
          }
          63.3333% {
            transform:translateX(54px)
          }
          63.7500% {
            transform:translateX(54px)
          }
          64.1667% {
            transform:translateX(54px)
          }
          64.5833% {
            transform:translateX(54px)
          }
          65.0000% {
            transform:translateX(54px)
          }
          65.4167% {
            transform:translateX(54px)
          }
          65.8333% {
            transform:translateX(54px)
          }
          66.2500% {
            transform:translateX(54px)
          }
          66.6667% {
            transform:translateX(54px)
          }
          67.0833% {
            transform:translateX(54px)
          }
          67.5000% {
            transform:translateX(54px)
          }
          67.9167% {
            transform:translateX(54px)
          }
          68.3333% {
            transform:translateX(54px)
          }
          68.7500% {
            transform:translateX(54px)
          }
          69.1667% {
            transform:translateX(54px)
          }
          69.5833% {
            transform:translateX(54px)
          }
          70.0000% {
            transform:translateX(54px)
          }
          70.4167% {
            transform:translateX(54px)
          }
          70.8333% {
            transform:translateX(54px)
          }
          71.2500% {
            transform:translateX(54px)
          }
          71.6667% {
            transform:translateX(54px)
          }
          72.0833% {
            transform:translateX(54px)
          }
          72.5000% {
            transform:translateX(54px)
          }
          72.9167% {
            transform:translateX(54px)
          }
          73.3333% {
            transform:translateX(54px)
          }
          73.7500% {
            transform:translateX(54px)
          }
          74.1667% {
            transform:translateX(54px)
          }
          74.5833% {
            transform:translateX(54px)
          }
          75.0000% {
            transform:translateX(54px)
          }
          75.4167% {
            transform:translateX(54px)
          }
          75.8333% {
            transform:translateX(54px)
          }
          76.2500% {
            transform:translateX(54px)
          }
          76.6667% {
            transform:translateX(54px)
          }
          77.0833% {
            transform:translateX(54px)
          }
          77.5000% {
            transform:translateX(54px)
          }
          77.9167% {
            transform:translateX(54px)
          }
          78.3333% {
            transform:translateX(54px)
          }
          78.7500% {
            transform:translateX(54px)
          }
          79.1667% {
            transform:translateX(54px)
          }
          79.5833% {
            transform:translateX(54px)
          }
          80.0000% {
            transform:translateX(54px)
          }
          80.4167% {
            transform:translateX(54px)
          }
          80.8333% {
            transform:translateX(54px)
          }
          81.2500% {
            transform:translateX(54px)
          }
          81.6667% {
            transform:translateX(54px)
          }
          82.0833% {
            transform:translateX(54px)
          }
          82.5000% {
            transform:translateX(54px)
          }
          82.9167% {
            transform:translateX(54px)
          }
          83.3333% {
            transform:translateX(54px)
          }
          83.7500% {
            transform:translateX(54px)
          }
          84.1667% {
            transform:translateX(54px)
          }
          84.5833% {
            transform:translateX(54px)
          }
          85.0000% {
            transform:translateX(54px)
          }
          85.4167% {
            transform:translateX(54px)
          }
          85.8333% {
            transform:translateX(54px)
          }
          86.2500% {
            transform:translateX(54px)
          }
          86.6667% {
            transform:translateX(54px)
          }
          87.0833% {
            transform:translateX(54px)
          }
          87.5000% {
            transform:translateX(54px)
          }
          87.9167% {
            transform:translateX(54px)
          }
          88.3333% {
            transform:translateX(54px)
          }
          88.7500% {
            transform:translateX(54px)
          }
          89.1667% {
            transform:translateX(54px)
          }
          89.5833% {
            transform:translateX(54px)
          }
          90.0000% {
            transform:translateX(54px)
          }
          90.4167% {
            transform:translateX(54px)
          }
          90.8333% {
            transform:translateX(54px)
          }
          91.2500% {
            transform:translateX(54px)
          }
          91.6667% {
            transform:translateX(54px)
          }
          92.0833% {
            transform:translateX(54px)
          }
          92.5000% {
            transform:translateX(54px)
          }
          92.9167% {
            transform:translateX(54px)
          }
          93.3333% {
            transform:translateX(54px)
          }
          93.7500% {
            transform:translateX(54px)
          }
          94.1667% {
            transform:translateX(54px)
          }
          94.5833% {
            transform:translateX(54px)
          }
          95.0000% {
            transform:translateX(54px)
          }
          95.4167% {
            transform:translateX(54px)
          }
          95.8333% {
            transform:translateX(54px)
          }
          96.2500% {
            transform:translateX(54px)
          }
          96.6667% {
            transform:translateX(54px)
          }
          97.0833% {
            transform:translateX(54px)
          }
          97.5000% {
            transform:translateX(54px)
          }
          97.9167% {
            transform:translateX(54px)
          }
          98.3333% {
            transform:translateX(54px)
          }
          98.7500% {
            transform:translateX(54px)
          }
          99.1667% {
            transform:translateX(54px)
          }
          99.5833% {
            transform:translateX(54px)
          }
          100.0000% {
            transform:translateX(54px)
          }
        }
        @keyframes brake-wheel {
          0.0000% {
            transform:rotate(0deg)
          }
          0.4167% {
            transform:rotate(4.911deg)
          }
          0.8333% {
            transform:rotate(9.822deg)
          }
          1.2500% {
            transform:rotate(14.733deg)
          }
          1.6667% {
            transform:rotate(19.644deg)
          }
          2.0833% {
            transform:rotate(24.555deg)
          }
          2.5000% {
            transform:rotate(29.466deg)
          }
          2.9167% {
            transform:rotate(34.377deg)
          }
          3.3333% {
            transform:rotate(39.289deg)
          }
          3.7500% {
            transform:rotate(44.2deg)
          }
          4.1667% {
            transform:rotate(49.111deg)
          }
          4.5833% {
            transform:rotate(54.022deg)
          }
          5.0000% {
            transform:rotate(58.933deg)
          }
          5.4167% {
            transform:rotate(63.844deg)
          }
          5.8333% {
            transform:rotate(68.755deg)
          }
          6.2500% {
            transform:rotate(73.666deg)
          }
          6.6667% {
            transform:rotate(78.577deg)
          }
          7.0833% {
            transform:rotate(83.488deg)
          }
          7.5000% {
            transform:rotate(88.399deg)
          }
          7.9167% {
            transform:rotate(93.31deg)
          }
          8.3333% {
            transform:rotate(98.221deg)
          }
          8.7500% {
            transform:rotate(103.132deg)
          }
          9.1667% {
            transform:rotate(108.043deg)
          }
          9.5833% {
            transform:rotate(112.955deg)
          }
          10.0000% {
            transform:rotate(117.866deg)
          }
          10.4167% {
            transform:rotate(122.777deg)
          }
          10.8333% {
            transform:rotate(127.688deg)
          }
          11.2500% {
            transform:rotate(132.599deg)
          }
          11.6667% {
            transform:rotate(137.51deg)
          }
          12.0833% {
            transform:rotate(142.421deg)
          }
          12.5000% {
            transform:rotate(147.332deg)
          }
          12.9167% {
            transform:rotate(152.243deg)
          }
          13.3333% {
            transform:rotate(157.154deg)
          }
          13.7500% {
            transform:rotate(162.065deg)
          }
          14.1667% {
            transform:rotate(166.976deg)
          }
          14.5833% {
            transform:rotate(171.887deg)
          }
          15.0000% {
            transform:rotate(176.798deg)
          }
          15.4167% {
            transform:rotate(181.709deg)
          }
          15.8333% {
            transform:rotate(186.621deg)
          }
          16.2500% {
            transform:rotate(191.532deg)
          }
          16.6667% {
            transform:rotate(196.443deg)
          }
          17.0833% {
            transform:rotate(201.353deg)
          }
          17.5000% {
            transform:rotate(206.261deg)
          }
          17.9167% {
            transform:rotate(211.163deg)
          }
          18.3333% {
            transform:rotate(216.056deg)
          }
          18.7500% {
            transform:rotate(220.938deg)
          }
          19.1667% {
            transform:rotate(225.806deg)
          }
          19.5833% {
            transform:rotate(230.658deg)
          }
          20.0000% {
            transform:rotate(235.49deg)
          }
          20.4167% {
            transform:rotate(240.3deg)
          }
          20.8333% {
            transform:rotate(245.087deg)
          }
          21.2500% {
            transform:rotate(249.847deg)
          }
          21.6667% {
            transform:rotate(254.578deg)
          }
          22.0833% {
            transform:rotate(259.278deg)
          }
          22.5000% {
            transform:rotate(263.944deg)
          }
          22.9167% {
            transform:rotate(268.576deg)
          }
          23.3333% {
            transform:rotate(273.169deg)
          }
          23.7500% {
            transform:rotate(277.723deg)
          }
          24.1667% {
            transform:rotate(282.236deg)
          }
          24.5833% {
            transform:rotate(286.704deg)
          }
          25.0000% {
            transform:rotate(291.128deg)
          }
          25.4167% {
            transform:rotate(295.504deg)
          }
          25.8333% {
            transform:rotate(299.832deg)
          }
          26.2500% {
            transform:rotate(304.109deg)
          }
          26.6667% {
            transform:rotate(308.334deg)
          }
          27.0833% {
            transform:rotate(312.505deg)
          }
          27.5000% {
            transform:rotate(316.621deg)
          }
          27.9167% {
            transform:rotate(320.68deg)
          }
          28.3333% {
            transform:rotate(324.681deg)
          }
          28.7500% {
            transform:rotate(328.623deg)
          }
          29.1667% {
            transform:rotate(332.504deg)
          }
          29.5833% {
            transform:rotate(336.323deg)
          }
          30.0000% {
            transform:rotate(340.079deg)
          }
          30.4167% {
            transform:rotate(343.771deg)
          }
          30.8333% {
            transform:rotate(347.398deg)
          }
          31.2500% {
            transform:rotate(350.959deg)
          }
          31.6667% {
            transform:rotate(354.452deg)
          }
          32.0833% {
            transform:rotate(357.878deg)
          }
          32.5000% {
            transform:rotate(361.235deg)
          }
          32.9167% {
            transform:rotate(364.523deg)
          }
          33.3333% {
            transform:rotate(367.741deg)
          }
          33.7500% {
            transform:rotate(370.888deg)
          }
          34.1667% {
            transform:rotate(373.963deg)
          }
          34.5833% {
            transform:rotate(376.967deg)
          }
          35.0000% {
            transform:rotate(379.899deg)
          }
          35.4167% {
            transform:rotate(382.758deg)
          }
          35.8333% {
            transform:rotate(385.544deg)
          }
          36.2500% {
            transform:rotate(388.257deg)
          }
          36.6667% {
            transform:rotate(390.896deg)
          }
          37.0833% {
            transform:rotate(393.462deg)
          }
          37.5000% {
            transform:rotate(395.955deg)
          }
          37.9167% {
            transform:rotate(398.373deg)
          }
          38.3333% {
            transform:rotate(400.719deg)
          }
          38.7500% {
            transform:rotate(402.99deg)
          }
          39.1667% {
            transform:rotate(405.188deg)
          }
          39.5833% {
            transform:rotate(407.313deg)
          }
          40.0000% {
            transform:rotate(409.365deg)
          }
          40.4167% {
            transform:rotate(411.345deg)
          }
          40.8333% {
            transform:rotate(413.252deg)
          }
          41.2500% {
            transform:rotate(415.087deg)
          }
          41.6667% {
            transform:rotate(416.851deg)
          }
          42.0833% {
            transform:rotate(418.545deg)
          }
          42.5000% {
            transform:rotate(420.168deg)
          }
          42.9167% {
            transform:rotate(421.722deg)
          }
          43.3333% {
            transform:rotate(423.207deg)
          }
          43.7500% {
            transform:rotate(424.625deg)
          }
          44.1667% {
            transform:rotate(425.975deg)
          }
          44.5833% {
            transform:rotate(427.259deg)
          }
          45.0000% {
            transform:rotate(428.478deg)
          }
          45.4167% {
            transform:rotate(429.633deg)
          }
          45.8333% {
            transform:rotate(430.725deg)
          }
          46.2500% {
            transform:rotate(431.755deg)
          }
          46.6667% {
            transform:rotate(432.725deg)
          }
          47.0833% {
            transform:rotate(433.635deg)
          }
          47.5000% {
            transform:rotate(434.486deg)
          }
          47.9167% {
            transform:rotate(435.282deg)
          }
          48.3333% {
            transform:rotate(436.022deg)
          }
          48.7500% {
            transform:rotate(436.708deg)
          }
          49.1667% {
            transform:rotate(437.342deg)
          }
          49.5833% {
            transform:rotate(437.925deg)
          }
          50.0000% {
            transform:rotate(438.46deg)
          }
          50.4167% {
            transform:rotate(438.948deg)
          }
          50.8333% {
            transform:rotate(439.39deg)
          }
          51.2500% {
            transform:rotate(439.788deg)
          }
          51.6667% {
            transform:rotate(440.145deg)
          }
          52.0833% {
            transform:rotate(440.463deg)
          }
          52.5000% {
            transform:rotate(440.743deg)
          }
          52.9167% {
            transform:rotate(440.987deg)
          }
          53.3333% {
            transform:rotate(441.198deg)
          }
          53.7500% {
            transform:rotate(441.378deg)
          }
          54.1667% {
            transform:rotate(441.529deg)
          }
          54.5833% {
            transform:rotate(441.654deg)
          }
          55.0000% {
            transform:rotate(441.755deg)
          }
          55.4167% {
            transform:rotate(441.833deg)
          }
          55.8333% {
            transform:rotate(441.893deg)
          }
          56.2500% {
            transform:rotate(441.936deg)
          }
          56.6667% {
            transform:rotate(441.965deg)
          }
          57.0833% {
            transform:rotate(441.983deg)
          }
          57.5000% {
            transform:rotate(441.992deg)
          }
          57.9167% {
            transform:rotate(441.996deg)
          }
          58.3333% {
            transform:rotate(441.996deg)
          }
          58.7500% {
            transform:rotate(441.996deg)
          }
          59.1667% {
            transform:rotate(441.996deg)
          }
          59.5833% {
            transform:rotate(441.996deg)
          }
          60.0000% {
            transform:rotate(441.996deg)
          }
          60.4167% {
            transform:rotate(441.996deg)
          }
          60.8333% {
            transform:rotate(441.996deg)
          }
          61.2500% {
            transform:rotate(441.996deg)
          }
          61.6667% {
            transform:rotate(441.996deg)
          }
          62.0833% {
            transform:rotate(441.996deg)
          }
          62.5000% {
            transform:rotate(441.996deg)
          }
          62.9167% {
            transform:rotate(441.996deg)
          }
          63.3333% {
            transform:rotate(441.996deg)
          }
          63.7500% {
            transform:rotate(441.996deg)
          }
          64.1667% {
            transform:rotate(441.996deg)
          }
          64.5833% {
            transform:rotate(441.996deg)
          }
          65.0000% {
            transform:rotate(441.996deg)
          }
          65.4167% {
            transform:rotate(441.996deg)
          }
          65.8333% {
            transform:rotate(441.996deg)
          }
          66.2500% {
            transform:rotate(441.996deg)
          }
          66.6667% {
            transform:rotate(441.996deg)
          }
          67.0833% {
            transform:rotate(441.996deg)
          }
          67.5000% {
            transform:rotate(441.996deg)
          }
          67.9167% {
            transform:rotate(441.996deg)
          }
          68.3333% {
            transform:rotate(441.996deg)
          }
          68.7500% {
            transform:rotate(441.996deg)
          }
          69.1667% {
            transform:rotate(441.996deg)
          }
          69.5833% {
            transform:rotate(441.996deg)
          }
          70.0000% {
            transform:rotate(441.996deg)
          }
          70.4167% {
            transform:rotate(441.996deg)
          }
          70.8333% {
            transform:rotate(441.996deg)
          }
          71.2500% {
            transform:rotate(441.996deg)
          }
          71.6667% {
            transform:rotate(441.996deg)
          }
          72.0833% {
            transform:rotate(441.996deg)
          }
          72.5000% {
            transform:rotate(441.996deg)
          }
          72.9167% {
            transform:rotate(441.996deg)
          }
          73.3333% {
            transform:rotate(441.996deg)
          }
          73.7500% {
            transform:rotate(441.996deg)
          }
          74.1667% {
            transform:rotate(441.996deg)
          }
          74.5833% {
            transform:rotate(441.996deg)
          }
          75.0000% {
            transform:rotate(441.996deg)
          }
          75.4167% {
            transform:rotate(441.996deg)
          }
          75.8333% {
            transform:rotate(441.996deg)
          }
          76.2500% {
            transform:rotate(441.996deg)
          }
          76.6667% {
            transform:rotate(441.996deg)
          }
          77.0833% {
            transform:rotate(441.996deg)
          }
          77.5000% {
            transform:rotate(441.996deg)
          }
          77.9167% {
            transform:rotate(441.996deg)
          }
          78.3333% {
            transform:rotate(441.996deg)
          }
          78.7500% {
            transform:rotate(441.996deg)
          }
          79.1667% {
            transform:rotate(441.996deg)
          }
          79.5833% {
            transform:rotate(441.996deg)
          }
          80.0000% {
            transform:rotate(441.996deg)
          }
          80.4167% {
            transform:rotate(441.996deg)
          }
          80.8333% {
            transform:rotate(441.996deg)
          }
          81.2500% {
            transform:rotate(441.996deg)
          }
          81.6667% {
            transform:rotate(441.996deg)
          }
          82.0833% {
            transform:rotate(441.996deg)
          }
          82.5000% {
            transform:rotate(441.996deg)
          }
          82.9167% {
            transform:rotate(441.996deg)
          }
          83.3333% {
            transform:rotate(441.996deg)
          }
          83.7500% {
            transform:rotate(441.996deg)
          }
          84.1667% {
            transform:rotate(441.996deg)
          }
          84.5833% {
            transform:rotate(441.996deg)
          }
          85.0000% {
            transform:rotate(441.996deg)
          }
          85.4167% {
            transform:rotate(441.996deg)
          }
          85.8333% {
            transform:rotate(441.996deg)
          }
          86.2500% {
            transform:rotate(441.996deg)
          }
          86.6667% {
            transform:rotate(441.996deg)
          }
          87.0833% {
            transform:rotate(441.996deg)
          }
          87.5000% {
            transform:rotate(441.996deg)
          }
          87.9167% {
            transform:rotate(441.996deg)
          }
          88.3333% {
            transform:rotate(441.996deg)
          }
          88.7500% {
            transform:rotate(441.996deg)
          }
          89.1667% {
            transform:rotate(441.996deg)
          }
          89.5833% {
            transform:rotate(441.996deg)
          }
          90.0000% {
            transform:rotate(441.996deg)
          }
          90.4167% {
            transform:rotate(441.996deg)
          }
          90.8333% {
            transform:rotate(441.996deg)
          }
          91.2500% {
            transform:rotate(441.996deg)
          }
          91.6667% {
            transform:rotate(441.996deg)
          }
          92.0833% {
            transform:rotate(441.996deg)
          }
          92.5000% {
            transform:rotate(441.996deg)
          }
          92.9167% {
            transform:rotate(441.996deg)
          }
          93.3333% {
            transform:rotate(441.996deg)
          }
          93.7500% {
            transform:rotate(441.996deg)
          }
          94.1667% {
            transform:rotate(441.996deg)
          }
          94.5833% {
            transform:rotate(441.996deg)
          }
          95.0000% {
            transform:rotate(441.996deg)
          }
          95.4167% {
            transform:rotate(441.996deg)
          }
          95.8333% {
            transform:rotate(441.996deg)
          }
          96.2500% {
            transform:rotate(441.996deg)
          }
          96.6667% {
            transform:rotate(441.996deg)
          }
          97.0833% {
            transform:rotate(441.996deg)
          }
          97.5000% {
            transform:rotate(441.996deg)
          }
          97.9167% {
            transform:rotate(441.996deg)
          }
          98.3333% {
            transform:rotate(441.996deg)
          }
          98.7500% {
            transform:rotate(441.996deg)
          }
          99.1667% {
            transform:rotate(441.996deg)
          }
          99.5833% {
            transform:rotate(441.996deg)
          }
          100.0000% {
            transform:rotate(441.996deg)
          }
        }
        @keyframes brake-charge {
          0.0000% {
            width:4.6px
          }
          0.4167% {
            width:4.6px
          }
          0.8333% {
            width:4.6px
          }
          1.2500% {
            width:4.6px
          }
          1.6667% {
            width:4.6px
          }
          2.0833% {
            width:4.6px
          }
          2.5000% {
            width:4.6px
          }
          2.9167% {
            width:4.6px
          }
          3.3333% {
            width:4.6px
          }
          3.7500% {
            width:4.6px
          }
          4.1667% {
            width:4.6px
          }
          4.5833% {
            width:4.6px
          }
          5.0000% {
            width:4.6px
          }
          5.4167% {
            width:4.6px
          }
          5.8333% {
            width:4.6px
          }
          6.2500% {
            width:4.6px
          }
          6.6667% {
            width:4.6px
          }
          7.0833% {
            width:4.6px
          }
          7.5000% {
            width:4.6px
          }
          7.9167% {
            width:4.6px
          }
          8.3333% {
            width:4.6px
          }
          8.7500% {
            width:4.6px
          }
          9.1667% {
            width:4.6px
          }
          9.5833% {
            width:4.6px
          }
          10.0000% {
            width:4.6px
          }
          10.4167% {
            width:4.6px
          }
          10.8333% {
            width:4.6px
          }
          11.2500% {
            width:4.6px
          }
          11.6667% {
            width:4.6px
          }
          12.0833% {
            width:4.6px
          }
          12.5000% {
            width:4.6px
          }
          12.9167% {
            width:4.6px
          }
          13.3333% {
            width:4.6px
          }
          13.7500% {
            width:4.6px
          }
          14.1667% {
            width:4.6px
          }
          14.5833% {
            width:4.6px
          }
          15.0000% {
            width:4.6px
          }
          15.4167% {
            width:4.6px
          }
          15.8333% {
            width:4.6px
          }
          16.2500% {
            width:4.6px
          }
          16.6667% {
            width:4.6px
          }
          17.0833% {
            width:4.607px
          }
          17.5000% {
            width:4.626px
          }
          17.9167% {
            width:4.658px
          }
          18.3333% {
            width:4.703px
          }
          18.7500% {
            width:4.759px
          }
          19.1667% {
            width:4.828px
          }
          19.5833% {
            width:4.907px
          }
          20.0000% {
            width:4.998px
          }
          20.4167% {
            width:5.099px
          }
          20.8333% {
            width:5.21px
          }
          21.2500% {
            width:5.33px
          }
          21.6667% {
            width:5.46px
          }
          22.0833% {
            width:5.599px
          }
          22.5000% {
            width:5.746px
          }
          22.9167% {
            width:5.901px
          }
          23.3333% {
            width:6.063px
          }
          23.7500% {
            width:6.232px
          }
          24.1667% {
            width:6.408px
          }
          24.5833% {
            width:6.59px
          }
          25.0000% {
            width:6.777px
          }
          25.4167% {
            width:6.969px
          }
          25.8333% {
            width:7.166px
          }
          26.2500% {
            width:7.367px
          }
          26.6667% {
            width:7.572px
          }
          27.0833% {
            width:7.78px
          }
          27.5000% {
            width:7.991px
          }
          27.9167% {
            width:8.205px
          }
          28.3333% {
            width:8.42px
          }
          28.7500% {
            width:8.636px
          }
          29.1667% {
            width:8.854px
          }
          29.5833% {
            width:9.073px
          }
          30.0000% {
            width:9.291px
          }
          30.4167% {
            width:9.51px
          }
          30.8333% {
            width:9.728px
          }
          31.2500% {
            width:9.945px
          }
          31.6667% {
            width:10.16px
          }
          32.0833% {
            width:10.375px
          }
          32.5000% {
            width:10.587px
          }
          32.9167% {
            width:10.797px
          }
          33.3333% {
            width:11.004px
          }
          33.7500% {
            width:11.209px
          }
          34.1667% {
            width:11.41px
          }
          34.5833% {
            width:11.608px
          }
          35.0000% {
            width:11.803px
          }
          35.4167% {
            width:11.993px
          }
          35.8333% {
            width:12.179px
          }
          36.2500% {
            width:12.361px
          }
          36.6667% {
            width:12.539px
          }
          37.0833% {
            width:12.712px
          }
          37.5000% {
            width:12.88px
          }
          37.9167% {
            width:13.043px
          }
          38.3333% {
            width:13.201px
          }
          38.7500% {
            width:13.354px
          }
          39.1667% {
            width:13.501px
          }
          39.5833% {
            width:13.644px
          }
          40.0000% {
            width:13.78px
          }
          40.4167% {
            width:13.911px
          }
          40.8333% {
            width:14.037px
          }
          41.2500% {
            width:14.157px
          }
          41.6667% {
            width:14.272px
          }
          42.0833% {
            width:14.381px
          }
          42.5000% {
            width:14.485px
          }
          42.9167% {
            width:14.583px
          }
          43.3333% {
            width:14.676px
          }
          43.7500% {
            width:14.764px
          }
          44.1667% {
            width:14.846px
          }
          44.5833% {
            width:14.923px
          }
          45.0000% {
            width:14.995px
          }
          45.4167% {
            width:15.062px
          }
          45.8333% {
            width:15.125px
          }
          46.2500% {
            width:15.183px
          }
          46.6667% {
            width:15.236px
          }
          47.0833% {
            width:15.285px
          }
          47.5000% {
            width:15.33px
          }
          47.9167% {
            width:15.37px
          }
          48.3333% {
            width:15.407px
          }
          48.7500% {
            width:15.441px
          }
          49.1667% {
            width:15.471px
          }
          49.5833% {
            width:15.497px
          }
          50.0000% {
            width:15.521px
          }
          50.4167% {
            width:15.541px
          }
          50.8333% {
            width:15.559px
          }
          51.2500% {
            width:15.575px
          }
          51.6667% {
            width:15.588px
          }
          52.0833% {
            width:15.599px
          }
          52.5000% {
            width:15.609px
          }
          52.9167% {
            width:15.616px
          }
          53.3333% {
            width:15.623px
          }
          53.7500% {
            width:15.628px
          }
          54.1667% {
            width:15.631px
          }
          54.5833% {
            width:15.634px
          }
          55.0000% {
            width:15.636px
          }
          55.4167% {
            width:15.638px
          }
          55.8333% {
            width:15.639px
          }
          56.2500% {
            width:15.639px
          }
          56.6667% {
            width:15.64px
          }
          57.0833% {
            width:15.64px
          }
          57.5000% {
            width:15.64px
          }
          57.9167% {
            width:15.64px
          }
          58.3333% {
            width:15.64px
          }
          58.7500% {
            width:15.64px
          }
          59.1667% {
            width:15.64px
          }
          59.5833% {
            width:15.64px
          }
          60.0000% {
            width:15.64px
          }
          60.4167% {
            width:15.64px
          }
          60.8333% {
            width:15.64px
          }
          61.2500% {
            width:15.64px
          }
          61.6667% {
            width:15.64px
          }
          62.0833% {
            width:15.64px
          }
          62.5000% {
            width:15.64px
          }
          62.9167% {
            width:15.64px
          }
          63.3333% {
            width:15.64px
          }
          63.7500% {
            width:15.64px
          }
          64.1667% {
            width:15.64px
          }
          64.5833% {
            width:15.64px
          }
          65.0000% {
            width:15.64px
          }
          65.4167% {
            width:15.64px
          }
          65.8333% {
            width:15.64px
          }
          66.2500% {
            width:15.64px
          }
          66.6667% {
            width:15.64px
          }
          67.0833% {
            width:15.64px
          }
          67.5000% {
            width:15.64px
          }
          67.9167% {
            width:15.64px
          }
          68.3333% {
            width:15.64px
          }
          68.7500% {
            width:15.64px
          }
          69.1667% {
            width:15.64px
          }
          69.5833% {
            width:15.64px
          }
          70.0000% {
            width:15.64px
          }
          70.4167% {
            width:15.64px
          }
          70.8333% {
            width:15.64px
          }
          71.2500% {
            width:15.64px
          }
          71.6667% {
            width:15.64px
          }
          72.0833% {
            width:15.64px
          }
          72.5000% {
            width:15.64px
          }
          72.9167% {
            width:15.64px
          }
          73.3333% {
            width:15.64px
          }
          73.7500% {
            width:15.64px
          }
          74.1667% {
            width:15.64px
          }
          74.5833% {
            width:15.64px
          }
          75.0000% {
            width:15.64px
          }
          75.4167% {
            width:15.64px
          }
          75.8333% {
            width:15.64px
          }
          76.2500% {
            width:15.64px
          }
          76.6667% {
            width:15.64px
          }
          77.0833% {
            width:15.64px
          }
          77.5000% {
            width:15.64px
          }
          77.9167% {
            width:15.64px
          }
          78.3333% {
            width:15.64px
          }
          78.7500% {
            width:15.64px
          }
          79.1667% {
            width:15.64px
          }
          79.5833% {
            width:15.64px
          }
          80.0000% {
            width:15.64px
          }
          80.4167% {
            width:15.64px
          }
          80.8333% {
            width:15.64px
          }
          81.2500% {
            width:15.64px
          }
          81.6667% {
            width:15.64px
          }
          82.0833% {
            width:15.64px
          }
          82.5000% {
            width:15.64px
          }
          82.9167% {
            width:15.64px
          }
          83.3333% {
            width:15.64px
          }
          83.7500% {
            width:15.64px
          }
          84.1667% {
            width:15.64px
          }
          84.5833% {
            width:15.64px
          }
          85.0000% {
            width:15.64px
          }
          85.4167% {
            width:15.64px
          }
          85.8333% {
            width:15.64px
          }
          86.2500% {
            width:15.64px
          }
          86.6667% {
            width:15.64px
          }
          87.0833% {
            width:15.64px
          }
          87.5000% {
            width:15.64px
          }
          87.9167% {
            width:15.64px
          }
          88.3333% {
            width:15.64px
          }
          88.7500% {
            width:15.64px
          }
          89.1667% {
            width:15.64px
          }
          89.5833% {
            width:15.64px
          }
          90.0000% {
            width:15.64px
          }
          90.4167% {
            width:15.64px
          }
          90.8333% {
            width:15.64px
          }
          91.2500% {
            width:15.64px
          }
          91.6667% {
            width:15.64px
          }
          92.0833% {
            width:15.64px
          }
          92.5000% {
            width:15.64px
          }
          92.9167% {
            width:15.64px
          }
          93.3333% {
            width:15.64px
          }
          93.7500% {
            width:15.64px
          }
          94.1667% {
            width:15.64px
          }
          94.5833% {
            width:15.64px
          }
          95.0000% {
            width:15.64px
          }
          95.4167% {
            width:15.64px
          }
          95.8333% {
            width:15.64px
          }
          96.2500% {
            width:15.64px
          }
          96.6667% {
            width:15.64px
          }
          97.0833% {
            width:15.64px
          }
          97.5000% {
            width:15.64px
          }
          97.9167% {
            width:15.64px
          }
          98.3333% {
            width:15.64px
          }
          98.7500% {
            width:15.64px
          }
          99.1667% {
            width:15.64px
          }
          99.5833% {
            width:15.64px
          }
          100.0000% {
            width:15.64px
          }
        }
        @keyframes brake-power {
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
            opacity:0.061
          }
          17.5000% {
            opacity:0.121
          }
          17.9167% {
            opacity:0.179
          }
          18.3333% {
            opacity:0.236
          }
          18.7500% {
            opacity:0.291
          }
          19.1667% {
            opacity:0.344
          }
          19.5833% {
            opacity:0.396
          }
          20.0000% {
            opacity:0.446
          }
          20.4167% {
            opacity:0.494
          }
          20.8333% {
            opacity:0.54
          }
          21.2500% {
            opacity:0.584
          }
          21.6667% {
            opacity:0.626
          }
          22.0833% {
            opacity:0.666
          }
          22.5000% {
            opacity:0.703
          }
          22.9167% {
            opacity:0.739
          }
          23.3333% {
            opacity:0.773
          }
          23.7500% {
            opacity:0.804
          }
          24.1667% {
            opacity:0.833
          }
          24.5833% {
            opacity:0.86
          }
          25.0000% {
            opacity:0.885
          }
          25.4167% {
            opacity:0.907
          }
          25.8333% {
            opacity:0.928
          }
          26.2500% {
            opacity:0.946
          }
          26.6667% {
            opacity:0.962
          }
          27.0833% {
            opacity:0.976
          }
          27.5000% {
            opacity:0.988
          }
          27.9167% {
            opacity:0.998
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
            opacity:0.993
          }
          32.5000% {
            opacity:0.984
          }
          32.9167% {
            opacity:0.972
          }
          33.3333% {
            opacity:0.96
          }
          33.7500% {
            opacity:0.946
          }
          34.1667% {
            opacity:0.931
          }
          34.5833% {
            opacity:0.914
          }
          35.0000% {
            opacity:0.897
          }
          35.4167% {
            opacity:0.878
          }
          35.8333% {
            opacity:0.858
          }
          36.2500% {
            opacity:0.838
          }
          36.6667% {
            opacity:0.816
          }
          37.0833% {
            opacity:0.794
          }
          37.5000% {
            opacity:0.771
          }
          37.9167% {
            opacity:0.748
          }
          38.3333% {
            opacity:0.724
          }
          38.7500% {
            opacity:0.7
          }
          39.1667% {
            opacity:0.675
          }
          39.5833% {
            opacity:0.65
          }
          40.0000% {
            opacity:0.624
          }
          40.4167% {
            opacity:0.599
          }
          40.8333% {
            opacity:0.573
          }
          41.2500% {
            opacity:0.547
          }
          41.6667% {
            opacity:0.521
          }
          42.0833% {
            opacity:0.496
          }
          42.5000% {
            opacity:0.47
          }
          42.9167% {
            opacity:0.445
          }
          43.3333% {
            opacity:0.42
          }
          43.7500% {
            opacity:0.396
          }
          44.1667% {
            opacity:0.371
          }
          44.5833% {
            opacity:0.348
          }
          45.0000% {
            opacity:0.325
          }
          45.4167% {
            opacity:0.302
          }
          45.8333% {
            opacity:0.28
          }
          46.2500% {
            opacity:0.259
          }
          46.6667% {
            opacity:0.238
          }
          47.0833% {
            opacity:0.218
          }
          47.5000% {
            opacity:0.199
          }
          47.9167% {
            opacity:0.181
          }
          48.3333% {
            opacity:0.163
          }
          48.7500% {
            opacity:0.147
          }
          49.1667% {
            opacity:0.131
          }
          49.5833% {
            opacity:0.116
          }
          50.0000% {
            opacity:0.103
          }
          50.4167% {
            opacity:0.09
          }
          50.8333% {
            opacity:0.078
          }
          51.2500% {
            opacity:0.067
          }
          51.6667% {
            opacity:0.057
          }
          52.0833% {
            opacity:0.048
          }
          52.5000% {
            opacity:0.04
          }
          52.9167% {
            opacity:0.032
          }
          53.3333% {
            opacity:0.026
          }
          53.7500% {
            opacity:0.02
          }
          54.1667% {
            opacity:0.016
          }
          54.5833% {
            opacity:0.012
          }
          55.0000% {
            opacity:0.008
          }
          55.4167% {
            opacity:0.006
          }
          55.8333% {
            opacity:0.004
          }
          56.2500% {
            opacity:0.002
          }
          56.6667% {
            opacity:0.001
          }
          57.0833% {
            opacity:0.0
          }
          57.5000% {
            opacity:0.0
          }
          57.9167% {
            opacity:0.0
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
        @keyframes brake-torque {
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
            opacity:0.04
          }
          17.5000% {
            opacity:0.078
          }
          17.9167% {
            opacity:0.116
          }
          18.3333% {
            opacity:0.154
          }
          18.7500% {
            opacity:0.19
          }
          19.1667% {
            opacity:0.226
          }
          19.5833% {
            opacity:0.26
          }
          20.0000% {
            opacity:0.2944
          }
          20.4167% {
            opacity:0.328
          }
          20.8333% {
            opacity:0.36
          }
          21.2500% {
            opacity:0.392
          }
          21.6667% {
            opacity:0.422
          }
          22.0833% {
            opacity:0.452
          }
          22.5000% {
            opacity:0.482
          }
          22.9167% {
            opacity:0.51
          }
          23.3333% {
            opacity:0.5376
          }
          23.7500% {
            opacity:0.5644
          }
          24.1667% {
            opacity:0.5904
          }
          24.5833% {
            opacity:0.6156
          }
          25.0000% {
            opacity:0.64
          }
          25.4167% {
            opacity:0.6636
          }
          25.8333% {
            opacity:0.686
          }
          26.2500% {
            opacity:0.708
          }
          26.6667% {
            opacity:0.73
          }
          27.0833% {
            opacity:0.75
          }
          27.5000% {
            opacity:0.77
          }
          27.9167% {
            opacity:0.7884
          }
          28.3333% {
            opacity:0.806
          }
          28.7500% {
            opacity:0.824
          }
          29.1667% {
            opacity:0.84
          }
          29.5833% {
            opacity:0.856
          }
          30.0000% {
            opacity:0.8704
          }
          30.4167% {
            opacity:0.8844
          }
          30.8333% {
            opacity:0.8976
          }
          31.2500% {
            opacity:0.91
          }
          31.6667% {
            opacity:0.9216
          }
          32.0833% {
            opacity:0.9324
          }
          32.5000% {
            opacity:0.9424
          }
          32.9167% {
            opacity:0.9516
          }
          33.3333% {
            opacity:0.96
          }
          33.7500% {
            opacity:0.968
          }
          34.1667% {
            opacity:0.974
          }
          34.5833% {
            opacity:0.9804
          }
          35.0000% {
            opacity:0.9856
          }
          35.4167% {
            opacity:0.99
          }
          35.8333% {
            opacity:0.9936
          }
          36.2500% {
            opacity:0.996
          }
          36.6667% {
            opacity:0.998
          }
          37.0833% {
            opacity:1.0
          }
          37.5000% {
            opacity:1
          }
          37.9167% {
            opacity:0.9996
          }
          38.3333% {
            opacity:0.998
          }
          38.7500% {
            opacity:0.9964
          }
          39.1667% {
            opacity:0.9936
          }
          39.5833% {
            opacity:0.99
          }
          40.0000% {
            opacity:0.9856
          }
          40.4167% {
            opacity:0.9804
          }
          40.8333% {
            opacity:0.974
          }
          41.2500% {
            opacity:0.968
          }
          41.6667% {
            opacity:0.96
          }
          42.0833% {
            opacity:0.9516
          }
          42.5000% {
            opacity:0.942
          }
          42.9167% {
            opacity:0.932
          }
          43.3333% {
            opacity:0.9216
          }
          43.7500% {
            opacity:0.91
          }
          44.1667% {
            opacity:0.898
          }
          44.5833% {
            opacity:0.884
          }
          45.0000% {
            opacity:0.8704
          }
          45.4167% {
            opacity:0.856
          }
          45.8333% {
            opacity:0.84
          }
          46.2500% {
            opacity:0.824
          }
          46.6667% {
            opacity:0.8064
          }
          47.0833% {
            opacity:0.788
          }
          47.5000% {
            opacity:0.77
          }
          47.9167% {
            opacity:0.75
          }
          48.3333% {
            opacity:0.7296
          }
          48.7500% {
            opacity:0.708
          }
          49.1667% {
            opacity:0.686
          }
          49.5833% {
            opacity:0.6636
          }
          50.0000% {
            opacity:0.64
          }
          50.4167% {
            opacity:0.616
          }
          50.8333% {
            opacity:0.59
          }
          51.2500% {
            opacity:0.564
          }
          51.6667% {
            opacity:0.538
          }
          52.0833% {
            opacity:0.51
          }
          52.5000% {
            opacity:0.482
          }
          52.9167% {
            opacity:0.452
          }
          53.3333% {
            opacity:0.422
          }
          53.7500% {
            opacity:0.392
          }
          54.1667% {
            opacity:0.36
          }
          54.5833% {
            opacity:0.328
          }
          55.0000% {
            opacity:0.294
          }
          55.4167% {
            opacity:0.26
          }
          55.8333% {
            opacity:0.226
          }
          56.2500% {
            opacity:0.19
          }
          56.6667% {
            opacity:0.154
          }
          57.0833% {
            opacity:0.116
          }
          57.5000% {
            opacity:0.078
          }
          57.9167% {
            opacity:0.04
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
        @keyframes brake-cycle {
          0%,91.6667%,100% {
            opacity:0
          }
          4%,83.3333% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Regenerative Braking">
        <path class="road" d="M7 87H133"/>
        <g class="braking-cycle">
          <g class="car-position" style="transform:translateX(48.375px)">
            <path class="car-body" d="M12 76V62Q12 58 18 58H24L28 46H49L56 58H66Q70 58 70 64V76Z"/>
            <path class="window" d="M29 50H46L51 58H27Z"/>
            <g transform="translate(25,79)">
              <circle class="tire" r="7"/>
              <g class="wheel-turn" style="transform:rotate(395.955deg)">
                <path class="spoke" d="M-5 0H5M0 -5V5"/>
                <circle fill="#f3c977" cx="4" cy="0" r="1.3"/>
              </g>
            </g>
            <g transform="translate(61,79)">
              <circle class="tire" r="7"/>
              <g class="wheel-turn" style="transform:rotate(395.955deg)">
                <path class="spoke" d="M-5 0H5M0 -5V5"/>
                <circle fill="#f3c977" cx="4" cy="0" r="1.3"/>
              </g>
            </g>
          </g>
          <path class="zoom" d="M23 99V93H41"/>
          <circle class="zoom-wheel" cx="23" cy="114" r="10"/>
          <g transform="translate(23,114)">
            <g class="wheel-turn" style="transform:rotate(395.955deg)">
              <path class="spoke" d="M-5 0H5M0 -5V5"/>
              <circle fill="#f3c977" cx="4" cy="0" r="1.3"/>
            </g>
          </g>
          <path class="shaft" d="M33 114H45"/>
          <rect class="motor" x="45" y="105" width="18" height="18" rx="3"/>
          <path class="motor-symbol" d="M48 114Q51 106 54 114T60 114"/>
          <path class="conductor" d="M63 114H90"/>
          <g class="brake-torque">
            <path d="M36 114A13 13 0 0 0 23 101"/>
            <path d="M27 98L23 101L27 104"/>
          </g>
          <path class="energy-flow" d="M68 114H84M79 110L84 114L79 118"/>
          <rect class="battery" x="90" y="106" width="29" height="16" rx="2"/>
          <path class="battery-terminal" d="M119 111H122V117H119"/>
          <rect class="charge" x="93" y="109" width="12.88" height="10"/>
          <path class="heat-flow" d="M54 125V132M51 129L54 132L57 129"/>
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

if (!customElements.get("concept-regenerative-braking")) {
  customElements.define("concept-regenerative-braking", ConceptRegenerativeBraking);
}
