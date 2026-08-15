const kundtStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #121815 0%, #030605 100%);
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

  .kundt-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Glass Resonator Tube */
  .glass-tube {
    fill: rgba(0, 229, 255, 0.08);
    stroke: #00e5ff;
    stroke-width: 1.2;
  }

  /* Piston Transducer / Sound Source */
  .piston {
    fill: #2a3540;
    stroke: #ff5577;
    stroke-width: 1.2;
  }

  /* Standing Pressure Wave Envelopes */
  .pressure-wave {
    fill: none;
    stroke: rgba(0, 255, 102, 0.5);
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  /* Lycopodium Dust Piles at Motion Nodes */
  .dust-heap {
    fill: #ffaa00;
    filter: drop-shadow(0 0 3px #ffaa00);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-node { fill: #ffaa00; }
  .lbl-antinode { fill: #00ff66; }
  .lbl-src { fill: #ff5577; }

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
`;

class PhysicsKundtTube extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${kundtStyles}</style>
      <div class="canvas-box">
        <svg class="kundt-svg" viewBox="0 0 130 130">
          <!-- Glass Tube Housing -->
          <rect x="12" y="44" width="106" height="42" rx="2" class="glass-tube" />

          <!-- Left Transducer / Piston Speaker -->
          <rect x="12" y="44" width="8" height="42" class="piston" />
          <text x="14" y="38" class="lbl lbl-src">SPEAKER</text>

          <!-- Standing Wave Envelope Lines -->
          <path d="M 20 65 Q 35 48 50 65 T 80 65 T 110 65 T 118 65" class="pressure-wave" />
          <path d="M 20 65 Q 35 82 50 65 T 80 65 T 110 65 T 118 65" class="pressure-wave" />

          <!-- Dust Heaps at Velocity Nodes (y=84) -->
          <polygon points="46,84 50,75 54,84" class="dust-heap" />
          <polygon points="76,84 80,75 84,84" class="dust-heap" />
          <polygon points="106,84 110,75 114,84" class="dust-heap" />

          <!-- Node Labels -->
          <text x="44" y="94" class="lbl lbl-node">NODE</text>
          <text x="74" y="94" class="lbl lbl-node">NODE</text>
          <text x="104" y="94" class="lbl lbl-node">NODE</text>

          <!-- Half-Wavelength Dimension Indicator -->
          <line x1="50" y1="30" x2="80" y2="30" stroke="#00ff66" stroke-width="0.8" />
          <line x1="50" y1="28" x2="50" y2="32" stroke="#00ff66" stroke-width="0.8" />
          <line x1="80" y1="28" x2="80" y2="32" stroke="#00ff66" stroke-width="0.8" />
          <text x="58" y="26" class="lbl lbl-antinode">λ/2 = Δx</text>
        </svg>

        <div class="hud">
          <span>v_sound = 2 · Δx · f</span>
          <span>Acoustic Striations</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-kundt-tube')) {
  customElements.define('physics-kundt-tube', PhysicsKundtTube);
}
