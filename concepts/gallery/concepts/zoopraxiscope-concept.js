const zoopraxiscopeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .zoo {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #161005 0%, #060401 100%);
    border: 1.5px solid rgba(255, 187, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 187, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Rotating glass silhouette disc */
  .zoo-glass-disc {
    position: relative;
    width: 78px;
    height: 78px;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 50%, rgba(255, 220, 100, 0.15) 0%, rgba(50, 30, 5, 0.4) 70%, transparent 100%);
    border: 1.5px solid #ffaa00;
    box-shadow: 0 0 8px rgba(255, 170, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: zoo-spin 1.2s steps(8) infinite;
  }

  @keyframes zoo-spin {
    to { transform: rotate(360deg); }
  }

  /* Galloping horse sequential silhouettes */
  .zoo-frame {
    position: absolute;
    width: 14px;
    height: 10px;
    background: #ffffff;
    clip-path: polygon(0 40%, 30% 20%, 70% 30%, 100% 0%, 90% 70%, 70% 60%, 50% 100%, 30% 60%, 10% 90%);
    box-shadow: 0 0 4px #ffea88;
  }

  .zf0 { top: 4px; left: 32px; }
  .zf1 { top: 12px; right: 10px; transform: rotate(45deg); }
  .zf2 { top: 34px; right: 2px; transform: rotate(90deg); }
  .zf3 { bottom: 12px; right: 10px; transform: rotate(135deg); }
  .zf4 { bottom: 4px; left: 32px; transform: rotate(180deg); }
  .zf5 { bottom: 12px; left: 10px; transform: rotate(225deg); }
  .zf6 { top: 34px; left: 2px; transform: rotate(270deg); }
  .zf7 { top: 12px; left: 10px; transform: rotate(315deg); }

  /* Limelight projector beam lamp on right */
  .zoo-projector-beam {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 40px;
    margin-top: -20px;
    background: linear-gradient(90deg, rgba(255, 235, 120, 0.4), transparent);
    clip-path: polygon(0 40%, 100% 0, 100% 100%, 0 60%);
    pointer-events: none;
  }

  /* Center brass arbor axle */
  .zoo-arbor {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #ffaa00;
    box-shadow: 0 0 6px #ffea88;
    z-index: 6;
  }

  .zoo-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 204, 100, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptZoopraxiscope extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${zoopraxiscopeStyles}</style>
      <div class="zoo">
        <div class="zoo-glass-disc">
          <div class="zoo-frame zf0"></div>
          <div class="zoo-frame zf1"></div>
          <div class="zoo-frame zf2"></div>
          <div class="zoo-frame zf3"></div>
          <div class="zoo-frame zf4"></div>
          <div class="zoo-frame zf5"></div>
          <div class="zoo-frame zf6"></div>
          <div class="zoo-frame zf7"></div>

          <div class="zoo-arbor"></div>
        </div>

        <div class="zoo-projector-beam"></div>

        <div class="zoo-label">MUYBRIDGE ZOOPRAXISCOPE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-zoopraxiscope')) {
  customElements.define('concept-zoopraxiscope', ConceptZoopraxiscope);
}
