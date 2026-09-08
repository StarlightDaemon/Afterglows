// DBSCAN Clustering. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptDbscanClustering extends HTMLElement {
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
        .n0 {
          animation:n0 9s steps(1,end) infinite;
        }
        @keyframes n0 {
          0% {
            opacity:0;
          }
          10%,100% {
            opacity:1;
          }
        }
        .n1 {
          animation:n1 9s steps(1,end) infinite;
        }
        @keyframes n1 {
          0% {
            opacity:0;
          }
          17%,100% {
            opacity:1;
          }
        }
        .n2 {
          animation:n2 9s steps(1,end) infinite;
        }
        @keyframes n2 {
          0% {
            opacity:0;
          }
          24%,100% {
            opacity:1;
          }
        }
        .n3 {
          animation:n3 9s steps(1,end) infinite;
        }
        @keyframes n3 {
          0% {
            opacity:0;
          }
          31%,100% {
            opacity:1;
          }
        }
        .n4 {
          animation:n4 9s steps(1,end) infinite;
        }
        @keyframes n4 {
          0% {
            opacity:0;
          }
          38%,100% {
            opacity:1;
          }
        }
        .n5 {
          animation:n5 9s steps(1,end) infinite;
        }
        @keyframes n5 {
          0% {
            opacity:0;
          }
          45%,100% {
            opacity:1;
          }
        }
        .n6 {
          animation:n6 9s steps(1,end) infinite;
        }
        @keyframes n6 {
          0% {
            opacity:0;
          }
          52%,100% {
            opacity:1;
          }
        }
        .n7 {
          animation:n7 9s steps(1,end) infinite;
        }
        @keyframes n7 {
          0% {
            opacity:0;
          }
          59%,100% {
            opacity:1;
          }
        }
        .n8 {
          animation:n8 9s steps(1,end) infinite;
        }
        @keyframes n8 {
          0% {
            opacity:0;
          }
          66%,100% {
            opacity:1;
          }
        }
        .p0 {
          fill:#70edb1;
          animation:p0 9s steps(1,end) infinite;
        }
        @keyframes p0 {
          0% {
            fill:#64766d;
          }
          10%,100% {
            fill:#70edb1;
          }
        }
        .p1 {
          fill:#70edb1;
          animation:p1 9s steps(1,end) infinite;
        }
        @keyframes p1 {
          0% {
            fill:#64766d;
          }
          10%,100% {
            fill:#70edb1;
          }
        }
        .p2 {
          fill:#70edb1;
          animation:p2 9s steps(1,end) infinite;
        }
        @keyframes p2 {
          0% {
            fill:#64766d;
          }
          10%,100% {
            fill:#70edb1;
          }
        }
        .p3 {
          fill:#70edb1;
          animation:p3 9s steps(1,end) infinite;
        }
        @keyframes p3 {
          0% {
            fill:#64766d;
          }
          17%,100% {
            fill:#70edb1;
          }
        }
        .p4 {
          fill:#70edb1;
          animation:p4 9s steps(1,end) infinite;
        }
        @keyframes p4 {
          0% {
            fill:#64766d;
          }
          24%,100% {
            fill:#70edb1;
          }
        }
        .p5 {
          fill:#70edb1;
          animation:p5 9s steps(1,end) infinite;
        }
        @keyframes p5 {
          0% {
            fill:#64766d;
          }
          31%,100% {
            fill:#70edb1;
          }
        }
        .p6 {
          fill:#70edb1;
          animation:p6 9s steps(1,end) infinite;
        }
        @keyframes p6 {
          0% {
            fill:#64766d;
          }
          38%,100% {
            fill:#70edb1;
          }
        }
        .p7 {
          fill:#70edb1;
          animation:p7 9s steps(1,end) infinite;
        }
        @keyframes p7 {
          0% {
            fill:#64766d;
          }
          45%,100% {
            fill:#70edb1;
          }
        }
        .p8 {
          fill:#70edb1;
          animation:p8 9s steps(1,end) infinite;
        }
        @keyframes p8 {
          0% {
            fill:#64766d;
          }
          52%,100% {
            fill:#70edb1;
          }
        }
        .p9 {
          fill:#70edb1;
          animation:p9 9s steps(1,end) infinite;
        }
        @keyframes p9 {
          0% {
            fill:#64766d;
          }
          59%,100% {
            fill:#70edb1;
          }
        }
        .p10 {
          fill:#70edb1;
          animation:p10 9s steps(1,end) infinite;
        }
        @keyframes p10 {
          0% {
            fill:#64766d;
          }
          66%,100% {
            fill:#70edb1;
          }
        }
        .neighborhood {
          fill:#70edb108;
          stroke:#70edb144;
          stroke-width:1;
        }
        .noise {
          stroke:#ed8eab;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="DBSCAN Clustering">
        <circle class="neighborhood n0" cx="45.958" cy="39.958" r="18"/>
        <circle class="neighborhood n1" cx="58.371" cy="32.05" r="18"/>
        <circle class="neighborhood n2" cx="72.963" cy="30.129" r="18"/>
        <circle class="neighborhood n3" cx="87" cy="34.555" r="18"/>
        <circle class="neighborhood n4" cx="97.851" cy="44.498" r="18"/>
        <circle class="neighborhood n5" cx="103.483" cy="58.096" r="18"/>
        <circle class="neighborhood n6" cx="102.841" cy="72.8" r="18"/>
        <circle class="neighborhood n7" cx="96.046" cy="85.855" r="18"/>
        <circle class="neighborhood n8" cx="84.369" cy="94.814" r="18"/>
        <circle class="p0" cx="38.05" cy="52.371" r="3"/>
        <circle class="p1" cx="45.958" cy="39.958" r="3.6"/>
        <circle class="p2" cx="58.371" cy="32.05" r="3.6"/>
        <circle class="p3" cx="72.963" cy="30.129" r="3.6"/>
        <circle class="p4" cx="87" cy="34.555" r="3.6"/>
        <circle class="p5" cx="97.851" cy="44.498" r="3.6"/>
        <circle class="p6" cx="103.483" cy="58.096" r="3.6"/>
        <circle class="p7" cx="102.841" cy="72.8" r="3.6"/>
        <circle class="p8" cx="96.046" cy="85.855" r="3.6"/>
        <circle class="p9" cx="84.369" cy="94.814" r="3.6"/>
        <circle class="p10" cx="70" cy="98" r="3"/>
        <path class="ink noise" d="M16 102l6 6m-6 0l6 -6"/>
        <path class="ink noise" d="M107 105l6 6m-6 0l6 -6"/>
        <path class="ink noise" d="M114 19l6 6m-6 0l6 -6"/>
        <path class="ink muted" d="M22 123h18m-18 -3v6m18 -6v6"/>
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

if (!customElements.get("concept-dbscan-clustering")) {
  customElements.define("concept-dbscan-clustering", ConceptDbscanClustering);
}
