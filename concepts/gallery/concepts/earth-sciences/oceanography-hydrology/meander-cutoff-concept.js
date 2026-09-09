// Meander Cutoff. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptMeanderCutoff extends HTMLElement {
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
        .cut {
          animation:cutting 16s linear infinite;
        }
        .plugs {
          animation:plugs 16s linear infinite;
        }
        .newflow {
          animation:newflow 16s linear infinite;
        }
        .newflow {
          animation:newflow 16s linear infinite,flux 2s linear infinite;
        }
        .oldflow {
          animation:oldflow 16s linear infinite;
        }
        .oldflow {
          animation:oldflow 16s linear infinite,flux 2s linear infinite;
        }
        @media(prefers-reduced-motion:reduce) {
          .cut {
            stroke-width:11
          }
          .plugs,.newflow {
            opacity:1
          }
          .oldflow {
            opacity:0
          }
        }
        @keyframes cutting {
          0%,20% {
            stroke-width:0
          }
          40%,92% {
            stroke-width:11
          }
          100% {
            stroke-width:0
          }
        }
        @keyframes plugs {
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
            opacity:0.02;
          }
          58.333% {
            opacity:0.126;
          }
          60.417% {
            opacity:0.297;
          }
          62.5% {
            opacity:0.5;
          }
          64.583% {
            opacity:0.703;
          }
          66.667% {
            opacity:0.874;
          }
          68.75% {
            opacity:0.98;
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
            opacity:0.877;
          }
          95.833% {
            opacity:0.531;
          }
          97.917% {
            opacity:0.168;
          }
          100% {
            opacity:0;
          }
        }
        @keyframes newflow {
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
            opacity:0.067;
          }
          41.667% {
            opacity:0.305;
          }
          43.75% {
            opacity:0.612;
          }
          45.833% {
            opacity:0.88;
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
            opacity:0.877;
          }
          95.833% {
            opacity:0.531;
          }
          97.917% {
            opacity:0.168;
          }
          100% {
            opacity:0;
          }
        }
        @keyframes flux {
          to {
            stroke-dashoffset:-36
          }
        }
        @keyframes oldflow {
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
            opacity:0.986;
          }
          33.333% {
            opacity:0.91;
          }
          35.417% {
            opacity:0.783;
          }
          37.5% {
            opacity:0.624;
          }
          39.583% {
            opacity:0.451;
          }
          41.667% {
            opacity:0.284;
          }
          43.75% {
            opacity:0.141;
          }
          45.833% {
            opacity:0.04;
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
        @media(prefers-reduced-motion:reduce) {
          .cut {
            stroke-width:11
          }
          .plugs {
            opacity:1;
          }
          .newflow {
            opacity:1;
          }
          .oldflow {
            opacity:0;
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Meander Cutoff">
        <rect x="8" y="8" width="124" height="124" rx="8" fill="#213c2a"/>
        <circle cx="12" cy="12" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="54.495" cy="84.948" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="96.99" cy="41.897" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="23.485" cy="114.845" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="65.98" cy="71.794" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="108.475" cy="28.742" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="34.97" cy="101.691" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="77.465" cy="58.639" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="119.96" cy="15.588" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="46.455" cy="88.536" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="88.95" cy="45.485" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="15.446" cy="118.433" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="57.941" cy="75.381" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="100.436" cy="32.33" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="26.931" cy="105.278" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="69.426" cy="62.227" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="111.921" cy="19.175" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="38.416" cy="92.124" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="80.911" cy="49.072" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="123.406" cy="122.021" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="49.901" cy="78.969" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="92.396" cy="35.918" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="18.891" cy="108.866" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="61.386" cy="65.814" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="103.881" cy="22.763" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="30.376" cy="95.711" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="72.871" cy="52.66" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="115.366" cy="125.608" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="41.861" cy="82.557" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="84.356" cy="39.505" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="126.851" cy="112.454" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="53.347" cy="69.402" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="95.842" cy="26.351" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="22.337" cy="99.299" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="64.832" cy="56.247" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="107.327" cy="13.196" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="33.822" cy="86.144" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="76.317" cy="43.093" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="118.812" cy="116.041" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="45.307" cy="72.99" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="87.802" cy="29.938" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="14.297" cy="102.887" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="56.792" cy="59.835" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="99.287" cy="16.784" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="25.782" cy="89.732" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="68.277" cy="46.68" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="110.772" cy="119.629" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="37.267" cy="76.577" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="79.762" cy="33.526" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="122.257" cy="106.474" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="48.752" cy="63.423" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="91.248" cy="20.371" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="17.743" cy="93.32" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="60.238" cy="50.268" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="102.733" cy="123.216" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="29.228" cy="80.165" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="71.723" cy="37.113" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="114.218" cy="110.062" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="40.713" cy="67.01" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="83.208" cy="23.959" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="125.703" cy="96.907" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="52.198" cy="53.856" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="94.693" cy="126.804" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="21.188" cy="83.753" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="63.683" cy="40.701" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="106.178" cy="113.649" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="32.673" cy="70.598" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="75.168" cy="27.546" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="117.663" cy="100.495" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="44.158" cy="57.443" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="86.653" cy="14.392" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="13.149" cy="87.34" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="55.644" cy="44.289" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="98.139" cy="117.237" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="24.634" cy="74.186" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="67.129" cy="31.134" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="109.624" cy="104.082" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="36.119" cy="61.031" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="78.614" cy="17.979" r="0.6" fill="#bba37a" opacity=".25"/>
        <circle cx="121.109" cy="90.928" r="0.6" fill="#bba37a" opacity=".25"/>
        <path d="M12 25Q45 22 62 48C78 5 127 24 121 66C117 104 76 93 64 70Q49 99 15 115" fill="none" stroke="#b9ab73" stroke-width="17"/>
        <path d="M12 25Q45 22 62 48C78 5 127 24 121 66C117 104 76 93 64 70Q49 99 15 115" fill="none" stroke="#35788b" stroke-width="11"/>
        <path d="M62 48L64 70" class="cut" fill="none" stroke="#57a3ac" stroke-width="0"/>
        <path d="M67 24L84 34M67 88L83 78" class="plugs" fill="none" stroke="#b9ab73" stroke-width="10" opacity="0"/>
        <path d="M12 25Q45 22 62 48L64 70Q49 99 15 115" class="newflow" fill="none" stroke="#b8ece7" stroke-width="1.6" stroke-dasharray="3 15" opacity="0"/>
        <path d="M12 25Q45 22 62 48C78 5 127 24 121 66C117 104 76 93 64 70Q49 99 15 115" class="oldflow" fill="none" stroke="#a8dedf" stroke-width="1.3" stroke-dasharray="2 15"/>
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

if (!customElements.get("concept-meander-cutoff")) {
  customElements.define("concept-meander-cutoff", ConceptMeanderCutoff);
}
