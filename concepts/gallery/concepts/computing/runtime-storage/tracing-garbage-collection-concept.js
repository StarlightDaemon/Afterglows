// Tracing Garbage Collection. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptTracingGarbageCollection extends HTMLElement {
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
          fill:#07120f;
          font:11px monospace;
          text-anchor:middle
        }
        svg>text {
          fill:#b6d4c6;
          font-size:9px
        }
        .free {
          stroke-dasharray:2 2;
          stroke:#375b51
        }
        .object rect {
          fill:#70edb1;
          stroke:#70edb1;
          stroke-width:1.5
        }
        .o0 rect {
          animation:a 11s infinite
        }
        .o1 rect {
          animation:b 11s infinite
        }
        .o2 rect {
          animation:c 11s infinite
        }
        .o3,.o4,.o5 {
          opacity:0
        }
        .o3 rect,.o4 rect,.o5 rect {
          fill:#8da096;
          stroke:#8da096
        }
        .o3 {
          animation:d 11s infinite
        }
        .o4 {
          animation:e 11s infinite
        }
        .o5 {
          animation:f 11s infinite
        }
        .unreachable {
          opacity:0;
          animation:d 11s infinite
        }
        .edges {
          animation:edges 11s infinite
        }
        .sweep {
          fill:#f3c97744;
          opacity:0;
          animation:sweep 11s linear infinite
        }
        .mark-label {
          opacity:0;
          animation:mark 11s infinite
        }
        .sweep-label {
          animation:sweep-label 11s infinite
        }
        @keyframes a {
          0%,11.9% {
            fill:#8da096;
            stroke:#8da096
          }
          12%,23.9% {
            fill:#456257;
            stroke:#f3c977
          }
          24%,100% {
            fill:#70edb1;
            stroke:#70edb1
          }
        }
        @keyframes b {
          0%,23.9% {
            fill:#8da096;
            stroke:#8da096
          }
          24%,35.9% {
            fill:#456257;
            stroke:#f3c977
          }
          36%,100% {
            fill:#70edb1;
            stroke:#70edb1
          }
        }
        @keyframes c {
          0%,35.9% {
            fill:#8da096;
            stroke:#8da096
          }
          36%,47.9% {
            fill:#456257;
            stroke:#f3c977
          }
          48%,100% {
            fill:#70edb1;
            stroke:#70edb1
          }
        }
        @keyframes d {
          0%,62.9% {
            opacity:1
          }
          63%,100% {
            opacity:0
          }
        }
        @keyframes e {
          0%,69.9% {
            opacity:1
          }
          70%,100% {
            opacity:0
          }
        }
        @keyframes f {
          0%,76.9% {
            opacity:1
          }
          77%,100% {
            opacity:0
          }
        }
        @keyframes edges {
          0%,11.9% {
            opacity:.3
          }
          12%,100% {
            opacity:1
          }
        }
        @keyframes sweep {
          0%,59.9% {
            opacity:0;
            transform:translateX(0)
          }
          60% {
            opacity:1;
            transform:translateX(0)
          }
          80% {
            opacity:1;
            transform:translateX(116px)
          }
          80.1%,100% {
            opacity:0
          }
        }
        @keyframes mark {
          0%,59.9% {
            opacity:1
          }
          60%,100% {
            opacity:0
          }
        }
        @keyframes sweep-label {
          0%,59.9% {
            opacity:0
          }
          60%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Tracing Garbage Collection">
        <defs>
          <marker id="arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto">
            <path class="solid" d="M0 0L6 3L0 6Z"/>
          </marker>
        </defs>
        <text x="30" y="15">ROOT</text>
        <path class="ink" marker-end="url(#arrow)" d="M30 21V42"/>
        <path class="ink edges" marker-end="url(#arrow)" d="M42 55H58"/>
        <path class="ink edges" marker-end="url(#arrow)" d="M82 55H98"/>
        <path class="ink edges" marker-end="url(#arrow)" d="M110 67C110 81 70 81 70 67"/>
        <path class="ink unreachable" marker-end="url(#arrow)" d="M42 105H58"/>
        <path class="ink unreachable" marker-end="url(#arrow)" d="M70 117C70 130 30 130 30 117"/>
        <rect class="ink free" x="18" y="43" width="24" height="24" rx="4"/>
        <g class="object o0">
          <rect x="19" y="44" width="22" height="22" rx="3"/>
          <text x="30" y="59">A</text>
        </g>
        <rect class="ink free" x="58" y="43" width="24" height="24" rx="4"/>
        <g class="object o1">
          <rect x="59" y="44" width="22" height="22" rx="3"/>
          <text x="70" y="59">B</text>
        </g>
        <rect class="ink free" x="98" y="43" width="24" height="24" rx="4"/>
        <g class="object o2">
          <rect x="99" y="44" width="22" height="22" rx="3"/>
          <text x="110" y="59">C</text>
        </g>
        <rect class="ink free" x="18" y="93" width="24" height="24" rx="4"/>
        <g class="object o3">
          <rect x="19" y="94" width="22" height="22" rx="3"/>
          <text x="30" y="109">D</text>
        </g>
        <rect class="ink free" x="58" y="93" width="24" height="24" rx="4"/>
        <g class="object o4">
          <rect x="59" y="94" width="22" height="22" rx="3"/>
          <text x="70" y="109">E</text>
        </g>
        <rect class="ink free" x="98" y="93" width="24" height="24" rx="4"/>
        <g class="object o5">
          <rect x="99" y="94" width="22" height="22" rx="3"/>
          <text x="110" y="109">F</text>
        </g>
        <rect class="sweep" x="12" y="34" width="7" height="94" rx="2"/>
        <text class="mark-label" x="97" y="25">MARK</text>
        <text class="sweep-label" x="97" y="25">SWEEP</text>
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

if (!customElements.get("concept-tracing-garbage-collection")) {
  customElements.define("concept-tracing-garbage-collection", ConceptTracingGarbageCollection);
}
