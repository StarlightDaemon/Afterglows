// Ball-and-Beam Control. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBallAndBeamControl extends HTMLElement {
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
        .beam {
          transform:translate(70px,88px);
          animation:beam 10s linear infinite
        }
        .ball {
          transform:translate(70px,80px);
          animation:ball 10s linear infinite
        }
        .cycle {
          animation:cycle 10s linear infinite
        }
        @keyframes cycle {
          0%,90% {
            opacity:1
          }
          94%,97% {
            opacity:0
          }
          100% {
            opacity:1
          }
        }
        @keyframes beam {
          0% {
            transform:translate(70px,88px) rotate(5.152deg)
          }
          0.5% {
            transform:translate(70px,88px) rotate(4.81deg)
          }
          1% {
            transform:translate(70px,88px) rotate(4.459deg)
          }
          1.5% {
            transform:translate(70px,88px) rotate(4.102deg)
          }
          2% {
            transform:translate(70px,88px) rotate(3.74deg)
          }
          2.5% {
            transform:translate(70px,88px) rotate(3.377deg)
          }
          3.0% {
            transform:translate(70px,88px) rotate(3.015deg)
          }
          3.5% {
            transform:translate(70px,88px) rotate(2.657deg)
          }
          4% {
            transform:translate(70px,88px) rotate(2.304deg)
          }
          4.5% {
            transform:translate(70px,88px) rotate(1.959deg)
          }
          5% {
            transform:translate(70px,88px) rotate(1.622deg)
          }
          5.5% {
            transform:translate(70px,88px) rotate(1.296deg)
          }
          6.0% {
            transform:translate(70px,88px) rotate(0.983deg)
          }
          6.5% {
            transform:translate(70px,88px) rotate(0.683deg)
          }
          7.0% {
            transform:translate(70px,88px) rotate(0.397deg)
          }
          7.5% {
            transform:translate(70px,88px) rotate(0.127deg)
          }
          8% {
            transform:translate(70px,88px) rotate(-0.127deg)
          }
          8.5% {
            transform:translate(70px,88px) rotate(-0.364deg)
          }
          9% {
            transform:translate(70px,88px) rotate(-0.584deg)
          }
          9.5% {
            transform:translate(70px,88px) rotate(-0.787deg)
          }
          10% {
            transform:translate(70px,88px) rotate(-0.971deg)
          }
          10.5% {
            transform:translate(70px,88px) rotate(-1.138deg)
          }
          11% {
            transform:translate(70px,88px) rotate(-1.286deg)
          }
          11.5% {
            transform:translate(70px,88px) rotate(-1.418deg)
          }
          12.0% {
            transform:translate(70px,88px) rotate(-1.531deg)
          }
          12.5% {
            transform:translate(70px,88px) rotate(-1.628deg)
          }
          13% {
            transform:translate(70px,88px) rotate(-1.708deg)
          }
          13.5% {
            transform:translate(70px,88px) rotate(-1.772deg)
          }
          14.0% {
            transform:translate(70px,88px) rotate(-1.82deg)
          }
          14.5% {
            transform:translate(70px,88px) rotate(-1.854deg)
          }
          15% {
            transform:translate(70px,88px) rotate(-1.874deg)
          }
          15.5% {
            transform:translate(70px,88px) rotate(-1.88deg)
          }
          16% {
            transform:translate(70px,88px) rotate(-1.874deg)
          }
          16.5% {
            transform:translate(70px,88px) rotate(-1.855deg)
          }
          17% {
            transform:translate(70px,88px) rotate(-1.827deg)
          }
          17.5% {
            transform:translate(70px,88px) rotate(-1.788deg)
          }
          18% {
            transform:translate(70px,88px) rotate(-1.74deg)
          }
          18.5% {
            transform:translate(70px,88px) rotate(-1.683deg)
          }
          19% {
            transform:translate(70px,88px) rotate(-1.62deg)
          }
          19.5% {
            transform:translate(70px,88px) rotate(-1.55deg)
          }
          20% {
            transform:translate(70px,88px) rotate(-1.474deg)
          }
          20.5% {
            transform:translate(70px,88px) rotate(-1.394deg)
          }
          21% {
            transform:translate(70px,88px) rotate(-1.309deg)
          }
          21.5% {
            transform:translate(70px,88px) rotate(-1.222deg)
          }
          22% {
            transform:translate(70px,88px) rotate(-1.132deg)
          }
          22.5% {
            transform:translate(70px,88px) rotate(-1.04deg)
          }
          23.0% {
            transform:translate(70px,88px) rotate(-0.948deg)
          }
          23.5% {
            transform:translate(70px,88px) rotate(-0.855deg)
          }
          24.0% {
            transform:translate(70px,88px) rotate(-0.762deg)
          }
          24.5% {
            transform:translate(70px,88px) rotate(-0.671deg)
          }
          25% {
            transform:translate(70px,88px) rotate(-0.58deg)
          }
          25.5% {
            transform:translate(70px,88px) rotate(-0.492deg)
          }
          26% {
            transform:translate(70px,88px) rotate(-0.406deg)
          }
          26.5% {
            transform:translate(70px,88px) rotate(-0.323deg)
          }
          27% {
            transform:translate(70px,88px) rotate(-0.243deg)
          }
          27.5% {
            transform:translate(70px,88px) rotate(-0.167deg)
          }
          28.0% {
            transform:translate(70px,88px) rotate(-0.094deg)
          }
          28.5% {
            transform:translate(70px,88px) rotate(-0.025deg)
          }
          29.0% {
            transform:translate(70px,88px) rotate(0.04deg)
          }
          29.5% {
            transform:translate(70px,88px) rotate(0.1deg)
          }
          30% {
            transform:translate(70px,88px) rotate(0.156deg)
          }
          30.5% {
            transform:translate(70px,88px) rotate(0.207deg)
          }
          31% {
            transform:translate(70px,88px) rotate(0.254deg)
          }
          31.5% {
            transform:translate(70px,88px) rotate(0.296deg)
          }
          32% {
            transform:translate(70px,88px) rotate(0.334deg)
          }
          32.5% {
            transform:translate(70px,88px) rotate(0.367deg)
          }
          33% {
            transform:translate(70px,88px) rotate(0.395deg)
          }
          33.5% {
            transform:translate(70px,88px) rotate(0.42deg)
          }
          34% {
            transform:translate(70px,88px) rotate(0.44deg)
          }
          34.5% {
            transform:translate(70px,88px) rotate(0.456deg)
          }
          35% {
            transform:translate(70px,88px) rotate(0.468deg)
          }
          35.5% {
            transform:translate(70px,88px) rotate(0.476deg)
          }
          36% {
            transform:translate(70px,88px) rotate(0.481deg)
          }
          36.5% {
            transform:translate(70px,88px) rotate(0.482deg)
          }
          37% {
            transform:translate(70px,88px) rotate(0.48deg)
          }
          37.5% {
            transform:translate(70px,88px) rotate(0.475deg)
          }
          38% {
            transform:translate(70px,88px) rotate(0.467deg)
          }
          38.5% {
            transform:translate(70px,88px) rotate(0.457deg)
          }
          39% {
            transform:translate(70px,88px) rotate(0.444deg)
          }
          39.5% {
            transform:translate(70px,88px) rotate(0.43deg)
          }
          40% {
            transform:translate(70px,88px) rotate(0.413deg)
          }
          40.5% {
            transform:translate(70px,88px) rotate(0.395deg)
          }
          41.0% {
            transform:translate(70px,88px) rotate(0.376deg)
          }
          41.5% {
            transform:translate(70px,88px) rotate(0.355deg)
          }
          42% {
            transform:translate(70px,88px) rotate(0.333deg)
          }
          42.5% {
            transform:translate(70px,88px) rotate(0.311deg)
          }
          43% {
            transform:translate(70px,88px) rotate(0.287deg)
          }
          43.5% {
            transform:translate(70px,88px) rotate(0.264deg)
          }
          44% {
            transform:translate(70px,88px) rotate(0.24deg)
          }
          44.5% {
            transform:translate(70px,88px) rotate(0.216deg)
          }
          45% {
            transform:translate(70px,88px) rotate(0.193deg)
          }
          45.5% {
            transform:translate(70px,88px) rotate(0.169deg)
          }
          46.0% {
            transform:translate(70px,88px) rotate(0.146deg)
          }
          46.5% {
            transform:translate(70px,88px) rotate(0.124deg)
          }
          47% {
            transform:translate(70px,88px) rotate(0.102deg)
          }
          47.5% {
            transform:translate(70px,88px) rotate(0.08deg)
          }
          48.0% {
            transform:translate(70px,88px) rotate(0.06deg)
          }
          48.5% {
            transform:translate(70px,88px) rotate(0.041deg)
          }
          49% {
            transform:translate(70px,88px) rotate(0.022deg)
          }
          49.5% {
            transform:translate(70px,88px) rotate(0.005deg)
          }
          50% {
            transform:translate(70px,88px) rotate(-0.012deg)
          }
          50.5% {
            transform:translate(70px,88px) rotate(-0.027deg)
          }
          51.0% {
            transform:translate(70px,88px) rotate(-0.041deg)
          }
          51.5% {
            transform:translate(70px,88px) rotate(-0.054deg)
          }
          52% {
            transform:translate(70px,88px) rotate(-0.066deg)
          }
          52.5% {
            transform:translate(70px,88px) rotate(-0.077deg)
          }
          53.0% {
            transform:translate(70px,88px) rotate(-0.087deg)
          }
          53.5% {
            transform:translate(70px,88px) rotate(-0.095deg)
          }
          54% {
            transform:translate(70px,88px) rotate(-0.102deg)
          }
          54.5% {
            transform:translate(70px,88px) rotate(-0.108deg)
          }
          55% {
            transform:translate(70px,88px) rotate(-0.113deg)
          }
          55.5% {
            transform:translate(70px,88px) rotate(-0.117deg)
          }
          56.0% {
            transform:translate(70px,88px) rotate(-0.12deg)
          }
          56.5% {
            transform:translate(70px,88px) rotate(-0.122deg)
          }
          57% {
            transform:translate(70px,88px) rotate(-0.123deg)
          }
          57.5% {
            transform:translate(70px,88px) rotate(-0.123deg)
          }
          58.0% {
            transform:translate(70px,88px) rotate(-0.123deg)
          }
          58.5% {
            transform:translate(70px,88px) rotate(-0.122deg)
          }
          59% {
            transform:translate(70px,88px) rotate(-0.119deg)
          }
          59.5% {
            transform:translate(70px,88px) rotate(-0.117deg)
          }
          60% {
            transform:translate(70px,88px) rotate(-0.113deg)
          }
          60.5% {
            transform:translate(70px,88px) rotate(-0.11deg)
          }
          61.0% {
            transform:translate(70px,88px) rotate(-0.105deg)
          }
          61.5% {
            transform:translate(70px,88px) rotate(-0.101deg)
          }
          62% {
            transform:translate(70px,88px) rotate(-0.096deg)
          }
          62.5% {
            transform:translate(70px,88px) rotate(-0.09deg)
          }
          63.0% {
            transform:translate(70px,88px) rotate(-0.085deg)
          }
          63.5% {
            transform:translate(70px,88px) rotate(-0.079deg)
          }
          64% {
            transform:translate(70px,88px) rotate(-0.073deg)
          }
          64.5% {
            transform:translate(70px,88px) rotate(-0.067deg)
          }
          65% {
            transform:translate(70px,88px) rotate(-0.061deg)
          }
          65.5% {
            transform:translate(70px,88px) rotate(-0.055deg)
          }
          66% {
            transform:translate(70px,88px) rotate(-0.049deg)
          }
          66.5% {
            transform:translate(70px,88px) rotate(-0.043deg)
          }
          67% {
            transform:translate(70px,88px) rotate(-0.037deg)
          }
          67.5% {
            transform:translate(70px,88px) rotate(-0.031deg)
          }
          68% {
            transform:translate(70px,88px) rotate(-0.025deg)
          }
          68.5% {
            transform:translate(70px,88px) rotate(-0.02deg)
          }
          69% {
            transform:translate(70px,88px) rotate(-0.015deg)
          }
          69.5% {
            transform:translate(70px,88px) rotate(-0.01deg)
          }
          70% {
            transform:translate(70px,88px) rotate(-0.005deg)
          }
          70.5% {
            transform:translate(70px,88px) rotate(-0.001deg)
          }
          71% {
            transform:translate(70px,88px) rotate(0.004deg)
          }
          71.5% {
            transform:translate(70px,88px) rotate(0.007deg)
          }
          72% {
            transform:translate(70px,88px) rotate(0.011deg)
          }
          72.5% {
            transform:translate(70px,88px) rotate(0.014deg)
          }
          73% {
            transform:translate(70px,88px) rotate(0.017deg)
          }
          73.5% {
            transform:translate(70px,88px) rotate(0.02deg)
          }
          74% {
            transform:translate(70px,88px) rotate(0.022deg)
          }
          74.5% {
            transform:translate(70px,88px) rotate(0.025deg)
          }
          75% {
            transform:translate(70px,88px) rotate(0.026deg)
          }
          75.5% {
            transform:translate(70px,88px) rotate(0.028deg)
          }
          76% {
            transform:translate(70px,88px) rotate(0.029deg)
          }
          76.5% {
            transform:translate(70px,88px) rotate(0.03deg)
          }
          77% {
            transform:translate(70px,88px) rotate(0.031deg)
          }
          77.5% {
            transform:translate(70px,88px) rotate(0.031deg)
          }
          78% {
            transform:translate(70px,88px) rotate(0.032deg)
          }
          78.5% {
            transform:translate(70px,88px) rotate(0.032deg)
          }
          79% {
            transform:translate(70px,88px) rotate(0.031deg)
          }
          79.5% {
            transform:translate(70px,88px) rotate(0.031deg)
          }
          80% {
            transform:translate(70px,88px) rotate(0.031deg)
          }
          94% {
            transform:translate(70px,88px) rotate(0.031deg)
          }
          94.01% {
            transform:translate(70px,88px) rotate(5.152deg)
          }
          100% {
            transform:translate(70px,88px) rotate(5.152deg)
          }
        }
        @keyframes ball {
          0% {
            transform:translate(46.815px,77.877px) rotate(-224.031deg)
          }
          0.5% {
            transform:translate(46.834px,78.022px) rotate(-223.624deg)
          }
          1% {
            transform:translate(47.0px,78.182px) rotate(-221.796deg)
          }
          1.5% {
            transform:translate(47.305px,78.352px) rotate(-218.65deg)
          }
          2% {
            transform:translate(47.739px,78.528px) rotate(-214.287deg)
          }
          2.5% {
            transform:translate(48.289px,78.705px) rotate(-208.814deg)
          }
          3.0% {
            transform:translate(48.946px,78.88px) rotate(-202.335deg)
          }
          3.5% {
            transform:translate(49.699px,79.049px) rotate(-194.956deg)
          }
          4% {
            transform:translate(50.537px,79.21px) rotate(-186.78deg)
          }
          4.5% {
            transform:translate(51.448px,79.361px) rotate(-177.912deg)
          }
          5% {
            transform:translate(52.424px,79.499px) rotate(-168.451deg)
          }
          5.5% {
            transform:translate(53.452px,79.623px) rotate(-158.496deg)
          }
          6.0% {
            transform:translate(54.523px,79.733px) rotate(-148.143deg)
          }
          6.5% {
            transform:translate(55.628px,79.828px) rotate(-137.484deg)
          }
          7.0% {
            transform:translate(56.756px,79.908px) rotate(-126.607deg)
          }
          7.5% {
            transform:translate(57.899px,79.973px) rotate(-115.596deg)
          }
          8% {
            transform:translate(59.049px,80.024px) rotate(-104.531deg)
          }
          8.5% {
            transform:translate(60.198px,80.062px) rotate(-93.486deg)
          }
          9% {
            transform:translate(61.337px,80.088px) rotate(-82.531deg)
          }
          9.5% {
            transform:translate(62.461px,80.103px) rotate(-71.733deg)
          }
          10% {
            transform:translate(63.563px,80.108px) rotate(-61.15deg)
          }
          10.5% {
            transform:translate(64.638px,80.105px) rotate(-50.838deg)
          }
          11% {
            transform:translate(65.679px,80.095px) rotate(-40.847deg)
          }
          11.5% {
            transform:translate(66.682px,80.08px) rotate(-31.22deg)
          }
          12.0% {
            transform:translate(67.644px,80.06px) rotate(-21.997deg)
          }
          12.5% {
            transform:translate(68.56px,80.038px) rotate(-13.212deg)
          }
          13% {
            transform:translate(69.428px,80.014px) rotate(-4.895deg)
          }
          13.5% {
            transform:translate(70.245px,79.989px) rotate(2.931deg)
          }
          14.0% {
            transform:translate(71.009px,79.964px) rotate(10.245deg)
          }
          14.5% {
            transform:translate(71.718px,79.94px) rotate(17.033deg)
          }
          15% {
            transform:translate(72.371px,79.918px) rotate(23.283deg)
          }
          15.5% {
            transform:translate(72.968px,79.898px) rotate(28.989deg)
          }
          16% {
            transform:translate(73.509px,79.881px) rotate(34.149deg)
          }
          16.5% {
            transform:translate(73.992px,79.866px) rotate(38.764deg)
          }
          17% {
            transform:translate(74.42px,79.855px) rotate(42.837deg)
          }
          17.5% {
            transform:translate(74.792px,79.847px) rotate(46.377deg)
          }
          18% {
            transform:translate(75.109px,79.841px) rotate(49.395deg)
          }
          18.5% {
            transform:translate(75.374px,79.839px) rotate(51.903deg)
          }
          19% {
            transform:translate(75.587px,79.839px) rotate(53.918deg)
          }
          19.5% {
            transform:translate(75.751px,79.841px) rotate(55.457deg)
          }
          20% {
            transform:translate(75.868px,79.846px) rotate(56.541deg)
          }
          20.5% {
            transform:translate(75.939px,79.853px) rotate(57.191deg)
          }
          21% {
            transform:translate(75.967px,79.862px) rotate(57.431deg)
          }
          21.5% {
            transform:translate(75.955px,79.871px) rotate(57.284deg)
          }
          22% {
            transform:translate(75.905px,79.882px) rotate(56.776deg)
          }
          22.5% {
            transform:translate(75.82px,79.893px) rotate(55.933deg)
          }
          23.0% {
            transform:translate(75.703px,79.905px) rotate(54.782deg)
          }
          23.5% {
            transform:translate(75.556px,79.916px) rotate(53.348deg)
          }
          24.0% {
            transform:translate(75.383px,79.928px) rotate(51.66deg)
          }
          24.5% {
            transform:translate(75.185px,79.939px) rotate(49.745deg)
          }
          25% {
            transform:translate(74.967px,79.949px) rotate(47.628deg)
          }
          25.5% {
            transform:translate(74.73px,79.959px) rotate(45.336deg)
          }
          26% {
            transform:translate(74.478px,79.968px) rotate(42.896deg)
          }
          26.5% {
            transform:translate(74.212px,79.976px) rotate(40.332deg)
          }
          27% {
            transform:translate(73.936px,79.983px) rotate(37.668deg)
          }
          27.5% {
            transform:translate(73.652px,79.989px) rotate(34.929deg)
          }
          28.0% {
            transform:translate(73.362px,79.994px) rotate(32.136deg)
          }
          28.5% {
            transform:translate(73.069px,79.999px) rotate(29.311deg)
          }
          29.0% {
            transform:translate(72.774px,80.002px) rotate(26.475deg)
          }
          29.5% {
            transform:translate(72.48px,80.004px) rotate(23.645deg)
          }
          30% {
            transform:translate(72.188px,80.006px) rotate(20.841deg)
          }
          30.5% {
            transform:translate(71.9px,80.007px) rotate(18.079deg)
          }
          31% {
            transform:translate(71.619px,80.007px) rotate(15.374deg)
          }
          31.5% {
            transform:translate(71.344px,80.007px) rotate(12.739deg)
          }
          32% {
            transform:translate(71.079px,80.006px) rotate(10.188deg)
          }
          32.5% {
            transform:translate(70.822px,80.005px) rotate(7.732deg)
          }
          33% {
            transform:translate(70.577px,80.004px) rotate(5.38deg)
          }
          33.5% {
            transform:translate(70.344px,80.002px) rotate(3.141deg)
          }
          34% {
            transform:translate(70.123px,80.001px) rotate(1.023deg)
          }
          34.5% {
            transform:translate(69.915px,79.999px) rotate(-0.968deg)
          }
          35% {
            transform:translate(69.72px,79.997px) rotate(-2.828deg)
          }
          35.5% {
            transform:translate(69.54px,79.996px) rotate(-4.552deg)
          }
          36% {
            transform:translate(69.374px,79.994px) rotate(-6.139deg)
          }
          36.5% {
            transform:translate(69.222px,79.993px) rotate(-7.586deg)
          }
          37% {
            transform:translate(69.086px,79.992px) rotate(-8.892deg)
          }
          37.5% {
            transform:translate(68.963px,79.991px) rotate(-10.06deg)
          }
          38% {
            transform:translate(68.855px,79.99px) rotate(-11.088deg)
          }
          38.5% {
            transform:translate(68.761px,79.99px) rotate(-11.98deg)
          }
          39% {
            transform:translate(68.682px,79.99px) rotate(-12.739deg)
          }
          39.5% {
            transform:translate(68.615px,79.989px) rotate(-13.367deg)
          }
          40% {
            transform:translate(68.562px,79.989px) rotate(-13.87deg)
          }
          40.5% {
            transform:translate(68.521px,79.99px) rotate(-14.251deg)
          }
          41.0% {
            transform:translate(68.493px,79.99px) rotate(-14.516deg)
          }
          41.5% {
            transform:translate(68.476px,79.99px) rotate(-14.671deg)
          }
          42% {
            transform:translate(68.47px,79.991px) rotate(-14.721deg)
          }
          42.5% {
            transform:translate(68.474px,79.992px) rotate(-14.673deg)
          }
          43% {
            transform:translate(68.488px,79.992px) rotate(-14.532deg)
          }
          43.5% {
            transform:translate(68.511px,79.993px) rotate(-14.307deg)
          }
          44% {
            transform:translate(68.542px,79.994px) rotate(-14.004deg)
          }
          44.5% {
            transform:translate(68.58px,79.995px) rotate(-13.628deg)
          }
          45% {
            transform:translate(68.626px,79.995px) rotate(-13.189deg)
          }
          45.5% {
            transform:translate(68.677px,79.996px) rotate(-12.692deg)
          }
          46.0% {
            transform:translate(68.733px,79.997px) rotate(-12.144deg)
          }
          46.5% {
            transform:translate(68.795px,79.997px) rotate(-11.552deg)
          }
          47% {
            transform:translate(68.86px,79.998px) rotate(-10.923deg)
          }
          47.5% {
            transform:translate(68.928px,79.998px) rotate(-10.262deg)
          }
          48.0% {
            transform:translate(68.999px,79.999px) rotate(-9.577deg)
          }
          48.5% {
            transform:translate(69.072px,79.999px) rotate(-8.873deg)
          }
          49% {
            transform:translate(69.147px,80.0px) rotate(-8.156deg)
          }
          49.5% {
            transform:translate(69.222px,80.0px) rotate(-7.431deg)
          }
          50% {
            transform:translate(69.298px,80.0px) rotate(-6.704deg)
          }
          50.5% {
            transform:translate(69.373px,80.0px) rotate(-5.98deg)
          }
          51.0% {
            transform:translate(69.448px,80.0px) rotate(-5.262deg)
          }
          51.5% {
            transform:translate(69.521px,80.0px) rotate(-4.555deg)
          }
          52% {
            transform:translate(69.593px,80.0px) rotate(-3.864deg)
          }
          52.5% {
            transform:translate(69.663px,80.0px) rotate(-3.191deg)
          }
          53.0% {
            transform:translate(69.731px,80.0px) rotate(-2.539deg)
          }
          53.5% {
            transform:translate(69.796px,80.0px) rotate(-1.913deg)
          }
          54% {
            transform:translate(69.859px,80.0px) rotate(-1.313deg)
          }
          54.5% {
            transform:translate(69.918px,80.0px) rotate(-0.743deg)
          }
          55% {
            transform:translate(69.975px,80.0px) rotate(-0.203deg)
          }
          55.5% {
            transform:translate(70.028px,80.0px) rotate(0.303deg)
          }
          56.0% {
            transform:translate(70.077px,80.0px) rotate(0.776deg)
          }
          56.5% {
            transform:translate(70.123px,80.0px) rotate(1.214deg)
          }
          57% {
            transform:translate(70.165px,80.0px) rotate(1.617deg)
          }
          57.5% {
            transform:translate(70.203px,80.0px) rotate(1.984deg)
          }
          58.0% {
            transform:translate(70.238px,79.999px) rotate(2.315deg)
          }
          58.5% {
            transform:translate(70.269px,79.999px) rotate(2.61deg)
          }
          59% {
            transform:translate(70.296px,79.999px) rotate(2.869deg)
          }
          59.5% {
            transform:translate(70.32px,79.999px) rotate(3.094deg)
          }
          60% {
            transform:translate(70.34px,79.999px) rotate(3.285deg)
          }
          60.5% {
            transform:translate(70.357px,79.999px) rotate(3.442deg)
          }
          61.0% {
            transform:translate(70.37px,79.999px) rotate(3.568deg)
          }
          61.5% {
            transform:translate(70.38px,79.999px) rotate(3.662deg)
          }
          62% {
            transform:translate(70.387px,79.999px) rotate(3.727deg)
          }
          62.5% {
            transform:translate(70.391px,79.999px) rotate(3.763deg)
          }
          63.0% {
            transform:translate(70.392px,79.999px) rotate(3.773deg)
          }
          63.5% {
            transform:translate(70.391px,79.999px) rotate(3.758deg)
          }
          64% {
            transform:translate(70.387px,80.0px) rotate(3.719deg)
          }
          64.5% {
            transform:translate(70.381px,80.0px) rotate(3.659deg)
          }
          65% {
            transform:translate(70.373px,80.0px) rotate(3.579deg)
          }
          65.5% {
            transform:translate(70.363px,80.0px) rotate(3.481deg)
          }
          66% {
            transform:translate(70.351px,80.0px) rotate(3.367deg)
          }
          66.5% {
            transform:translate(70.338px,80.0px) rotate(3.238deg)
          }
          67% {
            transform:translate(70.323px,80.0px) rotate(3.096deg)
          }
          67.5% {
            transform:translate(70.307px,80.0px) rotate(2.943deg)
          }
          68% {
            transform:translate(70.29px,80.0px) rotate(2.781deg)
          }
          68.5% {
            transform:translate(70.273px,80.0px) rotate(2.611deg)
          }
          69% {
            transform:translate(70.254px,80.0px) rotate(2.435deg)
          }
          69.5% {
            transform:translate(70.236px,80.0px) rotate(2.254deg)
          }
          70% {
            transform:translate(70.217px,80.0px) rotate(2.07deg)
          }
          70.5% {
            transform:translate(70.197px,80.0px) rotate(1.884deg)
          }
          71% {
            transform:translate(70.178px,80.0px) rotate(1.698deg)
          }
          71.5% {
            transform:translate(70.159px,80.0px) rotate(1.512deg)
          }
          72% {
            transform:translate(70.139px,80.0px) rotate(1.328deg)
          }
          72.5% {
            transform:translate(70.121px,80.0px) rotate(1.148deg)
          }
          73% {
            transform:translate(70.102px,80.0px) rotate(0.971deg)
          }
          73.5% {
            transform:translate(70.084px,80.0px) rotate(0.799deg)
          }
          74% {
            transform:translate(70.067px,80.0px) rotate(0.633deg)
          }
          74.5% {
            transform:translate(70.05px,80.0px) rotate(0.473deg)
          }
          75% {
            transform:translate(70.034px,80.0px) rotate(0.32deg)
          }
          75.5% {
            transform:translate(70.019px,80.0px) rotate(0.174deg)
          }
          76% {
            transform:translate(70.005px,80.0px) rotate(0.037deg)
          }
          76.5% {
            transform:translate(69.991px,80.0px) rotate(-0.092deg)
          }
          77% {
            transform:translate(69.979px,80.0px) rotate(-0.212deg)
          }
          77.5% {
            transform:translate(69.967px,80.0px) rotate(-0.323deg)
          }
          78% {
            transform:translate(69.957px,80.0px) rotate(-0.425deg)
          }
          78.5% {
            transform:translate(69.947px,80.0px) rotate(-0.518deg)
          }
          79% {
            transform:translate(69.938px,80.0px) rotate(-0.602deg)
          }
          79.5% {
            transform:translate(69.93px,80.0px) rotate(-0.677deg)
          }
          80% {
            transform:translate(69.923px,80.0px) rotate(-0.742deg)
          }
          94% {
            transform:translate(69.923px,80.0px) rotate(-0.742deg)
          }
          94.01% {
            transform:translate(46.815px,77.877px) rotate(-224.031deg)
          }
          100% {
            transform:translate(46.815px,77.877px) rotate(-224.031deg)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Ball-and-Beam Control">
        <path class="ink muted" d="M70 91 60 113H80Z M49 114H91"/>
        <g class="cycle">
          <g class="beam">
            <rect class="ink paper" x="-52" y="-2" width="104" height="4" rx="1"/>
            <path class="ink warm" style="fill:none" d="M0-3V-10m-3 2 3-3 3 3"/>
          </g>
          <g class="ball">
            <circle class="ink paper" r="6"/>
            <path class="ink" d="M-4 0H4"/>
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

if (!customElements.get("concept-ball-and-beam-control")) {
  customElements.define("concept-ball-and-beam-control", ConceptBallAndBeamControl);
}
