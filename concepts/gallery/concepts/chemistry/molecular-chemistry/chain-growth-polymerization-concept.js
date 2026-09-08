// Chain-Growth Polymerization. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptChainGrowthPolymerization extends HTMLElement {
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
        .sequence {
          animation:reset 16s linear infinite
        }
        .initiator {
          fill:#d199aa;
          stroke:#efc1bf;
          stroke-width:1
        }
        .sigma,.pi,.propagate {
          fill:none;
          stroke:#b6cfc0;
          stroke-width:1.6
        }
        .radical {
          fill:#f2dfaa;
          stroke:#714d30;
          stroke-width:.5
        }
        .monomer0 {
          fill:#77c9ef
        }
        .monomer1 {
          fill:#9fcfa2
        }
        .monomer2 {
          fill:#d7b885
        }
        @keyframes reset {
          0%,100% {
            opacity:0
          }
          5%,94% {
            opacity:1
          }
        }
        .m0 {
          transform:translate(0px,34px);
          animation:m0 16s linear infinite
        }
        .pi0 {
          opacity:0;
          animation:pi0 16s linear infinite
        }
        .link0 {
          animation:link0 16s linear infinite
        }
        @keyframes m0 {
          0%,10% {
            transform:translate(0,0)
          }
          25%,100% {
            transform:translate(0px,34px)
          }
        }
        @keyframes pi0 {
          0%,20% {
            opacity:1
          }
          25%,100% {
            opacity:0
          }
        }
        @keyframes link0 {
          0%,20% {
            opacity:0;
            d:path('M20,78L34,50.667')
          }
          25%,100% {
            opacity:1;
            d:path('M20,78L34,62')
          }
        }
        .m1 {
          transform:translate(-8px,42px);
          animation:m1 16s linear infinite
        }
        .pi1 {
          opacity:0;
          animation:pi1 16s linear infinite
        }
        .link1 {
          animation:link1 16s linear infinite
        }
        @keyframes m1 {
          0%,32% {
            transform:translate(0,0)
          }
          47%,100% {
            transform:translate(-8px,42px)
          }
        }
        @keyframes pi1 {
          0%,42% {
            opacity:1
          }
          47%,100% {
            opacity:0
          }
        }
        @keyframes link1 {
          0%,42% {
            opacity:0;
            d:path('M48,78L64.667,48')
          }
          47%,100% {
            opacity:1;
            d:path('M48,78L62,62')
          }
        }
        .m2 {
          transform:translate(-16px,-39px);
          animation:m2 16s linear infinite
        }
        .pi2 {
          opacity:0;
          animation:pi2 16s linear infinite
        }
        .link2 {
          animation:link2 16s linear infinite
        }
        @keyframes m2 {
          0%,54% {
            transform:translate(0,0)
          }
          69%,100% {
            transform:translate(-16px,-39px)
          }
        }
        @keyframes pi2 {
          0%,64% {
            opacity:1
          }
          69%,100% {
            opacity:0
          }
        }
        @keyframes link2 {
          0%,64% {
            opacity:0;
            d:path('M76,78L95.333,75')
          }
          69%,100% {
            opacity:1;
            d:path('M76,78L90,62')
          }
        }
        .r0 {
          opacity:0;
          animation:r0 16s step-end infinite
        }
        @keyframes r0 {
          0% {
            opacity:1
          }
          0% {
            opacity:1
          }
          25%,100% {
            opacity:0
          }
        }
        .r1 {
          opacity:0;
          animation:r1 16s step-end infinite
        }
        @keyframes r1 {
          0% {
            opacity:0
          }
          25% {
            opacity:1
          }
          47%,100% {
            opacity:0
          }
        }
        .r2 {
          opacity:0;
          animation:r2 16s step-end infinite
        }
        @keyframes r2 {
          0% {
            opacity:0
          }
          47% {
            opacity:1
          }
          69%,100% {
            opacity:0
          }
        }
        .r3 {
          opacity:1;
          animation:r3 16s step-end infinite
        }
        @keyframes r3 {
          0% {
            opacity:0
          }
          69% {
            opacity:1
          }
          100%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Chain-Growth Polymerization">
        <g class="sequence">
          <circle class="initiator" cx="20" cy="78" r="5"/>
          <path class="propagate link0" d="M20,78L34,62"/>
          <g class="monomer0 m0">
            <path class="sigma" d="M34,28L48,44"/>
            <path class="pi pi0" d="M31.7,30L45.7,46"/>
            <circle cx="34" cy="28" r="4"/>
            <circle cx="48" cy="44" r="4"/>
          </g>
          <path class="propagate link1" d="M48,78L62,62"/>
          <g class="monomer1 m1">
            <path class="sigma" d="M70,20L84,36"/>
            <path class="pi pi1" d="M67.7,22L81.7,38"/>
            <circle cx="70" cy="20" r="4"/>
            <circle cx="84" cy="36" r="4"/>
          </g>
          <path class="propagate link2" d="M76,78L90,62"/>
          <g class="monomer2 m2">
            <path class="sigma" d="M106,101L120,117"/>
            <path class="pi pi2" d="M103.7,103L117.7,119"/>
            <circle cx="106" cy="101" r="4"/>
            <circle cx="120" cy="117" r="4"/>
          </g>
          <circle class="radical r0" cx="24" cy="71" r="1.8"/>
          <circle class="radical r1" cx="52" cy="83" r="1.8"/>
          <circle class="radical r2" cx="80" cy="83" r="1.8"/>
          <circle class="radical r3" cx="108" cy="83" r="1.8"/>
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

if (!customElements.get("concept-chain-growth-polymerization")) {
  customElements.define("concept-chain-growth-polymerization", ConceptChainGrowthPolymerization);
}
