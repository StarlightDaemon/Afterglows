// AVL Tree Rotation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAvlTreeRotation extends HTMLElement {
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
          animation:e0 8s ease-in-out infinite;
        }
        @keyframes e0 {
          0%,28% {
            d:path("M97 18L48 45");
          }
          65%,100% {
            d:path("M103 70L70 23");
          }
        }
        .e1 {
          animation:e1 8s ease-in-out infinite;
        }
        @keyframes e1 {
          0%,28% {
            d:path("M97 18L117 50");
          }
          65%,100% {
            d:path("M103 70L125 106");
          }
        }
        .e2 {
          animation:e2 8s ease-in-out infinite;
        }
        @keyframes e2 {
          0%,28% {
            d:path("M48 45L27 76");
          }
          65%,100% {
            d:path("M70 23L35 74");
          }
        }
        .e3 {
          animation:e3 8s ease-in-out infinite;
        }
        @keyframes e3 {
          0%,28% {
            d:path("M48 45L65 78");
          }
          65%,100% {
            d:path("M103 70L83 106");
          }
        }
        .e4 {
          animation:e4 8s ease-in-out infinite;
        }
        @keyframes e4 {
          0%,28% {
            d:path("M27 76L13 106");
          }
          65%,100% {
            d:path("M35 74L15 108");
          }
        }
        .n1 {
          transform:translate(15px,108px);
          animation:n1 8s ease-in-out infinite;
        }
        @keyframes n1 {
          0%,28% {
            transform:translate(13px,106px);
          }
          65%,100% {
            transform:translate(15px,108px);
          }
        }
        .n2 {
          transform:translate(35px,74px);
          animation:n2 8s ease-in-out infinite;
        }
        @keyframes n2 {
          0%,28% {
            transform:translate(27px,76px);
          }
          65%,100% {
            transform:translate(35px,74px);
          }
        }
        .n4 {
          transform:translate(70px,23px);
          animation:n4 8s ease-in-out infinite;
        }
        @keyframes n4 {
          0%,28% {
            transform:translate(48px,45px);
          }
          65%,100% {
            transform:translate(70px,23px);
          }
        }
        .n6 {
          transform:translate(83px,106px);
          animation:n6 8s ease-in-out infinite;
        }
        @keyframes n6 {
          0%,28% {
            transform:translate(65px,78px);
          }
          65%,100% {
            transform:translate(83px,106px);
          }
        }
        .n8 {
          transform:translate(103px,70px);
          animation:n8 8s ease-in-out infinite;
        }
        @keyframes n8 {
          0%,28% {
            transform:translate(97px,18px);
          }
          65%,100% {
            transform:translate(103px,70px);
          }
        }
        .n10 {
          transform:translate(125px,106px);
          animation:n10 8s ease-in-out infinite;
        }
        @keyframes n10 {
          0%,28% {
            transform:translate(117px,50px);
          }
          65%,100% {
            transform:translate(125px,106px);
          }
        }
        text {
          font:11px ui-monospace,monospace;
          fill:#e2f0e8;
          text-anchor:middle;
        }
        .beta {
          stroke:#77c9ef;
          stroke-width:2.5;
        }
        .order {
          font-size:10px;
          fill:#8ba69a;
        }
        .rotate {
          stroke:#f3c977;
          opacity:0;
          animation:rotate 8s linear infinite;
        }
        @keyframes rotate {
          0%,15% {
            opacity:0;
          }
          22%,55% {
            opacity:1;
          }
          65%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="AVL Tree Rotation">
        <path class="ink edge e0 " d="M103 70L70 23"/>
        <path class="ink edge e1 " d="M103 70L125 106"/>
        <path class="ink edge e2 " d="M70 23L35 74"/>
        <path class="ink edge e3 beta" d="M103 70L83 106"/>
        <path class="ink edge e4 " d="M35 74L15 108"/>
        <g class="node n1">
          <circle class="paper ink" r="8"/>
          <text y="4">1</text>
        </g>
        <g class="node n2">
          <circle class="paper ink" r="8"/>
          <text y="4">2</text>
        </g>
        <g class="node n4">
          <circle class="paper ink" r="8"/>
          <text y="4">4</text>
        </g>
        <g class="node n6">
          <circle class="paper ink" r="8"/>
          <text y="4">6</text>
        </g>
        <g class="node n8">
          <circle class="paper ink" r="8"/>
          <text y="4">8</text>
        </g>
        <g class="node n10">
          <circle class="paper ink" r="8"/>
          <text y="4">10</text>
        </g>
        <path class="ink rotate" d="M95 6C58 -1 37 9 40 29m-4 -4l4 4l3 -5"/>
        <text class="order" x="18" y="132">1</text>
        <text class="order" x="39" y="132">2</text>
        <text class="order" x="60" y="132">4</text>
        <text class="order" x="81" y="132">6</text>
        <text class="order" x="102" y="132">8</text>
        <text class="order" x="123" y="132">10</text>
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

if (!customElements.get("concept-avl-tree-rotation")) {
  customElements.define("concept-avl-tree-rotation", ConceptAvlTreeRotation);
}
