// Capacitive Touch Sensing. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptCapacitiveTouchSensing extends HTMLElement {
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
        .body-link,.body-capacitor {
          fill:none;
          stroke:#648572;
          stroke-width:1.1
        }
        .body-link {
          animation:touch-body 12s linear infinite
        }
        .touch-fields {
          fill:none;
          stroke:#70edb1;
          stroke-width:1;
          stroke-dasharray:2 3;
          opacity:.55;
          animation:touch-field 12s linear infinite
        }
        .finger {
          transform:translateY(20px);
          animation:touch-finger 12s linear infinite
        }
        .finger-shell {
          fill:#3a3123;
          stroke:#e1ba82;
          stroke-width:1.3
        }
        .nail {
          fill:#66513a;
          stroke:#b79769;
          stroke-width:.7
        }
        .glass {
          fill:#14282a;
          stroke:#77c9ef;
          stroke-width:.9;
          fill-opacity:.8
        }
        .electrode {
          fill:#70edb1
        }
        .touch-threshold {
          stroke:#f3c977;
          stroke-width:.8;
          stroke-dasharray:3 3
        }
        .far-curve {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.4
        }
        .near-curve {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.7
        }
        .far-record {
          opacity:.35;
          animation:touch-far-record 12s linear infinite
        }
        .far-window {
          animation:touch-far-reveal 12s linear infinite
        }
        .near-window {
          animation:touch-near-reveal 12s linear infinite
        }
        .far-crossing {
          fill:#77c9ef;
          animation:touch-far-crossing 12s steps(1,end) infinite
        }
        .near-crossing {
          fill:#70edb1;
          animation:touch-near-crossing 12s steps(1,end) infinite
        }
        .charging-delay {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.2;
          animation:touch-delay 12s linear infinite
        }
        .touch-cycle {
          animation:touch-cycle 12s linear infinite
        }
        @keyframes touch-finger {
          0% {
            transform:translateY(0px)
          }
          0.833% {
            transform:translateY(0px)
          }
          1.667% {
            transform:translateY(0px)
          }
          2.5% {
            transform:translateY(0px)
          }
          3.333% {
            transform:translateY(0px)
          }
          4.167% {
            transform:translateY(0px)
          }
          5% {
            transform:translateY(0px)
          }
          5.833% {
            transform:translateY(0px)
          }
          6.667% {
            transform:translateY(0px)
          }
          7.5% {
            transform:translateY(0px)
          }
          8.333% {
            transform:translateY(0px)
          }
          9.167% {
            transform:translateY(0px)
          }
          10% {
            transform:translateY(0px)
          }
          10.833% {
            transform:translateY(0px)
          }
          11.667% {
            transform:translateY(0px)
          }
          12.5% {
            transform:translateY(0px)
          }
          13.333% {
            transform:translateY(0px)
          }
          14.167% {
            transform:translateY(0px)
          }
          15% {
            transform:translateY(0px)
          }
          15.833% {
            transform:translateY(0px)
          }
          16.667% {
            transform:translateY(0px)
          }
          17.5% {
            transform:translateY(0px)
          }
          18.333% {
            transform:translateY(0px)
          }
          19.167% {
            transform:translateY(0px)
          }
          20% {
            transform:translateY(0px)
          }
          20.833% {
            transform:translateY(0px)
          }
          21.667% {
            transform:translateY(0px)
          }
          22.5% {
            transform:translateY(0px)
          }
          23.333% {
            transform:translateY(0px)
          }
          24.167% {
            transform:translateY(0px)
          }
          25% {
            transform:translateY(0px)
          }
          25.833% {
            transform:translateY(0.56px)
          }
          26.667% {
            transform:translateY(2.08px)
          }
          27.5% {
            transform:translateY(4.32px)
          }
          28.333% {
            transform:translateY(7.04px)
          }
          29.167% {
            transform:translateY(10px)
          }
          30% {
            transform:translateY(12.96px)
          }
          30.833% {
            transform:translateY(15.68px)
          }
          31.667% {
            transform:translateY(17.92px)
          }
          32.5% {
            transform:translateY(19.44px)
          }
          33.333% {
            transform:translateY(20px)
          }
          34.167% {
            transform:translateY(20px)
          }
          35% {
            transform:translateY(20px)
          }
          35.833% {
            transform:translateY(20px)
          }
          36.667% {
            transform:translateY(20px)
          }
          37.5% {
            transform:translateY(20px)
          }
          38.333% {
            transform:translateY(20px)
          }
          39.167% {
            transform:translateY(20px)
          }
          40% {
            transform:translateY(20px)
          }
          40.833% {
            transform:translateY(20px)
          }
          41.667% {
            transform:translateY(20px)
          }
          42.5% {
            transform:translateY(20px)
          }
          43.333% {
            transform:translateY(20px)
          }
          44.167% {
            transform:translateY(20px)
          }
          45% {
            transform:translateY(20px)
          }
          45.833% {
            transform:translateY(20px)
          }
          46.667% {
            transform:translateY(20px)
          }
          47.5% {
            transform:translateY(20px)
          }
          48.333% {
            transform:translateY(20px)
          }
          49.167% {
            transform:translateY(20px)
          }
          50% {
            transform:translateY(20px)
          }
          50.833% {
            transform:translateY(20px)
          }
          51.667% {
            transform:translateY(20px)
          }
          52.5% {
            transform:translateY(20px)
          }
          53.333% {
            transform:translateY(20px)
          }
          54.167% {
            transform:translateY(20px)
          }
          55.0% {
            transform:translateY(20px)
          }
          55.833% {
            transform:translateY(20px)
          }
          56.667% {
            transform:translateY(20px)
          }
          57.5% {
            transform:translateY(20px)
          }
          58.333% {
            transform:translateY(20px)
          }
          59.167% {
            transform:translateY(20px)
          }
          60% {
            transform:translateY(20px)
          }
          60.833% {
            transform:translateY(20px)
          }
          61.667% {
            transform:translateY(20px)
          }
          62.5% {
            transform:translateY(20px)
          }
          63.333% {
            transform:translateY(20px)
          }
          64.167% {
            transform:translateY(20px)
          }
          65% {
            transform:translateY(20px)
          }
          65.833% {
            transform:translateY(20px)
          }
          66.667% {
            transform:translateY(20px)
          }
          67.5% {
            transform:translateY(20px)
          }
          68.333% {
            transform:translateY(20px)
          }
          69.167% {
            transform:translateY(20px)
          }
          70% {
            transform:translateY(20px)
          }
          70.833% {
            transform:translateY(20px)
          }
          71.667% {
            transform:translateY(20px)
          }
          72.5% {
            transform:translateY(20px)
          }
          73.333% {
            transform:translateY(20px)
          }
          74.167% {
            transform:translateY(20px)
          }
          75% {
            transform:translateY(20px)
          }
          75.833% {
            transform:translateY(20px)
          }
          76.667% {
            transform:translateY(20px)
          }
          77.5% {
            transform:translateY(20px)
          }
          78.333% {
            transform:translateY(20px)
          }
          79.167% {
            transform:translateY(20px)
          }
          80% {
            transform:translateY(20px)
          }
          80.833% {
            transform:translateY(20px)
          }
          81.667% {
            transform:translateY(20px)
          }
          82.5% {
            transform:translateY(20px)
          }
          83.333% {
            transform:translateY(20px)
          }
          84.167% {
            transform:translateY(19.44px)
          }
          85% {
            transform:translateY(17.92px)
          }
          85.833% {
            transform:translateY(15.68px)
          }
          86.667% {
            transform:translateY(12.96px)
          }
          87.5% {
            transform:translateY(10px)
          }
          88.333% {
            transform:translateY(7.04px)
          }
          89.167% {
            transform:translateY(4.32px)
          }
          90% {
            transform:translateY(2.08px)
          }
          90.833% {
            transform:translateY(0.56px)
          }
          91.667% {
            transform:translateY(0px)
          }
          92.5% {
            transform:translateY(0px)
          }
          93.333% {
            transform:translateY(0px)
          }
          94.167% {
            transform:translateY(0px)
          }
          95% {
            transform:translateY(0px)
          }
          95.833% {
            transform:translateY(0px)
          }
          96.667% {
            transform:translateY(0px)
          }
          97.5% {
            transform:translateY(0px)
          }
          98.333% {
            transform:translateY(0px)
          }
          99.167% {
            transform:translateY(0px)
          }
          100% {
            transform:translateY(0px)
          }
        }
        @keyframes touch-field {
          0% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          0.833% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          1.667% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          2.5% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          3.333% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          4.167% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          5% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          5.833% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          6.667% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          7.5% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          8.333% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          9.167% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          10% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          10.833% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          11.667% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          12.5% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          13.333% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          14.167% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          15% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          15.833% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          16.667% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          17.5% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          18.333% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          19.167% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          20% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          20.833% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          21.667% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          22.5% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          23.333% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          24.167% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          25% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          25.833% {
            d:path("M44 67Q44 45.168 62 38.56M96 67Q96 45.168 78 38.56")
          }
          26.667% {
            d:path("M44 67Q44 45.624 62 40.08M96 67Q96 45.624 78 40.08")
          }
          27.5% {
            d:path("M44 67Q44 46.296 62 42.32M96 67Q96 46.296 78 42.32")
          }
          28.333% {
            d:path("M44 67Q44 47.112 62 45.04M96 67Q96 47.112 78 45.04")
          }
          29.167% {
            d:path("M44 67Q44 48 62 48M96 67Q96 48 78 48")
          }
          30% {
            d:path("M44 67Q44 48.888 62 50.96M96 67Q96 48.888 78 50.96")
          }
          30.833% {
            d:path("M44 67Q44 49.704 62 53.68M96 67Q96 49.704 78 53.68")
          }
          31.667% {
            d:path("M44 67Q44 50.376 62 55.92M96 67Q96 50.376 78 55.92")
          }
          32.5% {
            d:path("M44 67Q44 50.832 62 57.44M96 67Q96 50.832 78 57.44")
          }
          33.333% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          34.167% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          35% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          35.833% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          36.667% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          37.5% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          38.333% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          39.167% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          40% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          40.833% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          41.667% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          42.5% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          43.333% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          44.167% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          45% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          45.833% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          46.667% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          47.5% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          48.333% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          49.167% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          50% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          50.833% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          51.667% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          52.5% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          53.333% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          54.167% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          55.0% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          55.833% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          56.667% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          57.5% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          58.333% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          59.167% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          60% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          60.833% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          61.667% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          62.5% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          63.333% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          64.167% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          65% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          65.833% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          66.667% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          67.5% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          68.333% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          69.167% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          70% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          70.833% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          71.667% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          72.5% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          73.333% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          74.167% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          75% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          75.833% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          76.667% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          77.5% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          78.333% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          79.167% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          80% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          80.833% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          81.667% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          82.5% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          83.333% {
            d:path("M44 67Q44 51 62 58M96 67Q96 51 78 58")
          }
          84.167% {
            d:path("M44 67Q44 50.832 62 57.44M96 67Q96 50.832 78 57.44")
          }
          85% {
            d:path("M44 67Q44 50.376 62 55.92M96 67Q96 50.376 78 55.92")
          }
          85.833% {
            d:path("M44 67Q44 49.704 62 53.68M96 67Q96 49.704 78 53.68")
          }
          86.667% {
            d:path("M44 67Q44 48.888 62 50.96M96 67Q96 48.888 78 50.96")
          }
          87.5% {
            d:path("M44 67Q44 48 62 48M96 67Q96 48 78 48")
          }
          88.333% {
            d:path("M44 67Q44 47.112 62 45.04M96 67Q96 47.112 78 45.04")
          }
          89.167% {
            d:path("M44 67Q44 46.296 62 42.32M96 67Q96 46.296 78 42.32")
          }
          90% {
            d:path("M44 67Q44 45.624 62 40.08M96 67Q96 45.624 78 40.08")
          }
          90.833% {
            d:path("M44 67Q44 45.168 62 38.56M96 67Q96 45.168 78 38.56")
          }
          91.667% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          92.5% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          93.333% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          94.167% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          95% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          95.833% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          96.667% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          97.5% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          98.333% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          99.167% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
          100% {
            d:path("M44 67Q44 45 62 38M96 67Q96 45 78 38")
          }
        }
        @keyframes touch-body {
          0% {
            d:path("M58 18H34V18H30")
          }
          0.833% {
            d:path("M58 18H34V18H30")
          }
          1.667% {
            d:path("M58 18H34V18H30")
          }
          2.5% {
            d:path("M58 18H34V18H30")
          }
          3.333% {
            d:path("M58 18H34V18H30")
          }
          4.167% {
            d:path("M58 18H34V18H30")
          }
          5% {
            d:path("M58 18H34V18H30")
          }
          5.833% {
            d:path("M58 18H34V18H30")
          }
          6.667% {
            d:path("M58 18H34V18H30")
          }
          7.5% {
            d:path("M58 18H34V18H30")
          }
          8.333% {
            d:path("M58 18H34V18H30")
          }
          9.167% {
            d:path("M58 18H34V18H30")
          }
          10% {
            d:path("M58 18H34V18H30")
          }
          10.833% {
            d:path("M58 18H34V18H30")
          }
          11.667% {
            d:path("M58 18H34V18H30")
          }
          12.5% {
            d:path("M58 18H34V18H30")
          }
          13.333% {
            d:path("M58 18H34V18H30")
          }
          14.167% {
            d:path("M58 18H34V18H30")
          }
          15% {
            d:path("M58 18H34V18H30")
          }
          15.833% {
            d:path("M58 18H34V18H30")
          }
          16.667% {
            d:path("M58 18H34V18H30")
          }
          17.5% {
            d:path("M58 18H34V18H30")
          }
          18.333% {
            d:path("M58 18H34V18H30")
          }
          19.167% {
            d:path("M58 18H34V18H30")
          }
          20% {
            d:path("M58 18H34V18H30")
          }
          20.833% {
            d:path("M58 18H34V18H30")
          }
          21.667% {
            d:path("M58 18H34V18H30")
          }
          22.5% {
            d:path("M58 18H34V18H30")
          }
          23.333% {
            d:path("M58 18H34V18H30")
          }
          24.167% {
            d:path("M58 18H34V18H30")
          }
          25% {
            d:path("M58 18H34V18H30")
          }
          25.833% {
            d:path("M58 18.56H34V18H30")
          }
          26.667% {
            d:path("M58 20.08H34V18H30")
          }
          27.5% {
            d:path("M58 22.32H34V18H30")
          }
          28.333% {
            d:path("M58 25.04H34V18H30")
          }
          29.167% {
            d:path("M58 28H34V18H30")
          }
          30% {
            d:path("M58 30.96H34V18H30")
          }
          30.833% {
            d:path("M58 33.68H34V18H30")
          }
          31.667% {
            d:path("M58 35.92H34V18H30")
          }
          32.5% {
            d:path("M58 37.44H34V18H30")
          }
          33.333% {
            d:path("M58 38H34V18H30")
          }
          34.167% {
            d:path("M58 38H34V18H30")
          }
          35% {
            d:path("M58 38H34V18H30")
          }
          35.833% {
            d:path("M58 38H34V18H30")
          }
          36.667% {
            d:path("M58 38H34V18H30")
          }
          37.5% {
            d:path("M58 38H34V18H30")
          }
          38.333% {
            d:path("M58 38H34V18H30")
          }
          39.167% {
            d:path("M58 38H34V18H30")
          }
          40% {
            d:path("M58 38H34V18H30")
          }
          40.833% {
            d:path("M58 38H34V18H30")
          }
          41.667% {
            d:path("M58 38H34V18H30")
          }
          42.5% {
            d:path("M58 38H34V18H30")
          }
          43.333% {
            d:path("M58 38H34V18H30")
          }
          44.167% {
            d:path("M58 38H34V18H30")
          }
          45% {
            d:path("M58 38H34V18H30")
          }
          45.833% {
            d:path("M58 38H34V18H30")
          }
          46.667% {
            d:path("M58 38H34V18H30")
          }
          47.5% {
            d:path("M58 38H34V18H30")
          }
          48.333% {
            d:path("M58 38H34V18H30")
          }
          49.167% {
            d:path("M58 38H34V18H30")
          }
          50% {
            d:path("M58 38H34V18H30")
          }
          50.833% {
            d:path("M58 38H34V18H30")
          }
          51.667% {
            d:path("M58 38H34V18H30")
          }
          52.5% {
            d:path("M58 38H34V18H30")
          }
          53.333% {
            d:path("M58 38H34V18H30")
          }
          54.167% {
            d:path("M58 38H34V18H30")
          }
          55.0% {
            d:path("M58 38H34V18H30")
          }
          55.833% {
            d:path("M58 38H34V18H30")
          }
          56.667% {
            d:path("M58 38H34V18H30")
          }
          57.5% {
            d:path("M58 38H34V18H30")
          }
          58.333% {
            d:path("M58 38H34V18H30")
          }
          59.167% {
            d:path("M58 38H34V18H30")
          }
          60% {
            d:path("M58 38H34V18H30")
          }
          60.833% {
            d:path("M58 38H34V18H30")
          }
          61.667% {
            d:path("M58 38H34V18H30")
          }
          62.5% {
            d:path("M58 38H34V18H30")
          }
          63.333% {
            d:path("M58 38H34V18H30")
          }
          64.167% {
            d:path("M58 38H34V18H30")
          }
          65% {
            d:path("M58 38H34V18H30")
          }
          65.833% {
            d:path("M58 38H34V18H30")
          }
          66.667% {
            d:path("M58 38H34V18H30")
          }
          67.5% {
            d:path("M58 38H34V18H30")
          }
          68.333% {
            d:path("M58 38H34V18H30")
          }
          69.167% {
            d:path("M58 38H34V18H30")
          }
          70% {
            d:path("M58 38H34V18H30")
          }
          70.833% {
            d:path("M58 38H34V18H30")
          }
          71.667% {
            d:path("M58 38H34V18H30")
          }
          72.5% {
            d:path("M58 38H34V18H30")
          }
          73.333% {
            d:path("M58 38H34V18H30")
          }
          74.167% {
            d:path("M58 38H34V18H30")
          }
          75% {
            d:path("M58 38H34V18H30")
          }
          75.833% {
            d:path("M58 38H34V18H30")
          }
          76.667% {
            d:path("M58 38H34V18H30")
          }
          77.5% {
            d:path("M58 38H34V18H30")
          }
          78.333% {
            d:path("M58 38H34V18H30")
          }
          79.167% {
            d:path("M58 38H34V18H30")
          }
          80% {
            d:path("M58 38H34V18H30")
          }
          80.833% {
            d:path("M58 38H34V18H30")
          }
          81.667% {
            d:path("M58 38H34V18H30")
          }
          82.5% {
            d:path("M58 38H34V18H30")
          }
          83.333% {
            d:path("M58 38H34V18H30")
          }
          84.167% {
            d:path("M58 37.44H34V18H30")
          }
          85% {
            d:path("M58 35.92H34V18H30")
          }
          85.833% {
            d:path("M58 33.68H34V18H30")
          }
          86.667% {
            d:path("M58 30.96H34V18H30")
          }
          87.5% {
            d:path("M58 28H34V18H30")
          }
          88.333% {
            d:path("M58 25.04H34V18H30")
          }
          89.167% {
            d:path("M58 22.32H34V18H30")
          }
          90% {
            d:path("M58 20.08H34V18H30")
          }
          90.833% {
            d:path("M58 18.56H34V18H30")
          }
          91.667% {
            d:path("M58 18H34V18H30")
          }
          92.5% {
            d:path("M58 18H34V18H30")
          }
          93.333% {
            d:path("M58 18H34V18H30")
          }
          94.167% {
            d:path("M58 18H34V18H30")
          }
          95% {
            d:path("M58 18H34V18H30")
          }
          95.833% {
            d:path("M58 18H34V18H30")
          }
          96.667% {
            d:path("M58 18H34V18H30")
          }
          97.5% {
            d:path("M58 18H34V18H30")
          }
          98.333% {
            d:path("M58 18H34V18H30")
          }
          99.167% {
            d:path("M58 18H34V18H30")
          }
          100% {
            d:path("M58 18H34V18H30")
          }
        }
        @keyframes touch-far-reveal {
          0%,4.1667% {
            width:0
          }
          25%,100% {
            width:90px
          }
        }
        @keyframes touch-near-reveal {
          0%,37.5% {
            width:0
          }
          58.3333%,100% {
            width:90px
          }
        }
        @keyframes touch-far-record {
          0%,25% {
            opacity:1
          }
          33.3333%,100% {
            opacity:.35
          }
        }
        @keyframes touch-far-crossing {
          0% {
            opacity:0
          }
          13.8889% {
            opacity:1
          }
        }
        @keyframes touch-near-crossing {
          0% {
            opacity:0
          }
          54.1667% {
            opacity:1
          }
        }
        @keyframes touch-delay {
          0%,58.3333% {
            opacity:0
          }
          62.5%,100% {
            opacity:1
          }
        }
        @keyframes touch-cycle {
          0%,91.6667%,100% {
            opacity:0
          }
          4%,83.3333% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Capacitive Touch Sensing">
        <defs>
          <clipPath id="touch-far-window">
            <rect class="far-window" x="20" y="84" width="90" height="35"/>
          </clipPath>
          <clipPath id="touch-near-window">
            <rect class="near-window" x="20" y="84" width="90" height="35"/>
          </clipPath>
        </defs>
        <g class="touch-cycle">
          <path class="body-link" d="M58 38H34V18H30"/>
          <path class="body-capacitor" d="M30 14V22M25 14V22M25 18H16V48M11 48H21M13 51H19"/>
          <path class="touch-fields" d="M44 67Q44 51 62 58M96 67Q96 51 78 58"/>
          <g class="finger">
            <rect class="finger-shell" x="58" y="6" width="24" height="32" rx="12"/>
            <rect class="nail" x="63" y="11" width="14" height="12" rx="5"/>
          </g>
          <rect class="glass" x="26" y="58" width="88" height="6" rx="1"/>
          <rect class="electrode" x="40" y="67" width="60" height="3" rx="1"/>
          <path class="ink muted" d="M100 68.5H116V78M20 86V118H110"/>
          <path class="touch-threshold" d="M20 97.772H110"/>
          <g class="far-record" clip-path="url(#touch-far-window)">
            <path class="far-curve" d="M20 118L20.9 117.322L21.8 116.658L22.7 116.008L23.6 115.371L24.5 114.749L25.4 114.139L26.3 113.543L27.2 112.959L28.1 112.387L29 111.828L29.9 111.28L30.8 110.744L31.7 110.22L32.6 109.706L33.5 109.204L34.4 108.712L35.3 108.23L36.2 107.759L37.1 107.298L38 106.846L38.9 106.404L39.8 105.972L40.7 105.548L41.6 105.134L42.5 104.728L43.4 104.331L44.3 103.942L45.2 103.562L46.1 103.19L47 102.825L47.9 102.469L48.8 102.119L49.7 101.778L50.6 101.443L51.5 101.116L52.4 100.795L53.3 100.482L54.2 100.175L55.1 99.874L56 99.58L56.9 99.292L57.8 99.01L58.7 98.734L59.6 98.464L60.5 98.2L61.4 97.942L62.3 97.688L63.2 97.441L64.1 97.198L65 96.961L65.9 96.728L66.8 96.501L67.7 96.278L68.6 96.06L69.5 95.847L70.4 95.638L71.3 95.434L72.2 95.234L73.1 95.038L74 94.846L74.9 94.659L75.8 94.475L76.7 94.296L77.6 94.12L78.5 93.948L79.4 93.779L80.3 93.614L81.2 93.453L82.1 93.295L83 93.14L83.9 92.989L84.8 92.841L85.7 92.696L86.6 92.554L87.5 92.415L88.4 92.279L89.3 92.146L90.2 92.015L91.1 91.888L92 91.763L92.9 91.641L93.8 91.521L94.7 91.404L95.6 91.29L96.5 91.177L97.4 91.068L98.3 90.96L99.2 90.855L100.1 90.752L101 90.651L101.9 90.553L102.8 90.456L103.7 90.362L104.6 90.269L105.5 90.179L106.4 90.09L107.3 90.003L108.2 89.919L109.1 89.836L110 89.754"/>
          </g>
          <g clip-path="url(#touch-near-window)">
            <path class="near-curve" d="M20 118L20.9 117.602L21.8 117.21L22.7 116.822L23.6 116.439L24.5 116.061L25.4 115.688L26.3 115.319L27.2 114.955L28.1 114.595L29 114.24L29.9 113.889L30.8 113.543L31.7 113.201L32.6 112.863L33.5 112.529L34.4 112.199L35.3 111.874L36.2 111.553L37.1 111.235L38 110.922L38.9 110.612L39.8 110.306L40.7 110.004L41.6 109.706L42.5 109.412L43.4 109.121L44.3 108.834L45.2 108.55L46.1 108.27L47 107.993L47.9 107.72L48.8 107.45L49.7 107.184L50.6 106.921L51.5 106.661L52.4 106.404L53.3 106.151L54.2 105.9L55.1 105.653L56 105.409L56.9 105.168L57.8 104.93L58.7 104.695L59.6 104.462L60.5 104.233L61.4 104.007L62.3 103.783L63.2 103.562L64.1 103.344L65 103.128L65.9 102.916L66.8 102.705L67.7 102.498L68.6 102.293L69.5 102.091L70.4 101.891L71.3 101.693L72.2 101.498L73.1 101.306L74 101.116L74.9 100.928L75.8 100.743L76.7 100.559L77.6 100.379L78.5 100.2L79.4 100.024L80.3 99.849L81.2 99.677L82.1 99.507L83 99.34L83.9 99.174L84.8 99.01L85.7 98.849L86.6 98.689L87.5 98.531L88.4 98.376L89.3 98.222L90.2 98.07L91.1 97.92L92 97.772L92.9 97.626L93.8 97.481L94.7 97.339L95.6 97.198L96.5 97.059L97.4 96.922L98.3 96.786L99.2 96.652L100.1 96.52L101 96.389L101.9 96.26L102.8 96.132L103.7 96.007L104.6 95.882L105.5 95.759L106.4 95.638L107.3 95.518L108.2 95.4L109.1 95.283L110 95.168"/>
          </g>
          <circle class="far-crossing" cx="62" cy="97.772" r="2.4"/>
          <circle class="near-crossing" cx="92" cy="97.772" r="2.4"/>
          <path class="charging-delay" d="M62 123H92M88 120L92 123L88 126"/>
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

if (!customElements.get("concept-capacitive-touch-sensing")) {
  customElements.define("concept-capacitive-touch-sensing", ConceptCapacitiveTouchSensing);
}
