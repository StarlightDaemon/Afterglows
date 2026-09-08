// Grow-Only Counter CRDT. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptGrowOnlyCounterCrdt extends HTMLElement {
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
        .sum-old {
          opacity:0
        }
        .echo {
          fill:none;
          stroke:#f3c977;
          opacity:0;
          animation:echo 12s infinite
        }
        @keyframes echo {
          0%,90% {
            opacity:0
          }
          91%,97% {
            opacity:1;
            stroke-dashoffset:16
          }
          98%,100% {
            opacity:0
          }
        }
        .r0c0u0 {
          animation:b000 12s infinite
        }
        @keyframes b000 {
          0%,11.9% {
            opacity:.1
          }
          12%,100% {
            opacity:1
          }
        }
        .r0c0u1 {
          animation:b001 12s infinite
        }
        @keyframes b001 {
          0%,13.9% {
            opacity:.1
          }
          14%,100% {
            opacity:1
          }
        }
        .r0c1u0 {
          animation:b010 12s infinite
        }
        @keyframes b010 {
          0%,39.9% {
            opacity:.1
          }
          40%,100% {
            opacity:1
          }
        }
        .r0c2u0 {
          animation:b020 12s infinite
        }
        @keyframes b020 {
          0%,69.9% {
            opacity:.1
          }
          70%,100% {
            opacity:1
          }
        }
        .r0c2u1 {
          animation:b021 12s infinite
        }
        @keyframes b021 {
          0%,69.9% {
            opacity:.1
          }
          70%,100% {
            opacity:1
          }
        }
        .r0c2u2 {
          animation:b022 12s infinite
        }
        @keyframes b022 {
          0%,69.9% {
            opacity:.1
          }
          70%,100% {
            opacity:1
          }
        }
        .sum0-0 {
          animation:sum0-0 12s infinite
        }
        @keyframes sum0-0 {
          0%,11.9% {
            opacity:1
          }
          12%,100% {
            opacity:0
          }
        }
        .sum0-1 {
          animation:sum0-1 12s infinite
        }
        @keyframes sum0-1 {
          0%,11.9% {
            opacity:0
          }
          12%,13.9% {
            opacity:1
          }
          14%,100% {
            opacity:0
          }
        }
        .sum0-2 {
          animation:sum0-2 12s infinite
        }
        @keyframes sum0-2 {
          0%,13.9% {
            opacity:0
          }
          14%,39.9% {
            opacity:1
          }
          40%,100% {
            opacity:0
          }
        }
        .sum0-3 {
          animation:sum0-3 12s infinite
        }
        @keyframes sum0-3 {
          0%,39.9% {
            opacity:0
          }
          40%,69.9% {
            opacity:1
          }
          70%,100% {
            opacity:0
          }
        }
        .sum0-4 {
          animation:sum0-4 12s infinite
        }
        @keyframes sum0-4 {
          0%,69.9% {
            opacity:0
          }
          70%,100% {
            opacity:1
          }
        }
        .r1c0u0 {
          animation:b100 12s infinite
        }
        @keyframes b100 {
          0%,84.9% {
            opacity:.1
          }
          85%,100% {
            opacity:1
          }
        }
        .r1c0u1 {
          animation:b101 12s infinite
        }
        @keyframes b101 {
          0%,84.9% {
            opacity:.1
          }
          85%,100% {
            opacity:1
          }
        }
        .r1c1u0 {
          animation:b110 12s infinite
        }
        @keyframes b110 {
          0%,19.9% {
            opacity:.1
          }
          20%,100% {
            opacity:1
          }
        }
        .r1c2u0 {
          animation:b120 12s infinite
        }
        @keyframes b120 {
          0%,84.9% {
            opacity:.1
          }
          85%,100% {
            opacity:1
          }
        }
        .r1c2u1 {
          animation:b121 12s infinite
        }
        @keyframes b121 {
          0%,84.9% {
            opacity:.1
          }
          85%,100% {
            opacity:1
          }
        }
        .r1c2u2 {
          animation:b122 12s infinite
        }
        @keyframes b122 {
          0%,84.9% {
            opacity:.1
          }
          85%,100% {
            opacity:1
          }
        }
        .sum1-0 {
          animation:sum1-0 12s infinite
        }
        @keyframes sum1-0 {
          0%,19.9% {
            opacity:1
          }
          20%,100% {
            opacity:0
          }
        }
        .sum1-1 {
          animation:sum1-1 12s infinite
        }
        @keyframes sum1-1 {
          0%,19.9% {
            opacity:0
          }
          20%,84.9% {
            opacity:1
          }
          85%,100% {
            opacity:0
          }
        }
        .sum1-2 {
          animation:sum1-2 12s infinite
        }
        @keyframes sum1-2 {
          0%,84.9% {
            opacity:0
          }
          85%,100% {
            opacity:1
          }
        }
        .r2c0u0 {
          animation:b200 12s infinite
        }
        @keyframes b200 {
          0%,54.9% {
            opacity:.1
          }
          55%,100% {
            opacity:1
          }
        }
        .r2c0u1 {
          animation:b201 12s infinite
        }
        @keyframes b201 {
          0%,54.9% {
            opacity:.1
          }
          55%,100% {
            opacity:1
          }
        }
        .r2c1u0 {
          animation:b210 12s infinite
        }
        @keyframes b210 {
          0%,54.9% {
            opacity:.1
          }
          55%,100% {
            opacity:1
          }
        }
        .r2c2u0 {
          animation:b220 12s infinite
        }
        @keyframes b220 {
          0%,27.9% {
            opacity:.1
          }
          28%,100% {
            opacity:1
          }
        }
        .r2c2u1 {
          animation:b221 12s infinite
        }
        @keyframes b221 {
          0%,29.9% {
            opacity:.1
          }
          30%,100% {
            opacity:1
          }
        }
        .r2c2u2 {
          animation:b222 12s infinite
        }
        @keyframes b222 {
          0%,31.9% {
            opacity:.1
          }
          32%,100% {
            opacity:1
          }
        }
        .sum2-0 {
          animation:sum2-0 12s infinite
        }
        @keyframes sum2-0 {
          0%,27.9% {
            opacity:1
          }
          28%,100% {
            opacity:0
          }
        }
        .sum2-1 {
          animation:sum2-1 12s infinite
        }
        @keyframes sum2-1 {
          0%,27.9% {
            opacity:0
          }
          28%,29.9% {
            opacity:1
          }
          30%,100% {
            opacity:0
          }
        }
        .sum2-2 {
          animation:sum2-2 12s infinite
        }
        @keyframes sum2-2 {
          0%,29.9% {
            opacity:0
          }
          30%,31.9% {
            opacity:1
          }
          32%,100% {
            opacity:0
          }
        }
        .sum2-3 {
          animation:sum2-3 12s infinite
        }
        @keyframes sum2-3 {
          0%,31.9% {
            opacity:0
          }
          32%,54.9% {
            opacity:1
          }
          55%,100% {
            opacity:0
          }
        }
        .sum2-4 {
          animation:sum2-4 12s infinite
        }
        @keyframes sum2-4 {
          0%,54.9% {
            opacity:0
          }
          55%,100% {
            opacity:1
          }
        }
        .m0 {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.5;
          stroke-dasharray:100;
          opacity:0;
          animation:m0 12s linear infinite
        }
        @keyframes m0 {
          0%,32.9% {
            opacity:0;
            stroke-dashoffset:100
          }
          33% {
            opacity:1;
            stroke-dashoffset:100
          }
          40% {
            opacity:1;
            stroke-dashoffset:0
          }
          40.1%,100% {
            opacity:0
          }
        }
        .m1 {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.5;
          stroke-dasharray:100;
          opacity:0;
          animation:m1 12s linear infinite
        }
        @keyframes m1 {
          0%,45.9% {
            opacity:0;
            stroke-dashoffset:100
          }
          46% {
            opacity:1;
            stroke-dashoffset:100
          }
          55% {
            opacity:1;
            stroke-dashoffset:0
          }
          55.1%,100% {
            opacity:0
          }
        }
        .m2 {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.5;
          stroke-dasharray:100;
          opacity:0;
          animation:m2 12s linear infinite
        }
        @keyframes m2 {
          0%,60.9% {
            opacity:0;
            stroke-dashoffset:100
          }
          61% {
            opacity:1;
            stroke-dashoffset:100
          }
          70% {
            opacity:1;
            stroke-dashoffset:0
          }
          70.1%,100% {
            opacity:0
          }
        }
        .m3 {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.5;
          stroke-dasharray:100;
          opacity:0;
          animation:m3 12s linear infinite
        }
        @keyframes m3 {
          0%,75.9% {
            opacity:0;
            stroke-dashoffset:100
          }
          76% {
            opacity:1;
            stroke-dashoffset:100
          }
          85% {
            opacity:1;
            stroke-dashoffset:0
          }
          85.1%,100% {
            opacity:0
          }
        }
        .m4 {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.5;
          stroke-dasharray:100;
          opacity:0;
          animation:m4 12s linear infinite
        }
        @keyframes m4 {
          0%,90.9% {
            opacity:0;
            stroke-dashoffset:100
          }
          91% {
            opacity:1;
            stroke-dashoffset:100
          }
          97% {
            opacity:1;
            stroke-dashoffset:0
          }
          97.1%,100% {
            opacity:0
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Grow-Only Counter CRDT">
        <text x="14" y="35">A</text>
        <path class="ink muted" d="M38 44H102"/>
        <circle class="ink muted" cx="120" cy="32" r="12"/>
        <rect class="bar r0c0u0" x="42" y="37" width="14" height="6" rx="1" fill="#f3c977"/>
        <rect class="bar r0c0u1" x="42" y="30" width="14" height="6" rx="1" fill="#f3c977"/>
        <rect class="bar r0c1u0" x="62" y="37" width="14" height="6" rx="1" fill="#77c9ef"/>
        <rect class="bar r0c2u0" x="82" y="37" width="14" height="6" rx="1" fill="#ed8eab"/>
        <rect class="bar r0c2u1" x="82" y="30" width="14" height="6" rx="1" fill="#ed8eab"/>
        <rect class="bar r0c2u2" x="82" y="23" width="14" height="6" rx="1" fill="#ed8eab"/>
        <text class="sum sum-old sum0-0" x="120" y="36">0</text>
        <text class="sum sum-old sum0-1" x="120" y="36">1</text>
        <text class="sum sum-old sum0-2" x="120" y="36">2</text>
        <text class="sum sum-old sum0-3" x="120" y="36">3</text>
        <text class="sum  sum0-4" x="120" y="36">6</text>
        <text x="14" y="75">B</text>
        <path class="ink muted" d="M38 84H102"/>
        <circle class="ink muted" cx="120" cy="72" r="12"/>
        <rect class="bar r1c0u0" x="42" y="77" width="14" height="6" rx="1" fill="#f3c977"/>
        <rect class="bar r1c0u1" x="42" y="70" width="14" height="6" rx="1" fill="#f3c977"/>
        <rect class="bar r1c1u0" x="62" y="77" width="14" height="6" rx="1" fill="#77c9ef"/>
        <rect class="bar r1c2u0" x="82" y="77" width="14" height="6" rx="1" fill="#ed8eab"/>
        <rect class="bar r1c2u1" x="82" y="70" width="14" height="6" rx="1" fill="#ed8eab"/>
        <rect class="bar r1c2u2" x="82" y="63" width="14" height="6" rx="1" fill="#ed8eab"/>
        <text class="sum sum-old sum1-0" x="120" y="76">0</text>
        <text class="sum sum-old sum1-1" x="120" y="76">1</text>
        <text class="sum  sum1-2" x="120" y="76">6</text>
        <text x="14" y="115">C</text>
        <path class="ink muted" d="M38 124H102"/>
        <circle class="ink muted" cx="120" cy="112" r="12"/>
        <rect class="bar r2c0u0" x="42" y="117" width="14" height="6" rx="1" fill="#f3c977"/>
        <rect class="bar r2c0u1" x="42" y="110" width="14" height="6" rx="1" fill="#f3c977"/>
        <rect class="bar r2c1u0" x="62" y="117" width="14" height="6" rx="1" fill="#77c9ef"/>
        <rect class="bar r2c2u0" x="82" y="117" width="14" height="6" rx="1" fill="#ed8eab"/>
        <rect class="bar r2c2u1" x="82" y="110" width="14" height="6" rx="1" fill="#ed8eab"/>
        <rect class="bar r2c2u2" x="82" y="103" width="14" height="6" rx="1" fill="#ed8eab"/>
        <text class="sum sum-old sum2-0" x="120" y="116">0</text>
        <text class="sum sum-old sum2-1" x="120" y="116">1</text>
        <text class="sum sum-old sum2-2" x="120" y="116">2</text>
        <text class="sum sum-old sum2-3" x="120" y="116">3</text>
        <text class="sum  sum2-4" x="120" y="116">6</text>
        <circle class="echo" cx="120" cy="72" r="15" stroke-dasharray="3 2"/>
        <path class="merge m0" pathLength="100" d="M35 73Q21 53 35 33"/>
        <path class="merge m1" pathLength="100" d="M35 33Q21 73 35 113"/>
        <path class="merge m2" pathLength="100" d="M35 113Q21 73 35 33"/>
        <path class="merge m3" pathLength="100" d="M35 113Q21 93 35 73"/>
        <path class="merge m4" pathLength="100" d="M35 113Q21 93 35 73"/>
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

if (!customElements.get("concept-grow-only-counter-crdt")) {
  customElements.define("concept-grow-only-counter-crdt", ConceptGrowOnlyCounterCrdt);
}
