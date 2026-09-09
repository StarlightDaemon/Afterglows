// Aerobraking. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAerobraking extends HTMLElement {
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
        .craft {
          animation:craft 16s linear infinite;
        }
        .drag {
          animation:drag 16s linear infinite;
        }
        @keyframes craft {
          0% {
            transform:translate(24px,70px);
          }
          0.521% {
            transform:translate(25.794px,59.536px);
          }
          1.042% {
            transform:translate(30.4px,50.686px);
          }
          1.563% {
            transform:translate(36.447px,43.911px);
          }
          2.083% {
            transform:translate(42.991px,38.948px);
          }
          2.604% {
            transform:translate(49.556px,35.398px);
          }
          3.125% {
            transform:translate(55.926px,32.928px);
          }
          3.646% {
            transform:translate(62.012px,31.294px);
          }
          4.167% {
            transform:translate(67.779px,30.318px);
          }
          4.688% {
            transform:translate(73.218px,29.87px);
          }
          5.208% {
            transform:translate(78.335px,29.853px);
          }
          5.729% {
            transform:translate(83.139px,30.194px);
          }
          6.25% {
            transform:translate(87.642px,30.833px);
          }
          6.771% {
            transform:translate(91.856px,31.727px);
          }
          7.292% {
            transform:translate(95.794px,32.838px);
          }
          7.813% {
            transform:translate(99.465px,34.137px);
          }
          8.333% {
            transform:translate(102.88px,35.599px);
          }
          8.854% {
            transform:translate(106.049px,37.202px);
          }
          9.375% {
            transform:translate(108.98px,38.929px);
          }
          9.896% {
            transform:translate(111.68px,40.765px);
          }
          10.417% {
            transform:translate(114.156px,42.697px);
          }
          10.938% {
            transform:translate(116.414px,44.712px);
          }
          11.458% {
            transform:translate(118.46px,46.801px);
          }
          11.979% {
            transform:translate(120.298px,48.953px);
          }
          12.5% {
            transform:translate(121.932px,51.161px);
          }
          13.021% {
            transform:translate(123.366px,53.417px);
          }
          13.542% {
            transform:translate(124.603px,55.714px);
          }
          14.063% {
            transform:translate(125.646px,58.044px);
          }
          14.583% {
            transform:translate(126.495px,60.403px);
          }
          15.104% {
            transform:translate(127.155px,62.783px);
          }
          15.625% {
            transform:translate(127.625px,65.18px);
          }
          16.146% {
            transform:translate(127.906px,67.587px);
          }
          16.667% {
            transform:translate(128px,70px);
          }
          17.188% {
            transform:translate(127.906px,72.413px);
          }
          17.708% {
            transform:translate(127.625px,74.82px);
          }
          18.229% {
            transform:translate(127.155px,77.217px);
          }
          18.75% {
            transform:translate(126.495px,79.597px);
          }
          19.271% {
            transform:translate(125.646px,81.956px);
          }
          19.792% {
            transform:translate(124.603px,84.286px);
          }
          20.313% {
            transform:translate(123.366px,86.583px);
          }
          20.833% {
            transform:translate(121.932px,88.839px);
          }
          21.354% {
            transform:translate(120.298px,91.047px);
          }
          21.875% {
            transform:translate(118.46px,93.199px);
          }
          22.396% {
            transform:translate(116.414px,95.288px);
          }
          22.917% {
            transform:translate(114.156px,97.303px);
          }
          23.438% {
            transform:translate(111.68px,99.235px);
          }
          23.958% {
            transform:translate(108.98px,101.071px);
          }
          24.479% {
            transform:translate(106.049px,102.798px);
          }
          25% {
            transform:translate(102.88px,104.401px);
          }
          25.521% {
            transform:translate(99.465px,105.863px);
          }
          26.042% {
            transform:translate(95.794px,107.162px);
          }
          26.563% {
            transform:translate(91.856px,108.273px);
          }
          27.083% {
            transform:translate(87.642px,109.167px);
          }
          27.604% {
            transform:translate(83.139px,109.806px);
          }
          28.125% {
            transform:translate(78.335px,110.147px);
          }
          28.646% {
            transform:translate(73.218px,110.13px);
          }
          29.167% {
            transform:translate(67.779px,109.682px);
          }
          29.688% {
            transform:translate(62.012px,108.706px);
          }
          30.208% {
            transform:translate(55.926px,107.072px);
          }
          30.729% {
            transform:translate(49.556px,104.602px);
          }
          31.25% {
            transform:translate(42.991px,101.052px);
          }
          31.771% {
            transform:translate(36.447px,96.089px);
          }
          32.292% {
            transform:translate(30.4px,89.314px);
          }
          32.813% {
            transform:translate(25.794px,80.464px);
          }
          33.333% {
            transform:translate(24px,70px);
          }
          33.854% {
            transform:translate(24.838px,63.066px);
          }
          34.375% {
            transform:translate(27.182px,56.694px);
          }
          34.896% {
            transform:translate(30.629px,51.23px);
          }
          35.417% {
            transform:translate(34.757px,46.772px);
          }
          35.938% {
            transform:translate(39.234px,43.266px);
          }
          36.458% {
            transform:translate(43.836px,40.598px);
          }
          36.979% {
            transform:translate(48.423px,38.644px);
          }
          37.5% {
            transform:translate(52.908px,37.291px);
          }
          38.021% {
            transform:translate(57.242px,36.445px);
          }
          38.542% {
            transform:translate(61.395px,36.028px);
          }
          39.063% {
            transform:translate(65.353px,35.975px);
          }
          39.583% {
            transform:translate(69.106px,36.234px);
          }
          40.104% {
            transform:translate(72.653px,36.762px);
          }
          40.625% {
            transform:translate(75.993px,37.522px);
          }
          41.146% {
            transform:translate(79.127px,38.484px);
          }
          41.667% {
            transform:translate(82.06px,39.623px);
          }
          42.188% {
            transform:translate(84.794px,40.917px);
          }
          42.708% {
            transform:translate(87.332px,42.347px);
          }
          43.229% {
            transform:translate(89.679px,43.897px);
          }
          43.75% {
            transform:translate(91.837px,45.552px);
          }
          44.271% {
            transform:translate(93.811px,47.3px);
          }
          44.792% {
            transform:translate(95.602px,49.13px);
          }
          45.313% {
            transform:translate(97.215px,51.03px);
          }
          45.833% {
            transform:translate(98.651px,52.992px);
          }
          46.354% {
            transform:translate(99.912px,55.008px);
          }
          46.875% {
            transform:translate(101.002px,57.068px);
          }
          47.396% {
            transform:translate(101.921px,59.167px);
          }
          47.917% {
            transform:translate(102.671px,61.297px);
          }
          48.438% {
            transform:translate(103.253px,63.452px);
          }
          48.958% {
            transform:translate(103.668px,65.625px);
          }
          49.479% {
            transform:translate(103.917px,67.809px);
          }
          50% {
            transform:translate(104px,70px);
          }
          50.521% {
            transform:translate(103.917px,72.191px);
          }
          51.042% {
            transform:translate(103.668px,74.375px);
          }
          51.563% {
            transform:translate(103.253px,76.548px);
          }
          52.083% {
            transform:translate(102.671px,78.703px);
          }
          52.604% {
            transform:translate(101.921px,80.833px);
          }
          53.125% {
            transform:translate(101.002px,82.932px);
          }
          53.646% {
            transform:translate(99.912px,84.992px);
          }
          54.167% {
            transform:translate(98.651px,87.008px);
          }
          54.688% {
            transform:translate(97.215px,88.97px);
          }
          55.208% {
            transform:translate(95.602px,90.87px);
          }
          55.729% {
            transform:translate(93.811px,92.7px);
          }
          56.25% {
            transform:translate(91.837px,94.448px);
          }
          56.771% {
            transform:translate(89.679px,96.103px);
          }
          57.292% {
            transform:translate(87.332px,97.653px);
          }
          57.813% {
            transform:translate(84.794px,99.083px);
          }
          58.333% {
            transform:translate(82.06px,100.377px);
          }
          58.854% {
            transform:translate(79.127px,101.516px);
          }
          59.375% {
            transform:translate(75.993px,102.478px);
          }
          59.896% {
            transform:translate(72.653px,103.238px);
          }
          60.417% {
            transform:translate(69.106px,103.766px);
          }
          60.938% {
            transform:translate(65.353px,104.025px);
          }
          61.458% {
            transform:translate(61.395px,103.972px);
          }
          61.979% {
            transform:translate(57.242px,103.555px);
          }
          62.5% {
            transform:translate(52.908px,102.709px);
          }
          63.021% {
            transform:translate(48.423px,101.356px);
          }
          63.542% {
            transform:translate(43.836px,99.402px);
          }
          64.063% {
            transform:translate(39.234px,96.734px);
          }
          64.583% {
            transform:translate(34.757px,93.228px);
          }
          65.104% {
            transform:translate(30.629px,88.77px);
          }
          65.625% {
            transform:translate(27.182px,83.306px);
          }
          66.146% {
            transform:translate(24.838px,76.934px);
          }
          66.667% {
            transform:translate(24px,70px);
          }
          67.188% {
            transform:translate(24.358px,65.701px);
          }
          67.708% {
            transform:translate(25.405px,61.559px);
          }
          68.229% {
            transform:translate(27.065px,57.71px);
          }
          68.75% {
            transform:translate(29.233px,54.249px);
          }
          69.271% {
            transform:translate(31.794px,51.234px);
          }
          69.792% {
            transform:translate(34.634px,48.684px);
          }
          70.313% {
            transform:translate(37.658px,46.594px);
          }
          70.833% {
            transform:translate(40.783px,44.944px);
          }
          71.354% {
            transform:translate(43.946px,43.704px);
          }
          71.875% {
            transform:translate(47.096px,42.839px);
          }
          72.396% {
            transform:translate(50.195px,42.315px);
          }
          72.917% {
            transform:translate(53.215px,42.099px);
          }
          73.438% {
            transform:translate(56.135px,42.16px);
          }
          73.958% {
            transform:translate(58.937px,42.47px);
          }
          74.479% {
            transform:translate(61.611px,43.003px);
          }
          75% {
            transform:translate(64.147px,43.735px);
          }
          75.521% {
            transform:translate(66.541px,44.645px);
          }
          76.042% {
            transform:translate(68.786px,45.715px);
          }
          76.563% {
            transform:translate(70.881px,46.927px);
          }
          77.083% {
            transform:translate(72.822px,48.266px);
          }
          77.604% {
            transform:translate(74.609px,49.718px);
          }
          78.125% {
            transform:translate(76.241px,51.269px);
          }
          78.646% {
            transform:translate(77.717px,52.909px);
          }
          79.167% {
            transform:translate(79.038px,54.625px);
          }
          79.688% {
            transform:translate(80.202px,56.407px);
          }
          80.208% {
            transform:translate(81.211px,58.247px);
          }
          80.729% {
            transform:translate(82.063px,60.135px);
          }
          81.25% {
            transform:translate(82.761px,62.061px);
          }
          81.771% {
            transform:translate(83.303px,64.019px);
          }
          82.292% {
            transform:translate(83.69px,66px);
          }
          82.813% {
            transform:translate(83.923px,67.996px);
          }
          83.333% {
            transform:translate(84px,70px);
          }
          83.854% {
            transform:translate(83.923px,72.004px);
          }
          84.375% {
            transform:translate(83.69px,74px);
          }
          84.896% {
            transform:translate(83.303px,75.981px);
          }
          85.417% {
            transform:translate(82.761px,77.939px);
          }
          85.938% {
            transform:translate(82.063px,79.865px);
          }
          86.458% {
            transform:translate(81.211px,81.753px);
          }
          86.979% {
            transform:translate(80.202px,83.593px);
          }
          87.5% {
            transform:translate(79.038px,85.375px);
          }
          88.021% {
            transform:translate(77.717px,87.091px);
          }
          88.542% {
            transform:translate(76.241px,88.731px);
          }
          89.063% {
            transform:translate(74.609px,90.282px);
          }
          89.583% {
            transform:translate(72.822px,91.734px);
          }
          90.104% {
            transform:translate(70.881px,93.073px);
          }
          90.625% {
            transform:translate(68.786px,94.285px);
          }
          91.146% {
            transform:translate(66.541px,95.355px);
          }
          91.667% {
            transform:translate(64.147px,96.265px);
          }
          92.188% {
            transform:translate(61.611px,96.997px);
          }
          92.708% {
            transform:translate(58.937px,97.53px);
          }
          93.229% {
            transform:translate(56.135px,97.84px);
          }
          93.75% {
            transform:translate(53.215px,97.901px);
          }
          94.271% {
            transform:translate(50.195px,97.685px);
          }
          94.792% {
            transform:translate(47.096px,97.161px);
          }
          95.313% {
            transform:translate(43.946px,96.296px);
          }
          95.833% {
            transform:translate(40.783px,95.056px);
          }
          96.354% {
            transform:translate(37.658px,93.406px);
          }
          96.875% {
            transform:translate(34.634px,91.316px);
          }
          97.396% {
            transform:translate(31.794px,88.766px);
          }
          97.917% {
            transform:translate(29.233px,85.751px);
          }
          98.438% {
            transform:translate(27.065px,82.29px);
          }
          98.958% {
            transform:translate(25.405px,78.441px);
          }
          99.479% {
            transform:translate(24.358px,74.299px);
          }
          100% {
            transform:translate(24px,70px);
          }
        }
        @keyframes drag {
          0% {
            opacity:1;
          }
          0.521% {
            opacity:1;
          }
          1.042% {
            opacity:0;
          }
          1.563% {
            opacity:0;
          }
          2.083% {
            opacity:0;
          }
          2.604% {
            opacity:0;
          }
          3.125% {
            opacity:0;
          }
          3.646% {
            opacity:0;
          }
          4.167% {
            opacity:0;
          }
          4.688% {
            opacity:0;
          }
          5.208% {
            opacity:0;
          }
          5.729% {
            opacity:0;
          }
          6.25% {
            opacity:0;
          }
          6.771% {
            opacity:0;
          }
          7.292% {
            opacity:0;
          }
          7.813% {
            opacity:0;
          }
          8.333% {
            opacity:0;
          }
          8.854% {
            opacity:0;
          }
          9.375% {
            opacity:0;
          }
          9.896% {
            opacity:0;
          }
          10.417% {
            opacity:0;
          }
          10.938% {
            opacity:0;
          }
          11.458% {
            opacity:0;
          }
          11.979% {
            opacity:0;
          }
          12.5% {
            opacity:0;
          }
          13.021% {
            opacity:0;
          }
          13.542% {
            opacity:0;
          }
          14.063% {
            opacity:0;
          }
          14.583% {
            opacity:0;
          }
          15.104% {
            opacity:0;
          }
          15.625% {
            opacity:0;
          }
          16.146% {
            opacity:0;
          }
          16.667% {
            opacity:0;
          }
          17.188% {
            opacity:0;
          }
          17.708% {
            opacity:0;
          }
          18.229% {
            opacity:0;
          }
          18.75% {
            opacity:0;
          }
          19.271% {
            opacity:0;
          }
          19.792% {
            opacity:0;
          }
          20.313% {
            opacity:0;
          }
          20.833% {
            opacity:0;
          }
          21.354% {
            opacity:0;
          }
          21.875% {
            opacity:0;
          }
          22.396% {
            opacity:0;
          }
          22.917% {
            opacity:0;
          }
          23.438% {
            opacity:0;
          }
          23.958% {
            opacity:0;
          }
          24.479% {
            opacity:0;
          }
          25% {
            opacity:0;
          }
          25.521% {
            opacity:0;
          }
          26.042% {
            opacity:0;
          }
          26.563% {
            opacity:0;
          }
          27.083% {
            opacity:0;
          }
          27.604% {
            opacity:0;
          }
          28.125% {
            opacity:0;
          }
          28.646% {
            opacity:0;
          }
          29.167% {
            opacity:0;
          }
          29.688% {
            opacity:0;
          }
          30.208% {
            opacity:0;
          }
          30.729% {
            opacity:0;
          }
          31.25% {
            opacity:0;
          }
          31.771% {
            opacity:0;
          }
          32.292% {
            opacity:0;
          }
          32.813% {
            opacity:1;
          }
          33.333% {
            opacity:1;
          }
          33.854% {
            opacity:1;
          }
          34.375% {
            opacity:1;
          }
          34.896% {
            opacity:0;
          }
          35.417% {
            opacity:0;
          }
          35.938% {
            opacity:0;
          }
          36.458% {
            opacity:0;
          }
          36.979% {
            opacity:0;
          }
          37.5% {
            opacity:0;
          }
          38.021% {
            opacity:0;
          }
          38.542% {
            opacity:0;
          }
          39.063% {
            opacity:0;
          }
          39.583% {
            opacity:0;
          }
          40.104% {
            opacity:0;
          }
          40.625% {
            opacity:0;
          }
          41.146% {
            opacity:0;
          }
          41.667% {
            opacity:0;
          }
          42.188% {
            opacity:0;
          }
          42.708% {
            opacity:0;
          }
          43.229% {
            opacity:0;
          }
          43.75% {
            opacity:0;
          }
          44.271% {
            opacity:0;
          }
          44.792% {
            opacity:0;
          }
          45.313% {
            opacity:0;
          }
          45.833% {
            opacity:0;
          }
          46.354% {
            opacity:0;
          }
          46.875% {
            opacity:0;
          }
          47.396% {
            opacity:0;
          }
          47.917% {
            opacity:0;
          }
          48.438% {
            opacity:0;
          }
          48.958% {
            opacity:0;
          }
          49.479% {
            opacity:0;
          }
          50% {
            opacity:0;
          }
          50.521% {
            opacity:0;
          }
          51.042% {
            opacity:0;
          }
          51.563% {
            opacity:0;
          }
          52.083% {
            opacity:0;
          }
          52.604% {
            opacity:0;
          }
          53.125% {
            opacity:0;
          }
          53.646% {
            opacity:0;
          }
          54.167% {
            opacity:0;
          }
          54.688% {
            opacity:0;
          }
          55.208% {
            opacity:0;
          }
          55.729% {
            opacity:0;
          }
          56.25% {
            opacity:0;
          }
          56.771% {
            opacity:0;
          }
          57.292% {
            opacity:0;
          }
          57.813% {
            opacity:0;
          }
          58.333% {
            opacity:0;
          }
          58.854% {
            opacity:0;
          }
          59.375% {
            opacity:0;
          }
          59.896% {
            opacity:0;
          }
          60.417% {
            opacity:0;
          }
          60.938% {
            opacity:0;
          }
          61.458% {
            opacity:0;
          }
          61.979% {
            opacity:0;
          }
          62.5% {
            opacity:0;
          }
          63.021% {
            opacity:0;
          }
          63.542% {
            opacity:0;
          }
          64.063% {
            opacity:0;
          }
          64.583% {
            opacity:0;
          }
          65.104% {
            opacity:0;
          }
          65.625% {
            opacity:1;
          }
          66.146% {
            opacity:1;
          }
          66.667% {
            opacity:1;
          }
          67.188% {
            opacity:1;
          }
          67.708% {
            opacity:1;
          }
          68.229% {
            opacity:1;
          }
          68.75% {
            opacity:1;
          }
          69.271% {
            opacity:0;
          }
          69.792% {
            opacity:0;
          }
          70.313% {
            opacity:0;
          }
          70.833% {
            opacity:0;
          }
          71.354% {
            opacity:0;
          }
          71.875% {
            opacity:0;
          }
          72.396% {
            opacity:0;
          }
          72.917% {
            opacity:0;
          }
          73.438% {
            opacity:0;
          }
          73.958% {
            opacity:0;
          }
          74.479% {
            opacity:0;
          }
          75% {
            opacity:0;
          }
          75.521% {
            opacity:0;
          }
          76.042% {
            opacity:0;
          }
          76.563% {
            opacity:0;
          }
          77.083% {
            opacity:0;
          }
          77.604% {
            opacity:0;
          }
          78.125% {
            opacity:0;
          }
          78.646% {
            opacity:0;
          }
          79.167% {
            opacity:0;
          }
          79.688% {
            opacity:0;
          }
          80.208% {
            opacity:0;
          }
          80.729% {
            opacity:0;
          }
          81.25% {
            opacity:0;
          }
          81.771% {
            opacity:0;
          }
          82.292% {
            opacity:0;
          }
          82.813% {
            opacity:0;
          }
          83.333% {
            opacity:0;
          }
          83.854% {
            opacity:0;
          }
          84.375% {
            opacity:0;
          }
          84.896% {
            opacity:0;
          }
          85.417% {
            opacity:0;
          }
          85.938% {
            opacity:0;
          }
          86.458% {
            opacity:0;
          }
          86.979% {
            opacity:0;
          }
          87.5% {
            opacity:0;
          }
          88.021% {
            opacity:0;
          }
          88.542% {
            opacity:0;
          }
          89.063% {
            opacity:0;
          }
          89.583% {
            opacity:0;
          }
          90.104% {
            opacity:0;
          }
          90.625% {
            opacity:0;
          }
          91.146% {
            opacity:0;
          }
          91.667% {
            opacity:0;
          }
          92.188% {
            opacity:0;
          }
          92.708% {
            opacity:0;
          }
          93.229% {
            opacity:0;
          }
          93.75% {
            opacity:0;
          }
          94.271% {
            opacity:0;
          }
          94.792% {
            opacity:0;
          }
          95.313% {
            opacity:0;
          }
          95.833% {
            opacity:0;
          }
          96.354% {
            opacity:0;
          }
          96.875% {
            opacity:0;
          }
          97.396% {
            opacity:0;
          }
          97.917% {
            opacity:1;
          }
          98.438% {
            opacity:1;
          }
          98.958% {
            opacity:1;
          }
          99.479% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .craft {
            transform:translate(24px,70px);
          }
          .drag {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Aerobraking">
        <circle cx="9" cy="8" r="1" fill="#789697" opacity=".5"/>
        <circle cx="56" cy="75" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="103" cy="19" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="29" cy="86" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="76" cy="30" r="1" fill="#789697" opacity=".5"/>
        <circle cx="123" cy="97" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="49" cy="41" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="96" cy="108" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="22" cy="52" r="1" fill="#789697" opacity=".5"/>
        <circle cx="69" cy="119" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="116" cy="63" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="42" cy="130" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="89" cy="74" r="1" fill="#789697" opacity=".5"/>
        <circle cx="15" cy="18" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="62" cy="85" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="109" cy="29" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="35" cy="96" r="1" fill="#789697" opacity=".5"/>
        <circle cx="82" cy="40" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="129" cy="107" r="0.55" fill="#789697" opacity=".5"/>
        <circle cx="43" cy="70" r="21" fill="#375969" opacity=".45"/>
        <circle cx="43" cy="70" r="13" fill="#9d7254" stroke="#c49d6d"/>
        <path d="M34 62Q43 70 51 68M34 76L43 80" stroke="#665947" fill="none"/>
        <path d="M128 70L127.889 72.628L127.555 75.245L127.001 77.84L126.228 80.401L125.24 82.918L124.042 85.379L122.637 87.774L121.033 90.094L119.236 92.327L117.254 94.464L115.096 96.497L112.77 98.417L110.286 100.214L107.656 101.883L104.89 103.414L102 104.803L98.999 106.043L95.9 107.128L92.715 108.054L89.459 108.818L86.145 109.415L82.787 109.843L79.401 110.101L76 110.187L72.599 110.101L69.213 109.843L65.855 109.415L62.541 108.818L59.285 108.054L56.1 107.128L53.001 106.043L50 104.803L47.11 103.414L44.344 101.883L41.714 100.214L39.23 98.417L36.904 96.497L34.746 94.464L32.764 92.327L30.967 90.094L29.363 87.774L27.958 85.379L26.76 82.918L25.772 80.401L24.999 77.84L24.445 75.245L24.111 72.628L24 70L24.111 67.372L24.445 64.755L24.999 62.16L25.772 59.599L26.76 57.082L27.958 54.621L29.363 52.226L30.967 49.906L32.764 47.673L34.746 45.536L36.904 43.503L39.23 41.583L41.714 39.786L44.344 38.117L47.11 36.586L50 35.197L53.001 33.957L56.1 32.872L59.285 31.946L62.541 31.182L65.855 30.585L69.213 30.157L72.599 29.899L76 29.813L79.401 29.899L82.787 30.157L86.145 30.585L89.459 31.182L92.715 31.946L95.9 32.872L98.999 33.957L102 35.197L104.89 36.586L107.656 38.117L110.286 39.786L112.77 41.583L115.096 43.503L117.254 45.536L119.236 47.673L121.033 49.906L122.637 52.226L124.042 54.621L125.24 57.082L126.228 59.599L127.001 62.16L127.555 64.755L127.889 67.372L128 70" fill="none" stroke="#4e7777" stroke-width=".8"/>
        <path d="M104 70L103.914 72.227L103.658 74.444L103.231 76.642L102.637 78.811L101.877 80.943L100.955 83.028L99.875 85.057L98.641 87.022L97.259 88.914L95.734 90.725L94.074 92.447L92.284 94.073L90.374 95.596L88.35 97.009L86.223 98.307L84 99.483L81.692 100.533L79.307 101.453L76.858 102.237L74.353 102.884L71.804 103.39L69.221 103.753L66.616 103.971L64 104.044L61.384 103.971L58.779 103.753L56.196 103.39L53.647 102.884L51.142 102.237L48.693 101.453L46.308 100.533L44 99.483L41.777 98.307L39.65 97.009L37.626 95.596L35.716 94.073L33.926 92.447L32.266 90.725L30.741 88.914L29.359 87.022L28.125 85.057L27.045 83.028L26.123 80.943L25.363 78.811L24.769 76.642L24.342 74.444L24.086 72.227L24 70L24.086 67.773L24.342 65.556L24.769 63.358L25.363 61.189L26.123 59.057L27.045 56.972L28.125 54.943L29.359 52.978L30.741 51.086L32.266 49.275L33.926 47.553L35.716 45.927L37.626 44.404L39.65 42.991L41.777 41.693L44 40.517L46.308 39.467L48.693 38.547L51.142 37.763L53.647 37.116L56.196 36.61L58.779 36.247L61.384 36.029L64 35.956L66.616 36.029L69.221 36.247L71.804 36.61L74.353 37.116L76.858 37.763L79.307 38.547L81.692 39.467L84 40.517L86.223 41.693L88.35 42.991L90.374 44.404L92.284 45.927L94.074 47.553L95.734 49.275L97.259 51.086L98.641 52.978L99.875 54.943L100.955 56.972L101.877 59.057L102.637 61.189L103.231 63.358L103.658 65.556L103.914 67.773L104 70" fill="none" stroke="#4e7777" stroke-width=".8"/>
        <path d="M84 70L83.936 71.825L83.743 73.643L83.424 75.445L82.978 77.224L82.408 78.972L81.716 80.681L80.906 82.345L79.981 83.955L78.944 85.506L77.801 86.991L76.555 88.403L75.213 89.736L73.78 90.984L72.263 92.143L70.667 93.207L69 94.171L67.269 95.032L65.481 95.786L63.643 96.429L61.765 96.96L59.853 97.374L57.916 97.672L55.962 97.851L54 97.911L52.038 97.851L50.084 97.672L48.147 97.374L46.235 96.96L44.357 96.429L42.519 95.786L40.731 95.032L39 94.171L37.333 93.207L35.737 92.143L34.22 90.984L32.787 89.736L31.445 88.403L30.199 86.991L29.056 85.506L28.019 83.955L27.094 82.345L26.284 80.681L25.592 78.972L25.022 77.224L24.576 75.445L24.257 73.643L24.064 71.825L24 70L24.064 68.175L24.257 66.357L24.576 64.555L25.022 62.776L25.592 61.028L26.284 59.319L27.094 57.655L28.019 56.045L29.056 54.494L30.199 53.009L31.445 51.597L32.787 50.264L34.22 49.016L35.737 47.857L37.333 46.793L39 45.829L40.731 44.968L42.519 44.214L44.357 43.571L46.235 43.04L48.147 42.626L50.084 42.328L52.038 42.149L54 42.089L55.962 42.149L57.916 42.328L59.853 42.626L61.765 43.04L63.643 43.571L65.481 44.214L67.269 44.968L69 45.829L70.667 46.793L72.263 47.857L73.78 49.016L75.213 50.264L76.555 51.597L77.801 53.009L78.944 54.494L79.981 56.045L80.906 57.655L81.716 59.319L82.408 61.028L82.978 62.776L83.424 64.555L83.743 66.357L83.936 68.175L84 70" fill="none" stroke="#4e7777" stroke-width=".8"/>
        <rect x="-2" y="-2" width="4" height="4" class="craft" fill="#e4c68a"/>
        <path d="M21 63L18 58M20 68L15 65" class="drag" stroke="#dda774" stroke-width="1.5"/>
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

if (!customElements.get("concept-aerobraking")) {
  customElements.define("concept-aerobraking", ConceptAerobraking);
}
