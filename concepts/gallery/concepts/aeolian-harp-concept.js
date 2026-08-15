const aeolianStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .aeo {
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

  /* Wooden resonator soundbox body */
  .aeo-box {
    position: relative;
    width: 92px;
    height: 64px;
    background: linear-gradient(180deg, #008818 0%, #011d06 100%);
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 4px;
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.3), 0 0 8px rgba(0, 204, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 6px;
    box-sizing: border-box;
  }

  /* Dual rosette soundholes */
  .aeo-soundhole {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #010602;
    border: 1px solid #d6ffe0;
    box-shadow: inset 0 0 6px rgba(0, 204, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .aeo-soundhole::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px dotted #8cffaa;
  }

  /* Bridges at ends */
  .aeo-bridge-l {
    position: absolute;
    left: 10px;
    top: 4px;
    bottom: 4px;
    width: 3px;
    background: #ffffff;
    border-radius: 1px;
  }

  .aeo-bridge-r {
    position: absolute;
    right: 10px;
    top: 4px;
    bottom: 4px;
    width: 3px;
    background: #ffffff;
    border-radius: 1px;
  }

  /* Tensioned harmonic strings vibrating with standing waves */
  .aeo-strings-rig {
    position: absolute;
    left: 12px;
    right: 12px;
    top: 6px;
    bottom: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .aeo-string {
    position: relative;
    width: 100%;
    height: 2px;
    background: #d6ffe0;
    box-shadow: 0 0 4px #8cffaa;
  }

  .aeo-string.s1 { animation: aeo-vibrate-1 0.18s ease-in-out infinite alternate; }
  .aeo-string.s2 { animation: aeo-vibrate-2 0.14s ease-in-out infinite alternate; }
  .aeo-string.s3 { animation: aeo-vibrate-3 0.22s ease-in-out infinite alternate; }
  .aeo-string.s4 { animation: aeo-vibrate-4 0.16s ease-in-out infinite alternate; }

  @keyframes aeo-vibrate-1 {
    0% { transform: scaleY(0.7) translateY(-1.5px); }
    100% { transform: scaleY(1.3) translateY(1.5px); }
  }
  @keyframes aeo-vibrate-2 {
    0% { transform: scaleY(1.3) translateY(1.8px); }
    100% { transform: scaleY(0.7) translateY(-1.8px); }
  }
  @keyframes aeo-vibrate-3 {
    0% { transform: scaleY(0.6) translateY(-2px); }
    100% { transform: scaleY(1.4) translateY(2px); }
  }
  @keyframes aeo-vibrate-4 {
    0% { transform: scaleY(1.4) translateY(1.6px); }
    100% { transform: scaleY(0.6) translateY(-1.6px); }
  }

  /* Gentle wind gust vortex streamlines blowing across strings */
  .aeo-breeze-svg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    animation: aeo-breeze 3s ease-in-out infinite alternate;
  }

  @keyframes aeo-breeze {
    0% { opacity: 0.3; transform: translateX(-4px); }
    100% { opacity: 0.8; transform: translateX(4px); }
  }

  /* Harmonic frequency overtone badge */
  .aeo-label {
    position: absolute;
    bottom: 4px;
    left: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptAeolianHarp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${aeolianStyles}</style>
      <div class="aeo">
        <svg class="aeo-breeze-svg" viewBox="0 0 118 102">
          <!-- Karman vortex wind paths -->
          <path d="M 8 30 Q 30 18 60 32 T 110 24" stroke="rgba(214, 255, 224, 0.35)" stroke-width="1" stroke-dasharray="3,3" fill="none" />
          <path d="M 8 70 Q 35 84 70 68 T 110 76" stroke="rgba(214, 255, 224, 0.35)" stroke-width="1" stroke-dasharray="3,3" fill="none" />
        </svg>

        <div class="aeo-box">
          <div class="aeo-bridge-l"></div>
          <div class="aeo-soundhole"></div>
          <div class="aeo-soundhole"></div>
          <div class="aeo-bridge-r"></div>

          <div class="aeo-strings-rig">
            <div class="aeo-string s1"></div>
            <div class="aeo-string s2"></div>
            <div class="aeo-string s3"></div>
            <div class="aeo-string s4"></div>
          </div>
        </div>

        <div class="aeo-label">WIND OVERTONES: 432 Hz</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-aeolian-harp')) {
  customElements.define('concept-aeolian-harp', ConceptAeolianHarp);
}
