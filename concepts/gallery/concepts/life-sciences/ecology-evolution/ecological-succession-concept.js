// Ecological Succession. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptEcologicalSuccession extends HTMLElement {
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
        .rock {
          fill:#58615a;
          stroke:#90978a;
          stroke-width:1
        }
        .cracks {
          fill:none;
          stroke:#303a33;
          stroke-width:1
        }
        .sequence {
          animation:reset 16s linear infinite
        }
        .lichen {
          fill:#b5b57c;
          animation:lichen 16s linear infinite
        }
        .soil {
          fill:#6a5435;
          transform-origin:70px 114px;
          animation:soil 16s linear infinite
        }
        .grass {
          fill:none;
          stroke:#9ab679;
          stroke-width:1.5;
          stroke-dasharray:100;
          animation:grass 16s linear infinite
        }
        .early {
          animation:grass 16s linear infinite,shade 16s linear infinite
        }
        .shrub-stem {
          fill:none;
          stroke:#827247;
          stroke-width:2;
          stroke-dasharray:100;
          animation:shrub 16s linear infinite
        }
        .shrub-crown {
          fill:#617e46;
          transform-origin:90px 105px;
          animation:shrub-crown 16s linear infinite
        }
        .tree {
          transform-origin:55px 105px;
          animation:tree 16s linear infinite
        }
        .trunk {
          fill:none;
          stroke:#aa976e;
          stroke-width:4
        }
        .crown {
          fill:#3c6846;
          stroke:#789567;
          stroke-width:.6
        }
        .roots {
          fill:none;
          stroke:#b39d6f;
          stroke-width:1.5;
          stroke-dasharray:100;
          animation:roots 16s linear infinite
        }
        .seed {
          fill:#d0c397;
          stroke:#d0c397;
          stroke-width:.7;
          opacity:0
        }
        .s1 {
          animation:s1 16s linear infinite
        }
        .s2 {
          animation:s2 16s linear infinite
        }
        .s3 {
          animation:s3 16s linear infinite
        }
        @keyframes reset {
          0%,100% {
            opacity:0
          }
          5%,94% {
            opacity:1
          }
        }
        @keyframes lichen {
          0%,8% {
            opacity:0
          }
          24%,50% {
            opacity:1
          }
          65%,100% {
            opacity:.2
          }
        }
        @keyframes soil {
          0%,19% {
            transform:scaleY(0)
          }
          27%,100% {
            transform:scaleY(1)
          }
        }
        @keyframes grass {
          0%,27% {
            stroke-dashoffset:100
          }
          45%,100% {
            stroke-dashoffset:0
          }
        }
        @keyframes shade {
          0%,62% {
            opacity:1
          }
          88%,100% {
            opacity:.15
          }
        }
        @keyframes shrub {
          0%,42% {
            stroke-dashoffset:100
          }
          65%,100% {
            stroke-dashoffset:0
          }
        }
        @keyframes shrub-crown {
          0%,48% {
            opacity:0;
            transform:scale(.2)
          }
          70%,100% {
            opacity:1;
            transform:scale(1)
          }
        }
        @keyframes tree {
          0%,52% {
            opacity:0;
            transform:scale(.12)
          }
          56% {
            opacity:1;
            transform:scale(.12)
          }
          88%,100% {
            opacity:1;
            transform:scale(1)
          }
        }
        @keyframes roots {
          0%,52% {
            stroke-dashoffset:100
          }
          88%,100% {
            stroke-dashoffset:0
          }
        }
        @keyframes s1 {
          0%,15% {
            opacity:0;
            transform:translate(9px,67px)
          }
          18% {
            opacity:1;
            transform:translate(12px,70px)
          }
          27% {
            opacity:1;
            transform:translate(34px,105px)
          }
          30%,100% {
            opacity:0;
            transform:translate(34px,105px)
          }
        }
        @keyframes s2 {
          0%,19% {
            opacity:0;
            transform:translate(83px,66px)
          }
          22% {
            opacity:1;
            transform:translate(86px,70px)
          }
          30% {
            opacity:1;
            transform:translate(105px,105px)
          }
          33%,100% {
            opacity:0;
            transform:translate(105px,105px)
          }
        }
        @keyframes s3 {
          0%,44% {
            opacity:0;
            transform:translate(21px,77px)
          }
          47% {
            opacity:1;
            transform:translate(27px,84px)
          }
          52% {
            opacity:1;
            transform:translate(55px,105px)
          }
          56%,100% {
            opacity:0;
            transform:translate(55px,105px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Ecological Succession">
        <path class="rock" d="M14,108L36,106L58,111L86,106L126,109V128H14Z"/>
        <path class="cracks" d="M26,111L31,119L26,128M77,111L69,119L73,128M109,111L102,124"/>
        <g class="sequence">
          <g class="lichen">
            <ellipse cx="30" cy="108" rx="9" ry="2"/>
            <ellipse cx="77" cy="108" rx="11" ry="2"/>
            <ellipse cx="110" cy="108" rx="8" ry="2"/>
          </g>
          <path class="soil" d="M14,105Q31,102 48,105T84,105T126,105V114H14Z"/>
          <path class="grass early" pathLength="100" d="M34,105Q25,90 26,85M34,105Q34,83 39,78M34,105Q42,93 45,89M58,105Q52,90 49,88M58,105Q61,88 63,84"/>
          <path class="grass edge" pathLength="100" d="M105,105Q98,90 97,85M105,105Q106,87 111,83M105,105Q115,95 119,92"/>
          <path class="shrub-stem" pathLength="100" d="M90,105V78M90,90L78,79M90,86L102,73"/>
          <g class="shrub-crown">
            <ellipse cx="80" cy="77" rx="12" ry="9"/>
            <ellipse cx="98" cy="73" rx="13" ry="11"/>
            <ellipse cx="88" cy="85" rx="15" ry="10"/>
          </g>
          <g class="tree">
            <path class="trunk" d="M55,105Q53,79 58,54M55,83L43,66M57,71L68,56"/>
            <g class="crown">
              <ellipse cx="43" cy="58" rx="17" ry="14"/>
              <ellipse cx="61" cy="42" rx="20" ry="17"/>
              <ellipse cx="75" cy="60" rx="17" ry="14"/>
              <ellipse cx="57" cy="68" rx="24" ry="14"/>
            </g>
          </g>
          <path class="roots" pathLength="100" d="M55,105L48,118M52,110L38,115M55,105L61,119M60,114L73,118"/>
          <g class="seed s1">
            <ellipse rx="2" ry="1"/>
            <path d="M0,0L-5,-6"/>
          </g>
          <g class="seed s2">
            <ellipse rx="2" ry="1"/>
            <path d="M0,0L-5,-6"/>
          </g>
          <g class="seed s3">
            <ellipse rx="2" ry="1"/>
            <path d="M0,0L-5,-6"/>
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

if (!customElements.get("concept-ecological-succession")) {
  customElements.define("concept-ecological-succession", ConceptEcologicalSuccession);
}
