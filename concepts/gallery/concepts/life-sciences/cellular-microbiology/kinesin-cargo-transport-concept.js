// Kinesin Cargo Transport. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptKinesinCargoTransport extends HTMLElement {
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
        .tubulin {
          fill:#24483e;
          stroke:#568474;
          stroke-width:.7
        }
        .vesicle {
          fill:#244e3b
        }
        .motor {
          animation:visibility 12s linear infinite
        }
        .neck-b {
          stroke:#77c9ef
        }
        .cargo {
          animation:cargo 12s linear infinite
        }
        .head-a {
          animation:head-a 12s linear infinite
        }
        .head-b {
          animation:head-b 12s linear infinite
        }
        .neck-a {
          animation:neck-a 12s linear infinite
        }
        .neck-b {
          animation:neck-b 12s linear infinite
        }
        @keyframes visibility {
          0%,94%,100% {
            opacity:0
          }
          6%,88% {
            opacity:1
          }
        }
        @keyframes cargo {
          0% {
            transform:translateX(34px)
          }
          2.5% {
            transform:translateX(34px)
          }
          5% {
            transform:translateX(34px)
          }
          7.5% {
            transform:translateX(34px)
          }
          10% {
            transform:translateX(34px)
          }
          12.5% {
            transform:translateX(34px)
          }
          15% {
            transform:translateX(34px)
          }
          17.5% {
            transform:translateX(36px)
          }
          20% {
            transform:translateX(38px)
          }
          22.5% {
            transform:translateX(40px)
          }
          25% {
            transform:translateX(42px)
          }
          27.5% {
            transform:translateX(44px)
          }
          30% {
            transform:translateX(46px)
          }
          32.5% {
            transform:translateX(48px)
          }
          35% {
            transform:translateX(50px)
          }
          37.5% {
            transform:translateX(52px)
          }
          40% {
            transform:translateX(54px)
          }
          42.5% {
            transform:translateX(56px)
          }
          45% {
            transform:translateX(58px)
          }
          47.5% {
            transform:translateX(60px)
          }
          50% {
            transform:translateX(62px)
          }
          52.5% {
            transform:translateX(64px)
          }
          55% {
            transform:translateX(66px)
          }
          57.5% {
            transform:translateX(68px)
          }
          60% {
            transform:translateX(70px)
          }
          62.5% {
            transform:translateX(72px)
          }
          65% {
            transform:translateX(74px)
          }
          67.5% {
            transform:translateX(76px)
          }
          70% {
            transform:translateX(78px)
          }
          72.5% {
            transform:translateX(80px)
          }
          75% {
            transform:translateX(82px)
          }
          77.5% {
            transform:translateX(82px)
          }
          80% {
            transform:translateX(82px)
          }
          82.5% {
            transform:translateX(82px)
          }
          85% {
            transform:translateX(82px)
          }
          87.5% {
            transform:translateX(82px)
          }
          90% {
            transform:translateX(82px)
          }
          92.5% {
            transform:translateX(82px)
          }
          95% {
            transform:translateX(82px)
          }
          97.5% {
            transform:translateX(82px)
          }
          100% {
            transform:translateX(82px)
          }
        }
        @keyframes head-a {
          0% {
            transform:translate(26px,98px)
          }
          2.5% {
            transform:translate(26px,98px)
          }
          5% {
            transform:translate(26px,98px)
          }
          7.5% {
            transform:translate(26px,98px)
          }
          10% {
            transform:translate(26px,98px)
          }
          12.5% {
            transform:translate(26px,98px)
          }
          15% {
            transform:translate(26px,98px)
          }
          17.5% {
            transform:translate(30px,90.729px)
          }
          20% {
            transform:translate(34px,84.565px)
          }
          22.5% {
            transform:translate(38px,80.446px)
          }
          25% {
            transform:translate(42px,79px)
          }
          27.5% {
            transform:translate(46px,80.446px)
          }
          30% {
            transform:translate(50px,84.565px)
          }
          32.5% {
            transform:translate(54px,90.729px)
          }
          35% {
            transform:translate(58px,98px)
          }
          37.5% {
            transform:translate(58px,98px)
          }
          40% {
            transform:translate(58px,98px)
          }
          42.5% {
            transform:translate(58px,98px)
          }
          45% {
            transform:translate(58px,98px)
          }
          47.5% {
            transform:translate(58px,98px)
          }
          50% {
            transform:translate(58px,98px)
          }
          52.5% {
            transform:translate(58px,98px)
          }
          55% {
            transform:translate(58px,98px)
          }
          57.5% {
            transform:translate(62px,90.729px)
          }
          60% {
            transform:translate(66px,84.565px)
          }
          62.5% {
            transform:translate(70px,80.446px)
          }
          65% {
            transform:translate(74px,79px)
          }
          67.5% {
            transform:translate(78px,80.446px)
          }
          70% {
            transform:translate(82px,84.565px)
          }
          72.5% {
            transform:translate(86px,90.729px)
          }
          75% {
            transform:translate(90px,98px)
          }
          77.5% {
            transform:translate(90px,98px)
          }
          80% {
            transform:translate(90px,98px)
          }
          82.5% {
            transform:translate(90px,98px)
          }
          85% {
            transform:translate(90px,98px)
          }
          87.5% {
            transform:translate(90px,98px)
          }
          90% {
            transform:translate(90px,98px)
          }
          92.5% {
            transform:translate(90px,98px)
          }
          95% {
            transform:translate(90px,98px)
          }
          97.5% {
            transform:translate(90px,98px)
          }
          100% {
            transform:translate(90px,98px)
          }
        }
        @keyframes head-b {
          0% {
            transform:translate(42px,98px)
          }
          2.5% {
            transform:translate(42px,98px)
          }
          5% {
            transform:translate(42px,98px)
          }
          7.5% {
            transform:translate(42px,98px)
          }
          10% {
            transform:translate(42px,98px)
          }
          12.5% {
            transform:translate(42px,98px)
          }
          15% {
            transform:translate(42px,98px)
          }
          17.5% {
            transform:translate(42px,98px)
          }
          20% {
            transform:translate(42px,98px)
          }
          22.5% {
            transform:translate(42px,98px)
          }
          25% {
            transform:translate(42px,98px)
          }
          27.5% {
            transform:translate(42px,98px)
          }
          30% {
            transform:translate(42px,98px)
          }
          32.5% {
            transform:translate(42px,98px)
          }
          35% {
            transform:translate(42px,98px)
          }
          37.5% {
            transform:translate(46px,90.729px)
          }
          40% {
            transform:translate(50px,84.565px)
          }
          42.5% {
            transform:translate(54px,80.446px)
          }
          45% {
            transform:translate(58px,79px)
          }
          47.5% {
            transform:translate(62px,80.446px)
          }
          50% {
            transform:translate(66px,84.565px)
          }
          52.5% {
            transform:translate(70px,90.729px)
          }
          55% {
            transform:translate(74px,98px)
          }
          57.5% {
            transform:translate(74px,98px)
          }
          60% {
            transform:translate(74px,98px)
          }
          62.5% {
            transform:translate(74px,98px)
          }
          65% {
            transform:translate(74px,98px)
          }
          67.5% {
            transform:translate(74px,98px)
          }
          70% {
            transform:translate(74px,98px)
          }
          72.5% {
            transform:translate(74px,98px)
          }
          75% {
            transform:translate(74px,98px)
          }
          77.5% {
            transform:translate(74px,98px)
          }
          80% {
            transform:translate(74px,98px)
          }
          82.5% {
            transform:translate(74px,98px)
          }
          85% {
            transform:translate(74px,98px)
          }
          87.5% {
            transform:translate(74px,98px)
          }
          90% {
            transform:translate(74px,98px)
          }
          92.5% {
            transform:translate(74px,98px)
          }
          95% {
            transform:translate(74px,98px)
          }
          97.5% {
            transform:translate(74px,98px)
          }
          100% {
            transform:translate(74px,98px)
          }
        }
        @keyframes neck-a {
          0% {
            d:path('M26,98Q26,79 34,72')
          }
          2.5% {
            d:path('M26,98Q26,79 34,72')
          }
          5% {
            d:path('M26,98Q26,79 34,72')
          }
          7.5% {
            d:path('M26,98Q26,79 34,72')
          }
          10% {
            d:path('M26,98Q26,79 34,72')
          }
          12.5% {
            d:path('M26,98Q26,79 34,72')
          }
          15% {
            d:path('M26,98Q26,79 34,72')
          }
          17.5% {
            d:path('M30,90.729Q30,79 36,72')
          }
          20% {
            d:path('M34,84.565Q34,79 38,72')
          }
          22.5% {
            d:path('M38,80.446Q38,79 40,72')
          }
          25% {
            d:path('M42,79Q42,79 42,72')
          }
          27.5% {
            d:path('M46,80.446Q46,79 44,72')
          }
          30% {
            d:path('M50,84.565Q50,79 46,72')
          }
          32.5% {
            d:path('M54,90.729Q54,79 48,72')
          }
          35% {
            d:path('M58,98Q58,79 50,72')
          }
          37.5% {
            d:path('M58,98Q58,79 52,72')
          }
          40% {
            d:path('M58,98Q58,79 54,72')
          }
          42.5% {
            d:path('M58,98Q58,79 56,72')
          }
          45% {
            d:path('M58,98Q58,79 58,72')
          }
          47.5% {
            d:path('M58,98Q58,79 60,72')
          }
          50% {
            d:path('M58,98Q58,79 62,72')
          }
          52.5% {
            d:path('M58,98Q58,79 64,72')
          }
          55% {
            d:path('M58,98Q58,79 66,72')
          }
          57.5% {
            d:path('M62,90.729Q62,79 68,72')
          }
          60% {
            d:path('M66,84.565Q66,79 70,72')
          }
          62.5% {
            d:path('M70,80.446Q70,79 72,72')
          }
          65% {
            d:path('M74,79Q74,79 74,72')
          }
          67.5% {
            d:path('M78,80.446Q78,79 76,72')
          }
          70% {
            d:path('M82,84.565Q82,79 78,72')
          }
          72.5% {
            d:path('M86,90.729Q86,79 80,72')
          }
          75% {
            d:path('M90,98Q90,79 82,72')
          }
          77.5% {
            d:path('M90,98Q90,79 82,72')
          }
          80% {
            d:path('M90,98Q90,79 82,72')
          }
          82.5% {
            d:path('M90,98Q90,79 82,72')
          }
          85% {
            d:path('M90,98Q90,79 82,72')
          }
          87.5% {
            d:path('M90,98Q90,79 82,72')
          }
          90% {
            d:path('M90,98Q90,79 82,72')
          }
          92.5% {
            d:path('M90,98Q90,79 82,72')
          }
          95% {
            d:path('M90,98Q90,79 82,72')
          }
          97.5% {
            d:path('M90,98Q90,79 82,72')
          }
          100% {
            d:path('M90,98Q90,79 82,72')
          }
        }
        @keyframes neck-b {
          0% {
            d:path('M42,98Q42,79 34,72')
          }
          2.5% {
            d:path('M42,98Q42,79 34,72')
          }
          5% {
            d:path('M42,98Q42,79 34,72')
          }
          7.5% {
            d:path('M42,98Q42,79 34,72')
          }
          10% {
            d:path('M42,98Q42,79 34,72')
          }
          12.5% {
            d:path('M42,98Q42,79 34,72')
          }
          15% {
            d:path('M42,98Q42,79 34,72')
          }
          17.5% {
            d:path('M42,98Q42,79 36,72')
          }
          20% {
            d:path('M42,98Q42,79 38,72')
          }
          22.5% {
            d:path('M42,98Q42,79 40,72')
          }
          25% {
            d:path('M42,98Q42,79 42,72')
          }
          27.5% {
            d:path('M42,98Q42,79 44,72')
          }
          30% {
            d:path('M42,98Q42,79 46,72')
          }
          32.5% {
            d:path('M42,98Q42,79 48,72')
          }
          35% {
            d:path('M42,98Q42,79 50,72')
          }
          37.5% {
            d:path('M46,90.729Q46,79 52,72')
          }
          40% {
            d:path('M50,84.565Q50,79 54,72')
          }
          42.5% {
            d:path('M54,80.446Q54,79 56,72')
          }
          45% {
            d:path('M58,79Q58,79 58,72')
          }
          47.5% {
            d:path('M62,80.446Q62,79 60,72')
          }
          50% {
            d:path('M66,84.565Q66,79 62,72')
          }
          52.5% {
            d:path('M70,90.729Q70,79 64,72')
          }
          55% {
            d:path('M74,98Q74,79 66,72')
          }
          57.5% {
            d:path('M74,98Q74,79 68,72')
          }
          60% {
            d:path('M74,98Q74,79 70,72')
          }
          62.5% {
            d:path('M74,98Q74,79 72,72')
          }
          65% {
            d:path('M74,98Q74,79 74,72')
          }
          67.5% {
            d:path('M74,98Q74,79 76,72')
          }
          70% {
            d:path('M74,98Q74,79 78,72')
          }
          72.5% {
            d:path('M74,98Q74,79 80,72')
          }
          75% {
            d:path('M74,98Q74,79 82,72')
          }
          77.5% {
            d:path('M74,98Q74,79 82,72')
          }
          80% {
            d:path('M74,98Q74,79 82,72')
          }
          82.5% {
            d:path('M74,98Q74,79 82,72')
          }
          85% {
            d:path('M74,98Q74,79 82,72')
          }
          87.5% {
            d:path('M74,98Q74,79 82,72')
          }
          90% {
            d:path('M74,98Q74,79 82,72')
          }
          92.5% {
            d:path('M74,98Q74,79 82,72')
          }
          95% {
            d:path('M74,98Q74,79 82,72')
          }
          97.5% {
            d:path('M74,98Q74,79 82,72')
          }
          100% {
            d:path('M74,98Q74,79 82,72')
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Kinesin Cargo Transport">
        <path class="ink muted" d="M14,102H119M14,112H119"/>
        <rect class="tubulin" x="15" y="102" width="6" height="10" rx="2"/>
        <rect class="tubulin" x="23" y="102" width="6" height="10" rx="2"/>
        <rect class="tubulin" x="31" y="102" width="6" height="10" rx="2"/>
        <rect class="tubulin" x="39" y="102" width="6" height="10" rx="2"/>
        <rect class="tubulin" x="47" y="102" width="6" height="10" rx="2"/>
        <rect class="tubulin" x="55" y="102" width="6" height="10" rx="2"/>
        <rect class="tubulin" x="63" y="102" width="6" height="10" rx="2"/>
        <rect class="tubulin" x="71" y="102" width="6" height="10" rx="2"/>
        <rect class="tubulin" x="79" y="102" width="6" height="10" rx="2"/>
        <rect class="tubulin" x="87" y="102" width="6" height="10" rx="2"/>
        <rect class="tubulin" x="95" y="102" width="6" height="10" rx="2"/>
        <rect class="tubulin" x="103" y="102" width="6" height="10" rx="2"/>
        <rect class="tubulin" x="111" y="102" width="6" height="10" rx="2"/>
        <path class="ink" d="M124,99V107M120,103H128"/>
        <g class="motor">
          <g class="cargo" transform="translate(82 0)">
            <circle class="vesicle ink" cx="0" cy="44" r="15"/>
            <path class="ink" d="M0,59V72"/>
            <path class="ink muted" d="M-7,41Q0,34 7,42M-6,49Q0,55 6,48"/>
          </g>
          <path class="neck-a ink" d="M90,98Q90,79 82,72"/>
          <path class="neck-b ink" d="M74,98Q74,79 82,72"/>
          <ellipse class="head-a solid" cx="0" cy="0" rx="6" ry="4" transform="translate(90 98)"/>
          <ellipse class="head-b cool" cx="0" cy="0" rx="6" ry="4" transform="translate(74 98)"/>
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

if (!customElements.get("concept-kinesin-cargo-transport")) {
  customElements.define("concept-kinesin-cargo-transport", ConceptKinesinCargoTransport);
}
