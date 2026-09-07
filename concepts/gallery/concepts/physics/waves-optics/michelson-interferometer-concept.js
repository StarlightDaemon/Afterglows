const michelsonStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #10151a 0%, #040608 100%);
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

  /* Optics Components */
  .laser-source {
    position: absolute;
    top: 50px;
    left: 10px;
    width: 14px;
    height: 10px;
    background: #2a3540;
    border: 1px solid #ff5577;
    border-radius: 2px;
  }

  .beam-splitter {
    position: absolute;
    top: 47px;
    left: 55px;
    width: 16px;
    height: 16px;
    background: rgba(0, 229, 255, 0.15);
    border: 1px solid #00e5ff;
    box-shadow: 0 0 6px rgba(0, 229, 255, 0.3);
  }

  .beam-splitter::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, transparent 48%, #00e5ff 49%, #00e5ff 51%, transparent 52%);
  }

  .mirror-top {
    position: absolute;
    top: 14px;
    left: 53px;
    width: 20px;
    height: 4px;
    background: #ffcc00;
    box-shadow: 0 0 6px #ffcc00;
  }

  .mirror-right {
    position: absolute;
    top: 45px;
    right: 14px;
    width: 4px;
    height: 20px;
    background: #ffcc00;
    box-shadow: 0 0 6px #ffcc00;
    animation: mirror-dither 2.4s ease-in-out infinite alternate;
  }

  /* Laser Beams SVG */
  .beam-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  .beam-line {
    fill: none;
    stroke: #ff5577;
    stroke-width: 1.8;
    filter: drop-shadow(0 0 3px #ff5577);
  }

  /* Interference Pattern Detector Screen */
  .detector-screen {
    position: absolute;
    bottom: 12px;
    left: 53px;
    width: 20px;
    height: 20px;
    background: #000000;
    border: 1px solid #ff5577;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 8px rgba(255, 85, 119, 0.4);
    z-index: 8;
  }

  .fringes-svg {
    width: 18px;
    height: 18px;
  }

  .fringe-ring {
    fill: none;
    stroke: #ff5577;
    stroke-width: 1;
    animation: fringe-shift 2.4s ease-in-out infinite alternate;
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
    color: rgba(255, 85, 119, 0.85);
    z-index: 10;
  }

  @keyframes mirror-dither {
    0% { transform: translateX(0); }
    100% { transform: translateX(3px); }
  }

  @keyframes fringe-shift {
    0% { transform: scale(0.6); transform-origin: center; opacity: 0.4; }
    100% { transform: scale(1.3); transform-origin: center; opacity: 1; }
  }

  /* Photon pulse walking the full interferometer path: source -> splitter ->
     arm 1 -> splitter -> arm 2 -> splitter -> detector. */
  .photon-dot {
    fill: #ffccdd;
    filter: drop-shadow(0 0 5px #ff5577);
    animation: ml-photon 3.4s linear infinite;
  }

  @keyframes ml-photon {
    0%   { transform: translate(24px, 55px); }
    15%  { transform: translate(63px, 55px); }
    30%  { transform: translate(63px, 18px); }
    45%  { transform: translate(63px, 55px); }
    64%  { transform: translate(112px, 55px); }
    83%  { transform: translate(63px, 55px); }
    100% { transform: translate(63px, 98px); }
  }
`;

class PhysicsMichelsonInterferometer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${michelsonStyles}</style>
      <div class="canvas-box">
        <div class="laser-source"></div>
        <div class="beam-splitter"></div>
        <div class="mirror-top"></div>
        <div class="mirror-right"></div>

        <svg class="beam-svg" viewBox="0 0 130 130">
          <!-- Main Beam: Laser to Splitter -->
          <line x1="24" y1="55" x2="63" y2="55" class="beam-line" />
          <!-- Arm 1: Splitter to Top Mirror & Return -->
          <line x1="63" y1="55" x2="63" y2="18" class="beam-line" />
          <!-- Arm 2: Splitter to Right Mirror & Return -->
          <line x1="63" y1="55" x2="112" y2="55" class="beam-line" />
          <!-- Combined Beam: Splitter to Detector -->
          <line x1="63" y1="55" x2="63" y2="98" class="beam-line" />

          <!-- Travelling photon pulse -->
          <circle cx="0" cy="0" r="2.8" class="photon-dot" />
        </svg>

        <div class="detector-screen">
          <svg class="fringes-svg" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="2" class="fringe-ring" />
            <circle cx="10" cy="10" r="5" class="fringe-ring" />
            <circle cx="10" cy="10" r="8" class="fringe-ring" />
          </svg>
        </div>

        <div class="hud">
          <span>Δ = 2(L₁ - L₂) = mλ</span>
          <span>I = 2I₀(1 + cos δ)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-michelson-interferometer')) {
  customElements.define('physics-michelson-interferometer', PhysicsMichelsonInterferometer);
}
