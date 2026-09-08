// Intestinal Segmentation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptIntestinalSegmentation extends HTMLElement {
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
          fill:#183328;
          stroke:#b5787f;
          stroke-width:8
        }
        .outline {
          fill:none;
          stroke:#dfaaa3;
          stroke-width:1.5
        }
        .shape {
          animation:segment 8s ease-in-out infinite
        }
        .contents {
          stroke:#173729;
          stroke-width:1;
          opacity:.85
        }
        .c0,.c3 {
          fill:#e9c178
        }
        .c1,.c4 {
          fill:#86c8b0
        }
        .c2,.c5 {
          fill:#b3a0c9
        }
        .c0 {
          animation:mix0 8s infinite
        }
        .c1 {
          animation:mix1 8s infinite
        }
        .c2 {
          animation:mix2 8s infinite
        }
        .c3 {
          animation:mix3 8s infinite
        }
        .c4 {
          animation:mix4 8s infinite
        }
        .c5 {
          animation:mix5 8s infinite
        }
        .mixing {
          stroke:#94bca6;
          opacity:.5
        }
        @keyframes segment {
          0%,10%,100% {
            d:path("M12 49C25 49 40 54 42 61C44 54 55 49 70 49C85 49 96 54 98 61C100 54 115 49 128 49V91C115 91 100 86 98 79C96 86 85 91 70 91C55 91 44 86 42 79C40 86 25 91 12 91Z")
          }
          40%,60% {
            d:path("M12 49C25 49 40 49 42 49C55 49 62 60 70 60C78 60 85 49 98 49C100 49 115 49 128 49V91C115 91 100 91 98 91C85 91 78 80 70 80C62 80 55 91 42 91C40 91 25 91 12 91Z")
          }
        }
        @keyframes mix0 {
          0%,100% {
            transform:translateX(0)
          }
          40%,60% {
            transform:translateX(7px)
          }
        }
        @keyframes mix1 {
          0%,100% {
            transform:translateX(0)
          }
          40%,60% {
            transform:translateX(-6px)
          }
        }
        @keyframes mix2 {
          0%,100% {
            transform:translateX(0)
          }
          40%,60% {
            transform:translateX(-8px)
          }
        }
        @keyframes mix3 {
          0%,100% {
            transform:translateX(0)
          }
          40%,60% {
            transform:translateX(8px)
          }
        }
        @keyframes mix4 {
          0%,100% {
            transform:translateX(0)
          }
          40%,60% {
            transform:translateX(6px)
          }
        }
        @keyframes mix5 {
          0%,100% {
            transform:translateX(0)
          }
          40%,60% {
            transform:translateX(-7px)
          }
        }
        .rim {
          fill:none;
          stroke:#b5787f;
          stroke-width:8
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Intestinal Segmentation">
        <defs>
          <clipPath id="lumen">
            <path class="shape" d="M12 49C25 49 40 54 42 61C44 54 55 49 70 49C85 49 96 54 98 61C100 54 115 49 128 49V91C115 91 100 86 98 79C96 86 85 91 70 91C55 91 44 86 42 79C40 86 25 91 12 91Z"/>
          </clipPath>
        </defs>
        <path class="wall shape" d="M12 49C25 49 40 54 42 61C44 54 55 49 70 49C85 49 96 54 98 61C100 54 115 49 128 49V91C115 91 100 86 98 79C96 86 85 91 70 91C55 91 44 86 42 79C40 86 25 91 12 91Z"/>
        <g clip-path="url(#lumen)">
          <path class="contents c0" d="M17 64Q25 55 33 66Q35 80 25 83Q14 80 17 64Z"/>
          <path class="contents c1" d="M36 64Q44 55 52 66Q54 80 44 83Q33 80 36 64Z"/>
          <path class="contents c2" d="M54 64Q62 55 70 66Q72 80 62 83Q51 80 54 64Z"/>
          <path class="contents c3" d="M72 64Q80 55 88 66Q90 80 80 83Q69 80 72 64Z"/>
          <path class="contents c4" d="M90 64Q98 55 106 66Q108 80 98 83Q87 80 90 64Z"/>
          <path class="contents c5" d="M109 64Q117 55 125 66Q127 80 117 83Q106 80 109 64Z"/>
        </g>
        <path class="rim shape" d="M12 49C25 49 40 54 42 61C44 54 55 49 70 49C85 49 96 54 98 61C100 54 115 49 128 49V91C115 91 100 86 98 79C96 86 85 91 70 91C55 91 44 86 42 79C40 86 25 91 12 91Z"/>
        <path class="outline shape" d="M12 49C25 49 40 54 42 61C44 54 55 49 70 49C85 49 96 54 98 61C100 54 115 49 128 49V91C115 91 100 86 98 79C96 86 85 91 70 91C55 91 44 86 42 79C40 86 25 91 12 91Z"/>
        <path class="ink mixing" d="M29 112H52M48 108L52 112L48 116M111 112H88M92 108L88 112L92 116"/>
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

if (!customElements.get("concept-intestinal-segmentation")) {
  customElements.define("concept-intestinal-segmentation", ConceptIntestinalSegmentation);
}
