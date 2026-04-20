const constellationStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .stars {
    position: relative;
    width: 100px;
    height: 100px;
  }

  .star-dot {
    width: 4px;
    height: 4px;
    background: #00cc00;
    border-radius: 50%;
    position: absolute;
    box-shadow: 0 0 4px #00cc00;
    animation: twinkle 2s ease-in-out infinite;
  }

  .star-dot:nth-child(2) { animation-delay: 0.3s; }
  .star-dot:nth-child(3) { animation-delay: 0.6s; }
  .star-dot:nth-child(4) { animation-delay: 0.9s; }
  .star-dot:nth-child(5) { animation-delay: 1.2s; }
  .star-dot:nth-child(6) { animation-delay: 1.5s; }

  .constellation-refined {
    position: relative;
    width: 104px;
    height: 104px;
    border-radius: 50%;
    overflow: hidden;
    background:
      radial-gradient(circle at center, rgba(6, 26, 12, 0.92) 0 34%, rgba(0, 0, 0, 0.98) 72%),
      radial-gradient(circle at 28% 24%, rgba(120, 255, 160, 0.1), transparent 26%),
      radial-gradient(circle at 74% 70%, rgba(120, 255, 160, 0.06), transparent 30%);
    box-shadow: inset 0 0 18px rgba(0, 204, 0, 0.08), 0 0 10px rgba(0, 204, 0, 0.08);
  }

  .constellation-refined::before,
  .constellation-refined::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .constellation-refined::before {
    background:
      radial-gradient(circle at 12% 18%, rgba(180, 255, 180, 0.85) 0 1px, transparent 1.5px),
      radial-gradient(circle at 26% 78%, rgba(180, 255, 180, 0.65) 0 1px, transparent 1.5px),
      radial-gradient(circle at 82% 22%, rgba(180, 255, 180, 0.72) 0 1px, transparent 1.5px),
      radial-gradient(circle at 68% 14%, rgba(180, 255, 180, 0.55) 0 1px, transparent 1.5px),
      radial-gradient(circle at 88% 74%, rgba(180, 255, 180, 0.62) 0 1px, transparent 1.5px),
      radial-gradient(circle at 54% 88%, rgba(180, 255, 180, 0.5) 0 1px, transparent 1.5px);
    opacity: 0.7;
  }

  .constellation-refined::after {
    background: radial-gradient(circle at center, transparent 58%, rgba(120, 255, 160, 0.08) 75%, transparent 100%);
    animation: constellation-field 6s ease-in-out infinite;
  }

  .constellation-network {
    position: absolute;
    inset: 0;
    animation: constellation-drift 7s ease-in-out infinite;
  }

  .constellation-lines {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    filter: drop-shadow(0 0 3px rgba(120, 255, 140, 0.2));
  }

  .constellation-line {
    stroke: rgba(135, 255, 150, 0.62);
    stroke-width: 1.35;
    stroke-linecap: round;
    stroke-dasharray: 2 4;
    opacity: 0.6;
    animation: constellation-link 4.8s ease-in-out infinite;
  }

  .constellation-line.l2 { animation-delay: -0.8s; }
  .constellation-line.l3 { animation-delay: -1.6s; }
  .constellation-line.l4 { animation-delay: -2.4s; }
  .constellation-line.l5 { animation-delay: -3.2s; }
  .constellation-line.l6 { animation-delay: -4s; }

  .constellation-node {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #bfffbf;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px rgba(120, 255, 140, 0.6);
    animation: constellation-node 3.4s ease-in-out infinite;
  }

  .constellation-node.major {
    width: 8px;
    height: 8px;
    background: #ecffec;
    box-shadow: 0 0 12px rgba(160, 255, 180, 0.75);
  }

  .constellation-node.n1 { top: 24%; left: 18%; animation-delay: -0.2s; }
  .constellation-node.n2 { top: 15%; left: 41%; animation-delay: -1.1s; }
  .constellation-node.n3 { top: 27%; left: 72%; animation-delay: -2.2s; }
  .constellation-node.n4 { top: 52%; left: 59%; animation-delay: -0.7s; }
  .constellation-node.n5 { top: 63%; left: 29%; animation-delay: -1.8s; }
  .constellation-node.n6 { top: 76%; left: 78%; animation-delay: -2.9s; }
  .constellation-node.n7 { top: 84%; left: 18%; animation-delay: -0.4s; }

  .constellation-chart {
    position: relative;
    width: 104px;
    height: 104px;
    border: 1px solid rgba(120, 255, 160, 0.18);
    background:
      radial-gradient(circle at center, rgba(8, 18, 10, 0.94) 0 62%, rgba(0, 0, 0, 0.98) 100%),
      linear-gradient(0deg, transparent 49.5%, rgba(120, 255, 160, 0.08) 50%, transparent 50.5%),
      linear-gradient(90deg, transparent 49.5%, rgba(120, 255, 160, 0.08) 50%, transparent 50.5%);
    box-shadow: inset 0 0 0 1px rgba(120, 255, 160, 0.06);
    overflow: hidden;
  }

  .constellation-chart::before,
  .constellation-chart::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(120, 255, 160, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .constellation-chart::before { width: 46px; height: 46px; }
  .constellation-chart::after { width: 82px; height: 82px; }

  .constellation-chart-grid {
    position: absolute;
    inset: 0;
    opacity: 0.55;
    pointer-events: none;
  }

  .constellation-chart-grid span {
    position: absolute;
    background: rgba(120, 255, 160, 0.14);
  }

  .constellation-chart-grid .g1,
  .constellation-chart-grid .g2 {
    top: 12px;
    bottom: 12px;
    width: 1px;
  }

  .constellation-chart-grid .g1 { left: 24px; }
  .constellation-chart-grid .g2 { right: 24px; }

  .constellation-chart-grid .g3,
  .constellation-chart-grid .g4 {
    left: 12px;
    right: 12px;
    height: 1px;
  }

  .constellation-chart-grid .g3 { top: 24px; }
  .constellation-chart-grid .g4 { bottom: 24px; }

  .constellation-chart-map {
    position: absolute;
    inset: 0;
  }

  .constellation-chart-lines {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .constellation-chart-line {
    stroke: rgba(160, 255, 180, 0.5);
    stroke-width: 1.1;
    stroke-linecap: round;
    opacity: 0.8;
    animation: chart-line-fade 6s ease-in-out infinite;
  }

  .constellation-chart-line.c2 { animation-delay: -1s; }
  .constellation-chart-line.c3 { animation-delay: -2s; }
  .constellation-chart-line.c4 { animation-delay: -3s; }
  .constellation-chart-line.c5 { animation-delay: -4s; }

  .constellation-chart-node {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(225, 255, 225, 0.95);
    transform: translate(-50%, -50%);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.35);
    animation: chart-star 4.5s ease-in-out infinite;
  }

  .constellation-chart-node.major {
    width: 6px;
    height: 6px;
    box-shadow: 0 0 6px rgba(160, 255, 180, 0.45);
  }

  .constellation-chart-node.p1 { top: 22%; left: 19%; animation-delay: -0.4s; }
  .constellation-chart-node.p2 { top: 17%; left: 38%; animation-delay: -1.2s; }
  .constellation-chart-node.p3 { top: 29%; left: 66%; animation-delay: -2.1s; }
  .constellation-chart-node.p4 { top: 48%; left: 56%; animation-delay: -0.9s; }
  .constellation-chart-node.p5 { top: 61%; left: 31%; animation-delay: -2.8s; }
  .constellation-chart-node.p6 { top: 74%; left: 74%; animation-delay: -1.7s; }
  .constellation-chart-node.p7 { top: 82%; left: 21%; animation-delay: -3.3s; }
  .constellation-chart-node.p8 { top: 41%; left: 81%; animation-delay: -2.4s; }

  .constellation-chart-label {
    position: absolute;
    font-size: 8px;
    line-height: 1;
    letter-spacing: 0.14em;
    color: rgba(165, 255, 185, 0.5);
    text-transform: uppercase;
  }

  .constellation-chart-label.top { top: 8px; left: 10px; }
  .constellation-chart-label.bottom { right: 10px; bottom: 8px; }

  .constellation-chart.twinkle-more::before,
  .constellation-chart.twinkle-more::after {
    border-color: rgba(120, 255, 160, 0.14);
  }

  .constellation-chart.twinkle-more .constellation-chart-line {
    opacity: 0.7;
  }

  .constellation-chart.twinkle-more .constellation-chart-node {
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.48);
    animation-duration: 2.8s;
  }

  .constellation-chart.twinkle-more .constellation-chart-node.major {
    box-shadow: 0 0 9px rgba(170, 255, 190, 0.58);
    animation-duration: 2.3s;
  }

  .constellation-chart.twinkle-more .constellation-chart-label {
    color: rgba(175, 255, 195, 0.6);
  }

  .constellation-chart-flares {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .constellation-chart-flares span {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(235, 255, 235, 0.95);
    box-shadow: 0 0 7px rgba(170, 255, 190, 0.58);
    animation: chart-flare 2.1s ease-in-out infinite;
  }

  .constellation-chart-flares .f1 { top: 12%; left: 24%; animation-delay: -0.2s; }
  .constellation-chart-flares .f2 { top: 24%; left: 79%; animation-delay: -1.1s; }
  .constellation-chart-flares .f3 { top: 68%; left: 15%; animation-delay: -0.8s; }
  .constellation-chart-flares .f4 { top: 86%; left: 58%; animation-delay: -1.6s; }

  @keyframes twinkle {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
      box-shadow: 0 0 4px #00cc00;
    }

    50% {
      opacity: 0.2;
      transform: scale(0.6);
      box-shadow: 0 0 2px #00cc00;
    }
  }

  @keyframes constellation-field {
    0%, 100% {
      opacity: 0.45;
      transform: scale(1);
    }

    50% {
      opacity: 0.85;
      transform: scale(1.04);
    }
  }

  @keyframes constellation-drift {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }

    50% {
      transform: translate(1px, -2px) scale(1.01);
    }
  }

  @keyframes constellation-link {
    0%, 100% {
      opacity: 0.35;
      stroke-dashoffset: 0;
    }

    50% {
      opacity: 0.92;
      stroke-dashoffset: -6;
    }
  }

  @keyframes constellation-node {
    0%, 100% {
      opacity: 0.65;
      transform: translate(-50%, -50%) scale(0.9);
    }

    50% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.16);
    }
  }

  @keyframes chart-line-fade {
    0%, 100% { opacity: 0.45; }
    50% { opacity: 0.85; }
  }

  @keyframes chart-star {
    0%, 100% {
      opacity: 0.72;
      transform: translate(-50%, -50%) scale(1);
    }

    50% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.08);
    }
  }

  @keyframes chart-flare {
    0%, 100% {
      opacity: 0.18;
      transform: scale(0.7);
    }

    40% {
      opacity: 0.95;
      transform: scale(1.35);
    }

    60% {
      opacity: 0.45;
      transform: scale(0.92);
    }
  }
`;

const constellationMarkup = {
  v1: `
    <div class="stars">
      <div class="star-dot" style="top:10%;left:15%"></div>
      <div class="star-dot" style="top:25%;left:70%"></div>
      <div class="star-dot" style="top:45%;left:40%"></div>
      <div class="star-dot" style="top:60%;left:85%"></div>
      <div class="star-dot" style="top:75%;left:25%"></div>
      <div class="star-dot" style="top:90%;left:60%"></div>
    </div>
  `,
  v2: `
    <div class="constellation-refined">
      <div class="constellation-network">
        <svg class="constellation-lines" viewBox="0 0 100 100" aria-hidden="true">
          <line class="constellation-line l1" x1="18" y1="24" x2="41" y2="15"></line>
          <line class="constellation-line l2" x1="41" y1="15" x2="72" y2="27"></line>
          <line class="constellation-line l3" x1="72" y1="27" x2="59" y2="52"></line>
          <line class="constellation-line l4" x1="59" y1="52" x2="29" y2="63"></line>
          <line class="constellation-line l5" x1="29" y1="63" x2="18" y2="84"></line>
          <line class="constellation-line l6" x1="59" y1="52" x2="78" y2="76"></line>
        </svg>
        <div class="constellation-node major n1"></div>
        <div class="constellation-node n2"></div>
        <div class="constellation-node major n3"></div>
        <div class="constellation-node n4"></div>
        <div class="constellation-node major n5"></div>
        <div class="constellation-node n6"></div>
        <div class="constellation-node n7"></div>
      </div>
    </div>
  `,
  v3: `
    <div class="constellation-chart">
      <div class="constellation-chart-grid">
        <span class="g1"></span>
        <span class="g2"></span>
        <span class="g3"></span>
        <span class="g4"></span>
      </div>
      <div class="constellation-chart-map">
        <svg class="constellation-chart-lines" viewBox="0 0 100 100" aria-hidden="true">
          <line class="constellation-chart-line c1" x1="19" y1="22" x2="38" y2="17"></line>
          <line class="constellation-chart-line c2" x1="38" y1="17" x2="66" y2="29"></line>
          <line class="constellation-chart-line c3" x1="66" y1="29" x2="56" y2="48"></line>
          <line class="constellation-chart-line c4" x1="56" y1="48" x2="31" y2="61"></line>
          <line class="constellation-chart-line c5" x1="31" y1="61" x2="21" y2="82"></line>
          <line class="constellation-chart-line c2" x1="56" y1="48" x2="74" y2="74"></line>
          <line class="constellation-chart-line c4" x1="66" y1="29" x2="81" y2="41"></line>
        </svg>
        <div class="constellation-chart-node major p1"></div>
        <div class="constellation-chart-node p2"></div>
        <div class="constellation-chart-node major p3"></div>
        <div class="constellation-chart-node p4"></div>
        <div class="constellation-chart-node major p5"></div>
        <div class="constellation-chart-node p6"></div>
        <div class="constellation-chart-node p7"></div>
        <div class="constellation-chart-node p8"></div>
      </div>
      <span class="constellation-chart-label top">chart</span>
      <span class="constellation-chart-label bottom">a-17</span>
    </div>
  `,
  v4: `
    <div class="constellation-chart twinkle-more">
      <div class="constellation-chart-grid">
        <span class="g1"></span>
        <span class="g2"></span>
        <span class="g3"></span>
        <span class="g4"></span>
      </div>
      <div class="constellation-chart-map">
        <svg class="constellation-chart-lines" viewBox="0 0 100 100" aria-hidden="true">
          <line class="constellation-chart-line c1" x1="19" y1="22" x2="38" y2="17"></line>
          <line class="constellation-chart-line c2" x1="38" y1="17" x2="66" y2="29"></line>
          <line class="constellation-chart-line c3" x1="66" y1="29" x2="56" y2="48"></line>
          <line class="constellation-chart-line c4" x1="56" y1="48" x2="31" y2="61"></line>
          <line class="constellation-chart-line c5" x1="31" y1="61" x2="21" y2="82"></line>
          <line class="constellation-chart-line c2" x1="56" y1="48" x2="74" y2="74"></line>
          <line class="constellation-chart-line c4" x1="66" y1="29" x2="81" y2="41"></line>
        </svg>
        <div class="constellation-chart-node major p1"></div>
        <div class="constellation-chart-node p2"></div>
        <div class="constellation-chart-node major p3"></div>
        <div class="constellation-chart-node p4"></div>
        <div class="constellation-chart-node major p5"></div>
        <div class="constellation-chart-node p6"></div>
        <div class="constellation-chart-node p7"></div>
        <div class="constellation-chart-node p8"></div>
      </div>
      <div class="constellation-chart-flares">
        <span class="f1"></span>
        <span class="f2"></span>
        <span class="f3"></span>
        <span class="f4"></span>
      </div>
      <span class="constellation-chart-label top">chart</span>
      <span class="constellation-chart-label bottom">a-17</span>
    </div>
  `,
};

class ConceptConstellation extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v4';
    this.shadowRoot.innerHTML = `<style>${constellationStyles}</style>${constellationMarkup[version] || constellationMarkup.v4}`;
  }
}

if (!customElements.get('concept-constellation')) {
  customElements.define('concept-constellation', ConceptConstellation);
}
