const potionStyles = {
  v1: `
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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Arcane alchemical potion flask with swirling amethyst liquid,
     gold & cyan effervescent bubbles, natural cork, and lavender magical vapor */
  .potionc {
    position: relative;
    width: 84px;
    height: 104px;
    display: flex;
    justify-content: center;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Glass flask silhouette */
  .potionc-flask {
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 58px;
    height: 62px;
    margin-left: -29px;
    clip-path: polygon(38% 0, 62% 0, 62% 26%, 96% 78%, 88% 100%, 12% 100%, 4% 78%, 38% 26%);
    background: rgba(56, 189, 248, 0.08);
    border-radius: 4px;
    box-shadow: inset 0 0 10px rgba(56, 189, 248, 0.3);
  }

  .potionc-flask::before {
    content: '';
    position: absolute;
    inset: 0;
    clip-path: inherit;
    border: 1.5px solid rgba(125, 211, 252, 0.7);
    box-sizing: border-box;
  }

  /* Swirling bioluminescent amethyst elixir */
  .potionc-liquid {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 34px;
    background: linear-gradient(180deg, #c084fc 0%, #9333ea 50%, #581c87 100%);
    box-shadow: 0 0 16px rgba(168, 85, 247, 0.8);
    animation: potionc-surge 4.8s ease-in-out infinite;
  }

  /* Sloshing surface meniscus */
  .potionc-liquid::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -12px;
    right: -12px;
    height: 8px;
    border-radius: 50%;
    background: #e9d5ff;
    box-shadow: 0 0 8px #d8b4fe;
    animation: potionc-slosh 2.6s ease-in-out infinite;
  }

  /* Rising chromatic bubbles */
  .potionc-bubble {
    position: absolute;
    bottom: 4px;
    border-radius: 50%;
    background: #fde047;
    border: 1px solid #fef08a;
    box-shadow: 0 0 4px #facc15;
    opacity: 0;
    animation: potionc-bubble 2.8s ease-in infinite;
  }

  .potionc-bubble.b1 { left: 22px; width: 5px; height: 5px; animation-delay: 0s; }
  .potionc-bubble.b2 { left: 32px; width: 3px; height: 3px; background: #38bdf8; border-color: #7dd3fc; box-shadow: 0 0 4px #38bdf8; animation-delay: -0.9s; }
  .potionc-bubble.b3 { left: 40px; width: 4px; height: 4px; animation-delay: -1.8s; }
  .potionc-bubble.b4 { left: 27px; width: 2.5px; height: 2.5px; background: #38bdf8; border-color: #7dd3fc; box-shadow: 0 0 4px #38bdf8; animation-delay: -2.3s; }

  /* Natural brown cork */
  .potionc-cork {
    position: absolute;
    top: 16px;
    left: 50%;
    width: 16px;
    height: 8px;
    margin-left: -8px;
    border-radius: 3px 3px 1px 1px;
    background: linear-gradient(180deg, #9a3412 0%, #451a03 100%);
    border: 1px solid #b45309;
    box-sizing: border-box;
  }

  /* Lavender magical vapor */
  .potionc-vapor {
    position: absolute;
    top: 4px;
    width: 5px;
    height: 12px;
    border-radius: 50%;
    background: linear-gradient(180deg, transparent, rgba(233, 213, 255, 0.9));
    filter: blur(1.5px);
    box-shadow: 0 0 6px rgba(192, 132, 252, 0.8);
    opacity: 0;
    animation: potionc-vapor 3.6s ease-out infinite;
  }

  .potionc-vapor.v1 { left: 30px; animation-delay: 0s; }
  .potionc-vapor.v2 { left: 48px; animation-delay: -1.8s; }

  /* Base ambient glow */
  .potionc-glow {
    position: absolute;
    bottom: 6px;
    left: 50%;
    width: 62px;
    height: 14px;
    margin-left: -31px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6), transparent 70%);
    animation: potionc-surge 4.8s ease-in-out infinite;
  }

  @keyframes potionc-slosh {
    0%, 100% { transform: translateX(-3px) scaleY(1); }
    50% { transform: translateX(3px) scaleY(1.3); }
  }

  @keyframes potionc-bubble {
    0% { opacity: 0; transform: translateY(0) scale(0.7); }
    18% { opacity: 0.95; }
    82% { opacity: 0.9; transform: translateY(-22px) scale(1); }
    100% { opacity: 0; transform: translateY(-27px) scale(1.4); }
  }

  @keyframes potionc-surge {
    0%, 100% { filter: brightness(0.9); }
    22% { filter: brightness(1.35); }
    36% { filter: brightness(1); }
    64% { filter: brightness(1.25); }
  }

  @keyframes potionc-vapor {
    0%, 12% { opacity: 0; transform: translateY(0) skewX(0deg); }
    26% { opacity: 0.95; }
    72% { opacity: 0.3; transform: translateY(-11px) skewX(9deg); }
    100% { opacity: 0; transform: translateY(-17px) skewX(-7deg); }
  }
  `,
};

const potionMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="potionc">
        <div class="potionc-glow"></div>
        <div class="potionc-vapor v1"></div>
        <div class="potionc-vapor v2"></div>
        <div class="potionc-flask">
          <div class="potionc-liquid"></div>
          <div class="potionc-bubble b1"></div>
          <div class="potionc-bubble b2"></div>
          <div class="potionc-bubble b3"></div>
          <div class="potionc-bubble b4"></div>
        </div>
        <div class="potionc-cork"></div>
      </div>
    `,
};

class ConceptPotion extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${potionStyles[version] || potionStyles.v2}</style>${potionMarkup[version] || potionMarkup.v2}`;
  }
}

if (!customElements.get('concept-potion')) {
  customElements.define('concept-potion', ConceptPotion);
}
