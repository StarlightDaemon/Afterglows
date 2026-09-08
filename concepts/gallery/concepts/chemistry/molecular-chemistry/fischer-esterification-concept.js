// Fischer Esterification. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptFischerEsterification extends HTMLElement {
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
        .bond,.pi,.acid-bond,.addition,.catalyst-bond,.water-new-bond,.alcohol-h-bond {
          fill:none;
          stroke:#afc6bd;
          stroke-width:1.5
        }
        .carbon {
          fill:#77c9ef;
          stroke:#b9dedb;
          stroke-width:.7
        }
        .oxygen {
          fill:#e1a0a6;
          stroke-width:1.2
        }
        .carbonyl-oxygen {
          stroke:#f5cad0
        }
        .acid-oxygen {
          stroke:#e5c17e
        }
        .alcohol-oxygen {
          stroke:#a5bce7
        }
        .hydrogen {
          fill:#e9eee2
        }
        .alkyl {
          fill:#516951;
          stroke:#a0b299;
          stroke-width:.8
        }
        text {
          font:7px sans-serif;
          fill:#e4e7d8;
          text-anchor:middle
        }
        .charge {
          stroke:#e5d6a6;
          stroke-width:1;
          fill:none
        }
        .pi {
          animation:pi 18s linear infinite
        }
        .acid-bond {
          opacity:0;
          animation:acid-bond 18s linear infinite
        }
        .addition {
          animation:addition 18s linear infinite
        }
        .catalyst-bond {
          opacity:0;
          animation:catalyst-bond 18s linear infinite
        }
        .water-group {
          transform:translate(25px,-5px);
          animation:water-group 18s linear infinite
        }
        .water-new-bond {
          animation:water-new-bond 18s linear infinite
        }
        .alcohol {
          transform:translate(-23px,-19px);
          animation:alcohol 18s linear infinite
        }
        .alcohol-h-bond {
          opacity:0;
          animation:alcohol-h-bond 18s linear infinite
        }
        .catalyst {
          transform:translate(65px,16px);
          animation:catalyst 18s linear infinite
        }
        .transferred {
          transform:translate(124px,75px);
          animation:transferred 18s linear infinite
        }
        .oa-charge {
          opacity:0;
          animation:oa-charge 18s linear infinite
        }
        .ob-charge {
          opacity:0;
          animation:ob-charge 18s linear infinite
        }
        .oc-charge {
          opacity:0;
          animation:oc-charge 18s linear infinite
        }
        .free-charge {
          animation:free-charge 18s linear infinite
        }
        @keyframes catalyst {
          0%,10% {
            transform:translate(65px,16px)
          }
          22%,80% {
            transform:translate(65px,29px)
          }
          90%,100% {
            transform:translate(65px,16px)
          }
        }
        @keyframes catalyst-bond {
          0%,10% {
            opacity:0;
            d:path('M65,40V16')
          }
          22%,80% {
            opacity:1;
            d:path('M65,40V29')
          }
          90%,100% {
            opacity:0;
            d:path('M65,40V16')
          }
        }
        @keyframes alcohol {
          0%,25% {
            transform:translate(0,0)
          }
          42%,100% {
            transform:translate(-23px,-19px)
          }
        }
        @keyframes addition {
          0%,25% {
            opacity:0;
            d:path('M65,66L105,108')
          }
          42%,100% {
            opacity:1;
            d:path('M65,66L82,89')
          }
        }
        @keyframes pi {
          0%,25% {
            opacity:1
          }
          42%,62% {
            opacity:0
          }
          76%,100% {
            opacity:1
          }
        }
        @keyframes acid-bond {
          0%,62% {
            opacity:1;
            d:path('M65,66L88,72')
          }
          76%,100% {
            opacity:0;
            d:path('M65,66L113,67')
          }
        }
        @keyframes alcohol-h-bond {
          0%,45% {
            opacity:1;
            d:path('M105,108L99,99')
          }
          58%,100% {
            opacity:0;
            d:path('M105,108L122,99')
          }
        }
        @keyframes water-new-bond {
          0%,45% {
            opacity:0;
            d:path('M88,72L76,80')
          }
          58%,100% {
            opacity:1;
            d:path('M88,72L99,80')
          }
        }
        @keyframes transferred {
          0%,25% {
            transform:translate(99px,99px)
          }
          42%,45% {
            transform:translate(76px,80px)
          }
          58%,62% {
            transform:translate(99px,80px)
          }
          76%,100% {
            transform:translate(124px,75px)
          }
        }
        @keyframes water-group {
          0%,62% {
            transform:translate(0,0)
          }
          76%,100% {
            transform:translate(25px,-5px)
          }
        }
        @keyframes oa-charge {
          0%,10% {
            opacity:0
          }
          22%,25% {
            opacity:1
          }
          42%,62% {
            opacity:0
          }
          76%,80% {
            opacity:1
          }
          90%,100% {
            opacity:0
          }
        }
        @keyframes oc-charge {
          0%,25% {
            opacity:0
          }
          42%,45% {
            opacity:1
          }
          58%,100% {
            opacity:0
          }
        }
        @keyframes ob-charge {
          0%,45% {
            opacity:0
          }
          58%,62% {
            opacity:1
          }
          76%,100% {
            opacity:0
          }
        }
        @keyframes free-charge {
          0%,10% {
            opacity:1
          }
          22%,80% {
            opacity:0
          }
          90%,100% {
            opacity:1
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Fischer Esterification">
        <path class="bond" d="M42,66H65V40"/>
        <path class="pi" d="M69,65V41"/>
        <path class="acid-bond" d="M65,66L88,72"/>
        <path class="addition" d="M65,66L82,89"/>
        <path class="catalyst-bond" d="M65,40V29"/>
        <g class="water-group">
          <path class="bond" d="M88,72L99,67"/>
          <path class="water-new-bond" d="M88,72L99,80"/>
          <circle class="oxygen acid-oxygen" cx="88" cy="72" r="4"/>
          <circle class="hydrogen" cx="99" cy="67" r="1.8"/>
          <path class="charge ob-charge" d="M91,63H95M93,61V65"/>
        </g>
        <g class="alcohol">
          <path class="bond" d="M105,108L121,112"/>
          <path class="alcohol-h-bond" d="M105,108L99,99"/>
          <circle class="oxygen alcohol-oxygen" cx="105" cy="108" r="4"/>
          <circle class="alkyl" cx="121" cy="112" r="5"/>
          <text x="121" y="114.5">R′</text>
          <path class="charge oc-charge" d="M110,101H114M112,99V103"/>
        </g>
        <circle class="carbon" cx="65" cy="66" r="4.5"/>
        <circle class="oxygen carbonyl-oxygen" cx="65" cy="40" r="4"/>
        <circle class="alkyl" cx="42" cy="66" r="5"/>
        <text x="42" y="68.5">R</text>
        <g class="catalyst">
          <circle class="hydrogen" r="1.8"/>
          <path class="charge free-charge" d="M3,-3H7M5,-5V-1"/>
        </g>
        <path class="charge oa-charge" d="M72,37H76M74,35V39"/>
        <circle class="hydrogen transferred" r="1.8"/>
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

if (!customElements.get("concept-fischer-esterification")) {
  customElements.define("concept-fischer-esterification", ConceptFischerEsterification);
}
