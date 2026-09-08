// Heterogeneous Hydrogenation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptHeterogeneousHydrogenation extends HTMLElement {
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
        .metal {
          fill:#3f5d58;
          stroke:#8ca69b;
          stroke-width:1
        }
        .contacts {
          fill:none;
          stroke:#adbb99;
          stroke-width:1;
          stroke-dasharray:2 3;
          opacity:0;
          animation:contacts 14s linear infinite
        }
        .bond {
          fill:none;
          stroke:#a3d1c8;
          stroke-width:1.8
        }
        .second-bond {
          fill:none;
          stroke:#a3d1c8;
          stroke-width:1.6;
          opacity:0;
          animation:second-bond 14s linear infinite
        }
        .carbon {
          fill:#77c9ef;
          stroke:#b6e0e8;
          stroke-width:.7
        }
        .hydrogen {
          fill:#e6eee4
        }
        .ethene {
          transform:translateY(-10px);
          animation:ethene 14s linear infinite
        }
        .new-bond {
          fill:none;
          stroke:#a3d1c8;
          stroke-width:1.8;
          stroke-dasharray:100
        }
        .left-bond {
          animation:left-bond 14s linear infinite
        }
        .right-bond {
          animation:right-bond 14s linear infinite
        }
        .h-bond {
          fill:none;
          stroke:#e6eee4;
          stroke-width:1.5;
          opacity:0;
          animation:h-bond 14s linear infinite
        }
        .h1 {
          transform:translate(55px,48px);
          animation:h1 14s linear infinite
        }
        .h2 {
          transform:translate(85px,48px);
          animation:h2 14s linear infinite
        }
        @keyframes ethene {
          0%,20% {
            transform:translateY(0)
          }
          35%,65% {
            transform:translateY(27px)
          }
          85%,100% {
            transform:translateY(-10px)
          }
        }
        @keyframes second-bond {
          0%,45% {
            opacity:1
          }
          56%,100% {
            opacity:0
          }
        }
        @keyframes contacts {
          0%,35%,65%,100% {
            opacity:0
          }
          38%,62% {
            opacity:.8
          }
        }
        @keyframes left-bond {
          0%,45% {
            stroke-dashoffset:100
          }
          55%,100% {
            stroke-dashoffset:0
          }
        }
        @keyframes right-bond {
          0%,55% {
            stroke-dashoffset:100
          }
          65%,100% {
            stroke-dashoffset:0
          }
        }
        @keyframes h-bond {
          0%,5% {
            opacity:1;
            transform:translateY(0)
          }
          18% {
            opacity:1;
            transform:translateY(64px)
          }
          25%,100% {
            opacity:0;
            transform:translateY(64px)
          }
        }
        @keyframes h1 {
          0%,5% {
            transform:translate(103px,27px)
          }
          18%,25% {
            transform:translate(103px,91px)
          }
          45% {
            transform:translate(55px,91px)
          }
          55%,65% {
            transform:translate(55px,85px)
          }
          85%,100% {
            transform:translate(55px,48px)
          }
        }
        @keyframes h2 {
          0%,5% {
            transform:translate(113px,27px)
          }
          18%,25% {
            transform:translate(113px,91px)
          }
          45%,55% {
            transform:translate(85px,91px)
          }
          65% {
            transform:translate(85px,85px)
          }
          85%,100% {
            transform:translate(85px,48px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Heterogeneous Hydrogenation">
        <circle class="metal" cx="15" cy="104" r="8"/>
        <circle class="metal" cx="31" cy="104" r="8"/>
        <circle class="metal" cx="47" cy="104" r="8"/>
        <circle class="metal" cx="63" cy="104" r="8"/>
        <circle class="metal" cx="79" cy="104" r="8"/>
        <circle class="metal" cx="95" cy="104" r="8"/>
        <circle class="metal" cx="111" cy="104" r="8"/>
        <circle class="metal" cx="127" cy="104" r="8"/>
        <circle class="metal" cx="23" cy="119" r="8"/>
        <circle class="metal" cx="39" cy="119" r="8"/>
        <circle class="metal" cx="55" cy="119" r="8"/>
        <circle class="metal" cx="71" cy="119" r="8"/>
        <circle class="metal" cx="87" cy="119" r="8"/>
        <circle class="metal" cx="103" cy="119" r="8"/>
        <circle class="metal" cx="119" cy="119" r="8"/>
        <path class="contacts" d="M55,77V96M85,77V96"/>
        <g class="ethene">
          <path class="bond" d="M55,45H85M55,45L45,34M55,45L45,56M85,45L95,34M85,45L95,56"/>
          <path class="second-bond" d="M56,49H84"/>
          <path class="new-bond left-bond" pathLength="100" d="M55,45V58"/>
          <path class="new-bond right-bond" pathLength="100" d="M85,45V58"/>
          <circle class="carbon" cx="55" cy="45" r="4.5"/>
          <circle class="carbon" cx="85" cy="45" r="4.5"/>
          <circle class="hydrogen" cx="45" cy="34" r="2.8"/>
          <circle class="hydrogen" cx="45" cy="56" r="2.8"/>
          <circle class="hydrogen" cx="95" cy="34" r="2.8"/>
          <circle class="hydrogen" cx="95" cy="56" r="2.8"/>
        </g>
        <path class="h-bond" d="M103,27H113"/>
        <circle class="hydrogen h1" r="2.8"/>
        <circle class="hydrogen h2" r="2.8"/>
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

if (!customElements.get("concept-heterogeneous-hydrogenation")) {
  customElements.define("concept-heterogeneous-hydrogenation", ConceptHeterogeneousHydrogenation);
}
