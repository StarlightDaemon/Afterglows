// Chlor-Alkali Membrane Cell. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptChlorAlkaliMembraneCell extends HTMLElement {
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
        .cl0 {
          transform:translate(40px,19px);
          animation:cl0 16s linear infinite
        }
        @keyframes cl0 {
          0% {
            transform:translate(37px,75px)
          }
          1% {
            transform:translate(37px,75px)
          }
          2% {
            transform:translate(37px,75px)
          }
          3% {
            transform:translate(37px,75px)
          }
          4% {
            transform:translate(37px,75px)
          }
          5% {
            transform:translate(37px,75px)
          }
          6% {
            transform:translate(37px,75px)
          }
          7% {
            transform:translate(37px,75px)
          }
          8% {
            transform:translate(37px,75px)
          }
          9% {
            transform:translate(37px,75px)
          }
          10% {
            transform:translate(37px,75px)
          }
          11% {
            transform:translate(37px,75px)
          }
          12% {
            transform:translate(37px,75px)
          }
          13% {
            transform:translate(37px,75px)
          }
          14% {
            transform:translate(37px,75px)
          }
          15% {
            transform:translate(37px,75px)
          }
          16% {
            transform:translate(36.3px,74.8px)
          }
          17% {
            transform:translate(35.6px,74.6px)
          }
          18% {
            transform:translate(34.9px,74.4px)
          }
          19% {
            transform:translate(34.2px,74.2px)
          }
          20% {
            transform:translate(33.5px,74px)
          }
          21% {
            transform:translate(32.8px,73.8px)
          }
          22% {
            transform:translate(32.1px,73.6px)
          }
          23% {
            transform:translate(31.4px,73.4px)
          }
          24% {
            transform:translate(30.7px,73.2px)
          }
          25% {
            transform:translate(30px,73px)
          }
          26% {
            transform:translate(30px,73px)
          }
          27% {
            transform:translate(30px,73px)
          }
          28% {
            transform:translate(30px,73px)
          }
          29% {
            transform:translate(30px,73px)
          }
          30% {
            transform:translate(30px,73px)
          }
          31% {
            transform:translate(30px,73px)
          }
          32% {
            transform:translate(30px,73px)
          }
          33% {
            transform:translate(30px,73px)
          }
          34% {
            transform:translate(30px,73px)
          }
          35% {
            transform:translate(30px,73px)
          }
          36% {
            transform:translate(30px,73px)
          }
          37% {
            transform:translate(30px,73px)
          }
          38% {
            transform:translate(30px,73px)
          }
          39% {
            transform:translate(30px,73px)
          }
          40% {
            transform:translate(30px,73px)
          }
          41% {
            transform:translate(30.833px,71px)
          }
          42% {
            transform:translate(31.667px,69px)
          }
          43% {
            transform:translate(32.5px,67px)
          }
          44% {
            transform:translate(33.333px,65px)
          }
          45% {
            transform:translate(34.167px,63px)
          }
          46% {
            transform:translate(35px,61px)
          }
          47% {
            transform:translate(35.833px,59px)
          }
          48% {
            transform:translate(36.667px,57px)
          }
          49% {
            transform:translate(37.5px,55px)
          }
          50% {
            transform:translate(38.333px,53px)
          }
          51% {
            transform:translate(39.167px,51px)
          }
          52% {
            transform:translate(40px,49px)
          }
          53% {
            transform:translate(40px,47px)
          }
          54% {
            transform:translate(40px,45px)
          }
          55% {
            transform:translate(40px,43px)
          }
          56% {
            transform:translate(40px,41px)
          }
          57% {
            transform:translate(40px,39px)
          }
          58% {
            transform:translate(40px,37px)
          }
          59% {
            transform:translate(40px,35px)
          }
          60% {
            transform:translate(40px,33px)
          }
          61% {
            transform:translate(40px,31px)
          }
          62% {
            transform:translate(40px,29px)
          }
          63% {
            transform:translate(40px,27px)
          }
          64% {
            transform:translate(40px,25px)
          }
          65% {
            transform:translate(40px,23px)
          }
          66% {
            transform:translate(40px,21px)
          }
          67% {
            transform:translate(40px,19px)
          }
          68% {
            transform:translate(40px,19px)
          }
          69% {
            transform:translate(40px,19px)
          }
          70% {
            transform:translate(40px,19px)
          }
          71% {
            transform:translate(40px,19px)
          }
          72% {
            transform:translate(40px,19px)
          }
          73% {
            transform:translate(40px,19px)
          }
          74% {
            transform:translate(40px,19px)
          }
          75% {
            transform:translate(40px,19px)
          }
          76% {
            transform:translate(40px,19px)
          }
          77% {
            transform:translate(40px,19px)
          }
          78% {
            transform:translate(40px,19px)
          }
          79% {
            transform:translate(40px,19px)
          }
          80% {
            transform:translate(40px,19px)
          }
          81% {
            transform:translate(40px,19px)
          }
          82% {
            transform:translate(40px,19px)
          }
          83% {
            transform:translate(40px,19px)
          }
          84% {
            transform:translate(40px,19px)
          }
          85% {
            transform:translate(40px,19px)
          }
          86% {
            transform:translate(40px,19px)
          }
          87% {
            transform:translate(40px,19px)
          }
          88% {
            transform:translate(40px,19px)
          }
          89% {
            transform:translate(40px,19px)
          }
          90% {
            transform:translate(40px,19px)
          }
          91% {
            transform:translate(40px,19px)
          }
          92% {
            transform:translate(40px,19px)
          }
          93% {
            transform:translate(40px,19px)
          }
          94% {
            transform:translate(40px,19px)
          }
          95% {
            transform:translate(40px,19px)
          }
          96% {
            transform:translate(40px,19px)
          }
          97% {
            transform:translate(40px,19px)
          }
          98% {
            transform:translate(40px,19px)
          }
          99% {
            transform:translate(40px,19px)
          }
          100% {
            transform:translate(40px,19px)
          }
        }
        .cl1 {
          transform:translate(40px,27px);
          animation:cl1 16s linear infinite
        }
        @keyframes cl1 {
          0% {
            transform:translate(45px,95px)
          }
          1% {
            transform:translate(45px,95px)
          }
          2% {
            transform:translate(45px,95px)
          }
          3% {
            transform:translate(45px,95px)
          }
          4% {
            transform:translate(45px,95px)
          }
          5% {
            transform:translate(45px,95px)
          }
          6% {
            transform:translate(45px,95px)
          }
          7% {
            transform:translate(45px,95px)
          }
          8% {
            transform:translate(45px,95px)
          }
          9% {
            transform:translate(45px,95px)
          }
          10% {
            transform:translate(45px,95px)
          }
          11% {
            transform:translate(45px,95px)
          }
          12% {
            transform:translate(45px,95px)
          }
          13% {
            transform:translate(45px,95px)
          }
          14% {
            transform:translate(45px,95px)
          }
          15% {
            transform:translate(45px,95px)
          }
          16% {
            transform:translate(43.5px,93.9px)
          }
          17% {
            transform:translate(42px,92.8px)
          }
          18% {
            transform:translate(40.5px,91.7px)
          }
          19% {
            transform:translate(39px,90.6px)
          }
          20% {
            transform:translate(37.5px,89.5px)
          }
          21% {
            transform:translate(36px,88.4px)
          }
          22% {
            transform:translate(34.5px,87.3px)
          }
          23% {
            transform:translate(33px,86.2px)
          }
          24% {
            transform:translate(31.5px,85.1px)
          }
          25% {
            transform:translate(30px,84px)
          }
          26% {
            transform:translate(30px,83.7px)
          }
          27% {
            transform:translate(30px,83.4px)
          }
          28% {
            transform:translate(30px,83.1px)
          }
          29% {
            transform:translate(30px,82.8px)
          }
          30% {
            transform:translate(30px,82.5px)
          }
          31% {
            transform:translate(30px,82.2px)
          }
          32% {
            transform:translate(30px,81.9px)
          }
          33% {
            transform:translate(30px,81.6px)
          }
          34% {
            transform:translate(30px,81.3px)
          }
          35% {
            transform:translate(30px,81px)
          }
          36% {
            transform:translate(30px,81px)
          }
          37% {
            transform:translate(30px,81px)
          }
          38% {
            transform:translate(30px,81px)
          }
          39% {
            transform:translate(30px,81px)
          }
          40% {
            transform:translate(30px,81px)
          }
          41% {
            transform:translate(30.833px,79px)
          }
          42% {
            transform:translate(31.667px,77px)
          }
          43% {
            transform:translate(32.5px,75px)
          }
          44% {
            transform:translate(33.333px,73px)
          }
          45% {
            transform:translate(34.167px,71px)
          }
          46% {
            transform:translate(35px,69px)
          }
          47% {
            transform:translate(35.833px,67px)
          }
          48% {
            transform:translate(36.667px,65px)
          }
          49% {
            transform:translate(37.5px,63px)
          }
          50% {
            transform:translate(38.333px,61px)
          }
          51% {
            transform:translate(39.167px,59px)
          }
          52% {
            transform:translate(40px,57px)
          }
          53% {
            transform:translate(40px,55px)
          }
          54% {
            transform:translate(40px,53px)
          }
          55% {
            transform:translate(40px,51px)
          }
          56% {
            transform:translate(40px,49px)
          }
          57% {
            transform:translate(40px,47px)
          }
          58% {
            transform:translate(40px,45px)
          }
          59% {
            transform:translate(40px,43px)
          }
          60% {
            transform:translate(40px,41px)
          }
          61% {
            transform:translate(40px,39px)
          }
          62% {
            transform:translate(40px,37px)
          }
          63% {
            transform:translate(40px,35px)
          }
          64% {
            transform:translate(40px,33px)
          }
          65% {
            transform:translate(40px,31px)
          }
          66% {
            transform:translate(40px,29px)
          }
          67% {
            transform:translate(40px,27px)
          }
          68% {
            transform:translate(40px,27px)
          }
          69% {
            transform:translate(40px,27px)
          }
          70% {
            transform:translate(40px,27px)
          }
          71% {
            transform:translate(40px,27px)
          }
          72% {
            transform:translate(40px,27px)
          }
          73% {
            transform:translate(40px,27px)
          }
          74% {
            transform:translate(40px,27px)
          }
          75% {
            transform:translate(40px,27px)
          }
          76% {
            transform:translate(40px,27px)
          }
          77% {
            transform:translate(40px,27px)
          }
          78% {
            transform:translate(40px,27px)
          }
          79% {
            transform:translate(40px,27px)
          }
          80% {
            transform:translate(40px,27px)
          }
          81% {
            transform:translate(40px,27px)
          }
          82% {
            transform:translate(40px,27px)
          }
          83% {
            transform:translate(40px,27px)
          }
          84% {
            transform:translate(40px,27px)
          }
          85% {
            transform:translate(40px,27px)
          }
          86% {
            transform:translate(40px,27px)
          }
          87% {
            transform:translate(40px,27px)
          }
          88% {
            transform:translate(40px,27px)
          }
          89% {
            transform:translate(40px,27px)
          }
          90% {
            transform:translate(40px,27px)
          }
          91% {
            transform:translate(40px,27px)
          }
          92% {
            transform:translate(40px,27px)
          }
          93% {
            transform:translate(40px,27px)
          }
          94% {
            transform:translate(40px,27px)
          }
          95% {
            transform:translate(40px,27px)
          }
          96% {
            transform:translate(40px,27px)
          }
          97% {
            transform:translate(40px,27px)
          }
          98% {
            transform:translate(40px,27px)
          }
          99% {
            transform:translate(40px,27px)
          }
          100% {
            transform:translate(40px,27px)
          }
        }
        .na0 {
          transform:translate(82px,90px);
          animation:na0 16s linear infinite
        }
        @keyframes na0 {
          0% {
            transform:translate(50px,76px)
          }
          1% {
            transform:translate(50px,76px)
          }
          2% {
            transform:translate(50px,76px)
          }
          3% {
            transform:translate(50px,76px)
          }
          4% {
            transform:translate(50px,76px)
          }
          5% {
            transform:translate(50px,76px)
          }
          6% {
            transform:translate(50px,76px)
          }
          7% {
            transform:translate(50px,76px)
          }
          8% {
            transform:translate(50px,76px)
          }
          9% {
            transform:translate(50px,76px)
          }
          10% {
            transform:translate(50px,76px)
          }
          11% {
            transform:translate(50px,76px)
          }
          12% {
            transform:translate(50px,76px)
          }
          13% {
            transform:translate(50px,76px)
          }
          14% {
            transform:translate(50px,76px)
          }
          15% {
            transform:translate(50px,76px)
          }
          16% {
            transform:translate(50px,76px)
          }
          17% {
            transform:translate(50px,76px)
          }
          18% {
            transform:translate(50px,76px)
          }
          19% {
            transform:translate(50px,76px)
          }
          20% {
            transform:translate(50px,76px)
          }
          21% {
            transform:translate(51.364px,76px)
          }
          22% {
            transform:translate(52.727px,76px)
          }
          23% {
            transform:translate(54.091px,76px)
          }
          24% {
            transform:translate(55.455px,76px)
          }
          25% {
            transform:translate(56.818px,76px)
          }
          26% {
            transform:translate(58.182px,76px)
          }
          27% {
            transform:translate(59.545px,76px)
          }
          28% {
            transform:translate(60.909px,76px)
          }
          29% {
            transform:translate(62.273px,76px)
          }
          30% {
            transform:translate(63.636px,76px)
          }
          31% {
            transform:translate(65px,76px)
          }
          32% {
            transform:translate(66.364px,76px)
          }
          33% {
            transform:translate(67.727px,76px)
          }
          34% {
            transform:translate(69.091px,76px)
          }
          35% {
            transform:translate(70.455px,76px)
          }
          36% {
            transform:translate(71.818px,76px)
          }
          37% {
            transform:translate(73.182px,76px)
          }
          38% {
            transform:translate(74.545px,76px)
          }
          39% {
            transform:translate(75.909px,76px)
          }
          40% {
            transform:translate(77.273px,76px)
          }
          41% {
            transform:translate(78.636px,76px)
          }
          42% {
            transform:translate(80px,76px)
          }
          43% {
            transform:translate(80.2px,77.4px)
          }
          44% {
            transform:translate(80.4px,78.8px)
          }
          45% {
            transform:translate(80.6px,80.2px)
          }
          46% {
            transform:translate(80.8px,81.6px)
          }
          47% {
            transform:translate(81px,83px)
          }
          48% {
            transform:translate(81.2px,84.4px)
          }
          49% {
            transform:translate(81.4px,85.8px)
          }
          50% {
            transform:translate(81.6px,87.2px)
          }
          51% {
            transform:translate(81.8px,88.6px)
          }
          52% {
            transform:translate(82px,90px)
          }
          53% {
            transform:translate(82px,90px)
          }
          54% {
            transform:translate(82px,90px)
          }
          55% {
            transform:translate(82px,90px)
          }
          56% {
            transform:translate(82px,90px)
          }
          57% {
            transform:translate(82px,90px)
          }
          58% {
            transform:translate(82px,90px)
          }
          59% {
            transform:translate(82px,90px)
          }
          60% {
            transform:translate(82px,90px)
          }
          61% {
            transform:translate(82px,90px)
          }
          62% {
            transform:translate(82px,90px)
          }
          63% {
            transform:translate(82px,90px)
          }
          64% {
            transform:translate(82px,90px)
          }
          65% {
            transform:translate(82px,90px)
          }
          66% {
            transform:translate(82px,90px)
          }
          67% {
            transform:translate(82px,90px)
          }
          68% {
            transform:translate(82px,90px)
          }
          69% {
            transform:translate(82px,90px)
          }
          70% {
            transform:translate(82px,90px)
          }
          71% {
            transform:translate(82px,90px)
          }
          72% {
            transform:translate(82px,90px)
          }
          73% {
            transform:translate(82px,90px)
          }
          74% {
            transform:translate(82px,90px)
          }
          75% {
            transform:translate(82px,90px)
          }
          76% {
            transform:translate(82px,90px)
          }
          77% {
            transform:translate(82px,90px)
          }
          78% {
            transform:translate(82px,90px)
          }
          79% {
            transform:translate(82px,90px)
          }
          80% {
            transform:translate(82px,90px)
          }
          81% {
            transform:translate(82px,90px)
          }
          82% {
            transform:translate(82px,90px)
          }
          83% {
            transform:translate(82px,90px)
          }
          84% {
            transform:translate(82px,90px)
          }
          85% {
            transform:translate(82px,90px)
          }
          86% {
            transform:translate(82px,90px)
          }
          87% {
            transform:translate(82px,90px)
          }
          88% {
            transform:translate(82px,90px)
          }
          89% {
            transform:translate(82px,90px)
          }
          90% {
            transform:translate(82px,90px)
          }
          91% {
            transform:translate(82px,90px)
          }
          92% {
            transform:translate(82px,90px)
          }
          93% {
            transform:translate(82px,90px)
          }
          94% {
            transform:translate(82px,90px)
          }
          95% {
            transform:translate(82px,90px)
          }
          96% {
            transform:translate(82px,90px)
          }
          97% {
            transform:translate(82px,90px)
          }
          98% {
            transform:translate(82px,90px)
          }
          99% {
            transform:translate(82px,90px)
          }
          100% {
            transform:translate(82px,90px)
          }
        }
        .na1 {
          transform:translate(88px,110px);
          animation:na1 16s linear infinite
        }
        @keyframes na1 {
          0% {
            transform:translate(56px,96px)
          }
          1% {
            transform:translate(56px,96px)
          }
          2% {
            transform:translate(56px,96px)
          }
          3% {
            transform:translate(56px,96px)
          }
          4% {
            transform:translate(56px,96px)
          }
          5% {
            transform:translate(56px,96px)
          }
          6% {
            transform:translate(56px,96px)
          }
          7% {
            transform:translate(56px,96px)
          }
          8% {
            transform:translate(56px,96px)
          }
          9% {
            transform:translate(56px,96px)
          }
          10% {
            transform:translate(56px,96px)
          }
          11% {
            transform:translate(56px,96px)
          }
          12% {
            transform:translate(56px,96px)
          }
          13% {
            transform:translate(56px,96px)
          }
          14% {
            transform:translate(56px,96px)
          }
          15% {
            transform:translate(56px,96px)
          }
          16% {
            transform:translate(56px,96px)
          }
          17% {
            transform:translate(56px,96px)
          }
          18% {
            transform:translate(56px,96px)
          }
          19% {
            transform:translate(56px,96px)
          }
          20% {
            transform:translate(56px,96px)
          }
          21% {
            transform:translate(57.091px,96px)
          }
          22% {
            transform:translate(58.182px,96px)
          }
          23% {
            transform:translate(59.273px,96px)
          }
          24% {
            transform:translate(60.364px,96px)
          }
          25% {
            transform:translate(61.455px,96px)
          }
          26% {
            transform:translate(62.545px,96px)
          }
          27% {
            transform:translate(63.636px,96px)
          }
          28% {
            transform:translate(64.727px,96px)
          }
          29% {
            transform:translate(65.818px,96px)
          }
          30% {
            transform:translate(66.909px,96px)
          }
          31% {
            transform:translate(68px,96px)
          }
          32% {
            transform:translate(69.091px,96px)
          }
          33% {
            transform:translate(70.182px,96px)
          }
          34% {
            transform:translate(71.273px,96px)
          }
          35% {
            transform:translate(72.364px,96px)
          }
          36% {
            transform:translate(73.455px,96px)
          }
          37% {
            transform:translate(74.545px,96px)
          }
          38% {
            transform:translate(75.636px,96px)
          }
          39% {
            transform:translate(76.727px,96px)
          }
          40% {
            transform:translate(77.818px,96px)
          }
          41% {
            transform:translate(78.909px,96px)
          }
          42% {
            transform:translate(80px,96px)
          }
          43% {
            transform:translate(80.8px,97.4px)
          }
          44% {
            transform:translate(81.6px,98.8px)
          }
          45% {
            transform:translate(82.4px,100.2px)
          }
          46% {
            transform:translate(83.2px,101.6px)
          }
          47% {
            transform:translate(84px,103px)
          }
          48% {
            transform:translate(84.8px,104.4px)
          }
          49% {
            transform:translate(85.6px,105.8px)
          }
          50% {
            transform:translate(86.4px,107.2px)
          }
          51% {
            transform:translate(87.2px,108.6px)
          }
          52% {
            transform:translate(88px,110px)
          }
          53% {
            transform:translate(88px,110px)
          }
          54% {
            transform:translate(88px,110px)
          }
          55% {
            transform:translate(88px,110px)
          }
          56% {
            transform:translate(88px,110px)
          }
          57% {
            transform:translate(88px,110px)
          }
          58% {
            transform:translate(88px,110px)
          }
          59% {
            transform:translate(88px,110px)
          }
          60% {
            transform:translate(88px,110px)
          }
          61% {
            transform:translate(88px,110px)
          }
          62% {
            transform:translate(88px,110px)
          }
          63% {
            transform:translate(88px,110px)
          }
          64% {
            transform:translate(88px,110px)
          }
          65% {
            transform:translate(88px,110px)
          }
          66% {
            transform:translate(88px,110px)
          }
          67% {
            transform:translate(88px,110px)
          }
          68% {
            transform:translate(88px,110px)
          }
          69% {
            transform:translate(88px,110px)
          }
          70% {
            transform:translate(88px,110px)
          }
          71% {
            transform:translate(88px,110px)
          }
          72% {
            transform:translate(88px,110px)
          }
          73% {
            transform:translate(88px,110px)
          }
          74% {
            transform:translate(88px,110px)
          }
          75% {
            transform:translate(88px,110px)
          }
          76% {
            transform:translate(88px,110px)
          }
          77% {
            transform:translate(88px,110px)
          }
          78% {
            transform:translate(88px,110px)
          }
          79% {
            transform:translate(88px,110px)
          }
          80% {
            transform:translate(88px,110px)
          }
          81% {
            transform:translate(88px,110px)
          }
          82% {
            transform:translate(88px,110px)
          }
          83% {
            transform:translate(88px,110px)
          }
          84% {
            transform:translate(88px,110px)
          }
          85% {
            transform:translate(88px,110px)
          }
          86% {
            transform:translate(88px,110px)
          }
          87% {
            transform:translate(88px,110px)
          }
          88% {
            transform:translate(88px,110px)
          }
          89% {
            transform:translate(88px,110px)
          }
          90% {
            transform:translate(88px,110px)
          }
          91% {
            transform:translate(88px,110px)
          }
          92% {
            transform:translate(88px,110px)
          }
          93% {
            transform:translate(88px,110px)
          }
          94% {
            transform:translate(88px,110px)
          }
          95% {
            transform:translate(88px,110px)
          }
          96% {
            transform:translate(88px,110px)
          }
          97% {
            transform:translate(88px,110px)
          }
          98% {
            transform:translate(88px,110px)
          }
          99% {
            transform:translate(88px,110px)
          }
          100% {
            transform:translate(88px,110px)
          }
        }
        .o0 {
          transform:translate(88px,68px);
          animation:o0 16s linear infinite
        }
        @keyframes o0 {
          0% {
            transform:translate(97px,73px)
          }
          1% {
            transform:translate(97px,73px)
          }
          2% {
            transform:translate(97px,73px)
          }
          3% {
            transform:translate(97px,73px)
          }
          4% {
            transform:translate(97px,73px)
          }
          5% {
            transform:translate(97px,73px)
          }
          6% {
            transform:translate(97px,73px)
          }
          7% {
            transform:translate(97px,73px)
          }
          8% {
            transform:translate(97px,73px)
          }
          9% {
            transform:translate(97px,73px)
          }
          10% {
            transform:translate(97px,73px)
          }
          11% {
            transform:translate(97px,73px)
          }
          12% {
            transform:translate(97px,73px)
          }
          13% {
            transform:translate(97px,73px)
          }
          14% {
            transform:translate(97px,73px)
          }
          15% {
            transform:translate(97px,73px)
          }
          16% {
            transform:translate(97.7px,73px)
          }
          17% {
            transform:translate(98.4px,73px)
          }
          18% {
            transform:translate(99.1px,73px)
          }
          19% {
            transform:translate(99.8px,73px)
          }
          20% {
            transform:translate(100.5px,73px)
          }
          21% {
            transform:translate(101.2px,73px)
          }
          22% {
            transform:translate(101.9px,73px)
          }
          23% {
            transform:translate(102.6px,73px)
          }
          24% {
            transform:translate(103.3px,73px)
          }
          25% {
            transform:translate(104px,73px)
          }
          26% {
            transform:translate(102.933px,72.667px)
          }
          27% {
            transform:translate(101.867px,72.333px)
          }
          28% {
            transform:translate(100.8px,72px)
          }
          29% {
            transform:translate(99.733px,71.667px)
          }
          30% {
            transform:translate(98.667px,71.333px)
          }
          31% {
            transform:translate(97.6px,71px)
          }
          32% {
            transform:translate(96.533px,70.667px)
          }
          33% {
            transform:translate(95.467px,70.333px)
          }
          34% {
            transform:translate(94.4px,70px)
          }
          35% {
            transform:translate(93.333px,69.667px)
          }
          36% {
            transform:translate(92.267px,69.333px)
          }
          37% {
            transform:translate(91.2px,69px)
          }
          38% {
            transform:translate(90.133px,68.667px)
          }
          39% {
            transform:translate(89.067px,68.333px)
          }
          40% {
            transform:translate(88px,68px)
          }
          41% {
            transform:translate(88px,68px)
          }
          42% {
            transform:translate(88px,68px)
          }
          43% {
            transform:translate(88px,68px)
          }
          44% {
            transform:translate(88px,68px)
          }
          45% {
            transform:translate(88px,68px)
          }
          46% {
            transform:translate(88px,68px)
          }
          47% {
            transform:translate(88px,68px)
          }
          48% {
            transform:translate(88px,68px)
          }
          49% {
            transform:translate(88px,68px)
          }
          50% {
            transform:translate(88px,68px)
          }
          51% {
            transform:translate(88px,68px)
          }
          52% {
            transform:translate(88px,68px)
          }
          53% {
            transform:translate(88px,68px)
          }
          54% {
            transform:translate(88px,68px)
          }
          55% {
            transform:translate(88px,68px)
          }
          56% {
            transform:translate(88px,68px)
          }
          57% {
            transform:translate(88px,68px)
          }
          58% {
            transform:translate(88px,68px)
          }
          59% {
            transform:translate(88px,68px)
          }
          60% {
            transform:translate(88px,68px)
          }
          61% {
            transform:translate(88px,68px)
          }
          62% {
            transform:translate(88px,68px)
          }
          63% {
            transform:translate(88px,68px)
          }
          64% {
            transform:translate(88px,68px)
          }
          65% {
            transform:translate(88px,68px)
          }
          66% {
            transform:translate(88px,68px)
          }
          67% {
            transform:translate(88px,68px)
          }
          68% {
            transform:translate(88px,68px)
          }
          69% {
            transform:translate(88px,68px)
          }
          70% {
            transform:translate(88px,68px)
          }
          71% {
            transform:translate(88px,68px)
          }
          72% {
            transform:translate(88px,68px)
          }
          73% {
            transform:translate(88px,68px)
          }
          74% {
            transform:translate(88px,68px)
          }
          75% {
            transform:translate(88px,68px)
          }
          76% {
            transform:translate(88px,68px)
          }
          77% {
            transform:translate(88px,68px)
          }
          78% {
            transform:translate(88px,68px)
          }
          79% {
            transform:translate(88px,68px)
          }
          80% {
            transform:translate(88px,68px)
          }
          81% {
            transform:translate(88px,68px)
          }
          82% {
            transform:translate(88px,68px)
          }
          83% {
            transform:translate(88px,68px)
          }
          84% {
            transform:translate(88px,68px)
          }
          85% {
            transform:translate(88px,68px)
          }
          86% {
            transform:translate(88px,68px)
          }
          87% {
            transform:translate(88px,68px)
          }
          88% {
            transform:translate(88px,68px)
          }
          89% {
            transform:translate(88px,68px)
          }
          90% {
            transform:translate(88px,68px)
          }
          91% {
            transform:translate(88px,68px)
          }
          92% {
            transform:translate(88px,68px)
          }
          93% {
            transform:translate(88px,68px)
          }
          94% {
            transform:translate(88px,68px)
          }
          95% {
            transform:translate(88px,68px)
          }
          96% {
            transform:translate(88px,68px)
          }
          97% {
            transform:translate(88px,68px)
          }
          98% {
            transform:translate(88px,68px)
          }
          99% {
            transform:translate(88px,68px)
          }
          100% {
            transform:translate(88px,68px)
          }
        }
        .o1 {
          transform:translate(94px,103px);
          animation:o1 16s linear infinite
        }
        @keyframes o1 {
          0% {
            transform:translate(97px,98px)
          }
          1% {
            transform:translate(97px,98px)
          }
          2% {
            transform:translate(97px,98px)
          }
          3% {
            transform:translate(97px,98px)
          }
          4% {
            transform:translate(97px,98px)
          }
          5% {
            transform:translate(97px,98px)
          }
          6% {
            transform:translate(97px,98px)
          }
          7% {
            transform:translate(97px,98px)
          }
          8% {
            transform:translate(97px,98px)
          }
          9% {
            transform:translate(97px,98px)
          }
          10% {
            transform:translate(97px,98px)
          }
          11% {
            transform:translate(97px,98px)
          }
          12% {
            transform:translate(97px,98px)
          }
          13% {
            transform:translate(97px,98px)
          }
          14% {
            transform:translate(97px,98px)
          }
          15% {
            transform:translate(97px,98px)
          }
          16% {
            transform:translate(97.7px,98px)
          }
          17% {
            transform:translate(98.4px,98px)
          }
          18% {
            transform:translate(99.1px,98px)
          }
          19% {
            transform:translate(99.8px,98px)
          }
          20% {
            transform:translate(100.5px,98px)
          }
          21% {
            transform:translate(101.2px,98px)
          }
          22% {
            transform:translate(101.9px,98px)
          }
          23% {
            transform:translate(102.6px,98px)
          }
          24% {
            transform:translate(103.3px,98px)
          }
          25% {
            transform:translate(104px,98px)
          }
          26% {
            transform:translate(103.333px,98.333px)
          }
          27% {
            transform:translate(102.667px,98.667px)
          }
          28% {
            transform:translate(102px,99px)
          }
          29% {
            transform:translate(101.333px,99.333px)
          }
          30% {
            transform:translate(100.667px,99.667px)
          }
          31% {
            transform:translate(100px,100px)
          }
          32% {
            transform:translate(99.333px,100.333px)
          }
          33% {
            transform:translate(98.667px,100.667px)
          }
          34% {
            transform:translate(98px,101px)
          }
          35% {
            transform:translate(97.333px,101.333px)
          }
          36% {
            transform:translate(96.667px,101.667px)
          }
          37% {
            transform:translate(96px,102px)
          }
          38% {
            transform:translate(95.333px,102.333px)
          }
          39% {
            transform:translate(94.667px,102.667px)
          }
          40% {
            transform:translate(94px,103px)
          }
          41% {
            transform:translate(94px,103px)
          }
          42% {
            transform:translate(94px,103px)
          }
          43% {
            transform:translate(94px,103px)
          }
          44% {
            transform:translate(94px,103px)
          }
          45% {
            transform:translate(94px,103px)
          }
          46% {
            transform:translate(94px,103px)
          }
          47% {
            transform:translate(94px,103px)
          }
          48% {
            transform:translate(94px,103px)
          }
          49% {
            transform:translate(94px,103px)
          }
          50% {
            transform:translate(94px,103px)
          }
          51% {
            transform:translate(94px,103px)
          }
          52% {
            transform:translate(94px,103px)
          }
          53% {
            transform:translate(94px,103px)
          }
          54% {
            transform:translate(94px,103px)
          }
          55% {
            transform:translate(94px,103px)
          }
          56% {
            transform:translate(94px,103px)
          }
          57% {
            transform:translate(94px,103px)
          }
          58% {
            transform:translate(94px,103px)
          }
          59% {
            transform:translate(94px,103px)
          }
          60% {
            transform:translate(94px,103px)
          }
          61% {
            transform:translate(94px,103px)
          }
          62% {
            transform:translate(94px,103px)
          }
          63% {
            transform:translate(94px,103px)
          }
          64% {
            transform:translate(94px,103px)
          }
          65% {
            transform:translate(94px,103px)
          }
          66% {
            transform:translate(94px,103px)
          }
          67% {
            transform:translate(94px,103px)
          }
          68% {
            transform:translate(94px,103px)
          }
          69% {
            transform:translate(94px,103px)
          }
          70% {
            transform:translate(94px,103px)
          }
          71% {
            transform:translate(94px,103px)
          }
          72% {
            transform:translate(94px,103px)
          }
          73% {
            transform:translate(94px,103px)
          }
          74% {
            transform:translate(94px,103px)
          }
          75% {
            transform:translate(94px,103px)
          }
          76% {
            transform:translate(94px,103px)
          }
          77% {
            transform:translate(94px,103px)
          }
          78% {
            transform:translate(94px,103px)
          }
          79% {
            transform:translate(94px,103px)
          }
          80% {
            transform:translate(94px,103px)
          }
          81% {
            transform:translate(94px,103px)
          }
          82% {
            transform:translate(94px,103px)
          }
          83% {
            transform:translate(94px,103px)
          }
          84% {
            transform:translate(94px,103px)
          }
          85% {
            transform:translate(94px,103px)
          }
          86% {
            transform:translate(94px,103px)
          }
          87% {
            transform:translate(94px,103px)
          }
          88% {
            transform:translate(94px,103px)
          }
          89% {
            transform:translate(94px,103px)
          }
          90% {
            transform:translate(94px,103px)
          }
          91% {
            transform:translate(94px,103px)
          }
          92% {
            transform:translate(94px,103px)
          }
          93% {
            transform:translate(94px,103px)
          }
          94% {
            transform:translate(94px,103px)
          }
          95% {
            transform:translate(94px,103px)
          }
          96% {
            transform:translate(94px,103px)
          }
          97% {
            transform:translate(94px,103px)
          }
          98% {
            transform:translate(94px,103px)
          }
          99% {
            transform:translate(94px,103px)
          }
          100% {
            transform:translate(94px,103px)
          }
        }
        .h0 {
          transform:translate(82px,64px);
          animation:h0 16s linear infinite
        }
        @keyframes h0 {
          0% {
            transform:translate(91px,69px)
          }
          1% {
            transform:translate(91px,69px)
          }
          2% {
            transform:translate(91px,69px)
          }
          3% {
            transform:translate(91px,69px)
          }
          4% {
            transform:translate(91px,69px)
          }
          5% {
            transform:translate(91px,69px)
          }
          6% {
            transform:translate(91px,69px)
          }
          7% {
            transform:translate(91px,69px)
          }
          8% {
            transform:translate(91px,69px)
          }
          9% {
            transform:translate(91px,69px)
          }
          10% {
            transform:translate(91px,69px)
          }
          11% {
            transform:translate(91px,69px)
          }
          12% {
            transform:translate(91px,69px)
          }
          13% {
            transform:translate(91px,69px)
          }
          14% {
            transform:translate(91px,69px)
          }
          15% {
            transform:translate(91px,69px)
          }
          16% {
            transform:translate(91.7px,69px)
          }
          17% {
            transform:translate(92.4px,69px)
          }
          18% {
            transform:translate(93.1px,69px)
          }
          19% {
            transform:translate(93.8px,69px)
          }
          20% {
            transform:translate(94.5px,69px)
          }
          21% {
            transform:translate(95.2px,69px)
          }
          22% {
            transform:translate(95.9px,69px)
          }
          23% {
            transform:translate(96.6px,69px)
          }
          24% {
            transform:translate(97.3px,69px)
          }
          25% {
            transform:translate(98px,69px)
          }
          26% {
            transform:translate(96.933px,68.667px)
          }
          27% {
            transform:translate(95.867px,68.333px)
          }
          28% {
            transform:translate(94.8px,68px)
          }
          29% {
            transform:translate(93.733px,67.667px)
          }
          30% {
            transform:translate(92.667px,67.333px)
          }
          31% {
            transform:translate(91.6px,67px)
          }
          32% {
            transform:translate(90.533px,66.667px)
          }
          33% {
            transform:translate(89.467px,66.333px)
          }
          34% {
            transform:translate(88.4px,66px)
          }
          35% {
            transform:translate(87.333px,65.667px)
          }
          36% {
            transform:translate(86.267px,65.333px)
          }
          37% {
            transform:translate(85.2px,65px)
          }
          38% {
            transform:translate(84.133px,64.667px)
          }
          39% {
            transform:translate(83.067px,64.333px)
          }
          40% {
            transform:translate(82px,64px)
          }
          41% {
            transform:translate(82px,64px)
          }
          42% {
            transform:translate(82px,64px)
          }
          43% {
            transform:translate(82px,64px)
          }
          44% {
            transform:translate(82px,64px)
          }
          45% {
            transform:translate(82px,64px)
          }
          46% {
            transform:translate(82px,64px)
          }
          47% {
            transform:translate(82px,64px)
          }
          48% {
            transform:translate(82px,64px)
          }
          49% {
            transform:translate(82px,64px)
          }
          50% {
            transform:translate(82px,64px)
          }
          51% {
            transform:translate(82px,64px)
          }
          52% {
            transform:translate(82px,64px)
          }
          53% {
            transform:translate(82px,64px)
          }
          54% {
            transform:translate(82px,64px)
          }
          55% {
            transform:translate(82px,64px)
          }
          56% {
            transform:translate(82px,64px)
          }
          57% {
            transform:translate(82px,64px)
          }
          58% {
            transform:translate(82px,64px)
          }
          59% {
            transform:translate(82px,64px)
          }
          60% {
            transform:translate(82px,64px)
          }
          61% {
            transform:translate(82px,64px)
          }
          62% {
            transform:translate(82px,64px)
          }
          63% {
            transform:translate(82px,64px)
          }
          64% {
            transform:translate(82px,64px)
          }
          65% {
            transform:translate(82px,64px)
          }
          66% {
            transform:translate(82px,64px)
          }
          67% {
            transform:translate(82px,64px)
          }
          68% {
            transform:translate(82px,64px)
          }
          69% {
            transform:translate(82px,64px)
          }
          70% {
            transform:translate(82px,64px)
          }
          71% {
            transform:translate(82px,64px)
          }
          72% {
            transform:translate(82px,64px)
          }
          73% {
            transform:translate(82px,64px)
          }
          74% {
            transform:translate(82px,64px)
          }
          75% {
            transform:translate(82px,64px)
          }
          76% {
            transform:translate(82px,64px)
          }
          77% {
            transform:translate(82px,64px)
          }
          78% {
            transform:translate(82px,64px)
          }
          79% {
            transform:translate(82px,64px)
          }
          80% {
            transform:translate(82px,64px)
          }
          81% {
            transform:translate(82px,64px)
          }
          82% {
            transform:translate(82px,64px)
          }
          83% {
            transform:translate(82px,64px)
          }
          84% {
            transform:translate(82px,64px)
          }
          85% {
            transform:translate(82px,64px)
          }
          86% {
            transform:translate(82px,64px)
          }
          87% {
            transform:translate(82px,64px)
          }
          88% {
            transform:translate(82px,64px)
          }
          89% {
            transform:translate(82px,64px)
          }
          90% {
            transform:translate(82px,64px)
          }
          91% {
            transform:translate(82px,64px)
          }
          92% {
            transform:translate(82px,64px)
          }
          93% {
            transform:translate(82px,64px)
          }
          94% {
            transform:translate(82px,64px)
          }
          95% {
            transform:translate(82px,64px)
          }
          96% {
            transform:translate(82px,64px)
          }
          97% {
            transform:translate(82px,64px)
          }
          98% {
            transform:translate(82px,64px)
          }
          99% {
            transform:translate(82px,64px)
          }
          100% {
            transform:translate(82px,64px)
          }
        }
        .h1 {
          transform:translate(101px,20.5px);
          animation:h1 16s linear infinite
        }
        @keyframes h1 {
          0% {
            transform:translate(102px,69px)
          }
          1% {
            transform:translate(102px,69px)
          }
          2% {
            transform:translate(102px,69px)
          }
          3% {
            transform:translate(102px,69px)
          }
          4% {
            transform:translate(102px,69px)
          }
          5% {
            transform:translate(102px,69px)
          }
          6% {
            transform:translate(102px,69px)
          }
          7% {
            transform:translate(102px,69px)
          }
          8% {
            transform:translate(102px,69px)
          }
          9% {
            transform:translate(102px,69px)
          }
          10% {
            transform:translate(102px,69px)
          }
          11% {
            transform:translate(102px,69px)
          }
          12% {
            transform:translate(102px,69px)
          }
          13% {
            transform:translate(102px,69px)
          }
          14% {
            transform:translate(102px,69px)
          }
          15% {
            transform:translate(102px,69px)
          }
          16% {
            transform:translate(102.7px,69px)
          }
          17% {
            transform:translate(103.4px,69px)
          }
          18% {
            transform:translate(104.1px,69px)
          }
          19% {
            transform:translate(104.8px,69px)
          }
          20% {
            transform:translate(105.5px,69px)
          }
          21% {
            transform:translate(106.2px,69px)
          }
          22% {
            transform:translate(106.9px,69px)
          }
          23% {
            transform:translate(107.6px,69px)
          }
          24% {
            transform:translate(108.3px,69px)
          }
          25% {
            transform:translate(109px,69px)
          }
          26% {
            transform:translate(109px,69.7px)
          }
          27% {
            transform:translate(109px,70.4px)
          }
          28% {
            transform:translate(109px,71.1px)
          }
          29% {
            transform:translate(109px,71.8px)
          }
          30% {
            transform:translate(109px,72.5px)
          }
          31% {
            transform:translate(109px,73.2px)
          }
          32% {
            transform:translate(109px,73.9px)
          }
          33% {
            transform:translate(109px,74.6px)
          }
          34% {
            transform:translate(109px,75.3px)
          }
          35% {
            transform:translate(109px,76px)
          }
          36% {
            transform:translate(109px,76px)
          }
          37% {
            transform:translate(109px,76px)
          }
          38% {
            transform:translate(109px,76px)
          }
          39% {
            transform:translate(109px,76px)
          }
          40% {
            transform:translate(109px,76px)
          }
          41% {
            transform:translate(107.6px,72.9px)
          }
          42% {
            transform:translate(106.2px,69.8px)
          }
          43% {
            transform:translate(104.8px,66.7px)
          }
          44% {
            transform:translate(103.4px,63.6px)
          }
          45% {
            transform:translate(102px,60.5px)
          }
          46% {
            transform:translate(101.955px,58.682px)
          }
          47% {
            transform:translate(101.909px,56.864px)
          }
          48% {
            transform:translate(101.864px,55.045px)
          }
          49% {
            transform:translate(101.818px,53.227px)
          }
          50% {
            transform:translate(101.773px,51.409px)
          }
          51% {
            transform:translate(101.727px,49.591px)
          }
          52% {
            transform:translate(101.682px,47.773px)
          }
          53% {
            transform:translate(101.636px,45.955px)
          }
          54% {
            transform:translate(101.591px,44.136px)
          }
          55% {
            transform:translate(101.545px,42.318px)
          }
          56% {
            transform:translate(101.5px,40.5px)
          }
          57% {
            transform:translate(101.455px,38.682px)
          }
          58% {
            transform:translate(101.409px,36.864px)
          }
          59% {
            transform:translate(101.364px,35.045px)
          }
          60% {
            transform:translate(101.318px,33.227px)
          }
          61% {
            transform:translate(101.273px,31.409px)
          }
          62% {
            transform:translate(101.227px,29.591px)
          }
          63% {
            transform:translate(101.182px,27.773px)
          }
          64% {
            transform:translate(101.136px,25.955px)
          }
          65% {
            transform:translate(101.091px,24.136px)
          }
          66% {
            transform:translate(101.045px,22.318px)
          }
          67% {
            transform:translate(101px,20.5px)
          }
          68% {
            transform:translate(101px,20.5px)
          }
          69% {
            transform:translate(101px,20.5px)
          }
          70% {
            transform:translate(101px,20.5px)
          }
          71% {
            transform:translate(101px,20.5px)
          }
          72% {
            transform:translate(101px,20.5px)
          }
          73% {
            transform:translate(101px,20.5px)
          }
          74% {
            transform:translate(101px,20.5px)
          }
          75% {
            transform:translate(101px,20.5px)
          }
          76% {
            transform:translate(101px,20.5px)
          }
          77% {
            transform:translate(101px,20.5px)
          }
          78% {
            transform:translate(101px,20.5px)
          }
          79% {
            transform:translate(101px,20.5px)
          }
          80% {
            transform:translate(101px,20.5px)
          }
          81% {
            transform:translate(101px,20.5px)
          }
          82% {
            transform:translate(101px,20.5px)
          }
          83% {
            transform:translate(101px,20.5px)
          }
          84% {
            transform:translate(101px,20.5px)
          }
          85% {
            transform:translate(101px,20.5px)
          }
          86% {
            transform:translate(101px,20.5px)
          }
          87% {
            transform:translate(101px,20.5px)
          }
          88% {
            transform:translate(101px,20.5px)
          }
          89% {
            transform:translate(101px,20.5px)
          }
          90% {
            transform:translate(101px,20.5px)
          }
          91% {
            transform:translate(101px,20.5px)
          }
          92% {
            transform:translate(101px,20.5px)
          }
          93% {
            transform:translate(101px,20.5px)
          }
          94% {
            transform:translate(101px,20.5px)
          }
          95% {
            transform:translate(101px,20.5px)
          }
          96% {
            transform:translate(101px,20.5px)
          }
          97% {
            transform:translate(101px,20.5px)
          }
          98% {
            transform:translate(101px,20.5px)
          }
          99% {
            transform:translate(101px,20.5px)
          }
          100% {
            transform:translate(101px,20.5px)
          }
        }
        .h2 {
          transform:translate(88px,99px);
          animation:h2 16s linear infinite
        }
        @keyframes h2 {
          0% {
            transform:translate(91px,94px)
          }
          1% {
            transform:translate(91px,94px)
          }
          2% {
            transform:translate(91px,94px)
          }
          3% {
            transform:translate(91px,94px)
          }
          4% {
            transform:translate(91px,94px)
          }
          5% {
            transform:translate(91px,94px)
          }
          6% {
            transform:translate(91px,94px)
          }
          7% {
            transform:translate(91px,94px)
          }
          8% {
            transform:translate(91px,94px)
          }
          9% {
            transform:translate(91px,94px)
          }
          10% {
            transform:translate(91px,94px)
          }
          11% {
            transform:translate(91px,94px)
          }
          12% {
            transform:translate(91px,94px)
          }
          13% {
            transform:translate(91px,94px)
          }
          14% {
            transform:translate(91px,94px)
          }
          15% {
            transform:translate(91px,94px)
          }
          16% {
            transform:translate(91.7px,94px)
          }
          17% {
            transform:translate(92.4px,94px)
          }
          18% {
            transform:translate(93.1px,94px)
          }
          19% {
            transform:translate(93.8px,94px)
          }
          20% {
            transform:translate(94.5px,94px)
          }
          21% {
            transform:translate(95.2px,94px)
          }
          22% {
            transform:translate(95.9px,94px)
          }
          23% {
            transform:translate(96.6px,94px)
          }
          24% {
            transform:translate(97.3px,94px)
          }
          25% {
            transform:translate(98px,94px)
          }
          26% {
            transform:translate(97.333px,94.333px)
          }
          27% {
            transform:translate(96.667px,94.667px)
          }
          28% {
            transform:translate(96px,95px)
          }
          29% {
            transform:translate(95.333px,95.333px)
          }
          30% {
            transform:translate(94.667px,95.667px)
          }
          31% {
            transform:translate(94px,96px)
          }
          32% {
            transform:translate(93.333px,96.333px)
          }
          33% {
            transform:translate(92.667px,96.667px)
          }
          34% {
            transform:translate(92px,97px)
          }
          35% {
            transform:translate(91.333px,97.333px)
          }
          36% {
            transform:translate(90.667px,97.667px)
          }
          37% {
            transform:translate(90px,98px)
          }
          38% {
            transform:translate(89.333px,98.333px)
          }
          39% {
            transform:translate(88.667px,98.667px)
          }
          40% {
            transform:translate(88px,99px)
          }
          41% {
            transform:translate(88px,99px)
          }
          42% {
            transform:translate(88px,99px)
          }
          43% {
            transform:translate(88px,99px)
          }
          44% {
            transform:translate(88px,99px)
          }
          45% {
            transform:translate(88px,99px)
          }
          46% {
            transform:translate(88px,99px)
          }
          47% {
            transform:translate(88px,99px)
          }
          48% {
            transform:translate(88px,99px)
          }
          49% {
            transform:translate(88px,99px)
          }
          50% {
            transform:translate(88px,99px)
          }
          51% {
            transform:translate(88px,99px)
          }
          52% {
            transform:translate(88px,99px)
          }
          53% {
            transform:translate(88px,99px)
          }
          54% {
            transform:translate(88px,99px)
          }
          55% {
            transform:translate(88px,99px)
          }
          56% {
            transform:translate(88px,99px)
          }
          57% {
            transform:translate(88px,99px)
          }
          58% {
            transform:translate(88px,99px)
          }
          59% {
            transform:translate(88px,99px)
          }
          60% {
            transform:translate(88px,99px)
          }
          61% {
            transform:translate(88px,99px)
          }
          62% {
            transform:translate(88px,99px)
          }
          63% {
            transform:translate(88px,99px)
          }
          64% {
            transform:translate(88px,99px)
          }
          65% {
            transform:translate(88px,99px)
          }
          66% {
            transform:translate(88px,99px)
          }
          67% {
            transform:translate(88px,99px)
          }
          68% {
            transform:translate(88px,99px)
          }
          69% {
            transform:translate(88px,99px)
          }
          70% {
            transform:translate(88px,99px)
          }
          71% {
            transform:translate(88px,99px)
          }
          72% {
            transform:translate(88px,99px)
          }
          73% {
            transform:translate(88px,99px)
          }
          74% {
            transform:translate(88px,99px)
          }
          75% {
            transform:translate(88px,99px)
          }
          76% {
            transform:translate(88px,99px)
          }
          77% {
            transform:translate(88px,99px)
          }
          78% {
            transform:translate(88px,99px)
          }
          79% {
            transform:translate(88px,99px)
          }
          80% {
            transform:translate(88px,99px)
          }
          81% {
            transform:translate(88px,99px)
          }
          82% {
            transform:translate(88px,99px)
          }
          83% {
            transform:translate(88px,99px)
          }
          84% {
            transform:translate(88px,99px)
          }
          85% {
            transform:translate(88px,99px)
          }
          86% {
            transform:translate(88px,99px)
          }
          87% {
            transform:translate(88px,99px)
          }
          88% {
            transform:translate(88px,99px)
          }
          89% {
            transform:translate(88px,99px)
          }
          90% {
            transform:translate(88px,99px)
          }
          91% {
            transform:translate(88px,99px)
          }
          92% {
            transform:translate(88px,99px)
          }
          93% {
            transform:translate(88px,99px)
          }
          94% {
            transform:translate(88px,99px)
          }
          95% {
            transform:translate(88px,99px)
          }
          96% {
            transform:translate(88px,99px)
          }
          97% {
            transform:translate(88px,99px)
          }
          98% {
            transform:translate(88px,99px)
          }
          99% {
            transform:translate(88px,99px)
          }
          100% {
            transform:translate(88px,99px)
          }
        }
        .h3 {
          transform:translate(101px,25.5px);
          animation:h3 16s linear infinite
        }
        @keyframes h3 {
          0% {
            transform:translate(102px,94px)
          }
          1% {
            transform:translate(102px,94px)
          }
          2% {
            transform:translate(102px,94px)
          }
          3% {
            transform:translate(102px,94px)
          }
          4% {
            transform:translate(102px,94px)
          }
          5% {
            transform:translate(102px,94px)
          }
          6% {
            transform:translate(102px,94px)
          }
          7% {
            transform:translate(102px,94px)
          }
          8% {
            transform:translate(102px,94px)
          }
          9% {
            transform:translate(102px,94px)
          }
          10% {
            transform:translate(102px,94px)
          }
          11% {
            transform:translate(102px,94px)
          }
          12% {
            transform:translate(102px,94px)
          }
          13% {
            transform:translate(102px,94px)
          }
          14% {
            transform:translate(102px,94px)
          }
          15% {
            transform:translate(102px,94px)
          }
          16% {
            transform:translate(102.7px,94px)
          }
          17% {
            transform:translate(103.4px,94px)
          }
          18% {
            transform:translate(104.1px,94px)
          }
          19% {
            transform:translate(104.8px,94px)
          }
          20% {
            transform:translate(105.5px,94px)
          }
          21% {
            transform:translate(106.2px,94px)
          }
          22% {
            transform:translate(106.9px,94px)
          }
          23% {
            transform:translate(107.6px,94px)
          }
          24% {
            transform:translate(108.3px,94px)
          }
          25% {
            transform:translate(109px,94px)
          }
          26% {
            transform:translate(109px,92.7px)
          }
          27% {
            transform:translate(109px,91.4px)
          }
          28% {
            transform:translate(109px,90.1px)
          }
          29% {
            transform:translate(109px,88.8px)
          }
          30% {
            transform:translate(109px,87.5px)
          }
          31% {
            transform:translate(109px,86.2px)
          }
          32% {
            transform:translate(109px,84.9px)
          }
          33% {
            transform:translate(109px,83.6px)
          }
          34% {
            transform:translate(109px,82.3px)
          }
          35% {
            transform:translate(109px,81px)
          }
          36% {
            transform:translate(109px,81px)
          }
          37% {
            transform:translate(109px,81px)
          }
          38% {
            transform:translate(109px,81px)
          }
          39% {
            transform:translate(109px,81px)
          }
          40% {
            transform:translate(109px,81px)
          }
          41% {
            transform:translate(107.6px,77.9px)
          }
          42% {
            transform:translate(106.2px,74.8px)
          }
          43% {
            transform:translate(104.8px,71.7px)
          }
          44% {
            transform:translate(103.4px,68.6px)
          }
          45% {
            transform:translate(102px,65.5px)
          }
          46% {
            transform:translate(101.955px,63.682px)
          }
          47% {
            transform:translate(101.909px,61.864px)
          }
          48% {
            transform:translate(101.864px,60.045px)
          }
          49% {
            transform:translate(101.818px,58.227px)
          }
          50% {
            transform:translate(101.773px,56.409px)
          }
          51% {
            transform:translate(101.727px,54.591px)
          }
          52% {
            transform:translate(101.682px,52.773px)
          }
          53% {
            transform:translate(101.636px,50.955px)
          }
          54% {
            transform:translate(101.591px,49.136px)
          }
          55% {
            transform:translate(101.545px,47.318px)
          }
          56% {
            transform:translate(101.5px,45.5px)
          }
          57% {
            transform:translate(101.455px,43.682px)
          }
          58% {
            transform:translate(101.409px,41.864px)
          }
          59% {
            transform:translate(101.364px,40.045px)
          }
          60% {
            transform:translate(101.318px,38.227px)
          }
          61% {
            transform:translate(101.273px,36.409px)
          }
          62% {
            transform:translate(101.227px,34.591px)
          }
          63% {
            transform:translate(101.182px,32.773px)
          }
          64% {
            transform:translate(101.136px,30.955px)
          }
          65% {
            transform:translate(101.091px,29.136px)
          }
          66% {
            transform:translate(101.045px,27.318px)
          }
          67% {
            transform:translate(101px,25.5px)
          }
          68% {
            transform:translate(101px,25.5px)
          }
          69% {
            transform:translate(101px,25.5px)
          }
          70% {
            transform:translate(101px,25.5px)
          }
          71% {
            transform:translate(101px,25.5px)
          }
          72% {
            transform:translate(101px,25.5px)
          }
          73% {
            transform:translate(101px,25.5px)
          }
          74% {
            transform:translate(101px,25.5px)
          }
          75% {
            transform:translate(101px,25.5px)
          }
          76% {
            transform:translate(101px,25.5px)
          }
          77% {
            transform:translate(101px,25.5px)
          }
          78% {
            transform:translate(101px,25.5px)
          }
          79% {
            transform:translate(101px,25.5px)
          }
          80% {
            transform:translate(101px,25.5px)
          }
          81% {
            transform:translate(101px,25.5px)
          }
          82% {
            transform:translate(101px,25.5px)
          }
          83% {
            transform:translate(101px,25.5px)
          }
          84% {
            transform:translate(101px,25.5px)
          }
          85% {
            transform:translate(101px,25.5px)
          }
          86% {
            transform:translate(101px,25.5px)
          }
          87% {
            transform:translate(101px,25.5px)
          }
          88% {
            transform:translate(101px,25.5px)
          }
          89% {
            transform:translate(101px,25.5px)
          }
          90% {
            transform:translate(101px,25.5px)
          }
          91% {
            transform:translate(101px,25.5px)
          }
          92% {
            transform:translate(101px,25.5px)
          }
          93% {
            transform:translate(101px,25.5px)
          }
          94% {
            transform:translate(101px,25.5px)
          }
          95% {
            transform:translate(101px,25.5px)
          }
          96% {
            transform:translate(101px,25.5px)
          }
          97% {
            transform:translate(101px,25.5px)
          }
          98% {
            transform:translate(101px,25.5px)
          }
          99% {
            transform:translate(101px,25.5px)
          }
          100% {
            transform:translate(101px,25.5px)
          }
        }
        .oh0 {
          animation:oh0 16s linear infinite
        }
        @keyframes oh0 {
          0% {
            d:path('M97.000,73.000L91.000,69.000')
          }
          1% {
            d:path('M97.000,73.000L91.000,69.000')
          }
          2% {
            d:path('M97.000,73.000L91.000,69.000')
          }
          3% {
            d:path('M97.000,73.000L91.000,69.000')
          }
          4% {
            d:path('M97.000,73.000L91.000,69.000')
          }
          5% {
            d:path('M97.000,73.000L91.000,69.000')
          }
          6% {
            d:path('M97.000,73.000L91.000,69.000')
          }
          7% {
            d:path('M97.000,73.000L91.000,69.000')
          }
          8% {
            d:path('M97.000,73.000L91.000,69.000')
          }
          9% {
            d:path('M97.000,73.000L91.000,69.000')
          }
          10% {
            d:path('M97.000,73.000L91.000,69.000')
          }
          11% {
            d:path('M97.000,73.000L91.000,69.000')
          }
          12% {
            d:path('M97.000,73.000L91.000,69.000')
          }
          13% {
            d:path('M97.000,73.000L91.000,69.000')
          }
          14% {
            d:path('M97.000,73.000L91.000,69.000')
          }
          15% {
            d:path('M97.000,73.000L91.000,69.000')
          }
          16% {
            d:path('M97.700,73.000L91.700,69.000')
          }
          17% {
            d:path('M98.400,73.000L92.400,69.000')
          }
          18% {
            d:path('M99.100,73.000L93.100,69.000')
          }
          19% {
            d:path('M99.800,73.000L93.800,69.000')
          }
          20% {
            d:path('M100.500,73.000L94.500,69.000')
          }
          21% {
            d:path('M101.200,73.000L95.200,69.000')
          }
          22% {
            d:path('M101.900,73.000L95.900,69.000')
          }
          23% {
            d:path('M102.600,73.000L96.600,69.000')
          }
          24% {
            d:path('M103.300,73.000L97.300,69.000')
          }
          25% {
            d:path('M104.000,73.000L98.000,69.000')
          }
          26% {
            d:path('M102.933,72.667L96.933,68.667')
          }
          27% {
            d:path('M101.867,72.333L95.867,68.333')
          }
          28% {
            d:path('M100.800,72.000L94.800,68.000')
          }
          29% {
            d:path('M99.733,71.667L93.733,67.667')
          }
          30% {
            d:path('M98.667,71.333L92.667,67.333')
          }
          31% {
            d:path('M97.600,71.000L91.600,67.000')
          }
          32% {
            d:path('M96.533,70.667L90.533,66.667')
          }
          33% {
            d:path('M95.467,70.333L89.467,66.333')
          }
          34% {
            d:path('M94.400,70.000L88.400,66.000')
          }
          35% {
            d:path('M93.333,69.667L87.333,65.667')
          }
          36% {
            d:path('M92.267,69.333L86.267,65.333')
          }
          37% {
            d:path('M91.200,69.000L85.200,65.000')
          }
          38% {
            d:path('M90.133,68.667L84.133,64.667')
          }
          39% {
            d:path('M89.067,68.333L83.067,64.333')
          }
          40% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          41% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          42% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          43% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          44% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          45% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          46% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          47% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          48% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          49% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          50% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          51% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          52% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          53% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          54% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          55% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          56% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          57% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          58% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          59% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          60% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          61% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          62% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          63% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          64% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          65% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          66% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          67% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          68% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          69% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          70% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          71% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          72% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          73% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          74% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          75% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          76% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          77% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          78% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          79% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          80% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          81% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          82% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          83% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          84% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          85% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          86% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          87% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          88% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          89% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          90% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          91% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          92% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          93% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          94% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          95% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          96% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          97% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          98% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          99% {
            d:path('M88.000,68.000L82.000,64.000')
          }
          100% {
            d:path('M88.000,68.000L82.000,64.000')
          }
        }
        .breaking0 {
          animation:breaking0 16s linear infinite,break 16s linear infinite
        }
        @keyframes breaking0 {
          0% {
            d:path('M97.000,73.000L102.000,69.000')
          }
          1% {
            d:path('M97.000,73.000L102.000,69.000')
          }
          2% {
            d:path('M97.000,73.000L102.000,69.000')
          }
          3% {
            d:path('M97.000,73.000L102.000,69.000')
          }
          4% {
            d:path('M97.000,73.000L102.000,69.000')
          }
          5% {
            d:path('M97.000,73.000L102.000,69.000')
          }
          6% {
            d:path('M97.000,73.000L102.000,69.000')
          }
          7% {
            d:path('M97.000,73.000L102.000,69.000')
          }
          8% {
            d:path('M97.000,73.000L102.000,69.000')
          }
          9% {
            d:path('M97.000,73.000L102.000,69.000')
          }
          10% {
            d:path('M97.000,73.000L102.000,69.000')
          }
          11% {
            d:path('M97.000,73.000L102.000,69.000')
          }
          12% {
            d:path('M97.000,73.000L102.000,69.000')
          }
          13% {
            d:path('M97.000,73.000L102.000,69.000')
          }
          14% {
            d:path('M97.000,73.000L102.000,69.000')
          }
          15% {
            d:path('M97.000,73.000L102.000,69.000')
          }
          16% {
            d:path('M97.700,73.000L102.700,69.000')
          }
          17% {
            d:path('M98.400,73.000L103.400,69.000')
          }
          18% {
            d:path('M99.100,73.000L104.100,69.000')
          }
          19% {
            d:path('M99.800,73.000L104.800,69.000')
          }
          20% {
            d:path('M100.500,73.000L105.500,69.000')
          }
          21% {
            d:path('M101.200,73.000L106.200,69.000')
          }
          22% {
            d:path('M101.900,73.000L106.900,69.000')
          }
          23% {
            d:path('M102.600,73.000L107.600,69.000')
          }
          24% {
            d:path('M103.300,73.000L108.300,69.000')
          }
          25% {
            d:path('M104.000,73.000L109.000,69.000')
          }
          26% {
            d:path('M102.933,72.667L109.000,69.700')
          }
          27% {
            d:path('M101.867,72.333L109.000,70.400')
          }
          28% {
            d:path('M100.800,72.000L109.000,71.100')
          }
          29% {
            d:path('M99.733,71.667L109.000,71.800')
          }
          30% {
            d:path('M98.667,71.333L109.000,72.500')
          }
          31% {
            d:path('M97.600,71.000L109.000,73.200')
          }
          32% {
            d:path('M96.533,70.667L109.000,73.900')
          }
          33% {
            d:path('M95.467,70.333L109.000,74.600')
          }
          34% {
            d:path('M94.400,70.000L109.000,75.300')
          }
          35% {
            d:path('M93.333,69.667L109.000,76.000')
          }
          36% {
            d:path('M92.267,69.333L109.000,76.000')
          }
          37% {
            d:path('M91.200,69.000L109.000,76.000')
          }
          38% {
            d:path('M90.133,68.667L109.000,76.000')
          }
          39% {
            d:path('M89.067,68.333L109.000,76.000')
          }
          40% {
            d:path('M88.000,68.000L109.000,76.000')
          }
          41% {
            d:path('M88.000,68.000L107.600,72.900')
          }
          42% {
            d:path('M88.000,68.000L106.200,69.800')
          }
          43% {
            d:path('M88.000,68.000L104.800,66.700')
          }
          44% {
            d:path('M88.000,68.000L103.400,63.600')
          }
          45% {
            d:path('M88.000,68.000L102.000,60.500')
          }
          46% {
            d:path('M88.000,68.000L101.955,58.682')
          }
          47% {
            d:path('M88.000,68.000L101.909,56.864')
          }
          48% {
            d:path('M88.000,68.000L101.864,55.045')
          }
          49% {
            d:path('M88.000,68.000L101.818,53.227')
          }
          50% {
            d:path('M88.000,68.000L101.773,51.409')
          }
          51% {
            d:path('M88.000,68.000L101.727,49.591')
          }
          52% {
            d:path('M88.000,68.000L101.682,47.773')
          }
          53% {
            d:path('M88.000,68.000L101.636,45.955')
          }
          54% {
            d:path('M88.000,68.000L101.591,44.136')
          }
          55% {
            d:path('M88.000,68.000L101.545,42.318')
          }
          56% {
            d:path('M88.000,68.000L101.500,40.500')
          }
          57% {
            d:path('M88.000,68.000L101.455,38.682')
          }
          58% {
            d:path('M88.000,68.000L101.409,36.864')
          }
          59% {
            d:path('M88.000,68.000L101.364,35.045')
          }
          60% {
            d:path('M88.000,68.000L101.318,33.227')
          }
          61% {
            d:path('M88.000,68.000L101.273,31.409')
          }
          62% {
            d:path('M88.000,68.000L101.227,29.591')
          }
          63% {
            d:path('M88.000,68.000L101.182,27.773')
          }
          64% {
            d:path('M88.000,68.000L101.136,25.955')
          }
          65% {
            d:path('M88.000,68.000L101.091,24.136')
          }
          66% {
            d:path('M88.000,68.000L101.045,22.318')
          }
          67% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          68% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          69% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          70% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          71% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          72% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          73% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          74% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          75% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          76% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          77% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          78% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          79% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          80% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          81% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          82% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          83% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          84% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          85% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          86% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          87% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          88% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          89% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          90% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          91% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          92% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          93% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          94% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          95% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          96% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          97% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          98% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          99% {
            d:path('M88.000,68.000L101.000,20.500')
          }
          100% {
            d:path('M88.000,68.000L101.000,20.500')
          }
        }
        .oh1 {
          animation:oh1 16s linear infinite
        }
        @keyframes oh1 {
          0% {
            d:path('M97.000,98.000L91.000,94.000')
          }
          1% {
            d:path('M97.000,98.000L91.000,94.000')
          }
          2% {
            d:path('M97.000,98.000L91.000,94.000')
          }
          3% {
            d:path('M97.000,98.000L91.000,94.000')
          }
          4% {
            d:path('M97.000,98.000L91.000,94.000')
          }
          5% {
            d:path('M97.000,98.000L91.000,94.000')
          }
          6% {
            d:path('M97.000,98.000L91.000,94.000')
          }
          7% {
            d:path('M97.000,98.000L91.000,94.000')
          }
          8% {
            d:path('M97.000,98.000L91.000,94.000')
          }
          9% {
            d:path('M97.000,98.000L91.000,94.000')
          }
          10% {
            d:path('M97.000,98.000L91.000,94.000')
          }
          11% {
            d:path('M97.000,98.000L91.000,94.000')
          }
          12% {
            d:path('M97.000,98.000L91.000,94.000')
          }
          13% {
            d:path('M97.000,98.000L91.000,94.000')
          }
          14% {
            d:path('M97.000,98.000L91.000,94.000')
          }
          15% {
            d:path('M97.000,98.000L91.000,94.000')
          }
          16% {
            d:path('M97.700,98.000L91.700,94.000')
          }
          17% {
            d:path('M98.400,98.000L92.400,94.000')
          }
          18% {
            d:path('M99.100,98.000L93.100,94.000')
          }
          19% {
            d:path('M99.800,98.000L93.800,94.000')
          }
          20% {
            d:path('M100.500,98.000L94.500,94.000')
          }
          21% {
            d:path('M101.200,98.000L95.200,94.000')
          }
          22% {
            d:path('M101.900,98.000L95.900,94.000')
          }
          23% {
            d:path('M102.600,98.000L96.600,94.000')
          }
          24% {
            d:path('M103.300,98.000L97.300,94.000')
          }
          25% {
            d:path('M104.000,98.000L98.000,94.000')
          }
          26% {
            d:path('M103.333,98.333L97.333,94.333')
          }
          27% {
            d:path('M102.667,98.667L96.667,94.667')
          }
          28% {
            d:path('M102.000,99.000L96.000,95.000')
          }
          29% {
            d:path('M101.333,99.333L95.333,95.333')
          }
          30% {
            d:path('M100.667,99.667L94.667,95.667')
          }
          31% {
            d:path('M100.000,100.000L94.000,96.000')
          }
          32% {
            d:path('M99.333,100.333L93.333,96.333')
          }
          33% {
            d:path('M98.667,100.667L92.667,96.667')
          }
          34% {
            d:path('M98.000,101.000L92.000,97.000')
          }
          35% {
            d:path('M97.333,101.333L91.333,97.333')
          }
          36% {
            d:path('M96.667,101.667L90.667,97.667')
          }
          37% {
            d:path('M96.000,102.000L90.000,98.000')
          }
          38% {
            d:path('M95.333,102.333L89.333,98.333')
          }
          39% {
            d:path('M94.667,102.667L88.667,98.667')
          }
          40% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          41% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          42% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          43% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          44% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          45% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          46% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          47% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          48% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          49% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          50% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          51% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          52% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          53% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          54% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          55% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          56% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          57% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          58% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          59% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          60% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          61% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          62% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          63% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          64% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          65% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          66% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          67% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          68% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          69% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          70% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          71% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          72% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          73% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          74% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          75% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          76% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          77% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          78% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          79% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          80% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          81% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          82% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          83% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          84% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          85% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          86% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          87% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          88% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          89% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          90% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          91% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          92% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          93% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          94% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          95% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          96% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          97% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          98% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          99% {
            d:path('M94.000,103.000L88.000,99.000')
          }
          100% {
            d:path('M94.000,103.000L88.000,99.000')
          }
        }
        .breaking1 {
          animation:breaking1 16s linear infinite,break 16s linear infinite
        }
        @keyframes breaking1 {
          0% {
            d:path('M97.000,98.000L102.000,94.000')
          }
          1% {
            d:path('M97.000,98.000L102.000,94.000')
          }
          2% {
            d:path('M97.000,98.000L102.000,94.000')
          }
          3% {
            d:path('M97.000,98.000L102.000,94.000')
          }
          4% {
            d:path('M97.000,98.000L102.000,94.000')
          }
          5% {
            d:path('M97.000,98.000L102.000,94.000')
          }
          6% {
            d:path('M97.000,98.000L102.000,94.000')
          }
          7% {
            d:path('M97.000,98.000L102.000,94.000')
          }
          8% {
            d:path('M97.000,98.000L102.000,94.000')
          }
          9% {
            d:path('M97.000,98.000L102.000,94.000')
          }
          10% {
            d:path('M97.000,98.000L102.000,94.000')
          }
          11% {
            d:path('M97.000,98.000L102.000,94.000')
          }
          12% {
            d:path('M97.000,98.000L102.000,94.000')
          }
          13% {
            d:path('M97.000,98.000L102.000,94.000')
          }
          14% {
            d:path('M97.000,98.000L102.000,94.000')
          }
          15% {
            d:path('M97.000,98.000L102.000,94.000')
          }
          16% {
            d:path('M97.700,98.000L102.700,94.000')
          }
          17% {
            d:path('M98.400,98.000L103.400,94.000')
          }
          18% {
            d:path('M99.100,98.000L104.100,94.000')
          }
          19% {
            d:path('M99.800,98.000L104.800,94.000')
          }
          20% {
            d:path('M100.500,98.000L105.500,94.000')
          }
          21% {
            d:path('M101.200,98.000L106.200,94.000')
          }
          22% {
            d:path('M101.900,98.000L106.900,94.000')
          }
          23% {
            d:path('M102.600,98.000L107.600,94.000')
          }
          24% {
            d:path('M103.300,98.000L108.300,94.000')
          }
          25% {
            d:path('M104.000,98.000L109.000,94.000')
          }
          26% {
            d:path('M103.333,98.333L109.000,92.700')
          }
          27% {
            d:path('M102.667,98.667L109.000,91.400')
          }
          28% {
            d:path('M102.000,99.000L109.000,90.100')
          }
          29% {
            d:path('M101.333,99.333L109.000,88.800')
          }
          30% {
            d:path('M100.667,99.667L109.000,87.500')
          }
          31% {
            d:path('M100.000,100.000L109.000,86.200')
          }
          32% {
            d:path('M99.333,100.333L109.000,84.900')
          }
          33% {
            d:path('M98.667,100.667L109.000,83.600')
          }
          34% {
            d:path('M98.000,101.000L109.000,82.300')
          }
          35% {
            d:path('M97.333,101.333L109.000,81.000')
          }
          36% {
            d:path('M96.667,101.667L109.000,81.000')
          }
          37% {
            d:path('M96.000,102.000L109.000,81.000')
          }
          38% {
            d:path('M95.333,102.333L109.000,81.000')
          }
          39% {
            d:path('M94.667,102.667L109.000,81.000')
          }
          40% {
            d:path('M94.000,103.000L109.000,81.000')
          }
          41% {
            d:path('M94.000,103.000L107.600,77.900')
          }
          42% {
            d:path('M94.000,103.000L106.200,74.800')
          }
          43% {
            d:path('M94.000,103.000L104.800,71.700')
          }
          44% {
            d:path('M94.000,103.000L103.400,68.600')
          }
          45% {
            d:path('M94.000,103.000L102.000,65.500')
          }
          46% {
            d:path('M94.000,103.000L101.955,63.682')
          }
          47% {
            d:path('M94.000,103.000L101.909,61.864')
          }
          48% {
            d:path('M94.000,103.000L101.864,60.045')
          }
          49% {
            d:path('M94.000,103.000L101.818,58.227')
          }
          50% {
            d:path('M94.000,103.000L101.773,56.409')
          }
          51% {
            d:path('M94.000,103.000L101.727,54.591')
          }
          52% {
            d:path('M94.000,103.000L101.682,52.773')
          }
          53% {
            d:path('M94.000,103.000L101.636,50.955')
          }
          54% {
            d:path('M94.000,103.000L101.591,49.136')
          }
          55% {
            d:path('M94.000,103.000L101.545,47.318')
          }
          56% {
            d:path('M94.000,103.000L101.500,45.500')
          }
          57% {
            d:path('M94.000,103.000L101.455,43.682')
          }
          58% {
            d:path('M94.000,103.000L101.409,41.864')
          }
          59% {
            d:path('M94.000,103.000L101.364,40.045')
          }
          60% {
            d:path('M94.000,103.000L101.318,38.227')
          }
          61% {
            d:path('M94.000,103.000L101.273,36.409')
          }
          62% {
            d:path('M94.000,103.000L101.227,34.591')
          }
          63% {
            d:path('M94.000,103.000L101.182,32.773')
          }
          64% {
            d:path('M94.000,103.000L101.136,30.955')
          }
          65% {
            d:path('M94.000,103.000L101.091,29.136')
          }
          66% {
            d:path('M94.000,103.000L101.045,27.318')
          }
          67% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          68% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          69% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          70% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          71% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          72% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          73% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          74% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          75% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          76% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          77% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          78% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          79% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          80% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          81% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          82% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          83% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          84% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          85% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          86% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          87% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          88% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          89% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          90% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          91% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          92% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          93% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          94% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          95% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          96% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          97% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          98% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          99% {
            d:path('M94.000,103.000L101.000,25.500')
          }
          100% {
            d:path('M94.000,103.000L101.000,25.500')
          }
        }
        .chlorine {
          animation:chlorine 16s linear infinite,form 16s linear infinite
        }
        @keyframes chlorine {
          0% {
            d:path('M37.000,75.000L45.000,95.000')
          }
          1% {
            d:path('M37.000,75.000L45.000,95.000')
          }
          2% {
            d:path('M37.000,75.000L45.000,95.000')
          }
          3% {
            d:path('M37.000,75.000L45.000,95.000')
          }
          4% {
            d:path('M37.000,75.000L45.000,95.000')
          }
          5% {
            d:path('M37.000,75.000L45.000,95.000')
          }
          6% {
            d:path('M37.000,75.000L45.000,95.000')
          }
          7% {
            d:path('M37.000,75.000L45.000,95.000')
          }
          8% {
            d:path('M37.000,75.000L45.000,95.000')
          }
          9% {
            d:path('M37.000,75.000L45.000,95.000')
          }
          10% {
            d:path('M37.000,75.000L45.000,95.000')
          }
          11% {
            d:path('M37.000,75.000L45.000,95.000')
          }
          12% {
            d:path('M37.000,75.000L45.000,95.000')
          }
          13% {
            d:path('M37.000,75.000L45.000,95.000')
          }
          14% {
            d:path('M37.000,75.000L45.000,95.000')
          }
          15% {
            d:path('M37.000,75.000L45.000,95.000')
          }
          16% {
            d:path('M36.300,74.800L43.500,93.900')
          }
          17% {
            d:path('M35.600,74.600L42.000,92.800')
          }
          18% {
            d:path('M34.900,74.400L40.500,91.700')
          }
          19% {
            d:path('M34.200,74.200L39.000,90.600')
          }
          20% {
            d:path('M33.500,74.000L37.500,89.500')
          }
          21% {
            d:path('M32.800,73.800L36.000,88.400')
          }
          22% {
            d:path('M32.100,73.600L34.500,87.300')
          }
          23% {
            d:path('M31.400,73.400L33.000,86.200')
          }
          24% {
            d:path('M30.700,73.200L31.500,85.100')
          }
          25% {
            d:path('M30.000,73.000L30.000,84.000')
          }
          26% {
            d:path('M30.000,73.000L30.000,83.700')
          }
          27% {
            d:path('M30.000,73.000L30.000,83.400')
          }
          28% {
            d:path('M30.000,73.000L30.000,83.100')
          }
          29% {
            d:path('M30.000,73.000L30.000,82.800')
          }
          30% {
            d:path('M30.000,73.000L30.000,82.500')
          }
          31% {
            d:path('M30.000,73.000L30.000,82.200')
          }
          32% {
            d:path('M30.000,73.000L30.000,81.900')
          }
          33% {
            d:path('M30.000,73.000L30.000,81.600')
          }
          34% {
            d:path('M30.000,73.000L30.000,81.300')
          }
          35% {
            d:path('M30.000,73.000L30.000,81.000')
          }
          36% {
            d:path('M30.000,73.000L30.000,81.000')
          }
          37% {
            d:path('M30.000,73.000L30.000,81.000')
          }
          38% {
            d:path('M30.000,73.000L30.000,81.000')
          }
          39% {
            d:path('M30.000,73.000L30.000,81.000')
          }
          40% {
            d:path('M30.000,73.000L30.000,81.000')
          }
          41% {
            d:path('M30.833,71.000L30.833,79.000')
          }
          42% {
            d:path('M31.667,69.000L31.667,77.000')
          }
          43% {
            d:path('M32.500,67.000L32.500,75.000')
          }
          44% {
            d:path('M33.333,65.000L33.333,73.000')
          }
          45% {
            d:path('M34.167,63.000L34.167,71.000')
          }
          46% {
            d:path('M35.000,61.000L35.000,69.000')
          }
          47% {
            d:path('M35.833,59.000L35.833,67.000')
          }
          48% {
            d:path('M36.667,57.000L36.667,65.000')
          }
          49% {
            d:path('M37.500,55.000L37.500,63.000')
          }
          50% {
            d:path('M38.333,53.000L38.333,61.000')
          }
          51% {
            d:path('M39.167,51.000L39.167,59.000')
          }
          52% {
            d:path('M40.000,49.000L40.000,57.000')
          }
          53% {
            d:path('M40.000,47.000L40.000,55.000')
          }
          54% {
            d:path('M40.000,45.000L40.000,53.000')
          }
          55% {
            d:path('M40.000,43.000L40.000,51.000')
          }
          56% {
            d:path('M40.000,41.000L40.000,49.000')
          }
          57% {
            d:path('M40.000,39.000L40.000,47.000')
          }
          58% {
            d:path('M40.000,37.000L40.000,45.000')
          }
          59% {
            d:path('M40.000,35.000L40.000,43.000')
          }
          60% {
            d:path('M40.000,33.000L40.000,41.000')
          }
          61% {
            d:path('M40.000,31.000L40.000,39.000')
          }
          62% {
            d:path('M40.000,29.000L40.000,37.000')
          }
          63% {
            d:path('M40.000,27.000L40.000,35.000')
          }
          64% {
            d:path('M40.000,25.000L40.000,33.000')
          }
          65% {
            d:path('M40.000,23.000L40.000,31.000')
          }
          66% {
            d:path('M40.000,21.000L40.000,29.000')
          }
          67% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          68% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          69% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          70% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          71% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          72% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          73% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          74% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          75% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          76% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          77% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          78% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          79% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          80% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          81% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          82% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          83% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          84% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          85% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          86% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          87% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          88% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          89% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          90% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          91% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          92% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          93% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          94% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          95% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          96% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          97% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          98% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          99% {
            d:path('M40.000,19.000L40.000,27.000')
          }
          100% {
            d:path('M40.000,19.000L40.000,27.000')
          }
        }
        .hydrogenGas {
          animation:hydrogenGas 16s linear infinite,form 16s linear infinite
        }
        @keyframes hydrogenGas {
          0% {
            d:path('M102.000,69.000L102.000,94.000')
          }
          1% {
            d:path('M102.000,69.000L102.000,94.000')
          }
          2% {
            d:path('M102.000,69.000L102.000,94.000')
          }
          3% {
            d:path('M102.000,69.000L102.000,94.000')
          }
          4% {
            d:path('M102.000,69.000L102.000,94.000')
          }
          5% {
            d:path('M102.000,69.000L102.000,94.000')
          }
          6% {
            d:path('M102.000,69.000L102.000,94.000')
          }
          7% {
            d:path('M102.000,69.000L102.000,94.000')
          }
          8% {
            d:path('M102.000,69.000L102.000,94.000')
          }
          9% {
            d:path('M102.000,69.000L102.000,94.000')
          }
          10% {
            d:path('M102.000,69.000L102.000,94.000')
          }
          11% {
            d:path('M102.000,69.000L102.000,94.000')
          }
          12% {
            d:path('M102.000,69.000L102.000,94.000')
          }
          13% {
            d:path('M102.000,69.000L102.000,94.000')
          }
          14% {
            d:path('M102.000,69.000L102.000,94.000')
          }
          15% {
            d:path('M102.000,69.000L102.000,94.000')
          }
          16% {
            d:path('M102.700,69.000L102.700,94.000')
          }
          17% {
            d:path('M103.400,69.000L103.400,94.000')
          }
          18% {
            d:path('M104.100,69.000L104.100,94.000')
          }
          19% {
            d:path('M104.800,69.000L104.800,94.000')
          }
          20% {
            d:path('M105.500,69.000L105.500,94.000')
          }
          21% {
            d:path('M106.200,69.000L106.200,94.000')
          }
          22% {
            d:path('M106.900,69.000L106.900,94.000')
          }
          23% {
            d:path('M107.600,69.000L107.600,94.000')
          }
          24% {
            d:path('M108.300,69.000L108.300,94.000')
          }
          25% {
            d:path('M109.000,69.000L109.000,94.000')
          }
          26% {
            d:path('M109.000,69.700L109.000,92.700')
          }
          27% {
            d:path('M109.000,70.400L109.000,91.400')
          }
          28% {
            d:path('M109.000,71.100L109.000,90.100')
          }
          29% {
            d:path('M109.000,71.800L109.000,88.800')
          }
          30% {
            d:path('M109.000,72.500L109.000,87.500')
          }
          31% {
            d:path('M109.000,73.200L109.000,86.200')
          }
          32% {
            d:path('M109.000,73.900L109.000,84.900')
          }
          33% {
            d:path('M109.000,74.600L109.000,83.600')
          }
          34% {
            d:path('M109.000,75.300L109.000,82.300')
          }
          35% {
            d:path('M109.000,76.000L109.000,81.000')
          }
          36% {
            d:path('M109.000,76.000L109.000,81.000')
          }
          37% {
            d:path('M109.000,76.000L109.000,81.000')
          }
          38% {
            d:path('M109.000,76.000L109.000,81.000')
          }
          39% {
            d:path('M109.000,76.000L109.000,81.000')
          }
          40% {
            d:path('M109.000,76.000L109.000,81.000')
          }
          41% {
            d:path('M107.600,72.900L107.600,77.900')
          }
          42% {
            d:path('M106.200,69.800L106.200,74.800')
          }
          43% {
            d:path('M104.800,66.700L104.800,71.700')
          }
          44% {
            d:path('M103.400,63.600L103.400,68.600')
          }
          45% {
            d:path('M102.000,60.500L102.000,65.500')
          }
          46% {
            d:path('M101.955,58.682L101.955,63.682')
          }
          47% {
            d:path('M101.909,56.864L101.909,61.864')
          }
          48% {
            d:path('M101.864,55.045L101.864,60.045')
          }
          49% {
            d:path('M101.818,53.227L101.818,58.227')
          }
          50% {
            d:path('M101.773,51.409L101.773,56.409')
          }
          51% {
            d:path('M101.727,49.591L101.727,54.591')
          }
          52% {
            d:path('M101.682,47.773L101.682,52.773')
          }
          53% {
            d:path('M101.636,45.955L101.636,50.955')
          }
          54% {
            d:path('M101.591,44.136L101.591,49.136')
          }
          55% {
            d:path('M101.545,42.318L101.545,47.318')
          }
          56% {
            d:path('M101.500,40.500L101.500,45.500')
          }
          57% {
            d:path('M101.455,38.682L101.455,43.682')
          }
          58% {
            d:path('M101.409,36.864L101.409,41.864')
          }
          59% {
            d:path('M101.364,35.045L101.364,40.045')
          }
          60% {
            d:path('M101.318,33.227L101.318,38.227')
          }
          61% {
            d:path('M101.273,31.409L101.273,36.409')
          }
          62% {
            d:path('M101.227,29.591L101.227,34.591')
          }
          63% {
            d:path('M101.182,27.773L101.182,32.773')
          }
          64% {
            d:path('M101.136,25.955L101.136,30.955')
          }
          65% {
            d:path('M101.091,24.136L101.091,29.136')
          }
          66% {
            d:path('M101.045,22.318L101.045,27.318')
          }
          67% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          68% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          69% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          70% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          71% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          72% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          73% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          74% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          75% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          76% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          77% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          78% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          79% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          80% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          81% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          82% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          83% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          84% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          85% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          86% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          87% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          88% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          89% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          90% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          91% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          92% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          93% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          94% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          95% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          96% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          97% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          98% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          99% {
            d:path('M101.000,20.500L101.000,25.500')
          }
          100% {
            d:path('M101.000,20.500L101.000,25.500')
          }
        }
        .chloride {
          fill:#8fcc93
        }
        .sodium {
          fill:#77c9ef
        }
        .oxygen {
          fill:#ed8eab
        }
        .hydrogen {
          fill:#f3c977
        }
        .charge {
          fill:none;
          stroke:#07120f;
          stroke-width:1
        }
        .cl-charge {
          opacity:0;
          animation:chlorideCharge 16s linear infinite
        }
        .oh-charge {
          animation:hydroxideCharge 16s linear infinite
        }
        .bond {
          fill:none;
          stroke:#aac5b4;
          stroke-width:1.1
        }
        .breaking0,.breaking1 {
          opacity:0
        }
        .electrodes {
          fill:none;
          stroke:#93b4a2;
          stroke-width:3
        }
        .membrane {
          stroke:#c7b489;
          stroke-width:1;
          stroke-dasharray:2 4
        }
        .cycle {
          animation:cycle 16s linear infinite
        }
        @keyframes break {
          0%,25% {
            opacity:1
          }
          30%,100% {
            opacity:0
          }
        }
        @keyframes form {
          0%,33% {
            opacity:0
          }
          35%,100% {
            opacity:1
          }
        }
        @keyframes chlorideCharge {
          0%,25% {
            opacity:1
          }
          35%,100% {
            opacity:0
          }
        }
        @keyframes hydroxideCharge {
          0%,25% {
            opacity:0
          }
          35%,100% {
            opacity:1
          }
        }
        @keyframes cycle {
          0%,3%,97%,100% {
            opacity:0
          }
          6%,94% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Chlor-Alkali Membrane Cell">
        <path class="ink" d="M25,50V42H8V12H53M87,12H132V42H113V50"/>
        <rect class="paper ink" x="53" y="6" width="34" height="18" rx="3"/>
        <path class="ink" d="M57,15H65M61,11V19M74,15H82"/>
        <path fill="#12322a" d="M14,35H68V120H14Z"/>
        <path fill="#132e36" d="M72,35H126V120H72Z"/>
        <path class="ink muted" d="M14,35H34M46,35H68M72,35H97M105,35H126V120H14V35M34,35V26M46,35V26M97,35V26M105,35V26"/>
        <rect x="68" y="35" width="4" height="85" fill="#796e58"/>
        <path class="membrane" d="M70,38V117"/>
        <path class="electrodes" d="M25,50V105M113,50V105"/>
        <g class="cycle">
          <path class="bond oh0" d="M88.000,68.000L82.000,64.000"/>
          <path class="bond breaking0" d="M88.000,68.000L101.000,20.500"/>
          <path class="bond oh1" d="M94.000,103.000L88.000,99.000"/>
          <path class="bond breaking1" d="M94.000,103.000L101.000,25.500"/>
          <path class="bond chlorine" d="M40.000,19.000L40.000,27.000"/>
          <path class="bond hydrogenGas" d="M101.000,20.500L101.000,25.500"/>
          <g class="atom cl0">
            <circle class="chloride" r="3.4"/>
            <path class="charge cl-charge" d="M-1.6,0H1.6"/>
          </g>
          <g class="atom cl1">
            <circle class="chloride" r="3.4"/>
            <path class="charge cl-charge" d="M-1.6,0H1.6"/>
          </g>
          <g class="atom na0">
            <circle class="sodium" r="3"/>
            <path class="charge" d="M-1.5,0H1.5M0,-1.5V1.5"/>
          </g>
          <g class="atom na1">
            <circle class="sodium" r="3"/>
            <path class="charge" d="M-1.5,0H1.5M0,-1.5V1.5"/>
          </g>
          <g class="atom o0">
            <circle class="oxygen" r="3"/>
            <path class="charge oh-charge" d="M-1.3,0H1.3"/>
          </g>
          <g class="atom o1">
            <circle class="oxygen" r="3"/>
            <path class="charge oh-charge" d="M-1.3,0H1.3"/>
          </g>
          <g class="atom h0">
            <circle class="hydrogen" r="1.6"/>
          </g>
          <g class="atom h1">
            <circle class="hydrogen" r="1.6"/>
          </g>
          <g class="atom h2">
            <circle class="hydrogen" r="1.6"/>
          </g>
          <g class="atom h3">
            <circle class="hydrogen" r="1.6"/>
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

if (!customElements.get("concept-chlor-alkali-membrane-cell")) {
  customElements.define("concept-chlor-alkali-membrane-cell", ConceptChlorAlkaliMembraneCell);
}
