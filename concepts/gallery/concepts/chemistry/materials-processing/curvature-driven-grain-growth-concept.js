// Curvature-Driven Grain Growth. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptCurvatureDrivenGrainGrowth extends HTMLElement {
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
        .radius {
          animation:radius 14s linear infinite
        }
        .cycle {
          animation:cycle 14s linear infinite
        }
        .boundary {
          animation:radius 14s linear infinite,fade 14s linear infinite
        }
        @keyframes radius {
          0%,15% {
            r:34px
          }
          16% {
            r:33.7563px
          }
          17% {
            r:33.5108px
          }
          18% {
            r:33.2635px
          }
          19% {
            r:33.0143px
          }
          20% {
            r:32.7632px
          }
          21% {
            r:32.5102px
          }
          22% {
            r:32.2552px
          }
          23% {
            r:31.9982px
          }
          24% {
            r:31.7391px
          }
          25% {
            r:31.4779px
          }
          26% {
            r:31.2145px
          }
          27% {
            r:30.9488px
          }
          28% {
            r:30.6808px
          }
          29% {
            r:30.4105px
          }
          30% {
            r:30.1378px
          }
          31% {
            r:29.8625px
          }
          32% {
            r:29.5847px
          }
          33% {
            r:29.3043px
          }
          34% {
            r:29.0212px
          }
          35% {
            r:28.7352px
          }
          36% {
            r:28.4464px
          }
          37% {
            r:28.1547px
          }
          38% {
            r:27.8599px
          }
          39% {
            r:27.5619px
          }
          40% {
            r:27.2606px
          }
          41% {
            r:26.9560px
          }
          42% {
            r:26.6480px
          }
          43% {
            r:26.3363px
          }
          44% {
            r:26.0209px
          }
          45% {
            r:25.7016px
          }
          46% {
            r:25.3783px
          }
          47% {
            r:25.0508px
          }
          48% {
            r:24.7190px
          }
          49% {
            r:24.3827px
          }
          50% {
            r:24.0416px
          }
          51% {
            r:23.6957px
          }
          52% {
            r:23.3446px
          }
          53% {
            r:22.9882px
          }
          54% {
            r:22.6262px
          }
          55% {
            r:22.2582px
          }
          56% {
            r:21.8841px
          }
          57% {
            r:21.5035px
          }
          58% {
            r:21.1160px
          }
          59% {
            r:20.7213px
          }
          60% {
            r:20.3189px
          }
          61% {
            r:19.9084px
          }
          62% {
            r:19.4892px
          }
          63% {
            r:19.0608px
          }
          64% {
            r:18.6226px
          }
          65% {
            r:18.1738px
          }
          66% {
            r:17.7136px
          }
          67% {
            r:17.2411px
          }
          68% {
            r:16.7554px
          }
          69% {
            r:16.2551px
          }
          70% {
            r:15.7389px
          }
          71% {
            r:15.2053px
          }
          72% {
            r:14.6522px
          }
          73% {
            r:14.0773px
          }
          74% {
            r:13.4780px
          }
          75% {
            r:12.8508px
          }
          76% {
            r:12.1913px
          }
          77% {
            r:11.4941px
          }
          78% {
            r:10.7517px
          }
          79% {
            r:9.9542px
          }
          80% {
            r:9.0869px
          }
          81% {
            r:8.1276px
          }
          82% {
            r:7.0387px
          }
          83% {
            r:5.7470px
          }
          84% {
            r:4.0638px
          }
          85% {
            r:0.0000px
          }
          100% {
            r:0px
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
        @keyframes fade {
          0%,84% {
            opacity:1
          }
          85%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Curvature-Driven Grain Growth">
        <defs>
          <pattern id="outer" width="13" height="13" patternUnits="userSpaceOnUse" patternTransform="rotate(16 70 70)">
            <path d="M0,0H13M0,0V13" stroke="#375b51" stroke-width=".7"/>
            <circle cx="0" cy="0" r="1.7" fill="#77c9ef"/>
          </pattern>
          <pattern id="inner" width="13" height="13" patternUnits="userSpaceOnUse" patternTransform="rotate(53 70 70)">
            <path d="M0,0H13M0,0V13" stroke="#685c39" stroke-width=".7"/>
            <circle cx="0" cy="0" r="1.7" fill="#f3c977"/>
          </pattern>
          <clipPath id="grain">
            <circle class="radius" cx="70" cy="70" r="20"/>
          </clipPath>
          <clipPath id="sample">
            <rect x="15" y="22" width="110" height="96" rx="5"/>
          </clipPath>
        </defs>
        <g class="cycle" clip-path="url(#sample)">
          <rect x="15" y="22" width="110" height="96" fill="url(#outer)"/>
          <g clip-path="url(#grain)">
            <rect class="paper" x="15" y="22" width="110" height="96"/>
            <rect x="15" y="22" width="110" height="96" fill="url(#inner)"/>
          </g>
          <circle class="ink radius boundary" cx="70" cy="70" r="20" stroke="#f3c977"/>
        </g>
        <rect class="ink muted" x="15" y="22" width="110" height="96" rx="5"/>
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

if (!customElements.get("concept-curvature-driven-grain-growth")) {
  customElements.define("concept-curvature-driven-grain-growth", ConceptCurvatureDrivenGrainGrowth);
}
