const springDamperStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 40% 40%, #06111a 0%, #02070c 100%);
    overflow: hidden;
  }

  .spring-container {
    width: 130px;
    height: 130px;
    position: relative;
  }

  /* Fixed mount ceiling */
  .ceiling-mount {
    position: absolute;
    top: 14px;
    left: 14px;
    width: 52px;
    height: 4px;
    background: #2a4358;
    border-top: 1px solid #00e5ff;
  }

  .ceiling-hatch {
    position: absolute;
    top: 10px;
    left: 14px;
    width: 52px;
    height: 4px;
    background: repeating-linear-gradient(45deg, #00e5ff 0, #00e5ff 1px, transparent 1px, transparent 6px);
    opacity: 0.4;
  }

  /* Spring SVG oscillating */
  .spring-svg {
    position: absolute;
    top: 18px;
    left: 20px;
    width: 16px;
    height: 60px;
    overflow: visible;
    transform-origin: top center;
    animation: spring-stretch 2.2s ease-in-out infinite;
  }

  .spring-coil {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
    filter: drop-shadow(0 0 4px rgba(0, 229, 255, 0.6));
  }

  /* Damper dashpot cylinder & piston */
  .damper-cylinder {
    position: absolute;
    top: 42px;
    left: 46px;
    width: 12px;
    height: 36px;
    border: 1.5px solid rgba(0, 229, 255, 0.4);
    border-top: none;
    background: rgba(0, 229, 255, 0.05);
  }

  .damper-fluid {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 24px;
    background: rgba(0, 229, 255, 0.15);
  }

  .damper-rod {
    position: absolute;
    top: 18px;
    left: 51px;
    width: 2px;
    height: 40px;
    background: #00e5ff;
    transform-origin: top center;
    animation: mass-motion 2.2s ease-in-out infinite;
  }

  .damper-piston {
    position: absolute;
    bottom: 0;
    left: -4px;
    width: 10px;
    height: 3px;
    background: #00e5ff;
    border-radius: 1px;
  }

  /* Suspended mass block */
  .mass-block {
    position: absolute;
    top: 76px;
    left: 16px;
    width: 48px;
    height: 22px;
    background: linear-gradient(180deg, #183347 0%, #0c1a24 100%);
    border: 1px solid #00e5ff;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.3);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    font-size: 8px;
    color: #e0f7fa;
    animation: mass-motion 2.2s ease-in-out infinite;
  }

  /* Right-side displacement wave trace */
  .trace-container {
    position: absolute;
    top: 20px;
    right: 8px;
    width: 50px;
    height: 90px;
    border-left: 1px dashed rgba(0, 229, 255, 0.3);
    overflow: hidden;
  }

  .trace-center {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(0, 229, 255, 0.2);
  }

  .trace-curve {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    animation: trace-scroll 2.2s linear infinite;
  }

  .trace-indicator {
    position: absolute;
    top: 50%;
    left: 0;
    width: 4px;
    height: 4px;
    margin: -2px 0 0 -2px;
    border-radius: 50%;
    background: #ffcc00;
    box-shadow: 0 0 6px #ffcc00;
    animation: indicator-motion 2.2s ease-in-out infinite;
  }

  .damping-label {
    position: absolute;
    bottom: 4px;
    left: 12px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.6);
  }

  @keyframes spring-stretch {
    0%, 100% { transform: scaleY(0.7); }
    50% { transform: scaleY(1.35); }
  }

  @keyframes mass-motion {
    0%, 100% { transform: translateY(-16px); }
    50% { transform: translateY(16px); }
  }

  @keyframes indicator-motion {
    0%, 100% { transform: translateY(-16px); }
    50% { transform: translateY(16px); }
  }

  @keyframes trace-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50px); }
  }
`;

class PhysicsSpringMassDamper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${springDamperStyles}</style>
      <div class="spring-container">
        <div class="ceiling-hatch"></div>
        <div class="ceiling-mount"></div>

        <svg class="spring-svg" viewBox="0 0 20 80">
          <path class="spring-coil" d="M 10 0 L 10 8 L 18 14 L 2 22 L 18 30 L 2 38 L 18 46 L 2 54 L 18 62 L 10 70 L 10 80" />
        </svg>

        <div class="damper-cylinder">
          <div class="damper-fluid"></div>
        </div>
        <div class="damper-rod">
          <div class="damper-piston"></div>
        </div>

        <div class="mass-block">m = 2kg</div>

        <div class="trace-container">
          <div class="trace-center"></div>
          <svg class="trace-curve" viewBox="0 0 100 90">
            <path fill="none" stroke="rgba(0, 229, 255, 0.7)" stroke-width="1.2"
              d="M 0 45 Q 12.5 15, 25 45 T 50 45 T 75 45 T 100 45" />
          </svg>
          <div class="trace-indicator"></div>
        </div>

        <div class="damping-label">ζ=0.18 · ωₙ=3.4 rad/s</div>
      </div>
    `;
  }
}

if (!customElements.get('physics-spring-mass-damper')) {
  customElements.define('physics-spring-mass-damper', PhysicsSpringMassDamper);
}
