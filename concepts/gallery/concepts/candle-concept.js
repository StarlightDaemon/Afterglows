const candleStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .candle-scene {
    position: relative;
    width: 84px;
    height: 104px;
  }

  .candle-halo {
    position: absolute;
    top: 8px;
    left: 50%;
    width: 60px;
    height: 60px;
    margin-left: -30px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 204, 0, 0.2) 0 30%, transparent 68%);
    animation: candle-halo 5.6s ease-in-out infinite;
  }

  .candle-stick {
    position: absolute;
    bottom: 12px;
    left: 50%;
    width: 22px;
    height: 46px;
    margin-left: -11px;
    border-radius: 3px 3px 2px 2px;
    background: linear-gradient(90deg, #0a2410 0%, #145222 45%, #0a2410 100%);
    box-shadow: inset 0 2px 3px rgba(180, 255, 195, 0.25);
  }

  .candle-drip {
    position: absolute;
    top: 2px;
    width: 4px;
    border-radius: 0 0 3px 3px;
    background: linear-gradient(180deg, rgba(170, 255, 190, 0.5), rgba(60, 180, 85, 0.35));
    animation: candle-drip 7s ease-in infinite;
  }

  .candle-drip.d1 { left: 2px; height: 10px; animation-delay: 0s; }
  .candle-drip.d2 { right: 3px; height: 7px; animation-delay: -3.2s; }

  .candle-wick {
    position: absolute;
    bottom: 58px;
    left: 50%;
    width: 2px;
    height: 5px;
    margin-left: -1px;
    background: #143a1c;
  }

  .candle-flame {
    position: absolute;
    bottom: 62px;
    left: 50%;
    width: 12px;
    height: 20px;
    margin-left: -6px;
    border-radius: 50% 50% 42% 42% / 62% 62% 38% 38%;
    background: linear-gradient(180deg, rgba(230, 255, 236, 0.95) 0%, rgba(160, 255, 185, 0.85) 45%, rgba(0, 204, 0, 0.5) 100%);
    box-shadow: 0 0 14px rgba(170, 255, 190, 0.7);
    transform-origin: bottom center;
    animation: candle-flame 5.6s ease-in-out infinite;
  }

  .candle-flame::before {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    width: 5px;
    height: 9px;
    margin-left: -2.5px;
    border-radius: 50% 50% 40% 40% / 60% 60% 40% 40%;
    background: rgba(240, 255, 244, 0.95);
  }

  .candle-smoke {
    position: absolute;
    bottom: 80px;
    left: 50%;
    width: 3px;
    height: 16px;
    margin-left: -1px;
    border-radius: 50%;
    background: linear-gradient(180deg, transparent, rgba(150, 200, 160, 0.4));
    filter: blur(1.2px);
    opacity: 0;
    animation: candle-smoke 5.6s ease-out infinite;
  }

  @keyframes candle-flame {
    0%, 26% { transform: rotate(0deg) scale(1, 1); }
    8% { transform: rotate(-2deg) scale(0.98, 1.03); }
    18% { transform: rotate(2deg) scale(1.02, 0.97); }
    34% { transform: rotate(-14deg) scale(0.9, 0.8) translateX(-2px); }
    42% { transform: rotate(-18deg) scale(0.85, 0.55) translateX(-3px); }
    50% { transform: rotate(6deg) scale(0.95, 0.75); }
    60% { transform: rotate(0deg) scale(1.05, 1.22); }
    68% { transform: rotate(-1.5deg) scale(1, 1.05); }
    82% { transform: rotate(1.5deg) scale(1.01, 0.99); }
    100% { transform: rotate(0deg) scale(1, 1); }
  }

  @keyframes candle-halo {
    0%, 26%, 100% { opacity: 0.85; transform: scale(1); }
    42% { opacity: 0.25; transform: scale(0.7); }
    60% { opacity: 1; transform: scale(1.15); }
  }

  @keyframes candle-smoke {
    0%, 36% { opacity: 0; transform: translateY(0) skewX(0deg); }
    46% { opacity: 0.8; }
    62% { opacity: 0.3; transform: translateY(-12px) skewX(10deg); }
    74%, 100% { opacity: 0; transform: translateY(-20px) skewX(-8deg); }
  }

  @keyframes candle-drip {
    0%, 100% { transform: scaleY(0.55); }
    50% { transform: scaleY(1); }
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

  /* v2: Warm ivory paraffin wax candle with golden/blue flame teardrop,
     flickering amber ambient halo, translucent wax drips, and soft smoke wisp. */
  .candlec-scene {
    position: relative;
    width: 84px;
    height: 104px;
    background: radial-gradient(circle at 50% 40%, #1e1b4b 0%, #0f172a 65%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Flickering amber candlelight halo */
  .candlec-halo {
    position: absolute;
    top: 8px;
    left: 50%;
    width: 60px;
    height: 60px;
    margin-left: -30px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, rgba(251, 191, 36, 0.2) 35%, transparent 70%);
    animation: candlec-halo 5.6s ease-in-out infinite;
  }

  /* Warm ivory paraffin wax candle pillar */
  .candlec-stick {
    position: absolute;
    bottom: 12px;
    left: 50%;
    width: 22px;
    height: 46px;
    margin-left: -11px;
    border-radius: 3px 3px 2px 2px;
    background: linear-gradient(90deg, #fef3c7 0%, #ffffff 45%, #fde68a 100%);
    box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.9), 0 2px 8px rgba(0, 0, 0, 0.6);
    border: 0.5px solid #fef08a;
  }

  /* Molten wax drips */
  .candlec-drip {
    position: absolute;
    top: 2px;
    width: 4px;
    border-radius: 0 0 3px 3px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(254, 240, 138, 0.7));
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    animation: candlec-drip 7s ease-in infinite;
  }

  .candlec-drip.d1 { left: 2px; height: 10px; animation-delay: 0s; }
  .candlec-drip.d2 { right: 3px; height: 7px; animation-delay: -3.2s; }

  /* Charred cotton wick */
  .candlec-wick {
    position: absolute;
    bottom: 58px;
    left: 50%;
    width: 2px;
    height: 5px;
    margin-left: -1px;
    background: #1c1917;
  }

  /* Glowing flame teardrop with blue base and golden-yellow core */
  .candlec-flame {
    position: absolute;
    bottom: 62px;
    left: 50%;
    width: 12px;
    height: 20px;
    margin-left: -6px;
    border-radius: 50% 50% 42% 42% / 62% 62% 38% 38%;
    background: linear-gradient(180deg, #ffffff 0%, #fde047 30%, #f97316 75%, #2563eb 100%);
    box-shadow: 0 0 16px rgba(245, 158, 11, 0.9), 0 0 28px rgba(251, 191, 36, 0.5);
    transform-origin: bottom center;
    animation: candlec-flame 5.6s ease-in-out infinite;
  }

  .candlec-flame::before {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    width: 5px;
    height: 9px;
    margin-left: -2.5px;
    border-radius: 50% 50% 40% 40% / 60% 60% 40% 40%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff;
  }

  /* Translucent gray smoke wisp */
  .candlec-smoke {
    position: absolute;
    bottom: 80px;
    left: 50%;
    width: 3px;
    height: 16px;
    margin-left: -1px;
    border-radius: 50%;
    background: linear-gradient(180deg, transparent, rgba(203, 213, 225, 0.5) 60%, transparent);
    filter: blur(1.2px);
    opacity: 0;
    animation: candlec-smoke 5.6s ease-out infinite;
  }

  @keyframes candlec-flame {
    0%, 26% { transform: rotate(0deg) scale(1, 1); }
    8% { transform: rotate(-2deg) scale(0.98, 1.03); }
    18% { transform: rotate(2deg) scale(1.02, 0.97); }
    34% { transform: rotate(-14deg) scale(0.9, 0.8) translateX(-2px); }
    42% { transform: rotate(-18deg) scale(0.85, 0.55) translateX(-3px); }
    50% { transform: rotate(6deg) scale(0.95, 0.75); }
    60% { transform: rotate(0deg) scale(1.05, 1.22); }
    68% { transform: rotate(-1.5deg) scale(1, 1.05); }
    82% { transform: rotate(1.5deg) scale(1.01, 0.99); }
    100% { transform: rotate(0deg) scale(1, 1); }
  }

  @keyframes candlec-halo {
    0%, 26%, 100% { opacity: 0.9; transform: scale(1); }
    42% { opacity: 0.3; transform: scale(0.7); }
    60% { opacity: 1; transform: scale(1.15); }
  }

  @keyframes candlec-smoke {
    0%, 36% { opacity: 0; transform: translateY(0) skewX(0deg); }
    46% { opacity: 0.8; }
    62% { opacity: 0.3; transform: translateY(-12px) skewX(10deg); }
    74%, 100% { opacity: 0; transform: translateY(-20px) skewX(-8deg); }
  }

  @keyframes candlec-drip {
    0%, 100% { transform: scaleY(0.55); }
    50% { transform: scaleY(1); }
  }
  `,
};

const candleMarkup = {
  v1: `
      <div class="candle-scene">
        <div class="candle-halo"></div>
        <div class="candle-smoke"></div>
        <div class="candle-flame"></div>
        <div class="candle-wick"></div>
        <div class="candle-stick">
          <div class="candle-drip d1"></div>
          <div class="candle-drip d2"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="candlec-scene">
        <div class="candlec-halo"></div>
        <div class="candlec-smoke"></div>
        <div class="candlec-flame"></div>
        <div class="candlec-wick"></div>
        <div class="candlec-stick">
          <div class="candlec-drip d1"></div>
          <div class="candlec-drip d2"></div>
        </div>
      </div>
    `,
};

class ConceptCandle extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${candleStyles[version] || candleStyles.v2}</style>${candleMarkup[version] || candleMarkup.v2}`;
  }
}

if (!customElements.get('concept-candle')) {
  customElements.define('concept-candle', ConceptCandle);
}
