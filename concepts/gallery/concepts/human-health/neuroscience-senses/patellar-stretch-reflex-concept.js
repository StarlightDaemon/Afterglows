// Patellar Stretch Reflex. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptPatellarStretchReflex extends HTMLElement {
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
        .cord {
          fill:#35444c;
          stroke:#8ba6ab;
          stroke-width:1.5
        }
        .gray {
          fill:#a5829f
        }
        .afferent,.motor {
          fill:none;
          stroke:#7eab9a;
          stroke-width:1.3
        }
        .bone {
          fill:none;
          stroke:#b9c3a1;
          stroke-width:6;
          stroke-linecap:round
        }
        .quad {
          fill:#895b72;
          stroke:#bf8da3;
          stroke-width:1;
          animation:quad 9s infinite
        }
        .spindle {
          fill:#e1be7c;
          stroke:#8a703e;
          stroke-width:1;
          animation:stretch 9s infinite;
          transform-origin:61px 69px
        }
        .shin {
          transform-origin:92px 84px;
          animation:kick 9s linear infinite
        }
        .tendon {
          animation:tendon 9s linear infinite;
          fill:none;
          stroke:#c6a59e;
          stroke-width:3
        }
        .joint,.patella {
          fill:#26382e;
          stroke:#c4c9a8;
          stroke-width:1.5
        }
        .hammer {
          stroke:#d7c482;
          fill:#9a8995;
          stroke-width:3;
          transform-origin:128px 77px;
          animation:tap 9s infinite
        }
        .sensory,.return {
          opacity:0
        }
        .sensory {
          animation:sensory 9s linear infinite
        }
        .return {
          animation:return 9s linear infinite
        }
        @keyframes tap {
          0%,7%,25%,100% {
            transform:rotate(45deg)
          }
          13%,17% {
            transform:rotate(0)
          }
        }
        @keyframes stretch {
          0%,12%,28%,100% {
            transform:scaleX(1)
          }
          18% {
            transform:scaleX(1.2)
          }
        }
        @keyframes sensory {
          0%,19% {
            opacity:0;
            transform:translate(0,0)
          }
          20% {
            opacity:1;
            transform:translate(0,0)
          }
          28% {
            transform:translate(0,-28px)
          }
          35% {
            opacity:1;
            transform:translate(-23px,-44px)
          }
          36%,100% {
            opacity:0
          }
        }
        @keyframes return {
          0%,37% {
            opacity:0;
            transform:translate(0,0)
          }
          38% {
            opacity:1;
            transform:translate(0,0)
          }
          49% {
            opacity:1;
            transform:translate(16px,35px)
          }
          50%,100% {
            opacity:0
          }
        }
        @keyframes kick {
          0% {
            transform:rotate(0deg)
          }
          1% {
            transform:rotate(0deg)
          }
          2% {
            transform:rotate(0deg)
          }
          3% {
            transform:rotate(0deg)
          }
          4% {
            transform:rotate(0deg)
          }
          5% {
            transform:rotate(0deg)
          }
          6% {
            transform:rotate(0deg)
          }
          7% {
            transform:rotate(0deg)
          }
          8% {
            transform:rotate(0deg)
          }
          9% {
            transform:rotate(0deg)
          }
          10% {
            transform:rotate(0deg)
          }
          11% {
            transform:rotate(0deg)
          }
          12% {
            transform:rotate(0deg)
          }
          13% {
            transform:rotate(0deg)
          }
          14% {
            transform:rotate(0deg)
          }
          15% {
            transform:rotate(0deg)
          }
          16% {
            transform:rotate(0deg)
          }
          17% {
            transform:rotate(0deg)
          }
          18% {
            transform:rotate(0deg)
          }
          19% {
            transform:rotate(0deg)
          }
          20% {
            transform:rotate(0deg)
          }
          21% {
            transform:rotate(0deg)
          }
          22% {
            transform:rotate(0deg)
          }
          23% {
            transform:rotate(0deg)
          }
          24% {
            transform:rotate(0deg)
          }
          25% {
            transform:rotate(0deg)
          }
          26% {
            transform:rotate(0deg)
          }
          27% {
            transform:rotate(0deg)
          }
          28% {
            transform:rotate(0deg)
          }
          29% {
            transform:rotate(0deg)
          }
          30% {
            transform:rotate(0deg)
          }
          31% {
            transform:rotate(0deg)
          }
          32% {
            transform:rotate(0deg)
          }
          33% {
            transform:rotate(0deg)
          }
          34% {
            transform:rotate(0deg)
          }
          35% {
            transform:rotate(0deg)
          }
          36% {
            transform:rotate(0deg)
          }
          37% {
            transform:rotate(0deg)
          }
          38% {
            transform:rotate(0deg)
          }
          39% {
            transform:rotate(0deg)
          }
          40% {
            transform:rotate(0deg)
          }
          41% {
            transform:rotate(0deg)
          }
          42% {
            transform:rotate(0deg)
          }
          43% {
            transform:rotate(0deg)
          }
          44% {
            transform:rotate(0deg)
          }
          45% {
            transform:rotate(0deg)
          }
          46% {
            transform:rotate(0deg)
          }
          47% {
            transform:rotate(0deg)
          }
          48% {
            transform:rotate(0deg)
          }
          49% {
            transform:rotate(0deg)
          }
          50% {
            transform:rotate(0deg)
          }
          51% {
            transform:rotate(-0.568deg)
          }
          52% {
            transform:rotate(-2.248deg)
          }
          53% {
            transform:rotate(-4.966deg)
          }
          54% {
            transform:rotate(-8.603deg)
          }
          55% {
            transform:rotate(-13.0deg)
          }
          56% {
            transform:rotate(-17.966deg)
          }
          57% {
            transform:rotate(-23.282deg)
          }
          58% {
            transform:rotate(-28.718deg)
          }
          59% {
            transform:rotate(-34.034deg)
          }
          60% {
            transform:rotate(-39.0deg)
          }
          61% {
            transform:rotate(-43.397deg)
          }
          62% {
            transform:rotate(-47.034deg)
          }
          63% {
            transform:rotate(-49.752deg)
          }
          64% {
            transform:rotate(-51.432deg)
          }
          65% {
            transform:rotate(-52deg)
          }
          66% {
            transform:rotate(-52deg)
          }
          67% {
            transform:rotate(-52deg)
          }
          68% {
            transform:rotate(-52deg)
          }
          69% {
            transform:rotate(-52deg)
          }
          70% {
            transform:rotate(-52deg)
          }
          71% {
            transform:rotate(-52deg)
          }
          72% {
            transform:rotate(-52deg)
          }
          73% {
            transform:rotate(-52deg)
          }
          74% {
            transform:rotate(-52deg)
          }
          75% {
            transform:rotate(-52deg)
          }
          76% {
            transform:rotate(-51.795deg)
          }
          77% {
            transform:rotate(-51.183deg)
          }
          78% {
            transform:rotate(-50.174deg)
          }
          79% {
            transform:rotate(-48.784deg)
          }
          80% {
            transform:rotate(-47.034deg)
          }
          81% {
            transform:rotate(-44.953deg)
          }
          82% {
            transform:rotate(-42.573deg)
          }
          83% {
            transform:rotate(-39.931deg)
          }
          84% {
            transform:rotate(-37.07deg)
          }
          85% {
            transform:rotate(-34.034deg)
          }
          86% {
            transform:rotate(-30.872deg)
          }
          87% {
            transform:rotate(-27.633deg)
          }
          88% {
            transform:rotate(-24.367deg)
          }
          89% {
            transform:rotate(-21.128deg)
          }
          90% {
            transform:rotate(-17.966deg)
          }
          91% {
            transform:rotate(-14.93deg)
          }
          92% {
            transform:rotate(-12.069deg)
          }
          93% {
            transform:rotate(-9.427deg)
          }
          94% {
            transform:rotate(-7.047deg)
          }
          95% {
            transform:rotate(-4.966deg)
          }
          96% {
            transform:rotate(-3.216deg)
          }
          97% {
            transform:rotate(-1.826deg)
          }
          98% {
            transform:rotate(-0.817deg)
          }
          99% {
            transform:rotate(-0.205deg)
          }
          100% {
            transform:rotate(0deg)
          }
        }
        @keyframes tendon {
          0% {
            d:path("M98 84L97 95")
          }
          1% {
            d:path("M98 84L97 95")
          }
          2% {
            d:path("M98 84L97 95")
          }
          3% {
            d:path("M98 84L97 95")
          }
          4% {
            d:path("M98 84L97 95")
          }
          5% {
            d:path("M98 84L97 95")
          }
          6% {
            d:path("M98 84L97 95")
          }
          7% {
            d:path("M98 84L97 95")
          }
          8% {
            d:path("M98 84L97 95")
          }
          9% {
            d:path("M98 84L97 95")
          }
          10% {
            d:path("M98 84L97 95")
          }
          11% {
            d:path("M98 84L97 95")
          }
          12% {
            d:path("M98 84L97 95")
          }
          13% {
            d:path("M98 84L97 95")
          }
          14% {
            d:path("M98 84L97 95")
          }
          15% {
            d:path("M98 84L97 95")
          }
          16% {
            d:path("M98 84L97 95")
          }
          17% {
            d:path("M98 84L97 95")
          }
          18% {
            d:path("M98 84L97 95")
          }
          19% {
            d:path("M98 84L97 95")
          }
          20% {
            d:path("M98 84L97 95")
          }
          21% {
            d:path("M98 84L97 95")
          }
          22% {
            d:path("M98 84L97 95")
          }
          23% {
            d:path("M98 84L97 95")
          }
          24% {
            d:path("M98 84L97 95")
          }
          25% {
            d:path("M98 84L97 95")
          }
          26% {
            d:path("M98 84L97 95")
          }
          27% {
            d:path("M98 84L97 95")
          }
          28% {
            d:path("M98 84L97 95")
          }
          29% {
            d:path("M98 84L97 95")
          }
          30% {
            d:path("M98 84L97 95")
          }
          31% {
            d:path("M98 84L97 95")
          }
          32% {
            d:path("M98 84L97 95")
          }
          33% {
            d:path("M98 84L97 95")
          }
          34% {
            d:path("M98 84L97 95")
          }
          35% {
            d:path("M98 84L97 95")
          }
          36% {
            d:path("M98 84L97 95")
          }
          37% {
            d:path("M98 84L97 95")
          }
          38% {
            d:path("M98 84L97 95")
          }
          39% {
            d:path("M98 84L97 95")
          }
          40% {
            d:path("M98 84L97 95")
          }
          41% {
            d:path("M98 84L97 95")
          }
          42% {
            d:path("M98 84L97 95")
          }
          43% {
            d:path("M98 84L97 95")
          }
          44% {
            d:path("M98 84L97 95")
          }
          45% {
            d:path("M98 84L97 95")
          }
          46% {
            d:path("M98 84L97 95")
          }
          47% {
            d:path("M98 84L97 95")
          }
          48% {
            d:path("M98 84L97 95")
          }
          49% {
            d:path("M98 84L97 95")
          }
          50% {
            d:path("M98 84L97 95")
          }
          51% {
            d:path("M98 84L97.109 94.95")
          }
          52% {
            d:path("M98 84L97.428 94.795")
          }
          53% {
            d:path("M98 84L97.933 94.526")
          }
          54% {
            d:path("M98 84L98.589 94.128")
          }
          55% {
            d:path("M98 84L99.346 93.593")
          }
          56% {
            d:path("M98 84L100.149 92.921")
          }
          57% {
            d:path("M98 84L100.941 92.128")
          }
          58% {
            d:path("M98 84L101.67 91.244")
          }
          59% {
            d:path("M98 84L102.3 90.317")
          }
          60% {
            d:path("M98 84L102.808 89.402")
          }
          61% {
            d:path("M98 84L103.191 88.557")
          }
          62% {
            d:path("M98 84L103.457 87.838")
          }
          63% {
            d:path("M98 84L103.626 87.291")
          }
          64% {
            d:path("M98 84L103.718 86.949")
          }
          65% {
            d:path("M98 84L103.746 86.832")
          }
          66% {
            d:path("M98 84L103.746 86.832")
          }
          67% {
            d:path("M98 84L103.746 86.832")
          }
          68% {
            d:path("M98 84L103.746 86.832")
          }
          69% {
            d:path("M98 84L103.746 86.832")
          }
          70% {
            d:path("M98 84L103.746 86.832")
          }
          71% {
            d:path("M98 84L103.746 86.832")
          }
          72% {
            d:path("M98 84L103.746 86.832")
          }
          73% {
            d:path("M98 84L103.746 86.832")
          }
          74% {
            d:path("M98 84L103.746 86.832")
          }
          75% {
            d:path("M98 84L103.746 86.832")
          }
          76% {
            d:path("M98 84L103.736 86.874")
          }
          77% {
            d:path("M98 84L103.705 86.999")
          }
          78% {
            d:path("M98 84L103.65 87.205")
          }
          79% {
            d:path("M98 84L103.569 87.487")
          }
          80% {
            d:path("M98 84L103.457 87.838")
          }
          81% {
            d:path("M98 84L103.31 88.252")
          }
          82% {
            d:path("M98 84L103.124 88.718")
          }
          83% {
            d:path("M98 84L102.895 89.226")
          }
          84% {
            d:path("M98 84L102.62 89.763")
          }
          85% {
            d:path("M98 84L102.3 90.317")
          }
          86% {
            d:path("M98 84L101.936 90.876")
          }
          87% {
            d:path("M98 84L101.531 91.426")
          }
          88% {
            d:path("M98 84L101.093 91.957")
          }
          89% {
            d:path("M98 84L100.629 92.458")
          }
          90% {
            d:path("M98 84L100.149 92.921")
          }
          91% {
            d:path("M98 84L99.665 93.34")
          }
          92% {
            d:path("M98 84L99.189 93.711")
          }
          93% {
            d:path("M98 84L98.734 94.032")
          }
          94% {
            d:path("M98 84L98.312 94.304")
          }
          95% {
            d:path("M98 84L97.933 94.526")
          }
          96% {
            d:path("M98 84L97.609 94.702")
          }
          97% {
            d:path("M98 84L97.348 94.835")
          }
          98% {
            d:path("M98 84L97.156 94.928")
          }
          99% {
            d:path("M98 84L97.039 94.982")
          }
          100% {
            d:path("M98 84L97 95")
          }
        }
        @keyframes quad {
          0%,50%,100% {
            d:path("M34 74Q57 52 83 69L97 84Q71 76 34 74Z")
          }
          65%,75% {
            d:path("M34 74Q57 46 83 63L97 84Q71 76 34 74Z")
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Patellar Stretch Reflex">
        <path class="cord" d="M24 17Q35 10 46 17V38Q35 44 24 38Z"/>
        <path class="gray" d="M29 21Q35 28 41 21L39 34Q35 29 31 34Z"/>
        <path class="afferent" d="M66 70V42Q68 25 43 26"/>
        <path class="motor" d="M41 33Q49 48 57 68"/>
        <path class="bone" d="M35 79L91 84"/>
        <path class="quad" d="M34 74Q57 52 83 69L97 84Q71 76 34 74Z"/>
        <ellipse class="spindle" cx="61" cy="69" rx="9" ry="3"/>
        <path class="ink" d="M54 69l3 -2l3 4l3 -4l3 2"/>
        <g class="shin">
          <path class="bone" d="M92 84V119L103 121"/>
        </g>
        <path class="tendon" d="M98 84L97 95"/>
        <circle class="joint" cx="92" cy="84" r="4"/>
        <ellipse class="patella" cx="98" cy="84" rx="3" ry="5"/>
        <g class="hammer">
          <path d="M106 94L128 77"/>
          <rect x="101" y="91" width="10" height="5" rx="2"/>
        </g>
        <circle class="sensory warm" cx="66" cy="70" r="2.5"/>
        <circle class="return warm" cx="41" cy="33" r="2.5"/>
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

if (!customElements.get("concept-patellar-stretch-reflex")) {
  customElements.define("concept-patellar-stretch-reflex", ConceptPatellarStretchReflex);
}
