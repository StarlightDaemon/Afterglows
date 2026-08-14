const grasshopperStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .gh {
    width: 116px;
    height: 80px;
    position: relative;
  }

  .gh-ground {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 14px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.45), transparent);
  }

  .gh-grass {
    position: absolute;
    left: 20px;
    bottom: 16px;
    width: 2px;
    height: 20px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.7), rgba(0, 110, 22, 0.7));
    transform-origin: 50% 100%;
    animation: gh-grass 3.5s ease-out infinite;
  }

  @keyframes gh-grass {
    0%, 18% { transform: rotate(0deg); }
    24% { transform: rotate(-16deg); }
    32% { transform: rotate(12deg); }
    40% { transform: rotate(-6deg); }
    48%, 100% { transform: rotate(0deg); }
  }

  .gh-hopper {
    position: absolute;
    left: 0;
    bottom: 16px;
    width: 34px;
    height: 22px;
    animation: gh-leap 3.5s ease-in-out infinite;
  }

  @keyframes gh-leap {
    0%, 16% { transform: translate(14px, 0) scaleY(1); }
    20% { transform: translate(14px, 2px) scaleY(0.8); }
    30% { transform: translate(38px, -34px) scaleY(1.05) rotate(-12deg); }
    42% { transform: translate(66px, -18px) rotate(6deg); }
    50% { transform: translate(78px, 0) scaleY(0.85); }
    56% { transform: translate(78px, 0) scaleY(1); }
    92%, 100% { transform: translate(14px, 0) scaleY(1); opacity: 1; }
  }

  .gh-hopper { animation-name: gh-leap, gh-vis; animation-duration: 3.5s, 3.5s; }

  @keyframes gh-vis {
    0%, 56% { opacity: 1; }
    60% { opacity: 0; }
    88% { opacity: 0; }
    92%, 100% { opacity: 1; }
  }

  .gh-body {
    position: absolute;
    left: 0;
    top: 6px;
    width: 22px;
    height: 8px;
    border-radius: 50% 40% 40% 50%;
    background: radial-gradient(ellipse at 35% 30%, rgba(190, 255, 205, 0.7), rgba(0, 150, 30, 0.8));
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  .gh-head {
    position: absolute;
    left: 20px;
    top: 4px;
    width: 9px;
    height: 9px;
    border-radius: 50% 60% 50% 40%;
    background: radial-gradient(circle at 40% 35%, #f2ffdd, #2a8a3e 70%);
  }

  .gh-head::after {
    content: '';
    position: absolute;
    right: 2px;
    top: 2px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #041a0a;
  }

  .gh-antenna {
    position: absolute;
    left: 26px;
    top: 2px;
    width: 12px;
    height: 1.5px;
    background: rgba(140, 255, 170, 0.8);
    transform-origin: 0% 50%;
    transform: rotate(-16deg);
  }

  .gh-hind {
    position: absolute;
    left: 2px;
    top: 8px;
    width: 16px;
    height: 12px;
    transform-origin: 90% 20%;
    animation: gh-hind 3.5s ease-in-out infinite;
  }

  .gh-femur {
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 5px;
    border-radius: 3px;
    background: linear-gradient(90deg, rgba(0, 150, 30, 0.85), rgba(140, 255, 170, 0.7));
    transform: rotate(-24deg);
    transform-origin: 100% 50%;
  }

  .gh-tibia {
    position: absolute;
    left: -6px;
    top: 4px;
    width: 16px;
    height: 2px;
    background: rgba(190, 255, 205, 0.8);
    transform-origin: 100% 50%;
    animation: gh-tibia 3.5s ease-in-out infinite;
  }

  @keyframes gh-hind {
    0%, 16% { transform: rotate(0deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(20deg); }
    50%, 100% { transform: rotate(0deg); }
  }

  @keyframes gh-tibia {
    0%, 16% { transform: rotate(40deg); }
    20% { transform: rotate(70deg); }
    30% { transform: rotate(-10deg); }
    50%, 100% { transform: rotate(40deg); }
  }

  .gh-frontleg {
    position: absolute;
    top: 12px;
    width: 6px;
    height: 8px;
    border-left: 1.5px solid rgba(0, 130, 26, 0.9);
    transform-origin: top center;
  }

  .gh-frontleg.f1 { left: 12px; transform: rotate(20deg); }
  .gh-frontleg.f2 { left: 18px; transform: rotate(30deg); }
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Chartreuse & emerald meadow grasshopper leaping in high ballistic trajectory,
     with powerful coiling hind leg and springing grass blade */
  .ghc {
    width: 116px;
    height: 80px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Meadow ground line */
  .ghc-ground {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 14px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #22c55e 20%, #84cc16 50%, transparent);
    box-shadow: 0 0 4px #22c55e;
  }

  /* Springing emerald grass blade */
  .ghc-grass {
    position: absolute;
    left: 20px;
    bottom: 16px;
    width: 2.5px;
    height: 20px;
    background: linear-gradient(180deg, #84cc16 0%, #15803d 100%);
    border-radius: 1px;
    box-shadow: 0 0 4px #84cc16;
    transform-origin: 50% 100%;
    animation: ghc-grass 3.5s ease-out infinite;
  }

  @keyframes ghc-grass {
    0%, 18% { transform: rotate(0deg); }
    24% { transform: rotate(-16deg); }
    32% { transform: rotate(12deg); }
    40% { transform: rotate(-6deg); }
    48%, 100% { transform: rotate(0deg); }
  }

  /* Grasshopper leap motion */
  .ghc-hopper {
    position: absolute;
    left: 0;
    bottom: 16px;
    width: 34px;
    height: 22px;
    animation: ghc-leap 3.5s ease-in-out infinite, ghc-vis 3.5s ease-in-out infinite;
  }

  @keyframes ghc-leap {
    0%, 16% { transform: translate(14px, 0) scaleY(1); }
    20% { transform: translate(14px, 2px) scaleY(0.8); }
    30% { transform: translate(38px, -34px) scaleY(1.05) rotate(-12deg); }
    42% { transform: translate(66px, -18px) rotate(6deg); }
    50% { transform: translate(78px, 0) scaleY(0.85); }
    56% { transform: translate(78px, 0) scaleY(1); }
    92%, 100% { transform: translate(14px, 0) scaleY(1); opacity: 1; }
  }

  @keyframes ghc-vis {
    0%, 56% { opacity: 1; }
    60% { opacity: 0; }
    88% { opacity: 0; }
    92%, 100% { opacity: 1; }
  }

  /* Chartreuse abdomen body */
  .ghc-body {
    position: absolute;
    left: 0;
    top: 6px;
    width: 22px;
    height: 8px;
    border-radius: 50% 40% 40% 50%;
    background: radial-gradient(ellipse at 35% 30%, #a3e635 0%, #65a30d 50%, #15803d 100%);
    border: 1px solid #84cc16;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
  }

  /* Head */
  .ghc-head {
    position: absolute;
    left: 20px;
    top: 4px;
    width: 9px;
    height: 9px;
    border-radius: 50% 60% 50% 40%;
    background: radial-gradient(circle at 40% 35%, #bef264 0%, #84cc16 70%);
    border: 1px solid #a3e635;
  }

  .ghc-head::after {
    content: '';
    position: absolute;
    right: 2px;
    top: 2px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #09090b;
    box-shadow: 0 0 2px #09090b;
  }

  /* Antenna */
  .ghc-antenna {
    position: absolute;
    left: 26px;
    top: 2px;
    width: 12px;
    height: 1.5px;
    background: #a3e635;
    transform-origin: 0% 50%;
    transform: rotate(-16deg);
  }

  /* Hind leg assembly */
  .ghc-hind {
    position: absolute;
    left: 2px;
    top: 8px;
    width: 16px;
    height: 12px;
    transform-origin: 90% 20%;
    animation: ghc-hind 3.5s ease-in-out infinite;
  }

  .ghc-femur {
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 5px;
    border-radius: 3px;
    background: linear-gradient(90deg, #15803d 0%, #84cc16 60%, #bef264 100%);
    border: 0.5px solid #a3e635;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
    transform: rotate(-24deg);
    transform-origin: 100% 50%;
  }

  .ghc-tibia {
    position: absolute;
    left: -6px;
    top: 4px;
    width: 16px;
    height: 2px;
    background: #bef264;
    transform-origin: 100% 50%;
    animation: ghc-tibia 3.5s ease-in-out infinite;
  }

  @keyframes ghc-hind {
    0%, 16% { transform: rotate(0deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(20deg); }
    50%, 100% { transform: rotate(0deg); }
  }

  @keyframes ghc-tibia {
    0%, 16% { transform: rotate(40deg); }
    20% { transform: rotate(70deg); }
    30% { transform: rotate(-10deg); }
    50%, 100% { transform: rotate(40deg); }
  }

  /* Front legs */
  .ghc-frontleg {
    position: absolute;
    top: 12px;
    width: 6px;
    height: 8px;
    border-left: 1.5px solid #65a30d;
    transform-origin: top center;
  }

  .ghc-frontleg.f1 { left: 12px; transform: rotate(20deg); }
  .ghc-frontleg.f2 { left: 18px; transform: rotate(30deg); }
  `,
};

const grasshopperMarkup = {
  v1: `
      <div class="gh">
        <div class="gh-ground"></div>
        <div class="gh-grass"></div>
        <div class="gh-hopper">
          <div class="gh-frontleg f1"></div>
          <div class="gh-frontleg f2"></div>
          <div class="gh-body"></div>
          <div class="gh-head"></div>
          <div class="gh-antenna"></div>
          <div class="gh-hind">
            <div class="gh-femur"></div>
            <div class="gh-tibia"></div>
          </div>
        </div>
      </div>
    `,
  v2: `
      <div class="ghc">
        <div class="ghc-ground"></div>
        <div class="ghc-grass"></div>
        <div class="ghc-hopper">
          <div class="ghc-frontleg f1"></div>
          <div class="ghc-frontleg f2"></div>
          <div class="ghc-body"></div>
          <div class="ghc-head"></div>
          <div class="ghc-antenna"></div>
          <div class="ghc-hind">
            <div class="ghc-femur"></div>
            <div class="ghc-tibia"></div>
          </div>
        </div>
      </div>
    `,
};

class ConceptGrasshopper extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${grasshopperStyles[version] || grasshopperStyles.v2}</style>${grasshopperMarkup[version] || grasshopperMarkup.v2}`;
  }
}

if (!customElements.get('concept-grasshopper')) {
  customElements.define('concept-grasshopper', ConceptGrasshopper);
}
