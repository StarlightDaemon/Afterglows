// Angiosperm Double Fertilization. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAngiospermDoubleFertilization extends HTMLElement {
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
        .sac {
          fill:none;
          stroke:#71917a;
          stroke-width:2
        }
        .tube {
          fill:none;
          stroke:#afc190;
          stroke-width:15;
          stroke-linecap:round
        }
        .lumen {
          fill:none;
          stroke:#364b32;
          stroke-width:11;
          stroke-linecap:round
        }
        .central {
          fill:#193f32;
          stroke:#638d71;
          stroke-width:1.5
        }
        .egg {
          fill:#304a37;
          stroke:#a4be8c;
          stroke-width:1.5
        }
        .maternal {
          fill:#77c9ef
        }
        .egg-nucleus {
          animation:maternal 14s linear infinite
        }
        .polar {
          animation:maternal 14s linear infinite
        }
        .p1 {
          animation:maternal 14s linear infinite,p1 14s linear infinite
        }
        .p2 {
          animation:maternal 14s linear infinite,p2 14s linear infinite
        }
        .sperm {
          opacity:0
        }
        .s1 {
          animation:s1 14s linear infinite
        }
        .s2 {
          animation:s2 14s linear infinite
        }
        .sperm-membrane {
          fill:#493f2a;
          stroke:#e6c37c;
          stroke-width:1;
          animation:membrane 14s linear infinite
        }
        .paternal {
          fill:#f3c977
        }
        .fusion {
          fill:none;
          stroke:#efd799;
          stroke-width:2;
          opacity:0
        }
        .f1 {
          animation:f1 14s linear infinite
        }
        .f2 {
          animation:f2 14s linear infinite
        }
        .products {
          animation:products 14s linear infinite
        }
        .product-shell {
          fill:#304c47;
          stroke:#b7d0ab;
          stroke-width:1
        }
        .maternal-bar {
          stroke:#77c9ef;
          stroke-width:2.5
        }
        .paternal-bar {
          stroke:#f3c977;
          stroke-width:2.5
        }
        @keyframes s1 {
          0%,10% {
            opacity:1;
            transform:translate(35px,90px)
          }
          20% {
            opacity:1;
            transform:translate(46px,89px)
          }
          43% {
            opacity:1;
            transform:translate(52px,94px)
          }
          53% {
            opacity:1;
            transform:translate(56px,95px)
          }
          67% {
            opacity:1;
            transform:translate(62px,95px)
          }
          70%,100% {
            opacity:0;
            transform:translate(62px,95px)
          }
        }
        @keyframes s2 {
          0%,25% {
            opacity:1;
            transform:translate(24px,91.1px)
          }
          43% {
            opacity:1;
            transform:translate(46px,89px)
          }
          50% {
            opacity:1;
            transform:translate(76px,75px)
          }
          55% {
            opacity:1;
            transform:translate(82px,70px)
          }
          67% {
            opacity:1;
            transform:translate(94px,64px)
          }
          70%,100% {
            opacity:0;
            transform:translate(94px,64px)
          }
        }
        .s2 .sperm-membrane {
          animation:second-membrane 14s linear infinite
        }
        @keyframes second-membrane {
          0%,50% {
            opacity:1
          }
          59%,100% {
            opacity:0
          }
        }
        @keyframes membrane {
          0%,47% {
            opacity:1
          }
          56%,100% {
            opacity:0
          }
        }
        @keyframes f1 {
          0%,37%,58%,100% {
            opacity:0
          }
          43%,50% {
            opacity:1
          }
        }
        @keyframes f2 {
          0%,45%,64%,100% {
            opacity:0
          }
          50%,57% {
            opacity:1
          }
        }
        @keyframes maternal {
          0%,62% {
            opacity:1
          }
          70%,100% {
            opacity:0
          }
        }
        @keyframes p1 {
          0%,54% {
            transform:translate(0,0)
          }
          70%,100% {
            transform:translate(5px,3px)
          }
        }
        @keyframes p2 {
          0%,54% {
            transform:translate(0,0)
          }
          70%,100% {
            transform:translate(-4px,-1px)
          }
        }
        @keyframes products {
          0%,65% {
            opacity:0
          }
          73%,100% {
            opacity:1
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .maternal {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Angiosperm Double Fertilization">
        <path class="sac" d="M41.761,97.5A43,49 0 1 0 36.164,77.271"/>
        <path class="tube" d="M15,92L45,89"/>
        <path class="lumen" d="M15,92L45,89"/>
        <ellipse class="central" cx="94" cy="64" rx="20" ry="26"/>
        <circle class="egg" cx="62" cy="94" r="11"/>
        <circle class="maternal egg-nucleus" cx="62" cy="95" r="4.5"/>
        <circle class="maternal polar p1" cx="87" cy="61" r="4"/>
        <circle class="maternal polar p2" cx="100" cy="65" r="4"/>
        <g class="sperm s1">
          <circle class="sperm-membrane" r="3"/>
          <circle class="paternal" r="1.5"/>
        </g>
        <g class="sperm s2">
          <circle class="sperm-membrane" r="3"/>
          <circle class="paternal" r="1.5"/>
        </g>
        <circle class="fusion f1" cx="51.3" cy="92" r="3"/>
        <circle class="fusion f2" cx="76" cy="75" r="3"/>
        <g class="products">
          <circle class="product-shell" cx="62" cy="95" r="6.5"/>
          <path class="maternal-bar" d="M59.5,92V98"/>
          <path class="paternal-bar" d="M64.5,92V98"/>
          <circle class="product-shell" cx="94" cy="64" r="8"/>
          <path class="maternal-bar" d="M90,61V67M94,61V67"/>
          <path class="paternal-bar" d="M98,61V67"/>
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

if (!customElements.get("concept-angiosperm-double-fertilization")) {
  customElements.define("concept-angiosperm-double-fertilization", ConceptAngiospermDoubleFertilization);
}
