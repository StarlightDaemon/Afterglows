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
    width: 10px;
    height: 10px;
    margin: -5px 0 0 -5px;
    border-radius: 50%;
    background: #ffffff;
    border: 1.5px solid #ffaa00;
    box-shadow: 0 0 10px #ffea00, 0 0 18px #ff7700;
    z-index: 7;
    animation: rth-nuc-glow 1.5s ease-in-out infinite alternate;
  }

  @keyframes rth-nuc-glow {
    0% { transform: scale(0.9); }
    100% { transform: scale(1.15); filter: brightness(1.4); }
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
    stroke: rgba(255, 235, 120, 0.7);
    stroke-width: 1.2;
    stroke-dasharray: 4 2;
    animation: rth-stream 1s linear infinite;
  }

  .rth-deflected {
    fill: none;
    stroke: #ffffff;
    stroke-width: 1.5;
    stroke-dasharray: 4 2;
    filter: drop-shadow(0 0 4px #ffcc00);
    animation: rth-stream 0.8s linear infinite;
  }

  @keyframes rth-stream {
    to { stroke-dashoffset: -12; }
  }

  /* Scintillation flash on detector screen */
  .rth-flash {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff;
    animation: rth-scintillate 1.8s steps(1) infinite;
  }

  .fl-1 { top: 12px; left: 34px; animation-delay: 0.2s; }
  .fl-2 { top: 50%; right: 4px; margin-top: -2.5px; animation-delay: 0.6s; }

  @keyframes rth-scintillate {
    0%, 90% { opacity: 0; transform: scale(0.5); }
    91%, 96% { opacity: 1; transform: scale(1.4); }
    97%, 100% { opacity: 0; }
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
