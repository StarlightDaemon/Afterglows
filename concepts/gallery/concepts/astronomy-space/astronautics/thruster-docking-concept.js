// Thruster Docking. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptThrusterDocking extends HTMLElement {
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
        .chaser {
          animation:chaser 16s linear infinite;
        }
        .accelerate {
          animation:accelerate 16s linear infinite;
        }
        .brake {
          animation:brake 16s linear infinite;
        }
        .latch {
          animation:latch 16s linear infinite;
        }
        .dockEpisode {
          animation:dockEpisode 16s linear infinite;
        }
        @keyframes chaser {
          0% {
            transform:translate(20px,70px);
          }
          2.083% {
            transform:translate(20.119px,70px);
          }
          4.167% {
            transform:translate(20.477px,70px);
          }
          6.25% {
            transform:translate(21.074px,70px);
          }
          8.333% {
            transform:translate(21.91px,70px);
          }
          10.417% {
            transform:translate(22.984px,70px);
          }
          12.5% {
            transform:translate(24.297px,70px);
          }
          14.583% {
            transform:translate(25.849px,70px);
          }
          16.667% {
            transform:translate(27.639px,70px);
          }
          18.75% {
            transform:translate(29.668px,70px);
          }
          20.833% {
            transform:translate(31.917px,70px);
          }
          22.917% {
            transform:translate(34.208px,70px);
          }
          25% {
            transform:translate(36.5px,70px);
          }
          27.083% {
            transform:translate(38.792px,70px);
          }
          29.167% {
            transform:translate(41.083px,70px);
          }
          31.25% {
            transform:translate(43.375px,70px);
          }
          33.333% {
            transform:translate(45.667px,70px);
          }
          35.417% {
            transform:translate(47.958px,70px);
          }
          37.5% {
            transform:translate(50.25px,70px);
          }
          39.583% {
            transform:translate(52.542px,70px);
          }
          41.667% {
            transform:translate(54.833px,70px);
          }
          43.75% {
            transform:translate(57.125px,70px);
          }
          45.833% {
            transform:translate(59.417px,70px);
          }
          47.917% {
            transform:translate(61.708px,70px);
          }
          50% {
            transform:translate(64px,70px);
          }
          52.083% {
            transform:translate(66.292px,70px);
          }
          54.167% {
            transform:translate(68.583px,70px);
          }
          56.25% {
            transform:translate(70.875px,70px);
          }
          58.333% {
            transform:translate(73.167px,70px);
          }
          60.417% {
            transform:translate(75.454px,70px);
          }
          62.5% {
            transform:translate(77.578px,70px);
          }
          64.583% {
            transform:translate(79.464px,70px);
          }
          66.667% {
            transform:translate(81.111px,70px);
          }
          68.75% {
            transform:translate(82.52px,70px);
          }
          70.833% {
            transform:translate(83.689px,70px);
          }
          72.917% {
            transform:translate(84.62px,70px);
          }
          75% {
            transform:translate(85.313px,70px);
          }
          77.083% {
            transform:translate(85.766px,70px);
          }
          79.167% {
            transform:translate(85.981px,70px);
          }
          81.25% {
            transform:translate(86px,70px);
          }
          83.333% {
            transform:translate(86px,70px);
          }
          85.417% {
            transform:translate(86px,70px);
          }
          87.5% {
            transform:translate(86px,70px);
          }
          89.583% {
            transform:translate(86px,70px);
          }
          91.667% {
            transform:translate(86px,70px);
          }
          93.75% {
            transform:translate(86px,70px);
          }
          95.833% {
            transform:translate(86px,70px);
          }
          97.917% {
            transform:translate(86px,70px);
          }
          100% {
            transform:translate(86px,70px);
          }
        }
        @keyframes accelerate {
          0% {
            opacity:0;
          }
          2.083% {
            opacity:0;
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
            opacity:0;
          }
          22.917% {
            opacity:0;
          }
          25% {
            opacity:0;
          }
          27.083% {
            opacity:0;
          }
          29.167% {
            opacity:0;
          }
          31.25% {
            opacity:0;
          }
          33.333% {
            opacity:0;
          }
          35.417% {
            opacity:0;
          }
          37.5% {
            opacity:0;
          }
          39.583% {
            opacity:0;
          }
          41.667% {
            opacity:0;
          }
          43.75% {
            opacity:0;
          }
          45.833% {
            opacity:0;
          }
          47.917% {
            opacity:0;
          }
          50% {
            opacity:0;
          }
          52.083% {
            opacity:0;
          }
          54.167% {
            opacity:0;
          }
          56.25% {
            opacity:0;
          }
          58.333% {
            opacity:0;
          }
          60.417% {
            opacity:0;
          }
          62.5% {
            opacity:0;
          }
          64.583% {
            opacity:0;
          }
          66.667% {
            opacity:0;
          }
          68.75% {
            opacity:0;
          }
          70.833% {
            opacity:0;
          }
          72.917% {
            opacity:0;
          }
          75% {
            opacity:0;
          }
          77.083% {
            opacity:0;
          }
          79.167% {
            opacity:0;
          }
          81.25% {
            opacity:0;
          }
          83.333% {
            opacity:0;
          }
          85.417% {
            opacity:0;
          }
          87.5% {
            opacity:0;
          }
          89.583% {
            opacity:0;
          }
          91.667% {
            opacity:0;
          }
          93.75% {
            opacity:0;
          }
          95.833% {
            opacity:0;
          }
          97.917% {
            opacity:0;
          }
          100% {
            opacity:0;
          }
        }
        @keyframes brake {
          0% {
            opacity:0;
          }
          2.083% {
            opacity:0;
          }
          4.167% {
            opacity:0;
          }
          6.25% {
            opacity:0;
          }
          8.333% {
            opacity:0;
          }
          10.417% {
            opacity:0;
          }
          12.5% {
            opacity:0;
          }
          14.583% {
            opacity:0;
          }
          16.667% {
            opacity:0;
          }
          18.75% {
            opacity:0;
          }
          20.833% {
            opacity:0;
          }
          22.917% {
            opacity:0;
          }
          25% {
            opacity:0;
          }
          27.083% {
            opacity:0;
          }
          29.167% {
            opacity:0;
          }
          31.25% {
            opacity:0;
          }
          33.333% {
            opacity:0;
          }
          35.417% {
            opacity:0;
          }
          37.5% {
            opacity:0;
          }
          39.583% {
            opacity:0;
          }
          41.667% {
            opacity:0;
          }
          43.75% {
            opacity:0;
          }
          45.833% {
            opacity:0;
          }
          47.917% {
            opacity:0;
          }
          50% {
            opacity:0;
          }
          52.083% {
            opacity:0;
          }
          54.167% {
            opacity:0;
          }
          56.25% {
            opacity:0;
          }
          58.333% {
            opacity:0;
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
            opacity:0;
          }
          83.333% {
            opacity:0;
          }
          85.417% {
            opacity:0;
          }
          87.5% {
            opacity:0;
          }
          89.583% {
            opacity:0;
          }
          91.667% {
            opacity:0;
          }
          93.75% {
            opacity:0;
          }
          95.833% {
            opacity:0;
          }
          97.917% {
            opacity:0;
          }
          100% {
            opacity:0;
          }
        }
        @keyframes latch {
          0% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          2.083% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          4.167% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          6.25% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          8.333% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          10.417% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          12.5% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          14.583% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          16.667% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          18.75% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          20.833% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          22.917% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          25% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          27.083% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          29.167% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          31.25% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          33.333% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          35.417% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          37.5% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          39.583% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          41.667% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          43.75% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          45.833% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          47.917% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          50% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          52.083% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          54.167% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          56.25% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          58.333% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          60.417% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          62.5% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          64.583% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          66.667% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          68.75% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          70.833% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          72.917% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          75% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          77.083% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          79.167% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          81.25% {
            d:path('M100 58L98 62M100 82L98 78');
          }
          83.333% {
            d:path('M100 58L98.222 62.148M100 82L98.222 77.852');
          }
          85.417% {
            d:path('M100 58L99.174 62.783M100 82L99.174 77.217');
          }
          87.5% {
            d:path('M100 58L100.304 63.536M100 82L100.304 76.464');
          }
          89.583% {
            d:path('M100 58L100.976 63.984M100 82L100.976 76.016');
          }
          91.667% {
            d:path('M100 58L101 64M100 82L101 76');
          }
          93.75% {
            d:path('M100 58L101 64M100 82L101 76');
          }
          95.833% {
            d:path('M100 58L101 64M100 82L101 76');
          }
          97.917% {
            d:path('M100 58L101 64M100 82L101 76');
          }
          100% {
            d:path('M100 58L101 64M100 82L101 76');
          }
        }
        @keyframes dockEpisode {
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
            opacity:1;
          }
          97.917% {
            opacity:0.531;
          }
          100% {
            opacity:0;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .chaser {
            transform:translate(85.313px,70px);
          }
          .accelerate {
            opacity:0;
          }
          .brake {
            opacity:1;
          }
          .latch {
            d:path('M100 58L98 62M100 82L98 78');
          }
          .dockEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Thruster Docking">
        <g class="dockEpisode">
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
          <rect x="112" y="48" width="19" height="44" fill="#566e63" stroke="#c3ccb8"/>
          <rect x="103" y="61" width="9" height="18" fill="#a0b7a9"/>
          <path d="M102 58V82" stroke="#dbc88e" stroke-width="2"/>
          <g class="chaser">
            <rect x="-11" y="-9" width="22" height="18" rx="2" fill="#72958b" stroke="#d0d7bd"/>
            <path d="M11 -6L15 -4V4L11 6Z" fill="#b0c5b7"/>
            <rect x="-6" y="-22" width="12" height="10" fill="#30596a" stroke="#86b8bd"/>
            <rect x="-6" y="12" width="12" height="10" fill="#30596a" stroke="#86b8bd"/>
            <path d="M-12 -7L-20 -5 -12 -3M-12 3L-20 5 -12 7" class="accelerate" fill="#9bd9df"/>
            <path d="M11 -9L20 -7 11 -5M11 5L20 7 11 9" class="brake" fill="#e7c082" opacity="0"/>
          </g>
          <path d="M100 58L98 62M100 82L98 78" class="latch" stroke="#e0c997" stroke-width="2"/>
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

if (!customElements.get("concept-thruster-docking")) {
  customElements.define("concept-thruster-docking", ConceptThrusterDocking);
}
