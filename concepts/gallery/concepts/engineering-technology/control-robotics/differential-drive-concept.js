// Differential Drive. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptDifferentialDrive extends HTMLElement {
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
        .cycle {
          animation:cycle 10s linear infinite
        }
        @keyframes cycle {
          0%,80% {
            opacity:1
          }
          86%,92% {
            opacity:0
          }
          100% {
            opacity:1
          }
        }
        .body {
          transform:translate(64px,54px) rotate(180deg);
          animation:body 10s linear infinite
        }
        @keyframes body {
          0% {
            transform:translate(42px,100px) rotate(0deg)
          }
          0.5% {
            transform:translate(42px,99.4px) rotate(0deg)
          }
          1% {
            transform:translate(42px,98.8px) rotate(0deg)
          }
          1.5% {
            transform:translate(42px,98.2px) rotate(0deg)
          }
          2% {
            transform:translate(42px,97.6px) rotate(0deg)
          }
          2.5% {
            transform:translate(42px,97px) rotate(0deg)
          }
          3% {
            transform:translate(42px,96.4px) rotate(0deg)
          }
          3.5% {
            transform:translate(42px,95.8px) rotate(0deg)
          }
          4% {
            transform:translate(42px,95.2px) rotate(0deg)
          }
          4.5% {
            transform:translate(42px,94.6px) rotate(0deg)
          }
          5% {
            transform:translate(42px,94px) rotate(0deg)
          }
          5.5% {
            transform:translate(42px,93.4px) rotate(0deg)
          }
          6% {
            transform:translate(42px,92.8px) rotate(0deg)
          }
          6.5% {
            transform:translate(42px,92.2px) rotate(0deg)
          }
          7% {
            transform:translate(42px,91.6px) rotate(0deg)
          }
          7.5% {
            transform:translate(42px,91px) rotate(0deg)
          }
          8% {
            transform:translate(42px,90.4px) rotate(0deg)
          }
          8.5% {
            transform:translate(42px,89.8px) rotate(0deg)
          }
          9% {
            transform:translate(42px,89.2px) rotate(0deg)
          }
          9.5% {
            transform:translate(42px,88.6px) rotate(0deg)
          }
          10% {
            transform:translate(42px,88px) rotate(0deg)
          }
          10.5% {
            transform:translate(42px,87.4px) rotate(0deg)
          }
          11% {
            transform:translate(42px,86.8px) rotate(0deg)
          }
          11.5% {
            transform:translate(42px,86.2px) rotate(0deg)
          }
          12% {
            transform:translate(42px,85.6px) rotate(0deg)
          }
          12.5% {
            transform:translate(42px,85px) rotate(0deg)
          }
          13% {
            transform:translate(42px,84.4px) rotate(0deg)
          }
          13.5% {
            transform:translate(42px,83.8px) rotate(0deg)
          }
          14% {
            transform:translate(42px,83.2px) rotate(0deg)
          }
          14.5% {
            transform:translate(42px,82.6px) rotate(0deg)
          }
          15% {
            transform:translate(42px,82px) rotate(0deg)
          }
          15.5% {
            transform:translate(42px,81.4px) rotate(0deg)
          }
          16% {
            transform:translate(42px,80.8px) rotate(0deg)
          }
          16.5% {
            transform:translate(42px,80.2px) rotate(0deg)
          }
          17% {
            transform:translate(42px,79.6px) rotate(0deg)
          }
          17.5% {
            transform:translate(42px,79px) rotate(0deg)
          }
          18% {
            transform:translate(42px,78.4px) rotate(0deg)
          }
          18.5% {
            transform:translate(42px,77.8px) rotate(0deg)
          }
          19% {
            transform:translate(42px,77.2px) rotate(0deg)
          }
          19.5% {
            transform:translate(42px,76.6px) rotate(0deg)
          }
          20% {
            transform:translate(42px,76px) rotate(0deg)
          }
          20.5% {
            transform:translate(42.017px,75.1363px) rotate(2.25deg)
          }
          21% {
            transform:translate(42.0678px,74.2739px) rotate(4.5deg)
          }
          21.5% {
            transform:translate(42.1525px,73.4142px) rotate(6.75deg)
          }
          22% {
            transform:translate(42.2709px,72.5584px) rotate(9deg)
          }
          22.5% {
            transform:translate(42.4227px,71.708px) rotate(11.25deg)
          }
          23% {
            transform:translate(42.6079px,70.8642px) rotate(13.5deg)
          }
          23.5% {
            transform:translate(42.826px,70.0283px) rotate(15.75deg)
          }
          24% {
            transform:translate(43.0768px,69.2016px) rotate(18deg)
          }
          24.5% {
            transform:translate(43.3598px,68.3854px) rotate(20.25deg)
          }
          25% {
            transform:translate(43.6747px,67.581px) rotate(22.5deg)
          }
          25.5% {
            transform:translate(44.0209px,66.7895px) rotate(24.75deg)
          }
          26% {
            transform:translate(44.3979px,66.0122px) rotate(27deg)
          }
          26.5% {
            transform:translate(44.8051px,65.2503px) rotate(29.25deg)
          }
          27% {
            transform:translate(45.2419px,64.505px) rotate(31.5deg)
          }
          27.5% {
            transform:translate(45.7077px,63.7775px) rotate(33.75deg)
          }
          28% {
            transform:translate(46.2016px,63.0687px) rotate(36deg)
          }
          28.5% {
            transform:translate(46.723px,62.3799px) rotate(38.25deg)
          }
          29% {
            transform:translate(47.2711px,61.7121px) rotate(40.5deg)
          }
          29.5% {
            transform:translate(47.8449px,61.0664px) rotate(42.75deg)
          }
          30% {
            transform:translate(48.4437px,60.4437px) rotate(45deg)
          }
          30.5% {
            transform:translate(49.0664px,59.8449px) rotate(47.25deg)
          }
          31% {
            transform:translate(49.7121px,59.2711px) rotate(49.5deg)
          }
          31.5% {
            transform:translate(50.3799px,58.723px) rotate(51.75deg)
          }
          32% {
            transform:translate(51.0687px,58.2016px) rotate(54deg)
          }
          32.5% {
            transform:translate(51.7775px,57.7077px) rotate(56.25deg)
          }
          33% {
            transform:translate(52.505px,57.2419px) rotate(58.5deg)
          }
          33.5% {
            transform:translate(53.2503px,56.8051px) rotate(60.75deg)
          }
          34% {
            transform:translate(54.0122px,56.3979px) rotate(63deg)
          }
          34.5% {
            transform:translate(54.7895px,56.0209px) rotate(65.25deg)
          }
          35% {
            transform:translate(55.581px,55.6747px) rotate(67.5deg)
          }
          35.5% {
            transform:translate(56.3854px,55.3598px) rotate(69.75deg)
          }
          36% {
            transform:translate(57.2016px,55.0768px) rotate(72deg)
          }
          36.5% {
            transform:translate(58.0283px,54.826px) rotate(74.25deg)
          }
          37% {
            transform:translate(58.8642px,54.6079px) rotate(76.5deg)
          }
          37.5% {
            transform:translate(59.708px,54.4227px) rotate(78.75deg)
          }
          38% {
            transform:translate(60.5584px,54.2709px) rotate(81deg)
          }
          38.5% {
            transform:translate(61.4142px,54.1525px) rotate(83.25deg)
          }
          39% {
            transform:translate(62.2739px,54.0678px) rotate(85.5deg)
          }
          39.5% {
            transform:translate(63.1363px,54.017px) rotate(87.75deg)
          }
          40% {
            transform:translate(64px,54px) rotate(90deg)
          }
          40.5% {
            transform:translate(64px,54px) rotate(92.25deg)
          }
          41% {
            transform:translate(64px,54px) rotate(94.5deg)
          }
          41.5% {
            transform:translate(64px,54px) rotate(96.75deg)
          }
          42% {
            transform:translate(64px,54px) rotate(99deg)
          }
          42.5% {
            transform:translate(64px,54px) rotate(101.25deg)
          }
          43% {
            transform:translate(64px,54px) rotate(103.5deg)
          }
          43.5% {
            transform:translate(64px,54px) rotate(105.75deg)
          }
          44% {
            transform:translate(64px,54px) rotate(108deg)
          }
          44.5% {
            transform:translate(64px,54px) rotate(110.25deg)
          }
          45% {
            transform:translate(64px,54px) rotate(112.5deg)
          }
          45.5% {
            transform:translate(64px,54px) rotate(114.75deg)
          }
          46% {
            transform:translate(64px,54px) rotate(117deg)
          }
          46.5% {
            transform:translate(64px,54px) rotate(119.25deg)
          }
          47% {
            transform:translate(64px,54px) rotate(121.5deg)
          }
          47.5% {
            transform:translate(64px,54px) rotate(123.75deg)
          }
          48% {
            transform:translate(64px,54px) rotate(126deg)
          }
          48.5% {
            transform:translate(64px,54px) rotate(128.25deg)
          }
          49% {
            transform:translate(64px,54px) rotate(130.5deg)
          }
          49.5% {
            transform:translate(64px,54px) rotate(132.75deg)
          }
          50% {
            transform:translate(64px,54px) rotate(135deg)
          }
          50.5% {
            transform:translate(64px,54px) rotate(137.25deg)
          }
          51% {
            transform:translate(64px,54px) rotate(139.5deg)
          }
          51.5% {
            transform:translate(64px,54px) rotate(141.75deg)
          }
          52% {
            transform:translate(64px,54px) rotate(144deg)
          }
          52.5% {
            transform:translate(64px,54px) rotate(146.25deg)
          }
          53% {
            transform:translate(64px,54px) rotate(148.5deg)
          }
          53.5% {
            transform:translate(64px,54px) rotate(150.75deg)
          }
          54% {
            transform:translate(64px,54px) rotate(153deg)
          }
          54.5% {
            transform:translate(64px,54px) rotate(155.25deg)
          }
          55% {
            transform:translate(64px,54px) rotate(157.5deg)
          }
          55.5% {
            transform:translate(64px,54px) rotate(159.75deg)
          }
          56% {
            transform:translate(64px,54px) rotate(162deg)
          }
          56.5% {
            transform:translate(64px,54px) rotate(164.25deg)
          }
          57% {
            transform:translate(64px,54px) rotate(166.5deg)
          }
          57.5% {
            transform:translate(64px,54px) rotate(168.75deg)
          }
          58% {
            transform:translate(64px,54px) rotate(171deg)
          }
          58.5% {
            transform:translate(64px,54px) rotate(173.25deg)
          }
          59% {
            transform:translate(64px,54px) rotate(175.5deg)
          }
          59.5% {
            transform:translate(64px,54px) rotate(177.75deg)
          }
          60% {
            transform:translate(64px,54px) rotate(180deg)
          }
          60.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          61% {
            transform:translate(64px,54px) rotate(180deg)
          }
          61.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          62% {
            transform:translate(64px,54px) rotate(180deg)
          }
          62.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          63% {
            transform:translate(64px,54px) rotate(180deg)
          }
          63.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          64% {
            transform:translate(64px,54px) rotate(180deg)
          }
          64.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          65% {
            transform:translate(64px,54px) rotate(180deg)
          }
          65.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          66% {
            transform:translate(64px,54px) rotate(180deg)
          }
          66.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          67% {
            transform:translate(64px,54px) rotate(180deg)
          }
          67.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          68% {
            transform:translate(64px,54px) rotate(180deg)
          }
          68.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          69% {
            transform:translate(64px,54px) rotate(180deg)
          }
          69.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          70% {
            transform:translate(64px,54px) rotate(180deg)
          }
          70.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          71% {
            transform:translate(64px,54px) rotate(180deg)
          }
          71.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          72% {
            transform:translate(64px,54px) rotate(180deg)
          }
          72.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          73% {
            transform:translate(64px,54px) rotate(180deg)
          }
          73.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          74% {
            transform:translate(64px,54px) rotate(180deg)
          }
          74.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          75% {
            transform:translate(64px,54px) rotate(180deg)
          }
          75.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          76% {
            transform:translate(64px,54px) rotate(180deg)
          }
          76.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          77% {
            transform:translate(64px,54px) rotate(180deg)
          }
          77.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          78% {
            transform:translate(64px,54px) rotate(180deg)
          }
          78.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          79% {
            transform:translate(64px,54px) rotate(180deg)
          }
          79.5% {
            transform:translate(64px,54px) rotate(180deg)
          }
          80% {
            transform:translate(64px,54px) rotate(180deg)
          }
          86% {
            transform:translate(64px,54px) rotate(180deg)
          }
          86.01%,100% {
            transform:translate(42px,100px)
          }
        }
        .left-tread {
          animation:left-tread 10s linear infinite
        }
        @keyframes left-tread {
          0% {
            transform:translateY(0px)
          }
          20% {
            transform:translateY(-24px)
          }
          40% {
            transform:translateY(-82.1195px)
          }
          60% {
            transform:translateY(-105.6814px)
          }
          86% {
            transform:translateY(-105.6814px)
          }
          86.01%,100% {
            transform:translateY(0)
          }
        }
        .left-speed {
          animation:left-speed 10s steps(1,end) infinite
        }
        @keyframes left-speed {
          0% {
            opacity:1;
            d:path("M-23 0v-5.4m-2 3 2 -3 2 3")
          }
          20% {
            opacity:1;
            d:path("M-23 0v-13.0769m-2 3 2 -3 2 3")
          }
          40% {
            opacity:1;
            d:path("M-23 0v-5.3014m-2 3 2 -3 2 3")
          }
          60% {
            opacity:0;
            d:path("M-23 0v0m-2 3 2 -3 2 3")
          }
          100% {
            opacity:0
          }
        }
        .right-tread {
          animation:right-tread 10s linear infinite
        }
        @keyframes right-tread {
          0% {
            transform:translateY(0px)
          }
          20% {
            transform:translateY(-24px)
          }
          40% {
            transform:translateY(-34.9956px)
          }
          60% {
            transform:translateY(-11.4336px)
          }
          86% {
            transform:translateY(-11.4336px)
          }
          86.01%,100% {
            transform:translateY(0)
          }
        }
        .right-speed {
          animation:right-speed 10s steps(1,end) infinite
        }
        @keyframes right-speed {
          0% {
            opacity:1;
            d:path("M23 0v-5.4m-2 3 2 -3 2 3")
          }
          20% {
            opacity:1;
            d:path("M23 0v-2.474m-2 3 2 -3 2 3")
          }
          40% {
            opacity:1;
            d:path("M23 0v5.3014m-2 -3 2 3 2 -3")
          }
          60% {
            opacity:0;
            d:path("M23 0v0m-2 3 2 -3 2 3")
          }
          100% {
            opacity:0
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Differential Drive">
        <defs>
          <pattern id="tread" width="5" height="6" patternUnits="userSpaceOnUse">
            <rect width="5" height="2" fill="#70edb1"/>
          </pattern>
          <clipPath id="wl">
            <rect x="-18" y="-7" width="6" height="14"/>
          </clipPath>
          <clipPath id="wr">
            <rect x="12" y="-7" width="6" height="14"/>
          </clipPath>
        </defs>
        <path class="ink muted" stroke-dasharray="2 4" d="M42 100V76A22 22 0 0 1 64 54"/>
        <g class="cycle">
          <g class="body">
            <rect class="ink paper" x="-12" y="-15" width="24" height="30" rx="4"/>
            <path class="ink" d="M0 7V-9m-3 4 3-4 3 4"/>
            <g clip-path="url(#wl)">
              <rect class="left-tread" x="-18" y="-120" width="6" height="240" fill="url(#tread)"/>
            </g>
            <g clip-path="url(#wr)">
              <rect class="right-tread" x="12" y="-120" width="6" height="240" fill="url(#tread)"/>
            </g>
            <path class="ink left-speed" d="M-23 5V-6m-2 3 2-3 2 3"/>
            <path class="ink right-speed" d="M23-5V6m-2-3 2 3 2-3"/>
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

if (!customElements.get("concept-differential-drive")) {
  customElements.define("concept-differential-drive", ConceptDifferentialDrive);
}
