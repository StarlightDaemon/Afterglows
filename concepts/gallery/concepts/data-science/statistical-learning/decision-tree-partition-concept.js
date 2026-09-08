// Decision Tree Partition. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptDecisionTreePartition extends HTMLElement {
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
        .root-split {
          stroke-dasharray:1;
          animation:root 8s linear infinite;
        }
        .child-split {
          animation:child 8s linear infinite;
        }
        .regions,.leaves {
          animation:leaves 8s linear infinite;
        }
        @keyframes root {
          0%,12% {
            stroke-dashoffset:1;
          }
          34%,100% {
            stroke-dashoffset:0;
          }
        }
        @keyframes child {
          0%,36% {
            opacity:0;
          }
          58%,100% {
            opacity:1;
          }
        }
        @keyframes leaves {
          0%,58% {
            opacity:0;
          }
          72%,100% {
            opacity:1;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Decision Tree Partition">
        <path class="ink muted" d="M18 16H122V86H18Z"/>
        <g class="regions">
          <path fill="#77c9ef16" d="M18 16H68V55H18Z M68 37H122V86H68Z"/>
          <path fill="#f3c97716" d="M18 55H68V86H18Z M68 16H122V37H68Z"/>
        </g>
        <circle class="cool" cx="28" cy="30" r="3.5"/>
        <circle class="cool" cx="48" cy="42" r="3.5"/>
        <circle class="cool" cx="37" cy="23" r="3.5"/>
        <path class="warm" d="M29 66l4 7h-8Z"/>
        <path class="warm" d="M55 62l4 7h-8Z"/>
        <path class="warm" d="M82 21l4 7h-8Z"/>
        <path class="warm" d="M110 24l4 7h-8Z"/>
        <circle class="cool" cx="88" cy="50" r="3.5"/>
        <circle class="cool" cx="107" cy="65" r="3.5"/>
        <circle class="cool" cx="81" cy="77" r="3.5"/>
        <path class="ink root-split" pathLength="1" d="M68 16V86"/>
        <path class="ink child-split" pathLength="1" d="M18 55H68M68 37H122"/>
        <circle class="paper ink" cx="70" cy="98" r="3"/>
        <path class="ink root-split" pathLength="1" d="M67 100L44 110M73 100L96 110"/>
        <g class="child-split">
          <circle class="paper ink" cx="44" cy="111" r="3"/>
          <circle class="paper ink" cx="96" cy="111" r="3"/>
          <path class="ink" pathLength="1" d="M42 114L33 125M46 114L55 125M94 114L85 125M98 114L107 125"/>
        </g>
        <g class="leaves">
          <circle class="cool" cx="33" cy="126" r="3"/>
          <path class="warm" d="M55 122l4 7h-8Z M85 122l4 7h-8Z"/>
          <circle class="cool" cx="107" cy="126" r="3"/>
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

if (!customElements.get("concept-decision-tree-partition")) {
  customElements.define("concept-decision-tree-partition", ConceptDecisionTreePartition);
}
