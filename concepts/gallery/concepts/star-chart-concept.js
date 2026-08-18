const starChartStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* The chart sheet: square framed panel with crosshair axes and two
     concentric range rings. */
  .schart {
    position: relative;
    width: 104px;
    height: 104px;
    border: 1.5px solid #00ff66;
    border-radius: 6px;
    background:
      radial-gradient(circle at center, rgba(8, 18, 10, 0.94) 0 62%, rgba(0, 0, 0, 0.98) 100%),
      linear-gradient(0deg, transparent 49.5%, rgba(0, 255, 100, 0.15) 50%, transparent 50.5%),
      linear-gradient(90deg, transparent 49.5%, rgba(0, 255, 100, 0.15) 50%, transparent 50.5%);
    box-shadow: inset 0 0 14px rgba(0, 255, 100, 0.25), 0 0 10px rgba(0, 255, 100, 0.3);
    overflow: hidden;
  }

  .schart::before,
  .schart::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px dashed #00ff66;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    animation: schart-ring 3.0s linear infinite;
  }

  .schart::before { width: 46px; height: 46px; }
  .schart::after { width: 82px; height: 82px; animation-direction: reverse; }

  @keyframes schart-ring {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }

  .schart-grid {
    position: absolute;
    inset: 0;
    opacity: 0.65;
    pointer-events: none;
  }

  .schart-grid span {
    position: absolute;
    background: rgba(0, 255, 100, 0.3);
  }

  .schart-grid .g1,
  .schart-grid .g2 {
    top: 10px;
    bottom: 10px;
    width: 1px;
  }

  .schart-grid .g1 { left: 24px; }
  .schart-grid .g2 { right: 24px; }

  .schart-grid .g3,
  .schart-grid .g4 {
    left: 10px;
    right: 10px;
    height: 1px;
  }

  .schart-grid .g3 { top: 24px; }
  .schart-grid .g4 { bottom: 24px; }

  .schart-map {
    position: absolute;
    inset: 0;
    transform-origin: 50% 50%;
    animation: schart-rotate 2.4s linear infinite;
  }

  @keyframes schart-rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .schart-lines {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .schart-line {
    stroke: #00ff66;
    stroke-width: 1.5;
    stroke-linecap: round;
    opacity: 0.9;
  }

  .schart-node {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #00ff66;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 8px #00ff66;
    animation: schart-star 1.2s ease-in-out infinite alternate;
  }

  .schart-node.major {
    width: 9px;
    height: 9px;
    box-shadow: 0 0 10px #00ff66, 0 0 14px #ffffff;
  }

  .schart-node.p1 { top: 22%; left: 19%; animation-delay: -0.2s; }
  .schart-node.p2 { top: 17%; left: 38%; animation-delay: -0.5s; }
  .schart-node.p3 { top: 29%; left: 66%; animation-delay: -0.8s; }
  .schart-node.p4 { top: 48%; left: 56%; animation-delay: -0.3s; }
  .schart-node.p5 { top: 61%; left: 31%; animation-delay: -0.9s; }
  .schart-node.p6 { top: 74%; left: 74%; animation-delay: -0.6s; }
  .schart-node.p7 { top: 82%; left: 21%; animation-delay: -1.1s; }
  .schart-node.p8 { top: 41%; left: 81%; animation-delay: -0.4s; }

  .schart-label {
    position: absolute;
    font-size: 8px;
    font-weight: bold;
    line-height: 1;
    letter-spacing: 0.14em;
    color: #00ff66;
    text-shadow: 0 0 4px #00ff66;
    text-transform: uppercase;
  }

  .schart-label.top { top: 8px; left: 10px; }
  .schart-label.bottom { right: 10px; bottom: 8px; }

  /* v2: cyan theme */
  .schart.twinkle-more {
    border-color: #38bdf8;
    box-shadow: inset 0 0 14px rgba(56, 189, 248, 0.3), 0 0 12px rgba(56, 189, 248, 0.4);
  }

  .schart.twinkle-more::before,
  .schart.twinkle-more::after {
    border-color: #38bdf8;
  }

  .schart.twinkle-more .schart-line {
    stroke: #38bdf8;
  }

  .schart.twinkle-more .schart-node {
    border-color: #38bdf8;
    box-shadow: 0 0 8px #00f0ff;
  }

  .schart.twinkle-more .schart-node.major {
    box-shadow: 0 0 12px #00f0ff, 0 0 16px #38bdf8;
  }

  .schart.twinkle-more .schart-label {
    color: #38bdf8;
    text-shadow: 0 0 4px #00f0ff;
  }

  /* v2 only: mapping flares */
  .schart-flares {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .schart-flares span {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00f0ff;
    animation: schart-flare 1.0s ease-in-out infinite alternate;
  }

  .schart-flares .f1 { top: 12%; left: 24%; animation-delay: -0.2s; }
  .schart-flares .f2 { top: 24%; left: 79%; animation-delay: -0.5s; }
  .schart-flares .f3 { top: 68%; left: 15%; animation-delay: -0.8s; }
  .schart-flares .f4 { top: 86%; left: 58%; animation-delay: -0.3s; }

  @keyframes schart-star {
    0% { transform: translate(-50%, -50%) scale(0.8); }
    100% { transform: translate(-50%, -50%) scale(1.3); }
  }

  @keyframes schart-flare {
    0% { transform: scale(0.6); opacity: 0.4; }
    100% { transform: scale(1.4); opacity: 1; }
  }
`;

// Shared chart interior; v2 wraps it with the twinkle-more class and flares.
const starChartMap = `
  <div class="schart-grid">
    <span class="g1"></span>
    <span class="g2"></span>
    <span class="g3"></span>
    <span class="g4"></span>
  </div>
  <div class="schart-map">
    <svg class="schart-lines" viewBox="0 0 100 100" aria-hidden="true">
      <line class="schart-line c1" x1="19" y1="22" x2="38" y2="17"></line>
      <line class="schart-line c2" x1="38" y1="17" x2="66" y2="29"></line>
      <line class="schart-line c3" x1="66" y1="29" x2="56" y2="48"></line>
      <line class="schart-line c4" x1="56" y1="48" x2="31" y2="61"></line>
      <line class="schart-line c5" x1="31" y1="61" x2="21" y2="82"></line>
      <line class="schart-line c2" x1="56" y1="48" x2="74" y2="74"></line>
      <line class="schart-line c4" x1="66" y1="29" x2="81" y2="41"></line>
    </svg>
    <div class="schart-node major p1"></div>
    <div class="schart-node p2"></div>
    <div class="schart-node major p3"></div>
    <div class="schart-node p4"></div>
    <div class="schart-node major p5"></div>
    <div class="schart-node p6"></div>
    <div class="schart-node p7"></div>
    <div class="schart-node p8"></div>
  </div>
  <span class="schart-label top">chart</span>
  <span class="schart-label bottom">a-17</span>
`;

const starChartMarkup = {
  v1: `
    <div class="schart">
      ${starChartMap}
    </div>
  `,
  v2: `
    <div class="schart twinkle-more">
      ${starChartMap.replace(
        '<span class="schart-label top">',
        `<div class="schart-flares">
        <span class="f1"></span>
        <span class="f2"></span>
        <span class="f3"></span>
        <span class="f4"></span>
      </div>
      <span class="schart-label top">`
      )}
    </div>
  `,
};

class ConceptStarChart extends HTMLElement {
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
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${starChartStyles}</style>${starChartMarkup[version] || starChartMarkup.v2}`;
  }
}

if (!customElements.get('concept-star-chart')) {
  customElements.define('concept-star-chart', ConceptStarChart);
}
