// RNA Splicing. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptRnaSplicing extends HTMLElement {
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
        .exon {
          fill:none;
          stroke-width:4;
          stroke-linecap:round
        }
        .one {
          stroke:#81d1a4;
          animation:one 12s linear infinite
        }
        .two {
          stroke:#86b9d8;
          animation:two 12s linear infinite
        }
        .intron {
          fill:none;
          stroke:#e4be78;
          stroke-width:3;
          animation:intron 12s linear infinite
        }
        .branch {
          fill:#f2dba9;
          stroke:#9a7444;
          stroke-width:1;
          animation:branch 12s linear infinite
        }
        .released {
          transform:translateY(-12px);
          animation:release 12s linear infinite
        }
        .assembly {
          fill:none;
          stroke:#817094;
          stroke-width:8;
          stroke-linecap:round;
          opacity:0;
          animation:assembly 12s infinite
        }
        .join {
          fill:none;
          stroke:#c5e0bb;
          stroke-width:1.4;
          opacity:0;
          animation:join 12s infinite
        }
        @keyframes one {
          0%,10% {
            d:path("M15 70L43 70")
          }
          28% {
            d:path("M15 60L52 60")
          }
          38% {
            d:path("M15 70L60 70")
          }
          44% {
            d:path("M15 70L55 70")
          }
          62%,100% {
            d:path("M15 94L55 94")
          }
        }
        @keyframes two {
          0%,10% {
            d:path("M100 70L125 70")
          }
          28%,100% {
            d:path("M55 94L125 94")
          }
        }
        @keyframes intron {
          0%,10% {
            d:path("M43 70C51 70 58 70 66 70C75 70 84 70 92 70L100 70")
          }
          28% {
            d:path("M52 60C52 38 88 32 92 53C96 72 78 87 60 69L55 94")
          }
          38%,100% {
            d:path("M60 70C60 40 103 40 103 63C103 90 77 96 60 70L55 94")
          }
        }
        @keyframes branch {
          0%,10% {
            cx:92px;
            cy:70px
          }
          28% {
            cx:60px;
            cy:69px
          }
          38%,100% {
            cx:60px;
            cy:70px
          }
        }
        @keyframes release {
          0%,62% {
            transform:translateY(0)
          }
          78%,100% {
            transform:translateY(-12px)
          }
        }
        @keyframes assembly {
          0%,10%,72%,100% {
            opacity:0
          }
          25%,58% {
            opacity:.55
          }
        }
        @keyframes join {
          0%,61%,73%,100% {
            opacity:0
          }
          62%,68% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="RNA Splicing">
        <path class="exon one" d="M15 94L55 94"/>
        <path class="exon two" d="M55 94L125 94"/>
        <g class="released">
          <path class="intron" d="M60 70C60 40 103 40 103 63C103 90 77 96 60 70L55 94"/>
          <circle class="branch" cx="60" cy="70" r="2.8"/>
        </g>
        <path class="assembly" d="M45 52Q39 73 48 82M113 55Q121 74 105 86"/>
        <g class="join">
          <path d="M51 90L55 94L59 90M55 94V100"/>
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

if (!customElements.get("concept-rna-splicing")) {
  customElements.define("concept-rna-splicing", ConceptRnaSplicing);
}
