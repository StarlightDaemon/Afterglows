const dropSpindleStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .spn {
    width: 114px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .spn-roving {
    position: absolute;
    left: 42px;
    top: 4px;
    width: 30px;
    height: 18px;
    border-radius: 50% 50% 30% 30%;
    background: radial-gradient(circle at 50% 40%, rgba(190, 255, 205, 0.95), rgba(0, 140, 30, 0.7));
    border: 1px solid rgba(140, 255, 170, 0.8);
    box-shadow: 0 0 8px rgba(140, 255, 170, 0.5);
    z-index: 5;
  }

  .spn-rig {
    position: absolute;
    left: 45px;
    top: 14px;
    width: 24px;
    height: 80px;
    animation: spn-drop-cycle 4.2s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
  }

  @keyframes spn-drop-cycle {
    0% { transform: translateY(0); }
    70% { transform: translateY(22px); }
    85%, 100% { transform: translateY(0); }
  }

  .spn-yarn {
    position: absolute;
    left: 11px;
    top: 0;
    width: 2px;
    height: 38px;
    background: repeating-linear-gradient(180deg, rgba(190, 255, 205, 1) 0 3px, rgba(0, 160, 35, 0.9) 3px 6px);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.7);
    animation: spn-yarn-twist 0.4s linear infinite;
  }

  @keyframes spn-yarn-twist {
    0% { transform: scaleX(1); }
    50% { transform: scaleX(0.7); }
    100% { transform: scaleX(1); }
  }

  .spn-shaft {
    position: absolute;
    left: 10px;
    top: 24px;
    width: 4px;
    height: 52px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.9), rgba(0, 100, 20, 0.9));
    border: 1px solid var(--accent, #00cc00);
    z-index: 3;
  }

  .spn-hook {
    position: absolute;
    left: 9px;
    top: 20px;
    width: 6px;
    height: 6px;
    border-top: 2px solid rgba(190, 255, 205, 1);
    border-left: 2px solid rgba(190, 255, 205, 1);
    border-radius: 3px 0 0 0;
    z-index: 4;
  }

  .spn-cop {
    position: absolute;
    left: 5px;
    top: 36px;
    width: 14px;
    height: 20px;
    border-radius: 50% 50% 40% 40%;
    background: radial-gradient(circle at 40% 40%, rgba(190, 255, 205, 0.95), rgba(0, 130, 28, 0.9));
    border: 1px solid var(--accent, #00cc00);
    z-index: 4;
  }

  .spn-whorl {
    position: absolute;
    left: -4px;
    top: 56px;
    width: 32px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(190, 255, 205, 0.95), rgba(0, 150, 30, 0.9) 60%, rgba(0, 40, 8, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px rgba(140, 255, 170, 0.8);
    z-index: 5;
    animation: spn-whorl-spin 0.5s linear infinite;
  }

  @keyframes spn-whorl-spin {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
  }

  .spn-blur {
    position: absolute;
    left: -8px;
    top: 54px;
    width: 40px;
    height: 14px;
    border-radius: 50%;
    border: 1px dashed rgba(140, 255, 170, 0.5);
    pointer-events: none;
    animation: spn-blur-pulse 0.5s ease-in-out infinite alternate;
  }

  @keyframes spn-blur-pulse {
    0% { opacity: 0.3; transform: scale(0.95); }
    100% { opacity: 0.8; transform: scale(1.05); }
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

  /* v2: Walnut drop spindle with hand-dyed turquoise wool,
     cream fleece cloud, brass hook, and golden spinning whorl */
  .spnc {
    width: 114px;
    height: 100px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Cream fleece cloud roving */
  .spnc-roving {
    position: absolute;
    left: 42px;
    top: 4px;
    width: 30px;
    height: 18px;
    border-radius: 50% 50% 30% 30%;
    background: radial-gradient(circle at 50% 40%, #ffffff 0%, #fef3c7 60%, #fed7aa 100%);
    border: 1px solid #fef08a;
    box-shadow: 0 0 10px rgba(254, 240, 138, 0.6);
    z-index: 5;
  }

  /* Drop descent rig */
  .spnc-rig {
    position: absolute;
    left: 45px;
    top: 14px;
    width: 24px;
    height: 80px;
    animation: spnc-drop-cycle 4.2s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
  }

  @keyframes spnc-drop-cycle {
    0% { transform: translateY(0); }
    70% { transform: translateY(22px); }
    85%, 100% { transform: translateY(0); }
  }

  /* Turquoise ply yarn */
  .spnc-yarn {
    position: absolute;
    left: 11px;
    top: 0;
    width: 2px;
    height: 38px;
    background: repeating-linear-gradient(180deg, #22d3ee 0 3px, #0891b2 3px 6px);
    box-shadow: 0 0 4px #06b6d4;
    animation: spnc-yarn-twist 0.4s linear infinite;
  }

  @keyframes spnc-yarn-twist {
    0% { transform: scaleX(1); }
    50% { transform: scaleX(0.7); }
    100% { transform: scaleX(1); }
  }

  /* Dark walnut spindle shaft */
  .spnc-shaft {
    position: absolute;
    left: 10px;
    top: 24px;
    width: 4px;
    height: 52px;
    border-radius: 2px;
    background: linear-gradient(90deg, #b45309 0%, #78350f 100%);
    border: 0.5px solid #d97706;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    z-index: 3;
  }

  /* Brass hook */
  .spnc-hook {
    position: absolute;
    left: 9px;
    top: 20px;
    width: 6px;
    height: 6px;
    border-top: 2px solid #fde047;
    border-left: 2px solid #fde047;
    box-shadow: 0 0 4px #facc15;
    border-radius: 3px 0 0 0;
    z-index: 4;
  }

  /* Spun turquoise yarn cop */
  .spnc-cop {
    position: absolute;
    left: 5px;
    top: 36px;
    width: 14px;
    height: 20px;
    border-radius: 50% 50% 40% 40%;
    background: radial-gradient(circle at 40% 40%, #67e8f9 0%, #0891b2 80%);
    border: 1px solid #22d3ee;
    box-shadow: 0 0 6px #06b6d4;
    z-index: 4;
  }

  /* Walnut whorl flywheel */
  .spnc-whorl {
    position: absolute;
    left: -4px;
    top: 56px;
    width: 32px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, #fde047 0%, #b45309 60%, #451a03 100%);
    border: 1.5px solid #ca8a04;
    box-shadow: 0 0 10px #facc15;
    z-index: 5;
    animation: spnc-whorl-spin 0.5s linear infinite;
  }

  @keyframes spnc-whorl-spin {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
  }

  /* Motion blur halo */
  .spnc-blur {
    position: absolute;
    left: -8px;
    top: 54px;
    width: 40px;
    height: 14px;
    border-radius: 50%;
    border: 1px dashed #22d3ee;
    pointer-events: none;
    animation: spnc-blur-pulse 0.5s ease-in-out infinite alternate;
  }

  @keyframes spnc-blur-pulse {
    0% { opacity: 0.3; transform: scale(0.95); }
    100% { opacity: 0.8; transform: scale(1.05); }
  }
  `,
};

const dropSpindleMarkup = {
  v1: `
      <div class="spn">
        <div class="spn-roving"></div>
        <div class="spn-rig">
          <div class="spn-yarn"></div>
          <div class="spn-hook"></div>
          <div class="spn-shaft"></div>
          <div class="spn-cop"></div>
          <div class="spn-whorl"></div>
          <div class="spn-blur"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="spnc">
        <div class="spnc-roving"></div>
        <div class="spnc-rig">
          <div class="spnc-yarn"></div>
          <div class="spnc-hook"></div>
          <div class="spnc-shaft"></div>
          <div class="spnc-cop"></div>
          <div class="spnc-whorl"></div>
          <div class="spnc-blur"></div>
        </div>
      </div>
    `,
};

class ConceptDropSpindle extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${dropSpindleStyles[version] || dropSpindleStyles.v2}</style>${dropSpindleMarkup[version] || dropSpindleMarkup.v2}`;
  }
}

if (!customElements.get('concept-drop-spindle')) {
  customElements.define('concept-drop-spindle', ConceptDropSpindle);
}
