const oceanWaveStyles = {
  v1: `
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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Rolling multi-layered sapphire and turquoise ocean waves with foaming surf crests
     and sparkling water glints */
  .oceanc {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 30%, #1e3a8a 0%, #0f172a 60%, #020617 100%);
    border-radius: 6px;
  }

  .wavec-layer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 208px;
    height: 104px;
    animation: wavec-scroll linear infinite;
  }

  .wavec-layer svg {
    display: block;
    width: 208px;
    height: 104px;
  }

  .wavec-layer.w1 { animation-duration: 8s; opacity: 0.55; }
  .wavec-layer.w2 { animation-duration: 5.2s; animation-direction: reverse; opacity: 0.75; }
  .wavec-layer.w3 { animation-duration: 3.6s; }

  /* Layer 1: Deep cobalt blue */
  .wavec-fill.f1 { fill: #1e40af; }
  
  /* Layer 2: Azure blue */
  .wavec-fill.f2 { fill: #0284c7; }
  
  /* Layer 3: Vibrant turquoise with foaming white surf crest */
  .wavec-fill.f3 {
    fill: #06b6d4;
    stroke: #ffffff;
    stroke-width: 1.8;
    filter: drop-shadow(0 0 4px #38bdf8);
  }

  /* Water glints */
  .oceanc-glint {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00f0ff, 0 0 12px #38bdf8;
    animation: glintc-blink 2.6s ease-in-out infinite;
  }

  .oceanc-glint.g1 { top: 52px; left: 24px; }
  .oceanc-glint.g2 { top: 60px; left: 68px; animation-delay: -1.2s; }

  @keyframes wavec-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-104px); }
  }

  @keyframes glintc-blink {
    0%, 100% { opacity: 0.2; transform: scale(0.7); }
    50% { opacity: 1; transform: scale(1.2); }
  }
  `,
};

const oceanWaveMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="oceanc">
        <div class="wavec-layer w1">
          <svg viewBox="0 0 208 104" aria-hidden="true">
            <path class="wavec-fill f1" d="M0 56 Q26 44 52 56 T104 56 T156 56 T208 56 V104 H0 Z"></path>
          </svg>
        </div>
        <div class="wavec-layer w2">
          <svg viewBox="0 0 208 104" aria-hidden="true">
            <path class="wavec-fill f2" d="M0 68 Q26 56 52 68 T104 68 T156 68 T208 68 V104 H0 Z"></path>
          </svg>
        </div>
        <div class="wavec-layer w3">
          <svg viewBox="0 0 208 104" aria-hidden="true">
            <path class="wavec-fill f3" d="M0 82 Q26 70 52 82 T104 82 T156 82 T208 82 V104 H0 Z"></path>
          </svg>
        </div>
        <div class="oceanc-glint g1"></div>
        <div class="oceanc-glint g2"></div>
      </div>
    `,
};

class ConceptOceanWave extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${oceanWaveStyles[version] || oceanWaveStyles.v2}</style>${oceanWaveMarkup[version] || oceanWaveMarkup.v2}`;
  }
}

if (!customElements.get('concept-ocean-wave')) {
  customElements.define('concept-ocean-wave', ConceptOceanWave);
}
