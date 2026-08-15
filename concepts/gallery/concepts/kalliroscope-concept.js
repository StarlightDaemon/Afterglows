const kalliroscopeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ks-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0d1a29 0%, #02070e 100%);
    border: 1.5px solid rgba(144, 202, 249, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(144, 202, 249, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ks-stage {
    position: relative;
    width: 78px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Sealed circular acrylic chamber */
  .ks-chamber {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: radial-gradient(circle, #102a45 0%, #05101c 80%);
    border: 2px solid #90caf9;
    box-shadow: inset 0 0 12px rgba(144, 202, 249, 0.4), 0 0 10px rgba(144, 202, 249, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  /* Swirling rheoscopic platelet fluid streamlines */
  .ks-streamlines-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    animation: ks-swirl-rot 6s linear infinite;
  }

  @keyframes ks-swirl-rot {
    to { transform: rotate(360deg); }
  }

  .ks-shear-line {
    fill: none;
    stroke: rgba(255, 255, 255, 0.6);
    stroke-width: 1.2;
    stroke-dasharray: 6 3;
    animation: ks-flow-dash 2s linear infinite;
  }

  @keyframes ks-flow-dash {
    to { stroke-dashoffset: -18; }
  }

  /* Central shear vortex core */
  .ks-vortex-eye {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff 0%, rgba(144, 202, 249, 0.2) 80%);
    box-shadow: 0 0 8px #ffffff;
    animation: ks-eye-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes ks-eye-pulse {
    0% { transform: scale(0.8); opacity: 0.7; }
    100% { transform: scale(1.2); opacity: 1; }
  }

  .ks-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(144, 202, 249, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptKalliroscope extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${kalliroscopeStyles}</style>
      <div class="ks-box">
        <div class="ks-stage">
          <div class="ks-chamber">
            <svg class="ks-streamlines-svg" viewBox="-40 -40 80 80">
              <!-- Rheoscopic platelet shear eddies -->
              <path class="ks-shear-line" d="M 0 -34 C 18 -34, 34 -18, 34 0 C 34 16, 20 30, 0 30 C -16 30, -28 16, -28 0 C -28 -12, -16 -22, 0 -22 C 12 -22, 20 -12, 20 0 C 20 8, 12 14, 0 14 C -8 14, -12 8, -12 0 C -12 -4, -6 -6, 0 -6" />
              <path class="ks-shear-line" d="M 0 34 C -18 34, -34 18, -34 0 C -34 -16, -20 -30, 0 -30 C 16 -30, 28 -16, 28 0" style="animation-delay: -1s;" />
            </svg>

            <div class="ks-vortex-eye"></div>
          </div>
        </div>

        <div class="ks-label">KALLIROSCOPE FLOW</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-kalliroscope')) {
  customElements.define('concept-kalliroscope', ConceptKalliroscope);
}
