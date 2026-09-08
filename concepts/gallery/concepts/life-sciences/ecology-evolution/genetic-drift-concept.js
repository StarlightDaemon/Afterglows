// Genetic Drift. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptGeneticDrift extends HTMLElement {
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
          fill:#203b2d;
          stroke:#648b71;
          stroke-width:1
        }
        .A {
          stroke:#77c9ef
        }
        .a {
          stroke:#f3c977
        }
        .allele {
          stroke-width:2.4;
          stroke-linecap:round
        }
        .copy {
          opacity:0
        }
        .cell10 {
          animation:cell10 16s step-end infinite
        }
        @keyframes cell10 {
          0% {
            opacity:0
          }
          18%,100% {
            opacity:1
          }
        }
        .cell11 {
          animation:cell11 16s step-end infinite
        }
        @keyframes cell11 {
          0% {
            opacity:0
          }
          22%,100% {
            opacity:1
          }
        }
        .cell12 {
          animation:cell12 16s step-end infinite
        }
        @keyframes cell12 {
          0% {
            opacity:0
          }
          26%,100% {
            opacity:1
          }
        }
        .cell13 {
          animation:cell13 16s step-end infinite
        }
        @keyframes cell13 {
          0% {
            opacity:0
          }
          30%,100% {
            opacity:1
          }
        }
        .cell14 {
          animation:cell14 16s step-end infinite
        }
        @keyframes cell14 {
          0% {
            opacity:0
          }
          34%,100% {
            opacity:1
          }
        }
        .cell15 {
          animation:cell15 16s step-end infinite
        }
        @keyframes cell15 {
          0% {
            opacity:0
          }
          38%,100% {
            opacity:1
          }
        }
        .cell20 {
          animation:cell20 16s step-end infinite
        }
        @keyframes cell20 {
          0% {
            opacity:0
          }
          56%,100% {
            opacity:1
          }
        }
        .cell21 {
          animation:cell21 16s step-end infinite
        }
        @keyframes cell21 {
          0% {
            opacity:0
          }
          60%,100% {
            opacity:1
          }
        }
        .cell22 {
          animation:cell22 16s step-end infinite
        }
        @keyframes cell22 {
          0% {
            opacity:0
          }
          64%,100% {
            opacity:1
          }
        }
        .cell23 {
          animation:cell23 16s step-end infinite
        }
        @keyframes cell23 {
          0% {
            opacity:0
          }
          68%,100% {
            opacity:1
          }
        }
        .cell24 {
          animation:cell24 16s step-end infinite
        }
        @keyframes cell24 {
          0% {
            opacity:0
          }
          72%,100% {
            opacity:1
          }
        }
        .cell25 {
          animation:cell25 16s step-end infinite
        }
        @keyframes cell25 {
          0% {
            opacity:0
          }
          76%,100% {
            opacity:1
          }
        }
        .copy100 {
          animation:copy100 16s linear infinite
        }
        @keyframes copy100 {
          0%,9.99% {
            opacity:0;
            transform:translate(17.5px,30px)
          }
          10% {
            opacity:1;
            transform:translate(17.5px,30px)
          }
          17.99% {
            opacity:1;
            transform:translate(17.5px,72px)
          }
          18%,100% {
            opacity:0;
            transform:translate(17.5px,72px)
          }
        }
        .copy101 {
          animation:copy101 16s linear infinite
        }
        @keyframes copy101 {
          0%,9.99% {
            opacity:0;
            transform:translate(37.5px,30px)
          }
          10% {
            opacity:1;
            transform:translate(37.5px,30px)
          }
          17.99% {
            opacity:1;
            transform:translate(22.5px,72px)
          }
          18%,100% {
            opacity:0;
            transform:translate(22.5px,72px)
          }
        }
        .copy110 {
          animation:copy110 16s linear infinite
        }
        @keyframes copy110 {
          0%,13.99% {
            opacity:0;
            transform:translate(37.5px,30px)
          }
          14% {
            opacity:1;
            transform:translate(37.5px,30px)
          }
          21.99% {
            opacity:1;
            transform:translate(37.5px,72px)
          }
          22%,100% {
            opacity:0;
            transform:translate(37.5px,72px)
          }
        }
        .copy111 {
          animation:copy111 16s linear infinite
        }
        @keyframes copy111 {
          0%,13.99% {
            opacity:0;
            transform:translate(62.5px,30px)
          }
          14% {
            opacity:1;
            transform:translate(62.5px,30px)
          }
          21.99% {
            opacity:1;
            transform:translate(42.5px,72px)
          }
          22%,100% {
            opacity:0;
            transform:translate(42.5px,72px)
          }
        }
        .copy120 {
          animation:copy120 16s linear infinite
        }
        @keyframes copy120 {
          0%,17.99% {
            opacity:0;
            transform:translate(62.5px,30px)
          }
          18% {
            opacity:1;
            transform:translate(62.5px,30px)
          }
          25.99% {
            opacity:1;
            transform:translate(57.5px,72px)
          }
          26%,100% {
            opacity:0;
            transform:translate(57.5px,72px)
          }
        }
        .copy121 {
          animation:copy121 16s linear infinite
        }
        @keyframes copy121 {
          0%,17.99% {
            opacity:0;
            transform:translate(82.5px,30px)
          }
          18% {
            opacity:1;
            transform:translate(82.5px,30px)
          }
          25.99% {
            opacity:1;
            transform:translate(62.5px,72px)
          }
          26%,100% {
            opacity:0;
            transform:translate(62.5px,72px)
          }
        }
        .copy130 {
          animation:copy130 16s linear infinite
        }
        @keyframes copy130 {
          0%,21.99% {
            opacity:0;
            transform:translate(77.5px,30px)
          }
          22% {
            opacity:1;
            transform:translate(77.5px,30px)
          }
          29.99% {
            opacity:1;
            transform:translate(77.5px,72px)
          }
          30%,100% {
            opacity:0;
            transform:translate(77.5px,72px)
          }
        }
        .copy131 {
          animation:copy131 16s linear infinite
        }
        @keyframes copy131 {
          0%,21.99% {
            opacity:0;
            transform:translate(102.5px,30px)
          }
          22% {
            opacity:1;
            transform:translate(102.5px,30px)
          }
          29.99% {
            opacity:1;
            transform:translate(82.5px,72px)
          }
          30%,100% {
            opacity:0;
            transform:translate(82.5px,72px)
          }
        }
        .copy140 {
          animation:copy140 16s linear infinite
        }
        @keyframes copy140 {
          0%,25.99% {
            opacity:0;
            transform:translate(97.5px,30px)
          }
          26% {
            opacity:1;
            transform:translate(97.5px,30px)
          }
          33.99% {
            opacity:1;
            transform:translate(97.5px,72px)
          }
          34%,100% {
            opacity:0;
            transform:translate(97.5px,72px)
          }
        }
        .copy141 {
          animation:copy141 16s linear infinite
        }
        @keyframes copy141 {
          0%,25.99% {
            opacity:0;
            transform:translate(117.5px,30px)
          }
          26% {
            opacity:1;
            transform:translate(117.5px,30px)
          }
          33.99% {
            opacity:1;
            transform:translate(102.5px,72px)
          }
          34%,100% {
            opacity:0;
            transform:translate(102.5px,72px)
          }
        }
        .copy150 {
          animation:copy150 16s linear infinite
        }
        @keyframes copy150 {
          0%,29.99% {
            opacity:0;
            transform:translate(117.5px,30px)
          }
          30% {
            opacity:1;
            transform:translate(117.5px,30px)
          }
          37.99% {
            opacity:1;
            transform:translate(117.5px,72px)
          }
          38%,100% {
            opacity:0;
            transform:translate(117.5px,72px)
          }
        }
        .copy151 {
          animation:copy151 16s linear infinite
        }
        @keyframes copy151 {
          0%,29.99% {
            opacity:0;
            transform:translate(22.5px,30px)
          }
          30% {
            opacity:1;
            transform:translate(22.5px,30px)
          }
          37.99% {
            opacity:1;
            transform:translate(122.5px,72px)
          }
          38%,100% {
            opacity:0;
            transform:translate(122.5px,72px)
          }
        }
        .copy200 {
          animation:copy200 16s linear infinite
        }
        @keyframes copy200 {
          0%,47.99% {
            opacity:0;
            transform:translate(17.5px,72px)
          }
          48% {
            opacity:1;
            transform:translate(17.5px,72px)
          }
          55.99% {
            opacity:1;
            transform:translate(17.5px,114px)
          }
          56%,100% {
            opacity:0;
            transform:translate(17.5px,114px)
          }
        }
        .copy201 {
          animation:copy201 16s linear infinite
        }
        @keyframes copy201 {
          0%,47.99% {
            opacity:0;
            transform:translate(37.5px,72px)
          }
          48% {
            opacity:1;
            transform:translate(37.5px,72px)
          }
          55.99% {
            opacity:1;
            transform:translate(22.5px,114px)
          }
          56%,100% {
            opacity:0;
            transform:translate(22.5px,114px)
          }
        }
        .copy210 {
          animation:copy210 16s linear infinite
        }
        @keyframes copy210 {
          0%,51.99% {
            opacity:0;
            transform:translate(97.5px,72px)
          }
          52% {
            opacity:1;
            transform:translate(97.5px,72px)
          }
          59.99% {
            opacity:1;
            transform:translate(37.5px,114px)
          }
          60%,100% {
            opacity:0;
            transform:translate(37.5px,114px)
          }
        }
        .copy211 {
          animation:copy211 16s linear infinite
        }
        @keyframes copy211 {
          0%,51.99% {
            opacity:0;
            transform:translate(117.5px,72px)
          }
          52% {
            opacity:1;
            transform:translate(117.5px,72px)
          }
          59.99% {
            opacity:1;
            transform:translate(42.5px,114px)
          }
          60%,100% {
            opacity:0;
            transform:translate(42.5px,114px)
          }
        }
        .copy220 {
          animation:copy220 16s linear infinite
        }
        @keyframes copy220 {
          0%,55.99% {
            opacity:0;
            transform:translate(57.5px,72px)
          }
          56% {
            opacity:1;
            transform:translate(57.5px,72px)
          }
          63.99% {
            opacity:1;
            transform:translate(57.5px,114px)
          }
          64%,100% {
            opacity:0;
            transform:translate(57.5px,114px)
          }
        }
        .copy221 {
          animation:copy221 16s linear infinite
        }
        @keyframes copy221 {
          0%,55.99% {
            opacity:0;
            transform:translate(77.5px,72px)
          }
          56% {
            opacity:1;
            transform:translate(77.5px,72px)
          }
          63.99% {
            opacity:1;
            transform:translate(62.5px,114px)
          }
          64%,100% {
            opacity:0;
            transform:translate(62.5px,114px)
          }
        }
        .copy230 {
          animation:copy230 16s linear infinite
        }
        @keyframes copy230 {
          0%,59.99% {
            opacity:0;
            transform:translate(17.5px,72px)
          }
          60% {
            opacity:1;
            transform:translate(17.5px,72px)
          }
          67.99% {
            opacity:1;
            transform:translate(77.5px,114px)
          }
          68%,100% {
            opacity:0;
            transform:translate(77.5px,114px)
          }
        }
        .copy231 {
          animation:copy231 16s linear infinite
        }
        @keyframes copy231 {
          0%,59.99% {
            opacity:0;
            transform:translate(97.5px,72px)
          }
          60% {
            opacity:1;
            transform:translate(97.5px,72px)
          }
          67.99% {
            opacity:1;
            transform:translate(82.5px,114px)
          }
          68%,100% {
            opacity:0;
            transform:translate(82.5px,114px)
          }
        }
        .copy240 {
          animation:copy240 16s linear infinite
        }
        @keyframes copy240 {
          0%,63.99% {
            opacity:0;
            transform:translate(57.5px,72px)
          }
          64% {
            opacity:1;
            transform:translate(57.5px,72px)
          }
          71.99% {
            opacity:1;
            transform:translate(97.5px,114px)
          }
          72%,100% {
            opacity:0;
            transform:translate(97.5px,114px)
          }
        }
        .copy241 {
          animation:copy241 16s linear infinite
        }
        @keyframes copy241 {
          0%,63.99% {
            opacity:0;
            transform:translate(117.5px,72px)
          }
          64% {
            opacity:1;
            transform:translate(117.5px,72px)
          }
          71.99% {
            opacity:1;
            transform:translate(102.5px,114px)
          }
          72%,100% {
            opacity:0;
            transform:translate(102.5px,114px)
          }
        }
        .copy250 {
          animation:copy250 16s linear infinite
        }
        @keyframes copy250 {
          0%,67.99% {
            opacity:0;
            transform:translate(37.5px,72px)
          }
          68% {
            opacity:1;
            transform:translate(37.5px,72px)
          }
          75.99% {
            opacity:1;
            transform:translate(117.5px,114px)
          }
          76%,100% {
            opacity:0;
            transform:translate(117.5px,114px)
          }
        }
        .copy251 {
          animation:copy251 16s linear infinite
        }
        @keyframes copy251 {
          0%,67.99% {
            opacity:0;
            transform:translate(97.5px,72px)
          }
          68% {
            opacity:1;
            transform:translate(97.5px,72px)
          }
          75.99% {
            opacity:1;
            transform:translate(122.5px,114px)
          }
          76%,100% {
            opacity:0;
            transform:translate(122.5px,114px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Genetic Drift">
        <g class="cell00">
          <ellipse class="cell" cx="20" cy="30" rx="8" ry="8"/>
          <path class="allele A" d="M17.5,27V33"/>
          <path class="allele a" d="M22.5,27V33"/>
        </g>
        <g class="cell01">
          <ellipse class="cell" cx="40" cy="30" rx="8" ry="8"/>
          <path class="allele A" d="M37.5,27V33"/>
          <path class="allele a" d="M42.5,27V33"/>
        </g>
        <g class="cell02">
          <ellipse class="cell" cx="60" cy="30" rx="8" ry="8"/>
          <path class="allele A" d="M57.5,27V33"/>
          <path class="allele a" d="M62.5,27V33"/>
        </g>
        <g class="cell03">
          <ellipse class="cell" cx="80" cy="30" rx="8" ry="8"/>
          <path class="allele A" d="M77.5,27V33"/>
          <path class="allele a" d="M82.5,27V33"/>
        </g>
        <g class="cell04">
          <ellipse class="cell" cx="100" cy="30" rx="8" ry="8"/>
          <path class="allele A" d="M97.5,27V33"/>
          <path class="allele a" d="M102.5,27V33"/>
        </g>
        <g class="cell05">
          <ellipse class="cell" cx="120" cy="30" rx="8" ry="8"/>
          <path class="allele A" d="M117.5,27V33"/>
          <path class="allele a" d="M122.5,27V33"/>
        </g>
        <g class="cell10">
          <ellipse class="cell" cx="20" cy="72" rx="8" ry="8"/>
          <path class="allele A" d="M17.5,69V75"/>
          <path class="allele A" d="M22.5,69V75"/>
        </g>
        <g class="cell11">
          <ellipse class="cell" cx="40" cy="72" rx="8" ry="8"/>
          <path class="allele A" d="M37.5,69V75"/>
          <path class="allele a" d="M42.5,69V75"/>
        </g>
        <g class="cell12">
          <ellipse class="cell" cx="60" cy="72" rx="8" ry="8"/>
          <path class="allele a" d="M57.5,69V75"/>
          <path class="allele a" d="M62.5,69V75"/>
        </g>
        <g class="cell13">
          <ellipse class="cell" cx="80" cy="72" rx="8" ry="8"/>
          <path class="allele A" d="M77.5,69V75"/>
          <path class="allele a" d="M82.5,69V75"/>
        </g>
        <g class="cell14">
          <ellipse class="cell" cx="100" cy="72" rx="8" ry="8"/>
          <path class="allele A" d="M97.5,69V75"/>
          <path class="allele A" d="M102.5,69V75"/>
        </g>
        <g class="cell15">
          <ellipse class="cell" cx="120" cy="72" rx="8" ry="8"/>
          <path class="allele A" d="M117.5,69V75"/>
          <path class="allele a" d="M122.5,69V75"/>
        </g>
        <g class="cell20">
          <ellipse class="cell" cx="20" cy="114" rx="8" ry="8"/>
          <path class="allele A" d="M17.5,111V117"/>
          <path class="allele A" d="M22.5,111V117"/>
        </g>
        <g class="cell21">
          <ellipse class="cell" cx="40" cy="114" rx="8" ry="8"/>
          <path class="allele A" d="M37.5,111V117"/>
          <path class="allele A" d="M42.5,111V117"/>
        </g>
        <g class="cell22">
          <ellipse class="cell" cx="60" cy="114" rx="8" ry="8"/>
          <path class="allele a" d="M57.5,111V117"/>
          <path class="allele A" d="M62.5,111V117"/>
        </g>
        <g class="cell23">
          <ellipse class="cell" cx="80" cy="114" rx="8" ry="8"/>
          <path class="allele A" d="M77.5,111V117"/>
          <path class="allele A" d="M82.5,111V117"/>
        </g>
        <g class="cell24">
          <ellipse class="cell" cx="100" cy="114" rx="8" ry="8"/>
          <path class="allele a" d="M97.5,111V117"/>
          <path class="allele A" d="M102.5,111V117"/>
        </g>
        <g class="cell25">
          <ellipse class="cell" cx="120" cy="114" rx="8" ry="8"/>
          <path class="allele A" d="M117.5,111V117"/>
          <path class="allele A" d="M122.5,111V117"/>
        </g>
        <path class="allele A copy copy100" d="M0,-3V3"/>
        <path class="allele A copy copy101" d="M0,-3V3"/>
        <path class="allele A copy copy110" d="M0,-3V3"/>
        <path class="allele a copy copy111" d="M0,-3V3"/>
        <path class="allele a copy copy120" d="M0,-3V3"/>
        <path class="allele a copy copy121" d="M0,-3V3"/>
        <path class="allele A copy copy130" d="M0,-3V3"/>
        <path class="allele a copy copy131" d="M0,-3V3"/>
        <path class="allele A copy copy140" d="M0,-3V3"/>
        <path class="allele A copy copy141" d="M0,-3V3"/>
        <path class="allele A copy copy150" d="M0,-3V3"/>
        <path class="allele a copy copy151" d="M0,-3V3"/>
        <path class="allele A copy copy200" d="M0,-3V3"/>
        <path class="allele A copy copy201" d="M0,-3V3"/>
        <path class="allele A copy copy210" d="M0,-3V3"/>
        <path class="allele A copy copy211" d="M0,-3V3"/>
        <path class="allele a copy copy220" d="M0,-3V3"/>
        <path class="allele A copy copy221" d="M0,-3V3"/>
        <path class="allele A copy copy230" d="M0,-3V3"/>
        <path class="allele A copy copy231" d="M0,-3V3"/>
        <path class="allele a copy copy240" d="M0,-3V3"/>
        <path class="allele A copy copy241" d="M0,-3V3"/>
        <path class="allele A copy copy250" d="M0,-3V3"/>
        <path class="allele A copy copy251" d="M0,-3V3"/>
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

if (!customElements.get("concept-genetic-drift")) {
  customElements.define("concept-genetic-drift", ConceptGeneticDrift);
}
