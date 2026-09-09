// Star-Tracker Attitude Determination. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptStarTrackerAttitudeDetermination extends HTMLElement {
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
        .catalogMatch {
          animation:catalogMatch 16s linear infinite;
        }
        .cameraMatch {
          animation:cameraMatch 16s linear infinite;
        }
        .attitude {
          animation:attitude 16s linear infinite;
        }
        @keyframes catalogMatch {
          0% {
            opacity:0;
          }
          2.083% {
            opacity:0;
          }
          4.167% {
            opacity:0;
          }
          6.25% {
            opacity:0;
          }
          8.333% {
            opacity:0;
          }
          10.417% {
            opacity:0;
          }
          12.5% {
            opacity:0.002;
          }
          14.583% {
            opacity:0.056;
          }
          16.667% {
            opacity:0.167;
          }
          18.75% {
            opacity:0.316;
          }
          20.833% {
            opacity:0.486;
          }
          22.917% {
            opacity:0.657;
          }
          25% {
            opacity:0.811;
          }
          27.083% {
            opacity:0.93;
          }
          29.167% {
            opacity:0.994;
          }
          31.25% {
            opacity:1;
          }
          33.333% {
            opacity:1;
          }
          35.417% {
            opacity:1;
          }
          37.5% {
            opacity:1;
          }
          39.583% {
            opacity:1;
          }
          41.667% {
            opacity:1;
          }
          43.75% {
            opacity:1;
          }
          45.833% {
            opacity:1;
          }
          47.917% {
            opacity:1;
          }
          50% {
            opacity:1;
          }
          52.083% {
            opacity:1;
          }
          54.167% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          66.667% {
            opacity:1;
          }
          68.75% {
            opacity:1;
          }
          70.833% {
            opacity:1;
          }
          72.917% {
            opacity:1;
          }
          75% {
            opacity:1;
          }
          77.083% {
            opacity:1;
          }
          79.167% {
            opacity:1;
          }
          81.25% {
            opacity:1;
          }
          83.333% {
            opacity:1;
          }
          85.417% {
            opacity:1;
          }
          87.5% {
            opacity:1;
          }
          89.583% {
            opacity:1;
          }
          91.667% {
            opacity:1;
          }
          93.75% {
            opacity:1;
          }
          95.833% {
            opacity:1;
          }
          97.917% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes cameraMatch {
          0% {
            opacity:0;
          }
          2.083% {
            opacity:0;
          }
          4.167% {
            opacity:0;
          }
          6.25% {
            opacity:0;
          }
          8.333% {
            opacity:0;
          }
          10.417% {
            opacity:0;
          }
          12.5% {
            opacity:0;
          }
          14.583% {
            opacity:0;
          }
          16.667% {
            opacity:0;
          }
          18.75% {
            opacity:0;
          }
          20.833% {
            opacity:0;
          }
          22.917% {
            opacity:0;
          }
          25% {
            opacity:0;
          }
          27.083% {
            opacity:0;
          }
          29.167% {
            opacity:0;
          }
          31.25% {
            opacity:0.014;
          }
          33.333% {
            opacity:0.09;
          }
          35.417% {
            opacity:0.217;
          }
          37.5% {
            opacity:0.376;
          }
          39.583% {
            opacity:0.549;
          }
          41.667% {
            opacity:0.716;
          }
          43.75% {
            opacity:0.859;
          }
          45.833% {
            opacity:0.96;
          }
          47.917% {
            opacity:1;
          }
          50% {
            opacity:1;
          }
          52.083% {
            opacity:1;
          }
          54.167% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          66.667% {
            opacity:1;
          }
          68.75% {
            opacity:1;
          }
          70.833% {
            opacity:1;
          }
          72.917% {
            opacity:1;
          }
          75% {
            opacity:1;
          }
          77.083% {
            opacity:1;
          }
          79.167% {
            opacity:1;
          }
          81.25% {
            opacity:1;
          }
          83.333% {
            opacity:1;
          }
          85.417% {
            opacity:1;
          }
          87.5% {
            opacity:1;
          }
          89.583% {
            opacity:1;
          }
          91.667% {
            opacity:1;
          }
          93.75% {
            opacity:1;
          }
          95.833% {
            opacity:1;
          }
          97.917% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes attitude {
          0% {
            transform:translate(70px,107px) rotate(0deg);
          }
          2.083% {
            transform:translate(70px,107px) rotate(0deg);
          }
          4.167% {
            transform:translate(70px,107px) rotate(0deg);
          }
          6.25% {
            transform:translate(70px,107px) rotate(0deg);
          }
          8.333% {
            transform:translate(70px,107px) rotate(0deg);
          }
          10.417% {
            transform:translate(70px,107px) rotate(0deg);
          }
          12.5% {
            transform:translate(70px,107px) rotate(0deg);
          }
          14.583% {
            transform:translate(70px,107px) rotate(0deg);
          }
          16.667% {
            transform:translate(70px,107px) rotate(0deg);
          }
          18.75% {
            transform:translate(70px,107px) rotate(0deg);
          }
          20.833% {
            transform:translate(70px,107px) rotate(0deg);
          }
          22.917% {
            transform:translate(70px,107px) rotate(0deg);
          }
          25% {
            transform:translate(70px,107px) rotate(0deg);
          }
          27.083% {
            transform:translate(70px,107px) rotate(0deg);
          }
          29.167% {
            transform:translate(70px,107px) rotate(0deg);
          }
          31.25% {
            transform:translate(70px,107px) rotate(0deg);
          }
          33.333% {
            transform:translate(70px,107px) rotate(0deg);
          }
          35.417% {
            transform:translate(70px,107px) rotate(0deg);
          }
          37.5% {
            transform:translate(70px,107px) rotate(0deg);
          }
          39.583% {
            transform:translate(70px,107px) rotate(0deg);
          }
          41.667% {
            transform:translate(70px,107px) rotate(0deg);
          }
          43.75% {
            transform:translate(70px,107px) rotate(0deg);
          }
          45.833% {
            transform:translate(70px,107px) rotate(0deg);
          }
          47.917% {
            transform:translate(70px,107px) rotate(0deg);
          }
          50% {
            transform:translate(70px,107px) rotate(0deg);
          }
          52.083% {
            transform:translate(70px,107px) rotate(-0.63deg);
          }
          54.167% {
            transform:translate(70px,107px) rotate(-2.351deg);
          }
          56.25% {
            transform:translate(70px,107px) rotate(-4.907deg);
          }
          58.333% {
            transform:translate(70px,107px) rotate(-8.044deg);
          }
          60.417% {
            transform:translate(70px,107px) rotate(-11.507deg);
          }
          62.5% {
            transform:translate(70px,107px) rotate(-15.041deg);
          }
          64.583% {
            transform:translate(70px,107px) rotate(-18.392deg);
          }
          66.667% {
            transform:translate(70px,107px) rotate(-21.305deg);
          }
          68.75% {
            transform:translate(70px,107px) rotate(-23.524deg);
          }
          70.833% {
            transform:translate(70px,107px) rotate(-24.797deg);
          }
          72.917% {
            transform:translate(70px,107px) rotate(-25deg);
          }
          75% {
            transform:translate(70px,107px) rotate(-25deg);
          }
          77.083% {
            transform:translate(70px,107px) rotate(-25deg);
          }
          79.167% {
            transform:translate(70px,107px) rotate(-25deg);
          }
          81.25% {
            transform:translate(70px,107px) rotate(-25deg);
          }
          83.333% {
            transform:translate(70px,107px) rotate(-25deg);
          }
          85.417% {
            transform:translate(70px,107px) rotate(-25deg);
          }
          87.5% {
            transform:translate(70px,107px) rotate(-25deg);
          }
          89.583% {
            transform:translate(70px,107px) rotate(-25deg);
          }
          91.667% {
            transform:translate(70px,107px) rotate(-25deg);
          }
          93.75% {
            transform:translate(70px,107px) rotate(-25deg);
          }
          95.833% {
            transform:translate(70px,107px) rotate(-25deg);
          }
          97.917% {
            transform:translate(70px,107px) rotate(-25deg);
          }
          100% {
            transform:translate(70px,107px) rotate(-25deg);
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .catalogMatch {
            opacity:1;
          }
          .cameraMatch {
            opacity:1;
          }
          .attitude {
            transform:translate(70px,107px) rotate(-25deg);
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Star-Tracker Attitude Determination">
        <rect x="9" y="15" width="54" height="55" rx="3" fill="#122c30" stroke="#5d8778"/>
        <rect x="77" y="15" width="54" height="55" rx="3" fill="#122c30" stroke="#5d8778"/>
        <circle cx="22" cy="32" r="1.5" fill="#dbe2c3"/>
        <circle cx="44" cy="27" r="2.1" fill="#dbe2c3"/>
        <circle cx="51" cy="47" r="1.5" fill="#dbe2c3"/>
        <circle cx="30" cy="55" r="1.5" fill="#dbe2c3"/>
        <circle cx="95.538" cy="27.02" r="1.7" fill="#dbe2c3"/>
        <circle cx="117.59" cy="31.786" r="1.7" fill="#dbe2c3"/>
        <circle cx="115.482" cy="52.871" r="1.7" fill="#dbe2c3"/>
        <circle cx="93.068" cy="51.246" r="1.7" fill="#dbe2c3"/>
        <path d="M22 32L44 27L51 47L30 55L22 32" class="catalogMatch" fill="none" stroke="#ddbd7b" stroke-width="1"/>
        <path d="M95.538 27.02L117.59 31.786L115.482 52.871L93.068 51.246L95.538 27.02" class="cameraMatch" fill="none" stroke="#ddbd7b" stroke-width="1"/>
        <path d="M36 73L62 87M104 73L78 87" stroke="#648f7f" fill="none"/>
        <circle cx="70" cy="107" r="19" fill="none" stroke="#567d71"/>
        <path d="M70 87V127M50 107H90" stroke="#365f53" stroke-dasharray="2 3"/>
        <g class="attitude">
          <path d="M0 0V-16L-3 -12M0 -16L3 -12M0 0H13" stroke="#91d1ce" fill="none" stroke-width="1.8"/>
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

if (!customElements.get("concept-star-tracker-attitude-determination")) {
  customElements.define("concept-star-tracker-attitude-determination", ConceptStarTrackerAttitudeDetermination);
}
