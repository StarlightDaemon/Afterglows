// ATP Synthase Rotary Catalysis. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAtpSynthaseRotaryCatalysis extends HTMLElement {
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
        .membrane {
          fill:#1c3830
        }
        .rotor {
          fill:#345842
        }
        .shaft {
          stroke-width:5;
          stroke:#7eb69a
        }
        .shaft-mark {
          fill:none;
          stroke:#eac175;
          stroke-width:2
        }
        .stator {
          stroke-width:4;
          stroke:#566f81
        }
        .cam {
          fill:#eac175;
          transform-origin:70px 90px;
          animation:turn 12s linear infinite
        }
        .rotor-marker {
          fill:#eac175;
          animation:orbit 12s linear infinite;
          transform:translate(86px,61px)
        }
        .proton {
          fill:#ed8eab
        }
        .in {
          animation:proton-in 4s linear infinite
        }
        .out {
          animation:proton-out 4s linear infinite
        }
        .pocket {
          fill:#385b48;
          stroke:#83be93;
          stroke-width:1.5
        }
        .lip {
          stroke:#bbd5ab;
          fill:none;
          stroke-width:2;
          animation:lip 12s linear infinite
        }
        .reagents {
          fill:#eac175;
          animation:reagents 12s linear infinite
        }
        .product {
          fill:#eac175;
          opacity:0;
          animation:product 12s linear infinite
        }
        .s1 * {
          animation-delay:-4s
        }
        .s2 * {
          animation-delay:-8s
        }
        .f1-body {
          fill:#243d31;
          stroke:#62866e;
          stroke-width:1.2
        }
        .shaft-mark {
          animation:shaft-mark 12s linear infinite
        }
        @keyframes shaft-mark {
          0% {
            d:path('M67,72L73,77L67,83L73,89')
          }
          2% {
            d:path('M67,72L73,77L67,83L73,89')
          }
          4% {
            d:path('M67,72L73,77L67,83L73,89')
          }
          6% {
            d:path('M67,72L73,77L67,83L73,89')
          }
          8% {
            d:path('M67,72L73,77L67,83L73,89')
          }
          10% {
            d:path('M67,72L73,77L67,83L73,89')
          }
          12% {
            d:path('M67,72L73,77L67,83L73,89')
          }
          14% {
            d:path('M67,72L73,77L67,83L73,89')
          }
          16% {
            d:path('M67,72L73,77L67,83L73,89')
          }
          18% {
            d:path('M67,72L73,77L67,83L73,89')
          }
          20% {
            d:path('M67,72L73,77L67,83L73,89')
          }
          22% {
            d:path('M67,72L73,77L67,83L73,89')
          }
          24% {
            d:path('M67.215,72L72.785,77L67.215,83L72.785,89')
          }
          26% {
            d:path('M67.829,72L72.171,77L67.829,83L72.171,89')
          }
          28% {
            d:path('M68.754,72L71.246,77L68.754,83L71.246,89')
          }
          30% {
            d:path('M69.857,72L70.143,77L69.857,83L70.143,89')
          }
          32% {
            d:path('M70.981,72L69.019,77L70.981,83L69.019,89')
          }
          34% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          36% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          38% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          40% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          42% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          44% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          46% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          48% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          50% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          52% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          54% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          56% {
            d:path('M71.817,72L68.183,77L71.817,83L68.183,89')
          }
          58% {
            d:path('M72.574,72L67.426,77L72.574,83L67.426,89')
          }
          60% {
            d:path('M72.962,72L67.038,77L72.962,83L67.038,89')
          }
          62% {
            d:path('M72.926,72L67.074,77L72.926,83L67.074,89')
          }
          64% {
            d:path('M72.471,72L67.529,77L72.471,83L67.529,89')
          }
          66% {
            d:path('M71.662,72L68.338,77L71.662,83L68.338,89')
          }
          68% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          70% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          72% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          74% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          76% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          78% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          80% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          82% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          84% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          86% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          88% {
            d:path('M71.5,72L68.5,77L71.5,83L68.5,89')
          }
          90% {
            d:path('M70.799,72L69.201,77L70.799,83L69.201,89')
          }
          92% {
            d:path('M69.667,72L70.333,77L69.667,83L70.333,89')
          }
          94% {
            d:path('M68.583,72L71.417,77L68.583,83L71.417,89')
          }
          96% {
            d:path('M67.702,72L72.298,77L67.702,83L72.298,89')
          }
          98% {
            d:path('M67.15,72L72.85,77L67.15,83L72.85,89')
          }
          100% {
            d:path('M67,72L73,77L67,83L73,89')
          }
        }
        @keyframes turn {
          0%,22% {
            transform:rotate(0deg)
          }
          33%,55% {
            transform:rotate(120deg)
          }
          66%,88% {
            transform:rotate(240deg)
          }
          99%,100% {
            transform:rotate(360deg)
          }
        }
        @keyframes lip {
          0%,20%,80%,100% {
            d:path("M-9,-5Q0,8 9,-5")
          }
          35%,65% {
            d:path("M-9,-5Q0,-1 9,-5")
          }
        }
        @keyframes reagents {
          0% {
            opacity:0;
            transform:translateY(-16px)
          }
          15% {
            opacity:1;
            transform:translateY(-10px)
          }
          30%,48% {
            opacity:1;
            transform:translateY(0)
          }
          55%,100% {
            opacity:0;
            transform:translateY(0)
          }
        }
        @keyframes product {
          0%,54% {
            opacity:0;
            transform:translateY(0)
          }
          58%,75% {
            opacity:1;
            transform:translateY(0)
          }
          94% {
            opacity:1;
            transform:translateY(17px)
          }
          100% {
            opacity:0;
            transform:translateY(20px)
          }
        }
        @keyframes proton-in {
          0% {
            opacity:0;
            transform:translate(50px,28px)
          }
          10% {
            opacity:1;
            transform:translate(50px,28px)
          }
          60% {
            opacity:1;
            transform:translate(50px,53px)
          }
          74% {
            opacity:1;
            transform:translate(54px,58px)
          }
          85%,100% {
            opacity:0;
            transform:translate(54px,58px)
          }
        }
        @keyframes proton-out {
          0%,60% {
            opacity:0;
            transform:translate(86px,64px)
          }
          70% {
            opacity:1;
            transform:translate(86px,64px)
          }
          90% {
            opacity:1;
            transform:translate(91px,78px)
          }
          100% {
            opacity:0;
            transform:translate(91px,82px)
          }
        }
        @keyframes orbit {
          0% {
            transform:translate(86px,61px)
          }
          2% {
            transform:translate(86px,61px)
          }
          4% {
            transform:translate(86px,61px)
          }
          6% {
            transform:translate(86px,61px)
          }
          8% {
            transform:translate(86px,61px)
          }
          10% {
            transform:translate(86px,61px)
          }
          12% {
            transform:translate(86px,61px)
          }
          14% {
            transform:translate(86px,61px)
          }
          16% {
            transform:translate(86px,61px)
          }
          18% {
            transform:translate(86px,61px)
          }
          20% {
            transform:translate(86px,61px)
          }
          22% {
            transform:translate(86px,61px)
          }
          24% {
            transform:translate(84.854px,63.973px)
          }
          26% {
            transform:translate(81.58px,66.521px)
          }
          28% {
            transform:translate(76.647px,68.277px)
          }
          30% {
            transform:translate(70.761px,68.991px)
          }
          32% {
            transform:translate(64.767px,68.56px)
          }
          34% {
            transform:translate(62px,67.928px)
          }
          36% {
            transform:translate(62px,67.928px)
          }
          38% {
            transform:translate(62px,67.928px)
          }
          40% {
            transform:translate(62px,67.928px)
          }
          42% {
            transform:translate(62px,67.928px)
          }
          44% {
            transform:translate(62px,67.928px)
          }
          46% {
            transform:translate(62px,67.928px)
          }
          48% {
            transform:translate(62px,67.928px)
          }
          50% {
            transform:translate(62px,67.928px)
          }
          52% {
            transform:translate(62px,67.928px)
          }
          54% {
            transform:translate(62px,67.928px)
          }
          56% {
            transform:translate(60.309px,67.366px)
          }
          58% {
            transform:translate(56.272px,65.109px)
          }
          60% {
            transform:translate(54.201px,62.264px)
          }
          62% {
            transform:translate(54.393px,59.237px)
          }
          64% {
            transform:translate(56.822px,56.463px)
          }
          66% {
            transform:translate(61.138px,54.339px)
          }
          68% {
            transform:translate(62.0px,54.072px)
          }
          70% {
            transform:translate(62.0px,54.072px)
          }
          72% {
            transform:translate(62.0px,54.072px)
          }
          74% {
            transform:translate(62.0px,54.072px)
          }
          76% {
            transform:translate(62.0px,54.072px)
          }
          78% {
            transform:translate(62.0px,54.072px)
          }
          80% {
            transform:translate(62.0px,54.072px)
          }
          82% {
            transform:translate(62.0px,54.072px)
          }
          84% {
            transform:translate(62.0px,54.072px)
          }
          86% {
            transform:translate(62.0px,54.072px)
          }
          88% {
            transform:translate(62.0px,54.072px)
          }
          90% {
            transform:translate(65.738px,53.289px)
          }
          92% {
            transform:translate(71.775px,53.049px)
          }
          94% {
            transform:translate(77.558px,53.949px)
          }
          96% {
            transform:translate(82.258px,55.858px)
          }
          98% {
            transform:translate(85.202px,58.505px)
          }
          100% {
            transform:translate(86px,61px)
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .proton {
            opacity:0
          }
          .s0 .reagents,.s2 .reagents {
            opacity:0
          }
          .s0 .product {
            opacity:1
          }
          .s1 .lip {
            d:path("M-9,-5Q0,-1 9,-5")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="ATP Synthase Rotary Catalysis">
        <path class="membrane" d="M12,52H128V70H12Z"/>
        <path class="ink muted" d="M12,52H128M12,70H128"/>
        <path class="stator ink" d="M103,61V103Q103,114 93,114H80"/>
        <ellipse class="rotor ink" cx="70" cy="61" rx="16" ry="8"/>
        <ellipse class="f1-body" cx="70" cy="105" rx="39" ry="22"/>
        <path class="shaft ink" d="M70,69V93"/>
        <path class="shaft-mark" d="M67,72L73,77L67,83L73,89"/>
        <g class="cam">
          <path d="M70,82L79,95L61,95Z"/>
        </g>
        <path class="channel ink muted" d="M50,28V53Q50,58 54,58M86,64Q91,64 91,80"/>
        <circle class="proton in" r="2.5"/>
        <circle class="proton out" r="2.5"/>
        <circle class="rotor-marker" r="2.5"/>
        <g class="site s0" transform="translate(45 104)">
          <ellipse class="pocket" cx="0" cy="0" rx="12" ry="9"/>
          <path class="lip" d="M-9,-5Q0,8 9,-5"/>
          <g class="reagents">
            <circle cx="-6" cy="-4" r="2"/>
            <circle cx="-2" cy="-4" r="2"/>
            <circle cx="6" cy="-4" r="2"/>
          </g>
          <g class="product">
            <circle cx="-4" cy="-4" r="2"/>
            <circle cx="0" cy="-4" r="2"/>
            <circle cx="4" cy="-4" r="2"/>
          </g>
        </g>
        <g class="site s1" transform="translate(70 112)">
          <ellipse class="pocket" cx="0" cy="0" rx="12" ry="9"/>
          <path class="lip" d="M-9,-5Q0,8 9,-5"/>
          <g class="reagents">
            <circle cx="-6" cy="-4" r="2"/>
            <circle cx="-2" cy="-4" r="2"/>
            <circle cx="6" cy="-4" r="2"/>
          </g>
          <g class="product">
            <circle cx="-4" cy="-4" r="2"/>
            <circle cx="0" cy="-4" r="2"/>
            <circle cx="4" cy="-4" r="2"/>
          </g>
        </g>
        <g class="site s2" transform="translate(94 102)">
          <ellipse class="pocket" cx="0" cy="0" rx="12" ry="9"/>
          <path class="lip" d="M-9,-5Q0,8 9,-5"/>
          <g class="reagents">
            <circle cx="-6" cy="-4" r="2"/>
            <circle cx="-2" cy="-4" r="2"/>
            <circle cx="6" cy="-4" r="2"/>
          </g>
          <g class="product">
            <circle cx="-4" cy="-4" r="2"/>
            <circle cx="0" cy="-4" r="2"/>
            <circle cx="4" cy="-4" r="2"/>
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

if (!customElements.get("concept-atp-synthase-rotary-catalysis")) {
  customElements.define("concept-atp-synthase-rotary-catalysis", ConceptAtpSynthaseRotaryCatalysis);
}
