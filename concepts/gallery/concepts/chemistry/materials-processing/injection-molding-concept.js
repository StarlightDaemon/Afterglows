// Injection Molding. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptInjectionMolding extends HTMLElement {
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
          animation:cycle 18s linear infinite
        }
        @keyframes cycle {
          0%,3%,95%,100% {
            opacity:0
          }
          6%,92% {
            opacity:1
          }
        }
        .tool {
          fill:#233b34;
          stroke:#648576;
          stroke-width:.8
        }
        .melt {
          fill:#c48c61
        }
        .shaft {
          fill:none;
          stroke:#547568;
          stroke-width:3
        }
        .flights {
          fill:none;
          stroke:#88aa9c;
          stroke-width:1.5;
          animation:flights 18s linear infinite
        }
        .screw {
          transform:translateX(42.857px);
          animation:screw 18s linear infinite
        }
        .reservoir {
          animation:reservoir 18s linear infinite
        }
        .runner {
          animation:runner 18s linear infinite
        }
        .head {
          animation:head 18s linear infinite,color 18s linear infinite
        }
        .stem {
          animation:stem 18s linear infinite,color 18s linear infinite
        }
        .polymer {
          fill:#77c9ef
        }
        .moving {
          transform:translateX(18px);
          animation:open 18s linear infinite
        }
        .part {
          transform:translateX(8px);
          animation:eject 18s linear infinite
        }
        .ejector {
          fill:none;
          stroke:#a0b9ae;
          stroke-width:1.3;
          transform:translateX(8px);
          animation:eject 18s linear infinite,pins 18s linear infinite
        }
        .gate {
          stroke:#f3c977;
          stroke-width:2;
          animation:gate 18s linear infinite
        }
        .cooling {
          stroke:#77c9ef;
          stroke-width:1.5;
          stroke-dasharray:3 3;
          animation:cooling 18s linear infinite
        }
        @keyframes reservoir {
          0% {
            d:path('M34,46H78V60H34Z')
          }
          1% {
            d:path('M33.467,46H78V60H33.467Z')
          }
          2% {
            d:path('M32.933,46H78V60H32.933Z')
          }
          3% {
            d:path('M32.4,46H78V60H32.4Z')
          }
          4% {
            d:path('M31.867,46H78V60H31.867Z')
          }
          5% {
            d:path('M31.333,46H78V60H31.333Z')
          }
          6% {
            d:path('M30.8,46H78V60H30.8Z')
          }
          7% {
            d:path('M30.267,46H78V60H30.267Z')
          }
          8% {
            d:path('M29.733,46H78V60H29.733Z')
          }
          9% {
            d:path('M29.2,46H78V60H29.2Z')
          }
          10% {
            d:path('M28.667,46H78V60H28.667Z')
          }
          11% {
            d:path('M28.133,46H78V60H28.133Z')
          }
          12% {
            d:path('M27.6,46H78V60H27.6Z')
          }
          13% {
            d:path('M27.067,46H78V60H27.067Z')
          }
          14% {
            d:path('M26.533,46H78V60H26.533Z')
          }
          15% {
            d:path('M26,46H78V60H26Z')
          }
          16% {
            d:path('M27.587,46H78V60H27.587Z')
          }
          17% {
            d:path('M29.175,46H78V60H29.175Z')
          }
          18% {
            d:path('M30.762,46H78V60H30.762Z')
          }
          19% {
            d:path('M32.349,46H78V60H32.349Z')
          }
          20% {
            d:path('M33.937,46H78V60H33.937Z')
          }
          21% {
            d:path('M35.524,46H78V60H35.524Z')
          }
          22% {
            d:path('M37.111,46H78V60H37.111Z')
          }
          23% {
            d:path('M38.698,46H78V60H38.698Z')
          }
          24% {
            d:path('M40.286,46H78V60H40.286Z')
          }
          25% {
            d:path('M41.873,46H78V60H41.873Z')
          }
          26% {
            d:path('M43.46,46H78V60H43.46Z')
          }
          27% {
            d:path('M45.048,46H78V60H45.048Z')
          }
          28% {
            d:path('M46.635,46H78V60H46.635Z')
          }
          29% {
            d:path('M48.222,46H78V60H48.222Z')
          }
          30% {
            d:path('M49.81,46H78V60H49.81Z')
          }
          31% {
            d:path('M51.397,46H78V60H51.397Z')
          }
          32% {
            d:path('M52.984,46H78V60H52.984Z')
          }
          33% {
            d:path('M54.571,46H78V60H54.571Z')
          }
          34% {
            d:path('M56.159,46H78V60H56.159Z')
          }
          35% {
            d:path('M57.746,46H78V60H57.746Z')
          }
          36% {
            d:path('M59.333,46H78V60H59.333Z')
          }
          37% {
            d:path('M60.921,46H78V60H60.921Z')
          }
          38% {
            d:path('M62.508,46H78V60H62.508Z')
          }
          39% {
            d:path('M64.095,46H78V60H64.095Z')
          }
          40% {
            d:path('M65.683,46H78V60H65.683Z')
          }
          41% {
            d:path('M67.27,46H78V60H67.27Z')
          }
          42% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          43% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          44% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          45% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          46% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          47% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          48% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          49% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          50% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          51% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          52% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          53% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          54% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          55% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          56% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          57% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          58% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          59% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          60% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          61% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          62% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          63% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          64% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          65% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          66% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          67% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          68% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          69% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          70% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          71% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          72% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          73% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          74% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          75% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          76% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          77% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          78% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          79% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          80% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          81% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          82% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          83% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          84% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          85% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          86% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          87% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          88% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          89% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          90% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          91% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          92% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          93% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          94% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          95% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          96% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          97% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          98% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          99% {
            d:path('M68.857,46H78V60H68.857Z')
          }
          100% {
            d:path('M68.857,46H78V60H68.857Z')
          }
        }
        @keyframes runner {
          0% {
            d:path('M78,50H78V54H78Z')
          }
          1% {
            d:path('M78,50H78V54H78Z')
          }
          2% {
            d:path('M78,50H78V54H78Z')
          }
          3% {
            d:path('M78,50H78V54H78Z')
          }
          4% {
            d:path('M78,50H78V54H78Z')
          }
          5% {
            d:path('M78,50H78V54H78Z')
          }
          6% {
            d:path('M78,50H78V54H78Z')
          }
          7% {
            d:path('M78,50H78V54H78Z')
          }
          8% {
            d:path('M78,50H78V54H78Z')
          }
          9% {
            d:path('M78,50H78V54H78Z')
          }
          10% {
            d:path('M78,50H78V54H78Z')
          }
          11% {
            d:path('M78,50H78V54H78Z')
          }
          12% {
            d:path('M78,50H78V54H78Z')
          }
          13% {
            d:path('M78,50H78V54H78Z')
          }
          14% {
            d:path('M78,50H78V54H78Z')
          }
          15% {
            d:path('M78,50H78V54H78Z')
          }
          16% {
            d:path('M78,50H83.556V54H78Z')
          }
          17% {
            d:path('M78,50H89.111V54H78Z')
          }
          18% {
            d:path('M78,50H94.667V54H78Z')
          }
          19% {
            d:path('M78,50H96V54H78Z')
          }
          20% {
            d:path('M78,50H96V54H78Z')
          }
          21% {
            d:path('M78,50H96V54H78Z')
          }
          22% {
            d:path('M78,50H96V54H78Z')
          }
          23% {
            d:path('M78,50H96V54H78Z')
          }
          24% {
            d:path('M78,50H96V54H78Z')
          }
          25% {
            d:path('M78,50H96V54H78Z')
          }
          26% {
            d:path('M78,50H96V54H78Z')
          }
          27% {
            d:path('M78,50H96V54H78Z')
          }
          28% {
            d:path('M78,50H96V54H78Z')
          }
          29% {
            d:path('M78,50H96V54H78Z')
          }
          30% {
            d:path('M78,50H96V54H78Z')
          }
          31% {
            d:path('M78,50H96V54H78Z')
          }
          32% {
            d:path('M78,50H96V54H78Z')
          }
          33% {
            d:path('M78,50H96V54H78Z')
          }
          34% {
            d:path('M78,50H96V54H78Z')
          }
          35% {
            d:path('M78,50H96V54H78Z')
          }
          36% {
            d:path('M78,50H96V54H78Z')
          }
          37% {
            d:path('M78,50H96V54H78Z')
          }
          38% {
            d:path('M78,50H96V54H78Z')
          }
          39% {
            d:path('M78,50H96V54H78Z')
          }
          40% {
            d:path('M78,50H96V54H78Z')
          }
          41% {
            d:path('M78,50H96V54H78Z')
          }
          42% {
            d:path('M78,50H96V54H78Z')
          }
          43% {
            d:path('M78,50H96V54H78Z')
          }
          44% {
            d:path('M78,50H96V54H78Z')
          }
          45% {
            d:path('M78,50H96V54H78Z')
          }
          46% {
            d:path('M78,50H96V54H78Z')
          }
          47% {
            d:path('M78,50H96V54H78Z')
          }
          48% {
            d:path('M78,50H96V54H78Z')
          }
          49% {
            d:path('M78,50H96V54H78Z')
          }
          50% {
            d:path('M78,50H96V54H78Z')
          }
          51% {
            d:path('M78,50H96V54H78Z')
          }
          52% {
            d:path('M78,50H96V54H78Z')
          }
          53% {
            d:path('M78,50H96V54H78Z')
          }
          54% {
            d:path('M78,50H96V54H78Z')
          }
          55% {
            d:path('M78,50H96V54H78Z')
          }
          56% {
            d:path('M78,50H96V54H78Z')
          }
          57% {
            d:path('M78,50H96V54H78Z')
          }
          58% {
            d:path('M78,50H96V54H78Z')
          }
          59% {
            d:path('M78,50H96V54H78Z')
          }
          60% {
            d:path('M78,50H96V54H78Z')
          }
          61% {
            d:path('M78,50H96V54H78Z')
          }
          62% {
            d:path('M78,50H96V54H78Z')
          }
          63% {
            d:path('M78,50H96V54H78Z')
          }
          64% {
            d:path('M78,50H96V54H78Z')
          }
          65% {
            d:path('M78,50H96V54H78Z')
          }
          66% {
            d:path('M78,50H96V54H78Z')
          }
          67% {
            d:path('M78,50H96V54H78Z')
          }
          68% {
            d:path('M78,50H96V54H78Z')
          }
          69% {
            d:path('M78,50H96V54H78Z')
          }
          70% {
            d:path('M78,50H96V54H78Z')
          }
          71% {
            d:path('M78,50H96V54H78Z')
          }
          72% {
            d:path('M78,50H96V54H78Z')
          }
          73% {
            d:path('M78,50H96V54H78Z')
          }
          74% {
            d:path('M78,50H96V54H78Z')
          }
          75% {
            d:path('M78,50H96V54H78Z')
          }
          76% {
            d:path('M78,50H96V54H78Z')
          }
          77% {
            d:path('M78,50H96V54H78Z')
          }
          78% {
            d:path('M78,50H96V54H78Z')
          }
          79% {
            d:path('M78,50H96V54H78Z')
          }
          80% {
            d:path('M78,50H96V54H78Z')
          }
          81% {
            d:path('M78,50H96V54H78Z')
          }
          82% {
            d:path('M78,50H96V54H78Z')
          }
          83% {
            d:path('M78,50H96V54H78Z')
          }
          84% {
            d:path('M78,50H96V54H78Z')
          }
          85% {
            d:path('M78,50H96V54H78Z')
          }
          86% {
            d:path('M78,50H96V54H78Z')
          }
          87% {
            d:path('M78,50H96V54H78Z')
          }
          88% {
            d:path('M78,50H96V54H78Z')
          }
          89% {
            d:path('M78,50H96V54H78Z')
          }
          90% {
            d:path('M78,50H96V54H78Z')
          }
          91% {
            d:path('M78,50H96V54H78Z')
          }
          92% {
            d:path('M78,50H96V54H78Z')
          }
          93% {
            d:path('M78,50H96V54H78Z')
          }
          94% {
            d:path('M78,50H96V54H78Z')
          }
          95% {
            d:path('M78,50H96V54H78Z')
          }
          96% {
            d:path('M78,50H96V54H78Z')
          }
          97% {
            d:path('M78,50H96V54H78Z')
          }
          98% {
            d:path('M78,50H96V54H78Z')
          }
          99% {
            d:path('M78,50H96V54H78Z')
          }
          100% {
            d:path('M78,50H96V54H78Z')
          }
        }
        @keyframes head {
          0% {
            d:path('M96,44H96V58H96Z')
          }
          1% {
            d:path('M96,44H96V58H96Z')
          }
          2% {
            d:path('M96,44H96V58H96Z')
          }
          3% {
            d:path('M96,44H96V58H96Z')
          }
          4% {
            d:path('M96,44H96V58H96Z')
          }
          5% {
            d:path('M96,44H96V58H96Z')
          }
          6% {
            d:path('M96,44H96V58H96Z')
          }
          7% {
            d:path('M96,44H96V58H96Z')
          }
          8% {
            d:path('M96,44H96V58H96Z')
          }
          9% {
            d:path('M96,44H96V58H96Z')
          }
          10% {
            d:path('M96,44H96V58H96Z')
          }
          11% {
            d:path('M96,44H96V58H96Z')
          }
          12% {
            d:path('M96,44H96V58H96Z')
          }
          13% {
            d:path('M96,44H96V58H96Z')
          }
          14% {
            d:path('M96,44H96V58H96Z')
          }
          15% {
            d:path('M96,44H96V58H96Z')
          }
          16% {
            d:path('M96,44H96V58H96Z')
          }
          17% {
            d:path('M96,44H96V58H96Z')
          }
          18% {
            d:path('M96,44H96V58H96Z')
          }
          19% {
            d:path('M96,44H97.206V58H96Z')
          }
          20% {
            d:path('M96,44H98.794V58H96Z')
          }
          21% {
            d:path('M96,44H100.381V58H96Z')
          }
          22% {
            d:path('M96,44H101.968V58H96Z')
          }
          23% {
            d:path('M96,44H103.556V58H96Z')
          }
          24% {
            d:path('M96,44H105.143V58H96Z')
          }
          25% {
            d:path('M96,44H106.73V58H96Z')
          }
          26% {
            d:path('M96,44H108.317V58H96Z')
          }
          27% {
            d:path('M96,44H109.905V58H96Z')
          }
          28% {
            d:path('M96,44H111.492V58H96Z')
          }
          29% {
            d:path('M96,44H112V58H96Z')
          }
          30% {
            d:path('M96,44H112V58H96Z')
          }
          31% {
            d:path('M96,44H112V58H96Z')
          }
          32% {
            d:path('M96,44H112V58H96Z')
          }
          33% {
            d:path('M96,44H112V58H96Z')
          }
          34% {
            d:path('M96,44H112V58H96Z')
          }
          35% {
            d:path('M96,44H112V58H96Z')
          }
          36% {
            d:path('M96,44H112V58H96Z')
          }
          37% {
            d:path('M96,44H112V58H96Z')
          }
          38% {
            d:path('M96,44H112V58H96Z')
          }
          39% {
            d:path('M96,44H112V58H96Z')
          }
          40% {
            d:path('M96,44H112V58H96Z')
          }
          41% {
            d:path('M96,44H112V58H96Z')
          }
          42% {
            d:path('M96,44H112V58H96Z')
          }
          43% {
            d:path('M96,44H112V58H96Z')
          }
          44% {
            d:path('M96,44H112V58H96Z')
          }
          45% {
            d:path('M96,44H112V58H96Z')
          }
          46% {
            d:path('M96,44H112V58H96Z')
          }
          47% {
            d:path('M96,44H112V58H96Z')
          }
          48% {
            d:path('M96,44H112V58H96Z')
          }
          49% {
            d:path('M96,44H112V58H96Z')
          }
          50% {
            d:path('M96,44H112V58H96Z')
          }
          51% {
            d:path('M96,44H112V58H96Z')
          }
          52% {
            d:path('M96,44H112V58H96Z')
          }
          53% {
            d:path('M96,44H112V58H96Z')
          }
          54% {
            d:path('M96,44H112V58H96Z')
          }
          55% {
            d:path('M96,44H112V58H96Z')
          }
          56% {
            d:path('M96,44H112V58H96Z')
          }
          57% {
            d:path('M96,44H112V58H96Z')
          }
          58% {
            d:path('M96,44H112V58H96Z')
          }
          59% {
            d:path('M96,44H112V58H96Z')
          }
          60% {
            d:path('M96,44H112V58H96Z')
          }
          61% {
            d:path('M96,44H112V58H96Z')
          }
          62% {
            d:path('M96,44H112V58H96Z')
          }
          63% {
            d:path('M96,44H112V58H96Z')
          }
          64% {
            d:path('M96,44H112V58H96Z')
          }
          65% {
            d:path('M96,44H112V58H96Z')
          }
          66% {
            d:path('M96,44H112V58H96Z')
          }
          67% {
            d:path('M96,44H112V58H96Z')
          }
          68% {
            d:path('M96,44H112V58H96Z')
          }
          69% {
            d:path('M96,44H112V58H96Z')
          }
          70% {
            d:path('M96,44H112V58H96Z')
          }
          71% {
            d:path('M96,44H112V58H96Z')
          }
          72% {
            d:path('M96,44H112V58H96Z')
          }
          73% {
            d:path('M96,44H112V58H96Z')
          }
          74% {
            d:path('M96,44H112V58H96Z')
          }
          75% {
            d:path('M96,44H112V58H96Z')
          }
          76% {
            d:path('M96,44H112V58H96Z')
          }
          77% {
            d:path('M96,44H112V58H96Z')
          }
          78% {
            d:path('M96,44H112V58H96Z')
          }
          79% {
            d:path('M96,44H112V58H96Z')
          }
          80% {
            d:path('M96,44H112V58H96Z')
          }
          81% {
            d:path('M96,44H112V58H96Z')
          }
          82% {
            d:path('M96,44H112V58H96Z')
          }
          83% {
            d:path('M96,44H112V58H96Z')
          }
          84% {
            d:path('M96,44H112V58H96Z')
          }
          85% {
            d:path('M96,44H112V58H96Z')
          }
          86% {
            d:path('M96,44H112V58H96Z')
          }
          87% {
            d:path('M96,44H112V58H96Z')
          }
          88% {
            d:path('M96,44H112V58H96Z')
          }
          89% {
            d:path('M96,44H112V58H96Z')
          }
          90% {
            d:path('M96,44H112V58H96Z')
          }
          91% {
            d:path('M96,44H112V58H96Z')
          }
          92% {
            d:path('M96,44H112V58H96Z')
          }
          93% {
            d:path('M96,44H112V58H96Z')
          }
          94% {
            d:path('M96,44H112V58H96Z')
          }
          95% {
            d:path('M96,44H112V58H96Z')
          }
          96% {
            d:path('M96,44H112V58H96Z')
          }
          97% {
            d:path('M96,44H112V58H96Z')
          }
          98% {
            d:path('M96,44H112V58H96Z')
          }
          99% {
            d:path('M96,44H112V58H96Z')
          }
          100% {
            d:path('M96,44H112V58H96Z')
          }
        }
        @keyframes stem {
          0% {
            d:path('M100,58H108V58H100Z')
          }
          1% {
            d:path('M100,58H108V58H100Z')
          }
          2% {
            d:path('M100,58H108V58H100Z')
          }
          3% {
            d:path('M100,58H108V58H100Z')
          }
          4% {
            d:path('M100,58H108V58H100Z')
          }
          5% {
            d:path('M100,58H108V58H100Z')
          }
          6% {
            d:path('M100,58H108V58H100Z')
          }
          7% {
            d:path('M100,58H108V58H100Z')
          }
          8% {
            d:path('M100,58H108V58H100Z')
          }
          9% {
            d:path('M100,58H108V58H100Z')
          }
          10% {
            d:path('M100,58H108V58H100Z')
          }
          11% {
            d:path('M100,58H108V58H100Z')
          }
          12% {
            d:path('M100,58H108V58H100Z')
          }
          13% {
            d:path('M100,58H108V58H100Z')
          }
          14% {
            d:path('M100,58H108V58H100Z')
          }
          15% {
            d:path('M100,58H108V58H100Z')
          }
          16% {
            d:path('M100,58H108V58H100Z')
          }
          17% {
            d:path('M100,58H108V58H100Z')
          }
          18% {
            d:path('M100,58H108V58H100Z')
          }
          19% {
            d:path('M100,58H108V58H100Z')
          }
          20% {
            d:path('M100,58H108V58H100Z')
          }
          21% {
            d:path('M100,58H108V58H100Z')
          }
          22% {
            d:path('M100,58H108V58H100Z')
          }
          23% {
            d:path('M100,58H108V58H100Z')
          }
          24% {
            d:path('M100,58H108V58H100Z')
          }
          25% {
            d:path('M100,58H108V58H100Z')
          }
          26% {
            d:path('M100,58H108V58H100Z')
          }
          27% {
            d:path('M100,58H108V58H100Z')
          }
          28% {
            d:path('M100,58H108V58H100Z')
          }
          29% {
            d:path('M100,58H108V59.889H100Z')
          }
          30% {
            d:path('M100,58H108V62.667H100Z')
          }
          31% {
            d:path('M100,58H108V65.444H100Z')
          }
          32% {
            d:path('M100,58H108V68.222H100Z')
          }
          33% {
            d:path('M100,58H108V71H100Z')
          }
          34% {
            d:path('M100,58H108V73.778H100Z')
          }
          35% {
            d:path('M100,58H108V76.556H100Z')
          }
          36% {
            d:path('M100,58H108V79.333H100Z')
          }
          37% {
            d:path('M100,58H108V82.111H100Z')
          }
          38% {
            d:path('M100,58H108V84.889H100Z')
          }
          39% {
            d:path('M100,58H108V87.667H100Z')
          }
          40% {
            d:path('M100,58H108V90.444H100Z')
          }
          41% {
            d:path('M100,58H108V93.222H100Z')
          }
          42% {
            d:path('M100,58H108V96H100Z')
          }
          43% {
            d:path('M100,58H108V96H100Z')
          }
          44% {
            d:path('M100,58H108V96H100Z')
          }
          45% {
            d:path('M100,58H108V96H100Z')
          }
          46% {
            d:path('M100,58H108V96H100Z')
          }
          47% {
            d:path('M100,58H108V96H100Z')
          }
          48% {
            d:path('M100,58H108V96H100Z')
          }
          49% {
            d:path('M100,58H108V96H100Z')
          }
          50% {
            d:path('M100,58H108V96H100Z')
          }
          51% {
            d:path('M100,58H108V96H100Z')
          }
          52% {
            d:path('M100,58H108V96H100Z')
          }
          53% {
            d:path('M100,58H108V96H100Z')
          }
          54% {
            d:path('M100,58H108V96H100Z')
          }
          55% {
            d:path('M100,58H108V96H100Z')
          }
          56% {
            d:path('M100,58H108V96H100Z')
          }
          57% {
            d:path('M100,58H108V96H100Z')
          }
          58% {
            d:path('M100,58H108V96H100Z')
          }
          59% {
            d:path('M100,58H108V96H100Z')
          }
          60% {
            d:path('M100,58H108V96H100Z')
          }
          61% {
            d:path('M100,58H108V96H100Z')
          }
          62% {
            d:path('M100,58H108V96H100Z')
          }
          63% {
            d:path('M100,58H108V96H100Z')
          }
          64% {
            d:path('M100,58H108V96H100Z')
          }
          65% {
            d:path('M100,58H108V96H100Z')
          }
          66% {
            d:path('M100,58H108V96H100Z')
          }
          67% {
            d:path('M100,58H108V96H100Z')
          }
          68% {
            d:path('M100,58H108V96H100Z')
          }
          69% {
            d:path('M100,58H108V96H100Z')
          }
          70% {
            d:path('M100,58H108V96H100Z')
          }
          71% {
            d:path('M100,58H108V96H100Z')
          }
          72% {
            d:path('M100,58H108V96H100Z')
          }
          73% {
            d:path('M100,58H108V96H100Z')
          }
          74% {
            d:path('M100,58H108V96H100Z')
          }
          75% {
            d:path('M100,58H108V96H100Z')
          }
          76% {
            d:path('M100,58H108V96H100Z')
          }
          77% {
            d:path('M100,58H108V96H100Z')
          }
          78% {
            d:path('M100,58H108V96H100Z')
          }
          79% {
            d:path('M100,58H108V96H100Z')
          }
          80% {
            d:path('M100,58H108V96H100Z')
          }
          81% {
            d:path('M100,58H108V96H100Z')
          }
          82% {
            d:path('M100,58H108V96H100Z')
          }
          83% {
            d:path('M100,58H108V96H100Z')
          }
          84% {
            d:path('M100,58H108V96H100Z')
          }
          85% {
            d:path('M100,58H108V96H100Z')
          }
          86% {
            d:path('M100,58H108V96H100Z')
          }
          87% {
            d:path('M100,58H108V96H100Z')
          }
          88% {
            d:path('M100,58H108V96H100Z')
          }
          89% {
            d:path('M100,58H108V96H100Z')
          }
          90% {
            d:path('M100,58H108V96H100Z')
          }
          91% {
            d:path('M100,58H108V96H100Z')
          }
          92% {
            d:path('M100,58H108V96H100Z')
          }
          93% {
            d:path('M100,58H108V96H100Z')
          }
          94% {
            d:path('M100,58H108V96H100Z')
          }
          95% {
            d:path('M100,58H108V96H100Z')
          }
          96% {
            d:path('M100,58H108V96H100Z')
          }
          97% {
            d:path('M100,58H108V96H100Z')
          }
          98% {
            d:path('M100,58H108V96H100Z')
          }
          99% {
            d:path('M100,58H108V96H100Z')
          }
          100% {
            d:path('M100,58H108V96H100Z')
          }
        }
        @keyframes screw {
          0% {
            transform:translateX(8px)
          }
          1% {
            transform:translateX(7.467px)
          }
          2% {
            transform:translateX(6.933px)
          }
          3% {
            transform:translateX(6.4px)
          }
          4% {
            transform:translateX(5.867px)
          }
          5% {
            transform:translateX(5.333px)
          }
          6% {
            transform:translateX(4.8px)
          }
          7% {
            transform:translateX(4.267px)
          }
          8% {
            transform:translateX(3.733px)
          }
          9% {
            transform:translateX(3.2px)
          }
          10% {
            transform:translateX(2.667px)
          }
          11% {
            transform:translateX(2.133px)
          }
          12% {
            transform:translateX(1.6px)
          }
          13% {
            transform:translateX(1.067px)
          }
          14% {
            transform:translateX(0.533px)
          }
          15% {
            transform:translateX(0px)
          }
          16% {
            transform:translateX(1.587px)
          }
          17% {
            transform:translateX(3.175px)
          }
          18% {
            transform:translateX(4.762px)
          }
          19% {
            transform:translateX(6.349px)
          }
          20% {
            transform:translateX(7.937px)
          }
          21% {
            transform:translateX(9.524px)
          }
          22% {
            transform:translateX(11.111px)
          }
          23% {
            transform:translateX(12.698px)
          }
          24% {
            transform:translateX(14.286px)
          }
          25% {
            transform:translateX(15.873px)
          }
          26% {
            transform:translateX(17.46px)
          }
          27% {
            transform:translateX(19.048px)
          }
          28% {
            transform:translateX(20.635px)
          }
          29% {
            transform:translateX(22.222px)
          }
          30% {
            transform:translateX(23.81px)
          }
          31% {
            transform:translateX(25.397px)
          }
          32% {
            transform:translateX(26.984px)
          }
          33% {
            transform:translateX(28.571px)
          }
          34% {
            transform:translateX(30.159px)
          }
          35% {
            transform:translateX(31.746px)
          }
          36% {
            transform:translateX(33.333px)
          }
          37% {
            transform:translateX(34.921px)
          }
          38% {
            transform:translateX(36.508px)
          }
          39% {
            transform:translateX(38.095px)
          }
          40% {
            transform:translateX(39.683px)
          }
          41% {
            transform:translateX(41.27px)
          }
          42% {
            transform:translateX(42.857px)
          }
          43% {
            transform:translateX(42.857px)
          }
          44% {
            transform:translateX(42.857px)
          }
          45% {
            transform:translateX(42.857px)
          }
          46% {
            transform:translateX(42.857px)
          }
          47% {
            transform:translateX(42.857px)
          }
          48% {
            transform:translateX(42.857px)
          }
          49% {
            transform:translateX(42.857px)
          }
          50% {
            transform:translateX(42.857px)
          }
          51% {
            transform:translateX(42.857px)
          }
          52% {
            transform:translateX(42.857px)
          }
          53% {
            transform:translateX(42.857px)
          }
          54% {
            transform:translateX(42.857px)
          }
          55% {
            transform:translateX(42.857px)
          }
          56% {
            transform:translateX(42.857px)
          }
          57% {
            transform:translateX(42.857px)
          }
          58% {
            transform:translateX(42.857px)
          }
          59% {
            transform:translateX(42.857px)
          }
          60% {
            transform:translateX(42.857px)
          }
          61% {
            transform:translateX(42.857px)
          }
          62% {
            transform:translateX(42.857px)
          }
          63% {
            transform:translateX(42.857px)
          }
          64% {
            transform:translateX(42.857px)
          }
          65% {
            transform:translateX(42.857px)
          }
          66% {
            transform:translateX(42.857px)
          }
          67% {
            transform:translateX(42.857px)
          }
          68% {
            transform:translateX(42.857px)
          }
          69% {
            transform:translateX(42.857px)
          }
          70% {
            transform:translateX(42.857px)
          }
          71% {
            transform:translateX(42.857px)
          }
          72% {
            transform:translateX(42.857px)
          }
          73% {
            transform:translateX(42.857px)
          }
          74% {
            transform:translateX(42.857px)
          }
          75% {
            transform:translateX(42.857px)
          }
          76% {
            transform:translateX(42.857px)
          }
          77% {
            transform:translateX(42.857px)
          }
          78% {
            transform:translateX(42.857px)
          }
          79% {
            transform:translateX(42.857px)
          }
          80% {
            transform:translateX(42.857px)
          }
          81% {
            transform:translateX(42.857px)
          }
          82% {
            transform:translateX(42.857px)
          }
          83% {
            transform:translateX(42.857px)
          }
          84% {
            transform:translateX(42.857px)
          }
          85% {
            transform:translateX(42.857px)
          }
          86% {
            transform:translateX(42.857px)
          }
          87% {
            transform:translateX(42.857px)
          }
          88% {
            transform:translateX(42.857px)
          }
          89% {
            transform:translateX(42.857px)
          }
          90% {
            transform:translateX(42.857px)
          }
          91% {
            transform:translateX(42.857px)
          }
          92% {
            transform:translateX(42.857px)
          }
          93% {
            transform:translateX(42.857px)
          }
          94% {
            transform:translateX(42.857px)
          }
          95% {
            transform:translateX(42.857px)
          }
          96% {
            transform:translateX(42.857px)
          }
          97% {
            transform:translateX(42.857px)
          }
          98% {
            transform:translateX(42.857px)
          }
          99% {
            transform:translateX(42.857px)
          }
          100% {
            transform:translateX(42.857px)
          }
        }
        @keyframes flights {
          0% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          1% {
            d:path('M-50,49.654L-44,56.346M-40,49.654L-34,56.346M-30,49.654L-24,56.346M-20,49.654L-14,56.346M-10,49.654L-4,56.346M0,49.654L6,56.346M10,49.654L16,56.346M20,49.654L26,56.346')
          }
          2% {
            d:path('M-50,53.523L-44,52.477M-40,53.523L-34,52.477M-30,53.523L-24,52.477M-20,53.523L-14,52.477M-10,53.523L-4,52.477M0,53.523L6,52.477M10,53.523L16,52.477M20,53.523L26,52.477')
          }
          3% {
            d:path('M-50,57.045L-44,48.955M-40,57.045L-34,48.955M-30,57.045L-24,48.955M-20,57.045L-14,48.955M-10,57.045L-4,48.955M0,57.045L6,48.955M10,57.045L16,48.955M20,57.045L26,48.955')
          }
          4% {
            d:path('M-50,57.891L-44,48.109M-40,57.891L-34,48.109M-30,57.891L-24,48.109M-20,57.891L-14,48.109M-10,57.891L-4,48.109M0,57.891L6,48.109M10,57.891L16,48.109M20,57.891L26,48.109')
          }
          5% {
            d:path('M-50,55.5L-44,50.5M-40,55.5L-34,50.5M-30,55.5L-24,50.5M-20,55.5L-14,50.5M-10,55.5L-4,50.5M0,55.5L6,50.5M10,55.5L16,50.5M20,55.5L26,50.5')
          }
          6% {
            d:path('M-50,51.455L-44,54.545M-40,51.455L-34,54.545M-30,51.455L-24,54.545M-20,51.455L-14,54.545M-10,51.455L-4,54.545M0,51.455L6,54.545M10,51.455L16,54.545M20,51.455L26,54.545')
          }
          7% {
            d:path('M-50,48.432L-44,57.568M-40,48.432L-34,57.568M-30,48.432L-24,57.568M-20,48.432L-14,57.568M-10,48.432L-4,57.568M0,48.432L6,57.568M10,48.432L16,57.568M20,48.432L26,57.568')
          }
          8% {
            d:path('M-50,48.432L-44,57.568M-40,48.432L-34,57.568M-30,48.432L-24,57.568M-20,48.432L-14,57.568M-10,48.432L-4,57.568M0,48.432L6,57.568M10,48.432L16,57.568M20,48.432L26,57.568')
          }
          9% {
            d:path('M-50,51.455L-44,54.545M-40,51.455L-34,54.545M-30,51.455L-24,54.545M-20,51.455L-14,54.545M-10,51.455L-4,54.545M0,51.455L6,54.545M10,51.455L16,54.545M20,51.455L26,54.545')
          }
          10% {
            d:path('M-50,55.5L-44,50.5M-40,55.5L-34,50.5M-30,55.5L-24,50.5M-20,55.5L-14,50.5M-10,55.5L-4,50.5M0,55.5L6,50.5M10,55.5L16,50.5M20,55.5L26,50.5')
          }
          11% {
            d:path('M-50,57.891L-44,48.109M-40,57.891L-34,48.109M-30,57.891L-24,48.109M-20,57.891L-14,48.109M-10,57.891L-4,48.109M0,57.891L6,48.109M10,57.891L16,48.109M20,57.891L26,48.109')
          }
          12% {
            d:path('M-50,57.045L-44,48.955M-40,57.045L-34,48.955M-30,57.045L-24,48.955M-20,57.045L-14,48.955M-10,57.045L-4,48.955M0,57.045L6,48.955M10,57.045L16,48.955M20,57.045L26,48.955')
          }
          13% {
            d:path('M-50,53.523L-44,52.477M-40,53.523L-34,52.477M-30,53.523L-24,52.477M-20,53.523L-14,52.477M-10,53.523L-4,52.477M0,53.523L6,52.477M10,53.523L16,52.477M20,53.523L26,52.477')
          }
          14% {
            d:path('M-50,49.654L-44,56.346M-40,49.654L-34,56.346M-30,49.654L-24,56.346M-20,49.654L-14,56.346M-10,49.654L-4,56.346M0,49.654L6,56.346M10,49.654L16,56.346M20,49.654L26,56.346')
          }
          15% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          16% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          17% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          18% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          19% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          20% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          21% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          22% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          23% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          24% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          25% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          26% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          27% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          28% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          29% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          30% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          31% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          32% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          33% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          34% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          35% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          36% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          37% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          38% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          39% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          40% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          41% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          42% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          43% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          44% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          45% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          46% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          47% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          48% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          49% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          50% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          51% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          52% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          53% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          54% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          55% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          56% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          57% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          58% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          59% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          60% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          61% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          62% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          63% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          64% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          65% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          66% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          67% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          68% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          69% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          70% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          71% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          72% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          73% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          74% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          75% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          76% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          77% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          78% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          79% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          80% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          81% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          82% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          83% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          84% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          85% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          86% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          87% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          88% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          89% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          90% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          91% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          92% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          93% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          94% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          95% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          96% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          97% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          98% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          99% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
          100% {
            d:path('M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58')
          }
        }
        @keyframes color {
          0%,42% {
            fill:#c48c61
          }
          64%,100% {
            fill:#77c9ef
          }
        }
        @keyframes open {
          0%,64% {
            transform:translateX(0)
          }
          74%,96% {
            transform:translateX(18px)
          }
          100% {
            transform:translateX(0)
          }
        }
        @keyframes eject {
          0%,74% {
            transform:translateX(0)
          }
          84%,96% {
            transform:translateX(8px)
          }
          100% {
            transform:translateX(0)
          }
        }
        @keyframes pins {
          0%,73% {
            opacity:0
          }
          74%,95% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        @keyframes gate {
          0%,63% {
            opacity:0
          }
          64%,95% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        @keyframes cooling {
          0%,42% {
            opacity:.2
          }
          45%,64% {
            opacity:1
          }
          75%,100% {
            opacity:.2
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Injection Molding">
        <g class="cycle">
          <defs>
            <clipPath id="barrel">
              <rect x="10" y="46" width="68" height="14"/>
            </clipPath>
          </defs>
          <path class="ink muted" d="M20,22H36L32,44H24ZM10,46H78L86,50M10,60H78L86,54"/>
          <path fill="#866149" d="M22,26H34L30,40H26Z"/>
          <g clip-path="url(#barrel)">
            <path class="reservoir melt" d="M68.857,46H78V60H68.857Z"/>
            <g class="screw">
              <path class="shaft" d="M-60,53H26"/>
              <path class="flights" d="M-50,48L-44,58M-40,48L-34,58M-30,48L-24,58M-20,48L-14,58M-10,48L-4,58M0,48L6,58M10,48L16,58M20,48L26,58"/>
              <path class="shaft" d="M26,47V59"/>
            </g>
          </g>
          <path class="tool" fill-rule="evenodd" d="M86,34H104V108H86ZM86,50H96V44H104V96H100V58H96V54H86Z"/>
          <g class="moving">
            <path class="tool" fill-rule="evenodd" d="M104,34H119V108H104ZM104,44H112V58H108V96H104Z"/>
            <path class="cooling" d="M115,64V101"/>
          </g>
          <path class="runner melt" d="M78,50H96V54H78Z"/>
          <g class="part">
            <path class="head polymer" d="M96,44H112V58H96Z"/>
            <path class="stem polymer" d="M100,58H108V96H100Z"/>
          </g>
          <path class="gate" d="M96,49V55"/>
          <g class="ejector">
            <path d="M86,47H96M90,84H100"/>
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

if (!customElements.get("concept-injection-molding")) {
  customElements.define("concept-injection-molding", ConceptInjectionMolding);
}
