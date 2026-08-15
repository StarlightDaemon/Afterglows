const acStreamingStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #151a22 0%, #040508 100%);
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

  .as-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* High-frequency ultrasonic sound beam emitting from piezoelectric transducer */
  .sound-beam {
    animation: as-beam-pulse 1.4s ease-in-out infinite alternate;
  }

  @keyframes as-beam-pulse {
    0% { opacity: 0.5; stroke: #38bdf8; }
    100% { opacity: 1; stroke: #ffffff; filter: drop-shadow(0 0 3px #0ea5e9); }
  }

  /* Quartz wind acoustic streaming jet vortices (Eckart streaming) */
  .streaming-vortex-top {
    animation: as-vortex-spin-cw 3s linear infinite;
    transform-origin: 80px 42px;
  }

  .streaming-vortex-bot {
    animation: as-vortex-spin-ccw 3s linear infinite;
    transform-origin: 80px 88px;
  }

  @keyframes as-vortex-spin-cw {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes as-vortex-spin-ccw {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }
  }

  /* Central momentum jet stream (Reynolds stress body force) */
  .jet-stream {
    animation: as-jet-flow 1.2s linear infinite;
  }

  @keyframes as-jet-flow {
    0% { stroke-dashoffset: 16; opacity: 0.6; }
    100% { stroke-dashoffset: 0; opacity: 1; }
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-trans { fill: #facc15; }
  .lbl-jet { fill: #38bdf8; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(56, 189, 248, 0.9);
    z-index: 10;
  }
`;

class PhysicsAcousticStreamingVortex extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${acStreamingStyles}</style>
      <div class="canvas-box">
        <svg class="as-svg" viewBox="0 0 130 130">
          <!-- Fluid Container Tank Chamber -->
          <rect x="15" y="20" width="100" height="90" rx="3" fill="#0f172a" fill-opacity="0.4" stroke="#334155" stroke-width="1" />

          <!-- Piezoelectric Ultrasonic Transducer Source (Left Wall) -->
          <rect x="18" y="52" width="6" height="26" rx="1" fill="#ca8a04" stroke="#fde047" stroke-width="0.8" />
          <text x="6" y="48" class="lbl lbl-trans">TRANSDUCER</text>

          <!-- Attenuating High-Frequency Sound Beam (Wavefronts) -->
          <g class="sound-beam" fill="none" stroke-width="1.2">
            <path d="M 30 54 Q 32 65 30 76" />
            <path d="M 40 52 Q 43 65 40 78" />
            <path d="M 50 50 Q 54 65 50 80" />
            <path d="M 60 48 Q 65 65 60 82" />
            <path d="M 70 46 Q 76 65 70 84" />
          </g>

          <!-- Steady Acoustic Streaming Axial Jet (Quartz Wind) -->
          <g class="jet-stream" stroke="#38bdf8" stroke-width="1.6" stroke-dasharray="6 3" fill="none">
            <line x1="26" y1="65" x2="110" y2="65" />
          </g>
          <text x="60" y="61" class="lbl lbl-jet">QUARTZ WIND JET →</text>

          <!-- Upper Recirculating Eckart Streaming Vortex -->
          <g class="streaming-vortex-top" fill="none" stroke="#0ea5e9" stroke-width="1">
            <path d="M 60 42 A 20 14 0 1 1 100 42 A 20 14 0 1 1 60 42" stroke-dasharray="8 4" />
          </g>

          <!-- Lower Recirculating Eckart Streaming Vortex -->
          <g class="streaming-vortex-bot" fill="none" stroke="#0ea5e9" stroke-width="1">
            <path d="M 60 88 A 20 14 0 1 1 100 88 A 20 14 0 1 1 60 88" stroke-dasharray="8 4" />
          </g>
        </svg>
        <div class="hud">
          <span>F_i = -∂⟨ρ v_i v_j⟩/∂x_j</span>
          <span>ACOUSTIC STREAMING</span>
        </div>
      </div>
    `;
  }
}

customElements.define('physics-acoustic-streaming-vortex', PhysicsAcousticStreamingVortex);
