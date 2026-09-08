// Compliant Impedance Control. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptCompliantImpedanceControl extends HTMLElement {
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
          animation:cycle 10s linear infinite
        }
        @keyframes cycle {
          0%,92% {
            opacity:1
          }
          96%,98% {
            opacity:0
          }
          100% {
            opacity:1
          }
        }
        .shoulder {
          transform:rotate(-71.2826deg);
          animation:shoulder 10s linear infinite
        }
        @keyframes shoulder {
          0% {
            transform:rotate(-51.3837deg)
          }
          0.5% {
            transform:rotate(-51.3837deg)
          }
          1% {
            transform:rotate(-51.3837deg)
          }
          1.5% {
            transform:rotate(-51.3837deg)
          }
          2% {
            transform:rotate(-51.3837deg)
          }
          2.5% {
            transform:rotate(-51.3837deg)
          }
          3% {
            transform:rotate(-51.3837deg)
          }
          3.5% {
            transform:rotate(-51.3837deg)
          }
          4% {
            transform:rotate(-51.3837deg)
          }
          4.5% {
            transform:rotate(-51.3837deg)
          }
          5% {
            transform:rotate(-51.3837deg)
          }
          5.5% {
            transform:rotate(-51.3837deg)
          }
          6% {
            transform:rotate(-51.3837deg)
          }
          6.5% {
            transform:rotate(-51.3837deg)
          }
          7% {
            transform:rotate(-51.3837deg)
          }
          7.5% {
            transform:rotate(-51.3837deg)
          }
          8% {
            transform:rotate(-51.3837deg)
          }
          8.5% {
            transform:rotate(-51.3837deg)
          }
          9% {
            transform:rotate(-51.3837deg)
          }
          9.5% {
            transform:rotate(-51.3837deg)
          }
          10% {
            transform:rotate(-51.3837deg)
          }
          10.5% {
            transform:rotate(-51.3837deg)
          }
          11% {
            transform:rotate(-51.3837deg)
          }
          11.5% {
            transform:rotate(-51.3837deg)
          }
          12% {
            transform:rotate(-51.3837deg)
          }
          12.5% {
            transform:rotate(-51.3837deg)
          }
          13% {
            transform:rotate(-51.3837deg)
          }
          13.5% {
            transform:rotate(-51.3837deg)
          }
          14% {
            transform:rotate(-51.3837deg)
          }
          14.5% {
            transform:rotate(-51.3837deg)
          }
          15% {
            transform:rotate(-51.3837deg)
          }
          15.5% {
            transform:rotate(-51.3837deg)
          }
          16% {
            transform:rotate(-51.3837deg)
          }
          16.5% {
            transform:rotate(-51.3837deg)
          }
          17% {
            transform:rotate(-51.3837deg)
          }
          17.5% {
            transform:rotate(-51.3837deg)
          }
          18% {
            transform:rotate(-51.3837deg)
          }
          18.5% {
            transform:rotate(-51.3837deg)
          }
          19% {
            transform:rotate(-51.3837deg)
          }
          19.5% {
            transform:rotate(-51.3837deg)
          }
          20% {
            transform:rotate(-51.3837deg)
          }
          20.5% {
            transform:rotate(-51.8069deg)
          }
          21% {
            transform:rotate(-52.8488deg)
          }
          21.5% {
            transform:rotate(-54.2322deg)
          }
          22% {
            transform:rotate(-55.7662deg)
          }
          22.5% {
            transform:rotate(-57.3289deg)
          }
          23% {
            transform:rotate(-58.8468deg)
          }
          23.5% {
            transform:rotate(-60.2779deg)
          }
          24% {
            transform:rotate(-61.6002deg)
          }
          24.5% {
            transform:rotate(-62.8047deg)
          }
          25% {
            transform:rotate(-63.8899deg)
          }
          25.5% {
            transform:rotate(-64.8594deg)
          }
          26% {
            transform:rotate(-65.7195deg)
          }
          26.5% {
            transform:rotate(-66.4781deg)
          }
          27% {
            transform:rotate(-67.1441deg)
          }
          27.5% {
            transform:rotate(-67.7261deg)
          }
          28% {
            transform:rotate(-68.2329deg)
          }
          28.5% {
            transform:rotate(-68.6728deg)
          }
          29% {
            transform:rotate(-69.0534deg)
          }
          29.5% {
            transform:rotate(-69.3819deg)
          }
          30% {
            transform:rotate(-69.6646deg)
          }
          30.5% {
            transform:rotate(-69.9075deg)
          }
          31% {
            transform:rotate(-70.1157deg)
          }
          31.5% {
            transform:rotate(-70.2938deg)
          }
          32% {
            transform:rotate(-70.446deg)
          }
          32.5% {
            transform:rotate(-70.5757deg)
          }
          33% {
            transform:rotate(-70.6861deg)
          }
          33.5% {
            transform:rotate(-70.78deg)
          }
          34% {
            transform:rotate(-70.8598deg)
          }
          34.5% {
            transform:rotate(-70.9274deg)
          }
          35% {
            transform:rotate(-70.9847deg)
          }
          35.5% {
            transform:rotate(-71.0332deg)
          }
          36% {
            transform:rotate(-71.0741deg)
          }
          36.5% {
            transform:rotate(-71.1087deg)
          }
          37% {
            transform:rotate(-71.1379deg)
          }
          37.5% {
            transform:rotate(-71.1625deg)
          }
          38% {
            transform:rotate(-71.1833deg)
          }
          38.5% {
            transform:rotate(-71.2007deg)
          }
          39% {
            transform:rotate(-71.2154deg)
          }
          39.5% {
            transform:rotate(-71.2277deg)
          }
          40% {
            transform:rotate(-71.2381deg)
          }
          40.5% {
            transform:rotate(-71.2468deg)
          }
          41% {
            transform:rotate(-71.2541deg)
          }
          41.5% {
            transform:rotate(-71.2602deg)
          }
          42% {
            transform:rotate(-71.2653deg)
          }
          42.5% {
            transform:rotate(-71.2696deg)
          }
          43% {
            transform:rotate(-71.2732deg)
          }
          43.5% {
            transform:rotate(-71.2762deg)
          }
          44% {
            transform:rotate(-71.2788deg)
          }
          44.5% {
            transform:rotate(-71.2809deg)
          }
          45% {
            transform:rotate(-71.2826deg)
          }
          45.5% {
            transform:rotate(-71.2841deg)
          }
          46% {
            transform:rotate(-71.2853deg)
          }
          46.5% {
            transform:rotate(-71.2863deg)
          }
          47% {
            transform:rotate(-71.2872deg)
          }
          47.5% {
            transform:rotate(-71.2879deg)
          }
          48% {
            transform:rotate(-71.2885deg)
          }
          48.5% {
            transform:rotate(-71.289deg)
          }
          49% {
            transform:rotate(-71.2894deg)
          }
          49.5% {
            transform:rotate(-71.2897deg)
          }
          50% {
            transform:rotate(-71.29deg)
          }
          50.5% {
            transform:rotate(-70.9805deg)
          }
          51% {
            transform:rotate(-70.1992deg)
          }
          51.5% {
            transform:rotate(-69.1206deg)
          }
          52% {
            transform:rotate(-67.8697deg)
          }
          52.5% {
            transform:rotate(-66.5354deg)
          }
          53% {
            transform:rotate(-65.1805deg)
          }
          53.5% {
            transform:rotate(-63.8485deg)
          }
          54% {
            transform:rotate(-62.5687deg)
          }
          54.5% {
            transform:rotate(-61.3602deg)
          }
          55% {
            transform:rotate(-60.2344deg)
          }
          55.5% {
            transform:rotate(-59.1975deg)
          }
          56% {
            transform:rotate(-58.2513deg)
          }
          56.5% {
            transform:rotate(-57.3949deg)
          }
          57% {
            transform:rotate(-56.6255deg)
          }
          57.5% {
            transform:rotate(-55.9385deg)
          }
          58% {
            transform:rotate(-55.3288deg)
          }
          58.5% {
            transform:rotate(-54.7905deg)
          }
          59% {
            transform:rotate(-54.3174deg)
          }
          59.5% {
            transform:rotate(-53.9037deg)
          }
          60% {
            transform:rotate(-53.5431deg)
          }
          60.5% {
            transform:rotate(-53.2301deg)
          }
          61% {
            transform:rotate(-52.9594deg)
          }
          61.5% {
            transform:rotate(-52.7258deg)
          }
          62% {
            transform:rotate(-52.5249deg)
          }
          62.5% {
            transform:rotate(-52.3526deg)
          }
          63% {
            transform:rotate(-52.2051deg)
          }
          63.5% {
            transform:rotate(-52.0791deg)
          }
          64% {
            transform:rotate(-51.9718deg)
          }
          64.5% {
            transform:rotate(-51.8804deg)
          }
          65% {
            transform:rotate(-51.8028deg)
          }
          65.5% {
            transform:rotate(-51.7369deg)
          }
          66% {
            transform:rotate(-51.6812deg)
          }
          66.5% {
            transform:rotate(-51.634deg)
          }
          67% {
            transform:rotate(-51.5941deg)
          }
          67.5% {
            transform:rotate(-51.5605deg)
          }
          68% {
            transform:rotate(-51.5321deg)
          }
          68.5% {
            transform:rotate(-51.5082deg)
          }
          69% {
            transform:rotate(-51.4881deg)
          }
          69.5% {
            transform:rotate(-51.4712deg)
          }
          70% {
            transform:rotate(-51.457deg)
          }
          70.5% {
            transform:rotate(-51.445deg)
          }
          71% {
            transform:rotate(-51.435deg)
          }
          71.5% {
            transform:rotate(-51.4266deg)
          }
          72% {
            transform:rotate(-51.4195deg)
          }
          72.5% {
            transform:rotate(-51.4136deg)
          }
          73% {
            transform:rotate(-51.4087deg)
          }
          73.5% {
            transform:rotate(-51.4046deg)
          }
          74% {
            transform:rotate(-51.4011deg)
          }
          74.5% {
            transform:rotate(-51.3982deg)
          }
          75% {
            transform:rotate(-51.3958deg)
          }
          75.5% {
            transform:rotate(-51.3938deg)
          }
          76% {
            transform:rotate(-51.3921deg)
          }
          76.5% {
            transform:rotate(-51.3907deg)
          }
          77% {
            transform:rotate(-51.3895deg)
          }
          77.5% {
            transform:rotate(-51.3885deg)
          }
          78% {
            transform:rotate(-51.3877deg)
          }
          78.5% {
            transform:rotate(-51.387deg)
          }
          79% {
            transform:rotate(-51.3865deg)
          }
          79.5% {
            transform:rotate(-51.386deg)
          }
          80% {
            transform:rotate(-51.3856deg)
          }
          80.5% {
            transform:rotate(-51.3853deg)
          }
          81% {
            transform:rotate(-51.385deg)
          }
          81.5% {
            transform:rotate(-51.3848deg)
          }
          82% {
            transform:rotate(-51.3846deg)
          }
          82.5% {
            transform:rotate(-51.3844deg)
          }
          83% {
            transform:rotate(-51.3843deg)
          }
          83.5% {
            transform:rotate(-51.3842deg)
          }
          84% {
            transform:rotate(-51.3841deg)
          }
          84.5% {
            transform:rotate(-51.384deg)
          }
          85% {
            transform:rotate(-51.384deg)
          }
          85.5% {
            transform:rotate(-51.3839deg)
          }
          86% {
            transform:rotate(-51.3839deg)
          }
          86.5% {
            transform:rotate(-51.3838deg)
          }
          87% {
            transform:rotate(-51.3838deg)
          }
          87.5% {
            transform:rotate(-51.3838deg)
          }
          88% {
            transform:rotate(-51.3838deg)
          }
          88.5% {
            transform:rotate(-51.3837deg)
          }
          89% {
            transform:rotate(-51.3837deg)
          }
          89.5% {
            transform:rotate(-51.3837deg)
          }
          90% {
            transform:rotate(-51.3837deg)
          }
          96% {
            transform:rotate(-51.3837deg)
          }
          96.01%,100% {
            transform:rotate(-51.3837deg)
          }
        }
        .elbow {
          transform:rotate(74.7146deg);
          animation:elbow 10s linear infinite
        }
        @keyframes elbow {
          0% {
            transform:rotate(44.1659deg)
          }
          0.5% {
            transform:rotate(44.1659deg)
          }
          1% {
            transform:rotate(44.1659deg)
          }
          1.5% {
            transform:rotate(44.1659deg)
          }
          2% {
            transform:rotate(44.1659deg)
          }
          2.5% {
            transform:rotate(44.1659deg)
          }
          3% {
            transform:rotate(44.1659deg)
          }
          3.5% {
            transform:rotate(44.1659deg)
          }
          4% {
            transform:rotate(44.1659deg)
          }
          4.5% {
            transform:rotate(44.1659deg)
          }
          5% {
            transform:rotate(44.1659deg)
          }
          5.5% {
            transform:rotate(44.1659deg)
          }
          6% {
            transform:rotate(44.1659deg)
          }
          6.5% {
            transform:rotate(44.1659deg)
          }
          7% {
            transform:rotate(44.1659deg)
          }
          7.5% {
            transform:rotate(44.1659deg)
          }
          8% {
            transform:rotate(44.1659deg)
          }
          8.5% {
            transform:rotate(44.1659deg)
          }
          9% {
            transform:rotate(44.1659deg)
          }
          9.5% {
            transform:rotate(44.1659deg)
          }
          10% {
            transform:rotate(44.1659deg)
          }
          10.5% {
            transform:rotate(44.1659deg)
          }
          11% {
            transform:rotate(44.1659deg)
          }
          11.5% {
            transform:rotate(44.1659deg)
          }
          12% {
            transform:rotate(44.1659deg)
          }
          12.5% {
            transform:rotate(44.1659deg)
          }
          13% {
            transform:rotate(44.1659deg)
          }
          13.5% {
            transform:rotate(44.1659deg)
          }
          14% {
            transform:rotate(44.1659deg)
          }
          14.5% {
            transform:rotate(44.1659deg)
          }
          15% {
            transform:rotate(44.1659deg)
          }
          15.5% {
            transform:rotate(44.1659deg)
          }
          16% {
            transform:rotate(44.1659deg)
          }
          16.5% {
            transform:rotate(44.1659deg)
          }
          17% {
            transform:rotate(44.1659deg)
          }
          17.5% {
            transform:rotate(44.1659deg)
          }
          18% {
            transform:rotate(44.1659deg)
          }
          18.5% {
            transform:rotate(44.1659deg)
          }
          19% {
            transform:rotate(44.1659deg)
          }
          19.5% {
            transform:rotate(44.1659deg)
          }
          20% {
            transform:rotate(44.1659deg)
          }
          20.5% {
            transform:rotate(44.8856deg)
          }
          21% {
            transform:rotate(46.6448deg)
          }
          21.5% {
            transform:rotate(48.9528deg)
          }
          22% {
            transform:rotate(51.4748deg)
          }
          22.5% {
            transform:rotate(54.0036deg)
          }
          23% {
            transform:rotate(56.4205deg)
          }
          23.5% {
            transform:rotate(58.6634deg)
          }
          24% {
            transform:rotate(60.7047deg)
          }
          24.5% {
            transform:rotate(62.5378deg)
          }
          25% {
            transform:rotate(64.1677deg)
          }
          25.5% {
            transform:rotate(65.6064deg)
          }
          26% {
            transform:rotate(66.8689deg)
          }
          26.5% {
            transform:rotate(67.9716deg)
          }
          27% {
            transform:rotate(68.9311deg)
          }
          27.5% {
            transform:rotate(69.7632deg)
          }
          28% {
            transform:rotate(70.4829deg)
          }
          28.5% {
            transform:rotate(71.1037deg)
          }
          29% {
            transform:rotate(71.638deg)
          }
          29.5% {
            transform:rotate(72.097deg)
          }
          30% {
            transform:rotate(72.4906deg)
          }
          30.5% {
            transform:rotate(72.8275deg)
          }
          31% {
            transform:rotate(73.1155deg)
          }
          31.5% {
            transform:rotate(73.3612deg)
          }
          32% {
            transform:rotate(73.5706deg)
          }
          32.5% {
            transform:rotate(73.7488deg)
          }
          33% {
            transform:rotate(73.9003deg)
          }
          33.5% {
            transform:rotate(74.029deg)
          }
          34% {
            transform:rotate(74.1381deg)
          }
          34.5% {
            transform:rotate(74.2305deg)
          }
          35% {
            transform:rotate(74.3087deg)
          }
          35.5% {
            transform:rotate(74.3749deg)
          }
          36% {
            transform:rotate(74.4308deg)
          }
          36.5% {
            transform:rotate(74.4779deg)
          }
          37% {
            transform:rotate(74.5177deg)
          }
          37.5% {
            transform:rotate(74.5513deg)
          }
          38% {
            transform:rotate(74.5795deg)
          }
          38.5% {
            transform:rotate(74.6032deg)
          }
          39% {
            transform:rotate(74.6232deg)
          }
          39.5% {
            transform:rotate(74.64deg)
          }
          40% {
            transform:rotate(74.6541deg)
          }
          40.5% {
            transform:rotate(74.6659deg)
          }
          41% {
            transform:rotate(74.6759deg)
          }
          41.5% {
            transform:rotate(74.6842deg)
          }
          42% {
            transform:rotate(74.6912deg)
          }
          42.5% {
            transform:rotate(74.697deg)
          }
          43% {
            transform:rotate(74.7019deg)
          }
          43.5% {
            transform:rotate(74.706deg)
          }
          44% {
            transform:rotate(74.7094deg)
          }
          44.5% {
            transform:rotate(74.7123deg)
          }
          45% {
            transform:rotate(74.7146deg)
          }
          45.5% {
            transform:rotate(74.7166deg)
          }
          46% {
            transform:rotate(74.7183deg)
          }
          46.5% {
            transform:rotate(74.7197deg)
          }
          47% {
            transform:rotate(74.7209deg)
          }
          47.5% {
            transform:rotate(74.7218deg)
          }
          48% {
            transform:rotate(74.7226deg)
          }
          48.5% {
            transform:rotate(74.7233deg)
          }
          49% {
            transform:rotate(74.7239deg)
          }
          49.5% {
            transform:rotate(74.7243deg)
          }
          50% {
            transform:rotate(74.7247deg)
          }
          50.5% {
            transform:rotate(74.303deg)
          }
          51% {
            transform:rotate(73.2308deg)
          }
          51.5% {
            transform:rotate(71.7321deg)
          }
          52% {
            transform:rotate(69.9675deg)
          }
          52.5% {
            transform:rotate(68.0544deg)
          }
          53% {
            transform:rotate(66.0793deg)
          }
          53.5% {
            transform:rotate(64.1059deg)
          }
          54% {
            transform:rotate(62.1806deg)
          }
          54.5% {
            transform:rotate(60.3364deg)
          }
          55% {
            transform:rotate(58.5958deg)
          }
          55.5% {
            transform:rotate(56.9733deg)
          }
          56% {
            transform:rotate(55.4769deg)
          }
          56.5% {
            transform:rotate(54.1095deg)
          }
          57% {
            transform:rotate(52.8704deg)
          }
          57.5% {
            transform:rotate(51.7557deg)
          }
          58% {
            transform:rotate(50.7597deg)
          }
          58.5% {
            transform:rotate(49.8751deg)
          }
          59% {
            transform:rotate(49.094deg)
          }
          59.5% {
            transform:rotate(48.4075deg)
          }
          60% {
            transform:rotate(47.8071deg)
          }
          60.5% {
            transform:rotate(47.2842deg)
          }
          61% {
            transform:rotate(46.8304deg)
          }
          61.5% {
            transform:rotate(46.4381deg)
          }
          62% {
            transform:rotate(46.0999deg)
          }
          62.5% {
            transform:rotate(45.8092deg)
          }
          63% {
            transform:rotate(45.5601deg)
          }
          63.5% {
            transform:rotate(45.347deg)
          }
          64% {
            transform:rotate(45.1652deg)
          }
          64.5% {
            transform:rotate(45.0103deg)
          }
          65% {
            transform:rotate(44.8786deg)
          }
          65.5% {
            transform:rotate(44.7669deg)
          }
          66% {
            transform:rotate(44.6721deg)
          }
          66.5% {
            transform:rotate(44.592deg)
          }
          67% {
            transform:rotate(44.5242deg)
          }
          67.5% {
            transform:rotate(44.467deg)
          }
          68% {
            transform:rotate(44.4187deg)
          }
          68.5% {
            transform:rotate(44.378deg)
          }
          69% {
            transform:rotate(44.3438deg)
          }
          69.5% {
            transform:rotate(44.315deg)
          }
          70% {
            transform:rotate(44.2908deg)
          }
          70.5% {
            transform:rotate(44.2704deg)
          }
          71% {
            transform:rotate(44.2534deg)
          }
          71.5% {
            transform:rotate(44.239deg)
          }
          72% {
            transform:rotate(44.227deg)
          }
          72.5% {
            transform:rotate(44.217deg)
          }
          73% {
            transform:rotate(44.2086deg)
          }
          73.5% {
            transform:rotate(44.2015deg)
          }
          74% {
            transform:rotate(44.1956deg)
          }
          74.5% {
            transform:rotate(44.1907deg)
          }
          75% {
            transform:rotate(44.1866deg)
          }
          75.5% {
            transform:rotate(44.1831deg)
          }
          76% {
            transform:rotate(44.1803deg)
          }
          76.5% {
            transform:rotate(44.1779deg)
          }
          77% {
            transform:rotate(44.1759deg)
          }
          77.5% {
            transform:rotate(44.1742deg)
          }
          78% {
            transform:rotate(44.1728deg)
          }
          78.5% {
            transform:rotate(44.1717deg)
          }
          79% {
            transform:rotate(44.1707deg)
          }
          79.5% {
            transform:rotate(44.1699deg)
          }
          80% {
            transform:rotate(44.1692deg)
          }
          80.5% {
            transform:rotate(44.1687deg)
          }
          81% {
            transform:rotate(44.1682deg)
          }
          81.5% {
            transform:rotate(44.1678deg)
          }
          82% {
            transform:rotate(44.1675deg)
          }
          82.5% {
            transform:rotate(44.1672deg)
          }
          83% {
            transform:rotate(44.167deg)
          }
          83.5% {
            transform:rotate(44.1668deg)
          }
          84% {
            transform:rotate(44.1667deg)
          }
          84.5% {
            transform:rotate(44.1665deg)
          }
          85% {
            transform:rotate(44.1664deg)
          }
          85.5% {
            transform:rotate(44.1663deg)
          }
          86% {
            transform:rotate(44.1663deg)
          }
          86.5% {
            transform:rotate(44.1662deg)
          }
          87% {
            transform:rotate(44.1662deg)
          }
          87.5% {
            transform:rotate(44.1661deg)
          }
          88% {
            transform:rotate(44.1661deg)
          }
          88.5% {
            transform:rotate(44.1661deg)
          }
          89% {
            transform:rotate(44.166deg)
          }
          89.5% {
            transform:rotate(44.166deg)
          }
          90% {
            transform:rotate(44.166deg)
          }
          96% {
            transform:rotate(44.166deg)
          }
          96.01%,100% {
            transform:rotate(44.1659deg)
          }
        }
        .pad {
          ;
          animation:pad 10s linear infinite
        }
        @keyframes pad {
          0% {
            x:121px
          }
          0.5% {
            x:120.9613px
          }
          1% {
            x:120.8478px
          }
          1.5% {
            x:120.6633px
          }
          2% {
            x:120.412px
          }
          2.5% {
            x:120.0977px
          }
          3% {
            x:119.7242px
          }
          3.5% {
            x:119.2957px
          }
          4% {
            x:118.816px
          }
          4.5% {
            x:118.289px
          }
          5% {
            x:117.7188px
          }
          5.5% {
            x:117.1091px
          }
          6% {
            x:116.464px
          }
          6.5% {
            x:115.7874px
          }
          7% {
            x:115.0832px
          }
          7.5% {
            x:114.3555px
          }
          8% {
            x:113.608px
          }
          8.5% {
            x:112.8448px
          }
          9% {
            x:112.0697px
          }
          9.5% {
            x:111.2868px
          }
          10% {
            x:110.5px
          }
          10.5% {
            x:109.7132px
          }
          11% {
            x:108.9303px
          }
          11.5% {
            x:108.1552px
          }
          12% {
            x:107.392px
          }
          12.5% {
            x:106.6445px
          }
          13% {
            x:105.9167px
          }
          13.5% {
            x:105.2126px
          }
          14% {
            x:104.536px
          }
          14.5% {
            x:103.8909px
          }
          15% {
            x:103.2813px
          }
          15.5% {
            x:102.711px
          }
          16% {
            x:102.184px
          }
          16.5% {
            x:101.7043px
          }
          17% {
            x:101.2758px
          }
          17.5% {
            x:100.9023px
          }
          18% {
            x:100.588px
          }
          18.5% {
            x:100.3367px
          }
          19% {
            x:100.1522px
          }
          19.5% {
            x:100.0387px
          }
          20% {
            x:100px
          }
          20.5% {
            x:99.7547px
          }
          21% {
            x:99.1383px
          }
          21.5% {
            x:98.2934px
          }
          22% {
            x:97.3231px
          }
          22.5% {
            x:96.3006px
          }
          23% {
            x:95.2768px
          }
          23.5% {
            x:94.2857px
          }
          24% {
            x:93.349px
          }
          24.5% {
            x:92.4797px
          }
          25% {
            x:91.6841px
          }
          25.5% {
            x:90.964px
          }
          26% {
            x:90.3182px
          }
          26.5% {
            x:89.7434px
          }
          27% {
            x:89.2351px
          }
          27.5% {
            x:88.7881px
          }
          28% {
            x:88.3968px
          }
          28.5% {
            x:88.0558px
          }
          29% {
            x:87.7596px
          }
          29.5% {
            x:87.5033px
          }
          30% {
            x:87.2821px
          }
          30.5% {
            x:87.0917px
          }
          31% {
            x:86.9282px
          }
          31.5% {
            x:86.7881px
          }
          32% {
            x:86.6683px
          }
          32.5% {
            x:86.566px
          }
          33% {
            x:86.4788px
          }
          33.5% {
            x:86.4047px
          }
          34% {
            x:86.3417px
          }
          34.5% {
            x:86.2882px
          }
          35% {
            x:86.2429px
          }
          35.5% {
            x:86.2046px
          }
          36% {
            x:86.1721px
          }
          36.5% {
            x:86.1447px
          }
          37% {
            x:86.1216px
          }
          37.5% {
            x:86.1021px
          }
          38% {
            x:86.0857px
          }
          38.5% {
            x:86.0719px
          }
          39% {
            x:86.0603px
          }
          39.5% {
            x:86.0505px
          }
          40% {
            x:86.0423px
          }
          40.5% {
            x:86.0354px
          }
          41% {
            x:86.0296px
          }
          41.5% {
            x:86.0247px
          }
          42% {
            x:86.0207px
          }
          42.5% {
            x:86.0173px
          }
          43% {
            x:86.0144px
          }
          43.5% {
            x:86.012px
          }
          44% {
            x:86.0101px
          }
          44.5% {
            x:86.0084px
          }
          45% {
            x:86.007px
          }
          45.5% {
            x:86.0058px
          }
          46% {
            x:86.0049px
          }
          46.5% {
            x:86.004px
          }
          47% {
            x:86.0034px
          }
          47.5% {
            x:86.0028px
          }
          48% {
            x:86.0023px
          }
          48.5% {
            x:86.0019px
          }
          49% {
            x:86.0016px
          }
          49.5% {
            x:86.0013px
          }
          50% {
            x:86.0011px
          }
          50.5% {
            x:86.4982px
          }
          51% {
            x:87.8183px
          }
          51.5% {
            x:89.7298px
          }
          52% {
            x:92.039px
          }
          52.5% {
            x:94.5905px
          }
          53% {
            x:97.2633px
          }
          53.5% {
            x:99.9658px
          }
          54% {
            x:102.63px
          }
          54.5% {
            x:105.2062px
          }
          55% {
            x:107.658px
          }
          55.5% {
            x:109.9589px
          }
          56% {
            x:112.088px
          }
          56.5% {
            x:114.0286px
          }
          57% {
            x:115.7652px
          }
          57.5% {
            x:117.2831px
          }
          58% {
            x:118.5667px
          }
          58.5% {
            x:119.5994px
          }
          59% {
            x:120.3627px
          }
          59.5% {
            x:120.8369px
          }
          60% {
            x:121px
          }
          60.5% {
            x:121px
          }
          61% {
            x:121px
          }
          61.5% {
            x:121px
          }
          62% {
            x:121px
          }
          62.5% {
            x:121px
          }
          63% {
            x:121px
          }
          63.5% {
            x:121px
          }
          64% {
            x:121px
          }
          64.5% {
            x:121px
          }
          65% {
            x:121px
          }
          65.5% {
            x:121px
          }
          66% {
            x:121px
          }
          66.5% {
            x:121px
          }
          67% {
            x:121px
          }
          67.5% {
            x:121px
          }
          68% {
            x:121px
          }
          68.5% {
            x:121px
          }
          69% {
            x:121px
          }
          69.5% {
            x:121px
          }
          70% {
            x:121px
          }
          70.5% {
            x:121px
          }
          71% {
            x:121px
          }
          71.5% {
            x:121px
          }
          72% {
            x:121px
          }
          72.5% {
            x:121px
          }
          73% {
            x:121px
          }
          73.5% {
            x:121px
          }
          74% {
            x:121px
          }
          74.5% {
            x:121px
          }
          75% {
            x:121px
          }
          75.5% {
            x:121px
          }
          76% {
            x:121px
          }
          76.5% {
            x:121px
          }
          77% {
            x:121px
          }
          77.5% {
            x:121px
          }
          78% {
            x:121px
          }
          78.5% {
            x:121px
          }
          79% {
            x:121px
          }
          79.5% {
            x:121px
          }
          80% {
            x:121px
          }
          80.5% {
            x:121px
          }
          81% {
            x:121px
          }
          81.5% {
            x:121px
          }
          82% {
            x:121px
          }
          82.5% {
            x:121px
          }
          83% {
            x:121px
          }
          83.5% {
            x:121px
          }
          84% {
            x:121px
          }
          84.5% {
            x:121px
          }
          85% {
            x:121px
          }
          85.5% {
            x:121px
          }
          86% {
            x:121px
          }
          86.5% {
            x:121px
          }
          87% {
            x:121px
          }
          87.5% {
            x:121px
          }
          88% {
            x:121px
          }
          88.5% {
            x:121px
          }
          89% {
            x:121px
          }
          89.5% {
            x:121px
          }
          90% {
            x:121px
          }
          96% {
            x:121px
          }
          96.01%,100% {
            x:121px
          }
        }
        .spring {
          ;
          animation:spring 10s linear infinite
        }
        @keyframes spring {
          0% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          0.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          1% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          1.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          2% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          2.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          3% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          3.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          4% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          4.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          5.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          6% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          6.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          7% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          7.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          8% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          8.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          9% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          9.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          10% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          10.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          11% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          11.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          12% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          12.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          13% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          13.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          14% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          14.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          15% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          15.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          16% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          16.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          17% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          17.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          18% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          18.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          19% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          19.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          20% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          20.5% {
            d:path("M95.7547 70L95.7853 72.5L95.816 67.5L95.8467 72.5L95.8773 67.5L95.908 72.5L95.9387 67.5L95.9693 72.5L96 70");
            opacity:1
          }
          21% {
            d:path("M95.1383 70L95.246 72.5L95.3537 67.5L95.4614 72.5L95.5691 67.5L95.6769 72.5L95.7846 67.5L95.8923 72.5L96 70");
            opacity:1
          }
          21.5% {
            d:path("M94.2934 70L94.5067 72.5L94.72 67.5L94.9334 72.5L95.1467 67.5L95.36 72.5L95.5733 67.5L95.7867 72.5L96 70");
            opacity:1
          }
          22% {
            d:path("M93.3231 70L93.6577 72.5L93.9923 67.5L94.3269 72.5L94.6615 67.5L94.9962 72.5L95.3308 67.5L95.6654 72.5L96 70");
            opacity:1
          }
          22.5% {
            d:path("M92.3006 70L92.763 72.5L93.2255 67.5L93.6879 72.5L94.1503 67.5L94.6127 72.5L95.0752 67.5L95.5376 72.5L96 70");
            opacity:1
          }
          23% {
            d:path("M91.2768 70L91.8672 72.5L92.4576 67.5L93.048 72.5L93.6384 67.5L94.2288 72.5L94.8192 67.5L95.4096 72.5L96 70");
            opacity:1
          }
          23.5% {
            d:path("M90.2857 70L91 72.5L91.7142 67.5L92.4285 72.5L93.1428 67.5L93.8571 72.5L94.5714 67.5L95.2857 72.5L96 70");
            opacity:1
          }
          24% {
            d:path("M89.349 70L90.1804 72.5L91.0118 67.5L91.8431 72.5L92.6745 67.5L93.5059 72.5L94.3373 67.5L95.1686 72.5L96 70");
            opacity:1
          }
          24.5% {
            d:path("M88.4797 70L89.4198 72.5L90.3598 67.5L91.2998 72.5L92.2399 67.5L93.1799 72.5L94.1199 67.5L95.06 72.5L96 70");
            opacity:1
          }
          25% {
            d:path("M87.6841 70L88.7236 72.5L89.7631 67.5L90.8026 72.5L91.842 67.5L92.8815 72.5L93.921 67.5L94.9605 72.5L96 70");
            opacity:1
          }
          25.5% {
            d:path("M86.964 70L88.0935 72.5L89.223 67.5L90.3525 72.5L91.482 67.5L92.6115 72.5L93.741 67.5L94.8705 72.5L96 70");
            opacity:1
          }
          26% {
            d:path("M86.3182 70L87.5284 72.5L88.7386 67.5L89.9489 72.5L91.1591 67.5L92.3693 72.5L93.5795 67.5L94.7898 72.5L96 70");
            opacity:1
          }
          26.5% {
            d:path("M85.7434 70L87.0255 72.5L88.3075 67.5L89.5896 72.5L90.8717 67.5L92.1538 72.5L93.4358 67.5L94.7179 72.5L96 70");
            opacity:1
          }
          27% {
            d:path("M85.2351 70L86.5807 72.5L87.9263 67.5L89.2719 72.5L90.6175 67.5L91.9632 72.5L93.3088 67.5L94.6544 72.5L96 70");
            opacity:1
          }
          27.5% {
            d:path("M84.7881 70L86.1896 72.5L87.5911 67.5L88.9925 72.5L90.394 67.5L91.7955 72.5L93.197 67.5L94.5985 72.5L96 70");
            opacity:1
          }
          28% {
            d:path("M84.3968 70L85.8472 72.5L87.2976 67.5L88.748 72.5L90.1984 67.5L91.6488 72.5L93.0992 67.5L94.5496 72.5L96 70");
            opacity:1
          }
          28.5% {
            d:path("M84.0558 70L85.5488 72.5L87.0418 67.5L88.5349 72.5L90.0279 67.5L91.5209 72.5L93.0139 67.5L94.507 72.5L96 70");
            opacity:1
          }
          29% {
            d:path("M83.7596 70L85.2897 72.5L86.8197 67.5L88.3498 72.5L89.8798 67.5L91.4099 72.5L92.9399 67.5L94.47 72.5L96 70");
            opacity:1
          }
          29.5% {
            d:path("M83.5033 70L85.0654 72.5L86.6275 67.5L88.1896 72.5L89.7517 67.5L91.3137 72.5L92.8758 67.5L94.4379 72.5L96 70");
            opacity:1
          }
          30% {
            d:path("M83.2821 70L84.8718 72.5L86.4616 67.5L88.0513 72.5L89.641 67.5L91.2308 72.5L92.8205 67.5L94.4103 72.5L96 70");
            opacity:1
          }
          30.5% {
            d:path("M83.0917 70L84.7052 72.5L86.3188 67.5L87.9323 72.5L89.5458 67.5L91.1594 72.5L92.7729 67.5L94.3865 72.5L96 70");
            opacity:1
          }
          31% {
            d:path("M82.9282 70L84.5621 72.5L86.1961 67.5L87.8301 72.5L89.4641 67.5L91.0981 72.5L92.732 67.5L94.366 72.5L96 70");
            opacity:1
          }
          31.5% {
            d:path("M82.7881 70L84.4396 72.5L86.091 67.5L87.7425 72.5L89.394 67.5L91.0455 72.5L92.697 67.5L94.3485 72.5L96 70");
            opacity:1
          }
          32% {
            d:path("M82.6683 70L84.3347 72.5L86.0012 67.5L87.6677 72.5L89.3341 67.5L91.0006 72.5L92.6671 67.5L94.3335 72.5L96 70");
            opacity:1
          }
          32.5% {
            d:path("M82.566 70L84.2452 72.5L85.9245 67.5L87.6037 72.5L89.283 67.5L90.9622 72.5L92.6415 67.5L94.3207 72.5L96 70");
            opacity:1
          }
          33% {
            d:path("M82.4788 70L84.169 72.5L85.8591 67.5L87.5493 72.5L89.2394 67.5L90.9296 72.5L92.6197 67.5L94.3099 72.5L96 70");
            opacity:1
          }
          33.5% {
            d:path("M82.4047 70L84.1041 72.5L85.8035 67.5L87.5029 72.5L89.2023 67.5L90.9018 72.5L92.6012 67.5L94.3006 72.5L96 70");
            opacity:1
          }
          34% {
            d:path("M82.3417 70L84.049 72.5L85.7563 67.5L87.4636 72.5L89.1708 67.5L90.8781 72.5L92.5854 67.5L94.2927 72.5L96 70");
            opacity:1
          }
          34.5% {
            d:path("M82.2882 70L84.0022 72.5L85.7162 67.5L87.4301 72.5L89.1441 67.5L90.8581 72.5L92.5721 67.5L94.286 72.5L96 70");
            opacity:1
          }
          35% {
            d:path("M82.2429 70L83.9626 72.5L85.6822 67.5L87.4018 72.5L89.1215 67.5L90.8411 72.5L92.5607 67.5L94.2804 72.5L96 70");
            opacity:1
          }
          35.5% {
            d:path("M82.2046 70L83.929 72.5L85.6534 67.5L87.3779 72.5L89.1023 67.5L90.8267 72.5L92.5511 67.5L94.2756 72.5L96 70");
            opacity:1
          }
          36% {
            d:path("M82.1721 70L83.9006 72.5L85.6291 67.5L87.3576 72.5L89.0861 67.5L90.8146 72.5L92.543 67.5L94.2715 72.5L96 70");
            opacity:1
          }
          36.5% {
            d:path("M82.1447 70L83.8767 72.5L85.6086 67.5L87.3405 72.5L89.0724 67.5L90.8043 72.5L92.5362 67.5L94.2681 72.5L96 70");
            opacity:1
          }
          37% {
            d:path("M82.1216 70L83.8564 72.5L85.5912 67.5L87.326 72.5L89.0608 67.5L90.7956 72.5L92.5304 67.5L94.2652 72.5L96 70");
            opacity:1
          }
          37.5% {
            d:path("M82.1021 70L83.8394 72.5L85.5766 67.5L87.3138 72.5L89.0511 67.5L90.7883 72.5L92.5255 67.5L94.2628 72.5L96 70");
            opacity:1
          }
          38% {
            d:path("M82.0857 70L83.825 72.5L85.5643 67.5L87.3036 72.5L89.0429 67.5L90.7821 72.5L92.5214 67.5L94.2607 72.5L96 70");
            opacity:1
          }
          38.5% {
            d:path("M82.0719 70L83.8129 72.5L85.5539 67.5L87.2949 72.5L89.0359 67.5L90.777 72.5L92.518 67.5L94.259 72.5L96 70");
            opacity:1
          }
          39% {
            d:path("M82.0603 70L83.8027 72.5L85.5452 67.5L87.2877 72.5L89.0301 67.5L90.7726 72.5L92.5151 67.5L94.2575 72.5L96 70");
            opacity:1
          }
          39.5% {
            d:path("M82.0505 70L83.7942 72.5L85.5379 67.5L87.2815 72.5L89.0252 67.5L90.7689 72.5L92.5126 67.5L94.2563 72.5L96 70");
            opacity:1
          }
          40% {
            d:path("M82.0423 70L83.787 72.5L85.5317 67.5L87.2764 72.5L89.0211 67.5L90.7659 72.5L92.5106 67.5L94.2553 72.5L96 70");
            opacity:1
          }
          40.5% {
            d:path("M82.0354 70L83.781 72.5L85.5265 67.5L87.2721 72.5L89.0177 67.5L90.7633 72.5L92.5088 67.5L94.2544 72.5L96 70");
            opacity:1
          }
          41% {
            d:path("M82.0296 70L83.7759 72.5L85.5222 67.5L87.2685 72.5L89.0148 67.5L90.7611 72.5L92.5074 67.5L94.2537 72.5L96 70");
            opacity:1
          }
          41.5% {
            d:path("M82.0247 70L83.7717 72.5L85.5186 67.5L87.2655 72.5L89.0124 67.5L90.7593 72.5L92.5062 67.5L94.2531 72.5L96 70");
            opacity:1
          }
          42% {
            d:path("M82.0207 70L83.7681 72.5L85.5155 67.5L87.2629 72.5L89.0103 67.5L90.7578 72.5L92.5052 67.5L94.2526 72.5L96 70");
            opacity:1
          }
          42.5% {
            d:path("M82.0173 70L83.7651 72.5L85.513 67.5L87.2608 72.5L89.0086 67.5L90.7565 72.5L92.5043 67.5L94.2522 72.5L96 70");
            opacity:1
          }
          43% {
            d:path("M82.0144 70L83.7626 72.5L85.5108 67.5L87.259 72.5L89.0072 67.5L90.7554 72.5L92.5036 67.5L94.2518 72.5L96 70");
            opacity:1
          }
          43.5% {
            d:path("M82.012 70L83.7605 72.5L85.509 67.5L87.2575 72.5L89.006 67.5L90.7545 72.5L92.503 67.5L94.2515 72.5L96 70");
            opacity:1
          }
          44% {
            d:path("M82.0101 70L83.7588 72.5L85.5075 67.5L87.2563 72.5L89.005 67.5L90.7538 72.5L92.5025 67.5L94.2513 72.5L96 70");
            opacity:1
          }
          44.5% {
            d:path("M82.0084 70L83.7573 72.5L85.5063 67.5L87.2552 72.5L89.0042 67.5L90.7531 72.5L92.5021 67.5L94.251 72.5L96 70");
            opacity:1
          }
          45% {
            d:path("M82.007 70L83.7561 72.5L85.5052 67.5L87.2544 72.5L89.0035 67.5L90.7526 72.5L92.5017 67.5L94.2509 72.5L96 70");
            opacity:1
          }
          45.5% {
            d:path("M82.0058 70L83.7551 72.5L85.5044 67.5L87.2536 72.5L89.0029 67.5L90.7522 72.5L92.5015 67.5L94.2507 72.5L96 70");
            opacity:1
          }
          46% {
            d:path("M82.0049 70L83.7542 72.5L85.5036 67.5L87.253 72.5L89.0024 67.5L90.7518 72.5L92.5012 67.5L94.2506 72.5L96 70");
            opacity:1
          }
          46.5% {
            d:path("M82.004 70L83.7535 72.5L85.503 67.5L87.2525 72.5L89.002 67.5L90.7515 72.5L92.501 67.5L94.2505 72.5L96 70");
            opacity:1
          }
          47% {
            d:path("M82.0034 70L83.7529 72.5L85.5025 67.5L87.2521 72.5L89.0017 67.5L90.7513 72.5L92.5008 67.5L94.2504 72.5L96 70");
            opacity:1
          }
          47.5% {
            d:path("M82.0028 70L83.7525 72.5L85.5021 67.5L87.2518 72.5L89.0014 67.5L90.7511 72.5L92.5007 67.5L94.2504 72.5L96 70");
            opacity:1
          }
          48% {
            d:path("M82.0023 70L83.752 72.5L85.5018 67.5L87.2515 72.5L89.0012 67.5L90.7509 72.5L92.5006 67.5L94.2503 72.5L96 70");
            opacity:1
          }
          48.5% {
            d:path("M82.0019 70L83.7517 72.5L85.5015 67.5L87.2512 72.5L89.001 67.5L90.7507 72.5L92.5005 67.5L94.2502 72.5L96 70");
            opacity:1
          }
          49% {
            d:path("M82.0016 70L83.7514 72.5L85.5012 67.5L87.251 72.5L89.0008 67.5L90.7506 72.5L92.5004 67.5L94.2502 72.5L96 70");
            opacity:1
          }
          49.5% {
            d:path("M82.0013 70L83.7512 72.5L85.501 67.5L87.2508 72.5L89.0007 67.5L90.7505 72.5L92.5003 67.5L94.2502 72.5L96 70");
            opacity:1
          }
          50% {
            d:path("M82.0011 70L83.751 72.5L85.5008 67.5L87.2507 72.5L89.0006 67.5L90.7504 72.5L92.5003 67.5L94.2501 72.5L96 70");
            opacity:1
          }
          50.5% {
            d:path("M82.2463 70L83.9655 72.5L85.6847 67.5L87.4039 72.5L89.1231 67.5L90.8423 72.5L92.5616 67.5L94.2808 72.5L96 70");
            opacity:1
          }
          51% {
            d:path("M82.8625 70L84.5047 72.5L86.1469 67.5L87.7891 72.5L89.4312 67.5L91.0734 72.5L92.7156 67.5L94.3578 72.5L96 70");
            opacity:1
          }
          51.5% {
            d:path("M83.7073 70L85.2439 72.5L86.7804 67.5L88.317 72.5L89.8536 67.5L91.3902 72.5L92.9268 67.5L94.4634 72.5L96 70");
            opacity:1
          }
          52% {
            d:path("M84.6774 70L86.0928 72.5L87.5081 67.5L88.9234 72.5L90.3387 67.5L91.754 72.5L93.1694 67.5L94.5847 72.5L96 70");
            opacity:1
          }
          52.5% {
            d:path("M85.6998 70L86.9873 72.5L88.2749 67.5L89.5624 72.5L90.8499 67.5L92.1374 72.5L93.425 67.5L94.7125 72.5L96 70");
            opacity:1
          }
          53% {
            d:path("M86.7236 70L87.8831 72.5L89.0427 67.5L90.2022 72.5L91.3618 67.5L92.5213 72.5L93.6809 67.5L94.8404 72.5L96 70");
            opacity:1
          }
          53.5% {
            d:path("M87.7146 70L88.7503 72.5L89.786 67.5L90.8217 72.5L91.8573 67.5L92.893 72.5L93.9287 67.5L94.9643 72.5L96 70");
            opacity:1
          }
          54% {
            d:path("M88.6512 70L89.5698 72.5L90.4884 67.5L91.407 72.5L92.3256 67.5L93.2442 72.5L94.1628 67.5L95.0814 72.5L96 70");
            opacity:1
          }
          54.5% {
            d:path("M89.5205 70L90.3304 72.5L91.1404 67.5L91.9503 72.5L92.7602 67.5L93.5702 72.5L94.3801 67.5L95.1901 72.5L96 70");
            opacity:1
          }
          55% {
            d:path("M90.3161 70L91.0266 72.5L91.7371 67.5L92.4476 72.5L93.158 67.5L93.8685 72.5L94.579 67.5L95.2895 72.5L96 70");
            opacity:1
          }
          55.5% {
            d:path("M91.0362 70L91.6566 72.5L92.2771 67.5L92.8976 72.5L93.5181 67.5L94.1386 72.5L94.759 67.5L95.3795 72.5L96 70");
            opacity:1
          }
          56% {
            d:path("M91.6819 70L92.2217 72.5L92.7615 67.5L93.3012 72.5L93.841 67.5L94.3807 72.5L94.9205 67.5L95.4602 72.5L96 70");
            opacity:1
          }
          56.5% {
            d:path("M92.2567 70L92.7246 72.5L93.1925 67.5L93.6604 72.5L94.1284 67.5L94.5963 72.5L95.0642 67.5L95.5321 72.5L96 70");
            opacity:1
          }
          57% {
            d:path("M92.765 70L93.1694 72.5L93.5737 67.5L93.9781 72.5L94.3825 67.5L94.7869 72.5L95.1912 67.5L95.5956 72.5L96 70");
            opacity:1
          }
          57.5% {
            d:path("M93.212 70L93.5605 72.5L93.909 67.5L94.2575 72.5L94.606 67.5L94.9545 72.5L95.303 67.5L95.6515 72.5L96 70");
            opacity:1
          }
          58% {
            d:path("M93.6032 70L93.9028 72.5L94.2024 67.5L94.502 72.5L94.8016 67.5L95.1012 72.5L95.4008 67.5L95.7004 72.5L96 70");
            opacity:1
          }
          58.5% {
            d:path("M93.9443 70L94.2012 72.5L94.4582 67.5L94.7152 72.5L94.9721 67.5L95.2291 72.5L95.4861 67.5L95.743 72.5L96 70");
            opacity:1
          }
          59% {
            d:path("M94.2404 70L94.4603 72.5L94.6803 67.5L94.9002 72.5L95.1202 67.5L95.3401 72.5L95.5601 67.5L95.78 72.5L96 70");
            opacity:1
          }
          59.5% {
            d:path("M94.4967 70L94.6846 72.5L94.8725 67.5L95.0604 72.5L95.2484 67.5L95.4363 72.5L95.6242 67.5L95.8121 72.5L96 70");
            opacity:1
          }
          60% {
            d:path("M94.7179 70L94.8782 72.5L95.0384 67.5L95.1987 72.5L95.359 67.5L95.5192 72.5L95.6795 67.5L95.8397 72.5L96 70");
            opacity:1
          }
          60.5% {
            d:path("M94.9083 70L95.0448 72.5L95.1813 67.5L95.3177 72.5L95.4542 67.5L95.5906 72.5L95.7271 67.5L95.8635 72.5L96 70");
            opacity:1
          }
          61% {
            d:path("M95.0719 70L95.1879 72.5L95.3039 67.5L95.4199 72.5L95.5359 67.5L95.6519 72.5L95.768 67.5L95.884 72.5L96 70");
            opacity:1
          }
          61.5% {
            d:path("M95.212 70L95.3105 72.5L95.409 67.5L95.5075 72.5L95.606 67.5L95.7045 72.5L95.803 67.5L95.9015 72.5L96 70");
            opacity:1
          }
          62% {
            d:path("M95.3318 70L95.4153 72.5L95.4988 67.5L95.5823 72.5L95.6659 67.5L95.7494 72.5L95.8329 67.5L95.9165 72.5L96 70");
            opacity:1
          }
          62.5% {
            d:path("M95.434 70L95.5048 72.5L95.5755 67.5L95.6463 72.5L95.717 67.5L95.7878 72.5L95.8585 67.5L95.9293 72.5L96 70");
            opacity:1
          }
          63% {
            d:path("M95.5212 70L95.581 72.5L95.6409 67.5L95.7007 72.5L95.7606 67.5L95.8204 72.5L95.8803 67.5L95.9401 72.5L96 70");
            opacity:1
          }
          63.5% {
            d:path("M95.5953 70L95.6459 72.5L95.6965 67.5L95.7471 72.5L95.7977 67.5L95.8482 72.5L95.8988 67.5L95.9494 72.5L96 70");
            opacity:1
          }
          64% {
            d:path("M95.6583 70L95.701 72.5L95.7437 67.5L95.7865 72.5L95.8292 67.5L95.8719 72.5L95.9146 67.5L95.9573 72.5L96 70");
            opacity:1
          }
          64.5% {
            d:path("M95.7118 70L95.7478 72.5L95.7838 67.5L95.8199 72.5L95.8559 67.5L95.8919 72.5L95.9279 67.5L95.964 72.5L96 70");
            opacity:1
          }
          65% {
            d:path("M95.7571 70L95.7875 72.5L95.8178 67.5L95.8482 72.5L95.8785 67.5L95.9089 72.5L95.9393 67.5L95.9696 72.5L96 70");
            opacity:1
          }
          65.5% {
            d:path("M95.7954 70L95.821 72.5L95.8466 67.5L95.8721 72.5L95.8977 67.5L95.9233 72.5L95.9489 67.5L95.9744 72.5L96 70");
            opacity:1
          }
          66% {
            d:path("M95.8279 70L95.8494 72.5L95.8709 67.5L95.8924 72.5L95.9139 67.5L95.9354 72.5L95.957 67.5L95.9785 72.5L96 70");
            opacity:1
          }
          66.5% {
            d:path("M95.8553 70L95.8734 72.5L95.8914 67.5L95.9095 72.5L95.9276 67.5L95.9457 72.5L95.9638 67.5L95.9819 72.5L96 70");
            opacity:0
          }
          67% {
            d:path("M95.8784 70L95.8936 72.5L95.9088 67.5L95.924 72.5L95.9392 67.5L95.9544 72.5L95.9696 67.5L95.9848 72.5L96 70");
            opacity:0
          }
          67.5% {
            d:path("M95.8979 70L95.9106 72.5L95.9234 67.5L95.9362 72.5L95.9489 67.5L95.9617 72.5L95.9745 67.5L95.9872 72.5L96 70");
            opacity:0
          }
          68% {
            d:path("M95.9143 70L95.925 72.5L95.9357 67.5L95.9464 72.5L95.9571 67.5L95.9679 72.5L95.9786 67.5L95.9893 72.5L96 70");
            opacity:0
          }
          68.5% {
            d:path("M95.9281 70L95.9371 72.5L95.9461 67.5L95.9551 72.5L95.9641 67.5L95.973 72.5L95.982 67.5L95.991 72.5L96 70");
            opacity:0
          }
          69% {
            d:path("M95.9397 70L95.9473 72.5L95.9548 67.5L95.9623 72.5L95.9699 67.5L95.9774 72.5L95.9849 67.5L95.9925 72.5L96 70");
            opacity:0
          }
          69.5% {
            d:path("M95.9495 70L95.9558 72.5L95.9621 67.5L95.9685 72.5L95.9748 67.5L95.9811 72.5L95.9874 67.5L95.9937 72.5L96 70");
            opacity:0
          }
          70% {
            d:path("M95.9577 70L95.963 72.5L95.9683 67.5L95.9736 72.5L95.9789 67.5L95.9841 72.5L95.9894 67.5L95.9947 72.5L96 70");
            opacity:0
          }
          70.5% {
            d:path("M95.9646 70L95.969 72.5L95.9735 67.5L95.9779 72.5L95.9823 67.5L95.9867 72.5L95.9912 67.5L95.9956 72.5L96 70");
            opacity:0
          }
          71% {
            d:path("M95.9704 70L95.9741 72.5L95.9778 67.5L95.9815 72.5L95.9852 67.5L95.9889 72.5L95.9926 67.5L95.9963 72.5L96 70");
            opacity:0
          }
          71.5% {
            d:path("M95.9753 70L95.9783 72.5L95.9814 67.5L95.9845 72.5L95.9876 67.5L95.9907 72.5L95.9938 67.5L95.9969 72.5L96 70");
            opacity:0
          }
          72% {
            d:path("M95.9793 70L95.9819 72.5L95.9845 67.5L95.9871 72.5L95.9897 67.5L95.9922 72.5L95.9948 67.5L95.9974 72.5L96 70");
            opacity:0
          }
          72.5% {
            d:path("M95.9827 70L95.9849 72.5L95.987 67.5L95.9892 72.5L95.9914 67.5L95.9935 72.5L95.9957 67.5L95.9978 72.5L96 70");
            opacity:0
          }
          73% {
            d:path("M95.9856 70L95.9874 72.5L95.9892 67.5L95.991 72.5L95.9928 67.5L95.9946 72.5L95.9964 67.5L95.9982 72.5L96 70");
            opacity:0
          }
          73.5% {
            d:path("M95.988 70L95.9895 72.5L95.991 67.5L95.9925 72.5L95.994 67.5L95.9955 72.5L95.997 67.5L95.9985 72.5L96 70");
            opacity:0
          }
          74% {
            d:path("M95.9899 70L95.9912 72.5L95.9925 67.5L95.9937 72.5L95.995 67.5L95.9962 72.5L95.9975 67.5L95.9987 72.5L96 70");
            opacity:0
          }
          74.5% {
            d:path("M95.9916 70L95.9927 72.5L95.9937 67.5L95.9948 72.5L95.9958 67.5L95.9969 72.5L95.9979 67.5L95.999 72.5L96 70");
            opacity:0
          }
          75% {
            d:path("M95.993 70L95.9939 72.5L95.9948 67.5L95.9956 72.5L95.9965 67.5L95.9974 72.5L95.9983 67.5L95.9991 72.5L96 70");
            opacity:0
          }
          75.5% {
            d:path("M95.9942 70L95.9949 72.5L95.9956 67.5L95.9964 72.5L95.9971 67.5L95.9978 72.5L95.9985 67.5L95.9993 72.5L96 70");
            opacity:0
          }
          76% {
            d:path("M95.9951 70L95.9958 72.5L95.9964 67.5L95.997 72.5L95.9976 67.5L95.9982 72.5L95.9988 67.5L95.9994 72.5L96 70");
            opacity:0
          }
          76.5% {
            d:path("M95.996 70L95.9965 72.5L95.997 67.5L95.9975 72.5L95.998 67.5L95.9985 72.5L95.999 67.5L95.9995 72.5L96 70");
            opacity:0
          }
          77% {
            d:path("M95.9966 70L95.9971 72.5L95.9975 67.5L95.9979 72.5L95.9983 67.5L95.9987 72.5L95.9992 67.5L95.9996 72.5L96 70");
            opacity:0
          }
          77.5% {
            d:path("M95.9972 70L95.9975 72.5L95.9979 67.5L95.9982 72.5L95.9986 67.5L95.9989 72.5L95.9993 67.5L95.9996 72.5L96 70");
            opacity:0
          }
          78% {
            d:path("M95.9977 70L95.998 72.5L95.9982 67.5L95.9985 72.5L95.9988 67.5L95.9991 72.5L95.9994 67.5L95.9997 72.5L96 70");
            opacity:0
          }
          78.5% {
            d:path("M95.9981 70L95.9983 72.5L95.9985 67.5L95.9988 72.5L95.999 67.5L95.9993 72.5L95.9995 67.5L95.9998 72.5L96 70");
            opacity:0
          }
          79% {
            d:path("M95.9984 70L95.9986 72.5L95.9988 67.5L95.999 72.5L95.9992 67.5L95.9994 72.5L95.9996 67.5L95.9998 72.5L96 70");
            opacity:0
          }
          79.5% {
            d:path("M95.9987 70L95.9988 72.5L95.999 67.5L95.9992 72.5L95.9993 67.5L95.9995 72.5L95.9997 67.5L95.9998 72.5L96 70");
            opacity:0
          }
          80% {
            d:path("M95.9989 70L95.999 72.5L95.9992 67.5L95.9993 72.5L95.9994 67.5L95.9996 72.5L95.9997 67.5L95.9999 72.5L96 70");
            opacity:0
          }
          80.5% {
            d:path("M95.9991 70L95.9992 72.5L95.9993 67.5L95.9994 72.5L95.9995 67.5L95.9997 72.5L95.9998 67.5L95.9999 72.5L96 70");
            opacity:0
          }
          81% {
            d:path("M95.9992 70L95.9993 72.5L95.9994 67.5L95.9995 72.5L95.9996 67.5L95.9997 72.5L95.9998 67.5L95.9999 72.5L96 70");
            opacity:0
          }
          81.5% {
            d:path("M95.9994 70L95.9994 72.5L95.9995 67.5L95.9996 72.5L95.9997 67.5L95.9998 72.5L95.9998 67.5L95.9999 72.5L96 70");
            opacity:0
          }
          82% {
            d:path("M95.9995 70L95.9995 72.5L95.9996 67.5L95.9997 72.5L95.9997 67.5L95.9998 72.5L95.9999 67.5L95.9999 72.5L96 70");
            opacity:0
          }
          82.5% {
            d:path("M95.9996 70L95.9996 72.5L95.9997 67.5L95.9997 72.5L95.9998 67.5L95.9998 72.5L95.9999 67.5L95.9999 72.5L96 70");
            opacity:0
          }
          83% {
            d:path("M95.9996 70L95.9997 72.5L95.9997 67.5L95.9998 72.5L95.9998 67.5L95.9999 72.5L95.9999 67.5L96 72.5L96 70");
            opacity:0
          }
          83.5% {
            d:path("M95.9997 70L95.9997 72.5L95.9998 67.5L95.9998 72.5L95.9998 67.5L95.9999 72.5L95.9999 67.5L96 72.5L96 70");
            opacity:0
          }
          84% {
            d:path("M95.9997 70L95.9998 72.5L95.9998 67.5L95.9998 72.5L95.9999 67.5L95.9999 72.5L95.9999 67.5L96 72.5L96 70");
            opacity:0
          }
          84.5% {
            d:path("M95.9998 70L95.9998 72.5L95.9998 67.5L95.9999 72.5L95.9999 67.5L95.9999 72.5L95.9999 67.5L96 72.5L96 70");
            opacity:0
          }
          85% {
            d:path("M95.9998 70L95.9998 72.5L95.9999 67.5L95.9999 72.5L95.9999 67.5L95.9999 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          85.5% {
            d:path("M95.9999 70L95.9999 72.5L95.9999 67.5L95.9999 72.5L95.9999 67.5L95.9999 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          86% {
            d:path("M95.9999 70L95.9999 72.5L95.9999 67.5L95.9999 72.5L95.9999 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          86.5% {
            d:path("M95.9999 70L95.9999 72.5L95.9999 67.5L95.9999 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          87% {
            d:path("M95.9999 70L95.9999 72.5L95.9999 67.5L95.9999 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          87.5% {
            d:path("M95.9999 70L95.9999 72.5L95.9999 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          88% {
            d:path("M95.9999 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          88.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          89% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          89.5% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          90% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          96% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
          96.01%,100% {
            d:path("M96 70L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 67.5L96 72.5L96 70");
            opacity:0
          }
        }
        .force {
          ;
          animation:force 10s linear infinite
        }
        @keyframes force {
          0% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          0.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          1% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          1.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          2% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          2.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          3% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          3.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          4% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          4.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          5.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          6% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          6.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          7% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          7.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          8% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          8.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          9% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          9.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          10% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          10.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          11% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          11.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          12% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          12.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          13% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          13.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          14% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          14.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          15% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          15.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          16% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          16.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          17% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          17.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          18% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          18.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          19% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          19.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          20% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          20.5% {
            d:path("M110.7547 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          21% {
            d:path("M110.1383 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          21.5% {
            d:path("M109.2934 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          22% {
            d:path("M108.3231 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          22.5% {
            d:path("M107.3006 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          23% {
            d:path("M106.2768 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          23.5% {
            d:path("M105.2857 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          24% {
            d:path("M104.349 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          24.5% {
            d:path("M103.4797 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          25% {
            d:path("M102.6841 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          25.5% {
            d:path("M101.964 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          26% {
            d:path("M101.3182 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          26.5% {
            d:path("M100.7434 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          27% {
            d:path("M100.2351 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          27.5% {
            d:path("M99.7881 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          28% {
            d:path("M99.3968 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          28.5% {
            d:path("M99.0558 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          29% {
            d:path("M98.7596 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          29.5% {
            d:path("M98.5033 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          30% {
            d:path("M98.2821 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          30.5% {
            d:path("M98.0917 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          31% {
            d:path("M97.9282 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          31.5% {
            d:path("M97.7881 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          32% {
            d:path("M97.6683 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          32.5% {
            d:path("M97.566 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          33% {
            d:path("M97.4788 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          33.5% {
            d:path("M97.4047 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          34% {
            d:path("M97.3417 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          34.5% {
            d:path("M97.2882 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          35% {
            d:path("M97.2429 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          35.5% {
            d:path("M97.2046 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          36% {
            d:path("M97.1721 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          36.5% {
            d:path("M97.1447 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          37% {
            d:path("M97.1216 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          37.5% {
            d:path("M97.1021 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          38% {
            d:path("M97.0857 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          38.5% {
            d:path("M97.0719 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          39% {
            d:path("M97.0603 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          39.5% {
            d:path("M97.0505 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          40% {
            d:path("M97.0423 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          40.5% {
            d:path("M97.0354 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          41% {
            d:path("M97.0296 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          41.5% {
            d:path("M97.0247 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          42% {
            d:path("M97.0207 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          42.5% {
            d:path("M97.0173 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          43% {
            d:path("M97.0144 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          43.5% {
            d:path("M97.012 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          44% {
            d:path("M97.0101 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          44.5% {
            d:path("M97.0084 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          45% {
            d:path("M97.007 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          45.5% {
            d:path("M97.0058 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          46% {
            d:path("M97.0049 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          46.5% {
            d:path("M97.004 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          47% {
            d:path("M97.0034 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          47.5% {
            d:path("M97.0028 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          48% {
            d:path("M97.0023 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          48.5% {
            d:path("M97.0019 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          49% {
            d:path("M97.0016 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          49.5% {
            d:path("M97.0013 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          50% {
            d:path("M97.0011 54h-14m3-3-3 3 3 3");
            opacity:1
          }
          50.5% {
            d:path("M97.2463 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          51% {
            d:path("M97.8625 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          51.5% {
            d:path("M98.7073 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          52% {
            d:path("M99.6774 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          52.5% {
            d:path("M100.6998 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          53% {
            d:path("M101.7236 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          53.5% {
            d:path("M102.7146 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          54% {
            d:path("M103.6512 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          54.5% {
            d:path("M104.5205 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          55% {
            d:path("M105.3161 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          55.5% {
            d:path("M106.0362 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          56% {
            d:path("M106.6819 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          56.5% {
            d:path("M107.2567 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          57% {
            d:path("M107.765 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          57.5% {
            d:path("M108.212 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          58% {
            d:path("M108.6032 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          58.5% {
            d:path("M108.9443 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          59% {
            d:path("M109.2404 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          59.5% {
            d:path("M109.4967 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          60% {
            d:path("M109.7179 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          60.5% {
            d:path("M109.9083 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          61% {
            d:path("M110.0719 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          61.5% {
            d:path("M110.212 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          62% {
            d:path("M110.3318 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          62.5% {
            d:path("M110.434 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          63% {
            d:path("M110.5212 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          63.5% {
            d:path("M110.5953 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          64% {
            d:path("M110.6583 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          64.5% {
            d:path("M110.7118 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          65% {
            d:path("M110.7571 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          65.5% {
            d:path("M110.7954 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          66% {
            d:path("M110.8279 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          66.5% {
            d:path("M110.8553 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          67% {
            d:path("M110.8784 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          67.5% {
            d:path("M110.8979 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          68% {
            d:path("M110.9143 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          68.5% {
            d:path("M110.9281 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          69% {
            d:path("M110.9397 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          69.5% {
            d:path("M110.9495 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          70% {
            d:path("M110.9577 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          70.5% {
            d:path("M110.9646 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          71% {
            d:path("M110.9704 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          71.5% {
            d:path("M110.9753 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          72% {
            d:path("M110.9793 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          72.5% {
            d:path("M110.9827 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          73% {
            d:path("M110.9856 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          73.5% {
            d:path("M110.988 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          74% {
            d:path("M110.9899 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          74.5% {
            d:path("M110.9916 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          75% {
            d:path("M110.993 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          75.5% {
            d:path("M110.9942 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          76% {
            d:path("M110.9951 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          76.5% {
            d:path("M110.996 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          77% {
            d:path("M110.9966 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          77.5% {
            d:path("M110.9972 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          78% {
            d:path("M110.9977 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          78.5% {
            d:path("M110.9981 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          79% {
            d:path("M110.9984 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          79.5% {
            d:path("M110.9987 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          80% {
            d:path("M110.9989 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          80.5% {
            d:path("M110.9991 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          81% {
            d:path("M110.9992 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          81.5% {
            d:path("M110.9994 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          82% {
            d:path("M110.9995 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          82.5% {
            d:path("M110.9996 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          83% {
            d:path("M110.9996 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          83.5% {
            d:path("M110.9997 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          84% {
            d:path("M110.9997 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          84.5% {
            d:path("M110.9998 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          85% {
            d:path("M110.9998 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          85.5% {
            d:path("M110.9999 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          86% {
            d:path("M110.9999 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          86.5% {
            d:path("M110.9999 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          87% {
            d:path("M110.9999 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          87.5% {
            d:path("M110.9999 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          88% {
            d:path("M110.9999 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          88.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          89% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          89.5% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          90% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          96% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
          }
          96.01%,100% {
            d:path("M111 54h-14m3-3-3 3 3 3");
            opacity:0
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Compliant Impedance Control">
        <path class="ink muted" d="M17 118H33M25 112V118"/>
        <circle class="ink muted" stroke-dasharray="2 3" cx="96" cy="70" r="6"/>
        <g class="cycle">
          <path class="ink cool spring" style="fill:none" stroke-dasharray="2 2" d="M82.007 70L83.7561 72.5L85.5052 67.5L87.2544 72.5L89.0035 67.5L90.7526 72.5L92.5017 67.5L94.2509 72.5L96 70"/>
          <g transform="translate(25 112)">
            <g class="shoulder">
              <path class="ink" style="stroke-width:4" d="M0 0H47"/>
              <circle class="warm" r="4"/>
              <g transform="translate(47 0)">
                <g class="elbow">
                  <path class="ink" style="stroke-width:4" d="M0 0H42"/>
                  <circle class="warm" r="4"/>
                  <circle class="solid" cx="42" cy="0" r="4"/>
                </g>
              </g>
            </g>
          </g>
          <rect class="ink paper pad" x="86.007" y="64" width="10" height="12" rx="1"/>
          <path class="ink rose force" style="fill:none" d="M97.007 54h-14m3-3-3 3 3 3"/>
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

if (!customElements.get("concept-compliant-impedance-control")) {
  customElements.define("concept-compliant-impedance-control", ConceptCompliantImpedanceControl);
}
