// Two-Phase Commit. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptTwoPhaseCommit extends HTMLElement {
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
        text {
          fill:#b6d4c6;
          font:10px monospace;
          text-anchor:middle
        }
        .decision {
          font-size:8px;
          animation:decision 12s infinite
        }
        .durable {
          animation:decision 12s infinite
        }
        .participant rect {
          fill:#214c36;
          stroke:#70edb1;
          stroke-width:1.5;
          animation:state 12s infinite
        }
        .shackle {
          opacity:0;
          animation:shackle 12s infinite
        }
        .unlocked {
          animation:unlocked 12s infinite
        }
        .prepared {
          font-size:8px;
          opacity:0;
          animation:prepared 12s infinite
        }
        .committed {
          font-size:9px;
          animation:unlocked 12s infinite
        }
        .prepare,.vote,.commit {
          opacity:0
        }
        .pr0 {
          animation:pr0 12s linear infinite
        }
        .pr1 {
          animation:pr1 12s linear infinite
        }
        .v0 {
          animation:v0 12s linear infinite
        }
        .v1 {
          animation:v1 12s linear infinite
        }
        .m0 {
          animation:m0 12s linear infinite
        }
        .m1 {
          animation:m1 12s linear infinite
        }
        .decisions {
          opacity:.5;
          animation:decision 12s infinite
        }
        @keyframes state {
          0%,24.9% {
            fill:#10261e;
            stroke:#375b51
          }
          25%,77.9% {
            fill:#594922;
            stroke:#f3c977
          }
          78%,100% {
            fill:#214c36;
            stroke:#70edb1
          }
        }
        @keyframes shackle {
          0%,24.9% {
            opacity:0
          }
          25%,77.9% {
            opacity:1
          }
          78%,100% {
            opacity:0
          }
        }
        @keyframes unlocked {
          0%,77.9% {
            opacity:0
          }
          78%,100% {
            opacity:1
          }
        }
        @keyframes decision {
          0%,59.9% {
            opacity:0
          }
          60%,100% {
            opacity:1
          }
        }
        @keyframes prepared {
          0%,34.9% {
            opacity:0
          }
          35%,77.9% {
            opacity:1
          }
          78%,100% {
            opacity:0
          }
        }
        @keyframes pr0 {
          0%,9% {
            opacity:0;
            transform:translate(0,0)
          }
          10% {
            opacity:1;
            transform:translate(0,0)
          }
          25% {
            opacity:1;
            transform:translate(-33px,49px)
          }
          25.1%,100% {
            opacity:0
          }
        }
        @keyframes pr1 {
          0%,9% {
            opacity:0;
            transform:translate(0,0)
          }
          10% {
            opacity:1;
            transform:translate(0,0)
          }
          25% {
            opacity:1;
            transform:translate(33px,49px)
          }
          25.1%,100% {
            opacity:0
          }
        }
        @keyframes v0 {
          0%,29% {
            opacity:0;
            transform:translate(0,0)
          }
          30% {
            opacity:1;
            transform:translate(0,0)
          }
          40% {
            opacity:1;
            transform:translate(33px,-49px)
          }
          40.1%,100% {
            opacity:0
          }
        }
        @keyframes v1 {
          0%,34% {
            opacity:0;
            transform:translate(0,0)
          }
          35% {
            opacity:1;
            transform:translate(0,0)
          }
          45% {
            opacity:1;
            transform:translate(-33px,-49px)
          }
          45.1%,100% {
            opacity:0
          }
        }
        @keyframes m0 {
          0%,64% {
            opacity:0;
            transform:translate(0,0)
          }
          65% {
            opacity:1;
            transform:translate(0,0)
          }
          70% {
            transform:translate(-38px,-2px)
          }
          74% {
            transform:translate(-40px,18px)
          }
          78% {
            opacity:1;
            transform:translate(-29px,34px)
          }
          78.1%,100% {
            opacity:0
          }
        }
        @keyframes m1 {
          0%,64% {
            opacity:0;
            transform:translate(0,0)
          }
          65% {
            opacity:1;
            transform:translate(0,0)
          }
          70% {
            transform:translate(38px,-2px)
          }
          74% {
            transform:translate(40px,18px)
          }
          78% {
            opacity:1;
            transform:translate(29px,34px)
          }
          78.1%,100% {
            opacity:0
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Two-Phase Commit">
        <path class="ink muted" d="M65 35L32 84M75 35L108 84"/>
        <path class="ink decisions" d="M56 60C10 44 8 65 27 94M84 60C130 44 132 65 113 94"/>
        <circle class="ink paper" cx="70" cy="24" r="12"/>
        <text x="70" y="28">K</text>
        <rect class="ink paper" x="48" y="47" width="44" height="26" rx="3"/>
        <path class="ink durable" d="M51 77H89M51 80H89"/>
        <text class="decision" x="70" y="64">COMMIT</text>
        <g class="participant p0">
          <rect x="21" y="96" width="22" height="17" rx="3"/>
          <path class="ink shackle" d="M25 96V91a7 7 0 0 1 14 0V96"/>
          <path class="ink unlocked" d="M25 96V87a7 7 0 0 1 14 0"/>
          <text x="32" y="108">P</text>
        </g>
        <g class="participant p1">
          <rect x="97" y="96" width="22" height="17" rx="3"/>
          <path class="ink shackle" d="M101 96V91a7 7 0 0 1 14 0V96"/>
          <path class="ink unlocked" d="M101 96V87a7 7 0 0 1 14 0"/>
          <text x="108" y="108">Q</text>
        </g>
        <circle class="warm prepare pr0" cx="65" cy="35" r="3"/>
        <circle class="warm prepare pr1" cx="75" cy="35" r="3"/>
        <circle class="cool vote v0" cx="32" cy="84" r="3"/>
        <circle class="cool vote v1" cx="108" cy="84" r="3"/>
        <circle class="solid commit m0" cx="56" cy="60" r="3"/>
        <circle class="solid commit m1" cx="84" cy="60" r="3"/>
        <text class="prepared" x="70" y="132">PREPARED · WAIT</text>
        <text class="committed" x="70" y="132">COMMITTED</text>
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

if (!customElements.get("concept-two-phase-commit")) {
  customElements.define("concept-two-phase-commit", ConceptTwoPhaseCommit);
}
