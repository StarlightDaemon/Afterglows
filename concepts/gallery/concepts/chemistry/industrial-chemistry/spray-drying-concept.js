// Spray Drying. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSprayDrying extends HTMLElement {
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
        .drop0 {
          transform:translate(51px,128px);
          opacity:1;
          animation:drop0 12s linear infinite
        }
        .water0 {
          opacity:0;
          animation:water0 12s linear infinite
        }
        @keyframes drop0 {
          0% {
            transform:translate(64px,43px);
            opacity:0
          }
          0.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          1% {
            transform:translate(64px,43px);
            opacity:0
          }
          1.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          2% {
            transform:translate(64px,43px);
            opacity:0
          }
          2.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          3% {
            transform:translate(64px,43px);
            opacity:0
          }
          3.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          4% {
            transform:translate(64px,43px);
            opacity:0
          }
          4.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          5% {
            transform:translate(64px,43px);
            opacity:0
          }
          5.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          6% {
            transform:translate(64px,43px);
            opacity:0
          }
          6.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          7% {
            transform:translate(64px,43px);
            opacity:0
          }
          7.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          8% {
            transform:translate(64px,43px);
            opacity:0
          }
          8.5% {
            transform:translate(61.8px,44.2px);
            opacity:0.5
          }
          9% {
            transform:translate(59.6px,45.4px);
            opacity:1
          }
          9.5% {
            transform:translate(57.4px,46.6px);
            opacity:1
          }
          10% {
            transform:translate(55.2px,47.8px);
            opacity:1
          }
          10.5% {
            transform:translate(53px,49px);
            opacity:1
          }
          11% {
            transform:translate(50.8px,50.2px);
            opacity:1
          }
          11.5% {
            transform:translate(48.6px,51.4px);
            opacity:1
          }
          12% {
            transform:translate(46.4px,52.6px);
            opacity:1
          }
          12.5% {
            transform:translate(44.2px,53.8px);
            opacity:1
          }
          13% {
            transform:translate(42px,55px);
            opacity:1
          }
          13.5% {
            transform:translate(42px,55.833px);
            opacity:1
          }
          14% {
            transform:translate(42px,56.667px);
            opacity:1
          }
          14.5% {
            transform:translate(42px,57.5px);
            opacity:1
          }
          15% {
            transform:translate(42px,58.333px);
            opacity:1
          }
          15.5% {
            transform:translate(42px,59.167px);
            opacity:1
          }
          16% {
            transform:translate(42px,60px);
            opacity:1
          }
          16.5% {
            transform:translate(42px,60.833px);
            opacity:1
          }
          17% {
            transform:translate(42px,61.667px);
            opacity:1
          }
          17.5% {
            transform:translate(42px,62.5px);
            opacity:1
          }
          18% {
            transform:translate(42px,63.333px);
            opacity:1
          }
          18.5% {
            transform:translate(42px,64.167px);
            opacity:1
          }
          19% {
            transform:translate(42px,65px);
            opacity:1
          }
          19.5% {
            transform:translate(42px,65.833px);
            opacity:1
          }
          20% {
            transform:translate(42px,66.667px);
            opacity:1
          }
          20.5% {
            transform:translate(42px,67.5px);
            opacity:1
          }
          21% {
            transform:translate(42px,68.333px);
            opacity:1
          }
          21.5% {
            transform:translate(42px,69.167px);
            opacity:1
          }
          22% {
            transform:translate(42px,70px);
            opacity:1
          }
          22.5% {
            transform:translate(42px,70.833px);
            opacity:1
          }
          23% {
            transform:translate(42px,71.667px);
            opacity:1
          }
          23.5% {
            transform:translate(42px,72.5px);
            opacity:1
          }
          24% {
            transform:translate(42px,73.333px);
            opacity:1
          }
          24.5% {
            transform:translate(42px,74.167px);
            opacity:1
          }
          25% {
            transform:translate(42px,75px);
            opacity:1
          }
          25.5% {
            transform:translate(42px,75.833px);
            opacity:1
          }
          26% {
            transform:translate(42px,76.667px);
            opacity:1
          }
          26.5% {
            transform:translate(42px,77.5px);
            opacity:1
          }
          27% {
            transform:translate(42px,78.333px);
            opacity:1
          }
          27.5% {
            transform:translate(42px,79.167px);
            opacity:1
          }
          28% {
            transform:translate(42px,80px);
            opacity:1
          }
          28.5% {
            transform:translate(42.8px,81.25px);
            opacity:1
          }
          29% {
            transform:translate(43.6px,82.5px);
            opacity:1
          }
          29.5% {
            transform:translate(44.4px,83.75px);
            opacity:1
          }
          30% {
            transform:translate(45.2px,85px);
            opacity:1
          }
          30.5% {
            transform:translate(46px,86.25px);
            opacity:1
          }
          31% {
            transform:translate(46.8px,87.5px);
            opacity:1
          }
          31.5% {
            transform:translate(47.6px,88.75px);
            opacity:1
          }
          32% {
            transform:translate(48.4px,90px);
            opacity:1
          }
          32.5% {
            transform:translate(49.2px,91.25px);
            opacity:1
          }
          33% {
            transform:translate(50px,92.5px);
            opacity:1
          }
          33.5% {
            transform:translate(50.8px,93.75px);
            opacity:1
          }
          34% {
            transform:translate(51.6px,95px);
            opacity:1
          }
          34.5% {
            transform:translate(52.4px,96.25px);
            opacity:1
          }
          35% {
            transform:translate(53.2px,97.5px);
            opacity:1
          }
          35.5% {
            transform:translate(54px,98.75px);
            opacity:1
          }
          36% {
            transform:translate(54.8px,100px);
            opacity:1
          }
          36.5% {
            transform:translate(55.6px,101.25px);
            opacity:1
          }
          37% {
            transform:translate(56.4px,102.5px);
            opacity:1
          }
          37.5% {
            transform:translate(57.2px,103.75px);
            opacity:1
          }
          38% {
            transform:translate(58px,105px);
            opacity:1
          }
          38.5% {
            transform:translate(58.3px,105.55px);
            opacity:1
          }
          39% {
            transform:translate(58.6px,106.1px);
            opacity:1
          }
          39.5% {
            transform:translate(58.9px,106.65px);
            opacity:1
          }
          40% {
            transform:translate(59.2px,107.2px);
            opacity:1
          }
          40.5% {
            transform:translate(59.5px,107.75px);
            opacity:1
          }
          41% {
            transform:translate(59.8px,108.3px);
            opacity:1
          }
          41.5% {
            transform:translate(60.1px,108.85px);
            opacity:1
          }
          42% {
            transform:translate(60.4px,109.4px);
            opacity:1
          }
          42.5% {
            transform:translate(60.7px,109.95px);
            opacity:1
          }
          43% {
            transform:translate(61px,110.5px);
            opacity:1
          }
          43.5% {
            transform:translate(61.3px,111.05px);
            opacity:1
          }
          44% {
            transform:translate(61.6px,111.6px);
            opacity:1
          }
          44.5% {
            transform:translate(61.9px,112.15px);
            opacity:1
          }
          45% {
            transform:translate(62.2px,112.7px);
            opacity:1
          }
          45.5% {
            transform:translate(62.5px,113.25px);
            opacity:1
          }
          46% {
            transform:translate(62.8px,113.8px);
            opacity:1
          }
          46.5% {
            transform:translate(63.1px,114.35px);
            opacity:1
          }
          47% {
            transform:translate(63.4px,114.9px);
            opacity:1
          }
          47.5% {
            transform:translate(63.7px,115.45px);
            opacity:1
          }
          48% {
            transform:translate(64px,116px);
            opacity:1
          }
          48.5% {
            transform:translate(64px,117px);
            opacity:1
          }
          49% {
            transform:translate(64px,118px);
            opacity:1
          }
          49.5% {
            transform:translate(64px,119px);
            opacity:1
          }
          50% {
            transform:translate(64px,120px);
            opacity:1
          }
          50.5% {
            transform:translate(64px,121px);
            opacity:1
          }
          51% {
            transform:translate(64px,122px);
            opacity:1
          }
          51.5% {
            transform:translate(64px,123px);
            opacity:1
          }
          52% {
            transform:translate(64px,124px);
            opacity:1
          }
          52.5% {
            transform:translate(64px,125px);
            opacity:1
          }
          53% {
            transform:translate(64px,126px);
            opacity:1
          }
          53.5% {
            transform:translate(62.7px,126.2px);
            opacity:1
          }
          54% {
            transform:translate(61.4px,126.4px);
            opacity:1
          }
          54.5% {
            transform:translate(60.1px,126.6px);
            opacity:1
          }
          55% {
            transform:translate(58.8px,126.8px);
            opacity:1
          }
          55.5% {
            transform:translate(57.5px,127px);
            opacity:1
          }
          56% {
            transform:translate(56.2px,127.2px);
            opacity:1
          }
          56.5% {
            transform:translate(54.9px,127.4px);
            opacity:1
          }
          57% {
            transform:translate(53.6px,127.6px);
            opacity:1
          }
          57.5% {
            transform:translate(52.3px,127.8px);
            opacity:1
          }
          58% {
            transform:translate(51px,128px);
            opacity:1
          }
          58.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          59% {
            transform:translate(51px,128px);
            opacity:1
          }
          59.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          60% {
            transform:translate(51px,128px);
            opacity:1
          }
          60.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          61% {
            transform:translate(51px,128px);
            opacity:1
          }
          61.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          62% {
            transform:translate(51px,128px);
            opacity:1
          }
          62.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          63% {
            transform:translate(51px,128px);
            opacity:1
          }
          63.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          64% {
            transform:translate(51px,128px);
            opacity:1
          }
          64.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          65% {
            transform:translate(51px,128px);
            opacity:1
          }
          65.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          66% {
            transform:translate(51px,128px);
            opacity:1
          }
          66.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          67% {
            transform:translate(51px,128px);
            opacity:1
          }
          67.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          68% {
            transform:translate(51px,128px);
            opacity:1
          }
          68.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          69% {
            transform:translate(51px,128px);
            opacity:1
          }
          69.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          70% {
            transform:translate(51px,128px);
            opacity:1
          }
          70.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          71% {
            transform:translate(51px,128px);
            opacity:1
          }
          71.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          72% {
            transform:translate(51px,128px);
            opacity:1
          }
          72.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          73% {
            transform:translate(51px,128px);
            opacity:1
          }
          73.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          74% {
            transform:translate(51px,128px);
            opacity:1
          }
          74.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          75% {
            transform:translate(51px,128px);
            opacity:1
          }
          75.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          76% {
            transform:translate(51px,128px);
            opacity:1
          }
          76.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          77% {
            transform:translate(51px,128px);
            opacity:1
          }
          77.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          78% {
            transform:translate(51px,128px);
            opacity:1
          }
          78.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          79% {
            transform:translate(51px,128px);
            opacity:1
          }
          79.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          80% {
            transform:translate(51px,128px);
            opacity:1
          }
          80.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          81% {
            transform:translate(51px,128px);
            opacity:1
          }
          81.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          82% {
            transform:translate(51px,128px);
            opacity:1
          }
          82.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          83% {
            transform:translate(51px,128px);
            opacity:1
          }
          83.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          84% {
            transform:translate(51px,128px);
            opacity:1
          }
          84.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          85% {
            transform:translate(51px,128px);
            opacity:1
          }
          85.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          86% {
            transform:translate(51px,128px);
            opacity:1
          }
          86.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          87% {
            transform:translate(51px,128px);
            opacity:1
          }
          87.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          88% {
            transform:translate(51px,128px);
            opacity:1
          }
          88.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          89% {
            transform:translate(51px,128px);
            opacity:1
          }
          89.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          90% {
            transform:translate(51px,128px);
            opacity:1
          }
          90.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          91% {
            transform:translate(51px,128px);
            opacity:1
          }
          91.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          92% {
            transform:translate(51px,128px);
            opacity:1
          }
          92.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          93% {
            transform:translate(51px,128px);
            opacity:1
          }
          93.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          94% {
            transform:translate(51px,128px);
            opacity:1
          }
          94.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          95% {
            transform:translate(51px,128px);
            opacity:1
          }
          95.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          96% {
            transform:translate(51px,128px);
            opacity:1
          }
          96.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          97% {
            transform:translate(51px,128px);
            opacity:1
          }
          97.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          98% {
            transform:translate(51px,128px);
            opacity:1
          }
          98.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          99% {
            transform:translate(51px,128px);
            opacity:1
          }
          99.5% {
            transform:translate(51px,128px);
            opacity:1
          }
          100% {
            transform:translate(51px,128px);
            opacity:1
          }
        }
        @keyframes water0 {
          0% {
            r:3px;
            opacity:1
          }
          0.5% {
            r:3px;
            opacity:1
          }
          1% {
            r:3px;
            opacity:1
          }
          1.5% {
            r:3px;
            opacity:1
          }
          2% {
            r:3px;
            opacity:1
          }
          2.5% {
            r:3px;
            opacity:1
          }
          3% {
            r:3px;
            opacity:1
          }
          3.5% {
            r:3px;
            opacity:1
          }
          4% {
            r:3px;
            opacity:1
          }
          4.5% {
            r:3px;
            opacity:1
          }
          5% {
            r:3px;
            opacity:1
          }
          5.5% {
            r:3px;
            opacity:1
          }
          6% {
            r:3px;
            opacity:1
          }
          6.5% {
            r:3px;
            opacity:1
          }
          7% {
            r:3px;
            opacity:1
          }
          7.5% {
            r:3px;
            opacity:1
          }
          8% {
            r:3px;
            opacity:1
          }
          8.5% {
            r:3.3px;
            opacity:1
          }
          9% {
            r:3.6px;
            opacity:1
          }
          9.5% {
            r:3.9px;
            opacity:1
          }
          10% {
            r:4.2px;
            opacity:1
          }
          10.5% {
            r:4.5px;
            opacity:1
          }
          11% {
            r:4.8px;
            opacity:1
          }
          11.5% {
            r:5.1px;
            opacity:1
          }
          12% {
            r:5.4px;
            opacity:1
          }
          12.5% {
            r:5.7px;
            opacity:1
          }
          13% {
            r:6px;
            opacity:1
          }
          13.5% {
            r:5.948px;
            opacity:1
          }
          14% {
            r:5.896px;
            opacity:1
          }
          14.5% {
            r:5.844px;
            opacity:1
          }
          15% {
            r:5.792px;
            opacity:1
          }
          15.5% {
            r:5.74px;
            opacity:1
          }
          16% {
            r:5.688px;
            opacity:1
          }
          16.5% {
            r:5.636px;
            opacity:1
          }
          17% {
            r:5.584px;
            opacity:1
          }
          17.5% {
            r:5.532px;
            opacity:1
          }
          18% {
            r:5.48px;
            opacity:1
          }
          18.5% {
            r:5.428px;
            opacity:1
          }
          19% {
            r:5.376px;
            opacity:1
          }
          19.5% {
            r:5.324px;
            opacity:1
          }
          20% {
            r:5.272px;
            opacity:1
          }
          20.5% {
            r:5.22px;
            opacity:1
          }
          21% {
            r:5.168px;
            opacity:1
          }
          21.5% {
            r:5.116px;
            opacity:1
          }
          22% {
            r:5.064px;
            opacity:1
          }
          22.5% {
            r:5.012px;
            opacity:1
          }
          23% {
            r:4.96px;
            opacity:1
          }
          23.5% {
            r:4.908px;
            opacity:1
          }
          24% {
            r:4.856px;
            opacity:1
          }
          24.5% {
            r:4.804px;
            opacity:1
          }
          25% {
            r:4.752px;
            opacity:1
          }
          25.5% {
            r:4.7px;
            opacity:1
          }
          26% {
            r:4.648px;
            opacity:1
          }
          26.5% {
            r:4.596px;
            opacity:1
          }
          27% {
            r:4.544px;
            opacity:1
          }
          27.5% {
            r:4.492px;
            opacity:1
          }
          28% {
            r:4.44px;
            opacity:1
          }
          28.5% {
            r:4.388px;
            opacity:1
          }
          29% {
            r:4.336px;
            opacity:1
          }
          29.5% {
            r:4.284px;
            opacity:1
          }
          30% {
            r:4.232px;
            opacity:1
          }
          30.5% {
            r:4.18px;
            opacity:1
          }
          31% {
            r:4.128px;
            opacity:1
          }
          31.5% {
            r:4.076px;
            opacity:1
          }
          32% {
            r:4.024px;
            opacity:1
          }
          32.5% {
            r:3.972px;
            opacity:1
          }
          33% {
            r:3.92px;
            opacity:1
          }
          33.5% {
            r:3.868px;
            opacity:1
          }
          34% {
            r:3.816px;
            opacity:1
          }
          34.5% {
            r:3.764px;
            opacity:1
          }
          35% {
            r:3.712px;
            opacity:1
          }
          35.5% {
            r:3.66px;
            opacity:1
          }
          36% {
            r:3.608px;
            opacity:1
          }
          36.5% {
            r:3.556px;
            opacity:1
          }
          37% {
            r:3.504px;
            opacity:1
          }
          37.5% {
            r:3.452px;
            opacity:1
          }
          38% {
            r:3.4px;
            opacity:1
          }
          38.5% {
            r:3.4px;
            opacity:0.9
          }
          39% {
            r:3.4px;
            opacity:0.8
          }
          39.5% {
            r:3.4px;
            opacity:0.7
          }
          40% {
            r:3.4px;
            opacity:0.6
          }
          40.5% {
            r:3.4px;
            opacity:0.5
          }
          41% {
            r:3.4px;
            opacity:0.4
          }
          41.5% {
            r:3.4px;
            opacity:0.3
          }
          42% {
            r:3.4px;
            opacity:0.2
          }
          42.5% {
            r:3.4px;
            opacity:0.1
          }
          43% {
            r:3.4px;
            opacity:0
          }
          43.5% {
            r:3.4px;
            opacity:0
          }
          44% {
            r:3.4px;
            opacity:0
          }
          44.5% {
            r:3.4px;
            opacity:0
          }
          45% {
            r:3.4px;
            opacity:0
          }
          45.5% {
            r:3.4px;
            opacity:0
          }
          46% {
            r:3.4px;
            opacity:0
          }
          46.5% {
            r:3.4px;
            opacity:0
          }
          47% {
            r:3.4px;
            opacity:0
          }
          47.5% {
            r:3.4px;
            opacity:0
          }
          48% {
            r:3.4px;
            opacity:0
          }
          48.5% {
            r:3.4px;
            opacity:0
          }
          49% {
            r:3.4px;
            opacity:0
          }
          49.5% {
            r:3.4px;
            opacity:0
          }
          50% {
            r:3.4px;
            opacity:0
          }
          50.5% {
            r:3.4px;
            opacity:0
          }
          51% {
            r:3.4px;
            opacity:0
          }
          51.5% {
            r:3.4px;
            opacity:0
          }
          52% {
            r:3.4px;
            opacity:0
          }
          52.5% {
            r:3.4px;
            opacity:0
          }
          53% {
            r:3.4px;
            opacity:0
          }
          53.5% {
            r:3.4px;
            opacity:0
          }
          54% {
            r:3.4px;
            opacity:0
          }
          54.5% {
            r:3.4px;
            opacity:0
          }
          55% {
            r:3.4px;
            opacity:0
          }
          55.5% {
            r:3.4px;
            opacity:0
          }
          56% {
            r:3.4px;
            opacity:0
          }
          56.5% {
            r:3.4px;
            opacity:0
          }
          57% {
            r:3.4px;
            opacity:0
          }
          57.5% {
            r:3.4px;
            opacity:0
          }
          58% {
            r:3.4px;
            opacity:0
          }
          58.5% {
            r:3.4px;
            opacity:0
          }
          59% {
            r:3.4px;
            opacity:0
          }
          59.5% {
            r:3.4px;
            opacity:0
          }
          60% {
            r:3.4px;
            opacity:0
          }
          60.5% {
            r:3.4px;
            opacity:0
          }
          61% {
            r:3.4px;
            opacity:0
          }
          61.5% {
            r:3.4px;
            opacity:0
          }
          62% {
            r:3.4px;
            opacity:0
          }
          62.5% {
            r:3.4px;
            opacity:0
          }
          63% {
            r:3.4px;
            opacity:0
          }
          63.5% {
            r:3.4px;
            opacity:0
          }
          64% {
            r:3.4px;
            opacity:0
          }
          64.5% {
            r:3.4px;
            opacity:0
          }
          65% {
            r:3.4px;
            opacity:0
          }
          65.5% {
            r:3.4px;
            opacity:0
          }
          66% {
            r:3.4px;
            opacity:0
          }
          66.5% {
            r:3.4px;
            opacity:0
          }
          67% {
            r:3.4px;
            opacity:0
          }
          67.5% {
            r:3.4px;
            opacity:0
          }
          68% {
            r:3.4px;
            opacity:0
          }
          68.5% {
            r:3.4px;
            opacity:0
          }
          69% {
            r:3.4px;
            opacity:0
          }
          69.5% {
            r:3.4px;
            opacity:0
          }
          70% {
            r:3.4px;
            opacity:0
          }
          70.5% {
            r:3.4px;
            opacity:0
          }
          71% {
            r:3.4px;
            opacity:0
          }
          71.5% {
            r:3.4px;
            opacity:0
          }
          72% {
            r:3.4px;
            opacity:0
          }
          72.5% {
            r:3.4px;
            opacity:0
          }
          73% {
            r:3.4px;
            opacity:0
          }
          73.5% {
            r:3.4px;
            opacity:0
          }
          74% {
            r:3.4px;
            opacity:0
          }
          74.5% {
            r:3.4px;
            opacity:0
          }
          75% {
            r:3.4px;
            opacity:0
          }
          75.5% {
            r:3.4px;
            opacity:0
          }
          76% {
            r:3.4px;
            opacity:0
          }
          76.5% {
            r:3.4px;
            opacity:0
          }
          77% {
            r:3.4px;
            opacity:0
          }
          77.5% {
            r:3.4px;
            opacity:0
          }
          78% {
            r:3.4px;
            opacity:0
          }
          78.5% {
            r:3.4px;
            opacity:0
          }
          79% {
            r:3.4px;
            opacity:0
          }
          79.5% {
            r:3.4px;
            opacity:0
          }
          80% {
            r:3.4px;
            opacity:0
          }
          80.5% {
            r:3.4px;
            opacity:0
          }
          81% {
            r:3.4px;
            opacity:0
          }
          81.5% {
            r:3.4px;
            opacity:0
          }
          82% {
            r:3.4px;
            opacity:0
          }
          82.5% {
            r:3.4px;
            opacity:0
          }
          83% {
            r:3.4px;
            opacity:0
          }
          83.5% {
            r:3.4px;
            opacity:0
          }
          84% {
            r:3.4px;
            opacity:0
          }
          84.5% {
            r:3.4px;
            opacity:0
          }
          85% {
            r:3.4px;
            opacity:0
          }
          85.5% {
            r:3.4px;
            opacity:0
          }
          86% {
            r:3.4px;
            opacity:0
          }
          86.5% {
            r:3.4px;
            opacity:0
          }
          87% {
            r:3.4px;
            opacity:0
          }
          87.5% {
            r:3.4px;
            opacity:0
          }
          88% {
            r:3.4px;
            opacity:0
          }
          88.5% {
            r:3.4px;
            opacity:0
          }
          89% {
            r:3.4px;
            opacity:0
          }
          89.5% {
            r:3.4px;
            opacity:0
          }
          90% {
            r:3.4px;
            opacity:0
          }
          90.5% {
            r:3.4px;
            opacity:0
          }
          91% {
            r:3.4px;
            opacity:0
          }
          91.5% {
            r:3.4px;
            opacity:0
          }
          92% {
            r:3.4px;
            opacity:0
          }
          92.5% {
            r:3.4px;
            opacity:0
          }
          93% {
            r:3.4px;
            opacity:0
          }
          93.5% {
            r:3.4px;
            opacity:0
          }
          94% {
            r:3.4px;
            opacity:0
          }
          94.5% {
            r:3.4px;
            opacity:0
          }
          95% {
            r:3.4px;
            opacity:0
          }
          95.5% {
            r:3.4px;
            opacity:0
          }
          96% {
            r:3.4px;
            opacity:0
          }
          96.5% {
            r:3.4px;
            opacity:0
          }
          97% {
            r:3.4px;
            opacity:0
          }
          97.5% {
            r:3.4px;
            opacity:0
          }
          98% {
            r:3.4px;
            opacity:0
          }
          98.5% {
            r:3.4px;
            opacity:0
          }
          99% {
            r:3.4px;
            opacity:0
          }
          99.5% {
            r:3.4px;
            opacity:0
          }
          100% {
            r:3.4px;
            opacity:0
          }
        }
        .drop1 {
          transform:translate(58.14px,125.6px);
          opacity:1;
          animation:drop1 12s linear infinite
        }
        .water1 {
          opacity:0;
          animation:water1 12s linear infinite
        }
        @keyframes drop1 {
          0% {
            transform:translate(64px,43px);
            opacity:0
          }
          0.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          1% {
            transform:translate(64px,43px);
            opacity:0
          }
          1.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          2% {
            transform:translate(64px,43px);
            opacity:0
          }
          2.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          3% {
            transform:translate(64px,43px);
            opacity:0
          }
          3.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          4% {
            transform:translate(64px,43px);
            opacity:0
          }
          4.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          5% {
            transform:translate(64px,43px);
            opacity:0
          }
          5.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          6% {
            transform:translate(64px,43px);
            opacity:0
          }
          6.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          7% {
            transform:translate(64px,43px);
            opacity:0
          }
          7.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          8% {
            transform:translate(64px,43px);
            opacity:0
          }
          8.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          9% {
            transform:translate(64px,43px);
            opacity:0
          }
          9.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          10% {
            transform:translate(64px,43px);
            opacity:0
          }
          10.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          11% {
            transform:translate(64px,43px);
            opacity:0
          }
          11.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          12% {
            transform:translate(64px,43px);
            opacity:0
          }
          12.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          13% {
            transform:translate(64px,43px);
            opacity:0
          }
          13.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          14% {
            transform:translate(64px,43px);
            opacity:0
          }
          14.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          15% {
            transform:translate(64px,43px);
            opacity:0
          }
          15.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          16% {
            transform:translate(64px,43px);
            opacity:0
          }
          16.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          17% {
            transform:translate(64px,43px);
            opacity:0
          }
          17.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          18% {
            transform:translate(64px,43px);
            opacity:0
          }
          18.5% {
            transform:translate(62.9px,44.2px);
            opacity:0.5
          }
          19% {
            transform:translate(61.8px,45.4px);
            opacity:1
          }
          19.5% {
            transform:translate(60.7px,46.6px);
            opacity:1
          }
          20% {
            transform:translate(59.6px,47.8px);
            opacity:1
          }
          20.5% {
            transform:translate(58.5px,49px);
            opacity:1
          }
          21% {
            transform:translate(57.4px,50.2px);
            opacity:1
          }
          21.5% {
            transform:translate(56.3px,51.4px);
            opacity:1
          }
          22% {
            transform:translate(55.2px,52.6px);
            opacity:1
          }
          22.5% {
            transform:translate(54.1px,53.8px);
            opacity:1
          }
          23% {
            transform:translate(53px,55px);
            opacity:1
          }
          23.5% {
            transform:translate(53px,55.833px);
            opacity:1
          }
          24% {
            transform:translate(53px,56.667px);
            opacity:1
          }
          24.5% {
            transform:translate(53px,57.5px);
            opacity:1
          }
          25% {
            transform:translate(53px,58.333px);
            opacity:1
          }
          25.5% {
            transform:translate(53px,59.167px);
            opacity:1
          }
          26% {
            transform:translate(53px,60px);
            opacity:1
          }
          26.5% {
            transform:translate(53px,60.833px);
            opacity:1
          }
          27% {
            transform:translate(53px,61.667px);
            opacity:1
          }
          27.5% {
            transform:translate(53px,62.5px);
            opacity:1
          }
          28% {
            transform:translate(53px,63.333px);
            opacity:1
          }
          28.5% {
            transform:translate(53px,64.167px);
            opacity:1
          }
          29% {
            transform:translate(53px,65px);
            opacity:1
          }
          29.5% {
            transform:translate(53px,65.833px);
            opacity:1
          }
          30% {
            transform:translate(53px,66.667px);
            opacity:1
          }
          30.5% {
            transform:translate(53px,67.5px);
            opacity:1
          }
          31% {
            transform:translate(53px,68.333px);
            opacity:1
          }
          31.5% {
            transform:translate(53px,69.167px);
            opacity:1
          }
          32% {
            transform:translate(53px,70px);
            opacity:1
          }
          32.5% {
            transform:translate(53px,70.833px);
            opacity:1
          }
          33% {
            transform:translate(53px,71.667px);
            opacity:1
          }
          33.5% {
            transform:translate(53px,72.5px);
            opacity:1
          }
          34% {
            transform:translate(53px,73.333px);
            opacity:1
          }
          34.5% {
            transform:translate(53px,74.167px);
            opacity:1
          }
          35% {
            transform:translate(53px,75px);
            opacity:1
          }
          35.5% {
            transform:translate(53px,75.833px);
            opacity:1
          }
          36% {
            transform:translate(53px,76.667px);
            opacity:1
          }
          36.5% {
            transform:translate(53px,77.5px);
            opacity:1
          }
          37% {
            transform:translate(53px,78.333px);
            opacity:1
          }
          37.5% {
            transform:translate(53px,79.167px);
            opacity:1
          }
          38% {
            transform:translate(53px,80px);
            opacity:1
          }
          38.5% {
            transform:translate(53.4px,81.25px);
            opacity:1
          }
          39% {
            transform:translate(53.8px,82.5px);
            opacity:1
          }
          39.5% {
            transform:translate(54.2px,83.75px);
            opacity:1
          }
          40% {
            transform:translate(54.6px,85px);
            opacity:1
          }
          40.5% {
            transform:translate(55px,86.25px);
            opacity:1
          }
          41% {
            transform:translate(55.4px,87.5px);
            opacity:1
          }
          41.5% {
            transform:translate(55.8px,88.75px);
            opacity:1
          }
          42% {
            transform:translate(56.2px,90px);
            opacity:1
          }
          42.5% {
            transform:translate(56.6px,91.25px);
            opacity:1
          }
          43% {
            transform:translate(57px,92.5px);
            opacity:1
          }
          43.5% {
            transform:translate(57.4px,93.75px);
            opacity:1
          }
          44% {
            transform:translate(57.8px,95px);
            opacity:1
          }
          44.5% {
            transform:translate(58.2px,96.25px);
            opacity:1
          }
          45% {
            transform:translate(58.6px,97.5px);
            opacity:1
          }
          45.5% {
            transform:translate(59px,98.75px);
            opacity:1
          }
          46% {
            transform:translate(59.4px,100px);
            opacity:1
          }
          46.5% {
            transform:translate(59.8px,101.25px);
            opacity:1
          }
          47% {
            transform:translate(60.2px,102.5px);
            opacity:1
          }
          47.5% {
            transform:translate(60.6px,103.75px);
            opacity:1
          }
          48% {
            transform:translate(61px,105px);
            opacity:1
          }
          48.5% {
            transform:translate(61.15px,105.55px);
            opacity:1
          }
          49% {
            transform:translate(61.3px,106.1px);
            opacity:1
          }
          49.5% {
            transform:translate(61.45px,106.65px);
            opacity:1
          }
          50% {
            transform:translate(61.6px,107.2px);
            opacity:1
          }
          50.5% {
            transform:translate(61.75px,107.75px);
            opacity:1
          }
          51% {
            transform:translate(61.9px,108.3px);
            opacity:1
          }
          51.5% {
            transform:translate(62.05px,108.85px);
            opacity:1
          }
          52% {
            transform:translate(62.2px,109.4px);
            opacity:1
          }
          52.5% {
            transform:translate(62.35px,109.95px);
            opacity:1
          }
          53% {
            transform:translate(62.5px,110.5px);
            opacity:1
          }
          53.5% {
            transform:translate(62.65px,111.05px);
            opacity:1
          }
          54% {
            transform:translate(62.8px,111.6px);
            opacity:1
          }
          54.5% {
            transform:translate(62.95px,112.15px);
            opacity:1
          }
          55% {
            transform:translate(63.1px,112.7px);
            opacity:1
          }
          55.5% {
            transform:translate(63.25px,113.25px);
            opacity:1
          }
          56% {
            transform:translate(63.4px,113.8px);
            opacity:1
          }
          56.5% {
            transform:translate(63.55px,114.35px);
            opacity:1
          }
          57% {
            transform:translate(63.7px,114.9px);
            opacity:1
          }
          57.5% {
            transform:translate(63.85px,115.45px);
            opacity:1
          }
          58% {
            transform:translate(64px,116px);
            opacity:1
          }
          58.5% {
            transform:translate(64px,117px);
            opacity:1
          }
          59% {
            transform:translate(64px,118px);
            opacity:1
          }
          59.5% {
            transform:translate(64px,119px);
            opacity:1
          }
          60% {
            transform:translate(64px,120px);
            opacity:1
          }
          60.5% {
            transform:translate(64px,121px);
            opacity:1
          }
          61% {
            transform:translate(64px,122px);
            opacity:1
          }
          61.5% {
            transform:translate(64px,123px);
            opacity:1
          }
          62% {
            transform:translate(64px,124px);
            opacity:1
          }
          62.5% {
            transform:translate(64px,125px);
            opacity:1
          }
          63% {
            transform:translate(64px,126px);
            opacity:1
          }
          63.5% {
            transform:translate(63.3px,126.2px);
            opacity:1
          }
          64% {
            transform:translate(62.6px,126.4px);
            opacity:1
          }
          64.5% {
            transform:translate(61.9px,126.6px);
            opacity:1
          }
          65% {
            transform:translate(61.2px,126.8px);
            opacity:1
          }
          65.5% {
            transform:translate(60.5px,127px);
            opacity:1
          }
          66% {
            transform:translate(59.8px,127.2px);
            opacity:1
          }
          66.5% {
            transform:translate(59.1px,127.4px);
            opacity:1
          }
          67% {
            transform:translate(58.4px,127.6px);
            opacity:1
          }
          67.5% {
            transform:translate(57.7px,127.8px);
            opacity:1
          }
          68% {
            transform:translate(57px,128px);
            opacity:1
          }
          68.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          69% {
            transform:translate(57px,128px);
            opacity:1
          }
          69.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          70% {
            transform:translate(57px,128px);
            opacity:1
          }
          70.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          71% {
            transform:translate(57px,128px);
            opacity:1
          }
          71.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          72% {
            transform:translate(57px,128px);
            opacity:1
          }
          72.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          73% {
            transform:translate(57px,128px);
            opacity:1
          }
          73.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          74% {
            transform:translate(57px,128px);
            opacity:1
          }
          74.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          75% {
            transform:translate(57px,128px);
            opacity:1
          }
          75.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          76% {
            transform:translate(57px,128px);
            opacity:1
          }
          76.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          77% {
            transform:translate(57px,128px);
            opacity:1
          }
          77.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          78% {
            transform:translate(57px,128px);
            opacity:1
          }
          78.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          79% {
            transform:translate(57px,128px);
            opacity:1
          }
          79.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          80% {
            transform:translate(57px,128px);
            opacity:1
          }
          80.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          81% {
            transform:translate(57px,128px);
            opacity:1
          }
          81.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          82% {
            transform:translate(57px,128px);
            opacity:1
          }
          82.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          83% {
            transform:translate(57px,128px);
            opacity:1
          }
          83.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          84% {
            transform:translate(57px,128px);
            opacity:1
          }
          84.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          85% {
            transform:translate(57px,128px);
            opacity:1
          }
          85.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          86% {
            transform:translate(57px,128px);
            opacity:1
          }
          86.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          87% {
            transform:translate(57px,128px);
            opacity:1
          }
          87.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          88% {
            transform:translate(57px,128px);
            opacity:1
          }
          88.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          89% {
            transform:translate(57px,128px);
            opacity:1
          }
          89.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          90% {
            transform:translate(57px,128px);
            opacity:1
          }
          90.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          91% {
            transform:translate(57px,128px);
            opacity:1
          }
          91.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          92% {
            transform:translate(57px,128px);
            opacity:1
          }
          92.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          93% {
            transform:translate(57px,128px);
            opacity:1
          }
          93.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          94% {
            transform:translate(57px,128px);
            opacity:1
          }
          94.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          95% {
            transform:translate(57px,128px);
            opacity:1
          }
          95.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          96% {
            transform:translate(57px,128px);
            opacity:1
          }
          96.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          97% {
            transform:translate(57px,128px);
            opacity:1
          }
          97.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          98% {
            transform:translate(57px,128px);
            opacity:1
          }
          98.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          99% {
            transform:translate(57px,128px);
            opacity:1
          }
          99.5% {
            transform:translate(57px,128px);
            opacity:1
          }
          100% {
            transform:translate(57px,128px);
            opacity:1
          }
        }
        @keyframes water1 {
          0% {
            r:3px;
            opacity:1
          }
          0.5% {
            r:3px;
            opacity:1
          }
          1% {
            r:3px;
            opacity:1
          }
          1.5% {
            r:3px;
            opacity:1
          }
          2% {
            r:3px;
            opacity:1
          }
          2.5% {
            r:3px;
            opacity:1
          }
          3% {
            r:3px;
            opacity:1
          }
          3.5% {
            r:3px;
            opacity:1
          }
          4% {
            r:3px;
            opacity:1
          }
          4.5% {
            r:3px;
            opacity:1
          }
          5% {
            r:3px;
            opacity:1
          }
          5.5% {
            r:3px;
            opacity:1
          }
          6% {
            r:3px;
            opacity:1
          }
          6.5% {
            r:3px;
            opacity:1
          }
          7% {
            r:3px;
            opacity:1
          }
          7.5% {
            r:3px;
            opacity:1
          }
          8% {
            r:3px;
            opacity:1
          }
          8.5% {
            r:3px;
            opacity:1
          }
          9% {
            r:3px;
            opacity:1
          }
          9.5% {
            r:3px;
            opacity:1
          }
          10% {
            r:3px;
            opacity:1
          }
          10.5% {
            r:3px;
            opacity:1
          }
          11% {
            r:3px;
            opacity:1
          }
          11.5% {
            r:3px;
            opacity:1
          }
          12% {
            r:3px;
            opacity:1
          }
          12.5% {
            r:3px;
            opacity:1
          }
          13% {
            r:3px;
            opacity:1
          }
          13.5% {
            r:3px;
            opacity:1
          }
          14% {
            r:3px;
            opacity:1
          }
          14.5% {
            r:3px;
            opacity:1
          }
          15% {
            r:3px;
            opacity:1
          }
          15.5% {
            r:3px;
            opacity:1
          }
          16% {
            r:3px;
            opacity:1
          }
          16.5% {
            r:3px;
            opacity:1
          }
          17% {
            r:3px;
            opacity:1
          }
          17.5% {
            r:3px;
            opacity:1
          }
          18% {
            r:3px;
            opacity:1
          }
          18.5% {
            r:3.3px;
            opacity:1
          }
          19% {
            r:3.6px;
            opacity:1
          }
          19.5% {
            r:3.9px;
            opacity:1
          }
          20% {
            r:4.2px;
            opacity:1
          }
          20.5% {
            r:4.5px;
            opacity:1
          }
          21% {
            r:4.8px;
            opacity:1
          }
          21.5% {
            r:5.1px;
            opacity:1
          }
          22% {
            r:5.4px;
            opacity:1
          }
          22.5% {
            r:5.7px;
            opacity:1
          }
          23% {
            r:6px;
            opacity:1
          }
          23.5% {
            r:5.948px;
            opacity:1
          }
          24% {
            r:5.896px;
            opacity:1
          }
          24.5% {
            r:5.844px;
            opacity:1
          }
          25% {
            r:5.792px;
            opacity:1
          }
          25.5% {
            r:5.74px;
            opacity:1
          }
          26% {
            r:5.688px;
            opacity:1
          }
          26.5% {
            r:5.636px;
            opacity:1
          }
          27% {
            r:5.584px;
            opacity:1
          }
          27.5% {
            r:5.532px;
            opacity:1
          }
          28% {
            r:5.48px;
            opacity:1
          }
          28.5% {
            r:5.428px;
            opacity:1
          }
          29% {
            r:5.376px;
            opacity:1
          }
          29.5% {
            r:5.324px;
            opacity:1
          }
          30% {
            r:5.272px;
            opacity:1
          }
          30.5% {
            r:5.22px;
            opacity:1
          }
          31% {
            r:5.168px;
            opacity:1
          }
          31.5% {
            r:5.116px;
            opacity:1
          }
          32% {
            r:5.064px;
            opacity:1
          }
          32.5% {
            r:5.012px;
            opacity:1
          }
          33% {
            r:4.96px;
            opacity:1
          }
          33.5% {
            r:4.908px;
            opacity:1
          }
          34% {
            r:4.856px;
            opacity:1
          }
          34.5% {
            r:4.804px;
            opacity:1
          }
          35% {
            r:4.752px;
            opacity:1
          }
          35.5% {
            r:4.7px;
            opacity:1
          }
          36% {
            r:4.648px;
            opacity:1
          }
          36.5% {
            r:4.596px;
            opacity:1
          }
          37% {
            r:4.544px;
            opacity:1
          }
          37.5% {
            r:4.492px;
            opacity:1
          }
          38% {
            r:4.44px;
            opacity:1
          }
          38.5% {
            r:4.388px;
            opacity:1
          }
          39% {
            r:4.336px;
            opacity:1
          }
          39.5% {
            r:4.284px;
            opacity:1
          }
          40% {
            r:4.232px;
            opacity:1
          }
          40.5% {
            r:4.18px;
            opacity:1
          }
          41% {
            r:4.128px;
            opacity:1
          }
          41.5% {
            r:4.076px;
            opacity:1
          }
          42% {
            r:4.024px;
            opacity:1
          }
          42.5% {
            r:3.972px;
            opacity:1
          }
          43% {
            r:3.92px;
            opacity:1
          }
          43.5% {
            r:3.868px;
            opacity:1
          }
          44% {
            r:3.816px;
            opacity:1
          }
          44.5% {
            r:3.764px;
            opacity:1
          }
          45% {
            r:3.712px;
            opacity:1
          }
          45.5% {
            r:3.66px;
            opacity:1
          }
          46% {
            r:3.608px;
            opacity:1
          }
          46.5% {
            r:3.556px;
            opacity:1
          }
          47% {
            r:3.504px;
            opacity:1
          }
          47.5% {
            r:3.452px;
            opacity:1
          }
          48% {
            r:3.4px;
            opacity:1
          }
          48.5% {
            r:3.4px;
            opacity:0.9
          }
          49% {
            r:3.4px;
            opacity:0.8
          }
          49.5% {
            r:3.4px;
            opacity:0.7
          }
          50% {
            r:3.4px;
            opacity:0.6
          }
          50.5% {
            r:3.4px;
            opacity:0.5
          }
          51% {
            r:3.4px;
            opacity:0.4
          }
          51.5% {
            r:3.4px;
            opacity:0.3
          }
          52% {
            r:3.4px;
            opacity:0.2
          }
          52.5% {
            r:3.4px;
            opacity:0.1
          }
          53% {
            r:3.4px;
            opacity:0
          }
          53.5% {
            r:3.4px;
            opacity:0
          }
          54% {
            r:3.4px;
            opacity:0
          }
          54.5% {
            r:3.4px;
            opacity:0
          }
          55% {
            r:3.4px;
            opacity:0
          }
          55.5% {
            r:3.4px;
            opacity:0
          }
          56% {
            r:3.4px;
            opacity:0
          }
          56.5% {
            r:3.4px;
            opacity:0
          }
          57% {
            r:3.4px;
            opacity:0
          }
          57.5% {
            r:3.4px;
            opacity:0
          }
          58% {
            r:3.4px;
            opacity:0
          }
          58.5% {
            r:3.4px;
            opacity:0
          }
          59% {
            r:3.4px;
            opacity:0
          }
          59.5% {
            r:3.4px;
            opacity:0
          }
          60% {
            r:3.4px;
            opacity:0
          }
          60.5% {
            r:3.4px;
            opacity:0
          }
          61% {
            r:3.4px;
            opacity:0
          }
          61.5% {
            r:3.4px;
            opacity:0
          }
          62% {
            r:3.4px;
            opacity:0
          }
          62.5% {
            r:3.4px;
            opacity:0
          }
          63% {
            r:3.4px;
            opacity:0
          }
          63.5% {
            r:3.4px;
            opacity:0
          }
          64% {
            r:3.4px;
            opacity:0
          }
          64.5% {
            r:3.4px;
            opacity:0
          }
          65% {
            r:3.4px;
            opacity:0
          }
          65.5% {
            r:3.4px;
            opacity:0
          }
          66% {
            r:3.4px;
            opacity:0
          }
          66.5% {
            r:3.4px;
            opacity:0
          }
          67% {
            r:3.4px;
            opacity:0
          }
          67.5% {
            r:3.4px;
            opacity:0
          }
          68% {
            r:3.4px;
            opacity:0
          }
          68.5% {
            r:3.4px;
            opacity:0
          }
          69% {
            r:3.4px;
            opacity:0
          }
          69.5% {
            r:3.4px;
            opacity:0
          }
          70% {
            r:3.4px;
            opacity:0
          }
          70.5% {
            r:3.4px;
            opacity:0
          }
          71% {
            r:3.4px;
            opacity:0
          }
          71.5% {
            r:3.4px;
            opacity:0
          }
          72% {
            r:3.4px;
            opacity:0
          }
          72.5% {
            r:3.4px;
            opacity:0
          }
          73% {
            r:3.4px;
            opacity:0
          }
          73.5% {
            r:3.4px;
            opacity:0
          }
          74% {
            r:3.4px;
            opacity:0
          }
          74.5% {
            r:3.4px;
            opacity:0
          }
          75% {
            r:3.4px;
            opacity:0
          }
          75.5% {
            r:3.4px;
            opacity:0
          }
          76% {
            r:3.4px;
            opacity:0
          }
          76.5% {
            r:3.4px;
            opacity:0
          }
          77% {
            r:3.4px;
            opacity:0
          }
          77.5% {
            r:3.4px;
            opacity:0
          }
          78% {
            r:3.4px;
            opacity:0
          }
          78.5% {
            r:3.4px;
            opacity:0
          }
          79% {
            r:3.4px;
            opacity:0
          }
          79.5% {
            r:3.4px;
            opacity:0
          }
          80% {
            r:3.4px;
            opacity:0
          }
          80.5% {
            r:3.4px;
            opacity:0
          }
          81% {
            r:3.4px;
            opacity:0
          }
          81.5% {
            r:3.4px;
            opacity:0
          }
          82% {
            r:3.4px;
            opacity:0
          }
          82.5% {
            r:3.4px;
            opacity:0
          }
          83% {
            r:3.4px;
            opacity:0
          }
          83.5% {
            r:3.4px;
            opacity:0
          }
          84% {
            r:3.4px;
            opacity:0
          }
          84.5% {
            r:3.4px;
            opacity:0
          }
          85% {
            r:3.4px;
            opacity:0
          }
          85.5% {
            r:3.4px;
            opacity:0
          }
          86% {
            r:3.4px;
            opacity:0
          }
          86.5% {
            r:3.4px;
            opacity:0
          }
          87% {
            r:3.4px;
            opacity:0
          }
          87.5% {
            r:3.4px;
            opacity:0
          }
          88% {
            r:3.4px;
            opacity:0
          }
          88.5% {
            r:3.4px;
            opacity:0
          }
          89% {
            r:3.4px;
            opacity:0
          }
          89.5% {
            r:3.4px;
            opacity:0
          }
          90% {
            r:3.4px;
            opacity:0
          }
          90.5% {
            r:3.4px;
            opacity:0
          }
          91% {
            r:3.4px;
            opacity:0
          }
          91.5% {
            r:3.4px;
            opacity:0
          }
          92% {
            r:3.4px;
            opacity:0
          }
          92.5% {
            r:3.4px;
            opacity:0
          }
          93% {
            r:3.4px;
            opacity:0
          }
          93.5% {
            r:3.4px;
            opacity:0
          }
          94% {
            r:3.4px;
            opacity:0
          }
          94.5% {
            r:3.4px;
            opacity:0
          }
          95% {
            r:3.4px;
            opacity:0
          }
          95.5% {
            r:3.4px;
            opacity:0
          }
          96% {
            r:3.4px;
            opacity:0
          }
          96.5% {
            r:3.4px;
            opacity:0
          }
          97% {
            r:3.4px;
            opacity:0
          }
          97.5% {
            r:3.4px;
            opacity:0
          }
          98% {
            r:3.4px;
            opacity:0
          }
          98.5% {
            r:3.4px;
            opacity:0
          }
          99% {
            r:3.4px;
            opacity:0
          }
          99.5% {
            r:3.4px;
            opacity:0
          }
          100% {
            r:3.4px;
            opacity:0
          }
        }
        .drop2 {
          transform:translate(64px,109.4px);
          opacity:1;
          animation:drop2 12s linear infinite
        }
        .water2 {
          opacity:0.2;
          animation:water2 12s linear infinite
        }
        @keyframes drop2 {
          0% {
            transform:translate(64px,43px);
            opacity:0
          }
          0.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          1% {
            transform:translate(64px,43px);
            opacity:0
          }
          1.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          2% {
            transform:translate(64px,43px);
            opacity:0
          }
          2.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          3% {
            transform:translate(64px,43px);
            opacity:0
          }
          3.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          4% {
            transform:translate(64px,43px);
            opacity:0
          }
          4.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          5% {
            transform:translate(64px,43px);
            opacity:0
          }
          5.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          6% {
            transform:translate(64px,43px);
            opacity:0
          }
          6.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          7% {
            transform:translate(64px,43px);
            opacity:0
          }
          7.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          8% {
            transform:translate(64px,43px);
            opacity:0
          }
          8.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          9% {
            transform:translate(64px,43px);
            opacity:0
          }
          9.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          10% {
            transform:translate(64px,43px);
            opacity:0
          }
          10.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          11% {
            transform:translate(64px,43px);
            opacity:0
          }
          11.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          12% {
            transform:translate(64px,43px);
            opacity:0
          }
          12.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          13% {
            transform:translate(64px,43px);
            opacity:0
          }
          13.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          14% {
            transform:translate(64px,43px);
            opacity:0
          }
          14.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          15% {
            transform:translate(64px,43px);
            opacity:0
          }
          15.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          16% {
            transform:translate(64px,43px);
            opacity:0
          }
          16.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          17% {
            transform:translate(64px,43px);
            opacity:0
          }
          17.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          18% {
            transform:translate(64px,43px);
            opacity:0
          }
          18.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          19% {
            transform:translate(64px,43px);
            opacity:0
          }
          19.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          20% {
            transform:translate(64px,43px);
            opacity:0
          }
          20.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          21% {
            transform:translate(64px,43px);
            opacity:0
          }
          21.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          22% {
            transform:translate(64px,43px);
            opacity:0
          }
          22.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          23% {
            transform:translate(64px,43px);
            opacity:0
          }
          23.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          24% {
            transform:translate(64px,43px);
            opacity:0
          }
          24.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          25% {
            transform:translate(64px,43px);
            opacity:0
          }
          25.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          26% {
            transform:translate(64px,43px);
            opacity:0
          }
          26.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          27% {
            transform:translate(64px,43px);
            opacity:0
          }
          27.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          28% {
            transform:translate(64px,43px);
            opacity:0
          }
          28.5% {
            transform:translate(64px,44.2px);
            opacity:0.5
          }
          29% {
            transform:translate(64px,45.4px);
            opacity:1
          }
          29.5% {
            transform:translate(64px,46.6px);
            opacity:1
          }
          30% {
            transform:translate(64px,47.8px);
            opacity:1
          }
          30.5% {
            transform:translate(64px,49px);
            opacity:1
          }
          31% {
            transform:translate(64px,50.2px);
            opacity:1
          }
          31.5% {
            transform:translate(64px,51.4px);
            opacity:1
          }
          32% {
            transform:translate(64px,52.6px);
            opacity:1
          }
          32.5% {
            transform:translate(64px,53.8px);
            opacity:1
          }
          33% {
            transform:translate(64px,55px);
            opacity:1
          }
          33.5% {
            transform:translate(64px,55.833px);
            opacity:1
          }
          34% {
            transform:translate(64px,56.667px);
            opacity:1
          }
          34.5% {
            transform:translate(64px,57.5px);
            opacity:1
          }
          35% {
            transform:translate(64px,58.333px);
            opacity:1
          }
          35.5% {
            transform:translate(64px,59.167px);
            opacity:1
          }
          36% {
            transform:translate(64px,60px);
            opacity:1
          }
          36.5% {
            transform:translate(64px,60.833px);
            opacity:1
          }
          37% {
            transform:translate(64px,61.667px);
            opacity:1
          }
          37.5% {
            transform:translate(64px,62.5px);
            opacity:1
          }
          38% {
            transform:translate(64px,63.333px);
            opacity:1
          }
          38.5% {
            transform:translate(64px,64.167px);
            opacity:1
          }
          39% {
            transform:translate(64px,65px);
            opacity:1
          }
          39.5% {
            transform:translate(64px,65.833px);
            opacity:1
          }
          40% {
            transform:translate(64px,66.667px);
            opacity:1
          }
          40.5% {
            transform:translate(64px,67.5px);
            opacity:1
          }
          41% {
            transform:translate(64px,68.333px);
            opacity:1
          }
          41.5% {
            transform:translate(64px,69.167px);
            opacity:1
          }
          42% {
            transform:translate(64px,70px);
            opacity:1
          }
          42.5% {
            transform:translate(64px,70.833px);
            opacity:1
          }
          43% {
            transform:translate(64px,71.667px);
            opacity:1
          }
          43.5% {
            transform:translate(64px,72.5px);
            opacity:1
          }
          44% {
            transform:translate(64px,73.333px);
            opacity:1
          }
          44.5% {
            transform:translate(64px,74.167px);
            opacity:1
          }
          45% {
            transform:translate(64px,75px);
            opacity:1
          }
          45.5% {
            transform:translate(64px,75.833px);
            opacity:1
          }
          46% {
            transform:translate(64px,76.667px);
            opacity:1
          }
          46.5% {
            transform:translate(64px,77.5px);
            opacity:1
          }
          47% {
            transform:translate(64px,78.333px);
            opacity:1
          }
          47.5% {
            transform:translate(64px,79.167px);
            opacity:1
          }
          48% {
            transform:translate(64px,80px);
            opacity:1
          }
          48.5% {
            transform:translate(64px,81.25px);
            opacity:1
          }
          49% {
            transform:translate(64px,82.5px);
            opacity:1
          }
          49.5% {
            transform:translate(64px,83.75px);
            opacity:1
          }
          50% {
            transform:translate(64px,85px);
            opacity:1
          }
          50.5% {
            transform:translate(64px,86.25px);
            opacity:1
          }
          51% {
            transform:translate(64px,87.5px);
            opacity:1
          }
          51.5% {
            transform:translate(64px,88.75px);
            opacity:1
          }
          52% {
            transform:translate(64px,90px);
            opacity:1
          }
          52.5% {
            transform:translate(64px,91.25px);
            opacity:1
          }
          53% {
            transform:translate(64px,92.5px);
            opacity:1
          }
          53.5% {
            transform:translate(64px,93.75px);
            opacity:1
          }
          54% {
            transform:translate(64px,95px);
            opacity:1
          }
          54.5% {
            transform:translate(64px,96.25px);
            opacity:1
          }
          55% {
            transform:translate(64px,97.5px);
            opacity:1
          }
          55.5% {
            transform:translate(64px,98.75px);
            opacity:1
          }
          56% {
            transform:translate(64px,100px);
            opacity:1
          }
          56.5% {
            transform:translate(64px,101.25px);
            opacity:1
          }
          57% {
            transform:translate(64px,102.5px);
            opacity:1
          }
          57.5% {
            transform:translate(64px,103.75px);
            opacity:1
          }
          58% {
            transform:translate(64px,105px);
            opacity:1
          }
          58.5% {
            transform:translate(64px,105.55px);
            opacity:1
          }
          59% {
            transform:translate(64px,106.1px);
            opacity:1
          }
          59.5% {
            transform:translate(64px,106.65px);
            opacity:1
          }
          60% {
            transform:translate(64px,107.2px);
            opacity:1
          }
          60.5% {
            transform:translate(64px,107.75px);
            opacity:1
          }
          61% {
            transform:translate(64px,108.3px);
            opacity:1
          }
          61.5% {
            transform:translate(64px,108.85px);
            opacity:1
          }
          62% {
            transform:translate(64px,109.4px);
            opacity:1
          }
          62.5% {
            transform:translate(64px,109.95px);
            opacity:1
          }
          63% {
            transform:translate(64px,110.5px);
            opacity:1
          }
          63.5% {
            transform:translate(64px,111.05px);
            opacity:1
          }
          64% {
            transform:translate(64px,111.6px);
            opacity:1
          }
          64.5% {
            transform:translate(64px,112.15px);
            opacity:1
          }
          65% {
            transform:translate(64px,112.7px);
            opacity:1
          }
          65.5% {
            transform:translate(64px,113.25px);
            opacity:1
          }
          66% {
            transform:translate(64px,113.8px);
            opacity:1
          }
          66.5% {
            transform:translate(64px,114.35px);
            opacity:1
          }
          67% {
            transform:translate(64px,114.9px);
            opacity:1
          }
          67.5% {
            transform:translate(64px,115.45px);
            opacity:1
          }
          68% {
            transform:translate(64px,116px);
            opacity:1
          }
          68.5% {
            transform:translate(64px,117px);
            opacity:1
          }
          69% {
            transform:translate(64px,118px);
            opacity:1
          }
          69.5% {
            transform:translate(64px,119px);
            opacity:1
          }
          70% {
            transform:translate(64px,120px);
            opacity:1
          }
          70.5% {
            transform:translate(64px,121px);
            opacity:1
          }
          71% {
            transform:translate(64px,122px);
            opacity:1
          }
          71.5% {
            transform:translate(64px,123px);
            opacity:1
          }
          72% {
            transform:translate(64px,124px);
            opacity:1
          }
          72.5% {
            transform:translate(64px,125px);
            opacity:1
          }
          73% {
            transform:translate(64px,126px);
            opacity:1
          }
          73.5% {
            transform:translate(64px,126.2px);
            opacity:1
          }
          74% {
            transform:translate(64px,126.4px);
            opacity:1
          }
          74.5% {
            transform:translate(64px,126.6px);
            opacity:1
          }
          75% {
            transform:translate(64px,126.8px);
            opacity:1
          }
          75.5% {
            transform:translate(64px,127px);
            opacity:1
          }
          76% {
            transform:translate(64px,127.2px);
            opacity:1
          }
          76.5% {
            transform:translate(64px,127.4px);
            opacity:1
          }
          77% {
            transform:translate(64px,127.6px);
            opacity:1
          }
          77.5% {
            transform:translate(64px,127.8px);
            opacity:1
          }
          78% {
            transform:translate(64px,128px);
            opacity:1
          }
          78.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          79% {
            transform:translate(64px,128px);
            opacity:1
          }
          79.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          80% {
            transform:translate(64px,128px);
            opacity:1
          }
          80.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          81% {
            transform:translate(64px,128px);
            opacity:1
          }
          81.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          82% {
            transform:translate(64px,128px);
            opacity:1
          }
          82.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          83% {
            transform:translate(64px,128px);
            opacity:1
          }
          83.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          84% {
            transform:translate(64px,128px);
            opacity:1
          }
          84.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          85% {
            transform:translate(64px,128px);
            opacity:1
          }
          85.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          86% {
            transform:translate(64px,128px);
            opacity:1
          }
          86.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          87% {
            transform:translate(64px,128px);
            opacity:1
          }
          87.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          88% {
            transform:translate(64px,128px);
            opacity:1
          }
          88.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          89% {
            transform:translate(64px,128px);
            opacity:1
          }
          89.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          90% {
            transform:translate(64px,128px);
            opacity:1
          }
          90.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          91% {
            transform:translate(64px,128px);
            opacity:1
          }
          91.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          92% {
            transform:translate(64px,128px);
            opacity:1
          }
          92.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          93% {
            transform:translate(64px,128px);
            opacity:1
          }
          93.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          94% {
            transform:translate(64px,128px);
            opacity:1
          }
          94.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          95% {
            transform:translate(64px,128px);
            opacity:1
          }
          95.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          96% {
            transform:translate(64px,128px);
            opacity:1
          }
          96.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          97% {
            transform:translate(64px,128px);
            opacity:1
          }
          97.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          98% {
            transform:translate(64px,128px);
            opacity:1
          }
          98.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          99% {
            transform:translate(64px,128px);
            opacity:1
          }
          99.5% {
            transform:translate(64px,128px);
            opacity:1
          }
          100% {
            transform:translate(64px,128px);
            opacity:1
          }
        }
        @keyframes water2 {
          0% {
            r:3px;
            opacity:1
          }
          0.5% {
            r:3px;
            opacity:1
          }
          1% {
            r:3px;
            opacity:1
          }
          1.5% {
            r:3px;
            opacity:1
          }
          2% {
            r:3px;
            opacity:1
          }
          2.5% {
            r:3px;
            opacity:1
          }
          3% {
            r:3px;
            opacity:1
          }
          3.5% {
            r:3px;
            opacity:1
          }
          4% {
            r:3px;
            opacity:1
          }
          4.5% {
            r:3px;
            opacity:1
          }
          5% {
            r:3px;
            opacity:1
          }
          5.5% {
            r:3px;
            opacity:1
          }
          6% {
            r:3px;
            opacity:1
          }
          6.5% {
            r:3px;
            opacity:1
          }
          7% {
            r:3px;
            opacity:1
          }
          7.5% {
            r:3px;
            opacity:1
          }
          8% {
            r:3px;
            opacity:1
          }
          8.5% {
            r:3px;
            opacity:1
          }
          9% {
            r:3px;
            opacity:1
          }
          9.5% {
            r:3px;
            opacity:1
          }
          10% {
            r:3px;
            opacity:1
          }
          10.5% {
            r:3px;
            opacity:1
          }
          11% {
            r:3px;
            opacity:1
          }
          11.5% {
            r:3px;
            opacity:1
          }
          12% {
            r:3px;
            opacity:1
          }
          12.5% {
            r:3px;
            opacity:1
          }
          13% {
            r:3px;
            opacity:1
          }
          13.5% {
            r:3px;
            opacity:1
          }
          14% {
            r:3px;
            opacity:1
          }
          14.5% {
            r:3px;
            opacity:1
          }
          15% {
            r:3px;
            opacity:1
          }
          15.5% {
            r:3px;
            opacity:1
          }
          16% {
            r:3px;
            opacity:1
          }
          16.5% {
            r:3px;
            opacity:1
          }
          17% {
            r:3px;
            opacity:1
          }
          17.5% {
            r:3px;
            opacity:1
          }
          18% {
            r:3px;
            opacity:1
          }
          18.5% {
            r:3px;
            opacity:1
          }
          19% {
            r:3px;
            opacity:1
          }
          19.5% {
            r:3px;
            opacity:1
          }
          20% {
            r:3px;
            opacity:1
          }
          20.5% {
            r:3px;
            opacity:1
          }
          21% {
            r:3px;
            opacity:1
          }
          21.5% {
            r:3px;
            opacity:1
          }
          22% {
            r:3px;
            opacity:1
          }
          22.5% {
            r:3px;
            opacity:1
          }
          23% {
            r:3px;
            opacity:1
          }
          23.5% {
            r:3px;
            opacity:1
          }
          24% {
            r:3px;
            opacity:1
          }
          24.5% {
            r:3px;
            opacity:1
          }
          25% {
            r:3px;
            opacity:1
          }
          25.5% {
            r:3px;
            opacity:1
          }
          26% {
            r:3px;
            opacity:1
          }
          26.5% {
            r:3px;
            opacity:1
          }
          27% {
            r:3px;
            opacity:1
          }
          27.5% {
            r:3px;
            opacity:1
          }
          28% {
            r:3px;
            opacity:1
          }
          28.5% {
            r:3.3px;
            opacity:1
          }
          29% {
            r:3.6px;
            opacity:1
          }
          29.5% {
            r:3.9px;
            opacity:1
          }
          30% {
            r:4.2px;
            opacity:1
          }
          30.5% {
            r:4.5px;
            opacity:1
          }
          31% {
            r:4.8px;
            opacity:1
          }
          31.5% {
            r:5.1px;
            opacity:1
          }
          32% {
            r:5.4px;
            opacity:1
          }
          32.5% {
            r:5.7px;
            opacity:1
          }
          33% {
            r:6px;
            opacity:1
          }
          33.5% {
            r:5.948px;
            opacity:1
          }
          34% {
            r:5.896px;
            opacity:1
          }
          34.5% {
            r:5.844px;
            opacity:1
          }
          35% {
            r:5.792px;
            opacity:1
          }
          35.5% {
            r:5.74px;
            opacity:1
          }
          36% {
            r:5.688px;
            opacity:1
          }
          36.5% {
            r:5.636px;
            opacity:1
          }
          37% {
            r:5.584px;
            opacity:1
          }
          37.5% {
            r:5.532px;
            opacity:1
          }
          38% {
            r:5.48px;
            opacity:1
          }
          38.5% {
            r:5.428px;
            opacity:1
          }
          39% {
            r:5.376px;
            opacity:1
          }
          39.5% {
            r:5.324px;
            opacity:1
          }
          40% {
            r:5.272px;
            opacity:1
          }
          40.5% {
            r:5.22px;
            opacity:1
          }
          41% {
            r:5.168px;
            opacity:1
          }
          41.5% {
            r:5.116px;
            opacity:1
          }
          42% {
            r:5.064px;
            opacity:1
          }
          42.5% {
            r:5.012px;
            opacity:1
          }
          43% {
            r:4.96px;
            opacity:1
          }
          43.5% {
            r:4.908px;
            opacity:1
          }
          44% {
            r:4.856px;
            opacity:1
          }
          44.5% {
            r:4.804px;
            opacity:1
          }
          45% {
            r:4.752px;
            opacity:1
          }
          45.5% {
            r:4.7px;
            opacity:1
          }
          46% {
            r:4.648px;
            opacity:1
          }
          46.5% {
            r:4.596px;
            opacity:1
          }
          47% {
            r:4.544px;
            opacity:1
          }
          47.5% {
            r:4.492px;
            opacity:1
          }
          48% {
            r:4.44px;
            opacity:1
          }
          48.5% {
            r:4.388px;
            opacity:1
          }
          49% {
            r:4.336px;
            opacity:1
          }
          49.5% {
            r:4.284px;
            opacity:1
          }
          50% {
            r:4.232px;
            opacity:1
          }
          50.5% {
            r:4.18px;
            opacity:1
          }
          51% {
            r:4.128px;
            opacity:1
          }
          51.5% {
            r:4.076px;
            opacity:1
          }
          52% {
            r:4.024px;
            opacity:1
          }
          52.5% {
            r:3.972px;
            opacity:1
          }
          53% {
            r:3.92px;
            opacity:1
          }
          53.5% {
            r:3.868px;
            opacity:1
          }
          54% {
            r:3.816px;
            opacity:1
          }
          54.5% {
            r:3.764px;
            opacity:1
          }
          55% {
            r:3.712px;
            opacity:1
          }
          55.5% {
            r:3.66px;
            opacity:1
          }
          56% {
            r:3.608px;
            opacity:1
          }
          56.5% {
            r:3.556px;
            opacity:1
          }
          57% {
            r:3.504px;
            opacity:1
          }
          57.5% {
            r:3.452px;
            opacity:1
          }
          58% {
            r:3.4px;
            opacity:1
          }
          58.5% {
            r:3.4px;
            opacity:0.9
          }
          59% {
            r:3.4px;
            opacity:0.8
          }
          59.5% {
            r:3.4px;
            opacity:0.7
          }
          60% {
            r:3.4px;
            opacity:0.6
          }
          60.5% {
            r:3.4px;
            opacity:0.5
          }
          61% {
            r:3.4px;
            opacity:0.4
          }
          61.5% {
            r:3.4px;
            opacity:0.3
          }
          62% {
            r:3.4px;
            opacity:0.2
          }
          62.5% {
            r:3.4px;
            opacity:0.1
          }
          63% {
            r:3.4px;
            opacity:0
          }
          63.5% {
            r:3.4px;
            opacity:0
          }
          64% {
            r:3.4px;
            opacity:0
          }
          64.5% {
            r:3.4px;
            opacity:0
          }
          65% {
            r:3.4px;
            opacity:0
          }
          65.5% {
            r:3.4px;
            opacity:0
          }
          66% {
            r:3.4px;
            opacity:0
          }
          66.5% {
            r:3.4px;
            opacity:0
          }
          67% {
            r:3.4px;
            opacity:0
          }
          67.5% {
            r:3.4px;
            opacity:0
          }
          68% {
            r:3.4px;
            opacity:0
          }
          68.5% {
            r:3.4px;
            opacity:0
          }
          69% {
            r:3.4px;
            opacity:0
          }
          69.5% {
            r:3.4px;
            opacity:0
          }
          70% {
            r:3.4px;
            opacity:0
          }
          70.5% {
            r:3.4px;
            opacity:0
          }
          71% {
            r:3.4px;
            opacity:0
          }
          71.5% {
            r:3.4px;
            opacity:0
          }
          72% {
            r:3.4px;
            opacity:0
          }
          72.5% {
            r:3.4px;
            opacity:0
          }
          73% {
            r:3.4px;
            opacity:0
          }
          73.5% {
            r:3.4px;
            opacity:0
          }
          74% {
            r:3.4px;
            opacity:0
          }
          74.5% {
            r:3.4px;
            opacity:0
          }
          75% {
            r:3.4px;
            opacity:0
          }
          75.5% {
            r:3.4px;
            opacity:0
          }
          76% {
            r:3.4px;
            opacity:0
          }
          76.5% {
            r:3.4px;
            opacity:0
          }
          77% {
            r:3.4px;
            opacity:0
          }
          77.5% {
            r:3.4px;
            opacity:0
          }
          78% {
            r:3.4px;
            opacity:0
          }
          78.5% {
            r:3.4px;
            opacity:0
          }
          79% {
            r:3.4px;
            opacity:0
          }
          79.5% {
            r:3.4px;
            opacity:0
          }
          80% {
            r:3.4px;
            opacity:0
          }
          80.5% {
            r:3.4px;
            opacity:0
          }
          81% {
            r:3.4px;
            opacity:0
          }
          81.5% {
            r:3.4px;
            opacity:0
          }
          82% {
            r:3.4px;
            opacity:0
          }
          82.5% {
            r:3.4px;
            opacity:0
          }
          83% {
            r:3.4px;
            opacity:0
          }
          83.5% {
            r:3.4px;
            opacity:0
          }
          84% {
            r:3.4px;
            opacity:0
          }
          84.5% {
            r:3.4px;
            opacity:0
          }
          85% {
            r:3.4px;
            opacity:0
          }
          85.5% {
            r:3.4px;
            opacity:0
          }
          86% {
            r:3.4px;
            opacity:0
          }
          86.5% {
            r:3.4px;
            opacity:0
          }
          87% {
            r:3.4px;
            opacity:0
          }
          87.5% {
            r:3.4px;
            opacity:0
          }
          88% {
            r:3.4px;
            opacity:0
          }
          88.5% {
            r:3.4px;
            opacity:0
          }
          89% {
            r:3.4px;
            opacity:0
          }
          89.5% {
            r:3.4px;
            opacity:0
          }
          90% {
            r:3.4px;
            opacity:0
          }
          90.5% {
            r:3.4px;
            opacity:0
          }
          91% {
            r:3.4px;
            opacity:0
          }
          91.5% {
            r:3.4px;
            opacity:0
          }
          92% {
            r:3.4px;
            opacity:0
          }
          92.5% {
            r:3.4px;
            opacity:0
          }
          93% {
            r:3.4px;
            opacity:0
          }
          93.5% {
            r:3.4px;
            opacity:0
          }
          94% {
            r:3.4px;
            opacity:0
          }
          94.5% {
            r:3.4px;
            opacity:0
          }
          95% {
            r:3.4px;
            opacity:0
          }
          95.5% {
            r:3.4px;
            opacity:0
          }
          96% {
            r:3.4px;
            opacity:0
          }
          96.5% {
            r:3.4px;
            opacity:0
          }
          97% {
            r:3.4px;
            opacity:0
          }
          97.5% {
            r:3.4px;
            opacity:0
          }
          98% {
            r:3.4px;
            opacity:0
          }
          98.5% {
            r:3.4px;
            opacity:0
          }
          99% {
            r:3.4px;
            opacity:0
          }
          99.5% {
            r:3.4px;
            opacity:0
          }
          100% {
            r:3.4px;
            opacity:0
          }
        }
        .drop3 {
          transform:translate(71.8px,90px);
          opacity:1;
          animation:drop3 12s linear infinite
        }
        .water3 {
          opacity:1;
          animation:water3 12s linear infinite
        }
        @keyframes drop3 {
          0% {
            transform:translate(64px,43px);
            opacity:0
          }
          0.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          1% {
            transform:translate(64px,43px);
            opacity:0
          }
          1.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          2% {
            transform:translate(64px,43px);
            opacity:0
          }
          2.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          3% {
            transform:translate(64px,43px);
            opacity:0
          }
          3.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          4% {
            transform:translate(64px,43px);
            opacity:0
          }
          4.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          5% {
            transform:translate(64px,43px);
            opacity:0
          }
          5.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          6% {
            transform:translate(64px,43px);
            opacity:0
          }
          6.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          7% {
            transform:translate(64px,43px);
            opacity:0
          }
          7.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          8% {
            transform:translate(64px,43px);
            opacity:0
          }
          8.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          9% {
            transform:translate(64px,43px);
            opacity:0
          }
          9.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          10% {
            transform:translate(64px,43px);
            opacity:0
          }
          10.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          11% {
            transform:translate(64px,43px);
            opacity:0
          }
          11.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          12% {
            transform:translate(64px,43px);
            opacity:0
          }
          12.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          13% {
            transform:translate(64px,43px);
            opacity:0
          }
          13.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          14% {
            transform:translate(64px,43px);
            opacity:0
          }
          14.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          15% {
            transform:translate(64px,43px);
            opacity:0
          }
          15.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          16% {
            transform:translate(64px,43px);
            opacity:0
          }
          16.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          17% {
            transform:translate(64px,43px);
            opacity:0
          }
          17.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          18% {
            transform:translate(64px,43px);
            opacity:0
          }
          18.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          19% {
            transform:translate(64px,43px);
            opacity:0
          }
          19.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          20% {
            transform:translate(64px,43px);
            opacity:0
          }
          20.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          21% {
            transform:translate(64px,43px);
            opacity:0
          }
          21.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          22% {
            transform:translate(64px,43px);
            opacity:0
          }
          22.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          23% {
            transform:translate(64px,43px);
            opacity:0
          }
          23.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          24% {
            transform:translate(64px,43px);
            opacity:0
          }
          24.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          25% {
            transform:translate(64px,43px);
            opacity:0
          }
          25.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          26% {
            transform:translate(64px,43px);
            opacity:0
          }
          26.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          27% {
            transform:translate(64px,43px);
            opacity:0
          }
          27.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          28% {
            transform:translate(64px,43px);
            opacity:0
          }
          28.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          29% {
            transform:translate(64px,43px);
            opacity:0
          }
          29.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          30% {
            transform:translate(64px,43px);
            opacity:0
          }
          30.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          31% {
            transform:translate(64px,43px);
            opacity:0
          }
          31.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          32% {
            transform:translate(64px,43px);
            opacity:0
          }
          32.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          33% {
            transform:translate(64px,43px);
            opacity:0
          }
          33.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          34% {
            transform:translate(64px,43px);
            opacity:0
          }
          34.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          35% {
            transform:translate(64px,43px);
            opacity:0
          }
          35.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          36% {
            transform:translate(64px,43px);
            opacity:0
          }
          36.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          37% {
            transform:translate(64px,43px);
            opacity:0
          }
          37.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          38% {
            transform:translate(64px,43px);
            opacity:0
          }
          38.5% {
            transform:translate(65.1px,44.2px);
            opacity:0.5
          }
          39% {
            transform:translate(66.2px,45.4px);
            opacity:1
          }
          39.5% {
            transform:translate(67.3px,46.6px);
            opacity:1
          }
          40% {
            transform:translate(68.4px,47.8px);
            opacity:1
          }
          40.5% {
            transform:translate(69.5px,49px);
            opacity:1
          }
          41% {
            transform:translate(70.6px,50.2px);
            opacity:1
          }
          41.5% {
            transform:translate(71.7px,51.4px);
            opacity:1
          }
          42% {
            transform:translate(72.8px,52.6px);
            opacity:1
          }
          42.5% {
            transform:translate(73.9px,53.8px);
            opacity:1
          }
          43% {
            transform:translate(75px,55px);
            opacity:1
          }
          43.5% {
            transform:translate(75px,55.833px);
            opacity:1
          }
          44% {
            transform:translate(75px,56.667px);
            opacity:1
          }
          44.5% {
            transform:translate(75px,57.5px);
            opacity:1
          }
          45% {
            transform:translate(75px,58.333px);
            opacity:1
          }
          45.5% {
            transform:translate(75px,59.167px);
            opacity:1
          }
          46% {
            transform:translate(75px,60px);
            opacity:1
          }
          46.5% {
            transform:translate(75px,60.833px);
            opacity:1
          }
          47% {
            transform:translate(75px,61.667px);
            opacity:1
          }
          47.5% {
            transform:translate(75px,62.5px);
            opacity:1
          }
          48% {
            transform:translate(75px,63.333px);
            opacity:1
          }
          48.5% {
            transform:translate(75px,64.167px);
            opacity:1
          }
          49% {
            transform:translate(75px,65px);
            opacity:1
          }
          49.5% {
            transform:translate(75px,65.833px);
            opacity:1
          }
          50% {
            transform:translate(75px,66.667px);
            opacity:1
          }
          50.5% {
            transform:translate(75px,67.5px);
            opacity:1
          }
          51% {
            transform:translate(75px,68.333px);
            opacity:1
          }
          51.5% {
            transform:translate(75px,69.167px);
            opacity:1
          }
          52% {
            transform:translate(75px,70px);
            opacity:1
          }
          52.5% {
            transform:translate(75px,70.833px);
            opacity:1
          }
          53% {
            transform:translate(75px,71.667px);
            opacity:1
          }
          53.5% {
            transform:translate(75px,72.5px);
            opacity:1
          }
          54% {
            transform:translate(75px,73.333px);
            opacity:1
          }
          54.5% {
            transform:translate(75px,74.167px);
            opacity:1
          }
          55% {
            transform:translate(75px,75px);
            opacity:1
          }
          55.5% {
            transform:translate(75px,75.833px);
            opacity:1
          }
          56% {
            transform:translate(75px,76.667px);
            opacity:1
          }
          56.5% {
            transform:translate(75px,77.5px);
            opacity:1
          }
          57% {
            transform:translate(75px,78.333px);
            opacity:1
          }
          57.5% {
            transform:translate(75px,79.167px);
            opacity:1
          }
          58% {
            transform:translate(75px,80px);
            opacity:1
          }
          58.5% {
            transform:translate(74.6px,81.25px);
            opacity:1
          }
          59% {
            transform:translate(74.2px,82.5px);
            opacity:1
          }
          59.5% {
            transform:translate(73.8px,83.75px);
            opacity:1
          }
          60% {
            transform:translate(73.4px,85px);
            opacity:1
          }
          60.5% {
            transform:translate(73px,86.25px);
            opacity:1
          }
          61% {
            transform:translate(72.6px,87.5px);
            opacity:1
          }
          61.5% {
            transform:translate(72.2px,88.75px);
            opacity:1
          }
          62% {
            transform:translate(71.8px,90px);
            opacity:1
          }
          62.5% {
            transform:translate(71.4px,91.25px);
            opacity:1
          }
          63% {
            transform:translate(71px,92.5px);
            opacity:1
          }
          63.5% {
            transform:translate(70.6px,93.75px);
            opacity:1
          }
          64% {
            transform:translate(70.2px,95px);
            opacity:1
          }
          64.5% {
            transform:translate(69.8px,96.25px);
            opacity:1
          }
          65% {
            transform:translate(69.4px,97.5px);
            opacity:1
          }
          65.5% {
            transform:translate(69px,98.75px);
            opacity:1
          }
          66% {
            transform:translate(68.6px,100px);
            opacity:1
          }
          66.5% {
            transform:translate(68.2px,101.25px);
            opacity:1
          }
          67% {
            transform:translate(67.8px,102.5px);
            opacity:1
          }
          67.5% {
            transform:translate(67.4px,103.75px);
            opacity:1
          }
          68% {
            transform:translate(67px,105px);
            opacity:1
          }
          68.5% {
            transform:translate(66.85px,105.55px);
            opacity:1
          }
          69% {
            transform:translate(66.7px,106.1px);
            opacity:1
          }
          69.5% {
            transform:translate(66.55px,106.65px);
            opacity:1
          }
          70% {
            transform:translate(66.4px,107.2px);
            opacity:1
          }
          70.5% {
            transform:translate(66.25px,107.75px);
            opacity:1
          }
          71% {
            transform:translate(66.1px,108.3px);
            opacity:1
          }
          71.5% {
            transform:translate(65.95px,108.85px);
            opacity:1
          }
          72% {
            transform:translate(65.8px,109.4px);
            opacity:1
          }
          72.5% {
            transform:translate(65.65px,109.95px);
            opacity:1
          }
          73% {
            transform:translate(65.5px,110.5px);
            opacity:1
          }
          73.5% {
            transform:translate(65.35px,111.05px);
            opacity:1
          }
          74% {
            transform:translate(65.2px,111.6px);
            opacity:1
          }
          74.5% {
            transform:translate(65.05px,112.15px);
            opacity:1
          }
          75% {
            transform:translate(64.9px,112.7px);
            opacity:1
          }
          75.5% {
            transform:translate(64.75px,113.25px);
            opacity:1
          }
          76% {
            transform:translate(64.6px,113.8px);
            opacity:1
          }
          76.5% {
            transform:translate(64.45px,114.35px);
            opacity:1
          }
          77% {
            transform:translate(64.3px,114.9px);
            opacity:1
          }
          77.5% {
            transform:translate(64.15px,115.45px);
            opacity:1
          }
          78% {
            transform:translate(64px,116px);
            opacity:1
          }
          78.5% {
            transform:translate(64px,117px);
            opacity:1
          }
          79% {
            transform:translate(64px,118px);
            opacity:1
          }
          79.5% {
            transform:translate(64px,119px);
            opacity:1
          }
          80% {
            transform:translate(64px,120px);
            opacity:1
          }
          80.5% {
            transform:translate(64px,121px);
            opacity:1
          }
          81% {
            transform:translate(64px,122px);
            opacity:1
          }
          81.5% {
            transform:translate(64px,123px);
            opacity:1
          }
          82% {
            transform:translate(64px,124px);
            opacity:1
          }
          82.5% {
            transform:translate(64px,125px);
            opacity:1
          }
          83% {
            transform:translate(64px,126px);
            opacity:1
          }
          83.5% {
            transform:translate(64.7px,126.2px);
            opacity:1
          }
          84% {
            transform:translate(65.4px,126.4px);
            opacity:1
          }
          84.5% {
            transform:translate(66.1px,126.6px);
            opacity:1
          }
          85% {
            transform:translate(66.8px,126.8px);
            opacity:1
          }
          85.5% {
            transform:translate(67.5px,127px);
            opacity:1
          }
          86% {
            transform:translate(68.2px,127.2px);
            opacity:1
          }
          86.5% {
            transform:translate(68.9px,127.4px);
            opacity:1
          }
          87% {
            transform:translate(69.6px,127.6px);
            opacity:1
          }
          87.5% {
            transform:translate(70.3px,127.8px);
            opacity:1
          }
          88% {
            transform:translate(71px,128px);
            opacity:1
          }
          88.5% {
            transform:translate(71px,128px);
            opacity:1
          }
          89% {
            transform:translate(71px,128px);
            opacity:1
          }
          89.5% {
            transform:translate(71px,128px);
            opacity:1
          }
          90% {
            transform:translate(71px,128px);
            opacity:1
          }
          90.5% {
            transform:translate(71px,128px);
            opacity:1
          }
          91% {
            transform:translate(71px,128px);
            opacity:1
          }
          91.5% {
            transform:translate(71px,128px);
            opacity:1
          }
          92% {
            transform:translate(71px,128px);
            opacity:1
          }
          92.5% {
            transform:translate(71px,128px);
            opacity:1
          }
          93% {
            transform:translate(71px,128px);
            opacity:1
          }
          93.5% {
            transform:translate(71px,128px);
            opacity:1
          }
          94% {
            transform:translate(71px,128px);
            opacity:1
          }
          94.5% {
            transform:translate(71px,128px);
            opacity:1
          }
          95% {
            transform:translate(71px,128px);
            opacity:1
          }
          95.5% {
            transform:translate(71px,128px);
            opacity:1
          }
          96% {
            transform:translate(71px,128px);
            opacity:1
          }
          96.5% {
            transform:translate(71px,128px);
            opacity:1
          }
          97% {
            transform:translate(71px,128px);
            opacity:1
          }
          97.5% {
            transform:translate(71px,128px);
            opacity:1
          }
          98% {
            transform:translate(71px,128px);
            opacity:1
          }
          98.5% {
            transform:translate(71px,128px);
            opacity:1
          }
          99% {
            transform:translate(71px,128px);
            opacity:1
          }
          99.5% {
            transform:translate(71px,128px);
            opacity:1
          }
          100% {
            transform:translate(71px,128px);
            opacity:1
          }
        }
        @keyframes water3 {
          0% {
            r:3px;
            opacity:1
          }
          0.5% {
            r:3px;
            opacity:1
          }
          1% {
            r:3px;
            opacity:1
          }
          1.5% {
            r:3px;
            opacity:1
          }
          2% {
            r:3px;
            opacity:1
          }
          2.5% {
            r:3px;
            opacity:1
          }
          3% {
            r:3px;
            opacity:1
          }
          3.5% {
            r:3px;
            opacity:1
          }
          4% {
            r:3px;
            opacity:1
          }
          4.5% {
            r:3px;
            opacity:1
          }
          5% {
            r:3px;
            opacity:1
          }
          5.5% {
            r:3px;
            opacity:1
          }
          6% {
            r:3px;
            opacity:1
          }
          6.5% {
            r:3px;
            opacity:1
          }
          7% {
            r:3px;
            opacity:1
          }
          7.5% {
            r:3px;
            opacity:1
          }
          8% {
            r:3px;
            opacity:1
          }
          8.5% {
            r:3px;
            opacity:1
          }
          9% {
            r:3px;
            opacity:1
          }
          9.5% {
            r:3px;
            opacity:1
          }
          10% {
            r:3px;
            opacity:1
          }
          10.5% {
            r:3px;
            opacity:1
          }
          11% {
            r:3px;
            opacity:1
          }
          11.5% {
            r:3px;
            opacity:1
          }
          12% {
            r:3px;
            opacity:1
          }
          12.5% {
            r:3px;
            opacity:1
          }
          13% {
            r:3px;
            opacity:1
          }
          13.5% {
            r:3px;
            opacity:1
          }
          14% {
            r:3px;
            opacity:1
          }
          14.5% {
            r:3px;
            opacity:1
          }
          15% {
            r:3px;
            opacity:1
          }
          15.5% {
            r:3px;
            opacity:1
          }
          16% {
            r:3px;
            opacity:1
          }
          16.5% {
            r:3px;
            opacity:1
          }
          17% {
            r:3px;
            opacity:1
          }
          17.5% {
            r:3px;
            opacity:1
          }
          18% {
            r:3px;
            opacity:1
          }
          18.5% {
            r:3px;
            opacity:1
          }
          19% {
            r:3px;
            opacity:1
          }
          19.5% {
            r:3px;
            opacity:1
          }
          20% {
            r:3px;
            opacity:1
          }
          20.5% {
            r:3px;
            opacity:1
          }
          21% {
            r:3px;
            opacity:1
          }
          21.5% {
            r:3px;
            opacity:1
          }
          22% {
            r:3px;
            opacity:1
          }
          22.5% {
            r:3px;
            opacity:1
          }
          23% {
            r:3px;
            opacity:1
          }
          23.5% {
            r:3px;
            opacity:1
          }
          24% {
            r:3px;
            opacity:1
          }
          24.5% {
            r:3px;
            opacity:1
          }
          25% {
            r:3px;
            opacity:1
          }
          25.5% {
            r:3px;
            opacity:1
          }
          26% {
            r:3px;
            opacity:1
          }
          26.5% {
            r:3px;
            opacity:1
          }
          27% {
            r:3px;
            opacity:1
          }
          27.5% {
            r:3px;
            opacity:1
          }
          28% {
            r:3px;
            opacity:1
          }
          28.5% {
            r:3px;
            opacity:1
          }
          29% {
            r:3px;
            opacity:1
          }
          29.5% {
            r:3px;
            opacity:1
          }
          30% {
            r:3px;
            opacity:1
          }
          30.5% {
            r:3px;
            opacity:1
          }
          31% {
            r:3px;
            opacity:1
          }
          31.5% {
            r:3px;
            opacity:1
          }
          32% {
            r:3px;
            opacity:1
          }
          32.5% {
            r:3px;
            opacity:1
          }
          33% {
            r:3px;
            opacity:1
          }
          33.5% {
            r:3px;
            opacity:1
          }
          34% {
            r:3px;
            opacity:1
          }
          34.5% {
            r:3px;
            opacity:1
          }
          35% {
            r:3px;
            opacity:1
          }
          35.5% {
            r:3px;
            opacity:1
          }
          36% {
            r:3px;
            opacity:1
          }
          36.5% {
            r:3px;
            opacity:1
          }
          37% {
            r:3px;
            opacity:1
          }
          37.5% {
            r:3px;
            opacity:1
          }
          38% {
            r:3px;
            opacity:1
          }
          38.5% {
            r:3.3px;
            opacity:1
          }
          39% {
            r:3.6px;
            opacity:1
          }
          39.5% {
            r:3.9px;
            opacity:1
          }
          40% {
            r:4.2px;
            opacity:1
          }
          40.5% {
            r:4.5px;
            opacity:1
          }
          41% {
            r:4.8px;
            opacity:1
          }
          41.5% {
            r:5.1px;
            opacity:1
          }
          42% {
            r:5.4px;
            opacity:1
          }
          42.5% {
            r:5.7px;
            opacity:1
          }
          43% {
            r:6px;
            opacity:1
          }
          43.5% {
            r:5.948px;
            opacity:1
          }
          44% {
            r:5.896px;
            opacity:1
          }
          44.5% {
            r:5.844px;
            opacity:1
          }
          45% {
            r:5.792px;
            opacity:1
          }
          45.5% {
            r:5.74px;
            opacity:1
          }
          46% {
            r:5.688px;
            opacity:1
          }
          46.5% {
            r:5.636px;
            opacity:1
          }
          47% {
            r:5.584px;
            opacity:1
          }
          47.5% {
            r:5.532px;
            opacity:1
          }
          48% {
            r:5.48px;
            opacity:1
          }
          48.5% {
            r:5.428px;
            opacity:1
          }
          49% {
            r:5.376px;
            opacity:1
          }
          49.5% {
            r:5.324px;
            opacity:1
          }
          50% {
            r:5.272px;
            opacity:1
          }
          50.5% {
            r:5.22px;
            opacity:1
          }
          51% {
            r:5.168px;
            opacity:1
          }
          51.5% {
            r:5.116px;
            opacity:1
          }
          52% {
            r:5.064px;
            opacity:1
          }
          52.5% {
            r:5.012px;
            opacity:1
          }
          53% {
            r:4.96px;
            opacity:1
          }
          53.5% {
            r:4.908px;
            opacity:1
          }
          54% {
            r:4.856px;
            opacity:1
          }
          54.5% {
            r:4.804px;
            opacity:1
          }
          55% {
            r:4.752px;
            opacity:1
          }
          55.5% {
            r:4.7px;
            opacity:1
          }
          56% {
            r:4.648px;
            opacity:1
          }
          56.5% {
            r:4.596px;
            opacity:1
          }
          57% {
            r:4.544px;
            opacity:1
          }
          57.5% {
            r:4.492px;
            opacity:1
          }
          58% {
            r:4.44px;
            opacity:1
          }
          58.5% {
            r:4.388px;
            opacity:1
          }
          59% {
            r:4.336px;
            opacity:1
          }
          59.5% {
            r:4.284px;
            opacity:1
          }
          60% {
            r:4.232px;
            opacity:1
          }
          60.5% {
            r:4.18px;
            opacity:1
          }
          61% {
            r:4.128px;
            opacity:1
          }
          61.5% {
            r:4.076px;
            opacity:1
          }
          62% {
            r:4.024px;
            opacity:1
          }
          62.5% {
            r:3.972px;
            opacity:1
          }
          63% {
            r:3.92px;
            opacity:1
          }
          63.5% {
            r:3.868px;
            opacity:1
          }
          64% {
            r:3.816px;
            opacity:1
          }
          64.5% {
            r:3.764px;
            opacity:1
          }
          65% {
            r:3.712px;
            opacity:1
          }
          65.5% {
            r:3.66px;
            opacity:1
          }
          66% {
            r:3.608px;
            opacity:1
          }
          66.5% {
            r:3.556px;
            opacity:1
          }
          67% {
            r:3.504px;
            opacity:1
          }
          67.5% {
            r:3.452px;
            opacity:1
          }
          68% {
            r:3.4px;
            opacity:1
          }
          68.5% {
            r:3.4px;
            opacity:0.9
          }
          69% {
            r:3.4px;
            opacity:0.8
          }
          69.5% {
            r:3.4px;
            opacity:0.7
          }
          70% {
            r:3.4px;
            opacity:0.6
          }
          70.5% {
            r:3.4px;
            opacity:0.5
          }
          71% {
            r:3.4px;
            opacity:0.4
          }
          71.5% {
            r:3.4px;
            opacity:0.3
          }
          72% {
            r:3.4px;
            opacity:0.2
          }
          72.5% {
            r:3.4px;
            opacity:0.1
          }
          73% {
            r:3.4px;
            opacity:0
          }
          73.5% {
            r:3.4px;
            opacity:0
          }
          74% {
            r:3.4px;
            opacity:0
          }
          74.5% {
            r:3.4px;
            opacity:0
          }
          75% {
            r:3.4px;
            opacity:0
          }
          75.5% {
            r:3.4px;
            opacity:0
          }
          76% {
            r:3.4px;
            opacity:0
          }
          76.5% {
            r:3.4px;
            opacity:0
          }
          77% {
            r:3.4px;
            opacity:0
          }
          77.5% {
            r:3.4px;
            opacity:0
          }
          78% {
            r:3.4px;
            opacity:0
          }
          78.5% {
            r:3.4px;
            opacity:0
          }
          79% {
            r:3.4px;
            opacity:0
          }
          79.5% {
            r:3.4px;
            opacity:0
          }
          80% {
            r:3.4px;
            opacity:0
          }
          80.5% {
            r:3.4px;
            opacity:0
          }
          81% {
            r:3.4px;
            opacity:0
          }
          81.5% {
            r:3.4px;
            opacity:0
          }
          82% {
            r:3.4px;
            opacity:0
          }
          82.5% {
            r:3.4px;
            opacity:0
          }
          83% {
            r:3.4px;
            opacity:0
          }
          83.5% {
            r:3.4px;
            opacity:0
          }
          84% {
            r:3.4px;
            opacity:0
          }
          84.5% {
            r:3.4px;
            opacity:0
          }
          85% {
            r:3.4px;
            opacity:0
          }
          85.5% {
            r:3.4px;
            opacity:0
          }
          86% {
            r:3.4px;
            opacity:0
          }
          86.5% {
            r:3.4px;
            opacity:0
          }
          87% {
            r:3.4px;
            opacity:0
          }
          87.5% {
            r:3.4px;
            opacity:0
          }
          88% {
            r:3.4px;
            opacity:0
          }
          88.5% {
            r:3.4px;
            opacity:0
          }
          89% {
            r:3.4px;
            opacity:0
          }
          89.5% {
            r:3.4px;
            opacity:0
          }
          90% {
            r:3.4px;
            opacity:0
          }
          90.5% {
            r:3.4px;
            opacity:0
          }
          91% {
            r:3.4px;
            opacity:0
          }
          91.5% {
            r:3.4px;
            opacity:0
          }
          92% {
            r:3.4px;
            opacity:0
          }
          92.5% {
            r:3.4px;
            opacity:0
          }
          93% {
            r:3.4px;
            opacity:0
          }
          93.5% {
            r:3.4px;
            opacity:0
          }
          94% {
            r:3.4px;
            opacity:0
          }
          94.5% {
            r:3.4px;
            opacity:0
          }
          95% {
            r:3.4px;
            opacity:0
          }
          95.5% {
            r:3.4px;
            opacity:0
          }
          96% {
            r:3.4px;
            opacity:0
          }
          96.5% {
            r:3.4px;
            opacity:0
          }
          97% {
            r:3.4px;
            opacity:0
          }
          97.5% {
            r:3.4px;
            opacity:0
          }
          98% {
            r:3.4px;
            opacity:0
          }
          98.5% {
            r:3.4px;
            opacity:0
          }
          99% {
            r:3.4px;
            opacity:0
          }
          99.5% {
            r:3.4px;
            opacity:0
          }
          100% {
            r:3.4px;
            opacity:0
          }
        }
        .drop4 {
          transform:translate(86px,70px);
          opacity:1;
          animation:drop4 12s linear infinite
        }
        .water4 {
          opacity:1;
          animation:water4 12s linear infinite
        }
        @keyframes drop4 {
          0% {
            transform:translate(64px,43px);
            opacity:0
          }
          0.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          1% {
            transform:translate(64px,43px);
            opacity:0
          }
          1.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          2% {
            transform:translate(64px,43px);
            opacity:0
          }
          2.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          3% {
            transform:translate(64px,43px);
            opacity:0
          }
          3.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          4% {
            transform:translate(64px,43px);
            opacity:0
          }
          4.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          5% {
            transform:translate(64px,43px);
            opacity:0
          }
          5.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          6% {
            transform:translate(64px,43px);
            opacity:0
          }
          6.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          7% {
            transform:translate(64px,43px);
            opacity:0
          }
          7.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          8% {
            transform:translate(64px,43px);
            opacity:0
          }
          8.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          9% {
            transform:translate(64px,43px);
            opacity:0
          }
          9.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          10% {
            transform:translate(64px,43px);
            opacity:0
          }
          10.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          11% {
            transform:translate(64px,43px);
            opacity:0
          }
          11.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          12% {
            transform:translate(64px,43px);
            opacity:0
          }
          12.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          13% {
            transform:translate(64px,43px);
            opacity:0
          }
          13.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          14% {
            transform:translate(64px,43px);
            opacity:0
          }
          14.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          15% {
            transform:translate(64px,43px);
            opacity:0
          }
          15.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          16% {
            transform:translate(64px,43px);
            opacity:0
          }
          16.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          17% {
            transform:translate(64px,43px);
            opacity:0
          }
          17.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          18% {
            transform:translate(64px,43px);
            opacity:0
          }
          18.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          19% {
            transform:translate(64px,43px);
            opacity:0
          }
          19.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          20% {
            transform:translate(64px,43px);
            opacity:0
          }
          20.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          21% {
            transform:translate(64px,43px);
            opacity:0
          }
          21.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          22% {
            transform:translate(64px,43px);
            opacity:0
          }
          22.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          23% {
            transform:translate(64px,43px);
            opacity:0
          }
          23.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          24% {
            transform:translate(64px,43px);
            opacity:0
          }
          24.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          25% {
            transform:translate(64px,43px);
            opacity:0
          }
          25.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          26% {
            transform:translate(64px,43px);
            opacity:0
          }
          26.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          27% {
            transform:translate(64px,43px);
            opacity:0
          }
          27.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          28% {
            transform:translate(64px,43px);
            opacity:0
          }
          28.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          29% {
            transform:translate(64px,43px);
            opacity:0
          }
          29.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          30% {
            transform:translate(64px,43px);
            opacity:0
          }
          30.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          31% {
            transform:translate(64px,43px);
            opacity:0
          }
          31.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          32% {
            transform:translate(64px,43px);
            opacity:0
          }
          32.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          33% {
            transform:translate(64px,43px);
            opacity:0
          }
          33.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          34% {
            transform:translate(64px,43px);
            opacity:0
          }
          34.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          35% {
            transform:translate(64px,43px);
            opacity:0
          }
          35.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          36% {
            transform:translate(64px,43px);
            opacity:0
          }
          36.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          37% {
            transform:translate(64px,43px);
            opacity:0
          }
          37.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          38% {
            transform:translate(64px,43px);
            opacity:0
          }
          38.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          39% {
            transform:translate(64px,43px);
            opacity:0
          }
          39.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          40% {
            transform:translate(64px,43px);
            opacity:0
          }
          40.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          41% {
            transform:translate(64px,43px);
            opacity:0
          }
          41.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          42% {
            transform:translate(64px,43px);
            opacity:0
          }
          42.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          43% {
            transform:translate(64px,43px);
            opacity:0
          }
          43.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          44% {
            transform:translate(64px,43px);
            opacity:0
          }
          44.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          45% {
            transform:translate(64px,43px);
            opacity:0
          }
          45.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          46% {
            transform:translate(64px,43px);
            opacity:0
          }
          46.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          47% {
            transform:translate(64px,43px);
            opacity:0
          }
          47.5% {
            transform:translate(64px,43px);
            opacity:0
          }
          48% {
            transform:translate(64px,43px);
            opacity:0
          }
          48.5% {
            transform:translate(66.2px,44.2px);
            opacity:0.5
          }
          49% {
            transform:translate(68.4px,45.4px);
            opacity:1
          }
          49.5% {
            transform:translate(70.6px,46.6px);
            opacity:1
          }
          50% {
            transform:translate(72.8px,47.8px);
            opacity:1
          }
          50.5% {
            transform:translate(75px,49px);
            opacity:1
          }
          51% {
            transform:translate(77.2px,50.2px);
            opacity:1
          }
          51.5% {
            transform:translate(79.4px,51.4px);
            opacity:1
          }
          52% {
            transform:translate(81.6px,52.6px);
            opacity:1
          }
          52.5% {
            transform:translate(83.8px,53.8px);
            opacity:1
          }
          53% {
            transform:translate(86px,55px);
            opacity:1
          }
          53.5% {
            transform:translate(86px,55.833px);
            opacity:1
          }
          54% {
            transform:translate(86px,56.667px);
            opacity:1
          }
          54.5% {
            transform:translate(86px,57.5px);
            opacity:1
          }
          55% {
            transform:translate(86px,58.333px);
            opacity:1
          }
          55.5% {
            transform:translate(86px,59.167px);
            opacity:1
          }
          56% {
            transform:translate(86px,60px);
            opacity:1
          }
          56.5% {
            transform:translate(86px,60.833px);
            opacity:1
          }
          57% {
            transform:translate(86px,61.667px);
            opacity:1
          }
          57.5% {
            transform:translate(86px,62.5px);
            opacity:1
          }
          58% {
            transform:translate(86px,63.333px);
            opacity:1
          }
          58.5% {
            transform:translate(86px,64.167px);
            opacity:1
          }
          59% {
            transform:translate(86px,65px);
            opacity:1
          }
          59.5% {
            transform:translate(86px,65.833px);
            opacity:1
          }
          60% {
            transform:translate(86px,66.667px);
            opacity:1
          }
          60.5% {
            transform:translate(86px,67.5px);
            opacity:1
          }
          61% {
            transform:translate(86px,68.333px);
            opacity:1
          }
          61.5% {
            transform:translate(86px,69.167px);
            opacity:1
          }
          62% {
            transform:translate(86px,70px);
            opacity:1
          }
          62.5% {
            transform:translate(86px,70.833px);
            opacity:1
          }
          63% {
            transform:translate(86px,71.667px);
            opacity:1
          }
          63.5% {
            transform:translate(86px,72.5px);
            opacity:1
          }
          64% {
            transform:translate(86px,73.333px);
            opacity:1
          }
          64.5% {
            transform:translate(86px,74.167px);
            opacity:1
          }
          65% {
            transform:translate(86px,75px);
            opacity:1
          }
          65.5% {
            transform:translate(86px,75.833px);
            opacity:1
          }
          66% {
            transform:translate(86px,76.667px);
            opacity:1
          }
          66.5% {
            transform:translate(86px,77.5px);
            opacity:1
          }
          67% {
            transform:translate(86px,78.333px);
            opacity:1
          }
          67.5% {
            transform:translate(86px,79.167px);
            opacity:1
          }
          68% {
            transform:translate(86px,80px);
            opacity:1
          }
          68.5% {
            transform:translate(85.2px,81.25px);
            opacity:1
          }
          69% {
            transform:translate(84.4px,82.5px);
            opacity:1
          }
          69.5% {
            transform:translate(83.6px,83.75px);
            opacity:1
          }
          70% {
            transform:translate(82.8px,85px);
            opacity:1
          }
          70.5% {
            transform:translate(82px,86.25px);
            opacity:1
          }
          71% {
            transform:translate(81.2px,87.5px);
            opacity:1
          }
          71.5% {
            transform:translate(80.4px,88.75px);
            opacity:1
          }
          72% {
            transform:translate(79.6px,90px);
            opacity:1
          }
          72.5% {
            transform:translate(78.8px,91.25px);
            opacity:1
          }
          73% {
            transform:translate(78px,92.5px);
            opacity:1
          }
          73.5% {
            transform:translate(77.2px,93.75px);
            opacity:1
          }
          74% {
            transform:translate(76.4px,95px);
            opacity:1
          }
          74.5% {
            transform:translate(75.6px,96.25px);
            opacity:1
          }
          75% {
            transform:translate(74.8px,97.5px);
            opacity:1
          }
          75.5% {
            transform:translate(74px,98.75px);
            opacity:1
          }
          76% {
            transform:translate(73.2px,100px);
            opacity:1
          }
          76.5% {
            transform:translate(72.4px,101.25px);
            opacity:1
          }
          77% {
            transform:translate(71.6px,102.5px);
            opacity:1
          }
          77.5% {
            transform:translate(70.8px,103.75px);
            opacity:1
          }
          78% {
            transform:translate(70px,105px);
            opacity:1
          }
          78.5% {
            transform:translate(69.7px,105.55px);
            opacity:1
          }
          79% {
            transform:translate(69.4px,106.1px);
            opacity:1
          }
          79.5% {
            transform:translate(69.1px,106.65px);
            opacity:1
          }
          80% {
            transform:translate(68.8px,107.2px);
            opacity:1
          }
          80.5% {
            transform:translate(68.5px,107.75px);
            opacity:1
          }
          81% {
            transform:translate(68.2px,108.3px);
            opacity:1
          }
          81.5% {
            transform:translate(67.9px,108.85px);
            opacity:1
          }
          82% {
            transform:translate(67.6px,109.4px);
            opacity:1
          }
          82.5% {
            transform:translate(67.3px,109.95px);
            opacity:1
          }
          83% {
            transform:translate(67px,110.5px);
            opacity:1
          }
          83.5% {
            transform:translate(66.7px,111.05px);
            opacity:1
          }
          84% {
            transform:translate(66.4px,111.6px);
            opacity:1
          }
          84.5% {
            transform:translate(66.1px,112.15px);
            opacity:1
          }
          85% {
            transform:translate(65.8px,112.7px);
            opacity:1
          }
          85.5% {
            transform:translate(65.5px,113.25px);
            opacity:1
          }
          86% {
            transform:translate(65.2px,113.8px);
            opacity:1
          }
          86.5% {
            transform:translate(64.9px,114.35px);
            opacity:1
          }
          87% {
            transform:translate(64.6px,114.9px);
            opacity:1
          }
          87.5% {
            transform:translate(64.3px,115.45px);
            opacity:1
          }
          88% {
            transform:translate(64px,116px);
            opacity:1
          }
          88.5% {
            transform:translate(64px,117px);
            opacity:1
          }
          89% {
            transform:translate(64px,118px);
            opacity:1
          }
          89.5% {
            transform:translate(64px,119px);
            opacity:1
          }
          90% {
            transform:translate(64px,120px);
            opacity:1
          }
          90.5% {
            transform:translate(64px,121px);
            opacity:1
          }
          91% {
            transform:translate(64px,122px);
            opacity:1
          }
          91.5% {
            transform:translate(64px,123px);
            opacity:1
          }
          92% {
            transform:translate(64px,124px);
            opacity:1
          }
          92.5% {
            transform:translate(64px,125px);
            opacity:1
          }
          93% {
            transform:translate(64px,126px);
            opacity:1
          }
          93.5% {
            transform:translate(67.25px,126.5px);
            opacity:1
          }
          94% {
            transform:translate(70.5px,127px);
            opacity:1
          }
          94.5% {
            transform:translate(73.75px,127.5px);
            opacity:1
          }
          95% {
            transform:translate(77px,128px);
            opacity:1
          }
          95.5% {
            transform:translate(77px,128px);
            opacity:1
          }
          96% {
            transform:translate(77px,128px);
            opacity:1
          }
          96.5% {
            transform:translate(77px,128px);
            opacity:1
          }
          97% {
            transform:translate(77px,128px);
            opacity:1
          }
          97.5% {
            transform:translate(77px,128px);
            opacity:1
          }
          98% {
            transform:translate(77px,128px);
            opacity:1
          }
          98.5% {
            transform:translate(77px,128px);
            opacity:1
          }
          99% {
            transform:translate(77px,128px);
            opacity:1
          }
          99.5% {
            transform:translate(77px,128px);
            opacity:1
          }
          100% {
            transform:translate(77px,128px);
            opacity:1
          }
        }
        @keyframes water4 {
          0% {
            r:3px;
            opacity:1
          }
          0.5% {
            r:3px;
            opacity:1
          }
          1% {
            r:3px;
            opacity:1
          }
          1.5% {
            r:3px;
            opacity:1
          }
          2% {
            r:3px;
            opacity:1
          }
          2.5% {
            r:3px;
            opacity:1
          }
          3% {
            r:3px;
            opacity:1
          }
          3.5% {
            r:3px;
            opacity:1
          }
          4% {
            r:3px;
            opacity:1
          }
          4.5% {
            r:3px;
            opacity:1
          }
          5% {
            r:3px;
            opacity:1
          }
          5.5% {
            r:3px;
            opacity:1
          }
          6% {
            r:3px;
            opacity:1
          }
          6.5% {
            r:3px;
            opacity:1
          }
          7% {
            r:3px;
            opacity:1
          }
          7.5% {
            r:3px;
            opacity:1
          }
          8% {
            r:3px;
            opacity:1
          }
          8.5% {
            r:3px;
            opacity:1
          }
          9% {
            r:3px;
            opacity:1
          }
          9.5% {
            r:3px;
            opacity:1
          }
          10% {
            r:3px;
            opacity:1
          }
          10.5% {
            r:3px;
            opacity:1
          }
          11% {
            r:3px;
            opacity:1
          }
          11.5% {
            r:3px;
            opacity:1
          }
          12% {
            r:3px;
            opacity:1
          }
          12.5% {
            r:3px;
            opacity:1
          }
          13% {
            r:3px;
            opacity:1
          }
          13.5% {
            r:3px;
            opacity:1
          }
          14% {
            r:3px;
            opacity:1
          }
          14.5% {
            r:3px;
            opacity:1
          }
          15% {
            r:3px;
            opacity:1
          }
          15.5% {
            r:3px;
            opacity:1
          }
          16% {
            r:3px;
            opacity:1
          }
          16.5% {
            r:3px;
            opacity:1
          }
          17% {
            r:3px;
            opacity:1
          }
          17.5% {
            r:3px;
            opacity:1
          }
          18% {
            r:3px;
            opacity:1
          }
          18.5% {
            r:3px;
            opacity:1
          }
          19% {
            r:3px;
            opacity:1
          }
          19.5% {
            r:3px;
            opacity:1
          }
          20% {
            r:3px;
            opacity:1
          }
          20.5% {
            r:3px;
            opacity:1
          }
          21% {
            r:3px;
            opacity:1
          }
          21.5% {
            r:3px;
            opacity:1
          }
          22% {
            r:3px;
            opacity:1
          }
          22.5% {
            r:3px;
            opacity:1
          }
          23% {
            r:3px;
            opacity:1
          }
          23.5% {
            r:3px;
            opacity:1
          }
          24% {
            r:3px;
            opacity:1
          }
          24.5% {
            r:3px;
            opacity:1
          }
          25% {
            r:3px;
            opacity:1
          }
          25.5% {
            r:3px;
            opacity:1
          }
          26% {
            r:3px;
            opacity:1
          }
          26.5% {
            r:3px;
            opacity:1
          }
          27% {
            r:3px;
            opacity:1
          }
          27.5% {
            r:3px;
            opacity:1
          }
          28% {
            r:3px;
            opacity:1
          }
          28.5% {
            r:3px;
            opacity:1
          }
          29% {
            r:3px;
            opacity:1
          }
          29.5% {
            r:3px;
            opacity:1
          }
          30% {
            r:3px;
            opacity:1
          }
          30.5% {
            r:3px;
            opacity:1
          }
          31% {
            r:3px;
            opacity:1
          }
          31.5% {
            r:3px;
            opacity:1
          }
          32% {
            r:3px;
            opacity:1
          }
          32.5% {
            r:3px;
            opacity:1
          }
          33% {
            r:3px;
            opacity:1
          }
          33.5% {
            r:3px;
            opacity:1
          }
          34% {
            r:3px;
            opacity:1
          }
          34.5% {
            r:3px;
            opacity:1
          }
          35% {
            r:3px;
            opacity:1
          }
          35.5% {
            r:3px;
            opacity:1
          }
          36% {
            r:3px;
            opacity:1
          }
          36.5% {
            r:3px;
            opacity:1
          }
          37% {
            r:3px;
            opacity:1
          }
          37.5% {
            r:3px;
            opacity:1
          }
          38% {
            r:3px;
            opacity:1
          }
          38.5% {
            r:3px;
            opacity:1
          }
          39% {
            r:3px;
            opacity:1
          }
          39.5% {
            r:3px;
            opacity:1
          }
          40% {
            r:3px;
            opacity:1
          }
          40.5% {
            r:3px;
            opacity:1
          }
          41% {
            r:3px;
            opacity:1
          }
          41.5% {
            r:3px;
            opacity:1
          }
          42% {
            r:3px;
            opacity:1
          }
          42.5% {
            r:3px;
            opacity:1
          }
          43% {
            r:3px;
            opacity:1
          }
          43.5% {
            r:3px;
            opacity:1
          }
          44% {
            r:3px;
            opacity:1
          }
          44.5% {
            r:3px;
            opacity:1
          }
          45% {
            r:3px;
            opacity:1
          }
          45.5% {
            r:3px;
            opacity:1
          }
          46% {
            r:3px;
            opacity:1
          }
          46.5% {
            r:3px;
            opacity:1
          }
          47% {
            r:3px;
            opacity:1
          }
          47.5% {
            r:3px;
            opacity:1
          }
          48% {
            r:3px;
            opacity:1
          }
          48.5% {
            r:3.3px;
            opacity:1
          }
          49% {
            r:3.6px;
            opacity:1
          }
          49.5% {
            r:3.9px;
            opacity:1
          }
          50% {
            r:4.2px;
            opacity:1
          }
          50.5% {
            r:4.5px;
            opacity:1
          }
          51% {
            r:4.8px;
            opacity:1
          }
          51.5% {
            r:5.1px;
            opacity:1
          }
          52% {
            r:5.4px;
            opacity:1
          }
          52.5% {
            r:5.7px;
            opacity:1
          }
          53% {
            r:6px;
            opacity:1
          }
          53.5% {
            r:5.948px;
            opacity:1
          }
          54% {
            r:5.896px;
            opacity:1
          }
          54.5% {
            r:5.844px;
            opacity:1
          }
          55% {
            r:5.792px;
            opacity:1
          }
          55.5% {
            r:5.74px;
            opacity:1
          }
          56% {
            r:5.688px;
            opacity:1
          }
          56.5% {
            r:5.636px;
            opacity:1
          }
          57% {
            r:5.584px;
            opacity:1
          }
          57.5% {
            r:5.532px;
            opacity:1
          }
          58% {
            r:5.48px;
            opacity:1
          }
          58.5% {
            r:5.428px;
            opacity:1
          }
          59% {
            r:5.376px;
            opacity:1
          }
          59.5% {
            r:5.324px;
            opacity:1
          }
          60% {
            r:5.272px;
            opacity:1
          }
          60.5% {
            r:5.22px;
            opacity:1
          }
          61% {
            r:5.168px;
            opacity:1
          }
          61.5% {
            r:5.116px;
            opacity:1
          }
          62% {
            r:5.064px;
            opacity:1
          }
          62.5% {
            r:5.012px;
            opacity:1
          }
          63% {
            r:4.96px;
            opacity:1
          }
          63.5% {
            r:4.908px;
            opacity:1
          }
          64% {
            r:4.856px;
            opacity:1
          }
          64.5% {
            r:4.804px;
            opacity:1
          }
          65% {
            r:4.752px;
            opacity:1
          }
          65.5% {
            r:4.7px;
            opacity:1
          }
          66% {
            r:4.648px;
            opacity:1
          }
          66.5% {
            r:4.596px;
            opacity:1
          }
          67% {
            r:4.544px;
            opacity:1
          }
          67.5% {
            r:4.492px;
            opacity:1
          }
          68% {
            r:4.44px;
            opacity:1
          }
          68.5% {
            r:4.388px;
            opacity:1
          }
          69% {
            r:4.336px;
            opacity:1
          }
          69.5% {
            r:4.284px;
            opacity:1
          }
          70% {
            r:4.232px;
            opacity:1
          }
          70.5% {
            r:4.18px;
            opacity:1
          }
          71% {
            r:4.128px;
            opacity:1
          }
          71.5% {
            r:4.076px;
            opacity:1
          }
          72% {
            r:4.024px;
            opacity:1
          }
          72.5% {
            r:3.972px;
            opacity:1
          }
          73% {
            r:3.92px;
            opacity:1
          }
          73.5% {
            r:3.868px;
            opacity:1
          }
          74% {
            r:3.816px;
            opacity:1
          }
          74.5% {
            r:3.764px;
            opacity:1
          }
          75% {
            r:3.712px;
            opacity:1
          }
          75.5% {
            r:3.66px;
            opacity:1
          }
          76% {
            r:3.608px;
            opacity:1
          }
          76.5% {
            r:3.556px;
            opacity:1
          }
          77% {
            r:3.504px;
            opacity:1
          }
          77.5% {
            r:3.452px;
            opacity:1
          }
          78% {
            r:3.4px;
            opacity:1
          }
          78.5% {
            r:3.4px;
            opacity:0.9
          }
          79% {
            r:3.4px;
            opacity:0.8
          }
          79.5% {
            r:3.4px;
            opacity:0.7
          }
          80% {
            r:3.4px;
            opacity:0.6
          }
          80.5% {
            r:3.4px;
            opacity:0.5
          }
          81% {
            r:3.4px;
            opacity:0.4
          }
          81.5% {
            r:3.4px;
            opacity:0.3
          }
          82% {
            r:3.4px;
            opacity:0.2
          }
          82.5% {
            r:3.4px;
            opacity:0.1
          }
          83% {
            r:3.4px;
            opacity:0
          }
          83.5% {
            r:3.4px;
            opacity:0
          }
          84% {
            r:3.4px;
            opacity:0
          }
          84.5% {
            r:3.4px;
            opacity:0
          }
          85% {
            r:3.4px;
            opacity:0
          }
          85.5% {
            r:3.4px;
            opacity:0
          }
          86% {
            r:3.4px;
            opacity:0
          }
          86.5% {
            r:3.4px;
            opacity:0
          }
          87% {
            r:3.4px;
            opacity:0
          }
          87.5% {
            r:3.4px;
            opacity:0
          }
          88% {
            r:3.4px;
            opacity:0
          }
          88.5% {
            r:3.4px;
            opacity:0
          }
          89% {
            r:3.4px;
            opacity:0
          }
          89.5% {
            r:3.4px;
            opacity:0
          }
          90% {
            r:3.4px;
            opacity:0
          }
          90.5% {
            r:3.4px;
            opacity:0
          }
          91% {
            r:3.4px;
            opacity:0
          }
          91.5% {
            r:3.4px;
            opacity:0
          }
          92% {
            r:3.4px;
            opacity:0
          }
          92.5% {
            r:3.4px;
            opacity:0
          }
          93% {
            r:3.4px;
            opacity:0
          }
          93.5% {
            r:3.4px;
            opacity:0
          }
          94% {
            r:3.4px;
            opacity:0
          }
          94.5% {
            r:3.4px;
            opacity:0
          }
          95% {
            r:3.4px;
            opacity:0
          }
          95.5% {
            r:3.4px;
            opacity:0
          }
          96% {
            r:3.4px;
            opacity:0
          }
          96.5% {
            r:3.4px;
            opacity:0
          }
          97% {
            r:3.4px;
            opacity:0
          }
          97.5% {
            r:3.4px;
            opacity:0
          }
          98% {
            r:3.4px;
            opacity:0
          }
          98.5% {
            r:3.4px;
            opacity:0
          }
          99% {
            r:3.4px;
            opacity:0
          }
          99.5% {
            r:3.4px;
            opacity:0
          }
          100% {
            r:3.4px;
            opacity:0
          }
        }
        .v0 {
          opacity:0;
          animation:v0 12s linear infinite
        }
        @keyframes v0 {
          0%,50% {
            opacity:0;
            transform:translate(81.472px,66.667px)
          }
          51% {
            opacity:1;
            transform:translate(83.472px,66.667px)
          }
          54% {
            opacity:1;
            transform:translate(99px,77px)
          }
          59% {
            opacity:1;
            transform:translate(140px,77px)
          }
          60%,100% {
            opacity:0;
            transform:translate(148px,77px)
          }
        }
        .v1 {
          opacity:0;
          animation:v1 12s linear infinite
        }
        @keyframes v1 {
          0%,60% {
            opacity:0;
            transform:translate(78.832px,85px)
          }
          61% {
            opacity:1;
            transform:translate(80.832px,85px)
          }
          64% {
            opacity:1;
            transform:translate(99px,77px)
          }
          69% {
            opacity:1;
            transform:translate(140px,77px)
          }
          70%,100% {
            opacity:0;
            transform:translate(148px,77px)
          }
        }
        .v2 {
          opacity:0;
          animation:v2 12s linear infinite
        }
        @keyframes v2 {
          0%,66% {
            opacity:0;
            transform:translate(91.848px,76.667px)
          }
          67% {
            opacity:1;
            transform:translate(93.848px,76.667px)
          }
          70% {
            opacity:1;
            transform:translate(99px,77px)
          }
          75% {
            opacity:1;
            transform:translate(140px,77px)
          }
          76%,100% {
            opacity:0;
            transform:translate(148px,77px)
          }
        }
        .nozzle {
          fill:none;
          stroke:#9db8a9;
          stroke-width:1.3
        }
        .feed {
          fill:#6eaec9;
          fill-opacity:.35;
          stroke:#77c9ef;
          stroke-width:1.2;
          animation:feed 12s linear infinite
        }
        .heat {
          fill:none;
          stroke:#dca773;
          stroke-width:1.3;
          stroke-dasharray:3 2;
          animation:heat 1s linear infinite
        }
        .water {
          fill:#77c9ef;
          fill-opacity:.28;
          stroke:#77c9ef;
          stroke-width:.8
        }
        .powder {
          fill:#efca83
        }
        .vapor {
          fill:#77c9ef
        }
        .cycle {
          animation:cycle 12s linear infinite
        }
        @keyframes feed {
          0%,6%,61%,100% {
            opacity:0
          }
          8%,56% {
            opacity:1
          }
        }
        @keyframes heat {
          to {
            stroke-dashoffset:-10
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Spray Drying">
        <path fill="#152f2b" d="M22,28H106V88L70,118H58L22,88Z"/>
        <path class="ink muted" d="M22,28H106V73H140M140,81H106V88L70,118V123M58,123V118L22,88V42H10M10,34H22V28M43,123V134H85V123"/>
        <path class="nozzle" d="M61,15V37M67,15V37"/>
        <path class="feed" d="M64,15V43L53,47H75L64,43"/>
        <path class="heat" d="M10,38H33V57M30,52L33,57L36,52"/>
        <g class="cycle">
          <g class="drop drop0">
            <circle class="water water0" r="3.4"/>
            <path class="powder" d="M0,-2.5L2.4,-.8L1.5,2.2H-1.7L-2.4,-.9Z"/>
          </g>
          <g class="drop drop1">
            <circle class="water water1" r="3.4"/>
            <path class="powder" d="M0,-2.5L2.4,-.8L1.5,2.2H-1.7L-2.4,-.9Z"/>
          </g>
          <g class="drop drop2">
            <circle class="water water2" r="3.4"/>
            <path class="powder" d="M0,-2.5L2.4,-.8L1.5,2.2H-1.7L-2.4,-.9Z"/>
          </g>
          <g class="drop drop3">
            <circle class="water water3" r="4.024"/>
            <path class="powder" d="M0,-2.5L2.4,-.8L1.5,2.2H-1.7L-2.4,-.9Z"/>
          </g>
          <g class="drop drop4">
            <circle class="water water4" r="5.064"/>
            <path class="powder" d="M0,-2.5L2.4,-.8L1.5,2.2H-1.7L-2.4,-.9Z"/>
          </g>
          <circle class="vapor v0" r="1.2"/>
          <circle class="vapor v1" r="1.2"/>
          <circle class="vapor v2" r="1.2"/>
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

if (!customElements.get("concept-spray-drying")) {
  customElements.define("concept-spray-drying", ConceptSprayDrying);
}
