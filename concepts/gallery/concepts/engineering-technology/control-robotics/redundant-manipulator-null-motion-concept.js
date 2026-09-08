// Redundant Manipulator Null Motion. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptRedundantManipulatorNullMotion extends HTMLElement {
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
        .j0 {
          transform:rotate(-10deg);
          animation:j0 10s linear infinite
        }
        @keyframes j0 {
          0% {
            transform:rotate(-65deg)
          }
          0.5% {
            transform:rotate(-64.9864deg)
          }
          1% {
            transform:rotate(-64.9457deg)
          }
          1.5% {
            transform:rotate(-64.878deg)
          }
          2% {
            transform:rotate(-64.7832deg)
          }
          2.5% {
            transform:rotate(-64.6614deg)
          }
          3% {
            transform:rotate(-64.5129deg)
          }
          3.5% {
            transform:rotate(-64.3377deg)
          }
          4% {
            transform:rotate(-64.136deg)
          }
          4.5% {
            transform:rotate(-63.9081deg)
          }
          5% {
            transform:rotate(-63.6541deg)
          }
          5.5% {
            transform:rotate(-63.3742deg)
          }
          6% {
            transform:rotate(-63.0689deg)
          }
          6.5% {
            transform:rotate(-62.7383deg)
          }
          7% {
            transform:rotate(-62.3827deg)
          }
          7.5% {
            transform:rotate(-62.0027deg)
          }
          8% {
            transform:rotate(-61.5984deg)
          }
          8.5% {
            transform:rotate(-61.1704deg)
          }
          9% {
            transform:rotate(-60.719deg)
          }
          9.5% {
            transform:rotate(-60.2447deg)
          }
          10% {
            transform:rotate(-59.748deg)
          }
          10.5% {
            transform:rotate(-59.2293deg)
          }
          11% {
            transform:rotate(-58.6891deg)
          }
          11.5% {
            transform:rotate(-58.1281deg)
          }
          12% {
            transform:rotate(-57.5466deg)
          }
          12.5% {
            transform:rotate(-56.9454deg)
          }
          13% {
            transform:rotate(-56.325deg)
          }
          13.5% {
            transform:rotate(-55.6861deg)
          }
          14% {
            transform:rotate(-55.0292deg)
          }
          14.5% {
            transform:rotate(-54.3549deg)
          }
          15% {
            transform:rotate(-53.6641deg)
          }
          15.5% {
            transform:rotate(-52.9573deg)
          }
          16% {
            transform:rotate(-52.2352deg)
          }
          16.5% {
            transform:rotate(-51.4986deg)
          }
          17% {
            transform:rotate(-50.7482deg)
          }
          17.5% {
            transform:rotate(-49.9847deg)
          }
          18% {
            transform:rotate(-49.2089deg)
          }
          18.5% {
            transform:rotate(-48.4216deg)
          }
          19% {
            transform:rotate(-47.6234deg)
          }
          19.5% {
            transform:rotate(-46.8153deg)
          }
          20% {
            transform:rotate(-45.998deg)
          }
          20.5% {
            transform:rotate(-45.1723deg)
          }
          21% {
            transform:rotate(-44.339deg)
          }
          21.5% {
            transform:rotate(-43.4989deg)
          }
          22% {
            transform:rotate(-42.653deg)
          }
          22.5% {
            transform:rotate(-41.8019deg)
          }
          23% {
            transform:rotate(-40.9467deg)
          }
          23.5% {
            transform:rotate(-40.088deg)
          }
          24% {
            transform:rotate(-39.2267deg)
          }
          24.5% {
            transform:rotate(-38.3638deg)
          }
          25% {
            transform:rotate(-37.5deg)
          }
          25.5% {
            transform:rotate(-36.6362deg)
          }
          26% {
            transform:rotate(-35.7733deg)
          }
          26.5% {
            transform:rotate(-34.912deg)
          }
          27% {
            transform:rotate(-34.0533deg)
          }
          27.5% {
            transform:rotate(-33.1981deg)
          }
          28% {
            transform:rotate(-32.347deg)
          }
          28.5% {
            transform:rotate(-31.5011deg)
          }
          29% {
            transform:rotate(-30.661deg)
          }
          29.5% {
            transform:rotate(-29.8277deg)
          }
          30% {
            transform:rotate(-29.002deg)
          }
          30.5% {
            transform:rotate(-28.1847deg)
          }
          31% {
            transform:rotate(-27.3766deg)
          }
          31.5% {
            transform:rotate(-26.5784deg)
          }
          32% {
            transform:rotate(-25.7911deg)
          }
          32.5% {
            transform:rotate(-25.0153deg)
          }
          33% {
            transform:rotate(-24.2518deg)
          }
          33.5% {
            transform:rotate(-23.5014deg)
          }
          34% {
            transform:rotate(-22.7648deg)
          }
          34.5% {
            transform:rotate(-22.0427deg)
          }
          35% {
            transform:rotate(-21.3359deg)
          }
          35.5% {
            transform:rotate(-20.6451deg)
          }
          36% {
            transform:rotate(-19.9708deg)
          }
          36.5% {
            transform:rotate(-19.3139deg)
          }
          37% {
            transform:rotate(-18.675deg)
          }
          37.5% {
            transform:rotate(-18.0546deg)
          }
          38% {
            transform:rotate(-17.4534deg)
          }
          38.5% {
            transform:rotate(-16.8719deg)
          }
          39% {
            transform:rotate(-16.3109deg)
          }
          39.5% {
            transform:rotate(-15.7707deg)
          }
          40% {
            transform:rotate(-15.252deg)
          }
          40.5% {
            transform:rotate(-14.7553deg)
          }
          41% {
            transform:rotate(-14.281deg)
          }
          41.5% {
            transform:rotate(-13.8296deg)
          }
          42% {
            transform:rotate(-13.4016deg)
          }
          42.5% {
            transform:rotate(-12.9973deg)
          }
          43% {
            transform:rotate(-12.6173deg)
          }
          43.5% {
            transform:rotate(-12.2617deg)
          }
          44% {
            transform:rotate(-11.9311deg)
          }
          44.5% {
            transform:rotate(-11.6258deg)
          }
          45% {
            transform:rotate(-11.3459deg)
          }
          45.5% {
            transform:rotate(-11.0919deg)
          }
          46% {
            transform:rotate(-10.864deg)
          }
          46.5% {
            transform:rotate(-10.6623deg)
          }
          47% {
            transform:rotate(-10.4871deg)
          }
          47.5% {
            transform:rotate(-10.3386deg)
          }
          48% {
            transform:rotate(-10.2168deg)
          }
          48.5% {
            transform:rotate(-10.122deg)
          }
          49% {
            transform:rotate(-10.0543deg)
          }
          49.5% {
            transform:rotate(-10.0136deg)
          }
          50% {
            transform:rotate(-10deg)
          }
          50.5% {
            transform:rotate(-10.0136deg)
          }
          51% {
            transform:rotate(-10.0543deg)
          }
          51.5% {
            transform:rotate(-10.122deg)
          }
          52% {
            transform:rotate(-10.2168deg)
          }
          52.5% {
            transform:rotate(-10.3386deg)
          }
          53% {
            transform:rotate(-10.4871deg)
          }
          53.5% {
            transform:rotate(-10.6623deg)
          }
          54% {
            transform:rotate(-10.864deg)
          }
          54.5% {
            transform:rotate(-11.0919deg)
          }
          55% {
            transform:rotate(-11.3459deg)
          }
          55.5% {
            transform:rotate(-11.6258deg)
          }
          56% {
            transform:rotate(-11.9311deg)
          }
          56.5% {
            transform:rotate(-12.2617deg)
          }
          57% {
            transform:rotate(-12.6173deg)
          }
          57.5% {
            transform:rotate(-12.9973deg)
          }
          58% {
            transform:rotate(-13.4016deg)
          }
          58.5% {
            transform:rotate(-13.8296deg)
          }
          59% {
            transform:rotate(-14.281deg)
          }
          59.5% {
            transform:rotate(-14.7553deg)
          }
          60% {
            transform:rotate(-15.252deg)
          }
          60.5% {
            transform:rotate(-15.7707deg)
          }
          61% {
            transform:rotate(-16.3109deg)
          }
          61.5% {
            transform:rotate(-16.8719deg)
          }
          62% {
            transform:rotate(-17.4534deg)
          }
          62.5% {
            transform:rotate(-18.0546deg)
          }
          63% {
            transform:rotate(-18.675deg)
          }
          63.5% {
            transform:rotate(-19.3139deg)
          }
          64% {
            transform:rotate(-19.9708deg)
          }
          64.5% {
            transform:rotate(-20.6451deg)
          }
          65% {
            transform:rotate(-21.3359deg)
          }
          65.5% {
            transform:rotate(-22.0427deg)
          }
          66% {
            transform:rotate(-22.7648deg)
          }
          66.5% {
            transform:rotate(-23.5014deg)
          }
          67% {
            transform:rotate(-24.2518deg)
          }
          67.5% {
            transform:rotate(-25.0153deg)
          }
          68% {
            transform:rotate(-25.7911deg)
          }
          68.5% {
            transform:rotate(-26.5784deg)
          }
          69% {
            transform:rotate(-27.3766deg)
          }
          69.5% {
            transform:rotate(-28.1847deg)
          }
          70% {
            transform:rotate(-29.002deg)
          }
          70.5% {
            transform:rotate(-29.8277deg)
          }
          71% {
            transform:rotate(-30.661deg)
          }
          71.5% {
            transform:rotate(-31.5011deg)
          }
          72% {
            transform:rotate(-32.347deg)
          }
          72.5% {
            transform:rotate(-33.1981deg)
          }
          73% {
            transform:rotate(-34.0533deg)
          }
          73.5% {
            transform:rotate(-34.912deg)
          }
          74% {
            transform:rotate(-35.7733deg)
          }
          74.5% {
            transform:rotate(-36.6362deg)
          }
          75% {
            transform:rotate(-37.5deg)
          }
          75.5% {
            transform:rotate(-38.3638deg)
          }
          76% {
            transform:rotate(-39.2267deg)
          }
          76.5% {
            transform:rotate(-40.088deg)
          }
          77% {
            transform:rotate(-40.9467deg)
          }
          77.5% {
            transform:rotate(-41.8019deg)
          }
          78% {
            transform:rotate(-42.653deg)
          }
          78.5% {
            transform:rotate(-43.4989deg)
          }
          79% {
            transform:rotate(-44.339deg)
          }
          79.5% {
            transform:rotate(-45.1723deg)
          }
          80% {
            transform:rotate(-45.998deg)
          }
          80.5% {
            transform:rotate(-46.8153deg)
          }
          81% {
            transform:rotate(-47.6234deg)
          }
          81.5% {
            transform:rotate(-48.4216deg)
          }
          82% {
            transform:rotate(-49.2089deg)
          }
          82.5% {
            transform:rotate(-49.9847deg)
          }
          83% {
            transform:rotate(-50.7482deg)
          }
          83.5% {
            transform:rotate(-51.4986deg)
          }
          84% {
            transform:rotate(-52.2352deg)
          }
          84.5% {
            transform:rotate(-52.9573deg)
          }
          85% {
            transform:rotate(-53.6641deg)
          }
          85.5% {
            transform:rotate(-54.3549deg)
          }
          86% {
            transform:rotate(-55.0292deg)
          }
          86.5% {
            transform:rotate(-55.6861deg)
          }
          87% {
            transform:rotate(-56.325deg)
          }
          87.5% {
            transform:rotate(-56.9454deg)
          }
          88% {
            transform:rotate(-57.5466deg)
          }
          88.5% {
            transform:rotate(-58.1281deg)
          }
          89% {
            transform:rotate(-58.6891deg)
          }
          89.5% {
            transform:rotate(-59.2293deg)
          }
          90% {
            transform:rotate(-59.748deg)
          }
          90.5% {
            transform:rotate(-60.2447deg)
          }
          91% {
            transform:rotate(-60.719deg)
          }
          91.5% {
            transform:rotate(-61.1704deg)
          }
          92% {
            transform:rotate(-61.5984deg)
          }
          92.5% {
            transform:rotate(-62.0027deg)
          }
          93% {
            transform:rotate(-62.3827deg)
          }
          93.5% {
            transform:rotate(-62.7383deg)
          }
          94% {
            transform:rotate(-63.0689deg)
          }
          94.5% {
            transform:rotate(-63.3742deg)
          }
          95% {
            transform:rotate(-63.6541deg)
          }
          95.5% {
            transform:rotate(-63.9081deg)
          }
          96% {
            transform:rotate(-64.136deg)
          }
          96.5% {
            transform:rotate(-64.3377deg)
          }
          97% {
            transform:rotate(-64.5129deg)
          }
          97.5% {
            transform:rotate(-64.6614deg)
          }
          98% {
            transform:rotate(-64.7832deg)
          }
          98.5% {
            transform:rotate(-64.878deg)
          }
          99% {
            transform:rotate(-64.9457deg)
          }
          99.5% {
            transform:rotate(-64.9864deg)
          }
          100% {
            transform:rotate(-65deg)
          }
        }
        .j1 {
          transform:rotate(-51.5641deg);
          animation:j1 10s linear infinite
        }
        @keyframes j1 {
          0% {
            transform:rotate(48.7276deg)
          }
          0.5% {
            transform:rotate(48.6692deg)
          }
          1% {
            transform:rotate(48.4959deg)
          }
          1.5% {
            transform:rotate(48.2124deg)
          }
          2% {
            transform:rotate(47.8256deg)
          }
          2.5% {
            transform:rotate(47.344deg)
          }
          3% {
            transform:rotate(46.7761deg)
          }
          3.5% {
            transform:rotate(46.1301deg)
          }
          4% {
            transform:rotate(45.4136deg)
          }
          4.5% {
            transform:rotate(44.6334deg)
          }
          5% {
            transform:rotate(43.795deg)
          }
          5.5% {
            transform:rotate(42.9036deg)
          }
          6% {
            transform:rotate(41.9631deg)
          }
          6.5% {
            transform:rotate(40.9773deg)
          }
          7% {
            transform:rotate(39.9492deg)
          }
          7.5% {
            transform:rotate(38.8814deg)
          }
          8% {
            transform:rotate(37.7763deg)
          }
          8.5% {
            transform:rotate(36.636deg)
          }
          9% {
            transform:rotate(35.4623deg)
          }
          9.5% {
            transform:rotate(34.2569deg)
          }
          10% {
            transform:rotate(33.0214deg)
          }
          10.5% {
            transform:rotate(31.7572deg)
          }
          11% {
            transform:rotate(30.4657deg)
          }
          11.5% {
            transform:rotate(29.1483deg)
          }
          12% {
            transform:rotate(27.8062deg)
          }
          12.5% {
            transform:rotate(26.4406deg)
          }
          13% {
            transform:rotate(25.0529deg)
          }
          13.5% {
            transform:rotate(23.6442deg)
          }
          14% {
            transform:rotate(22.2158deg)
          }
          14.5% {
            transform:rotate(20.7688deg)
          }
          15% {
            transform:rotate(19.3046deg)
          }
          15.5% {
            transform:rotate(17.8243deg)
          }
          16% {
            transform:rotate(16.3293deg)
          }
          16.5% {
            transform:rotate(14.8208deg)
          }
          17% {
            transform:rotate(13.3001deg)
          }
          17.5% {
            transform:rotate(11.7686deg)
          }
          18% {
            transform:rotate(10.2276deg)
          }
          18.5% {
            transform:rotate(8.6785deg)
          }
          19% {
            transform:rotate(7.1227deg)
          }
          19.5% {
            transform:rotate(5.5616deg)
          }
          20% {
            transform:rotate(3.9968deg)
          }
          20.5% {
            transform:rotate(2.4297deg)
          }
          21% {
            transform:rotate(0.8617deg)
          }
          21.5% {
            transform:rotate(-0.7055deg)
          }
          22% {
            transform:rotate(-2.2704deg)
          }
          22.5% {
            transform:rotate(-3.8315deg)
          }
          23% {
            transform:rotate(-5.3872deg)
          }
          23.5% {
            transform:rotate(-6.9359deg)
          }
          24% {
            transform:rotate(-8.4761deg)
          }
          24.5% {
            transform:rotate(-10.0061deg)
          }
          25% {
            transform:rotate(-11.5244deg)
          }
          25.5% {
            transform:rotate(-13.0294deg)
          }
          26% {
            transform:rotate(-14.5196deg)
          }
          26.5% {
            transform:rotate(-15.9934deg)
          }
          27% {
            transform:rotate(-17.4494deg)
          }
          27.5% {
            transform:rotate(-18.886deg)
          }
          28% {
            transform:rotate(-20.3019deg)
          }
          28.5% {
            transform:rotate(-21.6956deg)
          }
          29% {
            transform:rotate(-23.0659deg)
          }
          29.5% {
            transform:rotate(-24.4114deg)
          }
          30% {
            transform:rotate(-25.7309deg)
          }
          30.5% {
            transform:rotate(-27.0233deg)
          }
          31% {
            transform:rotate(-28.2874deg)
          }
          31.5% {
            transform:rotate(-29.5222deg)
          }
          32% {
            transform:rotate(-30.7268deg)
          }
          32.5% {
            transform:rotate(-31.9003deg)
          }
          33% {
            transform:rotate(-33.0419deg)
          }
          33.5% {
            transform:rotate(-34.1509deg)
          }
          34% {
            transform:rotate(-35.2266deg)
          }
          34.5% {
            transform:rotate(-36.2684deg)
          }
          35% {
            transform:rotate(-37.2759deg)
          }
          35.5% {
            transform:rotate(-38.2487deg)
          }
          36% {
            transform:rotate(-39.1864deg)
          }
          36.5% {
            transform:rotate(-40.0888deg)
          }
          37% {
            transform:rotate(-40.9557deg)
          }
          37.5% {
            transform:rotate(-41.787deg)
          }
          38% {
            transform:rotate(-42.5826deg)
          }
          38.5% {
            transform:rotate(-43.3426deg)
          }
          39% {
            transform:rotate(-44.0669deg)
          }
          39.5% {
            transform:rotate(-44.7559deg)
          }
          40% {
            transform:rotate(-45.4096deg)
          }
          40.5% {
            transform:rotate(-46.0282deg)
          }
          41% {
            transform:rotate(-46.612deg)
          }
          41.5% {
            transform:rotate(-47.1614deg)
          }
          42% {
            transform:rotate(-47.6766deg)
          }
          42.5% {
            transform:rotate(-48.158deg)
          }
          43% {
            transform:rotate(-48.6059deg)
          }
          43.5% {
            transform:rotate(-49.0208deg)
          }
          44% {
            transform:rotate(-49.403deg)
          }
          44.5% {
            transform:rotate(-49.7529deg)
          }
          45% {
            transform:rotate(-50.0709deg)
          }
          45.5% {
            transform:rotate(-50.3573deg)
          }
          46% {
            transform:rotate(-50.6126deg)
          }
          46.5% {
            transform:rotate(-50.8369deg)
          }
          47% {
            transform:rotate(-51.0307deg)
          }
          47.5% {
            transform:rotate(-51.1942deg)
          }
          48% {
            transform:rotate(-51.3276deg)
          }
          48.5% {
            transform:rotate(-51.4312deg)
          }
          49% {
            transform:rotate(-51.5051deg)
          }
          49.5% {
            transform:rotate(-51.5493deg)
          }
          50% {
            transform:rotate(-51.5641deg)
          }
          50.5% {
            transform:rotate(-51.5493deg)
          }
          51% {
            transform:rotate(-51.5051deg)
          }
          51.5% {
            transform:rotate(-51.4312deg)
          }
          52% {
            transform:rotate(-51.3276deg)
          }
          52.5% {
            transform:rotate(-51.1942deg)
          }
          53% {
            transform:rotate(-51.0307deg)
          }
          53.5% {
            transform:rotate(-50.8369deg)
          }
          54% {
            transform:rotate(-50.6126deg)
          }
          54.5% {
            transform:rotate(-50.3573deg)
          }
          55% {
            transform:rotate(-50.0709deg)
          }
          55.5% {
            transform:rotate(-49.7529deg)
          }
          56% {
            transform:rotate(-49.403deg)
          }
          56.5% {
            transform:rotate(-49.0208deg)
          }
          57% {
            transform:rotate(-48.6059deg)
          }
          57.5% {
            transform:rotate(-48.158deg)
          }
          58% {
            transform:rotate(-47.6766deg)
          }
          58.5% {
            transform:rotate(-47.1614deg)
          }
          59% {
            transform:rotate(-46.612deg)
          }
          59.5% {
            transform:rotate(-46.0282deg)
          }
          60% {
            transform:rotate(-45.4096deg)
          }
          60.5% {
            transform:rotate(-44.7559deg)
          }
          61% {
            transform:rotate(-44.0669deg)
          }
          61.5% {
            transform:rotate(-43.3426deg)
          }
          62% {
            transform:rotate(-42.5826deg)
          }
          62.5% {
            transform:rotate(-41.787deg)
          }
          63% {
            transform:rotate(-40.9557deg)
          }
          63.5% {
            transform:rotate(-40.0888deg)
          }
          64% {
            transform:rotate(-39.1864deg)
          }
          64.5% {
            transform:rotate(-38.2487deg)
          }
          65% {
            transform:rotate(-37.2759deg)
          }
          65.5% {
            transform:rotate(-36.2684deg)
          }
          66% {
            transform:rotate(-35.2266deg)
          }
          66.5% {
            transform:rotate(-34.1509deg)
          }
          67% {
            transform:rotate(-33.0419deg)
          }
          67.5% {
            transform:rotate(-31.9003deg)
          }
          68% {
            transform:rotate(-30.7268deg)
          }
          68.5% {
            transform:rotate(-29.5222deg)
          }
          69% {
            transform:rotate(-28.2874deg)
          }
          69.5% {
            transform:rotate(-27.0233deg)
          }
          70% {
            transform:rotate(-25.7309deg)
          }
          70.5% {
            transform:rotate(-24.4114deg)
          }
          71% {
            transform:rotate(-23.0659deg)
          }
          71.5% {
            transform:rotate(-21.6956deg)
          }
          72% {
            transform:rotate(-20.3019deg)
          }
          72.5% {
            transform:rotate(-18.886deg)
          }
          73% {
            transform:rotate(-17.4494deg)
          }
          73.5% {
            transform:rotate(-15.9934deg)
          }
          74% {
            transform:rotate(-14.5196deg)
          }
          74.5% {
            transform:rotate(-13.0294deg)
          }
          75% {
            transform:rotate(-11.5244deg)
          }
          75.5% {
            transform:rotate(-10.0061deg)
          }
          76% {
            transform:rotate(-8.4761deg)
          }
          76.5% {
            transform:rotate(-6.9359deg)
          }
          77% {
            transform:rotate(-5.3872deg)
          }
          77.5% {
            transform:rotate(-3.8315deg)
          }
          78% {
            transform:rotate(-2.2704deg)
          }
          78.5% {
            transform:rotate(-0.7055deg)
          }
          79% {
            transform:rotate(0.8617deg)
          }
          79.5% {
            transform:rotate(2.4297deg)
          }
          80% {
            transform:rotate(3.9968deg)
          }
          80.5% {
            transform:rotate(5.5616deg)
          }
          81% {
            transform:rotate(7.1227deg)
          }
          81.5% {
            transform:rotate(8.6785deg)
          }
          82% {
            transform:rotate(10.2276deg)
          }
          82.5% {
            transform:rotate(11.7686deg)
          }
          83% {
            transform:rotate(13.3001deg)
          }
          83.5% {
            transform:rotate(14.8208deg)
          }
          84% {
            transform:rotate(16.3293deg)
          }
          84.5% {
            transform:rotate(17.8243deg)
          }
          85% {
            transform:rotate(19.3046deg)
          }
          85.5% {
            transform:rotate(20.7688deg)
          }
          86% {
            transform:rotate(22.2158deg)
          }
          86.5% {
            transform:rotate(23.6442deg)
          }
          87% {
            transform:rotate(25.0529deg)
          }
          87.5% {
            transform:rotate(26.4406deg)
          }
          88% {
            transform:rotate(27.8062deg)
          }
          88.5% {
            transform:rotate(29.1483deg)
          }
          89% {
            transform:rotate(30.4657deg)
          }
          89.5% {
            transform:rotate(31.7572deg)
          }
          90% {
            transform:rotate(33.0214deg)
          }
          90.5% {
            transform:rotate(34.2569deg)
          }
          91% {
            transform:rotate(35.4623deg)
          }
          91.5% {
            transform:rotate(36.636deg)
          }
          92% {
            transform:rotate(37.7763deg)
          }
          92.5% {
            transform:rotate(38.8814deg)
          }
          93% {
            transform:rotate(39.9492deg)
          }
          93.5% {
            transform:rotate(40.9773deg)
          }
          94% {
            transform:rotate(41.9631deg)
          }
          94.5% {
            transform:rotate(42.9036deg)
          }
          95% {
            transform:rotate(43.795deg)
          }
          95.5% {
            transform:rotate(44.6334deg)
          }
          96% {
            transform:rotate(45.4136deg)
          }
          96.5% {
            transform:rotate(46.1301deg)
          }
          97% {
            transform:rotate(46.7761deg)
          }
          97.5% {
            transform:rotate(47.344deg)
          }
          98% {
            transform:rotate(47.8256deg)
          }
          98.5% {
            transform:rotate(48.2124deg)
          }
          99% {
            transform:rotate(48.4959deg)
          }
          99.5% {
            transform:rotate(48.6692deg)
          }
          100% {
            transform:rotate(48.7276deg)
          }
        }
        .j2 {
          transform:rotate(56.3514deg);
          animation:j2 10s linear infinite
        }
        @keyframes j2 {
          0% {
            transform:rotate(13.3517deg)
          }
          0.5% {
            transform:rotate(13.4404deg)
          }
          1% {
            transform:rotate(13.7031deg)
          }
          1.5% {
            transform:rotate(14.1295deg)
          }
          2% {
            transform:rotate(14.7044deg)
          }
          2.5% {
            transform:rotate(15.4103deg)
          }
          3% {
            transform:rotate(16.2286deg)
          }
          3.5% {
            transform:rotate(17.1416deg)
          }
          4% {
            transform:rotate(18.1333deg)
          }
          4.5% {
            transform:rotate(19.1896deg)
          }
          5% {
            transform:rotate(20.2983deg)
          }
          5.5% {
            transform:rotate(21.449deg)
          }
          6% {
            transform:rotate(22.6332deg)
          }
          6.5% {
            transform:rotate(23.8433deg)
          }
          7% {
            transform:rotate(25.0731deg)
          }
          7.5% {
            transform:rotate(26.3174deg)
          }
          8% {
            transform:rotate(27.5715deg)
          }
          8.5% {
            transform:rotate(28.8315deg)
          }
          9% {
            transform:rotate(30.0938deg)
          }
          9.5% {
            transform:rotate(31.3555deg)
          }
          10% {
            transform:rotate(32.6138deg)
          }
          10.5% {
            transform:rotate(33.8662deg)
          }
          11% {
            transform:rotate(35.1104deg)
          }
          11.5% {
            transform:rotate(36.3444deg)
          }
          12% {
            transform:rotate(37.5663deg)
          }
          12.5% {
            transform:rotate(38.7741deg)
          }
          13% {
            transform:rotate(39.9663deg)
          }
          13.5% {
            transform:rotate(41.1412deg)
          }
          14% {
            transform:rotate(42.2973deg)
          }
          14.5% {
            transform:rotate(43.4332deg)
          }
          15% {
            transform:rotate(44.5474deg)
          }
          15.5% {
            transform:rotate(45.6386deg)
          }
          16% {
            transform:rotate(46.7054deg)
          }
          16.5% {
            transform:rotate(47.7468deg)
          }
          17% {
            transform:rotate(48.7614deg)
          }
          17.5% {
            transform:rotate(49.7481deg)
          }
          18% {
            transform:rotate(50.7059deg)
          }
          18.5% {
            transform:rotate(51.6336deg)
          }
          19% {
            transform:rotate(52.5303deg)
          }
          19.5% {
            transform:rotate(53.3951deg)
          }
          20% {
            transform:rotate(54.227deg)
          }
          20.5% {
            transform:rotate(55.0252deg)
          }
          21% {
            transform:rotate(55.7889deg)
          }
          21.5% {
            transform:rotate(56.5174deg)
          }
          22% {
            transform:rotate(57.2102deg)
          }
          22.5% {
            transform:rotate(57.8666deg)
          }
          23% {
            transform:rotate(58.4861deg)
          }
          23.5% {
            transform:rotate(59.0684deg)
          }
          24% {
            transform:rotate(59.613deg)
          }
          24.5% {
            transform:rotate(60.1199deg)
          }
          25% {
            transform:rotate(60.5887deg)
          }
          25.5% {
            transform:rotate(61.0195deg)
          }
          26% {
            transform:rotate(61.4123deg)
          }
          26.5% {
            transform:rotate(61.7673deg)
          }
          27% {
            transform:rotate(62.0845deg)
          }
          27.5% {
            transform:rotate(62.3645deg)
          }
          28% {
            transform:rotate(62.6075deg)
          }
          28.5% {
            transform:rotate(62.8142deg)
          }
          29% {
            transform:rotate(62.9851deg)
          }
          29.5% {
            transform:rotate(63.121deg)
          }
          30% {
            transform:rotate(63.2227deg)
          }
          30.5% {
            transform:rotate(63.2912deg)
          }
          31% {
            transform:rotate(63.3273deg)
          }
          31.5% {
            transform:rotate(63.3323deg)
          }
          32% {
            transform:rotate(63.3073deg)
          }
          32.5% {
            transform:rotate(63.2536deg)
          }
          33% {
            transform:rotate(63.1725deg)
          }
          33.5% {
            transform:rotate(63.0655deg)
          }
          34% {
            transform:rotate(62.9341deg)
          }
          34.5% {
            transform:rotate(62.7799deg)
          }
          35% {
            transform:rotate(62.6044deg)
          }
          35.5% {
            transform:rotate(62.4094deg)
          }
          36% {
            transform:rotate(62.1967deg)
          }
          36.5% {
            transform:rotate(61.9679deg)
          }
          37% {
            transform:rotate(61.7249deg)
          }
          37.5% {
            transform:rotate(61.4697deg)
          }
          38% {
            transform:rotate(61.204deg)
          }
          38.5% {
            transform:rotate(60.9297deg)
          }
          39% {
            transform:rotate(60.6489deg)
          }
          39.5% {
            transform:rotate(60.3634deg)
          }
          40% {
            transform:rotate(60.0752deg)
          }
          40.5% {
            transform:rotate(59.7861deg)
          }
          41% {
            transform:rotate(59.4982deg)
          }
          41.5% {
            transform:rotate(59.2131deg)
          }
          42% {
            transform:rotate(58.9329deg)
          }
          42.5% {
            transform:rotate(58.6593deg)
          }
          43% {
            transform:rotate(58.394deg)
          }
          43.5% {
            transform:rotate(58.1388deg)
          }
          44% {
            transform:rotate(57.8953deg)
          }
          44.5% {
            transform:rotate(57.6651deg)
          }
          45% {
            transform:rotate(57.4495deg)
          }
          45.5% {
            transform:rotate(57.2501deg)
          }
          46% {
            transform:rotate(57.0681deg)
          }
          46.5% {
            transform:rotate(56.9046deg)
          }
          47% {
            transform:rotate(56.7607deg)
          }
          47.5% {
            transform:rotate(56.6373deg)
          }
          48% {
            transform:rotate(56.5353deg)
          }
          48.5% {
            transform:rotate(56.4552deg)
          }
          49% {
            transform:rotate(56.3977deg)
          }
          49.5% {
            transform:rotate(56.363deg)
          }
          50% {
            transform:rotate(56.3514deg)
          }
          50.5% {
            transform:rotate(56.363deg)
          }
          51% {
            transform:rotate(56.3977deg)
          }
          51.5% {
            transform:rotate(56.4552deg)
          }
          52% {
            transform:rotate(56.5353deg)
          }
          52.5% {
            transform:rotate(56.6373deg)
          }
          53% {
            transform:rotate(56.7607deg)
          }
          53.5% {
            transform:rotate(56.9046deg)
          }
          54% {
            transform:rotate(57.0681deg)
          }
          54.5% {
            transform:rotate(57.2501deg)
          }
          55% {
            transform:rotate(57.4495deg)
          }
          55.5% {
            transform:rotate(57.6651deg)
          }
          56% {
            transform:rotate(57.8953deg)
          }
          56.5% {
            transform:rotate(58.1388deg)
          }
          57% {
            transform:rotate(58.394deg)
          }
          57.5% {
            transform:rotate(58.6593deg)
          }
          58% {
            transform:rotate(58.9329deg)
          }
          58.5% {
            transform:rotate(59.2131deg)
          }
          59% {
            transform:rotate(59.4982deg)
          }
          59.5% {
            transform:rotate(59.7861deg)
          }
          60% {
            transform:rotate(60.0752deg)
          }
          60.5% {
            transform:rotate(60.3634deg)
          }
          61% {
            transform:rotate(60.6489deg)
          }
          61.5% {
            transform:rotate(60.9297deg)
          }
          62% {
            transform:rotate(61.204deg)
          }
          62.5% {
            transform:rotate(61.4697deg)
          }
          63% {
            transform:rotate(61.7249deg)
          }
          63.5% {
            transform:rotate(61.9679deg)
          }
          64% {
            transform:rotate(62.1967deg)
          }
          64.5% {
            transform:rotate(62.4094deg)
          }
          65% {
            transform:rotate(62.6044deg)
          }
          65.5% {
            transform:rotate(62.7799deg)
          }
          66% {
            transform:rotate(62.9341deg)
          }
          66.5% {
            transform:rotate(63.0655deg)
          }
          67% {
            transform:rotate(63.1725deg)
          }
          67.5% {
            transform:rotate(63.2536deg)
          }
          68% {
            transform:rotate(63.3073deg)
          }
          68.5% {
            transform:rotate(63.3323deg)
          }
          69% {
            transform:rotate(63.3273deg)
          }
          69.5% {
            transform:rotate(63.2912deg)
          }
          70% {
            transform:rotate(63.2227deg)
          }
          70.5% {
            transform:rotate(63.121deg)
          }
          71% {
            transform:rotate(62.9851deg)
          }
          71.5% {
            transform:rotate(62.8142deg)
          }
          72% {
            transform:rotate(62.6075deg)
          }
          72.5% {
            transform:rotate(62.3645deg)
          }
          73% {
            transform:rotate(62.0845deg)
          }
          73.5% {
            transform:rotate(61.7673deg)
          }
          74% {
            transform:rotate(61.4123deg)
          }
          74.5% {
            transform:rotate(61.0195deg)
          }
          75% {
            transform:rotate(60.5887deg)
          }
          75.5% {
            transform:rotate(60.1199deg)
          }
          76% {
            transform:rotate(59.613deg)
          }
          76.5% {
            transform:rotate(59.0684deg)
          }
          77% {
            transform:rotate(58.4861deg)
          }
          77.5% {
            transform:rotate(57.8666deg)
          }
          78% {
            transform:rotate(57.2102deg)
          }
          78.5% {
            transform:rotate(56.5174deg)
          }
          79% {
            transform:rotate(55.7889deg)
          }
          79.5% {
            transform:rotate(55.0252deg)
          }
          80% {
            transform:rotate(54.227deg)
          }
          80.5% {
            transform:rotate(53.3951deg)
          }
          81% {
            transform:rotate(52.5303deg)
          }
          81.5% {
            transform:rotate(51.6336deg)
          }
          82% {
            transform:rotate(50.7059deg)
          }
          82.5% {
            transform:rotate(49.7481deg)
          }
          83% {
            transform:rotate(48.7614deg)
          }
          83.5% {
            transform:rotate(47.7468deg)
          }
          84% {
            transform:rotate(46.7054deg)
          }
          84.5% {
            transform:rotate(45.6386deg)
          }
          85% {
            transform:rotate(44.5474deg)
          }
          85.5% {
            transform:rotate(43.4332deg)
          }
          86% {
            transform:rotate(42.2973deg)
          }
          86.5% {
            transform:rotate(41.1412deg)
          }
          87% {
            transform:rotate(39.9663deg)
          }
          87.5% {
            transform:rotate(38.7741deg)
          }
          88% {
            transform:rotate(37.5663deg)
          }
          88.5% {
            transform:rotate(36.3444deg)
          }
          89% {
            transform:rotate(35.1104deg)
          }
          89.5% {
            transform:rotate(33.8662deg)
          }
          90% {
            transform:rotate(32.6138deg)
          }
          90.5% {
            transform:rotate(31.3555deg)
          }
          91% {
            transform:rotate(30.0938deg)
          }
          91.5% {
            transform:rotate(28.8315deg)
          }
          92% {
            transform:rotate(27.5715deg)
          }
          92.5% {
            transform:rotate(26.3174deg)
          }
          93% {
            transform:rotate(25.0731deg)
          }
          93.5% {
            transform:rotate(23.8433deg)
          }
          94% {
            transform:rotate(22.6332deg)
          }
          94.5% {
            transform:rotate(21.449deg)
          }
          95% {
            transform:rotate(20.2983deg)
          }
          95.5% {
            transform:rotate(19.1896deg)
          }
          96% {
            transform:rotate(18.1333deg)
          }
          96.5% {
            transform:rotate(17.1416deg)
          }
          97% {
            transform:rotate(16.2286deg)
          }
          97.5% {
            transform:rotate(15.4103deg)
          }
          98% {
            transform:rotate(14.7044deg)
          }
          98.5% {
            transform:rotate(14.1295deg)
          }
          99% {
            transform:rotate(13.7031deg)
          }
          99.5% {
            transform:rotate(13.4404deg)
          }
          100% {
            transform:rotate(13.3517deg)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Redundant Manipulator Null Motion">
        <path class="ink muted" d="M15 113H31M23 106V113"/>
        <path class="ink muted" stroke-dasharray="2 4" d="M23 106L36.524,76.998L72.042,66.631L104 65"/>
        <path class="ink cool" style="fill:none" d="M97 65H111M104 58V72"/>
        <g transform="translate(23 106)">
          <g class="j0">
            <path class="ink" style="stroke-width:4" d="M0 0H32"/>
            <circle class="warm" r="4"/>
            <g transform="translate(32 0)">
              <g class="j1">
                <path class="ink" style="stroke-width:4" d="M0 0H37"/>
                <circle class="warm" r="4"/>
                <g transform="translate(37 0)">
                  <g class="j2">
                    <path class="ink" style="stroke-width:4" d="M0 0H32"/>
                    <circle class="warm" r="4"/>
                    <circle class="solid" cx="32" cy="0" r="3"/>
                  </g>
                </g>
              </g>
            </g>
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

if (!customElements.get("concept-redundant-manipulator-null-motion")) {
  customElements.define("concept-redundant-manipulator-null-motion", ConceptRedundantManipulatorNullMotion);
}
