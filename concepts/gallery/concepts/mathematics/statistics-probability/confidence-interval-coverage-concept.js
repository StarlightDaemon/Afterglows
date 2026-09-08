// Confidence Interval Coverage. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptConfidenceIntervalCoverage extends HTMLElement {
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
        .i0 {
          transform-origin:66.5px 20px;
          animation:interval0 9s ease-out infinite
        }
        @keyframes interval0 {
          0%,0% {
            opacity:0;
            transform:scaleX(0)
          }
          8%,91% {
            opacity:1;
            transform:scaleX(1)
          }
          100% {
            opacity:0
          }
        }
        .i1 {
          transform-origin:76.5px 32px;
          animation:interval1 9s ease-out infinite
        }
        @keyframes interval1 {
          0%,8% {
            opacity:0;
            transform:scaleX(0)
          }
          16%,91% {
            opacity:1;
            transform:scaleX(1)
          }
          100% {
            opacity:0
          }
        }
        .i2 {
          transform-origin:39.5px 44px;
          animation:interval2 9s ease-out infinite
        }
        @keyframes interval2 {
          0%,16% {
            opacity:0;
            transform:scaleX(0)
          }
          24%,91% {
            opacity:1;
            transform:scaleX(1)
          }
          100% {
            opacity:0
          }
        }
        .i3 {
          transform-origin:56px 56px;
          animation:interval3 9s ease-out infinite
        }
        @keyframes interval3 {
          0%,24% {
            opacity:0;
            transform:scaleX(0)
          }
          32%,91% {
            opacity:1;
            transform:scaleX(1)
          }
          100% {
            opacity:0
          }
        }
        .i4 {
          transform-origin:85.5px 68px;
          animation:interval4 9s ease-out infinite
        }
        @keyframes interval4 {
          0%,32% {
            opacity:0;
            transform:scaleX(0)
          }
          40%,91% {
            opacity:1;
            transform:scaleX(1)
          }
          100% {
            opacity:0
          }
        }
        .i5 {
          transform-origin:66.5px 80px;
          animation:interval5 9s ease-out infinite
        }
        @keyframes interval5 {
          0%,40% {
            opacity:0;
            transform:scaleX(0)
          }
          48%,91% {
            opacity:1;
            transform:scaleX(1)
          }
          100% {
            opacity:0
          }
        }
        .i6 {
          transform-origin:98.5px 92px;
          animation:interval6 9s ease-out infinite
        }
        @keyframes interval6 {
          0%,48% {
            opacity:0;
            transform:scaleX(0)
          }
          56%,91% {
            opacity:1;
            transform:scaleX(1)
          }
          100% {
            opacity:0
          }
        }
        .i7 {
          transform-origin:67px 104px;
          animation:interval7 9s ease-out infinite
        }
        @keyframes interval7 {
          0%,56% {
            opacity:0;
            transform:scaleX(0)
          }
          64%,91% {
            opacity:1;
            transform:scaleX(1)
          }
          100% {
            opacity:0
          }
        }
        .i8 {
          transform-origin:75px 116px;
          animation:interval8 9s ease-out infinite
        }
        @keyframes interval8 {
          0%,64% {
            opacity:0;
            transform:scaleX(0)
          }
          72%,91% {
            opacity:1;
            transform:scaleX(1)
          }
          100% {
            opacity:0
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Confidence Interval Coverage">
        <path d="M70 12V128" stroke="#f3c977" stroke-width="2" stroke-dasharray="4 3"/>
        <g class="interval i0" stroke="#70edb1" fill="#70edb1">
          <path d="M42 20H91M42 17V23M91 17V23" stroke-width="2"/>
          <circle cx="66.5" cy="20" r="2.5"/>
        </g>
        <g class="interval i1" stroke="#70edb1" fill="#70edb1">
          <path d="M49 32H104M49 29V35M104 29V35" stroke-width="2"/>
          <circle cx="76.5" cy="32" r="2.5"/>
        </g>
        <g class="interval i2" stroke="#ed8eab" fill="#ed8eab">
          <path d="M21 44H58M21 41V47M58 41V47" stroke-width="2"/>
          <circle cx="39.5" cy="44" r="2.5"/>
        </g>
        <g class="interval i3" stroke="#70edb1" fill="#70edb1">
          <path d="M31 56H81M31 53V59M81 53V59" stroke-width="2"/>
          <circle cx="56" cy="56" r="2.5"/>
        </g>
        <g class="interval i4" stroke="#70edb1" fill="#70edb1">
          <path d="M60 68H111M60 65V71M111 65V71" stroke-width="2"/>
          <circle cx="85.5" cy="68" r="2.5"/>
        </g>
        <g class="interval i5" stroke="#70edb1" fill="#70edb1">
          <path d="M46 80H87M46 77V83M87 77V83" stroke-width="2"/>
          <circle cx="66.5" cy="80" r="2.5"/>
        </g>
        <g class="interval i6" stroke="#ed8eab" fill="#ed8eab">
          <path d="M77 92H120M77 89V95M120 89V95" stroke-width="2"/>
          <circle cx="98.5" cy="92" r="2.5"/>
        </g>
        <g class="interval i7" stroke="#70edb1" fill="#70edb1">
          <path d="M38 104H96M38 101V107M96 101V107" stroke-width="2"/>
          <circle cx="67" cy="104" r="2.5"/>
        </g>
        <g class="interval i8" stroke="#70edb1" fill="#70edb1">
          <path d="M50 116H100M50 113V119M100 113V119" stroke-width="2"/>
          <circle cx="75" cy="116" r="2.5"/>
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

if (!customElements.get("concept-confidence-interval-coverage")) {
  customElements.define("concept-confidence-interval-coverage", ConceptConfidenceIntervalCoverage);
}
