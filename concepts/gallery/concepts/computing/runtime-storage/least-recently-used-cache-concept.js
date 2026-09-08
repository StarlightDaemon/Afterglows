// Least-Recently-Used Cache. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptLeastRecentlyUsedCache extends HTMLElement {
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
          font:10px monospace;
          text-anchor:middle
        }
        .value {
          fill:#07120f;
          font-size:12px
        }
        .request {
          font-size:9px
        }
        .hit {
          stroke:#f3c977;
          fill:none;
          stroke-width:1.5
        }
        .evicted {
          opacity:.4
        }
        .eb {
          animation:eb 10s infinite
        }
        .ec {
          animation:ec 10s infinite
        }
        @keyframes eb {
          0%,65.9% {
            opacity:0
          }
          66%,100% {
            opacity:.4
          }
        }
        @keyframes ec {
          0%,81.9% {
            opacity:0
          }
          82%,100% {
            opacity:.4
          }
        }
        .a {
          opacity:1;
          transform:translateX(88px);
          animation:a 10s linear infinite
        }
        @keyframes a {
          0% {
            opacity:0;
            transform:translate(0px,-25px)
          }
          9.9% {
            opacity:0;
            transform:translate(0px,-25px)
          }
          10% {
            opacity:1;
            transform:translate(0px,-25px)
          }
          16% {
            opacity:1;
            transform:translate(0px,0px)
          }
          22% {
            opacity:1;
            transform:translate(0px,0px)
          }
          28% {
            opacity:1;
            transform:translate(44px,0px)
          }
          34% {
            opacity:1;
            transform:translate(44px,0px)
          }
          40% {
            opacity:1;
            transform:translate(88px,0px)
          }
          46% {
            opacity:1;
            transform:translate(88px,0px)
          }
          48% {
            opacity:1;
            transform:translate(88px,-23px)
          }
          52% {
            opacity:1;
            transform:translate(0px,-23px)
          }
          54% {
            opacity:1;
            transform:translate(0px,0px)
          }
          60% {
            opacity:1;
            transform:translate(0px,0px)
          }
          66% {
            opacity:1;
            transform:translate(44px,0px)
          }
          74% {
            opacity:1;
            transform:translate(44px,0px)
          }
          82% {
            opacity:1;
            transform:translate(88px,0px)
          }
          100% {
            opacity:1;
            transform:translate(88px,0px)
          }
        }
        .b {
          opacity:0;
          transform:translateX(0px);
          animation:b 10s linear infinite
        }
        @keyframes b {
          0% {
            opacity:0;
            transform:translate(0px,-25px)
          }
          21.9% {
            opacity:0;
            transform:translate(0px,-25px)
          }
          22% {
            opacity:1;
            transform:translate(0px,-25px)
          }
          28% {
            opacity:1;
            transform:translate(0px,0px)
          }
          34% {
            opacity:1;
            transform:translate(0px,0px)
          }
          40% {
            opacity:1;
            transform:translate(44px,0px)
          }
          46% {
            opacity:1;
            transform:translate(44px,0px)
          }
          54% {
            opacity:1;
            transform:translate(88px,0px)
          }
          60% {
            opacity:1;
            transform:translate(88px,0px)
          }
          66% {
            opacity:0;
            transform:translate(88px,39px)
          }
          100% {
            opacity:0;
            transform:translate(88px,39px)
          }
        }
        .c {
          opacity:0;
          transform:translateX(0px);
          animation:c 10s linear infinite
        }
        @keyframes c {
          0% {
            opacity:0;
            transform:translate(0px,-25px)
          }
          33.9% {
            opacity:0;
            transform:translate(0px,-25px)
          }
          34% {
            opacity:1;
            transform:translate(0px,-25px)
          }
          40% {
            opacity:1;
            transform:translate(0px,0px)
          }
          46% {
            opacity:1;
            transform:translate(0px,0px)
          }
          54% {
            opacity:1;
            transform:translate(44px,0px)
          }
          60% {
            opacity:1;
            transform:translate(44px,0px)
          }
          66% {
            opacity:1;
            transform:translate(88px,0px)
          }
          74% {
            opacity:1;
            transform:translate(88px,0px)
          }
          82% {
            opacity:0;
            transform:translate(88px,39px)
          }
          100% {
            opacity:0;
            transform:translate(88px,39px)
          }
        }
        .d {
          opacity:1;
          transform:translateX(44px);
          animation:d 10s linear infinite
        }
        @keyframes d {
          0% {
            opacity:0;
            transform:translate(0px,-25px)
          }
          59.9% {
            opacity:0;
            transform:translate(0px,-25px)
          }
          60% {
            opacity:1;
            transform:translate(0px,-25px)
          }
          66% {
            opacity:1;
            transform:translate(0px,0px)
          }
          74% {
            opacity:1;
            transform:translate(0px,0px)
          }
          82% {
            opacity:1;
            transform:translate(44px,0px)
          }
          100% {
            opacity:1;
            transform:translate(44px,0px)
          }
        }
        .b2 {
          opacity:1;
          transform:translateX(0px);
          animation:b2 10s linear infinite
        }
        @keyframes b2 {
          0% {
            opacity:0;
            transform:translate(0px,-25px)
          }
          73.9% {
            opacity:0;
            transform:translate(0px,-25px)
          }
          74% {
            opacity:1;
            transform:translate(0px,-25px)
          }
          82% {
            opacity:1;
            transform:translate(0px,0px)
          }
          100% {
            opacity:1;
            transform:translate(0px,0px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Least-Recently-Used Cache">
        <path class="ink muted" d="M8 49V85H132V49"/>
        <text x="26" y="101">MRU</text>
        <text x="114" y="101">LRU</text>
        <text x="70" y="136">evict</text>
        <rect class="ink muted" x="9" y="9" width="16" height="17" rx="2"/>
        <text class="request" x="17" y="21">A</text>
        <rect class="ink muted" x="30" y="9" width="16" height="17" rx="2"/>
        <text class="request" x="38" y="21">B</text>
        <rect class="ink muted" x="51" y="9" width="16" height="17" rx="2"/>
        <text class="request" x="59" y="21">C</text>
        <rect class="ink muted" x="72" y="9" width="16" height="17" rx="2"/>
        <text class="request" x="80" y="21">A</text>
        <rect class="ink muted" x="93" y="9" width="16" height="17" rx="2"/>
        <text class="request" x="101" y="21">D</text>
        <rect class="ink muted" x="114" y="9" width="16" height="17" rx="2"/>
        <text class="request" x="122" y="21">B</text>
        <rect class="hit" x="72" y="9" width="16" height="17" rx="2"/>
        <g class="card a">
          <rect fill="#f3c977" x="12" y="55" width="28" height="24" rx="3"/>
          <text class="value" x="26" y="72">A</text>
        </g>
        <g class="card b">
          <rect fill="#77c9ef" x="12" y="55" width="28" height="24" rx="3"/>
          <text class="value" x="26" y="72">B</text>
        </g>
        <g class="card c">
          <rect fill="#ed8eab" x="12" y="55" width="28" height="24" rx="3"/>
          <text class="value" x="26" y="72">C</text>
        </g>
        <g class="card d">
          <rect fill="#70edb1" x="12" y="55" width="28" height="24" rx="3"/>
          <text class="value" x="26" y="72">D</text>
        </g>
        <g class="card b2">
          <rect fill="#77c9ef" x="12" y="55" width="28" height="24" rx="3"/>
          <text class="value" x="26" y="72">B</text>
        </g>
        <g class="evicted eb">
          <rect class="cool" x="88" y="116" width="14" height="14" rx="2"/>
          <text class="value" x="95" y="127">B</text>
        </g>
        <g class="evicted ec">
          <rect class="rose" x="108" y="116" width="14" height="14" rx="2"/>
          <text class="value" x="115" y="127">C</text>
        </g>
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

if (!customElements.get("concept-least-recently-used-cache")) {
  customElements.define("concept-least-recently-used-cache", ConceptLeastRecentlyUsedCache);
}
