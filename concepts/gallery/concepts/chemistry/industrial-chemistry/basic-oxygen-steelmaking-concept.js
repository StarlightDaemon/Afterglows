// Basic Oxygen Steelmaking. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBasicOxygenSteelmaking extends HTMLElement {
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
          transform:translate(55px,-2px);
          animation:atom0 16s linear infinite
        }
        @keyframes atom0 {
          0% {
            transform:translate(43px,98px)
          }
          1% {
            transform:translate(43px,98px)
          }
          2% {
            transform:translate(43px,98px)
          }
          3% {
            transform:translate(43px,98px)
          }
          4% {
            transform:translate(43px,98px)
          }
          5% {
            transform:translate(43px,98px)
          }
          6% {
            transform:translate(43px,98px)
          }
          7% {
            transform:translate(43px,98px)
          }
          8% {
            transform:translate(43px,98px)
          }
          9% {
            transform:translate(43px,98px)
          }
          10% {
            transform:translate(43px,98px)
          }
          11% {
            transform:translate(43px,98px)
          }
          12% {
            transform:translate(43px,98px)
          }
          13% {
            transform:translate(43px,98px)
          }
          14% {
            transform:translate(43px,98px)
          }
          15% {
            transform:translate(43px,98px)
          }
          16% {
            transform:translate(44.7px,97.1px)
          }
          17% {
            transform:translate(46.4px,96.2px)
          }
          18% {
            transform:translate(48.1px,95.3px)
          }
          19% {
            transform:translate(49.8px,94.4px)
          }
          20% {
            transform:translate(51.5px,93.5px)
          }
          21% {
            transform:translate(53.2px,92.6px)
          }
          22% {
            transform:translate(54.9px,91.7px)
          }
          23% {
            transform:translate(56.6px,90.8px)
          }
          24% {
            transform:translate(58.3px,89.9px)
          }
          25% {
            transform:translate(60px,89px)
          }
          26% {
            transform:translate(59.667px,82.933px)
          }
          27% {
            transform:translate(59.333px,76.867px)
          }
          28% {
            transform:translate(59px,70.8px)
          }
          29% {
            transform:translate(58.667px,64.733px)
          }
          30% {
            transform:translate(58.333px,58.667px)
          }
          31% {
            transform:translate(58px,52.6px)
          }
          32% {
            transform:translate(57.667px,46.533px)
          }
          33% {
            transform:translate(57.333px,40.467px)
          }
          34% {
            transform:translate(57px,34.4px)
          }
          35% {
            transform:translate(56.667px,28.333px)
          }
          36% {
            transform:translate(56.333px,22.267px)
          }
          37% {
            transform:translate(56px,16.2px)
          }
          38% {
            transform:translate(55.667px,10.133px)
          }
          39% {
            transform:translate(55.333px,4.067px)
          }
          40% {
            transform:translate(55px,-2px)
          }
          41% {
            transform:translate(55px,-2px)
          }
          42% {
            transform:translate(55px,-2px)
          }
          43% {
            transform:translate(55px,-2px)
          }
          44% {
            transform:translate(55px,-2px)
          }
          45% {
            transform:translate(55px,-2px)
          }
          46% {
            transform:translate(55px,-2px)
          }
          47% {
            transform:translate(55px,-2px)
          }
          48% {
            transform:translate(55px,-2px)
          }
          49% {
            transform:translate(55px,-2px)
          }
          50% {
            transform:translate(55px,-2px)
          }
          51% {
            transform:translate(55px,-2px)
          }
          52% {
            transform:translate(55px,-2px)
          }
          53% {
            transform:translate(55px,-2px)
          }
          54% {
            transform:translate(55px,-2px)
          }
          55% {
            transform:translate(55px,-2px)
          }
          56% {
            transform:translate(55px,-2px)
          }
          57% {
            transform:translate(55px,-2px)
          }
          58% {
            transform:translate(55px,-2px)
          }
          59% {
            transform:translate(55px,-2px)
          }
          60% {
            transform:translate(55px,-2px)
          }
          61% {
            transform:translate(55px,-2px)
          }
          62% {
            transform:translate(55px,-2px)
          }
          63% {
            transform:translate(55px,-2px)
          }
          64% {
            transform:translate(55px,-2px)
          }
          65% {
            transform:translate(55px,-2px)
          }
          66% {
            transform:translate(55px,-2px)
          }
          67% {
            transform:translate(55px,-2px)
          }
          68% {
            transform:translate(55px,-2px)
          }
          69% {
            transform:translate(55px,-2px)
          }
          70% {
            transform:translate(55px,-2px)
          }
          71% {
            transform:translate(55px,-2px)
          }
          72% {
            transform:translate(55px,-2px)
          }
          73% {
            transform:translate(55px,-2px)
          }
          74% {
            transform:translate(55px,-2px)
          }
          75% {
            transform:translate(55px,-2px)
          }
          76% {
            transform:translate(55px,-2px)
          }
          77% {
            transform:translate(55px,-2px)
          }
          78% {
            transform:translate(55px,-2px)
          }
          79% {
            transform:translate(55px,-2px)
          }
          80% {
            transform:translate(55px,-2px)
          }
          81% {
            transform:translate(55px,-2px)
          }
          82% {
            transform:translate(55px,-2px)
          }
          83% {
            transform:translate(55px,-2px)
          }
          84% {
            transform:translate(55px,-2px)
          }
          85% {
            transform:translate(55px,-2px)
          }
          86% {
            transform:translate(55px,-2px)
          }
          87% {
            transform:translate(55px,-2px)
          }
          88% {
            transform:translate(55px,-2px)
          }
          89% {
            transform:translate(55px,-2px)
          }
          90% {
            transform:translate(55px,-2px)
          }
          91% {
            transform:translate(55px,-2px)
          }
          92% {
            transform:translate(55px,-2px)
          }
          93% {
            transform:translate(55px,-2px)
          }
          94% {
            transform:translate(55px,-2px)
          }
          95% {
            transform:translate(55px,-2px)
          }
          96% {
            transform:translate(55px,-2px)
          }
          97% {
            transform:translate(55px,-2px)
          }
          98% {
            transform:translate(55px,-2px)
          }
          99% {
            transform:translate(55px,-2px)
          }
          100% {
            transform:translate(55px,-2px)
          }
        }
        .atom1 {
          transform:translate(85px,-2px);
          animation:atom1 16s linear infinite
        }
        @keyframes atom1 {
          0% {
            transform:translate(94px,97px)
          }
          1% {
            transform:translate(94px,97px)
          }
          2% {
            transform:translate(94px,97px)
          }
          3% {
            transform:translate(94px,97px)
          }
          4% {
            transform:translate(94px,97px)
          }
          5% {
            transform:translate(94px,97px)
          }
          6% {
            transform:translate(94px,97px)
          }
          7% {
            transform:translate(94px,97px)
          }
          8% {
            transform:translate(94px,97px)
          }
          9% {
            transform:translate(94px,97px)
          }
          10% {
            transform:translate(94px,97px)
          }
          11% {
            transform:translate(94px,97px)
          }
          12% {
            transform:translate(94px,97px)
          }
          13% {
            transform:translate(94px,97px)
          }
          14% {
            transform:translate(94px,97px)
          }
          15% {
            transform:translate(94px,97px)
          }
          16% {
            transform:translate(92.6px,96.2px)
          }
          17% {
            transform:translate(91.2px,95.4px)
          }
          18% {
            transform:translate(89.8px,94.6px)
          }
          19% {
            transform:translate(88.4px,93.8px)
          }
          20% {
            transform:translate(87px,93px)
          }
          21% {
            transform:translate(85.6px,92.2px)
          }
          22% {
            transform:translate(84.2px,91.4px)
          }
          23% {
            transform:translate(82.8px,90.6px)
          }
          24% {
            transform:translate(81.4px,89.8px)
          }
          25% {
            transform:translate(80px,89px)
          }
          26% {
            transform:translate(80.333px,82.933px)
          }
          27% {
            transform:translate(80.667px,76.867px)
          }
          28% {
            transform:translate(81px,70.8px)
          }
          29% {
            transform:translate(81.333px,64.733px)
          }
          30% {
            transform:translate(81.667px,58.667px)
          }
          31% {
            transform:translate(82px,52.6px)
          }
          32% {
            transform:translate(82.333px,46.533px)
          }
          33% {
            transform:translate(82.667px,40.467px)
          }
          34% {
            transform:translate(83px,34.4px)
          }
          35% {
            transform:translate(83.333px,28.333px)
          }
          36% {
            transform:translate(83.667px,22.267px)
          }
          37% {
            transform:translate(84px,16.2px)
          }
          38% {
            transform:translate(84.333px,10.133px)
          }
          39% {
            transform:translate(84.667px,4.067px)
          }
          40% {
            transform:translate(85px,-2px)
          }
          41% {
            transform:translate(85px,-2px)
          }
          42% {
            transform:translate(85px,-2px)
          }
          43% {
            transform:translate(85px,-2px)
          }
          44% {
            transform:translate(85px,-2px)
          }
          45% {
            transform:translate(85px,-2px)
          }
          46% {
            transform:translate(85px,-2px)
          }
          47% {
            transform:translate(85px,-2px)
          }
          48% {
            transform:translate(85px,-2px)
          }
          49% {
            transform:translate(85px,-2px)
          }
          50% {
            transform:translate(85px,-2px)
          }
          51% {
            transform:translate(85px,-2px)
          }
          52% {
            transform:translate(85px,-2px)
          }
          53% {
            transform:translate(85px,-2px)
          }
          54% {
            transform:translate(85px,-2px)
          }
          55% {
            transform:translate(85px,-2px)
          }
          56% {
            transform:translate(85px,-2px)
          }
          57% {
            transform:translate(85px,-2px)
          }
          58% {
            transform:translate(85px,-2px)
          }
          59% {
            transform:translate(85px,-2px)
          }
          60% {
            transform:translate(85px,-2px)
          }
          61% {
            transform:translate(85px,-2px)
          }
          62% {
            transform:translate(85px,-2px)
          }
          63% {
            transform:translate(85px,-2px)
          }
          64% {
            transform:translate(85px,-2px)
          }
          65% {
            transform:translate(85px,-2px)
          }
          66% {
            transform:translate(85px,-2px)
          }
          67% {
            transform:translate(85px,-2px)
          }
          68% {
            transform:translate(85px,-2px)
          }
          69% {
            transform:translate(85px,-2px)
          }
          70% {
            transform:translate(85px,-2px)
          }
          71% {
            transform:translate(85px,-2px)
          }
          72% {
            transform:translate(85px,-2px)
          }
          73% {
            transform:translate(85px,-2px)
          }
          74% {
            transform:translate(85px,-2px)
          }
          75% {
            transform:translate(85px,-2px)
          }
          76% {
            transform:translate(85px,-2px)
          }
          77% {
            transform:translate(85px,-2px)
          }
          78% {
            transform:translate(85px,-2px)
          }
          79% {
            transform:translate(85px,-2px)
          }
          80% {
            transform:translate(85px,-2px)
          }
          81% {
            transform:translate(85px,-2px)
          }
          82% {
            transform:translate(85px,-2px)
          }
          83% {
            transform:translate(85px,-2px)
          }
          84% {
            transform:translate(85px,-2px)
          }
          85% {
            transform:translate(85px,-2px)
          }
          86% {
            transform:translate(85px,-2px)
          }
          87% {
            transform:translate(85px,-2px)
          }
          88% {
            transform:translate(85px,-2px)
          }
          89% {
            transform:translate(85px,-2px)
          }
          90% {
            transform:translate(85px,-2px)
          }
          91% {
            transform:translate(85px,-2px)
          }
          92% {
            transform:translate(85px,-2px)
          }
          93% {
            transform:translate(85px,-2px)
          }
          94% {
            transform:translate(85px,-2px)
          }
          95% {
            transform:translate(85px,-2px)
          }
          96% {
            transform:translate(85px,-2px)
          }
          97% {
            transform:translate(85px,-2px)
          }
          98% {
            transform:translate(85px,-2px)
          }
          99% {
            transform:translate(85px,-2px)
          }
          100% {
            transform:translate(85px,-2px)
          }
        }
        .atom2 {
          transform:translate(56.667px,28.333px);
          animation:atom2 16s linear infinite
        }
        @keyframes atom2 {
          0% {
            transform:translate(50px,107px)
          }
          1% {
            transform:translate(50px,107px)
          }
          2% {
            transform:translate(50px,107px)
          }
          3% {
            transform:translate(50px,107px)
          }
          4% {
            transform:translate(50px,107px)
          }
          5% {
            transform:translate(50px,107px)
          }
          6% {
            transform:translate(50px,107px)
          }
          7% {
            transform:translate(50px,107px)
          }
          8% {
            transform:translate(50px,107px)
          }
          9% {
            transform:translate(50px,107px)
          }
          10% {
            transform:translate(50px,107px)
          }
          11% {
            transform:translate(50px,107px)
          }
          12% {
            transform:translate(50px,107px)
          }
          13% {
            transform:translate(50px,107px)
          }
          14% {
            transform:translate(50px,107px)
          }
          15% {
            transform:translate(50px,107px)
          }
          16% {
            transform:translate(50px,107px)
          }
          17% {
            transform:translate(50px,107px)
          }
          18% {
            transform:translate(50px,107px)
          }
          19% {
            transform:translate(50px,107px)
          }
          20% {
            transform:translate(50px,107px)
          }
          21% {
            transform:translate(50px,107px)
          }
          22% {
            transform:translate(50px,107px)
          }
          23% {
            transform:translate(50px,107px)
          }
          24% {
            transform:translate(50px,107px)
          }
          25% {
            transform:translate(50px,107px)
          }
          26% {
            transform:translate(50px,107px)
          }
          27% {
            transform:translate(50px,107px)
          }
          28% {
            transform:translate(50px,107px)
          }
          29% {
            transform:translate(50px,107px)
          }
          30% {
            transform:translate(50px,107px)
          }
          31% {
            transform:translate(50px,107px)
          }
          32% {
            transform:translate(50px,107px)
          }
          33% {
            transform:translate(50px,107px)
          }
          34% {
            transform:translate(50px,107px)
          }
          35% {
            transform:translate(50px,107px)
          }
          36% {
            transform:translate(51px,105.2px)
          }
          37% {
            transform:translate(52px,103.4px)
          }
          38% {
            transform:translate(53px,101.6px)
          }
          39% {
            transform:translate(54px,99.8px)
          }
          40% {
            transform:translate(55px,98px)
          }
          41% {
            transform:translate(56px,96.2px)
          }
          42% {
            transform:translate(57px,94.4px)
          }
          43% {
            transform:translate(58px,92.6px)
          }
          44% {
            transform:translate(59px,90.8px)
          }
          45% {
            transform:translate(60px,89px)
          }
          46% {
            transform:translate(59.667px,82.933px)
          }
          47% {
            transform:translate(59.333px,76.867px)
          }
          48% {
            transform:translate(59px,70.8px)
          }
          49% {
            transform:translate(58.667px,64.733px)
          }
          50% {
            transform:translate(58.333px,58.667px)
          }
          51% {
            transform:translate(58px,52.6px)
          }
          52% {
            transform:translate(57.667px,46.533px)
          }
          53% {
            transform:translate(57.333px,40.467px)
          }
          54% {
            transform:translate(57px,34.4px)
          }
          55% {
            transform:translate(56.667px,28.333px)
          }
          56% {
            transform:translate(56.333px,22.267px)
          }
          57% {
            transform:translate(56px,16.2px)
          }
          58% {
            transform:translate(55.667px,10.133px)
          }
          59% {
            transform:translate(55.333px,4.067px)
          }
          60% {
            transform:translate(55px,-2px)
          }
          61% {
            transform:translate(55px,-2px)
          }
          62% {
            transform:translate(55px,-2px)
          }
          63% {
            transform:translate(55px,-2px)
          }
          64% {
            transform:translate(55px,-2px)
          }
          65% {
            transform:translate(55px,-2px)
          }
          66% {
            transform:translate(55px,-2px)
          }
          67% {
            transform:translate(55px,-2px)
          }
          68% {
            transform:translate(55px,-2px)
          }
          69% {
            transform:translate(55px,-2px)
          }
          70% {
            transform:translate(55px,-2px)
          }
          71% {
            transform:translate(55px,-2px)
          }
          72% {
            transform:translate(55px,-2px)
          }
          73% {
            transform:translate(55px,-2px)
          }
          74% {
            transform:translate(55px,-2px)
          }
          75% {
            transform:translate(55px,-2px)
          }
          76% {
            transform:translate(55px,-2px)
          }
          77% {
            transform:translate(55px,-2px)
          }
          78% {
            transform:translate(55px,-2px)
          }
          79% {
            transform:translate(55px,-2px)
          }
          80% {
            transform:translate(55px,-2px)
          }
          81% {
            transform:translate(55px,-2px)
          }
          82% {
            transform:translate(55px,-2px)
          }
          83% {
            transform:translate(55px,-2px)
          }
          84% {
            transform:translate(55px,-2px)
          }
          85% {
            transform:translate(55px,-2px)
          }
          86% {
            transform:translate(55px,-2px)
          }
          87% {
            transform:translate(55px,-2px)
          }
          88% {
            transform:translate(55px,-2px)
          }
          89% {
            transform:translate(55px,-2px)
          }
          90% {
            transform:translate(55px,-2px)
          }
          91% {
            transform:translate(55px,-2px)
          }
          92% {
            transform:translate(55px,-2px)
          }
          93% {
            transform:translate(55px,-2px)
          }
          94% {
            transform:translate(55px,-2px)
          }
          95% {
            transform:translate(55px,-2px)
          }
          96% {
            transform:translate(55px,-2px)
          }
          97% {
            transform:translate(55px,-2px)
          }
          98% {
            transform:translate(55px,-2px)
          }
          99% {
            transform:translate(55px,-2px)
          }
          100% {
            transform:translate(55px,-2px)
          }
        }
        .atom3 {
          transform:translate(83.333px,28.333px);
          animation:atom3 16s linear infinite
        }
        @keyframes atom3 {
          0% {
            transform:translate(90px,108px)
          }
          1% {
            transform:translate(90px,108px)
          }
          2% {
            transform:translate(90px,108px)
          }
          3% {
            transform:translate(90px,108px)
          }
          4% {
            transform:translate(90px,108px)
          }
          5% {
            transform:translate(90px,108px)
          }
          6% {
            transform:translate(90px,108px)
          }
          7% {
            transform:translate(90px,108px)
          }
          8% {
            transform:translate(90px,108px)
          }
          9% {
            transform:translate(90px,108px)
          }
          10% {
            transform:translate(90px,108px)
          }
          11% {
            transform:translate(90px,108px)
          }
          12% {
            transform:translate(90px,108px)
          }
          13% {
            transform:translate(90px,108px)
          }
          14% {
            transform:translate(90px,108px)
          }
          15% {
            transform:translate(90px,108px)
          }
          16% {
            transform:translate(90px,108px)
          }
          17% {
            transform:translate(90px,108px)
          }
          18% {
            transform:translate(90px,108px)
          }
          19% {
            transform:translate(90px,108px)
          }
          20% {
            transform:translate(90px,108px)
          }
          21% {
            transform:translate(90px,108px)
          }
          22% {
            transform:translate(90px,108px)
          }
          23% {
            transform:translate(90px,108px)
          }
          24% {
            transform:translate(90px,108px)
          }
          25% {
            transform:translate(90px,108px)
          }
          26% {
            transform:translate(90px,108px)
          }
          27% {
            transform:translate(90px,108px)
          }
          28% {
            transform:translate(90px,108px)
          }
          29% {
            transform:translate(90px,108px)
          }
          30% {
            transform:translate(90px,108px)
          }
          31% {
            transform:translate(90px,108px)
          }
          32% {
            transform:translate(90px,108px)
          }
          33% {
            transform:translate(90px,108px)
          }
          34% {
            transform:translate(90px,108px)
          }
          35% {
            transform:translate(90px,108px)
          }
          36% {
            transform:translate(89px,106.1px)
          }
          37% {
            transform:translate(88px,104.2px)
          }
          38% {
            transform:translate(87px,102.3px)
          }
          39% {
            transform:translate(86px,100.4px)
          }
          40% {
            transform:translate(85px,98.5px)
          }
          41% {
            transform:translate(84px,96.6px)
          }
          42% {
            transform:translate(83px,94.7px)
          }
          43% {
            transform:translate(82px,92.8px)
          }
          44% {
            transform:translate(81px,90.9px)
          }
          45% {
            transform:translate(80px,89px)
          }
          46% {
            transform:translate(80.333px,82.933px)
          }
          47% {
            transform:translate(80.667px,76.867px)
          }
          48% {
            transform:translate(81px,70.8px)
          }
          49% {
            transform:translate(81.333px,64.733px)
          }
          50% {
            transform:translate(81.667px,58.667px)
          }
          51% {
            transform:translate(82px,52.6px)
          }
          52% {
            transform:translate(82.333px,46.533px)
          }
          53% {
            transform:translate(82.667px,40.467px)
          }
          54% {
            transform:translate(83px,34.4px)
          }
          55% {
            transform:translate(83.333px,28.333px)
          }
          56% {
            transform:translate(83.667px,22.267px)
          }
          57% {
            transform:translate(84px,16.2px)
          }
          58% {
            transform:translate(84.333px,10.133px)
          }
          59% {
            transform:translate(84.667px,4.067px)
          }
          60% {
            transform:translate(85px,-2px)
          }
          61% {
            transform:translate(85px,-2px)
          }
          62% {
            transform:translate(85px,-2px)
          }
          63% {
            transform:translate(85px,-2px)
          }
          64% {
            transform:translate(85px,-2px)
          }
          65% {
            transform:translate(85px,-2px)
          }
          66% {
            transform:translate(85px,-2px)
          }
          67% {
            transform:translate(85px,-2px)
          }
          68% {
            transform:translate(85px,-2px)
          }
          69% {
            transform:translate(85px,-2px)
          }
          70% {
            transform:translate(85px,-2px)
          }
          71% {
            transform:translate(85px,-2px)
          }
          72% {
            transform:translate(85px,-2px)
          }
          73% {
            transform:translate(85px,-2px)
          }
          74% {
            transform:translate(85px,-2px)
          }
          75% {
            transform:translate(85px,-2px)
          }
          76% {
            transform:translate(85px,-2px)
          }
          77% {
            transform:translate(85px,-2px)
          }
          78% {
            transform:translate(85px,-2px)
          }
          79% {
            transform:translate(85px,-2px)
          }
          80% {
            transform:translate(85px,-2px)
          }
          81% {
            transform:translate(85px,-2px)
          }
          82% {
            transform:translate(85px,-2px)
          }
          83% {
            transform:translate(85px,-2px)
          }
          84% {
            transform:translate(85px,-2px)
          }
          85% {
            transform:translate(85px,-2px)
          }
          86% {
            transform:translate(85px,-2px)
          }
          87% {
            transform:translate(85px,-2px)
          }
          88% {
            transform:translate(85px,-2px)
          }
          89% {
            transform:translate(85px,-2px)
          }
          90% {
            transform:translate(85px,-2px)
          }
          91% {
            transform:translate(85px,-2px)
          }
          92% {
            transform:translate(85px,-2px)
          }
          93% {
            transform:translate(85px,-2px)
          }
          94% {
            transform:translate(85px,-2px)
          }
          95% {
            transform:translate(85px,-2px)
          }
          96% {
            transform:translate(85px,-2px)
          }
          97% {
            transform:translate(85px,-2px)
          }
          98% {
            transform:translate(85px,-2px)
          }
          99% {
            transform:translate(85px,-2px)
          }
          100% {
            transform:translate(85px,-2px)
          }
        }
        .atom4 {
          transform:translate(60px,114px);
          animation:atom4 16s linear infinite
        }
        @keyframes atom4 {
          0% {
            transform:translate(60px,114px)
          }
          1% {
            transform:translate(60px,114px)
          }
          2% {
            transform:translate(60px,114px)
          }
          3% {
            transform:translate(60px,114px)
          }
          4% {
            transform:translate(60px,114px)
          }
          5% {
            transform:translate(60px,114px)
          }
          6% {
            transform:translate(60px,114px)
          }
          7% {
            transform:translate(60px,114px)
          }
          8% {
            transform:translate(60px,114px)
          }
          9% {
            transform:translate(60px,114px)
          }
          10% {
            transform:translate(60px,114px)
          }
          11% {
            transform:translate(60px,114px)
          }
          12% {
            transform:translate(60px,114px)
          }
          13% {
            transform:translate(60px,114px)
          }
          14% {
            transform:translate(60px,114px)
          }
          15% {
            transform:translate(60px,114px)
          }
          16% {
            transform:translate(60px,114px)
          }
          17% {
            transform:translate(60px,114px)
          }
          18% {
            transform:translate(60px,114px)
          }
          19% {
            transform:translate(60px,114px)
          }
          20% {
            transform:translate(60px,114px)
          }
          21% {
            transform:translate(60px,114px)
          }
          22% {
            transform:translate(60px,114px)
          }
          23% {
            transform:translate(60px,114px)
          }
          24% {
            transform:translate(60px,114px)
          }
          25% {
            transform:translate(60px,114px)
          }
          26% {
            transform:translate(60px,114px)
          }
          27% {
            transform:translate(60px,114px)
          }
          28% {
            transform:translate(60px,114px)
          }
          29% {
            transform:translate(60px,114px)
          }
          30% {
            transform:translate(60px,114px)
          }
          31% {
            transform:translate(60px,114px)
          }
          32% {
            transform:translate(60px,114px)
          }
          33% {
            transform:translate(60px,114px)
          }
          34% {
            transform:translate(60px,114px)
          }
          35% {
            transform:translate(60px,114px)
          }
          36% {
            transform:translate(60px,114px)
          }
          37% {
            transform:translate(60px,114px)
          }
          38% {
            transform:translate(60px,114px)
          }
          39% {
            transform:translate(60px,114px)
          }
          40% {
            transform:translate(60px,114px)
          }
          41% {
            transform:translate(60px,114px)
          }
          42% {
            transform:translate(60px,114px)
          }
          43% {
            transform:translate(60px,114px)
          }
          44% {
            transform:translate(60px,114px)
          }
          45% {
            transform:translate(60px,114px)
          }
          46% {
            transform:translate(60px,114px)
          }
          47% {
            transform:translate(60px,114px)
          }
          48% {
            transform:translate(60px,114px)
          }
          49% {
            transform:translate(60px,114px)
          }
          50% {
            transform:translate(60px,114px)
          }
          51% {
            transform:translate(60px,114px)
          }
          52% {
            transform:translate(60px,114px)
          }
          53% {
            transform:translate(60px,114px)
          }
          54% {
            transform:translate(60px,114px)
          }
          55% {
            transform:translate(60px,114px)
          }
          56% {
            transform:translate(60px,111.5px)
          }
          57% {
            transform:translate(60px,109px)
          }
          58% {
            transform:translate(60px,106.5px)
          }
          59% {
            transform:translate(60px,104px)
          }
          60% {
            transform:translate(60px,101.5px)
          }
          61% {
            transform:translate(60px,99px)
          }
          62% {
            transform:translate(60px,96.5px)
          }
          63% {
            transform:translate(60px,94px)
          }
          64% {
            transform:translate(60px,91.5px)
          }
          65% {
            transform:translate(60px,89px)
          }
          66% {
            transform:translate(59.667px,82.933px)
          }
          67% {
            transform:translate(59.333px,76.867px)
          }
          68% {
            transform:translate(59px,70.8px)
          }
          69% {
            transform:translate(58.667px,64.733px)
          }
          70% {
            transform:translate(58.333px,58.667px)
          }
          71% {
            transform:translate(58px,52.6px)
          }
          72% {
            transform:translate(57.667px,46.533px)
          }
          73% {
            transform:translate(57.333px,40.467px)
          }
          74% {
            transform:translate(57px,34.4px)
          }
          75% {
            transform:translate(56.667px,28.333px)
          }
          76% {
            transform:translate(56.333px,22.267px)
          }
          77% {
            transform:translate(56px,16.2px)
          }
          78% {
            transform:translate(55.667px,10.133px)
          }
          79% {
            transform:translate(55.333px,4.067px)
          }
          80% {
            transform:translate(55px,-2px)
          }
          81% {
            transform:translate(55px,-2px)
          }
          82% {
            transform:translate(55px,-2px)
          }
          83% {
            transform:translate(55px,-2px)
          }
          84% {
            transform:translate(55px,-2px)
          }
          85% {
            transform:translate(55px,-2px)
          }
          86% {
            transform:translate(55px,-2px)
          }
          87% {
            transform:translate(55px,-2px)
          }
          88% {
            transform:translate(55px,-2px)
          }
          89% {
            transform:translate(55px,-2px)
          }
          90% {
            transform:translate(55px,-2px)
          }
          91% {
            transform:translate(55px,-2px)
          }
          92% {
            transform:translate(55px,-2px)
          }
          93% {
            transform:translate(55px,-2px)
          }
          94% {
            transform:translate(55px,-2px)
          }
          95% {
            transform:translate(55px,-2px)
          }
          96% {
            transform:translate(55px,-2px)
          }
          97% {
            transform:translate(55px,-2px)
          }
          98% {
            transform:translate(55px,-2px)
          }
          99% {
            transform:translate(55px,-2px)
          }
          100% {
            transform:translate(55px,-2px)
          }
        }
        .atom5 {
          transform:translate(80px,114px);
          animation:atom5 16s linear infinite
        }
        @keyframes atom5 {
          0% {
            transform:translate(80px,114px)
          }
          1% {
            transform:translate(80px,114px)
          }
          2% {
            transform:translate(80px,114px)
          }
          3% {
            transform:translate(80px,114px)
          }
          4% {
            transform:translate(80px,114px)
          }
          5% {
            transform:translate(80px,114px)
          }
          6% {
            transform:translate(80px,114px)
          }
          7% {
            transform:translate(80px,114px)
          }
          8% {
            transform:translate(80px,114px)
          }
          9% {
            transform:translate(80px,114px)
          }
          10% {
            transform:translate(80px,114px)
          }
          11% {
            transform:translate(80px,114px)
          }
          12% {
            transform:translate(80px,114px)
          }
          13% {
            transform:translate(80px,114px)
          }
          14% {
            transform:translate(80px,114px)
          }
          15% {
            transform:translate(80px,114px)
          }
          16% {
            transform:translate(80px,114px)
          }
          17% {
            transform:translate(80px,114px)
          }
          18% {
            transform:translate(80px,114px)
          }
          19% {
            transform:translate(80px,114px)
          }
          20% {
            transform:translate(80px,114px)
          }
          21% {
            transform:translate(80px,114px)
          }
          22% {
            transform:translate(80px,114px)
          }
          23% {
            transform:translate(80px,114px)
          }
          24% {
            transform:translate(80px,114px)
          }
          25% {
            transform:translate(80px,114px)
          }
          26% {
            transform:translate(80px,114px)
          }
          27% {
            transform:translate(80px,114px)
          }
          28% {
            transform:translate(80px,114px)
          }
          29% {
            transform:translate(80px,114px)
          }
          30% {
            transform:translate(80px,114px)
          }
          31% {
            transform:translate(80px,114px)
          }
          32% {
            transform:translate(80px,114px)
          }
          33% {
            transform:translate(80px,114px)
          }
          34% {
            transform:translate(80px,114px)
          }
          35% {
            transform:translate(80px,114px)
          }
          36% {
            transform:translate(80px,114px)
          }
          37% {
            transform:translate(80px,114px)
          }
          38% {
            transform:translate(80px,114px)
          }
          39% {
            transform:translate(80px,114px)
          }
          40% {
            transform:translate(80px,114px)
          }
          41% {
            transform:translate(80px,114px)
          }
          42% {
            transform:translate(80px,114px)
          }
          43% {
            transform:translate(80px,114px)
          }
          44% {
            transform:translate(80px,114px)
          }
          45% {
            transform:translate(80px,114px)
          }
          46% {
            transform:translate(80px,114px)
          }
          47% {
            transform:translate(80px,114px)
          }
          48% {
            transform:translate(80px,114px)
          }
          49% {
            transform:translate(80px,114px)
          }
          50% {
            transform:translate(80px,114px)
          }
          51% {
            transform:translate(80px,114px)
          }
          52% {
            transform:translate(80px,114px)
          }
          53% {
            transform:translate(80px,114px)
          }
          54% {
            transform:translate(80px,114px)
          }
          55% {
            transform:translate(80px,114px)
          }
          56% {
            transform:translate(80px,111.5px)
          }
          57% {
            transform:translate(80px,109px)
          }
          58% {
            transform:translate(80px,106.5px)
          }
          59% {
            transform:translate(80px,104px)
          }
          60% {
            transform:translate(80px,101.5px)
          }
          61% {
            transform:translate(80px,99px)
          }
          62% {
            transform:translate(80px,96.5px)
          }
          63% {
            transform:translate(80px,94px)
          }
          64% {
            transform:translate(80px,91.5px)
          }
          65% {
            transform:translate(80px,89px)
          }
          66% {
            transform:translate(80.333px,82.933px)
          }
          67% {
            transform:translate(80.667px,76.867px)
          }
          68% {
            transform:translate(81px,70.8px)
          }
          69% {
            transform:translate(81.333px,64.733px)
          }
          70% {
            transform:translate(81.667px,58.667px)
          }
          71% {
            transform:translate(82px,52.6px)
          }
          72% {
            transform:translate(82.333px,46.533px)
          }
          73% {
            transform:translate(82.667px,40.467px)
          }
          74% {
            transform:translate(83px,34.4px)
          }
          75% {
            transform:translate(83.333px,28.333px)
          }
          76% {
            transform:translate(83.667px,22.267px)
          }
          77% {
            transform:translate(84px,16.2px)
          }
          78% {
            transform:translate(84.333px,10.133px)
          }
          79% {
            transform:translate(84.667px,4.067px)
          }
          80% {
            transform:translate(85px,-2px)
          }
          81% {
            transform:translate(85px,-2px)
          }
          82% {
            transform:translate(85px,-2px)
          }
          83% {
            transform:translate(85px,-2px)
          }
          84% {
            transform:translate(85px,-2px)
          }
          85% {
            transform:translate(85px,-2px)
          }
          86% {
            transform:translate(85px,-2px)
          }
          87% {
            transform:translate(85px,-2px)
          }
          88% {
            transform:translate(85px,-2px)
          }
          89% {
            transform:translate(85px,-2px)
          }
          90% {
            transform:translate(85px,-2px)
          }
          91% {
            transform:translate(85px,-2px)
          }
          92% {
            transform:translate(85px,-2px)
          }
          93% {
            transform:translate(85px,-2px)
          }
          94% {
            transform:translate(85px,-2px)
          }
          95% {
            transform:translate(85px,-2px)
          }
          96% {
            transform:translate(85px,-2px)
          }
          97% {
            transform:translate(85px,-2px)
          }
          98% {
            transform:translate(85px,-2px)
          }
          99% {
            transform:translate(85px,-2px)
          }
          100% {
            transform:translate(85px,-2px)
          }
        }
        .atom6 {
          transform:translate(43px,110px);
          animation:atom6 16s linear infinite
        }
        @keyframes atom6 {
          0% {
            transform:translate(43px,110px)
          }
          1% {
            transform:translate(43px,110px)
          }
          2% {
            transform:translate(43px,110px)
          }
          3% {
            transform:translate(43px,110px)
          }
          4% {
            transform:translate(43px,110px)
          }
          5% {
            transform:translate(43px,110px)
          }
          6% {
            transform:translate(43px,110px)
          }
          7% {
            transform:translate(43px,110px)
          }
          8% {
            transform:translate(43px,110px)
          }
          9% {
            transform:translate(43px,110px)
          }
          10% {
            transform:translate(43px,110px)
          }
          11% {
            transform:translate(43px,110px)
          }
          12% {
            transform:translate(43px,110px)
          }
          13% {
            transform:translate(43px,110px)
          }
          14% {
            transform:translate(43px,110px)
          }
          15% {
            transform:translate(43px,110px)
          }
          16% {
            transform:translate(43px,110px)
          }
          17% {
            transform:translate(43px,110px)
          }
          18% {
            transform:translate(43px,110px)
          }
          19% {
            transform:translate(43px,110px)
          }
          20% {
            transform:translate(43px,110px)
          }
          21% {
            transform:translate(43px,110px)
          }
          22% {
            transform:translate(43px,110px)
          }
          23% {
            transform:translate(43px,110px)
          }
          24% {
            transform:translate(43px,110px)
          }
          25% {
            transform:translate(43px,110px)
          }
          26% {
            transform:translate(43px,110px)
          }
          27% {
            transform:translate(43px,110px)
          }
          28% {
            transform:translate(43px,110px)
          }
          29% {
            transform:translate(43px,110px)
          }
          30% {
            transform:translate(43px,110px)
          }
          31% {
            transform:translate(43px,110px)
          }
          32% {
            transform:translate(43px,110px)
          }
          33% {
            transform:translate(43px,110px)
          }
          34% {
            transform:translate(43px,110px)
          }
          35% {
            transform:translate(43px,110px)
          }
          36% {
            transform:translate(43px,110px)
          }
          37% {
            transform:translate(43px,110px)
          }
          38% {
            transform:translate(43px,110px)
          }
          39% {
            transform:translate(43px,110px)
          }
          40% {
            transform:translate(43px,110px)
          }
          41% {
            transform:translate(43px,110px)
          }
          42% {
            transform:translate(43px,110px)
          }
          43% {
            transform:translate(43px,110px)
          }
          44% {
            transform:translate(43px,110px)
          }
          45% {
            transform:translate(43px,110px)
          }
          46% {
            transform:translate(43px,110px)
          }
          47% {
            transform:translate(43px,110px)
          }
          48% {
            transform:translate(43px,110px)
          }
          49% {
            transform:translate(43px,110px)
          }
          50% {
            transform:translate(43px,110px)
          }
          51% {
            transform:translate(43px,110px)
          }
          52% {
            transform:translate(43px,110px)
          }
          53% {
            transform:translate(43px,110px)
          }
          54% {
            transform:translate(43px,110px)
          }
          55% {
            transform:translate(43px,110px)
          }
          56% {
            transform:translate(43px,110px)
          }
          57% {
            transform:translate(43px,110px)
          }
          58% {
            transform:translate(43px,110px)
          }
          59% {
            transform:translate(43px,110px)
          }
          60% {
            transform:translate(43px,110px)
          }
          61% {
            transform:translate(43px,110px)
          }
          62% {
            transform:translate(43px,110px)
          }
          63% {
            transform:translate(43px,110px)
          }
          64% {
            transform:translate(43px,110px)
          }
          65% {
            transform:translate(43px,110px)
          }
          66% {
            transform:translate(43px,110px)
          }
          67% {
            transform:translate(43px,110px)
          }
          68% {
            transform:translate(43px,110px)
          }
          69% {
            transform:translate(43px,110px)
          }
          70% {
            transform:translate(43px,110px)
          }
          71% {
            transform:translate(43px,110px)
          }
          72% {
            transform:translate(43px,110px)
          }
          73% {
            transform:translate(43px,110px)
          }
          74% {
            transform:translate(43px,110px)
          }
          75% {
            transform:translate(43px,110px)
          }
          76% {
            transform:translate(43px,110px)
          }
          77% {
            transform:translate(43px,110px)
          }
          78% {
            transform:translate(43px,110px)
          }
          79% {
            transform:translate(43px,110px)
          }
          80% {
            transform:translate(43px,110px)
          }
          81% {
            transform:translate(43px,110px)
          }
          82% {
            transform:translate(43px,110px)
          }
          83% {
            transform:translate(43px,110px)
          }
          84% {
            transform:translate(43px,110px)
          }
          85% {
            transform:translate(43px,110px)
          }
          86% {
            transform:translate(43px,110px)
          }
          87% {
            transform:translate(43px,110px)
          }
          88% {
            transform:translate(43px,110px)
          }
          89% {
            transform:translate(43px,110px)
          }
          90% {
            transform:translate(43px,110px)
          }
          91% {
            transform:translate(43px,110px)
          }
          92% {
            transform:translate(43px,110px)
          }
          93% {
            transform:translate(43px,110px)
          }
          94% {
            transform:translate(43px,110px)
          }
          95% {
            transform:translate(43px,110px)
          }
          96% {
            transform:translate(43px,110px)
          }
          97% {
            transform:translate(43px,110px)
          }
          98% {
            transform:translate(43px,110px)
          }
          99% {
            transform:translate(43px,110px)
          }
          100% {
            transform:translate(43px,110px)
          }
        }
        .atom7 {
          transform:translate(94px,89px);
          animation:atom7 16s linear infinite
        }
        @keyframes atom7 {
          0% {
            transform:translate(94px,89px)
          }
          1% {
            transform:translate(94px,89px)
          }
          2% {
            transform:translate(94px,89px)
          }
          3% {
            transform:translate(94px,89px)
          }
          4% {
            transform:translate(94px,89px)
          }
          5% {
            transform:translate(94px,89px)
          }
          6% {
            transform:translate(94px,89px)
          }
          7% {
            transform:translate(94px,89px)
          }
          8% {
            transform:translate(94px,89px)
          }
          9% {
            transform:translate(94px,89px)
          }
          10% {
            transform:translate(94px,89px)
          }
          11% {
            transform:translate(94px,89px)
          }
          12% {
            transform:translate(94px,89px)
          }
          13% {
            transform:translate(94px,89px)
          }
          14% {
            transform:translate(94px,89px)
          }
          15% {
            transform:translate(94px,89px)
          }
          16% {
            transform:translate(94px,89px)
          }
          17% {
            transform:translate(94px,89px)
          }
          18% {
            transform:translate(94px,89px)
          }
          19% {
            transform:translate(94px,89px)
          }
          20% {
            transform:translate(94px,89px)
          }
          21% {
            transform:translate(94px,89px)
          }
          22% {
            transform:translate(94px,89px)
          }
          23% {
            transform:translate(94px,89px)
          }
          24% {
            transform:translate(94px,89px)
          }
          25% {
            transform:translate(94px,89px)
          }
          26% {
            transform:translate(94px,89px)
          }
          27% {
            transform:translate(94px,89px)
          }
          28% {
            transform:translate(94px,89px)
          }
          29% {
            transform:translate(94px,89px)
          }
          30% {
            transform:translate(94px,89px)
          }
          31% {
            transform:translate(94px,89px)
          }
          32% {
            transform:translate(94px,89px)
          }
          33% {
            transform:translate(94px,89px)
          }
          34% {
            transform:translate(94px,89px)
          }
          35% {
            transform:translate(94px,89px)
          }
          36% {
            transform:translate(94px,89px)
          }
          37% {
            transform:translate(94px,89px)
          }
          38% {
            transform:translate(94px,89px)
          }
          39% {
            transform:translate(94px,89px)
          }
          40% {
            transform:translate(94px,89px)
          }
          41% {
            transform:translate(94px,89px)
          }
          42% {
            transform:translate(94px,89px)
          }
          43% {
            transform:translate(94px,89px)
          }
          44% {
            transform:translate(94px,89px)
          }
          45% {
            transform:translate(94px,89px)
          }
          46% {
            transform:translate(94px,89px)
          }
          47% {
            transform:translate(94px,89px)
          }
          48% {
            transform:translate(94px,89px)
          }
          49% {
            transform:translate(94px,89px)
          }
          50% {
            transform:translate(94px,89px)
          }
          51% {
            transform:translate(94px,89px)
          }
          52% {
            transform:translate(94px,89px)
          }
          53% {
            transform:translate(94px,89px)
          }
          54% {
            transform:translate(94px,89px)
          }
          55% {
            transform:translate(94px,89px)
          }
          56% {
            transform:translate(94px,89px)
          }
          57% {
            transform:translate(94px,89px)
          }
          58% {
            transform:translate(94px,89px)
          }
          59% {
            transform:translate(94px,89px)
          }
          60% {
            transform:translate(94px,89px)
          }
          61% {
            transform:translate(94px,89px)
          }
          62% {
            transform:translate(94px,89px)
          }
          63% {
            transform:translate(94px,89px)
          }
          64% {
            transform:translate(94px,89px)
          }
          65% {
            transform:translate(94px,89px)
          }
          66% {
            transform:translate(94px,89px)
          }
          67% {
            transform:translate(94px,89px)
          }
          68% {
            transform:translate(94px,89px)
          }
          69% {
            transform:translate(94px,89px)
          }
          70% {
            transform:translate(94px,89px)
          }
          71% {
            transform:translate(94px,89px)
          }
          72% {
            transform:translate(94px,89px)
          }
          73% {
            transform:translate(94px,89px)
          }
          74% {
            transform:translate(94px,89px)
          }
          75% {
            transform:translate(94px,89px)
          }
          76% {
            transform:translate(94px,89px)
          }
          77% {
            transform:translate(94px,89px)
          }
          78% {
            transform:translate(94px,89px)
          }
          79% {
            transform:translate(94px,89px)
          }
          80% {
            transform:translate(94px,89px)
          }
          81% {
            transform:translate(94px,89px)
          }
          82% {
            transform:translate(94px,89px)
          }
          83% {
            transform:translate(94px,89px)
          }
          84% {
            transform:translate(94px,89px)
          }
          85% {
            transform:translate(94px,89px)
          }
          86% {
            transform:translate(94px,89px)
          }
          87% {
            transform:translate(94px,89px)
          }
          88% {
            transform:translate(94px,89px)
          }
          89% {
            transform:translate(94px,89px)
          }
          90% {
            transform:translate(94px,89px)
          }
          91% {
            transform:translate(94px,89px)
          }
          92% {
            transform:translate(94px,89px)
          }
          93% {
            transform:translate(94px,89px)
          }
          94% {
            transform:translate(94px,89px)
          }
          95% {
            transform:translate(94px,89px)
          }
          96% {
            transform:translate(94px,89px)
          }
          97% {
            transform:translate(94px,89px)
          }
          98% {
            transform:translate(94px,89px)
          }
          99% {
            transform:translate(94px,89px)
          }
          100% {
            transform:translate(94px,89px)
          }
        }
        .atom8 {
          transform:translate(55px,-8px);
          animation:atom8 16s linear infinite
        }
        @keyframes atom8 {
          0% {
            transform:translate(70px,-16px)
          }
          1% {
            transform:translate(70px,-16px)
          }
          2% {
            transform:translate(70px,-16px)
          }
          3% {
            transform:translate(70px,-16px)
          }
          4% {
            transform:translate(70px,-16px)
          }
          5% {
            transform:translate(70px,-16px)
          }
          6% {
            transform:translate(70px,-16px)
          }
          7% {
            transform:translate(70px,-16px)
          }
          8% {
            transform:translate(70px,-16px)
          }
          9% {
            transform:translate(70px,-16px)
          }
          10% {
            transform:translate(70px,-16px)
          }
          11% {
            transform:translate(70px,-9.2px)
          }
          12% {
            transform:translate(70px,-2.4px)
          }
          13% {
            transform:translate(70px,4.4px)
          }
          14% {
            transform:translate(70px,11.2px)
          }
          15% {
            transform:translate(70px,18px)
          }
          16% {
            transform:translate(70px,24.8px)
          }
          17% {
            transform:translate(70px,31.6px)
          }
          18% {
            transform:translate(70px,38.4px)
          }
          19% {
            transform:translate(70px,45.2px)
          }
          20% {
            transform:translate(70px,52px)
          }
          21% {
            transform:translate(68px,58.2px)
          }
          22% {
            transform:translate(66px,64.4px)
          }
          23% {
            transform:translate(64px,70.6px)
          }
          24% {
            transform:translate(62px,76.8px)
          }
          25% {
            transform:translate(60px,83px)
          }
          26% {
            transform:translate(59.667px,76.933px)
          }
          27% {
            transform:translate(59.333px,70.867px)
          }
          28% {
            transform:translate(59px,64.8px)
          }
          29% {
            transform:translate(58.667px,58.733px)
          }
          30% {
            transform:translate(58.333px,52.667px)
          }
          31% {
            transform:translate(58px,46.6px)
          }
          32% {
            transform:translate(57.667px,40.533px)
          }
          33% {
            transform:translate(57.333px,34.467px)
          }
          34% {
            transform:translate(57px,28.4px)
          }
          35% {
            transform:translate(56.667px,22.333px)
          }
          36% {
            transform:translate(56.333px,16.267px)
          }
          37% {
            transform:translate(56px,10.2px)
          }
          38% {
            transform:translate(55.667px,4.133px)
          }
          39% {
            transform:translate(55.333px,-1.933px)
          }
          40% {
            transform:translate(55px,-8px)
          }
          41% {
            transform:translate(55px,-8px)
          }
          42% {
            transform:translate(55px,-8px)
          }
          43% {
            transform:translate(55px,-8px)
          }
          44% {
            transform:translate(55px,-8px)
          }
          45% {
            transform:translate(55px,-8px)
          }
          46% {
            transform:translate(55px,-8px)
          }
          47% {
            transform:translate(55px,-8px)
          }
          48% {
            transform:translate(55px,-8px)
          }
          49% {
            transform:translate(55px,-8px)
          }
          50% {
            transform:translate(55px,-8px)
          }
          51% {
            transform:translate(55px,-8px)
          }
          52% {
            transform:translate(55px,-8px)
          }
          53% {
            transform:translate(55px,-8px)
          }
          54% {
            transform:translate(55px,-8px)
          }
          55% {
            transform:translate(55px,-8px)
          }
          56% {
            transform:translate(55px,-8px)
          }
          57% {
            transform:translate(55px,-8px)
          }
          58% {
            transform:translate(55px,-8px)
          }
          59% {
            transform:translate(55px,-8px)
          }
          60% {
            transform:translate(55px,-8px)
          }
          61% {
            transform:translate(55px,-8px)
          }
          62% {
            transform:translate(55px,-8px)
          }
          63% {
            transform:translate(55px,-8px)
          }
          64% {
            transform:translate(55px,-8px)
          }
          65% {
            transform:translate(55px,-8px)
          }
          66% {
            transform:translate(55px,-8px)
          }
          67% {
            transform:translate(55px,-8px)
          }
          68% {
            transform:translate(55px,-8px)
          }
          69% {
            transform:translate(55px,-8px)
          }
          70% {
            transform:translate(55px,-8px)
          }
          71% {
            transform:translate(55px,-8px)
          }
          72% {
            transform:translate(55px,-8px)
          }
          73% {
            transform:translate(55px,-8px)
          }
          74% {
            transform:translate(55px,-8px)
          }
          75% {
            transform:translate(55px,-8px)
          }
          76% {
            transform:translate(55px,-8px)
          }
          77% {
            transform:translate(55px,-8px)
          }
          78% {
            transform:translate(55px,-8px)
          }
          79% {
            transform:translate(55px,-8px)
          }
          80% {
            transform:translate(55px,-8px)
          }
          81% {
            transform:translate(55px,-8px)
          }
          82% {
            transform:translate(55px,-8px)
          }
          83% {
            transform:translate(55px,-8px)
          }
          84% {
            transform:translate(55px,-8px)
          }
          85% {
            transform:translate(55px,-8px)
          }
          86% {
            transform:translate(55px,-8px)
          }
          87% {
            transform:translate(55px,-8px)
          }
          88% {
            transform:translate(55px,-8px)
          }
          89% {
            transform:translate(55px,-8px)
          }
          90% {
            transform:translate(55px,-8px)
          }
          91% {
            transform:translate(55px,-8px)
          }
          92% {
            transform:translate(55px,-8px)
          }
          93% {
            transform:translate(55px,-8px)
          }
          94% {
            transform:translate(55px,-8px)
          }
          95% {
            transform:translate(55px,-8px)
          }
          96% {
            transform:translate(55px,-8px)
          }
          97% {
            transform:translate(55px,-8px)
          }
          98% {
            transform:translate(55px,-8px)
          }
          99% {
            transform:translate(55px,-8px)
          }
          100% {
            transform:translate(55px,-8px)
          }
        }
        .atom9 {
          transform:translate(85px,-8px);
          animation:atom9 16s linear infinite
        }
        @keyframes atom9 {
          0% {
            transform:translate(70px,-10px)
          }
          1% {
            transform:translate(70px,-10px)
          }
          2% {
            transform:translate(70px,-10px)
          }
          3% {
            transform:translate(70px,-10px)
          }
          4% {
            transform:translate(70px,-10px)
          }
          5% {
            transform:translate(70px,-10px)
          }
          6% {
            transform:translate(70px,-10px)
          }
          7% {
            transform:translate(70px,-10px)
          }
          8% {
            transform:translate(70px,-10px)
          }
          9% {
            transform:translate(70px,-10px)
          }
          10% {
            transform:translate(70px,-10px)
          }
          11% {
            transform:translate(70px,-3.2px)
          }
          12% {
            transform:translate(70px,3.6px)
          }
          13% {
            transform:translate(70px,10.4px)
          }
          14% {
            transform:translate(70px,17.2px)
          }
          15% {
            transform:translate(70px,24px)
          }
          16% {
            transform:translate(70px,30.8px)
          }
          17% {
            transform:translate(70px,37.6px)
          }
          18% {
            transform:translate(70px,44.4px)
          }
          19% {
            transform:translate(70px,51.2px)
          }
          20% {
            transform:translate(70px,58px)
          }
          21% {
            transform:translate(72px,63px)
          }
          22% {
            transform:translate(74px,68px)
          }
          23% {
            transform:translate(76px,73px)
          }
          24% {
            transform:translate(78px,78px)
          }
          25% {
            transform:translate(80px,83px)
          }
          26% {
            transform:translate(80.333px,76.933px)
          }
          27% {
            transform:translate(80.667px,70.867px)
          }
          28% {
            transform:translate(81px,64.8px)
          }
          29% {
            transform:translate(81.333px,58.733px)
          }
          30% {
            transform:translate(81.667px,52.667px)
          }
          31% {
            transform:translate(82px,46.6px)
          }
          32% {
            transform:translate(82.333px,40.533px)
          }
          33% {
            transform:translate(82.667px,34.467px)
          }
          34% {
            transform:translate(83px,28.4px)
          }
          35% {
            transform:translate(83.333px,22.333px)
          }
          36% {
            transform:translate(83.667px,16.267px)
          }
          37% {
            transform:translate(84px,10.2px)
          }
          38% {
            transform:translate(84.333px,4.133px)
          }
          39% {
            transform:translate(84.667px,-1.933px)
          }
          40% {
            transform:translate(85px,-8px)
          }
          41% {
            transform:translate(85px,-8px)
          }
          42% {
            transform:translate(85px,-8px)
          }
          43% {
            transform:translate(85px,-8px)
          }
          44% {
            transform:translate(85px,-8px)
          }
          45% {
            transform:translate(85px,-8px)
          }
          46% {
            transform:translate(85px,-8px)
          }
          47% {
            transform:translate(85px,-8px)
          }
          48% {
            transform:translate(85px,-8px)
          }
          49% {
            transform:translate(85px,-8px)
          }
          50% {
            transform:translate(85px,-8px)
          }
          51% {
            transform:translate(85px,-8px)
          }
          52% {
            transform:translate(85px,-8px)
          }
          53% {
            transform:translate(85px,-8px)
          }
          54% {
            transform:translate(85px,-8px)
          }
          55% {
            transform:translate(85px,-8px)
          }
          56% {
            transform:translate(85px,-8px)
          }
          57% {
            transform:translate(85px,-8px)
          }
          58% {
            transform:translate(85px,-8px)
          }
          59% {
            transform:translate(85px,-8px)
          }
          60% {
            transform:translate(85px,-8px)
          }
          61% {
            transform:translate(85px,-8px)
          }
          62% {
            transform:translate(85px,-8px)
          }
          63% {
            transform:translate(85px,-8px)
          }
          64% {
            transform:translate(85px,-8px)
          }
          65% {
            transform:translate(85px,-8px)
          }
          66% {
            transform:translate(85px,-8px)
          }
          67% {
            transform:translate(85px,-8px)
          }
          68% {
            transform:translate(85px,-8px)
          }
          69% {
            transform:translate(85px,-8px)
          }
          70% {
            transform:translate(85px,-8px)
          }
          71% {
            transform:translate(85px,-8px)
          }
          72% {
            transform:translate(85px,-8px)
          }
          73% {
            transform:translate(85px,-8px)
          }
          74% {
            transform:translate(85px,-8px)
          }
          75% {
            transform:translate(85px,-8px)
          }
          76% {
            transform:translate(85px,-8px)
          }
          77% {
            transform:translate(85px,-8px)
          }
          78% {
            transform:translate(85px,-8px)
          }
          79% {
            transform:translate(85px,-8px)
          }
          80% {
            transform:translate(85px,-8px)
          }
          81% {
            transform:translate(85px,-8px)
          }
          82% {
            transform:translate(85px,-8px)
          }
          83% {
            transform:translate(85px,-8px)
          }
          84% {
            transform:translate(85px,-8px)
          }
          85% {
            transform:translate(85px,-8px)
          }
          86% {
            transform:translate(85px,-8px)
          }
          87% {
            transform:translate(85px,-8px)
          }
          88% {
            transform:translate(85px,-8px)
          }
          89% {
            transform:translate(85px,-8px)
          }
          90% {
            transform:translate(85px,-8px)
          }
          91% {
            transform:translate(85px,-8px)
          }
          92% {
            transform:translate(85px,-8px)
          }
          93% {
            transform:translate(85px,-8px)
          }
          94% {
            transform:translate(85px,-8px)
          }
          95% {
            transform:translate(85px,-8px)
          }
          96% {
            transform:translate(85px,-8px)
          }
          97% {
            transform:translate(85px,-8px)
          }
          98% {
            transform:translate(85px,-8px)
          }
          99% {
            transform:translate(85px,-8px)
          }
          100% {
            transform:translate(85px,-8px)
          }
        }
        .atom10 {
          transform:translate(56.667px,22.333px);
          animation:atom10 16s linear infinite
        }
        @keyframes atom10 {
          0% {
            transform:translate(70px,-16px)
          }
          1% {
            transform:translate(70px,-16px)
          }
          2% {
            transform:translate(70px,-16px)
          }
          3% {
            transform:translate(70px,-16px)
          }
          4% {
            transform:translate(70px,-16px)
          }
          5% {
            transform:translate(70px,-16px)
          }
          6% {
            transform:translate(70px,-16px)
          }
          7% {
            transform:translate(70px,-16px)
          }
          8% {
            transform:translate(70px,-16px)
          }
          9% {
            transform:translate(70px,-16px)
          }
          10% {
            transform:translate(70px,-16px)
          }
          11% {
            transform:translate(70px,-16px)
          }
          12% {
            transform:translate(70px,-16px)
          }
          13% {
            transform:translate(70px,-16px)
          }
          14% {
            transform:translate(70px,-16px)
          }
          15% {
            transform:translate(70px,-16px)
          }
          16% {
            transform:translate(70px,-16px)
          }
          17% {
            transform:translate(70px,-16px)
          }
          18% {
            transform:translate(70px,-16px)
          }
          19% {
            transform:translate(70px,-16px)
          }
          20% {
            transform:translate(70px,-16px)
          }
          21% {
            transform:translate(70px,-16px)
          }
          22% {
            transform:translate(70px,-16px)
          }
          23% {
            transform:translate(70px,-16px)
          }
          24% {
            transform:translate(70px,-16px)
          }
          25% {
            transform:translate(70px,-16px)
          }
          26% {
            transform:translate(70px,-16px)
          }
          27% {
            transform:translate(70px,-16px)
          }
          28% {
            transform:translate(70px,-16px)
          }
          29% {
            transform:translate(70px,-16px)
          }
          30% {
            transform:translate(70px,-16px)
          }
          31% {
            transform:translate(70px,-9.2px)
          }
          32% {
            transform:translate(70px,-2.4px)
          }
          33% {
            transform:translate(70px,4.4px)
          }
          34% {
            transform:translate(70px,11.2px)
          }
          35% {
            transform:translate(70px,18px)
          }
          36% {
            transform:translate(70px,24.8px)
          }
          37% {
            transform:translate(70px,31.6px)
          }
          38% {
            transform:translate(70px,38.4px)
          }
          39% {
            transform:translate(70px,45.2px)
          }
          40% {
            transform:translate(70px,52px)
          }
          41% {
            transform:translate(68px,58.2px)
          }
          42% {
            transform:translate(66px,64.4px)
          }
          43% {
            transform:translate(64px,70.6px)
          }
          44% {
            transform:translate(62px,76.8px)
          }
          45% {
            transform:translate(60px,83px)
          }
          46% {
            transform:translate(59.667px,76.933px)
          }
          47% {
            transform:translate(59.333px,70.867px)
          }
          48% {
            transform:translate(59px,64.8px)
          }
          49% {
            transform:translate(58.667px,58.733px)
          }
          50% {
            transform:translate(58.333px,52.667px)
          }
          51% {
            transform:translate(58px,46.6px)
          }
          52% {
            transform:translate(57.667px,40.533px)
          }
          53% {
            transform:translate(57.333px,34.467px)
          }
          54% {
            transform:translate(57px,28.4px)
          }
          55% {
            transform:translate(56.667px,22.333px)
          }
          56% {
            transform:translate(56.333px,16.267px)
          }
          57% {
            transform:translate(56px,10.2px)
          }
          58% {
            transform:translate(55.667px,4.133px)
          }
          59% {
            transform:translate(55.333px,-1.933px)
          }
          60% {
            transform:translate(55px,-8px)
          }
          61% {
            transform:translate(55px,-8px)
          }
          62% {
            transform:translate(55px,-8px)
          }
          63% {
            transform:translate(55px,-8px)
          }
          64% {
            transform:translate(55px,-8px)
          }
          65% {
            transform:translate(55px,-8px)
          }
          66% {
            transform:translate(55px,-8px)
          }
          67% {
            transform:translate(55px,-8px)
          }
          68% {
            transform:translate(55px,-8px)
          }
          69% {
            transform:translate(55px,-8px)
          }
          70% {
            transform:translate(55px,-8px)
          }
          71% {
            transform:translate(55px,-8px)
          }
          72% {
            transform:translate(55px,-8px)
          }
          73% {
            transform:translate(55px,-8px)
          }
          74% {
            transform:translate(55px,-8px)
          }
          75% {
            transform:translate(55px,-8px)
          }
          76% {
            transform:translate(55px,-8px)
          }
          77% {
            transform:translate(55px,-8px)
          }
          78% {
            transform:translate(55px,-8px)
          }
          79% {
            transform:translate(55px,-8px)
          }
          80% {
            transform:translate(55px,-8px)
          }
          81% {
            transform:translate(55px,-8px)
          }
          82% {
            transform:translate(55px,-8px)
          }
          83% {
            transform:translate(55px,-8px)
          }
          84% {
            transform:translate(55px,-8px)
          }
          85% {
            transform:translate(55px,-8px)
          }
          86% {
            transform:translate(55px,-8px)
          }
          87% {
            transform:translate(55px,-8px)
          }
          88% {
            transform:translate(55px,-8px)
          }
          89% {
            transform:translate(55px,-8px)
          }
          90% {
            transform:translate(55px,-8px)
          }
          91% {
            transform:translate(55px,-8px)
          }
          92% {
            transform:translate(55px,-8px)
          }
          93% {
            transform:translate(55px,-8px)
          }
          94% {
            transform:translate(55px,-8px)
          }
          95% {
            transform:translate(55px,-8px)
          }
          96% {
            transform:translate(55px,-8px)
          }
          97% {
            transform:translate(55px,-8px)
          }
          98% {
            transform:translate(55px,-8px)
          }
          99% {
            transform:translate(55px,-8px)
          }
          100% {
            transform:translate(55px,-8px)
          }
        }
        .atom11 {
          transform:translate(83.333px,22.333px);
          animation:atom11 16s linear infinite
        }
        @keyframes atom11 {
          0% {
            transform:translate(70px,-10px)
          }
          1% {
            transform:translate(70px,-10px)
          }
          2% {
            transform:translate(70px,-10px)
          }
          3% {
            transform:translate(70px,-10px)
          }
          4% {
            transform:translate(70px,-10px)
          }
          5% {
            transform:translate(70px,-10px)
          }
          6% {
            transform:translate(70px,-10px)
          }
          7% {
            transform:translate(70px,-10px)
          }
          8% {
            transform:translate(70px,-10px)
          }
          9% {
            transform:translate(70px,-10px)
          }
          10% {
            transform:translate(70px,-10px)
          }
          11% {
            transform:translate(70px,-10px)
          }
          12% {
            transform:translate(70px,-10px)
          }
          13% {
            transform:translate(70px,-10px)
          }
          14% {
            transform:translate(70px,-10px)
          }
          15% {
            transform:translate(70px,-10px)
          }
          16% {
            transform:translate(70px,-10px)
          }
          17% {
            transform:translate(70px,-10px)
          }
          18% {
            transform:translate(70px,-10px)
          }
          19% {
            transform:translate(70px,-10px)
          }
          20% {
            transform:translate(70px,-10px)
          }
          21% {
            transform:translate(70px,-10px)
          }
          22% {
            transform:translate(70px,-10px)
          }
          23% {
            transform:translate(70px,-10px)
          }
          24% {
            transform:translate(70px,-10px)
          }
          25% {
            transform:translate(70px,-10px)
          }
          26% {
            transform:translate(70px,-10px)
          }
          27% {
            transform:translate(70px,-10px)
          }
          28% {
            transform:translate(70px,-10px)
          }
          29% {
            transform:translate(70px,-10px)
          }
          30% {
            transform:translate(70px,-10px)
          }
          31% {
            transform:translate(70px,-3.2px)
          }
          32% {
            transform:translate(70px,3.6px)
          }
          33% {
            transform:translate(70px,10.4px)
          }
          34% {
            transform:translate(70px,17.2px)
          }
          35% {
            transform:translate(70px,24px)
          }
          36% {
            transform:translate(70px,30.8px)
          }
          37% {
            transform:translate(70px,37.6px)
          }
          38% {
            transform:translate(70px,44.4px)
          }
          39% {
            transform:translate(70px,51.2px)
          }
          40% {
            transform:translate(70px,58px)
          }
          41% {
            transform:translate(72px,63px)
          }
          42% {
            transform:translate(74px,68px)
          }
          43% {
            transform:translate(76px,73px)
          }
          44% {
            transform:translate(78px,78px)
          }
          45% {
            transform:translate(80px,83px)
          }
          46% {
            transform:translate(80.333px,76.933px)
          }
          47% {
            transform:translate(80.667px,70.867px)
          }
          48% {
            transform:translate(81px,64.8px)
          }
          49% {
            transform:translate(81.333px,58.733px)
          }
          50% {
            transform:translate(81.667px,52.667px)
          }
          51% {
            transform:translate(82px,46.6px)
          }
          52% {
            transform:translate(82.333px,40.533px)
          }
          53% {
            transform:translate(82.667px,34.467px)
          }
          54% {
            transform:translate(83px,28.4px)
          }
          55% {
            transform:translate(83.333px,22.333px)
          }
          56% {
            transform:translate(83.667px,16.267px)
          }
          57% {
            transform:translate(84px,10.2px)
          }
          58% {
            transform:translate(84.333px,4.133px)
          }
          59% {
            transform:translate(84.667px,-1.933px)
          }
          60% {
            transform:translate(85px,-8px)
          }
          61% {
            transform:translate(85px,-8px)
          }
          62% {
            transform:translate(85px,-8px)
          }
          63% {
            transform:translate(85px,-8px)
          }
          64% {
            transform:translate(85px,-8px)
          }
          65% {
            transform:translate(85px,-8px)
          }
          66% {
            transform:translate(85px,-8px)
          }
          67% {
            transform:translate(85px,-8px)
          }
          68% {
            transform:translate(85px,-8px)
          }
          69% {
            transform:translate(85px,-8px)
          }
          70% {
            transform:translate(85px,-8px)
          }
          71% {
            transform:translate(85px,-8px)
          }
          72% {
            transform:translate(85px,-8px)
          }
          73% {
            transform:translate(85px,-8px)
          }
          74% {
            transform:translate(85px,-8px)
          }
          75% {
            transform:translate(85px,-8px)
          }
          76% {
            transform:translate(85px,-8px)
          }
          77% {
            transform:translate(85px,-8px)
          }
          78% {
            transform:translate(85px,-8px)
          }
          79% {
            transform:translate(85px,-8px)
          }
          80% {
            transform:translate(85px,-8px)
          }
          81% {
            transform:translate(85px,-8px)
          }
          82% {
            transform:translate(85px,-8px)
          }
          83% {
            transform:translate(85px,-8px)
          }
          84% {
            transform:translate(85px,-8px)
          }
          85% {
            transform:translate(85px,-8px)
          }
          86% {
            transform:translate(85px,-8px)
          }
          87% {
            transform:translate(85px,-8px)
          }
          88% {
            transform:translate(85px,-8px)
          }
          89% {
            transform:translate(85px,-8px)
          }
          90% {
            transform:translate(85px,-8px)
          }
          91% {
            transform:translate(85px,-8px)
          }
          92% {
            transform:translate(85px,-8px)
          }
          93% {
            transform:translate(85px,-8px)
          }
          94% {
            transform:translate(85px,-8px)
          }
          95% {
            transform:translate(85px,-8px)
          }
          96% {
            transform:translate(85px,-8px)
          }
          97% {
            transform:translate(85px,-8px)
          }
          98% {
            transform:translate(85px,-8px)
          }
          99% {
            transform:translate(85px,-8px)
          }
          100% {
            transform:translate(85px,-8px)
          }
        }
        .atom12 {
          transform:translate(70px,18px);
          animation:atom12 16s linear infinite
        }
        @keyframes atom12 {
          0% {
            transform:translate(70px,-16px)
          }
          1% {
            transform:translate(70px,-16px)
          }
          2% {
            transform:translate(70px,-16px)
          }
          3% {
            transform:translate(70px,-16px)
          }
          4% {
            transform:translate(70px,-16px)
          }
          5% {
            transform:translate(70px,-16px)
          }
          6% {
            transform:translate(70px,-16px)
          }
          7% {
            transform:translate(70px,-16px)
          }
          8% {
            transform:translate(70px,-16px)
          }
          9% {
            transform:translate(70px,-16px)
          }
          10% {
            transform:translate(70px,-16px)
          }
          11% {
            transform:translate(70px,-16px)
          }
          12% {
            transform:translate(70px,-16px)
          }
          13% {
            transform:translate(70px,-16px)
          }
          14% {
            transform:translate(70px,-16px)
          }
          15% {
            transform:translate(70px,-16px)
          }
          16% {
            transform:translate(70px,-16px)
          }
          17% {
            transform:translate(70px,-16px)
          }
          18% {
            transform:translate(70px,-16px)
          }
          19% {
            transform:translate(70px,-16px)
          }
          20% {
            transform:translate(70px,-16px)
          }
          21% {
            transform:translate(70px,-16px)
          }
          22% {
            transform:translate(70px,-16px)
          }
          23% {
            transform:translate(70px,-16px)
          }
          24% {
            transform:translate(70px,-16px)
          }
          25% {
            transform:translate(70px,-16px)
          }
          26% {
            transform:translate(70px,-16px)
          }
          27% {
            transform:translate(70px,-16px)
          }
          28% {
            transform:translate(70px,-16px)
          }
          29% {
            transform:translate(70px,-16px)
          }
          30% {
            transform:translate(70px,-16px)
          }
          31% {
            transform:translate(70px,-16px)
          }
          32% {
            transform:translate(70px,-16px)
          }
          33% {
            transform:translate(70px,-16px)
          }
          34% {
            transform:translate(70px,-16px)
          }
          35% {
            transform:translate(70px,-16px)
          }
          36% {
            transform:translate(70px,-16px)
          }
          37% {
            transform:translate(70px,-16px)
          }
          38% {
            transform:translate(70px,-16px)
          }
          39% {
            transform:translate(70px,-16px)
          }
          40% {
            transform:translate(70px,-16px)
          }
          41% {
            transform:translate(70px,-16px)
          }
          42% {
            transform:translate(70px,-16px)
          }
          43% {
            transform:translate(70px,-16px)
          }
          44% {
            transform:translate(70px,-16px)
          }
          45% {
            transform:translate(70px,-16px)
          }
          46% {
            transform:translate(70px,-16px)
          }
          47% {
            transform:translate(70px,-16px)
          }
          48% {
            transform:translate(70px,-16px)
          }
          49% {
            transform:translate(70px,-16px)
          }
          50% {
            transform:translate(70px,-16px)
          }
          51% {
            transform:translate(70px,-9.2px)
          }
          52% {
            transform:translate(70px,-2.4px)
          }
          53% {
            transform:translate(70px,4.4px)
          }
          54% {
            transform:translate(70px,11.2px)
          }
          55% {
            transform:translate(70px,18px)
          }
          56% {
            transform:translate(70px,24.8px)
          }
          57% {
            transform:translate(70px,31.6px)
          }
          58% {
            transform:translate(70px,38.4px)
          }
          59% {
            transform:translate(70px,45.2px)
          }
          60% {
            transform:translate(70px,52px)
          }
          61% {
            transform:translate(68px,58.2px)
          }
          62% {
            transform:translate(66px,64.4px)
          }
          63% {
            transform:translate(64px,70.6px)
          }
          64% {
            transform:translate(62px,76.8px)
          }
          65% {
            transform:translate(60px,83px)
          }
          66% {
            transform:translate(59.667px,76.933px)
          }
          67% {
            transform:translate(59.333px,70.867px)
          }
          68% {
            transform:translate(59px,64.8px)
          }
          69% {
            transform:translate(58.667px,58.733px)
          }
          70% {
            transform:translate(58.333px,52.667px)
          }
          71% {
            transform:translate(58px,46.6px)
          }
          72% {
            transform:translate(57.667px,40.533px)
          }
          73% {
            transform:translate(57.333px,34.467px)
          }
          74% {
            transform:translate(57px,28.4px)
          }
          75% {
            transform:translate(56.667px,22.333px)
          }
          76% {
            transform:translate(56.333px,16.267px)
          }
          77% {
            transform:translate(56px,10.2px)
          }
          78% {
            transform:translate(55.667px,4.133px)
          }
          79% {
            transform:translate(55.333px,-1.933px)
          }
          80% {
            transform:translate(55px,-8px)
          }
          81% {
            transform:translate(55px,-8px)
          }
          82% {
            transform:translate(55px,-8px)
          }
          83% {
            transform:translate(55px,-8px)
          }
          84% {
            transform:translate(55px,-8px)
          }
          85% {
            transform:translate(55px,-8px)
          }
          86% {
            transform:translate(55px,-8px)
          }
          87% {
            transform:translate(55px,-8px)
          }
          88% {
            transform:translate(55px,-8px)
          }
          89% {
            transform:translate(55px,-8px)
          }
          90% {
            transform:translate(55px,-8px)
          }
          91% {
            transform:translate(55px,-8px)
          }
          92% {
            transform:translate(55px,-8px)
          }
          93% {
            transform:translate(55px,-8px)
          }
          94% {
            transform:translate(55px,-8px)
          }
          95% {
            transform:translate(55px,-8px)
          }
          96% {
            transform:translate(55px,-8px)
          }
          97% {
            transform:translate(55px,-8px)
          }
          98% {
            transform:translate(55px,-8px)
          }
          99% {
            transform:translate(55px,-8px)
          }
          100% {
            transform:translate(55px,-8px)
          }
        }
        .atom13 {
          transform:translate(70px,24px);
          animation:atom13 16s linear infinite
        }
        @keyframes atom13 {
          0% {
            transform:translate(70px,-10px)
          }
          1% {
            transform:translate(70px,-10px)
          }
          2% {
            transform:translate(70px,-10px)
          }
          3% {
            transform:translate(70px,-10px)
          }
          4% {
            transform:translate(70px,-10px)
          }
          5% {
            transform:translate(70px,-10px)
          }
          6% {
            transform:translate(70px,-10px)
          }
          7% {
            transform:translate(70px,-10px)
          }
          8% {
            transform:translate(70px,-10px)
          }
          9% {
            transform:translate(70px,-10px)
          }
          10% {
            transform:translate(70px,-10px)
          }
          11% {
            transform:translate(70px,-10px)
          }
          12% {
            transform:translate(70px,-10px)
          }
          13% {
            transform:translate(70px,-10px)
          }
          14% {
            transform:translate(70px,-10px)
          }
          15% {
            transform:translate(70px,-10px)
          }
          16% {
            transform:translate(70px,-10px)
          }
          17% {
            transform:translate(70px,-10px)
          }
          18% {
            transform:translate(70px,-10px)
          }
          19% {
            transform:translate(70px,-10px)
          }
          20% {
            transform:translate(70px,-10px)
          }
          21% {
            transform:translate(70px,-10px)
          }
          22% {
            transform:translate(70px,-10px)
          }
          23% {
            transform:translate(70px,-10px)
          }
          24% {
            transform:translate(70px,-10px)
          }
          25% {
            transform:translate(70px,-10px)
          }
          26% {
            transform:translate(70px,-10px)
          }
          27% {
            transform:translate(70px,-10px)
          }
          28% {
            transform:translate(70px,-10px)
          }
          29% {
            transform:translate(70px,-10px)
          }
          30% {
            transform:translate(70px,-10px)
          }
          31% {
            transform:translate(70px,-10px)
          }
          32% {
            transform:translate(70px,-10px)
          }
          33% {
            transform:translate(70px,-10px)
          }
          34% {
            transform:translate(70px,-10px)
          }
          35% {
            transform:translate(70px,-10px)
          }
          36% {
            transform:translate(70px,-10px)
          }
          37% {
            transform:translate(70px,-10px)
          }
          38% {
            transform:translate(70px,-10px)
          }
          39% {
            transform:translate(70px,-10px)
          }
          40% {
            transform:translate(70px,-10px)
          }
          41% {
            transform:translate(70px,-10px)
          }
          42% {
            transform:translate(70px,-10px)
          }
          43% {
            transform:translate(70px,-10px)
          }
          44% {
            transform:translate(70px,-10px)
          }
          45% {
            transform:translate(70px,-10px)
          }
          46% {
            transform:translate(70px,-10px)
          }
          47% {
            transform:translate(70px,-10px)
          }
          48% {
            transform:translate(70px,-10px)
          }
          49% {
            transform:translate(70px,-10px)
          }
          50% {
            transform:translate(70px,-10px)
          }
          51% {
            transform:translate(70px,-3.2px)
          }
          52% {
            transform:translate(70px,3.6px)
          }
          53% {
            transform:translate(70px,10.4px)
          }
          54% {
            transform:translate(70px,17.2px)
          }
          55% {
            transform:translate(70px,24px)
          }
          56% {
            transform:translate(70px,30.8px)
          }
          57% {
            transform:translate(70px,37.6px)
          }
          58% {
            transform:translate(70px,44.4px)
          }
          59% {
            transform:translate(70px,51.2px)
          }
          60% {
            transform:translate(70px,58px)
          }
          61% {
            transform:translate(72px,63px)
          }
          62% {
            transform:translate(74px,68px)
          }
          63% {
            transform:translate(76px,73px)
          }
          64% {
            transform:translate(78px,78px)
          }
          65% {
            transform:translate(80px,83px)
          }
          66% {
            transform:translate(80.333px,76.933px)
          }
          67% {
            transform:translate(80.667px,70.867px)
          }
          68% {
            transform:translate(81px,64.8px)
          }
          69% {
            transform:translate(81.333px,58.733px)
          }
          70% {
            transform:translate(81.667px,52.667px)
          }
          71% {
            transform:translate(82px,46.6px)
          }
          72% {
            transform:translate(82.333px,40.533px)
          }
          73% {
            transform:translate(82.667px,34.467px)
          }
          74% {
            transform:translate(83px,28.4px)
          }
          75% {
            transform:translate(83.333px,22.333px)
          }
          76% {
            transform:translate(83.667px,16.267px)
          }
          77% {
            transform:translate(84px,10.2px)
          }
          78% {
            transform:translate(84.333px,4.133px)
          }
          79% {
            transform:translate(84.667px,-1.933px)
          }
          80% {
            transform:translate(85px,-8px)
          }
          81% {
            transform:translate(85px,-8px)
          }
          82% {
            transform:translate(85px,-8px)
          }
          83% {
            transform:translate(85px,-8px)
          }
          84% {
            transform:translate(85px,-8px)
          }
          85% {
            transform:translate(85px,-8px)
          }
          86% {
            transform:translate(85px,-8px)
          }
          87% {
            transform:translate(85px,-8px)
          }
          88% {
            transform:translate(85px,-8px)
          }
          89% {
            transform:translate(85px,-8px)
          }
          90% {
            transform:translate(85px,-8px)
          }
          91% {
            transform:translate(85px,-8px)
          }
          92% {
            transform:translate(85px,-8px)
          }
          93% {
            transform:translate(85px,-8px)
          }
          94% {
            transform:translate(85px,-8px)
          }
          95% {
            transform:translate(85px,-8px)
          }
          96% {
            transform:translate(85px,-8px)
          }
          97% {
            transform:translate(85px,-8px)
          }
          98% {
            transform:translate(85px,-8px)
          }
          99% {
            transform:translate(85px,-8px)
          }
          100% {
            transform:translate(85px,-8px)
          }
        }
        .co0 {
          opacity:1;
          animation:co0 16s linear infinite,form0 16s linear infinite
        }
        @keyframes co0 {
          0% {
            d:path('M43.000,98.000L70.000,-16.000')
          }
          1% {
            d:path('M43.000,98.000L70.000,-16.000')
          }
          2% {
            d:path('M43.000,98.000L70.000,-16.000')
          }
          3% {
            d:path('M43.000,98.000L70.000,-16.000')
          }
          4% {
            d:path('M43.000,98.000L70.000,-16.000')
          }
          5% {
            d:path('M43.000,98.000L70.000,-16.000')
          }
          6% {
            d:path('M43.000,98.000L70.000,-16.000')
          }
          7% {
            d:path('M43.000,98.000L70.000,-16.000')
          }
          8% {
            d:path('M43.000,98.000L70.000,-16.000')
          }
          9% {
            d:path('M43.000,98.000L70.000,-16.000')
          }
          10% {
            d:path('M43.000,98.000L70.000,-16.000')
          }
          11% {
            d:path('M43.000,98.000L70.000,-9.200')
          }
          12% {
            d:path('M43.000,98.000L70.000,-2.400')
          }
          13% {
            d:path('M43.000,98.000L70.000,4.400')
          }
          14% {
            d:path('M43.000,98.000L70.000,11.200')
          }
          15% {
            d:path('M43.000,98.000L70.000,18.000')
          }
          16% {
            d:path('M44.700,97.100L70.000,24.800')
          }
          17% {
            d:path('M46.400,96.200L70.000,31.600')
          }
          18% {
            d:path('M48.100,95.300L70.000,38.400')
          }
          19% {
            d:path('M49.800,94.400L70.000,45.200')
          }
          20% {
            d:path('M51.500,93.500L70.000,52.000')
          }
          21% {
            d:path('M53.200,92.600L68.000,58.200')
          }
          22% {
            d:path('M54.900,91.700L66.000,64.400')
          }
          23% {
            d:path('M56.600,90.800L64.000,70.600')
          }
          24% {
            d:path('M58.300,89.900L62.000,76.800')
          }
          25% {
            d:path('M60.000,89.000L60.000,83.000')
          }
          26% {
            d:path('M59.667,82.933L59.667,76.933')
          }
          27% {
            d:path('M59.333,76.867L59.333,70.867')
          }
          28% {
            d:path('M59.000,70.800L59.000,64.800')
          }
          29% {
            d:path('M58.667,64.733L58.667,58.733')
          }
          30% {
            d:path('M58.333,58.667L58.333,52.667')
          }
          31% {
            d:path('M58.000,52.600L58.000,46.600')
          }
          32% {
            d:path('M57.667,46.533L57.667,40.533')
          }
          33% {
            d:path('M57.333,40.467L57.333,34.467')
          }
          34% {
            d:path('M57.000,34.400L57.000,28.400')
          }
          35% {
            d:path('M56.667,28.333L56.667,22.333')
          }
          36% {
            d:path('M56.333,22.267L56.333,16.267')
          }
          37% {
            d:path('M56.000,16.200L56.000,10.200')
          }
          38% {
            d:path('M55.667,10.133L55.667,4.133')
          }
          39% {
            d:path('M55.333,4.067L55.333,-1.933')
          }
          40% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          41% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          42% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          43% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          44% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          45% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          46% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          47% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          48% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          49% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          50% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          51% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          52% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          53% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          54% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          55% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          56% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          57% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          58% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          59% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          60% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          61% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          62% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          63% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          64% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          65% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          66% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          67% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          68% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          69% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          70% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          71% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          72% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          73% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          74% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          75% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          76% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          77% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          78% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          79% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          80% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          81% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          82% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          83% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          84% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          85% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          86% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          87% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          88% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          89% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          90% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          91% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          92% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          93% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          94% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          95% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          96% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          97% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          98% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          99% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          100% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
        }
        @keyframes form0 {
          0%,24% {
            opacity:0
          }
          25%,100% {
            opacity:1
          }
        }
        .co1 {
          opacity:1;
          animation:co1 16s linear infinite,form1 16s linear infinite
        }
        @keyframes co1 {
          0% {
            d:path('M94.000,97.000L70.000,-10.000')
          }
          1% {
            d:path('M94.000,97.000L70.000,-10.000')
          }
          2% {
            d:path('M94.000,97.000L70.000,-10.000')
          }
          3% {
            d:path('M94.000,97.000L70.000,-10.000')
          }
          4% {
            d:path('M94.000,97.000L70.000,-10.000')
          }
          5% {
            d:path('M94.000,97.000L70.000,-10.000')
          }
          6% {
            d:path('M94.000,97.000L70.000,-10.000')
          }
          7% {
            d:path('M94.000,97.000L70.000,-10.000')
          }
          8% {
            d:path('M94.000,97.000L70.000,-10.000')
          }
          9% {
            d:path('M94.000,97.000L70.000,-10.000')
          }
          10% {
            d:path('M94.000,97.000L70.000,-10.000')
          }
          11% {
            d:path('M94.000,97.000L70.000,-3.200')
          }
          12% {
            d:path('M94.000,97.000L70.000,3.600')
          }
          13% {
            d:path('M94.000,97.000L70.000,10.400')
          }
          14% {
            d:path('M94.000,97.000L70.000,17.200')
          }
          15% {
            d:path('M94.000,97.000L70.000,24.000')
          }
          16% {
            d:path('M92.600,96.200L70.000,30.800')
          }
          17% {
            d:path('M91.200,95.400L70.000,37.600')
          }
          18% {
            d:path('M89.800,94.600L70.000,44.400')
          }
          19% {
            d:path('M88.400,93.800L70.000,51.200')
          }
          20% {
            d:path('M87.000,93.000L70.000,58.000')
          }
          21% {
            d:path('M85.600,92.200L72.000,63.000')
          }
          22% {
            d:path('M84.200,91.400L74.000,68.000')
          }
          23% {
            d:path('M82.800,90.600L76.000,73.000')
          }
          24% {
            d:path('M81.400,89.800L78.000,78.000')
          }
          25% {
            d:path('M80.000,89.000L80.000,83.000')
          }
          26% {
            d:path('M80.333,82.933L80.333,76.933')
          }
          27% {
            d:path('M80.667,76.867L80.667,70.867')
          }
          28% {
            d:path('M81.000,70.800L81.000,64.800')
          }
          29% {
            d:path('M81.333,64.733L81.333,58.733')
          }
          30% {
            d:path('M81.667,58.667L81.667,52.667')
          }
          31% {
            d:path('M82.000,52.600L82.000,46.600')
          }
          32% {
            d:path('M82.333,46.533L82.333,40.533')
          }
          33% {
            d:path('M82.667,40.467L82.667,34.467')
          }
          34% {
            d:path('M83.000,34.400L83.000,28.400')
          }
          35% {
            d:path('M83.333,28.333L83.333,22.333')
          }
          36% {
            d:path('M83.667,22.267L83.667,16.267')
          }
          37% {
            d:path('M84.000,16.200L84.000,10.200')
          }
          38% {
            d:path('M84.333,10.133L84.333,4.133')
          }
          39% {
            d:path('M84.667,4.067L84.667,-1.933')
          }
          40% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          41% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          42% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          43% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          44% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          45% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          46% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          47% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          48% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          49% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          50% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          51% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          52% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          53% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          54% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          55% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          56% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          57% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          58% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          59% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          60% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          61% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          62% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          63% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          64% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          65% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          66% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          67% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          68% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          69% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          70% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          71% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          72% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          73% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          74% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          75% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          76% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          77% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          78% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          79% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          80% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          81% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          82% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          83% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          84% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          85% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          86% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          87% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          88% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          89% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          90% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          91% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          92% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          93% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          94% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          95% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          96% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          97% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          98% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          99% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          100% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
        }
        @keyframes form1 {
          0%,24% {
            opacity:0
          }
          25%,100% {
            opacity:1
          }
        }
        .co2 {
          opacity:1;
          animation:co2 16s linear infinite,form2 16s linear infinite
        }
        @keyframes co2 {
          0% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          1% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          2% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          3% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          4% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          5% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          6% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          7% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          8% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          9% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          10% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          11% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          12% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          13% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          14% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          15% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          16% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          17% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          18% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          19% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          20% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          21% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          22% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          23% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          24% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          25% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          26% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          27% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          28% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          29% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          30% {
            d:path('M50.000,107.000L70.000,-16.000')
          }
          31% {
            d:path('M50.000,107.000L70.000,-9.200')
          }
          32% {
            d:path('M50.000,107.000L70.000,-2.400')
          }
          33% {
            d:path('M50.000,107.000L70.000,4.400')
          }
          34% {
            d:path('M50.000,107.000L70.000,11.200')
          }
          35% {
            d:path('M50.000,107.000L70.000,18.000')
          }
          36% {
            d:path('M51.000,105.200L70.000,24.800')
          }
          37% {
            d:path('M52.000,103.400L70.000,31.600')
          }
          38% {
            d:path('M53.000,101.600L70.000,38.400')
          }
          39% {
            d:path('M54.000,99.800L70.000,45.200')
          }
          40% {
            d:path('M55.000,98.000L70.000,52.000')
          }
          41% {
            d:path('M56.000,96.200L68.000,58.200')
          }
          42% {
            d:path('M57.000,94.400L66.000,64.400')
          }
          43% {
            d:path('M58.000,92.600L64.000,70.600')
          }
          44% {
            d:path('M59.000,90.800L62.000,76.800')
          }
          45% {
            d:path('M60.000,89.000L60.000,83.000')
          }
          46% {
            d:path('M59.667,82.933L59.667,76.933')
          }
          47% {
            d:path('M59.333,76.867L59.333,70.867')
          }
          48% {
            d:path('M59.000,70.800L59.000,64.800')
          }
          49% {
            d:path('M58.667,64.733L58.667,58.733')
          }
          50% {
            d:path('M58.333,58.667L58.333,52.667')
          }
          51% {
            d:path('M58.000,52.600L58.000,46.600')
          }
          52% {
            d:path('M57.667,46.533L57.667,40.533')
          }
          53% {
            d:path('M57.333,40.467L57.333,34.467')
          }
          54% {
            d:path('M57.000,34.400L57.000,28.400')
          }
          55% {
            d:path('M56.667,28.333L56.667,22.333')
          }
          56% {
            d:path('M56.333,22.267L56.333,16.267')
          }
          57% {
            d:path('M56.000,16.200L56.000,10.200')
          }
          58% {
            d:path('M55.667,10.133L55.667,4.133')
          }
          59% {
            d:path('M55.333,4.067L55.333,-1.933')
          }
          60% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          61% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          62% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          63% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          64% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          65% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          66% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          67% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          68% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          69% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          70% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          71% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          72% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          73% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          74% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          75% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          76% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          77% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          78% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          79% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          80% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          81% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          82% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          83% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          84% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          85% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          86% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          87% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          88% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          89% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          90% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          91% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          92% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          93% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          94% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          95% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          96% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          97% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          98% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          99% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          100% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
        }
        @keyframes form2 {
          0%,44% {
            opacity:0
          }
          45%,100% {
            opacity:1
          }
        }
        .co3 {
          opacity:1;
          animation:co3 16s linear infinite,form3 16s linear infinite
        }
        @keyframes co3 {
          0% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          1% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          2% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          3% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          4% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          5% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          6% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          7% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          8% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          9% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          10% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          11% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          12% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          13% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          14% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          15% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          16% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          17% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          18% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          19% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          20% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          21% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          22% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          23% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          24% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          25% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          26% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          27% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          28% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          29% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          30% {
            d:path('M90.000,108.000L70.000,-10.000')
          }
          31% {
            d:path('M90.000,108.000L70.000,-3.200')
          }
          32% {
            d:path('M90.000,108.000L70.000,3.600')
          }
          33% {
            d:path('M90.000,108.000L70.000,10.400')
          }
          34% {
            d:path('M90.000,108.000L70.000,17.200')
          }
          35% {
            d:path('M90.000,108.000L70.000,24.000')
          }
          36% {
            d:path('M89.000,106.100L70.000,30.800')
          }
          37% {
            d:path('M88.000,104.200L70.000,37.600')
          }
          38% {
            d:path('M87.000,102.300L70.000,44.400')
          }
          39% {
            d:path('M86.000,100.400L70.000,51.200')
          }
          40% {
            d:path('M85.000,98.500L70.000,58.000')
          }
          41% {
            d:path('M84.000,96.600L72.000,63.000')
          }
          42% {
            d:path('M83.000,94.700L74.000,68.000')
          }
          43% {
            d:path('M82.000,92.800L76.000,73.000')
          }
          44% {
            d:path('M81.000,90.900L78.000,78.000')
          }
          45% {
            d:path('M80.000,89.000L80.000,83.000')
          }
          46% {
            d:path('M80.333,82.933L80.333,76.933')
          }
          47% {
            d:path('M80.667,76.867L80.667,70.867')
          }
          48% {
            d:path('M81.000,70.800L81.000,64.800')
          }
          49% {
            d:path('M81.333,64.733L81.333,58.733')
          }
          50% {
            d:path('M81.667,58.667L81.667,52.667')
          }
          51% {
            d:path('M82.000,52.600L82.000,46.600')
          }
          52% {
            d:path('M82.333,46.533L82.333,40.533')
          }
          53% {
            d:path('M82.667,40.467L82.667,34.467')
          }
          54% {
            d:path('M83.000,34.400L83.000,28.400')
          }
          55% {
            d:path('M83.333,28.333L83.333,22.333')
          }
          56% {
            d:path('M83.667,22.267L83.667,16.267')
          }
          57% {
            d:path('M84.000,16.200L84.000,10.200')
          }
          58% {
            d:path('M84.333,10.133L84.333,4.133')
          }
          59% {
            d:path('M84.667,4.067L84.667,-1.933')
          }
          60% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          61% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          62% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          63% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          64% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          65% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          66% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          67% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          68% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          69% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          70% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          71% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          72% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          73% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          74% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          75% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          76% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          77% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          78% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          79% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          80% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          81% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          82% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          83% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          84% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          85% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          86% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          87% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          88% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          89% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          90% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          91% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          92% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          93% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          94% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          95% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          96% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          97% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          98% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          99% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          100% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
        }
        @keyframes form3 {
          0%,44% {
            opacity:0
          }
          45%,100% {
            opacity:1
          }
        }
        .co4 {
          opacity:0;
          animation:co4 16s linear infinite,form4 16s linear infinite
        }
        @keyframes co4 {
          0% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          1% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          2% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          3% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          4% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          5% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          6% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          7% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          8% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          9% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          10% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          11% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          12% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          13% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          14% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          15% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          16% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          17% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          18% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          19% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          20% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          21% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          22% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          23% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          24% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          25% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          26% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          27% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          28% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          29% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          30% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          31% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          32% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          33% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          34% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          35% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          36% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          37% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          38% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          39% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          40% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          41% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          42% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          43% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          44% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          45% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          46% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          47% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          48% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          49% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          50% {
            d:path('M60.000,114.000L70.000,-16.000')
          }
          51% {
            d:path('M60.000,114.000L70.000,-9.200')
          }
          52% {
            d:path('M60.000,114.000L70.000,-2.400')
          }
          53% {
            d:path('M60.000,114.000L70.000,4.400')
          }
          54% {
            d:path('M60.000,114.000L70.000,11.200')
          }
          55% {
            d:path('M60.000,114.000L70.000,18.000')
          }
          56% {
            d:path('M60.000,111.500L70.000,24.800')
          }
          57% {
            d:path('M60.000,109.000L70.000,31.600')
          }
          58% {
            d:path('M60.000,106.500L70.000,38.400')
          }
          59% {
            d:path('M60.000,104.000L70.000,45.200')
          }
          60% {
            d:path('M60.000,101.500L70.000,52.000')
          }
          61% {
            d:path('M60.000,99.000L68.000,58.200')
          }
          62% {
            d:path('M60.000,96.500L66.000,64.400')
          }
          63% {
            d:path('M60.000,94.000L64.000,70.600')
          }
          64% {
            d:path('M60.000,91.500L62.000,76.800')
          }
          65% {
            d:path('M60.000,89.000L60.000,83.000')
          }
          66% {
            d:path('M59.667,82.933L59.667,76.933')
          }
          67% {
            d:path('M59.333,76.867L59.333,70.867')
          }
          68% {
            d:path('M59.000,70.800L59.000,64.800')
          }
          69% {
            d:path('M58.667,64.733L58.667,58.733')
          }
          70% {
            d:path('M58.333,58.667L58.333,52.667')
          }
          71% {
            d:path('M58.000,52.600L58.000,46.600')
          }
          72% {
            d:path('M57.667,46.533L57.667,40.533')
          }
          73% {
            d:path('M57.333,40.467L57.333,34.467')
          }
          74% {
            d:path('M57.000,34.400L57.000,28.400')
          }
          75% {
            d:path('M56.667,28.333L56.667,22.333')
          }
          76% {
            d:path('M56.333,22.267L56.333,16.267')
          }
          77% {
            d:path('M56.000,16.200L56.000,10.200')
          }
          78% {
            d:path('M55.667,10.133L55.667,4.133')
          }
          79% {
            d:path('M55.333,4.067L55.333,-1.933')
          }
          80% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          81% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          82% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          83% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          84% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          85% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          86% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          87% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          88% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          89% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          90% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          91% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          92% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          93% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          94% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          95% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          96% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          97% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          98% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          99% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
          100% {
            d:path('M55.000,-2.000L55.000,-8.000')
          }
        }
        @keyframes form4 {
          0%,64% {
            opacity:0
          }
          65%,100% {
            opacity:1
          }
        }
        .co5 {
          opacity:0;
          animation:co5 16s linear infinite,form5 16s linear infinite
        }
        @keyframes co5 {
          0% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          1% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          2% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          3% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          4% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          5% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          6% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          7% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          8% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          9% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          10% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          11% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          12% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          13% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          14% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          15% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          16% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          17% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          18% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          19% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          20% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          21% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          22% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          23% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          24% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          25% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          26% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          27% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          28% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          29% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          30% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          31% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          32% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          33% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          34% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          35% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          36% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          37% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          38% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          39% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          40% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          41% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          42% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          43% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          44% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          45% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          46% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          47% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          48% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          49% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          50% {
            d:path('M80.000,114.000L70.000,-10.000')
          }
          51% {
            d:path('M80.000,114.000L70.000,-3.200')
          }
          52% {
            d:path('M80.000,114.000L70.000,3.600')
          }
          53% {
            d:path('M80.000,114.000L70.000,10.400')
          }
          54% {
            d:path('M80.000,114.000L70.000,17.200')
          }
          55% {
            d:path('M80.000,114.000L70.000,24.000')
          }
          56% {
            d:path('M80.000,111.500L70.000,30.800')
          }
          57% {
            d:path('M80.000,109.000L70.000,37.600')
          }
          58% {
            d:path('M80.000,106.500L70.000,44.400')
          }
          59% {
            d:path('M80.000,104.000L70.000,51.200')
          }
          60% {
            d:path('M80.000,101.500L70.000,58.000')
          }
          61% {
            d:path('M80.000,99.000L72.000,63.000')
          }
          62% {
            d:path('M80.000,96.500L74.000,68.000')
          }
          63% {
            d:path('M80.000,94.000L76.000,73.000')
          }
          64% {
            d:path('M80.000,91.500L78.000,78.000')
          }
          65% {
            d:path('M80.000,89.000L80.000,83.000')
          }
          66% {
            d:path('M80.333,82.933L80.333,76.933')
          }
          67% {
            d:path('M80.667,76.867L80.667,70.867')
          }
          68% {
            d:path('M81.000,70.800L81.000,64.800')
          }
          69% {
            d:path('M81.333,64.733L81.333,58.733')
          }
          70% {
            d:path('M81.667,58.667L81.667,52.667')
          }
          71% {
            d:path('M82.000,52.600L82.000,46.600')
          }
          72% {
            d:path('M82.333,46.533L82.333,40.533')
          }
          73% {
            d:path('M82.667,40.467L82.667,34.467')
          }
          74% {
            d:path('M83.000,34.400L83.000,28.400')
          }
          75% {
            d:path('M83.333,28.333L83.333,22.333')
          }
          76% {
            d:path('M83.667,22.267L83.667,16.267')
          }
          77% {
            d:path('M84.000,16.200L84.000,10.200')
          }
          78% {
            d:path('M84.333,10.133L84.333,4.133')
          }
          79% {
            d:path('M84.667,4.067L84.667,-1.933')
          }
          80% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          81% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          82% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          83% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          84% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          85% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          86% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          87% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          88% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          89% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          90% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          91% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          92% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          93% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          94% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          95% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          96% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          97% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          98% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          99% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
          100% {
            d:path('M85.000,-2.000L85.000,-8.000')
          }
        }
        @keyframes form5 {
          0%,64% {
            opacity:0
          }
          65%,100% {
            opacity:1
          }
        }
        .o20 {
          opacity:0;
          animation:o20 16s linear infinite,split0 16s linear infinite
        }
        @keyframes o20 {
          0% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          1% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          2% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          3% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          4% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          5% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          6% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          7% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          8% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          9% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          10% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          11% {
            d:path('M70.000,-9.200L70.000,-3.200')
          }
          12% {
            d:path('M70.000,-2.400L70.000,3.600')
          }
          13% {
            d:path('M70.000,4.400L70.000,10.400')
          }
          14% {
            d:path('M70.000,11.200L70.000,17.200')
          }
          15% {
            d:path('M70.000,18.000L70.000,24.000')
          }
          16% {
            d:path('M70.000,24.800L70.000,30.800')
          }
          17% {
            d:path('M70.000,31.600L70.000,37.600')
          }
          18% {
            d:path('M70.000,38.400L70.000,44.400')
          }
          19% {
            d:path('M70.000,45.200L70.000,51.200')
          }
          20% {
            d:path('M70.000,52.000L70.000,58.000')
          }
          21% {
            d:path('M68.000,58.200L72.000,63.000')
          }
          22% {
            d:path('M66.000,64.400L74.000,68.000')
          }
          23% {
            d:path('M64.000,70.600L76.000,73.000')
          }
          24% {
            d:path('M62.000,76.800L78.000,78.000')
          }
          25% {
            d:path('M60.000,83.000L80.000,83.000')
          }
          26% {
            d:path('M59.667,76.933L80.333,76.933')
          }
          27% {
            d:path('M59.333,70.867L80.667,70.867')
          }
          28% {
            d:path('M59.000,64.800L81.000,64.800')
          }
          29% {
            d:path('M58.667,58.733L81.333,58.733')
          }
          30% {
            d:path('M58.333,52.667L81.667,52.667')
          }
          31% {
            d:path('M58.000,46.600L82.000,46.600')
          }
          32% {
            d:path('M57.667,40.533L82.333,40.533')
          }
          33% {
            d:path('M57.333,34.467L82.667,34.467')
          }
          34% {
            d:path('M57.000,28.400L83.000,28.400')
          }
          35% {
            d:path('M56.667,22.333L83.333,22.333')
          }
          36% {
            d:path('M56.333,16.267L83.667,16.267')
          }
          37% {
            d:path('M56.000,10.200L84.000,10.200')
          }
          38% {
            d:path('M55.667,4.133L84.333,4.133')
          }
          39% {
            d:path('M55.333,-1.933L84.667,-1.933')
          }
          40% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          41% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          42% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          43% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          44% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          45% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          46% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          47% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          48% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          49% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          50% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          51% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          52% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          53% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          54% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          55% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          56% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          57% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          58% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          59% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          60% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          61% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          62% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          63% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          64% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          65% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          66% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          67% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          68% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          69% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          70% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          71% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          72% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          73% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          74% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          75% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          76% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          77% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          78% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          79% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          80% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          81% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          82% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          83% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          84% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          85% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          86% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          87% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          88% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          89% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          90% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          91% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          92% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          93% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          94% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          95% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          96% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          97% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          98% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          99% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          100% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
        }
        @keyframes split0 {
          0%,20% {
            opacity:1
          }
          25%,100% {
            opacity:0
          }
        }
        .o21 {
          opacity:0;
          animation:o21 16s linear infinite,split1 16s linear infinite
        }
        @keyframes o21 {
          0% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          1% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          2% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          3% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          4% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          5% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          6% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          7% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          8% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          9% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          10% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          11% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          12% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          13% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          14% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          15% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          16% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          17% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          18% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          19% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          20% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          21% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          22% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          23% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          24% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          25% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          26% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          27% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          28% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          29% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          30% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          31% {
            d:path('M70.000,-9.200L70.000,-3.200')
          }
          32% {
            d:path('M70.000,-2.400L70.000,3.600')
          }
          33% {
            d:path('M70.000,4.400L70.000,10.400')
          }
          34% {
            d:path('M70.000,11.200L70.000,17.200')
          }
          35% {
            d:path('M70.000,18.000L70.000,24.000')
          }
          36% {
            d:path('M70.000,24.800L70.000,30.800')
          }
          37% {
            d:path('M70.000,31.600L70.000,37.600')
          }
          38% {
            d:path('M70.000,38.400L70.000,44.400')
          }
          39% {
            d:path('M70.000,45.200L70.000,51.200')
          }
          40% {
            d:path('M70.000,52.000L70.000,58.000')
          }
          41% {
            d:path('M68.000,58.200L72.000,63.000')
          }
          42% {
            d:path('M66.000,64.400L74.000,68.000')
          }
          43% {
            d:path('M64.000,70.600L76.000,73.000')
          }
          44% {
            d:path('M62.000,76.800L78.000,78.000')
          }
          45% {
            d:path('M60.000,83.000L80.000,83.000')
          }
          46% {
            d:path('M59.667,76.933L80.333,76.933')
          }
          47% {
            d:path('M59.333,70.867L80.667,70.867')
          }
          48% {
            d:path('M59.000,64.800L81.000,64.800')
          }
          49% {
            d:path('M58.667,58.733L81.333,58.733')
          }
          50% {
            d:path('M58.333,52.667L81.667,52.667')
          }
          51% {
            d:path('M58.000,46.600L82.000,46.600')
          }
          52% {
            d:path('M57.667,40.533L82.333,40.533')
          }
          53% {
            d:path('M57.333,34.467L82.667,34.467')
          }
          54% {
            d:path('M57.000,28.400L83.000,28.400')
          }
          55% {
            d:path('M56.667,22.333L83.333,22.333')
          }
          56% {
            d:path('M56.333,16.267L83.667,16.267')
          }
          57% {
            d:path('M56.000,10.200L84.000,10.200')
          }
          58% {
            d:path('M55.667,4.133L84.333,4.133')
          }
          59% {
            d:path('M55.333,-1.933L84.667,-1.933')
          }
          60% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          61% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          62% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          63% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          64% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          65% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          66% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          67% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          68% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          69% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          70% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          71% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          72% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          73% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          74% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          75% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          76% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          77% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          78% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          79% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          80% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          81% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          82% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          83% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          84% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          85% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          86% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          87% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          88% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          89% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          90% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          91% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          92% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          93% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          94% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          95% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          96% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          97% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          98% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          99% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          100% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
        }
        @keyframes split1 {
          0%,40% {
            opacity:1
          }
          45%,100% {
            opacity:0
          }
        }
        .o22 {
          opacity:0;
          animation:o22 16s linear infinite,split2 16s linear infinite
        }
        @keyframes o22 {
          0% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          1% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          2% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          3% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          4% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          5% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          6% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          7% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          8% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          9% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          10% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          11% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          12% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          13% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          14% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          15% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          16% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          17% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          18% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          19% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          20% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          21% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          22% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          23% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          24% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          25% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          26% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          27% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          28% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          29% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          30% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          31% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          32% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          33% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          34% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          35% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          36% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          37% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          38% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          39% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          40% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          41% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          42% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          43% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          44% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          45% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          46% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          47% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          48% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          49% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          50% {
            d:path('M70.000,-16.000L70.000,-10.000')
          }
          51% {
            d:path('M70.000,-9.200L70.000,-3.200')
          }
          52% {
            d:path('M70.000,-2.400L70.000,3.600')
          }
          53% {
            d:path('M70.000,4.400L70.000,10.400')
          }
          54% {
            d:path('M70.000,11.200L70.000,17.200')
          }
          55% {
            d:path('M70.000,18.000L70.000,24.000')
          }
          56% {
            d:path('M70.000,24.800L70.000,30.800')
          }
          57% {
            d:path('M70.000,31.600L70.000,37.600')
          }
          58% {
            d:path('M70.000,38.400L70.000,44.400')
          }
          59% {
            d:path('M70.000,45.200L70.000,51.200')
          }
          60% {
            d:path('M70.000,52.000L70.000,58.000')
          }
          61% {
            d:path('M68.000,58.200L72.000,63.000')
          }
          62% {
            d:path('M66.000,64.400L74.000,68.000')
          }
          63% {
            d:path('M64.000,70.600L76.000,73.000')
          }
          64% {
            d:path('M62.000,76.800L78.000,78.000')
          }
          65% {
            d:path('M60.000,83.000L80.000,83.000')
          }
          66% {
            d:path('M59.667,76.933L80.333,76.933')
          }
          67% {
            d:path('M59.333,70.867L80.667,70.867')
          }
          68% {
            d:path('M59.000,64.800L81.000,64.800')
          }
          69% {
            d:path('M58.667,58.733L81.333,58.733')
          }
          70% {
            d:path('M58.333,52.667L81.667,52.667')
          }
          71% {
            d:path('M58.000,46.600L82.000,46.600')
          }
          72% {
            d:path('M57.667,40.533L82.333,40.533')
          }
          73% {
            d:path('M57.333,34.467L82.667,34.467')
          }
          74% {
            d:path('M57.000,28.400L83.000,28.400')
          }
          75% {
            d:path('M56.667,22.333L83.333,22.333')
          }
          76% {
            d:path('M56.333,16.267L83.667,16.267')
          }
          77% {
            d:path('M56.000,10.200L84.000,10.200')
          }
          78% {
            d:path('M55.667,4.133L84.333,4.133')
          }
          79% {
            d:path('M55.333,-1.933L84.667,-1.933')
          }
          80% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          81% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          82% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          83% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          84% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          85% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          86% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          87% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          88% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          89% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          90% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          91% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          92% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          93% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          94% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          95% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          96% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          97% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          98% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          99% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
          100% {
            d:path('M55.000,-8.000L85.000,-8.000')
          }
        }
        @keyframes split2 {
          0%,60% {
            opacity:1
          }
          65%,100% {
            opacity:0
          }
        }
        .carbon {
          fill:#463b30;
          stroke:#e9b875;
          stroke-width:.7
        }
        .oxygen {
          fill:#77c9ef
        }
        .bond {
          fill:none;
          stroke:#b7d0bd;
          stroke-width:1.1
        }
        .slag {
          fill:#756445;
          animation:slag 16s linear infinite
        }
        .refractory {
          fill:none;
          stroke:#66806b;
          stroke-width:4;
          stroke-linejoin:round
        }
        .lance {
          fill:none;
          stroke:#a7bdad;
          stroke-width:1.5
        }
        .jet {
          fill:#77c9ef;
          fill-opacity:.12;
          animation:jet 16s linear infinite
        }
        .cycle {
          animation:cycle 16s linear infinite
        }
        @keyframes slag {
          0%,10%,85%,100% {
            d:path('M20,78H120V87H20Z')
          }
          30%,70% {
            d:path('M20,75H120V87H20Z')
          }
        }
        @keyframes jet {
          0%,9%,80%,100% {
            opacity:0
          }
          15%,75% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Basic Oxygen Steelmaking">
        <defs>
          <clipPath id="vessel">
            <path d="M45,37L28,64Q23,109 50,121Q70,132 91,120Q117,107 112,64L95,37Z"/>
          </clipPath>
        </defs>
        <path fill="#1c3027" d="M45,37L28,64Q23,109 50,121Q70,132 91,120Q117,107 112,64L95,37Z"/>
        <g clip-path="url(#vessel)">
          <rect x="20" y="87" width="100" height="45" fill="#af7145"/>
          <path class="slag" d="M20,78H120V87H20Z"/>
        </g>
        <path class="refractory" d="M45,37L28,64Q23,109 50,121Q70,132 91,120Q117,107 112,64L95,37"/>
        <path class="lance" d="M67,15V58M73,15V58"/>
        <path class="jet" d="M70,59L58,83H82Z"/>
        <g class="cycle">
          <path class="bond co0" d="M55.000,-2.000L55.000,-8.000"/>
          <path class="bond co1" d="M85.000,-2.000L85.000,-8.000"/>
          <path class="bond co2" d="M56.667,28.333L56.667,22.333"/>
          <path class="bond co3" d="M83.333,28.333L83.333,22.333"/>
          <path class="bond co4" d="M60.000,114.000L70.000,18.000"/>
          <path class="bond co5" d="M80.000,114.000L70.000,24.000"/>
          <path class="bond o20" d="M0,0H0"/>
          <path class="bond o21" d="M0,0H0"/>
          <path class="bond o22" d="M0,0H0"/>
          <circle class="carbon atom0" r="2.3"/>
          <circle class="carbon atom1" r="2.3"/>
          <circle class="carbon atom2" r="2.3"/>
          <circle class="carbon atom3" r="2.3"/>
          <circle class="carbon atom4" r="2.3"/>
          <circle class="carbon atom5" r="2.3"/>
          <circle class="carbon atom6" r="2.3"/>
          <circle class="carbon atom7" r="2.3"/>
          <circle class="oxygen atom8" r="2.2"/>
          <circle class="oxygen atom9" r="2.2"/>
          <circle class="oxygen atom10" r="2.2"/>
          <circle class="oxygen atom11" r="2.2"/>
          <circle class="oxygen atom12" r="2.2"/>
          <circle class="oxygen atom13" r="2.2"/>
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

if (!customElements.get("concept-basic-oxygen-steelmaking")) {
  customElements.define("concept-basic-oxygen-steelmaking", ConceptBasicOxygenSteelmaking);
}
