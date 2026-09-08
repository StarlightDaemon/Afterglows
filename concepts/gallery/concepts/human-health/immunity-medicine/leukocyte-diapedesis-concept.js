// Leukocyte Diapedesis. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptLeukocyteDiapedesis extends HTMLElement {
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
        .endo {
          fill:#588171;
          stroke:#91b59f;
          stroke-width:1.5
        }
        .left {
          animation:left 12s infinite
        }
        .right {
          animation:right 12s infinite
        }
        .endo-nucleus {
          fill:#344b50
        }
        .blood {
          fill:#b87f90;
          animation:blood 3s linear infinite
        }
        .traveler {
          animation:roll 12s infinite
        }
        .leukocyte {
          fill:#9fb7ac;
          stroke:#d2dac5;
          stroke-width:1.5;
          animation:squeeze 12s infinite
        }
        .nucleus {
          fill:#715f83;
          animation:nucleus 12s infinite
        }
        .tether {
          fill:none;
          stroke:#d7ba78;
          stroke-width:1.3;
          opacity:0;
          animation:tether 12s infinite
        }
        @keyframes blood {
          0% {
            transform:translateX(-15px)
          }
          100% {
            transform:translateX(15px)
          }
        }
        @keyframes roll {
          0% {
            transform:translateX(-53px)
          }
          28%,100% {
            transform:translateX(0)
          }
        }
        @keyframes squeeze {
          0%,28% {
            d:path("M68 64C68 57 73 52 80 52C87 52 92 57 92 64C92 71 87 76 80 76C73 76 68 71 68 64Z")
          }
          39% {
            d:path("M76 75C65 67 66 58 80 58C94 58 95 67 84 75C84 75 82 75 80 75C78 75 76 75 76 75Z")
          }
          58% {
            d:path("M76 77C72 65 70 60 80 60C90 60 88 65 84 77C84 88 87 109 80 109C73 109 76 88 76 77Z")
          }
          73% {
            d:path("M76 84C76 80 77 74 80 74C83 74 84 80 84 84C84 96 92 122 80 122C68 122 76 96 76 84Z")
          }
          78% {
            d:path("M76 103C76 97 77 92 80 92C83 92 84 97 84 103C84 112 90 122 80 122C70 122 76 112 76 103Z")
          }
          83%,100% {
            d:path("M68 110C68 103 73 98 80 98C87 98 92 103 92 110C92 117 87 122 80 122C73 122 68 117 68 110Z")
          }
        }
        @keyframes nucleus {
          0%,28% {
            cy:64px;
            rx:5px;
            ry:7px
          }
          39% {
            cy:66px;
            rx:7px;
            ry:4px
          }
          58% {
            cy:80px;
            rx:3px;
            ry:9px
          }
          83%,100% {
            cy:110px;
            rx:5px;
            ry:7px
          }
        }
        @keyframes left {
          0%,34%,94%,100% {
            width:70px
          }
          45%,84% {
            width:64px
          }
        }
        @keyframes right {
          0%,34%,94%,100% {
            x:80px;
            width:48px
          }
          45%,84% {
            x:86px;
            width:42px
          }
        }
        @keyframes tether {
          0%,8%,32%,100% {
            opacity:0
          }
          12%,26% {
            opacity:.8
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Leukocyte Diapedesis">
        <path fill="#203432" d="M10 15H128V76H10Z"/>
        <g class="blood">
          <ellipse cx="25" cy="34" rx="6" ry="3"/>
          <ellipse cx="65" cy="34" rx="6" ry="3"/>
          <ellipse cx="105" cy="34" rx="6" ry="3"/>
        </g>
        <rect class="endo left" x="10" y="76" width="70" height="14" rx="4"/>
        <rect class="endo right" x="80" y="76" width="48" height="14" rx="4"/>
        <ellipse class="endo-nucleus" cx="35" cy="83" rx="6" ry="2"/>
        <ellipse class="endo-nucleus" cx="107" cy="83" rx="6" ry="2"/>
        <g class="traveler">
          <path class="tether" d="M70 73L67 77M80 75V79M90 73L93 77"/>
          <path class="leukocyte" d="M68 110C68 103 73 98 80 98C87 98 92 103 92 110C92 117 87 122 80 122C73 122 68 117 68 110Z"/>
          <ellipse class="nucleus" cx="80" cy="110" rx="5" ry="7"/>
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

if (!customElements.get("concept-leukocyte-diapedesis")) {
  customElements.define("concept-leukocyte-diapedesis", ConceptLeukocyteDiapedesis);
}
