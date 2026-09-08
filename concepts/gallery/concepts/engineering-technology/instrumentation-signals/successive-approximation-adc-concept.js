// Successive-Approximation ADC. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSuccessiveApproximationAdc extends HTMLElement {
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
        .weight {
          stroke-width:1.1
        }
        .fraction {
          fill:#c1d7cb;
          font:9px monospace;
          text-anchor:middle
        }
        .digit {
          fill:#70edb1;
          font:12px monospace;
          text-anchor:middle
        }
        .bit-box {
          fill:#10251c;
          stroke:#375b51
        }
        .vin {
          fill:none;
          stroke:#77c9ef;
          stroke-width:1.7
        }
        .dac {
          fill:none;
          stroke:#70edb1;
          stroke-width:1.7;
          animation:sar-dac 12s steps(1,end) infinite
        }
        .polarity {
          fill:#a3bfb0;
          font:9px monospace
        }
        .accepted {
          opacity: 1;
          animation:sar-accept 12s steps(1,end) infinite
        }
        .rejected {
          fill:none;
          stroke:#ed8eab;
          stroke-width:2;
          opacity: 0;
          animation:sar-reject 12s steps(1,end) infinite
        }
        .sar-cycle {
          animation:sar-cycle 12s linear infinite
        }
        @keyframes sar-dac {
          0% {
            d:path("M24 106H64L76 98H88")
          }
          8.333% {
            d:path("M24 86H64L76 98H88")
          }
          16.667% {
            d:path("M24 86H64L76 98H88")
          }
          20.833% {
            d:path("M24 76H64L76 98H88")
          }
          29.167% {
            d:path("M24 86H64L76 98H88")
          }
          33.333% {
            d:path("M24 81H64L76 98H88")
          }
          41.667% {
            d:path("M24 81H64L76 98H88")
          }
          45.833% {
            d:path("M24 78.5H64L76 98H88")
          }
          54.167% {
            d:path("M24 81H64L76 98H88")
          }
        }
        @keyframes sar-accept {
          0% {
            opacity:0
          }
          16.667% {
            opacity:1
          }
          20.833% {
            opacity:0
          }
          41.667% {
            opacity:1
          }
          45.833% {
            opacity:0
          }
          54.167% {
            opacity:1
          }
        }
        @keyframes sar-reject {
          0% {
            opacity:0
          }
          27.5% {
            opacity:1
          }
          29.1667% {
            opacity:0
          }
          52.5% {
            opacity:1
          }
          54.1667% {
            opacity:0
          }
        }
        @keyframes sar-cycle {
          0%,91.667%,100% {
            opacity:0
          }
          5%,83.333% {
            opacity:1
          }
        }
        .w0 {
          fill:#255943;
          animation:sar-weight-0 12s steps(1,end) infinite
        }
        .o0 {
          opacity:1;
          animation:sar-one-0 12s steps(1,end) infinite
        }
        .z0 {
          opacity:0;
          animation:sar-zero-0 12s steps(1,end) infinite
        }
        @keyframes sar-weight-0 {
          0% {
            fill:#10251c;
            stroke:#70edb1
          }
          8.333% {
            fill:#755823;
            stroke:#f3c977
          }
          16.667% {
            fill:#255943;
            stroke:#70edb1
          }
          20.833% {
            fill:#255943;
            stroke:#70edb1
          }
          29.167% {
            fill:#255943;
            stroke:#70edb1
          }
          33.333% {
            fill:#255943;
            stroke:#70edb1
          }
          41.667% {
            fill:#255943;
            stroke:#70edb1
          }
          45.833% {
            fill:#255943;
            stroke:#70edb1
          }
          54.167% {
            fill:#255943;
            stroke:#70edb1
          }
        }
        @keyframes sar-one-0 {
          0% {
            opacity:0
          }
          8.333% {
            opacity:1
          }
          16.667% {
            opacity:1
          }
          20.833% {
            opacity:1
          }
          29.167% {
            opacity:1
          }
          33.333% {
            opacity:1
          }
          41.667% {
            opacity:1
          }
          45.833% {
            opacity:1
          }
          54.167% {
            opacity:1
          }
        }
        @keyframes sar-zero-0 {
          0% {
            opacity:1
          }
          8.333% {
            opacity:0
          }
          16.667% {
            opacity:0
          }
          20.833% {
            opacity:0
          }
          29.167% {
            opacity:0
          }
          33.333% {
            opacity:0
          }
          41.667% {
            opacity:0
          }
          45.833% {
            opacity:0
          }
          54.167% {
            opacity:0
          }
        }
        .w1 {
          fill:#10251c;
          animation:sar-weight-1 12s steps(1,end) infinite
        }
        .o1 {
          opacity:0;
          animation:sar-one-1 12s steps(1,end) infinite
        }
        .z1 {
          opacity:1;
          animation:sar-zero-1 12s steps(1,end) infinite
        }
        @keyframes sar-weight-1 {
          0% {
            fill:#10251c;
            stroke:#70edb1
          }
          8.333% {
            fill:#10251c;
            stroke:#70edb1
          }
          16.667% {
            fill:#10251c;
            stroke:#70edb1
          }
          20.833% {
            fill:#755823;
            stroke:#f3c977
          }
          29.167% {
            fill:#10251c;
            stroke:#70edb1
          }
          33.333% {
            fill:#10251c;
            stroke:#70edb1
          }
          41.667% {
            fill:#10251c;
            stroke:#70edb1
          }
          45.833% {
            fill:#10251c;
            stroke:#70edb1
          }
          54.167% {
            fill:#10251c;
            stroke:#70edb1
          }
        }
        @keyframes sar-one-1 {
          0% {
            opacity:0
          }
          8.333% {
            opacity:0
          }
          16.667% {
            opacity:0
          }
          20.833% {
            opacity:1
          }
          29.167% {
            opacity:0
          }
          33.333% {
            opacity:0
          }
          41.667% {
            opacity:0
          }
          45.833% {
            opacity:0
          }
          54.167% {
            opacity:0
          }
        }
        @keyframes sar-zero-1 {
          0% {
            opacity:1
          }
          8.333% {
            opacity:1
          }
          16.667% {
            opacity:1
          }
          20.833% {
            opacity:0
          }
          29.167% {
            opacity:1
          }
          33.333% {
            opacity:1
          }
          41.667% {
            opacity:1
          }
          45.833% {
            opacity:1
          }
          54.167% {
            opacity:1
          }
        }
        .w2 {
          fill:#255943;
          animation:sar-weight-2 12s steps(1,end) infinite
        }
        .o2 {
          opacity:1;
          animation:sar-one-2 12s steps(1,end) infinite
        }
        .z2 {
          opacity:0;
          animation:sar-zero-2 12s steps(1,end) infinite
        }
        @keyframes sar-weight-2 {
          0% {
            fill:#10251c;
            stroke:#70edb1
          }
          8.333% {
            fill:#10251c;
            stroke:#70edb1
          }
          16.667% {
            fill:#10251c;
            stroke:#70edb1
          }
          20.833% {
            fill:#10251c;
            stroke:#70edb1
          }
          29.167% {
            fill:#10251c;
            stroke:#70edb1
          }
          33.333% {
            fill:#755823;
            stroke:#f3c977
          }
          41.667% {
            fill:#255943;
            stroke:#70edb1
          }
          45.833% {
            fill:#255943;
            stroke:#70edb1
          }
          54.167% {
            fill:#255943;
            stroke:#70edb1
          }
        }
        @keyframes sar-one-2 {
          0% {
            opacity:0
          }
          8.333% {
            opacity:0
          }
          16.667% {
            opacity:0
          }
          20.833% {
            opacity:0
          }
          29.167% {
            opacity:0
          }
          33.333% {
            opacity:1
          }
          41.667% {
            opacity:1
          }
          45.833% {
            opacity:1
          }
          54.167% {
            opacity:1
          }
        }
        @keyframes sar-zero-2 {
          0% {
            opacity:1
          }
          8.333% {
            opacity:1
          }
          16.667% {
            opacity:1
          }
          20.833% {
            opacity:1
          }
          29.167% {
            opacity:1
          }
          33.333% {
            opacity:0
          }
          41.667% {
            opacity:0
          }
          45.833% {
            opacity:0
          }
          54.167% {
            opacity:0
          }
        }
        .w3 {
          fill:#10251c;
          animation:sar-weight-3 12s steps(1,end) infinite
        }
        .o3 {
          opacity:0;
          animation:sar-one-3 12s steps(1,end) infinite
        }
        .z3 {
          opacity:1;
          animation:sar-zero-3 12s steps(1,end) infinite
        }
        @keyframes sar-weight-3 {
          0% {
            fill:#10251c;
            stroke:#70edb1
          }
          8.333% {
            fill:#10251c;
            stroke:#70edb1
          }
          16.667% {
            fill:#10251c;
            stroke:#70edb1
          }
          20.833% {
            fill:#10251c;
            stroke:#70edb1
          }
          29.167% {
            fill:#10251c;
            stroke:#70edb1
          }
          33.333% {
            fill:#10251c;
            stroke:#70edb1
          }
          41.667% {
            fill:#10251c;
            stroke:#70edb1
          }
          45.833% {
            fill:#755823;
            stroke:#f3c977
          }
          54.167% {
            fill:#10251c;
            stroke:#70edb1
          }
        }
        @keyframes sar-one-3 {
          0% {
            opacity:0
          }
          8.333% {
            opacity:0
          }
          16.667% {
            opacity:0
          }
          20.833% {
            opacity:0
          }
          29.167% {
            opacity:0
          }
          33.333% {
            opacity:0
          }
          41.667% {
            opacity:0
          }
          45.833% {
            opacity:1
          }
          54.167% {
            opacity:0
          }
        }
        @keyframes sar-zero-3 {
          0% {
            opacity:1
          }
          8.333% {
            opacity:1
          }
          16.667% {
            opacity:1
          }
          20.833% {
            opacity:1
          }
          29.167% {
            opacity:1
          }
          33.333% {
            opacity:1
          }
          41.667% {
            opacity:1
          }
          45.833% {
            opacity:0
          }
          54.167% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Successive-Approximation ADC">
        <g class="sar-cycle">
          <g>
            <rect class="weight w0" x="18" y="24" width="22" height="24" rx="2"/>
            <text class="fraction" x="29" y="39">1/2</text>
            <path class="ink muted" d="M29 48V58"/>
            <rect class="bit-box" x="20" y="113" width="18" height="16" rx="2"/>
            <text class="digit zero z0" x="29" y="125">0</text>
            <text class="digit one o0" x="29" y="125">1</text>
          </g>
          <g>
            <rect class="weight w1" x="46" y="24" width="22" height="24" rx="2"/>
            <text class="fraction" x="57" y="39">1/4</text>
            <path class="ink muted" d="M57 48V58"/>
            <rect class="bit-box" x="48" y="113" width="18" height="16" rx="2"/>
            <text class="digit zero z1" x="57" y="125">0</text>
            <text class="digit one o1" x="57" y="125">1</text>
          </g>
          <g>
            <rect class="weight w2" x="74" y="24" width="22" height="24" rx="2"/>
            <text class="fraction" x="85" y="39">1/8</text>
            <path class="ink muted" d="M85 48V58"/>
            <rect class="bit-box" x="76" y="113" width="18" height="16" rx="2"/>
            <text class="digit zero z2" x="85" y="125">0</text>
            <text class="digit one o2" x="85" y="125">1</text>
          </g>
          <g>
            <rect class="weight w3" x="102" y="24" width="22" height="24" rx="2"/>
            <text class="fraction" x="113" y="39">1/16</text>
            <path class="ink muted" d="M113 48V58"/>
            <rect class="bit-box" x="104" y="113" width="18" height="16" rx="2"/>
            <text class="digit zero z3" x="113" y="125">0</text>
            <text class="digit one o3" x="113" y="125">1</text>
          </g>
          <path class="ink muted" d="M29 58H113M70 58V64M20 69V107M20 107H67"/>
          <path class="vin" d="M24 78.8H64L76 78H88"/>
          <path class="dac" d="M24 81H64L76 98H88"/>
          <path class="ink paper" d="M88 71L108 88L88 105Z"/>
          <text class="polarity" x="91" y="81">+</text>
          <text class="polarity" x="91" y="101">−</text>
          <path class="ink" d="M108 88H112"/>
          <path class="accepted ink" d="M114 88L118 92L125 81"/>
          <path class="rejected" d="M115 83L124 92M124 83L115 92"/>
          <circle class="cool" cx="20" cy="78.8" r="2.3"/>
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

if (!customElements.get("concept-successive-approximation-adc")) {
  customElements.define("concept-successive-approximation-adc", ConceptSuccessiveApproximationAdc);
}
