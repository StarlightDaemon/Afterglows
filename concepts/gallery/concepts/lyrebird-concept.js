const lyrebirdStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .lb-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 60%, #1a150b 0%, #080602 100%);
    border: 1.5px solid rgba(255, 171, 64, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 171, 64, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lb-stage {
    position: relative;
    width: 96px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Display mound / forest log */
  .lb-mound {
    position: absolute;
    bottom: 8px;
    width: 82px;
    height: 12px;
    background: #2b1a0a;
    border-top: 1.5px solid #ffab40;
    border-radius: 4px 4px 0 0;
  }

  /* Lyrebird Body */
  .lb-body {
    position: absolute;
    bottom: 16px;
    width: 20px;
    height: 14px;
    background: #4e342e;
    border: 1.2px solid #ffab40;
    border-radius: 50% 50% 30% 30%;
    z-index: 4;
  }

  .lb-head {
    position: absolute;
    top: -6px;
    right: -4px;
    width: 10px;
    height: 8px;
    background: #3e2723;
    border: 1px solid #ffe082;
    border-radius: 50%;
  }

  /* S-shaped outer Lyre tail feathers curving overhead */
  .lb-tail-svg {
    position: absolute;
    bottom: 22px;
    width: 68px;
    height: 48px;
    transform-origin: center bottom;
    animation: lb-tail-quiver 0.3s ease-in-out infinite alternate;
  }

  @keyframes lb-tail-quiver {
    0% { transform: rotate(-2deg) scale(0.98); }
    100% { transform: rotate(2deg) scale(1.02); }
  }

  /* Acoustic mimicry waveform rings */
  .lb-sound-waves {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1.2px dashed #ffe082;
    animation: lb-ring-pulse 1.4s ease-out infinite;
    pointer-events: none;
  }

  @keyframes lb-ring-pulse {
    0% { transform: scale(0.2); opacity: 1; }
    100% { transform: scale(1.8); opacity: 0; }
  }

  .lb-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 171, 64, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptLyrebird extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${lyrebirdStyles}</style>
      <div class="lb-box">
        <div class="lb-stage">
          <div class="lb-mound"></div>
          <div class="lb-sound-waves"></div>

          <svg class="lb-tail-svg" viewBox="0 0 68 48">
            <!-- Left lyrical S-feather -->
            <path d="M 34 46 C 20 40, 4 30, 8 12 C 10 2, 22 8, 26 18" fill="none" stroke="#ffe082" stroke-width="2" stroke-linecap="round" />
            <!-- Right lyrical S-feather -->
            <path d="M 34 46 C 48 40, 64 30, 60 12 C 58 2, 46 8, 42 18" fill="none" stroke="#ffe082" stroke-width="2" stroke-linecap="round" />
            <!-- Filamentous white gauze plumes in canopy -->
            <path d="M 34 46 Q 24 16 18 6" fill="none" stroke="rgba(255, 255, 255, 0.6)" stroke-width="1" stroke-dasharray="2 2" />
            <path d="M 34 46 Q 34 10 34 2" fill="none" stroke="rgba(255, 255, 255, 0.8)" stroke-width="1" stroke-dasharray="2 2" />
            <path d="M 34 46 Q 44 16 50 6" fill="none" stroke="rgba(255, 255, 255, 0.6)" stroke-width="1" stroke-dasharray="2 2" />
          </svg>

          <div class="lb-body">
            <div class="lb-head"></div>
          </div>
        </div>

        <div class="lb-label">SUPERB LYREBIRD</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-lyrebird')) {
  customElements.define('concept-lyrebird', ConceptLyrebird);
}
