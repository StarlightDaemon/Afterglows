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
    border: 3px solid var(--accent, #00cc00);
    box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.95), 0 0 10px rgba(0, 204, 0, 0.35);
    overflow: hidden;
  }

  .scry-runes {
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    border: 1px dashed rgba(140, 255, 170, 0.4);
    pointer-events: none;
  }

  .scry-drop {
    position: absolute;
    left: 56px;
    top: 0;
    width: 4px;
    height: 6px;
    border-radius: 50% 50% 20% 20%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.9);
    animation: scry-drip 4.5s cubic-bezier(0.6, 0.1, 0.9, 0.3) infinite;
    z-index: 6;
  }

  @keyframes scry-drip {
    0% { top: -6px; opacity: 1; transform: scaleY(1.3); }
    22% { top: 46px; opacity: 1; transform: scaleY(1); }
    23% { top: 48px; opacity: 0; transform: scaleY(0.5); }
    100% { top: 48px; opacity: 0; }
  }

  .scry-ripple {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    border: 1.5px solid rgba(140, 255, 170, 0.9);
    transform: translate(-50%, -50%);
    animation: scry-wave 4.5s ease-out infinite;
    pointer-events: none;
  }

  .scry-ripple.r1 { animation-delay: 1.0s; }
  .scry-ripple.r2 { animation-delay: 1.3s; }

  @keyframes scry-wave {
    0%, 22% { opacity: 0; width: 4px; height: 3px; }
    24% { opacity: 1; width: 14px; height: 10px; }
    60% { opacity: 0.8; width: 62px; height: 44px; }
    85% { opacity: 0; width: 84px; height: 60px; }
    100% { opacity: 0; }
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
    border: 2px solid rgba(190, 255, 205, 1);
    background: radial-gradient(circle, rgba(140, 255, 170, 0.6), transparent 70%);
    box-shadow: 0 0 12px rgba(140, 255, 170, 1);
    animation: scry-eye-vision 4.5s ease-in-out infinite;
    z-index: 4;
  }

  @keyframes scry-eye-vision {
    0%, 25% { opacity: 0; transform: scale(0.4); }
    38% { opacity: 1; transform: scale(1.05); }
    55% { opacity: 1; transform: scale(1); }
    75% { opacity: 0.9; transform: scale(0.95); }
    90%, 100% { opacity: 0; transform: scale(0.6); }
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
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 6px rgba(190, 255, 205, 1);
    animation: scry-pupil-gaze 4.5s ease-in-out infinite;
  }

  @keyframes scry-pupil-gaze {
    0%, 25% { transform: scale(0.2); }
    40% { transform: scale(1.3); }
    60% { transform: scale(0.9); }
    85%, 100% { transform: scale(0.2); }
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

  /* v2: Obsidian scrying font with gold runes, cyan liquid drop,
     expanding azure ripple waves, and cosmic violet/magenta all-seeing eye */
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
    box-shadow: inset 0 0 16px rgba(0, 0, 0, 0.95), 0 0 12px rgba(250, 204, 21, 0.4);
    overflow: hidden;
  }

  /* Golden runic inscription border */
  .scryc-runes {
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    border: 1.5px dashed rgba(250, 204, 21, 0.6);
    box-shadow: 0 0 6px rgba(250, 204, 21, 0.4);
    pointer-events: none;
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
    animation: scryc-drip 4.5s cubic-bezier(0.6, 0.1, 0.9, 0.3) infinite;
    z-index: 6;
  }

  @keyframes scryc-drip {
    0% { top: -6px; opacity: 1; transform: scaleY(1.3); }
    22% { top: 46px; opacity: 1; transform: scaleY(1); }
    23% { top: 48px; opacity: 0; transform: scaleY(0.5); }
    100% { top: 48px; opacity: 0; }
  }

  /* Azure / cyan concentric ripple waves */
  .scryc-ripple {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    border: 1.5px solid #38bdf8;
    box-shadow: 0 0 6px #00f0ff;
    transform: translate(-50%, -50%);
    animation: scryc-wave 4.5s ease-out infinite;
    pointer-events: none;
  }

  .scryc-ripple.r1 { animation-delay: 1.0s; }
  .scryc-ripple.r2 { animation-delay: 1.3s; }

  @keyframes scryc-wave {
    0%, 22% { opacity: 0; width: 4px; height: 3px; }
    24% { opacity: 1; width: 14px; height: 10px; }
    60% { opacity: 0.8; width: 62px; height: 44px; }
    85% { opacity: 0; width: 84px; height: 60px; }
    100% { opacity: 0; }
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
    animation: scryc-eye-vision 4.5s ease-in-out infinite;
    z-index: 4;
  }

  @keyframes scryc-eye-vision {
    0%, 25% { opacity: 0; transform: scale(0.4); }
    38% { opacity: 1; transform: scale(1.05); }
    55% { opacity: 1; transform: scale(1); }
    75% { opacity: 0.95; transform: scale(0.95); }
    90%, 100% { opacity: 0; transform: scale(0.6); }
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
    box-shadow: 0 0 8px #facc15, inset 0 0 4px #ea580c;
    animation: scryc-pupil-gaze 4.5s ease-in-out infinite;
  }

  @keyframes scryc-pupil-gaze {
    0%, 25% { transform: scale(0.2); }
    40% { transform: scale(1.3); }
    60% { transform: scale(0.9); }
    85%, 100% { transform: scale(0.2); }
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
