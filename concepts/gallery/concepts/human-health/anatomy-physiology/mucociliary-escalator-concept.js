// Mucociliary Escalator. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptMucociliaryEscalator extends HTMLElement {
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
        .epithelial {
          fill:#294e3e;
          stroke:#78a58d;
          stroke-width:1
        }
        .nucleus {
          fill:#af91b1;
          opacity:.7
        }
        .cilium {
          fill:none;
          stroke:#9dddb5;
          stroke-width:2;
          stroke-linecap:round;
          animation-duration:1.25s;
          animation-timing-function:linear;
          animation-iteration-count:infinite;
          animation-delay:var(--delay)
        }
        .mucus {
          animation:drift 5s linear infinite
        }
        .mucus>path:first-child {
          fill:#7ebfaf88;
          stroke:#99d2bc;
          stroke-width:1
        }
        .speck {
          fill:#e5bf72;
          stroke:#947741;
          stroke-width:.7
        }
        @keyframes drift {
          from {
            transform:translateX(0)
          }
          to {
            transform:translateX(42px)
          }
        }
        .c0 {
          animation-name:c0
        }
        @keyframes c0 {
          0%,100% {
            d:path("M15 97C15 84 9 77 7 69")
          }
          35% {
            d:path("M15 97C19 83 27 73 31 63")
          }
          50% {
            d:path("M15 97C30 98 33 88 24 85")
          }
          80% {
            d:path("M15 97C23 91 9 87 7 81")
          }
        }
        .c1 {
          animation-name:c1
        }
        @keyframes c1 {
          0%,100% {
            d:path("M29 97C29 84 23 77 21 69")
          }
          35% {
            d:path("M29 97C33 83 41 73 45 63")
          }
          50% {
            d:path("M29 97C44 98 47 88 38 85")
          }
          80% {
            d:path("M29 97C37 91 23 87 21 81")
          }
        }
        .c2 {
          animation-name:c2
        }
        @keyframes c2 {
          0%,100% {
            d:path("M43 97C43 84 37 77 35 69")
          }
          35% {
            d:path("M43 97C47 83 55 73 59 63")
          }
          50% {
            d:path("M43 97C58 98 61 88 52 85")
          }
          80% {
            d:path("M43 97C51 91 37 87 35 81")
          }
        }
        .c3 {
          animation-name:c3
        }
        @keyframes c3 {
          0%,100% {
            d:path("M57 97C57 84 51 77 49 69")
          }
          35% {
            d:path("M57 97C61 83 69 73 73 63")
          }
          50% {
            d:path("M57 97C72 98 75 88 66 85")
          }
          80% {
            d:path("M57 97C65 91 51 87 49 81")
          }
        }
        .c4 {
          animation-name:c4
        }
        @keyframes c4 {
          0%,100% {
            d:path("M71 97C71 84 65 77 63 69")
          }
          35% {
            d:path("M71 97C75 83 83 73 87 63")
          }
          50% {
            d:path("M71 97C86 98 89 88 80 85")
          }
          80% {
            d:path("M71 97C79 91 65 87 63 81")
          }
        }
        .c5 {
          animation-name:c5
        }
        @keyframes c5 {
          0%,100% {
            d:path("M85 97C85 84 79 77 77 69")
          }
          35% {
            d:path("M85 97C89 83 97 73 101 63")
          }
          50% {
            d:path("M85 97C100 98 103 88 94 85")
          }
          80% {
            d:path("M85 97C93 91 79 87 77 81")
          }
        }
        .c6 {
          animation-name:c6
        }
        @keyframes c6 {
          0%,100% {
            d:path("M99 97C99 84 93 77 91 69")
          }
          35% {
            d:path("M99 97C103 83 111 73 115 63")
          }
          50% {
            d:path("M99 97C114 98 117 88 108 85")
          }
          80% {
            d:path("M99 97C107 91 93 87 91 81")
          }
        }
        .c7 {
          animation-name:c7
        }
        @keyframes c7 {
          0%,100% {
            d:path("M113 97C113 84 107 77 105 69")
          }
          35% {
            d:path("M113 97C117 83 125 73 129 63")
          }
          50% {
            d:path("M113 97C128 98 131 88 122 85")
          }
          80% {
            d:path("M113 97C121 91 107 87 105 81")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Mucociliary Escalator">
        <path class="ink muted" d="M11 98H129"/>
        <path class="epithelial" d="M10 100Q18 95 26 100V127H10Z"/>
        <ellipse class="nucleus" cx="18" cy="114" rx="3.5" ry="5"/>
        <path class="epithelial" d="M27 100Q35 95 43 100V127H27Z"/>
        <ellipse class="nucleus" cx="35" cy="114" rx="3.5" ry="5"/>
        <path class="epithelial" d="M44 100Q52 95 60 100V127H44Z"/>
        <ellipse class="nucleus" cx="52" cy="114" rx="3.5" ry="5"/>
        <path class="epithelial" d="M61 100Q69 95 77 100V127H61Z"/>
        <ellipse class="nucleus" cx="69" cy="114" rx="3.5" ry="5"/>
        <path class="epithelial" d="M78 100Q86 95 94 100V127H78Z"/>
        <ellipse class="nucleus" cx="86" cy="114" rx="3.5" ry="5"/>
        <path class="epithelial" d="M95 100Q103 95 111 100V127H95Z"/>
        <ellipse class="nucleus" cx="103" cy="114" rx="3.5" ry="5"/>
        <path class="epithelial" d="M112 100Q120 95 128 100V127H112Z"/>
        <ellipse class="nucleus" cx="120" cy="114" rx="3.5" ry="5"/>
        <path class="cilium c0" style="--delay:0s" d="M15 97C19 83 27 73 31 63"/>
        <path class="cilium c1" style="--delay:-0.12s" d="M29 97C33 83 41 73 45 63"/>
        <path class="cilium c2" style="--delay:-0.24s" d="M43 97C47 83 55 73 59 63"/>
        <path class="cilium c3" style="--delay:-0.36s" d="M57 97C61 83 69 73 73 63"/>
        <path class="cilium c4" style="--delay:-0.48s" d="M71 97C75 83 83 73 87 63"/>
        <path class="cilium c5" style="--delay:-0.6s" d="M85 97C89 83 97 73 101 63"/>
        <path class="cilium c6" style="--delay:-0.72s" d="M99 97C103 83 111 73 115 63"/>
        <path class="cilium c7" style="--delay:-0.84s" d="M113 97C117 83 125 73 129 63"/>
        <g class="mucus">
          <path d="M-42 54Q-21 50 0 54T42 54T84 54T126 54T168 54V69H-42Z"/>
          <path class="speck" d="M-22 56L-18 54L-13 57L-15 63L-20 65L-23 60Z"/>
          <path class="speck" d="M20 56L24 54L29 57L27 63L22 65L19 60Z"/>
          <path class="speck" d="M62 56L66 54L71 57L69 63L64 65L61 60Z"/>
          <path class="speck" d="M104 56L108 54L113 57L111 63L106 65L103 60Z"/>
          <path class="speck" d="M146 56L150 54L155 57L153 63L148 65L145 60Z"/>
        </g>
        <path class="ink" d="M87 40H120M115 36L120 40L115 44"/>
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

if (!customElements.get("concept-mucociliary-escalator")) {
  customElements.define("concept-mucociliary-escalator", ConceptMucociliaryEscalator);
}
