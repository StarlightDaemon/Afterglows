// Three-Phase Induction Motor. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptThreePhaseInductionMotor extends HTMLElement {
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
        .stator {
          fill:#0a1a13;
          stroke:#476c58;
          stroke-width:1.5
        }
        .stator-coil {
          stroke-width:1.1
        }
        .coil-ends {
          stroke:#789b87;
          stroke-width:.8
        }
        .pole {
          fill:#d3e1d5;
          text-anchor:middle;
          font:8px monospace
        }
        .rotating-field {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.7;
          transform-origin:70px 63px;
          transform:rotate(-225deg);
          animation:motor-field 10s linear infinite
        }
        .rotor {
          fill:#173226;
          fill-opacity:.22;
          stroke:#70edb1;
          stroke-width:1.2
        }
        .cage {
          transform-origin:70px 63px;
          transform:rotate(-180deg);
          animation:motor-cage 10s linear infinite
        }
        .bar {
          fill:#0d281b;
          stroke:#88af9b;
          stroke-width:.6
        }
        .out-current {
          fill:#f3c977
        }
        .in-current {
          stroke:#ed8eab;
          stroke-width:.7
        }
        .cage-reference {
          stroke:#77c9ef;
          stroke-width:1.3
        }
        .hub {
          fill:#07120f;
          stroke:#7d9f8a;
          stroke-width:.7
        }
        @keyframes motor-field {
          0% {
            transform:rotate(0deg)
          }
          100% {
            transform:rotate(-1800deg)
          }
        }
        @keyframes motor-cage {
          0% {
            transform:rotate(0deg)
          }
          100% {
            transform:rotate(-1440deg)
          }
        }
        .p0s {
          opacity:0;
          animation:motor-s-0 10s linear infinite
        }
        .p0n {
          opacity:0.707;
          animation:motor-n-0 10s linear infinite
        }
        @keyframes motor-s-0 {
          0.0000% {
            opacity:1
          }
          0.5000% {
            opacity:0.988
          }
          1.0000% {
            opacity:0.951
          }
          1.5000% {
            opacity:0.891
          }
          2.0000% {
            opacity:0.809
          }
          2.5000% {
            opacity:0.707
          }
          3.0000% {
            opacity:0.588
          }
          3.5000% {
            opacity:0.454
          }
          4.0000% {
            opacity:0.309
          }
          4.5000% {
            opacity:0.156
          }
          5.0000% {
            opacity:6.123e-17
          }
          5.0000% {
            opacity:6.123e-17
          }
          5.5000% {
            opacity:0
          }
          6.0000% {
            opacity:0
          }
          6.5000% {
            opacity:0
          }
          7.0000% {
            opacity:0
          }
          7.5000% {
            opacity:0
          }
          8.0000% {
            opacity:0
          }
          8.5000% {
            opacity:0
          }
          9.0000% {
            opacity:0
          }
          9.5000% {
            opacity:0
          }
          10.0000% {
            opacity:0
          }
          10.5000% {
            opacity:0
          }
          11.0000% {
            opacity:0
          }
          11.5000% {
            opacity:0
          }
          12.0000% {
            opacity:0
          }
          12.5000% {
            opacity:0
          }
          13.0000% {
            opacity:0
          }
          13.5000% {
            opacity:0
          }
          14.0000% {
            opacity:0
          }
          14.5000% {
            opacity:0
          }
          15.0000% {
            opacity:0
          }
          15.0000% {
            opacity:0
          }
          15.5000% {
            opacity:0.156
          }
          16.0000% {
            opacity:0.309
          }
          16.5000% {
            opacity:0.454
          }
          17.0000% {
            opacity:0.588
          }
          17.5000% {
            opacity:0.707
          }
          18.0000% {
            opacity:0.809
          }
          18.5000% {
            opacity:0.891
          }
          19.0000% {
            opacity:0.951
          }
          19.5000% {
            opacity:0.988
          }
          20.0000% {
            opacity:1
          }
          20.5000% {
            opacity:0.988
          }
          21.0000% {
            opacity:0.951
          }
          21.5000% {
            opacity:0.891
          }
          22.0000% {
            opacity:0.809
          }
          22.5000% {
            opacity:0.707
          }
          23.0000% {
            opacity:0.588
          }
          23.5000% {
            opacity:0.454
          }
          24.0000% {
            opacity:0.309
          }
          24.5000% {
            opacity:0.156
          }
          25.0000% {
            opacity:3.062e-16
          }
          25.0000% {
            opacity:3.062e-16
          }
          25.5000% {
            opacity:0
          }
          26.0000% {
            opacity:0
          }
          26.5000% {
            opacity:0
          }
          27.0000% {
            opacity:0
          }
          27.5000% {
            opacity:0
          }
          28.0000% {
            opacity:0
          }
          28.5000% {
            opacity:0
          }
          29.0000% {
            opacity:0
          }
          29.5000% {
            opacity:0
          }
          30.0000% {
            opacity:0
          }
          30.5000% {
            opacity:0
          }
          31.0000% {
            opacity:0
          }
          31.5000% {
            opacity:0
          }
          32.0000% {
            opacity:0
          }
          32.5000% {
            opacity:0
          }
          33.0000% {
            opacity:0
          }
          33.5000% {
            opacity:0
          }
          34.0000% {
            opacity:0
          }
          34.5000% {
            opacity:0
          }
          35.0000% {
            opacity:0
          }
          35.0000% {
            opacity:0
          }
          35.5000% {
            opacity:0.156
          }
          36.0000% {
            opacity:0.309
          }
          36.5000% {
            opacity:0.454
          }
          37.0000% {
            opacity:0.588
          }
          37.5000% {
            opacity:0.707
          }
          38.0000% {
            opacity:0.809
          }
          38.5000% {
            opacity:0.891
          }
          39.0000% {
            opacity:0.951
          }
          39.5000% {
            opacity:0.988
          }
          40.0000% {
            opacity:1
          }
          40.5000% {
            opacity:0.988
          }
          41.0000% {
            opacity:0.951
          }
          41.5000% {
            opacity:0.891
          }
          42.0000% {
            opacity:0.809
          }
          42.5000% {
            opacity:0.707
          }
          43.0000% {
            opacity:0.588
          }
          43.5000% {
            opacity:0.454
          }
          44.0000% {
            opacity:0.309
          }
          44.5000% {
            opacity:0.156
          }
          45.0000% {
            opacity:5.511e-16
          }
          45.0000% {
            opacity:5.511e-16
          }
          45.5000% {
            opacity:0
          }
          46.0000% {
            opacity:0
          }
          46.5000% {
            opacity:0
          }
          47.0000% {
            opacity:0
          }
          47.5000% {
            opacity:0
          }
          48.0000% {
            opacity:0
          }
          48.5000% {
            opacity:0
          }
          49.0000% {
            opacity:0
          }
          49.5000% {
            opacity:0
          }
          50.0000% {
            opacity:0
          }
          50.5000% {
            opacity:0
          }
          51.0000% {
            opacity:0
          }
          51.5000% {
            opacity:0
          }
          52.0000% {
            opacity:0
          }
          52.5000% {
            opacity:0
          }
          53.0000% {
            opacity:0
          }
          53.5000% {
            opacity:0
          }
          54.0000% {
            opacity:0
          }
          54.5000% {
            opacity:0
          }
          55.0000% {
            opacity:0
          }
          55.0000% {
            opacity:0
          }
          55.5000% {
            opacity:0.156
          }
          56.0000% {
            opacity:0.309
          }
          56.5000% {
            opacity:0.454
          }
          57.0000% {
            opacity:0.588
          }
          57.5000% {
            opacity:0.707
          }
          58.0000% {
            opacity:0.809
          }
          58.5000% {
            opacity:0.891
          }
          59.0000% {
            opacity:0.951
          }
          59.5000% {
            opacity:0.988
          }
          60.0000% {
            opacity:1
          }
          60.5000% {
            opacity:0.988
          }
          61.0000% {
            opacity:0.951
          }
          61.5000% {
            opacity:0.891
          }
          62.0000% {
            opacity:0.809
          }
          62.5000% {
            opacity:0.707
          }
          63.0000% {
            opacity:0.588
          }
          63.5000% {
            opacity:0.454
          }
          64.0000% {
            opacity:0.309
          }
          64.5000% {
            opacity:0.156
          }
          65.0000% {
            opacity:0
          }
          65.0000% {
            opacity:0
          }
          65.5000% {
            opacity:0
          }
          66.0000% {
            opacity:0
          }
          66.5000% {
            opacity:0
          }
          67.0000% {
            opacity:0
          }
          67.5000% {
            opacity:0
          }
          68.0000% {
            opacity:0
          }
          68.5000% {
            opacity:0
          }
          69.0000% {
            opacity:0
          }
          69.5000% {
            opacity:0
          }
          70.0000% {
            opacity:0
          }
          70.5000% {
            opacity:0
          }
          71.0000% {
            opacity:0
          }
          71.5000% {
            opacity:0
          }
          72.0000% {
            opacity:0
          }
          72.5000% {
            opacity:0
          }
          73.0000% {
            opacity:0
          }
          73.5000% {
            opacity:0
          }
          74.0000% {
            opacity:0
          }
          74.5000% {
            opacity:0
          }
          75.0000% {
            opacity:0
          }
          75.0000% {
            opacity:0
          }
          75.5000% {
            opacity:0.156
          }
          76.0000% {
            opacity:0.309
          }
          76.5000% {
            opacity:0.454
          }
          77.0000% {
            opacity:0.588
          }
          77.5000% {
            opacity:0.707
          }
          78.0000% {
            opacity:0.809
          }
          78.5000% {
            opacity:0.891
          }
          79.0000% {
            opacity:0.951
          }
          79.5000% {
            opacity:0.988
          }
          80.0000% {
            opacity:1
          }
          80.5000% {
            opacity:0.988
          }
          81.0000% {
            opacity:0.951
          }
          81.5000% {
            opacity:0.891
          }
          82.0000% {
            opacity:0.809
          }
          82.5000% {
            opacity:0.707
          }
          83.0000% {
            opacity:0.588
          }
          83.5000% {
            opacity:0.454
          }
          84.0000% {
            opacity:0.309
          }
          84.5000% {
            opacity:0.156
          }
          85.0000% {
            opacity:0
          }
          85.0000% {
            opacity:0
          }
          85.5000% {
            opacity:0
          }
          86.0000% {
            opacity:0
          }
          86.5000% {
            opacity:0
          }
          87.0000% {
            opacity:0
          }
          87.5000% {
            opacity:0
          }
          88.0000% {
            opacity:0
          }
          88.5000% {
            opacity:0
          }
          89.0000% {
            opacity:0
          }
          89.5000% {
            opacity:0
          }
          90.0000% {
            opacity:0
          }
          90.5000% {
            opacity:0
          }
          91.0000% {
            opacity:0
          }
          91.5000% {
            opacity:0
          }
          92.0000% {
            opacity:0
          }
          92.5000% {
            opacity:0
          }
          93.0000% {
            opacity:0
          }
          93.5000% {
            opacity:0
          }
          94.0000% {
            opacity:0
          }
          94.5000% {
            opacity:0
          }
          95.0000% {
            opacity:0
          }
          95.0000% {
            opacity:0
          }
          95.5000% {
            opacity:0.156
          }
          96.0000% {
            opacity:0.309
          }
          96.5000% {
            opacity:0.454
          }
          97.0000% {
            opacity:0.588
          }
          97.5000% {
            opacity:0.707
          }
          98.0000% {
            opacity:0.809
          }
          98.5000% {
            opacity:0.891
          }
          99.0000% {
            opacity:0.951
          }
          99.5000% {
            opacity:0.988
          }
          100.0000% {
            opacity:1
          }
        }
        @keyframes motor-n-0 {
          0.0000% {
            opacity:0
          }
          0.5000% {
            opacity:0
          }
          1.0000% {
            opacity:0
          }
          1.5000% {
            opacity:0
          }
          2.0000% {
            opacity:0
          }
          2.5000% {
            opacity:0
          }
          3.0000% {
            opacity:0
          }
          3.5000% {
            opacity:0
          }
          4.0000% {
            opacity:0
          }
          4.5000% {
            opacity:0
          }
          5.0000% {
            opacity:0
          }
          5.0000% {
            opacity:0
          }
          5.5000% {
            opacity:0.156
          }
          6.0000% {
            opacity:0.309
          }
          6.5000% {
            opacity:0.454
          }
          7.0000% {
            opacity:0.588
          }
          7.5000% {
            opacity:0.707
          }
          8.0000% {
            opacity:0.809
          }
          8.5000% {
            opacity:0.891
          }
          9.0000% {
            opacity:0.951
          }
          9.5000% {
            opacity:0.988
          }
          10.0000% {
            opacity:1
          }
          10.5000% {
            opacity:0.988
          }
          11.0000% {
            opacity:0.951
          }
          11.5000% {
            opacity:0.891
          }
          12.0000% {
            opacity:0.809
          }
          12.5000% {
            opacity:0.707
          }
          13.0000% {
            opacity:0.588
          }
          13.5000% {
            opacity:0.454
          }
          14.0000% {
            opacity:0.309
          }
          14.5000% {
            opacity:0.156
          }
          15.0000% {
            opacity:1.837e-16
          }
          15.0000% {
            opacity:1.837e-16
          }
          15.5000% {
            opacity:0
          }
          16.0000% {
            opacity:0
          }
          16.5000% {
            opacity:0
          }
          17.0000% {
            opacity:0
          }
          17.5000% {
            opacity:0
          }
          18.0000% {
            opacity:0
          }
          18.5000% {
            opacity:0
          }
          19.0000% {
            opacity:0
          }
          19.5000% {
            opacity:0
          }
          20.0000% {
            opacity:0
          }
          20.5000% {
            opacity:0
          }
          21.0000% {
            opacity:0
          }
          21.5000% {
            opacity:0
          }
          22.0000% {
            opacity:0
          }
          22.5000% {
            opacity:0
          }
          23.0000% {
            opacity:0
          }
          23.5000% {
            opacity:0
          }
          24.0000% {
            opacity:0
          }
          24.5000% {
            opacity:0
          }
          25.0000% {
            opacity:0
          }
          25.0000% {
            opacity:0
          }
          25.5000% {
            opacity:0.156
          }
          26.0000% {
            opacity:0.309
          }
          26.5000% {
            opacity:0.454
          }
          27.0000% {
            opacity:0.588
          }
          27.5000% {
            opacity:0.707
          }
          28.0000% {
            opacity:0.809
          }
          28.5000% {
            opacity:0.891
          }
          29.0000% {
            opacity:0.951
          }
          29.5000% {
            opacity:0.988
          }
          30.0000% {
            opacity:1
          }
          30.5000% {
            opacity:0.988
          }
          31.0000% {
            opacity:0.951
          }
          31.5000% {
            opacity:0.891
          }
          32.0000% {
            opacity:0.809
          }
          32.5000% {
            opacity:0.707
          }
          33.0000% {
            opacity:0.588
          }
          33.5000% {
            opacity:0.454
          }
          34.0000% {
            opacity:0.309
          }
          34.5000% {
            opacity:0.156
          }
          35.0000% {
            opacity:4.286e-16
          }
          35.0000% {
            opacity:4.286e-16
          }
          35.5000% {
            opacity:0
          }
          36.0000% {
            opacity:0
          }
          36.5000% {
            opacity:0
          }
          37.0000% {
            opacity:0
          }
          37.5000% {
            opacity:0
          }
          38.0000% {
            opacity:0
          }
          38.5000% {
            opacity:0
          }
          39.0000% {
            opacity:0
          }
          39.5000% {
            opacity:0
          }
          40.0000% {
            opacity:0
          }
          40.5000% {
            opacity:0
          }
          41.0000% {
            opacity:0
          }
          41.5000% {
            opacity:0
          }
          42.0000% {
            opacity:0
          }
          42.5000% {
            opacity:0
          }
          43.0000% {
            opacity:0
          }
          43.5000% {
            opacity:0
          }
          44.0000% {
            opacity:0
          }
          44.5000% {
            opacity:0
          }
          45.0000% {
            opacity:0
          }
          45.0000% {
            opacity:0
          }
          45.5000% {
            opacity:0.156
          }
          46.0000% {
            opacity:0.309
          }
          46.5000% {
            opacity:0.454
          }
          47.0000% {
            opacity:0.588
          }
          47.5000% {
            opacity:0.707
          }
          48.0000% {
            opacity:0.809
          }
          48.5000% {
            opacity:0.891
          }
          49.0000% {
            opacity:0.951
          }
          49.5000% {
            opacity:0.988
          }
          50.0000% {
            opacity:1
          }
          50.5000% {
            opacity:0.988
          }
          51.0000% {
            opacity:0.951
          }
          51.5000% {
            opacity:0.891
          }
          52.0000% {
            opacity:0.809
          }
          52.5000% {
            opacity:0.707
          }
          53.0000% {
            opacity:0.588
          }
          53.5000% {
            opacity:0.454
          }
          54.0000% {
            opacity:0.309
          }
          54.5000% {
            opacity:0.156
          }
          55.0000% {
            opacity:2.45e-15
          }
          55.0000% {
            opacity:2.45e-15
          }
          55.5000% {
            opacity:0
          }
          56.0000% {
            opacity:0
          }
          56.5000% {
            opacity:0
          }
          57.0000% {
            opacity:0
          }
          57.5000% {
            opacity:0
          }
          58.0000% {
            opacity:0
          }
          58.5000% {
            opacity:0
          }
          59.0000% {
            opacity:0
          }
          59.5000% {
            opacity:0
          }
          60.0000% {
            opacity:0
          }
          60.5000% {
            opacity:0
          }
          61.0000% {
            opacity:0
          }
          61.5000% {
            opacity:0
          }
          62.0000% {
            opacity:0
          }
          62.5000% {
            opacity:0
          }
          63.0000% {
            opacity:0
          }
          63.5000% {
            opacity:0
          }
          64.0000% {
            opacity:0
          }
          64.5000% {
            opacity:0
          }
          65.0000% {
            opacity:9.803e-16
          }
          65.0000% {
            opacity:9.803e-16
          }
          65.5000% {
            opacity:0.156
          }
          66.0000% {
            opacity:0.309
          }
          66.5000% {
            opacity:0.454
          }
          67.0000% {
            opacity:0.588
          }
          67.5000% {
            opacity:0.707
          }
          68.0000% {
            opacity:0.809
          }
          68.5000% {
            opacity:0.891
          }
          69.0000% {
            opacity:0.951
          }
          69.5000% {
            opacity:0.988
          }
          70.0000% {
            opacity:1
          }
          70.5000% {
            opacity:0.988
          }
          71.0000% {
            opacity:0.951
          }
          71.5000% {
            opacity:0.891
          }
          72.0000% {
            opacity:0.809
          }
          72.5000% {
            opacity:0.707
          }
          73.0000% {
            opacity:0.588
          }
          73.5000% {
            opacity:0.454
          }
          74.0000% {
            opacity:0.309
          }
          74.5000% {
            opacity:0.156
          }
          75.0000% {
            opacity:2.695e-15
          }
          75.0000% {
            opacity:2.695e-15
          }
          75.5000% {
            opacity:0
          }
          76.0000% {
            opacity:0
          }
          76.5000% {
            opacity:0
          }
          77.0000% {
            opacity:0
          }
          77.5000% {
            opacity:0
          }
          78.0000% {
            opacity:0
          }
          78.5000% {
            opacity:0
          }
          79.0000% {
            opacity:0
          }
          79.5000% {
            opacity:0
          }
          80.0000% {
            opacity:0
          }
          80.5000% {
            opacity:0
          }
          81.0000% {
            opacity:0
          }
          81.5000% {
            opacity:0
          }
          82.0000% {
            opacity:0
          }
          82.5000% {
            opacity:0
          }
          83.0000% {
            opacity:0
          }
          83.5000% {
            opacity:0
          }
          84.0000% {
            opacity:0
          }
          84.5000% {
            opacity:0
          }
          85.0000% {
            opacity:7.354e-16
          }
          85.0000% {
            opacity:7.354e-16
          }
          85.5000% {
            opacity:0.156
          }
          86.0000% {
            opacity:0.309
          }
          86.5000% {
            opacity:0.454
          }
          87.0000% {
            opacity:0.588
          }
          87.5000% {
            opacity:0.707
          }
          88.0000% {
            opacity:0.809
          }
          88.5000% {
            opacity:0.891
          }
          89.0000% {
            opacity:0.951
          }
          89.5000% {
            opacity:0.988
          }
          90.0000% {
            opacity:1
          }
          90.5000% {
            opacity:0.988
          }
          91.0000% {
            opacity:0.951
          }
          91.5000% {
            opacity:0.891
          }
          92.0000% {
            opacity:0.809
          }
          92.5000% {
            opacity:0.707
          }
          93.0000% {
            opacity:0.588
          }
          93.5000% {
            opacity:0.454
          }
          94.0000% {
            opacity:0.309
          }
          94.5000% {
            opacity:0.156
          }
          95.0000% {
            opacity:2.94e-15
          }
          95.0000% {
            opacity:2.94e-15
          }
          95.5000% {
            opacity:0
          }
          96.0000% {
            opacity:0
          }
          96.5000% {
            opacity:0
          }
          97.0000% {
            opacity:0
          }
          97.5000% {
            opacity:0
          }
          98.0000% {
            opacity:0
          }
          98.5000% {
            opacity:0
          }
          99.0000% {
            opacity:0
          }
          99.5000% {
            opacity:0
          }
          100.0000% {
            opacity:0
          }
        }
        .p1s {
          opacity:0.707;
          animation:motor-s-1 10s linear infinite
        }
        .p1n {
          opacity:0;
          animation:motor-n-1 10s linear infinite
        }
        @keyframes motor-s-1 {
          0.0000% {
            opacity:0
          }
          0.5000% {
            opacity:0
          }
          1.0000% {
            opacity:0
          }
          1.5000% {
            opacity:0
          }
          2.0000% {
            opacity:0
          }
          2.5000% {
            opacity:0
          }
          3.0000% {
            opacity:0
          }
          3.5000% {
            opacity:0
          }
          4.0000% {
            opacity:0
          }
          4.5000% {
            opacity:0
          }
          5.0000% {
            opacity:0
          }
          5.0000% {
            opacity:0
          }
          5.5000% {
            opacity:0.156
          }
          6.0000% {
            opacity:0.309
          }
          6.5000% {
            opacity:0.454
          }
          7.0000% {
            opacity:0.588
          }
          7.5000% {
            opacity:0.707
          }
          8.0000% {
            opacity:0.809
          }
          8.5000% {
            opacity:0.891
          }
          9.0000% {
            opacity:0.951
          }
          9.5000% {
            opacity:0.988
          }
          10.0000% {
            opacity:1
          }
          10.5000% {
            opacity:0.988
          }
          11.0000% {
            opacity:0.951
          }
          11.5000% {
            opacity:0.891
          }
          12.0000% {
            opacity:0.809
          }
          12.5000% {
            opacity:0.707
          }
          13.0000% {
            opacity:0.588
          }
          13.5000% {
            opacity:0.454
          }
          14.0000% {
            opacity:0.309
          }
          14.5000% {
            opacity:0.156
          }
          15.0000% {
            opacity:1.837e-16
          }
          15.0000% {
            opacity:1.837e-16
          }
          15.5000% {
            opacity:0
          }
          16.0000% {
            opacity:0
          }
          16.5000% {
            opacity:0
          }
          17.0000% {
            opacity:0
          }
          17.5000% {
            opacity:0
          }
          18.0000% {
            opacity:0
          }
          18.5000% {
            opacity:0
          }
          19.0000% {
            opacity:0
          }
          19.5000% {
            opacity:0
          }
          20.0000% {
            opacity:0
          }
          20.5000% {
            opacity:0
          }
          21.0000% {
            opacity:0
          }
          21.5000% {
            opacity:0
          }
          22.0000% {
            opacity:0
          }
          22.5000% {
            opacity:0
          }
          23.0000% {
            opacity:0
          }
          23.5000% {
            opacity:0
          }
          24.0000% {
            opacity:0
          }
          24.5000% {
            opacity:0
          }
          25.0000% {
            opacity:0
          }
          25.0000% {
            opacity:0
          }
          25.5000% {
            opacity:0.156
          }
          26.0000% {
            opacity:0.309
          }
          26.5000% {
            opacity:0.454
          }
          27.0000% {
            opacity:0.588
          }
          27.5000% {
            opacity:0.707
          }
          28.0000% {
            opacity:0.809
          }
          28.5000% {
            opacity:0.891
          }
          29.0000% {
            opacity:0.951
          }
          29.5000% {
            opacity:0.988
          }
          30.0000% {
            opacity:1
          }
          30.5000% {
            opacity:0.988
          }
          31.0000% {
            opacity:0.951
          }
          31.5000% {
            opacity:0.891
          }
          32.0000% {
            opacity:0.809
          }
          32.5000% {
            opacity:0.707
          }
          33.0000% {
            opacity:0.588
          }
          33.5000% {
            opacity:0.454
          }
          34.0000% {
            opacity:0.309
          }
          34.5000% {
            opacity:0.156
          }
          35.0000% {
            opacity:4.286e-16
          }
          35.0000% {
            opacity:4.286e-16
          }
          35.5000% {
            opacity:0
          }
          36.0000% {
            opacity:0
          }
          36.5000% {
            opacity:0
          }
          37.0000% {
            opacity:0
          }
          37.5000% {
            opacity:0
          }
          38.0000% {
            opacity:0
          }
          38.5000% {
            opacity:0
          }
          39.0000% {
            opacity:0
          }
          39.5000% {
            opacity:0
          }
          40.0000% {
            opacity:0
          }
          40.5000% {
            opacity:0
          }
          41.0000% {
            opacity:0
          }
          41.5000% {
            opacity:0
          }
          42.0000% {
            opacity:0
          }
          42.5000% {
            opacity:0
          }
          43.0000% {
            opacity:0
          }
          43.5000% {
            opacity:0
          }
          44.0000% {
            opacity:0
          }
          44.5000% {
            opacity:0
          }
          45.0000% {
            opacity:0
          }
          45.0000% {
            opacity:0
          }
          45.5000% {
            opacity:0.156
          }
          46.0000% {
            opacity:0.309
          }
          46.5000% {
            opacity:0.454
          }
          47.0000% {
            opacity:0.588
          }
          47.5000% {
            opacity:0.707
          }
          48.0000% {
            opacity:0.809
          }
          48.5000% {
            opacity:0.891
          }
          49.0000% {
            opacity:0.951
          }
          49.5000% {
            opacity:0.988
          }
          50.0000% {
            opacity:1
          }
          50.5000% {
            opacity:0.988
          }
          51.0000% {
            opacity:0.951
          }
          51.5000% {
            opacity:0.891
          }
          52.0000% {
            opacity:0.809
          }
          52.5000% {
            opacity:0.707
          }
          53.0000% {
            opacity:0.588
          }
          53.5000% {
            opacity:0.454
          }
          54.0000% {
            opacity:0.309
          }
          54.5000% {
            opacity:0.156
          }
          55.0000% {
            opacity:2.45e-15
          }
          55.0000% {
            opacity:2.45e-15
          }
          55.5000% {
            opacity:0
          }
          56.0000% {
            opacity:0
          }
          56.5000% {
            opacity:0
          }
          57.0000% {
            opacity:0
          }
          57.5000% {
            opacity:0
          }
          58.0000% {
            opacity:0
          }
          58.5000% {
            opacity:0
          }
          59.0000% {
            opacity:0
          }
          59.5000% {
            opacity:0
          }
          60.0000% {
            opacity:0
          }
          60.5000% {
            opacity:0
          }
          61.0000% {
            opacity:0
          }
          61.5000% {
            opacity:0
          }
          62.0000% {
            opacity:0
          }
          62.5000% {
            opacity:0
          }
          63.0000% {
            opacity:0
          }
          63.5000% {
            opacity:0
          }
          64.0000% {
            opacity:0
          }
          64.5000% {
            opacity:0
          }
          65.0000% {
            opacity:9.803e-16
          }
          65.0000% {
            opacity:9.803e-16
          }
          65.5000% {
            opacity:0.156
          }
          66.0000% {
            opacity:0.309
          }
          66.5000% {
            opacity:0.454
          }
          67.0000% {
            opacity:0.588
          }
          67.5000% {
            opacity:0.707
          }
          68.0000% {
            opacity:0.809
          }
          68.5000% {
            opacity:0.891
          }
          69.0000% {
            opacity:0.951
          }
          69.5000% {
            opacity:0.988
          }
          70.0000% {
            opacity:1
          }
          70.5000% {
            opacity:0.988
          }
          71.0000% {
            opacity:0.951
          }
          71.5000% {
            opacity:0.891
          }
          72.0000% {
            opacity:0.809
          }
          72.5000% {
            opacity:0.707
          }
          73.0000% {
            opacity:0.588
          }
          73.5000% {
            opacity:0.454
          }
          74.0000% {
            opacity:0.309
          }
          74.5000% {
            opacity:0.156
          }
          75.0000% {
            opacity:2.695e-15
          }
          75.0000% {
            opacity:2.695e-15
          }
          75.5000% {
            opacity:0
          }
          76.0000% {
            opacity:0
          }
          76.5000% {
            opacity:0
          }
          77.0000% {
            opacity:0
          }
          77.5000% {
            opacity:0
          }
          78.0000% {
            opacity:0
          }
          78.5000% {
            opacity:0
          }
          79.0000% {
            opacity:0
          }
          79.5000% {
            opacity:0
          }
          80.0000% {
            opacity:0
          }
          80.5000% {
            opacity:0
          }
          81.0000% {
            opacity:0
          }
          81.5000% {
            opacity:0
          }
          82.0000% {
            opacity:0
          }
          82.5000% {
            opacity:0
          }
          83.0000% {
            opacity:0
          }
          83.5000% {
            opacity:0
          }
          84.0000% {
            opacity:0
          }
          84.5000% {
            opacity:0
          }
          85.0000% {
            opacity:7.354e-16
          }
          85.0000% {
            opacity:7.354e-16
          }
          85.5000% {
            opacity:0.156
          }
          86.0000% {
            opacity:0.309
          }
          86.5000% {
            opacity:0.454
          }
          87.0000% {
            opacity:0.588
          }
          87.5000% {
            opacity:0.707
          }
          88.0000% {
            opacity:0.809
          }
          88.5000% {
            opacity:0.891
          }
          89.0000% {
            opacity:0.951
          }
          89.5000% {
            opacity:0.988
          }
          90.0000% {
            opacity:1
          }
          90.5000% {
            opacity:0.988
          }
          91.0000% {
            opacity:0.951
          }
          91.5000% {
            opacity:0.891
          }
          92.0000% {
            opacity:0.809
          }
          92.5000% {
            opacity:0.707
          }
          93.0000% {
            opacity:0.588
          }
          93.5000% {
            opacity:0.454
          }
          94.0000% {
            opacity:0.309
          }
          94.5000% {
            opacity:0.156
          }
          95.0000% {
            opacity:2.94e-15
          }
          95.0000% {
            opacity:2.94e-15
          }
          95.5000% {
            opacity:0
          }
          96.0000% {
            opacity:0
          }
          96.5000% {
            opacity:0
          }
          97.0000% {
            opacity:0
          }
          97.5000% {
            opacity:0
          }
          98.0000% {
            opacity:0
          }
          98.5000% {
            opacity:0
          }
          99.0000% {
            opacity:0
          }
          99.5000% {
            opacity:0
          }
          100.0000% {
            opacity:0
          }
        }
        @keyframes motor-n-1 {
          0.0000% {
            opacity:1
          }
          0.5000% {
            opacity:0.988
          }
          1.0000% {
            opacity:0.951
          }
          1.5000% {
            opacity:0.891
          }
          2.0000% {
            opacity:0.809
          }
          2.5000% {
            opacity:0.707
          }
          3.0000% {
            opacity:0.588
          }
          3.5000% {
            opacity:0.454
          }
          4.0000% {
            opacity:0.309
          }
          4.5000% {
            opacity:0.156
          }
          5.0000% {
            opacity:6.123e-17
          }
          5.0000% {
            opacity:6.123e-17
          }
          5.5000% {
            opacity:0
          }
          6.0000% {
            opacity:0
          }
          6.5000% {
            opacity:0
          }
          7.0000% {
            opacity:0
          }
          7.5000% {
            opacity:0
          }
          8.0000% {
            opacity:0
          }
          8.5000% {
            opacity:0
          }
          9.0000% {
            opacity:0
          }
          9.5000% {
            opacity:0
          }
          10.0000% {
            opacity:0
          }
          10.5000% {
            opacity:0
          }
          11.0000% {
            opacity:0
          }
          11.5000% {
            opacity:0
          }
          12.0000% {
            opacity:0
          }
          12.5000% {
            opacity:0
          }
          13.0000% {
            opacity:0
          }
          13.5000% {
            opacity:0
          }
          14.0000% {
            opacity:0
          }
          14.5000% {
            opacity:0
          }
          15.0000% {
            opacity:0
          }
          15.0000% {
            opacity:0
          }
          15.5000% {
            opacity:0.156
          }
          16.0000% {
            opacity:0.309
          }
          16.5000% {
            opacity:0.454
          }
          17.0000% {
            opacity:0.588
          }
          17.5000% {
            opacity:0.707
          }
          18.0000% {
            opacity:0.809
          }
          18.5000% {
            opacity:0.891
          }
          19.0000% {
            opacity:0.951
          }
          19.5000% {
            opacity:0.988
          }
          20.0000% {
            opacity:1
          }
          20.5000% {
            opacity:0.988
          }
          21.0000% {
            opacity:0.951
          }
          21.5000% {
            opacity:0.891
          }
          22.0000% {
            opacity:0.809
          }
          22.5000% {
            opacity:0.707
          }
          23.0000% {
            opacity:0.588
          }
          23.5000% {
            opacity:0.454
          }
          24.0000% {
            opacity:0.309
          }
          24.5000% {
            opacity:0.156
          }
          25.0000% {
            opacity:3.062e-16
          }
          25.0000% {
            opacity:3.062e-16
          }
          25.5000% {
            opacity:0
          }
          26.0000% {
            opacity:0
          }
          26.5000% {
            opacity:0
          }
          27.0000% {
            opacity:0
          }
          27.5000% {
            opacity:0
          }
          28.0000% {
            opacity:0
          }
          28.5000% {
            opacity:0
          }
          29.0000% {
            opacity:0
          }
          29.5000% {
            opacity:0
          }
          30.0000% {
            opacity:0
          }
          30.5000% {
            opacity:0
          }
          31.0000% {
            opacity:0
          }
          31.5000% {
            opacity:0
          }
          32.0000% {
            opacity:0
          }
          32.5000% {
            opacity:0
          }
          33.0000% {
            opacity:0
          }
          33.5000% {
            opacity:0
          }
          34.0000% {
            opacity:0
          }
          34.5000% {
            opacity:0
          }
          35.0000% {
            opacity:0
          }
          35.0000% {
            opacity:0
          }
          35.5000% {
            opacity:0.156
          }
          36.0000% {
            opacity:0.309
          }
          36.5000% {
            opacity:0.454
          }
          37.0000% {
            opacity:0.588
          }
          37.5000% {
            opacity:0.707
          }
          38.0000% {
            opacity:0.809
          }
          38.5000% {
            opacity:0.891
          }
          39.0000% {
            opacity:0.951
          }
          39.5000% {
            opacity:0.988
          }
          40.0000% {
            opacity:1
          }
          40.5000% {
            opacity:0.988
          }
          41.0000% {
            opacity:0.951
          }
          41.5000% {
            opacity:0.891
          }
          42.0000% {
            opacity:0.809
          }
          42.5000% {
            opacity:0.707
          }
          43.0000% {
            opacity:0.588
          }
          43.5000% {
            opacity:0.454
          }
          44.0000% {
            opacity:0.309
          }
          44.5000% {
            opacity:0.156
          }
          45.0000% {
            opacity:5.511e-16
          }
          45.0000% {
            opacity:5.511e-16
          }
          45.5000% {
            opacity:0
          }
          46.0000% {
            opacity:0
          }
          46.5000% {
            opacity:0
          }
          47.0000% {
            opacity:0
          }
          47.5000% {
            opacity:0
          }
          48.0000% {
            opacity:0
          }
          48.5000% {
            opacity:0
          }
          49.0000% {
            opacity:0
          }
          49.5000% {
            opacity:0
          }
          50.0000% {
            opacity:0
          }
          50.5000% {
            opacity:0
          }
          51.0000% {
            opacity:0
          }
          51.5000% {
            opacity:0
          }
          52.0000% {
            opacity:0
          }
          52.5000% {
            opacity:0
          }
          53.0000% {
            opacity:0
          }
          53.5000% {
            opacity:0
          }
          54.0000% {
            opacity:0
          }
          54.5000% {
            opacity:0
          }
          55.0000% {
            opacity:0
          }
          55.0000% {
            opacity:0
          }
          55.5000% {
            opacity:0.156
          }
          56.0000% {
            opacity:0.309
          }
          56.5000% {
            opacity:0.454
          }
          57.0000% {
            opacity:0.588
          }
          57.5000% {
            opacity:0.707
          }
          58.0000% {
            opacity:0.809
          }
          58.5000% {
            opacity:0.891
          }
          59.0000% {
            opacity:0.951
          }
          59.5000% {
            opacity:0.988
          }
          60.0000% {
            opacity:1
          }
          60.5000% {
            opacity:0.988
          }
          61.0000% {
            opacity:0.951
          }
          61.5000% {
            opacity:0.891
          }
          62.0000% {
            opacity:0.809
          }
          62.5000% {
            opacity:0.707
          }
          63.0000% {
            opacity:0.588
          }
          63.5000% {
            opacity:0.454
          }
          64.0000% {
            opacity:0.309
          }
          64.5000% {
            opacity:0.156
          }
          65.0000% {
            opacity:0
          }
          65.0000% {
            opacity:0
          }
          65.5000% {
            opacity:0
          }
          66.0000% {
            opacity:0
          }
          66.5000% {
            opacity:0
          }
          67.0000% {
            opacity:0
          }
          67.5000% {
            opacity:0
          }
          68.0000% {
            opacity:0
          }
          68.5000% {
            opacity:0
          }
          69.0000% {
            opacity:0
          }
          69.5000% {
            opacity:0
          }
          70.0000% {
            opacity:0
          }
          70.5000% {
            opacity:0
          }
          71.0000% {
            opacity:0
          }
          71.5000% {
            opacity:0
          }
          72.0000% {
            opacity:0
          }
          72.5000% {
            opacity:0
          }
          73.0000% {
            opacity:0
          }
          73.5000% {
            opacity:0
          }
          74.0000% {
            opacity:0
          }
          74.5000% {
            opacity:0
          }
          75.0000% {
            opacity:0
          }
          75.0000% {
            opacity:0
          }
          75.5000% {
            opacity:0.156
          }
          76.0000% {
            opacity:0.309
          }
          76.5000% {
            opacity:0.454
          }
          77.0000% {
            opacity:0.588
          }
          77.5000% {
            opacity:0.707
          }
          78.0000% {
            opacity:0.809
          }
          78.5000% {
            opacity:0.891
          }
          79.0000% {
            opacity:0.951
          }
          79.5000% {
            opacity:0.988
          }
          80.0000% {
            opacity:1
          }
          80.5000% {
            opacity:0.988
          }
          81.0000% {
            opacity:0.951
          }
          81.5000% {
            opacity:0.891
          }
          82.0000% {
            opacity:0.809
          }
          82.5000% {
            opacity:0.707
          }
          83.0000% {
            opacity:0.588
          }
          83.5000% {
            opacity:0.454
          }
          84.0000% {
            opacity:0.309
          }
          84.5000% {
            opacity:0.156
          }
          85.0000% {
            opacity:0
          }
          85.0000% {
            opacity:0
          }
          85.5000% {
            opacity:0
          }
          86.0000% {
            opacity:0
          }
          86.5000% {
            opacity:0
          }
          87.0000% {
            opacity:0
          }
          87.5000% {
            opacity:0
          }
          88.0000% {
            opacity:0
          }
          88.5000% {
            opacity:0
          }
          89.0000% {
            opacity:0
          }
          89.5000% {
            opacity:0
          }
          90.0000% {
            opacity:0
          }
          90.5000% {
            opacity:0
          }
          91.0000% {
            opacity:0
          }
          91.5000% {
            opacity:0
          }
          92.0000% {
            opacity:0
          }
          92.5000% {
            opacity:0
          }
          93.0000% {
            opacity:0
          }
          93.5000% {
            opacity:0
          }
          94.0000% {
            opacity:0
          }
          94.5000% {
            opacity:0
          }
          95.0000% {
            opacity:0
          }
          95.0000% {
            opacity:0
          }
          95.5000% {
            opacity:0.156
          }
          96.0000% {
            opacity:0.309
          }
          96.5000% {
            opacity:0.454
          }
          97.0000% {
            opacity:0.588
          }
          97.5000% {
            opacity:0.707
          }
          98.0000% {
            opacity:0.809
          }
          98.5000% {
            opacity:0.891
          }
          99.0000% {
            opacity:0.951
          }
          99.5000% {
            opacity:0.988
          }
          100.0000% {
            opacity:1
          }
        }
        .phase-0 {
          fill:#77c9ef;
          stroke:#77c9ef;
          fill-opacity:0.504;
          animation:motor-phase-0 10s linear infinite
        }
        @keyframes motor-phase-0 {
          0% {
            fill-opacity:0.65
          }
          0.5% {
            fill-opacity:0.644
          }
          1% {
            fill-opacity:0.626
          }
          1.5% {
            fill-opacity:0.596
          }
          2% {
            fill-opacity:0.555
          }
          2.5% {
            fill-opacity:0.504
          }
          3% {
            fill-opacity:0.444
          }
          3.5% {
            fill-opacity:0.377
          }
          4% {
            fill-opacity:0.305
          }
          4.5% {
            fill-opacity:0.228
          }
          5% {
            fill-opacity:0.15
          }
          5.5% {
            fill-opacity:0.228
          }
          6% {
            fill-opacity:0.305
          }
          6.5% {
            fill-opacity:0.377
          }
          7% {
            fill-opacity:0.444
          }
          7.5% {
            fill-opacity:0.504
          }
          8% {
            fill-opacity:0.555
          }
          8.5% {
            fill-opacity:0.596
          }
          9% {
            fill-opacity:0.626
          }
          9.5% {
            fill-opacity:0.644
          }
          10% {
            fill-opacity:0.65
          }
          10.5% {
            fill-opacity:0.644
          }
          11% {
            fill-opacity:0.626
          }
          11.5% {
            fill-opacity:0.596
          }
          12% {
            fill-opacity:0.555
          }
          12.5% {
            fill-opacity:0.504
          }
          13% {
            fill-opacity:0.444
          }
          13.5% {
            fill-opacity:0.377
          }
          14% {
            fill-opacity:0.305
          }
          14.5% {
            fill-opacity:0.228
          }
          15% {
            fill-opacity:0.15
          }
          15.5% {
            fill-opacity:0.228
          }
          16% {
            fill-opacity:0.305
          }
          16.5% {
            fill-opacity:0.377
          }
          17% {
            fill-opacity:0.444
          }
          17.5% {
            fill-opacity:0.504
          }
          18% {
            fill-opacity:0.555
          }
          18.5% {
            fill-opacity:0.596
          }
          19% {
            fill-opacity:0.626
          }
          19.5% {
            fill-opacity:0.644
          }
          20% {
            fill-opacity:0.65
          }
          20.5% {
            fill-opacity:0.644
          }
          21% {
            fill-opacity:0.626
          }
          21.5% {
            fill-opacity:0.596
          }
          22% {
            fill-opacity:0.555
          }
          22.5% {
            fill-opacity:0.504
          }
          23% {
            fill-opacity:0.444
          }
          23.5% {
            fill-opacity:0.377
          }
          24% {
            fill-opacity:0.305
          }
          24.5% {
            fill-opacity:0.228
          }
          25% {
            fill-opacity:0.15
          }
          25.5% {
            fill-opacity:0.228
          }
          26% {
            fill-opacity:0.305
          }
          26.5% {
            fill-opacity:0.377
          }
          27% {
            fill-opacity:0.444
          }
          27.5% {
            fill-opacity:0.504
          }
          28% {
            fill-opacity:0.555
          }
          28.5% {
            fill-opacity:0.596
          }
          29% {
            fill-opacity:0.626
          }
          29.5% {
            fill-opacity:0.644
          }
          30% {
            fill-opacity:0.65
          }
          30.5% {
            fill-opacity:0.644
          }
          31% {
            fill-opacity:0.626
          }
          31.5% {
            fill-opacity:0.596
          }
          32% {
            fill-opacity:0.555
          }
          32.5% {
            fill-opacity:0.504
          }
          33% {
            fill-opacity:0.444
          }
          33.5% {
            fill-opacity:0.377
          }
          34% {
            fill-opacity:0.305
          }
          34.5% {
            fill-opacity:0.228
          }
          35% {
            fill-opacity:0.15
          }
          35.5% {
            fill-opacity:0.228
          }
          36% {
            fill-opacity:0.305
          }
          36.5% {
            fill-opacity:0.377
          }
          37% {
            fill-opacity:0.444
          }
          37.5% {
            fill-opacity:0.504
          }
          38% {
            fill-opacity:0.555
          }
          38.5% {
            fill-opacity:0.596
          }
          39% {
            fill-opacity:0.626
          }
          39.5% {
            fill-opacity:0.644
          }
          40% {
            fill-opacity:0.65
          }
          40.5% {
            fill-opacity:0.644
          }
          41% {
            fill-opacity:0.626
          }
          41.5% {
            fill-opacity:0.596
          }
          42% {
            fill-opacity:0.555
          }
          42.5% {
            fill-opacity:0.504
          }
          43% {
            fill-opacity:0.444
          }
          43.5% {
            fill-opacity:0.377
          }
          44% {
            fill-opacity:0.305
          }
          44.5% {
            fill-opacity:0.228
          }
          45% {
            fill-opacity:0.15
          }
          45.5% {
            fill-opacity:0.228
          }
          46% {
            fill-opacity:0.305
          }
          46.5% {
            fill-opacity:0.377
          }
          47% {
            fill-opacity:0.444
          }
          47.5% {
            fill-opacity:0.504
          }
          48% {
            fill-opacity:0.555
          }
          48.5% {
            fill-opacity:0.596
          }
          49% {
            fill-opacity:0.626
          }
          49.5% {
            fill-opacity:0.644
          }
          50% {
            fill-opacity:0.65
          }
          50.5% {
            fill-opacity:0.644
          }
          51% {
            fill-opacity:0.626
          }
          51.5% {
            fill-opacity:0.596
          }
          52% {
            fill-opacity:0.555
          }
          52.5% {
            fill-opacity:0.504
          }
          53% {
            fill-opacity:0.444
          }
          53.5% {
            fill-opacity:0.377
          }
          54% {
            fill-opacity:0.305
          }
          54.5% {
            fill-opacity:0.228
          }
          55% {
            fill-opacity:0.15
          }
          55.5% {
            fill-opacity:0.228
          }
          56% {
            fill-opacity:0.305
          }
          56.5% {
            fill-opacity:0.377
          }
          57% {
            fill-opacity:0.444
          }
          57.5% {
            fill-opacity:0.504
          }
          58% {
            fill-opacity:0.555
          }
          58.5% {
            fill-opacity:0.596
          }
          59% {
            fill-opacity:0.626
          }
          59.5% {
            fill-opacity:0.644
          }
          60% {
            fill-opacity:0.65
          }
          60.5% {
            fill-opacity:0.644
          }
          61% {
            fill-opacity:0.626
          }
          61.5% {
            fill-opacity:0.596
          }
          62% {
            fill-opacity:0.555
          }
          62.5% {
            fill-opacity:0.504
          }
          63% {
            fill-opacity:0.444
          }
          63.5% {
            fill-opacity:0.377
          }
          64% {
            fill-opacity:0.305
          }
          64.5% {
            fill-opacity:0.228
          }
          65% {
            fill-opacity:0.15
          }
          65.5% {
            fill-opacity:0.228
          }
          66% {
            fill-opacity:0.305
          }
          66.5% {
            fill-opacity:0.377
          }
          67% {
            fill-opacity:0.444
          }
          67.5% {
            fill-opacity:0.504
          }
          68% {
            fill-opacity:0.555
          }
          68.5% {
            fill-opacity:0.596
          }
          69% {
            fill-opacity:0.626
          }
          69.5% {
            fill-opacity:0.644
          }
          70% {
            fill-opacity:0.65
          }
          70.5% {
            fill-opacity:0.644
          }
          71% {
            fill-opacity:0.626
          }
          71.5% {
            fill-opacity:0.596
          }
          72% {
            fill-opacity:0.555
          }
          72.5% {
            fill-opacity:0.504
          }
          73% {
            fill-opacity:0.444
          }
          73.5% {
            fill-opacity:0.377
          }
          74% {
            fill-opacity:0.305
          }
          74.5% {
            fill-opacity:0.228
          }
          75% {
            fill-opacity:0.15
          }
          75.5% {
            fill-opacity:0.228
          }
          76% {
            fill-opacity:0.305
          }
          76.5% {
            fill-opacity:0.377
          }
          77% {
            fill-opacity:0.444
          }
          77.5% {
            fill-opacity:0.504
          }
          78% {
            fill-opacity:0.555
          }
          78.5% {
            fill-opacity:0.596
          }
          79% {
            fill-opacity:0.626
          }
          79.5% {
            fill-opacity:0.644
          }
          80% {
            fill-opacity:0.65
          }
          80.5% {
            fill-opacity:0.644
          }
          81% {
            fill-opacity:0.626
          }
          81.5% {
            fill-opacity:0.596
          }
          82% {
            fill-opacity:0.555
          }
          82.5% {
            fill-opacity:0.504
          }
          83% {
            fill-opacity:0.444
          }
          83.5% {
            fill-opacity:0.377
          }
          84% {
            fill-opacity:0.305
          }
          84.5% {
            fill-opacity:0.228
          }
          85% {
            fill-opacity:0.15
          }
          85.5% {
            fill-opacity:0.228
          }
          86% {
            fill-opacity:0.305
          }
          86.5% {
            fill-opacity:0.377
          }
          87% {
            fill-opacity:0.444
          }
          87.5% {
            fill-opacity:0.504
          }
          88% {
            fill-opacity:0.555
          }
          88.5% {
            fill-opacity:0.596
          }
          89% {
            fill-opacity:0.626
          }
          89.5% {
            fill-opacity:0.644
          }
          90% {
            fill-opacity:0.65
          }
          90.5% {
            fill-opacity:0.644
          }
          91% {
            fill-opacity:0.626
          }
          91.5% {
            fill-opacity:0.596
          }
          92% {
            fill-opacity:0.555
          }
          92.5% {
            fill-opacity:0.504
          }
          93% {
            fill-opacity:0.444
          }
          93.5% {
            fill-opacity:0.377
          }
          94% {
            fill-opacity:0.305
          }
          94.5% {
            fill-opacity:0.228
          }
          95% {
            fill-opacity:0.15
          }
          95.5% {
            fill-opacity:0.228
          }
          96% {
            fill-opacity:0.305
          }
          96.5% {
            fill-opacity:0.377
          }
          97% {
            fill-opacity:0.444
          }
          97.5% {
            fill-opacity:0.504
          }
          98% {
            fill-opacity:0.555
          }
          98.5% {
            fill-opacity:0.596
          }
          99% {
            fill-opacity:0.626
          }
          99.5% {
            fill-opacity:0.644
          }
          100% {
            fill-opacity:0.65
          }
        }
        .p2s {
          opacity:0;
          animation:motor-s-2 10s linear infinite
        }
        .p2n {
          opacity:0.259;
          animation:motor-n-2 10s linear infinite
        }
        @keyframes motor-s-2 {
          0.0000% {
            opacity:0
          }
          0.5000% {
            opacity:0
          }
          1.0000% {
            opacity:0
          }
          1.5000% {
            opacity:0
          }
          1.6667% {
            opacity:0
          }
          2.0000% {
            opacity:0.105
          }
          2.5000% {
            opacity:0.259
          }
          3.0000% {
            opacity:0.407
          }
          3.5000% {
            opacity:0.545
          }
          4.0000% {
            opacity:0.669
          }
          4.5000% {
            opacity:0.777
          }
          5.0000% {
            opacity:0.866
          }
          5.5000% {
            opacity:0.934
          }
          6.0000% {
            opacity:0.978
          }
          6.5000% {
            opacity:0.999
          }
          7.0000% {
            opacity:0.995
          }
          7.5000% {
            opacity:0.966
          }
          8.0000% {
            opacity:0.914
          }
          8.5000% {
            opacity:0.839
          }
          9.0000% {
            opacity:0.743
          }
          9.5000% {
            opacity:0.629
          }
          10.0000% {
            opacity:0.5
          }
          10.5000% {
            opacity:0.358
          }
          11.0000% {
            opacity:0.208
          }
          11.5000% {
            opacity:0.052
          }
          11.6667% {
            opacity:5.053e-16
          }
          12.0000% {
            opacity:0
          }
          12.5000% {
            opacity:0
          }
          13.0000% {
            opacity:0
          }
          13.5000% {
            opacity:0
          }
          14.0000% {
            opacity:0
          }
          14.5000% {
            opacity:0
          }
          15.0000% {
            opacity:0
          }
          15.5000% {
            opacity:0
          }
          16.0000% {
            opacity:0
          }
          16.5000% {
            opacity:0
          }
          17.0000% {
            opacity:0
          }
          17.5000% {
            opacity:0
          }
          18.0000% {
            opacity:0
          }
          18.5000% {
            opacity:0
          }
          19.0000% {
            opacity:0
          }
          19.5000% {
            opacity:0
          }
          20.0000% {
            opacity:0
          }
          20.5000% {
            opacity:0
          }
          21.0000% {
            opacity:0
          }
          21.5000% {
            opacity:0
          }
          21.6667% {
            opacity:0
          }
          22.0000% {
            opacity:0.105
          }
          22.5000% {
            opacity:0.259
          }
          23.0000% {
            opacity:0.407
          }
          23.5000% {
            opacity:0.545
          }
          24.0000% {
            opacity:0.669
          }
          24.5000% {
            opacity:0.777
          }
          25.0000% {
            opacity:0.866
          }
          25.5000% {
            opacity:0.934
          }
          26.0000% {
            opacity:0.978
          }
          26.5000% {
            opacity:0.999
          }
          27.0000% {
            opacity:0.995
          }
          27.5000% {
            opacity:0.966
          }
          28.0000% {
            opacity:0.914
          }
          28.5000% {
            opacity:0.839
          }
          29.0000% {
            opacity:0.743
          }
          29.5000% {
            opacity:0.629
          }
          30.0000% {
            opacity:0.5
          }
          30.5000% {
            opacity:0.358
          }
          31.0000% {
            opacity:0.208
          }
          31.5000% {
            opacity:0.052
          }
          31.6667% {
            opacity:3.062e-16
          }
          32.0000% {
            opacity:0
          }
          32.5000% {
            opacity:0
          }
          33.0000% {
            opacity:0
          }
          33.5000% {
            opacity:0
          }
          34.0000% {
            opacity:0
          }
          34.5000% {
            opacity:0
          }
          35.0000% {
            opacity:0
          }
          35.5000% {
            opacity:0
          }
          36.0000% {
            opacity:0
          }
          36.5000% {
            opacity:0
          }
          37.0000% {
            opacity:0
          }
          37.5000% {
            opacity:0
          }
          38.0000% {
            opacity:0
          }
          38.5000% {
            opacity:0
          }
          39.0000% {
            opacity:0
          }
          39.5000% {
            opacity:0
          }
          40.0000% {
            opacity:0
          }
          40.5000% {
            opacity:0
          }
          41.0000% {
            opacity:0
          }
          41.5000% {
            opacity:0
          }
          41.6667% {
            opacity:0
          }
          42.0000% {
            opacity:0.105
          }
          42.5000% {
            opacity:0.259
          }
          43.0000% {
            opacity:0.407
          }
          43.5000% {
            opacity:0.545
          }
          44.0000% {
            opacity:0.669
          }
          44.5000% {
            opacity:0.777
          }
          45.0000% {
            opacity:0.866
          }
          45.5000% {
            opacity:0.934
          }
          46.0000% {
            opacity:0.978
          }
          46.5000% {
            opacity:0.999
          }
          47.0000% {
            opacity:0.995
          }
          47.5000% {
            opacity:0.966
          }
          48.0000% {
            opacity:0.914
          }
          48.5000% {
            opacity:0.839
          }
          49.0000% {
            opacity:0.743
          }
          49.5000% {
            opacity:0.629
          }
          50.0000% {
            opacity:0.5
          }
          50.5000% {
            opacity:0.358
          }
          51.0000% {
            opacity:0.208
          }
          51.5000% {
            opacity:0.052
          }
          51.6667% {
            opacity:5.511e-16
          }
          52.0000% {
            opacity:0
          }
          52.5000% {
            opacity:0
          }
          53.0000% {
            opacity:0
          }
          53.5000% {
            opacity:0
          }
          54.0000% {
            opacity:0
          }
          54.5000% {
            opacity:0
          }
          55.0000% {
            opacity:0
          }
          55.5000% {
            opacity:0
          }
          56.0000% {
            opacity:0
          }
          56.5000% {
            opacity:0
          }
          57.0000% {
            opacity:0
          }
          57.5000% {
            opacity:0
          }
          58.0000% {
            opacity:0
          }
          58.5000% {
            opacity:0
          }
          59.0000% {
            opacity:0
          }
          59.5000% {
            opacity:0
          }
          60.0000% {
            opacity:0
          }
          60.5000% {
            opacity:0
          }
          61.0000% {
            opacity:0
          }
          61.5000% {
            opacity:0
          }
          61.6667% {
            opacity:0
          }
          62.0000% {
            opacity:0.105
          }
          62.5000% {
            opacity:0.259
          }
          63.0000% {
            opacity:0.407
          }
          63.5000% {
            opacity:0.545
          }
          64.0000% {
            opacity:0.669
          }
          64.5000% {
            opacity:0.777
          }
          65.0000% {
            opacity:0.866
          }
          65.5000% {
            opacity:0.934
          }
          66.0000% {
            opacity:0.978
          }
          66.5000% {
            opacity:0.999
          }
          67.0000% {
            opacity:0.995
          }
          67.5000% {
            opacity:0.966
          }
          68.0000% {
            opacity:0.914
          }
          68.5000% {
            opacity:0.839
          }
          69.0000% {
            opacity:0.743
          }
          69.5000% {
            opacity:0.629
          }
          70.0000% {
            opacity:0.5
          }
          70.5000% {
            opacity:0.358
          }
          71.0000% {
            opacity:0.208
          }
          71.5000% {
            opacity:0.052
          }
          71.6667% {
            opacity:2.572e-15
          }
          72.0000% {
            opacity:0
          }
          72.5000% {
            opacity:0
          }
          73.0000% {
            opacity:0
          }
          73.5000% {
            opacity:0
          }
          74.0000% {
            opacity:0
          }
          74.5000% {
            opacity:0
          }
          75.0000% {
            opacity:0
          }
          75.5000% {
            opacity:0
          }
          76.0000% {
            opacity:0
          }
          76.5000% {
            opacity:0
          }
          77.0000% {
            opacity:0
          }
          77.5000% {
            opacity:0
          }
          78.0000% {
            opacity:0
          }
          78.5000% {
            opacity:0
          }
          79.0000% {
            opacity:0
          }
          79.5000% {
            opacity:0
          }
          80.0000% {
            opacity:0
          }
          80.5000% {
            opacity:0
          }
          81.0000% {
            opacity:0
          }
          81.5000% {
            opacity:0
          }
          81.6667% {
            opacity:0
          }
          82.0000% {
            opacity:0.105
          }
          82.5000% {
            opacity:0.259
          }
          83.0000% {
            opacity:0.407
          }
          83.5000% {
            opacity:0.545
          }
          84.0000% {
            opacity:0.669
          }
          84.5000% {
            opacity:0.777
          }
          85.0000% {
            opacity:0.866
          }
          85.5000% {
            opacity:0.934
          }
          86.0000% {
            opacity:0.978
          }
          86.5000% {
            opacity:0.999
          }
          87.0000% {
            opacity:0.995
          }
          87.5000% {
            opacity:0.966
          }
          88.0000% {
            opacity:0.914
          }
          88.5000% {
            opacity:0.839
          }
          89.0000% {
            opacity:0.743
          }
          89.5000% {
            opacity:0.629
          }
          90.0000% {
            opacity:0.5
          }
          90.5000% {
            opacity:0.358
          }
          91.0000% {
            opacity:0.208
          }
          91.5000% {
            opacity:0.052
          }
          91.6667% {
            opacity:2.817e-15
          }
          92.0000% {
            opacity:0
          }
          92.5000% {
            opacity:0
          }
          93.0000% {
            opacity:0
          }
          93.5000% {
            opacity:0
          }
          94.0000% {
            opacity:0
          }
          94.5000% {
            opacity:0
          }
          95.0000% {
            opacity:0
          }
          95.5000% {
            opacity:0
          }
          96.0000% {
            opacity:0
          }
          96.5000% {
            opacity:0
          }
          97.0000% {
            opacity:0
          }
          97.5000% {
            opacity:0
          }
          98.0000% {
            opacity:0
          }
          98.5000% {
            opacity:0
          }
          99.0000% {
            opacity:0
          }
          99.5000% {
            opacity:0
          }
          100.0000% {
            opacity:0
          }
        }
        @keyframes motor-n-2 {
          0.0000% {
            opacity:0.5
          }
          0.5000% {
            opacity:0.358
          }
          1.0000% {
            opacity:0.208
          }
          1.5000% {
            opacity:0.052
          }
          1.6667% {
            opacity:3.829e-16
          }
          2.0000% {
            opacity:0
          }
          2.5000% {
            opacity:0
          }
          3.0000% {
            opacity:0
          }
          3.5000% {
            opacity:0
          }
          4.0000% {
            opacity:0
          }
          4.5000% {
            opacity:0
          }
          5.0000% {
            opacity:0
          }
          5.5000% {
            opacity:0
          }
          6.0000% {
            opacity:0
          }
          6.5000% {
            opacity:0
          }
          7.0000% {
            opacity:0
          }
          7.5000% {
            opacity:0
          }
          8.0000% {
            opacity:0
          }
          8.5000% {
            opacity:0
          }
          9.0000% {
            opacity:0
          }
          9.5000% {
            opacity:0
          }
          10.0000% {
            opacity:0
          }
          10.5000% {
            opacity:0
          }
          11.0000% {
            opacity:0
          }
          11.5000% {
            opacity:0
          }
          11.6667% {
            opacity:0
          }
          12.0000% {
            opacity:0.105
          }
          12.5000% {
            opacity:0.259
          }
          13.0000% {
            opacity:0.407
          }
          13.5000% {
            opacity:0.545
          }
          14.0000% {
            opacity:0.669
          }
          14.5000% {
            opacity:0.777
          }
          15.0000% {
            opacity:0.866
          }
          15.5000% {
            opacity:0.934
          }
          16.0000% {
            opacity:0.978
          }
          16.5000% {
            opacity:0.999
          }
          17.0000% {
            opacity:0.995
          }
          17.5000% {
            opacity:0.966
          }
          18.0000% {
            opacity:0.914
          }
          18.5000% {
            opacity:0.839
          }
          19.0000% {
            opacity:0.743
          }
          19.5000% {
            opacity:0.629
          }
          20.0000% {
            opacity:0.5
          }
          20.5000% {
            opacity:0.358
          }
          21.0000% {
            opacity:0.208
          }
          21.5000% {
            opacity:0.052
          }
          21.6667% {
            opacity:1.837e-16
          }
          22.0000% {
            opacity:0
          }
          22.5000% {
            opacity:0
          }
          23.0000% {
            opacity:0
          }
          23.5000% {
            opacity:0
          }
          24.0000% {
            opacity:0
          }
          24.5000% {
            opacity:0
          }
          25.0000% {
            opacity:0
          }
          25.5000% {
            opacity:0
          }
          26.0000% {
            opacity:0
          }
          26.5000% {
            opacity:0
          }
          27.0000% {
            opacity:0
          }
          27.5000% {
            opacity:0
          }
          28.0000% {
            opacity:0
          }
          28.5000% {
            opacity:0
          }
          29.0000% {
            opacity:0
          }
          29.5000% {
            opacity:0
          }
          30.0000% {
            opacity:0
          }
          30.5000% {
            opacity:0
          }
          31.0000% {
            opacity:0
          }
          31.5000% {
            opacity:0
          }
          31.6667% {
            opacity:0
          }
          32.0000% {
            opacity:0.105
          }
          32.5000% {
            opacity:0.259
          }
          33.0000% {
            opacity:0.407
          }
          33.5000% {
            opacity:0.545
          }
          34.0000% {
            opacity:0.669
          }
          34.5000% {
            opacity:0.777
          }
          35.0000% {
            opacity:0.866
          }
          35.5000% {
            opacity:0.934
          }
          36.0000% {
            opacity:0.978
          }
          36.5000% {
            opacity:0.999
          }
          37.0000% {
            opacity:0.995
          }
          37.5000% {
            opacity:0.966
          }
          38.0000% {
            opacity:0.914
          }
          38.5000% {
            opacity:0.839
          }
          39.0000% {
            opacity:0.743
          }
          39.5000% {
            opacity:0.629
          }
          40.0000% {
            opacity:0.5
          }
          40.5000% {
            opacity:0.358
          }
          41.0000% {
            opacity:0.208
          }
          41.5000% {
            opacity:0.052
          }
          41.6667% {
            opacity:2.205e-15
          }
          42.0000% {
            opacity:0
          }
          42.5000% {
            opacity:0
          }
          43.0000% {
            opacity:0
          }
          43.5000% {
            opacity:0
          }
          44.0000% {
            opacity:0
          }
          44.5000% {
            opacity:0
          }
          45.0000% {
            opacity:0
          }
          45.5000% {
            opacity:0
          }
          46.0000% {
            opacity:0
          }
          46.5000% {
            opacity:0
          }
          47.0000% {
            opacity:0
          }
          47.5000% {
            opacity:0
          }
          48.0000% {
            opacity:0
          }
          48.5000% {
            opacity:0
          }
          49.0000% {
            opacity:0
          }
          49.5000% {
            opacity:0
          }
          50.0000% {
            opacity:0
          }
          50.5000% {
            opacity:0
          }
          51.0000% {
            opacity:0
          }
          51.5000% {
            opacity:0
          }
          51.6667% {
            opacity:0
          }
          52.0000% {
            opacity:0.105
          }
          52.5000% {
            opacity:0.259
          }
          53.0000% {
            opacity:0.407
          }
          53.5000% {
            opacity:0.545
          }
          54.0000% {
            opacity:0.669
          }
          54.5000% {
            opacity:0.777
          }
          55.0000% {
            opacity:0.866
          }
          55.5000% {
            opacity:0.934
          }
          56.0000% {
            opacity:0.978
          }
          56.5000% {
            opacity:0.999
          }
          57.0000% {
            opacity:0.995
          }
          57.5000% {
            opacity:0.966
          }
          58.0000% {
            opacity:0.914
          }
          58.5000% {
            opacity:0.839
          }
          59.0000% {
            opacity:0.743
          }
          59.5000% {
            opacity:0.629
          }
          60.0000% {
            opacity:0.5
          }
          60.5000% {
            opacity:0.358
          }
          61.0000% {
            opacity:0.208
          }
          61.5000% {
            opacity:0.052
          }
          61.6667% {
            opacity:2.45e-15
          }
          62.0000% {
            opacity:0
          }
          62.5000% {
            opacity:0
          }
          63.0000% {
            opacity:0
          }
          63.5000% {
            opacity:0
          }
          64.0000% {
            opacity:0
          }
          64.5000% {
            opacity:0
          }
          65.0000% {
            opacity:0
          }
          65.5000% {
            opacity:0
          }
          66.0000% {
            opacity:0
          }
          66.5000% {
            opacity:0
          }
          67.0000% {
            opacity:0
          }
          67.5000% {
            opacity:0
          }
          68.0000% {
            opacity:0
          }
          68.5000% {
            opacity:0
          }
          69.0000% {
            opacity:0
          }
          69.5000% {
            opacity:0
          }
          70.0000% {
            opacity:0
          }
          70.5000% {
            opacity:0
          }
          71.0000% {
            opacity:0
          }
          71.5000% {
            opacity:0
          }
          71.6667% {
            opacity:0
          }
          72.0000% {
            opacity:0.105
          }
          72.5000% {
            opacity:0.259
          }
          73.0000% {
            opacity:0.407
          }
          73.5000% {
            opacity:0.545
          }
          74.0000% {
            opacity:0.669
          }
          74.5000% {
            opacity:0.777
          }
          75.0000% {
            opacity:0.866
          }
          75.5000% {
            opacity:0.934
          }
          76.0000% {
            opacity:0.978
          }
          76.5000% {
            opacity:0.999
          }
          77.0000% {
            opacity:0.995
          }
          77.5000% {
            opacity:0.966
          }
          78.0000% {
            opacity:0.914
          }
          78.5000% {
            opacity:0.839
          }
          79.0000% {
            opacity:0.743
          }
          79.5000% {
            opacity:0.629
          }
          80.0000% {
            opacity:0.5
          }
          80.5000% {
            opacity:0.358
          }
          81.0000% {
            opacity:0.208
          }
          81.5000% {
            opacity:0.052
          }
          81.6667% {
            opacity:2.695e-15
          }
          82.0000% {
            opacity:0
          }
          82.5000% {
            opacity:0
          }
          83.0000% {
            opacity:0
          }
          83.5000% {
            opacity:0
          }
          84.0000% {
            opacity:0
          }
          84.5000% {
            opacity:0
          }
          85.0000% {
            opacity:0
          }
          85.5000% {
            opacity:0
          }
          86.0000% {
            opacity:0
          }
          86.5000% {
            opacity:0
          }
          87.0000% {
            opacity:0
          }
          87.5000% {
            opacity:0
          }
          88.0000% {
            opacity:0
          }
          88.5000% {
            opacity:0
          }
          89.0000% {
            opacity:0
          }
          89.5000% {
            opacity:0
          }
          90.0000% {
            opacity:0
          }
          90.5000% {
            opacity:0
          }
          91.0000% {
            opacity:0
          }
          91.5000% {
            opacity:0
          }
          91.6667% {
            opacity:0
          }
          92.0000% {
            opacity:0.105
          }
          92.5000% {
            opacity:0.259
          }
          93.0000% {
            opacity:0.407
          }
          93.5000% {
            opacity:0.545
          }
          94.0000% {
            opacity:0.669
          }
          94.5000% {
            opacity:0.777
          }
          95.0000% {
            opacity:0.866
          }
          95.5000% {
            opacity:0.934
          }
          96.0000% {
            opacity:0.978
          }
          96.5000% {
            opacity:0.999
          }
          97.0000% {
            opacity:0.995
          }
          97.5000% {
            opacity:0.966
          }
          98.0000% {
            opacity:0.914
          }
          98.5000% {
            opacity:0.839
          }
          99.0000% {
            opacity:0.743
          }
          99.5000% {
            opacity:0.629
          }
          100.0000% {
            opacity:0.5
          }
        }
        .p3s {
          opacity:0.259;
          animation:motor-s-3 10s linear infinite
        }
        .p3n {
          opacity:0;
          animation:motor-n-3 10s linear infinite
        }
        @keyframes motor-s-3 {
          0.0000% {
            opacity:0.5
          }
          0.5000% {
            opacity:0.358
          }
          1.0000% {
            opacity:0.208
          }
          1.5000% {
            opacity:0.052
          }
          1.6667% {
            opacity:3.829e-16
          }
          2.0000% {
            opacity:0
          }
          2.5000% {
            opacity:0
          }
          3.0000% {
            opacity:0
          }
          3.5000% {
            opacity:0
          }
          4.0000% {
            opacity:0
          }
          4.5000% {
            opacity:0
          }
          5.0000% {
            opacity:0
          }
          5.5000% {
            opacity:0
          }
          6.0000% {
            opacity:0
          }
          6.5000% {
            opacity:0
          }
          7.0000% {
            opacity:0
          }
          7.5000% {
            opacity:0
          }
          8.0000% {
            opacity:0
          }
          8.5000% {
            opacity:0
          }
          9.0000% {
            opacity:0
          }
          9.5000% {
            opacity:0
          }
          10.0000% {
            opacity:0
          }
          10.5000% {
            opacity:0
          }
          11.0000% {
            opacity:0
          }
          11.5000% {
            opacity:0
          }
          11.6667% {
            opacity:0
          }
          12.0000% {
            opacity:0.105
          }
          12.5000% {
            opacity:0.259
          }
          13.0000% {
            opacity:0.407
          }
          13.5000% {
            opacity:0.545
          }
          14.0000% {
            opacity:0.669
          }
          14.5000% {
            opacity:0.777
          }
          15.0000% {
            opacity:0.866
          }
          15.5000% {
            opacity:0.934
          }
          16.0000% {
            opacity:0.978
          }
          16.5000% {
            opacity:0.999
          }
          17.0000% {
            opacity:0.995
          }
          17.5000% {
            opacity:0.966
          }
          18.0000% {
            opacity:0.914
          }
          18.5000% {
            opacity:0.839
          }
          19.0000% {
            opacity:0.743
          }
          19.5000% {
            opacity:0.629
          }
          20.0000% {
            opacity:0.5
          }
          20.5000% {
            opacity:0.358
          }
          21.0000% {
            opacity:0.208
          }
          21.5000% {
            opacity:0.052
          }
          21.6667% {
            opacity:1.837e-16
          }
          22.0000% {
            opacity:0
          }
          22.5000% {
            opacity:0
          }
          23.0000% {
            opacity:0
          }
          23.5000% {
            opacity:0
          }
          24.0000% {
            opacity:0
          }
          24.5000% {
            opacity:0
          }
          25.0000% {
            opacity:0
          }
          25.5000% {
            opacity:0
          }
          26.0000% {
            opacity:0
          }
          26.5000% {
            opacity:0
          }
          27.0000% {
            opacity:0
          }
          27.5000% {
            opacity:0
          }
          28.0000% {
            opacity:0
          }
          28.5000% {
            opacity:0
          }
          29.0000% {
            opacity:0
          }
          29.5000% {
            opacity:0
          }
          30.0000% {
            opacity:0
          }
          30.5000% {
            opacity:0
          }
          31.0000% {
            opacity:0
          }
          31.5000% {
            opacity:0
          }
          31.6667% {
            opacity:0
          }
          32.0000% {
            opacity:0.105
          }
          32.5000% {
            opacity:0.259
          }
          33.0000% {
            opacity:0.407
          }
          33.5000% {
            opacity:0.545
          }
          34.0000% {
            opacity:0.669
          }
          34.5000% {
            opacity:0.777
          }
          35.0000% {
            opacity:0.866
          }
          35.5000% {
            opacity:0.934
          }
          36.0000% {
            opacity:0.978
          }
          36.5000% {
            opacity:0.999
          }
          37.0000% {
            opacity:0.995
          }
          37.5000% {
            opacity:0.966
          }
          38.0000% {
            opacity:0.914
          }
          38.5000% {
            opacity:0.839
          }
          39.0000% {
            opacity:0.743
          }
          39.5000% {
            opacity:0.629
          }
          40.0000% {
            opacity:0.5
          }
          40.5000% {
            opacity:0.358
          }
          41.0000% {
            opacity:0.208
          }
          41.5000% {
            opacity:0.052
          }
          41.6667% {
            opacity:2.205e-15
          }
          42.0000% {
            opacity:0
          }
          42.5000% {
            opacity:0
          }
          43.0000% {
            opacity:0
          }
          43.5000% {
            opacity:0
          }
          44.0000% {
            opacity:0
          }
          44.5000% {
            opacity:0
          }
          45.0000% {
            opacity:0
          }
          45.5000% {
            opacity:0
          }
          46.0000% {
            opacity:0
          }
          46.5000% {
            opacity:0
          }
          47.0000% {
            opacity:0
          }
          47.5000% {
            opacity:0
          }
          48.0000% {
            opacity:0
          }
          48.5000% {
            opacity:0
          }
          49.0000% {
            opacity:0
          }
          49.5000% {
            opacity:0
          }
          50.0000% {
            opacity:0
          }
          50.5000% {
            opacity:0
          }
          51.0000% {
            opacity:0
          }
          51.5000% {
            opacity:0
          }
          51.6667% {
            opacity:0
          }
          52.0000% {
            opacity:0.105
          }
          52.5000% {
            opacity:0.259
          }
          53.0000% {
            opacity:0.407
          }
          53.5000% {
            opacity:0.545
          }
          54.0000% {
            opacity:0.669
          }
          54.5000% {
            opacity:0.777
          }
          55.0000% {
            opacity:0.866
          }
          55.5000% {
            opacity:0.934
          }
          56.0000% {
            opacity:0.978
          }
          56.5000% {
            opacity:0.999
          }
          57.0000% {
            opacity:0.995
          }
          57.5000% {
            opacity:0.966
          }
          58.0000% {
            opacity:0.914
          }
          58.5000% {
            opacity:0.839
          }
          59.0000% {
            opacity:0.743
          }
          59.5000% {
            opacity:0.629
          }
          60.0000% {
            opacity:0.5
          }
          60.5000% {
            opacity:0.358
          }
          61.0000% {
            opacity:0.208
          }
          61.5000% {
            opacity:0.052
          }
          61.6667% {
            opacity:2.45e-15
          }
          62.0000% {
            opacity:0
          }
          62.5000% {
            opacity:0
          }
          63.0000% {
            opacity:0
          }
          63.5000% {
            opacity:0
          }
          64.0000% {
            opacity:0
          }
          64.5000% {
            opacity:0
          }
          65.0000% {
            opacity:0
          }
          65.5000% {
            opacity:0
          }
          66.0000% {
            opacity:0
          }
          66.5000% {
            opacity:0
          }
          67.0000% {
            opacity:0
          }
          67.5000% {
            opacity:0
          }
          68.0000% {
            opacity:0
          }
          68.5000% {
            opacity:0
          }
          69.0000% {
            opacity:0
          }
          69.5000% {
            opacity:0
          }
          70.0000% {
            opacity:0
          }
          70.5000% {
            opacity:0
          }
          71.0000% {
            opacity:0
          }
          71.5000% {
            opacity:0
          }
          71.6667% {
            opacity:0
          }
          72.0000% {
            opacity:0.105
          }
          72.5000% {
            opacity:0.259
          }
          73.0000% {
            opacity:0.407
          }
          73.5000% {
            opacity:0.545
          }
          74.0000% {
            opacity:0.669
          }
          74.5000% {
            opacity:0.777
          }
          75.0000% {
            opacity:0.866
          }
          75.5000% {
            opacity:0.934
          }
          76.0000% {
            opacity:0.978
          }
          76.5000% {
            opacity:0.999
          }
          77.0000% {
            opacity:0.995
          }
          77.5000% {
            opacity:0.966
          }
          78.0000% {
            opacity:0.914
          }
          78.5000% {
            opacity:0.839
          }
          79.0000% {
            opacity:0.743
          }
          79.5000% {
            opacity:0.629
          }
          80.0000% {
            opacity:0.5
          }
          80.5000% {
            opacity:0.358
          }
          81.0000% {
            opacity:0.208
          }
          81.5000% {
            opacity:0.052
          }
          81.6667% {
            opacity:2.695e-15
          }
          82.0000% {
            opacity:0
          }
          82.5000% {
            opacity:0
          }
          83.0000% {
            opacity:0
          }
          83.5000% {
            opacity:0
          }
          84.0000% {
            opacity:0
          }
          84.5000% {
            opacity:0
          }
          85.0000% {
            opacity:0
          }
          85.5000% {
            opacity:0
          }
          86.0000% {
            opacity:0
          }
          86.5000% {
            opacity:0
          }
          87.0000% {
            opacity:0
          }
          87.5000% {
            opacity:0
          }
          88.0000% {
            opacity:0
          }
          88.5000% {
            opacity:0
          }
          89.0000% {
            opacity:0
          }
          89.5000% {
            opacity:0
          }
          90.0000% {
            opacity:0
          }
          90.5000% {
            opacity:0
          }
          91.0000% {
            opacity:0
          }
          91.5000% {
            opacity:0
          }
          91.6667% {
            opacity:0
          }
          92.0000% {
            opacity:0.105
          }
          92.5000% {
            opacity:0.259
          }
          93.0000% {
            opacity:0.407
          }
          93.5000% {
            opacity:0.545
          }
          94.0000% {
            opacity:0.669
          }
          94.5000% {
            opacity:0.777
          }
          95.0000% {
            opacity:0.866
          }
          95.5000% {
            opacity:0.934
          }
          96.0000% {
            opacity:0.978
          }
          96.5000% {
            opacity:0.999
          }
          97.0000% {
            opacity:0.995
          }
          97.5000% {
            opacity:0.966
          }
          98.0000% {
            opacity:0.914
          }
          98.5000% {
            opacity:0.839
          }
          99.0000% {
            opacity:0.743
          }
          99.5000% {
            opacity:0.629
          }
          100.0000% {
            opacity:0.5
          }
        }
        @keyframes motor-n-3 {
          0.0000% {
            opacity:0
          }
          0.5000% {
            opacity:0
          }
          1.0000% {
            opacity:0
          }
          1.5000% {
            opacity:0
          }
          1.6667% {
            opacity:0
          }
          2.0000% {
            opacity:0.105
          }
          2.5000% {
            opacity:0.259
          }
          3.0000% {
            opacity:0.407
          }
          3.5000% {
            opacity:0.545
          }
          4.0000% {
            opacity:0.669
          }
          4.5000% {
            opacity:0.777
          }
          5.0000% {
            opacity:0.866
          }
          5.5000% {
            opacity:0.934
          }
          6.0000% {
            opacity:0.978
          }
          6.5000% {
            opacity:0.999
          }
          7.0000% {
            opacity:0.995
          }
          7.5000% {
            opacity:0.966
          }
          8.0000% {
            opacity:0.914
          }
          8.5000% {
            opacity:0.839
          }
          9.0000% {
            opacity:0.743
          }
          9.5000% {
            opacity:0.629
          }
          10.0000% {
            opacity:0.5
          }
          10.5000% {
            opacity:0.358
          }
          11.0000% {
            opacity:0.208
          }
          11.5000% {
            opacity:0.052
          }
          11.6667% {
            opacity:5.053e-16
          }
          12.0000% {
            opacity:0
          }
          12.5000% {
            opacity:0
          }
          13.0000% {
            opacity:0
          }
          13.5000% {
            opacity:0
          }
          14.0000% {
            opacity:0
          }
          14.5000% {
            opacity:0
          }
          15.0000% {
            opacity:0
          }
          15.5000% {
            opacity:0
          }
          16.0000% {
            opacity:0
          }
          16.5000% {
            opacity:0
          }
          17.0000% {
            opacity:0
          }
          17.5000% {
            opacity:0
          }
          18.0000% {
            opacity:0
          }
          18.5000% {
            opacity:0
          }
          19.0000% {
            opacity:0
          }
          19.5000% {
            opacity:0
          }
          20.0000% {
            opacity:0
          }
          20.5000% {
            opacity:0
          }
          21.0000% {
            opacity:0
          }
          21.5000% {
            opacity:0
          }
          21.6667% {
            opacity:0
          }
          22.0000% {
            opacity:0.105
          }
          22.5000% {
            opacity:0.259
          }
          23.0000% {
            opacity:0.407
          }
          23.5000% {
            opacity:0.545
          }
          24.0000% {
            opacity:0.669
          }
          24.5000% {
            opacity:0.777
          }
          25.0000% {
            opacity:0.866
          }
          25.5000% {
            opacity:0.934
          }
          26.0000% {
            opacity:0.978
          }
          26.5000% {
            opacity:0.999
          }
          27.0000% {
            opacity:0.995
          }
          27.5000% {
            opacity:0.966
          }
          28.0000% {
            opacity:0.914
          }
          28.5000% {
            opacity:0.839
          }
          29.0000% {
            opacity:0.743
          }
          29.5000% {
            opacity:0.629
          }
          30.0000% {
            opacity:0.5
          }
          30.5000% {
            opacity:0.358
          }
          31.0000% {
            opacity:0.208
          }
          31.5000% {
            opacity:0.052
          }
          31.6667% {
            opacity:3.062e-16
          }
          32.0000% {
            opacity:0
          }
          32.5000% {
            opacity:0
          }
          33.0000% {
            opacity:0
          }
          33.5000% {
            opacity:0
          }
          34.0000% {
            opacity:0
          }
          34.5000% {
            opacity:0
          }
          35.0000% {
            opacity:0
          }
          35.5000% {
            opacity:0
          }
          36.0000% {
            opacity:0
          }
          36.5000% {
            opacity:0
          }
          37.0000% {
            opacity:0
          }
          37.5000% {
            opacity:0
          }
          38.0000% {
            opacity:0
          }
          38.5000% {
            opacity:0
          }
          39.0000% {
            opacity:0
          }
          39.5000% {
            opacity:0
          }
          40.0000% {
            opacity:0
          }
          40.5000% {
            opacity:0
          }
          41.0000% {
            opacity:0
          }
          41.5000% {
            opacity:0
          }
          41.6667% {
            opacity:0
          }
          42.0000% {
            opacity:0.105
          }
          42.5000% {
            opacity:0.259
          }
          43.0000% {
            opacity:0.407
          }
          43.5000% {
            opacity:0.545
          }
          44.0000% {
            opacity:0.669
          }
          44.5000% {
            opacity:0.777
          }
          45.0000% {
            opacity:0.866
          }
          45.5000% {
            opacity:0.934
          }
          46.0000% {
            opacity:0.978
          }
          46.5000% {
            opacity:0.999
          }
          47.0000% {
            opacity:0.995
          }
          47.5000% {
            opacity:0.966
          }
          48.0000% {
            opacity:0.914
          }
          48.5000% {
            opacity:0.839
          }
          49.0000% {
            opacity:0.743
          }
          49.5000% {
            opacity:0.629
          }
          50.0000% {
            opacity:0.5
          }
          50.5000% {
            opacity:0.358
          }
          51.0000% {
            opacity:0.208
          }
          51.5000% {
            opacity:0.052
          }
          51.6667% {
            opacity:5.511e-16
          }
          52.0000% {
            opacity:0
          }
          52.5000% {
            opacity:0
          }
          53.0000% {
            opacity:0
          }
          53.5000% {
            opacity:0
          }
          54.0000% {
            opacity:0
          }
          54.5000% {
            opacity:0
          }
          55.0000% {
            opacity:0
          }
          55.5000% {
            opacity:0
          }
          56.0000% {
            opacity:0
          }
          56.5000% {
            opacity:0
          }
          57.0000% {
            opacity:0
          }
          57.5000% {
            opacity:0
          }
          58.0000% {
            opacity:0
          }
          58.5000% {
            opacity:0
          }
          59.0000% {
            opacity:0
          }
          59.5000% {
            opacity:0
          }
          60.0000% {
            opacity:0
          }
          60.5000% {
            opacity:0
          }
          61.0000% {
            opacity:0
          }
          61.5000% {
            opacity:0
          }
          61.6667% {
            opacity:0
          }
          62.0000% {
            opacity:0.105
          }
          62.5000% {
            opacity:0.259
          }
          63.0000% {
            opacity:0.407
          }
          63.5000% {
            opacity:0.545
          }
          64.0000% {
            opacity:0.669
          }
          64.5000% {
            opacity:0.777
          }
          65.0000% {
            opacity:0.866
          }
          65.5000% {
            opacity:0.934
          }
          66.0000% {
            opacity:0.978
          }
          66.5000% {
            opacity:0.999
          }
          67.0000% {
            opacity:0.995
          }
          67.5000% {
            opacity:0.966
          }
          68.0000% {
            opacity:0.914
          }
          68.5000% {
            opacity:0.839
          }
          69.0000% {
            opacity:0.743
          }
          69.5000% {
            opacity:0.629
          }
          70.0000% {
            opacity:0.5
          }
          70.5000% {
            opacity:0.358
          }
          71.0000% {
            opacity:0.208
          }
          71.5000% {
            opacity:0.052
          }
          71.6667% {
            opacity:2.572e-15
          }
          72.0000% {
            opacity:0
          }
          72.5000% {
            opacity:0
          }
          73.0000% {
            opacity:0
          }
          73.5000% {
            opacity:0
          }
          74.0000% {
            opacity:0
          }
          74.5000% {
            opacity:0
          }
          75.0000% {
            opacity:0
          }
          75.5000% {
            opacity:0
          }
          76.0000% {
            opacity:0
          }
          76.5000% {
            opacity:0
          }
          77.0000% {
            opacity:0
          }
          77.5000% {
            opacity:0
          }
          78.0000% {
            opacity:0
          }
          78.5000% {
            opacity:0
          }
          79.0000% {
            opacity:0
          }
          79.5000% {
            opacity:0
          }
          80.0000% {
            opacity:0
          }
          80.5000% {
            opacity:0
          }
          81.0000% {
            opacity:0
          }
          81.5000% {
            opacity:0
          }
          81.6667% {
            opacity:0
          }
          82.0000% {
            opacity:0.105
          }
          82.5000% {
            opacity:0.259
          }
          83.0000% {
            opacity:0.407
          }
          83.5000% {
            opacity:0.545
          }
          84.0000% {
            opacity:0.669
          }
          84.5000% {
            opacity:0.777
          }
          85.0000% {
            opacity:0.866
          }
          85.5000% {
            opacity:0.934
          }
          86.0000% {
            opacity:0.978
          }
          86.5000% {
            opacity:0.999
          }
          87.0000% {
            opacity:0.995
          }
          87.5000% {
            opacity:0.966
          }
          88.0000% {
            opacity:0.914
          }
          88.5000% {
            opacity:0.839
          }
          89.0000% {
            opacity:0.743
          }
          89.5000% {
            opacity:0.629
          }
          90.0000% {
            opacity:0.5
          }
          90.5000% {
            opacity:0.358
          }
          91.0000% {
            opacity:0.208
          }
          91.5000% {
            opacity:0.052
          }
          91.6667% {
            opacity:2.817e-15
          }
          92.0000% {
            opacity:0
          }
          92.5000% {
            opacity:0
          }
          93.0000% {
            opacity:0
          }
          93.5000% {
            opacity:0
          }
          94.0000% {
            opacity:0
          }
          94.5000% {
            opacity:0
          }
          95.0000% {
            opacity:0
          }
          95.5000% {
            opacity:0
          }
          96.0000% {
            opacity:0
          }
          96.5000% {
            opacity:0
          }
          97.0000% {
            opacity:0
          }
          97.5000% {
            opacity:0
          }
          98.0000% {
            opacity:0
          }
          98.5000% {
            opacity:0
          }
          99.0000% {
            opacity:0
          }
          99.5000% {
            opacity:0
          }
          100.0000% {
            opacity:0
          }
        }
        .phase-1 {
          fill:#f3c977;
          stroke:#f3c977;
          fill-opacity:0.279;
          animation:motor-phase-1 10s linear infinite
        }
        @keyframes motor-phase-1 {
          0% {
            fill-opacity:0.4
          }
          0.5% {
            fill-opacity:0.329
          }
          1% {
            fill-opacity:0.254
          }
          1.5% {
            fill-opacity:0.176
          }
          2% {
            fill-opacity:0.202
          }
          2.5% {
            fill-opacity:0.279
          }
          3% {
            fill-opacity:0.353
          }
          3.5% {
            fill-opacity:0.422
          }
          4% {
            fill-opacity:0.485
          }
          4.5% {
            fill-opacity:0.539
          }
          5% {
            fill-opacity:0.583
          }
          5.5% {
            fill-opacity:0.617
          }
          6% {
            fill-opacity:0.639
          }
          6.5% {
            fill-opacity:0.649
          }
          7% {
            fill-opacity:0.647
          }
          7.5% {
            fill-opacity:0.633
          }
          8% {
            fill-opacity:0.607
          }
          8.5% {
            fill-opacity:0.569
          }
          9% {
            fill-opacity:0.522
          }
          9.5% {
            fill-opacity:0.465
          }
          10% {
            fill-opacity:0.4
          }
          10.5% {
            fill-opacity:0.329
          }
          11% {
            fill-opacity:0.254
          }
          11.5% {
            fill-opacity:0.176
          }
          12% {
            fill-opacity:0.202
          }
          12.5% {
            fill-opacity:0.279
          }
          13% {
            fill-opacity:0.353
          }
          13.5% {
            fill-opacity:0.422
          }
          14% {
            fill-opacity:0.485
          }
          14.5% {
            fill-opacity:0.539
          }
          15% {
            fill-opacity:0.583
          }
          15.5% {
            fill-opacity:0.617
          }
          16% {
            fill-opacity:0.639
          }
          16.5% {
            fill-opacity:0.649
          }
          17% {
            fill-opacity:0.647
          }
          17.5% {
            fill-opacity:0.633
          }
          18% {
            fill-opacity:0.607
          }
          18.5% {
            fill-opacity:0.569
          }
          19% {
            fill-opacity:0.522
          }
          19.5% {
            fill-opacity:0.465
          }
          20% {
            fill-opacity:0.4
          }
          20.5% {
            fill-opacity:0.329
          }
          21% {
            fill-opacity:0.254
          }
          21.5% {
            fill-opacity:0.176
          }
          22% {
            fill-opacity:0.202
          }
          22.5% {
            fill-opacity:0.279
          }
          23% {
            fill-opacity:0.353
          }
          23.5% {
            fill-opacity:0.422
          }
          24% {
            fill-opacity:0.485
          }
          24.5% {
            fill-opacity:0.539
          }
          25% {
            fill-opacity:0.583
          }
          25.5% {
            fill-opacity:0.617
          }
          26% {
            fill-opacity:0.639
          }
          26.5% {
            fill-opacity:0.649
          }
          27% {
            fill-opacity:0.647
          }
          27.5% {
            fill-opacity:0.633
          }
          28% {
            fill-opacity:0.607
          }
          28.5% {
            fill-opacity:0.569
          }
          29% {
            fill-opacity:0.522
          }
          29.5% {
            fill-opacity:0.465
          }
          30% {
            fill-opacity:0.4
          }
          30.5% {
            fill-opacity:0.329
          }
          31% {
            fill-opacity:0.254
          }
          31.5% {
            fill-opacity:0.176
          }
          32% {
            fill-opacity:0.202
          }
          32.5% {
            fill-opacity:0.279
          }
          33% {
            fill-opacity:0.353
          }
          33.5% {
            fill-opacity:0.422
          }
          34% {
            fill-opacity:0.485
          }
          34.5% {
            fill-opacity:0.539
          }
          35% {
            fill-opacity:0.583
          }
          35.5% {
            fill-opacity:0.617
          }
          36% {
            fill-opacity:0.639
          }
          36.5% {
            fill-opacity:0.649
          }
          37% {
            fill-opacity:0.647
          }
          37.5% {
            fill-opacity:0.633
          }
          38% {
            fill-opacity:0.607
          }
          38.5% {
            fill-opacity:0.569
          }
          39% {
            fill-opacity:0.522
          }
          39.5% {
            fill-opacity:0.465
          }
          40% {
            fill-opacity:0.4
          }
          40.5% {
            fill-opacity:0.329
          }
          41% {
            fill-opacity:0.254
          }
          41.5% {
            fill-opacity:0.176
          }
          42% {
            fill-opacity:0.202
          }
          42.5% {
            fill-opacity:0.279
          }
          43% {
            fill-opacity:0.353
          }
          43.5% {
            fill-opacity:0.422
          }
          44% {
            fill-opacity:0.485
          }
          44.5% {
            fill-opacity:0.539
          }
          45% {
            fill-opacity:0.583
          }
          45.5% {
            fill-opacity:0.617
          }
          46% {
            fill-opacity:0.639
          }
          46.5% {
            fill-opacity:0.649
          }
          47% {
            fill-opacity:0.647
          }
          47.5% {
            fill-opacity:0.633
          }
          48% {
            fill-opacity:0.607
          }
          48.5% {
            fill-opacity:0.569
          }
          49% {
            fill-opacity:0.522
          }
          49.5% {
            fill-opacity:0.465
          }
          50% {
            fill-opacity:0.4
          }
          50.5% {
            fill-opacity:0.329
          }
          51% {
            fill-opacity:0.254
          }
          51.5% {
            fill-opacity:0.176
          }
          52% {
            fill-opacity:0.202
          }
          52.5% {
            fill-opacity:0.279
          }
          53% {
            fill-opacity:0.353
          }
          53.5% {
            fill-opacity:0.422
          }
          54% {
            fill-opacity:0.485
          }
          54.5% {
            fill-opacity:0.539
          }
          55% {
            fill-opacity:0.583
          }
          55.5% {
            fill-opacity:0.617
          }
          56% {
            fill-opacity:0.639
          }
          56.5% {
            fill-opacity:0.649
          }
          57% {
            fill-opacity:0.647
          }
          57.5% {
            fill-opacity:0.633
          }
          58% {
            fill-opacity:0.607
          }
          58.5% {
            fill-opacity:0.569
          }
          59% {
            fill-opacity:0.522
          }
          59.5% {
            fill-opacity:0.465
          }
          60% {
            fill-opacity:0.4
          }
          60.5% {
            fill-opacity:0.329
          }
          61% {
            fill-opacity:0.254
          }
          61.5% {
            fill-opacity:0.176
          }
          62% {
            fill-opacity:0.202
          }
          62.5% {
            fill-opacity:0.279
          }
          63% {
            fill-opacity:0.353
          }
          63.5% {
            fill-opacity:0.422
          }
          64% {
            fill-opacity:0.485
          }
          64.5% {
            fill-opacity:0.539
          }
          65% {
            fill-opacity:0.583
          }
          65.5% {
            fill-opacity:0.617
          }
          66% {
            fill-opacity:0.639
          }
          66.5% {
            fill-opacity:0.649
          }
          67% {
            fill-opacity:0.647
          }
          67.5% {
            fill-opacity:0.633
          }
          68% {
            fill-opacity:0.607
          }
          68.5% {
            fill-opacity:0.569
          }
          69% {
            fill-opacity:0.522
          }
          69.5% {
            fill-opacity:0.465
          }
          70% {
            fill-opacity:0.4
          }
          70.5% {
            fill-opacity:0.329
          }
          71% {
            fill-opacity:0.254
          }
          71.5% {
            fill-opacity:0.176
          }
          72% {
            fill-opacity:0.202
          }
          72.5% {
            fill-opacity:0.279
          }
          73% {
            fill-opacity:0.353
          }
          73.5% {
            fill-opacity:0.422
          }
          74% {
            fill-opacity:0.485
          }
          74.5% {
            fill-opacity:0.539
          }
          75% {
            fill-opacity:0.583
          }
          75.5% {
            fill-opacity:0.617
          }
          76% {
            fill-opacity:0.639
          }
          76.5% {
            fill-opacity:0.649
          }
          77% {
            fill-opacity:0.647
          }
          77.5% {
            fill-opacity:0.633
          }
          78% {
            fill-opacity:0.607
          }
          78.5% {
            fill-opacity:0.569
          }
          79% {
            fill-opacity:0.522
          }
          79.5% {
            fill-opacity:0.465
          }
          80% {
            fill-opacity:0.4
          }
          80.5% {
            fill-opacity:0.329
          }
          81% {
            fill-opacity:0.254
          }
          81.5% {
            fill-opacity:0.176
          }
          82% {
            fill-opacity:0.202
          }
          82.5% {
            fill-opacity:0.279
          }
          83% {
            fill-opacity:0.353
          }
          83.5% {
            fill-opacity:0.422
          }
          84% {
            fill-opacity:0.485
          }
          84.5% {
            fill-opacity:0.539
          }
          85% {
            fill-opacity:0.583
          }
          85.5% {
            fill-opacity:0.617
          }
          86% {
            fill-opacity:0.639
          }
          86.5% {
            fill-opacity:0.649
          }
          87% {
            fill-opacity:0.647
          }
          87.5% {
            fill-opacity:0.633
          }
          88% {
            fill-opacity:0.607
          }
          88.5% {
            fill-opacity:0.569
          }
          89% {
            fill-opacity:0.522
          }
          89.5% {
            fill-opacity:0.465
          }
          90% {
            fill-opacity:0.4
          }
          90.5% {
            fill-opacity:0.329
          }
          91% {
            fill-opacity:0.254
          }
          91.5% {
            fill-opacity:0.176
          }
          92% {
            fill-opacity:0.202
          }
          92.5% {
            fill-opacity:0.279
          }
          93% {
            fill-opacity:0.353
          }
          93.5% {
            fill-opacity:0.422
          }
          94% {
            fill-opacity:0.485
          }
          94.5% {
            fill-opacity:0.539
          }
          95% {
            fill-opacity:0.583
          }
          95.5% {
            fill-opacity:0.617
          }
          96% {
            fill-opacity:0.639
          }
          96.5% {
            fill-opacity:0.649
          }
          97% {
            fill-opacity:0.647
          }
          97.5% {
            fill-opacity:0.633
          }
          98% {
            fill-opacity:0.607
          }
          98.5% {
            fill-opacity:0.569
          }
          99% {
            fill-opacity:0.522
          }
          99.5% {
            fill-opacity:0.465
          }
          100% {
            fill-opacity:0.4
          }
        }
        .p4s {
          opacity:0.966;
          animation:motor-s-4 10s linear infinite
        }
        .p4n {
          opacity:0;
          animation:motor-n-4 10s linear infinite
        }
        @keyframes motor-s-4 {
          0.0000% {
            opacity:0
          }
          0.5000% {
            opacity:0
          }
          1.0000% {
            opacity:0
          }
          1.5000% {
            opacity:0
          }
          2.0000% {
            opacity:0
          }
          2.5000% {
            opacity:0
          }
          3.0000% {
            opacity:0
          }
          3.5000% {
            opacity:0
          }
          4.0000% {
            opacity:0
          }
          4.5000% {
            opacity:0
          }
          5.0000% {
            opacity:0
          }
          5.5000% {
            opacity:0
          }
          6.0000% {
            opacity:0
          }
          6.5000% {
            opacity:0
          }
          7.0000% {
            opacity:0
          }
          7.5000% {
            opacity:0
          }
          8.0000% {
            opacity:0
          }
          8.3333% {
            opacity:6.123e-17
          }
          8.5000% {
            opacity:0.052
          }
          9.0000% {
            opacity:0.208
          }
          9.5000% {
            opacity:0.358
          }
          10.0000% {
            opacity:0.5
          }
          10.5000% {
            opacity:0.629
          }
          11.0000% {
            opacity:0.743
          }
          11.5000% {
            opacity:0.839
          }
          12.0000% {
            opacity:0.914
          }
          12.5000% {
            opacity:0.966
          }
          13.0000% {
            opacity:0.995
          }
          13.5000% {
            opacity:0.999
          }
          14.0000% {
            opacity:0.978
          }
          14.5000% {
            opacity:0.934
          }
          15.0000% {
            opacity:0.866
          }
          15.5000% {
            opacity:0.777
          }
          16.0000% {
            opacity:0.669
          }
          16.5000% {
            opacity:0.545
          }
          17.0000% {
            opacity:0.407
          }
          17.5000% {
            opacity:0.259
          }
          18.0000% {
            opacity:0.105
          }
          18.3333% {
            opacity:6.123e-17
          }
          18.5000% {
            opacity:0
          }
          19.0000% {
            opacity:0
          }
          19.5000% {
            opacity:0
          }
          20.0000% {
            opacity:0
          }
          20.5000% {
            opacity:0
          }
          21.0000% {
            opacity:0
          }
          21.5000% {
            opacity:0
          }
          22.0000% {
            opacity:0
          }
          22.5000% {
            opacity:0
          }
          23.0000% {
            opacity:0
          }
          23.5000% {
            opacity:0
          }
          24.0000% {
            opacity:0
          }
          24.5000% {
            opacity:0
          }
          25.0000% {
            opacity:0
          }
          25.5000% {
            opacity:0
          }
          26.0000% {
            opacity:0
          }
          26.5000% {
            opacity:0
          }
          27.0000% {
            opacity:0
          }
          27.5000% {
            opacity:0
          }
          28.0000% {
            opacity:0
          }
          28.3333% {
            opacity:0
          }
          28.5000% {
            opacity:0.052
          }
          29.0000% {
            opacity:0.208
          }
          29.5000% {
            opacity:0.358
          }
          30.0000% {
            opacity:0.5
          }
          30.5000% {
            opacity:0.629
          }
          31.0000% {
            opacity:0.743
          }
          31.5000% {
            opacity:0.839
          }
          32.0000% {
            opacity:0.914
          }
          32.5000% {
            opacity:0.966
          }
          33.0000% {
            opacity:0.995
          }
          33.5000% {
            opacity:0.999
          }
          34.0000% {
            opacity:0.978
          }
          34.5000% {
            opacity:0.934
          }
          35.0000% {
            opacity:0.866
          }
          35.5000% {
            opacity:0.777
          }
          36.0000% {
            opacity:0.669
          }
          36.5000% {
            opacity:0.545
          }
          37.0000% {
            opacity:0.407
          }
          37.5000% {
            opacity:0.259
          }
          38.0000% {
            opacity:0.105
          }
          38.3333% {
            opacity:1.194e-15
          }
          38.5000% {
            opacity:0
          }
          39.0000% {
            opacity:0
          }
          39.5000% {
            opacity:0
          }
          40.0000% {
            opacity:0
          }
          40.5000% {
            opacity:0
          }
          41.0000% {
            opacity:0
          }
          41.5000% {
            opacity:0
          }
          42.0000% {
            opacity:0
          }
          42.5000% {
            opacity:0
          }
          43.0000% {
            opacity:0
          }
          43.5000% {
            opacity:0
          }
          44.0000% {
            opacity:0
          }
          44.5000% {
            opacity:0
          }
          45.0000% {
            opacity:0
          }
          45.5000% {
            opacity:0
          }
          46.0000% {
            opacity:0
          }
          46.5000% {
            opacity:0
          }
          47.0000% {
            opacity:0
          }
          47.5000% {
            opacity:0
          }
          48.0000% {
            opacity:0
          }
          48.3333% {
            opacity:0
          }
          48.5000% {
            opacity:0.052
          }
          49.0000% {
            opacity:0.208
          }
          49.5000% {
            opacity:0.358
          }
          50.0000% {
            opacity:0.5
          }
          50.5000% {
            opacity:0.629
          }
          51.0000% {
            opacity:0.743
          }
          51.5000% {
            opacity:0.839
          }
          52.0000% {
            opacity:0.914
          }
          52.5000% {
            opacity:0.966
          }
          53.0000% {
            opacity:0.995
          }
          53.5000% {
            opacity:0.999
          }
          54.0000% {
            opacity:0.978
          }
          54.5000% {
            opacity:0.934
          }
          55.0000% {
            opacity:0.866
          }
          55.5000% {
            opacity:0.777
          }
          56.0000% {
            opacity:0.669
          }
          56.5000% {
            opacity:0.545
          }
          57.0000% {
            opacity:0.407
          }
          57.5000% {
            opacity:0.259
          }
          58.0000% {
            opacity:0.105
          }
          58.3333% {
            opacity:0
          }
          58.5000% {
            opacity:0
          }
          59.0000% {
            opacity:0
          }
          59.5000% {
            opacity:0
          }
          60.0000% {
            opacity:0
          }
          60.5000% {
            opacity:0
          }
          61.0000% {
            opacity:0
          }
          61.5000% {
            opacity:0
          }
          62.0000% {
            opacity:0
          }
          62.5000% {
            opacity:0
          }
          63.0000% {
            opacity:0
          }
          63.5000% {
            opacity:0
          }
          64.0000% {
            opacity:0
          }
          64.5000% {
            opacity:0
          }
          65.0000% {
            opacity:0
          }
          65.5000% {
            opacity:0
          }
          66.0000% {
            opacity:0
          }
          66.5000% {
            opacity:0
          }
          67.0000% {
            opacity:0
          }
          67.5000% {
            opacity:0
          }
          68.0000% {
            opacity:0
          }
          68.3333% {
            opacity:1.103e-15
          }
          68.5000% {
            opacity:0.052
          }
          69.0000% {
            opacity:0.208
          }
          69.5000% {
            opacity:0.358
          }
          70.0000% {
            opacity:0.5
          }
          70.5000% {
            opacity:0.629
          }
          71.0000% {
            opacity:0.743
          }
          71.5000% {
            opacity:0.839
          }
          72.0000% {
            opacity:0.914
          }
          72.5000% {
            opacity:0.966
          }
          73.0000% {
            opacity:0.995
          }
          73.5000% {
            opacity:0.999
          }
          74.0000% {
            opacity:0.978
          }
          74.5000% {
            opacity:0.934
          }
          75.0000% {
            opacity:0.866
          }
          75.5000% {
            opacity:0.777
          }
          76.0000% {
            opacity:0.669
          }
          76.5000% {
            opacity:0.545
          }
          77.0000% {
            opacity:0.407
          }
          77.5000% {
            opacity:0.259
          }
          78.0000% {
            opacity:0.105
          }
          78.3333% {
            opacity:0
          }
          78.5000% {
            opacity:0
          }
          79.0000% {
            opacity:0
          }
          79.5000% {
            opacity:0
          }
          80.0000% {
            opacity:0
          }
          80.5000% {
            opacity:0
          }
          81.0000% {
            opacity:0
          }
          81.5000% {
            opacity:0
          }
          82.0000% {
            opacity:0
          }
          82.5000% {
            opacity:0
          }
          83.0000% {
            opacity:0
          }
          83.5000% {
            opacity:0
          }
          84.0000% {
            opacity:0
          }
          84.5000% {
            opacity:0
          }
          85.0000% {
            opacity:0
          }
          85.5000% {
            opacity:0
          }
          86.0000% {
            opacity:0
          }
          86.5000% {
            opacity:0
          }
          87.0000% {
            opacity:0
          }
          87.5000% {
            opacity:0
          }
          88.0000% {
            opacity:0
          }
          88.3333% {
            opacity:8.579e-16
          }
          88.5000% {
            opacity:0.052
          }
          89.0000% {
            opacity:0.208
          }
          89.5000% {
            opacity:0.358
          }
          90.0000% {
            opacity:0.5
          }
          90.5000% {
            opacity:0.629
          }
          91.0000% {
            opacity:0.743
          }
          91.5000% {
            opacity:0.839
          }
          92.0000% {
            opacity:0.914
          }
          92.5000% {
            opacity:0.966
          }
          93.0000% {
            opacity:0.995
          }
          93.5000% {
            opacity:0.999
          }
          94.0000% {
            opacity:0.978
          }
          94.5000% {
            opacity:0.934
          }
          95.0000% {
            opacity:0.866
          }
          95.5000% {
            opacity:0.777
          }
          96.0000% {
            opacity:0.669
          }
          96.5000% {
            opacity:0.545
          }
          97.0000% {
            opacity:0.407
          }
          97.5000% {
            opacity:0.259
          }
          98.0000% {
            opacity:0.105
          }
          98.3333% {
            opacity:0
          }
          98.5000% {
            opacity:0
          }
          99.0000% {
            opacity:0
          }
          99.5000% {
            opacity:0
          }
          100.0000% {
            opacity:0
          }
        }
        @keyframes motor-n-4 {
          0.0000% {
            opacity:0.5
          }
          0.5000% {
            opacity:0.629
          }
          1.0000% {
            opacity:0.743
          }
          1.5000% {
            opacity:0.839
          }
          2.0000% {
            opacity:0.914
          }
          2.5000% {
            opacity:0.966
          }
          3.0000% {
            opacity:0.995
          }
          3.5000% {
            opacity:0.999
          }
          4.0000% {
            opacity:0.978
          }
          4.5000% {
            opacity:0.934
          }
          5.0000% {
            opacity:0.866
          }
          5.5000% {
            opacity:0.777
          }
          6.0000% {
            opacity:0.669
          }
          6.5000% {
            opacity:0.545
          }
          7.0000% {
            opacity:0.407
          }
          7.5000% {
            opacity:0.259
          }
          8.0000% {
            opacity:0.105
          }
          8.3333% {
            opacity:0
          }
          8.5000% {
            opacity:0
          }
          9.0000% {
            opacity:0
          }
          9.5000% {
            opacity:0
          }
          10.0000% {
            opacity:0
          }
          10.5000% {
            opacity:0
          }
          11.0000% {
            opacity:0
          }
          11.5000% {
            opacity:0
          }
          12.0000% {
            opacity:0
          }
          12.5000% {
            opacity:0
          }
          13.0000% {
            opacity:0
          }
          13.5000% {
            opacity:0
          }
          14.0000% {
            opacity:0
          }
          14.5000% {
            opacity:0
          }
          15.0000% {
            opacity:0
          }
          15.5000% {
            opacity:0
          }
          16.0000% {
            opacity:0
          }
          16.5000% {
            opacity:0
          }
          17.0000% {
            opacity:0
          }
          17.5000% {
            opacity:0
          }
          18.0000% {
            opacity:0
          }
          18.3333% {
            opacity:0
          }
          18.5000% {
            opacity:0.052
          }
          19.0000% {
            opacity:0.208
          }
          19.5000% {
            opacity:0.358
          }
          20.0000% {
            opacity:0.5
          }
          20.5000% {
            opacity:0.629
          }
          21.0000% {
            opacity:0.743
          }
          21.5000% {
            opacity:0.839
          }
          22.0000% {
            opacity:0.914
          }
          22.5000% {
            opacity:0.966
          }
          23.0000% {
            opacity:0.995
          }
          23.5000% {
            opacity:0.999
          }
          24.0000% {
            opacity:0.978
          }
          24.5000% {
            opacity:0.934
          }
          25.0000% {
            opacity:0.866
          }
          25.5000% {
            opacity:0.777
          }
          26.0000% {
            opacity:0.669
          }
          26.5000% {
            opacity:0.545
          }
          27.0000% {
            opacity:0.407
          }
          27.5000% {
            opacity:0.259
          }
          28.0000% {
            opacity:0.105
          }
          28.3333% {
            opacity:1.072e-15
          }
          28.5000% {
            opacity:0
          }
          29.0000% {
            opacity:0
          }
          29.5000% {
            opacity:0
          }
          30.0000% {
            opacity:0
          }
          30.5000% {
            opacity:0
          }
          31.0000% {
            opacity:0
          }
          31.5000% {
            opacity:0
          }
          32.0000% {
            opacity:0
          }
          32.5000% {
            opacity:0
          }
          33.0000% {
            opacity:0
          }
          33.5000% {
            opacity:0
          }
          34.0000% {
            opacity:0
          }
          34.5000% {
            opacity:0
          }
          35.0000% {
            opacity:0
          }
          35.5000% {
            opacity:0
          }
          36.0000% {
            opacity:0
          }
          36.5000% {
            opacity:0
          }
          37.0000% {
            opacity:0
          }
          37.5000% {
            opacity:0
          }
          38.0000% {
            opacity:0
          }
          38.3333% {
            opacity:0
          }
          38.5000% {
            opacity:0.052
          }
          39.0000% {
            opacity:0.208
          }
          39.5000% {
            opacity:0.358
          }
          40.0000% {
            opacity:0.5
          }
          40.5000% {
            opacity:0.629
          }
          41.0000% {
            opacity:0.743
          }
          41.5000% {
            opacity:0.839
          }
          42.0000% {
            opacity:0.914
          }
          42.5000% {
            opacity:0.966
          }
          43.0000% {
            opacity:0.995
          }
          43.5000% {
            opacity:0.999
          }
          44.0000% {
            opacity:0.978
          }
          44.5000% {
            opacity:0.934
          }
          45.0000% {
            opacity:0.866
          }
          45.5000% {
            opacity:0.777
          }
          46.0000% {
            opacity:0.669
          }
          46.5000% {
            opacity:0.545
          }
          47.0000% {
            opacity:0.407
          }
          47.5000% {
            opacity:0.259
          }
          48.0000% {
            opacity:0.105
          }
          48.3333% {
            opacity:2.205e-15
          }
          48.5000% {
            opacity:0
          }
          49.0000% {
            opacity:0
          }
          49.5000% {
            opacity:0
          }
          50.0000% {
            opacity:0
          }
          50.5000% {
            opacity:0
          }
          51.0000% {
            opacity:0
          }
          51.5000% {
            opacity:0
          }
          52.0000% {
            opacity:0
          }
          52.5000% {
            opacity:0
          }
          53.0000% {
            opacity:0
          }
          53.5000% {
            opacity:0
          }
          54.0000% {
            opacity:0
          }
          54.5000% {
            opacity:0
          }
          55.0000% {
            opacity:0
          }
          55.5000% {
            opacity:0
          }
          56.0000% {
            opacity:0
          }
          56.5000% {
            opacity:0
          }
          57.0000% {
            opacity:0
          }
          57.5000% {
            opacity:0
          }
          58.0000% {
            opacity:0
          }
          58.3333% {
            opacity:1.225e-15
          }
          58.5000% {
            opacity:0.052
          }
          59.0000% {
            opacity:0.208
          }
          59.5000% {
            opacity:0.358
          }
          60.0000% {
            opacity:0.5
          }
          60.5000% {
            opacity:0.629
          }
          61.0000% {
            opacity:0.743
          }
          61.5000% {
            opacity:0.839
          }
          62.0000% {
            opacity:0.914
          }
          62.5000% {
            opacity:0.966
          }
          63.0000% {
            opacity:0.995
          }
          63.5000% {
            opacity:0.999
          }
          64.0000% {
            opacity:0.978
          }
          64.5000% {
            opacity:0.934
          }
          65.0000% {
            opacity:0.866
          }
          65.5000% {
            opacity:0.777
          }
          66.0000% {
            opacity:0.669
          }
          66.5000% {
            opacity:0.545
          }
          67.0000% {
            opacity:0.407
          }
          67.5000% {
            opacity:0.259
          }
          68.0000% {
            opacity:0.105
          }
          68.3333% {
            opacity:0
          }
          68.5000% {
            opacity:0
          }
          69.0000% {
            opacity:0
          }
          69.5000% {
            opacity:0
          }
          70.0000% {
            opacity:0
          }
          70.5000% {
            opacity:0
          }
          71.0000% {
            opacity:0
          }
          71.5000% {
            opacity:0
          }
          72.0000% {
            opacity:0
          }
          72.5000% {
            opacity:0
          }
          73.0000% {
            opacity:0
          }
          73.5000% {
            opacity:0
          }
          74.0000% {
            opacity:0
          }
          74.5000% {
            opacity:0
          }
          75.0000% {
            opacity:0
          }
          75.5000% {
            opacity:0
          }
          76.0000% {
            opacity:0
          }
          76.5000% {
            opacity:0
          }
          77.0000% {
            opacity:0
          }
          77.5000% {
            opacity:0
          }
          78.0000% {
            opacity:0
          }
          78.3333% {
            opacity:9.803e-16
          }
          78.5000% {
            opacity:0.052
          }
          79.0000% {
            opacity:0.208
          }
          79.5000% {
            opacity:0.358
          }
          80.0000% {
            opacity:0.5
          }
          80.5000% {
            opacity:0.629
          }
          81.0000% {
            opacity:0.743
          }
          81.5000% {
            opacity:0.839
          }
          82.0000% {
            opacity:0.914
          }
          82.5000% {
            opacity:0.966
          }
          83.0000% {
            opacity:0.995
          }
          83.5000% {
            opacity:0.999
          }
          84.0000% {
            opacity:0.978
          }
          84.5000% {
            opacity:0.934
          }
          85.0000% {
            opacity:0.866
          }
          85.5000% {
            opacity:0.777
          }
          86.0000% {
            opacity:0.669
          }
          86.5000% {
            opacity:0.545
          }
          87.0000% {
            opacity:0.407
          }
          87.5000% {
            opacity:0.259
          }
          88.0000% {
            opacity:0.105
          }
          88.3333% {
            opacity:0
          }
          88.5000% {
            opacity:0
          }
          89.0000% {
            opacity:0
          }
          89.5000% {
            opacity:0
          }
          90.0000% {
            opacity:0
          }
          90.5000% {
            opacity:0
          }
          91.0000% {
            opacity:0
          }
          91.5000% {
            opacity:0
          }
          92.0000% {
            opacity:0
          }
          92.5000% {
            opacity:0
          }
          93.0000% {
            opacity:0
          }
          93.5000% {
            opacity:0
          }
          94.0000% {
            opacity:0
          }
          94.5000% {
            opacity:0
          }
          95.0000% {
            opacity:0
          }
          95.5000% {
            opacity:0
          }
          96.0000% {
            opacity:0
          }
          96.5000% {
            opacity:0
          }
          97.0000% {
            opacity:0
          }
          97.5000% {
            opacity:0
          }
          98.0000% {
            opacity:0
          }
          98.3333% {
            opacity:7.354e-16
          }
          98.5000% {
            opacity:0.052
          }
          99.0000% {
            opacity:0.208
          }
          99.5000% {
            opacity:0.358
          }
          100.0000% {
            opacity:0.5
          }
        }
        .p5s {
          opacity:0;
          animation:motor-s-5 10s linear infinite
        }
        .p5n {
          opacity:0.966;
          animation:motor-n-5 10s linear infinite
        }
        @keyframes motor-s-5 {
          0.0000% {
            opacity:0.5
          }
          0.5000% {
            opacity:0.629
          }
          1.0000% {
            opacity:0.743
          }
          1.5000% {
            opacity:0.839
          }
          2.0000% {
            opacity:0.914
          }
          2.5000% {
            opacity:0.966
          }
          3.0000% {
            opacity:0.995
          }
          3.5000% {
            opacity:0.999
          }
          4.0000% {
            opacity:0.978
          }
          4.5000% {
            opacity:0.934
          }
          5.0000% {
            opacity:0.866
          }
          5.5000% {
            opacity:0.777
          }
          6.0000% {
            opacity:0.669
          }
          6.5000% {
            opacity:0.545
          }
          7.0000% {
            opacity:0.407
          }
          7.5000% {
            opacity:0.259
          }
          8.0000% {
            opacity:0.105
          }
          8.3333% {
            opacity:0
          }
          8.5000% {
            opacity:0
          }
          9.0000% {
            opacity:0
          }
          9.5000% {
            opacity:0
          }
          10.0000% {
            opacity:0
          }
          10.5000% {
            opacity:0
          }
          11.0000% {
            opacity:0
          }
          11.5000% {
            opacity:0
          }
          12.0000% {
            opacity:0
          }
          12.5000% {
            opacity:0
          }
          13.0000% {
            opacity:0
          }
          13.5000% {
            opacity:0
          }
          14.0000% {
            opacity:0
          }
          14.5000% {
            opacity:0
          }
          15.0000% {
            opacity:0
          }
          15.5000% {
            opacity:0
          }
          16.0000% {
            opacity:0
          }
          16.5000% {
            opacity:0
          }
          17.0000% {
            opacity:0
          }
          17.5000% {
            opacity:0
          }
          18.0000% {
            opacity:0
          }
          18.3333% {
            opacity:0
          }
          18.5000% {
            opacity:0.052
          }
          19.0000% {
            opacity:0.208
          }
          19.5000% {
            opacity:0.358
          }
          20.0000% {
            opacity:0.5
          }
          20.5000% {
            opacity:0.629
          }
          21.0000% {
            opacity:0.743
          }
          21.5000% {
            opacity:0.839
          }
          22.0000% {
            opacity:0.914
          }
          22.5000% {
            opacity:0.966
          }
          23.0000% {
            opacity:0.995
          }
          23.5000% {
            opacity:0.999
          }
          24.0000% {
            opacity:0.978
          }
          24.5000% {
            opacity:0.934
          }
          25.0000% {
            opacity:0.866
          }
          25.5000% {
            opacity:0.777
          }
          26.0000% {
            opacity:0.669
          }
          26.5000% {
            opacity:0.545
          }
          27.0000% {
            opacity:0.407
          }
          27.5000% {
            opacity:0.259
          }
          28.0000% {
            opacity:0.105
          }
          28.3333% {
            opacity:1.072e-15
          }
          28.5000% {
            opacity:0
          }
          29.0000% {
            opacity:0
          }
          29.5000% {
            opacity:0
          }
          30.0000% {
            opacity:0
          }
          30.5000% {
            opacity:0
          }
          31.0000% {
            opacity:0
          }
          31.5000% {
            opacity:0
          }
          32.0000% {
            opacity:0
          }
          32.5000% {
            opacity:0
          }
          33.0000% {
            opacity:0
          }
          33.5000% {
            opacity:0
          }
          34.0000% {
            opacity:0
          }
          34.5000% {
            opacity:0
          }
          35.0000% {
            opacity:0
          }
          35.5000% {
            opacity:0
          }
          36.0000% {
            opacity:0
          }
          36.5000% {
            opacity:0
          }
          37.0000% {
            opacity:0
          }
          37.5000% {
            opacity:0
          }
          38.0000% {
            opacity:0
          }
          38.3333% {
            opacity:0
          }
          38.5000% {
            opacity:0.052
          }
          39.0000% {
            opacity:0.208
          }
          39.5000% {
            opacity:0.358
          }
          40.0000% {
            opacity:0.5
          }
          40.5000% {
            opacity:0.629
          }
          41.0000% {
            opacity:0.743
          }
          41.5000% {
            opacity:0.839
          }
          42.0000% {
            opacity:0.914
          }
          42.5000% {
            opacity:0.966
          }
          43.0000% {
            opacity:0.995
          }
          43.5000% {
            opacity:0.999
          }
          44.0000% {
            opacity:0.978
          }
          44.5000% {
            opacity:0.934
          }
          45.0000% {
            opacity:0.866
          }
          45.5000% {
            opacity:0.777
          }
          46.0000% {
            opacity:0.669
          }
          46.5000% {
            opacity:0.545
          }
          47.0000% {
            opacity:0.407
          }
          47.5000% {
            opacity:0.259
          }
          48.0000% {
            opacity:0.105
          }
          48.3333% {
            opacity:2.205e-15
          }
          48.5000% {
            opacity:0
          }
          49.0000% {
            opacity:0
          }
          49.5000% {
            opacity:0
          }
          50.0000% {
            opacity:0
          }
          50.5000% {
            opacity:0
          }
          51.0000% {
            opacity:0
          }
          51.5000% {
            opacity:0
          }
          52.0000% {
            opacity:0
          }
          52.5000% {
            opacity:0
          }
          53.0000% {
            opacity:0
          }
          53.5000% {
            opacity:0
          }
          54.0000% {
            opacity:0
          }
          54.5000% {
            opacity:0
          }
          55.0000% {
            opacity:0
          }
          55.5000% {
            opacity:0
          }
          56.0000% {
            opacity:0
          }
          56.5000% {
            opacity:0
          }
          57.0000% {
            opacity:0
          }
          57.5000% {
            opacity:0
          }
          58.0000% {
            opacity:0
          }
          58.3333% {
            opacity:1.225e-15
          }
          58.5000% {
            opacity:0.052
          }
          59.0000% {
            opacity:0.208
          }
          59.5000% {
            opacity:0.358
          }
          60.0000% {
            opacity:0.5
          }
          60.5000% {
            opacity:0.629
          }
          61.0000% {
            opacity:0.743
          }
          61.5000% {
            opacity:0.839
          }
          62.0000% {
            opacity:0.914
          }
          62.5000% {
            opacity:0.966
          }
          63.0000% {
            opacity:0.995
          }
          63.5000% {
            opacity:0.999
          }
          64.0000% {
            opacity:0.978
          }
          64.5000% {
            opacity:0.934
          }
          65.0000% {
            opacity:0.866
          }
          65.5000% {
            opacity:0.777
          }
          66.0000% {
            opacity:0.669
          }
          66.5000% {
            opacity:0.545
          }
          67.0000% {
            opacity:0.407
          }
          67.5000% {
            opacity:0.259
          }
          68.0000% {
            opacity:0.105
          }
          68.3333% {
            opacity:0
          }
          68.5000% {
            opacity:0
          }
          69.0000% {
            opacity:0
          }
          69.5000% {
            opacity:0
          }
          70.0000% {
            opacity:0
          }
          70.5000% {
            opacity:0
          }
          71.0000% {
            opacity:0
          }
          71.5000% {
            opacity:0
          }
          72.0000% {
            opacity:0
          }
          72.5000% {
            opacity:0
          }
          73.0000% {
            opacity:0
          }
          73.5000% {
            opacity:0
          }
          74.0000% {
            opacity:0
          }
          74.5000% {
            opacity:0
          }
          75.0000% {
            opacity:0
          }
          75.5000% {
            opacity:0
          }
          76.0000% {
            opacity:0
          }
          76.5000% {
            opacity:0
          }
          77.0000% {
            opacity:0
          }
          77.5000% {
            opacity:0
          }
          78.0000% {
            opacity:0
          }
          78.3333% {
            opacity:9.803e-16
          }
          78.5000% {
            opacity:0.052
          }
          79.0000% {
            opacity:0.208
          }
          79.5000% {
            opacity:0.358
          }
          80.0000% {
            opacity:0.5
          }
          80.5000% {
            opacity:0.629
          }
          81.0000% {
            opacity:0.743
          }
          81.5000% {
            opacity:0.839
          }
          82.0000% {
            opacity:0.914
          }
          82.5000% {
            opacity:0.966
          }
          83.0000% {
            opacity:0.995
          }
          83.5000% {
            opacity:0.999
          }
          84.0000% {
            opacity:0.978
          }
          84.5000% {
            opacity:0.934
          }
          85.0000% {
            opacity:0.866
          }
          85.5000% {
            opacity:0.777
          }
          86.0000% {
            opacity:0.669
          }
          86.5000% {
            opacity:0.545
          }
          87.0000% {
            opacity:0.407
          }
          87.5000% {
            opacity:0.259
          }
          88.0000% {
            opacity:0.105
          }
          88.3333% {
            opacity:0
          }
          88.5000% {
            opacity:0
          }
          89.0000% {
            opacity:0
          }
          89.5000% {
            opacity:0
          }
          90.0000% {
            opacity:0
          }
          90.5000% {
            opacity:0
          }
          91.0000% {
            opacity:0
          }
          91.5000% {
            opacity:0
          }
          92.0000% {
            opacity:0
          }
          92.5000% {
            opacity:0
          }
          93.0000% {
            opacity:0
          }
          93.5000% {
            opacity:0
          }
          94.0000% {
            opacity:0
          }
          94.5000% {
            opacity:0
          }
          95.0000% {
            opacity:0
          }
          95.5000% {
            opacity:0
          }
          96.0000% {
            opacity:0
          }
          96.5000% {
            opacity:0
          }
          97.0000% {
            opacity:0
          }
          97.5000% {
            opacity:0
          }
          98.0000% {
            opacity:0
          }
          98.3333% {
            opacity:7.354e-16
          }
          98.5000% {
            opacity:0.052
          }
          99.0000% {
            opacity:0.208
          }
          99.5000% {
            opacity:0.358
          }
          100.0000% {
            opacity:0.5
          }
        }
        @keyframes motor-n-5 {
          0.0000% {
            opacity:0
          }
          0.5000% {
            opacity:0
          }
          1.0000% {
            opacity:0
          }
          1.5000% {
            opacity:0
          }
          2.0000% {
            opacity:0
          }
          2.5000% {
            opacity:0
          }
          3.0000% {
            opacity:0
          }
          3.5000% {
            opacity:0
          }
          4.0000% {
            opacity:0
          }
          4.5000% {
            opacity:0
          }
          5.0000% {
            opacity:0
          }
          5.5000% {
            opacity:0
          }
          6.0000% {
            opacity:0
          }
          6.5000% {
            opacity:0
          }
          7.0000% {
            opacity:0
          }
          7.5000% {
            opacity:0
          }
          8.0000% {
            opacity:0
          }
          8.3333% {
            opacity:6.123e-17
          }
          8.5000% {
            opacity:0.052
          }
          9.0000% {
            opacity:0.208
          }
          9.5000% {
            opacity:0.358
          }
          10.0000% {
            opacity:0.5
          }
          10.5000% {
            opacity:0.629
          }
          11.0000% {
            opacity:0.743
          }
          11.5000% {
            opacity:0.839
          }
          12.0000% {
            opacity:0.914
          }
          12.5000% {
            opacity:0.966
          }
          13.0000% {
            opacity:0.995
          }
          13.5000% {
            opacity:0.999
          }
          14.0000% {
            opacity:0.978
          }
          14.5000% {
            opacity:0.934
          }
          15.0000% {
            opacity:0.866
          }
          15.5000% {
            opacity:0.777
          }
          16.0000% {
            opacity:0.669
          }
          16.5000% {
            opacity:0.545
          }
          17.0000% {
            opacity:0.407
          }
          17.5000% {
            opacity:0.259
          }
          18.0000% {
            opacity:0.105
          }
          18.3333% {
            opacity:6.123e-17
          }
          18.5000% {
            opacity:0
          }
          19.0000% {
            opacity:0
          }
          19.5000% {
            opacity:0
          }
          20.0000% {
            opacity:0
          }
          20.5000% {
            opacity:0
          }
          21.0000% {
            opacity:0
          }
          21.5000% {
            opacity:0
          }
          22.0000% {
            opacity:0
          }
          22.5000% {
            opacity:0
          }
          23.0000% {
            opacity:0
          }
          23.5000% {
            opacity:0
          }
          24.0000% {
            opacity:0
          }
          24.5000% {
            opacity:0
          }
          25.0000% {
            opacity:0
          }
          25.5000% {
            opacity:0
          }
          26.0000% {
            opacity:0
          }
          26.5000% {
            opacity:0
          }
          27.0000% {
            opacity:0
          }
          27.5000% {
            opacity:0
          }
          28.0000% {
            opacity:0
          }
          28.3333% {
            opacity:0
          }
          28.5000% {
            opacity:0.052
          }
          29.0000% {
            opacity:0.208
          }
          29.5000% {
            opacity:0.358
          }
          30.0000% {
            opacity:0.5
          }
          30.5000% {
            opacity:0.629
          }
          31.0000% {
            opacity:0.743
          }
          31.5000% {
            opacity:0.839
          }
          32.0000% {
            opacity:0.914
          }
          32.5000% {
            opacity:0.966
          }
          33.0000% {
            opacity:0.995
          }
          33.5000% {
            opacity:0.999
          }
          34.0000% {
            opacity:0.978
          }
          34.5000% {
            opacity:0.934
          }
          35.0000% {
            opacity:0.866
          }
          35.5000% {
            opacity:0.777
          }
          36.0000% {
            opacity:0.669
          }
          36.5000% {
            opacity:0.545
          }
          37.0000% {
            opacity:0.407
          }
          37.5000% {
            opacity:0.259
          }
          38.0000% {
            opacity:0.105
          }
          38.3333% {
            opacity:1.194e-15
          }
          38.5000% {
            opacity:0
          }
          39.0000% {
            opacity:0
          }
          39.5000% {
            opacity:0
          }
          40.0000% {
            opacity:0
          }
          40.5000% {
            opacity:0
          }
          41.0000% {
            opacity:0
          }
          41.5000% {
            opacity:0
          }
          42.0000% {
            opacity:0
          }
          42.5000% {
            opacity:0
          }
          43.0000% {
            opacity:0
          }
          43.5000% {
            opacity:0
          }
          44.0000% {
            opacity:0
          }
          44.5000% {
            opacity:0
          }
          45.0000% {
            opacity:0
          }
          45.5000% {
            opacity:0
          }
          46.0000% {
            opacity:0
          }
          46.5000% {
            opacity:0
          }
          47.0000% {
            opacity:0
          }
          47.5000% {
            opacity:0
          }
          48.0000% {
            opacity:0
          }
          48.3333% {
            opacity:0
          }
          48.5000% {
            opacity:0.052
          }
          49.0000% {
            opacity:0.208
          }
          49.5000% {
            opacity:0.358
          }
          50.0000% {
            opacity:0.5
          }
          50.5000% {
            opacity:0.629
          }
          51.0000% {
            opacity:0.743
          }
          51.5000% {
            opacity:0.839
          }
          52.0000% {
            opacity:0.914
          }
          52.5000% {
            opacity:0.966
          }
          53.0000% {
            opacity:0.995
          }
          53.5000% {
            opacity:0.999
          }
          54.0000% {
            opacity:0.978
          }
          54.5000% {
            opacity:0.934
          }
          55.0000% {
            opacity:0.866
          }
          55.5000% {
            opacity:0.777
          }
          56.0000% {
            opacity:0.669
          }
          56.5000% {
            opacity:0.545
          }
          57.0000% {
            opacity:0.407
          }
          57.5000% {
            opacity:0.259
          }
          58.0000% {
            opacity:0.105
          }
          58.3333% {
            opacity:0
          }
          58.5000% {
            opacity:0
          }
          59.0000% {
            opacity:0
          }
          59.5000% {
            opacity:0
          }
          60.0000% {
            opacity:0
          }
          60.5000% {
            opacity:0
          }
          61.0000% {
            opacity:0
          }
          61.5000% {
            opacity:0
          }
          62.0000% {
            opacity:0
          }
          62.5000% {
            opacity:0
          }
          63.0000% {
            opacity:0
          }
          63.5000% {
            opacity:0
          }
          64.0000% {
            opacity:0
          }
          64.5000% {
            opacity:0
          }
          65.0000% {
            opacity:0
          }
          65.5000% {
            opacity:0
          }
          66.0000% {
            opacity:0
          }
          66.5000% {
            opacity:0
          }
          67.0000% {
            opacity:0
          }
          67.5000% {
            opacity:0
          }
          68.0000% {
            opacity:0
          }
          68.3333% {
            opacity:1.103e-15
          }
          68.5000% {
            opacity:0.052
          }
          69.0000% {
            opacity:0.208
          }
          69.5000% {
            opacity:0.358
          }
          70.0000% {
            opacity:0.5
          }
          70.5000% {
            opacity:0.629
          }
          71.0000% {
            opacity:0.743
          }
          71.5000% {
            opacity:0.839
          }
          72.0000% {
            opacity:0.914
          }
          72.5000% {
            opacity:0.966
          }
          73.0000% {
            opacity:0.995
          }
          73.5000% {
            opacity:0.999
          }
          74.0000% {
            opacity:0.978
          }
          74.5000% {
            opacity:0.934
          }
          75.0000% {
            opacity:0.866
          }
          75.5000% {
            opacity:0.777
          }
          76.0000% {
            opacity:0.669
          }
          76.5000% {
            opacity:0.545
          }
          77.0000% {
            opacity:0.407
          }
          77.5000% {
            opacity:0.259
          }
          78.0000% {
            opacity:0.105
          }
          78.3333% {
            opacity:0
          }
          78.5000% {
            opacity:0
          }
          79.0000% {
            opacity:0
          }
          79.5000% {
            opacity:0
          }
          80.0000% {
            opacity:0
          }
          80.5000% {
            opacity:0
          }
          81.0000% {
            opacity:0
          }
          81.5000% {
            opacity:0
          }
          82.0000% {
            opacity:0
          }
          82.5000% {
            opacity:0
          }
          83.0000% {
            opacity:0
          }
          83.5000% {
            opacity:0
          }
          84.0000% {
            opacity:0
          }
          84.5000% {
            opacity:0
          }
          85.0000% {
            opacity:0
          }
          85.5000% {
            opacity:0
          }
          86.0000% {
            opacity:0
          }
          86.5000% {
            opacity:0
          }
          87.0000% {
            opacity:0
          }
          87.5000% {
            opacity:0
          }
          88.0000% {
            opacity:0
          }
          88.3333% {
            opacity:8.579e-16
          }
          88.5000% {
            opacity:0.052
          }
          89.0000% {
            opacity:0.208
          }
          89.5000% {
            opacity:0.358
          }
          90.0000% {
            opacity:0.5
          }
          90.5000% {
            opacity:0.629
          }
          91.0000% {
            opacity:0.743
          }
          91.5000% {
            opacity:0.839
          }
          92.0000% {
            opacity:0.914
          }
          92.5000% {
            opacity:0.966
          }
          93.0000% {
            opacity:0.995
          }
          93.5000% {
            opacity:0.999
          }
          94.0000% {
            opacity:0.978
          }
          94.5000% {
            opacity:0.934
          }
          95.0000% {
            opacity:0.866
          }
          95.5000% {
            opacity:0.777
          }
          96.0000% {
            opacity:0.669
          }
          96.5000% {
            opacity:0.545
          }
          97.0000% {
            opacity:0.407
          }
          97.5000% {
            opacity:0.259
          }
          98.0000% {
            opacity:0.105
          }
          98.3333% {
            opacity:0
          }
          98.5000% {
            opacity:0
          }
          99.0000% {
            opacity:0
          }
          99.5000% {
            opacity:0
          }
          100.0000% {
            opacity:0
          }
        }
        .phase-2 {
          fill:#ed8eab;
          stroke:#ed8eab;
          fill-opacity:0.633;
          animation:motor-phase-2 10s linear infinite
        }
        @keyframes motor-phase-2 {
          0% {
            fill-opacity:0.4
          }
          0.5% {
            fill-opacity:0.465
          }
          1% {
            fill-opacity:0.522
          }
          1.5% {
            fill-opacity:0.569
          }
          2% {
            fill-opacity:0.607
          }
          2.5% {
            fill-opacity:0.633
          }
          3% {
            fill-opacity:0.647
          }
          3.5% {
            fill-opacity:0.649
          }
          4% {
            fill-opacity:0.639
          }
          4.5% {
            fill-opacity:0.617
          }
          5% {
            fill-opacity:0.583
          }
          5.5% {
            fill-opacity:0.539
          }
          6% {
            fill-opacity:0.485
          }
          6.5% {
            fill-opacity:0.422
          }
          7% {
            fill-opacity:0.353
          }
          7.5% {
            fill-opacity:0.279
          }
          8% {
            fill-opacity:0.202
          }
          8.5% {
            fill-opacity:0.176
          }
          9% {
            fill-opacity:0.254
          }
          9.5% {
            fill-opacity:0.329
          }
          10% {
            fill-opacity:0.4
          }
          10.5% {
            fill-opacity:0.465
          }
          11% {
            fill-opacity:0.522
          }
          11.5% {
            fill-opacity:0.569
          }
          12% {
            fill-opacity:0.607
          }
          12.5% {
            fill-opacity:0.633
          }
          13% {
            fill-opacity:0.647
          }
          13.5% {
            fill-opacity:0.649
          }
          14% {
            fill-opacity:0.639
          }
          14.5% {
            fill-opacity:0.617
          }
          15% {
            fill-opacity:0.583
          }
          15.5% {
            fill-opacity:0.539
          }
          16% {
            fill-opacity:0.485
          }
          16.5% {
            fill-opacity:0.422
          }
          17% {
            fill-opacity:0.353
          }
          17.5% {
            fill-opacity:0.279
          }
          18% {
            fill-opacity:0.202
          }
          18.5% {
            fill-opacity:0.176
          }
          19% {
            fill-opacity:0.254
          }
          19.5% {
            fill-opacity:0.329
          }
          20% {
            fill-opacity:0.4
          }
          20.5% {
            fill-opacity:0.465
          }
          21% {
            fill-opacity:0.522
          }
          21.5% {
            fill-opacity:0.569
          }
          22% {
            fill-opacity:0.607
          }
          22.5% {
            fill-opacity:0.633
          }
          23% {
            fill-opacity:0.647
          }
          23.5% {
            fill-opacity:0.649
          }
          24% {
            fill-opacity:0.639
          }
          24.5% {
            fill-opacity:0.617
          }
          25% {
            fill-opacity:0.583
          }
          25.5% {
            fill-opacity:0.539
          }
          26% {
            fill-opacity:0.485
          }
          26.5% {
            fill-opacity:0.422
          }
          27% {
            fill-opacity:0.353
          }
          27.5% {
            fill-opacity:0.279
          }
          28% {
            fill-opacity:0.202
          }
          28.5% {
            fill-opacity:0.176
          }
          29% {
            fill-opacity:0.254
          }
          29.5% {
            fill-opacity:0.329
          }
          30% {
            fill-opacity:0.4
          }
          30.5% {
            fill-opacity:0.465
          }
          31% {
            fill-opacity:0.522
          }
          31.5% {
            fill-opacity:0.569
          }
          32% {
            fill-opacity:0.607
          }
          32.5% {
            fill-opacity:0.633
          }
          33% {
            fill-opacity:0.647
          }
          33.5% {
            fill-opacity:0.649
          }
          34% {
            fill-opacity:0.639
          }
          34.5% {
            fill-opacity:0.617
          }
          35% {
            fill-opacity:0.583
          }
          35.5% {
            fill-opacity:0.539
          }
          36% {
            fill-opacity:0.485
          }
          36.5% {
            fill-opacity:0.422
          }
          37% {
            fill-opacity:0.353
          }
          37.5% {
            fill-opacity:0.279
          }
          38% {
            fill-opacity:0.202
          }
          38.5% {
            fill-opacity:0.176
          }
          39% {
            fill-opacity:0.254
          }
          39.5% {
            fill-opacity:0.329
          }
          40% {
            fill-opacity:0.4
          }
          40.5% {
            fill-opacity:0.465
          }
          41% {
            fill-opacity:0.522
          }
          41.5% {
            fill-opacity:0.569
          }
          42% {
            fill-opacity:0.607
          }
          42.5% {
            fill-opacity:0.633
          }
          43% {
            fill-opacity:0.647
          }
          43.5% {
            fill-opacity:0.649
          }
          44% {
            fill-opacity:0.639
          }
          44.5% {
            fill-opacity:0.617
          }
          45% {
            fill-opacity:0.583
          }
          45.5% {
            fill-opacity:0.539
          }
          46% {
            fill-opacity:0.485
          }
          46.5% {
            fill-opacity:0.422
          }
          47% {
            fill-opacity:0.353
          }
          47.5% {
            fill-opacity:0.279
          }
          48% {
            fill-opacity:0.202
          }
          48.5% {
            fill-opacity:0.176
          }
          49% {
            fill-opacity:0.254
          }
          49.5% {
            fill-opacity:0.329
          }
          50% {
            fill-opacity:0.4
          }
          50.5% {
            fill-opacity:0.465
          }
          51% {
            fill-opacity:0.522
          }
          51.5% {
            fill-opacity:0.569
          }
          52% {
            fill-opacity:0.607
          }
          52.5% {
            fill-opacity:0.633
          }
          53% {
            fill-opacity:0.647
          }
          53.5% {
            fill-opacity:0.649
          }
          54% {
            fill-opacity:0.639
          }
          54.5% {
            fill-opacity:0.617
          }
          55% {
            fill-opacity:0.583
          }
          55.5% {
            fill-opacity:0.539
          }
          56% {
            fill-opacity:0.485
          }
          56.5% {
            fill-opacity:0.422
          }
          57% {
            fill-opacity:0.353
          }
          57.5% {
            fill-opacity:0.279
          }
          58% {
            fill-opacity:0.202
          }
          58.5% {
            fill-opacity:0.176
          }
          59% {
            fill-opacity:0.254
          }
          59.5% {
            fill-opacity:0.329
          }
          60% {
            fill-opacity:0.4
          }
          60.5% {
            fill-opacity:0.465
          }
          61% {
            fill-opacity:0.522
          }
          61.5% {
            fill-opacity:0.569
          }
          62% {
            fill-opacity:0.607
          }
          62.5% {
            fill-opacity:0.633
          }
          63% {
            fill-opacity:0.647
          }
          63.5% {
            fill-opacity:0.649
          }
          64% {
            fill-opacity:0.639
          }
          64.5% {
            fill-opacity:0.617
          }
          65% {
            fill-opacity:0.583
          }
          65.5% {
            fill-opacity:0.539
          }
          66% {
            fill-opacity:0.485
          }
          66.5% {
            fill-opacity:0.422
          }
          67% {
            fill-opacity:0.353
          }
          67.5% {
            fill-opacity:0.279
          }
          68% {
            fill-opacity:0.202
          }
          68.5% {
            fill-opacity:0.176
          }
          69% {
            fill-opacity:0.254
          }
          69.5% {
            fill-opacity:0.329
          }
          70% {
            fill-opacity:0.4
          }
          70.5% {
            fill-opacity:0.465
          }
          71% {
            fill-opacity:0.522
          }
          71.5% {
            fill-opacity:0.569
          }
          72% {
            fill-opacity:0.607
          }
          72.5% {
            fill-opacity:0.633
          }
          73% {
            fill-opacity:0.647
          }
          73.5% {
            fill-opacity:0.649
          }
          74% {
            fill-opacity:0.639
          }
          74.5% {
            fill-opacity:0.617
          }
          75% {
            fill-opacity:0.583
          }
          75.5% {
            fill-opacity:0.539
          }
          76% {
            fill-opacity:0.485
          }
          76.5% {
            fill-opacity:0.422
          }
          77% {
            fill-opacity:0.353
          }
          77.5% {
            fill-opacity:0.279
          }
          78% {
            fill-opacity:0.202
          }
          78.5% {
            fill-opacity:0.176
          }
          79% {
            fill-opacity:0.254
          }
          79.5% {
            fill-opacity:0.329
          }
          80% {
            fill-opacity:0.4
          }
          80.5% {
            fill-opacity:0.465
          }
          81% {
            fill-opacity:0.522
          }
          81.5% {
            fill-opacity:0.569
          }
          82% {
            fill-opacity:0.607
          }
          82.5% {
            fill-opacity:0.633
          }
          83% {
            fill-opacity:0.647
          }
          83.5% {
            fill-opacity:0.649
          }
          84% {
            fill-opacity:0.639
          }
          84.5% {
            fill-opacity:0.617
          }
          85% {
            fill-opacity:0.583
          }
          85.5% {
            fill-opacity:0.539
          }
          86% {
            fill-opacity:0.485
          }
          86.5% {
            fill-opacity:0.422
          }
          87% {
            fill-opacity:0.353
          }
          87.5% {
            fill-opacity:0.279
          }
          88% {
            fill-opacity:0.202
          }
          88.5% {
            fill-opacity:0.176
          }
          89% {
            fill-opacity:0.254
          }
          89.5% {
            fill-opacity:0.329
          }
          90% {
            fill-opacity:0.4
          }
          90.5% {
            fill-opacity:0.465
          }
          91% {
            fill-opacity:0.522
          }
          91.5% {
            fill-opacity:0.569
          }
          92% {
            fill-opacity:0.607
          }
          92.5% {
            fill-opacity:0.633
          }
          93% {
            fill-opacity:0.647
          }
          93.5% {
            fill-opacity:0.649
          }
          94% {
            fill-opacity:0.639
          }
          94.5% {
            fill-opacity:0.617
          }
          95% {
            fill-opacity:0.583
          }
          95.5% {
            fill-opacity:0.539
          }
          96% {
            fill-opacity:0.485
          }
          96.5% {
            fill-opacity:0.422
          }
          97% {
            fill-opacity:0.353
          }
          97.5% {
            fill-opacity:0.279
          }
          98% {
            fill-opacity:0.202
          }
          98.5% {
            fill-opacity:0.176
          }
          99% {
            fill-opacity:0.254
          }
          99.5% {
            fill-opacity:0.329
          }
          100% {
            fill-opacity:0.4
          }
        }
        .out-0 {
          opacity:0.707;
          animation:motor-out-0 10s linear infinite
        }
        .in-0 {
          opacity:0;
          animation:motor-in-0 10s linear infinite
        }
        @keyframes motor-out-0 {
          0% {
            opacity:1
          }
          0.5% {
            opacity:1.0
          }
          1% {
            opacity:0.998
          }
          1.5% {
            opacity:0.996
          }
          2% {
            opacity:0.992
          }
          2.5% {
            opacity:0.988
          }
          3% {
            opacity:0.982
          }
          3.5% {
            opacity:0.976
          }
          4% {
            opacity:0.969
          }
          4.5% {
            opacity:0.96
          }
          5% {
            opacity:0.951
          }
          5.5% {
            opacity:0.941
          }
          6% {
            opacity:0.93
          }
          6.5% {
            opacity:0.918
          }
          7% {
            opacity:0.905
          }
          7.5% {
            opacity:0.891
          }
          8% {
            opacity:0.876
          }
          8.5% {
            opacity:0.861
          }
          9% {
            opacity:0.844
          }
          9.5% {
            opacity:0.827
          }
          10% {
            opacity:0.809
          }
          10.5% {
            opacity:0.79
          }
          11% {
            opacity:0.771
          }
          11.5% {
            opacity:0.75
          }
          12% {
            opacity:0.729
          }
          12.5% {
            opacity:0.707
          }
          13% {
            opacity:0.685
          }
          13.5% {
            opacity:0.661
          }
          14% {
            opacity:0.637
          }
          14.5% {
            opacity:0.613
          }
          15% {
            opacity:0.588
          }
          15.5% {
            opacity:0.562
          }
          16% {
            opacity:0.536
          }
          16.5% {
            opacity:0.509
          }
          17% {
            opacity:0.482
          }
          17.5% {
            opacity:0.454
          }
          18% {
            opacity:0.426
          }
          18.5% {
            opacity:0.397
          }
          19% {
            opacity:0.368
          }
          19.5% {
            opacity:0.339
          }
          20% {
            opacity:0.309
          }
          20.5% {
            opacity:0.279
          }
          21% {
            opacity:0.249
          }
          21.5% {
            opacity:0.218
          }
          22% {
            opacity:0.187
          }
          22.5% {
            opacity:0.156
          }
          23% {
            opacity:0.125
          }
          23.5% {
            opacity:0.094
          }
          24% {
            opacity:0.063
          }
          24.5% {
            opacity:0.031
          }
          25% {
            opacity:6.123e-17
          }
          25.5% {
            opacity:0
          }
          26% {
            opacity:0
          }
          26.5% {
            opacity:0
          }
          27% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          28% {
            opacity:0
          }
          28.5% {
            opacity:0
          }
          29% {
            opacity:0
          }
          29.5% {
            opacity:0
          }
          30% {
            opacity:0
          }
          30.5% {
            opacity:0
          }
          31% {
            opacity:0
          }
          31.5% {
            opacity:0
          }
          32% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          33% {
            opacity:0
          }
          33.5% {
            opacity:0
          }
          34% {
            opacity:0
          }
          34.5% {
            opacity:0
          }
          35% {
            opacity:0
          }
          35.5% {
            opacity:0
          }
          36% {
            opacity:0
          }
          36.5% {
            opacity:0
          }
          37% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          38% {
            opacity:0
          }
          38.5% {
            opacity:0
          }
          39% {
            opacity:0
          }
          39.5% {
            opacity:0
          }
          40% {
            opacity:0
          }
          40.5% {
            opacity:0
          }
          41% {
            opacity:0
          }
          41.5% {
            opacity:0
          }
          42% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          43% {
            opacity:0
          }
          43.5% {
            opacity:0
          }
          44% {
            opacity:0
          }
          44.5% {
            opacity:0
          }
          45% {
            opacity:0
          }
          45.5% {
            opacity:0
          }
          46% {
            opacity:0
          }
          46.5% {
            opacity:0
          }
          47% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          48% {
            opacity:0
          }
          48.5% {
            opacity:0
          }
          49% {
            opacity:0
          }
          49.5% {
            opacity:0
          }
          50% {
            opacity:0
          }
          50.5% {
            opacity:0
          }
          51% {
            opacity:0
          }
          51.5% {
            opacity:0
          }
          52% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          53% {
            opacity:0
          }
          53.5% {
            opacity:0
          }
          54% {
            opacity:0
          }
          54.5% {
            opacity:0
          }
          55% {
            opacity:0
          }
          55.5% {
            opacity:0
          }
          56% {
            opacity:0
          }
          56.5% {
            opacity:0
          }
          57% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          58% {
            opacity:0
          }
          58.5% {
            opacity:0
          }
          59% {
            opacity:0
          }
          59.5% {
            opacity:0
          }
          60% {
            opacity:0
          }
          60.5% {
            opacity:0
          }
          61% {
            opacity:0
          }
          61.5% {
            opacity:0
          }
          62% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          63% {
            opacity:0
          }
          63.5% {
            opacity:0
          }
          64% {
            opacity:0
          }
          64.5% {
            opacity:0
          }
          65% {
            opacity:0
          }
          65.5% {
            opacity:0
          }
          66% {
            opacity:0
          }
          66.5% {
            opacity:0
          }
          67% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          68% {
            opacity:0
          }
          68.5% {
            opacity:0
          }
          69% {
            opacity:0
          }
          69.5% {
            opacity:0
          }
          70% {
            opacity:0
          }
          70.5% {
            opacity:0
          }
          71% {
            opacity:0
          }
          71.5% {
            opacity:0
          }
          72% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          73% {
            opacity:0
          }
          73.5% {
            opacity:0
          }
          74% {
            opacity:0
          }
          74.5% {
            opacity:0
          }
          75% {
            opacity:0
          }
          75.5% {
            opacity:0.031
          }
          76% {
            opacity:0.063
          }
          76.5% {
            opacity:0.094
          }
          77% {
            opacity:0.125
          }
          77.5% {
            opacity:0.156
          }
          78% {
            opacity:0.187
          }
          78.5% {
            opacity:0.218
          }
          79% {
            opacity:0.249
          }
          79.5% {
            opacity:0.279
          }
          80% {
            opacity:0.309
          }
          80.5% {
            opacity:0.339
          }
          81% {
            opacity:0.368
          }
          81.5% {
            opacity:0.397
          }
          82% {
            opacity:0.426
          }
          82.5% {
            opacity:0.454
          }
          83% {
            opacity:0.482
          }
          83.5% {
            opacity:0.509
          }
          84% {
            opacity:0.536
          }
          84.5% {
            opacity:0.562
          }
          85% {
            opacity:0.588
          }
          85.5% {
            opacity:0.613
          }
          86% {
            opacity:0.637
          }
          86.5% {
            opacity:0.661
          }
          87% {
            opacity:0.685
          }
          87.5% {
            opacity:0.707
          }
          88% {
            opacity:0.729
          }
          88.5% {
            opacity:0.75
          }
          89% {
            opacity:0.771
          }
          89.5% {
            opacity:0.79
          }
          90% {
            opacity:0.809
          }
          90.5% {
            opacity:0.827
          }
          91% {
            opacity:0.844
          }
          91.5% {
            opacity:0.861
          }
          92% {
            opacity:0.876
          }
          92.5% {
            opacity:0.891
          }
          93% {
            opacity:0.905
          }
          93.5% {
            opacity:0.918
          }
          94% {
            opacity:0.93
          }
          94.5% {
            opacity:0.941
          }
          95% {
            opacity:0.951
          }
          95.5% {
            opacity:0.96
          }
          96% {
            opacity:0.969
          }
          96.5% {
            opacity:0.976
          }
          97% {
            opacity:0.982
          }
          97.5% {
            opacity:0.988
          }
          98% {
            opacity:0.992
          }
          98.5% {
            opacity:0.996
          }
          99% {
            opacity:0.998
          }
          99.5% {
            opacity:1.0
          }
          100% {
            opacity:1
          }
        }
        @keyframes motor-in-0 {
          0% {
            opacity:0
          }
          0.5% {
            opacity:0
          }
          1% {
            opacity:0
          }
          1.5% {
            opacity:0
          }
          2% {
            opacity:0
          }
          2.5% {
            opacity:0
          }
          3% {
            opacity:0
          }
          3.5% {
            opacity:0
          }
          4% {
            opacity:0
          }
          4.5% {
            opacity:0
          }
          5% {
            opacity:0
          }
          5.5% {
            opacity:0
          }
          6% {
            opacity:0
          }
          6.5% {
            opacity:0
          }
          7% {
            opacity:0
          }
          7.5% {
            opacity:0
          }
          8% {
            opacity:0
          }
          8.5% {
            opacity:0
          }
          9% {
            opacity:0
          }
          9.5% {
            opacity:0
          }
          10% {
            opacity:0
          }
          10.5% {
            opacity:0
          }
          11% {
            opacity:0
          }
          11.5% {
            opacity:0
          }
          12% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          13% {
            opacity:0
          }
          13.5% {
            opacity:0
          }
          14% {
            opacity:0
          }
          14.5% {
            opacity:0
          }
          15% {
            opacity:0
          }
          15.5% {
            opacity:0
          }
          16% {
            opacity:0
          }
          16.5% {
            opacity:0
          }
          17% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          18% {
            opacity:0
          }
          18.5% {
            opacity:0
          }
          19% {
            opacity:0
          }
          19.5% {
            opacity:0
          }
          20% {
            opacity:0
          }
          20.5% {
            opacity:0
          }
          21% {
            opacity:0
          }
          21.5% {
            opacity:0
          }
          22% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          23% {
            opacity:0
          }
          23.5% {
            opacity:0
          }
          24% {
            opacity:0
          }
          24.5% {
            opacity:0
          }
          25% {
            opacity:0
          }
          25.5% {
            opacity:0.031
          }
          26% {
            opacity:0.063
          }
          26.5% {
            opacity:0.094
          }
          27% {
            opacity:0.125
          }
          27.5% {
            opacity:0.156
          }
          28% {
            opacity:0.187
          }
          28.5% {
            opacity:0.218
          }
          29% {
            opacity:0.249
          }
          29.5% {
            opacity:0.279
          }
          30% {
            opacity:0.309
          }
          30.5% {
            opacity:0.339
          }
          31% {
            opacity:0.368
          }
          31.5% {
            opacity:0.397
          }
          32% {
            opacity:0.426
          }
          32.5% {
            opacity:0.454
          }
          33% {
            opacity:0.482
          }
          33.5% {
            opacity:0.509
          }
          34% {
            opacity:0.536
          }
          34.5% {
            opacity:0.562
          }
          35% {
            opacity:0.588
          }
          35.5% {
            opacity:0.613
          }
          36% {
            opacity:0.637
          }
          36.5% {
            opacity:0.661
          }
          37% {
            opacity:0.685
          }
          37.5% {
            opacity:0.707
          }
          38% {
            opacity:0.729
          }
          38.5% {
            opacity:0.75
          }
          39% {
            opacity:0.771
          }
          39.5% {
            opacity:0.79
          }
          40% {
            opacity:0.809
          }
          40.5% {
            opacity:0.827
          }
          41% {
            opacity:0.844
          }
          41.5% {
            opacity:0.861
          }
          42% {
            opacity:0.876
          }
          42.5% {
            opacity:0.891
          }
          43% {
            opacity:0.905
          }
          43.5% {
            opacity:0.918
          }
          44% {
            opacity:0.93
          }
          44.5% {
            opacity:0.941
          }
          45% {
            opacity:0.951
          }
          45.5% {
            opacity:0.96
          }
          46% {
            opacity:0.969
          }
          46.5% {
            opacity:0.976
          }
          47% {
            opacity:0.982
          }
          47.5% {
            opacity:0.988
          }
          48% {
            opacity:0.992
          }
          48.5% {
            opacity:0.996
          }
          49% {
            opacity:0.998
          }
          49.5% {
            opacity:1.0
          }
          50% {
            opacity:1
          }
          50.5% {
            opacity:1.0
          }
          51% {
            opacity:0.998
          }
          51.5% {
            opacity:0.996
          }
          52% {
            opacity:0.992
          }
          52.5% {
            opacity:0.988
          }
          53% {
            opacity:0.982
          }
          53.5% {
            opacity:0.976
          }
          54% {
            opacity:0.969
          }
          54.5% {
            opacity:0.96
          }
          55% {
            opacity:0.951
          }
          55.5% {
            opacity:0.941
          }
          56% {
            opacity:0.93
          }
          56.5% {
            opacity:0.918
          }
          57% {
            opacity:0.905
          }
          57.5% {
            opacity:0.891
          }
          58% {
            opacity:0.876
          }
          58.5% {
            opacity:0.861
          }
          59% {
            opacity:0.844
          }
          59.5% {
            opacity:0.827
          }
          60% {
            opacity:0.809
          }
          60.5% {
            opacity:0.79
          }
          61% {
            opacity:0.771
          }
          61.5% {
            opacity:0.75
          }
          62% {
            opacity:0.729
          }
          62.5% {
            opacity:0.707
          }
          63% {
            opacity:0.685
          }
          63.5% {
            opacity:0.661
          }
          64% {
            opacity:0.637
          }
          64.5% {
            opacity:0.613
          }
          65% {
            opacity:0.588
          }
          65.5% {
            opacity:0.562
          }
          66% {
            opacity:0.536
          }
          66.5% {
            opacity:0.509
          }
          67% {
            opacity:0.482
          }
          67.5% {
            opacity:0.454
          }
          68% {
            opacity:0.426
          }
          68.5% {
            opacity:0.397
          }
          69% {
            opacity:0.368
          }
          69.5% {
            opacity:0.339
          }
          70% {
            opacity:0.309
          }
          70.5% {
            opacity:0.279
          }
          71% {
            opacity:0.249
          }
          71.5% {
            opacity:0.218
          }
          72% {
            opacity:0.187
          }
          72.5% {
            opacity:0.156
          }
          73% {
            opacity:0.125
          }
          73.5% {
            opacity:0.094
          }
          74% {
            opacity:0.063
          }
          74.5% {
            opacity:0.031
          }
          75% {
            opacity:1.837e-16
          }
          75.5% {
            opacity:0
          }
          76% {
            opacity:0
          }
          76.5% {
            opacity:0
          }
          77% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          78% {
            opacity:0
          }
          78.5% {
            opacity:0
          }
          79% {
            opacity:0
          }
          79.5% {
            opacity:0
          }
          80% {
            opacity:0
          }
          80.5% {
            opacity:0
          }
          81% {
            opacity:0
          }
          81.5% {
            opacity:0
          }
          82% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          83% {
            opacity:0
          }
          83.5% {
            opacity:0
          }
          84% {
            opacity:0
          }
          84.5% {
            opacity:0
          }
          85% {
            opacity:0
          }
          85.5% {
            opacity:0
          }
          86% {
            opacity:0
          }
          86.5% {
            opacity:0
          }
          87% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
          88% {
            opacity:0
          }
          88.5% {
            opacity:0
          }
          89% {
            opacity:0
          }
          89.5% {
            opacity:0
          }
          90% {
            opacity:0
          }
          90.5% {
            opacity:0
          }
          91% {
            opacity:0
          }
          91.5% {
            opacity:0
          }
          92% {
            opacity:0
          }
          92.5% {
            opacity:0
          }
          93% {
            opacity:0
          }
          93.5% {
            opacity:0
          }
          94% {
            opacity:0
          }
          94.5% {
            opacity:0
          }
          95% {
            opacity:0
          }
          95.5% {
            opacity:0
          }
          96% {
            opacity:0
          }
          96.5% {
            opacity:0
          }
          97% {
            opacity:0
          }
          97.5% {
            opacity:0
          }
          98% {
            opacity:0
          }
          98.5% {
            opacity:0
          }
          99% {
            opacity:0
          }
          99.5% {
            opacity:0
          }
          100% {
            opacity:0
          }
        }
        .out-1 {
          opacity:1;
          animation:motor-out-1 10s linear infinite
        }
        .in-1 {
          opacity:0;
          animation:motor-in-1 10s linear infinite
        }
        @keyframes motor-out-1 {
          0% {
            opacity:0.707
          }
          0.5% {
            opacity:0.729
          }
          1% {
            opacity:0.75
          }
          1.5% {
            opacity:0.771
          }
          2% {
            opacity:0.79
          }
          2.5% {
            opacity:0.809
          }
          3% {
            opacity:0.827
          }
          3.5% {
            opacity:0.844
          }
          4% {
            opacity:0.861
          }
          4.5% {
            opacity:0.876
          }
          5% {
            opacity:0.891
          }
          5.5% {
            opacity:0.905
          }
          6% {
            opacity:0.918
          }
          6.5% {
            opacity:0.93
          }
          7% {
            opacity:0.941
          }
          7.5% {
            opacity:0.951
          }
          8% {
            opacity:0.96
          }
          8.5% {
            opacity:0.969
          }
          9% {
            opacity:0.976
          }
          9.5% {
            opacity:0.982
          }
          10% {
            opacity:0.988
          }
          10.5% {
            opacity:0.992
          }
          11% {
            opacity:0.996
          }
          11.5% {
            opacity:0.998
          }
          12% {
            opacity:1.0
          }
          12.5% {
            opacity:1
          }
          13% {
            opacity:1.0
          }
          13.5% {
            opacity:0.998
          }
          14% {
            opacity:0.996
          }
          14.5% {
            opacity:0.992
          }
          15% {
            opacity:0.988
          }
          15.5% {
            opacity:0.982
          }
          16% {
            opacity:0.976
          }
          16.5% {
            opacity:0.969
          }
          17% {
            opacity:0.96
          }
          17.5% {
            opacity:0.951
          }
          18% {
            opacity:0.941
          }
          18.5% {
            opacity:0.93
          }
          19% {
            opacity:0.918
          }
          19.5% {
            opacity:0.905
          }
          20% {
            opacity:0.891
          }
          20.5% {
            opacity:0.876
          }
          21% {
            opacity:0.861
          }
          21.5% {
            opacity:0.844
          }
          22% {
            opacity:0.827
          }
          22.5% {
            opacity:0.809
          }
          23% {
            opacity:0.79
          }
          23.5% {
            opacity:0.771
          }
          24% {
            opacity:0.75
          }
          24.5% {
            opacity:0.729
          }
          25% {
            opacity:0.707
          }
          25.5% {
            opacity:0.685
          }
          26% {
            opacity:0.661
          }
          26.5% {
            opacity:0.637
          }
          27% {
            opacity:0.613
          }
          27.5% {
            opacity:0.588
          }
          28% {
            opacity:0.562
          }
          28.5% {
            opacity:0.536
          }
          29% {
            opacity:0.509
          }
          29.5% {
            opacity:0.482
          }
          30% {
            opacity:0.454
          }
          30.5% {
            opacity:0.426
          }
          31% {
            opacity:0.397
          }
          31.5% {
            opacity:0.368
          }
          32% {
            opacity:0.339
          }
          32.5% {
            opacity:0.309
          }
          33% {
            opacity:0.279
          }
          33.5% {
            opacity:0.249
          }
          34% {
            opacity:0.218
          }
          34.5% {
            opacity:0.187
          }
          35% {
            opacity:0.156
          }
          35.5% {
            opacity:0.125
          }
          36% {
            opacity:0.094
          }
          36.5% {
            opacity:0.063
          }
          37% {
            opacity:0.031
          }
          37.5% {
            opacity:6.123e-17
          }
          38% {
            opacity:0
          }
          38.5% {
            opacity:0
          }
          39% {
            opacity:0
          }
          39.5% {
            opacity:0
          }
          40% {
            opacity:0
          }
          40.5% {
            opacity:0
          }
          41% {
            opacity:0
          }
          41.5% {
            opacity:0
          }
          42% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          43% {
            opacity:0
          }
          43.5% {
            opacity:0
          }
          44% {
            opacity:0
          }
          44.5% {
            opacity:0
          }
          45% {
            opacity:0
          }
          45.5% {
            opacity:0
          }
          46% {
            opacity:0
          }
          46.5% {
            opacity:0
          }
          47% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          48% {
            opacity:0
          }
          48.5% {
            opacity:0
          }
          49% {
            opacity:0
          }
          49.5% {
            opacity:0
          }
          50% {
            opacity:0
          }
          50.5% {
            opacity:0
          }
          51% {
            opacity:0
          }
          51.5% {
            opacity:0
          }
          52% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          53% {
            opacity:0
          }
          53.5% {
            opacity:0
          }
          54% {
            opacity:0
          }
          54.5% {
            opacity:0
          }
          55% {
            opacity:0
          }
          55.5% {
            opacity:0
          }
          56% {
            opacity:0
          }
          56.5% {
            opacity:0
          }
          57% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          58% {
            opacity:0
          }
          58.5% {
            opacity:0
          }
          59% {
            opacity:0
          }
          59.5% {
            opacity:0
          }
          60% {
            opacity:0
          }
          60.5% {
            opacity:0
          }
          61% {
            opacity:0
          }
          61.5% {
            opacity:0
          }
          62% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          63% {
            opacity:0
          }
          63.5% {
            opacity:0
          }
          64% {
            opacity:0
          }
          64.5% {
            opacity:0
          }
          65% {
            opacity:0
          }
          65.5% {
            opacity:0
          }
          66% {
            opacity:0
          }
          66.5% {
            opacity:0
          }
          67% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          68% {
            opacity:0
          }
          68.5% {
            opacity:0
          }
          69% {
            opacity:0
          }
          69.5% {
            opacity:0
          }
          70% {
            opacity:0
          }
          70.5% {
            opacity:0
          }
          71% {
            opacity:0
          }
          71.5% {
            opacity:0
          }
          72% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          73% {
            opacity:0
          }
          73.5% {
            opacity:0
          }
          74% {
            opacity:0
          }
          74.5% {
            opacity:0
          }
          75% {
            opacity:0
          }
          75.5% {
            opacity:0
          }
          76% {
            opacity:0
          }
          76.5% {
            opacity:0
          }
          77% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          78% {
            opacity:0
          }
          78.5% {
            opacity:0
          }
          79% {
            opacity:0
          }
          79.5% {
            opacity:0
          }
          80% {
            opacity:0
          }
          80.5% {
            opacity:0
          }
          81% {
            opacity:0
          }
          81.5% {
            opacity:0
          }
          82% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          83% {
            opacity:0
          }
          83.5% {
            opacity:0
          }
          84% {
            opacity:0
          }
          84.5% {
            opacity:0
          }
          85% {
            opacity:0
          }
          85.5% {
            opacity:0
          }
          86% {
            opacity:0
          }
          86.5% {
            opacity:0
          }
          87% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
          88% {
            opacity:0.031
          }
          88.5% {
            opacity:0.063
          }
          89% {
            opacity:0.094
          }
          89.5% {
            opacity:0.125
          }
          90% {
            opacity:0.156
          }
          90.5% {
            opacity:0.187
          }
          91% {
            opacity:0.218
          }
          91.5% {
            opacity:0.249
          }
          92% {
            opacity:0.279
          }
          92.5% {
            opacity:0.309
          }
          93% {
            opacity:0.339
          }
          93.5% {
            opacity:0.368
          }
          94% {
            opacity:0.397
          }
          94.5% {
            opacity:0.426
          }
          95% {
            opacity:0.454
          }
          95.5% {
            opacity:0.482
          }
          96% {
            opacity:0.509
          }
          96.5% {
            opacity:0.536
          }
          97% {
            opacity:0.562
          }
          97.5% {
            opacity:0.588
          }
          98% {
            opacity:0.613
          }
          98.5% {
            opacity:0.637
          }
          99% {
            opacity:0.661
          }
          99.5% {
            opacity:0.685
          }
          100% {
            opacity:0.707
          }
        }
        @keyframes motor-in-1 {
          0% {
            opacity:0
          }
          0.5% {
            opacity:0
          }
          1% {
            opacity:0
          }
          1.5% {
            opacity:0
          }
          2% {
            opacity:0
          }
          2.5% {
            opacity:0
          }
          3% {
            opacity:0
          }
          3.5% {
            opacity:0
          }
          4% {
            opacity:0
          }
          4.5% {
            opacity:0
          }
          5% {
            opacity:0
          }
          5.5% {
            opacity:0
          }
          6% {
            opacity:0
          }
          6.5% {
            opacity:0
          }
          7% {
            opacity:0
          }
          7.5% {
            opacity:0
          }
          8% {
            opacity:0
          }
          8.5% {
            opacity:0
          }
          9% {
            opacity:0
          }
          9.5% {
            opacity:0
          }
          10% {
            opacity:0
          }
          10.5% {
            opacity:0
          }
          11% {
            opacity:0
          }
          11.5% {
            opacity:0
          }
          12% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          13% {
            opacity:0
          }
          13.5% {
            opacity:0
          }
          14% {
            opacity:0
          }
          14.5% {
            opacity:0
          }
          15% {
            opacity:0
          }
          15.5% {
            opacity:0
          }
          16% {
            opacity:0
          }
          16.5% {
            opacity:0
          }
          17% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          18% {
            opacity:0
          }
          18.5% {
            opacity:0
          }
          19% {
            opacity:0
          }
          19.5% {
            opacity:0
          }
          20% {
            opacity:0
          }
          20.5% {
            opacity:0
          }
          21% {
            opacity:0
          }
          21.5% {
            opacity:0
          }
          22% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          23% {
            opacity:0
          }
          23.5% {
            opacity:0
          }
          24% {
            opacity:0
          }
          24.5% {
            opacity:0
          }
          25% {
            opacity:0
          }
          25.5% {
            opacity:0
          }
          26% {
            opacity:0
          }
          26.5% {
            opacity:0
          }
          27% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          28% {
            opacity:0
          }
          28.5% {
            opacity:0
          }
          29% {
            opacity:0
          }
          29.5% {
            opacity:0
          }
          30% {
            opacity:0
          }
          30.5% {
            opacity:0
          }
          31% {
            opacity:0
          }
          31.5% {
            opacity:0
          }
          32% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          33% {
            opacity:0
          }
          33.5% {
            opacity:0
          }
          34% {
            opacity:0
          }
          34.5% {
            opacity:0
          }
          35% {
            opacity:0
          }
          35.5% {
            opacity:0
          }
          36% {
            opacity:0
          }
          36.5% {
            opacity:0
          }
          37% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          38% {
            opacity:0.031
          }
          38.5% {
            opacity:0.063
          }
          39% {
            opacity:0.094
          }
          39.5% {
            opacity:0.125
          }
          40% {
            opacity:0.156
          }
          40.5% {
            opacity:0.187
          }
          41% {
            opacity:0.218
          }
          41.5% {
            opacity:0.249
          }
          42% {
            opacity:0.279
          }
          42.5% {
            opacity:0.309
          }
          43% {
            opacity:0.339
          }
          43.5% {
            opacity:0.368
          }
          44% {
            opacity:0.397
          }
          44.5% {
            opacity:0.426
          }
          45% {
            opacity:0.454
          }
          45.5% {
            opacity:0.482
          }
          46% {
            opacity:0.509
          }
          46.5% {
            opacity:0.536
          }
          47% {
            opacity:0.562
          }
          47.5% {
            opacity:0.588
          }
          48% {
            opacity:0.613
          }
          48.5% {
            opacity:0.637
          }
          49% {
            opacity:0.661
          }
          49.5% {
            opacity:0.685
          }
          50% {
            opacity:0.707
          }
          50.5% {
            opacity:0.729
          }
          51% {
            opacity:0.75
          }
          51.5% {
            opacity:0.771
          }
          52% {
            opacity:0.79
          }
          52.5% {
            opacity:0.809
          }
          53% {
            opacity:0.827
          }
          53.5% {
            opacity:0.844
          }
          54% {
            opacity:0.861
          }
          54.5% {
            opacity:0.876
          }
          55% {
            opacity:0.891
          }
          55.5% {
            opacity:0.905
          }
          56% {
            opacity:0.918
          }
          56.5% {
            opacity:0.93
          }
          57% {
            opacity:0.941
          }
          57.5% {
            opacity:0.951
          }
          58% {
            opacity:0.96
          }
          58.5% {
            opacity:0.969
          }
          59% {
            opacity:0.976
          }
          59.5% {
            opacity:0.982
          }
          60% {
            opacity:0.988
          }
          60.5% {
            opacity:0.992
          }
          61% {
            opacity:0.996
          }
          61.5% {
            opacity:0.998
          }
          62% {
            opacity:1.0
          }
          62.5% {
            opacity:1
          }
          63% {
            opacity:1.0
          }
          63.5% {
            opacity:0.998
          }
          64% {
            opacity:0.996
          }
          64.5% {
            opacity:0.992
          }
          65% {
            opacity:0.988
          }
          65.5% {
            opacity:0.982
          }
          66% {
            opacity:0.976
          }
          66.5% {
            opacity:0.969
          }
          67% {
            opacity:0.96
          }
          67.5% {
            opacity:0.951
          }
          68% {
            opacity:0.941
          }
          68.5% {
            opacity:0.93
          }
          69% {
            opacity:0.918
          }
          69.5% {
            opacity:0.905
          }
          70% {
            opacity:0.891
          }
          70.5% {
            opacity:0.876
          }
          71% {
            opacity:0.861
          }
          71.5% {
            opacity:0.844
          }
          72% {
            opacity:0.827
          }
          72.5% {
            opacity:0.809
          }
          73% {
            opacity:0.79
          }
          73.5% {
            opacity:0.771
          }
          74% {
            opacity:0.75
          }
          74.5% {
            opacity:0.729
          }
          75% {
            opacity:0.707
          }
          75.5% {
            opacity:0.685
          }
          76% {
            opacity:0.661
          }
          76.5% {
            opacity:0.637
          }
          77% {
            opacity:0.613
          }
          77.5% {
            opacity:0.588
          }
          78% {
            opacity:0.562
          }
          78.5% {
            opacity:0.536
          }
          79% {
            opacity:0.509
          }
          79.5% {
            opacity:0.482
          }
          80% {
            opacity:0.454
          }
          80.5% {
            opacity:0.426
          }
          81% {
            opacity:0.397
          }
          81.5% {
            opacity:0.368
          }
          82% {
            opacity:0.339
          }
          82.5% {
            opacity:0.309
          }
          83% {
            opacity:0.279
          }
          83.5% {
            opacity:0.249
          }
          84% {
            opacity:0.218
          }
          84.5% {
            opacity:0.187
          }
          85% {
            opacity:0.156
          }
          85.5% {
            opacity:0.125
          }
          86% {
            opacity:0.094
          }
          86.5% {
            opacity:0.063
          }
          87% {
            opacity:0.031
          }
          87.5% {
            opacity:1.837e-16
          }
          88% {
            opacity:0
          }
          88.5% {
            opacity:0
          }
          89% {
            opacity:0
          }
          89.5% {
            opacity:0
          }
          90% {
            opacity:0
          }
          90.5% {
            opacity:0
          }
          91% {
            opacity:0
          }
          91.5% {
            opacity:0
          }
          92% {
            opacity:0
          }
          92.5% {
            opacity:0
          }
          93% {
            opacity:0
          }
          93.5% {
            opacity:0
          }
          94% {
            opacity:0
          }
          94.5% {
            opacity:0
          }
          95% {
            opacity:0
          }
          95.5% {
            opacity:0
          }
          96% {
            opacity:0
          }
          96.5% {
            opacity:0
          }
          97% {
            opacity:0
          }
          97.5% {
            opacity:0
          }
          98% {
            opacity:0
          }
          98.5% {
            opacity:0
          }
          99% {
            opacity:0
          }
          99.5% {
            opacity:0
          }
          100% {
            opacity:0
          }
        }
        .out-2 {
          opacity:0.707;
          animation:motor-out-2 10s linear infinite
        }
        .in-2 {
          opacity:0;
          animation:motor-in-2 10s linear infinite
        }
        @keyframes motor-out-2 {
          0% {
            opacity:6.123e-17
          }
          0.5% {
            opacity:0.031
          }
          1% {
            opacity:0.063
          }
          1.5% {
            opacity:0.094
          }
          2% {
            opacity:0.125
          }
          2.5% {
            opacity:0.156
          }
          3% {
            opacity:0.187
          }
          3.5% {
            opacity:0.218
          }
          4% {
            opacity:0.249
          }
          4.5% {
            opacity:0.279
          }
          5% {
            opacity:0.309
          }
          5.5% {
            opacity:0.339
          }
          6% {
            opacity:0.368
          }
          6.5% {
            opacity:0.397
          }
          7% {
            opacity:0.426
          }
          7.5% {
            opacity:0.454
          }
          8% {
            opacity:0.482
          }
          8.5% {
            opacity:0.509
          }
          9% {
            opacity:0.536
          }
          9.5% {
            opacity:0.562
          }
          10% {
            opacity:0.588
          }
          10.5% {
            opacity:0.613
          }
          11% {
            opacity:0.637
          }
          11.5% {
            opacity:0.661
          }
          12% {
            opacity:0.685
          }
          12.5% {
            opacity:0.707
          }
          13% {
            opacity:0.729
          }
          13.5% {
            opacity:0.75
          }
          14% {
            opacity:0.771
          }
          14.5% {
            opacity:0.79
          }
          15% {
            opacity:0.809
          }
          15.5% {
            opacity:0.827
          }
          16% {
            opacity:0.844
          }
          16.5% {
            opacity:0.861
          }
          17% {
            opacity:0.876
          }
          17.5% {
            opacity:0.891
          }
          18% {
            opacity:0.905
          }
          18.5% {
            opacity:0.918
          }
          19% {
            opacity:0.93
          }
          19.5% {
            opacity:0.941
          }
          20% {
            opacity:0.951
          }
          20.5% {
            opacity:0.96
          }
          21% {
            opacity:0.969
          }
          21.5% {
            opacity:0.976
          }
          22% {
            opacity:0.982
          }
          22.5% {
            opacity:0.988
          }
          23% {
            opacity:0.992
          }
          23.5% {
            opacity:0.996
          }
          24% {
            opacity:0.998
          }
          24.5% {
            opacity:1.0
          }
          25% {
            opacity:1
          }
          25.5% {
            opacity:1.0
          }
          26% {
            opacity:0.998
          }
          26.5% {
            opacity:0.996
          }
          27% {
            opacity:0.992
          }
          27.5% {
            opacity:0.988
          }
          28% {
            opacity:0.982
          }
          28.5% {
            opacity:0.976
          }
          29% {
            opacity:0.969
          }
          29.5% {
            opacity:0.96
          }
          30% {
            opacity:0.951
          }
          30.5% {
            opacity:0.941
          }
          31% {
            opacity:0.93
          }
          31.5% {
            opacity:0.918
          }
          32% {
            opacity:0.905
          }
          32.5% {
            opacity:0.891
          }
          33% {
            opacity:0.876
          }
          33.5% {
            opacity:0.861
          }
          34% {
            opacity:0.844
          }
          34.5% {
            opacity:0.827
          }
          35% {
            opacity:0.809
          }
          35.5% {
            opacity:0.79
          }
          36% {
            opacity:0.771
          }
          36.5% {
            opacity:0.75
          }
          37% {
            opacity:0.729
          }
          37.5% {
            opacity:0.707
          }
          38% {
            opacity:0.685
          }
          38.5% {
            opacity:0.661
          }
          39% {
            opacity:0.637
          }
          39.5% {
            opacity:0.613
          }
          40% {
            opacity:0.588
          }
          40.5% {
            opacity:0.562
          }
          41% {
            opacity:0.536
          }
          41.5% {
            opacity:0.509
          }
          42% {
            opacity:0.482
          }
          42.5% {
            opacity:0.454
          }
          43% {
            opacity:0.426
          }
          43.5% {
            opacity:0.397
          }
          44% {
            opacity:0.368
          }
          44.5% {
            opacity:0.339
          }
          45% {
            opacity:0.309
          }
          45.5% {
            opacity:0.279
          }
          46% {
            opacity:0.249
          }
          46.5% {
            opacity:0.218
          }
          47% {
            opacity:0.187
          }
          47.5% {
            opacity:0.156
          }
          48% {
            opacity:0.125
          }
          48.5% {
            opacity:0.094
          }
          49% {
            opacity:0.063
          }
          49.5% {
            opacity:0.031
          }
          50% {
            opacity:6.123e-17
          }
          50.5% {
            opacity:0
          }
          51% {
            opacity:0
          }
          51.5% {
            opacity:0
          }
          52% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          53% {
            opacity:0
          }
          53.5% {
            opacity:0
          }
          54% {
            opacity:0
          }
          54.5% {
            opacity:0
          }
          55% {
            opacity:0
          }
          55.5% {
            opacity:0
          }
          56% {
            opacity:0
          }
          56.5% {
            opacity:0
          }
          57% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          58% {
            opacity:0
          }
          58.5% {
            opacity:0
          }
          59% {
            opacity:0
          }
          59.5% {
            opacity:0
          }
          60% {
            opacity:0
          }
          60.5% {
            opacity:0
          }
          61% {
            opacity:0
          }
          61.5% {
            opacity:0
          }
          62% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          63% {
            opacity:0
          }
          63.5% {
            opacity:0
          }
          64% {
            opacity:0
          }
          64.5% {
            opacity:0
          }
          65% {
            opacity:0
          }
          65.5% {
            opacity:0
          }
          66% {
            opacity:0
          }
          66.5% {
            opacity:0
          }
          67% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          68% {
            opacity:0
          }
          68.5% {
            opacity:0
          }
          69% {
            opacity:0
          }
          69.5% {
            opacity:0
          }
          70% {
            opacity:0
          }
          70.5% {
            opacity:0
          }
          71% {
            opacity:0
          }
          71.5% {
            opacity:0
          }
          72% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          73% {
            opacity:0
          }
          73.5% {
            opacity:0
          }
          74% {
            opacity:0
          }
          74.5% {
            opacity:0
          }
          75% {
            opacity:0
          }
          75.5% {
            opacity:0
          }
          76% {
            opacity:0
          }
          76.5% {
            opacity:0
          }
          77% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          78% {
            opacity:0
          }
          78.5% {
            opacity:0
          }
          79% {
            opacity:0
          }
          79.5% {
            opacity:0
          }
          80% {
            opacity:0
          }
          80.5% {
            opacity:0
          }
          81% {
            opacity:0
          }
          81.5% {
            opacity:0
          }
          82% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          83% {
            opacity:0
          }
          83.5% {
            opacity:0
          }
          84% {
            opacity:0
          }
          84.5% {
            opacity:0
          }
          85% {
            opacity:0
          }
          85.5% {
            opacity:0
          }
          86% {
            opacity:0
          }
          86.5% {
            opacity:0
          }
          87% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
          88% {
            opacity:0
          }
          88.5% {
            opacity:0
          }
          89% {
            opacity:0
          }
          89.5% {
            opacity:0
          }
          90% {
            opacity:0
          }
          90.5% {
            opacity:0
          }
          91% {
            opacity:0
          }
          91.5% {
            opacity:0
          }
          92% {
            opacity:0
          }
          92.5% {
            opacity:0
          }
          93% {
            opacity:0
          }
          93.5% {
            opacity:0
          }
          94% {
            opacity:0
          }
          94.5% {
            opacity:0
          }
          95% {
            opacity:0
          }
          95.5% {
            opacity:0
          }
          96% {
            opacity:0
          }
          96.5% {
            opacity:0
          }
          97% {
            opacity:0
          }
          97.5% {
            opacity:0
          }
          98% {
            opacity:0
          }
          98.5% {
            opacity:0
          }
          99% {
            opacity:0
          }
          99.5% {
            opacity:0
          }
          100% {
            opacity:0
          }
        }
        @keyframes motor-in-2 {
          0% {
            opacity:0
          }
          0.5% {
            opacity:0
          }
          1% {
            opacity:0
          }
          1.5% {
            opacity:0
          }
          2% {
            opacity:0
          }
          2.5% {
            opacity:0
          }
          3% {
            opacity:0
          }
          3.5% {
            opacity:0
          }
          4% {
            opacity:0
          }
          4.5% {
            opacity:0
          }
          5% {
            opacity:0
          }
          5.5% {
            opacity:0
          }
          6% {
            opacity:0
          }
          6.5% {
            opacity:0
          }
          7% {
            opacity:0
          }
          7.5% {
            opacity:0
          }
          8% {
            opacity:0
          }
          8.5% {
            opacity:0
          }
          9% {
            opacity:0
          }
          9.5% {
            opacity:0
          }
          10% {
            opacity:0
          }
          10.5% {
            opacity:0
          }
          11% {
            opacity:0
          }
          11.5% {
            opacity:0
          }
          12% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          13% {
            opacity:0
          }
          13.5% {
            opacity:0
          }
          14% {
            opacity:0
          }
          14.5% {
            opacity:0
          }
          15% {
            opacity:0
          }
          15.5% {
            opacity:0
          }
          16% {
            opacity:0
          }
          16.5% {
            opacity:0
          }
          17% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          18% {
            opacity:0
          }
          18.5% {
            opacity:0
          }
          19% {
            opacity:0
          }
          19.5% {
            opacity:0
          }
          20% {
            opacity:0
          }
          20.5% {
            opacity:0
          }
          21% {
            opacity:0
          }
          21.5% {
            opacity:0
          }
          22% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          23% {
            opacity:0
          }
          23.5% {
            opacity:0
          }
          24% {
            opacity:0
          }
          24.5% {
            opacity:0
          }
          25% {
            opacity:0
          }
          25.5% {
            opacity:0
          }
          26% {
            opacity:0
          }
          26.5% {
            opacity:0
          }
          27% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          28% {
            opacity:0
          }
          28.5% {
            opacity:0
          }
          29% {
            opacity:0
          }
          29.5% {
            opacity:0
          }
          30% {
            opacity:0
          }
          30.5% {
            opacity:0
          }
          31% {
            opacity:0
          }
          31.5% {
            opacity:0
          }
          32% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          33% {
            opacity:0
          }
          33.5% {
            opacity:0
          }
          34% {
            opacity:0
          }
          34.5% {
            opacity:0
          }
          35% {
            opacity:0
          }
          35.5% {
            opacity:0
          }
          36% {
            opacity:0
          }
          36.5% {
            opacity:0
          }
          37% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          38% {
            opacity:0
          }
          38.5% {
            opacity:0
          }
          39% {
            opacity:0
          }
          39.5% {
            opacity:0
          }
          40% {
            opacity:0
          }
          40.5% {
            opacity:0
          }
          41% {
            opacity:0
          }
          41.5% {
            opacity:0
          }
          42% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          43% {
            opacity:0
          }
          43.5% {
            opacity:0
          }
          44% {
            opacity:0
          }
          44.5% {
            opacity:0
          }
          45% {
            opacity:0
          }
          45.5% {
            opacity:0
          }
          46% {
            opacity:0
          }
          46.5% {
            opacity:0
          }
          47% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          48% {
            opacity:0
          }
          48.5% {
            opacity:0
          }
          49% {
            opacity:0
          }
          49.5% {
            opacity:0
          }
          50% {
            opacity:0
          }
          50.5% {
            opacity:0.031
          }
          51% {
            opacity:0.063
          }
          51.5% {
            opacity:0.094
          }
          52% {
            opacity:0.125
          }
          52.5% {
            opacity:0.156
          }
          53% {
            opacity:0.187
          }
          53.5% {
            opacity:0.218
          }
          54% {
            opacity:0.249
          }
          54.5% {
            opacity:0.279
          }
          55% {
            opacity:0.309
          }
          55.5% {
            opacity:0.339
          }
          56% {
            opacity:0.368
          }
          56.5% {
            opacity:0.397
          }
          57% {
            opacity:0.426
          }
          57.5% {
            opacity:0.454
          }
          58% {
            opacity:0.482
          }
          58.5% {
            opacity:0.509
          }
          59% {
            opacity:0.536
          }
          59.5% {
            opacity:0.562
          }
          60% {
            opacity:0.588
          }
          60.5% {
            opacity:0.613
          }
          61% {
            opacity:0.637
          }
          61.5% {
            opacity:0.661
          }
          62% {
            opacity:0.685
          }
          62.5% {
            opacity:0.707
          }
          63% {
            opacity:0.729
          }
          63.5% {
            opacity:0.75
          }
          64% {
            opacity:0.771
          }
          64.5% {
            opacity:0.79
          }
          65% {
            opacity:0.809
          }
          65.5% {
            opacity:0.827
          }
          66% {
            opacity:0.844
          }
          66.5% {
            opacity:0.861
          }
          67% {
            opacity:0.876
          }
          67.5% {
            opacity:0.891
          }
          68% {
            opacity:0.905
          }
          68.5% {
            opacity:0.918
          }
          69% {
            opacity:0.93
          }
          69.5% {
            opacity:0.941
          }
          70% {
            opacity:0.951
          }
          70.5% {
            opacity:0.96
          }
          71% {
            opacity:0.969
          }
          71.5% {
            opacity:0.976
          }
          72% {
            opacity:0.982
          }
          72.5% {
            opacity:0.988
          }
          73% {
            opacity:0.992
          }
          73.5% {
            opacity:0.996
          }
          74% {
            opacity:0.998
          }
          74.5% {
            opacity:1.0
          }
          75% {
            opacity:1
          }
          75.5% {
            opacity:1.0
          }
          76% {
            opacity:0.998
          }
          76.5% {
            opacity:0.996
          }
          77% {
            opacity:0.992
          }
          77.5% {
            opacity:0.988
          }
          78% {
            opacity:0.982
          }
          78.5% {
            opacity:0.976
          }
          79% {
            opacity:0.969
          }
          79.5% {
            opacity:0.96
          }
          80% {
            opacity:0.951
          }
          80.5% {
            opacity:0.941
          }
          81% {
            opacity:0.93
          }
          81.5% {
            opacity:0.918
          }
          82% {
            opacity:0.905
          }
          82.5% {
            opacity:0.891
          }
          83% {
            opacity:0.876
          }
          83.5% {
            opacity:0.861
          }
          84% {
            opacity:0.844
          }
          84.5% {
            opacity:0.827
          }
          85% {
            opacity:0.809
          }
          85.5% {
            opacity:0.79
          }
          86% {
            opacity:0.771
          }
          86.5% {
            opacity:0.75
          }
          87% {
            opacity:0.729
          }
          87.5% {
            opacity:0.707
          }
          88% {
            opacity:0.685
          }
          88.5% {
            opacity:0.661
          }
          89% {
            opacity:0.637
          }
          89.5% {
            opacity:0.613
          }
          90% {
            opacity:0.588
          }
          90.5% {
            opacity:0.562
          }
          91% {
            opacity:0.536
          }
          91.5% {
            opacity:0.509
          }
          92% {
            opacity:0.482
          }
          92.5% {
            opacity:0.454
          }
          93% {
            opacity:0.426
          }
          93.5% {
            opacity:0.397
          }
          94% {
            opacity:0.368
          }
          94.5% {
            opacity:0.339
          }
          95% {
            opacity:0.309
          }
          95.5% {
            opacity:0.279
          }
          96% {
            opacity:0.249
          }
          96.5% {
            opacity:0.218
          }
          97% {
            opacity:0.187
          }
          97.5% {
            opacity:0.156
          }
          98% {
            opacity:0.125
          }
          98.5% {
            opacity:0.094
          }
          99% {
            opacity:0.063
          }
          99.5% {
            opacity:0.031
          }
          100% {
            opacity:1.837e-16
          }
        }
        .out-3 {
          opacity:6.123e-17;
          animation:motor-out-3 10s linear infinite
        }
        .in-3 {
          opacity:0;
          animation:motor-in-3 10s linear infinite
        }
        @keyframes motor-out-3 {
          0% {
            opacity:0
          }
          0.5% {
            opacity:0
          }
          1% {
            opacity:0
          }
          1.5% {
            opacity:0
          }
          2% {
            opacity:0
          }
          2.5% {
            opacity:0
          }
          3% {
            opacity:0
          }
          3.5% {
            opacity:0
          }
          4% {
            opacity:0
          }
          4.5% {
            opacity:0
          }
          5% {
            opacity:0
          }
          5.5% {
            opacity:0
          }
          6% {
            opacity:0
          }
          6.5% {
            opacity:0
          }
          7% {
            opacity:0
          }
          7.5% {
            opacity:0
          }
          8% {
            opacity:0
          }
          8.5% {
            opacity:0
          }
          9% {
            opacity:0
          }
          9.5% {
            opacity:0
          }
          10% {
            opacity:0
          }
          10.5% {
            opacity:0
          }
          11% {
            opacity:0
          }
          11.5% {
            opacity:0
          }
          12% {
            opacity:0
          }
          12.5% {
            opacity:6.123e-17
          }
          13% {
            opacity:0.031
          }
          13.5% {
            opacity:0.063
          }
          14% {
            opacity:0.094
          }
          14.5% {
            opacity:0.125
          }
          15% {
            opacity:0.156
          }
          15.5% {
            opacity:0.187
          }
          16% {
            opacity:0.218
          }
          16.5% {
            opacity:0.249
          }
          17% {
            opacity:0.279
          }
          17.5% {
            opacity:0.309
          }
          18% {
            opacity:0.339
          }
          18.5% {
            opacity:0.368
          }
          19% {
            opacity:0.397
          }
          19.5% {
            opacity:0.426
          }
          20% {
            opacity:0.454
          }
          20.5% {
            opacity:0.482
          }
          21% {
            opacity:0.509
          }
          21.5% {
            opacity:0.536
          }
          22% {
            opacity:0.562
          }
          22.5% {
            opacity:0.588
          }
          23% {
            opacity:0.613
          }
          23.5% {
            opacity:0.637
          }
          24% {
            opacity:0.661
          }
          24.5% {
            opacity:0.685
          }
          25% {
            opacity:0.707
          }
          25.5% {
            opacity:0.729
          }
          26% {
            opacity:0.75
          }
          26.5% {
            opacity:0.771
          }
          27% {
            opacity:0.79
          }
          27.5% {
            opacity:0.809
          }
          28% {
            opacity:0.827
          }
          28.5% {
            opacity:0.844
          }
          29% {
            opacity:0.861
          }
          29.5% {
            opacity:0.876
          }
          30% {
            opacity:0.891
          }
          30.5% {
            opacity:0.905
          }
          31% {
            opacity:0.918
          }
          31.5% {
            opacity:0.93
          }
          32% {
            opacity:0.941
          }
          32.5% {
            opacity:0.951
          }
          33% {
            opacity:0.96
          }
          33.5% {
            opacity:0.969
          }
          34% {
            opacity:0.976
          }
          34.5% {
            opacity:0.982
          }
          35% {
            opacity:0.988
          }
          35.5% {
            opacity:0.992
          }
          36% {
            opacity:0.996
          }
          36.5% {
            opacity:0.998
          }
          37% {
            opacity:1.0
          }
          37.5% {
            opacity:1
          }
          38% {
            opacity:1.0
          }
          38.5% {
            opacity:0.998
          }
          39% {
            opacity:0.996
          }
          39.5% {
            opacity:0.992
          }
          40% {
            opacity:0.988
          }
          40.5% {
            opacity:0.982
          }
          41% {
            opacity:0.976
          }
          41.5% {
            opacity:0.969
          }
          42% {
            opacity:0.96
          }
          42.5% {
            opacity:0.951
          }
          43% {
            opacity:0.941
          }
          43.5% {
            opacity:0.93
          }
          44% {
            opacity:0.918
          }
          44.5% {
            opacity:0.905
          }
          45% {
            opacity:0.891
          }
          45.5% {
            opacity:0.876
          }
          46% {
            opacity:0.861
          }
          46.5% {
            opacity:0.844
          }
          47% {
            opacity:0.827
          }
          47.5% {
            opacity:0.809
          }
          48% {
            opacity:0.79
          }
          48.5% {
            opacity:0.771
          }
          49% {
            opacity:0.75
          }
          49.5% {
            opacity:0.729
          }
          50% {
            opacity:0.707
          }
          50.5% {
            opacity:0.685
          }
          51% {
            opacity:0.661
          }
          51.5% {
            opacity:0.637
          }
          52% {
            opacity:0.613
          }
          52.5% {
            opacity:0.588
          }
          53% {
            opacity:0.562
          }
          53.5% {
            opacity:0.536
          }
          54% {
            opacity:0.509
          }
          54.5% {
            opacity:0.482
          }
          55% {
            opacity:0.454
          }
          55.5% {
            opacity:0.426
          }
          56% {
            opacity:0.397
          }
          56.5% {
            opacity:0.368
          }
          57% {
            opacity:0.339
          }
          57.5% {
            opacity:0.309
          }
          58% {
            opacity:0.279
          }
          58.5% {
            opacity:0.249
          }
          59% {
            opacity:0.218
          }
          59.5% {
            opacity:0.187
          }
          60% {
            opacity:0.156
          }
          60.5% {
            opacity:0.125
          }
          61% {
            opacity:0.094
          }
          61.5% {
            opacity:0.063
          }
          62% {
            opacity:0.031
          }
          62.5% {
            opacity:0
          }
          63% {
            opacity:0
          }
          63.5% {
            opacity:0
          }
          64% {
            opacity:0
          }
          64.5% {
            opacity:0
          }
          65% {
            opacity:0
          }
          65.5% {
            opacity:0
          }
          66% {
            opacity:0
          }
          66.5% {
            opacity:0
          }
          67% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          68% {
            opacity:0
          }
          68.5% {
            opacity:0
          }
          69% {
            opacity:0
          }
          69.5% {
            opacity:0
          }
          70% {
            opacity:0
          }
          70.5% {
            opacity:0
          }
          71% {
            opacity:0
          }
          71.5% {
            opacity:0
          }
          72% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          73% {
            opacity:0
          }
          73.5% {
            opacity:0
          }
          74% {
            opacity:0
          }
          74.5% {
            opacity:0
          }
          75% {
            opacity:0
          }
          75.5% {
            opacity:0
          }
          76% {
            opacity:0
          }
          76.5% {
            opacity:0
          }
          77% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          78% {
            opacity:0
          }
          78.5% {
            opacity:0
          }
          79% {
            opacity:0
          }
          79.5% {
            opacity:0
          }
          80% {
            opacity:0
          }
          80.5% {
            opacity:0
          }
          81% {
            opacity:0
          }
          81.5% {
            opacity:0
          }
          82% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          83% {
            opacity:0
          }
          83.5% {
            opacity:0
          }
          84% {
            opacity:0
          }
          84.5% {
            opacity:0
          }
          85% {
            opacity:0
          }
          85.5% {
            opacity:0
          }
          86% {
            opacity:0
          }
          86.5% {
            opacity:0
          }
          87% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
          88% {
            opacity:0
          }
          88.5% {
            opacity:0
          }
          89% {
            opacity:0
          }
          89.5% {
            opacity:0
          }
          90% {
            opacity:0
          }
          90.5% {
            opacity:0
          }
          91% {
            opacity:0
          }
          91.5% {
            opacity:0
          }
          92% {
            opacity:0
          }
          92.5% {
            opacity:0
          }
          93% {
            opacity:0
          }
          93.5% {
            opacity:0
          }
          94% {
            opacity:0
          }
          94.5% {
            opacity:0
          }
          95% {
            opacity:0
          }
          95.5% {
            opacity:0
          }
          96% {
            opacity:0
          }
          96.5% {
            opacity:0
          }
          97% {
            opacity:0
          }
          97.5% {
            opacity:0
          }
          98% {
            opacity:0
          }
          98.5% {
            opacity:0
          }
          99% {
            opacity:0
          }
          99.5% {
            opacity:0
          }
          100% {
            opacity:0
          }
        }
        @keyframes motor-in-3 {
          0% {
            opacity:0.707
          }
          0.5% {
            opacity:0.685
          }
          1% {
            opacity:0.661
          }
          1.5% {
            opacity:0.637
          }
          2% {
            opacity:0.613
          }
          2.5% {
            opacity:0.588
          }
          3% {
            opacity:0.562
          }
          3.5% {
            opacity:0.536
          }
          4% {
            opacity:0.509
          }
          4.5% {
            opacity:0.482
          }
          5% {
            opacity:0.454
          }
          5.5% {
            opacity:0.426
          }
          6% {
            opacity:0.397
          }
          6.5% {
            opacity:0.368
          }
          7% {
            opacity:0.339
          }
          7.5% {
            opacity:0.309
          }
          8% {
            opacity:0.279
          }
          8.5% {
            opacity:0.249
          }
          9% {
            opacity:0.218
          }
          9.5% {
            opacity:0.187
          }
          10% {
            opacity:0.156
          }
          10.5% {
            opacity:0.125
          }
          11% {
            opacity:0.094
          }
          11.5% {
            opacity:0.063
          }
          12% {
            opacity:0.031
          }
          12.5% {
            opacity:0
          }
          13% {
            opacity:0
          }
          13.5% {
            opacity:0
          }
          14% {
            opacity:0
          }
          14.5% {
            opacity:0
          }
          15% {
            opacity:0
          }
          15.5% {
            opacity:0
          }
          16% {
            opacity:0
          }
          16.5% {
            opacity:0
          }
          17% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          18% {
            opacity:0
          }
          18.5% {
            opacity:0
          }
          19% {
            opacity:0
          }
          19.5% {
            opacity:0
          }
          20% {
            opacity:0
          }
          20.5% {
            opacity:0
          }
          21% {
            opacity:0
          }
          21.5% {
            opacity:0
          }
          22% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          23% {
            opacity:0
          }
          23.5% {
            opacity:0
          }
          24% {
            opacity:0
          }
          24.5% {
            opacity:0
          }
          25% {
            opacity:0
          }
          25.5% {
            opacity:0
          }
          26% {
            opacity:0
          }
          26.5% {
            opacity:0
          }
          27% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          28% {
            opacity:0
          }
          28.5% {
            opacity:0
          }
          29% {
            opacity:0
          }
          29.5% {
            opacity:0
          }
          30% {
            opacity:0
          }
          30.5% {
            opacity:0
          }
          31% {
            opacity:0
          }
          31.5% {
            opacity:0
          }
          32% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          33% {
            opacity:0
          }
          33.5% {
            opacity:0
          }
          34% {
            opacity:0
          }
          34.5% {
            opacity:0
          }
          35% {
            opacity:0
          }
          35.5% {
            opacity:0
          }
          36% {
            opacity:0
          }
          36.5% {
            opacity:0
          }
          37% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          38% {
            opacity:0
          }
          38.5% {
            opacity:0
          }
          39% {
            opacity:0
          }
          39.5% {
            opacity:0
          }
          40% {
            opacity:0
          }
          40.5% {
            opacity:0
          }
          41% {
            opacity:0
          }
          41.5% {
            opacity:0
          }
          42% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          43% {
            opacity:0
          }
          43.5% {
            opacity:0
          }
          44% {
            opacity:0
          }
          44.5% {
            opacity:0
          }
          45% {
            opacity:0
          }
          45.5% {
            opacity:0
          }
          46% {
            opacity:0
          }
          46.5% {
            opacity:0
          }
          47% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          48% {
            opacity:0
          }
          48.5% {
            opacity:0
          }
          49% {
            opacity:0
          }
          49.5% {
            opacity:0
          }
          50% {
            opacity:0
          }
          50.5% {
            opacity:0
          }
          51% {
            opacity:0
          }
          51.5% {
            opacity:0
          }
          52% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          53% {
            opacity:0
          }
          53.5% {
            opacity:0
          }
          54% {
            opacity:0
          }
          54.5% {
            opacity:0
          }
          55% {
            opacity:0
          }
          55.5% {
            opacity:0
          }
          56% {
            opacity:0
          }
          56.5% {
            opacity:0
          }
          57% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          58% {
            opacity:0
          }
          58.5% {
            opacity:0
          }
          59% {
            opacity:0
          }
          59.5% {
            opacity:0
          }
          60% {
            opacity:0
          }
          60.5% {
            opacity:0
          }
          61% {
            opacity:0
          }
          61.5% {
            opacity:0
          }
          62% {
            opacity:0
          }
          62.5% {
            opacity:3.829e-16
          }
          63% {
            opacity:0.031
          }
          63.5% {
            opacity:0.063
          }
          64% {
            opacity:0.094
          }
          64.5% {
            opacity:0.125
          }
          65% {
            opacity:0.156
          }
          65.5% {
            opacity:0.187
          }
          66% {
            opacity:0.218
          }
          66.5% {
            opacity:0.249
          }
          67% {
            opacity:0.279
          }
          67.5% {
            opacity:0.309
          }
          68% {
            opacity:0.339
          }
          68.5% {
            opacity:0.368
          }
          69% {
            opacity:0.397
          }
          69.5% {
            opacity:0.426
          }
          70% {
            opacity:0.454
          }
          70.5% {
            opacity:0.482
          }
          71% {
            opacity:0.509
          }
          71.5% {
            opacity:0.536
          }
          72% {
            opacity:0.562
          }
          72.5% {
            opacity:0.588
          }
          73% {
            opacity:0.613
          }
          73.5% {
            opacity:0.637
          }
          74% {
            opacity:0.661
          }
          74.5% {
            opacity:0.685
          }
          75% {
            opacity:0.707
          }
          75.5% {
            opacity:0.729
          }
          76% {
            opacity:0.75
          }
          76.5% {
            opacity:0.771
          }
          77% {
            opacity:0.79
          }
          77.5% {
            opacity:0.809
          }
          78% {
            opacity:0.827
          }
          78.5% {
            opacity:0.844
          }
          79% {
            opacity:0.861
          }
          79.5% {
            opacity:0.876
          }
          80% {
            opacity:0.891
          }
          80.5% {
            opacity:0.905
          }
          81% {
            opacity:0.918
          }
          81.5% {
            opacity:0.93
          }
          82% {
            opacity:0.941
          }
          82.5% {
            opacity:0.951
          }
          83% {
            opacity:0.96
          }
          83.5% {
            opacity:0.969
          }
          84% {
            opacity:0.976
          }
          84.5% {
            opacity:0.982
          }
          85% {
            opacity:0.988
          }
          85.5% {
            opacity:0.992
          }
          86% {
            opacity:0.996
          }
          86.5% {
            opacity:0.998
          }
          87% {
            opacity:1.0
          }
          87.5% {
            opacity:1
          }
          88% {
            opacity:1.0
          }
          88.5% {
            opacity:0.998
          }
          89% {
            opacity:0.996
          }
          89.5% {
            opacity:0.992
          }
          90% {
            opacity:0.988
          }
          90.5% {
            opacity:0.982
          }
          91% {
            opacity:0.976
          }
          91.5% {
            opacity:0.969
          }
          92% {
            opacity:0.96
          }
          92.5% {
            opacity:0.951
          }
          93% {
            opacity:0.941
          }
          93.5% {
            opacity:0.93
          }
          94% {
            opacity:0.918
          }
          94.5% {
            opacity:0.905
          }
          95% {
            opacity:0.891
          }
          95.5% {
            opacity:0.876
          }
          96% {
            opacity:0.861
          }
          96.5% {
            opacity:0.844
          }
          97% {
            opacity:0.827
          }
          97.5% {
            opacity:0.809
          }
          98% {
            opacity:0.79
          }
          98.5% {
            opacity:0.771
          }
          99% {
            opacity:0.75
          }
          99.5% {
            opacity:0.729
          }
          100% {
            opacity:0.707
          }
        }
        .out-4 {
          opacity:0;
          animation:motor-out-4 10s linear infinite
        }
        .in-4 {
          opacity:0.707;
          animation:motor-in-4 10s linear infinite
        }
        @keyframes motor-out-4 {
          0% {
            opacity:0
          }
          0.5% {
            opacity:0
          }
          1% {
            opacity:0
          }
          1.5% {
            opacity:0
          }
          2% {
            opacity:0
          }
          2.5% {
            opacity:0
          }
          3% {
            opacity:0
          }
          3.5% {
            opacity:0
          }
          4% {
            opacity:0
          }
          4.5% {
            opacity:0
          }
          5% {
            opacity:0
          }
          5.5% {
            opacity:0
          }
          6% {
            opacity:0
          }
          6.5% {
            opacity:0
          }
          7% {
            opacity:0
          }
          7.5% {
            opacity:0
          }
          8% {
            opacity:0
          }
          8.5% {
            opacity:0
          }
          9% {
            opacity:0
          }
          9.5% {
            opacity:0
          }
          10% {
            opacity:0
          }
          10.5% {
            opacity:0
          }
          11% {
            opacity:0
          }
          11.5% {
            opacity:0
          }
          12% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          13% {
            opacity:0
          }
          13.5% {
            opacity:0
          }
          14% {
            opacity:0
          }
          14.5% {
            opacity:0
          }
          15% {
            opacity:0
          }
          15.5% {
            opacity:0
          }
          16% {
            opacity:0
          }
          16.5% {
            opacity:0
          }
          17% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          18% {
            opacity:0
          }
          18.5% {
            opacity:0
          }
          19% {
            opacity:0
          }
          19.5% {
            opacity:0
          }
          20% {
            opacity:0
          }
          20.5% {
            opacity:0
          }
          21% {
            opacity:0
          }
          21.5% {
            opacity:0
          }
          22% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          23% {
            opacity:0
          }
          23.5% {
            opacity:0
          }
          24% {
            opacity:0
          }
          24.5% {
            opacity:0
          }
          25% {
            opacity:6.123e-17
          }
          25.5% {
            opacity:0.031
          }
          26% {
            opacity:0.063
          }
          26.5% {
            opacity:0.094
          }
          27% {
            opacity:0.125
          }
          27.5% {
            opacity:0.156
          }
          28% {
            opacity:0.187
          }
          28.5% {
            opacity:0.218
          }
          29% {
            opacity:0.249
          }
          29.5% {
            opacity:0.279
          }
          30% {
            opacity:0.309
          }
          30.5% {
            opacity:0.339
          }
          31% {
            opacity:0.368
          }
          31.5% {
            opacity:0.397
          }
          32% {
            opacity:0.426
          }
          32.5% {
            opacity:0.454
          }
          33% {
            opacity:0.482
          }
          33.5% {
            opacity:0.509
          }
          34% {
            opacity:0.536
          }
          34.5% {
            opacity:0.562
          }
          35% {
            opacity:0.588
          }
          35.5% {
            opacity:0.613
          }
          36% {
            opacity:0.637
          }
          36.5% {
            opacity:0.661
          }
          37% {
            opacity:0.685
          }
          37.5% {
            opacity:0.707
          }
          38% {
            opacity:0.729
          }
          38.5% {
            opacity:0.75
          }
          39% {
            opacity:0.771
          }
          39.5% {
            opacity:0.79
          }
          40% {
            opacity:0.809
          }
          40.5% {
            opacity:0.827
          }
          41% {
            opacity:0.844
          }
          41.5% {
            opacity:0.861
          }
          42% {
            opacity:0.876
          }
          42.5% {
            opacity:0.891
          }
          43% {
            opacity:0.905
          }
          43.5% {
            opacity:0.918
          }
          44% {
            opacity:0.93
          }
          44.5% {
            opacity:0.941
          }
          45% {
            opacity:0.951
          }
          45.5% {
            opacity:0.96
          }
          46% {
            opacity:0.969
          }
          46.5% {
            opacity:0.976
          }
          47% {
            opacity:0.982
          }
          47.5% {
            opacity:0.988
          }
          48% {
            opacity:0.992
          }
          48.5% {
            opacity:0.996
          }
          49% {
            opacity:0.998
          }
          49.5% {
            opacity:1.0
          }
          50% {
            opacity:1
          }
          50.5% {
            opacity:1.0
          }
          51% {
            opacity:0.998
          }
          51.5% {
            opacity:0.996
          }
          52% {
            opacity:0.992
          }
          52.5% {
            opacity:0.988
          }
          53% {
            opacity:0.982
          }
          53.5% {
            opacity:0.976
          }
          54% {
            opacity:0.969
          }
          54.5% {
            opacity:0.96
          }
          55% {
            opacity:0.951
          }
          55.5% {
            opacity:0.941
          }
          56% {
            opacity:0.93
          }
          56.5% {
            opacity:0.918
          }
          57% {
            opacity:0.905
          }
          57.5% {
            opacity:0.891
          }
          58% {
            opacity:0.876
          }
          58.5% {
            opacity:0.861
          }
          59% {
            opacity:0.844
          }
          59.5% {
            opacity:0.827
          }
          60% {
            opacity:0.809
          }
          60.5% {
            opacity:0.79
          }
          61% {
            opacity:0.771
          }
          61.5% {
            opacity:0.75
          }
          62% {
            opacity:0.729
          }
          62.5% {
            opacity:0.707
          }
          63% {
            opacity:0.685
          }
          63.5% {
            opacity:0.661
          }
          64% {
            opacity:0.637
          }
          64.5% {
            opacity:0.613
          }
          65% {
            opacity:0.588
          }
          65.5% {
            opacity:0.562
          }
          66% {
            opacity:0.536
          }
          66.5% {
            opacity:0.509
          }
          67% {
            opacity:0.482
          }
          67.5% {
            opacity:0.454
          }
          68% {
            opacity:0.426
          }
          68.5% {
            opacity:0.397
          }
          69% {
            opacity:0.368
          }
          69.5% {
            opacity:0.339
          }
          70% {
            opacity:0.309
          }
          70.5% {
            opacity:0.279
          }
          71% {
            opacity:0.249
          }
          71.5% {
            opacity:0.218
          }
          72% {
            opacity:0.187
          }
          72.5% {
            opacity:0.156
          }
          73% {
            opacity:0.125
          }
          73.5% {
            opacity:0.094
          }
          74% {
            opacity:0.063
          }
          74.5% {
            opacity:0.031
          }
          75% {
            opacity:6.123e-17
          }
          75.5% {
            opacity:0
          }
          76% {
            opacity:0
          }
          76.5% {
            opacity:0
          }
          77% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          78% {
            opacity:0
          }
          78.5% {
            opacity:0
          }
          79% {
            opacity:0
          }
          79.5% {
            opacity:0
          }
          80% {
            opacity:0
          }
          80.5% {
            opacity:0
          }
          81% {
            opacity:0
          }
          81.5% {
            opacity:0
          }
          82% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          83% {
            opacity:0
          }
          83.5% {
            opacity:0
          }
          84% {
            opacity:0
          }
          84.5% {
            opacity:0
          }
          85% {
            opacity:0
          }
          85.5% {
            opacity:0
          }
          86% {
            opacity:0
          }
          86.5% {
            opacity:0
          }
          87% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
          88% {
            opacity:0
          }
          88.5% {
            opacity:0
          }
          89% {
            opacity:0
          }
          89.5% {
            opacity:0
          }
          90% {
            opacity:0
          }
          90.5% {
            opacity:0
          }
          91% {
            opacity:0
          }
          91.5% {
            opacity:0
          }
          92% {
            opacity:0
          }
          92.5% {
            opacity:0
          }
          93% {
            opacity:0
          }
          93.5% {
            opacity:0
          }
          94% {
            opacity:0
          }
          94.5% {
            opacity:0
          }
          95% {
            opacity:0
          }
          95.5% {
            opacity:0
          }
          96% {
            opacity:0
          }
          96.5% {
            opacity:0
          }
          97% {
            opacity:0
          }
          97.5% {
            opacity:0
          }
          98% {
            opacity:0
          }
          98.5% {
            opacity:0
          }
          99% {
            opacity:0
          }
          99.5% {
            opacity:0
          }
          100% {
            opacity:0
          }
        }
        @keyframes motor-in-4 {
          0% {
            opacity:1
          }
          0.5% {
            opacity:1.0
          }
          1% {
            opacity:0.998
          }
          1.5% {
            opacity:0.996
          }
          2% {
            opacity:0.992
          }
          2.5% {
            opacity:0.988
          }
          3% {
            opacity:0.982
          }
          3.5% {
            opacity:0.976
          }
          4% {
            opacity:0.969
          }
          4.5% {
            opacity:0.96
          }
          5% {
            opacity:0.951
          }
          5.5% {
            opacity:0.941
          }
          6% {
            opacity:0.93
          }
          6.5% {
            opacity:0.918
          }
          7% {
            opacity:0.905
          }
          7.5% {
            opacity:0.891
          }
          8% {
            opacity:0.876
          }
          8.5% {
            opacity:0.861
          }
          9% {
            opacity:0.844
          }
          9.5% {
            opacity:0.827
          }
          10% {
            opacity:0.809
          }
          10.5% {
            opacity:0.79
          }
          11% {
            opacity:0.771
          }
          11.5% {
            opacity:0.75
          }
          12% {
            opacity:0.729
          }
          12.5% {
            opacity:0.707
          }
          13% {
            opacity:0.685
          }
          13.5% {
            opacity:0.661
          }
          14% {
            opacity:0.637
          }
          14.5% {
            opacity:0.613
          }
          15% {
            opacity:0.588
          }
          15.5% {
            opacity:0.562
          }
          16% {
            opacity:0.536
          }
          16.5% {
            opacity:0.509
          }
          17% {
            opacity:0.482
          }
          17.5% {
            opacity:0.454
          }
          18% {
            opacity:0.426
          }
          18.5% {
            opacity:0.397
          }
          19% {
            opacity:0.368
          }
          19.5% {
            opacity:0.339
          }
          20% {
            opacity:0.309
          }
          20.5% {
            opacity:0.279
          }
          21% {
            opacity:0.249
          }
          21.5% {
            opacity:0.218
          }
          22% {
            opacity:0.187
          }
          22.5% {
            opacity:0.156
          }
          23% {
            opacity:0.125
          }
          23.5% {
            opacity:0.094
          }
          24% {
            opacity:0.063
          }
          24.5% {
            opacity:0.031
          }
          25% {
            opacity:0
          }
          25.5% {
            opacity:0
          }
          26% {
            opacity:0
          }
          26.5% {
            opacity:0
          }
          27% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          28% {
            opacity:0
          }
          28.5% {
            opacity:0
          }
          29% {
            opacity:0
          }
          29.5% {
            opacity:0
          }
          30% {
            opacity:0
          }
          30.5% {
            opacity:0
          }
          31% {
            opacity:0
          }
          31.5% {
            opacity:0
          }
          32% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          33% {
            opacity:0
          }
          33.5% {
            opacity:0
          }
          34% {
            opacity:0
          }
          34.5% {
            opacity:0
          }
          35% {
            opacity:0
          }
          35.5% {
            opacity:0
          }
          36% {
            opacity:0
          }
          36.5% {
            opacity:0
          }
          37% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          38% {
            opacity:0
          }
          38.5% {
            opacity:0
          }
          39% {
            opacity:0
          }
          39.5% {
            opacity:0
          }
          40% {
            opacity:0
          }
          40.5% {
            opacity:0
          }
          41% {
            opacity:0
          }
          41.5% {
            opacity:0
          }
          42% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          43% {
            opacity:0
          }
          43.5% {
            opacity:0
          }
          44% {
            opacity:0
          }
          44.5% {
            opacity:0
          }
          45% {
            opacity:0
          }
          45.5% {
            opacity:0
          }
          46% {
            opacity:0
          }
          46.5% {
            opacity:0
          }
          47% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          48% {
            opacity:0
          }
          48.5% {
            opacity:0
          }
          49% {
            opacity:0
          }
          49.5% {
            opacity:0
          }
          50% {
            opacity:0
          }
          50.5% {
            opacity:0
          }
          51% {
            opacity:0
          }
          51.5% {
            opacity:0
          }
          52% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          53% {
            opacity:0
          }
          53.5% {
            opacity:0
          }
          54% {
            opacity:0
          }
          54.5% {
            opacity:0
          }
          55% {
            opacity:0
          }
          55.5% {
            opacity:0
          }
          56% {
            opacity:0
          }
          56.5% {
            opacity:0
          }
          57% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          58% {
            opacity:0
          }
          58.5% {
            opacity:0
          }
          59% {
            opacity:0
          }
          59.5% {
            opacity:0
          }
          60% {
            opacity:0
          }
          60.5% {
            opacity:0
          }
          61% {
            opacity:0
          }
          61.5% {
            opacity:0
          }
          62% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          63% {
            opacity:0
          }
          63.5% {
            opacity:0
          }
          64% {
            opacity:0
          }
          64.5% {
            opacity:0
          }
          65% {
            opacity:0
          }
          65.5% {
            opacity:0
          }
          66% {
            opacity:0
          }
          66.5% {
            opacity:0
          }
          67% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          68% {
            opacity:0
          }
          68.5% {
            opacity:0
          }
          69% {
            opacity:0
          }
          69.5% {
            opacity:0
          }
          70% {
            opacity:0
          }
          70.5% {
            opacity:0
          }
          71% {
            opacity:0
          }
          71.5% {
            opacity:0
          }
          72% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          73% {
            opacity:0
          }
          73.5% {
            opacity:0
          }
          74% {
            opacity:0
          }
          74.5% {
            opacity:0
          }
          75% {
            opacity:0
          }
          75.5% {
            opacity:0.031
          }
          76% {
            opacity:0.063
          }
          76.5% {
            opacity:0.094
          }
          77% {
            opacity:0.125
          }
          77.5% {
            opacity:0.156
          }
          78% {
            opacity:0.187
          }
          78.5% {
            opacity:0.218
          }
          79% {
            opacity:0.249
          }
          79.5% {
            opacity:0.279
          }
          80% {
            opacity:0.309
          }
          80.5% {
            opacity:0.339
          }
          81% {
            opacity:0.368
          }
          81.5% {
            opacity:0.397
          }
          82% {
            opacity:0.426
          }
          82.5% {
            opacity:0.454
          }
          83% {
            opacity:0.482
          }
          83.5% {
            opacity:0.509
          }
          84% {
            opacity:0.536
          }
          84.5% {
            opacity:0.562
          }
          85% {
            opacity:0.588
          }
          85.5% {
            opacity:0.613
          }
          86% {
            opacity:0.637
          }
          86.5% {
            opacity:0.661
          }
          87% {
            opacity:0.685
          }
          87.5% {
            opacity:0.707
          }
          88% {
            opacity:0.729
          }
          88.5% {
            opacity:0.75
          }
          89% {
            opacity:0.771
          }
          89.5% {
            opacity:0.79
          }
          90% {
            opacity:0.809
          }
          90.5% {
            opacity:0.827
          }
          91% {
            opacity:0.844
          }
          91.5% {
            opacity:0.861
          }
          92% {
            opacity:0.876
          }
          92.5% {
            opacity:0.891
          }
          93% {
            opacity:0.905
          }
          93.5% {
            opacity:0.918
          }
          94% {
            opacity:0.93
          }
          94.5% {
            opacity:0.941
          }
          95% {
            opacity:0.951
          }
          95.5% {
            opacity:0.96
          }
          96% {
            opacity:0.969
          }
          96.5% {
            opacity:0.976
          }
          97% {
            opacity:0.982
          }
          97.5% {
            opacity:0.988
          }
          98% {
            opacity:0.992
          }
          98.5% {
            opacity:0.996
          }
          99% {
            opacity:0.998
          }
          99.5% {
            opacity:1.0
          }
          100% {
            opacity:1
          }
        }
        .out-5 {
          opacity:0;
          animation:motor-out-5 10s linear infinite
        }
        .in-5 {
          opacity:1;
          animation:motor-in-5 10s linear infinite
        }
        @keyframes motor-out-5 {
          0% {
            opacity:0
          }
          0.5% {
            opacity:0
          }
          1% {
            opacity:0
          }
          1.5% {
            opacity:0
          }
          2% {
            opacity:0
          }
          2.5% {
            opacity:0
          }
          3% {
            opacity:0
          }
          3.5% {
            opacity:0
          }
          4% {
            opacity:0
          }
          4.5% {
            opacity:0
          }
          5% {
            opacity:0
          }
          5.5% {
            opacity:0
          }
          6% {
            opacity:0
          }
          6.5% {
            opacity:0
          }
          7% {
            opacity:0
          }
          7.5% {
            opacity:0
          }
          8% {
            opacity:0
          }
          8.5% {
            opacity:0
          }
          9% {
            opacity:0
          }
          9.5% {
            opacity:0
          }
          10% {
            opacity:0
          }
          10.5% {
            opacity:0
          }
          11% {
            opacity:0
          }
          11.5% {
            opacity:0
          }
          12% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          13% {
            opacity:0
          }
          13.5% {
            opacity:0
          }
          14% {
            opacity:0
          }
          14.5% {
            opacity:0
          }
          15% {
            opacity:0
          }
          15.5% {
            opacity:0
          }
          16% {
            opacity:0
          }
          16.5% {
            opacity:0
          }
          17% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          18% {
            opacity:0
          }
          18.5% {
            opacity:0
          }
          19% {
            opacity:0
          }
          19.5% {
            opacity:0
          }
          20% {
            opacity:0
          }
          20.5% {
            opacity:0
          }
          21% {
            opacity:0
          }
          21.5% {
            opacity:0
          }
          22% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          23% {
            opacity:0
          }
          23.5% {
            opacity:0
          }
          24% {
            opacity:0
          }
          24.5% {
            opacity:0
          }
          25% {
            opacity:0
          }
          25.5% {
            opacity:0
          }
          26% {
            opacity:0
          }
          26.5% {
            opacity:0
          }
          27% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          28% {
            opacity:0
          }
          28.5% {
            opacity:0
          }
          29% {
            opacity:0
          }
          29.5% {
            opacity:0
          }
          30% {
            opacity:0
          }
          30.5% {
            opacity:0
          }
          31% {
            opacity:0
          }
          31.5% {
            opacity:0
          }
          32% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          33% {
            opacity:0
          }
          33.5% {
            opacity:0
          }
          34% {
            opacity:0
          }
          34.5% {
            opacity:0
          }
          35% {
            opacity:0
          }
          35.5% {
            opacity:0
          }
          36% {
            opacity:0
          }
          36.5% {
            opacity:0
          }
          37% {
            opacity:0
          }
          37.5% {
            opacity:6.123e-17
          }
          38% {
            opacity:0.031
          }
          38.5% {
            opacity:0.063
          }
          39% {
            opacity:0.094
          }
          39.5% {
            opacity:0.125
          }
          40% {
            opacity:0.156
          }
          40.5% {
            opacity:0.187
          }
          41% {
            opacity:0.218
          }
          41.5% {
            opacity:0.249
          }
          42% {
            opacity:0.279
          }
          42.5% {
            opacity:0.309
          }
          43% {
            opacity:0.339
          }
          43.5% {
            opacity:0.368
          }
          44% {
            opacity:0.397
          }
          44.5% {
            opacity:0.426
          }
          45% {
            opacity:0.454
          }
          45.5% {
            opacity:0.482
          }
          46% {
            opacity:0.509
          }
          46.5% {
            opacity:0.536
          }
          47% {
            opacity:0.562
          }
          47.5% {
            opacity:0.588
          }
          48% {
            opacity:0.613
          }
          48.5% {
            opacity:0.637
          }
          49% {
            opacity:0.661
          }
          49.5% {
            opacity:0.685
          }
          50% {
            opacity:0.707
          }
          50.5% {
            opacity:0.729
          }
          51% {
            opacity:0.75
          }
          51.5% {
            opacity:0.771
          }
          52% {
            opacity:0.79
          }
          52.5% {
            opacity:0.809
          }
          53% {
            opacity:0.827
          }
          53.5% {
            opacity:0.844
          }
          54% {
            opacity:0.861
          }
          54.5% {
            opacity:0.876
          }
          55% {
            opacity:0.891
          }
          55.5% {
            opacity:0.905
          }
          56% {
            opacity:0.918
          }
          56.5% {
            opacity:0.93
          }
          57% {
            opacity:0.941
          }
          57.5% {
            opacity:0.951
          }
          58% {
            opacity:0.96
          }
          58.5% {
            opacity:0.969
          }
          59% {
            opacity:0.976
          }
          59.5% {
            opacity:0.982
          }
          60% {
            opacity:0.988
          }
          60.5% {
            opacity:0.992
          }
          61% {
            opacity:0.996
          }
          61.5% {
            opacity:0.998
          }
          62% {
            opacity:1.0
          }
          62.5% {
            opacity:1
          }
          63% {
            opacity:1.0
          }
          63.5% {
            opacity:0.998
          }
          64% {
            opacity:0.996
          }
          64.5% {
            opacity:0.992
          }
          65% {
            opacity:0.988
          }
          65.5% {
            opacity:0.982
          }
          66% {
            opacity:0.976
          }
          66.5% {
            opacity:0.969
          }
          67% {
            opacity:0.96
          }
          67.5% {
            opacity:0.951
          }
          68% {
            opacity:0.941
          }
          68.5% {
            opacity:0.93
          }
          69% {
            opacity:0.918
          }
          69.5% {
            opacity:0.905
          }
          70% {
            opacity:0.891
          }
          70.5% {
            opacity:0.876
          }
          71% {
            opacity:0.861
          }
          71.5% {
            opacity:0.844
          }
          72% {
            opacity:0.827
          }
          72.5% {
            opacity:0.809
          }
          73% {
            opacity:0.79
          }
          73.5% {
            opacity:0.771
          }
          74% {
            opacity:0.75
          }
          74.5% {
            opacity:0.729
          }
          75% {
            opacity:0.707
          }
          75.5% {
            opacity:0.685
          }
          76% {
            opacity:0.661
          }
          76.5% {
            opacity:0.637
          }
          77% {
            opacity:0.613
          }
          77.5% {
            opacity:0.588
          }
          78% {
            opacity:0.562
          }
          78.5% {
            opacity:0.536
          }
          79% {
            opacity:0.509
          }
          79.5% {
            opacity:0.482
          }
          80% {
            opacity:0.454
          }
          80.5% {
            opacity:0.426
          }
          81% {
            opacity:0.397
          }
          81.5% {
            opacity:0.368
          }
          82% {
            opacity:0.339
          }
          82.5% {
            opacity:0.309
          }
          83% {
            opacity:0.279
          }
          83.5% {
            opacity:0.249
          }
          84% {
            opacity:0.218
          }
          84.5% {
            opacity:0.187
          }
          85% {
            opacity:0.156
          }
          85.5% {
            opacity:0.125
          }
          86% {
            opacity:0.094
          }
          86.5% {
            opacity:0.063
          }
          87% {
            opacity:0.031
          }
          87.5% {
            opacity:6.123e-17
          }
          88% {
            opacity:0
          }
          88.5% {
            opacity:0
          }
          89% {
            opacity:0
          }
          89.5% {
            opacity:0
          }
          90% {
            opacity:0
          }
          90.5% {
            opacity:0
          }
          91% {
            opacity:0
          }
          91.5% {
            opacity:0
          }
          92% {
            opacity:0
          }
          92.5% {
            opacity:0
          }
          93% {
            opacity:0
          }
          93.5% {
            opacity:0
          }
          94% {
            opacity:0
          }
          94.5% {
            opacity:0
          }
          95% {
            opacity:0
          }
          95.5% {
            opacity:0
          }
          96% {
            opacity:0
          }
          96.5% {
            opacity:0
          }
          97% {
            opacity:0
          }
          97.5% {
            opacity:0
          }
          98% {
            opacity:0
          }
          98.5% {
            opacity:0
          }
          99% {
            opacity:0
          }
          99.5% {
            opacity:0
          }
          100% {
            opacity:0
          }
        }
        @keyframes motor-in-5 {
          0% {
            opacity:0.707
          }
          0.5% {
            opacity:0.729
          }
          1% {
            opacity:0.75
          }
          1.5% {
            opacity:0.771
          }
          2% {
            opacity:0.79
          }
          2.5% {
            opacity:0.809
          }
          3% {
            opacity:0.827
          }
          3.5% {
            opacity:0.844
          }
          4% {
            opacity:0.861
          }
          4.5% {
            opacity:0.876
          }
          5% {
            opacity:0.891
          }
          5.5% {
            opacity:0.905
          }
          6% {
            opacity:0.918
          }
          6.5% {
            opacity:0.93
          }
          7% {
            opacity:0.941
          }
          7.5% {
            opacity:0.951
          }
          8% {
            opacity:0.96
          }
          8.5% {
            opacity:0.969
          }
          9% {
            opacity:0.976
          }
          9.5% {
            opacity:0.982
          }
          10% {
            opacity:0.988
          }
          10.5% {
            opacity:0.992
          }
          11% {
            opacity:0.996
          }
          11.5% {
            opacity:0.998
          }
          12% {
            opacity:1.0
          }
          12.5% {
            opacity:1
          }
          13% {
            opacity:1.0
          }
          13.5% {
            opacity:0.998
          }
          14% {
            opacity:0.996
          }
          14.5% {
            opacity:0.992
          }
          15% {
            opacity:0.988
          }
          15.5% {
            opacity:0.982
          }
          16% {
            opacity:0.976
          }
          16.5% {
            opacity:0.969
          }
          17% {
            opacity:0.96
          }
          17.5% {
            opacity:0.951
          }
          18% {
            opacity:0.941
          }
          18.5% {
            opacity:0.93
          }
          19% {
            opacity:0.918
          }
          19.5% {
            opacity:0.905
          }
          20% {
            opacity:0.891
          }
          20.5% {
            opacity:0.876
          }
          21% {
            opacity:0.861
          }
          21.5% {
            opacity:0.844
          }
          22% {
            opacity:0.827
          }
          22.5% {
            opacity:0.809
          }
          23% {
            opacity:0.79
          }
          23.5% {
            opacity:0.771
          }
          24% {
            opacity:0.75
          }
          24.5% {
            opacity:0.729
          }
          25% {
            opacity:0.707
          }
          25.5% {
            opacity:0.685
          }
          26% {
            opacity:0.661
          }
          26.5% {
            opacity:0.637
          }
          27% {
            opacity:0.613
          }
          27.5% {
            opacity:0.588
          }
          28% {
            opacity:0.562
          }
          28.5% {
            opacity:0.536
          }
          29% {
            opacity:0.509
          }
          29.5% {
            opacity:0.482
          }
          30% {
            opacity:0.454
          }
          30.5% {
            opacity:0.426
          }
          31% {
            opacity:0.397
          }
          31.5% {
            opacity:0.368
          }
          32% {
            opacity:0.339
          }
          32.5% {
            opacity:0.309
          }
          33% {
            opacity:0.279
          }
          33.5% {
            opacity:0.249
          }
          34% {
            opacity:0.218
          }
          34.5% {
            opacity:0.187
          }
          35% {
            opacity:0.156
          }
          35.5% {
            opacity:0.125
          }
          36% {
            opacity:0.094
          }
          36.5% {
            opacity:0.063
          }
          37% {
            opacity:0.031
          }
          37.5% {
            opacity:0
          }
          38% {
            opacity:0
          }
          38.5% {
            opacity:0
          }
          39% {
            opacity:0
          }
          39.5% {
            opacity:0
          }
          40% {
            opacity:0
          }
          40.5% {
            opacity:0
          }
          41% {
            opacity:0
          }
          41.5% {
            opacity:0
          }
          42% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          43% {
            opacity:0
          }
          43.5% {
            opacity:0
          }
          44% {
            opacity:0
          }
          44.5% {
            opacity:0
          }
          45% {
            opacity:0
          }
          45.5% {
            opacity:0
          }
          46% {
            opacity:0
          }
          46.5% {
            opacity:0
          }
          47% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          48% {
            opacity:0
          }
          48.5% {
            opacity:0
          }
          49% {
            opacity:0
          }
          49.5% {
            opacity:0
          }
          50% {
            opacity:0
          }
          50.5% {
            opacity:0
          }
          51% {
            opacity:0
          }
          51.5% {
            opacity:0
          }
          52% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          53% {
            opacity:0
          }
          53.5% {
            opacity:0
          }
          54% {
            opacity:0
          }
          54.5% {
            opacity:0
          }
          55% {
            opacity:0
          }
          55.5% {
            opacity:0
          }
          56% {
            opacity:0
          }
          56.5% {
            opacity:0
          }
          57% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          58% {
            opacity:0
          }
          58.5% {
            opacity:0
          }
          59% {
            opacity:0
          }
          59.5% {
            opacity:0
          }
          60% {
            opacity:0
          }
          60.5% {
            opacity:0
          }
          61% {
            opacity:0
          }
          61.5% {
            opacity:0
          }
          62% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          63% {
            opacity:0
          }
          63.5% {
            opacity:0
          }
          64% {
            opacity:0
          }
          64.5% {
            opacity:0
          }
          65% {
            opacity:0
          }
          65.5% {
            opacity:0
          }
          66% {
            opacity:0
          }
          66.5% {
            opacity:0
          }
          67% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          68% {
            opacity:0
          }
          68.5% {
            opacity:0
          }
          69% {
            opacity:0
          }
          69.5% {
            opacity:0
          }
          70% {
            opacity:0
          }
          70.5% {
            opacity:0
          }
          71% {
            opacity:0
          }
          71.5% {
            opacity:0
          }
          72% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          73% {
            opacity:0
          }
          73.5% {
            opacity:0
          }
          74% {
            opacity:0
          }
          74.5% {
            opacity:0
          }
          75% {
            opacity:0
          }
          75.5% {
            opacity:0
          }
          76% {
            opacity:0
          }
          76.5% {
            opacity:0
          }
          77% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          78% {
            opacity:0
          }
          78.5% {
            opacity:0
          }
          79% {
            opacity:0
          }
          79.5% {
            opacity:0
          }
          80% {
            opacity:0
          }
          80.5% {
            opacity:0
          }
          81% {
            opacity:0
          }
          81.5% {
            opacity:0
          }
          82% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          83% {
            opacity:0
          }
          83.5% {
            opacity:0
          }
          84% {
            opacity:0
          }
          84.5% {
            opacity:0
          }
          85% {
            opacity:0
          }
          85.5% {
            opacity:0
          }
          86% {
            opacity:0
          }
          86.5% {
            opacity:0
          }
          87% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
          88% {
            opacity:0.031
          }
          88.5% {
            opacity:0.063
          }
          89% {
            opacity:0.094
          }
          89.5% {
            opacity:0.125
          }
          90% {
            opacity:0.156
          }
          90.5% {
            opacity:0.187
          }
          91% {
            opacity:0.218
          }
          91.5% {
            opacity:0.249
          }
          92% {
            opacity:0.279
          }
          92.5% {
            opacity:0.309
          }
          93% {
            opacity:0.339
          }
          93.5% {
            opacity:0.368
          }
          94% {
            opacity:0.397
          }
          94.5% {
            opacity:0.426
          }
          95% {
            opacity:0.454
          }
          95.5% {
            opacity:0.482
          }
          96% {
            opacity:0.509
          }
          96.5% {
            opacity:0.536
          }
          97% {
            opacity:0.562
          }
          97.5% {
            opacity:0.588
          }
          98% {
            opacity:0.613
          }
          98.5% {
            opacity:0.637
          }
          99% {
            opacity:0.661
          }
          99.5% {
            opacity:0.685
          }
          100% {
            opacity:0.707
          }
        }
        .out-6 {
          opacity:0;
          animation:motor-out-6 10s linear infinite
        }
        .in-6 {
          opacity:0.707;
          animation:motor-in-6 10s linear infinite
        }
        @keyframes motor-out-6 {
          0% {
            opacity:0
          }
          0.5% {
            opacity:0
          }
          1% {
            opacity:0
          }
          1.5% {
            opacity:0
          }
          2% {
            opacity:0
          }
          2.5% {
            opacity:0
          }
          3% {
            opacity:0
          }
          3.5% {
            opacity:0
          }
          4% {
            opacity:0
          }
          4.5% {
            opacity:0
          }
          5% {
            opacity:0
          }
          5.5% {
            opacity:0
          }
          6% {
            opacity:0
          }
          6.5% {
            opacity:0
          }
          7% {
            opacity:0
          }
          7.5% {
            opacity:0
          }
          8% {
            opacity:0
          }
          8.5% {
            opacity:0
          }
          9% {
            opacity:0
          }
          9.5% {
            opacity:0
          }
          10% {
            opacity:0
          }
          10.5% {
            opacity:0
          }
          11% {
            opacity:0
          }
          11.5% {
            opacity:0
          }
          12% {
            opacity:0
          }
          12.5% {
            opacity:0
          }
          13% {
            opacity:0
          }
          13.5% {
            opacity:0
          }
          14% {
            opacity:0
          }
          14.5% {
            opacity:0
          }
          15% {
            opacity:0
          }
          15.5% {
            opacity:0
          }
          16% {
            opacity:0
          }
          16.5% {
            opacity:0
          }
          17% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          18% {
            opacity:0
          }
          18.5% {
            opacity:0
          }
          19% {
            opacity:0
          }
          19.5% {
            opacity:0
          }
          20% {
            opacity:0
          }
          20.5% {
            opacity:0
          }
          21% {
            opacity:0
          }
          21.5% {
            opacity:0
          }
          22% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          23% {
            opacity:0
          }
          23.5% {
            opacity:0
          }
          24% {
            opacity:0
          }
          24.5% {
            opacity:0
          }
          25% {
            opacity:0
          }
          25.5% {
            opacity:0
          }
          26% {
            opacity:0
          }
          26.5% {
            opacity:0
          }
          27% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          28% {
            opacity:0
          }
          28.5% {
            opacity:0
          }
          29% {
            opacity:0
          }
          29.5% {
            opacity:0
          }
          30% {
            opacity:0
          }
          30.5% {
            opacity:0
          }
          31% {
            opacity:0
          }
          31.5% {
            opacity:0
          }
          32% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          33% {
            opacity:0
          }
          33.5% {
            opacity:0
          }
          34% {
            opacity:0
          }
          34.5% {
            opacity:0
          }
          35% {
            opacity:0
          }
          35.5% {
            opacity:0
          }
          36% {
            opacity:0
          }
          36.5% {
            opacity:0
          }
          37% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          38% {
            opacity:0
          }
          38.5% {
            opacity:0
          }
          39% {
            opacity:0
          }
          39.5% {
            opacity:0
          }
          40% {
            opacity:0
          }
          40.5% {
            opacity:0
          }
          41% {
            opacity:0
          }
          41.5% {
            opacity:0
          }
          42% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          43% {
            opacity:0
          }
          43.5% {
            opacity:0
          }
          44% {
            opacity:0
          }
          44.5% {
            opacity:0
          }
          45% {
            opacity:0
          }
          45.5% {
            opacity:0
          }
          46% {
            opacity:0
          }
          46.5% {
            opacity:0
          }
          47% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          48% {
            opacity:0
          }
          48.5% {
            opacity:0
          }
          49% {
            opacity:0
          }
          49.5% {
            opacity:0
          }
          50% {
            opacity:6.123e-17
          }
          50.5% {
            opacity:0.031
          }
          51% {
            opacity:0.063
          }
          51.5% {
            opacity:0.094
          }
          52% {
            opacity:0.125
          }
          52.5% {
            opacity:0.156
          }
          53% {
            opacity:0.187
          }
          53.5% {
            opacity:0.218
          }
          54% {
            opacity:0.249
          }
          54.5% {
            opacity:0.279
          }
          55% {
            opacity:0.309
          }
          55.5% {
            opacity:0.339
          }
          56% {
            opacity:0.368
          }
          56.5% {
            opacity:0.397
          }
          57% {
            opacity:0.426
          }
          57.5% {
            opacity:0.454
          }
          58% {
            opacity:0.482
          }
          58.5% {
            opacity:0.509
          }
          59% {
            opacity:0.536
          }
          59.5% {
            opacity:0.562
          }
          60% {
            opacity:0.588
          }
          60.5% {
            opacity:0.613
          }
          61% {
            opacity:0.637
          }
          61.5% {
            opacity:0.661
          }
          62% {
            opacity:0.685
          }
          62.5% {
            opacity:0.707
          }
          63% {
            opacity:0.729
          }
          63.5% {
            opacity:0.75
          }
          64% {
            opacity:0.771
          }
          64.5% {
            opacity:0.79
          }
          65% {
            opacity:0.809
          }
          65.5% {
            opacity:0.827
          }
          66% {
            opacity:0.844
          }
          66.5% {
            opacity:0.861
          }
          67% {
            opacity:0.876
          }
          67.5% {
            opacity:0.891
          }
          68% {
            opacity:0.905
          }
          68.5% {
            opacity:0.918
          }
          69% {
            opacity:0.93
          }
          69.5% {
            opacity:0.941
          }
          70% {
            opacity:0.951
          }
          70.5% {
            opacity:0.96
          }
          71% {
            opacity:0.969
          }
          71.5% {
            opacity:0.976
          }
          72% {
            opacity:0.982
          }
          72.5% {
            opacity:0.988
          }
          73% {
            opacity:0.992
          }
          73.5% {
            opacity:0.996
          }
          74% {
            opacity:0.998
          }
          74.5% {
            opacity:1.0
          }
          75% {
            opacity:1
          }
          75.5% {
            opacity:1.0
          }
          76% {
            opacity:0.998
          }
          76.5% {
            opacity:0.996
          }
          77% {
            opacity:0.992
          }
          77.5% {
            opacity:0.988
          }
          78% {
            opacity:0.982
          }
          78.5% {
            opacity:0.976
          }
          79% {
            opacity:0.969
          }
          79.5% {
            opacity:0.96
          }
          80% {
            opacity:0.951
          }
          80.5% {
            opacity:0.941
          }
          81% {
            opacity:0.93
          }
          81.5% {
            opacity:0.918
          }
          82% {
            opacity:0.905
          }
          82.5% {
            opacity:0.891
          }
          83% {
            opacity:0.876
          }
          83.5% {
            opacity:0.861
          }
          84% {
            opacity:0.844
          }
          84.5% {
            opacity:0.827
          }
          85% {
            opacity:0.809
          }
          85.5% {
            opacity:0.79
          }
          86% {
            opacity:0.771
          }
          86.5% {
            opacity:0.75
          }
          87% {
            opacity:0.729
          }
          87.5% {
            opacity:0.707
          }
          88% {
            opacity:0.685
          }
          88.5% {
            opacity:0.661
          }
          89% {
            opacity:0.637
          }
          89.5% {
            opacity:0.613
          }
          90% {
            opacity:0.588
          }
          90.5% {
            opacity:0.562
          }
          91% {
            opacity:0.536
          }
          91.5% {
            opacity:0.509
          }
          92% {
            opacity:0.482
          }
          92.5% {
            opacity:0.454
          }
          93% {
            opacity:0.426
          }
          93.5% {
            opacity:0.397
          }
          94% {
            opacity:0.368
          }
          94.5% {
            opacity:0.339
          }
          95% {
            opacity:0.309
          }
          95.5% {
            opacity:0.279
          }
          96% {
            opacity:0.249
          }
          96.5% {
            opacity:0.218
          }
          97% {
            opacity:0.187
          }
          97.5% {
            opacity:0.156
          }
          98% {
            opacity:0.125
          }
          98.5% {
            opacity:0.094
          }
          99% {
            opacity:0.063
          }
          99.5% {
            opacity:0.031
          }
          100% {
            opacity:6.123e-17
          }
        }
        @keyframes motor-in-6 {
          0% {
            opacity:1.837e-16
          }
          0.5% {
            opacity:0.031
          }
          1% {
            opacity:0.063
          }
          1.5% {
            opacity:0.094
          }
          2% {
            opacity:0.125
          }
          2.5% {
            opacity:0.156
          }
          3% {
            opacity:0.187
          }
          3.5% {
            opacity:0.218
          }
          4% {
            opacity:0.249
          }
          4.5% {
            opacity:0.279
          }
          5% {
            opacity:0.309
          }
          5.5% {
            opacity:0.339
          }
          6% {
            opacity:0.368
          }
          6.5% {
            opacity:0.397
          }
          7% {
            opacity:0.426
          }
          7.5% {
            opacity:0.454
          }
          8% {
            opacity:0.482
          }
          8.5% {
            opacity:0.509
          }
          9% {
            opacity:0.536
          }
          9.5% {
            opacity:0.562
          }
          10% {
            opacity:0.588
          }
          10.5% {
            opacity:0.613
          }
          11% {
            opacity:0.637
          }
          11.5% {
            opacity:0.661
          }
          12% {
            opacity:0.685
          }
          12.5% {
            opacity:0.707
          }
          13% {
            opacity:0.729
          }
          13.5% {
            opacity:0.75
          }
          14% {
            opacity:0.771
          }
          14.5% {
            opacity:0.79
          }
          15% {
            opacity:0.809
          }
          15.5% {
            opacity:0.827
          }
          16% {
            opacity:0.844
          }
          16.5% {
            opacity:0.861
          }
          17% {
            opacity:0.876
          }
          17.5% {
            opacity:0.891
          }
          18% {
            opacity:0.905
          }
          18.5% {
            opacity:0.918
          }
          19% {
            opacity:0.93
          }
          19.5% {
            opacity:0.941
          }
          20% {
            opacity:0.951
          }
          20.5% {
            opacity:0.96
          }
          21% {
            opacity:0.969
          }
          21.5% {
            opacity:0.976
          }
          22% {
            opacity:0.982
          }
          22.5% {
            opacity:0.988
          }
          23% {
            opacity:0.992
          }
          23.5% {
            opacity:0.996
          }
          24% {
            opacity:0.998
          }
          24.5% {
            opacity:1.0
          }
          25% {
            opacity:1
          }
          25.5% {
            opacity:1.0
          }
          26% {
            opacity:0.998
          }
          26.5% {
            opacity:0.996
          }
          27% {
            opacity:0.992
          }
          27.5% {
            opacity:0.988
          }
          28% {
            opacity:0.982
          }
          28.5% {
            opacity:0.976
          }
          29% {
            opacity:0.969
          }
          29.5% {
            opacity:0.96
          }
          30% {
            opacity:0.951
          }
          30.5% {
            opacity:0.941
          }
          31% {
            opacity:0.93
          }
          31.5% {
            opacity:0.918
          }
          32% {
            opacity:0.905
          }
          32.5% {
            opacity:0.891
          }
          33% {
            opacity:0.876
          }
          33.5% {
            opacity:0.861
          }
          34% {
            opacity:0.844
          }
          34.5% {
            opacity:0.827
          }
          35% {
            opacity:0.809
          }
          35.5% {
            opacity:0.79
          }
          36% {
            opacity:0.771
          }
          36.5% {
            opacity:0.75
          }
          37% {
            opacity:0.729
          }
          37.5% {
            opacity:0.707
          }
          38% {
            opacity:0.685
          }
          38.5% {
            opacity:0.661
          }
          39% {
            opacity:0.637
          }
          39.5% {
            opacity:0.613
          }
          40% {
            opacity:0.588
          }
          40.5% {
            opacity:0.562
          }
          41% {
            opacity:0.536
          }
          41.5% {
            opacity:0.509
          }
          42% {
            opacity:0.482
          }
          42.5% {
            opacity:0.454
          }
          43% {
            opacity:0.426
          }
          43.5% {
            opacity:0.397
          }
          44% {
            opacity:0.368
          }
          44.5% {
            opacity:0.339
          }
          45% {
            opacity:0.309
          }
          45.5% {
            opacity:0.279
          }
          46% {
            opacity:0.249
          }
          46.5% {
            opacity:0.218
          }
          47% {
            opacity:0.187
          }
          47.5% {
            opacity:0.156
          }
          48% {
            opacity:0.125
          }
          48.5% {
            opacity:0.094
          }
          49% {
            opacity:0.063
          }
          49.5% {
            opacity:0.031
          }
          50% {
            opacity:0
          }
          50.5% {
            opacity:0
          }
          51% {
            opacity:0
          }
          51.5% {
            opacity:0
          }
          52% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          53% {
            opacity:0
          }
          53.5% {
            opacity:0
          }
          54% {
            opacity:0
          }
          54.5% {
            opacity:0
          }
          55% {
            opacity:0
          }
          55.5% {
            opacity:0
          }
          56% {
            opacity:0
          }
          56.5% {
            opacity:0
          }
          57% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          58% {
            opacity:0
          }
          58.5% {
            opacity:0
          }
          59% {
            opacity:0
          }
          59.5% {
            opacity:0
          }
          60% {
            opacity:0
          }
          60.5% {
            opacity:0
          }
          61% {
            opacity:0
          }
          61.5% {
            opacity:0
          }
          62% {
            opacity:0
          }
          62.5% {
            opacity:0
          }
          63% {
            opacity:0
          }
          63.5% {
            opacity:0
          }
          64% {
            opacity:0
          }
          64.5% {
            opacity:0
          }
          65% {
            opacity:0
          }
          65.5% {
            opacity:0
          }
          66% {
            opacity:0
          }
          66.5% {
            opacity:0
          }
          67% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          68% {
            opacity:0
          }
          68.5% {
            opacity:0
          }
          69% {
            opacity:0
          }
          69.5% {
            opacity:0
          }
          70% {
            opacity:0
          }
          70.5% {
            opacity:0
          }
          71% {
            opacity:0
          }
          71.5% {
            opacity:0
          }
          72% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          73% {
            opacity:0
          }
          73.5% {
            opacity:0
          }
          74% {
            opacity:0
          }
          74.5% {
            opacity:0
          }
          75% {
            opacity:0
          }
          75.5% {
            opacity:0
          }
          76% {
            opacity:0
          }
          76.5% {
            opacity:0
          }
          77% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          78% {
            opacity:0
          }
          78.5% {
            opacity:0
          }
          79% {
            opacity:0
          }
          79.5% {
            opacity:0
          }
          80% {
            opacity:0
          }
          80.5% {
            opacity:0
          }
          81% {
            opacity:0
          }
          81.5% {
            opacity:0
          }
          82% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          83% {
            opacity:0
          }
          83.5% {
            opacity:0
          }
          84% {
            opacity:0
          }
          84.5% {
            opacity:0
          }
          85% {
            opacity:0
          }
          85.5% {
            opacity:0
          }
          86% {
            opacity:0
          }
          86.5% {
            opacity:0
          }
          87% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
          88% {
            opacity:0
          }
          88.5% {
            opacity:0
          }
          89% {
            opacity:0
          }
          89.5% {
            opacity:0
          }
          90% {
            opacity:0
          }
          90.5% {
            opacity:0
          }
          91% {
            opacity:0
          }
          91.5% {
            opacity:0
          }
          92% {
            opacity:0
          }
          92.5% {
            opacity:0
          }
          93% {
            opacity:0
          }
          93.5% {
            opacity:0
          }
          94% {
            opacity:0
          }
          94.5% {
            opacity:0
          }
          95% {
            opacity:0
          }
          95.5% {
            opacity:0
          }
          96% {
            opacity:0
          }
          96.5% {
            opacity:0
          }
          97% {
            opacity:0
          }
          97.5% {
            opacity:0
          }
          98% {
            opacity:0
          }
          98.5% {
            opacity:0
          }
          99% {
            opacity:0
          }
          99.5% {
            opacity:0
          }
          100% {
            opacity:0
          }
        }
        .out-7 {
          opacity:0;
          animation:motor-out-7 10s linear infinite
        }
        .in-7 {
          opacity:1.837e-16;
          animation:motor-in-7 10s linear infinite
        }
        @keyframes motor-out-7 {
          0% {
            opacity:0.707
          }
          0.5% {
            opacity:0.685
          }
          1% {
            opacity:0.661
          }
          1.5% {
            opacity:0.637
          }
          2% {
            opacity:0.613
          }
          2.5% {
            opacity:0.588
          }
          3% {
            opacity:0.562
          }
          3.5% {
            opacity:0.536
          }
          4% {
            opacity:0.509
          }
          4.5% {
            opacity:0.482
          }
          5% {
            opacity:0.454
          }
          5.5% {
            opacity:0.426
          }
          6% {
            opacity:0.397
          }
          6.5% {
            opacity:0.368
          }
          7% {
            opacity:0.339
          }
          7.5% {
            opacity:0.309
          }
          8% {
            opacity:0.279
          }
          8.5% {
            opacity:0.249
          }
          9% {
            opacity:0.218
          }
          9.5% {
            opacity:0.187
          }
          10% {
            opacity:0.156
          }
          10.5% {
            opacity:0.125
          }
          11% {
            opacity:0.094
          }
          11.5% {
            opacity:0.063
          }
          12% {
            opacity:0.031
          }
          12.5% {
            opacity:0
          }
          13% {
            opacity:0
          }
          13.5% {
            opacity:0
          }
          14% {
            opacity:0
          }
          14.5% {
            opacity:0
          }
          15% {
            opacity:0
          }
          15.5% {
            opacity:0
          }
          16% {
            opacity:0
          }
          16.5% {
            opacity:0
          }
          17% {
            opacity:0
          }
          17.5% {
            opacity:0
          }
          18% {
            opacity:0
          }
          18.5% {
            opacity:0
          }
          19% {
            opacity:0
          }
          19.5% {
            opacity:0
          }
          20% {
            opacity:0
          }
          20.5% {
            opacity:0
          }
          21% {
            opacity:0
          }
          21.5% {
            opacity:0
          }
          22% {
            opacity:0
          }
          22.5% {
            opacity:0
          }
          23% {
            opacity:0
          }
          23.5% {
            opacity:0
          }
          24% {
            opacity:0
          }
          24.5% {
            opacity:0
          }
          25% {
            opacity:0
          }
          25.5% {
            opacity:0
          }
          26% {
            opacity:0
          }
          26.5% {
            opacity:0
          }
          27% {
            opacity:0
          }
          27.5% {
            opacity:0
          }
          28% {
            opacity:0
          }
          28.5% {
            opacity:0
          }
          29% {
            opacity:0
          }
          29.5% {
            opacity:0
          }
          30% {
            opacity:0
          }
          30.5% {
            opacity:0
          }
          31% {
            opacity:0
          }
          31.5% {
            opacity:0
          }
          32% {
            opacity:0
          }
          32.5% {
            opacity:0
          }
          33% {
            opacity:0
          }
          33.5% {
            opacity:0
          }
          34% {
            opacity:0
          }
          34.5% {
            opacity:0
          }
          35% {
            opacity:0
          }
          35.5% {
            opacity:0
          }
          36% {
            opacity:0
          }
          36.5% {
            opacity:0
          }
          37% {
            opacity:0
          }
          37.5% {
            opacity:0
          }
          38% {
            opacity:0
          }
          38.5% {
            opacity:0
          }
          39% {
            opacity:0
          }
          39.5% {
            opacity:0
          }
          40% {
            opacity:0
          }
          40.5% {
            opacity:0
          }
          41% {
            opacity:0
          }
          41.5% {
            opacity:0
          }
          42% {
            opacity:0
          }
          42.5% {
            opacity:0
          }
          43% {
            opacity:0
          }
          43.5% {
            opacity:0
          }
          44% {
            opacity:0
          }
          44.5% {
            opacity:0
          }
          45% {
            opacity:0
          }
          45.5% {
            opacity:0
          }
          46% {
            opacity:0
          }
          46.5% {
            opacity:0
          }
          47% {
            opacity:0
          }
          47.5% {
            opacity:0
          }
          48% {
            opacity:0
          }
          48.5% {
            opacity:0
          }
          49% {
            opacity:0
          }
          49.5% {
            opacity:0
          }
          50% {
            opacity:0
          }
          50.5% {
            opacity:0
          }
          51% {
            opacity:0
          }
          51.5% {
            opacity:0
          }
          52% {
            opacity:0
          }
          52.5% {
            opacity:0
          }
          53% {
            opacity:0
          }
          53.5% {
            opacity:0
          }
          54% {
            opacity:0
          }
          54.5% {
            opacity:0
          }
          55% {
            opacity:0
          }
          55.5% {
            opacity:0
          }
          56% {
            opacity:0
          }
          56.5% {
            opacity:0
          }
          57% {
            opacity:0
          }
          57.5% {
            opacity:0
          }
          58% {
            opacity:0
          }
          58.5% {
            opacity:0
          }
          59% {
            opacity:0
          }
          59.5% {
            opacity:0
          }
          60% {
            opacity:0
          }
          60.5% {
            opacity:0
          }
          61% {
            opacity:0
          }
          61.5% {
            opacity:0
          }
          62% {
            opacity:0
          }
          62.5% {
            opacity:5.053e-16
          }
          63% {
            opacity:0.031
          }
          63.5% {
            opacity:0.063
          }
          64% {
            opacity:0.094
          }
          64.5% {
            opacity:0.125
          }
          65% {
            opacity:0.156
          }
          65.5% {
            opacity:0.187
          }
          66% {
            opacity:0.218
          }
          66.5% {
            opacity:0.249
          }
          67% {
            opacity:0.279
          }
          67.5% {
            opacity:0.309
          }
          68% {
            opacity:0.339
          }
          68.5% {
            opacity:0.368
          }
          69% {
            opacity:0.397
          }
          69.5% {
            opacity:0.426
          }
          70% {
            opacity:0.454
          }
          70.5% {
            opacity:0.482
          }
          71% {
            opacity:0.509
          }
          71.5% {
            opacity:0.536
          }
          72% {
            opacity:0.562
          }
          72.5% {
            opacity:0.588
          }
          73% {
            opacity:0.613
          }
          73.5% {
            opacity:0.637
          }
          74% {
            opacity:0.661
          }
          74.5% {
            opacity:0.685
          }
          75% {
            opacity:0.707
          }
          75.5% {
            opacity:0.729
          }
          76% {
            opacity:0.75
          }
          76.5% {
            opacity:0.771
          }
          77% {
            opacity:0.79
          }
          77.5% {
            opacity:0.809
          }
          78% {
            opacity:0.827
          }
          78.5% {
            opacity:0.844
          }
          79% {
            opacity:0.861
          }
          79.5% {
            opacity:0.876
          }
          80% {
            opacity:0.891
          }
          80.5% {
            opacity:0.905
          }
          81% {
            opacity:0.918
          }
          81.5% {
            opacity:0.93
          }
          82% {
            opacity:0.941
          }
          82.5% {
            opacity:0.951
          }
          83% {
            opacity:0.96
          }
          83.5% {
            opacity:0.969
          }
          84% {
            opacity:0.976
          }
          84.5% {
            opacity:0.982
          }
          85% {
            opacity:0.988
          }
          85.5% {
            opacity:0.992
          }
          86% {
            opacity:0.996
          }
          86.5% {
            opacity:0.998
          }
          87% {
            opacity:1.0
          }
          87.5% {
            opacity:1
          }
          88% {
            opacity:1.0
          }
          88.5% {
            opacity:0.998
          }
          89% {
            opacity:0.996
          }
          89.5% {
            opacity:0.992
          }
          90% {
            opacity:0.988
          }
          90.5% {
            opacity:0.982
          }
          91% {
            opacity:0.976
          }
          91.5% {
            opacity:0.969
          }
          92% {
            opacity:0.96
          }
          92.5% {
            opacity:0.951
          }
          93% {
            opacity:0.941
          }
          93.5% {
            opacity:0.93
          }
          94% {
            opacity:0.918
          }
          94.5% {
            opacity:0.905
          }
          95% {
            opacity:0.891
          }
          95.5% {
            opacity:0.876
          }
          96% {
            opacity:0.861
          }
          96.5% {
            opacity:0.844
          }
          97% {
            opacity:0.827
          }
          97.5% {
            opacity:0.809
          }
          98% {
            opacity:0.79
          }
          98.5% {
            opacity:0.771
          }
          99% {
            opacity:0.75
          }
          99.5% {
            opacity:0.729
          }
          100% {
            opacity:0.707
          }
        }
        @keyframes motor-in-7 {
          0% {
            opacity:0
          }
          0.5% {
            opacity:0
          }
          1% {
            opacity:0
          }
          1.5% {
            opacity:0
          }
          2% {
            opacity:0
          }
          2.5% {
            opacity:0
          }
          3% {
            opacity:0
          }
          3.5% {
            opacity:0
          }
          4% {
            opacity:0
          }
          4.5% {
            opacity:0
          }
          5% {
            opacity:0
          }
          5.5% {
            opacity:0
          }
          6% {
            opacity:0
          }
          6.5% {
            opacity:0
          }
          7% {
            opacity:0
          }
          7.5% {
            opacity:0
          }
          8% {
            opacity:0
          }
          8.5% {
            opacity:0
          }
          9% {
            opacity:0
          }
          9.5% {
            opacity:0
          }
          10% {
            opacity:0
          }
          10.5% {
            opacity:0
          }
          11% {
            opacity:0
          }
          11.5% {
            opacity:0
          }
          12% {
            opacity:0
          }
          12.5% {
            opacity:1.837e-16
          }
          13% {
            opacity:0.031
          }
          13.5% {
            opacity:0.063
          }
          14% {
            opacity:0.094
          }
          14.5% {
            opacity:0.125
          }
          15% {
            opacity:0.156
          }
          15.5% {
            opacity:0.187
          }
          16% {
            opacity:0.218
          }
          16.5% {
            opacity:0.249
          }
          17% {
            opacity:0.279
          }
          17.5% {
            opacity:0.309
          }
          18% {
            opacity:0.339
          }
          18.5% {
            opacity:0.368
          }
          19% {
            opacity:0.397
          }
          19.5% {
            opacity:0.426
          }
          20% {
            opacity:0.454
          }
          20.5% {
            opacity:0.482
          }
          21% {
            opacity:0.509
          }
          21.5% {
            opacity:0.536
          }
          22% {
            opacity:0.562
          }
          22.5% {
            opacity:0.588
          }
          23% {
            opacity:0.613
          }
          23.5% {
            opacity:0.637
          }
          24% {
            opacity:0.661
          }
          24.5% {
            opacity:0.685
          }
          25% {
            opacity:0.707
          }
          25.5% {
            opacity:0.729
          }
          26% {
            opacity:0.75
          }
          26.5% {
            opacity:0.771
          }
          27% {
            opacity:0.79
          }
          27.5% {
            opacity:0.809
          }
          28% {
            opacity:0.827
          }
          28.5% {
            opacity:0.844
          }
          29% {
            opacity:0.861
          }
          29.5% {
            opacity:0.876
          }
          30% {
            opacity:0.891
          }
          30.5% {
            opacity:0.905
          }
          31% {
            opacity:0.918
          }
          31.5% {
            opacity:0.93
          }
          32% {
            opacity:0.941
          }
          32.5% {
            opacity:0.951
          }
          33% {
            opacity:0.96
          }
          33.5% {
            opacity:0.969
          }
          34% {
            opacity:0.976
          }
          34.5% {
            opacity:0.982
          }
          35% {
            opacity:0.988
          }
          35.5% {
            opacity:0.992
          }
          36% {
            opacity:0.996
          }
          36.5% {
            opacity:0.998
          }
          37% {
            opacity:1.0
          }
          37.5% {
            opacity:1
          }
          38% {
            opacity:1.0
          }
          38.5% {
            opacity:0.998
          }
          39% {
            opacity:0.996
          }
          39.5% {
            opacity:0.992
          }
          40% {
            opacity:0.988
          }
          40.5% {
            opacity:0.982
          }
          41% {
            opacity:0.976
          }
          41.5% {
            opacity:0.969
          }
          42% {
            opacity:0.96
          }
          42.5% {
            opacity:0.951
          }
          43% {
            opacity:0.941
          }
          43.5% {
            opacity:0.93
          }
          44% {
            opacity:0.918
          }
          44.5% {
            opacity:0.905
          }
          45% {
            opacity:0.891
          }
          45.5% {
            opacity:0.876
          }
          46% {
            opacity:0.861
          }
          46.5% {
            opacity:0.844
          }
          47% {
            opacity:0.827
          }
          47.5% {
            opacity:0.809
          }
          48% {
            opacity:0.79
          }
          48.5% {
            opacity:0.771
          }
          49% {
            opacity:0.75
          }
          49.5% {
            opacity:0.729
          }
          50% {
            opacity:0.707
          }
          50.5% {
            opacity:0.685
          }
          51% {
            opacity:0.661
          }
          51.5% {
            opacity:0.637
          }
          52% {
            opacity:0.613
          }
          52.5% {
            opacity:0.588
          }
          53% {
            opacity:0.562
          }
          53.5% {
            opacity:0.536
          }
          54% {
            opacity:0.509
          }
          54.5% {
            opacity:0.482
          }
          55% {
            opacity:0.454
          }
          55.5% {
            opacity:0.426
          }
          56% {
            opacity:0.397
          }
          56.5% {
            opacity:0.368
          }
          57% {
            opacity:0.339
          }
          57.5% {
            opacity:0.309
          }
          58% {
            opacity:0.279
          }
          58.5% {
            opacity:0.249
          }
          59% {
            opacity:0.218
          }
          59.5% {
            opacity:0.187
          }
          60% {
            opacity:0.156
          }
          60.5% {
            opacity:0.125
          }
          61% {
            opacity:0.094
          }
          61.5% {
            opacity:0.063
          }
          62% {
            opacity:0.031
          }
          62.5% {
            opacity:0
          }
          63% {
            opacity:0
          }
          63.5% {
            opacity:0
          }
          64% {
            opacity:0
          }
          64.5% {
            opacity:0
          }
          65% {
            opacity:0
          }
          65.5% {
            opacity:0
          }
          66% {
            opacity:0
          }
          66.5% {
            opacity:0
          }
          67% {
            opacity:0
          }
          67.5% {
            opacity:0
          }
          68% {
            opacity:0
          }
          68.5% {
            opacity:0
          }
          69% {
            opacity:0
          }
          69.5% {
            opacity:0
          }
          70% {
            opacity:0
          }
          70.5% {
            opacity:0
          }
          71% {
            opacity:0
          }
          71.5% {
            opacity:0
          }
          72% {
            opacity:0
          }
          72.5% {
            opacity:0
          }
          73% {
            opacity:0
          }
          73.5% {
            opacity:0
          }
          74% {
            opacity:0
          }
          74.5% {
            opacity:0
          }
          75% {
            opacity:0
          }
          75.5% {
            opacity:0
          }
          76% {
            opacity:0
          }
          76.5% {
            opacity:0
          }
          77% {
            opacity:0
          }
          77.5% {
            opacity:0
          }
          78% {
            opacity:0
          }
          78.5% {
            opacity:0
          }
          79% {
            opacity:0
          }
          79.5% {
            opacity:0
          }
          80% {
            opacity:0
          }
          80.5% {
            opacity:0
          }
          81% {
            opacity:0
          }
          81.5% {
            opacity:0
          }
          82% {
            opacity:0
          }
          82.5% {
            opacity:0
          }
          83% {
            opacity:0
          }
          83.5% {
            opacity:0
          }
          84% {
            opacity:0
          }
          84.5% {
            opacity:0
          }
          85% {
            opacity:0
          }
          85.5% {
            opacity:0
          }
          86% {
            opacity:0
          }
          86.5% {
            opacity:0
          }
          87% {
            opacity:0
          }
          87.5% {
            opacity:0
          }
          88% {
            opacity:0
          }
          88.5% {
            opacity:0
          }
          89% {
            opacity:0
          }
          89.5% {
            opacity:0
          }
          90% {
            opacity:0
          }
          90.5% {
            opacity:0
          }
          91% {
            opacity:0
          }
          91.5% {
            opacity:0
          }
          92% {
            opacity:0
          }
          92.5% {
            opacity:0
          }
          93% {
            opacity:0
          }
          93.5% {
            opacity:0
          }
          94% {
            opacity:0
          }
          94.5% {
            opacity:0
          }
          95% {
            opacity:0
          }
          95.5% {
            opacity:0
          }
          96% {
            opacity:0
          }
          96.5% {
            opacity:0
          }
          97% {
            opacity:0
          }
          97.5% {
            opacity:0
          }
          98% {
            opacity:0
          }
          98.5% {
            opacity:0
          }
          99% {
            opacity:0
          }
          99.5% {
            opacity:0
          }
          100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Three-Phase Induction Motor">
        <circle class="stator" cx="70" cy="63" r="45"/>
        <g transform="translate(106 63) rotate(0)">
          <rect class="stator-coil phase-0" x="-5" y="-7" width="10" height="14" rx="2"/>
          <path class="coil-ends" d="M-5-4H-7M-5 0H-7M-5 4H-7M5-4H7M5 0H7M5 4H7"/>
          <g transform="rotate(0)">
            <text class="pole p0s" x="0" y="3">S</text>
            <text class="pole p0n" x="0" y="3">N</text>
          </g>
        </g>
        <g transform="translate(34 63.0) rotate(-180)">
          <rect class="stator-coil phase-0" x="-5" y="-7" width="10" height="14" rx="2"/>
          <path class="coil-ends" d="M-5-4H-7M-5 0H-7M-5 4H-7M5-4H7M5 0H7M5 4H7"/>
          <g transform="rotate(180)">
            <text class="pole p1s" x="0" y="3">S</text>
            <text class="pole p1n" x="0" y="3">N</text>
          </g>
        </g>
        <g transform="translate(52.0 31.823) rotate(-120.0)">
          <rect class="stator-coil phase-1" x="-5" y="-7" width="10" height="14" rx="2"/>
          <path class="coil-ends" d="M-5-4H-7M-5 0H-7M-5 4H-7M5-4H7M5 0H7M5 4H7"/>
          <g transform="rotate(120.0)">
            <text class="pole p2s" x="0" y="3">S</text>
            <text class="pole p2n" x="0" y="3">N</text>
          </g>
        </g>
        <g transform="translate(88.0 94.177) rotate(-300.0)">
          <rect class="stator-coil phase-1" x="-5" y="-7" width="10" height="14" rx="2"/>
          <path class="coil-ends" d="M-5-4H-7M-5 0H-7M-5 4H-7M5-4H7M5 0H7M5 4H7"/>
          <g transform="rotate(300.0)">
            <text class="pole p3s" x="0" y="3">S</text>
            <text class="pole p3n" x="0" y="3">N</text>
          </g>
        </g>
        <g transform="translate(52.0 94.177) rotate(-240.0)">
          <rect class="stator-coil phase-2" x="-5" y="-7" width="10" height="14" rx="2"/>
          <path class="coil-ends" d="M-5-4H-7M-5 0H-7M-5 4H-7M5-4H7M5 0H7M5 4H7"/>
          <g transform="rotate(240.0)">
            <text class="pole p4s" x="0" y="3">S</text>
            <text class="pole p4n" x="0" y="3">N</text>
          </g>
        </g>
        <g transform="translate(88.0 31.823) rotate(-420.0)">
          <rect class="stator-coil phase-2" x="-5" y="-7" width="10" height="14" rx="2"/>
          <path class="coil-ends" d="M-5-4H-7M-5 0H-7M-5 4H-7M5-4H7M5 0H7M5 4H7"/>
          <g transform="rotate(420.0)">
            <text class="pole p5s" x="0" y="3">S</text>
            <text class="pole p5n" x="0" y="3">N</text>
          </g>
        </g>
        <path class="rotating-field" d="M70 63H100M95 59L100 63L95 67"/>
        <g class="cage">
          <circle class="rotor" cx="70" cy="63" r="24"/>
          <g transform="translate(91 63)">
            <circle class="bar" r="2.5"/>
            <circle class="out-current out-0" r=".95"/>
            <path class="in-current in-0" d="M-1.25-1.25L1.25 1.25M1.25-1.25L-1.25 1.25"/>
          </g>
          <g transform="translate(84.849 48.151)">
            <circle class="bar" r="2.5"/>
            <circle class="out-current out-1" r=".95"/>
            <path class="in-current in-1" d="M-1.25-1.25L1.25 1.25M1.25-1.25L-1.25 1.25"/>
          </g>
          <g transform="translate(70 42)">
            <circle class="bar" r="2.5"/>
            <circle class="out-current out-2" r=".95"/>
            <path class="in-current in-2" d="M-1.25-1.25L1.25 1.25M1.25-1.25L-1.25 1.25"/>
          </g>
          <g transform="translate(55.151 48.151)">
            <circle class="bar" r="2.5"/>
            <circle class="out-current out-3" r=".95"/>
            <path class="in-current in-3" d="M-1.25-1.25L1.25 1.25M1.25-1.25L-1.25 1.25"/>
          </g>
          <g transform="translate(49 63)">
            <circle class="bar" r="2.5"/>
            <circle class="out-current out-4" r=".95"/>
            <path class="in-current in-4" d="M-1.25-1.25L1.25 1.25M1.25-1.25L-1.25 1.25"/>
          </g>
          <g transform="translate(55.151 77.849)">
            <circle class="bar" r="2.5"/>
            <circle class="out-current out-5" r=".95"/>
            <path class="in-current in-5" d="M-1.25-1.25L1.25 1.25M1.25-1.25L-1.25 1.25"/>
          </g>
          <g transform="translate(70 84)">
            <circle class="bar" r="2.5"/>
            <circle class="out-current out-6" r=".95"/>
            <path class="in-current in-6" d="M-1.25-1.25L1.25 1.25M1.25-1.25L-1.25 1.25"/>
          </g>
          <g transform="translate(84.849 77.849)">
            <circle class="bar" r="2.5"/>
            <circle class="out-current out-7" r=".95"/>
            <path class="in-current in-7" d="M-1.25-1.25L1.25 1.25M1.25-1.25L-1.25 1.25"/>
          </g>
          <path class="cage-reference" d="M70 48V54M67 51H73"/>
          <circle class="hub" cx="70" cy="63" r="3"/>
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

if (!customElements.get("concept-three-phase-induction-motor")) {
  customElements.define("concept-three-phase-induction-motor", ConceptThreePhaseInductionMotor);
}
