// Clonal Selection. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptClonalSelection extends HTMLElement {
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
        .cell {
          fill:#456d65;
          stroke:#9dc3a5;
          stroke-width:1.5
        }
        .nucleus {
          fill:#636886
        }
        .receptor {
          fill:none;
          stroke:#e1c989;
          stroke-width:2
        }
        .antigen {
          fill:#e2ac79;
          stroke:#efd0a1;
          stroke-width:1;
          opacity:0;
          animation:bind 12s infinite
        }
        .selected {
          opacity:0;
          animation:selected 12s infinite
        }
        .daughters {
          opacity:0;
          animation:daughters 12s infinite
        }
        .grandchildren {
          animation:grandchildren 12s infinite
        }
        .helper {
          fill:none;
          stroke:#dc93b3;
          stroke-width:2;
          opacity:0;
          animation:helper 12s infinite
        }
        .d1,.d2,.g1,.g2,.g3,.g4 {
          transform-box:fill-box;
          transform-origin:center;
          animation:divide 12s infinite
        }
        .d1 {
          --from-x:21px;
          --from-y:-36px
        }
        .d2 {
          --from-x:-21px;
          --from-y:-36px
        }
        .g1 {
          --from-x:21px;
          --from-y:-25px
        }
        .g2 {
          --from-x:-6px;
          --from-y:-25px
        }
        .g3 {
          --from-x:6px;
          --from-y:-25px
        }
        .g4 {
          --from-x:-21px;
          --from-y:-25px
        }
        @keyframes bind {
          0%,5% {
            opacity:1;
            transform:translateY(-12px)
          }
          20%,32% {
            opacity:1;
            transform:translateY(10px)
          }
          38%,100% {
            opacity:0;
            transform:translateY(10px)
          }
        }
        @keyframes selected {
          0%,42% {
            opacity:1
          }
          50%,100% {
            opacity:0
          }
        }
        @keyframes daughters {
          0%,42% {
            opacity:0
          }
          50%,66% {
            opacity:1
          }
          75%,100% {
            opacity:0
          }
        }
        @keyframes grandchildren {
          0%,66% {
            opacity:0
          }
          75%,100% {
            opacity:1
          }
        }
        @keyframes helper {
          0%,25%,40%,100% {
            opacity:0
          }
          30%,35% {
            opacity:1
          }
        }
        @keyframes divide {
          0%,42% {
            transform:translate(var(--from-x),var(--from-y)) scale(.7);
            transform-box:fill-box;
            transform-origin:center
          }
          60%,100% {
            transform:translate(0,0) scale(1)
          }
        }
        .grandchildren .bcell {
          animation-name:divide-again
        }
        @keyframes divide-again {
          0%,66% {
            transform:translate(var(--from-x),var(--from-y)) scale(.7);
            transform-box:fill-box;
            transform-origin:center
          }
          84%,100% {
            transform:translate(0,0) scale(1)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Clonal Selection">
        <g class="bcell ">
          <circle class="cell" cx="25" cy="51" r="12"/>
          <circle class="nucleus" cx="25" cy="54" r="4"/>
          <path class="receptor" d="M21 31V37H29V31M25 38V43"/>
        </g>
        <g class="bcell ">
          <circle class="cell" cx="115" cy="51" r="12"/>
          <circle class="nucleus" cx="115" cy="54" r="4"/>
          <path class="receptor" d="M110 34Q115 42 120 34M115 38V43"/>
        </g>
        <path class="antigen" d="M65 23L70 28L75 23Z"/>
        <g class="selected">
          <g class="bcell ">
            <circle class="cell" cx="70" cy="51" r="12"/>
            <circle class="nucleus" cx="70" cy="54" r="4"/>
            <path class="receptor" d="M65 33L70 38L75 33M70 38V43"/>
          </g>
        </g>
        <g class="daughters">
          <g class="bcell d1">
            <circle class="cell" cx="49" cy="87" r="12"/>
            <circle class="nucleus" cx="49" cy="90" r="4"/>
            <path class="receptor" d="M44 69L49 74L54 69M49 74V79"/>
          </g>
          <g class="bcell d2">
            <circle class="cell" cx="91" cy="87" r="12"/>
            <circle class="nucleus" cx="91" cy="90" r="4"/>
            <path class="receptor" d="M86 69L91 74L96 69M91 74V79"/>
          </g>
        </g>
        <g class="grandchildren">
          <g class="bcell g1">
            <circle class="cell" cx="28" cy="112" r="12"/>
            <circle class="nucleus" cx="28" cy="115" r="4"/>
            <path class="receptor" d="M23 94L28 99L33 94M28 99V104"/>
          </g>
          <g class="bcell g2">
            <circle class="cell" cx="55" cy="112" r="12"/>
            <circle class="nucleus" cx="55" cy="115" r="4"/>
            <path class="receptor" d="M50 94L55 99L60 94M55 99V104"/>
          </g>
          <g class="bcell g3">
            <circle class="cell" cx="85" cy="112" r="12"/>
            <circle class="nucleus" cx="85" cy="115" r="4"/>
            <path class="receptor" d="M80 94L85 99L90 94M85 99V104"/>
          </g>
          <g class="bcell g4">
            <circle class="cell" cx="112" cy="112" r="12"/>
            <circle class="nucleus" cx="112" cy="115" r="4"/>
            <path class="receptor" d="M107 94L112 99L117 94M112 99V104"/>
          </g>
        </g>
        <path class="helper" d="M93 53L83 59M88 53H93V58"/>
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

if (!customElements.get("concept-clonal-selection")) {
  customElements.define("concept-clonal-selection", ConceptClonalSelection);
}
