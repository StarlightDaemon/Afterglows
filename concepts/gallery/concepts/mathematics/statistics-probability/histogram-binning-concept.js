// Histogram Binning. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptHistogramBinning extends HTMLElement {
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
          transform-origin:28px 117px;
          animation:bar0 8s linear infinite
        }
        @keyframes bar0 {
          0% {
            transform:scaleY(0)
          }
          13.9% {
            transform:scaleY(0.0)
          }
          14% {
            transform:scaleY(0.5)
          }
          18.9% {
            transform:scaleY(0.5)
          }
          19% {
            transform:scaleY(1.0)
          }
          94% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(0)
          }
        }
        .drop0 {
          animation:drop0 8s linear infinite
        }
        @keyframes drop0 {
          0%,8% {
            transform:translate(0,0);
            opacity:1
          }
          14%,90% {
            transform:translate(8px,92px);
            opacity:1
          }
          96%,100% {
            transform:translate(8px,92px);
            opacity:0
          }
        }
        .drop1 {
          animation:drop1 8s linear infinite
        }
        @keyframes drop1 {
          0%,13% {
            transform:translate(0,0);
            opacity:1
          }
          19%,90% {
            transform:translate(4px,70px);
            opacity:1
          }
          96%,100% {
            transform:translate(4px,70px);
            opacity:0
          }
        }
        .b1 {
          transform-origin:49px 117px;
          animation:bar1 8s linear infinite
        }
        @keyframes bar1 {
          0% {
            transform:scaleY(0)
          }
          23.9% {
            transform:scaleY(0.0)
          }
          24% {
            transform:scaleY(0.333)
          }
          28.9% {
            transform:scaleY(0.333)
          }
          29% {
            transform:scaleY(0.667)
          }
          33.9% {
            transform:scaleY(0.667)
          }
          34% {
            transform:scaleY(1.0)
          }
          94% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(0)
          }
        }
        .drop2 {
          animation:drop2 8s linear infinite
        }
        @keyframes drop2 {
          0%,18% {
            transform:translate(0,0);
            opacity:1
          }
          24%,90% {
            transform:translate(8px,92px);
            opacity:1
          }
          96%,100% {
            transform:translate(8px,92px);
            opacity:0
          }
        }
        .drop3 {
          animation:drop3 8s linear infinite
        }
        @keyframes drop3 {
          0%,23% {
            transform:translate(0,0);
            opacity:1
          }
          29%,90% {
            transform:translate(4px,70px);
            opacity:1
          }
          96%,100% {
            transform:translate(4px,70px);
            opacity:0
          }
        }
        .drop4 {
          animation:drop4 8s linear infinite
        }
        @keyframes drop4 {
          0%,28% {
            transform:translate(0,0);
            opacity:1
          }
          34%,90% {
            transform:translate(0px,76px);
            opacity:1
          }
          96%,100% {
            transform:translate(0px,76px);
            opacity:0
          }
        }
        .b2 {
          transform-origin:70px 117px;
          animation:bar2 8s linear infinite
        }
        @keyframes bar2 {
          0% {
            transform:scaleY(0)
          }
          38.9% {
            transform:scaleY(0.0)
          }
          39% {
            transform:scaleY(0.25)
          }
          43.9% {
            transform:scaleY(0.25)
          }
          44% {
            transform:scaleY(0.5)
          }
          48.9% {
            transform:scaleY(0.5)
          }
          49% {
            transform:scaleY(0.75)
          }
          53.9% {
            transform:scaleY(0.75)
          }
          54% {
            transform:scaleY(1.0)
          }
          94% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(0)
          }
        }
        .drop5 {
          animation:drop5 8s linear infinite
        }
        @keyframes drop5 {
          0%,33% {
            transform:translate(0,0);
            opacity:1
          }
          39%,90% {
            transform:translate(8px,92px);
            opacity:1
          }
          96%,100% {
            transform:translate(8px,92px);
            opacity:0
          }
        }
        .drop6 {
          animation:drop6 8s linear infinite
        }
        @keyframes drop6 {
          0%,38% {
            transform:translate(0,0);
            opacity:1
          }
          44%,90% {
            transform:translate(4px,70px);
            opacity:1
          }
          96%,100% {
            transform:translate(4px,70px);
            opacity:0
          }
        }
        .drop7 {
          animation:drop7 8s linear infinite
        }
        @keyframes drop7 {
          0%,43% {
            transform:translate(0,0);
            opacity:1
          }
          49%,90% {
            transform:translate(0px,76px);
            opacity:1
          }
          96%,100% {
            transform:translate(0px,76px);
            opacity:0
          }
        }
        .drop8 {
          animation:drop8 8s linear infinite
        }
        @keyframes drop8 {
          0%,48% {
            transform:translate(0,0);
            opacity:1
          }
          54%,90% {
            transform:translate(-4px,54px);
            opacity:1
          }
          96%,100% {
            transform:translate(-4px,54px);
            opacity:0
          }
        }
        .b3 {
          transform-origin:91px 117px;
          animation:bar3 8s linear infinite
        }
        @keyframes bar3 {
          0% {
            transform:scaleY(0)
          }
          58.9% {
            transform:scaleY(0.0)
          }
          59% {
            transform:scaleY(0.5)
          }
          63.9% {
            transform:scaleY(0.5)
          }
          64% {
            transform:scaleY(1.0)
          }
          94% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(0)
          }
        }
        .drop9 {
          animation:drop9 8s linear infinite
        }
        @keyframes drop9 {
          0%,53% {
            transform:translate(0,0);
            opacity:1
          }
          59%,90% {
            transform:translate(8px,92px);
            opacity:1
          }
          96%,100% {
            transform:translate(8px,92px);
            opacity:0
          }
        }
        .drop10 {
          animation:drop10 8s linear infinite
        }
        @keyframes drop10 {
          0%,58% {
            transform:translate(0,0);
            opacity:1
          }
          64%,90% {
            transform:translate(4px,70px);
            opacity:1
          }
          96%,100% {
            transform:translate(4px,70px);
            opacity:0
          }
        }
        .b4 {
          transform-origin:112px 117px;
          animation:bar4 8s linear infinite
        }
        @keyframes bar4 {
          0% {
            transform:scaleY(0)
          }
          68.9% {
            transform:scaleY(0.0)
          }
          69% {
            transform:scaleY(1.0)
          }
          94% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(0)
          }
        }
        .drop11 {
          animation:drop11 8s linear infinite
        }
        @keyframes drop11 {
          0%,63% {
            transform:translate(0,0);
            opacity:1
          }
          69%,90% {
            transform:translate(8px,92px);
            opacity:1
          }
          96%,100% {
            transform:translate(8px,92px);
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Histogram Binning">
        <path class="ink muted" d="M15 74V119H127"/>
        <rect class="bin b0" x="18" y="101" width="20" height="16" fill="#70edb1" opacity=".6"/>
        <circle class="warm drop0" cx="20" cy="21" r="3"/>
        <circle class="warm drop1" cx="24" cy="35" r="3"/>
        <rect class="bin b1" x="39" y="93" width="20" height="24" fill="#77c9ef" opacity=".6"/>
        <circle class="warm drop2" cx="41" cy="21" r="3"/>
        <circle class="warm drop3" cx="45" cy="35" r="3"/>
        <circle class="warm drop4" cx="49" cy="21" r="3"/>
        <rect class="bin b2" x="60" y="85" width="20" height="32" fill="#70edb1" opacity=".6"/>
        <circle class="warm drop5" cx="62" cy="21" r="3"/>
        <circle class="warm drop6" cx="66" cy="35" r="3"/>
        <circle class="warm drop7" cx="70" cy="21" r="3"/>
        <circle class="warm drop8" cx="74" cy="35" r="3"/>
        <rect class="bin b3" x="81" y="101" width="20" height="16" fill="#77c9ef" opacity=".6"/>
        <circle class="warm drop9" cx="83" cy="21" r="3"/>
        <circle class="warm drop10" cx="87" cy="35" r="3"/>
        <rect class="bin b4" x="102" y="109" width="20" height="8" fill="#70edb1" opacity=".6"/>
        <circle class="warm drop11" cx="104" cy="21" r="3"/>
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

if (!customElements.get("concept-histogram-binning")) {
  customElements.define("concept-histogram-binning", ConceptHistogramBinning);
}
