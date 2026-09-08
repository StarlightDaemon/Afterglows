// Bone Remodeling. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptBoneRemodeling extends HTMLElement {
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
        .old-bone {
          fill:#455d46;
          stroke:#8ca080;
          stroke-width:2;
          animation:excavate 12s infinite
        }
        .old-texture {
          fill:url(#mineral);
          animation:excavate 12s infinite
        }
        .matrix {
          fill:#b6a976;
          animation:matrix 12s linear infinite
        }
        .layer {
          stroke:#e3d59b;
          stroke-width:1
        }
        .mineralize {
          fill:#e3edd1
        }
        .clast {
          fill:#ad718d;
          stroke:#d8a2b3;
          stroke-width:1.4;
          opacity:0;
          animation:clast 12s infinite
        }
        .clast circle {
          fill:#68435e;
          stroke:none
        }
        .blast {
          fill:#79b9b2;
          stroke:#b7ded0;
          stroke-width:.8
        }
        .nucleus {
          fill:#3a6a68;
          stroke:none
        }
        @keyframes excavate {
          0%,8% {
            d:path("M14 64H45C53 64 60 64 70 64C80 64 87 64 95 64H126V119H14Z")
          }
          35%,100% {
            d:path("M14 64H45C52 64 48 94 70 95C92 94 88 64 95 64H126V119H14Z")
          }
        }
        @keyframes matrix {
          0%,54.9% {
            y:96px;
            height:0;
            opacity:0
          }
          55% {
            y:96px;
            height:0;
            opacity:1
          }
          85%,100% {
            y:64px;
            height:32px;
            opacity:1
          }
        }
        @keyframes clast {
          0%,8% {
            opacity:1;
            transform:translate(0,0)
          }
          35% {
            opacity:1;
            transform:translate(0,28px)
          }
          45% {
            opacity:1;
            transform:translate(-28px,-14px)
          }
          49%,100% {
            opacity:0;
            transform:translate(-28px,-14px)
          }
        }
        .l0 {
          animation:l0 12s infinite
        }
        @keyframes l0 {
          0%,59.9% {
            opacity:0
          }
          60%,100% {
            opacity:1
          }
        }
        .l1 {
          animation:l1 12s infinite
        }
        @keyframes l1 {
          0%,64.9% {
            opacity:0
          }
          65%,100% {
            opacity:1
          }
        }
        .l2 {
          animation:l2 12s infinite
        }
        @keyframes l2 {
          0%,69.9% {
            opacity:0
          }
          70%,100% {
            opacity:1
          }
        }
        .l3 {
          animation:l3 12s infinite
        }
        @keyframes l3 {
          0%,74.9% {
            opacity:0
          }
          75%,100% {
            opacity:1
          }
        }
        .l4 {
          animation:l4 12s infinite
        }
        @keyframes l4 {
          0%,79.9% {
            opacity:0
          }
          80%,100% {
            opacity:1
          }
        }
        .l5 {
          animation:l5 12s infinite
        }
        @keyframes l5 {
          0%,84.9% {
            opacity:0
          }
          85%,100% {
            opacity:1
          }
        }
        .m0 {
          animation:m0 12s infinite
        }
        @keyframes m0 {
          0%,71.9% {
            opacity:0
          }
          72%,100% {
            opacity:1
          }
        }
        .m1 {
          animation:m1 12s infinite
        }
        @keyframes m1 {
          0%,82.9% {
            opacity:0
          }
          83%,100% {
            opacity:1
          }
        }
        .m2 {
          animation:m2 12s infinite
        }
        @keyframes m2 {
          0%,93.9% {
            opacity:0
          }
          94%,100% {
            opacity:1
          }
        }
        .b0 {
          animation:b0 12s linear infinite
        }
        @keyframes b0 {
          0%,52% {
            opacity:0;
            transform:translate(12px,28px)
          }
          53%,55% {
            opacity:1;
            transform:translate(12px,28px)
          }
          85%,100% {
            opacity:1;
            transform:translate(0,0)
          }
        }
        .b1 {
          animation:b1 12s linear infinite
        }
        @keyframes b1 {
          0%,52% {
            opacity:0;
            transform:translate(6px,28px)
          }
          53%,55% {
            opacity:1;
            transform:translate(6px,28px)
          }
          85%,100% {
            opacity:1;
            transform:translate(0,0)
          }
        }
        .b2 {
          animation:b2 12s linear infinite
        }
        @keyframes b2 {
          0%,52% {
            opacity:0;
            transform:translate(0px,28px)
          }
          53%,55% {
            opacity:1;
            transform:translate(0px,28px)
          }
          85%,100% {
            opacity:1;
            transform:translate(0,0)
          }
        }
        .b3 {
          animation:b3 12s linear infinite
        }
        @keyframes b3 {
          0%,52% {
            opacity:0;
            transform:translate(-6px,28px)
          }
          53%,55% {
            opacity:1;
            transform:translate(-6px,28px)
          }
          85%,100% {
            opacity:1;
            transform:translate(0,0)
          }
        }
        .b4 {
          animation:b4 12s linear infinite
        }
        @keyframes b4 {
          0%,52% {
            opacity:0;
            transform:translate(-12px,28px)
          }
          53%,55% {
            opacity:1;
            transform:translate(-12px,28px)
          }
          85%,100% {
            opacity:1;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Bone Remodeling">
        <defs>
          <clipPath id="pit">
            <path d="M45 64C52 64 48 94 70 95C92 94 88 64 95 64Z"/>
          </clipPath>
          <pattern id="mineral" width="10" height="9" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="4" r="1" fill="#a5b599"/>
            <path d="M6 8h3" stroke="#54735c" stroke-width="1"/>
          </pattern>
        </defs>
        <path class="old-bone" d="M14 64H45C52 64 48 94 70 95C92 94 88 64 95 64H126V119H14Z"/>
        <path class="old-texture" d="M14 64H45C52 64 48 94 70 95C92 94 88 64 95 64H126V119H14Z"/>
        <g clip-path="url(#pit)">
          <rect class="matrix" x="44" y="64" width="53" height="33"/>
          <path class="layer l0" d="M46 90H94"/>
          <path class="layer l1" d="M46 85H94"/>
          <path class="layer l2" d="M46 80H94"/>
          <path class="layer l3" d="M46 75H94"/>
          <path class="layer l4" d="M46 70H94"/>
          <path class="layer l5" d="M46 65H94"/>
          <g class="mineralize m0">
            <circle cx="57" cy="89" r="1.2"/>
            <circle cx="65" cy="89" r="1.2"/>
            <circle cx="73" cy="89" r="1.2"/>
            <circle cx="81" cy="89" r="1.2"/>
          </g>
          <g class="mineralize m1">
            <circle cx="57" cy="79" r="1.2"/>
            <circle cx="65" cy="79" r="1.2"/>
            <circle cx="73" cy="79" r="1.2"/>
            <circle cx="81" cy="79" r="1.2"/>
          </g>
          <g class="mineralize m2">
            <circle cx="57" cy="68" r="1.2"/>
            <circle cx="65" cy="68" r="1.2"/>
            <circle cx="73" cy="68" r="1.2"/>
            <circle cx="81" cy="68" r="1.2"/>
          </g>
        </g>
        <g class="clast">
          <path d="M55 51Q59 43 64 47Q72 40 77 47Q86 44 87 53Q92 61 83 66L78 62L72 67L65 63L58 67Q48 61 55 51Z"/>
          <circle cx="61" cy="55" r="3"/>
          <circle cx="71" cy="52" r="3"/>
          <circle cx="81" cy="56" r="3"/>
        </g>
        <g class="blast b0">
          <circle cx="50" cy="60" r="3.5"/>
          <circle class="nucleus" cx="50" cy="60" r="1.3"/>
        </g>
        <g class="blast b1">
          <circle cx="60" cy="60" r="3.5"/>
          <circle class="nucleus" cx="60" cy="60" r="1.3"/>
        </g>
        <g class="blast b2">
          <circle cx="70" cy="60" r="3.5"/>
          <circle class="nucleus" cx="70" cy="60" r="1.3"/>
        </g>
        <g class="blast b3">
          <circle cx="80" cy="60" r="3.5"/>
          <circle class="nucleus" cx="80" cy="60" r="1.3"/>
        </g>
        <g class="blast b4">
          <circle cx="90" cy="60" r="3.5"/>
          <circle class="nucleus" cx="90" cy="60" r="1.3"/>
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

if (!customElements.get("concept-bone-remodeling")) {
  customElements.define("concept-bone-remodeling", ConceptBoneRemodeling);
}
