const cupellationStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cp-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 65%, #2a1106 0%, #0c0401 100%);
    border: 1.5px solid rgba(255, 112, 67, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 112, 67, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cp-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cp-svg {
    width: 76px;
    height: 72px;
  }

  /* Air blast stream oxidising molten surface */
  .cp-air-blast {
    stroke: #ffccbc;
    stroke-dasharray: 4 3;
    animation: cp-blow 1.2s linear infinite;
  }

  @keyframes cp-blow {
    to { stroke-dashoffset: -14; }
  }

  /* Litharge / lead oxide absorption glow on cupel rim */
  .cp-rim-glow {
    animation: cp-absorb 3s ease-in-out infinite alternate;
  }

  @keyframes cp-absorb {
    0% { stroke: #ff7043; filter: drop-shadow(0 0 2px #d84315); }
    100% { stroke: #ffab91; filter: drop-shadow(0 0 6px #ff7043); }
  }

  /* Shimmering pure noble metal bead (Blick / flash of silver) */
  .cp-metal-bead {
    animation: cp-flash 3.5s ease-in-out infinite;
  }

  @keyframes cp-flash {
    0%, 20% { fill: #8d6e63; filter: brightness(0.8); }
    50% { fill: #cfd8dc; filter: brightness(1.2); }
    80%, 100% { fill: #ffffff; filter: drop-shadow(0 0 8px #ffffff) drop-shadow(0 0 14px #ffd700); }
  }

  /* Muffle furnace arch */
  .cp-arch {
    fill: none;
    stroke: #ff7043;
    stroke-width: 1.2;
  }

  .cp-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 112, 67, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCupellationCalcine extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${cupellationStyles}</style>
      <div class="cp-box">
        <div class="cp-stage">
          <svg class="cp-svg" viewBox="0 0 76 72">
            <!-- Muffle Furnace Firebrick Vault -->
            <path class="cp-arch" d="M 12 60 L 12 32 C 12 14, 64 14, 64 32 L 64 60" />
            <path d="M 16 60 L 16 34 C 16 20, 60 20, 60 34 L 60 60" fill="rgba(255, 112, 67, 0.08)" stroke="rgba(255, 112, 67, 0.3)" stroke-width="0.8" />

            <!-- Charcoal Fuel Hearth Bed -->
            <rect x="14" y="58" width="48" height="6" fill="#3e2723" stroke="#ff7043" stroke-width="0.8" />

            <!-- Bone-Ash Cupel Vessel (Porous Truncated Cone) -->
            <path d="M 24 58 L 52 58 L 56 42 L 20 42 Z" fill="#4e342e" stroke="#ff8a65" stroke-width="1.2" />
            <ellipse class="cp-rim-glow" cx="38" cy="42" rx="18" ry="4.5" fill="#37474f" stroke-width="1.2" />

            <!-- Molten Lead/Slag Meniscus -->
            <ellipse cx="38" cy="43" rx="12" ry="3" fill="#ffab00" opacity="0.6" />

            <!-- Pure Noble Silver Bead ("Le Blick") -->
            <ellipse class="cp-metal-bead" cx="38" cy="42.5" rx="5" ry="2.2" />

            <!-- Tuyère Blast Pipe (Air Current Injector) -->
            <path d="M 68 24 L 52 36" fill="none" stroke="#b0bec5" stroke-width="2" />
            <line x1="51" y1="37" x2="39" y2="42" class="cp-air-blast" stroke-width="1.2" />

            <!-- Heat Waves / Radiance -->
            <path d="M 28 36 Q 30 30 28 24" fill="none" stroke="#ff9800" stroke-width="0.8" opacity="0.6" />
            <path d="M 48 36 Q 46 30 48 24" fill="none" stroke="#ff9800" stroke-width="0.8" opacity="0.6" />
          </svg>
        </div>
        <div class="cp-label">CUPELLATION FURNACE</div>
      </div>
    `;
  }
}

customElements.define('concept-cupellation-calcine', ConceptCupellationCalcine);
