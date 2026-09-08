// Haber-Bosch Synthesis. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptHaberBoschSynthesis extends HTMLElement {
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
        .atom0 {
          transform:translate(40px,43px);
          animation:atom0 16s linear infinite
        }
        @keyframes atom0 {
          0% {
            transform:translate(64px,51px)
          }
          1% {
            transform:translate(64px,51px)
          }
          2% {
            transform:translate(64px,51px)
          }
          3% {
            transform:translate(64px,51px)
          }
          4% {
            transform:translate(64px,51px)
          }
          5% {
            transform:translate(64px,51px)
          }
          6% {
            transform:translate(64px,51px)
          }
          7% {
            transform:translate(64px,51px)
          }
          8% {
            transform:translate(64px,51px)
          }
          9% {
            transform:translate(64px,51px)
          }
          10% {
            transform:translate(64px,51px)
          }
          11% {
            transform:translate(64px,51px)
          }
          12% {
            transform:translate(64px,51px)
          }
          13% {
            transform:translate(64px,51px)
          }
          14% {
            transform:translate(64px,51px)
          }
          15% {
            transform:translate(64px,51px)
          }
          16% {
            transform:translate(64px,53.067px)
          }
          17% {
            transform:translate(64px,55.133px)
          }
          18% {
            transform:translate(64px,57.2px)
          }
          19% {
            transform:translate(64px,59.267px)
          }
          20% {
            transform:translate(64px,61.333px)
          }
          21% {
            transform:translate(64px,63.4px)
          }
          22% {
            transform:translate(64px,65.467px)
          }
          23% {
            transform:translate(64px,67.533px)
          }
          24% {
            transform:translate(64px,69.6px)
          }
          25% {
            transform:translate(64px,71.667px)
          }
          26% {
            transform:translate(64px,73.733px)
          }
          27% {
            transform:translate(64px,75.8px)
          }
          28% {
            transform:translate(64px,77.867px)
          }
          29% {
            transform:translate(64px,79.933px)
          }
          30% {
            transform:translate(64px,82px)
          }
          31% {
            transform:translate(62.8px,82.2px)
          }
          32% {
            transform:translate(61.6px,82.4px)
          }
          33% {
            transform:translate(60.4px,82.6px)
          }
          34% {
            transform:translate(59.2px,82.8px)
          }
          35% {
            transform:translate(58px,83px)
          }
          36% {
            transform:translate(56.8px,83.2px)
          }
          37% {
            transform:translate(55.6px,83.4px)
          }
          38% {
            transform:translate(54.4px,83.6px)
          }
          39% {
            transform:translate(53.2px,83.8px)
          }
          40% {
            transform:translate(52px,84px)
          }
          41% {
            transform:translate(52px,84px)
          }
          42% {
            transform:translate(52px,84px)
          }
          43% {
            transform:translate(52px,84px)
          }
          44% {
            transform:translate(52px,84px)
          }
          45% {
            transform:translate(52px,84px)
          }
          46% {
            transform:translate(52px,84px)
          }
          47% {
            transform:translate(52px,84px)
          }
          48% {
            transform:translate(52px,84px)
          }
          49% {
            transform:translate(52px,84px)
          }
          50% {
            transform:translate(52px,84px)
          }
          51% {
            transform:translate(52px,84px)
          }
          52% {
            transform:translate(52px,84px)
          }
          53% {
            transform:translate(52px,84px)
          }
          54% {
            transform:translate(52px,84px)
          }
          55% {
            transform:translate(52px,84px)
          }
          56% {
            transform:translate(52px,84px)
          }
          57% {
            transform:translate(52px,84px)
          }
          58% {
            transform:translate(52px,84px)
          }
          59% {
            transform:translate(52px,84px)
          }
          60% {
            transform:translate(52px,84px)
          }
          61% {
            transform:translate(52px,84px)
          }
          62% {
            transform:translate(52px,84px)
          }
          63% {
            transform:translate(52px,84px)
          }
          64% {
            transform:translate(52px,84px)
          }
          65% {
            transform:translate(52px,84px)
          }
          66% {
            transform:translate(52px,84px)
          }
          67% {
            transform:translate(52px,84px)
          }
          68% {
            transform:translate(52px,84px)
          }
          69% {
            transform:translate(52px,84px)
          }
          70% {
            transform:translate(52px,84px)
          }
          71% {
            transform:translate(52px,84px)
          }
          72% {
            transform:translate(52px,84px)
          }
          73% {
            transform:translate(52px,84px)
          }
          74% {
            transform:translate(52px,84px)
          }
          75% {
            transform:translate(52px,84px)
          }
          76% {
            transform:translate(50.8px,79.9px)
          }
          77% {
            transform:translate(49.6px,75.8px)
          }
          78% {
            transform:translate(48.4px,71.7px)
          }
          79% {
            transform:translate(47.2px,67.6px)
          }
          80% {
            transform:translate(46px,63.5px)
          }
          81% {
            transform:translate(44.8px,59.4px)
          }
          82% {
            transform:translate(43.6px,55.3px)
          }
          83% {
            transform:translate(42.4px,51.2px)
          }
          84% {
            transform:translate(41.2px,47.1px)
          }
          85% {
            transform:translate(40px,43px)
          }
          86% {
            transform:translate(40px,43px)
          }
          87% {
            transform:translate(40px,43px)
          }
          88% {
            transform:translate(40px,43px)
          }
          89% {
            transform:translate(40px,43px)
          }
          90% {
            transform:translate(40px,43px)
          }
          91% {
            transform:translate(40px,43px)
          }
          92% {
            transform:translate(40px,43px)
          }
          93% {
            transform:translate(40px,43px)
          }
          94% {
            transform:translate(40px,43px)
          }
          95% {
            transform:translate(40px,43px)
          }
          96% {
            transform:translate(40px,43px)
          }
          97% {
            transform:translate(40px,43px)
          }
          98% {
            transform:translate(40px,43px)
          }
          99% {
            transform:translate(40px,43px)
          }
          100% {
            transform:translate(40px,43px)
          }
        }
        .atom1 {
          transform:translate(100px,43px);
          animation:atom1 16s linear infinite
        }
        @keyframes atom1 {
          0% {
            transform:translate(76px,51px)
          }
          1% {
            transform:translate(76px,51px)
          }
          2% {
            transform:translate(76px,51px)
          }
          3% {
            transform:translate(76px,51px)
          }
          4% {
            transform:translate(76px,51px)
          }
          5% {
            transform:translate(76px,51px)
          }
          6% {
            transform:translate(76px,51px)
          }
          7% {
            transform:translate(76px,51px)
          }
          8% {
            transform:translate(76px,51px)
          }
          9% {
            transform:translate(76px,51px)
          }
          10% {
            transform:translate(76px,51px)
          }
          11% {
            transform:translate(76px,51px)
          }
          12% {
            transform:translate(76px,51px)
          }
          13% {
            transform:translate(76px,51px)
          }
          14% {
            transform:translate(76px,51px)
          }
          15% {
            transform:translate(76px,51px)
          }
          16% {
            transform:translate(76px,53.067px)
          }
          17% {
            transform:translate(76px,55.133px)
          }
          18% {
            transform:translate(76px,57.2px)
          }
          19% {
            transform:translate(76px,59.267px)
          }
          20% {
            transform:translate(76px,61.333px)
          }
          21% {
            transform:translate(76px,63.4px)
          }
          22% {
            transform:translate(76px,65.467px)
          }
          23% {
            transform:translate(76px,67.533px)
          }
          24% {
            transform:translate(76px,69.6px)
          }
          25% {
            transform:translate(76px,71.667px)
          }
          26% {
            transform:translate(76px,73.733px)
          }
          27% {
            transform:translate(76px,75.8px)
          }
          28% {
            transform:translate(76px,77.867px)
          }
          29% {
            transform:translate(76px,79.933px)
          }
          30% {
            transform:translate(76px,82px)
          }
          31% {
            transform:translate(76.8px,82.2px)
          }
          32% {
            transform:translate(77.6px,82.4px)
          }
          33% {
            transform:translate(78.4px,82.6px)
          }
          34% {
            transform:translate(79.2px,82.8px)
          }
          35% {
            transform:translate(80px,83px)
          }
          36% {
            transform:translate(80.8px,83.2px)
          }
          37% {
            transform:translate(81.6px,83.4px)
          }
          38% {
            transform:translate(82.4px,83.6px)
          }
          39% {
            transform:translate(83.2px,83.8px)
          }
          40% {
            transform:translate(84px,84px)
          }
          41% {
            transform:translate(84px,84px)
          }
          42% {
            transform:translate(84px,84px)
          }
          43% {
            transform:translate(84px,84px)
          }
          44% {
            transform:translate(84px,84px)
          }
          45% {
            transform:translate(84px,84px)
          }
          46% {
            transform:translate(84px,84px)
          }
          47% {
            transform:translate(84px,84px)
          }
          48% {
            transform:translate(84px,84px)
          }
          49% {
            transform:translate(84px,84px)
          }
          50% {
            transform:translate(84px,84px)
          }
          51% {
            transform:translate(84px,84px)
          }
          52% {
            transform:translate(84px,84px)
          }
          53% {
            transform:translate(84px,84px)
          }
          54% {
            transform:translate(84px,84px)
          }
          55% {
            transform:translate(84px,84px)
          }
          56% {
            transform:translate(84px,84px)
          }
          57% {
            transform:translate(84px,84px)
          }
          58% {
            transform:translate(84px,84px)
          }
          59% {
            transform:translate(84px,84px)
          }
          60% {
            transform:translate(84px,84px)
          }
          61% {
            transform:translate(84px,84px)
          }
          62% {
            transform:translate(84px,84px)
          }
          63% {
            transform:translate(84px,84px)
          }
          64% {
            transform:translate(84px,84px)
          }
          65% {
            transform:translate(84px,84px)
          }
          66% {
            transform:translate(84px,84px)
          }
          67% {
            transform:translate(84px,84px)
          }
          68% {
            transform:translate(84px,84px)
          }
          69% {
            transform:translate(84px,84px)
          }
          70% {
            transform:translate(84px,84px)
          }
          71% {
            transform:translate(84px,84px)
          }
          72% {
            transform:translate(84px,84px)
          }
          73% {
            transform:translate(84px,84px)
          }
          74% {
            transform:translate(84px,84px)
          }
          75% {
            transform:translate(84px,84px)
          }
          76% {
            transform:translate(85.6px,79.9px)
          }
          77% {
            transform:translate(87.2px,75.8px)
          }
          78% {
            transform:translate(88.8px,71.7px)
          }
          79% {
            transform:translate(90.4px,67.6px)
          }
          80% {
            transform:translate(92px,63.5px)
          }
          81% {
            transform:translate(93.6px,59.4px)
          }
          82% {
            transform:translate(95.2px,55.3px)
          }
          83% {
            transform:translate(96.8px,51.2px)
          }
          84% {
            transform:translate(98.4px,47.1px)
          }
          85% {
            transform:translate(100px,43px)
          }
          86% {
            transform:translate(100px,43px)
          }
          87% {
            transform:translate(100px,43px)
          }
          88% {
            transform:translate(100px,43px)
          }
          89% {
            transform:translate(100px,43px)
          }
          90% {
            transform:translate(100px,43px)
          }
          91% {
            transform:translate(100px,43px)
          }
          92% {
            transform:translate(100px,43px)
          }
          93% {
            transform:translate(100px,43px)
          }
          94% {
            transform:translate(100px,43px)
          }
          95% {
            transform:translate(100px,43px)
          }
          96% {
            transform:translate(100px,43px)
          }
          97% {
            transform:translate(100px,43px)
          }
          98% {
            transform:translate(100px,43px)
          }
          99% {
            transform:translate(100px,43px)
          }
          100% {
            transform:translate(100px,43px)
          }
        }
        .atom2 {
          transform:translate(30px,37px);
          animation:atom2 16s linear infinite
        }
        @keyframes atom2 {
          0% {
            transform:translate(26px,38px)
          }
          1% {
            transform:translate(26px,38px)
          }
          2% {
            transform:translate(26px,38px)
          }
          3% {
            transform:translate(26px,38px)
          }
          4% {
            transform:translate(26px,38px)
          }
          5% {
            transform:translate(26px,38px)
          }
          6% {
            transform:translate(26px,38px)
          }
          7% {
            transform:translate(26px,38px)
          }
          8% {
            transform:translate(26px,38px)
          }
          9% {
            transform:translate(26px,38px)
          }
          10% {
            transform:translate(26px,38px)
          }
          11% {
            transform:translate(26px,38px)
          }
          12% {
            transform:translate(26px,38px)
          }
          13% {
            transform:translate(26px,38px)
          }
          14% {
            transform:translate(26px,38px)
          }
          15% {
            transform:translate(26px,38px)
          }
          16% {
            transform:translate(26px,38px)
          }
          17% {
            transform:translate(26px,38px)
          }
          18% {
            transform:translate(26px,38px)
          }
          19% {
            transform:translate(26px,38px)
          }
          20% {
            transform:translate(26px,38px)
          }
          21% {
            transform:translate(26px,38px)
          }
          22% {
            transform:translate(26px,38px)
          }
          23% {
            transform:translate(26px,38px)
          }
          24% {
            transform:translate(26px,38px)
          }
          25% {
            transform:translate(26px,38px)
          }
          26% {
            transform:translate(26px,38px)
          }
          27% {
            transform:translate(26px,38px)
          }
          28% {
            transform:translate(26px,38px)
          }
          29% {
            transform:translate(26px,38px)
          }
          30% {
            transform:translate(26px,38px)
          }
          31% {
            transform:translate(26px,38px)
          }
          32% {
            transform:translate(26px,38px)
          }
          33% {
            transform:translate(26px,47px)
          }
          34% {
            transform:translate(26px,56px)
          }
          35% {
            transform:translate(26px,65px)
          }
          36% {
            transform:translate(26px,74px)
          }
          37% {
            transform:translate(26px,83px)
          }
          38% {
            transform:translate(26px,92px)
          }
          39% {
            transform:translate(26px,92px)
          }
          40% {
            transform:translate(26px,92px)
          }
          41% {
            transform:translate(26px,92px)
          }
          42% {
            transform:translate(26px,92px)
          }
          43% {
            transform:translate(26px,92px)
          }
          44% {
            transform:translate(26px,92px)
          }
          45% {
            transform:translate(26px,92px)
          }
          46% {
            transform:translate(28.286px,87.429px)
          }
          47% {
            transform:translate(30.571px,82.857px)
          }
          48% {
            transform:translate(32.857px,78.286px)
          }
          49% {
            transform:translate(35.143px,76.286px)
          }
          50% {
            transform:translate(37.429px,76.857px)
          }
          51% {
            transform:translate(39.714px,77.429px)
          }
          52% {
            transform:translate(42px,78px)
          }
          53% {
            transform:translate(42px,78px)
          }
          54% {
            transform:translate(42px,78px)
          }
          55% {
            transform:translate(42px,78px)
          }
          56% {
            transform:translate(42px,78px)
          }
          57% {
            transform:translate(42px,78px)
          }
          58% {
            transform:translate(42px,78px)
          }
          59% {
            transform:translate(42px,78px)
          }
          60% {
            transform:translate(42px,78px)
          }
          61% {
            transform:translate(42px,78px)
          }
          62% {
            transform:translate(42px,78px)
          }
          63% {
            transform:translate(42px,78px)
          }
          64% {
            transform:translate(42px,78px)
          }
          65% {
            transform:translate(42px,78px)
          }
          66% {
            transform:translate(42px,78px)
          }
          67% {
            transform:translate(42px,78px)
          }
          68% {
            transform:translate(42px,78px)
          }
          69% {
            transform:translate(42px,78px)
          }
          70% {
            transform:translate(42px,78px)
          }
          71% {
            transform:translate(42px,78px)
          }
          72% {
            transform:translate(42px,78px)
          }
          73% {
            transform:translate(42px,78px)
          }
          74% {
            transform:translate(42px,78px)
          }
          75% {
            transform:translate(42px,78px)
          }
          76% {
            transform:translate(40.8px,73.9px)
          }
          77% {
            transform:translate(39.6px,69.8px)
          }
          78% {
            transform:translate(38.4px,65.7px)
          }
          79% {
            transform:translate(37.2px,61.6px)
          }
          80% {
            transform:translate(36px,57.5px)
          }
          81% {
            transform:translate(34.8px,53.4px)
          }
          82% {
            transform:translate(33.6px,49.3px)
          }
          83% {
            transform:translate(32.4px,45.2px)
          }
          84% {
            transform:translate(31.2px,41.1px)
          }
          85% {
            transform:translate(30px,37px)
          }
          86% {
            transform:translate(30px,37px)
          }
          87% {
            transform:translate(30px,37px)
          }
          88% {
            transform:translate(30px,37px)
          }
          89% {
            transform:translate(30px,37px)
          }
          90% {
            transform:translate(30px,37px)
          }
          91% {
            transform:translate(30px,37px)
          }
          92% {
            transform:translate(30px,37px)
          }
          93% {
            transform:translate(30px,37px)
          }
          94% {
            transform:translate(30px,37px)
          }
          95% {
            transform:translate(30px,37px)
          }
          96% {
            transform:translate(30px,37px)
          }
          97% {
            transform:translate(30px,37px)
          }
          98% {
            transform:translate(30px,37px)
          }
          99% {
            transform:translate(30px,37px)
          }
          100% {
            transform:translate(30px,37px)
          }
        }
        .atom3 {
          transform:translate(50px,37px);
          animation:atom3 16s linear infinite
        }
        @keyframes atom3 {
          0% {
            transform:translate(34px,38px)
          }
          1% {
            transform:translate(34px,38px)
          }
          2% {
            transform:translate(34px,38px)
          }
          3% {
            transform:translate(34px,38px)
          }
          4% {
            transform:translate(34px,38px)
          }
          5% {
            transform:translate(34px,38px)
          }
          6% {
            transform:translate(34px,38px)
          }
          7% {
            transform:translate(34px,38px)
          }
          8% {
            transform:translate(34px,38px)
          }
          9% {
            transform:translate(34px,38px)
          }
          10% {
            transform:translate(34px,38px)
          }
          11% {
            transform:translate(34px,38px)
          }
          12% {
            transform:translate(34px,38px)
          }
          13% {
            transform:translate(34px,38px)
          }
          14% {
            transform:translate(34px,38px)
          }
          15% {
            transform:translate(34px,38px)
          }
          16% {
            transform:translate(34px,38px)
          }
          17% {
            transform:translate(34px,38px)
          }
          18% {
            transform:translate(34px,38px)
          }
          19% {
            transform:translate(34px,38px)
          }
          20% {
            transform:translate(34px,38px)
          }
          21% {
            transform:translate(34px,38px)
          }
          22% {
            transform:translate(34px,38px)
          }
          23% {
            transform:translate(34px,38px)
          }
          24% {
            transform:translate(34px,38px)
          }
          25% {
            transform:translate(34px,38px)
          }
          26% {
            transform:translate(34px,38px)
          }
          27% {
            transform:translate(34px,38px)
          }
          28% {
            transform:translate(34px,38px)
          }
          29% {
            transform:translate(34px,38px)
          }
          30% {
            transform:translate(34px,38px)
          }
          31% {
            transform:translate(34px,38px)
          }
          32% {
            transform:translate(34px,38px)
          }
          33% {
            transform:translate(34px,47px)
          }
          34% {
            transform:translate(34px,56px)
          }
          35% {
            transform:translate(34px,65px)
          }
          36% {
            transform:translate(34px,74px)
          }
          37% {
            transform:translate(34px,83px)
          }
          38% {
            transform:translate(34px,92px)
          }
          39% {
            transform:translate(34.571px,92px)
          }
          40% {
            transform:translate(35.143px,92px)
          }
          41% {
            transform:translate(35.714px,92px)
          }
          42% {
            transform:translate(36.286px,92px)
          }
          43% {
            transform:translate(36.857px,92px)
          }
          44% {
            transform:translate(37.429px,92px)
          }
          45% {
            transform:translate(38px,92px)
          }
          46% {
            transform:translate(38px,92px)
          }
          47% {
            transform:translate(38px,92px)
          }
          48% {
            transform:translate(38px,92px)
          }
          49% {
            transform:translate(38px,92px)
          }
          50% {
            transform:translate(38px,92px)
          }
          51% {
            transform:translate(38px,92px)
          }
          52% {
            transform:translate(38px,92px)
          }
          53% {
            transform:translate(38px,92px)
          }
          54% {
            transform:translate(38px,92px)
          }
          55% {
            transform:translate(38px,92px)
          }
          56% {
            transform:translate(36.286px,81.286px)
          }
          57% {
            transform:translate(34.571px,70.571px)
          }
          58% {
            transform:translate(42px,67px)
          }
          59% {
            transform:translate(54px,67px)
          }
          60% {
            transform:translate(62px,68.571px)
          }
          61% {
            transform:translate(62px,73.286px)
          }
          62% {
            transform:translate(62px,78px)
          }
          63% {
            transform:translate(62px,78px)
          }
          64% {
            transform:translate(62px,78px)
          }
          65% {
            transform:translate(62px,78px)
          }
          66% {
            transform:translate(62px,78px)
          }
          67% {
            transform:translate(62px,78px)
          }
          68% {
            transform:translate(62px,78px)
          }
          69% {
            transform:translate(62px,78px)
          }
          70% {
            transform:translate(62px,78px)
          }
          71% {
            transform:translate(62px,78px)
          }
          72% {
            transform:translate(62px,78px)
          }
          73% {
            transform:translate(62px,78px)
          }
          74% {
            transform:translate(62px,78px)
          }
          75% {
            transform:translate(62px,78px)
          }
          76% {
            transform:translate(60.8px,73.9px)
          }
          77% {
            transform:translate(59.6px,69.8px)
          }
          78% {
            transform:translate(58.4px,65.7px)
          }
          79% {
            transform:translate(57.2px,61.6px)
          }
          80% {
            transform:translate(56px,57.5px)
          }
          81% {
            transform:translate(54.8px,53.4px)
          }
          82% {
            transform:translate(53.6px,49.3px)
          }
          83% {
            transform:translate(52.4px,45.2px)
          }
          84% {
            transform:translate(51.2px,41.1px)
          }
          85% {
            transform:translate(50px,37px)
          }
          86% {
            transform:translate(50px,37px)
          }
          87% {
            transform:translate(50px,37px)
          }
          88% {
            transform:translate(50px,37px)
          }
          89% {
            transform:translate(50px,37px)
          }
          90% {
            transform:translate(50px,37px)
          }
          91% {
            transform:translate(50px,37px)
          }
          92% {
            transform:translate(50px,37px)
          }
          93% {
            transform:translate(50px,37px)
          }
          94% {
            transform:translate(50px,37px)
          }
          95% {
            transform:translate(50px,37px)
          }
          96% {
            transform:translate(50px,37px)
          }
          97% {
            transform:translate(50px,37px)
          }
          98% {
            transform:translate(50px,37px)
          }
          99% {
            transform:translate(50px,37px)
          }
          100% {
            transform:translate(50px,37px)
          }
        }
        .atom4 {
          transform:translate(40px,53px);
          animation:atom4 16s linear infinite
        }
        @keyframes atom4 {
          0% {
            transform:translate(50px,23px)
          }
          1% {
            transform:translate(50px,23px)
          }
          2% {
            transform:translate(50px,23px)
          }
          3% {
            transform:translate(50px,23px)
          }
          4% {
            transform:translate(50px,23px)
          }
          5% {
            transform:translate(50px,23px)
          }
          6% {
            transform:translate(50px,23px)
          }
          7% {
            transform:translate(50px,23px)
          }
          8% {
            transform:translate(50px,23px)
          }
          9% {
            transform:translate(50px,23px)
          }
          10% {
            transform:translate(50px,23px)
          }
          11% {
            transform:translate(50px,23px)
          }
          12% {
            transform:translate(50px,23px)
          }
          13% {
            transform:translate(50px,23px)
          }
          14% {
            transform:translate(50px,23px)
          }
          15% {
            transform:translate(50px,23px)
          }
          16% {
            transform:translate(50px,23px)
          }
          17% {
            transform:translate(50px,23px)
          }
          18% {
            transform:translate(50px,23px)
          }
          19% {
            transform:translate(50px,23px)
          }
          20% {
            transform:translate(50px,23px)
          }
          21% {
            transform:translate(50px,23px)
          }
          22% {
            transform:translate(50px,23px)
          }
          23% {
            transform:translate(50px,23px)
          }
          24% {
            transform:translate(50px,23px)
          }
          25% {
            transform:translate(50px,23px)
          }
          26% {
            transform:translate(50px,23px)
          }
          27% {
            transform:translate(50px,23px)
          }
          28% {
            transform:translate(50px,23px)
          }
          29% {
            transform:translate(50px,23px)
          }
          30% {
            transform:translate(50px,23px)
          }
          31% {
            transform:translate(50px,23px)
          }
          32% {
            transform:translate(50px,23px)
          }
          33% {
            transform:translate(52.667px,34.5px)
          }
          34% {
            transform:translate(55.333px,46px)
          }
          35% {
            transform:translate(58px,57.5px)
          }
          36% {
            transform:translate(60.667px,69px)
          }
          37% {
            transform:translate(63.333px,80.5px)
          }
          38% {
            transform:translate(66px,92px)
          }
          39% {
            transform:translate(63.714px,92px)
          }
          40% {
            transform:translate(61.429px,92px)
          }
          41% {
            transform:translate(59.143px,92px)
          }
          42% {
            transform:translate(56.857px,92px)
          }
          43% {
            transform:translate(54.571px,92px)
          }
          44% {
            transform:translate(52.286px,92px)
          }
          45% {
            transform:translate(50px,92px)
          }
          46% {
            transform:translate(50px,92px)
          }
          47% {
            transform:translate(50px,92px)
          }
          48% {
            transform:translate(50px,92px)
          }
          49% {
            transform:translate(50px,92px)
          }
          50% {
            transform:translate(50px,92px)
          }
          51% {
            transform:translate(50px,92px)
          }
          52% {
            transform:translate(50px,92px)
          }
          53% {
            transform:translate(50px,92px)
          }
          54% {
            transform:translate(50px,92px)
          }
          55% {
            transform:translate(50px,92px)
          }
          56% {
            transform:translate(50px,92px)
          }
          57% {
            transform:translate(50px,92px)
          }
          58% {
            transform:translate(50px,92px)
          }
          59% {
            transform:translate(50px,92px)
          }
          60% {
            transform:translate(50px,92px)
          }
          61% {
            transform:translate(50px,92px)
          }
          62% {
            transform:translate(50px,92px)
          }
          63% {
            transform:translate(50px,92px)
          }
          64% {
            transform:translate(50px,92px)
          }
          65% {
            transform:translate(50px,92px)
          }
          66% {
            transform:translate(50.286px,92.286px)
          }
          67% {
            transform:translate(50.571px,92.571px)
          }
          68% {
            transform:translate(50.857px,92.857px)
          }
          69% {
            transform:translate(51.143px,93.143px)
          }
          70% {
            transform:translate(51.429px,93.429px)
          }
          71% {
            transform:translate(51.714px,93.714px)
          }
          72% {
            transform:translate(52px,94px)
          }
          73% {
            transform:translate(52px,94px)
          }
          74% {
            transform:translate(52px,94px)
          }
          75% {
            transform:translate(52px,94px)
          }
          76% {
            transform:translate(50.8px,89.9px)
          }
          77% {
            transform:translate(49.6px,85.8px)
          }
          78% {
            transform:translate(48.4px,81.7px)
          }
          79% {
            transform:translate(47.2px,77.6px)
          }
          80% {
            transform:translate(46px,73.5px)
          }
          81% {
            transform:translate(44.8px,69.4px)
          }
          82% {
            transform:translate(43.6px,65.3px)
          }
          83% {
            transform:translate(42.4px,61.2px)
          }
          84% {
            transform:translate(41.2px,57.1px)
          }
          85% {
            transform:translate(40px,53px)
          }
          86% {
            transform:translate(40px,53px)
          }
          87% {
            transform:translate(40px,53px)
          }
          88% {
            transform:translate(40px,53px)
          }
          89% {
            transform:translate(40px,53px)
          }
          90% {
            transform:translate(40px,53px)
          }
          91% {
            transform:translate(40px,53px)
          }
          92% {
            transform:translate(40px,53px)
          }
          93% {
            transform:translate(40px,53px)
          }
          94% {
            transform:translate(40px,53px)
          }
          95% {
            transform:translate(40px,53px)
          }
          96% {
            transform:translate(40px,53px)
          }
          97% {
            transform:translate(40px,53px)
          }
          98% {
            transform:translate(40px,53px)
          }
          99% {
            transform:translate(40px,53px)
          }
          100% {
            transform:translate(40px,53px)
          }
        }
        .atom5 {
          transform:translate(90px,37px);
          animation:atom5 16s linear infinite
        }
        @keyframes atom5 {
          0% {
            transform:translate(58px,23px)
          }
          1% {
            transform:translate(58px,23px)
          }
          2% {
            transform:translate(58px,23px)
          }
          3% {
            transform:translate(58px,23px)
          }
          4% {
            transform:translate(58px,23px)
          }
          5% {
            transform:translate(58px,23px)
          }
          6% {
            transform:translate(58px,23px)
          }
          7% {
            transform:translate(58px,23px)
          }
          8% {
            transform:translate(58px,23px)
          }
          9% {
            transform:translate(58px,23px)
          }
          10% {
            transform:translate(58px,23px)
          }
          11% {
            transform:translate(58px,23px)
          }
          12% {
            transform:translate(58px,23px)
          }
          13% {
            transform:translate(58px,23px)
          }
          14% {
            transform:translate(58px,23px)
          }
          15% {
            transform:translate(58px,23px)
          }
          16% {
            transform:translate(58px,23px)
          }
          17% {
            transform:translate(58px,23px)
          }
          18% {
            transform:translate(58px,23px)
          }
          19% {
            transform:translate(58px,23px)
          }
          20% {
            transform:translate(58px,23px)
          }
          21% {
            transform:translate(58px,23px)
          }
          22% {
            transform:translate(58px,23px)
          }
          23% {
            transform:translate(58px,23px)
          }
          24% {
            transform:translate(58px,23px)
          }
          25% {
            transform:translate(58px,23px)
          }
          26% {
            transform:translate(58px,23px)
          }
          27% {
            transform:translate(58px,23px)
          }
          28% {
            transform:translate(58px,23px)
          }
          29% {
            transform:translate(58px,23px)
          }
          30% {
            transform:translate(58px,23px)
          }
          31% {
            transform:translate(58px,23px)
          }
          32% {
            transform:translate(58px,23px)
          }
          33% {
            transform:translate(60.667px,34.5px)
          }
          34% {
            transform:translate(63.333px,46px)
          }
          35% {
            transform:translate(66px,57.5px)
          }
          36% {
            transform:translate(68.667px,69px)
          }
          37% {
            transform:translate(71.333px,80.5px)
          }
          38% {
            transform:translate(74px,92px)
          }
          39% {
            transform:translate(76.286px,92px)
          }
          40% {
            transform:translate(78.571px,92px)
          }
          41% {
            transform:translate(80.857px,92px)
          }
          42% {
            transform:translate(83.143px,92px)
          }
          43% {
            transform:translate(85.429px,92px)
          }
          44% {
            transform:translate(87.714px,92px)
          }
          45% {
            transform:translate(90px,92px)
          }
          46% {
            transform:translate(84.286px,92px)
          }
          47% {
            transform:translate(78.571px,92px)
          }
          48% {
            transform:translate(72.857px,92px)
          }
          49% {
            transform:translate(70.571px,90px)
          }
          50% {
            transform:translate(71.714px,86px)
          }
          51% {
            transform:translate(72.857px,82px)
          }
          52% {
            transform:translate(74px,78px)
          }
          53% {
            transform:translate(74px,78px)
          }
          54% {
            transform:translate(74px,78px)
          }
          55% {
            transform:translate(74px,78px)
          }
          56% {
            transform:translate(74px,78px)
          }
          57% {
            transform:translate(74px,78px)
          }
          58% {
            transform:translate(74px,78px)
          }
          59% {
            transform:translate(74px,78px)
          }
          60% {
            transform:translate(74px,78px)
          }
          61% {
            transform:translate(74px,78px)
          }
          62% {
            transform:translate(74px,78px)
          }
          63% {
            transform:translate(74px,78px)
          }
          64% {
            transform:translate(74px,78px)
          }
          65% {
            transform:translate(74px,78px)
          }
          66% {
            transform:translate(74px,78px)
          }
          67% {
            transform:translate(74px,78px)
          }
          68% {
            transform:translate(74px,78px)
          }
          69% {
            transform:translate(74px,78px)
          }
          70% {
            transform:translate(74px,78px)
          }
          71% {
            transform:translate(74px,78px)
          }
          72% {
            transform:translate(74px,78px)
          }
          73% {
            transform:translate(74px,78px)
          }
          74% {
            transform:translate(74px,78px)
          }
          75% {
            transform:translate(74px,78px)
          }
          76% {
            transform:translate(75.6px,73.9px)
          }
          77% {
            transform:translate(77.2px,69.8px)
          }
          78% {
            transform:translate(78.8px,65.7px)
          }
          79% {
            transform:translate(80.4px,61.6px)
          }
          80% {
            transform:translate(82px,57.5px)
          }
          81% {
            transform:translate(83.6px,53.4px)
          }
          82% {
            transform:translate(85.2px,49.3px)
          }
          83% {
            transform:translate(86.8px,45.2px)
          }
          84% {
            transform:translate(88.4px,41.1px)
          }
          85% {
            transform:translate(90px,37px)
          }
          86% {
            transform:translate(90px,37px)
          }
          87% {
            transform:translate(90px,37px)
          }
          88% {
            transform:translate(90px,37px)
          }
          89% {
            transform:translate(90px,37px)
          }
          90% {
            transform:translate(90px,37px)
          }
          91% {
            transform:translate(90px,37px)
          }
          92% {
            transform:translate(90px,37px)
          }
          93% {
            transform:translate(90px,37px)
          }
          94% {
            transform:translate(90px,37px)
          }
          95% {
            transform:translate(90px,37px)
          }
          96% {
            transform:translate(90px,37px)
          }
          97% {
            transform:translate(90px,37px)
          }
          98% {
            transform:translate(90px,37px)
          }
          99% {
            transform:translate(90px,37px)
          }
          100% {
            transform:translate(90px,37px)
          }
        }
        .atom6 {
          transform:translate(110px,37px);
          animation:atom6 16s linear infinite
        }
        @keyframes atom6 {
          0% {
            transform:translate(100px,38px)
          }
          1% {
            transform:translate(100px,38px)
          }
          2% {
            transform:translate(100px,38px)
          }
          3% {
            transform:translate(100px,38px)
          }
          4% {
            transform:translate(100px,38px)
          }
          5% {
            transform:translate(100px,38px)
          }
          6% {
            transform:translate(100px,38px)
          }
          7% {
            transform:translate(100px,38px)
          }
          8% {
            transform:translate(100px,38px)
          }
          9% {
            transform:translate(100px,38px)
          }
          10% {
            transform:translate(100px,38px)
          }
          11% {
            transform:translate(100px,38px)
          }
          12% {
            transform:translate(100px,38px)
          }
          13% {
            transform:translate(100px,38px)
          }
          14% {
            transform:translate(100px,38px)
          }
          15% {
            transform:translate(100px,38px)
          }
          16% {
            transform:translate(100px,38px)
          }
          17% {
            transform:translate(100px,38px)
          }
          18% {
            transform:translate(100px,38px)
          }
          19% {
            transform:translate(100px,38px)
          }
          20% {
            transform:translate(100px,38px)
          }
          21% {
            transform:translate(100px,38px)
          }
          22% {
            transform:translate(100px,38px)
          }
          23% {
            transform:translate(100px,38px)
          }
          24% {
            transform:translate(100px,38px)
          }
          25% {
            transform:translate(100px,38px)
          }
          26% {
            transform:translate(100px,38px)
          }
          27% {
            transform:translate(100px,38px)
          }
          28% {
            transform:translate(100px,38px)
          }
          29% {
            transform:translate(100px,38px)
          }
          30% {
            transform:translate(100px,38px)
          }
          31% {
            transform:translate(100px,38px)
          }
          32% {
            transform:translate(100px,38px)
          }
          33% {
            transform:translate(101px,47px)
          }
          34% {
            transform:translate(102px,56px)
          }
          35% {
            transform:translate(103px,65px)
          }
          36% {
            transform:translate(104px,74px)
          }
          37% {
            transform:translate(105px,83px)
          }
          38% {
            transform:translate(106px,92px)
          }
          39% {
            transform:translate(105.429px,92px)
          }
          40% {
            transform:translate(104.857px,92px)
          }
          41% {
            transform:translate(104.286px,92px)
          }
          42% {
            transform:translate(103.714px,92px)
          }
          43% {
            transform:translate(103.143px,92px)
          }
          44% {
            transform:translate(102.571px,92px)
          }
          45% {
            transform:translate(102px,92px)
          }
          46% {
            transform:translate(102px,92px)
          }
          47% {
            transform:translate(102px,92px)
          }
          48% {
            transform:translate(102px,92px)
          }
          49% {
            transform:translate(102px,92px)
          }
          50% {
            transform:translate(102px,92px)
          }
          51% {
            transform:translate(102px,92px)
          }
          52% {
            transform:translate(102px,92px)
          }
          53% {
            transform:translate(102px,92px)
          }
          54% {
            transform:translate(102px,92px)
          }
          55% {
            transform:translate(102px,92px)
          }
          56% {
            transform:translate(103.714px,86.286px)
          }
          57% {
            transform:translate(105.429px,80.571px)
          }
          58% {
            transform:translate(107.143px,74.857px)
          }
          59% {
            transform:translate(106px,72.857px)
          }
          60% {
            transform:translate(102px,74.571px)
          }
          61% {
            transform:translate(98px,76.286px)
          }
          62% {
            transform:translate(94px,78px)
          }
          63% {
            transform:translate(94px,78px)
          }
          64% {
            transform:translate(94px,78px)
          }
          65% {
            transform:translate(94px,78px)
          }
          66% {
            transform:translate(94px,78px)
          }
          67% {
            transform:translate(94px,78px)
          }
          68% {
            transform:translate(94px,78px)
          }
          69% {
            transform:translate(94px,78px)
          }
          70% {
            transform:translate(94px,78px)
          }
          71% {
            transform:translate(94px,78px)
          }
          72% {
            transform:translate(94px,78px)
          }
          73% {
            transform:translate(94px,78px)
          }
          74% {
            transform:translate(94px,78px)
          }
          75% {
            transform:translate(94px,78px)
          }
          76% {
            transform:translate(95.6px,73.9px)
          }
          77% {
            transform:translate(97.2px,69.8px)
          }
          78% {
            transform:translate(98.8px,65.7px)
          }
          79% {
            transform:translate(100.4px,61.6px)
          }
          80% {
            transform:translate(102px,57.5px)
          }
          81% {
            transform:translate(103.6px,53.4px)
          }
          82% {
            transform:translate(105.2px,49.3px)
          }
          83% {
            transform:translate(106.8px,45.2px)
          }
          84% {
            transform:translate(108.4px,41.1px)
          }
          85% {
            transform:translate(110px,37px)
          }
          86% {
            transform:translate(110px,37px)
          }
          87% {
            transform:translate(110px,37px)
          }
          88% {
            transform:translate(110px,37px)
          }
          89% {
            transform:translate(110px,37px)
          }
          90% {
            transform:translate(110px,37px)
          }
          91% {
            transform:translate(110px,37px)
          }
          92% {
            transform:translate(110px,37px)
          }
          93% {
            transform:translate(110px,37px)
          }
          94% {
            transform:translate(110px,37px)
          }
          95% {
            transform:translate(110px,37px)
          }
          96% {
            transform:translate(110px,37px)
          }
          97% {
            transform:translate(110px,37px)
          }
          98% {
            transform:translate(110px,37px)
          }
          99% {
            transform:translate(110px,37px)
          }
          100% {
            transform:translate(110px,37px)
          }
        }
        .atom7 {
          transform:translate(100px,53px);
          animation:atom7 16s linear infinite
        }
        @keyframes atom7 {
          0% {
            transform:translate(108px,38px)
          }
          1% {
            transform:translate(108px,38px)
          }
          2% {
            transform:translate(108px,38px)
          }
          3% {
            transform:translate(108px,38px)
          }
          4% {
            transform:translate(108px,38px)
          }
          5% {
            transform:translate(108px,38px)
          }
          6% {
            transform:translate(108px,38px)
          }
          7% {
            transform:translate(108px,38px)
          }
          8% {
            transform:translate(108px,38px)
          }
          9% {
            transform:translate(108px,38px)
          }
          10% {
            transform:translate(108px,38px)
          }
          11% {
            transform:translate(108px,38px)
          }
          12% {
            transform:translate(108px,38px)
          }
          13% {
            transform:translate(108px,38px)
          }
          14% {
            transform:translate(108px,38px)
          }
          15% {
            transform:translate(108px,38px)
          }
          16% {
            transform:translate(108px,38px)
          }
          17% {
            transform:translate(108px,38px)
          }
          18% {
            transform:translate(108px,38px)
          }
          19% {
            transform:translate(108px,38px)
          }
          20% {
            transform:translate(108px,38px)
          }
          21% {
            transform:translate(108px,38px)
          }
          22% {
            transform:translate(108px,38px)
          }
          23% {
            transform:translate(108px,38px)
          }
          24% {
            transform:translate(108px,38px)
          }
          25% {
            transform:translate(108px,38px)
          }
          26% {
            transform:translate(108px,38px)
          }
          27% {
            transform:translate(108px,38px)
          }
          28% {
            transform:translate(108px,38px)
          }
          29% {
            transform:translate(108px,38px)
          }
          30% {
            transform:translate(108px,38px)
          }
          31% {
            transform:translate(108px,38px)
          }
          32% {
            transform:translate(108px,38px)
          }
          33% {
            transform:translate(109px,47px)
          }
          34% {
            transform:translate(110px,56px)
          }
          35% {
            transform:translate(111px,65px)
          }
          36% {
            transform:translate(112px,74px)
          }
          37% {
            transform:translate(113px,83px)
          }
          38% {
            transform:translate(114px,92px)
          }
          39% {
            transform:translate(114px,92px)
          }
          40% {
            transform:translate(114px,92px)
          }
          41% {
            transform:translate(114px,92px)
          }
          42% {
            transform:translate(114px,92px)
          }
          43% {
            transform:translate(114px,92px)
          }
          44% {
            transform:translate(114px,92px)
          }
          45% {
            transform:translate(114px,92px)
          }
          46% {
            transform:translate(114px,92px)
          }
          47% {
            transform:translate(114px,92px)
          }
          48% {
            transform:translate(114px,92px)
          }
          49% {
            transform:translate(114px,92px)
          }
          50% {
            transform:translate(114px,92px)
          }
          51% {
            transform:translate(114px,92px)
          }
          52% {
            transform:translate(114px,92px)
          }
          53% {
            transform:translate(114px,92px)
          }
          54% {
            transform:translate(114px,92px)
          }
          55% {
            transform:translate(114px,92px)
          }
          56% {
            transform:translate(114px,92px)
          }
          57% {
            transform:translate(114px,92px)
          }
          58% {
            transform:translate(114px,92px)
          }
          59% {
            transform:translate(114px,92px)
          }
          60% {
            transform:translate(114px,92px)
          }
          61% {
            transform:translate(114px,92px)
          }
          62% {
            transform:translate(114px,92px)
          }
          63% {
            transform:translate(114px,92px)
          }
          64% {
            transform:translate(114px,92px)
          }
          65% {
            transform:translate(114px,92px)
          }
          66% {
            transform:translate(111.714px,93.143px)
          }
          67% {
            transform:translate(109.429px,94.286px)
          }
          68% {
            transform:translate(107.143px,95.429px)
          }
          69% {
            transform:translate(102.857px,95.714px)
          }
          70% {
            transform:translate(96.571px,95.143px)
          }
          71% {
            transform:translate(90.286px,94.571px)
          }
          72% {
            transform:translate(84px,94px)
          }
          73% {
            transform:translate(84px,94px)
          }
          74% {
            transform:translate(84px,94px)
          }
          75% {
            transform:translate(84px,94px)
          }
          76% {
            transform:translate(85.6px,89.9px)
          }
          77% {
            transform:translate(87.2px,85.8px)
          }
          78% {
            transform:translate(88.8px,81.7px)
          }
          79% {
            transform:translate(90.4px,77.6px)
          }
          80% {
            transform:translate(92px,73.5px)
          }
          81% {
            transform:translate(93.6px,69.4px)
          }
          82% {
            transform:translate(95.2px,65.3px)
          }
          83% {
            transform:translate(96.8px,61.2px)
          }
          84% {
            transform:translate(98.4px,57.1px)
          }
          85% {
            transform:translate(100px,53px)
          }
          86% {
            transform:translate(100px,53px)
          }
          87% {
            transform:translate(100px,53px)
          }
          88% {
            transform:translate(100px,53px)
          }
          89% {
            transform:translate(100px,53px)
          }
          90% {
            transform:translate(100px,53px)
          }
          91% {
            transform:translate(100px,53px)
          }
          92% {
            transform:translate(100px,53px)
          }
          93% {
            transform:translate(100px,53px)
          }
          94% {
            transform:translate(100px,53px)
          }
          95% {
            transform:translate(100px,53px)
          }
          96% {
            transform:translate(100px,53px)
          }
          97% {
            transform:translate(100px,53px)
          }
          98% {
            transform:translate(100px,53px)
          }
          99% {
            transform:translate(100px,53px)
          }
          100% {
            transform:translate(100px,53px)
          }
        }
        .nn0 {
          opacity:0;
          animation:nn0 16s linear infinite,nitrogenBreak 16s linear infinite
        }
        @keyframes nn0 {
          0% {
            d:path('M64,48.5L76,48.5')
          }
          1% {
            d:path('M64,48.5L76,48.5')
          }
          2% {
            d:path('M64,48.5L76,48.5')
          }
          3% {
            d:path('M64,48.5L76,48.5')
          }
          4% {
            d:path('M64,48.5L76,48.5')
          }
          5% {
            d:path('M64,48.5L76,48.5')
          }
          6% {
            d:path('M64,48.5L76,48.5')
          }
          7% {
            d:path('M64,48.5L76,48.5')
          }
          8% {
            d:path('M64,48.5L76,48.5')
          }
          9% {
            d:path('M64,48.5L76,48.5')
          }
          10% {
            d:path('M64,48.5L76,48.5')
          }
          11% {
            d:path('M64,48.5L76,48.5')
          }
          12% {
            d:path('M64,48.5L76,48.5')
          }
          13% {
            d:path('M64,48.5L76,48.5')
          }
          14% {
            d:path('M64,48.5L76,48.5')
          }
          15% {
            d:path('M64,48.5L76,48.5')
          }
          16% {
            d:path('M64,50.567L76,50.567')
          }
          17% {
            d:path('M64,52.633L76,52.633')
          }
          18% {
            d:path('M64,54.7L76,54.7')
          }
          19% {
            d:path('M64,56.767L76,56.767')
          }
          20% {
            d:path('M64,58.833L76,58.833')
          }
          21% {
            d:path('M64,60.9L76,60.9')
          }
          22% {
            d:path('M64,62.967L76,62.967')
          }
          23% {
            d:path('M64,65.033L76,65.033')
          }
          24% {
            d:path('M64,67.1L76,67.1')
          }
          25% {
            d:path('M64,69.167L76,69.167')
          }
          26% {
            d:path('M64,71.233L76,71.233')
          }
          27% {
            d:path('M64,73.3L76,73.3')
          }
          28% {
            d:path('M64,75.367L76,75.367')
          }
          29% {
            d:path('M64,77.433L76,77.433')
          }
          30% {
            d:path('M64,79.5L76,79.5')
          }
          31% {
            d:path('M62.8,79.7L76.8,79.7')
          }
          32% {
            d:path('M61.6,79.9L77.6,79.9')
          }
          33% {
            d:path('M60.4,80.1L78.4,80.1')
          }
          34% {
            d:path('M59.2,80.3L79.2,80.3')
          }
          35% {
            d:path('M58,80.5L80,80.5')
          }
          36% {
            d:path('M56.8,80.7L80.8,80.7')
          }
          37% {
            d:path('M55.6,80.9L81.6,80.9')
          }
          38% {
            d:path('M54.4,81.1L82.4,81.1')
          }
          39% {
            d:path('M53.2,81.3L83.2,81.3')
          }
          40% {
            d:path('M52,81.5L84,81.5')
          }
          41% {
            d:path('M52,81.5L84,81.5')
          }
          42% {
            d:path('M52,81.5L84,81.5')
          }
          43% {
            d:path('M52,81.5L84,81.5')
          }
          44% {
            d:path('M52,81.5L84,81.5')
          }
          45% {
            d:path('M52,81.5L84,81.5')
          }
          46% {
            d:path('M52,81.5L84,81.5')
          }
          47% {
            d:path('M52,81.5L84,81.5')
          }
          48% {
            d:path('M52,81.5L84,81.5')
          }
          49% {
            d:path('M52,81.5L84,81.5')
          }
          50% {
            d:path('M52,81.5L84,81.5')
          }
          51% {
            d:path('M52,81.5L84,81.5')
          }
          52% {
            d:path('M52,81.5L84,81.5')
          }
          53% {
            d:path('M52,81.5L84,81.5')
          }
          54% {
            d:path('M52,81.5L84,81.5')
          }
          55% {
            d:path('M52,81.5L84,81.5')
          }
          56% {
            d:path('M52,81.5L84,81.5')
          }
          57% {
            d:path('M52,81.5L84,81.5')
          }
          58% {
            d:path('M52,81.5L84,81.5')
          }
          59% {
            d:path('M52,81.5L84,81.5')
          }
          60% {
            d:path('M52,81.5L84,81.5')
          }
          61% {
            d:path('M52,81.5L84,81.5')
          }
          62% {
            d:path('M52,81.5L84,81.5')
          }
          63% {
            d:path('M52,81.5L84,81.5')
          }
          64% {
            d:path('M52,81.5L84,81.5')
          }
          65% {
            d:path('M52,81.5L84,81.5')
          }
          66% {
            d:path('M52,81.5L84,81.5')
          }
          67% {
            d:path('M52,81.5L84,81.5')
          }
          68% {
            d:path('M52,81.5L84,81.5')
          }
          69% {
            d:path('M52,81.5L84,81.5')
          }
          70% {
            d:path('M52,81.5L84,81.5')
          }
          71% {
            d:path('M52,81.5L84,81.5')
          }
          72% {
            d:path('M52,81.5L84,81.5')
          }
          73% {
            d:path('M52,81.5L84,81.5')
          }
          74% {
            d:path('M52,81.5L84,81.5')
          }
          75% {
            d:path('M52,81.5L84,81.5')
          }
          76% {
            d:path('M50.8,77.4L85.6,77.4')
          }
          77% {
            d:path('M49.6,73.3L87.2,73.3')
          }
          78% {
            d:path('M48.4,69.2L88.8,69.2')
          }
          79% {
            d:path('M47.2,65.1L90.4,65.1')
          }
          80% {
            d:path('M46,61L92,61')
          }
          81% {
            d:path('M44.8,56.9L93.6,56.9')
          }
          82% {
            d:path('M43.6,52.8L95.2,52.8')
          }
          83% {
            d:path('M42.4,48.7L96.8,48.7')
          }
          84% {
            d:path('M41.2,44.6L98.4,44.6')
          }
          85% {
            d:path('M40,40.5L100,40.5')
          }
          86% {
            d:path('M40,40.5L100,40.5')
          }
          87% {
            d:path('M40,40.5L100,40.5')
          }
          88% {
            d:path('M40,40.5L100,40.5')
          }
          89% {
            d:path('M40,40.5L100,40.5')
          }
          90% {
            d:path('M40,40.5L100,40.5')
          }
          91% {
            d:path('M40,40.5L100,40.5')
          }
          92% {
            d:path('M40,40.5L100,40.5')
          }
          93% {
            d:path('M40,40.5L100,40.5')
          }
          94% {
            d:path('M40,40.5L100,40.5')
          }
          95% {
            d:path('M40,40.5L100,40.5')
          }
          96% {
            d:path('M40,40.5L100,40.5')
          }
          97% {
            d:path('M40,40.5L100,40.5')
          }
          98% {
            d:path('M40,40.5L100,40.5')
          }
          99% {
            d:path('M40,40.5L100,40.5')
          }
          100% {
            d:path('M40,40.5L100,40.5')
          }
        }
        .nn1 {
          opacity:0;
          animation:nn1 16s linear infinite,nitrogenBreak 16s linear infinite
        }
        @keyframes nn1 {
          0% {
            d:path('M64,51L76,51')
          }
          1% {
            d:path('M64,51L76,51')
          }
          2% {
            d:path('M64,51L76,51')
          }
          3% {
            d:path('M64,51L76,51')
          }
          4% {
            d:path('M64,51L76,51')
          }
          5% {
            d:path('M64,51L76,51')
          }
          6% {
            d:path('M64,51L76,51')
          }
          7% {
            d:path('M64,51L76,51')
          }
          8% {
            d:path('M64,51L76,51')
          }
          9% {
            d:path('M64,51L76,51')
          }
          10% {
            d:path('M64,51L76,51')
          }
          11% {
            d:path('M64,51L76,51')
          }
          12% {
            d:path('M64,51L76,51')
          }
          13% {
            d:path('M64,51L76,51')
          }
          14% {
            d:path('M64,51L76,51')
          }
          15% {
            d:path('M64,51L76,51')
          }
          16% {
            d:path('M64,53.067L76,53.067')
          }
          17% {
            d:path('M64,55.133L76,55.133')
          }
          18% {
            d:path('M64,57.2L76,57.2')
          }
          19% {
            d:path('M64,59.267L76,59.267')
          }
          20% {
            d:path('M64,61.333L76,61.333')
          }
          21% {
            d:path('M64,63.4L76,63.4')
          }
          22% {
            d:path('M64,65.467L76,65.467')
          }
          23% {
            d:path('M64,67.533L76,67.533')
          }
          24% {
            d:path('M64,69.6L76,69.6')
          }
          25% {
            d:path('M64,71.667L76,71.667')
          }
          26% {
            d:path('M64,73.733L76,73.733')
          }
          27% {
            d:path('M64,75.8L76,75.8')
          }
          28% {
            d:path('M64,77.867L76,77.867')
          }
          29% {
            d:path('M64,79.933L76,79.933')
          }
          30% {
            d:path('M64,82L76,82')
          }
          31% {
            d:path('M62.8,82.2L76.8,82.2')
          }
          32% {
            d:path('M61.6,82.4L77.6,82.4')
          }
          33% {
            d:path('M60.4,82.6L78.4,82.6')
          }
          34% {
            d:path('M59.2,82.8L79.2,82.8')
          }
          35% {
            d:path('M58,83L80,83')
          }
          36% {
            d:path('M56.8,83.2L80.8,83.2')
          }
          37% {
            d:path('M55.6,83.4L81.6,83.4')
          }
          38% {
            d:path('M54.4,83.6L82.4,83.6')
          }
          39% {
            d:path('M53.2,83.8L83.2,83.8')
          }
          40% {
            d:path('M52,84L84,84')
          }
          41% {
            d:path('M52,84L84,84')
          }
          42% {
            d:path('M52,84L84,84')
          }
          43% {
            d:path('M52,84L84,84')
          }
          44% {
            d:path('M52,84L84,84')
          }
          45% {
            d:path('M52,84L84,84')
          }
          46% {
            d:path('M52,84L84,84')
          }
          47% {
            d:path('M52,84L84,84')
          }
          48% {
            d:path('M52,84L84,84')
          }
          49% {
            d:path('M52,84L84,84')
          }
          50% {
            d:path('M52,84L84,84')
          }
          51% {
            d:path('M52,84L84,84')
          }
          52% {
            d:path('M52,84L84,84')
          }
          53% {
            d:path('M52,84L84,84')
          }
          54% {
            d:path('M52,84L84,84')
          }
          55% {
            d:path('M52,84L84,84')
          }
          56% {
            d:path('M52,84L84,84')
          }
          57% {
            d:path('M52,84L84,84')
          }
          58% {
            d:path('M52,84L84,84')
          }
          59% {
            d:path('M52,84L84,84')
          }
          60% {
            d:path('M52,84L84,84')
          }
          61% {
            d:path('M52,84L84,84')
          }
          62% {
            d:path('M52,84L84,84')
          }
          63% {
            d:path('M52,84L84,84')
          }
          64% {
            d:path('M52,84L84,84')
          }
          65% {
            d:path('M52,84L84,84')
          }
          66% {
            d:path('M52,84L84,84')
          }
          67% {
            d:path('M52,84L84,84')
          }
          68% {
            d:path('M52,84L84,84')
          }
          69% {
            d:path('M52,84L84,84')
          }
          70% {
            d:path('M52,84L84,84')
          }
          71% {
            d:path('M52,84L84,84')
          }
          72% {
            d:path('M52,84L84,84')
          }
          73% {
            d:path('M52,84L84,84')
          }
          74% {
            d:path('M52,84L84,84')
          }
          75% {
            d:path('M52,84L84,84')
          }
          76% {
            d:path('M50.8,79.9L85.6,79.9')
          }
          77% {
            d:path('M49.6,75.8L87.2,75.8')
          }
          78% {
            d:path('M48.4,71.7L88.8,71.7')
          }
          79% {
            d:path('M47.2,67.6L90.4,67.6')
          }
          80% {
            d:path('M46,63.5L92,63.5')
          }
          81% {
            d:path('M44.8,59.4L93.6,59.4')
          }
          82% {
            d:path('M43.6,55.3L95.2,55.3')
          }
          83% {
            d:path('M42.4,51.2L96.8,51.2')
          }
          84% {
            d:path('M41.2,47.1L98.4,47.1')
          }
          85% {
            d:path('M40,43L100,43')
          }
          86% {
            d:path('M40,43L100,43')
          }
          87% {
            d:path('M40,43L100,43')
          }
          88% {
            d:path('M40,43L100,43')
          }
          89% {
            d:path('M40,43L100,43')
          }
          90% {
            d:path('M40,43L100,43')
          }
          91% {
            d:path('M40,43L100,43')
          }
          92% {
            d:path('M40,43L100,43')
          }
          93% {
            d:path('M40,43L100,43')
          }
          94% {
            d:path('M40,43L100,43')
          }
          95% {
            d:path('M40,43L100,43')
          }
          96% {
            d:path('M40,43L100,43')
          }
          97% {
            d:path('M40,43L100,43')
          }
          98% {
            d:path('M40,43L100,43')
          }
          99% {
            d:path('M40,43L100,43')
          }
          100% {
            d:path('M40,43L100,43')
          }
        }
        .nn2 {
          opacity:0;
          animation:nn2 16s linear infinite,nitrogenBreak 16s linear infinite
        }
        @keyframes nn2 {
          0% {
            d:path('M64,53.5L76,53.5')
          }
          1% {
            d:path('M64,53.5L76,53.5')
          }
          2% {
            d:path('M64,53.5L76,53.5')
          }
          3% {
            d:path('M64,53.5L76,53.5')
          }
          4% {
            d:path('M64,53.5L76,53.5')
          }
          5% {
            d:path('M64,53.5L76,53.5')
          }
          6% {
            d:path('M64,53.5L76,53.5')
          }
          7% {
            d:path('M64,53.5L76,53.5')
          }
          8% {
            d:path('M64,53.5L76,53.5')
          }
          9% {
            d:path('M64,53.5L76,53.5')
          }
          10% {
            d:path('M64,53.5L76,53.5')
          }
          11% {
            d:path('M64,53.5L76,53.5')
          }
          12% {
            d:path('M64,53.5L76,53.5')
          }
          13% {
            d:path('M64,53.5L76,53.5')
          }
          14% {
            d:path('M64,53.5L76,53.5')
          }
          15% {
            d:path('M64,53.5L76,53.5')
          }
          16% {
            d:path('M64,55.567L76,55.567')
          }
          17% {
            d:path('M64,57.633L76,57.633')
          }
          18% {
            d:path('M64,59.7L76,59.7')
          }
          19% {
            d:path('M64,61.767L76,61.767')
          }
          20% {
            d:path('M64,63.833L76,63.833')
          }
          21% {
            d:path('M64,65.9L76,65.9')
          }
          22% {
            d:path('M64,67.967L76,67.967')
          }
          23% {
            d:path('M64,70.033L76,70.033')
          }
          24% {
            d:path('M64,72.1L76,72.1')
          }
          25% {
            d:path('M64,74.167L76,74.167')
          }
          26% {
            d:path('M64,76.233L76,76.233')
          }
          27% {
            d:path('M64,78.3L76,78.3')
          }
          28% {
            d:path('M64,80.367L76,80.367')
          }
          29% {
            d:path('M64,82.433L76,82.433')
          }
          30% {
            d:path('M64,84.5L76,84.5')
          }
          31% {
            d:path('M62.8,84.7L76.8,84.7')
          }
          32% {
            d:path('M61.6,84.9L77.6,84.9')
          }
          33% {
            d:path('M60.4,85.1L78.4,85.1')
          }
          34% {
            d:path('M59.2,85.3L79.2,85.3')
          }
          35% {
            d:path('M58,85.5L80,85.5')
          }
          36% {
            d:path('M56.8,85.7L80.8,85.7')
          }
          37% {
            d:path('M55.6,85.9L81.6,85.9')
          }
          38% {
            d:path('M54.4,86.1L82.4,86.1')
          }
          39% {
            d:path('M53.2,86.3L83.2,86.3')
          }
          40% {
            d:path('M52,86.5L84,86.5')
          }
          41% {
            d:path('M52,86.5L84,86.5')
          }
          42% {
            d:path('M52,86.5L84,86.5')
          }
          43% {
            d:path('M52,86.5L84,86.5')
          }
          44% {
            d:path('M52,86.5L84,86.5')
          }
          45% {
            d:path('M52,86.5L84,86.5')
          }
          46% {
            d:path('M52,86.5L84,86.5')
          }
          47% {
            d:path('M52,86.5L84,86.5')
          }
          48% {
            d:path('M52,86.5L84,86.5')
          }
          49% {
            d:path('M52,86.5L84,86.5')
          }
          50% {
            d:path('M52,86.5L84,86.5')
          }
          51% {
            d:path('M52,86.5L84,86.5')
          }
          52% {
            d:path('M52,86.5L84,86.5')
          }
          53% {
            d:path('M52,86.5L84,86.5')
          }
          54% {
            d:path('M52,86.5L84,86.5')
          }
          55% {
            d:path('M52,86.5L84,86.5')
          }
          56% {
            d:path('M52,86.5L84,86.5')
          }
          57% {
            d:path('M52,86.5L84,86.5')
          }
          58% {
            d:path('M52,86.5L84,86.5')
          }
          59% {
            d:path('M52,86.5L84,86.5')
          }
          60% {
            d:path('M52,86.5L84,86.5')
          }
          61% {
            d:path('M52,86.5L84,86.5')
          }
          62% {
            d:path('M52,86.5L84,86.5')
          }
          63% {
            d:path('M52,86.5L84,86.5')
          }
          64% {
            d:path('M52,86.5L84,86.5')
          }
          65% {
            d:path('M52,86.5L84,86.5')
          }
          66% {
            d:path('M52,86.5L84,86.5')
          }
          67% {
            d:path('M52,86.5L84,86.5')
          }
          68% {
            d:path('M52,86.5L84,86.5')
          }
          69% {
            d:path('M52,86.5L84,86.5')
          }
          70% {
            d:path('M52,86.5L84,86.5')
          }
          71% {
            d:path('M52,86.5L84,86.5')
          }
          72% {
            d:path('M52,86.5L84,86.5')
          }
          73% {
            d:path('M52,86.5L84,86.5')
          }
          74% {
            d:path('M52,86.5L84,86.5')
          }
          75% {
            d:path('M52,86.5L84,86.5')
          }
          76% {
            d:path('M50.8,82.4L85.6,82.4')
          }
          77% {
            d:path('M49.6,78.3L87.2,78.3')
          }
          78% {
            d:path('M48.4,74.2L88.8,74.2')
          }
          79% {
            d:path('M47.2,70.1L90.4,70.1')
          }
          80% {
            d:path('M46,66L92,66')
          }
          81% {
            d:path('M44.8,61.9L93.6,61.9')
          }
          82% {
            d:path('M43.6,57.8L95.2,57.8')
          }
          83% {
            d:path('M42.4,53.7L96.8,53.7')
          }
          84% {
            d:path('M41.2,49.6L98.4,49.6')
          }
          85% {
            d:path('M40,45.5L100,45.5')
          }
          86% {
            d:path('M40,45.5L100,45.5')
          }
          87% {
            d:path('M40,45.5L100,45.5')
          }
          88% {
            d:path('M40,45.5L100,45.5')
          }
          89% {
            d:path('M40,45.5L100,45.5')
          }
          90% {
            d:path('M40,45.5L100,45.5')
          }
          91% {
            d:path('M40,45.5L100,45.5')
          }
          92% {
            d:path('M40,45.5L100,45.5')
          }
          93% {
            d:path('M40,45.5L100,45.5')
          }
          94% {
            d:path('M40,45.5L100,45.5')
          }
          95% {
            d:path('M40,45.5L100,45.5')
          }
          96% {
            d:path('M40,45.5L100,45.5')
          }
          97% {
            d:path('M40,45.5L100,45.5')
          }
          98% {
            d:path('M40,45.5L100,45.5')
          }
          99% {
            d:path('M40,45.5L100,45.5')
          }
          100% {
            d:path('M40,45.5L100,45.5')
          }
        }
        .hh0 {
          opacity:0;
          animation:hh0 16s linear infinite,hydrogenBreak 16s linear infinite
        }
        @keyframes hh0 {
          0% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          1% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          2% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          3% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          4% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          5% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          6% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          7% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          8% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          9% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          10% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          11% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          12% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          13% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          14% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          15% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          16% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          17% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          18% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          19% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          20% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          21% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          22% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          23% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          24% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          25% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          26% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          27% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          28% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          29% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          30% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          31% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          32% {
            d:path('M26.000,38.000L34.000,38.000')
          }
          33% {
            d:path('M26.000,47.000L34.000,47.000')
          }
          34% {
            d:path('M26.000,56.000L34.000,56.000')
          }
          35% {
            d:path('M26.000,65.000L34.000,65.000')
          }
          36% {
            d:path('M26.000,74.000L34.000,74.000')
          }
          37% {
            d:path('M26.000,83.000L34.000,83.000')
          }
          38% {
            d:path('M26.000,92.000L34.000,92.000')
          }
          39% {
            d:path('M26.000,92.000L34.571,92.000')
          }
          40% {
            d:path('M26.000,92.000L35.143,92.000')
          }
          41% {
            d:path('M26.000,92.000L35.714,92.000')
          }
          42% {
            d:path('M26.000,92.000L36.286,92.000')
          }
          43% {
            d:path('M26.000,92.000L36.857,92.000')
          }
          44% {
            d:path('M26.000,92.000L37.429,92.000')
          }
          45% {
            d:path('M26.000,92.000L38.000,92.000')
          }
          46% {
            d:path('M28.286,87.429L38.000,92.000')
          }
          47% {
            d:path('M30.571,82.857L38.000,92.000')
          }
          48% {
            d:path('M32.857,78.286L38.000,92.000')
          }
          49% {
            d:path('M35.143,76.286L38.000,92.000')
          }
          50% {
            d:path('M37.429,76.857L38.000,92.000')
          }
          51% {
            d:path('M39.714,77.429L38.000,92.000')
          }
          52% {
            d:path('M42.000,78.000L38.000,92.000')
          }
          53% {
            d:path('M42.000,78.000L38.000,92.000')
          }
          54% {
            d:path('M42.000,78.000L38.000,92.000')
          }
          55% {
            d:path('M42.000,78.000L38.000,92.000')
          }
          56% {
            d:path('M42.000,78.000L36.286,81.286')
          }
          57% {
            d:path('M42.000,78.000L34.571,70.571')
          }
          58% {
            d:path('M42.000,78.000L42.000,67.000')
          }
          59% {
            d:path('M42.000,78.000L54.000,67.000')
          }
          60% {
            d:path('M42.000,78.000L62.000,68.571')
          }
          61% {
            d:path('M42.000,78.000L62.000,73.286')
          }
          62% {
            d:path('M42.000,78.000L62.000,78.000')
          }
          63% {
            d:path('M42.000,78.000L62.000,78.000')
          }
          64% {
            d:path('M42.000,78.000L62.000,78.000')
          }
          65% {
            d:path('M42.000,78.000L62.000,78.000')
          }
          66% {
            d:path('M42.000,78.000L62.000,78.000')
          }
          67% {
            d:path('M42.000,78.000L62.000,78.000')
          }
          68% {
            d:path('M42.000,78.000L62.000,78.000')
          }
          69% {
            d:path('M42.000,78.000L62.000,78.000')
          }
          70% {
            d:path('M42.000,78.000L62.000,78.000')
          }
          71% {
            d:path('M42.000,78.000L62.000,78.000')
          }
          72% {
            d:path('M42.000,78.000L62.000,78.000')
          }
          73% {
            d:path('M42.000,78.000L62.000,78.000')
          }
          74% {
            d:path('M42.000,78.000L62.000,78.000')
          }
          75% {
            d:path('M42.000,78.000L62.000,78.000')
          }
          76% {
            d:path('M40.800,73.900L60.800,73.900')
          }
          77% {
            d:path('M39.600,69.800L59.600,69.800')
          }
          78% {
            d:path('M38.400,65.700L58.400,65.700')
          }
          79% {
            d:path('M37.200,61.600L57.200,61.600')
          }
          80% {
            d:path('M36.000,57.500L56.000,57.500')
          }
          81% {
            d:path('M34.800,53.400L54.800,53.400')
          }
          82% {
            d:path('M33.600,49.300L53.600,49.300')
          }
          83% {
            d:path('M32.400,45.200L52.400,45.200')
          }
          84% {
            d:path('M31.200,41.100L51.200,41.100')
          }
          85% {
            d:path('M30.000,37.000L50.000,37.000')
          }
          86% {
            d:path('M30.000,37.000L50.000,37.000')
          }
          87% {
            d:path('M30.000,37.000L50.000,37.000')
          }
          88% {
            d:path('M30.000,37.000L50.000,37.000')
          }
          89% {
            d:path('M30.000,37.000L50.000,37.000')
          }
          90% {
            d:path('M30.000,37.000L50.000,37.000')
          }
          91% {
            d:path('M30.000,37.000L50.000,37.000')
          }
          92% {
            d:path('M30.000,37.000L50.000,37.000')
          }
          93% {
            d:path('M30.000,37.000L50.000,37.000')
          }
          94% {
            d:path('M30.000,37.000L50.000,37.000')
          }
          95% {
            d:path('M30.000,37.000L50.000,37.000')
          }
          96% {
            d:path('M30.000,37.000L50.000,37.000')
          }
          97% {
            d:path('M30.000,37.000L50.000,37.000')
          }
          98% {
            d:path('M30.000,37.000L50.000,37.000')
          }
          99% {
            d:path('M30.000,37.000L50.000,37.000')
          }
          100% {
            d:path('M30.000,37.000L50.000,37.000')
          }
        }
        .hh1 {
          opacity:0;
          animation:hh1 16s linear infinite,hydrogenBreak 16s linear infinite
        }
        @keyframes hh1 {
          0% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          1% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          2% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          3% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          4% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          5% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          6% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          7% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          8% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          9% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          10% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          11% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          12% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          13% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          14% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          15% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          16% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          17% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          18% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          19% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          20% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          21% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          22% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          23% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          24% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          25% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          26% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          27% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          28% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          29% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          30% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          31% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          32% {
            d:path('M50.000,23.000L58.000,23.000')
          }
          33% {
            d:path('M52.667,34.500L60.667,34.500')
          }
          34% {
            d:path('M55.333,46.000L63.333,46.000')
          }
          35% {
            d:path('M58.000,57.500L66.000,57.500')
          }
          36% {
            d:path('M60.667,69.000L68.667,69.000')
          }
          37% {
            d:path('M63.333,80.500L71.333,80.500')
          }
          38% {
            d:path('M66.000,92.000L74.000,92.000')
          }
          39% {
            d:path('M63.714,92.000L76.286,92.000')
          }
          40% {
            d:path('M61.429,92.000L78.571,92.000')
          }
          41% {
            d:path('M59.143,92.000L80.857,92.000')
          }
          42% {
            d:path('M56.857,92.000L83.143,92.000')
          }
          43% {
            d:path('M54.571,92.000L85.429,92.000')
          }
          44% {
            d:path('M52.286,92.000L87.714,92.000')
          }
          45% {
            d:path('M50.000,92.000L90.000,92.000')
          }
          46% {
            d:path('M50.000,92.000L84.286,92.000')
          }
          47% {
            d:path('M50.000,92.000L78.571,92.000')
          }
          48% {
            d:path('M50.000,92.000L72.857,92.000')
          }
          49% {
            d:path('M50.000,92.000L70.571,90.000')
          }
          50% {
            d:path('M50.000,92.000L71.714,86.000')
          }
          51% {
            d:path('M50.000,92.000L72.857,82.000')
          }
          52% {
            d:path('M50.000,92.000L74.000,78.000')
          }
          53% {
            d:path('M50.000,92.000L74.000,78.000')
          }
          54% {
            d:path('M50.000,92.000L74.000,78.000')
          }
          55% {
            d:path('M50.000,92.000L74.000,78.000')
          }
          56% {
            d:path('M50.000,92.000L74.000,78.000')
          }
          57% {
            d:path('M50.000,92.000L74.000,78.000')
          }
          58% {
            d:path('M50.000,92.000L74.000,78.000')
          }
          59% {
            d:path('M50.000,92.000L74.000,78.000')
          }
          60% {
            d:path('M50.000,92.000L74.000,78.000')
          }
          61% {
            d:path('M50.000,92.000L74.000,78.000')
          }
          62% {
            d:path('M50.000,92.000L74.000,78.000')
          }
          63% {
            d:path('M50.000,92.000L74.000,78.000')
          }
          64% {
            d:path('M50.000,92.000L74.000,78.000')
          }
          65% {
            d:path('M50.000,92.000L74.000,78.000')
          }
          66% {
            d:path('M50.286,92.286L74.000,78.000')
          }
          67% {
            d:path('M50.571,92.571L74.000,78.000')
          }
          68% {
            d:path('M50.857,92.857L74.000,78.000')
          }
          69% {
            d:path('M51.143,93.143L74.000,78.000')
          }
          70% {
            d:path('M51.429,93.429L74.000,78.000')
          }
          71% {
            d:path('M51.714,93.714L74.000,78.000')
          }
          72% {
            d:path('M52.000,94.000L74.000,78.000')
          }
          73% {
            d:path('M52.000,94.000L74.000,78.000')
          }
          74% {
            d:path('M52.000,94.000L74.000,78.000')
          }
          75% {
            d:path('M52.000,94.000L74.000,78.000')
          }
          76% {
            d:path('M50.800,89.900L75.600,73.900')
          }
          77% {
            d:path('M49.600,85.800L77.200,69.800')
          }
          78% {
            d:path('M48.400,81.700L78.800,65.700')
          }
          79% {
            d:path('M47.200,77.600L80.400,61.600')
          }
          80% {
            d:path('M46.000,73.500L82.000,57.500')
          }
          81% {
            d:path('M44.800,69.400L83.600,53.400')
          }
          82% {
            d:path('M43.600,65.300L85.200,49.300')
          }
          83% {
            d:path('M42.400,61.200L86.800,45.200')
          }
          84% {
            d:path('M41.200,57.100L88.400,41.100')
          }
          85% {
            d:path('M40.000,53.000L90.000,37.000')
          }
          86% {
            d:path('M40.000,53.000L90.000,37.000')
          }
          87% {
            d:path('M40.000,53.000L90.000,37.000')
          }
          88% {
            d:path('M40.000,53.000L90.000,37.000')
          }
          89% {
            d:path('M40.000,53.000L90.000,37.000')
          }
          90% {
            d:path('M40.000,53.000L90.000,37.000')
          }
          91% {
            d:path('M40.000,53.000L90.000,37.000')
          }
          92% {
            d:path('M40.000,53.000L90.000,37.000')
          }
          93% {
            d:path('M40.000,53.000L90.000,37.000')
          }
          94% {
            d:path('M40.000,53.000L90.000,37.000')
          }
          95% {
            d:path('M40.000,53.000L90.000,37.000')
          }
          96% {
            d:path('M40.000,53.000L90.000,37.000')
          }
          97% {
            d:path('M40.000,53.000L90.000,37.000')
          }
          98% {
            d:path('M40.000,53.000L90.000,37.000')
          }
          99% {
            d:path('M40.000,53.000L90.000,37.000')
          }
          100% {
            d:path('M40.000,53.000L90.000,37.000')
          }
        }
        .hh2 {
          opacity:0;
          animation:hh2 16s linear infinite,hydrogenBreak 16s linear infinite
        }
        @keyframes hh2 {
          0% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          1% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          2% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          3% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          4% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          5% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          6% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          7% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          8% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          9% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          10% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          11% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          12% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          13% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          14% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          15% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          16% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          17% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          18% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          19% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          20% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          21% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          22% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          23% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          24% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          25% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          26% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          27% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          28% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          29% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          30% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          31% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          32% {
            d:path('M100.000,38.000L108.000,38.000')
          }
          33% {
            d:path('M101.000,47.000L109.000,47.000')
          }
          34% {
            d:path('M102.000,56.000L110.000,56.000')
          }
          35% {
            d:path('M103.000,65.000L111.000,65.000')
          }
          36% {
            d:path('M104.000,74.000L112.000,74.000')
          }
          37% {
            d:path('M105.000,83.000L113.000,83.000')
          }
          38% {
            d:path('M106.000,92.000L114.000,92.000')
          }
          39% {
            d:path('M105.429,92.000L114.000,92.000')
          }
          40% {
            d:path('M104.857,92.000L114.000,92.000')
          }
          41% {
            d:path('M104.286,92.000L114.000,92.000')
          }
          42% {
            d:path('M103.714,92.000L114.000,92.000')
          }
          43% {
            d:path('M103.143,92.000L114.000,92.000')
          }
          44% {
            d:path('M102.571,92.000L114.000,92.000')
          }
          45% {
            d:path('M102.000,92.000L114.000,92.000')
          }
          46% {
            d:path('M102.000,92.000L114.000,92.000')
          }
          47% {
            d:path('M102.000,92.000L114.000,92.000')
          }
          48% {
            d:path('M102.000,92.000L114.000,92.000')
          }
          49% {
            d:path('M102.000,92.000L114.000,92.000')
          }
          50% {
            d:path('M102.000,92.000L114.000,92.000')
          }
          51% {
            d:path('M102.000,92.000L114.000,92.000')
          }
          52% {
            d:path('M102.000,92.000L114.000,92.000')
          }
          53% {
            d:path('M102.000,92.000L114.000,92.000')
          }
          54% {
            d:path('M102.000,92.000L114.000,92.000')
          }
          55% {
            d:path('M102.000,92.000L114.000,92.000')
          }
          56% {
            d:path('M103.714,86.286L114.000,92.000')
          }
          57% {
            d:path('M105.429,80.571L114.000,92.000')
          }
          58% {
            d:path('M107.143,74.857L114.000,92.000')
          }
          59% {
            d:path('M106.000,72.857L114.000,92.000')
          }
          60% {
            d:path('M102.000,74.571L114.000,92.000')
          }
          61% {
            d:path('M98.000,76.286L114.000,92.000')
          }
          62% {
            d:path('M94.000,78.000L114.000,92.000')
          }
          63% {
            d:path('M94.000,78.000L114.000,92.000')
          }
          64% {
            d:path('M94.000,78.000L114.000,92.000')
          }
          65% {
            d:path('M94.000,78.000L114.000,92.000')
          }
          66% {
            d:path('M94.000,78.000L111.714,93.143')
          }
          67% {
            d:path('M94.000,78.000L109.429,94.286')
          }
          68% {
            d:path('M94.000,78.000L107.143,95.429')
          }
          69% {
            d:path('M94.000,78.000L102.857,95.714')
          }
          70% {
            d:path('M94.000,78.000L96.571,95.143')
          }
          71% {
            d:path('M94.000,78.000L90.286,94.571')
          }
          72% {
            d:path('M94.000,78.000L84.000,94.000')
          }
          73% {
            d:path('M94.000,78.000L84.000,94.000')
          }
          74% {
            d:path('M94.000,78.000L84.000,94.000')
          }
          75% {
            d:path('M94.000,78.000L84.000,94.000')
          }
          76% {
            d:path('M95.600,73.900L85.600,89.900')
          }
          77% {
            d:path('M97.200,69.800L87.200,85.800')
          }
          78% {
            d:path('M98.800,65.700L88.800,81.700')
          }
          79% {
            d:path('M100.400,61.600L90.400,77.600')
          }
          80% {
            d:path('M102.000,57.500L92.000,73.500')
          }
          81% {
            d:path('M103.600,53.400L93.600,69.400')
          }
          82% {
            d:path('M105.200,49.300L95.200,65.300')
          }
          83% {
            d:path('M106.800,45.200L96.800,61.200')
          }
          84% {
            d:path('M108.400,41.100L98.400,57.100')
          }
          85% {
            d:path('M110.000,37.000L100.000,53.000')
          }
          86% {
            d:path('M110.000,37.000L100.000,53.000')
          }
          87% {
            d:path('M110.000,37.000L100.000,53.000')
          }
          88% {
            d:path('M110.000,37.000L100.000,53.000')
          }
          89% {
            d:path('M110.000,37.000L100.000,53.000')
          }
          90% {
            d:path('M110.000,37.000L100.000,53.000')
          }
          91% {
            d:path('M110.000,37.000L100.000,53.000')
          }
          92% {
            d:path('M110.000,37.000L100.000,53.000')
          }
          93% {
            d:path('M110.000,37.000L100.000,53.000')
          }
          94% {
            d:path('M110.000,37.000L100.000,53.000')
          }
          95% {
            d:path('M110.000,37.000L100.000,53.000')
          }
          96% {
            d:path('M110.000,37.000L100.000,53.000')
          }
          97% {
            d:path('M110.000,37.000L100.000,53.000')
          }
          98% {
            d:path('M110.000,37.000L100.000,53.000')
          }
          99% {
            d:path('M110.000,37.000L100.000,53.000')
          }
          100% {
            d:path('M110.000,37.000L100.000,53.000')
          }
        }
        .nh0 {
          animation:nh0 16s linear infinite,form0 16s linear infinite
        }
        @keyframes nh0 {
          0% {
            d:path('M64.000,51.000L26.000,38.000')
          }
          1% {
            d:path('M64.000,51.000L26.000,38.000')
          }
          2% {
            d:path('M64.000,51.000L26.000,38.000')
          }
          3% {
            d:path('M64.000,51.000L26.000,38.000')
          }
          4% {
            d:path('M64.000,51.000L26.000,38.000')
          }
          5% {
            d:path('M64.000,51.000L26.000,38.000')
          }
          6% {
            d:path('M64.000,51.000L26.000,38.000')
          }
          7% {
            d:path('M64.000,51.000L26.000,38.000')
          }
          8% {
            d:path('M64.000,51.000L26.000,38.000')
          }
          9% {
            d:path('M64.000,51.000L26.000,38.000')
          }
          10% {
            d:path('M64.000,51.000L26.000,38.000')
          }
          11% {
            d:path('M64.000,51.000L26.000,38.000')
          }
          12% {
            d:path('M64.000,51.000L26.000,38.000')
          }
          13% {
            d:path('M64.000,51.000L26.000,38.000')
          }
          14% {
            d:path('M64.000,51.000L26.000,38.000')
          }
          15% {
            d:path('M64.000,51.000L26.000,38.000')
          }
          16% {
            d:path('M64.000,53.067L26.000,38.000')
          }
          17% {
            d:path('M64.000,55.133L26.000,38.000')
          }
          18% {
            d:path('M64.000,57.200L26.000,38.000')
          }
          19% {
            d:path('M64.000,59.267L26.000,38.000')
          }
          20% {
            d:path('M64.000,61.333L26.000,38.000')
          }
          21% {
            d:path('M64.000,63.400L26.000,38.000')
          }
          22% {
            d:path('M64.000,65.467L26.000,38.000')
          }
          23% {
            d:path('M64.000,67.533L26.000,38.000')
          }
          24% {
            d:path('M64.000,69.600L26.000,38.000')
          }
          25% {
            d:path('M64.000,71.667L26.000,38.000')
          }
          26% {
            d:path('M64.000,73.733L26.000,38.000')
          }
          27% {
            d:path('M64.000,75.800L26.000,38.000')
          }
          28% {
            d:path('M64.000,77.867L26.000,38.000')
          }
          29% {
            d:path('M64.000,79.933L26.000,38.000')
          }
          30% {
            d:path('M64.000,82.000L26.000,38.000')
          }
          31% {
            d:path('M62.800,82.200L26.000,38.000')
          }
          32% {
            d:path('M61.600,82.400L26.000,38.000')
          }
          33% {
            d:path('M60.400,82.600L26.000,47.000')
          }
          34% {
            d:path('M59.200,82.800L26.000,56.000')
          }
          35% {
            d:path('M58.000,83.000L26.000,65.000')
          }
          36% {
            d:path('M56.800,83.200L26.000,74.000')
          }
          37% {
            d:path('M55.600,83.400L26.000,83.000')
          }
          38% {
            d:path('M54.400,83.600L26.000,92.000')
          }
          39% {
            d:path('M53.200,83.800L26.000,92.000')
          }
          40% {
            d:path('M52.000,84.000L26.000,92.000')
          }
          41% {
            d:path('M52.000,84.000L26.000,92.000')
          }
          42% {
            d:path('M52.000,84.000L26.000,92.000')
          }
          43% {
            d:path('M52.000,84.000L26.000,92.000')
          }
          44% {
            d:path('M52.000,84.000L26.000,92.000')
          }
          45% {
            d:path('M52.000,84.000L26.000,92.000')
          }
          46% {
            d:path('M52.000,84.000L28.286,87.429')
          }
          47% {
            d:path('M52.000,84.000L30.571,82.857')
          }
          48% {
            d:path('M52.000,84.000L32.857,78.286')
          }
          49% {
            d:path('M52.000,84.000L35.143,76.286')
          }
          50% {
            d:path('M52.000,84.000L37.429,76.857')
          }
          51% {
            d:path('M52.000,84.000L39.714,77.429')
          }
          52% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          53% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          54% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          55% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          56% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          57% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          58% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          59% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          60% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          61% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          62% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          63% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          64% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          65% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          66% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          67% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          68% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          69% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          70% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          71% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          72% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          73% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          74% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          75% {
            d:path('M52.000,84.000L42.000,78.000')
          }
          76% {
            d:path('M50.800,79.900L40.800,73.900')
          }
          77% {
            d:path('M49.600,75.800L39.600,69.800')
          }
          78% {
            d:path('M48.400,71.700L38.400,65.700')
          }
          79% {
            d:path('M47.200,67.600L37.200,61.600')
          }
          80% {
            d:path('M46.000,63.500L36.000,57.500')
          }
          81% {
            d:path('M44.800,59.400L34.800,53.400')
          }
          82% {
            d:path('M43.600,55.300L33.600,49.300')
          }
          83% {
            d:path('M42.400,51.200L32.400,45.200')
          }
          84% {
            d:path('M41.200,47.100L31.200,41.100')
          }
          85% {
            d:path('M40.000,43.000L30.000,37.000')
          }
          86% {
            d:path('M40.000,43.000L30.000,37.000')
          }
          87% {
            d:path('M40.000,43.000L30.000,37.000')
          }
          88% {
            d:path('M40.000,43.000L30.000,37.000')
          }
          89% {
            d:path('M40.000,43.000L30.000,37.000')
          }
          90% {
            d:path('M40.000,43.000L30.000,37.000')
          }
          91% {
            d:path('M40.000,43.000L30.000,37.000')
          }
          92% {
            d:path('M40.000,43.000L30.000,37.000')
          }
          93% {
            d:path('M40.000,43.000L30.000,37.000')
          }
          94% {
            d:path('M40.000,43.000L30.000,37.000')
          }
          95% {
            d:path('M40.000,43.000L30.000,37.000')
          }
          96% {
            d:path('M40.000,43.000L30.000,37.000')
          }
          97% {
            d:path('M40.000,43.000L30.000,37.000')
          }
          98% {
            d:path('M40.000,43.000L30.000,37.000')
          }
          99% {
            d:path('M40.000,43.000L30.000,37.000')
          }
          100% {
            d:path('M40.000,43.000L30.000,37.000')
          }
        }
        @keyframes form0 {
          0%,50% {
            opacity:0
          }
          52%,100% {
            opacity:1
          }
        }
        .nh1 {
          animation:nh1 16s linear infinite,form1 16s linear infinite
        }
        @keyframes nh1 {
          0% {
            d:path('M64.000,51.000L34.000,38.000')
          }
          1% {
            d:path('M64.000,51.000L34.000,38.000')
          }
          2% {
            d:path('M64.000,51.000L34.000,38.000')
          }
          3% {
            d:path('M64.000,51.000L34.000,38.000')
          }
          4% {
            d:path('M64.000,51.000L34.000,38.000')
          }
          5% {
            d:path('M64.000,51.000L34.000,38.000')
          }
          6% {
            d:path('M64.000,51.000L34.000,38.000')
          }
          7% {
            d:path('M64.000,51.000L34.000,38.000')
          }
          8% {
            d:path('M64.000,51.000L34.000,38.000')
          }
          9% {
            d:path('M64.000,51.000L34.000,38.000')
          }
          10% {
            d:path('M64.000,51.000L34.000,38.000')
          }
          11% {
            d:path('M64.000,51.000L34.000,38.000')
          }
          12% {
            d:path('M64.000,51.000L34.000,38.000')
          }
          13% {
            d:path('M64.000,51.000L34.000,38.000')
          }
          14% {
            d:path('M64.000,51.000L34.000,38.000')
          }
          15% {
            d:path('M64.000,51.000L34.000,38.000')
          }
          16% {
            d:path('M64.000,53.067L34.000,38.000')
          }
          17% {
            d:path('M64.000,55.133L34.000,38.000')
          }
          18% {
            d:path('M64.000,57.200L34.000,38.000')
          }
          19% {
            d:path('M64.000,59.267L34.000,38.000')
          }
          20% {
            d:path('M64.000,61.333L34.000,38.000')
          }
          21% {
            d:path('M64.000,63.400L34.000,38.000')
          }
          22% {
            d:path('M64.000,65.467L34.000,38.000')
          }
          23% {
            d:path('M64.000,67.533L34.000,38.000')
          }
          24% {
            d:path('M64.000,69.600L34.000,38.000')
          }
          25% {
            d:path('M64.000,71.667L34.000,38.000')
          }
          26% {
            d:path('M64.000,73.733L34.000,38.000')
          }
          27% {
            d:path('M64.000,75.800L34.000,38.000')
          }
          28% {
            d:path('M64.000,77.867L34.000,38.000')
          }
          29% {
            d:path('M64.000,79.933L34.000,38.000')
          }
          30% {
            d:path('M64.000,82.000L34.000,38.000')
          }
          31% {
            d:path('M62.800,82.200L34.000,38.000')
          }
          32% {
            d:path('M61.600,82.400L34.000,38.000')
          }
          33% {
            d:path('M60.400,82.600L34.000,47.000')
          }
          34% {
            d:path('M59.200,82.800L34.000,56.000')
          }
          35% {
            d:path('M58.000,83.000L34.000,65.000')
          }
          36% {
            d:path('M56.800,83.200L34.000,74.000')
          }
          37% {
            d:path('M55.600,83.400L34.000,83.000')
          }
          38% {
            d:path('M54.400,83.600L34.000,92.000')
          }
          39% {
            d:path('M53.200,83.800L34.571,92.000')
          }
          40% {
            d:path('M52.000,84.000L35.143,92.000')
          }
          41% {
            d:path('M52.000,84.000L35.714,92.000')
          }
          42% {
            d:path('M52.000,84.000L36.286,92.000')
          }
          43% {
            d:path('M52.000,84.000L36.857,92.000')
          }
          44% {
            d:path('M52.000,84.000L37.429,92.000')
          }
          45% {
            d:path('M52.000,84.000L38.000,92.000')
          }
          46% {
            d:path('M52.000,84.000L38.000,92.000')
          }
          47% {
            d:path('M52.000,84.000L38.000,92.000')
          }
          48% {
            d:path('M52.000,84.000L38.000,92.000')
          }
          49% {
            d:path('M52.000,84.000L38.000,92.000')
          }
          50% {
            d:path('M52.000,84.000L38.000,92.000')
          }
          51% {
            d:path('M52.000,84.000L38.000,92.000')
          }
          52% {
            d:path('M52.000,84.000L38.000,92.000')
          }
          53% {
            d:path('M52.000,84.000L38.000,92.000')
          }
          54% {
            d:path('M52.000,84.000L38.000,92.000')
          }
          55% {
            d:path('M52.000,84.000L38.000,92.000')
          }
          56% {
            d:path('M52.000,84.000L36.286,81.286')
          }
          57% {
            d:path('M52.000,84.000L34.571,70.571')
          }
          58% {
            d:path('M52.000,84.000L42.000,67.000')
          }
          59% {
            d:path('M52.000,84.000L54.000,67.000')
          }
          60% {
            d:path('M52.000,84.000L62.000,68.571')
          }
          61% {
            d:path('M52.000,84.000L62.000,73.286')
          }
          62% {
            d:path('M52.000,84.000L62.000,78.000')
          }
          63% {
            d:path('M52.000,84.000L62.000,78.000')
          }
          64% {
            d:path('M52.000,84.000L62.000,78.000')
          }
          65% {
            d:path('M52.000,84.000L62.000,78.000')
          }
          66% {
            d:path('M52.000,84.000L62.000,78.000')
          }
          67% {
            d:path('M52.000,84.000L62.000,78.000')
          }
          68% {
            d:path('M52.000,84.000L62.000,78.000')
          }
          69% {
            d:path('M52.000,84.000L62.000,78.000')
          }
          70% {
            d:path('M52.000,84.000L62.000,78.000')
          }
          71% {
            d:path('M52.000,84.000L62.000,78.000')
          }
          72% {
            d:path('M52.000,84.000L62.000,78.000')
          }
          73% {
            d:path('M52.000,84.000L62.000,78.000')
          }
          74% {
            d:path('M52.000,84.000L62.000,78.000')
          }
          75% {
            d:path('M52.000,84.000L62.000,78.000')
          }
          76% {
            d:path('M50.800,79.900L60.800,73.900')
          }
          77% {
            d:path('M49.600,75.800L59.600,69.800')
          }
          78% {
            d:path('M48.400,71.700L58.400,65.700')
          }
          79% {
            d:path('M47.200,67.600L57.200,61.600')
          }
          80% {
            d:path('M46.000,63.500L56.000,57.500')
          }
          81% {
            d:path('M44.800,59.400L54.800,53.400')
          }
          82% {
            d:path('M43.600,55.300L53.600,49.300')
          }
          83% {
            d:path('M42.400,51.200L52.400,45.200')
          }
          84% {
            d:path('M41.200,47.100L51.200,41.100')
          }
          85% {
            d:path('M40.000,43.000L50.000,37.000')
          }
          86% {
            d:path('M40.000,43.000L50.000,37.000')
          }
          87% {
            d:path('M40.000,43.000L50.000,37.000')
          }
          88% {
            d:path('M40.000,43.000L50.000,37.000')
          }
          89% {
            d:path('M40.000,43.000L50.000,37.000')
          }
          90% {
            d:path('M40.000,43.000L50.000,37.000')
          }
          91% {
            d:path('M40.000,43.000L50.000,37.000')
          }
          92% {
            d:path('M40.000,43.000L50.000,37.000')
          }
          93% {
            d:path('M40.000,43.000L50.000,37.000')
          }
          94% {
            d:path('M40.000,43.000L50.000,37.000')
          }
          95% {
            d:path('M40.000,43.000L50.000,37.000')
          }
          96% {
            d:path('M40.000,43.000L50.000,37.000')
          }
          97% {
            d:path('M40.000,43.000L50.000,37.000')
          }
          98% {
            d:path('M40.000,43.000L50.000,37.000')
          }
          99% {
            d:path('M40.000,43.000L50.000,37.000')
          }
          100% {
            d:path('M40.000,43.000L50.000,37.000')
          }
        }
        @keyframes form1 {
          0%,60% {
            opacity:0
          }
          62%,100% {
            opacity:1
          }
        }
        .nh2 {
          animation:nh2 16s linear infinite,form2 16s linear infinite
        }
        @keyframes nh2 {
          0% {
            d:path('M64.000,51.000L50.000,23.000')
          }
          1% {
            d:path('M64.000,51.000L50.000,23.000')
          }
          2% {
            d:path('M64.000,51.000L50.000,23.000')
          }
          3% {
            d:path('M64.000,51.000L50.000,23.000')
          }
          4% {
            d:path('M64.000,51.000L50.000,23.000')
          }
          5% {
            d:path('M64.000,51.000L50.000,23.000')
          }
          6% {
            d:path('M64.000,51.000L50.000,23.000')
          }
          7% {
            d:path('M64.000,51.000L50.000,23.000')
          }
          8% {
            d:path('M64.000,51.000L50.000,23.000')
          }
          9% {
            d:path('M64.000,51.000L50.000,23.000')
          }
          10% {
            d:path('M64.000,51.000L50.000,23.000')
          }
          11% {
            d:path('M64.000,51.000L50.000,23.000')
          }
          12% {
            d:path('M64.000,51.000L50.000,23.000')
          }
          13% {
            d:path('M64.000,51.000L50.000,23.000')
          }
          14% {
            d:path('M64.000,51.000L50.000,23.000')
          }
          15% {
            d:path('M64.000,51.000L50.000,23.000')
          }
          16% {
            d:path('M64.000,53.067L50.000,23.000')
          }
          17% {
            d:path('M64.000,55.133L50.000,23.000')
          }
          18% {
            d:path('M64.000,57.200L50.000,23.000')
          }
          19% {
            d:path('M64.000,59.267L50.000,23.000')
          }
          20% {
            d:path('M64.000,61.333L50.000,23.000')
          }
          21% {
            d:path('M64.000,63.400L50.000,23.000')
          }
          22% {
            d:path('M64.000,65.467L50.000,23.000')
          }
          23% {
            d:path('M64.000,67.533L50.000,23.000')
          }
          24% {
            d:path('M64.000,69.600L50.000,23.000')
          }
          25% {
            d:path('M64.000,71.667L50.000,23.000')
          }
          26% {
            d:path('M64.000,73.733L50.000,23.000')
          }
          27% {
            d:path('M64.000,75.800L50.000,23.000')
          }
          28% {
            d:path('M64.000,77.867L50.000,23.000')
          }
          29% {
            d:path('M64.000,79.933L50.000,23.000')
          }
          30% {
            d:path('M64.000,82.000L50.000,23.000')
          }
          31% {
            d:path('M62.800,82.200L50.000,23.000')
          }
          32% {
            d:path('M61.600,82.400L50.000,23.000')
          }
          33% {
            d:path('M60.400,82.600L52.667,34.500')
          }
          34% {
            d:path('M59.200,82.800L55.333,46.000')
          }
          35% {
            d:path('M58.000,83.000L58.000,57.500')
          }
          36% {
            d:path('M56.800,83.200L60.667,69.000')
          }
          37% {
            d:path('M55.600,83.400L63.333,80.500')
          }
          38% {
            d:path('M54.400,83.600L66.000,92.000')
          }
          39% {
            d:path('M53.200,83.800L63.714,92.000')
          }
          40% {
            d:path('M52.000,84.000L61.429,92.000')
          }
          41% {
            d:path('M52.000,84.000L59.143,92.000')
          }
          42% {
            d:path('M52.000,84.000L56.857,92.000')
          }
          43% {
            d:path('M52.000,84.000L54.571,92.000')
          }
          44% {
            d:path('M52.000,84.000L52.286,92.000')
          }
          45% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          46% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          47% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          48% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          49% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          50% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          51% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          52% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          53% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          54% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          55% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          56% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          57% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          58% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          59% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          60% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          61% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          62% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          63% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          64% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          65% {
            d:path('M52.000,84.000L50.000,92.000')
          }
          66% {
            d:path('M52.000,84.000L50.286,92.286')
          }
          67% {
            d:path('M52.000,84.000L50.571,92.571')
          }
          68% {
            d:path('M52.000,84.000L50.857,92.857')
          }
          69% {
            d:path('M52.000,84.000L51.143,93.143')
          }
          70% {
            d:path('M52.000,84.000L51.429,93.429')
          }
          71% {
            d:path('M52.000,84.000L51.714,93.714')
          }
          72% {
            d:path('M52.000,84.000L52.000,94.000')
          }
          73% {
            d:path('M52.000,84.000L52.000,94.000')
          }
          74% {
            d:path('M52.000,84.000L52.000,94.000')
          }
          75% {
            d:path('M52.000,84.000L52.000,94.000')
          }
          76% {
            d:path('M50.800,79.900L50.800,89.900')
          }
          77% {
            d:path('M49.600,75.800L49.600,85.800')
          }
          78% {
            d:path('M48.400,71.700L48.400,81.700')
          }
          79% {
            d:path('M47.200,67.600L47.200,77.600')
          }
          80% {
            d:path('M46.000,63.500L46.000,73.500')
          }
          81% {
            d:path('M44.800,59.400L44.800,69.400')
          }
          82% {
            d:path('M43.600,55.300L43.600,65.300')
          }
          83% {
            d:path('M42.400,51.200L42.400,61.200')
          }
          84% {
            d:path('M41.200,47.100L41.200,57.100')
          }
          85% {
            d:path('M40.000,43.000L40.000,53.000')
          }
          86% {
            d:path('M40.000,43.000L40.000,53.000')
          }
          87% {
            d:path('M40.000,43.000L40.000,53.000')
          }
          88% {
            d:path('M40.000,43.000L40.000,53.000')
          }
          89% {
            d:path('M40.000,43.000L40.000,53.000')
          }
          90% {
            d:path('M40.000,43.000L40.000,53.000')
          }
          91% {
            d:path('M40.000,43.000L40.000,53.000')
          }
          92% {
            d:path('M40.000,43.000L40.000,53.000')
          }
          93% {
            d:path('M40.000,43.000L40.000,53.000')
          }
          94% {
            d:path('M40.000,43.000L40.000,53.000')
          }
          95% {
            d:path('M40.000,43.000L40.000,53.000')
          }
          96% {
            d:path('M40.000,43.000L40.000,53.000')
          }
          97% {
            d:path('M40.000,43.000L40.000,53.000')
          }
          98% {
            d:path('M40.000,43.000L40.000,53.000')
          }
          99% {
            d:path('M40.000,43.000L40.000,53.000')
          }
          100% {
            d:path('M40.000,43.000L40.000,53.000')
          }
        }
        @keyframes form2 {
          0%,70% {
            opacity:0
          }
          72%,100% {
            opacity:1
          }
        }
        .nh3 {
          animation:nh3 16s linear infinite,form3 16s linear infinite
        }
        @keyframes nh3 {
          0% {
            d:path('M76.000,51.000L58.000,23.000')
          }
          1% {
            d:path('M76.000,51.000L58.000,23.000')
          }
          2% {
            d:path('M76.000,51.000L58.000,23.000')
          }
          3% {
            d:path('M76.000,51.000L58.000,23.000')
          }
          4% {
            d:path('M76.000,51.000L58.000,23.000')
          }
          5% {
            d:path('M76.000,51.000L58.000,23.000')
          }
          6% {
            d:path('M76.000,51.000L58.000,23.000')
          }
          7% {
            d:path('M76.000,51.000L58.000,23.000')
          }
          8% {
            d:path('M76.000,51.000L58.000,23.000')
          }
          9% {
            d:path('M76.000,51.000L58.000,23.000')
          }
          10% {
            d:path('M76.000,51.000L58.000,23.000')
          }
          11% {
            d:path('M76.000,51.000L58.000,23.000')
          }
          12% {
            d:path('M76.000,51.000L58.000,23.000')
          }
          13% {
            d:path('M76.000,51.000L58.000,23.000')
          }
          14% {
            d:path('M76.000,51.000L58.000,23.000')
          }
          15% {
            d:path('M76.000,51.000L58.000,23.000')
          }
          16% {
            d:path('M76.000,53.067L58.000,23.000')
          }
          17% {
            d:path('M76.000,55.133L58.000,23.000')
          }
          18% {
            d:path('M76.000,57.200L58.000,23.000')
          }
          19% {
            d:path('M76.000,59.267L58.000,23.000')
          }
          20% {
            d:path('M76.000,61.333L58.000,23.000')
          }
          21% {
            d:path('M76.000,63.400L58.000,23.000')
          }
          22% {
            d:path('M76.000,65.467L58.000,23.000')
          }
          23% {
            d:path('M76.000,67.533L58.000,23.000')
          }
          24% {
            d:path('M76.000,69.600L58.000,23.000')
          }
          25% {
            d:path('M76.000,71.667L58.000,23.000')
          }
          26% {
            d:path('M76.000,73.733L58.000,23.000')
          }
          27% {
            d:path('M76.000,75.800L58.000,23.000')
          }
          28% {
            d:path('M76.000,77.867L58.000,23.000')
          }
          29% {
            d:path('M76.000,79.933L58.000,23.000')
          }
          30% {
            d:path('M76.000,82.000L58.000,23.000')
          }
          31% {
            d:path('M76.800,82.200L58.000,23.000')
          }
          32% {
            d:path('M77.600,82.400L58.000,23.000')
          }
          33% {
            d:path('M78.400,82.600L60.667,34.500')
          }
          34% {
            d:path('M79.200,82.800L63.333,46.000')
          }
          35% {
            d:path('M80.000,83.000L66.000,57.500')
          }
          36% {
            d:path('M80.800,83.200L68.667,69.000')
          }
          37% {
            d:path('M81.600,83.400L71.333,80.500')
          }
          38% {
            d:path('M82.400,83.600L74.000,92.000')
          }
          39% {
            d:path('M83.200,83.800L76.286,92.000')
          }
          40% {
            d:path('M84.000,84.000L78.571,92.000')
          }
          41% {
            d:path('M84.000,84.000L80.857,92.000')
          }
          42% {
            d:path('M84.000,84.000L83.143,92.000')
          }
          43% {
            d:path('M84.000,84.000L85.429,92.000')
          }
          44% {
            d:path('M84.000,84.000L87.714,92.000')
          }
          45% {
            d:path('M84.000,84.000L90.000,92.000')
          }
          46% {
            d:path('M84.000,84.000L84.286,92.000')
          }
          47% {
            d:path('M84.000,84.000L78.571,92.000')
          }
          48% {
            d:path('M84.000,84.000L72.857,92.000')
          }
          49% {
            d:path('M84.000,84.000L70.571,90.000')
          }
          50% {
            d:path('M84.000,84.000L71.714,86.000')
          }
          51% {
            d:path('M84.000,84.000L72.857,82.000')
          }
          52% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          53% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          54% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          55% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          56% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          57% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          58% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          59% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          60% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          61% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          62% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          63% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          64% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          65% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          66% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          67% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          68% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          69% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          70% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          71% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          72% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          73% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          74% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          75% {
            d:path('M84.000,84.000L74.000,78.000')
          }
          76% {
            d:path('M85.600,79.900L75.600,73.900')
          }
          77% {
            d:path('M87.200,75.800L77.200,69.800')
          }
          78% {
            d:path('M88.800,71.700L78.800,65.700')
          }
          79% {
            d:path('M90.400,67.600L80.400,61.600')
          }
          80% {
            d:path('M92.000,63.500L82.000,57.500')
          }
          81% {
            d:path('M93.600,59.400L83.600,53.400')
          }
          82% {
            d:path('M95.200,55.300L85.200,49.300')
          }
          83% {
            d:path('M96.800,51.200L86.800,45.200')
          }
          84% {
            d:path('M98.400,47.100L88.400,41.100')
          }
          85% {
            d:path('M100.000,43.000L90.000,37.000')
          }
          86% {
            d:path('M100.000,43.000L90.000,37.000')
          }
          87% {
            d:path('M100.000,43.000L90.000,37.000')
          }
          88% {
            d:path('M100.000,43.000L90.000,37.000')
          }
          89% {
            d:path('M100.000,43.000L90.000,37.000')
          }
          90% {
            d:path('M100.000,43.000L90.000,37.000')
          }
          91% {
            d:path('M100.000,43.000L90.000,37.000')
          }
          92% {
            d:path('M100.000,43.000L90.000,37.000')
          }
          93% {
            d:path('M100.000,43.000L90.000,37.000')
          }
          94% {
            d:path('M100.000,43.000L90.000,37.000')
          }
          95% {
            d:path('M100.000,43.000L90.000,37.000')
          }
          96% {
            d:path('M100.000,43.000L90.000,37.000')
          }
          97% {
            d:path('M100.000,43.000L90.000,37.000')
          }
          98% {
            d:path('M100.000,43.000L90.000,37.000')
          }
          99% {
            d:path('M100.000,43.000L90.000,37.000')
          }
          100% {
            d:path('M100.000,43.000L90.000,37.000')
          }
        }
        @keyframes form3 {
          0%,50% {
            opacity:0
          }
          52%,100% {
            opacity:1
          }
        }
        .nh4 {
          animation:nh4 16s linear infinite,form4 16s linear infinite
        }
        @keyframes nh4 {
          0% {
            d:path('M76.000,51.000L100.000,38.000')
          }
          1% {
            d:path('M76.000,51.000L100.000,38.000')
          }
          2% {
            d:path('M76.000,51.000L100.000,38.000')
          }
          3% {
            d:path('M76.000,51.000L100.000,38.000')
          }
          4% {
            d:path('M76.000,51.000L100.000,38.000')
          }
          5% {
            d:path('M76.000,51.000L100.000,38.000')
          }
          6% {
            d:path('M76.000,51.000L100.000,38.000')
          }
          7% {
            d:path('M76.000,51.000L100.000,38.000')
          }
          8% {
            d:path('M76.000,51.000L100.000,38.000')
          }
          9% {
            d:path('M76.000,51.000L100.000,38.000')
          }
          10% {
            d:path('M76.000,51.000L100.000,38.000')
          }
          11% {
            d:path('M76.000,51.000L100.000,38.000')
          }
          12% {
            d:path('M76.000,51.000L100.000,38.000')
          }
          13% {
            d:path('M76.000,51.000L100.000,38.000')
          }
          14% {
            d:path('M76.000,51.000L100.000,38.000')
          }
          15% {
            d:path('M76.000,51.000L100.000,38.000')
          }
          16% {
            d:path('M76.000,53.067L100.000,38.000')
          }
          17% {
            d:path('M76.000,55.133L100.000,38.000')
          }
          18% {
            d:path('M76.000,57.200L100.000,38.000')
          }
          19% {
            d:path('M76.000,59.267L100.000,38.000')
          }
          20% {
            d:path('M76.000,61.333L100.000,38.000')
          }
          21% {
            d:path('M76.000,63.400L100.000,38.000')
          }
          22% {
            d:path('M76.000,65.467L100.000,38.000')
          }
          23% {
            d:path('M76.000,67.533L100.000,38.000')
          }
          24% {
            d:path('M76.000,69.600L100.000,38.000')
          }
          25% {
            d:path('M76.000,71.667L100.000,38.000')
          }
          26% {
            d:path('M76.000,73.733L100.000,38.000')
          }
          27% {
            d:path('M76.000,75.800L100.000,38.000')
          }
          28% {
            d:path('M76.000,77.867L100.000,38.000')
          }
          29% {
            d:path('M76.000,79.933L100.000,38.000')
          }
          30% {
            d:path('M76.000,82.000L100.000,38.000')
          }
          31% {
            d:path('M76.800,82.200L100.000,38.000')
          }
          32% {
            d:path('M77.600,82.400L100.000,38.000')
          }
          33% {
            d:path('M78.400,82.600L101.000,47.000')
          }
          34% {
            d:path('M79.200,82.800L102.000,56.000')
          }
          35% {
            d:path('M80.000,83.000L103.000,65.000')
          }
          36% {
            d:path('M80.800,83.200L104.000,74.000')
          }
          37% {
            d:path('M81.600,83.400L105.000,83.000')
          }
          38% {
            d:path('M82.400,83.600L106.000,92.000')
          }
          39% {
            d:path('M83.200,83.800L105.429,92.000')
          }
          40% {
            d:path('M84.000,84.000L104.857,92.000')
          }
          41% {
            d:path('M84.000,84.000L104.286,92.000')
          }
          42% {
            d:path('M84.000,84.000L103.714,92.000')
          }
          43% {
            d:path('M84.000,84.000L103.143,92.000')
          }
          44% {
            d:path('M84.000,84.000L102.571,92.000')
          }
          45% {
            d:path('M84.000,84.000L102.000,92.000')
          }
          46% {
            d:path('M84.000,84.000L102.000,92.000')
          }
          47% {
            d:path('M84.000,84.000L102.000,92.000')
          }
          48% {
            d:path('M84.000,84.000L102.000,92.000')
          }
          49% {
            d:path('M84.000,84.000L102.000,92.000')
          }
          50% {
            d:path('M84.000,84.000L102.000,92.000')
          }
          51% {
            d:path('M84.000,84.000L102.000,92.000')
          }
          52% {
            d:path('M84.000,84.000L102.000,92.000')
          }
          53% {
            d:path('M84.000,84.000L102.000,92.000')
          }
          54% {
            d:path('M84.000,84.000L102.000,92.000')
          }
          55% {
            d:path('M84.000,84.000L102.000,92.000')
          }
          56% {
            d:path('M84.000,84.000L103.714,86.286')
          }
          57% {
            d:path('M84.000,84.000L105.429,80.571')
          }
          58% {
            d:path('M84.000,84.000L107.143,74.857')
          }
          59% {
            d:path('M84.000,84.000L106.000,72.857')
          }
          60% {
            d:path('M84.000,84.000L102.000,74.571')
          }
          61% {
            d:path('M84.000,84.000L98.000,76.286')
          }
          62% {
            d:path('M84.000,84.000L94.000,78.000')
          }
          63% {
            d:path('M84.000,84.000L94.000,78.000')
          }
          64% {
            d:path('M84.000,84.000L94.000,78.000')
          }
          65% {
            d:path('M84.000,84.000L94.000,78.000')
          }
          66% {
            d:path('M84.000,84.000L94.000,78.000')
          }
          67% {
            d:path('M84.000,84.000L94.000,78.000')
          }
          68% {
            d:path('M84.000,84.000L94.000,78.000')
          }
          69% {
            d:path('M84.000,84.000L94.000,78.000')
          }
          70% {
            d:path('M84.000,84.000L94.000,78.000')
          }
          71% {
            d:path('M84.000,84.000L94.000,78.000')
          }
          72% {
            d:path('M84.000,84.000L94.000,78.000')
          }
          73% {
            d:path('M84.000,84.000L94.000,78.000')
          }
          74% {
            d:path('M84.000,84.000L94.000,78.000')
          }
          75% {
            d:path('M84.000,84.000L94.000,78.000')
          }
          76% {
            d:path('M85.600,79.900L95.600,73.900')
          }
          77% {
            d:path('M87.200,75.800L97.200,69.800')
          }
          78% {
            d:path('M88.800,71.700L98.800,65.700')
          }
          79% {
            d:path('M90.400,67.600L100.400,61.600')
          }
          80% {
            d:path('M92.000,63.500L102.000,57.500')
          }
          81% {
            d:path('M93.600,59.400L103.600,53.400')
          }
          82% {
            d:path('M95.200,55.300L105.200,49.300')
          }
          83% {
            d:path('M96.800,51.200L106.800,45.200')
          }
          84% {
            d:path('M98.400,47.100L108.400,41.100')
          }
          85% {
            d:path('M100.000,43.000L110.000,37.000')
          }
          86% {
            d:path('M100.000,43.000L110.000,37.000')
          }
          87% {
            d:path('M100.000,43.000L110.000,37.000')
          }
          88% {
            d:path('M100.000,43.000L110.000,37.000')
          }
          89% {
            d:path('M100.000,43.000L110.000,37.000')
          }
          90% {
            d:path('M100.000,43.000L110.000,37.000')
          }
          91% {
            d:path('M100.000,43.000L110.000,37.000')
          }
          92% {
            d:path('M100.000,43.000L110.000,37.000')
          }
          93% {
            d:path('M100.000,43.000L110.000,37.000')
          }
          94% {
            d:path('M100.000,43.000L110.000,37.000')
          }
          95% {
            d:path('M100.000,43.000L110.000,37.000')
          }
          96% {
            d:path('M100.000,43.000L110.000,37.000')
          }
          97% {
            d:path('M100.000,43.000L110.000,37.000')
          }
          98% {
            d:path('M100.000,43.000L110.000,37.000')
          }
          99% {
            d:path('M100.000,43.000L110.000,37.000')
          }
          100% {
            d:path('M100.000,43.000L110.000,37.000')
          }
        }
        @keyframes form4 {
          0%,60% {
            opacity:0
          }
          62%,100% {
            opacity:1
          }
        }
        .nh5 {
          animation:nh5 16s linear infinite,form5 16s linear infinite
        }
        @keyframes nh5 {
          0% {
            d:path('M76.000,51.000L108.000,38.000')
          }
          1% {
            d:path('M76.000,51.000L108.000,38.000')
          }
          2% {
            d:path('M76.000,51.000L108.000,38.000')
          }
          3% {
            d:path('M76.000,51.000L108.000,38.000')
          }
          4% {
            d:path('M76.000,51.000L108.000,38.000')
          }
          5% {
            d:path('M76.000,51.000L108.000,38.000')
          }
          6% {
            d:path('M76.000,51.000L108.000,38.000')
          }
          7% {
            d:path('M76.000,51.000L108.000,38.000')
          }
          8% {
            d:path('M76.000,51.000L108.000,38.000')
          }
          9% {
            d:path('M76.000,51.000L108.000,38.000')
          }
          10% {
            d:path('M76.000,51.000L108.000,38.000')
          }
          11% {
            d:path('M76.000,51.000L108.000,38.000')
          }
          12% {
            d:path('M76.000,51.000L108.000,38.000')
          }
          13% {
            d:path('M76.000,51.000L108.000,38.000')
          }
          14% {
            d:path('M76.000,51.000L108.000,38.000')
          }
          15% {
            d:path('M76.000,51.000L108.000,38.000')
          }
          16% {
            d:path('M76.000,53.067L108.000,38.000')
          }
          17% {
            d:path('M76.000,55.133L108.000,38.000')
          }
          18% {
            d:path('M76.000,57.200L108.000,38.000')
          }
          19% {
            d:path('M76.000,59.267L108.000,38.000')
          }
          20% {
            d:path('M76.000,61.333L108.000,38.000')
          }
          21% {
            d:path('M76.000,63.400L108.000,38.000')
          }
          22% {
            d:path('M76.000,65.467L108.000,38.000')
          }
          23% {
            d:path('M76.000,67.533L108.000,38.000')
          }
          24% {
            d:path('M76.000,69.600L108.000,38.000')
          }
          25% {
            d:path('M76.000,71.667L108.000,38.000')
          }
          26% {
            d:path('M76.000,73.733L108.000,38.000')
          }
          27% {
            d:path('M76.000,75.800L108.000,38.000')
          }
          28% {
            d:path('M76.000,77.867L108.000,38.000')
          }
          29% {
            d:path('M76.000,79.933L108.000,38.000')
          }
          30% {
            d:path('M76.000,82.000L108.000,38.000')
          }
          31% {
            d:path('M76.800,82.200L108.000,38.000')
          }
          32% {
            d:path('M77.600,82.400L108.000,38.000')
          }
          33% {
            d:path('M78.400,82.600L109.000,47.000')
          }
          34% {
            d:path('M79.200,82.800L110.000,56.000')
          }
          35% {
            d:path('M80.000,83.000L111.000,65.000')
          }
          36% {
            d:path('M80.800,83.200L112.000,74.000')
          }
          37% {
            d:path('M81.600,83.400L113.000,83.000')
          }
          38% {
            d:path('M82.400,83.600L114.000,92.000')
          }
          39% {
            d:path('M83.200,83.800L114.000,92.000')
          }
          40% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          41% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          42% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          43% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          44% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          45% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          46% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          47% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          48% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          49% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          50% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          51% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          52% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          53% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          54% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          55% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          56% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          57% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          58% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          59% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          60% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          61% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          62% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          63% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          64% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          65% {
            d:path('M84.000,84.000L114.000,92.000')
          }
          66% {
            d:path('M84.000,84.000L111.714,93.143')
          }
          67% {
            d:path('M84.000,84.000L109.429,94.286')
          }
          68% {
            d:path('M84.000,84.000L107.143,95.429')
          }
          69% {
            d:path('M84.000,84.000L102.857,95.714')
          }
          70% {
            d:path('M84.000,84.000L96.571,95.143')
          }
          71% {
            d:path('M84.000,84.000L90.286,94.571')
          }
          72% {
            d:path('M84.000,84.000L84.000,94.000')
          }
          73% {
            d:path('M84.000,84.000L84.000,94.000')
          }
          74% {
            d:path('M84.000,84.000L84.000,94.000')
          }
          75% {
            d:path('M84.000,84.000L84.000,94.000')
          }
          76% {
            d:path('M85.600,79.900L85.600,89.900')
          }
          77% {
            d:path('M87.200,75.800L87.200,85.800')
          }
          78% {
            d:path('M88.800,71.700L88.800,81.700')
          }
          79% {
            d:path('M90.400,67.600L90.400,77.600')
          }
          80% {
            d:path('M92.000,63.500L92.000,73.500')
          }
          81% {
            d:path('M93.600,59.400L93.600,69.400')
          }
          82% {
            d:path('M95.200,55.300L95.200,65.300')
          }
          83% {
            d:path('M96.800,51.200L96.800,61.200')
          }
          84% {
            d:path('M98.400,47.100L98.400,57.100')
          }
          85% {
            d:path('M100.000,43.000L100.000,53.000')
          }
          86% {
            d:path('M100.000,43.000L100.000,53.000')
          }
          87% {
            d:path('M100.000,43.000L100.000,53.000')
          }
          88% {
            d:path('M100.000,43.000L100.000,53.000')
          }
          89% {
            d:path('M100.000,43.000L100.000,53.000')
          }
          90% {
            d:path('M100.000,43.000L100.000,53.000')
          }
          91% {
            d:path('M100.000,43.000L100.000,53.000')
          }
          92% {
            d:path('M100.000,43.000L100.000,53.000')
          }
          93% {
            d:path('M100.000,43.000L100.000,53.000')
          }
          94% {
            d:path('M100.000,43.000L100.000,53.000')
          }
          95% {
            d:path('M100.000,43.000L100.000,53.000')
          }
          96% {
            d:path('M100.000,43.000L100.000,53.000')
          }
          97% {
            d:path('M100.000,43.000L100.000,53.000')
          }
          98% {
            d:path('M100.000,43.000L100.000,53.000')
          }
          99% {
            d:path('M100.000,43.000L100.000,53.000')
          }
          100% {
            d:path('M100.000,43.000L100.000,53.000')
          }
        }
        @keyframes form5 {
          0%,70% {
            opacity:0
          }
          72%,100% {
            opacity:1
          }
        }
        .nitrogen {
          fill:#77c9ef
        }
        .hydrogen {
          fill:#f3c977
        }
        .bond {
          fill:none;
          stroke:#a4c3b3;
          stroke-width:1.2
        }
        .adsorption {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1;
          stroke-dasharray:2 2;
          opacity:0;
          animation:adsorption 16s linear infinite
        }
        .cycle {
          animation:cycle 16s linear infinite
        }
        @keyframes nitrogenBreak {
          0%,30% {
            opacity:1
          }
          40%,100% {
            opacity:0
          }
        }
        @keyframes hydrogenBreak {
          0%,38% {
            opacity:1
          }
          45%,100% {
            opacity:0
          }
        }
        @keyframes adsorption {
          0% {
            d:path('M64,55.5L64,98M76,55.5L76,98');
            opacity:0
          }
          1% {
            d:path('M64,55.5L64,98M76,55.5L76,98');
            opacity:0
          }
          2% {
            d:path('M64,55.5L64,98M76,55.5L76,98');
            opacity:0
          }
          3% {
            d:path('M64,55.5L64,98M76,55.5L76,98');
            opacity:0
          }
          4% {
            d:path('M64,55.5L64,98M76,55.5L76,98');
            opacity:0
          }
          5% {
            d:path('M64,55.5L64,98M76,55.5L76,98');
            opacity:0
          }
          6% {
            d:path('M64,55.5L64,98M76,55.5L76,98');
            opacity:0
          }
          7% {
            d:path('M64,55.5L64,98M76,55.5L76,98');
            opacity:0
          }
          8% {
            d:path('M64,55.5L64,98M76,55.5L76,98');
            opacity:0
          }
          9% {
            d:path('M64,55.5L64,98M76,55.5L76,98');
            opacity:0
          }
          10% {
            d:path('M64,55.5L64,98M76,55.5L76,98');
            opacity:0
          }
          11% {
            d:path('M64,55.5L64,98M76,55.5L76,98');
            opacity:0
          }
          12% {
            d:path('M64,55.5L64,98M76,55.5L76,98');
            opacity:0
          }
          13% {
            d:path('M64,55.5L64,98M76,55.5L76,98');
            opacity:0
          }
          14% {
            d:path('M64,55.5L64,98M76,55.5L76,98');
            opacity:0
          }
          15% {
            d:path('M64,55.5L64,98M76,55.5L76,98');
            opacity:0
          }
          16% {
            d:path('M64,57.567L64,98M76,57.567L76,98');
            opacity:0
          }
          17% {
            d:path('M64,59.633L64,98M76,59.633L76,98');
            opacity:0
          }
          18% {
            d:path('M64,61.7L64,98M76,61.7L76,98');
            opacity:0
          }
          19% {
            d:path('M64,63.767L64,98M76,63.767L76,98');
            opacity:0
          }
          20% {
            d:path('M64,65.833L64,98M76,65.833L76,98');
            opacity:0
          }
          21% {
            d:path('M64,67.9L64,98M76,67.9L76,98');
            opacity:0
          }
          22% {
            d:path('M64,69.967L64,98M76,69.967L76,98');
            opacity:0
          }
          23% {
            d:path('M64,72.033L64,98M76,72.033L76,98');
            opacity:0
          }
          24% {
            d:path('M64,74.1L64,98M76,74.1L76,98');
            opacity:0
          }
          25% {
            d:path('M64,76.167L64,98M76,76.167L76,98');
            opacity:0
          }
          26% {
            d:path('M64,78.233L64,98M76,78.233L76,98');
            opacity:0
          }
          27% {
            d:path('M64,80.3L64,98M76,80.3L76,98');
            opacity:0.4
          }
          28% {
            d:path('M64,82.367L64,98M76,82.367L76,98');
            opacity:0.8
          }
          29% {
            d:path('M64,84.433L64,98M76,84.433L76,98');
            opacity:0.8
          }
          30% {
            d:path('M64,86.5L64,98M76,86.5L76,98');
            opacity:0.8
          }
          31% {
            d:path('M62.8,86.7L64,98M76.8,86.7L76,98');
            opacity:0.8
          }
          32% {
            d:path('M61.6,86.9L64,98M77.6,86.9L76,98');
            opacity:0.8
          }
          33% {
            d:path('M60.4,87.1L64,98M78.4,87.1L76,98');
            opacity:0.711
          }
          34% {
            d:path('M59.2,87.3L64,98M79.2,87.3L76,98');
            opacity:0.622
          }
          35% {
            d:path('M58,87.5L64,98M80,87.5L76,98');
            opacity:0.533
          }
          36% {
            d:path('M56.8,87.7L64,98M80.8,87.7L76,98');
            opacity:0.444
          }
          37% {
            d:path('M55.6,87.9L64,98M81.6,87.9L76,98');
            opacity:0.356
          }
          38% {
            d:path('M54.4,88.1L64,98M82.4,88.1L76,98');
            opacity:0.267
          }
          39% {
            d:path('M53.2,88.3L64,98M83.2,88.3L76,98');
            opacity:0.178
          }
          40% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0.089
          }
          41% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          42% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          43% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          44% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          45% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          46% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          47% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          48% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          49% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          50% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          51% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          52% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          53% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          54% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          55% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          56% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          57% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          58% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          59% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          60% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          61% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          62% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          63% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          64% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          65% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          66% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          67% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          68% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          69% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          70% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          71% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          72% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          73% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          74% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          75% {
            d:path('M52,88.5L64,98M84,88.5L76,98');
            opacity:0
          }
          76% {
            d:path('M50.8,84.4L64,98M85.6,84.4L76,98');
            opacity:0
          }
          77% {
            d:path('M49.6,80.3L64,98M87.2,80.3L76,98');
            opacity:0
          }
          78% {
            d:path('M48.4,76.2L64,98M88.8,76.2L76,98');
            opacity:0
          }
          79% {
            d:path('M47.2,72.1L64,98M90.4,72.1L76,98');
            opacity:0
          }
          80% {
            d:path('M46,68L64,98M92,68L76,98');
            opacity:0
          }
          81% {
            d:path('M44.8,63.9L64,98M93.6,63.9L76,98');
            opacity:0
          }
          82% {
            d:path('M43.6,59.8L64,98M95.2,59.8L76,98');
            opacity:0
          }
          83% {
            d:path('M42.4,55.7L64,98M96.8,55.7L76,98');
            opacity:0
          }
          84% {
            d:path('M41.2,51.6L64,98M98.4,51.6L76,98');
            opacity:0
          }
          85% {
            d:path('M40,47.5L64,98M100,47.5L76,98');
            opacity:0
          }
          86% {
            d:path('M40,47.5L64,98M100,47.5L76,98');
            opacity:0
          }
          87% {
            d:path('M40,47.5L64,98M100,47.5L76,98');
            opacity:0
          }
          88% {
            d:path('M40,47.5L64,98M100,47.5L76,98');
            opacity:0
          }
          89% {
            d:path('M40,47.5L64,98M100,47.5L76,98');
            opacity:0
          }
          90% {
            d:path('M40,47.5L64,98M100,47.5L76,98');
            opacity:0
          }
          91% {
            d:path('M40,47.5L64,98M100,47.5L76,98');
            opacity:0
          }
          92% {
            d:path('M40,47.5L64,98M100,47.5L76,98');
            opacity:0
          }
          93% {
            d:path('M40,47.5L64,98M100,47.5L76,98');
            opacity:0
          }
          94% {
            d:path('M40,47.5L64,98M100,47.5L76,98');
            opacity:0
          }
          95% {
            d:path('M40,47.5L64,98M100,47.5L76,98');
            opacity:0
          }
          96% {
            d:path('M40,47.5L64,98M100,47.5L76,98');
            opacity:0
          }
          97% {
            d:path('M40,47.5L64,98M100,47.5L76,98');
            opacity:0
          }
          98% {
            d:path('M40,47.5L64,98M100,47.5L76,98');
            opacity:0
          }
          99% {
            d:path('M40,47.5L64,98M100,47.5L76,98');
            opacity:0
          }
          100% {
            d:path('M40,47.5L64,98M100,47.5L76,98');
            opacity:0
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Haber-Bosch Synthesis">
        <path class="ink muted" d="M14,110H126"/>
        <circle fill="#315240" stroke="#739c81" stroke-width=".8" cx="18" cy="103" r="5"/>
        <circle fill="#315240" stroke="#739c81" stroke-width=".8" cx="33" cy="103" r="5"/>
        <circle fill="#315240" stroke="#739c81" stroke-width=".8" cx="48" cy="103" r="5"/>
        <circle fill="#315240" stroke="#739c81" stroke-width=".8" cx="63" cy="103" r="5"/>
        <circle fill="#315240" stroke="#739c81" stroke-width=".8" cx="78" cy="103" r="5"/>
        <circle fill="#315240" stroke="#739c81" stroke-width=".8" cx="93" cy="103" r="5"/>
        <circle fill="#315240" stroke="#739c81" stroke-width=".8" cx="108" cy="103" r="5"/>
        <circle fill="#315240" stroke="#739c81" stroke-width=".8" cx="123" cy="103" r="5"/>
        <g class="cycle">
          <path class="adsorption" d="M64,86V98M76,86V98"/>
          <path class="bond nn0" d="M40,40.5L100,40.5"/>
          <path class="bond nn1" d="M40,43L100,43"/>
          <path class="bond nn2" d="M40,45.5L100,45.5"/>
          <path class="bond hh0" d="M0,0H0"/>
          <path class="bond hh1" d="M0,0H0"/>
          <path class="bond hh2" d="M0,0H0"/>
          <path class="bond nh0" d="M40.000,43.000L30.000,37.000"/>
          <path class="bond nh1" d="M40.000,43.000L50.000,37.000"/>
          <path class="bond nh2" d="M40.000,43.000L40.000,53.000"/>
          <path class="bond nh3" d="M100.000,43.000L90.000,37.000"/>
          <path class="bond nh4" d="M100.000,43.000L110.000,37.000"/>
          <path class="bond nh5" d="M100.000,43.000L100.000,53.000"/>
          <circle class="atom atom0 nitrogen" r="4.5"/>
          <circle class="atom atom1 nitrogen" r="4.5"/>
          <circle class="atom atom2 hydrogen" r="2"/>
          <circle class="atom atom3 hydrogen" r="2"/>
          <circle class="atom atom4 hydrogen" r="2"/>
          <circle class="atom atom5 hydrogen" r="2"/>
          <circle class="atom atom6 hydrogen" r="2"/>
          <circle class="atom atom7 hydrogen" r="2"/>
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

if (!customElements.get("concept-haber-bosch-synthesis")) {
  customElements.define("concept-haber-bosch-synthesis", ConceptHaberBoschSynthesis);
}
