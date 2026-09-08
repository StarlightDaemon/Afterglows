// K-Means Clustering. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptKMeansClustering extends HTMLElement {
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
        .p0 {
          fill:#77c9ef;
          animation:p0 9s steps(1,end) infinite;
        }
        @keyframes p0 {
          0% {
            fill:#58766c;
          }
          12% {
            fill:#77c9ef;
          }
          40% {
            fill:#77c9ef;
          }
          68%,100% {
            fill:#77c9ef;
          }
        }
        .p1 {
          fill:#77c9ef;
          animation:p1 9s steps(1,end) infinite;
        }
        @keyframes p1 {
          0% {
            fill:#58766c;
          }
          12% {
            fill:#77c9ef;
          }
          40% {
            fill:#77c9ef;
          }
          68%,100% {
            fill:#77c9ef;
          }
        }
        .p2 {
          fill:#77c9ef;
          animation:p2 9s steps(1,end) infinite;
        }
        @keyframes p2 {
          0% {
            fill:#58766c;
          }
          12% {
            fill:#77c9ef;
          }
          40% {
            fill:#77c9ef;
          }
          68%,100% {
            fill:#77c9ef;
          }
        }
        .p3 {
          fill:#77c9ef;
          animation:p3 9s steps(1,end) infinite;
        }
        @keyframes p3 {
          0% {
            fill:#58766c;
          }
          12% {
            fill:#77c9ef;
          }
          40% {
            fill:#77c9ef;
          }
          68%,100% {
            fill:#77c9ef;
          }
        }
        .p4 {
          fill:#f3c977;
          animation:p4 9s steps(1,end) infinite;
        }
        @keyframes p4 {
          0% {
            fill:#58766c;
          }
          12% {
            fill:#77c9ef;
          }
          40% {
            fill:#77c9ef;
          }
          68%,100% {
            fill:#f3c977;
          }
        }
        .p5 {
          fill:#f3c977;
          animation:p5 9s steps(1,end) infinite;
        }
        @keyframes p5 {
          0% {
            fill:#58766c;
          }
          12% {
            fill:#f3c977;
          }
          40% {
            fill:#f3c977;
          }
          68%,100% {
            fill:#f3c977;
          }
        }
        .p6 {
          fill:#f3c977;
          animation:p6 9s steps(1,end) infinite;
        }
        @keyframes p6 {
          0% {
            fill:#58766c;
          }
          12% {
            fill:#f3c977;
          }
          40% {
            fill:#f3c977;
          }
          68%,100% {
            fill:#f3c977;
          }
        }
        .p7 {
          fill:#f3c977;
          animation:p7 9s steps(1,end) infinite;
        }
        @keyframes p7 {
          0% {
            fill:#58766c;
          }
          12% {
            fill:#f3c977;
          }
          40% {
            fill:#f3c977;
          }
          68%,100% {
            fill:#f3c977;
          }
        }
        .p8 {
          fill:#f3c977;
          animation:p8 9s steps(1,end) infinite;
        }
        @keyframes p8 {
          0% {
            fill:#58766c;
          }
          12% {
            fill:#f3c977;
          }
          40% {
            fill:#f3c977;
          }
          68%,100% {
            fill:#f3c977;
          }
        }
        .p9 {
          fill:#f3c977;
          animation:p9 9s steps(1,end) infinite;
        }
        @keyframes p9 {
          0% {
            fill:#58766c;
          }
          12% {
            fill:#77c9ef;
          }
          40% {
            fill:#f3c977;
          }
          68%,100% {
            fill:#f3c977;
          }
        }
        .c0 {
          stroke:#77c9ef;
          transform:translate(37.75px,42.25px);
          animation:c0 9s linear infinite;
        }
        @keyframes c0 {
          0%,18% {
            transform:translate(28px,30px);
          }
          32%,46% {
            transform:translate(44.667px,58.667px);
          }
          60%,74% {
            transform:translate(41.8px,48.8px);
          }
          88%,100% {
            transform:translate(37.75px,42.25px);
          }
        }
        .c1 {
          stroke:#f3c977;
          transform:translate(79.5px,85.167px);
          animation:c1 9s linear infinite;
        }
        @keyframes c1 {
          0%,18% {
            transform:translate(110px,35px);
          }
          32%,46% {
            transform:translate(90px,82px);
          }
          60%,74% {
            transform:translate(83.8px,87.2px);
          }
          88%,100% {
            transform:translate(79.5px,85.167px);
          }
        }
        .l0 {
          animation:l0 9s steps(1,end) infinite;
        }
        @keyframes l0 {
          0% {
            opacity:0;
          }
          12% {
            opacity:.5;
          }
          23%,100% {
            opacity:0;
          }
        }
        .l1 {
          animation:l1 9s steps(1,end) infinite;
        }
        @keyframes l1 {
          0% {
            opacity:0;
          }
          40% {
            opacity:.5;
          }
          51%,100% {
            opacity:0;
          }
        }
        .l2 {
          animation:l2 9s steps(1,end) infinite;
        }
        @keyframes l2 {
          0% {
            opacity:0;
          }
          68% {
            opacity:.5;
          }
          79%,100% {
            opacity:0;
          }
        }
        .links {
          fill:none;
          stroke-width:1;
          opacity:0;
        }
        .centroid {
          stroke-width:3;
          paint-order:stroke;
          filter:drop-shadow(0 0 2px #07120f);
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
      <svg viewBox="0 0 140 140" role="img" aria-label="K-Means Clustering">
        <circle class="p0" cx="25" cy="36" r="3.5"/>
        <circle class="p1" cx="40" cy="29" r="3.5"/>
        <circle class="p2" cx="31" cy="54" r="3.5"/>
        <circle class="p3" cx="55" cy="50" r="3.5"/>
        <circle class="p4" cx="58" cy="75" r="3.5"/>
        <circle class="p5" cx="78" cy="65" r="3.5"/>
        <circle class="p6" cx="99" cy="66" r="3.5"/>
        <circle class="p7" cx="103" cy="92" r="3.5"/>
        <circle class="p8" cx="80" cy="105" r="3.5"/>
        <circle class="p9" cx="59" cy="108" r="3.5"/>
        <path class="ink centroid c0" d="M-5 0H5M0 -5V5"/>
        <path class="ink centroid c1" d="M-5 0H5M0 -5V5"/>
        <g class="links l0">
          <path d="M25 36L28 30" stroke="#77c9ef"/>
          <path d="M40 29L28 30" stroke="#77c9ef"/>
          <path d="M31 54L28 30" stroke="#77c9ef"/>
          <path d="M55 50L28 30" stroke="#77c9ef"/>
          <path d="M58 75L28 30" stroke="#77c9ef"/>
          <path d="M78 65L110 35" stroke="#f3c977"/>
          <path d="M99 66L110 35" stroke="#f3c977"/>
          <path d="M103 92L110 35" stroke="#f3c977"/>
          <path d="M80 105L110 35" stroke="#f3c977"/>
          <path d="M59 108L28 30" stroke="#77c9ef"/>
        </g>
        <g class="links l1">
          <path d="M25 36L44.667 58.667" stroke="#77c9ef"/>
          <path d="M40 29L44.667 58.667" stroke="#77c9ef"/>
          <path d="M31 54L44.667 58.667" stroke="#77c9ef"/>
          <path d="M55 50L44.667 58.667" stroke="#77c9ef"/>
          <path d="M58 75L44.667 58.667" stroke="#77c9ef"/>
          <path d="M78 65L90 82" stroke="#f3c977"/>
          <path d="M99 66L90 82" stroke="#f3c977"/>
          <path d="M103 92L90 82" stroke="#f3c977"/>
          <path d="M80 105L90 82" stroke="#f3c977"/>
          <path d="M59 108L90 82" stroke="#f3c977"/>
        </g>
        <g class="links l2">
          <path d="M25 36L41.8 48.8" stroke="#77c9ef"/>
          <path d="M40 29L41.8 48.8" stroke="#77c9ef"/>
          <path d="M31 54L41.8 48.8" stroke="#77c9ef"/>
          <path d="M55 50L41.8 48.8" stroke="#77c9ef"/>
          <path d="M58 75L83.8 87.2" stroke="#f3c977"/>
          <path d="M78 65L83.8 87.2" stroke="#f3c977"/>
          <path d="M99 66L83.8 87.2" stroke="#f3c977"/>
          <path d="M103 92L83.8 87.2" stroke="#f3c977"/>
          <path d="M80 105L83.8 87.2" stroke="#f3c977"/>
          <path d="M59 108L83.8 87.2" stroke="#f3c977"/>
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

if (!customElements.get("concept-k-means-clustering")) {
  customElements.define("concept-k-means-clustering", ConceptKMeansClustering);
}
