const rutherfordStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rth {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151105 0%, #060401 100%);
    border: 1.5px solid rgba(255, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Scattering chamber apparatus */
  .rth-chamber {
    position: relative;
    width: 86px;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Zinc sulfide scintillation detector ring */
  .rth-detector-ring {
    position: absolute;
    width: 76px;
    height: 76px;
    border-radius: 50%;
    border: 1.5px dashed rgba(255, 220, 100, 0.4);
  }

  /* Alpha particle collimated emitter source */
  .rth-emitter {
    position: absolute;
    left: 4px;
    top: 50%;
    width: 12px;
    height: 14px;
    margin-top: -7px;
    background: #3d2805;
    border: 1.2px solid #ffcc00;
    border-radius: 2px;
    box-shadow: 0 0 6px rgba(255, 204, 0, 0.4);
    z-index: 6;
  }

  /* Dense positive Gold atomic nucleus (+79e) */
  .rth-gold-nucleus {
    position: absolute;
    top: 50%;
    left: 48px;
    width: 12px;
    height: 12px;
    margin: -6px 0 0 -6px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #ffaa00;
    box-shadow: 0 0 12px #ffea00, 0 0 20px #ff7700;
    z-index: 7;
    animation: rth-nuc-glow 1.5s ease-in-out infinite alternate;
  }

  @keyframes rth-nuc-glow {
    0% { transform: scale(0.85); }
    100% { transform: scale(1.2); filter: brightness(1.4); }
  }

  /* Alpha particle 1: Undeflected straight transmission */
  .rth-alpha-straight {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffd54f;
    z-index: 6;
    animation: rth-shoot-straight 1.6s linear infinite;
  }

  @keyframes rth-shoot-straight {
    0% { transform: translate(-30px, -15px) scale(0.6); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(32px, -15px) scale(1.2); opacity: 0; }
  }

  /* Alpha particle 2: Coulomb hyperbolic backscatter */
  .rth-alpha-scatter {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 12px #ff7700;
    z-index: 6;
    offset-path: path("M 16 36 Q 44 36 34 14");
    animation: rth-deflect-flow 1.8s linear infinite;
  }

  @keyframes rth-deflect-flow {
    0% { offset-distance: 0%; opacity: 0; }
    15% { opacity: 1; }
    85% { opacity: 1; }
    100% { offset-distance: 100%; opacity: 0; }
  }

  /* Alpha trajectories SVG */
  .rth-paths-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .rth-straight {
    fill: none;
    stroke: rgba(255, 235, 120, 0.5);
    stroke-width: 1.2;
    stroke-dasharray: 4 2;
  }

  .rth-deflected {
    fill: none;
    stroke: #ffffff;
    stroke-width: 1.6;
    filter: drop-shadow(0 0 4px #ffcc00);
  }

  /* Scintillation flash on detector screen */
  .rth-flash {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #ffffff, 0 0 16px #ffff00;
    animation: rth-scintillate 1.8s steps(1) infinite;
  }

  .fl-1 { top: 10px; left: 32px; animation-delay: 1.5s; }
  .fl-2 { top: 50%; right: 4px; margin-top: -3px; animation-delay: 1.3s; }

  @keyframes rth-scintillate {
    0%, 80% { opacity: 0; transform: scale(0.4); }
    81%, 95% { opacity: 1; transform: scale(1.6); }
    96%, 100% { opacity: 0; }
  }

  .rth-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 204, 100, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptRutherfordScattering extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${rutherfordStyles}</style>
      <div class="rth">
        <div class="rth-chamber">
          <div class="rth-detector-ring"></div>
          <div class="rth-emitter"></div>
          <div class="rth-gold-nucleus"></div>

          <div class="rth-alpha-straight"></div>
          <div class="rth-alpha-scatter"></div>

          <svg class="rth-paths-svg" viewBox="0 0 86 74">
            <!-- Undeflected alpha trajectories passing through vacuum -->
            <path class="rth-straight" d="M 16 22 L 78 22" />
            <path class="rth-straight" d="M 16 52 L 78 52" />
            <path class="rth-straight" d="M 16 30 Q 48 31 78 33" />
            
            <!-- Severe Coulomb hyperbolic backscattering trajectory -->
            <path class="rth-deflected" d="M 16 36 Q 44 36 34 14" />
          </svg>

          <div class="rth-flash fl-1"></div>
          <div class="rth-flash fl-2"></div>
        </div>

        <div class="rth-label">RUTHERFORD SCATTERING</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-rutherford-scattering')) {
  customElements.define('concept-rutherford-scattering', ConceptRutherfordScattering);
}
