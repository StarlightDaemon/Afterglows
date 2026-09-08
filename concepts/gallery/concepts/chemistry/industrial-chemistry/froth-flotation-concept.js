// Froth Flotation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptFrothFlotation extends HTMLElement {
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
        .b0 {
          transform:translate(116.909px,55.455px);
          opacity:1;
          animation:b0 12s linear infinite
        }
        .m0 {
          transform:translate(116.909px,62.855px);
          animation:m0 12s linear infinite
        }
        @keyframes b0 {
          0% {
            transform:translate(41px,108px);
            opacity:0
          }
          0.5% {
            transform:translate(41px,108px);
            opacity:0
          }
          1% {
            transform:translate(41px,108px);
            opacity:0
          }
          1.5% {
            transform:translate(41px,108px);
            opacity:0
          }
          2% {
            transform:translate(41px,108px);
            opacity:0
          }
          2.5% {
            transform:translate(41px,108px);
            opacity:0
          }
          3% {
            transform:translate(41px,108px);
            opacity:0
          }
          3.5% {
            transform:translate(41px,108px);
            opacity:0.25
          }
          4% {
            transform:translate(41px,108px);
            opacity:0.5
          }
          4.5% {
            transform:translate(41px,106.833px);
            opacity:0.75
          }
          5% {
            transform:translate(41px,105.667px);
            opacity:1
          }
          5.5% {
            transform:translate(41px,104.5px);
            opacity:1
          }
          6% {
            transform:translate(41px,103.333px);
            opacity:1
          }
          6.5% {
            transform:translate(41px,102.167px);
            opacity:1
          }
          7% {
            transform:translate(41px,101px);
            opacity:1
          }
          7.5% {
            transform:translate(41px,99.833px);
            opacity:1
          }
          8% {
            transform:translate(41px,98.667px);
            opacity:1
          }
          8.5% {
            transform:translate(41px,97.5px);
            opacity:1
          }
          9% {
            transform:translate(41px,96.333px);
            opacity:1
          }
          9.5% {
            transform:translate(41px,95.167px);
            opacity:1
          }
          10% {
            transform:translate(41px,94px);
            opacity:1
          }
          10.5% {
            transform:translate(41px,92.833px);
            opacity:1
          }
          11% {
            transform:translate(41px,91.667px);
            opacity:1
          }
          11.5% {
            transform:translate(41px,90.5px);
            opacity:1
          }
          12% {
            transform:translate(41px,89.333px);
            opacity:1
          }
          12.5% {
            transform:translate(41px,88.167px);
            opacity:1
          }
          13% {
            transform:translate(41px,87px);
            opacity:1
          }
          13.5% {
            transform:translate(41px,85.833px);
            opacity:1
          }
          14% {
            transform:translate(41px,84.667px);
            opacity:1
          }
          14.5% {
            transform:translate(41px,83.5px);
            opacity:1
          }
          15% {
            transform:translate(41px,82.333px);
            opacity:1
          }
          15.5% {
            transform:translate(41px,81.167px);
            opacity:1
          }
          16% {
            transform:translate(41px,80px);
            opacity:1
          }
          16.5% {
            transform:translate(41px,80px);
            opacity:1
          }
          17% {
            transform:translate(41px,80px);
            opacity:1
          }
          17.5% {
            transform:translate(41px,80px);
            opacity:1
          }
          18% {
            transform:translate(41px,80px);
            opacity:1
          }
          18.5% {
            transform:translate(41px,80px);
            opacity:1
          }
          19% {
            transform:translate(41px,80px);
            opacity:1
          }
          19.5% {
            transform:translate(41px,80px);
            opacity:1
          }
          20% {
            transform:translate(41px,80px);
            opacity:1
          }
          20.5% {
            transform:translate(41px,78.542px);
            opacity:1
          }
          21% {
            transform:translate(41px,77.083px);
            opacity:1
          }
          21.5% {
            transform:translate(41px,75.625px);
            opacity:1
          }
          22% {
            transform:translate(41px,74.167px);
            opacity:1
          }
          22.5% {
            transform:translate(41px,72.708px);
            opacity:1
          }
          23% {
            transform:translate(41px,71.25px);
            opacity:1
          }
          23.5% {
            transform:translate(41px,69.792px);
            opacity:1
          }
          24% {
            transform:translate(41px,68.333px);
            opacity:1
          }
          24.5% {
            transform:translate(41px,66.875px);
            opacity:1
          }
          25% {
            transform:translate(41px,65.417px);
            opacity:1
          }
          25.5% {
            transform:translate(41px,63.958px);
            opacity:1
          }
          26% {
            transform:translate(41px,62.5px);
            opacity:1
          }
          26.5% {
            transform:translate(41px,61.042px);
            opacity:1
          }
          27% {
            transform:translate(41px,59.583px);
            opacity:1
          }
          27.5% {
            transform:translate(41px,58.125px);
            opacity:1
          }
          28% {
            transform:translate(41px,56.667px);
            opacity:1
          }
          28.5% {
            transform:translate(41px,55.208px);
            opacity:1
          }
          29% {
            transform:translate(41px,53.75px);
            opacity:1
          }
          29.5% {
            transform:translate(41px,52.292px);
            opacity:1
          }
          30% {
            transform:translate(41px,50.833px);
            opacity:1
          }
          30.5% {
            transform:translate(41px,49.375px);
            opacity:1
          }
          31% {
            transform:translate(41px,47.917px);
            opacity:1
          }
          31.5% {
            transform:translate(41px,46.458px);
            opacity:1
          }
          32% {
            transform:translate(41px,45px);
            opacity:1
          }
          32.5% {
            transform:translate(45.278px,45.111px);
            opacity:1
          }
          33% {
            transform:translate(49.556px,45.222px);
            opacity:1
          }
          33.5% {
            transform:translate(53.833px,45.333px);
            opacity:1
          }
          34% {
            transform:translate(58.111px,45.444px);
            opacity:1
          }
          34.5% {
            transform:translate(62.389px,45.556px);
            opacity:1
          }
          35% {
            transform:translate(66.667px,45.667px);
            opacity:1
          }
          35.5% {
            transform:translate(70.944px,45.778px);
            opacity:1
          }
          36% {
            transform:translate(75.222px,45.889px);
            opacity:1
          }
          36.5% {
            transform:translate(79.5px,46px);
            opacity:1
          }
          37% {
            transform:translate(83.778px,46.111px);
            opacity:1
          }
          37.5% {
            transform:translate(88.056px,46.222px);
            opacity:1
          }
          38% {
            transform:translate(92.333px,46.333px);
            opacity:1
          }
          38.5% {
            transform:translate(96.611px,46.444px);
            opacity:1
          }
          39% {
            transform:translate(100.889px,46.556px);
            opacity:1
          }
          39.5% {
            transform:translate(105.167px,46.667px);
            opacity:1
          }
          40% {
            transform:translate(109.444px,46.778px);
            opacity:1
          }
          40.5% {
            transform:translate(113.722px,46.889px);
            opacity:1
          }
          41% {
            transform:translate(118px,47px);
            opacity:1
          }
          41.5% {
            transform:translate(117.818px,48.409px);
            opacity:1
          }
          42% {
            transform:translate(117.636px,49.818px);
            opacity:1
          }
          42.5% {
            transform:translate(117.455px,51.227px);
            opacity:1
          }
          43% {
            transform:translate(117.273px,52.636px);
            opacity:1
          }
          43.5% {
            transform:translate(117.091px,54.045px);
            opacity:1
          }
          44% {
            transform:translate(116.909px,55.455px);
            opacity:1
          }
          44.5% {
            transform:translate(116.727px,56.864px);
            opacity:1
          }
          45% {
            transform:translate(116.545px,58.273px);
            opacity:1
          }
          45.5% {
            transform:translate(116.364px,59.682px);
            opacity:1
          }
          46% {
            transform:translate(116.182px,61.091px);
            opacity:1
          }
          46.5% {
            transform:translate(116px,62.5px);
            opacity:1
          }
          47% {
            transform:translate(115.818px,63.909px);
            opacity:1
          }
          47.5% {
            transform:translate(115.636px,65.318px);
            opacity:1
          }
          48% {
            transform:translate(115.455px,66.727px);
            opacity:1
          }
          48.5% {
            transform:translate(115.273px,68.136px);
            opacity:1
          }
          49% {
            transform:translate(115.091px,69.545px);
            opacity:1
          }
          49.5% {
            transform:translate(114.909px,70.955px);
            opacity:1
          }
          50% {
            transform:translate(114.727px,72.364px);
            opacity:1
          }
          50.5% {
            transform:translate(114.545px,73.773px);
            opacity:1
          }
          51% {
            transform:translate(114.364px,75.182px);
            opacity:1
          }
          51.5% {
            transform:translate(114.182px,76.591px);
            opacity:1
          }
          52% {
            transform:translate(114px,78px);
            opacity:1
          }
          52.5% {
            transform:translate(114px,78px);
            opacity:0.875
          }
          53% {
            transform:translate(114px,78px);
            opacity:0.75
          }
          53.5% {
            transform:translate(114px,78px);
            opacity:0.625
          }
          54% {
            transform:translate(114px,78px);
            opacity:0.5
          }
          54.5% {
            transform:translate(114px,78px);
            opacity:0.375
          }
          55% {
            transform:translate(114px,78px);
            opacity:0.25
          }
          55.5% {
            transform:translate(114px,78px);
            opacity:0.125
          }
          56% {
            transform:translate(114px,78px);
            opacity:0
          }
          56.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          57% {
            transform:translate(114px,78px);
            opacity:0
          }
          57.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          58% {
            transform:translate(114px,78px);
            opacity:0
          }
          58.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          59% {
            transform:translate(114px,78px);
            opacity:0
          }
          59.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          60% {
            transform:translate(114px,78px);
            opacity:0
          }
          60.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          61% {
            transform:translate(114px,78px);
            opacity:0
          }
          61.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          62% {
            transform:translate(114px,78px);
            opacity:0
          }
          62.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          63% {
            transform:translate(114px,78px);
            opacity:0
          }
          63.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          64% {
            transform:translate(114px,78px);
            opacity:0
          }
          64.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          65% {
            transform:translate(114px,78px);
            opacity:0
          }
          65.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          66% {
            transform:translate(114px,78px);
            opacity:0
          }
          66.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          67% {
            transform:translate(114px,78px);
            opacity:0
          }
          67.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          68% {
            transform:translate(114px,78px);
            opacity:0
          }
          68.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          69% {
            transform:translate(114px,78px);
            opacity:0
          }
          69.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          70% {
            transform:translate(114px,78px);
            opacity:0
          }
          70.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          71% {
            transform:translate(114px,78px);
            opacity:0
          }
          71.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          72% {
            transform:translate(114px,78px);
            opacity:0
          }
          72.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          73% {
            transform:translate(114px,78px);
            opacity:0
          }
          73.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          74% {
            transform:translate(114px,78px);
            opacity:0
          }
          74.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          75% {
            transform:translate(114px,78px);
            opacity:0
          }
          75.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          76% {
            transform:translate(114px,78px);
            opacity:0
          }
          76.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          77% {
            transform:translate(114px,78px);
            opacity:0
          }
          77.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          78% {
            transform:translate(114px,78px);
            opacity:0
          }
          78.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          79% {
            transform:translate(114px,78px);
            opacity:0
          }
          79.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          80% {
            transform:translate(114px,78px);
            opacity:0
          }
          80.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          81% {
            transform:translate(114px,78px);
            opacity:0
          }
          81.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          82% {
            transform:translate(114px,78px);
            opacity:0
          }
          82.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          83% {
            transform:translate(114px,78px);
            opacity:0
          }
          83.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          84% {
            transform:translate(114px,78px);
            opacity:0
          }
          84.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          85% {
            transform:translate(114px,78px);
            opacity:0
          }
          85.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          86% {
            transform:translate(114px,78px);
            opacity:0
          }
          86.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          87% {
            transform:translate(114px,78px);
            opacity:0
          }
          87.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          88% {
            transform:translate(114px,78px);
            opacity:0
          }
          88.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          89% {
            transform:translate(114px,78px);
            opacity:0
          }
          89.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          90% {
            transform:translate(114px,78px);
            opacity:0
          }
          90.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          91% {
            transform:translate(114px,78px);
            opacity:0
          }
          91.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          92% {
            transform:translate(114px,78px);
            opacity:0
          }
          92.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          93% {
            transform:translate(114px,78px);
            opacity:0
          }
          93.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          94% {
            transform:translate(114px,78px);
            opacity:0
          }
          94.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          95% {
            transform:translate(114px,78px);
            opacity:0
          }
          95.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          96% {
            transform:translate(114px,78px);
            opacity:0
          }
          96.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          97% {
            transform:translate(114px,78px);
            opacity:0
          }
          97.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          98% {
            transform:translate(114px,78px);
            opacity:0
          }
          98.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          99% {
            transform:translate(114px,78px);
            opacity:0
          }
          99.5% {
            transform:translate(114px,78px);
            opacity:0
          }
          100% {
            transform:translate(114px,78px);
            opacity:0
          }
        }
        @keyframes m0 {
          0% {
            transform:translate(49px,87px)
          }
          0.5% {
            transform:translate(49px,87px)
          }
          1% {
            transform:translate(49px,87px)
          }
          1.5% {
            transform:translate(49px,87px)
          }
          2% {
            transform:translate(49px,87px)
          }
          2.5% {
            transform:translate(49px,87px)
          }
          3% {
            transform:translate(49px,87px)
          }
          3.5% {
            transform:translate(49px,87px)
          }
          4% {
            transform:translate(49px,87px)
          }
          4.5% {
            transform:translate(49px,87px)
          }
          5% {
            transform:translate(49px,87px)
          }
          5.5% {
            transform:translate(49px,87px)
          }
          6% {
            transform:translate(49px,87px)
          }
          6.5% {
            transform:translate(49px,87px)
          }
          7% {
            transform:translate(49px,87px)
          }
          7.5% {
            transform:translate(49px,87px)
          }
          8% {
            transform:translate(49px,87px)
          }
          8.5% {
            transform:translate(49px,87px)
          }
          9% {
            transform:translate(49px,87px)
          }
          9.5% {
            transform:translate(49px,87px)
          }
          10% {
            transform:translate(49px,87px)
          }
          10.5% {
            transform:translate(49px,87px)
          }
          11% {
            transform:translate(49px,87px)
          }
          11.5% {
            transform:translate(49px,87px)
          }
          12% {
            transform:translate(49px,87px)
          }
          12.5% {
            transform:translate(49px,87px)
          }
          13% {
            transform:translate(49px,87px)
          }
          13.5% {
            transform:translate(49px,87px)
          }
          14% {
            transform:translate(49px,87px)
          }
          14.5% {
            transform:translate(49px,87px)
          }
          15% {
            transform:translate(49px,87px)
          }
          15.5% {
            transform:translate(49px,87px)
          }
          16% {
            transform:translate(49px,87px)
          }
          16.5% {
            transform:translate(48px,87.05px)
          }
          17% {
            transform:translate(47px,87.1px)
          }
          17.5% {
            transform:translate(46px,87.15px)
          }
          18% {
            transform:translate(45px,87.2px)
          }
          18.5% {
            transform:translate(44px,87.25px)
          }
          19% {
            transform:translate(43px,87.3px)
          }
          19.5% {
            transform:translate(42px,87.35px)
          }
          20% {
            transform:translate(41px,87.4px)
          }
          20.5% {
            transform:translate(41px,85.942px)
          }
          21% {
            transform:translate(41px,84.483px)
          }
          21.5% {
            transform:translate(41px,83.025px)
          }
          22% {
            transform:translate(41px,81.567px)
          }
          22.5% {
            transform:translate(41px,80.108px)
          }
          23% {
            transform:translate(41px,78.65px)
          }
          23.5% {
            transform:translate(41px,77.192px)
          }
          24% {
            transform:translate(41px,75.733px)
          }
          24.5% {
            transform:translate(41px,74.275px)
          }
          25% {
            transform:translate(41px,72.817px)
          }
          25.5% {
            transform:translate(41px,71.358px)
          }
          26% {
            transform:translate(41px,69.9px)
          }
          26.5% {
            transform:translate(41px,68.442px)
          }
          27% {
            transform:translate(41px,66.983px)
          }
          27.5% {
            transform:translate(41px,65.525px)
          }
          28% {
            transform:translate(41px,64.067px)
          }
          28.5% {
            transform:translate(41px,62.608px)
          }
          29% {
            transform:translate(41px,61.15px)
          }
          29.5% {
            transform:translate(41px,59.692px)
          }
          30% {
            transform:translate(41px,58.233px)
          }
          30.5% {
            transform:translate(41px,56.775px)
          }
          31% {
            transform:translate(41px,55.317px)
          }
          31.5% {
            transform:translate(41px,53.858px)
          }
          32% {
            transform:translate(41px,52.4px)
          }
          32.5% {
            transform:translate(45.278px,52.511px)
          }
          33% {
            transform:translate(49.556px,52.622px)
          }
          33.5% {
            transform:translate(53.833px,52.733px)
          }
          34% {
            transform:translate(58.111px,52.844px)
          }
          34.5% {
            transform:translate(62.389px,52.956px)
          }
          35% {
            transform:translate(66.667px,53.067px)
          }
          35.5% {
            transform:translate(70.944px,53.178px)
          }
          36% {
            transform:translate(75.222px,53.289px)
          }
          36.5% {
            transform:translate(79.5px,53.4px)
          }
          37% {
            transform:translate(83.778px,53.511px)
          }
          37.5% {
            transform:translate(88.056px,53.622px)
          }
          38% {
            transform:translate(92.333px,53.733px)
          }
          38.5% {
            transform:translate(96.611px,53.844px)
          }
          39% {
            transform:translate(100.889px,53.956px)
          }
          39.5% {
            transform:translate(105.167px,54.067px)
          }
          40% {
            transform:translate(109.444px,54.178px)
          }
          40.5% {
            transform:translate(113.722px,54.289px)
          }
          41% {
            transform:translate(118px,54.4px)
          }
          41.5% {
            transform:translate(117.818px,55.809px)
          }
          42% {
            transform:translate(117.636px,57.218px)
          }
          42.5% {
            transform:translate(117.455px,58.627px)
          }
          43% {
            transform:translate(117.273px,60.036px)
          }
          43.5% {
            transform:translate(117.091px,61.445px)
          }
          44% {
            transform:translate(116.909px,62.855px)
          }
          44.5% {
            transform:translate(116.727px,64.264px)
          }
          45% {
            transform:translate(116.545px,65.673px)
          }
          45.5% {
            transform:translate(116.364px,67.082px)
          }
          46% {
            transform:translate(116.182px,68.491px)
          }
          46.5% {
            transform:translate(116px,69.9px)
          }
          47% {
            transform:translate(115.818px,71.309px)
          }
          47.5% {
            transform:translate(115.636px,72.718px)
          }
          48% {
            transform:translate(115.455px,74.127px)
          }
          48.5% {
            transform:translate(115.273px,75.536px)
          }
          49% {
            transform:translate(115.091px,76.945px)
          }
          49.5% {
            transform:translate(114.909px,78.355px)
          }
          50% {
            transform:translate(114.727px,79.764px)
          }
          50.5% {
            transform:translate(114.545px,81.173px)
          }
          51% {
            transform:translate(114.364px,82.582px)
          }
          51.5% {
            transform:translate(114.182px,83.991px)
          }
          52% {
            transform:translate(114px,85.4px)
          }
          52.5% {
            transform:translate(114px,85.4px)
          }
          53% {
            transform:translate(114px,85.4px)
          }
          53.5% {
            transform:translate(114px,85.4px)
          }
          54% {
            transform:translate(114px,85.4px)
          }
          54.5% {
            transform:translate(114px,85.4px)
          }
          55% {
            transform:translate(114px,85.4px)
          }
          55.5% {
            transform:translate(114px,85.4px)
          }
          56% {
            transform:translate(114px,85.4px)
          }
          56.5% {
            transform:translate(114px,85.4px)
          }
          57% {
            transform:translate(114px,85.4px)
          }
          57.5% {
            transform:translate(114px,85.4px)
          }
          58% {
            transform:translate(114px,85.4px)
          }
          58.5% {
            transform:translate(114px,85.4px)
          }
          59% {
            transform:translate(114px,85.4px)
          }
          59.5% {
            transform:translate(114px,85.4px)
          }
          60% {
            transform:translate(114px,85.4px)
          }
          60.5% {
            transform:translate(114px,85.4px)
          }
          61% {
            transform:translate(114px,85.4px)
          }
          61.5% {
            transform:translate(114px,85.4px)
          }
          62% {
            transform:translate(114px,85.4px)
          }
          62.5% {
            transform:translate(114px,85.4px)
          }
          63% {
            transform:translate(114px,85.4px)
          }
          63.5% {
            transform:translate(114px,85.4px)
          }
          64% {
            transform:translate(114px,85.4px)
          }
          64.5% {
            transform:translate(114px,85.4px)
          }
          65% {
            transform:translate(114px,85.4px)
          }
          65.5% {
            transform:translate(114px,85.4px)
          }
          66% {
            transform:translate(114px,85.4px)
          }
          66.5% {
            transform:translate(114px,85.4px)
          }
          67% {
            transform:translate(114px,85.4px)
          }
          67.5% {
            transform:translate(114px,85.4px)
          }
          68% {
            transform:translate(114px,85.4px)
          }
          68.5% {
            transform:translate(114px,85.4px)
          }
          69% {
            transform:translate(114px,85.4px)
          }
          69.5% {
            transform:translate(114px,85.4px)
          }
          70% {
            transform:translate(114px,85.4px)
          }
          70.5% {
            transform:translate(114px,85.4px)
          }
          71% {
            transform:translate(114px,85.4px)
          }
          71.5% {
            transform:translate(114px,85.4px)
          }
          72% {
            transform:translate(114px,85.4px)
          }
          72.5% {
            transform:translate(114px,85.4px)
          }
          73% {
            transform:translate(114px,85.4px)
          }
          73.5% {
            transform:translate(114px,85.4px)
          }
          74% {
            transform:translate(114px,85.4px)
          }
          74.5% {
            transform:translate(114px,85.4px)
          }
          75% {
            transform:translate(114px,85.4px)
          }
          75.5% {
            transform:translate(114px,85.4px)
          }
          76% {
            transform:translate(114px,85.4px)
          }
          76.5% {
            transform:translate(114px,85.4px)
          }
          77% {
            transform:translate(114px,85.4px)
          }
          77.5% {
            transform:translate(114px,85.4px)
          }
          78% {
            transform:translate(114px,85.4px)
          }
          78.5% {
            transform:translate(114px,85.4px)
          }
          79% {
            transform:translate(114px,85.4px)
          }
          79.5% {
            transform:translate(114px,85.4px)
          }
          80% {
            transform:translate(114px,85.4px)
          }
          80.5% {
            transform:translate(114px,85.4px)
          }
          81% {
            transform:translate(114px,85.4px)
          }
          81.5% {
            transform:translate(114px,85.4px)
          }
          82% {
            transform:translate(114px,85.4px)
          }
          82.5% {
            transform:translate(114px,85.4px)
          }
          83% {
            transform:translate(114px,85.4px)
          }
          83.5% {
            transform:translate(114px,85.4px)
          }
          84% {
            transform:translate(114px,85.4px)
          }
          84.5% {
            transform:translate(114px,85.4px)
          }
          85% {
            transform:translate(114px,85.4px)
          }
          85.5% {
            transform:translate(114px,85.4px)
          }
          86% {
            transform:translate(114px,85.4px)
          }
          86.5% {
            transform:translate(114px,85.4px)
          }
          87% {
            transform:translate(114px,85.4px)
          }
          87.5% {
            transform:translate(114px,85.4px)
          }
          88% {
            transform:translate(114px,85.4px)
          }
          88.5% {
            transform:translate(114px,85.4px)
          }
          89% {
            transform:translate(114px,85.4px)
          }
          89.5% {
            transform:translate(114px,85.4px)
          }
          90% {
            transform:translate(114px,85.4px)
          }
          90.5% {
            transform:translate(114px,85.4px)
          }
          91% {
            transform:translate(114px,85.4px)
          }
          91.5% {
            transform:translate(114px,85.4px)
          }
          92% {
            transform:translate(114px,85.4px)
          }
          92.5% {
            transform:translate(114px,85.4px)
          }
          93% {
            transform:translate(114px,85.4px)
          }
          93.5% {
            transform:translate(114px,85.4px)
          }
          94% {
            transform:translate(114px,85.4px)
          }
          94.5% {
            transform:translate(114px,85.4px)
          }
          95% {
            transform:translate(114px,85.4px)
          }
          95.5% {
            transform:translate(114px,85.4px)
          }
          96% {
            transform:translate(114px,85.4px)
          }
          96.5% {
            transform:translate(114px,85.4px)
          }
          97% {
            transform:translate(114px,85.4px)
          }
          97.5% {
            transform:translate(114px,85.4px)
          }
          98% {
            transform:translate(114px,85.4px)
          }
          98.5% {
            transform:translate(114px,85.4px)
          }
          99% {
            transform:translate(114px,85.4px)
          }
          99.5% {
            transform:translate(114px,85.4px)
          }
          100% {
            transform:translate(114px,85.4px)
          }
        }
        .b1 {
          transform:translate(65px,68.5px);
          opacity:1;
          animation:b1 12s linear infinite
        }
        .m1 {
          transform:translate(65px,75.9px);
          animation:m1 12s linear infinite
        }
        @keyframes b1 {
          0% {
            transform:translate(65px,108px);
            opacity:0
          }
          0.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          1% {
            transform:translate(65px,108px);
            opacity:0
          }
          1.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          2% {
            transform:translate(65px,108px);
            opacity:0
          }
          2.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          3% {
            transform:translate(65px,108px);
            opacity:0
          }
          3.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          4% {
            transform:translate(65px,108px);
            opacity:0
          }
          4.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          5% {
            transform:translate(65px,108px);
            opacity:0
          }
          5.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          6% {
            transform:translate(65px,108px);
            opacity:0
          }
          6.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          7% {
            transform:translate(65px,108px);
            opacity:0
          }
          7.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          8% {
            transform:translate(65px,108px);
            opacity:0
          }
          8.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          9% {
            transform:translate(65px,108px);
            opacity:0
          }
          9.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          10% {
            transform:translate(65px,108px);
            opacity:0
          }
          10.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          11% {
            transform:translate(65px,108px);
            opacity:0
          }
          11.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          12% {
            transform:translate(65px,108px);
            opacity:0
          }
          12.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          13% {
            transform:translate(65px,108px);
            opacity:0
          }
          13.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          14% {
            transform:translate(65px,108px);
            opacity:0
          }
          14.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          15% {
            transform:translate(65px,108px);
            opacity:0
          }
          15.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          16% {
            transform:translate(65px,108px);
            opacity:0
          }
          16.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          17% {
            transform:translate(65px,108px);
            opacity:0
          }
          17.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          18% {
            transform:translate(65px,108px);
            opacity:0
          }
          18.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          19% {
            transform:translate(65px,108px);
            opacity:0
          }
          19.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          20% {
            transform:translate(65px,108px);
            opacity:0
          }
          20.5% {
            transform:translate(65px,108px);
            opacity:0
          }
          21% {
            transform:translate(65px,108px);
            opacity:0
          }
          21.5% {
            transform:translate(65px,108px);
            opacity:0.25
          }
          22% {
            transform:translate(65px,108px);
            opacity:0.5
          }
          22.5% {
            transform:translate(65px,107.333px);
            opacity:0.75
          }
          23% {
            transform:translate(65px,106.667px);
            opacity:1
          }
          23.5% {
            transform:translate(65px,106px);
            opacity:1
          }
          24% {
            transform:translate(65px,105.333px);
            opacity:1
          }
          24.5% {
            transform:translate(65px,104.667px);
            opacity:1
          }
          25% {
            transform:translate(65px,104px);
            opacity:1
          }
          25.5% {
            transform:translate(65px,103.333px);
            opacity:1
          }
          26% {
            transform:translate(65px,102.667px);
            opacity:1
          }
          26.5% {
            transform:translate(65px,102px);
            opacity:1
          }
          27% {
            transform:translate(65px,101.333px);
            opacity:1
          }
          27.5% {
            transform:translate(65px,100.667px);
            opacity:1
          }
          28% {
            transform:translate(65px,100px);
            opacity:1
          }
          28.5% {
            transform:translate(65px,99.333px);
            opacity:1
          }
          29% {
            transform:translate(65px,98.667px);
            opacity:1
          }
          29.5% {
            transform:translate(65px,98px);
            opacity:1
          }
          30% {
            transform:translate(65px,97.333px);
            opacity:1
          }
          30.5% {
            transform:translate(65px,96.667px);
            opacity:1
          }
          31% {
            transform:translate(65px,96px);
            opacity:1
          }
          31.5% {
            transform:translate(65px,95.333px);
            opacity:1
          }
          32% {
            transform:translate(65px,94.667px);
            opacity:1
          }
          32.5% {
            transform:translate(65px,94px);
            opacity:1
          }
          33% {
            transform:translate(65px,93.333px);
            opacity:1
          }
          33.5% {
            transform:translate(65px,92.667px);
            opacity:1
          }
          34% {
            transform:translate(65px,92px);
            opacity:1
          }
          34.5% {
            transform:translate(65px,92px);
            opacity:1
          }
          35% {
            transform:translate(65px,92px);
            opacity:1
          }
          35.5% {
            transform:translate(65px,92px);
            opacity:1
          }
          36% {
            transform:translate(65px,92px);
            opacity:1
          }
          36.5% {
            transform:translate(65px,92px);
            opacity:1
          }
          37% {
            transform:translate(65px,92px);
            opacity:1
          }
          37.5% {
            transform:translate(65px,92px);
            opacity:1
          }
          38% {
            transform:translate(65px,92px);
            opacity:1
          }
          38.5% {
            transform:translate(65px,90.042px);
            opacity:1
          }
          39% {
            transform:translate(65px,88.083px);
            opacity:1
          }
          39.5% {
            transform:translate(65px,86.125px);
            opacity:1
          }
          40% {
            transform:translate(65px,84.167px);
            opacity:1
          }
          40.5% {
            transform:translate(65px,82.208px);
            opacity:1
          }
          41% {
            transform:translate(65px,80.25px);
            opacity:1
          }
          41.5% {
            transform:translate(65px,78.292px);
            opacity:1
          }
          42% {
            transform:translate(65px,76.333px);
            opacity:1
          }
          42.5% {
            transform:translate(65px,74.375px);
            opacity:1
          }
          43% {
            transform:translate(65px,72.417px);
            opacity:1
          }
          43.5% {
            transform:translate(65px,70.458px);
            opacity:1
          }
          44% {
            transform:translate(65px,68.5px);
            opacity:1
          }
          44.5% {
            transform:translate(65px,66.542px);
            opacity:1
          }
          45% {
            transform:translate(65px,64.583px);
            opacity:1
          }
          45.5% {
            transform:translate(65px,62.625px);
            opacity:1
          }
          46% {
            transform:translate(65px,60.667px);
            opacity:1
          }
          46.5% {
            transform:translate(65px,58.708px);
            opacity:1
          }
          47% {
            transform:translate(65px,56.75px);
            opacity:1
          }
          47.5% {
            transform:translate(65px,54.792px);
            opacity:1
          }
          48% {
            transform:translate(65px,52.833px);
            opacity:1
          }
          48.5% {
            transform:translate(65px,50.875px);
            opacity:1
          }
          49% {
            transform:translate(65px,48.917px);
            opacity:1
          }
          49.5% {
            transform:translate(65px,46.958px);
            opacity:1
          }
          50% {
            transform:translate(65px,45px);
            opacity:1
          }
          50.5% {
            transform:translate(67.944px,45.111px);
            opacity:1
          }
          51% {
            transform:translate(70.889px,45.222px);
            opacity:1
          }
          51.5% {
            transform:translate(73.833px,45.333px);
            opacity:1
          }
          52% {
            transform:translate(76.778px,45.444px);
            opacity:1
          }
          52.5% {
            transform:translate(79.722px,45.556px);
            opacity:1
          }
          53% {
            transform:translate(82.667px,45.667px);
            opacity:1
          }
          53.5% {
            transform:translate(85.611px,45.778px);
            opacity:1
          }
          54% {
            transform:translate(88.556px,45.889px);
            opacity:1
          }
          54.5% {
            transform:translate(91.5px,46px);
            opacity:1
          }
          55% {
            transform:translate(94.444px,46.111px);
            opacity:1
          }
          55.5% {
            transform:translate(97.389px,46.222px);
            opacity:1
          }
          56% {
            transform:translate(100.333px,46.333px);
            opacity:1
          }
          56.5% {
            transform:translate(103.278px,46.444px);
            opacity:1
          }
          57% {
            transform:translate(106.222px,46.556px);
            opacity:1
          }
          57.5% {
            transform:translate(109.167px,46.667px);
            opacity:1
          }
          58% {
            transform:translate(112.111px,46.778px);
            opacity:1
          }
          58.5% {
            transform:translate(115.056px,46.889px);
            opacity:1
          }
          59% {
            transform:translate(118px,47px);
            opacity:1
          }
          59.5% {
            transform:translate(118.109px,48.409px);
            opacity:1
          }
          60% {
            transform:translate(118.218px,49.818px);
            opacity:1
          }
          60.5% {
            transform:translate(118.327px,51.227px);
            opacity:1
          }
          61% {
            transform:translate(118.436px,52.636px);
            opacity:1
          }
          61.5% {
            transform:translate(118.545px,54.045px);
            opacity:1
          }
          62% {
            transform:translate(118.655px,55.455px);
            opacity:1
          }
          62.5% {
            transform:translate(118.764px,56.864px);
            opacity:1
          }
          63% {
            transform:translate(118.873px,58.273px);
            opacity:1
          }
          63.5% {
            transform:translate(118.982px,59.682px);
            opacity:1
          }
          64% {
            transform:translate(119.091px,61.091px);
            opacity:1
          }
          64.5% {
            transform:translate(119.2px,62.5px);
            opacity:1
          }
          65% {
            transform:translate(119.309px,63.909px);
            opacity:1
          }
          65.5% {
            transform:translate(119.418px,65.318px);
            opacity:1
          }
          66% {
            transform:translate(119.527px,66.727px);
            opacity:1
          }
          66.5% {
            transform:translate(119.636px,68.136px);
            opacity:1
          }
          67% {
            transform:translate(119.745px,69.545px);
            opacity:1
          }
          67.5% {
            transform:translate(119.855px,70.955px);
            opacity:1
          }
          68% {
            transform:translate(119.964px,72.364px);
            opacity:1
          }
          68.5% {
            transform:translate(120.073px,73.773px);
            opacity:1
          }
          69% {
            transform:translate(120.182px,75.182px);
            opacity:1
          }
          69.5% {
            transform:translate(120.291px,76.591px);
            opacity:1
          }
          70% {
            transform:translate(120.4px,78px);
            opacity:1
          }
          70.5% {
            transform:translate(120.4px,78px);
            opacity:0.875
          }
          71% {
            transform:translate(120.4px,78px);
            opacity:0.75
          }
          71.5% {
            transform:translate(120.4px,78px);
            opacity:0.625
          }
          72% {
            transform:translate(120.4px,78px);
            opacity:0.5
          }
          72.5% {
            transform:translate(120.4px,78px);
            opacity:0.375
          }
          73% {
            transform:translate(120.4px,78px);
            opacity:0.25
          }
          73.5% {
            transform:translate(120.4px,78px);
            opacity:0.125
          }
          74% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          74.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          75% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          75.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          76% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          76.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          77% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          77.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          78% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          78.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          79% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          79.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          80% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          80.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          81% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          81.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          82% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          82.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          83% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          83.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          84% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          84.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          85% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          85.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          86% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          86.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          87% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          87.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          88% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          88.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          89% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          89.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          90% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          90.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          91% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          91.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          92% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          92.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          93% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          93.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          94% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          94.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          95% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          95.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          96% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          96.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          97% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          97.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          98% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          98.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          99% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          99.5% {
            transform:translate(120.4px,78px);
            opacity:0
          }
          100% {
            transform:translate(120.4px,78px);
            opacity:0
          }
        }
        @keyframes m1 {
          0% {
            transform:translate(73px,99px)
          }
          0.5% {
            transform:translate(73px,99px)
          }
          1% {
            transform:translate(73px,99px)
          }
          1.5% {
            transform:translate(73px,99px)
          }
          2% {
            transform:translate(73px,99px)
          }
          2.5% {
            transform:translate(73px,99px)
          }
          3% {
            transform:translate(73px,99px)
          }
          3.5% {
            transform:translate(73px,99px)
          }
          4% {
            transform:translate(73px,99px)
          }
          4.5% {
            transform:translate(73px,99px)
          }
          5% {
            transform:translate(73px,99px)
          }
          5.5% {
            transform:translate(73px,99px)
          }
          6% {
            transform:translate(73px,99px)
          }
          6.5% {
            transform:translate(73px,99px)
          }
          7% {
            transform:translate(73px,99px)
          }
          7.5% {
            transform:translate(73px,99px)
          }
          8% {
            transform:translate(73px,99px)
          }
          8.5% {
            transform:translate(73px,99px)
          }
          9% {
            transform:translate(73px,99px)
          }
          9.5% {
            transform:translate(73px,99px)
          }
          10% {
            transform:translate(73px,99px)
          }
          10.5% {
            transform:translate(73px,99px)
          }
          11% {
            transform:translate(73px,99px)
          }
          11.5% {
            transform:translate(73px,99px)
          }
          12% {
            transform:translate(73px,99px)
          }
          12.5% {
            transform:translate(73px,99px)
          }
          13% {
            transform:translate(73px,99px)
          }
          13.5% {
            transform:translate(73px,99px)
          }
          14% {
            transform:translate(73px,99px)
          }
          14.5% {
            transform:translate(73px,99px)
          }
          15% {
            transform:translate(73px,99px)
          }
          15.5% {
            transform:translate(73px,99px)
          }
          16% {
            transform:translate(73px,99px)
          }
          16.5% {
            transform:translate(73px,99px)
          }
          17% {
            transform:translate(73px,99px)
          }
          17.5% {
            transform:translate(73px,99px)
          }
          18% {
            transform:translate(73px,99px)
          }
          18.5% {
            transform:translate(73px,99px)
          }
          19% {
            transform:translate(73px,99px)
          }
          19.5% {
            transform:translate(73px,99px)
          }
          20% {
            transform:translate(73px,99px)
          }
          20.5% {
            transform:translate(73px,99px)
          }
          21% {
            transform:translate(73px,99px)
          }
          21.5% {
            transform:translate(73px,99px)
          }
          22% {
            transform:translate(73px,99px)
          }
          22.5% {
            transform:translate(73px,99px)
          }
          23% {
            transform:translate(73px,99px)
          }
          23.5% {
            transform:translate(73px,99px)
          }
          24% {
            transform:translate(73px,99px)
          }
          24.5% {
            transform:translate(73px,99px)
          }
          25% {
            transform:translate(73px,99px)
          }
          25.5% {
            transform:translate(73px,99px)
          }
          26% {
            transform:translate(73px,99px)
          }
          26.5% {
            transform:translate(73px,99px)
          }
          27% {
            transform:translate(73px,99px)
          }
          27.5% {
            transform:translate(73px,99px)
          }
          28% {
            transform:translate(73px,99px)
          }
          28.5% {
            transform:translate(73px,99px)
          }
          29% {
            transform:translate(73px,99px)
          }
          29.5% {
            transform:translate(73px,99px)
          }
          30% {
            transform:translate(73px,99px)
          }
          30.5% {
            transform:translate(73px,99px)
          }
          31% {
            transform:translate(73px,99px)
          }
          31.5% {
            transform:translate(73px,99px)
          }
          32% {
            transform:translate(73px,99px)
          }
          32.5% {
            transform:translate(73px,99px)
          }
          33% {
            transform:translate(73px,99px)
          }
          33.5% {
            transform:translate(73px,99px)
          }
          34% {
            transform:translate(73px,99px)
          }
          34.5% {
            transform:translate(72px,99.05px)
          }
          35% {
            transform:translate(71px,99.1px)
          }
          35.5% {
            transform:translate(70px,99.15px)
          }
          36% {
            transform:translate(69px,99.2px)
          }
          36.5% {
            transform:translate(68px,99.25px)
          }
          37% {
            transform:translate(67px,99.3px)
          }
          37.5% {
            transform:translate(66px,99.35px)
          }
          38% {
            transform:translate(65px,99.4px)
          }
          38.5% {
            transform:translate(65px,97.442px)
          }
          39% {
            transform:translate(65px,95.483px)
          }
          39.5% {
            transform:translate(65px,93.525px)
          }
          40% {
            transform:translate(65px,91.567px)
          }
          40.5% {
            transform:translate(65px,89.608px)
          }
          41% {
            transform:translate(65px,87.65px)
          }
          41.5% {
            transform:translate(65px,85.692px)
          }
          42% {
            transform:translate(65px,83.733px)
          }
          42.5% {
            transform:translate(65px,81.775px)
          }
          43% {
            transform:translate(65px,79.817px)
          }
          43.5% {
            transform:translate(65px,77.858px)
          }
          44% {
            transform:translate(65px,75.9px)
          }
          44.5% {
            transform:translate(65px,73.942px)
          }
          45% {
            transform:translate(65px,71.983px)
          }
          45.5% {
            transform:translate(65px,70.025px)
          }
          46% {
            transform:translate(65px,68.067px)
          }
          46.5% {
            transform:translate(65px,66.108px)
          }
          47% {
            transform:translate(65px,64.15px)
          }
          47.5% {
            transform:translate(65px,62.192px)
          }
          48% {
            transform:translate(65px,60.233px)
          }
          48.5% {
            transform:translate(65px,58.275px)
          }
          49% {
            transform:translate(65px,56.317px)
          }
          49.5% {
            transform:translate(65px,54.358px)
          }
          50% {
            transform:translate(65px,52.4px)
          }
          50.5% {
            transform:translate(67.944px,52.511px)
          }
          51% {
            transform:translate(70.889px,52.622px)
          }
          51.5% {
            transform:translate(73.833px,52.733px)
          }
          52% {
            transform:translate(76.778px,52.844px)
          }
          52.5% {
            transform:translate(79.722px,52.956px)
          }
          53% {
            transform:translate(82.667px,53.067px)
          }
          53.5% {
            transform:translate(85.611px,53.178px)
          }
          54% {
            transform:translate(88.556px,53.289px)
          }
          54.5% {
            transform:translate(91.5px,53.4px)
          }
          55% {
            transform:translate(94.444px,53.511px)
          }
          55.5% {
            transform:translate(97.389px,53.622px)
          }
          56% {
            transform:translate(100.333px,53.733px)
          }
          56.5% {
            transform:translate(103.278px,53.844px)
          }
          57% {
            transform:translate(106.222px,53.956px)
          }
          57.5% {
            transform:translate(109.167px,54.067px)
          }
          58% {
            transform:translate(112.111px,54.178px)
          }
          58.5% {
            transform:translate(115.056px,54.289px)
          }
          59% {
            transform:translate(118px,54.4px)
          }
          59.5% {
            transform:translate(118.109px,55.809px)
          }
          60% {
            transform:translate(118.218px,57.218px)
          }
          60.5% {
            transform:translate(118.327px,58.627px)
          }
          61% {
            transform:translate(118.436px,60.036px)
          }
          61.5% {
            transform:translate(118.545px,61.445px)
          }
          62% {
            transform:translate(118.655px,62.855px)
          }
          62.5% {
            transform:translate(118.764px,64.264px)
          }
          63% {
            transform:translate(118.873px,65.673px)
          }
          63.5% {
            transform:translate(118.982px,67.082px)
          }
          64% {
            transform:translate(119.091px,68.491px)
          }
          64.5% {
            transform:translate(119.2px,69.9px)
          }
          65% {
            transform:translate(119.309px,71.309px)
          }
          65.5% {
            transform:translate(119.418px,72.718px)
          }
          66% {
            transform:translate(119.527px,74.127px)
          }
          66.5% {
            transform:translate(119.636px,75.536px)
          }
          67% {
            transform:translate(119.745px,76.945px)
          }
          67.5% {
            transform:translate(119.855px,78.355px)
          }
          68% {
            transform:translate(119.964px,79.764px)
          }
          68.5% {
            transform:translate(120.073px,81.173px)
          }
          69% {
            transform:translate(120.182px,82.582px)
          }
          69.5% {
            transform:translate(120.291px,83.991px)
          }
          70% {
            transform:translate(120.4px,85.4px)
          }
          70.5% {
            transform:translate(120.4px,85.4px)
          }
          71% {
            transform:translate(120.4px,85.4px)
          }
          71.5% {
            transform:translate(120.4px,85.4px)
          }
          72% {
            transform:translate(120.4px,85.4px)
          }
          72.5% {
            transform:translate(120.4px,85.4px)
          }
          73% {
            transform:translate(120.4px,85.4px)
          }
          73.5% {
            transform:translate(120.4px,85.4px)
          }
          74% {
            transform:translate(120.4px,85.4px)
          }
          74.5% {
            transform:translate(120.4px,85.4px)
          }
          75% {
            transform:translate(120.4px,85.4px)
          }
          75.5% {
            transform:translate(120.4px,85.4px)
          }
          76% {
            transform:translate(120.4px,85.4px)
          }
          76.5% {
            transform:translate(120.4px,85.4px)
          }
          77% {
            transform:translate(120.4px,85.4px)
          }
          77.5% {
            transform:translate(120.4px,85.4px)
          }
          78% {
            transform:translate(120.4px,85.4px)
          }
          78.5% {
            transform:translate(120.4px,85.4px)
          }
          79% {
            transform:translate(120.4px,85.4px)
          }
          79.5% {
            transform:translate(120.4px,85.4px)
          }
          80% {
            transform:translate(120.4px,85.4px)
          }
          80.5% {
            transform:translate(120.4px,85.4px)
          }
          81% {
            transform:translate(120.4px,85.4px)
          }
          81.5% {
            transform:translate(120.4px,85.4px)
          }
          82% {
            transform:translate(120.4px,85.4px)
          }
          82.5% {
            transform:translate(120.4px,85.4px)
          }
          83% {
            transform:translate(120.4px,85.4px)
          }
          83.5% {
            transform:translate(120.4px,85.4px)
          }
          84% {
            transform:translate(120.4px,85.4px)
          }
          84.5% {
            transform:translate(120.4px,85.4px)
          }
          85% {
            transform:translate(120.4px,85.4px)
          }
          85.5% {
            transform:translate(120.4px,85.4px)
          }
          86% {
            transform:translate(120.4px,85.4px)
          }
          86.5% {
            transform:translate(120.4px,85.4px)
          }
          87% {
            transform:translate(120.4px,85.4px)
          }
          87.5% {
            transform:translate(120.4px,85.4px)
          }
          88% {
            transform:translate(120.4px,85.4px)
          }
          88.5% {
            transform:translate(120.4px,85.4px)
          }
          89% {
            transform:translate(120.4px,85.4px)
          }
          89.5% {
            transform:translate(120.4px,85.4px)
          }
          90% {
            transform:translate(120.4px,85.4px)
          }
          90.5% {
            transform:translate(120.4px,85.4px)
          }
          91% {
            transform:translate(120.4px,85.4px)
          }
          91.5% {
            transform:translate(120.4px,85.4px)
          }
          92% {
            transform:translate(120.4px,85.4px)
          }
          92.5% {
            transform:translate(120.4px,85.4px)
          }
          93% {
            transform:translate(120.4px,85.4px)
          }
          93.5% {
            transform:translate(120.4px,85.4px)
          }
          94% {
            transform:translate(120.4px,85.4px)
          }
          94.5% {
            transform:translate(120.4px,85.4px)
          }
          95% {
            transform:translate(120.4px,85.4px)
          }
          95.5% {
            transform:translate(120.4px,85.4px)
          }
          96% {
            transform:translate(120.4px,85.4px)
          }
          96.5% {
            transform:translate(120.4px,85.4px)
          }
          97% {
            transform:translate(120.4px,85.4px)
          }
          97.5% {
            transform:translate(120.4px,85.4px)
          }
          98% {
            transform:translate(120.4px,85.4px)
          }
          98.5% {
            transform:translate(120.4px,85.4px)
          }
          99% {
            transform:translate(120.4px,85.4px)
          }
          99.5% {
            transform:translate(120.4px,85.4px)
          }
          100% {
            transform:translate(120.4px,85.4px)
          }
        }
        .b2 {
          transform:translate(88px,95.333px);
          opacity:1;
          animation:b2 12s linear infinite
        }
        .m2 {
          transform:translate(96px,77px);
          animation:m2 12s linear infinite
        }
        @keyframes b2 {
          0% {
            transform:translate(88px,108px);
            opacity:0
          }
          0.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          1% {
            transform:translate(88px,108px);
            opacity:0
          }
          1.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          2% {
            transform:translate(88px,108px);
            opacity:0
          }
          2.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          3% {
            transform:translate(88px,108px);
            opacity:0
          }
          3.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          4% {
            transform:translate(88px,108px);
            opacity:0
          }
          4.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          5% {
            transform:translate(88px,108px);
            opacity:0
          }
          5.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          6% {
            transform:translate(88px,108px);
            opacity:0
          }
          6.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          7% {
            transform:translate(88px,108px);
            opacity:0
          }
          7.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          8% {
            transform:translate(88px,108px);
            opacity:0
          }
          8.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          9% {
            transform:translate(88px,108px);
            opacity:0
          }
          9.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          10% {
            transform:translate(88px,108px);
            opacity:0
          }
          10.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          11% {
            transform:translate(88px,108px);
            opacity:0
          }
          11.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          12% {
            transform:translate(88px,108px);
            opacity:0
          }
          12.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          13% {
            transform:translate(88px,108px);
            opacity:0
          }
          13.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          14% {
            transform:translate(88px,108px);
            opacity:0
          }
          14.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          15% {
            transform:translate(88px,108px);
            opacity:0
          }
          15.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          16% {
            transform:translate(88px,108px);
            opacity:0
          }
          16.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          17% {
            transform:translate(88px,108px);
            opacity:0
          }
          17.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          18% {
            transform:translate(88px,108px);
            opacity:0
          }
          18.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          19% {
            transform:translate(88px,108px);
            opacity:0
          }
          19.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          20% {
            transform:translate(88px,108px);
            opacity:0
          }
          20.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          21% {
            transform:translate(88px,108px);
            opacity:0
          }
          21.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          22% {
            transform:translate(88px,108px);
            opacity:0
          }
          22.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          23% {
            transform:translate(88px,108px);
            opacity:0
          }
          23.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          24% {
            transform:translate(88px,108px);
            opacity:0
          }
          24.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          25% {
            transform:translate(88px,108px);
            opacity:0
          }
          25.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          26% {
            transform:translate(88px,108px);
            opacity:0
          }
          26.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          27% {
            transform:translate(88px,108px);
            opacity:0
          }
          27.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          28% {
            transform:translate(88px,108px);
            opacity:0
          }
          28.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          29% {
            transform:translate(88px,108px);
            opacity:0
          }
          29.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          30% {
            transform:translate(88px,108px);
            opacity:0
          }
          30.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          31% {
            transform:translate(88px,108px);
            opacity:0
          }
          31.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          32% {
            transform:translate(88px,108px);
            opacity:0
          }
          32.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          33% {
            transform:translate(88px,108px);
            opacity:0
          }
          33.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          34% {
            transform:translate(88px,108px);
            opacity:0
          }
          34.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          35% {
            transform:translate(88px,108px);
            opacity:0
          }
          35.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          36% {
            transform:translate(88px,108px);
            opacity:0
          }
          36.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          37% {
            transform:translate(88px,108px);
            opacity:0
          }
          37.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          38% {
            transform:translate(88px,108px);
            opacity:0
          }
          38.5% {
            transform:translate(88px,108px);
            opacity:0
          }
          39% {
            transform:translate(88px,108px);
            opacity:0
          }
          39.5% {
            transform:translate(88px,108px);
            opacity:0.25
          }
          40% {
            transform:translate(88px,108px);
            opacity:0.5
          }
          40.5% {
            transform:translate(88px,106.417px);
            opacity:0.75
          }
          41% {
            transform:translate(88px,104.833px);
            opacity:1
          }
          41.5% {
            transform:translate(88px,103.25px);
            opacity:1
          }
          42% {
            transform:translate(88px,101.667px);
            opacity:1
          }
          42.5% {
            transform:translate(88px,100.083px);
            opacity:1
          }
          43% {
            transform:translate(88px,98.5px);
            opacity:1
          }
          43.5% {
            transform:translate(88px,96.917px);
            opacity:1
          }
          44% {
            transform:translate(88px,95.333px);
            opacity:1
          }
          44.5% {
            transform:translate(88px,93.75px);
            opacity:1
          }
          45% {
            transform:translate(88px,92.167px);
            opacity:1
          }
          45.5% {
            transform:translate(88px,90.583px);
            opacity:1
          }
          46% {
            transform:translate(88px,89px);
            opacity:1
          }
          46.5% {
            transform:translate(88px,87.417px);
            opacity:1
          }
          47% {
            transform:translate(88px,85.833px);
            opacity:1
          }
          47.5% {
            transform:translate(88px,84.25px);
            opacity:1
          }
          48% {
            transform:translate(88px,82.667px);
            opacity:1
          }
          48.5% {
            transform:translate(88px,81.083px);
            opacity:1
          }
          49% {
            transform:translate(88px,79.5px);
            opacity:1
          }
          49.5% {
            transform:translate(88px,77.917px);
            opacity:1
          }
          50% {
            transform:translate(88px,76.333px);
            opacity:1
          }
          50.5% {
            transform:translate(88px,74.75px);
            opacity:1
          }
          51% {
            transform:translate(88px,73.167px);
            opacity:1
          }
          51.5% {
            transform:translate(88px,71.583px);
            opacity:1
          }
          52% {
            transform:translate(88px,70px);
            opacity:1
          }
          52.5% {
            transform:translate(88px,70px);
            opacity:1
          }
          53% {
            transform:translate(88px,70px);
            opacity:1
          }
          53.5% {
            transform:translate(88px,70px);
            opacity:1
          }
          54% {
            transform:translate(88px,70px);
            opacity:1
          }
          54.5% {
            transform:translate(88px,70px);
            opacity:1
          }
          55% {
            transform:translate(88px,70px);
            opacity:1
          }
          55.5% {
            transform:translate(88px,70px);
            opacity:1
          }
          56% {
            transform:translate(88px,70px);
            opacity:1
          }
          56.5% {
            transform:translate(88px,68.958px);
            opacity:1
          }
          57% {
            transform:translate(88px,67.917px);
            opacity:1
          }
          57.5% {
            transform:translate(88px,66.875px);
            opacity:1
          }
          58% {
            transform:translate(88px,65.833px);
            opacity:1
          }
          58.5% {
            transform:translate(88px,64.792px);
            opacity:1
          }
          59% {
            transform:translate(88px,63.75px);
            opacity:1
          }
          59.5% {
            transform:translate(88px,62.708px);
            opacity:1
          }
          60% {
            transform:translate(88px,61.667px);
            opacity:1
          }
          60.5% {
            transform:translate(88px,60.625px);
            opacity:1
          }
          61% {
            transform:translate(88px,59.583px);
            opacity:1
          }
          61.5% {
            transform:translate(88px,58.542px);
            opacity:1
          }
          62% {
            transform:translate(88px,57.5px);
            opacity:1
          }
          62.5% {
            transform:translate(88px,56.458px);
            opacity:1
          }
          63% {
            transform:translate(88px,55.417px);
            opacity:1
          }
          63.5% {
            transform:translate(88px,54.375px);
            opacity:1
          }
          64% {
            transform:translate(88px,53.333px);
            opacity:1
          }
          64.5% {
            transform:translate(88px,52.292px);
            opacity:1
          }
          65% {
            transform:translate(88px,51.25px);
            opacity:1
          }
          65.5% {
            transform:translate(88px,50.208px);
            opacity:1
          }
          66% {
            transform:translate(88px,49.167px);
            opacity:1
          }
          66.5% {
            transform:translate(88px,48.125px);
            opacity:1
          }
          67% {
            transform:translate(88px,47.083px);
            opacity:1
          }
          67.5% {
            transform:translate(88px,46.042px);
            opacity:1
          }
          68% {
            transform:translate(88px,45px);
            opacity:1
          }
          68.5% {
            transform:translate(89.667px,45.111px);
            opacity:1
          }
          69% {
            transform:translate(91.333px,45.222px);
            opacity:1
          }
          69.5% {
            transform:translate(93px,45.333px);
            opacity:1
          }
          70% {
            transform:translate(94.667px,45.444px);
            opacity:1
          }
          70.5% {
            transform:translate(96.333px,45.556px);
            opacity:1
          }
          71% {
            transform:translate(98px,45.667px);
            opacity:1
          }
          71.5% {
            transform:translate(99.667px,45.778px);
            opacity:1
          }
          72% {
            transform:translate(101.333px,45.889px);
            opacity:1
          }
          72.5% {
            transform:translate(103px,46px);
            opacity:1
          }
          73% {
            transform:translate(104.667px,46.111px);
            opacity:1
          }
          73.5% {
            transform:translate(106.333px,46.222px);
            opacity:1
          }
          74% {
            transform:translate(108px,46.333px);
            opacity:1
          }
          74.5% {
            transform:translate(109.667px,46.444px);
            opacity:1
          }
          75% {
            transform:translate(111.333px,46.556px);
            opacity:1
          }
          75.5% {
            transform:translate(113px,46.667px);
            opacity:1
          }
          76% {
            transform:translate(114.667px,46.778px);
            opacity:1
          }
          76.5% {
            transform:translate(116.333px,46.889px);
            opacity:1
          }
          77% {
            transform:translate(118px,47px);
            opacity:1
          }
          77.5% {
            transform:translate(118.4px,48.409px);
            opacity:1
          }
          78% {
            transform:translate(118.8px,49.818px);
            opacity:1
          }
          78.5% {
            transform:translate(119.2px,51.227px);
            opacity:1
          }
          79% {
            transform:translate(119.6px,52.636px);
            opacity:1
          }
          79.5% {
            transform:translate(120px,54.045px);
            opacity:1
          }
          80% {
            transform:translate(120.4px,55.455px);
            opacity:1
          }
          80.5% {
            transform:translate(120.8px,56.864px);
            opacity:1
          }
          81% {
            transform:translate(121.2px,58.273px);
            opacity:1
          }
          81.5% {
            transform:translate(121.6px,59.682px);
            opacity:1
          }
          82% {
            transform:translate(122px,61.091px);
            opacity:1
          }
          82.5% {
            transform:translate(122.4px,62.5px);
            opacity:1
          }
          83% {
            transform:translate(122.8px,63.909px);
            opacity:1
          }
          83.5% {
            transform:translate(123.2px,65.318px);
            opacity:1
          }
          84% {
            transform:translate(123.6px,66.727px);
            opacity:1
          }
          84.5% {
            transform:translate(124px,68.136px);
            opacity:1
          }
          85% {
            transform:translate(124.4px,69.545px);
            opacity:1
          }
          85.5% {
            transform:translate(124.8px,70.955px);
            opacity:1
          }
          86% {
            transform:translate(125.2px,72.364px);
            opacity:1
          }
          86.5% {
            transform:translate(125.6px,73.773px);
            opacity:1
          }
          87% {
            transform:translate(126px,75.182px);
            opacity:1
          }
          87.5% {
            transform:translate(126.4px,76.591px);
            opacity:1
          }
          88% {
            transform:translate(126.8px,78px);
            opacity:1
          }
          88.5% {
            transform:translate(126.8px,78px);
            opacity:0.875
          }
          89% {
            transform:translate(126.8px,78px);
            opacity:0.75
          }
          89.5% {
            transform:translate(126.8px,78px);
            opacity:0.625
          }
          90% {
            transform:translate(126.8px,78px);
            opacity:0.5
          }
          90.5% {
            transform:translate(126.8px,78px);
            opacity:0.375
          }
          91% {
            transform:translate(126.8px,78px);
            opacity:0.25
          }
          91.5% {
            transform:translate(126.8px,78px);
            opacity:0.125
          }
          92% {
            transform:translate(126.8px,78px);
            opacity:0
          }
          92.5% {
            transform:translate(126.8px,78px);
            opacity:0
          }
          93% {
            transform:translate(126.8px,78px);
            opacity:0
          }
          93.5% {
            transform:translate(126.8px,78px);
            opacity:0
          }
          94% {
            transform:translate(126.8px,78px);
            opacity:0
          }
          94.5% {
            transform:translate(126.8px,78px);
            opacity:0
          }
          95% {
            transform:translate(126.8px,78px);
            opacity:0
          }
          95.5% {
            transform:translate(126.8px,78px);
            opacity:0
          }
          96% {
            transform:translate(126.8px,78px);
            opacity:0
          }
          96.5% {
            transform:translate(126.8px,78px);
            opacity:0
          }
          97% {
            transform:translate(126.8px,78px);
            opacity:0
          }
          97.5% {
            transform:translate(126.8px,78px);
            opacity:0
          }
          98% {
            transform:translate(126.8px,78px);
            opacity:0
          }
          98.5% {
            transform:translate(126.8px,78px);
            opacity:0
          }
          99% {
            transform:translate(126.8px,78px);
            opacity:0
          }
          99.5% {
            transform:translate(126.8px,78px);
            opacity:0
          }
          100% {
            transform:translate(126.8px,78px);
            opacity:0
          }
        }
        @keyframes m2 {
          0% {
            transform:translate(96px,77px)
          }
          0.5% {
            transform:translate(96px,77px)
          }
          1% {
            transform:translate(96px,77px)
          }
          1.5% {
            transform:translate(96px,77px)
          }
          2% {
            transform:translate(96px,77px)
          }
          2.5% {
            transform:translate(96px,77px)
          }
          3% {
            transform:translate(96px,77px)
          }
          3.5% {
            transform:translate(96px,77px)
          }
          4% {
            transform:translate(96px,77px)
          }
          4.5% {
            transform:translate(96px,77px)
          }
          5% {
            transform:translate(96px,77px)
          }
          5.5% {
            transform:translate(96px,77px)
          }
          6% {
            transform:translate(96px,77px)
          }
          6.5% {
            transform:translate(96px,77px)
          }
          7% {
            transform:translate(96px,77px)
          }
          7.5% {
            transform:translate(96px,77px)
          }
          8% {
            transform:translate(96px,77px)
          }
          8.5% {
            transform:translate(96px,77px)
          }
          9% {
            transform:translate(96px,77px)
          }
          9.5% {
            transform:translate(96px,77px)
          }
          10% {
            transform:translate(96px,77px)
          }
          10.5% {
            transform:translate(96px,77px)
          }
          11% {
            transform:translate(96px,77px)
          }
          11.5% {
            transform:translate(96px,77px)
          }
          12% {
            transform:translate(96px,77px)
          }
          12.5% {
            transform:translate(96px,77px)
          }
          13% {
            transform:translate(96px,77px)
          }
          13.5% {
            transform:translate(96px,77px)
          }
          14% {
            transform:translate(96px,77px)
          }
          14.5% {
            transform:translate(96px,77px)
          }
          15% {
            transform:translate(96px,77px)
          }
          15.5% {
            transform:translate(96px,77px)
          }
          16% {
            transform:translate(96px,77px)
          }
          16.5% {
            transform:translate(96px,77px)
          }
          17% {
            transform:translate(96px,77px)
          }
          17.5% {
            transform:translate(96px,77px)
          }
          18% {
            transform:translate(96px,77px)
          }
          18.5% {
            transform:translate(96px,77px)
          }
          19% {
            transform:translate(96px,77px)
          }
          19.5% {
            transform:translate(96px,77px)
          }
          20% {
            transform:translate(96px,77px)
          }
          20.5% {
            transform:translate(96px,77px)
          }
          21% {
            transform:translate(96px,77px)
          }
          21.5% {
            transform:translate(96px,77px)
          }
          22% {
            transform:translate(96px,77px)
          }
          22.5% {
            transform:translate(96px,77px)
          }
          23% {
            transform:translate(96px,77px)
          }
          23.5% {
            transform:translate(96px,77px)
          }
          24% {
            transform:translate(96px,77px)
          }
          24.5% {
            transform:translate(96px,77px)
          }
          25% {
            transform:translate(96px,77px)
          }
          25.5% {
            transform:translate(96px,77px)
          }
          26% {
            transform:translate(96px,77px)
          }
          26.5% {
            transform:translate(96px,77px)
          }
          27% {
            transform:translate(96px,77px)
          }
          27.5% {
            transform:translate(96px,77px)
          }
          28% {
            transform:translate(96px,77px)
          }
          28.5% {
            transform:translate(96px,77px)
          }
          29% {
            transform:translate(96px,77px)
          }
          29.5% {
            transform:translate(96px,77px)
          }
          30% {
            transform:translate(96px,77px)
          }
          30.5% {
            transform:translate(96px,77px)
          }
          31% {
            transform:translate(96px,77px)
          }
          31.5% {
            transform:translate(96px,77px)
          }
          32% {
            transform:translate(96px,77px)
          }
          32.5% {
            transform:translate(96px,77px)
          }
          33% {
            transform:translate(96px,77px)
          }
          33.5% {
            transform:translate(96px,77px)
          }
          34% {
            transform:translate(96px,77px)
          }
          34.5% {
            transform:translate(96px,77px)
          }
          35% {
            transform:translate(96px,77px)
          }
          35.5% {
            transform:translate(96px,77px)
          }
          36% {
            transform:translate(96px,77px)
          }
          36.5% {
            transform:translate(96px,77px)
          }
          37% {
            transform:translate(96px,77px)
          }
          37.5% {
            transform:translate(96px,77px)
          }
          38% {
            transform:translate(96px,77px)
          }
          38.5% {
            transform:translate(96px,77px)
          }
          39% {
            transform:translate(96px,77px)
          }
          39.5% {
            transform:translate(96px,77px)
          }
          40% {
            transform:translate(96px,77px)
          }
          40.5% {
            transform:translate(96px,77px)
          }
          41% {
            transform:translate(96px,77px)
          }
          41.5% {
            transform:translate(96px,77px)
          }
          42% {
            transform:translate(96px,77px)
          }
          42.5% {
            transform:translate(96px,77px)
          }
          43% {
            transform:translate(96px,77px)
          }
          43.5% {
            transform:translate(96px,77px)
          }
          44% {
            transform:translate(96px,77px)
          }
          44.5% {
            transform:translate(96px,77px)
          }
          45% {
            transform:translate(96px,77px)
          }
          45.5% {
            transform:translate(96px,77px)
          }
          46% {
            transform:translate(96px,77px)
          }
          46.5% {
            transform:translate(96px,77px)
          }
          47% {
            transform:translate(96px,77px)
          }
          47.5% {
            transform:translate(96px,77px)
          }
          48% {
            transform:translate(96px,77px)
          }
          48.5% {
            transform:translate(96px,77px)
          }
          49% {
            transform:translate(96px,77px)
          }
          49.5% {
            transform:translate(96px,77px)
          }
          50% {
            transform:translate(96px,77px)
          }
          50.5% {
            transform:translate(96px,77px)
          }
          51% {
            transform:translate(96px,77px)
          }
          51.5% {
            transform:translate(96px,77px)
          }
          52% {
            transform:translate(96px,77px)
          }
          52.5% {
            transform:translate(95px,77.05px)
          }
          53% {
            transform:translate(94px,77.1px)
          }
          53.5% {
            transform:translate(93px,77.15px)
          }
          54% {
            transform:translate(92px,77.2px)
          }
          54.5% {
            transform:translate(91px,77.25px)
          }
          55% {
            transform:translate(90px,77.3px)
          }
          55.5% {
            transform:translate(89px,77.35px)
          }
          56% {
            transform:translate(88px,77.4px)
          }
          56.5% {
            transform:translate(88px,76.358px)
          }
          57% {
            transform:translate(88px,75.317px)
          }
          57.5% {
            transform:translate(88px,74.275px)
          }
          58% {
            transform:translate(88px,73.233px)
          }
          58.5% {
            transform:translate(88px,72.192px)
          }
          59% {
            transform:translate(88px,71.15px)
          }
          59.5% {
            transform:translate(88px,70.108px)
          }
          60% {
            transform:translate(88px,69.067px)
          }
          60.5% {
            transform:translate(88px,68.025px)
          }
          61% {
            transform:translate(88px,66.983px)
          }
          61.5% {
            transform:translate(88px,65.942px)
          }
          62% {
            transform:translate(88px,64.9px)
          }
          62.5% {
            transform:translate(88px,63.858px)
          }
          63% {
            transform:translate(88px,62.817px)
          }
          63.5% {
            transform:translate(88px,61.775px)
          }
          64% {
            transform:translate(88px,60.733px)
          }
          64.5% {
            transform:translate(88px,59.692px)
          }
          65% {
            transform:translate(88px,58.65px)
          }
          65.5% {
            transform:translate(88px,57.608px)
          }
          66% {
            transform:translate(88px,56.567px)
          }
          66.5% {
            transform:translate(88px,55.525px)
          }
          67% {
            transform:translate(88px,54.483px)
          }
          67.5% {
            transform:translate(88px,53.442px)
          }
          68% {
            transform:translate(88px,52.4px)
          }
          68.5% {
            transform:translate(89.667px,52.511px)
          }
          69% {
            transform:translate(91.333px,52.622px)
          }
          69.5% {
            transform:translate(93px,52.733px)
          }
          70% {
            transform:translate(94.667px,52.844px)
          }
          70.5% {
            transform:translate(96.333px,52.956px)
          }
          71% {
            transform:translate(98px,53.067px)
          }
          71.5% {
            transform:translate(99.667px,53.178px)
          }
          72% {
            transform:translate(101.333px,53.289px)
          }
          72.5% {
            transform:translate(103px,53.4px)
          }
          73% {
            transform:translate(104.667px,53.511px)
          }
          73.5% {
            transform:translate(106.333px,53.622px)
          }
          74% {
            transform:translate(108px,53.733px)
          }
          74.5% {
            transform:translate(109.667px,53.844px)
          }
          75% {
            transform:translate(111.333px,53.956px)
          }
          75.5% {
            transform:translate(113px,54.067px)
          }
          76% {
            transform:translate(114.667px,54.178px)
          }
          76.5% {
            transform:translate(116.333px,54.289px)
          }
          77% {
            transform:translate(118px,54.4px)
          }
          77.5% {
            transform:translate(118.4px,55.809px)
          }
          78% {
            transform:translate(118.8px,57.218px)
          }
          78.5% {
            transform:translate(119.2px,58.627px)
          }
          79% {
            transform:translate(119.6px,60.036px)
          }
          79.5% {
            transform:translate(120px,61.445px)
          }
          80% {
            transform:translate(120.4px,62.855px)
          }
          80.5% {
            transform:translate(120.8px,64.264px)
          }
          81% {
            transform:translate(121.2px,65.673px)
          }
          81.5% {
            transform:translate(121.6px,67.082px)
          }
          82% {
            transform:translate(122px,68.491px)
          }
          82.5% {
            transform:translate(122.4px,69.9px)
          }
          83% {
            transform:translate(122.8px,71.309px)
          }
          83.5% {
            transform:translate(123.2px,72.718px)
          }
          84% {
            transform:translate(123.6px,74.127px)
          }
          84.5% {
            transform:translate(124px,75.536px)
          }
          85% {
            transform:translate(124.4px,76.945px)
          }
          85.5% {
            transform:translate(124.8px,78.355px)
          }
          86% {
            transform:translate(125.2px,79.764px)
          }
          86.5% {
            transform:translate(125.6px,81.173px)
          }
          87% {
            transform:translate(126px,82.582px)
          }
          87.5% {
            transform:translate(126.4px,83.991px)
          }
          88% {
            transform:translate(126.8px,85.4px)
          }
          88.5% {
            transform:translate(126.8px,85.4px)
          }
          89% {
            transform:translate(126.8px,85.4px)
          }
          89.5% {
            transform:translate(126.8px,85.4px)
          }
          90% {
            transform:translate(126.8px,85.4px)
          }
          90.5% {
            transform:translate(126.8px,85.4px)
          }
          91% {
            transform:translate(126.8px,85.4px)
          }
          91.5% {
            transform:translate(126.8px,85.4px)
          }
          92% {
            transform:translate(126.8px,85.4px)
          }
          92.5% {
            transform:translate(126.8px,85.4px)
          }
          93% {
            transform:translate(126.8px,85.4px)
          }
          93.5% {
            transform:translate(126.8px,85.4px)
          }
          94% {
            transform:translate(126.8px,85.4px)
          }
          94.5% {
            transform:translate(126.8px,85.4px)
          }
          95% {
            transform:translate(126.8px,85.4px)
          }
          95.5% {
            transform:translate(126.8px,85.4px)
          }
          96% {
            transform:translate(126.8px,85.4px)
          }
          96.5% {
            transform:translate(126.8px,85.4px)
          }
          97% {
            transform:translate(126.8px,85.4px)
          }
          97.5% {
            transform:translate(126.8px,85.4px)
          }
          98% {
            transform:translate(126.8px,85.4px)
          }
          98.5% {
            transform:translate(126.8px,85.4px)
          }
          99% {
            transform:translate(126.8px,85.4px)
          }
          99.5% {
            transform:translate(126.8px,85.4px)
          }
          100% {
            transform:translate(126.8px,85.4px)
          }
        }
        .bubble {
          fill:#153c35;
          fill-opacity:.25;
          stroke:#91cbae;
          stroke-width:1
        }
        .mineral {
          fill:#cc9b50;
          stroke:#f5d490;
          stroke-width:.8
        }
        .gangue {
          fill:#466f61;
          stroke:#78988a;
          stroke-width:.7
        }
        .gas {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.1;
          stroke-dasharray:2 3;
          animation:gas 1s linear infinite
        }
        .deflect {
          animation:deflect 12s linear infinite
        }
        .cycle {
          animation:cycle 12s linear infinite
        }
        @keyframes deflect {
          0%,21%,36%,100% {
            transform:translateX(0)
          }
          25%,29% {
            transform:translateX(-5px)
          }
        }
        @keyframes gas {
          to {
            stroke-dashoffset:10
          }
        }
        @keyframes cycle {
          0%,3%,98%,100% {
            opacity:0
          }
          6%,96% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Froth Flotation">
        <path fill="#14332c" d="M20,50H100V122H20Z"/>
        <path fill="#2b4939" d="M20,43H100V57H20Z"/>
        <circle fill="none" stroke="#5f8f76" stroke-width=".7" cx="29" cy="47" r="4.5"/>
        <circle fill="none" stroke="#5f8f76" stroke-width=".7" cx="41" cy="52" r="4.5"/>
        <circle fill="none" stroke="#5f8f76" stroke-width=".7" cx="53" cy="47" r="4.5"/>
        <circle fill="none" stroke="#5f8f76" stroke-width=".7" cx="65" cy="52" r="4.5"/>
        <circle fill="none" stroke="#5f8f76" stroke-width=".7" cx="77" cy="47" r="4.5"/>
        <circle fill="none" stroke="#5f8f76" stroke-width=".7" cx="89" cy="52" r="4.5"/>
        <path class="ink muted" d="M20,35V122H100V58H107V96H134V35M36,113H90M63,113V132"/>
        <path class="gas" d="M42,130V117M65,130V117M88,130V117"/>
        <g class="cycle">
          <circle class="bubble b0" r="6"/>
          <path class="mineral m0" d="M0,-2.7L2.5,2H-2.5Z"/>
          <circle class="bubble b1" r="6"/>
          <path class="mineral m1" d="M0,-2.7L2.5,2H-2.5Z"/>
          <circle class="bubble b2" r="6"/>
          <path class="mineral m2" d="M0,-2.7L2.5,2H-2.5Z"/>
          <circle class="gangue" cx="30" cy="92" r="2.8"/>
          <circle class="gangue" cx="77" cy="108" r="2.8"/>
          <circle class="gangue deflect" cx="33" cy="68" r="2.8"/>
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

if (!customElements.get("concept-froth-flotation")) {
  customElements.define("concept-froth-flotation", ConceptFrothFlotation);
}
