// Pacinian Adaptation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPacinianAdaptation extends HTMLElement {
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
        .skin {
          fill:none;
          stroke:#8c696c;
          stroke-width:3;
          animation:skin 10s infinite
        }
        .lamellae {
          fill:#35574b;
          stroke:#94b493;
          stroke-width:1.5;
          transform-origin:61px 107px;
          animation:lamellae 10s infinite
        }
        .axon {
          animation:axon 10s infinite;
          fill:none;
          stroke:#96b894;
          stroke-width:5
        }
        .ending {
          animation:ending 10s infinite, center 10s infinite;
          fill:#e7ca7c;
        }
        .pad {
          fill:#b1a28c;
          animation:pad 10s infinite
        }
        .stem {
          stroke:#b1a28c;
          stroke-width:4;
          animation:pad 10s infinite
        }
        .burst {
          fill:none;
          stroke:#f3d680;
          stroke-width:5;
          stroke-dasharray:4 7 4 7 4 120;
          opacity:0
        }
        .b1 {
          animation:b1 10s linear infinite
        }
        .b2 {
          animation:b2 10s linear infinite
        }
        @keyframes pad {
          0%,10%,90%,100% {
            transform:translateY(0)
          }
          22%,72% {
            transform:translateY(28px)
          }
        }
        @keyframes skin {
          0%,10%,90%,100% {
            d:path("M11 40Q61 40 126 40")
          }
          22%,72% {
            d:path("M11 40Q61 74 126 40")
          }
        }
        @keyframes lamellae {
          0%,10%,90%,100% {
            transform:scale(1,1)
          }
          22%,72% {
            transform:scale(1.08,.72)
          }
        }
        @keyframes ending {
          0%,10%,45%,72%,95%,100% {
            rx:5px;
            ry:3px
          }
          22% {
            rx:8px;
            ry:1.6px
          }
          80% {
            rx:6px;
            ry:4px
          }
        }
        @keyframes b1 {
          0%,20% {
            opacity:0;
            stroke-dashoffset:27
          }
          22% {
            opacity:1;
            stroke-dashoffset:27
          }
          35% {
            opacity:1;
            stroke-dashoffset:-100
          }
          36%,100% {
            opacity:0
          }
        }
        @keyframes b2 {
          0%,75% {
            opacity:0;
            stroke-dashoffset:27
          }
          77% {
            opacity:1;
            stroke-dashoffset:27
          }
          90% {
            opacity:1;
            stroke-dashoffset:-100
          }
          91%,100% {
            opacity:0
          }
        }
        @keyframes center {
          0%,10%,90%,100% {
            cy:80px
          }
          22%,72% {
            cy:87.56px
          }
        }
        @keyframes axon {
          0%,10%,90%,100% {
            d:path("M61 80Q88 80 100 80H129")
          }
          22%,72% {
            d:path("M61 87.56Q88 87.56 100 80H129")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Pacinian Adaptation">
        <path class="skin" d="M11 40H126"/>
        <g class="lamellae">
          <ellipse cx="61" cy="80" rx="34" ry="27"/>
          <ellipse cx="61" cy="80" rx="28" ry="22.5"/>
          <ellipse cx="61" cy="80" rx="22" ry="18"/>
          <ellipse cx="61" cy="80" rx="16" ry="13.5"/>
          <ellipse cx="61" cy="80" rx="10" ry="9"/>
        </g>
        <path class="axon" d="M61 80Q88 80 100 80H129"/>
        <ellipse class="ending" cx="61" cy="80" rx="5" ry="3"/>
        <rect class="pad" x="43" y="20" width="36" height="10" rx="3"/>
        <path class="stem" d="M61 10V20"/>
        <path class="burst b1" pathLength="100" d="M101 80H128"/>
        <path class="burst b2" pathLength="100" d="M101 80H128"/>
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

if (!customElements.get("concept-pacinian-adaptation")) {
  customElements.define("concept-pacinian-adaptation", ConceptPacinianAdaptation);
}
