const emberStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ember {
    width: 84px;
    height: 100px;
    position: relative;
  }

  .ember-base {
    position: absolute;
    bottom: 6px;
    left: 50%;
    width: 44px;
    height: 10px;
    border-radius: 50%;
    transform: translateX(-50%);
    background: radial-gradient(ellipse at center, rgba(0, 204, 0, 0.4), transparent 70%);
    animation: ember-glow 1.6s ease-in-out infinite;
  }

  /* Teardrop flame: sharp corner rotated to point upward. */
  .ember-flame {
    position: absolute;
    bottom: 14px;
    left: 50%;
    border-radius: 50% 4% 50% 50%;
    transform-origin: center 70%;
  }

  .ember-flame.outer {
    width: 42px;
    height: 42px;
    margin-left: -21px;
    background: linear-gradient(135deg, rgba(0, 204, 0, 0.28), rgba(0, 204, 0, 0.5));
    filter: blur(1px);
    animation: ember-flicker 0.52s ease-in-out infinite alternate;
  }

  .ember-flame.mid {
    width: 28px;
    height: 28px;
    margin-left: -14px;
    bottom: 16px;
    background: linear-gradient(135deg, rgba(80, 235, 90, 0.75), rgba(150, 255, 130, 0.9));
    animation: ember-flicker 0.38s ease-in-out infinite alternate-reverse;
  }

  .ember-flame.core {
    width: 15px;
    height: 15px;
    margin-left: -7px;
    bottom: 18px;
    background: #e6ffd2;
    box-shadow: 0 0 12px rgba(216, 255, 187, 0.8);
    animation: ember-flicker 0.3s ease-in-out infinite alternate;
  }

  .ember-spark {
    position: absolute;
    bottom: 58px;
    left: 50%;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #d8ffbb;
    box-shadow: 0 0 6px rgba(216, 255, 187, 0.75);
    opacity: 0;
    animation: ember-spark-rise 2.1s ease-out infinite;
  }

  .ember-spark.s1 { --spark-drift: -10px; animation-delay: -0.3s; }
  .ember-spark.s2 { --spark-drift: 7px; animation-delay: -1s; }
  .ember-spark.s3 { --spark-drift: -3px; animation-delay: -1.6s; }

  @keyframes ember-flicker {
    0% { transform: rotate(-45deg) scale(1, 1); }
    100% { transform: rotate(-42deg) scale(1.07, 0.94); }
  }

  @keyframes ember-glow {
    0%, 100% { opacity: 0.5; transform: translateX(-50%) scaleX(0.92); }
    50% { opacity: 1; transform: translateX(-50%) scaleX(1.06); }
  }

  @keyframes ember-spark-rise {
    0% { opacity: 0; transform: translate(-50%, 0) scale(1); }
    12% { opacity: 1; }
    100% { opacity: 0; transform: translate(calc(-50% + var(--spark-drift, 6px)), -34px) scale(0.4); }
  }
`;

class ConceptEmber extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${emberStyles}</style>
      <div class="ember">
        <div class="ember-base"></div>
        <div class="ember-flame outer"></div>
        <div class="ember-flame mid"></div>
        <div class="ember-flame core"></div>
        <div class="ember-spark s1"></div>
        <div class="ember-spark s2"></div>
        <div class="ember-spark s3"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-ember')) {
  customElements.define('concept-ember', ConceptEmber);
}
