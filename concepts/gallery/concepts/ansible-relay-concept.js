const ansibleStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ar-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #150926 0%, #030108 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ar-stage {
    position: relative;
    width: 96px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    box-sizing: border-box;
  }

  /* Left Ion Trap Node (Earth Station) */
  .ar-node-l {
    position: relative;
    width: 32px;
    height: 52px;
    border-radius: 16px;
    background: rgba(0, 229, 255, 0.1);
    border: 1.5px solid #00e5ff;
    box-shadow: inset 0 0 8px rgba(0, 229, 255, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Right Ion Trap Node (Deep Space Colony) */
  .ar-node-r {
    position: relative;
    width: 32px;
    height: 52px;
    border-radius: 16px;
    background: rgba(224, 64, 251, 0.1);
    border: 1.5px solid #e040fb;
    box-shadow: inset 0 0 8px rgba(224, 64, 251, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Entangled Qubit Singlet Pair (Synchronized Spin Precession).
     Two-tone Bloch-hemisphere face: a flat filled circle is rotationally
     symmetric, so the precession would otherwise render as a no-op. */
  .ar-qubit {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: linear-gradient(90deg, #ffffff 50%, #0a2a3a 50%);
    border: 1px solid #ffffff;
    box-shadow: 0 0 8px #ffffff;
    animation: ar-spin-sync 2s linear infinite;
  }

  @keyframes ar-spin-sync {
    0% { transform: rotate(0deg) scale(0.9); }
    50% { transform: rotate(180deg) scale(1.15); }
    100% { transform: rotate(360deg) scale(0.9); }
  }

  /* Superluminal Non-Local Entanglement Bridge Beam */
  .ar-bridge-svg {
    position: absolute;
    top: 24px;
    left: 28px;
    width: 40px;
    height: 28px;
  }

  .ar-entangle-line {
    stroke: #ffffff;
    stroke-dasharray: 4 2;
    filter: drop-shadow(0 0 4px #00e5ff) drop-shadow(0 0 8px #e040fb);
    animation: ar-beam-flux 0.2s linear infinite alternate;
  }

  @keyframes ar-beam-flux {
    0% { opacity: 0.35; }
    100% { opacity: 1; }
  }

  .ar-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptAnsibleRelay extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${ansibleStyles}</style>
      <div class="ar-box">
        <div class="ar-stage">
          <div class="ar-node-l">
            <div class="ar-qubit" style="box-shadow: 0 0 8px #00e5ff;"></div>
          </div>

          <svg class="ar-bridge-svg" viewBox="0 0 40 28">
            <line class="ar-entangle-line" x1="0" y1="14" x2="40" y2="14" stroke-width="1.8" />
            <circle cx="20" cy="14" r="5" fill="none" stroke="#e040fb" stroke-width="1" stroke-dasharray="2 2" />
          </svg>

          <div class="ar-node-r">
            <div class="ar-qubit" style="box-shadow: 0 0 8px #e040fb;"></div>
          </div>
        </div>

        <div class="ar-label">ANSIBLE RELAY</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-ansible-relay')) {
  customElements.define('concept-ansible-relay', ConceptAnsibleRelay);
}
