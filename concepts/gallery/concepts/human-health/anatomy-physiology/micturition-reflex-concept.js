// Micturition Reflex. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptMicturitionReflex extends HTMLElement {
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
        .ureter {
          fill:none;
          stroke:#96a995;
          stroke-width:4;
          stroke-linecap:round
        }
        .body {
          fill:#292e21
        }
        .shape {
          animation:shape 10s infinite
        }
        .wall {
          fill:none;
          stroke:#bc7d87;
          stroke-width:6;
          animation:outline 10s infinite
        }
        .urine {
          fill:#d6bf7088;
          animation:fill 10s infinite
        }
        .nerve {
          fill:none;
          stroke:#d8bf77;
          stroke-width:1.4;
          stroke-dasharray:2 2;
          opacity:.45
        }
        .afferent,.efferent,.drop {
          opacity:0
        }
        .afferent {
          animation:afferent 10s linear infinite
        }
        .efferent {
          animation:efferent 10s linear infinite
        }
        .sphincter {
          fill:none;
          stroke:#d5938d;
          stroke-width:3;
          animation:ring 10s infinite
        }
        .gate {
          fill:none;
          stroke:#d5938d;
          stroke-width:4;
          animation:gate 10s infinite
        }
        .drop {
          fill:#e3c679
        }
        .d1 {
          animation:d1 10s linear infinite
        }
        .d2 {
          animation:d2 10s linear infinite
        }
        @keyframes shape {
          0%,5%,100% {
            d:path("M62 104C52 89 43 75 45 56C46 36 94 36 95 56C97 76 88 89 78 104Z")
          }
          43%,58% {
            d:path("M62 104C23 91 19 48 41 32C57 19 75 19 99 32C121 48 117 91 78 104Z")
          }
          85% {
            d:path("M62 104C52 89 43 75 45 56C46 36 94 36 95 56C97 76 88 89 78 104Z")
          }
        }
        @keyframes outline {
          0%,5%,100% {
            d:path("M62 104C52 89 43 75 45 56C46 36 94 36 95 56C97 76 88 89 78 104")
          }
          43%,58% {
            d:path("M62 104C23 91 19 48 41 32C57 19 75 19 99 32C121 48 117 91 78 104")
          }
          85% {
            d:path("M62 104C52 89 43 75 45 56C46 36 94 36 95 56C97 76 88 89 78 104")
          }
        }
        @keyframes fill {
          0%,5%,100% {
            y:91px;
            height:43px
          }
          43%,58% {
            y:35px;
            height:99px
          }
          85% {
            y:104px;
            height:30px
          }
          92% {
            y:104px;
            height:30px
          }
        }
        @keyframes ring {
          0%,53%,100% {
            rx:11px;
            ry:4px
          }
          56%,88% {
            rx:15px;
            ry:7px
          }
          92% {
            rx:11px;
            ry:4px
          }
        }
        @keyframes gate {
          0%,53%,100% {
            d:path("M63 112H77")
          }
          56%,88% {
            d:path("M63 112H65M75 112H77")
          }
          92% {
            d:path("M63 112H77")
          }
        }
        @keyframes afferent {
          0%,40% {
            opacity:0;
            transform:translate(0,0)
          }
          41% {
            opacity:1;
            transform:translate(0,0)
          }
          44% {
            transform:translate(-7px,-27px)
          }
          49% {
            opacity:1;
            transform:translate(38px,-52px)
          }
          49.1%,100% {
            opacity:0
          }
        }
        @keyframes efferent {
          0%,49% {
            opacity:0;
            transform:translate(0,0)
          }
          50% {
            opacity:1;
            transform:translate(0,0)
          }
          52% {
            transform:translate(39px,17px)
          }
          55% {
            opacity:1;
            transform:translate(28px,71px)
          }
          55.1%,100% {
            opacity:0
          }
        }
        @keyframes d1 {
          0%,59% {
            opacity:0;
            transform:translateY(0)
          }
          60% {
            opacity:1;
            transform:translateY(0)
          }
          70% {
            opacity:1;
            transform:translateY(22px)
          }
          71%,100% {
            opacity:0
          }
        }
        @keyframes d2 {
          0%,73% {
            opacity:0;
            transform:translateY(0)
          }
          74% {
            opacity:1;
            transform:translateY(0)
          }
          84% {
            opacity:1;
            transform:translateY(22px)
          }
          85%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Micturition Reflex">
        <defs>
          <clipPath id="bladder">
            <path class="shape" d="M62 104C52 89 43 75 45 56C46 36 94 36 95 56C97 76 88 89 78 104Z"/>
          </clipPath>
        </defs>
        <path class="ureter" d="M45 13L51 52M95 13L89 52M63 102V131M77 102V131"/>
        <path class="body shape" d="M62 104C52 89 43 75 45 56C46 36 94 36 95 56C97 76 88 89 78 104Z"/>
        <g clip-path="url(#bladder)">
          <rect class="urine" x="18" y="91" width="104" height="43"/>
        </g>
        <path class="wall" d="M62 104C52 89 43 75 45 56C46 36 94 36 95 56C97 76 88 89 78 104"/>
        <path class="nerve" d="M24 65C8 55 13 16 62 13M77 13C130 15 128 70 105 84"/>
        <circle class="ink paper" cx="70" cy="13" r="7"/>
        <circle class="warm afferent" cx="24" cy="65" r="2.5"/>
        <circle class="warm efferent" cx="77" cy="13" r="2.5"/>
        <ellipse class="sphincter" cx="70" cy="112" rx="11" ry="4"/>
        <path class="gate" d="M63 112H77"/>
        <circle class="drop d1" cx="70" cy="110" r="2.5"/>
        <circle class="drop d2" cx="70" cy="110" r="2.5"/>
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

if (!customElements.get("concept-micturition-reflex")) {
  customElements.define("concept-micturition-reflex", ConceptMicturitionReflex);
}
