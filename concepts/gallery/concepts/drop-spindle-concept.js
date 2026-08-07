const dropSpindleStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A drop spindle spinning yarn from raw wool: a drafting fleece cloud twists
     under gyroscopic whorl spin into tight twisted yarn while slowly descending
     and winding onto the wooden shaft. */
  .spn {
    width: 114px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  /* Loose wool roving fiber cloud at top */
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

  /* Spindle suspension rig with vertical descent & spin cycle */
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

  /* Twisted yarn thread drafting down from roving */
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

  /* Wooden spindle shaft */
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

  /* Top brass suspension hook */
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

  /* Spun yarn cop wound on spindle */
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

  /* Gyroscopic flywheel whorl orbiting at high angular speed */
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

  /* Orbital motion blur ring around whorl */
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
`;

class ConceptDropSpindle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${dropSpindleStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-drop-spindle')) {
  customElements.define('concept-drop-spindle', ConceptDropSpindle);
}
