const bullroarerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .br-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201309 0%, #080402 100%);
    border: 1.5px solid rgba(255, 167, 38, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 167, 38, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .br-stage {
    position: relative;
    width: 86px;
    height: 86px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Whirling cord radius arm */
  .br-rotor {
    position: absolute;
    width: 76px;
    height: 76px;
    animation: br-spin-orbit 1.2s linear infinite;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes br-spin-orbit {
    to { transform: rotate(360deg); }
  }

  /* Tether fiber cord */
  .br-cord {
    position: absolute;
    top: 6px;
    left: 37px;
    width: 2px;
    height: 32px;
    background: #ffb74d;
    box-shadow: 0 0 4px #ffa726;
  }

  /* Carved aerofoil wooden bullroarer blade (spins on axis) */
  .br-blade {
    position: absolute;
    top: 4px;
    left: 31px;
    width: 14px;
    height: 32px;
    background: linear-gradient(90deg, #5d4037 0%, #8d6e63 50%, #3e2723 100%);
    border: 1px solid #ffe082;
    border-radius: 50% 50% 50% 50% / 80% 80% 20% 20%;
    box-shadow: 0 0 6px rgba(255, 183, 77, 0.6);
    animation: br-blade-flutter 0.15s linear infinite alternate;
  }

  @keyframes br-blade-flutter {
    0% { transform: scaleX(0.4) rotate(4deg); }
    100% { transform: scaleX(1) rotate(-4deg); }
  }

  /* Whirling acoustic pressure hum rings */
  .br-hum-ring {
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    border: 1.5px dashed rgba(255, 183, 77, 0.35);
    animation: br-pulse-hum 1.2s ease-out infinite;
    pointer-events: none;
  }

  @keyframes br-pulse-hum {
    0% { transform: scale(0.4); opacity: 1; }
    100% { transform: scale(1.15); opacity: 0; }
  }

  /* Hand pivot axle at center */
  .br-center-pivot {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #ffb74d;
    box-shadow: 0 0 6px #ffb74d;
    z-index: 5;
  }

  .br-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 167, 38, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptBullroarer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bullroarerStyles}</style>
      <div class="br-box">
        <div class="br-stage">
          <div class="br-hum-ring"></div>

          <div class="br-rotor">
            <div class="br-cord"></div>
            <div class="br-blade"></div>
          </div>

          <div class="br-center-pivot"></div>
        </div>

        <div class="br-label">AERODYNAMIC BULLROARER</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-bullroarer')) {
  customElements.define('concept-bullroarer', ConceptBullroarer);
}
