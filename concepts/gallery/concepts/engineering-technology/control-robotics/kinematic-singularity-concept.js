// Kinematic Singularity. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptKinematicSingularity extends HTMLElement {
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
        .shoulder {
          animation:shoulder 10s linear infinite
        }
        .elbow {
          animation:elbow 10s linear infinite
        }
        .ellipse {
          opacity:0;
          animation:ellipse 10s linear infinite
        }
        .singular {
          animation:singular 10s steps(1,end) infinite
        }
        @keyframes singular {
          0% {
            opacity:0
          }
          30% {
            opacity:1
          }
          60.01%,100% {
            opacity:0
          }
        }
        @keyframes shoulder {
          0% {
            transform:rotate(-50deg)
          }
          0.5% {
            transform:rotate(-49.9588deg)
          }
          1% {
            transform:rotate(-49.837deg)
          }
          1.5% {
            transform:rotate(-49.6375deg)
          }
          2% {
            transform:rotate(-49.363deg)
          }
          2.5% {
            transform:rotate(-49.0162deg)
          }
          3% {
            transform:rotate(-48.6deg)
          }
          3.5% {
            transform:rotate(-48.1171deg)
          }
          4% {
            transform:rotate(-47.5704deg)
          }
          4.5% {
            transform:rotate(-46.9625deg)
          }
          5% {
            transform:rotate(-46.2963deg)
          }
          5.5% {
            transform:rotate(-45.5745deg)
          }
          6% {
            transform:rotate(-44.8deg)
          }
          6.5% {
            transform:rotate(-43.9755deg)
          }
          7% {
            transform:rotate(-43.1037deg)
          }
          7.5% {
            transform:rotate(-42.1875deg)
          }
          8% {
            transform:rotate(-41.2296deg)
          }
          8.5% {
            transform:rotate(-40.2329deg)
          }
          9% {
            transform:rotate(-39.2deg)
          }
          9.5% {
            transform:rotate(-38.1338deg)
          }
          10% {
            transform:rotate(-37.037deg)
          }
          10.5% {
            transform:rotate(-35.9125deg)
          }
          11% {
            transform:rotate(-34.763deg)
          }
          11.5% {
            transform:rotate(-33.5912deg)
          }
          12% {
            transform:rotate(-32.4deg)
          }
          12.5% {
            transform:rotate(-31.1921deg)
          }
          13% {
            transform:rotate(-29.9704deg)
          }
          13.5% {
            transform:rotate(-28.7375deg)
          }
          14% {
            transform:rotate(-27.4963deg)
          }
          14.5% {
            transform:rotate(-26.2495deg)
          }
          15% {
            transform:rotate(-25deg)
          }
          15.5% {
            transform:rotate(-23.7505deg)
          }
          16% {
            transform:rotate(-22.5037deg)
          }
          16.5% {
            transform:rotate(-21.2625deg)
          }
          17% {
            transform:rotate(-20.0296deg)
          }
          17.5% {
            transform:rotate(-18.8079deg)
          }
          18% {
            transform:rotate(-17.6deg)
          }
          18.5% {
            transform:rotate(-16.4088deg)
          }
          19% {
            transform:rotate(-15.237deg)
          }
          19.5% {
            transform:rotate(-14.0875deg)
          }
          20% {
            transform:rotate(-12.963deg)
          }
          20.5% {
            transform:rotate(-11.8662deg)
          }
          21% {
            transform:rotate(-10.8deg)
          }
          21.5% {
            transform:rotate(-9.7671deg)
          }
          22% {
            transform:rotate(-8.7704deg)
          }
          22.5% {
            transform:rotate(-7.8125deg)
          }
          23% {
            transform:rotate(-6.8963deg)
          }
          23.5% {
            transform:rotate(-6.0245deg)
          }
          24% {
            transform:rotate(-5.2deg)
          }
          24.5% {
            transform:rotate(-4.4255deg)
          }
          25% {
            transform:rotate(-3.7037deg)
          }
          25.5% {
            transform:rotate(-3.0375deg)
          }
          26% {
            transform:rotate(-2.4296deg)
          }
          26.5% {
            transform:rotate(-1.8829deg)
          }
          27% {
            transform:rotate(-1.4deg)
          }
          27.5% {
            transform:rotate(-0.9838deg)
          }
          28% {
            transform:rotate(-0.637deg)
          }
          28.5% {
            transform:rotate(-0.3625deg)
          }
          29% {
            transform:rotate(-0.163deg)
          }
          29.5% {
            transform:rotate(-0.0412deg)
          }
          30% {
            transform:rotate(0deg)
          }
          30.5% {
            transform:rotate(0deg)
          }
          31% {
            transform:rotate(0deg)
          }
          31.5% {
            transform:rotate(0deg)
          }
          32% {
            transform:rotate(0deg)
          }
          32.5% {
            transform:rotate(0deg)
          }
          33% {
            transform:rotate(0deg)
          }
          33.5% {
            transform:rotate(0deg)
          }
          34% {
            transform:rotate(0deg)
          }
          34.5% {
            transform:rotate(0deg)
          }
          35% {
            transform:rotate(0deg)
          }
          35.5% {
            transform:rotate(0deg)
          }
          36% {
            transform:rotate(0deg)
          }
          36.5% {
            transform:rotate(0deg)
          }
          37% {
            transform:rotate(0deg)
          }
          37.5% {
            transform:rotate(0deg)
          }
          38% {
            transform:rotate(0deg)
          }
          38.5% {
            transform:rotate(0deg)
          }
          39% {
            transform:rotate(0deg)
          }
          39.5% {
            transform:rotate(0deg)
          }
          40% {
            transform:rotate(0deg)
          }
          40.5% {
            transform:rotate(0deg)
          }
          41% {
            transform:rotate(0deg)
          }
          41.5% {
            transform:rotate(0deg)
          }
          42% {
            transform:rotate(0deg)
          }
          42.5% {
            transform:rotate(0deg)
          }
          43% {
            transform:rotate(0deg)
          }
          43.5% {
            transform:rotate(0deg)
          }
          44% {
            transform:rotate(0deg)
          }
          44.5% {
            transform:rotate(0deg)
          }
          45% {
            transform:rotate(0deg)
          }
          45.5% {
            transform:rotate(0deg)
          }
          46% {
            transform:rotate(0deg)
          }
          46.5% {
            transform:rotate(0deg)
          }
          47% {
            transform:rotate(0deg)
          }
          47.5% {
            transform:rotate(0deg)
          }
          48% {
            transform:rotate(0deg)
          }
          48.5% {
            transform:rotate(0deg)
          }
          49% {
            transform:rotate(0deg)
          }
          49.5% {
            transform:rotate(0deg)
          }
          50% {
            transform:rotate(0deg)
          }
          50.5% {
            transform:rotate(0deg)
          }
          51% {
            transform:rotate(0deg)
          }
          51.5% {
            transform:rotate(0deg)
          }
          52% {
            transform:rotate(0deg)
          }
          52.5% {
            transform:rotate(0deg)
          }
          53% {
            transform:rotate(0deg)
          }
          53.5% {
            transform:rotate(0deg)
          }
          54% {
            transform:rotate(0deg)
          }
          54.5% {
            transform:rotate(0deg)
          }
          55% {
            transform:rotate(0deg)
          }
          55.5% {
            transform:rotate(0deg)
          }
          56% {
            transform:rotate(0deg)
          }
          56.5% {
            transform:rotate(0deg)
          }
          57% {
            transform:rotate(0deg)
          }
          57.5% {
            transform:rotate(0deg)
          }
          58% {
            transform:rotate(0deg)
          }
          58.5% {
            transform:rotate(0deg)
          }
          59% {
            transform:rotate(0deg)
          }
          59.5% {
            transform:rotate(0deg)
          }
          60% {
            transform:rotate(0deg)
          }
          60.5% {
            transform:rotate(-0.0412deg)
          }
          61% {
            transform:rotate(-0.163deg)
          }
          61.5% {
            transform:rotate(-0.3625deg)
          }
          62% {
            transform:rotate(-0.637deg)
          }
          62.5% {
            transform:rotate(-0.9838deg)
          }
          63% {
            transform:rotate(-1.4deg)
          }
          63.5% {
            transform:rotate(-1.8829deg)
          }
          64% {
            transform:rotate(-2.4296deg)
          }
          64.5% {
            transform:rotate(-3.0375deg)
          }
          65% {
            transform:rotate(-3.7037deg)
          }
          65.5% {
            transform:rotate(-4.4255deg)
          }
          66% {
            transform:rotate(-5.2deg)
          }
          66.5% {
            transform:rotate(-6.0245deg)
          }
          67% {
            transform:rotate(-6.8963deg)
          }
          67.5% {
            transform:rotate(-7.8125deg)
          }
          68% {
            transform:rotate(-8.7704deg)
          }
          68.5% {
            transform:rotate(-9.7671deg)
          }
          69% {
            transform:rotate(-10.8deg)
          }
          69.5% {
            transform:rotate(-11.8662deg)
          }
          70% {
            transform:rotate(-12.963deg)
          }
          70.5% {
            transform:rotate(-14.0875deg)
          }
          71% {
            transform:rotate(-15.237deg)
          }
          71.5% {
            transform:rotate(-16.4088deg)
          }
          72% {
            transform:rotate(-17.6deg)
          }
          72.5% {
            transform:rotate(-18.8079deg)
          }
          73% {
            transform:rotate(-20.0296deg)
          }
          73.5% {
            transform:rotate(-21.2625deg)
          }
          74% {
            transform:rotate(-22.5037deg)
          }
          74.5% {
            transform:rotate(-23.7505deg)
          }
          75% {
            transform:rotate(-25deg)
          }
          75.5% {
            transform:rotate(-26.2495deg)
          }
          76% {
            transform:rotate(-27.4963deg)
          }
          76.5% {
            transform:rotate(-28.7375deg)
          }
          77% {
            transform:rotate(-29.9704deg)
          }
          77.5% {
            transform:rotate(-31.1921deg)
          }
          78% {
            transform:rotate(-32.4deg)
          }
          78.5% {
            transform:rotate(-33.5912deg)
          }
          79% {
            transform:rotate(-34.763deg)
          }
          79.5% {
            transform:rotate(-35.9125deg)
          }
          80% {
            transform:rotate(-37.037deg)
          }
          80.5% {
            transform:rotate(-38.1338deg)
          }
          81% {
            transform:rotate(-39.2deg)
          }
          81.5% {
            transform:rotate(-40.2329deg)
          }
          82% {
            transform:rotate(-41.2296deg)
          }
          82.5% {
            transform:rotate(-42.1875deg)
          }
          83% {
            transform:rotate(-43.1037deg)
          }
          83.5% {
            transform:rotate(-43.9755deg)
          }
          84% {
            transform:rotate(-44.8deg)
          }
          84.5% {
            transform:rotate(-45.5745deg)
          }
          85% {
            transform:rotate(-46.2963deg)
          }
          85.5% {
            transform:rotate(-46.9625deg)
          }
          86% {
            transform:rotate(-47.5704deg)
          }
          86.5% {
            transform:rotate(-48.1171deg)
          }
          87% {
            transform:rotate(-48.6deg)
          }
          87.5% {
            transform:rotate(-49.0162deg)
          }
          88% {
            transform:rotate(-49.363deg)
          }
          88.5% {
            transform:rotate(-49.6375deg)
          }
          89% {
            transform:rotate(-49.837deg)
          }
          89.5% {
            transform:rotate(-49.9588deg)
          }
          90% {
            transform:rotate(-50deg)
          }
          90.5% {
            transform:rotate(-50deg)
          }
          91% {
            transform:rotate(-50deg)
          }
          91.5% {
            transform:rotate(-50deg)
          }
          92% {
            transform:rotate(-50deg)
          }
          92.5% {
            transform:rotate(-50deg)
          }
          93% {
            transform:rotate(-50deg)
          }
          93.5% {
            transform:rotate(-50deg)
          }
          94% {
            transform:rotate(-50deg)
          }
          94.5% {
            transform:rotate(-50deg)
          }
          95% {
            transform:rotate(-50deg)
          }
          95.5% {
            transform:rotate(-50deg)
          }
          96% {
            transform:rotate(-50deg)
          }
          96.5% {
            transform:rotate(-50deg)
          }
          97% {
            transform:rotate(-50deg)
          }
          97.5% {
            transform:rotate(-50deg)
          }
          98% {
            transform:rotate(-50deg)
          }
          98.5% {
            transform:rotate(-50deg)
          }
          99% {
            transform:rotate(-50deg)
          }
          99.5% {
            transform:rotate(-50deg)
          }
          100% {
            transform:rotate(-50deg)
          }
        }
        @keyframes elbow {
          0% {
            transform:rotate(100deg)
          }
          0.5% {
            transform:rotate(99.9176deg)
          }
          1% {
            transform:rotate(99.6741deg)
          }
          1.5% {
            transform:rotate(99.275deg)
          }
          2% {
            transform:rotate(98.7259deg)
          }
          2.5% {
            transform:rotate(98.0324deg)
          }
          3% {
            transform:rotate(97.2deg)
          }
          3.5% {
            transform:rotate(96.2343deg)
          }
          4% {
            transform:rotate(95.1407deg)
          }
          4.5% {
            transform:rotate(93.925deg)
          }
          5% {
            transform:rotate(92.5926deg)
          }
          5.5% {
            transform:rotate(91.1491deg)
          }
          6% {
            transform:rotate(89.6deg)
          }
          6.5% {
            transform:rotate(87.9509deg)
          }
          7% {
            transform:rotate(86.2074deg)
          }
          7.5% {
            transform:rotate(84.375deg)
          }
          8% {
            transform:rotate(82.4593deg)
          }
          8.5% {
            transform:rotate(80.4657deg)
          }
          9% {
            transform:rotate(78.4deg)
          }
          9.5% {
            transform:rotate(76.2676deg)
          }
          10% {
            transform:rotate(74.0741deg)
          }
          10.5% {
            transform:rotate(71.825deg)
          }
          11% {
            transform:rotate(69.5259deg)
          }
          11.5% {
            transform:rotate(67.1824deg)
          }
          12% {
            transform:rotate(64.8deg)
          }
          12.5% {
            transform:rotate(62.3843deg)
          }
          13% {
            transform:rotate(59.9407deg)
          }
          13.5% {
            transform:rotate(57.475deg)
          }
          14% {
            transform:rotate(54.9926deg)
          }
          14.5% {
            transform:rotate(52.4991deg)
          }
          15% {
            transform:rotate(50deg)
          }
          15.5% {
            transform:rotate(47.5009deg)
          }
          16% {
            transform:rotate(45.0074deg)
          }
          16.5% {
            transform:rotate(42.525deg)
          }
          17% {
            transform:rotate(40.0593deg)
          }
          17.5% {
            transform:rotate(37.6157deg)
          }
          18% {
            transform:rotate(35.2deg)
          }
          18.5% {
            transform:rotate(32.8176deg)
          }
          19% {
            transform:rotate(30.4741deg)
          }
          19.5% {
            transform:rotate(28.175deg)
          }
          20% {
            transform:rotate(25.9259deg)
          }
          20.5% {
            transform:rotate(23.7324deg)
          }
          21% {
            transform:rotate(21.6deg)
          }
          21.5% {
            transform:rotate(19.5343deg)
          }
          22% {
            transform:rotate(17.5407deg)
          }
          22.5% {
            transform:rotate(15.625deg)
          }
          23% {
            transform:rotate(13.7926deg)
          }
          23.5% {
            transform:rotate(12.0491deg)
          }
          24% {
            transform:rotate(10.4deg)
          }
          24.5% {
            transform:rotate(8.8509deg)
          }
          25% {
            transform:rotate(7.4074deg)
          }
          25.5% {
            transform:rotate(6.075deg)
          }
          26% {
            transform:rotate(4.8593deg)
          }
          26.5% {
            transform:rotate(3.7657deg)
          }
          27% {
            transform:rotate(2.8deg)
          }
          27.5% {
            transform:rotate(1.9676deg)
          }
          28% {
            transform:rotate(1.2741deg)
          }
          28.5% {
            transform:rotate(0.725deg)
          }
          29% {
            transform:rotate(0.3259deg)
          }
          29.5% {
            transform:rotate(0.0824deg)
          }
          30% {
            transform:rotate(0deg)
          }
          30.5% {
            transform:rotate(0deg)
          }
          31% {
            transform:rotate(0deg)
          }
          31.5% {
            transform:rotate(0deg)
          }
          32% {
            transform:rotate(0deg)
          }
          32.5% {
            transform:rotate(0deg)
          }
          33% {
            transform:rotate(0deg)
          }
          33.5% {
            transform:rotate(0deg)
          }
          34% {
            transform:rotate(0deg)
          }
          34.5% {
            transform:rotate(0deg)
          }
          35% {
            transform:rotate(0deg)
          }
          35.5% {
            transform:rotate(0deg)
          }
          36% {
            transform:rotate(0deg)
          }
          36.5% {
            transform:rotate(0deg)
          }
          37% {
            transform:rotate(0deg)
          }
          37.5% {
            transform:rotate(0deg)
          }
          38% {
            transform:rotate(0deg)
          }
          38.5% {
            transform:rotate(0deg)
          }
          39% {
            transform:rotate(0deg)
          }
          39.5% {
            transform:rotate(0deg)
          }
          40% {
            transform:rotate(0deg)
          }
          40.5% {
            transform:rotate(0deg)
          }
          41% {
            transform:rotate(0deg)
          }
          41.5% {
            transform:rotate(0deg)
          }
          42% {
            transform:rotate(0deg)
          }
          42.5% {
            transform:rotate(0deg)
          }
          43% {
            transform:rotate(0deg)
          }
          43.5% {
            transform:rotate(0deg)
          }
          44% {
            transform:rotate(0deg)
          }
          44.5% {
            transform:rotate(0deg)
          }
          45% {
            transform:rotate(0deg)
          }
          45.5% {
            transform:rotate(0deg)
          }
          46% {
            transform:rotate(0deg)
          }
          46.5% {
            transform:rotate(0deg)
          }
          47% {
            transform:rotate(0deg)
          }
          47.5% {
            transform:rotate(0deg)
          }
          48% {
            transform:rotate(0deg)
          }
          48.5% {
            transform:rotate(0deg)
          }
          49% {
            transform:rotate(0deg)
          }
          49.5% {
            transform:rotate(0deg)
          }
          50% {
            transform:rotate(0deg)
          }
          50.5% {
            transform:rotate(0deg)
          }
          51% {
            transform:rotate(0deg)
          }
          51.5% {
            transform:rotate(0deg)
          }
          52% {
            transform:rotate(0deg)
          }
          52.5% {
            transform:rotate(0deg)
          }
          53% {
            transform:rotate(0deg)
          }
          53.5% {
            transform:rotate(0deg)
          }
          54% {
            transform:rotate(0deg)
          }
          54.5% {
            transform:rotate(0deg)
          }
          55% {
            transform:rotate(0deg)
          }
          55.5% {
            transform:rotate(0deg)
          }
          56% {
            transform:rotate(0deg)
          }
          56.5% {
            transform:rotate(0deg)
          }
          57% {
            transform:rotate(0deg)
          }
          57.5% {
            transform:rotate(0deg)
          }
          58% {
            transform:rotate(0deg)
          }
          58.5% {
            transform:rotate(0deg)
          }
          59% {
            transform:rotate(0deg)
          }
          59.5% {
            transform:rotate(0deg)
          }
          60% {
            transform:rotate(0deg)
          }
          60.5% {
            transform:rotate(0.0824deg)
          }
          61% {
            transform:rotate(0.3259deg)
          }
          61.5% {
            transform:rotate(0.725deg)
          }
          62% {
            transform:rotate(1.2741deg)
          }
          62.5% {
            transform:rotate(1.9676deg)
          }
          63% {
            transform:rotate(2.8deg)
          }
          63.5% {
            transform:rotate(3.7657deg)
          }
          64% {
            transform:rotate(4.8593deg)
          }
          64.5% {
            transform:rotate(6.075deg)
          }
          65% {
            transform:rotate(7.4074deg)
          }
          65.5% {
            transform:rotate(8.8509deg)
          }
          66% {
            transform:rotate(10.4deg)
          }
          66.5% {
            transform:rotate(12.0491deg)
          }
          67% {
            transform:rotate(13.7926deg)
          }
          67.5% {
            transform:rotate(15.625deg)
          }
          68% {
            transform:rotate(17.5407deg)
          }
          68.5% {
            transform:rotate(19.5343deg)
          }
          69% {
            transform:rotate(21.6deg)
          }
          69.5% {
            transform:rotate(23.7324deg)
          }
          70% {
            transform:rotate(25.9259deg)
          }
          70.5% {
            transform:rotate(28.175deg)
          }
          71% {
            transform:rotate(30.4741deg)
          }
          71.5% {
            transform:rotate(32.8176deg)
          }
          72% {
            transform:rotate(35.2deg)
          }
          72.5% {
            transform:rotate(37.6157deg)
          }
          73% {
            transform:rotate(40.0593deg)
          }
          73.5% {
            transform:rotate(42.525deg)
          }
          74% {
            transform:rotate(45.0074deg)
          }
          74.5% {
            transform:rotate(47.5009deg)
          }
          75% {
            transform:rotate(50deg)
          }
          75.5% {
            transform:rotate(52.4991deg)
          }
          76% {
            transform:rotate(54.9926deg)
          }
          76.5% {
            transform:rotate(57.475deg)
          }
          77% {
            transform:rotate(59.9407deg)
          }
          77.5% {
            transform:rotate(62.3843deg)
          }
          78% {
            transform:rotate(64.8deg)
          }
          78.5% {
            transform:rotate(67.1824deg)
          }
          79% {
            transform:rotate(69.5259deg)
          }
          79.5% {
            transform:rotate(71.825deg)
          }
          80% {
            transform:rotate(74.0741deg)
          }
          80.5% {
            transform:rotate(76.2676deg)
          }
          81% {
            transform:rotate(78.4deg)
          }
          81.5% {
            transform:rotate(80.4657deg)
          }
          82% {
            transform:rotate(82.4593deg)
          }
          82.5% {
            transform:rotate(84.375deg)
          }
          83% {
            transform:rotate(86.2074deg)
          }
          83.5% {
            transform:rotate(87.9509deg)
          }
          84% {
            transform:rotate(89.6deg)
          }
          84.5% {
            transform:rotate(91.1491deg)
          }
          85% {
            transform:rotate(92.5926deg)
          }
          85.5% {
            transform:rotate(93.925deg)
          }
          86% {
            transform:rotate(95.1407deg)
          }
          86.5% {
            transform:rotate(96.2343deg)
          }
          87% {
            transform:rotate(97.2deg)
          }
          87.5% {
            transform:rotate(98.0324deg)
          }
          88% {
            transform:rotate(98.7259deg)
          }
          88.5% {
            transform:rotate(99.275deg)
          }
          89% {
            transform:rotate(99.6741deg)
          }
          89.5% {
            transform:rotate(99.9176deg)
          }
          90% {
            transform:rotate(100deg)
          }
          90.5% {
            transform:rotate(100deg)
          }
          91% {
            transform:rotate(100deg)
          }
          91.5% {
            transform:rotate(100deg)
          }
          92% {
            transform:rotate(100deg)
          }
          92.5% {
            transform:rotate(100deg)
          }
          93% {
            transform:rotate(100deg)
          }
          93.5% {
            transform:rotate(100deg)
          }
          94% {
            transform:rotate(100deg)
          }
          94.5% {
            transform:rotate(100deg)
          }
          95% {
            transform:rotate(100deg)
          }
          95.5% {
            transform:rotate(100deg)
          }
          96% {
            transform:rotate(100deg)
          }
          96.5% {
            transform:rotate(100deg)
          }
          97% {
            transform:rotate(100deg)
          }
          97.5% {
            transform:rotate(100deg)
          }
          98% {
            transform:rotate(100deg)
          }
          98.5% {
            transform:rotate(100deg)
          }
          99% {
            transform:rotate(100deg)
          }
          99.5% {
            transform:rotate(100deg)
          }
          100% {
            transform:rotate(100deg)
          }
        }
        @keyframes ellipse {
          0% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          0.5% {
            transform:translate(77.9005px,77px) rotate(-73.206deg);
            rx:11.9888px;
            ry:5.3243px;
            opacity:1
          }
          1% {
            transform:translate(78.0467px,77px) rotate(-73.3075deg);
            rx:12.0148px;
            ry:5.3167px;
            opacity:1
          }
          1.5% {
            transform:translate(78.2859px,77px) rotate(-73.472deg);
            rx:12.0573px;
            ry:5.3041px;
            opacity:1
          }
          2% {
            transform:translate(78.6138px,77px) rotate(-73.6943deg);
            rx:12.1158px;
            ry:5.2865px;
            opacity:1
          }
          2.5% {
            transform:translate(79.0261px,77px) rotate(-73.9688deg);
            rx:12.1894px;
            ry:5.2639px;
            opacity:1
          }
          3% {
            transform:translate(79.5181px,77px) rotate(-74.2895deg);
            rx:12.2775px;
            ry:5.2363px;
            opacity:1
          }
          3.5% {
            transform:translate(80.0849px,77px) rotate(-74.6499deg);
            rx:12.3794px;
            ry:5.2036px;
            opacity:1
          }
          4% {
            transform:translate(80.7216px,77px) rotate(-75.0438deg);
            rx:12.4942px;
            ry:5.1656px;
            opacity:1
          }
          4.5% {
            transform:translate(81.4229px,77px) rotate(-75.465deg);
            rx:12.6211px;
            ry:5.1222px;
            opacity:1
          }
          5% {
            transform:translate(82.1836px,77px) rotate(-75.9078deg);
            rx:12.7592px;
            ry:5.0735px;
            opacity:1
          }
          5.5% {
            transform:translate(82.9983px,77px) rotate(-76.3666deg);
            rx:12.9077px;
            ry:5.0193px;
            opacity:1
          }
          6% {
            transform:translate(83.8614px,77px) rotate(-76.8368deg);
            rx:13.0655px;
            ry:4.9595px;
            opacity:1
          }
          6.5% {
            transform:translate(84.7674px,77px) rotate(-77.3138deg);
            rx:13.2318px;
            ry:4.8942px;
            opacity:1
          }
          7% {
            transform:translate(85.7106px,77px) rotate(-77.794deg);
            rx:13.4056px;
            ry:4.8232px;
            opacity:1
          }
          7.5% {
            transform:translate(86.6856px,77px) rotate(-78.2741deg);
            rx:13.5857px;
            ry:4.7468px;
            opacity:1
          }
          8% {
            transform:translate(87.6867px,77px) rotate(-78.7515deg);
            rx:13.7713px;
            ry:4.6648px;
            opacity:1
          }
          8.5% {
            transform:translate(88.7083px,77px) rotate(-79.2239deg);
            rx:13.9612px;
            ry:4.5773px;
            opacity:1
          }
          9% {
            transform:translate(89.745px,77px) rotate(-79.6895deg);
            rx:14.1544px;
            ry:4.4846px;
            opacity:1
          }
          9.5% {
            transform:translate(90.7914px,77px) rotate(-80.147deg);
            rx:14.35px;
            ry:4.3866px;
            opacity:1
          }
          10% {
            transform:translate(91.8422px,77px) rotate(-80.5952deg);
            rx:14.5469px;
            ry:4.2836px;
            opacity:1
          }
          10.5% {
            transform:translate(92.8922px,77px) rotate(-81.0334deg);
            rx:14.7441px;
            ry:4.1757px;
            opacity:1
          }
          11% {
            transform:translate(93.9366px,77px) rotate(-81.4609deg);
            rx:14.9406px;
            ry:4.0632px;
            opacity:1
          }
          11.5% {
            transform:translate(94.9706px,77px) rotate(-81.8775deg);
            rx:15.1356px;
            ry:3.9463px;
            opacity:1
          }
          12% {
            transform:translate(95.9895px,77px) rotate(-82.283deg);
            rx:15.328px;
            ry:3.8252px;
            opacity:1
          }
          12.5% {
            transform:translate(96.9892px,77px) rotate(-82.6772deg);
            rx:15.5172px;
            ry:3.7003px;
            opacity:1
          }
          13% {
            transform:translate(97.9655px,77px) rotate(-83.0602deg);
            rx:15.7022px;
            ry:3.5718px;
            opacity:1
          }
          13.5% {
            transform:translate(98.9149px,77px) rotate(-83.4321deg);
            rx:15.8823px;
            ry:3.4401px;
            opacity:1
          }
          14% {
            transform:translate(99.8337px,77px) rotate(-83.793deg);
            rx:16.0569px;
            ry:3.3055px;
            opacity:1
          }
          14.5% {
            transform:translate(100.7189px,77px) rotate(-84.1432deg);
            rx:16.2252px;
            ry:3.1684px;
            opacity:1
          }
          15% {
            transform:translate(101.5677px,77px) rotate(-84.4828deg);
            rx:16.3869px;
            ry:3.0292px;
            opacity:1
          }
          15.5% {
            transform:translate(102.3777px,77px) rotate(-84.8121deg);
            rx:16.5412px;
            ry:2.8883px;
            opacity:1
          }
          16% {
            transform:translate(103.1469px,77px) rotate(-85.1313deg);
            rx:16.688px;
            ry:2.7461px;
            opacity:1
          }
          16.5% {
            transform:translate(103.8736px,77px) rotate(-85.4405deg);
            rx:16.8267px;
            ry:2.603px;
            opacity:1
          }
          17% {
            transform:translate(104.5564px,77px) rotate(-85.7401deg);
            rx:16.9571px;
            ry:2.4594px;
            opacity:1
          }
          17.5% {
            transform:translate(105.1944px,77px) rotate(-86.0301deg);
            rx:17.0791px;
            ry:2.3158px;
            opacity:1
          }
          18% {
            transform:translate(105.7872px,77px) rotate(-86.3108deg);
            rx:17.1925px;
            ry:2.1726px;
            opacity:1
          }
          18.5% {
            transform:translate(106.3344px,77px) rotate(-86.5822deg);
            rx:17.2972px;
            ry:2.0304px;
            opacity:1
          }
          19% {
            transform:translate(106.8362px,77px) rotate(-86.8445deg);
            rx:17.3933px;
            ry:1.8894px;
            opacity:1
          }
          19.5% {
            transform:translate(107.2933px,77px) rotate(-87.0976deg);
            rx:17.4809px;
            ry:1.7503px;
            opacity:1
          }
          20% {
            transform:translate(107.7064px,77px) rotate(-87.3417deg);
            rx:17.56px;
            ry:1.6134px;
            opacity:1
          }
          20.5% {
            transform:translate(108.0767px,77px) rotate(-87.5766deg);
            rx:17.631px;
            ry:1.4792px;
            opacity:1
          }
          21% {
            transform:translate(108.4059px,77px) rotate(-87.8023deg);
            rx:17.6941px;
            ry:1.3482px;
            opacity:1
          }
          21.5% {
            transform:translate(108.6955px,77px) rotate(-88.0188deg);
            rx:17.7497px;
            ry:1.2207px;
            opacity:1
          }
          22% {
            transform:translate(108.9477px,77px) rotate(-88.2259deg);
            rx:17.798px;
            ry:1.0973px;
            opacity:1
          }
          22.5% {
            transform:translate(109.1646px,77px) rotate(-88.4234deg);
            rx:17.8397px;
            ry:0.9783px;
            opacity:1
          }
          23% {
            transform:translate(109.3489px,77px) rotate(-88.6111deg);
            rx:17.875px;
            ry:0.8643px;
            opacity:1
          }
          23.5% {
            transform:translate(109.5029px,77px) rotate(-88.7887deg);
            rx:17.9046px;
            ry:0.7555px;
            opacity:1
          }
          24% {
            transform:translate(109.6296px,77px) rotate(-88.9559deg);
            rx:17.9289px;
            ry:0.6524px;
            opacity:1
          }
          24.5% {
            transform:translate(109.7317px,77px) rotate(-89.1124deg);
            rx:17.9485px;
            ry:0.5555px;
            opacity:1
          }
          25% {
            transform:translate(109.812px,77px) rotate(-89.2578deg);
            rx:17.9639px;
            ry:0.4651px;
            opacity:1
          }
          25.5% {
            transform:translate(109.8736px,77px) rotate(-89.3917deg);
            rx:17.9757px;
            ry:0.3815px;
            opacity:1
          }
          26% {
            transform:translate(109.9191px,77px) rotate(-89.5137deg);
            rx:17.9845px;
            ry:0.3052px;
            opacity:1
          }
          26.5% {
            transform:translate(109.9514px,77px) rotate(-89.6232deg);
            rx:17.9907px;
            ry:0.2366px;
            opacity:1
          }
          27% {
            transform:translate(109.9731px,77px) rotate(-89.7199deg);
            rx:17.9948px;
            ry:0.1759px;
            opacity:1
          }
          27.5% {
            transform:translate(109.9867px,77px) rotate(-89.8032deg);
            rx:17.9975px;
            ry:0.1236px;
            opacity:1
          }
          28% {
            transform:translate(109.9944px,77px) rotate(-89.8726deg);
            rx:17.9989px;
            ry:0.0801px;
            opacity:1
          }
          28.5% {
            transform:translate(109.9982px,77px) rotate(-89.9275deg);
            rx:17.9997px;
            ry:0.0456px;
            opacity:1
          }
          29% {
            transform:translate(109.9996px,77px) rotate(-89.9674deg);
            rx:17.9999px;
            ry:0.0205px;
            opacity:1
          }
          29.5% {
            transform:translate(110px,77px) rotate(-89.9918deg);
            rx:18px;
            ry:0.0052px;
            opacity:1
          }
          30% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          30.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          31% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          31.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          32% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          32.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          33% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          33.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          34% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          34.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          35% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          35.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          36% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          36.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          37% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          37.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          38% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          38.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          39% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          39.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          40% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          40.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          41% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          41.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          42% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          42.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          43% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          43.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          44% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          44.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          45% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          45.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          46% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          46.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          47% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          47.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          48% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          48.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          49% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          49.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          50% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          50.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          51% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          51.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          52% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          52.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          53% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          53.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          54% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          54.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          55% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          55.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          56% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          56.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          57% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          57.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          58% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          58.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          59% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          59.5% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          60% {
            transform:translate(110px,77px) rotate(-90deg);
            rx:18px;
            ry:0px;
            opacity:0
          }
          60.5% {
            transform:translate(110px,77px) rotate(-89.9918deg);
            rx:18px;
            ry:0.0052px;
            opacity:1
          }
          61% {
            transform:translate(109.9996px,77px) rotate(-89.9674deg);
            rx:17.9999px;
            ry:0.0205px;
            opacity:1
          }
          61.5% {
            transform:translate(109.9982px,77px) rotate(-89.9275deg);
            rx:17.9997px;
            ry:0.0456px;
            opacity:1
          }
          62% {
            transform:translate(109.9944px,77px) rotate(-89.8726deg);
            rx:17.9989px;
            ry:0.0801px;
            opacity:1
          }
          62.5% {
            transform:translate(109.9867px,77px) rotate(-89.8032deg);
            rx:17.9975px;
            ry:0.1236px;
            opacity:1
          }
          63% {
            transform:translate(109.9731px,77px) rotate(-89.7199deg);
            rx:17.9948px;
            ry:0.1759px;
            opacity:1
          }
          63.5% {
            transform:translate(109.9514px,77px) rotate(-89.6232deg);
            rx:17.9907px;
            ry:0.2366px;
            opacity:1
          }
          64% {
            transform:translate(109.9191px,77px) rotate(-89.5137deg);
            rx:17.9845px;
            ry:0.3052px;
            opacity:1
          }
          64.5% {
            transform:translate(109.8736px,77px) rotate(-89.3917deg);
            rx:17.9757px;
            ry:0.3815px;
            opacity:1
          }
          65% {
            transform:translate(109.812px,77px) rotate(-89.2578deg);
            rx:17.9639px;
            ry:0.4651px;
            opacity:1
          }
          65.5% {
            transform:translate(109.7317px,77px) rotate(-89.1124deg);
            rx:17.9485px;
            ry:0.5555px;
            opacity:1
          }
          66% {
            transform:translate(109.6296px,77px) rotate(-88.9559deg);
            rx:17.9289px;
            ry:0.6524px;
            opacity:1
          }
          66.5% {
            transform:translate(109.5029px,77px) rotate(-88.7887deg);
            rx:17.9046px;
            ry:0.7555px;
            opacity:1
          }
          67% {
            transform:translate(109.3489px,77px) rotate(-88.6111deg);
            rx:17.875px;
            ry:0.8643px;
            opacity:1
          }
          67.5% {
            transform:translate(109.1646px,77px) rotate(-88.4234deg);
            rx:17.8397px;
            ry:0.9783px;
            opacity:1
          }
          68% {
            transform:translate(108.9477px,77px) rotate(-88.2259deg);
            rx:17.798px;
            ry:1.0973px;
            opacity:1
          }
          68.5% {
            transform:translate(108.6955px,77px) rotate(-88.0188deg);
            rx:17.7497px;
            ry:1.2207px;
            opacity:1
          }
          69% {
            transform:translate(108.4059px,77px) rotate(-87.8023deg);
            rx:17.6941px;
            ry:1.3482px;
            opacity:1
          }
          69.5% {
            transform:translate(108.0767px,77px) rotate(-87.5766deg);
            rx:17.631px;
            ry:1.4792px;
            opacity:1
          }
          70% {
            transform:translate(107.7064px,77px) rotate(-87.3417deg);
            rx:17.56px;
            ry:1.6134px;
            opacity:1
          }
          70.5% {
            transform:translate(107.2933px,77px) rotate(-87.0976deg);
            rx:17.4809px;
            ry:1.7503px;
            opacity:1
          }
          71% {
            transform:translate(106.8362px,77px) rotate(-86.8445deg);
            rx:17.3933px;
            ry:1.8894px;
            opacity:1
          }
          71.5% {
            transform:translate(106.3344px,77px) rotate(-86.5822deg);
            rx:17.2972px;
            ry:2.0304px;
            opacity:1
          }
          72% {
            transform:translate(105.7872px,77px) rotate(-86.3108deg);
            rx:17.1925px;
            ry:2.1726px;
            opacity:1
          }
          72.5% {
            transform:translate(105.1944px,77px) rotate(-86.0301deg);
            rx:17.0791px;
            ry:2.3158px;
            opacity:1
          }
          73% {
            transform:translate(104.5564px,77px) rotate(-85.7401deg);
            rx:16.9571px;
            ry:2.4594px;
            opacity:1
          }
          73.5% {
            transform:translate(103.8736px,77px) rotate(-85.4405deg);
            rx:16.8267px;
            ry:2.603px;
            opacity:1
          }
          74% {
            transform:translate(103.1469px,77px) rotate(-85.1313deg);
            rx:16.688px;
            ry:2.7461px;
            opacity:1
          }
          74.5% {
            transform:translate(102.3777px,77px) rotate(-84.8121deg);
            rx:16.5412px;
            ry:2.8883px;
            opacity:1
          }
          75% {
            transform:translate(101.5677px,77px) rotate(-84.4828deg);
            rx:16.3869px;
            ry:3.0292px;
            opacity:1
          }
          75.5% {
            transform:translate(100.7189px,77px) rotate(-84.1432deg);
            rx:16.2252px;
            ry:3.1684px;
            opacity:1
          }
          76% {
            transform:translate(99.8337px,77px) rotate(-83.793deg);
            rx:16.0569px;
            ry:3.3055px;
            opacity:1
          }
          76.5% {
            transform:translate(98.9149px,77px) rotate(-83.4321deg);
            rx:15.8823px;
            ry:3.4401px;
            opacity:1
          }
          77% {
            transform:translate(97.9655px,77px) rotate(-83.0602deg);
            rx:15.7022px;
            ry:3.5718px;
            opacity:1
          }
          77.5% {
            transform:translate(96.9892px,77px) rotate(-82.6772deg);
            rx:15.5172px;
            ry:3.7003px;
            opacity:1
          }
          78% {
            transform:translate(95.9895px,77px) rotate(-82.283deg);
            rx:15.328px;
            ry:3.8252px;
            opacity:1
          }
          78.5% {
            transform:translate(94.9706px,77px) rotate(-81.8775deg);
            rx:15.1356px;
            ry:3.9463px;
            opacity:1
          }
          79% {
            transform:translate(93.9366px,77px) rotate(-81.4609deg);
            rx:14.9406px;
            ry:4.0632px;
            opacity:1
          }
          79.5% {
            transform:translate(92.8922px,77px) rotate(-81.0334deg);
            rx:14.7441px;
            ry:4.1757px;
            opacity:1
          }
          80% {
            transform:translate(91.8422px,77px) rotate(-80.5952deg);
            rx:14.5469px;
            ry:4.2836px;
            opacity:1
          }
          80.5% {
            transform:translate(90.7914px,77px) rotate(-80.147deg);
            rx:14.35px;
            ry:4.3866px;
            opacity:1
          }
          81% {
            transform:translate(89.745px,77px) rotate(-79.6895deg);
            rx:14.1544px;
            ry:4.4846px;
            opacity:1
          }
          81.5% {
            transform:translate(88.7083px,77px) rotate(-79.2239deg);
            rx:13.9612px;
            ry:4.5773px;
            opacity:1
          }
          82% {
            transform:translate(87.6867px,77px) rotate(-78.7515deg);
            rx:13.7713px;
            ry:4.6648px;
            opacity:1
          }
          82.5% {
            transform:translate(86.6856px,77px) rotate(-78.2741deg);
            rx:13.5857px;
            ry:4.7468px;
            opacity:1
          }
          83% {
            transform:translate(85.7106px,77px) rotate(-77.794deg);
            rx:13.4056px;
            ry:4.8232px;
            opacity:1
          }
          83.5% {
            transform:translate(84.7674px,77px) rotate(-77.3138deg);
            rx:13.2318px;
            ry:4.8942px;
            opacity:1
          }
          84% {
            transform:translate(83.8614px,77px) rotate(-76.8368deg);
            rx:13.0655px;
            ry:4.9595px;
            opacity:1
          }
          84.5% {
            transform:translate(82.9983px,77px) rotate(-76.3666deg);
            rx:12.9077px;
            ry:5.0193px;
            opacity:1
          }
          85% {
            transform:translate(82.1836px,77px) rotate(-75.9078deg);
            rx:12.7592px;
            ry:5.0735px;
            opacity:1
          }
          85.5% {
            transform:translate(81.4229px,77px) rotate(-75.465deg);
            rx:12.6211px;
            ry:5.1222px;
            opacity:1
          }
          86% {
            transform:translate(80.7216px,77px) rotate(-75.0438deg);
            rx:12.4942px;
            ry:5.1656px;
            opacity:1
          }
          86.5% {
            transform:translate(80.0849px,77px) rotate(-74.6499deg);
            rx:12.3794px;
            ry:5.2036px;
            opacity:1
          }
          87% {
            transform:translate(79.5181px,77px) rotate(-74.2895deg);
            rx:12.2775px;
            ry:5.2363px;
            opacity:1
          }
          87.5% {
            transform:translate(79.0261px,77px) rotate(-73.9688deg);
            rx:12.1894px;
            ry:5.2639px;
            opacity:1
          }
          88% {
            transform:translate(78.6138px,77px) rotate(-73.6943deg);
            rx:12.1158px;
            ry:5.2865px;
            opacity:1
          }
          88.5% {
            transform:translate(78.2859px,77px) rotate(-73.472deg);
            rx:12.0573px;
            ry:5.3041px;
            opacity:1
          }
          89% {
            transform:translate(78.0467px,77px) rotate(-73.3075deg);
            rx:12.0148px;
            ry:5.3167px;
            opacity:1
          }
          89.5% {
            transform:translate(77.9005px,77px) rotate(-73.206deg);
            rx:11.9888px;
            ry:5.3243px;
            opacity:1
          }
          90% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          90.5% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          91% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          91.5% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          92% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          92.5% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          93% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          93.5% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          94% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          94.5% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          95% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          95.5% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          96% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          96.5% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          97% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          97.5% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          98% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          98.5% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          99% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          99.5% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
            opacity:1
          }
          100% {
            transform:translate(77.8509px,77px) rotate(-73.1715deg);
            rx:11.98px;
            ry:5.3268px;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Kinematic Singularity">
        <path class="ink muted" d="M12 83H28M20 77V83"/>
        <g transform="translate(20 77)">
          <g class="shoulder">
            <path class="ink" style="stroke-width:4" d="M0 0H45"/>
            <circle class="warm" r="4"/>
            <g transform="translate(45 0)">
              <g class="elbow">
                <path class="ink" style="stroke-width:4" d="M0 0H45"/>
                <circle class="warm" r="4"/>
                <circle class="solid" cx="45" cy="0" r="3"/>
              </g>
            </g>
          </g>
        </g>
        <ellipse class="ink cool ellipse" style="fill:none" cx="0" cy="0" rx="18" ry="1"/>
        <g class="singular">
          <path class="ink cool" style="fill:none" d="M110 59V95m-3-4 3 4 3-4M107 63 110 59 113 63"/>
          <path class="ink rose" style="fill:none" d="M110 77H127m-3-3 3 3-3 3M124 70 130 76M130 70 124 76"/>
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

if (!customElements.get("concept-kinematic-singularity")) {
  customElements.define("concept-kinematic-singularity", ConceptKinematicSingularity);
}
