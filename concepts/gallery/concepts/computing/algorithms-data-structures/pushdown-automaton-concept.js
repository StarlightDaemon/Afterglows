// Pushdown Automaton. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPushdownAutomaton extends HTMLElement {
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
        .i0 {
          opacity:.3;
          animation:i0 9s steps(1,end) infinite;
        }
        @keyframes i0 {
          0% {
            opacity:1;
          }
          16%,100% {
            opacity:.3;
          }
        }
        .i1 {
          opacity:.3;
          animation:i1 9s steps(1,end) infinite;
        }
        @keyframes i1 {
          0% {
            opacity:1;
          }
          30%,100% {
            opacity:.3;
          }
        }
        .i2 {
          opacity:.3;
          animation:i2 9s steps(1,end) infinite;
        }
        @keyframes i2 {
          0% {
            opacity:1;
          }
          44%,100% {
            opacity:.3;
          }
        }
        .i3 {
          opacity:.3;
          animation:i3 9s steps(1,end) infinite;
        }
        @keyframes i3 {
          0% {
            opacity:1;
          }
          58%,100% {
            opacity:.3;
          }
        }
        .i4 {
          opacity:.3;
          animation:i4 9s steps(1,end) infinite;
        }
        @keyframes i4 {
          0% {
            opacity:1;
          }
          72%,100% {
            opacity:.3;
          }
        }
        .i5 {
          opacity:.3;
          animation:i5 9s steps(1,end) infinite;
        }
        @keyframes i5 {
          0% {
            opacity:1;
          }
          86%,100% {
            opacity:.3;
          }
        }
        .f0 {
          opacity:0;
          transform:translate(40px,72px);
          animation:f0 9s linear infinite;
        }
        @keyframes f0 {
          0%,8% {
            opacity:0;
            transform:translate(40px,72px);
          }
          9% {
            opacity:1;
            transform:translate(40px,72px);
          }
          16%,78% {
            opacity:1;
            transform:translate(106px,99px);
          }
          86%,100% {
            opacity:0;
            transform:translate(40px,72px);
          }
        }
        .f1 {
          opacity:0;
          transform:translate(40px,72px);
          animation:f1 9s linear infinite;
        }
        @keyframes f1 {
          0%,22% {
            opacity:0;
            transform:translate(40px,72px);
          }
          23% {
            opacity:1;
            transform:translate(40px,72px);
          }
          30%,64% {
            opacity:1;
            transform:translate(106px,82px);
          }
          72%,100% {
            opacity:0;
            transform:translate(40px,72px);
          }
        }
        .f2 {
          opacity:0;
          transform:translate(40px,72px);
          animation:f2 9s linear infinite;
        }
        @keyframes f2 {
          0%,36% {
            opacity:0;
            transform:translate(40px,72px);
          }
          37% {
            opacity:1;
            transform:translate(40px,72px);
          }
          44%,50% {
            opacity:1;
            transform:translate(106px,65px);
          }
          58%,100% {
            opacity:0;
            transform:translate(40px,72px);
          }
        }
        text {
          font:12px ui-monospace,monospace;
          fill:#dfefe5;
          text-anchor:middle;
        }
        .input,.bracket {
          font-size:16px;
        }
        .base {
          fill:#243e32;
          stroke:#54715f;
        }
        .bottom {
          font-size:10px;
        }
        .accept-ring,.accept-check {
          animation:accept 9s steps(1,end) infinite;
        }
        .cursor {
          stroke:#f3c977;
          opacity:0;
          animation:cursor 9s steps(1,end) infinite;
        }
        @keyframes accept {
          0% {
            opacity:0;
          }
          94%,100% {
            opacity:1;
          }
        }
        @keyframes cursor {
          0% {
            opacity:1;
            transform:translateX(24px);
          }
          22% {
            transform:translateX(42px);
          }
          36% {
            transform:translateX(60px);
          }
          50% {
            transform:translateX(78px);
          }
          64% {
            transform:translateX(96px);
          }
          78% {
            transform:translateX(114px);
          }
          90%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Pushdown Automaton">
        <circle class="ink paper" cx="40" cy="72" r="14"/>
        <circle class="ink accept-ring" cx="40" cy="72" r="18"/>
        <text x="40" y="76">q</text>
        <path class="ink muted" d="M54 65H81m-4 -3l4 3l-4 3M81 83H54m4 -3l-4 3l4 3M90 47V126H122V47"/>
        <rect class="base" x="98" y="110" width="16" height="13"/>
        <text class="bottom" x="106" y="120">Z</text>
        <text class="input i0" x="24" y="25">(</text>
        <text class="input i1" x="42" y="25">[</text>
        <text class="input i2" x="60" y="25">{</text>
        <text class="input i3" x="78" y="25">}</text>
        <text class="input i4" x="96" y="25">]</text>
        <text class="input i5" x="114" y="25">)</text>
        <g class="frame f0">
          <rect class="paper ink" x="-8" y="-8" width="16" height="16"/>
          <text class="bracket" y="5">(</text>
        </g>
        <g class="frame f1">
          <rect class="paper ink" x="-8" y="-8" width="16" height="16"/>
          <text class="bracket" y="5">[</text>
        </g>
        <g class="frame f2">
          <rect class="paper ink" x="-8" y="-8" width="16" height="16"/>
          <text class="bracket" y="5">{</text>
        </g>
        <path class="ink cursor" d="M0 31v7m-3 -3l3 3l3 -3"/>
        <path class="ink accept-check" d="M30 111l7 7l14 -16"/>
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

if (!customElements.get("concept-pushdown-automaton")) {
  customElements.define("concept-pushdown-automaton", ConceptPushdownAutomaton);
}
