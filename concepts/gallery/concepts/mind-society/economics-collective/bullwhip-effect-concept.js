// Bullwhip Effect. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBullwhipEffect extends HTMLElement {
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
        .ticket00 {
          animation:ticket00 16s linear infinite;
        }
        .ticket01 {
          animation:ticket01 16s linear infinite;
        }
        .ticket02 {
          animation:ticket02 16s linear infinite;
        }
        .ticket03 {
          animation:ticket03 16s linear infinite;
        }
        .ticket04 {
          animation:ticket04 16s linear infinite;
        }
        .ticket05 {
          animation:ticket05 16s linear infinite;
        }
        .ticket06 {
          animation:ticket06 16s linear infinite;
        }
        .ticket07 {
          animation:ticket07 16s linear infinite;
        }
        .ticket08 {
          animation:ticket08 16s linear infinite;
        }
        .ticket09 {
          animation:ticket09 16s linear infinite;
        }
        .ticket10 {
          animation:ticket10 16s linear infinite;
        }
        .ticket11 {
          animation:ticket11 16s linear infinite;
        }
        .ticket12 {
          animation:ticket12 16s linear infinite;
        }
        .ticket13 {
          animation:ticket13 16s linear infinite;
        }
        .ticket14 {
          animation:ticket14 16s linear infinite;
        }
        .ticket15 {
          animation:ticket15 16s linear infinite;
        }
        .ticket16 {
          animation:ticket16 16s linear infinite;
        }
        .ticket17 {
          animation:ticket17 16s linear infinite;
        }
        .ticket18 {
          animation:ticket18 16s linear infinite;
        }
        .ticket19 {
          animation:ticket19 16s linear infinite;
        }
        .ticket20 {
          animation:ticket20 16s linear infinite;
        }
        .ticket21 {
          animation:ticket21 16s linear infinite;
        }
        .ticket22 {
          animation:ticket22 16s linear infinite;
        }
        .ticket23 {
          animation:ticket23 16s linear infinite;
        }
        .ticket24 {
          animation:ticket24 16s linear infinite;
        }
        .ticket25 {
          animation:ticket25 16s linear infinite;
        }
        .ticket26 {
          animation:ticket26 16s linear infinite;
        }
        .ticket27 {
          animation:ticket27 16s linear infinite;
        }
        .ticket28 {
          animation:ticket28 16s linear infinite;
        }
        .ticket29 {
          animation:ticket29 16s linear infinite;
        }
        .ticket30 {
          animation:ticket30 16s linear infinite;
        }
        .ticket31 {
          animation:ticket31 16s linear infinite;
        }
        .ticket32 {
          animation:ticket32 16s linear infinite;
        }
        .ticket33 {
          animation:ticket33 16s linear infinite;
        }
        .ticket34 {
          animation:ticket34 16s linear infinite;
        }
        .ticket35 {
          animation:ticket35 16s linear infinite;
        }
        .ticket36 {
          animation:ticket36 16s linear infinite;
        }
        .ticket37 {
          animation:ticket37 16s linear infinite;
        }
        .ticket38 {
          animation:ticket38 16s linear infinite;
        }
        .ticket39 {
          animation:ticket39 16s linear infinite;
        }
        @keyframes ticket00 {
          0% {
            opacity:1;
          }
          0.694% {
            opacity:1;
          }
          1.389% {
            opacity:1;
          }
          2.083% {
            opacity:1;
          }
          2.778% {
            opacity:1;
          }
          3.472% {
            opacity:1;
          }
          4.167% {
            opacity:1;
          }
          4.861% {
            opacity:1;
          }
          5.556% {
            opacity:1;
          }
          6.25% {
            opacity:1;
          }
          6.944% {
            opacity:1;
          }
          7.639% {
            opacity:1;
          }
          8.333% {
            opacity:1;
          }
          9.028% {
            opacity:1;
          }
          9.722% {
            opacity:1;
          }
          10.417% {
            opacity:1;
          }
          11.111% {
            opacity:1;
          }
          11.806% {
            opacity:1;
          }
          12.5% {
            opacity:1;
          }
          13.194% {
            opacity:1;
          }
          13.889% {
            opacity:1;
          }
          14.583% {
            opacity:1;
          }
          15.278% {
            opacity:1;
          }
          15.972% {
            opacity:1;
          }
          16.667% {
            opacity:1;
          }
          17.361% {
            opacity:1;
          }
          18.056% {
            opacity:1;
          }
          18.75% {
            opacity:1;
          }
          19.444% {
            opacity:1;
          }
          20.139% {
            opacity:1;
          }
          20.833% {
            opacity:1;
          }
          21.528% {
            opacity:1;
          }
          22.222% {
            opacity:1;
          }
          22.917% {
            opacity:1;
          }
          23.611% {
            opacity:1;
          }
          24.306% {
            opacity:1;
          }
          25% {
            opacity:1;
          }
          25.694% {
            opacity:1;
          }
          26.389% {
            opacity:1;
          }
          27.083% {
            opacity:1;
          }
          27.778% {
            opacity:1;
          }
          28.472% {
            opacity:1;
          }
          29.167% {
            opacity:1;
          }
          29.861% {
            opacity:1;
          }
          30.556% {
            opacity:1;
          }
          31.25% {
            opacity:1;
          }
          31.944% {
            opacity:1;
          }
          32.639% {
            opacity:1;
          }
          33.333% {
            opacity:1;
          }
          34.028% {
            opacity:1;
          }
          34.722% {
            opacity:1;
          }
          35.417% {
            opacity:1;
          }
          36.111% {
            opacity:1;
          }
          36.806% {
            opacity:1;
          }
          37.5% {
            opacity:1;
          }
          38.194% {
            opacity:1;
          }
          38.889% {
            opacity:1;
          }
          39.583% {
            opacity:1;
          }
          40.278% {
            opacity:1;
          }
          40.972% {
            opacity:1;
          }
          41.667% {
            opacity:1;
          }
          42.361% {
            opacity:1;
          }
          43.056% {
            opacity:1;
          }
          43.75% {
            opacity:1;
          }
          44.444% {
            opacity:1;
          }
          45.139% {
            opacity:1;
          }
          45.833% {
            opacity:1;
          }
          46.528% {
            opacity:1;
          }
          47.222% {
            opacity:1;
          }
          47.917% {
            opacity:1;
          }
          48.611% {
            opacity:1;
          }
          49.306% {
            opacity:1;
          }
          50% {
            opacity:1;
          }
          50.694% {
            opacity:1;
          }
          51.389% {
            opacity:1;
          }
          52.083% {
            opacity:1;
          }
          52.778% {
            opacity:1;
          }
          53.472% {
            opacity:1;
          }
          54.167% {
            opacity:1;
          }
          54.861% {
            opacity:1;
          }
          55.556% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          56.944% {
            opacity:1;
          }
          57.639% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          59.028% {
            opacity:1;
          }
          59.722% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          61.111% {
            opacity:1;
          }
          61.806% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          63.194% {
            opacity:1;
          }
          63.889% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          65.278% {
            opacity:1;
          }
          65.972% {
            opacity:1;
          }
          66.667% {
            opacity:1;
          }
          67.361% {
            opacity:1;
          }
          68.056% {
            opacity:1;
          }
          68.75% {
            opacity:1;
          }
          69.444% {
            opacity:1;
          }
          70.139% {
            opacity:1;
          }
          70.833% {
            opacity:1;
          }
          71.528% {
            opacity:1;
          }
          72.222% {
            opacity:1;
          }
          72.917% {
            opacity:1;
          }
          73.611% {
            opacity:1;
          }
          74.306% {
            opacity:1;
          }
          75% {
            opacity:1;
          }
          75.694% {
            opacity:1;
          }
          76.389% {
            opacity:1;
          }
          77.083% {
            opacity:1;
          }
          77.778% {
            opacity:1;
          }
          78.472% {
            opacity:1;
          }
          79.167% {
            opacity:1;
          }
          79.861% {
            opacity:1;
          }
          80.556% {
            opacity:1;
          }
          81.25% {
            opacity:1;
          }
          81.944% {
            opacity:1;
          }
          82.639% {
            opacity:1;
          }
          83.333% {
            opacity:1;
          }
          84.028% {
            opacity:1;
          }
          84.722% {
            opacity:1;
          }
          85.417% {
            opacity:1;
          }
          86.111% {
            opacity:1;
          }
          86.806% {
            opacity:1;
          }
          87.5% {
            opacity:1;
          }
          88.194% {
            opacity:1;
          }
          88.889% {
            opacity:1;
          }
          89.583% {
            opacity:1;
          }
          90.278% {
            opacity:1;
          }
          90.972% {
            opacity:1;
          }
          91.667% {
            opacity:1;
          }
          92.361% {
            opacity:1;
          }
          93.056% {
            opacity:1;
          }
          93.75% {
            opacity:1;
          }
          94.444% {
            opacity:1;
          }
          95.139% {
            opacity:1;
          }
          95.833% {
            opacity:1;
          }
          96.528% {
            opacity:1;
          }
          97.222% {
            opacity:1;
          }
          97.917% {
            opacity:1;
          }
          98.611% {
            opacity:1;
          }
          99.306% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes ticket01 {
          0% {
            opacity:1;
          }
          0.694% {
            opacity:1;
          }
          1.389% {
            opacity:1;
          }
          2.083% {
            opacity:1;
          }
          2.778% {
            opacity:1;
          }
          3.472% {
            opacity:1;
          }
          4.167% {
            opacity:1;
          }
          4.861% {
            opacity:1;
          }
          5.556% {
            opacity:1;
          }
          6.25% {
            opacity:1;
          }
          6.944% {
            opacity:1;
          }
          7.639% {
            opacity:1;
          }
          8.333% {
            opacity:1;
          }
          9.028% {
            opacity:1;
          }
          9.722% {
            opacity:1;
          }
          10.417% {
            opacity:1;
          }
          11.111% {
            opacity:1;
          }
          11.806% {
            opacity:1;
          }
          12.5% {
            opacity:1;
          }
          13.194% {
            opacity:1;
          }
          13.889% {
            opacity:1;
          }
          14.583% {
            opacity:1;
          }
          15.278% {
            opacity:1;
          }
          15.972% {
            opacity:1;
          }
          16.667% {
            opacity:1;
          }
          17.361% {
            opacity:1;
          }
          18.056% {
            opacity:1;
          }
          18.75% {
            opacity:1;
          }
          19.444% {
            opacity:1;
          }
          20.139% {
            opacity:1;
          }
          20.833% {
            opacity:1;
          }
          21.528% {
            opacity:1;
          }
          22.222% {
            opacity:1;
          }
          22.917% {
            opacity:1;
          }
          23.611% {
            opacity:1;
          }
          24.306% {
            opacity:1;
          }
          25% {
            opacity:1;
          }
          25.694% {
            opacity:1;
          }
          26.389% {
            opacity:1;
          }
          27.083% {
            opacity:1;
          }
          27.778% {
            opacity:1;
          }
          28.472% {
            opacity:1;
          }
          29.167% {
            opacity:1;
          }
          29.861% {
            opacity:1;
          }
          30.556% {
            opacity:1;
          }
          31.25% {
            opacity:1;
          }
          31.944% {
            opacity:1;
          }
          32.639% {
            opacity:1;
          }
          33.333% {
            opacity:1;
          }
          34.028% {
            opacity:1;
          }
          34.722% {
            opacity:1;
          }
          35.417% {
            opacity:1;
          }
          36.111% {
            opacity:1;
          }
          36.806% {
            opacity:1;
          }
          37.5% {
            opacity:1;
          }
          38.194% {
            opacity:1;
          }
          38.889% {
            opacity:1;
          }
          39.583% {
            opacity:1;
          }
          40.278% {
            opacity:1;
          }
          40.972% {
            opacity:1;
          }
          41.667% {
            opacity:1;
          }
          42.361% {
            opacity:1;
          }
          43.056% {
            opacity:1;
          }
          43.75% {
            opacity:1;
          }
          44.444% {
            opacity:1;
          }
          45.139% {
            opacity:1;
          }
          45.833% {
            opacity:1;
          }
          46.528% {
            opacity:1;
          }
          47.222% {
            opacity:1;
          }
          47.917% {
            opacity:1;
          }
          48.611% {
            opacity:1;
          }
          49.306% {
            opacity:1;
          }
          50% {
            opacity:1;
          }
          50.694% {
            opacity:1;
          }
          51.389% {
            opacity:1;
          }
          52.083% {
            opacity:1;
          }
          52.778% {
            opacity:1;
          }
          53.472% {
            opacity:1;
          }
          54.167% {
            opacity:1;
          }
          54.861% {
            opacity:1;
          }
          55.556% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          56.944% {
            opacity:1;
          }
          57.639% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          59.028% {
            opacity:1;
          }
          59.722% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          61.111% {
            opacity:1;
          }
          61.806% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          63.194% {
            opacity:1;
          }
          63.889% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          65.278% {
            opacity:1;
          }
          65.972% {
            opacity:1;
          }
          66.667% {
            opacity:1;
          }
          67.361% {
            opacity:1;
          }
          68.056% {
            opacity:1;
          }
          68.75% {
            opacity:1;
          }
          69.444% {
            opacity:1;
          }
          70.139% {
            opacity:1;
          }
          70.833% {
            opacity:1;
          }
          71.528% {
            opacity:1;
          }
          72.222% {
            opacity:1;
          }
          72.917% {
            opacity:1;
          }
          73.611% {
            opacity:1;
          }
          74.306% {
            opacity:1;
          }
          75% {
            opacity:1;
          }
          75.694% {
            opacity:1;
          }
          76.389% {
            opacity:1;
          }
          77.083% {
            opacity:1;
          }
          77.778% {
            opacity:1;
          }
          78.472% {
            opacity:1;
          }
          79.167% {
            opacity:1;
          }
          79.861% {
            opacity:1;
          }
          80.556% {
            opacity:1;
          }
          81.25% {
            opacity:1;
          }
          81.944% {
            opacity:1;
          }
          82.639% {
            opacity:1;
          }
          83.333% {
            opacity:1;
          }
          84.028% {
            opacity:1;
          }
          84.722% {
            opacity:1;
          }
          85.417% {
            opacity:1;
          }
          86.111% {
            opacity:1;
          }
          86.806% {
            opacity:1;
          }
          87.5% {
            opacity:1;
          }
          88.194% {
            opacity:1;
          }
          88.889% {
            opacity:1;
          }
          89.583% {
            opacity:1;
          }
          90.278% {
            opacity:1;
          }
          90.972% {
            opacity:1;
          }
          91.667% {
            opacity:1;
          }
          92.361% {
            opacity:1;
          }
          93.056% {
            opacity:1;
          }
          93.75% {
            opacity:1;
          }
          94.444% {
            opacity:1;
          }
          95.139% {
            opacity:1;
          }
          95.833% {
            opacity:1;
          }
          96.528% {
            opacity:1;
          }
          97.222% {
            opacity:1;
          }
          97.917% {
            opacity:1;
          }
          98.611% {
            opacity:1;
          }
          99.306% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes ticket02 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:1;
          }
          22.917% {
            opacity:1;
          }
          23.611% {
            opacity:1;
          }
          24.306% {
            opacity:1;
          }
          25% {
            opacity:1;
          }
          25.694% {
            opacity:1;
          }
          26.389% {
            opacity:1;
          }
          27.083% {
            opacity:1;
          }
          27.778% {
            opacity:1;
          }
          28.472% {
            opacity:1;
          }
          29.167% {
            opacity:1;
          }
          29.861% {
            opacity:1;
          }
          30.556% {
            opacity:1;
          }
          31.25% {
            opacity:1;
          }
          31.944% {
            opacity:1;
          }
          32.639% {
            opacity:1;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket03 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket04 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket05 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket06 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket07 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket08 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket09 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket10 {
          0% {
            opacity:1;
          }
          0.694% {
            opacity:1;
          }
          1.389% {
            opacity:1;
          }
          2.083% {
            opacity:1;
          }
          2.778% {
            opacity:1;
          }
          3.472% {
            opacity:1;
          }
          4.167% {
            opacity:1;
          }
          4.861% {
            opacity:1;
          }
          5.556% {
            opacity:1;
          }
          6.25% {
            opacity:1;
          }
          6.944% {
            opacity:1;
          }
          7.639% {
            opacity:1;
          }
          8.333% {
            opacity:1;
          }
          9.028% {
            opacity:1;
          }
          9.722% {
            opacity:1;
          }
          10.417% {
            opacity:1;
          }
          11.111% {
            opacity:1;
          }
          11.806% {
            opacity:1;
          }
          12.5% {
            opacity:1;
          }
          13.194% {
            opacity:1;
          }
          13.889% {
            opacity:1;
          }
          14.583% {
            opacity:1;
          }
          15.278% {
            opacity:1;
          }
          15.972% {
            opacity:1;
          }
          16.667% {
            opacity:1;
          }
          17.361% {
            opacity:1;
          }
          18.056% {
            opacity:1;
          }
          18.75% {
            opacity:1;
          }
          19.444% {
            opacity:1;
          }
          20.139% {
            opacity:1;
          }
          20.833% {
            opacity:1;
          }
          21.528% {
            opacity:1;
          }
          22.222% {
            opacity:1;
          }
          22.917% {
            opacity:1;
          }
          23.611% {
            opacity:1;
          }
          24.306% {
            opacity:1;
          }
          25% {
            opacity:1;
          }
          25.694% {
            opacity:1;
          }
          26.389% {
            opacity:1;
          }
          27.083% {
            opacity:1;
          }
          27.778% {
            opacity:1;
          }
          28.472% {
            opacity:1;
          }
          29.167% {
            opacity:1;
          }
          29.861% {
            opacity:1;
          }
          30.556% {
            opacity:1;
          }
          31.25% {
            opacity:1;
          }
          31.944% {
            opacity:1;
          }
          32.639% {
            opacity:1;
          }
          33.333% {
            opacity:1;
          }
          34.028% {
            opacity:1;
          }
          34.722% {
            opacity:1;
          }
          35.417% {
            opacity:1;
          }
          36.111% {
            opacity:1;
          }
          36.806% {
            opacity:1;
          }
          37.5% {
            opacity:1;
          }
          38.194% {
            opacity:1;
          }
          38.889% {
            opacity:1;
          }
          39.583% {
            opacity:1;
          }
          40.278% {
            opacity:1;
          }
          40.972% {
            opacity:1;
          }
          41.667% {
            opacity:1;
          }
          42.361% {
            opacity:1;
          }
          43.056% {
            opacity:1;
          }
          43.75% {
            opacity:1;
          }
          44.444% {
            opacity:1;
          }
          45.139% {
            opacity:1;
          }
          45.833% {
            opacity:1;
          }
          46.528% {
            opacity:1;
          }
          47.222% {
            opacity:1;
          }
          47.917% {
            opacity:1;
          }
          48.611% {
            opacity:1;
          }
          49.306% {
            opacity:1;
          }
          50% {
            opacity:1;
          }
          50.694% {
            opacity:1;
          }
          51.389% {
            opacity:1;
          }
          52.083% {
            opacity:1;
          }
          52.778% {
            opacity:1;
          }
          53.472% {
            opacity:1;
          }
          54.167% {
            opacity:1;
          }
          54.861% {
            opacity:1;
          }
          55.556% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          56.944% {
            opacity:1;
          }
          57.639% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          59.028% {
            opacity:1;
          }
          59.722% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          61.111% {
            opacity:1;
          }
          61.806% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          63.194% {
            opacity:1;
          }
          63.889% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          65.278% {
            opacity:1;
          }
          65.972% {
            opacity:1;
          }
          66.667% {
            opacity:1;
          }
          67.361% {
            opacity:1;
          }
          68.056% {
            opacity:1;
          }
          68.75% {
            opacity:1;
          }
          69.444% {
            opacity:1;
          }
          70.139% {
            opacity:1;
          }
          70.833% {
            opacity:1;
          }
          71.528% {
            opacity:1;
          }
          72.222% {
            opacity:1;
          }
          72.917% {
            opacity:1;
          }
          73.611% {
            opacity:1;
          }
          74.306% {
            opacity:1;
          }
          75% {
            opacity:1;
          }
          75.694% {
            opacity:1;
          }
          76.389% {
            opacity:1;
          }
          77.083% {
            opacity:1;
          }
          77.778% {
            opacity:1;
          }
          78.472% {
            opacity:1;
          }
          79.167% {
            opacity:1;
          }
          79.861% {
            opacity:1;
          }
          80.556% {
            opacity:1;
          }
          81.25% {
            opacity:1;
          }
          81.944% {
            opacity:1;
          }
          82.639% {
            opacity:1;
          }
          83.333% {
            opacity:1;
          }
          84.028% {
            opacity:1;
          }
          84.722% {
            opacity:1;
          }
          85.417% {
            opacity:1;
          }
          86.111% {
            opacity:1;
          }
          86.806% {
            opacity:1;
          }
          87.5% {
            opacity:1;
          }
          88.194% {
            opacity:1;
          }
          88.889% {
            opacity:1;
          }
          89.583% {
            opacity:1;
          }
          90.278% {
            opacity:1;
          }
          90.972% {
            opacity:1;
          }
          91.667% {
            opacity:1;
          }
          92.361% {
            opacity:1;
          }
          93.056% {
            opacity:1;
          }
          93.75% {
            opacity:1;
          }
          94.444% {
            opacity:1;
          }
          95.139% {
            opacity:1;
          }
          95.833% {
            opacity:1;
          }
          96.528% {
            opacity:1;
          }
          97.222% {
            opacity:1;
          }
          97.917% {
            opacity:1;
          }
          98.611% {
            opacity:1;
          }
          99.306% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes ticket11 {
          0% {
            opacity:1;
          }
          0.694% {
            opacity:1;
          }
          1.389% {
            opacity:1;
          }
          2.083% {
            opacity:1;
          }
          2.778% {
            opacity:1;
          }
          3.472% {
            opacity:1;
          }
          4.167% {
            opacity:1;
          }
          4.861% {
            opacity:1;
          }
          5.556% {
            opacity:1;
          }
          6.25% {
            opacity:1;
          }
          6.944% {
            opacity:1;
          }
          7.639% {
            opacity:1;
          }
          8.333% {
            opacity:1;
          }
          9.028% {
            opacity:1;
          }
          9.722% {
            opacity:1;
          }
          10.417% {
            opacity:1;
          }
          11.111% {
            opacity:1;
          }
          11.806% {
            opacity:1;
          }
          12.5% {
            opacity:1;
          }
          13.194% {
            opacity:1;
          }
          13.889% {
            opacity:1;
          }
          14.583% {
            opacity:1;
          }
          15.278% {
            opacity:1;
          }
          15.972% {
            opacity:1;
          }
          16.667% {
            opacity:1;
          }
          17.361% {
            opacity:1;
          }
          18.056% {
            opacity:1;
          }
          18.75% {
            opacity:1;
          }
          19.444% {
            opacity:1;
          }
          20.139% {
            opacity:1;
          }
          20.833% {
            opacity:1;
          }
          21.528% {
            opacity:1;
          }
          22.222% {
            opacity:1;
          }
          22.917% {
            opacity:1;
          }
          23.611% {
            opacity:1;
          }
          24.306% {
            opacity:1;
          }
          25% {
            opacity:1;
          }
          25.694% {
            opacity:1;
          }
          26.389% {
            opacity:1;
          }
          27.083% {
            opacity:1;
          }
          27.778% {
            opacity:1;
          }
          28.472% {
            opacity:1;
          }
          29.167% {
            opacity:1;
          }
          29.861% {
            opacity:1;
          }
          30.556% {
            opacity:1;
          }
          31.25% {
            opacity:1;
          }
          31.944% {
            opacity:1;
          }
          32.639% {
            opacity:1;
          }
          33.333% {
            opacity:1;
          }
          34.028% {
            opacity:1;
          }
          34.722% {
            opacity:1;
          }
          35.417% {
            opacity:1;
          }
          36.111% {
            opacity:1;
          }
          36.806% {
            opacity:1;
          }
          37.5% {
            opacity:1;
          }
          38.194% {
            opacity:1;
          }
          38.889% {
            opacity:1;
          }
          39.583% {
            opacity:1;
          }
          40.278% {
            opacity:1;
          }
          40.972% {
            opacity:1;
          }
          41.667% {
            opacity:1;
          }
          42.361% {
            opacity:1;
          }
          43.056% {
            opacity:1;
          }
          43.75% {
            opacity:1;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          56.944% {
            opacity:1;
          }
          57.639% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          59.028% {
            opacity:1;
          }
          59.722% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          61.111% {
            opacity:1;
          }
          61.806% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          63.194% {
            opacity:1;
          }
          63.889% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          65.278% {
            opacity:1;
          }
          65.972% {
            opacity:1;
          }
          66.667% {
            opacity:1;
          }
          67.361% {
            opacity:1;
          }
          68.056% {
            opacity:1;
          }
          68.75% {
            opacity:1;
          }
          69.444% {
            opacity:1;
          }
          70.139% {
            opacity:1;
          }
          70.833% {
            opacity:1;
          }
          71.528% {
            opacity:1;
          }
          72.222% {
            opacity:1;
          }
          72.917% {
            opacity:1;
          }
          73.611% {
            opacity:1;
          }
          74.306% {
            opacity:1;
          }
          75% {
            opacity:1;
          }
          75.694% {
            opacity:1;
          }
          76.389% {
            opacity:1;
          }
          77.083% {
            opacity:1;
          }
          77.778% {
            opacity:1;
          }
          78.472% {
            opacity:1;
          }
          79.167% {
            opacity:1;
          }
          79.861% {
            opacity:1;
          }
          80.556% {
            opacity:1;
          }
          81.25% {
            opacity:1;
          }
          81.944% {
            opacity:1;
          }
          82.639% {
            opacity:1;
          }
          83.333% {
            opacity:1;
          }
          84.028% {
            opacity:1;
          }
          84.722% {
            opacity:1;
          }
          85.417% {
            opacity:1;
          }
          86.111% {
            opacity:1;
          }
          86.806% {
            opacity:1;
          }
          87.5% {
            opacity:1;
          }
          88.194% {
            opacity:1;
          }
          88.889% {
            opacity:1;
          }
          89.583% {
            opacity:1;
          }
          90.278% {
            opacity:1;
          }
          90.972% {
            opacity:1;
          }
          91.667% {
            opacity:1;
          }
          92.361% {
            opacity:1;
          }
          93.056% {
            opacity:1;
          }
          93.75% {
            opacity:1;
          }
          94.444% {
            opacity:1;
          }
          95.139% {
            opacity:1;
          }
          95.833% {
            opacity:1;
          }
          96.528% {
            opacity:1;
          }
          97.222% {
            opacity:1;
          }
          97.917% {
            opacity:1;
          }
          98.611% {
            opacity:1;
          }
          99.306% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes ticket12 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:1;
          }
          34.028% {
            opacity:1;
          }
          34.722% {
            opacity:1;
          }
          35.417% {
            opacity:1;
          }
          36.111% {
            opacity:1;
          }
          36.806% {
            opacity:1;
          }
          37.5% {
            opacity:1;
          }
          38.194% {
            opacity:1;
          }
          38.889% {
            opacity:1;
          }
          39.583% {
            opacity:1;
          }
          40.278% {
            opacity:1;
          }
          40.972% {
            opacity:1;
          }
          41.667% {
            opacity:1;
          }
          42.361% {
            opacity:1;
          }
          43.056% {
            opacity:1;
          }
          43.75% {
            opacity:1;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket13 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:1;
          }
          34.028% {
            opacity:1;
          }
          34.722% {
            opacity:1;
          }
          35.417% {
            opacity:1;
          }
          36.111% {
            opacity:1;
          }
          36.806% {
            opacity:1;
          }
          37.5% {
            opacity:1;
          }
          38.194% {
            opacity:1;
          }
          38.889% {
            opacity:1;
          }
          39.583% {
            opacity:1;
          }
          40.278% {
            opacity:1;
          }
          40.972% {
            opacity:1;
          }
          41.667% {
            opacity:1;
          }
          42.361% {
            opacity:1;
          }
          43.056% {
            opacity:1;
          }
          43.75% {
            opacity:1;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket14 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket15 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket16 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket17 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket18 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket19 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket20 {
          0% {
            opacity:1;
          }
          0.694% {
            opacity:1;
          }
          1.389% {
            opacity:1;
          }
          2.083% {
            opacity:1;
          }
          2.778% {
            opacity:1;
          }
          3.472% {
            opacity:1;
          }
          4.167% {
            opacity:1;
          }
          4.861% {
            opacity:1;
          }
          5.556% {
            opacity:1;
          }
          6.25% {
            opacity:1;
          }
          6.944% {
            opacity:1;
          }
          7.639% {
            opacity:1;
          }
          8.333% {
            opacity:1;
          }
          9.028% {
            opacity:1;
          }
          9.722% {
            opacity:1;
          }
          10.417% {
            opacity:1;
          }
          11.111% {
            opacity:1;
          }
          11.806% {
            opacity:1;
          }
          12.5% {
            opacity:1;
          }
          13.194% {
            opacity:1;
          }
          13.889% {
            opacity:1;
          }
          14.583% {
            opacity:1;
          }
          15.278% {
            opacity:1;
          }
          15.972% {
            opacity:1;
          }
          16.667% {
            opacity:1;
          }
          17.361% {
            opacity:1;
          }
          18.056% {
            opacity:1;
          }
          18.75% {
            opacity:1;
          }
          19.444% {
            opacity:1;
          }
          20.139% {
            opacity:1;
          }
          20.833% {
            opacity:1;
          }
          21.528% {
            opacity:1;
          }
          22.222% {
            opacity:1;
          }
          22.917% {
            opacity:1;
          }
          23.611% {
            opacity:1;
          }
          24.306% {
            opacity:1;
          }
          25% {
            opacity:1;
          }
          25.694% {
            opacity:1;
          }
          26.389% {
            opacity:1;
          }
          27.083% {
            opacity:1;
          }
          27.778% {
            opacity:1;
          }
          28.472% {
            opacity:1;
          }
          29.167% {
            opacity:1;
          }
          29.861% {
            opacity:1;
          }
          30.556% {
            opacity:1;
          }
          31.25% {
            opacity:1;
          }
          31.944% {
            opacity:1;
          }
          32.639% {
            opacity:1;
          }
          33.333% {
            opacity:1;
          }
          34.028% {
            opacity:1;
          }
          34.722% {
            opacity:1;
          }
          35.417% {
            opacity:1;
          }
          36.111% {
            opacity:1;
          }
          36.806% {
            opacity:1;
          }
          37.5% {
            opacity:1;
          }
          38.194% {
            opacity:1;
          }
          38.889% {
            opacity:1;
          }
          39.583% {
            opacity:1;
          }
          40.278% {
            opacity:1;
          }
          40.972% {
            opacity:1;
          }
          41.667% {
            opacity:1;
          }
          42.361% {
            opacity:1;
          }
          43.056% {
            opacity:1;
          }
          43.75% {
            opacity:1;
          }
          44.444% {
            opacity:1;
          }
          45.139% {
            opacity:1;
          }
          45.833% {
            opacity:1;
          }
          46.528% {
            opacity:1;
          }
          47.222% {
            opacity:1;
          }
          47.917% {
            opacity:1;
          }
          48.611% {
            opacity:1;
          }
          49.306% {
            opacity:1;
          }
          50% {
            opacity:1;
          }
          50.694% {
            opacity:1;
          }
          51.389% {
            opacity:1;
          }
          52.083% {
            opacity:1;
          }
          52.778% {
            opacity:1;
          }
          53.472% {
            opacity:1;
          }
          54.167% {
            opacity:1;
          }
          54.861% {
            opacity:1;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:1;
          }
          67.361% {
            opacity:1;
          }
          68.056% {
            opacity:1;
          }
          68.75% {
            opacity:1;
          }
          69.444% {
            opacity:1;
          }
          70.139% {
            opacity:1;
          }
          70.833% {
            opacity:1;
          }
          71.528% {
            opacity:1;
          }
          72.222% {
            opacity:1;
          }
          72.917% {
            opacity:1;
          }
          73.611% {
            opacity:1;
          }
          74.306% {
            opacity:1;
          }
          75% {
            opacity:1;
          }
          75.694% {
            opacity:1;
          }
          76.389% {
            opacity:1;
          }
          77.083% {
            opacity:1;
          }
          77.778% {
            opacity:1;
          }
          78.472% {
            opacity:1;
          }
          79.167% {
            opacity:1;
          }
          79.861% {
            opacity:1;
          }
          80.556% {
            opacity:1;
          }
          81.25% {
            opacity:1;
          }
          81.944% {
            opacity:1;
          }
          82.639% {
            opacity:1;
          }
          83.333% {
            opacity:1;
          }
          84.028% {
            opacity:1;
          }
          84.722% {
            opacity:1;
          }
          85.417% {
            opacity:1;
          }
          86.111% {
            opacity:1;
          }
          86.806% {
            opacity:1;
          }
          87.5% {
            opacity:1;
          }
          88.194% {
            opacity:1;
          }
          88.889% {
            opacity:1;
          }
          89.583% {
            opacity:1;
          }
          90.278% {
            opacity:1;
          }
          90.972% {
            opacity:1;
          }
          91.667% {
            opacity:1;
          }
          92.361% {
            opacity:1;
          }
          93.056% {
            opacity:1;
          }
          93.75% {
            opacity:1;
          }
          94.444% {
            opacity:1;
          }
          95.139% {
            opacity:1;
          }
          95.833% {
            opacity:1;
          }
          96.528% {
            opacity:1;
          }
          97.222% {
            opacity:1;
          }
          97.917% {
            opacity:1;
          }
          98.611% {
            opacity:1;
          }
          99.306% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes ticket21 {
          0% {
            opacity:1;
          }
          0.694% {
            opacity:1;
          }
          1.389% {
            opacity:1;
          }
          2.083% {
            opacity:1;
          }
          2.778% {
            opacity:1;
          }
          3.472% {
            opacity:1;
          }
          4.167% {
            opacity:1;
          }
          4.861% {
            opacity:1;
          }
          5.556% {
            opacity:1;
          }
          6.25% {
            opacity:1;
          }
          6.944% {
            opacity:1;
          }
          7.639% {
            opacity:1;
          }
          8.333% {
            opacity:1;
          }
          9.028% {
            opacity:1;
          }
          9.722% {
            opacity:1;
          }
          10.417% {
            opacity:1;
          }
          11.111% {
            opacity:1;
          }
          11.806% {
            opacity:1;
          }
          12.5% {
            opacity:1;
          }
          13.194% {
            opacity:1;
          }
          13.889% {
            opacity:1;
          }
          14.583% {
            opacity:1;
          }
          15.278% {
            opacity:1;
          }
          15.972% {
            opacity:1;
          }
          16.667% {
            opacity:1;
          }
          17.361% {
            opacity:1;
          }
          18.056% {
            opacity:1;
          }
          18.75% {
            opacity:1;
          }
          19.444% {
            opacity:1;
          }
          20.139% {
            opacity:1;
          }
          20.833% {
            opacity:1;
          }
          21.528% {
            opacity:1;
          }
          22.222% {
            opacity:1;
          }
          22.917% {
            opacity:1;
          }
          23.611% {
            opacity:1;
          }
          24.306% {
            opacity:1;
          }
          25% {
            opacity:1;
          }
          25.694% {
            opacity:1;
          }
          26.389% {
            opacity:1;
          }
          27.083% {
            opacity:1;
          }
          27.778% {
            opacity:1;
          }
          28.472% {
            opacity:1;
          }
          29.167% {
            opacity:1;
          }
          29.861% {
            opacity:1;
          }
          30.556% {
            opacity:1;
          }
          31.25% {
            opacity:1;
          }
          31.944% {
            opacity:1;
          }
          32.639% {
            opacity:1;
          }
          33.333% {
            opacity:1;
          }
          34.028% {
            opacity:1;
          }
          34.722% {
            opacity:1;
          }
          35.417% {
            opacity:1;
          }
          36.111% {
            opacity:1;
          }
          36.806% {
            opacity:1;
          }
          37.5% {
            opacity:1;
          }
          38.194% {
            opacity:1;
          }
          38.889% {
            opacity:1;
          }
          39.583% {
            opacity:1;
          }
          40.278% {
            opacity:1;
          }
          40.972% {
            opacity:1;
          }
          41.667% {
            opacity:1;
          }
          42.361% {
            opacity:1;
          }
          43.056% {
            opacity:1;
          }
          43.75% {
            opacity:1;
          }
          44.444% {
            opacity:1;
          }
          45.139% {
            opacity:1;
          }
          45.833% {
            opacity:1;
          }
          46.528% {
            opacity:1;
          }
          47.222% {
            opacity:1;
          }
          47.917% {
            opacity:1;
          }
          48.611% {
            opacity:1;
          }
          49.306% {
            opacity:1;
          }
          50% {
            opacity:1;
          }
          50.694% {
            opacity:1;
          }
          51.389% {
            opacity:1;
          }
          52.083% {
            opacity:1;
          }
          52.778% {
            opacity:1;
          }
          53.472% {
            opacity:1;
          }
          54.167% {
            opacity:1;
          }
          54.861% {
            opacity:1;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:1;
          }
          67.361% {
            opacity:1;
          }
          68.056% {
            opacity:1;
          }
          68.75% {
            opacity:1;
          }
          69.444% {
            opacity:1;
          }
          70.139% {
            opacity:1;
          }
          70.833% {
            opacity:1;
          }
          71.528% {
            opacity:1;
          }
          72.222% {
            opacity:1;
          }
          72.917% {
            opacity:1;
          }
          73.611% {
            opacity:1;
          }
          74.306% {
            opacity:1;
          }
          75% {
            opacity:1;
          }
          75.694% {
            opacity:1;
          }
          76.389% {
            opacity:1;
          }
          77.083% {
            opacity:1;
          }
          77.778% {
            opacity:1;
          }
          78.472% {
            opacity:1;
          }
          79.167% {
            opacity:1;
          }
          79.861% {
            opacity:1;
          }
          80.556% {
            opacity:1;
          }
          81.25% {
            opacity:1;
          }
          81.944% {
            opacity:1;
          }
          82.639% {
            opacity:1;
          }
          83.333% {
            opacity:1;
          }
          84.028% {
            opacity:1;
          }
          84.722% {
            opacity:1;
          }
          85.417% {
            opacity:1;
          }
          86.111% {
            opacity:1;
          }
          86.806% {
            opacity:1;
          }
          87.5% {
            opacity:1;
          }
          88.194% {
            opacity:1;
          }
          88.889% {
            opacity:1;
          }
          89.583% {
            opacity:1;
          }
          90.278% {
            opacity:1;
          }
          90.972% {
            opacity:1;
          }
          91.667% {
            opacity:1;
          }
          92.361% {
            opacity:1;
          }
          93.056% {
            opacity:1;
          }
          93.75% {
            opacity:1;
          }
          94.444% {
            opacity:1;
          }
          95.139% {
            opacity:1;
          }
          95.833% {
            opacity:1;
          }
          96.528% {
            opacity:1;
          }
          97.222% {
            opacity:1;
          }
          97.917% {
            opacity:1;
          }
          98.611% {
            opacity:1;
          }
          99.306% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes ticket22 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:1;
          }
          45.139% {
            opacity:1;
          }
          45.833% {
            opacity:1;
          }
          46.528% {
            opacity:1;
          }
          47.222% {
            opacity:1;
          }
          47.917% {
            opacity:1;
          }
          48.611% {
            opacity:1;
          }
          49.306% {
            opacity:1;
          }
          50% {
            opacity:1;
          }
          50.694% {
            opacity:1;
          }
          51.389% {
            opacity:1;
          }
          52.083% {
            opacity:1;
          }
          52.778% {
            opacity:1;
          }
          53.472% {
            opacity:1;
          }
          54.167% {
            opacity:1;
          }
          54.861% {
            opacity:1;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:1;
          }
          67.361% {
            opacity:1;
          }
          68.056% {
            opacity:1;
          }
          68.75% {
            opacity:1;
          }
          69.444% {
            opacity:1;
          }
          70.139% {
            opacity:1;
          }
          70.833% {
            opacity:1;
          }
          71.528% {
            opacity:1;
          }
          72.222% {
            opacity:1;
          }
          72.917% {
            opacity:1;
          }
          73.611% {
            opacity:1;
          }
          74.306% {
            opacity:1;
          }
          75% {
            opacity:1;
          }
          75.694% {
            opacity:1;
          }
          76.389% {
            opacity:1;
          }
          77.083% {
            opacity:1;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket23 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:1;
          }
          45.139% {
            opacity:1;
          }
          45.833% {
            opacity:1;
          }
          46.528% {
            opacity:1;
          }
          47.222% {
            opacity:1;
          }
          47.917% {
            opacity:1;
          }
          48.611% {
            opacity:1;
          }
          49.306% {
            opacity:1;
          }
          50% {
            opacity:1;
          }
          50.694% {
            opacity:1;
          }
          51.389% {
            opacity:1;
          }
          52.083% {
            opacity:1;
          }
          52.778% {
            opacity:1;
          }
          53.472% {
            opacity:1;
          }
          54.167% {
            opacity:1;
          }
          54.861% {
            opacity:1;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket24 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:1;
          }
          45.139% {
            opacity:1;
          }
          45.833% {
            opacity:1;
          }
          46.528% {
            opacity:1;
          }
          47.222% {
            opacity:1;
          }
          47.917% {
            opacity:1;
          }
          48.611% {
            opacity:1;
          }
          49.306% {
            opacity:1;
          }
          50% {
            opacity:1;
          }
          50.694% {
            opacity:1;
          }
          51.389% {
            opacity:1;
          }
          52.083% {
            opacity:1;
          }
          52.778% {
            opacity:1;
          }
          53.472% {
            opacity:1;
          }
          54.167% {
            opacity:1;
          }
          54.861% {
            opacity:1;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket25 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:1;
          }
          45.139% {
            opacity:1;
          }
          45.833% {
            opacity:1;
          }
          46.528% {
            opacity:1;
          }
          47.222% {
            opacity:1;
          }
          47.917% {
            opacity:1;
          }
          48.611% {
            opacity:1;
          }
          49.306% {
            opacity:1;
          }
          50% {
            opacity:1;
          }
          50.694% {
            opacity:1;
          }
          51.389% {
            opacity:1;
          }
          52.083% {
            opacity:1;
          }
          52.778% {
            opacity:1;
          }
          53.472% {
            opacity:1;
          }
          54.167% {
            opacity:1;
          }
          54.861% {
            opacity:1;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket26 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket27 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket28 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket29 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:0.04;
          }
          56.25% {
            opacity:0.04;
          }
          56.944% {
            opacity:0.04;
          }
          57.639% {
            opacity:0.04;
          }
          58.333% {
            opacity:0.04;
          }
          59.028% {
            opacity:0.04;
          }
          59.722% {
            opacity:0.04;
          }
          60.417% {
            opacity:0.04;
          }
          61.111% {
            opacity:0.04;
          }
          61.806% {
            opacity:0.04;
          }
          62.5% {
            opacity:0.04;
          }
          63.194% {
            opacity:0.04;
          }
          63.889% {
            opacity:0.04;
          }
          64.583% {
            opacity:0.04;
          }
          65.278% {
            opacity:0.04;
          }
          65.972% {
            opacity:0.04;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket30 {
          0% {
            opacity:1;
          }
          0.694% {
            opacity:1;
          }
          1.389% {
            opacity:1;
          }
          2.083% {
            opacity:1;
          }
          2.778% {
            opacity:1;
          }
          3.472% {
            opacity:1;
          }
          4.167% {
            opacity:1;
          }
          4.861% {
            opacity:1;
          }
          5.556% {
            opacity:1;
          }
          6.25% {
            opacity:1;
          }
          6.944% {
            opacity:1;
          }
          7.639% {
            opacity:1;
          }
          8.333% {
            opacity:1;
          }
          9.028% {
            opacity:1;
          }
          9.722% {
            opacity:1;
          }
          10.417% {
            opacity:1;
          }
          11.111% {
            opacity:1;
          }
          11.806% {
            opacity:1;
          }
          12.5% {
            opacity:1;
          }
          13.194% {
            opacity:1;
          }
          13.889% {
            opacity:1;
          }
          14.583% {
            opacity:1;
          }
          15.278% {
            opacity:1;
          }
          15.972% {
            opacity:1;
          }
          16.667% {
            opacity:1;
          }
          17.361% {
            opacity:1;
          }
          18.056% {
            opacity:1;
          }
          18.75% {
            opacity:1;
          }
          19.444% {
            opacity:1;
          }
          20.139% {
            opacity:1;
          }
          20.833% {
            opacity:1;
          }
          21.528% {
            opacity:1;
          }
          22.222% {
            opacity:1;
          }
          22.917% {
            opacity:1;
          }
          23.611% {
            opacity:1;
          }
          24.306% {
            opacity:1;
          }
          25% {
            opacity:1;
          }
          25.694% {
            opacity:1;
          }
          26.389% {
            opacity:1;
          }
          27.083% {
            opacity:1;
          }
          27.778% {
            opacity:1;
          }
          28.472% {
            opacity:1;
          }
          29.167% {
            opacity:1;
          }
          29.861% {
            opacity:1;
          }
          30.556% {
            opacity:1;
          }
          31.25% {
            opacity:1;
          }
          31.944% {
            opacity:1;
          }
          32.639% {
            opacity:1;
          }
          33.333% {
            opacity:1;
          }
          34.028% {
            opacity:1;
          }
          34.722% {
            opacity:1;
          }
          35.417% {
            opacity:1;
          }
          36.111% {
            opacity:1;
          }
          36.806% {
            opacity:1;
          }
          37.5% {
            opacity:1;
          }
          38.194% {
            opacity:1;
          }
          38.889% {
            opacity:1;
          }
          39.583% {
            opacity:1;
          }
          40.278% {
            opacity:1;
          }
          40.972% {
            opacity:1;
          }
          41.667% {
            opacity:1;
          }
          42.361% {
            opacity:1;
          }
          43.056% {
            opacity:1;
          }
          43.75% {
            opacity:1;
          }
          44.444% {
            opacity:1;
          }
          45.139% {
            opacity:1;
          }
          45.833% {
            opacity:1;
          }
          46.528% {
            opacity:1;
          }
          47.222% {
            opacity:1;
          }
          47.917% {
            opacity:1;
          }
          48.611% {
            opacity:1;
          }
          49.306% {
            opacity:1;
          }
          50% {
            opacity:1;
          }
          50.694% {
            opacity:1;
          }
          51.389% {
            opacity:1;
          }
          52.083% {
            opacity:1;
          }
          52.778% {
            opacity:1;
          }
          53.472% {
            opacity:1;
          }
          54.167% {
            opacity:1;
          }
          54.861% {
            opacity:1;
          }
          55.556% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          56.944% {
            opacity:1;
          }
          57.639% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          59.028% {
            opacity:1;
          }
          59.722% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          61.111% {
            opacity:1;
          }
          61.806% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          63.194% {
            opacity:1;
          }
          63.889% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          65.278% {
            opacity:1;
          }
          65.972% {
            opacity:1;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:1;
          }
          78.472% {
            opacity:1;
          }
          79.167% {
            opacity:1;
          }
          79.861% {
            opacity:1;
          }
          80.556% {
            opacity:1;
          }
          81.25% {
            opacity:1;
          }
          81.944% {
            opacity:1;
          }
          82.639% {
            opacity:1;
          }
          83.333% {
            opacity:1;
          }
          84.028% {
            opacity:1;
          }
          84.722% {
            opacity:1;
          }
          85.417% {
            opacity:1;
          }
          86.111% {
            opacity:1;
          }
          86.806% {
            opacity:1;
          }
          87.5% {
            opacity:1;
          }
          88.194% {
            opacity:1;
          }
          88.889% {
            opacity:1;
          }
          89.583% {
            opacity:1;
          }
          90.278% {
            opacity:1;
          }
          90.972% {
            opacity:1;
          }
          91.667% {
            opacity:1;
          }
          92.361% {
            opacity:1;
          }
          93.056% {
            opacity:1;
          }
          93.75% {
            opacity:1;
          }
          94.444% {
            opacity:1;
          }
          95.139% {
            opacity:1;
          }
          95.833% {
            opacity:1;
          }
          96.528% {
            opacity:1;
          }
          97.222% {
            opacity:1;
          }
          97.917% {
            opacity:1;
          }
          98.611% {
            opacity:1;
          }
          99.306% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes ticket31 {
          0% {
            opacity:1;
          }
          0.694% {
            opacity:1;
          }
          1.389% {
            opacity:1;
          }
          2.083% {
            opacity:1;
          }
          2.778% {
            opacity:1;
          }
          3.472% {
            opacity:1;
          }
          4.167% {
            opacity:1;
          }
          4.861% {
            opacity:1;
          }
          5.556% {
            opacity:1;
          }
          6.25% {
            opacity:1;
          }
          6.944% {
            opacity:1;
          }
          7.639% {
            opacity:1;
          }
          8.333% {
            opacity:1;
          }
          9.028% {
            opacity:1;
          }
          9.722% {
            opacity:1;
          }
          10.417% {
            opacity:1;
          }
          11.111% {
            opacity:1;
          }
          11.806% {
            opacity:1;
          }
          12.5% {
            opacity:1;
          }
          13.194% {
            opacity:1;
          }
          13.889% {
            opacity:1;
          }
          14.583% {
            opacity:1;
          }
          15.278% {
            opacity:1;
          }
          15.972% {
            opacity:1;
          }
          16.667% {
            opacity:1;
          }
          17.361% {
            opacity:1;
          }
          18.056% {
            opacity:1;
          }
          18.75% {
            opacity:1;
          }
          19.444% {
            opacity:1;
          }
          20.139% {
            opacity:1;
          }
          20.833% {
            opacity:1;
          }
          21.528% {
            opacity:1;
          }
          22.222% {
            opacity:1;
          }
          22.917% {
            opacity:1;
          }
          23.611% {
            opacity:1;
          }
          24.306% {
            opacity:1;
          }
          25% {
            opacity:1;
          }
          25.694% {
            opacity:1;
          }
          26.389% {
            opacity:1;
          }
          27.083% {
            opacity:1;
          }
          27.778% {
            opacity:1;
          }
          28.472% {
            opacity:1;
          }
          29.167% {
            opacity:1;
          }
          29.861% {
            opacity:1;
          }
          30.556% {
            opacity:1;
          }
          31.25% {
            opacity:1;
          }
          31.944% {
            opacity:1;
          }
          32.639% {
            opacity:1;
          }
          33.333% {
            opacity:1;
          }
          34.028% {
            opacity:1;
          }
          34.722% {
            opacity:1;
          }
          35.417% {
            opacity:1;
          }
          36.111% {
            opacity:1;
          }
          36.806% {
            opacity:1;
          }
          37.5% {
            opacity:1;
          }
          38.194% {
            opacity:1;
          }
          38.889% {
            opacity:1;
          }
          39.583% {
            opacity:1;
          }
          40.278% {
            opacity:1;
          }
          40.972% {
            opacity:1;
          }
          41.667% {
            opacity:1;
          }
          42.361% {
            opacity:1;
          }
          43.056% {
            opacity:1;
          }
          43.75% {
            opacity:1;
          }
          44.444% {
            opacity:1;
          }
          45.139% {
            opacity:1;
          }
          45.833% {
            opacity:1;
          }
          46.528% {
            opacity:1;
          }
          47.222% {
            opacity:1;
          }
          47.917% {
            opacity:1;
          }
          48.611% {
            opacity:1;
          }
          49.306% {
            opacity:1;
          }
          50% {
            opacity:1;
          }
          50.694% {
            opacity:1;
          }
          51.389% {
            opacity:1;
          }
          52.083% {
            opacity:1;
          }
          52.778% {
            opacity:1;
          }
          53.472% {
            opacity:1;
          }
          54.167% {
            opacity:1;
          }
          54.861% {
            opacity:1;
          }
          55.556% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          56.944% {
            opacity:1;
          }
          57.639% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          59.028% {
            opacity:1;
          }
          59.722% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          61.111% {
            opacity:1;
          }
          61.806% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          63.194% {
            opacity:1;
          }
          63.889% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          65.278% {
            opacity:1;
          }
          65.972% {
            opacity:1;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:1;
          }
          78.472% {
            opacity:1;
          }
          79.167% {
            opacity:1;
          }
          79.861% {
            opacity:1;
          }
          80.556% {
            opacity:1;
          }
          81.25% {
            opacity:1;
          }
          81.944% {
            opacity:1;
          }
          82.639% {
            opacity:1;
          }
          83.333% {
            opacity:1;
          }
          84.028% {
            opacity:1;
          }
          84.722% {
            opacity:1;
          }
          85.417% {
            opacity:1;
          }
          86.111% {
            opacity:1;
          }
          86.806% {
            opacity:1;
          }
          87.5% {
            opacity:1;
          }
          88.194% {
            opacity:1;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket32 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          56.944% {
            opacity:1;
          }
          57.639% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          59.028% {
            opacity:1;
          }
          59.722% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          61.111% {
            opacity:1;
          }
          61.806% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          63.194% {
            opacity:1;
          }
          63.889% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          65.278% {
            opacity:1;
          }
          65.972% {
            opacity:1;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:1;
          }
          78.472% {
            opacity:1;
          }
          79.167% {
            opacity:1;
          }
          79.861% {
            opacity:1;
          }
          80.556% {
            opacity:1;
          }
          81.25% {
            opacity:1;
          }
          81.944% {
            opacity:1;
          }
          82.639% {
            opacity:1;
          }
          83.333% {
            opacity:1;
          }
          84.028% {
            opacity:1;
          }
          84.722% {
            opacity:1;
          }
          85.417% {
            opacity:1;
          }
          86.111% {
            opacity:1;
          }
          86.806% {
            opacity:1;
          }
          87.5% {
            opacity:1;
          }
          88.194% {
            opacity:1;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket33 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          56.944% {
            opacity:1;
          }
          57.639% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          59.028% {
            opacity:1;
          }
          59.722% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          61.111% {
            opacity:1;
          }
          61.806% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          63.194% {
            opacity:1;
          }
          63.889% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          65.278% {
            opacity:1;
          }
          65.972% {
            opacity:1;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:1;
          }
          78.472% {
            opacity:1;
          }
          79.167% {
            opacity:1;
          }
          79.861% {
            opacity:1;
          }
          80.556% {
            opacity:1;
          }
          81.25% {
            opacity:1;
          }
          81.944% {
            opacity:1;
          }
          82.639% {
            opacity:1;
          }
          83.333% {
            opacity:1;
          }
          84.028% {
            opacity:1;
          }
          84.722% {
            opacity:1;
          }
          85.417% {
            opacity:1;
          }
          86.111% {
            opacity:1;
          }
          86.806% {
            opacity:1;
          }
          87.5% {
            opacity:1;
          }
          88.194% {
            opacity:1;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket34 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          56.944% {
            opacity:1;
          }
          57.639% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          59.028% {
            opacity:1;
          }
          59.722% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          61.111% {
            opacity:1;
          }
          61.806% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          63.194% {
            opacity:1;
          }
          63.889% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          65.278% {
            opacity:1;
          }
          65.972% {
            opacity:1;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:1;
          }
          78.472% {
            opacity:1;
          }
          79.167% {
            opacity:1;
          }
          79.861% {
            opacity:1;
          }
          80.556% {
            opacity:1;
          }
          81.25% {
            opacity:1;
          }
          81.944% {
            opacity:1;
          }
          82.639% {
            opacity:1;
          }
          83.333% {
            opacity:1;
          }
          84.028% {
            opacity:1;
          }
          84.722% {
            opacity:1;
          }
          85.417% {
            opacity:1;
          }
          86.111% {
            opacity:1;
          }
          86.806% {
            opacity:1;
          }
          87.5% {
            opacity:1;
          }
          88.194% {
            opacity:1;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket35 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          56.944% {
            opacity:1;
          }
          57.639% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          59.028% {
            opacity:1;
          }
          59.722% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          61.111% {
            opacity:1;
          }
          61.806% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          63.194% {
            opacity:1;
          }
          63.889% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          65.278% {
            opacity:1;
          }
          65.972% {
            opacity:1;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:1;
          }
          78.472% {
            opacity:1;
          }
          79.167% {
            opacity:1;
          }
          79.861% {
            opacity:1;
          }
          80.556% {
            opacity:1;
          }
          81.25% {
            opacity:1;
          }
          81.944% {
            opacity:1;
          }
          82.639% {
            opacity:1;
          }
          83.333% {
            opacity:1;
          }
          84.028% {
            opacity:1;
          }
          84.722% {
            opacity:1;
          }
          85.417% {
            opacity:1;
          }
          86.111% {
            opacity:1;
          }
          86.806% {
            opacity:1;
          }
          87.5% {
            opacity:1;
          }
          88.194% {
            opacity:1;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket36 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          56.944% {
            opacity:1;
          }
          57.639% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          59.028% {
            opacity:1;
          }
          59.722% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          61.111% {
            opacity:1;
          }
          61.806% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          63.194% {
            opacity:1;
          }
          63.889% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          65.278% {
            opacity:1;
          }
          65.972% {
            opacity:1;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket37 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          56.944% {
            opacity:1;
          }
          57.639% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          59.028% {
            opacity:1;
          }
          59.722% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          61.111% {
            opacity:1;
          }
          61.806% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          63.194% {
            opacity:1;
          }
          63.889% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          65.278% {
            opacity:1;
          }
          65.972% {
            opacity:1;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket38 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          56.944% {
            opacity:1;
          }
          57.639% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          59.028% {
            opacity:1;
          }
          59.722% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          61.111% {
            opacity:1;
          }
          61.806% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          63.194% {
            opacity:1;
          }
          63.889% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          65.278% {
            opacity:1;
          }
          65.972% {
            opacity:1;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @keyframes ticket39 {
          0% {
            opacity:0.04;
          }
          0.694% {
            opacity:0.04;
          }
          1.389% {
            opacity:0.04;
          }
          2.083% {
            opacity:0.04;
          }
          2.778% {
            opacity:0.04;
          }
          3.472% {
            opacity:0.04;
          }
          4.167% {
            opacity:0.04;
          }
          4.861% {
            opacity:0.04;
          }
          5.556% {
            opacity:0.04;
          }
          6.25% {
            opacity:0.04;
          }
          6.944% {
            opacity:0.04;
          }
          7.639% {
            opacity:0.04;
          }
          8.333% {
            opacity:0.04;
          }
          9.028% {
            opacity:0.04;
          }
          9.722% {
            opacity:0.04;
          }
          10.417% {
            opacity:0.04;
          }
          11.111% {
            opacity:0.04;
          }
          11.806% {
            opacity:0.04;
          }
          12.5% {
            opacity:0.04;
          }
          13.194% {
            opacity:0.04;
          }
          13.889% {
            opacity:0.04;
          }
          14.583% {
            opacity:0.04;
          }
          15.278% {
            opacity:0.04;
          }
          15.972% {
            opacity:0.04;
          }
          16.667% {
            opacity:0.04;
          }
          17.361% {
            opacity:0.04;
          }
          18.056% {
            opacity:0.04;
          }
          18.75% {
            opacity:0.04;
          }
          19.444% {
            opacity:0.04;
          }
          20.139% {
            opacity:0.04;
          }
          20.833% {
            opacity:0.04;
          }
          21.528% {
            opacity:0.04;
          }
          22.222% {
            opacity:0.04;
          }
          22.917% {
            opacity:0.04;
          }
          23.611% {
            opacity:0.04;
          }
          24.306% {
            opacity:0.04;
          }
          25% {
            opacity:0.04;
          }
          25.694% {
            opacity:0.04;
          }
          26.389% {
            opacity:0.04;
          }
          27.083% {
            opacity:0.04;
          }
          27.778% {
            opacity:0.04;
          }
          28.472% {
            opacity:0.04;
          }
          29.167% {
            opacity:0.04;
          }
          29.861% {
            opacity:0.04;
          }
          30.556% {
            opacity:0.04;
          }
          31.25% {
            opacity:0.04;
          }
          31.944% {
            opacity:0.04;
          }
          32.639% {
            opacity:0.04;
          }
          33.333% {
            opacity:0.04;
          }
          34.028% {
            opacity:0.04;
          }
          34.722% {
            opacity:0.04;
          }
          35.417% {
            opacity:0.04;
          }
          36.111% {
            opacity:0.04;
          }
          36.806% {
            opacity:0.04;
          }
          37.5% {
            opacity:0.04;
          }
          38.194% {
            opacity:0.04;
          }
          38.889% {
            opacity:0.04;
          }
          39.583% {
            opacity:0.04;
          }
          40.278% {
            opacity:0.04;
          }
          40.972% {
            opacity:0.04;
          }
          41.667% {
            opacity:0.04;
          }
          42.361% {
            opacity:0.04;
          }
          43.056% {
            opacity:0.04;
          }
          43.75% {
            opacity:0.04;
          }
          44.444% {
            opacity:0.04;
          }
          45.139% {
            opacity:0.04;
          }
          45.833% {
            opacity:0.04;
          }
          46.528% {
            opacity:0.04;
          }
          47.222% {
            opacity:0.04;
          }
          47.917% {
            opacity:0.04;
          }
          48.611% {
            opacity:0.04;
          }
          49.306% {
            opacity:0.04;
          }
          50% {
            opacity:0.04;
          }
          50.694% {
            opacity:0.04;
          }
          51.389% {
            opacity:0.04;
          }
          52.083% {
            opacity:0.04;
          }
          52.778% {
            opacity:0.04;
          }
          53.472% {
            opacity:0.04;
          }
          54.167% {
            opacity:0.04;
          }
          54.861% {
            opacity:0.04;
          }
          55.556% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          56.944% {
            opacity:1;
          }
          57.639% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          59.028% {
            opacity:1;
          }
          59.722% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          61.111% {
            opacity:1;
          }
          61.806% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          63.194% {
            opacity:1;
          }
          63.889% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          65.278% {
            opacity:1;
          }
          65.972% {
            opacity:1;
          }
          66.667% {
            opacity:0.04;
          }
          67.361% {
            opacity:0.04;
          }
          68.056% {
            opacity:0.04;
          }
          68.75% {
            opacity:0.04;
          }
          69.444% {
            opacity:0.04;
          }
          70.139% {
            opacity:0.04;
          }
          70.833% {
            opacity:0.04;
          }
          71.528% {
            opacity:0.04;
          }
          72.222% {
            opacity:0.04;
          }
          72.917% {
            opacity:0.04;
          }
          73.611% {
            opacity:0.04;
          }
          74.306% {
            opacity:0.04;
          }
          75% {
            opacity:0.04;
          }
          75.694% {
            opacity:0.04;
          }
          76.389% {
            opacity:0.04;
          }
          77.083% {
            opacity:0.04;
          }
          77.778% {
            opacity:0.04;
          }
          78.472% {
            opacity:0.04;
          }
          79.167% {
            opacity:0.04;
          }
          79.861% {
            opacity:0.04;
          }
          80.556% {
            opacity:0.04;
          }
          81.25% {
            opacity:0.04;
          }
          81.944% {
            opacity:0.04;
          }
          82.639% {
            opacity:0.04;
          }
          83.333% {
            opacity:0.04;
          }
          84.028% {
            opacity:0.04;
          }
          84.722% {
            opacity:0.04;
          }
          85.417% {
            opacity:0.04;
          }
          86.111% {
            opacity:0.04;
          }
          86.806% {
            opacity:0.04;
          }
          87.5% {
            opacity:0.04;
          }
          88.194% {
            opacity:0.04;
          }
          88.889% {
            opacity:0.04;
          }
          89.583% {
            opacity:0.04;
          }
          90.278% {
            opacity:0.04;
          }
          90.972% {
            opacity:0.04;
          }
          91.667% {
            opacity:0.04;
          }
          92.361% {
            opacity:0.04;
          }
          93.056% {
            opacity:0.04;
          }
          93.75% {
            opacity:0.04;
          }
          94.444% {
            opacity:0.04;
          }
          95.139% {
            opacity:0.04;
          }
          95.833% {
            opacity:0.04;
          }
          96.528% {
            opacity:0.04;
          }
          97.222% {
            opacity:0.04;
          }
          97.917% {
            opacity:0.04;
          }
          98.611% {
            opacity:0.04;
          }
          99.306% {
            opacity:0.04;
          }
          100% {
            opacity:0.04;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .ticket00 {
            opacity:1;
          }
          .ticket01 {
            opacity:1;
          }
          .ticket02 {
            opacity:0.04;
          }
          .ticket03 {
            opacity:0.04;
          }
          .ticket04 {
            opacity:0.04;
          }
          .ticket05 {
            opacity:0.04;
          }
          .ticket06 {
            opacity:0.04;
          }
          .ticket07 {
            opacity:0.04;
          }
          .ticket08 {
            opacity:0.04;
          }
          .ticket09 {
            opacity:0.04;
          }
          .ticket10 {
            opacity:1;
          }
          .ticket11 {
            opacity:1;
          }
          .ticket12 {
            opacity:0.04;
          }
          .ticket13 {
            opacity:0.04;
          }
          .ticket14 {
            opacity:0.04;
          }
          .ticket15 {
            opacity:0.04;
          }
          .ticket16 {
            opacity:0.04;
          }
          .ticket17 {
            opacity:0.04;
          }
          .ticket18 {
            opacity:0.04;
          }
          .ticket19 {
            opacity:0.04;
          }
          .ticket20 {
            opacity:1;
          }
          .ticket21 {
            opacity:1;
          }
          .ticket22 {
            opacity:1;
          }
          .ticket23 {
            opacity:0.04;
          }
          .ticket24 {
            opacity:0.04;
          }
          .ticket25 {
            opacity:0.04;
          }
          .ticket26 {
            opacity:0.04;
          }
          .ticket27 {
            opacity:0.04;
          }
          .ticket28 {
            opacity:0.04;
          }
          .ticket29 {
            opacity:0.04;
          }
          .ticket30 {
            opacity:0.04;
          }
          .ticket31 {
            opacity:0.04;
          }
          .ticket32 {
            opacity:0.04;
          }
          .ticket33 {
            opacity:0.04;
          }
          .ticket34 {
            opacity:0.04;
          }
          .ticket35 {
            opacity:0.04;
          }
          .ticket36 {
            opacity:0.04;
          }
          .ticket37 {
            opacity:0.04;
          }
          .ticket38 {
            opacity:0.04;
          }
          .ticket39 {
            opacity:0.04;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Bullwhip Effect">
        <text x="12" y="13" font-family="sans-serif" font-size="9" fill="#c9d6b9">ORDER REQUESTS</text>
        <path d="M102 117V99L112 92 122 99V117Z" fill="#456246" stroke="#95ad85"/>
        <rect x="109" y="107" width="6" height="10" fill="#1b3c2d"/>
        <path d="M73 117V99L83 92 93 99V117Z" fill="#456246" stroke="#95ad85"/>
        <rect x="80" y="107" width="6" height="10" fill="#1b3c2d"/>
        <path d="M44 117V99L54 92 64 99V117Z" fill="#456246" stroke="#95ad85"/>
        <rect x="51" y="107" width="6" height="10" fill="#1b3c2d"/>
        <path d="M15 117V99L25 92 35 99V117Z" fill="#456246" stroke="#95ad85"/>
        <rect x="22" y="107" width="6" height="10" fill="#1b3c2d"/>
        <g transform="translate(97 125) rotate(180)" fill="#9cc1aa">
          <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
        </g>
        <g transform="translate(68 125) rotate(180)" fill="#9cc1aa">
          <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
        </g>
        <g transform="translate(39 125) rotate(180)" fill="#9cc1aa">
          <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
        </g>
        <rect x="105" y="85" width="14" height="4" class="ticket00" fill="#85bec3"/>
        <rect x="105" y="79" width="14" height="4" class="ticket01" fill="#85bec3"/>
        <rect x="105" y="73" width="14" height="4" class="ticket02" fill="#85bec3"/>
        <rect x="105" y="67" width="14" height="4" class="ticket03" fill="#85bec3"/>
        <rect x="105" y="61" width="14" height="4" class="ticket04" fill="#85bec3"/>
        <rect x="105" y="55" width="14" height="4" class="ticket05" fill="#85bec3"/>
        <rect x="105" y="49" width="14" height="4" class="ticket06" fill="#85bec3"/>
        <rect x="105" y="43" width="14" height="4" class="ticket07" fill="#85bec3"/>
        <rect x="105" y="37" width="14" height="4" class="ticket08" fill="#85bec3"/>
        <rect x="105" y="31" width="14" height="4" class="ticket09" fill="#85bec3"/>
        <rect x="76" y="85" width="14" height="4" class="ticket10" fill="#ddb77c"/>
        <rect x="76" y="79" width="14" height="4" class="ticket11" fill="#ddb77c"/>
        <rect x="76" y="73" width="14" height="4" class="ticket12" fill="#ddb77c"/>
        <rect x="76" y="67" width="14" height="4" class="ticket13" fill="#ddb77c"/>
        <rect x="76" y="61" width="14" height="4" class="ticket14" fill="#ddb77c"/>
        <rect x="76" y="55" width="14" height="4" class="ticket15" fill="#ddb77c"/>
        <rect x="76" y="49" width="14" height="4" class="ticket16" fill="#ddb77c"/>
        <rect x="76" y="43" width="14" height="4" class="ticket17" fill="#ddb77c"/>
        <rect x="76" y="37" width="14" height="4" class="ticket18" fill="#ddb77c"/>
        <rect x="76" y="31" width="14" height="4" class="ticket19" fill="#ddb77c"/>
        <rect x="47" y="85" width="14" height="4" class="ticket20" fill="#85bec3"/>
        <rect x="47" y="79" width="14" height="4" class="ticket21" fill="#85bec3"/>
        <rect x="47" y="73" width="14" height="4" class="ticket22" fill="#85bec3"/>
        <rect x="47" y="67" width="14" height="4" class="ticket23" fill="#85bec3"/>
        <rect x="47" y="61" width="14" height="4" class="ticket24" fill="#85bec3"/>
        <rect x="47" y="55" width="14" height="4" class="ticket25" fill="#85bec3"/>
        <rect x="47" y="49" width="14" height="4" class="ticket26" fill="#85bec3"/>
        <rect x="47" y="43" width="14" height="4" class="ticket27" fill="#85bec3"/>
        <rect x="47" y="37" width="14" height="4" class="ticket28" fill="#85bec3"/>
        <rect x="47" y="31" width="14" height="4" class="ticket29" fill="#85bec3"/>
        <rect x="18" y="85" width="14" height="4" class="ticket30" fill="#ddb77c"/>
        <rect x="18" y="79" width="14" height="4" class="ticket31" fill="#ddb77c"/>
        <rect x="18" y="73" width="14" height="4" class="ticket32" fill="#ddb77c"/>
        <rect x="18" y="67" width="14" height="4" class="ticket33" fill="#ddb77c"/>
        <rect x="18" y="61" width="14" height="4" class="ticket34" fill="#ddb77c"/>
        <rect x="18" y="55" width="14" height="4" class="ticket35" fill="#ddb77c"/>
        <rect x="18" y="49" width="14" height="4" class="ticket36" fill="#ddb77c"/>
        <rect x="18" y="43" width="14" height="4" class="ticket37" fill="#ddb77c"/>
        <rect x="18" y="37" width="14" height="4" class="ticket38" fill="#ddb77c"/>
        <rect x="18" y="31" width="14" height="4" class="ticket39" fill="#ddb77c"/>
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

if (!customElements.get("concept-bullwhip-effect")) {
  customElements.define("concept-bullwhip-effect", ConceptBullwhipEffect);
}
