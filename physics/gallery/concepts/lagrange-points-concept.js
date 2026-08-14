const lagrangeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d1020 0%, #04050a 100%);
    overflow: hidden;
  }

  .lagrange-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Orbit circle track */
  .system-orbit {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px dashed rgba(0, 229, 255, 0.25);
  }

  /* Gravitational Roche lobe potential contours */
  .potential-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0.35;
  }

  /* Rotating coordinate frame */
  .system-frame {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: rotate-frame 6s linear infinite;
  }

  /* Primary Star M1 */
  .star-m1 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 14px;
    height: 14px;
    margin: -7px 0 0 -7px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff, #ffaa00 60%, #cc4400 100%);
    box-shadow: 0 0 10px #ffaa00, 0 0 18px rgba(255, 170, 0, 0.5);
    z-index: 6;
  }

  /* Secondary Planet M2 */
  .planet-m2 {
    position: absolute;
    top: 50%;
    left: 105px;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #ffffff, #00e5ff 60%, #004466 100%);
    box-shadow: 0 0 8px #00e5ff;
    z-index: 6;
  }

  /* Lagrange points markers */
  .l-point {
    position: absolute;
    font-size: 6px;
    font-family: monospace;
    font-weight: bold;
    color: #ff3388;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .l-cross {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ff3388;
    box-shadow: 0 0 6px #ff3388;
    margin-right: 2px;
  }

  /* L1 between M1 and M2 */
  .l1 { top: 62px; left: 88px; }
  /* L2 outside M2 */
  .l2 { top: 62px; left: 118px; }
  /* L3 opposite M2 */
  .l3 { top: 62px; left: 14px; }
  /* L4 60 deg ahead */
  .l4 { top: 25px; left: 82px; }
  /* L5 60 deg behind */
  .l5 { top: 98px; left: 82px; }

  /* Trojan satellite oscillating in tadpole orbit around L4 */
  .trojan-satellite {
    position: absolute;
    top: 25px;
    left: 82px;
    width: 14px;
    height: 14px;
    margin: -7px 0 0 -7px;
    border: 1px dotted rgba(255, 255, 0, 0.5);
    border-radius: 50%;
    animation: trojan-orbit 1.8s linear infinite;
  }

  .trojan-body {
    position: absolute;
    top: -2px;
    left: 50%;
    width: 4px;
    height: 4px;
    margin-left: -2px;
    border-radius: 50%;
    background: #ffff00;
    box-shadow: 0 0 6px #ffff00;
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
    color: rgba(255, 51, 136, 0.8);
    z-index: 10;
  }

  @keyframes rotate-frame {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes trojan-orbit {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

class PhysicsLagrangePoints extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${lagrangeStyles}</style>
      <div class="lagrange-box">
        <div class="system-orbit"></div>

        <div class="system-frame">
          <svg class="potential-svg" viewBox="0 0 130 130">
            <!-- Equilateral lines Star -> M2 -> L4 -->
            <polygon points="65,65 105,65 85,30" fill="none" stroke="rgba(255, 255, 0, 0.2)" stroke-dasharray="2 2" />
            <polygon points="65,65 105,65 85,100" fill="none" stroke="rgba(255, 255, 0, 0.2)" stroke-dasharray="2 2" />
          </svg>

          <div class="star-m1"></div>
          <div class="planet-m2"></div>

          <div class="l-point l1"><div class="l-cross"></div>L1</div>
          <div class="l-point l2"><div class="l-cross"></div>L2</div>
          <div class="l-point l3"><div class="l-cross"></div>L3</div>
          <div class="l-point l4"><div class="l-cross"></div>L4</div>
          <div class="l-point l5"><div class="l-cross"></div>L5</div>

          <div class="trojan-satellite">
            <div class="trojan-body"></div>
          </div>
        </div>

        <div class="hud">
          <span>RESTRICTED 3-BODY</span>
          <span>L1-L5 EQUILIBRIUM</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-lagrange-points')) {
  customElements.define('physics-lagrange-points', PhysicsLagrangePoints);
}
