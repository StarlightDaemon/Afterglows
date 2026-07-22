const cauldronStyles = `
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

  /* The brew surface, peeking above the rim. */
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

  /* Fire tongues under the pot. */
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

  /* Bubbles bursting at the surface. */
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

  /* Steam curls rising and swaying. */
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
`;

class ConceptCauldron extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cauldronStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-cauldron')) {
  customElements.define('concept-cauldron', ConceptCauldron);
}
