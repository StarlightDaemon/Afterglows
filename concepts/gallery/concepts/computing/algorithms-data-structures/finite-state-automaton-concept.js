// Finite-State Automaton. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptFiniteStateAutomaton extends HTMLElement {
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
        .b0 {
          opacity:.3;
          animation:b0 8s steps(1,end) infinite;
        }
        @keyframes b0 {
          0% {
            opacity:1;
          }
          18%,100% {
            opacity:.3;
          }
        }
        .b1 {
          opacity:.3;
          animation:b1 8s steps(1,end) infinite;
        }
        @keyframes b1 {
          0% {
            opacity:1;
          }
          30%,100% {
            opacity:.3;
          }
        }
        .b2 {
          opacity:.3;
          animation:b2 8s steps(1,end) infinite;
        }
        @keyframes b2 {
          0% {
            opacity:1;
          }
          42%,100% {
            opacity:.3;
          }
        }
        .b3 {
          opacity:.3;
          animation:b3 8s steps(1,end) infinite;
        }
        @keyframes b3 {
          0% {
            opacity:1;
          }
          54%,100% {
            opacity:.3;
          }
        }
        .b4 {
          opacity:.3;
          animation:b4 8s steps(1,end) infinite;
        }
        @keyframes b4 {
          0% {
            opacity:1;
          }
          66%,100% {
            opacity:.3;
          }
        }
        .b5 {
          opacity:.3;
          animation:b5 8s steps(1,end) infinite;
        }
        @keyframes b5 {
          0% {
            opacity:1;
          }
          78%,100% {
            opacity:.3;
          }
        }
        text {
          font:11px ui-monospace,monospace;
          fill:#e0eee5;
          text-anchor:middle;
        }
        .tape {
          fill:none;
          stroke:#375b51;
          stroke-width:1;
        }
        .state {
          stroke:#70edb1;
          stroke-width:1.5;
        }
        .even {
          fill:#336e54;
          animation:even 8s steps(1,end) infinite;
        }
        .odd {
          fill:#07120f;
          animation:odd 8s steps(1,end) infinite;
        }
        .active {
          stroke:#f3c977;
          stroke-width:2.5;
          opacity:0;
        }
        .aeo {
          animation:eo 8s steps(1,end) infinite;
        }
        .aoe {
          animation:oe 8s steps(1,end) infinite;
        }
        .aoo {
          animation:oo 8s steps(1,end) infinite;
        }
        .cursor {
          opacity:0;
          animation:cursor 8s steps(1,end) infinite;
        }
        .accepted {
          animation:accept 8s steps(1,end) infinite;
        }
        @keyframes even {
          0% {
            fill:#336e54;
          }
          18% {
            fill:#07120f;
          }
          42% {
            fill:#336e54;
          }
          54% {
            fill:#07120f;
          }
          78%,100% {
            fill:#336e54;
          }
        }
        @keyframes odd {
          0% {
            fill:#07120f;
          }
          18% {
            fill:#336e54;
          }
          42% {
            fill:#07120f;
          }
          54% {
            fill:#336e54;
          }
          78%,100% {
            fill:#07120f;
          }
        }
        @keyframes eo {
          0% {
            opacity:0;
          }
          10% {
            opacity:1;
          }
          18% {
            opacity:0;
          }
          46% {
            opacity:1;
          }
          54%,100% {
            opacity:0;
          }
        }
        @keyframes oe {
          0% {
            opacity:0;
          }
          34% {
            opacity:1;
          }
          42% {
            opacity:0;
          }
          70% {
            opacity:1;
          }
          78%,100% {
            opacity:0;
          }
        }
        @keyframes oo {
          0% {
            opacity:0;
          }
          22% {
            opacity:1;
          }
          30% {
            opacity:0;
          }
          58% {
            opacity:1;
          }
          66%,100% {
            opacity:0;
          }
        }
        @keyframes cursor {
          0% {
            opacity:1;
            transform:translateX(22px);
          }
          22% {
            transform:translateX(40px);
          }
          34% {
            transform:translateX(58px);
          }
          46% {
            transform:translateX(76px);
          }
          58% {
            transform:translateX(94px);
          }
          70% {
            transform:translateX(112px);
          }
          82%,100% {
            opacity:0;
          }
        }
        @keyframes accept {
          0% {
            opacity:0;
          }
          86%,100% {
            opacity:1;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Finite-State Automaton">
        <defs>
          <marker id="transition" markerWidth="4" markerHeight="4" refX="7" refY="3" viewBox="0 0 8 6" orient="auto">
            <path class="solid" d="M0 0L8 3L0 6Z"/>
          </marker>
        </defs>
        <path class="ink muted" marker-end="url(#transition)" d="M53 80Q70 58 87 80"/>
        <path class="ink active aeo" d="M53 80Q70 58 87 80"/>
        <path class="ink muted" marker-end="url(#transition)" d="M87 91Q70 114 53 91"/>
        <path class="ink active aoe" d="M87 91Q70 114 53 91"/>
        <path class="ink muted" marker-end="url(#transition)" d="M32 73C10 32 63 32 49 74"/>
        <path class="ink muted" marker-end="url(#transition)" d="M91 74C78 32 129 32 108 73"/>
        <path class="ink active aoo" d="M91 74C78 32 129 32 108 73"/>
        <path class="ink" marker-end="url(#transition)" d="M10 85H24"/>
        <circle class="ink" cx="40" cy="85" r="16"/>
        <circle class="state even" cx="40" cy="85" r="13"/>
        <circle class="state odd" cx="100" cy="85" r="13"/>
        <text x="40" y="89">E</text>
        <text x="100" y="89">O</text>
        <text x="70" y="63">1</text>
        <text x="70" y="115">1</text>
        <text x="28" y="49">0</text>
        <text x="112" y="49">0</text>
        <rect class="tape" x="15" y="13" width="14" height="17"/>
        <text class="b0" x="22" y="26">1</text>
        <rect class="tape" x="33" y="13" width="14" height="17"/>
        <text class="b1" x="40" y="26">0</text>
        <rect class="tape" x="51" y="13" width="14" height="17"/>
        <text class="b2" x="58" y="26">1</text>
        <rect class="tape" x="69" y="13" width="14" height="17"/>
        <text class="b3" x="76" y="26">1</text>
        <rect class="tape" x="87" y="13" width="14" height="17"/>
        <text class="b4" x="94" y="26">0</text>
        <rect class="tape" x="105" y="13" width="14" height="17"/>
        <text class="b5" x="112" y="26">1</text>
        <path class="ink cursor" d="M0 5v5m-3 -3l3 3l3 -3"/>
        <path class="ink accepted" d="M62 128l5 5l11 -11"/>
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

if (!customElements.get("concept-finite-state-automaton")) {
  customElements.define("concept-finite-state-automaton", ConceptFiniteStateAutomaton);
}
