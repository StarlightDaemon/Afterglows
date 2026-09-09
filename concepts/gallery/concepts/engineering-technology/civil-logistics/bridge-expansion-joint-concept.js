// Bridge Expansion Joint. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBridgeExpansionJoint extends HTMLElement {
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
        .deck0 {
          animation:deck0 16s linear infinite;
        }
        .deck1 {
          animation:deck1 16s linear infinite;
        }
        .temperature {
          animation:temperature 16s linear infinite;
        }
        @keyframes deck0 {
          0% {
            transform:translate(0px,0px);
          }
          2.083% {
            transform:translate(0.017px,0px);
          }
          4.167% {
            transform:translate(0.068px,0px);
          }
          6.25% {
            transform:translate(0.152px,0px);
          }
          8.333% {
            transform:translate(0.268px,0px);
          }
          10.417% {
            transform:translate(0.413px,0px);
          }
          12.5% {
            transform:translate(0.586px,0px);
          }
          14.583% {
            transform:translate(0.782px,0px);
          }
          16.667% {
            transform:translate(1px,0px);
          }
          18.75% {
            transform:translate(1.235px,0px);
          }
          20.833% {
            transform:translate(1.482px,0px);
          }
          22.917% {
            transform:translate(1.739px,0px);
          }
          25% {
            transform:translate(2px,0px);
          }
          27.083% {
            transform:translate(2.261px,0px);
          }
          29.167% {
            transform:translate(2.518px,0px);
          }
          31.25% {
            transform:translate(2.765px,0px);
          }
          33.333% {
            transform:translate(3px,0px);
          }
          35.417% {
            transform:translate(3.218px,0px);
          }
          37.5% {
            transform:translate(3.414px,0px);
          }
          39.583% {
            transform:translate(3.587px,0px);
          }
          41.667% {
            transform:translate(3.732px,0px);
          }
          43.75% {
            transform:translate(3.848px,0px);
          }
          45.833% {
            transform:translate(3.932px,0px);
          }
          47.917% {
            transform:translate(3.983px,0px);
          }
          50% {
            transform:translate(4px,0px);
          }
          52.083% {
            transform:translate(3.983px,0px);
          }
          54.167% {
            transform:translate(3.932px,0px);
          }
          56.25% {
            transform:translate(3.848px,0px);
          }
          58.333% {
            transform:translate(3.732px,0px);
          }
          60.417% {
            transform:translate(3.587px,0px);
          }
          62.5% {
            transform:translate(3.414px,0px);
          }
          64.583% {
            transform:translate(3.218px,0px);
          }
          66.667% {
            transform:translate(3px,0px);
          }
          68.75% {
            transform:translate(2.765px,0px);
          }
          70.833% {
            transform:translate(2.518px,0px);
          }
          72.917% {
            transform:translate(2.261px,0px);
          }
          75% {
            transform:translate(2px,0px);
          }
          77.083% {
            transform:translate(1.739px,0px);
          }
          79.167% {
            transform:translate(1.482px,0px);
          }
          81.25% {
            transform:translate(1.235px,0px);
          }
          83.333% {
            transform:translate(1px,0px);
          }
          85.417% {
            transform:translate(0.782px,0px);
          }
          87.5% {
            transform:translate(0.586px,0px);
          }
          89.583% {
            transform:translate(0.413px,0px);
          }
          91.667% {
            transform:translate(0.268px,0px);
          }
          93.75% {
            transform:translate(0.152px,0px);
          }
          95.833% {
            transform:translate(0.068px,0px);
          }
          97.917% {
            transform:translate(0.017px,0px);
          }
          100% {
            transform:translate(0px,0px);
          }
        }
        @keyframes deck1 {
          0% {
            transform:translate(0px,0px);
          }
          2.083% {
            transform:translate(-0.017px,0px);
          }
          4.167% {
            transform:translate(-0.068px,0px);
          }
          6.25% {
            transform:translate(-0.152px,0px);
          }
          8.333% {
            transform:translate(-0.268px,0px);
          }
          10.417% {
            transform:translate(-0.413px,0px);
          }
          12.5% {
            transform:translate(-0.586px,0px);
          }
          14.583% {
            transform:translate(-0.782px,0px);
          }
          16.667% {
            transform:translate(-1px,0px);
          }
          18.75% {
            transform:translate(-1.235px,0px);
          }
          20.833% {
            transform:translate(-1.482px,0px);
          }
          22.917% {
            transform:translate(-1.739px,0px);
          }
          25% {
            transform:translate(-2px,0px);
          }
          27.083% {
            transform:translate(-2.261px,0px);
          }
          29.167% {
            transform:translate(-2.518px,0px);
          }
          31.25% {
            transform:translate(-2.765px,0px);
          }
          33.333% {
            transform:translate(-3px,0px);
          }
          35.417% {
            transform:translate(-3.218px,0px);
          }
          37.5% {
            transform:translate(-3.414px,0px);
          }
          39.583% {
            transform:translate(-3.587px,0px);
          }
          41.667% {
            transform:translate(-3.732px,0px);
          }
          43.75% {
            transform:translate(-3.848px,0px);
          }
          45.833% {
            transform:translate(-3.932px,0px);
          }
          47.917% {
            transform:translate(-3.983px,0px);
          }
          50% {
            transform:translate(-4px,0px);
          }
          52.083% {
            transform:translate(-3.983px,0px);
          }
          54.167% {
            transform:translate(-3.932px,0px);
          }
          56.25% {
            transform:translate(-3.848px,0px);
          }
          58.333% {
            transform:translate(-3.732px,0px);
          }
          60.417% {
            transform:translate(-3.587px,0px);
          }
          62.5% {
            transform:translate(-3.414px,0px);
          }
          64.583% {
            transform:translate(-3.218px,0px);
          }
          66.667% {
            transform:translate(-3px,0px);
          }
          68.75% {
            transform:translate(-2.765px,0px);
          }
          70.833% {
            transform:translate(-2.518px,0px);
          }
          72.917% {
            transform:translate(-2.261px,0px);
          }
          75% {
            transform:translate(-2px,0px);
          }
          77.083% {
            transform:translate(-1.739px,0px);
          }
          79.167% {
            transform:translate(-1.482px,0px);
          }
          81.25% {
            transform:translate(-1.235px,0px);
          }
          83.333% {
            transform:translate(-1px,0px);
          }
          85.417% {
            transform:translate(-0.782px,0px);
          }
          87.5% {
            transform:translate(-0.586px,0px);
          }
          89.583% {
            transform:translate(-0.413px,0px);
          }
          91.667% {
            transform:translate(-0.268px,0px);
          }
          93.75% {
            transform:translate(-0.152px,0px);
          }
          95.833% {
            transform:translate(-0.068px,0px);
          }
          97.917% {
            transform:translate(-0.017px,0px);
          }
          100% {
            transform:translate(0px,0px);
          }
        }
        @keyframes temperature {
          0% {
            d:path('M34 123H34');
          }
          2.083% {
            d:path('M34 123H34.351');
          }
          4.167% {
            d:path('M34 123H35.397');
          }
          6.25% {
            d:path('M34 123H37.121');
          }
          8.333% {
            d:path('M34 123H39.493');
          }
          10.417% {
            d:path('M34 123H42.473');
          }
          12.5% {
            d:path('M34 123H46.009');
          }
          14.583% {
            d:path('M34 123H50.041');
          }
          16.667% {
            d:path('M34 123H54.5');
          }
          18.75% {
            d:path('M34 123H59.31');
          }
          20.833% {
            d:path('M34 123H64.388');
          }
          22.917% {
            d:path('M34 123H69.648');
          }
          25% {
            d:path('M34 123H75');
          }
          27.083% {
            d:path('M34 123H80.352');
          }
          29.167% {
            d:path('M34 123H85.612');
          }
          31.25% {
            d:path('M34 123H90.69');
          }
          33.333% {
            d:path('M34 123H95.5');
          }
          35.417% {
            d:path('M34 123H99.959');
          }
          37.5% {
            d:path('M34 123H103.991');
          }
          39.583% {
            d:path('M34 123H107.527');
          }
          41.667% {
            d:path('M34 123H110.507');
          }
          43.75% {
            d:path('M34 123H112.879');
          }
          45.833% {
            d:path('M34 123H114.603');
          }
          47.917% {
            d:path('M34 123H115.649');
          }
          50% {
            d:path('M34 123H116');
          }
          52.083% {
            d:path('M34 123H115.649');
          }
          54.167% {
            d:path('M34 123H114.603');
          }
          56.25% {
            d:path('M34 123H112.879');
          }
          58.333% {
            d:path('M34 123H110.507');
          }
          60.417% {
            d:path('M34 123H107.527');
          }
          62.5% {
            d:path('M34 123H103.991');
          }
          64.583% {
            d:path('M34 123H99.959');
          }
          66.667% {
            d:path('M34 123H95.5');
          }
          68.75% {
            d:path('M34 123H90.69');
          }
          70.833% {
            d:path('M34 123H85.612');
          }
          72.917% {
            d:path('M34 123H80.352');
          }
          75% {
            d:path('M34 123H75');
          }
          77.083% {
            d:path('M34 123H69.648');
          }
          79.167% {
            d:path('M34 123H64.388');
          }
          81.25% {
            d:path('M34 123H59.31');
          }
          83.333% {
            d:path('M34 123H54.5');
          }
          85.417% {
            d:path('M34 123H50.041');
          }
          87.5% {
            d:path('M34 123H46.009');
          }
          89.583% {
            d:path('M34 123H42.473');
          }
          91.667% {
            d:path('M34 123H39.493');
          }
          93.75% {
            d:path('M34 123H37.121');
          }
          95.833% {
            d:path('M34 123H35.397');
          }
          97.917% {
            d:path('M34 123H34.351');
          }
          100% {
            d:path('M34 123H34');
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .deck0 {
            transform:translate(2px,0px);
          }
          .deck1 {
            transform:translate(-2px,0px);
          }
          .temperature {
            d:path('M34 123H75');
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Bridge Expansion Joint">
        <rect x="9" y="30" width="122" height="79" fill="#11241f"/>
        <g class="deck0">
          <rect x="9" y="30" width="49" height="79" fill="#516360"/>
          <rect x="58" y="35" width="14" height="5" fill="#b0c3b5" stroke="#07120f" stroke-width=".5"/>
          <rect x="58" y="49" width="14" height="5" fill="#b0c3b5" stroke="#07120f" stroke-width=".5"/>
          <rect x="58" y="63" width="14" height="5" fill="#b0c3b5" stroke="#07120f" stroke-width=".5"/>
          <rect x="58" y="77" width="14" height="5" fill="#b0c3b5" stroke="#07120f" stroke-width=".5"/>
          <rect x="58" y="91" width="14" height="5" fill="#b0c3b5" stroke="#07120f" stroke-width=".5"/>
          <circle cx="52" cy="41" r="1.7" fill="#263e35"/>
          <circle cx="52" cy="59" r="1.7" fill="#263e35"/>
          <circle cx="52" cy="77" r="1.7" fill="#263e35"/>
          <circle cx="52" cy="95" r="1.7" fill="#263e35"/>
          <path d="M16 70L44 70" stroke="#c8bf8b" stroke-width="2" stroke-dasharray="10 8"/>
        </g>
        <g class="deck1">
          <rect x="82" y="30" width="49" height="79" fill="#516360"/>
          <rect x="68" y="42" width="14" height="5" fill="#b0c3b5" stroke="#07120f" stroke-width=".5"/>
          <rect x="68" y="56" width="14" height="5" fill="#b0c3b5" stroke="#07120f" stroke-width=".5"/>
          <rect x="68" y="70" width="14" height="5" fill="#b0c3b5" stroke="#07120f" stroke-width=".5"/>
          <rect x="68" y="84" width="14" height="5" fill="#b0c3b5" stroke="#07120f" stroke-width=".5"/>
          <rect x="68" y="98" width="14" height="5" fill="#b0c3b5" stroke="#07120f" stroke-width=".5"/>
          <circle cx="88" cy="41" r="1.7" fill="#263e35"/>
          <circle cx="88" cy="59" r="1.7" fill="#263e35"/>
          <circle cx="88" cy="77" r="1.7" fill="#263e35"/>
          <circle cx="88" cy="95" r="1.7" fill="#263e35"/>
          <path d="M94 70L124 70" stroke="#c8bf8b" stroke-width="2" stroke-dasharray="10 8"/>
        </g>
        <circle cx="23" cy="122" r="5" fill="#dd9e6d"/>
        <rect x="21" y="114" width="4" height="8" fill="#dd9e6d"/>
        <path d="M34 123H116" stroke="#365a50" stroke-width="3"/>
        <path d="M34 123H80" class="temperature" stroke="#dcac72" stroke-width="3"/>
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

if (!customElements.get("concept-bridge-expansion-joint")) {
  customElements.define("concept-bridge-expansion-joint", ConceptBridgeExpansionJoint);
}
