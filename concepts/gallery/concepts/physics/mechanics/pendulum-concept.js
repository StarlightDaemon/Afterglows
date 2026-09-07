const pendulumStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pend {
    width: 104px;
    height: 104px;
    position: relative;
  }

  .pend-beam {
    position: absolute;
    top: 14px;
    left: 16px;
    right: 16px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(0, 204, 0, 0.15), rgba(140, 255, 170, 0.6), rgba(0, 204, 0, 0.15));
  }

  .pend-pivot {
    position: absolute;
    top: 12px;
    left: 50%;
    width: 8px;
    height: 8px;
    margin-left: -4px;
    border-radius: 50%;
    background: #0c2c14;
    border: 1px solid rgba(190, 255, 205, 0.8);
    z-index: 2;
  }

  .pend-wheel {
    position: absolute;
    top: 4px;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-radius: 50%;
    border: 1px dashed rgba(140, 255, 170, 0.5);
    animation: pend-escape 2.4s steps(2, jump-none) infinite;
  }

  .pend-wheel::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 50%;
    width: 3px;
    height: 6px;
    margin-left: -1.5px;
    background: rgba(190, 255, 205, 0.85);
    border-radius: 1px;
  }

  .pend-arm {
    position: absolute;
    top: 16px;
    left: 50%;
    width: 2px;
    height: 58px;
    margin-left: -1px;
    transform-origin: top center;
    animation: pend-swing 2.4s ease-in-out infinite;
  }

  .pend-rod {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.9), rgba(0, 204, 0, 0.5));
  }

  .pend-bob {
    position: absolute;
    bottom: -14px;
    left: 50%;
    width: 16px;
    height: 16px;
    margin-left: -8px;
    border-radius: 50%;
    background: radial-gradient(circle at 36% 30%, #d8ffbb 0%, #2a8a3e 55%, #123c1e 100%);
    box-shadow: 0 0 9px rgba(0, 204, 0, 0.5);
  }

  .pend-arc {
    position: absolute;
    top: -48px;
    left: 50%;
    width: 128px;
    height: 128px;
    margin-left: -64px;
    border-radius: 50%;
    border: 1px dashed rgba(0, 204, 0, 0.3);
    clip-path: polygon(0% 90%, 100% 90%, 100% 101%, 0% 101%);
  }

  .pend-tick {
    position: absolute;
    top: 84px;
    font-family: monospace;
    font-size: 9px;
    color: rgba(200, 255, 210, 0.9);
    opacity: 0;
    animation: pend-tick 2.4s linear infinite;
  }

  .pend-tick.left { left: 10px; }
  .pend-tick.right { right: 8px; animation-delay: -1.2s; }

  @keyframes pend-swing {
    0%, 100% { transform: rotate(-26deg); }
    50% { transform: rotate(26deg); }
  }

  @keyframes pend-escape {
    from { transform: rotate(0deg); }
    to { transform: rotate(60deg); }
  }

  @keyframes pend-tick {
    0%, 3% { opacity: 1; }
    12%, 100% { opacity: 0; }
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

  /* v2: Precision clockwork brass pendulum with mahogany mount beam,
     escapement ratchet wheel, solid brass bob, and gold acoustic callouts */
  .pendc {
    width: 104px;
    height: 104px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Mahogany support beam */
  .pendc-beam {
    position: absolute;
    top: 14px;
    left: 16px;
    right: 16px;
    height: 5px;
    border-radius: 2px;
    background: linear-gradient(90deg, #78350f, #9a3412, #78350f);
    border: 1px solid #ca8a04;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  }

  /* Polished brass pivot bearing */
  .pendc-pivot {
    position: absolute;
    top: 12px;
    left: 50%;
    width: 8px;
    height: 8px;
    margin-left: -4px;
    border-radius: 50%;
    background: #facc15;
    border: 1.5px solid #ca8a04;
    box-shadow: 0 0 4px #fde047;
    z-index: 2;
  }

  /* Brass escapement wheel */
  .pendc-wheel {
    position: absolute;
    top: 4px;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-radius: 50%;
    border: 1px dashed rgba(250, 204, 21, 0.7);
    animation: pendc-escape 2.4s steps(2, jump-none) infinite;
  }

  .pendc-wheel::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 50%;
    width: 3px;
    height: 6px;
    margin-left: -1.5px;
    background: #fde047;
    border-radius: 1px;
  }

  /* Swing arm */
  .pendc-arm {
    position: absolute;
    top: 16px;
    left: 50%;
    width: 2px;
    height: 58px;
    margin-left: -1px;
    transform-origin: top center;
    animation: pendc-swing 2.4s ease-in-out infinite;
  }

  /* Stainless steel rod */
  .pendc-rod {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #94a3b8, #f8fafc, #64748b);
  }

  /* Solid polished brass bob */
  .pendc-bob {
    position: absolute;
    bottom: -14px;
    left: 50%;
    width: 16px;
    height: 16px;
    margin-left: -8px;
    border-radius: 50%;
    background: radial-gradient(circle at 36% 30%, #ffffff 0%, #fef08a 35%, #facc15 70%, #ca8a04 100%);
    box-shadow: 0 0 10px rgba(250, 204, 21, 0.8), 0 3px 6px rgba(0, 0, 0, 0.6);
  }

  /* Golden arc sweep */
  .pendc-arc {
    position: absolute;
    top: -48px;
    left: 50%;
    width: 128px;
    height: 128px;
    margin-left: -64px;
    border-radius: 50%;
    border: 1px dashed rgba(250, 204, 21, 0.4);
    clip-path: polygon(0% 90%, 100% 90%, 100% 101%, 0% 101%);
  }

  /* Audio tick callouts */
  .pendc-tick {
    position: absolute;
    top: 84px;
    font-family: 'Courier New', monospace;
    font-size: 9px;
    font-weight: bold;
    color: #fde047;
    text-shadow: 0 0 6px #facc15;
    opacity: 0;
    animation: pendc-tick 2.4s linear infinite;
  }

  .pendc-tick.left { left: 10px; color: #38bdf8; text-shadow: 0 0 6px #38bdf8; }
  .pendc-tick.right { right: 8px; color: #fde047; text-shadow: 0 0 6px #fde047; animation-delay: -1.2s; }

  @keyframes pendc-swing {
    0%, 100% { transform: rotate(-26deg); }
    50% { transform: rotate(26deg); }
  }

  @keyframes pendc-escape {
    from { transform: rotate(0deg); }
    to { transform: rotate(60deg); }
  }

  @keyframes pendc-tick {
    0%, 3% { opacity: 1; }
    12%, 100% { opacity: 0; }
  }
  `,
};

const pendulumMarkup = {
  v1: `
      <div class="pend">
        <div class="pend-wheel"></div>
        <div class="pend-beam"></div>
        <div class="pend-pivot"></div>
        <div class="pend-arc"></div>
        <div class="pend-arm">
          <div class="pend-rod"></div>
          <div class="pend-bob"></div>
        </div>
        <span class="pend-tick left">tick</span>
        <span class="pend-tick right">tock</span>
      </div>
    `,
  v2: `
      <div class="pendc">
        <div class="pendc-wheel"></div>
        <div class="pendc-beam"></div>
        <div class="pendc-pivot"></div>
        <div class="pendc-arc"></div>
        <div class="pendc-arm">
          <div class="pendc-rod"></div>
          <div class="pendc-bob"></div>
        </div>
        <span class="pendc-tick left">tick</span>
        <span class="pendc-tick right">tock</span>
      </div>
    `,
};

class ConceptPendulum extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${pendulumStyles[version] || pendulumStyles.v2}</style>${pendulumMarkup[version] || pendulumMarkup.v2}`;
  }
}

if (!customElements.get('concept-pendulum')) {
  customElements.define('concept-pendulum', ConceptPendulum);
}
