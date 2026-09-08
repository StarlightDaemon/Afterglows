// Sol-Gel Network Formation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptSolGelNetworkFormation extends HTMLElement {
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
        .liquid {
          fill:#173837;
          stroke:#5e8e83;
          stroke-width:1
        }
        .bond {
          fill:none;
          stroke:#84afa4;
          stroke-width:1.1
        }
        .silicon {
          fill:#8bd0c6;
          stroke:#b5e2d0;
          stroke-width:.6
        }
        .oxygen {
          fill:#e4a9ab
        }
        .hydrogen {
          fill:#f0e7ce
        }
        .network {
          animation:reset 18s linear infinite
        }
        @keyframes reset {
          0%,100% {
            opacity:0
          }
          5%,94% {
            opacity:1
          }
        }
        .rb0 {
          animation:rb0 18s linear infinite
        }
        .jb0 {
          animation:jb0 18s linear infinite
        }
        .db0,.pb0 {
          opacity:0
        }
        .db0 {
          animation:db0 18s linear infinite
        }
        .pb0 {
          animation:pb0 18s linear infinite
        }
        .ro0 {
          transform:translate(55px,70px);
          animation:ro0 18s linear infinite
        }
        .w0 {
          transform:translate(55px,85px);
          animation:w0 18s linear infinite
        }
        .nh0 {
          animation:nh0 18s linear infinite
        }
        .th0 {
          transform:translate(0px,3px);
          animation:th0 18s linear infinite
        }
        @keyframes rb0 {
          0%,15% {
            d:path('M40,70L48,70')
          }
          19%,100% {
            d:path('M40,70L55,70')
          }
        }
        @keyframes jb0 {
          0%,15% {
            opacity:0;
            d:path('M70,70L48,70')
          }
          19%,100% {
            opacity:1;
            d:path('M70,70L55,70')
          }
        }
        @keyframes db0 {
          0%,15% {
            opacity:1
          }
          19%,100% {
            opacity:0
          }
        }
        @keyframes pb0 {
          0%,15% {
            opacity:1;
            d:path('M48,70L51,70')
          }
          19%,100% {
            opacity:0;
            d:path('M55,70L62,73')
          }
        }
        @keyframes ro0 {
          0%,15% {
            transform:translate(48px,70px)
          }
          19%,100% {
            transform:translate(55px,70px)
          }
        }
        @keyframes th0 {
          0%,15% {
            transform:translate(-11px,0px)
          }
          19%,100% {
            transform:translate(0px,3px)
          }
        }
        @keyframes nh0 {
          0%,15% {
            opacity:0;
            d:path('M0,0L-11,0')
          }
          19%,100% {
            opacity:1;
            d:path('M0,0L0,3')
          }
        }
        @keyframes w0 {
          0%,19% {
            transform:translate(62px,70px)
          }
          20.5% {
            transform:translate(62px,79px)
          }
          22% {
            transform:translate(55px,85px)
          }
          100% {
            transform:translate(55px,85px)
          }
        }
        .rb1 {
          animation:rb1 18s linear infinite
        }
        .jb1 {
          animation:jb1 18s linear infinite
        }
        .db1,.pb1 {
          opacity:0
        }
        .db1 {
          animation:db1 18s linear infinite
        }
        .pb1 {
          animation:pb1 18s linear infinite
        }
        .ro1 {
          transform:translate(85px,70px);
          animation:ro1 18s linear infinite
        }
        .w1 {
          transform:translate(85px,85px);
          animation:w1 18s linear infinite
        }
        .nh1 {
          animation:nh1 18s linear infinite
        }
        .th1 {
          transform:translate(0px,3px);
          animation:th1 18s linear infinite
        }
        @keyframes rb1 {
          0%,23% {
            d:path('M70,70L78,70')
          }
          27%,100% {
            d:path('M70,70L85,70')
          }
        }
        @keyframes jb1 {
          0%,23% {
            opacity:0;
            d:path('M100,70L78,70')
          }
          27%,100% {
            opacity:1;
            d:path('M100,70L85,70')
          }
        }
        @keyframes db1 {
          0%,23% {
            opacity:1
          }
          27%,100% {
            opacity:0
          }
        }
        @keyframes pb1 {
          0%,23% {
            opacity:1;
            d:path('M78,70L81,70')
          }
          27%,100% {
            opacity:0;
            d:path('M85,70L92,73')
          }
        }
        @keyframes ro1 {
          0%,23% {
            transform:translate(78px,70px)
          }
          27%,100% {
            transform:translate(85px,70px)
          }
        }
        @keyframes th1 {
          0%,23% {
            transform:translate(-11px,0px)
          }
          27%,100% {
            transform:translate(0px,3px)
          }
        }
        @keyframes nh1 {
          0%,23% {
            opacity:0;
            d:path('M0,0L-11,0')
          }
          27%,100% {
            opacity:1;
            d:path('M0,0L0,3')
          }
        }
        @keyframes w1 {
          0%,27% {
            transform:translate(92px,70px)
          }
          28.5% {
            transform:translate(92px,79px)
          }
          30% {
            transform:translate(85px,85px)
          }
          100% {
            transform:translate(85px,85px)
          }
        }
        .rb2 {
          animation:rb2 18s linear infinite
        }
        .jb2 {
          animation:jb2 18s linear infinite
        }
        .db2,.pb2 {
          opacity:0
        }
        .db2 {
          animation:db2 18s linear infinite
        }
        .pb2 {
          animation:pb2 18s linear infinite
        }
        .ro2 {
          transform:translate(40px,55px);
          animation:ro2 18s linear infinite
        }
        .w2 {
          transform:translate(55px,55px);
          animation:w2 18s linear infinite
        }
        .nh2 {
          animation:nh2 18s linear infinite
        }
        .th2 {
          transform:translate(-3px,0px);
          animation:th2 18s linear infinite
        }
        @keyframes rb2 {
          0%,31% {
            d:path('M40,40L40,48')
          }
          35%,100% {
            d:path('M40,40L40,55')
          }
        }
        @keyframes jb2 {
          0%,31% {
            opacity:0;
            d:path('M40,70L40,48')
          }
          35%,100% {
            opacity:1;
            d:path('M40,70L40,55')
          }
        }
        @keyframes db2 {
          0%,31% {
            opacity:1
          }
          35%,100% {
            opacity:0
          }
        }
        @keyframes pb2 {
          0%,31% {
            opacity:1;
            d:path('M40,48L40,51')
          }
          35%,100% {
            opacity:0;
            d:path('M40,55L37,62')
          }
        }
        @keyframes ro2 {
          0%,31% {
            transform:translate(40px,48px)
          }
          35%,100% {
            transform:translate(40px,55px)
          }
        }
        @keyframes th2 {
          0%,31% {
            transform:translate(0px,-11px)
          }
          35%,100% {
            transform:translate(-3px,0px)
          }
        }
        @keyframes nh2 {
          0%,31% {
            opacity:0;
            d:path('M0,0L0,-11')
          }
          35%,100% {
            opacity:1;
            d:path('M0,0L-3,0')
          }
        }
        @keyframes w2 {
          0%,35% {
            transform:translate(40px,62px)
          }
          36.5% {
            transform:translate(49px,62px)
          }
          38% {
            transform:translate(55px,55px)
          }
          100% {
            transform:translate(55px,55px)
          }
        }
        .rb3 {
          animation:rb3 18s linear infinite
        }
        .jb3 {
          animation:jb3 18s linear infinite
        }
        .db3,.pb3 {
          opacity:0
        }
        .db3 {
          animation:db3 18s linear infinite
        }
        .pb3 {
          animation:pb3 18s linear infinite
        }
        .ro3 {
          transform:translate(70px,55px);
          animation:ro3 18s linear infinite
        }
        .w3 {
          transform:translate(85px,55px);
          animation:w3 18s linear infinite
        }
        .nh3 {
          animation:nh3 18s linear infinite
        }
        .th3 {
          transform:translate(-3px,0px);
          animation:th3 18s linear infinite
        }
        @keyframes rb3 {
          0%,39% {
            d:path('M70,40L70,48')
          }
          43%,100% {
            d:path('M70,40L70,55')
          }
        }
        @keyframes jb3 {
          0%,39% {
            opacity:0;
            d:path('M70,70L70,48')
          }
          43%,100% {
            opacity:1;
            d:path('M70,70L70,55')
          }
        }
        @keyframes db3 {
          0%,39% {
            opacity:1
          }
          43%,100% {
            opacity:0
          }
        }
        @keyframes pb3 {
          0%,39% {
            opacity:1;
            d:path('M70,48L70,51')
          }
          43%,100% {
            opacity:0;
            d:path('M70,55L67,62')
          }
        }
        @keyframes ro3 {
          0%,39% {
            transform:translate(70px,48px)
          }
          43%,100% {
            transform:translate(70px,55px)
          }
        }
        @keyframes th3 {
          0%,39% {
            transform:translate(0px,-11px)
          }
          43%,100% {
            transform:translate(-3px,0px)
          }
        }
        @keyframes nh3 {
          0%,39% {
            opacity:0;
            d:path('M0,0L0,-11')
          }
          43%,100% {
            opacity:1;
            d:path('M0,0L-3,0')
          }
        }
        @keyframes w3 {
          0%,43% {
            transform:translate(70px,62px)
          }
          44.5% {
            transform:translate(79px,62px)
          }
          46% {
            transform:translate(85px,55px)
          }
          100% {
            transform:translate(85px,55px)
          }
        }
        .rb4 {
          animation:rb4 18s linear infinite
        }
        .jb4 {
          animation:jb4 18s linear infinite
        }
        .db4,.pb4 {
          opacity:0
        }
        .db4 {
          animation:db4 18s linear infinite
        }
        .pb4 {
          animation:pb4 18s linear infinite
        }
        .ro4 {
          transform:translate(100px,55px);
          animation:ro4 18s linear infinite
        }
        .w4 {
          transform:translate(24px,26px);
          animation:w4 18s linear infinite
        }
        .nh4 {
          animation:nh4 18s linear infinite
        }
        .th4 {
          transform:translate(-3px,0px);
          animation:th4 18s linear infinite
        }
        @keyframes rb4 {
          0%,47% {
            d:path('M100,40L100,48')
          }
          51%,100% {
            d:path('M100,40L100,55')
          }
        }
        @keyframes jb4 {
          0%,47% {
            opacity:0;
            d:path('M100,70L100,48')
          }
          51%,100% {
            opacity:1;
            d:path('M100,70L100,55')
          }
        }
        @keyframes db4 {
          0%,47% {
            opacity:1
          }
          51%,100% {
            opacity:0
          }
        }
        @keyframes pb4 {
          0%,47% {
            opacity:1;
            d:path('M100,48L100,51')
          }
          51%,100% {
            opacity:0;
            d:path('M100,55L97,62')
          }
        }
        @keyframes ro4 {
          0%,47% {
            transform:translate(100px,48px)
          }
          51%,100% {
            transform:translate(100px,55px)
          }
        }
        @keyframes th4 {
          0%,47% {
            transform:translate(0px,-11px)
          }
          51%,100% {
            transform:translate(-3px,0px)
          }
        }
        @keyframes nh4 {
          0%,47% {
            opacity:0;
            d:path('M0,0L0,-11')
          }
          51%,100% {
            opacity:1;
            d:path('M0,0L-3,0')
          }
        }
        @keyframes w4 {
          0%,51% {
            transform:translate(100px,62px)
          }
          51.75% {
            transform:translate(118px,62px)
          }
          52.5% {
            transform:translate(118px,22px)
          }
          53.25% {
            transform:translate(24px,22px)
          }
          54% {
            transform:translate(24px,26px)
          }
          100% {
            transform:translate(24px,26px)
          }
        }
        .rb5 {
          animation:rb5 18s linear infinite
        }
        .jb5 {
          animation:jb5 18s linear infinite
        }
        .db5,.pb5 {
          opacity:0
        }
        .db5 {
          animation:db5 18s linear infinite
        }
        .pb5 {
          animation:pb5 18s linear infinite
        }
        .ro5 {
          transform:translate(40px,85px);
          animation:ro5 18s linear infinite
        }
        .w5 {
          transform:translate(24px,115px);
          animation:w5 18s linear infinite
        }
        .nh5 {
          animation:nh5 18s linear infinite
        }
        .th5 {
          transform:translate(-3px,0px);
          animation:th5 18s linear infinite
        }
        @keyframes rb5 {
          0%,55% {
            d:path('M40,70L40,78')
          }
          59%,100% {
            d:path('M40,70L40,85')
          }
        }
        @keyframes jb5 {
          0%,55% {
            opacity:0;
            d:path('M40,100L40,78')
          }
          59%,100% {
            opacity:1;
            d:path('M40,100L40,85')
          }
        }
        @keyframes db5 {
          0%,55% {
            opacity:1
          }
          59%,100% {
            opacity:0
          }
        }
        @keyframes pb5 {
          0%,55% {
            opacity:1;
            d:path('M40,78L40,81')
          }
          59%,100% {
            opacity:0;
            d:path('M40,85L37,92')
          }
        }
        @keyframes ro5 {
          0%,55% {
            transform:translate(40px,78px)
          }
          59%,100% {
            transform:translate(40px,85px)
          }
        }
        @keyframes th5 {
          0%,55% {
            transform:translate(0px,-11px)
          }
          59%,100% {
            transform:translate(-3px,0px)
          }
        }
        @keyframes nh5 {
          0%,55% {
            opacity:0;
            d:path('M0,0L0,-11')
          }
          59%,100% {
            opacity:1;
            d:path('M0,0L-3,0')
          }
        }
        @keyframes w5 {
          0%,59% {
            transform:translate(40px,92px)
          }
          60.5% {
            transform:translate(22px,92px)
          }
          62% {
            transform:translate(24px,115px)
          }
          100% {
            transform:translate(24px,115px)
          }
        }
        .rb6 {
          animation:rb6 18s linear infinite
        }
        .jb6 {
          animation:jb6 18s linear infinite
        }
        .db6,.pb6 {
          opacity:0
        }
        .db6 {
          animation:db6 18s linear infinite
        }
        .pb6 {
          animation:pb6 18s linear infinite
        }
        .ro6 {
          transform:translate(70px,85px);
          animation:ro6 18s linear infinite
        }
        .w6 {
          transform:translate(115px,115px);
          animation:w6 18s linear infinite
        }
        .nh6 {
          animation:nh6 18s linear infinite
        }
        .th6 {
          transform:translate(-3px,0px);
          animation:th6 18s linear infinite
        }
        @keyframes rb6 {
          0%,63% {
            d:path('M70,70L70,78')
          }
          67%,100% {
            d:path('M70,70L70,85')
          }
        }
        @keyframes jb6 {
          0%,63% {
            opacity:0;
            d:path('M70,100L70,78')
          }
          67%,100% {
            opacity:1;
            d:path('M70,100L70,85')
          }
        }
        @keyframes db6 {
          0%,63% {
            opacity:1
          }
          67%,100% {
            opacity:0
          }
        }
        @keyframes pb6 {
          0%,63% {
            opacity:1;
            d:path('M70,78L70,81')
          }
          67%,100% {
            opacity:0;
            d:path('M70,85L67,92')
          }
        }
        @keyframes ro6 {
          0%,63% {
            transform:translate(70px,78px)
          }
          67%,100% {
            transform:translate(70px,85px)
          }
        }
        @keyframes th6 {
          0%,63% {
            transform:translate(0px,-11px)
          }
          67%,100% {
            transform:translate(-3px,0px)
          }
        }
        @keyframes nh6 {
          0%,63% {
            opacity:0;
            d:path('M0,0L0,-11')
          }
          67%,100% {
            opacity:1;
            d:path('M0,0L-3,0')
          }
        }
        @keyframes w6 {
          0%,67% {
            transform:translate(70px,92px)
          }
          67.75% {
            transform:translate(85px,92px)
          }
          68.5% {
            transform:translate(85px,119px)
          }
          69.25% {
            transform:translate(115px,119px)
          }
          70% {
            transform:translate(115px,115px)
          }
          100% {
            transform:translate(115px,115px)
          }
        }
        .rb7 {
          animation:rb7 18s linear infinite
        }
        .jb7 {
          animation:jb7 18s linear infinite
        }
        .db7,.pb7 {
          opacity:0
        }
        .db7 {
          animation:db7 18s linear infinite
        }
        .pb7 {
          animation:pb7 18s linear infinite
        }
        .ro7 {
          transform:translate(100px,85px);
          animation:ro7 18s linear infinite
        }
        .w7 {
          transform:translate(115px,25px);
          animation:w7 18s linear infinite
        }
        .nh7 {
          animation:nh7 18s linear infinite
        }
        .th7 {
          transform:translate(-3px,0px);
          animation:th7 18s linear infinite
        }
        @keyframes rb7 {
          0%,71% {
            d:path('M100,70L100,78')
          }
          75%,100% {
            d:path('M100,70L100,85')
          }
        }
        @keyframes jb7 {
          0%,71% {
            opacity:0;
            d:path('M100,100L100,78')
          }
          75%,100% {
            opacity:1;
            d:path('M100,100L100,85')
          }
        }
        @keyframes db7 {
          0%,71% {
            opacity:1
          }
          75%,100% {
            opacity:0
          }
        }
        @keyframes pb7 {
          0%,71% {
            opacity:1;
            d:path('M100,78L100,81')
          }
          75%,100% {
            opacity:0;
            d:path('M100,85L97,92')
          }
        }
        @keyframes ro7 {
          0%,71% {
            transform:translate(100px,78px)
          }
          75%,100% {
            transform:translate(100px,85px)
          }
        }
        @keyframes th7 {
          0%,71% {
            transform:translate(0px,-11px)
          }
          75%,100% {
            transform:translate(-3px,0px)
          }
        }
        @keyframes nh7 {
          0%,71% {
            opacity:0;
            d:path('M0,0L0,-11')
          }
          75%,100% {
            opacity:1;
            d:path('M0,0L-3,0')
          }
        }
        @keyframes w7 {
          0%,75% {
            transform:translate(100px,92px)
          }
          76.5% {
            transform:translate(118px,92px)
          }
          77.6% {
            transform:translate(118px,25px)
          }
          78% {
            transform:translate(115px,25px)
          }
          100% {
            transform:translate(115px,25px)
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Sol-Gel Network Formation">
        <rect class="liquid" x="18" y="18" width="104" height="108" rx="4"/>
        <g class="network">
          <path class="bond retained-bond rb0" d="M40,70L55,70"/>
          <path class="bond joining jb0" d="M70,70L55,70"/>
          <path class="bond departing db0" d="M70,70L62,70"/>
          <path class="bond proton-bond pb0" d="M48,70L51,70"/>
          <circle class="oxygen retained ro0" r="1.8"/>
          <g class="water w0">
            <path class="bond" d="M0,0L-3,0"/>
            <path class="bond new-hydrogen nh0" d="M0,0L0,3"/>
            <circle class="oxygen" r="1.8"/>
            <circle class="hydrogen" cx="-3" cy="0" r=".9"/>
            <circle class="hydrogen th0" r=".9"/>
          </g>
          <path class="bond retained-bond rb1" d="M70,70L85,70"/>
          <path class="bond joining jb1" d="M100,70L85,70"/>
          <path class="bond departing db1" d="M100,70L92,70"/>
          <path class="bond proton-bond pb1" d="M78,70L81,70"/>
          <circle class="oxygen retained ro1" r="1.8"/>
          <g class="water w1">
            <path class="bond" d="M0,0L-3,0"/>
            <path class="bond new-hydrogen nh1" d="M0,0L0,3"/>
            <circle class="oxygen" r="1.8"/>
            <circle class="hydrogen" cx="-3" cy="0" r=".9"/>
            <circle class="hydrogen th1" r=".9"/>
          </g>
          <path class="bond retained-bond rb2" d="M40,40L40,55"/>
          <path class="bond joining jb2" d="M40,70L40,55"/>
          <path class="bond departing db2" d="M40,70L40,62"/>
          <path class="bond proton-bond pb2" d="M40,48L40,51"/>
          <circle class="oxygen retained ro2" r="1.8"/>
          <g class="water w2">
            <path class="bond" d="M0,0L0,-3"/>
            <path class="bond new-hydrogen nh2" d="M0,0L-3,0"/>
            <circle class="oxygen" r="1.8"/>
            <circle class="hydrogen" cx="0" cy="-3" r=".9"/>
            <circle class="hydrogen th2" r=".9"/>
          </g>
          <path class="bond retained-bond rb3" d="M70,40L70,55"/>
          <path class="bond joining jb3" d="M70,70L70,55"/>
          <path class="bond departing db3" d="M70,70L70,62"/>
          <path class="bond proton-bond pb3" d="M70,48L70,51"/>
          <circle class="oxygen retained ro3" r="1.8"/>
          <g class="water w3">
            <path class="bond" d="M0,0L0,-3"/>
            <path class="bond new-hydrogen nh3" d="M0,0L-3,0"/>
            <circle class="oxygen" r="1.8"/>
            <circle class="hydrogen" cx="0" cy="-3" r=".9"/>
            <circle class="hydrogen th3" r=".9"/>
          </g>
          <path class="bond retained-bond rb4" d="M100,40L100,55"/>
          <path class="bond joining jb4" d="M100,70L100,55"/>
          <path class="bond departing db4" d="M100,70L100,62"/>
          <path class="bond proton-bond pb4" d="M100,48L100,51"/>
          <circle class="oxygen retained ro4" r="1.8"/>
          <g class="water w4">
            <path class="bond" d="M0,0L0,-3"/>
            <path class="bond new-hydrogen nh4" d="M0,0L-3,0"/>
            <circle class="oxygen" r="1.8"/>
            <circle class="hydrogen" cx="0" cy="-3" r=".9"/>
            <circle class="hydrogen th4" r=".9"/>
          </g>
          <path class="bond retained-bond rb5" d="M40,70L40,85"/>
          <path class="bond joining jb5" d="M40,100L40,85"/>
          <path class="bond departing db5" d="M40,100L40,92"/>
          <path class="bond proton-bond pb5" d="M40,78L40,81"/>
          <circle class="oxygen retained ro5" r="1.8"/>
          <g class="water w5">
            <path class="bond" d="M0,0L0,-3"/>
            <path class="bond new-hydrogen nh5" d="M0,0L-3,0"/>
            <circle class="oxygen" r="1.8"/>
            <circle class="hydrogen" cx="0" cy="-3" r=".9"/>
            <circle class="hydrogen th5" r=".9"/>
          </g>
          <path class="bond retained-bond rb6" d="M70,70L70,85"/>
          <path class="bond joining jb6" d="M70,100L70,85"/>
          <path class="bond departing db6" d="M70,100L70,92"/>
          <path class="bond proton-bond pb6" d="M70,78L70,81"/>
          <circle class="oxygen retained ro6" r="1.8"/>
          <g class="water w6">
            <path class="bond" d="M0,0L0,-3"/>
            <path class="bond new-hydrogen nh6" d="M0,0L-3,0"/>
            <circle class="oxygen" r="1.8"/>
            <circle class="hydrogen" cx="0" cy="-3" r=".9"/>
            <circle class="hydrogen th6" r=".9"/>
          </g>
          <path class="bond retained-bond rb7" d="M100,70L100,85"/>
          <path class="bond joining jb7" d="M100,100L100,85"/>
          <path class="bond departing db7" d="M100,100L100,92"/>
          <path class="bond proton-bond pb7" d="M100,78L100,81"/>
          <circle class="oxygen retained ro7" r="1.8"/>
          <g class="water w7">
            <path class="bond" d="M0,0L0,-3"/>
            <path class="bond new-hydrogen nh7" d="M0,0L-3,0"/>
            <circle class="oxygen" r="1.8"/>
            <circle class="hydrogen" cx="0" cy="-3" r=".9"/>
            <circle class="hydrogen th7" r=".9"/>
          </g>
          <path class="bond" d="M40,40L51,40"/>
          <circle class="oxygen" cx="48" cy="40" r="1.8"/>
          <circle class="hydrogen" cx="51" cy="40" r=".9"/>
          <path class="bond" d="M40,40L29,40"/>
          <circle class="oxygen" cx="32" cy="40" r="1.8"/>
          <circle class="hydrogen" cx="29" cy="40" r=".9"/>
          <path class="bond" d="M40,40L40,29"/>
          <circle class="oxygen" cx="40" cy="32" r="1.8"/>
          <circle class="hydrogen" cx="40" cy="29" r=".9"/>
          <circle class="silicon" cx="40" cy="40" r="3"/>
          <path class="bond" d="M70,40L81,40"/>
          <circle class="oxygen" cx="78" cy="40" r="1.8"/>
          <circle class="hydrogen" cx="81" cy="40" r=".9"/>
          <path class="bond" d="M70,40L59,40"/>
          <circle class="oxygen" cx="62" cy="40" r="1.8"/>
          <circle class="hydrogen" cx="59" cy="40" r=".9"/>
          <path class="bond" d="M70,40L70,29"/>
          <circle class="oxygen" cx="70" cy="32" r="1.8"/>
          <circle class="hydrogen" cx="70" cy="29" r=".9"/>
          <circle class="silicon" cx="70" cy="40" r="3"/>
          <path class="bond" d="M100,40L111,40"/>
          <circle class="oxygen" cx="108" cy="40" r="1.8"/>
          <circle class="hydrogen" cx="111" cy="40" r=".9"/>
          <path class="bond" d="M100,40L89,40"/>
          <circle class="oxygen" cx="92" cy="40" r="1.8"/>
          <circle class="hydrogen" cx="89" cy="40" r=".9"/>
          <path class="bond" d="M100,40L100,29"/>
          <circle class="oxygen" cx="100" cy="32" r="1.8"/>
          <circle class="hydrogen" cx="100" cy="29" r=".9"/>
          <circle class="silicon" cx="100" cy="40" r="3"/>
          <path class="bond" d="M40,70L29,70"/>
          <circle class="oxygen" cx="32" cy="70" r="1.8"/>
          <circle class="hydrogen" cx="29" cy="70" r=".9"/>
          <circle class="silicon" cx="40" cy="70" r="3"/>
          <circle class="silicon" cx="70" cy="70" r="3"/>
          <path class="bond" d="M100,70L111,70"/>
          <circle class="oxygen" cx="108" cy="70" r="1.8"/>
          <circle class="hydrogen" cx="111" cy="70" r=".9"/>
          <circle class="silicon" cx="100" cy="70" r="3"/>
          <path class="bond" d="M40,100L51,100"/>
          <circle class="oxygen" cx="48" cy="100" r="1.8"/>
          <circle class="hydrogen" cx="51" cy="100" r=".9"/>
          <path class="bond" d="M40,100L29,100"/>
          <circle class="oxygen" cx="32" cy="100" r="1.8"/>
          <circle class="hydrogen" cx="29" cy="100" r=".9"/>
          <path class="bond" d="M40,100L40,111"/>
          <circle class="oxygen" cx="40" cy="108" r="1.8"/>
          <circle class="hydrogen" cx="40" cy="111" r=".9"/>
          <circle class="silicon" cx="40" cy="100" r="3"/>
          <path class="bond" d="M70,100L81,100"/>
          <circle class="oxygen" cx="78" cy="100" r="1.8"/>
          <circle class="hydrogen" cx="81" cy="100" r=".9"/>
          <path class="bond" d="M70,100L59,100"/>
          <circle class="oxygen" cx="62" cy="100" r="1.8"/>
          <circle class="hydrogen" cx="59" cy="100" r=".9"/>
          <path class="bond" d="M70,100L70,111"/>
          <circle class="oxygen" cx="70" cy="108" r="1.8"/>
          <circle class="hydrogen" cx="70" cy="111" r=".9"/>
          <circle class="silicon" cx="70" cy="100" r="3"/>
          <path class="bond" d="M100,100L111,100"/>
          <circle class="oxygen" cx="108" cy="100" r="1.8"/>
          <circle class="hydrogen" cx="111" cy="100" r=".9"/>
          <path class="bond" d="M100,100L89,100"/>
          <circle class="oxygen" cx="92" cy="100" r="1.8"/>
          <circle class="hydrogen" cx="89" cy="100" r=".9"/>
          <path class="bond" d="M100,100L100,111"/>
          <circle class="oxygen" cx="100" cy="108" r="1.8"/>
          <circle class="hydrogen" cx="100" cy="111" r=".9"/>
          <circle class="silicon" cx="100" cy="100" r="3"/>
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

if (!customElements.get("concept-sol-gel-network-formation")) {
  customElements.define("concept-sol-gel-network-formation", ConceptSolGelNetworkFormation);
}
