// Polymerase Chain Reaction. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPolymeraseChainReaction extends HTMLElement {
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
        .reaction {
          fill:#193d31;
          stroke:#728f84;
          stroke-width:1;
          animation:temperature 16s infinite
        }
        .strand {
          fill:none;
          stroke-width:2.8;
          stroke-linecap:round
        }
        .old {
          stroke:#85afc3
        }
        .new {
          stroke:#90d2aa
        }
        .primer {
          fill:none;
          stroke:#e1b76f;
          stroke-width:3.5
        }
        text {
          fill:#b7cdb7;
          font:8px serif
        }
        @keyframes temperature {
          0%,5%,40%,50%,90%,100% {
            fill:#293e32
          }
          15%,60% {
            fill:#503732
          }
          24%,70% {
            fill:#243e50
          }
          30%,80% {
            fill:#3e4330
          }
        }
        .old-top {
          animation:old-top 16s linear infinite
        }
        @keyframes old-top {
          0%,5% {
            d:path("M30 66H110");
            opacity:1
          }
          15%,25% {
            d:path("M30 50H110");
            opacity:1
          }
          40%,50% {
            d:path("M30 50H110");
            opacity:1
          }
          62%,100% {
            d:path("M30 28H110");
            opacity:1
          }
        }
        .old-bottom {
          animation:old-bottom 16s linear infinite
        }
        @keyframes old-bottom {
          0%,5% {
            d:path("M30 74H110");
            opacity:1
          }
          15%,25% {
            d:path("M30 90H110");
            opacity:1
          }
          40%,50% {
            d:path("M30 90H110");
            opacity:1
          }
          62%,100% {
            d:path("M30 112H110");
            opacity:1
          }
        }
        .daughter-top {
          animation:daughter-top 16s linear infinite
        }
        @keyframes daughter-top {
          0%,5% {
            d:path("M40 57H40");
            opacity:0
          }
          15%,25% {
            d:path("M40 57H40");
            opacity:0
          }
          40%,50% {
            d:path("M40 57H110");
            opacity:1
          }
          62%,100% {
            d:path("M40 60H110");
            opacity:1
          }
        }
        .daughter-bottom {
          animation:daughter-bottom 16s linear infinite
        }
        @keyframes daughter-bottom {
          0%,5% {
            d:path("M100 83H100");
            opacity:0
          }
          15%,25% {
            d:path("M100 83H100");
            opacity:0
          }
          40%,50% {
            d:path("M100 83H30");
            opacity:1
          }
          62%,100% {
            d:path("M100 80H30");
            opacity:1
          }
        }
        .primer-a {
          animation:primer-a 16s linear infinite
        }
        @keyframes primer-a {
          0%,16% {
            opacity:0;
            d:path("M30 57H40")
          }
          24%,50% {
            opacity:1;
            d:path("M30 57H40")
          }
          62%,100% {
            opacity:1;
            d:path("M30 60H40")
          }
        }
        .primer-b {
          animation:primer-b 16s linear infinite
        }
        @keyframes primer-b {
          0%,16% {
            opacity:0;
            d:path("M100 83H110")
          }
          24%,50% {
            opacity:1;
            d:path("M100 83H110")
          }
          62%,100% {
            opacity:1;
            d:path("M100 80H110")
          }
        }
        .p0 {
          animation:p0 16s infinite
        }
        .n0 {
          animation:n0 16s linear infinite
        }
        @keyframes p0 {
          0%,63% {
            opacity:0
          }
          70%,100% {
            opacity:1
          }
        }
        @keyframes n0 {
          0%,70% {
            opacity:0;
            d:path("M40 34H40")
          }
          71% {
            opacity:1
          }
          90%,100% {
            opacity:1;
            d:path("M40 34H110")
          }
        }
        .p1 {
          animation:p1 16s infinite
        }
        .n1 {
          animation:n1 16s linear infinite
        }
        @keyframes p1 {
          0%,63% {
            opacity:0
          }
          70%,100% {
            opacity:1
          }
        }
        @keyframes n1 {
          0%,70% {
            opacity:0;
            d:path("M100 54H100")
          }
          71% {
            opacity:1
          }
          90%,100% {
            opacity:1;
            d:path("M100 54H30")
          }
        }
        .p2 {
          animation:p2 16s infinite
        }
        .n2 {
          animation:n2 16s linear infinite
        }
        @keyframes p2 {
          0%,63% {
            opacity:0
          }
          70%,100% {
            opacity:1
          }
        }
        @keyframes n2 {
          0%,70% {
            opacity:0;
            d:path("M40 86H40")
          }
          71% {
            opacity:1
          }
          90%,100% {
            opacity:1;
            d:path("M40 86H110")
          }
        }
        .p3 {
          animation:p3 16s infinite
        }
        .n3 {
          animation:n3 16s linear infinite
        }
        @keyframes p3 {
          0%,63% {
            opacity:0
          }
          70%,100% {
            opacity:1
          }
        }
        @keyframes n3 {
          0%,70% {
            opacity:0;
            d:path("M100 106H100")
          }
          71% {
            opacity:1
          }
          90%,100% {
            opacity:1;
            d:path("M100 106H30")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Polymerase Chain Reaction">
        <rect class="reaction" x="17" y="16" width="106" height="108" rx="8"/>
        <path class="strand old-top old" d="M30 28H110"/>
        <path class="strand old-bottom old" d="M30 112H110"/>
        <path class="strand daughter-top new" d="M40 60H110"/>
        <path class="strand daughter-bottom new" d="M100 80H30"/>
        <path class="primer primer-a" d="M30 60H40"/>
        <path class="primer primer-b" d="M100 80H110"/>
        <path class="primer p0" d="M30 34H40"/>
        <path class="strand new n0" d="M40 34H110"/>
        <path class="primer p1" d="M100 54H110"/>
        <path class="strand new n1" d="M100 54H30"/>
        <path class="primer p2" d="M30 86H40"/>
        <path class="strand new n2" d="M40 86H110"/>
        <path class="primer p3" d="M100 106H110"/>
        <path class="strand new n3" d="M100 106H30"/>
        <text x="18" y="10">5′ → 3′ synthesis</text>
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

if (!customElements.get("concept-polymerase-chain-reaction")) {
  customElements.define("concept-polymerase-chain-reaction", ConceptPolymeraseChainReaction);
}
