// Hemoglobin Oxygen Loading. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptHemoglobinOxygenLoading extends HTMLElement {
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
        .rbc {
          fill:#3c20294d;
          stroke:#83505d;
          stroke-width:1.5
        }
        .lobe {
          fill:#975e7d;
          stroke:#c28ba3;
          stroke-width:1.5
        }
        .l1,.l2 {
          fill:#72577f
        }
        .heme {
          fill:#442d40;
          stroke:#d0a46e;
          stroke-width:1.5
        }
        .oxygen,.availability {
          fill:#eabf76
        }
        .availability {
          animation:availability 10s infinite
        }
        @keyframes availability {
          0%,55% {
            opacity:1
          }
          75%,95% {
            opacity:.15
          }
          100% {
            opacity:1
          }
        }
        .o0 {
          animation:o0 10s infinite
        }
        @keyframes o0 {
          0%,8% {
            transform:translate(-30px,-24px)
          }
          24%,60% {
            transform:translate(0,0)
          }
          80%,100% {
            transform:translate(-35px,-25px)
          }
        }
        .o1 {
          animation:o1 10s infinite
        }
        @keyframes o1 {
          0%,16% {
            transform:translate(30px,-24px)
          }
          32%,60% {
            transform:translate(0,0)
          }
          80%,100% {
            transform:translate(35px,-25px)
          }
        }
        .o2 {
          animation:o2 10s infinite
        }
        @keyframes o2 {
          0%,24% {
            transform:translate(-30px,24px)
          }
          40%,60% {
            transform:translate(0,0)
          }
          100% {
            transform:translate(0,0)
          }
        }
        .o3 {
          animation:o3 10s infinite
        }
        @keyframes o3 {
          0%,32% {
            transform:translate(30px,24px)
          }
          48%,60% {
            transform:translate(0,0)
          }
          100% {
            transform:translate(0,0)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Hemoglobin Oxygen Loading">
        <ellipse class="rbc" cx="70" cy="70" rx="59" ry="51"/>
        <ellipse class="lobe l0" cx="54" cy="55" rx="18" ry="17"/>
        <rect class="heme" x="49" y="50" width="10" height="10" rx="2"/>
        <ellipse class="lobe l1" cx="84" cy="55" rx="18" ry="17"/>
        <rect class="heme" x="79" y="50" width="10" height="10" rx="2"/>
        <ellipse class="lobe l2" cx="54" cy="85" rx="18" ry="17"/>
        <rect class="heme" x="49" y="80" width="10" height="10" rx="2"/>
        <ellipse class="lobe l3" cx="84" cy="85" rx="18" ry="17"/>
        <rect class="heme" x="79" y="80" width="10" height="10" rx="2"/>
        <g class="oxygen o0">
          <circle cx="52" cy="55" r="2.7"/>
          <circle cx="56" cy="55" r="2.7"/>
        </g>
        <g class="oxygen o1">
          <circle cx="82" cy="55" r="2.7"/>
          <circle cx="86" cy="55" r="2.7"/>
        </g>
        <g class="oxygen o2">
          <circle cx="52" cy="85" r="2.7"/>
          <circle cx="56" cy="85" r="2.7"/>
        </g>
        <g class="oxygen o3">
          <circle cx="82" cy="85" r="2.7"/>
          <circle cx="86" cy="85" r="2.7"/>
        </g>
        <path class="ink muted" d="M17 18H123"/>
        <g class="availability">
          <circle cx="27" cy="18" r="2"/>
          <circle cx="39" cy="18" r="2"/>
          <circle cx="51" cy="18" r="2"/>
          <circle cx="63" cy="18" r="2"/>
          <circle cx="75" cy="18" r="2"/>
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

if (!customElements.get("concept-hemoglobin-oxygen-loading")) {
  customElements.define("concept-hemoglobin-oxygen-loading", ConceptHemoglobinOxygenLoading);
}
