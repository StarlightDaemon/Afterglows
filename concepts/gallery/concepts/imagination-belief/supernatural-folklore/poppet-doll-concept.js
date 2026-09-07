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
    border: 1.5px dashed #00ff66;
    pointer-events: none;
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.4);
    animation: pop-ward-flare 2.0s linear infinite;
  }

  @keyframes pop-ward-flare {
    0% { transform: rotate(0deg) scale(0.85); opacity: 0.5; }
    50% { transform: rotate(180deg) scale(1.15); opacity: 1; }
    100% { transform: rotate(360deg) scale(0.85); opacity: 0.5; }
  }

  .pop-doll-rig {
    position: absolute;
    left: 36px;
    top: 14px;
    width: 42px;
    height: 74px;
    animation: pop-twitch 1.6s ease-in-out infinite alternate;
  }

  @keyframes pop-twitch {
    0% { transform: translateY(-8px) rotate(-10deg) scale(0.95); }
    100% { transform: translateY(6px) rotate(10deg) scale(1.05); }
  }

  .pop-head {
    position: absolute;
    left: 11px;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #ffffff, rgba(0, 35, 8, 0.98));
    border: 1.5px solid var(--accent, #00ff66);
    box-shadow: 0 0 8px rgba(0, 255, 100, 0.5);
  }

  .pop-eye {
    position: absolute;
    top: 6px;
    width: 4px;
    height: 4px;
    background: #00ff66;
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
    background: #ffffff;
    border: 1px solid #00ff66;
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
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.4);
    z-index: 3;
  }

  .pop-heart {
    position: absolute;
    left: 6px;
    top: 6px;
    width: 8px;
    height: 8px;
    clip-path: polygon(50% 0, 100% 35%, 80% 100%, 50% 75%, 20% 100%, 0 35%);
    background: #ffffff;
    box-shadow: 0 0 8px #00ff66;
    animation: pop-heart-beat 1.0s ease-in-out infinite alternate;
  }

  @keyframes pop-heart-beat {
    0% { transform: scale(0.8); }
    100% { transform: scale(1.4); }
  }

  .pop-arm {
    position: absolute;
    top: 22px;
    width: 8px;
    height: 22px;
    border-radius: 4px;
    background: rgba(0, 100, 20, 0.9);
    border: 1px solid #00ff66;
    transform-origin: 50% 10%;
    animation: pop-arm-flail 1.0s ease-in-out infinite alternate;
  }

  .pop-arm.al { left: 0; animation-delay: 0s; }
  .pop-arm.ar { right: 0; animation-delay: -0.5s; }

  @keyframes pop-arm-flail {
    0% { transform: rotate(-24deg); }
    100% { transform: rotate(24deg); }
  }

  .pop-leg {
    position: absolute;
    bottom: 0;
    width: 8px;
    height: 24px;
    border-radius: 4px;
    background: rgba(0, 100, 20, 0.9);
    border: 1px solid #00ff66;
    transform-origin: 50% 10%;
    animation: pop-leg-flail 1.0s ease-in-out infinite alternate;
  }

  .pop-leg.ll { left: 10px; animation-delay: -0.3s; }
  .pop-leg.lr { right: 10px; animation-delay: -0.8s; }

  @keyframes pop-leg-flail {
    0% { transform: rotate(-18deg); }
    100% { transform: rotate(18deg); }
  }

  .pop-pin {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 32px;
    height: 24px;
    z-index: 6;
    animation: pop-pin-thrust 1.0s cubic-bezier(0.2, 0.8, 0.2, 1) infinite alternate;
  }

  @keyframes pop-pin-thrust {
    0% { transform: translate(-16px, -12px) rotate(-30deg); }
    100% { transform: translate(14px, 8px) rotate(-30deg); }
  }

  .pop-pin-shaft {
    position: absolute;
    left: 4px;
    top: 10px;
    width: 24px;
    height: 2.5px;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
  }

  .pop-pin-head {
    position: absolute;
    left: 0;
    top: 6px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff, #00ff66 80%);
    box-shadow: 0 0 10px #00ff66;
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
    box-shadow: 0 0 12px rgba(250, 204, 21, 0.5);
    animation: popc-ward-flare 2.0s linear infinite;
  }

  @keyframes popc-ward-flare {
    0% { transform: rotate(0deg) scale(0.85); opacity: 0.5; }
    50% { transform: rotate(180deg) scale(1.15); opacity: 1; }
    100% { transform: rotate(360deg) scale(0.85); opacity: 0.5; }
  }

  /* Doll rig with twitch */
  .popc-doll-rig {
    position: absolute;
    left: 36px;
    top: 14px;
    width: 42px;
    height: 74px;
    animation: popc-twitch 1.6s ease-in-out infinite alternate;
  }

  @keyframes popc-twitch {
    0% { transform: translateY(-8px) rotate(-10deg) scale(0.95); }
    100% { transform: translateY(6px) rotate(10deg) scale(1.05); }
  }

  /* Burlap doll head */
  .popc-head {
    position: absolute;
    left: 11px;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #fef08a 0%, #b45309 60%, #78350f 100%);
    border: 1.5px solid #facc15;
    box-shadow: 0 0 8px rgba(250, 204, 21, 0.4);
  }

  /* Stitched red X eyes */
  .popc-eye {
    position: absolute;
    top: 6px;
    width: 4px;
    height: 4px;
    background: #ef4444;
    box-shadow: 0 0 4px #f87171;
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
    box-shadow: 0 0 10px rgba(217, 119, 6, 0.5);
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
    box-shadow: 0 0 10px #ff0055;
    animation: popc-heart-beat 1.0s ease-in-out infinite alternate;
  }

  @keyframes popc-heart-beat {
    0% { transform: scale(0.8); }
    100% { transform: scale(1.4); }
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
    transform-origin: 50% 10%;
    animation: popc-arm-flail 1.0s ease-in-out infinite alternate;
  }

  .popc-arm.al { left: 0; animation-delay: 0s; }
  .popc-arm.ar { right: 0; animation-delay: -0.5s; }

  @keyframes popc-arm-flail {
    0% { transform: rotate(-24deg); }
    100% { transform: rotate(24deg); }
  }

  .popc-leg {
    position: absolute;
    bottom: 0;
    width: 8px;
    height: 24px;
    border-radius: 4px;
    background: #b45309;
    border: 1px solid #d97706;
    transform-origin: 50% 10%;
    animation: popc-leg-flail 1.0s ease-in-out infinite alternate;
  }

  .popc-leg.ll { left: 10px; animation-delay: -0.3s; }
  .popc-leg.lr { right: 10px; animation-delay: -0.8s; }

  @keyframes popc-leg-flail {
    0% { transform: rotate(-18deg); }
    100% { transform: rotate(18deg); }
  }

  /* Silver ritual pin with emerald head */
  .popc-pin {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 32px;
    height: 24px;
    z-index: 6;
    animation: popc-pin-thrust 1.0s cubic-bezier(0.2, 0.8, 0.2, 1) infinite alternate;
  }

  @keyframes popc-pin-thrust {
    0% { transform: translate(-16px, -12px) rotate(-30deg); }
    100% { transform: translate(14px, 8px) rotate(-30deg); }
  }

  .popc-pin-shaft {
    position: absolute;
    left: 4px;
    top: 10px;
    width: 24px;
    height: 2.5px;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff;
  }

  .popc-pin-head {
    position: absolute;
    left: 0;
    top: 6px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: radial-gradient(circle, #34d399 0%, #047857 100%);
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
