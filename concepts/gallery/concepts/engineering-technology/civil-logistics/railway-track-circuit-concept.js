// Railway Track Circuit. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptRailwayTrackCircuit extends HTMLElement {
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
        .armature {
          animation:armature 16s linear infinite;
        }
        .redSignal {
          animation:redSignal 16s linear infinite;
        }
        .greenSignal {
          animation:greenSignal 16s linear infinite;
        }
        .train {
          animation:train 16s linear infinite;
        }
        .train {
          animation:train 16s linear infinite;
        }
        .relayCurrent {
          animation:relayCurrent 16s linear infinite;
        }
        @keyframes armature {
          0% {
            d:path('M91 63L105 56');
          }
          2.083% {
            d:path('M91 63L105 56');
          }
          4.167% {
            d:path('M91 63L105 56');
          }
          6.25% {
            d:path('M91 63L105 56');
          }
          8.333% {
            d:path('M91 63L105 56');
          }
          10.417% {
            d:path('M91 63L105 56');
          }
          12.5% {
            d:path('M91 63L105 56');
          }
          14.583% {
            d:path('M91 63L105 56');
          }
          16.667% {
            d:path('M91 63L105 56');
          }
          18.75% {
            d:path('M91 63L105 56');
          }
          20.833% {
            d:path('M91 63L105 56');
          }
          22.917% {
            d:path('M91 63L105 56');
          }
          25% {
            d:path('M91 63L105 66');
          }
          27.083% {
            d:path('M91 63L105 66');
          }
          29.167% {
            d:path('M91 63L105 66');
          }
          31.25% {
            d:path('M91 63L105 66');
          }
          33.333% {
            d:path('M91 63L105 66');
          }
          35.417% {
            d:path('M91 63L105 66');
          }
          37.5% {
            d:path('M91 63L105 66');
          }
          39.583% {
            d:path('M91 63L105 66');
          }
          41.667% {
            d:path('M91 63L105 66');
          }
          43.75% {
            d:path('M91 63L105 66');
          }
          45.833% {
            d:path('M91 63L105 66');
          }
          47.917% {
            d:path('M91 63L105 66');
          }
          50% {
            d:path('M91 63L105 66');
          }
          52.083% {
            d:path('M91 63L105 66');
          }
          54.167% {
            d:path('M91 63L105 66');
          }
          56.25% {
            d:path('M91 63L105 66');
          }
          58.333% {
            d:path('M91 63L105 66');
          }
          60.417% {
            d:path('M91 63L105 66');
          }
          62.5% {
            d:path('M91 63L105 56');
          }
          64.583% {
            d:path('M91 63L105 56');
          }
          66.667% {
            d:path('M91 63L105 56');
          }
          68.75% {
            d:path('M91 63L105 56');
          }
          70.833% {
            d:path('M91 63L105 56');
          }
          72.917% {
            d:path('M91 63L105 56');
          }
          75% {
            d:path('M91 63L105 56');
          }
          77.083% {
            d:path('M91 63L105 56');
          }
          79.167% {
            d:path('M91 63L105 56');
          }
          81.25% {
            d:path('M91 63L105 56');
          }
          83.333% {
            d:path('M91 63L105 56');
          }
          85.417% {
            d:path('M91 63L105 56');
          }
          87.5% {
            d:path('M91 63L105 56');
          }
          89.583% {
            d:path('M91 63L105 56');
          }
          91.667% {
            d:path('M91 63L105 56');
          }
          93.75% {
            d:path('M91 63L105 56');
          }
          95.833% {
            d:path('M91 63L105 56');
          }
          97.917% {
            d:path('M91 63L105 56');
          }
          100% {
            d:path('M91 63L105 56');
          }
        }
        @keyframes redSignal {
          0% {
            opacity:0.12;
          }
          2.083% {
            opacity:0.12;
          }
          4.167% {
            opacity:0.12;
          }
          6.25% {
            opacity:0.12;
          }
          8.333% {
            opacity:0.12;
          }
          10.417% {
            opacity:0.12;
          }
          12.5% {
            opacity:0.12;
          }
          14.583% {
            opacity:0.12;
          }
          16.667% {
            opacity:0.12;
          }
          18.75% {
            opacity:0.12;
          }
          20.833% {
            opacity:0.12;
          }
          22.917% {
            opacity:0.12;
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
            opacity:0.12;
          }
          64.583% {
            opacity:0.12;
          }
          66.667% {
            opacity:0.12;
          }
          68.75% {
            opacity:0.12;
          }
          70.833% {
            opacity:0.12;
          }
          72.917% {
            opacity:0.12;
          }
          75% {
            opacity:0.12;
          }
          77.083% {
            opacity:0.12;
          }
          79.167% {
            opacity:0.12;
          }
          81.25% {
            opacity:0.12;
          }
          83.333% {
            opacity:0.12;
          }
          85.417% {
            opacity:0.12;
          }
          87.5% {
            opacity:0.12;
          }
          89.583% {
            opacity:0.12;
          }
          91.667% {
            opacity:0.12;
          }
          93.75% {
            opacity:0.12;
          }
          95.833% {
            opacity:0.12;
          }
          97.917% {
            opacity:0.12;
          }
          100% {
            opacity:0.12;
          }
        }
        @keyframes greenSignal {
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
            opacity:0.12;
          }
          27.083% {
            opacity:0.12;
          }
          29.167% {
            opacity:0.12;
          }
          31.25% {
            opacity:0.12;
          }
          33.333% {
            opacity:0.12;
          }
          35.417% {
            opacity:0.12;
          }
          37.5% {
            opacity:0.12;
          }
          39.583% {
            opacity:0.12;
          }
          41.667% {
            opacity:0.12;
          }
          43.75% {
            opacity:0.12;
          }
          45.833% {
            opacity:0.12;
          }
          47.917% {
            opacity:0.12;
          }
          50% {
            opacity:0.12;
          }
          52.083% {
            opacity:0.12;
          }
          54.167% {
            opacity:0.12;
          }
          56.25% {
            opacity:0.12;
          }
          58.333% {
            opacity:0.12;
          }
          60.417% {
            opacity:0.12;
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
            opacity:1;
          }
          97.917% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes train {
          0% {
            transform:translate(-12px,0px);
            opacity:0;
          }
          2.083% {
            transform:translate(-11.709px,0px);
            opacity:0;
          }
          4.167% {
            transform:translate(-10.856px,0px);
            opacity:0;
          }
          6.25% {
            transform:translate(-9.47px,0px);
            opacity:0;
          }
          8.333% {
            transform:translate(-7.58px,0px);
            opacity:0.035;
          }
          10.417% {
            transform:translate(-5.215px,0px);
            opacity:0.232;
          }
          12.5% {
            transform:translate(-2.403px,0px);
            opacity:0.466;
          }
          14.583% {
            transform:translate(0.826px,0px);
            opacity:0.735;
          }
          16.667% {
            transform:translate(4.443px,0px);
            opacity:1;
          }
          18.75% {
            transform:translate(8.42px,0px);
            opacity:1;
          }
          20.833% {
            transform:translate(12.727px,0px);
            opacity:1;
          }
          22.917% {
            transform:translate(17.335px,0px);
            opacity:1;
          }
          25% {
            transform:translate(22.215px,0px);
            opacity:1;
          }
          27.083% {
            transform:translate(27.339px,0px);
            opacity:1;
          }
          29.167% {
            transform:translate(32.678px,0px);
            opacity:1;
          }
          31.25% {
            transform:translate(38.202px,0px);
            opacity:1;
          }
          33.333% {
            transform:translate(43.882px,0px);
            opacity:1;
          }
          35.417% {
            transform:translate(49.69px,0px);
            opacity:1;
          }
          37.5% {
            transform:translate(55.596px,0px);
            opacity:1;
          }
          39.583% {
            transform:translate(61.572px,0px);
            opacity:1;
          }
          41.667% {
            transform:translate(67.589px,0px);
            opacity:1;
          }
          43.75% {
            transform:translate(73.617px,0px);
            opacity:1;
          }
          45.833% {
            transform:translate(79.627px,0px);
            opacity:1;
          }
          47.917% {
            transform:translate(85.592px,0px);
            opacity:1;
          }
          50% {
            transform:translate(91.481px,0px);
            opacity:1;
          }
          52.083% {
            transform:translate(97.265px,0px);
            opacity:1;
          }
          54.167% {
            transform:translate(102.917px,0px);
            opacity:1;
          }
          56.25% {
            transform:translate(108.406px,0px);
            opacity:1;
          }
          58.333% {
            transform:translate(113.704px,0px);
            opacity:1;
          }
          60.417% {
            transform:translate(118.781px,0px);
            opacity:1;
          }
          62.5% {
            transform:translate(123.61px,0px);
            opacity:1;
          }
          64.583% {
            transform:translate(128.16px,0px);
            opacity:1;
          }
          66.667% {
            transform:translate(132.403px,0px);
            opacity:1;
          }
          68.75% {
            transform:translate(136.31px,0px);
            opacity:0.974;
          }
          70.833% {
            transform:translate(139.852px,0px);
            opacity:0.679;
          }
          72.917% {
            transform:translate(143px,0px);
            opacity:0.417;
          }
          75% {
            transform:translate(145.724px,0px);
            opacity:0.19;
          }
          77.083% {
            transform:translate(147.997px,0px);
            opacity:0;
          }
          79.167% {
            transform:translate(149.789px,0px);
            opacity:0;
          }
          81.25% {
            transform:translate(151.071px,0px);
            opacity:0;
          }
          83.333% {
            transform:translate(151.813px,0px);
            opacity:0;
          }
          85.417% {
            transform:translate(152px,0px);
            opacity:0;
          }
          87.5% {
            transform:translate(152px,0px);
            opacity:0;
          }
          89.583% {
            transform:translate(152px,0px);
            opacity:0;
          }
          91.667% {
            transform:translate(152px,0px);
            opacity:0;
          }
          93.75% {
            transform:translate(152px,0px);
            opacity:0;
          }
          95.833% {
            transform:translate(152px,0px);
            opacity:0;
          }
          97.917% {
            transform:translate(152px,0px);
            opacity:0;
          }
          100% {
            transform:translate(152px,0px);
            opacity:0;
          }
        }
        @keyframes relayCurrent {
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
            opacity:0.12;
          }
          27.083% {
            opacity:0.12;
          }
          29.167% {
            opacity:0.12;
          }
          31.25% {
            opacity:0.12;
          }
          33.333% {
            opacity:0.12;
          }
          35.417% {
            opacity:0.12;
          }
          37.5% {
            opacity:0.12;
          }
          39.583% {
            opacity:0.12;
          }
          41.667% {
            opacity:0.12;
          }
          43.75% {
            opacity:0.12;
          }
          45.833% {
            opacity:0.12;
          }
          47.917% {
            opacity:0.12;
          }
          50% {
            opacity:0.12;
          }
          52.083% {
            opacity:0.12;
          }
          54.167% {
            opacity:0.12;
          }
          56.25% {
            opacity:0.12;
          }
          58.333% {
            opacity:0.12;
          }
          60.417% {
            opacity:0.12;
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
            opacity:1;
          }
          97.917% {
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .armature {
            d:path('M91 63L105 66');
          }
          .redSignal {
            opacity:1;
          }
          .greenSignal {
            opacity:0.12;
          }
          .train {
            transform:translate(55.596px,0px);
            opacity:1;
          }
          .relayCurrent {
            opacity:0.12;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Railway Track Circuit">
        <path d="M24 53L24 87" stroke="#586b58" stroke-width="4"/>
        <path d="M35 53L35 87" stroke="#586b58" stroke-width="4"/>
        <path d="M46 53L46 87" stroke="#586b58" stroke-width="4"/>
        <path d="M57 53L57 87" stroke="#586b58" stroke-width="4"/>
        <path d="M68 53L68 87" stroke="#586b58" stroke-width="4"/>
        <path d="M79 53L79 87" stroke="#586b58" stroke-width="4"/>
        <path d="M90 53L90 87" stroke="#586b58" stroke-width="4"/>
        <path d="M101 53L101 87" stroke="#586b58" stroke-width="4"/>
        <path d="M112 53L112 87" stroke="#586b58" stroke-width="4"/>
        <path d="M19 60L121 60" stroke="#b1c5b7" stroke-width="2"/>
        <path d="M19 80L121 80" stroke="#b1c5b7" stroke-width="2"/>
        <path d="M28 60V37H42M46 37H54V80M109 60V36H94V80" fill="none" stroke="#73a698" stroke-width="1.3"/>
        <path d="M42 32L42 42" stroke="#dcca8f" stroke-width="2"/>
        <path d="M46 34L46 40" stroke="#dcca8f"/>
        <rect x="88" y="40" width="12" height="16" fill="#283d33" stroke="#bea976"/>
        <path d="M90 42L98 42" stroke="#d4bd84"/>
        <path d="M90 45L98 45" stroke="#d4bd84"/>
        <path d="M90 48L98 48" stroke="#d4bd84"/>
        <path d="M90 51L98 51" stroke="#d4bd84"/>
        <path d="M90 54L98 54" stroke="#d4bd84"/>
        <path d="M91 63L105 56" class="armature" stroke="#b7c4ad" stroke-width="2"/>
        <path d="M105 56H118V111" stroke="#81a18d" fill="none"/>
        <rect x="113" y="108" width="10" height="21" rx="4" fill="#162e27" stroke="#809c88"/>
        <circle cx="118" cy="114" r="3" class="redSignal" fill="#de866a"/>
        <circle cx="118" cy="122" r="3" class="greenSignal" fill="#88c8a0"/>
        <rect x="23.5" y="58" width="3" height="4" fill="#07120f"/>
        <rect x="110.5" y="58" width="3" height="4" fill="#07120f"/>
        <rect x="23.5" y="78" width="3" height="4" fill="#07120f"/>
        <rect x="110.5" y="78" width="3" height="4" fill="#07120f"/>
        <g class="train">
          <rect x="-12" y="63" width="24" height="14" rx="3" fill="#6c9895" stroke="#c4d4bd"/>
          <rect x="-5" y="65" width="12" height="9" fill="#294c4b"/>
          <path d="M-7 58L-7 82" stroke="#d5cdaa" stroke-width="2"/>
          <path d="M7 58L7 82" stroke="#d5cdaa" stroke-width="2"/>
        </g>
        <path d="M28 60H109V36H94V44" class="relayCurrent" stroke="#e6cf86" stroke-width="1" stroke-dasharray="3 3" fill="none"/>
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

if (!customElements.get("concept-railway-track-circuit")) {
  customElements.define("concept-railway-track-circuit", ConceptRailwayTrackCircuit);
}
