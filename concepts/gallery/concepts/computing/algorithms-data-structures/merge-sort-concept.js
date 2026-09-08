// Merge Sort. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptMergeSort extends HTMLElement {
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
        .t0 {
          fill:#77c9ef;
          transform:translate(2px,65px);
          animation:t0 10s ease-in-out infinite;
        }
        @keyframes t0 {
          0%,8% {
            transform:translate(0px,0px);
          }
          16%,100% {
            transform:translate(2px,65px);
          }
        }
        .t1 {
          fill:#77c9ef;
          transform:translate(4px,65px);
          animation:t1 10s ease-in-out infinite;
        }
        @keyframes t1 {
          0%,18% {
            transform:translate(0px,0px);
          }
          26%,100% {
            transform:translate(4px,65px);
          }
        }
        .t2 {
          fill:#77c9ef;
          transform:translate(48px,65px);
          animation:t2 10s ease-in-out infinite;
        }
        @keyframes t2 {
          0%,58% {
            transform:translate(0px,0px);
          }
          66%,100% {
            transform:translate(48px,65px);
          }
        }
        .t3 {
          fill:#77c9ef;
          transform:translate(50px,65px);
          animation:t3 10s ease-in-out infinite;
        }
        @keyframes t3 {
          0%,68% {
            transform:translate(0px,0px);
          }
          76%,100% {
            transform:translate(50px,65px);
          }
        }
        .t4 {
          fill:#f3c977;
          transform:translate(-38px,65px);
          animation:t4 10s ease-in-out infinite;
        }
        @keyframes t4 {
          0%,28% {
            transform:translate(0px,0px);
          }
          36%,100% {
            transform:translate(-38px,65px);
          }
        }
        .t5 {
          fill:#f3c977;
          transform:translate(-36px,65px);
          animation:t5 10s ease-in-out infinite;
        }
        @keyframes t5 {
          0%,38% {
            transform:translate(0px,0px);
          }
          46%,100% {
            transform:translate(-36px,65px);
          }
        }
        .t6 {
          fill:#f3c977;
          transform:translate(-34px,65px);
          animation:t6 10s ease-in-out infinite;
        }
        @keyframes t6 {
          0%,48% {
            transform:translate(0px,0px);
          }
          56%,100% {
            transform:translate(-34px,65px);
          }
        }
        .t7 {
          fill:#f3c977;
          transform:translate(-4px,65px);
          animation:t7 10s ease-in-out infinite;
        }
        @keyframes t7 {
          0%,78% {
            transform:translate(0px,0px);
          }
          86%,100% {
            transform:translate(-4px,65px);
          }
        }
        .h0 {
          opacity:0;
          animation:h0 10s steps(1,end) infinite;
        }
        @keyframes h0 {
          0% {
            transform:translateX(16.5px);
            opacity:1;
          }
          16% {
            transform:translateX(28.5px);
            opacity:1;
          }
          26% {
            transform:translateX(40.5px);
            opacity:1;
          }
          66% {
            transform:translateX(52.5px);
            opacity:1;
          }
          76%,100% {
            opacity:0;
          }
        }
        .h1 {
          opacity:0;
          animation:h1 10s steps(1,end) infinite;
        }
        @keyframes h1 {
          0% {
            transform:translateX(84.5px);
            opacity:1;
          }
          36% {
            transform:translateX(96.5px);
            opacity:1;
          }
          46% {
            transform:translateX(108.5px);
            opacity:1;
          }
          56% {
            transform:translateX(120.5px);
            opacity:1;
          }
          86%,100% {
            opacity:0;
          }
        }
        .ghost {
          fill:#16382e;
        }
        .token {
          rx:1;
        }
        .head {
          stroke:#edf5ef;
          stroke-width:1.4;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Merge Sort">
        <path class="ink muted" d="M13 55H62M81 55H130M15 120H126"/>
        <path class="ink muted" d="M38 60L64 72M106 60L76 72M64 72l6 7l6 -7M70 79v5"/>
        <rect class="ghost" x="16" y="47.5" width="7" height="4.5"/>
        <rect class="token t0" x="16" y="47.5" width="7" height="4.5"/>
        <rect class="ghost" x="28" y="43" width="7" height="9"/>
        <rect class="token t1" x="28" y="43" width="7" height="9"/>
        <rect class="ghost" x="40" y="25" width="7" height="27"/>
        <rect class="token t2" x="40" y="25" width="7" height="27"/>
        <rect class="ghost" x="52" y="20.5" width="7" height="31.5"/>
        <rect class="token t3" x="52" y="20.5" width="7" height="31.5"/>
        <rect class="ghost" x="84" y="38.5" width="7" height="13.5"/>
        <rect class="token t4" x="84" y="38.5" width="7" height="13.5"/>
        <rect class="ghost" x="96" y="34" width="7" height="18"/>
        <rect class="token t5" x="96" y="34" width="7" height="18"/>
        <rect class="ghost" x="108" y="29.5" width="7" height="22.5"/>
        <rect class="token t6" x="108" y="29.5" width="7" height="22.5"/>
        <rect class="ghost" x="120" y="16" width="7" height="36"/>
        <rect class="token t7" x="120" y="16" width="7" height="36"/>
        <path class="ink head h0" d="M0 59l3 -3l3 3"/>
        <path class="ink head h1" d="M0 59l3 -3l3 3"/>
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

if (!customElements.get("concept-merge-sort")) {
  customElements.define("concept-merge-sort", ConceptMergeSort);
}
