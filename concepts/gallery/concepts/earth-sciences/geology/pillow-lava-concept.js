const pillowLavaStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pl-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 60%, #0c1824 0%, #03060a 100%);
    border: 1.5px solid rgba(255, 87, 34, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 87, 34, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pl-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pl-svg {
    width: 76px;
    height: 72px;
  }

  /* Pillow lobe inflation and quenching pulse */
  .pl-inflating-lobe {
    animation: pl-inflate 3s ease-in-out infinite alternate;
  }

  @keyframes pl-inflate {
    0% { transform: scale(0.8); }
    100% { transform: scale(1.22); }
  }

  /* Incandescent lava rupture fissures */
  .pl-fissure {
    stroke: #ff3d00;
    stroke-width: 1.2;
    animation: pl-crack-glow 2s ease-in-out infinite alternate;
  }

  @keyframes pl-crack-glow {
    0% { stroke: #d84315; stroke-width: 0.8; filter: drop-shadow(0 0 1px #ff3d00); }
    100% { stroke: #ffd600; stroke-width: 2.4; filter: drop-shadow(0 0 7px #ff6d00); }
  }

  /* Molten breakout bud extruding from the lobe, inflating, then quenching */
  .pl-breakout {
    filter: drop-shadow(0 0 4px #ff6d00);
    animation: pl-extrude 3s ease-in-out infinite;
  }

  @keyframes pl-extrude {
    0% { transform: translate(0, 0) scale(0.15); opacity: 0; }
    12% { transform: translate(2px, 0.5px) scale(0.4); opacity: 1; }
    55% { transform: translate(11px, 3px) scale(1); opacity: 1; }
    80% { transform: translate(13px, 4px) scale(1.05); opacity: 0.85; }
    100% { transform: translate(13px, 4px) scale(1.05); opacity: 0; }
  }

  /* Hydrothermal steam / boiling quench shimmer */
  .pl-quench-vapor path {
    stroke: #80d8ff;
    stroke-width: 1.6;
    stroke-dasharray: 3 3;
    animation: pl-vapor-rise 1.5s linear infinite;
  }

  @keyframes pl-vapor-rise {
    to { stroke-dashoffset: -10; }
  }

  .pl-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 87, 34, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPillowLava extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${pillowLavaStyles}</style>
      <div class="pl-box">
        <div class="pl-stage">
          <svg class="pl-svg" viewBox="0 0 76 72">
            <!-- Abyssal Seafloor Ocean Water -->
            <rect x="8" y="8" width="60" height="58" fill="rgba(1, 87, 155, 0.15)" />

            <!-- Quenched Basalt Pillows Stack -->
            <!-- Bottom Older Pillow Mound 1 -->
            <ellipse cx="24" cy="54" rx="14" ry="9" fill="#212121" stroke="#424242" stroke-width="1.2" />
            <!-- Bottom Older Pillow Mound 2 -->
            <ellipse cx="50" cy="56" rx="16" ry="10" fill="#263238" stroke="#455a64" stroke-width="1.2" />

            <!-- Mid Pillow Lobes -->
            <ellipse cx="32" cy="42" rx="13" ry="8" fill="#1e272c" stroke="#37474f" stroke-width="1.2" />
            <ellipse cx="56" cy="40" rx="11" ry="7" fill="#212121" stroke="#424242" stroke-width="1.2" />

            <!-- Active Inflating Budding Pillow Lobe (Transform Origin Centered) -->
            <g transform="translate(24, 30)">
              <g class="pl-inflating-lobe">
                <!-- Obsidian Glassy Quenched Crust -->
                <ellipse cx="0" cy="0" rx="13" ry="8" fill="#211b1b" stroke="#3e2723" stroke-width="1.2" />
                <!-- Glowing Molten Rupture Fissures (Glass skin cracking open) -->
                <path class="pl-fissure" d="M -8 1 Q 0 -4 8 -1 M -4 4 Q 1 0 6 5" fill="none" />
                <circle cx="0" cy="0" r="2.5" fill="#ff6d00" />
              </g>
            </g>

            <!-- Fresh molten lobe extruding from the active pillow -->
            <g transform="translate(35, 33)">
              <ellipse class="pl-breakout" cx="0" cy="0" rx="6" ry="4.2" fill="#ff8a00" stroke="#ffd600" stroke-width="0.8" />
            </g>

            <!-- Quenching Thermal Shimmer / Water Steam Wisps -->
            <g class="pl-quench-vapor" fill="none" stroke-width="0.8">
              <path d="M 20 20 Q 18 14 20 8" />
              <path d="M 28 20 Q 30 14 28 8" />
              <path d="M 48 30 Q 50 24 48 18" />
            </g>
          </svg>
        </div>
        <div class="pl-label">PILLOW LAVA OOZE</div>
      </div>
    `;
  }
}

customElements.define('concept-pillow-lava', ConceptPillowLava);
