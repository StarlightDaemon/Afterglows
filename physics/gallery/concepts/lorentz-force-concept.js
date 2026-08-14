const lorentzStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #100a20 0%, #04020a 100%);
    overflow: hidden;
  }

  .chamber-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Uniform B-field grid (into page ⊗) */
  .b-field-grid {
    position: absolute;
    inset: 12px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    place-items: center;
    opacity: 0.25;
  }

  .b-cross {
    font-size: 8px;
    font-family: monospace;
    color: #ff00ff;
  }

  /* Cyclotron spiral orbit SVG */
  .spiral-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .spiral-track {
    fill: none;
    stroke: rgba(0, 255, 200, 0.3);
    stroke-width: 1.2;
    stroke-dasharray: 2 3;
  }

  /* Charged particle in cyclotron orbit */
  .cyclotron-runner {
    position: absolute;
    inset: 0;
    offset-path: path("M 65 65 m -38, 0 a 38,38 0 1,0 76,0 a 38,38 0 1,0 -76,0");
    animation: cyclotron-orbit 2.4s linear infinite;
  }

  .particle-node {
    position: absolute;
    width: 10px;
    height: 10px;
    margin: -5px 0 0 -5px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff, #00ffcc 60%, #004433 100%);
    box-shadow: 0 0 10px #00ffcc, 0 0 18px rgba(0, 255, 204, 0.7);
  }

  /* Inward Lorentz Force vector */
  .vec-fl {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 1.5px;
    background: #ff007f;
    box-shadow: 0 0 4px #ff007f;
    transform-origin: left center;
    transform: rotate(180deg);
  }

  .vec-fl::after {
    content: '';
    position: absolute;
    right: 0;
    top: -2.5px;
    border: 3px solid transparent;
    border-left-color: #ff007f;
  }

  .fl-label {
    position: absolute;
    top: -9px;
    left: 4px;
    font-size: 6px;
    font-family: monospace;
    color: #ff007f;
    font-weight: bold;
  }

  .b-label {
    position: absolute;
    top: 14px;
    right: 14px;
    font-size: 6.5px;
    font-family: monospace;
    color: #ff00ff;
  }

  .hud {
    position: absolute;
    bottom: 4px;
    left: 6px;
    right: 6px;
    display: flex;
    justify-content: space-between;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 255, 200, 0.8);
    z-index: 10;
  }

  @keyframes cyclotron-orbit {
    0% { offset-distance: 0%; }
    100% { offset-distance: 100%; }
  }
`;

class PhysicsLorentzForce extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${lorentzStyles}</style>
      <div class="chamber-box">
        <div class="b-field-grid">
          <span class="b-cross">⊗</span><span class="b-cross">⊗</span><span class="b-cross">⊗</span><span class="b-cross">⊗</span>
          <span class="b-cross">⊗</span><span class="b-cross">⊗</span><span class="b-cross">⊗</span><span class="b-cross">⊗</span>
          <span class="b-cross">⊗</span><span class="b-cross">⊗</span><span class="b-cross">⊗</span><span class="b-cross">⊗</span>
          <span class="b-cross">⊗</span><span class="b-cross">⊗</span><span class="b-cross">⊗</span><span class="b-cross">⊗</span>
        </div>

        <span class="b-label">B ⊗ (IN)</span>

        <svg class="spiral-svg" viewBox="0 0 130 130">
          <circle class="spiral-track" cx="65" cy="65" r="38" />
        </svg>

        <div class="cyclotron-runner">
          <div class="particle-node">
            <div class="vec-fl">
              <span class="fl-label">F_L</span>
            </div>
          </div>
        </div>

        <div class="hud">
          <span>LORENTZ FORCE</span>
          <span>F = q(v × B)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-lorentz-force')) {
  customElements.define('physics-lorentz-force', PhysicsLorentzForce);
}
