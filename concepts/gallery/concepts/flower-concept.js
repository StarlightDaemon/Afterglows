const flowerStyles = `
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

  /* Each petal keeps its rotation (set inline via nth) while the
     scale opens and closes. We fold by scaling toward the hub. */
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
`;

class ConceptFlower extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${flowerStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-flower')) {
  customElements.define('concept-flower', ConceptFlower);
}
