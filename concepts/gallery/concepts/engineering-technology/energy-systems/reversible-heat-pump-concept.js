// Reversible Heat Pump. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptReversibleHeatPump extends HTMLElement {
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
        .house {
          fill:none;
          stroke:#284537;
          stroke-width:.8
        }
        .suction {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.4
        }
        .discharge {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.4
        }
        .compressor {
          fill:#12271e;
          stroke:#70edb1;
          stroke-width:1.4
        }
        .compressor-direction {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.4;
          animation:heatpump-flow 12s steps(1,end) infinite
        }
        .work {
          fill:none;
          stroke:#70edb1;
          stroke-width:1;
          animation:heatpump-flow 12s steps(1,end) infinite
        }
        .valve {
          fill:#07120f;
          stroke:#375b51;
          stroke-width:1
        }
        .valve-cold {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.6;
          animation:heatpump-cold-valve 12s steps(1,end) infinite
        }
        .valve-hot {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.6;
          animation:heatpump-hot-valve 12s steps(1,end) infinite
        }
        .valve-gap {
          fill:none;
          stroke:#07120f;
          stroke-width:4;
          animation:heatpump-hot-valve 12s steps(1,end) infinite
        }
        .outdoor {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.5;
          animation:heatpump-outdoor 12s steps(1,end) infinite
        }
        .indoor {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.5;
          animation:heatpump-indoor 12s steps(1,end) infinite
        }
        .expansion {
          fill:#07120f;
          stroke:#70edb1;
          stroke-width:1.2
        }
        .outdoor-heat {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.4;
          animation:heatpump-outdoor-arrow 12s steps(1,end) infinite,heatpump-flow 12s steps(1,end) infinite
        }
        .indoor-heat {
          fill:none;
          stroke:#f3c977;
          stroke-width:1.4;
          animation:heatpump-indoor-arrow 12s steps(1,end) infinite,heatpump-flow 12s steps(1,end) infinite
        }
        .heating-marker,.cooling-marker {
          fill:#70edb1;
          stroke:#07120f;
          stroke-width:.5
        }
        .heating-marker {
          animation:heatpump-heating-motion 12s linear infinite,heatpump-heating 12s steps(1,end) infinite
        }
        .cooling-marker {
          opacity:0;
          animation:heatpump-cooling-motion 12s linear infinite,heatpump-cooling 12s steps(1,end) infinite
        }
        @keyframes heatpump-heating-motion {
          0.0000% {
            transform:translate(78px,21px)
          }
          0.6279% {
            transform:translate(86px,21px)
          }
          2.1190% {
            transform:translate(86px,40px)
          }
          2.9038% {
            transform:translate(76px,40px)
          }
          3.6102% {
            transform:translate(76px,49px)
          }
          4.6660% {
            transform:translate(86px,58px)
          }
          6.5496% {
            transform:translate(110px,58px)
          }
          7.1775% {
            transform:translate(110px,66px)
          }
          7.9623% {
            transform:translate(120px,66px)
          }
          8.4332% {
            transform:translate(120px,72px)
          }
          10.0028% {
            transform:translate(100px,72px)
          }
          10.4737% {
            transform:translate(100px,78px)
          }
          12.0433% {
            transform:translate(120px,78px)
          }
          12.5142% {
            transform:translate(120px,84px)
          }
          14.0839% {
            transform:translate(100px,84px)
          }
          14.5548% {
            transform:translate(100px,90px)
          }
          15.3396% {
            transform:translate(110px,90px)
          }
          15.8105% {
            transform:translate(110px,96px)
          }
          17.0662% {
            transform:translate(110px,112px)
          }
          19.5776% {
            transform:translate(78px,112px)
          }
          20.8333% {
            transform:translate(62px,112px)
          }
          23.3448% {
            transform:translate(30px,112px)
          }
          24.6005% {
            transform:translate(30px,96px)
          }
          25.0714% {
            transform:translate(30px,90px)
          }
          25.8562% {
            transform:translate(20px,90px)
          }
          26.3271% {
            transform:translate(20px,84px)
          }
          27.8967% {
            transform:translate(40px,84px)
          }
          28.3676% {
            transform:translate(40px,78px)
          }
          29.9372% {
            transform:translate(20px,78px)
          }
          30.4081% {
            transform:translate(20px,72px)
          }
          31.9778% {
            transform:translate(40px,72px)
          }
          32.4487% {
            transform:translate(40px,66px)
          }
          33.2335% {
            transform:translate(30px,66px)
          }
          33.8613% {
            transform:translate(30px,58px)
          }
          35.7449% {
            transform:translate(54px,58px)
          }
          36.8008% {
            transform:translate(64px,49px)
          }
          37.5071% {
            transform:translate(64px,40px)
          }
          38.2919% {
            transform:translate(54px,40px)
          }
          39.7831% {
            transform:translate(54px,21px)
          }
          40.4110% {
            transform:translate(62px,21px)
          }
          41.6667% {
            transform:translate(78px,21px)
          }
        }
        @keyframes heatpump-cooling-motion {
          50.0000% {
            transform:translate(78px,21px)
          }
          50.6044% {
            transform:translate(86px,21px)
          }
          52.0397% {
            transform:translate(86px,40px)
          }
          52.7952% {
            transform:translate(76px,40px)
          }
          53.4751% {
            transform:translate(76px,49px)
          }
          55.2708% {
            transform:translate(54px,58px)
          }
          57.0839% {
            transform:translate(30px,58px)
          }
          57.6883% {
            transform:translate(30px,66px)
          }
          58.4438% {
            transform:translate(40px,66px)
          }
          58.8970% {
            transform:translate(40px,72px)
          }
          60.4080% {
            transform:translate(20px,72px)
          }
          60.8612% {
            transform:translate(20px,78px)
          }
          62.3722% {
            transform:translate(40px,78px)
          }
          62.8254% {
            transform:translate(40px,84px)
          }
          64.3364% {
            transform:translate(20px,84px)
          }
          64.7896% {
            transform:translate(20px,90px)
          }
          65.5451% {
            transform:translate(30px,90px)
          }
          65.9984% {
            transform:translate(30px,96px)
          }
          67.2071% {
            transform:translate(30px,112px)
          }
          69.6246% {
            transform:translate(62px,112px)
          }
          70.8333% {
            transform:translate(78px,112px)
          }
          73.2508% {
            transform:translate(110px,112px)
          }
          74.4595% {
            transform:translate(110px,96px)
          }
          74.9128% {
            transform:translate(110px,90px)
          }
          75.6683% {
            transform:translate(100px,90px)
          }
          76.1216% {
            transform:translate(100px,84px)
          }
          77.6325% {
            transform:translate(120px,84px)
          }
          78.0858% {
            transform:translate(120px,78px)
          }
          79.5967% {
            transform:translate(100px,78px)
          }
          80.0500% {
            transform:translate(100px,72px)
          }
          81.5609% {
            transform:translate(120px,72px)
          }
          82.0142% {
            transform:translate(120px,66px)
          }
          82.7696% {
            transform:translate(110px,66px)
          }
          83.3740% {
            transform:translate(110px,58px)
          }
          85.1871% {
            transform:translate(86px,58px)
          }
          86.9828% {
            transform:translate(64px,49px)
          }
          87.6627% {
            transform:translate(64px,40px)
          }
          88.4182% {
            transform:translate(54px,40px)
          }
          89.8536% {
            transform:translate(54px,21px)
          }
          90.4579% {
            transform:translate(62px,21px)
          }
          91.6667% {
            transform:translate(78px,21px)
          }
        }
        @keyframes heatpump-flow {
          0% {
            opacity:1
          }
          41.6667% {
            opacity:0
          }
          50% {
            opacity:1
          }
          91.6667% {
            opacity:0
          }
        }
        @keyframes heatpump-heating {
          0% {
            opacity:1
          }
          41.6667%,100% {
            opacity:0
          }
        }
        @keyframes heatpump-cooling {
          0% {
            opacity:0
          }
          50% {
            opacity:1
          }
          91.6667%,100% {
            opacity:0
          }
        }
        @keyframes heatpump-cold-valve {
          0% {
            d:path("M54 58L64 49")
          }
          45.8333% {
            d:path("M86 58L64 49")
          }
          95.8333% {
            d:path("M54 58L64 49")
          }
        }
        @keyframes heatpump-hot-valve {
          0% {
            d:path("M76 49L86 58")
          }
          45.8333% {
            d:path("M76 49L54 58")
          }
          95.8333% {
            d:path("M76 49L86 58")
          }
        }
        @keyframes heatpump-outdoor {
          0% {
            stroke:#77c9ef
          }
          45.8333% {
            stroke:#f3c977
          }
          95.8333% {
            stroke:#77c9ef
          }
        }
        @keyframes heatpump-indoor {
          0% {
            stroke:#f3c977
          }
          45.8333% {
            stroke:#77c9ef
          }
          95.8333% {
            stroke:#f3c977
          }
        }
        @keyframes heatpump-outdoor-arrow {
          0% {
            d:path("M7 80H16M12 77L16 80L12 83");
            stroke:#77c9ef
          }
          45.8333% {
            d:path("M16 80H7M11 77L7 80L11 83");
            stroke:#f3c977
          }
          95.8333% {
            d:path("M7 80H16M12 77L16 80L12 83");
            stroke:#77c9ef
          }
        }
        @keyframes heatpump-indoor-arrow {
          0% {
            d:path("M123 80H134M130 77L134 80L130 83");
            stroke:#f3c977
          }
          45.8333% {
            d:path("M134 80H123M127 77L123 80L127 83");
            stroke:#77c9ef
          }
          95.8333% {
            d:path("M123 80H134M130 77L134 80L130 83");
            stroke:#f3c977
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Reversible Heat Pump">
        <path class="house" d="M92 66V103H130V66M89 66L111 48L133 66"/>
        <path class="suction" d="M62 21H54V40H64V49"/>
        <path class="discharge" d="M78 21H86V40H76V49"/>
        <circle class="compressor" cx="70" cy="21" r="8"/>
        <path class="compressor-direction" d="M65 21H75M72 18L75 21L72 24"/>
        <path class="work" d="M70 5V11M67 8L70 11L73 8"/>
        <rect class="valve" x="54" y="49" width="32" height="18" rx="3"/>
        <path class="valve-cold" d="M54 58L64 49"/>
        <path class="valve-gap" d="M76 49L86 58"/>
        <path class="valve-hot" d="M76 49L86 58"/>
        <path class="outdoor" d="M54 58H30V66L40,66L40,72L20,72L20,78L40,78L40,84L20,84L20,90L30,90L30,96V112H62"/>
        <path class="indoor" d="M86 58H110V66L120,66L120,72L100,72L100,78L120,78L120,84L100,84L100,90L110,90L110,96V112H78"/>
        <path class="expansion" d="M62 107L78 117V107L62 117Z"/>
        <path class="outdoor-heat" d="M7 80H16M12 77L16 80L12 83"/>
        <path class="indoor-heat" d="M123 80H134M130 77L134 80L130 83"/>
        <circle class="heating-marker" r="2" transform="translate(110,78)"/>
        <circle class="cooling-marker" r="2" transform="translate(30,78)"/>
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

if (!customElements.get("concept-reversible-heat-pump")) {
  customElements.define("concept-reversible-heat-pump", ConceptReversibleHeatPump);
}
