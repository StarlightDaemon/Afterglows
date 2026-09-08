// Central Limit Theorem. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptCentralLimitTheorem extends HTMLElement {
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
        .d0 {
          transform-origin:18px 126px;
          animation:density0 10s linear infinite
        }
        @keyframes density0 {
          0% {
            transform:scaleY(1)
          }
          95% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(1)
          }
        }
        .d1 {
          transform-origin:24.75px 126px;
          animation:density1 10s linear infinite
        }
        @keyframes density1 {
          0% {
            transform:scaleY(1)
          }
          95% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(1)
          }
        }
        .d2 {
          transform-origin:31.5px 126px;
          animation:density2 10s linear infinite
        }
        @keyframes density2 {
          0% {
            transform:scaleY(0.897)
          }
          33.9% {
            transform:scaleY(0.897)
          }
          34% {
            transform:scaleY(0.931)
          }
          51.9% {
            transform:scaleY(0.931)
          }
          52% {
            transform:scaleY(0.966)
          }
          69.9% {
            transform:scaleY(0.966)
          }
          70% {
            transform:scaleY(1)
          }
          95% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(0.897)
          }
        }
        .d3 {
          transform-origin:38.25px 126px;
          animation:density3 10s linear infinite
        }
        @keyframes density3 {
          0% {
            transform:scaleY(0.966)
          }
          15.9% {
            transform:scaleY(0.966)
          }
          16% {
            transform:scaleY(1)
          }
          95% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(0.966)
          }
        }
        .d4 {
          transform-origin:45px 126px;
          animation:density4 10s linear infinite
        }
        @keyframes density4 {
          0% {
            transform:scaleY(1)
          }
          95% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(1)
          }
        }
        .d5 {
          transform-origin:51.75px 126px;
          animation:density5 10s linear infinite
        }
        @keyframes density5 {
          0% {
            transform:scaleY(0.944)
          }
          87.9% {
            transform:scaleY(0.944)
          }
          88% {
            transform:scaleY(1)
          }
          95% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(0.944)
          }
        }
        .d6 {
          transform-origin:58.5px 126px;
          animation:density6 10s linear infinite
        }
        @keyframes density6 {
          0% {
            transform:scaleY(1)
          }
          95% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(1)
          }
        }
        .d7 {
          transform-origin:65.25px 126px;
          animation:density7 10s linear infinite
        }
        @keyframes density7 {
          0% {
            transform:scaleY(1)
          }
          95% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(1)
          }
        }
        .d8 {
          transform-origin:72px 126px;
          animation:density8 10s linear infinite
        }
        @keyframes density8 {
          0% {
            transform:scaleY(1)
          }
          95% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(1)
          }
        }
        .d9 {
          transform-origin:78.75px 126px;
          animation:density9 10s linear infinite
        }
        @keyframes density9 {
          0% {
            transform:scaleY(1)
          }
          95% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(1)
          }
        }
        .d10 {
          transform-origin:85.5px 126px;
          animation:density10 10s linear infinite
        }
        @keyframes density10 {
          0% {
            transform:scaleY(1)
          }
          95% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(1)
          }
        }
        .d11 {
          transform-origin:92.25px 126px;
          animation:density11 10s linear infinite
        }
        @keyframes density11 {
          0% {
            transform:scaleY(1)
          }
          95% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(1)
          }
        }
        .d12 {
          transform-origin:99px 126px;
          animation:density12 10s linear infinite
        }
        @keyframes density12 {
          0% {
            transform:scaleY(1)
          }
          95% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(1)
          }
        }
        .d13 {
          transform-origin:105.75px 126px;
          animation:density13 10s linear infinite
        }
        @keyframes density13 {
          0% {
            transform:scaleY(1)
          }
          95% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(1)
          }
        }
        .d14 {
          transform-origin:112.5px 126px;
          animation:density14 10s linear infinite
        }
        @keyframes density14 {
          0% {
            transform:scaleY(1)
          }
          95% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(1)
          }
        }
        .d15 {
          transform-origin:119.25px 126px;
          animation:density15 10s linear infinite
        }
        @keyframes density15 {
          0% {
            transform:scaleY(1)
          }
          95% {
            transform:scaleY(1)
          }
          100% {
            transform:scaleY(1)
          }
        }
        .sample0-0 {
          animation:average0-0 10s ease-in-out infinite
        }
        @keyframes average0-0 {
          0%,3% {
            transform:translate(0,0)
          }
          9% {
            transform:translate(-14.412px,0)
          }
          15%,100% {
            transform:translate(-14.412px,22px)
          }
        }
        .sample0-1 {
          animation:average0-1 10s ease-in-out infinite
        }
        @keyframes average0-1 {
          0%,3% {
            transform:translate(0,0)
          }
          9% {
            transform:translate(9.191px,0)
          }
          15%,100% {
            transform:translate(9.191px,22px)
          }
        }
        .sample0-2 {
          animation:average0-2 10s ease-in-out infinite
        }
        @keyframes average0-2 {
          0%,3% {
            transform:translate(0,0)
          }
          9% {
            transform:translate(10.564px,0)
          }
          15%,100% {
            transform:translate(10.564px,22px)
          }
        }
        .sample0-3 {
          animation:average0-3 10s ease-in-out infinite
        }
        @keyframes average0-3 {
          0%,3% {
            transform:translate(0,0)
          }
          9% {
            transform:translate(21.379px,0)
          }
          15%,100% {
            transform:translate(21.379px,22px)
          }
        }
        .sample0-4 {
          animation:average0-4 10s ease-in-out infinite
        }
        @keyframes average0-4 {
          0%,3% {
            transform:translate(0,0)
          }
          9% {
            transform:translate(-37.458px,0)
          }
          15%,100% {
            transform:translate(-37.458px,22px)
          }
        }
        .sample0-5 {
          animation:average0-5 10s ease-in-out infinite
        }
        @keyframes average0-5 {
          0%,3% {
            transform:translate(0,0)
          }
          9% {
            transform:translate(20.153px,0)
          }
          15%,100% {
            transform:translate(20.153px,22px)
          }
        }
        .sample0-6 {
          animation:average0-6 10s ease-in-out infinite
        }
        @keyframes average0-6 {
          0%,3% {
            transform:translate(0,0)
          }
          9% {
            transform:translate(-29.115px,0)
          }
          15%,100% {
            transform:translate(-29.115px,22px)
          }
        }
        .sample0-7 {
          animation:average0-7 10s ease-in-out infinite
        }
        @keyframes average0-7 {
          0%,3% {
            transform:translate(0,0)
          }
          9% {
            transform:translate(19.698px,0)
          }
          15%,100% {
            transform:translate(19.698px,22px)
          }
        }
        .batch0 {
          opacity:1;
          animation:batch0 10s linear infinite
        }
        @keyframes batch0 {
          0%,0% {
            opacity:0
          }
          0.1%,15% {
            opacity:1
          }
          16%,100% {
            opacity:0
          }
        }
        .sample1-0 {
          animation:average1-0 10s ease-in-out infinite
        }
        @keyframes average1-0 {
          0%,21% {
            transform:translate(0,0)
          }
          27% {
            transform:translate(-5.124px,0)
          }
          33%,100% {
            transform:translate(-5.124px,24.138px)
          }
        }
        .sample1-1 {
          animation:average1-1 10s ease-in-out infinite
        }
        @keyframes average1-1 {
          0%,21% {
            transform:translate(0,0)
          }
          27% {
            transform:translate(-1.336px,0)
          }
          33%,100% {
            transform:translate(-1.336px,24.138px)
          }
        }
        .sample1-2 {
          animation:average1-2 10s ease-in-out infinite
        }
        @keyframes average1-2 {
          0%,21% {
            transform:translate(0,0)
          }
          27% {
            transform:translate(-13.274px,0)
          }
          33%,100% {
            transform:translate(-13.274px,24.138px)
          }
        }
        .sample1-3 {
          animation:average1-3 10s ease-in-out infinite
        }
        @keyframes average1-3 {
          0%,21% {
            transform:translate(0,0)
          }
          27% {
            transform:translate(-24.646px,0)
          }
          33%,100% {
            transform:translate(-24.646px,24.138px)
          }
        }
        .sample1-4 {
          animation:average1-4 10s ease-in-out infinite
        }
        @keyframes average1-4 {
          0%,21% {
            transform:translate(0,0)
          }
          27% {
            transform:translate(15.085px,0)
          }
          33%,100% {
            transform:translate(15.085px,24.138px)
          }
        }
        .sample1-5 {
          animation:average1-5 10s ease-in-out infinite
        }
        @keyframes average1-5 {
          0%,21% {
            transform:translate(0,0)
          }
          27% {
            transform:translate(7.786px,0)
          }
          33%,100% {
            transform:translate(7.786px,24.138px)
          }
        }
        .sample1-6 {
          animation:average1-6 10s ease-in-out infinite
        }
        @keyframes average1-6 {
          0%,21% {
            transform:translate(0,0)
          }
          27% {
            transform:translate(5.372px,0)
          }
          33%,100% {
            transform:translate(5.372px,24.138px)
          }
        }
        .sample1-7 {
          animation:average1-7 10s ease-in-out infinite
        }
        @keyframes average1-7 {
          0%,21% {
            transform:translate(0,0)
          }
          27% {
            transform:translate(16.138px,0)
          }
          33%,100% {
            transform:translate(16.138px,24.138px)
          }
        }
        .batch1 {
          opacity:0;
          animation:batch1 10s linear infinite
        }
        @keyframes batch1 {
          0%,18% {
            opacity:0
          }
          18.1%,33% {
            opacity:1
          }
          34%,100% {
            opacity:0
          }
        }
        .sample2-0 {
          animation:average2-0 10s ease-in-out infinite
        }
        @keyframes average2-0 {
          0%,39% {
            transform:translate(0,0)
          }
          45% {
            transform:translate(0.119px,0)
          }
          51%,100% {
            transform:translate(0.119px,23.069px)
          }
        }
        .sample2-1 {
          animation:average2-1 10s ease-in-out infinite
        }
        @keyframes average2-1 {
          0%,39% {
            transform:translate(0,0)
          }
          45% {
            transform:translate(9.31px,0)
          }
          51%,100% {
            transform:translate(9.31px,23.069px)
          }
        }
        .sample2-2 {
          animation:average2-2 10s ease-in-out infinite
        }
        @keyframes average2-2 {
          0%,39% {
            transform:translate(0,0)
          }
          45% {
            transform:translate(12.162px,0)
          }
          51%,100% {
            transform:translate(12.162px,23.069px)
          }
        }
        .sample2-3 {
          animation:average2-3 10s ease-in-out infinite
        }
        @keyframes average2-3 {
          0%,39% {
            transform:translate(0,0)
          }
          45% {
            transform:translate(-1.368px,0)
          }
          51%,100% {
            transform:translate(-1.368px,23.069px)
          }
        }
        .sample2-4 {
          animation:average2-4 10s ease-in-out infinite
        }
        @keyframes average2-4 {
          0%,39% {
            transform:translate(0,0)
          }
          45% {
            transform:translate(-31.093px,0)
          }
          51%,100% {
            transform:translate(-31.093px,23.069px)
          }
        }
        .sample2-5 {
          animation:average2-5 10s ease-in-out infinite
        }
        @keyframes average2-5 {
          0%,39% {
            transform:translate(0,0)
          }
          45% {
            transform:translate(14.677px,0)
          }
          51%,100% {
            transform:translate(14.677px,23.069px)
          }
        }
        .sample2-6 {
          animation:average2-6 10s ease-in-out infinite
        }
        @keyframes average2-6 {
          0%,39% {
            transform:translate(0,0)
          }
          45% {
            transform:translate(-6.28px,0)
          }
          51%,100% {
            transform:translate(-6.28px,23.069px)
          }
        }
        .sample2-7 {
          animation:average2-7 10s ease-in-out infinite
        }
        @keyframes average2-7 {
          0%,39% {
            transform:translate(0,0)
          }
          45% {
            transform:translate(2.475px,0)
          }
          51%,100% {
            transform:translate(2.475px,23.069px)
          }
        }
        .batch2 {
          opacity:0;
          animation:batch2 10s linear infinite
        }
        @keyframes batch2 {
          0%,36% {
            opacity:0
          }
          36.1%,51% {
            opacity:1
          }
          52%,100% {
            opacity:0
          }
        }
        .sample3-0 {
          animation:average3-0 10s ease-in-out infinite
        }
        @keyframes average3-0 {
          0%,57% {
            transform:translate(0,0)
          }
          63% {
            transform:translate(7.629px,0)
          }
          69%,100% {
            transform:translate(7.629px,22px)
          }
        }
        .sample3-1 {
          animation:average3-1 10s ease-in-out infinite
        }
        @keyframes average3-1 {
          0%,57% {
            transform:translate(0,0)
          }
          63% {
            transform:translate(7.801px,0)
          }
          69%,100% {
            transform:translate(7.801px,22px)
          }
        }
        .sample3-2 {
          animation:average3-2 10s ease-in-out infinite
        }
        @keyframes average3-2 {
          0%,57% {
            transform:translate(0,0)
          }
          63% {
            transform:translate(7.277px,0)
          }
          69%,100% {
            transform:translate(7.277px,22px)
          }
        }
        .sample3-3 {
          animation:average3-3 10s ease-in-out infinite
        }
        @keyframes average3-3 {
          0%,57% {
            transform:translate(0,0)
          }
          63% {
            transform:translate(3.137px,0)
          }
          69%,100% {
            transform:translate(3.137px,22px)
          }
        }
        .sample3-4 {
          animation:average3-4 10s ease-in-out infinite
        }
        @keyframes average3-4 {
          0%,57% {
            transform:translate(0,0)
          }
          63% {
            transform:translate(7.415px,0)
          }
          69%,100% {
            transform:translate(7.415px,22px)
          }
        }
        .sample3-5 {
          animation:average3-5 10s ease-in-out infinite
        }
        @keyframes average3-5 {
          0%,57% {
            transform:translate(0,0)
          }
          63% {
            transform:translate(-5.605px,0)
          }
          69%,100% {
            transform:translate(-5.605px,22px)
          }
        }
        .sample3-6 {
          animation:average3-6 10s ease-in-out infinite
        }
        @keyframes average3-6 {
          0%,57% {
            transform:translate(0,0)
          }
          63% {
            transform:translate(-40.398px,0)
          }
          69%,100% {
            transform:translate(-40.398px,22px)
          }
        }
        .sample3-7 {
          animation:average3-7 10s ease-in-out infinite
        }
        @keyframes average3-7 {
          0%,57% {
            transform:translate(0,0)
          }
          63% {
            transform:translate(12.744px,0)
          }
          69%,100% {
            transform:translate(12.744px,22px)
          }
        }
        .batch3 {
          opacity:0;
          animation:batch3 10s linear infinite
        }
        @keyframes batch3 {
          0%,54% {
            opacity:0
          }
          54.1%,69% {
            opacity:1
          }
          70%,100% {
            opacity:0
          }
        }
        .sample4-0 {
          animation:average4-0 10s ease-in-out infinite
        }
        @keyframes average4-0 {
          0%,75% {
            transform:translate(0,0)
          }
          81% {
            transform:translate(31.096px,0)
          }
          87%,100% {
            transform:translate(31.096px,33.759px)
          }
        }
        .sample4-1 {
          animation:average4-1 10s ease-in-out infinite
        }
        @keyframes average4-1 {
          0%,75% {
            transform:translate(0,0)
          }
          81% {
            transform:translate(-15.08px,0)
          }
          87%,100% {
            transform:translate(-15.08px,33.759px)
          }
        }
        .sample4-2 {
          animation:average4-2 10s ease-in-out infinite
        }
        @keyframes average4-2 {
          0%,75% {
            transform:translate(0,0)
          }
          81% {
            transform:translate(18.839px,0)
          }
          87%,100% {
            transform:translate(18.839px,33.759px)
          }
        }
        .sample4-3 {
          animation:average4-3 10s ease-in-out infinite
        }
        @keyframes average4-3 {
          0%,75% {
            transform:translate(0,0)
          }
          81% {
            transform:translate(-18.643px,0)
          }
          87%,100% {
            transform:translate(-18.643px,33.759px)
          }
        }
        .sample4-4 {
          animation:average4-4 10s ease-in-out infinite
        }
        @keyframes average4-4 {
          0%,75% {
            transform:translate(0,0)
          }
          81% {
            transform:translate(-47.196px,0)
          }
          87%,100% {
            transform:translate(-47.196px,33.759px)
          }
        }
        .sample4-5 {
          animation:average4-5 10s ease-in-out infinite
        }
        @keyframes average4-5 {
          0%,75% {
            transform:translate(0,0)
          }
          81% {
            transform:translate(-20.118px,0)
          }
          87%,100% {
            transform:translate(-20.118px,33.759px)
          }
        }
        .sample4-6 {
          animation:average4-6 10s ease-in-out infinite
        }
        @keyframes average4-6 {
          0%,75% {
            transform:translate(0,0)
          }
          81% {
            transform:translate(15.842px,0)
          }
          87%,100% {
            transform:translate(15.842px,33.759px)
          }
        }
        .sample4-7 {
          animation:average4-7 10s ease-in-out infinite
        }
        @keyframes average4-7 {
          0%,75% {
            transform:translate(0,0)
          }
          81% {
            transform:translate(35.26px,0)
          }
          87%,100% {
            transform:translate(35.26px,33.759px)
          }
        }
        .batch4 {
          opacity:0;
          animation:batch4 10s linear infinite
        }
        @keyframes batch4 {
          0%,72% {
            opacity:0
          }
          72.1%,87% {
            opacity:1
          }
          88%,100% {
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Central Limit Theorem">
        <path class="ink muted" d="M16 48H126M16 126H126"/>
        <path class="ink" style="color:#77c9ef" d="M18 18Q31 31 45 37T72 43T99 46T126 47"/>
        <path class="ink muted" d="M70 53V60M66 57L70 61L74 57"/>
        <rect class="density d0" x="18" y="124.931" width="5.5" height="1.069" fill="#70edb1"/>
        <rect class="density d1" x="24.75" y="122.793" width="5.5" height="3.207" fill="#70edb1"/>
        <rect class="density d2" x="31.5" y="95" width="5.5" height="31.0" fill="#70edb1"/>
        <rect class="density d3" x="38.25" y="95" width="5.5" height="31.0" fill="#70edb1"/>
        <rect class="density d4" x="45" y="96.069" width="5.5" height="29.931" fill="#70edb1"/>
        <rect class="density d5" x="51.75" y="106.759" width="5.5" height="19.241" fill="#70edb1"/>
        <rect class="density d6" x="58.5" y="119.586" width="5.5" height="6.414" fill="#70edb1"/>
        <rect class="density d7" x="65.25" y="121.724" width="5.5" height="4.276" fill="#70edb1"/>
        <rect class="density d8" x="72" y="124.931" width="5.5" height="1.069" fill="#70edb1"/>
        <rect class="density d9" x="78.75" y="124.931" width="5.5" height="1.069" fill="#70edb1"/>
        <rect class="density d10" x="85.5" y="126" width="5.5" height="0" fill="#70edb1"/>
        <rect class="density d11" x="92.25" y="126" width="5.5" height="0" fill="#70edb1"/>
        <rect class="density d12" x="99" y="126" width="5.5" height="0" fill="#70edb1"/>
        <rect class="density d13" x="105.75" y="126" width="5.5" height="0" fill="#70edb1"/>
        <rect class="density d14" x="112.5" y="126" width="5.5" height="0" fill="#70edb1"/>
        <rect class="density d15" x="119.25" y="126" width="5.5" height="0" fill="#70edb1"/>
        <g class="sample-batch batch0">
          <circle class="sample0-0" cx="56.476" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample0-1" cx="32.872" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample0-2" cx="31.5" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample0-3" cx="20.684" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample0-4" cx="79.522" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample0-5" cx="21.91" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample0-6" cx="71.179" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample0-7" cx="22.366" cy="73" r="2.5" fill="#f3c977"/>
        </g>
        <g class="sample-batch batch1">
          <circle class="sample1-0" cx="41.957" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample1-1" cx="38.169" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample1-2" cx="50.107" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample1-3" cx="61.48" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample1-4" cx="21.749" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample1-5" cx="29.047" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample1-6" cx="31.462" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample1-7" cx="20.696" cy="73" r="2.5" fill="#f3c977"/>
        </g>
        <g class="sample-batch batch2">
          <circle class="sample2-0" cx="34.463" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample2-1" cx="25.272" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample2-2" cx="22.42" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample2-3" cx="35.95" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample2-4" cx="65.675" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample2-5" cx="19.905" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample2-6" cx="40.862" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample2-7" cx="32.107" cy="73" r="2.5" fill="#f3c977"/>
        </g>
        <g class="sample-batch batch3">
          <circle class="sample3-0" cx="26.352" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample3-1" cx="26.181" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample3-2" cx="26.705" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample3-3" cx="30.845" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample3-4" cx="26.566" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample3-5" cx="39.587" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample3-6" cx="74.38" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample3-7" cx="21.238" cy="73" r="2.5" fill="#f3c977"/>
        </g>
        <g class="sample-batch batch4">
          <circle class="sample4-0" cx="22.382" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample4-1" cx="68.559" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample4-2" cx="34.639" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample4-3" cx="72.121" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample4-4" cx="100.674" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample4-5" cx="73.596" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample4-6" cx="37.636" cy="73" r="2.5" fill="#f3c977"/>
          <circle class="sample4-7" cx="18.218" cy="73" r="2.5" fill="#f3c977"/>
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

if (!customElements.get("concept-central-limit-theorem")) {
  customElements.define("concept-central-limit-theorem", ConceptCentralLimitTheorem);
}
