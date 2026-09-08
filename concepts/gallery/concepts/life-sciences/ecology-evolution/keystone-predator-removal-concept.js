// Keystone Predator Removal. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptKeystonePredatorRemoval extends HTMLElement {
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
        .quadrat {
          fill:#292e25;
          stroke:#7a846c;
          stroke-width:1
        }
        .mussel {
          fill:#65717d;
          stroke:#b0b7ab;
          stroke-width:.8
        }
        .stripe {
          fill:none;
          stroke:#c3c8b6;
          stroke-width:.7
        }
        .barnacle {
          fill:#a9aa8a;
          stroke:#d0ccb0;
          stroke-width:.6
        }
        .limpet {
          fill:#8caa89;
          stroke:#c2d0ad;
          stroke-width:.8
        }
        .star {
          fill:#d7a075;
          stroke:#f1c38d;
          stroke-width:1
        }
        .experiment {
          animation:reset 14s linear infinite
        }
        .left-star {
          transform:translate(37px,45px);
          animation:left-star 14s linear infinite
        }
        .right-star {
          opacity:0;
          animation:right-star 14s linear infinite
        }
        .prey {
          opacity:0;
          animation:prey 14s step-end infinite
        }
        .displaced {
          opacity:0;
          animation:displaced 14s linear infinite
        }
        @keyframes reset {
          0%,100% {
            opacity:0
          }
          5%,94% {
            opacity:1
          }
        }
        @keyframes left-star {
          0%,20% {
            transform:translate(37px,45px)
          }
          35%,40% {
            transform:translate(52px,84px)
          }
          52%,100% {
            transform:translate(37px,45px)
          }
        }
        @keyframes right-star {
          0%,10% {
            opacity:1;
            transform:translate(99px,45px)
          }
          25%,100% {
            opacity:0;
            transform:translate(99px,13px)
          }
        }
        @keyframes prey {
          0% {
            opacity:1
          }
          40%,100% {
            opacity:0
          }
        }
        @keyframes displaced {
          0%,66% {
            opacity:1
          }
          76%,100% {
            opacity:0
          }
        }
        .settler0 {
          animation:settler0 14s linear infinite
        }
        @keyframes settler0 {
          0%,34% {
            opacity:0;
            transform:scale(.2)
          }
          48% {
            opacity:1;
            transform:scale(.45)
          }
          67%,100% {
            opacity:1;
            transform:scale(1)
          }
        }
        .settler1 {
          animation:settler1 14s linear infinite
        }
        @keyframes settler1 {
          0%,35% {
            opacity:0;
            transform:scale(.2)
          }
          49% {
            opacity:1;
            transform:scale(.45)
          }
          68%,100% {
            opacity:1;
            transform:scale(1)
          }
        }
        .settler2 {
          animation:settler2 14s linear infinite
        }
        @keyframes settler2 {
          0%,36% {
            opacity:0;
            transform:scale(.2)
          }
          50% {
            opacity:1;
            transform:scale(.45)
          }
          69%,100% {
            opacity:1;
            transform:scale(1)
          }
        }
        .settler3 {
          animation:settler3 14s linear infinite
        }
        @keyframes settler3 {
          0%,37% {
            opacity:0;
            transform:scale(.2)
          }
          51% {
            opacity:1;
            transform:scale(.45)
          }
          70%,100% {
            opacity:1;
            transform:scale(1)
          }
        }
        .settler4 {
          animation:settler4 14s linear infinite
        }
        @keyframes settler4 {
          0%,38% {
            opacity:0;
            transform:scale(.2)
          }
          52% {
            opacity:1;
            transform:scale(.45)
          }
          71%,100% {
            opacity:1;
            transform:scale(1)
          }
        }
        .settler5 {
          animation:settler5 14s linear infinite
        }
        @keyframes settler5 {
          0%,39% {
            opacity:0;
            transform:scale(.2)
          }
          53% {
            opacity:1;
            transform:scale(.45)
          }
          72%,100% {
            opacity:1;
            transform:scale(1)
          }
        }
        .settler6 {
          animation:settler6 14s linear infinite
        }
        @keyframes settler6 {
          0%,40% {
            opacity:0;
            transform:scale(.2)
          }
          54% {
            opacity:1;
            transform:scale(.45)
          }
          73%,100% {
            opacity:1;
            transform:scale(1)
          }
        }
        .settler7 {
          animation:settler7 14s linear infinite
        }
        @keyframes settler7 {
          0%,41% {
            opacity:0;
            transform:scale(.2)
          }
          55% {
            opacity:1;
            transform:scale(.45)
          }
          74%,100% {
            opacity:1;
            transform:scale(1)
          }
        }
        .settler8 {
          animation:settler8 14s linear infinite
        }
        @keyframes settler8 {
          0%,42% {
            opacity:0;
            transform:scale(.2)
          }
          56% {
            opacity:1;
            transform:scale(.45)
          }
          75%,100% {
            opacity:1;
            transform:scale(1)
          }
        }
        .settler9 {
          animation:settler9 14s linear infinite
        }
        @keyframes settler9 {
          0%,43% {
            opacity:0;
            transform:scale(.2)
          }
          57% {
            opacity:1;
            transform:scale(.45)
          }
          76%,100% {
            opacity:1;
            transform:scale(1)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Keystone Predator Removal">
        <rect class="quadrat" x="12" y="29" width="54" height="92" rx="3"/>
        <rect class="quadrat" x="74" y="29" width="54" height="92" rx="3"/>
        <g class="experiment">
          <g transform="translate(22 87)">
            <g class="">
              <ellipse class="mussel" cx="0" cy="0" rx="6.5" ry="4" transform="rotate(-25)"/>
              <path class="stripe" d="M-5,1Q0,-4 5,-2M-3,3Q2,-2 6,-2"/>
            </g>
          </g>
          <g transform="translate(37 87)">
            <g class="">
              <ellipse class="mussel" cx="0" cy="0" rx="6.5" ry="4" transform="rotate(-25)"/>
              <path class="stripe" d="M-5,1Q0,-4 5,-2M-3,3Q2,-2 6,-2"/>
            </g>
          </g>
          <g transform="translate(52 87)">
            <g class="prey">
              <ellipse class="mussel" cx="0" cy="0" rx="6.5" ry="4" transform="rotate(-25)"/>
              <path class="stripe" d="M-5,1Q0,-4 5,-2M-3,3Q2,-2 6,-2"/>
            </g>
          </g>
          <g class="">
            <path class="barnacle" d="M19,66L24,56L29,66Z M47,108L52,98L57,108Z"/>
            <path class="limpet" d="M29,106Q37,94 45,106Q37,112 29,106Z"/>
          </g>
          <g transform="translate(84 87)">
            <g class="">
              <ellipse class="mussel" cx="0" cy="0" rx="6.5" ry="4" transform="rotate(-25)"/>
              <path class="stripe" d="M-5,1Q0,-4 5,-2M-3,3Q2,-2 6,-2"/>
            </g>
          </g>
          <g transform="translate(99 87)">
            <g class="">
              <ellipse class="mussel" cx="0" cy="0" rx="6.5" ry="4" transform="rotate(-25)"/>
              <path class="stripe" d="M-5,1Q0,-4 5,-2M-3,3Q2,-2 6,-2"/>
            </g>
          </g>
          <g transform="translate(114 87)">
            <g class="">
              <ellipse class="mussel" cx="0" cy="0" rx="6.5" ry="4" transform="rotate(-25)"/>
              <path class="stripe" d="M-5,1Q0,-4 5,-2M-3,3Q2,-2 6,-2"/>
            </g>
          </g>
          <g class="displaced">
            <path class="barnacle" d="M81,66L86,56L91,66Z M109,108L114,98L119,108Z"/>
            <path class="limpet" d="M91,106Q99,94 107,106Q99,112 91,106Z"/>
          </g>
          <g transform="translate(84 45)">
            <g class="settler0">
              <ellipse class="mussel" cx="0" cy="0" rx="6.5" ry="4" transform="rotate(-25)"/>
              <path class="stripe" d="M-5,1Q0,-4 5,-2M-3,3Q2,-2 6,-2"/>
            </g>
          </g>
          <g transform="translate(101 45)">
            <g class="settler1">
              <ellipse class="mussel" cx="0" cy="0" rx="6.5" ry="4" transform="rotate(-25)"/>
              <path class="stripe" d="M-5,1Q0,-4 5,-2M-3,3Q2,-2 6,-2"/>
            </g>
          </g>
          <g transform="translate(118 45)">
            <g class="settler2">
              <ellipse class="mussel" cx="0" cy="0" rx="6.5" ry="4" transform="rotate(-25)"/>
              <path class="stripe" d="M-5,1Q0,-4 5,-2M-3,3Q2,-2 6,-2"/>
            </g>
          </g>
          <g transform="translate(86 62)">
            <g class="settler3">
              <ellipse class="mussel" cx="0" cy="0" rx="6.5" ry="4" transform="rotate(-25)"/>
              <path class="stripe" d="M-5,1Q0,-4 5,-2M-3,3Q2,-2 6,-2"/>
            </g>
          </g>
          <g transform="translate(101 62)">
            <g class="settler4">
              <ellipse class="mussel" cx="0" cy="0" rx="6.5" ry="4" transform="rotate(-25)"/>
              <path class="stripe" d="M-5,1Q0,-4 5,-2M-3,3Q2,-2 6,-2"/>
            </g>
          </g>
          <g transform="translate(118 62)">
            <g class="settler5">
              <ellipse class="mussel" cx="0" cy="0" rx="6.5" ry="4" transform="rotate(-25)"/>
              <path class="stripe" d="M-5,1Q0,-4 5,-2M-3,3Q2,-2 6,-2"/>
            </g>
          </g>
          <g transform="translate(84 105)">
            <g class="settler6">
              <ellipse class="mussel" cx="0" cy="0" rx="6.5" ry="4" transform="rotate(-25)"/>
              <path class="stripe" d="M-5,1Q0,-4 5,-2M-3,3Q2,-2 6,-2"/>
            </g>
          </g>
          <g transform="translate(99 105)">
            <g class="settler7">
              <ellipse class="mussel" cx="0" cy="0" rx="6.5" ry="4" transform="rotate(-25)"/>
              <path class="stripe" d="M-5,1Q0,-4 5,-2M-3,3Q2,-2 6,-2"/>
            </g>
          </g>
          <g transform="translate(114 105)">
            <g class="settler8">
              <ellipse class="mussel" cx="0" cy="0" rx="6.5" ry="4" transform="rotate(-25)"/>
              <path class="stripe" d="M-5,1Q0,-4 5,-2M-3,3Q2,-2 6,-2"/>
            </g>
          </g>
          <g transform="translate(101 75)">
            <g class="settler9">
              <ellipse class="mussel" cx="0" cy="0" rx="6.5" ry="4" transform="rotate(-25)"/>
              <path class="stripe" d="M-5,1Q0,-4 5,-2M-3,3Q2,-2 6,-2"/>
            </g>
          </g>
          <g class="left-star">
            <path class="star" d="M0.000,-10.000L2.351,-3.236L9.511,-3.090L3.804,1.236L5.878,8.090L0.000,4.000L-5.878,8.090L-3.804,1.236L-9.511,-3.090L-2.351,-3.236Z"/>
          </g>
          <g class="right-star">
            <path class="star" d="M0.000,-10.000L2.351,-3.236L9.511,-3.090L3.804,1.236L5.878,8.090L0.000,4.000L-5.878,8.090L-3.804,1.236L-9.511,-3.090L-2.351,-3.236Z"/>
          </g>
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

if (!customElements.get("concept-keystone-predator-removal")) {
  customElements.define("concept-keystone-predator-removal", ConceptKeystonePredatorRemoval);
}
