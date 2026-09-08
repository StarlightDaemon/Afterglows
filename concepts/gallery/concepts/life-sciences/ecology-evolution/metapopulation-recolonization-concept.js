// Metapopulation Recolonization. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptMetapopulationRecolonization extends HTMLElement {
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
        .patch {
          fill:#284327;
          stroke:#779366;
          stroke-width:1.5
        }
        .wings {
          fill:#b6bc86;
          stroke:#e3d7a9;
          stroke-width:.6
        }
        .body {
          stroke:#33442d;
          stroke-width:1.3
        }
        .cycle {
          animation:reset 14s linear infinite
        }
        .resident {
          opacity:0;
          animation:resident 14s linear infinite
        }
        .migrant {
          transform:translate(65px,88px);
          animation:migrant 14s linear infinite
        }
        .offspring {
          animation:offspring 14s linear infinite
        }
        .disturbance {
          fill:none;
          stroke:#9f9d84;
          stroke-width:2;
          opacity:0;
          animation:disturbance 14s linear infinite
        }
        .leaf {
          fill:#709b60
        }
        .eggs {
          fill:#e3d8b1;
          opacity:0;
          animation:eggs 14s linear infinite
        }
        @keyframes reset {
          0%,100% {
            opacity:0
          }
          5%,94% {
            opacity:1
          }
        }
        @keyframes resident {
          0%,10% {
            opacity:1
          }
          22%,100% {
            opacity:0
          }
        }
        @keyframes disturbance {
          0%,8%,24%,100% {
            opacity:0
          }
          12%,18% {
            opacity:.8
          }
        }
        @keyframes offspring {
          0%,77% {
            opacity:0
          }
          88%,100% {
            opacity:1
          }
        }
        @keyframes eggs {
          0%,59%,78%,100% {
            opacity:0
          }
          65%,73% {
            opacity:1
          }
        }
        @keyframes migrant {
          0%,30% {
            transform:translate(38px,43px)
          }
          30% {
            transform:translate(38px,43px)
          }
          31.25% {
            transform:translate(38.543px,45.2975px)
          }
          32.5% {
            transform:translate(39.17px,47.59px)
          }
          33.75% {
            transform:translate(39.8825px,49.877px)
          }
          35% {
            transform:translate(40.68px,52.16px)
          }
          36.25% {
            transform:translate(41.5625px,54.4375px)
          }
          37.5% {
            transform:translate(42.53px,56.71px)
          }
          38.75% {
            transform:translate(43.5825px,58.9775px)
          }
          40% {
            transform:translate(44.72px,61.24px)
          }
          41.25% {
            transform:translate(45.9425px,63.4975px)
          }
          42.5% {
            transform:translate(47.25px,65.75px)
          }
          43.75% {
            transform:translate(48.6425px,67.9975px)
          }
          45% {
            transform:translate(50.12px,70.24px)
          }
          46.25% {
            transform:translate(51.683px,72.4775px)
          }
          47.5% {
            transform:translate(53.33px,74.71px)
          }
          48.75% {
            transform:translate(55.0625px,76.9375px)
          }
          50% {
            transform:translate(56.88px,79.16px)
          }
          51.25% {
            transform:translate(58.782px,81.3775px)
          }
          52.5% {
            transform:translate(60.77px,83.59px)
          }
          53.75% {
            transform:translate(62.8425px,85.798px)
          }
          55% {
            transform:translate(65px,88px)
          }
          100% {
            transform:translate(65px,88px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Metapopulation Recolonization">
        <path class="patch" d="M12,38Q10,20 24,19Q35,13 48,24Q57,36 49,52Q38,62 22,56Q8,52 12,38Z"/>
        <path class="patch" d="M84,38Q82,20 96,19Q107,13 120,24Q129,36 121,52Q110,62 94,56Q80,52 84,38Z"/>
        <path class="patch" d="M50,96Q48,78 62,77Q73,71 86,82Q95,94 87,110Q76,120 60,114Q46,110 50,96Z"/>
        <g class="cycle">
          <g transform="translate(24 33)">
            <path class="wings" d="M0,0Q-9,-9 -7,1Q-8,8 0,3Q8,8 7,1Q9,-9 0,0Z"/>
            <path class="body" d="M0,-3V5"/>
          </g>
          <g transform="translate(98 33)">
            <path class="wings" d="M0,0Q-9,-9 -7,1Q-8,8 0,3Q8,8 7,1Q9,-9 0,0Z"/>
            <path class="body" d="M0,-3V5"/>
          </g>
          <g transform="translate(112 43)">
            <path class="wings" d="M0,0Q-9,-9 -7,1Q-8,8 0,3Q8,8 7,1Q9,-9 0,0Z"/>
            <path class="body" d="M0,-3V5"/>
          </g>
          <g class="resident" transform="translate(76 100)">
            <path class="wings" d="M0,0Q-9,-9 -7,1Q-8,8 0,3Q8,8 7,1Q9,-9 0,0Z"/>
            <path class="body" d="M0,-3V5"/>
          </g>
          <g class="migrant">
            <path class="wings" d="M0,0Q-9,-9 -7,1Q-8,8 0,3Q8,8 7,1Q9,-9 0,0Z"/>
            <path class="body" d="M0,-3V5"/>
          </g>
          <g class="offspring">
            <g transform="translate(60 104)">
              <path class="wings" d="M0,0Q-9,-9 -7,1Q-8,8 0,3Q8,8 7,1Q9,-9 0,0Z"/>
              <path class="body" d="M0,-3V5"/>
            </g>
            <g transform="translate(80 103)">
              <path class="wings" d="M0,0Q-9,-9 -7,1Q-8,8 0,3Q8,8 7,1Q9,-9 0,0Z"/>
              <path class="body" d="M0,-3V5"/>
            </g>
          </g>
          <path class="disturbance" d="M52,91Q70,76 90,91M52,96Q70,81 90,96"/>
          <path class="leaf" d="M59,108Q61,96 69,99Q71,107 59,108Z"/>
          <g class="eggs">
            <circle cx="62" cy="104" r="1.6"/>
            <circle cx="66" cy="103" r="1.6"/>
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

if (!customElements.get("concept-metapopulation-recolonization")) {
  customElements.define("concept-metapopulation-recolonization", ConceptMetapopulationRecolonization);
}
