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
    animation: potion-swirl 1.6s ease-in-out infinite alternate;
  }

  @keyframes potion-swirl {
    0% { transform: translateY(-4px) rotate(-10deg); }
    100% { transform: translateY(4px) rotate(10deg); }
  }

  .potion-flask {
    position: absolute;
    bottom: 10px;
    left: 50%;
    width: 58px;
    height: 62px;
    margin-left: -29px;
    clip-path: polygon(38% 0, 62% 0, 62% 26%, 96% 78%, 88% 100%, 12% 100%, 4% 78%, 38% 26%);
    background: rgba(120, 255, 150, 0.12);
    border-radius: 4px;
  }

  .potion-flask::before {
    content: '';
    position: absolute;
    inset: 0;
    clip-path: inherit;
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.4);
    box-sizing: border-box;
  }

  .potion-liquid {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 36px;
    background: linear-gradient(180deg, rgba(100, 255, 140, 0.9) 0%, rgba(20, 160, 60, 0.95) 100%);
    box-shadow: 0 0 14px rgba(80, 255, 120, 0.6);
  }

  .potion-liquid::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -12px;
    right: -12px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00ff66;
    animation: potion-slosh 1.2s ease-in-out infinite alternate;
  }

  .potion-bubble {
    position: absolute;
    bottom: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
    animation: potion-bubble 1.0s linear infinite;
  }

  .potion-bubble.b1 { left: 16px; width: 6px; height: 6px; animation-delay: 0s; }
  .potion-bubble.b2 { left: 26px; width: 4px; height: 4px; animation-delay: -0.25s; }
  .potion-bubble.b3 { left: 36px; width: 5px; height: 5px; animation-delay: -0.5s; }
  .potion-bubble.b4 { left: 44px; width: 4px; height: 4px; animation-delay: -0.75s; }

  .potion-cork {
    position: absolute;
    top: 16px;
    left: 50%;
    width: 16px;
    height: 8px;
    margin-left: -8px;
    border-radius: 3px 3px 1px 1px;
    background: linear-gradient(180deg, #ffffff, #0f2c16);
    border: 1.5px solid #00ff66;
    box-sizing: border-box;
  }

  .potion-vapor {
    position: absolute;
    top: 4px;
    width: 6px;
    height: 14px;
    border-radius: 50%;
    background: linear-gradient(180deg, transparent, #ffffff);
    box-shadow: 0 0 8px #00ff66;
    filter: blur(1px);
    animation: potion-vapor 1.2s linear infinite;
  }

  .potion-vapor.v1 { left: 30px; animation-delay: 0s; }
  .potion-vapor.v2 { left: 48px; animation-delay: -0.6s; }

  .potion-glow {
    position: absolute;
    bottom: 6px;
    left: 50%;
    width: 62px;
    height: 14px;
    margin-left: -31px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(80, 255, 120, 0.5), transparent 70%);
  }

  @keyframes potion-slosh {
    0% { transform: translateX(-6px) skewY(-10deg); }
    100% { transform: translateX(6px) skewY(10deg); }
  }

  @keyframes potion-bubble {
    0% { transform: translateY(0) scale(0.6); opacity: 1; }
    100% { transform: translateY(-36px) scale(1.3); opacity: 0; }
  }

  @keyframes potion-vapor {
    0% { transform: translateY(0) scale(0.8); opacity: 1; }
    100% { transform: translateY(-24px) scale(1.4); opacity: 0; }
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

  /* v2: Arcane alchemical potion flask with swirling amethyst liquid */
  .potionc {
    position: relative;
    width: 84px;
    height: 104px;
    display: flex;
    justify-content: center;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
    animation: potionc-swirl 1.6s ease-in-out infinite alternate;
  }

  @keyframes potionc-swirl {
    0% { transform: translateY(-4px) rotate(-10deg); }
    100% { transform: translateY(4px) rotate(10deg); }
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
    background: rgba(56, 189, 248, 0.12);
    border-radius: 4px;
    box-shadow: inset 0 0 10px rgba(56, 189, 248, 0.4);
  }

  .potionc-flask::before {
    content: '';
    position: absolute;
    inset: 0;
    clip-path: inherit;
    border: 1.5px solid #38bdf8;
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
    box-sizing: border-box;
  }

  /* Swirling bioluminescent amethyst elixir */
  .potionc-liquid {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 36px;
    background: linear-gradient(180deg, #c084fc 0%, #9333ea 50%, #581c87 100%);
    box-shadow: 0 0 16px rgba(168, 85, 247, 0.9);
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
    background: #ffffff;
    box-shadow: 0 0 10px #c084fc;
    animation: potionc-slosh 1.2s ease-in-out infinite alternate;
  }

  /* Rising chromatic bubbles */
  .potionc-bubble {
    position: absolute;
    bottom: 4px;
    border-radius: 50%;
    animation: potionc-bubble 1.0s linear infinite;
  }

  .potionc-bubble.b1 { left: 16px; width: 6px; height: 6px; background: #fde047; box-shadow: 0 0 6px #fde047; animation-delay: 0s; }
  .potionc-bubble.b2 { left: 26px; width: 4px; height: 4px; background: #38bdf8; box-shadow: 0 0 6px #38bdf8; animation-delay: -0.25s; }
  .potionc-bubble.b3 { left: 36px; width: 5px; height: 5px; background: #f472b6; box-shadow: 0 0 6px #f472b6; animation-delay: -0.5s; }
  .potionc-bubble.b4 { left: 44px; width: 4px; height: 4px; background: #38bdf8; box-shadow: 0 0 6px #38bdf8; animation-delay: -0.75s; }

  /* Natural brown cork */
  .potionc-cork {
    position: absolute;
    top: 16px;
    left: 50%;
    width: 16px;
    height: 8px;
    margin-left: -8px;
    border-radius: 3px 3px 1px 1px;
    background: linear-gradient(180deg, #f59e0b 0%, #78350f 100%);
    border: 1.5px solid #d97706;
    box-sizing: border-box;
  }

  /* Lavender magical vapor */
  .potionc-vapor {
    position: absolute;
    top: 4px;
    width: 6px;
    height: 14px;
    border-radius: 50%;
    background: linear-gradient(180deg, transparent, #c084fc);
    box-shadow: 0 0 10px #c084fc;
    filter: blur(1px);
    animation: potionc-vapor 1.2s linear infinite;
  }

  .potionc-vapor.v1 { left: 30px; animation-delay: 0s; }
  .potionc-vapor.v2 { left: 48px; animation-delay: -0.6s; }

  /* Base ambient glow */
  .potionc-glow {
    position: absolute;
    bottom: 6px;
    left: 50%;
    width: 62px;
    height: 14px;
    margin-left: -31px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(168, 85, 247, 0.7), transparent 70%);
  }

  @keyframes potionc-slosh {
    0% { transform: translateX(-6px) skewY(-10deg); }
    100% { transform: translateX(6px) skewY(10deg); }
  }

  @keyframes potionc-bubble {
    0% { transform: translateY(0) scale(0.6); opacity: 1; }
    100% { transform: translateY(-36px) scale(1.3); opacity: 0; }
  }

  @keyframes potionc-vapor {
    0% { transform: translateY(0) scale(0.8); opacity: 1; }
    100% { transform: translateY(-24px) scale(1.4); opacity: 0; }
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
