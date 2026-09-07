const lockGateStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .lg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0c2024 0%, #03080a 100%);
    border: 1.5px solid rgba(0, 230, 200, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 230, 200, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lg-stage {
    position: relative;
    width: 92px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Masonry canal lock walls */
  .lg-walls {
    position: absolute;
    inset: 6px;
    border-left: 5px solid #1a3338;
    border-right: 5px solid #1a3338;
    border-top: 1.5px solid #00e6c8;
    border-bottom: 1.5px solid #00e6c8;
    background: #061518;
  }

  /* Water level fill changing in chamber */
  .lg-water-level {
    position: absolute;
    inset: 6px;
    background: linear-gradient(180deg, rgba(0, 230, 200, 0.4) 0%, rgba(0, 100, 90, 0.7) 100%);
    animation: lg-water-cycle 6s ease-in-out infinite alternate;
  }

  @keyframes lg-water-cycle {
    0% { transform: scaleY(0.4); transform-origin: bottom; opacity: 0.5; }
    100% { transform: scaleY(1); transform-origin: bottom; opacity: 0.9; }
  }

  /* Canal boat floating in lock */
  .lg-boat {
    position: absolute;
    top: 28px;
    width: 22px;
    height: 10px;
    background: #ffb74d;
    border: 1px solid #ffffff;
    border-radius: 3px 8px 8px 3px;
    box-shadow: 0 0 4px #ffb74d;
    animation: lg-boat-float 6s ease-in-out infinite alternate;
  }

  @keyframes lg-boat-float {
    0% { transform: translateY(16px); }
    100% { transform: translateY(-8px); }
  }

  /* Left Miter Lock Gate Leaf */
  .lg-gate-left {
    position: absolute;
    top: 10px;
    left: 11px;
    width: 36px;
    height: 6px;
    background: #3e2723;
    border: 1px solid #ffd54f;
    transform-origin: left center;
    animation: lg-swing-left 6s ease-in-out infinite alternate;
  }

  @keyframes lg-swing-left {
    0%, 30% { transform: rotate(28deg); }
    70%, 100% { transform: rotate(85deg); }
  }

  /* Right Miter Lock Gate Leaf */
  .lg-gate-right {
    position: absolute;
    top: 10px;
    right: 11px;
    width: 36px;
    height: 6px;
    background: #3e2723;
    border: 1px solid #ffd54f;
    transform-origin: right center;
    animation: lg-swing-right 6s ease-in-out infinite alternate;
  }

  @keyframes lg-swing-right {
    0%, 30% { transform: rotate(-28deg); }
    70%, 100% { transform: rotate(-85deg); }
  }

  /* Sluice culvert water jets */
  .lg-sluice-jet {
    position: absolute;
    top: 22px;
    width: 14px;
    height: 10px;
    border-bottom: 2px dashed #00e6c8;
    animation: lg-jet-flow 1s linear infinite;
  }

  @keyframes lg-jet-flow {
    0% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0.2; transform: translateY(8px); }
  }

  .lg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 230, 200, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptLockGate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${lockGateStyles}</style>
      <div class="lg-box">
        <div class="lg-stage">
          <div class="lg-walls"></div>
          <div class="lg-water-level"></div>
          <div class="lg-boat"></div>
          <div class="lg-sluice-jet"></div>

          <div class="lg-gate-left"></div>
          <div class="lg-gate-right"></div>
        </div>

        <div class="lg-label">CANAL MITER LOCK</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-lock-gate')) {
  customElements.define('concept-lock-gate', ConceptLockGate);
}
