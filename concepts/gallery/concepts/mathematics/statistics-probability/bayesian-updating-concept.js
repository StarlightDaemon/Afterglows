// Bayesian Updating. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBayesianUpdating extends HTMLElement {
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
        .discard {
          animation:condition 8s linear infinite
        }
        .posterior {
          animation:normalize 8s ease-in-out infinite;
          transform-origin:70px 104px
        }
        .a {
          animation:posterior-a 8s ease-in-out infinite
        }
        .b {
          animation:posterior-b 8s ease-in-out infinite
        }
        @keyframes condition {
          0%,15% {
            opacity:0
          }
          35%,90% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        @keyframes normalize {
          0%,35% {
            opacity:0;
            transform:scaleY(.5)
          }
          60%,90% {
            opacity:1;
            transform:scaleY(1)
          }
          100% {
            opacity:0
          }
        }
        @keyframes posterior-a {
          0%,35% {
            width:50px
          }
          60%,100% {
            width:75px
          }
        }
        @keyframes posterior-b {
          0%,35% {
            x:70px;
            width:50px
          }
          60%,100% {
            x:95px;
            width:25px
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Bayesian Updating">
        <g class="prior">
          <rect x="20" y="18" width="50" height="44" fill="#70edb1"/>
          <rect x="70" y="18" width="50" height="44" fill="#77c9ef"/>
        </g>
        <g class="discard">
          <rect x="20" y="51" width="50" height="11" fill="#07120f" opacity=".8"/>
          <rect x="70" y="29" width="50" height="33" fill="#07120f" opacity=".8"/>
        </g>
        <path class="ink muted" d="M70 68V78M66 74L70 78L74 74"/>
        <g class="posterior">
          <rect class="a" x="20" y="87" width="75" height="34" fill="#70edb1"/>
          <rect class="b" x="95" y="87" width="25" height="34" fill="#77c9ef"/>
        </g>
        <path class="ink muted" d="M20 14V10H120V14M20 125V129H120V125"/>
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

if (!customElements.get("concept-bayesian-updating")) {
  customElements.define("concept-bayesian-updating", ConceptBayesianUpdating);
}
