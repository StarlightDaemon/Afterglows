// Amplitude Quantization. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAmplitudeQuantization extends HTMLElement {
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
        .band {
          fill:#0b1b15;
          stroke:#375b51;
          stroke-width:.6
        }
        .b5 {
          fill:#234a3b
        }
        .input-guide {
          stroke:#f3c977;
          stroke-width:1.2
        }
        .output-guide {
          stroke:#77c9ef;
          stroke-width:1.2
        }
        .error {
          fill:none;
          stroke:#ed8eab;
          stroke-width:1.6;
          animation:quant-error 8s linear infinite
        }
        .input-level {
          animation:quant-input 8s linear infinite
        }
        .quantized {
          animation:quant-output 8s steps(1,end) infinite
        }
        @keyframes quant-input {
          0% {
            transform:translateY(50.4px)
          }
          0.6250% {
            transform:translateY(50.37px)
          }
          1.2500% {
            transform:translateY(50.281px)
          }
          1.8750% {
            transform:translateY(50.132px)
          }
          2.5000% {
            transform:translateY(49.924px)
          }
          3.1250% {
            transform:translateY(49.658px)
          }
          3.7500% {
            transform:translateY(49.332px)
          }
          4.3750% {
            transform:translateY(48.949px)
          }
          5% {
            transform:translateY(48.509px)
          }
          5.6250% {
            transform:translateY(48.012px)
          }
          6.2500% {
            transform:translateY(47.459px)
          }
          6.8750% {
            transform:translateY(46.851px)
          }
          7.5000% {
            transform:translateY(46.188px)
          }
          8.1250% {
            transform:translateY(45.473px)
          }
          8.7500% {
            transform:translateY(44.706px)
          }
          9.3750% {
            transform:translateY(43.888px)
          }
          10% {
            transform:translateY(43.02px)
          }
          10.6250% {
            transform:translateY(42.105px)
          }
          11.2500% {
            transform:translateY(41.142px)
          }
          11.8750% {
            transform:translateY(40.134px)
          }
          12.5000% {
            transform:translateY(39.083px)
          }
          13.1250% {
            transform:translateY(37.989px)
          }
          13.7500% {
            transform:translateY(36.855px)
          }
          14.3750% {
            transform:translateY(35.682px)
          }
          15.0000% {
            transform:translateY(34.472px)
          }
          15.6250% {
            transform:translateY(33.227px)
          }
          16.2500% {
            transform:translateY(31.949px)
          }
          16.8750% {
            transform:translateY(30.64px)
          }
          17.5000% {
            transform:translateY(29.302px)
          }
          18.1250% {
            transform:translateY(27.937px)
          }
          18.7500% {
            transform:translateY(26.547px)
          }
          19.3750% {
            transform:translateY(25.134px)
          }
          20% {
            transform:translateY(23.7px)
          }
          20.6250% {
            transform:translateY(22.248px)
          }
          21.2500% {
            transform:translateY(20.78px)
          }
          21.8750% {
            transform:translateY(19.298px)
          }
          22.5000% {
            transform:translateY(17.805px)
          }
          23.1250% {
            transform:translateY(16.302px)
          }
          23.7500% {
            transform:translateY(14.792px)
          }
          24.3750% {
            transform:translateY(13.277px)
          }
          25% {
            transform:translateY(11.76px)
          }
          25.6250% {
            transform:translateY(10.243px)
          }
          26.2500% {
            transform:translateY(8.728px)
          }
          26.8750% {
            transform:translateY(7.218px)
          }
          27.5000% {
            transform:translateY(5.715px)
          }
          28.1250% {
            transform:translateY(4.222px)
          }
          28.7500% {
            transform:translateY(2.74px)
          }
          29.3750% {
            transform:translateY(1.272px)
          }
          30.0000% {
            transform:translateY(-0.18px)
          }
          30.6250% {
            transform:translateY(-1.614px)
          }
          31.2500% {
            transform:translateY(-3.027px)
          }
          31.8750% {
            transform:translateY(-4.417px)
          }
          32.5000% {
            transform:translateY(-5.782px)
          }
          33.1250% {
            transform:translateY(-7.12px)
          }
          33.7500% {
            transform:translateY(-8.429px)
          }
          34.3750% {
            transform:translateY(-9.707px)
          }
          35% {
            transform:translateY(-10.952px)
          }
          35.6250% {
            transform:translateY(-12.162px)
          }
          36.2500% {
            transform:translateY(-13.335px)
          }
          36.8750% {
            transform:translateY(-14.469px)
          }
          37.5000% {
            transform:translateY(-15.563px)
          }
          38.1250% {
            transform:translateY(-16.614px)
          }
          38.7500% {
            transform:translateY(-17.622px)
          }
          39.3750% {
            transform:translateY(-18.585px)
          }
          40% {
            transform:translateY(-19.5px)
          }
          40.6250% {
            transform:translateY(-20.368px)
          }
          41.2500% {
            transform:translateY(-21.186px)
          }
          41.8750% {
            transform:translateY(-21.953px)
          }
          42.5000% {
            transform:translateY(-22.668px)
          }
          43.1250% {
            transform:translateY(-23.331px)
          }
          43.7500% {
            transform:translateY(-23.939px)
          }
          44.3750% {
            transform:translateY(-24.492px)
          }
          45% {
            transform:translateY(-24.989px)
          }
          45.6250% {
            transform:translateY(-25.429px)
          }
          46.2500% {
            transform:translateY(-25.812px)
          }
          46.8750% {
            transform:translateY(-26.138px)
          }
          47.5000% {
            transform:translateY(-26.404px)
          }
          48.1250% {
            transform:translateY(-26.612px)
          }
          48.7500% {
            transform:translateY(-26.761px)
          }
          49.3750% {
            transform:translateY(-26.85px)
          }
          50% {
            transform:translateY(-26.88px)
          }
          50.6250% {
            transform:translateY(-26.85px)
          }
          51.2500% {
            transform:translateY(-26.761px)
          }
          51.8750% {
            transform:translateY(-26.612px)
          }
          52.5000% {
            transform:translateY(-26.404px)
          }
          53.1250% {
            transform:translateY(-26.138px)
          }
          53.7500% {
            transform:translateY(-25.812px)
          }
          54.3750% {
            transform:translateY(-25.429px)
          }
          55.0000% {
            transform:translateY(-24.989px)
          }
          55.6250% {
            transform:translateY(-24.492px)
          }
          56.2500% {
            transform:translateY(-23.939px)
          }
          56.8750% {
            transform:translateY(-23.331px)
          }
          57.5000% {
            transform:translateY(-22.668px)
          }
          58.1250% {
            transform:translateY(-21.953px)
          }
          58.7500% {
            transform:translateY(-21.186px)
          }
          59.3750% {
            transform:translateY(-20.368px)
          }
          60.0000% {
            transform:translateY(-19.5px)
          }
          60.6250% {
            transform:translateY(-18.585px)
          }
          61.2500% {
            transform:translateY(-17.622px)
          }
          61.8750% {
            transform:translateY(-16.614px)
          }
          62.5000% {
            transform:translateY(-15.563px)
          }
          63.1250% {
            transform:translateY(-14.469px)
          }
          63.7500% {
            transform:translateY(-13.335px)
          }
          64.3750% {
            transform:translateY(-12.162px)
          }
          65% {
            transform:translateY(-10.952px)
          }
          65.6250% {
            transform:translateY(-9.707px)
          }
          66.2500% {
            transform:translateY(-8.429px)
          }
          66.8750% {
            transform:translateY(-7.12px)
          }
          67.5000% {
            transform:translateY(-5.782px)
          }
          68.1250% {
            transform:translateY(-4.417px)
          }
          68.7500% {
            transform:translateY(-3.027px)
          }
          69.3750% {
            transform:translateY(-1.614px)
          }
          70% {
            transform:translateY(-0.18px)
          }
          70.6250% {
            transform:translateY(1.272px)
          }
          71.2500% {
            transform:translateY(2.74px)
          }
          71.8750% {
            transform:translateY(4.222px)
          }
          72.5000% {
            transform:translateY(5.715px)
          }
          73.1250% {
            transform:translateY(7.218px)
          }
          73.7500% {
            transform:translateY(8.728px)
          }
          74.3750% {
            transform:translateY(10.243px)
          }
          75% {
            transform:translateY(11.76px)
          }
          75.6250% {
            transform:translateY(13.277px)
          }
          76.2500% {
            transform:translateY(14.792px)
          }
          76.8750% {
            transform:translateY(16.302px)
          }
          77.5000% {
            transform:translateY(17.805px)
          }
          78.1250% {
            transform:translateY(19.298px)
          }
          78.7500% {
            transform:translateY(20.78px)
          }
          79.3750% {
            transform:translateY(22.248px)
          }
          80% {
            transform:translateY(23.7px)
          }
          80.6250% {
            transform:translateY(25.134px)
          }
          81.2500% {
            transform:translateY(26.547px)
          }
          81.8750% {
            transform:translateY(27.937px)
          }
          82.5000% {
            transform:translateY(29.302px)
          }
          83.1250% {
            transform:translateY(30.64px)
          }
          83.7500% {
            transform:translateY(31.949px)
          }
          84.3750% {
            transform:translateY(33.227px)
          }
          85.0000% {
            transform:translateY(34.472px)
          }
          85.6250% {
            transform:translateY(35.682px)
          }
          86.2500% {
            transform:translateY(36.855px)
          }
          86.8750% {
            transform:translateY(37.989px)
          }
          87.5000% {
            transform:translateY(39.083px)
          }
          88.1250% {
            transform:translateY(40.134px)
          }
          88.7500% {
            transform:translateY(41.142px)
          }
          89.3750% {
            transform:translateY(42.105px)
          }
          90% {
            transform:translateY(43.02px)
          }
          90.6250% {
            transform:translateY(43.888px)
          }
          91.2500% {
            transform:translateY(44.706px)
          }
          91.8750% {
            transform:translateY(45.473px)
          }
          92.5000% {
            transform:translateY(46.188px)
          }
          93.1250% {
            transform:translateY(46.851px)
          }
          93.7500% {
            transform:translateY(47.459px)
          }
          94.3750% {
            transform:translateY(48.012px)
          }
          95% {
            transform:translateY(48.509px)
          }
          95.6250% {
            transform:translateY(48.949px)
          }
          96.2500% {
            transform:translateY(49.332px)
          }
          96.8750% {
            transform:translateY(49.658px)
          }
          97.5000% {
            transform:translateY(49.924px)
          }
          98.1250% {
            transform:translateY(50.132px)
          }
          98.7500% {
            transform:translateY(50.281px)
          }
          99.3750% {
            transform:translateY(50.37px)
          }
          100% {
            transform:translateY(50.4px)
          }
        }
        @keyframes quant-output {
          0% {
            transform:translateY(52.5px)
          }
          9.8309% {
            transform:translateY(42px)
          }
          15.8554% {
            transform:translateY(31.5px)
          }
          20.6201% {
            transform:translateY(21px)
          }
          25% {
            transform:translateY(10.5px)
          }
          29.3799% {
            transform:translateY(0px)
          }
          34.1446% {
            transform:translateY(-10.5px)
          }
          40.1691% {
            transform:translateY(-21px)
          }
          59.8309% {
            transform:translateY(-10.5px)
          }
          65.8554% {
            transform:translateY(0px)
          }
          70.6201% {
            transform:translateY(10.5px)
          }
          75% {
            transform:translateY(21px)
          }
          79.3799% {
            transform:translateY(31.5px)
          }
          84.1446% {
            transform:translateY(42px)
          }
          90.1691% {
            transform:translateY(52.5px)
          }
          100% {
            transform:translateY(52.5px)
          }
        }
        @keyframes quant-error {
          0.0000% {
            d:path("M116 108.64H122M119 108.64V106.75M116 106.75H122")
          }
          0.6250% {
            d:path("M116 108.61H122M119 108.61V106.75M116 106.75H122")
          }
          1.2500% {
            d:path("M116 108.521H122M119 108.521V106.75M116 106.75H122")
          }
          1.8750% {
            d:path("M116 108.372H122M119 108.372V106.75M116 106.75H122")
          }
          2.5000% {
            d:path("M116 108.164H122M119 108.164V106.75M116 106.75H122")
          }
          3.1250% {
            d:path("M116 107.898H122M119 107.898V106.75M116 106.75H122")
          }
          3.7500% {
            d:path("M116 107.572H122M119 107.572V106.75M116 106.75H122")
          }
          4.3750% {
            d:path("M116 107.189H122M119 107.189V106.75M116 106.75H122")
          }
          5.0000% {
            d:path("M116 106.749H122M119 106.749V106.75M116 106.75H122")
          }
          5.6250% {
            d:path("M116 106.252H122M119 106.252V106.75M116 106.75H122")
          }
          6.2500% {
            d:path("M116 105.699H122M119 105.699V106.75M116 106.75H122")
          }
          6.8750% {
            d:path("M116 105.091H122M119 105.091V106.75M116 106.75H122")
          }
          7.5000% {
            d:path("M116 104.428H122M119 104.428V106.75M116 106.75H122")
          }
          8.1250% {
            d:path("M116 103.713H122M119 103.713V106.75M116 106.75H122")
          }
          8.7500% {
            d:path("M116 102.946H122M119 102.946V106.75M116 106.75H122")
          }
          9.3750% {
            d:path("M116 102.128H122M119 102.128V106.75M116 106.75H122")
          }
          9.8308% {
            d:path("M116 101.5H122M119 101.5V106.75M116 106.75H122")
          }
          9.8309% {
            d:path("M116 101.5H122M119 101.5V96.25M116 96.25H122")
          }
          10.0000% {
            d:path("M116 101.26H122M119 101.26V96.25M116 96.25H122")
          }
          10.6250% {
            d:path("M116 100.345H122M119 100.345V96.25M116 96.25H122")
          }
          11.2500% {
            d:path("M116 99.382H122M119 99.382V96.25M116 96.25H122")
          }
          11.8750% {
            d:path("M116 98.374H122M119 98.374V96.25M116 96.25H122")
          }
          12.5000% {
            d:path("M116 97.323H122M119 97.323V96.25M116 96.25H122")
          }
          13.1250% {
            d:path("M116 96.229H122M119 96.229V96.25M116 96.25H122")
          }
          13.7500% {
            d:path("M116 95.095H122M119 95.095V96.25M116 96.25H122")
          }
          14.3750% {
            d:path("M116 93.922H122M119 93.922V96.25M116 96.25H122")
          }
          15.0000% {
            d:path("M116 92.712H122M119 92.712V96.25M116 96.25H122")
          }
          15.6250% {
            d:path("M116 91.467H122M119 91.467V96.25M116 96.25H122")
          }
          15.8553% {
            d:path("M116 91.0H122M119 91.0V96.25M116 96.25H122")
          }
          15.8554% {
            d:path("M116 91.0H122M119 91.0V85.75M116 85.75H122")
          }
          16.2500% {
            d:path("M116 90.189H122M119 90.189V85.75M116 85.75H122")
          }
          16.8750% {
            d:path("M116 88.88H122M119 88.88V85.75M116 85.75H122")
          }
          17.5000% {
            d:path("M116 87.542H122M119 87.542V85.75M116 85.75H122")
          }
          18.1250% {
            d:path("M116 86.177H122M119 86.177V85.75M116 85.75H122")
          }
          18.7500% {
            d:path("M116 84.787H122M119 84.787V85.75M116 85.75H122")
          }
          19.3750% {
            d:path("M116 83.374H122M119 83.374V85.75M116 85.75H122")
          }
          20.0000% {
            d:path("M116 81.94H122M119 81.94V85.75M116 85.75H122")
          }
          20.6200% {
            d:path("M116 80.5H122M119 80.5V85.75M116 85.75H122")
          }
          20.6201% {
            d:path("M116 80.5H122M119 80.5V75.25M116 75.25H122")
          }
          20.6250% {
            d:path("M116 80.488H122M119 80.488V75.25M116 75.25H122")
          }
          21.2500% {
            d:path("M116 79.02H122M119 79.02V75.25M116 75.25H122")
          }
          21.8750% {
            d:path("M116 77.538H122M119 77.538V75.25M116 75.25H122")
          }
          22.5000% {
            d:path("M116 76.045H122M119 76.045V75.25M116 75.25H122")
          }
          23.1250% {
            d:path("M116 74.542H122M119 74.542V75.25M116 75.25H122")
          }
          23.7500% {
            d:path("M116 73.032H122M119 73.032V75.25M116 75.25H122")
          }
          24.3750% {
            d:path("M116 71.517H122M119 71.517V75.25M116 75.25H122")
          }
          24.9999% {
            d:path("M116 70.0H122M119 70.0V75.25M116 75.25H122")
          }
          25.0000% {
            d:path("M116 70H122M119 70V64.75M116 64.75H122")
          }
          25.6250% {
            d:path("M116 68.483H122M119 68.483V64.75M116 64.75H122")
          }
          26.2500% {
            d:path("M116 66.968H122M119 66.968V64.75M116 64.75H122")
          }
          26.8750% {
            d:path("M116 65.458H122M119 65.458V64.75M116 64.75H122")
          }
          27.5000% {
            d:path("M116 63.955H122M119 63.955V64.75M116 64.75H122")
          }
          28.1250% {
            d:path("M116 62.462H122M119 62.462V64.75M116 64.75H122")
          }
          28.7500% {
            d:path("M116 60.98H122M119 60.98V64.75M116 64.75H122")
          }
          29.3750% {
            d:path("M116 59.512H122M119 59.512V64.75M116 64.75H122")
          }
          29.3798% {
            d:path("M116 59.5H122M119 59.5V64.75M116 64.75H122")
          }
          29.3799% {
            d:path("M116 59.5H122M119 59.5V54.25M116 54.25H122")
          }
          30.0000% {
            d:path("M116 58.06H122M119 58.06V54.25M116 54.25H122")
          }
          30.6250% {
            d:path("M116 56.626H122M119 56.626V54.25M116 54.25H122")
          }
          31.2500% {
            d:path("M116 55.213H122M119 55.213V54.25M116 54.25H122")
          }
          31.8750% {
            d:path("M116 53.823H122M119 53.823V54.25M116 54.25H122")
          }
          32.5000% {
            d:path("M116 52.458H122M119 52.458V54.25M116 54.25H122")
          }
          33.1250% {
            d:path("M116 51.12H122M119 51.12V54.25M116 54.25H122")
          }
          33.7500% {
            d:path("M116 49.811H122M119 49.811V54.25M116 54.25H122")
          }
          34.1445% {
            d:path("M116 49.0H122M119 49.0V54.25M116 54.25H122")
          }
          34.1446% {
            d:path("M116 49.0H122M119 49.0V43.75M116 43.75H122")
          }
          34.3750% {
            d:path("M116 48.533H122M119 48.533V43.75M116 43.75H122")
          }
          35.0000% {
            d:path("M116 47.288H122M119 47.288V43.75M116 43.75H122")
          }
          35.6250% {
            d:path("M116 46.078H122M119 46.078V43.75M116 43.75H122")
          }
          36.2500% {
            d:path("M116 44.905H122M119 44.905V43.75M116 43.75H122")
          }
          36.8750% {
            d:path("M116 43.771H122M119 43.771V43.75M116 43.75H122")
          }
          37.5000% {
            d:path("M116 42.677H122M119 42.677V43.75M116 43.75H122")
          }
          38.1250% {
            d:path("M116 41.626H122M119 41.626V43.75M116 43.75H122")
          }
          38.7500% {
            d:path("M116 40.618H122M119 40.618V43.75M116 43.75H122")
          }
          39.3750% {
            d:path("M116 39.655H122M119 39.655V43.75M116 43.75H122")
          }
          40.0000% {
            d:path("M116 38.74H122M119 38.74V43.75M116 43.75H122")
          }
          40.1690% {
            d:path("M116 38.5H122M119 38.5V43.75M116 43.75H122")
          }
          40.1691% {
            d:path("M116 38.5H122M119 38.5V33.25M116 33.25H122")
          }
          40.6250% {
            d:path("M116 37.872H122M119 37.872V33.25M116 33.25H122")
          }
          41.2500% {
            d:path("M116 37.054H122M119 37.054V33.25M116 33.25H122")
          }
          41.8750% {
            d:path("M116 36.287H122M119 36.287V33.25M116 33.25H122")
          }
          42.5000% {
            d:path("M116 35.572H122M119 35.572V33.25M116 33.25H122")
          }
          43.1250% {
            d:path("M116 34.909H122M119 34.909V33.25M116 33.25H122")
          }
          43.7500% {
            d:path("M116 34.301H122M119 34.301V33.25M116 33.25H122")
          }
          44.3750% {
            d:path("M116 33.748H122M119 33.748V33.25M116 33.25H122")
          }
          45.0000% {
            d:path("M116 33.251H122M119 33.251V33.25M116 33.25H122")
          }
          45.6250% {
            d:path("M116 32.811H122M119 32.811V33.25M116 33.25H122")
          }
          46.2500% {
            d:path("M116 32.428H122M119 32.428V33.25M116 33.25H122")
          }
          46.8750% {
            d:path("M116 32.102H122M119 32.102V33.25M116 33.25H122")
          }
          47.5000% {
            d:path("M116 31.836H122M119 31.836V33.25M116 33.25H122")
          }
          48.1250% {
            d:path("M116 31.628H122M119 31.628V33.25M116 33.25H122")
          }
          48.7500% {
            d:path("M116 31.479H122M119 31.479V33.25M116 33.25H122")
          }
          49.3750% {
            d:path("M116 31.39H122M119 31.39V33.25M116 33.25H122")
          }
          50.0000% {
            d:path("M116 31.36H122M119 31.36V33.25M116 33.25H122")
          }
          50.6250% {
            d:path("M116 31.39H122M119 31.39V33.25M116 33.25H122")
          }
          51.2500% {
            d:path("M116 31.479H122M119 31.479V33.25M116 33.25H122")
          }
          51.8750% {
            d:path("M116 31.628H122M119 31.628V33.25M116 33.25H122")
          }
          52.5000% {
            d:path("M116 31.836H122M119 31.836V33.25M116 33.25H122")
          }
          53.1250% {
            d:path("M116 32.102H122M119 32.102V33.25M116 33.25H122")
          }
          53.7500% {
            d:path("M116 32.428H122M119 32.428V33.25M116 33.25H122")
          }
          54.3750% {
            d:path("M116 32.811H122M119 32.811V33.25M116 33.25H122")
          }
          55.0000% {
            d:path("M116 33.251H122M119 33.251V33.25M116 33.25H122")
          }
          55.6250% {
            d:path("M116 33.748H122M119 33.748V33.25M116 33.25H122")
          }
          56.2500% {
            d:path("M116 34.301H122M119 34.301V33.25M116 33.25H122")
          }
          56.8750% {
            d:path("M116 34.909H122M119 34.909V33.25M116 33.25H122")
          }
          57.5000% {
            d:path("M116 35.572H122M119 35.572V33.25M116 33.25H122")
          }
          58.1250% {
            d:path("M116 36.287H122M119 36.287V33.25M116 33.25H122")
          }
          58.7500% {
            d:path("M116 37.054H122M119 37.054V33.25M116 33.25H122")
          }
          59.3750% {
            d:path("M116 37.872H122M119 37.872V33.25M116 33.25H122")
          }
          59.8308% {
            d:path("M116 38.5H122M119 38.5V33.25M116 33.25H122")
          }
          59.8309% {
            d:path("M116 38.5H122M119 38.5V43.75M116 43.75H122")
          }
          60.0000% {
            d:path("M116 38.74H122M119 38.74V43.75M116 43.75H122")
          }
          60.6250% {
            d:path("M116 39.655H122M119 39.655V43.75M116 43.75H122")
          }
          61.2500% {
            d:path("M116 40.618H122M119 40.618V43.75M116 43.75H122")
          }
          61.8750% {
            d:path("M116 41.626H122M119 41.626V43.75M116 43.75H122")
          }
          62.5000% {
            d:path("M116 42.677H122M119 42.677V43.75M116 43.75H122")
          }
          63.1250% {
            d:path("M116 43.771H122M119 43.771V43.75M116 43.75H122")
          }
          63.7500% {
            d:path("M116 44.905H122M119 44.905V43.75M116 43.75H122")
          }
          64.3750% {
            d:path("M116 46.078H122M119 46.078V43.75M116 43.75H122")
          }
          65.0000% {
            d:path("M116 47.288H122M119 47.288V43.75M116 43.75H122")
          }
          65.6250% {
            d:path("M116 48.533H122M119 48.533V43.75M116 43.75H122")
          }
          65.8553% {
            d:path("M116 49.0H122M119 49.0V43.75M116 43.75H122")
          }
          65.8554% {
            d:path("M116 49.0H122M119 49.0V54.25M116 54.25H122")
          }
          66.2500% {
            d:path("M116 49.811H122M119 49.811V54.25M116 54.25H122")
          }
          66.8750% {
            d:path("M116 51.12H122M119 51.12V54.25M116 54.25H122")
          }
          67.5000% {
            d:path("M116 52.458H122M119 52.458V54.25M116 54.25H122")
          }
          68.1250% {
            d:path("M116 53.823H122M119 53.823V54.25M116 54.25H122")
          }
          68.7500% {
            d:path("M116 55.213H122M119 55.213V54.25M116 54.25H122")
          }
          69.3750% {
            d:path("M116 56.626H122M119 56.626V54.25M116 54.25H122")
          }
          70.0000% {
            d:path("M116 58.06H122M119 58.06V54.25M116 54.25H122")
          }
          70.6200% {
            d:path("M116 59.5H122M119 59.5V54.25M116 54.25H122")
          }
          70.6201% {
            d:path("M116 59.5H122M119 59.5V64.75M116 64.75H122")
          }
          70.6250% {
            d:path("M116 59.512H122M119 59.512V64.75M116 64.75H122")
          }
          71.2500% {
            d:path("M116 60.98H122M119 60.98V64.75M116 64.75H122")
          }
          71.8750% {
            d:path("M116 62.462H122M119 62.462V64.75M116 64.75H122")
          }
          72.5000% {
            d:path("M116 63.955H122M119 63.955V64.75M116 64.75H122")
          }
          73.1250% {
            d:path("M116 65.458H122M119 65.458V64.75M116 64.75H122")
          }
          73.7500% {
            d:path("M116 66.968H122M119 66.968V64.75M116 64.75H122")
          }
          74.3750% {
            d:path("M116 68.483H122M119 68.483V64.75M116 64.75H122")
          }
          74.9999% {
            d:path("M116 70.0H122M119 70.0V64.75M116 64.75H122")
          }
          75.0000% {
            d:path("M116 70H122M119 70V75.25M116 75.25H122")
          }
          75.6250% {
            d:path("M116 71.517H122M119 71.517V75.25M116 75.25H122")
          }
          76.2500% {
            d:path("M116 73.032H122M119 73.032V75.25M116 75.25H122")
          }
          76.8750% {
            d:path("M116 74.542H122M119 74.542V75.25M116 75.25H122")
          }
          77.5000% {
            d:path("M116 76.045H122M119 76.045V75.25M116 75.25H122")
          }
          78.1250% {
            d:path("M116 77.538H122M119 77.538V75.25M116 75.25H122")
          }
          78.7500% {
            d:path("M116 79.02H122M119 79.02V75.25M116 75.25H122")
          }
          79.3750% {
            d:path("M116 80.488H122M119 80.488V75.25M116 75.25H122")
          }
          79.3798% {
            d:path("M116 80.5H122M119 80.5V75.25M116 75.25H122")
          }
          79.3799% {
            d:path("M116 80.5H122M119 80.5V85.75M116 85.75H122")
          }
          80.0000% {
            d:path("M116 81.94H122M119 81.94V85.75M116 85.75H122")
          }
          80.6250% {
            d:path("M116 83.374H122M119 83.374V85.75M116 85.75H122")
          }
          81.2500% {
            d:path("M116 84.787H122M119 84.787V85.75M116 85.75H122")
          }
          81.8750% {
            d:path("M116 86.177H122M119 86.177V85.75M116 85.75H122")
          }
          82.5000% {
            d:path("M116 87.542H122M119 87.542V85.75M116 85.75H122")
          }
          83.1250% {
            d:path("M116 88.88H122M119 88.88V85.75M116 85.75H122")
          }
          83.7500% {
            d:path("M116 90.189H122M119 90.189V85.75M116 85.75H122")
          }
          84.1445% {
            d:path("M116 91.0H122M119 91.0V85.75M116 85.75H122")
          }
          84.1446% {
            d:path("M116 91.0H122M119 91.0V96.25M116 96.25H122")
          }
          84.3750% {
            d:path("M116 91.467H122M119 91.467V96.25M116 96.25H122")
          }
          85.0000% {
            d:path("M116 92.712H122M119 92.712V96.25M116 96.25H122")
          }
          85.6250% {
            d:path("M116 93.922H122M119 93.922V96.25M116 96.25H122")
          }
          86.2500% {
            d:path("M116 95.095H122M119 95.095V96.25M116 96.25H122")
          }
          86.8750% {
            d:path("M116 96.229H122M119 96.229V96.25M116 96.25H122")
          }
          87.5000% {
            d:path("M116 97.323H122M119 97.323V96.25M116 96.25H122")
          }
          88.1250% {
            d:path("M116 98.374H122M119 98.374V96.25M116 96.25H122")
          }
          88.7500% {
            d:path("M116 99.382H122M119 99.382V96.25M116 96.25H122")
          }
          89.3750% {
            d:path("M116 100.345H122M119 100.345V96.25M116 96.25H122")
          }
          90.0000% {
            d:path("M116 101.26H122M119 101.26V96.25M116 96.25H122")
          }
          90.1690% {
            d:path("M116 101.5H122M119 101.5V96.25M116 96.25H122")
          }
          90.1691% {
            d:path("M116 101.5H122M119 101.5V106.75M116 106.75H122")
          }
          90.6250% {
            d:path("M116 102.128H122M119 102.128V106.75M116 106.75H122")
          }
          91.2500% {
            d:path("M116 102.946H122M119 102.946V106.75M116 106.75H122")
          }
          91.8750% {
            d:path("M116 103.713H122M119 103.713V106.75M116 106.75H122")
          }
          92.5000% {
            d:path("M116 104.428H122M119 104.428V106.75M116 106.75H122")
          }
          93.1250% {
            d:path("M116 105.091H122M119 105.091V106.75M116 106.75H122")
          }
          93.7500% {
            d:path("M116 105.699H122M119 105.699V106.75M116 106.75H122")
          }
          94.3750% {
            d:path("M116 106.252H122M119 106.252V106.75M116 106.75H122")
          }
          95.0000% {
            d:path("M116 106.749H122M119 106.749V106.75M116 106.75H122")
          }
          95.6250% {
            d:path("M116 107.189H122M119 107.189V106.75M116 106.75H122")
          }
          96.2500% {
            d:path("M116 107.572H122M119 107.572V106.75M116 106.75H122")
          }
          96.8750% {
            d:path("M116 107.898H122M119 107.898V106.75M116 106.75H122")
          }
          97.5000% {
            d:path("M116 108.164H122M119 108.164V106.75M116 106.75H122")
          }
          98.1250% {
            d:path("M116 108.372H122M119 108.372V106.75M116 106.75H122")
          }
          98.7500% {
            d:path("M116 108.521H122M119 108.521V106.75M116 106.75H122")
          }
          99.3750% {
            d:path("M116 108.61H122M119 108.61V106.75M116 106.75H122")
          }
          100.0000% {
            d:path("M116 108.64H122M119 108.64V106.75M116 106.75H122")
          }
        }
        .b0 {
          animation:quant-band-0 8s steps(1,end) infinite
        }
        @keyframes quant-band-0 {
          0% {
            fill:#234a3b
          }
          9.8309% {
            fill:#0b1b15
          }
          15.8554% {
            fill:#0b1b15
          }
          20.6201% {
            fill:#0b1b15
          }
          25% {
            fill:#0b1b15
          }
          29.3799% {
            fill:#0b1b15
          }
          34.1446% {
            fill:#0b1b15
          }
          40.1691% {
            fill:#0b1b15
          }
          59.8309% {
            fill:#0b1b15
          }
          65.8554% {
            fill:#0b1b15
          }
          70.6201% {
            fill:#0b1b15
          }
          75% {
            fill:#0b1b15
          }
          79.3799% {
            fill:#0b1b15
          }
          84.1446% {
            fill:#0b1b15
          }
          90.1691% {
            fill:#234a3b
          }
        }
        .b1 {
          animation:quant-band-1 8s steps(1,end) infinite
        }
        @keyframes quant-band-1 {
          0% {
            fill:#0b1b15
          }
          9.8309% {
            fill:#234a3b
          }
          15.8554% {
            fill:#0b1b15
          }
          20.6201% {
            fill:#0b1b15
          }
          25% {
            fill:#0b1b15
          }
          29.3799% {
            fill:#0b1b15
          }
          34.1446% {
            fill:#0b1b15
          }
          40.1691% {
            fill:#0b1b15
          }
          59.8309% {
            fill:#0b1b15
          }
          65.8554% {
            fill:#0b1b15
          }
          70.6201% {
            fill:#0b1b15
          }
          75% {
            fill:#0b1b15
          }
          79.3799% {
            fill:#0b1b15
          }
          84.1446% {
            fill:#234a3b
          }
          90.1691% {
            fill:#0b1b15
          }
        }
        .b2 {
          animation:quant-band-2 8s steps(1,end) infinite
        }
        @keyframes quant-band-2 {
          0% {
            fill:#0b1b15
          }
          9.8309% {
            fill:#0b1b15
          }
          15.8554% {
            fill:#234a3b
          }
          20.6201% {
            fill:#0b1b15
          }
          25% {
            fill:#0b1b15
          }
          29.3799% {
            fill:#0b1b15
          }
          34.1446% {
            fill:#0b1b15
          }
          40.1691% {
            fill:#0b1b15
          }
          59.8309% {
            fill:#0b1b15
          }
          65.8554% {
            fill:#0b1b15
          }
          70.6201% {
            fill:#0b1b15
          }
          75% {
            fill:#0b1b15
          }
          79.3799% {
            fill:#234a3b
          }
          84.1446% {
            fill:#0b1b15
          }
          90.1691% {
            fill:#0b1b15
          }
        }
        .b3 {
          animation:quant-band-3 8s steps(1,end) infinite
        }
        @keyframes quant-band-3 {
          0% {
            fill:#0b1b15
          }
          9.8309% {
            fill:#0b1b15
          }
          15.8554% {
            fill:#0b1b15
          }
          20.6201% {
            fill:#234a3b
          }
          25% {
            fill:#0b1b15
          }
          29.3799% {
            fill:#0b1b15
          }
          34.1446% {
            fill:#0b1b15
          }
          40.1691% {
            fill:#0b1b15
          }
          59.8309% {
            fill:#0b1b15
          }
          65.8554% {
            fill:#0b1b15
          }
          70.6201% {
            fill:#0b1b15
          }
          75% {
            fill:#234a3b
          }
          79.3799% {
            fill:#0b1b15
          }
          84.1446% {
            fill:#0b1b15
          }
          90.1691% {
            fill:#0b1b15
          }
        }
        .b4 {
          animation:quant-band-4 8s steps(1,end) infinite
        }
        @keyframes quant-band-4 {
          0% {
            fill:#0b1b15
          }
          9.8309% {
            fill:#0b1b15
          }
          15.8554% {
            fill:#0b1b15
          }
          20.6201% {
            fill:#0b1b15
          }
          25% {
            fill:#234a3b
          }
          29.3799% {
            fill:#0b1b15
          }
          34.1446% {
            fill:#0b1b15
          }
          40.1691% {
            fill:#0b1b15
          }
          59.8309% {
            fill:#0b1b15
          }
          65.8554% {
            fill:#0b1b15
          }
          70.6201% {
            fill:#234a3b
          }
          75% {
            fill:#0b1b15
          }
          79.3799% {
            fill:#0b1b15
          }
          84.1446% {
            fill:#0b1b15
          }
          90.1691% {
            fill:#0b1b15
          }
        }
        .b5 {
          animation:quant-band-5 8s steps(1,end) infinite
        }
        @keyframes quant-band-5 {
          0% {
            fill:#0b1b15
          }
          9.8309% {
            fill:#0b1b15
          }
          15.8554% {
            fill:#0b1b15
          }
          20.6201% {
            fill:#0b1b15
          }
          25% {
            fill:#0b1b15
          }
          29.3799% {
            fill:#234a3b
          }
          34.1446% {
            fill:#0b1b15
          }
          40.1691% {
            fill:#0b1b15
          }
          59.8309% {
            fill:#0b1b15
          }
          65.8554% {
            fill:#234a3b
          }
          70.6201% {
            fill:#0b1b15
          }
          75% {
            fill:#0b1b15
          }
          79.3799% {
            fill:#0b1b15
          }
          84.1446% {
            fill:#0b1b15
          }
          90.1691% {
            fill:#0b1b15
          }
        }
        .b6 {
          animation:quant-band-6 8s steps(1,end) infinite
        }
        @keyframes quant-band-6 {
          0% {
            fill:#0b1b15
          }
          9.8309% {
            fill:#0b1b15
          }
          15.8554% {
            fill:#0b1b15
          }
          20.6201% {
            fill:#0b1b15
          }
          25% {
            fill:#0b1b15
          }
          29.3799% {
            fill:#0b1b15
          }
          34.1446% {
            fill:#234a3b
          }
          40.1691% {
            fill:#0b1b15
          }
          59.8309% {
            fill:#234a3b
          }
          65.8554% {
            fill:#0b1b15
          }
          70.6201% {
            fill:#0b1b15
          }
          75% {
            fill:#0b1b15
          }
          79.3799% {
            fill:#0b1b15
          }
          84.1446% {
            fill:#0b1b15
          }
          90.1691% {
            fill:#0b1b15
          }
        }
        .b7 {
          animation:quant-band-7 8s steps(1,end) infinite
        }
        @keyframes quant-band-7 {
          0% {
            fill:#0b1b15
          }
          9.8309% {
            fill:#0b1b15
          }
          15.8554% {
            fill:#0b1b15
          }
          20.6201% {
            fill:#0b1b15
          }
          25% {
            fill:#0b1b15
          }
          29.3799% {
            fill:#0b1b15
          }
          34.1446% {
            fill:#0b1b15
          }
          40.1691% {
            fill:#234a3b
          }
          59.8309% {
            fill:#0b1b15
          }
          65.8554% {
            fill:#0b1b15
          }
          70.6201% {
            fill:#0b1b15
          }
          75% {
            fill:#0b1b15
          }
          79.3799% {
            fill:#0b1b15
          }
          84.1446% {
            fill:#0b1b15
          }
          90.1691% {
            fill:#0b1b15
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Amplitude Quantization">
        <path class="ink muted" d="M35 28V112"/>
        <rect class="band b0" x="57" y="101.5" width="53" height="10.5"/>
        <path class="ink muted" d="M60 106.75H65"/>
        <rect class="band b1" x="57" y="91" width="53" height="10.5"/>
        <path class="ink muted" d="M60 96.25H65"/>
        <rect class="band b2" x="57" y="80.5" width="53" height="10.5"/>
        <path class="ink muted" d="M60 85.75H65"/>
        <rect class="band b3" x="57" y="70" width="53" height="10.5"/>
        <path class="ink muted" d="M60 75.25H65"/>
        <rect class="band b4" x="57" y="59.5" width="53" height="10.5"/>
        <path class="ink muted" d="M60 64.75H65"/>
        <rect class="band b5" x="57" y="49" width="53" height="10.5"/>
        <path class="ink muted" d="M60 54.25H65"/>
        <rect class="band b6" x="57" y="38.5" width="53" height="10.5"/>
        <path class="ink muted" d="M60 43.75H65"/>
        <rect class="band b7" x="57" y="28" width="53" height="10.5"/>
        <path class="ink muted" d="M60 33.25H65"/>
        <g class="input-level">
          <path class="input-guide" d="M35 58.24H54"/>
          <circle class="warm" cx="35" cy="58.24" r="3.5"/>
        </g>
        <g class="quantized">
          <path class="output-guide" d="M66 54.25H106"/>
          <rect class="cool" x="91" y="50.25" width="8" height="8" rx="1"/>
        </g>
        <path class="error" d="M116 58.24H122M119 58.24V54.25M116 54.25H122"/>
        <path class="ink muted" d="M28 122H42M88 122H102"/>
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

if (!customElements.get("concept-amplitude-quantization")) {
  customElements.define("concept-amplitude-quantization", ConceptAmplitudeQuantization);
}
