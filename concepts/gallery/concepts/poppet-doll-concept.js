const poppetDollStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pop {
    width: 114px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .pop-ward {
    position: absolute;
    left: 22px;
    top: 15px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px dashed rgba(190, 255, 205, 0.8);
    pointer-events: none;
    animation: pop-ward-flare 3.6s cubic-bezier(0.1, 0.8, 0.2, 1) infinite;
  }

  @keyframes pop-ward-flare {
    0%, 40% { opacity: 0; transform: scale(0.3) rotate(0deg); }
    50% { opacity: 1; transform: scale(1.15) rotate(45deg); filter: drop-shadow(0 0 6px rgba(140, 255, 170, 1)); }
    75% { opacity: 0.6; transform: scale(1.3) rotate(90deg); }
    90%, 100% { opacity: 0; transform: scale(1.5) rotate(120deg); }
  }

  .pop-doll-rig {
    position: absolute;
    left: 36px;
    top: 14px;
    width: 42px;
    height: 74px;
    animation: pop-twitch 3.6s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
  }

  @keyframes pop-twitch {
    0%, 46% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(4deg) scale(1.05) translateY(-2px); }
    55% { transform: rotate(-3deg) scale(0.98); }
    65% { transform: rotate(1deg); }
    75%, 100% { transform: rotate(0deg) scale(1); }
  }

  .pop-head {
    position: absolute;
    left: 11px;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, rgba(0, 120, 24, 0.9), rgba(0, 35, 8, 0.98));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
  }

  .pop-eye {
    position: absolute;
    top: 6px;
    width: 4px;
    height: 4px;
    background: rgba(190, 255, 205, 1);
    clip-path: polygon(20% 0, 50% 30%, 80% 0, 100% 20%, 70% 50%, 100% 80%, 80% 100%, 50% 70%, 20% 100%, 0 80%, 30% 50%, 0 20%);
  }

  .pop-eye.el { left: 4px; }
  .pop-eye.er { right: 4px; }

  .pop-neck {
    position: absolute;
    left: 15px;
    top: 18px;
    width: 12px;
    height: 4px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.95);
    border: 1px solid var(--accent, #00cc00);
    z-index: 4;
  }

  .pop-torso {
    position: absolute;
    left: 8px;
    top: 20px;
    width: 26px;
    height: 28px;
    border-radius: 6px 6px 10px 10px;
    background: radial-gradient(circle at 40% 40%, rgba(0, 140, 30, 0.9), rgba(0, 40, 8, 0.98));
    border: 1.5px solid var(--accent, #00cc00);
    z-index: 3;
  }

  .pop-heart {
    position: absolute;
    left: 6px;
    top: 6px;
    width: 8px;
    height: 8px;
    clip-path: polygon(50% 0, 100% 35%, 80% 100%, 50% 75%, 20% 100%, 0 35%);
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 6px rgba(140, 255, 170, 1);
    animation: pop-heart-beat 3.6s ease-in-out infinite;
  }

  @keyframes pop-heart-beat {
    0%, 46% { opacity: 0.4; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.6); filter: drop-shadow(0 0 4px rgba(190, 255, 205, 1)); }
    70% { opacity: 0.9; transform: scale(1.1); }
    100% { opacity: 0.4; transform: scale(0.8); }
  }

  .pop-arm {
    position: absolute;
    top: 22px;
    width: 8px;
    height: 22px;
    border-radius: 4px;
    background: rgba(0, 100, 20, 0.9);
    border: 1px solid var(--accent, #00cc00);
  }

  .pop-arm.al { left: 0; transform: rotate(15deg); }
  .pop-arm.ar { right: 0; transform: rotate(-15deg); }

  .pop-leg {
    position: absolute;
    bottom: 0;
    width: 8px;
    height: 24px;
    border-radius: 4px;
    background: rgba(0, 100, 20, 0.9);
    border: 1px solid var(--accent, #00cc00);
  }

  .pop-leg.ll { left: 10px; }
  .pop-leg.lr { right: 10px; }

  .pop-pin {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 32px;
    height: 24px;
    z-index: 6;
    animation: pop-pin-thrust 3.6s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
  }

  @keyframes pop-pin-thrust {
    0%, 30% { transform: translate(-18px, -14px) rotate(-30deg); opacity: 0.6; }
    50%, 80% { transform: translate(14px, 8px) rotate(-30deg); opacity: 1; }
    100% { transform: translate(-18px, -14px) rotate(-30deg); opacity: 0.6; }
  }

  .pop-pin-shaft {
    position: absolute;
    left: 4px;
    top: 10px;
    width: 24px;
    height: 2px;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.9);
  }

  .pop-pin-head {
    position: absolute;
    left: 0;
    top: 7px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(190, 255, 205, 1), rgba(0, 204, 0, 0.8));
    box-shadow: 0 0 8px rgba(140, 255, 170, 1);
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

  /* v2: Ritual burlap poppet doll with glowing crimson heart,
     emerald gemstone pin, and expanding golden occult ward sigil */
  .popc {
    width: 114px;
    height: 100px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Expanding golden occult ward sigil */
  .popc-ward {
    position: absolute;
    left: 22px;
    top: 15px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1.5px dashed #facc15;
    pointer-events: none;
    animation: popc-ward-flare 3.6s cubic-bezier(0.1, 0.8, 0.2, 1) infinite;
  }

  @keyframes popc-ward-flare {
    0%, 40% { opacity: 0; transform: scale(0.3) rotate(0deg); }
    50% { opacity: 1; transform: scale(1.15) rotate(45deg); filter: drop-shadow(0 0 8px #fde047); }
    75% { opacity: 0.6; transform: scale(1.3) rotate(90deg); }
    90%, 100% { opacity: 0; transform: scale(1.5) rotate(120deg); }
  }

  /* Doll rig with twitch */
  .popc-doll-rig {
    position: absolute;
    left: 36px;
    top: 14px;
    width: 42px;
    height: 74px;
    animation: popc-twitch 3.6s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
  }

  @keyframes popc-twitch {
    0%, 46% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(4deg) scale(1.05) translateY(-2px); }
    55% { transform: rotate(-3deg) scale(0.98); }
    65% { transform: rotate(1deg); }
    75%, 100% { transform: rotate(0deg) scale(1); }
  }

  /* Burlap doll head */
  .popc-head {
    position: absolute;
    left: 11px;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #d97706 0%, #b45309 60%, #78350f 100%);
    border: 1.5px solid #facc15;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
  }

  /* Stitched red X eyes */
  .popc-eye {
    position: absolute;
    top: 6px;
    width: 4px;
    height: 4px;
    background: #ef4444;
    box-shadow: 0 0 2px #f87171;
    clip-path: polygon(20% 0, 50% 30%, 80% 0, 100% 20%, 70% 50%, 100% 80%, 80% 100%, 50% 70%, 20% 100%, 0 80%, 30% 50%, 0 20%);
  }

  .popc-eye.el { left: 4px; }
  .popc-eye.er { right: 4px; }

  /* Twine neck tie */
  .popc-neck {
    position: absolute;
    left: 15px;
    top: 18px;
    width: 12px;
    height: 4px;
    border-radius: 2px;
    background: #fef3c7;
    border: 1px solid #ca8a04;
    z-index: 4;
  }

  /* Burlap torso */
  .popc-torso {
    position: absolute;
    left: 8px;
    top: 20px;
    width: 26px;
    height: 28px;
    border-radius: 6px 6px 10px 10px;
    background: radial-gradient(circle at 40% 40%, #d97706 0%, #b45309 60%, #78350f 100%);
    border: 1.5px solid #facc15;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
    z-index: 3;
  }

  /* Glowing ruby red pulsing heart */
  .popc-heart {
    position: absolute;
    left: 6px;
    top: 6px;
    width: 8px;
    height: 8px;
    clip-path: polygon(50% 0, 100% 35%, 80% 100%, 50% 75%, 20% 100%, 0 35%);
    background: #ef4444;
    box-shadow: 0 0 8px #f43f5e;
    animation: popc-heart-beat 3.6s ease-in-out infinite;
  }

  @keyframes popc-heart-beat {
    0%, 46% { opacity: 0.4; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.6); filter: drop-shadow(0 0 8px #ff0055); }
    70% { opacity: 0.9; transform: scale(1.1); }
    100% { opacity: 0.4; transform: scale(0.8); }
  }

  /* Burlap arms and legs */
  .popc-arm {
    position: absolute;
    top: 22px;
    width: 8px;
    height: 22px;
    border-radius: 4px;
    background: #b45309;
    border: 1px solid #d97706;
  }

  .popc-arm.al { left: 0; transform: rotate(15deg); }
  .popc-arm.ar { right: 0; transform: rotate(-15deg); }

  .popc-leg {
    position: absolute;
    bottom: 0;
    width: 8px;
    height: 24px;
    border-radius: 4px;
    background: #b45309;
    border: 1px solid #d97706;
  }

  .popc-leg.ll { left: 10px; }
  .popc-leg.lr { right: 10px; }

  /* Silver ritual pin with emerald head */
  .popc-pin {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 32px;
    height: 24px;
    z-index: 6;
    animation: popc-pin-thrust 3.6s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
  }

  @keyframes popc-pin-thrust {
    0%, 30% { transform: translate(-18px, -14px) rotate(-30deg); opacity: 0.6; }
    50%, 80% { transform: translate(14px, 8px) rotate(-30deg); opacity: 1; }
    100% { transform: translate(-18px, -14px) rotate(-30deg); opacity: 0.6; }
  }

  .popc-pin-shaft {
    position: absolute;
    left: 4px;
    top: 10px;
    width: 24px;
    height: 2px;
    background: #ffffff;
    box-shadow: 0 0 4px #e2e8f0;
  }

  .popc-pin-head {
    position: absolute;
    left: 0;
    top: 7px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle, #10b981 0%, #047857 100%);
    box-shadow: 0 0 10px #34d399;
  }
  `,
};

const poppetDollMarkup = {
  v1: `
      <div class="pop">
        <div class="pop-ward"></div>
        <div class="pop-doll-rig">
          <div class="pop-arm al"></div>
          <div class="pop-arm ar"></div>
          <div class="pop-leg ll"></div>
          <div class="pop-leg lr"></div>
          <div class="pop-torso">
            <div class="pop-heart"></div>
          </div>
          <div class="pop-neck"></div>
          <div class="pop-head">
            <div class="pop-eye el"></div>
            <div class="pop-eye er"></div>
          </div>
        </div>
        <div class="pop-pin">
          <div class="pop-pin-head"></div>
          <div class="pop-pin-shaft"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="popc">
        <div class="popc-ward"></div>
        <div class="popc-doll-rig">
          <div class="popc-arm al"></div>
          <div class="popc-arm ar"></div>
          <div class="popc-leg ll"></div>
          <div class="popc-leg lr"></div>
          <div class="popc-torso">
            <div class="popc-heart"></div>
          </div>
          <div class="popc-neck"></div>
          <div class="popc-head">
            <div class="popc-eye el"></div>
            <div class="popc-eye er"></div>
          </div>
        </div>
        <div class="popc-pin">
          <div class="popc-pin-head"></div>
          <div class="popc-pin-shaft"></div>
        </div>
      </div>
    `,
};

class ConceptPoppetDoll extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${poppetDollStyles[version] || poppetDollStyles.v2}</style>${poppetDollMarkup[version] || poppetDollMarkup.v2}`;
  }
}

if (!customElements.get('concept-poppet-doll')) {
  customElements.define('concept-poppet-doll', ConceptPoppetDoll);
}
