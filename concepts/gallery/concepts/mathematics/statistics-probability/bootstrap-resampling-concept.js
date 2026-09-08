// Bootstrap Resampling. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBootstrapResampling extends HTMLElement {
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
        .copy00 {
          animation:copy00 9s linear infinite
        }
        @keyframes copy00 {
          0%,5% {
            transform:translate(0,0);
            opacity:0
          }
          7% {
            opacity:1
          }
          17%,94% {
            transform:translate(-3px,31px);
            opacity:1
          }
          100% {
            transform:translate(-3px,31px);
            opacity:0
          }
        }
        .copy01 {
          animation:copy01 9s linear infinite
        }
        @keyframes copy01 {
          0%,9% {
            transform:translate(0,0);
            opacity:0
          }
          11% {
            opacity:1
          }
          21%,94% {
            transform:translate(18px,31px);
            opacity:1
          }
          100% {
            transform:translate(18px,31px);
            opacity:0
          }
        }
        .copy02 {
          animation:copy02 9s linear infinite
        }
        @keyframes copy02 {
          0%,13% {
            transform:translate(0,0);
            opacity:0
          }
          15% {
            opacity:1
          }
          25%,94% {
            transform:translate(-21px,31px);
            opacity:1
          }
          100% {
            transform:translate(-21px,31px);
            opacity:0
          }
        }
        .mean0 {
          animation:mean0 9s linear infinite
        }
        @keyframes mean0 {
          0%,28% {
            opacity:0
          }
          33%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .copy10 {
          animation:copy10 9s linear infinite
        }
        @keyframes copy10 {
          0%,30% {
            transform:translate(0,0);
            opacity:0
          }
          32% {
            opacity:1
          }
          42%,94% {
            transform:translate(-33px,51px);
            opacity:1
          }
          100% {
            transform:translate(-33px,51px);
            opacity:0
          }
        }
        .copy11 {
          animation:copy11 9s linear infinite
        }
        @keyframes copy11 {
          0%,34% {
            transform:translate(0,0);
            opacity:0
          }
          36% {
            opacity:1
          }
          46%,94% {
            transform:translate(-42px,51px);
            opacity:1
          }
          100% {
            transform:translate(-42px,51px);
            opacity:0
          }
        }
        .copy12 {
          animation:copy12 9s linear infinite
        }
        @keyframes copy12 {
          0%,38% {
            transform:translate(0,0);
            opacity:0
          }
          40% {
            opacity:1
          }
          50%,94% {
            transform:translate(-21px,51px);
            opacity:1
          }
          100% {
            transform:translate(-21px,51px);
            opacity:0
          }
        }
        .mean1 {
          animation:mean1 9s linear infinite
        }
        @keyframes mean1 {
          0%,53% {
            opacity:0
          }
          58%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .copy20 {
          animation:copy20 9s linear infinite
        }
        @keyframes copy20 {
          0%,55% {
            transform:translate(0,0);
            opacity:0
          }
          57% {
            opacity:1
          }
          67%,94% {
            transform:translate(-3px,71px);
            opacity:1
          }
          100% {
            transform:translate(-3px,71px);
            opacity:0
          }
        }
        .copy21 {
          animation:copy21 9s linear infinite
        }
        @keyframes copy21 {
          0%,59% {
            transform:translate(0,0);
            opacity:0
          }
          61% {
            opacity:1
          }
          71%,94% {
            transform:translate(-12px,71px);
            opacity:1
          }
          100% {
            transform:translate(-12px,71px);
            opacity:0
          }
        }
        .copy22 {
          animation:copy22 9s linear infinite
        }
        @keyframes copy22 {
          0%,63% {
            transform:translate(0,0);
            opacity:0
          }
          65% {
            opacity:1
          }
          75%,94% {
            transform:translate(-21px,71px);
            opacity:1
          }
          100% {
            transform:translate(-21px,71px);
            opacity:0
          }
        }
        .mean2 {
          animation:mean2 9s linear infinite
        }
        @keyframes mean2 {
          0%,78% {
            opacity:0
          }
          83%,94% {
            opacity:1
          }
          100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Bootstrap Resampling">
        <g class="">
          <rect x="28" y="14" width="14" height="16" rx="3" fill="#70edb1"/>
          <text x="35" y="26" text-anchor="middle" fill="#07120f" font-size="12">1</text>
        </g>
        <g class="">
          <rect x="58" y="14" width="14" height="16" rx="3" fill="#77c9ef"/>
          <text x="65" y="26" text-anchor="middle" fill="#07120f" font-size="12">2</text>
        </g>
        <g class="">
          <rect x="88" y="14" width="14" height="16" rx="3" fill="#f3c977"/>
          <text x="95" y="26" text-anchor="middle" fill="#07120f" font-size="12">3</text>
        </g>
        <path class="ink muted" d="M23 119H115M32 116V122M70 116V122M108 116V122"/>
        <path class="ink muted" d="M19 44V62H83V44"/>
        <g class="copy00" transform="translate(-3 31)">
          <rect x="28" y="14" width="14" height="16" rx="3" fill="#70edb1"/>
          <text x="35" y="26" text-anchor="middle" fill="#07120f" font-size="12">1</text>
        </g>
        <g class="copy01" transform="translate(18 31)">
          <rect x="28" y="14" width="14" height="16" rx="3" fill="#70edb1"/>
          <text x="35" y="26" text-anchor="middle" fill="#07120f" font-size="12">1</text>
        </g>
        <g class="copy02" transform="translate(-21 31)">
          <rect x="88" y="14" width="14" height="16" rx="3" fill="#f3c977"/>
          <text x="95" y="26" text-anchor="middle" fill="#07120f" font-size="12">3</text>
        </g>
        <path class="ink muted" d="M88 53H108L57.333 119"/>
        <circle class="warm mean0" cx="57.333" cy="119" r="3"/>
        <path class="ink muted" d="M19 64V82H83V64"/>
        <g class="copy10" transform="translate(-33 51)">
          <rect x="58" y="14" width="14" height="16" rx="3" fill="#77c9ef"/>
          <text x="65" y="26" text-anchor="middle" fill="#07120f" font-size="12">2</text>
        </g>
        <g class="copy11" transform="translate(-42 51)">
          <rect x="88" y="14" width="14" height="16" rx="3" fill="#f3c977"/>
          <text x="95" y="26" text-anchor="middle" fill="#07120f" font-size="12">3</text>
        </g>
        <g class="copy12" transform="translate(-21 51)">
          <rect x="88" y="14" width="14" height="16" rx="3" fill="#f3c977"/>
          <text x="95" y="26" text-anchor="middle" fill="#07120f" font-size="12">3</text>
        </g>
        <path class="ink muted" d="M88 73H108L95.333 119"/>
        <circle class="warm mean1" cx="95.333" cy="119" r="3"/>
        <path class="ink muted" d="M19 84V102H83V84"/>
        <g class="copy20" transform="translate(-3 71)">
          <rect x="28" y="14" width="14" height="16" rx="3" fill="#70edb1"/>
          <text x="35" y="26" text-anchor="middle" fill="#07120f" font-size="12">1</text>
        </g>
        <g class="copy21" transform="translate(-12 71)">
          <rect x="58" y="14" width="14" height="16" rx="3" fill="#77c9ef"/>
          <text x="65" y="26" text-anchor="middle" fill="#07120f" font-size="12">2</text>
        </g>
        <g class="copy22" transform="translate(-21 71)">
          <rect x="88" y="14" width="14" height="16" rx="3" fill="#f3c977"/>
          <text x="95" y="26" text-anchor="middle" fill="#07120f" font-size="12">3</text>
        </g>
        <path class="ink muted" d="M88 93H108L70 119"/>
        <circle class="warm mean2" cx="70" cy="119" r="3"/>
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

if (!customElements.get("concept-bootstrap-resampling")) {
  customElements.define("concept-bootstrap-resampling", ConceptBootstrapResampling);
}
