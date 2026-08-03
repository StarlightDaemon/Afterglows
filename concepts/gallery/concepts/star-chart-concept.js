// Extracted from Constellation v3/v4 in the 2026-08-01 split: the technical
// HUD-style map now lives here so Constellation can keep its natural
// night-sky identity. v1 is the plain chart (old Constellation v3); v2 adds
// the brighter twinkle pass and mapping flares (old Constellation v4).
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
    border: 1px solid rgba(120, 255, 160, 0.18);
    background:
      radial-gradient(circle at center, rgba(8, 18, 10, 0.94) 0 62%, rgba(0, 0, 0, 0.98) 100%),
      linear-gradient(0deg, transparent 49.5%, rgba(120, 255, 160, 0.08) 50%, transparent 50.5%),
      linear-gradient(90deg, transparent 49.5%, rgba(120, 255, 160, 0.08) 50%, transparent 50.5%);
    box-shadow: inset 0 0 0 1px rgba(120, 255, 160, 0.06);
    overflow: hidden;
  }

  .schart::before,
  .schart::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(120, 255, 160, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .schart::before { width: 46px; height: 46px; }
  .schart::after { width: 82px; height: 82px; }

  .schart-grid {
    position: absolute;
    inset: 0;
    opacity: 0.55;
    pointer-events: none;
  }

  .schart-grid span {
    position: absolute;
    background: rgba(120, 255, 160, 0.14);
  }

  .schart-grid .g1,
  .schart-grid .g2 {
    top: 12px;
    bottom: 12px;
    width: 1px;
  }

  .schart-grid .g1 { left: 24px; }
  .schart-grid .g2 { right: 24px; }

  .schart-grid .g3,
  .schart-grid .g4 {
    left: 12px;
    right: 12px;
    height: 1px;
  }

  .schart-grid .g3 { top: 24px; }
  .schart-grid .g4 { bottom: 24px; }

  .schart-map {
    position: absolute;
    inset: 0;
  }

  .schart-lines {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .schart-line {
    stroke: rgba(160, 255, 180, 0.5);
    stroke-width: 1.1;
    stroke-linecap: round;
    opacity: 0.8;
    animation: schart-line-fade 6s ease-in-out infinite;
  }

  .schart-line.c2 { animation-delay: -1s; }
  .schart-line.c3 { animation-delay: -2s; }
  .schart-line.c4 { animation-delay: -3s; }
  .schart-line.c5 { animation-delay: -4s; }

  .schart-node {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(225, 255, 225, 0.95);
    transform: translate(-50%, -50%);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.35);
    animation: schart-star 4.5s ease-in-out infinite;
  }

  .schart-node.major {
    width: 6px;
    height: 6px;
    box-shadow: 0 0 6px rgba(160, 255, 180, 0.45);
  }

  .schart-node.p1 { top: 22%; left: 19%; animation-delay: -0.4s; }
  .schart-node.p2 { top: 17%; left: 38%; animation-delay: -1.2s; }
  .schart-node.p3 { top: 29%; left: 66%; animation-delay: -2.1s; }
  .schart-node.p4 { top: 48%; left: 56%; animation-delay: -0.9s; }
  .schart-node.p5 { top: 61%; left: 31%; animation-delay: -2.8s; }
  .schart-node.p6 { top: 74%; left: 74%; animation-delay: -1.7s; }
  .schart-node.p7 { top: 82%; left: 21%; animation-delay: -3.3s; }
  .schart-node.p8 { top: 41%; left: 81%; animation-delay: -2.4s; }

  .schart-label {
    position: absolute;
    font-size: 8px;
    line-height: 1;
    letter-spacing: 0.14em;
    color: rgba(165, 255, 185, 0.5);
    text-transform: uppercase;
  }

  .schart-label.top { top: 8px; left: 10px; }
  .schart-label.bottom { right: 10px; bottom: 8px; }

  /* v2: everything a notch brighter and livelier. */
  .schart.twinkle-more::before,
  .schart.twinkle-more::after {
    border-color: rgba(120, 255, 160, 0.14);
  }

  .schart.twinkle-more .schart-line {
    opacity: 0.7;
  }

  .schart.twinkle-more .schart-node {
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.48);
    animation-duration: 2.8s;
  }

  .schart.twinkle-more .schart-node.major {
    box-shadow: 0 0 9px rgba(170, 255, 190, 0.58);
    animation-duration: 2.3s;
  }

  .schart.twinkle-more .schart-label {
    color: rgba(175, 255, 195, 0.6);
  }

  /* v2 only: mapping flares popping at survey points. */
  .schart-flares {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .schart-flares span {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(235, 255, 235, 0.95);
    box-shadow: 0 0 7px rgba(170, 255, 190, 0.58);
    animation: schart-flare 2.1s ease-in-out infinite;
  }

  .schart-flares .f1 { top: 12%; left: 24%; animation-delay: -0.2s; }
  .schart-flares .f2 { top: 24%; left: 79%; animation-delay: -1.1s; }
  .schart-flares .f3 { top: 68%; left: 15%; animation-delay: -0.8s; }
  .schart-flares .f4 { top: 86%; left: 58%; animation-delay: -1.6s; }

  @keyframes schart-line-fade {
    0%, 100% { opacity: 0.45; }
    50% { opacity: 0.85; }
  }

  @keyframes schart-star {
    0%, 100% {
      opacity: 0.72;
      transform: translate(-50%, -50%) scale(1);
    }

    50% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.08);
    }
  }

  @keyframes schart-flare {
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
