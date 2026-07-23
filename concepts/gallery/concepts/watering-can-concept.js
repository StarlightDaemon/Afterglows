const wateringCanStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A watering can tips and pours: it rocks forward, a fan of drops
     showers from the rose onto a seedling that perks up under the
     water, then it rights itself. 5s loop. */
  .wc {
    width: 112px;
    height: 92px;
    position: relative;
  }

  /* The can pivots about its base, tipping toward the seedling. */
  .wc-can {
    position: absolute;
    left: 6px;
    top: 14px;
    width: 52px;
    height: 44px;
    transform-origin: 60% 90%;
    animation: wc-tip 5s ease-in-out infinite;
  }

  @keyframes wc-tip {
    0%, 16% { transform: rotate(0deg); }
    34% { transform: rotate(32deg); }
    64% { transform: rotate(34deg); }
    82%, 100% { transform: rotate(0deg); }
  }

  /* Body. */
  .wc-body {
    position: absolute;
    left: 8px;
    bottom: 0;
    width: 30px;
    height: 30px;
    border-radius: 6px 6px 8px 8px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.6), rgba(0, 70, 14, 0.85));
    border: 2px solid var(--accent, #00cc00);
  }

  /* Handle arcing over the top. */
  .wc-handle {
    position: absolute;
    left: 12px;
    bottom: 22px;
    width: 22px;
    height: 14px;
    border: 2px solid rgba(140, 255, 170, 0.85);
    border-bottom: none;
    border-radius: 12px 12px 0 0;
  }

  /* Spout reaching up-right to the rose, toward the seedling. */
  .wc-spout {
    position: absolute;
    left: 36px;
    bottom: 14px;
    width: 16px;
    height: 5px;
    background: rgba(0, 130, 26, 0.9);
    border: 1px solid rgba(0, 204, 0, 0.6);
    transform: rotate(-24deg);
    transform-origin: 0% 50%;
  }

  /* Rose (sprinkler head) at the spout tip. */
  .wc-rose {
    position: absolute;
    left: 48px;
    bottom: 18px;
    width: 10px;
    height: 8px;
    border-radius: 3px;
    background: rgba(140, 255, 170, 0.9);
  }

  /* Water fan: drops falling from the rose, only while tipped. */
  .wc-drop {
    position: absolute;
    width: 2px;
    height: 7px;
    border-radius: 0 0 50% 50%;
    background: linear-gradient(180deg, transparent, rgba(190, 255, 205, 0.9));
    opacity: 0;
    animation: wc-drop 0.8s linear infinite, wc-gate 5s steps(1) infinite;
  }

  .wc-drop.d1 { left: 58px; top: 46px; animation-delay: 0s, 0s; }
  .wc-drop.d2 { left: 65px; top: 46px; animation-delay: -0.25s, 0s; }
  .wc-drop.d3 { left: 72px; top: 46px; animation-delay: -0.5s, 0s; }
  .wc-drop.d4 { left: 62px; top: 46px; animation-delay: -0.15s, 0s; }
  .wc-drop.d5 { left: 68px; top: 46px; animation-delay: -0.4s, 0s; }

  @keyframes wc-drop {
    0% { transform: translateY(0); opacity: 0; }
    20% { opacity: 1; }
    100% { transform: translateY(30px); opacity: 0.4; }
  }

  @keyframes wc-gate {
    0%, 30% { visibility: hidden; }
    34%, 66% { visibility: visible; }
    70%, 100% { visibility: hidden; }
  }

  /* Seedling that perks up under the shower. */
  .wc-plant {
    position: absolute;
    right: 26px;
    bottom: 10px;
    width: 4px;
    height: 22px;
    margin-left: -2px;
    transform-origin: 50% 100%;
    animation: wc-plant 5s ease-in-out infinite;
  }

  .wc-plant-stem {
    position: absolute;
    left: 1px;
    bottom: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.85), rgba(0, 110, 22, 0.8));
  }

  .wc-leaf {
    position: absolute;
    width: 12px;
    height: 7px;
    border-radius: 60% 60% 60% 60% / 90% 90% 40% 40%;
    background: radial-gradient(ellipse at 40% 30%, rgba(140, 255, 170, 0.85), rgba(0, 150, 30, 0.8));
  }

  .wc-leaf.l1 { left: 2px; bottom: 14px; transform-origin: 0 50%; animation: wc-leaf-r 5s ease-in-out infinite; }
  .wc-leaf.l2 { right: 2px; bottom: 8px; transform: scaleX(-1); transform-origin: 100% 50%; animation: wc-leaf-l 5s ease-in-out infinite; }

  @keyframes wc-plant {
    0%, 30% { transform: rotate(6deg) scaleY(0.9); }
    50% { transform: rotate(0deg) scaleY(1.02); }
    70% { transform: rotate(-3deg) scaleY(1.05); }
    90%, 100% { transform: rotate(6deg) scaleY(0.95); }
  }

  @keyframes wc-leaf-r {
    0%, 30% { transform: rotate(20deg); }
    60% { transform: rotate(-6deg); }
    100% { transform: rotate(20deg); }
  }

  @keyframes wc-leaf-l {
    0%, 30% { transform: scaleX(-1) rotate(20deg); }
    60% { transform: scaleX(-1) rotate(-6deg); }
    100% { transform: scaleX(-1) rotate(20deg); }
  }

  /* Soil mound. */
  .wc-soil {
    position: absolute;
    right: 10px;
    bottom: 4px;
    width: 30px;
    height: 8px;
    border-radius: 50% 50% 0 0;
    background: linear-gradient(180deg, rgba(0, 110, 22, 0.7), rgba(0, 60, 12, 0.8));
  }
`;

class ConceptWateringCan extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${wateringCanStyles}</style>
      <div class="wc">
        <div class="wc-soil"></div>
        <div class="wc-plant">
          <div class="wc-plant-stem"></div>
          <div class="wc-leaf l1"></div>
          <div class="wc-leaf l2"></div>
        </div>
        <div class="wc-drop d1"></div>
        <div class="wc-drop d2"></div>
        <div class="wc-drop d3"></div>
        <div class="wc-drop d4"></div>
        <div class="wc-drop d5"></div>
        <div class="wc-can">
          <div class="wc-body"></div>
          <div class="wc-handle"></div>
          <div class="wc-spout"></div>
          <div class="wc-rose"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-watering-can')) {
  customElements.define('concept-watering-can', ConceptWateringCan);
}
