// Seismic Base Isolation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSeismicBaseIsolation extends HTMLElement {
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
        .foundation {
          animation:foundation 16s linear infinite;
        }
        .tower {
          animation:tower 16s linear infinite;
        }
        .lam00 {
          animation:lam00 16s linear infinite;
        }
        .lam01 {
          animation:lam01 16s linear infinite;
        }
        .lam02 {
          animation:lam02 16s linear infinite;
        }
        .lam03 {
          animation:lam03 16s linear infinite;
        }
        .lam04 {
          animation:lam04 16s linear infinite;
        }
        .lam10 {
          animation:lam10 16s linear infinite;
        }
        .lam11 {
          animation:lam11 16s linear infinite;
        }
        .lam12 {
          animation:lam12 16s linear infinite;
        }
        .lam13 {
          animation:lam13 16s linear infinite;
        }
        .lam14 {
          animation:lam14 16s linear infinite;
        }
        .lam20 {
          animation:lam20 16s linear infinite;
        }
        .lam21 {
          animation:lam21 16s linear infinite;
        }
        .lam22 {
          animation:lam22 16s linear infinite;
        }
        .lam23 {
          animation:lam23 16s linear infinite;
        }
        .lam24 {
          animation:lam24 16s linear infinite;
        }
        @keyframes foundation {
          0% {
            transform:translate(7px,0px);
          }
          2.083% {
            transform:translate(6.062px,0px);
          }
          4.167% {
            transform:translate(3.5px,0px);
          }
          6.25% {
            transform:translate(0px,0px);
          }
          8.333% {
            transform:translate(-3.5px,0px);
          }
          10.417% {
            transform:translate(-6.062px,0px);
          }
          12.5% {
            transform:translate(-7px,0px);
          }
          14.583% {
            transform:translate(-6.062px,0px);
          }
          16.667% {
            transform:translate(-3.5px,0px);
          }
          18.75% {
            transform:translate(0px,0px);
          }
          20.833% {
            transform:translate(3.5px,0px);
          }
          22.917% {
            transform:translate(6.062px,0px);
          }
          25% {
            transform:translate(7px,0px);
          }
          27.083% {
            transform:translate(6.062px,0px);
          }
          29.167% {
            transform:translate(3.5px,0px);
          }
          31.25% {
            transform:translate(0px,0px);
          }
          33.333% {
            transform:translate(-3.5px,0px);
          }
          35.417% {
            transform:translate(-6.062px,0px);
          }
          37.5% {
            transform:translate(-7px,0px);
          }
          39.583% {
            transform:translate(-6.062px,0px);
          }
          41.667% {
            transform:translate(-3.5px,0px);
          }
          43.75% {
            transform:translate(0px,0px);
          }
          45.833% {
            transform:translate(3.5px,0px);
          }
          47.917% {
            transform:translate(6.062px,0px);
          }
          50% {
            transform:translate(7px,0px);
          }
          52.083% {
            transform:translate(6.062px,0px);
          }
          54.167% {
            transform:translate(3.5px,0px);
          }
          56.25% {
            transform:translate(0px,0px);
          }
          58.333% {
            transform:translate(-3.5px,0px);
          }
          60.417% {
            transform:translate(-6.062px,0px);
          }
          62.5% {
            transform:translate(-7px,0px);
          }
          64.583% {
            transform:translate(-6.062px,0px);
          }
          66.667% {
            transform:translate(-3.5px,0px);
          }
          68.75% {
            transform:translate(0px,0px);
          }
          70.833% {
            transform:translate(3.5px,0px);
          }
          72.917% {
            transform:translate(6.062px,0px);
          }
          75% {
            transform:translate(7px,0px);
          }
          77.083% {
            transform:translate(6.062px,0px);
          }
          79.167% {
            transform:translate(3.5px,0px);
          }
          81.25% {
            transform:translate(0px,0px);
          }
          83.333% {
            transform:translate(-3.5px,0px);
          }
          85.417% {
            transform:translate(-6.062px,0px);
          }
          87.5% {
            transform:translate(-7px,0px);
          }
          89.583% {
            transform:translate(-6.062px,0px);
          }
          91.667% {
            transform:translate(-3.5px,0px);
          }
          93.75% {
            transform:translate(0px,0px);
          }
          95.833% {
            transform:translate(3.5px,0px);
          }
          97.917% {
            transform:translate(6.062px,0px);
          }
          100% {
            transform:translate(7px,0px);
          }
        }
        @keyframes tower {
          0% {
            transform:translate(-0.702px,0px);
          }
          2.083% {
            transform:translate(-0.03px,0px);
          }
          4.167% {
            transform:translate(0.65px,0px);
          }
          6.25% {
            transform:translate(1.155px,0px);
          }
          8.333% {
            transform:translate(1.351px,0px);
          }
          10.417% {
            transform:translate(1.185px,0px);
          }
          12.5% {
            transform:translate(0.702px,0px);
          }
          14.583% {
            transform:translate(0.03px,0px);
          }
          16.667% {
            transform:translate(-0.65px,0px);
          }
          18.75% {
            transform:translate(-1.155px,0px);
          }
          20.833% {
            transform:translate(-1.351px,0px);
          }
          22.917% {
            transform:translate(-1.185px,0px);
          }
          25% {
            transform:translate(-0.702px,0px);
          }
          27.083% {
            transform:translate(-0.03px,0px);
          }
          29.167% {
            transform:translate(0.65px,0px);
          }
          31.25% {
            transform:translate(1.155px,0px);
          }
          33.333% {
            transform:translate(1.351px,0px);
          }
          35.417% {
            transform:translate(1.185px,0px);
          }
          37.5% {
            transform:translate(0.702px,0px);
          }
          39.583% {
            transform:translate(0.03px,0px);
          }
          41.667% {
            transform:translate(-0.65px,0px);
          }
          43.75% {
            transform:translate(-1.155px,0px);
          }
          45.833% {
            transform:translate(-1.351px,0px);
          }
          47.917% {
            transform:translate(-1.185px,0px);
          }
          50% {
            transform:translate(-0.702px,0px);
          }
          52.083% {
            transform:translate(-0.03px,0px);
          }
          54.167% {
            transform:translate(0.65px,0px);
          }
          56.25% {
            transform:translate(1.155px,0px);
          }
          58.333% {
            transform:translate(1.351px,0px);
          }
          60.417% {
            transform:translate(1.185px,0px);
          }
          62.5% {
            transform:translate(0.702px,0px);
          }
          64.583% {
            transform:translate(0.03px,0px);
          }
          66.667% {
            transform:translate(-0.65px,0px);
          }
          68.75% {
            transform:translate(-1.155px,0px);
          }
          70.833% {
            transform:translate(-1.351px,0px);
          }
          72.917% {
            transform:translate(-1.185px,0px);
          }
          75% {
            transform:translate(-0.702px,0px);
          }
          77.083% {
            transform:translate(-0.03px,0px);
          }
          79.167% {
            transform:translate(0.65px,0px);
          }
          81.25% {
            transform:translate(1.155px,0px);
          }
          83.333% {
            transform:translate(1.351px,0px);
          }
          85.417% {
            transform:translate(1.185px,0px);
          }
          87.5% {
            transform:translate(0.702px,0px);
          }
          89.583% {
            transform:translate(0.03px,0px);
          }
          91.667% {
            transform:translate(-0.65px,0px);
          }
          93.75% {
            transform:translate(-1.155px,0px);
          }
          95.833% {
            transform:translate(-1.351px,0px);
          }
          97.917% {
            transform:translate(-1.185px,0px);
          }
          100% {
            transform:translate(-0.702px,0px);
          }
        }
        @keyframes lam00 {
          0% {
            d:path('M42 109h12');
          }
          2.083% {
            d:path('M41.062 109h12');
          }
          4.167% {
            d:path('M38.5 109h12');
          }
          6.25% {
            d:path('M35 109h12');
          }
          8.333% {
            d:path('M31.5 109h12');
          }
          10.417% {
            d:path('M28.938 109h12');
          }
          12.5% {
            d:path('M28 109h12');
          }
          14.583% {
            d:path('M28.938 109h12');
          }
          16.667% {
            d:path('M31.5 109h12');
          }
          18.75% {
            d:path('M35 109h12');
          }
          20.833% {
            d:path('M38.5 109h12');
          }
          22.917% {
            d:path('M41.062 109h12');
          }
          25% {
            d:path('M42 109h12');
          }
          27.083% {
            d:path('M41.062 109h12');
          }
          29.167% {
            d:path('M38.5 109h12');
          }
          31.25% {
            d:path('M35 109h12');
          }
          33.333% {
            d:path('M31.5 109h12');
          }
          35.417% {
            d:path('M28.938 109h12');
          }
          37.5% {
            d:path('M28 109h12');
          }
          39.583% {
            d:path('M28.938 109h12');
          }
          41.667% {
            d:path('M31.5 109h12');
          }
          43.75% {
            d:path('M35 109h12');
          }
          45.833% {
            d:path('M38.5 109h12');
          }
          47.917% {
            d:path('M41.062 109h12');
          }
          50% {
            d:path('M42 109h12');
          }
          52.083% {
            d:path('M41.062 109h12');
          }
          54.167% {
            d:path('M38.5 109h12');
          }
          56.25% {
            d:path('M35 109h12');
          }
          58.333% {
            d:path('M31.5 109h12');
          }
          60.417% {
            d:path('M28.938 109h12');
          }
          62.5% {
            d:path('M28 109h12');
          }
          64.583% {
            d:path('M28.938 109h12');
          }
          66.667% {
            d:path('M31.5 109h12');
          }
          68.75% {
            d:path('M35 109h12');
          }
          70.833% {
            d:path('M38.5 109h12');
          }
          72.917% {
            d:path('M41.062 109h12');
          }
          75% {
            d:path('M42 109h12');
          }
          77.083% {
            d:path('M41.062 109h12');
          }
          79.167% {
            d:path('M38.5 109h12');
          }
          81.25% {
            d:path('M35 109h12');
          }
          83.333% {
            d:path('M31.5 109h12');
          }
          85.417% {
            d:path('M28.938 109h12');
          }
          87.5% {
            d:path('M28 109h12');
          }
          89.583% {
            d:path('M28.938 109h12');
          }
          91.667% {
            d:path('M31.5 109h12');
          }
          93.75% {
            d:path('M35 109h12');
          }
          95.833% {
            d:path('M38.5 109h12');
          }
          97.917% {
            d:path('M41.062 109h12');
          }
          100% {
            d:path('M42 109h12');
          }
        }
        @keyframes lam01 {
          0% {
            d:path('M40.075 106.7h12');
          }
          2.083% {
            d:path('M39.539 106.7h12');
          }
          4.167% {
            d:path('M37.787 106.7h12');
          }
          6.25% {
            d:path('M35.289 106.7h12');
          }
          8.333% {
            d:path('M32.713 106.7h12');
          }
          10.417% {
            d:path('M30.75 106.7h12');
          }
          12.5% {
            d:path('M29.925 106.7h12');
          }
          14.583% {
            d:path('M30.461 106.7h12');
          }
          16.667% {
            d:path('M32.213 106.7h12');
          }
          18.75% {
            d:path('M34.711 106.7h12');
          }
          20.833% {
            d:path('M37.287 106.7h12');
          }
          22.917% {
            d:path('M39.25 106.7h12');
          }
          25% {
            d:path('M40.075 106.7h12');
          }
          27.083% {
            d:path('M39.539 106.7h12');
          }
          29.167% {
            d:path('M37.787 106.7h12');
          }
          31.25% {
            d:path('M35.289 106.7h12');
          }
          33.333% {
            d:path('M32.713 106.7h12');
          }
          35.417% {
            d:path('M30.75 106.7h12');
          }
          37.5% {
            d:path('M29.925 106.7h12');
          }
          39.583% {
            d:path('M30.461 106.7h12');
          }
          41.667% {
            d:path('M32.213 106.7h12');
          }
          43.75% {
            d:path('M34.711 106.7h12');
          }
          45.833% {
            d:path('M37.287 106.7h12');
          }
          47.917% {
            d:path('M39.25 106.7h12');
          }
          50% {
            d:path('M40.075 106.7h12');
          }
          52.083% {
            d:path('M39.539 106.7h12');
          }
          54.167% {
            d:path('M37.787 106.7h12');
          }
          56.25% {
            d:path('M35.289 106.7h12');
          }
          58.333% {
            d:path('M32.713 106.7h12');
          }
          60.417% {
            d:path('M30.75 106.7h12');
          }
          62.5% {
            d:path('M29.925 106.7h12');
          }
          64.583% {
            d:path('M30.461 106.7h12');
          }
          66.667% {
            d:path('M32.213 106.7h12');
          }
          68.75% {
            d:path('M34.711 106.7h12');
          }
          70.833% {
            d:path('M37.287 106.7h12');
          }
          72.917% {
            d:path('M39.25 106.7h12');
          }
          75% {
            d:path('M40.075 106.7h12');
          }
          77.083% {
            d:path('M39.539 106.7h12');
          }
          79.167% {
            d:path('M37.787 106.7h12');
          }
          81.25% {
            d:path('M35.289 106.7h12');
          }
          83.333% {
            d:path('M32.713 106.7h12');
          }
          85.417% {
            d:path('M30.75 106.7h12');
          }
          87.5% {
            d:path('M29.925 106.7h12');
          }
          89.583% {
            d:path('M30.461 106.7h12');
          }
          91.667% {
            d:path('M32.213 106.7h12');
          }
          93.75% {
            d:path('M34.711 106.7h12');
          }
          95.833% {
            d:path('M37.287 106.7h12');
          }
          97.917% {
            d:path('M39.25 106.7h12');
          }
          100% {
            d:path('M40.075 106.7h12');
          }
        }
        @keyframes lam02 {
          0% {
            d:path('M38.149 104.4h12');
          }
          2.083% {
            d:path('M38.016 104.4h12');
          }
          4.167% {
            d:path('M37.075 104.4h12');
          }
          6.25% {
            d:path('M35.578 104.4h12');
          }
          8.333% {
            d:path('M33.926 104.4h12');
          }
          10.417% {
            d:path('M32.562 104.4h12');
          }
          12.5% {
            d:path('M31.851 104.4h12');
          }
          14.583% {
            d:path('M31.984 104.4h12');
          }
          16.667% {
            d:path('M32.925 104.4h12');
          }
          18.75% {
            d:path('M34.422 104.4h12');
          }
          20.833% {
            d:path('M36.074 104.4h12');
          }
          22.917% {
            d:path('M37.438 104.4h12');
          }
          25% {
            d:path('M38.149 104.4h12');
          }
          27.083% {
            d:path('M38.016 104.4h12');
          }
          29.167% {
            d:path('M37.075 104.4h12');
          }
          31.25% {
            d:path('M35.578 104.4h12');
          }
          33.333% {
            d:path('M33.926 104.4h12');
          }
          35.417% {
            d:path('M32.562 104.4h12');
          }
          37.5% {
            d:path('M31.851 104.4h12');
          }
          39.583% {
            d:path('M31.984 104.4h12');
          }
          41.667% {
            d:path('M32.925 104.4h12');
          }
          43.75% {
            d:path('M34.422 104.4h12');
          }
          45.833% {
            d:path('M36.074 104.4h12');
          }
          47.917% {
            d:path('M37.438 104.4h12');
          }
          50% {
            d:path('M38.149 104.4h12');
          }
          52.083% {
            d:path('M38.016 104.4h12');
          }
          54.167% {
            d:path('M37.075 104.4h12');
          }
          56.25% {
            d:path('M35.578 104.4h12');
          }
          58.333% {
            d:path('M33.926 104.4h12');
          }
          60.417% {
            d:path('M32.562 104.4h12');
          }
          62.5% {
            d:path('M31.851 104.4h12');
          }
          64.583% {
            d:path('M31.984 104.4h12');
          }
          66.667% {
            d:path('M32.925 104.4h12');
          }
          68.75% {
            d:path('M34.422 104.4h12');
          }
          70.833% {
            d:path('M36.074 104.4h12');
          }
          72.917% {
            d:path('M37.438 104.4h12');
          }
          75% {
            d:path('M38.149 104.4h12');
          }
          77.083% {
            d:path('M38.016 104.4h12');
          }
          79.167% {
            d:path('M37.075 104.4h12');
          }
          81.25% {
            d:path('M35.578 104.4h12');
          }
          83.333% {
            d:path('M33.926 104.4h12');
          }
          85.417% {
            d:path('M32.562 104.4h12');
          }
          87.5% {
            d:path('M31.851 104.4h12');
          }
          89.583% {
            d:path('M31.984 104.4h12');
          }
          91.667% {
            d:path('M32.925 104.4h12');
          }
          93.75% {
            d:path('M34.422 104.4h12');
          }
          95.833% {
            d:path('M36.074 104.4h12');
          }
          97.917% {
            d:path('M37.438 104.4h12');
          }
          100% {
            d:path('M38.149 104.4h12');
          }
        }
        @keyframes lam03 {
          0% {
            d:path('M36.224 102.1h12');
          }
          2.083% {
            d:path('M36.493 102.1h12');
          }
          4.167% {
            d:path('M36.362 102.1h12');
          }
          6.25% {
            d:path('M35.866 102.1h12');
          }
          8.333% {
            d:path('M35.139 102.1h12');
          }
          10.417% {
            d:path('M34.373 102.1h12');
          }
          12.5% {
            d:path('M33.776 102.1h12');
          }
          14.583% {
            d:path('M33.507 102.1h12');
          }
          16.667% {
            d:path('M33.638 102.1h12');
          }
          18.75% {
            d:path('M34.134 102.1h12');
          }
          20.833% {
            d:path('M34.861 102.1h12');
          }
          22.917% {
            d:path('M35.627 102.1h12');
          }
          25% {
            d:path('M36.224 102.1h12');
          }
          27.083% {
            d:path('M36.493 102.1h12');
          }
          29.167% {
            d:path('M36.362 102.1h12');
          }
          31.25% {
            d:path('M35.866 102.1h12');
          }
          33.333% {
            d:path('M35.139 102.1h12');
          }
          35.417% {
            d:path('M34.373 102.1h12');
          }
          37.5% {
            d:path('M33.776 102.1h12');
          }
          39.583% {
            d:path('M33.507 102.1h12');
          }
          41.667% {
            d:path('M33.638 102.1h12');
          }
          43.75% {
            d:path('M34.134 102.1h12');
          }
          45.833% {
            d:path('M34.861 102.1h12');
          }
          47.917% {
            d:path('M35.627 102.1h12');
          }
          50% {
            d:path('M36.224 102.1h12');
          }
          52.083% {
            d:path('M36.493 102.1h12');
          }
          54.167% {
            d:path('M36.362 102.1h12');
          }
          56.25% {
            d:path('M35.866 102.1h12');
          }
          58.333% {
            d:path('M35.139 102.1h12');
          }
          60.417% {
            d:path('M34.373 102.1h12');
          }
          62.5% {
            d:path('M33.776 102.1h12');
          }
          64.583% {
            d:path('M33.507 102.1h12');
          }
          66.667% {
            d:path('M33.638 102.1h12');
          }
          68.75% {
            d:path('M34.134 102.1h12');
          }
          70.833% {
            d:path('M34.861 102.1h12');
          }
          72.917% {
            d:path('M35.627 102.1h12');
          }
          75% {
            d:path('M36.224 102.1h12');
          }
          77.083% {
            d:path('M36.493 102.1h12');
          }
          79.167% {
            d:path('M36.362 102.1h12');
          }
          81.25% {
            d:path('M35.866 102.1h12');
          }
          83.333% {
            d:path('M35.139 102.1h12');
          }
          85.417% {
            d:path('M34.373 102.1h12');
          }
          87.5% {
            d:path('M33.776 102.1h12');
          }
          89.583% {
            d:path('M33.507 102.1h12');
          }
          91.667% {
            d:path('M33.638 102.1h12');
          }
          93.75% {
            d:path('M34.134 102.1h12');
          }
          95.833% {
            d:path('M34.861 102.1h12');
          }
          97.917% {
            d:path('M35.627 102.1h12');
          }
          100% {
            d:path('M36.224 102.1h12');
          }
        }
        @keyframes lam04 {
          0% {
            d:path('M34.298 99.8h12');
          }
          2.083% {
            d:path('M34.97 99.8h12');
          }
          4.167% {
            d:path('M35.65 99.8h12');
          }
          6.25% {
            d:path('M36.155 99.8h12');
          }
          8.333% {
            d:path('M36.351 99.8h12');
          }
          10.417% {
            d:path('M36.185 99.8h12');
          }
          12.5% {
            d:path('M35.702 99.8h12');
          }
          14.583% {
            d:path('M35.03 99.8h12');
          }
          16.667% {
            d:path('M34.35 99.8h12');
          }
          18.75% {
            d:path('M33.845 99.8h12');
          }
          20.833% {
            d:path('M33.649 99.8h12');
          }
          22.917% {
            d:path('M33.815 99.8h12');
          }
          25% {
            d:path('M34.298 99.8h12');
          }
          27.083% {
            d:path('M34.97 99.8h12');
          }
          29.167% {
            d:path('M35.65 99.8h12');
          }
          31.25% {
            d:path('M36.155 99.8h12');
          }
          33.333% {
            d:path('M36.351 99.8h12');
          }
          35.417% {
            d:path('M36.185 99.8h12');
          }
          37.5% {
            d:path('M35.702 99.8h12');
          }
          39.583% {
            d:path('M35.03 99.8h12');
          }
          41.667% {
            d:path('M34.35 99.8h12');
          }
          43.75% {
            d:path('M33.845 99.8h12');
          }
          45.833% {
            d:path('M33.649 99.8h12');
          }
          47.917% {
            d:path('M33.815 99.8h12');
          }
          50% {
            d:path('M34.298 99.8h12');
          }
          52.083% {
            d:path('M34.97 99.8h12');
          }
          54.167% {
            d:path('M35.65 99.8h12');
          }
          56.25% {
            d:path('M36.155 99.8h12');
          }
          58.333% {
            d:path('M36.351 99.8h12');
          }
          60.417% {
            d:path('M36.185 99.8h12');
          }
          62.5% {
            d:path('M35.702 99.8h12');
          }
          64.583% {
            d:path('M35.03 99.8h12');
          }
          66.667% {
            d:path('M34.35 99.8h12');
          }
          68.75% {
            d:path('M33.845 99.8h12');
          }
          70.833% {
            d:path('M33.649 99.8h12');
          }
          72.917% {
            d:path('M33.815 99.8h12');
          }
          75% {
            d:path('M34.298 99.8h12');
          }
          77.083% {
            d:path('M34.97 99.8h12');
          }
          79.167% {
            d:path('M35.65 99.8h12');
          }
          81.25% {
            d:path('M36.155 99.8h12');
          }
          83.333% {
            d:path('M36.351 99.8h12');
          }
          85.417% {
            d:path('M36.185 99.8h12');
          }
          87.5% {
            d:path('M35.702 99.8h12');
          }
          89.583% {
            d:path('M35.03 99.8h12');
          }
          91.667% {
            d:path('M34.35 99.8h12');
          }
          93.75% {
            d:path('M33.845 99.8h12');
          }
          95.833% {
            d:path('M33.649 99.8h12');
          }
          97.917% {
            d:path('M33.815 99.8h12');
          }
          100% {
            d:path('M34.298 99.8h12');
          }
        }
        @keyframes lam10 {
          0% {
            d:path('M71 109h12');
          }
          2.083% {
            d:path('M70.062 109h12');
          }
          4.167% {
            d:path('M67.5 109h12');
          }
          6.25% {
            d:path('M64 109h12');
          }
          8.333% {
            d:path('M60.5 109h12');
          }
          10.417% {
            d:path('M57.938 109h12');
          }
          12.5% {
            d:path('M57 109h12');
          }
          14.583% {
            d:path('M57.938 109h12');
          }
          16.667% {
            d:path('M60.5 109h12');
          }
          18.75% {
            d:path('M64 109h12');
          }
          20.833% {
            d:path('M67.5 109h12');
          }
          22.917% {
            d:path('M70.062 109h12');
          }
          25% {
            d:path('M71 109h12');
          }
          27.083% {
            d:path('M70.062 109h12');
          }
          29.167% {
            d:path('M67.5 109h12');
          }
          31.25% {
            d:path('M64 109h12');
          }
          33.333% {
            d:path('M60.5 109h12');
          }
          35.417% {
            d:path('M57.938 109h12');
          }
          37.5% {
            d:path('M57 109h12');
          }
          39.583% {
            d:path('M57.938 109h12');
          }
          41.667% {
            d:path('M60.5 109h12');
          }
          43.75% {
            d:path('M64 109h12');
          }
          45.833% {
            d:path('M67.5 109h12');
          }
          47.917% {
            d:path('M70.062 109h12');
          }
          50% {
            d:path('M71 109h12');
          }
          52.083% {
            d:path('M70.062 109h12');
          }
          54.167% {
            d:path('M67.5 109h12');
          }
          56.25% {
            d:path('M64 109h12');
          }
          58.333% {
            d:path('M60.5 109h12');
          }
          60.417% {
            d:path('M57.938 109h12');
          }
          62.5% {
            d:path('M57 109h12');
          }
          64.583% {
            d:path('M57.938 109h12');
          }
          66.667% {
            d:path('M60.5 109h12');
          }
          68.75% {
            d:path('M64 109h12');
          }
          70.833% {
            d:path('M67.5 109h12');
          }
          72.917% {
            d:path('M70.062 109h12');
          }
          75% {
            d:path('M71 109h12');
          }
          77.083% {
            d:path('M70.062 109h12');
          }
          79.167% {
            d:path('M67.5 109h12');
          }
          81.25% {
            d:path('M64 109h12');
          }
          83.333% {
            d:path('M60.5 109h12');
          }
          85.417% {
            d:path('M57.938 109h12');
          }
          87.5% {
            d:path('M57 109h12');
          }
          89.583% {
            d:path('M57.938 109h12');
          }
          91.667% {
            d:path('M60.5 109h12');
          }
          93.75% {
            d:path('M64 109h12');
          }
          95.833% {
            d:path('M67.5 109h12');
          }
          97.917% {
            d:path('M70.062 109h12');
          }
          100% {
            d:path('M71 109h12');
          }
        }
        @keyframes lam11 {
          0% {
            d:path('M69.075 106.7h12');
          }
          2.083% {
            d:path('M68.539 106.7h12');
          }
          4.167% {
            d:path('M66.787 106.7h12');
          }
          6.25% {
            d:path('M64.289 106.7h12');
          }
          8.333% {
            d:path('M61.713 106.7h12');
          }
          10.417% {
            d:path('M59.75 106.7h12');
          }
          12.5% {
            d:path('M58.925 106.7h12');
          }
          14.583% {
            d:path('M59.461 106.7h12');
          }
          16.667% {
            d:path('M61.213 106.7h12');
          }
          18.75% {
            d:path('M63.711 106.7h12');
          }
          20.833% {
            d:path('M66.287 106.7h12');
          }
          22.917% {
            d:path('M68.25 106.7h12');
          }
          25% {
            d:path('M69.075 106.7h12');
          }
          27.083% {
            d:path('M68.539 106.7h12');
          }
          29.167% {
            d:path('M66.787 106.7h12');
          }
          31.25% {
            d:path('M64.289 106.7h12');
          }
          33.333% {
            d:path('M61.713 106.7h12');
          }
          35.417% {
            d:path('M59.75 106.7h12');
          }
          37.5% {
            d:path('M58.925 106.7h12');
          }
          39.583% {
            d:path('M59.461 106.7h12');
          }
          41.667% {
            d:path('M61.213 106.7h12');
          }
          43.75% {
            d:path('M63.711 106.7h12');
          }
          45.833% {
            d:path('M66.287 106.7h12');
          }
          47.917% {
            d:path('M68.25 106.7h12');
          }
          50% {
            d:path('M69.075 106.7h12');
          }
          52.083% {
            d:path('M68.539 106.7h12');
          }
          54.167% {
            d:path('M66.787 106.7h12');
          }
          56.25% {
            d:path('M64.289 106.7h12');
          }
          58.333% {
            d:path('M61.713 106.7h12');
          }
          60.417% {
            d:path('M59.75 106.7h12');
          }
          62.5% {
            d:path('M58.925 106.7h12');
          }
          64.583% {
            d:path('M59.461 106.7h12');
          }
          66.667% {
            d:path('M61.213 106.7h12');
          }
          68.75% {
            d:path('M63.711 106.7h12');
          }
          70.833% {
            d:path('M66.287 106.7h12');
          }
          72.917% {
            d:path('M68.25 106.7h12');
          }
          75% {
            d:path('M69.075 106.7h12');
          }
          77.083% {
            d:path('M68.539 106.7h12');
          }
          79.167% {
            d:path('M66.787 106.7h12');
          }
          81.25% {
            d:path('M64.289 106.7h12');
          }
          83.333% {
            d:path('M61.713 106.7h12');
          }
          85.417% {
            d:path('M59.75 106.7h12');
          }
          87.5% {
            d:path('M58.925 106.7h12');
          }
          89.583% {
            d:path('M59.461 106.7h12');
          }
          91.667% {
            d:path('M61.213 106.7h12');
          }
          93.75% {
            d:path('M63.711 106.7h12');
          }
          95.833% {
            d:path('M66.287 106.7h12');
          }
          97.917% {
            d:path('M68.25 106.7h12');
          }
          100% {
            d:path('M69.075 106.7h12');
          }
        }
        @keyframes lam12 {
          0% {
            d:path('M67.149 104.4h12');
          }
          2.083% {
            d:path('M67.016 104.4h12');
          }
          4.167% {
            d:path('M66.075 104.4h12');
          }
          6.25% {
            d:path('M64.578 104.4h12');
          }
          8.333% {
            d:path('M62.926 104.4h12');
          }
          10.417% {
            d:path('M61.562 104.4h12');
          }
          12.5% {
            d:path('M60.851 104.4h12');
          }
          14.583% {
            d:path('M60.984 104.4h12');
          }
          16.667% {
            d:path('M61.925 104.4h12');
          }
          18.75% {
            d:path('M63.422 104.4h12');
          }
          20.833% {
            d:path('M65.074 104.4h12');
          }
          22.917% {
            d:path('M66.438 104.4h12');
          }
          25% {
            d:path('M67.149 104.4h12');
          }
          27.083% {
            d:path('M67.016 104.4h12');
          }
          29.167% {
            d:path('M66.075 104.4h12');
          }
          31.25% {
            d:path('M64.578 104.4h12');
          }
          33.333% {
            d:path('M62.926 104.4h12');
          }
          35.417% {
            d:path('M61.562 104.4h12');
          }
          37.5% {
            d:path('M60.851 104.4h12');
          }
          39.583% {
            d:path('M60.984 104.4h12');
          }
          41.667% {
            d:path('M61.925 104.4h12');
          }
          43.75% {
            d:path('M63.422 104.4h12');
          }
          45.833% {
            d:path('M65.074 104.4h12');
          }
          47.917% {
            d:path('M66.438 104.4h12');
          }
          50% {
            d:path('M67.149 104.4h12');
          }
          52.083% {
            d:path('M67.016 104.4h12');
          }
          54.167% {
            d:path('M66.075 104.4h12');
          }
          56.25% {
            d:path('M64.578 104.4h12');
          }
          58.333% {
            d:path('M62.926 104.4h12');
          }
          60.417% {
            d:path('M61.562 104.4h12');
          }
          62.5% {
            d:path('M60.851 104.4h12');
          }
          64.583% {
            d:path('M60.984 104.4h12');
          }
          66.667% {
            d:path('M61.925 104.4h12');
          }
          68.75% {
            d:path('M63.422 104.4h12');
          }
          70.833% {
            d:path('M65.074 104.4h12');
          }
          72.917% {
            d:path('M66.438 104.4h12');
          }
          75% {
            d:path('M67.149 104.4h12');
          }
          77.083% {
            d:path('M67.016 104.4h12');
          }
          79.167% {
            d:path('M66.075 104.4h12');
          }
          81.25% {
            d:path('M64.578 104.4h12');
          }
          83.333% {
            d:path('M62.926 104.4h12');
          }
          85.417% {
            d:path('M61.562 104.4h12');
          }
          87.5% {
            d:path('M60.851 104.4h12');
          }
          89.583% {
            d:path('M60.984 104.4h12');
          }
          91.667% {
            d:path('M61.925 104.4h12');
          }
          93.75% {
            d:path('M63.422 104.4h12');
          }
          95.833% {
            d:path('M65.074 104.4h12');
          }
          97.917% {
            d:path('M66.438 104.4h12');
          }
          100% {
            d:path('M67.149 104.4h12');
          }
        }
        @keyframes lam13 {
          0% {
            d:path('M65.224 102.1h12');
          }
          2.083% {
            d:path('M65.493 102.1h12');
          }
          4.167% {
            d:path('M65.362 102.1h12');
          }
          6.25% {
            d:path('M64.866 102.1h12');
          }
          8.333% {
            d:path('M64.139 102.1h12');
          }
          10.417% {
            d:path('M63.373 102.1h12');
          }
          12.5% {
            d:path('M62.776 102.1h12');
          }
          14.583% {
            d:path('M62.507 102.1h12');
          }
          16.667% {
            d:path('M62.638 102.1h12');
          }
          18.75% {
            d:path('M63.134 102.1h12');
          }
          20.833% {
            d:path('M63.861 102.1h12');
          }
          22.917% {
            d:path('M64.627 102.1h12');
          }
          25% {
            d:path('M65.224 102.1h12');
          }
          27.083% {
            d:path('M65.493 102.1h12');
          }
          29.167% {
            d:path('M65.362 102.1h12');
          }
          31.25% {
            d:path('M64.866 102.1h12');
          }
          33.333% {
            d:path('M64.139 102.1h12');
          }
          35.417% {
            d:path('M63.373 102.1h12');
          }
          37.5% {
            d:path('M62.776 102.1h12');
          }
          39.583% {
            d:path('M62.507 102.1h12');
          }
          41.667% {
            d:path('M62.638 102.1h12');
          }
          43.75% {
            d:path('M63.134 102.1h12');
          }
          45.833% {
            d:path('M63.861 102.1h12');
          }
          47.917% {
            d:path('M64.627 102.1h12');
          }
          50% {
            d:path('M65.224 102.1h12');
          }
          52.083% {
            d:path('M65.493 102.1h12');
          }
          54.167% {
            d:path('M65.362 102.1h12');
          }
          56.25% {
            d:path('M64.866 102.1h12');
          }
          58.333% {
            d:path('M64.139 102.1h12');
          }
          60.417% {
            d:path('M63.373 102.1h12');
          }
          62.5% {
            d:path('M62.776 102.1h12');
          }
          64.583% {
            d:path('M62.507 102.1h12');
          }
          66.667% {
            d:path('M62.638 102.1h12');
          }
          68.75% {
            d:path('M63.134 102.1h12');
          }
          70.833% {
            d:path('M63.861 102.1h12');
          }
          72.917% {
            d:path('M64.627 102.1h12');
          }
          75% {
            d:path('M65.224 102.1h12');
          }
          77.083% {
            d:path('M65.493 102.1h12');
          }
          79.167% {
            d:path('M65.362 102.1h12');
          }
          81.25% {
            d:path('M64.866 102.1h12');
          }
          83.333% {
            d:path('M64.139 102.1h12');
          }
          85.417% {
            d:path('M63.373 102.1h12');
          }
          87.5% {
            d:path('M62.776 102.1h12');
          }
          89.583% {
            d:path('M62.507 102.1h12');
          }
          91.667% {
            d:path('M62.638 102.1h12');
          }
          93.75% {
            d:path('M63.134 102.1h12');
          }
          95.833% {
            d:path('M63.861 102.1h12');
          }
          97.917% {
            d:path('M64.627 102.1h12');
          }
          100% {
            d:path('M65.224 102.1h12');
          }
        }
        @keyframes lam14 {
          0% {
            d:path('M63.298 99.8h12');
          }
          2.083% {
            d:path('M63.97 99.8h12');
          }
          4.167% {
            d:path('M64.65 99.8h12');
          }
          6.25% {
            d:path('M65.155 99.8h12');
          }
          8.333% {
            d:path('M65.351 99.8h12');
          }
          10.417% {
            d:path('M65.185 99.8h12');
          }
          12.5% {
            d:path('M64.702 99.8h12');
          }
          14.583% {
            d:path('M64.03 99.8h12');
          }
          16.667% {
            d:path('M63.35 99.8h12');
          }
          18.75% {
            d:path('M62.845 99.8h12');
          }
          20.833% {
            d:path('M62.649 99.8h12');
          }
          22.917% {
            d:path('M62.815 99.8h12');
          }
          25% {
            d:path('M63.298 99.8h12');
          }
          27.083% {
            d:path('M63.97 99.8h12');
          }
          29.167% {
            d:path('M64.65 99.8h12');
          }
          31.25% {
            d:path('M65.155 99.8h12');
          }
          33.333% {
            d:path('M65.351 99.8h12');
          }
          35.417% {
            d:path('M65.185 99.8h12');
          }
          37.5% {
            d:path('M64.702 99.8h12');
          }
          39.583% {
            d:path('M64.03 99.8h12');
          }
          41.667% {
            d:path('M63.35 99.8h12');
          }
          43.75% {
            d:path('M62.845 99.8h12');
          }
          45.833% {
            d:path('M62.649 99.8h12');
          }
          47.917% {
            d:path('M62.815 99.8h12');
          }
          50% {
            d:path('M63.298 99.8h12');
          }
          52.083% {
            d:path('M63.97 99.8h12');
          }
          54.167% {
            d:path('M64.65 99.8h12');
          }
          56.25% {
            d:path('M65.155 99.8h12');
          }
          58.333% {
            d:path('M65.351 99.8h12');
          }
          60.417% {
            d:path('M65.185 99.8h12');
          }
          62.5% {
            d:path('M64.702 99.8h12');
          }
          64.583% {
            d:path('M64.03 99.8h12');
          }
          66.667% {
            d:path('M63.35 99.8h12');
          }
          68.75% {
            d:path('M62.845 99.8h12');
          }
          70.833% {
            d:path('M62.649 99.8h12');
          }
          72.917% {
            d:path('M62.815 99.8h12');
          }
          75% {
            d:path('M63.298 99.8h12');
          }
          77.083% {
            d:path('M63.97 99.8h12');
          }
          79.167% {
            d:path('M64.65 99.8h12');
          }
          81.25% {
            d:path('M65.155 99.8h12');
          }
          83.333% {
            d:path('M65.351 99.8h12');
          }
          85.417% {
            d:path('M65.185 99.8h12');
          }
          87.5% {
            d:path('M64.702 99.8h12');
          }
          89.583% {
            d:path('M64.03 99.8h12');
          }
          91.667% {
            d:path('M63.35 99.8h12');
          }
          93.75% {
            d:path('M62.845 99.8h12');
          }
          95.833% {
            d:path('M62.649 99.8h12');
          }
          97.917% {
            d:path('M62.815 99.8h12');
          }
          100% {
            d:path('M63.298 99.8h12');
          }
        }
        @keyframes lam20 {
          0% {
            d:path('M100 109h12');
          }
          2.083% {
            d:path('M99.062 109h12');
          }
          4.167% {
            d:path('M96.5 109h12');
          }
          6.25% {
            d:path('M93 109h12');
          }
          8.333% {
            d:path('M89.5 109h12');
          }
          10.417% {
            d:path('M86.938 109h12');
          }
          12.5% {
            d:path('M86 109h12');
          }
          14.583% {
            d:path('M86.938 109h12');
          }
          16.667% {
            d:path('M89.5 109h12');
          }
          18.75% {
            d:path('M93 109h12');
          }
          20.833% {
            d:path('M96.5 109h12');
          }
          22.917% {
            d:path('M99.062 109h12');
          }
          25% {
            d:path('M100 109h12');
          }
          27.083% {
            d:path('M99.062 109h12');
          }
          29.167% {
            d:path('M96.5 109h12');
          }
          31.25% {
            d:path('M93 109h12');
          }
          33.333% {
            d:path('M89.5 109h12');
          }
          35.417% {
            d:path('M86.938 109h12');
          }
          37.5% {
            d:path('M86 109h12');
          }
          39.583% {
            d:path('M86.938 109h12');
          }
          41.667% {
            d:path('M89.5 109h12');
          }
          43.75% {
            d:path('M93 109h12');
          }
          45.833% {
            d:path('M96.5 109h12');
          }
          47.917% {
            d:path('M99.062 109h12');
          }
          50% {
            d:path('M100 109h12');
          }
          52.083% {
            d:path('M99.062 109h12');
          }
          54.167% {
            d:path('M96.5 109h12');
          }
          56.25% {
            d:path('M93 109h12');
          }
          58.333% {
            d:path('M89.5 109h12');
          }
          60.417% {
            d:path('M86.938 109h12');
          }
          62.5% {
            d:path('M86 109h12');
          }
          64.583% {
            d:path('M86.938 109h12');
          }
          66.667% {
            d:path('M89.5 109h12');
          }
          68.75% {
            d:path('M93 109h12');
          }
          70.833% {
            d:path('M96.5 109h12');
          }
          72.917% {
            d:path('M99.062 109h12');
          }
          75% {
            d:path('M100 109h12');
          }
          77.083% {
            d:path('M99.062 109h12');
          }
          79.167% {
            d:path('M96.5 109h12');
          }
          81.25% {
            d:path('M93 109h12');
          }
          83.333% {
            d:path('M89.5 109h12');
          }
          85.417% {
            d:path('M86.938 109h12');
          }
          87.5% {
            d:path('M86 109h12');
          }
          89.583% {
            d:path('M86.938 109h12');
          }
          91.667% {
            d:path('M89.5 109h12');
          }
          93.75% {
            d:path('M93 109h12');
          }
          95.833% {
            d:path('M96.5 109h12');
          }
          97.917% {
            d:path('M99.062 109h12');
          }
          100% {
            d:path('M100 109h12');
          }
        }
        @keyframes lam21 {
          0% {
            d:path('M98.075 106.7h12');
          }
          2.083% {
            d:path('M97.539 106.7h12');
          }
          4.167% {
            d:path('M95.787 106.7h12');
          }
          6.25% {
            d:path('M93.289 106.7h12');
          }
          8.333% {
            d:path('M90.713 106.7h12');
          }
          10.417% {
            d:path('M88.75 106.7h12');
          }
          12.5% {
            d:path('M87.925 106.7h12');
          }
          14.583% {
            d:path('M88.461 106.7h12');
          }
          16.667% {
            d:path('M90.213 106.7h12');
          }
          18.75% {
            d:path('M92.711 106.7h12');
          }
          20.833% {
            d:path('M95.287 106.7h12');
          }
          22.917% {
            d:path('M97.25 106.7h12');
          }
          25% {
            d:path('M98.075 106.7h12');
          }
          27.083% {
            d:path('M97.539 106.7h12');
          }
          29.167% {
            d:path('M95.787 106.7h12');
          }
          31.25% {
            d:path('M93.289 106.7h12');
          }
          33.333% {
            d:path('M90.713 106.7h12');
          }
          35.417% {
            d:path('M88.75 106.7h12');
          }
          37.5% {
            d:path('M87.925 106.7h12');
          }
          39.583% {
            d:path('M88.461 106.7h12');
          }
          41.667% {
            d:path('M90.213 106.7h12');
          }
          43.75% {
            d:path('M92.711 106.7h12');
          }
          45.833% {
            d:path('M95.287 106.7h12');
          }
          47.917% {
            d:path('M97.25 106.7h12');
          }
          50% {
            d:path('M98.075 106.7h12');
          }
          52.083% {
            d:path('M97.539 106.7h12');
          }
          54.167% {
            d:path('M95.787 106.7h12');
          }
          56.25% {
            d:path('M93.289 106.7h12');
          }
          58.333% {
            d:path('M90.713 106.7h12');
          }
          60.417% {
            d:path('M88.75 106.7h12');
          }
          62.5% {
            d:path('M87.925 106.7h12');
          }
          64.583% {
            d:path('M88.461 106.7h12');
          }
          66.667% {
            d:path('M90.213 106.7h12');
          }
          68.75% {
            d:path('M92.711 106.7h12');
          }
          70.833% {
            d:path('M95.287 106.7h12');
          }
          72.917% {
            d:path('M97.25 106.7h12');
          }
          75% {
            d:path('M98.075 106.7h12');
          }
          77.083% {
            d:path('M97.539 106.7h12');
          }
          79.167% {
            d:path('M95.787 106.7h12');
          }
          81.25% {
            d:path('M93.289 106.7h12');
          }
          83.333% {
            d:path('M90.713 106.7h12');
          }
          85.417% {
            d:path('M88.75 106.7h12');
          }
          87.5% {
            d:path('M87.925 106.7h12');
          }
          89.583% {
            d:path('M88.461 106.7h12');
          }
          91.667% {
            d:path('M90.213 106.7h12');
          }
          93.75% {
            d:path('M92.711 106.7h12');
          }
          95.833% {
            d:path('M95.287 106.7h12');
          }
          97.917% {
            d:path('M97.25 106.7h12');
          }
          100% {
            d:path('M98.075 106.7h12');
          }
        }
        @keyframes lam22 {
          0% {
            d:path('M96.149 104.4h12');
          }
          2.083% {
            d:path('M96.016 104.4h12');
          }
          4.167% {
            d:path('M95.075 104.4h12');
          }
          6.25% {
            d:path('M93.578 104.4h12');
          }
          8.333% {
            d:path('M91.926 104.4h12');
          }
          10.417% {
            d:path('M90.562 104.4h12');
          }
          12.5% {
            d:path('M89.851 104.4h12');
          }
          14.583% {
            d:path('M89.984 104.4h12');
          }
          16.667% {
            d:path('M90.925 104.4h12');
          }
          18.75% {
            d:path('M92.422 104.4h12');
          }
          20.833% {
            d:path('M94.074 104.4h12');
          }
          22.917% {
            d:path('M95.438 104.4h12');
          }
          25% {
            d:path('M96.149 104.4h12');
          }
          27.083% {
            d:path('M96.016 104.4h12');
          }
          29.167% {
            d:path('M95.075 104.4h12');
          }
          31.25% {
            d:path('M93.578 104.4h12');
          }
          33.333% {
            d:path('M91.926 104.4h12');
          }
          35.417% {
            d:path('M90.562 104.4h12');
          }
          37.5% {
            d:path('M89.851 104.4h12');
          }
          39.583% {
            d:path('M89.984 104.4h12');
          }
          41.667% {
            d:path('M90.925 104.4h12');
          }
          43.75% {
            d:path('M92.422 104.4h12');
          }
          45.833% {
            d:path('M94.074 104.4h12');
          }
          47.917% {
            d:path('M95.438 104.4h12');
          }
          50% {
            d:path('M96.149 104.4h12');
          }
          52.083% {
            d:path('M96.016 104.4h12');
          }
          54.167% {
            d:path('M95.075 104.4h12');
          }
          56.25% {
            d:path('M93.578 104.4h12');
          }
          58.333% {
            d:path('M91.926 104.4h12');
          }
          60.417% {
            d:path('M90.562 104.4h12');
          }
          62.5% {
            d:path('M89.851 104.4h12');
          }
          64.583% {
            d:path('M89.984 104.4h12');
          }
          66.667% {
            d:path('M90.925 104.4h12');
          }
          68.75% {
            d:path('M92.422 104.4h12');
          }
          70.833% {
            d:path('M94.074 104.4h12');
          }
          72.917% {
            d:path('M95.438 104.4h12');
          }
          75% {
            d:path('M96.149 104.4h12');
          }
          77.083% {
            d:path('M96.016 104.4h12');
          }
          79.167% {
            d:path('M95.075 104.4h12');
          }
          81.25% {
            d:path('M93.578 104.4h12');
          }
          83.333% {
            d:path('M91.926 104.4h12');
          }
          85.417% {
            d:path('M90.562 104.4h12');
          }
          87.5% {
            d:path('M89.851 104.4h12');
          }
          89.583% {
            d:path('M89.984 104.4h12');
          }
          91.667% {
            d:path('M90.925 104.4h12');
          }
          93.75% {
            d:path('M92.422 104.4h12');
          }
          95.833% {
            d:path('M94.074 104.4h12');
          }
          97.917% {
            d:path('M95.438 104.4h12');
          }
          100% {
            d:path('M96.149 104.4h12');
          }
        }
        @keyframes lam23 {
          0% {
            d:path('M94.224 102.1h12');
          }
          2.083% {
            d:path('M94.493 102.1h12');
          }
          4.167% {
            d:path('M94.362 102.1h12');
          }
          6.25% {
            d:path('M93.866 102.1h12');
          }
          8.333% {
            d:path('M93.139 102.1h12');
          }
          10.417% {
            d:path('M92.373 102.1h12');
          }
          12.5% {
            d:path('M91.776 102.1h12');
          }
          14.583% {
            d:path('M91.507 102.1h12');
          }
          16.667% {
            d:path('M91.638 102.1h12');
          }
          18.75% {
            d:path('M92.134 102.1h12');
          }
          20.833% {
            d:path('M92.861 102.1h12');
          }
          22.917% {
            d:path('M93.627 102.1h12');
          }
          25% {
            d:path('M94.224 102.1h12');
          }
          27.083% {
            d:path('M94.493 102.1h12');
          }
          29.167% {
            d:path('M94.362 102.1h12');
          }
          31.25% {
            d:path('M93.866 102.1h12');
          }
          33.333% {
            d:path('M93.139 102.1h12');
          }
          35.417% {
            d:path('M92.373 102.1h12');
          }
          37.5% {
            d:path('M91.776 102.1h12');
          }
          39.583% {
            d:path('M91.507 102.1h12');
          }
          41.667% {
            d:path('M91.638 102.1h12');
          }
          43.75% {
            d:path('M92.134 102.1h12');
          }
          45.833% {
            d:path('M92.861 102.1h12');
          }
          47.917% {
            d:path('M93.627 102.1h12');
          }
          50% {
            d:path('M94.224 102.1h12');
          }
          52.083% {
            d:path('M94.493 102.1h12');
          }
          54.167% {
            d:path('M94.362 102.1h12');
          }
          56.25% {
            d:path('M93.866 102.1h12');
          }
          58.333% {
            d:path('M93.139 102.1h12');
          }
          60.417% {
            d:path('M92.373 102.1h12');
          }
          62.5% {
            d:path('M91.776 102.1h12');
          }
          64.583% {
            d:path('M91.507 102.1h12');
          }
          66.667% {
            d:path('M91.638 102.1h12');
          }
          68.75% {
            d:path('M92.134 102.1h12');
          }
          70.833% {
            d:path('M92.861 102.1h12');
          }
          72.917% {
            d:path('M93.627 102.1h12');
          }
          75% {
            d:path('M94.224 102.1h12');
          }
          77.083% {
            d:path('M94.493 102.1h12');
          }
          79.167% {
            d:path('M94.362 102.1h12');
          }
          81.25% {
            d:path('M93.866 102.1h12');
          }
          83.333% {
            d:path('M93.139 102.1h12');
          }
          85.417% {
            d:path('M92.373 102.1h12');
          }
          87.5% {
            d:path('M91.776 102.1h12');
          }
          89.583% {
            d:path('M91.507 102.1h12');
          }
          91.667% {
            d:path('M91.638 102.1h12');
          }
          93.75% {
            d:path('M92.134 102.1h12');
          }
          95.833% {
            d:path('M92.861 102.1h12');
          }
          97.917% {
            d:path('M93.627 102.1h12');
          }
          100% {
            d:path('M94.224 102.1h12');
          }
        }
        @keyframes lam24 {
          0% {
            d:path('M92.298 99.8h12');
          }
          2.083% {
            d:path('M92.97 99.8h12');
          }
          4.167% {
            d:path('M93.65 99.8h12');
          }
          6.25% {
            d:path('M94.155 99.8h12');
          }
          8.333% {
            d:path('M94.351 99.8h12');
          }
          10.417% {
            d:path('M94.185 99.8h12');
          }
          12.5% {
            d:path('M93.702 99.8h12');
          }
          14.583% {
            d:path('M93.03 99.8h12');
          }
          16.667% {
            d:path('M92.35 99.8h12');
          }
          18.75% {
            d:path('M91.845 99.8h12');
          }
          20.833% {
            d:path('M91.649 99.8h12');
          }
          22.917% {
            d:path('M91.815 99.8h12');
          }
          25% {
            d:path('M92.298 99.8h12');
          }
          27.083% {
            d:path('M92.97 99.8h12');
          }
          29.167% {
            d:path('M93.65 99.8h12');
          }
          31.25% {
            d:path('M94.155 99.8h12');
          }
          33.333% {
            d:path('M94.351 99.8h12');
          }
          35.417% {
            d:path('M94.185 99.8h12');
          }
          37.5% {
            d:path('M93.702 99.8h12');
          }
          39.583% {
            d:path('M93.03 99.8h12');
          }
          41.667% {
            d:path('M92.35 99.8h12');
          }
          43.75% {
            d:path('M91.845 99.8h12');
          }
          45.833% {
            d:path('M91.649 99.8h12');
          }
          47.917% {
            d:path('M91.815 99.8h12');
          }
          50% {
            d:path('M92.298 99.8h12');
          }
          52.083% {
            d:path('M92.97 99.8h12');
          }
          54.167% {
            d:path('M93.65 99.8h12');
          }
          56.25% {
            d:path('M94.155 99.8h12');
          }
          58.333% {
            d:path('M94.351 99.8h12');
          }
          60.417% {
            d:path('M94.185 99.8h12');
          }
          62.5% {
            d:path('M93.702 99.8h12');
          }
          64.583% {
            d:path('M93.03 99.8h12');
          }
          66.667% {
            d:path('M92.35 99.8h12');
          }
          68.75% {
            d:path('M91.845 99.8h12');
          }
          70.833% {
            d:path('M91.649 99.8h12');
          }
          72.917% {
            d:path('M91.815 99.8h12');
          }
          75% {
            d:path('M92.298 99.8h12');
          }
          77.083% {
            d:path('M92.97 99.8h12');
          }
          79.167% {
            d:path('M93.65 99.8h12');
          }
          81.25% {
            d:path('M94.155 99.8h12');
          }
          83.333% {
            d:path('M94.351 99.8h12');
          }
          85.417% {
            d:path('M94.185 99.8h12');
          }
          87.5% {
            d:path('M93.702 99.8h12');
          }
          89.583% {
            d:path('M93.03 99.8h12');
          }
          91.667% {
            d:path('M92.35 99.8h12');
          }
          93.75% {
            d:path('M91.845 99.8h12');
          }
          95.833% {
            d:path('M91.649 99.8h12');
          }
          97.917% {
            d:path('M91.815 99.8h12');
          }
          100% {
            d:path('M92.298 99.8h12');
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .foundation {
            transform:translate(7px,0px);
          }
          .tower {
            transform:translate(-0.702px,0px);
          }
          .lam00 {
            d:path('M42 109h12');
          }
          .lam01 {
            d:path('M40.075 106.7h12');
          }
          .lam02 {
            d:path('M38.149 104.4h12');
          }
          .lam03 {
            d:path('M36.224 102.1h12');
          }
          .lam04 {
            d:path('M34.298 99.8h12');
          }
          .lam10 {
            d:path('M71 109h12');
          }
          .lam11 {
            d:path('M69.075 106.7h12');
          }
          .lam12 {
            d:path('M67.149 104.4h12');
          }
          .lam13 {
            d:path('M65.224 102.1h12');
          }
          .lam14 {
            d:path('M63.298 99.8h12');
          }
          .lam20 {
            d:path('M100 109h12');
          }
          .lam21 {
            d:path('M98.075 106.7h12');
          }
          .lam22 {
            d:path('M96.149 104.4h12');
          }
          .lam23 {
            d:path('M94.224 102.1h12');
          }
          .lam24 {
            d:path('M92.298 99.8h12');
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Seismic Base Isolation">
        <path d="M8 127H132" stroke="#756e52" stroke-width="2"/>
        <g class="foundation">
          <rect x="12" y="110" width="116" height="8" fill="#6e7968"/>
          <circle cx="15" cy="112" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="55.297" cy="115.144" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="95.594" cy="113.289" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="25.891" cy="116.433" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="66.188" cy="114.577" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="106.485" cy="112.722" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="36.782" cy="115.866" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="77.079" cy="114.01" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="117.376" cy="112.155" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="47.673" cy="115.299" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="87.97" cy="113.443" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="18.267" cy="116.588" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="58.564" cy="114.732" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="98.861" cy="112.876" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="29.158" cy="116.021" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="69.455" cy="114.165" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="109.752" cy="112.309" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="40.05" cy="115.454" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="80.347" cy="113.598" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="120.644" cy="116.742" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="50.941" cy="114.887" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="91.238" cy="113.031" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="21.535" cy="116.175" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="61.832" cy="114.32" r="0.6" fill="#bba37a" opacity=".25"/>
        </g>
        <g class="tower">
          <rect x="34" y="24" width="72" height="70" fill="#203f3e" stroke="#a2c6bb"/>
          <rect x="39" y="32" width="4" height="5" fill="#6f9991"/>
          <rect x="59.667" y="32" width="4" height="5" fill="#6f9991"/>
          <rect x="80.333" y="32" width="4" height="5" fill="#6f9991"/>
          <rect x="39" y="47" width="4" height="5" fill="#6f9991"/>
          <rect x="59.667" y="47" width="4" height="5" fill="#6f9991"/>
          <rect x="80.333" y="47" width="4" height="5" fill="#6f9991"/>
          <rect x="39" y="62" width="4" height="5" fill="#6f9991"/>
          <rect x="59.667" y="62" width="4" height="5" fill="#6f9991"/>
          <rect x="80.333" y="62" width="4" height="5" fill="#6f9991"/>
          <rect x="39" y="77" width="4" height="5" fill="#6f9991"/>
          <rect x="59.667" y="77" width="4" height="5" fill="#6f9991"/>
          <rect x="80.333" y="77" width="4" height="5" fill="#6f9991"/>
          <rect x="28" y="94" width="84" height="5" fill="#9bb6aa"/>
        </g>
        <path d="M29.337 109h12" class="lam00" stroke="#dfd4aa" stroke-width="2"/>
        <path d="M31.064 106.7h12" class="lam01" stroke="#62766b" stroke-width="2"/>
        <path d="M32.792 104.4h12" class="lam02" stroke="#dfd4aa" stroke-width="2"/>
        <path d="M34.519 102.1h12" class="lam03" stroke="#62766b" stroke-width="2"/>
        <path d="M36.247 99.8h12" class="lam04" stroke="#dfd4aa" stroke-width="2"/>
        <path d="M58.337 109h12" class="lam10" stroke="#dfd4aa" stroke-width="2"/>
        <path d="M60.064 106.7h12" class="lam11" stroke="#62766b" stroke-width="2"/>
        <path d="M61.792 104.4h12" class="lam12" stroke="#dfd4aa" stroke-width="2"/>
        <path d="M63.519 102.1h12" class="lam13" stroke="#62766b" stroke-width="2"/>
        <path d="M65.247 99.8h12" class="lam14" stroke="#dfd4aa" stroke-width="2"/>
        <path d="M87.337 109h12" class="lam20" stroke="#dfd4aa" stroke-width="2"/>
        <path d="M89.064 106.7h12" class="lam21" stroke="#62766b" stroke-width="2"/>
        <path d="M90.792 104.4h12" class="lam22" stroke="#dfd4aa" stroke-width="2"/>
        <path d="M92.519 102.1h12" class="lam23" stroke="#62766b" stroke-width="2"/>
        <path d="M94.247 99.8h12" class="lam24" stroke="#dfd4aa" stroke-width="2"/>
        <g transform="translate(17 123) rotate(0)" fill="#dfb77a">
          <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
        </g>
        <g transform="translate(123 123) rotate(180)" fill="#dfb77a">
          <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
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

if (!customElements.get("concept-seismic-base-isolation")) {
  customElements.define("concept-seismic-base-isolation", ConceptSeismicBaseIsolation);
}
