const oceanWaveStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ocean {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #010401 0%, #000 55%);
  }

  /* Each layer is a 2-period wave (period 104px) twice the box width;
     translating by exactly one period loops seamlessly. */
  .wave-layer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 208px;
    height: 104px;
    animation: wave-scroll linear infinite;
  }

  .wave-layer svg {
    display: block;
    width: 208px;
    height: 104px;
  }

  .wave-layer.w1 { animation-duration: 8s; opacity: 0.45; }
  .wave-layer.w2 { animation-duration: 5.2s; animation-direction: reverse; opacity: 0.6; }
  .wave-layer.w3 { animation-duration: 3.6s; }

  .wave-fill.f1 { fill: rgba(0, 204, 0, 0.16); }
  .wave-fill.f2 { fill: rgba(0, 204, 0, 0.26); }
  .wave-fill.f3 {
    fill: rgba(0, 204, 0, 0.42);
    stroke: rgba(190, 255, 190, 0.85);
    stroke-width: 1.4;
  }

  .ocean-glint {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #dcffc9;
    box-shadow: 0 0 6px rgba(220, 255, 201, 0.7);
    animation: glint-blink 2.6s ease-in-out infinite;
  }

  .ocean-glint.g1 { top: 52px; left: 24px; }
  .ocean-glint.g2 { top: 60px; left: 68px; animation-delay: -1.2s; }

  @keyframes wave-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-104px); }
  }

  @keyframes glint-blink {
    0%, 100% { opacity: 0.1; transform: scale(0.7); }
    50% { opacity: 1; transform: scale(1.1); }
  }
`;

class ConceptOceanWave extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${oceanWaveStyles}</style>
      <div class="ocean">
        <div class="wave-layer w1">
          <svg viewBox="0 0 208 104" aria-hidden="true">
            <path class="wave-fill f1" d="M0 56 Q26 44 52 56 T104 56 T156 56 T208 56 V104 H0 Z"></path>
          </svg>
        </div>
        <div class="wave-layer w2">
          <svg viewBox="0 0 208 104" aria-hidden="true">
            <path class="wave-fill f2" d="M0 68 Q26 56 52 68 T104 68 T156 68 T208 68 V104 H0 Z"></path>
          </svg>
        </div>
        <div class="wave-layer w3">
          <svg viewBox="0 0 208 104" aria-hidden="true">
            <path class="wave-fill f3" d="M0 82 Q26 70 52 82 T104 82 T156 82 T208 82 V104 H0 Z"></path>
          </svg>
        </div>
        <div class="ocean-glint g1"></div>
        <div class="ocean-glint g2"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-ocean-wave')) {
  customElements.define('concept-ocean-wave', ConceptOceanWave);
}
