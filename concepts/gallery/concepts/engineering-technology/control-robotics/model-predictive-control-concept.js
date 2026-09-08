// Model Predictive Control. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptModelPredictiveControl extends HTMLElement {
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
          animation:cycle 12s linear infinite
        }
        @keyframes cycle {
          0%,91.6667% {
            opacity:1
          }
          95%,97% {
            opacity:0
          }
          100% {
            opacity:1
          }
        }
        .ghost0_2 {
          opacity:0;
          animation:ghost0_2 12s steps(1,end) infinite
        }
        @keyframes ghost0_2 {
          0% {
            opacity:0
          }
          8.3333% {
            opacity:0.35
          }
          14.1667%,100% {
            opacity:0
          }
        }
        .ghost0_1 {
          opacity:0;
          animation:ghost0_1 12s steps(1,end) infinite
        }
        @keyframes ghost0_1 {
          0% {
            opacity:0
          }
          8.3333% {
            opacity:0.35
          }
          14.1667%,100% {
            opacity:0
          }
        }
        .ghost0_0 {
          opacity:0;
          animation:ghost0_0 12s steps(1,end) infinite
        }
        @keyframes ghost0_0 {
          0% {
            opacity:0
          }
          8.3333% {
            opacity:0.8
          }
          14.1667%,100% {
            opacity:0
          }
        }
        .ghost1_2 {
          opacity:0;
          animation:ghost1_2 12s steps(1,end) infinite
        }
        @keyframes ghost1_2 {
          0% {
            opacity:0
          }
          15% {
            opacity:0.35
          }
          20.8333%,100% {
            opacity:0
          }
        }
        .ghost1_1 {
          opacity:0;
          animation:ghost1_1 12s steps(1,end) infinite
        }
        @keyframes ghost1_1 {
          0% {
            opacity:0
          }
          15% {
            opacity:0.35
          }
          20.8333%,100% {
            opacity:0
          }
        }
        .ghost1_0 {
          opacity:0;
          animation:ghost1_0 12s steps(1,end) infinite
        }
        @keyframes ghost1_0 {
          0% {
            opacity:0
          }
          15% {
            opacity:0.8
          }
          20.8333%,100% {
            opacity:0
          }
        }
        .ghost2_2 {
          opacity:0;
          animation:ghost2_2 12s steps(1,end) infinite
        }
        @keyframes ghost2_2 {
          0% {
            opacity:0
          }
          21.6667% {
            opacity:0.35
          }
          27.5%,100% {
            opacity:0
          }
        }
        .ghost2_1 {
          opacity:0;
          animation:ghost2_1 12s steps(1,end) infinite
        }
        @keyframes ghost2_1 {
          0% {
            opacity:0
          }
          21.6667% {
            opacity:0.35
          }
          27.5%,100% {
            opacity:0
          }
        }
        .ghost2_0 {
          opacity:0;
          animation:ghost2_0 12s steps(1,end) infinite
        }
        @keyframes ghost2_0 {
          0% {
            opacity:0
          }
          21.6667% {
            opacity:0.8
          }
          27.5%,100% {
            opacity:0
          }
        }
        .ghost3_2 {
          opacity:0;
          animation:ghost3_2 12s steps(1,end) infinite
        }
        @keyframes ghost3_2 {
          0% {
            opacity:0
          }
          28.3333% {
            opacity:0.35
          }
          34.1667%,100% {
            opacity:0
          }
        }
        .ghost3_1 {
          opacity:0;
          animation:ghost3_1 12s steps(1,end) infinite
        }
        @keyframes ghost3_1 {
          0% {
            opacity:0
          }
          28.3333% {
            opacity:0.35
          }
          34.1667%,100% {
            opacity:0
          }
        }
        .ghost3_0 {
          opacity:0;
          animation:ghost3_0 12s steps(1,end) infinite
        }
        @keyframes ghost3_0 {
          0% {
            opacity:0
          }
          28.3333% {
            opacity:0.8
          }
          34.1667%,100% {
            opacity:0
          }
        }
        .ghost4_2 {
          opacity:0;
          animation:ghost4_2 12s steps(1,end) infinite
        }
        @keyframes ghost4_2 {
          0% {
            opacity:0
          }
          35% {
            opacity:0.35
          }
          40.8333%,100% {
            opacity:0
          }
        }
        .ghost4_1 {
          opacity:0;
          animation:ghost4_1 12s steps(1,end) infinite
        }
        @keyframes ghost4_1 {
          0% {
            opacity:0
          }
          35% {
            opacity:0.35
          }
          40.8333%,100% {
            opacity:0
          }
        }
        .ghost4_0 {
          opacity:0;
          animation:ghost4_0 12s steps(1,end) infinite
        }
        @keyframes ghost4_0 {
          0% {
            opacity:0
          }
          35% {
            opacity:0.8
          }
          40.8333%,100% {
            opacity:0
          }
        }
        .ghost5_2 {
          opacity:0;
          animation:ghost5_2 12s steps(1,end) infinite
        }
        @keyframes ghost5_2 {
          0% {
            opacity:0
          }
          41.6667% {
            opacity:0.35
          }
          47.5%,100% {
            opacity:0
          }
        }
        .ghost5_1 {
          opacity:0;
          animation:ghost5_1 12s steps(1,end) infinite
        }
        @keyframes ghost5_1 {
          0% {
            opacity:0
          }
          41.6667% {
            opacity:0.35
          }
          47.5%,100% {
            opacity:0
          }
        }
        .ghost5_0 {
          opacity:0;
          animation:ghost5_0 12s steps(1,end) infinite
        }
        @keyframes ghost5_0 {
          0% {
            opacity:0
          }
          41.6667% {
            opacity:0.8
          }
          47.5%,100% {
            opacity:0
          }
        }
        .ghost6_2 {
          opacity:0;
          animation:ghost6_2 12s steps(1,end) infinite
        }
        @keyframes ghost6_2 {
          0% {
            opacity:0
          }
          48.3333% {
            opacity:0.35
          }
          54.1667%,100% {
            opacity:0
          }
        }
        .ghost6_1 {
          opacity:0;
          animation:ghost6_1 12s steps(1,end) infinite
        }
        @keyframes ghost6_1 {
          0% {
            opacity:0
          }
          48.3333% {
            opacity:0.35
          }
          54.1667%,100% {
            opacity:0
          }
        }
        .ghost6_0 {
          opacity:0;
          animation:ghost6_0 12s steps(1,end) infinite
        }
        @keyframes ghost6_0 {
          0% {
            opacity:0
          }
          48.3333% {
            opacity:0.8
          }
          54.1667%,100% {
            opacity:0
          }
        }
        .ghost7_2 {
          opacity:0;
          animation:ghost7_2 12s steps(1,end) infinite
        }
        @keyframes ghost7_2 {
          0% {
            opacity:0
          }
          55% {
            opacity:0.35
          }
          60.8333%,100% {
            opacity:0
          }
        }
        .ghost7_1 {
          opacity:0;
          animation:ghost7_1 12s steps(1,end) infinite
        }
        @keyframes ghost7_1 {
          0% {
            opacity:0
          }
          55% {
            opacity:0.35
          }
          60.8333%,100% {
            opacity:0
          }
        }
        .ghost7_0 {
          opacity:0;
          animation:ghost7_0 12s steps(1,end) infinite
        }
        @keyframes ghost7_0 {
          0% {
            opacity:0
          }
          55% {
            opacity:0.8
          }
          60.8333%,100% {
            opacity:0
          }
        }
        .ghost8_2 {
          opacity:0;
          animation:ghost8_2 12s steps(1,end) infinite
        }
        @keyframes ghost8_2 {
          0% {
            opacity:0
          }
          61.6667% {
            opacity:0.35
          }
          67.5%,100% {
            opacity:0
          }
        }
        .ghost8_1 {
          opacity:0;
          animation:ghost8_1 12s steps(1,end) infinite
        }
        @keyframes ghost8_1 {
          0% {
            opacity:0
          }
          61.6667% {
            opacity:0.35
          }
          67.5%,100% {
            opacity:0
          }
        }
        .ghost8_0 {
          opacity:0;
          animation:ghost8_0 12s steps(1,end) infinite
        }
        @keyframes ghost8_0 {
          0% {
            opacity:0
          }
          61.6667% {
            opacity:0.8
          }
          67.5%,100% {
            opacity:0
          }
        }
        .robot {
          animation:robot 12s linear infinite
        }
        .trail {
          animation:trail 12s steps(1,end) infinite
        }
        @keyframes robot {
          0% {
            cx:30;
            cy:114
          }
          11.25% {
            cx:30;
            cy:114
          }
          14.1667% {
            cx:44;
            cy:100
          }
          17.9167% {
            cx:44;
            cy:100
          }
          20.8333% {
            cx:44;
            cy:86
          }
          24.5833% {
            cx:44;
            cy:86
          }
          27.5% {
            cx:44;
            cy:72
          }
          31.25% {
            cx:44;
            cy:72
          }
          34.1667% {
            cx:44;
            cy:58
          }
          37.9167% {
            cx:44;
            cy:58
          }
          40.8333% {
            cx:58;
            cy:44
          }
          44.5833% {
            cx:58;
            cy:44
          }
          47.5% {
            cx:72;
            cy:30
          }
          51.25% {
            cx:72;
            cy:30
          }
          54.1667% {
            cx:86;
            cy:30
          }
          57.9167% {
            cx:86;
            cy:30
          }
          60.8333% {
            cx:100;
            cy:30
          }
          64.5833% {
            cx:100;
            cy:30
          }
          67.5% {
            cx:114;
            cy:30
          }
          95% {
            cx:114;
            cy:30
          }
          95.01%,100% {
            cx:30;
            cy:114
          }
        }
        @keyframes trail {
          0% {
            d:path("M30 114L30 114")
          }
          11.25% {
            d:path("M30 114L30 114")
          }
          11.6146% {
            d:path("M30 114L31.75 112.25")
          }
          11.9792% {
            d:path("M30 114L33.5 110.5")
          }
          12.3438% {
            d:path("M30 114L35.25 108.75")
          }
          12.7083% {
            d:path("M30 114L37 107")
          }
          13.0729% {
            d:path("M30 114L38.75 105.25")
          }
          13.4375% {
            d:path("M30 114L40.5 103.5")
          }
          13.8021% {
            d:path("M30 114L42.25 101.75")
          }
          14.1667% {
            d:path("M30 114L44 100")
          }
          17.9167% {
            d:path("M30 114L44 100L44 100")
          }
          18.2813% {
            d:path("M30 114L44 100L44 98.25")
          }
          18.6458% {
            d:path("M30 114L44 100L44 96.5")
          }
          19.0104% {
            d:path("M30 114L44 100L44 94.75")
          }
          19.375% {
            d:path("M30 114L44 100L44 93")
          }
          19.7396% {
            d:path("M30 114L44 100L44 91.25")
          }
          20.1042% {
            d:path("M30 114L44 100L44 89.5")
          }
          20.4687% {
            d:path("M30 114L44 100L44 87.75")
          }
          20.8333% {
            d:path("M30 114L44 100L44 86")
          }
          24.5833% {
            d:path("M30 114L44 100L44 86L44 86")
          }
          24.9479% {
            d:path("M30 114L44 100L44 86L44 84.25")
          }
          25.3125% {
            d:path("M30 114L44 100L44 86L44 82.5")
          }
          25.6771% {
            d:path("M30 114L44 100L44 86L44 80.75")
          }
          26.0417% {
            d:path("M30 114L44 100L44 86L44 79")
          }
          26.4063% {
            d:path("M30 114L44 100L44 86L44 77.25")
          }
          26.7708% {
            d:path("M30 114L44 100L44 86L44 75.5")
          }
          27.1354% {
            d:path("M30 114L44 100L44 86L44 73.75")
          }
          27.5% {
            d:path("M30 114L44 100L44 86L44 72")
          }
          31.25% {
            d:path("M30 114L44 100L44 86L44 72L44 72")
          }
          31.6146% {
            d:path("M30 114L44 100L44 86L44 72L44 70.25")
          }
          31.9792% {
            d:path("M30 114L44 100L44 86L44 72L44 68.5")
          }
          32.3438% {
            d:path("M30 114L44 100L44 86L44 72L44 66.75")
          }
          32.7083% {
            d:path("M30 114L44 100L44 86L44 72L44 65")
          }
          33.0729% {
            d:path("M30 114L44 100L44 86L44 72L44 63.25")
          }
          33.4375% {
            d:path("M30 114L44 100L44 86L44 72L44 61.5")
          }
          33.8021% {
            d:path("M30 114L44 100L44 86L44 72L44 59.75")
          }
          34.1667% {
            d:path("M30 114L44 100L44 86L44 72L44 58")
          }
          37.9167% {
            d:path("M30 114L44 100L44 86L44 72L44 58L44 58")
          }
          38.2813% {
            d:path("M30 114L44 100L44 86L44 72L44 58L45.75 56.25")
          }
          38.6458% {
            d:path("M30 114L44 100L44 86L44 72L44 58L47.5 54.5")
          }
          39.0104% {
            d:path("M30 114L44 100L44 86L44 72L44 58L49.25 52.75")
          }
          39.375% {
            d:path("M30 114L44 100L44 86L44 72L44 58L51 51")
          }
          39.7396% {
            d:path("M30 114L44 100L44 86L44 72L44 58L52.75 49.25")
          }
          40.1042% {
            d:path("M30 114L44 100L44 86L44 72L44 58L54.5 47.5")
          }
          40.4688% {
            d:path("M30 114L44 100L44 86L44 72L44 58L56.25 45.75")
          }
          40.8333% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44")
          }
          44.5833% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L58 44")
          }
          44.9479% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L59.75 42.25")
          }
          45.3125% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L61.5 40.5")
          }
          45.6771% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L63.25 38.75")
          }
          46.0417% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L65 37")
          }
          46.4063% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L66.75 35.25")
          }
          46.7708% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L68.5 33.5")
          }
          47.1354% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L70.25 31.75")
          }
          47.5% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30")
          }
          51.25% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L72 30")
          }
          51.6146% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L73.75 30")
          }
          51.9792% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L75.5 30")
          }
          52.3438% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L77.25 30")
          }
          52.7083% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L79 30")
          }
          53.0729% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L80.75 30")
          }
          53.4375% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L82.5 30")
          }
          53.8021% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L84.25 30")
          }
          54.1667% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30")
          }
          57.9167% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L86 30")
          }
          58.2813% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L87.75 30")
          }
          58.6458% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L89.5 30")
          }
          59.0104% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L91.25 30")
          }
          59.375% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L93 30")
          }
          59.7396% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L94.75 30")
          }
          60.1042% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L96.5 30")
          }
          60.4688% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L98.25 30")
          }
          60.8333% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L100 30")
          }
          64.5833% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L100 30L100 30")
          }
          64.9479% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L100 30L101.75 30")
          }
          65.3125% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L100 30L103.5 30")
          }
          65.6771% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L100 30L105.25 30")
          }
          66.0417% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L100 30L107 30")
          }
          66.4063% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L100 30L108.75 30")
          }
          66.7708% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L100 30L110.5 30")
          }
          67.1354% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L100 30L112.25 30")
          }
          67.5% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L100 30L114 30")
          }
          95% {
            d:path("M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L100 30L114 30")
          }
          95.01%,100% {
            d:path("M30 114L30 114")
          }
        }
        @media(prefers-reduced-motion:reduce) {
          .robot {
            cx:44;
            cy:58
          }
          .trail {
            d:path("M30 114L44 100L44 86L44 72L44 58")
          }
          .ghost4_0 {
            opacity:.8
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Model Predictive Control">
        <rect class="ink muted" x="10" y="12" width="120" height="118" rx="3"/>
        <rect x="51" y="49" width="38" height="42" rx="7" fill="none" stroke="#375b51" stroke-dasharray="2 3"/>
        <rect class="ink paper" x="58" y="56" width="24" height="28"/>
        <circle class="ink warm" style="fill:none" cx="114" cy="30" r="6"/>
        <g class="cycle">
          <path class="ink muted ghost0_2" stroke-dasharray="3 3" d="M30 114L30 100L44 86L44 72"/>
          <path class="ink muted ghost0_1" stroke-dasharray="3 3" d="M30 114L44 100L58 100L72 100"/>
          <path class="ink  ghost0_0" stroke-dasharray="3 3" d="M30 114L44 100L44 86L44 72"/>
          <path class="ink muted ghost1_2" stroke-dasharray="3 3" d="M44 100L44 86L30 72L44 58"/>
          <path class="ink muted ghost1_1" stroke-dasharray="3 3" d="M44 100L58 100L72 100L86 100"/>
          <path class="ink  ghost1_0" stroke-dasharray="3 3" d="M44 100L44 86L44 72L44 58"/>
          <path class="ink muted ghost2_2" stroke-dasharray="3 3" d="M44 86L44 72L44 58L44 44"/>
          <path class="ink muted ghost2_1" stroke-dasharray="3 3" d="M44 86L30 72L44 58L58 44"/>
          <path class="ink  ghost2_0" stroke-dasharray="3 3" d="M44 86L44 72L44 58L58 44"/>
          <path class="ink muted ghost3_2" stroke-dasharray="3 3" d="M44 72L44 58L58 44L58 30"/>
          <path class="ink muted ghost3_1" stroke-dasharray="3 3" d="M44 72L44 58L58 44L72 44"/>
          <path class="ink  ghost3_0" stroke-dasharray="3 3" d="M44 72L44 58L58 44L72 30"/>
          <path class="ink muted ghost4_2" stroke-dasharray="3 3" d="M44 58L58 44L72 44L86 44"/>
          <path class="ink muted ghost4_1" stroke-dasharray="3 3" d="M44 58L58 44L72 44L86 30"/>
          <path class="ink  ghost4_0" stroke-dasharray="3 3" d="M44 58L58 44L72 30L86 30"/>
          <path class="ink muted ghost5_2" stroke-dasharray="3 3" d="M58 44L72 44L86 30L100 30"/>
          <path class="ink muted ghost5_1" stroke-dasharray="3 3" d="M58 44L72 44L86 44L100 30"/>
          <path class="ink  ghost5_0" stroke-dasharray="3 3" d="M58 44L72 30L86 30L100 30"/>
          <path class="ink muted ghost6_2" stroke-dasharray="3 3" d="M72 30L86 44L100 44L114 30"/>
          <path class="ink muted ghost6_1" stroke-dasharray="3 3" d="M72 30L86 30L100 44L114 30"/>
          <path class="ink  ghost6_0" stroke-dasharray="3 3" d="M72 30L86 30L100 30L114 30"/>
          <path class="ink muted ghost7_2" stroke-dasharray="3 3" d="M86 30L86 30L100 30L114 30"/>
          <path class="ink muted ghost7_1" stroke-dasharray="3 3" d="M86 30L100 30L100 30L114 30"/>
          <path class="ink  ghost7_0" stroke-dasharray="3 3" d="M86 30L100 30L114 30L114 30"/>
          <path class="ink muted ghost8_2" stroke-dasharray="3 3" d="M100 30L100 30L114 30L114 30"/>
          <path class="ink muted ghost8_1" stroke-dasharray="3 3" d="M100 30L100 30L100 30L114 30"/>
          <path class="ink  ghost8_0" stroke-dasharray="3 3" d="M100 30L114 30L114 30L114 30"/>
          <path class="ink trail" d="M30 114L44 100L44 86L44 72L44 58L58 44L72 30L86 30L100 30L114 30"/>
          <circle class="solid robot" cx="114" cy="30" r="5"/>
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

if (!customElements.get("concept-model-predictive-control")) {
  customElements.define("concept-model-predictive-control", ConceptModelPredictiveControl);
}
