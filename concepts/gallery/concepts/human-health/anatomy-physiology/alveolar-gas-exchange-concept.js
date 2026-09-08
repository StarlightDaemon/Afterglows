// Alveolar Gas Exchange. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAlveolarGasExchange extends HTMLElement {
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
        .capillary-edge {
          fill:none;
          stroke:#a17983;
          stroke-width:18;
          stroke-linecap:round
        }
        .capillary {
          fill:none;
          stroke:#54343e;
          stroke-width:14;
          stroke-linecap:round
        }
        .alveolus {
          fill:#18382c;
          stroke:#9bbdac;
          stroke-width:1.5
        }
        .barrier {
          fill:none;
          stroke:#9bbdac;
          stroke-width:1.2
        }
        .blood-cell {
          fill:#d57778;
          animation:cell 9s linear infinite
        }
        .dimple {
          fill:#773e55
        }
        .oxygen {
          fill:#e6b878;
          stroke:#e6b878;
          stroke-width:1
        }
        .carbon {
          stroke:#a5bfb4;
          stroke-width:1
        }
        .carbon .o {
          fill:#9ecac1
        }
        .carbon .c {
          fill:#586d66
        }
        .o1 {
          animation:o1 9s linear infinite
        }
        .o2 {
          animation:o2 9s linear infinite
        }
        .c1 {
          animation:c1 9s linear infinite
        }
        .c2 {
          animation:c2 9s linear infinite
        }
        .fresh,.expired {
          opacity:0
        }
        .fresh {
          animation:fresh 9s linear infinite
        }
        .expired {
          animation:expired 9s linear infinite
        }
        @keyframes cell {
          0% {
            opacity:0;
            transform:translate(18px,92px) rotate(55.305deg);
            fill:#814961
          }
          2% {
            opacity:0.5;
            transform:translate(20.732px,95.754px) rotate(52.55deg);
            fill:#814961
          }
          4% {
            opacity:1;
            transform:translate(23.527px,99.219px) rotate(49.639deg);
            fill:#814961
          }
          6% {
            opacity:1;
            transform:translate(26.377px,102.399px) rotate(46.569deg);
            fill:#814961
          }
          8% {
            opacity:1;
            transform:translate(29.279px,105.298px) rotate(43.335deg);
            fill:#814961
          }
          10% {
            opacity:1;
            transform:translate(32.227px,107.921px) rotate(39.937deg);
            fill:#814961
          }
          12% {
            opacity:1;
            transform:translate(35.216px,110.272px) rotate(36.379deg);
            fill:#814961
          }
          14% {
            opacity:1;
            transform:translate(38.241px,112.355px) rotate(32.667deg);
            fill:#814961
          }
          16% {
            opacity:1;
            transform:translate(41.297px,114.174px) rotate(28.812deg);
            fill:#814961
          }
          18% {
            opacity:1;
            transform:translate(44.379px,115.733px) rotate(24.828deg);
            fill:#814961
          }
          20% {
            opacity:1;
            transform:translate(47.481px,117.037px) rotate(20.735deg);
            fill:#814961
          }
          22% {
            opacity:1;
            transform:translate(50.6px,118.09px) rotate(16.557deg);
            fill:#814961
          }
          24% {
            opacity:1;
            transform:translate(53.728px,118.896px) rotate(12.319deg);
            fill:#814961
          }
          26% {
            opacity:1;
            transform:translate(56.862px,119.459px) rotate(8.052deg);
            fill:#814961
          }
          28% {
            opacity:1;
            transform:translate(59.996px,119.784px) rotate(3.783deg);
            fill:#814961
          }
          30% {
            opacity:1;
            transform:translate(63.125px,119.875px) rotate(-0.458deg);
            fill:#a65f71
          }
          32% {
            opacity:1;
            transform:translate(66.244px,119.736px) rotate(-4.645deg);
            fill:#a65f71
          }
          34% {
            opacity:1;
            transform:translate(69.348px,119.371px) rotate(-8.754deg);
            fill:#a65f71
          }
          36% {
            opacity:1;
            transform:translate(72.432px,118.784px) rotate(-12.766deg);
            fill:#a65f71
          }
          38% {
            opacity:1;
            transform:translate(75.49px,117.98px) rotate(-16.665deg);
            fill:#a65f71
          }
          40% {
            opacity:1;
            transform:translate(78.519px,116.963px) rotate(-20.44deg);
            fill:#a65f71
          }
          42% {
            opacity:1;
            transform:translate(81.511px,115.737px) rotate(-24.086deg);
            fill:#a65f71
          }
          44% {
            opacity:1;
            transform:translate(84.463px,114.306px) rotate(-27.599deg);
            fill:#a65f71
          }
          46% {
            opacity:1;
            transform:translate(87.369px,112.675px) rotate(-30.979deg);
            fill:#a65f71
          }
          48% {
            opacity:1;
            transform:translate(90.224px,110.848px) rotate(-34.229deg);
            fill:#a65f71
          }
          50% {
            opacity:1;
            transform:translate(93.023px,108.829px) rotate(-37.354deg);
            fill:#a65f71
          }
          52% {
            opacity:1;
            transform:translate(95.761px,106.622px) rotate(-40.36deg);
            fill:#a65f71
          }
          54% {
            opacity:1;
            transform:translate(98.433px,104.231px) rotate(-43.254deg);
            fill:#a65f71
          }
          56% {
            opacity:1;
            transform:translate(101.033px,101.661px) rotate(-46.044deg);
            fill:#d57778
          }
          58% {
            opacity:1;
            transform:translate(103.558px,98.916px) rotate(-48.736deg);
            fill:#d57778
          }
          60% {
            opacity:1;
            transform:translate(106px,96px) rotate(-51.34deg);
            fill:#d57778
          }
          62% {
            opacity:1;
            transform:translate(108.422px,92.7px) rotate(-55.199deg);
            fill:#d57778
          }
          64% {
            opacity:1;
            transform:translate(110.585px,89.402px) rotate(-58.347deg);
            fill:#d57778
          }
          66% {
            opacity:1;
            transform:translate(112.486px,86.107px) rotate(-61.769deg);
            fill:#d57778
          }
          68% {
            opacity:1;
            transform:translate(114.12px,82.816px) rotate(-65.477deg);
            fill:#d57778
          }
          70% {
            opacity:1;
            transform:translate(115.484px,79.531px) rotate(-69.48deg);
            fill:#d57778
          }
          72% {
            opacity:1;
            transform:translate(116.575px,76.254px) rotate(-73.774deg);
            fill:#d57778
          }
          74% {
            opacity:1;
            transform:translate(117.388px,72.986px) rotate(-78.345deg);
            fill:#d57778
          }
          76% {
            opacity:1;
            transform:translate(117.92px,69.728px) rotate(-83.161deg);
            fill:#d57778
          }
          78% {
            opacity:1;
            transform:translate(118.167px,66.482px) rotate(-88.177deg);
            fill:#d57778
          }
          80% {
            opacity:1;
            transform:translate(118.125px,63.25px) rotate(-93.327deg);
            fill:#d57778
          }
          82% {
            opacity:1;
            transform:translate(117.791px,60.033px) rotate(-98.539deg);
            fill:#d57778
          }
          84% {
            opacity:1;
            transform:translate(117.16px,56.832px) rotate(-103.732deg);
            fill:#d57778
          }
          86% {
            opacity:1;
            transform:translate(116.229px,53.649px) rotate(-108.826deg);
            fill:#d57778
          }
          88% {
            opacity:1;
            transform:translate(114.995px,50.486px) rotate(-113.752deg);
            fill:#d57778
          }
          90% {
            opacity:1;
            transform:translate(113.453px,47.344px) rotate(-118.454deg);
            fill:#d57778
          }
          92% {
            opacity:1;
            transform:translate(111.6px,44.224px) rotate(-122.891deg);
            fill:#d57778
          }
          94% {
            opacity:1;
            transform:translate(109.432px,41.128px) rotate(-127.041deg);
            fill:#d57778
          }
          96% {
            opacity:1;
            transform:translate(106.945px,38.058px) rotate(-130.894deg);
            fill:#d57778
          }
          98% {
            opacity:0.5;
            transform:translate(104.136px,35.015px) rotate(-134.452deg);
            fill:#d57778
          }
          100% {
            opacity:0;
            transform:translate(101px,32px) rotate(-137.726deg);
            fill:#d57778
          }
        }
        @keyframes o1 {
          0%,19% {
            transform:translate(77px,74px) rotate(-50.568deg)
          }
          55%,100% {
            transform:translate(105.276px,96.892px) rotate(-50.568deg)
          }
        }
        @keyframes o2 {
          0%,24% {
            transform:translate(56px,77px) rotate(-29.305deg)
          }
          60%,100% {
            transform:translate(85.922px,113.516px) rotate(-29.305deg)
          }
        }
        @keyframes c1 {
          0%,19% {
            transform:translate(118.177px,64.541px) rotate(-91.255deg)
          }
          55%,100% {
            transform:translate(81px,57px) rotate(-91.255deg)
          }
        }
        @keyframes c2 {
          0%,24% {
            transform:translate(93.576px,108.402px) rotate(-37.965deg)
          }
          60%,100% {
            transform:translate(62px,81px) rotate(-37.965deg)
          }
        }
        @keyframes fresh {
          0%,3% {
            opacity:0;
            transform:translate(56px,10px)
          }
          4% {
            opacity:1;
            transform:translate(56px,10px)
          }
          18% {
            opacity:1;
            transform:translate(56px,34px)
          }
          19%,100% {
            opacity:0
          }
        }
        @keyframes expired {
          0%,67% {
            opacity:0;
            transform:translate(56px,36px)
          }
          68% {
            opacity:1;
            transform:translate(56px,36px)
          }
          88% {
            opacity:1;
            transform:translate(56px,10px)
          }
          89%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Alveolar Gas Exchange">
        <path class="capillary-edge" d="M18 92C45 131 82 126 106 96C123 74 123 52 101 32"/>
        <path class="capillary" d="M18 92C45 131 82 126 106 96C123 74 123 52 101 32"/>
        <path class="alveolus" d="M49 12V29C31 34 23 48 24 65C25 85 44 97 63 94C83 92 97 75 94 55C92 40 80 31 66 28V12"/>
        <path class="barrier" d="M75 96Q96 89 101 67"/>
        <g class="blood-cell" transform="translate(81.511,115.737) rotate(-24.086)">
          <ellipse cx="0" cy="0" rx="6" ry="3.6"/>
          <ellipse class="dimple" cx="0" cy="0" rx="3" ry="1.5"/>
        </g>
        <g class="oxygen o1" transform="translate(105.276,96.892) rotate(-50.568)">
          <path d="M-3 0H3"/>
          <circle cx="-3" r="2.5"/>
          <circle cx="3" r="2.5"/>
        </g>
        <g class="oxygen o2" transform="translate(85.922,113.516) rotate(-29.305)">
          <path d="M-3 0H3"/>
          <circle cx="-3" r="2.5"/>
          <circle cx="3" r="2.5"/>
        </g>
        <g class="carbon c1" transform="translate(81,57) rotate(-91.255)">
          <path d="M-5 0H5"/>
          <circle class="o" cx="-5" r="2.2"/>
          <circle class="c" r="2.5"/>
          <circle class="o" cx="5" r="2.2"/>
        </g>
        <g class="carbon c2" transform="translate(62,81) rotate(-37.965)">
          <path d="M-5 0H5"/>
          <circle class="o" cx="-5" r="2.2"/>
          <circle class="c" r="2.5"/>
          <circle class="o" cx="5" r="2.2"/>
        </g>
        <g class="oxygen fresh" transform="translate(56,34)">
          <path d="M-3 0H3"/>
          <circle cx="-3" r="2.5"/>
          <circle cx="3" r="2.5"/>
        </g>
        <g class="carbon expired" transform="translate(56,16)">
          <path d="M-5 0H5"/>
          <circle class="o" cx="-5" r="2.2"/>
          <circle class="c" r="2.5"/>
          <circle class="o" cx="5" r="2.2"/>
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

if (!customElements.get("concept-alveolar-gas-exchange")) {
  customElements.define("concept-alveolar-gas-exchange", ConceptAlveolarGasExchange);
}
