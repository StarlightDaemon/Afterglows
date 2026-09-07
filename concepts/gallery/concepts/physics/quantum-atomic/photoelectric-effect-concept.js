const photoStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #1a1012 0%, #060203 100%);
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

  .pe-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Target Metal Emitter Plate (Cathode) */
  .metal-plate {
    fill: #2a3038;
    stroke: #00e5ff;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px #00e5ff);
  }

  /* Collector Plate (Anode) */
  .collector-plate {
    fill: #2a3038;
    stroke: #ff5577;
    stroke-width: 1.2;
  }

  /* Incident UV / Blue Photon wavepackets */
  .photon-wave {
    fill: none;
    stroke: #aa00ff;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 4px #aa00ff);
    animation: shoot-photon 2.4s linear infinite;
  }

  /* Ejected Photoelectrons flying toward collector */
  .photoelectron {
    fill: #00ff66;
    filter: drop-shadow(0 0 4px #00ff66);
    animation: fly-electron 2.4s ease-out infinite;
  }

  .photoelectron:nth-child(2) { animation-delay: 0.8s; }
  .photoelectron:nth-child(3) { animation-delay: 1.6s; }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-photon { fill: #c040ff; }
  .lbl-electron { fill: #00ff66; }
  .lbl-work { fill: #ffaa00; }

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

  @keyframes shoot-photon {
    0% { transform: translate(-30px, -30px); opacity: 0; }
    30% { opacity: 1; }
    60% { transform: translate(0px, 0px); opacity: 1; }
    100% { transform: translate(0px, 0px); opacity: 0; }
  }

  @keyframes fly-electron {
    0% { cx: 34; cy: 65; opacity: 0; }
    40% { cx: 34; cy: 65; opacity: 1; }
    100% { cx: 96; cy: 65; opacity: 1; }
  }
`;

class PhysicsPhotoelectricEffect extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${photoStyles}</style>
      <div class="canvas-box">
        <svg class="pe-svg" viewBox="0 0 130 130">
          <!-- Cathode (Metal Target) -->
          <rect x="24" y="30" width="8" height="70" rx="1" class="metal-plate" />
          <text x="14" y="24" class="lbl" fill="#00e5ff">CATHODE</text>

          <!-- Anode (Collector Plate) -->
          <rect x="98" y="30" width="8" height="70" rx="1" class="collector-plate" />
          <text x="88" y="24" class="lbl" fill="#ff5577">ANODE</text>

          <!-- External Circuit -->
          <path d="M 28 100 L 28 112 L 102 112 L 102 100" fill="none" stroke="#556677" stroke-width="1" />
          <!-- Micro-ammeter -->
          <circle cx="65" cy="112" r="5" fill="#101520" stroke="#00ff66" stroke-width="1" />
          <text x="63" y="114" class="lbl" fill="#00ff66">μA</text>

          <!-- Incident High-Energy Photons (hν > Φ) -->
          <g class="photon-wave">
            <path d="M 6 36 Q 16 30 24 42" />
            <polygon points="25,43 21,39 26,38" fill="#aa00ff" />
          </g>

          <!-- Ejected Photoelectrons -->
          <circle cx="34" cy="48" r="2.5" class="photoelectron" />
          <circle cx="34" cy="65" r="2.5" class="photoelectron" />
          <circle cx="34" cy="82" r="2.5" class="photoelectron" />

          <!-- Labels -->
          <text x="6" y="50" class="lbl lbl-photon">hν &gt; Φ</text>
          <text x="50" y="58" class="lbl lbl-electron">e⁻ (K_max)</text>
          <text x="36" y="36" class="lbl lbl-work">Φ = 2.2 eV</text>
        </svg>

        <div class="hud">
          <span>K_max = hν - Φ = e·V₀</span>
          <span>Einstein 1905</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-photoelectric-effect')) {
  customElements.define('physics-photoelectric-effect', PhysicsPhotoelectricEffect);
}
