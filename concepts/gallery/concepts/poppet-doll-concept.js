const poppetDollStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A stitched burlap ritual poppet doll: an iron pin pierces the chest, triggering
     sympathetic somatic twitch recoil, an incandescent heart talisman pulse,
     and an expanding occult ward sigil flare. */
  .pop {
    width: 114px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  /* Expanding protective occult ward sigil flare */
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

  /* Doll figure carrier with sympathetic twitch recoil */
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

  /* Burlap doll head */
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

  /* Stitched X eyes */
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

  /* Twine neck tie */
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

  /* Stuffed burlap torso */
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

  /* Stitched pulsing heart emblem */
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

  /* Doll arms & legs */
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

  /* Piercing iron ritual pin with jeweled head */
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
`;

class ConceptPoppetDoll extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${poppetDollStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-poppet-doll')) {
  customElements.define('concept-poppet-doll', ConceptPoppetDoll);
}
