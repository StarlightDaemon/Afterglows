// Meiotic Reduction. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptMeioticReduction extends HTMLElement {
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
          fill:#16382c;
          stroke:#7b9f88;
          stroke-width:1.5
        }
        .nucleus {
          fill:#3c584488;
          stroke:#a8baa0;
          stroke-width:1.3;
          stroke-dasharray:2 2;
          animation:nuclei 12s infinite
        }
        .homolog {
          fill:none;
          stroke-width:3;
          stroke-linecap:round;
          stroke-linejoin:round
        }
        .maternal {
          stroke:#96cbad
        }
        .paternal {
          stroke:#83bad6
        }
        .fiber {
          fill:none;
          stroke:#c5b27a77;
          stroke-width:1
        }
        .pole {
          fill:#d4c38a
        }
        @keyframes nuclei {
          0%,70% {
            opacity:0
          }
          90%,100% {
            opacity:1
          }
        }
        .homolog00 {
          animation:homolog00 12s infinite
        }
        .fiber00 {
          animation:fiber00 12s infinite
        }
        @keyframes homolog00 {
          0%,35% {
            d:path("M52 35L58 48L52 61M68 35L62 48L68 61M58 48H62")
          }
          70%,100% {
            d:path("M32 35L38 48L32 61M48 35L42 48L48 61M38 48H42")
          }
        }
        @keyframes fiber00 {
          0%,35% {
            d:path("M18 70L60 48");
            opacity:1
          }
          70% {
            d:path("M18 70L40 48");
            opacity:1
          }
          90%,100% {
            d:path("M18 70L40 48");
            opacity:0
          }
        }
        .homolog01 {
          animation:homolog01 12s infinite
        }
        .fiber01 {
          animation:fiber01 12s infinite
        }
        @keyframes homolog01 {
          0%,35% {
            d:path("M72 35L78 48L72 61M88 35L82 48L88 61M78 48H82")
          }
          70%,100% {
            d:path("M92 35L98 48L92 61M108 35L102 48L108 61M98 48H102")
          }
        }
        @keyframes fiber01 {
          0%,35% {
            d:path("M122 70L80 48");
            opacity:1
          }
          70% {
            d:path("M122 70L100 48");
            opacity:1
          }
          90%,100% {
            d:path("M122 70L100 48");
            opacity:0
          }
        }
        .homolog10 {
          animation:homolog10 12s infinite
        }
        .fiber10 {
          animation:fiber10 12s infinite
        }
        @keyframes homolog10 {
          0%,35% {
            d:path("M52 84L58 92L52 100M68 84L62 92L68 100M58 92H62")
          }
          70%,100% {
            d:path("M32 84L38 92L32 100M48 84L42 92L48 100M38 92H42")
          }
        }
        @keyframes fiber10 {
          0%,35% {
            d:path("M18 70L60 92");
            opacity:1
          }
          70% {
            d:path("M18 70L40 92");
            opacity:1
          }
          90%,100% {
            d:path("M18 70L40 92");
            opacity:0
          }
        }
        .homolog11 {
          animation:homolog11 12s infinite
        }
        .fiber11 {
          animation:fiber11 12s infinite
        }
        @keyframes homolog11 {
          0%,35% {
            d:path("M72 84L78 92L72 100M88 84L82 92L88 100M78 92H82")
          }
          70%,100% {
            d:path("M92 84L98 92L92 100M108 84L102 92L108 100M98 92H102")
          }
        }
        @keyframes fiber11 {
          0%,35% {
            d:path("M122 70L80 92");
            opacity:1
          }
          70% {
            d:path("M122 70L100 92");
            opacity:1
          }
          90%,100% {
            d:path("M122 70L100 92");
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Meiotic Reduction">
        <ellipse class="cell" cx="70" cy="70" rx="60" ry="54"/>
        <ellipse class="nucleus" cx="40" cy="70" rx="22" ry="40"/>
        <ellipse class="nucleus" cx="100" cy="70" rx="22" ry="40"/>
        <path class="fiber fiber00" d="M18 70L40 48"/>
        <path class="homolog maternal homolog00" d="M32 35L38 48L32 61M48 35L42 48L48 61M38 48H42"/>
        <path class="fiber fiber01" d="M122 70L100 48"/>
        <path class="homolog paternal homolog01" d="M92 35L98 48L92 61M108 35L102 48L108 61M98 48H102"/>
        <path class="fiber fiber10" d="M18 70L40 92"/>
        <path class="homolog paternal homolog10" d="M32 84L38 92L32 100M48 84L42 92L48 100M38 92H42"/>
        <path class="fiber fiber11" d="M122 70L100 92"/>
        <path class="homolog maternal homolog11" d="M92 84L98 92L92 100M108 84L102 92L108 100M98 92H102"/>
        <circle class="pole" cx="18" cy="70" r="3"/>
        <circle class="pole" cx="122" cy="70" r="3"/>
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

if (!customElements.get("concept-meiotic-reduction")) {
  customElements.define("concept-meiotic-reduction", ConceptMeioticReduction);
}
