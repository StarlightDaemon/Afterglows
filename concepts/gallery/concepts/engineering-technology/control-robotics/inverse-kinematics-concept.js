// Inverse Kinematics. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptInverseKinematics extends HTMLElement {
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
          95%,97% {
            opacity:0
          }
          100% {
            opacity:1
          }
        }
        .shoulder {
          transform:rotate(-72.1012deg);
          animation:shoulder 12s linear infinite
        }
        .elbow {
          transform:rotate(57.9813deg);
          animation:elbow 12s linear infinite
        }
        .error {
          animation:error 12s linear infinite
        }
        .target {
          animation:target 12s steps(1,end) infinite
        }
        @keyframes target {
          0% {
            cx:94;
            cy:66
          }
          45.8333% {
            cx:80;
            cy:52
          }
          95.01%,100% {
            cx:94;
            cy:66
          }
        }
        @keyframes shoulder {
          0% {
            transform:rotate(-90deg)
          }
          0.4167% {
            transform:rotate(-90deg)
          }
          0.8333% {
            transform:rotate(-90deg)
          }
          1.25% {
            transform:rotate(-90deg)
          }
          1.6667% {
            transform:rotate(-90deg)
          }
          2.0833% {
            transform:rotate(-90deg)
          }
          2.5% {
            transform:rotate(-90deg)
          }
          2.9167% {
            transform:rotate(-90deg)
          }
          3.3333% {
            transform:rotate(-90deg)
          }
          3.75% {
            transform:rotate(-90deg)
          }
          4.1667% {
            transform:rotate(-90deg)
          }
          4.5833% {
            transform:rotate(-90deg)
          }
          5% {
            transform:rotate(-90deg)
          }
          5.4167% {
            transform:rotate(-90deg)
          }
          5.8333% {
            transform:rotate(-90deg)
          }
          6.25% {
            transform:rotate(-90deg)
          }
          6.6667% {
            transform:rotate(-90deg)
          }
          7.0833% {
            transform:rotate(-90deg)
          }
          7.5% {
            transform:rotate(-90deg)
          }
          7.9167% {
            transform:rotate(-90deg)
          }
          8.3333% {
            transform:rotate(-90deg)
          }
          8.75% {
            transform:rotate(-88.8513deg)
          }
          9.1667% {
            transform:rotate(-87.7026deg)
          }
          9.5833% {
            transform:rotate(-86.5538deg)
          }
          10% {
            transform:rotate(-85.4051deg)
          }
          10.4167% {
            transform:rotate(-84.2564deg)
          }
          10.8333% {
            transform:rotate(-83.1077deg)
          }
          11.25% {
            transform:rotate(-81.9589deg)
          }
          11.6667% {
            transform:rotate(-80.8102deg)
          }
          12.0833% {
            transform:rotate(-79.6615deg)
          }
          12.5% {
            transform:rotate(-78.5128deg)
          }
          12.9167% {
            transform:rotate(-77.5264deg)
          }
          13.3333% {
            transform:rotate(-76.5399deg)
          }
          13.75% {
            transform:rotate(-75.5535deg)
          }
          14.1667% {
            transform:rotate(-74.5671deg)
          }
          14.5833% {
            transform:rotate(-73.5807deg)
          }
          15% {
            transform:rotate(-72.5943deg)
          }
          15.4167% {
            transform:rotate(-71.6078deg)
          }
          15.8333% {
            transform:rotate(-70.6214deg)
          }
          16.25% {
            transform:rotate(-69.635deg)
          }
          16.6667% {
            transform:rotate(-68.6486deg)
          }
          17.0833% {
            transform:rotate(-67.8126deg)
          }
          17.5% {
            transform:rotate(-66.9766deg)
          }
          17.9167% {
            transform:rotate(-66.1406deg)
          }
          18.3333% {
            transform:rotate(-65.3045deg)
          }
          18.75% {
            transform:rotate(-64.4685deg)
          }
          19.1667% {
            transform:rotate(-63.6325deg)
          }
          19.5833% {
            transform:rotate(-62.7965deg)
          }
          20% {
            transform:rotate(-61.9605deg)
          }
          20.4167% {
            transform:rotate(-61.1245deg)
          }
          20.8333% {
            transform:rotate(-60.2885deg)
          }
          21.25% {
            transform:rotate(-59.9896deg)
          }
          21.6667% {
            transform:rotate(-59.6907deg)
          }
          22.0833% {
            transform:rotate(-59.3919deg)
          }
          22.5% {
            transform:rotate(-59.093deg)
          }
          22.9167% {
            transform:rotate(-58.7941deg)
          }
          23.3333% {
            transform:rotate(-58.4952deg)
          }
          23.75% {
            transform:rotate(-58.1964deg)
          }
          24.1667% {
            transform:rotate(-57.8975deg)
          }
          24.5833% {
            transform:rotate(-57.5986deg)
          }
          25% {
            transform:rotate(-57.2998deg)
          }
          25.4167% {
            transform:rotate(-57.1987deg)
          }
          25.8333% {
            transform:rotate(-57.0975deg)
          }
          26.25% {
            transform:rotate(-56.9964deg)
          }
          26.6667% {
            transform:rotate(-56.8953deg)
          }
          27.0833% {
            transform:rotate(-56.7942deg)
          }
          27.5% {
            transform:rotate(-56.6931deg)
          }
          27.9167% {
            transform:rotate(-56.5919deg)
          }
          28.3333% {
            transform:rotate(-56.4908deg)
          }
          28.75% {
            transform:rotate(-56.3897deg)
          }
          29.1667% {
            transform:rotate(-56.2886deg)
          }
          29.5833% {
            transform:rotate(-56.2567deg)
          }
          30% {
            transform:rotate(-56.2247deg)
          }
          30.4167% {
            transform:rotate(-56.1928deg)
          }
          30.8333% {
            transform:rotate(-56.1609deg)
          }
          31.25% {
            transform:rotate(-56.129deg)
          }
          31.6667% {
            transform:rotate(-56.0971deg)
          }
          32.0833% {
            transform:rotate(-56.0652deg)
          }
          32.5% {
            transform:rotate(-56.0333deg)
          }
          32.9167% {
            transform:rotate(-56.0013deg)
          }
          33.3333% {
            transform:rotate(-55.9694deg)
          }
          33.75% {
            transform:rotate(-55.9694deg)
          }
          34.1667% {
            transform:rotate(-55.9694deg)
          }
          34.5833% {
            transform:rotate(-55.9694deg)
          }
          35% {
            transform:rotate(-55.9694deg)
          }
          35.4167% {
            transform:rotate(-55.9694deg)
          }
          35.8333% {
            transform:rotate(-55.9694deg)
          }
          36.25% {
            transform:rotate(-55.9694deg)
          }
          36.6667% {
            transform:rotate(-55.9694deg)
          }
          37.0833% {
            transform:rotate(-55.9694deg)
          }
          37.5% {
            transform:rotate(-55.9694deg)
          }
          37.9167% {
            transform:rotate(-55.9694deg)
          }
          38.3333% {
            transform:rotate(-55.9694deg)
          }
          38.75% {
            transform:rotate(-55.9694deg)
          }
          39.1667% {
            transform:rotate(-55.9694deg)
          }
          39.5833% {
            transform:rotate(-55.9694deg)
          }
          40% {
            transform:rotate(-55.9694deg)
          }
          40.4167% {
            transform:rotate(-55.9694deg)
          }
          40.8333% {
            transform:rotate(-55.9694deg)
          }
          41.25% {
            transform:rotate(-55.9694deg)
          }
          41.6667% {
            transform:rotate(-55.9694deg)
          }
          42.0833% {
            transform:rotate(-55.9694deg)
          }
          42.5% {
            transform:rotate(-55.9694deg)
          }
          42.9167% {
            transform:rotate(-55.9694deg)
          }
          43.3333% {
            transform:rotate(-55.9694deg)
          }
          43.75% {
            transform:rotate(-55.9694deg)
          }
          44.1667% {
            transform:rotate(-55.9694deg)
          }
          44.5833% {
            transform:rotate(-55.9694deg)
          }
          45% {
            transform:rotate(-55.9694deg)
          }
          45.4167% {
            transform:rotate(-55.9694deg)
          }
          45.8333% {
            transform:rotate(-55.9694deg)
          }
          46.25% {
            transform:rotate(-55.9694deg)
          }
          46.6667% {
            transform:rotate(-55.9694deg)
          }
          47.0833% {
            transform:rotate(-55.9694deg)
          }
          47.5% {
            transform:rotate(-55.9694deg)
          }
          47.9167% {
            transform:rotate(-55.9694deg)
          }
          48.3333% {
            transform:rotate(-55.9694deg)
          }
          48.75% {
            transform:rotate(-55.9694deg)
          }
          49.1667% {
            transform:rotate(-55.9694deg)
          }
          49.5833% {
            transform:rotate(-55.9694deg)
          }
          50% {
            transform:rotate(-55.9694deg)
          }
          50.4167% {
            transform:rotate(-56.7702deg)
          }
          50.8333% {
            transform:rotate(-57.5709deg)
          }
          51.25% {
            transform:rotate(-58.3717deg)
          }
          51.6667% {
            transform:rotate(-59.1724deg)
          }
          52.0833% {
            transform:rotate(-59.9731deg)
          }
          52.5% {
            transform:rotate(-60.7739deg)
          }
          52.9167% {
            transform:rotate(-61.5746deg)
          }
          53.3333% {
            transform:rotate(-62.3754deg)
          }
          53.75% {
            transform:rotate(-63.1761deg)
          }
          54.1667% {
            transform:rotate(-63.9769deg)
          }
          54.5833% {
            transform:rotate(-64.7776deg)
          }
          55% {
            transform:rotate(-65.5784deg)
          }
          55.4167% {
            transform:rotate(-66.3791deg)
          }
          55.8333% {
            transform:rotate(-67.1798deg)
          }
          56.25% {
            transform:rotate(-67.9806deg)
          }
          56.6667% {
            transform:rotate(-68.1975deg)
          }
          57.0833% {
            transform:rotate(-68.4144deg)
          }
          57.5% {
            transform:rotate(-68.6313deg)
          }
          57.9167% {
            transform:rotate(-68.8482deg)
          }
          58.3333% {
            transform:rotate(-69.0651deg)
          }
          58.75% {
            transform:rotate(-69.282deg)
          }
          59.1667% {
            transform:rotate(-69.4989deg)
          }
          59.5833% {
            transform:rotate(-69.7158deg)
          }
          60% {
            transform:rotate(-69.9327deg)
          }
          60.4167% {
            transform:rotate(-70.1496deg)
          }
          60.8333% {
            transform:rotate(-70.3665deg)
          }
          61.25% {
            transform:rotate(-70.5834deg)
          }
          61.6667% {
            transform:rotate(-70.8003deg)
          }
          62.0833% {
            transform:rotate(-71.0172deg)
          }
          62.5% {
            transform:rotate(-71.2341deg)
          }
          62.9167% {
            transform:rotate(-71.2802deg)
          }
          63.3333% {
            transform:rotate(-71.3263deg)
          }
          63.75% {
            transform:rotate(-71.3724deg)
          }
          64.1667% {
            transform:rotate(-71.4185deg)
          }
          64.5833% {
            transform:rotate(-71.4645deg)
          }
          65% {
            transform:rotate(-71.5106deg)
          }
          65.4167% {
            transform:rotate(-71.5567deg)
          }
          65.8333% {
            transform:rotate(-71.6028deg)
          }
          66.25% {
            transform:rotate(-71.6489deg)
          }
          66.6667% {
            transform:rotate(-71.695deg)
          }
          67.0833% {
            transform:rotate(-71.7411deg)
          }
          67.5% {
            transform:rotate(-71.7871deg)
          }
          67.9167% {
            transform:rotate(-71.8332deg)
          }
          68.3333% {
            transform:rotate(-71.8793deg)
          }
          68.75% {
            transform:rotate(-71.9254deg)
          }
          69.1667% {
            transform:rotate(-71.9371deg)
          }
          69.5833% {
            transform:rotate(-71.9488deg)
          }
          70% {
            transform:rotate(-71.9606deg)
          }
          70.4167% {
            transform:rotate(-71.9723deg)
          }
          70.8333% {
            transform:rotate(-71.984deg)
          }
          71.25% {
            transform:rotate(-71.9957deg)
          }
          71.6667% {
            transform:rotate(-72.0074deg)
          }
          72.0833% {
            transform:rotate(-72.0191deg)
          }
          72.5% {
            transform:rotate(-72.0309deg)
          }
          72.9167% {
            transform:rotate(-72.0426deg)
          }
          73.3333% {
            transform:rotate(-72.0543deg)
          }
          73.75% {
            transform:rotate(-72.066deg)
          }
          74.1667% {
            transform:rotate(-72.0777deg)
          }
          74.5833% {
            transform:rotate(-72.0895deg)
          }
          75% {
            transform:rotate(-72.1012deg)
          }
          75.4167% {
            transform:rotate(-72.1012deg)
          }
          75.8333% {
            transform:rotate(-72.1012deg)
          }
          76.25% {
            transform:rotate(-72.1012deg)
          }
          76.6667% {
            transform:rotate(-72.1012deg)
          }
          77.0833% {
            transform:rotate(-72.1012deg)
          }
          77.5% {
            transform:rotate(-72.1012deg)
          }
          77.9167% {
            transform:rotate(-72.1012deg)
          }
          78.3333% {
            transform:rotate(-72.1012deg)
          }
          78.75% {
            transform:rotate(-72.1012deg)
          }
          79.1667% {
            transform:rotate(-72.1012deg)
          }
          79.5833% {
            transform:rotate(-72.1012deg)
          }
          80% {
            transform:rotate(-72.1012deg)
          }
          80.4167% {
            transform:rotate(-72.1012deg)
          }
          80.8333% {
            transform:rotate(-72.1012deg)
          }
          81.25% {
            transform:rotate(-72.1012deg)
          }
          81.6667% {
            transform:rotate(-72.1012deg)
          }
          82.0833% {
            transform:rotate(-72.1012deg)
          }
          82.5% {
            transform:rotate(-72.1012deg)
          }
          82.9167% {
            transform:rotate(-72.1012deg)
          }
          83.3333% {
            transform:rotate(-72.1012deg)
          }
          83.75% {
            transform:rotate(-72.1012deg)
          }
          84.1667% {
            transform:rotate(-72.1012deg)
          }
          84.5833% {
            transform:rotate(-72.1012deg)
          }
          85% {
            transform:rotate(-72.1012deg)
          }
          85.4167% {
            transform:rotate(-72.1012deg)
          }
          85.8333% {
            transform:rotate(-72.1012deg)
          }
          86.25% {
            transform:rotate(-72.1012deg)
          }
          86.6667% {
            transform:rotate(-72.1012deg)
          }
          87.0833% {
            transform:rotate(-72.1012deg)
          }
          87.5% {
            transform:rotate(-72.1012deg)
          }
          87.9167% {
            transform:rotate(-72.1012deg)
          }
          88.3333% {
            transform:rotate(-72.1012deg)
          }
          88.75% {
            transform:rotate(-72.1012deg)
          }
          89.1667% {
            transform:rotate(-72.1012deg)
          }
          89.5833% {
            transform:rotate(-72.1012deg)
          }
          90% {
            transform:rotate(-72.1012deg)
          }
          90.4167% {
            transform:rotate(-72.1012deg)
          }
          90.8333% {
            transform:rotate(-72.1012deg)
          }
          91.25% {
            transform:rotate(-72.1012deg)
          }
          91.6667% {
            transform:rotate(-72.1012deg)
          }
          95% {
            transform:rotate(-72.1012deg)
          }
          95.01%,100% {
            transform:rotate(-90deg)
          }
        }
        @keyframes elbow {
          0% {
            transform:rotate(90deg)
          }
          0.4167% {
            transform:rotate(90deg)
          }
          0.8333% {
            transform:rotate(90deg)
          }
          1.25% {
            transform:rotate(90deg)
          }
          1.6667% {
            transform:rotate(90deg)
          }
          2.0833% {
            transform:rotate(90deg)
          }
          2.5% {
            transform:rotate(90deg)
          }
          2.9167% {
            transform:rotate(90deg)
          }
          3.3333% {
            transform:rotate(90deg)
          }
          3.75% {
            transform:rotate(90deg)
          }
          4.1667% {
            transform:rotate(90deg)
          }
          4.5833% {
            transform:rotate(90deg)
          }
          5% {
            transform:rotate(90deg)
          }
          5.4167% {
            transform:rotate(90deg)
          }
          5.8333% {
            transform:rotate(90deg)
          }
          6.25% {
            transform:rotate(90deg)
          }
          6.6667% {
            transform:rotate(90deg)
          }
          7.0833% {
            transform:rotate(90deg)
          }
          7.5% {
            transform:rotate(90deg)
          }
          7.9167% {
            transform:rotate(90deg)
          }
          8.3333% {
            transform:rotate(90deg)
          }
          8.75% {
            transform:rotate(89.1443deg)
          }
          9.1667% {
            transform:rotate(88.2886deg)
          }
          9.5833% {
            transform:rotate(87.433deg)
          }
          10% {
            transform:rotate(86.5773deg)
          }
          10.4167% {
            transform:rotate(85.7216deg)
          }
          10.8333% {
            transform:rotate(84.8659deg)
          }
          11.25% {
            transform:rotate(84.0102deg)
          }
          11.6667% {
            transform:rotate(83.1546deg)
          }
          12.0833% {
            transform:rotate(82.2989deg)
          }
          12.5% {
            transform:rotate(81.4432deg)
          }
          12.9167% {
            transform:rotate(80.4046deg)
          }
          13.3333% {
            transform:rotate(79.3659deg)
          }
          13.75% {
            transform:rotate(78.3273deg)
          }
          14.1667% {
            transform:rotate(77.2887deg)
          }
          14.5833% {
            transform:rotate(76.2501deg)
          }
          15% {
            transform:rotate(75.2115deg)
          }
          15.4167% {
            transform:rotate(74.1728deg)
          }
          15.8333% {
            transform:rotate(73.1342deg)
          }
          16.25% {
            transform:rotate(72.0956deg)
          }
          16.6667% {
            transform:rotate(71.057deg)
          }
          17.0833% {
            transform:rotate(69.9351deg)
          }
          17.5% {
            transform:rotate(68.8132deg)
          }
          17.9167% {
            transform:rotate(67.6912deg)
          }
          18.3333% {
            transform:rotate(66.5693deg)
          }
          18.75% {
            transform:rotate(65.4474deg)
          }
          19.1667% {
            transform:rotate(64.3255deg)
          }
          19.5833% {
            transform:rotate(63.2036deg)
          }
          20% {
            transform:rotate(62.0817deg)
          }
          20.4167% {
            transform:rotate(60.9598deg)
          }
          20.8333% {
            transform:rotate(59.8379deg)
          }
          21.25% {
            transform:rotate(59.3394deg)
          }
          21.6667% {
            transform:rotate(58.841deg)
          }
          22.0833% {
            transform:rotate(58.3426deg)
          }
          22.5% {
            transform:rotate(57.8441deg)
          }
          22.9167% {
            transform:rotate(57.3457deg)
          }
          23.3333% {
            transform:rotate(56.8472deg)
          }
          23.75% {
            transform:rotate(56.3488deg)
          }
          24.1667% {
            transform:rotate(55.8504deg)
          }
          24.5833% {
            transform:rotate(55.3519deg)
          }
          25% {
            transform:rotate(54.8535deg)
          }
          25.4167% {
            transform:rotate(54.6747deg)
          }
          25.8333% {
            transform:rotate(54.4959deg)
          }
          26.25% {
            transform:rotate(54.317deg)
          }
          26.6667% {
            transform:rotate(54.1382deg)
          }
          27.0833% {
            transform:rotate(53.9594deg)
          }
          27.5% {
            transform:rotate(53.7806deg)
          }
          27.9167% {
            transform:rotate(53.6018deg)
          }
          28.3333% {
            transform:rotate(53.4229deg)
          }
          28.75% {
            transform:rotate(53.2441deg)
          }
          29.1667% {
            transform:rotate(53.0653deg)
          }
          29.5833% {
            transform:rotate(53.0078deg)
          }
          30% {
            transform:rotate(52.9504deg)
          }
          30.4167% {
            transform:rotate(52.8929deg)
          }
          30.8333% {
            transform:rotate(52.8354deg)
          }
          31.25% {
            transform:rotate(52.778deg)
          }
          31.6667% {
            transform:rotate(52.7205deg)
          }
          32.0833% {
            transform:rotate(52.6631deg)
          }
          32.5% {
            transform:rotate(52.6056deg)
          }
          32.9167% {
            transform:rotate(52.5481deg)
          }
          33.3333% {
            transform:rotate(52.4907deg)
          }
          33.75% {
            transform:rotate(52.4907deg)
          }
          34.1667% {
            transform:rotate(52.4907deg)
          }
          34.5833% {
            transform:rotate(52.4907deg)
          }
          35% {
            transform:rotate(52.4907deg)
          }
          35.4167% {
            transform:rotate(52.4907deg)
          }
          35.8333% {
            transform:rotate(52.4907deg)
          }
          36.25% {
            transform:rotate(52.4907deg)
          }
          36.6667% {
            transform:rotate(52.4907deg)
          }
          37.0833% {
            transform:rotate(52.4907deg)
          }
          37.5% {
            transform:rotate(52.4907deg)
          }
          37.9167% {
            transform:rotate(52.4907deg)
          }
          38.3333% {
            transform:rotate(52.4907deg)
          }
          38.75% {
            transform:rotate(52.4907deg)
          }
          39.1667% {
            transform:rotate(52.4907deg)
          }
          39.5833% {
            transform:rotate(52.4907deg)
          }
          40% {
            transform:rotate(52.4907deg)
          }
          40.4167% {
            transform:rotate(52.4907deg)
          }
          40.8333% {
            transform:rotate(52.4907deg)
          }
          41.25% {
            transform:rotate(52.4907deg)
          }
          41.6667% {
            transform:rotate(52.4907deg)
          }
          42.0833% {
            transform:rotate(52.4907deg)
          }
          42.5% {
            transform:rotate(52.4907deg)
          }
          42.9167% {
            transform:rotate(52.4907deg)
          }
          43.3333% {
            transform:rotate(52.4907deg)
          }
          43.75% {
            transform:rotate(52.4907deg)
          }
          44.1667% {
            transform:rotate(52.4907deg)
          }
          44.5833% {
            transform:rotate(52.4907deg)
          }
          45% {
            transform:rotate(52.4907deg)
          }
          45.4167% {
            transform:rotate(52.4907deg)
          }
          45.8333% {
            transform:rotate(52.4907deg)
          }
          46.25% {
            transform:rotate(52.4907deg)
          }
          46.6667% {
            transform:rotate(52.4907deg)
          }
          47.0833% {
            transform:rotate(52.4907deg)
          }
          47.5% {
            transform:rotate(52.4907deg)
          }
          47.9167% {
            transform:rotate(52.4907deg)
          }
          48.3333% {
            transform:rotate(52.4907deg)
          }
          48.75% {
            transform:rotate(52.4907deg)
          }
          49.1667% {
            transform:rotate(52.4907deg)
          }
          49.5833% {
            transform:rotate(52.4907deg)
          }
          50% {
            transform:rotate(52.4907deg)
          }
          50.4167% {
            transform:rotate(53.011deg)
          }
          50.8333% {
            transform:rotate(53.5312deg)
          }
          51.25% {
            transform:rotate(54.0515deg)
          }
          51.6667% {
            transform:rotate(54.5718deg)
          }
          52.0833% {
            transform:rotate(55.0921deg)
          }
          52.5% {
            transform:rotate(55.6124deg)
          }
          52.9167% {
            transform:rotate(56.1327deg)
          }
          53.3333% {
            transform:rotate(56.653deg)
          }
          53.75% {
            transform:rotate(57.1733deg)
          }
          54.1667% {
            transform:rotate(57.6935deg)
          }
          54.5833% {
            transform:rotate(58.2138deg)
          }
          55% {
            transform:rotate(58.7341deg)
          }
          55.4167% {
            transform:rotate(59.2544deg)
          }
          55.8333% {
            transform:rotate(59.7747deg)
          }
          56.25% {
            transform:rotate(60.295deg)
          }
          56.6667% {
            transform:rotate(60.2222deg)
          }
          57.0833% {
            transform:rotate(60.1494deg)
          }
          57.5% {
            transform:rotate(60.0766deg)
          }
          57.9167% {
            transform:rotate(60.0038deg)
          }
          58.3333% {
            transform:rotate(59.9311deg)
          }
          58.75% {
            transform:rotate(59.8583deg)
          }
          59.1667% {
            transform:rotate(59.7855deg)
          }
          59.5833% {
            transform:rotate(59.7127deg)
          }
          60% {
            transform:rotate(59.6399deg)
          }
          60.4167% {
            transform:rotate(59.5671deg)
          }
          60.8333% {
            transform:rotate(59.4944deg)
          }
          61.25% {
            transform:rotate(59.4216deg)
          }
          61.6667% {
            transform:rotate(59.3488deg)
          }
          62.0833% {
            transform:rotate(59.276deg)
          }
          62.5% {
            transform:rotate(59.2032deg)
          }
          62.9167% {
            transform:rotate(59.1434deg)
          }
          63.3333% {
            transform:rotate(59.0837deg)
          }
          63.75% {
            transform:rotate(59.0239deg)
          }
          64.1667% {
            transform:rotate(58.9641deg)
          }
          64.5833% {
            transform:rotate(58.9044deg)
          }
          65% {
            transform:rotate(58.8446deg)
          }
          65.4167% {
            transform:rotate(58.7848deg)
          }
          65.8333% {
            transform:rotate(58.7251deg)
          }
          66.25% {
            transform:rotate(58.6653deg)
          }
          66.6667% {
            transform:rotate(58.6055deg)
          }
          67.0833% {
            transform:rotate(58.5457deg)
          }
          67.5% {
            transform:rotate(58.486deg)
          }
          67.9167% {
            transform:rotate(58.4262deg)
          }
          68.3333% {
            transform:rotate(58.3664deg)
          }
          68.75% {
            transform:rotate(58.3067deg)
          }
          69.1667% {
            transform:rotate(58.285deg)
          }
          69.5833% {
            transform:rotate(58.2633deg)
          }
          70% {
            transform:rotate(58.2416deg)
          }
          70.4167% {
            transform:rotate(58.2199deg)
          }
          70.8333% {
            transform:rotate(58.1982deg)
          }
          71.25% {
            transform:rotate(58.1765deg)
          }
          71.6667% {
            transform:rotate(58.1548deg)
          }
          72.0833% {
            transform:rotate(58.1331deg)
          }
          72.5% {
            transform:rotate(58.1114deg)
          }
          72.9167% {
            transform:rotate(58.0898deg)
          }
          73.3333% {
            transform:rotate(58.0681deg)
          }
          73.75% {
            transform:rotate(58.0464deg)
          }
          74.1667% {
            transform:rotate(58.0247deg)
          }
          74.5833% {
            transform:rotate(58.003deg)
          }
          75% {
            transform:rotate(57.9813deg)
          }
          75.4167% {
            transform:rotate(57.9813deg)
          }
          75.8333% {
            transform:rotate(57.9813deg)
          }
          76.25% {
            transform:rotate(57.9813deg)
          }
          76.6667% {
            transform:rotate(57.9813deg)
          }
          77.0833% {
            transform:rotate(57.9813deg)
          }
          77.5% {
            transform:rotate(57.9813deg)
          }
          77.9167% {
            transform:rotate(57.9813deg)
          }
          78.3333% {
            transform:rotate(57.9813deg)
          }
          78.75% {
            transform:rotate(57.9813deg)
          }
          79.1667% {
            transform:rotate(57.9813deg)
          }
          79.5833% {
            transform:rotate(57.9813deg)
          }
          80% {
            transform:rotate(57.9813deg)
          }
          80.4167% {
            transform:rotate(57.9813deg)
          }
          80.8333% {
            transform:rotate(57.9813deg)
          }
          81.25% {
            transform:rotate(57.9813deg)
          }
          81.6667% {
            transform:rotate(57.9813deg)
          }
          82.0833% {
            transform:rotate(57.9813deg)
          }
          82.5% {
            transform:rotate(57.9813deg)
          }
          82.9167% {
            transform:rotate(57.9813deg)
          }
          83.3333% {
            transform:rotate(57.9813deg)
          }
          83.75% {
            transform:rotate(57.9813deg)
          }
          84.1667% {
            transform:rotate(57.9813deg)
          }
          84.5833% {
            transform:rotate(57.9813deg)
          }
          85% {
            transform:rotate(57.9813deg)
          }
          85.4167% {
            transform:rotate(57.9813deg)
          }
          85.8333% {
            transform:rotate(57.9813deg)
          }
          86.25% {
            transform:rotate(57.9813deg)
          }
          86.6667% {
            transform:rotate(57.9813deg)
          }
          87.0833% {
            transform:rotate(57.9813deg)
          }
          87.5% {
            transform:rotate(57.9813deg)
          }
          87.9167% {
            transform:rotate(57.9813deg)
          }
          88.3333% {
            transform:rotate(57.9813deg)
          }
          88.75% {
            transform:rotate(57.9813deg)
          }
          89.1667% {
            transform:rotate(57.9813deg)
          }
          89.5833% {
            transform:rotate(57.9813deg)
          }
          90% {
            transform:rotate(57.9813deg)
          }
          90.4167% {
            transform:rotate(57.9813deg)
          }
          90.8333% {
            transform:rotate(57.9813deg)
          }
          91.25% {
            transform:rotate(57.9813deg)
          }
          91.6667% {
            transform:rotate(57.9813deg)
          }
          95% {
            transform:rotate(57.9813deg)
          }
          95.01%,100% {
            transform:rotate(90deg)
          }
        }
        @keyframes error {
          0% {
            d:path("M66 60L94,66")
          }
          0.4167% {
            d:path("M66 60L94,66")
          }
          0.8333% {
            d:path("M66 60L94,66")
          }
          1.25% {
            d:path("M66 60L94,66")
          }
          1.6667% {
            d:path("M66 60L94,66")
          }
          2.0833% {
            d:path("M66 60L94,66")
          }
          2.5% {
            d:path("M66 60L94,66")
          }
          2.9167% {
            d:path("M66 60L94,66")
          }
          3.3333% {
            d:path("M66 60L94,66")
          }
          3.75% {
            d:path("M66 60L94,66")
          }
          4.1667% {
            d:path("M66 60L94,66")
          }
          4.5833% {
            d:path("M66 60L94,66")
          }
          5% {
            d:path("M66 60L94,66")
          }
          5.4167% {
            d:path("M66 60L94,66")
          }
          5.8333% {
            d:path("M66 60L94,66")
          }
          6.25% {
            d:path("M66 60L94,66")
          }
          6.6667% {
            d:path("M66 60L94,66")
          }
          7.0833% {
            d:path("M66 60L94,66")
          }
          7.5% {
            d:path("M66 60L94,66")
          }
          7.9167% {
            d:path("M66 60L94,66")
          }
          8.3333% {
            d:path("M66 60L94,66")
          }
          8.75% {
            d:path("M67.0018 60.2249L94,66")
          }
          9.1667% {
            d:path("M68.0022 60.4698L94,66")
          }
          9.5833% {
            d:path("M69.0006 60.7348L94,66")
          }
          10% {
            d:path("M69.9967 61.0199L94,66")
          }
          10.4167% {
            d:path("M70.9901 61.325L94,66")
          }
          10.8333% {
            d:path("M71.9804 61.65L94,66")
          }
          11.25% {
            d:path("M72.9672 61.9949L94,66")
          }
          11.6667% {
            d:path("M73.9501 62.3598L94,66")
          }
          12.0833% {
            d:path("M74.9287 62.7444L94,66")
          }
          12.5% {
            d:path("M75.9026 63.1487L94,66")
          }
          12.9167% {
            d:path("M76.7465 63.2892L94,66")
          }
          13.3333% {
            d:path("M77.5873 63.4441L94,66")
          }
          13.75% {
            d:path("M78.4246 63.6135L94,66")
          }
          14.1667% {
            d:path("M79.2581 63.7972L94,66")
          }
          14.5833% {
            d:path("M80.0877 63.9951L94,66")
          }
          15% {
            d:path("M80.913 64.2073L94,66")
          }
          15.4167% {
            d:path("M81.7339 64.4337L94,66")
          }
          15.8333% {
            d:path("M82.55 64.674L94,66")
          }
          16.25% {
            d:path("M83.3612 64.9284L94,66")
          }
          16.6667% {
            d:path("M84.1673 65.1967L94,66")
          }
          17.0833% {
            d:path("M84.8531 65.2578L94,66")
          }
          17.5% {
            d:path("M85.5338 65.3288L94,66")
          }
          17.9167% {
            d:path("M86.2093 65.4096L94,66")
          }
          18.3333% {
            d:path("M86.8795 65.5L94,66")
          }
          18.75% {
            d:path("M87.5442 65.6001L94,66")
          }
          19.1667% {
            d:path("M88.2033 65.7098L94,66")
          }
          19.5833% {
            d:path("M88.8566 65.829L94,66")
          }
          20% {
            d:path("M89.5039 65.9577L94,66")
          }
          20.4167% {
            d:path("M90.1452 66.0957L94,66")
          }
          20.8333% {
            d:path("M90.7804 66.2431L94,66")
          }
          21.25% {
            d:path("M91.0052 66.2267L94,66")
          }
          21.6667% {
            d:path("M91.2288 66.2114L94,66")
          }
          22.0833% {
            d:path("M91.4511 66.1974L94,66")
          }
          22.5% {
            d:path("M91.6723 66.1845L94,66")
          }
          22.9167% {
            d:path("M91.8923 66.1728L94,66")
          }
          23.3333% {
            d:path("M92.1111 66.1623L94,66")
          }
          23.75% {
            d:path("M92.3286 66.1529L94,66")
          }
          24.1667% {
            d:path("M92.545 66.1448L94,66")
          }
          24.5833% {
            d:path("M92.7601 66.1377L94,66")
          }
          25% {
            d:path("M92.9739 66.1319L94,66")
          }
          25.4167% {
            d:path("M93.0457 66.1227L94,66")
          }
          25.8333% {
            d:path("M93.1172 66.1137L94,66")
          }
          26.25% {
            d:path("M93.1887 66.1048L94,66")
          }
          26.6667% {
            d:path("M93.2599 66.096L94,66")
          }
          27.0833% {
            d:path("M93.331 66.0874L94,66")
          }
          27.5% {
            d:path("M93.402 66.0789L94,66")
          }
          27.9167% {
            d:path("M93.4727 66.0706L94,66")
          }
          28.3333% {
            d:path("M93.5433 66.0623L94,66")
          }
          28.75% {
            d:path("M93.6138 66.0542L94,66")
          }
          29.1667% {
            d:path("M93.6841 66.0463L94,66")
          }
          29.5833% {
            d:path("M93.7062 66.043L94,66")
          }
          30% {
            d:path("M93.7283 66.0398L94,66")
          }
          30.4167% {
            d:path("M93.7503 66.0366L94,66")
          }
          30.8333% {
            d:path("M93.7724 66.0334L94,66")
          }
          31.25% {
            d:path("M93.7944 66.0303L94,66")
          }
          31.6667% {
            d:path("M93.8165 66.0271L94,66")
          }
          32.0833% {
            d:path("M93.8385 66.0239L94,66")
          }
          32.5% {
            d:path("M93.8604 66.0208L94,66")
          }
          32.9167% {
            d:path("M93.8824 66.0177L94,66")
          }
          33.3333% {
            d:path("M93.9044 66.0146L94,66")
          }
          33.75% {
            d:path("M93.9044 66.0146L94,66")
          }
          34.1667% {
            d:path("M93.9044 66.0146L94,66")
          }
          34.5833% {
            d:path("M93.9044 66.0146L94,66")
          }
          35% {
            d:path("M93.9044 66.0146L94,66")
          }
          35.4167% {
            d:path("M93.9044 66.0146L94,66")
          }
          35.8333% {
            d:path("M93.9044 66.0146L94,66")
          }
          36.25% {
            d:path("M93.9044 66.0146L94,66")
          }
          36.6667% {
            d:path("M93.9044 66.0146L94,66")
          }
          37.0833% {
            d:path("M93.9044 66.0146L94,66")
          }
          37.5% {
            d:path("M93.9044 66.0146L94,66")
          }
          37.9167% {
            d:path("M93.9044 66.0146L94,66")
          }
          38.3333% {
            d:path("M93.9044 66.0146L94,66")
          }
          38.75% {
            d:path("M93.9044 66.0146L94,66")
          }
          39.1667% {
            d:path("M93.9044 66.0146L94,66")
          }
          39.5833% {
            d:path("M93.9044 66.0146L94,66")
          }
          40% {
            d:path("M93.9044 66.0146L94,66")
          }
          40.4167% {
            d:path("M93.9044 66.0146L94,66")
          }
          40.8333% {
            d:path("M93.9044 66.0146L94,66")
          }
          41.25% {
            d:path("M93.9044 66.0146L94,66")
          }
          41.6667% {
            d:path("M93.9044 66.0146L94,66")
          }
          42.0833% {
            d:path("M93.9044 66.0146L94,66")
          }
          42.5% {
            d:path("M93.9044 66.0146L94,66")
          }
          42.9167% {
            d:path("M93.9044 66.0146L94,66")
          }
          43.3333% {
            d:path("M93.9044 66.0146L94,66")
          }
          43.75% {
            d:path("M93.9044 66.0146L94,66")
          }
          44.1667% {
            d:path("M93.9044 66.0146L94,66")
          }
          44.5833% {
            d:path("M93.9044 66.0146L94,66")
          }
          45% {
            d:path("M93.9044 66.0146L94,66")
          }
          45.4167% {
            d:path("M93.9044 66.0146L94,66")
          }
          45.8333% {
            d:path("M93.9044 66.0146L80,52")
          }
          46.25% {
            d:path("M93.9044 66.0146L80,52")
          }
          46.6667% {
            d:path("M93.9044 66.0146L80,52")
          }
          47.0833% {
            d:path("M93.9044 66.0146L80,52")
          }
          47.5% {
            d:path("M93.9044 66.0146L80,52")
          }
          47.9167% {
            d:path("M93.9044 66.0146L80,52")
          }
          48.3333% {
            d:path("M93.9044 66.0146L80,52")
          }
          48.75% {
            d:path("M93.9044 66.0146L80,52")
          }
          49.1667% {
            d:path("M93.9044 66.0146L80,52")
          }
          49.5833% {
            d:path("M93.9044 66.0146L80,52")
          }
          50% {
            d:path("M93.9044 66.0146L80,52")
          }
          50.4167% {
            d:path("M93.3096 65.4224L80,52")
          }
          50.8333% {
            d:path("M92.7084 64.8384L80,52")
          }
          51.25% {
            d:path("M92.101 64.2628L80,52")
          }
          51.6667% {
            d:path("M91.4875 63.6956L80,52")
          }
          52.0833% {
            d:path("M90.868 63.1368L80,52")
          }
          52.5% {
            d:path("M90.2426 62.5866L80,52")
          }
          52.9167% {
            d:path("M89.6114 62.0449L80,52")
          }
          53.3333% {
            d:path("M88.9745 61.512L80,52")
          }
          53.75% {
            d:path("M88.3322 60.9878L80,52")
          }
          54.1667% {
            d:path("M87.6844 60.4725L80,52")
          }
          54.5833% {
            d:path("M87.0313 59.966L80,52")
          }
          55% {
            d:path("M86.3731 59.4685L80,52")
          }
          55.4167% {
            d:path("M85.7099 58.9799L80,52")
          }
          55.8333% {
            d:path("M85.0417 58.5005L80,52")
          }
          56.25% {
            d:path("M84.3687 58.0302L80,52")
          }
          56.6667% {
            d:path("M84.1642 57.7492L80,52")
          }
          57.0833% {
            d:path("M83.9583 57.469L80,52")
          }
          57.5% {
            d:path("M83.7511 57.1896L80,52")
          }
          57.9167% {
            d:path("M83.5426 56.9111L80,52")
          }
          58.3333% {
            d:path("M83.3328 56.6334L80,52")
          }
          58.75% {
            d:path("M83.1216 56.3565L80,52")
          }
          59.1667% {
            d:path("M82.9092 56.0805L80,52")
          }
          59.5833% {
            d:path("M82.6954 55.8053L80,52")
          }
          60% {
            d:path("M82.4803 55.531L80,52")
          }
          60.4167% {
            d:path("M82.2639 55.2576L80,52")
          }
          60.8333% {
            d:path("M82.0462 54.985L80,52")
          }
          61.25% {
            d:path("M81.8273 54.7133L80,52")
          }
          61.6667% {
            d:path("M81.607 54.4425L80,52")
          }
          62.0833% {
            d:path("M81.3854 54.1725L80,52")
          }
          62.5% {
            d:path("M81.1626 53.9035L80,52")
          }
          62.9167% {
            d:path("M81.1083 53.8147L80,52")
          }
          63.3333% {
            d:path("M81.0538 53.726L80,52")
          }
          63.75% {
            d:path("M80.9991 53.6373L80,52")
          }
          64.1667% {
            d:path("M80.9444 53.5487L80,52")
          }
          64.5833% {
            d:path("M80.8894 53.4601L80,52")
          }
          65% {
            d:path("M80.8344 53.3716L80,52")
          }
          65.4167% {
            d:path("M80.7791 53.2832L80,52")
          }
          65.8333% {
            d:path("M80.7237 53.1948L80,52")
          }
          66.25% {
            d:path("M80.6682 53.1065L80,52")
          }
          66.6667% {
            d:path("M80.6125 53.0183L80,52")
          }
          67.0833% {
            d:path("M80.5567 52.9301L80,52")
          }
          67.5% {
            d:path("M80.5007 52.842L80,52")
          }
          67.9167% {
            d:path("M80.4446 52.7539L80,52")
          }
          68.3333% {
            d:path("M80.3883 52.6659L80,52")
          }
          68.75% {
            d:path("M80.3319 52.578L80,52")
          }
          69.1667% {
            d:path("M80.3164 52.551L80,52")
          }
          69.5833% {
            d:path("M80.3009 52.5241L80,52")
          }
          70% {
            d:path("M80.2853 52.4971L80,52")
          }
          70.4167% {
            d:path("M80.2698 52.4702L80,52")
          }
          70.8333% {
            d:path("M80.2543 52.4432L80,52")
          }
          71.25% {
            d:path("M80.2387 52.4163L80,52")
          }
          71.6667% {
            d:path("M80.2231 52.3893L80,52")
          }
          72.0833% {
            d:path("M80.2075 52.3624L80,52")
          }
          72.5% {
            d:path("M80.1919 52.3355L80,52")
          }
          72.9167% {
            d:path("M80.1763 52.3085L80,52")
          }
          73.3333% {
            d:path("M80.1606 52.2816L80,52")
          }
          73.75% {
            d:path("M80.145 52.2547L80,52")
          }
          74.1667% {
            d:path("M80.1293 52.2278L80,52")
          }
          74.5833% {
            d:path("M80.1136 52.2009L80,52")
          }
          75% {
            d:path("M80.0979 52.174L80,52")
          }
          75.4167% {
            d:path("M80.0979 52.174L80,52")
          }
          75.8333% {
            d:path("M80.0979 52.174L80,52")
          }
          76.25% {
            d:path("M80.0979 52.174L80,52")
          }
          76.6667% {
            d:path("M80.0979 52.174L80,52")
          }
          77.0833% {
            d:path("M80.0979 52.174L80,52")
          }
          77.5% {
            d:path("M80.0979 52.174L80,52")
          }
          77.9167% {
            d:path("M80.0979 52.174L80,52")
          }
          78.3333% {
            d:path("M80.0979 52.174L80,52")
          }
          78.75% {
            d:path("M80.0979 52.174L80,52")
          }
          79.1667% {
            d:path("M80.0979 52.174L80,52")
          }
          79.5833% {
            d:path("M80.0979 52.174L80,52")
          }
          80% {
            d:path("M80.0979 52.174L80,52")
          }
          80.4167% {
            d:path("M80.0979 52.174L80,52")
          }
          80.8333% {
            d:path("M80.0979 52.174L80,52")
          }
          81.25% {
            d:path("M80.0979 52.174L80,52")
          }
          81.6667% {
            d:path("M80.0979 52.174L80,52")
          }
          82.0833% {
            d:path("M80.0979 52.174L80,52")
          }
          82.5% {
            d:path("M80.0979 52.174L80,52")
          }
          82.9167% {
            d:path("M80.0979 52.174L80,52")
          }
          83.3333% {
            d:path("M80.0979 52.174L80,52")
          }
          83.75% {
            d:path("M80.0979 52.174L80,52")
          }
          84.1667% {
            d:path("M80.0979 52.174L80,52")
          }
          84.5833% {
            d:path("M80.0979 52.174L80,52")
          }
          85% {
            d:path("M80.0979 52.174L80,52")
          }
          85.4167% {
            d:path("M80.0979 52.174L80,52")
          }
          85.8333% {
            d:path("M80.0979 52.174L80,52")
          }
          86.25% {
            d:path("M80.0979 52.174L80,52")
          }
          86.6667% {
            d:path("M80.0979 52.174L80,52")
          }
          87.0833% {
            d:path("M80.0979 52.174L80,52")
          }
          87.5% {
            d:path("M80.0979 52.174L80,52")
          }
          87.9167% {
            d:path("M80.0979 52.174L80,52")
          }
          88.3333% {
            d:path("M80.0979 52.174L80,52")
          }
          88.75% {
            d:path("M80.0979 52.174L80,52")
          }
          89.1667% {
            d:path("M80.0979 52.174L80,52")
          }
          89.5833% {
            d:path("M80.0979 52.174L80,52")
          }
          90% {
            d:path("M80.0979 52.174L80,52")
          }
          90.4167% {
            d:path("M80.0979 52.174L80,52")
          }
          90.8333% {
            d:path("M80.0979 52.174L80,52")
          }
          91.25% {
            d:path("M80.0979 52.174L80,52")
          }
          91.6667% {
            d:path("M80.0979 52.174L80,52")
          }
          95% {
            d:path("M80.0979 52.174L80,52")
          }
          95.01%,100% {
            d:path("M66 60L94,66")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Inverse Kinematics">
        <path class="ink muted" d="M12 116H38M24 109V116"/>
        <path class="ink muted" stroke-dasharray="2 4" d="M24 110V60H66"/>
        <g class="cycle">
          <circle class="ink warm target" style="fill:none" cx="80" cy="52" r="6"/>
          <path class="ink muted error" d="M80 52L80 52"/>
          <g transform="translate(24 110)">
            <g class="shoulder">
              <path class="ink" style="stroke-width:5" d="M0 0H50"/>
              <circle class="warm" r="4"/>
              <g transform="translate(50 0)">
                <g class="elbow">
                  <path class="ink" style="stroke-width:5" d="M0 0H42"/>
                  <circle class="warm" r="4"/>
                  <circle class="cool" cx="42" cy="0" r="3"/>
                </g>
              </g>
            </g>
          </g>
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

if (!customElements.get("concept-inverse-kinematics")) {
  customElements.define("concept-inverse-kinematics", ConceptInverseKinematics);
}
