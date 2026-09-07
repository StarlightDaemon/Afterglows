const synapseStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sv-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0d1526 0%, #03060c 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sv-stage {
    position: relative;
    width: 96px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Presynaptic Terminal Bouton (Top) */
  .sv-pre-membrane {
    position: absolute;
    top: 6px;
    width: 86px;
    height: 32px;
    border-radius: 12px 12px 0 0;
    background: rgba(0, 229, 255, 0.12);
    border-bottom: 2px solid #00e5ff;
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.4);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 10px;
    box-sizing: border-box;
  }

  /* Synaptic Vesicles loaded with neurotransmitter molecules */
  .sv-vesicle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #00b0ff;
    border: 1px solid #ffffff;
    box-shadow: 0 0 6px #00e5ff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Vesicle trafficking across the bouton to dock at the active zone */
  .sv-transport-vesicle {
    position: absolute;
    top: 2px;
    left: 14px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #00b0ff;
    border: 1px solid #ffffff;
    box-shadow: 0 0 6px #00e5ff;
    animation: sv-transport 3s ease-in-out infinite;
  }

  @keyframes sv-transport {
    0% { transform: translate(0, 0); opacity: 0; }
    10% { transform: translate(3px, 2px); opacity: 1; }
    55% { transform: translate(28px, 16px); opacity: 1; }
    70% { transform: translate(28px, 20px) scale(1.1); opacity: 0.9; }
    82% { transform: translate(28px, 22px) scale(0.4); opacity: 0; }
    100% { transform: translate(28px, 22px) scale(0.4); opacity: 0; }
  }

  /* Vesicle undergoing exocytosis fusion at active zone */
  .sv-fusing-vesicle {
    position: absolute;
    bottom: -6px;
    left: 42px;
    width: 12px;
    height: 10px;
    border-radius: 50% 50% 0 0;
    background: #00b0ff;
    border: 1.5px solid #ffffff;
    border-bottom: none;
    box-shadow: 0 0 8px #00e5ff;
    animation: sv-fuse-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes sv-fuse-pulse {
    0% { transform: scaleY(0.5) scaleX(0.85); }
    100% { transform: scaleY(1.35) scaleX(1.15); }
  }

  /* Released Neurotransmitter Molecules diffusing in cleft */
  .sv-cleft-neurotransmitters {
    position: absolute;
    top: 38px;
    width: 60px;
    height: 16px;
  }

  .sv-molecule {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffd600;
    box-shadow: 0 0 7px #ffd600, 0 0 3px #fff59d;
    animation: sv-diffuse 2s linear infinite;
  }

  @keyframes sv-diffuse {
    0% { top: 0px; opacity: 1; transform: scale(1); }
    100% { top: 14px; opacity: 0.3; transform: scale(0.6); }
  }

  /* Postsynaptic Membrane & Receptors (Bottom) */
  .sv-post-membrane {
    position: absolute;
    bottom: 6px;
    width: 86px;
    height: 16px;
    border-radius: 0 0 12px 12px;
    background: rgba(124, 77, 255, 0.15);
    border-top: 2px solid #7c4dff;
    box-shadow: 0 0 8px rgba(124, 77, 255, 0.4);
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 0 8px;
    box-sizing: border-box;
  }

  .sv-receptor {
    width: 6px;
    height: 6px;
    background: #e040fb;
    border-radius: 0 0 3px 3px;
    border: 1px solid #ffffff;
  }

  .sv-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptSynapticVesicle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${synapseStyles}</style>
      <div class="sv-box">
        <div class="sv-stage">
          <div class="sv-pre-membrane">
            <div class="sv-vesicle"></div>
            <div class="sv-vesicle"></div>
            <div class="sv-fusing-vesicle"></div>
            <div class="sv-transport-vesicle"></div>
          </div>

          <div class="sv-cleft-neurotransmitters">
            <div class="sv-molecule" style="left: 18px; animation-delay: 0s;"></div>
            <div class="sv-molecule" style="left: 32px; animation-delay: 0.4s;"></div>
            <div class="sv-molecule" style="left: 44px; animation-delay: 0.8s;"></div>
          </div>

          <div class="sv-post-membrane">
            <div class="sv-receptor"></div>
            <div class="sv-receptor"></div>
            <div class="sv-receptor"></div>
            <div class="sv-receptor"></div>
          </div>
        </div>

        <div class="sv-label">SYNAPTIC EXOCYTOSIS</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-synaptic-vesicle')) {
  customElements.define('concept-synaptic-vesicle', ConceptSynapticVesicle);
}
