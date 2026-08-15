const rubensStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #1a120d 0%, #060302 100%);
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

  .rubens-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Perforated Gas Pipe */
  .pipe {
    fill: #2a3038;
    stroke: #445566;
    stroke-width: 1.5;
  }

  /* Acoustic Speaker Driver */
  .speaker {
    fill: #222;
    stroke: #00e5ff;
    stroke-width: 1.2;
  }

  /* Gas Inlet */
  .gas-inlet {
    stroke: #ffaa00;
    stroke-width: 1.5;
  }

  /* Sinusoidal Standing Flame Jet Heights */
  .flame-jets {
    fill: none;
    stroke: #ff5500;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 4px #ff5500);
  }

  .flame-fill {
    fill: rgba(255, 170, 0, 0.25);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-flame { fill: #ffaa00; }
  .lbl-spk { fill: #00e5ff; }
  .lbl-press { fill: #ff5577; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(255, 170, 0, 0.9);
    z-index: 10;
  }
`;

class PhysicsRubensFlameTube extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${rubensStyles}</style>
      <div class="canvas-box">
        <svg class="rubens-svg" viewBox="0 0 130 130">
          <!-- Acoustic Speaker Source on Left -->
          <polygon points="12,55 24,65 24,85 12,95" class="speaker" />
          <text x="10" y="50" class="lbl lbl-spk">SPEAKER</text>

          <!-- Perforated Brass Tube -->
          <rect x="24" y="70" width="94" height="15" rx="1" class="pipe" />

          <!-- Flammable Gas Supply Tube -->
          <line x1="71" y1="85" x2="71" y2="105" class="gas-inlet" />
          <text x="62" y="114" class="lbl" fill="#ffaa00">PROPANE</text>

          <!-- Standing Wave Flame Envelope Heights -->
          <path d="
            M 26 70
            Q 36 38 46 70
            Q 56 38 66 70
            Q 76 38 86 70
            Q 96 38 106 70
            L 116 70
          " class="flame-jets" />

          <!-- Flame glow fill -->
          <path d="
            M 26 70
            Q 36 38 46 70
            Q 56 38 66 70
            Q 76 38 86 70
            Q 96 38 106 70
            L 116 70
            Z
          " class="flame-fill" />

          <!-- Flame Nodes/Peaks Labels -->
          <text x="32" y="32" class="lbl lbl-flame">FLAME PEAK</text>
          <text x="74" y="32" class="lbl lbl-press">ΔP ANTINODE</text>
        </svg>

        <div class="hud">
          <span>Bernoulli Acoustic Pressure</span>
          <span>Rubens Flame Tube (1905)</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-rubens-flame-tube')) {
  customElements.define('physics-rubens-flame-tube', PhysicsRubensFlameTube);
}
