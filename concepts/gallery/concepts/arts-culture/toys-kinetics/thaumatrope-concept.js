const thaumatropeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .thm {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020904;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Tensioned twirled side strings */
  .thm-string-l {
    position: absolute;
    left: 4px;
    top: 50px;
    width: 24px;
    height: 2px;
    background: #8cffaa;
    box-shadow: 0 0 4px #8cffaa;
    animation: thm-string-vibrate 0.15s ease-in-out infinite alternate;
  }

  .thm-string-r {
    position: absolute;
    right: 4px;
    top: 50px;
    width: 24px;
    height: 2px;
    background: #8cffaa;
    box-shadow: 0 0 4px #8cffaa;
    animation: thm-string-vibrate 0.15s ease-in-out infinite alternate;
  }

  @keyframes thm-string-vibrate {
    0% { transform: translateY(-1.5px); }
    100% { transform: translateY(1.5px); }
  }

  /* Rapidly spinning 3D circular disk */
  .thm-disc-rig {
    position: relative;
    width: 60px;
    height: 60px;
    transform-style: preserve-3d;
    animation: thm-spin 0.45s linear infinite;
  }

  @keyframes thm-spin {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
  }

  /* Disc face (circular cardboard) */
  .thm-face {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #031c08 0%, #010c04 100%);
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: visible;
  }

  /* Face A: Birdcage */
  .thm-cage-svg {
    position: absolute;
    width: 38px;
    height: 38px;
    filter: drop-shadow(0 0 2px #8cffaa);
  }

  /* Face B: Canary Bird */
  .thm-bird-svg {
    position: absolute;
    width: 28px;
    height: 28px;
    filter: drop-shadow(0 0 4px #ffffff);
  }

  /* Optical persistence overlay label */
  .thm-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptThaumatrope extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${thaumatropeStyles}</style>
      <div class="thm">
        <div class="thm-string-l"></div>
        <div class="thm-string-r"></div>

        <div class="thm-disc-rig">
          <div class="thm-face">
            <!-- Superimposed birdcage -->
            <svg class="thm-cage-svg" viewBox="0 0 38 38">
              <ellipse cx="19" cy="30" rx="14" ry="4" stroke="#d6ffe0" stroke-width="1.2" fill="none" />
              <path d="M 5 30 C 5 12 12 6 19 6 C 26 6 33 12 33 30" stroke="#d6ffe0" stroke-width="1.2" fill="none" />
              <line x1="12" y1="9" x2="12" y2="30" stroke="#8cffaa" stroke-width="1" />
              <line x1="19" y1="6" x2="19" y2="30" stroke="#8cffaa" stroke-width="1" />
              <line x1="26" y1="9" x2="26" y2="30" stroke="#8cffaa" stroke-width="1" />
              <circle cx="19" cy="4" r="2" stroke="#ffffff" stroke-width="1" fill="none" />
            </svg>

            <!-- Superimposed bird -->
            <svg class="thm-bird-svg" viewBox="0 0 28 28">
              <path d="M 8 16 C 8 10 14 8 18 10 C 22 12 24 18 20 20 C 16 22 10 20 8 16 Z" fill="#8cffaa" />
              <circle cx="19" cy="11" r="1.5" fill="#ffffff" />
              <!-- Wing -->
              <path d="M 12 14 C 14 10 18 12 16 17 Z" fill="#ffffff" />
              <!-- Beak -->
              <polygon points="21,11 25,12 21,14" fill="#ffffff" />
            </svg>
          </div>
        </div>

        <div class="thm-label">PERSISTENCE OF VISION</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-thaumatrope')) {
  customElements.define('concept-thaumatrope', ConceptThaumatrope);
}
