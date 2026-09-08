// Restriction-Ligation Cloning. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptRestrictionLigationCloning extends HTMLElement {
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
        .vector {
          fill:none;
          stroke:#80b4bd;
          stroke-width:2;
          stroke-linecap:butt
        }
        .old {
          opacity:0;
          animation:remove 12s infinite
        }
        .insert {
          animation:insert 12s infinite
        }
        .insert-dna {
          fill:none;
          stroke:#9bd29a;
          stroke-width:2
        }
        .cutters {
          fill:#79718b88;
          stroke:#b7a2c0;
          stroke-width:1;
          opacity:0;
          animation:cutters 12s infinite
        }
        .ligase {
          fill:none;
          stroke:#c7dcb0;
          stroke-width:1.5;
          opacity:0;
          animation:seal 12s infinite
        }
        .paired-ends {
          fill:none;
          stroke:#9fba95;
          stroke-width:1;
          animation:paired-ends 12s step-end infinite
        }
        .nicks {
          fill:#07120f;
          opacity:0;
          animation:nicks 12s step-end infinite
        }
        @keyframes paired-ends {
          0% {
            opacity:1
          }
          25% {
            opacity:0
          }
          65%,100% {
            opacity:1
          }
        }
        @keyframes nicks {
          0% {
            opacity:0
          }
          25% {
            opacity:1
          }
          78%,100% {
            opacity:0
          }
        }
        @keyframes remove {
          0%,25% {
            opacity:1;
            transform:translate(0,0)
          }
          40% {
            opacity:0;
            transform:translate(-25px,-22px)
          }
          100% {
            opacity:0
          }
        }
        @keyframes insert {
          0%,32% {
            opacity:0;
            transform:translateY(-18px)
          }
          40% {
            opacity:1;
            transform:translateY(-18px)
          }
          65%,100% {
            opacity:1;
            transform:translateY(0)
          }
        }
        @keyframes cutters {
          0%,8%,31%,100% {
            opacity:0
          }
          15%,24% {
            opacity:.8
          }
        }
        @keyframes seal {
          0%,65%,85%,100% {
            opacity:0
          }
          69%,78% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Restriction-Ligation Cloning">
        <path class="vector" d="M50.8 45.24Q48.4 47.8 46 51C5 78 29 125 70 122C111 125 135 78 94 51Q91.6 47.8 89.2 45.24M49 55C14 78 34 118 70 115C106 118 126 78 91 55"/>
        <g class="old">
          <path class="vector" d="M50.8 45.24Q70 24.76 89.2 45.24M49 55Q70 27 91 55"/>
        </g>
        <g class="insert">
          <path class="insert-dna" d="M50.8 45.24Q70 24.76 89.2 45.24M49 55Q70 27 91 55"/>
        </g>
        <path class="paired-ends" d="M47.2 49.44L50.05 53.635M48.88 47.39L51.52 51.8416M50.56 45.4976L52.99 50.1854M89.44 45.4976L87.01 50.185M91.12 47.3904L88.48 51.8416M92.8 49.44L89.95 53.635"/>
        <g class="nicks">
          <circle cx="50.8" cy="45.24" r="1.15"/>
          <circle cx="89.2" cy="45.24" r="1.15"/>
          <circle cx="49" cy="55" r="1.15"/>
          <circle cx="91" cy="55" r="1.15"/>
        </g>
        <g class="cutters">
          <ellipse cx="49.9" cy="50.1" rx="8" ry="10"/>
          <ellipse cx="90.1" cy="50.1" rx="8" ry="10"/>
        </g>
        <g class="ligase">
          <circle cx="50.8" cy="45.24" r="3"/>
          <circle cx="49" cy="55" r="3"/>
          <circle cx="89.2" cy="45.24" r="3"/>
          <circle cx="91" cy="55" r="3"/>
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

if (!customElements.get("concept-restriction-ligation-cloning")) {
  customElements.define("concept-restriction-ligation-cloning", ConceptRestrictionLigationCloning);
}
