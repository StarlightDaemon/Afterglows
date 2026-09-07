const spinningTopStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tp {
    width: 100px;
    height: 96px;
    position: relative;
  }

  .tp-floor {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 16px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.4), transparent);
  }

  .tp-shadow {
    position: absolute;
    left: 50%;
    bottom: 12px;
    width: 30px;
    height: 6px;
    margin-left: -15px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(0, 204, 0, 0.35), transparent 70%);
    animation: tp-shadow 6s ease-in infinite;
  }

  @keyframes tp-shadow {
    0%, 40% { transform: scaleX(1); opacity: 0.5; }
    75% { transform: scaleX(1.4); opacity: 0.7; }
    90%, 100% { transform: scaleX(1.8); opacity: 0.3; }
  }

  .tp-lean {
    position: absolute;
    left: 50%;
    bottom: 18px;
    width: 0;
    height: 0;
    transform-origin: 50% 100%;
    animation: tp-lean 6s ease-in infinite;
  }

  @keyframes tp-lean {
    0%, 40% { transform: rotate(0deg); }
    55% { transform: rotate(6deg); }
    68% { transform: rotate(-10deg); }
    78% { transform: rotate(14deg); }
    88% { transform: rotate(58deg); }
    96%, 100% { transform: rotate(78deg); }
  }

  .tp-body {
    position: absolute;
    left: -16px;
    bottom: 0;
    width: 32px;
    height: 32px;
    clip-path: polygon(50% 100%, 0 30%, 20% 20%, 80% 20%, 100% 30%);
    background:
      repeating-linear-gradient(90deg,
        rgba(214, 255, 224, 0.9) 0 4px,
        rgba(0, 130, 26, 0.85) 4px 8px);
    border: 1px solid rgba(0, 204, 0, 0.5);
    animation: tp-spin 0.3s linear infinite, tp-blur 6s ease-in infinite;
  }

  @keyframes tp-spin {
    to { background-position: -8px 0; }
  }

  @keyframes tp-blur {
    0%, 40% { filter: blur(1.4px); }
    70% { filter: blur(0.6px); }
    88%, 100% { filter: blur(0); }
  }

  .tp-cap {
    position: absolute;
    left: -10px;
    bottom: 24px;
    width: 20px;
    height: 8px;
    border-radius: 50% 50% 0 0;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.85), rgba(0, 150, 30, 0.7));
  }

  .tp-stem {
    position: absolute;
    left: -2px;
    bottom: 30px;
    width: 4px;
    height: 8px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
  }

  .tp-streak {
    position: absolute;
    bottom: 24px;
    width: 14px;
    height: 2px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.5);
    opacity: 0;
    animation: tp-streak 6s ease-in infinite;
  }

  .tp-streak.s1 { left: 20px; }
  .tp-streak.s2 { right: 20px; animation-delay: 0.15s; }

  @keyframes tp-streak {
    0%, 8% { opacity: 0; }
    20%, 44% { opacity: 0.7; }
    60%, 100% { opacity: 0; }
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

  /* v2: Vintage carousel tin spinning top with vibrant rainbow stripes,
     spun brass dome, and precessing gyroscopic blur */
  .tpc {
    width: 100px;
    height: 96px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Polished floor surface */
  .tpc-floor {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 16px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ca8a04 20%, #ca8a04 80%, transparent);
    box-shadow: 0 0 6px rgba(202, 138, 4, 0.4);
  }

  /* Dynamic floor shadow */
  .tpc-shadow {
    position: absolute;
    left: 50%;
    bottom: 12px;
    width: 30px;
    height: 6px;
    margin-left: -15px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(0, 0, 0, 0.8), transparent 70%);
    animation: tpc-shadow 6s ease-in infinite;
  }

  @keyframes tpc-shadow {
    0%, 40% { transform: scaleX(1); opacity: 0.6; }
    75% { transform: scaleX(1.4); opacity: 0.8; }
    90%, 100% { transform: scaleX(1.8); opacity: 0.4; }
  }

  /* Precession wobble carrier */
  .tpc-lean {
    position: absolute;
    left: 50%;
    bottom: 18px;
    width: 0;
    height: 0;
    transform-origin: 50% 100%;
    animation: tpc-lean 6s ease-in infinite;
  }

  @keyframes tpc-lean {
    0%, 40% { transform: rotate(0deg); }
    55% { transform: rotate(6deg); }
    68% { transform: rotate(-10deg); }
    78% { transform: rotate(14deg); }
    88% { transform: rotate(58deg); }
    96%, 100% { transform: rotate(78deg); }
  }

  /* Rainbow tin top body */
  .tpc-body {
    position: absolute;
    left: -16px;
    bottom: 0;
    width: 32px;
    height: 32px;
    clip-path: polygon(50% 100%, 0 30%, 20% 20%, 80% 20%, 100% 30%);
    background:
      repeating-linear-gradient(90deg,
        #ef4444 0 4px,
        #3b82f6 4px 8px,
        #facc15 8px 12px,
        #10b981 12px 16px);
    border: 1px solid #cbd5e1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
    animation: tpc-spin 0.3s linear infinite, tpc-blur 6s ease-in infinite;
  }

  @keyframes tpc-spin {
    to { background-position: -16px 0; }
  }

  @keyframes tpc-blur {
    0%, 40% { filter: blur(1.4px); }
    70% { filter: blur(0.6px); }
    88%, 100% { filter: blur(0); }
  }

  /* Spun brass cap dome */
  .tpc-cap {
    position: absolute;
    left: -10px;
    bottom: 24px;
    width: 20px;
    height: 8px;
    border-radius: 50% 50% 0 0;
    background: linear-gradient(180deg, #fef08a, #ca8a04);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  }

  /* Turned handle knob */
  .tpc-stem {
    position: absolute;
    left: -2px;
    bottom: 30px;
    width: 4px;
    height: 8px;
    border-radius: 2px;
    background: #9a3412;
    border: 1px solid #78350f;
  }

  /* Rainbow spin streaks */
  .tpc-streak {
    position: absolute;
    bottom: 24px;
    width: 14px;
    height: 2px;
    border-radius: 2px;
    background: #fde047;
    box-shadow: 0 0 6px #facc15;
    opacity: 0;
    animation: tpc-streak 6s ease-in infinite;
  }

  .tpc-streak.s1 { left: 20px; background: #38bdf8; box-shadow: 0 0 6px #38bdf8; }
  .tpc-streak.s2 { right: 20px; animation-delay: 0.15s; }

  @keyframes tpc-streak {
    0%, 8% { opacity: 0; }
    20%, 44% { opacity: 0.85; }
    60%, 100% { opacity: 0; }
  }
  `,
};

const spinningTopMarkup = {
  v1: `
      <div class="tp">
        <div class="tp-floor"></div>
        <div class="tp-shadow"></div>
        <div class="tp-streak s1"></div>
        <div class="tp-streak s2"></div>
        <div class="tp-lean">
          <div class="tp-body"></div>
          <div class="tp-cap"></div>
          <div class="tp-stem"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="tpc">
        <div class="tpc-floor"></div>
        <div class="tpc-shadow"></div>
        <div class="tpc-streak s1"></div>
        <div class="tpc-streak s2"></div>
        <div class="tpc-lean">
          <div class="tpc-body"></div>
          <div class="tpc-cap"></div>
          <div class="tpc-stem"></div>
        </div>
      </div>
    `,
};

class ConceptSpinningTop extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${spinningTopStyles[version] || spinningTopStyles.v2}</style>${spinningTopMarkup[version] || spinningTopMarkup.v2}`;
  }
}

if (!customElements.get('concept-spinning-top')) {
  customElements.define('concept-spinning-top', ConceptSpinningTop);
}
