// Catalytic Cracking. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptCatalyticCracking extends HTMLElement {
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
        .carbon0 {
          transform:translate(18px,38px);
          animation:carbon0 14s linear infinite
        }
        @keyframes carbon0 {
          0% {
            transform:translate(25px,51px)
          }
          1% {
            transform:translate(25px,51px)
          }
          2% {
            transform:translate(25px,51px)
          }
          3% {
            transform:translate(25px,51px)
          }
          4% {
            transform:translate(25px,51px)
          }
          5% {
            transform:translate(25px,51px)
          }
          6% {
            transform:translate(25px,51px)
          }
          7% {
            transform:translate(25px,51px)
          }
          8% {
            transform:translate(25px,51px)
          }
          9% {
            transform:translate(25px,51px)
          }
          10% {
            transform:translate(25px,51px)
          }
          11% {
            transform:translate(25px,51.6px)
          }
          12% {
            transform:translate(25px,52.2px)
          }
          13% {
            transform:translate(25px,52.8px)
          }
          14% {
            transform:translate(25px,53.4px)
          }
          15% {
            transform:translate(25px,54px)
          }
          16% {
            transform:translate(25px,54.6px)
          }
          17% {
            transform:translate(25px,55.2px)
          }
          18% {
            transform:translate(25px,55.8px)
          }
          19% {
            transform:translate(25px,56.4px)
          }
          20% {
            transform:translate(25px,57px)
          }
          21% {
            transform:translate(25px,57.6px)
          }
          22% {
            transform:translate(25px,58.2px)
          }
          23% {
            transform:translate(25px,58.8px)
          }
          24% {
            transform:translate(25px,59.4px)
          }
          25% {
            transform:translate(25px,60px)
          }
          26% {
            transform:translate(25px,60px)
          }
          27% {
            transform:translate(25px,60px)
          }
          28% {
            transform:translate(25px,60px)
          }
          29% {
            transform:translate(25px,60px)
          }
          30% {
            transform:translate(25px,60px)
          }
          31% {
            transform:translate(25px,60px)
          }
          32% {
            transform:translate(25px,60px)
          }
          33% {
            transform:translate(25px,60px)
          }
          34% {
            transform:translate(25px,60px)
          }
          35% {
            transform:translate(25px,60px)
          }
          36% {
            transform:translate(25px,60px)
          }
          37% {
            transform:translate(25px,60px)
          }
          38% {
            transform:translate(25px,60px)
          }
          39% {
            transform:translate(25px,60px)
          }
          40% {
            transform:translate(25px,60px)
          }
          41% {
            transform:translate(25px,60px)
          }
          42% {
            transform:translate(25px,60px)
          }
          43% {
            transform:translate(25px,60px)
          }
          44% {
            transform:translate(25px,60px)
          }
          45% {
            transform:translate(25px,60px)
          }
          46% {
            transform:translate(25px,60px)
          }
          47% {
            transform:translate(25px,60px)
          }
          48% {
            transform:translate(25px,60px)
          }
          49% {
            transform:translate(25px,60px)
          }
          50% {
            transform:translate(25px,60px)
          }
          51% {
            transform:translate(25px,60px)
          }
          52% {
            transform:translate(25px,60px)
          }
          53% {
            transform:translate(25px,60px)
          }
          54% {
            transform:translate(25px,60px)
          }
          55% {
            transform:translate(25px,60px)
          }
          56% {
            transform:translate(25px,60px)
          }
          57% {
            transform:translate(25px,60px)
          }
          58% {
            transform:translate(25px,60px)
          }
          59% {
            transform:translate(25px,60px)
          }
          60% {
            transform:translate(25px,60px)
          }
          61% {
            transform:translate(25px,60px)
          }
          62% {
            transform:translate(25px,60px)
          }
          63% {
            transform:translate(25px,60px)
          }
          64% {
            transform:translate(25px,60px)
          }
          65% {
            transform:translate(25px,60px)
          }
          66% {
            transform:translate(24.533px,58.533px)
          }
          67% {
            transform:translate(24.067px,57.067px)
          }
          68% {
            transform:translate(23.6px,55.6px)
          }
          69% {
            transform:translate(23.133px,54.133px)
          }
          70% {
            transform:translate(22.667px,52.667px)
          }
          71% {
            transform:translate(22.2px,51.2px)
          }
          72% {
            transform:translate(21.733px,49.733px)
          }
          73% {
            transform:translate(21.267px,48.267px)
          }
          74% {
            transform:translate(20.8px,46.8px)
          }
          75% {
            transform:translate(20.333px,45.333px)
          }
          76% {
            transform:translate(19.867px,43.867px)
          }
          77% {
            transform:translate(19.4px,42.4px)
          }
          78% {
            transform:translate(18.933px,40.933px)
          }
          79% {
            transform:translate(18.467px,39.467px)
          }
          80% {
            transform:translate(18px,38px)
          }
          81% {
            transform:translate(18px,38px)
          }
          82% {
            transform:translate(18px,38px)
          }
          83% {
            transform:translate(18px,38px)
          }
          84% {
            transform:translate(18px,38px)
          }
          85% {
            transform:translate(18px,38px)
          }
          86% {
            transform:translate(18px,38px)
          }
          87% {
            transform:translate(18px,38px)
          }
          88% {
            transform:translate(18px,38px)
          }
          89% {
            transform:translate(18px,38px)
          }
          90% {
            transform:translate(18px,38px)
          }
          91% {
            transform:translate(18px,38px)
          }
          92% {
            transform:translate(18px,38px)
          }
          93% {
            transform:translate(18px,38px)
          }
          94% {
            transform:translate(18px,38px)
          }
          95% {
            transform:translate(18px,38px)
          }
          96% {
            transform:translate(18px,38px)
          }
          97% {
            transform:translate(18px,38px)
          }
          98% {
            transform:translate(18px,38px)
          }
          99% {
            transform:translate(18px,38px)
          }
          100% {
            transform:translate(18px,38px)
          }
        }
        .carbon1 {
          transform:translate(30px,48px);
          animation:carbon1 14s linear infinite
        }
        @keyframes carbon1 {
          0% {
            transform:translate(37px,61px)
          }
          1% {
            transform:translate(37px,61px)
          }
          2% {
            transform:translate(37px,61px)
          }
          3% {
            transform:translate(37px,61px)
          }
          4% {
            transform:translate(37px,61px)
          }
          5% {
            transform:translate(37px,61px)
          }
          6% {
            transform:translate(37px,61px)
          }
          7% {
            transform:translate(37px,61px)
          }
          8% {
            transform:translate(37px,61px)
          }
          9% {
            transform:translate(37px,61px)
          }
          10% {
            transform:translate(37px,61px)
          }
          11% {
            transform:translate(37px,61.6px)
          }
          12% {
            transform:translate(37px,62.2px)
          }
          13% {
            transform:translate(37px,62.8px)
          }
          14% {
            transform:translate(37px,63.4px)
          }
          15% {
            transform:translate(37px,64px)
          }
          16% {
            transform:translate(37px,64.6px)
          }
          17% {
            transform:translate(37px,65.2px)
          }
          18% {
            transform:translate(37px,65.8px)
          }
          19% {
            transform:translate(37px,66.4px)
          }
          20% {
            transform:translate(37px,67px)
          }
          21% {
            transform:translate(37px,67.6px)
          }
          22% {
            transform:translate(37px,68.2px)
          }
          23% {
            transform:translate(37px,68.8px)
          }
          24% {
            transform:translate(37px,69.4px)
          }
          25% {
            transform:translate(37px,70px)
          }
          26% {
            transform:translate(37px,70px)
          }
          27% {
            transform:translate(37px,70px)
          }
          28% {
            transform:translate(37px,70px)
          }
          29% {
            transform:translate(37px,70px)
          }
          30% {
            transform:translate(37px,70px)
          }
          31% {
            transform:translate(37px,70px)
          }
          32% {
            transform:translate(37px,70px)
          }
          33% {
            transform:translate(37px,70px)
          }
          34% {
            transform:translate(37px,70px)
          }
          35% {
            transform:translate(37px,70px)
          }
          36% {
            transform:translate(37px,70px)
          }
          37% {
            transform:translate(37px,70px)
          }
          38% {
            transform:translate(37px,70px)
          }
          39% {
            transform:translate(37px,70px)
          }
          40% {
            transform:translate(37px,70px)
          }
          41% {
            transform:translate(37px,70px)
          }
          42% {
            transform:translate(37px,70px)
          }
          43% {
            transform:translate(37px,70px)
          }
          44% {
            transform:translate(37px,70px)
          }
          45% {
            transform:translate(37px,70px)
          }
          46% {
            transform:translate(37px,70px)
          }
          47% {
            transform:translate(37px,70px)
          }
          48% {
            transform:translate(37px,70px)
          }
          49% {
            transform:translate(37px,70px)
          }
          50% {
            transform:translate(37px,70px)
          }
          51% {
            transform:translate(37px,70px)
          }
          52% {
            transform:translate(37px,70px)
          }
          53% {
            transform:translate(37px,70px)
          }
          54% {
            transform:translate(37px,70px)
          }
          55% {
            transform:translate(37px,70px)
          }
          56% {
            transform:translate(37px,70px)
          }
          57% {
            transform:translate(37px,70px)
          }
          58% {
            transform:translate(37px,70px)
          }
          59% {
            transform:translate(37px,70px)
          }
          60% {
            transform:translate(37px,70px)
          }
          61% {
            transform:translate(37px,70px)
          }
          62% {
            transform:translate(37px,70px)
          }
          63% {
            transform:translate(37px,70px)
          }
          64% {
            transform:translate(37px,70px)
          }
          65% {
            transform:translate(37px,70px)
          }
          66% {
            transform:translate(36.533px,68.533px)
          }
          67% {
            transform:translate(36.067px,67.067px)
          }
          68% {
            transform:translate(35.6px,65.6px)
          }
          69% {
            transform:translate(35.133px,64.133px)
          }
          70% {
            transform:translate(34.667px,62.667px)
          }
          71% {
            transform:translate(34.2px,61.2px)
          }
          72% {
            transform:translate(33.733px,59.733px)
          }
          73% {
            transform:translate(33.267px,58.267px)
          }
          74% {
            transform:translate(32.8px,56.8px)
          }
          75% {
            transform:translate(32.333px,55.333px)
          }
          76% {
            transform:translate(31.867px,53.867px)
          }
          77% {
            transform:translate(31.4px,52.4px)
          }
          78% {
            transform:translate(30.933px,50.933px)
          }
          79% {
            transform:translate(30.467px,49.467px)
          }
          80% {
            transform:translate(30px,48px)
          }
          81% {
            transform:translate(30px,48px)
          }
          82% {
            transform:translate(30px,48px)
          }
          83% {
            transform:translate(30px,48px)
          }
          84% {
            transform:translate(30px,48px)
          }
          85% {
            transform:translate(30px,48px)
          }
          86% {
            transform:translate(30px,48px)
          }
          87% {
            transform:translate(30px,48px)
          }
          88% {
            transform:translate(30px,48px)
          }
          89% {
            transform:translate(30px,48px)
          }
          90% {
            transform:translate(30px,48px)
          }
          91% {
            transform:translate(30px,48px)
          }
          92% {
            transform:translate(30px,48px)
          }
          93% {
            transform:translate(30px,48px)
          }
          94% {
            transform:translate(30px,48px)
          }
          95% {
            transform:translate(30px,48px)
          }
          96% {
            transform:translate(30px,48px)
          }
          97% {
            transform:translate(30px,48px)
          }
          98% {
            transform:translate(30px,48px)
          }
          99% {
            transform:translate(30px,48px)
          }
          100% {
            transform:translate(30px,48px)
          }
        }
        .carbon2 {
          transform:translate(42px,38px);
          animation:carbon2 14s linear infinite
        }
        @keyframes carbon2 {
          0% {
            transform:translate(49px,51px)
          }
          1% {
            transform:translate(49px,51px)
          }
          2% {
            transform:translate(49px,51px)
          }
          3% {
            transform:translate(49px,51px)
          }
          4% {
            transform:translate(49px,51px)
          }
          5% {
            transform:translate(49px,51px)
          }
          6% {
            transform:translate(49px,51px)
          }
          7% {
            transform:translate(49px,51px)
          }
          8% {
            transform:translate(49px,51px)
          }
          9% {
            transform:translate(49px,51px)
          }
          10% {
            transform:translate(49px,51px)
          }
          11% {
            transform:translate(49px,51.6px)
          }
          12% {
            transform:translate(49px,52.2px)
          }
          13% {
            transform:translate(49px,52.8px)
          }
          14% {
            transform:translate(49px,53.4px)
          }
          15% {
            transform:translate(49px,54px)
          }
          16% {
            transform:translate(49px,54.6px)
          }
          17% {
            transform:translate(49px,55.2px)
          }
          18% {
            transform:translate(49px,55.8px)
          }
          19% {
            transform:translate(49px,56.4px)
          }
          20% {
            transform:translate(49px,57px)
          }
          21% {
            transform:translate(49px,57.6px)
          }
          22% {
            transform:translate(49px,58.2px)
          }
          23% {
            transform:translate(49px,58.8px)
          }
          24% {
            transform:translate(49px,59.4px)
          }
          25% {
            transform:translate(49px,60px)
          }
          26% {
            transform:translate(49px,60px)
          }
          27% {
            transform:translate(49px,60px)
          }
          28% {
            transform:translate(49px,60px)
          }
          29% {
            transform:translate(49px,60px)
          }
          30% {
            transform:translate(49px,60px)
          }
          31% {
            transform:translate(49px,60px)
          }
          32% {
            transform:translate(49px,60px)
          }
          33% {
            transform:translate(49px,60px)
          }
          34% {
            transform:translate(49px,60px)
          }
          35% {
            transform:translate(49px,60px)
          }
          36% {
            transform:translate(49px,60px)
          }
          37% {
            transform:translate(49px,60px)
          }
          38% {
            transform:translate(49px,60px)
          }
          39% {
            transform:translate(49px,60px)
          }
          40% {
            transform:translate(49px,60px)
          }
          41% {
            transform:translate(49px,60px)
          }
          42% {
            transform:translate(49px,60px)
          }
          43% {
            transform:translate(49px,60px)
          }
          44% {
            transform:translate(49px,60px)
          }
          45% {
            transform:translate(49px,60px)
          }
          46% {
            transform:translate(49px,60px)
          }
          47% {
            transform:translate(49px,60px)
          }
          48% {
            transform:translate(49px,60px)
          }
          49% {
            transform:translate(49px,60px)
          }
          50% {
            transform:translate(49px,60px)
          }
          51% {
            transform:translate(49px,60px)
          }
          52% {
            transform:translate(49px,60px)
          }
          53% {
            transform:translate(49px,60px)
          }
          54% {
            transform:translate(49px,60px)
          }
          55% {
            transform:translate(49px,60px)
          }
          56% {
            transform:translate(49px,60px)
          }
          57% {
            transform:translate(49px,60px)
          }
          58% {
            transform:translate(49px,60px)
          }
          59% {
            transform:translate(49px,60px)
          }
          60% {
            transform:translate(49px,60px)
          }
          61% {
            transform:translate(49px,60px)
          }
          62% {
            transform:translate(49px,60px)
          }
          63% {
            transform:translate(49px,60px)
          }
          64% {
            transform:translate(49px,60px)
          }
          65% {
            transform:translate(49px,60px)
          }
          66% {
            transform:translate(48.533px,58.533px)
          }
          67% {
            transform:translate(48.067px,57.067px)
          }
          68% {
            transform:translate(47.6px,55.6px)
          }
          69% {
            transform:translate(47.133px,54.133px)
          }
          70% {
            transform:translate(46.667px,52.667px)
          }
          71% {
            transform:translate(46.2px,51.2px)
          }
          72% {
            transform:translate(45.733px,49.733px)
          }
          73% {
            transform:translate(45.267px,48.267px)
          }
          74% {
            transform:translate(44.8px,46.8px)
          }
          75% {
            transform:translate(44.333px,45.333px)
          }
          76% {
            transform:translate(43.867px,43.867px)
          }
          77% {
            transform:translate(43.4px,42.4px)
          }
          78% {
            transform:translate(42.933px,40.933px)
          }
          79% {
            transform:translate(42.467px,39.467px)
          }
          80% {
            transform:translate(42px,38px)
          }
          81% {
            transform:translate(42px,38px)
          }
          82% {
            transform:translate(42px,38px)
          }
          83% {
            transform:translate(42px,38px)
          }
          84% {
            transform:translate(42px,38px)
          }
          85% {
            transform:translate(42px,38px)
          }
          86% {
            transform:translate(42px,38px)
          }
          87% {
            transform:translate(42px,38px)
          }
          88% {
            transform:translate(42px,38px)
          }
          89% {
            transform:translate(42px,38px)
          }
          90% {
            transform:translate(42px,38px)
          }
          91% {
            transform:translate(42px,38px)
          }
          92% {
            transform:translate(42px,38px)
          }
          93% {
            transform:translate(42px,38px)
          }
          94% {
            transform:translate(42px,38px)
          }
          95% {
            transform:translate(42px,38px)
          }
          96% {
            transform:translate(42px,38px)
          }
          97% {
            transform:translate(42px,38px)
          }
          98% {
            transform:translate(42px,38px)
          }
          99% {
            transform:translate(42px,38px)
          }
          100% {
            transform:translate(42px,38px)
          }
        }
        .carbon3 {
          transform:translate(54px,48px);
          animation:carbon3 14s linear infinite
        }
        @keyframes carbon3 {
          0% {
            transform:translate(61px,61px)
          }
          1% {
            transform:translate(61px,61px)
          }
          2% {
            transform:translate(61px,61px)
          }
          3% {
            transform:translate(61px,61px)
          }
          4% {
            transform:translate(61px,61px)
          }
          5% {
            transform:translate(61px,61px)
          }
          6% {
            transform:translate(61px,61px)
          }
          7% {
            transform:translate(61px,61px)
          }
          8% {
            transform:translate(61px,61px)
          }
          9% {
            transform:translate(61px,61px)
          }
          10% {
            transform:translate(61px,61px)
          }
          11% {
            transform:translate(61px,61.6px)
          }
          12% {
            transform:translate(61px,62.2px)
          }
          13% {
            transform:translate(61px,62.8px)
          }
          14% {
            transform:translate(61px,63.4px)
          }
          15% {
            transform:translate(61px,64px)
          }
          16% {
            transform:translate(61px,64.6px)
          }
          17% {
            transform:translate(61px,65.2px)
          }
          18% {
            transform:translate(61px,65.8px)
          }
          19% {
            transform:translate(61px,66.4px)
          }
          20% {
            transform:translate(61px,67px)
          }
          21% {
            transform:translate(61px,67.6px)
          }
          22% {
            transform:translate(61px,68.2px)
          }
          23% {
            transform:translate(61px,68.8px)
          }
          24% {
            transform:translate(61px,69.4px)
          }
          25% {
            transform:translate(61px,70px)
          }
          26% {
            transform:translate(61px,70px)
          }
          27% {
            transform:translate(61px,70px)
          }
          28% {
            transform:translate(61px,70px)
          }
          29% {
            transform:translate(61px,70px)
          }
          30% {
            transform:translate(61px,70px)
          }
          31% {
            transform:translate(61px,70px)
          }
          32% {
            transform:translate(61px,70px)
          }
          33% {
            transform:translate(61px,70px)
          }
          34% {
            transform:translate(61px,70px)
          }
          35% {
            transform:translate(61px,70px)
          }
          36% {
            transform:translate(61px,70px)
          }
          37% {
            transform:translate(61px,70px)
          }
          38% {
            transform:translate(61px,70px)
          }
          39% {
            transform:translate(61px,70px)
          }
          40% {
            transform:translate(61px,70px)
          }
          41% {
            transform:translate(61px,70px)
          }
          42% {
            transform:translate(61px,70px)
          }
          43% {
            transform:translate(61px,70px)
          }
          44% {
            transform:translate(61px,70px)
          }
          45% {
            transform:translate(61px,70px)
          }
          46% {
            transform:translate(61px,70px)
          }
          47% {
            transform:translate(61px,70px)
          }
          48% {
            transform:translate(61px,70px)
          }
          49% {
            transform:translate(61px,70px)
          }
          50% {
            transform:translate(61px,70px)
          }
          51% {
            transform:translate(61px,70px)
          }
          52% {
            transform:translate(61px,70px)
          }
          53% {
            transform:translate(61px,70px)
          }
          54% {
            transform:translate(61px,70px)
          }
          55% {
            transform:translate(61px,70px)
          }
          56% {
            transform:translate(61px,70px)
          }
          57% {
            transform:translate(61px,70px)
          }
          58% {
            transform:translate(61px,70px)
          }
          59% {
            transform:translate(61px,70px)
          }
          60% {
            transform:translate(61px,70px)
          }
          61% {
            transform:translate(61px,70px)
          }
          62% {
            transform:translate(61px,70px)
          }
          63% {
            transform:translate(61px,70px)
          }
          64% {
            transform:translate(61px,70px)
          }
          65% {
            transform:translate(61px,70px)
          }
          66% {
            transform:translate(60.533px,68.533px)
          }
          67% {
            transform:translate(60.067px,67.067px)
          }
          68% {
            transform:translate(59.6px,65.6px)
          }
          69% {
            transform:translate(59.133px,64.133px)
          }
          70% {
            transform:translate(58.667px,62.667px)
          }
          71% {
            transform:translate(58.2px,61.2px)
          }
          72% {
            transform:translate(57.733px,59.733px)
          }
          73% {
            transform:translate(57.267px,58.267px)
          }
          74% {
            transform:translate(56.8px,56.8px)
          }
          75% {
            transform:translate(56.333px,55.333px)
          }
          76% {
            transform:translate(55.867px,53.867px)
          }
          77% {
            transform:translate(55.4px,52.4px)
          }
          78% {
            transform:translate(54.933px,50.933px)
          }
          79% {
            transform:translate(54.467px,49.467px)
          }
          80% {
            transform:translate(54px,48px)
          }
          81% {
            transform:translate(54px,48px)
          }
          82% {
            transform:translate(54px,48px)
          }
          83% {
            transform:translate(54px,48px)
          }
          84% {
            transform:translate(54px,48px)
          }
          85% {
            transform:translate(54px,48px)
          }
          86% {
            transform:translate(54px,48px)
          }
          87% {
            transform:translate(54px,48px)
          }
          88% {
            transform:translate(54px,48px)
          }
          89% {
            transform:translate(54px,48px)
          }
          90% {
            transform:translate(54px,48px)
          }
          91% {
            transform:translate(54px,48px)
          }
          92% {
            transform:translate(54px,48px)
          }
          93% {
            transform:translate(54px,48px)
          }
          94% {
            transform:translate(54px,48px)
          }
          95% {
            transform:translate(54px,48px)
          }
          96% {
            transform:translate(54px,48px)
          }
          97% {
            transform:translate(54px,48px)
          }
          98% {
            transform:translate(54px,48px)
          }
          99% {
            transform:translate(54px,48px)
          }
          100% {
            transform:translate(54px,48px)
          }
        }
        .carbon4 {
          transform:translate(80px,38px);
          animation:carbon4 14s linear infinite
        }
        @keyframes carbon4 {
          0% {
            transform:translate(73px,51px)
          }
          1% {
            transform:translate(73px,51px)
          }
          2% {
            transform:translate(73px,51px)
          }
          3% {
            transform:translate(73px,51px)
          }
          4% {
            transform:translate(73px,51px)
          }
          5% {
            transform:translate(73px,51px)
          }
          6% {
            transform:translate(73px,51px)
          }
          7% {
            transform:translate(73px,51px)
          }
          8% {
            transform:translate(73px,51px)
          }
          9% {
            transform:translate(73px,51px)
          }
          10% {
            transform:translate(73px,51px)
          }
          11% {
            transform:translate(73px,51.6px)
          }
          12% {
            transform:translate(73px,52.2px)
          }
          13% {
            transform:translate(73px,52.8px)
          }
          14% {
            transform:translate(73px,53.4px)
          }
          15% {
            transform:translate(73px,54px)
          }
          16% {
            transform:translate(73px,54.6px)
          }
          17% {
            transform:translate(73px,55.2px)
          }
          18% {
            transform:translate(73px,55.8px)
          }
          19% {
            transform:translate(73px,56.4px)
          }
          20% {
            transform:translate(73px,57px)
          }
          21% {
            transform:translate(73px,57.6px)
          }
          22% {
            transform:translate(73px,58.2px)
          }
          23% {
            transform:translate(73px,58.8px)
          }
          24% {
            transform:translate(73px,59.4px)
          }
          25% {
            transform:translate(73px,60px)
          }
          26% {
            transform:translate(73px,60px)
          }
          27% {
            transform:translate(73px,60px)
          }
          28% {
            transform:translate(73px,60px)
          }
          29% {
            transform:translate(73px,60px)
          }
          30% {
            transform:translate(73px,60px)
          }
          31% {
            transform:translate(73px,60px)
          }
          32% {
            transform:translate(73px,60px)
          }
          33% {
            transform:translate(73px,60px)
          }
          34% {
            transform:translate(73px,60px)
          }
          35% {
            transform:translate(73px,60px)
          }
          36% {
            transform:translate(73px,60px)
          }
          37% {
            transform:translate(73px,60px)
          }
          38% {
            transform:translate(73px,60px)
          }
          39% {
            transform:translate(73px,60px)
          }
          40% {
            transform:translate(73px,60px)
          }
          41% {
            transform:translate(73px,60px)
          }
          42% {
            transform:translate(73px,60px)
          }
          43% {
            transform:translate(73px,60px)
          }
          44% {
            transform:translate(73px,60px)
          }
          45% {
            transform:translate(73px,60px)
          }
          46% {
            transform:translate(73px,60px)
          }
          47% {
            transform:translate(73px,60px)
          }
          48% {
            transform:translate(73px,60px)
          }
          49% {
            transform:translate(73px,60px)
          }
          50% {
            transform:translate(73px,60px)
          }
          51% {
            transform:translate(73px,60px)
          }
          52% {
            transform:translate(73px,60px)
          }
          53% {
            transform:translate(73px,60px)
          }
          54% {
            transform:translate(73px,60px)
          }
          55% {
            transform:translate(73px,60px)
          }
          56% {
            transform:translate(73px,60px)
          }
          57% {
            transform:translate(73px,60px)
          }
          58% {
            transform:translate(73px,60px)
          }
          59% {
            transform:translate(73px,60px)
          }
          60% {
            transform:translate(73px,60px)
          }
          61% {
            transform:translate(73px,60px)
          }
          62% {
            transform:translate(73px,60px)
          }
          63% {
            transform:translate(73px,60px)
          }
          64% {
            transform:translate(73px,60px)
          }
          65% {
            transform:translate(73px,60px)
          }
          66% {
            transform:translate(73.467px,58.533px)
          }
          67% {
            transform:translate(73.933px,57.067px)
          }
          68% {
            transform:translate(74.4px,55.6px)
          }
          69% {
            transform:translate(74.867px,54.133px)
          }
          70% {
            transform:translate(75.333px,52.667px)
          }
          71% {
            transform:translate(75.8px,51.2px)
          }
          72% {
            transform:translate(76.267px,49.733px)
          }
          73% {
            transform:translate(76.733px,48.267px)
          }
          74% {
            transform:translate(77.2px,46.8px)
          }
          75% {
            transform:translate(77.667px,45.333px)
          }
          76% {
            transform:translate(78.133px,43.867px)
          }
          77% {
            transform:translate(78.6px,42.4px)
          }
          78% {
            transform:translate(79.067px,40.933px)
          }
          79% {
            transform:translate(79.533px,39.467px)
          }
          80% {
            transform:translate(80px,38px)
          }
          81% {
            transform:translate(80px,38px)
          }
          82% {
            transform:translate(80px,38px)
          }
          83% {
            transform:translate(80px,38px)
          }
          84% {
            transform:translate(80px,38px)
          }
          85% {
            transform:translate(80px,38px)
          }
          86% {
            transform:translate(80px,38px)
          }
          87% {
            transform:translate(80px,38px)
          }
          88% {
            transform:translate(80px,38px)
          }
          89% {
            transform:translate(80px,38px)
          }
          90% {
            transform:translate(80px,38px)
          }
          91% {
            transform:translate(80px,38px)
          }
          92% {
            transform:translate(80px,38px)
          }
          93% {
            transform:translate(80px,38px)
          }
          94% {
            transform:translate(80px,38px)
          }
          95% {
            transform:translate(80px,38px)
          }
          96% {
            transform:translate(80px,38px)
          }
          97% {
            transform:translate(80px,38px)
          }
          98% {
            transform:translate(80px,38px)
          }
          99% {
            transform:translate(80px,38px)
          }
          100% {
            transform:translate(80px,38px)
          }
        }
        .carbon5 {
          transform:translate(92px,48px);
          animation:carbon5 14s linear infinite
        }
        @keyframes carbon5 {
          0% {
            transform:translate(85px,61px)
          }
          1% {
            transform:translate(85px,61px)
          }
          2% {
            transform:translate(85px,61px)
          }
          3% {
            transform:translate(85px,61px)
          }
          4% {
            transform:translate(85px,61px)
          }
          5% {
            transform:translate(85px,61px)
          }
          6% {
            transform:translate(85px,61px)
          }
          7% {
            transform:translate(85px,61px)
          }
          8% {
            transform:translate(85px,61px)
          }
          9% {
            transform:translate(85px,61px)
          }
          10% {
            transform:translate(85px,61px)
          }
          11% {
            transform:translate(85px,61.6px)
          }
          12% {
            transform:translate(85px,62.2px)
          }
          13% {
            transform:translate(85px,62.8px)
          }
          14% {
            transform:translate(85px,63.4px)
          }
          15% {
            transform:translate(85px,64px)
          }
          16% {
            transform:translate(85px,64.6px)
          }
          17% {
            transform:translate(85px,65.2px)
          }
          18% {
            transform:translate(85px,65.8px)
          }
          19% {
            transform:translate(85px,66.4px)
          }
          20% {
            transform:translate(85px,67px)
          }
          21% {
            transform:translate(85px,67.6px)
          }
          22% {
            transform:translate(85px,68.2px)
          }
          23% {
            transform:translate(85px,68.8px)
          }
          24% {
            transform:translate(85px,69.4px)
          }
          25% {
            transform:translate(85px,70px)
          }
          26% {
            transform:translate(85px,70px)
          }
          27% {
            transform:translate(85px,70px)
          }
          28% {
            transform:translate(85px,70px)
          }
          29% {
            transform:translate(85px,70px)
          }
          30% {
            transform:translate(85px,70px)
          }
          31% {
            transform:translate(85px,70px)
          }
          32% {
            transform:translate(85px,70px)
          }
          33% {
            transform:translate(85px,70px)
          }
          34% {
            transform:translate(85px,70px)
          }
          35% {
            transform:translate(85px,70px)
          }
          36% {
            transform:translate(85px,70px)
          }
          37% {
            transform:translate(85px,70px)
          }
          38% {
            transform:translate(85px,70px)
          }
          39% {
            transform:translate(85px,70px)
          }
          40% {
            transform:translate(85px,70px)
          }
          41% {
            transform:translate(85px,70px)
          }
          42% {
            transform:translate(85px,70px)
          }
          43% {
            transform:translate(85px,70px)
          }
          44% {
            transform:translate(85px,70px)
          }
          45% {
            transform:translate(85px,70px)
          }
          46% {
            transform:translate(85px,70px)
          }
          47% {
            transform:translate(85px,70px)
          }
          48% {
            transform:translate(85px,70px)
          }
          49% {
            transform:translate(85px,70px)
          }
          50% {
            transform:translate(85px,70px)
          }
          51% {
            transform:translate(85px,70px)
          }
          52% {
            transform:translate(85px,70px)
          }
          53% {
            transform:translate(85px,70px)
          }
          54% {
            transform:translate(85px,70px)
          }
          55% {
            transform:translate(85px,70px)
          }
          56% {
            transform:translate(85px,70px)
          }
          57% {
            transform:translate(85px,70px)
          }
          58% {
            transform:translate(85px,70px)
          }
          59% {
            transform:translate(85px,70px)
          }
          60% {
            transform:translate(85px,70px)
          }
          61% {
            transform:translate(85px,70px)
          }
          62% {
            transform:translate(85px,70px)
          }
          63% {
            transform:translate(85px,70px)
          }
          64% {
            transform:translate(85px,70px)
          }
          65% {
            transform:translate(85px,70px)
          }
          66% {
            transform:translate(85.467px,68.533px)
          }
          67% {
            transform:translate(85.933px,67.067px)
          }
          68% {
            transform:translate(86.4px,65.6px)
          }
          69% {
            transform:translate(86.867px,64.133px)
          }
          70% {
            transform:translate(87.333px,62.667px)
          }
          71% {
            transform:translate(87.8px,61.2px)
          }
          72% {
            transform:translate(88.267px,59.733px)
          }
          73% {
            transform:translate(88.733px,58.267px)
          }
          74% {
            transform:translate(89.2px,56.8px)
          }
          75% {
            transform:translate(89.667px,55.333px)
          }
          76% {
            transform:translate(90.133px,53.867px)
          }
          77% {
            transform:translate(90.6px,52.4px)
          }
          78% {
            transform:translate(91.067px,50.933px)
          }
          79% {
            transform:translate(91.533px,49.467px)
          }
          80% {
            transform:translate(92px,48px)
          }
          81% {
            transform:translate(92px,48px)
          }
          82% {
            transform:translate(92px,48px)
          }
          83% {
            transform:translate(92px,48px)
          }
          84% {
            transform:translate(92px,48px)
          }
          85% {
            transform:translate(92px,48px)
          }
          86% {
            transform:translate(92px,48px)
          }
          87% {
            transform:translate(92px,48px)
          }
          88% {
            transform:translate(92px,48px)
          }
          89% {
            transform:translate(92px,48px)
          }
          90% {
            transform:translate(92px,48px)
          }
          91% {
            transform:translate(92px,48px)
          }
          92% {
            transform:translate(92px,48px)
          }
          93% {
            transform:translate(92px,48px)
          }
          94% {
            transform:translate(92px,48px)
          }
          95% {
            transform:translate(92px,48px)
          }
          96% {
            transform:translate(92px,48px)
          }
          97% {
            transform:translate(92px,48px)
          }
          98% {
            transform:translate(92px,48px)
          }
          99% {
            transform:translate(92px,48px)
          }
          100% {
            transform:translate(92px,48px)
          }
        }
        .carbon6 {
          transform:translate(104px,38px);
          animation:carbon6 14s linear infinite
        }
        @keyframes carbon6 {
          0% {
            transform:translate(97px,51px)
          }
          1% {
            transform:translate(97px,51px)
          }
          2% {
            transform:translate(97px,51px)
          }
          3% {
            transform:translate(97px,51px)
          }
          4% {
            transform:translate(97px,51px)
          }
          5% {
            transform:translate(97px,51px)
          }
          6% {
            transform:translate(97px,51px)
          }
          7% {
            transform:translate(97px,51px)
          }
          8% {
            transform:translate(97px,51px)
          }
          9% {
            transform:translate(97px,51px)
          }
          10% {
            transform:translate(97px,51px)
          }
          11% {
            transform:translate(97px,51.6px)
          }
          12% {
            transform:translate(97px,52.2px)
          }
          13% {
            transform:translate(97px,52.8px)
          }
          14% {
            transform:translate(97px,53.4px)
          }
          15% {
            transform:translate(97px,54px)
          }
          16% {
            transform:translate(97px,54.6px)
          }
          17% {
            transform:translate(97px,55.2px)
          }
          18% {
            transform:translate(97px,55.8px)
          }
          19% {
            transform:translate(97px,56.4px)
          }
          20% {
            transform:translate(97px,57px)
          }
          21% {
            transform:translate(97px,57.6px)
          }
          22% {
            transform:translate(97px,58.2px)
          }
          23% {
            transform:translate(97px,58.8px)
          }
          24% {
            transform:translate(97px,59.4px)
          }
          25% {
            transform:translate(97px,60px)
          }
          26% {
            transform:translate(97px,60px)
          }
          27% {
            transform:translate(97px,60px)
          }
          28% {
            transform:translate(97px,60px)
          }
          29% {
            transform:translate(97px,60px)
          }
          30% {
            transform:translate(97px,60px)
          }
          31% {
            transform:translate(97px,60px)
          }
          32% {
            transform:translate(97px,60px)
          }
          33% {
            transform:translate(97px,60px)
          }
          34% {
            transform:translate(97px,60px)
          }
          35% {
            transform:translate(97px,60px)
          }
          36% {
            transform:translate(97px,60px)
          }
          37% {
            transform:translate(97px,60px)
          }
          38% {
            transform:translate(97px,60px)
          }
          39% {
            transform:translate(97px,60px)
          }
          40% {
            transform:translate(97px,60px)
          }
          41% {
            transform:translate(97px,60px)
          }
          42% {
            transform:translate(97px,60px)
          }
          43% {
            transform:translate(97px,60px)
          }
          44% {
            transform:translate(97px,60px)
          }
          45% {
            transform:translate(97px,60px)
          }
          46% {
            transform:translate(97px,60px)
          }
          47% {
            transform:translate(97px,60px)
          }
          48% {
            transform:translate(97px,60px)
          }
          49% {
            transform:translate(97px,60px)
          }
          50% {
            transform:translate(97px,60px)
          }
          51% {
            transform:translate(97px,60px)
          }
          52% {
            transform:translate(97px,60px)
          }
          53% {
            transform:translate(97px,60px)
          }
          54% {
            transform:translate(97px,60px)
          }
          55% {
            transform:translate(97px,60px)
          }
          56% {
            transform:translate(97px,60px)
          }
          57% {
            transform:translate(97px,60px)
          }
          58% {
            transform:translate(97px,60px)
          }
          59% {
            transform:translate(97px,60px)
          }
          60% {
            transform:translate(97px,60px)
          }
          61% {
            transform:translate(97px,60px)
          }
          62% {
            transform:translate(97px,60px)
          }
          63% {
            transform:translate(97px,60px)
          }
          64% {
            transform:translate(97px,60px)
          }
          65% {
            transform:translate(97px,60px)
          }
          66% {
            transform:translate(97.467px,58.533px)
          }
          67% {
            transform:translate(97.933px,57.067px)
          }
          68% {
            transform:translate(98.4px,55.6px)
          }
          69% {
            transform:translate(98.867px,54.133px)
          }
          70% {
            transform:translate(99.333px,52.667px)
          }
          71% {
            transform:translate(99.8px,51.2px)
          }
          72% {
            transform:translate(100.267px,49.733px)
          }
          73% {
            transform:translate(100.733px,48.267px)
          }
          74% {
            transform:translate(101.2px,46.8px)
          }
          75% {
            transform:translate(101.667px,45.333px)
          }
          76% {
            transform:translate(102.133px,43.867px)
          }
          77% {
            transform:translate(102.6px,42.4px)
          }
          78% {
            transform:translate(103.067px,40.933px)
          }
          79% {
            transform:translate(103.533px,39.467px)
          }
          80% {
            transform:translate(104px,38px)
          }
          81% {
            transform:translate(104px,38px)
          }
          82% {
            transform:translate(104px,38px)
          }
          83% {
            transform:translate(104px,38px)
          }
          84% {
            transform:translate(104px,38px)
          }
          85% {
            transform:translate(104px,38px)
          }
          86% {
            transform:translate(104px,38px)
          }
          87% {
            transform:translate(104px,38px)
          }
          88% {
            transform:translate(104px,38px)
          }
          89% {
            transform:translate(104px,38px)
          }
          90% {
            transform:translate(104px,38px)
          }
          91% {
            transform:translate(104px,38px)
          }
          92% {
            transform:translate(104px,38px)
          }
          93% {
            transform:translate(104px,38px)
          }
          94% {
            transform:translate(104px,38px)
          }
          95% {
            transform:translate(104px,38px)
          }
          96% {
            transform:translate(104px,38px)
          }
          97% {
            transform:translate(104px,38px)
          }
          98% {
            transform:translate(104px,38px)
          }
          99% {
            transform:translate(104px,38px)
          }
          100% {
            transform:translate(104px,38px)
          }
        }
        .carbon7 {
          transform:translate(116px,48px);
          animation:carbon7 14s linear infinite
        }
        @keyframes carbon7 {
          0% {
            transform:translate(109px,61px)
          }
          1% {
            transform:translate(109px,61px)
          }
          2% {
            transform:translate(109px,61px)
          }
          3% {
            transform:translate(109px,61px)
          }
          4% {
            transform:translate(109px,61px)
          }
          5% {
            transform:translate(109px,61px)
          }
          6% {
            transform:translate(109px,61px)
          }
          7% {
            transform:translate(109px,61px)
          }
          8% {
            transform:translate(109px,61px)
          }
          9% {
            transform:translate(109px,61px)
          }
          10% {
            transform:translate(109px,61px)
          }
          11% {
            transform:translate(109px,61.6px)
          }
          12% {
            transform:translate(109px,62.2px)
          }
          13% {
            transform:translate(109px,62.8px)
          }
          14% {
            transform:translate(109px,63.4px)
          }
          15% {
            transform:translate(109px,64px)
          }
          16% {
            transform:translate(109px,64.6px)
          }
          17% {
            transform:translate(109px,65.2px)
          }
          18% {
            transform:translate(109px,65.8px)
          }
          19% {
            transform:translate(109px,66.4px)
          }
          20% {
            transform:translate(109px,67px)
          }
          21% {
            transform:translate(109px,67.6px)
          }
          22% {
            transform:translate(109px,68.2px)
          }
          23% {
            transform:translate(109px,68.8px)
          }
          24% {
            transform:translate(109px,69.4px)
          }
          25% {
            transform:translate(109px,70px)
          }
          26% {
            transform:translate(109px,70px)
          }
          27% {
            transform:translate(109px,70px)
          }
          28% {
            transform:translate(109px,70px)
          }
          29% {
            transform:translate(109px,70px)
          }
          30% {
            transform:translate(109px,70px)
          }
          31% {
            transform:translate(109px,70px)
          }
          32% {
            transform:translate(109px,70px)
          }
          33% {
            transform:translate(109px,70px)
          }
          34% {
            transform:translate(109px,70px)
          }
          35% {
            transform:translate(109px,70px)
          }
          36% {
            transform:translate(109px,70px)
          }
          37% {
            transform:translate(109px,70px)
          }
          38% {
            transform:translate(109px,70px)
          }
          39% {
            transform:translate(109px,70px)
          }
          40% {
            transform:translate(109px,70px)
          }
          41% {
            transform:translate(109px,70px)
          }
          42% {
            transform:translate(109px,70px)
          }
          43% {
            transform:translate(109px,70px)
          }
          44% {
            transform:translate(109px,70px)
          }
          45% {
            transform:translate(109px,70px)
          }
          46% {
            transform:translate(109px,70px)
          }
          47% {
            transform:translate(109px,70px)
          }
          48% {
            transform:translate(109px,70px)
          }
          49% {
            transform:translate(109px,70px)
          }
          50% {
            transform:translate(109px,70px)
          }
          51% {
            transform:translate(109px,70px)
          }
          52% {
            transform:translate(109px,70px)
          }
          53% {
            transform:translate(109px,70px)
          }
          54% {
            transform:translate(109px,70px)
          }
          55% {
            transform:translate(109px,70px)
          }
          56% {
            transform:translate(109px,70px)
          }
          57% {
            transform:translate(109px,70px)
          }
          58% {
            transform:translate(109px,70px)
          }
          59% {
            transform:translate(109px,70px)
          }
          60% {
            transform:translate(109px,70px)
          }
          61% {
            transform:translate(109px,70px)
          }
          62% {
            transform:translate(109px,70px)
          }
          63% {
            transform:translate(109px,70px)
          }
          64% {
            transform:translate(109px,70px)
          }
          65% {
            transform:translate(109px,70px)
          }
          66% {
            transform:translate(109.467px,68.533px)
          }
          67% {
            transform:translate(109.933px,67.067px)
          }
          68% {
            transform:translate(110.4px,65.6px)
          }
          69% {
            transform:translate(110.867px,64.133px)
          }
          70% {
            transform:translate(111.333px,62.667px)
          }
          71% {
            transform:translate(111.8px,61.2px)
          }
          72% {
            transform:translate(112.267px,59.733px)
          }
          73% {
            transform:translate(112.733px,58.267px)
          }
          74% {
            transform:translate(113.2px,56.8px)
          }
          75% {
            transform:translate(113.667px,55.333px)
          }
          76% {
            transform:translate(114.133px,53.867px)
          }
          77% {
            transform:translate(114.6px,52.4px)
          }
          78% {
            transform:translate(115.067px,50.933px)
          }
          79% {
            transform:translate(115.533px,49.467px)
          }
          80% {
            transform:translate(116px,48px)
          }
          81% {
            transform:translate(116px,48px)
          }
          82% {
            transform:translate(116px,48px)
          }
          83% {
            transform:translate(116px,48px)
          }
          84% {
            transform:translate(116px,48px)
          }
          85% {
            transform:translate(116px,48px)
          }
          86% {
            transform:translate(116px,48px)
          }
          87% {
            transform:translate(116px,48px)
          }
          88% {
            transform:translate(116px,48px)
          }
          89% {
            transform:translate(116px,48px)
          }
          90% {
            transform:translate(116px,48px)
          }
          91% {
            transform:translate(116px,48px)
          }
          92% {
            transform:translate(116px,48px)
          }
          93% {
            transform:translate(116px,48px)
          }
          94% {
            transform:translate(116px,48px)
          }
          95% {
            transform:translate(116px,48px)
          }
          96% {
            transform:translate(116px,48px)
          }
          97% {
            transform:translate(116px,48px)
          }
          98% {
            transform:translate(116px,48px)
          }
          99% {
            transform:translate(116px,48px)
          }
          100% {
            transform:translate(116px,48px)
          }
        }
        .b0 {
          animation:b0 14s linear infinite;
        }
        @keyframes b0 {
          0% {
            d:path('M25.000,51.000L37.000,61.000')
          }
          1% {
            d:path('M25.000,51.000L37.000,61.000')
          }
          2% {
            d:path('M25.000,51.000L37.000,61.000')
          }
          3% {
            d:path('M25.000,51.000L37.000,61.000')
          }
          4% {
            d:path('M25.000,51.000L37.000,61.000')
          }
          5% {
            d:path('M25.000,51.000L37.000,61.000')
          }
          6% {
            d:path('M25.000,51.000L37.000,61.000')
          }
          7% {
            d:path('M25.000,51.000L37.000,61.000')
          }
          8% {
            d:path('M25.000,51.000L37.000,61.000')
          }
          9% {
            d:path('M25.000,51.000L37.000,61.000')
          }
          10% {
            d:path('M25.000,51.000L37.000,61.000')
          }
          11% {
            d:path('M25.000,51.600L37.000,61.600')
          }
          12% {
            d:path('M25.000,52.200L37.000,62.200')
          }
          13% {
            d:path('M25.000,52.800L37.000,62.800')
          }
          14% {
            d:path('M25.000,53.400L37.000,63.400')
          }
          15% {
            d:path('M25.000,54.000L37.000,64.000')
          }
          16% {
            d:path('M25.000,54.600L37.000,64.600')
          }
          17% {
            d:path('M25.000,55.200L37.000,65.200')
          }
          18% {
            d:path('M25.000,55.800L37.000,65.800')
          }
          19% {
            d:path('M25.000,56.400L37.000,66.400')
          }
          20% {
            d:path('M25.000,57.000L37.000,67.000')
          }
          21% {
            d:path('M25.000,57.600L37.000,67.600')
          }
          22% {
            d:path('M25.000,58.200L37.000,68.200')
          }
          23% {
            d:path('M25.000,58.800L37.000,68.800')
          }
          24% {
            d:path('M25.000,59.400L37.000,69.400')
          }
          25% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          26% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          27% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          28% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          29% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          30% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          31% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          32% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          33% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          34% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          35% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          36% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          37% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          38% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          39% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          40% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          41% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          42% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          43% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          44% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          45% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          46% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          47% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          48% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          49% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          50% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          51% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          52% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          53% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          54% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          55% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          56% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          57% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          58% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          59% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          60% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          61% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          62% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          63% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          64% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          65% {
            d:path('M25.000,60.000L37.000,70.000')
          }
          66% {
            d:path('M24.533,58.533L36.533,68.533')
          }
          67% {
            d:path('M24.067,57.067L36.067,67.067')
          }
          68% {
            d:path('M23.600,55.600L35.600,65.600')
          }
          69% {
            d:path('M23.133,54.133L35.133,64.133')
          }
          70% {
            d:path('M22.667,52.667L34.667,62.667')
          }
          71% {
            d:path('M22.200,51.200L34.200,61.200')
          }
          72% {
            d:path('M21.733,49.733L33.733,59.733')
          }
          73% {
            d:path('M21.267,48.267L33.267,58.267')
          }
          74% {
            d:path('M20.800,46.800L32.800,56.800')
          }
          75% {
            d:path('M20.333,45.333L32.333,55.333')
          }
          76% {
            d:path('M19.867,43.867L31.867,53.867')
          }
          77% {
            d:path('M19.400,42.400L31.400,52.400')
          }
          78% {
            d:path('M18.933,40.933L30.933,50.933')
          }
          79% {
            d:path('M18.467,39.467L30.467,49.467')
          }
          80% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          81% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          82% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          83% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          84% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          85% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          86% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          87% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          88% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          89% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          90% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          91% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          92% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          93% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          94% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          95% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          96% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          97% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          98% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          99% {
            d:path('M18.000,38.000L30.000,48.000')
          }
          100% {
            d:path('M18.000,38.000L30.000,48.000')
          }
        }
        .b1 {
          animation:b1 14s linear infinite;
        }
        @keyframes b1 {
          0% {
            d:path('M37.000,61.000L49.000,51.000')
          }
          1% {
            d:path('M37.000,61.000L49.000,51.000')
          }
          2% {
            d:path('M37.000,61.000L49.000,51.000')
          }
          3% {
            d:path('M37.000,61.000L49.000,51.000')
          }
          4% {
            d:path('M37.000,61.000L49.000,51.000')
          }
          5% {
            d:path('M37.000,61.000L49.000,51.000')
          }
          6% {
            d:path('M37.000,61.000L49.000,51.000')
          }
          7% {
            d:path('M37.000,61.000L49.000,51.000')
          }
          8% {
            d:path('M37.000,61.000L49.000,51.000')
          }
          9% {
            d:path('M37.000,61.000L49.000,51.000')
          }
          10% {
            d:path('M37.000,61.000L49.000,51.000')
          }
          11% {
            d:path('M37.000,61.600L49.000,51.600')
          }
          12% {
            d:path('M37.000,62.200L49.000,52.200')
          }
          13% {
            d:path('M37.000,62.800L49.000,52.800')
          }
          14% {
            d:path('M37.000,63.400L49.000,53.400')
          }
          15% {
            d:path('M37.000,64.000L49.000,54.000')
          }
          16% {
            d:path('M37.000,64.600L49.000,54.600')
          }
          17% {
            d:path('M37.000,65.200L49.000,55.200')
          }
          18% {
            d:path('M37.000,65.800L49.000,55.800')
          }
          19% {
            d:path('M37.000,66.400L49.000,56.400')
          }
          20% {
            d:path('M37.000,67.000L49.000,57.000')
          }
          21% {
            d:path('M37.000,67.600L49.000,57.600')
          }
          22% {
            d:path('M37.000,68.200L49.000,58.200')
          }
          23% {
            d:path('M37.000,68.800L49.000,58.800')
          }
          24% {
            d:path('M37.000,69.400L49.000,59.400')
          }
          25% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          26% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          27% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          28% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          29% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          30% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          31% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          32% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          33% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          34% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          35% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          36% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          37% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          38% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          39% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          40% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          41% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          42% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          43% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          44% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          45% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          46% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          47% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          48% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          49% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          50% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          51% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          52% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          53% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          54% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          55% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          56% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          57% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          58% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          59% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          60% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          61% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          62% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          63% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          64% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          65% {
            d:path('M37.000,70.000L49.000,60.000')
          }
          66% {
            d:path('M36.533,68.533L48.533,58.533')
          }
          67% {
            d:path('M36.067,67.067L48.067,57.067')
          }
          68% {
            d:path('M35.600,65.600L47.600,55.600')
          }
          69% {
            d:path('M35.133,64.133L47.133,54.133')
          }
          70% {
            d:path('M34.667,62.667L46.667,52.667')
          }
          71% {
            d:path('M34.200,61.200L46.200,51.200')
          }
          72% {
            d:path('M33.733,59.733L45.733,49.733')
          }
          73% {
            d:path('M33.267,58.267L45.267,48.267')
          }
          74% {
            d:path('M32.800,56.800L44.800,46.800')
          }
          75% {
            d:path('M32.333,55.333L44.333,45.333')
          }
          76% {
            d:path('M31.867,53.867L43.867,43.867')
          }
          77% {
            d:path('M31.400,52.400L43.400,42.400')
          }
          78% {
            d:path('M30.933,50.933L42.933,40.933')
          }
          79% {
            d:path('M30.467,49.467L42.467,39.467')
          }
          80% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          81% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          82% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          83% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          84% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          85% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          86% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          87% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          88% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          89% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          90% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          91% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          92% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          93% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          94% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          95% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          96% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          97% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          98% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          99% {
            d:path('M30.000,48.000L42.000,38.000')
          }
          100% {
            d:path('M30.000,48.000L42.000,38.000')
          }
        }
        .b2 {
          animation:b2 14s linear infinite;
        }
        @keyframes b2 {
          0% {
            d:path('M49.000,51.000L61.000,61.000')
          }
          1% {
            d:path('M49.000,51.000L61.000,61.000')
          }
          2% {
            d:path('M49.000,51.000L61.000,61.000')
          }
          3% {
            d:path('M49.000,51.000L61.000,61.000')
          }
          4% {
            d:path('M49.000,51.000L61.000,61.000')
          }
          5% {
            d:path('M49.000,51.000L61.000,61.000')
          }
          6% {
            d:path('M49.000,51.000L61.000,61.000')
          }
          7% {
            d:path('M49.000,51.000L61.000,61.000')
          }
          8% {
            d:path('M49.000,51.000L61.000,61.000')
          }
          9% {
            d:path('M49.000,51.000L61.000,61.000')
          }
          10% {
            d:path('M49.000,51.000L61.000,61.000')
          }
          11% {
            d:path('M49.000,51.600L61.000,61.600')
          }
          12% {
            d:path('M49.000,52.200L61.000,62.200')
          }
          13% {
            d:path('M49.000,52.800L61.000,62.800')
          }
          14% {
            d:path('M49.000,53.400L61.000,63.400')
          }
          15% {
            d:path('M49.000,54.000L61.000,64.000')
          }
          16% {
            d:path('M49.000,54.600L61.000,64.600')
          }
          17% {
            d:path('M49.000,55.200L61.000,65.200')
          }
          18% {
            d:path('M49.000,55.800L61.000,65.800')
          }
          19% {
            d:path('M49.000,56.400L61.000,66.400')
          }
          20% {
            d:path('M49.000,57.000L61.000,67.000')
          }
          21% {
            d:path('M49.000,57.600L61.000,67.600')
          }
          22% {
            d:path('M49.000,58.200L61.000,68.200')
          }
          23% {
            d:path('M49.000,58.800L61.000,68.800')
          }
          24% {
            d:path('M49.000,59.400L61.000,69.400')
          }
          25% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          26% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          27% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          28% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          29% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          30% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          31% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          32% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          33% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          34% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          35% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          36% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          37% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          38% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          39% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          40% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          41% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          42% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          43% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          44% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          45% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          46% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          47% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          48% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          49% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          50% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          51% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          52% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          53% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          54% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          55% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          56% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          57% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          58% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          59% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          60% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          61% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          62% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          63% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          64% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          65% {
            d:path('M49.000,60.000L61.000,70.000')
          }
          66% {
            d:path('M48.533,58.533L60.533,68.533')
          }
          67% {
            d:path('M48.067,57.067L60.067,67.067')
          }
          68% {
            d:path('M47.600,55.600L59.600,65.600')
          }
          69% {
            d:path('M47.133,54.133L59.133,64.133')
          }
          70% {
            d:path('M46.667,52.667L58.667,62.667')
          }
          71% {
            d:path('M46.200,51.200L58.200,61.200')
          }
          72% {
            d:path('M45.733,49.733L57.733,59.733')
          }
          73% {
            d:path('M45.267,48.267L57.267,58.267')
          }
          74% {
            d:path('M44.800,46.800L56.800,56.800')
          }
          75% {
            d:path('M44.333,45.333L56.333,55.333')
          }
          76% {
            d:path('M43.867,43.867L55.867,53.867')
          }
          77% {
            d:path('M43.400,42.400L55.400,52.400')
          }
          78% {
            d:path('M42.933,40.933L54.933,50.933')
          }
          79% {
            d:path('M42.467,39.467L54.467,49.467')
          }
          80% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          81% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          82% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          83% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          84% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          85% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          86% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          87% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          88% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          89% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          90% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          91% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          92% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          93% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          94% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          95% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          96% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          97% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          98% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          99% {
            d:path('M42.000,38.000L54.000,48.000')
          }
          100% {
            d:path('M42.000,38.000L54.000,48.000')
          }
        }
        .b3 {
          animation:b3 14s linear infinite,cleave 14s linear infinite;
          opacity:0;
        }
        @keyframes b3 {
          0% {
            d:path('M61.000,61.000L73.000,51.000')
          }
          1% {
            d:path('M61.000,61.000L73.000,51.000')
          }
          2% {
            d:path('M61.000,61.000L73.000,51.000')
          }
          3% {
            d:path('M61.000,61.000L73.000,51.000')
          }
          4% {
            d:path('M61.000,61.000L73.000,51.000')
          }
          5% {
            d:path('M61.000,61.000L73.000,51.000')
          }
          6% {
            d:path('M61.000,61.000L73.000,51.000')
          }
          7% {
            d:path('M61.000,61.000L73.000,51.000')
          }
          8% {
            d:path('M61.000,61.000L73.000,51.000')
          }
          9% {
            d:path('M61.000,61.000L73.000,51.000')
          }
          10% {
            d:path('M61.000,61.000L73.000,51.000')
          }
          11% {
            d:path('M61.000,61.600L73.000,51.600')
          }
          12% {
            d:path('M61.000,62.200L73.000,52.200')
          }
          13% {
            d:path('M61.000,62.800L73.000,52.800')
          }
          14% {
            d:path('M61.000,63.400L73.000,53.400')
          }
          15% {
            d:path('M61.000,64.000L73.000,54.000')
          }
          16% {
            d:path('M61.000,64.600L73.000,54.600')
          }
          17% {
            d:path('M61.000,65.200L73.000,55.200')
          }
          18% {
            d:path('M61.000,65.800L73.000,55.800')
          }
          19% {
            d:path('M61.000,66.400L73.000,56.400')
          }
          20% {
            d:path('M61.000,67.000L73.000,57.000')
          }
          21% {
            d:path('M61.000,67.600L73.000,57.600')
          }
          22% {
            d:path('M61.000,68.200L73.000,58.200')
          }
          23% {
            d:path('M61.000,68.800L73.000,58.800')
          }
          24% {
            d:path('M61.000,69.400L73.000,59.400')
          }
          25% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          26% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          27% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          28% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          29% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          30% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          31% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          32% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          33% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          34% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          35% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          36% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          37% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          38% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          39% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          40% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          41% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          42% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          43% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          44% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          45% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          46% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          47% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          48% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          49% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          50% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          51% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          52% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          53% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          54% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          55% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          56% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          57% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          58% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          59% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          60% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          61% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          62% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          63% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          64% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          65% {
            d:path('M61.000,70.000L73.000,60.000')
          }
          66% {
            d:path('M60.533,68.533L73.467,58.533')
          }
          67% {
            d:path('M60.067,67.067L73.933,57.067')
          }
          68% {
            d:path('M59.600,65.600L74.400,55.600')
          }
          69% {
            d:path('M59.133,64.133L74.867,54.133')
          }
          70% {
            d:path('M58.667,62.667L75.333,52.667')
          }
          71% {
            d:path('M58.200,61.200L75.800,51.200')
          }
          72% {
            d:path('M57.733,59.733L76.267,49.733')
          }
          73% {
            d:path('M57.267,58.267L76.733,48.267')
          }
          74% {
            d:path('M56.800,56.800L77.200,46.800')
          }
          75% {
            d:path('M56.333,55.333L77.667,45.333')
          }
          76% {
            d:path('M55.867,53.867L78.133,43.867')
          }
          77% {
            d:path('M55.400,52.400L78.600,42.400')
          }
          78% {
            d:path('M54.933,50.933L79.067,40.933')
          }
          79% {
            d:path('M54.467,49.467L79.533,39.467')
          }
          80% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          81% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          82% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          83% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          84% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          85% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          86% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          87% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          88% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          89% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          90% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          91% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          92% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          93% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          94% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          95% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          96% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          97% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          98% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          99% {
            d:path('M54.000,48.000L80.000,38.000')
          }
          100% {
            d:path('M54.000,48.000L80.000,38.000')
          }
        }
        .b4 {
          animation:b4 14s linear infinite;
        }
        @keyframes b4 {
          0% {
            d:path('M73.000,51.000L85.000,61.000')
          }
          1% {
            d:path('M73.000,51.000L85.000,61.000')
          }
          2% {
            d:path('M73.000,51.000L85.000,61.000')
          }
          3% {
            d:path('M73.000,51.000L85.000,61.000')
          }
          4% {
            d:path('M73.000,51.000L85.000,61.000')
          }
          5% {
            d:path('M73.000,51.000L85.000,61.000')
          }
          6% {
            d:path('M73.000,51.000L85.000,61.000')
          }
          7% {
            d:path('M73.000,51.000L85.000,61.000')
          }
          8% {
            d:path('M73.000,51.000L85.000,61.000')
          }
          9% {
            d:path('M73.000,51.000L85.000,61.000')
          }
          10% {
            d:path('M73.000,51.000L85.000,61.000')
          }
          11% {
            d:path('M73.000,51.600L85.000,61.600')
          }
          12% {
            d:path('M73.000,52.200L85.000,62.200')
          }
          13% {
            d:path('M73.000,52.800L85.000,62.800')
          }
          14% {
            d:path('M73.000,53.400L85.000,63.400')
          }
          15% {
            d:path('M73.000,54.000L85.000,64.000')
          }
          16% {
            d:path('M73.000,54.600L85.000,64.600')
          }
          17% {
            d:path('M73.000,55.200L85.000,65.200')
          }
          18% {
            d:path('M73.000,55.800L85.000,65.800')
          }
          19% {
            d:path('M73.000,56.400L85.000,66.400')
          }
          20% {
            d:path('M73.000,57.000L85.000,67.000')
          }
          21% {
            d:path('M73.000,57.600L85.000,67.600')
          }
          22% {
            d:path('M73.000,58.200L85.000,68.200')
          }
          23% {
            d:path('M73.000,58.800L85.000,68.800')
          }
          24% {
            d:path('M73.000,59.400L85.000,69.400')
          }
          25% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          26% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          27% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          28% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          29% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          30% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          31% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          32% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          33% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          34% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          35% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          36% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          37% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          38% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          39% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          40% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          41% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          42% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          43% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          44% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          45% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          46% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          47% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          48% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          49% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          50% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          51% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          52% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          53% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          54% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          55% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          56% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          57% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          58% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          59% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          60% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          61% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          62% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          63% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          64% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          65% {
            d:path('M73.000,60.000L85.000,70.000')
          }
          66% {
            d:path('M73.467,58.533L85.467,68.533')
          }
          67% {
            d:path('M73.933,57.067L85.933,67.067')
          }
          68% {
            d:path('M74.400,55.600L86.400,65.600')
          }
          69% {
            d:path('M74.867,54.133L86.867,64.133')
          }
          70% {
            d:path('M75.333,52.667L87.333,62.667')
          }
          71% {
            d:path('M75.800,51.200L87.800,61.200')
          }
          72% {
            d:path('M76.267,49.733L88.267,59.733')
          }
          73% {
            d:path('M76.733,48.267L88.733,58.267')
          }
          74% {
            d:path('M77.200,46.800L89.200,56.800')
          }
          75% {
            d:path('M77.667,45.333L89.667,55.333')
          }
          76% {
            d:path('M78.133,43.867L90.133,53.867')
          }
          77% {
            d:path('M78.600,42.400L90.600,52.400')
          }
          78% {
            d:path('M79.067,40.933L91.067,50.933')
          }
          79% {
            d:path('M79.533,39.467L91.533,49.467')
          }
          80% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          81% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          82% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          83% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          84% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          85% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          86% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          87% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          88% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          89% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          90% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          91% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          92% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          93% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          94% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          95% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          96% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          97% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          98% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          99% {
            d:path('M80.000,38.000L92.000,48.000')
          }
          100% {
            d:path('M80.000,38.000L92.000,48.000')
          }
        }
        .b5 {
          animation:b5 14s linear infinite;
        }
        @keyframes b5 {
          0% {
            d:path('M85.000,61.000L97.000,51.000')
          }
          1% {
            d:path('M85.000,61.000L97.000,51.000')
          }
          2% {
            d:path('M85.000,61.000L97.000,51.000')
          }
          3% {
            d:path('M85.000,61.000L97.000,51.000')
          }
          4% {
            d:path('M85.000,61.000L97.000,51.000')
          }
          5% {
            d:path('M85.000,61.000L97.000,51.000')
          }
          6% {
            d:path('M85.000,61.000L97.000,51.000')
          }
          7% {
            d:path('M85.000,61.000L97.000,51.000')
          }
          8% {
            d:path('M85.000,61.000L97.000,51.000')
          }
          9% {
            d:path('M85.000,61.000L97.000,51.000')
          }
          10% {
            d:path('M85.000,61.000L97.000,51.000')
          }
          11% {
            d:path('M85.000,61.600L97.000,51.600')
          }
          12% {
            d:path('M85.000,62.200L97.000,52.200')
          }
          13% {
            d:path('M85.000,62.800L97.000,52.800')
          }
          14% {
            d:path('M85.000,63.400L97.000,53.400')
          }
          15% {
            d:path('M85.000,64.000L97.000,54.000')
          }
          16% {
            d:path('M85.000,64.600L97.000,54.600')
          }
          17% {
            d:path('M85.000,65.200L97.000,55.200')
          }
          18% {
            d:path('M85.000,65.800L97.000,55.800')
          }
          19% {
            d:path('M85.000,66.400L97.000,56.400')
          }
          20% {
            d:path('M85.000,67.000L97.000,57.000')
          }
          21% {
            d:path('M85.000,67.600L97.000,57.600')
          }
          22% {
            d:path('M85.000,68.200L97.000,58.200')
          }
          23% {
            d:path('M85.000,68.800L97.000,58.800')
          }
          24% {
            d:path('M85.000,69.400L97.000,59.400')
          }
          25% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          26% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          27% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          28% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          29% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          30% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          31% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          32% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          33% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          34% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          35% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          36% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          37% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          38% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          39% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          40% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          41% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          42% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          43% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          44% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          45% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          46% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          47% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          48% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          49% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          50% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          51% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          52% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          53% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          54% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          55% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          56% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          57% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          58% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          59% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          60% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          61% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          62% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          63% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          64% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          65% {
            d:path('M85.000,70.000L97.000,60.000')
          }
          66% {
            d:path('M85.467,68.533L97.467,58.533')
          }
          67% {
            d:path('M85.933,67.067L97.933,57.067')
          }
          68% {
            d:path('M86.400,65.600L98.400,55.600')
          }
          69% {
            d:path('M86.867,64.133L98.867,54.133')
          }
          70% {
            d:path('M87.333,62.667L99.333,52.667')
          }
          71% {
            d:path('M87.800,61.200L99.800,51.200')
          }
          72% {
            d:path('M88.267,59.733L100.267,49.733')
          }
          73% {
            d:path('M88.733,58.267L100.733,48.267')
          }
          74% {
            d:path('M89.200,56.800L101.200,46.800')
          }
          75% {
            d:path('M89.667,55.333L101.667,45.333')
          }
          76% {
            d:path('M90.133,53.867L102.133,43.867')
          }
          77% {
            d:path('M90.600,52.400L102.600,42.400')
          }
          78% {
            d:path('M91.067,50.933L103.067,40.933')
          }
          79% {
            d:path('M91.533,49.467L103.533,39.467')
          }
          80% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          81% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          82% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          83% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          84% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          85% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          86% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          87% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          88% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          89% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          90% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          91% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          92% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          93% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          94% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          95% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          96% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          97% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          98% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          99% {
            d:path('M92.000,48.000L104.000,38.000')
          }
          100% {
            d:path('M92.000,48.000L104.000,38.000')
          }
        }
        .b6 {
          animation:b6 14s linear infinite;
        }
        @keyframes b6 {
          0% {
            d:path('M97.000,51.000L109.000,61.000')
          }
          1% {
            d:path('M97.000,51.000L109.000,61.000')
          }
          2% {
            d:path('M97.000,51.000L109.000,61.000')
          }
          3% {
            d:path('M97.000,51.000L109.000,61.000')
          }
          4% {
            d:path('M97.000,51.000L109.000,61.000')
          }
          5% {
            d:path('M97.000,51.000L109.000,61.000')
          }
          6% {
            d:path('M97.000,51.000L109.000,61.000')
          }
          7% {
            d:path('M97.000,51.000L109.000,61.000')
          }
          8% {
            d:path('M97.000,51.000L109.000,61.000')
          }
          9% {
            d:path('M97.000,51.000L109.000,61.000')
          }
          10% {
            d:path('M97.000,51.000L109.000,61.000')
          }
          11% {
            d:path('M97.000,51.600L109.000,61.600')
          }
          12% {
            d:path('M97.000,52.200L109.000,62.200')
          }
          13% {
            d:path('M97.000,52.800L109.000,62.800')
          }
          14% {
            d:path('M97.000,53.400L109.000,63.400')
          }
          15% {
            d:path('M97.000,54.000L109.000,64.000')
          }
          16% {
            d:path('M97.000,54.600L109.000,64.600')
          }
          17% {
            d:path('M97.000,55.200L109.000,65.200')
          }
          18% {
            d:path('M97.000,55.800L109.000,65.800')
          }
          19% {
            d:path('M97.000,56.400L109.000,66.400')
          }
          20% {
            d:path('M97.000,57.000L109.000,67.000')
          }
          21% {
            d:path('M97.000,57.600L109.000,67.600')
          }
          22% {
            d:path('M97.000,58.200L109.000,68.200')
          }
          23% {
            d:path('M97.000,58.800L109.000,68.800')
          }
          24% {
            d:path('M97.000,59.400L109.000,69.400')
          }
          25% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          26% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          27% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          28% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          29% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          30% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          31% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          32% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          33% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          34% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          35% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          36% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          37% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          38% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          39% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          40% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          41% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          42% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          43% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          44% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          45% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          46% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          47% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          48% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          49% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          50% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          51% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          52% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          53% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          54% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          55% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          56% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          57% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          58% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          59% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          60% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          61% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          62% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          63% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          64% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          65% {
            d:path('M97.000,60.000L109.000,70.000')
          }
          66% {
            d:path('M97.467,58.533L109.467,68.533')
          }
          67% {
            d:path('M97.933,57.067L109.933,67.067')
          }
          68% {
            d:path('M98.400,55.600L110.400,65.600')
          }
          69% {
            d:path('M98.867,54.133L110.867,64.133')
          }
          70% {
            d:path('M99.333,52.667L111.333,62.667')
          }
          71% {
            d:path('M99.800,51.200L111.800,61.200')
          }
          72% {
            d:path('M100.267,49.733L112.267,59.733')
          }
          73% {
            d:path('M100.733,48.267L112.733,58.267')
          }
          74% {
            d:path('M101.200,46.800L113.200,56.800')
          }
          75% {
            d:path('M101.667,45.333L113.667,55.333')
          }
          76% {
            d:path('M102.133,43.867L114.133,53.867')
          }
          77% {
            d:path('M102.600,42.400L114.600,52.400')
          }
          78% {
            d:path('M103.067,40.933L115.067,50.933')
          }
          79% {
            d:path('M103.533,39.467L115.533,49.467')
          }
          80% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          81% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          82% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          83% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          84% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          85% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          86% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          87% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          88% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          89% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          90% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          91% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          92% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          93% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          94% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          95% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          96% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          97% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          98% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          99% {
            d:path('M104.000,38.000L116.000,48.000')
          }
          100% {
            d:path('M104.000,38.000L116.000,48.000')
          }
        }
        .carbon {
          fill:#84b8a0
        }
        .bond {
          fill:none;
          stroke:#a1c6b5;
          stroke-width:1.7
        }
        .site {
          fill:#f3c977
        }
        .contact {
          fill:none;
          stroke:#f3c977;
          stroke-width:1;
          stroke-dasharray:2 2;
          opacity:0;
          animation:contact 14s linear infinite
        }
        .hydrogen {
          fill:#f3c977;
          transform:translate(54px,36px);
          animation:hydrogen 14s linear infinite
        }
        .hydrogen-bond {
          fill:none;
          stroke:#f3c977;
          stroke-width:1
        }
        .donor {
          opacity:0;
          animation:donor 14s linear infinite,donorFade 14s linear infinite
        }
        .recipient {
          animation:recipient 14s linear infinite,recipientFade 14s linear infinite
        }
        .pi {
          animation:pi 14s linear infinite,piFade 14s linear infinite
        }
        .cycle {
          animation:cycle 14s linear infinite
        }
        @keyframes hydrogen {
          0% {
            transform:translate(85px,49px)
          }
          1% {
            transform:translate(85px,49px)
          }
          2% {
            transform:translate(85px,49px)
          }
          3% {
            transform:translate(85px,49px)
          }
          4% {
            transform:translate(85px,49px)
          }
          5% {
            transform:translate(85px,49px)
          }
          6% {
            transform:translate(85px,49px)
          }
          7% {
            transform:translate(85px,49px)
          }
          8% {
            transform:translate(85px,49px)
          }
          9% {
            transform:translate(85px,49px)
          }
          10% {
            transform:translate(85px,49px)
          }
          11% {
            transform:translate(85px,49.6px)
          }
          12% {
            transform:translate(85px,50.2px)
          }
          13% {
            transform:translate(85px,50.8px)
          }
          14% {
            transform:translate(85px,51.4px)
          }
          15% {
            transform:translate(85px,52px)
          }
          16% {
            transform:translate(85px,52.6px)
          }
          17% {
            transform:translate(85px,53.2px)
          }
          18% {
            transform:translate(85px,53.8px)
          }
          19% {
            transform:translate(85px,54.4px)
          }
          20% {
            transform:translate(85px,55px)
          }
          21% {
            transform:translate(85px,55.6px)
          }
          22% {
            transform:translate(85px,56.2px)
          }
          23% {
            transform:translate(85px,56.8px)
          }
          24% {
            transform:translate(85px,57.4px)
          }
          25% {
            transform:translate(85px,58px)
          }
          26% {
            transform:translate(85px,58px)
          }
          27% {
            transform:translate(85px,58px)
          }
          28% {
            transform:translate(85px,58px)
          }
          29% {
            transform:translate(85px,58px)
          }
          30% {
            transform:translate(85px,58px)
          }
          31% {
            transform:translate(85px,58px)
          }
          32% {
            transform:translate(85px,58px)
          }
          33% {
            transform:translate(85px,58px)
          }
          34% {
            transform:translate(85px,58px)
          }
          35% {
            transform:translate(85px,58px)
          }
          36% {
            transform:translate(85px,58px)
          }
          37% {
            transform:translate(85px,58px)
          }
          38% {
            transform:translate(85px,58px)
          }
          39% {
            transform:translate(85px,58px)
          }
          40% {
            transform:translate(85px,58px)
          }
          41% {
            transform:translate(85px,58px)
          }
          42% {
            transform:translate(85px,58px)
          }
          43% {
            transform:translate(85px,58px)
          }
          44% {
            transform:translate(85px,58px)
          }
          45% {
            transform:translate(85px,58px)
          }
          46% {
            transform:translate(83.4px,55.505px)
          }
          47% {
            transform:translate(81.8px,53.119px)
          }
          48% {
            transform:translate(80.2px,50.947px)
          }
          49% {
            transform:translate(78.6px,49.082px)
          }
          50% {
            transform:translate(77px,47.608px)
          }
          51% {
            transform:translate(75.4px,46.587px)
          }
          52% {
            transform:translate(73.8px,46.066px)
          }
          53% {
            transform:translate(72.2px,46.066px)
          }
          54% {
            transform:translate(70.6px,46.587px)
          }
          55% {
            transform:translate(69px,47.608px)
          }
          56% {
            transform:translate(67.4px,49.082px)
          }
          57% {
            transform:translate(65.8px,50.947px)
          }
          58% {
            transform:translate(64.2px,53.119px)
          }
          59% {
            transform:translate(62.6px,55.505px)
          }
          60% {
            transform:translate(61px,58px)
          }
          61% {
            transform:translate(61px,58px)
          }
          62% {
            transform:translate(61px,58px)
          }
          63% {
            transform:translate(61px,58px)
          }
          64% {
            transform:translate(61px,58px)
          }
          65% {
            transform:translate(61px,58px)
          }
          66% {
            transform:translate(60.533px,56.533px)
          }
          67% {
            transform:translate(60.067px,55.067px)
          }
          68% {
            transform:translate(59.6px,53.6px)
          }
          69% {
            transform:translate(59.133px,52.133px)
          }
          70% {
            transform:translate(58.667px,50.667px)
          }
          71% {
            transform:translate(58.2px,49.2px)
          }
          72% {
            transform:translate(57.733px,47.733px)
          }
          73% {
            transform:translate(57.267px,46.267px)
          }
          74% {
            transform:translate(56.8px,44.8px)
          }
          75% {
            transform:translate(56.333px,43.333px)
          }
          76% {
            transform:translate(55.867px,41.867px)
          }
          77% {
            transform:translate(55.4px,40.4px)
          }
          78% {
            transform:translate(54.933px,38.933px)
          }
          79% {
            transform:translate(54.467px,37.467px)
          }
          80% {
            transform:translate(54px,36px)
          }
          81% {
            transform:translate(54px,36px)
          }
          82% {
            transform:translate(54px,36px)
          }
          83% {
            transform:translate(54px,36px)
          }
          84% {
            transform:translate(54px,36px)
          }
          85% {
            transform:translate(54px,36px)
          }
          86% {
            transform:translate(54px,36px)
          }
          87% {
            transform:translate(54px,36px)
          }
          88% {
            transform:translate(54px,36px)
          }
          89% {
            transform:translate(54px,36px)
          }
          90% {
            transform:translate(54px,36px)
          }
          91% {
            transform:translate(54px,36px)
          }
          92% {
            transform:translate(54px,36px)
          }
          93% {
            transform:translate(54px,36px)
          }
          94% {
            transform:translate(54px,36px)
          }
          95% {
            transform:translate(54px,36px)
          }
          96% {
            transform:translate(54px,36px)
          }
          97% {
            transform:translate(54px,36px)
          }
          98% {
            transform:translate(54px,36px)
          }
          99% {
            transform:translate(54px,36px)
          }
          100% {
            transform:translate(54px,36px)
          }
        }
        @keyframes donor {
          0% {
            d:path('M85.000,61.000L85.000,49.000')
          }
          1% {
            d:path('M85.000,61.000L85.000,49.000')
          }
          2% {
            d:path('M85.000,61.000L85.000,49.000')
          }
          3% {
            d:path('M85.000,61.000L85.000,49.000')
          }
          4% {
            d:path('M85.000,61.000L85.000,49.000')
          }
          5% {
            d:path('M85.000,61.000L85.000,49.000')
          }
          6% {
            d:path('M85.000,61.000L85.000,49.000')
          }
          7% {
            d:path('M85.000,61.000L85.000,49.000')
          }
          8% {
            d:path('M85.000,61.000L85.000,49.000')
          }
          9% {
            d:path('M85.000,61.000L85.000,49.000')
          }
          10% {
            d:path('M85.000,61.000L85.000,49.000')
          }
          11% {
            d:path('M85.000,61.600L85.000,49.600')
          }
          12% {
            d:path('M85.000,62.200L85.000,50.200')
          }
          13% {
            d:path('M85.000,62.800L85.000,50.800')
          }
          14% {
            d:path('M85.000,63.400L85.000,51.400')
          }
          15% {
            d:path('M85.000,64.000L85.000,52.000')
          }
          16% {
            d:path('M85.000,64.600L85.000,52.600')
          }
          17% {
            d:path('M85.000,65.200L85.000,53.200')
          }
          18% {
            d:path('M85.000,65.800L85.000,53.800')
          }
          19% {
            d:path('M85.000,66.400L85.000,54.400')
          }
          20% {
            d:path('M85.000,67.000L85.000,55.000')
          }
          21% {
            d:path('M85.000,67.600L85.000,55.600')
          }
          22% {
            d:path('M85.000,68.200L85.000,56.200')
          }
          23% {
            d:path('M85.000,68.800L85.000,56.800')
          }
          24% {
            d:path('M85.000,69.400L85.000,57.400')
          }
          25% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          26% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          27% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          28% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          29% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          30% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          31% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          32% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          33% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          34% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          35% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          36% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          37% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          38% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          39% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          40% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          41% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          42% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          43% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          44% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          45% {
            d:path('M85.000,70.000L85.000,58.000')
          }
          46% {
            d:path('M85.000,70.000L83.400,55.505')
          }
          47% {
            d:path('M85.000,70.000L81.800,53.119')
          }
          48% {
            d:path('M85.000,70.000L80.200,50.947')
          }
          49% {
            d:path('M85.000,70.000L78.600,49.082')
          }
          50% {
            d:path('M85.000,70.000L77.000,47.608')
          }
          51% {
            d:path('M85.000,70.000L75.400,46.587')
          }
          52% {
            d:path('M85.000,70.000L73.800,46.066')
          }
          53% {
            d:path('M85.000,70.000L72.200,46.066')
          }
          54% {
            d:path('M85.000,70.000L70.600,46.587')
          }
          55% {
            d:path('M85.000,70.000L69.000,47.608')
          }
          56% {
            d:path('M85.000,70.000L67.400,49.082')
          }
          57% {
            d:path('M85.000,70.000L65.800,50.947')
          }
          58% {
            d:path('M85.000,70.000L64.200,53.119')
          }
          59% {
            d:path('M85.000,70.000L62.600,55.505')
          }
          60% {
            d:path('M85.000,70.000L61.000,58.000')
          }
          61% {
            d:path('M85.000,70.000L61.000,58.000')
          }
          62% {
            d:path('M85.000,70.000L61.000,58.000')
          }
          63% {
            d:path('M85.000,70.000L61.000,58.000')
          }
          64% {
            d:path('M85.000,70.000L61.000,58.000')
          }
          65% {
            d:path('M85.000,70.000L61.000,58.000')
          }
          66% {
            d:path('M85.467,68.533L60.533,56.533')
          }
          67% {
            d:path('M85.933,67.067L60.067,55.067')
          }
          68% {
            d:path('M86.400,65.600L59.600,53.600')
          }
          69% {
            d:path('M86.867,64.133L59.133,52.133')
          }
          70% {
            d:path('M87.333,62.667L58.667,50.667')
          }
          71% {
            d:path('M87.800,61.200L58.200,49.200')
          }
          72% {
            d:path('M88.267,59.733L57.733,47.733')
          }
          73% {
            d:path('M88.733,58.267L57.267,46.267')
          }
          74% {
            d:path('M89.200,56.800L56.800,44.800')
          }
          75% {
            d:path('M89.667,55.333L56.333,43.333')
          }
          76% {
            d:path('M90.133,53.867L55.867,41.867')
          }
          77% {
            d:path('M90.600,52.400L55.400,40.400')
          }
          78% {
            d:path('M91.067,50.933L54.933,38.933')
          }
          79% {
            d:path('M91.533,49.467L54.467,37.467')
          }
          80% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          81% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          82% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          83% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          84% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          85% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          86% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          87% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          88% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          89% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          90% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          91% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          92% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          93% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          94% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          95% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          96% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          97% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          98% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          99% {
            d:path('M92.000,48.000L54.000,36.000')
          }
          100% {
            d:path('M92.000,48.000L54.000,36.000')
          }
        }
        @keyframes recipient {
          0% {
            d:path('M61.000,61.000L85.000,49.000')
          }
          1% {
            d:path('M61.000,61.000L85.000,49.000')
          }
          2% {
            d:path('M61.000,61.000L85.000,49.000')
          }
          3% {
            d:path('M61.000,61.000L85.000,49.000')
          }
          4% {
            d:path('M61.000,61.000L85.000,49.000')
          }
          5% {
            d:path('M61.000,61.000L85.000,49.000')
          }
          6% {
            d:path('M61.000,61.000L85.000,49.000')
          }
          7% {
            d:path('M61.000,61.000L85.000,49.000')
          }
          8% {
            d:path('M61.000,61.000L85.000,49.000')
          }
          9% {
            d:path('M61.000,61.000L85.000,49.000')
          }
          10% {
            d:path('M61.000,61.000L85.000,49.000')
          }
          11% {
            d:path('M61.000,61.600L85.000,49.600')
          }
          12% {
            d:path('M61.000,62.200L85.000,50.200')
          }
          13% {
            d:path('M61.000,62.800L85.000,50.800')
          }
          14% {
            d:path('M61.000,63.400L85.000,51.400')
          }
          15% {
            d:path('M61.000,64.000L85.000,52.000')
          }
          16% {
            d:path('M61.000,64.600L85.000,52.600')
          }
          17% {
            d:path('M61.000,65.200L85.000,53.200')
          }
          18% {
            d:path('M61.000,65.800L85.000,53.800')
          }
          19% {
            d:path('M61.000,66.400L85.000,54.400')
          }
          20% {
            d:path('M61.000,67.000L85.000,55.000')
          }
          21% {
            d:path('M61.000,67.600L85.000,55.600')
          }
          22% {
            d:path('M61.000,68.200L85.000,56.200')
          }
          23% {
            d:path('M61.000,68.800L85.000,56.800')
          }
          24% {
            d:path('M61.000,69.400L85.000,57.400')
          }
          25% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          26% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          27% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          28% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          29% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          30% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          31% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          32% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          33% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          34% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          35% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          36% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          37% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          38% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          39% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          40% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          41% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          42% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          43% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          44% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          45% {
            d:path('M61.000,70.000L85.000,58.000')
          }
          46% {
            d:path('M61.000,70.000L83.400,55.505')
          }
          47% {
            d:path('M61.000,70.000L81.800,53.119')
          }
          48% {
            d:path('M61.000,70.000L80.200,50.947')
          }
          49% {
            d:path('M61.000,70.000L78.600,49.082')
          }
          50% {
            d:path('M61.000,70.000L77.000,47.608')
          }
          51% {
            d:path('M61.000,70.000L75.400,46.587')
          }
          52% {
            d:path('M61.000,70.000L73.800,46.066')
          }
          53% {
            d:path('M61.000,70.000L72.200,46.066')
          }
          54% {
            d:path('M61.000,70.000L70.600,46.587')
          }
          55% {
            d:path('M61.000,70.000L69.000,47.608')
          }
          56% {
            d:path('M61.000,70.000L67.400,49.082')
          }
          57% {
            d:path('M61.000,70.000L65.800,50.947')
          }
          58% {
            d:path('M61.000,70.000L64.200,53.119')
          }
          59% {
            d:path('M61.000,70.000L62.600,55.505')
          }
          60% {
            d:path('M61.000,70.000L61.000,58.000')
          }
          61% {
            d:path('M61.000,70.000L61.000,58.000')
          }
          62% {
            d:path('M61.000,70.000L61.000,58.000')
          }
          63% {
            d:path('M61.000,70.000L61.000,58.000')
          }
          64% {
            d:path('M61.000,70.000L61.000,58.000')
          }
          65% {
            d:path('M61.000,70.000L61.000,58.000')
          }
          66% {
            d:path('M60.533,68.533L60.533,56.533')
          }
          67% {
            d:path('M60.067,67.067L60.067,55.067')
          }
          68% {
            d:path('M59.600,65.600L59.600,53.600')
          }
          69% {
            d:path('M59.133,64.133L59.133,52.133')
          }
          70% {
            d:path('M58.667,62.667L58.667,50.667')
          }
          71% {
            d:path('M58.200,61.200L58.200,49.200')
          }
          72% {
            d:path('M57.733,59.733L57.733,47.733')
          }
          73% {
            d:path('M57.267,58.267L57.267,46.267')
          }
          74% {
            d:path('M56.800,56.800L56.800,44.800')
          }
          75% {
            d:path('M56.333,55.333L56.333,43.333')
          }
          76% {
            d:path('M55.867,53.867L55.867,41.867')
          }
          77% {
            d:path('M55.400,52.400L55.400,40.400')
          }
          78% {
            d:path('M54.933,50.933L54.933,38.933')
          }
          79% {
            d:path('M54.467,49.467L54.467,37.467')
          }
          80% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          81% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          82% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          83% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          84% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          85% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          86% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          87% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          88% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          89% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          90% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          91% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          92% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          93% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          94% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          95% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          96% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          97% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          98% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          99% {
            d:path('M54.000,48.000L54.000,36.000')
          }
          100% {
            d:path('M54.000,48.000L54.000,36.000')
          }
        }
        @keyframes pi {
          0% {
            d:path('M71.079,53.305L83.079,63.305')
          }
          1% {
            d:path('M71.079,53.305L83.079,63.305')
          }
          2% {
            d:path('M71.079,53.305L83.079,63.305')
          }
          3% {
            d:path('M71.079,53.305L83.079,63.305')
          }
          4% {
            d:path('M71.079,53.305L83.079,63.305')
          }
          5% {
            d:path('M71.079,53.305L83.079,63.305')
          }
          6% {
            d:path('M71.079,53.305L83.079,63.305')
          }
          7% {
            d:path('M71.079,53.305L83.079,63.305')
          }
          8% {
            d:path('M71.079,53.305L83.079,63.305')
          }
          9% {
            d:path('M71.079,53.305L83.079,63.305')
          }
          10% {
            d:path('M71.079,53.305L83.079,63.305')
          }
          11% {
            d:path('M71.079,53.905L83.079,63.905')
          }
          12% {
            d:path('M71.079,54.505L83.079,64.505')
          }
          13% {
            d:path('M71.079,55.105L83.079,65.105')
          }
          14% {
            d:path('M71.079,55.705L83.079,65.705')
          }
          15% {
            d:path('M71.079,56.305L83.079,66.305')
          }
          16% {
            d:path('M71.079,56.905L83.079,66.905')
          }
          17% {
            d:path('M71.079,57.505L83.079,67.505')
          }
          18% {
            d:path('M71.079,58.105L83.079,68.105')
          }
          19% {
            d:path('M71.079,58.705L83.079,68.705')
          }
          20% {
            d:path('M71.079,59.305L83.079,69.305')
          }
          21% {
            d:path('M71.079,59.905L83.079,69.905')
          }
          22% {
            d:path('M71.079,60.505L83.079,70.505')
          }
          23% {
            d:path('M71.079,61.105L83.079,71.105')
          }
          24% {
            d:path('M71.079,61.705L83.079,71.705')
          }
          25% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          26% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          27% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          28% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          29% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          30% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          31% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          32% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          33% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          34% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          35% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          36% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          37% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          38% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          39% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          40% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          41% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          42% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          43% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          44% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          45% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          46% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          47% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          48% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          49% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          50% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          51% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          52% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          53% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          54% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          55% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          56% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          57% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          58% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          59% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          60% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          61% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          62% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          63% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          64% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          65% {
            d:path('M71.079,62.305L83.079,72.305')
          }
          66% {
            d:path('M71.546,60.838L83.546,70.838')
          }
          67% {
            d:path('M72.013,59.371L84.013,69.371')
          }
          68% {
            d:path('M72.479,57.905L84.479,67.905')
          }
          69% {
            d:path('M72.946,56.438L84.946,66.438')
          }
          70% {
            d:path('M73.413,54.971L85.413,64.971')
          }
          71% {
            d:path('M73.879,53.505L85.879,63.505')
          }
          72% {
            d:path('M74.346,52.038L86.346,62.038')
          }
          73% {
            d:path('M74.813,50.571L86.813,60.571')
          }
          74% {
            d:path('M75.279,49.105L87.279,59.105')
          }
          75% {
            d:path('M75.746,47.638L87.746,57.638')
          }
          76% {
            d:path('M76.213,46.171L88.213,56.171')
          }
          77% {
            d:path('M76.679,44.705L88.679,54.705')
          }
          78% {
            d:path('M77.146,43.238L89.146,53.238')
          }
          79% {
            d:path('M77.613,41.771L89.613,51.771')
          }
          80% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          81% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          82% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          83% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          84% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          85% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          86% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          87% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          88% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          89% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          90% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          91% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          92% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          93% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          94% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          95% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          96% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          97% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          98% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          99% {
            d:path('M78.079,40.305L90.079,50.305')
          }
          100% {
            d:path('M78.079,40.305L90.079,50.305')
          }
        }
        @keyframes donorFade {
          0%,45% {
            opacity:1
          }
          48%,100% {
            opacity:0
          }
        }
        @keyframes recipientFade {
          0%,57% {
            opacity:0
          }
          60%,100% {
            opacity:1
          }
        }
        @keyframes piFade {
          0%,40% {
            opacity:0
          }
          60%,100% {
            opacity:1
          }
        }
        @keyframes cleave {
          0%,35% {
            opacity:1
          }
          55%,100% {
            opacity:0
          }
        }
        @keyframes contact {
          0%,24%,65%,100% {
            opacity:0
          }
          25%,60% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Catalytic Cracking">
        <path fill="#254234" stroke="#577f64" d="M20,78H120V112H20Z"/>
        <circle class="paper" cx="32" cy="90" r="3.2"/>
        <circle class="paper" cx="48" cy="100" r="3.2"/>
        <circle class="paper" cx="64" cy="90" r="3.2"/>
        <circle class="paper" cx="80" cy="100" r="3.2"/>
        <circle class="paper" cx="96" cy="90" r="3.2"/>
        <circle class="paper" cx="112" cy="100" r="3.2"/>
        <path class="site" d="M67,78L70,74L73,78L70,82Z"/>
        <g class="cycle">
          <path class="contact" d="M61,72L69,76M73,63L71,74"/>
          <path class="bond b0" d="M18.000,38.000L30.000,48.000"/>
          <path class="bond b1" d="M30.000,48.000L42.000,38.000"/>
          <path class="bond b2" d="M42.000,38.000L54.000,48.000"/>
          <path class="bond b3" d="M54.000,48.000L80.000,38.000"/>
          <path class="bond b4" d="M80.000,38.000L92.000,48.000"/>
          <path class="bond b5" d="M92.000,48.000L104.000,38.000"/>
          <path class="bond b6" d="M104.000,38.000L116.000,48.000"/>
          <path class="bond pi" d="M78.079,40.305L90.079,50.305"/>
          <path class="hydrogen-bond donor" d="M92,48L54,36"/>
          <path class="hydrogen-bond recipient" d="M54,48L54,36"/>
          <circle class="carbon carbon0" r="3.1"/>
          <circle class="carbon carbon1" r="3.1"/>
          <circle class="carbon carbon2" r="3.1"/>
          <circle class="carbon carbon3" r="3.1"/>
          <circle class="carbon carbon4" r="3.1"/>
          <circle class="carbon carbon5" r="3.1"/>
          <circle class="carbon carbon6" r="3.1"/>
          <circle class="carbon carbon7" r="3.1"/>
          <circle class="hydrogen" r="2"/>
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

if (!customElements.get("concept-catalytic-cracking")) {
  customElements.define("concept-catalytic-cracking", ConceptCatalyticCracking);
}
