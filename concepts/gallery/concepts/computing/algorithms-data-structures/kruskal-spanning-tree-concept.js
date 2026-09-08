// Kruskal Spanning Tree. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptKruskalSpanningTree extends HTMLElement {
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
        .e0 {
          stroke:#70edb1;
          opacity:1;
          animation:e0 9s steps(1,end) infinite;
        }
        @keyframes e0 {
          0% {
            opacity:0;
          }
          8% {
            opacity:1;
            stroke:#f3c977;
          }
          17%,100% {
            opacity:1;
            stroke:#70edb1;
          }
        }
        .t0 {
          animation:t0 9s steps(1,end) infinite;
        }
        @keyframes t0 {
          0% {
            fill:#6b8177;
          }
          8% {
            fill:#f3c977;
          }
          17%,100% {
            fill:#70edb1;
          }
        }
        .e1 {
          stroke:#70edb1;
          opacity:1;
          animation:e1 9s steps(1,end) infinite;
        }
        @keyframes e1 {
          0% {
            opacity:0;
          }
          23% {
            opacity:1;
            stroke:#f3c977;
          }
          32%,100% {
            opacity:1;
            stroke:#70edb1;
          }
        }
        .t1 {
          animation:t1 9s steps(1,end) infinite;
        }
        @keyframes t1 {
          0% {
            fill:#6b8177;
          }
          23% {
            fill:#f3c977;
          }
          32%,100% {
            fill:#70edb1;
          }
        }
        .e2 {
          stroke:#ed8eab;
          opacity:0.35;
          animation:e2 9s steps(1,end) infinite;
        }
        @keyframes e2 {
          0% {
            opacity:0;
          }
          38% {
            opacity:1;
            stroke:#f3c977;
          }
          47%,100% {
            opacity:0.35;
            stroke:#ed8eab;
          }
        }
        .t2 {
          animation:t2 9s steps(1,end) infinite;
        }
        @keyframes t2 {
          0% {
            fill:#6b8177;
          }
          38% {
            fill:#f3c977;
          }
          47%,100% {
            fill:#ed8eab;
          }
        }
        .e3 {
          stroke:#70edb1;
          opacity:1;
          animation:e3 9s steps(1,end) infinite;
        }
        @keyframes e3 {
          0% {
            opacity:0;
          }
          53% {
            opacity:1;
            stroke:#f3c977;
          }
          62%,100% {
            opacity:1;
            stroke:#70edb1;
          }
        }
        .t3 {
          animation:t3 9s steps(1,end) infinite;
        }
        @keyframes t3 {
          0% {
            fill:#6b8177;
          }
          53% {
            fill:#f3c977;
          }
          62%,100% {
            fill:#70edb1;
          }
        }
        .e4 {
          stroke:#70edb1;
          opacity:1;
          animation:e4 9s steps(1,end) infinite;
        }
        @keyframes e4 {
          0% {
            opacity:0;
          }
          68% {
            opacity:1;
            stroke:#f3c977;
          }
          77%,100% {
            opacity:1;
            stroke:#70edb1;
          }
        }
        .t4 {
          animation:t4 9s steps(1,end) infinite;
        }
        @keyframes t4 {
          0% {
            fill:#6b8177;
          }
          68% {
            fill:#f3c977;
          }
          77%,100% {
            fill:#70edb1;
          }
        }
        .e5 {
          opacity:0;
        }
        text {
          font:10px ui-monospace,monospace;
          fill:#d7ece1;
          text-anchor:middle;
        }
        .weight {
          paint-order:stroke;
          stroke:#07120f;
          stroke-width:3;
        }
        .edge {
          stroke-width:3;
        }
        .reject {
          stroke:#ed8eab;
          stroke-width:2;
          animation:reject 9s steps(1,end) infinite;
        }
        .offer {
          opacity:0;
          animation:offer 9s steps(1,end) infinite;
        }
        @keyframes reject {
          0% {
            opacity:0;
          }
          47%,100% {
            opacity:1;
          }
        }
        @keyframes offer {
          0%,8% {
            opacity:1;
            transform:translateX(19px);
          }
          23% {
            transform:translateX(39px);
          }
          38% {
            transform:translateX(59px);
          }
          53% {
            transform:translateX(79px);
          }
          68% {
            transform:translateX(99px);
          }
          80%,100% {
            opacity:0;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Kruskal Spanning Tree">
        <path class="ink muted" d="M27 28L104 26"/>
        <path class="ink edge e0" d="M27 28L104 26"/>
        <text class="weight" x="66" y="20">1</text>
        <text class="tray t0" x="19" y="128">1</text>
        <path class="ink muted" d="M104 26L68 60"/>
        <path class="ink edge e1" d="M104 26L68 60"/>
        <text class="weight" x="96" y="50">2</text>
        <text class="tray t1" x="39" y="128">2</text>
        <path class="ink muted" d="M27 28L68 60"/>
        <path class="ink edge e2" d="M27 28L68 60"/>
        <text class="weight" x="42" y="52">3</text>
        <text class="tray t2" x="59" y="128">3</text>
        <path class="ink muted" d="M68 60L111 91"/>
        <path class="ink edge e3" d="M68 60L111 91"/>
        <text class="weight" x="98" y="72">4</text>
        <text class="tray t3" x="79" y="128">4</text>
        <path class="ink muted" d="M111 91L28 91"/>
        <path class="ink edge e4" d="M111 91L28 91"/>
        <text class="weight" x="70" y="101">5</text>
        <text class="tray t4" x="99" y="128">5</text>
        <path class="ink muted" d="M27 28L28 91"/>
        <path class="ink edge e5" d="M27 28L28 91"/>
        <text class="weight" x="16" y="65">8</text>
        <text class="tray t5" x="119" y="128">8</text>
        <circle class="paper ink" cx="27" cy="28" r="7.5"/>
        <text x="27" y="31.5">A</text>
        <circle class="paper ink" cx="104" cy="26" r="7.5"/>
        <text x="104" y="29.5">B</text>
        <circle class="paper ink" cx="68" cy="60" r="7.5"/>
        <text x="68" y="63.5">C</text>
        <circle class="paper ink" cx="111" cy="91" r="7.5"/>
        <text x="111" y="94.5">D</text>
        <circle class="paper ink" cx="28" cy="91" r="7.5"/>
        <text x="28" y="94.5">E</text>
        <path class="reject" d="M50 40l7 7m-7 0l7 -7"/>
        <path class="ink offer" d="M0 112v4m-3 -3l3 3l3 -3"/>
        <path class="ink muted" d="M9 117H129V133H9Z"/>
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

if (!customElements.get("concept-kruskal-spanning-tree")) {
  customElements.define("concept-kruskal-spanning-tree", ConceptKruskalSpanningTree);
}
