// Absorbing Random Walk. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAbsorbingRandomWalk extends HTMLElement {
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
        .w0 {
          animation:walk0 10s steps(1,end) infinite
        }
        @keyframes walk0 {
          0% {
            transform:translate(0px,0)
          }
          8% {
            transform:translate(-16.667px,0)
          }
          16% {
            transform:translate(0px,0)
          }
          24% {
            transform:translate(16.667px,0)
          }
          32% {
            transform:translate(33.333px,0)
          }
          40% {
            transform:translate(16.667px,0)
          }
          48% {
            transform:translate(33.333px,0)
          }
          56% {
            transform:translate(50px,0)
          }
          64% {
            transform:translate(50px,0)
          }
          72% {
            transform:translate(50px,0)
          }
          80% {
            transform:translate(50px,0)
          }
          94% {
            transform:translate(50px,0)
          }
          100% {
            transform:translate(0,0)
          }
        }
        .w1 {
          animation:walk1 10s steps(1,end) infinite
        }
        @keyframes walk1 {
          0% {
            transform:translate(0px,0)
          }
          8% {
            transform:translate(16.667px,0)
          }
          16% {
            transform:translate(0px,0)
          }
          24% {
            transform:translate(-16.667px,0)
          }
          32% {
            transform:translate(-33.333px,0)
          }
          40% {
            transform:translate(-16.667px,0)
          }
          48% {
            transform:translate(-33.333px,0)
          }
          56% {
            transform:translate(-50px,0)
          }
          64% {
            transform:translate(-50px,0)
          }
          72% {
            transform:translate(-50px,0)
          }
          80% {
            transform:translate(-50px,0)
          }
          94% {
            transform:translate(-50px,0)
          }
          100% {
            transform:translate(0,0)
          }
        }
        .w2 {
          animation:walk2 10s steps(1,end) infinite
        }
        @keyframes walk2 {
          0% {
            transform:translate(0px,0)
          }
          8% {
            transform:translate(-16.667px,0)
          }
          16% {
            transform:translate(0px,0)
          }
          24% {
            transform:translate(-16.667px,0)
          }
          32% {
            transform:translate(-33.333px,0)
          }
          40% {
            transform:translate(-16.667px,0)
          }
          48% {
            transform:translate(0px,0)
          }
          56% {
            transform:translate(16.667px,0)
          }
          64% {
            transform:translate(33.333px,0)
          }
          72% {
            transform:translate(50px,0)
          }
          80% {
            transform:translate(50px,0)
          }
          94% {
            transform:translate(50px,0)
          }
          100% {
            transform:translate(0,0)
          }
        }
        .w3 {
          animation:walk3 10s steps(1,end) infinite
        }
        @keyframes walk3 {
          0% {
            transform:translate(0px,0)
          }
          8% {
            transform:translate(16.667px,0)
          }
          16% {
            transform:translate(33.333px,0)
          }
          24% {
            transform:translate(16.667px,0)
          }
          32% {
            transform:translate(0px,0)
          }
          40% {
            transform:translate(-16.667px,0)
          }
          48% {
            transform:translate(-33.333px,0)
          }
          56% {
            transform:translate(-16.667px,0)
          }
          64% {
            transform:translate(-33.333px,0)
          }
          72% {
            transform:translate(-50px,0)
          }
          80% {
            transform:translate(-50px,0)
          }
          94% {
            transform:translate(-50px,0)
          }
          100% {
            transform:translate(0,0)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Absorbing Random Walk">
        <path class="ink" style="color:#ed8eab" d="M20 19V121M120 19V121"/>
        <path class="ink muted" d="M20 30H120"/>
        <circle class="solid" cx="20" cy="30" r="1.5"/>
        <circle class="solid" cx="36.667" cy="30" r="1.5"/>
        <circle class="solid" cx="53.333" cy="30" r="1.5"/>
        <circle class="solid" cx="70" cy="30" r="1.5"/>
        <circle class="solid" cx="86.667" cy="30" r="1.5"/>
        <circle class="solid" cx="103.333" cy="30" r="1.5"/>
        <circle class="solid" cx="120" cy="30" r="1.5"/>
        <circle class="walker w0" cx="70" cy="30" r="4" fill="#f3c977" transform="translate(50 0)"/>
        <path class="ink muted" d="M20 57H120"/>
        <circle class="solid" cx="20" cy="57" r="1.5"/>
        <circle class="solid" cx="36.667" cy="57" r="1.5"/>
        <circle class="solid" cx="53.333" cy="57" r="1.5"/>
        <circle class="solid" cx="70" cy="57" r="1.5"/>
        <circle class="solid" cx="86.667" cy="57" r="1.5"/>
        <circle class="solid" cx="103.333" cy="57" r="1.5"/>
        <circle class="solid" cx="120" cy="57" r="1.5"/>
        <circle class="walker w1" cx="70" cy="57" r="4" fill="#77c9ef" transform="translate(-50 0)"/>
        <path class="ink muted" d="M20 84H120"/>
        <circle class="solid" cx="20" cy="84" r="1.5"/>
        <circle class="solid" cx="36.667" cy="84" r="1.5"/>
        <circle class="solid" cx="53.333" cy="84" r="1.5"/>
        <circle class="solid" cx="70" cy="84" r="1.5"/>
        <circle class="solid" cx="86.667" cy="84" r="1.5"/>
        <circle class="solid" cx="103.333" cy="84" r="1.5"/>
        <circle class="solid" cx="120" cy="84" r="1.5"/>
        <circle class="walker w2" cx="70" cy="84" r="4" fill="#f3c977" transform="translate(50 0)"/>
        <path class="ink muted" d="M20 111H120"/>
        <circle class="solid" cx="20" cy="111" r="1.5"/>
        <circle class="solid" cx="36.667" cy="111" r="1.5"/>
        <circle class="solid" cx="53.333" cy="111" r="1.5"/>
        <circle class="solid" cx="70" cy="111" r="1.5"/>
        <circle class="solid" cx="86.667" cy="111" r="1.5"/>
        <circle class="solid" cx="103.333" cy="111" r="1.5"/>
        <circle class="solid" cx="120" cy="111" r="1.5"/>
        <circle class="walker w3" cx="70" cy="111" r="4" fill="#77c9ef" transform="translate(-50 0)"/>
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

if (!customElements.get("concept-absorbing-random-walk")) {
  customElements.define("concept-absorbing-random-walk", ConceptAbsorbingRandomWalk);
}
