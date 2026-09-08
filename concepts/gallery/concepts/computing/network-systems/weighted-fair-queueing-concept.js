// Weighted Fair Queueing. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptWeightedFairQueueing extends HTMLElement {
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
        text {
          fill:#b6d4c6;
          font:9px monospace;
          text-anchor:middle
        }
        .tag {
          font-size:8px
        }
        .transfer {
          opacity:0
        }
        .b1 {
          opacity:.15;
          animation:q-b1 12s infinite
        }
        .tr-b1 {
          animation:tr-b1 12s linear infinite
        }
        .o-b1 {
          animation:o-b1 12s infinite
        }
        @keyframes q-b1 {
          0%,9.9% {
            opacity:1
          }
          10%,100% {
            opacity:.15
          }
        }
        @keyframes tr-b1 {
          0%,9.9% {
            opacity:0;
            transform:translate(0,0)
          }
          10% {
            opacity:1;
            transform:translate(0,0)
          }
          18% {
            opacity:1;
            transform:translate(-3px,41px)
          }
          18.1%,100% {
            opacity:0
          }
        }
        @keyframes o-b1 {
          0%,17.9% {
            opacity:.1
          }
          18%,100% {
            opacity:1
          }
        }
        .a1 {
          opacity:.15;
          animation:q-a1 12s infinite
        }
        .tr-a1 {
          animation:tr-a1 12s linear infinite
        }
        .o-a1 {
          animation:o-a1 12s infinite
        }
        @keyframes q-a1 {
          0%,17.9% {
            opacity:1
          }
          18%,100% {
            opacity:.15
          }
        }
        @keyframes tr-a1 {
          0%,17.9% {
            opacity:0;
            transform:translate(0,0)
          }
          18% {
            opacity:1;
            transform:translate(0,0)
          }
          26% {
            opacity:1;
            transform:translate(9px,89px)
          }
          26.1%,100% {
            opacity:0
          }
        }
        @keyframes o-a1 {
          0%,25.9% {
            opacity:.1
          }
          26%,100% {
            opacity:1
          }
        }
        .b2 {
          opacity:.15;
          animation:q-b2 12s infinite
        }
        .tr-b2 {
          animation:tr-b2 12s linear infinite
        }
        .o-b2 {
          animation:o-b2 12s infinite
        }
        @keyframes q-b2 {
          0%,25.9% {
            opacity:1
          }
          26%,100% {
            opacity:.15
          }
        }
        @keyframes tr-b2 {
          0%,25.9% {
            opacity:0;
            transform:translate(0,0)
          }
          26% {
            opacity:1;
            transform:translate(0,0)
          }
          42% {
            opacity:1;
            transform:translate(2px,41px)
          }
          42.1%,100% {
            opacity:0
          }
        }
        @keyframes o-b2 {
          0%,41.9% {
            opacity:.1
          }
          42%,100% {
            opacity:1
          }
        }
        .a2 {
          opacity:.15;
          animation:q-a2 12s infinite
        }
        .tr-a2 {
          animation:tr-a2 12s linear infinite
        }
        .o-a2 {
          animation:o-a2 12s infinite
        }
        @keyframes q-a2 {
          0%,41.9% {
            opacity:1
          }
          42%,100% {
            opacity:.15
          }
        }
        @keyframes tr-a2 {
          0%,41.9% {
            opacity:0;
            transform:translate(0,0)
          }
          42% {
            opacity:1;
            transform:translate(0,0)
          }
          50% {
            opacity:1;
            transform:translate(26px,89px)
          }
          50.1%,100% {
            opacity:0
          }
        }
        @keyframes o-a2 {
          0%,49.9% {
            opacity:.1
          }
          50%,100% {
            opacity:1
          }
        }
        .b3 {
          opacity:.15;
          animation:q-b3 12s infinite
        }
        .tr-b3 {
          animation:tr-b3 12s linear infinite
        }
        .o-b3 {
          animation:o-b3 12s infinite
        }
        @keyframes q-b3 {
          0%,49.9% {
            opacity:1
          }
          50%,100% {
            opacity:.15
          }
        }
        @keyframes tr-b3 {
          0%,49.9% {
            opacity:0;
            transform:translate(0,0)
          }
          50% {
            opacity:1;
            transform:translate(0,0)
          }
          58% {
            opacity:1;
            transform:translate(6px,41px)
          }
          58.1%,100% {
            opacity:0
          }
        }
        @keyframes o-b3 {
          0%,57.9% {
            opacity:.1
          }
          58%,100% {
            opacity:1
          }
        }
        .b4 {
          opacity:.15;
          animation:q-b4 12s infinite
        }
        .tr-b4 {
          animation:tr-b4 12s linear infinite
        }
        .o-b4 {
          animation:o-b4 12s infinite
        }
        @keyframes q-b4 {
          0%,57.9% {
            opacity:1
          }
          58%,100% {
            opacity:.15
          }
        }
        @keyframes tr-b4 {
          0%,57.9% {
            opacity:0;
            transform:translate(0,0)
          }
          58% {
            opacity:1;
            transform:translate(0,0)
          }
          66% {
            opacity:1;
            transform:translate(-1px,41px)
          }
          66.1%,100% {
            opacity:0
          }
        }
        @keyframes o-b4 {
          0%,65.9% {
            opacity:.1
          }
          66%,100% {
            opacity:1
          }
        }
        .a3 {
          opacity:.15;
          animation:q-a3 12s infinite
        }
        .tr-a3 {
          animation:tr-a3 12s linear infinite
        }
        .o-a3 {
          animation:o-a3 12s infinite
        }
        @keyframes q-a3 {
          0%,65.9% {
            opacity:1
          }
          66%,100% {
            opacity:.15
          }
        }
        @keyframes tr-a3 {
          0%,65.9% {
            opacity:0;
            transform:translate(0,0)
          }
          66% {
            opacity:1;
            transform:translate(0,0)
          }
          74% {
            opacity:1;
            transform:translate(43px,89px)
          }
          74.1%,100% {
            opacity:0
          }
        }
        @keyframes o-a3 {
          0%,73.9% {
            opacity:.1
          }
          74%,100% {
            opacity:1
          }
        }
        .b5 {
          opacity:.15;
          animation:q-b5 12s infinite
        }
        .tr-b5 {
          animation:tr-b5 12s linear infinite
        }
        .o-b5 {
          animation:o-b5 12s infinite
        }
        @keyframes q-b5 {
          0%,73.9% {
            opacity:1
          }
          74%,100% {
            opacity:.15
          }
        }
        @keyframes tr-b5 {
          0%,73.9% {
            opacity:0;
            transform:translate(0,0)
          }
          74% {
            opacity:1;
            transform:translate(0,0)
          }
          82% {
            opacity:1;
            transform:translate(4px,41px)
          }
          82.1%,100% {
            opacity:0
          }
        }
        @keyframes o-b5 {
          0%,81.9% {
            opacity:.1
          }
          82%,100% {
            opacity:1
          }
        }
        .q text {
          fill:#07120f
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Weighted Fair Queueing">
        <text x="70" y="15">A · weight 1</text>
        <text x="70" y="63">B · weight 2</text>
        <path class="ink muted" d="M12 44H125M12 92H125"/>
        <text x="70" y="106">finish order →</text>
        <g class="q a1">
          <rect x="17" y="26" width="12" height="13" rx="2" fill="#f3c977"/>
          <text class="tag" x="23" y="36" fill="#07120f">1</text>
        </g>
        <g class="q a2">
          <rect x="36" y="26" width="12" height="13" rx="2" fill="#f3c977"/>
          <text class="tag" x="42" y="36" fill="#07120f">2</text>
        </g>
        <g class="q a3">
          <rect x="55" y="26" width="12" height="13" rx="2" fill="#f3c977"/>
          <text class="tag" x="61" y="36" fill="#07120f">3</text>
        </g>
        <g class="q b1">
          <rect x="17" y="74" width="12" height="13" rx="2" fill="#77c9ef"/>
          <text class="tag" x="23" y="84" fill="#07120f">0.5</text>
        </g>
        <g class="q b2">
          <rect x="36" y="74" width="24" height="13" rx="2" fill="#77c9ef"/>
          <text class="tag" x="48" y="84" fill="#07120f">1.5</text>
        </g>
        <g class="q b3">
          <rect x="68" y="74" width="12" height="13" rx="2" fill="#77c9ef"/>
          <text class="tag" x="74" y="84" fill="#07120f">2</text>
        </g>
        <g class="q b4">
          <rect x="87" y="74" width="12" height="13" rx="2" fill="#77c9ef"/>
          <text class="tag" x="93" y="84" fill="#07120f">2.5</text>
        </g>
        <g class="q b5">
          <rect x="106" y="74" width="12" height="13" rx="2" fill="#77c9ef"/>
          <text class="tag" x="112" y="84" fill="#07120f">3</text>
        </g>
        <rect class="transfer tr-b1" x="17" y="74" width="12" height="13" rx="2" fill="#77c9ef"/>
        <rect class="out o-b1" x="14" y="115" width="11" height="13" fill="#77c9ef"/>
        <rect class="transfer tr-a1" x="17" y="26" width="12" height="13" rx="2" fill="#f3c977"/>
        <rect class="out o-a1" x="26" y="115" width="11" height="13" fill="#f3c977"/>
        <rect class="transfer tr-b2" x="36" y="74" width="24" height="13" rx="2" fill="#77c9ef"/>
        <rect class="out o-b2" x="38" y="115" width="23" height="13" fill="#77c9ef"/>
        <rect class="transfer tr-a2" x="36" y="26" width="12" height="13" rx="2" fill="#f3c977"/>
        <rect class="out o-a2" x="62" y="115" width="11" height="13" fill="#f3c977"/>
        <rect class="transfer tr-b3" x="68" y="74" width="12" height="13" rx="2" fill="#77c9ef"/>
        <rect class="out o-b3" x="74" y="115" width="11" height="13" fill="#77c9ef"/>
        <rect class="transfer tr-b4" x="87" y="74" width="12" height="13" rx="2" fill="#77c9ef"/>
        <rect class="out o-b4" x="86" y="115" width="11" height="13" fill="#77c9ef"/>
        <rect class="transfer tr-a3" x="55" y="26" width="12" height="13" rx="2" fill="#f3c977"/>
        <rect class="out o-a3" x="98" y="115" width="11" height="13" fill="#f3c977"/>
        <rect class="transfer tr-b5" x="106" y="74" width="12" height="13" rx="2" fill="#77c9ef"/>
        <rect class="out o-b5" x="110" y="115" width="11" height="13" fill="#77c9ef"/>
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

if (!customElements.get("concept-weighted-fair-queueing")) {
  customElements.define("concept-weighted-fair-queueing", ConceptWeightedFairQueueing);
}
