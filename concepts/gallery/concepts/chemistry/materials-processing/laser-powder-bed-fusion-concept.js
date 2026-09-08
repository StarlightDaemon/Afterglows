// Laser Powder Bed Fusion. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptLaserPowderBedFusion extends HTMLElement {
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
        .cycle {
          animation:reset 20s linear infinite
        }
        @keyframes reset {
          0%,96% {
            opacity:1
          }
          99%,100% {
            opacity:0
          }
        }
        .build {
          transform:translateY(4px);
          animation:build 20s linear infinite
        }
        @keyframes build {
          0%,42% {
            transform:translateY(0)
          }
          46%,100% {
            transform:translateY(4px)
          }
        }
        .spread1 {
          animation:spread1 20s linear infinite
        }
        @keyframes spread1 {
          0%,8% {
            width:0
          }
          20%,100% {
            width:70px
          }
        }
        .spread2 {
          animation:spread2 20s linear infinite
        }
        @keyframes spread2 {
          0%,48% {
            width:0
          }
          59%,100% {
            width:70px
          }
        }
        .track1 {
          animation:track1 20s linear infinite
        }
        @keyframes track1 {
          0%,23% {
            width:0
          }
          37%,100% {
            width:44px
          }
        }
        .track2 {
          animation:track2 20s linear infinite
        }
        @keyframes track2 {
          0%,62% {
            width:0
          }
          74%,100% {
            width:36px
          }
        }
        .blade {
          transform:translate(119px,74px);
          animation:blade 20s linear infinite
        }
        @keyframes blade {
          0%,8% {
            transform:translate(35px,84px)
          }
          20% {
            transform:translate(105px,84px)
          }
          22%,40% {
            transform:translate(119px,84px)
          }
          42% {
            transform:translate(119px,74px)
          }
          46% {
            transform:translate(35px,74px)
          }
          48% {
            transform:translate(35px,84px)
          }
          59% {
            transform:translate(105px,84px)
          }
          61% {
            transform:translate(119px,84px)
          }
          76%,100% {
            transform:translate(119px,74px)
          }
        }
        .laser1,.laser2 {
          stroke:#ed8eab;
          opacity:0
        }
        .laser1 {
          animation:laser1 20s linear infinite
        }
        .laser2 {
          animation:laser2 20s linear infinite
        }
        @keyframes laser1 {
          0%,22.9% {
            opacity:0;
            d:path("M70 21 48 84")
          }
          23% {
            opacity:1;
            d:path("M70 21 48 84")
          }
          37% {
            opacity:1;
            d:path("M70 21 92 84")
          }
          37.1%,100% {
            opacity:0;
            d:path("M70 21 92 84")
          }
        }
        @keyframes laser2 {
          0%,61.9% {
            opacity:0;
            d:path("M70 21 52 84")
          }
          62% {
            opacity:1;
            d:path("M70 21 52 84")
          }
          74% {
            opacity:1;
            d:path("M70 21 88 84")
          }
          74.1%,100% {
            opacity:0;
            d:path("M70 21 88 84")
          }
        }
        .pool1,.pool2 {
          opacity:0
        }
        .pool1 {
          animation:pool1 20s linear infinite
        }
        .pool2 {
          animation:pool2 20s linear infinite
        }
        @keyframes pool1 {
          0%,22.9% {
            opacity:0;
            cx:48
          }
          23% {
            opacity:1;
            cx:48
          }
          37% {
            opacity:1;
            cx:92
          }
          40%,100% {
            opacity:0;
            cx:92
          }
        }
        @keyframes pool2 {
          0%,61.9% {
            opacity:0;
            cx:52
          }
          62% {
            opacity:1;
            cx:52
          }
          74% {
            opacity:1;
            cx:88
          }
          77%,100% {
            opacity:0;
            cx:88
          }
        }
        .excess {
          animation:excess 20s linear infinite
        }
        @keyframes excess {
          0%,19% {
            opacity:0
          }
          22%,100% {
            opacity:1
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Laser Powder Bed Fusion">
        <defs>
          <clipPath id="pool-footprint1">
            <rect x="48" y="80" width="44" height="12"/>
          </clipPath>
          <clipPath id="pool-footprint2">
            <rect x="52" y="80" width="36" height="12"/>
          </clipPath>
          <pattern id="powder" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle class="warm" cx="1" cy="1" r=".9"/>
            <circle class="warm" cx="3" cy="3" r=".9"/>
          </pattern>
          <clipPath id="spread1">
            <rect class="spread1" x="35" y="83" width="70" height="6"/>
          </clipPath>
          <clipPath id="spread2">
            <rect class="spread2" x="35" y="83" width="70" height="6"/>
          </clipPath>
          <mask id="unfused1">
            <rect x="35" y="84" width="70" height="4" fill="white"/>
            <rect class="track1" x="48" y="83" width="44" height="6" fill="black"/>
          </mask>
          <mask id="unfused2">
            <rect x="35" y="84" width="70" height="4" fill="white"/>
            <rect class="track2" x="52" y="83" width="36" height="6" fill="black"/>
          </mask>
        </defs>
        <path class="ink muted" d="M20 84H35V126H105V84H113V94H134V84"/>
        <path class="ink cool" style="fill:none" d="M63 12H77L73 21H67Z"/>
        <g class="cycle">
          <g class="build">
            <rect x="35" y="88" width="70" height="24" fill="url(#powder)"/>
            <rect class="solid" x="48" y="88" width="44" height="24"/>
            <rect class="ink paper" x="35" y="112" width="70" height="5"/>
            <g clip-path="url(#spread1)">
              <rect x="35" y="84" width="70" height="4" fill="url(#powder)" mask="url(#unfused1)"/>
            </g>
            <rect class="solid track1" x="48" y="84" width="44" height="4"/>
          </g>
          <g clip-path="url(#spread2)">
            <rect x="35" y="84" width="70" height="4" fill="url(#powder)" mask="url(#unfused2)"/>
          </g>
          <rect class="solid track2" x="52" y="84" width="36" height="4"/>
          <path class="ink laser1" d="M70 21 48 84"/>
          <path class="ink laser2" d="M70 21 52 84"/>
          <ellipse class="warm pool1" clip-path="url(#pool-footprint1)" cx="48" cy="85" rx="3" ry="4"/>
          <ellipse class="warm pool2" clip-path="url(#pool-footprint2)" cx="52" cy="85" rx="3" ry="4"/>
          <path class="ink blade" d="M0 0V-15H6V-4L0 0Z"/>
          <rect class="excess" x="114" y="89" width="18" height="4" fill="url(#powder)"/>
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

if (!customElements.get("concept-laser-powder-bed-fusion")) {
  customElements.define("concept-laser-powder-bed-fusion", ConceptLaserPowderBedFusion);
}
