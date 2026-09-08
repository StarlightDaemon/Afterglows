// Strain-Gauge Wheatstone Bridge. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptStrainGaugeWheatstoneBridge extends HTMLElement {
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
        .substrate {
          fill:#17372a;
          stroke:#375b51;
          stroke-width:1
        }
        .foil-meander {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.3
        }
        .foil {
          transform-origin:70px 30px;
          transform:scaleX(1.1);
          animation:strain-foil 8s linear infinite
        }
        .callout {
          fill:none;
          stroke:#f3c977;
          stroke-width:.8;
          stroke-dasharray:2 3;
          opacity:.6
        }
        .bridge-active {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.7;
          stroke-linejoin:round
        }
        .bridge-output {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.7;
          stroke-linejoin:round;
          animation:strain-output 8s linear infinite
        }
        .bridge-plus,.bridge-minus {
          fill:#77c9ef;
          font:10px monospace
        }
        @keyframes strain-foil {
          0% {
            transform:scaleX(1)
          }
          0.625% {
            transform:scaleX(1.004)
          }
          1.25% {
            transform:scaleX(1.008)
          }
          1.875% {
            transform:scaleX(1.012)
          }
          2.5% {
            transform:scaleX(1.016)
          }
          3.125% {
            transform:scaleX(1.02)
          }
          3.75% {
            transform:scaleX(1.023)
          }
          4.375% {
            transform:scaleX(1.027)
          }
          5% {
            transform:scaleX(1.031)
          }
          5.625% {
            transform:scaleX(1.035)
          }
          6.25% {
            transform:scaleX(1.038)
          }
          6.875% {
            transform:scaleX(1.042)
          }
          7.5% {
            transform:scaleX(1.045)
          }
          8.125% {
            transform:scaleX(1.049)
          }
          8.75% {
            transform:scaleX(1.052)
          }
          9.375% {
            transform:scaleX(1.056)
          }
          10% {
            transform:scaleX(1.059)
          }
          10.625% {
            transform:scaleX(1.062)
          }
          11.25% {
            transform:scaleX(1.065)
          }
          11.875% {
            transform:scaleX(1.068)
          }
          12.5% {
            transform:scaleX(1.071)
          }
          13.125% {
            transform:scaleX(1.073)
          }
          13.75% {
            transform:scaleX(1.076)
          }
          14.375% {
            transform:scaleX(1.079)
          }
          15% {
            transform:scaleX(1.081)
          }
          15.625% {
            transform:scaleX(1.083)
          }
          16.25% {
            transform:scaleX(1.085)
          }
          16.875% {
            transform:scaleX(1.087)
          }
          17.5% {
            transform:scaleX(1.089)
          }
          18.125% {
            transform:scaleX(1.091)
          }
          18.75% {
            transform:scaleX(1.092)
          }
          19.375% {
            transform:scaleX(1.094)
          }
          20% {
            transform:scaleX(1.095)
          }
          20.625% {
            transform:scaleX(1.096)
          }
          21.25% {
            transform:scaleX(1.097)
          }
          21.875% {
            transform:scaleX(1.098)
          }
          22.5% {
            transform:scaleX(1.099)
          }
          23.125% {
            transform:scaleX(1.099)
          }
          23.75% {
            transform:scaleX(1.1)
          }
          24.375% {
            transform:scaleX(1.1)
          }
          25% {
            transform:scaleX(1.1)
          }
          25.625% {
            transform:scaleX(1.1)
          }
          26.25% {
            transform:scaleX(1.1)
          }
          26.875% {
            transform:scaleX(1.099)
          }
          27.5% {
            transform:scaleX(1.099)
          }
          28.125% {
            transform:scaleX(1.098)
          }
          28.75% {
            transform:scaleX(1.097)
          }
          29.375% {
            transform:scaleX(1.096)
          }
          30% {
            transform:scaleX(1.095)
          }
          30.625% {
            transform:scaleX(1.094)
          }
          31.25% {
            transform:scaleX(1.092)
          }
          31.875% {
            transform:scaleX(1.091)
          }
          32.5% {
            transform:scaleX(1.089)
          }
          33.125% {
            transform:scaleX(1.087)
          }
          33.75% {
            transform:scaleX(1.085)
          }
          34.375% {
            transform:scaleX(1.083)
          }
          35% {
            transform:scaleX(1.081)
          }
          35.625% {
            transform:scaleX(1.079)
          }
          36.25% {
            transform:scaleX(1.076)
          }
          36.875% {
            transform:scaleX(1.073)
          }
          37.5% {
            transform:scaleX(1.071)
          }
          38.125% {
            transform:scaleX(1.068)
          }
          38.75% {
            transform:scaleX(1.065)
          }
          39.375% {
            transform:scaleX(1.062)
          }
          40% {
            transform:scaleX(1.059)
          }
          40.625% {
            transform:scaleX(1.056)
          }
          41.25% {
            transform:scaleX(1.052)
          }
          41.875% {
            transform:scaleX(1.049)
          }
          42.5% {
            transform:scaleX(1.045)
          }
          43.125% {
            transform:scaleX(1.042)
          }
          43.75% {
            transform:scaleX(1.038)
          }
          44.375% {
            transform:scaleX(1.035)
          }
          45% {
            transform:scaleX(1.031)
          }
          45.625% {
            transform:scaleX(1.027)
          }
          46.25% {
            transform:scaleX(1.023)
          }
          46.875% {
            transform:scaleX(1.02)
          }
          47.5% {
            transform:scaleX(1.016)
          }
          48.125% {
            transform:scaleX(1.012)
          }
          48.75% {
            transform:scaleX(1.008)
          }
          49.375% {
            transform:scaleX(1.004)
          }
          50% {
            transform:scaleX(1)
          }
          50.625% {
            transform:scaleX(0.996)
          }
          51.25% {
            transform:scaleX(0.992)
          }
          51.875% {
            transform:scaleX(0.988)
          }
          52.5% {
            transform:scaleX(0.984)
          }
          53.125% {
            transform:scaleX(0.98)
          }
          53.75% {
            transform:scaleX(0.977)
          }
          54.375% {
            transform:scaleX(0.973)
          }
          55.0% {
            transform:scaleX(0.969)
          }
          55.625% {
            transform:scaleX(0.965)
          }
          56.25% {
            transform:scaleX(0.962)
          }
          56.875% {
            transform:scaleX(0.958)
          }
          57.5% {
            transform:scaleX(0.955)
          }
          58.125% {
            transform:scaleX(0.951)
          }
          58.75% {
            transform:scaleX(0.948)
          }
          59.375% {
            transform:scaleX(0.944)
          }
          60% {
            transform:scaleX(0.941)
          }
          60.625% {
            transform:scaleX(0.938)
          }
          61.25% {
            transform:scaleX(0.935)
          }
          61.875% {
            transform:scaleX(0.932)
          }
          62.5% {
            transform:scaleX(0.929)
          }
          63.125% {
            transform:scaleX(0.927)
          }
          63.75% {
            transform:scaleX(0.924)
          }
          64.375% {
            transform:scaleX(0.921)
          }
          65% {
            transform:scaleX(0.919)
          }
          65.625% {
            transform:scaleX(0.917)
          }
          66.25% {
            transform:scaleX(0.915)
          }
          66.875% {
            transform:scaleX(0.913)
          }
          67.5% {
            transform:scaleX(0.911)
          }
          68.125% {
            transform:scaleX(0.909)
          }
          68.75% {
            transform:scaleX(0.908)
          }
          69.375% {
            transform:scaleX(0.906)
          }
          70% {
            transform:scaleX(0.905)
          }
          70.625% {
            transform:scaleX(0.904)
          }
          71.25% {
            transform:scaleX(0.903)
          }
          71.875% {
            transform:scaleX(0.902)
          }
          72.5% {
            transform:scaleX(0.901)
          }
          73.125% {
            transform:scaleX(0.901)
          }
          73.75% {
            transform:scaleX(0.9)
          }
          74.375% {
            transform:scaleX(0.9)
          }
          75% {
            transform:scaleX(0.9)
          }
          75.625% {
            transform:scaleX(0.9)
          }
          76.25% {
            transform:scaleX(0.9)
          }
          76.875% {
            transform:scaleX(0.901)
          }
          77.5% {
            transform:scaleX(0.901)
          }
          78.125% {
            transform:scaleX(0.902)
          }
          78.75% {
            transform:scaleX(0.903)
          }
          79.375% {
            transform:scaleX(0.904)
          }
          80% {
            transform:scaleX(0.905)
          }
          80.625% {
            transform:scaleX(0.906)
          }
          81.25% {
            transform:scaleX(0.908)
          }
          81.875% {
            transform:scaleX(0.909)
          }
          82.5% {
            transform:scaleX(0.911)
          }
          83.125% {
            transform:scaleX(0.913)
          }
          83.75% {
            transform:scaleX(0.915)
          }
          84.375% {
            transform:scaleX(0.917)
          }
          85% {
            transform:scaleX(0.919)
          }
          85.625% {
            transform:scaleX(0.921)
          }
          86.25% {
            transform:scaleX(0.924)
          }
          86.875% {
            transform:scaleX(0.927)
          }
          87.5% {
            transform:scaleX(0.929)
          }
          88.125% {
            transform:scaleX(0.932)
          }
          88.75% {
            transform:scaleX(0.935)
          }
          89.375% {
            transform:scaleX(0.938)
          }
          90% {
            transform:scaleX(0.941)
          }
          90.625% {
            transform:scaleX(0.944)
          }
          91.25% {
            transform:scaleX(0.948)
          }
          91.875% {
            transform:scaleX(0.951)
          }
          92.5% {
            transform:scaleX(0.955)
          }
          93.125% {
            transform:scaleX(0.958)
          }
          93.75% {
            transform:scaleX(0.962)
          }
          94.375% {
            transform:scaleX(0.965)
          }
          95% {
            transform:scaleX(0.969)
          }
          95.625% {
            transform:scaleX(0.973)
          }
          96.25% {
            transform:scaleX(0.977)
          }
          96.875% {
            transform:scaleX(0.98)
          }
          97.5% {
            transform:scaleX(0.984)
          }
          98.125% {
            transform:scaleX(0.988)
          }
          98.75% {
            transform:scaleX(0.992)
          }
          99.375% {
            transform:scaleX(0.996)
          }
          100% {
            transform:scaleX(1)
          }
        }
        @keyframes strain-output {
          0% {
            d:path("M70 84H70M70 84L70 84L70 84")
          }
          0.625% {
            d:path("M70 84H69.215M70 83.215L69.215 84L70 84.785")
          }
          1.25% {
            d:path("M70 84H68.431M70 82.431L68.431 84L70 85.569")
          }
          1.875% {
            d:path("M70 84H67.65M70 81.65L67.65 84L70 86.35")
          }
          2.5% {
            d:path("M70 84H66.872M69.872 81L66.872 84L69.872 87")
          }
          3.125% {
            d:path("M70 84H66.1M69.1 81L66.1 84L69.1 87")
          }
          3.75% {
            d:path("M70 84H65.333M68.333 81L65.333 84L68.333 87")
          }
          4.375% {
            d:path("M70 84H64.574M67.574 81L64.574 84L67.574 87")
          }
          5% {
            d:path("M70 84H63.823M66.823 81L63.823 84L66.823 87")
          }
          5.625% {
            d:path("M70 84H63.082M66.082 81L63.082 84L66.082 87")
          }
          6.25% {
            d:path("M70 84H62.352M65.352 81L62.352 84L65.352 87")
          }
          6.875% {
            d:path("M70 84H61.634M64.634 81L61.634 84L64.634 87")
          }
          7.5% {
            d:path("M70 84H60.928M63.928 81L60.928 84L63.928 87")
          }
          8.125% {
            d:path("M70 84H60.237M63.237 81L60.237 84L63.237 87")
          }
          8.75% {
            d:path("M70 84H59.561M62.561 81L59.561 84L62.561 87")
          }
          9.375% {
            d:path("M70 84H58.901M61.901 81L58.901 84L61.901 87")
          }
          10% {
            d:path("M70 84H58.258M61.258 81L58.258 84L61.258 87")
          }
          10.625% {
            d:path("M70 84H57.633M60.633 81L57.633 84L60.633 87")
          }
          11.25% {
            d:path("M70 84H57.028M60.028 81L57.028 84L60.028 87")
          }
          11.875% {
            d:path("M70 84H56.442M59.442 81L56.442 84L59.442 87")
          }
          12.5% {
            d:path("M70 84H55.878M58.878 81L55.878 84L58.878 87")
          }
          13.125% {
            d:path("M70 84H55.335M58.335 81L55.335 84L58.335 87")
          }
          13.75% {
            d:path("M70 84H54.815M57.815 81L54.815 84L57.815 87")
          }
          14.375% {
            d:path("M70 84H54.318M57.318 81L54.318 84L57.318 87")
          }
          15% {
            d:path("M70 84H53.846M56.846 81L53.846 84L56.846 87")
          }
          15.625% {
            d:path("M70 84H53.398M56.398 81L53.398 84L56.398 87")
          }
          16.25% {
            d:path("M70 84H52.976M55.976 81L52.976 84L55.976 87")
          }
          16.875% {
            d:path("M70 84H52.58M55.58 81L52.58 84L55.58 87")
          }
          17.5% {
            d:path("M70 84H52.212M55.212 81L52.212 84L55.212 87")
          }
          18.125% {
            d:path("M70 84H51.87M54.87 81L51.87 84L54.87 87")
          }
          18.75% {
            d:path("M70 84H51.556M54.556 81L51.556 84L54.556 87")
          }
          19.375% {
            d:path("M70 84H51.271M54.271 81L51.271 84L54.271 87")
          }
          20% {
            d:path("M70 84H51.015M54.015 81L51.015 84L54.015 87")
          }
          20.625% {
            d:path("M70 84H50.788M53.788 81L50.788 84L53.788 87")
          }
          21.25% {
            d:path("M70 84H50.59M53.59 81L50.59 84L53.59 87")
          }
          21.875% {
            d:path("M70 84H50.423M53.423 81L50.423 84L53.423 87")
          }
          22.5% {
            d:path("M70 84H50.285M53.285 81L50.285 84L53.285 87")
          }
          23.125% {
            d:path("M70 84H50.178M53.178 81L50.178 84L53.178 87")
          }
          23.75% {
            d:path("M70 84H50.101M53.101 81L50.101 84L53.101 87")
          }
          24.375% {
            d:path("M70 84H50.055M53.055 81L50.055 84L53.055 87")
          }
          25% {
            d:path("M70 84H50.04M53.04 81L50.04 84L53.04 87")
          }
          25.625% {
            d:path("M70 84H50.055M53.055 81L50.055 84L53.055 87")
          }
          26.25% {
            d:path("M70 84H50.101M53.101 81L50.101 84L53.101 87")
          }
          26.875% {
            d:path("M70 84H50.178M53.178 81L50.178 84L53.178 87")
          }
          27.5% {
            d:path("M70 84H50.285M53.285 81L50.285 84L53.285 87")
          }
          28.125% {
            d:path("M70 84H50.423M53.423 81L50.423 84L53.423 87")
          }
          28.75% {
            d:path("M70 84H50.59M53.59 81L50.59 84L53.59 87")
          }
          29.375% {
            d:path("M70 84H50.788M53.788 81L50.788 84L53.788 87")
          }
          30% {
            d:path("M70 84H51.015M54.015 81L51.015 84L54.015 87")
          }
          30.625% {
            d:path("M70 84H51.271M54.271 81L51.271 84L54.271 87")
          }
          31.25% {
            d:path("M70 84H51.556M54.556 81L51.556 84L54.556 87")
          }
          31.875% {
            d:path("M70 84H51.87M54.87 81L51.87 84L54.87 87")
          }
          32.5% {
            d:path("M70 84H52.212M55.212 81L52.212 84L55.212 87")
          }
          33.125% {
            d:path("M70 84H52.58M55.58 81L52.58 84L55.58 87")
          }
          33.75% {
            d:path("M70 84H52.976M55.976 81L52.976 84L55.976 87")
          }
          34.375% {
            d:path("M70 84H53.398M56.398 81L53.398 84L56.398 87")
          }
          35% {
            d:path("M70 84H53.846M56.846 81L53.846 84L56.846 87")
          }
          35.625% {
            d:path("M70 84H54.318M57.318 81L54.318 84L57.318 87")
          }
          36.25% {
            d:path("M70 84H54.815M57.815 81L54.815 84L57.815 87")
          }
          36.875% {
            d:path("M70 84H55.335M58.335 81L55.335 84L58.335 87")
          }
          37.5% {
            d:path("M70 84H55.878M58.878 81L55.878 84L58.878 87")
          }
          38.125% {
            d:path("M70 84H56.442M59.442 81L56.442 84L59.442 87")
          }
          38.75% {
            d:path("M70 84H57.028M60.028 81L57.028 84L60.028 87")
          }
          39.375% {
            d:path("M70 84H57.633M60.633 81L57.633 84L60.633 87")
          }
          40% {
            d:path("M70 84H58.258M61.258 81L58.258 84L61.258 87")
          }
          40.625% {
            d:path("M70 84H58.901M61.901 81L58.901 84L61.901 87")
          }
          41.25% {
            d:path("M70 84H59.561M62.561 81L59.561 84L62.561 87")
          }
          41.875% {
            d:path("M70 84H60.237M63.237 81L60.237 84L63.237 87")
          }
          42.5% {
            d:path("M70 84H60.928M63.928 81L60.928 84L63.928 87")
          }
          43.125% {
            d:path("M70 84H61.634M64.634 81L61.634 84L64.634 87")
          }
          43.75% {
            d:path("M70 84H62.352M65.352 81L62.352 84L65.352 87")
          }
          44.375% {
            d:path("M70 84H63.082M66.082 81L63.082 84L66.082 87")
          }
          45% {
            d:path("M70 84H63.823M66.823 81L63.823 84L66.823 87")
          }
          45.625% {
            d:path("M70 84H64.574M67.574 81L64.574 84L67.574 87")
          }
          46.25% {
            d:path("M70 84H65.333M68.333 81L65.333 84L68.333 87")
          }
          46.875% {
            d:path("M70 84H66.1M69.1 81L66.1 84L69.1 87")
          }
          47.5% {
            d:path("M70 84H66.872M69.872 81L66.872 84L69.872 87")
          }
          48.125% {
            d:path("M70 84H67.65M70 81.65L67.65 84L70 86.35")
          }
          48.75% {
            d:path("M70 84H68.431M70 82.431L68.431 84L70 85.569")
          }
          49.375% {
            d:path("M70 84H69.215M70 83.215L69.215 84L70 84.785")
          }
          50% {
            d:path("M70 84H70M70 84L70 84L70 84")
          }
          50.625% {
            d:path("M70 84H70.785M70 83.215L70.785 84L70 84.785")
          }
          51.25% {
            d:path("M70 84H71.569M70 82.431L71.569 84L70 85.569")
          }
          51.875% {
            d:path("M70 84H72.351M70 81.649L72.351 84L70 86.351")
          }
          52.5% {
            d:path("M70 84H73.13M70.13 81L73.13 84L70.13 87")
          }
          53.125% {
            d:path("M70 84H73.903M70.903 81L73.903 84L70.903 87")
          }
          53.75% {
            d:path("M70 84H74.671M71.671 81L74.671 84L71.671 87")
          }
          54.375% {
            d:path("M70 84H75.432M72.432 81L75.432 84L72.432 87")
          }
          55.0% {
            d:path("M70 84H76.184M73.184 81L76.184 84L73.184 87")
          }
          55.625% {
            d:path("M70 84H76.927M73.927 81L76.927 84L73.927 87")
          }
          56.25% {
            d:path("M70 84H77.66M74.66 81L77.66 84L74.66 87")
          }
          56.875% {
            d:path("M70 84H78.38M75.38 81L78.38 84L75.38 87")
          }
          57.5% {
            d:path("M70 84H79.088M76.088 81L79.088 84L76.088 87")
          }
          58.125% {
            d:path("M70 84H79.782M76.782 81L79.782 84L76.782 87")
          }
          58.75% {
            d:path("M70 84H80.461M77.461 81L80.461 84L77.461 87")
          }
          59.375% {
            d:path("M70 84H81.124M78.124 81L81.124 84L78.124 87")
          }
          60% {
            d:path("M70 84H81.77M78.77 81L81.77 84L78.77 87")
          }
          60.625% {
            d:path("M70 84H82.397M79.397 81L82.397 84L79.397 87")
          }
          61.25% {
            d:path("M70 84H83.006M80.006 81L83.006 84L80.006 87")
          }
          61.875% {
            d:path("M70 84H83.594M80.594 81L83.594 84L80.594 87")
          }
          62.5% {
            d:path("M70 84H84.162M81.162 81L84.162 84L81.162 87")
          }
          63.125% {
            d:path("M70 84H84.708M81.708 81L84.708 84L81.708 87")
          }
          63.75% {
            d:path("M70 84H85.231M82.231 81L85.231 84L82.231 87")
          }
          64.375% {
            d:path("M70 84H85.731M82.731 81L85.731 84L82.731 87")
          }
          65% {
            d:path("M70 84H86.207M83.207 81L86.207 84L83.207 87")
          }
          65.625% {
            d:path("M70 84H86.657M83.657 81L86.657 84L83.657 87")
          }
          66.25% {
            d:path("M70 84H87.082M84.082 81L87.082 84L84.082 87")
          }
          66.875% {
            d:path("M70 84H87.48M84.48 81L87.48 84L84.48 87")
          }
          67.5% {
            d:path("M70 84H87.852M84.852 81L87.852 84L84.852 87")
          }
          68.125% {
            d:path("M70 84H88.196M85.196 81L88.196 84L85.196 87")
          }
          68.75% {
            d:path("M70 84H88.512M85.512 81L88.512 84L85.512 87")
          }
          69.375% {
            d:path("M70 84H88.799M85.799 81L88.799 84L85.799 87")
          }
          70% {
            d:path("M70 84H89.057M86.057 81L89.057 84L86.057 87")
          }
          70.625% {
            d:path("M70 84H89.286M86.286 81L89.286 84L86.286 87")
          }
          71.25% {
            d:path("M70 84H89.485M86.485 81L89.485 84L86.485 87")
          }
          71.875% {
            d:path("M70 84H89.654M86.654 81L89.654 84L86.654 87")
          }
          72.5% {
            d:path("M70 84H89.793M86.793 81L89.793 84L86.793 87")
          }
          73.125% {
            d:path("M70 84H89.901M86.901 81L89.901 84L86.901 87")
          }
          73.75% {
            d:path("M70 84H89.978M86.978 81L89.978 84L86.978 87")
          }
          74.375% {
            d:path("M70 84H90.025M87.025 81L90.025 84L87.025 87")
          }
          75% {
            d:path("M70 84H90.04M87.04 81L90.04 84L87.04 87")
          }
          75.625% {
            d:path("M70 84H90.025M87.025 81L90.025 84L87.025 87")
          }
          76.25% {
            d:path("M70 84H89.978M86.978 81L89.978 84L86.978 87")
          }
          76.875% {
            d:path("M70 84H89.901M86.901 81L89.901 84L86.901 87")
          }
          77.5% {
            d:path("M70 84H89.793M86.793 81L89.793 84L86.793 87")
          }
          78.125% {
            d:path("M70 84H89.654M86.654 81L89.654 84L86.654 87")
          }
          78.75% {
            d:path("M70 84H89.485M86.485 81L89.485 84L86.485 87")
          }
          79.375% {
            d:path("M70 84H89.286M86.286 81L89.286 84L86.286 87")
          }
          80% {
            d:path("M70 84H89.057M86.057 81L89.057 84L86.057 87")
          }
          80.625% {
            d:path("M70 84H88.799M85.799 81L88.799 84L85.799 87")
          }
          81.25% {
            d:path("M70 84H88.512M85.512 81L88.512 84L85.512 87")
          }
          81.875% {
            d:path("M70 84H88.196M85.196 81L88.196 84L85.196 87")
          }
          82.5% {
            d:path("M70 84H87.852M84.852 81L87.852 84L84.852 87")
          }
          83.125% {
            d:path("M70 84H87.48M84.48 81L87.48 84L84.48 87")
          }
          83.75% {
            d:path("M70 84H87.082M84.082 81L87.082 84L84.082 87")
          }
          84.375% {
            d:path("M70 84H86.657M83.657 81L86.657 84L83.657 87")
          }
          85% {
            d:path("M70 84H86.207M83.207 81L86.207 84L83.207 87")
          }
          85.625% {
            d:path("M70 84H85.731M82.731 81L85.731 84L82.731 87")
          }
          86.25% {
            d:path("M70 84H85.231M82.231 81L85.231 84L82.231 87")
          }
          86.875% {
            d:path("M70 84H84.708M81.708 81L84.708 84L81.708 87")
          }
          87.5% {
            d:path("M70 84H84.162M81.162 81L84.162 84L81.162 87")
          }
          88.125% {
            d:path("M70 84H83.594M80.594 81L83.594 84L80.594 87")
          }
          88.75% {
            d:path("M70 84H83.006M80.006 81L83.006 84L80.006 87")
          }
          89.375% {
            d:path("M70 84H82.397M79.397 81L82.397 84L79.397 87")
          }
          90% {
            d:path("M70 84H81.77M78.77 81L81.77 84L78.77 87")
          }
          90.625% {
            d:path("M70 84H81.124M78.124 81L81.124 84L78.124 87")
          }
          91.25% {
            d:path("M70 84H80.461M77.461 81L80.461 84L77.461 87")
          }
          91.875% {
            d:path("M70 84H79.782M76.782 81L79.782 84L76.782 87")
          }
          92.5% {
            d:path("M70 84H79.088M76.088 81L79.088 84L76.088 87")
          }
          93.125% {
            d:path("M70 84H78.38M75.38 81L78.38 84L75.38 87")
          }
          93.75% {
            d:path("M70 84H77.66M74.66 81L77.66 84L74.66 87")
          }
          94.375% {
            d:path("M70 84H76.927M73.927 81L76.927 84L73.927 87")
          }
          95% {
            d:path("M70 84H76.184M73.184 81L76.184 84L73.184 87")
          }
          95.625% {
            d:path("M70 84H75.432M72.432 81L75.432 84L72.432 87")
          }
          96.25% {
            d:path("M70 84H74.671M71.671 81L74.671 84L71.671 87")
          }
          96.875% {
            d:path("M70 84H73.903M70.903 81L73.903 84L70.903 87")
          }
          97.5% {
            d:path("M70 84H73.13M70.13 81L73.13 84L70.13 87")
          }
          98.125% {
            d:path("M70 84H72.351M70 81.649L72.351 84L70 86.351")
          }
          98.75% {
            d:path("M70 84H71.569M70 82.431L71.569 84L70 85.569")
          }
          99.375% {
            d:path("M70 84H70.785M70 83.215L70.785 84L70 84.785")
          }
          100% {
            d:path("M70 84H70M70 84L70 84L70 84")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Strain-Gauge Wheatstone Bridge">
        <g class="foil">
          <rect class="substrate" x="42" y="21" width="56" height="18" rx="2"/>
          <path class="foil-meander" d="M43 27H46V35H51V25H56V35H61V25H66V35H71V25H76V35H81V25H86V35H91V25H96V27H97"/>
          <path class="ink muted" d="M36 21V39M104 21V39M36 30H42M98 30H104"/>
        </g>
        <path class="callout" d="M44 40L60 67"/>
        <path class="bridge-active" d="M70,59L63.4 64L59.364 64.549L58.951 69.88L53.707 68.834L53.293 74.166L48.049 73.12L47.636 78.451L43.6 79L37,84"/>
        <path class="ink" d="M70,59L76.6 64L78.221 67.737L83.465 66.692L83.878 72.023L89.122 70.977L89.535 76.308L94.779 75.263L96.4 79L103,84M37,84L43.6 89L45.221 92.737L50.465 91.692L50.878 97.023L56.122 95.977L56.535 101.308L61.779 100.263L63.4 104L70,109M103,84L96.4 89L92.364 89.549L91.951 94.88L86.707 93.834L86.293 99.166L81.049 98.12L80.636 103.451L76.6 104L70,109"/>
        <path class="ink muted" d="M70 50V59M70 109V120M37 84H45M95 84H103"/>
        <circle class="solid" cx="70" cy="59" r="2"/>
        <circle class="solid" cx="70" cy="109" r="2"/>
        <circle class="solid" cx="37" cy="84" r="2"/>
        <circle class="solid" cx="103" cy="84" r="2"/>
        <text class="bridge-plus" x="42" y="98">+</text>
        <text class="bridge-minus" x="94" y="98">−</text>
        <path class="bridge-output" d="M70 84H50.04M53.04 81L50.04 84L53.04 87"/>
        <path class="ink muted" d="M65 120H75M67 123H73"/>
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

if (!customElements.get("concept-strain-gauge-wheatstone-bridge")) {
  customElements.define("concept-strain-gauge-wheatstone-bridge", ConceptStrainGaugeWheatstoneBridge);
}
