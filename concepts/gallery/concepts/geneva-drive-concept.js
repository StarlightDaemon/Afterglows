const genevaDriveStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A classic 4-slot Geneva drive (Maltese cross mechanism): converting continuous
     uniform rotation of the drive pin into precision 90° intermittent indexing
     advances with zero-backlash cam dwell locking. */
  .gen {
    width: 116px;
    height: 98px;
    position: relative;
  }

  /* Driver wheel (left) rotating continuously at constant speed */
  .gen-driver-rig {
    position: absolute;
    left: 10px;
    top: 20px;
    width: 56px;
    height: 56px;
    animation: gen-drive-spin 3.2s linear infinite;
  }

  @keyframes gen-drive-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Driver wheel circular body */
  .gen-driver-disc {
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, rgba(0, 140, 30, 0.8), rgba(0, 40, 8, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
  }

  /* Drive pin mounted on driver wheel circumference */
  .gen-pin {
    position: absolute;
    right: 4px;
    top: 24px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 6px rgba(140, 255, 170, 1);
    z-index: 5;
  }

  /* Center driver axle */
  .gen-driver-axle {
    position: absolute;
    left: 24px;
    top: 24px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.9);
    border: 1px solid var(--accent, #00cc00);
  }

  /* 4-slot Maltese cross driven wheel (right) running intermittent 90° indexing */
  .gen-cross-rig {
    position: absolute;
    right: 10px;
    top: 20px;
    width: 56px;
    height: 56px;
    animation: gen-index 3.2s cubic-bezier(0.7, 0, 0.3, 1) infinite;
  }

  @keyframes gen-index {
    0%, 70% { transform: rotate(0deg); }
    85%, 100% { transform: rotate(90deg); }
  }

  /* Maltese cross disc with 4 orthogonal radial slots */
  .gen-cross-body {
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, rgba(0, 160, 35, 0.9), rgba(0, 30, 6, 0.98));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.35);
  }

  /* Radial slots */
  .gen-slot {
    position: absolute;
    background: rgba(0, 20, 4, 0.95);
    border: 1px solid rgba(140, 255, 170, 0.8);
  }

  .gen-slot.s-left { left: 4px; top: 22px; width: 18px; height: 6px; border-radius: 0 3px 3px 0; }
  .gen-slot.s-right { right: 4px; top: 22px; width: 18px; height: 6px; border-radius: 3px 0 0 3px; }
  .gen-slot.s-top { left: 22px; top: 4px; width: 6px; height: 18px; border-radius: 0 0 3px 3px; }
  .gen-slot.s-bot { left: 22px; bottom: 4px; width: 6px; height: 18px; border-radius: 3px 3px 0 0; }

  /* Driven wheel center axle */
  .gen-cross-axle {
    position: absolute;
    left: 23px;
    top: 23px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.8);
    z-index: 4;
  }
`;

class ConceptGenevaDrive extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${genevaDriveStyles}</style>
      <div class="gen">
        <div class="gen-driver-rig">
          <div class="gen-driver-disc"></div>
          <div class="gen-driver-axle"></div>
          <div class="gen-pin"></div>
        </div>
        <div class="gen-cross-rig">
          <div class="gen-cross-body"></div>
          <div class="gen-slot s-left"></div>
          <div class="gen-slot s-right"></div>
          <div class="gen-slot s-top"></div>
          <div class="gen-slot s-bot"></div>
          <div class="gen-cross-axle"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-geneva-drive')) {
  customElements.define('concept-geneva-drive', ConceptGenevaDrive);
}
