// Token-Bucket Rate Limiting. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptTokenBucketRateLimiting extends HTMLElement {
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
          font:8px monospace;
          text-anchor:middle
        }
        .t0,.t1,.t2,.t3 {
          opacity:0
        }
        .t0 {
          animation:t0 10s infinite
        }
        .t1 {
          animation:t1 10s infinite
        }
        .t2 {
          animation:t2 10s infinite
        }
        .t3 {
          animation:t3 10s infinite
        }
        .refill {
          opacity:0;
          animation:refill 10s linear infinite
        }
        @keyframes t0 {
          0%,9.9% {
            opacity:1
          }
          10%,39.9% {
            opacity:0
          }
          40%,59.9% {
            opacity:1
          }
          60%,100% {
            opacity:0
          }
        }
        @keyframes t1 {
          0%,14.9% {
            opacity:1
          }
          15%,49.9% {
            opacity:0
          }
          50%,64.9% {
            opacity:1
          }
          65%,100% {
            opacity:0
          }
        }
        @keyframes t2 {
          0%,19.9% {
            opacity:1
          }
          20%,100% {
            opacity:0
          }
        }
        @keyframes t3 {
          0%,24.9% {
            opacity:1
          }
          25%,100% {
            opacity:0
          }
        }
        @keyframes refill {
          0%,36% {
            opacity:0;
            transform:translate(0,0)
          }
          37% {
            opacity:1;
            transform:translate(0,0)
          }
          40% {
            opacity:1;
            transform:translate(0,24px)
          }
          40.1%,46% {
            opacity:0;
            transform:translate(20px,0)
          }
          47% {
            opacity:1;
            transform:translate(20px,0)
          }
          50% {
            opacity:1;
            transform:translate(20px,24px)
          }
          50.1%,100% {
            opacity:0
          }
        }
        .p0 {
          fill:#70edb1;
          opacity:0;
          animation:p0 10s linear infinite
        }
        @keyframes p0 {
          0%,5.9% {
            opacity:0;
            transform:translate(0,0)
          }
          6% {
            opacity:1;
            transform:translate(0,0)
          }
          10% {
            opacity:1;
            transform:translate(80px,0)
          }
          13% {
            opacity:1;
            transform:translate(117px,0px)
          }
          13.1%,100% {
            opacity:0
          }
        }
        .h0 {
          fill:#70edb1;
          animation:h0 10s infinite
        }
        @keyframes h0 {
          0%,12.9% {
            opacity:.1
          }
          13%,100% {
            opacity:1
          }
        }
        .p1 {
          fill:#70edb1;
          opacity:0;
          animation:p1 10s linear infinite
        }
        @keyframes p1 {
          0%,10.9% {
            opacity:0;
            transform:translate(0,0)
          }
          11% {
            opacity:1;
            transform:translate(0,0)
          }
          15% {
            opacity:1;
            transform:translate(80px,0)
          }
          18% {
            opacity:1;
            transform:translate(117px,0px)
          }
          18.1%,100% {
            opacity:0
          }
        }
        .h1 {
          fill:#70edb1;
          animation:h1 10s infinite
        }
        @keyframes h1 {
          0%,17.9% {
            opacity:.1
          }
          18%,100% {
            opacity:1
          }
        }
        .p2 {
          fill:#70edb1;
          opacity:0;
          animation:p2 10s linear infinite
        }
        @keyframes p2 {
          0%,15.9% {
            opacity:0;
            transform:translate(0,0)
          }
          16% {
            opacity:1;
            transform:translate(0,0)
          }
          20% {
            opacity:1;
            transform:translate(80px,0)
          }
          23% {
            opacity:1;
            transform:translate(117px,0px)
          }
          23.1%,100% {
            opacity:0
          }
        }
        .h2 {
          fill:#70edb1;
          animation:h2 10s infinite
        }
        @keyframes h2 {
          0%,22.9% {
            opacity:.1
          }
          23%,100% {
            opacity:1
          }
        }
        .p3 {
          fill:#70edb1;
          opacity:0;
          animation:p3 10s linear infinite
        }
        @keyframes p3 {
          0%,20.9% {
            opacity:0;
            transform:translate(0,0)
          }
          21% {
            opacity:1;
            transform:translate(0,0)
          }
          25% {
            opacity:1;
            transform:translate(80px,0)
          }
          28% {
            opacity:1;
            transform:translate(117px,0px)
          }
          28.1%,100% {
            opacity:0
          }
        }
        .h3 {
          fill:#70edb1;
          animation:h3 10s infinite
        }
        @keyframes h3 {
          0%,27.9% {
            opacity:.1
          }
          28%,100% {
            opacity:1
          }
        }
        .p4 {
          fill:#ed8eab;
          opacity:0;
          animation:p4 10s linear infinite
        }
        @keyframes p4 {
          0%,25.9% {
            opacity:0;
            transform:translate(0,0)
          }
          26% {
            opacity:1;
            transform:translate(0,0)
          }
          30% {
            opacity:1;
            transform:translate(80px,0)
          }
          33% {
            opacity:1;
            transform:translate(111px,23px)
          }
          33.1%,100% {
            opacity:0
          }
        }
        .h4 {
          fill:#ed8eab;
          animation:h4 10s infinite
        }
        @keyframes h4 {
          0%,32.9% {
            opacity:.1
          }
          33%,100% {
            opacity:1
          }
        }
        .p5 {
          fill:#70edb1;
          opacity:0;
          animation:p5 10s linear infinite
        }
        @keyframes p5 {
          0%,55.9% {
            opacity:0;
            transform:translate(0,0)
          }
          56% {
            opacity:1;
            transform:translate(0,0)
          }
          60% {
            opacity:1;
            transform:translate(80px,0)
          }
          63% {
            opacity:1;
            transform:translate(117px,0px)
          }
          63.1%,100% {
            opacity:0
          }
        }
        .h5 {
          fill:#70edb1;
          animation:h5 10s infinite
        }
        @keyframes h5 {
          0%,62.9% {
            opacity:.1
          }
          63%,100% {
            opacity:1
          }
        }
        .p6 {
          fill:#70edb1;
          opacity:0;
          animation:p6 10s linear infinite
        }
        @keyframes p6 {
          0%,60.9% {
            opacity:0;
            transform:translate(0,0)
          }
          61% {
            opacity:1;
            transform:translate(0,0)
          }
          65% {
            opacity:1;
            transform:translate(80px,0)
          }
          68% {
            opacity:1;
            transform:translate(117px,0px)
          }
          68.1%,100% {
            opacity:0
          }
        }
        .h6 {
          fill:#70edb1;
          animation:h6 10s infinite
        }
        @keyframes h6 {
          0%,67.9% {
            opacity:.1
          }
          68%,100% {
            opacity:1
          }
        }
        .p7 {
          fill:#ed8eab;
          opacity:0;
          animation:p7 10s linear infinite
        }
        @keyframes p7 {
          0%,65.9% {
            opacity:0;
            transform:translate(0,0)
          }
          66% {
            opacity:1;
            transform:translate(0,0)
          }
          70% {
            opacity:1;
            transform:translate(80px,0)
          }
          73% {
            opacity:1;
            transform:translate(111px,23px)
          }
          73.1%,100% {
            opacity:0
          }
        }
        .h7 {
          fill:#ed8eab;
          animation:h7 10s infinite
        }
        @keyframes h7 {
          0%,72.9% {
            opacity:.1
          }
          73%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Token-Bucket Rate Limiting">
        <path class="ink" d="M17 19V45H103V19"/>
        <circle class="ink muted" cx="30" cy="32" r="6"/>
        <circle class="warm t0" cx="30" cy="32" r="4"/>
        <circle class="ink muted" cx="50" cy="32" r="6"/>
        <circle class="warm t1" cx="50" cy="32" r="4"/>
        <circle class="ink muted" cx="70" cy="32" r="6"/>
        <circle class="warm t2" cx="70" cy="32" r="4"/>
        <circle class="ink muted" cx="90" cy="32" r="6"/>
        <circle class="warm t3" cx="90" cy="32" r="4"/>
        <text x="70" y="13">1 token / second</text>
        <path class="ink muted" d="M8 73H130M91 73L122 96"/>
        <path class="ink" d="M89 63V83M94 63V83"/>
        <path class="ink muted" d="M110 89V104H132V89"/>
        <circle class="warm refill" cx="30" cy="8" r="3"/>
        <text x="55" y="105">ADMIT</text>
        <rect class="packet p0" x="8" y="69" width="6" height="8"/>
        <rect class="record h0" x="16" y="116" width="6" height="8"/>
        <rect class="packet p1" x="8" y="69" width="6" height="8"/>
        <rect class="record h1" x="30" y="116" width="6" height="8"/>
        <rect class="packet p2" x="8" y="69" width="6" height="8"/>
        <rect class="record h2" x="44" y="116" width="6" height="8"/>
        <rect class="packet p3" x="8" y="69" width="6" height="8"/>
        <rect class="record h3" x="58" y="116" width="6" height="8"/>
        <rect class="packet p4" x="8" y="69" width="6" height="8"/>
        <rect class="record h4" x="115" y="94" width="6" height="8"/>
        <rect class="packet p5" x="8" y="69" width="6" height="8"/>
        <rect class="record h5" x="72" y="116" width="6" height="8"/>
        <rect class="packet p6" x="8" y="69" width="6" height="8"/>
        <rect class="record h6" x="86" y="116" width="6" height="8"/>
        <rect class="packet p7" x="8" y="69" width="6" height="8"/>
        <rect class="record h7" x="123" y="94" width="6" height="8"/>
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

if (!customElements.get("concept-token-bucket-rate-limiting")) {
  customElements.define("concept-token-bucket-rate-limiting", ConceptTokenBucketRateLimiting);
}
