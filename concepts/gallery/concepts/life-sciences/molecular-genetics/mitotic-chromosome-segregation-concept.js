// Mitotic Chromosome Segregation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptMitoticChromosomeSegregation extends HTMLElement {
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
        .cell {
          fill:#17382c;
          stroke:#7ea58d;
          stroke-width:1.5
        }
        .daughter {
          fill:#35504788;
          stroke:#9cb298;
          stroke-width:1.3;
          stroke-dasharray:2 2;
          animation:nuclei 10s infinite
        }
        .fiber {
          fill:none;
          stroke:#baae7377;
          stroke-width:1
        }
        .chromatid {
          fill:none;
          stroke-width:4;
          stroke-linecap:round;
          stroke-linejoin:round
        }
        .c0 {
          stroke:#a4d1ad
        }
        .c1 {
          stroke:#dab982
        }
        .c2 {
          stroke:#83bbd1
        }
        .cohesion {
          stroke:#d4ba94;
          stroke-width:3;
          opacity:0;
          animation:cohesion 10s steps(1) infinite
        }
        .pole {
          fill:#decb92
        }
        @keyframes nuclei {
          0%,65% {
            opacity:0
          }
          85%,100% {
            opacity:1
          }
        }
        @keyframes cohesion {
          0% {
            opacity:1
          }
          30%,100% {
            opacity:0
          }
        }
        .chromatid00 {
          animation:chromatid00 10s infinite
        }
        .fiber00 {
          animation:fiber00 10s infinite
        }
        @keyframes chromatid00 {
          0%,30% {
            d:path("M62 33L68 43L62 53")
          }
          65%,100% {
            d:path("M47 33L38 43L47 53")
          }
        }
        @keyframes fiber00 {
          0%,30% {
            d:path("M20 70L68 43");
            opacity:1
          }
          65% {
            d:path("M20 70L38 43");
            opacity:1
          }
          85%,100% {
            d:path("M20 70L38 43");
            opacity:0
          }
        }
        .chromatid01 {
          animation:chromatid01 10s infinite
        }
        .fiber01 {
          animation:fiber01 10s infinite
        }
        @keyframes chromatid01 {
          0%,30% {
            d:path("M78 33L72 43L78 53")
          }
          65%,100% {
            d:path("M93 33L102 43L93 53")
          }
        }
        @keyframes fiber01 {
          0%,30% {
            d:path("M120 70L72 43");
            opacity:1
          }
          65% {
            d:path("M120 70L102 43");
            opacity:1
          }
          85%,100% {
            d:path("M120 70L102 43");
            opacity:0
          }
        }
        .chromatid10 {
          animation:chromatid10 10s infinite
        }
        .fiber10 {
          animation:fiber10 10s infinite
        }
        @keyframes chromatid10 {
          0%,30% {
            d:path("M62 60L68 70L62 80")
          }
          65%,100% {
            d:path("M47 60L38 70L47 80")
          }
        }
        @keyframes fiber10 {
          0%,30% {
            d:path("M20 70L68 70");
            opacity:1
          }
          65% {
            d:path("M20 70L38 70");
            opacity:1
          }
          85%,100% {
            d:path("M20 70L38 70");
            opacity:0
          }
        }
        .chromatid11 {
          animation:chromatid11 10s infinite
        }
        .fiber11 {
          animation:fiber11 10s infinite
        }
        @keyframes chromatid11 {
          0%,30% {
            d:path("M78 60L72 70L78 80")
          }
          65%,100% {
            d:path("M93 60L102 70L93 80")
          }
        }
        @keyframes fiber11 {
          0%,30% {
            d:path("M120 70L72 70");
            opacity:1
          }
          65% {
            d:path("M120 70L102 70");
            opacity:1
          }
          85%,100% {
            d:path("M120 70L102 70");
            opacity:0
          }
        }
        .chromatid20 {
          animation:chromatid20 10s infinite
        }
        .fiber20 {
          animation:fiber20 10s infinite
        }
        @keyframes chromatid20 {
          0%,30% {
            d:path("M62 87L68 97L62 107")
          }
          65%,100% {
            d:path("M47 87L38 97L47 107")
          }
        }
        @keyframes fiber20 {
          0%,30% {
            d:path("M20 70L68 97");
            opacity:1
          }
          65% {
            d:path("M20 70L38 97");
            opacity:1
          }
          85%,100% {
            d:path("M20 70L38 97");
            opacity:0
          }
        }
        .chromatid21 {
          animation:chromatid21 10s infinite
        }
        .fiber21 {
          animation:fiber21 10s infinite
        }
        @keyframes chromatid21 {
          0%,30% {
            d:path("M78 87L72 97L78 107")
          }
          65%,100% {
            d:path("M93 87L102 97L93 107")
          }
        }
        @keyframes fiber21 {
          0%,30% {
            d:path("M120 70L72 97");
            opacity:1
          }
          65% {
            d:path("M120 70L102 97");
            opacity:1
          }
          85%,100% {
            d:path("M120 70L102 97");
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Mitotic Chromosome Segregation">
        <ellipse class="cell" cx="70" cy="70" rx="62" ry="55"/>
        <ellipse class="daughter" cx="38" cy="70" rx="21" ry="42"/>
        <ellipse class="daughter" cx="102" cy="70" rx="21" ry="42"/>
        <path class="fiber fiber00" d="M20 70L38 43"/>
        <path class="chromatid c0 chromatid00" d="M47 33L38 43L47 53"/>
        <path class="fiber fiber01" d="M120 70L102 43"/>
        <path class="chromatid c0 chromatid01" d="M93 33L102 43L93 53"/>
        <path class="cohesion" d="M68 43H72"/>
        <path class="fiber fiber10" d="M20 70L38 70"/>
        <path class="chromatid c1 chromatid10" d="M47 60L38 70L47 80"/>
        <path class="fiber fiber11" d="M120 70L102 70"/>
        <path class="chromatid c1 chromatid11" d="M93 60L102 70L93 80"/>
        <path class="cohesion" d="M68 70H72"/>
        <path class="fiber fiber20" d="M20 70L38 97"/>
        <path class="chromatid c2 chromatid20" d="M47 87L38 97L47 107"/>
        <path class="fiber fiber21" d="M120 70L102 97"/>
        <path class="chromatid c2 chromatid21" d="M93 87L102 97L93 107"/>
        <path class="cohesion" d="M68 97H72"/>
        <circle class="pole" cx="20" cy="70" r="3"/>
        <circle class="pole" cx="120" cy="70" r="3"/>
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

if (!customElements.get("concept-mitotic-chromosome-segregation")) {
  customElements.define("concept-mitotic-chromosome-segregation", ConceptMitoticChromosomeSegregation);
}
