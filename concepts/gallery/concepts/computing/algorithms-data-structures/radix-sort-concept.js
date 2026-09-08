// Radix Sort. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptRadixSort extends HTMLElement {
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
        .k21 {
          transform:translate(80px,24px);
          animation:k21 10s linear infinite;
        }
        @keyframes k21 {
          0%,6% {
            transform:translate(20px,24px);
          }
          10%,32% {
            transform:translate(34px,69px);
          }
          38%,51% {
            transform:translate(20px,24px);
          }
          55%,80% {
            transform:translate(104px,69px);
          }
          88%,100% {
            transform:translate(80px,24px);
          }
        }
        .k12 {
          transform:translate(50px,24px);
          animation:k12 10s linear infinite;
        }
        @keyframes k12 {
          0%,12% {
            transform:translate(50px,24px);
          }
          16%,32% {
            transform:translate(104px,69px);
          }
          38%,63% {
            transform:translate(80px,24px);
          }
          67%,80% {
            transform:translate(34px,89px);
          }
          88%,100% {
            transform:translate(50px,24px);
          }
        }
        .k22 {
          transform:translate(110px,24px);
          animation:k22 10s linear infinite;
        }
        @keyframes k22 {
          0%,18% {
            transform:translate(80px,24px);
          }
          22%,32% {
            transform:translate(104px,89px);
          }
          38%,69% {
            transform:translate(110px,24px);
          }
          73%,80% {
            transform:translate(104px,89px);
          }
          88%,100% {
            transform:translate(110px,24px);
          }
        }
        .k11 {
          transform:translate(20px,24px);
          animation:k11 10s linear infinite;
        }
        @keyframes k11 {
          0%,24% {
            transform:translate(110px,24px);
          }
          28%,32% {
            transform:translate(34px,89px);
          }
          38%,57% {
            transform:translate(50px,24px);
          }
          61%,80% {
            transform:translate(34px,69px);
          }
          88%,100% {
            transform:translate(20px,24px);
          }
        }
        text {
          font:11px ui-monospace,monospace;
          fill:#e1f0e7;
          text-anchor:middle;
        }
        .bucket {
          font-size:14px;
          fill:#77c9ef;
        }
        .digit {
          fill:#f3c97744;
          animation:digit 10s steps(1,end) infinite;
        }
        @keyframes digit {
          0% {
            transform:translateX(10px);
          }
          46%,100% {
            transform:translateX(0);
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Radix Sort">
        <path class="ink muted" d="M19 56v47h31V56M89 56v47h31V56"/>
        <text class="bucket" x="34" y="121">1</text>
        <text class="bucket" x="104" y="121">2</text>
        <g class="key k21">
          <rect class="paper ink" x="-11" y="-9" width="22" height="18" rx="2"/>
          <rect class="digit" x="-9" y="-7" width="8" height="14"/>
          <text y="4">21</text>
        </g>
        <g class="key k12">
          <rect class="paper ink" x="-11" y="-9" width="22" height="18" rx="2"/>
          <rect class="digit" x="-9" y="-7" width="8" height="14"/>
          <text y="4">12</text>
        </g>
        <g class="key k22">
          <rect class="paper ink" x="-11" y="-9" width="22" height="18" rx="2"/>
          <rect class="digit" x="-9" y="-7" width="8" height="14"/>
          <text y="4">22</text>
        </g>
        <g class="key k11">
          <rect class="paper ink" x="-11" y="-9" width="22" height="18" rx="2"/>
          <rect class="digit" x="-9" y="-7" width="8" height="14"/>
          <text y="4">11</text>
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

if (!customElements.get("concept-radix-sort")) {
  customElements.define("concept-radix-sort", ConceptRadixSort);
}
