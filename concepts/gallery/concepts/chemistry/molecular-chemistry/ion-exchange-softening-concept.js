// Ion-Exchange Softening. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptIonExchangeSoftening extends HTMLElement {
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
        .resin {
          fill:#5d5132;
          stroke:#baa77b;
          stroke-width:1.5
        }
        .network {
          fill:none;
          stroke:#89744a;
          stroke-width:2
        }
        .arm {
          fill:none;
          stroke:#c5b98d;
          stroke-width:2
        }
        .minus {
          stroke:#dcdda7;
          stroke-width:2
        }
        .association {
          fill:none;
          stroke:#a3c3b0;
          stroke-dasharray:2 3;
          stroke-width:1;
          opacity:0;
          animation:association 14s linear infinite
        }
        .na {
          fill:#7ebcca
        }
        .ca {
          fill:#e2b879
        }
        .charge {
          stroke:#183d36;
          stroke-width:.7
        }
        .brine,.waste {
          fill:none;
          stroke:#6a8c84;
          stroke-width:1.3
        }
        .brine {
          opacity:.25;
          animation:brine 14s linear infinite
        }
        .waste {
          opacity:.25;
          animation:waste 14s linear infinite
        }
        .calcium {
          transform:translate(123px,35px);
          animation:calcium 14s linear infinite
        }
        @keyframes association {
          0%,30%,70%,100% {
            opacity:0
          }
          40%,68% {
            opacity:.8
          }
        }
        @keyframes brine {
          0%,48% {
            opacity:.25
          }
          55%,75% {
            opacity:1
          }
          90%,100% {
            opacity:.25
          }
        }
        @keyframes waste {
          0%,70% {
            opacity:.25
          }
          82%,100% {
            opacity:1
          }
        }
        @keyframes calcium {
          0%,10% {
            transform:translate(70px,24px)
          }
          40%,70% {
            transform:translate(70px,73px)
          }
          80% {
            transform:translate(70px,45px)
          }
          88%,100% {
            transform:translate(123px,35px)
          }
        }
        .n0 {
          transform:translate(28px,40px);
          animation:n0 14s linear infinite
        }
        @keyframes n0 {
          0%,10% {
            transform:translate(54px,73px)
          }
          40%,100% {
            transform:translate(28px,40px)
          }
        }
        .f0 {
          transform:translate(54px,73px);
          animation:f0 14s linear infinite
        }
        @keyframes f0 {
          0%,50% {
            opacity:0;
            transform:translate(18px,60px)
          }
          55% {
            opacity:1;
            transform:translate(18px,60px)
          }
          70% {
            opacity:1;
            transform:translate(54px,60px)
          }
          88%,100% {
            opacity:1;
            transform:translate(54px,73px)
          }
        }
        .n1 {
          transform:translate(112px,55px);
          animation:n1 14s linear infinite
        }
        @keyframes n1 {
          0%,10% {
            transform:translate(86px,73px)
          }
          40%,100% {
            transform:translate(112px,55px)
          }
        }
        .f1 {
          transform:translate(86px,73px);
          animation:f1 14s linear infinite
        }
        @keyframes f1 {
          0%,50% {
            opacity:0;
            transform:translate(18px,74px)
          }
          55% {
            opacity:1;
            transform:translate(18px,74px)
          }
          70% {
            opacity:1;
            transform:translate(86px,60px)
          }
          88%,100% {
            opacity:1;
            transform:translate(86px,73px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Ion-Exchange Softening">
        <path class="resin" d="M24,88H116V123H24Z"/>
        <path class="network" d="M27,99L46,92L63,106L81,96L111,106M28,116L48,105L67,118L91,112L113,119"/>
        <path class="arm" d="M54,98V82M86,98V82"/>
        <path class="minus" d="M50,82H58M82,82H90"/>
        <path class="association" d="M54,79L67,74M86,79L73,74"/>
        <path class="brine" d="M18,22V48M14,22H22M14,27H22M14,32H22"/>
        <path class="waste" d="M102,24H126V43M121,38L126,43L131,38"/>
        <g class="calcium">
          <circle class="ca" r="5.6"/>
          <path class="charge" d="M-4,0H-1M-2.5,-1.5V1.5M1,0H4M2.5,-1.5V1.5"/>
        </g>
        <g class="initial n0">
          <circle class="na" r="3.7"/>
          <path class="charge" d="M-2,0H2M0,-2V2"/>
        </g>
        <g class="fresh f0">
          <circle class="na" r="3.7"/>
          <path class="charge" d="M-2,0H2M0,-2V2"/>
        </g>
        <g class="initial n1">
          <circle class="na" r="3.7"/>
          <path class="charge" d="M-2,0H2M0,-2V2"/>
        </g>
        <g class="fresh f1">
          <circle class="na" r="3.7"/>
          <path class="charge" d="M-2,0H2M0,-2V2"/>
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

if (!customElements.get("concept-ion-exchange-softening")) {
  customElements.define("concept-ion-exchange-softening", ConceptIonExchangeSoftening);
}
