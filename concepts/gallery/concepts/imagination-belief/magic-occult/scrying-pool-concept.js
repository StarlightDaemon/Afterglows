const scryingPoolStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .scry {
    width: 114px;
    height: 100px;
    position: relative;
  }

  .scry-basin {
    position: absolute;
    left: 12px;
    top: 14px;
    width: 90px;
    height: 72px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 50% 40%, rgba(0, 50, 10, 0.95), rgba(0, 15, 3, 0.98));
    border: 3px solid #00ff66;
    box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.95), 0 0 12px rgba(0, 255, 100, 0.5);
    overflow: hidden;
  }

  .scry-runes {
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    border: 1.5px dashed #00ff66;
    pointer-events: none;
    animation: scry-spin 2.0s linear infinite;
  }

  @keyframes scry-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .scry-drop {
    position: absolute;
    left: 56px;
    top: 0;
    width: 4px;
    height: 6px;
    border-radius: 50% 50% 20% 20%;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
    animation: scry-drip 1.2s cubic-bezier(0.6, 0.1, 0.9, 0.3) infinite;
    z-index: 6;
  }

  @keyframes scry-drip {
    0% { top: -6px; opacity: 1; transform: scaleY(1.3); }
    70% { top: 46px; opacity: 1; transform: scaleY(1); }
    75% { top: 48px; opacity: 0; transform: scaleY(0.5); }
    100% { top: 48px; opacity: 0; }
  }

  .scry-ripple {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    border: 1.5px solid #00ff66;
    transform: translate(-50%, -50%);
    animation: scry-wave 1.2s ease-out infinite;
    pointer-events: none;
  }

  .scry-ripple.r1 { animation-delay: 0s; }
  .scry-ripple.r2 { animation-delay: 0.6s; }

  @keyframes scry-wave {
    0% { opacity: 1; width: 4px; height: 3px; }
    80% { opacity: 0.8; width: 70px; height: 50px; }
    100% { opacity: 0; width: 90px; height: 64px; }
  }

  .scry-eye {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 38px;
    height: 24px;
    margin-left: -19px;
    margin-top: -12px;
    border-radius: 50% 50% 50% 50% / 80% 80% 80% 80%;
    border: 2px solid #ffffff;
    background: radial-gradient(circle, rgba(0, 255, 100, 0.7), transparent 70%);
    box-shadow: 0 0 14px #00ff66;
    animation: scry-eye-vision 1.6s ease-in-out infinite alternate;
    z-index: 4;
  }

  @keyframes scry-eye-vision {
    0% { transform: translate(-14px, -6px) scale(0.9); }
    100% { transform: translate(14px, 6px) scale(1.1); }
  }

  .scry-pupil {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10px;
    height: 10px;
    margin-left: -5px;
    margin-top: -5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00ff66;
    animation: scry-pupil-gaze 1.6s ease-in-out infinite alternate;
  }

  @keyframes scry-pupil-gaze {
    0% { transform: translateX(-4px) scale(0.8); }
    100% { transform: translateX(4px) scale(1.2); }
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

  /* v2: Obsidian scrying font with gold runes and cosmic all-seeing eye */
  .scryc {
    width: 114px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Obsidian carved font basin */
  .scryc-basin {
    position: absolute;
    left: 12px;
    top: 14px;
    width: 90px;
    height: 72px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 50% 40%, #1e1b4b 0%, #09090b 70%, #020617 100%);
    border: 3px solid #facc15;
    box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.95), 0 0 14px rgba(250, 204, 21, 0.5);
    overflow: hidden;
  }

  /* Golden runic inscription border */
  .scryc-runes {
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    border: 1.5px dashed rgba(250, 204, 21, 0.8);
    box-shadow: 0 0 8px rgba(250, 204, 21, 0.5);
    pointer-events: none;
    animation: scryc-spin 2.0s linear infinite;
  }

  @keyframes scryc-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Cyan scrying water drop */
  .scryc-drop {
    position: absolute;
    left: 56px;
    top: 0;
    width: 4px;
    height: 6px;
    border-radius: 50% 50% 20% 20%;
    background: #38bdf8;
    box-shadow: 0 0 8px #00f0ff;
    animation: scryc-drip 1.2s cubic-bezier(0.6, 0.1, 0.9, 0.3) infinite;
    z-index: 6;
  }

  @keyframes scryc-drip {
    0% { top: -6px; opacity: 1; transform: scaleY(1.3); }
    70% { top: 46px; opacity: 1; transform: scaleY(1); }
    75% { top: 48px; opacity: 0; transform: scaleY(0.5); }
    100% { top: 48px; opacity: 0; }
  }

  /* Azure / cyan concentric ripple waves */
  .scryc-ripple {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    border: 1.5px solid #38bdf8;
    box-shadow: 0 0 8px #00f0ff;
    transform: translate(-50%, -50%);
    animation: scryc-wave 1.2s ease-out infinite;
    pointer-events: none;
  }

  .scryc-ripple.r1 { animation-delay: 0s; }
  .scryc-ripple.r2 { animation-delay: 0.6s; }

  @keyframes scryc-wave {
    0% { opacity: 1; width: 4px; height: 3px; }
    80% { opacity: 0.8; width: 70px; height: 50px; }
    100% { opacity: 0; width: 90px; height: 64px; }
  }

  /* Manifesting cosmic all-seeing eye */
  .scryc-eye {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 38px;
    height: 24px;
    margin-left: -19px;
    margin-top: -12px;
    border-radius: 50% 50% 50% 50% / 80% 80% 80% 80%;
    border: 2px solid #c084fc;
    background: radial-gradient(circle, #ec4899 0%, #a855f7 50%, transparent 80%);
    box-shadow: 0 0 16px #c084fc;
    animation: scryc-eye-vision 1.6s ease-in-out infinite alternate;
    z-index: 4;
  }

  @keyframes scryc-eye-vision {
    0% { transform: translate(-14px, -6px) scale(0.9); }
    100% { transform: translate(14px, 6px) scale(1.1); }
  }

  /* Piercing golden iris and pupil */
  .scryc-pupil {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10px;
    height: 10px;
    margin-left: -5px;
    margin-top: -5px;
    border-radius: 50%;
    background: #fde047;
    box-shadow: 0 0 10px #facc15;
    animation: scryc-pupil-gaze 1.6s ease-in-out infinite alternate;
  }

  @keyframes scryc-pupil-gaze {
    0% { transform: translateX(-4px) scale(0.8); }
    100% { transform: translateX(4px) scale(1.2); }
  }
  `,
};

const scryingPoolMarkup = {
  v1: `
      <div class="scry">
        <div class="scry-drop"></div>
        <div class="scry-basin">
          <div class="scry-runes"></div>
          <div class="scry-eye">
            <div class="scry-pupil"></div>
          </div>
          <div class="scry-ripple r1"></div>
          <div class="scry-ripple r2"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="scryc">
        <div class="scryc-drop"></div>
        <div class="scryc-basin">
          <div class="scryc-runes"></div>
          <div class="scryc-eye">
            <div class="scryc-pupil"></div>
          </div>
          <div class="scryc-ripple r1"></div>
          <div class="scryc-ripple r2"></div>
        </div>
      </div>
    `,
};

class ConceptScryingPool extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${scryingPoolStyles[version] || scryingPoolStyles.v2}</style>${scryingPoolMarkup[version] || scryingPoolMarkup.v2}`;
  }
}

if (!customElements.get('concept-scrying-pool')) {
  customElements.define('concept-scrying-pool', ConceptScryingPool);
}
