const magnusStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d1a20 0%, #04090d 100%);
    overflow: hidden;
  }

  .canvas-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Rotating Cylinder Core */
  .cylinder-rotor {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #00ffcc, #008877 60%, #003322 100%);
    border: 1.5px solid #00ffcc;
    box-shadow: 0 0 10px rgba(0, 255, 204, 0.4);
    z-index: 8;
  }

  .spin-arrow-svg {
    position: absolute;
    inset: -6px;
    width: 36px;
    height: 36px;
    animation: spin-ccw 2s linear infinite;
    z-index: 9;
  }

  /* Fluid Streamlines SVG */
  .streamline-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
  }

  /* Accelerated Top Streamlines (High velocity, Low pressure) */
  .stream-top {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1.4;
    stroke-dasharray: 6 3;
    animation: flow-top 0.5s linear infinite;
  }

  /* Decelerated Bottom Streamlines (Low velocity, High pressure) */
  .stream-bot {
    fill: none;
    stroke: #00aaff;
    stroke-width: 1.2;
    stroke-dasharray: 4 4;
    animation: flow-bot 1.2s linear infinite;
  }

  /* Upward Lift Force Vector */
  .vec-lift {
    position: absolute;
    bottom: 74px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 26px;
    background: #ff5577;
    box-shadow: 0 0 6px #ff5577;
    z-index: 10;
  }

  .vec-lift::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -3px;
    border: 4px solid transparent;
    border-bottom-color: #ff5577;
  }

  .lift-label {
    position: absolute;
    top: 20px;
    left: 72px;
    font-size: 6px;
    font-family: monospace;
    font-weight: bold;
    color: #ff5577;
  }

  .pressure-top {
    position: absolute;
    top: 40px;
    left: 20px;
    font-size: 5px;
    font-family: monospace;
    color: #00ff66;
  }

  .pressure-bot {
    position: absolute;
    bottom: 30px;
    left: 20px;
    font-size: 5px;
    font-family: monospace;
    color: #00aaff;
  }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 6px;
    font-family: monospace;
    color: rgba(0, 255, 204, 0.85);
    z-index: 10;
  }

  @keyframes spin-ccw {
    from { transform: rotate(0deg); }
    to { transform: rotate(-360deg); }
  }

  @keyframes flow-top {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -18; }
  }

  @keyframes flow-bot {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -16; }
  }
`;

class PhysicsMagnusEffect extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${magnusStyles}</style>
      <div class="canvas-box">
        <div class="cylinder-rotor">
          <svg class="spin-arrow-svg" viewBox="0 0 36 36">
            <path d="M 18 4 A 14 14 0 0 0 4 18" fill="none" stroke="#ffffff" stroke-width="1.5" />
            <polygon points="4,13 4,19 10,19" fill="#ffffff" />
          </svg>
        </div>

        <svg class="streamline-svg" viewBox="0 0 130 130">
          <!-- Top Compressed High-Speed Streamlines -->
          <path d="M 8 36 C 40 36, 50 30, 65 30 C 80 30, 90 42, 122 46" class="stream-top" />
          <path d="M 8 46 C 40 46, 52 40, 65 40 C 78 40, 90 56, 122 60" class="stream-top" />

          <!-- Bottom Deflected Downward Streamlines -->
          <path d="M 8 78 C 40 78, 50 90, 65 90 C 80 90, 90 84, 122 88" class="stream-bot" />
          <path d="M 8 88 C 40 88, 50 100, 65 100 C 80 100, 90 94, 122 98" class="stream-bot" />
        </svg>

        <div class="vec-lift"></div>
        <span class="lift-label">F_LIFT</span>
        <span class="pressure-top">-ΔP (v_high)</span>
        <span class="pressure-bot">+ΔP (v_low)</span>

        <div class="hud">
          <span>F_L = ρ v_∞ × Γ</span>
          <span>Γ = 2π r² ω</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-magnus-effect')) {
  customElements.define('physics-magnus-effect', PhysicsMagnusEffect);
}
