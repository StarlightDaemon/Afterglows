// Projected Gradient Descent. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptProjectedGradientDescent extends HTMLElement {
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
        .t0 {
          animation:trial0 9s linear infinite
        }
        .c0 {
          animation:correct0 9s linear infinite
        }
        @keyframes trial0 {
          0%,0% {
            opacity:0
          }
          6%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        @keyframes correct0 {
          0%,9% {
            opacity:0
          }
          15%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .t1 {
          animation:trial1 9s linear infinite
        }
        .c1 {
          animation:correct1 9s linear infinite
        }
        @keyframes trial1 {
          0%,20% {
            opacity:0
          }
          26%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        @keyframes correct1 {
          0%,29% {
            opacity:0
          }
          35%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .t2 {
          animation:trial2 9s linear infinite
        }
        .c2 {
          animation:correct2 9s linear infinite
        }
        @keyframes trial2 {
          0%,40% {
            opacity:0
          }
          46%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        @keyframes correct2 {
          0%,49% {
            opacity:0
          }
          55%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .t3 {
          animation:trial3 9s linear infinite
        }
        .c3 {
          animation:correct3 9s linear infinite
        }
        @keyframes trial3 {
          0%,60% {
            opacity:0
          }
          66%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        @keyframes correct3 {
          0%,69% {
            opacity:0
          }
          75%,94% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .point {
          animation:project 9s linear infinite
        }
        @keyframes project {
          0% {
            transform:translate(0,0)
          }
          8% {
            transform:translate(38.5px,-39px)
          }
          16% {
            transform:translate(38.5px,-39px)
          }
          28% {
            transform:translate(57.75px,-58.5px)
          }
          36% {
            transform:translate(57.75px,-58.5px)
          }
          48% {
            transform:translate(67.375px,-68.25px)
          }
          56% {
            transform:translate(60px,-63px)
          }
          68% {
            transform:translate(68.5px,-70.5px)
          }
          76% {
            transform:translate(60px,-63px)
          }
          94%,100% {
            transform:translate(60px,-63px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Projected Gradient Descent">
        <defs>
          <clipPath id="domain">
            <rect x="14" y="14" width="114" height="114"/>
          </clipPath>
        </defs>
        <g class="ink muted" clip-path="url(#domain)">
          <circle cx="112" cy="25" r="32"/>
          <circle cx="112" cy="25" r="60"/>
          <circle cx="112" cy="25" r="88"/>
        </g>
        <rect x="25" y="40" width="70" height="72" fill="#70edb1" fill-opacity=".08" stroke="#70edb1"/>
        <path d="M108 25H116M112 21V29" stroke="#ed8eab"/>
        <path class="trial t0" d="M35 103L73.5 64" fill="none" stroke="#f3c977" stroke-width="1.8" stroke-dasharray="3 2"/>
        <circle class="t0" cx="73.5" cy="64" r="3" fill="#07120f" stroke="#f3c977"/>
        <path class="correction c0" d="M73.5 64L73.5 64" stroke="#77c9ef" stroke-width="3"/>
        <path class="trial t1" d="M73.5 64L92.75 44.5" fill="none" stroke="#f3c977" stroke-width="1.8" stroke-dasharray="3 2"/>
        <circle class="t1" cx="92.75" cy="44.5" r="3" fill="#07120f" stroke="#f3c977"/>
        <path class="correction c1" d="M92.75 44.5L92.75 44.5" stroke="#77c9ef" stroke-width="3"/>
        <path class="trial t2" d="M92.75 44.5L102.375 34.75" fill="none" stroke="#f3c977" stroke-width="1.8" stroke-dasharray="3 2"/>
        <circle class="t2" cx="102.375" cy="34.75" r="3" fill="#07120f" stroke="#f3c977"/>
        <path class="correction c2" d="M102.375 34.75L95 40" stroke="#77c9ef" stroke-width="3"/>
        <path class="trial t3" d="M95 40L103.5 32.5" fill="none" stroke="#f3c977" stroke-width="1.8" stroke-dasharray="3 2"/>
        <circle class="t3" cx="103.5" cy="32.5" r="3" fill="#07120f" stroke="#f3c977"/>
        <path class="correction c3" d="M103.5 32.5L95 40" stroke="#77c9ef" stroke-width="3"/>
        <circle class="point" cx="35" cy="103" r="4" fill="#70edb1" transform="translate(60 -63)"/>
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

if (!customElements.get("concept-projected-gradient-descent")) {
  customElements.define("concept-projected-gradient-descent", ConceptProjectedGradientDescent);
}
