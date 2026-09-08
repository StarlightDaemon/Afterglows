// Topological Sort. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptTopologicalSort extends HTMLElement {
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
        .eAC,.pinAC {
          opacity:0;
          animation:eAC 10s steps(1,end) infinite;
        }
        @keyframes eAC {
          0% {
            opacity:1;
          }
          12%,100% {
            opacity:0;
          }
        }
        .eAD,.pinAD {
          opacity:0;
          animation:eAD 10s steps(1,end) infinite;
        }
        @keyframes eAD {
          0% {
            opacity:1;
          }
          12%,100% {
            opacity:0;
          }
        }
        .eBD,.pinBD {
          opacity:0;
          animation:eBD 10s steps(1,end) infinite;
        }
        @keyframes eBD {
          0% {
            opacity:1;
          }
          26%,100% {
            opacity:0;
          }
        }
        .eCE,.pinCE {
          opacity:0;
          animation:eCE 10s steps(1,end) infinite;
        }
        @keyframes eCE {
          0% {
            opacity:1;
          }
          40%,100% {
            opacity:0;
          }
        }
        .eDE,.pinDE {
          opacity:0;
          animation:eDE 10s steps(1,end) infinite;
        }
        @keyframes eDE {
          0% {
            opacity:1;
          }
          54%,100% {
            opacity:0;
          }
        }
        .eDF,.pinDF {
          opacity:0;
          animation:eDF 10s steps(1,end) infinite;
        }
        @keyframes eDF {
          0% {
            opacity:1;
          }
          54%,100% {
            opacity:0;
          }
        }
        .nA {
          opacity:.25;
          animation:nA 10s steps(1,end) infinite;
        }
        .nA circle {
          stroke:#375b51;
          stroke-width:2;
          animation:readyA 10s steps(1,end) infinite;
        }
        @keyframes nA {
          0% {
            opacity:1;
          }
          12%,100% {
            opacity:.25;
          }
        }
        @keyframes readyA {
          0% {
            stroke:#77c9ef;
          }
          12%,100% {
            stroke:#375b51;
          }
        }
        .oA {
          animation:oA 10s steps(1,end) infinite;
        }
        @keyframes oA {
          0% {
            opacity:0;
          }
          12%,100% {
            opacity:1;
          }
        }
        .nB {
          opacity:.25;
          animation:nB 10s steps(1,end) infinite;
        }
        .nB circle {
          stroke:#375b51;
          stroke-width:2;
          animation:readyB 10s steps(1,end) infinite;
        }
        @keyframes nB {
          0% {
            opacity:1;
          }
          26%,100% {
            opacity:.25;
          }
        }
        @keyframes readyB {
          0% {
            stroke:#77c9ef;
          }
          26%,100% {
            stroke:#375b51;
          }
        }
        .oB {
          animation:oB 10s steps(1,end) infinite;
        }
        @keyframes oB {
          0% {
            opacity:0;
          }
          26%,100% {
            opacity:1;
          }
        }
        .nC {
          opacity:.25;
          animation:nC 10s steps(1,end) infinite;
        }
        .nC circle {
          stroke:#375b51;
          stroke-width:2;
          animation:readyC 10s steps(1,end) infinite;
        }
        @keyframes nC {
          0% {
            opacity:1;
          }
          40%,100% {
            opacity:.25;
          }
        }
        @keyframes readyC {
          0% {
            stroke:#375b51;
          }
          12% {
            stroke:#77c9ef;
          }
          40%,100% {
            stroke:#375b51;
          }
        }
        .oC {
          animation:oC 10s steps(1,end) infinite;
        }
        @keyframes oC {
          0% {
            opacity:0;
          }
          40%,100% {
            opacity:1;
          }
        }
        .nD {
          opacity:.25;
          animation:nD 10s steps(1,end) infinite;
        }
        .nD circle {
          stroke:#375b51;
          stroke-width:2;
          animation:readyD 10s steps(1,end) infinite;
        }
        @keyframes nD {
          0% {
            opacity:1;
          }
          54%,100% {
            opacity:.25;
          }
        }
        @keyframes readyD {
          0% {
            stroke:#375b51;
          }
          26% {
            stroke:#77c9ef;
          }
          54%,100% {
            stroke:#375b51;
          }
        }
        .oD {
          animation:oD 10s steps(1,end) infinite;
        }
        @keyframes oD {
          0% {
            opacity:0;
          }
          54%,100% {
            opacity:1;
          }
        }
        .nE {
          opacity:.25;
          animation:nE 10s steps(1,end) infinite;
        }
        .nE circle {
          stroke:#375b51;
          stroke-width:2;
          animation:readyE 10s steps(1,end) infinite;
        }
        @keyframes nE {
          0% {
            opacity:1;
          }
          68%,100% {
            opacity:.25;
          }
        }
        @keyframes readyE {
          0% {
            stroke:#375b51;
          }
          54% {
            stroke:#77c9ef;
          }
          68%,100% {
            stroke:#375b51;
          }
        }
        .oE {
          animation:oE 10s steps(1,end) infinite;
        }
        @keyframes oE {
          0% {
            opacity:0;
          }
          68%,100% {
            opacity:1;
          }
        }
        .nF {
          opacity:.25;
          animation:nF 10s steps(1,end) infinite;
        }
        .nF circle {
          stroke:#375b51;
          stroke-width:2;
          animation:readyF 10s steps(1,end) infinite;
        }
        @keyframes nF {
          0% {
            opacity:1;
          }
          82%,100% {
            opacity:.25;
          }
        }
        @keyframes readyF {
          0% {
            stroke:#375b51;
          }
          54% {
            stroke:#77c9ef;
          }
          82%,100% {
            stroke:#375b51;
          }
        }
        .oF {
          animation:oF 10s steps(1,end) infinite;
        }
        @keyframes oF {
          0% {
            opacity:0;
          }
          82%,100% {
            opacity:1;
          }
        }
        text {
          font:11px ui-monospace,monospace;
          fill:#deeee4;
          text-anchor:middle;
        }
        .pin {
          stroke:#f3c977;
          stroke-width:3;
        }
        .original {
          opacity:.16;
        }
        .edge {
          stroke:#72998a;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Topological Sort">
        <defs>
          <marker id="dep" markerWidth="4" markerHeight="4" refX="7" refY="3" viewBox="0 0 8 6" orient="auto">
            <path class="solid" d="M0 0L8 3L0 6Z"/>
          </marker>
        </defs>
        <path class="ink original" d="M33 24L56 24"/>
        <path class="ink edge eAC" marker-end="url(#dep)" d="M33 24L56 24"/>
        <path class="pin pinAC" d="M52 20h5"/>
        <path class="ink original" d="M29.857 30.833L59.492 65.407"/>
        <path class="ink edge eAD" marker-end="url(#dep)" d="M29.857 30.833L59.492 65.407"/>
        <path class="pin pinAD" d="M52 69h5"/>
        <path class="ink original" d="M33 73L56 73"/>
        <path class="ink edge eBD" marker-end="url(#dep)" d="M33 73L56 73"/>
        <path class="pin pinBD" d="M52 77h5"/>
        <path class="ink original" d="M75 24L102 24"/>
        <path class="ink edge eCE" marker-end="url(#dep)" d="M75 24L102 24"/>
        <path class="pin pinCE" d="M98 20h5"/>
        <path class="ink original" d="M72.16 66.438L105.156 31.291"/>
        <path class="ink edge eDE" marker-end="url(#dep)" d="M72.16 66.438L105.156 31.291"/>
        <path class="pin pinDE" d="M98 28h5"/>
        <path class="ink original" d="M75 73L102 73"/>
        <path class="ink edge eDF" marker-end="url(#dep)" d="M75 73L102 73"/>
        <path class="pin pinDF" d="M98 69h5"/>
        <g class="node nA">
          <circle class="paper" cx="24" cy="24" r="8"/>
          <text x="24" y="28">A</text>
        </g>
        <g class="out oA">
          <circle class="paper ink" cx="20" cy="118" r="7"/>
          <text x="20" y="122">A</text>
        </g>
        <g class="node nB">
          <circle class="paper" cx="24" cy="73" r="8"/>
          <text x="24" y="77">B</text>
        </g>
        <g class="out oB">
          <circle class="paper ink" cx="40" cy="118" r="7"/>
          <text x="40" y="122">B</text>
        </g>
        <g class="node nC">
          <circle class="paper" cx="66" cy="24" r="8"/>
          <text x="66" y="28">C</text>
        </g>
        <g class="out oC">
          <circle class="paper ink" cx="60" cy="118" r="7"/>
          <text x="60" y="122">C</text>
        </g>
        <g class="node nD">
          <circle class="paper" cx="66" cy="73" r="8"/>
          <text x="66" y="77">D</text>
        </g>
        <g class="out oD">
          <circle class="paper ink" cx="80" cy="118" r="7"/>
          <text x="80" y="122">D</text>
        </g>
        <g class="node nE">
          <circle class="paper" cx="112" cy="24" r="8"/>
          <text x="112" y="28">E</text>
        </g>
        <g class="out oE">
          <circle class="paper ink" cx="100" cy="118" r="7"/>
          <text x="100" y="122">E</text>
        </g>
        <g class="node nF">
          <circle class="paper" cx="112" cy="73" r="8"/>
          <text x="112" y="77">F</text>
        </g>
        <g class="out oF">
          <circle class="paper ink" cx="120" cy="118" r="7"/>
          <text x="120" y="122">F</text>
        </g>
        <path class="ink muted" d="M10 106v24h120v-24"/>
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

if (!customElements.get("concept-topological-sort")) {
  customElements.define("concept-topological-sort", ConceptTopologicalSort);
}
