// Re-Epithelialization. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptReEpithelialization extends HTMLElement {
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
        .bed {
          fill:#735654;
          stroke:#a17a78;
          stroke-width:1.5
        }
        .bed-texture {
          fill:none;
          stroke:#a5817888;
          stroke-width:2
        }
        .sheet {
          fill:#9c9e75;
          stroke:#c4c8a3;
          stroke-width:1.4
        }
        .left {
          animation:left 14s infinite
        }
        .right {
          animation:right 14s infinite
        }
        .nucleus {
          fill:#666c77
        }
        .boundary {
          stroke:#c4c8a3;
          stroke-width:1
        }
        .leader-left {
          animation:leader-left 14s infinite
        }
        .leader-right {
          animation:leader-right 14s infinite
        }
        .follower-left {
          animation:follower-left 14s infinite
        }
        .follower-right {
          animation:follower-right 14s infinite
        }
        .surface {
          fill:none;
          stroke:#ddd8b3;
          stroke-width:3;
          animation:surface 14s infinite
        }
        @keyframes left {
          0%,8% {
            d:path("M10 75L43 75Q43 84 43 89L43 94L10 94Z")
          }
          22% {
            d:path("M10 75L43 75Q49 80 51 89L53 94L10 94Z")
          }
          72% {
            d:path("M10 75L57 75Q68 80 70 89L70 94L10 94Z")
          }
          92%,100% {
            d:path("M10 75L70 75Q70 82 70 89L70 94L10 94Z")
          }
        }
        @keyframes right {
          0%,8% {
            d:path("M130 75L97 75Q97 84 97 89L97 94L130 94Z")
          }
          22% {
            d:path("M130 75L97 75Q91 80 89 89L87 94L130 94Z")
          }
          72% {
            d:path("M130 75L83 75Q72 80 70 89L70 94L130 94Z")
          }
          92%,100% {
            d:path("M130 75L70 75Q70 82 70 89L70 94L130 94Z")
          }
        }
        @keyframes leader-left {
          0%,8% {
            transform:translateX(-26px)
          }
          72%,100% {
            transform:translateX(0)
          }
        }
        @keyframes leader-right {
          0%,8% {
            transform:translateX(26px)
          }
          72%,100% {
            transform:translateX(0)
          }
        }
        @keyframes follower-left {
          0%,15% {
            transform:translateX(-19px);
            opacity:0
          }
          25% {
            opacity:1
          }
          66%,100% {
            transform:translateX(0);
            opacity:1
          }
        }
        @keyframes follower-right {
          0%,15% {
            transform:translateX(19px);
            opacity:0
          }
          25% {
            opacity:1
          }
          66%,100% {
            transform:translateX(0);
            opacity:1
          }
        }
        @keyframes surface {
          0%,92% {
            opacity:0
          }
          98%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Re-Epithelialization">
        <path class="bed" d="M10 93Q70 88 130 93V127H10Z"/>
        <path class="bed-texture" d="M16 102L124 111M16 117L123 99M24 126L115 104"/>
        <defs>
          <clipPath id="left-sheet">
            <path class="left" d="M10 75L70 75Q70 82 70 89L70 94L10 94Z"/>
          </clipPath>
          <clipPath id="right-sheet">
            <path class="right" d="M130 75L70 75Q70 82 70 89L70 94L130 94Z"/>
          </clipPath>
        </defs>
        <path class="sheet left" d="M10 75L70 75Q70 82 70 89L70 94L10 94Z"/>
        <path class="sheet right" d="M130 75L70 75Q70 82 70 89L70 94L130 94Z"/>
        <g clip-path="url(#left-sheet)">
          <ellipse class="nucleus leader-left" cx="64" cy="89" rx="3" ry="2"/>
          <ellipse class="nucleus" cx="24" cy="84" rx="3" ry="4"/>
          <ellipse class="nucleus follower-left" cx="43" cy="84" rx="3" ry="4"/>
          <path class="boundary" d="M32 76V93"/>
        </g>
        <g clip-path="url(#right-sheet)">
          <ellipse class="nucleus leader-right" cx="76" cy="89" rx="3" ry="2"/>
          <ellipse class="nucleus" cx="116" cy="84" rx="3" ry="4"/>
          <ellipse class="nucleus follower-right" cx="97" cy="84" rx="3" ry="4"/>
          <path class="boundary" d="M108 76V93"/>
        </g>
        <path class="surface" d="M10 75H130"/>
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

if (!customElements.get("concept-re-epithelialization")) {
  customElements.define("concept-re-epithelialization", ConceptReEpithelialization);
}
