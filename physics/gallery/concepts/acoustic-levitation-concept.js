const leviaStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d1522 0%, #020408 100%);
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

  .lev-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Piezo Ultrasonic Transducer Horns */
  .transducer {
    fill: #223344;
    stroke: #00e5ff;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px #00e5ff);
  }

  /* Standing Pressure Wave Nodes & Antinodes */
  .sound-envelope {
    fill: none;
    stroke: rgba(0, 229, 255, 0.4);
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  /* Levitated Water Droplets / Micro-particles (Trapped at Pressure Nodes) */
  .droplet {
    fill: #00ff66;
    stroke: #ffffff;
    stroke-width: 0.8;
    filter: drop-shadow(0 0 5px #00ff66);
    animation: jitter-drop 1.4s ease-in-out infinite alternate;
  }

  .d1 { animation-delay: 0s; }
  .d2 { animation-delay: 0.4s; }
  .d3 { animation-delay: 0.8s; }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-piezo { fill: #00e5ff; }
  .lbl-node { fill: #00ff66; }
  .lbl-force { fill: #ffaa00; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(0, 255, 102, 0.85);
    z-index: 10;
  }

  @keyframes jitter-drop {
    0% { transform: translateY(-1.5px); }
    100% { transform: translateY(1.5px); }
  }
`;

class PhysicsAcousticLevitation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${leviaStyles}</style>
      <div class="canvas-box">
        <svg class="lev-svg" viewBox="0 0 130 130">
          <!-- Top Transducer Horn (40 kHz) -->
          <polygon points="45,14 85,14 75,26 55,26" class="transducer" />
          <text x="32" y="10" class="lbl lbl-piezo">EMITTER 40 kHz</text>

          <!-- Bottom Transducer Reflector/Horn -->
          <polygon points="55,104 75,104 85,116 45,116" class="transducer" />
          <text x="36" y="124" class="lbl lbl-piezo">REFLECTOR</text>

          <!-- Standing Wave Acoustic Cavity Envelope -->
          <path d="M 65 26 Q 50 40 65 52 Q 80 64 65 76 Q 50 88 65 104" class="sound-envelope" />
          <path d="M 65 26 Q 80 40 65 52 Q 50 64 65 76 Q 80 88 65 104" class="sound-envelope" />

          <!-- Trapped Levitated Liquid Droplets at Velocity Antinodes / Pressure Nodes -->
          <g class="droplet d1"><circle cx="65" cy="40" r="3.2" /></g>
          <g class="droplet d2"><circle cx="65" cy="65" r="3.5" /></g>
          <g class="droplet d3"><circle cx="65" cy="90" r="3.2" /></g>

          <!-- Acoustic Radiation Force arrows -->
          <text x="82" y="66" class="lbl lbl-node">NODE (F_rad = F_g)</text>
          <text x="12" y="66" class="lbl lbl-force">λ/2 = 4.3mm</text>
        </svg>

        <div class="hud">
          <span>F_rad = -∇⟨U_Gor'kov⟩</span>
          <span>Acoustic Radiation Trap</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-acoustic-levitation')) {
  customElements.define('physics-acoustic-levitation', PhysicsAcousticLevitation);
}
