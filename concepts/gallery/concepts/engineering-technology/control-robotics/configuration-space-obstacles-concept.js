// Configuration-Space Obstacles. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptConfigurationSpaceObstacles extends HTMLElement {
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
          animation:cycle 10s linear infinite
        }
        @keyframes cycle {
          0%,90% {
            opacity:1
          }
          95%,97% {
            opacity:0
          }
          100% {
            opacity:1
          }
        }
        .inflated {
          animation:inflated 10s linear infinite
        }
        @keyframes inflated {
          0% {
            x:58px;
            y:96px;
            width:24px;
            height:13px;
            rx:0
          }
          20%,95% {
            x:52px;
            y:90px;
            width:36px;
            height:25px;
            rx:6px
          }
          95.01%,100% {
            x:58px;
            y:96px;
            width:24px;
            height:13px;
            rx:0
          }
        }
        .disc {
          animation:disc 10s linear infinite
        }
        @keyframes disc {
          0% {
            cx:22px;
            cy:38px
          }
          0.5% {
            cx:22px;
            cy:38px
          }
          1% {
            cx:22px;
            cy:38px
          }
          1.5% {
            cx:22px;
            cy:38px
          }
          2% {
            cx:22px;
            cy:38px
          }
          2.5% {
            cx:22px;
            cy:38px
          }
          3% {
            cx:22px;
            cy:38px
          }
          3.5% {
            cx:22px;
            cy:38px
          }
          4% {
            cx:22px;
            cy:38px
          }
          4.5% {
            cx:22px;
            cy:38px
          }
          5% {
            cx:22px;
            cy:38px
          }
          5.5% {
            cx:22px;
            cy:38px
          }
          6% {
            cx:22px;
            cy:38px
          }
          6.5% {
            cx:22px;
            cy:38px
          }
          7% {
            cx:22px;
            cy:38px
          }
          7.5% {
            cx:22px;
            cy:38px
          }
          8% {
            cx:22px;
            cy:38px
          }
          8.5% {
            cx:22px;
            cy:38px
          }
          9% {
            cx:22px;
            cy:38px
          }
          9.5% {
            cx:22px;
            cy:38px
          }
          10% {
            cx:22px;
            cy:38px
          }
          10.5% {
            cx:22px;
            cy:38px
          }
          11% {
            cx:22px;
            cy:38px
          }
          11.5% {
            cx:22px;
            cy:38px
          }
          12% {
            cx:22px;
            cy:38px
          }
          12.5% {
            cx:22px;
            cy:38px
          }
          13% {
            cx:22px;
            cy:38px
          }
          13.5% {
            cx:22px;
            cy:38px
          }
          14% {
            cx:22px;
            cy:38px
          }
          14.5% {
            cx:22px;
            cy:38px
          }
          15% {
            cx:22px;
            cy:38px
          }
          15.5% {
            cx:22px;
            cy:38px
          }
          16% {
            cx:22px;
            cy:38px
          }
          16.5% {
            cx:22px;
            cy:38px
          }
          17% {
            cx:22px;
            cy:38px
          }
          17.5% {
            cx:22px;
            cy:38px
          }
          18% {
            cx:22px;
            cy:38px
          }
          18.5% {
            cx:22px;
            cy:38px
          }
          19% {
            cx:22px;
            cy:38px
          }
          19.5% {
            cx:22px;
            cy:38px
          }
          20% {
            cx:22px;
            cy:38px
          }
          20.5% {
            cx:22.8515px;
            cy:37.342px
          }
          21% {
            cx:23.7029px;
            cy:36.6841px
          }
          21.5% {
            cx:24.5544px;
            cy:36.0261px
          }
          22% {
            cx:25.4059px;
            cy:35.3682px
          }
          22.5% {
            cx:26.2573px;
            cy:34.7102px
          }
          23% {
            cx:27.1088px;
            cy:34.0523px
          }
          23.5% {
            cx:27.9603px;
            cy:33.3943px
          }
          24% {
            cx:28.8117px;
            cy:32.7364px
          }
          24.5% {
            cx:29.6632px;
            cy:32.0784px
          }
          25% {
            cx:30.5147px;
            cy:31.4205px
          }
          25.5% {
            cx:31.3662px;
            cy:30.7625px
          }
          26% {
            cx:32.2176px;
            cy:30.1046px
          }
          26.5% {
            cx:33.0691px;
            cy:29.4466px
          }
          27% {
            cx:33.9206px;
            cy:28.7887px
          }
          27.5% {
            cx:34.772px;
            cy:28.1307px
          }
          28% {
            cx:35.6235px;
            cy:27.4728px
          }
          28.5% {
            cx:36.475px;
            cy:26.8148px
          }
          29% {
            cx:37.3264px;
            cy:26.1569px
          }
          29.5% {
            cx:38.1779px;
            cy:25.4989px
          }
          30% {
            cx:39.0294px;
            cy:24.8409px
          }
          30.5% {
            cx:39.8808px;
            cy:24.183px
          }
          31% {
            cx:40.7323px;
            cy:23.525px
          }
          31.5% {
            cx:41.5838px;
            cy:22.8671px
          }
          32% {
            cx:42.4352px;
            cy:22.2091px
          }
          32.5% {
            cx:43.2867px;
            cy:21.5512px
          }
          33% {
            cx:44.1746px;
            cy:21px
          }
          33.5% {
            cx:45.2507px;
            cy:21px
          }
          34% {
            cx:46.3267px;
            cy:21px
          }
          34.5% {
            cx:47.4028px;
            cy:21px
          }
          35% {
            cx:48.4788px;
            cy:21px
          }
          35.5% {
            cx:49.5549px;
            cy:21px
          }
          36% {
            cx:50.631px;
            cy:21px
          }
          36.5% {
            cx:51.707px;
            cy:21px
          }
          37% {
            cx:52.7831px;
            cy:21px
          }
          37.5% {
            cx:53.8591px;
            cy:21px
          }
          38% {
            cx:54.9352px;
            cy:21px
          }
          38.5% {
            cx:56.0113px;
            cy:21px
          }
          39% {
            cx:57.0873px;
            cy:21px
          }
          39.5% {
            cx:58.1634px;
            cy:21px
          }
          40% {
            cx:59.2394px;
            cy:21px
          }
          40.5% {
            cx:60.3155px;
            cy:21px
          }
          41% {
            cx:61.3915px;
            cy:21px
          }
          41.5% {
            cx:62.4676px;
            cy:21px
          }
          42% {
            cx:63.5437px;
            cy:21px
          }
          42.5% {
            cx:64.6197px;
            cy:21px
          }
          43% {
            cx:65.6958px;
            cy:21px
          }
          43.5% {
            cx:66.7718px;
            cy:21px
          }
          44% {
            cx:67.8479px;
            cy:21px
          }
          44.5% {
            cx:68.9239px;
            cy:21px
          }
          45% {
            cx:70px;
            cy:21px
          }
          45.5% {
            cx:71.0761px;
            cy:21px
          }
          46% {
            cx:72.1521px;
            cy:21px
          }
          46.5% {
            cx:73.2282px;
            cy:21px
          }
          47% {
            cx:74.3042px;
            cy:21px
          }
          47.5% {
            cx:75.3803px;
            cy:21px
          }
          48% {
            cx:76.4563px;
            cy:21px
          }
          48.5% {
            cx:77.5324px;
            cy:21px
          }
          49% {
            cx:78.6085px;
            cy:21px
          }
          49.5% {
            cx:79.6845px;
            cy:21px
          }
          50% {
            cx:80.7606px;
            cy:21px
          }
          50.5% {
            cx:81.8366px;
            cy:21px
          }
          51% {
            cx:82.9127px;
            cy:21px
          }
          51.5% {
            cx:83.9887px;
            cy:21px
          }
          52% {
            cx:85.0648px;
            cy:21px
          }
          52.5% {
            cx:86.1409px;
            cy:21px
          }
          53% {
            cx:87.2169px;
            cy:21px
          }
          53.5% {
            cx:88.293px;
            cy:21px
          }
          54% {
            cx:89.369px;
            cy:21px
          }
          54.5% {
            cx:90.4451px;
            cy:21px
          }
          55% {
            cx:91.5212px;
            cy:21px
          }
          55.5% {
            cx:92.5972px;
            cy:21px
          }
          56% {
            cx:93.6733px;
            cy:21px
          }
          56.5% {
            cx:94.7493px;
            cy:21px
          }
          57% {
            cx:95.8254px;
            cy:21px
          }
          57.5% {
            cx:96.7133px;
            cy:21.5512px
          }
          58% {
            cx:97.5648px;
            cy:22.2091px
          }
          58.5% {
            cx:98.4162px;
            cy:22.8671px
          }
          59% {
            cx:99.2677px;
            cy:23.525px
          }
          59.5% {
            cx:100.1192px;
            cy:24.183px
          }
          60% {
            cx:100.9706px;
            cy:24.8409px
          }
          60.5% {
            cx:101.8221px;
            cy:25.4989px
          }
          61% {
            cx:102.6736px;
            cy:26.1569px
          }
          61.5% {
            cx:103.525px;
            cy:26.8148px
          }
          62% {
            cx:104.3765px;
            cy:27.4728px
          }
          62.5% {
            cx:105.228px;
            cy:28.1307px
          }
          63% {
            cx:106.0794px;
            cy:28.7887px
          }
          63.5% {
            cx:106.9309px;
            cy:29.4466px
          }
          64% {
            cx:107.7824px;
            cy:30.1046px
          }
          64.5% {
            cx:108.6338px;
            cy:30.7625px
          }
          65% {
            cx:109.4853px;
            cy:31.4205px
          }
          65.5% {
            cx:110.3368px;
            cy:32.0784px
          }
          66% {
            cx:111.1883px;
            cy:32.7364px
          }
          66.5% {
            cx:112.0397px;
            cy:33.3943px
          }
          67% {
            cx:112.8912px;
            cy:34.0523px
          }
          67.5% {
            cx:113.7427px;
            cy:34.7102px
          }
          68% {
            cx:114.5941px;
            cy:35.3682px
          }
          68.5% {
            cx:115.4456px;
            cy:36.0261px
          }
          69% {
            cx:116.2971px;
            cy:36.6841px
          }
          69.5% {
            cx:117.1485px;
            cy:37.342px
          }
          70% {
            cx:118px;
            cy:38px
          }
          70.5% {
            cx:118px;
            cy:38px
          }
          71% {
            cx:118px;
            cy:38px
          }
          71.5% {
            cx:118px;
            cy:38px
          }
          72% {
            cx:118px;
            cy:38px
          }
          72.5% {
            cx:118px;
            cy:38px
          }
          73% {
            cx:118px;
            cy:38px
          }
          73.5% {
            cx:118px;
            cy:38px
          }
          74% {
            cx:118px;
            cy:38px
          }
          74.5% {
            cx:118px;
            cy:38px
          }
          75% {
            cx:118px;
            cy:38px
          }
          75.5% {
            cx:118px;
            cy:38px
          }
          76% {
            cx:118px;
            cy:38px
          }
          76.5% {
            cx:118px;
            cy:38px
          }
          77% {
            cx:118px;
            cy:38px
          }
          77.5% {
            cx:118px;
            cy:38px
          }
          78% {
            cx:118px;
            cy:38px
          }
          78.5% {
            cx:118px;
            cy:38px
          }
          79% {
            cx:118px;
            cy:38px
          }
          79.5% {
            cx:118px;
            cy:38px
          }
          80% {
            cx:118px;
            cy:38px
          }
          80.5% {
            cx:118px;
            cy:38px
          }
          81% {
            cx:118px;
            cy:38px
          }
          81.5% {
            cx:118px;
            cy:38px
          }
          82% {
            cx:118px;
            cy:38px
          }
          82.5% {
            cx:118px;
            cy:38px
          }
          83% {
            cx:118px;
            cy:38px
          }
          83.5% {
            cx:118px;
            cy:38px
          }
          84% {
            cx:118px;
            cy:38px
          }
          84.5% {
            cx:118px;
            cy:38px
          }
          85% {
            cx:118px;
            cy:38px
          }
          85.5% {
            cx:118px;
            cy:38px
          }
          86% {
            cx:118px;
            cy:38px
          }
          86.5% {
            cx:118px;
            cy:38px
          }
          87% {
            cx:118px;
            cy:38px
          }
          87.5% {
            cx:118px;
            cy:38px
          }
          88% {
            cx:118px;
            cy:38px
          }
          88.5% {
            cx:118px;
            cy:38px
          }
          89% {
            cx:118px;
            cy:38px
          }
          89.5% {
            cx:118px;
            cy:38px
          }
          90% {
            cx:118px;
            cy:38px
          }
          95% {
            cx:118px;
            cy:38px
          }
          95.01%,100% {
            cx:22px;
            cy:38px
          }
        }
        .point {
          animation:point 10s linear infinite
        }
        @keyframes point {
          0% {
            cx:22px;
            cy:103px
          }
          0.5% {
            cx:22px;
            cy:103px
          }
          1% {
            cx:22px;
            cy:103px
          }
          1.5% {
            cx:22px;
            cy:103px
          }
          2% {
            cx:22px;
            cy:103px
          }
          2.5% {
            cx:22px;
            cy:103px
          }
          3% {
            cx:22px;
            cy:103px
          }
          3.5% {
            cx:22px;
            cy:103px
          }
          4% {
            cx:22px;
            cy:103px
          }
          4.5% {
            cx:22px;
            cy:103px
          }
          5% {
            cx:22px;
            cy:103px
          }
          5.5% {
            cx:22px;
            cy:103px
          }
          6% {
            cx:22px;
            cy:103px
          }
          6.5% {
            cx:22px;
            cy:103px
          }
          7% {
            cx:22px;
            cy:103px
          }
          7.5% {
            cx:22px;
            cy:103px
          }
          8% {
            cx:22px;
            cy:103px
          }
          8.5% {
            cx:22px;
            cy:103px
          }
          9% {
            cx:22px;
            cy:103px
          }
          9.5% {
            cx:22px;
            cy:103px
          }
          10% {
            cx:22px;
            cy:103px
          }
          10.5% {
            cx:22px;
            cy:103px
          }
          11% {
            cx:22px;
            cy:103px
          }
          11.5% {
            cx:22px;
            cy:103px
          }
          12% {
            cx:22px;
            cy:103px
          }
          12.5% {
            cx:22px;
            cy:103px
          }
          13% {
            cx:22px;
            cy:103px
          }
          13.5% {
            cx:22px;
            cy:103px
          }
          14% {
            cx:22px;
            cy:103px
          }
          14.5% {
            cx:22px;
            cy:103px
          }
          15% {
            cx:22px;
            cy:103px
          }
          15.5% {
            cx:22px;
            cy:103px
          }
          16% {
            cx:22px;
            cy:103px
          }
          16.5% {
            cx:22px;
            cy:103px
          }
          17% {
            cx:22px;
            cy:103px
          }
          17.5% {
            cx:22px;
            cy:103px
          }
          18% {
            cx:22px;
            cy:103px
          }
          18.5% {
            cx:22px;
            cy:103px
          }
          19% {
            cx:22px;
            cy:103px
          }
          19.5% {
            cx:22px;
            cy:103px
          }
          20% {
            cx:22px;
            cy:103px
          }
          20.5% {
            cx:22.8515px;
            cy:102.342px
          }
          21% {
            cx:23.7029px;
            cy:101.6841px
          }
          21.5% {
            cx:24.5544px;
            cy:101.0261px
          }
          22% {
            cx:25.4059px;
            cy:100.3682px
          }
          22.5% {
            cx:26.2573px;
            cy:99.7102px
          }
          23% {
            cx:27.1088px;
            cy:99.0523px
          }
          23.5% {
            cx:27.9603px;
            cy:98.3943px
          }
          24% {
            cx:28.8117px;
            cy:97.7364px
          }
          24.5% {
            cx:29.6632px;
            cy:97.0784px
          }
          25% {
            cx:30.5147px;
            cy:96.4205px
          }
          25.5% {
            cx:31.3662px;
            cy:95.7625px
          }
          26% {
            cx:32.2176px;
            cy:95.1046px
          }
          26.5% {
            cx:33.0691px;
            cy:94.4466px
          }
          27% {
            cx:33.9206px;
            cy:93.7887px
          }
          27.5% {
            cx:34.772px;
            cy:93.1307px
          }
          28% {
            cx:35.6235px;
            cy:92.4728px
          }
          28.5% {
            cx:36.475px;
            cy:91.8148px
          }
          29% {
            cx:37.3264px;
            cy:91.1569px
          }
          29.5% {
            cx:38.1779px;
            cy:90.4989px
          }
          30% {
            cx:39.0294px;
            cy:89.8409px
          }
          30.5% {
            cx:39.8808px;
            cy:89.183px
          }
          31% {
            cx:40.7323px;
            cy:88.525px
          }
          31.5% {
            cx:41.5838px;
            cy:87.8671px
          }
          32% {
            cx:42.4352px;
            cy:87.2091px
          }
          32.5% {
            cx:43.2867px;
            cy:86.5512px
          }
          33% {
            cx:44.1746px;
            cy:86px
          }
          33.5% {
            cx:45.2507px;
            cy:86px
          }
          34% {
            cx:46.3267px;
            cy:86px
          }
          34.5% {
            cx:47.4028px;
            cy:86px
          }
          35% {
            cx:48.4788px;
            cy:86px
          }
          35.5% {
            cx:49.5549px;
            cy:86px
          }
          36% {
            cx:50.631px;
            cy:86px
          }
          36.5% {
            cx:51.707px;
            cy:86px
          }
          37% {
            cx:52.7831px;
            cy:86px
          }
          37.5% {
            cx:53.8591px;
            cy:86px
          }
          38% {
            cx:54.9352px;
            cy:86px
          }
          38.5% {
            cx:56.0113px;
            cy:86px
          }
          39% {
            cx:57.0873px;
            cy:86px
          }
          39.5% {
            cx:58.1634px;
            cy:86px
          }
          40% {
            cx:59.2394px;
            cy:86px
          }
          40.5% {
            cx:60.3155px;
            cy:86px
          }
          41% {
            cx:61.3915px;
            cy:86px
          }
          41.5% {
            cx:62.4676px;
            cy:86px
          }
          42% {
            cx:63.5437px;
            cy:86px
          }
          42.5% {
            cx:64.6197px;
            cy:86px
          }
          43% {
            cx:65.6958px;
            cy:86px
          }
          43.5% {
            cx:66.7718px;
            cy:86px
          }
          44% {
            cx:67.8479px;
            cy:86px
          }
          44.5% {
            cx:68.9239px;
            cy:86px
          }
          45% {
            cx:70px;
            cy:86px
          }
          45.5% {
            cx:71.0761px;
            cy:86px
          }
          46% {
            cx:72.1521px;
            cy:86px
          }
          46.5% {
            cx:73.2282px;
            cy:86px
          }
          47% {
            cx:74.3042px;
            cy:86px
          }
          47.5% {
            cx:75.3803px;
            cy:86px
          }
          48% {
            cx:76.4563px;
            cy:86px
          }
          48.5% {
            cx:77.5324px;
            cy:86px
          }
          49% {
            cx:78.6085px;
            cy:86px
          }
          49.5% {
            cx:79.6845px;
            cy:86px
          }
          50% {
            cx:80.7606px;
            cy:86px
          }
          50.5% {
            cx:81.8366px;
            cy:86px
          }
          51% {
            cx:82.9127px;
            cy:86px
          }
          51.5% {
            cx:83.9887px;
            cy:86px
          }
          52% {
            cx:85.0648px;
            cy:86px
          }
          52.5% {
            cx:86.1409px;
            cy:86px
          }
          53% {
            cx:87.2169px;
            cy:86px
          }
          53.5% {
            cx:88.293px;
            cy:86px
          }
          54% {
            cx:89.369px;
            cy:86px
          }
          54.5% {
            cx:90.4451px;
            cy:86px
          }
          55% {
            cx:91.5212px;
            cy:86px
          }
          55.5% {
            cx:92.5972px;
            cy:86px
          }
          56% {
            cx:93.6733px;
            cy:86px
          }
          56.5% {
            cx:94.7493px;
            cy:86px
          }
          57% {
            cx:95.8254px;
            cy:86px
          }
          57.5% {
            cx:96.7133px;
            cy:86.5512px
          }
          58% {
            cx:97.5648px;
            cy:87.2091px
          }
          58.5% {
            cx:98.4162px;
            cy:87.8671px
          }
          59% {
            cx:99.2677px;
            cy:88.525px
          }
          59.5% {
            cx:100.1192px;
            cy:89.183px
          }
          60% {
            cx:100.9706px;
            cy:89.8409px
          }
          60.5% {
            cx:101.8221px;
            cy:90.4989px
          }
          61% {
            cx:102.6736px;
            cy:91.1569px
          }
          61.5% {
            cx:103.525px;
            cy:91.8148px
          }
          62% {
            cx:104.3765px;
            cy:92.4728px
          }
          62.5% {
            cx:105.228px;
            cy:93.1307px
          }
          63% {
            cx:106.0794px;
            cy:93.7887px
          }
          63.5% {
            cx:106.9309px;
            cy:94.4466px
          }
          64% {
            cx:107.7824px;
            cy:95.1046px
          }
          64.5% {
            cx:108.6338px;
            cy:95.7625px
          }
          65% {
            cx:109.4853px;
            cy:96.4205px
          }
          65.5% {
            cx:110.3368px;
            cy:97.0784px
          }
          66% {
            cx:111.1883px;
            cy:97.7364px
          }
          66.5% {
            cx:112.0397px;
            cy:98.3943px
          }
          67% {
            cx:112.8912px;
            cy:99.0523px
          }
          67.5% {
            cx:113.7427px;
            cy:99.7102px
          }
          68% {
            cx:114.5941px;
            cy:100.3682px
          }
          68.5% {
            cx:115.4456px;
            cy:101.0261px
          }
          69% {
            cx:116.2971px;
            cy:101.6841px
          }
          69.5% {
            cx:117.1485px;
            cy:102.342px
          }
          70% {
            cx:118px;
            cy:103px
          }
          70.5% {
            cx:118px;
            cy:103px
          }
          71% {
            cx:118px;
            cy:103px
          }
          71.5% {
            cx:118px;
            cy:103px
          }
          72% {
            cx:118px;
            cy:103px
          }
          72.5% {
            cx:118px;
            cy:103px
          }
          73% {
            cx:118px;
            cy:103px
          }
          73.5% {
            cx:118px;
            cy:103px
          }
          74% {
            cx:118px;
            cy:103px
          }
          74.5% {
            cx:118px;
            cy:103px
          }
          75% {
            cx:118px;
            cy:103px
          }
          75.5% {
            cx:118px;
            cy:103px
          }
          76% {
            cx:118px;
            cy:103px
          }
          76.5% {
            cx:118px;
            cy:103px
          }
          77% {
            cx:118px;
            cy:103px
          }
          77.5% {
            cx:118px;
            cy:103px
          }
          78% {
            cx:118px;
            cy:103px
          }
          78.5% {
            cx:118px;
            cy:103px
          }
          79% {
            cx:118px;
            cy:103px
          }
          79.5% {
            cx:118px;
            cy:103px
          }
          80% {
            cx:118px;
            cy:103px
          }
          80.5% {
            cx:118px;
            cy:103px
          }
          81% {
            cx:118px;
            cy:103px
          }
          81.5% {
            cx:118px;
            cy:103px
          }
          82% {
            cx:118px;
            cy:103px
          }
          82.5% {
            cx:118px;
            cy:103px
          }
          83% {
            cx:118px;
            cy:103px
          }
          83.5% {
            cx:118px;
            cy:103px
          }
          84% {
            cx:118px;
            cy:103px
          }
          84.5% {
            cx:118px;
            cy:103px
          }
          85% {
            cx:118px;
            cy:103px
          }
          85.5% {
            cx:118px;
            cy:103px
          }
          86% {
            cx:118px;
            cy:103px
          }
          86.5% {
            cx:118px;
            cy:103px
          }
          87% {
            cx:118px;
            cy:103px
          }
          87.5% {
            cx:118px;
            cy:103px
          }
          88% {
            cx:118px;
            cy:103px
          }
          88.5% {
            cx:118px;
            cy:103px
          }
          89% {
            cx:118px;
            cy:103px
          }
          89.5% {
            cx:118px;
            cy:103px
          }
          90% {
            cx:118px;
            cy:103px
          }
          95% {
            cx:118px;
            cy:103px
          }
          95.01%,100% {
            cx:22px;
            cy:103px
          }
        }
        .correspondence {
          animation:correspondence 10s linear infinite
        }
        @keyframes correspondence {
          0% {
            d:path("M22 38V103")
          }
          0.5% {
            d:path("M22 38V103")
          }
          1% {
            d:path("M22 38V103")
          }
          1.5% {
            d:path("M22 38V103")
          }
          2% {
            d:path("M22 38V103")
          }
          2.5% {
            d:path("M22 38V103")
          }
          3% {
            d:path("M22 38V103")
          }
          3.5% {
            d:path("M22 38V103")
          }
          4% {
            d:path("M22 38V103")
          }
          4.5% {
            d:path("M22 38V103")
          }
          5% {
            d:path("M22 38V103")
          }
          5.5% {
            d:path("M22 38V103")
          }
          6% {
            d:path("M22 38V103")
          }
          6.5% {
            d:path("M22 38V103")
          }
          7% {
            d:path("M22 38V103")
          }
          7.5% {
            d:path("M22 38V103")
          }
          8% {
            d:path("M22 38V103")
          }
          8.5% {
            d:path("M22 38V103")
          }
          9% {
            d:path("M22 38V103")
          }
          9.5% {
            d:path("M22 38V103")
          }
          10% {
            d:path("M22 38V103")
          }
          10.5% {
            d:path("M22 38V103")
          }
          11% {
            d:path("M22 38V103")
          }
          11.5% {
            d:path("M22 38V103")
          }
          12% {
            d:path("M22 38V103")
          }
          12.5% {
            d:path("M22 38V103")
          }
          13% {
            d:path("M22 38V103")
          }
          13.5% {
            d:path("M22 38V103")
          }
          14% {
            d:path("M22 38V103")
          }
          14.5% {
            d:path("M22 38V103")
          }
          15% {
            d:path("M22 38V103")
          }
          15.5% {
            d:path("M22 38V103")
          }
          16% {
            d:path("M22 38V103")
          }
          16.5% {
            d:path("M22 38V103")
          }
          17% {
            d:path("M22 38V103")
          }
          17.5% {
            d:path("M22 38V103")
          }
          18% {
            d:path("M22 38V103")
          }
          18.5% {
            d:path("M22 38V103")
          }
          19% {
            d:path("M22 38V103")
          }
          19.5% {
            d:path("M22 38V103")
          }
          20% {
            d:path("M22 38V103")
          }
          20.5% {
            d:path("M22.8515 37.342V102.342")
          }
          21% {
            d:path("M23.7029 36.6841V101.6841")
          }
          21.5% {
            d:path("M24.5544 36.0261V101.0261")
          }
          22% {
            d:path("M25.4059 35.3682V100.3682")
          }
          22.5% {
            d:path("M26.2573 34.7102V99.7102")
          }
          23% {
            d:path("M27.1088 34.0523V99.0523")
          }
          23.5% {
            d:path("M27.9603 33.3943V98.3943")
          }
          24% {
            d:path("M28.8117 32.7364V97.7364")
          }
          24.5% {
            d:path("M29.6632 32.0784V97.0784")
          }
          25% {
            d:path("M30.5147 31.4205V96.4205")
          }
          25.5% {
            d:path("M31.3662 30.7625V95.7625")
          }
          26% {
            d:path("M32.2176 30.1046V95.1046")
          }
          26.5% {
            d:path("M33.0691 29.4466V94.4466")
          }
          27% {
            d:path("M33.9206 28.7887V93.7887")
          }
          27.5% {
            d:path("M34.772 28.1307V93.1307")
          }
          28% {
            d:path("M35.6235 27.4728V92.4728")
          }
          28.5% {
            d:path("M36.475 26.8148V91.8148")
          }
          29% {
            d:path("M37.3264 26.1569V91.1569")
          }
          29.5% {
            d:path("M38.1779 25.4989V90.4989")
          }
          30% {
            d:path("M39.0294 24.8409V89.8409")
          }
          30.5% {
            d:path("M39.8808 24.183V89.183")
          }
          31% {
            d:path("M40.7323 23.525V88.525")
          }
          31.5% {
            d:path("M41.5838 22.8671V87.8671")
          }
          32% {
            d:path("M42.4352 22.2091V87.2091")
          }
          32.5% {
            d:path("M43.2867 21.5512V86.5512")
          }
          33% {
            d:path("M44.1746 21V86")
          }
          33.5% {
            d:path("M45.2507 21V86")
          }
          34% {
            d:path("M46.3267 21V86")
          }
          34.5% {
            d:path("M47.4028 21V86")
          }
          35% {
            d:path("M48.4788 21V86")
          }
          35.5% {
            d:path("M49.5549 21V86")
          }
          36% {
            d:path("M50.631 21V86")
          }
          36.5% {
            d:path("M51.707 21V86")
          }
          37% {
            d:path("M52.7831 21V86")
          }
          37.5% {
            d:path("M53.8591 21V86")
          }
          38% {
            d:path("M54.9352 21V86")
          }
          38.5% {
            d:path("M56.0113 21V86")
          }
          39% {
            d:path("M57.0873 21V86")
          }
          39.5% {
            d:path("M58.1634 21V86")
          }
          40% {
            d:path("M59.2394 21V86")
          }
          40.5% {
            d:path("M60.3155 21V86")
          }
          41% {
            d:path("M61.3915 21V86")
          }
          41.5% {
            d:path("M62.4676 21V86")
          }
          42% {
            d:path("M63.5437 21V86")
          }
          42.5% {
            d:path("M64.6197 21V86")
          }
          43% {
            d:path("M65.6958 21V86")
          }
          43.5% {
            d:path("M66.7718 21V86")
          }
          44% {
            d:path("M67.8479 21V86")
          }
          44.5% {
            d:path("M68.9239 21V86")
          }
          45% {
            d:path("M70 21V86")
          }
          45.5% {
            d:path("M71.0761 21V86")
          }
          46% {
            d:path("M72.1521 21V86")
          }
          46.5% {
            d:path("M73.2282 21V86")
          }
          47% {
            d:path("M74.3042 21V86")
          }
          47.5% {
            d:path("M75.3803 21V86")
          }
          48% {
            d:path("M76.4563 21V86")
          }
          48.5% {
            d:path("M77.5324 21V86")
          }
          49% {
            d:path("M78.6085 21V86")
          }
          49.5% {
            d:path("M79.6845 21V86")
          }
          50% {
            d:path("M80.7606 21V86")
          }
          50.5% {
            d:path("M81.8366 21V86")
          }
          51% {
            d:path("M82.9127 21V86")
          }
          51.5% {
            d:path("M83.9887 21V86")
          }
          52% {
            d:path("M85.0648 21V86")
          }
          52.5% {
            d:path("M86.1409 21V86")
          }
          53% {
            d:path("M87.2169 21V86")
          }
          53.5% {
            d:path("M88.293 21V86")
          }
          54% {
            d:path("M89.369 21V86")
          }
          54.5% {
            d:path("M90.4451 21V86")
          }
          55% {
            d:path("M91.5212 21V86")
          }
          55.5% {
            d:path("M92.5972 21V86")
          }
          56% {
            d:path("M93.6733 21V86")
          }
          56.5% {
            d:path("M94.7493 21V86")
          }
          57% {
            d:path("M95.8254 21V86")
          }
          57.5% {
            d:path("M96.7133 21.5512V86.5512")
          }
          58% {
            d:path("M97.5648 22.2091V87.2091")
          }
          58.5% {
            d:path("M98.4162 22.8671V87.8671")
          }
          59% {
            d:path("M99.2677 23.525V88.525")
          }
          59.5% {
            d:path("M100.1192 24.183V89.183")
          }
          60% {
            d:path("M100.9706 24.8409V89.8409")
          }
          60.5% {
            d:path("M101.8221 25.4989V90.4989")
          }
          61% {
            d:path("M102.6736 26.1569V91.1569")
          }
          61.5% {
            d:path("M103.525 26.8148V91.8148")
          }
          62% {
            d:path("M104.3765 27.4728V92.4728")
          }
          62.5% {
            d:path("M105.228 28.1307V93.1307")
          }
          63% {
            d:path("M106.0794 28.7887V93.7887")
          }
          63.5% {
            d:path("M106.9309 29.4466V94.4466")
          }
          64% {
            d:path("M107.7824 30.1046V95.1046")
          }
          64.5% {
            d:path("M108.6338 30.7625V95.7625")
          }
          65% {
            d:path("M109.4853 31.4205V96.4205")
          }
          65.5% {
            d:path("M110.3368 32.0784V97.0784")
          }
          66% {
            d:path("M111.1883 32.7364V97.7364")
          }
          66.5% {
            d:path("M112.0397 33.3943V98.3943")
          }
          67% {
            d:path("M112.8912 34.0523V99.0523")
          }
          67.5% {
            d:path("M113.7427 34.7102V99.7102")
          }
          68% {
            d:path("M114.5941 35.3682V100.3682")
          }
          68.5% {
            d:path("M115.4456 36.0261V101.0261")
          }
          69% {
            d:path("M116.2971 36.6841V101.6841")
          }
          69.5% {
            d:path("M117.1485 37.342V102.342")
          }
          70% {
            d:path("M118 38V103")
          }
          70.5% {
            d:path("M118 38V103")
          }
          71% {
            d:path("M118 38V103")
          }
          71.5% {
            d:path("M118 38V103")
          }
          72% {
            d:path("M118 38V103")
          }
          72.5% {
            d:path("M118 38V103")
          }
          73% {
            d:path("M118 38V103")
          }
          73.5% {
            d:path("M118 38V103")
          }
          74% {
            d:path("M118 38V103")
          }
          74.5% {
            d:path("M118 38V103")
          }
          75% {
            d:path("M118 38V103")
          }
          75.5% {
            d:path("M118 38V103")
          }
          76% {
            d:path("M118 38V103")
          }
          76.5% {
            d:path("M118 38V103")
          }
          77% {
            d:path("M118 38V103")
          }
          77.5% {
            d:path("M118 38V103")
          }
          78% {
            d:path("M118 38V103")
          }
          78.5% {
            d:path("M118 38V103")
          }
          79% {
            d:path("M118 38V103")
          }
          79.5% {
            d:path("M118 38V103")
          }
          80% {
            d:path("M118 38V103")
          }
          80.5% {
            d:path("M118 38V103")
          }
          81% {
            d:path("M118 38V103")
          }
          81.5% {
            d:path("M118 38V103")
          }
          82% {
            d:path("M118 38V103")
          }
          82.5% {
            d:path("M118 38V103")
          }
          83% {
            d:path("M118 38V103")
          }
          83.5% {
            d:path("M118 38V103")
          }
          84% {
            d:path("M118 38V103")
          }
          84.5% {
            d:path("M118 38V103")
          }
          85% {
            d:path("M118 38V103")
          }
          85.5% {
            d:path("M118 38V103")
          }
          86% {
            d:path("M118 38V103")
          }
          86.5% {
            d:path("M118 38V103")
          }
          87% {
            d:path("M118 38V103")
          }
          87.5% {
            d:path("M118 38V103")
          }
          88% {
            d:path("M118 38V103")
          }
          88.5% {
            d:path("M118 38V103")
          }
          89% {
            d:path("M118 38V103")
          }
          89.5% {
            d:path("M118 38V103")
          }
          90% {
            d:path("M118 38V103")
          }
          95% {
            d:path("M118 38V103")
          }
          95.01%,100% {
            d:path("M22 38V103")
          }
        }
        .radius {
          animation:radius 10s linear infinite
        }
        @keyframes radius {
          0% {
            d:path("M22 38h6")
          }
          0.5% {
            d:path("M22 38h6")
          }
          1% {
            d:path("M22 38h6")
          }
          1.5% {
            d:path("M22 38h6")
          }
          2% {
            d:path("M22 38h6")
          }
          2.5% {
            d:path("M22 38h6")
          }
          3% {
            d:path("M22 38h6")
          }
          3.5% {
            d:path("M22 38h6")
          }
          4% {
            d:path("M22 38h6")
          }
          4.5% {
            d:path("M22 38h6")
          }
          5% {
            d:path("M22 38h6")
          }
          5.5% {
            d:path("M22 38h6")
          }
          6% {
            d:path("M22 38h6")
          }
          6.5% {
            d:path("M22 38h6")
          }
          7% {
            d:path("M22 38h6")
          }
          7.5% {
            d:path("M22 38h6")
          }
          8% {
            d:path("M22 38h6")
          }
          8.5% {
            d:path("M22 38h6")
          }
          9% {
            d:path("M22 38h6")
          }
          9.5% {
            d:path("M22 38h6")
          }
          10% {
            d:path("M22 38h6")
          }
          10.5% {
            d:path("M22 38h6")
          }
          11% {
            d:path("M22 38h6")
          }
          11.5% {
            d:path("M22 38h6")
          }
          12% {
            d:path("M22 38h6")
          }
          12.5% {
            d:path("M22 38h6")
          }
          13% {
            d:path("M22 38h6")
          }
          13.5% {
            d:path("M22 38h6")
          }
          14% {
            d:path("M22 38h6")
          }
          14.5% {
            d:path("M22 38h6")
          }
          15% {
            d:path("M22 38h6")
          }
          15.5% {
            d:path("M22 38h6")
          }
          16% {
            d:path("M22 38h6")
          }
          16.5% {
            d:path("M22 38h6")
          }
          17% {
            d:path("M22 38h6")
          }
          17.5% {
            d:path("M22 38h6")
          }
          18% {
            d:path("M22 38h6")
          }
          18.5% {
            d:path("M22 38h6")
          }
          19% {
            d:path("M22 38h6")
          }
          19.5% {
            d:path("M22 38h6")
          }
          20% {
            d:path("M22 38h6")
          }
          20.5% {
            d:path("M22.8515 37.342h6")
          }
          21% {
            d:path("M23.7029 36.6841h6")
          }
          21.5% {
            d:path("M24.5544 36.0261h6")
          }
          22% {
            d:path("M25.4059 35.3682h6")
          }
          22.5% {
            d:path("M26.2573 34.7102h6")
          }
          23% {
            d:path("M27.1088 34.0523h6")
          }
          23.5% {
            d:path("M27.9603 33.3943h6")
          }
          24% {
            d:path("M28.8117 32.7364h6")
          }
          24.5% {
            d:path("M29.6632 32.0784h6")
          }
          25% {
            d:path("M30.5147 31.4205h6")
          }
          25.5% {
            d:path("M31.3662 30.7625h6")
          }
          26% {
            d:path("M32.2176 30.1046h6")
          }
          26.5% {
            d:path("M33.0691 29.4466h6")
          }
          27% {
            d:path("M33.9206 28.7887h6")
          }
          27.5% {
            d:path("M34.772 28.1307h6")
          }
          28% {
            d:path("M35.6235 27.4728h6")
          }
          28.5% {
            d:path("M36.475 26.8148h6")
          }
          29% {
            d:path("M37.3264 26.1569h6")
          }
          29.5% {
            d:path("M38.1779 25.4989h6")
          }
          30% {
            d:path("M39.0294 24.8409h6")
          }
          30.5% {
            d:path("M39.8808 24.183h6")
          }
          31% {
            d:path("M40.7323 23.525h6")
          }
          31.5% {
            d:path("M41.5838 22.8671h6")
          }
          32% {
            d:path("M42.4352 22.2091h6")
          }
          32.5% {
            d:path("M43.2867 21.5512h6")
          }
          33% {
            d:path("M44.1746 21h6")
          }
          33.5% {
            d:path("M45.2507 21h6")
          }
          34% {
            d:path("M46.3267 21h6")
          }
          34.5% {
            d:path("M47.4028 21h6")
          }
          35% {
            d:path("M48.4788 21h6")
          }
          35.5% {
            d:path("M49.5549 21h6")
          }
          36% {
            d:path("M50.631 21h6")
          }
          36.5% {
            d:path("M51.707 21h6")
          }
          37% {
            d:path("M52.7831 21h6")
          }
          37.5% {
            d:path("M53.8591 21h6")
          }
          38% {
            d:path("M54.9352 21h6")
          }
          38.5% {
            d:path("M56.0113 21h6")
          }
          39% {
            d:path("M57.0873 21h6")
          }
          39.5% {
            d:path("M58.1634 21h6")
          }
          40% {
            d:path("M59.2394 21h6")
          }
          40.5% {
            d:path("M60.3155 21h6")
          }
          41% {
            d:path("M61.3915 21h6")
          }
          41.5% {
            d:path("M62.4676 21h6")
          }
          42% {
            d:path("M63.5437 21h6")
          }
          42.5% {
            d:path("M64.6197 21h6")
          }
          43% {
            d:path("M65.6958 21h6")
          }
          43.5% {
            d:path("M66.7718 21h6")
          }
          44% {
            d:path("M67.8479 21h6")
          }
          44.5% {
            d:path("M68.9239 21h6")
          }
          45% {
            d:path("M70 21h6")
          }
          45.5% {
            d:path("M71.0761 21h6")
          }
          46% {
            d:path("M72.1521 21h6")
          }
          46.5% {
            d:path("M73.2282 21h6")
          }
          47% {
            d:path("M74.3042 21h6")
          }
          47.5% {
            d:path("M75.3803 21h6")
          }
          48% {
            d:path("M76.4563 21h6")
          }
          48.5% {
            d:path("M77.5324 21h6")
          }
          49% {
            d:path("M78.6085 21h6")
          }
          49.5% {
            d:path("M79.6845 21h6")
          }
          50% {
            d:path("M80.7606 21h6")
          }
          50.5% {
            d:path("M81.8366 21h6")
          }
          51% {
            d:path("M82.9127 21h6")
          }
          51.5% {
            d:path("M83.9887 21h6")
          }
          52% {
            d:path("M85.0648 21h6")
          }
          52.5% {
            d:path("M86.1409 21h6")
          }
          53% {
            d:path("M87.2169 21h6")
          }
          53.5% {
            d:path("M88.293 21h6")
          }
          54% {
            d:path("M89.369 21h6")
          }
          54.5% {
            d:path("M90.4451 21h6")
          }
          55% {
            d:path("M91.5212 21h6")
          }
          55.5% {
            d:path("M92.5972 21h6")
          }
          56% {
            d:path("M93.6733 21h6")
          }
          56.5% {
            d:path("M94.7493 21h6")
          }
          57% {
            d:path("M95.8254 21h6")
          }
          57.5% {
            d:path("M96.7133 21.5512h6")
          }
          58% {
            d:path("M97.5648 22.2091h6")
          }
          58.5% {
            d:path("M98.4162 22.8671h6")
          }
          59% {
            d:path("M99.2677 23.525h6")
          }
          59.5% {
            d:path("M100.1192 24.183h6")
          }
          60% {
            d:path("M100.9706 24.8409h6")
          }
          60.5% {
            d:path("M101.8221 25.4989h6")
          }
          61% {
            d:path("M102.6736 26.1569h6")
          }
          61.5% {
            d:path("M103.525 26.8148h6")
          }
          62% {
            d:path("M104.3765 27.4728h6")
          }
          62.5% {
            d:path("M105.228 28.1307h6")
          }
          63% {
            d:path("M106.0794 28.7887h6")
          }
          63.5% {
            d:path("M106.9309 29.4466h6")
          }
          64% {
            d:path("M107.7824 30.1046h6")
          }
          64.5% {
            d:path("M108.6338 30.7625h6")
          }
          65% {
            d:path("M109.4853 31.4205h6")
          }
          65.5% {
            d:path("M110.3368 32.0784h6")
          }
          66% {
            d:path("M111.1883 32.7364h6")
          }
          66.5% {
            d:path("M112.0397 33.3943h6")
          }
          67% {
            d:path("M112.8912 34.0523h6")
          }
          67.5% {
            d:path("M113.7427 34.7102h6")
          }
          68% {
            d:path("M114.5941 35.3682h6")
          }
          68.5% {
            d:path("M115.4456 36.0261h6")
          }
          69% {
            d:path("M116.2971 36.6841h6")
          }
          69.5% {
            d:path("M117.1485 37.342h6")
          }
          70% {
            d:path("M118 38h6")
          }
          70.5% {
            d:path("M118 38h6")
          }
          71% {
            d:path("M118 38h6")
          }
          71.5% {
            d:path("M118 38h6")
          }
          72% {
            d:path("M118 38h6")
          }
          72.5% {
            d:path("M118 38h6")
          }
          73% {
            d:path("M118 38h6")
          }
          73.5% {
            d:path("M118 38h6")
          }
          74% {
            d:path("M118 38h6")
          }
          74.5% {
            d:path("M118 38h6")
          }
          75% {
            d:path("M118 38h6")
          }
          75.5% {
            d:path("M118 38h6")
          }
          76% {
            d:path("M118 38h6")
          }
          76.5% {
            d:path("M118 38h6")
          }
          77% {
            d:path("M118 38h6")
          }
          77.5% {
            d:path("M118 38h6")
          }
          78% {
            d:path("M118 38h6")
          }
          78.5% {
            d:path("M118 38h6")
          }
          79% {
            d:path("M118 38h6")
          }
          79.5% {
            d:path("M118 38h6")
          }
          80% {
            d:path("M118 38h6")
          }
          80.5% {
            d:path("M118 38h6")
          }
          81% {
            d:path("M118 38h6")
          }
          81.5% {
            d:path("M118 38h6")
          }
          82% {
            d:path("M118 38h6")
          }
          82.5% {
            d:path("M118 38h6")
          }
          83% {
            d:path("M118 38h6")
          }
          83.5% {
            d:path("M118 38h6")
          }
          84% {
            d:path("M118 38h6")
          }
          84.5% {
            d:path("M118 38h6")
          }
          85% {
            d:path("M118 38h6")
          }
          85.5% {
            d:path("M118 38h6")
          }
          86% {
            d:path("M118 38h6")
          }
          86.5% {
            d:path("M118 38h6")
          }
          87% {
            d:path("M118 38h6")
          }
          87.5% {
            d:path("M118 38h6")
          }
          88% {
            d:path("M118 38h6")
          }
          88.5% {
            d:path("M118 38h6")
          }
          89% {
            d:path("M118 38h6")
          }
          89.5% {
            d:path("M118 38h6")
          }
          90% {
            d:path("M118 38h6")
          }
          95% {
            d:path("M118 38h6")
          }
          95.01%,100% {
            d:path("M22 38h6")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Configuration-Space Obstacles">
        <rect class="ink muted" x="12" y="12" width="116" height="51"/>
        <rect class="ink muted" x="12" y="77" width="116" height="51"/>
        <rect class="ink muted" stroke-dasharray="2 3" x="18" y="83" width="104" height="39"/>
        <g class="cycle">
          <path class="ink muted correspondence" stroke-dasharray="2 4" d="M70 21V86"/>
          <rect class="ink paper" x="58" y="31" width="24" height="13"/>
          <rect class="ink muted" x="58" y="96" width="24" height="13"/>
          <rect class="ink warm inflated" style="fill:none" x="52" y="90" width="36" height="25" rx="6"/>
          <circle class="ink paper disc" cx="70" cy="21" r="6"/>
          <circle class="solid point" cx="70" cy="86" r="2"/>
          <path class="ink radius" d="M70 21H76"/>
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

if (!customElements.get("concept-configuration-space-obstacles")) {
  customElements.define("concept-configuration-space-obstacles", ConceptConfigurationSpaceObstacles);
}
