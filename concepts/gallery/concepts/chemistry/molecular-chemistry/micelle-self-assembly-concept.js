// Micelle Self-Assembly. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptMicelleSelfAssembly extends HTMLElement {
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
        .core {
          fill:#665838;
          opacity:.3;
          animation:core 14s linear infinite
        }
        .head {
          fill:#77c9ef;
          stroke:#c1e7e7;
          stroke-width:.7
        }
        .tail {
          fill:none;
          stroke:#d3b675;
          stroke-width:1.8;
          stroke-linejoin:round
        }
        .assembly {
          animation:reset 14s linear infinite
        }
        @keyframes core {
          0%,20% {
            opacity:0
          }
          60%,100% {
            opacity:.3
          }
        }
        @keyframes reset {
          0%,100% {
            opacity:0
          }
          5%,94% {
            opacity:1
          }
        }
        .monomer0 {
          transform:translate(120px,50px) rotate(0deg);
          animation:monomer0 14s ease-in-out infinite
        }
        @keyframes monomer0 {
          0%,15% {
            transform:translate(120px,70px) rotate(65deg)
          }
          60% {
            transform:translate(102px,70px) rotate(90deg)
          }
          75%,100% {
            transform:translate(120px,50px) rotate(0deg)
          }
        }
        .monomer1 {
          transform:translate(97.713px,86px) rotate(120deg);
          animation:monomer1 14s ease-in-out infinite
        }
        @keyframes monomer1 {
          0%,18% {
            transform:translate(116.765px,97px) rotate(145deg)
          }
          60% {
            transform:translate(97.713px,86px) rotate(120deg)
          }
          100% {
            transform:translate(97.713px,86px) rotate(120deg)
          }
        }
        .monomer2 {
          transform:translate(86px,97.713px) rotate(150deg);
          animation:monomer2 14s ease-in-out infinite
        }
        @keyframes monomer2 {
          0%,21% {
            transform:translate(95px,113.301px) rotate(125deg)
          }
          60% {
            transform:translate(86px,97.713px) rotate(150deg)
          }
          100% {
            transform:translate(86px,97.713px) rotate(150deg)
          }
        }
        .monomer3 {
          transform:translate(70px,102px) rotate(180deg);
          animation:monomer3 14s ease-in-out infinite
        }
        @keyframes monomer3 {
          0%,15% {
            transform:translate(70px,116px) rotate(205deg)
          }
          60% {
            transform:translate(70px,102px) rotate(180deg)
          }
          100% {
            transform:translate(70px,102px) rotate(180deg)
          }
        }
        .monomer4 {
          transform:translate(54.0px,97.713px) rotate(210deg);
          animation:monomer4 14s ease-in-out infinite
        }
        @keyframes monomer4 {
          0%,18% {
            transform:translate(45.0px,113.301px) rotate(185deg)
          }
          60% {
            transform:translate(54.0px,97.713px) rotate(210deg)
          }
          100% {
            transform:translate(54.0px,97.713px) rotate(210deg)
          }
        }
        .monomer5 {
          transform:translate(42.287px,86px) rotate(240deg);
          animation:monomer5 14s ease-in-out infinite
        }
        @keyframes monomer5 {
          0%,21% {
            transform:translate(23.235px,97px) rotate(265deg)
          }
          60% {
            transform:translate(42.287px,86px) rotate(240deg)
          }
          100% {
            transform:translate(42.287px,86px) rotate(240deg)
          }
        }
        .monomer6 {
          transform:translate(38px,70px) rotate(270deg);
          animation:monomer6 14s ease-in-out infinite
        }
        @keyframes monomer6 {
          0%,15% {
            transform:translate(20px,70px) rotate(245deg)
          }
          60% {
            transform:translate(38px,70px) rotate(270deg)
          }
          100% {
            transform:translate(38px,70px) rotate(270deg)
          }
        }
        .monomer7 {
          transform:translate(42.287px,54.0px) rotate(300deg);
          animation:monomer7 14s ease-in-out infinite
        }
        @keyframes monomer7 {
          0%,18% {
            transform:translate(30.163px,47.0px) rotate(325deg)
          }
          60% {
            transform:translate(42.287px,54.0px) rotate(300deg)
          }
          100% {
            transform:translate(42.287px,54.0px) rotate(300deg)
          }
        }
        .monomer8 {
          transform:translate(54.0px,42.287px) rotate(330deg);
          animation:monomer8 14s ease-in-out infinite
        }
        @keyframes monomer8 {
          0%,21% {
            transform:translate(45.0px,26.699px) rotate(305deg)
          }
          60% {
            transform:translate(54.0px,42.287px) rotate(330deg)
          }
          100% {
            transform:translate(54.0px,42.287px) rotate(330deg)
          }
        }
        .monomer9 {
          transform:translate(70px,38px) rotate(360deg);
          animation:monomer9 14s ease-in-out infinite
        }
        @keyframes monomer9 {
          0%,15% {
            transform:translate(70.0px,16px) rotate(385deg)
          }
          60% {
            transform:translate(70px,38px) rotate(360deg)
          }
          100% {
            transform:translate(70px,38px) rotate(360deg)
          }
        }
        .monomer10 {
          transform:translate(86px,42.287px) rotate(390deg);
          animation:monomer10 14s ease-in-out infinite
        }
        @keyframes monomer10 {
          0%,18% {
            transform:translate(95px,26.699px) rotate(365deg)
          }
          60% {
            transform:translate(86px,42.287px) rotate(390deg)
          }
          100% {
            transform:translate(86px,42.287px) rotate(390deg)
          }
        }
        .monomer11 {
          transform:translate(97.713px,54.0px) rotate(420deg);
          animation:monomer11 14s ease-in-out infinite
        }
        @keyframes monomer11 {
          0%,21% {
            transform:translate(109.837px,47.0px) rotate(445deg)
          }
          60% {
            transform:translate(97.713px,54.0px) rotate(420deg)
          }
          100% {
            transform:translate(97.713px,54.0px) rotate(420deg)
          }
        }
        .replacement {
          transform:translate(102px,70px) rotate(90deg);
          animation:replacement 14s ease-in-out infinite
        }
        @keyframes replacement {
          0%,78% {
            transform:translate(125px,122px) rotate(135deg)
          }
          90%,100% {
            transform:translate(102px,70px) rotate(90deg)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Micelle Self-Assembly">
        <circle class="core" cx="70" cy="70" r="22"/>
        <g class="assembly">
          <g class="monomer0">
            <path class="tail" d="M0,3L2,8L-2,13L2,18L0,22"/>
            <circle class="head" r="3"/>
          </g>
          <g class="monomer1">
            <path class="tail" d="M0,3L2,8L-2,13L2,18L0,22"/>
            <circle class="head" r="3"/>
          </g>
          <g class="monomer2">
            <path class="tail" d="M0,3L2,8L-2,13L2,18L0,22"/>
            <circle class="head" r="3"/>
          </g>
          <g class="monomer3">
            <path class="tail" d="M0,3L2,8L-2,13L2,18L0,22"/>
            <circle class="head" r="3"/>
          </g>
          <g class="monomer4">
            <path class="tail" d="M0,3L2,8L-2,13L2,18L0,22"/>
            <circle class="head" r="3"/>
          </g>
          <g class="monomer5">
            <path class="tail" d="M0,3L2,8L-2,13L2,18L0,22"/>
            <circle class="head" r="3"/>
          </g>
          <g class="monomer6">
            <path class="tail" d="M0,3L2,8L-2,13L2,18L0,22"/>
            <circle class="head" r="3"/>
          </g>
          <g class="monomer7">
            <path class="tail" d="M0,3L2,8L-2,13L2,18L0,22"/>
            <circle class="head" r="3"/>
          </g>
          <g class="monomer8">
            <path class="tail" d="M0,3L2,8L-2,13L2,18L0,22"/>
            <circle class="head" r="3"/>
          </g>
          <g class="monomer9">
            <path class="tail" d="M0,3L2,8L-2,13L2,18L0,22"/>
            <circle class="head" r="3"/>
          </g>
          <g class="monomer10">
            <path class="tail" d="M0,3L2,8L-2,13L2,18L0,22"/>
            <circle class="head" r="3"/>
          </g>
          <g class="monomer11">
            <path class="tail" d="M0,3L2,8L-2,13L2,18L0,22"/>
            <circle class="head" r="3"/>
          </g>
          <g class="replacement">
            <path class="tail" d="M0,3L2,8L-2,13L2,18L0,22"/>
            <circle class="head" r="3"/>
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

if (!customElements.get("concept-micelle-self-assembly")) {
  customElements.define("concept-micelle-self-assembly", ConceptMicelleSelfAssembly);
}
