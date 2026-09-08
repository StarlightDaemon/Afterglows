// Consistent Hashing. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptConsistentHashing extends HTMLElement {
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
          font:10px monospace;
          text-anchor:middle
        }
        .key {
          fill:#b6d4c6
        }
        .tether {
          stroke:#4f8068;
          stroke-width:1.3;
          fill:none
        }
        .new-server {
          animation:server 10s infinite
        }
        .new-arc {
          fill:none;
          stroke:#f3c977;
          stroke-width:3;
          animation:arc 10s infinite
        }
        .caption {
          font-size:9px;
          animation:arc 10s infinite
        }
        @keyframes server {
          0%,39% {
            opacity:0
          }
          40%,100% {
            opacity:1
          }
        }
        @keyframes arc {
          0%,54% {
            opacity:0
          }
          55%,100% {
            opacity:1
          }
        }
        .t20 {
          stroke:#f3c977;
          animation:t20 10s linear infinite
        }
        @keyframes t20 {
          0%,45% {
            d:path("M97.581 61.039L83.597 111.846");
            stroke:#77c9ef
          }
          60%,100% {
            d:path("M97.581 61.039L111.846 83.597");
            stroke:#f3c977
          }
        }
        .t25 {
          stroke:#f3c977;
          animation:t25 10s linear infinite
        }
        @keyframes t25 {
          0%,45% {
            d:path("M99 70L83.597 111.846");
            stroke:#77c9ef
          }
          60%,100% {
            d:path("M99 70L111.846 83.597");
            stroke:#f3c977
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Consistent Hashing">
        <circle class="ink muted" cx="70" cy="70" r="44"/>
        <path class="ink" d="M66 18Q78 16 87 20M83 16L87 20L82 22"/>
        <path class="tether t5" d="M78.961 42.419L95.863 34.403"/>
        <circle class="key" cx="78.961" cy="42.419" r="3"/>
        <path class="tether t20" d="M97.581 61.039L111.846 83.597"/>
        <circle class="key" cx="97.581" cy="61.039" r="3"/>
        <path class="tether t25" d="M99 70L111.846 83.597"/>
        <circle class="key" cx="99" cy="70" r="3"/>
        <path class="tether t40" d="M87.046 93.461L83.597 111.846"/>
        <circle class="key" cx="87.046" cy="93.461" r="3"/>
        <path class="tether t60" d="M52.954 93.461L28.154 56.403"/>
        <circle class="key" cx="52.954" cy="93.461" r="3"/>
        <path class="tether t90" d="M52.954 46.539L95.863 34.403"/>
        <circle class="key" cx="52.954" cy="46.539" r="3"/>
        <path class="new-arc" d="M95.863 34.403A44 44 0 0 1 111.846 83.597"/>
        <g class="">
          <circle class="ink paper" cx="95.863" cy="34.403" r="10"/>
          <text x="95.863" y="38.403">A</text>
        </g>
        <g class="">
          <circle class="ink paper" cx="83.597" cy="111.846" r="10"/>
          <text x="83.597" y="115.846">B</text>
        </g>
        <g class="">
          <circle class="ink paper" cx="28.154" cy="56.403" r="10"/>
          <text x="28.154" y="60.403">C</text>
        </g>
        <g class="new-server">
          <circle class="ink paper" cx="111.846" cy="83.597" r="10"/>
          <text x="111.846" y="87.597">D</text>
        </g>
        <text class="caption" x="70" y="135">+D: two keys move</text>
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

if (!customElements.get("concept-consistent-hashing")) {
  customElements.define("concept-consistent-hashing", ConceptConsistentHashing);
}
