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

  /* Swimming pelagic propulsion undulation */
  .pyr-stage {
    position: relative;
    width: 96px;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: pyr-swim-drift 3.8s ease-in-out infinite alternate;
  }

  @keyframes pyr-swim-drift {
    0% { transform: translate(-10px, -4px) rotate(-6deg) scale(0.94); }
    100% { transform: translate(10px, 4px) rotate(6deg) scale(1.06); }
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

  /* Bioluminescent zooid spark traveling down the colony tube */
  .pyr-bio-spark {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 14px #00ffcc;
    z-index: 6;
    animation: pyr-spark-travel 2.2s linear infinite;
  }

  .pyr-spk1 {
    offset-path: path("M 15 24 Q 45 24 68 24");
    animation-delay: 0s;
  }

  .pyr-spk2 {
    offset-path: path("M 20 18 Q 45 16 65 14");
    animation-delay: 1.1s;
  }

  @keyframes pyr-spark-travel {
    0% { offset-distance: 0%; opacity: 0; }
    15% { opacity: 1; }
    85% { opacity: 1; }
    100% { offset-distance: 100%; opacity: 0; }
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

          <div class="pyr-bio-spark pyr-spk1"></div>
          <div class="pyr-bio-spark pyr-spk2"></div>

          <svg class="pyr-body-svg" viewBox="0 0 86 48">
            <!-- Transparent sheath -->
            <path d="M 10 24 Q 25 10 70 8 Q 78 24 70 40 Q 25 38 10 24 Z" fill="rgba(0, 255, 204, 0.14)" stroke="#00ffcc" stroke-width="1.4" />
            <!-- Open cloacal aperture ring at right -->
            <ellipse cx="70" cy="24" rx="4" ry="16" fill="rgba(0, 255, 204, 0.3)" stroke="#ffffff" stroke-width="1.2" />
            <!-- Individual bioluminescent zooid rows -->
            <path d="M 20 18 Q 45 16 65 14" fill="none" stroke="#64ffda" stroke-width="2.5" stroke-dasharray="3 4" />
            <path d="M 15 24 Q 45 24 68 24" fill="none" stroke="#64ffda" stroke-width="2.5" stroke-dasharray="3 4" />
            <path d="M 20 30 Q 45 32 65 34" fill="none" stroke="#64ffda" stroke-width="2.5" stroke-dasharray="3 4" />
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
