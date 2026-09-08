// Mycorrhizal Exchange. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptMycorrhizalExchange extends HTMLElement {
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
          fill:none;
          stroke:#abaf84;
          stroke-width:3
        }
        .membrane {
          fill:none;
          stroke:#709c78;
          stroke-width:1.5
        }
        .external {
          fill:none;
          stroke:#739ab7;
          stroke-width:4;
          stroke-linecap:round;
          stroke-linejoin:round
        }
        .casing {
          fill:none;
          stroke:#709c78;
          stroke-width:12;
          stroke-linecap:round;
          stroke-linejoin:round
        }
        .space {
          fill:none;
          stroke:#172e24;
          stroke-width:9;
          stroke-linecap:round;
          stroke-linejoin:round
        }
        .fungus {
          fill:none;
          stroke:#739ab7;
          stroke-width:4;
          stroke-linecap:round;
          stroke-linejoin:round
        }
        .phosphate {
          fill:#d7d58e;
          transform:translate(114px,42px);
          animation:phosphate 14s linear infinite
        }
        .carbon {
          fill:#ed9f72;
          transform:translate(48px,94px);
          animation:carbon 14s linear infinite
        }
        @keyframes phosphate {
          0%,10% {
            opacity:1;
            transform:translate(12px,105px)
          }
          23% {
            opacity:1;
            transform:translate(48px,94px)
          }
          35% {
            opacity:1;
            transform:translate(82px,81px)
          }
          37% {
            opacity:1;
            transform:translate(86px,81px)
          }
          40% {
            opacity:1;
            transform:translate(90px,74px)
          }
          49% {
            opacity:1;
            transform:translate(96px,57px)
          }
          65%,90% {
            opacity:1;
            transform:translate(114px,42px)
          }
          98%,100% {
            opacity:0;
            transform:translate(114px,42px)
          }
        }
        @keyframes carbon {
          0%,30% {
            opacity:1;
            transform:translate(117px,94px)
          }
          46% {
            opacity:1;
            transform:translate(99px,82px)
          }
          54% {
            opacity:1;
            transform:translate(90px,74px)
          }
          59% {
            opacity:1;
            transform:translate(86px,81px)
          }
          62% {
            opacity:1;
            transform:translate(82px,81px)
          }
          80%,90% {
            opacity:1;
            transform:translate(48px,94px)
          }
          98%,100% {
            opacity:0;
            transform:translate(48px,94px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Mycorrhizal Exchange">
        <path class="cell" d="M78,75V24H128V116H78V87"/>
        <path class="membrane" d="M82,75V28H124V112H82V87"/>
        <path class="external" d="M12,105L48,94L82,81M28,116L48,94M16,78L48,94"/>
        <defs>
          <clipPath id="entry-clip">
            <rect x="82" y="0" width="58" height="140"/>
          </clipPath>
        </defs>
        <g clip-path="url(#entry-clip)">
          <path class="casing" d="M82,81L90,74L96,57L92,48M96,57L105,48M90,74L108,71L115,61M108,71L118,80M90,74L99,82"/>
          <path class="space" d="M82,81L90,74L96,57L92,48M96,57L105,48M90,74L108,71L115,61M108,71L118,80M90,74L99,82"/>
        </g>
        <path class="fungus" d="M82,81L90,74L96,57L92,48M96,57L105,48M90,74L108,71L115,61M108,71L118,80M90,74L99,82"/>
        <g class="phosphate">
          <circle r="2.4"/>
        </g>
        <g class="carbon">
          <path d="M-2.7,-2.7H2.7V2.7H-2.7Z"/>
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

if (!customElements.get("concept-mycorrhizal-exchange")) {
  customElements.define("concept-mycorrhizal-exchange", ConceptMycorrhizalExchange);
}
