// Zipper Merge. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptZipperMerge extends HTMLElement {
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
        .merge0 {
          animation:merge0 16s linear infinite;
        }
        .merge0 {
          animation:merge0 16s linear infinite;
        }
        .merge1 {
          animation:merge1 16s linear infinite;
        }
        .merge1 {
          animation:merge1 16s linear infinite;
        }
        .merge2 {
          animation:merge2 16s linear infinite;
        }
        .merge2 {
          animation:merge2 16s linear infinite;
        }
        .merge3 {
          animation:merge3 16s linear infinite;
        }
        .merge3 {
          animation:merge3 16s linear infinite;
        }
        .merge4 {
          animation:merge4 16s linear infinite;
        }
        .merge4 {
          animation:merge4 16s linear infinite;
        }
        .merge5 {
          animation:merge5 16s linear infinite;
        }
        .merge5 {
          animation:merge5 16s linear infinite;
        }
        @keyframes merge0 {
          0% {
            transform:translate(60px,57px) rotate(0deg);
            opacity:1;
          }
          0.521% {
            transform:translate(60px,57px) rotate(0deg);
          }
          1.042% {
            transform:translate(60px,57px) rotate(0deg);
          }
          1.563% {
            transform:translate(60px,57px) rotate(0deg);
          }
          2.083% {
            transform:translate(60px,57px) rotate(0deg);
            opacity:1;
          }
          2.604% {
            transform:translate(60px,57px) rotate(0deg);
          }
          3.125% {
            transform:translate(60px,57px) rotate(0deg);
          }
          3.646% {
            transform:translate(60px,57px) rotate(0deg);
          }
          4.167% {
            transform:translate(60px,57px) rotate(0deg);
            opacity:1;
          }
          4.688% {
            transform:translate(60px,57px) rotate(0deg);
          }
          5.208% {
            transform:translate(60px,57px) rotate(0deg);
          }
          5.729% {
            transform:translate(60px,57px) rotate(0deg);
          }
          6.25% {
            transform:translate(60px,57px) rotate(0deg);
            opacity:1;
          }
          6.771% {
            transform:translate(62px,57px) rotate(0deg);
          }
          7.292% {
            transform:translate(64px,57px) rotate(0deg);
          }
          7.813% {
            transform:translate(66px,57px) rotate(0deg);
          }
          8.333% {
            transform:translate(68px,57px) rotate(0deg);
            opacity:1;
          }
          8.854% {
            transform:translate(70px,57px) rotate(0deg);
          }
          9.375% {
            transform:translate(72px,57.191px) rotate(10.574deg);
          }
          9.896% {
            transform:translate(74px,57.729px) rotate(19.12deg);
          }
          10.417% {
            transform:translate(76px,58.56px) rotate(25.641deg);
            opacity:1;
          }
          10.938% {
            transform:translate(78px,59.631px) rotate(30.399deg);
          }
          11.458% {
            transform:translate(80px,60.889px) rotate(33.69deg);
          }
          11.979% {
            transform:translate(82px,62.28px) rotate(35.754deg);
          }
          12.5% {
            transform:translate(84px,63.751px) rotate(36.747deg);
            opacity:1;
          }
          13.021% {
            transform:translate(86px,65.249px) rotate(36.747deg);
          }
          13.542% {
            transform:translate(88px,66.72px) rotate(35.754deg);
          }
          14.063% {
            transform:translate(90px,68.111px) rotate(33.69deg);
          }
          14.583% {
            transform:translate(92px,69.369px) rotate(30.399deg);
            opacity:1;
          }
          15.104% {
            transform:translate(94px,70.44px) rotate(25.641deg);
          }
          15.625% {
            transform:translate(96px,71.271px) rotate(19.12deg);
          }
          16.146% {
            transform:translate(98px,71.809px) rotate(10.574deg);
          }
          16.667% {
            transform:translate(100px,72px) rotate(0deg);
            opacity:1;
          }
          17.188% {
            transform:translate(102px,72px) rotate(0deg);
          }
          17.708% {
            transform:translate(104px,72px) rotate(0deg);
          }
          18.229% {
            transform:translate(106px,72px) rotate(0deg);
          }
          18.75% {
            transform:translate(108px,72px) rotate(0deg);
            opacity:1;
          }
          19.271% {
            transform:translate(110px,72px) rotate(0deg);
          }
          19.792% {
            transform:translate(112px,72px) rotate(0deg);
          }
          20.313% {
            transform:translate(114px,72px) rotate(0deg);
          }
          20.833% {
            transform:translate(116px,72px) rotate(0deg);
            opacity:1;
          }
          21.354% {
            transform:translate(118px,72px) rotate(0deg);
          }
          21.875% {
            transform:translate(120px,72px) rotate(0deg);
          }
          22.396% {
            transform:translate(122px,72px) rotate(0deg);
          }
          22.917% {
            transform:translate(124px,72px) rotate(0deg);
            opacity:1;
          }
          23.438% {
            transform:translate(126px,72px) rotate(0deg);
          }
          23.958% {
            transform:translate(128px,72px) rotate(0deg);
          }
          24.479% {
            transform:translate(130px,72px) rotate(0deg);
          }
          25% {
            transform:translate(132px,72px) rotate(0deg);
            opacity:0.156;
          }
          25.521% {
            transform:translate(134px,72px) rotate(0deg);
          }
          26.042% {
            transform:translate(136px,72px) rotate(0deg);
          }
          26.563% {
            transform:translate(138px,72px) rotate(0deg);
          }
          27.083% {
            transform:translate(140px,72px) rotate(0deg);
            opacity:0;
          }
          27.604% {
            transform:translate(142px,72px) rotate(0deg);
          }
          28.125% {
            transform:translate(144px,72px) rotate(0deg);
          }
          28.646% {
            transform:translate(146px,72px) rotate(0deg);
          }
          29.167% {
            transform:translate(148px,72px) rotate(0deg);
            opacity:0;
          }
          29.688% {
            transform:translate(150px,72px) rotate(0deg);
          }
          30.208% {
            transform:translate(152px,72px) rotate(0deg);
          }
          30.729% {
            transform:translate(154px,72px) rotate(0deg);
          }
          31.25% {
            transform:translate(156px,72px) rotate(0deg);
            opacity:0;
          }
          31.771% {
            transform:translate(158px,72px) rotate(0deg);
          }
          32.292% {
            transform:translate(160px,72px) rotate(0deg);
          }
          32.813% {
            transform:translate(162px,72px) rotate(0deg);
          }
          33.333% {
            transform:translate(164px,72px) rotate(0deg);
            opacity:0;
          }
          33.854% {
            transform:translate(166px,72px) rotate(0deg);
          }
          34.375% {
            transform:translate(168px,72px) rotate(0deg);
          }
          34.896% {
            transform:translate(170px,72px) rotate(0deg);
          }
          35.417% {
            transform:translate(172px,72px) rotate(0deg);
            opacity:0;
          }
          35.938% {
            transform:translate(174px,72px) rotate(0deg);
          }
          36.458% {
            transform:translate(176px,72px) rotate(0deg);
          }
          36.979% {
            transform:translate(178px,72px) rotate(0deg);
          }
          37.5% {
            transform:translate(180px,72px) rotate(0deg);
            opacity:0;
          }
          38.021% {
            transform:translate(182px,72px) rotate(0deg);
          }
          38.542% {
            transform:translate(184px,72px) rotate(0deg);
          }
          39.063% {
            transform:translate(186px,72px) rotate(0deg);
          }
          39.583% {
            transform:translate(188px,72px) rotate(0deg);
            opacity:0;
          }
          40.104% {
            transform:translate(190px,72px) rotate(0deg);
          }
          40.625% {
            transform:translate(192px,72px) rotate(0deg);
          }
          41.146% {
            transform:translate(194px,72px) rotate(0deg);
          }
          41.667% {
            transform:translate(196px,72px) rotate(0deg);
            opacity:0;
          }
          42.188% {
            transform:translate(198px,72px) rotate(0deg);
          }
          42.708% {
            transform:translate(200px,72px) rotate(0deg);
          }
          43.229% {
            transform:translate(202px,72px) rotate(0deg);
          }
          43.75% {
            transform:translate(204px,72px) rotate(0deg);
            opacity:0;
          }
          44.271% {
            transform:translate(206px,72px) rotate(0deg);
          }
          44.792% {
            transform:translate(208px,72px) rotate(0deg);
          }
          45.313% {
            transform:translate(210px,72px) rotate(0deg);
          }
          45.833% {
            transform:translate(212px,72px) rotate(0deg);
            opacity:0;
          }
          46.354% {
            transform:translate(214px,72px) rotate(0deg);
          }
          46.875% {
            transform:translate(216px,72px) rotate(0deg);
          }
          47.396% {
            transform:translate(218px,72px) rotate(0deg);
          }
          47.917% {
            transform:translate(220px,72px) rotate(0deg);
            opacity:0;
          }
          48.438% {
            transform:translate(222px,72px) rotate(0deg);
          }
          48.958% {
            transform:translate(224px,72px) rotate(0deg);
          }
          49.479% {
            transform:translate(226px,72px) rotate(0deg);
          }
          50% {
            transform:translate(228px,72px) rotate(0deg);
            opacity:0;
          }
          50.521% {
            transform:translate(230px,72px) rotate(0deg);
          }
          51.042% {
            transform:translate(232px,72px) rotate(0deg);
          }
          51.563% {
            transform:translate(234px,72px) rotate(0deg);
          }
          52.083% {
            transform:translate(236px,72px) rotate(0deg);
            opacity:0;
          }
          52.604% {
            transform:translate(238px,72px) rotate(0deg);
          }
          53.125% {
            transform:translate(240px,72px) rotate(0deg);
          }
          53.646% {
            transform:translate(242px,72px) rotate(0deg);
          }
          54.167% {
            transform:translate(244px,72px) rotate(0deg);
            opacity:0;
          }
          54.688% {
            transform:translate(246px,72px) rotate(0deg);
          }
          55.208% {
            transform:translate(248px,72px) rotate(0deg);
          }
          55.729% {
            transform:translate(250px,72px) rotate(0deg);
          }
          56.25% {
            transform:translate(252px,72px) rotate(0deg);
            opacity:0;
          }
          56.771% {
            transform:translate(254px,72px) rotate(0deg);
          }
          57.292% {
            transform:translate(256px,72px) rotate(0deg);
          }
          57.813% {
            transform:translate(258px,72px) rotate(0deg);
          }
          58.333% {
            transform:translate(260px,72px) rotate(0deg);
            opacity:0;
          }
          58.854% {
            transform:translate(262px,72px) rotate(0deg);
          }
          59.375% {
            transform:translate(264px,72px) rotate(0deg);
          }
          59.896% {
            transform:translate(266px,72px) rotate(0deg);
          }
          60.417% {
            transform:translate(268px,72px) rotate(0deg);
            opacity:0;
          }
          60.938% {
            transform:translate(270px,72px) rotate(0deg);
          }
          61.458% {
            transform:translate(272px,72px) rotate(0deg);
          }
          61.979% {
            transform:translate(274px,72px) rotate(0deg);
          }
          62.5% {
            transform:translate(276px,72px) rotate(0deg);
            opacity:0;
          }
          63.021% {
            transform:translate(278px,72px) rotate(0deg);
          }
          63.542% {
            transform:translate(280px,72px) rotate(0deg);
          }
          64.063% {
            transform:translate(282px,72px) rotate(0deg);
          }
          64.583% {
            transform:translate(284px,72px) rotate(0deg);
            opacity:0;
          }
          65.104% {
            transform:translate(286px,72px) rotate(0deg);
          }
          65.625% {
            transform:translate(288px,72px) rotate(0deg);
          }
          66.146% {
            transform:translate(290px,72px) rotate(0deg);
          }
          66.667% {
            transform:translate(292px,72px) rotate(0deg);
            opacity:0;
          }
          67.188% {
            transform:translate(294px,72px) rotate(0deg);
          }
          67.708% {
            transform:translate(296px,72px) rotate(0deg);
          }
          68.229% {
            transform:translate(298px,72px) rotate(0deg);
          }
          68.75% {
            transform:translate(300px,72px) rotate(0deg);
            opacity:0;
          }
          69.271% {
            transform:translate(302px,72px) rotate(0deg);
          }
          69.792% {
            transform:translate(304px,72px) rotate(0deg);
          }
          70.313% {
            transform:translate(306px,72px) rotate(0deg);
          }
          70.833% {
            transform:translate(308px,72px) rotate(0deg);
            opacity:0;
          }
          71.354% {
            transform:translate(310px,72px) rotate(0deg);
          }
          71.875% {
            transform:translate(312px,72px) rotate(0deg);
          }
          72.396% {
            transform:translate(314px,72px) rotate(0deg);
          }
          72.917% {
            transform:translate(316px,72px) rotate(0deg);
            opacity:0;
          }
          73.438% {
            transform:translate(318px,72px) rotate(0deg);
          }
          73.958% {
            transform:translate(320px,72px) rotate(0deg);
          }
          74.479% {
            transform:translate(322px,72px) rotate(0deg);
          }
          75% {
            transform:translate(324px,72px) rotate(0deg);
            opacity:0;
          }
          75.521% {
            transform:translate(326px,72px) rotate(0deg);
          }
          76.042% {
            transform:translate(328px,72px) rotate(0deg);
          }
          76.563% {
            transform:translate(330px,72px) rotate(0deg);
          }
          77.083% {
            transform:translate(332px,72px) rotate(0deg);
            opacity:0;
          }
          77.604% {
            transform:translate(334px,72px) rotate(0deg);
          }
          78.125% {
            transform:translate(336px,72px) rotate(0deg);
          }
          78.646% {
            transform:translate(338px,72px) rotate(0deg);
          }
          79.167% {
            transform:translate(340px,72px) rotate(0deg);
            opacity:0;
          }
          79.688% {
            transform:translate(342px,72px) rotate(0deg);
          }
          80.208% {
            transform:translate(344px,72px) rotate(0deg);
          }
          80.729% {
            transform:translate(346px,72px) rotate(0deg);
          }
          81.25% {
            transform:translate(348px,72px) rotate(0deg);
            opacity:0;
          }
          81.771% {
            transform:translate(350px,72px) rotate(0deg);
          }
          82.292% {
            transform:translate(352px,72px) rotate(0deg);
          }
          82.813% {
            transform:translate(354px,72px) rotate(0deg);
          }
          83.333% {
            transform:translate(356px,72px) rotate(0deg);
            opacity:0;
          }
          83.854% {
            transform:translate(358px,72px) rotate(0deg);
          }
          84.375% {
            transform:translate(360px,72px) rotate(0deg);
          }
          84.896% {
            transform:translate(362px,72px) rotate(0deg);
          }
          85.417% {
            transform:translate(364px,72px) rotate(0deg);
            opacity:0;
          }
          85.938% {
            transform:translate(366px,72px) rotate(0deg);
          }
          86.458% {
            transform:translate(368px,72px) rotate(0deg);
          }
          86.979% {
            transform:translate(370px,72px) rotate(0deg);
          }
          87.5% {
            transform:translate(372px,72px) rotate(0deg);
            opacity:0;
          }
          88.021% {
            transform:translate(374px,72px) rotate(0deg);
          }
          88.542% {
            transform:translate(376px,72px) rotate(0deg);
          }
          89.063% {
            transform:translate(378px,72px) rotate(0deg);
          }
          89.583% {
            transform:translate(380px,72px) rotate(0deg);
            opacity:0;
          }
          90.104% {
            transform:translate(382px,72px) rotate(0deg);
          }
          90.625% {
            transform:translate(384px,72px) rotate(0deg);
          }
          91.146% {
            transform:translate(386px,72px) rotate(0deg);
          }
          91.667% {
            transform:translate(388px,72px) rotate(0deg);
            opacity:0;
          }
          92.188% {
            transform:translate(390px,72px) rotate(0deg);
          }
          92.708% {
            transform:translate(392px,72px) rotate(0deg);
          }
          93.229% {
            transform:translate(394px,72px) rotate(0deg);
          }
          93.75% {
            transform:translate(396px,72px) rotate(0deg);
            opacity:0;
          }
          94.271% {
            transform:translate(398px,72px) rotate(0deg);
          }
          94.792% {
            transform:translate(400px,72px) rotate(0deg);
          }
          95.313% {
            transform:translate(402px,72px) rotate(0deg);
          }
          95.833% {
            transform:translate(404px,72px) rotate(0deg);
            opacity:0;
          }
          96.354% {
            transform:translate(406px,72px) rotate(0deg);
          }
          96.875% {
            transform:translate(408px,72px) rotate(0deg);
          }
          97.396% {
            transform:translate(410px,72px) rotate(0deg);
          }
          97.917% {
            transform:translate(412px,72px) rotate(0deg);
            opacity:0;
          }
          98.438% {
            transform:translate(414px,72px) rotate(0deg);
          }
          98.958% {
            transform:translate(416px,72px) rotate(0deg);
          }
          99.479% {
            transform:translate(418px,72px) rotate(0deg);
          }
          100% {
            transform:translate(420px,72px) rotate(0deg);
            opacity:0;
          }
        }
        @keyframes merge1 {
          0% {
            transform:translate(60px,87px) rotate(0deg);
            opacity:1;
          }
          0.521% {
            transform:translate(60px,87px) rotate(0deg);
          }
          1.042% {
            transform:translate(60px,87px) rotate(0deg);
          }
          1.563% {
            transform:translate(60px,87px) rotate(0deg);
          }
          2.083% {
            transform:translate(60px,87px) rotate(0deg);
            opacity:1;
          }
          2.604% {
            transform:translate(60px,87px) rotate(0deg);
          }
          3.125% {
            transform:translate(60px,87px) rotate(0deg);
          }
          3.646% {
            transform:translate(60px,87px) rotate(0deg);
          }
          4.167% {
            transform:translate(60px,87px) rotate(0deg);
            opacity:1;
          }
          4.688% {
            transform:translate(60px,87px) rotate(0deg);
          }
          5.208% {
            transform:translate(60px,87px) rotate(0deg);
          }
          5.729% {
            transform:translate(60px,87px) rotate(0deg);
          }
          6.25% {
            transform:translate(60px,87px) rotate(0deg);
            opacity:1;
          }
          6.771% {
            transform:translate(60px,87px) rotate(0deg);
          }
          7.292% {
            transform:translate(60px,87px) rotate(0deg);
          }
          7.813% {
            transform:translate(60px,87px) rotate(0deg);
          }
          8.333% {
            transform:translate(60px,87px) rotate(0deg);
            opacity:1;
          }
          8.854% {
            transform:translate(60px,87px) rotate(0deg);
          }
          9.375% {
            transform:translate(60px,87px) rotate(0deg);
          }
          9.896% {
            transform:translate(60px,87px) rotate(0deg);
          }
          10.417% {
            transform:translate(60px,87px) rotate(0deg);
            opacity:1;
          }
          10.938% {
            transform:translate(60px,87px) rotate(0deg);
          }
          11.458% {
            transform:translate(60px,87px) rotate(0deg);
          }
          11.979% {
            transform:translate(60px,87px) rotate(0deg);
          }
          12.5% {
            transform:translate(60px,87px) rotate(0deg);
            opacity:1;
          }
          13.021% {
            transform:translate(60px,87px) rotate(0deg);
          }
          13.542% {
            transform:translate(60px,87px) rotate(0deg);
          }
          14.063% {
            transform:translate(60px,87px) rotate(0deg);
          }
          14.583% {
            transform:translate(60px,87px) rotate(0deg);
            opacity:1;
          }
          15.104% {
            transform:translate(60px,87px) rotate(0deg);
          }
          15.625% {
            transform:translate(60px,87px) rotate(0deg);
          }
          16.146% {
            transform:translate(62px,87px) rotate(0deg);
          }
          16.667% {
            transform:translate(64px,87px) rotate(0deg);
            opacity:1;
          }
          17.188% {
            transform:translate(66px,87px) rotate(0deg);
          }
          17.708% {
            transform:translate(68px,87px) rotate(0deg);
          }
          18.229% {
            transform:translate(70px,87px) rotate(0deg);
          }
          18.75% {
            transform:translate(72px,86.809px) rotate(-10.574deg);
            opacity:1;
          }
          19.271% {
            transform:translate(74px,86.271px) rotate(-19.12deg);
          }
          19.792% {
            transform:translate(76px,85.44px) rotate(-25.641deg);
          }
          20.313% {
            transform:translate(78px,84.369px) rotate(-30.399deg);
          }
          20.833% {
            transform:translate(80px,83.111px) rotate(-33.69deg);
            opacity:1;
          }
          21.354% {
            transform:translate(82px,81.72px) rotate(-35.754deg);
          }
          21.875% {
            transform:translate(84px,80.249px) rotate(-36.747deg);
          }
          22.396% {
            transform:translate(86px,78.751px) rotate(-36.747deg);
          }
          22.917% {
            transform:translate(88px,77.28px) rotate(-35.754deg);
            opacity:1;
          }
          23.438% {
            transform:translate(90px,75.889px) rotate(-33.69deg);
          }
          23.958% {
            transform:translate(92px,74.631px) rotate(-30.399deg);
          }
          24.479% {
            transform:translate(94px,73.56px) rotate(-25.641deg);
          }
          25% {
            transform:translate(96px,72.729px) rotate(-19.12deg);
            opacity:1;
          }
          25.521% {
            transform:translate(98px,72.191px) rotate(-10.574deg);
          }
          26.042% {
            transform:translate(100px,72px) rotate(0deg);
          }
          26.563% {
            transform:translate(102px,72px) rotate(0deg);
          }
          27.083% {
            transform:translate(104px,72px) rotate(0deg);
            opacity:1;
          }
          27.604% {
            transform:translate(106px,72px) rotate(0deg);
          }
          28.125% {
            transform:translate(108px,72px) rotate(0deg);
          }
          28.646% {
            transform:translate(110px,72px) rotate(0deg);
          }
          29.167% {
            transform:translate(112px,72px) rotate(0deg);
            opacity:1;
          }
          29.688% {
            transform:translate(114px,72px) rotate(0deg);
          }
          30.208% {
            transform:translate(116px,72px) rotate(0deg);
          }
          30.729% {
            transform:translate(118px,72px) rotate(0deg);
          }
          31.25% {
            transform:translate(120px,72px) rotate(0deg);
            opacity:1;
          }
          31.771% {
            transform:translate(122px,72px) rotate(0deg);
          }
          32.292% {
            transform:translate(124px,72px) rotate(0deg);
          }
          32.813% {
            transform:translate(126px,72px) rotate(0deg);
          }
          33.333% {
            transform:translate(128px,72px) rotate(0deg);
            opacity:0.844;
          }
          33.854% {
            transform:translate(130px,72px) rotate(0deg);
          }
          34.375% {
            transform:translate(132px,72px) rotate(0deg);
          }
          34.896% {
            transform:translate(134px,72px) rotate(0deg);
          }
          35.417% {
            transform:translate(136px,72px) rotate(0deg);
            opacity:0;
          }
          35.938% {
            transform:translate(138px,72px) rotate(0deg);
          }
          36.458% {
            transform:translate(140px,72px) rotate(0deg);
          }
          36.979% {
            transform:translate(142px,72px) rotate(0deg);
          }
          37.5% {
            transform:translate(144px,72px) rotate(0deg);
            opacity:0;
          }
          38.021% {
            transform:translate(146px,72px) rotate(0deg);
          }
          38.542% {
            transform:translate(148px,72px) rotate(0deg);
          }
          39.063% {
            transform:translate(150px,72px) rotate(0deg);
          }
          39.583% {
            transform:translate(152px,72px) rotate(0deg);
            opacity:0;
          }
          40.104% {
            transform:translate(154px,72px) rotate(0deg);
          }
          40.625% {
            transform:translate(156px,72px) rotate(0deg);
          }
          41.146% {
            transform:translate(158px,72px) rotate(0deg);
          }
          41.667% {
            transform:translate(160px,72px) rotate(0deg);
            opacity:0;
          }
          42.188% {
            transform:translate(162px,72px) rotate(0deg);
          }
          42.708% {
            transform:translate(164px,72px) rotate(0deg);
          }
          43.229% {
            transform:translate(166px,72px) rotate(0deg);
          }
          43.75% {
            transform:translate(168px,72px) rotate(0deg);
            opacity:0;
          }
          44.271% {
            transform:translate(170px,72px) rotate(0deg);
          }
          44.792% {
            transform:translate(172px,72px) rotate(0deg);
          }
          45.313% {
            transform:translate(174px,72px) rotate(0deg);
          }
          45.833% {
            transform:translate(176px,72px) rotate(0deg);
            opacity:0;
          }
          46.354% {
            transform:translate(178px,72px) rotate(0deg);
          }
          46.875% {
            transform:translate(180px,72px) rotate(0deg);
          }
          47.396% {
            transform:translate(182px,72px) rotate(0deg);
          }
          47.917% {
            transform:translate(184px,72px) rotate(0deg);
            opacity:0;
          }
          48.438% {
            transform:translate(186px,72px) rotate(0deg);
          }
          48.958% {
            transform:translate(188px,72px) rotate(0deg);
          }
          49.479% {
            transform:translate(190px,72px) rotate(0deg);
          }
          50% {
            transform:translate(192px,72px) rotate(0deg);
            opacity:0;
          }
          50.521% {
            transform:translate(194px,72px) rotate(0deg);
          }
          51.042% {
            transform:translate(196px,72px) rotate(0deg);
          }
          51.563% {
            transform:translate(198px,72px) rotate(0deg);
          }
          52.083% {
            transform:translate(200px,72px) rotate(0deg);
            opacity:0;
          }
          52.604% {
            transform:translate(202px,72px) rotate(0deg);
          }
          53.125% {
            transform:translate(204px,72px) rotate(0deg);
          }
          53.646% {
            transform:translate(206px,72px) rotate(0deg);
          }
          54.167% {
            transform:translate(208px,72px) rotate(0deg);
            opacity:0;
          }
          54.688% {
            transform:translate(210px,72px) rotate(0deg);
          }
          55.208% {
            transform:translate(212px,72px) rotate(0deg);
          }
          55.729% {
            transform:translate(214px,72px) rotate(0deg);
          }
          56.25% {
            transform:translate(216px,72px) rotate(0deg);
            opacity:0;
          }
          56.771% {
            transform:translate(218px,72px) rotate(0deg);
          }
          57.292% {
            transform:translate(220px,72px) rotate(0deg);
          }
          57.813% {
            transform:translate(222px,72px) rotate(0deg);
          }
          58.333% {
            transform:translate(224px,72px) rotate(0deg);
            opacity:0;
          }
          58.854% {
            transform:translate(226px,72px) rotate(0deg);
          }
          59.375% {
            transform:translate(228px,72px) rotate(0deg);
          }
          59.896% {
            transform:translate(230px,72px) rotate(0deg);
          }
          60.417% {
            transform:translate(232px,72px) rotate(0deg);
            opacity:0;
          }
          60.938% {
            transform:translate(234px,72px) rotate(0deg);
          }
          61.458% {
            transform:translate(236px,72px) rotate(0deg);
          }
          61.979% {
            transform:translate(238px,72px) rotate(0deg);
          }
          62.5% {
            transform:translate(240px,72px) rotate(0deg);
            opacity:0;
          }
          63.021% {
            transform:translate(242px,72px) rotate(0deg);
          }
          63.542% {
            transform:translate(244px,72px) rotate(0deg);
          }
          64.063% {
            transform:translate(246px,72px) rotate(0deg);
          }
          64.583% {
            transform:translate(248px,72px) rotate(0deg);
            opacity:0;
          }
          65.104% {
            transform:translate(250px,72px) rotate(0deg);
          }
          65.625% {
            transform:translate(252px,72px) rotate(0deg);
          }
          66.146% {
            transform:translate(254px,72px) rotate(0deg);
          }
          66.667% {
            transform:translate(256px,72px) rotate(0deg);
            opacity:0;
          }
          67.188% {
            transform:translate(258px,72px) rotate(0deg);
          }
          67.708% {
            transform:translate(260px,72px) rotate(0deg);
          }
          68.229% {
            transform:translate(262px,72px) rotate(0deg);
          }
          68.75% {
            transform:translate(264px,72px) rotate(0deg);
            opacity:0;
          }
          69.271% {
            transform:translate(266px,72px) rotate(0deg);
          }
          69.792% {
            transform:translate(268px,72px) rotate(0deg);
          }
          70.313% {
            transform:translate(270px,72px) rotate(0deg);
          }
          70.833% {
            transform:translate(272px,72px) rotate(0deg);
            opacity:0;
          }
          71.354% {
            transform:translate(274px,72px) rotate(0deg);
          }
          71.875% {
            transform:translate(276px,72px) rotate(0deg);
          }
          72.396% {
            transform:translate(278px,72px) rotate(0deg);
          }
          72.917% {
            transform:translate(280px,72px) rotate(0deg);
            opacity:0;
          }
          73.438% {
            transform:translate(282px,72px) rotate(0deg);
          }
          73.958% {
            transform:translate(284px,72px) rotate(0deg);
          }
          74.479% {
            transform:translate(286px,72px) rotate(0deg);
          }
          75% {
            transform:translate(288px,72px) rotate(0deg);
            opacity:0;
          }
          75.521% {
            transform:translate(290px,72px) rotate(0deg);
          }
          76.042% {
            transform:translate(292px,72px) rotate(0deg);
          }
          76.563% {
            transform:translate(294px,72px) rotate(0deg);
          }
          77.083% {
            transform:translate(296px,72px) rotate(0deg);
            opacity:0;
          }
          77.604% {
            transform:translate(298px,72px) rotate(0deg);
          }
          78.125% {
            transform:translate(300px,72px) rotate(0deg);
          }
          78.646% {
            transform:translate(302px,72px) rotate(0deg);
          }
          79.167% {
            transform:translate(304px,72px) rotate(0deg);
            opacity:0;
          }
          79.688% {
            transform:translate(306px,72px) rotate(0deg);
          }
          80.208% {
            transform:translate(308px,72px) rotate(0deg);
          }
          80.729% {
            transform:translate(310px,72px) rotate(0deg);
          }
          81.25% {
            transform:translate(312px,72px) rotate(0deg);
            opacity:0;
          }
          81.771% {
            transform:translate(314px,72px) rotate(0deg);
          }
          82.292% {
            transform:translate(316px,72px) rotate(0deg);
          }
          82.813% {
            transform:translate(318px,72px) rotate(0deg);
          }
          83.333% {
            transform:translate(320px,72px) rotate(0deg);
            opacity:0;
          }
          83.854% {
            transform:translate(322px,72px) rotate(0deg);
          }
          84.375% {
            transform:translate(324px,72px) rotate(0deg);
          }
          84.896% {
            transform:translate(326px,72px) rotate(0deg);
          }
          85.417% {
            transform:translate(328px,72px) rotate(0deg);
            opacity:0;
          }
          85.938% {
            transform:translate(330px,72px) rotate(0deg);
          }
          86.458% {
            transform:translate(332px,72px) rotate(0deg);
          }
          86.979% {
            transform:translate(334px,72px) rotate(0deg);
          }
          87.5% {
            transform:translate(336px,72px) rotate(0deg);
            opacity:0;
          }
          88.021% {
            transform:translate(338px,72px) rotate(0deg);
          }
          88.542% {
            transform:translate(340px,72px) rotate(0deg);
          }
          89.063% {
            transform:translate(342px,72px) rotate(0deg);
          }
          89.583% {
            transform:translate(344px,72px) rotate(0deg);
            opacity:0;
          }
          90.104% {
            transform:translate(346px,72px) rotate(0deg);
          }
          90.625% {
            transform:translate(348px,72px) rotate(0deg);
          }
          91.146% {
            transform:translate(350px,72px) rotate(0deg);
          }
          91.667% {
            transform:translate(352px,72px) rotate(0deg);
            opacity:0;
          }
          92.188% {
            transform:translate(354px,72px) rotate(0deg);
          }
          92.708% {
            transform:translate(356px,72px) rotate(0deg);
          }
          93.229% {
            transform:translate(358px,72px) rotate(0deg);
          }
          93.75% {
            transform:translate(360px,72px) rotate(0deg);
            opacity:0;
          }
          94.271% {
            transform:translate(362px,72px) rotate(0deg);
          }
          94.792% {
            transform:translate(364px,72px) rotate(0deg);
          }
          95.313% {
            transform:translate(366px,72px) rotate(0deg);
          }
          95.833% {
            transform:translate(368px,72px) rotate(0deg);
            opacity:0;
          }
          96.354% {
            transform:translate(370px,72px) rotate(0deg);
          }
          96.875% {
            transform:translate(372px,72px) rotate(0deg);
          }
          97.396% {
            transform:translate(374px,72px) rotate(0deg);
          }
          97.917% {
            transform:translate(376px,72px) rotate(0deg);
            opacity:0;
          }
          98.438% {
            transform:translate(378px,72px) rotate(0deg);
          }
          98.958% {
            transform:translate(380px,72px) rotate(0deg);
          }
          99.479% {
            transform:translate(382px,72px) rotate(0deg);
          }
          100% {
            transform:translate(384px,72px) rotate(0deg);
            opacity:0;
          }
        }
        @keyframes merge2 {
          0% {
            transform:translate(46px,57px) rotate(0deg);
            opacity:1;
          }
          0.521% {
            transform:translate(46px,57px) rotate(0deg);
          }
          1.042% {
            transform:translate(46px,57px) rotate(0deg);
          }
          1.563% {
            transform:translate(46px,57px) rotate(0deg);
          }
          2.083% {
            transform:translate(46px,57px) rotate(0deg);
            opacity:1;
          }
          2.604% {
            transform:translate(46px,57px) rotate(0deg);
          }
          3.125% {
            transform:translate(46px,57px) rotate(0deg);
          }
          3.646% {
            transform:translate(46px,57px) rotate(0deg);
          }
          4.167% {
            transform:translate(46px,57px) rotate(0deg);
            opacity:1;
          }
          4.688% {
            transform:translate(46px,57px) rotate(0deg);
          }
          5.208% {
            transform:translate(46px,57px) rotate(0deg);
          }
          5.729% {
            transform:translate(46px,57px) rotate(0deg);
          }
          6.25% {
            transform:translate(46px,57px) rotate(0deg);
            opacity:1;
          }
          6.771% {
            transform:translate(46px,57px) rotate(0deg);
          }
          7.292% {
            transform:translate(46px,57px) rotate(0deg);
          }
          7.813% {
            transform:translate(46px,57px) rotate(0deg);
          }
          8.333% {
            transform:translate(46px,57px) rotate(0deg);
            opacity:1;
          }
          8.854% {
            transform:translate(46px,57px) rotate(0deg);
          }
          9.375% {
            transform:translate(46px,57px) rotate(0deg);
          }
          9.896% {
            transform:translate(46px,57px) rotate(0deg);
          }
          10.417% {
            transform:translate(46px,57px) rotate(0deg);
            opacity:1;
          }
          10.938% {
            transform:translate(46px,57px) rotate(0deg);
          }
          11.458% {
            transform:translate(46px,57px) rotate(0deg);
          }
          11.979% {
            transform:translate(46px,57px) rotate(0deg);
          }
          12.5% {
            transform:translate(46px,57px) rotate(0deg);
            opacity:1;
          }
          13.021% {
            transform:translate(46px,57px) rotate(0deg);
          }
          13.542% {
            transform:translate(46px,57px) rotate(0deg);
          }
          14.063% {
            transform:translate(46px,57px) rotate(0deg);
          }
          14.583% {
            transform:translate(46px,57px) rotate(0deg);
            opacity:1;
          }
          15.104% {
            transform:translate(46px,57px) rotate(0deg);
          }
          15.625% {
            transform:translate(46px,57px) rotate(0deg);
          }
          16.146% {
            transform:translate(46px,57px) rotate(0deg);
          }
          16.667% {
            transform:translate(46px,57px) rotate(0deg);
            opacity:1;
          }
          17.188% {
            transform:translate(46.061px,57px) rotate(0deg);
          }
          17.708% {
            transform:translate(46.412px,57px) rotate(0deg);
          }
          18.229% {
            transform:translate(47.037px,57px) rotate(0deg);
          }
          18.75% {
            transform:translate(47.893px,57px) rotate(0deg);
            opacity:1;
          }
          19.271% {
            transform:translate(48.934px,57px) rotate(0deg);
          }
          19.792% {
            transform:translate(50.117px,57px) rotate(0deg);
          }
          20.313% {
            transform:translate(51.397px,57px) rotate(0deg);
          }
          20.833% {
            transform:translate(52.731px,57px) rotate(0deg);
            opacity:1;
          }
          21.354% {
            transform:translate(54.073px,57px) rotate(0deg);
          }
          21.875% {
            transform:translate(55.38px,57px) rotate(0deg);
          }
          22.396% {
            transform:translate(56.607px,57px) rotate(0deg);
          }
          22.917% {
            transform:translate(57.711px,57px) rotate(0deg);
            opacity:1;
          }
          23.438% {
            transform:translate(58.646px,57px) rotate(0deg);
          }
          23.958% {
            transform:translate(59.369px,57px) rotate(0deg);
          }
          24.479% {
            transform:translate(59.835px,57px) rotate(0deg);
          }
          25% {
            transform:translate(60px,57px) rotate(0deg);
            opacity:1;
          }
          25.521% {
            transform:translate(62px,57px) rotate(0deg);
          }
          26.042% {
            transform:translate(64px,57px) rotate(0deg);
          }
          26.563% {
            transform:translate(66px,57px) rotate(0deg);
          }
          27.083% {
            transform:translate(68px,57px) rotate(0deg);
            opacity:1;
          }
          27.604% {
            transform:translate(70px,57px) rotate(0deg);
          }
          28.125% {
            transform:translate(72px,57.191px) rotate(10.574deg);
          }
          28.646% {
            transform:translate(74px,57.729px) rotate(19.12deg);
          }
          29.167% {
            transform:translate(76px,58.56px) rotate(25.641deg);
            opacity:1;
          }
          29.688% {
            transform:translate(78px,59.631px) rotate(30.399deg);
          }
          30.208% {
            transform:translate(80px,60.889px) rotate(33.69deg);
          }
          30.729% {
            transform:translate(82px,62.28px) rotate(35.754deg);
          }
          31.25% {
            transform:translate(84px,63.751px) rotate(36.747deg);
            opacity:1;
          }
          31.771% {
            transform:translate(86px,65.249px) rotate(36.747deg);
          }
          32.292% {
            transform:translate(88px,66.72px) rotate(35.754deg);
          }
          32.813% {
            transform:translate(90px,68.111px) rotate(33.69deg);
          }
          33.333% {
            transform:translate(92px,69.369px) rotate(30.399deg);
            opacity:1;
          }
          33.854% {
            transform:translate(94px,70.44px) rotate(25.641deg);
          }
          34.375% {
            transform:translate(96px,71.271px) rotate(19.12deg);
          }
          34.896% {
            transform:translate(98px,71.809px) rotate(10.574deg);
          }
          35.417% {
            transform:translate(100px,72px) rotate(0deg);
            opacity:1;
          }
          35.938% {
            transform:translate(102px,72px) rotate(0deg);
          }
          36.458% {
            transform:translate(104px,72px) rotate(0deg);
          }
          36.979% {
            transform:translate(106px,72px) rotate(0deg);
          }
          37.5% {
            transform:translate(108px,72px) rotate(0deg);
            opacity:1;
          }
          38.021% {
            transform:translate(110px,72px) rotate(0deg);
          }
          38.542% {
            transform:translate(112px,72px) rotate(0deg);
          }
          39.063% {
            transform:translate(114px,72px) rotate(0deg);
          }
          39.583% {
            transform:translate(116px,72px) rotate(0deg);
            opacity:1;
          }
          40.104% {
            transform:translate(118px,72px) rotate(0deg);
          }
          40.625% {
            transform:translate(120px,72px) rotate(0deg);
          }
          41.146% {
            transform:translate(122px,72px) rotate(0deg);
          }
          41.667% {
            transform:translate(124px,72px) rotate(0deg);
            opacity:1;
          }
          42.188% {
            transform:translate(126px,72px) rotate(0deg);
          }
          42.708% {
            transform:translate(128px,72px) rotate(0deg);
          }
          43.229% {
            transform:translate(130px,72px) rotate(0deg);
          }
          43.75% {
            transform:translate(132px,72px) rotate(0deg);
            opacity:0.156;
          }
          44.271% {
            transform:translate(134px,72px) rotate(0deg);
          }
          44.792% {
            transform:translate(136px,72px) rotate(0deg);
          }
          45.313% {
            transform:translate(138px,72px) rotate(0deg);
          }
          45.833% {
            transform:translate(140px,72px) rotate(0deg);
            opacity:0;
          }
          46.354% {
            transform:translate(142px,72px) rotate(0deg);
          }
          46.875% {
            transform:translate(144px,72px) rotate(0deg);
          }
          47.396% {
            transform:translate(146px,72px) rotate(0deg);
          }
          47.917% {
            transform:translate(148px,72px) rotate(0deg);
            opacity:0;
          }
          48.438% {
            transform:translate(150px,72px) rotate(0deg);
          }
          48.958% {
            transform:translate(152px,72px) rotate(0deg);
          }
          49.479% {
            transform:translate(154px,72px) rotate(0deg);
          }
          50% {
            transform:translate(156px,72px) rotate(0deg);
            opacity:0;
          }
          50.521% {
            transform:translate(158px,72px) rotate(0deg);
          }
          51.042% {
            transform:translate(160px,72px) rotate(0deg);
          }
          51.563% {
            transform:translate(162px,72px) rotate(0deg);
          }
          52.083% {
            transform:translate(164px,72px) rotate(0deg);
            opacity:0;
          }
          52.604% {
            transform:translate(166px,72px) rotate(0deg);
          }
          53.125% {
            transform:translate(168px,72px) rotate(0deg);
          }
          53.646% {
            transform:translate(170px,72px) rotate(0deg);
          }
          54.167% {
            transform:translate(172px,72px) rotate(0deg);
            opacity:0;
          }
          54.688% {
            transform:translate(174px,72px) rotate(0deg);
          }
          55.208% {
            transform:translate(176px,72px) rotate(0deg);
          }
          55.729% {
            transform:translate(178px,72px) rotate(0deg);
          }
          56.25% {
            transform:translate(180px,72px) rotate(0deg);
            opacity:0;
          }
          56.771% {
            transform:translate(182px,72px) rotate(0deg);
          }
          57.292% {
            transform:translate(184px,72px) rotate(0deg);
          }
          57.813% {
            transform:translate(186px,72px) rotate(0deg);
          }
          58.333% {
            transform:translate(188px,72px) rotate(0deg);
            opacity:0;
          }
          58.854% {
            transform:translate(190px,72px) rotate(0deg);
          }
          59.375% {
            transform:translate(192px,72px) rotate(0deg);
          }
          59.896% {
            transform:translate(194px,72px) rotate(0deg);
          }
          60.417% {
            transform:translate(196px,72px) rotate(0deg);
            opacity:0;
          }
          60.938% {
            transform:translate(198px,72px) rotate(0deg);
          }
          61.458% {
            transform:translate(200px,72px) rotate(0deg);
          }
          61.979% {
            transform:translate(202px,72px) rotate(0deg);
          }
          62.5% {
            transform:translate(204px,72px) rotate(0deg);
            opacity:0;
          }
          63.021% {
            transform:translate(206px,72px) rotate(0deg);
          }
          63.542% {
            transform:translate(208px,72px) rotate(0deg);
          }
          64.063% {
            transform:translate(210px,72px) rotate(0deg);
          }
          64.583% {
            transform:translate(212px,72px) rotate(0deg);
            opacity:0;
          }
          65.104% {
            transform:translate(214px,72px) rotate(0deg);
          }
          65.625% {
            transform:translate(216px,72px) rotate(0deg);
          }
          66.146% {
            transform:translate(218px,72px) rotate(0deg);
          }
          66.667% {
            transform:translate(220px,72px) rotate(0deg);
            opacity:0;
          }
          67.188% {
            transform:translate(222px,72px) rotate(0deg);
          }
          67.708% {
            transform:translate(224px,72px) rotate(0deg);
          }
          68.229% {
            transform:translate(226px,72px) rotate(0deg);
          }
          68.75% {
            transform:translate(228px,72px) rotate(0deg);
            opacity:0;
          }
          69.271% {
            transform:translate(230px,72px) rotate(0deg);
          }
          69.792% {
            transform:translate(232px,72px) rotate(0deg);
          }
          70.313% {
            transform:translate(234px,72px) rotate(0deg);
          }
          70.833% {
            transform:translate(236px,72px) rotate(0deg);
            opacity:0;
          }
          71.354% {
            transform:translate(238px,72px) rotate(0deg);
          }
          71.875% {
            transform:translate(240px,72px) rotate(0deg);
          }
          72.396% {
            transform:translate(242px,72px) rotate(0deg);
          }
          72.917% {
            transform:translate(244px,72px) rotate(0deg);
            opacity:0;
          }
          73.438% {
            transform:translate(246px,72px) rotate(0deg);
          }
          73.958% {
            transform:translate(248px,72px) rotate(0deg);
          }
          74.479% {
            transform:translate(250px,72px) rotate(0deg);
          }
          75% {
            transform:translate(252px,72px) rotate(0deg);
            opacity:0;
          }
          75.521% {
            transform:translate(254px,72px) rotate(0deg);
          }
          76.042% {
            transform:translate(256px,72px) rotate(0deg);
          }
          76.563% {
            transform:translate(258px,72px) rotate(0deg);
          }
          77.083% {
            transform:translate(260px,72px) rotate(0deg);
            opacity:0;
          }
          77.604% {
            transform:translate(262px,72px) rotate(0deg);
          }
          78.125% {
            transform:translate(264px,72px) rotate(0deg);
          }
          78.646% {
            transform:translate(266px,72px) rotate(0deg);
          }
          79.167% {
            transform:translate(268px,72px) rotate(0deg);
            opacity:0;
          }
          79.688% {
            transform:translate(270px,72px) rotate(0deg);
          }
          80.208% {
            transform:translate(272px,72px) rotate(0deg);
          }
          80.729% {
            transform:translate(274px,72px) rotate(0deg);
          }
          81.25% {
            transform:translate(276px,72px) rotate(0deg);
            opacity:0;
          }
          81.771% {
            transform:translate(278px,72px) rotate(0deg);
          }
          82.292% {
            transform:translate(280px,72px) rotate(0deg);
          }
          82.813% {
            transform:translate(282px,72px) rotate(0deg);
          }
          83.333% {
            transform:translate(284px,72px) rotate(0deg);
            opacity:0;
          }
          83.854% {
            transform:translate(286px,72px) rotate(0deg);
          }
          84.375% {
            transform:translate(288px,72px) rotate(0deg);
          }
          84.896% {
            transform:translate(290px,72px) rotate(0deg);
          }
          85.417% {
            transform:translate(292px,72px) rotate(0deg);
            opacity:0;
          }
          85.938% {
            transform:translate(294px,72px) rotate(0deg);
          }
          86.458% {
            transform:translate(296px,72px) rotate(0deg);
          }
          86.979% {
            transform:translate(298px,72px) rotate(0deg);
          }
          87.5% {
            transform:translate(300px,72px) rotate(0deg);
            opacity:0;
          }
          88.021% {
            transform:translate(302px,72px) rotate(0deg);
          }
          88.542% {
            transform:translate(304px,72px) rotate(0deg);
          }
          89.063% {
            transform:translate(306px,72px) rotate(0deg);
          }
          89.583% {
            transform:translate(308px,72px) rotate(0deg);
            opacity:0;
          }
          90.104% {
            transform:translate(310px,72px) rotate(0deg);
          }
          90.625% {
            transform:translate(312px,72px) rotate(0deg);
          }
          91.146% {
            transform:translate(314px,72px) rotate(0deg);
          }
          91.667% {
            transform:translate(316px,72px) rotate(0deg);
            opacity:0;
          }
          92.188% {
            transform:translate(318px,72px) rotate(0deg);
          }
          92.708% {
            transform:translate(320px,72px) rotate(0deg);
          }
          93.229% {
            transform:translate(322px,72px) rotate(0deg);
          }
          93.75% {
            transform:translate(324px,72px) rotate(0deg);
            opacity:0;
          }
          94.271% {
            transform:translate(326px,72px) rotate(0deg);
          }
          94.792% {
            transform:translate(328px,72px) rotate(0deg);
          }
          95.313% {
            transform:translate(330px,72px) rotate(0deg);
          }
          95.833% {
            transform:translate(332px,72px) rotate(0deg);
            opacity:0;
          }
          96.354% {
            transform:translate(334px,72px) rotate(0deg);
          }
          96.875% {
            transform:translate(336px,72px) rotate(0deg);
          }
          97.396% {
            transform:translate(338px,72px) rotate(0deg);
          }
          97.917% {
            transform:translate(340px,72px) rotate(0deg);
            opacity:0;
          }
          98.438% {
            transform:translate(342px,72px) rotate(0deg);
          }
          98.958% {
            transform:translate(344px,72px) rotate(0deg);
          }
          99.479% {
            transform:translate(346px,72px) rotate(0deg);
          }
          100% {
            transform:translate(348px,72px) rotate(0deg);
            opacity:0;
          }
        }
        @keyframes merge3 {
          0% {
            transform:translate(46px,87px) rotate(0deg);
            opacity:1;
          }
          0.521% {
            transform:translate(46px,87px) rotate(0deg);
          }
          1.042% {
            transform:translate(46px,87px) rotate(0deg);
          }
          1.563% {
            transform:translate(46px,87px) rotate(0deg);
          }
          2.083% {
            transform:translate(46px,87px) rotate(0deg);
            opacity:1;
          }
          2.604% {
            transform:translate(46px,87px) rotate(0deg);
          }
          3.125% {
            transform:translate(46px,87px) rotate(0deg);
          }
          3.646% {
            transform:translate(46px,87px) rotate(0deg);
          }
          4.167% {
            transform:translate(46px,87px) rotate(0deg);
            opacity:1;
          }
          4.688% {
            transform:translate(46px,87px) rotate(0deg);
          }
          5.208% {
            transform:translate(46px,87px) rotate(0deg);
          }
          5.729% {
            transform:translate(46px,87px) rotate(0deg);
          }
          6.25% {
            transform:translate(46px,87px) rotate(0deg);
            opacity:1;
          }
          6.771% {
            transform:translate(46px,87px) rotate(0deg);
          }
          7.292% {
            transform:translate(46px,87px) rotate(0deg);
          }
          7.813% {
            transform:translate(46px,87px) rotate(0deg);
          }
          8.333% {
            transform:translate(46px,87px) rotate(0deg);
            opacity:1;
          }
          8.854% {
            transform:translate(46px,87px) rotate(0deg);
          }
          9.375% {
            transform:translate(46px,87px) rotate(0deg);
          }
          9.896% {
            transform:translate(46px,87px) rotate(0deg);
          }
          10.417% {
            transform:translate(46px,87px) rotate(0deg);
            opacity:1;
          }
          10.938% {
            transform:translate(46px,87px) rotate(0deg);
          }
          11.458% {
            transform:translate(46px,87px) rotate(0deg);
          }
          11.979% {
            transform:translate(46px,87px) rotate(0deg);
          }
          12.5% {
            transform:translate(46px,87px) rotate(0deg);
            opacity:1;
          }
          13.021% {
            transform:translate(46px,87px) rotate(0deg);
          }
          13.542% {
            transform:translate(46px,87px) rotate(0deg);
          }
          14.063% {
            transform:translate(46px,87px) rotate(0deg);
          }
          14.583% {
            transform:translate(46px,87px) rotate(0deg);
            opacity:1;
          }
          15.104% {
            transform:translate(46px,87px) rotate(0deg);
          }
          15.625% {
            transform:translate(46px,87px) rotate(0deg);
          }
          16.146% {
            transform:translate(46px,87px) rotate(0deg);
          }
          16.667% {
            transform:translate(46px,87px) rotate(0deg);
            opacity:1;
          }
          17.188% {
            transform:translate(46px,87px) rotate(0deg);
          }
          17.708% {
            transform:translate(46px,87px) rotate(0deg);
          }
          18.229% {
            transform:translate(46px,87px) rotate(0deg);
          }
          18.75% {
            transform:translate(46px,87px) rotate(0deg);
            opacity:1;
          }
          19.271% {
            transform:translate(46px,87px) rotate(0deg);
          }
          19.792% {
            transform:translate(46px,87px) rotate(0deg);
          }
          20.313% {
            transform:translate(46px,87px) rotate(0deg);
          }
          20.833% {
            transform:translate(46px,87px) rotate(0deg);
            opacity:1;
          }
          21.354% {
            transform:translate(46px,87px) rotate(0deg);
          }
          21.875% {
            transform:translate(46px,87px) rotate(0deg);
          }
          22.396% {
            transform:translate(46px,87px) rotate(0deg);
          }
          22.917% {
            transform:translate(46px,87px) rotate(0deg);
            opacity:1;
          }
          23.438% {
            transform:translate(46px,87px) rotate(0deg);
          }
          23.958% {
            transform:translate(46px,87px) rotate(0deg);
          }
          24.479% {
            transform:translate(46px,87px) rotate(0deg);
          }
          25% {
            transform:translate(46px,87px) rotate(0deg);
            opacity:1;
          }
          25.521% {
            transform:translate(46px,87px) rotate(0deg);
          }
          26.042% {
            transform:translate(46px,87px) rotate(0deg);
          }
          26.563% {
            transform:translate(46.061px,87px) rotate(0deg);
          }
          27.083% {
            transform:translate(46.412px,87px) rotate(0deg);
            opacity:1;
          }
          27.604% {
            transform:translate(47.037px,87px) rotate(0deg);
          }
          28.125% {
            transform:translate(47.893px,87px) rotate(0deg);
          }
          28.646% {
            transform:translate(48.934px,87px) rotate(0deg);
          }
          29.167% {
            transform:translate(50.117px,87px) rotate(0deg);
            opacity:1;
          }
          29.688% {
            transform:translate(51.397px,87px) rotate(0deg);
          }
          30.208% {
            transform:translate(52.731px,87px) rotate(0deg);
          }
          30.729% {
            transform:translate(54.073px,87px) rotate(0deg);
          }
          31.25% {
            transform:translate(55.38px,87px) rotate(0deg);
            opacity:1;
          }
          31.771% {
            transform:translate(56.607px,87px) rotate(0deg);
          }
          32.292% {
            transform:translate(57.711px,87px) rotate(0deg);
          }
          32.813% {
            transform:translate(58.646px,87px) rotate(0deg);
          }
          33.333% {
            transform:translate(59.369px,87px) rotate(0deg);
            opacity:1;
          }
          33.854% {
            transform:translate(59.835px,87px) rotate(0deg);
          }
          34.375% {
            transform:translate(60px,87px) rotate(0deg);
          }
          34.896% {
            transform:translate(62px,87px) rotate(0deg);
          }
          35.417% {
            transform:translate(64px,87px) rotate(0deg);
            opacity:1;
          }
          35.938% {
            transform:translate(66px,87px) rotate(0deg);
          }
          36.458% {
            transform:translate(68px,87px) rotate(0deg);
          }
          36.979% {
            transform:translate(70px,87px) rotate(0deg);
          }
          37.5% {
            transform:translate(72px,86.809px) rotate(-10.574deg);
            opacity:1;
          }
          38.021% {
            transform:translate(74px,86.271px) rotate(-19.12deg);
          }
          38.542% {
            transform:translate(76px,85.44px) rotate(-25.641deg);
          }
          39.063% {
            transform:translate(78px,84.369px) rotate(-30.399deg);
          }
          39.583% {
            transform:translate(80px,83.111px) rotate(-33.69deg);
            opacity:1;
          }
          40.104% {
            transform:translate(82px,81.72px) rotate(-35.754deg);
          }
          40.625% {
            transform:translate(84px,80.249px) rotate(-36.747deg);
          }
          41.146% {
            transform:translate(86px,78.751px) rotate(-36.747deg);
          }
          41.667% {
            transform:translate(88px,77.28px) rotate(-35.754deg);
            opacity:1;
          }
          42.188% {
            transform:translate(90px,75.889px) rotate(-33.69deg);
          }
          42.708% {
            transform:translate(92px,74.631px) rotate(-30.399deg);
          }
          43.229% {
            transform:translate(94px,73.56px) rotate(-25.641deg);
          }
          43.75% {
            transform:translate(96px,72.729px) rotate(-19.12deg);
            opacity:1;
          }
          44.271% {
            transform:translate(98px,72.191px) rotate(-10.574deg);
          }
          44.792% {
            transform:translate(100px,72px) rotate(0deg);
          }
          45.313% {
            transform:translate(102px,72px) rotate(0deg);
          }
          45.833% {
            transform:translate(104px,72px) rotate(0deg);
            opacity:1;
          }
          46.354% {
            transform:translate(106px,72px) rotate(0deg);
          }
          46.875% {
            transform:translate(108px,72px) rotate(0deg);
          }
          47.396% {
            transform:translate(110px,72px) rotate(0deg);
          }
          47.917% {
            transform:translate(112px,72px) rotate(0deg);
            opacity:1;
          }
          48.438% {
            transform:translate(114px,72px) rotate(0deg);
          }
          48.958% {
            transform:translate(116px,72px) rotate(0deg);
          }
          49.479% {
            transform:translate(118px,72px) rotate(0deg);
          }
          50% {
            transform:translate(120px,72px) rotate(0deg);
            opacity:1;
          }
          50.521% {
            transform:translate(122px,72px) rotate(0deg);
          }
          51.042% {
            transform:translate(124px,72px) rotate(0deg);
          }
          51.563% {
            transform:translate(126px,72px) rotate(0deg);
          }
          52.083% {
            transform:translate(128px,72px) rotate(0deg);
            opacity:0.844;
          }
          52.604% {
            transform:translate(130px,72px) rotate(0deg);
          }
          53.125% {
            transform:translate(132px,72px) rotate(0deg);
          }
          53.646% {
            transform:translate(134px,72px) rotate(0deg);
          }
          54.167% {
            transform:translate(136px,72px) rotate(0deg);
            opacity:0;
          }
          54.688% {
            transform:translate(138px,72px) rotate(0deg);
          }
          55.208% {
            transform:translate(140px,72px) rotate(0deg);
          }
          55.729% {
            transform:translate(142px,72px) rotate(0deg);
          }
          56.25% {
            transform:translate(144px,72px) rotate(0deg);
            opacity:0;
          }
          56.771% {
            transform:translate(146px,72px) rotate(0deg);
          }
          57.292% {
            transform:translate(148px,72px) rotate(0deg);
          }
          57.813% {
            transform:translate(150px,72px) rotate(0deg);
          }
          58.333% {
            transform:translate(152px,72px) rotate(0deg);
            opacity:0;
          }
          58.854% {
            transform:translate(154px,72px) rotate(0deg);
          }
          59.375% {
            transform:translate(156px,72px) rotate(0deg);
          }
          59.896% {
            transform:translate(158px,72px) rotate(0deg);
          }
          60.417% {
            transform:translate(160px,72px) rotate(0deg);
            opacity:0;
          }
          60.938% {
            transform:translate(162px,72px) rotate(0deg);
          }
          61.458% {
            transform:translate(164px,72px) rotate(0deg);
          }
          61.979% {
            transform:translate(166px,72px) rotate(0deg);
          }
          62.5% {
            transform:translate(168px,72px) rotate(0deg);
            opacity:0;
          }
          63.021% {
            transform:translate(170px,72px) rotate(0deg);
          }
          63.542% {
            transform:translate(172px,72px) rotate(0deg);
          }
          64.063% {
            transform:translate(174px,72px) rotate(0deg);
          }
          64.583% {
            transform:translate(176px,72px) rotate(0deg);
            opacity:0;
          }
          65.104% {
            transform:translate(178px,72px) rotate(0deg);
          }
          65.625% {
            transform:translate(180px,72px) rotate(0deg);
          }
          66.146% {
            transform:translate(182px,72px) rotate(0deg);
          }
          66.667% {
            transform:translate(184px,72px) rotate(0deg);
            opacity:0;
          }
          67.188% {
            transform:translate(186px,72px) rotate(0deg);
          }
          67.708% {
            transform:translate(188px,72px) rotate(0deg);
          }
          68.229% {
            transform:translate(190px,72px) rotate(0deg);
          }
          68.75% {
            transform:translate(192px,72px) rotate(0deg);
            opacity:0;
          }
          69.271% {
            transform:translate(194px,72px) rotate(0deg);
          }
          69.792% {
            transform:translate(196px,72px) rotate(0deg);
          }
          70.313% {
            transform:translate(198px,72px) rotate(0deg);
          }
          70.833% {
            transform:translate(200px,72px) rotate(0deg);
            opacity:0;
          }
          71.354% {
            transform:translate(202px,72px) rotate(0deg);
          }
          71.875% {
            transform:translate(204px,72px) rotate(0deg);
          }
          72.396% {
            transform:translate(206px,72px) rotate(0deg);
          }
          72.917% {
            transform:translate(208px,72px) rotate(0deg);
            opacity:0;
          }
          73.438% {
            transform:translate(210px,72px) rotate(0deg);
          }
          73.958% {
            transform:translate(212px,72px) rotate(0deg);
          }
          74.479% {
            transform:translate(214px,72px) rotate(0deg);
          }
          75% {
            transform:translate(216px,72px) rotate(0deg);
            opacity:0;
          }
          75.521% {
            transform:translate(218px,72px) rotate(0deg);
          }
          76.042% {
            transform:translate(220px,72px) rotate(0deg);
          }
          76.563% {
            transform:translate(222px,72px) rotate(0deg);
          }
          77.083% {
            transform:translate(224px,72px) rotate(0deg);
            opacity:0;
          }
          77.604% {
            transform:translate(226px,72px) rotate(0deg);
          }
          78.125% {
            transform:translate(228px,72px) rotate(0deg);
          }
          78.646% {
            transform:translate(230px,72px) rotate(0deg);
          }
          79.167% {
            transform:translate(232px,72px) rotate(0deg);
            opacity:0;
          }
          79.688% {
            transform:translate(234px,72px) rotate(0deg);
          }
          80.208% {
            transform:translate(236px,72px) rotate(0deg);
          }
          80.729% {
            transform:translate(238px,72px) rotate(0deg);
          }
          81.25% {
            transform:translate(240px,72px) rotate(0deg);
            opacity:0;
          }
          81.771% {
            transform:translate(242px,72px) rotate(0deg);
          }
          82.292% {
            transform:translate(244px,72px) rotate(0deg);
          }
          82.813% {
            transform:translate(246px,72px) rotate(0deg);
          }
          83.333% {
            transform:translate(248px,72px) rotate(0deg);
            opacity:0;
          }
          83.854% {
            transform:translate(250px,72px) rotate(0deg);
          }
          84.375% {
            transform:translate(252px,72px) rotate(0deg);
          }
          84.896% {
            transform:translate(254px,72px) rotate(0deg);
          }
          85.417% {
            transform:translate(256px,72px) rotate(0deg);
            opacity:0;
          }
          85.938% {
            transform:translate(258px,72px) rotate(0deg);
          }
          86.458% {
            transform:translate(260px,72px) rotate(0deg);
          }
          86.979% {
            transform:translate(262px,72px) rotate(0deg);
          }
          87.5% {
            transform:translate(264px,72px) rotate(0deg);
            opacity:0;
          }
          88.021% {
            transform:translate(266px,72px) rotate(0deg);
          }
          88.542% {
            transform:translate(268px,72px) rotate(0deg);
          }
          89.063% {
            transform:translate(270px,72px) rotate(0deg);
          }
          89.583% {
            transform:translate(272px,72px) rotate(0deg);
            opacity:0;
          }
          90.104% {
            transform:translate(274px,72px) rotate(0deg);
          }
          90.625% {
            transform:translate(276px,72px) rotate(0deg);
          }
          91.146% {
            transform:translate(278px,72px) rotate(0deg);
          }
          91.667% {
            transform:translate(280px,72px) rotate(0deg);
            opacity:0;
          }
          92.188% {
            transform:translate(282px,72px) rotate(0deg);
          }
          92.708% {
            transform:translate(284px,72px) rotate(0deg);
          }
          93.229% {
            transform:translate(286px,72px) rotate(0deg);
          }
          93.75% {
            transform:translate(288px,72px) rotate(0deg);
            opacity:0;
          }
          94.271% {
            transform:translate(290px,72px) rotate(0deg);
          }
          94.792% {
            transform:translate(292px,72px) rotate(0deg);
          }
          95.313% {
            transform:translate(294px,72px) rotate(0deg);
          }
          95.833% {
            transform:translate(296px,72px) rotate(0deg);
            opacity:0;
          }
          96.354% {
            transform:translate(298px,72px) rotate(0deg);
          }
          96.875% {
            transform:translate(300px,72px) rotate(0deg);
          }
          97.396% {
            transform:translate(302px,72px) rotate(0deg);
          }
          97.917% {
            transform:translate(304px,72px) rotate(0deg);
            opacity:0;
          }
          98.438% {
            transform:translate(306px,72px) rotate(0deg);
          }
          98.958% {
            transform:translate(308px,72px) rotate(0deg);
          }
          99.479% {
            transform:translate(310px,72px) rotate(0deg);
          }
          100% {
            transform:translate(312px,72px) rotate(0deg);
            opacity:0;
          }
        }
        @keyframes merge4 {
          0% {
            transform:translate(32px,57px) rotate(0deg);
            opacity:1;
          }
          0.521% {
            transform:translate(32px,57px) rotate(0deg);
          }
          1.042% {
            transform:translate(32px,57px) rotate(0deg);
          }
          1.563% {
            transform:translate(32px,57px) rotate(0deg);
          }
          2.083% {
            transform:translate(32px,57px) rotate(0deg);
            opacity:1;
          }
          2.604% {
            transform:translate(32px,57px) rotate(0deg);
          }
          3.125% {
            transform:translate(32px,57px) rotate(0deg);
          }
          3.646% {
            transform:translate(32px,57px) rotate(0deg);
          }
          4.167% {
            transform:translate(32px,57px) rotate(0deg);
            opacity:1;
          }
          4.688% {
            transform:translate(32px,57px) rotate(0deg);
          }
          5.208% {
            transform:translate(32px,57px) rotate(0deg);
          }
          5.729% {
            transform:translate(32px,57px) rotate(0deg);
          }
          6.25% {
            transform:translate(32px,57px) rotate(0deg);
            opacity:1;
          }
          6.771% {
            transform:translate(32px,57px) rotate(0deg);
          }
          7.292% {
            transform:translate(32px,57px) rotate(0deg);
          }
          7.813% {
            transform:translate(32px,57px) rotate(0deg);
          }
          8.333% {
            transform:translate(32px,57px) rotate(0deg);
            opacity:1;
          }
          8.854% {
            transform:translate(32px,57px) rotate(0deg);
          }
          9.375% {
            transform:translate(32px,57px) rotate(0deg);
          }
          9.896% {
            transform:translate(32px,57px) rotate(0deg);
          }
          10.417% {
            transform:translate(32px,57px) rotate(0deg);
            opacity:1;
          }
          10.938% {
            transform:translate(32px,57px) rotate(0deg);
          }
          11.458% {
            transform:translate(32px,57px) rotate(0deg);
          }
          11.979% {
            transform:translate(32px,57px) rotate(0deg);
          }
          12.5% {
            transform:translate(32px,57px) rotate(0deg);
            opacity:1;
          }
          13.021% {
            transform:translate(32px,57px) rotate(0deg);
          }
          13.542% {
            transform:translate(32px,57px) rotate(0deg);
          }
          14.063% {
            transform:translate(32px,57px) rotate(0deg);
          }
          14.583% {
            transform:translate(32px,57px) rotate(0deg);
            opacity:1;
          }
          15.104% {
            transform:translate(32px,57px) rotate(0deg);
          }
          15.625% {
            transform:translate(32px,57px) rotate(0deg);
          }
          16.146% {
            transform:translate(32px,57px) rotate(0deg);
          }
          16.667% {
            transform:translate(32px,57px) rotate(0deg);
            opacity:1;
          }
          17.188% {
            transform:translate(32px,57px) rotate(0deg);
          }
          17.708% {
            transform:translate(32px,57px) rotate(0deg);
          }
          18.229% {
            transform:translate(32px,57px) rotate(0deg);
          }
          18.75% {
            transform:translate(32px,57px) rotate(0deg);
            opacity:1;
          }
          19.271% {
            transform:translate(32px,57px) rotate(0deg);
          }
          19.792% {
            transform:translate(32px,57px) rotate(0deg);
          }
          20.313% {
            transform:translate(32px,57px) rotate(0deg);
          }
          20.833% {
            transform:translate(32px,57px) rotate(0deg);
            opacity:1;
          }
          21.354% {
            transform:translate(32px,57px) rotate(0deg);
          }
          21.875% {
            transform:translate(32px,57px) rotate(0deg);
          }
          22.396% {
            transform:translate(32px,57px) rotate(0deg);
          }
          22.917% {
            transform:translate(32px,57px) rotate(0deg);
            opacity:1;
          }
          23.438% {
            transform:translate(32px,57px) rotate(0deg);
          }
          23.958% {
            transform:translate(32px,57px) rotate(0deg);
          }
          24.479% {
            transform:translate(32px,57px) rotate(0deg);
          }
          25% {
            transform:translate(32px,57px) rotate(0deg);
            opacity:1;
          }
          25.521% {
            transform:translate(32px,57px) rotate(0deg);
          }
          26.042% {
            transform:translate(32px,57px) rotate(0deg);
          }
          26.563% {
            transform:translate(32px,57px) rotate(0deg);
          }
          27.083% {
            transform:translate(32px,57px) rotate(0deg);
            opacity:1;
          }
          27.604% {
            transform:translate(32px,57px) rotate(0deg);
          }
          28.125% {
            transform:translate(32px,57px) rotate(0deg);
          }
          28.646% {
            transform:translate(32px,57px) rotate(0deg);
          }
          29.167% {
            transform:translate(32px,57px) rotate(0deg);
            opacity:1;
          }
          29.688% {
            transform:translate(32px,57px) rotate(0deg);
          }
          30.208% {
            transform:translate(32px,57px) rotate(0deg);
          }
          30.729% {
            transform:translate(32px,57px) rotate(0deg);
          }
          31.25% {
            transform:translate(32px,57px) rotate(0deg);
            opacity:1;
          }
          31.771% {
            transform:translate(32px,57px) rotate(0deg);
          }
          32.292% {
            transform:translate(32px,57px) rotate(0deg);
          }
          32.813% {
            transform:translate(32px,57px) rotate(0deg);
          }
          33.333% {
            transform:translate(32px,57px) rotate(0deg);
            opacity:1;
          }
          33.854% {
            transform:translate(32px,57px) rotate(0deg);
          }
          34.375% {
            transform:translate(32px,57px) rotate(0deg);
          }
          34.896% {
            transform:translate(32px,57px) rotate(0deg);
          }
          35.417% {
            transform:translate(32px,57px) rotate(0deg);
            opacity:1;
          }
          35.938% {
            transform:translate(32.121px,57px) rotate(0deg);
          }
          36.458% {
            transform:translate(32.823px,57px) rotate(0deg);
          }
          36.979% {
            transform:translate(34.074px,57px) rotate(0deg);
          }
          37.5% {
            transform:translate(35.785px,57px) rotate(0deg);
            opacity:1;
          }
          38.021% {
            transform:translate(37.868px,57px) rotate(0deg);
          }
          38.542% {
            transform:translate(40.234px,57px) rotate(0deg);
          }
          39.063% {
            transform:translate(42.795px,57px) rotate(0deg);
          }
          39.583% {
            transform:translate(45.462px,57px) rotate(0deg);
            opacity:1;
          }
          40.104% {
            transform:translate(48.146px,57px) rotate(0deg);
          }
          40.625% {
            transform:translate(50.76px,57px) rotate(0deg);
          }
          41.146% {
            transform:translate(53.215px,57px) rotate(0deg);
          }
          41.667% {
            transform:translate(55.421px,57px) rotate(0deg);
            opacity:1;
          }
          42.188% {
            transform:translate(57.292px,57px) rotate(0deg);
          }
          42.708% {
            transform:translate(58.737px,57px) rotate(0deg);
          }
          43.229% {
            transform:translate(59.67px,57px) rotate(0deg);
          }
          43.75% {
            transform:translate(60px,57px) rotate(0deg);
            opacity:1;
          }
          44.271% {
            transform:translate(62px,57px) rotate(0deg);
          }
          44.792% {
            transform:translate(64px,57px) rotate(0deg);
          }
          45.313% {
            transform:translate(66px,57px) rotate(0deg);
          }
          45.833% {
            transform:translate(68px,57px) rotate(0deg);
            opacity:1;
          }
          46.354% {
            transform:translate(70px,57px) rotate(0deg);
          }
          46.875% {
            transform:translate(72px,57.191px) rotate(10.574deg);
          }
          47.396% {
            transform:translate(74px,57.729px) rotate(19.12deg);
          }
          47.917% {
            transform:translate(76px,58.56px) rotate(25.641deg);
            opacity:1;
          }
          48.438% {
            transform:translate(78px,59.631px) rotate(30.399deg);
          }
          48.958% {
            transform:translate(80px,60.889px) rotate(33.69deg);
          }
          49.479% {
            transform:translate(82px,62.28px) rotate(35.754deg);
          }
          50% {
            transform:translate(84px,63.751px) rotate(36.747deg);
            opacity:1;
          }
          50.521% {
            transform:translate(86px,65.249px) rotate(36.747deg);
          }
          51.042% {
            transform:translate(88px,66.72px) rotate(35.754deg);
          }
          51.563% {
            transform:translate(90px,68.111px) rotate(33.69deg);
          }
          52.083% {
            transform:translate(92px,69.369px) rotate(30.399deg);
            opacity:1;
          }
          52.604% {
            transform:translate(94px,70.44px) rotate(25.641deg);
          }
          53.125% {
            transform:translate(96px,71.271px) rotate(19.12deg);
          }
          53.646% {
            transform:translate(98px,71.809px) rotate(10.574deg);
          }
          54.167% {
            transform:translate(100px,72px) rotate(0deg);
            opacity:1;
          }
          54.688% {
            transform:translate(102px,72px) rotate(0deg);
          }
          55.208% {
            transform:translate(104px,72px) rotate(0deg);
          }
          55.729% {
            transform:translate(106px,72px) rotate(0deg);
          }
          56.25% {
            transform:translate(108px,72px) rotate(0deg);
            opacity:1;
          }
          56.771% {
            transform:translate(110px,72px) rotate(0deg);
          }
          57.292% {
            transform:translate(112px,72px) rotate(0deg);
          }
          57.813% {
            transform:translate(114px,72px) rotate(0deg);
          }
          58.333% {
            transform:translate(116px,72px) rotate(0deg);
            opacity:1;
          }
          58.854% {
            transform:translate(118px,72px) rotate(0deg);
          }
          59.375% {
            transform:translate(120px,72px) rotate(0deg);
          }
          59.896% {
            transform:translate(122px,72px) rotate(0deg);
          }
          60.417% {
            transform:translate(124px,72px) rotate(0deg);
            opacity:1;
          }
          60.938% {
            transform:translate(126px,72px) rotate(0deg);
          }
          61.458% {
            transform:translate(128px,72px) rotate(0deg);
          }
          61.979% {
            transform:translate(130px,72px) rotate(0deg);
          }
          62.5% {
            transform:translate(132px,72px) rotate(0deg);
            opacity:0.156;
          }
          63.021% {
            transform:translate(134px,72px) rotate(0deg);
          }
          63.542% {
            transform:translate(136px,72px) rotate(0deg);
          }
          64.063% {
            transform:translate(138px,72px) rotate(0deg);
          }
          64.583% {
            transform:translate(140px,72px) rotate(0deg);
            opacity:0;
          }
          65.104% {
            transform:translate(142px,72px) rotate(0deg);
          }
          65.625% {
            transform:translate(144px,72px) rotate(0deg);
          }
          66.146% {
            transform:translate(146px,72px) rotate(0deg);
          }
          66.667% {
            transform:translate(148px,72px) rotate(0deg);
            opacity:0;
          }
          67.188% {
            transform:translate(150px,72px) rotate(0deg);
          }
          67.708% {
            transform:translate(152px,72px) rotate(0deg);
          }
          68.229% {
            transform:translate(154px,72px) rotate(0deg);
          }
          68.75% {
            transform:translate(156px,72px) rotate(0deg);
            opacity:0;
          }
          69.271% {
            transform:translate(158px,72px) rotate(0deg);
          }
          69.792% {
            transform:translate(160px,72px) rotate(0deg);
          }
          70.313% {
            transform:translate(162px,72px) rotate(0deg);
          }
          70.833% {
            transform:translate(164px,72px) rotate(0deg);
            opacity:0;
          }
          71.354% {
            transform:translate(166px,72px) rotate(0deg);
          }
          71.875% {
            transform:translate(168px,72px) rotate(0deg);
          }
          72.396% {
            transform:translate(170px,72px) rotate(0deg);
          }
          72.917% {
            transform:translate(172px,72px) rotate(0deg);
            opacity:0;
          }
          73.438% {
            transform:translate(174px,72px) rotate(0deg);
          }
          73.958% {
            transform:translate(176px,72px) rotate(0deg);
          }
          74.479% {
            transform:translate(178px,72px) rotate(0deg);
          }
          75% {
            transform:translate(180px,72px) rotate(0deg);
            opacity:0;
          }
          75.521% {
            transform:translate(182px,72px) rotate(0deg);
          }
          76.042% {
            transform:translate(184px,72px) rotate(0deg);
          }
          76.563% {
            transform:translate(186px,72px) rotate(0deg);
          }
          77.083% {
            transform:translate(188px,72px) rotate(0deg);
            opacity:0;
          }
          77.604% {
            transform:translate(190px,72px) rotate(0deg);
          }
          78.125% {
            transform:translate(192px,72px) rotate(0deg);
          }
          78.646% {
            transform:translate(194px,72px) rotate(0deg);
          }
          79.167% {
            transform:translate(196px,72px) rotate(0deg);
            opacity:0;
          }
          79.688% {
            transform:translate(198px,72px) rotate(0deg);
          }
          80.208% {
            transform:translate(200px,72px) rotate(0deg);
          }
          80.729% {
            transform:translate(202px,72px) rotate(0deg);
          }
          81.25% {
            transform:translate(204px,72px) rotate(0deg);
            opacity:0;
          }
          81.771% {
            transform:translate(206px,72px) rotate(0deg);
          }
          82.292% {
            transform:translate(208px,72px) rotate(0deg);
          }
          82.813% {
            transform:translate(210px,72px) rotate(0deg);
          }
          83.333% {
            transform:translate(212px,72px) rotate(0deg);
            opacity:0;
          }
          83.854% {
            transform:translate(214px,72px) rotate(0deg);
          }
          84.375% {
            transform:translate(216px,72px) rotate(0deg);
          }
          84.896% {
            transform:translate(218px,72px) rotate(0deg);
          }
          85.417% {
            transform:translate(220px,72px) rotate(0deg);
            opacity:0;
          }
          85.938% {
            transform:translate(222px,72px) rotate(0deg);
          }
          86.458% {
            transform:translate(224px,72px) rotate(0deg);
          }
          86.979% {
            transform:translate(226px,72px) rotate(0deg);
          }
          87.5% {
            transform:translate(228px,72px) rotate(0deg);
            opacity:0;
          }
          88.021% {
            transform:translate(230px,72px) rotate(0deg);
          }
          88.542% {
            transform:translate(232px,72px) rotate(0deg);
          }
          89.063% {
            transform:translate(234px,72px) rotate(0deg);
          }
          89.583% {
            transform:translate(236px,72px) rotate(0deg);
            opacity:0;
          }
          90.104% {
            transform:translate(238px,72px) rotate(0deg);
          }
          90.625% {
            transform:translate(240px,72px) rotate(0deg);
          }
          91.146% {
            transform:translate(242px,72px) rotate(0deg);
          }
          91.667% {
            transform:translate(244px,72px) rotate(0deg);
            opacity:0;
          }
          92.188% {
            transform:translate(246px,72px) rotate(0deg);
          }
          92.708% {
            transform:translate(248px,72px) rotate(0deg);
          }
          93.229% {
            transform:translate(250px,72px) rotate(0deg);
          }
          93.75% {
            transform:translate(252px,72px) rotate(0deg);
            opacity:0;
          }
          94.271% {
            transform:translate(254px,72px) rotate(0deg);
          }
          94.792% {
            transform:translate(256px,72px) rotate(0deg);
          }
          95.313% {
            transform:translate(258px,72px) rotate(0deg);
          }
          95.833% {
            transform:translate(260px,72px) rotate(0deg);
            opacity:0;
          }
          96.354% {
            transform:translate(262px,72px) rotate(0deg);
          }
          96.875% {
            transform:translate(264px,72px) rotate(0deg);
          }
          97.396% {
            transform:translate(266px,72px) rotate(0deg);
          }
          97.917% {
            transform:translate(268px,72px) rotate(0deg);
            opacity:0;
          }
          98.438% {
            transform:translate(270px,72px) rotate(0deg);
          }
          98.958% {
            transform:translate(272px,72px) rotate(0deg);
          }
          99.479% {
            transform:translate(274px,72px) rotate(0deg);
          }
          100% {
            transform:translate(276px,72px) rotate(0deg);
            opacity:0;
          }
        }
        @keyframes merge5 {
          0% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          0.521% {
            transform:translate(32px,87px) rotate(0deg);
          }
          1.042% {
            transform:translate(32px,87px) rotate(0deg);
          }
          1.563% {
            transform:translate(32px,87px) rotate(0deg);
          }
          2.083% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          2.604% {
            transform:translate(32px,87px) rotate(0deg);
          }
          3.125% {
            transform:translate(32px,87px) rotate(0deg);
          }
          3.646% {
            transform:translate(32px,87px) rotate(0deg);
          }
          4.167% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          4.688% {
            transform:translate(32px,87px) rotate(0deg);
          }
          5.208% {
            transform:translate(32px,87px) rotate(0deg);
          }
          5.729% {
            transform:translate(32px,87px) rotate(0deg);
          }
          6.25% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          6.771% {
            transform:translate(32px,87px) rotate(0deg);
          }
          7.292% {
            transform:translate(32px,87px) rotate(0deg);
          }
          7.813% {
            transform:translate(32px,87px) rotate(0deg);
          }
          8.333% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          8.854% {
            transform:translate(32px,87px) rotate(0deg);
          }
          9.375% {
            transform:translate(32px,87px) rotate(0deg);
          }
          9.896% {
            transform:translate(32px,87px) rotate(0deg);
          }
          10.417% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          10.938% {
            transform:translate(32px,87px) rotate(0deg);
          }
          11.458% {
            transform:translate(32px,87px) rotate(0deg);
          }
          11.979% {
            transform:translate(32px,87px) rotate(0deg);
          }
          12.5% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          13.021% {
            transform:translate(32px,87px) rotate(0deg);
          }
          13.542% {
            transform:translate(32px,87px) rotate(0deg);
          }
          14.063% {
            transform:translate(32px,87px) rotate(0deg);
          }
          14.583% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          15.104% {
            transform:translate(32px,87px) rotate(0deg);
          }
          15.625% {
            transform:translate(32px,87px) rotate(0deg);
          }
          16.146% {
            transform:translate(32px,87px) rotate(0deg);
          }
          16.667% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          17.188% {
            transform:translate(32px,87px) rotate(0deg);
          }
          17.708% {
            transform:translate(32px,87px) rotate(0deg);
          }
          18.229% {
            transform:translate(32px,87px) rotate(0deg);
          }
          18.75% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          19.271% {
            transform:translate(32px,87px) rotate(0deg);
          }
          19.792% {
            transform:translate(32px,87px) rotate(0deg);
          }
          20.313% {
            transform:translate(32px,87px) rotate(0deg);
          }
          20.833% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          21.354% {
            transform:translate(32px,87px) rotate(0deg);
          }
          21.875% {
            transform:translate(32px,87px) rotate(0deg);
          }
          22.396% {
            transform:translate(32px,87px) rotate(0deg);
          }
          22.917% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          23.438% {
            transform:translate(32px,87px) rotate(0deg);
          }
          23.958% {
            transform:translate(32px,87px) rotate(0deg);
          }
          24.479% {
            transform:translate(32px,87px) rotate(0deg);
          }
          25% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          25.521% {
            transform:translate(32px,87px) rotate(0deg);
          }
          26.042% {
            transform:translate(32px,87px) rotate(0deg);
          }
          26.563% {
            transform:translate(32px,87px) rotate(0deg);
          }
          27.083% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          27.604% {
            transform:translate(32px,87px) rotate(0deg);
          }
          28.125% {
            transform:translate(32px,87px) rotate(0deg);
          }
          28.646% {
            transform:translate(32px,87px) rotate(0deg);
          }
          29.167% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          29.688% {
            transform:translate(32px,87px) rotate(0deg);
          }
          30.208% {
            transform:translate(32px,87px) rotate(0deg);
          }
          30.729% {
            transform:translate(32px,87px) rotate(0deg);
          }
          31.25% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          31.771% {
            transform:translate(32px,87px) rotate(0deg);
          }
          32.292% {
            transform:translate(32px,87px) rotate(0deg);
          }
          32.813% {
            transform:translate(32px,87px) rotate(0deg);
          }
          33.333% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          33.854% {
            transform:translate(32px,87px) rotate(0deg);
          }
          34.375% {
            transform:translate(32px,87px) rotate(0deg);
          }
          34.896% {
            transform:translate(32px,87px) rotate(0deg);
          }
          35.417% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          35.938% {
            transform:translate(32px,87px) rotate(0deg);
          }
          36.458% {
            transform:translate(32px,87px) rotate(0deg);
          }
          36.979% {
            transform:translate(32px,87px) rotate(0deg);
          }
          37.5% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          38.021% {
            transform:translate(32px,87px) rotate(0deg);
          }
          38.542% {
            transform:translate(32px,87px) rotate(0deg);
          }
          39.063% {
            transform:translate(32px,87px) rotate(0deg);
          }
          39.583% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          40.104% {
            transform:translate(32px,87px) rotate(0deg);
          }
          40.625% {
            transform:translate(32px,87px) rotate(0deg);
          }
          41.146% {
            transform:translate(32px,87px) rotate(0deg);
          }
          41.667% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          42.188% {
            transform:translate(32px,87px) rotate(0deg);
          }
          42.708% {
            transform:translate(32px,87px) rotate(0deg);
          }
          43.229% {
            transform:translate(32px,87px) rotate(0deg);
          }
          43.75% {
            transform:translate(32px,87px) rotate(0deg);
            opacity:1;
          }
          44.271% {
            transform:translate(32px,87px) rotate(0deg);
          }
          44.792% {
            transform:translate(32px,87px) rotate(0deg);
          }
          45.313% {
            transform:translate(32.121px,87px) rotate(0deg);
          }
          45.833% {
            transform:translate(32.823px,87px) rotate(0deg);
            opacity:1;
          }
          46.354% {
            transform:translate(34.074px,87px) rotate(0deg);
          }
          46.875% {
            transform:translate(35.785px,87px) rotate(0deg);
          }
          47.396% {
            transform:translate(37.868px,87px) rotate(0deg);
          }
          47.917% {
            transform:translate(40.234px,87px) rotate(0deg);
            opacity:1;
          }
          48.438% {
            transform:translate(42.795px,87px) rotate(0deg);
          }
          48.958% {
            transform:translate(45.462px,87px) rotate(0deg);
          }
          49.479% {
            transform:translate(48.146px,87px) rotate(0deg);
          }
          50% {
            transform:translate(50.76px,87px) rotate(0deg);
            opacity:1;
          }
          50.521% {
            transform:translate(53.215px,87px) rotate(0deg);
          }
          51.042% {
            transform:translate(55.421px,87px) rotate(0deg);
          }
          51.563% {
            transform:translate(57.292px,87px) rotate(0deg);
          }
          52.083% {
            transform:translate(58.737px,87px) rotate(0deg);
            opacity:1;
          }
          52.604% {
            transform:translate(59.67px,87px) rotate(0deg);
          }
          53.125% {
            transform:translate(60px,87px) rotate(0deg);
          }
          53.646% {
            transform:translate(62px,87px) rotate(0deg);
          }
          54.167% {
            transform:translate(64px,87px) rotate(0deg);
            opacity:1;
          }
          54.688% {
            transform:translate(66px,87px) rotate(0deg);
          }
          55.208% {
            transform:translate(68px,87px) rotate(0deg);
          }
          55.729% {
            transform:translate(70px,87px) rotate(0deg);
          }
          56.25% {
            transform:translate(72px,86.809px) rotate(-10.574deg);
            opacity:1;
          }
          56.771% {
            transform:translate(74px,86.271px) rotate(-19.12deg);
          }
          57.292% {
            transform:translate(76px,85.44px) rotate(-25.641deg);
          }
          57.813% {
            transform:translate(78px,84.369px) rotate(-30.399deg);
          }
          58.333% {
            transform:translate(80px,83.111px) rotate(-33.69deg);
            opacity:1;
          }
          58.854% {
            transform:translate(82px,81.72px) rotate(-35.754deg);
          }
          59.375% {
            transform:translate(84px,80.249px) rotate(-36.747deg);
          }
          59.896% {
            transform:translate(86px,78.751px) rotate(-36.747deg);
          }
          60.417% {
            transform:translate(88px,77.28px) rotate(-35.754deg);
            opacity:1;
          }
          60.938% {
            transform:translate(90px,75.889px) rotate(-33.69deg);
          }
          61.458% {
            transform:translate(92px,74.631px) rotate(-30.399deg);
          }
          61.979% {
            transform:translate(94px,73.56px) rotate(-25.641deg);
          }
          62.5% {
            transform:translate(96px,72.729px) rotate(-19.12deg);
            opacity:1;
          }
          63.021% {
            transform:translate(98px,72.191px) rotate(-10.574deg);
          }
          63.542% {
            transform:translate(100px,72px) rotate(0deg);
          }
          64.063% {
            transform:translate(102px,72px) rotate(0deg);
          }
          64.583% {
            transform:translate(104px,72px) rotate(0deg);
            opacity:1;
          }
          65.104% {
            transform:translate(106px,72px) rotate(0deg);
          }
          65.625% {
            transform:translate(108px,72px) rotate(0deg);
          }
          66.146% {
            transform:translate(110px,72px) rotate(0deg);
          }
          66.667% {
            transform:translate(112px,72px) rotate(0deg);
            opacity:1;
          }
          67.188% {
            transform:translate(114px,72px) rotate(0deg);
          }
          67.708% {
            transform:translate(116px,72px) rotate(0deg);
          }
          68.229% {
            transform:translate(118px,72px) rotate(0deg);
          }
          68.75% {
            transform:translate(120px,72px) rotate(0deg);
            opacity:1;
          }
          69.271% {
            transform:translate(122px,72px) rotate(0deg);
          }
          69.792% {
            transform:translate(124px,72px) rotate(0deg);
          }
          70.313% {
            transform:translate(126px,72px) rotate(0deg);
          }
          70.833% {
            transform:translate(128px,72px) rotate(0deg);
            opacity:0.844;
          }
          71.354% {
            transform:translate(130px,72px) rotate(0deg);
          }
          71.875% {
            transform:translate(132px,72px) rotate(0deg);
          }
          72.396% {
            transform:translate(134px,72px) rotate(0deg);
          }
          72.917% {
            transform:translate(136px,72px) rotate(0deg);
            opacity:0;
          }
          73.438% {
            transform:translate(138px,72px) rotate(0deg);
          }
          73.958% {
            transform:translate(140px,72px) rotate(0deg);
          }
          74.479% {
            transform:translate(142px,72px) rotate(0deg);
          }
          75% {
            transform:translate(144px,72px) rotate(0deg);
            opacity:0;
          }
          75.521% {
            transform:translate(146px,72px) rotate(0deg);
          }
          76.042% {
            transform:translate(148px,72px) rotate(0deg);
          }
          76.563% {
            transform:translate(150px,72px) rotate(0deg);
          }
          77.083% {
            transform:translate(152px,72px) rotate(0deg);
            opacity:0;
          }
          77.604% {
            transform:translate(154px,72px) rotate(0deg);
          }
          78.125% {
            transform:translate(156px,72px) rotate(0deg);
          }
          78.646% {
            transform:translate(158px,72px) rotate(0deg);
          }
          79.167% {
            transform:translate(160px,72px) rotate(0deg);
            opacity:0;
          }
          79.688% {
            transform:translate(162px,72px) rotate(0deg);
          }
          80.208% {
            transform:translate(164px,72px) rotate(0deg);
          }
          80.729% {
            transform:translate(166px,72px) rotate(0deg);
          }
          81.25% {
            transform:translate(168px,72px) rotate(0deg);
            opacity:0;
          }
          81.771% {
            transform:translate(170px,72px) rotate(0deg);
          }
          82.292% {
            transform:translate(172px,72px) rotate(0deg);
          }
          82.813% {
            transform:translate(174px,72px) rotate(0deg);
          }
          83.333% {
            transform:translate(176px,72px) rotate(0deg);
            opacity:0;
          }
          83.854% {
            transform:translate(178px,72px) rotate(0deg);
          }
          84.375% {
            transform:translate(180px,72px) rotate(0deg);
          }
          84.896% {
            transform:translate(182px,72px) rotate(0deg);
          }
          85.417% {
            transform:translate(184px,72px) rotate(0deg);
            opacity:0;
          }
          85.938% {
            transform:translate(186px,72px) rotate(0deg);
          }
          86.458% {
            transform:translate(188px,72px) rotate(0deg);
          }
          86.979% {
            transform:translate(190px,72px) rotate(0deg);
          }
          87.5% {
            transform:translate(192px,72px) rotate(0deg);
            opacity:0;
          }
          88.021% {
            transform:translate(194px,72px) rotate(0deg);
          }
          88.542% {
            transform:translate(196px,72px) rotate(0deg);
          }
          89.063% {
            transform:translate(198px,72px) rotate(0deg);
          }
          89.583% {
            transform:translate(200px,72px) rotate(0deg);
            opacity:0;
          }
          90.104% {
            transform:translate(202px,72px) rotate(0deg);
          }
          90.625% {
            transform:translate(204px,72px) rotate(0deg);
          }
          91.146% {
            transform:translate(206px,72px) rotate(0deg);
          }
          91.667% {
            transform:translate(208px,72px) rotate(0deg);
            opacity:0;
          }
          92.188% {
            transform:translate(210px,72px) rotate(0deg);
          }
          92.708% {
            transform:translate(212px,72px) rotate(0deg);
          }
          93.229% {
            transform:translate(214px,72px) rotate(0deg);
          }
          93.75% {
            transform:translate(216px,72px) rotate(0deg);
            opacity:0;
          }
          94.271% {
            transform:translate(218px,72px) rotate(0deg);
          }
          94.792% {
            transform:translate(220px,72px) rotate(0deg);
          }
          95.313% {
            transform:translate(222px,72px) rotate(0deg);
          }
          95.833% {
            transform:translate(224px,72px) rotate(0deg);
            opacity:0;
          }
          96.354% {
            transform:translate(226px,72px) rotate(0deg);
          }
          96.875% {
            transform:translate(228px,72px) rotate(0deg);
          }
          97.396% {
            transform:translate(230px,72px) rotate(0deg);
          }
          97.917% {
            transform:translate(232px,72px) rotate(0deg);
            opacity:0;
          }
          98.438% {
            transform:translate(234px,72px) rotate(0deg);
          }
          98.958% {
            transform:translate(236px,72px) rotate(0deg);
          }
          99.479% {
            transform:translate(238px,72px) rotate(0deg);
          }
          100% {
            transform:translate(240px,72px) rotate(0deg);
            opacity:0;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .merge0 {
            transform:translate(324px,72px) rotate(0deg);
            opacity:0;
          }
          .merge1 {
            transform:translate(288px,72px) rotate(0deg);
            opacity:0;
          }
          .merge2 {
            transform:translate(252px,72px) rotate(0deg);
            opacity:0;
          }
          .merge3 {
            transform:translate(216px,72px) rotate(0deg);
            opacity:0;
          }
          .merge4 {
            transform:translate(180px,72px) rotate(0deg);
            opacity:0;
          }
          .merge5 {
            transform:translate(144px,72px) rotate(0deg);
            opacity:0;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Zipper Merge">
        <path d="M8 42H70L99 57H132V86H99L70 102H8Z" fill="#415852"/>
        <path d="M8 72H72M101 72H132" stroke="#c4c3a2" stroke-width="1.4" stroke-dasharray="6 5"/>
        <path d="M73 46l-2 5h5Z" fill="#dfab6d"/>
        <path d="M78 48.4l-2 5h5Z" fill="#dfab6d"/>
        <path d="M83 50.8l-2 5h5Z" fill="#dfab6d"/>
        <path d="M88 53.2l-2 5h5Z" fill="#dfab6d"/>
        <path d="M93 55.6l-2 5h5Z" fill="#dfab6d"/>
        <path d="M8 43H70L99 57H131M8 101H70L99 86H131" fill="none" stroke="#718b7b"/>
        <rect x="-4" y="-2" width="8" height="4" class="merge0" rx="1" fill="#8dc9ce"/>
        <rect x="-4" y="-2" width="8" height="4" class="merge1" rx="1" fill="#e2b976"/>
        <rect x="-4" y="-2" width="8" height="4" class="merge2" rx="1" fill="#8dc9ce"/>
        <rect x="-4" y="-2" width="8" height="4" class="merge3" rx="1" fill="#e2b976"/>
        <rect x="-4" y="-2" width="8" height="4" class="merge4" rx="1" fill="#8dc9ce"/>
        <rect x="-4" y="-2" width="8" height="4" class="merge5" rx="1" fill="#e2b976"/>
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

if (!customElements.get("concept-zipper-merge")) {
  customElements.define("concept-zipper-merge", ConceptZipperMerge);
}
