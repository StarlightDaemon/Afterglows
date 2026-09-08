// Publish-Subscribe. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPublishSubscribe extends HTMLElement {
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
        .sub {
          font-size:8px
        }
        .topic {
          font-size:10px
        }
        .t0,.t1 {
          opacity:0
        }
        .t0 {
          animation:t0 11s infinite
        }
        .t1 {
          animation:t1 11s infinite
        }
        .t2 {
          animation:t2 11s infinite
        }
        .filter rect {
          fill:#142f24;
          stroke:#375b51;
          stroke-width:1
        }
        .filter text {
          font-size:15px
        }
        .f0 rect {
          animation:f0 11s infinite
        }
        .f1 rect {
          animation:f1 11s infinite
        }
        .f2 rect {
          animation:f2 11s infinite
        }
        .h0 {
          fill:#70edb1;
          animation:h0 11s infinite
        }
        .h1 {
          fill:#77c9ef;
          animation:h1 11s infinite
        }
        .h2 {
          fill:#f3c977;
          animation:h2 11s infinite
        }
        .input,.copy {
          opacity:0
        }
        .input {
          animation:input 11s linear infinite
        }
        .c0 {
          animation:c0 11s linear infinite
        }
        .c1 {
          animation:c1 11s linear infinite
        }
        .c2 {
          animation:c2 11s linear infinite
        }
        .c3 {
          animation:c3 11s linear infinite
        }
        @keyframes t0 {
          0%,32.9% {
            opacity:1
          }
          33%,100% {
            opacity:0
          }
        }
        @keyframes t1 {
          0%,32.9% {
            opacity:0
          }
          33%,62.9% {
            opacity:1
          }
          63%,100% {
            opacity:0
          }
        }
        @keyframes t2 {
          0%,62.9% {
            opacity:0
          }
          63%,100% {
            opacity:1
          }
        }
        @keyframes f0 {
          0%,11.9% {
            fill:#142f24
          }
          12%,30% {
            fill:#276747
          }
          30.1%,100% {
            fill:#142f24
          }
        }
        @keyframes f1 {
          0%,11.9% {
            fill:#142f24
          }
          12%,30% {
            fill:#276747
          }
          30.1%,41.9% {
            fill:#142f24
          }
          42%,60% {
            fill:#235068
          }
          60.1%,100% {
            fill:#142f24
          }
        }
        @keyframes f2 {
          0%,71.9% {
            fill:#142f24
          }
          72%,90% {
            fill:#655126
          }
          90.1%,100% {
            fill:#142f24
          }
        }
        @keyframes h0 {
          0%,25.9% {
            opacity:0
          }
          26%,100% {
            opacity:1
          }
        }
        @keyframes h1 {
          0%,55.9% {
            opacity:0
          }
          56%,100% {
            opacity:1
          }
        }
        @keyframes h2 {
          0%,85.9% {
            opacity:0
          }
          86%,100% {
            opacity:1
          }
        }
        @keyframes input {
          0%,5% {
            opacity:0;
            transform:translateX(0);
            fill:#70edb1
          }
          6% {
            fill:#70edb1;
            opacity:1;
            transform:translateX(0)
          }
          12% {
            fill:#70edb1;
            opacity:1;
            transform:translateX(22px)
          }
          12.1%,35% {
            opacity:0;
            transform:translateX(0);
            fill:#77c9ef
          }
          36% {
            fill:#77c9ef;
            opacity:1;
            transform:translateX(0)
          }
          42% {
            fill:#77c9ef;
            opacity:1;
            transform:translateX(22px)
          }
          42.1%,65% {
            opacity:0;
            transform:translateX(0);
            fill:#f3c977
          }
          66% {
            fill:#f3c977;
            opacity:1;
            transform:translateX(0)
          }
          72% {
            fill:#f3c977;
            opacity:1;
            transform:translateX(22px)
          }
          72.1%,100% {
            opacity:0
          }
        }
        @keyframes c0 {
          0%,13% {
            opacity:0;
            transform:translate(0,0)
          }
          14% {
            opacity:1;
            transform:translate(0,0)
          }
          26% {
            opacity:1;
            transform:translate(17px,-15px)
          }
          26.1%,100% {
            opacity:0
          }
        }
        @keyframes c1 {
          0%,13% {
            opacity:0;
            transform:translate(0,0)
          }
          14% {
            opacity:1;
            transform:translate(0,0)
          }
          26% {
            opacity:1;
            transform:translate(17px,3px)
          }
          26.1%,100% {
            opacity:0
          }
        }
        @keyframes c2 {
          0%,43% {
            opacity:0;
            transform:translate(0,0)
          }
          44% {
            opacity:1;
            transform:translate(0,0)
          }
          56% {
            opacity:1;
            transform:translate(17px,3px)
          }
          56.1%,100% {
            opacity:0
          }
        }
        @keyframes c3 {
          0%,73% {
            opacity:0;
            transform:translate(0,0)
          }
          74% {
            opacity:1;
            transform:translate(0,0)
          }
          86% {
            opacity:1;
            transform:translate(17px,23px)
          }
          86.1%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Publish-Subscribe">
        <text class="topic t0" x="70" y="14">lab/temp</text>
        <text class="topic t1" x="70" y="14">lab/humidity</text>
        <text class="topic t2" x="70" y="14">office/temp</text>
        <circle class="ink paper" cx="14" cy="70" r="10"/>
        <text x="14" y="74">P</text>
        <path class="ink muted" d="M24 70H46M88 48L105 33M88 70L105 73M88 92L105 115"/>
        <rect class="ink paper" x="46" y="32" width="42" height="76" rx="5"/>
        <g class="filter f0">
          <rect x="53" y="39" width="28" height="18" rx="2"/>
          <text x="67" y="53">=</text>
        </g>
        <g class="filter f1">
          <rect x="53" y="61" width="28" height="18" rx="2"/>
          <text x="67" y="75">+</text>
        </g>
        <g class="filter f2">
          <rect x="53" y="83" width="28" height="18" rx="2"/>
          <text x="67" y="97">#</text>
        </g>
        <text class="sub" x="109" y="23">lab/temp</text>
        <text class="sub" x="118" y="63">lab/+</text>
        <text class="sub" x="113" y="104">office/#</text>
        <rect class="ink muted" x="106" y="26" width="25" height="17" rx="2"/>
        <rect class="ink muted" x="106" y="66" width="25" height="27" rx="2"/>
        <rect class="ink muted" x="106" y="108" width="25" height="17" rx="2"/>
        <text class="h0" x="118" y="39">23</text>
        <text class="h0" x="118" y="77">23</text>
        <text class="h1" x="118" y="89">60</text>
        <text class="h2" x="118" y="121">21</text>
        <circle class="input" cx="24" cy="70" r="3"/>
        <circle class="solid copy c0" cx="88" cy="48" r="3"/>
        <circle class="solid copy c1" cx="88" cy="70" r="3"/>
        <circle class="cool copy c2" cx="88" cy="70" r="3"/>
        <circle class="warm copy c3" cx="88" cy="92" r="3"/>
        <text x="67" y="128">BROKER</text>
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

if (!customElements.get("concept-publish-subscribe")) {
  customElements.define("concept-publish-subscribe", ConceptPublishSubscribe);
}
