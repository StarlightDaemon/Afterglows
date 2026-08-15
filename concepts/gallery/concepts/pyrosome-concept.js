const pyrosomeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pyr-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #03151b 0%, #010609 100%);
    border: 1.5px solid rgba(0, 255, 204, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 255, 204, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pyr-stage {
    position: relative;
    width: 96px;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: pyr-undulate 5s ease-in-out infinite alternate;
  }

  @keyframes pyr-undulate {
    0% { transform: translateY(-3px) rotate(-2deg); }
    100% { transform: translateY(3px) rotate(2deg); }
  }

  /* Marine snow specks in deep sea */
  .pyr-snow {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pyr-speck {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 3px #00ffcc;
  }

  /* Hollow cylindrical gelatinous tunicate body */
  .pyr-body-svg {
    width: 86px;
    height: 48px;
    filter: drop-shadow(0 0 8px rgba(0, 255, 204, 0.6));
  }

  /* Bioluminescent zooid wave traveling down the tube */
  .pyr-glow-wave {
    animation: pyr-flash 2.5s ease-in-out infinite;
  }

  @keyframes pyr-flash {
    0%, 100% { opacity: 0.35; stroke: #00897b; }
    50% { opacity: 1; stroke: #64ffda; }
  }

  .pyr-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 255, 204, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPyrosome extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${pyrosomeStyles}</style>
      <div class="pyr-box">
        <div class="pyr-stage">
          <div class="pyr-snow">
            <div class="pyr-speck" style="top: 10px; left: 14px;"></div>
            <div class="pyr-speck" style="top: 55px; left: 78px;"></div>
            <div class="pyr-speck" style="top: 20px; right: 12px;"></div>
          </div>

          <svg class="pyr-body-svg" viewBox="0 0 86 48">
            <!-- Transparent sheath -->
            <path d="M 10 24 Q 25 10 70 8 Q 78 24 70 40 Q 25 38 10 24 Z" fill="rgba(0, 255, 204, 0.12)" stroke="#00ffcc" stroke-width="1.2" />
            <!-- Open cloacal aperture ring at right -->
            <ellipse cx="70" cy="24" rx="4" ry="16" fill="rgba(0, 255, 204, 0.25)" stroke="#ffffff" stroke-width="1" />
            <!-- Individual bioluminescent zooid rows pulsating -->
            <path class="pyr-glow-wave" d="M 20 18 Q 45 16 65 14" fill="none" stroke-width="2.5" stroke-dasharray="3 4" style="animation-delay: 0s;" />
            <path class="pyr-glow-wave" d="M 15 24 Q 45 24 68 24" fill="none" stroke-width="2.5" stroke-dasharray="3 4" style="animation-delay: 0.4s;" />
            <path class="pyr-glow-wave" d="M 20 30 Q 45 32 65 34" fill="none" stroke-width="2.5" stroke-dasharray="3 4" style="animation-delay: 0.8s;" />
          </svg>
        </div>

        <div class="pyr-label">PYROSOME TUNICATE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-pyrosome')) {
  customElements.define('concept-pyrosome', ConceptPyrosome);
}
