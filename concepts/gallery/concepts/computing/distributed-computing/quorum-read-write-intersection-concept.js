// Quorum Read/Write Intersection. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptQuorumReadWriteIntersection extends HTMLElement {
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
          font:11px monospace;
          text-anchor:middle
        }
        .label {
          font-size:8px
        }
        .write-set {
          fill:#77c9ef15;
          stroke:#77c9ef;
          stroke-width:1.8;
          animation:write 10s infinite
        }
        .read-set {
          fill:#f3c97715;
          stroke:#f3c977;
          stroke-width:1.8;
          animation:read 10s infinite
        }
        .intersection {
          fill:none;
          stroke:#f3c977;
          stroke-width:2;
          animation:read 10s infinite
        }
        .v2 {
          fill:#77c9ef
        }
        .v1.n0,.v1.n1,.v1.n2 {
          opacity:0
        }
        .v1.n0 {
          animation:old0 10s infinite
        }
        .v1.n1 {
          animation:old1 10s infinite
        }
        .v1.n2 {
          animation:old2 10s infinite
        }
        .v2.n0 {
          animation:new0 10s infinite
        }
        .v2.n1 {
          animation:new1 10s infinite
        }
        .v2.n2 {
          animation:new2 10s infinite
        }
        .result {
          animation:result 10s infinite
        }
        .replies {
          stroke:#f3c977;
          stroke-dasharray:3 3;
          animation:replies 10s infinite
        }
        @keyframes write {
          0%,9.9% {
            opacity:0
          }
          10%,100% {
            opacity:1
          }
        }
        @keyframes read {
          0%,49.9% {
            opacity:0
          }
          50%,100% {
            opacity:1
          }
        }
        @keyframes old0 {
          0%,19.9% {
            opacity:1
          }
          20%,100% {
            opacity:0
          }
        }
        @keyframes old1 {
          0%,29.9% {
            opacity:1
          }
          30%,100% {
            opacity:0
          }
        }
        @keyframes old2 {
          0%,39.9% {
            opacity:1
          }
          40%,100% {
            opacity:0
          }
        }
        @keyframes new0 {
          0%,19.9% {
            opacity:0
          }
          20%,100% {
            opacity:1
          }
        }
        @keyframes new1 {
          0%,29.9% {
            opacity:0
          }
          30%,100% {
            opacity:1
          }
        }
        @keyframes new2 {
          0%,39.9% {
            opacity:0
          }
          40%,100% {
            opacity:1
          }
        }
        @keyframes replies {
          0%,54.9% {
            opacity:0
          }
          55%,69.9% {
            opacity:1;
            stroke-dashoffset:24
          }
          70%,100% {
            opacity:.5;
            stroke-dashoffset:0
          }
        }
        @keyframes result {
          0%,69.9% {
            opacity:0
          }
          70%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Quorum Read/Write Intersection">
        <path class="write-set" d="M70 25L116 59L99 115Z"/>
        <path class="read-set" d="M99 115H41L24 59Z"/>
        <text class="cool" x="104" y="21">W=3</text>
        <text class="warm" x="25" y="40">R=3</text>
        <circle class="ink paper" cx="70" cy="25" r="11"/>
        <text class="label" x="70" y="10">A</text>
        <text class="v1 n0" x="70" y="29">1</text>
        <text class="v2 n0" x="70" y="29">2</text>
        <circle class="ink paper" cx="116" cy="59" r="11"/>
        <text class="label" x="116" y="44">B</text>
        <text class="v1 n1" x="116" y="63">1</text>
        <text class="v2 n1" x="116" y="63">2</text>
        <circle class="ink paper" cx="99" cy="115" r="11"/>
        <text class="label" x="99" y="100">C</text>
        <text class="v1 n2" x="99" y="119">1</text>
        <text class="v2 n2" x="99" y="119">2</text>
        <circle class="ink paper" cx="41" cy="115" r="11"/>
        <text class="label" x="41" y="100">D</text>
        <text class="v1 n3" x="41" y="119">1</text>
        <circle class="ink paper" cx="24" cy="59" r="11"/>
        <text class="label" x="24" y="44">E</text>
        <text class="v1 n4" x="24" y="63">1</text>
        <circle class="intersection" cx="99" cy="115" r="15"/>
        <path class="ink replies" d="M92 105L77 88M46 105L63 88M34 66L60 78"/>
        <rect class="ink paper result" x="56" y="70" width="28" height="24" rx="4"/>
        <text class="result" x="70" y="86">v2</text>
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

if (!customElements.get("concept-quorum-read-write-intersection")) {
  customElements.define("concept-quorum-read-write-intersection", ConceptQuorumReadWriteIntersection);
}
