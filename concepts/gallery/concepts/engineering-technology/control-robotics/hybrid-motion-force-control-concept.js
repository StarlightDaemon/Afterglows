// Hybrid Motion-Force Control. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptHybridMotionForceControl extends HTMLElement {
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
          transform:rotate(12.8663deg);
          animation:shoulder 10s linear infinite
        }
        @keyframes shoulder {
          0% {
            transform:rotate(9.5306deg)
          }
          0.5% {
            transform:rotate(9.5864deg)
          }
          1% {
            transform:rotate(9.7459deg)
          }
          1.5% {
            transform:rotate(9.9975deg)
          }
          2% {
            transform:rotate(10.3291deg)
          }
          2.5% {
            transform:rotate(10.7289deg)
          }
          3% {
            transform:rotate(11.1851deg)
          }
          3.5% {
            transform:rotate(11.686deg)
          }
          4% {
            transform:rotate(12.2198deg)
          }
          4.5% {
            transform:rotate(12.7751deg)
          }
          5% {
            transform:rotate(13.3406deg)
          }
          5.5% {
            transform:rotate(13.9048deg)
          }
          6% {
            transform:rotate(14.4567deg)
          }
          6.5% {
            transform:rotate(14.9851deg)
          }
          7% {
            transform:rotate(15.479deg)
          }
          7.5% {
            transform:rotate(15.9274deg)
          }
          8% {
            transform:rotate(16.3191deg)
          }
          8.5% {
            transform:rotate(16.6431deg)
          }
          9% {
            transform:rotate(16.8884deg)
          }
          9.5% {
            transform:rotate(17.0437deg)
          }
          10% {
            transform:rotate(17.098deg)
          }
          10.5% {
            transform:rotate(17.0753deg)
          }
          11% {
            transform:rotate(17.0084deg)
          }
          11.5% {
            transform:rotate(16.8994deg)
          }
          12% {
            transform:rotate(16.7511deg)
          }
          12.5% {
            transform:rotate(16.566deg)
          }
          13% {
            transform:rotate(16.3475deg)
          }
          13.5% {
            transform:rotate(16.099deg)
          }
          14% {
            transform:rotate(15.8238deg)
          }
          14.5% {
            transform:rotate(15.5259deg)
          }
          15% {
            transform:rotate(15.2091deg)
          }
          15.5% {
            transform:rotate(14.8772deg)
          }
          16% {
            transform:rotate(14.5343deg)
          }
          16.5% {
            transform:rotate(14.1843deg)
          }
          17% {
            transform:rotate(13.8312deg)
          }
          17.5% {
            transform:rotate(13.479deg)
          }
          18% {
            transform:rotate(13.1314deg)
          }
          18.5% {
            transform:rotate(12.7921deg)
          }
          19% {
            transform:rotate(12.4647deg)
          }
          19.5% {
            transform:rotate(12.1526deg)
          }
          20% {
            transform:rotate(11.8591deg)
          }
          20.5% {
            transform:rotate(11.5871deg)
          }
          21% {
            transform:rotate(11.3394deg)
          }
          21.5% {
            transform:rotate(11.1187deg)
          }
          22% {
            transform:rotate(10.9274deg)
          }
          22.5% {
            transform:rotate(10.7674deg)
          }
          23% {
            transform:rotate(10.6407deg)
          }
          23.5% {
            transform:rotate(10.549deg)
          }
          24% {
            transform:rotate(10.4936deg)
          }
          24.5% {
            transform:rotate(10.4757deg)
          }
          25% {
            transform:rotate(10.4962deg)
          }
          25.5% {
            transform:rotate(10.5559deg)
          }
          26% {
            transform:rotate(10.6552deg)
          }
          26.5% {
            transform:rotate(10.7944deg)
          }
          27% {
            transform:rotate(10.9736deg)
          }
          27.5% {
            transform:rotate(11.1927deg)
          }
          28% {
            transform:rotate(11.4512deg)
          }
          28.5% {
            transform:rotate(11.7487deg)
          }
          29% {
            transform:rotate(12.0844deg)
          }
          29.5% {
            transform:rotate(12.4573deg)
          }
          30% {
            transform:rotate(12.8663deg)
          }
          30.5% {
            transform:rotate(13.31deg)
          }
          31% {
            transform:rotate(13.7865deg)
          }
          31.5% {
            transform:rotate(14.294deg)
          }
          32% {
            transform:rotate(14.83deg)
          }
          32.5% {
            transform:rotate(15.3919deg)
          }
          33% {
            transform:rotate(15.9764deg)
          }
          33.5% {
            transform:rotate(16.5798deg)
          }
          34% {
            transform:rotate(17.1977deg)
          }
          34.5% {
            transform:rotate(17.8248deg)
          }
          35% {
            transform:rotate(18.455deg)
          }
          35.5% {
            transform:rotate(19.081deg)
          }
          36% {
            transform:rotate(19.6943deg)
          }
          36.5% {
            transform:rotate(20.2849deg)
          }
          37% {
            transform:rotate(20.8414deg)
          }
          37.5% {
            transform:rotate(21.3507deg)
          }
          38% {
            transform:rotate(21.7987deg)
          }
          38.5% {
            transform:rotate(22.1703deg)
          }
          39% {
            transform:rotate(22.4506deg)
          }
          39.5% {
            transform:rotate(22.6263deg)
          }
          40% {
            transform:rotate(22.6865deg)
          }
          40.5% {
            transform:rotate(22.6865deg)
          }
          41% {
            transform:rotate(22.6865deg)
          }
          41.5% {
            transform:rotate(22.6865deg)
          }
          42% {
            transform:rotate(22.6865deg)
          }
          42.5% {
            transform:rotate(22.6865deg)
          }
          43% {
            transform:rotate(22.6865deg)
          }
          43.5% {
            transform:rotate(22.6865deg)
          }
          44% {
            transform:rotate(22.6865deg)
          }
          44.5% {
            transform:rotate(22.6865deg)
          }
          45% {
            transform:rotate(22.6865deg)
          }
          45.5% {
            transform:rotate(22.6865deg)
          }
          46% {
            transform:rotate(22.6865deg)
          }
          46.5% {
            transform:rotate(22.6865deg)
          }
          47% {
            transform:rotate(22.6865deg)
          }
          47.5% {
            transform:rotate(22.6865deg)
          }
          48% {
            transform:rotate(22.6865deg)
          }
          48.5% {
            transform:rotate(22.6865deg)
          }
          49% {
            transform:rotate(22.6865deg)
          }
          49.5% {
            transform:rotate(22.6865deg)
          }
          50% {
            transform:rotate(22.6865deg)
          }
          50.5% {
            transform:rotate(22.6263deg)
          }
          51% {
            transform:rotate(22.4506deg)
          }
          51.5% {
            transform:rotate(22.1703deg)
          }
          52% {
            transform:rotate(21.7987deg)
          }
          52.5% {
            transform:rotate(21.3507deg)
          }
          53% {
            transform:rotate(20.8414deg)
          }
          53.5% {
            transform:rotate(20.2849deg)
          }
          54% {
            transform:rotate(19.6943deg)
          }
          54.5% {
            transform:rotate(19.081deg)
          }
          55% {
            transform:rotate(18.455deg)
          }
          55.5% {
            transform:rotate(17.8248deg)
          }
          56% {
            transform:rotate(17.1977deg)
          }
          56.5% {
            transform:rotate(16.5798deg)
          }
          57% {
            transform:rotate(15.9764deg)
          }
          57.5% {
            transform:rotate(15.3919deg)
          }
          58% {
            transform:rotate(14.83deg)
          }
          58.5% {
            transform:rotate(14.294deg)
          }
          59% {
            transform:rotate(13.7865deg)
          }
          59.5% {
            transform:rotate(13.31deg)
          }
          60% {
            transform:rotate(12.8663deg)
          }
          60.5% {
            transform:rotate(12.4573deg)
          }
          61% {
            transform:rotate(12.0844deg)
          }
          61.5% {
            transform:rotate(11.7487deg)
          }
          62% {
            transform:rotate(11.4512deg)
          }
          62.5% {
            transform:rotate(11.1927deg)
          }
          63% {
            transform:rotate(10.9736deg)
          }
          63.5% {
            transform:rotate(10.7944deg)
          }
          64% {
            transform:rotate(10.6552deg)
          }
          64.5% {
            transform:rotate(10.5559deg)
          }
          65% {
            transform:rotate(10.4962deg)
          }
          65.5% {
            transform:rotate(10.4757deg)
          }
          66% {
            transform:rotate(10.4936deg)
          }
          66.5% {
            transform:rotate(10.549deg)
          }
          67% {
            transform:rotate(10.6407deg)
          }
          67.5% {
            transform:rotate(10.7674deg)
          }
          68% {
            transform:rotate(10.9274deg)
          }
          68.5% {
            transform:rotate(11.1187deg)
          }
          69% {
            transform:rotate(11.3394deg)
          }
          69.5% {
            transform:rotate(11.5871deg)
          }
          70% {
            transform:rotate(11.8591deg)
          }
          70.5% {
            transform:rotate(12.1526deg)
          }
          71% {
            transform:rotate(12.4647deg)
          }
          71.5% {
            transform:rotate(12.7921deg)
          }
          72% {
            transform:rotate(13.1314deg)
          }
          72.5% {
            transform:rotate(13.479deg)
          }
          73% {
            transform:rotate(13.8312deg)
          }
          73.5% {
            transform:rotate(14.1843deg)
          }
          74% {
            transform:rotate(14.5343deg)
          }
          74.5% {
            transform:rotate(14.8772deg)
          }
          75% {
            transform:rotate(15.2091deg)
          }
          75.5% {
            transform:rotate(15.5259deg)
          }
          76% {
            transform:rotate(15.8238deg)
          }
          76.5% {
            transform:rotate(16.099deg)
          }
          77% {
            transform:rotate(16.3475deg)
          }
          77.5% {
            transform:rotate(16.566deg)
          }
          78% {
            transform:rotate(16.7511deg)
          }
          78.5% {
            transform:rotate(16.8994deg)
          }
          79% {
            transform:rotate(17.0084deg)
          }
          79.5% {
            transform:rotate(17.0753deg)
          }
          80% {
            transform:rotate(17.098deg)
          }
          80.5% {
            transform:rotate(17.098deg)
          }
          81% {
            transform:rotate(17.098deg)
          }
          81.5% {
            transform:rotate(17.098deg)
          }
          82% {
            transform:rotate(17.098deg)
          }
          82.5% {
            transform:rotate(17.098deg)
          }
          83% {
            transform:rotate(17.098deg)
          }
          83.5% {
            transform:rotate(17.098deg)
          }
          84% {
            transform:rotate(17.098deg)
          }
          84.5% {
            transform:rotate(17.098deg)
          }
          85% {
            transform:rotate(17.098deg)
          }
          85.5% {
            transform:rotate(17.098deg)
          }
          86% {
            transform:rotate(17.098deg)
          }
          86.5% {
            transform:rotate(17.098deg)
          }
          87% {
            transform:rotate(17.098deg)
          }
          87.5% {
            transform:rotate(17.098deg)
          }
          88% {
            transform:rotate(17.098deg)
          }
          88.5% {
            transform:rotate(17.098deg)
          }
          89% {
            transform:rotate(17.098deg)
          }
          89.5% {
            transform:rotate(17.098deg)
          }
          90% {
            transform:rotate(17.098deg)
          }
          90.5% {
            transform:rotate(17.0437deg)
          }
          91% {
            transform:rotate(16.8884deg)
          }
          91.5% {
            transform:rotate(16.6431deg)
          }
          92% {
            transform:rotate(16.3191deg)
          }
          92.5% {
            transform:rotate(15.9274deg)
          }
          93% {
            transform:rotate(15.479deg)
          }
          93.5% {
            transform:rotate(14.9851deg)
          }
          94% {
            transform:rotate(14.4567deg)
          }
          94.5% {
            transform:rotate(13.9048deg)
          }
          95% {
            transform:rotate(13.3406deg)
          }
          95.5% {
            transform:rotate(12.7751deg)
          }
          96% {
            transform:rotate(12.2198deg)
          }
          96.5% {
            transform:rotate(11.686deg)
          }
          97% {
            transform:rotate(11.1851deg)
          }
          97.5% {
            transform:rotate(10.7289deg)
          }
          98% {
            transform:rotate(10.3291deg)
          }
          98.5% {
            transform:rotate(9.9975deg)
          }
          99% {
            transform:rotate(9.7459deg)
          }
          99.5% {
            transform:rotate(9.5864deg)
          }
          100% {
            transform:rotate(9.5306deg)
          }
        }
        .elbow {
          transform:rotate(60.2277deg);
          animation:elbow 10s linear infinite
        }
        @keyframes elbow {
          0% {
            transform:rotate(110.7763deg)
          }
          0.5% {
            transform:rotate(110.7092deg)
          }
          1% {
            transform:rotate(110.5168deg)
          }
          1.5% {
            transform:rotate(110.2125deg)
          }
          2% {
            transform:rotate(109.8093deg)
          }
          2.5% {
            transform:rotate(109.3201deg)
          }
          3% {
            transform:rotate(108.758deg)
          }
          3.5% {
            transform:rotate(108.136deg)
          }
          4% {
            transform:rotate(107.4675deg)
          }
          4.5% {
            transform:rotate(106.766deg)
          }
          5% {
            transform:rotate(106.0454deg)
          }
          5.5% {
            transform:rotate(105.3199deg)
          }
          6% {
            transform:rotate(104.6043deg)
          }
          6.5% {
            transform:rotate(103.9135deg)
          }
          7% {
            transform:rotate(103.263deg)
          }
          7.5% {
            transform:rotate(102.6683deg)
          }
          8% {
            transform:rotate(102.1457deg)
          }
          8.5% {
            transform:rotate(101.7111deg)
          }
          9% {
            transform:rotate(101.3808deg)
          }
          9.5% {
            transform:rotate(101.1711deg)
          }
          10% {
            transform:rotate(101.0977deg)
          }
          10.5% {
            transform:rotate(101.0718deg)
          }
          11% {
            transform:rotate(100.9949deg)
          }
          11.5% {
            transform:rotate(100.8682deg)
          }
          12% {
            transform:rotate(100.6924deg)
          }
          12.5% {
            transform:rotate(100.4678deg)
          }
          13% {
            transform:rotate(100.1945deg)
          }
          13.5% {
            transform:rotate(99.8725deg)
          }
          14% {
            transform:rotate(99.5012deg)
          }
          14.5% {
            transform:rotate(99.0803deg)
          }
          15% {
            transform:rotate(98.6092deg)
          }
          15.5% {
            transform:rotate(98.0872deg)
          }
          16% {
            transform:rotate(97.5137deg)
          }
          16.5% {
            transform:rotate(96.8878deg)
          }
          17% {
            transform:rotate(96.2089deg)
          }
          17.5% {
            transform:rotate(95.4765deg)
          }
          18% {
            transform:rotate(94.6898deg)
          }
          18.5% {
            transform:rotate(93.8485deg)
          }
          19% {
            transform:rotate(92.9521deg)
          }
          19.5% {
            transform:rotate(92.0004deg)
          }
          20% {
            transform:rotate(90.9933deg)
          }
          20.5% {
            transform:rotate(89.9306deg)
          }
          21% {
            transform:rotate(88.8127deg)
          }
          21.5% {
            transform:rotate(87.6397deg)
          }
          22% {
            transform:rotate(86.412deg)
          }
          22.5% {
            transform:rotate(85.1302deg)
          }
          23% {
            transform:rotate(83.7949deg)
          }
          23.5% {
            transform:rotate(82.4071deg)
          }
          24% {
            transform:rotate(80.9677deg)
          }
          24.5% {
            transform:rotate(79.4778deg)
          }
          25% {
            transform:rotate(77.9386deg)
          }
          25.5% {
            transform:rotate(76.3516deg)
          }
          26% {
            transform:rotate(74.7183deg)
          }
          26.5% {
            transform:rotate(73.0405deg)
          }
          27% {
            transform:rotate(71.3199deg)
          }
          27.5% {
            transform:rotate(69.5586deg)
          }
          28% {
            transform:rotate(67.7589deg)
          }
          28.5% {
            transform:rotate(65.9231deg)
          }
          29% {
            transform:rotate(64.054deg)
          }
          29.5% {
            transform:rotate(62.1544deg)
          }
          30% {
            transform:rotate(60.2277deg)
          }
          30.5% {
            transform:rotate(58.2775deg)
          }
          31% {
            transform:rotate(56.3079deg)
          }
          31.5% {
            transform:rotate(54.3235deg)
          }
          32% {
            transform:rotate(52.3295deg)
          }
          32.5% {
            transform:rotate(50.332deg)
          }
          33% {
            transform:rotate(48.338deg)
          }
          33.5% {
            transform:rotate(46.3555deg)
          }
          34% {
            transform:rotate(44.3941deg)
          }
          34.5% {
            transform:rotate(42.4647deg)
          }
          35% {
            transform:rotate(40.5804deg)
          }
          35.5% {
            transform:rotate(38.7568deg)
          }
          36% {
            transform:rotate(37.0117deg)
          }
          36.5% {
            transform:rotate(35.3663deg)
          }
          37% {
            transform:rotate(33.845deg)
          }
          37.5% {
            transform:rotate(32.4752deg)
          }
          38% {
            transform:rotate(31.2872deg)
          }
          38.5% {
            transform:rotate(30.313deg)
          }
          39% {
            transform:rotate(29.5845deg)
          }
          39.5% {
            transform:rotate(29.1309deg)
          }
          40% {
            transform:rotate(28.9757deg)
          }
          40.5% {
            transform:rotate(28.9757deg)
          }
          41% {
            transform:rotate(28.9757deg)
          }
          41.5% {
            transform:rotate(28.9757deg)
          }
          42% {
            transform:rotate(28.9757deg)
          }
          42.5% {
            transform:rotate(28.9757deg)
          }
          43% {
            transform:rotate(28.9757deg)
          }
          43.5% {
            transform:rotate(28.9757deg)
          }
          44% {
            transform:rotate(28.9757deg)
          }
          44.5% {
            transform:rotate(28.9757deg)
          }
          45% {
            transform:rotate(28.9757deg)
          }
          45.5% {
            transform:rotate(28.9757deg)
          }
          46% {
            transform:rotate(28.9757deg)
          }
          46.5% {
            transform:rotate(28.9757deg)
          }
          47% {
            transform:rotate(28.9757deg)
          }
          47.5% {
            transform:rotate(28.9757deg)
          }
          48% {
            transform:rotate(28.9757deg)
          }
          48.5% {
            transform:rotate(28.9757deg)
          }
          49% {
            transform:rotate(28.9757deg)
          }
          49.5% {
            transform:rotate(28.9757deg)
          }
          50% {
            transform:rotate(28.9757deg)
          }
          50.5% {
            transform:rotate(29.1309deg)
          }
          51% {
            transform:rotate(29.5845deg)
          }
          51.5% {
            transform:rotate(30.313deg)
          }
          52% {
            transform:rotate(31.2872deg)
          }
          52.5% {
            transform:rotate(32.4752deg)
          }
          53% {
            transform:rotate(33.845deg)
          }
          53.5% {
            transform:rotate(35.3663deg)
          }
          54% {
            transform:rotate(37.0117deg)
          }
          54.5% {
            transform:rotate(38.7568deg)
          }
          55% {
            transform:rotate(40.5804deg)
          }
          55.5% {
            transform:rotate(42.4647deg)
          }
          56% {
            transform:rotate(44.3941deg)
          }
          56.5% {
            transform:rotate(46.3555deg)
          }
          57% {
            transform:rotate(48.338deg)
          }
          57.5% {
            transform:rotate(50.332deg)
          }
          58% {
            transform:rotate(52.3295deg)
          }
          58.5% {
            transform:rotate(54.3235deg)
          }
          59% {
            transform:rotate(56.3079deg)
          }
          59.5% {
            transform:rotate(58.2775deg)
          }
          60% {
            transform:rotate(60.2277deg)
          }
          60.5% {
            transform:rotate(62.1544deg)
          }
          61% {
            transform:rotate(64.054deg)
          }
          61.5% {
            transform:rotate(65.9231deg)
          }
          62% {
            transform:rotate(67.7589deg)
          }
          62.5% {
            transform:rotate(69.5586deg)
          }
          63% {
            transform:rotate(71.3199deg)
          }
          63.5% {
            transform:rotate(73.0405deg)
          }
          64% {
            transform:rotate(74.7183deg)
          }
          64.5% {
            transform:rotate(76.3516deg)
          }
          65% {
            transform:rotate(77.9386deg)
          }
          65.5% {
            transform:rotate(79.4778deg)
          }
          66% {
            transform:rotate(80.9677deg)
          }
          66.5% {
            transform:rotate(82.4071deg)
          }
          67% {
            transform:rotate(83.7949deg)
          }
          67.5% {
            transform:rotate(85.1302deg)
          }
          68% {
            transform:rotate(86.412deg)
          }
          68.5% {
            transform:rotate(87.6397deg)
          }
          69% {
            transform:rotate(88.8127deg)
          }
          69.5% {
            transform:rotate(89.9306deg)
          }
          70% {
            transform:rotate(90.9933deg)
          }
          70.5% {
            transform:rotate(92.0004deg)
          }
          71% {
            transform:rotate(92.9521deg)
          }
          71.5% {
            transform:rotate(93.8485deg)
          }
          72% {
            transform:rotate(94.6898deg)
          }
          72.5% {
            transform:rotate(95.4765deg)
          }
          73% {
            transform:rotate(96.2089deg)
          }
          73.5% {
            transform:rotate(96.8878deg)
          }
          74% {
            transform:rotate(97.5137deg)
          }
          74.5% {
            transform:rotate(98.0872deg)
          }
          75% {
            transform:rotate(98.6092deg)
          }
          75.5% {
            transform:rotate(99.0803deg)
          }
          76% {
            transform:rotate(99.5012deg)
          }
          76.5% {
            transform:rotate(99.8725deg)
          }
          77% {
            transform:rotate(100.1945deg)
          }
          77.5% {
            transform:rotate(100.4678deg)
          }
          78% {
            transform:rotate(100.6924deg)
          }
          78.5% {
            transform:rotate(100.8682deg)
          }
          79% {
            transform:rotate(100.9949deg)
          }
          79.5% {
            transform:rotate(101.0718deg)
          }
          80% {
            transform:rotate(101.0977deg)
          }
          80.5% {
            transform:rotate(101.0977deg)
          }
          81% {
            transform:rotate(101.0977deg)
          }
          81.5% {
            transform:rotate(101.0977deg)
          }
          82% {
            transform:rotate(101.0977deg)
          }
          82.5% {
            transform:rotate(101.0977deg)
          }
          83% {
            transform:rotate(101.0977deg)
          }
          83.5% {
            transform:rotate(101.0977deg)
          }
          84% {
            transform:rotate(101.0977deg)
          }
          84.5% {
            transform:rotate(101.0977deg)
          }
          85% {
            transform:rotate(101.0977deg)
          }
          85.5% {
            transform:rotate(101.0977deg)
          }
          86% {
            transform:rotate(101.0977deg)
          }
          86.5% {
            transform:rotate(101.0977deg)
          }
          87% {
            transform:rotate(101.0977deg)
          }
          87.5% {
            transform:rotate(101.0977deg)
          }
          88% {
            transform:rotate(101.0977deg)
          }
          88.5% {
            transform:rotate(101.0977deg)
          }
          89% {
            transform:rotate(101.0977deg)
          }
          89.5% {
            transform:rotate(101.0977deg)
          }
          90% {
            transform:rotate(101.0977deg)
          }
          90.5% {
            transform:rotate(101.1711deg)
          }
          91% {
            transform:rotate(101.3808deg)
          }
          91.5% {
            transform:rotate(101.7111deg)
          }
          92% {
            transform:rotate(102.1457deg)
          }
          92.5% {
            transform:rotate(102.6683deg)
          }
          93% {
            transform:rotate(103.263deg)
          }
          93.5% {
            transform:rotate(103.9135deg)
          }
          94% {
            transform:rotate(104.6043deg)
          }
          94.5% {
            transform:rotate(105.3199deg)
          }
          95% {
            transform:rotate(106.0454deg)
          }
          95.5% {
            transform:rotate(106.766deg)
          }
          96% {
            transform:rotate(107.4675deg)
          }
          96.5% {
            transform:rotate(108.136deg)
          }
          97% {
            transform:rotate(108.758deg)
          }
          97.5% {
            transform:rotate(109.3201deg)
          }
          98% {
            transform:rotate(109.8093deg)
          }
          98.5% {
            transform:rotate(110.2125deg)
          }
          99% {
            transform:rotate(110.5168deg)
          }
          99.5% {
            transform:rotate(110.7092deg)
          }
          100% {
            transform:rotate(110.7763deg)
          }
        }
        .tool {
          ;
          animation:tool 10s linear infinite
        }
        @keyframes tool {
          0% {
            x:47px;
            y:82px
          }
          0.5% {
            x:47px;
            y:82.058px
          }
          1% {
            x:47px;
            y:82.224px
          }
          1.5% {
            x:47px;
            y:82.486px
          }
          2% {
            x:47px;
            y:82.832px
          }
          2.5% {
            x:47px;
            y:83.25px
          }
          3% {
            x:47px;
            y:83.728px
          }
          3.5% {
            x:47px;
            y:84.254px
          }
          4% {
            x:47px;
            y:84.816px
          }
          4.5% {
            x:47px;
            y:85.402px
          }
          5% {
            x:47px;
            y:86px
          }
          5.5% {
            x:47px;
            y:86.598px
          }
          6% {
            x:47px;
            y:87.184px
          }
          6.5% {
            x:47px;
            y:87.746px
          }
          7% {
            x:47px;
            y:88.272px
          }
          7.5% {
            x:47px;
            y:88.75px
          }
          8% {
            x:47px;
            y:89.168px
          }
          8.5% {
            x:47px;
            y:89.514px
          }
          9% {
            x:47px;
            y:89.776px
          }
          9.5% {
            x:47px;
            y:89.942px
          }
          10% {
            x:47px;
            y:90px
          }
          10.5% {
            x:47.0453px;
            y:90px
          }
          11% {
            x:47.1793px;
            y:90px
          }
          11.5% {
            x:47.3987px;
            y:90px
          }
          12% {
            x:47.7007px;
            y:90px
          }
          12.5% {
            x:48.0822px;
            y:90px
          }
          13% {
            x:48.54px;
            y:90px
          }
          13.5% {
            x:49.0712px;
            y:90px
          }
          14% {
            x:49.6726px;
            y:90px
          }
          14.5% {
            x:50.3413px;
            y:90px
          }
          15% {
            x:51.0741px;
            y:90px
          }
          15.5% {
            x:51.868px;
            y:90px
          }
          16% {
            x:52.72px;
            y:90px
          }
          16.5% {
            x:53.627px;
            y:90px
          }
          17% {
            x:54.5859px;
            y:90px
          }
          17.5% {
            x:55.5938px;
            y:90px
          }
          18% {
            x:56.6474px;
            y:90px
          }
          18.5% {
            x:57.7438px;
            y:90px
          }
          19% {
            x:58.88px;
            y:90px
          }
          19.5% {
            x:60.0528px;
            y:90px
          }
          20% {
            x:61.2593px;
            y:90px
          }
          20.5% {
            x:62.4963px;
            y:90px
          }
          21% {
            x:63.7607px;
            y:90px
          }
          21.5% {
            x:65.0497px;
            y:90px
          }
          22% {
            x:66.36px;
            y:90px
          }
          22.5% {
            x:67.6887px;
            y:90px
          }
          23% {
            x:69.0326px;
            y:90px
          }
          23.5% {
            x:70.3888px;
            y:90px
          }
          24% {
            x:71.7541px;
            y:90px
          }
          24.5% {
            x:73.1255px;
            y:90px
          }
          25% {
            x:74.5px;
            y:90px
          }
          25.5% {
            x:75.8745px;
            y:90px
          }
          26% {
            x:77.2459px;
            y:90px
          }
          26.5% {
            x:78.6113px;
            y:90px
          }
          27% {
            x:79.9674px;
            y:90px
          }
          27.5% {
            x:81.3113px;
            y:90px
          }
          28% {
            x:82.64px;
            y:90px
          }
          28.5% {
            x:83.9503px;
            y:90px
          }
          29% {
            x:85.2393px;
            y:90px
          }
          29.5% {
            x:86.5037px;
            y:90px
          }
          30% {
            x:87.7407px;
            y:90px
          }
          30.5% {
            x:88.9472px;
            y:90px
          }
          31% {
            x:90.12px;
            y:90px
          }
          31.5% {
            x:91.2562px;
            y:90px
          }
          32% {
            x:92.3526px;
            y:90px
          }
          32.5% {
            x:93.4063px;
            y:90px
          }
          33% {
            x:94.4141px;
            y:90px
          }
          33.5% {
            x:95.373px;
            y:90px
          }
          34% {
            x:96.28px;
            y:90px
          }
          34.5% {
            x:97.132px;
            y:90px
          }
          35% {
            x:97.9259px;
            y:90px
          }
          35.5% {
            x:98.6587px;
            y:90px
          }
          36% {
            x:99.3274px;
            y:90px
          }
          36.5% {
            x:99.9288px;
            y:90px
          }
          37% {
            x:100.46px;
            y:90px
          }
          37.5% {
            x:100.9178px;
            y:90px
          }
          38% {
            x:101.2993px;
            y:90px
          }
          38.5% {
            x:101.6012px;
            y:90px
          }
          39% {
            x:101.8207px;
            y:90px
          }
          39.5% {
            x:101.9547px;
            y:90px
          }
          40% {
            x:102px;
            y:90px
          }
          40.5% {
            x:102px;
            y:90px
          }
          41% {
            x:102px;
            y:90px
          }
          41.5% {
            x:102px;
            y:90px
          }
          42% {
            x:102px;
            y:90px
          }
          42.5% {
            x:102px;
            y:90px
          }
          43% {
            x:102px;
            y:90px
          }
          43.5% {
            x:102px;
            y:90px
          }
          44% {
            x:102px;
            y:90px
          }
          44.5% {
            x:102px;
            y:90px
          }
          45% {
            x:102px;
            y:90px
          }
          45.5% {
            x:102px;
            y:90px
          }
          46% {
            x:102px;
            y:90px
          }
          46.5% {
            x:102px;
            y:90px
          }
          47% {
            x:102px;
            y:90px
          }
          47.5% {
            x:102px;
            y:90px
          }
          48% {
            x:102px;
            y:90px
          }
          48.5% {
            x:102px;
            y:90px
          }
          49% {
            x:102px;
            y:90px
          }
          49.5% {
            x:102px;
            y:90px
          }
          50% {
            x:102px;
            y:90px
          }
          50.5% {
            x:101.9547px;
            y:90px
          }
          51% {
            x:101.8207px;
            y:90px
          }
          51.5% {
            x:101.6012px;
            y:90px
          }
          52% {
            x:101.2993px;
            y:90px
          }
          52.5% {
            x:100.9178px;
            y:90px
          }
          53% {
            x:100.46px;
            y:90px
          }
          53.5% {
            x:99.9288px;
            y:90px
          }
          54% {
            x:99.3274px;
            y:90px
          }
          54.5% {
            x:98.6587px;
            y:90px
          }
          55% {
            x:97.9259px;
            y:90px
          }
          55.5% {
            x:97.132px;
            y:90px
          }
          56% {
            x:96.28px;
            y:90px
          }
          56.5% {
            x:95.373px;
            y:90px
          }
          57% {
            x:94.4141px;
            y:90px
          }
          57.5% {
            x:93.4063px;
            y:90px
          }
          58% {
            x:92.3526px;
            y:90px
          }
          58.5% {
            x:91.2562px;
            y:90px
          }
          59% {
            x:90.12px;
            y:90px
          }
          59.5% {
            x:88.9472px;
            y:90px
          }
          60% {
            x:87.7407px;
            y:90px
          }
          60.5% {
            x:86.5037px;
            y:90px
          }
          61% {
            x:85.2393px;
            y:90px
          }
          61.5% {
            x:83.9503px;
            y:90px
          }
          62% {
            x:82.64px;
            y:90px
          }
          62.5% {
            x:81.3113px;
            y:90px
          }
          63% {
            x:79.9674px;
            y:90px
          }
          63.5% {
            x:78.6112px;
            y:90px
          }
          64% {
            x:77.2459px;
            y:90px
          }
          64.5% {
            x:75.8745px;
            y:90px
          }
          65% {
            x:74.5px;
            y:90px
          }
          65.5% {
            x:73.1255px;
            y:90px
          }
          66% {
            x:71.7541px;
            y:90px
          }
          66.5% {
            x:70.3887px;
            y:90px
          }
          67% {
            x:69.0326px;
            y:90px
          }
          67.5% {
            x:67.6887px;
            y:90px
          }
          68% {
            x:66.36px;
            y:90px
          }
          68.5% {
            x:65.0497px;
            y:90px
          }
          69% {
            x:63.7607px;
            y:90px
          }
          69.5% {
            x:62.4963px;
            y:90px
          }
          70% {
            x:61.2593px;
            y:90px
          }
          70.5% {
            x:60.0528px;
            y:90px
          }
          71% {
            x:58.88px;
            y:90px
          }
          71.5% {
            x:57.7438px;
            y:90px
          }
          72% {
            x:56.6474px;
            y:90px
          }
          72.5% {
            x:55.5938px;
            y:90px
          }
          73% {
            x:54.5859px;
            y:90px
          }
          73.5% {
            x:53.627px;
            y:90px
          }
          74% {
            x:52.72px;
            y:90px
          }
          74.5% {
            x:51.868px;
            y:90px
          }
          75% {
            x:51.0741px;
            y:90px
          }
          75.5% {
            x:50.3412px;
            y:90px
          }
          76% {
            x:49.6726px;
            y:90px
          }
          76.5% {
            x:49.0712px;
            y:90px
          }
          77% {
            x:48.54px;
            y:90px
          }
          77.5% {
            x:48.0822px;
            y:90px
          }
          78% {
            x:47.7007px;
            y:90px
          }
          78.5% {
            x:47.3987px;
            y:90px
          }
          79% {
            x:47.1793px;
            y:90px
          }
          79.5% {
            x:47.0453px;
            y:90px
          }
          80% {
            x:47px;
            y:90px
          }
          80.5% {
            x:47px;
            y:90px
          }
          81% {
            x:47px;
            y:90px
          }
          81.5% {
            x:47px;
            y:90px
          }
          82% {
            x:47px;
            y:90px
          }
          82.5% {
            x:47px;
            y:90px
          }
          83% {
            x:47px;
            y:90px
          }
          83.5% {
            x:47px;
            y:90px
          }
          84% {
            x:47px;
            y:90px
          }
          84.5% {
            x:47px;
            y:90px
          }
          85% {
            x:47px;
            y:90px
          }
          85.5% {
            x:47px;
            y:90px
          }
          86% {
            x:47px;
            y:90px
          }
          86.5% {
            x:47px;
            y:90px
          }
          87% {
            x:47px;
            y:90px
          }
          87.5% {
            x:47px;
            y:90px
          }
          88% {
            x:47px;
            y:90px
          }
          88.5% {
            x:47px;
            y:90px
          }
          89% {
            x:47px;
            y:90px
          }
          89.5% {
            x:47px;
            y:90px
          }
          90% {
            x:47px;
            y:90px
          }
          90.5% {
            x:47px;
            y:89.942px
          }
          91% {
            x:47px;
            y:89.776px
          }
          91.5% {
            x:47px;
            y:89.514px
          }
          92% {
            x:47px;
            y:89.168px
          }
          92.5% {
            x:47px;
            y:88.75px
          }
          93% {
            x:47px;
            y:88.272px
          }
          93.5% {
            x:47px;
            y:87.746px
          }
          94% {
            x:47px;
            y:87.184px
          }
          94.5% {
            x:47px;
            y:86.598px
          }
          95% {
            x:47px;
            y:86px
          }
          95.5% {
            x:47px;
            y:85.402px
          }
          96% {
            x:47px;
            y:84.816px
          }
          96.5% {
            x:47px;
            y:84.254px
          }
          97% {
            x:47px;
            y:83.728px
          }
          97.5% {
            x:47px;
            y:83.25px
          }
          98% {
            x:47px;
            y:82.832px
          }
          98.5% {
            x:47px;
            y:82.486px
          }
          99% {
            x:47px;
            y:82.224px
          }
          99.5% {
            x:47px;
            y:82.058px
          }
          100% {
            x:47px;
            y:82px
          }
        }
        .normal-force {
          ;
          animation:normal-force 10s linear infinite
        }
        @keyframes normal-force {
          0% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          0.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          1% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          1.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          2% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          2.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          3% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          3.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          4% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          4.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          5.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          6% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          6.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          7% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          7.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          8% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          8.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          9% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          9.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          10% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          10.5% {
            opacity:1;
            d:path("M67.0453 73v14m-3-3 3 3 3-3")
          }
          11% {
            opacity:1;
            d:path("M67.1793 73v14m-3-3 3 3 3-3")
          }
          11.5% {
            opacity:1;
            d:path("M67.3988 73v14m-3-3 3 3 3-3")
          }
          12% {
            opacity:1;
            d:path("M67.7007 73v14m-3-3 3 3 3-3")
          }
          12.5% {
            opacity:1;
            d:path("M68.0822 73v14m-3-3 3 3 3-3")
          }
          13% {
            opacity:1;
            d:path("M68.54 73v14m-3-3 3 3 3-3")
          }
          13.5% {
            opacity:1;
            d:path("M69.0712 73v14m-3-3 3 3 3-3")
          }
          14% {
            opacity:1;
            d:path("M69.6726 73v14m-3-3 3 3 3-3")
          }
          14.5% {
            opacity:1;
            d:path("M70.3413 73v14m-3-3 3 3 3-3")
          }
          15% {
            opacity:1;
            d:path("M71.0741 73v14m-3-3 3 3 3-3")
          }
          15.5% {
            opacity:1;
            d:path("M71.868 73v14m-3-3 3 3 3-3")
          }
          16% {
            opacity:1;
            d:path("M72.72 73v14m-3-3 3 3 3-3")
          }
          16.5% {
            opacity:1;
            d:path("M73.627 73v14m-3-3 3 3 3-3")
          }
          17% {
            opacity:1;
            d:path("M74.5859 73v14m-3-3 3 3 3-3")
          }
          17.5% {
            opacity:1;
            d:path("M75.5938 73v14m-3-3 3 3 3-3")
          }
          18% {
            opacity:1;
            d:path("M76.6474 73v14m-3-3 3 3 3-3")
          }
          18.5% {
            opacity:1;
            d:path("M77.7438 73v14m-3-3 3 3 3-3")
          }
          19% {
            opacity:1;
            d:path("M78.88 73v14m-3-3 3 3 3-3")
          }
          19.5% {
            opacity:1;
            d:path("M80.0528 73v14m-3-3 3 3 3-3")
          }
          20% {
            opacity:1;
            d:path("M81.2593 73v14m-3-3 3 3 3-3")
          }
          20.5% {
            opacity:1;
            d:path("M82.4963 73v14m-3-3 3 3 3-3")
          }
          21% {
            opacity:1;
            d:path("M83.7607 73v14m-3-3 3 3 3-3")
          }
          21.5% {
            opacity:1;
            d:path("M85.0497 73v14m-3-3 3 3 3-3")
          }
          22% {
            opacity:1;
            d:path("M86.36 73v14m-3-3 3 3 3-3")
          }
          22.5% {
            opacity:1;
            d:path("M87.6887 73v14m-3-3 3 3 3-3")
          }
          23% {
            opacity:1;
            d:path("M89.0326 73v14m-3-3 3 3 3-3")
          }
          23.5% {
            opacity:1;
            d:path("M90.3888 73v14m-3-3 3 3 3-3")
          }
          24% {
            opacity:1;
            d:path("M91.7541 73v14m-3-3 3 3 3-3")
          }
          24.5% {
            opacity:1;
            d:path("M93.1255 73v14m-3-3 3 3 3-3")
          }
          25% {
            opacity:1;
            d:path("M94.5 73v14m-3-3 3 3 3-3")
          }
          25.5% {
            opacity:1;
            d:path("M95.8745 73v14m-3-3 3 3 3-3")
          }
          26% {
            opacity:1;
            d:path("M97.2459 73v14m-3-3 3 3 3-3")
          }
          26.5% {
            opacity:1;
            d:path("M98.6113 73v14m-3-3 3 3 3-3")
          }
          27% {
            opacity:1;
            d:path("M99.9674 73v14m-3-3 3 3 3-3")
          }
          27.5% {
            opacity:1;
            d:path("M101.3113 73v14m-3-3 3 3 3-3")
          }
          28% {
            opacity:1;
            d:path("M102.64 73v14m-3-3 3 3 3-3")
          }
          28.5% {
            opacity:1;
            d:path("M103.9503 73v14m-3-3 3 3 3-3")
          }
          29% {
            opacity:1;
            d:path("M105.2393 73v14m-3-3 3 3 3-3")
          }
          29.5% {
            opacity:1;
            d:path("M106.5037 73v14m-3-3 3 3 3-3")
          }
          30% {
            opacity:1;
            d:path("M107.7407 73v14m-3-3 3 3 3-3")
          }
          30.5% {
            opacity:1;
            d:path("M108.9472 73v14m-3-3 3 3 3-3")
          }
          31% {
            opacity:1;
            d:path("M110.12 73v14m-3-3 3 3 3-3")
          }
          31.5% {
            opacity:1;
            d:path("M111.2562 73v14m-3-3 3 3 3-3")
          }
          32% {
            opacity:1;
            d:path("M112.3526 73v14m-3-3 3 3 3-3")
          }
          32.5% {
            opacity:1;
            d:path("M113.4063 73v14m-3-3 3 3 3-3")
          }
          33% {
            opacity:1;
            d:path("M114.4141 73v14m-3-3 3 3 3-3")
          }
          33.5% {
            opacity:1;
            d:path("M115.373 73v14m-3-3 3 3 3-3")
          }
          34% {
            opacity:1;
            d:path("M116.28 73v14m-3-3 3 3 3-3")
          }
          34.5% {
            opacity:1;
            d:path("M117.132 73v14m-3-3 3 3 3-3")
          }
          35% {
            opacity:1;
            d:path("M117.9259 73v14m-3-3 3 3 3-3")
          }
          35.5% {
            opacity:1;
            d:path("M118.6587 73v14m-3-3 3 3 3-3")
          }
          36% {
            opacity:1;
            d:path("M119.3274 73v14m-3-3 3 3 3-3")
          }
          36.5% {
            opacity:1;
            d:path("M119.9288 73v14m-3-3 3 3 3-3")
          }
          37% {
            opacity:1;
            d:path("M120.46 73v14m-3-3 3 3 3-3")
          }
          37.5% {
            opacity:1;
            d:path("M120.9178 73v14m-3-3 3 3 3-3")
          }
          38% {
            opacity:1;
            d:path("M121.2993 73v14m-3-3 3 3 3-3")
          }
          38.5% {
            opacity:1;
            d:path("M121.6012 73v14m-3-3 3 3 3-3")
          }
          39% {
            opacity:1;
            d:path("M121.8207 73v14m-3-3 3 3 3-3")
          }
          39.5% {
            opacity:1;
            d:path("M121.9547 73v14m-3-3 3 3 3-3")
          }
          40% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          40.5% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          41% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          41.5% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          42% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          42.5% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          43% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          43.5% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          44% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          44.5% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          45% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          45.5% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          46% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          46.5% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          47% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          47.5% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          48% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          48.5% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          49% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          49.5% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          50% {
            opacity:1;
            d:path("M122 73v14m-3-3 3 3 3-3")
          }
          50.5% {
            opacity:1;
            d:path("M121.9547 73v14m-3-3 3 3 3-3")
          }
          51% {
            opacity:1;
            d:path("M121.8207 73v14m-3-3 3 3 3-3")
          }
          51.5% {
            opacity:1;
            d:path("M121.6012 73v14m-3-3 3 3 3-3")
          }
          52% {
            opacity:1;
            d:path("M121.2993 73v14m-3-3 3 3 3-3")
          }
          52.5% {
            opacity:1;
            d:path("M120.9178 73v14m-3-3 3 3 3-3")
          }
          53% {
            opacity:1;
            d:path("M120.46 73v14m-3-3 3 3 3-3")
          }
          53.5% {
            opacity:1;
            d:path("M119.9288 73v14m-3-3 3 3 3-3")
          }
          54% {
            opacity:1;
            d:path("M119.3274 73v14m-3-3 3 3 3-3")
          }
          54.5% {
            opacity:1;
            d:path("M118.6587 73v14m-3-3 3 3 3-3")
          }
          55% {
            opacity:1;
            d:path("M117.9259 73v14m-3-3 3 3 3-3")
          }
          55.5% {
            opacity:1;
            d:path("M117.132 73v14m-3-3 3 3 3-3")
          }
          56% {
            opacity:1;
            d:path("M116.28 73v14m-3-3 3 3 3-3")
          }
          56.5% {
            opacity:1;
            d:path("M115.373 73v14m-3-3 3 3 3-3")
          }
          57% {
            opacity:1;
            d:path("M114.4141 73v14m-3-3 3 3 3-3")
          }
          57.5% {
            opacity:1;
            d:path("M113.4063 73v14m-3-3 3 3 3-3")
          }
          58% {
            opacity:1;
            d:path("M112.3526 73v14m-3-3 3 3 3-3")
          }
          58.5% {
            opacity:1;
            d:path("M111.2562 73v14m-3-3 3 3 3-3")
          }
          59% {
            opacity:1;
            d:path("M110.12 73v14m-3-3 3 3 3-3")
          }
          59.5% {
            opacity:1;
            d:path("M108.9472 73v14m-3-3 3 3 3-3")
          }
          60% {
            opacity:1;
            d:path("M107.7407 73v14m-3-3 3 3 3-3")
          }
          60.5% {
            opacity:1;
            d:path("M106.5037 73v14m-3-3 3 3 3-3")
          }
          61% {
            opacity:1;
            d:path("M105.2393 73v14m-3-3 3 3 3-3")
          }
          61.5% {
            opacity:1;
            d:path("M103.9503 73v14m-3-3 3 3 3-3")
          }
          62% {
            opacity:1;
            d:path("M102.64 73v14m-3-3 3 3 3-3")
          }
          62.5% {
            opacity:1;
            d:path("M101.3113 73v14m-3-3 3 3 3-3")
          }
          63% {
            opacity:1;
            d:path("M99.9674 73v14m-3-3 3 3 3-3")
          }
          63.5% {
            opacity:1;
            d:path("M98.6112 73v14m-3-3 3 3 3-3")
          }
          64% {
            opacity:1;
            d:path("M97.2459 73v14m-3-3 3 3 3-3")
          }
          64.5% {
            opacity:1;
            d:path("M95.8745 73v14m-3-3 3 3 3-3")
          }
          65% {
            opacity:1;
            d:path("M94.5 73v14m-3-3 3 3 3-3")
          }
          65.5% {
            opacity:1;
            d:path("M93.1255 73v14m-3-3 3 3 3-3")
          }
          66% {
            opacity:1;
            d:path("M91.7541 73v14m-3-3 3 3 3-3")
          }
          66.5% {
            opacity:1;
            d:path("M90.3887 73v14m-3-3 3 3 3-3")
          }
          67% {
            opacity:1;
            d:path("M89.0326 73v14m-3-3 3 3 3-3")
          }
          67.5% {
            opacity:1;
            d:path("M87.6887 73v14m-3-3 3 3 3-3")
          }
          68% {
            opacity:1;
            d:path("M86.36 73v14m-3-3 3 3 3-3")
          }
          68.5% {
            opacity:1;
            d:path("M85.0497 73v14m-3-3 3 3 3-3")
          }
          69% {
            opacity:1;
            d:path("M83.7607 73v14m-3-3 3 3 3-3")
          }
          69.5% {
            opacity:1;
            d:path("M82.4963 73v14m-3-3 3 3 3-3")
          }
          70% {
            opacity:1;
            d:path("M81.2593 73v14m-3-3 3 3 3-3")
          }
          70.5% {
            opacity:1;
            d:path("M80.0528 73v14m-3-3 3 3 3-3")
          }
          71% {
            opacity:1;
            d:path("M78.88 73v14m-3-3 3 3 3-3")
          }
          71.5% {
            opacity:1;
            d:path("M77.7438 73v14m-3-3 3 3 3-3")
          }
          72% {
            opacity:1;
            d:path("M76.6474 73v14m-3-3 3 3 3-3")
          }
          72.5% {
            opacity:1;
            d:path("M75.5938 73v14m-3-3 3 3 3-3")
          }
          73% {
            opacity:1;
            d:path("M74.5859 73v14m-3-3 3 3 3-3")
          }
          73.5% {
            opacity:1;
            d:path("M73.627 73v14m-3-3 3 3 3-3")
          }
          74% {
            opacity:1;
            d:path("M72.72 73v14m-3-3 3 3 3-3")
          }
          74.5% {
            opacity:1;
            d:path("M71.868 73v14m-3-3 3 3 3-3")
          }
          75% {
            opacity:1;
            d:path("M71.0741 73v14m-3-3 3 3 3-3")
          }
          75.5% {
            opacity:1;
            d:path("M70.3413 73v14m-3-3 3 3 3-3")
          }
          76% {
            opacity:1;
            d:path("M69.6726 73v14m-3-3 3 3 3-3")
          }
          76.5% {
            opacity:1;
            d:path("M69.0712 73v14m-3-3 3 3 3-3")
          }
          77% {
            opacity:1;
            d:path("M68.54 73v14m-3-3 3 3 3-3")
          }
          77.5% {
            opacity:1;
            d:path("M68.0822 73v14m-3-3 3 3 3-3")
          }
          78% {
            opacity:1;
            d:path("M67.7007 73v14m-3-3 3 3 3-3")
          }
          78.5% {
            opacity:1;
            d:path("M67.3988 73v14m-3-3 3 3 3-3")
          }
          79% {
            opacity:1;
            d:path("M67.1793 73v14m-3-3 3 3 3-3")
          }
          79.5% {
            opacity:1;
            d:path("M67.0453 73v14m-3-3 3 3 3-3")
          }
          80% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          80.5% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          81% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          81.5% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          82% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          82.5% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          83% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          83.5% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          84% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          84.5% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          85% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          85.5% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          86% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          86.5% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          87% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          87.5% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          88% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          88.5% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          89% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          89.5% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          90% {
            opacity:1;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          90.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          91% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          91.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          92% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          92.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          93% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          93.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          94% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          94.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          95% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          95.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          96% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          96.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          97% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          97.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          98% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          98.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          99% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          99.5% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
          100% {
            opacity:0;
            d:path("M67 73v14m-3-3 3 3 3-3")
          }
        }
        .tangent {
          ;
          animation:tangent 10s linear infinite
        }
        @keyframes tangent {
          0% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          0.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          1% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          1.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          2% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          2.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          3% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          3.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          4% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          4.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          5.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          6% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          6.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          7% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          7.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          8% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          8.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          9% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          9.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          10% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          10.5% {
            opacity:1;
            d:path("M53.0453 117h0.5408m-3-2 3 2 -3 2")
          }
          11% {
            opacity:1;
            d:path("M53.1793 117h1.0633m-3-2 3 2 -3 2")
          }
          11.5% {
            opacity:1;
            d:path("M53.3987 117h1.5675m-3-2 3 2 -3 2")
          }
          12% {
            opacity:1;
            d:path("M53.7007 117h2.0533m-3-2 3 2 -3 2")
          }
          12.5% {
            opacity:1;
            d:path("M54.0822 117h2.5208m-3-2 3 2 -3 2")
          }
          13% {
            opacity:1;
            d:path("M54.54 117h2.97m-3-2 3 2 -3 2")
          }
          13.5% {
            opacity:1;
            d:path("M55.0712 117h3.4008m-3-2 3 2 -3 2")
          }
          14% {
            opacity:1;
            d:path("M55.6726 117h3.8133m-3-2 3 2 -3 2")
          }
          14.5% {
            opacity:1;
            d:path("M56.3413 117h4.2075m-3-2 3 2 -3 2")
          }
          15% {
            opacity:1;
            d:path("M57.0741 117h4.5833m-3-2 3 2 -3 2")
          }
          15.5% {
            opacity:1;
            d:path("M57.868 117h4.9408m-3-2 3 2 -3 2")
          }
          16% {
            opacity:1;
            d:path("M58.72 117h5.28m-3-2 3 2 -3 2")
          }
          16.5% {
            opacity:1;
            d:path("M59.627 117h5.6008m-3-2 3 2 -3 2")
          }
          17% {
            opacity:1;
            d:path("M60.5859 117h5.9033m-3-2 3 2 -3 2")
          }
          17.5% {
            opacity:1;
            d:path("M61.5938 117h6.1875m-3-2 3 2 -3 2")
          }
          18% {
            opacity:1;
            d:path("M62.6474 117h6.4533m-3-2 3 2 -3 2")
          }
          18.5% {
            opacity:1;
            d:path("M63.7438 117h6.7008m-3-2 3 2 -3 2")
          }
          19% {
            opacity:1;
            d:path("M64.88 117h6.93m-3-2 3 2 -3 2")
          }
          19.5% {
            opacity:1;
            d:path("M66.0528 117h7.1408m-3-2 3 2 -3 2")
          }
          20% {
            opacity:1;
            d:path("M67.2593 117h7.3333m-3-2 3 2 -3 2")
          }
          20.5% {
            opacity:1;
            d:path("M68.4963 117h7.5075m-3-2 3 2 -3 2")
          }
          21% {
            opacity:1;
            d:path("M69.7607 117h7.6633m-3-2 3 2 -3 2")
          }
          21.5% {
            opacity:1;
            d:path("M71.0497 117h7.8008m-3-2 3 2 -3 2")
          }
          22% {
            opacity:1;
            d:path("M72.36 117h7.92m-3-2 3 2 -3 2")
          }
          22.5% {
            opacity:1;
            d:path("M73.6887 117h8.0208m-3-2 3 2 -3 2")
          }
          23% {
            opacity:1;
            d:path("M75.0326 117h8.1033m-3-2 3 2 -3 2")
          }
          23.5% {
            opacity:1;
            d:path("M76.3888 117h8.1675m-3-2 3 2 -3 2")
          }
          24% {
            opacity:1;
            d:path("M77.7541 117h8.2133m-3-2 3 2 -3 2")
          }
          24.5% {
            opacity:1;
            d:path("M79.1255 117h8.2408m-3-2 3 2 -3 2")
          }
          25% {
            opacity:1;
            d:path("M80.5 117h8.25m-3-2 3 2 -3 2")
          }
          25.5% {
            opacity:1;
            d:path("M81.8745 117h8.2408m-3-2 3 2 -3 2")
          }
          26% {
            opacity:1;
            d:path("M83.2459 117h8.2133m-3-2 3 2 -3 2")
          }
          26.5% {
            opacity:1;
            d:path("M84.6113 117h8.1675m-3-2 3 2 -3 2")
          }
          27% {
            opacity:1;
            d:path("M85.9674 117h8.1033m-3-2 3 2 -3 2")
          }
          27.5% {
            opacity:1;
            d:path("M87.3113 117h8.0208m-3-2 3 2 -3 2")
          }
          28% {
            opacity:1;
            d:path("M88.64 117h7.92m-3-2 3 2 -3 2")
          }
          28.5% {
            opacity:1;
            d:path("M89.9503 117h7.8008m-3-2 3 2 -3 2")
          }
          29% {
            opacity:1;
            d:path("M91.2393 117h7.6633m-3-2 3 2 -3 2")
          }
          29.5% {
            opacity:1;
            d:path("M92.5037 117h7.5075m-3-2 3 2 -3 2")
          }
          30% {
            opacity:1;
            d:path("M93.7407 117h7.3333m-3-2 3 2 -3 2")
          }
          30.5% {
            opacity:1;
            d:path("M94.9472 117h7.1408m-3-2 3 2 -3 2")
          }
          31% {
            opacity:1;
            d:path("M96.12 117h6.93m-3-2 3 2 -3 2")
          }
          31.5% {
            opacity:1;
            d:path("M97.2562 117h6.7008m-3-2 3 2 -3 2")
          }
          32% {
            opacity:1;
            d:path("M98.3526 117h6.4533m-3-2 3 2 -3 2")
          }
          32.5% {
            opacity:1;
            d:path("M99.4063 117h6.1875m-3-2 3 2 -3 2")
          }
          33% {
            opacity:1;
            d:path("M100.4141 117h5.9033m-3-2 3 2 -3 2")
          }
          33.5% {
            opacity:1;
            d:path("M101.373 117h5.6008m-3-2 3 2 -3 2")
          }
          34% {
            opacity:1;
            d:path("M102.28 117h5.28m-3-2 3 2 -3 2")
          }
          34.5% {
            opacity:1;
            d:path("M103.132 117h4.9408m-3-2 3 2 -3 2")
          }
          35% {
            opacity:1;
            d:path("M103.9259 117h4.5833m-3-2 3 2 -3 2")
          }
          35.5% {
            opacity:1;
            d:path("M104.6587 117h4.2075m-3-2 3 2 -3 2")
          }
          36% {
            opacity:1;
            d:path("M105.3274 117h3.8133m-3-2 3 2 -3 2")
          }
          36.5% {
            opacity:1;
            d:path("M105.9288 117h3.4008m-3-2 3 2 -3 2")
          }
          37% {
            opacity:1;
            d:path("M106.46 117h2.97m-3-2 3 2 -3 2")
          }
          37.5% {
            opacity:1;
            d:path("M106.9178 117h2.5208m-3-2 3 2 -3 2")
          }
          38% {
            opacity:1;
            d:path("M107.2993 117h2.0533m-3-2 3 2 -3 2")
          }
          38.5% {
            opacity:1;
            d:path("M107.6012 117h1.5675m-3-2 3 2 -3 2")
          }
          39% {
            opacity:1;
            d:path("M107.8207 117h1.0633m-3-2 3 2 -3 2")
          }
          39.5% {
            opacity:1;
            d:path("M107.9547 117h0.5408m-3-2 3 2 -3 2")
          }
          40% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          40.5% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          41% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          41.5% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          42% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          42.5% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          43% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          43.5% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          44% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          44.5% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          45% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          45.5% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          46% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          46.5% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          47% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          47.5% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          48% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          48.5% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          49% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          49.5% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          50% {
            opacity:0;
            d:path("M108 117h0m-3-2 3 2 -3 2")
          }
          50.5% {
            opacity:1;
            d:path("M107.9547 117h-0.5408m3-2 -3 2 3 2")
          }
          51% {
            opacity:1;
            d:path("M107.8207 117h-1.0633m3-2 -3 2 3 2")
          }
          51.5% {
            opacity:1;
            d:path("M107.6012 117h-1.5675m3-2 -3 2 3 2")
          }
          52% {
            opacity:1;
            d:path("M107.2993 117h-2.0533m3-2 -3 2 3 2")
          }
          52.5% {
            opacity:1;
            d:path("M106.9178 117h-2.5208m3-2 -3 2 3 2")
          }
          53% {
            opacity:1;
            d:path("M106.46 117h-2.97m3-2 -3 2 3 2")
          }
          53.5% {
            opacity:1;
            d:path("M105.9288 117h-3.4008m3-2 -3 2 3 2")
          }
          54% {
            opacity:1;
            d:path("M105.3274 117h-3.8133m3-2 -3 2 3 2")
          }
          54.5% {
            opacity:1;
            d:path("M104.6587 117h-4.2075m3-2 -3 2 3 2")
          }
          55% {
            opacity:1;
            d:path("M103.9259 117h-4.5833m3-2 -3 2 3 2")
          }
          55.5% {
            opacity:1;
            d:path("M103.132 117h-4.9408m3-2 -3 2 3 2")
          }
          56% {
            opacity:1;
            d:path("M102.28 117h-5.28m3-2 -3 2 3 2")
          }
          56.5% {
            opacity:1;
            d:path("M101.373 117h-5.6008m3-2 -3 2 3 2")
          }
          57% {
            opacity:1;
            d:path("M100.4141 117h-5.9033m3-2 -3 2 3 2")
          }
          57.5% {
            opacity:1;
            d:path("M99.4063 117h-6.1875m3-2 -3 2 3 2")
          }
          58% {
            opacity:1;
            d:path("M98.3526 117h-6.4533m3-2 -3 2 3 2")
          }
          58.5% {
            opacity:1;
            d:path("M97.2562 117h-6.7008m3-2 -3 2 3 2")
          }
          59% {
            opacity:1;
            d:path("M96.12 117h-6.93m3-2 -3 2 3 2")
          }
          59.5% {
            opacity:1;
            d:path("M94.9472 117h-7.1408m3-2 -3 2 3 2")
          }
          60% {
            opacity:1;
            d:path("M93.7407 117h-7.3333m3-2 -3 2 3 2")
          }
          60.5% {
            opacity:1;
            d:path("M92.5037 117h-7.5075m3-2 -3 2 3 2")
          }
          61% {
            opacity:1;
            d:path("M91.2393 117h-7.6633m3-2 -3 2 3 2")
          }
          61.5% {
            opacity:1;
            d:path("M89.9503 117h-7.8008m3-2 -3 2 3 2")
          }
          62% {
            opacity:1;
            d:path("M88.64 117h-7.92m3-2 -3 2 3 2")
          }
          62.5% {
            opacity:1;
            d:path("M87.3113 117h-8.0208m3-2 -3 2 3 2")
          }
          63% {
            opacity:1;
            d:path("M85.9674 117h-8.1033m3-2 -3 2 3 2")
          }
          63.5% {
            opacity:1;
            d:path("M84.6112 117h-8.1675m3-2 -3 2 3 2")
          }
          64% {
            opacity:1;
            d:path("M83.2459 117h-8.2133m3-2 -3 2 3 2")
          }
          64.5% {
            opacity:1;
            d:path("M81.8745 117h-8.2408m3-2 -3 2 3 2")
          }
          65% {
            opacity:1;
            d:path("M80.5 117h-8.25m3-2 -3 2 3 2")
          }
          65.5% {
            opacity:1;
            d:path("M79.1255 117h-8.2408m3-2 -3 2 3 2")
          }
          66% {
            opacity:1;
            d:path("M77.7541 117h-8.2133m3-2 -3 2 3 2")
          }
          66.5% {
            opacity:1;
            d:path("M76.3887 117h-8.1675m3-2 -3 2 3 2")
          }
          67% {
            opacity:1;
            d:path("M75.0326 117h-8.1033m3-2 -3 2 3 2")
          }
          67.5% {
            opacity:1;
            d:path("M73.6887 117h-8.0208m3-2 -3 2 3 2")
          }
          68% {
            opacity:1;
            d:path("M72.36 117h-7.92m3-2 -3 2 3 2")
          }
          68.5% {
            opacity:1;
            d:path("M71.0497 117h-7.8008m3-2 -3 2 3 2")
          }
          69% {
            opacity:1;
            d:path("M69.7607 117h-7.6633m3-2 -3 2 3 2")
          }
          69.5% {
            opacity:1;
            d:path("M68.4963 117h-7.5075m3-2 -3 2 3 2")
          }
          70% {
            opacity:1;
            d:path("M67.2593 117h-7.3333m3-2 -3 2 3 2")
          }
          70.5% {
            opacity:1;
            d:path("M66.0528 117h-7.1408m3-2 -3 2 3 2")
          }
          71% {
            opacity:1;
            d:path("M64.88 117h-6.93m3-2 -3 2 3 2")
          }
          71.5% {
            opacity:1;
            d:path("M63.7438 117h-6.7008m3-2 -3 2 3 2")
          }
          72% {
            opacity:1;
            d:path("M62.6474 117h-6.4533m3-2 -3 2 3 2")
          }
          72.5% {
            opacity:1;
            d:path("M61.5938 117h-6.1875m3-2 -3 2 3 2")
          }
          73% {
            opacity:1;
            d:path("M60.5859 117h-5.9033m3-2 -3 2 3 2")
          }
          73.5% {
            opacity:1;
            d:path("M59.627 117h-5.6008m3-2 -3 2 3 2")
          }
          74% {
            opacity:1;
            d:path("M58.72 117h-5.28m3-2 -3 2 3 2")
          }
          74.5% {
            opacity:1;
            d:path("M57.868 117h-4.9408m3-2 -3 2 3 2")
          }
          75% {
            opacity:1;
            d:path("M57.0741 117h-4.5833m3-2 -3 2 3 2")
          }
          75.5% {
            opacity:1;
            d:path("M56.3412 117h-4.2075m3-2 -3 2 3 2")
          }
          76% {
            opacity:1;
            d:path("M55.6726 117h-3.8133m3-2 -3 2 3 2")
          }
          76.5% {
            opacity:1;
            d:path("M55.0712 117h-3.4008m3-2 -3 2 3 2")
          }
          77% {
            opacity:1;
            d:path("M54.54 117h-2.97m3-2 -3 2 3 2")
          }
          77.5% {
            opacity:1;
            d:path("M54.0822 117h-2.5208m3-2 -3 2 3 2")
          }
          78% {
            opacity:1;
            d:path("M53.7007 117h-2.0533m3-2 -3 2 3 2")
          }
          78.5% {
            opacity:1;
            d:path("M53.3987 117h-1.5675m3-2 -3 2 3 2")
          }
          79% {
            opacity:1;
            d:path("M53.1793 117h-1.0633m3-2 -3 2 3 2")
          }
          79.5% {
            opacity:1;
            d:path("M53.0453 117h-0.5408m3-2 -3 2 3 2")
          }
          80% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          80.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          81% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          81.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          82% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          82.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          83% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          83.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          84% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          84.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          85% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          85.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          86% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          86.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          87% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          87.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          88% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          88.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          89% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          89.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          90% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          90.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          91% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          91.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          92% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          92.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          93% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          93.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          94% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          94.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          95% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          95.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          96% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          96.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          97% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          97.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          98% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          98.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          99% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          99.5% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
          }
          100% {
            opacity:0;
            d:path("M53 117h0m-3-2 3 2 -3 2")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Hybrid Motion-Force Control">
        <path class="ink muted" d="M37 96H128M42 97l-5 6M55 97l-5 6M68 97l-5 6M81 97l-5 6M94 97l-5 6M107 97l-5 6M120 97l-5 6M17 22H33M25 22V28"/>
        <g transform="translate(25 28)">
          <g class="shoulder">
            <path class="ink" style="stroke-width:4" d="M0 0H55"/>
            <circle class="warm" r="4"/>
            <g transform="translate(55 0)">
              <g class="elbow">
                <path class="ink" style="stroke-width:4" d="M0 0H52"/>
                <circle class="warm" r="4"/>
                <circle class="solid" cx="52" cy="0" r="3"/>
              </g>
            </g>
          </g>
        </g>
        <rect class="ink paper tool" x="87.741" y="90" width="12" height="6"/>
        <path class="ink rose normal-force" style="fill:none" d="M107.741 73v14m-3-3 3 3 3-3"/>
        <path class="ink cool tangent" style="fill:none" d="M93.741 117h8m-3-2 3 2-3 2"/>
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

if (!customElements.get("concept-hybrid-motion-force-control")) {
  customElements.define("concept-hybrid-motion-force-control", ConceptHybridMotionForceControl);
}
