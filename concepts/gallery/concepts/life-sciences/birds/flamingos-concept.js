const flamingosStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .flam {
    width: 112px;
    height: 100px;
    position: relative;
  }

  .flam-water {
    position: absolute;
    left: 8px;
    bottom: 10px;
    width: 96px;
    height: 6px;
    border-top: 1.5px solid var(--accent, #00cc00);
  }

  .flam-ripple {
    position: absolute;
    left: 40px;
    bottom: 8px;
    width: 36px;
    height: 8px;
    border-radius: 50%;
    border: 1.5px solid rgba(140, 255, 170, 0.9);
    animation: flam-ripple-wash 2.4s ease-out infinite;
    pointer-events: none;
  }

  @keyframes flam-ripple-wash {
    0% { opacity: 0; transform: scale(0.2); }
    30% { opacity: 1; transform: scale(0.8); }
    70% { opacity: 0.5; transform: scale(1.8); }
    100% { opacity: 0; transform: scale(2.4); }
  }

  .flam-leg-stand {
    position: absolute;
    left: 56px;
    bottom: 12px;
    width: 2px;
    height: 46px;
    background: rgba(140, 255, 170, 0.9);
    box-shadow: 0 0 4px rgba(0, 204, 0, 0.6);
  }

  .flam-leg-tuck {
    position: absolute;
    left: 50px;
    top: 44px;
    width: 14px;
    height: 16px;
    border-bottom: 2px solid rgba(140, 255, 170, 0.85);
    border-left: 2px solid rgba(140, 255, 170, 0.85);
    border-radius: 0 0 0 6px;
    transform: rotate(20deg);
  }

  .flam-body-rig {
    position: absolute;
    left: 36px;
    top: 10px;
    width: 50px;
    height: 52px;
    transform-origin: 21px 48px;
    animation: flam-balance 2.4s ease-in-out infinite alternate;
  }

  @keyframes flam-balance {
    0% { transform: rotate(-12deg) translateY(-2px); }
    100% { transform: rotate(12deg) translateY(2px); }
  }

  .flam-torso {
    position: absolute;
    left: 10px;
    top: 26px;
    width: 28px;
    height: 20px;
    border-radius: 50% 60% 40% 50%;
    background: radial-gradient(circle at 40% 40%, rgba(0, 160, 35, 0.9), rgba(0, 40, 8, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
  }

  .flam-tail {
    position: absolute;
    right: 6px;
    top: 28px;
    width: 10px;
    height: 6px;
    border-radius: 0 6px 6px 0;
    background: rgba(140, 255, 170, 0.75);
  }

  .flam-neck-rig {
    position: absolute;
    left: 0;
    top: 0;
    width: 26px;
    height: 36px;
    transform-origin: 18px 30px;
    animation: flam-neck-dip 2.4s ease-in-out infinite;
  }

  @keyframes flam-neck-dip {
    0% { transform: rotate(0deg) translate(0, 0); }
    35% { transform: rotate(38deg) translate(-10px, 24px); }
    70% { transform: rotate(-12deg) translate(4px, -6px); }
    100% { transform: rotate(0deg) translate(0, 0); }
  }

  .flam-neck {
    position: absolute;
    left: 8px;
    top: 6px;
    width: 14px;
    height: 26px;
    border-left: 2.5px solid rgba(140, 255, 170, 0.95);
    border-top: 2.5px solid rgba(140, 255, 170, 0.95);
    border-radius: 12px 0 0 12px;
  }

  .flam-head {
    position: absolute;
    left: 4px;
    top: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.8);
  }

  .flam-beak {
    position: absolute;
    left: -4px;
    top: 4px;
    width: 8px;
    height: 6px;
    border-bottom: 2px solid var(--accent, #00cc00);
    border-left: 2px solid var(--accent, #00cc00);
    border-radius: 0 0 0 6px;
    transform: rotate(30deg);
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

  /* v2: Caribbean Flamingo with vibrant coral-pink plumage,
     black filter beak tip, pink stilt legs, and azure tropical lagoon shallows. */
  .flamc {
    width: 112px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 30%, #0369a1 0%, #0c4a6e 60%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Azure lagoon water surface */
  .flamc-water {
    position: absolute;
    left: 8px;
    bottom: 10px;
    width: 96px;
    height: 6px;
    border-top: 1.5px solid #38bdf8;
    box-shadow: 0 0 8px rgba(56, 189, 248, 0.4);
  }

  /* Lagoon dipping ripples */
  .flamc-ripple {
    position: absolute;
    left: 40px;
    bottom: 8px;
    width: 36px;
    height: 8px;
    border-radius: 50%;
    border: 1.5px solid rgba(244, 114, 182, 0.9);
    box-shadow: 0 0 6px rgba(56, 189, 248, 0.8);
    animation: flamc-ripple-wash 2.4s ease-out infinite;
    pointer-events: none;
  }

  @keyframes flamc-ripple-wash {
    0% { opacity: 0; transform: scale(0.2); }
    30% { opacity: 1; transform: scale(0.8); }
    70% { opacity: 0.5; transform: scale(1.8); }
    100% { opacity: 0; transform: scale(2.4); }
  }

  /* Standing stilt leg */
  .flamc-leg-stand {
    position: absolute;
    left: 56px;
    bottom: 12px;
    width: 2px;
    height: 46px;
    background: #f472b6;
    box-shadow: 0 0 4px rgba(244, 114, 182, 0.5);
  }

  /* Tucked second leg */
  .flamc-leg-tuck {
    position: absolute;
    left: 50px;
    top: 44px;
    width: 14px;
    height: 16px;
    border-bottom: 2px solid #f472b6;
    border-left: 2px solid #f472b6;
    border-radius: 0 0 0 6px;
    transform: rotate(20deg);
  }

  /* Balance pendulum */
  .flamc-body-rig {
    position: absolute;
    left: 36px;
    top: 10px;
    width: 50px;
    height: 52px;
    transform-origin: 21px 48px;
    animation: flamc-balance 2.4s ease-in-out infinite alternate;
  }

  @keyframes flamc-balance {
    0% { transform: rotate(-12deg) translateY(-2px); }
    100% { transform: rotate(12deg) translateY(2px); }
  }

  /* Coral-salmon torso body */
  .flamc-torso {
    position: absolute;
    left: 10px;
    top: 26px;
    width: 28px;
    height: 20px;
    border-radius: 50% 60% 40% 50%;
    background: radial-gradient(circle at 40% 40%, #fb7185 0%, #f43f5e 60%, #e11d48 100%);
    border: 1px solid #fda4af;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  }

  /* Black flight feather tail plume */
  .flamc-tail {
    position: absolute;
    right: 6px;
    top: 28px;
    width: 10px;
    height: 6px;
    border-radius: 0 6px 6px 0;
    background: linear-gradient(90deg, #f43f5e 0%, #18181b 100%);
  }

  /* S-curve neck assembly */
  .flamc-neck-rig {
    position: absolute;
    left: 0;
    top: 0;
    width: 26px;
    height: 36px;
    transform-origin: 18px 30px;
    animation: flamc-neck-dip 2.4s ease-in-out infinite;
  }

  @keyframes flamc-neck-dip {
    0% { transform: rotate(0deg) translate(0, 0); }
    35% { transform: rotate(38deg) translate(-10px, 24px); }
    70% { transform: rotate(-12deg) translate(4px, -6px); }
    100% { transform: rotate(0deg) translate(0, 0); }
  }

  /* S-curve neck arch */
  .flamc-neck {
    position: absolute;
    left: 8px;
    top: 6px;
    width: 14px;
    height: 26px;
    border-left: 3px solid #fb7185;
    border-top: 3px solid #fb7185;
    border-radius: 12px 0 0 12px;
    filter: drop-shadow(0 0 2px rgba(251, 113, 133, 0.6));
  }

  /* Flamingo head */
  .flamc-head {
    position: absolute;
    left: 4px;
    top: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #f43f5e;
  }

  /* Hooked filter beak with black tip */
  .flamc-beak {
    position: absolute;
    left: -4px;
    top: 4px;
    width: 8px;
    height: 6px;
    border-bottom: 2.5px solid #18181b;
    border-left: 2.5px solid #ffe4e6;
    border-radius: 0 0 0 6px;
    transform: rotate(30deg);
  }
  `,
};

const flamingosMarkup = {
  v1: `
      <div class="flam">
        <div class="flam-water"></div>
        <div class="flam-ripple"></div>
        <div class="flam-leg-stand"></div>
        <div class="flam-leg-tuck"></div>
        <div class="flam-body-rig">
          <div class="flam-tail"></div>
          <div class="flam-torso"></div>
          <div class="flam-neck-rig">
            <div class="flam-neck"></div>
            <div class="flam-head">
              <div class="flam-beak"></div>
            </div>
          </div>
        </div>
      </div>
    `,
  v2: `
      <div class="flamc">
        <div class="flamc-water"></div>
        <div class="flamc-ripple"></div>
        <div class="flamc-leg-stand"></div>
        <div class="flamc-leg-tuck"></div>
        <div class="flamc-body-rig">
          <div class="flamc-tail"></div>
          <div class="flamc-torso"></div>
          <div class="flamc-neck-rig">
            <div class="flamc-neck"></div>
            <div class="flamc-head">
              <div class="flamc-beak"></div>
            </div>
          </div>
        </div>
      </div>
    `,
};

class ConceptFlamingos extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${flamingosStyles[version] || flamingosStyles.v2}</style>${flamingosMarkup[version] || flamingosMarkup.v2}`;
  }
}

if (!customElements.get('concept-flamingos')) {
  customElements.define('concept-flamingos', ConceptFlamingos);
}
