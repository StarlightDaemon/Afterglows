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
    width: 96px;
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
    left: 8px;
    top: 4px;
    bottom: 4px;
    width: 3px;
    background: #ffffff;
    border-radius: 1px;
  }

  .aeo-bridge-r {
    position: absolute;
    right: 8px;
    top: 4px;
    bottom: 4px;
    width: 3px;
    background: #ffffff;
    border-radius: 1px;
  }

  /* Tensioned harmonic strings vibrating with standing wave arcs */
  .aeo-strings-rig {
    position: absolute;
    left: 10px;
    right: 10px;
    top: 6px;
    bottom: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .aeo-string {
    position: relative;
    width: 100%;
    height: 2.5px;
    background: #d6ffe0;
    box-shadow: 0 0 6px #8cffaa;
    border-radius: 1px;
  }

  .aeo-string.s1 { animation: aeo-wave-1 0.4s ease-in-out infinite alternate; }
  .aeo-string.s2 { animation: aeo-wave-2 0.32s ease-in-out infinite alternate; }
  .aeo-string.s3 { animation: aeo-wave-3 0.48s ease-in-out infinite alternate; }
  .aeo-string.s4 { animation: aeo-wave-4 0.36s ease-in-out infinite alternate; }

  @keyframes aeo-wave-1 {
    0% { transform: translateY(-3.5px) scaleY(1.4); }
    100% { transform: translateY(3.5px) scaleY(0.7); }
  }
  @keyframes aeo-wave-2 {
    0% { transform: translateY(4px) scaleY(0.8); }
    100% { transform: translateY(-4px) scaleY(1.3); }
  }
  @keyframes aeo-wave-3 {
    0% { transform: translateY(-4.5px) scaleY(1.5); }
    100% { transform: translateY(4.5px) scaleY(0.6); }
  }
  @keyframes aeo-wave-4 {
    0% { transform: translateY(3.5px) scaleY(0.7); }
    100% { transform: translateY(-3.5px) scaleY(1.4); }
  }

  /* Traveling Karman vortex wind packets */
  .aeo-vortex {
    position: absolute;
    width: 14px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff 0%, rgba(140, 255, 170, 0.8) 50%, transparent 80%);
    box-shadow: 0 0 8px #8cffaa;
    pointer-events: none;
    z-index: 5;
  }

  .aeo-vortex.v1 {
    top: 26px;
    animation: aeo-drift-1 1.6s linear infinite;
  }

  .aeo-vortex.v2 {
    top: 48px;
    animation: aeo-drift-2 2.1s linear infinite;
    animation-delay: 0.7s;
  }

  .aeo-vortex.v3 {
    top: 66px;
    animation: aeo-drift-1 1.9s linear infinite;
    animation-delay: 1.1s;
  }

  @keyframes aeo-drift-1 {
    0% { transform: translateX(-15px) rotate(0deg); opacity: 0; }
    20% { opacity: 0.9; }
    80% { opacity: 0.9; }
    100% { transform: translateX(115px) rotate(360deg); opacity: 0; }
  }

  @keyframes aeo-drift-2 {
    0% { transform: translateX(-15px) rotate(0deg); opacity: 0; }
    20% { opacity: 0.9; }
    80% { opacity: 0.9; }
    100% { transform: translateX(115px) rotate(-360deg); opacity: 0; }
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
        <div class="aeo-vortex v1"></div>
        <div class="aeo-vortex v2"></div>
        <div class="aeo-vortex v3"></div>

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
