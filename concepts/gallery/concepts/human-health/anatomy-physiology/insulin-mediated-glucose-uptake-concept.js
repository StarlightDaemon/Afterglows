// Insulin-Mediated Glucose Uptake. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptInsulinMediatedGlucoseUptake extends HTMLElement {
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
        .membrane {
          fill:none;
          stroke:#83aa88;
          stroke-width:3
        }
        .receptor {
          fill:none;
          stroke:#d99baf;
          stroke-width:4;
          stroke-linecap:round
        }
        .insulin {
          transform:translateY(8px);
          animation:dock 12s infinite
        }
        .signal {
          fill:none;
          stroke:#e2bc73;
          stroke-width:2;
          stroke-dasharray:4 5;
          opacity:0;
          animation:signal 12s infinite
        }
        .vesicle {
          transform-origin:83px 101px;
          opacity:0;
          animation:vesicle 12s infinite
        }
        .vesicle-wall {
          fill:#214539;
          stroke:#83aa88;
          stroke-width:2
        }
        .carrier {
          fill:none;
          stroke:#77c9ef;
          stroke-width:5;
          stroke-linecap:round
        }
        .surface-carriers {
          animation:insert 12s infinite
        }
        .gate {
          fill:none;
          stroke:#143e50;
          stroke-width:3;
          animation:gate 1.2s steps(2) infinite
        }
        .glucose {
          fill:#f3c977;
          animation:uptake 12s linear infinite
        }
        .g2 {
          animation-name:uptake2
        }
        .g3 {
          animation-name:uptake3
        }
        @keyframes dock {
          0% {
            transform:translateY(-12px)
          }
          15%,90% {
            transform:translateY(8px)
          }
          100% {
            transform:translateY(-12px)
          }
        }
        @keyframes signal {
          0%,17%,45%,100% {
            opacity:0
          }
          23%,36% {
            opacity:1
          }
        }
        @keyframes vesicle {
          0%,25% {
            opacity:1;
            transform:translateY(0) scaleY(1);
            transform-origin:83px 101px
          }
          43% {
            opacity:1;
            transform:translateY(-14px) scaleY(1)
          }
          50% {
            opacity:1;
            transform:translateY(-25px) scaleY(.35)
          }
          55%,100% {
            opacity:0;
            transform:translateY(-32px) scaleY(0)
          }
        }
        @keyframes insert {
          0%,49% {
            opacity:0
          }
          55%,100% {
            opacity:1
          }
        }
        @keyframes gate {
          0% {
            stroke-dasharray:3 0
          }
          100% {
            stroke-dasharray:1 2
          }
        }
        @keyframes uptake {
          0%,58% {
            transform:translateY(0)
          }
          78%,100% {
            transform:translateY(50px)
          }
        }
        @keyframes uptake2 {
          0%,65% {
            transform:translateY(0)
          }
          88%,100% {
            transform:translateY(70px)
          }
        }
        @keyframes uptake3 {
          0%,73% {
            transform:translateY(0)
          }
          95%,100% {
            transform:translateY(55px)
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .g1 {
            transform:translateY(50px)
          }
          .g2 {
            transform:translateY(70px)
          }
          .g3 {
            transform:translateY(55px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Insulin-Mediated Glucose Uptake">
        <path fill="#19382e" d="M12 69H128V127H12Z"/>
        <path class="membrane" d="M12 65H128M12 73H128"/>
        <path class="receptor" d="M28 60L21 52M28 60L35 52M28 60V82"/>
        <g class="insulin">
          <path fill="#ed8eab" d="M21 40L28 35L35 40L28 46Z"/>
        </g>
        <path class="signal" d="M28 83L45 94L72 101"/>
        <g class="vesicle">
          <circle class="vesicle-wall" cx="83" cy="101" r="18"/>
          <path class="carrier" d="M71 86V96M83 79V89M95 86V96"/>
        </g>
        <g class="surface-carriers">
          <path class="carrier" d="M71 61V77M83 61V77M95 61V77"/>
          <path class="gate" d="M68 68H74M80 68H86M92 68H98"/>
        </g>
        <g class="glucose g1">
          <path d="M67 43L71 40L75 43V48L71 51L67 48Z"/>
        </g>
        <g class="glucose g2">
          <path d="M79 32L83 29L87 32V37L83 40L79 37Z"/>
        </g>
        <g class="glucose g3">
          <path d="M91 45L95 42L99 45V50L95 53L91 50Z"/>
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

if (!customElements.get("concept-insulin-mediated-glucose-uptake")) {
  customElements.define("concept-insulin-mediated-glucose-uptake", ConceptInsulinMediatedGlucoseUptake);
}
