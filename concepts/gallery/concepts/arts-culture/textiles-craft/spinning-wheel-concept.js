const spinningWheelStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sw {
    width: 116px;
    height: 96px;
    position: relative;
  }

  .sw-great {
    position: absolute;
    left: 6px;
    bottom: 14px;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background:
      repeating-conic-gradient(rgba(140, 255, 170, 0.55) 0 1.4deg, transparent 1.4deg 30deg),
      radial-gradient(circle, rgba(0, 60, 12, 0.5) 0 20%, transparent 24%);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.25);
    animation: sw-spin 1.6s linear infinite;
  }

  .sw-great::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10px;
    height: 10px;
    margin: -5px 0 0 -5px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #d6ffe0, #2a8a3e 75%);
  }

  @keyframes sw-spin {
    to { transform: rotate(360deg); }
  }

  .sw-rim {
    position: absolute;
    left: 6px;
    bottom: 14px;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    border: 3px solid rgba(0, 204, 0, 0.5);
  }

  .sw-bench {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 8px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 110, 22, 0.8), transparent);
  }

  .sw-leg {
    position: absolute;
    bottom: 2px;
    width: 3px;
    height: 8px;
    background: rgba(0, 110, 22, 0.7);
  }

  .sw-leg.l1 { left: 30px; }
  .sw-leg.l2 { left: 84px; }

  .sw-flyer {
    position: absolute;
    right: 14px;
    top: 20px;
    width: 22px;
    height: 22px;
    animation: sw-flyer 0.4s linear infinite;
  }

  .sw-flyer-arm {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 22px;
    height: 2px;
    margin: -1px 0 0 -11px;
    background: rgba(190, 255, 205, 0.8);
    border-radius: 2px;
  }

  .sw-flyer-arm.a2 { transform: rotate(90deg); }

  @keyframes sw-flyer {
    to { transform: rotate(360deg); }
  }

  .sw-bobbin {
    position: absolute;
    right: 21px;
    top: 27px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(214, 255, 224, 0.9), rgba(0, 130, 26, 0.8) 70%);
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.5);
    animation: sw-bobbin 8s ease-in-out infinite;
  }

  @keyframes sw-bobbin {
    0% { transform: scale(0.7); }
    90% { transform: scale(1.15); }
    96%, 100% { transform: scale(0.7); }
  }

  .sw-band {
    position: absolute;
    left: 36px;
    top: 30px;
    width: 46px;
    height: 22px;
    border-top: 1.5px solid rgba(140, 255, 170, 0.6);
    border-bottom: 1.5px solid rgba(140, 255, 170, 0.4);
    transform: skewX(-6deg);
  }

  .sw-distaff {
    position: absolute;
    right: 2px;
    top: 2px;
    width: 3px;
    height: 20px;
    background: rgba(0, 110, 22, 0.7);
  }

  .sw-fibre {
    position: absolute;
    right: -2px;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50% 50% 40% 60%;
    background: radial-gradient(circle, rgba(190, 255, 205, 0.45), transparent 70%);
    filter: blur(0.6px);
    animation: sw-fibre 8s ease-in-out infinite;
  }

  @keyframes sw-fibre {
    0% { transform: scale(1); }
    90% { transform: scale(0.6); }
    96%, 100% { transform: scale(1); }
  }

  .sw-thread {
    position: absolute;
    right: 26px;
    top: 14px;
    width: 14px;
    height: 14px;
    border-top: 2px solid;
    border-image: repeating-linear-gradient(90deg, rgba(214, 255, 224, 0.9) 0 3px, transparent 3px 6px) 2;
    border-radius: 0;
    animation: sw-thread 0.5s linear infinite;
  }

  @keyframes sw-thread {
    0% { border-image-source: repeating-linear-gradient(90deg, rgba(214, 255, 224, 0.9) 0 3px, transparent 3px 6px); }
    100% { border-image-source: repeating-linear-gradient(90deg, transparent 0 3px, rgba(214, 255, 224, 0.9) 3px 6px); }
  }

  .sw-treadle {
    position: absolute;
    left: 14px;
    bottom: 4px;
    width: 30px;
    height: 3px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.7);
    transform-origin: 100% 50%;
    animation: sw-treadle 1.6s ease-in-out infinite;
  }

  @keyframes sw-treadle {
    0%, 100% { transform: rotate(-4deg); }
    50% { transform: rotate(4deg); }
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

  /* v2: Saxony cherry wood spinning wheel with brass flyer,
     raw alpaca fleece cloud, and golden wound bobbin */
  .swc {
    width: 116px;
    height: 96px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Cherry wood great wheel with radial spokes */
  .swc-great {
    position: absolute;
    left: 6px;
    bottom: 14px;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    border: 2.5px solid #d97706;
    background:
      repeating-conic-gradient(#ca8a04 0 1.5deg, transparent 1.5deg 30deg),
      radial-gradient(circle, #78350f 0 20%, transparent 24%);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8), inset 0 0 6px #78350f;
    animation: swc-spin 1.6s linear infinite;
  }

  /* Center brass wheel hub */
  .swc-great::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10px;
    height: 10px;
    margin: -5px 0 0 -5px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #fef08a, #ca8a04 75%);
    border: 1px solid #eab308;
  }

  @keyframes swc-spin {
    to { transform: rotate(360deg); }
  }

  .swc-rim {
    position: absolute;
    left: 6px;
    bottom: 14px;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    border: 3px solid #b45309;
    box-shadow: 0 0 4px rgba(180, 83, 9, 0.5);
  }

  /* Maple bench and legs */
  .swc-bench {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 8px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, #b45309 20%, #78350f 80%, transparent);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  }

  .swc-leg {
    position: absolute;
    bottom: 2px;
    width: 3px;
    height: 8px;
    background: #78350f;
  }

  .swc-leg.l1 { left: 30px; }
  .swc-leg.l2 { left: 84px; }

  /* Whirring brass flyer assembly */
  .swc-flyer {
    position: absolute;
    right: 14px;
    top: 20px;
    width: 22px;
    height: 22px;
    animation: swc-flyer 0.4s linear infinite;
  }

  .swc-flyer-arm {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 22px;
    height: 2px;
    margin: -1px 0 0 -11px;
    background: #facc15;
    box-shadow: 0 0 4px #eab308;
    border-radius: 2px;
  }

  .swc-flyer-arm.a2 { transform: rotate(90deg); }

  @keyframes swc-flyer {
    to { transform: rotate(360deg); }
  }

  /* Golden thread bobbin */
  .swc-bobbin {
    position: absolute;
    right: 21px;
    top: 27px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle, #fde047 0%, #ca8a04 80%);
    box-shadow: 0 0 6px #facc15;
    animation: swc-bobbin 8s ease-in-out infinite;
  }

  @keyframes swc-bobbin {
    0% { transform: scale(0.7); }
    90% { transform: scale(1.15); }
    96%, 100% { transform: scale(0.7); }
  }

  /* Drive band */
  .swc-band {
    position: absolute;
    left: 36px;
    top: 30px;
    width: 46px;
    height: 22px;
    border-top: 1.5px solid #fde047;
    border-bottom: 1.5px solid #ca8a04;
    transform: skewX(-6deg);
  }

  /* Distaff */
  .swc-distaff {
    position: absolute;
    right: 2px;
    top: 2px;
    width: 3px;
    height: 20px;
    background: #78350f;
  }

  /* Cloud of white alpaca fleece */
  .swc-fibre {
    position: absolute;
    right: -2px;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50% 50% 40% 60%;
    background: radial-gradient(circle, #ffffff 0%, #f1f5f9 60%, transparent 80%);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
    filter: blur(0.6px);
    animation: swc-fibre 8s ease-in-out infinite;
  }

  @keyframes swc-fibre {
    0% { transform: scale(1); }
    90% { transform: scale(0.6); }
    96%, 100% { transform: scale(1); }
  }

  /* Drawn thread */
  .swc-thread {
    position: absolute;
    right: 26px;
    top: 14px;
    width: 14px;
    height: 14px;
    border-top: 2px solid;
    border-image: repeating-linear-gradient(90deg, #ffffff 0 3px, transparent 3px 6px) 2;
    border-radius: 0;
    animation: swc-thread 0.5s linear infinite;
  }

  @keyframes swc-thread {
    0% { border-image-source: repeating-linear-gradient(90deg, #ffffff 0 3px, transparent 3px 6px); }
    100% { border-image-source: repeating-linear-gradient(90deg, transparent 0 3px, #ffffff 3px 6px); }
  }

  /* Rocking treadle */
  .swc-treadle {
    position: absolute;
    left: 14px;
    bottom: 4px;
    width: 30px;
    height: 3px;
    border-radius: 2px;
    background: #b45309;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
    transform-origin: 100% 50%;
    animation: swc-treadle 1.6s ease-in-out infinite;
  }

  @keyframes swc-treadle {
    0%, 100% { transform: rotate(-4deg); }
    50% { transform: rotate(4deg); }
  }
  `,
};

const spinningWheelMarkup = {
  v1: `
      <div class="sw">
        <div class="sw-bench"></div>
        <div class="sw-leg l1"></div>
        <div class="sw-leg l2"></div>
        <div class="sw-great"></div>
        <div class="sw-rim"></div>
        <div class="sw-band"></div>
        <div class="sw-distaff"></div>
        <div class="sw-fibre"></div>
        <div class="sw-thread"></div>
        <div class="sw-flyer">
          <div class="sw-flyer-arm a1"></div>
          <div class="sw-flyer-arm a2"></div>
        </div>
        <div class="sw-bobbin"></div>
        <div class="sw-treadle"></div>
      </div>
    `,
  v2: `
      <div class="swc">
        <div class="swc-bench"></div>
        <div class="swc-leg l1"></div>
        <div class="swc-leg l2"></div>
        <div class="swc-great"></div>
        <div class="swc-rim"></div>
        <div class="swc-band"></div>
        <div class="swc-distaff"></div>
        <div class="swc-fibre"></div>
        <div class="swc-thread"></div>
        <div class="swc-flyer">
          <div class="swc-flyer-arm a1"></div>
          <div class="swc-flyer-arm a2"></div>
        </div>
        <div class="swc-bobbin"></div>
        <div class="swc-treadle"></div>
      </div>
    `,
};

class ConceptSpinningWheel extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${spinningWheelStyles[version] || spinningWheelStyles.v2}</style>${spinningWheelMarkup[version] || spinningWheelMarkup.v2}`;
  }
}

if (!customElements.get('concept-spinning-wheel')) {
  customElements.define('concept-spinning-wheel', ConceptSpinningWheel);
}
