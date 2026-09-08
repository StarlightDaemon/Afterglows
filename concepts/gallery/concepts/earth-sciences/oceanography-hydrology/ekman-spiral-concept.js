// Ekman Spiral. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptEkmanSpiral extends HTMLElement {
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
        .wind-key {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.2
        }
        .surface-key {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.1
        }
        .transport-key {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.1
        }
        .layer {
          fill:none;
          stroke:#284537;
          stroke-width:.7
        }
        .current-vector {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.1
        }
        .profile {
          fill:none;
          stroke:#576142;
          stroke-width:.7;
          stroke-dasharray:2 2
        }
        .layer-marker {
          fill:#f3c977;
          stroke:#07120f;
          stroke-width:.5
        }
        .marker-visibility {
          animation:ekman-visibility 12s linear infinite
        }
        .layer-marker-0 {
          animation:ekman-marker-0 12s linear infinite
        }
        @keyframes ekman-marker-0 {
          from {
            transform:translate(48.515px,37.06px)
          }
          to {
            transform:translate(65.485px,48.94px)
          }
        }
        .layer-marker-1 {
          animation:ekman-marker-1 12s linear infinite
        }
        @keyframes ekman-marker-1 {
          from {
            transform:translate(63.188px,49.942px)
          }
          to {
            transform:translate(58.812px,60.058px)
          }
        }
        .layer-marker-2 {
          animation:ekman-marker-2 12s linear infinite
        }
        @keyframes ekman-marker-2 {
          from {
            transform:translate(70.963px,63.607px)
          }
          to {
            transform:translate(59.037px,70.393px)
          }
        }
        .layer-marker-3 {
          animation:ekman-marker-3 12s linear infinite
        }
        @keyframes ekman-marker-3 {
          from {
            transform:translate(74.957px,77.16px)
          }
          to {
            transform:translate(63.043px,80.84px)
          }
        }
        .layer-marker-4 {
          animation:ekman-marker-4 12s linear infinite
        }
        @keyframes ekman-marker-4 {
          from {
            transform:translate(77.416px,90.267px)
          }
          to {
            transform:translate(68.584px,91.733px)
          }
        }
        .layer-marker-5 {
          animation:ekman-marker-5 12s linear infinite
        }
        @keyframes ekman-marker-5 {
          from {
            transform:translate(79.649px,102.906px)
          }
          to {
            transform:translate(74.351px,103.094px)
          }
        }
        .layer-marker-6 {
          animation:ekman-marker-6 12s linear infinite
        }
        @keyframes ekman-marker-6 {
          from {
            transform:translate(82.247px,115.19px)
          }
          to {
            transform:translate(79.753px,114.81px)
          }
        }
        @keyframes ekman-visibility {
          0%,100% {
            opacity:0
          }
          5%,95% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Ekman Spiral">
        <path class="wind-key" d="M104 14H126M122 11L126 14L122 17"/>
        <path class="surface-key" d="M104 14L117.4 27.4M113.4 26L117.4 27.4L116 23.4"/>
        <path class="transport-key" d="M104 14V33M101 29L104 33L107 29"/>
        <path class="layer" d="M18,50.7L74,50.7L96,35.3L40,35.3Z"/>
        <path class="current-vector" d="M57,43L66.192,49.435M64.425,49.187L66.192,49.435L66.546,48.692"/>
        <g class="marker-visibility">
          <circle class="layer-marker layer-marker-0" r="2" transform="translate(57,43)"/>
        </g>
        <path class="layer" d="M22,62.7L78,62.7L100,47.3L44,47.3Z"/>
        <path class="current-vector" d="M61,55L58.629,60.479M57.807,59.933L58.629,60.479L60.024,59.703"/>
        <g class="marker-visibility">
          <circle class="layer-marker layer-marker-1" r="2" transform="translate(61,55)"/>
        </g>
        <path class="layer" d="M26,74.7L82,74.7L104,59.3L48,59.3Z"/>
        <path class="current-vector" d="M65,67L58.54,70.676M58.826,69.94L58.54,70.676L60.699,70.02"/>
        <g class="marker-visibility">
          <circle class="layer-marker layer-marker-2" r="2" transform="translate(65,67)"/>
        </g>
        <path class="layer" d="M30,86.7L86,86.7L108,71.3L52,71.3Z"/>
        <path class="current-vector" d="M69,79L62.546,80.993M63.538,80.416L62.546,80.993L64.394,80.693"/>
        <g class="marker-visibility">
          <circle class="layer-marker layer-marker-3" r="2" transform="translate(69,79)"/>
        </g>
        <path class="layer" d="M34,98.7L90,98.7L112,83.3L56,83.3Z"/>
        <path class="current-vector" d="M73,91L68.216,91.794M69.219,91.479L68.216,91.794L69.317,91.76"/>
        <g class="marker-visibility">
          <circle class="layer-marker layer-marker-4" r="2" transform="translate(73,91)"/>
        </g>
        <path class="layer" d="M38,110.7L94,110.7L116,95.3L60,95.3Z"/>
        <path class="current-vector" d="M77,103L74.13,103.102M74.879,102.974L74.13,103.102L74.643,103.184"/>
        <g class="marker-visibility">
          <circle class="layer-marker layer-marker-5" r="2" transform="translate(77,103)"/>
        </g>
        <path class="layer" d="M42,122.7L98,122.7L120,107.3L64,107.3Z"/>
        <path class="current-vector" d="M81,115L79.649,114.794M80.102,114.776L79.649,114.794L79.791,114.903"/>
        <g class="marker-visibility">
          <circle class="layer-marker layer-marker-6" r="2" transform="translate(81,115)"/>
        </g>
        <path class="profile" d="M66.192,49.435L58.629,60.479L58.54,70.676L62.546,80.993L68.216,91.794L74.13,103.102L79.649,114.794"/>
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

if (!customElements.get("concept-ekman-spiral")) {
  customElements.define("concept-ekman-spiral", ConceptEkmanSpiral);
}
