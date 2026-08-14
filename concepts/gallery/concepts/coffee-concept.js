const coffeeStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .coffee {
    width: 104px;
    height: 96px;
    position: relative;
  }

  .coffee-cup {
    position: absolute;
    left: 26px;
    bottom: 20px;
    width: 48px;
    height: 34px;
    border: 2px solid var(--accent, #00cc00);
    border-top-width: 1px;
    border-radius: 4px 4px 20px 20px;
    background: linear-gradient(180deg, rgba(0, 70, 14, 0.5), rgba(0, 30, 6, 0.75));
  }

  .coffee-surface {
    position: absolute;
    left: 28px;
    bottom: 48px;
    width: 44px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 50% 50%, rgba(0, 150, 30, 0.7), rgba(0, 60, 12, 0.9));
    overflow: hidden;
  }

  .coffee-sheen {
    position: absolute;
    top: 1px;
    left: 6px;
    width: 14px;
    height: 3px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.55);
    filter: blur(1px);
    animation: coffee-sheen 6s ease-in-out infinite;
  }

  @keyframes coffee-sheen {
    0%, 100% { transform: translateX(0); opacity: 0.5; }
    50% { transform: translateX(18px); opacity: 0.9; }
  }

  .coffee-handle {
    position: absolute;
    left: 72px;
    bottom: 30px;
    width: 14px;
    height: 16px;
    border: 2px solid rgba(140, 255, 170, 0.85);
    border-left: none;
    border-radius: 0 10px 10px 0;
  }

  .coffee-saucer {
    position: absolute;
    left: 16px;
    bottom: 12px;
    width: 68px;
    height: 7px;
    border-radius: 50%;
    border: 1px solid rgba(0, 204, 0, 0.6);
    background: rgba(0, 45, 9, 0.55);
  }

  .coffee-steam {
    position: absolute;
    bottom: 56px;
    width: 3px;
    height: 26px;
    border-radius: 2px;
    background: linear-gradient(180deg,
      transparent,
      rgba(190, 255, 205, 0.5) 35%,
      rgba(190, 255, 205, 0.25) 70%,
      transparent);
    filter: blur(0.6px);
    animation: coffee-steam ease-in-out infinite;
  }

  .coffee-steam.s1 { left: 40px; animation-duration: 3.2s; }
  .coffee-steam.s2 { left: 50px; animation-duration: 4.1s; animation-delay: -1.3s; height: 32px; }
  .coffee-steam.s3 { left: 60px; animation-duration: 3.6s; animation-delay: -2.2s; height: 22px; }

  @keyframes coffee-steam {
    0%, 100% { transform: translateY(0) skewX(0deg) scaleY(1); opacity: 0.4; }
    25% { transform: translateY(-4px) skewX(7deg) scaleY(1.08); opacity: 0.85; }
    50% { transform: translateY(-7px) skewX(-6deg) scaleY(1.16); opacity: 0.65; }
    75% { transform: translateY(-4px) skewX(5deg) scaleY(1.06); opacity: 0.85; }
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

  /* v2: Terracotta ceramic coffee cup with roasted dark espresso, golden hazelnut crema, and aromatic steam */
  .coffeec {
    width: 104px;
    height: 96px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Terracotta ceramic cup */
  .coffeec-cup {
    position: absolute;
    left: 26px;
    bottom: 20px;
    width: 48px;
    height: 34px;
    border: 2px solid #ea580c;
    border-top-width: 1px;
    border-radius: 4px 4px 20px 20px;
    background: linear-gradient(180deg, #c2410c 0%, #7c2d12 100%);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.2);
  }

  /* Liquid espresso surface */
  .coffeec-surface {
    position: absolute;
    left: 28px;
    bottom: 48px;
    width: 44px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 40% 50%, #d97706 0%, #78350f 45%, #451a03 100%);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.8);
    overflow: hidden;
  }

  /* Crema sheen reflection */
  .coffeec-sheen {
    position: absolute;
    top: 1px;
    left: 6px;
    width: 14px;
    height: 3px;
    border-radius: 50%;
    background: rgba(254, 240, 138, 0.7);
    filter: blur(0.8px);
    animation: coffeec-sheen 6s ease-in-out infinite;
  }

  @keyframes coffeec-sheen {
    0%, 100% { transform: translateX(0); opacity: 0.5; }
    50% { transform: translateX(18px); opacity: 0.9; }
  }

  /* Ceramic cup handle */
  .coffeec-handle {
    position: absolute;
    left: 72px;
    bottom: 30px;
    width: 14px;
    height: 16px;
    border: 2.5px solid #ea580c;
    border-left: none;
    border-radius: 0 10px 10px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  }

  /* Ceramic saucer */
  .coffeec-saucer {
    position: absolute;
    left: 16px;
    bottom: 12px;
    width: 68px;
    height: 7px;
    border-radius: 50%;
    border: 1.5px solid #ea580c;
    background: linear-gradient(180deg, #9a3412, #7c2d12);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  }

  /* Aromatic steam ribbons */
  .coffeec-steam {
    position: absolute;
    bottom: 56px;
    width: 3px;
    height: 26px;
    border-radius: 2px;
    background: linear-gradient(180deg,
      transparent,
      rgba(255, 255, 255, 0.4) 35%,
      rgba(255, 255, 255, 0.15) 70%,
      transparent);
    filter: blur(0.8px);
    animation: coffeec-steam ease-in-out infinite;
  }

  .coffeec-steam.s1 { left: 40px; animation-duration: 3.2s; }
  .coffeec-steam.s2 { left: 50px; animation-duration: 4.1s; animation-delay: -1.3s; height: 32px; }
  .coffeec-steam.s3 { left: 60px; animation-duration: 3.6s; animation-delay: -2.2s; height: 22px; }

  @keyframes coffeec-steam {
    0%, 100% { transform: translateY(0) skewX(0deg) scaleY(1); opacity: 0.3; }
    25% { transform: translateY(-4px) skewX(7deg) scaleY(1.08); opacity: 0.8; }
    50% { transform: translateY(-7px) skewX(-6deg) scaleY(1.16); opacity: 0.55; }
    75% { transform: translateY(-4px) skewX(5deg) scaleY(1.06); opacity: 0.8; }
  }
  `,
};

const coffeeMarkup = {
  v1: `
      <div class="coffee">
        <div class="coffee-steam s1"></div>
        <div class="coffee-steam s2"></div>
        <div class="coffee-steam s3"></div>
        <div class="coffee-saucer"></div>
        <div class="coffee-cup"></div>
        <div class="coffee-surface"><div class="coffee-sheen"></div></div>
        <div class="coffee-handle"></div>
      </div>
    `,
  v2: `
      <div class="coffeec">
        <div class="coffeec-steam s1"></div>
        <div class="coffeec-steam s2"></div>
        <div class="coffeec-steam s3"></div>
        <div class="coffeec-saucer"></div>
        <div class="coffeec-cup"></div>
        <div class="coffeec-surface"><div class="coffeec-sheen"></div></div>
        <div class="coffeec-handle"></div>
      </div>
    `,
};

class ConceptCoffee extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${coffeeStyles[version] || coffeeStyles.v2}</style>${coffeeMarkup[version] || coffeeMarkup.v2}`;
  }
}

if (!customElements.get('concept-coffee')) {
  customElements.define('concept-coffee', ConceptCoffee);
}
