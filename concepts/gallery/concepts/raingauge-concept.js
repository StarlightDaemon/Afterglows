const raingaugeStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rg {
    width: 88px;
    height: 100px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  .rg-funnel {
    position: absolute;
    left: 50%;
    top: 6px;
    width: 48px;
    height: 16px;
    margin-left: -24px;
    clip-path: polygon(0 0, 100% 0, 62% 100%, 38% 100%);
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.5), rgba(0, 90, 18, 0.6));
    border: 1px solid rgba(0, 204, 0, 0.6);
    border-bottom: none;
  }

  .rg-tube {
    position: absolute;
    left: 50%;
    top: 22px;
    width: 22px;
    height: 62px;
    margin-left: -11px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 0 0 4px 4px;
    background: rgba(0, 30, 6, 0.6);
    overflow: hidden;
  }

  .rg-water {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 4px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.55), rgba(0, 150, 30, 0.7));
    border-top: 1px solid rgba(214, 255, 224, 0.8);
    animation: rg-fill 8s infinite;
  }

  @keyframes rg-fill {
    0%, 4% { height: 3px; }
    30% { height: 20px; }
    42% { height: 30px; }
    54% { height: 52px; }
    72% { height: 54px; }
    80% { height: 54px; }
    86% { height: 2px; }
    100% { height: 3px; }
  }

  .rg-surface {
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(214, 255, 224, 0.9);
    animation: rg-surface 8s infinite;
  }

  @keyframes rg-surface {
    0%, 4% { bottom: 3px; }
    30% { bottom: 20px; }
    42% { bottom: 30px; }
    54% { bottom: 52px; }
    72% { bottom: 54px; }
    80% { bottom: 54px; }
    86% { bottom: 2px; }
    100% { bottom: 3px; }
  }

  .rg-scale {
    position: absolute;
    left: 50%;
    top: 24px;
    width: 8px;
    height: 58px;
    margin-left: 13px;
    background: repeating-linear-gradient(180deg,
      rgba(140, 255, 170, 0.7) 0 1px,
      transparent 1px 7px);
  }

  .rg-drop {
    position: absolute;
    top: -6px;
    width: 3px;
    height: 8px;
    border-radius: 0 0 50% 50%;
    background: linear-gradient(180deg, transparent, rgba(190, 255, 205, 0.9));
    animation: rg-drop linear infinite;
  }

  .rg-drop.d1 { left: 30px; animation-duration: 0.7s; }
  .rg-drop.d2 { left: 44px; animation-duration: 0.55s; animation-delay: -0.2s; }
  .rg-drop.d3 { left: 54px; animation-duration: 0.8s; animation-delay: -0.4s; }
  .rg-drop.d4 { left: 38px; animation-duration: 0.6s; animation-delay: -0.5s; }

  @keyframes rg-drop {
    0% { top: -6px; opacity: 0; }
    20% { opacity: 1; }
    100% { top: 18px; opacity: 0.6; }
  }

  .rg-splash {
    position: absolute;
    left: 50%;
    top: 16px;
    width: 4px;
    height: 4px;
    margin-left: -2px;
    border-radius: 50%;
    border: 1px solid rgba(190, 255, 205, 0.8);
    opacity: 0;
    animation: rg-splash 0.5s ease-out infinite;
  }

  @keyframes rg-splash {
    0% { transform: scale(0.4); opacity: 0.9; }
    100% { transform: scale(1.8); opacity: 0; }
  }

  .rg-read {
    position: absolute;
    left: 0;
    bottom: 2px;
    font-size: 8px;
    letter-spacing: 1px;
    color: #c8ffd6;
    text-shadow: 0 0 4px rgba(0, 204, 0, 0.6);
  }

  .rg-read::before {
    content: '0mm';
    animation: rg-read 8s steps(1) infinite;
  }

  @keyframes rg-read {
    0% { content: '0mm'; }
    30% { content: '4mm'; }
    54% { content: '11mm'; }
    72% { content: '12mm'; }
    86% { content: '0mm'; }
  }
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Precision meteorological rain gauge with stainless steel funnel,
     graduated glass measuring tube, rising crystal cyan water, and digital ticker */
  .rgc {
    width: 88px;
    height: 100px;
    position: relative;
    font-family: 'Courier New', monospace;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Stainless steel funnel top */
  .rgc-funnel {
    position: absolute;
    left: 50%;
    top: 6px;
    width: 48px;
    height: 16px;
    margin-left: -24px;
    clip-path: polygon(0 0, 100% 0, 62% 100%, 38% 100%);
    background: linear-gradient(180deg, #cbd5e1 0%, #64748b 60%, #334155 100%);
    border: 1px solid #94a3b8;
    border-bottom: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  }

  /* Graduated borosilicate glass measuring cylinder */
  .rgc-tube {
    position: absolute;
    left: 50%;
    top: 22px;
    width: 22px;
    height: 62px;
    margin-left: -11px;
    border: 2px solid #38bdf8;
    border-radius: 0 0 4px 4px;
    background: rgba(15, 23, 42, 0.7);
    box-shadow: inset 0 0 6px rgba(56, 189, 248, 0.3);
    overflow: hidden;
  }

  /* Crystal cyan collected rainwater rising */
  .rgc-water {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 4px;
    background: linear-gradient(180deg, #38bdf8 0%, #0284c7 60%, #0369a1 100%);
    border-top: 1.5px solid #ffffff;
    box-shadow: 0 0 6px #00f0ff;
    animation: rgc-fill 8s infinite;
  }

  @keyframes rgc-fill {
    0%, 4% { height: 3px; }
    30% { height: 20px; }
    42% { height: 30px; }
    54% { height: 52px; }
    72% { height: 54px; }
    80% { height: 54px; }
    86% { height: 2px; }
    100% { height: 3px; }
  }

  /* Shimmering surface meniscus */
  .rgc-surface {
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: #ffffff;
    box-shadow: 0 0 4px #a5f3fc;
    animation: rgc-surface 8s infinite;
  }

  @keyframes rgc-surface {
    0%, 4% { bottom: 3px; }
    30% { bottom: 20px; }
    42% { bottom: 30px; }
    54% { bottom: 52px; }
    72% { bottom: 54px; }
    80% { bottom: 54px; }
    86% { bottom: 2px; }
    100% { bottom: 3px; }
  }

  /* White millimeter measurement ticks */
  .rgc-scale {
    position: absolute;
    left: 50%;
    top: 24px;
    width: 8px;
    height: 58px;
    margin-left: 13px;
    background: repeating-linear-gradient(180deg,
      #f8fafc 0 1px,
      transparent 1px 7px);
  }

  /* Falling raindrops */
  .rgc-drop {
    position: absolute;
    top: -6px;
    width: 3px;
    height: 8px;
    border-radius: 0 0 50% 50%;
    background: linear-gradient(180deg, transparent, #38bdf8 60%, #ffffff 100%);
    box-shadow: 0 0 3px #00f0ff;
    animation: rgc-drop linear infinite;
  }

  .rgc-drop.d1 { left: 30px; animation-duration: 0.7s; }
  .rgc-drop.d2 { left: 44px; animation-duration: 0.55s; animation-delay: -0.2s; }
  .rgc-drop.d3 { left: 54px; animation-duration: 0.8s; animation-delay: -0.4s; }
  .rgc-drop.d4 { left: 38px; animation-duration: 0.6s; animation-delay: -0.5s; }

  @keyframes rgc-drop {
    0% { top: -6px; opacity: 0; }
    20% { opacity: 1; }
    100% { top: 18px; opacity: 0.6; }
  }

  /* Splash crown */
  .rgc-splash {
    position: absolute;
    left: 50%;
    top: 16px;
    width: 4px;
    height: 4px;
    margin-left: -2px;
    border-radius: 50%;
    border: 1px solid #ffffff;
    box-shadow: 0 0 4px #38bdf8;
    opacity: 0;
    animation: rgc-splash 0.5s ease-out infinite;
  }

  @keyframes rgc-splash {
    0% { transform: scale(0.4); opacity: 0.9; }
    100% { transform: scale(1.8); opacity: 0; }
  }

  /* Cyan digital millimeter readout */
  .rgc-read {
    position: absolute;
    left: 0;
    bottom: 2px;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #38bdf8;
    text-shadow: 0 0 5px #00f0ff;
  }

  .rgc-read::before {
    content: '0mm';
    animation: rgc-read 8s steps(1) infinite;
  }

  @keyframes rgc-read {
    0% { content: '0mm'; }
    30% { content: '4mm'; }
    54% { content: '11mm'; }
    72% { content: '12mm'; }
    86% { content: '0mm'; }
  }
  `,
};

const raingaugeMarkup = {
  v1: `
      <div class="rg">
        <div class="rg-drop d1"></div>
        <div class="rg-drop d2"></div>
        <div class="rg-drop d3"></div>
        <div class="rg-drop d4"></div>
        <div class="rg-funnel"></div>
        <div class="rg-splash"></div>
        <div class="rg-scale"></div>
        <div class="rg-tube">
          <div class="rg-water"></div>
          <div class="rg-surface"></div>
        </div>
        <div class="rg-read"></div>
      </div>
    `,
  v2: `
      <div class="rgc">
        <div class="rgc-drop d1"></div>
        <div class="rgc-drop d2"></div>
        <div class="rgc-drop d3"></div>
        <div class="rgc-drop d4"></div>
        <div class="rgc-funnel"></div>
        <div class="rgc-splash"></div>
        <div class="rgc-scale"></div>
        <div class="rgc-tube">
          <div class="rgc-water"></div>
          <div class="rgc-surface"></div>
        </div>
        <div class="rgc-read"></div>
      </div>
    `,
};

class ConceptRaingauge extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }
  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${raingaugeStyles[version] || raingaugeStyles.v2}</style>${raingaugeMarkup[version] || raingaugeMarkup.v2}`;
  }
}

if (!customElements.get('concept-raingauge')) {
  customElements.define('concept-raingauge', ConceptRaingauge);
}
