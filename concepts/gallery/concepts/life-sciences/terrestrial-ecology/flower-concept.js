const flowerStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A daisy through its day: eight petals unfurl from the bud, the
     bloom sways toward a passing light, then folds back to a bud for
     the night. A leaf breathes along with it. */
  .fl {
    width: 100px;
    height: 100px;
    position: relative;
  }

  /* Stem. */
  .fl-stem {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 3px;
    height: 44px;
    margin-left: -1.5px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.85), rgba(0, 110, 22, 0.8));
    transform-origin: 50% 100%;
    animation: fl-sway 6s ease-in-out infinite;
  }

  /* Leaf on the stem. */
  .fl-leaf {
    position: absolute;
    left: 50%;
    bottom: 24px;
    width: 18px;
    height: 10px;
    margin-left: 1px;
    border-radius: 0 100% 0 100%;
    background: linear-gradient(135deg, rgba(140, 255, 170, 0.7), rgba(0, 110, 22, 0.75));
    transform-origin: 0% 50%;
    animation: fl-leaf 6s ease-in-out infinite;
  }

  @keyframes fl-leaf {
    0%, 100% { transform: rotate(6deg) scale(0.9); }
    45% { transform: rotate(-4deg) scale(1); }
  }

  /* Bloom head: sways with the stem. */
  .fl-head {
    position: absolute;
    left: 50%;
    bottom: 48px;
    width: 0;
    height: 0;
    animation: fl-sway 6s ease-in-out infinite;
  }

  @keyframes fl-sway {
    0%, 100% { transform: rotate(-7deg); }
    45% { transform: rotate(8deg); }
  }

  /* Petals: eight, each unfurling by scaling out from the center. */
  .fl-petal {
    position: absolute;
    left: -5px;
    top: -22px;
    width: 10px;
    height: 22px;
    border-radius: 50% 50% 50% 50% / 70% 70% 30% 30%;
    background: linear-gradient(180deg, rgba(214, 255, 224, 0.9), rgba(0, 190, 38, 0.7));
    border: 1px solid rgba(140, 255, 170, 0.6);
    transform-origin: 50% 100%;
    animation: fl-unfurl 6s ease-in-out infinite;
  }

  .fl-petal.p1 { transform: rotate(0deg); }
  .fl-petal.p2 { transform: rotate(45deg); animation-delay: -0.1s; }
  .fl-petal.p3 { transform: rotate(90deg); animation-delay: -0.2s; }
  .fl-petal.p4 { transform: rotate(135deg); animation-delay: -0.3s; }
  .fl-petal.p5 { transform: rotate(180deg); animation-delay: -0.4s; }
  .fl-petal.p6 { transform: rotate(225deg); animation-delay: -0.5s; }
  .fl-petal.p7 { transform: rotate(270deg); animation-delay: -0.6s; }
  .fl-petal.p8 { transform: rotate(315deg); animation-delay: -0.7s; }

  .fl-petal { animation-name: fl-unfurl; }

  @keyframes fl-unfurl {
    0%, 100% { scale: 0.15 0.3; opacity: 0.5; }
    16% { scale: 1 1; opacity: 1; }
    70% { scale: 1 1; opacity: 1; }
    90% { scale: 0.15 0.3; opacity: 0.5; }
  }

  /* Center disc. */
  .fl-core {
    position: absolute;
    left: -8px;
    top: -8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #f2ffdd, #9ade5a 55%, rgba(0, 150, 30, 0.9));
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.6);
    animation: fl-core 6s ease-in-out infinite;
    z-index: 2;
  }

  @keyframes fl-core {
    0%, 100% { transform: scale(0.6); box-shadow: 0 0 4px rgba(0, 204, 0, 0.4); }
    30%, 70% { transform: scale(1); box-shadow: 0 0 12px rgba(0, 204, 0, 0.8); }
  }

  /* Pollen motes drifting off at full bloom. */
  .fl-pollen {
    position: absolute;
    left: 48px;
    top: 30px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(214, 255, 224, 0.9);
    opacity: 0;
    animation: fl-pollen 6s infinite;
  }

  .fl-pollen.m2 { animation-delay: 0.6s; left: 54px; }
  .fl-pollen.m3 { animation-delay: 1.2s; left: 44px; }

  @keyframes fl-pollen {
    0%, 34% { transform: translate(0, 0); opacity: 0; }
    42% { opacity: 0.9; }
    64% { transform: translate(12px, -14px); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Soil line. */
  .fl-soil {
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 6px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 110, 22, 0.7), transparent);
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

  /* v2: Blooming garden daisy with pure white ray petals, radiant golden yellow
     disc floret, emerald green stem/foliage, rich brown soil, and floating pollen. */
  .flc {
    width: 100px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #064e3b 0%, #022c22 60%, #01140e 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Stem */
  .flc-stem {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 3px;
    height: 44px;
    margin-left: -1.5px;
    background: linear-gradient(180deg, #4ade80, #15803d);
    border-radius: 1.5px;
    transform-origin: 50% 100%;
    animation: flc-sway 6s ease-in-out infinite;
  }

  /* Leaf */
  .flc-leaf {
    position: absolute;
    left: 50%;
    bottom: 24px;
    width: 18px;
    height: 10px;
    margin-left: 1px;
    border-radius: 0 100% 0 100%;
    background: linear-gradient(135deg, #86efac 0%, #22c55e 60%, #15803d 100%);
    border: 0.5px solid #bbf7d0;
    transform-origin: 0% 50%;
    animation: flc-leaf 6s ease-in-out infinite;
  }

  @keyframes flc-leaf {
    0%, 100% { transform: rotate(6deg) scale(0.9); }
    45% { transform: rotate(-4deg) scale(1); }
  }

  /* Bloom head */
  .flc-head {
    position: absolute;
    left: 50%;
    bottom: 48px;
    width: 0;
    height: 0;
    animation: flc-sway 6s ease-in-out infinite;
  }

  @keyframes flc-sway {
    0%, 100% { transform: rotate(-7deg); }
    45% { transform: rotate(8deg); }
  }

  /* Pure white ray petals */
  .flc-petal {
    position: absolute;
    left: -5px;
    top: -22px;
    width: 10px;
    height: 22px;
    border-radius: 50% 50% 50% 50% / 70% 70% 30% 30%;
    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 60%, #e2e8f0 100%);
    border: 1px solid rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
    transform-origin: 50% 100%;
    animation: flc-unfurl 6s ease-in-out infinite;
  }

  .flc-petal.p1 { transform: rotate(0deg); }
  .flc-petal.p2 { transform: rotate(45deg); animation-delay: -0.1s; }
  .flc-petal.p3 { transform: rotate(90deg); animation-delay: -0.2s; }
  .flc-petal.p4 { transform: rotate(135deg); animation-delay: -0.3s; }
  .flc-petal.p5 { transform: rotate(180deg); animation-delay: -0.4s; }
  .flc-petal.p6 { transform: rotate(225deg); animation-delay: -0.5s; }
  .flc-petal.p7 { transform: rotate(270deg); animation-delay: -0.6s; }
  .flc-petal.p8 { transform: rotate(315deg); animation-delay: -0.7s; }

  @keyframes flc-unfurl {
    0%, 100% { scale: 0.15 0.3; opacity: 0.5; }
    16% { scale: 1 1; opacity: 1; }
    70% { scale: 1 1; opacity: 1; }
    90% { scale: 0.15 0.3; opacity: 0.5; }
  }

  /* Golden yellow disc floret center */
  .flc-core {
    position: absolute;
    left: -8px;
    top: -8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #ffffff 0%, #fde047 40%, #eab308 75%, #ca8a04 100%);
    box-shadow: 0 0 12px rgba(250, 204, 21, 0.9);
    animation: flc-core 6s ease-in-out infinite;
    z-index: 2;
  }

  @keyframes flc-core {
    0%, 100% { transform: scale(0.6); box-shadow: 0 0 4px rgba(250, 204, 21, 0.4); }
    30%, 70% { transform: scale(1); box-shadow: 0 0 14px rgba(250, 204, 21, 0.95); }
  }

  /* Golden pollen motes */
  .flc-pollen {
    position: absolute;
    left: 48px;
    top: 30px;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: #fde047;
    box-shadow: 0 0 4px #facc15;
    opacity: 0;
    animation: flc-pollen 6s infinite;
  }

  .flc-pollen.m2 { animation-delay: 0.6s; left: 54px; }
  .flc-pollen.m3 { animation-delay: 1.2s; left: 44px; }

  @keyframes flc-pollen {
    0%, 34% { transform: translate(0, 0); opacity: 0; }
    42% { opacity: 1; }
    64% { transform: translate(12px, -14px); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Rich dark brown loam soil */
  .flc-soil {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 6px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, #78350f 30%, #451a03 50%, #78350f 70%, transparent);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  }
  `,
};

const flowerMarkup = {
  v1: `
      <div class="fl">
        <div class="fl-pollen"></div>
        <div class="fl-pollen m2"></div>
        <div class="fl-pollen m3"></div>
        <div class="fl-soil"></div>
        <div class="fl-stem"></div>
        <div class="fl-leaf"></div>
        <div class="fl-head">
          <div class="fl-petal p1"></div>
          <div class="fl-petal p2"></div>
          <div class="fl-petal p3"></div>
          <div class="fl-petal p4"></div>
          <div class="fl-petal p5"></div>
          <div class="fl-petal p6"></div>
          <div class="fl-petal p7"></div>
          <div class="fl-petal p8"></div>
          <div class="fl-core"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="flc">
        <div class="flc-pollen"></div>
        <div class="flc-pollen m2"></div>
        <div class="flc-pollen m3"></div>
        <div class="flc-soil"></div>
        <div class="flc-stem"></div>
        <div class="flc-leaf"></div>
        <div class="flc-head">
          <div class="flc-petal p1"></div>
          <div class="flc-petal p2"></div>
          <div class="flc-petal p3"></div>
          <div class="flc-petal p4"></div>
          <div class="flc-petal p5"></div>
          <div class="flc-petal p6"></div>
          <div class="flc-petal p7"></div>
          <div class="flc-petal p8"></div>
          <div class="flc-core"></div>
        </div>
      </div>
    `,
};

class ConceptFlower extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${flowerStyles[version] || flowerStyles.v2}</style>${flowerMarkup[version] || flowerMarkup.v2}`;
  }
}

if (!customElements.get('concept-flower')) {
  customElements.define('concept-flower', ConceptFlower);
}
