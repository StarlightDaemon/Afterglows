// Plosive Speech Release. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPlosiveSpeechRelease extends HTMLElement {
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
        .pressure {
          opacity:.12;
          animation:pressure 10s linear infinite
        }
        @keyframes pressure {
          0%,20% {
            opacity:.05
          }
          42%,50% {
            opacity:.5
          }
          60%,100% {
            opacity:.05
          }
        }
        .upper {
          animation:upper 10s linear infinite
        }
        .lower {
          animation:lower 10s linear infinite
        }
        .head {
          animation:head 10s linear infinite
        }
        .jaw {
          animation:jaw 10s linear infinite
        }
        @keyframes upper {
          0%,55%,100% {
            d:path("M25 49Q50 38 76 48Q88 54 95 61")
          }
          20%,50% {
            d:path("M25 49Q50 38 76 48Q88 54 95 67")
          }
        }
        @keyframes lower {
          0%,55%,100% {
            d:path("M95 73Q80 89 25 92")
          }
          20%,50% {
            d:path("M95 67Q80 89 25 92")
          }
        }
        @keyframes head {
          0%,55%,100% {
            d:path("M71 19Q87 26 87 40L101 48L92 52Q101 59 95 61")
          }
          20%,50% {
            d:path("M71 19Q87 26 87 40L101 48L92 52Q101 59 95 67")
          }
        }
        @keyframes jaw {
          0%,55%,100% {
            d:path("M95 73Q99 82 90 87Q84 104 62 105L58 110")
          }
          20%,50% {
            d:path("M95 67Q99 82 90 87Q84 104 62 105L58 110")
          }
        }
        .air {
          transform:translate(113px,67px);
          animation:air 10s linear infinite
        }
        .a2 {
          transform:translate(113px,63px);
          animation:air2 10s linear infinite
        }
        .a3 {
          transform:translate(113px,71px);
          animation:air3 10s linear infinite
        }
        .ghost {
          display:none;
          stroke-dasharray:2 3;
          opacity:.4
        }
        @media(prefers-reduced-motion:reduce) {
          .ghost {
            display:block
          }
        }
        .trace {
          animation:trace 10s linear infinite
        }
        @keyframes trace {
          0% {
            width:0
          }
          100% {
            width:100px
          }
        }
        @keyframes air {
          0%,51% {
            transform:translate(99px,67px);
            opacity:0
          }
          52% {
            transform:translate(101px,67px);
            opacity:1
          }
          63% {
            transform:translate(126px,67px);
            opacity:1
          }
          65%,100% {
            transform:translate(128px,67px);
            opacity:0
          }
        }
        @keyframes air2 {
          0%,51% {
            transform:translate(99px,67px);
            opacity:0
          }
          52% {
            transform:translate(101px,67px);
            opacity:1
          }
          63% {
            transform:translate(126px,62px);
            opacity:1
          }
          65%,100% {
            transform:translate(128px,62px);
            opacity:0
          }
        }
        @keyframes air3 {
          0%,51% {
            transform:translate(99px,67px);
            opacity:0
          }
          52% {
            transform:translate(101px,67px);
            opacity:1
          }
          63% {
            transform:translate(126px,72px);
            opacity:1
          }
          65%,100% {
            transform:translate(128px,72px);
            opacity:0
          }
        }
        .cavity {
          animation:cavity 10s linear infinite
        }
        @keyframes cavity {
          0%,55%,100% {
            d:path("M25 49Q50 38 76 48Q88 54 95 61V73Q80 89 25 92Z")
          }
          20%,50% {
            d:path("M25 49Q50 38 76 48Q88 54 95 67V67Q80 89 25 92Z")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Plosive Speech Release">
        <defs>
          <clipPath id="oral">
            <path class="cavity" d="M25 49Q50 38 76 48Q88 54 95 61V73Q80 89 25 92Z"/>
          </clipPath>
          <clipPath id="trace">
            <rect class="trace" x="20" y="109" width="100" height="22"/>
          </clipPath>
        </defs>
        <g clip-path="url(#oral)">
          <rect class="pressure" x="25" y="38" width="70" height="56" fill="#77c9ef"/>
        </g>
        <path class="ink upper" d="M25 49Q50 38 76 48Q88 54 95 61"/>
        <path class="ink lower" d="M95 73Q80 89 25 92"/>
        <path class="ink muted head" d="M71 19Q87 26 87 40L101 48L92 52Q101 59 95 61"/>
        <path class="ink muted jaw" d="M95 73Q99 82 90 87Q84 104 62 105L58 110"/>
        <path class="ink rose" style="fill:none" d="M31 86Q49 75 65 79Q75 80 82 84"/>
        <path class="ink ghost" d="M87 61Q95 62 95 67Q95 72 87 73"/>
        <g class="air">
          <path class="ink" d="M0 0H4m-2-2 2 2-2 2"/>
        </g>
        <g class="air a2">
          <path class="ink" d="M0 0H4"/>
        </g>
        <g class="air a3">
          <path class="ink" d="M0 0H4"/>
        </g>
        <path class="ink muted" d="M20 120H120"/>
        <path class="ink" clip-path="url(#trace)" d="M20 120H70L70.8 113 71.6 128 72.4 116 73.1 126 74 112 75 124 76 118 77 123 78 119 80 121 83 120H120"/>
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

if (!customElements.get("concept-plosive-speech-release")) {
  customElements.define("concept-plosive-speech-release", ConceptPlosiveSpeechRelease);
}
