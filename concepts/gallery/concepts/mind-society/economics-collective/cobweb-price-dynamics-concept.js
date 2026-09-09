// Cobweb Price Dynamics. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptCobwebPriceDynamics extends HTMLElement {
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
        .cobweb {
          animation:cobweb 16s linear infinite;
        }
        .period {
          animation:period 16s linear infinite;
        }
        @keyframes cobweb {
          0% {
            d:path('M20 102L20 102');
          }
          0.694% {
            d:path('M20 102L20.947 102');
          }
          1.389% {
            d:path('M20 102L21.894 102');
          }
          2.083% {
            d:path('M20 102L22.841 102');
          }
          2.778% {
            d:path('M20 102L23.788 102');
          }
          3.472% {
            d:path('M20 102L24.735 102');
          }
          4.167% {
            d:path('M20 102L25.682 102');
          }
          4.861% {
            d:path('M20 102L26.629 102');
          }
          5.556% {
            d:path('M20 102L27.576 102');
          }
          6.25% {
            d:path('M20 102L28.523 102');
          }
          6.944% {
            d:path('M20 102L29.47 102');
          }
          7.639% {
            d:path('M20 102L30 102L30 99.083');
          }
          8.333% {
            d:path('M20 102L30 102L30 92.455');
          }
          9.028% {
            d:path('M20 102L30 102L30 85.826');
          }
          9.722% {
            d:path('M20 102L30 102L30 79.197');
          }
          10.417% {
            d:path('M20 102L30 102L30 72.568');
          }
          11.111% {
            d:path('M20 102L30 102L30 65.939');
          }
          11.806% {
            d:path('M20 102L30 102L30 59.311');
          }
          12.5% {
            d:path('M20 102L30 102L30 52.682');
          }
          13.194% {
            d:path('M20 102L30 102L30 46.053');
          }
          13.889% {
            d:path('M20 102L30 102L30 39.424');
          }
          14.583% {
            d:path('M20 102L30 102L30 32.795');
          }
          15.278% {
            d:path('M20 102L30 102L30 32L32.917 32');
          }
          15.972% {
            d:path('M20 102L30 102L30 32L36.231 32');
          }
          16.667% {
            d:path('M20 102L30 102L30 32L39.545 32');
          }
          17.361% {
            d:path('M20 102L30 102L30 32L42.86 32');
          }
          18.056% {
            d:path('M20 102L30 102L30 32L46.174 32');
          }
          18.75% {
            d:path('M20 102L30 102L30 32L49.489 32');
          }
          19.444% {
            d:path('M20 102L30 102L30 32L52.803 32');
          }
          20.139% {
            d:path('M20 102L30 102L30 32L56.117 32');
          }
          20.833% {
            d:path('M20 102L30 102L30 32L59.432 32');
          }
          21.528% {
            d:path('M20 102L30 102L30 32L62.746 32');
          }
          22.222% {
            d:path('M20 102L30 102L30 32L65 32L65 33.061');
          }
          22.917% {
            d:path('M20 102L30 102L30 32L65 32L65 36.375');
          }
          23.611% {
            d:path('M20 102L30 102L30 32L65 32L65 39.689');
          }
          24.306% {
            d:path('M20 102L30 102L30 32L65 32L65 43.004');
          }
          25% {
            d:path('M20 102L30 102L30 32L65 32L65 46.318');
          }
          25.694% {
            d:path('M20 102L30 102L30 32L65 32L65 49.633');
          }
          26.389% {
            d:path('M20 102L30 102L30 32L65 32L65 52.947');
          }
          27.083% {
            d:path('M20 102L30 102L30 32L65 32L65 56.261');
          }
          27.778% {
            d:path('M20 102L30 102L30 32L65 32L65 59.576');
          }
          28.472% {
            d:path('M20 102L30 102L30 32L65 32L65 62.89');
          }
          29.167% {
            d:path('M20 102L30 102L30 32L65 32L65 66.205');
          }
          29.861% {
            d:path('M20 102L30 102L30 32L65 32L65 67L63.741 67');
          }
          30.556% {
            d:path('M20 102L30 102L30 32L65 32L65 67L62.083 67');
          }
          31.25% {
            d:path('M20 102L30 102L30 32L65 32L65 67L60.426 67');
          }
          31.944% {
            d:path('M20 102L30 102L30 32L65 32L65 67L58.769 67');
          }
          32.639% {
            d:path('M20 102L30 102L30 32L65 32L65 67L57.112 67');
          }
          33.333% {
            d:path('M20 102L30 102L30 32L65 32L65 67L55.455 67');
          }
          34.028% {
            d:path('M20 102L30 102L30 32L65 32L65 67L53.797 67');
          }
          34.722% {
            d:path('M20 102L30 102L30 32L65 32L65 67L52.14 67');
          }
          35.417% {
            d:path('M20 102L30 102L30 32L65 32L65 67L50.483 67');
          }
          36.111% {
            d:path('M20 102L30 102L30 32L65 32L65 67L48.826 67');
          }
          36.806% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 66.669');
          }
          37.5% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 65.011');
          }
          38.194% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 63.354');
          }
          38.889% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 61.697');
          }
          39.583% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 60.04');
          }
          40.278% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 58.383');
          }
          40.972% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 56.725');
          }
          41.667% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 55.068');
          }
          42.361% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 53.411');
          }
          43.056% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 51.754');
          }
          43.75% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 50.097');
          }
          44.444% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L48.03 49.5');
          }
          45.139% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L48.859 49.5');
          }
          45.833% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L49.687 49.5');
          }
          46.528% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L50.516 49.5');
          }
          47.222% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L51.345 49.5');
          }
          47.917% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L52.173 49.5');
          }
          48.611% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L53.002 49.5');
          }
          49.306% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L53.83 49.5');
          }
          50% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L54.659 49.5');
          }
          50.694% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L55.488 49.5');
          }
          51.389% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 49.566');
          }
          52.083% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 50.395');
          }
          52.778% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 51.223');
          }
          53.472% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 52.052');
          }
          54.167% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 52.881');
          }
          54.861% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 53.709');
          }
          55.556% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 54.538');
          }
          56.25% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 55.366');
          }
          56.944% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 56.195');
          }
          57.639% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 57.024');
          }
          58.333% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 57.852');
          }
          59.028% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L56.035 58.25');
          }
          59.722% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L55.62 58.25');
          }
          60.417% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L55.206 58.25');
          }
          61.111% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L54.792 58.25');
          }
          61.806% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L54.377 58.25');
          }
          62.5% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L53.963 58.25');
          }
          63.194% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L53.549 58.25');
          }
          63.889% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L53.134 58.25');
          }
          64.583% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L52.72 58.25');
          }
          65.278% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L52.306 58.25');
          }
          65.972% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.892 58.25');
          }
          66.667% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 57.852');
          }
          67.361% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 57.438');
          }
          68.056% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 57.024');
          }
          68.75% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 56.609');
          }
          69.444% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 56.195');
          }
          70.139% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 55.781');
          }
          70.833% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 55.366');
          }
          71.528% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 54.952');
          }
          72.222% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 54.538');
          }
          72.917% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 54.124');
          }
          73.611% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L51.958 53.875');
          }
          74.306% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L52.165 53.875');
          }
          75% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L52.372 53.875');
          }
          75.694% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L52.579 53.875');
          }
          76.389% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L52.786 53.875');
          }
          77.083% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L52.994 53.875');
          }
          77.778% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L53.201 53.875');
          }
          78.472% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L53.408 53.875');
          }
          79.167% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L53.615 53.875');
          }
          79.861% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L53.822 53.875');
          }
          80.556% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.029 53.875');
          }
          81.25% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 54.049');
          }
          81.944% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 54.256');
          }
          82.639% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 54.463');
          }
          83.333% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 54.67');
          }
          84.028% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 54.878');
          }
          84.722% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 55.085');
          }
          85.417% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 55.292');
          }
          86.111% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 55.499');
          }
          86.806% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 55.706');
          }
          87.5% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 55.913');
          }
          88.194% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 56.063');
          }
          88.889% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 56.063');
          }
          89.583% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 56.063');
          }
          90.278% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 56.063');
          }
          90.972% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 56.063');
          }
          91.667% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 56.063');
          }
          92.361% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 56.063');
          }
          93.056% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 56.063');
          }
          93.75% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 56.063');
          }
          94.444% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 56.063');
          }
          95.139% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 56.063');
          }
          95.833% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 56.063');
          }
          96.528% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 56.063');
          }
          97.222% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 56.063');
          }
          97.917% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 56.063');
          }
          98.611% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 56.063');
          }
          99.306% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 56.063');
          }
          100% {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 56.063');
          }
        }
        @keyframes period {
          0% {
            transform:translate(20px,102px);
          }
          0.694% {
            transform:translate(20.947px,102px);
          }
          1.389% {
            transform:translate(21.894px,102px);
          }
          2.083% {
            transform:translate(22.841px,102px);
          }
          2.778% {
            transform:translate(23.788px,102px);
          }
          3.472% {
            transform:translate(24.735px,102px);
          }
          4.167% {
            transform:translate(25.682px,102px);
          }
          4.861% {
            transform:translate(26.629px,102px);
          }
          5.556% {
            transform:translate(27.576px,102px);
          }
          6.25% {
            transform:translate(28.523px,102px);
          }
          6.944% {
            transform:translate(29.47px,102px);
          }
          7.639% {
            transform:translate(30px,99.083px);
          }
          8.333% {
            transform:translate(30px,92.455px);
          }
          9.028% {
            transform:translate(30px,85.826px);
          }
          9.722% {
            transform:translate(30px,79.197px);
          }
          10.417% {
            transform:translate(30px,72.568px);
          }
          11.111% {
            transform:translate(30px,65.939px);
          }
          11.806% {
            transform:translate(30px,59.311px);
          }
          12.5% {
            transform:translate(30px,52.682px);
          }
          13.194% {
            transform:translate(30px,46.053px);
          }
          13.889% {
            transform:translate(30px,39.424px);
          }
          14.583% {
            transform:translate(30px,32.795px);
          }
          15.278% {
            transform:translate(32.917px,32px);
          }
          15.972% {
            transform:translate(36.231px,32px);
          }
          16.667% {
            transform:translate(39.545px,32px);
          }
          17.361% {
            transform:translate(42.86px,32px);
          }
          18.056% {
            transform:translate(46.174px,32px);
          }
          18.75% {
            transform:translate(49.489px,32px);
          }
          19.444% {
            transform:translate(52.803px,32px);
          }
          20.139% {
            transform:translate(56.117px,32px);
          }
          20.833% {
            transform:translate(59.432px,32px);
          }
          21.528% {
            transform:translate(62.746px,32px);
          }
          22.222% {
            transform:translate(65px,33.061px);
          }
          22.917% {
            transform:translate(65px,36.375px);
          }
          23.611% {
            transform:translate(65px,39.689px);
          }
          24.306% {
            transform:translate(65px,43.004px);
          }
          25% {
            transform:translate(65px,46.318px);
          }
          25.694% {
            transform:translate(65px,49.633px);
          }
          26.389% {
            transform:translate(65px,52.947px);
          }
          27.083% {
            transform:translate(65px,56.261px);
          }
          27.778% {
            transform:translate(65px,59.576px);
          }
          28.472% {
            transform:translate(65px,62.89px);
          }
          29.167% {
            transform:translate(65px,66.205px);
          }
          29.861% {
            transform:translate(63.741px,67px);
          }
          30.556% {
            transform:translate(62.083px,67px);
          }
          31.25% {
            transform:translate(60.426px,67px);
          }
          31.944% {
            transform:translate(58.769px,67px);
          }
          32.639% {
            transform:translate(57.112px,67px);
          }
          33.333% {
            transform:translate(55.455px,67px);
          }
          34.028% {
            transform:translate(53.797px,67px);
          }
          34.722% {
            transform:translate(52.14px,67px);
          }
          35.417% {
            transform:translate(50.483px,67px);
          }
          36.111% {
            transform:translate(48.826px,67px);
          }
          36.806% {
            transform:translate(47.5px,66.669px);
          }
          37.5% {
            transform:translate(47.5px,65.011px);
          }
          38.194% {
            transform:translate(47.5px,63.354px);
          }
          38.889% {
            transform:translate(47.5px,61.697px);
          }
          39.583% {
            transform:translate(47.5px,60.04px);
          }
          40.278% {
            transform:translate(47.5px,58.383px);
          }
          40.972% {
            transform:translate(47.5px,56.725px);
          }
          41.667% {
            transform:translate(47.5px,55.068px);
          }
          42.361% {
            transform:translate(47.5px,53.411px);
          }
          43.056% {
            transform:translate(47.5px,51.754px);
          }
          43.75% {
            transform:translate(47.5px,50.097px);
          }
          44.444% {
            transform:translate(48.03px,49.5px);
          }
          45.139% {
            transform:translate(48.859px,49.5px);
          }
          45.833% {
            transform:translate(49.687px,49.5px);
          }
          46.528% {
            transform:translate(50.516px,49.5px);
          }
          47.222% {
            transform:translate(51.345px,49.5px);
          }
          47.917% {
            transform:translate(52.173px,49.5px);
          }
          48.611% {
            transform:translate(53.002px,49.5px);
          }
          49.306% {
            transform:translate(53.83px,49.5px);
          }
          50% {
            transform:translate(54.659px,49.5px);
          }
          50.694% {
            transform:translate(55.488px,49.5px);
          }
          51.389% {
            transform:translate(56.25px,49.566px);
          }
          52.083% {
            transform:translate(56.25px,50.395px);
          }
          52.778% {
            transform:translate(56.25px,51.223px);
          }
          53.472% {
            transform:translate(56.25px,52.052px);
          }
          54.167% {
            transform:translate(56.25px,52.881px);
          }
          54.861% {
            transform:translate(56.25px,53.709px);
          }
          55.556% {
            transform:translate(56.25px,54.538px);
          }
          56.25% {
            transform:translate(56.25px,55.366px);
          }
          56.944% {
            transform:translate(56.25px,56.195px);
          }
          57.639% {
            transform:translate(56.25px,57.024px);
          }
          58.333% {
            transform:translate(56.25px,57.852px);
          }
          59.028% {
            transform:translate(56.035px,58.25px);
          }
          59.722% {
            transform:translate(55.62px,58.25px);
          }
          60.417% {
            transform:translate(55.206px,58.25px);
          }
          61.111% {
            transform:translate(54.792px,58.25px);
          }
          61.806% {
            transform:translate(54.377px,58.25px);
          }
          62.5% {
            transform:translate(53.963px,58.25px);
          }
          63.194% {
            transform:translate(53.549px,58.25px);
          }
          63.889% {
            transform:translate(53.134px,58.25px);
          }
          64.583% {
            transform:translate(52.72px,58.25px);
          }
          65.278% {
            transform:translate(52.306px,58.25px);
          }
          65.972% {
            transform:translate(51.892px,58.25px);
          }
          66.667% {
            transform:translate(51.875px,57.852px);
          }
          67.361% {
            transform:translate(51.875px,57.438px);
          }
          68.056% {
            transform:translate(51.875px,57.024px);
          }
          68.75% {
            transform:translate(51.875px,56.609px);
          }
          69.444% {
            transform:translate(51.875px,56.195px);
          }
          70.139% {
            transform:translate(51.875px,55.781px);
          }
          70.833% {
            transform:translate(51.875px,55.366px);
          }
          71.528% {
            transform:translate(51.875px,54.952px);
          }
          72.222% {
            transform:translate(51.875px,54.538px);
          }
          72.917% {
            transform:translate(51.875px,54.124px);
          }
          73.611% {
            transform:translate(51.958px,53.875px);
          }
          74.306% {
            transform:translate(52.165px,53.875px);
          }
          75% {
            transform:translate(52.372px,53.875px);
          }
          75.694% {
            transform:translate(52.579px,53.875px);
          }
          76.389% {
            transform:translate(52.786px,53.875px);
          }
          77.083% {
            transform:translate(52.994px,53.875px);
          }
          77.778% {
            transform:translate(53.201px,53.875px);
          }
          78.472% {
            transform:translate(53.408px,53.875px);
          }
          79.167% {
            transform:translate(53.615px,53.875px);
          }
          79.861% {
            transform:translate(53.822px,53.875px);
          }
          80.556% {
            transform:translate(54.029px,53.875px);
          }
          81.25% {
            transform:translate(54.063px,54.049px);
          }
          81.944% {
            transform:translate(54.063px,54.256px);
          }
          82.639% {
            transform:translate(54.063px,54.463px);
          }
          83.333% {
            transform:translate(54.063px,54.67px);
          }
          84.028% {
            transform:translate(54.063px,54.878px);
          }
          84.722% {
            transform:translate(54.063px,55.085px);
          }
          85.417% {
            transform:translate(54.063px,55.292px);
          }
          86.111% {
            transform:translate(54.063px,55.499px);
          }
          86.806% {
            transform:translate(54.063px,55.706px);
          }
          87.5% {
            transform:translate(54.063px,55.913px);
          }
          88.194% {
            transform:translate(54.063px,56.063px);
          }
          88.889% {
            transform:translate(54.063px,56.063px);
          }
          89.583% {
            transform:translate(54.063px,56.063px);
          }
          90.278% {
            transform:translate(54.063px,56.063px);
          }
          90.972% {
            transform:translate(54.063px,56.063px);
          }
          91.667% {
            transform:translate(54.063px,56.063px);
          }
          92.361% {
            transform:translate(54.063px,56.063px);
          }
          93.056% {
            transform:translate(54.063px,56.063px);
          }
          93.75% {
            transform:translate(54.063px,56.063px);
          }
          94.444% {
            transform:translate(54.063px,56.063px);
          }
          95.139% {
            transform:translate(54.063px,56.063px);
          }
          95.833% {
            transform:translate(54.063px,56.063px);
          }
          96.528% {
            transform:translate(54.063px,56.063px);
          }
          97.222% {
            transform:translate(54.063px,56.063px);
          }
          97.917% {
            transform:translate(54.063px,56.063px);
          }
          98.611% {
            transform:translate(54.063px,56.063px);
          }
          99.306% {
            transform:translate(54.063px,56.063px);
          }
          100% {
            transform:translate(54.063px,56.063px);
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .cobweb {
            d:path('M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L52.372 53.875');
          }
          .period {
            transform:translate(52.372px,53.875px);
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Cobweb Price Dynamics">
        <path d="M20 15V122H127" fill="none" stroke="#8da989"/>
        <text x="9" y="20" font-family="sans-serif" font-size="9" fill="#c9d6b9">P</text>
        <text x="127" y="134" font-family="sans-serif" font-size="9" fill="#c9d6b9">Q</text>
        <path d="M20 22L120 122" stroke="#82bfc9" stroke-width="1.6"/>
        <path d="M20 122L70 22" stroke="#c3b180" stroke-width="1.6"/>
        <circle cx="53.333" cy="55.333" r="2" fill="#c4d5a8"/>
        <path d="M20 102L30 102L30 32L65 32L65 67L47.5 67L47.5 49.5L56.25 49.5L56.25 58.25L51.875 58.25L51.875 53.875L54.063 53.875L54.063 56.063" class="cobweb" fill="none" stroke="#e5c884" stroke-width="1.4"/>
        <circle cx="0" cy="0" r="2.5" class="period" fill="#e9d298"/>
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

if (!customElements.get("concept-cobweb-price-dynamics")) {
  customElements.define("concept-cobweb-price-dynamics", ConceptCobwebPriceDynamics);
}
