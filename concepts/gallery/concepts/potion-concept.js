const potionStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .potion {
    position: relative;
    width: 84px;
    height: 104px;
    display: flex;
    justify-content: center;
  }

  .potion-flask {
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 58px;
    height: 62px;
    margin-left: -29px;
    clip-path: polygon(38% 0, 62% 0, 62% 26%, 96% 78%, 88% 100%, 12% 100%, 4% 78%, 38% 26%);
    background: rgba(120, 255, 150, 0.07);
    border-radius: 4px;
  }

  .potion-flask::before {
    content: '';
    position: absolute;
    inset: 0;
    clip-path: inherit;
    border: 1px solid rgba(160, 255, 185, 0.5);
    box-sizing: border-box;
  }

  /* The liquid body, clipped to the flask silhouette. */
  .potion-liquid {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 34px;
    background: linear-gradient(180deg, rgba(100, 255, 140, 0.75) 0%, rgba(20, 160, 60, 0.85) 100%);
    box-shadow: 0 0 14px rgba(80, 255, 120, 0.5);
    animation: potion-surge 4.8s ease-in-out infinite;
  }

  /* Sloshing surface. */
  .potion-liquid::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -12px;
    right: -12px;
    height: 8px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.65);
    animation: potion-slosh 2.6s ease-in-out infinite;
  }

  .potion-bubble {
    position: absolute;
    bottom: 4px;
    border-radius: 50%;
    background: rgba(220, 255, 228, 0.7);
    border: 1px solid rgba(235, 255, 240, 0.5);
    opacity: 0;
    animation: potion-bubble 2.8s ease-in infinite;
  }

  .potion-bubble.b1 { left: 22px; width: 5px; height: 5px; animation-delay: 0s; }
  .potion-bubble.b2 { left: 32px; width: 3px; height: 3px; animation-delay: -0.9s; }
  .potion-bubble.b3 { left: 40px; width: 4px; height: 4px; animation-delay: -1.8s; }
  .potion-bubble.b4 { left: 27px; width: 2.5px; height: 2.5px; animation-delay: -2.3s; }

  .potion-cork {
    position: absolute;
    top: 16px;
    left: 50%;
    width: 16px;
    height: 8px;
    margin-left: -8px;
    border-radius: 3px 3px 1px 1px;
    background: linear-gradient(180deg, #1c4526, #0f2c16);
    border: 1px solid rgba(140, 255, 170, 0.4);
    box-sizing: border-box;
  }

  /* Vapor escaping around the cork. */
  .potion-vapor {
    position: absolute;
    top: 4px;
    width: 4px;
    height: 12px;
    border-radius: 50%;
    background: linear-gradient(180deg, transparent, rgba(160, 255, 185, 0.5));
    filter: blur(1.4px);
    opacity: 0;
    animation: potion-vapor 3.6s ease-out infinite;
  }

  .potion-vapor.v1 { left: 30px; animation-delay: 0s; }
  .potion-vapor.v2 { left: 48px; animation-delay: -1.8s; }

  .potion-glow {
    position: absolute;
    bottom: 6px;
    left: 50%;
    width: 62px;
    height: 14px;
    margin-left: -31px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(80, 255, 120, 0.35), transparent 70%);
    animation: potion-surge 4.8s ease-in-out infinite;
  }

  @keyframes potion-slosh {
    0%, 100% { transform: translateX(-3px) scaleY(1); }
    50% { transform: translateX(3px) scaleY(1.3); }
  }

  @keyframes potion-bubble {
    0% { opacity: 0; transform: translateY(0) scale(0.7); }
    18% { opacity: 0.95; }
    82% { opacity: 0.9; transform: translateY(-22px) scale(1); }
    100% { opacity: 0; transform: translateY(-27px) scale(1.4); }
  }

  @keyframes potion-surge {
    0%, 100% { filter: brightness(0.9); }
    22% { filter: brightness(1.35); }
    36% { filter: brightness(1); }
    64% { filter: brightness(1.2); }
  }

  @keyframes potion-vapor {
    0%, 12% { opacity: 0; transform: translateY(0) skewX(0deg); }
    26% { opacity: 0.85; }
    72% { opacity: 0.25; transform: translateY(-11px) skewX(9deg); }
    100% { opacity: 0; transform: translateY(-17px) skewX(-7deg); }
  }
`;

class ConceptPotion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${potionStyles}</style>
      <div class="potion">
        <div class="potion-glow"></div>
        <div class="potion-vapor v1"></div>
        <div class="potion-vapor v2"></div>
        <div class="potion-flask">
          <div class="potion-liquid"></div>
          <div class="potion-bubble b1"></div>
          <div class="potion-bubble b2"></div>
          <div class="potion-bubble b3"></div>
          <div class="potion-bubble b4"></div>
        </div>
        <div class="potion-cork"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-potion')) {
  customElements.define('concept-potion', ConceptPotion);
}
