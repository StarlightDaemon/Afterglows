// Union-Find. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptUnionFind extends HTMLElement {
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
        .pC {
          animation:pC 9s linear infinite;
        }
        @keyframes pC {
          0%,36% {
            d:path("M26.16 68.573L31.489 54.363");
          }
          44%,100% {
            d:path("M28.726 70.056L63.638 27.715");
          }
        }
        .pD {
          animation:pD 9s linear infinite;
        }
        @keyframes pD {
          0%,44% {
            d:path("M36.69 102.099L27.789 85.779");
          }
          52%,100% {
            d:path("M43.76 101.434L66.933 29.518");
          }
        }
        .pE {
          animation:pE 9s linear infinite;
        }
        @keyframes pE {
          0%,58% {
            opacity:0;
          }
          64%,100% {
            opacity:1;
          }
        }
        .pF {
          animation:pF 9s linear infinite;
        }
        @keyframes pF {
          0%,82% {
            d:path("M110.519 97.013L108.535 59.986");
          }
          90%,100% {
            d:path("M107.127 97.876L74.303 29.027");
          }
        }
        text {
          font:10px ui-monospace,monospace;
          fill:#dceee4;
          text-anchor:middle;
        }
        .root-e {
          opacity:0;
          animation:rootE 9s steps(1,end) infinite;
        }
        .visitor {
          fill:none;
          stroke:#f3c977;
          stroke-width:2;
          opacity:0;
          animation:visit 9s steps(1,end) infinite;
        }
        @keyframes rootE {
          0% {
            opacity:1;
          }
          64%,100% {
            opacity:0;
          }
        }
        @keyframes visit {
          0% {
            transform:translate(41px,110px);
            opacity:0;
          }
          10% {
            transform:translate(41px,110px);
            opacity:1;
          }
          18% {
            transform:translate(23px,77px);
            opacity:1;
          }
          24% {
            transform:translate(35px,45px);
            opacity:1;
          }
          30% {
            transform:translate(70px,20px);
            opacity:1;
          }
          36% {
            transform:translate(70px,20px);
            opacity:0;
          }
          70% {
            transform:translate(111px,106px);
            opacity:1;
          }
          74% {
            transform:translate(108px,50px);
            opacity:1;
          }
          78% {
            transform:translate(70px,20px);
            opacity:1;
          }
          82% {
            transform:translate(70px,20px);
            opacity:0;
          }
          100% {
            opacity:0;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Union-Find">
        <defs>
          <marker id="parent" markerWidth="5" markerHeight="5" refX="7" refY="3" viewBox="0 0 8 6" orient="auto">
            <path class="solid" d="M0 0L8 3L0 6Z"/>
          </marker>
        </defs>
        <circle class="ink root" cx="70" cy="20" r="11"/>
        <circle class="ink root-e" cx="108" cy="50" r="11"/>
        <path class="ink parent pB" marker-end="url(#parent)" d="M42.324 39.769L61.863 25.812"/>
        <path class="ink parent pC" marker-end="url(#parent)" d="M28.726 70.056L63.638 27.715"/>
        <path class="ink parent pD" marker-end="url(#parent)" d="M43.76 101.434L66.933 29.518"/>
        <path class="ink parent pE" marker-end="url(#parent)" d="M100.936 44.423L77.849 26.196"/>
        <path class="ink parent pF" marker-end="url(#parent)" d="M107.127 97.876L74.303 29.027"/>
        <circle class="paper ink" cx="70" cy="20" r="8"/>
        <text x="70" y="23.5">A</text>
        <circle class="paper ink" cx="35" cy="45" r="8"/>
        <text x="35" y="48.5">B</text>
        <circle class="paper ink" cx="23" cy="77" r="8"/>
        <text x="23" y="80.5">C</text>
        <circle class="paper ink" cx="41" cy="110" r="8"/>
        <text x="41" y="113.5">D</text>
        <circle class="paper ink" cx="108" cy="50" r="8"/>
        <text x="108" y="53.5">E</text>
        <circle class="paper ink" cx="111" cy="106" r="8"/>
        <text x="111" y="109.5">F</text>
        <circle class="visitor" r="10"/>
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

if (!customElements.get("concept-union-find")) {
  customElements.define("concept-union-find", ConceptUnionFind);
}
