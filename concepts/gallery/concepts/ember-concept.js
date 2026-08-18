const emberStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor ember --- */
  .ember {
    width: 84px;
    height: 100px;
    position: relative;
  }

  .ember-base {
    position: absolute;
    bottom: 6px;
    left: 50%;
    width: 48px;
    height: 12px;
    border-radius: 50%;
    transform: translateX(-50%);
    background: radial-gradient(ellipse at center, rgba(0, 204, 0, 0.7), transparent 70%);
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.6);
    animation: ember-glow 1.2s ease-in-out infinite alternate;
  }

  .ember-flame {
    position: absolute;
    bottom: 14px;
    left: 50%;
    border-radius: 50% 4% 50% 50%;
    transform-origin: center 75%;
  }

  .ember-flame.outer {
    width: 44px;
    height: 44px;
    margin-left: -22px;
    background: linear-gradient(135deg, rgba(0, 204, 0, 0.35), rgba(0, 204, 0, 0.65));
    filter: blur(1px);
    animation: ember-flicker 0.65s ease-in-out infinite alternate;
  }

  .ember-flame.mid {
    width: 30px;
    height: 30px;
    margin-left: -15px;
    bottom: 16px;
    background: linear-gradient(135deg, rgba(80, 235, 90, 0.85), rgba(150, 255, 130, 0.95));
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.7);
    animation: ember-flicker 0.48s ease-in-out infinite alternate-reverse;
  }

  .ember-flame.core {
    width: 16px;
    height: 16px;
    margin-left: -8px;
    bottom: 18px;
    background: #e6ffd2;
    box-shadow: 0 0 14px rgba(216, 255, 187, 0.9);
    animation: ember-flicker 0.38s ease-in-out infinite alternate;
  }

  .ember-spark {
    position: absolute;
    bottom: 48px;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #d8ffbb;
    box-shadow: 0 0 8px rgba(216, 255, 187, 0.95);
    opacity: 0;
    animation: ember-spark-rise 1.8s ease-out infinite;
  }

  .ember-spark.s1 { --spark-drift: -18px; animation-delay: 0s; }
  .ember-spark.s2 { --spark-drift: 16px; animation-delay: -0.6s; width: 9px; height: 9px; }
  .ember-spark.s3 { --spark-drift: -8px; animation-delay: -1.2s; width: 7px; height: 7px; }

  @keyframes ember-flicker {
    0% { transform: rotate(-54deg) skewX(-14deg) scale(0.9, 1.25) translateX(-4px); }
    100% { transform: rotate(-32deg) skewX(14deg) scale(1.18, 0.85) translateX(4px); }
  }

  @keyframes ember-glow {
    0% { transform: translateX(-50%) scale(0.88); opacity: 0.5; }
    100% { transform: translateX(-50%) scale(1.15); opacity: 1; }
  }

  @keyframes ember-spark-rise {
    0% { opacity: 0; transform: translate(-50%, 0) scale(0.5); }
    20% { opacity: 1; transform: translate(-50%, -10px) scale(1.2); }
    100% { opacity: 0; transform: translate(calc(-50% + var(--spark-drift, 6px)), -52px) scale(0.4); }
  }

  /* --- v2: Thermal combustion flame physics ---
     Charcoal ember base glow, smoky ruby mantle, brilliant flame-orange body,
     white-hot luminous core, and rising golden sparks. */
  .emc {
    width: 84px;
    height: 100px;
    position: relative;
  }

  .emc-base {
    position: absolute;
    bottom: 6px;
    left: 50%;
    width: 48px;
    height: 12px;
    border-radius: 50%;
    transform: translateX(-50%);
    background: radial-gradient(ellipse at center, rgba(239, 68, 68, 0.85), rgba(185, 28, 28, 0.5) 50%, transparent 75%);
    box-shadow: 0 0 14px rgba(220, 38, 38, 0.8);
    animation: ember-glow 1.2s ease-in-out infinite alternate;
  }

  .emc-flame {
    position: absolute;
    bottom: 14px;
    left: 50%;
    border-radius: 50% 4% 50% 50%;
    transform-origin: center 75%;
  }

  .emc-flame.outer {
    width: 44px;
    height: 44px;
    margin-left: -22px;
    background: linear-gradient(135deg, rgba(220, 38, 38, 0.5), rgba(234, 88, 12, 0.85));
    filter: blur(1.2px);
    box-shadow: 0 0 16px rgba(234, 88, 12, 0.7);
    animation: ember-flicker 0.65s ease-in-out infinite alternate;
  }

  .emc-flame.mid {
    width: 30px;
    height: 30px;
    margin-left: -15px;
    bottom: 16px;
    background: linear-gradient(135deg, #ea580c, #f59e0b 60%, #fef08a);
    box-shadow: 0 0 12px rgba(245, 158, 11, 0.9);
    animation: ember-flicker 0.48s ease-in-out infinite alternate-reverse;
  }

  .emc-flame.core {
    width: 16px;
    height: 16px;
    margin-left: -8px;
    bottom: 18px;
    background: #ffffff;
    box-shadow: 0 0 14px #ffffff, 0 0 24px #fde047;
    animation: ember-flicker 0.38s ease-in-out infinite alternate;
  }

  .emc-spark {
    position: absolute;
    bottom: 48px;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fef08a;
    box-shadow: 0 0 10px #f59e0b, 0 0 14px #ef4444;
    opacity: 0;
    animation: ember-spark-rise 1.8s ease-out infinite;
  }

  .emc-spark.s1 { --spark-drift: -18px; animation-delay: 0s; }
  .emc-spark.s2 { --spark-drift: 16px; animation-delay: -0.6s; width: 9px; height: 9px; }
  .emc-spark.s3 { --spark-drift: -8px; animation-delay: -1.2s; width: 7px; height: 7px; }
`;

const emberMarkup = {
  v1: `
    <div class="ember">
      <div class="ember-base"></div>
      <div class="ember-flame outer"></div>
      <div class="ember-flame mid"></div>
      <div class="ember-flame core"></div>
      <div class="ember-spark s1"></div>
      <div class="ember-spark s2"></div>
      <div class="ember-spark s3"></div>
    </div>
  `,
  v2: `
    <div class="emc">
      <div class="emc-base"></div>
      <div class="emc-flame outer"></div>
      <div class="emc-flame mid"></div>
      <div class="emc-flame core"></div>
      <div class="emc-spark s1"></div>
      <div class="emc-spark s2"></div>
      <div class="emc-spark s3"></div>
    </div>
  `,
};

class ConceptEmber extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${emberStyles}</style>${emberMarkup[version] || emberMarkup.v2}`;
  }
}

if (!customElements.get('concept-ember')) {
  customElements.define('concept-ember', ConceptEmber);
}
