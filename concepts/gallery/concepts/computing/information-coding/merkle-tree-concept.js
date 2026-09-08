// Merkle Tree. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptMerkleTree extends HTMLElement {
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
        .oldC {
          opacity:0;
          animation:oldC 11s steps(1,end) infinite;
        }
        .newC {
          animation:newC 11s steps(1,end) infinite;
        }
        @keyframes oldC {
          0% {
            opacity:1;
          }
          60%,100% {
            opacity:0;
          }
        }
        @keyframes newC {
          0% {
            opacity:0;
          }
          60%,100% {
            opacity:1;
          }
        }
        .oldCD {
          opacity:0;
          animation:oldCD 11s steps(1,end) infinite;
        }
        .newCD {
          animation:newCD 11s steps(1,end) infinite;
        }
        @keyframes oldCD {
          0% {
            opacity:1;
          }
          72%,100% {
            opacity:0;
          }
        }
        @keyframes newCD {
          0% {
            opacity:0;
          }
          72%,100% {
            opacity:1;
          }
        }
        .oldroot {
          opacity:0;
          animation:oldroot 11s steps(1,end) infinite;
        }
        .newroot {
          animation:newroot 11s steps(1,end) infinite;
        }
        @keyframes oldroot {
          0% {
            opacity:1;
          }
          84%,100% {
            opacity:0;
          }
        }
        @keyframes newroot {
          0% {
            opacity:0;
          }
          84%,100% {
            opacity:1;
          }
        }
        text {
          font:10px ui-monospace,monospace;
          fill:#dceee2;
          text-anchor:middle;
        }
        .label {
          font-size:12px;
        }
        .node {
          fill:#10251c;
          stroke:#52755f;
          stroke-width:1;
        }
        .sibling {
          animation:sibling 11s steps(1,end) infinite;
        }
        .proof {
          fill:none;
          stroke:#f3c977;
          stroke-width:2;
          stroke-dasharray:1;
          opacity:0;
          animation:proof 11s linear infinite;
        }
        .mutation {
          fill:none;
          stroke:#77c9ef;
          stroke-width:2.5;
          stroke-dasharray:1;
          animation:mutation 11s linear infinite;
        }
        @keyframes sibling {
          0% {
            stroke:#52755f;
          }
          14% {
            stroke:#f3c977;
          }
          48%,100% {
            stroke:#52755f;
          }
        }
        @keyframes proof {
          0%,10% {
            opacity:0;
            stroke-dashoffset:1;
          }
          12% {
            opacity:1;
            stroke-dashoffset:1;
          }
          42% {
            opacity:1;
            stroke-dashoffset:0;
          }
          48%,100% {
            opacity:0;
            stroke-dashoffset:0;
          }
        }
        @keyframes mutation {
          0%,60% {
            stroke-dashoffset:1;
          }
          84%,100% {
            stroke-dashoffset:0;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Merkle Tree">
        <path class="ink muted" d="M20 98L36.5 74L53 98M86 98L102.5 74L119 98M36.5 58L69.5 33L102.5 58"/>
        <path class="proof" pathLength="1" d="M86 98L102.5 74L119 98M102.5 58L69.5 33L36.5 58"/>
        <path class="mutation" pathLength="1" d="M86 98L102.5 74V58L69.5 33"/>
        <rect class="node " x="6" y="98" width="28" height="16" rx="2"/>
        <text class="digest oldA" x="20" y="109.5">c00b</text>
        <rect class="node " x="39" y="98" width="28" height="16" rx="2"/>
        <text class="digest oldB" x="53" y="109.5">87af</text>
        <rect class="node " x="72" y="98" width="28" height="16" rx="2"/>
        <text class="digest oldC" x="86" y="109.5">b563</text>
        <text class="digest newC" x="86" y="109.5">4076</text>
        <rect class="node sibling" x="105" y="98" width="28" height="16" rx="2"/>
        <text class="digest oldD" x="119" y="109.5">08a2</text>
        <rect class="node sibling" x="22.5" y="58" width="28" height="16" rx="2"/>
        <text class="digest oldAB" x="36.5" y="69.5">ed69</text>
        <rect class="node " x="88.5" y="58" width="28" height="16" rx="2"/>
        <text class="digest oldCD" x="102.5" y="69.5">d62c</text>
        <text class="digest newCD" x="102.5" y="69.5">518f</text>
        <rect class="node " x="55.5" y="17" width="28" height="16" rx="2"/>
        <text class="digest oldroot" x="69.5" y="28.5">5c8d</text>
        <text class="digest newroot" x="69.5" y="28.5">d022</text>
        <text class="label" x="20" y="128">A</text>
        <text class="label" x="53" y="128">B</text>
        <text class="label" x="119" y="128">D</text>
        <text class="label oldC" x="86" y="128">C</text>
        <text class="label newC" x="86" y="128">X</text>
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

if (!customElements.get("concept-merkle-tree")) {
  customElements.define("concept-merkle-tree", ConceptMerkleTree);
}
