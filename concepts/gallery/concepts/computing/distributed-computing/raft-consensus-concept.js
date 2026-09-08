// Raft Consensus. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptRaftConsensus extends HTMLElement {
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
          font:9px monospace;
          text-anchor:middle
        }
        .dark {
          fill:#07120f
        }
        .entry rect {
          fill:#70edb1
        }
        .e0 {
          animation:e0 12s infinite
        }
        .e1 {
          animation:e1 12s infinite
        }
        .e2 {
          animation:e2 12s infinite
        }
        .e0 rect {
          animation:fill0 12s infinite
        }
        .e1 rect {
          animation:fill1 12s infinite
        }
        .e2 rect {
          animation:fill2 12s infinite
        }
        .c0 {
          animation:c0 12s infinite
        }
        .c1 {
          animation:c1 12s infinite
        }
        .c2 {
          animation:c2 12s infinite
        }
        .crown {
          fill:#f3c977;
          animation:crown 12s infinite
        }
        .majority {
          animation:majority 12s infinite
        }
        .vote,.copy,.receipt,.notify {
          opacity:0
        }
        .vote {
          animation:vote 12s linear infinite
        }
        .b {
          animation:b 12s linear infinite
        }
        .c {
          animation:c 12s linear infinite
        }
        .receipt {
          animation:receipt 12s linear infinite
        }
        .notify {
          animation:notify 12s linear infinite
        }
        @keyframes e0 {
          0%,29.9% {
            opacity:0
          }
          30%,100% {
            opacity:1
          }
        }
        @keyframes e1 {
          0%,47.9% {
            opacity:0
          }
          48%,100% {
            opacity:1
          }
        }
        @keyframes e2 {
          0%,84.9% {
            opacity:0
          }
          85%,100% {
            opacity:1
          }
        }
        @keyframes fill0 {
          0%,57.9% {
            fill:#77c9ef
          }
          58%,100% {
            fill:#70edb1
          }
        }
        @keyframes fill1 {
          0%,69.9% {
            fill:#77c9ef
          }
          70%,100% {
            fill:#70edb1
          }
        }
        @keyframes fill2 {
          0%,85.9% {
            fill:#77c9ef
          }
          86%,100% {
            fill:#70edb1
          }
        }
        @keyframes c0 {
          0%,57.9% {
            transform:translateY(22px)
          }
          58%,100% {
            transform:translateY(0)
          }
        }
        @keyframes c1 {
          0%,69.9% {
            transform:translateY(22px)
          }
          70%,100% {
            transform:translateY(0)
          }
        }
        @keyframes c2 {
          0%,85.9% {
            transform:translateY(22px)
          }
          86%,100% {
            transform:translateY(0)
          }
        }
        @keyframes crown {
          0%,23.9% {
            opacity:0
          }
          24%,100% {
            opacity:1
          }
        }
        @keyframes majority {
          0%,57.9% {
            opacity:0
          }
          58%,100% {
            opacity:1
          }
        }
        @keyframes vote {
          0%,13% {
            opacity:0;
            transform:translateX(0)
          }
          14% {
            opacity:1;
            transform:translateX(0)
          }
          22% {
            opacity:1;
            transform:translateX(-45px)
          }
          22.1%,100% {
            opacity:0
          }
        }
        @keyframes b {
          0%,35% {
            opacity:0;
            transform:translate(0,0)
          }
          36% {
            opacity:1;
            transform:translate(0,0)
          }
          44% {
            opacity:1;
            transform:translate(45px,0)
          }
          48% {
            opacity:1;
            transform:translate(45px,18px)
          }
          48.1%,100% {
            opacity:0
          }
        }
        @keyframes c {
          0%,74% {
            opacity:0;
            transform:translate(0,0)
          }
          75% {
            opacity:1;
            transform:translate(0,0)
          }
          81% {
            opacity:1;
            transform:translate(90px,0)
          }
          85% {
            opacity:1;
            transform:translate(90px,18px)
          }
          85.1%,100% {
            opacity:0
          }
        }
        @keyframes receipt {
          0%,51% {
            opacity:0;
            transform:translateX(0)
          }
          52% {
            opacity:1;
            transform:translateX(0)
          }
          58% {
            opacity:1;
            transform:translateX(-45px)
          }
          58.1%,100% {
            opacity:0
          }
        }
        @keyframes notify {
          0%,59% {
            opacity:0;
            transform:translateX(0)
          }
          60% {
            opacity:1;
            transform:translateX(0)
          }
          70% {
            opacity:1;
            transform:translateX(45px)
          }
          70.1%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Raft Consensus">
        <text x="70" y="12">TERM 5</text>
        <g class="ink muted">
          <rect x="11" y="56" width="28" height="55" rx="3"/>
          <rect x="56" y="56" width="28" height="55" rx="3"/>
          <rect x="101" y="56" width="28" height="55" rx="3"/>
        </g>
        <text x="25" y="34">A</text>
        <rect class="solid" x="15" y="89" width="20" height="14" rx="2"/>
        <text class="dark" x="25" y="100">1</text>
        <g class="entry e0">
          <rect x="15" y="67" width="20" height="14" rx="2"/>
          <text class="dark" x="25" y="78">2</text>
        </g>
        <path class="ink commit c0" d="M11 63h28"/>
        <text x="70" y="34">B</text>
        <rect class="solid" x="60" y="89" width="20" height="14" rx="2"/>
        <text class="dark" x="70" y="100">1</text>
        <g class="entry e1">
          <rect x="60" y="67" width="20" height="14" rx="2"/>
          <text class="dark" x="70" y="78">2</text>
        </g>
        <path class="ink commit c1" d="M56 63h28"/>
        <text x="115" y="34">C</text>
        <rect class="solid" x="105" y="89" width="20" height="14" rx="2"/>
        <text class="dark" x="115" y="100">1</text>
        <g class="entry e2">
          <rect x="105" y="67" width="20" height="14" rx="2"/>
          <text class="dark" x="115" y="78">2</text>
        </g>
        <path class="ink commit c2" d="M101 63h28"/>
        <path class="crown" d="M16 22V16L21 19L25 14L29 19L34 16V22Z"/>
        <path class="ink majority" d="M11 49V44H84V49"/>
        <text class="majority" x="49" y="41">2 / 3</text>
        <circle class="warm vote" cx="70" cy="34" r="3"/>
        <g class="copy b">
          <rect class="cool" x="18" y="49" width="14" height="12" rx="2"/>
          <text class="dark" x="25" y="59">2</text>
        </g>
        <g class="copy c">
          <rect class="cool" x="18" y="49" width="14" height="12" rx="2"/>
          <text class="dark" x="25" y="59">2</text>
        </g>
        <circle class="warm receipt" cx="70" cy="57" r="3"/>
        <circle class="solid notify" cx="25" cy="63" r="3"/>
        <text x="70" y="130">stored → committed</text>
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

if (!customElements.get("concept-raft-consensus")) {
  customElements.define("concept-raft-consensus", ConceptRaftConsensus);
}
