// Liquid-Liquid Extraction. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptLiquidLiquidExtraction extends HTMLElement {
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
        .upper,.upper-drop {
          fill:#968963
        }
        .lower,.lower-drop {
          fill:#326677
        }
        .vessel {
          fill:none;
          stroke:#bed0c2;
          stroke-width:1.8
        }
        .stopcock {
          fill:#364a40;
          stroke:#b6c9b9;
          stroke-width:1.5
        }
        .solute {
          fill:#f2a2bf;
          stroke:#754d63;
          stroke-width:.5
        }
        .lower {
          animation:interface 14s ease-in-out infinite
        }
        .domains {
          opacity:0;
          animation:domains 14s linear infinite
        }
        @keyframes interface {
          0%,15%,65%,100% {
            d:path("M0,65Q20,65 40,65Q60,65 80,65Q100,65 120,65Q130,65 140,65V140H0Z")
          }
          30% {
            d:path("M0,65Q20,57 40,65Q60,73 80,65Q100,57 120,65Q130,73 140,65V140H0Z")
          }
          42% {
            d:path("M0,65Q20,73 40,65Q60,57 80,65Q100,73 120,65Q130,57 140,65V140H0Z")
          }
        }
        @keyframes domains {
          0%,17%,60%,100% {
            opacity:0
          }
          28%,42% {
            opacity:1
          }
        }
        .solute0 {
          transform:translate(53px,52px);
          animation:solute0 14s ease-in-out infinite
        }
        @keyframes solute0 {
          0%,20% {
            transform:translate(54px,72px)
          }
          42%,100% {
            transform:translate(53px,52px)
          }
        }
        .solute1 {
          transform:translate(65px,42px);
          animation:solute1 14s ease-in-out infinite
        }
        @keyframes solute1 {
          0%,23% {
            transform:translate(64px,73px)
          }
          45%,100% {
            transform:translate(65px,42px)
          }
        }
        .solute2 {
          transform:translate(82px,48px);
          animation:solute2 14s ease-in-out infinite
        }
        @keyframes solute2 {
          0%,26% {
            transform:translate(76px,75px)
          }
          48%,100% {
            transform:translate(82px,48px)
          }
        }
        .solute3 {
          transform:translate(91px,57px);
          animation:solute3 14s ease-in-out infinite
        }
        @keyframes solute3 {
          0%,29% {
            transform:translate(87px,71px)
          }
          51%,100% {
            transform:translate(91px,57px)
          }
        }
        .solute4 {
          transform:translate(66px,86px);
          animation:solute4 14s ease-in-out infinite
        }
        @keyframes solute4 {
          0%,32% {
            transform:translate(66px,86px)
          }
          54%,100% {
            transform:translate(66px,86px)
          }
        }
        .solute5 {
          transform:translate(75px,85px);
          animation:solute5 14s ease-in-out infinite
        }
        @keyframes solute5 {
          0%,35% {
            transform:translate(75px,85px)
          }
          57%,100% {
            transform:translate(75px,85px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Liquid-Liquid Extraction">
        <defs>
          <clipPath id="funnel">
            <path d="M50,18H90V31C114,45 109,74 77,94V104H63V94C31,74 26,45 50,31Z"/>
          </clipPath>
        </defs>
        <g clip-path="url(#funnel)">
          <path class="upper" d="M0,35H140V140H0Z"/>
          <path class="lower" d="M0,65Q20,65 40,65Q60,65 80,65Q100,65 120,65Q130,65 140,65V140H0Z"/>
          <g class="domains">
            <circle class="lower-drop" cx="55" cy="57" r="4"/>
            <circle class="lower-drop" cx="78" cy="55" r="3"/>
            <circle class="upper-drop" cx="61" cy="72" r="4"/>
            <circle class="upper-drop" cx="82" cy="75" r="3"/>
          </g>
          <circle class="solute solute0" cx="0" cy="0" r="2.4"/>
          <circle class="solute solute1" cx="0" cy="0" r="2.4"/>
          <circle class="solute solute2" cx="0" cy="0" r="2.4"/>
          <circle class="solute solute3" cx="0" cy="0" r="2.4"/>
          <circle class="solute solute4" cx="0" cy="0" r="2.4"/>
          <circle class="solute solute5" cx="0" cy="0" r="2.4"/>
        </g>
        <path class="vessel" d="M50,18H90V31C114,45 109,74 77,94V104H63V94C31,74 26,45 50,31Z"/>
        <rect class="stopcock" x="61" y="106" width="18" height="5" rx="2"/>
        <path class="vessel" d="M70,111V124M54,108H86M50,18V10H90V18"/>
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

if (!customElements.get("concept-liquid-liquid-extraction")) {
  customElements.define("concept-liquid-liquid-extraction", ConceptLiquidLiquidExtraction);
}
