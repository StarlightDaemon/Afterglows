// Ethernet Collision Backoff. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptEthernetCollisionBackoff extends HTMLElement {
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
          font:9px monospace;
          text-anchor:middle
        }
        .dark {
          fill:#07120f
        }
        .burst {
          opacity:0
        }
        .a {
          animation:a 11s linear infinite
        }
        .b {
          animation:b 11s linear infinite
        }
        .jam {
          stroke:#ed8eab;
          stroke-width:2;
          opacity:0;
          animation:jam 11s infinite
        }
        .round-one {
          opacity:0;
          animation:r1 11s infinite
        }
        .round-two {
          animation:r2 11s infinite
        }
        .success-a {
          animation:sa 11s infinite
        }
        .success-b {
          animation:sb 11s infinite
        }
        @keyframes a {
          0%,3% {
            opacity:0;
            transform:translateX(0)
          }
          4% {
            opacity:1;
            transform:translateX(0)
          }
          14% {
            opacity:1;
            transform:translateX(43px)
          }
          15%,32% {
            opacity:0;
            transform:translateX(0)
          }
          33% {
            opacity:1;
            transform:translateX(0)
          }
          43% {
            opacity:1;
            transform:translateX(43px)
          }
          44%,58% {
            opacity:0;
            transform:translateX(0)
          }
          59% {
            opacity:1;
            transform:translateX(0)
          }
          72% {
            opacity:1;
            transform:translateX(101px)
          }
          72.1%,100% {
            opacity:0
          }
        }
        @keyframes b {
          0%,3% {
            opacity:0;
            transform:translateX(0)
          }
          4% {
            opacity:1;
            transform:translateX(0)
          }
          14% {
            opacity:1;
            transform:translateX(-43px)
          }
          15%,32% {
            opacity:0;
            transform:translateX(0)
          }
          33% {
            opacity:1;
            transform:translateX(0)
          }
          43% {
            opacity:1;
            transform:translateX(-43px)
          }
          44%,78% {
            opacity:0;
            transform:translateX(0)
          }
          79% {
            opacity:1;
            transform:translateX(0)
          }
          92% {
            opacity:1;
            transform:translateX(-101px)
          }
          92.1%,100% {
            opacity:0
          }
        }
        @keyframes jam {
          0%,13% {
            opacity:0
          }
          14%,18% {
            opacity:1
          }
          19%,42% {
            opacity:0
          }
          43%,47% {
            opacity:1
          }
          48%,100% {
            opacity:0
          }
        }
        @keyframes r1 {
          0%,18% {
            opacity:0
          }
          19%,47% {
            opacity:1
          }
          48%,100% {
            opacity:0
          }
        }
        @keyframes r2 {
          0%,47% {
            opacity:0
          }
          48%,100% {
            opacity:1
          }
        }
        @keyframes sa {
          0%,72% {
            opacity:0
          }
          73%,100% {
            opacity:1
          }
        }
        @keyframes sb {
          0%,92% {
            opacity:0
          }
          93%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Ethernet Collision Backoff">
        <text x="70" y="14">HALF-DUPLEX BUS</text>
        <path class="ink muted" d="M12 45H128M26 25V45M114 25V45"/>
        <rect class="ink paper" x="16" y="19" width="20" height="13" rx="2"/>
        <rect class="ink paper" x="104" y="19" width="20" height="13" rx="2"/>
        <text x="26" y="29">A</text>
        <text x="114" y="29">B</text>
        <rect class="warm burst a" x="20" y="41" width="12" height="8"/>
        <rect class="cool burst b" x="108" y="41" width="12" height="8"/>
        <path class="jam" d="M64 36L75 54M76 36L65 54M70 33V57"/>
        <text x="70" y="72">random slots</text>
        <g class="round-one">
          <text x="17" y="94">A</text>
          <text x="17" y="116">B</text>
          <rect class="ink muted" x="40" y="81" width="24" height="16"/>
          <rect class="ink warm" x="64" y="81" width="24" height="16"/>
          <rect class="ink muted" x="40" y="103" width="24" height="16"/>
          <rect class="ink cool" x="64" y="103" width="24" height="16"/>
          <text x="52" y="93">0</text>
          <text class="dark" x="76" y="93">1</text>
          <text x="52" y="115">0</text>
          <text class="dark" x="76" y="115">1</text>
        </g>
        <g class="round-two">
          <text x="17" y="94">A</text>
          <text x="17" y="116">B</text>
          <rect class="ink warm" x="35" y="81" width="22" height="16"/>
          <rect class="ink muted" x="35" y="103" width="22" height="16"/>
          <text class="dark" x="46" y="93">0</text>
          <text class="" x="46" y="115">0</text>
          <rect class="ink muted" x="57" y="81" width="22" height="16"/>
          <rect class="ink muted" x="57" y="103" width="22" height="16"/>
          <text class="" x="68" y="93">1</text>
          <text class="" x="68" y="115">1</text>
          <rect class="ink muted" x="79" y="81" width="22" height="16"/>
          <rect class="ink muted" x="79" y="103" width="22" height="16"/>
          <text class="" x="90" y="93">2</text>
          <text class="" x="90" y="115">2</text>
          <rect class="ink muted" x="101" y="81" width="22" height="16"/>
          <rect class="ink cool" x="101" y="103" width="22" height="16"/>
          <text class="" x="112" y="93">3</text>
          <text class="dark" x="112" y="115">3</text>
        </g>
        <path class="ink success-a" d="M40 24L43 27L49 20"/>
        <path class="ink success-b" d="M88 24L91 27L97 20"/>
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

if (!customElements.get("concept-ethernet-collision-backoff")) {
  customElements.define("concept-ethernet-collision-backoff", ConceptEthernetCollisionBackoff);
}
