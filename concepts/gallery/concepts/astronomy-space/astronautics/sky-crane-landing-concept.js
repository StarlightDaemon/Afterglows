// Sky-Crane Landing. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSkyCraneLanding extends HTMLElement {
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
        .descent {
          animation:descent 16s linear infinite;
        }
        .rover {
          animation:rover 16s linear infinite;
        }
        .bridles {
          animation:bridles 16s linear infinite;
        }
        .bridles {
          animation:bridles 16s linear infinite;
        }
        .landingEpisode {
          animation:landingEpisode 16s linear infinite;
        }
        @keyframes descent {
          0% {
            transform:translate(70px,33px);
          }
          2.083% {
            transform:translate(70px,33px);
          }
          4.167% {
            transform:translate(70px,33px);
          }
          6.25% {
            transform:translate(70px,33px);
          }
          8.333% {
            transform:translate(70px,33px);
          }
          10.417% {
            transform:translate(70px,33px);
          }
          12.5% {
            transform:translate(70px,33px);
          }
          14.583% {
            transform:translate(70px,33px);
          }
          16.667% {
            transform:translate(70px,33px);
          }
          18.75% {
            transform:translate(70px,33px);
          }
          20.833% {
            transform:translate(70px,33px);
          }
          22.917% {
            transform:translate(70px,33px);
          }
          25% {
            transform:translate(70px,33px);
          }
          27.083% {
            transform:translate(70px,33px);
          }
          29.167% {
            transform:translate(70px,33px);
          }
          31.25% {
            transform:translate(70px,33px);
          }
          33.333% {
            transform:translate(70px,33px);
          }
          35.417% {
            transform:translate(70px,33px);
          }
          37.5% {
            transform:translate(70px,33px);
          }
          39.583% {
            transform:translate(70px,33px);
          }
          41.667% {
            transform:translate(70px,33px);
          }
          43.75% {
            transform:translate(70px,33px);
          }
          45.833% {
            transform:translate(70px,33px);
          }
          47.917% {
            transform:translate(70px,33px);
          }
          50% {
            transform:translate(70px,33px);
          }
          52.083% {
            transform:translate(70px,33px);
          }
          54.167% {
            transform:translate(70px,33px);
          }
          56.25% {
            transform:translate(70px,33px);
          }
          58.333% {
            transform:translate(70px,33px);
          }
          60.417% {
            transform:translate(70px,33px);
          }
          62.5% {
            transform:translate(70px,33px);
          }
          64.583% {
            transform:translate(70px,33px);
          }
          66.667% {
            transform:translate(70px,33px);
          }
          68.75% {
            transform:translate(70.164px,32.959px);
          }
          70.833% {
            transform:translate(72.183px,32.454px);
          }
          72.917% {
            transform:translate(76.121px,31.47px);
          }
          75% {
            transform:translate(81.486px,30.128px);
          }
          77.083% {
            transform:translate(87.791px,28.552px);
          }
          79.167% {
            transform:translate(94.545px,26.864px);
          }
          81.25% {
            transform:translate(101.261px,25.185px);
          }
          83.333% {
            transform:translate(107.448px,23.638px);
          }
          85.417% {
            transform:translate(112.618px,22.345px);
          }
          87.5% {
            transform:translate(116.281px,21.43px);
          }
          89.583% {
            transform:translate(117.949px,21.013px);
          }
          91.667% {
            transform:translate(118px,21px);
          }
          93.75% {
            transform:translate(118px,21px);
          }
          95.833% {
            transform:translate(118px,21px);
          }
          97.917% {
            transform:translate(118px,21px);
          }
          100% {
            transform:translate(118px,21px);
          }
        }
        @keyframes rover {
          0% {
            transform:translate(70px,65px);
          }
          2.083% {
            transform:translate(70px,65px);
          }
          4.167% {
            transform:translate(70px,65px);
          }
          6.25% {
            transform:translate(70px,65px);
          }
          8.333% {
            transform:translate(70px,65px);
          }
          10.417% {
            transform:translate(70px,65.009px);
          }
          12.5% {
            transform:translate(70px,65.305px);
          }
          14.583% {
            transform:translate(70px,65.994px);
          }
          16.667% {
            transform:translate(70px,67.041px);
          }
          18.75% {
            transform:translate(70px,68.409px);
          }
          20.833% {
            transform:translate(70px,70.061px);
          }
          22.917% {
            transform:translate(70px,71.961px);
          }
          25% {
            transform:translate(70px,74.072px);
          }
          27.083% {
            transform:translate(70px,76.358px);
          }
          29.167% {
            transform:translate(70px,78.783px);
          }
          31.25% {
            transform:translate(70px,81.31px);
          }
          33.333% {
            transform:translate(70px,83.903px);
          }
          35.417% {
            transform:translate(70px,86.525px);
          }
          37.5% {
            transform:translate(70px,89.139px);
          }
          39.583% {
            transform:translate(70px,91.71px);
          }
          41.667% {
            transform:translate(70px,94.201px);
          }
          43.75% {
            transform:translate(70px,96.575px);
          }
          45.833% {
            transform:translate(70px,98.796px);
          }
          47.917% {
            transform:translate(70px,100.827px);
          }
          50% {
            transform:translate(70px,102.632px);
          }
          52.083% {
            transform:translate(70px,104.175px);
          }
          54.167% {
            transform:translate(70px,105.418px);
          }
          56.25% {
            transform:translate(70px,106.327px);
          }
          58.333% {
            transform:translate(70px,106.863px);
          }
          60.417% {
            transform:translate(70px,107px);
          }
          62.5% {
            transform:translate(70px,107px);
          }
          64.583% {
            transform:translate(70px,107px);
          }
          66.667% {
            transform:translate(70px,107px);
          }
          68.75% {
            transform:translate(70px,107px);
          }
          70.833% {
            transform:translate(70px,107px);
          }
          72.917% {
            transform:translate(70px,107px);
          }
          75% {
            transform:translate(70px,107px);
          }
          77.083% {
            transform:translate(70px,107px);
          }
          79.167% {
            transform:translate(70px,107px);
          }
          81.25% {
            transform:translate(70px,107px);
          }
          83.333% {
            transform:translate(70px,107px);
          }
          85.417% {
            transform:translate(70px,107px);
          }
          87.5% {
            transform:translate(70px,107px);
          }
          89.583% {
            transform:translate(70px,107px);
          }
          91.667% {
            transform:translate(70px,107px);
          }
          93.75% {
            transform:translate(70px,107px);
          }
          95.833% {
            transform:translate(70px,107px);
          }
          97.917% {
            transform:translate(70px,107px);
          }
          100% {
            transform:translate(70px,107px);
          }
        }
        @keyframes bridles {
          0% {
            d:path('M53 37L57 60M70 39L70 60M87 37L83 60');
            opacity:1;
          }
          2.083% {
            d:path('M53 37L57 60M70 39L70 60M87 37L83 60');
            opacity:1;
          }
          4.167% {
            d:path('M53 37L57 60M70 39L70 60M87 37L83 60');
            opacity:1;
          }
          6.25% {
            d:path('M53 37L57 60M70 39L70 60M87 37L83 60');
            opacity:1;
          }
          8.333% {
            d:path('M53 37L57 60M70 39L70 60M87 37L83 60');
            opacity:1;
          }
          10.417% {
            d:path('M53 37L57 60.009M70 39L70 60.009M87 37L83 60.009');
            opacity:1;
          }
          12.5% {
            d:path('M53 37L57 60.305M70 39L70 60.305M87 37L83 60.305');
            opacity:1;
          }
          14.583% {
            d:path('M53 37L57 60.994M70 39L70 60.994M87 37L83 60.994');
            opacity:1;
          }
          16.667% {
            d:path('M53 37L57 62.041M70 39L70 62.041M87 37L83 62.041');
            opacity:1;
          }
          18.75% {
            d:path('M53 37L57 63.409M70 39L70 63.409M87 37L83 63.409');
            opacity:1;
          }
          20.833% {
            d:path('M53 37L57 65.061M70 39L70 65.061M87 37L83 65.061');
            opacity:1;
          }
          22.917% {
            d:path('M53 37L57 66.961M70 39L70 66.961M87 37L83 66.961');
            opacity:1;
          }
          25% {
            d:path('M53 37L57 69.072M70 39L70 69.072M87 37L83 69.072');
            opacity:1;
          }
          27.083% {
            d:path('M53 37L57 71.358M70 39L70 71.358M87 37L83 71.358');
            opacity:1;
          }
          29.167% {
            d:path('M53 37L57 73.783M70 39L70 73.783M87 37L83 73.783');
            opacity:1;
          }
          31.25% {
            d:path('M53 37L57 76.31M70 39L70 76.31M87 37L83 76.31');
            opacity:1;
          }
          33.333% {
            d:path('M53 37L57 78.903M70 39L70 78.903M87 37L83 78.903');
            opacity:1;
          }
          35.417% {
            d:path('M53 37L57 81.525M70 39L70 81.525M87 37L83 81.525');
            opacity:1;
          }
          37.5% {
            d:path('M53 37L57 84.139M70 39L70 84.139M87 37L83 84.139');
            opacity:1;
          }
          39.583% {
            d:path('M53 37L57 86.71M70 39L70 86.71M87 37L83 86.71');
            opacity:1;
          }
          41.667% {
            d:path('M53 37L57 89.201M70 39L70 89.201M87 37L83 89.201');
            opacity:1;
          }
          43.75% {
            d:path('M53 37L57 91.575M70 39L70 91.575M87 37L83 91.575');
            opacity:1;
          }
          45.833% {
            d:path('M53 37L57 93.796M70 39L70 93.796M87 37L83 93.796');
            opacity:1;
          }
          47.917% {
            d:path('M53 37L57 95.827M70 39L70 95.827M87 37L83 95.827');
            opacity:1;
          }
          50% {
            d:path('M53 37L57 97.632M70 39L70 97.632M87 37L83 97.632');
            opacity:1;
          }
          52.083% {
            d:path('M53 37L57 99.175M70 39L70 99.175M87 37L83 99.175');
            opacity:1;
          }
          54.167% {
            d:path('M53 37L57 100.418M70 39L70 100.418M87 37L83 100.418');
            opacity:1;
          }
          56.25% {
            d:path('M53 37L57 101.327M70 39L70 101.327M87 37L83 101.327');
            opacity:1;
          }
          58.333% {
            d:path('M53 37L57 101.863M70 39L70 101.863M87 37L83 101.863');
            opacity:1;
          }
          60.417% {
            d:path('M53 37L57 102M70 39L70 102M87 37L83 102');
            opacity:1;
          }
          62.5% {
            d:path('M53 37L57 102M70 39L70 102M87 37L83 102');
            opacity:1;
          }
          64.583% {
            d:path('M53 37L57 102M70 39L70 102M87 37L83 102');
            opacity:0;
          }
          66.667% {
            d:path('M53 37L57 102M70 39L70 102M87 37L83 102');
            opacity:0;
          }
          68.75% {
            d:path('M53.164 36.959L57 102M70.164 38.959L70 102M87.164 36.959L83 102');
            opacity:0;
          }
          70.833% {
            d:path('M55.183 36.454L57 102M72.183 38.454L70 102M89.183 36.454L83 102');
            opacity:0;
          }
          72.917% {
            d:path('M59.121 35.47L57 102M76.121 37.47L70 102M93.121 35.47L83 102');
            opacity:0;
          }
          75% {
            d:path('M64.486 34.128L57 102M81.486 36.128L70 102M98.486 34.128L83 102');
            opacity:0;
          }
          77.083% {
            d:path('M70.791 32.552L57 102M87.791 34.552L70 102M104.791 32.552L83 102');
            opacity:0;
          }
          79.167% {
            d:path('M77.545 30.864L57 102M94.545 32.864L70 102M111.545 30.864L83 102');
            opacity:0;
          }
          81.25% {
            d:path('M84.261 29.185L57 102M101.261 31.185L70 102M118.261 29.185L83 102');
            opacity:0;
          }
          83.333% {
            d:path('M90.448 27.638L57 102M107.448 29.638L70 102M124.448 27.638L83 102');
            opacity:0;
          }
          85.417% {
            d:path('M95.618 26.345L57 102M112.618 28.345L70 102M129.618 26.345L83 102');
            opacity:0;
          }
          87.5% {
            d:path('M99.281 25.43L57 102M116.281 27.43L70 102M133.281 25.43L83 102');
            opacity:0;
          }
          89.583% {
            d:path('M100.949 25.013L57 102M117.949 27.013L70 102M134.949 25.013L83 102');
            opacity:0;
          }
          91.667% {
            d:path('M101 25L57 102M118 27L70 102M135 25L83 102');
            opacity:0;
          }
          93.75% {
            d:path('M101 25L57 102M118 27L70 102M135 25L83 102');
            opacity:0;
          }
          95.833% {
            d:path('M101 25L57 102M118 27L70 102M135 25L83 102');
            opacity:0;
          }
          97.917% {
            d:path('M101 25L57 102M118 27L70 102M135 25L83 102');
            opacity:0;
          }
          100% {
            d:path('M101 25L57 102M118 27L70 102M135 25L83 102');
            opacity:0;
          }
        }
        @keyframes landingEpisode {
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
            opacity:0.777;
          }
          100% {
            opacity:0;
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .descent {
            transform:translate(70px,33px);
          }
          .rover {
            transform:translate(70px,107px);
          }
          .bridles {
            d:path('M53 37L57 102M70 39L70 102M87 37L83 102');
            opacity:1;
          }
          .landingEpisode {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Sky-Crane Landing">
        <g class="landingEpisode">
          <path d="M8 118L22 116 41 118H94L117 116 132 119V132H8Z" fill="#755b40"/>
          <circle cx="12" cy="121" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="54.495" cy="126.031" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="96.99" cy="123.062" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="23.485" cy="128.093" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="65.98" cy="125.124" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="108.475" cy="122.155" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="34.97" cy="127.186" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="77.465" cy="124.216" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="119.96" cy="121.247" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="46.455" cy="126.278" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="88.95" cy="123.309" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="15.446" cy="128.34" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="57.941" cy="125.371" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="100.436" cy="122.402" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="26.931" cy="127.433" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="69.426" cy="124.464" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="111.921" cy="121.495" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="38.416" cy="126.526" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="80.911" cy="123.557" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="123.406" cy="128.588" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="49.901" cy="125.619" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="92.396" cy="122.649" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="18.891" cy="127.68" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="61.386" cy="124.711" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="103.881" cy="121.742" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="30.376" cy="126.773" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="72.871" cy="123.804" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="115.366" cy="128.835" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="41.861" cy="125.866" r="0.6" fill="#bba37a" opacity=".25"/>
          <circle cx="84.356" cy="122.897" r="0.6" fill="#bba37a" opacity=".25"/>
          <g class="descent">
            <path d="M-22 0L-13 -9H13L22 0 12 6H-12Z" fill="#8ca49a" stroke="#d7d7b4"/>
            <path d="M-17 5L-23 17 -13 6M17 5L23 17 13 6" class="jets" fill="#d8ac71"/>
          </g>
          <g class="rover">
            <rect x="-17" y="-5" width="34" height="10" fill="#bcab77" stroke="#e3cf92"/>
            <circle cx="-13" cy="6" r="5" fill="#293934" stroke="#a9b39c"/>
            <circle cx="0" cy="6" r="5" fill="#293934" stroke="#a9b39c"/>
            <circle cx="13" cy="6" r="5" fill="#293934" stroke="#a9b39c"/>
            <path d="M-17 -5V-17H-22" stroke="#b7b995" stroke-width="2"/>
          </g>
          <path d="M53 37L57 60M70 39V60M87 37L83 60" class="bridles" stroke="#d1cfb0" stroke-width=".9" fill="none"/>
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

if (!customElements.get("concept-sky-crane-landing")) {
  customElements.define("concept-sky-crane-landing", ConceptSkyCraneLanding);
}
