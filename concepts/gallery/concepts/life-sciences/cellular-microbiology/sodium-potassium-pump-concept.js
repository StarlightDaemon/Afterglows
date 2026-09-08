// Sodium-Potassium Pump. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSodiumPotassiumPump extends HTMLElement {
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
          fill:#1c3830
        }
        .protein {
          fill:#446352;
          stroke:#90bd98;
          stroke-width:2
        }
        .inward,.outward,.occluded {
          fill:#07120f
        }
        .inward {
          animation:inward 14s step-end infinite
        }
        .outward {
          opacity:0;
          animation:outward 14s step-end infinite
        }
        .occluded {
          opacity:0;
          animation:occluded 14s step-end infinite
        }
        .na {
          fill:#77c9ef
        }
        .k {
          fill:#f3c977
        }
        .phosphate {
          fill:#d697ba;
          opacity:0;
          animation:phosphate 14s linear infinite
        }
        @keyframes inward {
          0% {
            opacity:1
          }
          23% {
            opacity:0
          }
          78%,100% {
            opacity:1
          }
        }
        @keyframes outward {
          0% {
            opacity:0
          }
          35% {
            opacity:1
          }
          63%,100% {
            opacity:0
          }
        }
        @keyframes occluded {
          0% {
            opacity:0
          }
          23% {
            opacity:1
          }
          35% {
            opacity:0
          }
          63% {
            opacity:1
          }
          78%,100% {
            opacity:0
          }
        }
        @keyframes phosphate {
          0%,18%,72%,100% {
            opacity:0
          }
          23%,63% {
            opacity:1
          }
        }
        .na0 {
          transform:translate(44px,25px);
          animation:na0 14s linear infinite
        }
        @keyframes na0 {
          0%,5% {
            opacity:1;
            transform:translate(44px,112px)
          }
          10% {
            opacity:1;
            transform:translate(62px,105px)
          }
          20%,25% {
            opacity:1;
            transform:translate(62px,77px)
          }
          35% {
            opacity:1;
            transform:translate(62px,60px)
          }
          41% {
            opacity:1;
            transform:translate(62px,35px)
          }
          47%,90% {
            opacity:1;
            transform:translate(44px,25px)
          }
          98%,100% {
            opacity:0;
            transform:translate(44px,25px)
          }
        }
        .na1 {
          transform:translate(70px,25px);
          animation:na1 14s linear infinite
        }
        @keyframes na1 {
          0%,5% {
            opacity:1;
            transform:translate(70px,112px)
          }
          10% {
            opacity:1;
            transform:translate(70px,105px)
          }
          20%,25% {
            opacity:1;
            transform:translate(70px,69px)
          }
          35% {
            opacity:1;
            transform:translate(70px,60px)
          }
          41% {
            opacity:1;
            transform:translate(70px,35px)
          }
          47%,90% {
            opacity:1;
            transform:translate(70px,25px)
          }
          98%,100% {
            opacity:0;
            transform:translate(70px,25px)
          }
        }
        .na2 {
          transform:translate(96px,25px);
          animation:na2 14s linear infinite
        }
        @keyframes na2 {
          0%,5% {
            opacity:1;
            transform:translate(96px,112px)
          }
          10% {
            opacity:1;
            transform:translate(78px,105px)
          }
          20%,25% {
            opacity:1;
            transform:translate(78px,77px)
          }
          35% {
            opacity:1;
            transform:translate(78px,60px)
          }
          41% {
            opacity:1;
            transform:translate(78px,35px)
          }
          47%,90% {
            opacity:1;
            transform:translate(96px,25px)
          }
          98%,100% {
            opacity:0;
            transform:translate(96px,25px)
          }
        }
        .k0 {
          transform:translate(53px,114px);
          animation:k0 14s linear infinite
        }
        @keyframes k0 {
          0%,44% {
            opacity:1;
            transform:translate(53px,30px)
          }
          49% {
            opacity:1;
            transform:translate(65px,35px)
          }
          59%,63% {
            opacity:1;
            transform:translate(65px,60px)
          }
          76%,78% {
            opacity:1;
            transform:translate(65px,77px)
          }
          85% {
            opacity:1;
            transform:translate(65px,105px)
          }
          91% {
            opacity:1;
            transform:translate(53px,114px)
          }
          98%,100% {
            opacity:0;
            transform:translate(53px,114px)
          }
        }
        .k1 {
          transform:translate(87px,114px);
          animation:k1 14s linear infinite
        }
        @keyframes k1 {
          0%,44% {
            opacity:1;
            transform:translate(87px,30px)
          }
          49% {
            opacity:1;
            transform:translate(75px,35px)
          }
          59%,63% {
            opacity:1;
            transform:translate(75px,60px)
          }
          76%,78% {
            opacity:1;
            transform:translate(75px,77px)
          }
          85% {
            opacity:1;
            transform:translate(75px,105px)
          }
          91% {
            opacity:1;
            transform:translate(87px,114px)
          }
          98%,100% {
            opacity:0;
            transform:translate(87px,114px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Sodium-Potassium Pump">
        <path class="membrane" d="M12,55H128V80H12Z"/>
        <path class="ink muted" d="M12,55H128M12,80H128"/>
        <rect class="protein" x="49" y="43" width="42" height="55" rx="18"/>
        <path class="inward" d="M61,100V76Q70,61 79,76V100Z"/>
        <path class="outward" d="M61,39V61Q70,76 79,61V39Z"/>
        <ellipse class="occluded" cx="70" cy="69" rx="14" ry="18"/>
        <g class="phosphate">
          <circle cx="92" cy="90" r="4"/>
          <path class="ink" d="M83,88L89,90"/>
        </g>
        <circle class="na na0" cx="0" cy="0" r="3.4"/>
        <circle class="na na1" cx="0" cy="0" r="3.4"/>
        <circle class="na na2" cx="0" cy="0" r="3.4"/>
        <circle class="k k0" cx="0" cy="0" r="4"/>
        <circle class="k k1" cx="0" cy="0" r="4"/>
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

if (!customElements.get("concept-sodium-potassium-pump")) {
  customElements.define("concept-sodium-potassium-pump", ConceptSodiumPotassiumPump);
}
