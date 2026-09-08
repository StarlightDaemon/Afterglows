// Backtracking Maze. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBacktrackingMaze extends HTMLElement {
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
        .wall {
          fill:none;
          stroke:#567466;
          stroke-width:20;
          stroke-linejoin:round;
          stroke-linecap:round;
        }
        .corridor {
          fill:none;
          stroke:#0a1a13;
          stroke-width:16;
          stroke-linejoin:round;
          stroke-linecap:round;
        }
        .successful {
          stroke-width:2.5;
          stroke-dasharray:160;
          stroke-dashoffset:0;
          animation:success 11s linear infinite;
        }
        .failed {
          fill:none;
          stroke:#ed8eab;
          stroke-width:1.5;
          stroke-dasharray:2 3;
          opacity:.45;
        }
        .failed1 {
          animation:failed1 11s steps(1,end) infinite;
        }
        .failed2 {
          animation:failed2 11s steps(1,end) infinite;
        }
        .trial {
          stroke:#f3c977;
          stroke-width:2.5;
        }
        .trial1 {
          stroke-dasharray:40;
          stroke-dashoffset:40;
          animation:trial1 11s linear infinite;
        }
        .trial2 {
          stroke-dasharray:20;
          stroke-dashoffset:20;
          animation:trial2 11s linear infinite;
        }
        .visitor {
          fill:#f3c977;
          transform:translate(100px,100px);
          animation:visitor 11s linear infinite;
        }
        @keyframes success {
          0% {
            stroke-dashoffset:160;
          }
          10%,30% {
            stroke-dashoffset:140;
          }
          44%,58% {
            stroke-dashoffset:100;
          }
          88%,100% {
            stroke-dashoffset:0;
          }
        }
        @keyframes trial1 {
          0%,10% {
            stroke-dashoffset:40;
          }
          18% {
            stroke-dashoffset:20;
          }
          22% {
            stroke-dashoffset:0;
          }
          26% {
            stroke-dashoffset:20;
          }
          30%,100% {
            stroke-dashoffset:40;
          }
        }
        @keyframes trial2 {
          0%,44% {
            stroke-dashoffset:20;
          }
          50%,54% {
            stroke-dashoffset:0;
          }
          58%,100% {
            stroke-dashoffset:20;
          }
        }
        @keyframes failed1 {
          0% {
            opacity:0;
          }
          30%,100% {
            opacity:.45;
          }
        }
        @keyframes failed2 {
          0% {
            opacity:0;
          }
          58%,100% {
            opacity:.45;
          }
        }
        @keyframes visitor {
          0% {
            transform:translate(20px,20px);
          }
          10% {
            transform:translate(40px,20px);
          }
          18% {
            transform:translate(60px,20px);
          }
          22% {
            transform:translate(60px,40px);
          }
          26% {
            transform:translate(60px,20px);
          }
          30% {
            transform:translate(40px,20px);
          }
          37% {
            transform:translate(40px,40px);
          }
          44% {
            transform:translate(40px,60px);
          }
          50% {
            transform:translate(60px,60px);
          }
          54% {
            transform:translate(60px,60px);
          }
          58% {
            transform:translate(40px,60px);
          }
          64% {
            transform:translate(40px,80px);
          }
          70% {
            transform:translate(60px,80px);
          }
          76% {
            transform:translate(80px,80px);
          }
          82% {
            transform:translate(80px,100px);
          }
          88% {
            transform:translate(100px,100px);
          }
          100% {
            transform:translate(100px,100px);
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Backtracking Maze">
        <path class="wall" d="M20 20H40V80H80V100H100 M40 20H60V40 M40 60H60"/>
        <path class="corridor" d="M20 20H40V80H80V100H100 M40 20H60V40 M40 60H60"/>
        <path class="failed failed1" d="M40 20H60V40"/>
        <path class="failed failed2" d="M40 60H60"/>
        <path class="ink successful" d="M20 20H40V80H80V100H100"/>
        <path class="ink trial trial1" d="M40 20H60V40"/>
        <path class="ink trial trial2" d="M40 60H60"/>
        <circle class="visitor" r="3"/>
        <circle class="solid" cx="20" cy="20" r="3"/>
        <path class="warm" d="M100 95l5 5l-5 5l-5 -5Z"/>
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

if (!customElements.get("concept-backtracking-maze")) {
  customElements.define("concept-backtracking-maze", ConceptBacktrackingMaze);
}
