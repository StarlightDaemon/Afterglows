// Crossed Extensor Reflex. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptCrossedExtensorReflex extends HTMLElement {
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
        .bone {
          fill:none;
          stroke:#b8c4a2;
          stroke-width:6;
          stroke-linecap:round;
          stroke-linejoin:round
        }
        .pelvis {
          fill:none;
          stroke:#809785;
          stroke-width:7
        }
        .left {
          animation:left 10s infinite
        }
        .flexor {
          fill:none;
          stroke:#d89bad;
          stroke-width:6;
          animation:flexor 10s infinite
        }
        .extensor {
          fill:none;
          stroke:#d89bad;
          stroke-width:6;
          animation:activate 10s infinite
        }
        .dim-antagonist {
          animation:antagonist 10s infinite;
          fill:none;
          stroke:#72526b;
          stroke-width:4
        }
        .cord {
          fill:#34494b;
          stroke:#83a4a7;
          stroke-width:1.5
        }
        .circuit {
          fill:none;
          stroke:#e0bd76;
          stroke-width:2;
          animation:activate 10s infinite
        }
        .afferent,.outputs {
          fill:none;
          stroke:#77a793;
          stroke-width:1.2
        }
        .outputs {
          animation:activate 10s infinite
        }
        .stimulus {
          fill:none;
          stroke:#e5a574;
          stroke-width:2;
          animation:stimulus 10s infinite
        }
        .sense {
          fill:#e0bd76;
          opacity:0;
          animation:sense 10s linear infinite
        }
        @keyframes left {
          0%,42%,100% {
            d:path("M54 56L48.791,85.544L47.063,118.499l9 2")
          }
          42% {
            d:path("M54 56L48.791,85.544L47.063,118.499l9 2")
          }
          43.1% {
            d:path("M54 56L48.679,85.524L47.176,118.49l9 2")
          }
          44.2% {
            d:path("M54 56L48.349,85.463L47.51,118.452l9 2")
          }
          45.3% {
            d:path("M54 56L47.81,85.354L48.06,118.354l9 2")
          }
          46.4% {
            d:path("M54 56L47.077,85.19L48.813,118.145l9 2")
          }
          47.5% {
            d:path("M54 56L46.172,84.961L49.751,117.766l9 2")
          }
          48.6% {
            d:path("M54 56L45.122,84.656L50.844,117.156l9 2")
          }
          49.7% {
            d:path("M54 56L43.959,84.27L52.053,116.261l9 2")
          }
          50.8% {
            d:path("M54 56L42.717,83.797L53.333,115.043l9 2")
          }
          51.9% {
            d:path("M54 56L41.434,83.242L54.631,113.488l9 2")
          }
          53% {
            d:path("M54 56L40.148,82.61L55.894,111.611l9 2")
          }
          54.1% {
            d:path("M54 56L38.892,81.918L57.072,109.46l9 2")
          }
          55.2% {
            d:path("M54 56L37.701,81.186L58.124,107.108l9 2")
          }
          56.3% {
            d:path("M54 56L36.602,80.44L59.024,104.653l9 2")
          }
          57.4% {
            d:path("M54 56L35.618,79.709L59.759,102.209l9 2")
          }
          58.5% {
            d:path("M54 56L34.767,79.024L60.33,99.892l9 2")
          }
          59.6% {
            d:path("M54 56L34.06,78.414L60.752,97.818l9 2")
          }
          60.7% {
            d:path("M54 56L33.505,77.908L61.044,96.089l9 2")
          }
          61.8% {
            d:path("M54 56L33.106,77.528L61.231,94.791l9 2")
          }
          62.9% {
            d:path("M54 56L32.867,77.293L61.333,93.986l9 2")
          }
          64% {
            d:path("M54 56L32.787,77.213L61.366,93.713l9 2")
          }
          76% {
            d:path("M54 56L32.787,77.213L61.366,93.713l9 2")
          }
        }
        @keyframes flexor {
          0%,42%,100% {
            d:path("M49 60Q38.791 70.772 45.791 82.544");
            stroke:#74576b
          }
          42% {
            d:path("M49 60Q38.791 70.772 45.791 82.544")
          }
          43.1% {
            d:path("M49 60Q38.679 70.762 45.679 82.524")
          }
          44.2% {
            d:path("M49 60Q38.349 70.732 45.349 82.463")
          }
          45.3% {
            d:path("M49 60Q37.81 70.677 44.81 82.354")
          }
          46.4% {
            d:path("M49 60Q37.077 70.595 44.077 82.19")
          }
          47.5% {
            d:path("M49 60Q36.172 70.48 43.172 81.961")
          }
          48.6% {
            d:path("M49 60Q35.122 70.328 42.122 81.656")
          }
          49.7% {
            d:path("M49 60Q33.959 70.135 40.959 81.27")
          }
          50.8% {
            d:path("M49 60Q32.717 69.899 39.717 80.797")
          }
          51.9% {
            d:path("M49 60Q31.434 69.621 38.434 80.242")
          }
          53% {
            d:path("M49 60Q30.148 69.305 37.148 79.61")
          }
          54.1% {
            d:path("M49 60Q28.892 68.959 35.892 78.918")
          }
          55.2% {
            d:path("M49 60Q27.701 68.593 34.701 78.186")
          }
          56.3% {
            d:path("M49 60Q26.602 68.22 33.602 77.44")
          }
          57.4% {
            d:path("M49 60Q25.618 67.855 32.618 76.709")
          }
          58.5% {
            d:path("M49 60Q24.767 67.512 31.767 76.024")
          }
          59.6% {
            d:path("M49 60Q24.06 67.207 31.06 75.414")
          }
          60.7% {
            d:path("M49 60Q23.505 66.954 30.505 74.908")
          }
          61.8% {
            d:path("M49 60Q23.106 66.764 30.106 74.528")
          }
          62.9% {
            d:path("M49 60Q22.867 66.646 29.867 74.293")
          }
          64% {
            d:path("M49 60Q22.787 66.607 29.787 74.213")
          }
          64%,76% {
            d:path("M49 60Q22.787 66.607 29.787 74.213");
            stroke:#d89bad
          }
        }
        @keyframes activate {
          0%,33%,100% {
            opacity:.3
          }
          42%,76% {
            opacity:1
          }
        }
        @keyframes stimulus {
          0%,10%,40%,100% {
            opacity:0
          }
          15%,25% {
            opacity:1
          }
        }
        @keyframes sense {
          0%,18% {
            opacity:0;
            transform:translate(0,0)
          }
          19% {
            opacity:1;
            transform:translate(0,0)
          }
          24% {
            transform:translate(-18px,-25px)
          }
          30% {
            transform:translate(-18px,-69px)
          }
          36% {
            opacity:1;
            transform:translate(13px,-93px)
          }
          37%,100% {
            opacity:0
          }
        }
        @keyframes antagonist {
          0%,42%,100% {
            d:path("M60 60Q61.791 70.772 54.791 82.544M78 59Q70 73 78 86")
          }
          42% {
            d:path("M60 60Q61.791 70.772 54.791 82.544M78 59Q70 73 78 86")
          }
          43.1% {
            d:path("M60 60Q61.679 70.762 54.679 82.524M78 59Q70 73 78 86")
          }
          44.2% {
            d:path("M60 60Q61.349 70.732 54.349 82.463M78 59Q70 73 78 86")
          }
          45.3% {
            d:path("M60 60Q60.81 70.677 53.81 82.354M78 59Q70 73 78 86")
          }
          46.4% {
            d:path("M60 60Q60.077 70.595 53.077 82.19M78 59Q70 73 78 86")
          }
          47.5% {
            d:path("M60 60Q59.172 70.48 52.172 81.961M78 59Q70 73 78 86")
          }
          48.6% {
            d:path("M60 60Q58.122 70.328 51.122 81.656M78 59Q70 73 78 86")
          }
          49.7% {
            d:path("M60 60Q56.959 70.135 49.959 81.27M78 59Q70 73 78 86")
          }
          50.8% {
            d:path("M60 60Q55.717 69.899 48.717 80.797M78 59Q70 73 78 86")
          }
          51.9% {
            d:path("M60 60Q54.434 69.621 47.434 80.242M78 59Q70 73 78 86")
          }
          53% {
            d:path("M60 60Q53.148 69.305 46.148 79.61M78 59Q70 73 78 86")
          }
          54.1% {
            d:path("M60 60Q51.892 68.959 44.892 78.918M78 59Q70 73 78 86")
          }
          55.2% {
            d:path("M60 60Q50.701 68.593 43.701 78.186M78 59Q70 73 78 86")
          }
          56.3% {
            d:path("M60 60Q49.602 68.22 42.602 77.44M78 59Q70 73 78 86")
          }
          57.4% {
            d:path("M60 60Q48.618 67.855 41.618 76.709M78 59Q70 73 78 86")
          }
          58.5% {
            d:path("M60 60Q47.767 67.512 40.767 76.024M78 59Q70 73 78 86")
          }
          59.6% {
            d:path("M60 60Q47.06 67.207 40.06 75.414M78 59Q70 73 78 86")
          }
          60.7% {
            d:path("M60 60Q46.505 66.954 39.505 74.908M78 59Q70 73 78 86")
          }
          61.8% {
            d:path("M60 60Q46.106 66.764 39.106 74.528M78 59Q70 73 78 86")
          }
          62.9% {
            d:path("M60 60Q45.867 66.646 38.867 74.293M78 59Q70 73 78 86")
          }
          64% {
            d:path("M60 60Q45.787 66.607 38.787 74.213M78 59Q70 73 78 86")
          }
          76% {
            d:path("M60 60Q45.787 66.607 38.787 74.213M78 59Q70 73 78 86")
          }
        }
        .tendons {
          fill:none;
          stroke:#baae9e;
          stroke-width:2.5;
          animation:tendons 10s infinite
        }
        @keyframes tendons {
          0%,42%,100% {
            d:path("M45.791 82.544L48.583 89.499M54.791 82.544L48.48 91.476M90 86L84 94M78 86L84 92")
          }
          42% {
            d:path("M45.791 82.544L48.583 89.499M54.791 82.544L48.48 91.476M90 86L84 94M78 86L84 92")
          }
          43.1% {
            d:path("M45.679 82.524L48.499 89.48M54.679 82.524L48.409 91.458M90 86L84 94M78 86L84 92")
          }
          44.2% {
            d:path("M45.349 82.463L48.249 89.422M54.349 82.463L48.198 91.401M90 86L84 94M78 86L84 92")
          }
          45.3% {
            d:path("M44.81 82.354L47.84 89.314M53.81 82.354L47.855 91.294M90 86L84 94M78 86L84 92")
          }
          46.4% {
            d:path("M44.077 82.19L47.285 89.145M53.077 82.19L47.39 91.122M90 86L84 94M78 86L84 92")
          }
          47.5% {
            d:path("M43.172 81.961L46.601 88.897M52.172 81.961L46.816 90.866M90 86L84 94M78 86L84 92")
          }
          48.6% {
            d:path("M42.122 81.656L45.808 88.556M51.122 81.656L46.152 90.506M90 86L84 94M78 86L84 92")
          }
          49.7% {
            d:path("M40.959 81.27L44.93 88.109M49.959 81.27L45.416 90.028M90 86L84 94M78 86L84 92")
          }
          50.8% {
            d:path("M39.717 80.797L43.991 87.547M48.717 80.797L44.628 89.422M90 86L84 94M78 86L84 92")
          }
          51.9% {
            d:path("M38.434 80.242L43.018 86.871M47.434 80.242L43.81 88.686M90 86L84 94M78 86L84 92")
          }
          53% {
            d:path("M37.148 79.61L42.037 86.09M46.148 79.61L42.982 87.83M90 86L84 94M78 86L84 92")
          }
          54.1% {
            d:path("M35.892 78.918L41.074 85.223M44.892 78.918L42.165 86.876M90 86L84 94M78 86L84 92")
          }
          55.2% {
            d:path("M34.701 78.186L40.152 84.297M43.701 78.186L41.377 85.852M90 86L84 94M78 86L84 92")
          }
          56.3% {
            d:path("M33.602 77.44L39.293 83.346M42.602 77.44L40.638 84.799M90 86L84 94M78 86L84 92")
          }
          57.4% {
            d:path("M32.618 76.709L38.515 82.409M41.618 76.709L39.964 83.759M90 86L84 94M78 86L84 92")
          }
          58.5% {
            d:path("M31.767 76.024L37.834 81.528M40.767 76.024L39.368 82.78M90 86L84 94M78 86L84 92")
          }
          59.6% {
            d:path("M31.06 75.414L37.263 80.742M40.06 75.414L38.864 81.907M90 86L84 94M78 86L84 92")
          }
          60.7% {
            d:path("M30.505 74.908L36.809 80.089M39.505 74.908L38.462 81.18M90 86L84 94M78 86L84 92")
          }
          61.8% {
            d:path("M30.106 74.528L36.481 79.599M39.106 74.528L38.169 80.635M90 86L84 94M78 86L84 92")
          }
          62.9% {
            d:path("M29.867 74.293L36.283 79.296M38.867 74.293L37.991 80.298M90 86L84 94M78 86L84 92")
          }
          64% {
            d:path("M29.787 74.213L36.216 79.193M38.787 74.213L37.931 80.183M90 86L84 94M78 86L84 92")
          }
          76% {
            d:path("M29.787 74.213L36.216 79.193M38.787 74.213L37.931 80.183M90 86L84 94M78 86L84 92")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Crossed Extensor Reflex">
        <path class="ink muted" d="M18 126H124"/>
        <path class="pelvis" d="M51 54Q70 43 87 54"/>
        <path class="bone left" d="M54 56L48.791,85.544L47.063,118.499l9 2"/>
        <path class="bone" d="M84 56L84 87L84 121L95 123"/>
        <path class="flexor" d="M49 60Q38.791 70.772 45.791 82.544"/>
        <path class="extensor" d="M90 59Q100 73 90 86"/>
        <path class="dim-antagonist" d="M60 60Q61.791 70.772 54.791 82.544M78 59Q70 73 78 86"/>
        <path class="tendons" d="M45.791 82.544L48.583 89.499M54.791 82.544L48.48 91.476M90 86L84 94M78 86L84 92"/>
        <path class="cord" d="M57 14Q70 7 83 14V37Q70 44 57 37Z"/>
        <path class="circuit" d="M60 30L67 23L78 30M61 22L78 34"/>
        <path class="afferent" d="M45 117L27 92V48Q27 27 58 24"/>
        <path class="outputs" d="M60 33L40 47L44 62M78 33L103 47L91 67"/>
        <path class="stimulus" d="M40 121L45 111L50 121M45 123V127"/>
        <circle class="sense" cx="45" cy="117" r="2.5"/>
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

if (!customElements.get("concept-crossed-extensor-reflex")) {
  customElements.define("concept-crossed-extensor-reflex", ConceptCrossedExtensorReflex);
}
