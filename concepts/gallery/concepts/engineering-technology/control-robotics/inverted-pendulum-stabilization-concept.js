// Inverted Pendulum Stabilization. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptInvertedPendulumStabilization extends HTMLElement {
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
        .cycle {
          animation:cycle 12s linear infinite
        }
        @keyframes cycle {
          0%,91.6667% {
            opacity:1
          }
          95%,96.6667% {
            opacity:0
          }
          100% {
            opacity:1
          }
        }
        .cart {
          transform:translateX(48px);
          animation:cart 12s linear infinite
        }
        .pole {
          transform:translate(48px,94px);
          animation:pole 12s linear infinite
        }
        .drive {
          opacity:0;
          animation:drive 12s linear infinite
        }
        @keyframes cart {
          0.0000% {
            transform:translateX(48.0000px)
          }
          0.4167% {
            transform:translateX(48.3068px)
          }
          0.8333% {
            transform:translateX(49.1558px)
          }
          1.2500% {
            transform:translateX(50.4484px)
          }
          1.6667% {
            transform:translateX(52.0959px)
          }
          2.0833% {
            transform:translateX(54.0195px)
          }
          2.5000% {
            transform:translateX(56.1494px)
          }
          2.9167% {
            transform:translateX(58.4240px)
          }
          3.3333% {
            transform:translateX(60.7900px)
          }
          3.7500% {
            transform:translateX(63.2012px)
          }
          4.1667% {
            transform:translateX(65.6183px)
          }
          4.5833% {
            transform:translateX(68.0079px)
          }
          5.0000% {
            transform:translateX(70.3423px)
          }
          5.4167% {
            transform:translateX(72.5984px)
          }
          5.8333% {
            transform:translateX(74.7575px)
          }
          6.2500% {
            transform:translateX(76.8050px)
          }
          6.6667% {
            transform:translateX(78.7294px)
          }
          7.0833% {
            transform:translateX(80.5220px)
          }
          7.5000% {
            transform:translateX(82.1769px)
          }
          7.9167% {
            transform:translateX(83.6904px)
          }
          8.3333% {
            transform:translateX(85.0604px)
          }
          8.7500% {
            transform:translateX(86.2869px)
          }
          9.1667% {
            transform:translateX(87.3710px)
          }
          9.5833% {
            transform:translateX(88.3149px)
          }
          10.0000% {
            transform:translateX(89.1221px)
          }
          10.4167% {
            transform:translateX(89.7966px)
          }
          10.8333% {
            transform:translateX(90.3432px)
          }
          11.2500% {
            transform:translateX(90.7673px)
          }
          11.6667% {
            transform:translateX(91.0745px)
          }
          12.0833% {
            transform:translateX(91.2708px)
          }
          12.5000% {
            transform:translateX(91.3624px)
          }
          12.9167% {
            transform:translateX(91.3557px)
          }
          13.3333% {
            transform:translateX(91.2570px)
          }
          13.7500% {
            transform:translateX(91.0727px)
          }
          14.1667% {
            transform:translateX(90.8090px)
          }
          14.5833% {
            transform:translateX(90.4722px)
          }
          15.0000% {
            transform:translateX(90.0682px)
          }
          15.4167% {
            transform:translateX(89.6030px)
          }
          15.8333% {
            transform:translateX(89.0822px)
          }
          16.2500% {
            transform:translateX(88.5112px)
          }
          16.6667% {
            transform:translateX(87.8954px)
          }
          17.0833% {
            transform:translateX(87.2395px)
          }
          17.5000% {
            transform:translateX(86.5485px)
          }
          17.9167% {
            transform:translateX(85.8268px)
          }
          18.3333% {
            transform:translateX(85.0785px)
          }
          18.7500% {
            transform:translateX(84.3078px)
          }
          19.1667% {
            transform:translateX(83.5183px)
          }
          19.5833% {
            transform:translateX(82.7135px)
          }
          20.0000% {
            transform:translateX(81.8967px)
          }
          20.4167% {
            transform:translateX(81.0710px)
          }
          20.8333% {
            transform:translateX(80.2390px)
          }
          21.2500% {
            transform:translateX(79.4035px)
          }
          21.6667% {
            transform:translateX(78.5667px)
          }
          22.0833% {
            transform:translateX(77.7310px)
          }
          22.5000% {
            transform:translateX(76.8982px)
          }
          22.9167% {
            transform:translateX(76.0702px)
          }
          23.3333% {
            transform:translateX(75.2487px)
          }
          23.7500% {
            transform:translateX(74.4351px)
          }
          24.1667% {
            transform:translateX(73.6308px)
          }
          24.5833% {
            transform:translateX(72.8370px)
          }
          25.0000% {
            transform:translateX(72.0547px)
          }
          25.4167% {
            transform:translateX(71.2850px)
          }
          25.8333% {
            transform:translateX(70.5285px)
          }
          26.2500% {
            transform:translateX(69.7861px)
          }
          26.6667% {
            transform:translateX(69.0583px)
          }
          27.0833% {
            transform:translateX(68.3456px)
          }
          27.5000% {
            transform:translateX(67.6485px)
          }
          27.9167% {
            transform:translateX(66.9674px)
          }
          28.3333% {
            transform:translateX(66.3024px)
          }
          28.7500% {
            transform:translateX(65.6539px)
          }
          29.1667% {
            transform:translateX(65.0218px)
          }
          29.5833% {
            transform:translateX(64.4064px)
          }
          30.0000% {
            transform:translateX(63.8077px)
          }
          30.4167% {
            transform:translateX(63.2256px)
          }
          30.8333% {
            transform:translateX(62.6601px)
          }
          31.2500% {
            transform:translateX(62.1111px)
          }
          31.6667% {
            transform:translateX(61.5784px)
          }
          32.0833% {
            transform:translateX(61.0619px)
          }
          32.5000% {
            transform:translateX(60.5614px)
          }
          32.9167% {
            transform:translateX(60.0767px)
          }
          33.3333% {
            transform:translateX(59.6075px)
          }
          33.7500% {
            transform:translateX(59.1535px)
          }
          34.1667% {
            transform:translateX(58.7146px)
          }
          34.5833% {
            transform:translateX(58.2904px)
          }
          35.0000% {
            transform:translateX(57.8806px)
          }
          35.4167% {
            transform:translateX(57.4849px)
          }
          35.8333% {
            transform:translateX(57.1029px)
          }
          36.2500% {
            transform:translateX(56.7344px)
          }
          36.6667% {
            transform:translateX(56.3791px)
          }
          37.0833% {
            transform:translateX(56.0365px)
          }
          37.5000% {
            transform:translateX(55.7063px)
          }
          37.9167% {
            transform:translateX(55.3883px)
          }
          38.3333% {
            transform:translateX(55.0820px)
          }
          38.7500% {
            transform:translateX(54.7872px)
          }
          39.1667% {
            transform:translateX(54.5035px)
          }
          39.5833% {
            transform:translateX(54.2305px)
          }
          40.0000% {
            transform:translateX(53.9680px)
          }
          40.4167% {
            transform:translateX(53.7156px)
          }
          40.8333% {
            transform:translateX(53.4730px)
          }
          41.2500% {
            transform:translateX(53.2398px)
          }
          41.6667% {
            transform:translateX(53.0159px)
          }
          42.0833% {
            transform:translateX(52.8007px)
          }
          42.5000% {
            transform:translateX(52.5942px)
          }
          42.9167% {
            transform:translateX(52.3959px)
          }
          43.3333% {
            transform:translateX(52.2056px)
          }
          43.7500% {
            transform:translateX(52.0230px)
          }
          44.1667% {
            transform:translateX(51.8478px)
          }
          44.5833% {
            transform:translateX(51.6798px)
          }
          45.0000% {
            transform:translateX(51.5187px)
          }
          45.4167% {
            transform:translateX(51.3642px)
          }
          45.8333% {
            transform:translateX(51.2162px)
          }
          46.2500% {
            transform:translateX(51.0743px)
          }
          46.6667% {
            transform:translateX(50.9383px)
          }
          47.0833% {
            transform:translateX(50.8080px)
          }
          47.5000% {
            transform:translateX(50.6833px)
          }
          47.9167% {
            transform:translateX(50.5638px)
          }
          48.3333% {
            transform:translateX(50.4494px)
          }
          48.7500% {
            transform:translateX(50.3398px)
          }
          49.1667% {
            transform:translateX(50.2350px)
          }
          49.5833% {
            transform:translateX(50.1347px)
          }
          50.0000% {
            transform:translateX(50.0386px)
          }
          50.4167% {
            transform:translateX(49.9467px)
          }
          50.8333% {
            transform:translateX(49.8588px)
          }
          51.2500% {
            transform:translateX(49.7748px)
          }
          51.6667% {
            transform:translateX(49.6943px)
          }
          52.0833% {
            transform:translateX(49.6174px)
          }
          52.5000% {
            transform:translateX(49.5439px)
          }
          52.9167% {
            transform:translateX(49.4736px)
          }
          53.3333% {
            transform:translateX(49.4064px)
          }
          53.7500% {
            transform:translateX(49.3421px)
          }
          54.1667% {
            transform:translateX(49.2807px)
          }
          54.5833% {
            transform:translateX(49.2221px)
          }
          55.0000% {
            transform:translateX(49.1660px)
          }
          55.4167% {
            transform:translateX(49.1124px)
          }
          55.8333% {
            transform:translateX(49.0613px)
          }
          56.2500% {
            transform:translateX(49.0124px)
          }
          56.6667% {
            transform:translateX(48.9657px)
          }
          57.0833% {
            transform:translateX(48.9211px)
          }
          57.5000% {
            transform:translateX(48.8785px)
          }
          57.9167% {
            transform:translateX(48.8378px)
          }
          58.3333% {
            transform:translateX(48.7990px)
          }
          58.7500% {
            transform:translateX(48.7619px)
          }
          59.1667% {
            transform:translateX(48.7266px)
          }
          59.5833% {
            transform:translateX(48.6928px)
          }
          60.0000% {
            transform:translateX(48.6605px)
          }
          60.4167% {
            transform:translateX(48.6298px)
          }
          60.8333% {
            transform:translateX(48.6004px)
          }
          61.2500% {
            transform:translateX(48.5724px)
          }
          61.6667% {
            transform:translateX(48.5456px)
          }
          62.0833% {
            transform:translateX(48.5201px)
          }
          62.5000% {
            transform:translateX(48.4957px)
          }
          62.9167% {
            transform:translateX(48.4725px)
          }
          63.3333% {
            transform:translateX(48.4504px)
          }
          63.7500% {
            transform:translateX(48.4292px)
          }
          64.1667% {
            transform:translateX(48.4091px)
          }
          64.5833% {
            transform:translateX(48.3898px)
          }
          65.0000% {
            transform:translateX(48.3715px)
          }
          65.4167% {
            transform:translateX(48.3540px)
          }
          65.8333% {
            transform:translateX(48.3373px)
          }
          66.2500% {
            transform:translateX(48.3214px)
          }
          66.6667% {
            transform:translateX(48.3062px)
          }
          67.0833% {
            transform:translateX(48.2918px)
          }
          67.5000% {
            transform:translateX(48.2780px)
          }
          67.9167% {
            transform:translateX(48.2648px)
          }
          68.3333% {
            transform:translateX(48.2523px)
          }
          68.7500% {
            transform:translateX(48.2404px)
          }
          69.1667% {
            transform:translateX(48.2290px)
          }
          69.5833% {
            transform:translateX(48.2181px)
          }
          70.0000% {
            transform:translateX(48.2078px)
          }
          70.4167% {
            transform:translateX(48.1979px)
          }
          70.8333% {
            transform:translateX(48.1885px)
          }
          71.2500% {
            transform:translateX(48.1795px)
          }
          71.6667% {
            transform:translateX(48.1710px)
          }
          72.0833% {
            transform:translateX(48.1629px)
          }
          72.5000% {
            transform:translateX(48.1551px)
          }
          72.9167% {
            transform:translateX(48.1477px)
          }
          73.3333% {
            transform:translateX(48.1407px)
          }
          73.7500% {
            transform:translateX(48.1340px)
          }
          74.1667% {
            transform:translateX(48.1276px)
          }
          74.5833% {
            transform:translateX(48.1215px)
          }
          75.0000% {
            transform:translateX(48.1157px)
          }
          75.4167% {
            transform:translateX(48.1102px)
          }
          75.8333% {
            transform:translateX(48.1049px)
          }
          76.2500% {
            transform:translateX(48.0999px)
          }
          76.6667% {
            transform:translateX(48.0951px)
          }
          77.0833% {
            transform:translateX(48.0906px)
          }
          77.5000% {
            transform:translateX(48.0862px)
          }
          77.9167% {
            transform:translateX(48.0821px)
          }
          78.3333% {
            transform:translateX(48.0782px)
          }
          78.7500% {
            transform:translateX(48.0744px)
          }
          79.1667% {
            transform:translateX(48.0709px)
          }
          79.5833% {
            transform:translateX(48.0675px)
          }
          80.0000% {
            transform:translateX(48.0642px)
          }
          80.4167% {
            transform:translateX(48.0612px)
          }
          80.8333% {
            transform:translateX(48.0582px)
          }
          81.2500% {
            transform:translateX(48.0554px)
          }
          81.6667% {
            transform:translateX(48.0528px)
          }
          82.0833% {
            transform:translateX(48.0502px)
          }
          82.5000% {
            transform:translateX(48.0478px)
          }
          82.9167% {
            transform:translateX(48.0455px)
          }
          83.3333% {
            transform:translateX(48.0433px)
          }
          95% {
            transform:translateX(48.043px)
          }
          95.01%,100% {
            transform:translateX(48px)
          }
        }
        @keyframes pole {
          0.0000% {
            transform:translate(48.0000px,94px) rotate(10.0000deg)
          }
          0.4167% {
            transform:translate(48.3068px,94px) rotate(9.8068deg)
          }
          0.8333% {
            transform:translate(49.1558px,94px) rotate(9.2957deg)
          }
          1.2500% {
            transform:translate(50.4484px,94px) rotate(8.5552deg)
          }
          1.6667% {
            transform:translate(52.0959px,94px) rotate(7.6577deg)
          }
          2.0833% {
            transform:translate(54.0195px,94px) rotate(6.6622deg)
          }
          2.5000% {
            transform:translate(56.1494px,94px) rotate(5.6163deg)
          }
          2.9167% {
            transform:translate(58.4240px,94px) rotate(4.5578deg)
          }
          3.3333% {
            transform:translate(60.7900px,94px) rotate(3.5161deg)
          }
          3.7500% {
            transform:translate(63.2012px,94px) rotate(2.5137deg)
          }
          4.1667% {
            transform:translate(65.6183px,94px) rotate(1.5669deg)
          }
          4.5833% {
            transform:translate(68.0079px,94px) rotate(0.6872deg)
          }
          5.0000% {
            transform:translate(70.3423px,94px) rotate(-0.1178deg)
          }
          5.4167% {
            transform:translate(72.5984px,94px) rotate(-0.8440deg)
          }
          5.8333% {
            transform:translate(74.7575px,94px) rotate(-1.4899deg)
          }
          6.2500% {
            transform:translate(76.8050px,94px) rotate(-2.0558deg)
          }
          6.6667% {
            transform:translate(78.7294px,94px) rotate(-2.5437deg)
          }
          7.0833% {
            transform:translate(80.5220px,94px) rotate(-2.9568deg)
          }
          7.5000% {
            transform:translate(82.1769px,94px) rotate(-3.2989deg)
          }
          7.9167% {
            transform:translate(83.6904px,94px) rotate(-3.5747deg)
          }
          8.3333% {
            transform:translate(85.0604px,94px) rotate(-3.7888deg)
          }
          8.7500% {
            transform:translate(86.2869px,94px) rotate(-3.9465deg)
          }
          9.1667% {
            transform:translate(87.3710px,94px) rotate(-4.0527deg)
          }
          9.5833% {
            transform:translate(88.3149px,94px) rotate(-4.1126deg)
          }
          10.0000% {
            transform:translate(89.1221px,94px) rotate(-4.1310deg)
          }
          10.4167% {
            transform:translate(89.7966px,94px) rotate(-4.1127deg)
          }
          10.8333% {
            transform:translate(90.3432px,94px) rotate(-4.0622deg)
          }
          11.2500% {
            transform:translate(90.7673px,94px) rotate(-3.9839deg)
          }
          11.6667% {
            transform:translate(91.0745px,94px) rotate(-3.8817deg)
          }
          12.0833% {
            transform:translate(91.2708px,94px) rotate(-3.7594deg)
          }
          12.5000% {
            transform:translate(91.3624px,94px) rotate(-3.6203deg)
          }
          12.9167% {
            transform:translate(91.3557px,94px) rotate(-3.4677deg)
          }
          13.3333% {
            transform:translate(91.2570px,94px) rotate(-3.3044deg)
          }
          13.7500% {
            transform:translate(91.0727px,94px) rotate(-3.1330deg)
          }
          14.1667% {
            transform:translate(90.8090px,94px) rotate(-2.9559deg)
          }
          14.5833% {
            transform:translate(90.4722px,94px) rotate(-2.7752deg)
          }
          15.0000% {
            transform:translate(90.0682px,94px) rotate(-2.5926deg)
          }
          15.4167% {
            transform:translate(89.6030px,94px) rotate(-2.4098deg)
          }
          15.8333% {
            transform:translate(89.0822px,94px) rotate(-2.2282deg)
          }
          16.2500% {
            transform:translate(88.5112px,94px) rotate(-2.0491deg)
          }
          16.6667% {
            transform:translate(87.8954px,94px) rotate(-1.8735deg)
          }
          17.0833% {
            transform:translate(87.2395px,94px) rotate(-1.7022deg)
          }
          17.5000% {
            transform:translate(86.5485px,94px) rotate(-1.5360deg)
          }
          17.9167% {
            transform:translate(85.8268px,94px) rotate(-1.3755deg)
          }
          18.3333% {
            transform:translate(85.0785px,94px) rotate(-1.2212deg)
          }
          18.7500% {
            transform:translate(84.3078px,94px) rotate(-1.0734deg)
          }
          19.1667% {
            transform:translate(83.5183px,94px) rotate(-0.9324deg)
          }
          19.5833% {
            transform:translate(82.7135px,94px) rotate(-0.7984deg)
          }
          20.0000% {
            transform:translate(81.8967px,94px) rotate(-0.6714deg)
          }
          20.4167% {
            transform:translate(81.0710px,94px) rotate(-0.5516deg)
          }
          20.8333% {
            transform:translate(80.2390px,94px) rotate(-0.4388deg)
          }
          21.2500% {
            transform:translate(79.4035px,94px) rotate(-0.3331deg)
          }
          21.6667% {
            transform:translate(78.5667px,94px) rotate(-0.2344deg)
          }
          22.0833% {
            transform:translate(77.7310px,94px) rotate(-0.1424deg)
          }
          22.5000% {
            transform:translate(76.8982px,94px) rotate(-0.0570deg)
          }
          22.9167% {
            transform:translate(76.0702px,94px) rotate(0.0220deg)
          }
          23.3333% {
            transform:translate(75.2487px,94px) rotate(0.0947deg)
          }
          23.7500% {
            transform:translate(74.4351px,94px) rotate(0.1615deg)
          }
          24.1667% {
            transform:translate(73.6308px,94px) rotate(0.2226deg)
          }
          24.5833% {
            transform:translate(72.8370px,94px) rotate(0.2782deg)
          }
          25.0000% {
            transform:translate(72.0547px,94px) rotate(0.3285deg)
          }
          25.4167% {
            transform:translate(71.2850px,94px) rotate(0.3739deg)
          }
          25.8333% {
            transform:translate(70.5285px,94px) rotate(0.4147deg)
          }
          26.2500% {
            transform:translate(69.7861px,94px) rotate(0.4509deg)
          }
          26.6667% {
            transform:translate(69.0583px,94px) rotate(0.4830deg)
          }
          27.0833% {
            transform:translate(68.3456px,94px) rotate(0.5111deg)
          }
          27.5000% {
            transform:translate(67.6485px,94px) rotate(0.5355deg)
          }
          27.9167% {
            transform:translate(66.9674px,94px) rotate(0.5565deg)
          }
          28.3333% {
            transform:translate(66.3024px,94px) rotate(0.5742deg)
          }
          28.7500% {
            transform:translate(65.6539px,94px) rotate(0.5890deg)
          }
          29.1667% {
            transform:translate(65.0218px,94px) rotate(0.6009deg)
          }
          29.5833% {
            transform:translate(64.4064px,94px) rotate(0.6103deg)
          }
          30.0000% {
            transform:translate(63.8077px,94px) rotate(0.6172deg)
          }
          30.4167% {
            transform:translate(63.2256px,94px) rotate(0.6220deg)
          }
          30.8333% {
            transform:translate(62.6601px,94px) rotate(0.6247deg)
          }
          31.2500% {
            transform:translate(62.1111px,94px) rotate(0.6256deg)
          }
          31.6667% {
            transform:translate(61.5784px,94px) rotate(0.6248deg)
          }
          32.0833% {
            transform:translate(61.0619px,94px) rotate(0.6224deg)
          }
          32.5000% {
            transform:translate(60.5614px,94px) rotate(0.6187deg)
          }
          32.9167% {
            transform:translate(60.0767px,94px) rotate(0.6137deg)
          }
          33.3333% {
            transform:translate(59.6075px,94px) rotate(0.6075deg)
          }
          33.7500% {
            transform:translate(59.1535px,94px) rotate(0.6004deg)
          }
          34.1667% {
            transform:translate(58.7146px,94px) rotate(0.5923deg)
          }
          34.5833% {
            transform:translate(58.2904px,94px) rotate(0.5835deg)
          }
          35.0000% {
            transform:translate(57.8806px,94px) rotate(0.5739deg)
          }
          35.4167% {
            transform:translate(57.4849px,94px) rotate(0.5638deg)
          }
          35.8333% {
            transform:translate(57.1029px,94px) rotate(0.5531deg)
          }
          36.2500% {
            transform:translate(56.7344px,94px) rotate(0.5420deg)
          }
          36.6667% {
            transform:translate(56.3791px,94px) rotate(0.5305deg)
          }
          37.0833% {
            transform:translate(56.0365px,94px) rotate(0.5186deg)
          }
          37.5000% {
            transform:translate(55.7063px,94px) rotate(0.5066deg)
          }
          37.9167% {
            transform:translate(55.3883px,94px) rotate(0.4943deg)
          }
          38.3333% {
            transform:translate(55.0820px,94px) rotate(0.4819deg)
          }
          38.7500% {
            transform:translate(54.7872px,94px) rotate(0.4694deg)
          }
          39.1667% {
            transform:translate(54.5035px,94px) rotate(0.4569deg)
          }
          39.5833% {
            transform:translate(54.2305px,94px) rotate(0.4444deg)
          }
          40.0000% {
            transform:translate(53.9680px,94px) rotate(0.4319deg)
          }
          40.4167% {
            transform:translate(53.7156px,94px) rotate(0.4194deg)
          }
          40.8333% {
            transform:translate(53.4730px,94px) rotate(0.4070deg)
          }
          41.2500% {
            transform:translate(53.2398px,94px) rotate(0.3948deg)
          }
          41.6667% {
            transform:translate(53.0159px,94px) rotate(0.3826deg)
          }
          42.0833% {
            transform:translate(52.8007px,94px) rotate(0.3706deg)
          }
          42.5000% {
            transform:translate(52.5942px,94px) rotate(0.3588deg)
          }
          42.9167% {
            transform:translate(52.3959px,94px) rotate(0.3472deg)
          }
          43.3333% {
            transform:translate(52.2056px,94px) rotate(0.3358deg)
          }
          43.7500% {
            transform:translate(52.0230px,94px) rotate(0.3246deg)
          }
          44.1667% {
            transform:translate(51.8478px,94px) rotate(0.3136deg)
          }
          44.5833% {
            transform:translate(51.6798px,94px) rotate(0.3029deg)
          }
          45.0000% {
            transform:translate(51.5187px,94px) rotate(0.2924deg)
          }
          45.4167% {
            transform:translate(51.3642px,94px) rotate(0.2821deg)
          }
          45.8333% {
            transform:translate(51.2162px,94px) rotate(0.2721deg)
          }
          46.2500% {
            transform:translate(51.0743px,94px) rotate(0.2624deg)
          }
          46.6667% {
            transform:translate(50.9383px,94px) rotate(0.2529deg)
          }
          47.0833% {
            transform:translate(50.8080px,94px) rotate(0.2436deg)
          }
          47.5000% {
            transform:translate(50.6833px,94px) rotate(0.2346deg)
          }
          47.9167% {
            transform:translate(50.5638px,94px) rotate(0.2259deg)
          }
          48.3333% {
            transform:translate(50.4494px,94px) rotate(0.2174deg)
          }
          48.7500% {
            transform:translate(50.3398px,94px) rotate(0.2092deg)
          }
          49.1667% {
            transform:translate(50.2350px,94px) rotate(0.2012deg)
          }
          49.5833% {
            transform:translate(50.1347px,94px) rotate(0.1934deg)
          }
          50.0000% {
            transform:translate(50.0386px,94px) rotate(0.1860deg)
          }
          50.4167% {
            transform:translate(49.9467px,94px) rotate(0.1787deg)
          }
          50.8333% {
            transform:translate(49.8588px,94px) rotate(0.1717deg)
          }
          51.2500% {
            transform:translate(49.7748px,94px) rotate(0.1649deg)
          }
          51.6667% {
            transform:translate(49.6943px,94px) rotate(0.1584deg)
          }
          52.0833% {
            transform:translate(49.6174px,94px) rotate(0.1520deg)
          }
          52.5000% {
            transform:translate(49.5439px,94px) rotate(0.1459deg)
          }
          52.9167% {
            transform:translate(49.4736px,94px) rotate(0.1400deg)
          }
          53.3333% {
            transform:translate(49.4064px,94px) rotate(0.1343deg)
          }
          53.7500% {
            transform:translate(49.3421px,94px) rotate(0.1288deg)
          }
          54.1667% {
            transform:translate(49.2807px,94px) rotate(0.1236deg)
          }
          54.5833% {
            transform:translate(49.2221px,94px) rotate(0.1185deg)
          }
          55.0000% {
            transform:translate(49.1660px,94px) rotate(0.1135deg)
          }
          55.4167% {
            transform:translate(49.1124px,94px) rotate(0.1088deg)
          }
          55.8333% {
            transform:translate(49.0613px,94px) rotate(0.1043deg)
          }
          56.2500% {
            transform:translate(49.0124px,94px) rotate(0.0999deg)
          }
          56.6667% {
            transform:translate(48.9657px,94px) rotate(0.0957deg)
          }
          57.0833% {
            transform:translate(48.9211px,94px) rotate(0.0916deg)
          }
          57.5000% {
            transform:translate(48.8785px,94px) rotate(0.0878deg)
          }
          57.9167% {
            transform:translate(48.8378px,94px) rotate(0.0840deg)
          }
          58.3333% {
            transform:translate(48.7990px,94px) rotate(0.0804deg)
          }
          58.7500% {
            transform:translate(48.7619px,94px) rotate(0.0770deg)
          }
          59.1667% {
            transform:translate(48.7266px,94px) rotate(0.0737deg)
          }
          59.5833% {
            transform:translate(48.6928px,94px) rotate(0.0705deg)
          }
          60.0000% {
            transform:translate(48.6605px,94px) rotate(0.0674deg)
          }
          60.4167% {
            transform:translate(48.6298px,94px) rotate(0.0645deg)
          }
          60.8333% {
            transform:translate(48.6004px,94px) rotate(0.0617deg)
          }
          61.2500% {
            transform:translate(48.5724px,94px) rotate(0.0590deg)
          }
          61.6667% {
            transform:translate(48.5456px,94px) rotate(0.0564deg)
          }
          62.0833% {
            transform:translate(48.5201px,94px) rotate(0.0539deg)
          }
          62.5000% {
            transform:translate(48.4957px,94px) rotate(0.0516deg)
          }
          62.9167% {
            transform:translate(48.4725px,94px) rotate(0.0493deg)
          }
          63.3333% {
            transform:translate(48.4504px,94px) rotate(0.0471deg)
          }
          63.7500% {
            transform:translate(48.4292px,94px) rotate(0.0450deg)
          }
          64.1667% {
            transform:translate(48.4091px,94px) rotate(0.0430deg)
          }
          64.5833% {
            transform:translate(48.3898px,94px) rotate(0.0411deg)
          }
          65.0000% {
            transform:translate(48.3715px,94px) rotate(0.0393deg)
          }
          65.4167% {
            transform:translate(48.3540px,94px) rotate(0.0375deg)
          }
          65.8333% {
            transform:translate(48.3373px,94px) rotate(0.0358deg)
          }
          66.2500% {
            transform:translate(48.3214px,94px) rotate(0.0342deg)
          }
          66.6667% {
            transform:translate(48.3062px,94px) rotate(0.0327deg)
          }
          67.0833% {
            transform:translate(48.2918px,94px) rotate(0.0312deg)
          }
          67.5000% {
            transform:translate(48.2780px,94px) rotate(0.0298deg)
          }
          67.9167% {
            transform:translate(48.2648px,94px) rotate(0.0284deg)
          }
          68.3333% {
            transform:translate(48.2523px,94px) rotate(0.0272deg)
          }
          68.7500% {
            transform:translate(48.2404px,94px) rotate(0.0259deg)
          }
          69.1667% {
            transform:translate(48.2290px,94px) rotate(0.0247deg)
          }
          69.5833% {
            transform:translate(48.2181px,94px) rotate(0.0236deg)
          }
          70.0000% {
            transform:translate(48.2078px,94px) rotate(0.0225deg)
          }
          70.4167% {
            transform:translate(48.1979px,94px) rotate(0.0215deg)
          }
          70.8333% {
            transform:translate(48.1885px,94px) rotate(0.0205deg)
          }
          71.2500% {
            transform:translate(48.1795px,94px) rotate(0.0196deg)
          }
          71.6667% {
            transform:translate(48.1710px,94px) rotate(0.0187deg)
          }
          72.0833% {
            transform:translate(48.1629px,94px) rotate(0.0178deg)
          }
          72.5000% {
            transform:translate(48.1551px,94px) rotate(0.0170deg)
          }
          72.9167% {
            transform:translate(48.1477px,94px) rotate(0.0162deg)
          }
          73.3333% {
            transform:translate(48.1407px,94px) rotate(0.0155deg)
          }
          73.7500% {
            transform:translate(48.1340px,94px) rotate(0.0148deg)
          }
          74.1667% {
            transform:translate(48.1276px,94px) rotate(0.0141deg)
          }
          74.5833% {
            transform:translate(48.1215px,94px) rotate(0.0134deg)
          }
          75.0000% {
            transform:translate(48.1157px,94px) rotate(0.0128deg)
          }
          75.4167% {
            transform:translate(48.1102px,94px) rotate(0.0122deg)
          }
          75.8333% {
            transform:translate(48.1049px,94px) rotate(0.0116deg)
          }
          76.2500% {
            transform:translate(48.0999px,94px) rotate(0.0111deg)
          }
          76.6667% {
            transform:translate(48.0951px,94px) rotate(0.0106deg)
          }
          77.0833% {
            transform:translate(48.0906px,94px) rotate(0.0101deg)
          }
          77.5000% {
            transform:translate(48.0862px,94px) rotate(0.0096deg)
          }
          77.9167% {
            transform:translate(48.0821px,94px) rotate(0.0092deg)
          }
          78.3333% {
            transform:translate(48.0782px,94px) rotate(0.0087deg)
          }
          78.7500% {
            transform:translate(48.0744px,94px) rotate(0.0083deg)
          }
          79.1667% {
            transform:translate(48.0709px,94px) rotate(0.0079deg)
          }
          79.5833% {
            transform:translate(48.0675px,94px) rotate(0.0076deg)
          }
          80.0000% {
            transform:translate(48.0642px,94px) rotate(0.0072deg)
          }
          80.4167% {
            transform:translate(48.0612px,94px) rotate(0.0069deg)
          }
          80.8333% {
            transform:translate(48.0582px,94px) rotate(0.0066deg)
          }
          81.2500% {
            transform:translate(48.0554px,94px) rotate(0.0062deg)
          }
          81.6667% {
            transform:translate(48.0528px,94px) rotate(0.0060deg)
          }
          82.0833% {
            transform:translate(48.0502px,94px) rotate(0.0057deg)
          }
          82.5000% {
            transform:translate(48.0478px,94px) rotate(0.0054deg)
          }
          82.9167% {
            transform:translate(48.0455px,94px) rotate(0.0051deg)
          }
          83.3333% {
            transform:translate(48.0433px,94px) rotate(0.0049deg)
          }
          95% {
            transform:translate(48.043px,94px) rotate(0.005deg)
          }
          95.01%,100% {
            transform:translate(48px,94px) rotate(10deg)
          }
        }
        @keyframes drive {
          0.0000% {
            opacity:1;
            d:path("M48.000 124h15.298m-3.000-2 3 2-3 2")
          }
          0.4167% {
            opacity:1;
            d:path("M48.307 124h12.866m-3.000-2 3 2-3 2")
          }
          0.8333% {
            opacity:1;
            d:path("M49.156 124h10.642m-3.000-2 3 2-3 2")
          }
          1.2500% {
            opacity:1;
            d:path("M50.448 124h8.621m-3.000-2 3 2-3 2")
          }
          1.6667% {
            opacity:1;
            d:path("M52.096 124h6.797m-3.000-2 3 2-3 2")
          }
          2.0833% {
            opacity:1;
            d:path("M54.020 124h5.165m-3.000-2 3 2-3 2")
          }
          2.5000% {
            opacity:1;
            d:path("M56.149 124h3.716m-3.000-2 3 2-3 2")
          }
          2.9167% {
            opacity:1;
            d:path("M58.424 124h2.442m-3.000-2 3 2-3 2")
          }
          3.3333% {
            opacity:1;
            d:path("M60.790 124h1.331m-3.000-2 3 2-3 2")
          }
          3.7500% {
            opacity:1;
            d:path("M63.201 124h0.371m-3.000-2 3 2-3 2")
          }
          4.1667% {
            opacity:1;
            d:path("M65.618 124h-0.450m3.000-2 -3 2 3 2")
          }
          4.5833% {
            opacity:1;
            d:path("M68.008 124h-1.145m3.000-2 -3 2 3 2")
          }
          5.0000% {
            opacity:1;
            d:path("M70.342 124h-1.727m3.000-2 -3 2 3 2")
          }
          5.4167% {
            opacity:1;
            d:path("M72.598 124h-2.207m3.000-2 -3 2 3 2")
          }
          5.8333% {
            opacity:1;
            d:path("M74.758 124h-2.596m3.000-2 -3 2 3 2")
          }
          6.2500% {
            opacity:1;
            d:path("M76.805 124h-2.904m3.000-2 -3 2 3 2")
          }
          6.6667% {
            opacity:1;
            d:path("M78.729 124h-3.140m3.000-2 -3 2 3 2")
          }
          7.0833% {
            opacity:1;
            d:path("M80.522 124h-3.313m3.000-2 -3 2 3 2")
          }
          7.5000% {
            opacity:1;
            d:path("M82.177 124h-3.430m3.000-2 -3 2 3 2")
          }
          7.9167% {
            opacity:1;
            d:path("M83.690 124h-3.499m3.000-2 -3 2 3 2")
          }
          8.3333% {
            opacity:1;
            d:path("M85.060 124h-3.526m3.000-2 -3 2 3 2")
          }
          8.7500% {
            opacity:1;
            d:path("M86.287 124h-3.517m3.000-2 -3 2 3 2")
          }
          9.1667% {
            opacity:1;
            d:path("M87.371 124h-3.477m3.000-2 -3 2 3 2")
          }
          9.5833% {
            opacity:1;
            d:path("M88.315 124h-3.410m3.000-2 -3 2 3 2")
          }
          10.0000% {
            opacity:1;
            d:path("M89.122 124h-3.322m3.000-2 -3 2 3 2")
          }
          10.4167% {
            opacity:1;
            d:path("M89.797 124h-3.215m3.000-2 -3 2 3 2")
          }
          10.8333% {
            opacity:1;
            d:path("M90.343 124h-3.094m3.000-2 -3 2 3 2")
          }
          11.2500% {
            opacity:1;
            d:path("M90.767 124h-2.961m3.000-2 -3 2 3 2")
          }
          11.6667% {
            opacity:1;
            d:path("M91.074 124h-2.819m3.000-2 -3 2 3 2")
          }
          12.0833% {
            opacity:1;
            d:path("M91.271 124h-2.671m3.000-2 -3 2 3 2")
          }
          12.5000% {
            opacity:1;
            d:path("M91.362 124h-2.518m3.000-2 -3 2 3 2")
          }
          12.9167% {
            opacity:1;
            d:path("M91.356 124h-2.364m3.000-2 -3 2 3 2")
          }
          13.3333% {
            opacity:1;
            d:path("M91.257 124h-2.208m3.000-2 -3 2 3 2")
          }
          13.7500% {
            opacity:1;
            d:path("M91.073 124h-2.053m3.000-2 -3 2 3 2")
          }
          14.1667% {
            opacity:1;
            d:path("M90.809 124h-1.900m3.000-2 -3 2 3 2")
          }
          14.5833% {
            opacity:1;
            d:path("M90.472 124h-1.749m3.000-2 -3 2 3 2")
          }
          15.0000% {
            opacity:1;
            d:path("M90.068 124h-1.603m3.000-2 -3 2 3 2")
          }
          15.4167% {
            opacity:1;
            d:path("M89.603 124h-1.460m3.000-2 -3 2 3 2")
          }
          15.8333% {
            opacity:1;
            d:path("M89.082 124h-1.323m3.000-2 -3 2 3 2")
          }
          16.2500% {
            opacity:1;
            d:path("M88.511 124h-1.190m3.000-2 -3 2 3 2")
          }
          16.6667% {
            opacity:1;
            d:path("M87.895 124h-1.063m3.000-2 -3 2 3 2")
          }
          17.0833% {
            opacity:1;
            d:path("M87.240 124h-0.943m3.000-2 -3 2 3 2")
          }
          17.5000% {
            opacity:1;
            d:path("M86.549 124h-0.828m3.000-2 -3 2 3 2")
          }
          17.9167% {
            opacity:1;
            d:path("M85.827 124h-0.719m3.000-2 -3 2 3 2")
          }
          18.3333% {
            opacity:1;
            d:path("M85.079 124h-0.616m3.000-2 -3 2 3 2")
          }
          18.7500% {
            opacity:1;
            d:path("M84.308 124h-0.519m3.000-2 -3 2 3 2")
          }
          19.1667% {
            opacity:1;
            d:path("M83.518 124h-0.429m3.000-2 -3 2 3 2")
          }
          19.5833% {
            opacity:1;
            d:path("M82.714 124h-0.344m3.000-2 -3 2 3 2")
          }
          20.0000% {
            opacity:1;
            d:path("M81.897 124h-0.265m3.000-2 -3 2 3 2")
          }
          20.4167% {
            opacity:1;
            d:path("M81.071 124h-0.191m3.000-2 -3 2 3 2")
          }
          20.8333% {
            opacity:0;
            d:path("M80.239 124h-0.123m3.000-2 -3 2 3 2")
          }
          21.2500% {
            opacity:0;
            d:path("M79.403 124h-0.060m3.000-2 -3 2 3 2")
          }
          21.6667% {
            opacity:0;
            d:path("M78.567 124h-0.002m3.000-2 -3 2 3 2")
          }
          22.0833% {
            opacity:0;
            d:path("M77.731 124h0.051m-3.000-2 3 2-3 2")
          }
          22.5000% {
            opacity:0;
            d:path("M76.898 124h0.099m-3.000-2 3 2-3 2")
          }
          22.9167% {
            opacity:0;
            d:path("M76.070 124h0.143m-3.000-2 3 2-3 2")
          }
          23.3333% {
            opacity:1;
            d:path("M75.249 124h0.183m-3.000-2 3 2-3 2")
          }
          23.7500% {
            opacity:1;
            d:path("M74.435 124h0.219m-3.000-2 3 2-3 2")
          }
          24.1667% {
            opacity:1;
            d:path("M73.631 124h0.252m-3.000-2 3 2-3 2")
          }
          24.5833% {
            opacity:1;
            d:path("M72.837 124h0.281m-3.000-2 3 2-3 2")
          }
          25.0000% {
            opacity:1;
            d:path("M72.055 124h0.306m-3.000-2 3 2-3 2")
          }
          25.4167% {
            opacity:1;
            d:path("M71.285 124h0.329m-3.000-2 3 2-3 2")
          }
          25.8333% {
            opacity:1;
            d:path("M70.529 124h0.349m-3.000-2 3 2-3 2")
          }
          26.2500% {
            opacity:1;
            d:path("M69.786 124h0.366m-3.000-2 3 2-3 2")
          }
          26.6667% {
            opacity:1;
            d:path("M69.058 124h0.380m-3.000-2 3 2-3 2")
          }
          27.0833% {
            opacity:1;
            d:path("M68.346 124h0.392m-3.000-2 3 2-3 2")
          }
          27.5000% {
            opacity:1;
            d:path("M67.649 124h0.403m-3.000-2 3 2-3 2")
          }
          27.9167% {
            opacity:1;
            d:path("M66.967 124h0.411m-3.000-2 3 2-3 2")
          }
          28.3333% {
            opacity:1;
            d:path("M66.302 124h0.417m-3.000-2 3 2-3 2")
          }
          28.7500% {
            opacity:1;
            d:path("M65.654 124h0.422m-3.000-2 3 2-3 2")
          }
          29.1667% {
            opacity:1;
            d:path("M65.022 124h0.425m-3.000-2 3 2-3 2")
          }
          29.5833% {
            opacity:1;
            d:path("M64.406 124h0.426m-3.000-2 3 2-3 2")
          }
          30.0000% {
            opacity:1;
            d:path("M63.808 124h0.427m-3.000-2 3 2-3 2")
          }
          30.4167% {
            opacity:1;
            d:path("M63.226 124h0.426m-3.000-2 3 2-3 2")
          }
          30.8333% {
            opacity:1;
            d:path("M62.660 124h0.424m-3.000-2 3 2-3 2")
          }
          31.2500% {
            opacity:1;
            d:path("M62.111 124h0.421m-3.000-2 3 2-3 2")
          }
          31.6667% {
            opacity:1;
            d:path("M61.578 124h0.417m-3.000-2 3 2-3 2")
          }
          32.0833% {
            opacity:1;
            d:path("M61.062 124h0.413m-3.000-2 3 2-3 2")
          }
          32.5000% {
            opacity:1;
            d:path("M60.561 124h0.408m-3.000-2 3 2-3 2")
          }
          32.9167% {
            opacity:1;
            d:path("M60.077 124h0.402m-3.000-2 3 2-3 2")
          }
          33.3333% {
            opacity:1;
            d:path("M59.607 124h0.396m-3.000-2 3 2-3 2")
          }
          33.7500% {
            opacity:1;
            d:path("M59.154 124h0.389m-3.000-2 3 2-3 2")
          }
          34.1667% {
            opacity:1;
            d:path("M58.715 124h0.382m-3.000-2 3 2-3 2")
          }
          34.5833% {
            opacity:1;
            d:path("M58.290 124h0.374m-3.000-2 3 2-3 2")
          }
          35.0000% {
            opacity:1;
            d:path("M57.881 124h0.367m-3.000-2 3 2-3 2")
          }
          35.4167% {
            opacity:1;
            d:path("M57.485 124h0.358m-3.000-2 3 2-3 2")
          }
          35.8333% {
            opacity:1;
            d:path("M57.103 124h0.350m-3.000-2 3 2-3 2")
          }
          36.2500% {
            opacity:1;
            d:path("M56.734 124h0.342m-3.000-2 3 2-3 2")
          }
          36.6667% {
            opacity:1;
            d:path("M56.379 124h0.333m-3.000-2 3 2-3 2")
          }
          37.0833% {
            opacity:1;
            d:path("M56.036 124h0.325m-3.000-2 3 2-3 2")
          }
          37.5000% {
            opacity:1;
            d:path("M55.706 124h0.316m-3.000-2 3 2-3 2")
          }
          37.9167% {
            opacity:1;
            d:path("M55.388 124h0.308m-3.000-2 3 2-3 2")
          }
          38.3333% {
            opacity:1;
            d:path("M55.082 124h0.299m-3.000-2 3 2-3 2")
          }
          38.7500% {
            opacity:1;
            d:path("M54.787 124h0.290m-3.000-2 3 2-3 2")
          }
          39.1667% {
            opacity:1;
            d:path("M54.503 124h0.282m-3.000-2 3 2-3 2")
          }
          39.5833% {
            opacity:1;
            d:path("M54.231 124h0.273m-3.000-2 3 2-3 2")
          }
          40.0000% {
            opacity:1;
            d:path("M53.968 124h0.265m-3.000-2 3 2-3 2")
          }
          40.4167% {
            opacity:1;
            d:path("M53.716 124h0.257m-3.000-2 3 2-3 2")
          }
          40.8333% {
            opacity:1;
            d:path("M53.473 124h0.249m-3.000-2 3 2-3 2")
          }
          41.2500% {
            opacity:1;
            d:path("M53.240 124h0.241m-3.000-2 3 2-3 2")
          }
          41.6667% {
            opacity:1;
            d:path("M53.016 124h0.233m-3.000-2 3 2-3 2")
          }
          42.0833% {
            opacity:1;
            d:path("M52.801 124h0.225m-3.000-2 3 2-3 2")
          }
          42.5000% {
            opacity:1;
            d:path("M52.594 124h0.217m-3.000-2 3 2-3 2")
          }
          42.9167% {
            opacity:1;
            d:path("M52.396 124h0.210m-3.000-2 3 2-3 2")
          }
          43.3333% {
            opacity:1;
            d:path("M52.206 124h0.203m-3.000-2 3 2-3 2")
          }
          43.7500% {
            opacity:1;
            d:path("M52.023 124h0.195m-3.000-2 3 2-3 2")
          }
          44.1667% {
            opacity:1;
            d:path("M51.848 124h0.188m-3.000-2 3 2-3 2")
          }
          44.5833% {
            opacity:1;
            d:path("M51.680 124h0.182m-3.000-2 3 2-3 2")
          }
          45.0000% {
            opacity:1;
            d:path("M51.519 124h0.175m-3.000-2 3 2-3 2")
          }
          45.4167% {
            opacity:1;
            d:path("M51.364 124h0.169m-3.000-2 3 2-3 2")
          }
          45.8333% {
            opacity:1;
            d:path("M51.216 124h0.162m-3.000-2 3 2-3 2")
          }
          46.2500% {
            opacity:1;
            d:path("M51.074 124h0.156m-3.000-2 3 2-3 2")
          }
          46.6667% {
            opacity:1;
            d:path("M50.938 124h0.151m-3.000-2 3 2-3 2")
          }
          47.0833% {
            opacity:0;
            d:path("M50.808 124h0.145m-3.000-2 3 2-3 2")
          }
          47.5000% {
            opacity:0;
            d:path("M50.683 124h0.139m-3.000-2 3 2-3 2")
          }
          47.9167% {
            opacity:0;
            d:path("M50.564 124h0.134m-3.000-2 3 2-3 2")
          }
          48.3333% {
            opacity:0;
            d:path("M50.449 124h0.129m-3.000-2 3 2-3 2")
          }
          48.7500% {
            opacity:0;
            d:path("M50.340 124h0.124m-3.000-2 3 2-3 2")
          }
          49.1667% {
            opacity:0;
            d:path("M50.235 124h0.119m-3.000-2 3 2-3 2")
          }
          49.5833% {
            opacity:0;
            d:path("M50.135 124h0.114m-3.000-2 3 2-3 2")
          }
          50.0000% {
            opacity:0;
            d:path("M50.039 124h0.110m-3.000-2 3 2-3 2")
          }
          50.4167% {
            opacity:0;
            d:path("M49.947 124h0.105m-3.000-2 3 2-3 2")
          }
          50.8333% {
            opacity:0;
            d:path("M49.859 124h0.101m-3.000-2 3 2-3 2")
          }
          51.2500% {
            opacity:0;
            d:path("M49.775 124h0.097m-3.000-2 3 2-3 2")
          }
          51.6667% {
            opacity:0;
            d:path("M49.694 124h0.093m-3.000-2 3 2-3 2")
          }
          52.0833% {
            opacity:0;
            d:path("M49.617 124h0.089m-3.000-2 3 2-3 2")
          }
          52.5000% {
            opacity:0;
            d:path("M49.544 124h0.085m-3.000-2 3 2-3 2")
          }
          52.9167% {
            opacity:0;
            d:path("M49.474 124h0.082m-3.000-2 3 2-3 2")
          }
          53.3333% {
            opacity:0;
            d:path("M49.406 124h0.079m-3.000-2 3 2-3 2")
          }
          53.7500% {
            opacity:0;
            d:path("M49.342 124h0.075m-3.000-2 3 2-3 2")
          }
          54.1667% {
            opacity:0;
            d:path("M49.281 124h0.072m-3.000-2 3 2-3 2")
          }
          54.5833% {
            opacity:0;
            d:path("M49.222 124h0.069m-3.000-2 3 2-3 2")
          }
          55.0000% {
            opacity:0;
            d:path("M49.166 124h0.066m-3.000-2 3 2-3 2")
          }
          55.4167% {
            opacity:0;
            d:path("M49.112 124h0.063m-3.000-2 3 2-3 2")
          }
          55.8333% {
            opacity:0;
            d:path("M49.061 124h0.061m-3.000-2 3 2-3 2")
          }
          56.2500% {
            opacity:0;
            d:path("M49.012 124h0.058m-3.000-2 3 2-3 2")
          }
          56.6667% {
            opacity:0;
            d:path("M48.966 124h0.056m-3.000-2 3 2-3 2")
          }
          57.0833% {
            opacity:0;
            d:path("M48.921 124h0.053m-3.000-2 3 2-3 2")
          }
          57.5000% {
            opacity:0;
            d:path("M48.879 124h0.051m-3.000-2 3 2-3 2")
          }
          57.9167% {
            opacity:0;
            d:path("M48.838 124h0.049m-3.000-2 3 2-3 2")
          }
          58.3333% {
            opacity:0;
            d:path("M48.799 124h0.047m-3.000-2 3 2-3 2")
          }
          58.7500% {
            opacity:0;
            d:path("M48.762 124h0.045m-3.000-2 3 2-3 2")
          }
          59.1667% {
            opacity:0;
            d:path("M48.727 124h0.043m-3.000-2 3 2-3 2")
          }
          59.5833% {
            opacity:0;
            d:path("M48.693 124h0.041m-3.000-2 3 2-3 2")
          }
          60.0000% {
            opacity:0;
            d:path("M48.661 124h0.039m-3.000-2 3 2-3 2")
          }
          60.4167% {
            opacity:0;
            d:path("M48.630 124h0.037m-3.000-2 3 2-3 2")
          }
          60.8333% {
            opacity:0;
            d:path("M48.600 124h0.036m-3.000-2 3 2-3 2")
          }
          61.2500% {
            opacity:0;
            d:path("M48.572 124h0.034m-3.000-2 3 2-3 2")
          }
          61.6667% {
            opacity:0;
            d:path("M48.546 124h0.033m-3.000-2 3 2-3 2")
          }
          62.0833% {
            opacity:0;
            d:path("M48.520 124h0.031m-3.000-2 3 2-3 2")
          }
          62.5000% {
            opacity:0;
            d:path("M48.496 124h0.030m-3.000-2 3 2-3 2")
          }
          62.9167% {
            opacity:0;
            d:path("M48.473 124h0.028m-3.000-2 3 2-3 2")
          }
          63.3333% {
            opacity:0;
            d:path("M48.450 124h0.027m-3.000-2 3 2-3 2")
          }
          63.7500% {
            opacity:0;
            d:path("M48.429 124h0.026m-3.000-2 3 2-3 2")
          }
          64.1667% {
            opacity:0;
            d:path("M48.409 124h0.025m-3.000-2 3 2-3 2")
          }
          64.5833% {
            opacity:0;
            d:path("M48.390 124h0.024m-3.000-2 3 2-3 2")
          }
          65.0000% {
            opacity:0;
            d:path("M48.371 124h0.023m-3.000-2 3 2-3 2")
          }
          65.4167% {
            opacity:0;
            d:path("M48.354 124h0.022m-3.000-2 3 2-3 2")
          }
          65.8333% {
            opacity:0;
            d:path("M48.337 124h0.021m-3.000-2 3 2-3 2")
          }
          66.2500% {
            opacity:0;
            d:path("M48.321 124h0.020m-3.000-2 3 2-3 2")
          }
          66.6667% {
            opacity:0;
            d:path("M48.306 124h0.019m-3.000-2 3 2-3 2")
          }
          67.0833% {
            opacity:0;
            d:path("M48.292 124h0.018m-3.000-2 3 2-3 2")
          }
          67.5000% {
            opacity:0;
            d:path("M48.278 124h0.017m-3.000-2 3 2-3 2")
          }
          67.9167% {
            opacity:0;
            d:path("M48.265 124h0.016m-3.000-2 3 2-3 2")
          }
          68.3333% {
            opacity:0;
            d:path("M48.252 124h0.016m-3.000-2 3 2-3 2")
          }
          68.7500% {
            opacity:0;
            d:path("M48.240 124h0.015m-3.000-2 3 2-3 2")
          }
          69.1667% {
            opacity:0;
            d:path("M48.229 124h0.014m-3.000-2 3 2-3 2")
          }
          69.5833% {
            opacity:0;
            d:path("M48.218 124h0.014m-3.000-2 3 2-3 2")
          }
          70.0000% {
            opacity:0;
            d:path("M48.208 124h0.013m-3.000-2 3 2-3 2")
          }
          70.4167% {
            opacity:0;
            d:path("M48.198 124h0.012m-3.000-2 3 2-3 2")
          }
          70.8333% {
            opacity:0;
            d:path("M48.189 124h0.012m-3.000-2 3 2-3 2")
          }
          71.2500% {
            opacity:0;
            d:path("M48.180 124h0.011m-3.000-2 3 2-3 2")
          }
          71.6667% {
            opacity:0;
            d:path("M48.171 124h0.011m-3.000-2 3 2-3 2")
          }
          72.0833% {
            opacity:0;
            d:path("M48.163 124h0.010m-3.000-2 3 2-3 2")
          }
          72.5000% {
            opacity:0;
            d:path("M48.155 124h0.010m-3.000-2 3 2-3 2")
          }
          72.9167% {
            opacity:0;
            d:path("M48.148 124h0.009m-3.000-2 3 2-3 2")
          }
          73.3333% {
            opacity:0;
            d:path("M48.141 124h0.009m-3.000-2 3 2-3 2")
          }
          73.7500% {
            opacity:0;
            d:path("M48.134 124h0.008m-3.000-2 3 2-3 2")
          }
          74.1667% {
            opacity:0;
            d:path("M48.128 124h0.008m-3.000-2 3 2-3 2")
          }
          74.5833% {
            opacity:0;
            d:path("M48.122 124h0.008m-3.000-2 3 2-3 2")
          }
          75.0000% {
            opacity:0;
            d:path("M48.116 124h0.007m-3.000-2 3 2-3 2")
          }
          75.4167% {
            opacity:0;
            d:path("M48.110 124h0.007m-3.000-2 3 2-3 2")
          }
          75.8333% {
            opacity:0;
            d:path("M48.105 124h0.007m-3.000-2 3 2-3 2")
          }
          76.2500% {
            opacity:0;
            d:path("M48.100 124h0.006m-3.000-2 3 2-3 2")
          }
          76.6667% {
            opacity:0;
            d:path("M48.095 124h0.006m-3.000-2 3 2-3 2")
          }
          77.0833% {
            opacity:0;
            d:path("M48.091 124h0.006m-3.000-2 3 2-3 2")
          }
          77.5000% {
            opacity:0;
            d:path("M48.086 124h0.005m-3.000-2 3 2-3 2")
          }
          77.9167% {
            opacity:0;
            d:path("M48.082 124h0.005m-3.000-2 3 2-3 2")
          }
          78.3333% {
            opacity:0;
            d:path("M48.078 124h0.005m-3.000-2 3 2-3 2")
          }
          78.7500% {
            opacity:0;
            d:path("M48.074 124h0.005m-3.000-2 3 2-3 2")
          }
          79.1667% {
            opacity:0;
            d:path("M48.071 124h0.005m-3.000-2 3 2-3 2")
          }
          79.5833% {
            opacity:0;
            d:path("M48.067 124h0.004m-3.000-2 3 2-3 2")
          }
          80.0000% {
            opacity:0;
            d:path("M48.064 124h0.004m-3.000-2 3 2-3 2")
          }
          80.4167% {
            opacity:0;
            d:path("M48.061 124h0.004m-3.000-2 3 2-3 2")
          }
          80.8333% {
            opacity:0;
            d:path("M48.058 124h0.004m-3.000-2 3 2-3 2")
          }
          81.2500% {
            opacity:0;
            d:path("M48.055 124h0.004m-3.000-2 3 2-3 2")
          }
          81.6667% {
            opacity:0;
            d:path("M48.053 124h0.003m-3.000-2 3 2-3 2")
          }
          82.0833% {
            opacity:0;
            d:path("M48.050 124h0.003m-3.000-2 3 2-3 2")
          }
          82.5000% {
            opacity:0;
            d:path("M48.048 124h0.003m-3.000-2 3 2-3 2")
          }
          82.9167% {
            opacity:0;
            d:path("M48.046 124h0.003m-3.000-2 3 2-3 2")
          }
          83.3333% {
            opacity:0;
            d:path("M48.043 124h0.003m-3.000-2 3 2-3 2")
          }
          95% {
            opacity:0
          }
          95.01%,100% {
            opacity:0
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Inverted Pendulum Stabilization">
        <path class="ink muted" d="M12 114H128"/>
        <g class="cycle">
          <g class="cart">
            <rect class="ink paper" x="-12" y="94" width="24" height="12" rx="2"/>
            <circle class="ink paper" cx="-8" cy="110" r="4"/>
            <circle class="ink paper" cx="8" cy="110" r="4"/>
          </g>
          <g class="pole">
            <path class="ink" style="stroke-width:3" d="M0 0V-55"/>
            <circle class="warm" cx="0" cy="-55" r="5"/>
            <circle class="solid" r="2.5"/>
          </g>
          <path class="ink drive" d="M48 124H65"/>
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

if (!customElements.get("concept-inverted-pendulum-stabilization")) {
  customElements.define("concept-inverted-pendulum-stabilization", ConceptInvertedPendulumStabilization);
}
