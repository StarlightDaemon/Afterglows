const hauntedMirrorStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .hm {
    width: 104px;
    height: 104px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hm-frame {
    position: relative;
    width: 58px;
    height: 82px;
    border-radius: 28px 28px 6px 6px;
    border: 4px solid rgba(140, 255, 170, 0.55);
    background: linear-gradient(160deg, #04120a 0%, #071c10 45%, #030b06 100%);
    box-shadow: 0 0 12px rgba(0, 204, 0, 0.25), inset 0 0 10px rgba(0, 204, 0, 0.15);
    overflow: hidden;
  }

  .hm-topper {
    position: absolute;
    top: 2px;
    left: 50%;
    width: 8px;
    height: 8px;
    margin-left: -4px;
    transform: rotate(45deg);
    background: rgba(140, 255, 170, 0.55);
  }

  .hm-sheen {
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: 0;
    width: 16px;
    transform: skewX(-18deg);
    background: linear-gradient(90deg, transparent, rgba(200, 255, 210, 0.4), transparent);
    animation: hm-sheen 2.4s linear infinite;
  }

  .hm-figure {
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 30px;
    height: 44px;
    margin-left: -15px;
    animation: hm-figure 2.4s ease-in-out infinite;
  }

  .hm-head {
    position: absolute;
    top: 0;
    left: 50%;
    width: 16px;
    height: 18px;
    margin-left: -8px;
    border-radius: 50% 50% 42% 42%;
    background: radial-gradient(circle at 42% 34%, rgba(190, 255, 205, 0.85), rgba(60, 160, 90, 0.5) 70%);
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.7);
    filter: blur(0.4px);
  }

  .hm-shroud {
    position: absolute;
    top: 15px;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 0 0;
    background: linear-gradient(180deg, rgba(120, 230, 150, 0.6), transparent 85%);
    filter: blur(0.8px);
  }

  .hm-eye {
    position: absolute;
    top: 7px;
    width: 4px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
    animation: hm-eyes 2.4s ease-in-out infinite;
  }

  .hm-eye.left { left: 10px; }
  .hm-eye.right { right: 10px; }

  .hm-crack {
    position: absolute;
    top: 26px;
    left: 8px;
    width: 40px;
    height: 26px;
    opacity: 0.8;
    background:
      linear-gradient(64deg, transparent 47%, rgba(220, 255, 228, 0.8) 48%, transparent 50%),
      linear-gradient(-38deg, transparent 55%, rgba(220, 255, 228, 0.6) 56%, transparent 58%),
      linear-gradient(12deg, transparent 44%, rgba(220, 255, 228, 0.5) 45%, transparent 47%);
  }

  .hm-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 78%, rgba(0, 204, 0, 0.25), transparent 65%);
    animation: hm-glow 2.3s ease-in-out infinite alternate;
  }

  @keyframes hm-figure {
    0% { transform: translate(-8px, 6px) scale(0.85); }
    30% { transform: translate(8px, -6px) scale(1.15); }
    60% { transform: translate(-6px, -4px) scale(1.3); }
    100% { transform: translate(-8px, 6px) scale(0.85); }
  }

  @keyframes hm-eyes {
    0%, 100% { transform: translateX(0); }
    30% { transform: translateX(2px); }
    60% { transform: translateX(-2px); }
  }

  @keyframes hm-sheen {
    0% { transform: translateX(-24px) skewX(-18deg); opacity: 0; }
    20% { opacity: 0.9; }
    80% { opacity: 0.9; }
    100% { transform: translateX(68px) skewX(-18deg); opacity: 0; }
  }

  @keyframes hm-glow {
    0% { opacity: 0.5; }
    100% { opacity: 1; }
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

  /* v2: Victorian haunted mirror with antique gold frame, candle flicker,
     spectral purple phantom with glowing amber eyes, and glass fractures */
  .hmc {
    width: 104px;
    height: 104px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Antique gold baroque frame */
  .hmc-frame {
    position: relative;
    width: 58px;
    height: 82px;
    border-radius: 28px 28px 6px 6px;
    border: 4px solid #facc15;
    background: linear-gradient(160deg, #1e1b4b 0%, #0f172a 45%, #020617 100%);
    box-shadow: 0 0 12px rgba(250, 204, 21, 0.4), inset 0 0 10px rgba(0, 0, 0, 0.8);
    overflow: hidden;
  }

  /* Gold finial ornament topper */
  .hmc-topper {
    position: absolute;
    top: 2px;
    left: 50%;
    width: 8px;
    height: 8px;
    margin-left: -4px;
    transform: rotate(45deg);
    background: #fde047;
    box-shadow: 0 0 6px #facc15;
  }

  /* Silver glass sheen sweep */
  .hmc-sheen {
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: 0;
    width: 16px;
    transform: skewX(-18deg);
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    animation: hmc-sheen 2.4s linear infinite;
  }

  /* Spectral apparition */
  .hmc-figure {
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 30px;
    height: 44px;
    margin-left: -15px;
    animation: hmc-figure 2.4s ease-in-out infinite;
  }

  .hmc-head {
    position: absolute;
    top: 0;
    left: 50%;
    width: 16px;
    height: 18px;
    margin-left: -8px;
    border-radius: 50% 50% 42% 42%;
    background: radial-gradient(circle at 42% 34%, #e9d5ff 0%, #c084fc 50%, rgba(168, 85, 247, 0.6) 80%);
    box-shadow: 0 0 12px #c084fc;
    filter: blur(0.4px);
  }

  .hmc-shroud {
    position: absolute;
    top: 15px;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 0 0;
    background: linear-gradient(180deg, rgba(192, 132, 252, 0.8), rgba(56, 189, 248, 0.3) 60%, transparent 90%);
    filter: blur(0.8px);
  }

  /* Piercing glowing amber phantom eyes */
  .hmc-eye {
    position: absolute;
    top: 7px;
    width: 4px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #fde047, 0 0 14px #facc15;
    animation: hmc-eyes 2.4s ease-in-out infinite;
  }

  .hmc-eye.left { left: 10px; }
  .hmc-eye.right { right: 10px; }

  /* Fractured glass crack */
  .hmc-crack {
    position: absolute;
    top: 26px;
    left: 8px;
    width: 40px;
    height: 26px;
    opacity: 0.85;
    background:
      linear-gradient(64deg, transparent 47%, #38bdf8 48%, transparent 50%),
      linear-gradient(-38deg, transparent 55%, #ffffff 56%, transparent 58%),
      linear-gradient(12deg, transparent 44%, #7dd3fc 45%, transparent 47%);
    filter: drop-shadow(0 0 2px #38bdf8);
  }

  /* Candlelight glow flicker */
  .hmc-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 78%, rgba(245, 158, 11, 0.35), transparent 65%);
    animation: hmc-glow 2.3s ease-in-out infinite alternate;
  }

  @keyframes hmc-figure {
    0% { transform: translate(-8px, 6px) scale(0.85); }
    30% { transform: translate(8px, -6px) scale(1.15); }
    60% { transform: translate(-6px, -4px) scale(1.3); }
    100% { transform: translate(-8px, 6px) scale(0.85); }
  }

  @keyframes hmc-eyes {
    0%, 100% { transform: translateX(0); }
    30% { transform: translateX(2px); }
    60% { transform: translateX(-2px); }
  }

  @keyframes hmc-sheen {
    0% { transform: translateX(-24px) skewX(-18deg); opacity: 0; }
    20% { opacity: 0.95; }
    80% { opacity: 0.95; }
    100% { transform: translateX(68px) skewX(-18deg); opacity: 0; }
  }

  @keyframes hmc-glow {
    0% { opacity: 0.55; }
    100% { opacity: 1; }
  }
  `,
};

const hauntedMirrorMarkup = {
  v1: `
      <div class="hm">
        <div class="hm-frame">
          <div class="hm-glow"></div>
          <div class="hm-figure">
            <div class="hm-shroud"></div>
            <div class="hm-head"></div>
            <div class="hm-eye left"></div>
            <div class="hm-eye right"></div>
          </div>
          <div class="hm-crack"></div>
          <div class="hm-sheen"></div>
        </div>
        <div class="hm-topper"></div>
      </div>
    `,
  v2: `
      <div class="hmc">
        <div class="hmc-frame">
          <div class="hmc-glow"></div>
          <div class="hmc-figure">
            <div class="hmc-shroud"></div>
            <div class="hmc-head"></div>
            <div class="hmc-eye left"></div>
            <div class="hmc-eye right"></div>
          </div>
          <div class="hmc-crack"></div>
          <div class="hmc-sheen"></div>
        </div>
        <div class="hmc-topper"></div>
      </div>
    `,
};

class ConceptHauntedMirror extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${hauntedMirrorStyles[version] || hauntedMirrorStyles.v2}</style>${hauntedMirrorMarkup[version] || hauntedMirrorMarkup.v2}`;
  }
}

if (!customElements.get('concept-haunted-mirror')) {
  customElements.define('concept-haunted-mirror', ConceptHauntedMirror);
}
