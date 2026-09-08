// Natural Selection. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptNaturalSelection extends HTMLElement {
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
        .habitat {
          fill:#1b2b22
        }
        .bark {
          fill:none;
          stroke:#263b2c;
          stroke-width:3
        }
        .cohorts {
          animation:reset 14s linear infinite
        }
        .pair {
          fill:none;
          stroke:#a3b58d;
          stroke-width:1;
          stroke-dasharray:2 2;
          opacity:1;
          animation:pair 14s linear infinite
        }
        .bird {
          fill:#c1ac89;
          stroke:#e0c89b;
          stroke-width:1;
          opacity:0;
          animation:bird 14s linear infinite
        }
        @keyframes reset {
          0%,100% {
            opacity:0
          }
          5%,94% {
            opacity:1
          }
        }
        @keyframes pair {
          0%,42% {
            opacity:0
          }
          57%,100% {
            opacity:1
          }
        }
        .child00 {
          transform-origin:0px 0px;
          animation:child00 14s linear infinite
        }
        @keyframes child00 {
          0%,60% {
            opacity:0;
            transform:translate(35px,96px) scale(.25)
          }
          78%,100% {
            opacity:1;
            transform:translate(35px,96px) scale(1)
          }
        }
        .child01 {
          transform-origin:0px 0px;
          animation:child01 14s linear infinite
        }
        @keyframes child01 {
          0%,63% {
            opacity:0;
            transform:translate(35px,116px) scale(.25)
          }
          81%,100% {
            opacity:1;
            transform:translate(35px,116px) scale(1)
          }
        }
        .child10 {
          transform-origin:0px 0px;
          animation:child10 14s linear infinite
        }
        @keyframes child10 {
          0%,62% {
            opacity:0;
            transform:translate(70px,96px) scale(.25)
          }
          80%,100% {
            opacity:1;
            transform:translate(70px,96px) scale(1)
          }
        }
        .child11 {
          transform-origin:0px 0px;
          animation:child11 14s linear infinite
        }
        @keyframes child11 {
          0%,65% {
            opacity:0;
            transform:translate(70px,116px) scale(.25)
          }
          83%,100% {
            opacity:1;
            transform:translate(70px,116px) scale(1)
          }
        }
        .child20 {
          transform-origin:0px 0px;
          animation:child20 14s linear infinite
        }
        @keyframes child20 {
          0%,64% {
            opacity:0;
            transform:translate(105px,96px) scale(.25)
          }
          82%,100% {
            opacity:1;
            transform:translate(105px,96px) scale(1)
          }
        }
        .child21 {
          transform-origin:0px 0px;
          animation:child21 14s linear infinite
        }
        @keyframes child21 {
          0%,67% {
            opacity:0;
            transform:translate(105px,116px) scale(.25)
          }
          85%,100% {
            opacity:1;
            transform:translate(105px,116px) scale(1)
          }
        }
        .taken0 {
          opacity:0;
          animation:taken0 14s step-end infinite
        }
        @keyframes taken0 {
          0% {
            opacity:1
          }
          27%,100% {
            opacity:0
          }
        }
        .taken1 {
          opacity:0;
          animation:taken1 14s step-end infinite
        }
        @keyframes taken1 {
          0% {
            opacity:1
          }
          39%,100% {
            opacity:0
          }
        }
        @keyframes bird {
          0%,17% {
            opacity:0;
            transform:translate(128px,56px)
          }
          20% {
            opacity:1;
            transform:translate(119px,61px)
          }
          26%,27% {
            opacity:1;
            transform:translate(93px,75px)
          }
          31% {
            opacity:1;
            transform:translate(65px,64px)
          }
          38%,39% {
            opacity:1;
            transform:translate(23px,75px)
          }
          45%,100% {
            opacity:0;
            transform:translate(7px,50px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Natural Selection">
        <rect class="habitat" x="15" y="17" width="110" height="113" rx="5"/>
        <path class="bark" d="M24,20Q35,61 25,123M58,20Q47,70 58,127M91,20Q103,68 92,125M117,19L113,126"/>
        <g class="cohorts">
          <g transform="translate(35 35)">
            <path fill="#405a43" stroke="#80957a" stroke-width=".6" d="M0,0Q-8,-6 -6,2Q-3,6 0,1Q3,6 6,2Q8,-6 0,0Z"/>
            <path stroke="#141f18" stroke-width="1.2" d="M0,-3V4"/>
          </g>
          <g transform="translate(35 53)">
            <path fill="#405a43" stroke="#80957a" stroke-width=".6" d="M0,0Q-8,-6 -6,2Q-3,6 0,1Q3,6 6,2Q8,-6 0,0Z"/>
            <path stroke="#141f18" stroke-width="1.2" d="M0,-3V4"/>
          </g>
          <path class="pair" d="M35,40V48M27,42H43"/>
          <g class="child00" transform="translate(35 96)">
            <path fill="#405a43" stroke="#80957a" stroke-width=".6" d="M0,0Q-8,-6 -6,2Q-3,6 0,1Q3,6 6,2Q8,-6 0,0Z"/>
            <path stroke="#141f18" stroke-width="1.2" d="M0,-3V4"/>
          </g>
          <g class="child01" transform="translate(35 116)">
            <path fill="#405a43" stroke="#80957a" stroke-width=".6" d="M0,0Q-8,-6 -6,2Q-3,6 0,1Q3,6 6,2Q8,-6 0,0Z"/>
            <path stroke="#141f18" stroke-width="1.2" d="M0,-3V4"/>
          </g>
          <g transform="translate(70 35)">
            <path fill="#405a43" stroke="#80957a" stroke-width=".6" d="M0,0Q-8,-6 -6,2Q-3,6 0,1Q3,6 6,2Q8,-6 0,0Z"/>
            <path stroke="#141f18" stroke-width="1.2" d="M0,-3V4"/>
          </g>
          <g transform="translate(70 53)">
            <path fill="#405a43" stroke="#80957a" stroke-width=".6" d="M0,0Q-8,-6 -6,2Q-3,6 0,1Q3,6 6,2Q8,-6 0,0Z"/>
            <path stroke="#141f18" stroke-width="1.2" d="M0,-3V4"/>
          </g>
          <path class="pair" d="M70,40V48M62,42H78"/>
          <g class="child10" transform="translate(70 96)">
            <path fill="#405a43" stroke="#80957a" stroke-width=".6" d="M0,0Q-8,-6 -6,2Q-3,6 0,1Q3,6 6,2Q8,-6 0,0Z"/>
            <path stroke="#141f18" stroke-width="1.2" d="M0,-3V4"/>
          </g>
          <g class="child11" transform="translate(70 116)">
            <path fill="#405a43" stroke="#80957a" stroke-width=".6" d="M0,0Q-8,-6 -6,2Q-3,6 0,1Q3,6 6,2Q8,-6 0,0Z"/>
            <path stroke="#141f18" stroke-width="1.2" d="M0,-3V4"/>
          </g>
          <g transform="translate(105 35)">
            <path fill="#e8d8ab" stroke="#80957a" stroke-width=".6" d="M0,0Q-8,-6 -6,2Q-3,6 0,1Q3,6 6,2Q8,-6 0,0Z"/>
            <path stroke="#141f18" stroke-width="1.2" d="M0,-3V4"/>
          </g>
          <g transform="translate(105 53)">
            <path fill="#e8d8ab" stroke="#80957a" stroke-width=".6" d="M0,0Q-8,-6 -6,2Q-3,6 0,1Q3,6 6,2Q8,-6 0,0Z"/>
            <path stroke="#141f18" stroke-width="1.2" d="M0,-3V4"/>
          </g>
          <path class="pair" d="M105,40V48M97,42H113"/>
          <g class="child20" transform="translate(105 96)">
            <path fill="#e8d8ab" stroke="#80957a" stroke-width=".6" d="M0,0Q-8,-6 -6,2Q-3,6 0,1Q3,6 6,2Q8,-6 0,0Z"/>
            <path stroke="#141f18" stroke-width="1.2" d="M0,-3V4"/>
          </g>
          <g class="child21" transform="translate(105 116)">
            <path fill="#e8d8ab" stroke="#80957a" stroke-width=".6" d="M0,0Q-8,-6 -6,2Q-3,6 0,1Q3,6 6,2Q8,-6 0,0Z"/>
            <path stroke="#141f18" stroke-width="1.2" d="M0,-3V4"/>
          </g>
          <g class="taken0" transform="translate(105 75)">
            <path fill="#e8d8ab" stroke="#80957a" stroke-width=".6" d="M0,0Q-8,-6 -6,2Q-3,6 0,1Q3,6 6,2Q8,-6 0,0Z"/>
            <path stroke="#141f18" stroke-width="1.2" d="M0,-3V4"/>
          </g>
          <g class="taken1" transform="translate(35 75)">
            <path fill="#e8d8ab" stroke="#80957a" stroke-width=".6" d="M0,0Q-8,-6 -6,2Q-3,6 0,1Q3,6 6,2Q8,-6 0,0Z"/>
            <path stroke="#141f18" stroke-width="1.2" d="M0,-3V4"/>
          </g>
        </g>
        <g class="bird">
          <circle cx="0" cy="0" r="5"/>
          <path d="M-4,3L-14,8L-5,-2M4,-2L12,0L4,2Z"/>
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

if (!customElements.get("concept-natural-selection")) {
  customElements.define("concept-natural-selection", ConceptNaturalSelection);
}
