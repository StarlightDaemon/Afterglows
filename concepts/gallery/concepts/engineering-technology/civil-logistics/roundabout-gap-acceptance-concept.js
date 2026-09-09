// Roundabout Gap Acceptance. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptRoundaboutGapAcceptance extends HTMLElement {
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
        .traffic0 {
          animation:traffic0 16s linear infinite;
        }
        .traffic1 {
          animation:traffic1 16s linear infinite;
        }
        .traffic2 {
          animation:traffic2 16s linear infinite;
        }
        .entrant {
          animation:entrant 16s linear infinite;
        }
        .entrant {
          animation:entrant 16s linear infinite;
        }
        .roundaboutEpisode {
          animation:roundaboutEpisode 16s linear infinite;
        }
        @keyframes traffic0 {
          0% {
            transform:translate(85px,90.981px) rotate(-30deg);
          }
          0.521% {
            transform:translate(86.119px,90.302px) rotate(-32.5deg);
          }
          1.042% {
            transform:translate(87.207px,89.575px) rotate(-35deg);
          }
          1.563% {
            transform:translate(88.263px,88.801px) rotate(-37.5deg);
          }
          2.083% {
            transform:translate(89.284px,87.981px) rotate(-40deg);
          }
          2.604% {
            transform:translate(90.268px,87.118px) rotate(-42.5deg);
          }
          3.125% {
            transform:translate(91.213px,86.213px) rotate(-45deg);
          }
          3.646% {
            transform:translate(92.118px,85.268px) rotate(-47.5deg);
          }
          4.167% {
            transform:translate(92.981px,84.284px) rotate(-50deg);
          }
          4.688% {
            transform:translate(93.801px,83.263px) rotate(-52.5deg);
          }
          5.208% {
            transform:translate(94.575px,82.207px) rotate(-55deg);
          }
          5.729% {
            transform:translate(95.302px,81.119px) rotate(-57.5deg);
          }
          6.25% {
            transform:translate(95.981px,80px) rotate(-60deg);
          }
          6.771% {
            transform:translate(96.61px,78.852px) rotate(-62.5deg);
          }
          7.292% {
            transform:translate(97.189px,77.679px) rotate(-65deg);
          }
          7.813% {
            transform:translate(97.716px,76.481px) rotate(-67.5deg);
          }
          8.333% {
            transform:translate(98.191px,75.261px) rotate(-70deg);
          }
          8.854% {
            transform:translate(98.612px,74.021px) rotate(-72.5deg);
          }
          9.375% {
            transform:translate(98.978px,72.765px) rotate(-75deg);
          }
          9.896% {
            transform:translate(99.289px,71.493px) rotate(-77.5deg);
          }
          10.417% {
            transform:translate(99.544px,70.209px) rotate(-80deg);
          }
          10.938% {
            transform:translate(99.743px,68.916px) rotate(-82.5deg);
          }
          11.458% {
            transform:translate(99.886px,67.615px) rotate(-85deg);
          }
          11.979% {
            transform:translate(99.971px,66.309px) rotate(-87.5deg);
          }
          12.5% {
            transform:translate(100px,65px) rotate(-90deg);
          }
          13.021% {
            transform:translate(99.971px,63.691px) rotate(-92.5deg);
          }
          13.542% {
            transform:translate(99.886px,62.385px) rotate(-95deg);
          }
          14.063% {
            transform:translate(99.743px,61.084px) rotate(-97.5deg);
          }
          14.583% {
            transform:translate(99.544px,59.791px) rotate(-100deg);
          }
          15.104% {
            transform:translate(99.289px,58.507px) rotate(-102.5deg);
          }
          15.625% {
            transform:translate(98.978px,57.235px) rotate(-105deg);
          }
          16.146% {
            transform:translate(98.612px,55.979px) rotate(-107.5deg);
          }
          16.667% {
            transform:translate(98.191px,54.739px) rotate(-110deg);
          }
          17.188% {
            transform:translate(97.716px,53.519px) rotate(-112.5deg);
          }
          17.708% {
            transform:translate(97.189px,52.321px) rotate(-115deg);
          }
          18.229% {
            transform:translate(96.61px,51.148px) rotate(-117.5deg);
          }
          18.75% {
            transform:translate(95.981px,50px) rotate(-120deg);
          }
          19.271% {
            transform:translate(95.302px,48.881px) rotate(-122.5deg);
          }
          19.792% {
            transform:translate(94.575px,47.793px) rotate(-125deg);
          }
          20.313% {
            transform:translate(93.801px,46.737px) rotate(-127.5deg);
          }
          20.833% {
            transform:translate(92.981px,45.716px) rotate(-130deg);
          }
          21.354% {
            transform:translate(92.118px,44.732px) rotate(-132.5deg);
          }
          21.875% {
            transform:translate(91.213px,43.787px) rotate(-135deg);
          }
          22.396% {
            transform:translate(90.268px,42.882px) rotate(-137.5deg);
          }
          22.917% {
            transform:translate(89.284px,42.019px) rotate(-140deg);
          }
          23.438% {
            transform:translate(88.263px,41.199px) rotate(-142.5deg);
          }
          23.958% {
            transform:translate(87.207px,40.425px) rotate(-145deg);
          }
          24.479% {
            transform:translate(86.119px,39.698px) rotate(-147.5deg);
          }
          25% {
            transform:translate(85px,39.019px) rotate(-150deg);
          }
          25.521% {
            transform:translate(83.852px,38.39px) rotate(-152.5deg);
          }
          26.042% {
            transform:translate(82.679px,37.811px) rotate(-155deg);
          }
          26.563% {
            transform:translate(81.481px,37.284px) rotate(-157.5deg);
          }
          27.083% {
            transform:translate(80.261px,36.809px) rotate(-160deg);
          }
          27.604% {
            transform:translate(79.021px,36.388px) rotate(-162.5deg);
          }
          28.125% {
            transform:translate(77.765px,36.022px) rotate(-165deg);
          }
          28.646% {
            transform:translate(76.493px,35.711px) rotate(-167.5deg);
          }
          29.167% {
            transform:translate(75.209px,35.456px) rotate(-170deg);
          }
          29.688% {
            transform:translate(73.916px,35.257px) rotate(-172.5deg);
          }
          30.208% {
            transform:translate(72.615px,35.114px) rotate(-175deg);
          }
          30.729% {
            transform:translate(71.309px,35.029px) rotate(-177.5deg);
          }
          31.25% {
            transform:translate(70px,35px) rotate(-180deg);
          }
          31.771% {
            transform:translate(68.691px,35.029px) rotate(-182.5deg);
          }
          32.292% {
            transform:translate(67.385px,35.114px) rotate(-185deg);
          }
          32.813% {
            transform:translate(66.084px,35.257px) rotate(-187.5deg);
          }
          33.333% {
            transform:translate(64.791px,35.456px) rotate(-190deg);
          }
          33.854% {
            transform:translate(63.507px,35.711px) rotate(-192.5deg);
          }
          34.375% {
            transform:translate(62.235px,36.022px) rotate(-195deg);
          }
          34.896% {
            transform:translate(60.979px,36.388px) rotate(-197.5deg);
          }
          35.417% {
            transform:translate(59.739px,36.809px) rotate(-200deg);
          }
          35.938% {
            transform:translate(58.519px,37.284px) rotate(-202.5deg);
          }
          36.458% {
            transform:translate(57.321px,37.811px) rotate(-205deg);
          }
          36.979% {
            transform:translate(56.148px,38.39px) rotate(-207.5deg);
          }
          37.5% {
            transform:translate(55px,39.019px) rotate(-210deg);
          }
          38.021% {
            transform:translate(53.881px,39.698px) rotate(-212.5deg);
          }
          38.542% {
            transform:translate(52.793px,40.425px) rotate(-215deg);
          }
          39.063% {
            transform:translate(51.737px,41.199px) rotate(-217.5deg);
          }
          39.583% {
            transform:translate(50.716px,42.019px) rotate(-220deg);
          }
          40.104% {
            transform:translate(49.732px,42.882px) rotate(-222.5deg);
          }
          40.625% {
            transform:translate(48.787px,43.787px) rotate(-225deg);
          }
          41.146% {
            transform:translate(47.882px,44.732px) rotate(-227.5deg);
          }
          41.667% {
            transform:translate(47.019px,45.716px) rotate(-230deg);
          }
          42.188% {
            transform:translate(46.199px,46.737px) rotate(-232.5deg);
          }
          42.708% {
            transform:translate(45.425px,47.793px) rotate(-235deg);
          }
          43.229% {
            transform:translate(44.698px,48.881px) rotate(-237.5deg);
          }
          43.75% {
            transform:translate(44.019px,50px) rotate(-240deg);
          }
          44.271% {
            transform:translate(43.39px,51.148px) rotate(-242.5deg);
          }
          44.792% {
            transform:translate(42.811px,52.321px) rotate(-245deg);
          }
          45.313% {
            transform:translate(42.284px,53.519px) rotate(-247.5deg);
          }
          45.833% {
            transform:translate(41.809px,54.739px) rotate(-250deg);
          }
          46.354% {
            transform:translate(41.388px,55.979px) rotate(-252.5deg);
          }
          46.875% {
            transform:translate(41.022px,57.235px) rotate(-255deg);
          }
          47.396% {
            transform:translate(40.711px,58.507px) rotate(-257.5deg);
          }
          47.917% {
            transform:translate(40.456px,59.791px) rotate(-260deg);
          }
          48.438% {
            transform:translate(40.257px,61.084px) rotate(-262.5deg);
          }
          48.958% {
            transform:translate(40.114px,62.385px) rotate(-265deg);
          }
          49.479% {
            transform:translate(40.029px,63.691px) rotate(-267.5deg);
          }
          50% {
            transform:translate(40px,65px) rotate(-270deg);
          }
          50.521% {
            transform:translate(40.029px,66.309px) rotate(-272.5deg);
          }
          51.042% {
            transform:translate(40.114px,67.615px) rotate(-275deg);
          }
          51.563% {
            transform:translate(40.257px,68.916px) rotate(-277.5deg);
          }
          52.083% {
            transform:translate(40.456px,70.209px) rotate(-280deg);
          }
          52.604% {
            transform:translate(40.711px,71.493px) rotate(-282.5deg);
          }
          53.125% {
            transform:translate(41.022px,72.765px) rotate(-285deg);
          }
          53.646% {
            transform:translate(41.388px,74.021px) rotate(-287.5deg);
          }
          54.167% {
            transform:translate(41.809px,75.261px) rotate(-290deg);
          }
          54.688% {
            transform:translate(42.284px,76.481px) rotate(-292.5deg);
          }
          55.208% {
            transform:translate(42.811px,77.679px) rotate(-295deg);
          }
          55.729% {
            transform:translate(43.39px,78.852px) rotate(-297.5deg);
          }
          56.25% {
            transform:translate(44.019px,80px) rotate(-300deg);
          }
          56.771% {
            transform:translate(44.698px,81.119px) rotate(-302.5deg);
          }
          57.292% {
            transform:translate(45.425px,82.207px) rotate(-305deg);
          }
          57.813% {
            transform:translate(46.199px,83.263px) rotate(-307.5deg);
          }
          58.333% {
            transform:translate(47.019px,84.284px) rotate(-310deg);
          }
          58.854% {
            transform:translate(47.882px,85.268px) rotate(-312.5deg);
          }
          59.375% {
            transform:translate(48.787px,86.213px) rotate(-315deg);
          }
          59.896% {
            transform:translate(49.732px,87.118px) rotate(-317.5deg);
          }
          60.417% {
            transform:translate(50.716px,87.981px) rotate(-320deg);
          }
          60.938% {
            transform:translate(51.737px,88.801px) rotate(-322.5deg);
          }
          61.458% {
            transform:translate(52.793px,89.575px) rotate(-325deg);
          }
          61.979% {
            transform:translate(53.881px,90.302px) rotate(-327.5deg);
          }
          62.5% {
            transform:translate(55px,90.981px) rotate(-330deg);
          }
          63.021% {
            transform:translate(56.148px,91.61px) rotate(-332.5deg);
          }
          63.542% {
            transform:translate(57.321px,92.189px) rotate(-335deg);
          }
          64.063% {
            transform:translate(58.519px,92.716px) rotate(-337.5deg);
          }
          64.583% {
            transform:translate(59.739px,93.191px) rotate(-340deg);
          }
          65.104% {
            transform:translate(60.979px,93.612px) rotate(-342.5deg);
          }
          65.625% {
            transform:translate(62.235px,93.978px) rotate(-345deg);
          }
          66.146% {
            transform:translate(63.507px,94.289px) rotate(-347.5deg);
          }
          66.667% {
            transform:translate(64.791px,94.544px) rotate(-350deg);
          }
          67.188% {
            transform:translate(66.084px,94.743px) rotate(-352.5deg);
          }
          67.708% {
            transform:translate(67.385px,94.886px) rotate(-355deg);
          }
          68.229% {
            transform:translate(68.691px,94.971px) rotate(-357.5deg);
          }
          68.75% {
            transform:translate(70px,95px) rotate(-360deg);
          }
          69.271% {
            transform:translate(71.309px,94.971px) rotate(-362.5deg);
          }
          69.792% {
            transform:translate(72.615px,94.886px) rotate(-365deg);
          }
          70.313% {
            transform:translate(73.916px,94.743px) rotate(-367.5deg);
          }
          70.833% {
            transform:translate(75.209px,94.544px) rotate(-370deg);
          }
          71.354% {
            transform:translate(76.493px,94.289px) rotate(-372.5deg);
          }
          71.875% {
            transform:translate(77.765px,93.978px) rotate(-375deg);
          }
          72.396% {
            transform:translate(79.021px,93.612px) rotate(-377.5deg);
          }
          72.917% {
            transform:translate(80.261px,93.191px) rotate(-380deg);
          }
          73.438% {
            transform:translate(81.481px,92.716px) rotate(-382.5deg);
          }
          73.958% {
            transform:translate(82.679px,92.189px) rotate(-385deg);
          }
          74.479% {
            transform:translate(83.852px,91.61px) rotate(-387.5deg);
          }
          75% {
            transform:translate(85px,90.981px) rotate(-390deg);
          }
          75.521% {
            transform:translate(86.119px,90.302px) rotate(-392.5deg);
          }
          76.042% {
            transform:translate(87.207px,89.575px) rotate(-395deg);
          }
          76.563% {
            transform:translate(88.263px,88.801px) rotate(-397.5deg);
          }
          77.083% {
            transform:translate(89.284px,87.981px) rotate(-400deg);
          }
          77.604% {
            transform:translate(90.268px,87.118px) rotate(-402.5deg);
          }
          78.125% {
            transform:translate(91.213px,86.213px) rotate(-405deg);
          }
          78.646% {
            transform:translate(92.118px,85.268px) rotate(-407.5deg);
          }
          79.167% {
            transform:translate(92.981px,84.284px) rotate(-410deg);
          }
          79.688% {
            transform:translate(93.801px,83.263px) rotate(-412.5deg);
          }
          80.208% {
            transform:translate(94.575px,82.207px) rotate(-415deg);
          }
          80.729% {
            transform:translate(95.302px,81.119px) rotate(-417.5deg);
          }
          81.25% {
            transform:translate(95.981px,80px) rotate(-420deg);
          }
          81.771% {
            transform:translate(96.61px,78.852px) rotate(-422.5deg);
          }
          82.292% {
            transform:translate(97.189px,77.679px) rotate(-425deg);
          }
          82.813% {
            transform:translate(97.716px,76.481px) rotate(-427.5deg);
          }
          83.333% {
            transform:translate(98.191px,75.261px) rotate(-430deg);
          }
          83.854% {
            transform:translate(98.612px,74.021px) rotate(-432.5deg);
          }
          84.375% {
            transform:translate(98.978px,72.765px) rotate(-435deg);
          }
          84.896% {
            transform:translate(99.289px,71.493px) rotate(-437.5deg);
          }
          85.417% {
            transform:translate(99.544px,70.209px) rotate(-440deg);
          }
          85.938% {
            transform:translate(99.743px,68.916px) rotate(-442.5deg);
          }
          86.458% {
            transform:translate(99.886px,67.615px) rotate(-445deg);
          }
          86.979% {
            transform:translate(99.971px,66.309px) rotate(-447.5deg);
          }
          87.5% {
            transform:translate(100px,65px) rotate(-450deg);
          }
          88.021% {
            transform:translate(99.971px,63.691px) rotate(-452.5deg);
          }
          88.542% {
            transform:translate(99.886px,62.385px) rotate(-455deg);
          }
          89.063% {
            transform:translate(99.743px,61.084px) rotate(-457.5deg);
          }
          89.583% {
            transform:translate(99.544px,59.791px) rotate(-460deg);
          }
          90.104% {
            transform:translate(99.289px,58.507px) rotate(-462.5deg);
          }
          90.625% {
            transform:translate(98.978px,57.235px) rotate(-465deg);
          }
          91.146% {
            transform:translate(98.612px,55.979px) rotate(-467.5deg);
          }
          91.667% {
            transform:translate(98.191px,54.739px) rotate(-470deg);
          }
          92.188% {
            transform:translate(97.716px,53.519px) rotate(-472.5deg);
          }
          92.708% {
            transform:translate(97.189px,52.321px) rotate(-475deg);
          }
          93.229% {
            transform:translate(96.61px,51.148px) rotate(-477.5deg);
          }
          93.75% {
            transform:translate(95.981px,50px) rotate(-480deg);
          }
          94.271% {
            transform:translate(95.302px,48.881px) rotate(-482.5deg);
          }
          94.792% {
            transform:translate(94.575px,47.793px) rotate(-485deg);
          }
          95.313% {
            transform:translate(93.801px,46.737px) rotate(-487.5deg);
          }
          95.833% {
            transform:translate(92.981px,45.716px) rotate(-490deg);
          }
          96.354% {
            transform:translate(92.118px,44.732px) rotate(-492.5deg);
          }
          96.875% {
            transform:translate(91.213px,43.787px) rotate(-495deg);
          }
          97.396% {
            transform:translate(90.268px,42.882px) rotate(-497.5deg);
          }
          97.917% {
            transform:translate(89.284px,42.019px) rotate(-500deg);
          }
          98.438% {
            transform:translate(88.263px,41.199px) rotate(-502.5deg);
          }
          98.958% {
            transform:translate(87.207px,40.425px) rotate(-505deg);
          }
          99.479% {
            transform:translate(86.119px,39.698px) rotate(-507.5deg);
          }
          100% {
            transform:translate(85px,39.019px) rotate(-510deg);
          }
        }
        @keyframes traffic1 {
          0% {
            transform:translate(55px,90.981px) rotate(30deg);
          }
          0.521% {
            transform:translate(56.148px,91.61px) rotate(27.5deg);
          }
          1.042% {
            transform:translate(57.321px,92.189px) rotate(25deg);
          }
          1.563% {
            transform:translate(58.519px,92.716px) rotate(22.5deg);
          }
          2.083% {
            transform:translate(59.739px,93.191px) rotate(20deg);
          }
          2.604% {
            transform:translate(60.979px,93.612px) rotate(17.5deg);
          }
          3.125% {
            transform:translate(62.235px,93.978px) rotate(15deg);
          }
          3.646% {
            transform:translate(63.507px,94.289px) rotate(12.5deg);
          }
          4.167% {
            transform:translate(64.791px,94.544px) rotate(10deg);
          }
          4.688% {
            transform:translate(66.084px,94.743px) rotate(7.5deg);
          }
          5.208% {
            transform:translate(67.385px,94.886px) rotate(5deg);
          }
          5.729% {
            transform:translate(68.691px,94.971px) rotate(2.5deg);
          }
          6.25% {
            transform:translate(70px,95px) rotate(0deg);
          }
          6.771% {
            transform:translate(71.309px,94.971px) rotate(-2.5deg);
          }
          7.292% {
            transform:translate(72.615px,94.886px) rotate(-5deg);
          }
          7.813% {
            transform:translate(73.916px,94.743px) rotate(-7.5deg);
          }
          8.333% {
            transform:translate(75.209px,94.544px) rotate(-10deg);
          }
          8.854% {
            transform:translate(76.493px,94.289px) rotate(-12.5deg);
          }
          9.375% {
            transform:translate(77.765px,93.978px) rotate(-15deg);
          }
          9.896% {
            transform:translate(79.021px,93.612px) rotate(-17.5deg);
          }
          10.417% {
            transform:translate(80.261px,93.191px) rotate(-20deg);
          }
          10.938% {
            transform:translate(81.481px,92.716px) rotate(-22.5deg);
          }
          11.458% {
            transform:translate(82.679px,92.189px) rotate(-25deg);
          }
          11.979% {
            transform:translate(83.852px,91.61px) rotate(-27.5deg);
          }
          12.5% {
            transform:translate(85px,90.981px) rotate(-30deg);
          }
          13.021% {
            transform:translate(86.119px,90.302px) rotate(-32.5deg);
          }
          13.542% {
            transform:translate(87.207px,89.575px) rotate(-35deg);
          }
          14.063% {
            transform:translate(88.263px,88.801px) rotate(-37.5deg);
          }
          14.583% {
            transform:translate(89.284px,87.981px) rotate(-40deg);
          }
          15.104% {
            transform:translate(90.268px,87.118px) rotate(-42.5deg);
          }
          15.625% {
            transform:translate(91.213px,86.213px) rotate(-45deg);
          }
          16.146% {
            transform:translate(92.118px,85.268px) rotate(-47.5deg);
          }
          16.667% {
            transform:translate(92.981px,84.284px) rotate(-50deg);
          }
          17.188% {
            transform:translate(93.801px,83.263px) rotate(-52.5deg);
          }
          17.708% {
            transform:translate(94.575px,82.207px) rotate(-55deg);
          }
          18.229% {
            transform:translate(95.302px,81.119px) rotate(-57.5deg);
          }
          18.75% {
            transform:translate(95.981px,80px) rotate(-60deg);
          }
          19.271% {
            transform:translate(96.61px,78.852px) rotate(-62.5deg);
          }
          19.792% {
            transform:translate(97.189px,77.679px) rotate(-65deg);
          }
          20.313% {
            transform:translate(97.716px,76.481px) rotate(-67.5deg);
          }
          20.833% {
            transform:translate(98.191px,75.261px) rotate(-70deg);
          }
          21.354% {
            transform:translate(98.612px,74.021px) rotate(-72.5deg);
          }
          21.875% {
            transform:translate(98.978px,72.765px) rotate(-75deg);
          }
          22.396% {
            transform:translate(99.289px,71.493px) rotate(-77.5deg);
          }
          22.917% {
            transform:translate(99.544px,70.209px) rotate(-80deg);
          }
          23.438% {
            transform:translate(99.743px,68.916px) rotate(-82.5deg);
          }
          23.958% {
            transform:translate(99.886px,67.615px) rotate(-85deg);
          }
          24.479% {
            transform:translate(99.971px,66.309px) rotate(-87.5deg);
          }
          25% {
            transform:translate(100px,65px) rotate(-90deg);
          }
          25.521% {
            transform:translate(99.971px,63.691px) rotate(-92.5deg);
          }
          26.042% {
            transform:translate(99.886px,62.385px) rotate(-95deg);
          }
          26.563% {
            transform:translate(99.743px,61.084px) rotate(-97.5deg);
          }
          27.083% {
            transform:translate(99.544px,59.791px) rotate(-100deg);
          }
          27.604% {
            transform:translate(99.289px,58.507px) rotate(-102.5deg);
          }
          28.125% {
            transform:translate(98.978px,57.235px) rotate(-105deg);
          }
          28.646% {
            transform:translate(98.612px,55.979px) rotate(-107.5deg);
          }
          29.167% {
            transform:translate(98.191px,54.739px) rotate(-110deg);
          }
          29.688% {
            transform:translate(97.716px,53.519px) rotate(-112.5deg);
          }
          30.208% {
            transform:translate(97.189px,52.321px) rotate(-115deg);
          }
          30.729% {
            transform:translate(96.61px,51.148px) rotate(-117.5deg);
          }
          31.25% {
            transform:translate(95.981px,50px) rotate(-120deg);
          }
          31.771% {
            transform:translate(95.302px,48.881px) rotate(-122.5deg);
          }
          32.292% {
            transform:translate(94.575px,47.793px) rotate(-125deg);
          }
          32.813% {
            transform:translate(93.801px,46.737px) rotate(-127.5deg);
          }
          33.333% {
            transform:translate(92.981px,45.716px) rotate(-130deg);
          }
          33.854% {
            transform:translate(92.118px,44.732px) rotate(-132.5deg);
          }
          34.375% {
            transform:translate(91.213px,43.787px) rotate(-135deg);
          }
          34.896% {
            transform:translate(90.268px,42.882px) rotate(-137.5deg);
          }
          35.417% {
            transform:translate(89.284px,42.019px) rotate(-140deg);
          }
          35.938% {
            transform:translate(88.263px,41.199px) rotate(-142.5deg);
          }
          36.458% {
            transform:translate(87.207px,40.425px) rotate(-145deg);
          }
          36.979% {
            transform:translate(86.119px,39.698px) rotate(-147.5deg);
          }
          37.5% {
            transform:translate(85px,39.019px) rotate(-150deg);
          }
          38.021% {
            transform:translate(83.852px,38.39px) rotate(-152.5deg);
          }
          38.542% {
            transform:translate(82.679px,37.811px) rotate(-155deg);
          }
          39.063% {
            transform:translate(81.481px,37.284px) rotate(-157.5deg);
          }
          39.583% {
            transform:translate(80.261px,36.809px) rotate(-160deg);
          }
          40.104% {
            transform:translate(79.021px,36.388px) rotate(-162.5deg);
          }
          40.625% {
            transform:translate(77.765px,36.022px) rotate(-165deg);
          }
          41.146% {
            transform:translate(76.493px,35.711px) rotate(-167.5deg);
          }
          41.667% {
            transform:translate(75.209px,35.456px) rotate(-170deg);
          }
          42.188% {
            transform:translate(73.916px,35.257px) rotate(-172.5deg);
          }
          42.708% {
            transform:translate(72.615px,35.114px) rotate(-175deg);
          }
          43.229% {
            transform:translate(71.309px,35.029px) rotate(-177.5deg);
          }
          43.75% {
            transform:translate(70px,35px) rotate(-180deg);
          }
          44.271% {
            transform:translate(68.691px,35.029px) rotate(-182.5deg);
          }
          44.792% {
            transform:translate(67.385px,35.114px) rotate(-185deg);
          }
          45.313% {
            transform:translate(66.084px,35.257px) rotate(-187.5deg);
          }
          45.833% {
            transform:translate(64.791px,35.456px) rotate(-190deg);
          }
          46.354% {
            transform:translate(63.507px,35.711px) rotate(-192.5deg);
          }
          46.875% {
            transform:translate(62.235px,36.022px) rotate(-195deg);
          }
          47.396% {
            transform:translate(60.979px,36.388px) rotate(-197.5deg);
          }
          47.917% {
            transform:translate(59.739px,36.809px) rotate(-200deg);
          }
          48.438% {
            transform:translate(58.519px,37.284px) rotate(-202.5deg);
          }
          48.958% {
            transform:translate(57.321px,37.811px) rotate(-205deg);
          }
          49.479% {
            transform:translate(56.148px,38.39px) rotate(-207.5deg);
          }
          50% {
            transform:translate(55px,39.019px) rotate(-210deg);
          }
          50.521% {
            transform:translate(53.881px,39.698px) rotate(-212.5deg);
          }
          51.042% {
            transform:translate(52.793px,40.425px) rotate(-215deg);
          }
          51.563% {
            transform:translate(51.737px,41.199px) rotate(-217.5deg);
          }
          52.083% {
            transform:translate(50.716px,42.019px) rotate(-220deg);
          }
          52.604% {
            transform:translate(49.732px,42.882px) rotate(-222.5deg);
          }
          53.125% {
            transform:translate(48.787px,43.787px) rotate(-225deg);
          }
          53.646% {
            transform:translate(47.882px,44.732px) rotate(-227.5deg);
          }
          54.167% {
            transform:translate(47.019px,45.716px) rotate(-230deg);
          }
          54.688% {
            transform:translate(46.199px,46.737px) rotate(-232.5deg);
          }
          55.208% {
            transform:translate(45.425px,47.793px) rotate(-235deg);
          }
          55.729% {
            transform:translate(44.698px,48.881px) rotate(-237.5deg);
          }
          56.25% {
            transform:translate(44.019px,50px) rotate(-240deg);
          }
          56.771% {
            transform:translate(43.39px,51.148px) rotate(-242.5deg);
          }
          57.292% {
            transform:translate(42.811px,52.321px) rotate(-245deg);
          }
          57.813% {
            transform:translate(42.284px,53.519px) rotate(-247.5deg);
          }
          58.333% {
            transform:translate(41.809px,54.739px) rotate(-250deg);
          }
          58.854% {
            transform:translate(41.388px,55.979px) rotate(-252.5deg);
          }
          59.375% {
            transform:translate(41.022px,57.235px) rotate(-255deg);
          }
          59.896% {
            transform:translate(40.711px,58.507px) rotate(-257.5deg);
          }
          60.417% {
            transform:translate(40.456px,59.791px) rotate(-260deg);
          }
          60.938% {
            transform:translate(40.257px,61.084px) rotate(-262.5deg);
          }
          61.458% {
            transform:translate(40.114px,62.385px) rotate(-265deg);
          }
          61.979% {
            transform:translate(40.029px,63.691px) rotate(-267.5deg);
          }
          62.5% {
            transform:translate(40px,65px) rotate(-270deg);
          }
          63.021% {
            transform:translate(40.029px,66.309px) rotate(-272.5deg);
          }
          63.542% {
            transform:translate(40.114px,67.615px) rotate(-275deg);
          }
          64.063% {
            transform:translate(40.257px,68.916px) rotate(-277.5deg);
          }
          64.583% {
            transform:translate(40.456px,70.209px) rotate(-280deg);
          }
          65.104% {
            transform:translate(40.711px,71.493px) rotate(-282.5deg);
          }
          65.625% {
            transform:translate(41.022px,72.765px) rotate(-285deg);
          }
          66.146% {
            transform:translate(41.388px,74.021px) rotate(-287.5deg);
          }
          66.667% {
            transform:translate(41.809px,75.261px) rotate(-290deg);
          }
          67.188% {
            transform:translate(42.284px,76.481px) rotate(-292.5deg);
          }
          67.708% {
            transform:translate(42.811px,77.679px) rotate(-295deg);
          }
          68.229% {
            transform:translate(43.39px,78.852px) rotate(-297.5deg);
          }
          68.75% {
            transform:translate(44.019px,80px) rotate(-300deg);
          }
          69.271% {
            transform:translate(44.698px,81.119px) rotate(-302.5deg);
          }
          69.792% {
            transform:translate(45.425px,82.207px) rotate(-305deg);
          }
          70.313% {
            transform:translate(46.199px,83.263px) rotate(-307.5deg);
          }
          70.833% {
            transform:translate(47.019px,84.284px) rotate(-310deg);
          }
          71.354% {
            transform:translate(47.882px,85.268px) rotate(-312.5deg);
          }
          71.875% {
            transform:translate(48.787px,86.213px) rotate(-315deg);
          }
          72.396% {
            transform:translate(49.732px,87.118px) rotate(-317.5deg);
          }
          72.917% {
            transform:translate(50.716px,87.981px) rotate(-320deg);
          }
          73.438% {
            transform:translate(51.737px,88.801px) rotate(-322.5deg);
          }
          73.958% {
            transform:translate(52.793px,89.575px) rotate(-325deg);
          }
          74.479% {
            transform:translate(53.881px,90.302px) rotate(-327.5deg);
          }
          75% {
            transform:translate(55px,90.981px) rotate(-330deg);
          }
          75.521% {
            transform:translate(56.148px,91.61px) rotate(-332.5deg);
          }
          76.042% {
            transform:translate(57.321px,92.189px) rotate(-335deg);
          }
          76.563% {
            transform:translate(58.519px,92.716px) rotate(-337.5deg);
          }
          77.083% {
            transform:translate(59.739px,93.191px) rotate(-340deg);
          }
          77.604% {
            transform:translate(60.979px,93.612px) rotate(-342.5deg);
          }
          78.125% {
            transform:translate(62.235px,93.978px) rotate(-345deg);
          }
          78.646% {
            transform:translate(63.507px,94.289px) rotate(-347.5deg);
          }
          79.167% {
            transform:translate(64.791px,94.544px) rotate(-350deg);
          }
          79.688% {
            transform:translate(66.084px,94.743px) rotate(-352.5deg);
          }
          80.208% {
            transform:translate(67.385px,94.886px) rotate(-355deg);
          }
          80.729% {
            transform:translate(68.691px,94.971px) rotate(-357.5deg);
          }
          81.25% {
            transform:translate(70px,95px) rotate(-360deg);
          }
          81.771% {
            transform:translate(71.309px,94.971px) rotate(-362.5deg);
          }
          82.292% {
            transform:translate(72.615px,94.886px) rotate(-365deg);
          }
          82.813% {
            transform:translate(73.916px,94.743px) rotate(-367.5deg);
          }
          83.333% {
            transform:translate(75.209px,94.544px) rotate(-370deg);
          }
          83.854% {
            transform:translate(76.493px,94.289px) rotate(-372.5deg);
          }
          84.375% {
            transform:translate(77.765px,93.978px) rotate(-375deg);
          }
          84.896% {
            transform:translate(79.021px,93.612px) rotate(-377.5deg);
          }
          85.417% {
            transform:translate(80.261px,93.191px) rotate(-380deg);
          }
          85.938% {
            transform:translate(81.481px,92.716px) rotate(-382.5deg);
          }
          86.458% {
            transform:translate(82.679px,92.189px) rotate(-385deg);
          }
          86.979% {
            transform:translate(83.852px,91.61px) rotate(-387.5deg);
          }
          87.5% {
            transform:translate(85px,90.981px) rotate(-390deg);
          }
          88.021% {
            transform:translate(86.119px,90.302px) rotate(-392.5deg);
          }
          88.542% {
            transform:translate(87.207px,89.575px) rotate(-395deg);
          }
          89.063% {
            transform:translate(88.263px,88.801px) rotate(-397.5deg);
          }
          89.583% {
            transform:translate(89.284px,87.981px) rotate(-400deg);
          }
          90.104% {
            transform:translate(90.268px,87.118px) rotate(-402.5deg);
          }
          90.625% {
            transform:translate(91.213px,86.213px) rotate(-405deg);
          }
          91.146% {
            transform:translate(92.118px,85.268px) rotate(-407.5deg);
          }
          91.667% {
            transform:translate(92.981px,84.284px) rotate(-410deg);
          }
          92.188% {
            transform:translate(93.801px,83.263px) rotate(-412.5deg);
          }
          92.708% {
            transform:translate(94.575px,82.207px) rotate(-415deg);
          }
          93.229% {
            transform:translate(95.302px,81.119px) rotate(-417.5deg);
          }
          93.75% {
            transform:translate(95.981px,80px) rotate(-420deg);
          }
          94.271% {
            transform:translate(96.61px,78.852px) rotate(-422.5deg);
          }
          94.792% {
            transform:translate(97.189px,77.679px) rotate(-425deg);
          }
          95.313% {
            transform:translate(97.716px,76.481px) rotate(-427.5deg);
          }
          95.833% {
            transform:translate(98.191px,75.261px) rotate(-430deg);
          }
          96.354% {
            transform:translate(98.612px,74.021px) rotate(-432.5deg);
          }
          96.875% {
            transform:translate(98.978px,72.765px) rotate(-435deg);
          }
          97.396% {
            transform:translate(99.289px,71.493px) rotate(-437.5deg);
          }
          97.917% {
            transform:translate(99.544px,70.209px) rotate(-440deg);
          }
          98.438% {
            transform:translate(99.743px,68.916px) rotate(-442.5deg);
          }
          98.958% {
            transform:translate(99.886px,67.615px) rotate(-445deg);
          }
          99.479% {
            transform:translate(99.971px,66.309px) rotate(-447.5deg);
          }
          100% {
            transform:translate(100px,65px) rotate(-450deg);
          }
        }
        @keyframes traffic2 {
          0% {
            transform:translate(70px,35px) rotate(180deg);
          }
          0.521% {
            transform:translate(68.691px,35.029px) rotate(177.5deg);
          }
          1.042% {
            transform:translate(67.385px,35.114px) rotate(175deg);
          }
          1.563% {
            transform:translate(66.084px,35.257px) rotate(172.5deg);
          }
          2.083% {
            transform:translate(64.791px,35.456px) rotate(170deg);
          }
          2.604% {
            transform:translate(63.507px,35.711px) rotate(167.5deg);
          }
          3.125% {
            transform:translate(62.235px,36.022px) rotate(165deg);
          }
          3.646% {
            transform:translate(60.979px,36.388px) rotate(162.5deg);
          }
          4.167% {
            transform:translate(59.739px,36.809px) rotate(160deg);
          }
          4.688% {
            transform:translate(58.519px,37.284px) rotate(157.5deg);
          }
          5.208% {
            transform:translate(57.321px,37.811px) rotate(155deg);
          }
          5.729% {
            transform:translate(56.148px,38.39px) rotate(152.5deg);
          }
          6.25% {
            transform:translate(55px,39.019px) rotate(150deg);
          }
          6.771% {
            transform:translate(53.881px,39.698px) rotate(147.5deg);
          }
          7.292% {
            transform:translate(52.793px,40.425px) rotate(145deg);
          }
          7.813% {
            transform:translate(51.737px,41.199px) rotate(142.5deg);
          }
          8.333% {
            transform:translate(50.716px,42.019px) rotate(140deg);
          }
          8.854% {
            transform:translate(49.732px,42.882px) rotate(137.5deg);
          }
          9.375% {
            transform:translate(48.787px,43.787px) rotate(135deg);
          }
          9.896% {
            transform:translate(47.882px,44.732px) rotate(132.5deg);
          }
          10.417% {
            transform:translate(47.019px,45.716px) rotate(130deg);
          }
          10.938% {
            transform:translate(46.199px,46.737px) rotate(127.5deg);
          }
          11.458% {
            transform:translate(45.425px,47.793px) rotate(125deg);
          }
          11.979% {
            transform:translate(44.698px,48.881px) rotate(122.5deg);
          }
          12.5% {
            transform:translate(44.019px,50px) rotate(120deg);
          }
          13.021% {
            transform:translate(43.39px,51.148px) rotate(117.5deg);
          }
          13.542% {
            transform:translate(42.811px,52.321px) rotate(115deg);
          }
          14.063% {
            transform:translate(42.284px,53.519px) rotate(112.5deg);
          }
          14.583% {
            transform:translate(41.809px,54.739px) rotate(110deg);
          }
          15.104% {
            transform:translate(41.388px,55.979px) rotate(107.5deg);
          }
          15.625% {
            transform:translate(41.022px,57.235px) rotate(105deg);
          }
          16.146% {
            transform:translate(40.711px,58.507px) rotate(102.5deg);
          }
          16.667% {
            transform:translate(40.456px,59.791px) rotate(100deg);
          }
          17.188% {
            transform:translate(40.257px,61.084px) rotate(97.5deg);
          }
          17.708% {
            transform:translate(40.114px,62.385px) rotate(95deg);
          }
          18.229% {
            transform:translate(40.029px,63.691px) rotate(92.5deg);
          }
          18.75% {
            transform:translate(40px,65px) rotate(90deg);
          }
          19.271% {
            transform:translate(40.029px,66.309px) rotate(87.5deg);
          }
          19.792% {
            transform:translate(40.114px,67.615px) rotate(85deg);
          }
          20.313% {
            transform:translate(40.257px,68.916px) rotate(82.5deg);
          }
          20.833% {
            transform:translate(40.456px,70.209px) rotate(80deg);
          }
          21.354% {
            transform:translate(40.711px,71.493px) rotate(77.5deg);
          }
          21.875% {
            transform:translate(41.022px,72.765px) rotate(75deg);
          }
          22.396% {
            transform:translate(41.388px,74.021px) rotate(72.5deg);
          }
          22.917% {
            transform:translate(41.809px,75.261px) rotate(70deg);
          }
          23.438% {
            transform:translate(42.284px,76.481px) rotate(67.5deg);
          }
          23.958% {
            transform:translate(42.811px,77.679px) rotate(65deg);
          }
          24.479% {
            transform:translate(43.39px,78.852px) rotate(62.5deg);
          }
          25% {
            transform:translate(44.019px,80px) rotate(60deg);
          }
          25.521% {
            transform:translate(44.698px,81.119px) rotate(57.5deg);
          }
          26.042% {
            transform:translate(45.425px,82.207px) rotate(55deg);
          }
          26.563% {
            transform:translate(46.199px,83.263px) rotate(52.5deg);
          }
          27.083% {
            transform:translate(47.019px,84.284px) rotate(50deg);
          }
          27.604% {
            transform:translate(47.882px,85.268px) rotate(47.5deg);
          }
          28.125% {
            transform:translate(48.787px,86.213px) rotate(45deg);
          }
          28.646% {
            transform:translate(49.732px,87.118px) rotate(42.5deg);
          }
          29.167% {
            transform:translate(50.716px,87.981px) rotate(40deg);
          }
          29.688% {
            transform:translate(51.737px,88.801px) rotate(37.5deg);
          }
          30.208% {
            transform:translate(52.793px,89.575px) rotate(35deg);
          }
          30.729% {
            transform:translate(53.881px,90.302px) rotate(32.5deg);
          }
          31.25% {
            transform:translate(55px,90.981px) rotate(30deg);
          }
          31.771% {
            transform:translate(56.148px,91.61px) rotate(27.5deg);
          }
          32.292% {
            transform:translate(57.321px,92.189px) rotate(25deg);
          }
          32.813% {
            transform:translate(58.519px,92.716px) rotate(22.5deg);
          }
          33.333% {
            transform:translate(59.739px,93.191px) rotate(20deg);
          }
          33.854% {
            transform:translate(60.979px,93.612px) rotate(17.5deg);
          }
          34.375% {
            transform:translate(62.235px,93.978px) rotate(15deg);
          }
          34.896% {
            transform:translate(63.507px,94.289px) rotate(12.5deg);
          }
          35.417% {
            transform:translate(64.791px,94.544px) rotate(10deg);
          }
          35.938% {
            transform:translate(66.084px,94.743px) rotate(7.5deg);
          }
          36.458% {
            transform:translate(67.385px,94.886px) rotate(5deg);
          }
          36.979% {
            transform:translate(68.691px,94.971px) rotate(2.5deg);
          }
          37.5% {
            transform:translate(70px,95px) rotate(0deg);
          }
          38.021% {
            transform:translate(71.309px,94.971px) rotate(-2.5deg);
          }
          38.542% {
            transform:translate(72.615px,94.886px) rotate(-5deg);
          }
          39.063% {
            transform:translate(73.916px,94.743px) rotate(-7.5deg);
          }
          39.583% {
            transform:translate(75.209px,94.544px) rotate(-10deg);
          }
          40.104% {
            transform:translate(76.493px,94.289px) rotate(-12.5deg);
          }
          40.625% {
            transform:translate(77.765px,93.978px) rotate(-15deg);
          }
          41.146% {
            transform:translate(79.021px,93.612px) rotate(-17.5deg);
          }
          41.667% {
            transform:translate(80.261px,93.191px) rotate(-20deg);
          }
          42.188% {
            transform:translate(81.481px,92.716px) rotate(-22.5deg);
          }
          42.708% {
            transform:translate(82.679px,92.189px) rotate(-25deg);
          }
          43.229% {
            transform:translate(83.852px,91.61px) rotate(-27.5deg);
          }
          43.75% {
            transform:translate(85px,90.981px) rotate(-30deg);
          }
          44.271% {
            transform:translate(86.119px,90.302px) rotate(-32.5deg);
          }
          44.792% {
            transform:translate(87.207px,89.575px) rotate(-35deg);
          }
          45.313% {
            transform:translate(88.263px,88.801px) rotate(-37.5deg);
          }
          45.833% {
            transform:translate(89.284px,87.981px) rotate(-40deg);
          }
          46.354% {
            transform:translate(90.268px,87.118px) rotate(-42.5deg);
          }
          46.875% {
            transform:translate(91.213px,86.213px) rotate(-45deg);
          }
          47.396% {
            transform:translate(92.118px,85.268px) rotate(-47.5deg);
          }
          47.917% {
            transform:translate(92.981px,84.284px) rotate(-50deg);
          }
          48.438% {
            transform:translate(93.801px,83.263px) rotate(-52.5deg);
          }
          48.958% {
            transform:translate(94.575px,82.207px) rotate(-55deg);
          }
          49.479% {
            transform:translate(95.302px,81.119px) rotate(-57.5deg);
          }
          50% {
            transform:translate(95.981px,80px) rotate(-60deg);
          }
          50.521% {
            transform:translate(96.61px,78.852px) rotate(-62.5deg);
          }
          51.042% {
            transform:translate(97.189px,77.679px) rotate(-65deg);
          }
          51.563% {
            transform:translate(97.716px,76.481px) rotate(-67.5deg);
          }
          52.083% {
            transform:translate(98.191px,75.261px) rotate(-70deg);
          }
          52.604% {
            transform:translate(98.612px,74.021px) rotate(-72.5deg);
          }
          53.125% {
            transform:translate(98.978px,72.765px) rotate(-75deg);
          }
          53.646% {
            transform:translate(99.289px,71.493px) rotate(-77.5deg);
          }
          54.167% {
            transform:translate(99.544px,70.209px) rotate(-80deg);
          }
          54.688% {
            transform:translate(99.743px,68.916px) rotate(-82.5deg);
          }
          55.208% {
            transform:translate(99.886px,67.615px) rotate(-85deg);
          }
          55.729% {
            transform:translate(99.971px,66.309px) rotate(-87.5deg);
          }
          56.25% {
            transform:translate(100px,65px) rotate(-90deg);
          }
          56.771% {
            transform:translate(99.971px,63.691px) rotate(-92.5deg);
          }
          57.292% {
            transform:translate(99.886px,62.385px) rotate(-95deg);
          }
          57.813% {
            transform:translate(99.743px,61.084px) rotate(-97.5deg);
          }
          58.333% {
            transform:translate(99.544px,59.791px) rotate(-100deg);
          }
          58.854% {
            transform:translate(99.289px,58.507px) rotate(-102.5deg);
          }
          59.375% {
            transform:translate(98.978px,57.235px) rotate(-105deg);
          }
          59.896% {
            transform:translate(98.612px,55.979px) rotate(-107.5deg);
          }
          60.417% {
            transform:translate(98.191px,54.739px) rotate(-110deg);
          }
          60.938% {
            transform:translate(97.716px,53.519px) rotate(-112.5deg);
          }
          61.458% {
            transform:translate(97.189px,52.321px) rotate(-115deg);
          }
          61.979% {
            transform:translate(96.61px,51.148px) rotate(-117.5deg);
          }
          62.5% {
            transform:translate(95.981px,50px) rotate(-120deg);
          }
          63.021% {
            transform:translate(95.302px,48.881px) rotate(-122.5deg);
          }
          63.542% {
            transform:translate(94.575px,47.793px) rotate(-125deg);
          }
          64.063% {
            transform:translate(93.801px,46.737px) rotate(-127.5deg);
          }
          64.583% {
            transform:translate(92.981px,45.716px) rotate(-130deg);
          }
          65.104% {
            transform:translate(92.118px,44.732px) rotate(-132.5deg);
          }
          65.625% {
            transform:translate(91.213px,43.787px) rotate(-135deg);
          }
          66.146% {
            transform:translate(90.268px,42.882px) rotate(-137.5deg);
          }
          66.667% {
            transform:translate(89.284px,42.019px) rotate(-140deg);
          }
          67.188% {
            transform:translate(88.263px,41.199px) rotate(-142.5deg);
          }
          67.708% {
            transform:translate(87.207px,40.425px) rotate(-145deg);
          }
          68.229% {
            transform:translate(86.119px,39.698px) rotate(-147.5deg);
          }
          68.75% {
            transform:translate(85px,39.019px) rotate(-150deg);
          }
          69.271% {
            transform:translate(83.852px,38.39px) rotate(-152.5deg);
          }
          69.792% {
            transform:translate(82.679px,37.811px) rotate(-155deg);
          }
          70.313% {
            transform:translate(81.481px,37.284px) rotate(-157.5deg);
          }
          70.833% {
            transform:translate(80.261px,36.809px) rotate(-160deg);
          }
          71.354% {
            transform:translate(79.021px,36.388px) rotate(-162.5deg);
          }
          71.875% {
            transform:translate(77.765px,36.022px) rotate(-165deg);
          }
          72.396% {
            transform:translate(76.493px,35.711px) rotate(-167.5deg);
          }
          72.917% {
            transform:translate(75.209px,35.456px) rotate(-170deg);
          }
          73.438% {
            transform:translate(73.916px,35.257px) rotate(-172.5deg);
          }
          73.958% {
            transform:translate(72.615px,35.114px) rotate(-175deg);
          }
          74.479% {
            transform:translate(71.309px,35.029px) rotate(-177.5deg);
          }
          75% {
            transform:translate(70px,35px) rotate(-180deg);
          }
          75.521% {
            transform:translate(68.691px,35.029px) rotate(-182.5deg);
          }
          76.042% {
            transform:translate(67.385px,35.114px) rotate(-185deg);
          }
          76.563% {
            transform:translate(66.084px,35.257px) rotate(-187.5deg);
          }
          77.083% {
            transform:translate(64.791px,35.456px) rotate(-190deg);
          }
          77.604% {
            transform:translate(63.507px,35.711px) rotate(-192.5deg);
          }
          78.125% {
            transform:translate(62.235px,36.022px) rotate(-195deg);
          }
          78.646% {
            transform:translate(60.979px,36.388px) rotate(-197.5deg);
          }
          79.167% {
            transform:translate(59.739px,36.809px) rotate(-200deg);
          }
          79.688% {
            transform:translate(58.519px,37.284px) rotate(-202.5deg);
          }
          80.208% {
            transform:translate(57.321px,37.811px) rotate(-205deg);
          }
          80.729% {
            transform:translate(56.148px,38.39px) rotate(-207.5deg);
          }
          81.25% {
            transform:translate(55px,39.019px) rotate(-210deg);
          }
          81.771% {
            transform:translate(53.881px,39.698px) rotate(-212.5deg);
          }
          82.292% {
            transform:translate(52.793px,40.425px) rotate(-215deg);
          }
          82.813% {
            transform:translate(51.737px,41.199px) rotate(-217.5deg);
          }
          83.333% {
            transform:translate(50.716px,42.019px) rotate(-220deg);
          }
          83.854% {
            transform:translate(49.732px,42.882px) rotate(-222.5deg);
          }
          84.375% {
            transform:translate(48.787px,43.787px) rotate(-225deg);
          }
          84.896% {
            transform:translate(47.882px,44.732px) rotate(-227.5deg);
          }
          85.417% {
            transform:translate(47.019px,45.716px) rotate(-230deg);
          }
          85.938% {
            transform:translate(46.199px,46.737px) rotate(-232.5deg);
          }
          86.458% {
            transform:translate(45.425px,47.793px) rotate(-235deg);
          }
          86.979% {
            transform:translate(44.698px,48.881px) rotate(-237.5deg);
          }
          87.5% {
            transform:translate(44.019px,50px) rotate(-240deg);
          }
          88.021% {
            transform:translate(43.39px,51.148px) rotate(-242.5deg);
          }
          88.542% {
            transform:translate(42.811px,52.321px) rotate(-245deg);
          }
          89.063% {
            transform:translate(42.284px,53.519px) rotate(-247.5deg);
          }
          89.583% {
            transform:translate(41.809px,54.739px) rotate(-250deg);
          }
          90.104% {
            transform:translate(41.388px,55.979px) rotate(-252.5deg);
          }
          90.625% {
            transform:translate(41.022px,57.235px) rotate(-255deg);
          }
          91.146% {
            transform:translate(40.711px,58.507px) rotate(-257.5deg);
          }
          91.667% {
            transform:translate(40.456px,59.791px) rotate(-260deg);
          }
          92.188% {
            transform:translate(40.257px,61.084px) rotate(-262.5deg);
          }
          92.708% {
            transform:translate(40.114px,62.385px) rotate(-265deg);
          }
          93.229% {
            transform:translate(40.029px,63.691px) rotate(-267.5deg);
          }
          93.75% {
            transform:translate(40px,65px) rotate(-270deg);
          }
          94.271% {
            transform:translate(40.029px,66.309px) rotate(-272.5deg);
          }
          94.792% {
            transform:translate(40.114px,67.615px) rotate(-275deg);
          }
          95.313% {
            transform:translate(40.257px,68.916px) rotate(-277.5deg);
          }
          95.833% {
            transform:translate(40.456px,70.209px) rotate(-280deg);
          }
          96.354% {
            transform:translate(40.711px,71.493px) rotate(-282.5deg);
          }
          96.875% {
            transform:translate(41.022px,72.765px) rotate(-285deg);
          }
          97.396% {
            transform:translate(41.388px,74.021px) rotate(-287.5deg);
          }
          97.917% {
            transform:translate(41.809px,75.261px) rotate(-290deg);
          }
          98.438% {
            transform:translate(42.284px,76.481px) rotate(-292.5deg);
          }
          98.958% {
            transform:translate(42.811px,77.679px) rotate(-295deg);
          }
          99.479% {
            transform:translate(43.39px,78.852px) rotate(-297.5deg);
          }
          100% {
            transform:translate(44.019px,80px) rotate(-300deg);
          }
        }
        @keyframes entrant {
          0% {
            transform:translate(63px,133px) rotate(-85.426deg);
            opacity:1;
          }
          0.521% {
            transform:translate(63.05px,132.39px) rotate(-85.261deg);
          }
          1.042% {
            transform:translate(63.195px,130.727px) rotate(-84.773deg);
          }
          1.563% {
            transform:translate(63.435px,128.285px) rotate(-83.941deg);
          }
          2.083% {
            transform:translate(63.778px,125.349px) rotate(-82.72deg);
            opacity:1;
          }
          2.604% {
            transform:translate(64.227px,122.179px) rotate(-81.058deg);
          }
          3.125% {
            transform:translate(64.786px,118.998px) rotate(-78.919deg);
          }
          3.646% {
            transform:translate(65.447px,115.975px) rotate(-76.313deg);
          }
          4.167% {
            transform:translate(66.188px,113.234px) rotate(-73.33deg);
            opacity:1;
          }
          4.688% {
            transform:translate(66.969px,110.86px) rotate(-70.16deg);
          }
          5.208% {
            transform:translate(67.732px,108.908px) rotate(-67.083deg);
          }
          5.729% {
            transform:translate(68.401px,107.421px) rotate(-64.431deg);
          }
          6.25% {
            transform:translate(68.892px,106.438px) rotate(-62.529deg);
            opacity:1;
          }
          6.771% {
            transform:translate(69.118px,106.01px) rotate(-61.666deg);
          }
          7.292% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
          }
          7.813% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
          }
          8.333% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
            opacity:1;
          }
          8.854% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
          }
          9.375% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
          }
          9.896% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
          }
          10.417% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
            opacity:1;
          }
          10.938% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
          }
          11.458% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
          }
          11.979% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
          }
          12.5% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
            opacity:1;
          }
          13.021% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
          }
          13.542% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
          }
          14.063% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
          }
          14.583% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
            opacity:1;
          }
          15.104% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
          }
          15.625% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
          }
          16.146% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
          }
          16.667% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
            opacity:1;
          }
          17.188% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
          }
          17.708% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
          }
          18.229% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
          }
          18.75% {
            transform:translate(69.125px,105.998px) rotate(-61.64deg);
            opacity:1;
          }
          19.271% {
            transform:translate(69.326px,105.631px) rotate(-60.882deg);
          }
          19.792% {
            transform:translate(69.902px,104.64px) rotate(-58.76deg);
          }
          20.313% {
            transform:translate(70.829px,103.204px) rotate(-55.512deg);
          }
          20.833% {
            transform:translate(72.093px,101.498px) rotate(-51.458deg);
            opacity:1;
          }
          21.354% {
            transform:translate(73.67px,99.67px) rotate(-47.03deg);
          }
          21.875% {
            transform:translate(75.516px,97.836px) rotate(-42.713deg);
          }
          22.396% {
            transform:translate(77.551px,96.081px) rotate(-38.916deg);
          }
          22.917% {
            transform:translate(79.656px,94.476px) rotate(-35.873deg);
            opacity:1;
          }
          23.438% {
            transform:translate(81.664px,93.085px) rotate(-33.64deg);
          }
          23.958% {
            transform:translate(83.374px,91.98px) rotate(-32.151deg);
          }
          24.479% {
            transform:translate(84.56px,91.247px) rotate(-31.3deg);
          }
          25% {
            transform:translate(85px,90.981px) rotate(-30deg);
            opacity:1;
          }
          25.521% {
            transform:translate(86.119px,90.302px) rotate(-32.5deg);
          }
          26.042% {
            transform:translate(87.207px,89.575px) rotate(-35deg);
          }
          26.563% {
            transform:translate(88.263px,88.801px) rotate(-37.5deg);
          }
          27.083% {
            transform:translate(89.284px,87.981px) rotate(-40deg);
            opacity:1;
          }
          27.604% {
            transform:translate(90.268px,87.118px) rotate(-42.5deg);
          }
          28.125% {
            transform:translate(91.213px,86.213px) rotate(-45deg);
          }
          28.646% {
            transform:translate(92.118px,85.268px) rotate(-47.5deg);
          }
          29.167% {
            transform:translate(92.981px,84.284px) rotate(-50deg);
            opacity:1;
          }
          29.688% {
            transform:translate(93.801px,83.263px) rotate(-52.5deg);
          }
          30.208% {
            transform:translate(94.575px,82.207px) rotate(-55deg);
          }
          30.729% {
            transform:translate(95.302px,81.119px) rotate(-57.5deg);
          }
          31.25% {
            transform:translate(95.981px,80px) rotate(-60deg);
            opacity:1;
          }
          31.771% {
            transform:translate(96.61px,78.852px) rotate(-62.5deg);
          }
          32.292% {
            transform:translate(97.189px,77.679px) rotate(-65deg);
          }
          32.813% {
            transform:translate(97.716px,76.481px) rotate(-67.5deg);
          }
          33.333% {
            transform:translate(98.191px,75.261px) rotate(-70deg);
            opacity:1;
          }
          33.854% {
            transform:translate(98.612px,74.021px) rotate(-72.5deg);
          }
          34.375% {
            transform:translate(98.978px,72.765px) rotate(-75deg);
          }
          34.896% {
            transform:translate(99.289px,71.493px) rotate(-77.5deg);
          }
          35.417% {
            transform:translate(99.544px,70.209px) rotate(-80deg);
            opacity:1;
          }
          35.938% {
            transform:translate(99.743px,68.916px) rotate(-82.5deg);
          }
          36.458% {
            transform:translate(99.886px,67.615px) rotate(-85deg);
          }
          36.979% {
            transform:translate(99.971px,66.309px) rotate(-87.5deg);
          }
          37.5% {
            transform:translate(100px,65px) rotate(-90deg);
            opacity:1;
          }
          38.021% {
            transform:translate(99.971px,63.691px) rotate(-92.5deg);
          }
          38.542% {
            transform:translate(99.886px,62.385px) rotate(-95deg);
          }
          39.063% {
            transform:translate(99.743px,61.084px) rotate(-97.5deg);
          }
          39.583% {
            transform:translate(99.544px,59.791px) rotate(-100deg);
            opacity:1;
          }
          40.104% {
            transform:translate(99.289px,58.507px) rotate(-102.5deg);
          }
          40.625% {
            transform:translate(98.978px,57.235px) rotate(-105deg);
          }
          41.146% {
            transform:translate(98.612px,55.979px) rotate(-107.5deg);
          }
          41.667% {
            transform:translate(98.191px,54.739px) rotate(-110deg);
            opacity:1;
          }
          42.188% {
            transform:translate(97.716px,53.519px) rotate(-112.5deg);
          }
          42.708% {
            transform:translate(97.189px,52.321px) rotate(-115deg);
          }
          43.229% {
            transform:translate(96.61px,51.148px) rotate(-117.5deg);
          }
          43.75% {
            transform:translate(95.981px,50px) rotate(-120deg);
            opacity:1;
          }
          44.271% {
            transform:translate(95.331px,48.878px) rotate(-120.141deg);
          }
          44.792% {
            transform:translate(94.633px,47.677px) rotate(-120.135deg);
          }
          45.313% {
            transform:translate(93.894px,46.4px) rotate(-120.007deg);
          }
          45.833% {
            transform:translate(93.116px,45.049px) rotate(-119.776deg);
            opacity:1;
          }
          46.354% {
            transform:translate(92.306px,43.624px) rotate(-119.456deg);
          }
          46.875% {
            transform:translate(91.468px,42.128px) rotate(-119.056deg);
          }
          47.396% {
            transform:translate(90.607px,40.562px) rotate(-118.584deg);
          }
          47.917% {
            transform:translate(89.726px,38.929px) rotate(-118.044deg);
            opacity:1;
          }
          48.438% {
            transform:translate(88.833px,37.229px) rotate(-117.441deg);
          }
          48.958% {
            transform:translate(87.93px,35.466px) rotate(-116.777deg);
          }
          49.479% {
            transform:translate(87.022px,33.639px) rotate(-116.055deg);
          }
          50% {
            transform:translate(86.115px,31.752px) rotate(-115.274deg);
            opacity:1;
          }
          50.521% {
            transform:translate(85.214px,29.806px) rotate(-114.437deg);
          }
          51.042% {
            transform:translate(84.322px,27.803px) rotate(-113.543deg);
          }
          51.563% {
            transform:translate(83.445px,25.744px) rotate(-112.591deg);
          }
          52.083% {
            transform:translate(82.588px,23.631px) rotate(-111.582deg);
            opacity:1;
          }
          52.604% {
            transform:translate(81.754px,21.466px) rotate(-110.514deg);
          }
          53.125% {
            transform:translate(80.95px,19.251px) rotate(-109.386deg);
          }
          53.646% {
            transform:translate(80.18px,16.987px) rotate(-108.198deg);
          }
          54.167% {
            transform:translate(79.448px,14.676px) rotate(-106.948deg);
            opacity:0.664;
          }
          54.688% {
            transform:translate(78.759px,12.321px) rotate(-105.636deg);
          }
          55.208% {
            transform:translate(78.118px,9.921px) rotate(-104.259deg);
          }
          55.729% {
            transform:translate(77.53px,7.481px) rotate(-102.818deg);
          }
          56.25% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          56.771% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          57.292% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          57.813% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          58.333% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          58.854% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          59.375% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          59.896% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          60.417% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          60.938% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          61.458% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          61.979% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          62.5% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          63.021% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          63.542% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          64.063% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          64.583% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          65.104% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          65.625% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          66.146% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          66.667% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          67.188% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          67.708% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          68.229% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          68.75% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          69.271% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          69.792% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          70.313% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          70.833% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          71.354% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          71.875% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          72.396% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          72.917% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          73.438% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          73.958% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          74.479% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          75% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          75.521% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          76.042% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          76.563% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          77.083% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          77.604% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          78.125% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          78.646% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          79.167% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          79.688% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          80.208% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          80.729% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          81.25% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          81.771% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          82.292% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          82.813% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          83.333% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          83.854% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          84.375% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          84.896% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          85.417% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          85.938% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          86.458% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          86.979% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          87.5% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          88.021% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          88.542% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          89.063% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          89.583% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          90.104% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          90.625% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          91.146% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          91.667% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          92.188% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          92.708% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          93.229% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          93.75% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          94.271% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          94.792% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          95.313% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          95.833% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          96.354% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          96.875% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          97.396% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          97.917% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
          98.438% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          98.958% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          99.479% {
            transform:translate(77px,5px) rotate(-101.31deg);
          }
          100% {
            transform:translate(77px,5px) rotate(-101.31deg);
            opacity:0;
          }
        }
        @keyframes roundaboutEpisode {
          0% {
            opacity:1;
          }
          2.083% {
            opacity:1;
          }
          4.167% {
            opacity:1;
          }
          6.25% {
            opacity:1;
          }
          8.333% {
            opacity:1;
          }
          10.417% {
            opacity:1;
          }
          12.5% {
            opacity:1;
          }
          14.583% {
            opacity:1;
          }
          16.667% {
            opacity:1;
          }
          18.75% {
            opacity:1;
          }
          20.833% {
            opacity:1;
          }
          22.917% {
            opacity:1;
          }
          25% {
            opacity:1;
          }
          27.083% {
            opacity:1;
          }
          29.167% {
            opacity:1;
          }
          31.25% {
            opacity:1;
          }
          33.333% {
            opacity:1;
          }
          35.417% {
            opacity:1;
          }
          37.5% {
            opacity:1;
          }
          39.583% {
            opacity:1;
          }
          41.667% {
            opacity:1;
          }
          43.75% {
            opacity:1;
          }
          45.833% {
            opacity:1;
          }
          47.917% {
            opacity:1;
          }
          50% {
            opacity:1;
          }
          52.083% {
            opacity:1;
          }
          54.167% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          66.667% {
            opacity:1;
          }
          68.75% {
            opacity:1;
          }
          70.833% {
            opacity:1;
          }
          72.917% {
            opacity:1;
          }
          75% {
            opacity:1;
          }
          77.083% {
            opacity:1;
          }
          79.167% {
            opacity:1;
          }
          81.25% {
            opacity:1;
          }
          83.333% {
            opacity:1;
          }
          85.417% {
            opacity:1;
          }
          87.5% {
            opacity:1;
          }
          89.583% {
            opacity:1;
          }
          91.667% {
            opacity:1;
          }
          93.75% {
            opacity:1;
          }
          95.833% {
            opacity:0.926;
          }
          97.917% {
            opacity:0.376;
          }
          100% {
            opacity:0;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .traffic0 {
            transform:translate(73.916px,35.257px) rotate(-172.5deg);
          }
          .traffic1 {
            transform:translate(97.716px,53.519px) rotate(-112.5deg);
          }
          .traffic2 {
            transform:translate(51.737px,88.801px) rotate(37.5deg);
          }
          .entrant {
            transform:translate(93.801px,83.263px) rotate(-52.5deg);
          }
          .roundaboutEpisode {
            opacity:1;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Roundabout Gap Acceptance">
        <g class="roundaboutEpisode">
          <circle cx="70" cy="65" r="37" fill="#4a5f58"/>
          <path d="M63 133L63.129 131.459L63.266 129.962L63.412 128.507L63.567 127.094L63.731 125.721L63.904 124.387L64.088 123.091L64.282 121.833L64.488 120.612L64.704 119.426L64.932 118.274L65.172 117.156L65.424 116.07L65.689 115.016L65.968 113.993L66.259 112.999L66.565 112.034L66.885 111.097L67.219 110.186L67.569 109.301L67.934 108.44L68.315 107.604L68.712 106.79L69.125 105.998L69.555 105.226L70.003 104.475L70.469 103.742L70.952 103.027L71.454 102.33L71.975 101.648L72.515 100.981L73.074 100.328L73.654 99.688L74.253 99.06L74.874 98.443L75.516 97.836L76.179 97.238L76.864 96.648L77.571 96.065L78.301 95.489L79.054 94.918L79.83 94.35L80.63 93.786L81.454 93.225L82.303 92.664L83.177 92.104L84.075 91.543L85 90.981" fill="none" stroke="#4a5f58" stroke-width="13"/>
          <path d="M95.981 50L95.662 49.449L95.331 48.878L94.988 48.287L94.633 47.677L94.269 47.048L93.894 46.4L93.509 45.734L93.116 45.049L92.715 44.345L92.306 43.624L91.89 42.885L91.468 42.128L91.04 41.354L90.607 40.562L90.169 39.754L89.726 38.929L89.281 38.087L88.833 37.229L88.382 36.355L87.93 35.466L87.476 34.56L87.022 33.639L86.568 32.703L86.115 31.752L85.664 30.787L85.214 29.806L84.766 28.812L84.322 27.803L83.881 26.78L83.445 25.744L83.014 24.694L82.588 23.631L82.168 22.555L81.754 21.466L81.348 20.365L80.95 19.251L80.56 18.125L80.18 16.987L79.809 15.837L79.448 14.676L79.098 13.504L78.759 12.321L78.432 11.126L78.118 9.921L77.817 8.706L77.53 7.481L77.258 6.245L77 5" fill="none" stroke="#4a5f58" stroke-width="13"/>
          <circle cx="70" cy="65" r="22" fill="#2d5134" stroke="#92a878"/>
          <circle cx="81" cy="65" r="2" fill="#6d9160"/>
          <circle cx="75.5" cy="74.526" r="2" fill="#6d9160"/>
          <circle cx="64.5" cy="74.526" r="2" fill="#6d9160"/>
          <circle cx="59" cy="65" r="2" fill="#6d9160"/>
          <circle cx="64.5" cy="55.474" r="2" fill="#6d9160"/>
          <circle cx="75.5" cy="55.474" r="2" fill="#6d9160"/>
          <path d="M67 105L75 109" stroke="#d5c590" stroke-dasharray="2 2" stroke-width="1.5"/>
          <rect x="-3" y="-1.8" width="6" height="3.6" class="traffic0" rx="1" fill="#9ec5bd"/>
          <rect x="-3" y="-1.8" width="6" height="3.6" class="traffic1" rx="1" fill="#9ec5bd"/>
          <rect x="-3" y="-1.8" width="6" height="3.6" class="traffic2" rx="1" fill="#9ec5bd"/>
          <rect x="-3" y="-1.8" width="6" height="3.6" class="entrant" rx="1" fill="#edc27e"/>
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

if (!customElements.get("concept-roundabout-gap-acceptance")) {
  customElements.define("concept-roundabout-gap-acceptance", ConceptRoundaboutGapAcceptance);
}
