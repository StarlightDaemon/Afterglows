// Binary Search. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBinarySearch extends HTMLElement {
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
        .k0 {
          opacity:0.2;
          fill:#70edb1;
          animation:k0 7s steps(1,end) infinite;
        }
        @keyframes k0 {
          0% {
            opacity:1;
            fill:#70edb1;
          }
          30%,100% {
            opacity:.2;
          }
        }
        .k1 {
          opacity:0.2;
          fill:#70edb1;
          animation:k1 7s steps(1,end) infinite;
        }
        @keyframes k1 {
          0% {
            opacity:1;
            fill:#70edb1;
          }
          30%,100% {
            opacity:.2;
          }
        }
        .k2 {
          opacity:0.2;
          fill:#70edb1;
          animation:k2 7s steps(1,end) infinite;
        }
        @keyframes k2 {
          0% {
            opacity:1;
            fill:#70edb1;
          }
          30%,100% {
            opacity:.2;
          }
        }
        .k3 {
          opacity:0.2;
          fill:#70edb1;
          animation:k3 7s steps(1,end) infinite;
        }
        @keyframes k3 {
          0% {
            opacity:1;
            fill:#70edb1;
          }
          30%,100% {
            opacity:.2;
          }
        }
        .k4 {
          opacity:0.2;
          fill:#70edb1;
          animation:k4 7s steps(1,end) infinite;
        }
        @keyframes k4 {
          0% {
            opacity:1;
            fill:#70edb1;
          }
          30%,100% {
            opacity:.2;
          }
        }
        .k5 {
          opacity:0.2;
          fill:#70edb1;
          animation:k5 7s steps(1,end) infinite;
        }
        @keyframes k5 {
          0% {
            opacity:1;
            fill:#70edb1;
          }
          52%,100% {
            opacity:.2;
          }
        }
        .k6 {
          opacity:0.2;
          fill:#70edb1;
          animation:k6 7s steps(1,end) infinite;
        }
        @keyframes k6 {
          0% {
            opacity:1;
            fill:#70edb1;
          }
          52%,100% {
            opacity:.2;
          }
        }
        .k7 {
          opacity:1;
          fill:#f3c977;
          animation:k7 7s steps(1,end) infinite;
        }
        @keyframes k7 {
          0% {
            opacity:1;
            fill:#70edb1;
          }
          75%,100% {
            fill:#f3c977;
          }
        }
        .k8 {
          opacity:0.2;
          fill:#70edb1;
          animation:k8 7s steps(1,end) infinite;
        }
        @keyframes k8 {
          0% {
            opacity:1;
            fill:#70edb1;
          }
          75%,100% {
            opacity:.2;
          }
        }
        .target {
          fill:none;
          stroke:#f3c977;
          stroke-width:1;
          stroke-dasharray:2 3;
        }
        .bracket {
          animation:bounds 7s steps(1,end) infinite;
        }
        .probe {
          stroke:#77c9ef;
          transform:translateX(103.5px);
          animation:probe 7s steps(1,end) infinite;
        }
        @keyframes bounds {
          0% {
            d:path("M16 112v5h103v-5");
          }
          30% {
            d:path("M76 112v5h43v-5");
          }
          52% {
            d:path("M100 112v5h19v-5");
          }
          75%,100% {
            d:path("M100 112v5h7v-5");
          }
        }
        @keyframes probe {
          0% {
            transform:translateX(67.5px);
          }
          30% {
            transform:translateX(91.5px);
          }
          52%,100% {
            transform:translateX(103.5px);
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Binary Search">
        <path class="target" d="M12 65H129"/>
        <path class="warm" d="M129 65l-5 -3v6Z"/>
        <rect class="key k0" x="16" y="100" width="7" height="5" rx="1"/>
        <rect class="key k1" x="28" y="95" width="7" height="10" rx="1"/>
        <rect class="key k2" x="40" y="90" width="7" height="15" rx="1"/>
        <rect class="key k3" x="52" y="85" width="7" height="20" rx="1"/>
        <rect class="key k4" x="64" y="80" width="7" height="25" rx="1"/>
        <rect class="key k5" x="76" y="75" width="7" height="30" rx="1"/>
        <rect class="key k6" x="88" y="70" width="7" height="35" rx="1"/>
        <rect class="key k7" x="100" y="65" width="7" height="40" rx="1"/>
        <rect class="key k8" x="112" y="60" width="7" height="45" rx="1"/>
        <path class="ink bracket" d="M100 112v5h7v-5"/>
        <path class="ink probe" d="M0 46v10m-3 -3l3 3l3 -3"/>
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

if (!customElements.get("concept-binary-search")) {
  customElements.define("concept-binary-search", ConceptBinarySearch);
}
