// Freeze Drying. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptFreezeDrying extends HTMLElement {
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
        .v0 {
          opacity:0;
          animation:v0 18s linear infinite
        }
        .f0 {
          animation:f0 18s linear infinite
        }
        @keyframes v0 {
          0%,25% {
            opacity:0;
            transform:translate(42px,67.049px)
          }
          25.5% {
            opacity:1;
            transform:translate(42px,67.049px)
          }
          27% {
            opacity:1;
            transform:translate(42px,54px)
          }
          29% {
            opacity:1;
            transform:translate(85px,40px)
          }
          31% {
            opacity:1;
            transform:translate(111px,40px)
          }
          33% {
            opacity:1;
            transform:translate(111px,46px)
          }
          35% {
            opacity:1;
            transform:translate(120px,46px)
          }
          35.5%,100% {
            opacity:0;
            transform:translate(120px,46px)
          }
        }
        @keyframes f0 {
          0%,35% {
            opacity:0
          }
          35.5%,100% {
            opacity:1
          }
        }
        .v1 {
          opacity:0;
          animation:v1 18s linear infinite
        }
        .f1 {
          animation:f1 18s linear infinite
        }
        @keyframes v1 {
          0%,38% {
            opacity:0;
            transform:translate(42px,74.653px)
          }
          38.5% {
            opacity:1;
            transform:translate(42px,74.653px)
          }
          40% {
            opacity:1;
            transform:translate(42px,54px)
          }
          42% {
            opacity:1;
            transform:translate(85px,40px)
          }
          44% {
            opacity:1;
            transform:translate(111px,40px)
          }
          46% {
            opacity:1;
            transform:translate(111px,53px)
          }
          48% {
            opacity:1;
            transform:translate(120px,53px)
          }
          48.5%,100% {
            opacity:0;
            transform:translate(120px,53px)
          }
        }
        @keyframes f1 {
          0%,48% {
            opacity:0
          }
          48.5%,100% {
            opacity:1
          }
        }
        .v2 {
          opacity:0;
          animation:v2 18s linear infinite
        }
        .f2 {
          animation:f2 18s linear infinite
        }
        @keyframes v2 {
          0%,51% {
            opacity:0;
            transform:translate(42px,82.257px)
          }
          51.5% {
            opacity:1;
            transform:translate(42px,82.257px)
          }
          53% {
            opacity:1;
            transform:translate(42px,54px)
          }
          55% {
            opacity:1;
            transform:translate(85px,40px)
          }
          57% {
            opacity:1;
            transform:translate(111px,40px)
          }
          59% {
            opacity:1;
            transform:translate(111px,60px)
          }
          61% {
            opacity:1;
            transform:translate(120px,60px)
          }
          61.5%,100% {
            opacity:0;
            transform:translate(120px,60px)
          }
        }
        @keyframes f2 {
          0%,61% {
            opacity:0
          }
          61.5%,100% {
            opacity:1
          }
        }
        .v3 {
          opacity:0;
          animation:v3 18s linear infinite
        }
        .f3 {
          animation:f3 18s linear infinite
        }
        @keyframes v3 {
          0%,64% {
            opacity:0;
            transform:translate(42px,89.86px)
          }
          64.5% {
            opacity:1;
            transform:translate(42px,89.86px)
          }
          66% {
            opacity:1;
            transform:translate(42px,54px)
          }
          68% {
            opacity:1;
            transform:translate(85px,40px)
          }
          70% {
            opacity:1;
            transform:translate(111px,40px)
          }
          72% {
            opacity:1;
            transform:translate(111px,67px)
          }
          74% {
            opacity:1;
            transform:translate(120px,67px)
          }
          74.5%,100% {
            opacity:0;
            transform:translate(120px,67px)
          }
        }
        @keyframes f3 {
          0%,74% {
            opacity:0
          }
          74.5%,100% {
            opacity:1
          }
        }
        .v4 {
          opacity:0;
          animation:v4 18s linear infinite
        }
        .f4 {
          animation:f4 18s linear infinite
        }
        @keyframes v4 {
          0%,72% {
            opacity:1;
            transform:translate(40px,84px)
          }
          72.5% {
            opacity:1;
            transform:translate(42px,84px)
          }
          74% {
            opacity:1;
            transform:translate(42px,54px)
          }
          76% {
            opacity:1;
            transform:translate(85px,40px)
          }
          78% {
            opacity:1;
            transform:translate(111px,40px)
          }
          80% {
            opacity:1;
            transform:translate(111px,78px)
          }
          82% {
            opacity:1;
            transform:translate(120px,78px)
          }
          82.5%,100% {
            opacity:0;
            transform:translate(120px,78px)
          }
        }
        @keyframes f4 {
          0%,82% {
            opacity:0
          }
          82.5%,100% {
            opacity:1
          }
        }
        .v5 {
          opacity:0;
          animation:v5 18s linear infinite
        }
        .f5 {
          animation:f5 18s linear infinite
        }
        @keyframes v5 {
          0%,76% {
            opacity:1;
            transform:translate(44px,76px)
          }
          76.5% {
            opacity:1;
            transform:translate(42px,76px)
          }
          78% {
            opacity:1;
            transform:translate(42px,54px)
          }
          80% {
            opacity:1;
            transform:translate(85px,40px)
          }
          82% {
            opacity:1;
            transform:translate(111px,40px)
          }
          84% {
            opacity:1;
            transform:translate(111px,85px)
          }
          86% {
            opacity:1;
            transform:translate(120px,85px)
          }
          86.5%,100% {
            opacity:0;
            transform:translate(120px,85px)
          }
        }
        @keyframes f5 {
          0%,86% {
            opacity:0
          }
          86.5%,100% {
            opacity:1
          }
        }
        .v6 {
          opacity:0;
          animation:v6 18s linear infinite
        }
        .f6 {
          animation:f6 18s linear infinite
        }
        @keyframes v6 {
          0%,80% {
            opacity:1;
            transform:translate(49.8px,90px)
          }
          80.5% {
            opacity:1;
            transform:translate(42px,90px)
          }
          82% {
            opacity:1;
            transform:translate(42px,54px)
          }
          84% {
            opacity:1;
            transform:translate(85px,40px)
          }
          86% {
            opacity:1;
            transform:translate(111px,40px)
          }
          88% {
            opacity:1;
            transform:translate(111px,92px)
          }
          90% {
            opacity:1;
            transform:translate(120px,92px)
          }
          90.5%,100% {
            opacity:0;
            transform:translate(120px,92px)
          }
        }
        @keyframes f6 {
          0%,90% {
            opacity:0
          }
          90.5%,100% {
            opacity:1
          }
        }
        .ice {
          fill:url(#ice);
          animation:ice 18s linear infinite
        }
        .scaffold {
          fill:none;
          stroke:#bba276;
          stroke-width:3.2;
          stroke-linejoin:round;
          stroke-linecap:round
        }
        .tray {
          fill:none;
          stroke:#728c7a;
          stroke-width:1.2
        }
        .shelf {
          stroke:#9db5a4;
          stroke-width:2
        }
        .plate,.frost {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.2
        }
        .plate {
          stroke-width:2
        }
        .vapor {
          fill:#9cdaed
        }
        .vacuum {
          fill:none;
          stroke:#9ebfad;
          stroke-width:1;
          stroke-dasharray:3 2;
          animation:vacuum 1.5s linear infinite
        }
        .heat {
          fill:none;
          stroke:#d7a26c;
          stroke-width:1.1;
          animation:heat 18s linear infinite
        }
        .cycle {
          animation:cycle 18s linear infinite
        }
        @keyframes ice {
          0% {
            d:path('M29,63H76V94H29Z')
          }
          1% {
            d:path('M29,63H76V94H29Z')
          }
          2% {
            d:path('M29,63H76V94H29Z')
          }
          3% {
            d:path('M29,63H76V94H29Z')
          }
          4% {
            d:path('M29,63H76V94H29Z')
          }
          5% {
            d:path('M29,63H76V94H29Z')
          }
          6% {
            d:path('M29,63H76V94H29Z')
          }
          7% {
            d:path('M29,63H76V94H29Z')
          }
          8% {
            d:path('M29,63H76V94H29Z')
          }
          9% {
            d:path('M29,63H76V94H29Z')
          }
          10% {
            d:path('M29,63H76V94H29Z')
          }
          11% {
            d:path('M29,63H76V94H29Z')
          }
          12% {
            d:path('M29,63H76V94H29Z')
          }
          13% {
            d:path('M29,63H76V94H29Z')
          }
          14% {
            d:path('M29,63H76V94H29Z')
          }
          15% {
            d:path('M29,63H76V94H29Z')
          }
          16% {
            d:path('M29,63.585H76V94H29Z')
          }
          17% {
            d:path('M29,64.17H76V94H29Z')
          }
          18% {
            d:path('M29,64.755H76V94H29Z')
          }
          19% {
            d:path('M29,65.34H76V94H29Z')
          }
          20% {
            d:path('M29,65.925H76V94H29Z')
          }
          21% {
            d:path('M29,66.509H76V94H29Z')
          }
          22% {
            d:path('M29,67.094H76V94H29Z')
          }
          23% {
            d:path('M29,67.679H76V94H29Z')
          }
          24% {
            d:path('M29,68.264H76V94H29Z')
          }
          25% {
            d:path('M29,68.849H76V94H29Z')
          }
          26% {
            d:path('M29,69.434H76V94H29Z')
          }
          27% {
            d:path('M29,70.019H76V94H29Z')
          }
          28% {
            d:path('M29,70.604H76V94H29Z')
          }
          29% {
            d:path('M29,71.189H76V94H29Z')
          }
          30% {
            d:path('M29,71.774H76V94H29Z')
          }
          31% {
            d:path('M29,72.358H76V94H29Z')
          }
          32% {
            d:path('M29,72.943H76V94H29Z')
          }
          33% {
            d:path('M29,73.528H76V94H29Z')
          }
          34% {
            d:path('M29,74.113H76V94H29Z')
          }
          35% {
            d:path('M29,74.698H76V94H29Z')
          }
          36% {
            d:path('M29,75.283H76V94H29Z')
          }
          37% {
            d:path('M29,75.868H76V94H29Z')
          }
          38% {
            d:path('M29,76.453H76V94H29Z')
          }
          39% {
            d:path('M29,77.038H76V94H29Z')
          }
          40% {
            d:path('M29,77.623H76V94H29Z')
          }
          41% {
            d:path('M29,78.208H76V94H29Z')
          }
          42% {
            d:path('M29,78.792H76V94H29Z')
          }
          43% {
            d:path('M29,79.377H76V94H29Z')
          }
          44% {
            d:path('M29,79.962H76V94H29Z')
          }
          45% {
            d:path('M29,80.547H76V94H29Z')
          }
          46% {
            d:path('M29,81.132H76V94H29Z')
          }
          47% {
            d:path('M29,81.717H76V94H29Z')
          }
          48% {
            d:path('M29,82.302H76V94H29Z')
          }
          49% {
            d:path('M29,82.887H76V94H29Z')
          }
          50% {
            d:path('M29,83.472H76V94H29Z')
          }
          51% {
            d:path('M29,84.057H76V94H29Z')
          }
          52% {
            d:path('M29,84.642H76V94H29Z')
          }
          53% {
            d:path('M29,85.226H76V94H29Z')
          }
          54% {
            d:path('M29,85.811H76V94H29Z')
          }
          55% {
            d:path('M29,86.396H76V94H29Z')
          }
          56% {
            d:path('M29,86.981H76V94H29Z')
          }
          57% {
            d:path('M29,87.566H76V94H29Z')
          }
          58% {
            d:path('M29,88.151H76V94H29Z')
          }
          59% {
            d:path('M29,88.736H76V94H29Z')
          }
          60% {
            d:path('M29,89.321H76V94H29Z')
          }
          61% {
            d:path('M29,89.906H76V94H29Z')
          }
          62% {
            d:path('M29,90.491H76V94H29Z')
          }
          63% {
            d:path('M29,91.075H76V94H29Z')
          }
          64% {
            d:path('M29,91.66H76V94H29Z')
          }
          65% {
            d:path('M29,92.245H76V94H29Z')
          }
          66% {
            d:path('M29,92.83H76V94H29Z')
          }
          67% {
            d:path('M29,93.415H76V94H29Z')
          }
          68% {
            d:path('M29,94H76V94H29Z')
          }
          69% {
            d:path('M29,94H76V94H29Z')
          }
          70% {
            d:path('M29,94H76V94H29Z')
          }
          71% {
            d:path('M29,94H76V94H29Z')
          }
          72% {
            d:path('M29,94H76V94H29Z')
          }
          73% {
            d:path('M29,94H76V94H29Z')
          }
          74% {
            d:path('M29,94H76V94H29Z')
          }
          75% {
            d:path('M29,94H76V94H29Z')
          }
          76% {
            d:path('M29,94H76V94H29Z')
          }
          77% {
            d:path('M29,94H76V94H29Z')
          }
          78% {
            d:path('M29,94H76V94H29Z')
          }
          79% {
            d:path('M29,94H76V94H29Z')
          }
          80% {
            d:path('M29,94H76V94H29Z')
          }
          81% {
            d:path('M29,94H76V94H29Z')
          }
          82% {
            d:path('M29,94H76V94H29Z')
          }
          83% {
            d:path('M29,94H76V94H29Z')
          }
          84% {
            d:path('M29,94H76V94H29Z')
          }
          85% {
            d:path('M29,94H76V94H29Z')
          }
          86% {
            d:path('M29,94H76V94H29Z')
          }
          87% {
            d:path('M29,94H76V94H29Z')
          }
          88% {
            d:path('M29,94H76V94H29Z')
          }
          89% {
            d:path('M29,94H76V94H29Z')
          }
          90% {
            d:path('M29,94H76V94H29Z')
          }
          91% {
            d:path('M29,94H76V94H29Z')
          }
          92% {
            d:path('M29,94H76V94H29Z')
          }
          93% {
            d:path('M29,94H76V94H29Z')
          }
          94% {
            d:path('M29,94H76V94H29Z')
          }
          95% {
            d:path('M29,94H76V94H29Z')
          }
          96% {
            d:path('M29,94H76V94H29Z')
          }
          97% {
            d:path('M29,94H76V94H29Z')
          }
          98% {
            d:path('M29,94H76V94H29Z')
          }
          99% {
            d:path('M29,94H76V94H29Z')
          }
          100% {
            d:path('M29,94H76V94H29Z')
          }
        }
        @keyframes vacuum {
          to {
            stroke-dashoffset:-10
          }
        }
        @keyframes heat {
          0%,13%,90%,100% {
            opacity:0
          }
          18%,85% {
            opacity:.8
          }
        }
        @keyframes cycle {
          0%,3%,98%,100% {
            opacity:0
          }
          6%,96% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Freeze Drying">
        <defs>
          <pattern id="ice" width="10" height="10" patternUnits="userSpaceOnUse">
            <rect width="10" height="10" fill="#31555e"/>
            <path d="M1,3L4,1L8,5L4,8Z" fill="none" stroke="#8ec8dc" stroke-width=".7"/>
          </pattern>
        </defs>
        <path class="ink muted" d="M92,35V20H14V116H92V45H106M92,35H106M106,35V25H133V111H106V45"/>
        <path class="vacuum" d="M123,25V12H139M134,9L139,12L134,15"/>
        <path class="plate" d="M124,39V97M119,31H129M124,26V36M120,27L128,35M120,35L128,27"/>
        <g class="cycle">
          <path class="ice" d="M29,94H76V94H29Z"/>
          <path class="scaffold" d="M30,93H76M32,93V66M53,93V66H74V93M32,84H37M53,76H47"/>
          <path class="tray" d="M27,63V96H78V63"/>
          <circle class="vapor v0" r="1.2"/>
          <path class="frost f0" d="M124,46H120M121,44V48"/>
          <circle class="vapor v1" r="1.2"/>
          <path class="frost f1" d="M124,53H120M121,51V55"/>
          <circle class="vapor v2" r="1.2"/>
          <path class="frost f2" d="M124,60H120M121,58V62"/>
          <circle class="vapor v3" r="1.2"/>
          <path class="frost f3" d="M124,67H120M121,65V69"/>
          <circle class="vapor v4" r="1.2"/>
          <path class="frost f4" d="M124,78H120M121,76V80"/>
          <circle class="vapor v5" r="1.2"/>
          <path class="frost f5" d="M124,85H120M121,83V87"/>
          <circle class="vapor v6" r="1.2"/>
          <path class="frost f6" d="M124,92H120M121,90V94"/>
        </g>
        <path class="shelf" d="M23,99H82"/>
        <path class="heat" d="M32,112C28,109 36,106 32,102M29,105L32,102L35,105M55,112C51,109 59,106 55,102M52,105L55,102L58,105M75,112C71,109 79,106 75,102M72,105L75,102L78,105"/>
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

if (!customElements.get("concept-freeze-drying")) {
  customElements.define("concept-freeze-drying", ConceptFreezeDrying);
}
