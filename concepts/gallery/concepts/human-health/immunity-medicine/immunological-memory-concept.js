// Immunological Memory. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptImmunologicalMemory extends HTMLElement {
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
          fill:#446e65;
          stroke:#a0c3a8;
          stroke-width:1.5
        }
        .receptor {
          fill:none;
          stroke:#dfc580;
          stroke-width:1.8
        }
        .encounter {
          fill:#e1ac77;
          stroke:#ebcea1;
          stroke-width:1;
          animation:encounter 16s infinite
        }
        .naive {
          animation:naive 16s infinite
        }
        .memory {
          animation:memory 16s infinite
        }
        .memory-ring {
          fill:none;
          stroke:#e3c67d;
          stroke-width:1.2;
          stroke-dasharray:2 2
        }
        .effector {
          transform-box:fill-box;
          transform-origin:center;
          fill:#6a7290;
          stroke:#a8b1cc;
          stroke-width:1.5
        }
        .nucleus {
          fill:#3c4562;
          stroke:none
        }
        .rough-er {
          fill:none;
          stroke:#bac0d7;
          stroke-width:1
        }
        .antibodies {
          fill:none;
          stroke:#ead392;
          stroke-width:1.8;
          animation:antibodies 16s infinite
        }
        .quiet {
          stroke:#4a6759;
          stroke-width:1;
          stroke-dasharray:2 4;
          animation:quiet 16s infinite
        }
        @keyframes encounter {
          0%,9%,52%,59%,96%,100% {
            opacity:0;
            transform:translateY(-8px)
          }
          10%,42%,60%,78% {
            opacity:1;
            transform:translateY(0)
          }
        }
        @keyframes naive {
          0%,25% {
            opacity:1
          }
          36%,100% {
            opacity:0
          }
        }
        @keyframes memory {
          0%,32% {
            opacity:0
          }
          43%,100% {
            opacity:1
          }
        }
        @keyframes antibodies {
          0%,34%,56%,77%,100% {
            opacity:0;
            transform:translateY(10px)
          }
          43%,50% {
            opacity:.55;
            transform:translateY(0)
          }
          84%,95% {
            opacity:1;
            transform:translateY(-10px)
          }
        }
        @keyframes quiet {
          0%,49%,61%,100% {
            opacity:0
          }
          53%,57% {
            opacity:1
          }
        }
        .e0 {
          animation:e0 16s infinite
        }
        @keyframes e0 {
          0%,25% {
            opacity:0;
            transform:scale(.6);
            transform-box:fill-box;
            transform-origin:center
          }
          36%,43% {
            opacity:1;
            transform:scale(1)
          }
          53%,70% {
            opacity:0;
            transform:scale(.6)
          }
          80%,95% {
            opacity:1;
            transform:scale(1)
          }
          100% {
            opacity:0
          }
        }
        .e1 {
          animation:e1 16s infinite
        }
        @keyframes e1 {
          0%,25% {
            opacity:0;
            transform:scale(.6);
            transform-box:fill-box;
            transform-origin:center
          }
          36%,43% {
            opacity:1;
            transform:scale(1)
          }
          53%,70% {
            opacity:0;
            transform:scale(.6)
          }
          80%,95% {
            opacity:1;
            transform:scale(1)
          }
          100% {
            opacity:0
          }
        }
        .e2 {
          animation:e2 16s infinite
        }
        @keyframes e2 {
          0%,70% {
            opacity:0;
            transform:scale(.6);
            transform-box:fill-box;
            transform-origin:center
          }
          80%,95% {
            opacity:1;
            transform:scale(1)
          }
          100% {
            opacity:0
          }
        }
        .e3 {
          animation:e3 16s infinite
        }
        @keyframes e3 {
          0%,70% {
            opacity:0;
            transform:scale(.6);
            transform-box:fill-box;
            transform-origin:center
          }
          80%,95% {
            opacity:1;
            transform:scale(1)
          }
          100% {
            opacity:0
          }
        }
        .e4 {
          animation:e4 16s infinite
        }
        @keyframes e4 {
          0%,70% {
            opacity:0;
            transform:scale(.6);
            transform-box:fill-box;
            transform-origin:center
          }
          80%,95% {
            opacity:1;
            transform:scale(1)
          }
          100% {
            opacity:0
          }
        }
        .e5 {
          animation:e5 16s infinite
        }
        @keyframes e5 {
          0%,70% {
            opacity:0;
            transform:scale(.6);
            transform-box:fill-box;
            transform-origin:center
          }
          80%,95% {
            opacity:1;
            transform:scale(1)
          }
          100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Immunological Memory">
        <path class="encounter" d="M62 23L68 29L74 23Z"/>
        <g class="naive">
          <circle class="cell" cx="38" cy="61" r="10"/>
          <path class="receptor" d="M33 47L38 52L43 47M38 52V56"/>
        </g>
        <g class="memory">
          <circle class="cell" cx="21" cy="96" r="9"/>
          <circle class="memory-ring" cx="21" cy="96" r="12"/>
          <path class="receptor" d="M16 83L21 88L26 83M21 88V91"/>
        </g>
        <g class="effector e0">
          <ellipse cx="40" cy="76" rx="10" ry="12"/>
          <circle class="nucleus" cx="37" cy="80" r="4"/>
          <path class="rough-er" d="M35 70h10m-10 4h10"/>
        </g>
        <g class="effector e1">
          <ellipse cx="63" cy="94" rx="10" ry="12"/>
          <circle class="nucleus" cx="60" cy="98" r="4"/>
          <path class="rough-er" d="M58 88h10m-10 4h10"/>
        </g>
        <g class="effector e2">
          <ellipse cx="84" cy="76" rx="10" ry="12"/>
          <circle class="nucleus" cx="81" cy="80" r="4"/>
          <path class="rough-er" d="M79 70h10m-10 4h10"/>
        </g>
        <g class="effector e3">
          <ellipse cx="104" cy="94" rx="10" ry="12"/>
          <circle class="nucleus" cx="101" cy="98" r="4"/>
          <path class="rough-er" d="M99 88h10m-10 4h10"/>
        </g>
        <g class="effector e4">
          <ellipse cx="40" cy="108" rx="10" ry="12"/>
          <circle class="nucleus" cx="37" cy="112" r="4"/>
          <path class="rough-er" d="M35 102h10m-10 4h10"/>
        </g>
        <g class="effector e5">
          <ellipse cx="105" cy="61" rx="10" ry="12"/>
          <circle class="nucleus" cx="102" cy="65" r="4"/>
          <path class="rough-er" d="M100 55h10m-10 4h10"/>
        </g>
        <g class="antibodies">
          <path d="M51 43l3 4l3 -4m-3 4v6M86 39l3 4l3 -4m-3 4v6M109 30l3 4l3 -4m-3 4v6"/>
        </g>
        <path class="quiet" d="M17 127H123"/>
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

if (!customElements.get("concept-immunological-memory")) {
  customElements.define("concept-immunological-memory", ConceptImmunologicalMemory);
}
