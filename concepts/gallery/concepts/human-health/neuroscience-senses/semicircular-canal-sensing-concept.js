// Semicircular Canal Sensing. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSemicircularCanalSensing extends HTMLElement {
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
        .head {
          transform-origin:66px 65px;
          animation:head 12s linear infinite
        }
        .landmark {
          fill:#bf8da0
        }
        .canal {
          fill:none;
          stroke:#b39593;
          stroke-width:14
        }
        .inner {
          fill:none;
          stroke:#5b8e91;
          stroke-width:1
        }
        .fluid {
          fill:#a1d4de;
          transform-origin:66px 65px;
          animation:lag 12s linear infinite
        }
        .ampulla {
          fill:#375b5e;
          stroke:#b39593;
          stroke-width:2
        }
        .cupula {
          fill:#a9ce9577;
          stroke:#a4c3a0;
          stroke-width:1.3;
          animation:cupula 12s linear infinite
        }
        .crista {
          fill:#ac8b78
        }
        .hairs {
          fill:none;
          stroke:#f1d27d;
          stroke-width:1.7;
          animation:hairs 12s linear infinite
        }
        @keyframes head {
          0%,10% {
            transform:rotate(0)
          }
          65%,100% {
            transform:rotate(120deg)
          }
        }
        @keyframes lag {
          0%,10%,55%,65%,95%,100% {
            transform:rotate(0)
          }
          18% {
            transform:rotate(-9deg)
          }
          73% {
            transform:rotate(9deg)
          }
        }
        @keyframes cupula {
          0%,10%,55%,65%,95%,100% {
            d:path("M-11 9Q-12 1 -8 -10Q0 -14 8 -10Q12 1 11 9Z")
          }
          73% {
            d:path("M-11 9Q-16 1 -8 -10Q0 -14 8 -10Q6 1 11 9Z")
          }
          18% {
            d:path("M-11 9Q-6 1 -8 -10Q0 -14 8 -10Q16 1 11 9Z")
          }
        }
        @keyframes hairs {
          0%,10%,55%,65%,95%,100% {
            d:path("M-6 8V0M0 6V-3M6 8V0")
          }
          73% {
            d:path("M-6 8L-11 0M0 6L-5 -3M6 8L1 0")
          }
          18% {
            d:path("M-6 8L-1 0M0 6L5 -3M6 8L11 0")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Semicircular Canal Sensing">
        <path class="ink muted" d="M24 20Q67 -1 112 29M106 25L112 29L109 22"/>
        <g class="head">
          <path class="landmark" d="M54 11H78L72 18H60Z"/>
          <circle class="canal" cx="66" cy="65" r="34"/>
          <circle cx="66" cy="65" r="34" fill="none" stroke="#375b5e" stroke-width="9"/>
          <circle class="inner" cx="66" cy="65" r="28"/>
          <g class="fluid">
            <circle cx="66" cy="31" r="2"/>
            <circle cx="93.851" cy="45.498" r="2"/>
            <circle cx="60.096" cy="98.483" r="2"/>
            <circle cx="36.555" cy="82" r="2"/>
            <circle cx="34.05" cy="53.371" r="2"/>
            <circle cx="51.631" cy="34.186" r="2"/>
          </g>
          <g transform="translate(90 89) rotate(-42)">
            <ellipse class="ampulla" rx="14" ry="12"/>
            <path class="cupula" d="M-11 9Q-12 1 -8 -10Q0 -14 8 -10Q12 1 11 9Z"/>
            <path class="crista" d="M-11 10Q0 3 11 10Z"/>
            <path class="hairs" d="M-6 8V0M0 6V-3M6 8V0"/>
          </g>
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

if (!customElements.get("concept-semicircular-canal-sensing")) {
  customElements.define("concept-semicircular-canal-sensing", ConceptSemicircularCanalSensing);
}
