// Glomerular Filtration. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptGlomerularFiltration extends HTMLElement {
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
        .capsule {
          fill:#18382c;
          stroke:#94bdac;
          stroke-width:2
        }
        .tubule {
          fill:none;
          stroke:#94bdac;
          stroke-width:2
        }
        .blood-wall {
          fill:none;
          stroke:#a2717e;
          stroke-width:11;
          stroke-linecap:round
        }
        .blood-lumen {
          fill:none;
          stroke:#5b3447;
          stroke-width:8;
          stroke-linecap:round
        }
        .cell {
          fill:#cf7c85;
          animation:cell 9s linear infinite
        }
        .dimple {
          fill:#71354e
        }
        .protein {
          fill:#b39cda;
          animation:protein 9s linear infinite
        }
        .solute {
          fill:#cbe2a5
        }
        .s0 {
          animation:s0 9s linear infinite
        }
        .s1 {
          animation:s1 9s linear infinite
        }
        .s2 {
          animation:s2 9s linear infinite
        }
        @keyframes cell {
          0% {
            transform:translate(18px,29px);
            opacity:0
          }
          2% {
            transform:translate(25.711px,30.243px);
            opacity:0
          }
          4% {
            transform:translate(32.109px,32.261px);
            opacity:1
          }
          6% {
            transform:translate(37.294px,35.002px);
            opacity:1
          }
          8% {
            transform:translate(41.364px,38.419px);
            opacity:1
          }
          10% {
            transform:translate(44.418px,42.461px);
            opacity:1
          }
          12% {
            transform:translate(46.555px,47.079px);
            opacity:1
          }
          14% {
            transform:translate(47.873px,52.225px);
            opacity:1
          }
          16% {
            transform:translate(47.87px,59.494px);
            opacity:1
          }
          18% {
            transform:translate(46.118px,66.944px);
            opacity:1
          }
          20% {
            transform:translate(43.552px,73.992px);
            opacity:1
          }
          22% {
            transform:translate(41.127px,80.358px);
            opacity:1
          }
          24% {
            transform:translate(39.799px,85.762px);
            opacity:1
          }
          26% {
            transform:translate(40.521px,89.924px);
            opacity:1
          }
          28% {
            transform:translate(44.249px,92.564px);
            opacity:1
          }
          30% {
            transform:translate(50.589px,92.79px);
            opacity:1
          }
          32% {
            transform:translate(54.764px,88.484px);
            opacity:1
          }
          34% {
            transform:translate(57.195px,80.838px);
            opacity:1
          }
          36% {
            transform:translate(58.851px,71.335px);
            opacity:1
          }
          38% {
            transform:translate(60.705px,61.455px);
            opacity:1
          }
          40% {
            transform:translate(63.728px,52.68px);
            opacity:1
          }
          42% {
            transform:translate(68.891px,46.493px);
            opacity:1
          }
          44% {
            transform:translate(76.4704px,44.299px);
            opacity:1
          }
          46% {
            transform:translate(83.693px,45.226px);
            opacity:1
          }
          48% {
            transform:translate(89.7984px,48.371px);
            opacity:1
          }
          50% {
            transform:translate(94.375px,53.125px);
            opacity:1
          }
          52% {
            transform:translate(97.0112px,58.878px);
            opacity:1
          }
          54% {
            transform:translate(97.2954px,65.022px);
            opacity:1
          }
          56% {
            transform:translate(94.816px,70.947px);
            opacity:1
          }
          58% {
            transform:translate(88.922px,76.42px);
            opacity:1
          }
          60% {
            transform:translate(83.016px,78.872px);
            opacity:1
          }
          62% {
            transform:translate(78.921px,77.773px);
            opacity:1
          }
          64% {
            transform:translate(76.669px,74.258px);
            opacity:1
          }
          66% {
            transform:translate(76.295px,69.464px);
            opacity:1
          }
          68% {
            transform:translate(77.83px,64.526px);
            opacity:1
          }
          70% {
            transform:translate(81.308px,60.581px);
            opacity:1
          }
          72% {
            transform:translate(85.713px,58.22px);
            opacity:1
          }
          74% {
            transform:translate(86.371px,54.706px);
            opacity:1
          }
          76% {
            transform:translate(84.638px,50.426px);
            opacity:1
          }
          78% {
            transform:translate(81.122px,45.972px);
            opacity:1
          }
          80% {
            transform:translate(76.432px,41.936px);
            opacity:1
          }
          82% {
            transform:translate(71.178px,38.912px);
            opacity:1
          }
          84% {
            transform:translate(65.968px,37.491px);
            opacity:1
          }
          86% {
            transform:translate(61.06px,38.157px);
            opacity:1
          }
          88% {
            transform:translate(55.474px,38.095px);
            opacity:1
          }
          90% {
            transform:translate(51.191px,36.326px);
            opacity:1
          }
          92% {
            transform:translate(47.602px,33.31px);
            opacity:1
          }
          94% {
            transform:translate(44.097px,29.508px);
            opacity:1
          }
          96% {
            transform:translate(40.068px,25.382px);
            opacity:0
          }
          98% {
            transform:translate(34.906px,21.392px);
            opacity:0
          }
          100% {
            transform:translate(18px,29px);
            opacity:0
          }
        }
        @keyframes protein {
          0% {
            transform:translate(39.844px,88.016px);
            opacity:1
          }
          2% {
            transform:translate(41.95px,91.452px);
            opacity:1
          }
          4% {
            transform:translate(47.543px,93.227px);
            opacity:1
          }
          6% {
            transform:translate(52.956px,91.147px);
            opacity:1
          }
          8% {
            transform:translate(56.137px,84.986px);
            opacity:1
          }
          10% {
            transform:translate(58.059px,76.226px);
            opacity:1
          }
          12% {
            transform:translate(59.693px,66.349px);
            opacity:1
          }
          14% {
            transform:translate(62.01px,56.837px);
            opacity:1
          }
          16% {
            transform:translate(65.981px,49.17px);
            opacity:1
          }
          18% {
            transform:translate(72.569px,44.858px);
            opacity:1
          }
          20% {
            transform:translate(80.196px,44.448px);
            opacity:1
          }
          22% {
            transform:translate(86.911px,46.56px);
            opacity:1
          }
          24% {
            transform:translate(92.304px,50.585px);
            opacity:1
          }
          26% {
            transform:translate(95.961px,55.915px);
            opacity:1
          }
          28% {
            transform:translate(97.473px,61.939px);
            opacity:1
          }
          30% {
            transform:translate(96.427px,68.05px);
            opacity:1
          }
          32% {
            transform:translate(92.411px,73.637px);
            opacity:1
          }
          34% {
            transform:translate(85.745px,78.161px);
            opacity:1
          }
          36% {
            transform:translate(80.74px,78.695px);
            opacity:1
          }
          38% {
            transform:translate(77.562px,76.246px);
            opacity:1
          }
          40% {
            transform:translate(76.245px,71.95px);
            opacity:1
          }
          42% {
            transform:translate(76.822px,66.942px);
            opacity:1
          }
          44% {
            transform:translate(79.324px,62.359px);
            opacity:1
          }
          46% {
            transform:translate(83.786px,59.336px);
            opacity:1
          }
          48% {
            transform:translate(86.379px,56.596px);
            opacity:1
          }
          50% {
            transform:translate(85.766px,52.625px);
            opacity:1
          }
          52% {
            transform:translate(83.065px,48.184px);
            opacity:1
          }
          54% {
            transform:translate(78.886px,43.864px);
            opacity:1
          }
          56% {
            transform:translate(73.837px,40.26px);
            opacity:1
          }
          58% {
            transform:translate(68.529px,37.964px);
            opacity:1
          }
          60% {
            transform:translate(63.57px,37.568px);
            opacity:1
          }
          62% {
            transform:translate(58.066px,38.369px);
            opacity:1
          }
          64% {
            transform:translate(53.208px,37.395px);
            opacity:1
          }
          66% {
            transform:translate(49.348px,34.945px);
            opacity:1
          }
          68% {
            transform:translate(45.877px,31.479px);
            opacity:1
          }
          70% {
            transform:translate(42.186px,27.457px);
            opacity:0
          }
          72% {
            transform:translate(37.667px,23.341px);
            opacity:0
          }
          74% {
            transform:translate(31.709px,19.593px);
            opacity:0
          }
          76% {
            transform:translate(22.026px,29.522px);
            opacity:0
          }
          78% {
            transform:translate(29.068px,31.158px);
            opacity:0
          }
          80% {
            transform:translate(34.847px,33.544px);
            opacity:1
          }
          82% {
            transform:translate(39.462px,36.629px);
            opacity:1
          }
          84% {
            transform:translate(43.012px,40.365px);
            opacity:1
          }
          86% {
            transform:translate(45.595px,44.701px);
            opacity:1
          }
          88% {
            transform:translate(47.31px,49.589px);
            opacity:1
          }
          90% {
            transform:translate(48.142px,55.705px);
            opacity:1
          }
          92% {
            transform:translate(47.155px,63.252px);
            opacity:1
          }
          94% {
            transform:translate(44.877px,70.536px);
            opacity:1
          }
          96% {
            transform:translate(42.262px,77.278px);
            opacity:1
          }
          98% {
            transform:translate(40.266px,83.198px);
            opacity:1
          }
          100% {
            transform:translate(39.844px,88.016px);
            opacity:1
          }
        }
        @keyframes s0 {
          0%,18% {
            transform:translate(-24px,-47px)
          }
          38% {
            transform:translate(-9px,-31px)
          }
          58% {
            transform:translate(-17px,-17px)
          }
          85%,100% {
            transform:translate(0,0)
          }
        }
        @keyframes s1 {
          0%,28% {
            transform:translate(-63px,-20px)
          }
          49% {
            transform:translate(-39px,-7px)
          }
          68%,100% {
            transform:translate(0,0)
          }
        }
        @keyframes s2 {
          0%,38% {
            transform:translate(-7px,-30px)
          }
          61% {
            transform:translate(7px,-13px)
          }
          78%,100% {
            transform:translate(0,0)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Glomerular Filtration">
        <path class="capsule" d="M38 24C66 7 104 24 113 53C124 85 109 97 104 100L124 124L109 130L91 110C70 127 18 101 18 69Q17 54 25 43Z"/>
        <path class="blood-wall" d="M18 29C38 31 46 40 48 53C50 71 30 90 46 93C64 97 53 51 72 45C91 40 106 62 92 74C74 90 71 62 85 59C92 53 72 34 62 38C46 41 47 25 28 18"/>
        <path class="blood-lumen" d="M18 29C38 31 46 40 48 53C50 71 30 90 46 93C64 97 53 51 72 45C91 40 106 62 92 74C74 90 71 62 85 59C92 53 72 34 62 38C46 41 47 25 28 18"/>
        <g class="cell" transform="translate(92,74)">
          <ellipse rx="3.3" ry="2.2"/>
          <ellipse class="dimple" rx="1.4" ry=".9"/>
        </g>
        <path class="protein" transform="translate(46,93)" d="M0-2.8L1-1L2.8 0L1 1L0 2.8L-1 1L-2.8 0L-1-1Z"/>
        <circle class="solute s0" cx="116" cy="121" r="1.8"/>
        <circle class="solute s1" cx="109" cy="113" r="1.8"/>
        <circle class="solute s2" cx="99" cy="104" r="1.8"/>
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

if (!customElements.get("concept-glomerular-filtration")) {
  customElements.define("concept-glomerular-filtration", ConceptGlomerularFiltration);
}
