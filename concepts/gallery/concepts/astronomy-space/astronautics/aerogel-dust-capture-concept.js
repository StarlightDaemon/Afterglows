// Aerogel Dust Capture. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptAerogelDustCapture extends HTMLElement {
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
        .dust {
          animation:dust 16s linear infinite;
        }
        .track {
          animation:track 16s linear infinite;
        }
        .track {
          animation:track 16s linear infinite;
        }
        .captureEpisode {
          animation:captureEpisode 16s linear infinite;
        }
        @keyframes dust {
          0% {
            transform:translate(12px,70px);
          }
          2.083% {
            transform:translate(19.778px,70px);
          }
          4.167% {
            transform:translate(27.556px,70px);
          }
          6.25% {
            transform:translate(35.333px,70px);
          }
          8.333% {
            transform:translate(43.044px,70px);
          }
          10.417% {
            transform:translate(50.255px,70px);
          }
          12.5% {
            transform:translate(56.911px,70px);
          }
          14.583% {
            transform:translate(63.034px,70px);
          }
          16.667% {
            transform:translate(68.648px,70px);
          }
          18.75% {
            transform:translate(73.774px,70px);
          }
          20.833% {
            transform:translate(78.434px,70px);
          }
          22.917% {
            transform:translate(82.651px,70px);
          }
          25% {
            transform:translate(86.447px,70px);
          }
          27.083% {
            transform:translate(89.843px,70px);
          }
          29.167% {
            transform:translate(92.862px,70px);
          }
          31.25% {
            transform:translate(95.527px,70px);
          }
          33.333% {
            transform:translate(97.859px,70px);
          }
          35.417% {
            transform:translate(99.881px,70px);
          }
          37.5% {
            transform:translate(101.614px,70px);
          }
          39.583% {
            transform:translate(103.081px,70px);
          }
          41.667% {
            transform:translate(104.304px,70px);
          }
          43.75% {
            transform:translate(105.306px,70px);
          }
          45.833% {
            transform:translate(106.108px,70px);
          }
          47.917% {
            transform:translate(106.732px,70px);
          }
          50% {
            transform:translate(107.202px,70px);
          }
          52.083% {
            transform:translate(107.538px,70px);
          }
          54.167% {
            transform:translate(107.763px,70px);
          }
          56.25% {
            transform:translate(107.9px,70px);
          }
          58.333% {
            transform:translate(107.97px,70px);
          }
          60.417% {
            transform:translate(107.996px,70px);
          }
          62.5% {
            transform:translate(108px,70px);
          }
          64.583% {
            transform:translate(108px,70px);
          }
          66.667% {
            transform:translate(108px,70px);
          }
          68.75% {
            transform:translate(108px,70px);
          }
          70.833% {
            transform:translate(108px,70px);
          }
          72.917% {
            transform:translate(108px,70px);
          }
          75% {
            transform:translate(108px,70px);
          }
          77.083% {
            transform:translate(108px,70px);
          }
          79.167% {
            transform:translate(108px,70px);
          }
          81.25% {
            transform:translate(108px,70px);
          }
          83.333% {
            transform:translate(108px,70px);
          }
          85.417% {
            transform:translate(108px,70px);
          }
          87.5% {
            transform:translate(108px,70px);
          }
          89.583% {
            transform:translate(108px,70px);
          }
          91.667% {
            transform:translate(108px,70px);
          }
          93.75% {
            transform:translate(108px,70px);
          }
          95.833% {
            transform:translate(108px,70px);
          }
          97.917% {
            transform:translate(108px,70px);
          }
          100% {
            transform:translate(108px,70px);
          }
        }
        @keyframes track {
          0% {
            d:path('M40 70Q26 69 12 70Q26 71 40 70Z');
            opacity:0;
          }
          2.083% {
            d:path('M40 70Q29.889 69 19.778 70Q29.889 71 40 70Z');
            opacity:0;
          }
          4.167% {
            d:path('M40 70Q33.778 69 27.556 70Q33.778 71 40 70Z');
            opacity:0;
          }
          6.25% {
            d:path('M40 70Q37.667 69 35.333 70Q37.667 71 40 70Z');
            opacity:0;
          }
          8.333% {
            d:path('M40 69.8Q41.522 69 43.044 70Q41.522 71 40 70.2Z');
            opacity:0.073;
          }
          10.417% {
            d:path('M40 67.994Q45.127 69 50.255 70Q45.127 71 40 72.006Z');
            opacity:0.533;
          }
          12.5% {
            d:path('M40 65.403Q48.455 69 56.911 70Q48.455 71 40 74.597Z');
            opacity:0.65;
          }
          14.583% {
            d:path('M40 63.38Q51.517 69 63.034 70Q51.517 71 40 76.62Z');
            opacity:0.65;
          }
          16.667% {
            d:path('M40 63Q54.324 69 68.648 70Q54.324 71 40 77Z');
            opacity:0.65;
          }
          18.75% {
            d:path('M40 63Q56.887 69 73.774 70Q56.887 71 40 77Z');
            opacity:0.65;
          }
          20.833% {
            d:path('M40 63Q59.217 69 78.434 70Q59.217 71 40 77Z');
            opacity:0.65;
          }
          22.917% {
            d:path('M40 63Q61.326 69 82.651 70Q61.326 71 40 77Z');
            opacity:0.65;
          }
          25% {
            d:path('M40 63Q63.223 69 86.447 70Q63.223 71 40 77Z');
            opacity:0.65;
          }
          27.083% {
            d:path('M40 63Q64.922 69 89.843 70Q64.922 71 40 77Z');
            opacity:0.65;
          }
          29.167% {
            d:path('M40 63Q66.431 69 92.862 70Q66.431 71 40 77Z');
            opacity:0.65;
          }
          31.25% {
            d:path('M40 63Q67.764 69 95.527 70Q67.764 71 40 77Z');
            opacity:0.65;
          }
          33.333% {
            d:path('M40 63Q68.929 69 97.859 70Q68.929 71 40 77Z');
            opacity:0.65;
          }
          35.417% {
            d:path('M40 63Q69.94 69 99.881 70Q69.94 71 40 77Z');
            opacity:0.65;
          }
          37.5% {
            d:path('M40 63Q70.807 69 101.614 70Q70.807 71 40 77Z');
            opacity:0.65;
          }
          39.583% {
            d:path('M40 63Q71.541 69 103.081 70Q71.541 71 40 77Z');
            opacity:0.65;
          }
          41.667% {
            d:path('M40 63Q72.152 69 104.304 70Q72.152 71 40 77Z');
            opacity:0.65;
          }
          43.75% {
            d:path('M40 63Q72.653 69 105.306 70Q72.653 71 40 77Z');
            opacity:0.65;
          }
          45.833% {
            d:path('M40 63Q73.054 69 106.108 70Q73.054 71 40 77Z');
            opacity:0.65;
          }
          47.917% {
            d:path('M40 63Q73.366 69 106.732 70Q73.366 71 40 77Z');
            opacity:0.65;
          }
          50% {
            d:path('M40 63Q73.601 69 107.202 70Q73.601 71 40 77Z');
            opacity:0.65;
          }
          52.083% {
            d:path('M40 63Q73.769 69 107.538 70Q73.769 71 40 77Z');
            opacity:0.65;
          }
          54.167% {
            d:path('M40 63Q73.882 69 107.763 70Q73.882 71 40 77Z');
            opacity:0.65;
          }
          56.25% {
            d:path('M40 63Q73.95 69 107.9 70Q73.95 71 40 77Z');
            opacity:0.65;
          }
          58.333% {
            d:path('M40 63Q73.985 69 107.97 70Q73.985 71 40 77Z');
            opacity:0.65;
          }
          60.417% {
            d:path('M40 63Q73.998 69 107.996 70Q73.998 71 40 77Z');
            opacity:0.65;
          }
          62.5% {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
          64.583% {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
          66.667% {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
          68.75% {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
          70.833% {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
          72.917% {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
          75% {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
          77.083% {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
          79.167% {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
          81.25% {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
          83.333% {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
          85.417% {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
          87.5% {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
          89.583% {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
          91.667% {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
          93.75% {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
          95.833% {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
          97.917% {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
          100% {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
        }
        @keyframes captureEpisode {
          0% {
            opacity:1;
          }
          2.083% {
            opacity:1;
          }
          4.167% {
            opacity:1;
          }
          6.25% {
            opacity:1;
          }
          8.333% {
            opacity:1;
          }
          10.417% {
            opacity:1;
          }
          12.5% {
            opacity:1;
          }
          14.583% {
            opacity:1;
          }
          16.667% {
            opacity:1;
          }
          18.75% {
            opacity:1;
          }
          20.833% {
            opacity:1;
          }
          22.917% {
            opacity:1;
          }
          25% {
            opacity:1;
          }
          27.083% {
            opacity:1;
          }
          29.167% {
            opacity:1;
          }
          31.25% {
            opacity:1;
          }
          33.333% {
            opacity:1;
          }
          35.417% {
            opacity:1;
          }
          37.5% {
            opacity:1;
          }
          39.583% {
            opacity:1;
          }
          41.667% {
            opacity:1;
          }
          43.75% {
            opacity:1;
          }
          45.833% {
            opacity:1;
          }
          47.917% {
            opacity:1;
          }
          50% {
            opacity:1;
          }
          52.083% {
            opacity:1;
          }
          54.167% {
            opacity:1;
          }
          56.25% {
            opacity:1;
          }
          58.333% {
            opacity:1;
          }
          60.417% {
            opacity:1;
          }
          62.5% {
            opacity:1;
          }
          64.583% {
            opacity:1;
          }
          66.667% {
            opacity:1;
          }
          68.75% {
            opacity:1;
          }
          70.833% {
            opacity:1;
          }
          72.917% {
            opacity:1;
          }
          75% {
            opacity:1;
          }
          77.083% {
            opacity:1;
          }
          79.167% {
            opacity:1;
          }
          81.25% {
            opacity:1;
          }
          83.333% {
            opacity:1;
          }
          85.417% {
            opacity:1;
          }
          87.5% {
            opacity:1;
          }
          89.583% {
            opacity:1;
          }
          91.667% {
            opacity:1;
          }
          93.75% {
            opacity:1;
          }
          95.833% {
            opacity:0.926;
          }
          97.917% {
            opacity:0.376;
          }
          100% {
            opacity:0;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .dust {
            transform:translate(108px,70px);
          }
          .track {
            d:path('M40 63Q74 69 108 70Q74 71 40 77Z');
            opacity:0.65;
          }
          .captureEpisode {
            opacity:1;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Aerogel Dust Capture">
        <g class="captureEpisode">
          <circle cx="9" cy="8" r="1" fill="#789697" opacity=".5"/>
          <circle cx="56" cy="75" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="103" cy="19" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="29" cy="86" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="76" cy="30" r="1" fill="#789697" opacity=".5"/>
          <circle cx="123" cy="97" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="49" cy="41" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="96" cy="108" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="22" cy="52" r="1" fill="#789697" opacity=".5"/>
          <circle cx="69" cy="119" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="116" cy="63" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="42" cy="130" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="89" cy="74" r="1" fill="#789697" opacity=".5"/>
          <circle cx="15" cy="18" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="62" cy="85" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="109" cy="29" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="35" cy="96" r="1" fill="#789697" opacity=".5"/>
          <circle cx="82" cy="40" r="0.55" fill="#789697" opacity=".5"/>
          <circle cx="129" cy="107" r="0.55" fill="#789697" opacity=".5"/>
          <path d="M40 42L55 31H132V96L117 108H40Z" fill="#386979" opacity=".5" stroke="#9dc6c9"/>
          <rect x="40" y="42" width="77" height="66" fill="#6e9d9f" opacity=".25" stroke="#9dc6c9"/>
          <path d="M117 42L132 31M117 108V42H40" stroke="#9dc6c9" fill="none" opacity=".6"/>
          <path d="M40 63Q74 69 108 70Q74 71 40 77Z" class="track" fill="#c9dfd8" opacity=".6"/>
          <circle cx="0" cy="0" r="2" class="dust" fill="#e0bf81" stroke="#f6dfad"/>
          <g transform="translate(20 91) rotate(0)" fill="#aacbc1">
            <path d="M-7 -1H2V-4L8 0 2 4V1H-7Z"/>
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

if (!customElements.get("concept-aerogel-dust-capture")) {
  customElements.define("concept-aerogel-dust-capture", ConceptAerogelDustCapture);
}
