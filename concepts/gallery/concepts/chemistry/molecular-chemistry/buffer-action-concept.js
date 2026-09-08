// Buffer Action. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBufferAction extends HTMLElement {
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
        .solution {
          fill:#142e2c
        }
        .beaker {
          fill:none;
          stroke:#9bb8ad;
          stroke-width:1.8
        }
        .buffer {
          fill:#58836d;
          stroke:#a4bea6;
          stroke-width:1
        }
        .bond {
          fill:none;
          stroke:#bbcbb7;
          stroke-width:1
        }
        .h {
          fill:#e9eadf
        }
        .o {
          fill:#dd9b9f;
          stroke:#efc2b6;
          stroke-width:.5
        }
        .charge {
          fill:none;
          stroke:#e7dbb6;
          stroke-width:1.2
        }
        .acid-water {
          transform:translate(4px,47px);
          animation:acid-water 16s linear infinite
        }
        .acid-third-bond {
          opacity:0;
          animation:acid-third-bond 16s linear infinite
        }
        .hydronium-charge {
          opacity:0;
          animation:acid-bond 16s linear infinite
        }
        .new-acid-bond {
          animation:new-acid-bond 16s linear infinite
        }
        .target-minus {
          opacity:0;
          animation:target-minus 16s linear infinite
        }
        .transferred-acid {
          transform:translate(47px,47px);
          animation:transferred-acid 16s linear infinite
        }
        .base-water {
          transform:translate(3px,43px);
          animation:base-water 16s linear infinite
        }
        .hydroxide-charge {
          opacity:0;
          animation:hydroxide-charge 16s linear infinite
        }
        .old-acid-bond {
          opacity:0;
          animation:old-acid-bond 16s linear infinite
        }
        .base-minus {
          animation:base-minus 16s linear infinite
        }
        .transferred-base {
          transform:translate(107px,116px);
          animation:transferred-base 16s linear infinite
        }
        .new-water-bond {
          animation:new-water-bond 16s linear infinite
        }
        @keyframes acid-water {
          0%,12% {
            transform:translate(0,0)
          }
          25%,38% {
            transform:translate(5px,16px)
          }
          48%,100% {
            transform:translate(4px,47px)
          }
        }
        @keyframes acid-third-bond {
          0%,25% {
            opacity:1;
            d:path('M23,27L32,29')
          }
          38%,100% {
            opacity:0;
            d:path('M23,27L42,31')
          }
        }
        @keyframes acid-bond {
          0%,25% {
            opacity:1
          }
          38%,100% {
            opacity:0
          }
        }
        @keyframes transferred-acid {
          0%,12% {
            transform:translate(32px,29px)
          }
          25% {
            transform:translate(37px,45px)
          }
          38%,100% {
            transform:translate(47px,47px)
          }
        }
        @keyframes new-acid-bond {
          0%,25% {
            opacity:0;
            d:path('M47,52L37,45')
          }
          38%,100% {
            opacity:1;
            d:path('M47,52L47,47')
          }
        }
        @keyframes target-minus {
          0%,25% {
            opacity:1
          }
          38%,100% {
            opacity:0
          }
        }
        @keyframes base-water {
          0%,55% {
            transform:translate(3px,-48px)
          }
          67%,79% {
            transform:translate(0,0)
          }
          91%,100% {
            transform:translate(3px,43px)
          }
        }
        @keyframes hydroxide-charge {
          0%,67% {
            opacity:1
          }
          79%,100% {
            opacity:0
          }
        }
        @keyframes old-acid-bond {
          0%,67% {
            opacity:1;
            d:path('M97,88L97,83')
          }
          79%,100% {
            opacity:0;
            d:path('M97,88L104,73')
          }
        }
        @keyframes transferred-base {
          0%,67% {
            transform:translate(97px,83px)
          }
          79% {
            transform:translate(104px,73px)
          }
          91%,100% {
            transform:translate(107px,116px)
          }
        }
        @keyframes base-minus {
          0%,67% {
            opacity:0
          }
          79%,100% {
            opacity:1
          }
        }
        @keyframes new-water-bond {
          0%,67% {
            opacity:0;
            d:path('M112,69L97,83')
          }
          79%,100% {
            opacity:1;
            d:path('M112,69L104,73')
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Buffer Action">
        <path class="solution" d="M13,44H127V120H13Z"/>
        <path class="beaker" d="M12,38V121H128V38"/>
        <circle class="buffer" cx="47" cy="58" r="6"/>
        <path class="charge target-minus" d="M45,58H49"/>
        <circle class="buffer" cx="75" cy="58" r="6"/>
        <path class="bond" d="M75,52V47"/>
        <circle class="h" cx="75" cy="47" r="1.8"/>
        <circle class="buffer" cx="101" cy="58" r="6"/>
        <path class="charge " d="M99,58H103"/>
        <circle class="buffer" cx="47" cy="94" r="6"/>
        <path class="bond" d="M47,88V83"/>
        <circle class="h" cx="47" cy="83" r="1.8"/>
        <circle class="buffer" cx="73" cy="94" r="6"/>
        <path class="charge " d="M71,94H75"/>
        <circle class="buffer" cx="97" cy="94" r="6"/>
        <path class="bond new-acid-bond" d="M47,52V47"/>
        <path class="bond old-acid-bond" d="M97,88V83"/>
        <path class="charge base-minus" d="M95,94H99"/>
        <g class="acid-water">
          <path class="bond" d="M23,27V18M23,27L14,29"/>
          <path class="bond acid-third-bond" d="M23,27L32,29"/>
          <circle class="o" cx="23" cy="27" r="3.5"/>
          <circle class="h" cx="23" cy="18" r="1.8"/>
          <circle class="h" cx="14" cy="29" r="1.8"/>
          <path class="charge hydronium-charge" d="M29,21H33M31,19V23"/>
        </g>
        <circle class="h transferred-acid" r="1.8"/>
        <g class="base-water">
          <path class="bond" d="M112,69H120"/>
          <path class="bond new-water-bond" d="M112,69L104,73"/>
          <circle class="o" cx="112" cy="69" r="3.5"/>
          <circle class="h" cx="120" cy="69" r="1.8"/>
          <path class="charge hydroxide-charge" d="M112,61H116"/>
        </g>
        <circle class="h transferred-base" r="1.8"/>
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

if (!customElements.get("concept-buffer-action")) {
  customElements.define("concept-buffer-action", ConceptBufferAction);
}
