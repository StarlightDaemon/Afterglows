const stellaratorStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .st-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #150926 0%, #04010a 100%);
    border: 1.5px solid rgba(213, 0, 249, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(213, 0, 249, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .st-stage {
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: st-torus-rotate 3.6s linear infinite;
  }

  @keyframes st-torus-rotate {
    to { transform: rotate(360deg); }
  }

  .st-torus-svg {
    width: 100%;
    height: 100%;
  }

  /* Non-axisymmetric twisted modular coil rings */
  .st-twisted-coil {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1.6;
    opacity: 0.8;
  }

  /* Superheated burning helical plasma ribbon */
  .st-plasma-core {
    fill: none;
    stroke: #ff1744;
    stroke-width: 3.8;
    stroke-linecap: round;
    filter: drop-shadow(0 0 6px #ff007f) drop-shadow(0 0 12px #d500f9);
    animation: st-plasma-spin 2.4s linear infinite;
  }

  @keyframes st-plasma-spin {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }

  /* Circulating high-energy fusion ion packet traversing twisted loop */
  .st-ion-spark {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #ffffff, 0 0 14px #ff007f;
    z-index: 7;
    animation: st-ion-orbit 2.2s linear infinite;
  }

  @keyframes st-ion-orbit {
    0% { transform: rotate(0deg) translate(24px) rotate(0deg); }
    100% { transform: rotate(360deg) translate(24px) rotate(-360deg); }
  }

  .st-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(213, 0, 249, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptStellarator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${stellaratorStyles}</style>
      <div class="st-box">
        <div class="st-stage">
          <div class="st-ion-spark"></div>

          <svg class="st-torus-svg" viewBox="-40 -40 80 80">
            <!-- Modular twisted magnetic field coils -->
            <ellipse class="st-twisted-coil" cx="0" cy="0" rx="30" ry="16" transform="rotate(0)" />
            <ellipse class="st-twisted-coil" cx="0" cy="0" rx="30" ry="16" transform="rotate(45)" />
            <ellipse class="st-twisted-coil" cx="0" cy="0" rx="30" ry="16" transform="rotate(90)" />
            <ellipse class="st-twisted-coil" cx="0" cy="0" rx="30" ry="16" transform="rotate(135)" />

            <!-- Helical stellarator plasma loop -->
            <path class="st-plasma-core" d="M -24 0 C -24 -18, 0 -26, 20 -10 C 32 0, 20 22, -4 20 C -20 18, -24 6, -24 0 Z" />
          </svg>
        </div>

        <div class="st-label">STELLARATOR TORUS</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-stellarator')) {
  customElements.define('concept-stellarator', ConceptStellarator);
}
