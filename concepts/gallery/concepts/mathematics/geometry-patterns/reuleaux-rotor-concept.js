const reuleauxStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rr-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0d1e0d 0%, #020802 100%);
    border: 1.5px solid rgba(118, 255, 3, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(118, 255, 3, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rr-stage {
    position: relative;
    width: 74px;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Square bore bounding frame */
  .rr-square-frame {
    position: absolute;
    width: 58px;
    height: 58px;
    border: 1.5px solid #76ff03;
    box-shadow: inset 0 0 8px rgba(118, 255, 3, 0.3);
  }

  /* Reuleaux triangle rotor in eccentric orbital spin */
  .rr-rotor-orbit {
    position: absolute;
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: rr-orbit-wobble 3s linear infinite;
  }

  @keyframes rr-orbit-wobble {
    0% { transform: translate(-2px, -2px) rotate(0deg); }
    25% { transform: translate(2px, -2px) rotate(90deg); }
    50% { transform: translate(2px, 2px) rotate(180deg); }
    75% { transform: translate(-2px, 2px) rotate(270deg); }
    100% { transform: translate(-2px, -2px) rotate(360deg); }
  }

  .rr-rotor-svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 6px rgba(118, 255, 3, 0.6));
  }

  /* Center drive arbor */
  .rr-center-pin {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #76ff03;
    box-shadow: 0 0 4px #76ff03;
  }

  .rr-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(118, 255, 3, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptReuleauxRotor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${reuleauxStyles}</style>
      <div class="rr-box">
        <div class="rr-stage">
          <div class="rr-square-frame"></div>

          <div class="rr-rotor-orbit">
            <svg class="rr-rotor-svg" viewBox="-30 -30 60 60">
              <!-- Reuleaux triangle (3 circular arcs with radius equal to side width) -->
              <path d="M 0 -26 A 45 45 0 0 1 22.5 13 A 45 45 0 0 1 -22.5 13 A 45 45 0 0 1 0 -26 Z" fill="rgba(118, 255, 3, 0.25)" stroke="#76ff03" stroke-width="1.8" />
            </svg>

            <div class="rr-center-pin"></div>
          </div>
        </div>

        <div class="rr-label">REULEAUX ROTOR</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-reuleaux-rotor')) {
  customElements.define('concept-reuleaux-rotor', ConceptReuleauxRotor);
}
