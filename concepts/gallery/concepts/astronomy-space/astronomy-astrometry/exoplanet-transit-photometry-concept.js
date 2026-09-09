// Exoplanet Transit Photometry. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptExoplanetTransitPhotometry extends HTMLElement {
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
        .planet {
          animation:planet 16s linear infinite;
        }
        .cursor {
          animation:cursor 16s linear infinite;
        }
        @keyframes planet {
          0% {
            transform:translate(30px,43px);
          }
          2.083% {
            transform:translate(31.667px,43px);
          }
          4.167% {
            transform:translate(33.333px,43px);
          }
          6.25% {
            transform:translate(35px,43px);
          }
          8.333% {
            transform:translate(36.667px,43px);
          }
          10.417% {
            transform:translate(38.333px,43px);
          }
          12.5% {
            transform:translate(40px,43px);
          }
          14.583% {
            transform:translate(41.667px,43px);
          }
          16.667% {
            transform:translate(43.333px,43px);
          }
          18.75% {
            transform:translate(45px,43px);
          }
          20.833% {
            transform:translate(46.667px,43px);
          }
          22.917% {
            transform:translate(48.333px,43px);
          }
          25% {
            transform:translate(50px,43px);
          }
          27.083% {
            transform:translate(51.667px,43px);
          }
          29.167% {
            transform:translate(53.333px,43px);
          }
          31.25% {
            transform:translate(55px,43px);
          }
          33.333% {
            transform:translate(56.667px,43px);
          }
          35.417% {
            transform:translate(58.333px,43px);
          }
          37.5% {
            transform:translate(60px,43px);
          }
          39.583% {
            transform:translate(61.667px,43px);
          }
          41.667% {
            transform:translate(63.333px,43px);
          }
          43.75% {
            transform:translate(65px,43px);
          }
          45.833% {
            transform:translate(66.667px,43px);
          }
          47.917% {
            transform:translate(68.333px,43px);
          }
          50% {
            transform:translate(70px,43px);
          }
          52.083% {
            transform:translate(71.667px,43px);
          }
          54.167% {
            transform:translate(73.333px,43px);
          }
          56.25% {
            transform:translate(75px,43px);
          }
          58.333% {
            transform:translate(76.667px,43px);
          }
          60.417% {
            transform:translate(78.333px,43px);
          }
          62.5% {
            transform:translate(80px,43px);
          }
          64.583% {
            transform:translate(81.667px,43px);
          }
          66.667% {
            transform:translate(83.333px,43px);
          }
          68.75% {
            transform:translate(85px,43px);
          }
          70.833% {
            transform:translate(86.667px,43px);
          }
          72.917% {
            transform:translate(88.333px,43px);
          }
          75% {
            transform:translate(90px,43px);
          }
          77.083% {
            transform:translate(91.667px,43px);
          }
          79.167% {
            transform:translate(93.333px,43px);
          }
          81.25% {
            transform:translate(95px,43px);
          }
          83.333% {
            transform:translate(96.667px,43px);
          }
          85.417% {
            transform:translate(98.333px,43px);
          }
          87.5% {
            transform:translate(100px,43px);
          }
          89.583% {
            transform:translate(101.667px,43px);
          }
          91.667% {
            transform:translate(103.333px,43px);
          }
          93.75% {
            transform:translate(105px,43px);
          }
          95.833% {
            transform:translate(106.667px,43px);
          }
          97.917% {
            transform:translate(108.333px,43px);
          }
          100% {
            transform:translate(110px,43px);
          }
        }
        @keyframes cursor {
          0% {
            transform:translate(18px,99px);
          }
          2.083% {
            transform:translate(20.167px,99px);
          }
          4.167% {
            transform:translate(22.333px,99px);
          }
          6.25% {
            transform:translate(24.5px,99px);
          }
          8.333% {
            transform:translate(26.667px,99px);
          }
          10.417% {
            transform:translate(28.833px,99px);
          }
          12.5% {
            transform:translate(31px,99px);
          }
          14.583% {
            transform:translate(33.167px,100.833px);
          }
          16.667% {
            transform:translate(35.333px,104.017px);
          }
          18.75% {
            transform:translate(37.5px,107.873px);
          }
          20.833% {
            transform:translate(39.667px,112.055px);
          }
          22.917% {
            transform:translate(41.833px,116.25px);
          }
          25% {
            transform:translate(44px,120.069px);
          }
          27.083% {
            transform:translate(46.167px,122.785px);
          }
          29.167% {
            transform:translate(48.333px,123px);
          }
          31.25% {
            transform:translate(50.5px,123px);
          }
          33.333% {
            transform:translate(52.667px,123px);
          }
          35.417% {
            transform:translate(54.833px,123px);
          }
          37.5% {
            transform:translate(57px,123px);
          }
          39.583% {
            transform:translate(59.167px,123px);
          }
          41.667% {
            transform:translate(61.333px,123px);
          }
          43.75% {
            transform:translate(63.5px,123px);
          }
          45.833% {
            transform:translate(65.667px,123px);
          }
          47.917% {
            transform:translate(67.833px,123px);
          }
          50% {
            transform:translate(70px,123px);
          }
          52.083% {
            transform:translate(72.167px,123px);
          }
          54.167% {
            transform:translate(74.333px,123px);
          }
          56.25% {
            transform:translate(76.5px,123px);
          }
          58.333% {
            transform:translate(78.667px,123px);
          }
          60.417% {
            transform:translate(80.833px,123px);
          }
          62.5% {
            transform:translate(83px,123px);
          }
          64.583% {
            transform:translate(85.167px,123px);
          }
          66.667% {
            transform:translate(87.333px,123px);
          }
          68.75% {
            transform:translate(89.5px,123px);
          }
          70.833% {
            transform:translate(91.667px,123px);
          }
          72.917% {
            transform:translate(93.833px,122.785px);
          }
          75% {
            transform:translate(96px,120.069px);
          }
          77.083% {
            transform:translate(98.167px,116.25px);
          }
          79.167% {
            transform:translate(100.333px,112.055px);
          }
          81.25% {
            transform:translate(102.5px,107.873px);
          }
          83.333% {
            transform:translate(104.667px,104.017px);
          }
          85.417% {
            transform:translate(106.833px,100.833px);
          }
          87.5% {
            transform:translate(109px,99px);
          }
          89.583% {
            transform:translate(111.167px,99px);
          }
          91.667% {
            transform:translate(113.333px,99px);
          }
          93.75% {
            transform:translate(115.5px,99px);
          }
          95.833% {
            transform:translate(117.667px,99px);
          }
          97.917% {
            transform:translate(119.833px,99px);
          }
          100% {
            transform:translate(122px,99px);
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .planet {
            transform:translate(90px,43px);
          }
          .cursor {
            transform:translate(96px,120.069px);
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Exoplanet Transit Photometry">
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
        <circle cx="70" cy="43" r="25" fill="#9c7f4a" opacity=".3"/>
        <circle cx="70" cy="43" r="24" fill="#ead294"/>
        <circle cx="0" cy="0" r="6" class="planet" fill="#193d45" stroke="#6698a0"/>
        <path d="M16 92V127H126" fill="none" stroke="#6f9b8e"/>
        <path d="M18 99L124 99" stroke="#46675e" stroke-dasharray="2 3"/>
        <path d="M18 99L18.867 99L19.733 99L20.6 99L21.467 99L22.333 99L23.2 99L24.067 99L24.933 99L25.8 99L26.667 99L27.533 99L28.4 99L29.267 99L30.133 99L31 99L31.867 99.472L32.733 100.319L33.6 101.394L34.467 102.639L35.333 104.017L36.2 105.5L37.067 107.066L37.933 108.693L38.8 110.362L39.667 112.055L40.533 113.75L41.4 115.427L42.267 117.06L43.133 118.619L44 120.069L44.867 121.357L45.733 122.402L46.6 123L47.467 123L48.333 123L49.2 123L50.067 123L50.933 123L51.8 123L52.667 123L53.533 123L54.4 123L55.267 123L56.133 123L57 123L57.867 123L58.733 123L59.6 123L60.467 123L61.333 123L62.2 123L63.067 123L63.933 123L64.8 123L65.667 123L66.533 123L67.4 123L68.267 123L69.133 123L70 123L70.867 123L71.733 123L72.6 123L73.467 123L74.333 123L75.2 123L76.067 123L76.933 123L77.8 123L78.667 123L79.533 123L80.4 123L81.267 123L82.133 123L83 123L83.867 123L84.733 123L85.6 123L86.467 123L87.333 123L88.2 123L89.067 123L89.933 123L90.8 123L91.667 123L92.533 123L93.4 123L94.267 122.402L95.133 121.357L96 120.069L96.867 118.619L97.733 117.06L98.6 115.427L99.467 113.75L100.333 112.055L101.2 110.362L102.067 108.693L102.933 107.066L103.8 105.5L104.667 104.017L105.533 102.639L106.4 101.394L107.267 100.319L108.133 99.472L109 99L109.867 99L110.733 99L111.6 99L112.467 99L113.333 99L114.2 99L115.067 99L115.933 99L116.8 99L117.667 99L118.533 99L119.4 99L120.267 99L121.133 99L122 99" fill="none" stroke="#8cced6" stroke-width="1.5"/>
        <circle cx="0" cy="0" r="2.5" class="cursor" fill="#f0ce84"/>
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

if (!customElements.get("concept-exoplanet-transit-photometry")) {
  customElements.define("concept-exoplanet-transit-photometry", ConceptExoplanetTransitPhotometry);
}
