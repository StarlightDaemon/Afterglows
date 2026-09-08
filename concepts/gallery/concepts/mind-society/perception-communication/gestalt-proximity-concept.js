// Gestalt Proximity. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptGestaltProximity extends HTMLElement {
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
          animation:p0 9s ease-in-out infinite
        }
        @keyframes p0 {
          0%,25%,90%,100% {
            cx:25;
            cy:49
          }
          40%,75% {
            cx:49;
            cy:25
          }
        }
        .p1 {
          animation:p1 9s ease-in-out infinite
        }
        @keyframes p1 {
          0%,25%,90%,100% {
            cx:55;
            cy:49
          }
          40%,75% {
            cx:63;
            cy:25
          }
        }
        .p2 {
          animation:p2 9s ease-in-out infinite
        }
        @keyframes p2 {
          0%,25%,90%,100% {
            cx:85;
            cy:49
          }
          40%,75% {
            cx:77;
            cy:25
          }
        }
        .p3 {
          animation:p3 9s ease-in-out infinite
        }
        @keyframes p3 {
          0%,25%,90%,100% {
            cx:115;
            cy:49
          }
          40%,75% {
            cx:91;
            cy:25
          }
        }
        .p4 {
          animation:p4 9s ease-in-out infinite
        }
        @keyframes p4 {
          0%,25%,90%,100% {
            cx:25;
            cy:63
          }
          40%,75% {
            cx:49;
            cy:55
          }
        }
        .p5 {
          animation:p5 9s ease-in-out infinite
        }
        @keyframes p5 {
          0%,25%,90%,100% {
            cx:55;
            cy:63
          }
          40%,75% {
            cx:63;
            cy:55
          }
        }
        .p6 {
          animation:p6 9s ease-in-out infinite
        }
        @keyframes p6 {
          0%,25%,90%,100% {
            cx:85;
            cy:63
          }
          40%,75% {
            cx:77;
            cy:55
          }
        }
        .p7 {
          animation:p7 9s ease-in-out infinite
        }
        @keyframes p7 {
          0%,25%,90%,100% {
            cx:115;
            cy:63
          }
          40%,75% {
            cx:91;
            cy:55
          }
        }
        .p8 {
          animation:p8 9s ease-in-out infinite
        }
        @keyframes p8 {
          0%,25%,90%,100% {
            cx:25;
            cy:77
          }
          40%,75% {
            cx:49;
            cy:85
          }
        }
        .p9 {
          animation:p9 9s ease-in-out infinite
        }
        @keyframes p9 {
          0%,25%,90%,100% {
            cx:55;
            cy:77
          }
          40%,75% {
            cx:63;
            cy:85
          }
        }
        .p10 {
          animation:p10 9s ease-in-out infinite
        }
        @keyframes p10 {
          0%,25%,90%,100% {
            cx:85;
            cy:77
          }
          40%,75% {
            cx:77;
            cy:85
          }
        }
        .p11 {
          animation:p11 9s ease-in-out infinite
        }
        @keyframes p11 {
          0%,25%,90%,100% {
            cx:115;
            cy:77
          }
          40%,75% {
            cx:91;
            cy:85
          }
        }
        .p12 {
          animation:p12 9s ease-in-out infinite
        }
        @keyframes p12 {
          0%,25%,90%,100% {
            cx:25;
            cy:91
          }
          40%,75% {
            cx:49;
            cy:115
          }
        }
        .p13 {
          animation:p13 9s ease-in-out infinite
        }
        @keyframes p13 {
          0%,25%,90%,100% {
            cx:55;
            cy:91
          }
          40%,75% {
            cx:63;
            cy:115
          }
        }
        .p14 {
          animation:p14 9s ease-in-out infinite
        }
        @keyframes p14 {
          0%,25%,90%,100% {
            cx:85;
            cy:91
          }
          40%,75% {
            cx:77;
            cy:115
          }
        }
        .p15 {
          animation:p15 9s ease-in-out infinite
        }
        @keyframes p15 {
          0%,25%,90%,100% {
            cx:115;
            cy:91
          }
          40%,75% {
            cx:91;
            cy:115
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Gestalt Proximity">
        <circle class="solid p0" cx="25" cy="49" r="3.5"/>
        <circle class="solid p1" cx="55" cy="49" r="3.5"/>
        <circle class="solid p2" cx="85" cy="49" r="3.5"/>
        <circle class="solid p3" cx="115" cy="49" r="3.5"/>
        <circle class="solid p4" cx="25" cy="63" r="3.5"/>
        <circle class="solid p5" cx="55" cy="63" r="3.5"/>
        <circle class="solid p6" cx="85" cy="63" r="3.5"/>
        <circle class="solid p7" cx="115" cy="63" r="3.5"/>
        <circle class="solid p8" cx="25" cy="77" r="3.5"/>
        <circle class="solid p9" cx="55" cy="77" r="3.5"/>
        <circle class="solid p10" cx="85" cy="77" r="3.5"/>
        <circle class="solid p11" cx="115" cy="77" r="3.5"/>
        <circle class="solid p12" cx="25" cy="91" r="3.5"/>
        <circle class="solid p13" cx="55" cy="91" r="3.5"/>
        <circle class="solid p14" cx="85" cy="91" r="3.5"/>
        <circle class="solid p15" cx="115" cy="91" r="3.5"/>
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

if (!customElements.get("concept-gestalt-proximity")) {
  customElements.define("concept-gestalt-proximity", ConceptGestaltProximity);
}
