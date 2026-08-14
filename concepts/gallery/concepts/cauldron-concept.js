const cauldronStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cauldron-scene {
    position: relative;
    width: 84px;
    height: 104px;
    display: flex;
    justify-content: center;
  }

  .cauldron-pot {
    position: absolute;
    bottom: 14px;
    left: 50%;
    width: 60px;
    height: 44px;
    margin-left: -30px;
    border-radius: 8px 8px 30px 30px;
    background: linear-gradient(180deg, #0e2a14 0%, #081a0c 65%, #04100a 100%);
    border: 1px solid rgba(0, 204, 0, 0.35);
    box-shadow: inset 0 4px 6px rgba(160, 255, 185, 0.15);
    box-sizing: border-box;
  }

  .cauldron-rim {
    position: absolute;
    bottom: 52px;
    left: 50%;
    width: 66px;
    height: 10px;
    margin-left: -33px;
    border-radius: 5px;
    background: linear-gradient(180deg, #143a1e, #0a2010);
    border: 1px solid rgba(0, 204, 0, 0.4);
    box-sizing: border-box;
  }

  .cauldron-brew {
    position: absolute;
    bottom: 56px;
    left: 50%;
    width: 54px;
    height: 8px;
    margin-left: -27px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(140, 255, 170, 0.95) 0 30%, rgba(40, 200, 80, 0.85) 100%);
    box-shadow: 0 0 12px rgba(100, 255, 140, 0.7);
    animation: cauldron-brew 3.4s ease-in-out infinite;
  }

  .cauldron-leg {
    position: absolute;
    bottom: 6px;
    width: 6px;
    height: 12px;
    border-radius: 0 0 2px 2px;
    background: #0a2010;
    border: 1px solid rgba(0, 204, 0, 0.3);
    box-sizing: border-box;
  }

  .cauldron-leg.l1 { left: 20px; transform: skewX(-12deg); }
  .cauldron-leg.l2 { right: 20px; transform: skewX(12deg); }

  .cauldron-fire {
    position: absolute;
    bottom: 2px;
    width: 8px;
    height: 12px;
    border-radius: 50% 50% 30% 30% / 70% 70% 30% 30%;
    background: linear-gradient(180deg, rgba(200, 255, 212, 0.9), rgba(0, 204, 0, 0.4));
    transform-origin: bottom center;
    animation: cauldron-fire 0.6s ease-in-out infinite alternate;
  }

  .cauldron-fire.f1 { left: 30px; animation-delay: 0s; }
  .cauldron-fire.f2 { left: 39px; height: 15px; animation-delay: -0.25s; }
  .cauldron-fire.f3 { left: 48px; animation-delay: -0.45s; }

  .cauldron-burst {
    position: absolute;
    bottom: 60px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1.5px solid rgba(190, 255, 205, 0.85);
    background: transparent;
    opacity: 0;
    animation: cauldron-burst 2.4s ease-out infinite;
  }

  .cauldron-burst.u1 { left: 26px; animation-delay: 0s; }
  .cauldron-burst.u2 { left: 42px; animation-delay: -0.8s; }
  .cauldron-burst.u3 { left: 52px; animation-delay: -1.6s; }

  .cauldron-steam {
    position: absolute;
    bottom: 64px;
    width: 5px;
    height: 22px;
    border-radius: 50%;
    background: linear-gradient(180deg, transparent 0%, rgba(160, 255, 185, 0.45) 60%, rgba(120, 255, 150, 0.25) 100%);
    filter: blur(1.5px);
    opacity: 0;
    animation: cauldron-steam 3.8s ease-out infinite;
  }

  .cauldron-steam.s1 { left: 26px; animation-delay: 0s; }
  .cauldron-steam.s2 { left: 40px; height: 27px; animation-delay: -1.3s; }
  .cauldron-steam.s3 { left: 53px; animation-delay: -2.5s; }

  @keyframes cauldron-brew {
    0%, 100% { transform: scaleX(0.97); filter: brightness(0.9); }
    50% { transform: scaleX(1.04); filter: brightness(1.3); }
  }

  @keyframes cauldron-fire {
    0% { transform: scaleY(1) skewX(-4deg); opacity: 0.8; }
    100% { transform: scaleY(1.25) skewX(5deg); opacity: 1; }
  }

  @keyframes cauldron-burst {
    0% { opacity: 0; transform: translateY(2px) scale(0.4); }
    30% { opacity: 1; transform: translateY(-2px) scale(0.8); }
    55% { opacity: 0.9; transform: translateY(-5px) scale(1.15); }
    70%, 100% { opacity: 0; transform: translateY(-7px) scale(1.5); }
  }

  @keyframes cauldron-steam {
    0%, 8% { opacity: 0; transform: translateY(0) skewX(0deg) scaleY(0.6); }
    24% { opacity: 0.9; }
    62% { opacity: 0.4; transform: translateY(-18px) skewX(10deg) scaleY(1.1); }
    92%, 100% { opacity: 0; transform: translateY(-30px) skewX(-9deg) scaleY(1.2); }
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

  /* v2: Cast-iron witch's cauldron over burning firewood embers,
     bubbling chartreuse potion, and lavender magical steam curls */
  .cauldronc-scene {
    position: relative;
    width: 84px;
    height: 104px;
    display: flex;
    justify-content: center;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Cast iron pot */
  .cauldronc-pot {
    position: absolute;
    bottom: 14px;
    left: 50%;
    width: 60px;
    height: 44px;
    margin-left: -30px;
    border-radius: 8px 8px 30px 30px;
    background: linear-gradient(180deg, #3f3f46 0%, #18181b 65%, #09090b 100%);
    border: 1.5px solid #52525b;
    box-shadow: inset 0 4px 6px rgba(255, 255, 255, 0.1), 0 4px 10px rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
  }

  /* Pot rim */
  .cauldronc-rim {
    position: absolute;
    bottom: 52px;
    left: 50%;
    width: 66px;
    height: 10px;
    margin-left: -33px;
    border-radius: 5px;
    background: linear-gradient(180deg, #52525b, #27272a);
    border: 1.5px solid #71717a;
    box-sizing: border-box;
  }

  /* Electric chartreuse potion brew */
  .cauldronc-brew {
    position: absolute;
    bottom: 56px;
    left: 50%;
    width: 54px;
    height: 8px;
    margin-left: -27px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, #facc15 0 20%, #84cc16 50%, #4d7c0f 100%);
    box-shadow: 0 0 14px rgba(132, 204, 22, 0.9);
    animation: cauldronc-brew 3.4s ease-in-out infinite;
  }

  /* Tripod legs */
  .cauldronc-leg {
    position: absolute;
    bottom: 6px;
    width: 6px;
    height: 12px;
    border-radius: 0 0 2px 2px;
    background: #18181b;
    border: 1px solid #3f3f46;
    box-sizing: border-box;
  }

  .cauldronc-leg.l1 { left: 20px; transform: skewX(-12deg); }
  .cauldronc-leg.l2 { right: 20px; transform: skewX(12deg); }

  /* Blazing fire tongues */
  .cauldronc-fire {
    position: absolute;
    bottom: 2px;
    width: 8px;
    height: 12px;
    border-radius: 50% 50% 30% 30% / 70% 70% 30% 30%;
    background: linear-gradient(180deg, #fde047 0%, #ea580c 60%, #dc2626 100%);
    box-shadow: 0 0 8px #f97316;
    transform-origin: bottom center;
    animation: cauldronc-fire 0.6s ease-in-out infinite alternate;
  }

  .cauldronc-fire.f1 { left: 30px; animation-delay: 0s; }
  .cauldronc-fire.f2 { left: 39px; height: 15px; animation-delay: -0.25s; }
  .cauldronc-fire.f3 { left: 48px; animation-delay: -0.45s; }

  /* Popping chartreuse bubbles */
  .cauldronc-burst {
    position: absolute;
    bottom: 60px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1.5px solid #bef264;
    background: rgba(190, 242, 100, 0.4);
    box-shadow: 0 0 4px #84cc16;
    opacity: 0;
    animation: cauldronc-burst 2.4s ease-out infinite;
  }

  .cauldronc-burst.u1 { left: 26px; animation-delay: 0s; }
  .cauldronc-burst.u2 { left: 42px; animation-delay: -0.8s; }
  .cauldronc-burst.u3 { left: 52px; animation-delay: -1.6s; }

  /* Lavender magical steam curls */
  .cauldronc-steam {
    position: absolute;
    bottom: 64px;
    width: 5px;
    height: 22px;
    border-radius: 50%;
    background: linear-gradient(180deg, transparent 0%, rgba(192, 132, 252, 0.7) 60%, rgba(233, 213, 255, 0.4) 100%);
    filter: blur(1.5px);
    box-shadow: 0 0 6px rgba(168, 85, 247, 0.5);
    opacity: 0;
    animation: cauldronc-steam 3.8s ease-out infinite;
  }

  .cauldronc-steam.s1 { left: 26px; animation-delay: 0s; }
  .cauldronc-steam.s2 { left: 40px; height: 27px; animation-delay: -1.3s; }
  .cauldronc-steam.s3 { left: 53px; animation-delay: -2.5s; }

  @keyframes cauldronc-brew {
    0%, 100% { transform: scaleX(0.97); filter: brightness(0.95); }
    50% { transform: scaleX(1.04); filter: brightness(1.3); }
  }

  @keyframes cauldronc-fire {
    0% { transform: scaleY(1) skewX(-4deg); opacity: 0.85; }
    100% { transform: scaleY(1.3) skewX(5deg); opacity: 1; }
  }

  @keyframes cauldronc-burst {
    0% { opacity: 0; transform: translateY(2px) scale(0.4); }
    30% { opacity: 1; transform: translateY(-2px) scale(0.8); }
    55% { opacity: 0.9; transform: translateY(-5px) scale(1.15); }
    70%, 100% { opacity: 0; transform: translateY(-7px) scale(1.5); }
  }

  @keyframes cauldronc-steam {
    0%, 8% { opacity: 0; transform: translateY(0) skewX(0deg) scaleY(0.6); }
    24% { opacity: 0.95; }
    62% { opacity: 0.4; transform: translateY(-18px) skewX(10deg) scaleY(1.1); }
    92%, 100% { opacity: 0; transform: translateY(-30px) skewX(-9deg) scaleY(1.2); }
  }
  `,
};

const cauldronMarkup = {
  v1: `
      <div class="cauldron-scene">
        <div class="cauldron-steam s1"></div>
        <div class="cauldron-steam s2"></div>
        <div class="cauldron-steam s3"></div>
        <div class="cauldron-burst u1"></div>
        <div class="cauldron-burst u2"></div>
        <div class="cauldron-burst u3"></div>
        <div class="cauldron-brew"></div>
        <div class="cauldron-rim"></div>
        <div class="cauldron-pot"></div>
        <div class="cauldron-leg l1"></div>
        <div class="cauldron-leg l2"></div>
        <div class="cauldron-fire f1"></div>
        <div class="cauldron-fire f2"></div>
        <div class="cauldron-fire f3"></div>
      </div>
    `,
  v2: `
      <div class="cauldronc-scene">
        <div class="cauldronc-steam s1"></div>
        <div class="cauldronc-steam s2"></div>
        <div class="cauldronc-steam s3"></div>
        <div class="cauldronc-burst u1"></div>
        <div class="cauldronc-burst u2"></div>
        <div class="cauldronc-burst u3"></div>
        <div class="cauldronc-brew"></div>
        <div class="cauldronc-rim"></div>
        <div class="cauldronc-pot"></div>
        <div class="cauldronc-leg l1"></div>
        <div class="cauldronc-leg l2"></div>
        <div class="cauldronc-fire f1"></div>
        <div class="cauldronc-fire f2"></div>
        <div class="cauldronc-fire f3"></div>
      </div>
    `,
};

class ConceptCauldron extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${cauldronStyles[version] || cauldronStyles.v2}</style>${cauldronMarkup[version] || cauldronMarkup.v2}`;
  }
}

if (!customElements.get('concept-cauldron')) {
  customElements.define('concept-cauldron', ConceptCauldron);
}
