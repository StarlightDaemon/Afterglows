const terraformStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .terra {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .terra-planet {
    position: relative;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    overflow: hidden;
    background: radial-gradient(circle at 34% 30%, #16341c 0%, #0c2010 45%, #051007 100%);
    box-shadow:
      inset -8px -8px 16px rgba(0, 0, 0, 0.75),
      inset 4px 4px 10px rgba(160, 255, 185, 0.14),
      0 0 14px rgba(0, 204, 0, 0.2);
  }

  .terra-crater {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(120, 160, 130, 0.4);
    background: rgba(30, 40, 32, 0.5);
    animation: terra-crater 12s ease-in-out infinite;
  }

  .terra-crater.c1 { top: 14px; left: 40px; width: 13px; height: 13px; }
  .terra-crater.c2 { top: 44px; left: 12px; width: 9px; height: 9px; animation-delay: -0.6s; }
  .terra-crater.c3 { top: 52px; left: 50px; width: 7px; height: 7px; animation-delay: -1.1s; }

  .terra-wave {
    position: absolute;
    top: -10%;
    bottom: -10%;
    left: -130%;
    width: 130%;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(0, 204, 0, 0.18) 42%,
      rgba(120, 255, 150, 0.5) 50%,
      rgba(0, 204, 0, 0.18) 58%,
      transparent 100%);
    filter: blur(1px);
    animation: terra-sweep 12s ease-in-out infinite;
  }

  .terra-bloom {
    position: absolute;
    border-radius: 46% 54% 52% 48%;
    background: radial-gradient(circle, rgba(90, 240, 120, 0.55), rgba(30, 140, 55, 0.3) 75%);
    opacity: 0;
    animation: terra-bloom 12s ease-in-out infinite;
  }

  .terra-bloom.b1 { top: 18px; left: 12px; width: 20px; height: 14px; animation-delay: 0.4s; }
  .terra-bloom.b2 { top: 38px; left: 30px; width: 26px; height: 18px; animation-delay: 1s; }
  .terra-bloom.b3 { top: 12px; left: 44px; width: 16px; height: 12px; animation-delay: 1.7s; }
  .terra-bloom.b4 { top: 54px; left: 16px; width: 15px; height: 10px; animation-delay: 2.2s; }

  .terra-cloud {
    position: absolute;
    height: 5px;
    border-radius: 3px;
    background: rgba(225, 255, 232, 0.55);
    filter: blur(1px);
    opacity: 0;
    animation: terra-cloud 12s ease-in-out infinite;
  }

  .terra-cloud.k1 { top: 22px; left: 18px; width: 24px; animation-delay: 0s; }
  .terra-cloud.k2 { top: 46px; left: 34px; width: 18px; animation-delay: 0.8s; }
  .terra-cloud.k3 { top: 34px; left: 8px; width: 14px; animation-delay: 1.5s; }

  .terra-station {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 96px;
    height: 96px;
    margin: -48px 0 0 -48px;
    animation: terra-orbit 8s linear infinite;
  }

  .terra-station::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 7px;
    height: 4px;
    margin-left: -3.5px;
    border-radius: 1px;
    background: rgba(200, 255, 212, 0.95);
    box-shadow: 0 0 6px rgba(180, 255, 195, 0.8);
  }

  @keyframes terra-sweep {
    0%, 8% { left: -130%; }
    42%, 58% { left: 100%; }
    92%, 100% { left: -130%; }
  }

  @keyframes terra-crater {
    0%, 10% { opacity: 1; }
    45%, 62% { opacity: 0.08; }
    95%, 100% { opacity: 1; }
  }

  @keyframes terra-bloom {
    0%, 14% { opacity: 0; transform: scale(0.5); }
    38%, 60% { opacity: 1; transform: scale(1); }
    88%, 100% { opacity: 0; transform: scale(0.6); }
  }

  @keyframes terra-cloud {
    0%, 30% { opacity: 0; transform: translateX(0); }
    48%, 64% { opacity: 0.85; transform: translateX(6px); }
    86%, 100% { opacity: 0; transform: translateX(12px); }
  }

  @keyframes terra-orbit {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
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

  /* v2: Planetary terraforming from red barren Mars to emerald/sapphire biosphere,
     with cyan atmospheric wave and orbiting golden station */
  .terrac {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Planet body: transitioning from rust red to oceanic blue */
  .terrac-planet {
    position: relative;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    overflow: hidden;
    background: radial-gradient(circle at 34% 30%, #ea580c 0%, #b45309 35%, #78350f 70%, #1e293b 100%);
    box-shadow:
      inset -8px -8px 16px rgba(0, 0, 0, 0.9),
      inset 4px 4px 10px rgba(56, 189, 248, 0.4),
      0 0 16px rgba(56, 189, 248, 0.4);
  }

  /* Barren craters */
  .terrac-crater {
    position: absolute;
    border-radius: 50%;
    border: 1px solid #78350f;
    background: rgba(69, 26, 3, 0.6);
    animation: terrac-crater 12s ease-in-out infinite;
  }

  .terrac-crater.c1 { top: 14px; left: 40px; width: 13px; height: 13px; }
  .terrac-crater.c2 { top: 44px; left: 12px; width: 9px; height: 9px; animation-delay: -0.6s; }
  .terrac-crater.c3 { top: 52px; left: 50px; width: 7px; height: 7px; animation-delay: -1.1s; }

  /* Cyan atmospheric ion wavefront */
  .terrac-wave {
    position: absolute;
    top: -10%;
    bottom: -10%;
    left: -130%;
    width: 130%;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(56, 189, 248, 0.3) 40%,
      #00f0ff 50%,
      rgba(56, 189, 248, 0.3) 60%,
      transparent 100%);
    filter: blur(1.5px);
    box-shadow: 0 0 12px #00f0ff;
    animation: terrac-sweep 12s ease-in-out infinite;
  }

  /* Emerald biosphere flora blooms */
  .terrac-bloom {
    position: absolute;
    border-radius: 46% 54% 52% 48%;
    background: radial-gradient(circle, #22c55e 0%, #15803d 50%, #0284c7 85%);
    box-shadow: 0 0 8px #22c55e;
    opacity: 0;
    animation: terrac-bloom 12s ease-in-out infinite;
  }

  .terrac-bloom.b1 { top: 18px; left: 12px; width: 20px; height: 14px; animation-delay: 0.4s; }
  .terrac-bloom.b2 { top: 38px; left: 30px; width: 26px; height: 18px; animation-delay: 1s; }
  .terrac-bloom.b3 { top: 12px; left: 44px; width: 16px; height: 12px; animation-delay: 1.7s; }
  .terrac-bloom.b4 { top: 54px; left: 16px; width: 15px; height: 10px; animation-delay: 2.2s; }

  /* White condensation clouds */
  .terrac-cloud {
    position: absolute;
    height: 5px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 0 4px #ffffff;
    filter: blur(0.8px);
    opacity: 0;
    animation: terrac-cloud 12s ease-in-out infinite;
  }

  .terrac-cloud.k1 { top: 22px; left: 18px; width: 24px; animation-delay: 0s; }
  .terrac-cloud.k2 { top: 46px; left: 34px; width: 18px; animation-delay: 0.8s; }
  .terrac-cloud.k3 { top: 34px; left: 8px; width: 14px; animation-delay: 1.5s; }

  /* Orbiting golden seeder satellite */
  .terrac-station {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 96px;
    height: 96px;
    margin: -48px 0 0 -48px;
    animation: terrac-orbit 8s linear infinite;
  }

  .terrac-station::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 7px;
    height: 4px;
    margin-left: -3.5px;
    border-radius: 1px;
    background: #facc15;
    box-shadow: 0 0 8px #fde047;
  }

  @keyframes terrac-sweep {
    0%, 8% { left: -130%; }
    42%, 58% { left: 100%; }
    92%, 100% { left: -130%; }
  }

  @keyframes terrac-crater {
    0%, 10% { opacity: 1; }
    45%, 62% { opacity: 0.08; }
    95%, 100% { opacity: 1; }
  }

  @keyframes terrac-bloom {
    0%, 14% { opacity: 0; transform: scale(0.5); }
    38%, 60% { opacity: 1; transform: scale(1); }
    88%, 100% { opacity: 0; transform: scale(0.6); }
  }

  @keyframes terrac-cloud {
    0%, 30% { opacity: 0; transform: translateX(0); }
    48%, 64% { opacity: 0.9; transform: translateX(6px); }
    86%, 100% { opacity: 0; transform: translateX(12px); }
  }

  @keyframes terrac-orbit {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  `,
};

const terraformMarkup = {
  v1: `
      <div class="terra">
        <div class="terra-planet">
          <div class="terra-crater c1"></div>
          <div class="terra-crater c2"></div>
          <div class="terra-crater c3"></div>
          <div class="terra-bloom b1"></div>
          <div class="terra-bloom b2"></div>
          <div class="terra-bloom b3"></div>
          <div class="terra-bloom b4"></div>
          <div class="terra-cloud k1"></div>
          <div class="terra-cloud k2"></div>
          <div class="terra-cloud k3"></div>
          <div class="terra-wave"></div>
        </div>
        <div class="terra-station"></div>
      </div>
    `,
  v2: `
      <div class="terrac">
        <div class="terrac-planet">
          <div class="terrac-crater c1"></div>
          <div class="terrac-crater c2"></div>
          <div class="terrac-crater c3"></div>
          <div class="terrac-bloom b1"></div>
          <div class="terrac-bloom b2"></div>
          <div class="terrac-bloom b3"></div>
          <div class="terrac-bloom b4"></div>
          <div class="terrac-cloud k1"></div>
          <div class="terrac-cloud k2"></div>
          <div class="terrac-cloud k3"></div>
          <div class="terrac-wave"></div>
        </div>
        <div class="terrac-station"></div>
      </div>
    `,
};

class ConceptTerraform extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${terraformStyles[version] || terraformStyles.v2}</style>${terraformMarkup[version] || terraformMarkup.v2}`;
  }
}

if (!customElements.get('concept-terraform')) {
  customElements.define('concept-terraform', ConceptTerraform);
}
