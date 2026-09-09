// Rocket Stage Separation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptRocketStageSeparation extends HTMLElement {
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
        .lowerStage {
          animation:lowerStage 16s linear infinite;
        }
        .firstPlume {
          animation:firstPlume 16s linear infinite;
        }
        .upperPlume {
          animation:upperPlume 16s linear infinite;
        }
        .joint {
          animation:joint 16s linear infinite;
        }
        .stageEpisode {
          animation:stageEpisode 16s linear infinite;
        }
        @keyframes lowerStage {
          0% {
            transform:translate(0px,0px);
          }
          2.083% {
            transform:translate(0px,0px);
          }
          4.167% {
            transform:translate(0px,0px);
          }
          6.25% {
            transform:translate(0px,0px);
          }
          8.333% {
            transform:translate(0px,0px);
          }
          10.417% {
            transform:translate(0px,0px);
          }
          12.5% {
            transform:translate(0px,0px);
          }
          14.583% {
            transform:translate(0px,0px);
          }
          16.667% {
            transform:translate(0px,0px);
          }
          18.75% {
            transform:translate(0px,0px);
          }
          20.833% {
            transform:translate(0px,0px);
          }
          22.917% {
            transform:translate(0px,0px);
          }
          25% {
            transform:translate(0px,0px);
          }
          27.083% {
            transform:translate(0px,0px);
          }
          29.167% {
            transform:translate(0px,0.179px);
          }
          31.25% {
            transform:translate(0px,1.302px);
          }
          33.333% {
            transform:translate(0px,3.273px);
          }
          35.417% {
            transform:translate(0px,5.877px);
          }
          37.5% {
            transform:translate(0px,8.901px);
          }
          39.583% {
            transform:translate(0px,12.13px);
          }
          41.667% {
            transform:translate(0px,15.351px);
          }
          43.75% {
            transform:translate(0px,18.349px);
          }
          45.833% {
            transform:translate(0px,20.911px);
          }
          47.917% {
            transform:translate(0px,22.822px);
          }
          50% {
            transform:translate(0px,23.868px);
          }
          52.083% {
            transform:translate(0px,24px);
          }
          54.167% {
            transform:translate(0px,24px);
          }
          56.25% {
            transform:translate(0px,24px);
          }
          58.333% {
            transform:translate(0px,24px);
          }
          60.417% {
            transform:translate(0px,24px);
          }
          62.5% {
            transform:translate(0px,24px);
          }
          64.583% {
            transform:translate(0px,24px);
          }
          66.667% {
            transform:translate(0px,24px);
          }
          68.75% {
            transform:translate(0px,24px);
          }
          70.833% {
            transform:translate(0px,24px);
          }
          72.917% {
            transform:translate(0px,24px);
          }
          75% {
            transform:translate(0px,24px);
          }
          77.083% {
            transform:translate(0px,24px);
          }
          79.167% {
            transform:translate(0px,24px);
          }
          81.25% {
            transform:translate(0px,24px);
          }
          83.333% {
            transform:translate(0px,24px);
          }
          85.417% {
            transform:translate(0px,24px);
          }
          87.5% {
            transform:translate(0px,24px);
          }
          89.583% {
            transform:translate(0px,24px);
          }
          91.667% {
            transform:translate(0px,24px);
          }
          93.75% {
            transform:translate(0px,24px);
          }
          95.833% {
            transform:translate(0px,24px);
          }
          97.917% {
            transform:translate(0px,24px);
          }
          100% {
            transform:translate(0px,24px);
          }
        }
        @keyframes firstPlume {
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
            opacity:0.954;
          }
          16.667% {
            opacity:0.363;
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
        @keyframes upperPlume {
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
            opacity:0.156;
          }
          58.333% {
            opacity:0.741;
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
            opacity:1;
          }
          100% {
            opacity:1;
          }
        }
        @keyframes joint {
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
            opacity:0.942;
          }
          31.25% {
            opacity:0.639;
          }
          33.333% {
            opacity:0.259;
          }
          35.417% {
            opacity:0.015;
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
        @keyframes stageEpisode {
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
            opacity:0.777;
          }
          97.917% {
            opacity:0.278;
          }
          100% {
            opacity:0;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .lowerStage {
            transform:translate(0px,24px);
          }
          .firstPlume {
            opacity:0;
          }
          .upperPlume {
            opacity:1;
          }
          .joint {
            opacity:0;
          }
          .stageEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Rocket Stage Separation">
        <g class="stageEpisode">
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
          <path d="M61 35Q61 25 70 16Q79 25 79 35V60H61Z" fill="#b4c9c1" stroke="#e5e6cf"/>
          <rect x="61" y="37" width="18" height="3" fill="#5a7771"/>
          <path d="M65 60H75L78 67H62Z" fill="#61796e" stroke="#b9c7ad"/>
          <g class="lowerStage">
            <rect x="59" y="69" width="22" height="33" fill="#7c9991" stroke="#c1d0bb"/>
            <path d="M61 74L79 74" stroke="#4f6d65"/>
            <path d="M61 83L79 83" stroke="#4f6d65"/>
            <path d="M61 92L79 92" stroke="#4f6d65"/>
            <path d="M63 102H77L81 109H59Z" fill="#55736a"/>
          </g>
          <path d="M62 110Q70 126 78 110" class="firstPlume" fill="#e4b16e"/>
          <path d="M63 68Q70 92 77 68" class="upperPlume" fill="#8fd1e2" opacity="0"/>
          <path d="M60 65H80" class="joint" stroke="#e4bf80" stroke-width="2"/>
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

if (!customElements.get("concept-rocket-stage-separation")) {
  customElements.define("concept-rocket-stage-separation", ConceptRocketStageSeparation);
}
