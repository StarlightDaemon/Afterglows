// Electroplating. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptElectroplating extends HTMLElement {
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
        .copper {
          fill:#d69a69
        }
        .anode {
          animation:anode 16s linear infinite
        }
        .coating {
          animation:coat 16s linear infinite
        }
        .mask {
          fill:none;
          stroke:#07120f;
          stroke-width:2
        }
        .charge {
          fill:none;
          stroke:#07120f;
          stroke-width:.9;
          opacity:0
        }
        .cycle {
          animation:cycle 16s linear infinite
        }
        .ion0 {
          transform:translate(97.733px,57px);
          animation:ion0 16s linear infinite
        }
        .ion0 circle {
          animation:size0 16s linear infinite
        }
        .charge0 {
          animation:charge0 16s linear infinite
        }
        @keyframes ion0 {
          0%,20% {
            opacity:0;
            transform:translate(41px,57px)
          }
          23% {
            opacity:1;
            transform:translate(49px,55px)
          }
          33% {
            opacity:1;
            transform:translate(67px,52px)
          }
          43% {
            opacity:1;
            transform:translate(94.867px,57px)
          }
          45%,100% {
            opacity:1;
            transform:translate(97.733px,57px)
          }
        }
        @keyframes size0 {
          0%,43% {
            r:2.5px
          }
          45%,100% {
            r:.35px
          }
        }
        @keyframes charge0 {
          0%,43% {
            opacity:1
          }
          45%,100% {
            opacity:0
          }
        }
        .ion1 {
          transform:translate(97.067px,71px);
          animation:ion1 16s linear infinite
        }
        .ion1 circle {
          animation:size1 16s linear infinite
        }
        .charge1 {
          animation:charge1 16s linear infinite
        }
        @keyframes ion1 {
          0%,30% {
            opacity:0;
            transform:translate(40.333px,71px)
          }
          33% {
            opacity:1;
            transform:translate(48.333px,69px)
          }
          43% {
            opacity:1;
            transform:translate(67px,66px)
          }
          53% {
            opacity:1;
            transform:translate(94.2px,71px)
          }
          55%,100% {
            opacity:1;
            transform:translate(97.067px,71px)
          }
        }
        @keyframes size1 {
          0%,53% {
            r:2.5px
          }
          55%,100% {
            r:.35px
          }
        }
        @keyframes charge1 {
          0%,53% {
            opacity:1
          }
          55%,100% {
            opacity:0
          }
        }
        .ion2 {
          transform:translate(96.4px,85px);
          animation:ion2 16s linear infinite
        }
        .ion2 circle {
          animation:size2 16s linear infinite
        }
        .charge2 {
          animation:charge2 16s linear infinite
        }
        @keyframes ion2 {
          0%,40% {
            opacity:0;
            transform:translate(39.667px,85px)
          }
          43% {
            opacity:1;
            transform:translate(47.667px,83px)
          }
          53% {
            opacity:1;
            transform:translate(67px,80px)
          }
          63% {
            opacity:1;
            transform:translate(93.533px,85px)
          }
          65%,100% {
            opacity:1;
            transform:translate(96.4px,85px)
          }
        }
        @keyframes size2 {
          0%,63% {
            r:2.5px
          }
          65%,100% {
            r:.35px
          }
        }
        @keyframes charge2 {
          0%,63% {
            opacity:1
          }
          65%,100% {
            opacity:0
          }
        }
        .ion3 {
          transform:translate(95.733px,99px);
          animation:ion3 16s linear infinite
        }
        .ion3 circle {
          animation:size3 16s linear infinite
        }
        .charge3 {
          animation:charge3 16s linear infinite
        }
        @keyframes ion3 {
          0%,50% {
            opacity:0;
            transform:translate(39px,99px)
          }
          53% {
            opacity:1;
            transform:translate(47px,97px)
          }
          63% {
            opacity:1;
            transform:translate(67px,94px)
          }
          73% {
            opacity:1;
            transform:translate(92.867px,99px)
          }
          75%,100% {
            opacity:1;
            transform:translate(95.733px,99px)
          }
        }
        @keyframes size3 {
          0%,73% {
            r:2.5px
          }
          75%,100% {
            r:.35px
          }
        }
        @keyframes charge3 {
          0%,73% {
            opacity:1
          }
          75%,100% {
            opacity:0
          }
        }
        @keyframes anode {
          0% {
            d:path('M27,47H41V106H27Z')
          }
          1% {
            d:path('M27,47H41V106H27Z')
          }
          2% {
            d:path('M27,47H41V106H27Z')
          }
          3% {
            d:path('M27,47H41V106H27Z')
          }
          4% {
            d:path('M27,47H41V106H27Z')
          }
          5% {
            d:path('M27,47H41V106H27Z')
          }
          6% {
            d:path('M27,47H41V106H27Z')
          }
          7% {
            d:path('M27,47H41V106H27Z')
          }
          8% {
            d:path('M27,47H41V106H27Z')
          }
          9% {
            d:path('M27,47H41V106H27Z')
          }
          10% {
            d:path('M27,47H41V106H27Z')
          }
          11% {
            d:path('M27,47H41V106H27Z')
          }
          12% {
            d:path('M27,47H41V106H27Z')
          }
          13% {
            d:path('M27,47H41V106H27Z')
          }
          14% {
            d:path('M27,47H41V106H27Z')
          }
          15% {
            d:path('M27,47H41V106H27Z')
          }
          16% {
            d:path('M27,47H41V106H27Z')
          }
          17% {
            d:path('M27,47H41V106H27Z')
          }
          18% {
            d:path('M27,47H41V106H27Z')
          }
          19% {
            d:path('M27,47H41V106H27Z')
          }
          20% {
            d:path('M27,47H41V106H27Z')
          }
          21% {
            d:path('M27,47H40.933V106H27Z')
          }
          22% {
            d:path('M27,47H40.867V106H27Z')
          }
          23% {
            d:path('M27,47H40.8V106H27Z')
          }
          24% {
            d:path('M27,47H40.733V106H27Z')
          }
          25% {
            d:path('M27,47H40.667V106H27Z')
          }
          26% {
            d:path('M27,47H40.6V106H27Z')
          }
          27% {
            d:path('M27,47H40.533V106H27Z')
          }
          28% {
            d:path('M27,47H40.467V106H27Z')
          }
          29% {
            d:path('M27,47H40.4V106H27Z')
          }
          30% {
            d:path('M27,47H40.333V106H27Z')
          }
          31% {
            d:path('M27,47H40.267V106H27Z')
          }
          32% {
            d:path('M27,47H40.2V106H27Z')
          }
          33% {
            d:path('M27,47H40.133V106H27Z')
          }
          34% {
            d:path('M27,47H40.067V106H27Z')
          }
          35% {
            d:path('M27,47H40V106H27Z')
          }
          36% {
            d:path('M27,47H39.933V106H27Z')
          }
          37% {
            d:path('M27,47H39.867V106H27Z')
          }
          38% {
            d:path('M27,47H39.8V106H27Z')
          }
          39% {
            d:path('M27,47H39.733V106H27Z')
          }
          40% {
            d:path('M27,47H39.667V106H27Z')
          }
          41% {
            d:path('M27,47H39.6V106H27Z')
          }
          42% {
            d:path('M27,47H39.533V106H27Z')
          }
          43% {
            d:path('M27,47H39.467V106H27Z')
          }
          44% {
            d:path('M27,47H39.4V106H27Z')
          }
          45% {
            d:path('M27,47H39.333V106H27Z')
          }
          46% {
            d:path('M27,47H39.267V106H27Z')
          }
          47% {
            d:path('M27,47H39.2V106H27Z')
          }
          48% {
            d:path('M27,47H39.133V106H27Z')
          }
          49% {
            d:path('M27,47H39.067V106H27Z')
          }
          50% {
            d:path('M27,47H39V106H27Z')
          }
          51% {
            d:path('M27,47H38.933V106H27Z')
          }
          52% {
            d:path('M27,47H38.867V106H27Z')
          }
          53% {
            d:path('M27,47H38.8V106H27Z')
          }
          54% {
            d:path('M27,47H38.733V106H27Z')
          }
          55% {
            d:path('M27,47H38.667V106H27Z')
          }
          56% {
            d:path('M27,47H38.6V106H27Z')
          }
          57% {
            d:path('M27,47H38.533V106H27Z')
          }
          58% {
            d:path('M27,47H38.467V106H27Z')
          }
          59% {
            d:path('M27,47H38.4V106H27Z')
          }
          60% {
            d:path('M27,47H38.333V106H27Z')
          }
          61% {
            d:path('M27,47H38.267V106H27Z')
          }
          62% {
            d:path('M27,47H38.2V106H27Z')
          }
          63% {
            d:path('M27,47H38.133V106H27Z')
          }
          64% {
            d:path('M27,47H38.067V106H27Z')
          }
          65% {
            d:path('M27,47H38V106H27Z')
          }
          66% {
            d:path('M27,47H37.933V106H27Z')
          }
          67% {
            d:path('M27,47H37.867V106H27Z')
          }
          68% {
            d:path('M27,47H37.8V106H27Z')
          }
          69% {
            d:path('M27,47H37.733V106H27Z')
          }
          70% {
            d:path('M27,47H37.667V106H27Z')
          }
          71% {
            d:path('M27,47H37.6V106H27Z')
          }
          72% {
            d:path('M27,47H37.533V106H27Z')
          }
          73% {
            d:path('M27,47H37.467V106H27Z')
          }
          74% {
            d:path('M27,47H37.4V106H27Z')
          }
          75% {
            d:path('M27,47H37.333V106H27Z')
          }
          76% {
            d:path('M27,47H37.267V106H27Z')
          }
          77% {
            d:path('M27,47H37.2V106H27Z')
          }
          78% {
            d:path('M27,47H37.133V106H27Z')
          }
          79% {
            d:path('M27,47H37.067V106H27Z')
          }
          80% {
            d:path('M27,47H37V106H27Z')
          }
          81% {
            d:path('M27,47H37V106H27Z')
          }
          82% {
            d:path('M27,47H37V106H27Z')
          }
          83% {
            d:path('M27,47H37V106H27Z')
          }
          84% {
            d:path('M27,47H37V106H27Z')
          }
          85% {
            d:path('M27,47H37V106H27Z')
          }
          86% {
            d:path('M27,47H37V106H27Z')
          }
          87% {
            d:path('M27,47H37V106H27Z')
          }
          88% {
            d:path('M27,47H37V106H27Z')
          }
          89% {
            d:path('M27,47H37V106H27Z')
          }
          90% {
            d:path('M27,47H37V106H27Z')
          }
          91% {
            d:path('M27,47H37V106H27Z')
          }
          92% {
            d:path('M27,47H37V106H27Z')
          }
          93% {
            d:path('M27,47H37V106H27Z')
          }
          94% {
            d:path('M27,47H37V106H27Z')
          }
          95% {
            d:path('M27,47H37V106H27Z')
          }
          96% {
            d:path('M27,47H37V106H27Z')
          }
          97% {
            d:path('M27,47H37V106H27Z')
          }
          98% {
            d:path('M27,47H37V106H27Z')
          }
          99% {
            d:path('M27,47H37V106H27Z')
          }
          100% {
            d:path('M27,47H37V106H27Z')
          }
        }
        @keyframes coat {
          0% {
            d:path('M99,47H99V106H99Z')
          }
          1% {
            d:path('M99,47H99V106H99Z')
          }
          2% {
            d:path('M99,47H99V106H99Z')
          }
          3% {
            d:path('M99,47H99V106H99Z')
          }
          4% {
            d:path('M99,47H99V106H99Z')
          }
          5% {
            d:path('M99,47H99V106H99Z')
          }
          6% {
            d:path('M99,47H99V106H99Z')
          }
          7% {
            d:path('M99,47H99V106H99Z')
          }
          8% {
            d:path('M99,47H99V106H99Z')
          }
          9% {
            d:path('M99,47H99V106H99Z')
          }
          10% {
            d:path('M99,47H99V106H99Z')
          }
          11% {
            d:path('M99,47H99V106H99Z')
          }
          12% {
            d:path('M99,47H99V106H99Z')
          }
          13% {
            d:path('M99,47H99V106H99Z')
          }
          14% {
            d:path('M99,47H99V106H99Z')
          }
          15% {
            d:path('M99,47H99V106H99Z')
          }
          16% {
            d:path('M99,47H99V106H99Z')
          }
          17% {
            d:path('M99,47H99V106H99Z')
          }
          18% {
            d:path('M99,47H99V106H99Z')
          }
          19% {
            d:path('M99,47H99V106H99Z')
          }
          20% {
            d:path('M99,47H99V106H99Z')
          }
          21% {
            d:path('M98.933,47H99V106H98.933Z')
          }
          22% {
            d:path('M98.867,47H99V106H98.867Z')
          }
          23% {
            d:path('M98.8,47H99V106H98.8Z')
          }
          24% {
            d:path('M98.733,47H99V106H98.733Z')
          }
          25% {
            d:path('M98.667,47H99V106H98.667Z')
          }
          26% {
            d:path('M98.6,47H99V106H98.6Z')
          }
          27% {
            d:path('M98.533,47H99V106H98.533Z')
          }
          28% {
            d:path('M98.467,47H99V106H98.467Z')
          }
          29% {
            d:path('M98.4,47H99V106H98.4Z')
          }
          30% {
            d:path('M98.333,47H99V106H98.333Z')
          }
          31% {
            d:path('M98.267,47H99V106H98.267Z')
          }
          32% {
            d:path('M98.2,47H99V106H98.2Z')
          }
          33% {
            d:path('M98.133,47H99V106H98.133Z')
          }
          34% {
            d:path('M98.067,47H99V106H98.067Z')
          }
          35% {
            d:path('M98,47H99V106H98Z')
          }
          36% {
            d:path('M97.933,47H99V106H97.933Z')
          }
          37% {
            d:path('M97.867,47H99V106H97.867Z')
          }
          38% {
            d:path('M97.8,47H99V106H97.8Z')
          }
          39% {
            d:path('M97.733,47H99V106H97.733Z')
          }
          40% {
            d:path('M97.667,47H99V106H97.667Z')
          }
          41% {
            d:path('M97.6,47H99V106H97.6Z')
          }
          42% {
            d:path('M97.533,47H99V106H97.533Z')
          }
          43% {
            d:path('M97.467,47H99V106H97.467Z')
          }
          44% {
            d:path('M97.4,47H99V106H97.4Z')
          }
          45% {
            d:path('M97.333,47H99V106H97.333Z')
          }
          46% {
            d:path('M97.267,47H99V106H97.267Z')
          }
          47% {
            d:path('M97.2,47H99V106H97.2Z')
          }
          48% {
            d:path('M97.133,47H99V106H97.133Z')
          }
          49% {
            d:path('M97.067,47H99V106H97.067Z')
          }
          50% {
            d:path('M97,47H99V106H97Z')
          }
          51% {
            d:path('M96.933,47H99V106H96.933Z')
          }
          52% {
            d:path('M96.867,47H99V106H96.867Z')
          }
          53% {
            d:path('M96.8,47H99V106H96.8Z')
          }
          54% {
            d:path('M96.733,47H99V106H96.733Z')
          }
          55% {
            d:path('M96.667,47H99V106H96.667Z')
          }
          56% {
            d:path('M96.6,47H99V106H96.6Z')
          }
          57% {
            d:path('M96.533,47H99V106H96.533Z')
          }
          58% {
            d:path('M96.467,47H99V106H96.467Z')
          }
          59% {
            d:path('M96.4,47H99V106H96.4Z')
          }
          60% {
            d:path('M96.333,47H99V106H96.333Z')
          }
          61% {
            d:path('M96.267,47H99V106H96.267Z')
          }
          62% {
            d:path('M96.2,47H99V106H96.2Z')
          }
          63% {
            d:path('M96.133,47H99V106H96.133Z')
          }
          64% {
            d:path('M96.067,47H99V106H96.067Z')
          }
          65% {
            d:path('M96,47H99V106H96Z')
          }
          66% {
            d:path('M95.933,47H99V106H95.933Z')
          }
          67% {
            d:path('M95.867,47H99V106H95.867Z')
          }
          68% {
            d:path('M95.8,47H99V106H95.8Z')
          }
          69% {
            d:path('M95.733,47H99V106H95.733Z')
          }
          70% {
            d:path('M95.667,47H99V106H95.667Z')
          }
          71% {
            d:path('M95.6,47H99V106H95.6Z')
          }
          72% {
            d:path('M95.533,47H99V106H95.533Z')
          }
          73% {
            d:path('M95.467,47H99V106H95.467Z')
          }
          74% {
            d:path('M95.4,47H99V106H95.4Z')
          }
          75% {
            d:path('M95.333,47H99V106H95.333Z')
          }
          76% {
            d:path('M95.267,47H99V106H95.267Z')
          }
          77% {
            d:path('M95.2,47H99V106H95.2Z')
          }
          78% {
            d:path('M95.133,47H99V106H95.133Z')
          }
          79% {
            d:path('M95.067,47H99V106H95.067Z')
          }
          80% {
            d:path('M95,47H99V106H95Z')
          }
          81% {
            d:path('M95,47H99V106H95Z')
          }
          82% {
            d:path('M95,47H99V106H95Z')
          }
          83% {
            d:path('M95,47H99V106H95Z')
          }
          84% {
            d:path('M95,47H99V106H95Z')
          }
          85% {
            d:path('M95,47H99V106H95Z')
          }
          86% {
            d:path('M95,47H99V106H95Z')
          }
          87% {
            d:path('M95,47H99V106H95Z')
          }
          88% {
            d:path('M95,47H99V106H95Z')
          }
          89% {
            d:path('M95,47H99V106H95Z')
          }
          90% {
            d:path('M95,47H99V106H95Z')
          }
          91% {
            d:path('M95,47H99V106H95Z')
          }
          92% {
            d:path('M95,47H99V106H95Z')
          }
          93% {
            d:path('M95,47H99V106H95Z')
          }
          94% {
            d:path('M95,47H99V106H95Z')
          }
          95% {
            d:path('M95,47H99V106H95Z')
          }
          96% {
            d:path('M95,47H99V106H95Z')
          }
          97% {
            d:path('M95,47H99V106H95Z')
          }
          98% {
            d:path('M95,47H99V106H95Z')
          }
          99% {
            d:path('M95,47H99V106H95Z')
          }
          100% {
            d:path('M95,47H99V106H95Z')
          }
        }
        @keyframes cycle {
          0%,3%,97%,100% {
            opacity:0
          }
          6%,94% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Electroplating">
        <path class="ink muted" d="M14,42V121H126V42"/>
        <rect x="15" y="45" width="110" height="75" fill="#102d34"/>
        <path class="ink" d="M34,47V18H53M87,18H103V47"/>
        <rect class="paper ink" x="53" y="10" width="34" height="18" rx="3"/>
        <path class="ink" d="M57,19H65M61,15V23M74,19H82"/>
        <g class="cycle">
          <path class="anode copper" d="M27,47H37V106H27Z"/>
          <rect x="99" y="47" width="8" height="59" fill="#557467"/>
          <path class="coating copper" d="M95,47H99V106H95Z"/>
          <g class="ion ion0">
            <circle class="copper" r=".35"/>
            <path class="charge charge0" d="M-1.4,0H1.4M0,-1.4V1.4"/>
          </g>
          <g class="ion ion1">
            <circle class="copper" r=".35"/>
            <path class="charge charge1" d="M-1.4,0H1.4M0,-1.4V1.4"/>
          </g>
          <g class="ion ion2">
            <circle class="copper" r=".35"/>
            <path class="charge charge2" d="M-1.4,0H1.4M0,-1.4V1.4"/>
          </g>
          <g class="ion ion3">
            <circle class="copper" r=".35"/>
            <path class="charge charge3" d="M-1.4,0H1.4M0,-1.4V1.4"/>
          </g>
          <path class="mask" d="M41,47H27V106H41M99,47H107V106H99"/>
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

if (!customElements.get("concept-electroplating")) {
  customElements.define("concept-electroplating", ConceptElectroplating);
}
