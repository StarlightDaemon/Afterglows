// Quicksort Partition. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptQuicksortPartition extends HTMLElement {
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
        .k7 {
          fill:#70edb1;
          transform:translateX(90px);
          animation:k7 9s linear infinite;
        }
        @keyframes k7 {
          0% {
            transform:translate(0px,0px);
          }
          24% {
            transform:translate(0px,0px);
          }
          26% {
            transform:translate(0px,10px);
          }
          30% {
            transform:translate(15px,10px);
          }
          32% {
            transform:translate(15px,0px);
          }
          48% {
            transform:translate(15px,0px);
          }
          50% {
            transform:translate(15px,10px);
          }
          54% {
            transform:translate(45px,10px);
          }
          56% {
            transform:translate(45px,0px);
          }
          72% {
            transform:translate(45px,0px);
          }
          74% {
            transform:translate(45px,0px);
          }
          78% {
            transform:translate(45px,0px);
          }
          80% {
            transform:translate(45px,0px);
          }
          84% {
            transform:translate(45px,0px);
          }
          86% {
            transform:translate(45px,10px);
          }
          90% {
            transform:translate(90px,10px);
          }
          92% {
            transform:translate(90px,0px);
          }
          100% {
            transform:translate(90px,0px);
          }
        }
        .k2 {
          fill:#70edb1;
          transform:translateX(-15px);
          animation:k2 9s linear infinite;
        }
        @keyframes k2 {
          0% {
            transform:translate(0px,0px);
          }
          24% {
            transform:translate(0px,0px);
          }
          26% {
            transform:translate(0px,-10px);
          }
          30% {
            transform:translate(-15px,-10px);
          }
          32% {
            transform:translate(-15px,0px);
          }
          48% {
            transform:translate(-15px,0px);
          }
          50% {
            transform:translate(-15px,0px);
          }
          54% {
            transform:translate(-15px,0px);
          }
          56% {
            transform:translate(-15px,0px);
          }
          72% {
            transform:translate(-15px,0px);
          }
          74% {
            transform:translate(-15px,0px);
          }
          78% {
            transform:translate(-15px,0px);
          }
          80% {
            transform:translate(-15px,0px);
          }
          84% {
            transform:translate(-15px,0px);
          }
          86% {
            transform:translate(-15px,0px);
          }
          90% {
            transform:translate(-15px,0px);
          }
          92% {
            transform:translate(-15px,0px);
          }
          100% {
            transform:translate(-15px,0px);
          }
        }
        .k6 {
          fill:#70edb1;
          transform:translateX(45px);
          animation:k6 9s linear infinite;
        }
        @keyframes k6 {
          0% {
            transform:translate(0px,0px);
          }
          24% {
            transform:translate(0px,0px);
          }
          26% {
            transform:translate(0px,0px);
          }
          30% {
            transform:translate(0px,0px);
          }
          32% {
            transform:translate(0px,0px);
          }
          48% {
            transform:translate(0px,0px);
          }
          50% {
            transform:translate(0px,0px);
          }
          54% {
            transform:translate(0px,0px);
          }
          56% {
            transform:translate(0px,0px);
          }
          72% {
            transform:translate(0px,0px);
          }
          74% {
            transform:translate(0px,10px);
          }
          78% {
            transform:translate(45px,10px);
          }
          80% {
            transform:translate(45px,0px);
          }
          84% {
            transform:translate(45px,0px);
          }
          86% {
            transform:translate(45px,0px);
          }
          90% {
            transform:translate(45px,0px);
          }
          92% {
            transform:translate(45px,0px);
          }
          100% {
            transform:translate(45px,0px);
          }
        }
        .k1 {
          fill:#70edb1;
          transform:translateX(-30px);
          animation:k1 9s linear infinite;
        }
        @keyframes k1 {
          0% {
            transform:translate(0px,0px);
          }
          24% {
            transform:translate(0px,0px);
          }
          26% {
            transform:translate(0px,0px);
          }
          30% {
            transform:translate(0px,0px);
          }
          32% {
            transform:translate(0px,0px);
          }
          48% {
            transform:translate(0px,0px);
          }
          50% {
            transform:translate(0px,-10px);
          }
          54% {
            transform:translate(-30px,-10px);
          }
          56% {
            transform:translate(-30px,0px);
          }
          72% {
            transform:translate(-30px,0px);
          }
          74% {
            transform:translate(-30px,0px);
          }
          78% {
            transform:translate(-30px,0px);
          }
          80% {
            transform:translate(-30px,0px);
          }
          84% {
            transform:translate(-30px,0px);
          }
          86% {
            transform:translate(-30px,0px);
          }
          90% {
            transform:translate(-30px,0px);
          }
          92% {
            transform:translate(-30px,0px);
          }
          100% {
            transform:translate(-30px,0px);
          }
        }
        .k5 {
          fill:#70edb1;
          transform:translateX(0px);
          animation:k5 9s linear infinite;
        }
        @keyframes k5 {
          0% {
            transform:translate(0px,0px);
          }
          24% {
            transform:translate(0px,0px);
          }
          26% {
            transform:translate(0px,0px);
          }
          30% {
            transform:translate(0px,0px);
          }
          32% {
            transform:translate(0px,0px);
          }
          48% {
            transform:translate(0px,0px);
          }
          50% {
            transform:translate(0px,0px);
          }
          54% {
            transform:translate(0px,0px);
          }
          56% {
            transform:translate(0px,0px);
          }
          72% {
            transform:translate(0px,0px);
          }
          74% {
            transform:translate(0px,0px);
          }
          78% {
            transform:translate(0px,0px);
          }
          80% {
            transform:translate(0px,0px);
          }
          84% {
            transform:translate(0px,0px);
          }
          86% {
            transform:translate(0px,0px);
          }
          90% {
            transform:translate(0px,0px);
          }
          92% {
            transform:translate(0px,0px);
          }
          100% {
            transform:translate(0px,0px);
          }
        }
        .k3 {
          fill:#70edb1;
          transform:translateX(-45px);
          animation:k3 9s linear infinite;
        }
        @keyframes k3 {
          0% {
            transform:translate(0px,0px);
          }
          24% {
            transform:translate(0px,0px);
          }
          26% {
            transform:translate(0px,0px);
          }
          30% {
            transform:translate(0px,0px);
          }
          32% {
            transform:translate(0px,0px);
          }
          48% {
            transform:translate(0px,0px);
          }
          50% {
            transform:translate(0px,0px);
          }
          54% {
            transform:translate(0px,0px);
          }
          56% {
            transform:translate(0px,0px);
          }
          72% {
            transform:translate(0px,0px);
          }
          74% {
            transform:translate(0px,-10px);
          }
          78% {
            transform:translate(-45px,-10px);
          }
          80% {
            transform:translate(-45px,0px);
          }
          84% {
            transform:translate(-45px,0px);
          }
          86% {
            transform:translate(-45px,0px);
          }
          90% {
            transform:translate(-45px,0px);
          }
          92% {
            transform:translate(-45px,0px);
          }
          100% {
            transform:translate(-45px,0px);
          }
        }
        .k4 {
          fill:#f3c977;
          transform:translateX(-45px);
          animation:k4 9s linear infinite;
        }
        @keyframes k4 {
          0% {
            transform:translate(0px,0px);
          }
          24% {
            transform:translate(0px,0px);
          }
          26% {
            transform:translate(0px,0px);
          }
          30% {
            transform:translate(0px,0px);
          }
          32% {
            transform:translate(0px,0px);
          }
          48% {
            transform:translate(0px,0px);
          }
          50% {
            transform:translate(0px,0px);
          }
          54% {
            transform:translate(0px,0px);
          }
          56% {
            transform:translate(0px,0px);
          }
          72% {
            transform:translate(0px,0px);
          }
          74% {
            transform:translate(0px,0px);
          }
          78% {
            transform:translate(0px,0px);
          }
          80% {
            transform:translate(0px,0px);
          }
          84% {
            transform:translate(0px,0px);
          }
          86% {
            transform:translate(0px,-10px);
          }
          90% {
            transform:translate(-45px,-10px);
          }
          92% {
            transform:translate(-45px,0px);
          }
          100% {
            transform:translate(-45px,0px);
          }
        }
        .pivot-level {
          fill:none;
          stroke:#f3c97777;
          stroke-dasharray:2 3;
        }
        .region {
          fill:none;
          stroke:#77c9ef;
          stroke-width:2;
          animation:region 9s steps(1,end) infinite;
        }
        .scan {
          stroke:#77c9ef;
          opacity:0;
          animation:scan 9s steps(1,end) infinite;
        }
        .boundary {
          stroke:#f3c977;
          transform:translateX(61px);
          animation:boundary 9s steps(1,end) infinite;
        }
        @keyframes scan {
          0% {
            transform:translateX(22.5px);
            opacity:1;
          }
          16% {
            transform:translateX(37.5px);
          }
          32% {
            transform:translateX(52.5px);
          }
          40% {
            transform:translateX(67.5px);
          }
          56% {
            transform:translateX(82.5px);
          }
          64% {
            transform:translateX(97.5px);
          }
          84%,100% {
            opacity:0;
          }
        }
        @keyframes boundary {
          0% {
            transform:translateX(16px);
          }
          32% {
            transform:translateX(31px);
          }
          56% {
            transform:translateX(46px);
          }
          80%,100% {
            transform:translateX(61px);
          }
        }
        @keyframes region {
          0% {
            opacity:0;
            d:path("M18 116v5h0v-5");
          }
          32% {
            opacity:1;
            d:path("M18 116v5h9v-5");
          }
          56% {
            d:path("M18 116v5h24v-5");
          }
          80%,100% {
            d:path("M18 116v5h39v-5");
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Quicksort Partition">
        <path class="ink muted" d="M14 108H128"/>
        <path class="pivot-level" d="M14 81H128"/>
        <path class="region" d="M18 116v5h39v-5"/>
        <rect class="key k7" x="18" y="63" width="9" height="42"/>
        <rect class="key k2" x="33" y="93" width="9" height="12"/>
        <rect class="key k6" x="48" y="69" width="9" height="36"/>
        <rect class="key k1" x="63" y="99" width="9" height="6"/>
        <rect class="key k5" x="78" y="75" width="9" height="30"/>
        <rect class="key k3" x="93" y="87" width="9" height="18"/>
        <rect class="key k4" x="108" y="81" width="9" height="24"/>
        <path class="ink scan" d="M0 38v9m-3 -3l3 3l3 -3"/>
        <path class="ink boundary" d="M0 110v17"/>
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

if (!customElements.get("concept-quicksort-partition")) {
  customElements.define("concept-quicksort-partition", ConceptQuicksortPartition);
}
