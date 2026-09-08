// Least-Squares Regression. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptLeastSquaresRegression extends HTMLElement {
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
        .fit {
          stroke:#77c9ef;
          animation:fit 8s linear infinite;
        }
        @keyframes fit {
          0%,15% {
            d:path("M20 80L113 80");
          }
          65%,100% {
            d:path("M20 100.153L113 27.825");
          }
        }
        .q0 {
          animation:q0 8s linear infinite;
        }
        @keyframes q0 {
          0%,15% {
            d:path("M25,96V80H41V96Z");
          }
          64.187% {
            d: path("M25,96V96H25V96Z");
          }
          65%,100% {
            d:path("M25,96V96.265H25.265V96Z");
          }
        }
        .q1 {
          animation:q1 8s linear infinite;
        }
        @keyframes q1 {
          0%,15% {
            d:path("M43,76V80H47V76Z");
          }
          65%,100% {
            d:path("M43,76V82.266H49.266V76Z");
          }
        }
        .q2 {
          animation:q2 8s linear infinite;
        }
        @keyframes q2 {
          0%,15% {
            d:path("M61,84V80H65V84Z");
          }
          65%,100% {
            d:path("M61,84V68.267H76.733V84Z");
          }
        }
        .q3 {
          animation:q3 8s linear infinite;
        }
        @keyframes q3 {
          0%,15% {
            d:path("M79,43V80H42V43Z");
          }
          65%,100% {
            d:path("M79,43V54.268H67.732V43Z");
          }
        }
        .q4 {
          animation:q4 8s linear infinite;
        }
        @keyframes q4 {
          0%,15% {
            d:path("M100,40V80H60V40Z");
          }
          62.546% {
            d: path("M100,40V40H100V40Z");
          }
          65%,100% {
            d:path("M100,40V37.936H97.936V40Z");
          }
        }
        .square {
          fill:#f3c97722;
          stroke:#f3c977;
          stroke-width:1;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Least-Squares Regression">
        <path class="ink muted" d="M16 18V118H126"/>
        <path class="square q0" d="M25,96V96.265H25.265V96Z"/>
        <path class="square q1" d="M43,76V82.266H49.266V76Z"/>
        <path class="square q2" d="M61,84V68.267H76.733V84Z"/>
        <path class="square q3" d="M79,43V54.268H67.732V43Z"/>
        <path class="square q4" d="M100,40V37.936H97.936V40Z"/>
        <path class="ink fit" d="M20 100.153L113 27.825"/>
        <circle class="solid" cx="25" cy="96" r="3"/>
        <circle class="solid" cx="43" cy="76" r="3"/>
        <circle class="solid" cx="61" cy="84" r="3"/>
        <circle class="solid" cx="79" cy="43" r="3"/>
        <circle class="solid" cx="100" cy="40" r="3"/>
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

if (!customElements.get("concept-least-squares-regression")) {
  customElements.define("concept-least-squares-regression", ConceptLeastSquaresRegression);
}
