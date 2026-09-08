// Aperture Problem. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptApertureProblem extends HTMLElement {
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
        .bar {
          fill:none;
          stroke:currentColor;
          stroke-width:7;
          stroke-linecap:round
        }
        .window {
          animation:window 10s linear infinite
        }
        @keyframes window {
          0%,45%,95%,100% {
            r:14
          }
          55%,85% {
            r:31
          }
        }
        .horizontal {
          transform:translateX(6px);
          animation:horizontal 2.5s linear infinite
        }
        .vertical {
          transform:translateY(-6px);
          animation:vertical 2.5s linear infinite
        }
        .cue {
          display:none
        }
        @media(prefers-reduced-motion:reduce) {
          .cue {
            display:block
          }
        }
        @keyframes horizontal {
          0.0000% {
            transform:translateX(0.0000px)
          }
          2.0833% {
            transform:translateX(0.7832px)
          }
          4.1667% {
            transform:translateX(1.5529px)
          }
          6.2500% {
            transform:translateX(2.2961px)
          }
          8.3333% {
            transform:translateX(3.0000px)
          }
          10.4167% {
            transform:translateX(3.6526px)
          }
          12.5000% {
            transform:translateX(4.2426px)
          }
          14.5833% {
            transform:translateX(4.7601px)
          }
          16.6667% {
            transform:translateX(5.1962px)
          }
          18.7500% {
            transform:translateX(5.5433px)
          }
          20.8333% {
            transform:translateX(5.7956px)
          }
          22.9167% {
            transform:translateX(5.9487px)
          }
          25.0000% {
            transform:translateX(6.0000px)
          }
          27.0833% {
            transform:translateX(5.9487px)
          }
          29.1667% {
            transform:translateX(5.7956px)
          }
          31.2500% {
            transform:translateX(5.5433px)
          }
          33.3333% {
            transform:translateX(5.1962px)
          }
          35.4167% {
            transform:translateX(4.7601px)
          }
          37.5000% {
            transform:translateX(4.2426px)
          }
          39.5833% {
            transform:translateX(3.6526px)
          }
          41.6667% {
            transform:translateX(3.0000px)
          }
          43.7500% {
            transform:translateX(2.2961px)
          }
          45.8333% {
            transform:translateX(1.5529px)
          }
          47.9167% {
            transform:translateX(0.7832px)
          }
          50.0000% {
            transform:translateX(0.0000px)
          }
          52.0833% {
            transform:translateX(-0.7832px)
          }
          54.1667% {
            transform:translateX(-1.5529px)
          }
          56.2500% {
            transform:translateX(-2.2961px)
          }
          58.3333% {
            transform:translateX(-3.0000px)
          }
          60.4167% {
            transform:translateX(-3.6526px)
          }
          62.5000% {
            transform:translateX(-4.2426px)
          }
          64.5833% {
            transform:translateX(-4.7601px)
          }
          66.6667% {
            transform:translateX(-5.1962px)
          }
          68.7500% {
            transform:translateX(-5.5433px)
          }
          70.8333% {
            transform:translateX(-5.7956px)
          }
          72.9167% {
            transform:translateX(-5.9487px)
          }
          75.0000% {
            transform:translateX(-6.0000px)
          }
          77.0833% {
            transform:translateX(-5.9487px)
          }
          79.1667% {
            transform:translateX(-5.7956px)
          }
          81.2500% {
            transform:translateX(-5.5433px)
          }
          83.3333% {
            transform:translateX(-5.1962px)
          }
          85.4167% {
            transform:translateX(-4.7601px)
          }
          87.5000% {
            transform:translateX(-4.2426px)
          }
          89.5833% {
            transform:translateX(-3.6526px)
          }
          91.6667% {
            transform:translateX(-3.0000px)
          }
          93.7500% {
            transform:translateX(-2.2961px)
          }
          95.8333% {
            transform:translateX(-1.5529px)
          }
          97.9167% {
            transform:translateX(-0.7832px)
          }
          100.0000% {
            transform:translateX(-0.0000px)
          }
        }
        @keyframes vertical {
          0.0000% {
            transform:translateY(0.0000px)
          }
          2.0833% {
            transform:translateY(-0.7832px)
          }
          4.1667% {
            transform:translateY(-1.5529px)
          }
          6.2500% {
            transform:translateY(-2.2961px)
          }
          8.3333% {
            transform:translateY(-3.0000px)
          }
          10.4167% {
            transform:translateY(-3.6526px)
          }
          12.5000% {
            transform:translateY(-4.2426px)
          }
          14.5833% {
            transform:translateY(-4.7601px)
          }
          16.6667% {
            transform:translateY(-5.1962px)
          }
          18.7500% {
            transform:translateY(-5.5433px)
          }
          20.8333% {
            transform:translateY(-5.7956px)
          }
          22.9167% {
            transform:translateY(-5.9487px)
          }
          25.0000% {
            transform:translateY(-6.0000px)
          }
          27.0833% {
            transform:translateY(-5.9487px)
          }
          29.1667% {
            transform:translateY(-5.7956px)
          }
          31.2500% {
            transform:translateY(-5.5433px)
          }
          33.3333% {
            transform:translateY(-5.1962px)
          }
          35.4167% {
            transform:translateY(-4.7601px)
          }
          37.5000% {
            transform:translateY(-4.2426px)
          }
          39.5833% {
            transform:translateY(-3.6526px)
          }
          41.6667% {
            transform:translateY(-3.0000px)
          }
          43.7500% {
            transform:translateY(-2.2961px)
          }
          45.8333% {
            transform:translateY(-1.5529px)
          }
          47.9167% {
            transform:translateY(-0.7832px)
          }
          50.0000% {
            transform:translateY(-0.0000px)
          }
          52.0833% {
            transform:translateY(0.7832px)
          }
          54.1667% {
            transform:translateY(1.5529px)
          }
          56.2500% {
            transform:translateY(2.2961px)
          }
          58.3333% {
            transform:translateY(3.0000px)
          }
          60.4167% {
            transform:translateY(3.6526px)
          }
          62.5000% {
            transform:translateY(4.2426px)
          }
          64.5833% {
            transform:translateY(4.7601px)
          }
          66.6667% {
            transform:translateY(5.1962px)
          }
          68.7500% {
            transform:translateY(5.5433px)
          }
          70.8333% {
            transform:translateY(5.7956px)
          }
          72.9167% {
            transform:translateY(5.9487px)
          }
          75.0000% {
            transform:translateY(6.0000px)
          }
          77.0833% {
            transform:translateY(5.9487px)
          }
          79.1667% {
            transform:translateY(5.7956px)
          }
          81.2500% {
            transform:translateY(5.5433px)
          }
          83.3333% {
            transform:translateY(5.1962px)
          }
          85.4167% {
            transform:translateY(4.7601px)
          }
          87.5000% {
            transform:translateY(4.2426px)
          }
          89.5833% {
            transform:translateY(3.6526px)
          }
          91.6667% {
            transform:translateY(3.0000px)
          }
          93.7500% {
            transform:translateY(2.2961px)
          }
          95.8333% {
            transform:translateY(1.5529px)
          }
          97.9167% {
            transform:translateY(0.7832px)
          }
          100.0000% {
            transform:translateY(0.0000px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Aperture Problem">
        <defs>
          <clipPath id="a">
            <circle class="window" cx="38" cy="67" r="31"/>
          </clipPath>
          <clipPath id="b">
            <circle class="window" cx="102" cy="67" r="31"/>
          </clipPath>
        </defs>
        <g clip-path="url(#a)">
          <path class="bar horizontal" d="M22.444 51.444 53.556 82.556"/>
        </g>
        <g clip-path="url(#b)">
          <path class="bar vertical" d="M86.444 51.444 117.556 82.556"/>
        </g>
        <circle class="ink muted window" cx="38" cy="67" r="31"/>
        <circle class="ink muted window" cx="102" cy="67" r="31"/>
        <g class="ink muted cue" stroke-dasharray="2 3">
          <circle cx="38" cy="67" r="14"/>
          <circle cx="102" cy="67" r="14"/>
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

if (!customElements.get("concept-aperture-problem")) {
  customElements.define("concept-aperture-problem", ConceptApertureProblem);
}
