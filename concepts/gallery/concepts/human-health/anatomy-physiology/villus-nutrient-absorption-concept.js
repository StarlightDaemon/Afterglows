// Villus Nutrient Absorption. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptVillusNutrientAbsorption extends HTMLElement {
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
        .epithelium {
          fill:#754e55;
          stroke:#c79492;
          stroke-width:1.5
        }
        .core {
          fill:#213f32;
          stroke:#b48988;
          stroke-width:1
        }
        .lacteal {
          fill:#194951;
          stroke:#7cb9b2;
          stroke-width:1.5
        }
        .capillary-edge {
          fill:none;
          stroke:#b57380;
          stroke-width:8
        }
        .capillary {
          fill:none;
          stroke:#563644;
          stroke-width:5
        }
        .cells {
          fill:none;
          stroke:#b48988;
          stroke-width:1
        }
        .small {
          fill:#c5e7b7
        }
        .n1 {
          animation:n1 10s linear infinite
        }
        .n2 {
          animation:n2 10s linear infinite
        }
        .lipid {
          fill:none;
          stroke:#e8bb65;
          stroke-width:2;
          stroke-linecap:round
        }
        .raw {
          opacity:0;
          animation:raw 10s linear infinite
        }
        .package {
          fill:#f2ca76;
          stroke:#a77d3f;
          stroke-width:1;
          animation:package 10s linear infinite
        }
        .package circle:not(:first-child) {
          fill:#805e35;
          stroke:none
        }
        .enter {
          stroke:#c5e7b7;
          opacity:.5
        }
        @keyframes n1 {
          0%,7% {
            transform:translate(-36px,-46px)
          }
          20% {
            transform:translate(-10px,-46px)
          }
          22% {
            transform:translate(-9.888px,-48.988px)
          }
          24% {
            transform:translate(-9.57px,-51.578px)
          }
          26% {
            transform:translate(-9.077px,-53.77px)
          }
          28% {
            transform:translate(-8.4375px,-55.5625px)
          }
          30% {
            transform:translate(-7.681px,-56.957px)
          }
          32% {
            transform:translate(-6.836px,-57.953px)
          }
          34% {
            transform:translate(-5.933px,-58.551px)
          }
          36% {
            transform:translate(-5px,-58.75px)
          }
          38% {
            transform:translate(-4.067px,-58.551px)
          }
          40% {
            transform:translate(-3.164px,-57.953px)
          }
          42% {
            transform:translate(-2.319px,-56.957px)
          }
          44% {
            transform:translate(-1.5625px,-55.5625px)
          }
          46% {
            transform:translate(-0.923px,-53.77px)
          }
          48% {
            transform:translate(-0.43px,-51.578px)
          }
          50% {
            transform:translate(-0.112px,-48.988px)
          }
          52% {
            transform:translate(0px,-46px)
          }
          90%,100% {
            transform:translate(0,0)
          }
        }
        @keyframes n2 {
          0%,20% {
            transform:translate(-30px,0)
          }
          38%,100% {
            transform:translate(0,0)
          }
        }
        @keyframes raw {
          0%,24% {
            opacity:0;
            transform:translateX(0)
          }
          25% {
            opacity:1;
            transform:translateX(0)
          }
          40% {
            opacity:1;
            transform:translateX(-14px)
          }
          42%,100% {
            opacity:0
          }
        }
        @keyframes package {
          0%,41% {
            opacity:0;
            transform:translate(30px,-28px)
          }
          42% {
            opacity:1;
            transform:translate(30px,-28px)
          }
          58% {
            opacity:1;
            transform:translate(0,-20px)
          }
          85%,100% {
            opacity:1;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Villus Nutrient Absorption">
        <path class="epithelium" d="M36 124V64C36 14 104 14 104 64V124Z"/>
        <path class="core" d="M44 124V66C44 25 96 25 96 66V124Z"/>
        <path class="lacteal" d="M65 124V67Q65 60 70 60Q75 60 75 67V124"/>
        <g class="package">
          <circle cx="70" cy="102" r="3.5"/>
          <circle cx="68.5" cy="101" r="1"/>
          <circle cx="71.5" cy="101" r="1"/>
          <circle cx="70" cy="104" r="1"/>
        </g>
        <path class="capillary-edge" d="M49 124V62C49 45 59 45 59 62V124"/>
        <path class="capillary" d="M49 124V62C49 45 59 45 59 62V124"/>
        <path class="cells" d="M36 66H44M36 83H44M36 100H44M96 66H104M96 83H104M96 100H104M42 41L48 47M57 27L60 36M83 27L80 36M98 41L92 47"/>
        <circle class="small n1" cx="59" cy="108" r="1.8"/>
        <circle class="small n2" cx="49" cy="96" r="1.8"/>
        <g class="lipid raw">
          <path d="M110 70h9M110 74h9M110 78h9"/>
        </g>
        <path class="ink enter" d="M28 62H44M40 59L44 62L40 65"/>
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

if (!customElements.get("concept-villus-nutrient-absorption")) {
  customElements.define("concept-villus-nutrient-absorption", ConceptVillusNutrientAbsorption);
}
