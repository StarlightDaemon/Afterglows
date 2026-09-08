// Extrusion Blow Molding. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptExtrusionBlowMolding extends HTMLElement {
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
        .cycle {
          animation:cycle 18s linear infinite
        }
        .head {
          fill:#37594b;
          stroke:#8aaa9b;
          stroke-width:1
        }
        .tool {
          fill:#233e34;
          stroke:#719786;
          stroke-width:1
        }
        .left {
          transform:translateX(-18px);
          animation:left 18s linear infinite
        }
        .right {
          transform:translateX(18px);
          animation:right 18s linear infinite
        }
        .tube {
          fill:#e5b273;
          opacity:0;
          animation:tube 18s linear infinite
        }
        .stub {
          animation:stub 18s linear infinite
        }
        .bottle {
          fill:#77c9ef;
          stroke:#77c9ef;
          stroke-width:.35;
          animation:bottle 18s linear infinite,appearance 18s linear infinite
        }
        .flash {
          fill:#77c9ef;
          animation:appearance 18s linear infinite
        }
        .pin {
          fill:none;
          stroke:#b0c5bd;
          stroke-width:1.5;
          transform:translateY(-10px);
          animation:pin 18s linear infinite
        }
        .air {
          fill:none;
          stroke:#a7e0f0;
          stroke-width:1.2;
          stroke-dasharray:3 3;
          opacity:0;
          animation:air 18s linear infinite,flow 1s linear infinite
        }
        .cut {
          fill:none;
          stroke:#ed8eab;
          stroke-width:1.2;
          opacity:0;
          animation:cut 18s linear infinite
        }
        @keyframes left {
          0%,20% {
            transform:translateX(-18px)
          }
          30%,82% {
            transform:translateX(0)
          }
          90%,100% {
            transform:translateX(-18px)
          }
        }
        @keyframes right {
          0%,20% {
            transform:translateX(18px)
          }
          30%,82% {
            transform:translateX(0)
          }
          90%,100% {
            transform:translateX(18px)
          }
        }
        @keyframes tube {
          0% {
            opacity:1;
            d:path('M61,30H64V30H61ZM76,30H79V30H76Z')
          }
          20%,24% {
            opacity:1;
            d:path('M61,30H64V116H61ZM76,30H79V116H76Z')
          }
          30%,100% {
            opacity:0;
            d:path('M61,30H64V116H61ZM76,30H79V116H76Z')
          }
        }
        @keyframes stub {
          0%,29% {
            opacity:0
          }
          30%,100% {
            opacity:1
          }
        }
        @keyframes bottle {
          0%,30% {
            d:path('M61,40V53Q61,58 61,65V98Q61,108 65,108H75Q79,108 79,98V65Q79,58 79,53V40ZM64,40V53Q64,58 64,65V98Q64,105 67,105H73Q76,105 76,98V65Q76,58 76,53V40Z')
          }
          58%,100% {
            d:path('M61,40V53Q61,58 48,65V98Q48,108 58,108H82Q92,108 92,98V65Q79,58 79,53V40ZM64,40V53Q64,59 49.4,65.7V97.7Q49.4,106.5 58,106.5H82Q90.6,106.5 90.6,97.7V65.7Q76,59 76,53V40Z')
          }
        }
        @keyframes appearance {
          0%,24% {
            opacity:0;
            fill:#e5b273;
            stroke:#e5b273
          }
          30%,58% {
            opacity:1;
            fill:#e5b273;
            stroke:#e5b273
          }
          74%,100% {
            opacity:1;
            fill:#77c9ef;
            stroke:#77c9ef
          }
        }
        @keyframes pin {
          0%,74% {
            transform:translateY(0)
          }
          82%,100% {
            transform:translateY(-10px)
          }
        }
        @keyframes air {
          0%,30%,74%,100% {
            opacity:0
          }
          32%,70% {
            opacity:.9
          }
        }
        @keyframes flow {
          to {
            stroke-dashoffset:-12
          }
        }
        @keyframes cut {
          0%,29%,35%,100% {
            opacity:0
          }
          30%,33% {
            opacity:1
          }
        }
        @keyframes cycle {
          0%,3%,98%,100% {
            opacity:0
          }
          6%,96% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Extrusion Blow Molding">
        <g class="cycle">
          <path class="head" fill-rule="evenodd" d="M56,14H84V30H56ZM61,14H79V30H61Z"/>
          <path class="stub warm" d="M61,30H64V39H61ZM76,30H79V39H76Z"/>
          <path class="tube" d="M61,30H64V116H61ZM76,30H79V116H76Z"/>
          <g class="left">
            <path class="tool" d="M28,38H61V53Q61,58 48,65V98Q48,108 58,108H67V114H28Z"/>
          </g>
          <g class="right">
            <path class="tool" d="M79,38H112V114H73V108H82Q92,108 92,98V65Q79,58 79,53Z"/>
          </g>
          <path class="bottle" fill-rule="evenodd" d="M61,40V53Q61,58 48,65V98Q48,108 58,108H82Q92,108 92,98V65Q79,58 79,53V40ZM64,40V53Q64,59 49.4,65.7V97.7Q49.4,106.5 58,106.5H82Q90.6,106.5 90.6,97.7V65.7Q76,59 76,53V40Z"/>
          <path class="flash" d="M67,108H73V116H67Z"/>
          <path class="pin" d="M67,14V44H73V14"/>
          <path class="air" d="M70,44V85M67,80L70,85L73,80"/>
          <path class="cut" d="M58,40H65M75,40H82"/>
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

if (!customElements.get("concept-extrusion-blow-molding")) {
  customElements.define("concept-extrusion-blow-molding", ConceptExtrusionBlowMolding);
}
