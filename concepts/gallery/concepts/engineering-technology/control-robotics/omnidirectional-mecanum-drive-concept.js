// Omnidirectional Mecanum Drive. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptOmnidirectionalMecanumDrive extends HTMLElement {
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
        .m-body {
          transform:translate(70px,85px);
          animation:m-body 12s linear infinite
        }
        .m-net {
          animation:m-net 12s linear infinite
        }
        @keyframes m-body {
          0% {
            transform:translate(49px,85px)
          }
          0.4167% {
            transform:translate(49.0346px,85px)
          }
          0.8333% {
            transform:translate(49.1369px,85px)
          }
          1.25% {
            transform:translate(49.3045px,85px)
          }
          1.6667% {
            transform:translate(49.5351px,85px)
          }
          2.0833% {
            transform:translate(49.8264px,85px)
          }
          2.5% {
            transform:translate(50.176px,85px)
          }
          2.9167% {
            transform:translate(50.5816px,85px)
          }
          3.3333% {
            transform:translate(51.0409px,85px)
          }
          3.75% {
            transform:translate(51.5515px,85px)
          }
          4.1667% {
            transform:translate(52.1111px,85px)
          }
          4.5833% {
            transform:translate(52.7174px,85px)
          }
          5% {
            transform:translate(53.368px,85px)
          }
          5.4167% {
            transform:translate(54.0606px,85px)
          }
          5.8333% {
            transform:translate(54.7929px,85px)
          }
          6.25% {
            transform:translate(55.5625px,85px)
          }
          6.6667% {
            transform:translate(56.3671px,85px)
          }
          7.0833% {
            transform:translate(57.2044px,85px)
          }
          7.5% {
            transform:translate(58.072px,85px)
          }
          7.9167% {
            transform:translate(58.9676px,85px)
          }
          8.3333% {
            transform:translate(59.8889px,85px)
          }
          8.75% {
            transform:translate(60.8335px,85px)
          }
          9.1667% {
            transform:translate(61.7991px,85px)
          }
          9.5833% {
            transform:translate(62.7834px,85px)
          }
          10% {
            transform:translate(63.784px,85px)
          }
          10.4167% {
            transform:translate(64.7986px,85px)
          }
          10.8333% {
            transform:translate(65.8249px,85px)
          }
          11.25% {
            transform:translate(66.8605px,85px)
          }
          11.6667% {
            transform:translate(67.9031px,85px)
          }
          12.0833% {
            transform:translate(68.9504px,85px)
          }
          12.5% {
            transform:translate(70px,85px)
          }
          12.9167% {
            transform:translate(71.0496px,85px)
          }
          13.3333% {
            transform:translate(72.0969px,85px)
          }
          13.75% {
            transform:translate(73.1395px,85px)
          }
          14.1667% {
            transform:translate(74.1751px,85px)
          }
          14.5833% {
            transform:translate(75.2014px,85px)
          }
          15% {
            transform:translate(76.216px,85px)
          }
          15.4167% {
            transform:translate(77.2166px,85px)
          }
          15.8333% {
            transform:translate(78.2009px,85px)
          }
          16.25% {
            transform:translate(79.1665px,85px)
          }
          16.6667% {
            transform:translate(80.1111px,85px)
          }
          17.0833% {
            transform:translate(81.0324px,85px)
          }
          17.5% {
            transform:translate(81.928px,85px)
          }
          17.9167% {
            transform:translate(82.7956px,85px)
          }
          18.3333% {
            transform:translate(83.6329px,85px)
          }
          18.75% {
            transform:translate(84.4375px,85px)
          }
          19.1667% {
            transform:translate(85.2071px,85px)
          }
          19.5833% {
            transform:translate(85.9394px,85px)
          }
          20% {
            transform:translate(86.632px,85px)
          }
          20.4167% {
            transform:translate(87.2826px,85px)
          }
          20.8333% {
            transform:translate(87.8889px,85px)
          }
          21.25% {
            transform:translate(88.4485px,85px)
          }
          21.6667% {
            transform:translate(88.9591px,85px)
          }
          22.0833% {
            transform:translate(89.4184px,85px)
          }
          22.5% {
            transform:translate(89.824px,85px)
          }
          22.9167% {
            transform:translate(90.1736px,85px)
          }
          23.3333% {
            transform:translate(90.4649px,85px)
          }
          23.75% {
            transform:translate(90.6955px,85px)
          }
          24.1667% {
            transform:translate(90.8631px,85px)
          }
          24.5833% {
            transform:translate(90.9654px,85px)
          }
          25% {
            transform:translate(91px,85px)
          }
          25.4167% {
            transform:translate(91px,84.9712px)
          }
          25.8333% {
            transform:translate(91px,84.8859px)
          }
          26.25% {
            transform:translate(91px,84.7463px)
          }
          26.6667% {
            transform:translate(91px,84.5541px)
          }
          27.0833% {
            transform:translate(91px,84.3113px)
          }
          27.5% {
            transform:translate(91px,84.02px)
          }
          27.9167% {
            transform:translate(91px,83.682px)
          }
          28.3333% {
            transform:translate(91px,83.2993px)
          }
          28.75% {
            transform:translate(91px,82.8738px)
          }
          29.1667% {
            transform:translate(91px,82.4074px)
          }
          29.5833% {
            transform:translate(91px,81.9022px)
          }
          30% {
            transform:translate(91px,81.36px)
          }
          30.4167% {
            transform:translate(91px,80.7828px)
          }
          30.8333% {
            transform:translate(91px,80.1726px)
          }
          31.25% {
            transform:translate(91px,79.5313px)
          }
          31.6667% {
            transform:translate(91px,78.8607px)
          }
          32.0833% {
            transform:translate(91px,78.163px)
          }
          32.5% {
            transform:translate(91px,77.44px)
          }
          32.9167% {
            transform:translate(91px,76.6937px)
          }
          33.3333% {
            transform:translate(91px,75.9259px)
          }
          33.75% {
            transform:translate(91px,75.1388px)
          }
          34.1667% {
            transform:translate(91px,74.3341px)
          }
          34.5833% {
            transform:translate(91px,73.5138px)
          }
          35% {
            transform:translate(91px,72.68px)
          }
          35.4167% {
            transform:translate(91px,71.8345px)
          }
          35.8333% {
            transform:translate(91px,70.9793px)
          }
          36.25% {
            transform:translate(91px,70.1162px)
          }
          36.6667% {
            transform:translate(91px,69.2474px)
          }
          37.0833% {
            transform:translate(91px,68.3747px)
          }
          37.5% {
            transform:translate(91px,67.5px)
          }
          37.9167% {
            transform:translate(91px,66.6253px)
          }
          38.3333% {
            transform:translate(91px,65.7526px)
          }
          38.75% {
            transform:translate(91px,64.8837px)
          }
          39.1667% {
            transform:translate(91px,64.0207px)
          }
          39.5833% {
            transform:translate(91px,63.1655px)
          }
          40% {
            transform:translate(91px,62.32px)
          }
          40.4167% {
            transform:translate(91px,61.4862px)
          }
          40.8333% {
            transform:translate(91px,60.6659px)
          }
          41.25% {
            transform:translate(91px,59.8612px)
          }
          41.6667% {
            transform:translate(91px,59.0741px)
          }
          42.0833% {
            transform:translate(91px,58.3063px)
          }
          42.5% {
            transform:translate(91px,57.56px)
          }
          42.9167% {
            transform:translate(91px,56.837px)
          }
          43.3333% {
            transform:translate(91px,56.1393px)
          }
          43.75% {
            transform:translate(91px,55.4688px)
          }
          44.1667% {
            transform:translate(91px,54.8274px)
          }
          44.5833% {
            transform:translate(91px,54.2172px)
          }
          45% {
            transform:translate(91px,53.64px)
          }
          45.4167% {
            transform:translate(91px,53.0978px)
          }
          45.8333% {
            transform:translate(91px,52.5926px)
          }
          46.25% {
            transform:translate(91px,52.1262px)
          }
          46.6667% {
            transform:translate(91px,51.7007px)
          }
          47.0833% {
            transform:translate(91px,51.318px)
          }
          47.5% {
            transform:translate(91px,50.98px)
          }
          47.9167% {
            transform:translate(91px,50.6887px)
          }
          48.3333% {
            transform:translate(91px,50.4459px)
          }
          48.75% {
            transform:translate(91px,50.2537px)
          }
          49.1667% {
            transform:translate(91px,50.1141px)
          }
          49.5833% {
            transform:translate(91px,50.0288px)
          }
          50% {
            transform:translate(91px,50px)
          }
          50.4167% {
            transform:translate(90.9654px,50px)
          }
          50.8333% {
            transform:translate(90.8631px,50px)
          }
          51.25% {
            transform:translate(90.6955px,50px)
          }
          51.6667% {
            transform:translate(90.4649px,50px)
          }
          52.0833% {
            transform:translate(90.1736px,50px)
          }
          52.5% {
            transform:translate(89.824px,50px)
          }
          52.9167% {
            transform:translate(89.4184px,50px)
          }
          53.3333% {
            transform:translate(88.9591px,50px)
          }
          53.75% {
            transform:translate(88.4485px,50px)
          }
          54.1667% {
            transform:translate(87.8889px,50px)
          }
          54.5833% {
            transform:translate(87.2826px,50px)
          }
          55% {
            transform:translate(86.632px,50px)
          }
          55.4167% {
            transform:translate(85.9394px,50px)
          }
          55.8333% {
            transform:translate(85.2071px,50px)
          }
          56.25% {
            transform:translate(84.4375px,50px)
          }
          56.6667% {
            transform:translate(83.6329px,50px)
          }
          57.0833% {
            transform:translate(82.7956px,50px)
          }
          57.5% {
            transform:translate(81.928px,50px)
          }
          57.9167% {
            transform:translate(81.0324px,50px)
          }
          58.3333% {
            transform:translate(80.1111px,50px)
          }
          58.75% {
            transform:translate(79.1665px,50px)
          }
          59.1667% {
            transform:translate(78.2009px,50px)
          }
          59.5833% {
            transform:translate(77.2166px,50px)
          }
          60% {
            transform:translate(76.216px,50px)
          }
          60.4167% {
            transform:translate(75.2014px,50px)
          }
          60.8333% {
            transform:translate(74.1751px,50px)
          }
          61.25% {
            transform:translate(73.1395px,50px)
          }
          61.6667% {
            transform:translate(72.0969px,50px)
          }
          62.0833% {
            transform:translate(71.0496px,50px)
          }
          62.5% {
            transform:translate(70px,50px)
          }
          62.9167% {
            transform:translate(68.9504px,50px)
          }
          63.3333% {
            transform:translate(67.9031px,50px)
          }
          63.75% {
            transform:translate(66.8605px,50px)
          }
          64.1667% {
            transform:translate(65.8249px,50px)
          }
          64.5833% {
            transform:translate(64.7986px,50px)
          }
          65% {
            transform:translate(63.784px,50px)
          }
          65.4167% {
            transform:translate(62.7834px,50px)
          }
          65.8333% {
            transform:translate(61.7991px,50px)
          }
          66.25% {
            transform:translate(60.8335px,50px)
          }
          66.6667% {
            transform:translate(59.8889px,50px)
          }
          67.0833% {
            transform:translate(58.9676px,50px)
          }
          67.5% {
            transform:translate(58.072px,50px)
          }
          67.9167% {
            transform:translate(57.2044px,50px)
          }
          68.3333% {
            transform:translate(56.3671px,50px)
          }
          68.75% {
            transform:translate(55.5625px,50px)
          }
          69.1667% {
            transform:translate(54.7929px,50px)
          }
          69.5833% {
            transform:translate(54.0606px,50px)
          }
          70% {
            transform:translate(53.368px,50px)
          }
          70.4167% {
            transform:translate(52.7174px,50px)
          }
          70.8333% {
            transform:translate(52.1111px,50px)
          }
          71.25% {
            transform:translate(51.5515px,50px)
          }
          71.6667% {
            transform:translate(51.0409px,50px)
          }
          72.0833% {
            transform:translate(50.5816px,50px)
          }
          72.5% {
            transform:translate(50.176px,50px)
          }
          72.9167% {
            transform:translate(49.8264px,50px)
          }
          73.3333% {
            transform:translate(49.5351px,50px)
          }
          73.75% {
            transform:translate(49.3045px,50px)
          }
          74.1667% {
            transform:translate(49.1369px,50px)
          }
          74.5833% {
            transform:translate(49.0346px,50px)
          }
          75% {
            transform:translate(49px,50px)
          }
          75.4167% {
            transform:translate(49px,50.0288px)
          }
          75.8333% {
            transform:translate(49px,50.1141px)
          }
          76.25% {
            transform:translate(49px,50.2538px)
          }
          76.6667% {
            transform:translate(49px,50.4459px)
          }
          77.0833% {
            transform:translate(49px,50.6887px)
          }
          77.5% {
            transform:translate(49px,50.98px)
          }
          77.9167% {
            transform:translate(49px,51.318px)
          }
          78.3333% {
            transform:translate(49px,51.7007px)
          }
          78.75% {
            transform:translate(49px,52.1263px)
          }
          79.1667% {
            transform:translate(49px,52.5926px)
          }
          79.5833% {
            transform:translate(49px,53.0978px)
          }
          80% {
            transform:translate(49px,53.64px)
          }
          80.4167% {
            transform:translate(49px,54.2172px)
          }
          80.8333% {
            transform:translate(49px,54.8274px)
          }
          81.25% {
            transform:translate(49px,55.4688px)
          }
          81.6667% {
            transform:translate(49px,56.1393px)
          }
          82.0833% {
            transform:translate(49px,56.837px)
          }
          82.5% {
            transform:translate(49px,57.56px)
          }
          82.9167% {
            transform:translate(49px,58.3063px)
          }
          83.3333% {
            transform:translate(49px,59.0741px)
          }
          83.75% {
            transform:translate(49px,59.8613px)
          }
          84.1667% {
            transform:translate(49px,60.6659px)
          }
          84.5833% {
            transform:translate(49px,61.4862px)
          }
          85% {
            transform:translate(49px,62.32px)
          }
          85.4167% {
            transform:translate(49px,63.1655px)
          }
          85.8333% {
            transform:translate(49px,64.0207px)
          }
          86.25% {
            transform:translate(49px,64.8838px)
          }
          86.6667% {
            transform:translate(49px,65.7526px)
          }
          87.0833% {
            transform:translate(49px,66.6253px)
          }
          87.5% {
            transform:translate(49px,67.5px)
          }
          87.9167% {
            transform:translate(49px,68.3747px)
          }
          88.3333% {
            transform:translate(49px,69.2474px)
          }
          88.75% {
            transform:translate(49px,70.1163px)
          }
          89.1667% {
            transform:translate(49px,70.9793px)
          }
          89.5833% {
            transform:translate(49px,71.8345px)
          }
          90% {
            transform:translate(49px,72.68px)
          }
          90.4167% {
            transform:translate(49px,73.5138px)
          }
          90.8333% {
            transform:translate(49px,74.3341px)
          }
          91.25% {
            transform:translate(49px,75.1388px)
          }
          91.6667% {
            transform:translate(49px,75.9259px)
          }
          92.0833% {
            transform:translate(49px,76.6937px)
          }
          92.5% {
            transform:translate(49px,77.44px)
          }
          92.9167% {
            transform:translate(49px,78.163px)
          }
          93.3333% {
            transform:translate(49px,78.8607px)
          }
          93.75% {
            transform:translate(49px,79.5313px)
          }
          94.1667% {
            transform:translate(49px,80.1726px)
          }
          94.5833% {
            transform:translate(49px,80.7828px)
          }
          95% {
            transform:translate(49px,81.36px)
          }
          95.4167% {
            transform:translate(49px,81.9022px)
          }
          95.8333% {
            transform:translate(49px,82.4074px)
          }
          96.25% {
            transform:translate(49px,82.8738px)
          }
          96.6667% {
            transform:translate(49px,83.2993px)
          }
          97.0833% {
            transform:translate(49px,83.682px)
          }
          97.5% {
            transform:translate(49px,84.02px)
          }
          97.9167% {
            transform:translate(49px,84.3113px)
          }
          98.3333% {
            transform:translate(49px,84.5541px)
          }
          98.75% {
            transform:translate(49px,84.7463px)
          }
          99.1667% {
            transform:translate(49px,84.8859px)
          }
          99.5833% {
            transform:translate(49px,84.9712px)
          }
          100% {
            transform:translate(49px,85px)
          }
        }
        @keyframes m-net {
          0% {
            opacity:0;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          0.4167% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          0.8333% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          1.25% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          1.6667% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          2.0833% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          2.5% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          2.9167% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          3.3333% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          3.75% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          4.1667% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          4.5833% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          5% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          5.4167% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          5.8333% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          6.25% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          6.6667% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          7.0833% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          7.5% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          7.9167% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          8.3333% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          8.75% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          9.1667% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          9.5833% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          10% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          10.4167% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          10.8333% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          11.25% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          11.6667% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          12.0833% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          12.5% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          12.9167% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          13.3333% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          13.75% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          14.1667% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          14.5833% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          15% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          15.4167% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          15.8333% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          16.25% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          16.6667% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          17.0833% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          17.5% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          17.9167% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          18.3333% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          18.75% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          19.1667% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          19.5833% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          20% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          20.4167% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          20.8333% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          21.25% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          21.6667% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          22.0833% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          22.5% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          22.9167% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          23.3333% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          23.75% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          24.1667% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          24.5833% {
            opacity:1;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          25% {
            opacity:0;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          25.4167% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          25.8333% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          26.25% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          26.6667% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          27.0833% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          27.5% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          27.9167% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          28.3333% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          28.75% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          29.1667% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          29.5833% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          30% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          30.4167% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          30.8333% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          31.25% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          31.6667% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          32.0833% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          32.5% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          32.9167% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          33.3333% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          33.75% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          34.1667% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          34.5833% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          35% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          35.4167% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          35.8333% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          36.25% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          36.6667% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          37.0833% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          37.5% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          37.9167% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          38.3333% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          38.75% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          39.1667% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          39.5833% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          40% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          40.4167% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          40.8333% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          41.25% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          41.6667% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          42.0833% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          42.5% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          42.9167% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          43.3333% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          43.75% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          44.1667% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          44.5833% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          45% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          45.4167% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          45.8333% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          46.25% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          46.6667% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          47.0833% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          47.5% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          47.9167% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          48.3333% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          48.75% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          49.1667% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          49.5833% {
            opacity:1;
            d:path("M0 6l0 -13m3 3l-3 -3 -3 3")
          }
          50% {
            opacity:0;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          50.4167% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          50.8333% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          51.25% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          51.6667% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          52.0833% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          52.5% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          52.9167% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          53.3333% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          53.75% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          54.1667% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          54.5833% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          55% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          55.4167% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          55.8333% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          56.25% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          56.6667% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          57.0833% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          57.5% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          57.9167% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          58.3333% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          58.75% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          59.1667% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          59.5833% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          60% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          60.4167% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          60.8333% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          61.25% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          61.6667% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          62.0833% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          62.5% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          62.9167% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          63.3333% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          63.75% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          64.1667% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          64.5833% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          65% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          65.4167% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          65.8333% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          66.25% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          66.6667% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          67.0833% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          67.5% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          67.9167% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          68.3333% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          68.75% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          69.1667% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          69.5833% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          70% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          70.4167% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          70.8333% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          71.25% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          71.6667% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          72.0833% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          72.5% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          72.9167% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          73.3333% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          73.75% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          74.1667% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          74.5833% {
            opacity:1;
            d:path("M6 0l-13 0m3 -3l-3 3 3 3")
          }
          75% {
            opacity:0;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
          75.4167% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          75.8333% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          76.25% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          76.6667% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          77.0833% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          77.5% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          77.9167% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          78.3333% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          78.75% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          79.1667% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          79.5833% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          80% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          80.4167% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          80.8333% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          81.25% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          81.6667% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          82.0833% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          82.5% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          82.9167% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          83.3333% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          83.75% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          84.1667% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          84.5833% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          85% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          85.4167% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          85.8333% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          86.25% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          86.6667% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          87.0833% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          87.5% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          87.9167% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          88.3333% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          88.75% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          89.1667% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          89.5833% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          90% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          90.4167% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          90.8333% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          91.25% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          91.6667% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          92.0833% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          92.5% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          92.9167% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          93.3333% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          93.75% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          94.1667% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          94.5833% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          95% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          95.4167% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          95.8333% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          96.25% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          96.6667% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          97.0833% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          97.5% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          97.9167% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          98.3333% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          98.75% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          99.1667% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          99.5833% {
            opacity:1;
            d:path("M0 -6l0 13m-3 -3l3 3 3 -3")
          }
          100% {
            opacity:0;
            d:path("M-6 0l13 0m-3 3l3 -3 -3 -3")
          }
        }
        .m-roller0 {
          animation:m-roller0 12s linear infinite
        }
        @keyframes m-roller0 {
          0% {
            transform:translateY(0px)
          }
          0.4167% {
            transform:translateY(-0.0346px)
          }
          0.8333% {
            transform:translateY(-0.1369px)
          }
          1.25% {
            transform:translateY(-0.3045px)
          }
          1.6667% {
            transform:translateY(-0.5351px)
          }
          2.0833% {
            transform:translateY(-0.8264px)
          }
          2.5% {
            transform:translateY(-1.176px)
          }
          2.9167% {
            transform:translateY(-1.5816px)
          }
          3.3333% {
            transform:translateY(-2.0409px)
          }
          3.75% {
            transform:translateY(-2.5515px)
          }
          4.1667% {
            transform:translateY(-3.1111px)
          }
          4.5833% {
            transform:translateY(-3.7174px)
          }
          5% {
            transform:translateY(-4.368px)
          }
          5.4167% {
            transform:translateY(-5.0606px)
          }
          5.8333% {
            transform:translateY(-5.7929px)
          }
          6.25% {
            transform:translateY(-6.5625px)
          }
          6.6667% {
            transform:translateY(-7.3671px)
          }
          7.0833% {
            transform:translateY(-8.2044px)
          }
          7.5% {
            transform:translateY(-9.072px)
          }
          7.9167% {
            transform:translateY(-9.9676px)
          }
          8.3333% {
            transform:translateY(-10.8889px)
          }
          8.75% {
            transform:translateY(-11.8335px)
          }
          9.1667% {
            transform:translateY(-12.7991px)
          }
          9.5833% {
            transform:translateY(-13.7834px)
          }
          10% {
            transform:translateY(-14.784px)
          }
          10.4167% {
            transform:translateY(-15.7986px)
          }
          10.8333% {
            transform:translateY(-16.8249px)
          }
          11.25% {
            transform:translateY(-17.8605px)
          }
          11.6667% {
            transform:translateY(-18.9031px)
          }
          12.0833% {
            transform:translateY(-19.9504px)
          }
          12.5% {
            transform:translateY(-21px)
          }
          12.9167% {
            transform:translateY(-22.0496px)
          }
          13.3333% {
            transform:translateY(-23.0969px)
          }
          13.75% {
            transform:translateY(-24.1395px)
          }
          14.1667% {
            transform:translateY(-25.1751px)
          }
          14.5833% {
            transform:translateY(-26.2014px)
          }
          15% {
            transform:translateY(-27.216px)
          }
          15.4167% {
            transform:translateY(-28.2166px)
          }
          15.8333% {
            transform:translateY(-29.2009px)
          }
          16.25% {
            transform:translateY(-30.1665px)
          }
          16.6667% {
            transform:translateY(-31.1111px)
          }
          17.0833% {
            transform:translateY(-32.0324px)
          }
          17.5% {
            transform:translateY(-32.928px)
          }
          17.9167% {
            transform:translateY(-33.7956px)
          }
          18.3333% {
            transform:translateY(-34.6329px)
          }
          18.75% {
            transform:translateY(-35.4375px)
          }
          19.1667% {
            transform:translateY(-36.2071px)
          }
          19.5833% {
            transform:translateY(-36.9394px)
          }
          20% {
            transform:translateY(-37.632px)
          }
          20.4167% {
            transform:translateY(-38.2826px)
          }
          20.8333% {
            transform:translateY(-38.8889px)
          }
          21.25% {
            transform:translateY(-39.4485px)
          }
          21.6667% {
            transform:translateY(-39.9591px)
          }
          22.0833% {
            transform:translateY(-40.4184px)
          }
          22.5% {
            transform:translateY(-40.824px)
          }
          22.9167% {
            transform:translateY(-41.1736px)
          }
          23.3333% {
            transform:translateY(-41.4649px)
          }
          23.75% {
            transform:translateY(-41.6955px)
          }
          24.1667% {
            transform:translateY(-41.8631px)
          }
          24.5833% {
            transform:translateY(-41.9654px)
          }
          25% {
            transform:translateY(-42px)
          }
          25.4167% {
            transform:translateY(-42.0288px)
          }
          25.8333% {
            transform:translateY(-42.1141px)
          }
          26.25% {
            transform:translateY(-42.2537px)
          }
          26.6667% {
            transform:translateY(-42.4459px)
          }
          27.0833% {
            transform:translateY(-42.6887px)
          }
          27.5% {
            transform:translateY(-42.98px)
          }
          27.9167% {
            transform:translateY(-43.318px)
          }
          28.3333% {
            transform:translateY(-43.7007px)
          }
          28.75% {
            transform:translateY(-44.1262px)
          }
          29.1667% {
            transform:translateY(-44.5926px)
          }
          29.5833% {
            transform:translateY(-45.0978px)
          }
          30% {
            transform:translateY(-45.64px)
          }
          30.4167% {
            transform:translateY(-46.2172px)
          }
          30.8333% {
            transform:translateY(-46.8274px)
          }
          31.25% {
            transform:translateY(-47.4688px)
          }
          31.6667% {
            transform:translateY(-48.1393px)
          }
          32.0833% {
            transform:translateY(-48.837px)
          }
          32.5% {
            transform:translateY(-49.56px)
          }
          32.9167% {
            transform:translateY(-50.3063px)
          }
          33.3333% {
            transform:translateY(-51.0741px)
          }
          33.75% {
            transform:translateY(-51.8612px)
          }
          34.1667% {
            transform:translateY(-52.6659px)
          }
          34.5833% {
            transform:translateY(-53.4862px)
          }
          35% {
            transform:translateY(-54.32px)
          }
          35.4167% {
            transform:translateY(-55.1655px)
          }
          35.8333% {
            transform:translateY(-56.0207px)
          }
          36.25% {
            transform:translateY(-56.8838px)
          }
          36.6667% {
            transform:translateY(-57.7526px)
          }
          37.0833% {
            transform:translateY(-58.6253px)
          }
          37.5% {
            transform:translateY(-59.5px)
          }
          37.9167% {
            transform:translateY(-60.3747px)
          }
          38.3333% {
            transform:translateY(-61.2474px)
          }
          38.75% {
            transform:translateY(-62.1163px)
          }
          39.1667% {
            transform:translateY(-62.9793px)
          }
          39.5833% {
            transform:translateY(-63.8345px)
          }
          40% {
            transform:translateY(-64.68px)
          }
          40.4167% {
            transform:translateY(-65.5138px)
          }
          40.8333% {
            transform:translateY(-66.3341px)
          }
          41.25% {
            transform:translateY(-67.1388px)
          }
          41.6667% {
            transform:translateY(-67.9259px)
          }
          42.0833% {
            transform:translateY(-68.6937px)
          }
          42.5% {
            transform:translateY(-69.44px)
          }
          42.9167% {
            transform:translateY(-70.163px)
          }
          43.3333% {
            transform:translateY(-70.8607px)
          }
          43.75% {
            transform:translateY(-71.5313px)
          }
          44.1667% {
            transform:translateY(-72.1726px)
          }
          44.5833% {
            transform:translateY(-72.7828px)
          }
          45% {
            transform:translateY(-73.36px)
          }
          45.4167% {
            transform:translateY(-73.9022px)
          }
          45.8333% {
            transform:translateY(-74.4074px)
          }
          46.25% {
            transform:translateY(-74.8738px)
          }
          46.6667% {
            transform:translateY(-75.2993px)
          }
          47.0833% {
            transform:translateY(-75.682px)
          }
          47.5% {
            transform:translateY(-76.02px)
          }
          47.9167% {
            transform:translateY(-76.3113px)
          }
          48.3333% {
            transform:translateY(-76.5541px)
          }
          48.75% {
            transform:translateY(-76.7463px)
          }
          49.1667% {
            transform:translateY(-76.8859px)
          }
          49.5833% {
            transform:translateY(-76.9712px)
          }
          50% {
            transform:translateY(-77px)
          }
          50.4167% {
            transform:translateY(-76.9654px)
          }
          50.8333% {
            transform:translateY(-76.8631px)
          }
          51.25% {
            transform:translateY(-76.6955px)
          }
          51.6667% {
            transform:translateY(-76.4649px)
          }
          52.0833% {
            transform:translateY(-76.1736px)
          }
          52.5% {
            transform:translateY(-75.824px)
          }
          52.9167% {
            transform:translateY(-75.4184px)
          }
          53.3333% {
            transform:translateY(-74.9591px)
          }
          53.75% {
            transform:translateY(-74.4485px)
          }
          54.1667% {
            transform:translateY(-73.8889px)
          }
          54.5833% {
            transform:translateY(-73.2826px)
          }
          55% {
            transform:translateY(-72.632px)
          }
          55.4167% {
            transform:translateY(-71.9394px)
          }
          55.8333% {
            transform:translateY(-71.2071px)
          }
          56.25% {
            transform:translateY(-70.4375px)
          }
          56.6667% {
            transform:translateY(-69.6329px)
          }
          57.0833% {
            transform:translateY(-68.7956px)
          }
          57.5% {
            transform:translateY(-67.928px)
          }
          57.9167% {
            transform:translateY(-67.0324px)
          }
          58.3333% {
            transform:translateY(-66.1111px)
          }
          58.75% {
            transform:translateY(-65.1665px)
          }
          59.1667% {
            transform:translateY(-64.2009px)
          }
          59.5833% {
            transform:translateY(-63.2166px)
          }
          60% {
            transform:translateY(-62.216px)
          }
          60.4167% {
            transform:translateY(-61.2014px)
          }
          60.8333% {
            transform:translateY(-60.1751px)
          }
          61.25% {
            transform:translateY(-59.1395px)
          }
          61.6667% {
            transform:translateY(-58.0969px)
          }
          62.0833% {
            transform:translateY(-57.0496px)
          }
          62.5% {
            transform:translateY(-56px)
          }
          62.9167% {
            transform:translateY(-54.9504px)
          }
          63.3333% {
            transform:translateY(-53.9031px)
          }
          63.75% {
            transform:translateY(-52.8605px)
          }
          64.1667% {
            transform:translateY(-51.8249px)
          }
          64.5833% {
            transform:translateY(-50.7986px)
          }
          65% {
            transform:translateY(-49.784px)
          }
          65.4167% {
            transform:translateY(-48.7834px)
          }
          65.8333% {
            transform:translateY(-47.7991px)
          }
          66.25% {
            transform:translateY(-46.8335px)
          }
          66.6667% {
            transform:translateY(-45.8889px)
          }
          67.0833% {
            transform:translateY(-44.9676px)
          }
          67.5% {
            transform:translateY(-44.072px)
          }
          67.9167% {
            transform:translateY(-43.2044px)
          }
          68.3333% {
            transform:translateY(-42.3671px)
          }
          68.75% {
            transform:translateY(-41.5625px)
          }
          69.1667% {
            transform:translateY(-40.7929px)
          }
          69.5833% {
            transform:translateY(-40.0606px)
          }
          70% {
            transform:translateY(-39.368px)
          }
          70.4167% {
            transform:translateY(-38.7174px)
          }
          70.8333% {
            transform:translateY(-38.1111px)
          }
          71.25% {
            transform:translateY(-37.5515px)
          }
          71.6667% {
            transform:translateY(-37.0409px)
          }
          72.0833% {
            transform:translateY(-36.5816px)
          }
          72.5% {
            transform:translateY(-36.176px)
          }
          72.9167% {
            transform:translateY(-35.8264px)
          }
          73.3333% {
            transform:translateY(-35.5351px)
          }
          73.75% {
            transform:translateY(-35.3045px)
          }
          74.1667% {
            transform:translateY(-35.1369px)
          }
          74.5833% {
            transform:translateY(-35.0346px)
          }
          75% {
            transform:translateY(-35px)
          }
          75.4167% {
            transform:translateY(-34.9712px)
          }
          75.8333% {
            transform:translateY(-34.8859px)
          }
          76.25% {
            transform:translateY(-34.7462px)
          }
          76.6667% {
            transform:translateY(-34.5541px)
          }
          77.0833% {
            transform:translateY(-34.3113px)
          }
          77.5% {
            transform:translateY(-34.02px)
          }
          77.9167% {
            transform:translateY(-33.682px)
          }
          78.3333% {
            transform:translateY(-33.2993px)
          }
          78.75% {
            transform:translateY(-32.8737px)
          }
          79.1667% {
            transform:translateY(-32.4074px)
          }
          79.5833% {
            transform:translateY(-31.9022px)
          }
          80% {
            transform:translateY(-31.36px)
          }
          80.4167% {
            transform:translateY(-30.7828px)
          }
          80.8333% {
            transform:translateY(-30.1726px)
          }
          81.25% {
            transform:translateY(-29.5313px)
          }
          81.6667% {
            transform:translateY(-28.8607px)
          }
          82.0833% {
            transform:translateY(-28.163px)
          }
          82.5% {
            transform:translateY(-27.44px)
          }
          82.9167% {
            transform:translateY(-26.6937px)
          }
          83.3333% {
            transform:translateY(-25.9259px)
          }
          83.75% {
            transform:translateY(-25.1387px)
          }
          84.1667% {
            transform:translateY(-24.3341px)
          }
          84.5833% {
            transform:translateY(-23.5138px)
          }
          85% {
            transform:translateY(-22.68px)
          }
          85.4167% {
            transform:translateY(-21.8345px)
          }
          85.8333% {
            transform:translateY(-20.9793px)
          }
          86.25% {
            transform:translateY(-20.1162px)
          }
          86.6667% {
            transform:translateY(-19.2474px)
          }
          87.0833% {
            transform:translateY(-18.3747px)
          }
          87.5% {
            transform:translateY(-17.5px)
          }
          87.9167% {
            transform:translateY(-16.6253px)
          }
          88.3333% {
            transform:translateY(-15.7526px)
          }
          88.75% {
            transform:translateY(-14.8837px)
          }
          89.1667% {
            transform:translateY(-14.0207px)
          }
          89.5833% {
            transform:translateY(-13.1655px)
          }
          90% {
            transform:translateY(-12.32px)
          }
          90.4167% {
            transform:translateY(-11.4862px)
          }
          90.8333% {
            transform:translateY(-10.6659px)
          }
          91.25% {
            transform:translateY(-9.8612px)
          }
          91.6667% {
            transform:translateY(-9.0741px)
          }
          92.0833% {
            transform:translateY(-8.3063px)
          }
          92.5% {
            transform:translateY(-7.56px)
          }
          92.9167% {
            transform:translateY(-6.837px)
          }
          93.3333% {
            transform:translateY(-6.1393px)
          }
          93.75% {
            transform:translateY(-5.4688px)
          }
          94.1667% {
            transform:translateY(-4.8274px)
          }
          94.5833% {
            transform:translateY(-4.2172px)
          }
          95% {
            transform:translateY(-3.64px)
          }
          95.4167% {
            transform:translateY(-3.0978px)
          }
          95.8333% {
            transform:translateY(-2.5926px)
          }
          96.25% {
            transform:translateY(-2.1262px)
          }
          96.6667% {
            transform:translateY(-1.7007px)
          }
          97.0833% {
            transform:translateY(-1.318px)
          }
          97.5% {
            transform:translateY(-0.98px)
          }
          97.9167% {
            transform:translateY(-0.6887px)
          }
          98.3333% {
            transform:translateY(-0.4459px)
          }
          98.75% {
            transform:translateY(-0.2537px)
          }
          99.1667% {
            transform:translateY(-0.1141px)
          }
          99.5833% {
            transform:translateY(-0.0288px)
          }
          100% {
            transform:translateY(0px)
          }
        }
        .m-speed0 {
          animation:m-speed0 12s linear infinite
        }
        @keyframes m-speed0 {
          0% {
            opacity:0;
            d:path("M-30 -17v0m-2 3 2 -3 2 3")
          }
          0.4167% {
            opacity:1;
            d:path("M-30 -17v-0.4818m-2 3 2 -3 2 3")
          }
          0.8333% {
            opacity:1;
            d:path("M-30 -17v-0.9473m-2 3 2 -3 2 3")
          }
          1.25% {
            opacity:1;
            d:path("M-30 -17v-1.3965m-2 3 2 -3 2 3")
          }
          1.6667% {
            opacity:1;
            d:path("M-30 -17v-1.8293m-2 3 2 -3 2 3")
          }
          2.0833% {
            opacity:1;
            d:path("M-30 -17v-2.2458m-2 3 2 -3 2 3")
          }
          2.5% {
            opacity:1;
            d:path("M-30 -17v-2.646m-2 3 2 -3 2 3")
          }
          2.9167% {
            opacity:1;
            d:path("M-30 -17v-3.0298m-2 3 2 -3 2 3")
          }
          3.3333% {
            opacity:1;
            d:path("M-30 -17v-3.3973m-2 3 2 -3 2 3")
          }
          3.75% {
            opacity:1;
            d:path("M-30 -17v-3.7485m-2 3 2 -3 2 3")
          }
          4.1667% {
            opacity:1;
            d:path("M-30 -17v-4.0833m-2 3 2 -3 2 3")
          }
          4.5833% {
            opacity:1;
            d:path("M-30 -17v-4.4018m-2 3 2 -3 2 3")
          }
          5% {
            opacity:1;
            d:path("M-30 -17v-4.704m-2 3 2 -3 2 3")
          }
          5.4167% {
            opacity:1;
            d:path("M-30 -17v-4.9898m-2 3 2 -3 2 3")
          }
          5.8333% {
            opacity:1;
            d:path("M-30 -17v-5.2593m-2 3 2 -3 2 3")
          }
          6.25% {
            opacity:1;
            d:path("M-30 -17v-5.5125m-2 3 2 -3 2 3")
          }
          6.6667% {
            opacity:1;
            d:path("M-30 -17v-5.7493m-2 3 2 -3 2 3")
          }
          7.0833% {
            opacity:1;
            d:path("M-30 -17v-5.9698m-2 3 2 -3 2 3")
          }
          7.5% {
            opacity:1;
            d:path("M-30 -17v-6.174m-2 3 2 -3 2 3")
          }
          7.9167% {
            opacity:1;
            d:path("M-30 -17v-6.3618m-2 3 2 -3 2 3")
          }
          8.3333% {
            opacity:1;
            d:path("M-30 -17v-6.5333m-2 3 2 -3 2 3")
          }
          8.75% {
            opacity:1;
            d:path("M-30 -17v-6.6885m-2 3 2 -3 2 3")
          }
          9.1667% {
            opacity:1;
            d:path("M-30 -17v-6.8273m-2 3 2 -3 2 3")
          }
          9.5833% {
            opacity:1;
            d:path("M-30 -17v-6.9498m-2 3 2 -3 2 3")
          }
          10% {
            opacity:1;
            d:path("M-30 -17v-7.056m-2 3 2 -3 2 3")
          }
          10.4167% {
            opacity:1;
            d:path("M-30 -17v-7.1458m-2 3 2 -3 2 3")
          }
          10.8333% {
            opacity:1;
            d:path("M-30 -17v-7.2193m-2 3 2 -3 2 3")
          }
          11.25% {
            opacity:1;
            d:path("M-30 -17v-7.2765m-2 3 2 -3 2 3")
          }
          11.6667% {
            opacity:1;
            d:path("M-30 -17v-7.3173m-2 3 2 -3 2 3")
          }
          12.0833% {
            opacity:1;
            d:path("M-30 -17v-7.3418m-2 3 2 -3 2 3")
          }
          12.5% {
            opacity:1;
            d:path("M-30 -17v-7.35m-2 3 2 -3 2 3")
          }
          12.9167% {
            opacity:1;
            d:path("M-30 -17v-7.3418m-2 3 2 -3 2 3")
          }
          13.3333% {
            opacity:1;
            d:path("M-30 -17v-7.3173m-2 3 2 -3 2 3")
          }
          13.75% {
            opacity:1;
            d:path("M-30 -17v-7.2765m-2 3 2 -3 2 3")
          }
          14.1667% {
            opacity:1;
            d:path("M-30 -17v-7.2193m-2 3 2 -3 2 3")
          }
          14.5833% {
            opacity:1;
            d:path("M-30 -17v-7.1458m-2 3 2 -3 2 3")
          }
          15% {
            opacity:1;
            d:path("M-30 -17v-7.056m-2 3 2 -3 2 3")
          }
          15.4167% {
            opacity:1;
            d:path("M-30 -17v-6.9498m-2 3 2 -3 2 3")
          }
          15.8333% {
            opacity:1;
            d:path("M-30 -17v-6.8273m-2 3 2 -3 2 3")
          }
          16.25% {
            opacity:1;
            d:path("M-30 -17v-6.6885m-2 3 2 -3 2 3")
          }
          16.6667% {
            opacity:1;
            d:path("M-30 -17v-6.5333m-2 3 2 -3 2 3")
          }
          17.0833% {
            opacity:1;
            d:path("M-30 -17v-6.3618m-2 3 2 -3 2 3")
          }
          17.5% {
            opacity:1;
            d:path("M-30 -17v-6.174m-2 3 2 -3 2 3")
          }
          17.9167% {
            opacity:1;
            d:path("M-30 -17v-5.9698m-2 3 2 -3 2 3")
          }
          18.3333% {
            opacity:1;
            d:path("M-30 -17v-5.7493m-2 3 2 -3 2 3")
          }
          18.75% {
            opacity:1;
            d:path("M-30 -17v-5.5125m-2 3 2 -3 2 3")
          }
          19.1667% {
            opacity:1;
            d:path("M-30 -17v-5.2593m-2 3 2 -3 2 3")
          }
          19.5833% {
            opacity:1;
            d:path("M-30 -17v-4.9898m-2 3 2 -3 2 3")
          }
          20% {
            opacity:1;
            d:path("M-30 -17v-4.704m-2 3 2 -3 2 3")
          }
          20.4167% {
            opacity:1;
            d:path("M-30 -17v-4.4018m-2 3 2 -3 2 3")
          }
          20.8333% {
            opacity:1;
            d:path("M-30 -17v-4.0833m-2 3 2 -3 2 3")
          }
          21.25% {
            opacity:1;
            d:path("M-30 -17v-3.7485m-2 3 2 -3 2 3")
          }
          21.6667% {
            opacity:1;
            d:path("M-30 -17v-3.3973m-2 3 2 -3 2 3")
          }
          22.0833% {
            opacity:1;
            d:path("M-30 -17v-3.0298m-2 3 2 -3 2 3")
          }
          22.5% {
            opacity:1;
            d:path("M-30 -17v-2.646m-2 3 2 -3 2 3")
          }
          22.9167% {
            opacity:1;
            d:path("M-30 -17v-2.2458m-2 3 2 -3 2 3")
          }
          23.3333% {
            opacity:1;
            d:path("M-30 -17v-1.8293m-2 3 2 -3 2 3")
          }
          23.75% {
            opacity:1;
            d:path("M-30 -17v-1.3965m-2 3 2 -3 2 3")
          }
          24.1667% {
            opacity:1;
            d:path("M-30 -17v-0.9473m-2 3 2 -3 2 3")
          }
          24.5833% {
            opacity:1;
            d:path("M-30 -17v-0.4818m-2 3 2 -3 2 3")
          }
          25% {
            opacity:0;
            d:path("M-30 -17v0m-2 3 2 -3 2 3")
          }
          25.4167% {
            opacity:1;
            d:path("M-30 -17v-0.4015m-2 3 2 -3 2 3")
          }
          25.8333% {
            opacity:1;
            d:path("M-30 -17v-0.7894m-2 3 2 -3 2 3")
          }
          26.25% {
            opacity:1;
            d:path("M-30 -17v-1.1638m-2 3 2 -3 2 3")
          }
          26.6667% {
            opacity:1;
            d:path("M-30 -17v-1.5244m-2 3 2 -3 2 3")
          }
          27.0833% {
            opacity:1;
            d:path("M-30 -17v-1.8715m-2 3 2 -3 2 3")
          }
          27.5% {
            opacity:1;
            d:path("M-30 -17v-2.205m-2 3 2 -3 2 3")
          }
          27.9167% {
            opacity:1;
            d:path("M-30 -17v-2.5249m-2 3 2 -3 2 3")
          }
          28.3333% {
            opacity:1;
            d:path("M-30 -17v-2.8311m-2 3 2 -3 2 3")
          }
          28.75% {
            opacity:1;
            d:path("M-30 -17v-3.1238m-2 3 2 -3 2 3")
          }
          29.1667% {
            opacity:1;
            d:path("M-30 -17v-3.4028m-2 3 2 -3 2 3")
          }
          29.5833% {
            opacity:1;
            d:path("M-30 -17v-3.6682m-2 3 2 -3 2 3")
          }
          30% {
            opacity:1;
            d:path("M-30 -17v-3.92m-2 3 2 -3 2 3")
          }
          30.4167% {
            opacity:1;
            d:path("M-30 -17v-4.1582m-2 3 2 -3 2 3")
          }
          30.8333% {
            opacity:1;
            d:path("M-30 -17v-4.3828m-2 3 2 -3 2 3")
          }
          31.25% {
            opacity:1;
            d:path("M-30 -17v-4.5938m-2 3 2 -3 2 3")
          }
          31.6667% {
            opacity:1;
            d:path("M-30 -17v-4.7911m-2 3 2 -3 2 3")
          }
          32.0833% {
            opacity:1;
            d:path("M-30 -17v-4.9749m-2 3 2 -3 2 3")
          }
          32.5% {
            opacity:1;
            d:path("M-30 -17v-5.145m-2 3 2 -3 2 3")
          }
          32.9167% {
            opacity:1;
            d:path("M-30 -17v-5.3015m-2 3 2 -3 2 3")
          }
          33.3333% {
            opacity:1;
            d:path("M-30 -17v-5.4444m-2 3 2 -3 2 3")
          }
          33.75% {
            opacity:1;
            d:path("M-30 -17v-5.5737m-2 3 2 -3 2 3")
          }
          34.1667% {
            opacity:1;
            d:path("M-30 -17v-5.6894m-2 3 2 -3 2 3")
          }
          34.5833% {
            opacity:1;
            d:path("M-30 -17v-5.7915m-2 3 2 -3 2 3")
          }
          35% {
            opacity:1;
            d:path("M-30 -17v-5.88m-2 3 2 -3 2 3")
          }
          35.4167% {
            opacity:1;
            d:path("M-30 -17v-5.9549m-2 3 2 -3 2 3")
          }
          35.8333% {
            opacity:1;
            d:path("M-30 -17v-6.0161m-2 3 2 -3 2 3")
          }
          36.25% {
            opacity:1;
            d:path("M-30 -17v-6.0638m-2 3 2 -3 2 3")
          }
          36.6667% {
            opacity:1;
            d:path("M-30 -17v-6.0978m-2 3 2 -3 2 3")
          }
          37.0833% {
            opacity:1;
            d:path("M-30 -17v-6.1182m-2 3 2 -3 2 3")
          }
          37.5% {
            opacity:1;
            d:path("M-30 -17v-6.125m-2 3 2 -3 2 3")
          }
          37.9167% {
            opacity:1;
            d:path("M-30 -17v-6.1182m-2 3 2 -3 2 3")
          }
          38.3333% {
            opacity:1;
            d:path("M-30 -17v-6.0978m-2 3 2 -3 2 3")
          }
          38.75% {
            opacity:1;
            d:path("M-30 -17v-6.0637m-2 3 2 -3 2 3")
          }
          39.1667% {
            opacity:1;
            d:path("M-30 -17v-6.0161m-2 3 2 -3 2 3")
          }
          39.5833% {
            opacity:1;
            d:path("M-30 -17v-5.9549m-2 3 2 -3 2 3")
          }
          40% {
            opacity:1;
            d:path("M-30 -17v-5.88m-2 3 2 -3 2 3")
          }
          40.4167% {
            opacity:1;
            d:path("M-30 -17v-5.7915m-2 3 2 -3 2 3")
          }
          40.8333% {
            opacity:1;
            d:path("M-30 -17v-5.6894m-2 3 2 -3 2 3")
          }
          41.25% {
            opacity:1;
            d:path("M-30 -17v-5.5737m-2 3 2 -3 2 3")
          }
          41.6667% {
            opacity:1;
            d:path("M-30 -17v-5.4444m-2 3 2 -3 2 3")
          }
          42.0833% {
            opacity:1;
            d:path("M-30 -17v-5.3015m-2 3 2 -3 2 3")
          }
          42.5% {
            opacity:1;
            d:path("M-30 -17v-5.145m-2 3 2 -3 2 3")
          }
          42.9167% {
            opacity:1;
            d:path("M-30 -17v-4.9749m-2 3 2 -3 2 3")
          }
          43.3333% {
            opacity:1;
            d:path("M-30 -17v-4.7911m-2 3 2 -3 2 3")
          }
          43.75% {
            opacity:1;
            d:path("M-30 -17v-4.5938m-2 3 2 -3 2 3")
          }
          44.1667% {
            opacity:1;
            d:path("M-30 -17v-4.3828m-2 3 2 -3 2 3")
          }
          44.5833% {
            opacity:1;
            d:path("M-30 -17v-4.1582m-2 3 2 -3 2 3")
          }
          45% {
            opacity:1;
            d:path("M-30 -17v-3.92m-2 3 2 -3 2 3")
          }
          45.4167% {
            opacity:1;
            d:path("M-30 -17v-3.6682m-2 3 2 -3 2 3")
          }
          45.8333% {
            opacity:1;
            d:path("M-30 -17v-3.4028m-2 3 2 -3 2 3")
          }
          46.25% {
            opacity:1;
            d:path("M-30 -17v-3.1237m-2 3 2 -3 2 3")
          }
          46.6667% {
            opacity:1;
            d:path("M-30 -17v-2.8311m-2 3 2 -3 2 3")
          }
          47.0833% {
            opacity:1;
            d:path("M-30 -17v-2.5249m-2 3 2 -3 2 3")
          }
          47.5% {
            opacity:1;
            d:path("M-30 -17v-2.205m-2 3 2 -3 2 3")
          }
          47.9167% {
            opacity:1;
            d:path("M-30 -17v-1.8715m-2 3 2 -3 2 3")
          }
          48.3333% {
            opacity:1;
            d:path("M-30 -17v-1.5244m-2 3 2 -3 2 3")
          }
          48.75% {
            opacity:1;
            d:path("M-30 -17v-1.1637m-2 3 2 -3 2 3")
          }
          49.1667% {
            opacity:1;
            d:path("M-30 -17v-0.7894m-2 3 2 -3 2 3")
          }
          49.5833% {
            opacity:1;
            d:path("M-30 -17v-0.4015m-2 3 2 -3 2 3")
          }
          50% {
            opacity:0;
            d:path("M-30 -17v0m-2 3 2 -3 2 3")
          }
          50.4167% {
            opacity:1;
            d:path("M-30 -17v0.4818m-2 -3 2 3 2 -3")
          }
          50.8333% {
            opacity:1;
            d:path("M-30 -17v0.9473m-2 -3 2 3 2 -3")
          }
          51.25% {
            opacity:1;
            d:path("M-30 -17v1.3965m-2 -3 2 3 2 -3")
          }
          51.6667% {
            opacity:1;
            d:path("M-30 -17v1.8293m-2 -3 2 3 2 -3")
          }
          52.0833% {
            opacity:1;
            d:path("M-30 -17v2.2458m-2 -3 2 3 2 -3")
          }
          52.5% {
            opacity:1;
            d:path("M-30 -17v2.646m-2 -3 2 3 2 -3")
          }
          52.9167% {
            opacity:1;
            d:path("M-30 -17v3.0298m-2 -3 2 3 2 -3")
          }
          53.3333% {
            opacity:1;
            d:path("M-30 -17v3.3973m-2 -3 2 3 2 -3")
          }
          53.75% {
            opacity:1;
            d:path("M-30 -17v3.7485m-2 -3 2 3 2 -3")
          }
          54.1667% {
            opacity:1;
            d:path("M-30 -17v4.0833m-2 -3 2 3 2 -3")
          }
          54.5833% {
            opacity:1;
            d:path("M-30 -17v4.4018m-2 -3 2 3 2 -3")
          }
          55% {
            opacity:1;
            d:path("M-30 -17v4.704m-2 -3 2 3 2 -3")
          }
          55.4167% {
            opacity:1;
            d:path("M-30 -17v4.9898m-2 -3 2 3 2 -3")
          }
          55.8333% {
            opacity:1;
            d:path("M-30 -17v5.2593m-2 -3 2 3 2 -3")
          }
          56.25% {
            opacity:1;
            d:path("M-30 -17v5.5125m-2 -3 2 3 2 -3")
          }
          56.6667% {
            opacity:1;
            d:path("M-30 -17v5.7493m-2 -3 2 3 2 -3")
          }
          57.0833% {
            opacity:1;
            d:path("M-30 -17v5.9698m-2 -3 2 3 2 -3")
          }
          57.5% {
            opacity:1;
            d:path("M-30 -17v6.174m-2 -3 2 3 2 -3")
          }
          57.9167% {
            opacity:1;
            d:path("M-30 -17v6.3618m-2 -3 2 3 2 -3")
          }
          58.3333% {
            opacity:1;
            d:path("M-30 -17v6.5333m-2 -3 2 3 2 -3")
          }
          58.75% {
            opacity:1;
            d:path("M-30 -17v6.6885m-2 -3 2 3 2 -3")
          }
          59.1667% {
            opacity:1;
            d:path("M-30 -17v6.8273m-2 -3 2 3 2 -3")
          }
          59.5833% {
            opacity:1;
            d:path("M-30 -17v6.9498m-2 -3 2 3 2 -3")
          }
          60% {
            opacity:1;
            d:path("M-30 -17v7.056m-2 -3 2 3 2 -3")
          }
          60.4167% {
            opacity:1;
            d:path("M-30 -17v7.1458m-2 -3 2 3 2 -3")
          }
          60.8333% {
            opacity:1;
            d:path("M-30 -17v7.2193m-2 -3 2 3 2 -3")
          }
          61.25% {
            opacity:1;
            d:path("M-30 -17v7.2765m-2 -3 2 3 2 -3")
          }
          61.6667% {
            opacity:1;
            d:path("M-30 -17v7.3173m-2 -3 2 3 2 -3")
          }
          62.0833% {
            opacity:1;
            d:path("M-30 -17v7.3418m-2 -3 2 3 2 -3")
          }
          62.5% {
            opacity:1;
            d:path("M-30 -17v7.35m-2 -3 2 3 2 -3")
          }
          62.9167% {
            opacity:1;
            d:path("M-30 -17v7.3418m-2 -3 2 3 2 -3")
          }
          63.3333% {
            opacity:1;
            d:path("M-30 -17v7.3173m-2 -3 2 3 2 -3")
          }
          63.75% {
            opacity:1;
            d:path("M-30 -17v7.2765m-2 -3 2 3 2 -3")
          }
          64.1667% {
            opacity:1;
            d:path("M-30 -17v7.2193m-2 -3 2 3 2 -3")
          }
          64.5833% {
            opacity:1;
            d:path("M-30 -17v7.1458m-2 -3 2 3 2 -3")
          }
          65% {
            opacity:1;
            d:path("M-30 -17v7.056m-2 -3 2 3 2 -3")
          }
          65.4167% {
            opacity:1;
            d:path("M-30 -17v6.9498m-2 -3 2 3 2 -3")
          }
          65.8333% {
            opacity:1;
            d:path("M-30 -17v6.8273m-2 -3 2 3 2 -3")
          }
          66.25% {
            opacity:1;
            d:path("M-30 -17v6.6885m-2 -3 2 3 2 -3")
          }
          66.6667% {
            opacity:1;
            d:path("M-30 -17v6.5333m-2 -3 2 3 2 -3")
          }
          67.0833% {
            opacity:1;
            d:path("M-30 -17v6.3618m-2 -3 2 3 2 -3")
          }
          67.5% {
            opacity:1;
            d:path("M-30 -17v6.174m-2 -3 2 3 2 -3")
          }
          67.9167% {
            opacity:1;
            d:path("M-30 -17v5.9698m-2 -3 2 3 2 -3")
          }
          68.3333% {
            opacity:1;
            d:path("M-30 -17v5.7493m-2 -3 2 3 2 -3")
          }
          68.75% {
            opacity:1;
            d:path("M-30 -17v5.5125m-2 -3 2 3 2 -3")
          }
          69.1667% {
            opacity:1;
            d:path("M-30 -17v5.2593m-2 -3 2 3 2 -3")
          }
          69.5833% {
            opacity:1;
            d:path("M-30 -17v4.9898m-2 -3 2 3 2 -3")
          }
          70% {
            opacity:1;
            d:path("M-30 -17v4.704m-2 -3 2 3 2 -3")
          }
          70.4167% {
            opacity:1;
            d:path("M-30 -17v4.4018m-2 -3 2 3 2 -3")
          }
          70.8333% {
            opacity:1;
            d:path("M-30 -17v4.0833m-2 -3 2 3 2 -3")
          }
          71.25% {
            opacity:1;
            d:path("M-30 -17v3.7485m-2 -3 2 3 2 -3")
          }
          71.6667% {
            opacity:1;
            d:path("M-30 -17v3.3973m-2 -3 2 3 2 -3")
          }
          72.0833% {
            opacity:1;
            d:path("M-30 -17v3.0298m-2 -3 2 3 2 -3")
          }
          72.5% {
            opacity:1;
            d:path("M-30 -17v2.646m-2 -3 2 3 2 -3")
          }
          72.9167% {
            opacity:1;
            d:path("M-30 -17v2.2458m-2 -3 2 3 2 -3")
          }
          73.3333% {
            opacity:1;
            d:path("M-30 -17v1.8293m-2 -3 2 3 2 -3")
          }
          73.75% {
            opacity:1;
            d:path("M-30 -17v1.3965m-2 -3 2 3 2 -3")
          }
          74.1667% {
            opacity:1;
            d:path("M-30 -17v0.9473m-2 -3 2 3 2 -3")
          }
          74.5833% {
            opacity:1;
            d:path("M-30 -17v0.4818m-2 -3 2 3 2 -3")
          }
          75% {
            opacity:0;
            d:path("M-30 -17v0m-2 3 2 -3 2 3")
          }
          75.4167% {
            opacity:1;
            d:path("M-30 -17v0.4015m-2 -3 2 3 2 -3")
          }
          75.8333% {
            opacity:1;
            d:path("M-30 -17v0.7894m-2 -3 2 3 2 -3")
          }
          76.25% {
            opacity:1;
            d:path("M-30 -17v1.1638m-2 -3 2 3 2 -3")
          }
          76.6667% {
            opacity:1;
            d:path("M-30 -17v1.5244m-2 -3 2 3 2 -3")
          }
          77.0833% {
            opacity:1;
            d:path("M-30 -17v1.8715m-2 -3 2 3 2 -3")
          }
          77.5% {
            opacity:1;
            d:path("M-30 -17v2.205m-2 -3 2 3 2 -3")
          }
          77.9167% {
            opacity:1;
            d:path("M-30 -17v2.5249m-2 -3 2 3 2 -3")
          }
          78.3333% {
            opacity:1;
            d:path("M-30 -17v2.8311m-2 -3 2 3 2 -3")
          }
          78.75% {
            opacity:1;
            d:path("M-30 -17v3.1238m-2 -3 2 3 2 -3")
          }
          79.1667% {
            opacity:1;
            d:path("M-30 -17v3.4028m-2 -3 2 3 2 -3")
          }
          79.5833% {
            opacity:1;
            d:path("M-30 -17v3.6682m-2 -3 2 3 2 -3")
          }
          80% {
            opacity:1;
            d:path("M-30 -17v3.92m-2 -3 2 3 2 -3")
          }
          80.4167% {
            opacity:1;
            d:path("M-30 -17v4.1582m-2 -3 2 3 2 -3")
          }
          80.8333% {
            opacity:1;
            d:path("M-30 -17v4.3828m-2 -3 2 3 2 -3")
          }
          81.25% {
            opacity:1;
            d:path("M-30 -17v4.5938m-2 -3 2 3 2 -3")
          }
          81.6667% {
            opacity:1;
            d:path("M-30 -17v4.7911m-2 -3 2 3 2 -3")
          }
          82.0833% {
            opacity:1;
            d:path("M-30 -17v4.9749m-2 -3 2 3 2 -3")
          }
          82.5% {
            opacity:1;
            d:path("M-30 -17v5.145m-2 -3 2 3 2 -3")
          }
          82.9167% {
            opacity:1;
            d:path("M-30 -17v5.3015m-2 -3 2 3 2 -3")
          }
          83.3333% {
            opacity:1;
            d:path("M-30 -17v5.4444m-2 -3 2 3 2 -3")
          }
          83.75% {
            opacity:1;
            d:path("M-30 -17v5.5738m-2 -3 2 3 2 -3")
          }
          84.1667% {
            opacity:1;
            d:path("M-30 -17v5.6894m-2 -3 2 3 2 -3")
          }
          84.5833% {
            opacity:1;
            d:path("M-30 -17v5.7915m-2 -3 2 3 2 -3")
          }
          85% {
            opacity:1;
            d:path("M-30 -17v5.88m-2 -3 2 3 2 -3")
          }
          85.4167% {
            opacity:1;
            d:path("M-30 -17v5.9549m-2 -3 2 3 2 -3")
          }
          85.8333% {
            opacity:1;
            d:path("M-30 -17v6.0161m-2 -3 2 3 2 -3")
          }
          86.25% {
            opacity:1;
            d:path("M-30 -17v6.0638m-2 -3 2 3 2 -3")
          }
          86.6667% {
            opacity:1;
            d:path("M-30 -17v6.0978m-2 -3 2 3 2 -3")
          }
          87.0833% {
            opacity:1;
            d:path("M-30 -17v6.1182m-2 -3 2 3 2 -3")
          }
          87.5% {
            opacity:1;
            d:path("M-30 -17v6.125m-2 -3 2 3 2 -3")
          }
          87.9167% {
            opacity:1;
            d:path("M-30 -17v6.1182m-2 -3 2 3 2 -3")
          }
          88.3333% {
            opacity:1;
            d:path("M-30 -17v6.0978m-2 -3 2 3 2 -3")
          }
          88.75% {
            opacity:1;
            d:path("M-30 -17v6.0637m-2 -3 2 3 2 -3")
          }
          89.1667% {
            opacity:1;
            d:path("M-30 -17v6.0161m-2 -3 2 3 2 -3")
          }
          89.5833% {
            opacity:1;
            d:path("M-30 -17v5.9549m-2 -3 2 3 2 -3")
          }
          90% {
            opacity:1;
            d:path("M-30 -17v5.88m-2 -3 2 3 2 -3")
          }
          90.4167% {
            opacity:1;
            d:path("M-30 -17v5.7915m-2 -3 2 3 2 -3")
          }
          90.8333% {
            opacity:1;
            d:path("M-30 -17v5.6894m-2 -3 2 3 2 -3")
          }
          91.25% {
            opacity:1;
            d:path("M-30 -17v5.5737m-2 -3 2 3 2 -3")
          }
          91.6667% {
            opacity:1;
            d:path("M-30 -17v5.4444m-2 -3 2 3 2 -3")
          }
          92.0833% {
            opacity:1;
            d:path("M-30 -17v5.3015m-2 -3 2 3 2 -3")
          }
          92.5% {
            opacity:1;
            d:path("M-30 -17v5.145m-2 -3 2 3 2 -3")
          }
          92.9167% {
            opacity:1;
            d:path("M-30 -17v4.9749m-2 -3 2 3 2 -3")
          }
          93.3333% {
            opacity:1;
            d:path("M-30 -17v4.7911m-2 -3 2 3 2 -3")
          }
          93.75% {
            opacity:1;
            d:path("M-30 -17v4.5938m-2 -3 2 3 2 -3")
          }
          94.1667% {
            opacity:1;
            d:path("M-30 -17v4.3828m-2 -3 2 3 2 -3")
          }
          94.5833% {
            opacity:1;
            d:path("M-30 -17v4.1582m-2 -3 2 3 2 -3")
          }
          95% {
            opacity:1;
            d:path("M-30 -17v3.92m-2 -3 2 3 2 -3")
          }
          95.4167% {
            opacity:1;
            d:path("M-30 -17v3.6682m-2 -3 2 3 2 -3")
          }
          95.8333% {
            opacity:1;
            d:path("M-30 -17v3.4028m-2 -3 2 3 2 -3")
          }
          96.25% {
            opacity:1;
            d:path("M-30 -17v3.1237m-2 -3 2 3 2 -3")
          }
          96.6667% {
            opacity:1;
            d:path("M-30 -17v2.8311m-2 -3 2 3 2 -3")
          }
          97.0833% {
            opacity:1;
            d:path("M-30 -17v2.5249m-2 -3 2 3 2 -3")
          }
          97.5% {
            opacity:1;
            d:path("M-30 -17v2.205m-2 -3 2 3 2 -3")
          }
          97.9167% {
            opacity:1;
            d:path("M-30 -17v1.8715m-2 -3 2 3 2 -3")
          }
          98.3333% {
            opacity:1;
            d:path("M-30 -17v1.5244m-2 -3 2 3 2 -3")
          }
          98.75% {
            opacity:1;
            d:path("M-30 -17v1.1637m-2 -3 2 3 2 -3")
          }
          99.1667% {
            opacity:1;
            d:path("M-30 -17v0.7894m-2 -3 2 3 2 -3")
          }
          99.5833% {
            opacity:1;
            d:path("M-30 -17v0.4015m-2 -3 2 3 2 -3")
          }
          100% {
            opacity:0;
            d:path("M-30 -17v0m-2 3 2 -3 2 3")
          }
        }
        .m-roller1 {
          animation:m-roller1 12s linear infinite
        }
        @keyframes m-roller1 {
          0% {
            transform:translateY(0px)
          }
          0.4167% {
            transform:translateY(0.0346px)
          }
          0.8333% {
            transform:translateY(0.1369px)
          }
          1.25% {
            transform:translateY(0.3045px)
          }
          1.6667% {
            transform:translateY(0.5351px)
          }
          2.0833% {
            transform:translateY(0.8264px)
          }
          2.5% {
            transform:translateY(1.176px)
          }
          2.9167% {
            transform:translateY(1.5816px)
          }
          3.3333% {
            transform:translateY(2.0409px)
          }
          3.75% {
            transform:translateY(2.5515px)
          }
          4.1667% {
            transform:translateY(3.1111px)
          }
          4.5833% {
            transform:translateY(3.7174px)
          }
          5% {
            transform:translateY(4.368px)
          }
          5.4167% {
            transform:translateY(5.0606px)
          }
          5.8333% {
            transform:translateY(5.7929px)
          }
          6.25% {
            transform:translateY(6.5625px)
          }
          6.6667% {
            transform:translateY(7.3671px)
          }
          7.0833% {
            transform:translateY(8.2044px)
          }
          7.5% {
            transform:translateY(9.072px)
          }
          7.9167% {
            transform:translateY(9.9676px)
          }
          8.3333% {
            transform:translateY(10.8889px)
          }
          8.75% {
            transform:translateY(11.8335px)
          }
          9.1667% {
            transform:translateY(12.7991px)
          }
          9.5833% {
            transform:translateY(13.7834px)
          }
          10% {
            transform:translateY(14.784px)
          }
          10.4167% {
            transform:translateY(15.7986px)
          }
          10.8333% {
            transform:translateY(16.8249px)
          }
          11.25% {
            transform:translateY(17.8605px)
          }
          11.6667% {
            transform:translateY(18.9031px)
          }
          12.0833% {
            transform:translateY(19.9504px)
          }
          12.5% {
            transform:translateY(21px)
          }
          12.9167% {
            transform:translateY(22.0496px)
          }
          13.3333% {
            transform:translateY(23.0969px)
          }
          13.75% {
            transform:translateY(24.1395px)
          }
          14.1667% {
            transform:translateY(25.1751px)
          }
          14.5833% {
            transform:translateY(26.2014px)
          }
          15% {
            transform:translateY(27.216px)
          }
          15.4167% {
            transform:translateY(28.2166px)
          }
          15.8333% {
            transform:translateY(29.2009px)
          }
          16.25% {
            transform:translateY(30.1665px)
          }
          16.6667% {
            transform:translateY(31.1111px)
          }
          17.0833% {
            transform:translateY(32.0324px)
          }
          17.5% {
            transform:translateY(32.928px)
          }
          17.9167% {
            transform:translateY(33.7956px)
          }
          18.3333% {
            transform:translateY(34.6329px)
          }
          18.75% {
            transform:translateY(35.4375px)
          }
          19.1667% {
            transform:translateY(36.2071px)
          }
          19.5833% {
            transform:translateY(36.9394px)
          }
          20% {
            transform:translateY(37.632px)
          }
          20.4167% {
            transform:translateY(38.2826px)
          }
          20.8333% {
            transform:translateY(38.8889px)
          }
          21.25% {
            transform:translateY(39.4485px)
          }
          21.6667% {
            transform:translateY(39.9591px)
          }
          22.0833% {
            transform:translateY(40.4184px)
          }
          22.5% {
            transform:translateY(40.824px)
          }
          22.9167% {
            transform:translateY(41.1736px)
          }
          23.3333% {
            transform:translateY(41.4649px)
          }
          23.75% {
            transform:translateY(41.6955px)
          }
          24.1667% {
            transform:translateY(41.8631px)
          }
          24.5833% {
            transform:translateY(41.9654px)
          }
          25% {
            transform:translateY(42px)
          }
          25.4167% {
            transform:translateY(41.9712px)
          }
          25.8333% {
            transform:translateY(41.8859px)
          }
          26.25% {
            transform:translateY(41.7463px)
          }
          26.6667% {
            transform:translateY(41.5541px)
          }
          27.0833% {
            transform:translateY(41.3113px)
          }
          27.5% {
            transform:translateY(41.02px)
          }
          27.9167% {
            transform:translateY(40.682px)
          }
          28.3333% {
            transform:translateY(40.2993px)
          }
          28.75% {
            transform:translateY(39.8738px)
          }
          29.1667% {
            transform:translateY(39.4074px)
          }
          29.5833% {
            transform:translateY(38.9022px)
          }
          30% {
            transform:translateY(38.36px)
          }
          30.4167% {
            transform:translateY(37.7828px)
          }
          30.8333% {
            transform:translateY(37.1726px)
          }
          31.25% {
            transform:translateY(36.5313px)
          }
          31.6667% {
            transform:translateY(35.8607px)
          }
          32.0833% {
            transform:translateY(35.163px)
          }
          32.5% {
            transform:translateY(34.44px)
          }
          32.9167% {
            transform:translateY(33.6937px)
          }
          33.3333% {
            transform:translateY(32.9259px)
          }
          33.75% {
            transform:translateY(32.1388px)
          }
          34.1667% {
            transform:translateY(31.3341px)
          }
          34.5833% {
            transform:translateY(30.5138px)
          }
          35% {
            transform:translateY(29.68px)
          }
          35.4167% {
            transform:translateY(28.8345px)
          }
          35.8333% {
            transform:translateY(27.9793px)
          }
          36.25% {
            transform:translateY(27.1162px)
          }
          36.6667% {
            transform:translateY(26.2474px)
          }
          37.0833% {
            transform:translateY(25.3747px)
          }
          37.5% {
            transform:translateY(24.5px)
          }
          37.9167% {
            transform:translateY(23.6253px)
          }
          38.3333% {
            transform:translateY(22.7526px)
          }
          38.75% {
            transform:translateY(21.8837px)
          }
          39.1667% {
            transform:translateY(21.0207px)
          }
          39.5833% {
            transform:translateY(20.1655px)
          }
          40% {
            transform:translateY(19.32px)
          }
          40.4167% {
            transform:translateY(18.4862px)
          }
          40.8333% {
            transform:translateY(17.6659px)
          }
          41.25% {
            transform:translateY(16.8612px)
          }
          41.6667% {
            transform:translateY(16.0741px)
          }
          42.0833% {
            transform:translateY(15.3063px)
          }
          42.5% {
            transform:translateY(14.56px)
          }
          42.9167% {
            transform:translateY(13.837px)
          }
          43.3333% {
            transform:translateY(13.1393px)
          }
          43.75% {
            transform:translateY(12.4688px)
          }
          44.1667% {
            transform:translateY(11.8274px)
          }
          44.5833% {
            transform:translateY(11.2172px)
          }
          45% {
            transform:translateY(10.64px)
          }
          45.4167% {
            transform:translateY(10.0978px)
          }
          45.8333% {
            transform:translateY(9.5926px)
          }
          46.25% {
            transform:translateY(9.1262px)
          }
          46.6667% {
            transform:translateY(8.7007px)
          }
          47.0833% {
            transform:translateY(8.318px)
          }
          47.5% {
            transform:translateY(7.98px)
          }
          47.9167% {
            transform:translateY(7.6887px)
          }
          48.3333% {
            transform:translateY(7.4459px)
          }
          48.75% {
            transform:translateY(7.2537px)
          }
          49.1667% {
            transform:translateY(7.1141px)
          }
          49.5833% {
            transform:translateY(7.0288px)
          }
          50% {
            transform:translateY(7px)
          }
          50.4167% {
            transform:translateY(6.9654px)
          }
          50.8333% {
            transform:translateY(6.8631px)
          }
          51.25% {
            transform:translateY(6.6955px)
          }
          51.6667% {
            transform:translateY(6.4649px)
          }
          52.0833% {
            transform:translateY(6.1736px)
          }
          52.5% {
            transform:translateY(5.824px)
          }
          52.9167% {
            transform:translateY(5.4184px)
          }
          53.3333% {
            transform:translateY(4.9591px)
          }
          53.75% {
            transform:translateY(4.4485px)
          }
          54.1667% {
            transform:translateY(3.8889px)
          }
          54.5833% {
            transform:translateY(3.2826px)
          }
          55% {
            transform:translateY(2.632px)
          }
          55.4167% {
            transform:translateY(1.9394px)
          }
          55.8333% {
            transform:translateY(1.2071px)
          }
          56.25% {
            transform:translateY(0.4375px)
          }
          56.6667% {
            transform:translateY(-0.3671px)
          }
          57.0833% {
            transform:translateY(-1.2044px)
          }
          57.5% {
            transform:translateY(-2.072px)
          }
          57.9167% {
            transform:translateY(-2.9676px)
          }
          58.3333% {
            transform:translateY(-3.8889px)
          }
          58.75% {
            transform:translateY(-4.8335px)
          }
          59.1667% {
            transform:translateY(-5.7991px)
          }
          59.5833% {
            transform:translateY(-6.7834px)
          }
          60% {
            transform:translateY(-7.784px)
          }
          60.4167% {
            transform:translateY(-8.7986px)
          }
          60.8333% {
            transform:translateY(-9.8249px)
          }
          61.25% {
            transform:translateY(-10.8605px)
          }
          61.6667% {
            transform:translateY(-11.9031px)
          }
          62.0833% {
            transform:translateY(-12.9504px)
          }
          62.5% {
            transform:translateY(-14px)
          }
          62.9167% {
            transform:translateY(-15.0496px)
          }
          63.3333% {
            transform:translateY(-16.0969px)
          }
          63.75% {
            transform:translateY(-17.1395px)
          }
          64.1667% {
            transform:translateY(-18.1751px)
          }
          64.5833% {
            transform:translateY(-19.2014px)
          }
          65% {
            transform:translateY(-20.216px)
          }
          65.4167% {
            transform:translateY(-21.2166px)
          }
          65.8333% {
            transform:translateY(-22.2009px)
          }
          66.25% {
            transform:translateY(-23.1665px)
          }
          66.6667% {
            transform:translateY(-24.1111px)
          }
          67.0833% {
            transform:translateY(-25.0324px)
          }
          67.5% {
            transform:translateY(-25.928px)
          }
          67.9167% {
            transform:translateY(-26.7956px)
          }
          68.3333% {
            transform:translateY(-27.6329px)
          }
          68.75% {
            transform:translateY(-28.4375px)
          }
          69.1667% {
            transform:translateY(-29.2071px)
          }
          69.5833% {
            transform:translateY(-29.9394px)
          }
          70% {
            transform:translateY(-30.632px)
          }
          70.4167% {
            transform:translateY(-31.2826px)
          }
          70.8333% {
            transform:translateY(-31.8889px)
          }
          71.25% {
            transform:translateY(-32.4485px)
          }
          71.6667% {
            transform:translateY(-32.9591px)
          }
          72.0833% {
            transform:translateY(-33.4184px)
          }
          72.5% {
            transform:translateY(-33.824px)
          }
          72.9167% {
            transform:translateY(-34.1736px)
          }
          73.3333% {
            transform:translateY(-34.4649px)
          }
          73.75% {
            transform:translateY(-34.6955px)
          }
          74.1667% {
            transform:translateY(-34.8631px)
          }
          74.5833% {
            transform:translateY(-34.9654px)
          }
          75% {
            transform:translateY(-35px)
          }
          75.4167% {
            transform:translateY(-34.9712px)
          }
          75.8333% {
            transform:translateY(-34.8859px)
          }
          76.25% {
            transform:translateY(-34.7462px)
          }
          76.6667% {
            transform:translateY(-34.5541px)
          }
          77.0833% {
            transform:translateY(-34.3113px)
          }
          77.5% {
            transform:translateY(-34.02px)
          }
          77.9167% {
            transform:translateY(-33.682px)
          }
          78.3333% {
            transform:translateY(-33.2993px)
          }
          78.75% {
            transform:translateY(-32.8737px)
          }
          79.1667% {
            transform:translateY(-32.4074px)
          }
          79.5833% {
            transform:translateY(-31.9022px)
          }
          80% {
            transform:translateY(-31.36px)
          }
          80.4167% {
            transform:translateY(-30.7828px)
          }
          80.8333% {
            transform:translateY(-30.1726px)
          }
          81.25% {
            transform:translateY(-29.5313px)
          }
          81.6667% {
            transform:translateY(-28.8607px)
          }
          82.0833% {
            transform:translateY(-28.163px)
          }
          82.5% {
            transform:translateY(-27.44px)
          }
          82.9167% {
            transform:translateY(-26.6937px)
          }
          83.3333% {
            transform:translateY(-25.9259px)
          }
          83.75% {
            transform:translateY(-25.1387px)
          }
          84.1667% {
            transform:translateY(-24.3341px)
          }
          84.5833% {
            transform:translateY(-23.5138px)
          }
          85% {
            transform:translateY(-22.68px)
          }
          85.4167% {
            transform:translateY(-21.8345px)
          }
          85.8333% {
            transform:translateY(-20.9793px)
          }
          86.25% {
            transform:translateY(-20.1162px)
          }
          86.6667% {
            transform:translateY(-19.2474px)
          }
          87.0833% {
            transform:translateY(-18.3747px)
          }
          87.5% {
            transform:translateY(-17.5px)
          }
          87.9167% {
            transform:translateY(-16.6253px)
          }
          88.3333% {
            transform:translateY(-15.7526px)
          }
          88.75% {
            transform:translateY(-14.8837px)
          }
          89.1667% {
            transform:translateY(-14.0207px)
          }
          89.5833% {
            transform:translateY(-13.1655px)
          }
          90% {
            transform:translateY(-12.32px)
          }
          90.4167% {
            transform:translateY(-11.4862px)
          }
          90.8333% {
            transform:translateY(-10.6659px)
          }
          91.25% {
            transform:translateY(-9.8612px)
          }
          91.6667% {
            transform:translateY(-9.0741px)
          }
          92.0833% {
            transform:translateY(-8.3063px)
          }
          92.5% {
            transform:translateY(-7.56px)
          }
          92.9167% {
            transform:translateY(-6.837px)
          }
          93.3333% {
            transform:translateY(-6.1393px)
          }
          93.75% {
            transform:translateY(-5.4688px)
          }
          94.1667% {
            transform:translateY(-4.8274px)
          }
          94.5833% {
            transform:translateY(-4.2172px)
          }
          95% {
            transform:translateY(-3.64px)
          }
          95.4167% {
            transform:translateY(-3.0978px)
          }
          95.8333% {
            transform:translateY(-2.5926px)
          }
          96.25% {
            transform:translateY(-2.1262px)
          }
          96.6667% {
            transform:translateY(-1.7007px)
          }
          97.0833% {
            transform:translateY(-1.318px)
          }
          97.5% {
            transform:translateY(-0.98px)
          }
          97.9167% {
            transform:translateY(-0.6887px)
          }
          98.3333% {
            transform:translateY(-0.4459px)
          }
          98.75% {
            transform:translateY(-0.2537px)
          }
          99.1667% {
            transform:translateY(-0.1141px)
          }
          99.5833% {
            transform:translateY(-0.0288px)
          }
          100% {
            transform:translateY(0px)
          }
        }
        .m-speed1 {
          animation:m-speed1 12s linear infinite
        }
        @keyframes m-speed1 {
          0% {
            opacity:0;
            d:path("M30 -17v0m-2 3 2 -3 2 3")
          }
          0.4167% {
            opacity:1;
            d:path("M30 -17v0.4818m-2 -3 2 3 2 -3")
          }
          0.8333% {
            opacity:1;
            d:path("M30 -17v0.9473m-2 -3 2 3 2 -3")
          }
          1.25% {
            opacity:1;
            d:path("M30 -17v1.3965m-2 -3 2 3 2 -3")
          }
          1.6667% {
            opacity:1;
            d:path("M30 -17v1.8293m-2 -3 2 3 2 -3")
          }
          2.0833% {
            opacity:1;
            d:path("M30 -17v2.2458m-2 -3 2 3 2 -3")
          }
          2.5% {
            opacity:1;
            d:path("M30 -17v2.646m-2 -3 2 3 2 -3")
          }
          2.9167% {
            opacity:1;
            d:path("M30 -17v3.0298m-2 -3 2 3 2 -3")
          }
          3.3333% {
            opacity:1;
            d:path("M30 -17v3.3973m-2 -3 2 3 2 -3")
          }
          3.75% {
            opacity:1;
            d:path("M30 -17v3.7485m-2 -3 2 3 2 -3")
          }
          4.1667% {
            opacity:1;
            d:path("M30 -17v4.0833m-2 -3 2 3 2 -3")
          }
          4.5833% {
            opacity:1;
            d:path("M30 -17v4.4018m-2 -3 2 3 2 -3")
          }
          5% {
            opacity:1;
            d:path("M30 -17v4.704m-2 -3 2 3 2 -3")
          }
          5.4167% {
            opacity:1;
            d:path("M30 -17v4.9898m-2 -3 2 3 2 -3")
          }
          5.8333% {
            opacity:1;
            d:path("M30 -17v5.2593m-2 -3 2 3 2 -3")
          }
          6.25% {
            opacity:1;
            d:path("M30 -17v5.5125m-2 -3 2 3 2 -3")
          }
          6.6667% {
            opacity:1;
            d:path("M30 -17v5.7493m-2 -3 2 3 2 -3")
          }
          7.0833% {
            opacity:1;
            d:path("M30 -17v5.9698m-2 -3 2 3 2 -3")
          }
          7.5% {
            opacity:1;
            d:path("M30 -17v6.174m-2 -3 2 3 2 -3")
          }
          7.9167% {
            opacity:1;
            d:path("M30 -17v6.3618m-2 -3 2 3 2 -3")
          }
          8.3333% {
            opacity:1;
            d:path("M30 -17v6.5333m-2 -3 2 3 2 -3")
          }
          8.75% {
            opacity:1;
            d:path("M30 -17v6.6885m-2 -3 2 3 2 -3")
          }
          9.1667% {
            opacity:1;
            d:path("M30 -17v6.8273m-2 -3 2 3 2 -3")
          }
          9.5833% {
            opacity:1;
            d:path("M30 -17v6.9498m-2 -3 2 3 2 -3")
          }
          10% {
            opacity:1;
            d:path("M30 -17v7.056m-2 -3 2 3 2 -3")
          }
          10.4167% {
            opacity:1;
            d:path("M30 -17v7.1458m-2 -3 2 3 2 -3")
          }
          10.8333% {
            opacity:1;
            d:path("M30 -17v7.2193m-2 -3 2 3 2 -3")
          }
          11.25% {
            opacity:1;
            d:path("M30 -17v7.2765m-2 -3 2 3 2 -3")
          }
          11.6667% {
            opacity:1;
            d:path("M30 -17v7.3173m-2 -3 2 3 2 -3")
          }
          12.0833% {
            opacity:1;
            d:path("M30 -17v7.3418m-2 -3 2 3 2 -3")
          }
          12.5% {
            opacity:1;
            d:path("M30 -17v7.35m-2 -3 2 3 2 -3")
          }
          12.9167% {
            opacity:1;
            d:path("M30 -17v7.3418m-2 -3 2 3 2 -3")
          }
          13.3333% {
            opacity:1;
            d:path("M30 -17v7.3173m-2 -3 2 3 2 -3")
          }
          13.75% {
            opacity:1;
            d:path("M30 -17v7.2765m-2 -3 2 3 2 -3")
          }
          14.1667% {
            opacity:1;
            d:path("M30 -17v7.2193m-2 -3 2 3 2 -3")
          }
          14.5833% {
            opacity:1;
            d:path("M30 -17v7.1458m-2 -3 2 3 2 -3")
          }
          15% {
            opacity:1;
            d:path("M30 -17v7.056m-2 -3 2 3 2 -3")
          }
          15.4167% {
            opacity:1;
            d:path("M30 -17v6.9498m-2 -3 2 3 2 -3")
          }
          15.8333% {
            opacity:1;
            d:path("M30 -17v6.8273m-2 -3 2 3 2 -3")
          }
          16.25% {
            opacity:1;
            d:path("M30 -17v6.6885m-2 -3 2 3 2 -3")
          }
          16.6667% {
            opacity:1;
            d:path("M30 -17v6.5333m-2 -3 2 3 2 -3")
          }
          17.0833% {
            opacity:1;
            d:path("M30 -17v6.3618m-2 -3 2 3 2 -3")
          }
          17.5% {
            opacity:1;
            d:path("M30 -17v6.174m-2 -3 2 3 2 -3")
          }
          17.9167% {
            opacity:1;
            d:path("M30 -17v5.9698m-2 -3 2 3 2 -3")
          }
          18.3333% {
            opacity:1;
            d:path("M30 -17v5.7493m-2 -3 2 3 2 -3")
          }
          18.75% {
            opacity:1;
            d:path("M30 -17v5.5125m-2 -3 2 3 2 -3")
          }
          19.1667% {
            opacity:1;
            d:path("M30 -17v5.2593m-2 -3 2 3 2 -3")
          }
          19.5833% {
            opacity:1;
            d:path("M30 -17v4.9898m-2 -3 2 3 2 -3")
          }
          20% {
            opacity:1;
            d:path("M30 -17v4.704m-2 -3 2 3 2 -3")
          }
          20.4167% {
            opacity:1;
            d:path("M30 -17v4.4018m-2 -3 2 3 2 -3")
          }
          20.8333% {
            opacity:1;
            d:path("M30 -17v4.0833m-2 -3 2 3 2 -3")
          }
          21.25% {
            opacity:1;
            d:path("M30 -17v3.7485m-2 -3 2 3 2 -3")
          }
          21.6667% {
            opacity:1;
            d:path("M30 -17v3.3973m-2 -3 2 3 2 -3")
          }
          22.0833% {
            opacity:1;
            d:path("M30 -17v3.0298m-2 -3 2 3 2 -3")
          }
          22.5% {
            opacity:1;
            d:path("M30 -17v2.646m-2 -3 2 3 2 -3")
          }
          22.9167% {
            opacity:1;
            d:path("M30 -17v2.2458m-2 -3 2 3 2 -3")
          }
          23.3333% {
            opacity:1;
            d:path("M30 -17v1.8293m-2 -3 2 3 2 -3")
          }
          23.75% {
            opacity:1;
            d:path("M30 -17v1.3965m-2 -3 2 3 2 -3")
          }
          24.1667% {
            opacity:1;
            d:path("M30 -17v0.9473m-2 -3 2 3 2 -3")
          }
          24.5833% {
            opacity:1;
            d:path("M30 -17v0.4818m-2 -3 2 3 2 -3")
          }
          25% {
            opacity:0;
            d:path("M30 -17v0m-2 3 2 -3 2 3")
          }
          25.4167% {
            opacity:1;
            d:path("M30 -17v-0.4015m-2 3 2 -3 2 3")
          }
          25.8333% {
            opacity:1;
            d:path("M30 -17v-0.7894m-2 3 2 -3 2 3")
          }
          26.25% {
            opacity:1;
            d:path("M30 -17v-1.1638m-2 3 2 -3 2 3")
          }
          26.6667% {
            opacity:1;
            d:path("M30 -17v-1.5244m-2 3 2 -3 2 3")
          }
          27.0833% {
            opacity:1;
            d:path("M30 -17v-1.8715m-2 3 2 -3 2 3")
          }
          27.5% {
            opacity:1;
            d:path("M30 -17v-2.205m-2 3 2 -3 2 3")
          }
          27.9167% {
            opacity:1;
            d:path("M30 -17v-2.5249m-2 3 2 -3 2 3")
          }
          28.3333% {
            opacity:1;
            d:path("M30 -17v-2.8311m-2 3 2 -3 2 3")
          }
          28.75% {
            opacity:1;
            d:path("M30 -17v-3.1238m-2 3 2 -3 2 3")
          }
          29.1667% {
            opacity:1;
            d:path("M30 -17v-3.4028m-2 3 2 -3 2 3")
          }
          29.5833% {
            opacity:1;
            d:path("M30 -17v-3.6682m-2 3 2 -3 2 3")
          }
          30% {
            opacity:1;
            d:path("M30 -17v-3.92m-2 3 2 -3 2 3")
          }
          30.4167% {
            opacity:1;
            d:path("M30 -17v-4.1582m-2 3 2 -3 2 3")
          }
          30.8333% {
            opacity:1;
            d:path("M30 -17v-4.3828m-2 3 2 -3 2 3")
          }
          31.25% {
            opacity:1;
            d:path("M30 -17v-4.5938m-2 3 2 -3 2 3")
          }
          31.6667% {
            opacity:1;
            d:path("M30 -17v-4.7911m-2 3 2 -3 2 3")
          }
          32.0833% {
            opacity:1;
            d:path("M30 -17v-4.9749m-2 3 2 -3 2 3")
          }
          32.5% {
            opacity:1;
            d:path("M30 -17v-5.145m-2 3 2 -3 2 3")
          }
          32.9167% {
            opacity:1;
            d:path("M30 -17v-5.3015m-2 3 2 -3 2 3")
          }
          33.3333% {
            opacity:1;
            d:path("M30 -17v-5.4444m-2 3 2 -3 2 3")
          }
          33.75% {
            opacity:1;
            d:path("M30 -17v-5.5737m-2 3 2 -3 2 3")
          }
          34.1667% {
            opacity:1;
            d:path("M30 -17v-5.6894m-2 3 2 -3 2 3")
          }
          34.5833% {
            opacity:1;
            d:path("M30 -17v-5.7915m-2 3 2 -3 2 3")
          }
          35% {
            opacity:1;
            d:path("M30 -17v-5.88m-2 3 2 -3 2 3")
          }
          35.4167% {
            opacity:1;
            d:path("M30 -17v-5.9549m-2 3 2 -3 2 3")
          }
          35.8333% {
            opacity:1;
            d:path("M30 -17v-6.0161m-2 3 2 -3 2 3")
          }
          36.25% {
            opacity:1;
            d:path("M30 -17v-6.0638m-2 3 2 -3 2 3")
          }
          36.6667% {
            opacity:1;
            d:path("M30 -17v-6.0978m-2 3 2 -3 2 3")
          }
          37.0833% {
            opacity:1;
            d:path("M30 -17v-6.1182m-2 3 2 -3 2 3")
          }
          37.5% {
            opacity:1;
            d:path("M30 -17v-6.125m-2 3 2 -3 2 3")
          }
          37.9167% {
            opacity:1;
            d:path("M30 -17v-6.1182m-2 3 2 -3 2 3")
          }
          38.3333% {
            opacity:1;
            d:path("M30 -17v-6.0978m-2 3 2 -3 2 3")
          }
          38.75% {
            opacity:1;
            d:path("M30 -17v-6.0637m-2 3 2 -3 2 3")
          }
          39.1667% {
            opacity:1;
            d:path("M30 -17v-6.0161m-2 3 2 -3 2 3")
          }
          39.5833% {
            opacity:1;
            d:path("M30 -17v-5.9549m-2 3 2 -3 2 3")
          }
          40% {
            opacity:1;
            d:path("M30 -17v-5.88m-2 3 2 -3 2 3")
          }
          40.4167% {
            opacity:1;
            d:path("M30 -17v-5.7915m-2 3 2 -3 2 3")
          }
          40.8333% {
            opacity:1;
            d:path("M30 -17v-5.6894m-2 3 2 -3 2 3")
          }
          41.25% {
            opacity:1;
            d:path("M30 -17v-5.5737m-2 3 2 -3 2 3")
          }
          41.6667% {
            opacity:1;
            d:path("M30 -17v-5.4444m-2 3 2 -3 2 3")
          }
          42.0833% {
            opacity:1;
            d:path("M30 -17v-5.3015m-2 3 2 -3 2 3")
          }
          42.5% {
            opacity:1;
            d:path("M30 -17v-5.145m-2 3 2 -3 2 3")
          }
          42.9167% {
            opacity:1;
            d:path("M30 -17v-4.9749m-2 3 2 -3 2 3")
          }
          43.3333% {
            opacity:1;
            d:path("M30 -17v-4.7911m-2 3 2 -3 2 3")
          }
          43.75% {
            opacity:1;
            d:path("M30 -17v-4.5938m-2 3 2 -3 2 3")
          }
          44.1667% {
            opacity:1;
            d:path("M30 -17v-4.3828m-2 3 2 -3 2 3")
          }
          44.5833% {
            opacity:1;
            d:path("M30 -17v-4.1582m-2 3 2 -3 2 3")
          }
          45% {
            opacity:1;
            d:path("M30 -17v-3.92m-2 3 2 -3 2 3")
          }
          45.4167% {
            opacity:1;
            d:path("M30 -17v-3.6682m-2 3 2 -3 2 3")
          }
          45.8333% {
            opacity:1;
            d:path("M30 -17v-3.4028m-2 3 2 -3 2 3")
          }
          46.25% {
            opacity:1;
            d:path("M30 -17v-3.1237m-2 3 2 -3 2 3")
          }
          46.6667% {
            opacity:1;
            d:path("M30 -17v-2.8311m-2 3 2 -3 2 3")
          }
          47.0833% {
            opacity:1;
            d:path("M30 -17v-2.5249m-2 3 2 -3 2 3")
          }
          47.5% {
            opacity:1;
            d:path("M30 -17v-2.205m-2 3 2 -3 2 3")
          }
          47.9167% {
            opacity:1;
            d:path("M30 -17v-1.8715m-2 3 2 -3 2 3")
          }
          48.3333% {
            opacity:1;
            d:path("M30 -17v-1.5244m-2 3 2 -3 2 3")
          }
          48.75% {
            opacity:1;
            d:path("M30 -17v-1.1637m-2 3 2 -3 2 3")
          }
          49.1667% {
            opacity:1;
            d:path("M30 -17v-0.7894m-2 3 2 -3 2 3")
          }
          49.5833% {
            opacity:1;
            d:path("M30 -17v-0.4015m-2 3 2 -3 2 3")
          }
          50% {
            opacity:0;
            d:path("M30 -17v0m-2 3 2 -3 2 3")
          }
          50.4167% {
            opacity:1;
            d:path("M30 -17v-0.4818m-2 3 2 -3 2 3")
          }
          50.8333% {
            opacity:1;
            d:path("M30 -17v-0.9473m-2 3 2 -3 2 3")
          }
          51.25% {
            opacity:1;
            d:path("M30 -17v-1.3965m-2 3 2 -3 2 3")
          }
          51.6667% {
            opacity:1;
            d:path("M30 -17v-1.8293m-2 3 2 -3 2 3")
          }
          52.0833% {
            opacity:1;
            d:path("M30 -17v-2.2458m-2 3 2 -3 2 3")
          }
          52.5% {
            opacity:1;
            d:path("M30 -17v-2.646m-2 3 2 -3 2 3")
          }
          52.9167% {
            opacity:1;
            d:path("M30 -17v-3.0298m-2 3 2 -3 2 3")
          }
          53.3333% {
            opacity:1;
            d:path("M30 -17v-3.3973m-2 3 2 -3 2 3")
          }
          53.75% {
            opacity:1;
            d:path("M30 -17v-3.7485m-2 3 2 -3 2 3")
          }
          54.1667% {
            opacity:1;
            d:path("M30 -17v-4.0833m-2 3 2 -3 2 3")
          }
          54.5833% {
            opacity:1;
            d:path("M30 -17v-4.4018m-2 3 2 -3 2 3")
          }
          55% {
            opacity:1;
            d:path("M30 -17v-4.704m-2 3 2 -3 2 3")
          }
          55.4167% {
            opacity:1;
            d:path("M30 -17v-4.9898m-2 3 2 -3 2 3")
          }
          55.8333% {
            opacity:1;
            d:path("M30 -17v-5.2593m-2 3 2 -3 2 3")
          }
          56.25% {
            opacity:1;
            d:path("M30 -17v-5.5125m-2 3 2 -3 2 3")
          }
          56.6667% {
            opacity:1;
            d:path("M30 -17v-5.7493m-2 3 2 -3 2 3")
          }
          57.0833% {
            opacity:1;
            d:path("M30 -17v-5.9698m-2 3 2 -3 2 3")
          }
          57.5% {
            opacity:1;
            d:path("M30 -17v-6.174m-2 3 2 -3 2 3")
          }
          57.9167% {
            opacity:1;
            d:path("M30 -17v-6.3618m-2 3 2 -3 2 3")
          }
          58.3333% {
            opacity:1;
            d:path("M30 -17v-6.5333m-2 3 2 -3 2 3")
          }
          58.75% {
            opacity:1;
            d:path("M30 -17v-6.6885m-2 3 2 -3 2 3")
          }
          59.1667% {
            opacity:1;
            d:path("M30 -17v-6.8273m-2 3 2 -3 2 3")
          }
          59.5833% {
            opacity:1;
            d:path("M30 -17v-6.9498m-2 3 2 -3 2 3")
          }
          60% {
            opacity:1;
            d:path("M30 -17v-7.056m-2 3 2 -3 2 3")
          }
          60.4167% {
            opacity:1;
            d:path("M30 -17v-7.1458m-2 3 2 -3 2 3")
          }
          60.8333% {
            opacity:1;
            d:path("M30 -17v-7.2193m-2 3 2 -3 2 3")
          }
          61.25% {
            opacity:1;
            d:path("M30 -17v-7.2765m-2 3 2 -3 2 3")
          }
          61.6667% {
            opacity:1;
            d:path("M30 -17v-7.3173m-2 3 2 -3 2 3")
          }
          62.0833% {
            opacity:1;
            d:path("M30 -17v-7.3418m-2 3 2 -3 2 3")
          }
          62.5% {
            opacity:1;
            d:path("M30 -17v-7.35m-2 3 2 -3 2 3")
          }
          62.9167% {
            opacity:1;
            d:path("M30 -17v-7.3418m-2 3 2 -3 2 3")
          }
          63.3333% {
            opacity:1;
            d:path("M30 -17v-7.3173m-2 3 2 -3 2 3")
          }
          63.75% {
            opacity:1;
            d:path("M30 -17v-7.2765m-2 3 2 -3 2 3")
          }
          64.1667% {
            opacity:1;
            d:path("M30 -17v-7.2193m-2 3 2 -3 2 3")
          }
          64.5833% {
            opacity:1;
            d:path("M30 -17v-7.1458m-2 3 2 -3 2 3")
          }
          65% {
            opacity:1;
            d:path("M30 -17v-7.056m-2 3 2 -3 2 3")
          }
          65.4167% {
            opacity:1;
            d:path("M30 -17v-6.9498m-2 3 2 -3 2 3")
          }
          65.8333% {
            opacity:1;
            d:path("M30 -17v-6.8273m-2 3 2 -3 2 3")
          }
          66.25% {
            opacity:1;
            d:path("M30 -17v-6.6885m-2 3 2 -3 2 3")
          }
          66.6667% {
            opacity:1;
            d:path("M30 -17v-6.5333m-2 3 2 -3 2 3")
          }
          67.0833% {
            opacity:1;
            d:path("M30 -17v-6.3618m-2 3 2 -3 2 3")
          }
          67.5% {
            opacity:1;
            d:path("M30 -17v-6.174m-2 3 2 -3 2 3")
          }
          67.9167% {
            opacity:1;
            d:path("M30 -17v-5.9698m-2 3 2 -3 2 3")
          }
          68.3333% {
            opacity:1;
            d:path("M30 -17v-5.7493m-2 3 2 -3 2 3")
          }
          68.75% {
            opacity:1;
            d:path("M30 -17v-5.5125m-2 3 2 -3 2 3")
          }
          69.1667% {
            opacity:1;
            d:path("M30 -17v-5.2593m-2 3 2 -3 2 3")
          }
          69.5833% {
            opacity:1;
            d:path("M30 -17v-4.9898m-2 3 2 -3 2 3")
          }
          70% {
            opacity:1;
            d:path("M30 -17v-4.704m-2 3 2 -3 2 3")
          }
          70.4167% {
            opacity:1;
            d:path("M30 -17v-4.4018m-2 3 2 -3 2 3")
          }
          70.8333% {
            opacity:1;
            d:path("M30 -17v-4.0833m-2 3 2 -3 2 3")
          }
          71.25% {
            opacity:1;
            d:path("M30 -17v-3.7485m-2 3 2 -3 2 3")
          }
          71.6667% {
            opacity:1;
            d:path("M30 -17v-3.3973m-2 3 2 -3 2 3")
          }
          72.0833% {
            opacity:1;
            d:path("M30 -17v-3.0298m-2 3 2 -3 2 3")
          }
          72.5% {
            opacity:1;
            d:path("M30 -17v-2.646m-2 3 2 -3 2 3")
          }
          72.9167% {
            opacity:1;
            d:path("M30 -17v-2.2458m-2 3 2 -3 2 3")
          }
          73.3333% {
            opacity:1;
            d:path("M30 -17v-1.8293m-2 3 2 -3 2 3")
          }
          73.75% {
            opacity:1;
            d:path("M30 -17v-1.3965m-2 3 2 -3 2 3")
          }
          74.1667% {
            opacity:1;
            d:path("M30 -17v-0.9473m-2 3 2 -3 2 3")
          }
          74.5833% {
            opacity:1;
            d:path("M30 -17v-0.4818m-2 3 2 -3 2 3")
          }
          75% {
            opacity:0;
            d:path("M30 -17v0m-2 3 2 -3 2 3")
          }
          75.4167% {
            opacity:1;
            d:path("M30 -17v0.4015m-2 -3 2 3 2 -3")
          }
          75.8333% {
            opacity:1;
            d:path("M30 -17v0.7894m-2 -3 2 3 2 -3")
          }
          76.25% {
            opacity:1;
            d:path("M30 -17v1.1638m-2 -3 2 3 2 -3")
          }
          76.6667% {
            opacity:1;
            d:path("M30 -17v1.5244m-2 -3 2 3 2 -3")
          }
          77.0833% {
            opacity:1;
            d:path("M30 -17v1.8715m-2 -3 2 3 2 -3")
          }
          77.5% {
            opacity:1;
            d:path("M30 -17v2.205m-2 -3 2 3 2 -3")
          }
          77.9167% {
            opacity:1;
            d:path("M30 -17v2.5249m-2 -3 2 3 2 -3")
          }
          78.3333% {
            opacity:1;
            d:path("M30 -17v2.8311m-2 -3 2 3 2 -3")
          }
          78.75% {
            opacity:1;
            d:path("M30 -17v3.1238m-2 -3 2 3 2 -3")
          }
          79.1667% {
            opacity:1;
            d:path("M30 -17v3.4028m-2 -3 2 3 2 -3")
          }
          79.5833% {
            opacity:1;
            d:path("M30 -17v3.6682m-2 -3 2 3 2 -3")
          }
          80% {
            opacity:1;
            d:path("M30 -17v3.92m-2 -3 2 3 2 -3")
          }
          80.4167% {
            opacity:1;
            d:path("M30 -17v4.1582m-2 -3 2 3 2 -3")
          }
          80.8333% {
            opacity:1;
            d:path("M30 -17v4.3828m-2 -3 2 3 2 -3")
          }
          81.25% {
            opacity:1;
            d:path("M30 -17v4.5938m-2 -3 2 3 2 -3")
          }
          81.6667% {
            opacity:1;
            d:path("M30 -17v4.7911m-2 -3 2 3 2 -3")
          }
          82.0833% {
            opacity:1;
            d:path("M30 -17v4.9749m-2 -3 2 3 2 -3")
          }
          82.5% {
            opacity:1;
            d:path("M30 -17v5.145m-2 -3 2 3 2 -3")
          }
          82.9167% {
            opacity:1;
            d:path("M30 -17v5.3015m-2 -3 2 3 2 -3")
          }
          83.3333% {
            opacity:1;
            d:path("M30 -17v5.4444m-2 -3 2 3 2 -3")
          }
          83.75% {
            opacity:1;
            d:path("M30 -17v5.5738m-2 -3 2 3 2 -3")
          }
          84.1667% {
            opacity:1;
            d:path("M30 -17v5.6894m-2 -3 2 3 2 -3")
          }
          84.5833% {
            opacity:1;
            d:path("M30 -17v5.7915m-2 -3 2 3 2 -3")
          }
          85% {
            opacity:1;
            d:path("M30 -17v5.88m-2 -3 2 3 2 -3")
          }
          85.4167% {
            opacity:1;
            d:path("M30 -17v5.9549m-2 -3 2 3 2 -3")
          }
          85.8333% {
            opacity:1;
            d:path("M30 -17v6.0161m-2 -3 2 3 2 -3")
          }
          86.25% {
            opacity:1;
            d:path("M30 -17v6.0638m-2 -3 2 3 2 -3")
          }
          86.6667% {
            opacity:1;
            d:path("M30 -17v6.0978m-2 -3 2 3 2 -3")
          }
          87.0833% {
            opacity:1;
            d:path("M30 -17v6.1182m-2 -3 2 3 2 -3")
          }
          87.5% {
            opacity:1;
            d:path("M30 -17v6.125m-2 -3 2 3 2 -3")
          }
          87.9167% {
            opacity:1;
            d:path("M30 -17v6.1182m-2 -3 2 3 2 -3")
          }
          88.3333% {
            opacity:1;
            d:path("M30 -17v6.0978m-2 -3 2 3 2 -3")
          }
          88.75% {
            opacity:1;
            d:path("M30 -17v6.0637m-2 -3 2 3 2 -3")
          }
          89.1667% {
            opacity:1;
            d:path("M30 -17v6.0161m-2 -3 2 3 2 -3")
          }
          89.5833% {
            opacity:1;
            d:path("M30 -17v5.9549m-2 -3 2 3 2 -3")
          }
          90% {
            opacity:1;
            d:path("M30 -17v5.88m-2 -3 2 3 2 -3")
          }
          90.4167% {
            opacity:1;
            d:path("M30 -17v5.7915m-2 -3 2 3 2 -3")
          }
          90.8333% {
            opacity:1;
            d:path("M30 -17v5.6894m-2 -3 2 3 2 -3")
          }
          91.25% {
            opacity:1;
            d:path("M30 -17v5.5737m-2 -3 2 3 2 -3")
          }
          91.6667% {
            opacity:1;
            d:path("M30 -17v5.4444m-2 -3 2 3 2 -3")
          }
          92.0833% {
            opacity:1;
            d:path("M30 -17v5.3015m-2 -3 2 3 2 -3")
          }
          92.5% {
            opacity:1;
            d:path("M30 -17v5.145m-2 -3 2 3 2 -3")
          }
          92.9167% {
            opacity:1;
            d:path("M30 -17v4.9749m-2 -3 2 3 2 -3")
          }
          93.3333% {
            opacity:1;
            d:path("M30 -17v4.7911m-2 -3 2 3 2 -3")
          }
          93.75% {
            opacity:1;
            d:path("M30 -17v4.5938m-2 -3 2 3 2 -3")
          }
          94.1667% {
            opacity:1;
            d:path("M30 -17v4.3828m-2 -3 2 3 2 -3")
          }
          94.5833% {
            opacity:1;
            d:path("M30 -17v4.1582m-2 -3 2 3 2 -3")
          }
          95% {
            opacity:1;
            d:path("M30 -17v3.92m-2 -3 2 3 2 -3")
          }
          95.4167% {
            opacity:1;
            d:path("M30 -17v3.6682m-2 -3 2 3 2 -3")
          }
          95.8333% {
            opacity:1;
            d:path("M30 -17v3.4028m-2 -3 2 3 2 -3")
          }
          96.25% {
            opacity:1;
            d:path("M30 -17v3.1237m-2 -3 2 3 2 -3")
          }
          96.6667% {
            opacity:1;
            d:path("M30 -17v2.8311m-2 -3 2 3 2 -3")
          }
          97.0833% {
            opacity:1;
            d:path("M30 -17v2.5249m-2 -3 2 3 2 -3")
          }
          97.5% {
            opacity:1;
            d:path("M30 -17v2.205m-2 -3 2 3 2 -3")
          }
          97.9167% {
            opacity:1;
            d:path("M30 -17v1.8715m-2 -3 2 3 2 -3")
          }
          98.3333% {
            opacity:1;
            d:path("M30 -17v1.5244m-2 -3 2 3 2 -3")
          }
          98.75% {
            opacity:1;
            d:path("M30 -17v1.1637m-2 -3 2 3 2 -3")
          }
          99.1667% {
            opacity:1;
            d:path("M30 -17v0.7894m-2 -3 2 3 2 -3")
          }
          99.5833% {
            opacity:1;
            d:path("M30 -17v0.4015m-2 -3 2 3 2 -3")
          }
          100% {
            opacity:0;
            d:path("M30 -17v0m-2 3 2 -3 2 3")
          }
        }
        .m-roller2 {
          animation:m-roller2 12s linear infinite
        }
        @keyframes m-roller2 {
          0% {
            transform:translateY(0px)
          }
          0.4167% {
            transform:translateY(0.0346px)
          }
          0.8333% {
            transform:translateY(0.1369px)
          }
          1.25% {
            transform:translateY(0.3045px)
          }
          1.6667% {
            transform:translateY(0.5351px)
          }
          2.0833% {
            transform:translateY(0.8264px)
          }
          2.5% {
            transform:translateY(1.176px)
          }
          2.9167% {
            transform:translateY(1.5816px)
          }
          3.3333% {
            transform:translateY(2.0409px)
          }
          3.75% {
            transform:translateY(2.5515px)
          }
          4.1667% {
            transform:translateY(3.1111px)
          }
          4.5833% {
            transform:translateY(3.7174px)
          }
          5% {
            transform:translateY(4.368px)
          }
          5.4167% {
            transform:translateY(5.0606px)
          }
          5.8333% {
            transform:translateY(5.7929px)
          }
          6.25% {
            transform:translateY(6.5625px)
          }
          6.6667% {
            transform:translateY(7.3671px)
          }
          7.0833% {
            transform:translateY(8.2044px)
          }
          7.5% {
            transform:translateY(9.072px)
          }
          7.9167% {
            transform:translateY(9.9676px)
          }
          8.3333% {
            transform:translateY(10.8889px)
          }
          8.75% {
            transform:translateY(11.8335px)
          }
          9.1667% {
            transform:translateY(12.7991px)
          }
          9.5833% {
            transform:translateY(13.7834px)
          }
          10% {
            transform:translateY(14.784px)
          }
          10.4167% {
            transform:translateY(15.7986px)
          }
          10.8333% {
            transform:translateY(16.8249px)
          }
          11.25% {
            transform:translateY(17.8605px)
          }
          11.6667% {
            transform:translateY(18.9031px)
          }
          12.0833% {
            transform:translateY(19.9504px)
          }
          12.5% {
            transform:translateY(21px)
          }
          12.9167% {
            transform:translateY(22.0496px)
          }
          13.3333% {
            transform:translateY(23.0969px)
          }
          13.75% {
            transform:translateY(24.1395px)
          }
          14.1667% {
            transform:translateY(25.1751px)
          }
          14.5833% {
            transform:translateY(26.2014px)
          }
          15% {
            transform:translateY(27.216px)
          }
          15.4167% {
            transform:translateY(28.2166px)
          }
          15.8333% {
            transform:translateY(29.2009px)
          }
          16.25% {
            transform:translateY(30.1665px)
          }
          16.6667% {
            transform:translateY(31.1111px)
          }
          17.0833% {
            transform:translateY(32.0324px)
          }
          17.5% {
            transform:translateY(32.928px)
          }
          17.9167% {
            transform:translateY(33.7956px)
          }
          18.3333% {
            transform:translateY(34.6329px)
          }
          18.75% {
            transform:translateY(35.4375px)
          }
          19.1667% {
            transform:translateY(36.2071px)
          }
          19.5833% {
            transform:translateY(36.9394px)
          }
          20% {
            transform:translateY(37.632px)
          }
          20.4167% {
            transform:translateY(38.2826px)
          }
          20.8333% {
            transform:translateY(38.8889px)
          }
          21.25% {
            transform:translateY(39.4485px)
          }
          21.6667% {
            transform:translateY(39.9591px)
          }
          22.0833% {
            transform:translateY(40.4184px)
          }
          22.5% {
            transform:translateY(40.824px)
          }
          22.9167% {
            transform:translateY(41.1736px)
          }
          23.3333% {
            transform:translateY(41.4649px)
          }
          23.75% {
            transform:translateY(41.6955px)
          }
          24.1667% {
            transform:translateY(41.8631px)
          }
          24.5833% {
            transform:translateY(41.9654px)
          }
          25% {
            transform:translateY(42px)
          }
          25.4167% {
            transform:translateY(41.9712px)
          }
          25.8333% {
            transform:translateY(41.8859px)
          }
          26.25% {
            transform:translateY(41.7463px)
          }
          26.6667% {
            transform:translateY(41.5541px)
          }
          27.0833% {
            transform:translateY(41.3113px)
          }
          27.5% {
            transform:translateY(41.02px)
          }
          27.9167% {
            transform:translateY(40.682px)
          }
          28.3333% {
            transform:translateY(40.2993px)
          }
          28.75% {
            transform:translateY(39.8738px)
          }
          29.1667% {
            transform:translateY(39.4074px)
          }
          29.5833% {
            transform:translateY(38.9022px)
          }
          30% {
            transform:translateY(38.36px)
          }
          30.4167% {
            transform:translateY(37.7828px)
          }
          30.8333% {
            transform:translateY(37.1726px)
          }
          31.25% {
            transform:translateY(36.5313px)
          }
          31.6667% {
            transform:translateY(35.8607px)
          }
          32.0833% {
            transform:translateY(35.163px)
          }
          32.5% {
            transform:translateY(34.44px)
          }
          32.9167% {
            transform:translateY(33.6937px)
          }
          33.3333% {
            transform:translateY(32.9259px)
          }
          33.75% {
            transform:translateY(32.1388px)
          }
          34.1667% {
            transform:translateY(31.3341px)
          }
          34.5833% {
            transform:translateY(30.5138px)
          }
          35% {
            transform:translateY(29.68px)
          }
          35.4167% {
            transform:translateY(28.8345px)
          }
          35.8333% {
            transform:translateY(27.9793px)
          }
          36.25% {
            transform:translateY(27.1162px)
          }
          36.6667% {
            transform:translateY(26.2474px)
          }
          37.0833% {
            transform:translateY(25.3747px)
          }
          37.5% {
            transform:translateY(24.5px)
          }
          37.9167% {
            transform:translateY(23.6253px)
          }
          38.3333% {
            transform:translateY(22.7526px)
          }
          38.75% {
            transform:translateY(21.8837px)
          }
          39.1667% {
            transform:translateY(21.0207px)
          }
          39.5833% {
            transform:translateY(20.1655px)
          }
          40% {
            transform:translateY(19.32px)
          }
          40.4167% {
            transform:translateY(18.4862px)
          }
          40.8333% {
            transform:translateY(17.6659px)
          }
          41.25% {
            transform:translateY(16.8612px)
          }
          41.6667% {
            transform:translateY(16.0741px)
          }
          42.0833% {
            transform:translateY(15.3063px)
          }
          42.5% {
            transform:translateY(14.56px)
          }
          42.9167% {
            transform:translateY(13.837px)
          }
          43.3333% {
            transform:translateY(13.1393px)
          }
          43.75% {
            transform:translateY(12.4688px)
          }
          44.1667% {
            transform:translateY(11.8274px)
          }
          44.5833% {
            transform:translateY(11.2172px)
          }
          45% {
            transform:translateY(10.64px)
          }
          45.4167% {
            transform:translateY(10.0978px)
          }
          45.8333% {
            transform:translateY(9.5926px)
          }
          46.25% {
            transform:translateY(9.1262px)
          }
          46.6667% {
            transform:translateY(8.7007px)
          }
          47.0833% {
            transform:translateY(8.318px)
          }
          47.5% {
            transform:translateY(7.98px)
          }
          47.9167% {
            transform:translateY(7.6887px)
          }
          48.3333% {
            transform:translateY(7.4459px)
          }
          48.75% {
            transform:translateY(7.2537px)
          }
          49.1667% {
            transform:translateY(7.1141px)
          }
          49.5833% {
            transform:translateY(7.0288px)
          }
          50% {
            transform:translateY(7px)
          }
          50.4167% {
            transform:translateY(6.9654px)
          }
          50.8333% {
            transform:translateY(6.8631px)
          }
          51.25% {
            transform:translateY(6.6955px)
          }
          51.6667% {
            transform:translateY(6.4649px)
          }
          52.0833% {
            transform:translateY(6.1736px)
          }
          52.5% {
            transform:translateY(5.824px)
          }
          52.9167% {
            transform:translateY(5.4184px)
          }
          53.3333% {
            transform:translateY(4.9591px)
          }
          53.75% {
            transform:translateY(4.4485px)
          }
          54.1667% {
            transform:translateY(3.8889px)
          }
          54.5833% {
            transform:translateY(3.2826px)
          }
          55% {
            transform:translateY(2.632px)
          }
          55.4167% {
            transform:translateY(1.9394px)
          }
          55.8333% {
            transform:translateY(1.2071px)
          }
          56.25% {
            transform:translateY(0.4375px)
          }
          56.6667% {
            transform:translateY(-0.3671px)
          }
          57.0833% {
            transform:translateY(-1.2044px)
          }
          57.5% {
            transform:translateY(-2.072px)
          }
          57.9167% {
            transform:translateY(-2.9676px)
          }
          58.3333% {
            transform:translateY(-3.8889px)
          }
          58.75% {
            transform:translateY(-4.8335px)
          }
          59.1667% {
            transform:translateY(-5.7991px)
          }
          59.5833% {
            transform:translateY(-6.7834px)
          }
          60% {
            transform:translateY(-7.784px)
          }
          60.4167% {
            transform:translateY(-8.7986px)
          }
          60.8333% {
            transform:translateY(-9.8249px)
          }
          61.25% {
            transform:translateY(-10.8605px)
          }
          61.6667% {
            transform:translateY(-11.9031px)
          }
          62.0833% {
            transform:translateY(-12.9504px)
          }
          62.5% {
            transform:translateY(-14px)
          }
          62.9167% {
            transform:translateY(-15.0496px)
          }
          63.3333% {
            transform:translateY(-16.0969px)
          }
          63.75% {
            transform:translateY(-17.1395px)
          }
          64.1667% {
            transform:translateY(-18.1751px)
          }
          64.5833% {
            transform:translateY(-19.2014px)
          }
          65% {
            transform:translateY(-20.216px)
          }
          65.4167% {
            transform:translateY(-21.2166px)
          }
          65.8333% {
            transform:translateY(-22.2009px)
          }
          66.25% {
            transform:translateY(-23.1665px)
          }
          66.6667% {
            transform:translateY(-24.1111px)
          }
          67.0833% {
            transform:translateY(-25.0324px)
          }
          67.5% {
            transform:translateY(-25.928px)
          }
          67.9167% {
            transform:translateY(-26.7956px)
          }
          68.3333% {
            transform:translateY(-27.6329px)
          }
          68.75% {
            transform:translateY(-28.4375px)
          }
          69.1667% {
            transform:translateY(-29.2071px)
          }
          69.5833% {
            transform:translateY(-29.9394px)
          }
          70% {
            transform:translateY(-30.632px)
          }
          70.4167% {
            transform:translateY(-31.2826px)
          }
          70.8333% {
            transform:translateY(-31.8889px)
          }
          71.25% {
            transform:translateY(-32.4485px)
          }
          71.6667% {
            transform:translateY(-32.9591px)
          }
          72.0833% {
            transform:translateY(-33.4184px)
          }
          72.5% {
            transform:translateY(-33.824px)
          }
          72.9167% {
            transform:translateY(-34.1736px)
          }
          73.3333% {
            transform:translateY(-34.4649px)
          }
          73.75% {
            transform:translateY(-34.6955px)
          }
          74.1667% {
            transform:translateY(-34.8631px)
          }
          74.5833% {
            transform:translateY(-34.9654px)
          }
          75% {
            transform:translateY(-35px)
          }
          75.4167% {
            transform:translateY(-34.9712px)
          }
          75.8333% {
            transform:translateY(-34.8859px)
          }
          76.25% {
            transform:translateY(-34.7462px)
          }
          76.6667% {
            transform:translateY(-34.5541px)
          }
          77.0833% {
            transform:translateY(-34.3113px)
          }
          77.5% {
            transform:translateY(-34.02px)
          }
          77.9167% {
            transform:translateY(-33.682px)
          }
          78.3333% {
            transform:translateY(-33.2993px)
          }
          78.75% {
            transform:translateY(-32.8737px)
          }
          79.1667% {
            transform:translateY(-32.4074px)
          }
          79.5833% {
            transform:translateY(-31.9022px)
          }
          80% {
            transform:translateY(-31.36px)
          }
          80.4167% {
            transform:translateY(-30.7828px)
          }
          80.8333% {
            transform:translateY(-30.1726px)
          }
          81.25% {
            transform:translateY(-29.5313px)
          }
          81.6667% {
            transform:translateY(-28.8607px)
          }
          82.0833% {
            transform:translateY(-28.163px)
          }
          82.5% {
            transform:translateY(-27.44px)
          }
          82.9167% {
            transform:translateY(-26.6937px)
          }
          83.3333% {
            transform:translateY(-25.9259px)
          }
          83.75% {
            transform:translateY(-25.1387px)
          }
          84.1667% {
            transform:translateY(-24.3341px)
          }
          84.5833% {
            transform:translateY(-23.5138px)
          }
          85% {
            transform:translateY(-22.68px)
          }
          85.4167% {
            transform:translateY(-21.8345px)
          }
          85.8333% {
            transform:translateY(-20.9793px)
          }
          86.25% {
            transform:translateY(-20.1162px)
          }
          86.6667% {
            transform:translateY(-19.2474px)
          }
          87.0833% {
            transform:translateY(-18.3747px)
          }
          87.5% {
            transform:translateY(-17.5px)
          }
          87.9167% {
            transform:translateY(-16.6253px)
          }
          88.3333% {
            transform:translateY(-15.7526px)
          }
          88.75% {
            transform:translateY(-14.8837px)
          }
          89.1667% {
            transform:translateY(-14.0207px)
          }
          89.5833% {
            transform:translateY(-13.1655px)
          }
          90% {
            transform:translateY(-12.32px)
          }
          90.4167% {
            transform:translateY(-11.4862px)
          }
          90.8333% {
            transform:translateY(-10.6659px)
          }
          91.25% {
            transform:translateY(-9.8612px)
          }
          91.6667% {
            transform:translateY(-9.0741px)
          }
          92.0833% {
            transform:translateY(-8.3063px)
          }
          92.5% {
            transform:translateY(-7.56px)
          }
          92.9167% {
            transform:translateY(-6.837px)
          }
          93.3333% {
            transform:translateY(-6.1393px)
          }
          93.75% {
            transform:translateY(-5.4688px)
          }
          94.1667% {
            transform:translateY(-4.8274px)
          }
          94.5833% {
            transform:translateY(-4.2172px)
          }
          95% {
            transform:translateY(-3.64px)
          }
          95.4167% {
            transform:translateY(-3.0978px)
          }
          95.8333% {
            transform:translateY(-2.5926px)
          }
          96.25% {
            transform:translateY(-2.1262px)
          }
          96.6667% {
            transform:translateY(-1.7007px)
          }
          97.0833% {
            transform:translateY(-1.318px)
          }
          97.5% {
            transform:translateY(-0.98px)
          }
          97.9167% {
            transform:translateY(-0.6887px)
          }
          98.3333% {
            transform:translateY(-0.4459px)
          }
          98.75% {
            transform:translateY(-0.2537px)
          }
          99.1667% {
            transform:translateY(-0.1141px)
          }
          99.5833% {
            transform:translateY(-0.0288px)
          }
          100% {
            transform:translateY(0px)
          }
        }
        .m-speed2 {
          animation:m-speed2 12s linear infinite
        }
        @keyframes m-speed2 {
          0% {
            opacity:0;
            d:path("M-30 17v0m-2 3 2 -3 2 3")
          }
          0.4167% {
            opacity:1;
            d:path("M-30 17v0.4818m-2 -3 2 3 2 -3")
          }
          0.8333% {
            opacity:1;
            d:path("M-30 17v0.9473m-2 -3 2 3 2 -3")
          }
          1.25% {
            opacity:1;
            d:path("M-30 17v1.3965m-2 -3 2 3 2 -3")
          }
          1.6667% {
            opacity:1;
            d:path("M-30 17v1.8293m-2 -3 2 3 2 -3")
          }
          2.0833% {
            opacity:1;
            d:path("M-30 17v2.2458m-2 -3 2 3 2 -3")
          }
          2.5% {
            opacity:1;
            d:path("M-30 17v2.646m-2 -3 2 3 2 -3")
          }
          2.9167% {
            opacity:1;
            d:path("M-30 17v3.0298m-2 -3 2 3 2 -3")
          }
          3.3333% {
            opacity:1;
            d:path("M-30 17v3.3973m-2 -3 2 3 2 -3")
          }
          3.75% {
            opacity:1;
            d:path("M-30 17v3.7485m-2 -3 2 3 2 -3")
          }
          4.1667% {
            opacity:1;
            d:path("M-30 17v4.0833m-2 -3 2 3 2 -3")
          }
          4.5833% {
            opacity:1;
            d:path("M-30 17v4.4018m-2 -3 2 3 2 -3")
          }
          5% {
            opacity:1;
            d:path("M-30 17v4.704m-2 -3 2 3 2 -3")
          }
          5.4167% {
            opacity:1;
            d:path("M-30 17v4.9898m-2 -3 2 3 2 -3")
          }
          5.8333% {
            opacity:1;
            d:path("M-30 17v5.2593m-2 -3 2 3 2 -3")
          }
          6.25% {
            opacity:1;
            d:path("M-30 17v5.5125m-2 -3 2 3 2 -3")
          }
          6.6667% {
            opacity:1;
            d:path("M-30 17v5.7493m-2 -3 2 3 2 -3")
          }
          7.0833% {
            opacity:1;
            d:path("M-30 17v5.9698m-2 -3 2 3 2 -3")
          }
          7.5% {
            opacity:1;
            d:path("M-30 17v6.174m-2 -3 2 3 2 -3")
          }
          7.9167% {
            opacity:1;
            d:path("M-30 17v6.3618m-2 -3 2 3 2 -3")
          }
          8.3333% {
            opacity:1;
            d:path("M-30 17v6.5333m-2 -3 2 3 2 -3")
          }
          8.75% {
            opacity:1;
            d:path("M-30 17v6.6885m-2 -3 2 3 2 -3")
          }
          9.1667% {
            opacity:1;
            d:path("M-30 17v6.8273m-2 -3 2 3 2 -3")
          }
          9.5833% {
            opacity:1;
            d:path("M-30 17v6.9498m-2 -3 2 3 2 -3")
          }
          10% {
            opacity:1;
            d:path("M-30 17v7.056m-2 -3 2 3 2 -3")
          }
          10.4167% {
            opacity:1;
            d:path("M-30 17v7.1458m-2 -3 2 3 2 -3")
          }
          10.8333% {
            opacity:1;
            d:path("M-30 17v7.2193m-2 -3 2 3 2 -3")
          }
          11.25% {
            opacity:1;
            d:path("M-30 17v7.2765m-2 -3 2 3 2 -3")
          }
          11.6667% {
            opacity:1;
            d:path("M-30 17v7.3173m-2 -3 2 3 2 -3")
          }
          12.0833% {
            opacity:1;
            d:path("M-30 17v7.3418m-2 -3 2 3 2 -3")
          }
          12.5% {
            opacity:1;
            d:path("M-30 17v7.35m-2 -3 2 3 2 -3")
          }
          12.9167% {
            opacity:1;
            d:path("M-30 17v7.3418m-2 -3 2 3 2 -3")
          }
          13.3333% {
            opacity:1;
            d:path("M-30 17v7.3173m-2 -3 2 3 2 -3")
          }
          13.75% {
            opacity:1;
            d:path("M-30 17v7.2765m-2 -3 2 3 2 -3")
          }
          14.1667% {
            opacity:1;
            d:path("M-30 17v7.2193m-2 -3 2 3 2 -3")
          }
          14.5833% {
            opacity:1;
            d:path("M-30 17v7.1458m-2 -3 2 3 2 -3")
          }
          15% {
            opacity:1;
            d:path("M-30 17v7.056m-2 -3 2 3 2 -3")
          }
          15.4167% {
            opacity:1;
            d:path("M-30 17v6.9498m-2 -3 2 3 2 -3")
          }
          15.8333% {
            opacity:1;
            d:path("M-30 17v6.8273m-2 -3 2 3 2 -3")
          }
          16.25% {
            opacity:1;
            d:path("M-30 17v6.6885m-2 -3 2 3 2 -3")
          }
          16.6667% {
            opacity:1;
            d:path("M-30 17v6.5333m-2 -3 2 3 2 -3")
          }
          17.0833% {
            opacity:1;
            d:path("M-30 17v6.3618m-2 -3 2 3 2 -3")
          }
          17.5% {
            opacity:1;
            d:path("M-30 17v6.174m-2 -3 2 3 2 -3")
          }
          17.9167% {
            opacity:1;
            d:path("M-30 17v5.9698m-2 -3 2 3 2 -3")
          }
          18.3333% {
            opacity:1;
            d:path("M-30 17v5.7493m-2 -3 2 3 2 -3")
          }
          18.75% {
            opacity:1;
            d:path("M-30 17v5.5125m-2 -3 2 3 2 -3")
          }
          19.1667% {
            opacity:1;
            d:path("M-30 17v5.2593m-2 -3 2 3 2 -3")
          }
          19.5833% {
            opacity:1;
            d:path("M-30 17v4.9898m-2 -3 2 3 2 -3")
          }
          20% {
            opacity:1;
            d:path("M-30 17v4.704m-2 -3 2 3 2 -3")
          }
          20.4167% {
            opacity:1;
            d:path("M-30 17v4.4018m-2 -3 2 3 2 -3")
          }
          20.8333% {
            opacity:1;
            d:path("M-30 17v4.0833m-2 -3 2 3 2 -3")
          }
          21.25% {
            opacity:1;
            d:path("M-30 17v3.7485m-2 -3 2 3 2 -3")
          }
          21.6667% {
            opacity:1;
            d:path("M-30 17v3.3973m-2 -3 2 3 2 -3")
          }
          22.0833% {
            opacity:1;
            d:path("M-30 17v3.0298m-2 -3 2 3 2 -3")
          }
          22.5% {
            opacity:1;
            d:path("M-30 17v2.646m-2 -3 2 3 2 -3")
          }
          22.9167% {
            opacity:1;
            d:path("M-30 17v2.2458m-2 -3 2 3 2 -3")
          }
          23.3333% {
            opacity:1;
            d:path("M-30 17v1.8293m-2 -3 2 3 2 -3")
          }
          23.75% {
            opacity:1;
            d:path("M-30 17v1.3965m-2 -3 2 3 2 -3")
          }
          24.1667% {
            opacity:1;
            d:path("M-30 17v0.9473m-2 -3 2 3 2 -3")
          }
          24.5833% {
            opacity:1;
            d:path("M-30 17v0.4818m-2 -3 2 3 2 -3")
          }
          25% {
            opacity:0;
            d:path("M-30 17v0m-2 3 2 -3 2 3")
          }
          25.4167% {
            opacity:1;
            d:path("M-30 17v-0.4015m-2 3 2 -3 2 3")
          }
          25.8333% {
            opacity:1;
            d:path("M-30 17v-0.7894m-2 3 2 -3 2 3")
          }
          26.25% {
            opacity:1;
            d:path("M-30 17v-1.1638m-2 3 2 -3 2 3")
          }
          26.6667% {
            opacity:1;
            d:path("M-30 17v-1.5244m-2 3 2 -3 2 3")
          }
          27.0833% {
            opacity:1;
            d:path("M-30 17v-1.8715m-2 3 2 -3 2 3")
          }
          27.5% {
            opacity:1;
            d:path("M-30 17v-2.205m-2 3 2 -3 2 3")
          }
          27.9167% {
            opacity:1;
            d:path("M-30 17v-2.5249m-2 3 2 -3 2 3")
          }
          28.3333% {
            opacity:1;
            d:path("M-30 17v-2.8311m-2 3 2 -3 2 3")
          }
          28.75% {
            opacity:1;
            d:path("M-30 17v-3.1238m-2 3 2 -3 2 3")
          }
          29.1667% {
            opacity:1;
            d:path("M-30 17v-3.4028m-2 3 2 -3 2 3")
          }
          29.5833% {
            opacity:1;
            d:path("M-30 17v-3.6682m-2 3 2 -3 2 3")
          }
          30% {
            opacity:1;
            d:path("M-30 17v-3.92m-2 3 2 -3 2 3")
          }
          30.4167% {
            opacity:1;
            d:path("M-30 17v-4.1582m-2 3 2 -3 2 3")
          }
          30.8333% {
            opacity:1;
            d:path("M-30 17v-4.3828m-2 3 2 -3 2 3")
          }
          31.25% {
            opacity:1;
            d:path("M-30 17v-4.5938m-2 3 2 -3 2 3")
          }
          31.6667% {
            opacity:1;
            d:path("M-30 17v-4.7911m-2 3 2 -3 2 3")
          }
          32.0833% {
            opacity:1;
            d:path("M-30 17v-4.9749m-2 3 2 -3 2 3")
          }
          32.5% {
            opacity:1;
            d:path("M-30 17v-5.145m-2 3 2 -3 2 3")
          }
          32.9167% {
            opacity:1;
            d:path("M-30 17v-5.3015m-2 3 2 -3 2 3")
          }
          33.3333% {
            opacity:1;
            d:path("M-30 17v-5.4444m-2 3 2 -3 2 3")
          }
          33.75% {
            opacity:1;
            d:path("M-30 17v-5.5737m-2 3 2 -3 2 3")
          }
          34.1667% {
            opacity:1;
            d:path("M-30 17v-5.6894m-2 3 2 -3 2 3")
          }
          34.5833% {
            opacity:1;
            d:path("M-30 17v-5.7915m-2 3 2 -3 2 3")
          }
          35% {
            opacity:1;
            d:path("M-30 17v-5.88m-2 3 2 -3 2 3")
          }
          35.4167% {
            opacity:1;
            d:path("M-30 17v-5.9549m-2 3 2 -3 2 3")
          }
          35.8333% {
            opacity:1;
            d:path("M-30 17v-6.0161m-2 3 2 -3 2 3")
          }
          36.25% {
            opacity:1;
            d:path("M-30 17v-6.0638m-2 3 2 -3 2 3")
          }
          36.6667% {
            opacity:1;
            d:path("M-30 17v-6.0978m-2 3 2 -3 2 3")
          }
          37.0833% {
            opacity:1;
            d:path("M-30 17v-6.1182m-2 3 2 -3 2 3")
          }
          37.5% {
            opacity:1;
            d:path("M-30 17v-6.125m-2 3 2 -3 2 3")
          }
          37.9167% {
            opacity:1;
            d:path("M-30 17v-6.1182m-2 3 2 -3 2 3")
          }
          38.3333% {
            opacity:1;
            d:path("M-30 17v-6.0978m-2 3 2 -3 2 3")
          }
          38.75% {
            opacity:1;
            d:path("M-30 17v-6.0637m-2 3 2 -3 2 3")
          }
          39.1667% {
            opacity:1;
            d:path("M-30 17v-6.0161m-2 3 2 -3 2 3")
          }
          39.5833% {
            opacity:1;
            d:path("M-30 17v-5.9549m-2 3 2 -3 2 3")
          }
          40% {
            opacity:1;
            d:path("M-30 17v-5.88m-2 3 2 -3 2 3")
          }
          40.4167% {
            opacity:1;
            d:path("M-30 17v-5.7915m-2 3 2 -3 2 3")
          }
          40.8333% {
            opacity:1;
            d:path("M-30 17v-5.6894m-2 3 2 -3 2 3")
          }
          41.25% {
            opacity:1;
            d:path("M-30 17v-5.5737m-2 3 2 -3 2 3")
          }
          41.6667% {
            opacity:1;
            d:path("M-30 17v-5.4444m-2 3 2 -3 2 3")
          }
          42.0833% {
            opacity:1;
            d:path("M-30 17v-5.3015m-2 3 2 -3 2 3")
          }
          42.5% {
            opacity:1;
            d:path("M-30 17v-5.145m-2 3 2 -3 2 3")
          }
          42.9167% {
            opacity:1;
            d:path("M-30 17v-4.9749m-2 3 2 -3 2 3")
          }
          43.3333% {
            opacity:1;
            d:path("M-30 17v-4.7911m-2 3 2 -3 2 3")
          }
          43.75% {
            opacity:1;
            d:path("M-30 17v-4.5938m-2 3 2 -3 2 3")
          }
          44.1667% {
            opacity:1;
            d:path("M-30 17v-4.3828m-2 3 2 -3 2 3")
          }
          44.5833% {
            opacity:1;
            d:path("M-30 17v-4.1582m-2 3 2 -3 2 3")
          }
          45% {
            opacity:1;
            d:path("M-30 17v-3.92m-2 3 2 -3 2 3")
          }
          45.4167% {
            opacity:1;
            d:path("M-30 17v-3.6682m-2 3 2 -3 2 3")
          }
          45.8333% {
            opacity:1;
            d:path("M-30 17v-3.4028m-2 3 2 -3 2 3")
          }
          46.25% {
            opacity:1;
            d:path("M-30 17v-3.1237m-2 3 2 -3 2 3")
          }
          46.6667% {
            opacity:1;
            d:path("M-30 17v-2.8311m-2 3 2 -3 2 3")
          }
          47.0833% {
            opacity:1;
            d:path("M-30 17v-2.5249m-2 3 2 -3 2 3")
          }
          47.5% {
            opacity:1;
            d:path("M-30 17v-2.205m-2 3 2 -3 2 3")
          }
          47.9167% {
            opacity:1;
            d:path("M-30 17v-1.8715m-2 3 2 -3 2 3")
          }
          48.3333% {
            opacity:1;
            d:path("M-30 17v-1.5244m-2 3 2 -3 2 3")
          }
          48.75% {
            opacity:1;
            d:path("M-30 17v-1.1637m-2 3 2 -3 2 3")
          }
          49.1667% {
            opacity:1;
            d:path("M-30 17v-0.7894m-2 3 2 -3 2 3")
          }
          49.5833% {
            opacity:1;
            d:path("M-30 17v-0.4015m-2 3 2 -3 2 3")
          }
          50% {
            opacity:0;
            d:path("M-30 17v0m-2 3 2 -3 2 3")
          }
          50.4167% {
            opacity:1;
            d:path("M-30 17v-0.4818m-2 3 2 -3 2 3")
          }
          50.8333% {
            opacity:1;
            d:path("M-30 17v-0.9473m-2 3 2 -3 2 3")
          }
          51.25% {
            opacity:1;
            d:path("M-30 17v-1.3965m-2 3 2 -3 2 3")
          }
          51.6667% {
            opacity:1;
            d:path("M-30 17v-1.8293m-2 3 2 -3 2 3")
          }
          52.0833% {
            opacity:1;
            d:path("M-30 17v-2.2458m-2 3 2 -3 2 3")
          }
          52.5% {
            opacity:1;
            d:path("M-30 17v-2.646m-2 3 2 -3 2 3")
          }
          52.9167% {
            opacity:1;
            d:path("M-30 17v-3.0298m-2 3 2 -3 2 3")
          }
          53.3333% {
            opacity:1;
            d:path("M-30 17v-3.3973m-2 3 2 -3 2 3")
          }
          53.75% {
            opacity:1;
            d:path("M-30 17v-3.7485m-2 3 2 -3 2 3")
          }
          54.1667% {
            opacity:1;
            d:path("M-30 17v-4.0833m-2 3 2 -3 2 3")
          }
          54.5833% {
            opacity:1;
            d:path("M-30 17v-4.4018m-2 3 2 -3 2 3")
          }
          55% {
            opacity:1;
            d:path("M-30 17v-4.704m-2 3 2 -3 2 3")
          }
          55.4167% {
            opacity:1;
            d:path("M-30 17v-4.9898m-2 3 2 -3 2 3")
          }
          55.8333% {
            opacity:1;
            d:path("M-30 17v-5.2593m-2 3 2 -3 2 3")
          }
          56.25% {
            opacity:1;
            d:path("M-30 17v-5.5125m-2 3 2 -3 2 3")
          }
          56.6667% {
            opacity:1;
            d:path("M-30 17v-5.7493m-2 3 2 -3 2 3")
          }
          57.0833% {
            opacity:1;
            d:path("M-30 17v-5.9698m-2 3 2 -3 2 3")
          }
          57.5% {
            opacity:1;
            d:path("M-30 17v-6.174m-2 3 2 -3 2 3")
          }
          57.9167% {
            opacity:1;
            d:path("M-30 17v-6.3618m-2 3 2 -3 2 3")
          }
          58.3333% {
            opacity:1;
            d:path("M-30 17v-6.5333m-2 3 2 -3 2 3")
          }
          58.75% {
            opacity:1;
            d:path("M-30 17v-6.6885m-2 3 2 -3 2 3")
          }
          59.1667% {
            opacity:1;
            d:path("M-30 17v-6.8273m-2 3 2 -3 2 3")
          }
          59.5833% {
            opacity:1;
            d:path("M-30 17v-6.9498m-2 3 2 -3 2 3")
          }
          60% {
            opacity:1;
            d:path("M-30 17v-7.056m-2 3 2 -3 2 3")
          }
          60.4167% {
            opacity:1;
            d:path("M-30 17v-7.1458m-2 3 2 -3 2 3")
          }
          60.8333% {
            opacity:1;
            d:path("M-30 17v-7.2193m-2 3 2 -3 2 3")
          }
          61.25% {
            opacity:1;
            d:path("M-30 17v-7.2765m-2 3 2 -3 2 3")
          }
          61.6667% {
            opacity:1;
            d:path("M-30 17v-7.3173m-2 3 2 -3 2 3")
          }
          62.0833% {
            opacity:1;
            d:path("M-30 17v-7.3418m-2 3 2 -3 2 3")
          }
          62.5% {
            opacity:1;
            d:path("M-30 17v-7.35m-2 3 2 -3 2 3")
          }
          62.9167% {
            opacity:1;
            d:path("M-30 17v-7.3418m-2 3 2 -3 2 3")
          }
          63.3333% {
            opacity:1;
            d:path("M-30 17v-7.3173m-2 3 2 -3 2 3")
          }
          63.75% {
            opacity:1;
            d:path("M-30 17v-7.2765m-2 3 2 -3 2 3")
          }
          64.1667% {
            opacity:1;
            d:path("M-30 17v-7.2193m-2 3 2 -3 2 3")
          }
          64.5833% {
            opacity:1;
            d:path("M-30 17v-7.1458m-2 3 2 -3 2 3")
          }
          65% {
            opacity:1;
            d:path("M-30 17v-7.056m-2 3 2 -3 2 3")
          }
          65.4167% {
            opacity:1;
            d:path("M-30 17v-6.9498m-2 3 2 -3 2 3")
          }
          65.8333% {
            opacity:1;
            d:path("M-30 17v-6.8273m-2 3 2 -3 2 3")
          }
          66.25% {
            opacity:1;
            d:path("M-30 17v-6.6885m-2 3 2 -3 2 3")
          }
          66.6667% {
            opacity:1;
            d:path("M-30 17v-6.5333m-2 3 2 -3 2 3")
          }
          67.0833% {
            opacity:1;
            d:path("M-30 17v-6.3618m-2 3 2 -3 2 3")
          }
          67.5% {
            opacity:1;
            d:path("M-30 17v-6.174m-2 3 2 -3 2 3")
          }
          67.9167% {
            opacity:1;
            d:path("M-30 17v-5.9698m-2 3 2 -3 2 3")
          }
          68.3333% {
            opacity:1;
            d:path("M-30 17v-5.7493m-2 3 2 -3 2 3")
          }
          68.75% {
            opacity:1;
            d:path("M-30 17v-5.5125m-2 3 2 -3 2 3")
          }
          69.1667% {
            opacity:1;
            d:path("M-30 17v-5.2593m-2 3 2 -3 2 3")
          }
          69.5833% {
            opacity:1;
            d:path("M-30 17v-4.9898m-2 3 2 -3 2 3")
          }
          70% {
            opacity:1;
            d:path("M-30 17v-4.704m-2 3 2 -3 2 3")
          }
          70.4167% {
            opacity:1;
            d:path("M-30 17v-4.4018m-2 3 2 -3 2 3")
          }
          70.8333% {
            opacity:1;
            d:path("M-30 17v-4.0833m-2 3 2 -3 2 3")
          }
          71.25% {
            opacity:1;
            d:path("M-30 17v-3.7485m-2 3 2 -3 2 3")
          }
          71.6667% {
            opacity:1;
            d:path("M-30 17v-3.3973m-2 3 2 -3 2 3")
          }
          72.0833% {
            opacity:1;
            d:path("M-30 17v-3.0298m-2 3 2 -3 2 3")
          }
          72.5% {
            opacity:1;
            d:path("M-30 17v-2.646m-2 3 2 -3 2 3")
          }
          72.9167% {
            opacity:1;
            d:path("M-30 17v-2.2458m-2 3 2 -3 2 3")
          }
          73.3333% {
            opacity:1;
            d:path("M-30 17v-1.8293m-2 3 2 -3 2 3")
          }
          73.75% {
            opacity:1;
            d:path("M-30 17v-1.3965m-2 3 2 -3 2 3")
          }
          74.1667% {
            opacity:1;
            d:path("M-30 17v-0.9473m-2 3 2 -3 2 3")
          }
          74.5833% {
            opacity:1;
            d:path("M-30 17v-0.4818m-2 3 2 -3 2 3")
          }
          75% {
            opacity:0;
            d:path("M-30 17v0m-2 3 2 -3 2 3")
          }
          75.4167% {
            opacity:1;
            d:path("M-30 17v0.4015m-2 -3 2 3 2 -3")
          }
          75.8333% {
            opacity:1;
            d:path("M-30 17v0.7894m-2 -3 2 3 2 -3")
          }
          76.25% {
            opacity:1;
            d:path("M-30 17v1.1638m-2 -3 2 3 2 -3")
          }
          76.6667% {
            opacity:1;
            d:path("M-30 17v1.5244m-2 -3 2 3 2 -3")
          }
          77.0833% {
            opacity:1;
            d:path("M-30 17v1.8715m-2 -3 2 3 2 -3")
          }
          77.5% {
            opacity:1;
            d:path("M-30 17v2.205m-2 -3 2 3 2 -3")
          }
          77.9167% {
            opacity:1;
            d:path("M-30 17v2.5249m-2 -3 2 3 2 -3")
          }
          78.3333% {
            opacity:1;
            d:path("M-30 17v2.8311m-2 -3 2 3 2 -3")
          }
          78.75% {
            opacity:1;
            d:path("M-30 17v3.1238m-2 -3 2 3 2 -3")
          }
          79.1667% {
            opacity:1;
            d:path("M-30 17v3.4028m-2 -3 2 3 2 -3")
          }
          79.5833% {
            opacity:1;
            d:path("M-30 17v3.6682m-2 -3 2 3 2 -3")
          }
          80% {
            opacity:1;
            d:path("M-30 17v3.92m-2 -3 2 3 2 -3")
          }
          80.4167% {
            opacity:1;
            d:path("M-30 17v4.1582m-2 -3 2 3 2 -3")
          }
          80.8333% {
            opacity:1;
            d:path("M-30 17v4.3828m-2 -3 2 3 2 -3")
          }
          81.25% {
            opacity:1;
            d:path("M-30 17v4.5938m-2 -3 2 3 2 -3")
          }
          81.6667% {
            opacity:1;
            d:path("M-30 17v4.7911m-2 -3 2 3 2 -3")
          }
          82.0833% {
            opacity:1;
            d:path("M-30 17v4.9749m-2 -3 2 3 2 -3")
          }
          82.5% {
            opacity:1;
            d:path("M-30 17v5.145m-2 -3 2 3 2 -3")
          }
          82.9167% {
            opacity:1;
            d:path("M-30 17v5.3015m-2 -3 2 3 2 -3")
          }
          83.3333% {
            opacity:1;
            d:path("M-30 17v5.4444m-2 -3 2 3 2 -3")
          }
          83.75% {
            opacity:1;
            d:path("M-30 17v5.5738m-2 -3 2 3 2 -3")
          }
          84.1667% {
            opacity:1;
            d:path("M-30 17v5.6894m-2 -3 2 3 2 -3")
          }
          84.5833% {
            opacity:1;
            d:path("M-30 17v5.7915m-2 -3 2 3 2 -3")
          }
          85% {
            opacity:1;
            d:path("M-30 17v5.88m-2 -3 2 3 2 -3")
          }
          85.4167% {
            opacity:1;
            d:path("M-30 17v5.9549m-2 -3 2 3 2 -3")
          }
          85.8333% {
            opacity:1;
            d:path("M-30 17v6.0161m-2 -3 2 3 2 -3")
          }
          86.25% {
            opacity:1;
            d:path("M-30 17v6.0638m-2 -3 2 3 2 -3")
          }
          86.6667% {
            opacity:1;
            d:path("M-30 17v6.0978m-2 -3 2 3 2 -3")
          }
          87.0833% {
            opacity:1;
            d:path("M-30 17v6.1182m-2 -3 2 3 2 -3")
          }
          87.5% {
            opacity:1;
            d:path("M-30 17v6.125m-2 -3 2 3 2 -3")
          }
          87.9167% {
            opacity:1;
            d:path("M-30 17v6.1182m-2 -3 2 3 2 -3")
          }
          88.3333% {
            opacity:1;
            d:path("M-30 17v6.0978m-2 -3 2 3 2 -3")
          }
          88.75% {
            opacity:1;
            d:path("M-30 17v6.0637m-2 -3 2 3 2 -3")
          }
          89.1667% {
            opacity:1;
            d:path("M-30 17v6.0161m-2 -3 2 3 2 -3")
          }
          89.5833% {
            opacity:1;
            d:path("M-30 17v5.9549m-2 -3 2 3 2 -3")
          }
          90% {
            opacity:1;
            d:path("M-30 17v5.88m-2 -3 2 3 2 -3")
          }
          90.4167% {
            opacity:1;
            d:path("M-30 17v5.7915m-2 -3 2 3 2 -3")
          }
          90.8333% {
            opacity:1;
            d:path("M-30 17v5.6894m-2 -3 2 3 2 -3")
          }
          91.25% {
            opacity:1;
            d:path("M-30 17v5.5737m-2 -3 2 3 2 -3")
          }
          91.6667% {
            opacity:1;
            d:path("M-30 17v5.4444m-2 -3 2 3 2 -3")
          }
          92.0833% {
            opacity:1;
            d:path("M-30 17v5.3015m-2 -3 2 3 2 -3")
          }
          92.5% {
            opacity:1;
            d:path("M-30 17v5.145m-2 -3 2 3 2 -3")
          }
          92.9167% {
            opacity:1;
            d:path("M-30 17v4.9749m-2 -3 2 3 2 -3")
          }
          93.3333% {
            opacity:1;
            d:path("M-30 17v4.7911m-2 -3 2 3 2 -3")
          }
          93.75% {
            opacity:1;
            d:path("M-30 17v4.5938m-2 -3 2 3 2 -3")
          }
          94.1667% {
            opacity:1;
            d:path("M-30 17v4.3828m-2 -3 2 3 2 -3")
          }
          94.5833% {
            opacity:1;
            d:path("M-30 17v4.1582m-2 -3 2 3 2 -3")
          }
          95% {
            opacity:1;
            d:path("M-30 17v3.92m-2 -3 2 3 2 -3")
          }
          95.4167% {
            opacity:1;
            d:path("M-30 17v3.6682m-2 -3 2 3 2 -3")
          }
          95.8333% {
            opacity:1;
            d:path("M-30 17v3.4028m-2 -3 2 3 2 -3")
          }
          96.25% {
            opacity:1;
            d:path("M-30 17v3.1237m-2 -3 2 3 2 -3")
          }
          96.6667% {
            opacity:1;
            d:path("M-30 17v2.8311m-2 -3 2 3 2 -3")
          }
          97.0833% {
            opacity:1;
            d:path("M-30 17v2.5249m-2 -3 2 3 2 -3")
          }
          97.5% {
            opacity:1;
            d:path("M-30 17v2.205m-2 -3 2 3 2 -3")
          }
          97.9167% {
            opacity:1;
            d:path("M-30 17v1.8715m-2 -3 2 3 2 -3")
          }
          98.3333% {
            opacity:1;
            d:path("M-30 17v1.5244m-2 -3 2 3 2 -3")
          }
          98.75% {
            opacity:1;
            d:path("M-30 17v1.1637m-2 -3 2 3 2 -3")
          }
          99.1667% {
            opacity:1;
            d:path("M-30 17v0.7894m-2 -3 2 3 2 -3")
          }
          99.5833% {
            opacity:1;
            d:path("M-30 17v0.4015m-2 -3 2 3 2 -3")
          }
          100% {
            opacity:0;
            d:path("M-30 17v0m-2 3 2 -3 2 3")
          }
        }
        .m-roller3 {
          animation:m-roller3 12s linear infinite
        }
        @keyframes m-roller3 {
          0% {
            transform:translateY(0px)
          }
          0.4167% {
            transform:translateY(-0.0346px)
          }
          0.8333% {
            transform:translateY(-0.1369px)
          }
          1.25% {
            transform:translateY(-0.3045px)
          }
          1.6667% {
            transform:translateY(-0.5351px)
          }
          2.0833% {
            transform:translateY(-0.8264px)
          }
          2.5% {
            transform:translateY(-1.176px)
          }
          2.9167% {
            transform:translateY(-1.5816px)
          }
          3.3333% {
            transform:translateY(-2.0409px)
          }
          3.75% {
            transform:translateY(-2.5515px)
          }
          4.1667% {
            transform:translateY(-3.1111px)
          }
          4.5833% {
            transform:translateY(-3.7174px)
          }
          5% {
            transform:translateY(-4.368px)
          }
          5.4167% {
            transform:translateY(-5.0606px)
          }
          5.8333% {
            transform:translateY(-5.7929px)
          }
          6.25% {
            transform:translateY(-6.5625px)
          }
          6.6667% {
            transform:translateY(-7.3671px)
          }
          7.0833% {
            transform:translateY(-8.2044px)
          }
          7.5% {
            transform:translateY(-9.072px)
          }
          7.9167% {
            transform:translateY(-9.9676px)
          }
          8.3333% {
            transform:translateY(-10.8889px)
          }
          8.75% {
            transform:translateY(-11.8335px)
          }
          9.1667% {
            transform:translateY(-12.7991px)
          }
          9.5833% {
            transform:translateY(-13.7834px)
          }
          10% {
            transform:translateY(-14.784px)
          }
          10.4167% {
            transform:translateY(-15.7986px)
          }
          10.8333% {
            transform:translateY(-16.8249px)
          }
          11.25% {
            transform:translateY(-17.8605px)
          }
          11.6667% {
            transform:translateY(-18.9031px)
          }
          12.0833% {
            transform:translateY(-19.9504px)
          }
          12.5% {
            transform:translateY(-21px)
          }
          12.9167% {
            transform:translateY(-22.0496px)
          }
          13.3333% {
            transform:translateY(-23.0969px)
          }
          13.75% {
            transform:translateY(-24.1395px)
          }
          14.1667% {
            transform:translateY(-25.1751px)
          }
          14.5833% {
            transform:translateY(-26.2014px)
          }
          15% {
            transform:translateY(-27.216px)
          }
          15.4167% {
            transform:translateY(-28.2166px)
          }
          15.8333% {
            transform:translateY(-29.2009px)
          }
          16.25% {
            transform:translateY(-30.1665px)
          }
          16.6667% {
            transform:translateY(-31.1111px)
          }
          17.0833% {
            transform:translateY(-32.0324px)
          }
          17.5% {
            transform:translateY(-32.928px)
          }
          17.9167% {
            transform:translateY(-33.7956px)
          }
          18.3333% {
            transform:translateY(-34.6329px)
          }
          18.75% {
            transform:translateY(-35.4375px)
          }
          19.1667% {
            transform:translateY(-36.2071px)
          }
          19.5833% {
            transform:translateY(-36.9394px)
          }
          20% {
            transform:translateY(-37.632px)
          }
          20.4167% {
            transform:translateY(-38.2826px)
          }
          20.8333% {
            transform:translateY(-38.8889px)
          }
          21.25% {
            transform:translateY(-39.4485px)
          }
          21.6667% {
            transform:translateY(-39.9591px)
          }
          22.0833% {
            transform:translateY(-40.4184px)
          }
          22.5% {
            transform:translateY(-40.824px)
          }
          22.9167% {
            transform:translateY(-41.1736px)
          }
          23.3333% {
            transform:translateY(-41.4649px)
          }
          23.75% {
            transform:translateY(-41.6955px)
          }
          24.1667% {
            transform:translateY(-41.8631px)
          }
          24.5833% {
            transform:translateY(-41.9654px)
          }
          25% {
            transform:translateY(-42px)
          }
          25.4167% {
            transform:translateY(-42.0288px)
          }
          25.8333% {
            transform:translateY(-42.1141px)
          }
          26.25% {
            transform:translateY(-42.2537px)
          }
          26.6667% {
            transform:translateY(-42.4459px)
          }
          27.0833% {
            transform:translateY(-42.6887px)
          }
          27.5% {
            transform:translateY(-42.98px)
          }
          27.9167% {
            transform:translateY(-43.318px)
          }
          28.3333% {
            transform:translateY(-43.7007px)
          }
          28.75% {
            transform:translateY(-44.1262px)
          }
          29.1667% {
            transform:translateY(-44.5926px)
          }
          29.5833% {
            transform:translateY(-45.0978px)
          }
          30% {
            transform:translateY(-45.64px)
          }
          30.4167% {
            transform:translateY(-46.2172px)
          }
          30.8333% {
            transform:translateY(-46.8274px)
          }
          31.25% {
            transform:translateY(-47.4688px)
          }
          31.6667% {
            transform:translateY(-48.1393px)
          }
          32.0833% {
            transform:translateY(-48.837px)
          }
          32.5% {
            transform:translateY(-49.56px)
          }
          32.9167% {
            transform:translateY(-50.3063px)
          }
          33.3333% {
            transform:translateY(-51.0741px)
          }
          33.75% {
            transform:translateY(-51.8612px)
          }
          34.1667% {
            transform:translateY(-52.6659px)
          }
          34.5833% {
            transform:translateY(-53.4862px)
          }
          35% {
            transform:translateY(-54.32px)
          }
          35.4167% {
            transform:translateY(-55.1655px)
          }
          35.8333% {
            transform:translateY(-56.0207px)
          }
          36.25% {
            transform:translateY(-56.8838px)
          }
          36.6667% {
            transform:translateY(-57.7526px)
          }
          37.0833% {
            transform:translateY(-58.6253px)
          }
          37.5% {
            transform:translateY(-59.5px)
          }
          37.9167% {
            transform:translateY(-60.3747px)
          }
          38.3333% {
            transform:translateY(-61.2474px)
          }
          38.75% {
            transform:translateY(-62.1163px)
          }
          39.1667% {
            transform:translateY(-62.9793px)
          }
          39.5833% {
            transform:translateY(-63.8345px)
          }
          40% {
            transform:translateY(-64.68px)
          }
          40.4167% {
            transform:translateY(-65.5138px)
          }
          40.8333% {
            transform:translateY(-66.3341px)
          }
          41.25% {
            transform:translateY(-67.1388px)
          }
          41.6667% {
            transform:translateY(-67.9259px)
          }
          42.0833% {
            transform:translateY(-68.6937px)
          }
          42.5% {
            transform:translateY(-69.44px)
          }
          42.9167% {
            transform:translateY(-70.163px)
          }
          43.3333% {
            transform:translateY(-70.8607px)
          }
          43.75% {
            transform:translateY(-71.5313px)
          }
          44.1667% {
            transform:translateY(-72.1726px)
          }
          44.5833% {
            transform:translateY(-72.7828px)
          }
          45% {
            transform:translateY(-73.36px)
          }
          45.4167% {
            transform:translateY(-73.9022px)
          }
          45.8333% {
            transform:translateY(-74.4074px)
          }
          46.25% {
            transform:translateY(-74.8738px)
          }
          46.6667% {
            transform:translateY(-75.2993px)
          }
          47.0833% {
            transform:translateY(-75.682px)
          }
          47.5% {
            transform:translateY(-76.02px)
          }
          47.9167% {
            transform:translateY(-76.3113px)
          }
          48.3333% {
            transform:translateY(-76.5541px)
          }
          48.75% {
            transform:translateY(-76.7463px)
          }
          49.1667% {
            transform:translateY(-76.8859px)
          }
          49.5833% {
            transform:translateY(-76.9712px)
          }
          50% {
            transform:translateY(-77px)
          }
          50.4167% {
            transform:translateY(-76.9654px)
          }
          50.8333% {
            transform:translateY(-76.8631px)
          }
          51.25% {
            transform:translateY(-76.6955px)
          }
          51.6667% {
            transform:translateY(-76.4649px)
          }
          52.0833% {
            transform:translateY(-76.1736px)
          }
          52.5% {
            transform:translateY(-75.824px)
          }
          52.9167% {
            transform:translateY(-75.4184px)
          }
          53.3333% {
            transform:translateY(-74.9591px)
          }
          53.75% {
            transform:translateY(-74.4485px)
          }
          54.1667% {
            transform:translateY(-73.8889px)
          }
          54.5833% {
            transform:translateY(-73.2826px)
          }
          55% {
            transform:translateY(-72.632px)
          }
          55.4167% {
            transform:translateY(-71.9394px)
          }
          55.8333% {
            transform:translateY(-71.2071px)
          }
          56.25% {
            transform:translateY(-70.4375px)
          }
          56.6667% {
            transform:translateY(-69.6329px)
          }
          57.0833% {
            transform:translateY(-68.7956px)
          }
          57.5% {
            transform:translateY(-67.928px)
          }
          57.9167% {
            transform:translateY(-67.0324px)
          }
          58.3333% {
            transform:translateY(-66.1111px)
          }
          58.75% {
            transform:translateY(-65.1665px)
          }
          59.1667% {
            transform:translateY(-64.2009px)
          }
          59.5833% {
            transform:translateY(-63.2166px)
          }
          60% {
            transform:translateY(-62.216px)
          }
          60.4167% {
            transform:translateY(-61.2014px)
          }
          60.8333% {
            transform:translateY(-60.1751px)
          }
          61.25% {
            transform:translateY(-59.1395px)
          }
          61.6667% {
            transform:translateY(-58.0969px)
          }
          62.0833% {
            transform:translateY(-57.0496px)
          }
          62.5% {
            transform:translateY(-56px)
          }
          62.9167% {
            transform:translateY(-54.9504px)
          }
          63.3333% {
            transform:translateY(-53.9031px)
          }
          63.75% {
            transform:translateY(-52.8605px)
          }
          64.1667% {
            transform:translateY(-51.8249px)
          }
          64.5833% {
            transform:translateY(-50.7986px)
          }
          65% {
            transform:translateY(-49.784px)
          }
          65.4167% {
            transform:translateY(-48.7834px)
          }
          65.8333% {
            transform:translateY(-47.7991px)
          }
          66.25% {
            transform:translateY(-46.8335px)
          }
          66.6667% {
            transform:translateY(-45.8889px)
          }
          67.0833% {
            transform:translateY(-44.9676px)
          }
          67.5% {
            transform:translateY(-44.072px)
          }
          67.9167% {
            transform:translateY(-43.2044px)
          }
          68.3333% {
            transform:translateY(-42.3671px)
          }
          68.75% {
            transform:translateY(-41.5625px)
          }
          69.1667% {
            transform:translateY(-40.7929px)
          }
          69.5833% {
            transform:translateY(-40.0606px)
          }
          70% {
            transform:translateY(-39.368px)
          }
          70.4167% {
            transform:translateY(-38.7174px)
          }
          70.8333% {
            transform:translateY(-38.1111px)
          }
          71.25% {
            transform:translateY(-37.5515px)
          }
          71.6667% {
            transform:translateY(-37.0409px)
          }
          72.0833% {
            transform:translateY(-36.5816px)
          }
          72.5% {
            transform:translateY(-36.176px)
          }
          72.9167% {
            transform:translateY(-35.8264px)
          }
          73.3333% {
            transform:translateY(-35.5351px)
          }
          73.75% {
            transform:translateY(-35.3045px)
          }
          74.1667% {
            transform:translateY(-35.1369px)
          }
          74.5833% {
            transform:translateY(-35.0346px)
          }
          75% {
            transform:translateY(-35px)
          }
          75.4167% {
            transform:translateY(-34.9712px)
          }
          75.8333% {
            transform:translateY(-34.8859px)
          }
          76.25% {
            transform:translateY(-34.7462px)
          }
          76.6667% {
            transform:translateY(-34.5541px)
          }
          77.0833% {
            transform:translateY(-34.3113px)
          }
          77.5% {
            transform:translateY(-34.02px)
          }
          77.9167% {
            transform:translateY(-33.682px)
          }
          78.3333% {
            transform:translateY(-33.2993px)
          }
          78.75% {
            transform:translateY(-32.8737px)
          }
          79.1667% {
            transform:translateY(-32.4074px)
          }
          79.5833% {
            transform:translateY(-31.9022px)
          }
          80% {
            transform:translateY(-31.36px)
          }
          80.4167% {
            transform:translateY(-30.7828px)
          }
          80.8333% {
            transform:translateY(-30.1726px)
          }
          81.25% {
            transform:translateY(-29.5313px)
          }
          81.6667% {
            transform:translateY(-28.8607px)
          }
          82.0833% {
            transform:translateY(-28.163px)
          }
          82.5% {
            transform:translateY(-27.44px)
          }
          82.9167% {
            transform:translateY(-26.6937px)
          }
          83.3333% {
            transform:translateY(-25.9259px)
          }
          83.75% {
            transform:translateY(-25.1387px)
          }
          84.1667% {
            transform:translateY(-24.3341px)
          }
          84.5833% {
            transform:translateY(-23.5138px)
          }
          85% {
            transform:translateY(-22.68px)
          }
          85.4167% {
            transform:translateY(-21.8345px)
          }
          85.8333% {
            transform:translateY(-20.9793px)
          }
          86.25% {
            transform:translateY(-20.1162px)
          }
          86.6667% {
            transform:translateY(-19.2474px)
          }
          87.0833% {
            transform:translateY(-18.3747px)
          }
          87.5% {
            transform:translateY(-17.5px)
          }
          87.9167% {
            transform:translateY(-16.6253px)
          }
          88.3333% {
            transform:translateY(-15.7526px)
          }
          88.75% {
            transform:translateY(-14.8837px)
          }
          89.1667% {
            transform:translateY(-14.0207px)
          }
          89.5833% {
            transform:translateY(-13.1655px)
          }
          90% {
            transform:translateY(-12.32px)
          }
          90.4167% {
            transform:translateY(-11.4862px)
          }
          90.8333% {
            transform:translateY(-10.6659px)
          }
          91.25% {
            transform:translateY(-9.8612px)
          }
          91.6667% {
            transform:translateY(-9.0741px)
          }
          92.0833% {
            transform:translateY(-8.3063px)
          }
          92.5% {
            transform:translateY(-7.56px)
          }
          92.9167% {
            transform:translateY(-6.837px)
          }
          93.3333% {
            transform:translateY(-6.1393px)
          }
          93.75% {
            transform:translateY(-5.4688px)
          }
          94.1667% {
            transform:translateY(-4.8274px)
          }
          94.5833% {
            transform:translateY(-4.2172px)
          }
          95% {
            transform:translateY(-3.64px)
          }
          95.4167% {
            transform:translateY(-3.0978px)
          }
          95.8333% {
            transform:translateY(-2.5926px)
          }
          96.25% {
            transform:translateY(-2.1262px)
          }
          96.6667% {
            transform:translateY(-1.7007px)
          }
          97.0833% {
            transform:translateY(-1.318px)
          }
          97.5% {
            transform:translateY(-0.98px)
          }
          97.9167% {
            transform:translateY(-0.6887px)
          }
          98.3333% {
            transform:translateY(-0.4459px)
          }
          98.75% {
            transform:translateY(-0.2537px)
          }
          99.1667% {
            transform:translateY(-0.1141px)
          }
          99.5833% {
            transform:translateY(-0.0288px)
          }
          100% {
            transform:translateY(0px)
          }
        }
        .m-speed3 {
          animation:m-speed3 12s linear infinite
        }
        @keyframes m-speed3 {
          0% {
            opacity:0;
            d:path("M30 17v0m-2 3 2 -3 2 3")
          }
          0.4167% {
            opacity:1;
            d:path("M30 17v-0.4818m-2 3 2 -3 2 3")
          }
          0.8333% {
            opacity:1;
            d:path("M30 17v-0.9473m-2 3 2 -3 2 3")
          }
          1.25% {
            opacity:1;
            d:path("M30 17v-1.3965m-2 3 2 -3 2 3")
          }
          1.6667% {
            opacity:1;
            d:path("M30 17v-1.8293m-2 3 2 -3 2 3")
          }
          2.0833% {
            opacity:1;
            d:path("M30 17v-2.2458m-2 3 2 -3 2 3")
          }
          2.5% {
            opacity:1;
            d:path("M30 17v-2.646m-2 3 2 -3 2 3")
          }
          2.9167% {
            opacity:1;
            d:path("M30 17v-3.0298m-2 3 2 -3 2 3")
          }
          3.3333% {
            opacity:1;
            d:path("M30 17v-3.3973m-2 3 2 -3 2 3")
          }
          3.75% {
            opacity:1;
            d:path("M30 17v-3.7485m-2 3 2 -3 2 3")
          }
          4.1667% {
            opacity:1;
            d:path("M30 17v-4.0833m-2 3 2 -3 2 3")
          }
          4.5833% {
            opacity:1;
            d:path("M30 17v-4.4018m-2 3 2 -3 2 3")
          }
          5% {
            opacity:1;
            d:path("M30 17v-4.704m-2 3 2 -3 2 3")
          }
          5.4167% {
            opacity:1;
            d:path("M30 17v-4.9898m-2 3 2 -3 2 3")
          }
          5.8333% {
            opacity:1;
            d:path("M30 17v-5.2593m-2 3 2 -3 2 3")
          }
          6.25% {
            opacity:1;
            d:path("M30 17v-5.5125m-2 3 2 -3 2 3")
          }
          6.6667% {
            opacity:1;
            d:path("M30 17v-5.7493m-2 3 2 -3 2 3")
          }
          7.0833% {
            opacity:1;
            d:path("M30 17v-5.9698m-2 3 2 -3 2 3")
          }
          7.5% {
            opacity:1;
            d:path("M30 17v-6.174m-2 3 2 -3 2 3")
          }
          7.9167% {
            opacity:1;
            d:path("M30 17v-6.3618m-2 3 2 -3 2 3")
          }
          8.3333% {
            opacity:1;
            d:path("M30 17v-6.5333m-2 3 2 -3 2 3")
          }
          8.75% {
            opacity:1;
            d:path("M30 17v-6.6885m-2 3 2 -3 2 3")
          }
          9.1667% {
            opacity:1;
            d:path("M30 17v-6.8273m-2 3 2 -3 2 3")
          }
          9.5833% {
            opacity:1;
            d:path("M30 17v-6.9498m-2 3 2 -3 2 3")
          }
          10% {
            opacity:1;
            d:path("M30 17v-7.056m-2 3 2 -3 2 3")
          }
          10.4167% {
            opacity:1;
            d:path("M30 17v-7.1458m-2 3 2 -3 2 3")
          }
          10.8333% {
            opacity:1;
            d:path("M30 17v-7.2193m-2 3 2 -3 2 3")
          }
          11.25% {
            opacity:1;
            d:path("M30 17v-7.2765m-2 3 2 -3 2 3")
          }
          11.6667% {
            opacity:1;
            d:path("M30 17v-7.3173m-2 3 2 -3 2 3")
          }
          12.0833% {
            opacity:1;
            d:path("M30 17v-7.3418m-2 3 2 -3 2 3")
          }
          12.5% {
            opacity:1;
            d:path("M30 17v-7.35m-2 3 2 -3 2 3")
          }
          12.9167% {
            opacity:1;
            d:path("M30 17v-7.3418m-2 3 2 -3 2 3")
          }
          13.3333% {
            opacity:1;
            d:path("M30 17v-7.3173m-2 3 2 -3 2 3")
          }
          13.75% {
            opacity:1;
            d:path("M30 17v-7.2765m-2 3 2 -3 2 3")
          }
          14.1667% {
            opacity:1;
            d:path("M30 17v-7.2193m-2 3 2 -3 2 3")
          }
          14.5833% {
            opacity:1;
            d:path("M30 17v-7.1458m-2 3 2 -3 2 3")
          }
          15% {
            opacity:1;
            d:path("M30 17v-7.056m-2 3 2 -3 2 3")
          }
          15.4167% {
            opacity:1;
            d:path("M30 17v-6.9498m-2 3 2 -3 2 3")
          }
          15.8333% {
            opacity:1;
            d:path("M30 17v-6.8273m-2 3 2 -3 2 3")
          }
          16.25% {
            opacity:1;
            d:path("M30 17v-6.6885m-2 3 2 -3 2 3")
          }
          16.6667% {
            opacity:1;
            d:path("M30 17v-6.5333m-2 3 2 -3 2 3")
          }
          17.0833% {
            opacity:1;
            d:path("M30 17v-6.3618m-2 3 2 -3 2 3")
          }
          17.5% {
            opacity:1;
            d:path("M30 17v-6.174m-2 3 2 -3 2 3")
          }
          17.9167% {
            opacity:1;
            d:path("M30 17v-5.9698m-2 3 2 -3 2 3")
          }
          18.3333% {
            opacity:1;
            d:path("M30 17v-5.7493m-2 3 2 -3 2 3")
          }
          18.75% {
            opacity:1;
            d:path("M30 17v-5.5125m-2 3 2 -3 2 3")
          }
          19.1667% {
            opacity:1;
            d:path("M30 17v-5.2593m-2 3 2 -3 2 3")
          }
          19.5833% {
            opacity:1;
            d:path("M30 17v-4.9898m-2 3 2 -3 2 3")
          }
          20% {
            opacity:1;
            d:path("M30 17v-4.704m-2 3 2 -3 2 3")
          }
          20.4167% {
            opacity:1;
            d:path("M30 17v-4.4018m-2 3 2 -3 2 3")
          }
          20.8333% {
            opacity:1;
            d:path("M30 17v-4.0833m-2 3 2 -3 2 3")
          }
          21.25% {
            opacity:1;
            d:path("M30 17v-3.7485m-2 3 2 -3 2 3")
          }
          21.6667% {
            opacity:1;
            d:path("M30 17v-3.3973m-2 3 2 -3 2 3")
          }
          22.0833% {
            opacity:1;
            d:path("M30 17v-3.0298m-2 3 2 -3 2 3")
          }
          22.5% {
            opacity:1;
            d:path("M30 17v-2.646m-2 3 2 -3 2 3")
          }
          22.9167% {
            opacity:1;
            d:path("M30 17v-2.2458m-2 3 2 -3 2 3")
          }
          23.3333% {
            opacity:1;
            d:path("M30 17v-1.8293m-2 3 2 -3 2 3")
          }
          23.75% {
            opacity:1;
            d:path("M30 17v-1.3965m-2 3 2 -3 2 3")
          }
          24.1667% {
            opacity:1;
            d:path("M30 17v-0.9473m-2 3 2 -3 2 3")
          }
          24.5833% {
            opacity:1;
            d:path("M30 17v-0.4818m-2 3 2 -3 2 3")
          }
          25% {
            opacity:0;
            d:path("M30 17v0m-2 3 2 -3 2 3")
          }
          25.4167% {
            opacity:1;
            d:path("M30 17v-0.4015m-2 3 2 -3 2 3")
          }
          25.8333% {
            opacity:1;
            d:path("M30 17v-0.7894m-2 3 2 -3 2 3")
          }
          26.25% {
            opacity:1;
            d:path("M30 17v-1.1638m-2 3 2 -3 2 3")
          }
          26.6667% {
            opacity:1;
            d:path("M30 17v-1.5244m-2 3 2 -3 2 3")
          }
          27.0833% {
            opacity:1;
            d:path("M30 17v-1.8715m-2 3 2 -3 2 3")
          }
          27.5% {
            opacity:1;
            d:path("M30 17v-2.205m-2 3 2 -3 2 3")
          }
          27.9167% {
            opacity:1;
            d:path("M30 17v-2.5249m-2 3 2 -3 2 3")
          }
          28.3333% {
            opacity:1;
            d:path("M30 17v-2.8311m-2 3 2 -3 2 3")
          }
          28.75% {
            opacity:1;
            d:path("M30 17v-3.1238m-2 3 2 -3 2 3")
          }
          29.1667% {
            opacity:1;
            d:path("M30 17v-3.4028m-2 3 2 -3 2 3")
          }
          29.5833% {
            opacity:1;
            d:path("M30 17v-3.6682m-2 3 2 -3 2 3")
          }
          30% {
            opacity:1;
            d:path("M30 17v-3.92m-2 3 2 -3 2 3")
          }
          30.4167% {
            opacity:1;
            d:path("M30 17v-4.1582m-2 3 2 -3 2 3")
          }
          30.8333% {
            opacity:1;
            d:path("M30 17v-4.3828m-2 3 2 -3 2 3")
          }
          31.25% {
            opacity:1;
            d:path("M30 17v-4.5938m-2 3 2 -3 2 3")
          }
          31.6667% {
            opacity:1;
            d:path("M30 17v-4.7911m-2 3 2 -3 2 3")
          }
          32.0833% {
            opacity:1;
            d:path("M30 17v-4.9749m-2 3 2 -3 2 3")
          }
          32.5% {
            opacity:1;
            d:path("M30 17v-5.145m-2 3 2 -3 2 3")
          }
          32.9167% {
            opacity:1;
            d:path("M30 17v-5.3015m-2 3 2 -3 2 3")
          }
          33.3333% {
            opacity:1;
            d:path("M30 17v-5.4444m-2 3 2 -3 2 3")
          }
          33.75% {
            opacity:1;
            d:path("M30 17v-5.5737m-2 3 2 -3 2 3")
          }
          34.1667% {
            opacity:1;
            d:path("M30 17v-5.6894m-2 3 2 -3 2 3")
          }
          34.5833% {
            opacity:1;
            d:path("M30 17v-5.7915m-2 3 2 -3 2 3")
          }
          35% {
            opacity:1;
            d:path("M30 17v-5.88m-2 3 2 -3 2 3")
          }
          35.4167% {
            opacity:1;
            d:path("M30 17v-5.9549m-2 3 2 -3 2 3")
          }
          35.8333% {
            opacity:1;
            d:path("M30 17v-6.0161m-2 3 2 -3 2 3")
          }
          36.25% {
            opacity:1;
            d:path("M30 17v-6.0638m-2 3 2 -3 2 3")
          }
          36.6667% {
            opacity:1;
            d:path("M30 17v-6.0978m-2 3 2 -3 2 3")
          }
          37.0833% {
            opacity:1;
            d:path("M30 17v-6.1182m-2 3 2 -3 2 3")
          }
          37.5% {
            opacity:1;
            d:path("M30 17v-6.125m-2 3 2 -3 2 3")
          }
          37.9167% {
            opacity:1;
            d:path("M30 17v-6.1182m-2 3 2 -3 2 3")
          }
          38.3333% {
            opacity:1;
            d:path("M30 17v-6.0978m-2 3 2 -3 2 3")
          }
          38.75% {
            opacity:1;
            d:path("M30 17v-6.0637m-2 3 2 -3 2 3")
          }
          39.1667% {
            opacity:1;
            d:path("M30 17v-6.0161m-2 3 2 -3 2 3")
          }
          39.5833% {
            opacity:1;
            d:path("M30 17v-5.9549m-2 3 2 -3 2 3")
          }
          40% {
            opacity:1;
            d:path("M30 17v-5.88m-2 3 2 -3 2 3")
          }
          40.4167% {
            opacity:1;
            d:path("M30 17v-5.7915m-2 3 2 -3 2 3")
          }
          40.8333% {
            opacity:1;
            d:path("M30 17v-5.6894m-2 3 2 -3 2 3")
          }
          41.25% {
            opacity:1;
            d:path("M30 17v-5.5737m-2 3 2 -3 2 3")
          }
          41.6667% {
            opacity:1;
            d:path("M30 17v-5.4444m-2 3 2 -3 2 3")
          }
          42.0833% {
            opacity:1;
            d:path("M30 17v-5.3015m-2 3 2 -3 2 3")
          }
          42.5% {
            opacity:1;
            d:path("M30 17v-5.145m-2 3 2 -3 2 3")
          }
          42.9167% {
            opacity:1;
            d:path("M30 17v-4.9749m-2 3 2 -3 2 3")
          }
          43.3333% {
            opacity:1;
            d:path("M30 17v-4.7911m-2 3 2 -3 2 3")
          }
          43.75% {
            opacity:1;
            d:path("M30 17v-4.5938m-2 3 2 -3 2 3")
          }
          44.1667% {
            opacity:1;
            d:path("M30 17v-4.3828m-2 3 2 -3 2 3")
          }
          44.5833% {
            opacity:1;
            d:path("M30 17v-4.1582m-2 3 2 -3 2 3")
          }
          45% {
            opacity:1;
            d:path("M30 17v-3.92m-2 3 2 -3 2 3")
          }
          45.4167% {
            opacity:1;
            d:path("M30 17v-3.6682m-2 3 2 -3 2 3")
          }
          45.8333% {
            opacity:1;
            d:path("M30 17v-3.4028m-2 3 2 -3 2 3")
          }
          46.25% {
            opacity:1;
            d:path("M30 17v-3.1237m-2 3 2 -3 2 3")
          }
          46.6667% {
            opacity:1;
            d:path("M30 17v-2.8311m-2 3 2 -3 2 3")
          }
          47.0833% {
            opacity:1;
            d:path("M30 17v-2.5249m-2 3 2 -3 2 3")
          }
          47.5% {
            opacity:1;
            d:path("M30 17v-2.205m-2 3 2 -3 2 3")
          }
          47.9167% {
            opacity:1;
            d:path("M30 17v-1.8715m-2 3 2 -3 2 3")
          }
          48.3333% {
            opacity:1;
            d:path("M30 17v-1.5244m-2 3 2 -3 2 3")
          }
          48.75% {
            opacity:1;
            d:path("M30 17v-1.1637m-2 3 2 -3 2 3")
          }
          49.1667% {
            opacity:1;
            d:path("M30 17v-0.7894m-2 3 2 -3 2 3")
          }
          49.5833% {
            opacity:1;
            d:path("M30 17v-0.4015m-2 3 2 -3 2 3")
          }
          50% {
            opacity:0;
            d:path("M30 17v0m-2 3 2 -3 2 3")
          }
          50.4167% {
            opacity:1;
            d:path("M30 17v0.4818m-2 -3 2 3 2 -3")
          }
          50.8333% {
            opacity:1;
            d:path("M30 17v0.9473m-2 -3 2 3 2 -3")
          }
          51.25% {
            opacity:1;
            d:path("M30 17v1.3965m-2 -3 2 3 2 -3")
          }
          51.6667% {
            opacity:1;
            d:path("M30 17v1.8293m-2 -3 2 3 2 -3")
          }
          52.0833% {
            opacity:1;
            d:path("M30 17v2.2458m-2 -3 2 3 2 -3")
          }
          52.5% {
            opacity:1;
            d:path("M30 17v2.646m-2 -3 2 3 2 -3")
          }
          52.9167% {
            opacity:1;
            d:path("M30 17v3.0298m-2 -3 2 3 2 -3")
          }
          53.3333% {
            opacity:1;
            d:path("M30 17v3.3973m-2 -3 2 3 2 -3")
          }
          53.75% {
            opacity:1;
            d:path("M30 17v3.7485m-2 -3 2 3 2 -3")
          }
          54.1667% {
            opacity:1;
            d:path("M30 17v4.0833m-2 -3 2 3 2 -3")
          }
          54.5833% {
            opacity:1;
            d:path("M30 17v4.4018m-2 -3 2 3 2 -3")
          }
          55% {
            opacity:1;
            d:path("M30 17v4.704m-2 -3 2 3 2 -3")
          }
          55.4167% {
            opacity:1;
            d:path("M30 17v4.9898m-2 -3 2 3 2 -3")
          }
          55.8333% {
            opacity:1;
            d:path("M30 17v5.2593m-2 -3 2 3 2 -3")
          }
          56.25% {
            opacity:1;
            d:path("M30 17v5.5125m-2 -3 2 3 2 -3")
          }
          56.6667% {
            opacity:1;
            d:path("M30 17v5.7493m-2 -3 2 3 2 -3")
          }
          57.0833% {
            opacity:1;
            d:path("M30 17v5.9698m-2 -3 2 3 2 -3")
          }
          57.5% {
            opacity:1;
            d:path("M30 17v6.174m-2 -3 2 3 2 -3")
          }
          57.9167% {
            opacity:1;
            d:path("M30 17v6.3618m-2 -3 2 3 2 -3")
          }
          58.3333% {
            opacity:1;
            d:path("M30 17v6.5333m-2 -3 2 3 2 -3")
          }
          58.75% {
            opacity:1;
            d:path("M30 17v6.6885m-2 -3 2 3 2 -3")
          }
          59.1667% {
            opacity:1;
            d:path("M30 17v6.8273m-2 -3 2 3 2 -3")
          }
          59.5833% {
            opacity:1;
            d:path("M30 17v6.9498m-2 -3 2 3 2 -3")
          }
          60% {
            opacity:1;
            d:path("M30 17v7.056m-2 -3 2 3 2 -3")
          }
          60.4167% {
            opacity:1;
            d:path("M30 17v7.1458m-2 -3 2 3 2 -3")
          }
          60.8333% {
            opacity:1;
            d:path("M30 17v7.2193m-2 -3 2 3 2 -3")
          }
          61.25% {
            opacity:1;
            d:path("M30 17v7.2765m-2 -3 2 3 2 -3")
          }
          61.6667% {
            opacity:1;
            d:path("M30 17v7.3173m-2 -3 2 3 2 -3")
          }
          62.0833% {
            opacity:1;
            d:path("M30 17v7.3418m-2 -3 2 3 2 -3")
          }
          62.5% {
            opacity:1;
            d:path("M30 17v7.35m-2 -3 2 3 2 -3")
          }
          62.9167% {
            opacity:1;
            d:path("M30 17v7.3418m-2 -3 2 3 2 -3")
          }
          63.3333% {
            opacity:1;
            d:path("M30 17v7.3173m-2 -3 2 3 2 -3")
          }
          63.75% {
            opacity:1;
            d:path("M30 17v7.2765m-2 -3 2 3 2 -3")
          }
          64.1667% {
            opacity:1;
            d:path("M30 17v7.2193m-2 -3 2 3 2 -3")
          }
          64.5833% {
            opacity:1;
            d:path("M30 17v7.1458m-2 -3 2 3 2 -3")
          }
          65% {
            opacity:1;
            d:path("M30 17v7.056m-2 -3 2 3 2 -3")
          }
          65.4167% {
            opacity:1;
            d:path("M30 17v6.9498m-2 -3 2 3 2 -3")
          }
          65.8333% {
            opacity:1;
            d:path("M30 17v6.8273m-2 -3 2 3 2 -3")
          }
          66.25% {
            opacity:1;
            d:path("M30 17v6.6885m-2 -3 2 3 2 -3")
          }
          66.6667% {
            opacity:1;
            d:path("M30 17v6.5333m-2 -3 2 3 2 -3")
          }
          67.0833% {
            opacity:1;
            d:path("M30 17v6.3618m-2 -3 2 3 2 -3")
          }
          67.5% {
            opacity:1;
            d:path("M30 17v6.174m-2 -3 2 3 2 -3")
          }
          67.9167% {
            opacity:1;
            d:path("M30 17v5.9698m-2 -3 2 3 2 -3")
          }
          68.3333% {
            opacity:1;
            d:path("M30 17v5.7493m-2 -3 2 3 2 -3")
          }
          68.75% {
            opacity:1;
            d:path("M30 17v5.5125m-2 -3 2 3 2 -3")
          }
          69.1667% {
            opacity:1;
            d:path("M30 17v5.2593m-2 -3 2 3 2 -3")
          }
          69.5833% {
            opacity:1;
            d:path("M30 17v4.9898m-2 -3 2 3 2 -3")
          }
          70% {
            opacity:1;
            d:path("M30 17v4.704m-2 -3 2 3 2 -3")
          }
          70.4167% {
            opacity:1;
            d:path("M30 17v4.4018m-2 -3 2 3 2 -3")
          }
          70.8333% {
            opacity:1;
            d:path("M30 17v4.0833m-2 -3 2 3 2 -3")
          }
          71.25% {
            opacity:1;
            d:path("M30 17v3.7485m-2 -3 2 3 2 -3")
          }
          71.6667% {
            opacity:1;
            d:path("M30 17v3.3973m-2 -3 2 3 2 -3")
          }
          72.0833% {
            opacity:1;
            d:path("M30 17v3.0298m-2 -3 2 3 2 -3")
          }
          72.5% {
            opacity:1;
            d:path("M30 17v2.646m-2 -3 2 3 2 -3")
          }
          72.9167% {
            opacity:1;
            d:path("M30 17v2.2458m-2 -3 2 3 2 -3")
          }
          73.3333% {
            opacity:1;
            d:path("M30 17v1.8293m-2 -3 2 3 2 -3")
          }
          73.75% {
            opacity:1;
            d:path("M30 17v1.3965m-2 -3 2 3 2 -3")
          }
          74.1667% {
            opacity:1;
            d:path("M30 17v0.9473m-2 -3 2 3 2 -3")
          }
          74.5833% {
            opacity:1;
            d:path("M30 17v0.4818m-2 -3 2 3 2 -3")
          }
          75% {
            opacity:0;
            d:path("M30 17v0m-2 3 2 -3 2 3")
          }
          75.4167% {
            opacity:1;
            d:path("M30 17v0.4015m-2 -3 2 3 2 -3")
          }
          75.8333% {
            opacity:1;
            d:path("M30 17v0.7894m-2 -3 2 3 2 -3")
          }
          76.25% {
            opacity:1;
            d:path("M30 17v1.1638m-2 -3 2 3 2 -3")
          }
          76.6667% {
            opacity:1;
            d:path("M30 17v1.5244m-2 -3 2 3 2 -3")
          }
          77.0833% {
            opacity:1;
            d:path("M30 17v1.8715m-2 -3 2 3 2 -3")
          }
          77.5% {
            opacity:1;
            d:path("M30 17v2.205m-2 -3 2 3 2 -3")
          }
          77.9167% {
            opacity:1;
            d:path("M30 17v2.5249m-2 -3 2 3 2 -3")
          }
          78.3333% {
            opacity:1;
            d:path("M30 17v2.8311m-2 -3 2 3 2 -3")
          }
          78.75% {
            opacity:1;
            d:path("M30 17v3.1238m-2 -3 2 3 2 -3")
          }
          79.1667% {
            opacity:1;
            d:path("M30 17v3.4028m-2 -3 2 3 2 -3")
          }
          79.5833% {
            opacity:1;
            d:path("M30 17v3.6682m-2 -3 2 3 2 -3")
          }
          80% {
            opacity:1;
            d:path("M30 17v3.92m-2 -3 2 3 2 -3")
          }
          80.4167% {
            opacity:1;
            d:path("M30 17v4.1582m-2 -3 2 3 2 -3")
          }
          80.8333% {
            opacity:1;
            d:path("M30 17v4.3828m-2 -3 2 3 2 -3")
          }
          81.25% {
            opacity:1;
            d:path("M30 17v4.5938m-2 -3 2 3 2 -3")
          }
          81.6667% {
            opacity:1;
            d:path("M30 17v4.7911m-2 -3 2 3 2 -3")
          }
          82.0833% {
            opacity:1;
            d:path("M30 17v4.9749m-2 -3 2 3 2 -3")
          }
          82.5% {
            opacity:1;
            d:path("M30 17v5.145m-2 -3 2 3 2 -3")
          }
          82.9167% {
            opacity:1;
            d:path("M30 17v5.3015m-2 -3 2 3 2 -3")
          }
          83.3333% {
            opacity:1;
            d:path("M30 17v5.4444m-2 -3 2 3 2 -3")
          }
          83.75% {
            opacity:1;
            d:path("M30 17v5.5738m-2 -3 2 3 2 -3")
          }
          84.1667% {
            opacity:1;
            d:path("M30 17v5.6894m-2 -3 2 3 2 -3")
          }
          84.5833% {
            opacity:1;
            d:path("M30 17v5.7915m-2 -3 2 3 2 -3")
          }
          85% {
            opacity:1;
            d:path("M30 17v5.88m-2 -3 2 3 2 -3")
          }
          85.4167% {
            opacity:1;
            d:path("M30 17v5.9549m-2 -3 2 3 2 -3")
          }
          85.8333% {
            opacity:1;
            d:path("M30 17v6.0161m-2 -3 2 3 2 -3")
          }
          86.25% {
            opacity:1;
            d:path("M30 17v6.0638m-2 -3 2 3 2 -3")
          }
          86.6667% {
            opacity:1;
            d:path("M30 17v6.0978m-2 -3 2 3 2 -3")
          }
          87.0833% {
            opacity:1;
            d:path("M30 17v6.1182m-2 -3 2 3 2 -3")
          }
          87.5% {
            opacity:1;
            d:path("M30 17v6.125m-2 -3 2 3 2 -3")
          }
          87.9167% {
            opacity:1;
            d:path("M30 17v6.1182m-2 -3 2 3 2 -3")
          }
          88.3333% {
            opacity:1;
            d:path("M30 17v6.0978m-2 -3 2 3 2 -3")
          }
          88.75% {
            opacity:1;
            d:path("M30 17v6.0637m-2 -3 2 3 2 -3")
          }
          89.1667% {
            opacity:1;
            d:path("M30 17v6.0161m-2 -3 2 3 2 -3")
          }
          89.5833% {
            opacity:1;
            d:path("M30 17v5.9549m-2 -3 2 3 2 -3")
          }
          90% {
            opacity:1;
            d:path("M30 17v5.88m-2 -3 2 3 2 -3")
          }
          90.4167% {
            opacity:1;
            d:path("M30 17v5.7915m-2 -3 2 3 2 -3")
          }
          90.8333% {
            opacity:1;
            d:path("M30 17v5.6894m-2 -3 2 3 2 -3")
          }
          91.25% {
            opacity:1;
            d:path("M30 17v5.5737m-2 -3 2 3 2 -3")
          }
          91.6667% {
            opacity:1;
            d:path("M30 17v5.4444m-2 -3 2 3 2 -3")
          }
          92.0833% {
            opacity:1;
            d:path("M30 17v5.3015m-2 -3 2 3 2 -3")
          }
          92.5% {
            opacity:1;
            d:path("M30 17v5.145m-2 -3 2 3 2 -3")
          }
          92.9167% {
            opacity:1;
            d:path("M30 17v4.9749m-2 -3 2 3 2 -3")
          }
          93.3333% {
            opacity:1;
            d:path("M30 17v4.7911m-2 -3 2 3 2 -3")
          }
          93.75% {
            opacity:1;
            d:path("M30 17v4.5938m-2 -3 2 3 2 -3")
          }
          94.1667% {
            opacity:1;
            d:path("M30 17v4.3828m-2 -3 2 3 2 -3")
          }
          94.5833% {
            opacity:1;
            d:path("M30 17v4.1582m-2 -3 2 3 2 -3")
          }
          95% {
            opacity:1;
            d:path("M30 17v3.92m-2 -3 2 3 2 -3")
          }
          95.4167% {
            opacity:1;
            d:path("M30 17v3.6682m-2 -3 2 3 2 -3")
          }
          95.8333% {
            opacity:1;
            d:path("M30 17v3.4028m-2 -3 2 3 2 -3")
          }
          96.25% {
            opacity:1;
            d:path("M30 17v3.1237m-2 -3 2 3 2 -3")
          }
          96.6667% {
            opacity:1;
            d:path("M30 17v2.8311m-2 -3 2 3 2 -3")
          }
          97.0833% {
            opacity:1;
            d:path("M30 17v2.5249m-2 -3 2 3 2 -3")
          }
          97.5% {
            opacity:1;
            d:path("M30 17v2.205m-2 -3 2 3 2 -3")
          }
          97.9167% {
            opacity:1;
            d:path("M30 17v1.8715m-2 -3 2 3 2 -3")
          }
          98.3333% {
            opacity:1;
            d:path("M30 17v1.5244m-2 -3 2 3 2 -3")
          }
          98.75% {
            opacity:1;
            d:path("M30 17v1.1637m-2 -3 2 3 2 -3")
          }
          99.1667% {
            opacity:1;
            d:path("M30 17v0.7894m-2 -3 2 3 2 -3")
          }
          99.5833% {
            opacity:1;
            d:path("M30 17v0.4015m-2 -3 2 3 2 -3")
          }
          100% {
            opacity:0;
            d:path("M30 17v0m-2 3 2 -3 2 3")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Omnidirectional Mecanum Drive">
        <defs>
          <pattern id="roller0" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M0 0L8 8" fill="none" stroke="#70edb1" stroke-width="2"/>
          </pattern>
          <clipPath id="wheel0">
            <rect x="-4" y="-9.5" width="8" height="19" rx="3"/>
          </clipPath>
          <pattern id="roller1" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M0 8L8 0" fill="none" stroke="#70edb1" stroke-width="2"/>
          </pattern>
          <clipPath id="wheel1">
            <rect x="-4" y="-9.5" width="8" height="19" rx="3"/>
          </clipPath>
          <pattern id="roller2" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M0 8L8 0" fill="none" stroke="#70edb1" stroke-width="2"/>
          </pattern>
          <clipPath id="wheel2">
            <rect x="-4" y="-9.5" width="8" height="19" rx="3"/>
          </clipPath>
          <pattern id="roller3" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M0 0L8 8" fill="none" stroke="#70edb1" stroke-width="2"/>
          </pattern>
          <clipPath id="wheel3">
            <rect x="-4" y="-9.5" width="8" height="19" rx="3"/>
          </clipPath>
        </defs>
        <path class="ink muted" stroke-dasharray="2 4" d="M49 85H91V50H49Z"/>
        <g class="m-body">
          <rect class="ink paper" x="-17" y="-20" width="34" height="40" rx="5"/>
          <path class="ink muted" d="M-4-10 0-15 4-10"/>
          <path class="ink m-net" d="M-6 0H7m-3-3 3 3-3 3"/>
          <g transform="translate(-22 -17)">
            <rect class="paper" x="-4" y="-9.5" width="8" height="19" rx="3"/>
            <g clip-path="url(#wheel0)">
              <rect class="m-roller0" x="-4" y="-130" width="8" height="260" fill="url(#roller0)"/>
            </g>
            <rect class="ink muted" x="-4" y="-9.5" width="8" height="19" rx="3"/>
          </g>
          <path class="ink m-speed0" d="M-30 -17v-7m-2 3 2 -3 2 3"/>
          <g transform="translate(22 -17)">
            <rect class="paper" x="-4" y="-9.5" width="8" height="19" rx="3"/>
            <g clip-path="url(#wheel1)">
              <rect class="m-roller1" x="-4" y="-130" width="8" height="260" fill="url(#roller1)"/>
            </g>
            <rect class="ink muted" x="-4" y="-9.5" width="8" height="19" rx="3"/>
          </g>
          <path class="ink m-speed1" d="M30 -17v7m-2 -3 2 3 2 -3"/>
          <g transform="translate(-22 17)">
            <rect class="paper" x="-4" y="-9.5" width="8" height="19" rx="3"/>
            <g clip-path="url(#wheel2)">
              <rect class="m-roller2" x="-4" y="-130" width="8" height="260" fill="url(#roller2)"/>
            </g>
            <rect class="ink muted" x="-4" y="-9.5" width="8" height="19" rx="3"/>
          </g>
          <path class="ink m-speed2" d="M-30 17v7m-2 -3 2 3 2 -3"/>
          <g transform="translate(22 17)">
            <rect class="paper" x="-4" y="-9.5" width="8" height="19" rx="3"/>
            <g clip-path="url(#wheel3)">
              <rect class="m-roller3" x="-4" y="-130" width="8" height="260" fill="url(#roller3)"/>
            </g>
            <rect class="ink muted" x="-4" y="-9.5" width="8" height="19" rx="3"/>
          </g>
          <path class="ink m-speed3" d="M30 17v-7m-2 3 2 -3 2 3"/>
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

if (!customElements.get("concept-omnidirectional-mecanum-drive")) {
  customElements.define("concept-omnidirectional-mecanum-drive", ConceptOmnidirectionalMecanumDrive);
}
