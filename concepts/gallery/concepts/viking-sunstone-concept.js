const sunstoneStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ss-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 40%, #0d1b2a 0%, #03070d 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ss-stage {
    position: relative;
    width: 96px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Overcast arctic sea storm background */
  .ss-horizon {
    position: absolute;
    bottom: 8px;
    width: 88px;
    height: 14px;
    background: linear-gradient(180deg, #1b263b 0%, #0a1118 100%);
    border-top: 1px dashed rgba(0, 229, 255, 0.3);
  }

  /* Rayleigh sky polarization angle compass ring */
  .ss-pol-ring {
    position: absolute;
    top: 6px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px dashed rgba(0, 229, 255, 0.35);
    animation: ss-ring-turn 10s linear infinite;
  }

  @keyframes ss-ring-turn {
    to { transform: rotate(360deg); }
  }

  /* Rhombohedral Calcite Sunstone Crystal held in bronze mounting */
  .ss-crystal {
    position: absolute;
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(0, 229, 255, 0.25) 50%, rgba(255, 215, 0, 0.4) 100%);
    border: 1.5px solid #ffffff;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.8), inset 0 0 8px rgba(255, 215, 0, 0.6);
    clip-path: polygon(25% 0%, 100% 15%, 75% 100%, 0% 85%);
    animation: ss-crystal-rotate 6s ease-in-out infinite alternate;
  }

  @keyframes ss-crystal-rotate {
    0% { transform: rotate(-18deg) scale(0.95); }
    100% { transform: rotate(18deg) scale(1.05); }
  }

  /* Dual polarized light spots (extinction null point alignment) */
  .ss-dot-pair {
    position: absolute;
    display: flex;
    gap: 12px;
    animation: ss-dots-fuse 6s ease-in-out infinite alternate;
  }

  @keyframes ss-dots-fuse {
    0% { opacity: 0.4; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1.3); }
  }

  .ss-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffd700;
    box-shadow: 0 0 6px #ffd700;
  }

  .ss-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptVikingSunstone extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${sunstoneStyles}</style>
      <div class="ss-box">
        <div class="ss-stage">
          <div class="ss-horizon"></div>
          <div class="ss-pol-ring"></div>

          <div class="ss-crystal"></div>

          <div class="ss-dot-pair">
            <div class="ss-dot"></div>
            <div class="ss-dot"></div>
          </div>
        </div>

        <div class="ss-label">VIKING SUNSTONE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-viking-sunstone')) {
  customElements.define('concept-viking-sunstone', ConceptVikingSunstone);
}
