// Bloom Filter. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBloomFilter extends HTMLElement {
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
        .bit.b1 {
          fill:#70edb1;
          animation:b1 10s steps(1,end) infinite;
        }
        @keyframes b1 {
          0% {
            fill:#10251c;
          }
          18%,100% {
            fill:#70edb1;
          }
        }
        .bit.b2 {
          fill:#70edb1;
          animation:b2 10s steps(1,end) infinite;
        }
        @keyframes b2 {
          0% {
            fill:#10251c;
          }
          18%,100% {
            fill:#70edb1;
          }
        }
        .bit.b3 {
          fill:#70edb1;
          animation:b3 10s steps(1,end) infinite;
        }
        @keyframes b3 {
          0% {
            fill:#10251c;
          }
          34%,100% {
            fill:#70edb1;
          }
        }
        .bit.b4 {
          fill:#70edb1;
          animation:b4 10s steps(1,end) infinite;
        }
        @keyframes b4 {
          0% {
            fill:#10251c;
          }
          34%,100% {
            fill:#70edb1;
          }
        }
        text {
          font:12px ui-monospace,monospace;
          text-anchor:middle;
          fill:#cfe6d8;
        }
        .key {
          fill:#70edb1;
        }
        .index {
          font-size:9px;
          fill:#8aac9b;
        }
        .bit {
          fill:#10251c;
          stroke:#51745f;
          stroke-width:1;
        }
        .insert {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.5;
          opacity:0;
        }
        .insert17 {
          animation:insert17 10s steps(1,end) infinite;
        }
        .insert35 {
          animation:insert35 10s steps(1,end) infinite;
        }
        .query-links {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.5;
        }
        .maybe-links,.q33,.maybe {
          opacity:0;
          animation:maybe 10s steps(1,end) infinite;
        }
        .absent-links,.q42,.absent,.zero {
          animation:absent 10s steps(1,end) infinite;
        }
        .absent-links {
          stroke:#ed8eab;
        }
        .zero {
          fill:none;
          stroke:#ed8eab;
          stroke-width:2;
        }
        .maybe {
          fill:#f3c977;
          font-size:19px;
        }
        .absent {
          stroke:#ed8eab;
          stroke-width:2;
        }
        .key17 {
          animation:key17 10s steps(1,end) infinite;
        }
        .key35 {
          animation:key35 10s steps(1,end) infinite;
        }
        @keyframes insert17 {
          0% {
            opacity:0;
          }
          8% {
            opacity:1;
          }
          20%,100% {
            opacity:0;
          }
        }
        @keyframes insert35 {
          0% {
            opacity:0;
          }
          24% {
            opacity:1;
          }
          36%,100% {
            opacity:0;
          }
        }
        @keyframes maybe {
          0% {
            opacity:0;
          }
          46% {
            opacity:1;
          }
          70%,100% {
            opacity:0;
          }
        }
        @keyframes absent {
          0% {
            opacity:0;
          }
          76%,100% {
            opacity:1;
          }
        }
        @keyframes key17 {
          0% {
            fill:#688273;
          }
          18%,100% {
            fill:#70edb1;
          }
        }
        @keyframes key35 {
          0% {
            fill:#688273;
          }
          34%,100% {
            fill:#70edb1;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Bloom Filter">
        <text class="key key17" x="40" y="24">17</text>
        <text class="key key35" x="100" y="24">35</text>
        <text class="index" x="23.5" y="54">0</text>
        <rect class="bit b0" x="18" y="60" width="11" height="18"/>
        <text class="index" x="36.5" y="54">1</text>
        <rect class="bit b1" x="31" y="60" width="11" height="18"/>
        <text class="index" x="49.5" y="54">2</text>
        <rect class="bit b2" x="44" y="60" width="11" height="18"/>
        <text class="index" x="62.5" y="54">3</text>
        <rect class="bit b3" x="57" y="60" width="11" height="18"/>
        <text class="index" x="75.5" y="54">4</text>
        <rect class="bit b4" x="70" y="60" width="11" height="18"/>
        <text class="index" x="88.5" y="54">5</text>
        <rect class="bit b5" x="83" y="60" width="11" height="18"/>
        <text class="index" x="101.5" y="54">6</text>
        <rect class="bit b6" x="96" y="60" width="11" height="18"/>
        <text class="index" x="114.5" y="54">7</text>
        <rect class="bit b7" x="109" y="60" width="11" height="18"/>
        <path class="insert insert17" d="M40 28L36.5 60M40 28L49.5 60"/>
        <path class="insert insert35" d="M100 28L62.5 60M100 28L75.5 60"/>
        <path class="query-links maybe-links" d="M70 98L36.5 78M70 98L75.5 78"/>
        <path class="query-links absent-links" d="M70 98L49.5 78M70 98L88.5 78"/>
        <rect class="zero" x="82" y="59" width="13" height="20"/>
        <path class="ink muted" d="M44 109L70 98L96 109"/>
        <text class="query q33" x="31" y="117">33</text>
        <text class="query q42" x="31" y="117">42</text>
        <text class="answer maybe" x="110" y="117">?</text>
        <path class="answer absent" d="M104 107l10 10m-10 0l10 -10"/>
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

if (!customElements.get("concept-bloom-filter")) {
  customElements.define("concept-bloom-filter", ConceptBloomFilter);
}
