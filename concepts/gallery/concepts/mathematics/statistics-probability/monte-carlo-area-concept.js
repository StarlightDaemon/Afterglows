// Monte Carlo Area Estimation. Canonical definition and motion thesis: manifest metadata.
// The drawing is schematic; cycle duration is explanatory, not a measured rate.
class ConceptMonteCarloArea extends HTMLElement {
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
        .p0 {
          animation:point0 8s linear infinite
        }
        @keyframes point0 {
          0%,4% {
            opacity:0
          }
          4.2%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p1 {
          animation:point1 8s linear infinite
        }
        @keyframes point1 {
          0%,6.5% {
            opacity:0
          }
          6.7%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p2 {
          animation:point2 8s linear infinite
        }
        @keyframes point2 {
          0%,9% {
            opacity:0
          }
          9.2%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p3 {
          animation:point3 8s linear infinite
        }
        @keyframes point3 {
          0%,11.5% {
            opacity:0
          }
          11.7%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p4 {
          animation:point4 8s linear infinite
        }
        @keyframes point4 {
          0%,14% {
            opacity:0
          }
          14.2%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p5 {
          animation:point5 8s linear infinite
        }
        @keyframes point5 {
          0%,16.5% {
            opacity:0
          }
          16.7%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p6 {
          animation:point6 8s linear infinite
        }
        @keyframes point6 {
          0%,19% {
            opacity:0
          }
          19.2%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p7 {
          animation:point7 8s linear infinite
        }
        @keyframes point7 {
          0%,21.5% {
            opacity:0
          }
          21.7%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p8 {
          animation:point8 8s linear infinite
        }
        @keyframes point8 {
          0%,24% {
            opacity:0
          }
          24.2%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p9 {
          animation:point9 8s linear infinite
        }
        @keyframes point9 {
          0%,26.5% {
            opacity:0
          }
          26.7%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p10 {
          animation:point10 8s linear infinite
        }
        @keyframes point10 {
          0%,29% {
            opacity:0
          }
          29.2%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p11 {
          animation:point11 8s linear infinite
        }
        @keyframes point11 {
          0%,31.5% {
            opacity:0
          }
          31.7%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p12 {
          animation:point12 8s linear infinite
        }
        @keyframes point12 {
          0%,34% {
            opacity:0
          }
          34.2%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p13 {
          animation:point13 8s linear infinite
        }
        @keyframes point13 {
          0%,36.5% {
            opacity:0
          }
          36.7%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p14 {
          animation:point14 8s linear infinite
        }
        @keyframes point14 {
          0%,39% {
            opacity:0
          }
          39.2%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p15 {
          animation:point15 8s linear infinite
        }
        @keyframes point15 {
          0%,41.5% {
            opacity:0
          }
          41.7%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p16 {
          animation:point16 8s linear infinite
        }
        @keyframes point16 {
          0%,44% {
            opacity:0
          }
          44.2%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p17 {
          animation:point17 8s linear infinite
        }
        @keyframes point17 {
          0%,46.5% {
            opacity:0
          }
          46.7%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p18 {
          animation:point18 8s linear infinite
        }
        @keyframes point18 {
          0%,49% {
            opacity:0
          }
          49.2%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p19 {
          animation:point19 8s linear infinite
        }
        @keyframes point19 {
          0%,51.5% {
            opacity:0
          }
          51.7%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p20 {
          animation:point20 8s linear infinite
        }
        @keyframes point20 {
          0%,54% {
            opacity:0
          }
          54.2%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p21 {
          animation:point21 8s linear infinite
        }
        @keyframes point21 {
          0%,56.5% {
            opacity:0
          }
          56.7%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p22 {
          animation:point22 8s linear infinite
        }
        @keyframes point22 {
          0%,59% {
            opacity:0
          }
          59.2%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p23 {
          animation:point23 8s linear infinite
        }
        @keyframes point23 {
          0%,61.5% {
            opacity:0
          }
          61.7%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p24 {
          animation:point24 8s linear infinite
        }
        @keyframes point24 {
          0%,64% {
            opacity:0
          }
          64.2%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p25 {
          animation:point25 8s linear infinite
        }
        @keyframes point25 {
          0%,66.5% {
            opacity:0
          }
          66.7%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p26 {
          animation:point26 8s linear infinite
        }
        @keyframes point26 {
          0%,69% {
            opacity:0
          }
          69.2%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p27 {
          animation:point27 8s linear infinite
        }
        @keyframes point27 {
          0%,71.5% {
            opacity:0
          }
          71.7%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p28 {
          animation:point28 8s linear infinite
        }
        @keyframes point28 {
          0%,74% {
            opacity:0
          }
          74.2%,93% {
            opacity:1
          }
          100% {
            opacity:0
          }
        }
        .p29 {
          animation:point29 8s linear infinite
        }
        @keyframes point29 {
          0%,76.5% {
            opacity:0
          }
          76.7%,93% {
            opacity:1
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
      <svg viewBox="0 0 140 140" role="img" aria-label="Monte Carlo Area Estimation">
        <rect class="ink muted" x="20" y="15" width="100" height="80"/>
        <ellipse class="ink" cx="68" cy="56.6" rx="45" ry="26.4"/>
        <rect class="ink muted" x="20" y="110" width="100" height="14"/>
        <circle class="point p0" cx="47.366" cy="21.147" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p0" x="116.667" y="111" width="3.033" height="12" fill="#ed8eab"/>
        <circle class="point p1" cx="43.624" cy="35.676" r="2.3" fill="#70edb1" stroke="#70edb1"/>
        <rect class="tally p1" x="20" y="111" width="3.033" height="12" fill="#70edb1"/>
        <circle class="point p2" cx="23.13" cy="26.981" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p2" x="113.333" y="111" width="3.033" height="12" fill="#ed8eab"/>
        <circle class="point p3" cx="35.432" cy="55.55" r="2.3" fill="#70edb1" stroke="#70edb1"/>
        <rect class="tally p3" x="23.333" y="111" width="3.033" height="12" fill="#70edb1"/>
        <circle class="point p4" cx="105.315" cy="27.344" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p4" x="110" y="111" width="3.033" height="12" fill="#ed8eab"/>
        <circle class="point p5" cx="100.811" cy="28.148" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p5" x="106.667" y="111" width="3.033" height="12" fill="#ed8eab"/>
        <circle class="point p6" cx="56.937" cy="31.914" r="2.3" fill="#70edb1" stroke="#70edb1"/>
        <rect class="tally p6" x="26.667" y="111" width="3.033" height="12" fill="#70edb1"/>
        <circle class="point p7" cx="35.444" cy="73.079" r="2.3" fill="#70edb1" stroke="#70edb1"/>
        <rect class="tally p7" x="30" y="111" width="3.033" height="12" fill="#70edb1"/>
        <circle class="point p8" cx="76.369" cy="77.888" r="2.3" fill="#70edb1" stroke="#70edb1"/>
        <rect class="tally p8" x="33.333" y="111" width="3.033" height="12" fill="#70edb1"/>
        <circle class="point p9" cx="54.669" cy="67.993" r="2.3" fill="#70edb1" stroke="#70edb1"/>
        <rect class="tally p9" x="36.667" y="111" width="3.033" height="12" fill="#70edb1"/>
        <circle class="point p10" cx="76.029" cy="25.888" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p10" x="103.333" y="111" width="3.033" height="12" fill="#ed8eab"/>
        <circle class="point p11" cx="61.288" cy="31.239" r="2.3" fill="#70edb1" stroke="#70edb1"/>
        <rect class="tally p11" x="40" y="111" width="3.033" height="12" fill="#70edb1"/>
        <circle class="point p12" cx="60.0" cy="24.689" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p12" x="100" y="111" width="3.033" height="12" fill="#ed8eab"/>
        <circle class="point p13" cx="31.828" cy="16.482" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p13" x="96.667" y="111" width="3.033" height="12" fill="#ed8eab"/>
        <circle class="point p14" cx="20.884" cy="16.03" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p14" x="93.333" y="111" width="3.033" height="12" fill="#ed8eab"/>
        <circle class="point p15" cx="54.066" cy="20.521" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p15" x="90" y="111" width="3.033" height="12" fill="#ed8eab"/>
        <circle class="point p16" cx="101.214" cy="30.753" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p16" x="86.667" y="111" width="3.033" height="12" fill="#ed8eab"/>
        <circle class="point p17" cx="73.649" cy="25.556" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p17" x="83.333" y="111" width="3.033" height="12" fill="#ed8eab"/>
        <circle class="point p18" cx="89.723" cy="87.518" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p18" x="80" y="111" width="3.033" height="12" fill="#ed8eab"/>
        <circle class="point p19" cx="32.594" cy="77.166" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p19" x="76.667" y="111" width="3.033" height="12" fill="#ed8eab"/>
        <circle class="point p20" cx="47.786" cy="45.345" r="2.3" fill="#70edb1" stroke="#70edb1"/>
        <rect class="tally p20" x="43.333" y="111" width="3.033" height="12" fill="#70edb1"/>
        <circle class="point p21" cx="107.508" cy="79.23" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p21" x="73.333" y="111" width="3.033" height="12" fill="#ed8eab"/>
        <circle class="point p22" cx="86.364" cy="21.238" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p22" x="70" y="111" width="3.033" height="12" fill="#ed8eab"/>
        <circle class="point p23" cx="80.318" cy="47.064" r="2.3" fill="#70edb1" stroke="#70edb1"/>
        <rect class="tally p23" x="46.667" y="111" width="3.033" height="12" fill="#70edb1"/>
        <circle class="point p24" cx="38.731" cy="84.137" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p24" x="66.667" y="111" width="3.033" height="12" fill="#ed8eab"/>
        <circle class="point p25" cx="99.338" cy="60.0" r="2.3" fill="#70edb1" stroke="#70edb1"/>
        <rect class="tally p25" x="50" y="111" width="3.033" height="12" fill="#70edb1"/>
        <circle class="point p26" cx="99.326" cy="36.442" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p26" x="63.333" y="111" width="3.033" height="12" fill="#ed8eab"/>
        <circle class="point p27" cx="113.48" cy="54.669" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p27" x="60" y="111" width="3.033" height="12" fill="#ed8eab"/>
        <circle class="point p28" cx="24.029" cy="34.372" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p28" x="56.667" y="111" width="3.033" height="12" fill="#ed8eab"/>
        <circle class="point p29" cx="87.417" cy="20.249" r="2.3" fill="#07120f" stroke="#ed8eab"/>
        <rect class="tally p29" x="53.333" y="111" width="3.033" height="12" fill="#ed8eab"/>
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

if (!customElements.get("concept-monte-carlo-area")) {
  customElements.define("concept-monte-carlo-area", ConceptMonteCarloArea);
}
