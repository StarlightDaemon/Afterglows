// Allopatric Speciation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAllopatricSpeciation extends HTMLElement {
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
        .habitat {
          fill:#263c25
        }
        .river {
          fill:#28657b;
          transform-origin:70px 75px;
          transform:scaleX(1);
          animation:river 18s linear infinite
        }
        .bridge {
          fill:#929068;
          opacity:1;
          animation:bridge 18s linear infinite
        }
        .wing {
          fill:#7c9b72;
          stroke:#b3c09b;
          stroke-width:.6
        }
        .head {
          fill:#17251c
        }
        .leg {
          stroke:#abc39a;
          stroke-width:.7
        }
        .flash {
          fill:#f1e58b
        }
        .single {
          animation:single 3s linear infinite
        }
        .double {
          animation:double 3s linear infinite
        }
        .eggs {
          fill:#c9d8a2;
          animation:eggs 18s linear infinite
        }
        .cohort-eggs {
          fill:#d7dabc;
          opacity:0
        }
        .ce0 {
          animation:ce0 18s linear infinite
        }
        @keyframes ce0 {
          0%,28.5%,35%,100% {
            opacity:0
          }
          29.5%,33% {
            opacity:1
          }
        }
        .ce1 {
          animation:ce1 18s linear infinite
        }
        @keyframes ce1 {
          0%,46.5%,53%,100% {
            opacity:0
          }
          47.5%,51% {
            opacity:1
          }
        }
        .ce2 {
          animation:ce2 18s linear infinite
        }
        @keyframes ce2 {
          0%,63.5%,70%,100% {
            opacity:0
          }
          64.5%,68% {
            opacity:1
          }
        }
        @keyframes river {
          0%,15% {
            transform:scaleX(.02)
          }
          30%,100% {
            transform:scaleX(1)
          }
        }
        @keyframes bridge {
          0%,68% {
            opacity:0
          }
          78%,100% {
            opacity:1
          }
        }
        @keyframes single {
          0%,12%,100% {
            opacity:.1
          }
          3%,8% {
            opacity:1
          }
        }
        @keyframes double {
          0%,12%,20%,32%,100% {
            opacity:.1
          }
          3%,8%,23%,28% {
            opacity:1
          }
        }
        @keyframes eggs {
          0%,89% {
            opacity:0
          }
          95%,100% {
            opacity:1
          }
        }
        .individual01 {
          animation:cross 18s linear infinite
        }
        @keyframes cross {
          0%,14%,100% {
            transform:translate(55px,85px)
          }
          6% {
            transform:translate(85px,85px)
          }
        }
        .g0 {
          opacity:0;
          animation:g0 18s linear infinite
        }
        @keyframes g0 {
          0%,25% {
            opacity:1
          }
          29%,100% {
            opacity:0
          }
        }
        .g1 {
          opacity:0;
          animation:g1 18s linear infinite
        }
        @keyframes g1 {
          0%,34% {
            opacity:0
          }
          38%,43% {
            opacity:1
          }
          47%,100% {
            opacity:0
          }
        }
        .g2 {
          opacity:0;
          animation:g2 18s linear infinite
        }
        @keyframes g2 {
          0%,52% {
            opacity:0
          }
          56%,60% {
            opacity:1
          }
          64%,100% {
            opacity:0
          }
        }
        .individual31 {
          transform:translate(60px,75px);
          animation:individual31 18s linear infinite
        }
        @keyframes individual31 {
          0%,78% {
            transform:translate(55px,85px)
          }
          85%,100% {
            transform:translate(60px,75px)
          }
        }
        .individual32 {
          transform:translate(80px,75px);
          animation:individual32 18s linear infinite
        }
        @keyframes individual32 {
          0%,78% {
            transform:translate(85px,52px)
          }
          85%,100% {
            transform:translate(80px,75px)
          }
        }
        .g3 {
          opacity:1;
          animation:g3 18s linear infinite
        }
        @keyframes g3 {
          0%,69% {
            opacity:0
          }
          73%,100% {
            opacity:1
          }
        }
        .partners {
          animation:partners 18s linear infinite
        }
        @keyframes partners {
          0%,76% {
            opacity:0
          }
          83%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Allopatric Speciation">
        <rect class="habitat" x="14" y="23" width="112" height="104" rx="6"/>
        <path class="river" d="M64,23Q73,50 65,72Q63,95 67,127H79Q74,97 77,72Q84,47 76,23Z"/>
        <rect class="bridge" x="61" y="69" width="21" height="14" rx="2"/>
        <g class="generation g0">
          <g class="individual00" transform="translate(35 52)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash single" cx="0" cy="4" r="2.5"/>
          </g>
          <g class="individual01" transform="translate(55 85)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash single" cx="0" cy="4" r="2.5"/>
          </g>
          <g class="individual02" transform="translate(85 52)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash single" cx="0" cy="4" r="2.5"/>
          </g>
          <g class="individual03" transform="translate(105 85)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash single" cx="0" cy="4" r="2.5"/>
          </g>
        </g>
        <g class="generation g1">
          <g class="individual10" transform="translate(35 52)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash single" cx="0" cy="4" r="2.5"/>
          </g>
          <g class="individual11" transform="translate(55 85)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash single" cx="0" cy="4" r="2.5"/>
          </g>
          <g class="individual12" transform="translate(85 52)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash double" cx="0" cy="4" r="2.5"/>
          </g>
          <g class="individual13" transform="translate(105 85)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash double" cx="0" cy="4" r="2.5"/>
          </g>
        </g>
        <g class="generation g2">
          <g class="individual20" transform="translate(35 52)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash single" cx="0" cy="4" r="2.5"/>
          </g>
          <g class="individual21" transform="translate(55 85)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash single" cx="0" cy="4" r="2.5"/>
          </g>
          <g class="individual22" transform="translate(85 52)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash double" cx="0" cy="4" r="2.5"/>
          </g>
          <g class="individual23" transform="translate(105 85)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash double" cx="0" cy="4" r="2.5"/>
          </g>
        </g>
        <g class="generation g3">
          <g class="individual30" transform="translate(35 52)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash single" cx="0" cy="4" r="2.5"/>
          </g>
          <g class="individual31" transform="translate(55 85)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash single" cx="0" cy="4" r="2.5"/>
          </g>
          <g class="individual32" transform="translate(85 52)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash double" cx="0" cy="4" r="2.5"/>
          </g>
          <g class="individual33" transform="translate(105 85)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash double" cx="0" cy="4" r="2.5"/>
          </g>
        </g>
        <g class="partners">
          <g transform="translate(29 104)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash single" cx="0" cy="4" r="2.5"/>
          </g>
          <g transform="translate(41 104)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash single" cx="0" cy="4" r="2.5"/>
          </g>
          <g transform="translate(99 104)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash double" cx="0" cy="4" r="2.5"/>
          </g>
          <g transform="translate(111 104)">
            <ellipse class="wing" cx="-2" cy="0" rx="2.5" ry="5"/>
            <ellipse class="wing" cx="2" cy="0" rx="2.5" ry="5"/>
            <path class="leg" d="M-5,-2L5,3M-5,3L5,-2"/>
            <circle class="head" cx="0" cy="-5" r="2"/>
            <circle class="flash double" cx="0" cy="4" r="2.5"/>
          </g>
        </g>
        <g class="eggs">
          <circle cx="33" cy="119" r="1.5"/>
          <circle cx="37" cy="120" r="1.5"/>
          <circle cx="103" cy="119" r="1.5"/>
          <circle cx="107" cy="120" r="1.5"/>
        </g>
        <g class="cohort-eggs ce0">
          <circle cx="43" cy="66" r="1.6"/>
          <circle cx="43" cy="70" r="1.6"/>
          <circle cx="47" cy="66" r="1.6"/>
          <circle cx="47" cy="70" r="1.6"/>
          <circle cx="93" cy="66" r="1.6"/>
          <circle cx="93" cy="70" r="1.6"/>
          <circle cx="97" cy="66" r="1.6"/>
          <circle cx="97" cy="70" r="1.6"/>
        </g>
        <g class="cohort-eggs ce1">
          <circle cx="43" cy="66" r="1.6"/>
          <circle cx="43" cy="70" r="1.6"/>
          <circle cx="47" cy="66" r="1.6"/>
          <circle cx="47" cy="70" r="1.6"/>
          <circle cx="93" cy="66" r="1.6"/>
          <circle cx="93" cy="70" r="1.6"/>
          <circle cx="97" cy="66" r="1.6"/>
          <circle cx="97" cy="70" r="1.6"/>
        </g>
        <g class="cohort-eggs ce2">
          <circle cx="43" cy="66" r="1.6"/>
          <circle cx="43" cy="70" r="1.6"/>
          <circle cx="47" cy="66" r="1.6"/>
          <circle cx="47" cy="70" r="1.6"/>
          <circle cx="93" cy="66" r="1.6"/>
          <circle cx="93" cy="70" r="1.6"/>
          <circle cx="97" cy="66" r="1.6"/>
          <circle cx="97" cy="70" r="1.6"/>
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

if (!customElements.get("concept-allopatric-speciation")) {
  customElements.define("concept-allopatric-speciation", ConceptAllopatricSpeciation);
}
