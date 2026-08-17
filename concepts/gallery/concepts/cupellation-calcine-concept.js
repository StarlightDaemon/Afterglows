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

  /* Air blast packet from tuyere stream */
  .cp-air-packet {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffccbc;
    z-index: 6;
    animation: cp-blow-packet 1.4s linear infinite;
  }

  @keyframes cp-blow-packet {
    0% { transform: translate(22px, -6px) scale(0.5); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(-4px, 6px) scale(1.2); opacity: 0; }
  }

  /* Descending molten lead oxide (litharge) slag drops absorbing into porous bone-ash cupel */
  .cp-litharge-drop {
    position: absolute;
    width: 3px;
    height: 5px;
    border-radius: 50%;
    background: #ffab00;
    box-shadow: 0 0 4px #ff6d00;
    z-index: 5;
  }

  .ld1 { left: 32px; animation: cp-drop-fall 2.2s linear infinite; }
  .ld2 { left: 48px; animation: cp-drop-fall 2.2s linear infinite; animation-delay: 1.1s; }

  @keyframes cp-drop-fall {
    0% { transform: translateY(44px) scale(0.8); opacity: 1; }
    60% { transform: translateY(54px) scale(1.1); opacity: 1; }
    100% { transform: translateY(60px) scale(0.3); opacity: 0; }
  }

  /* Pure noble metal silver bead "Blick" crystallization flash */
  .cp-metal-bead {
    transform-origin: 38px 42.5px;
    animation: cp-silver-blick 2.2s ease-in-out infinite alternate;
  }

  @keyframes cp-silver-blick {
    0% { transform: scale(0.7); fill: #8d6e63; }
    50% { transform: scale(1.1); fill: #cfd8dc; }
    100% { transform: scale(1.45); fill: #ffffff; filter: drop-shadow(0 0 8px #ffffff) drop-shadow(0 0 14px #ffd700); }
  }

  /* Litharge / lead oxide absorption glow on cupel rim */
  .cp-rim-glow {
    animation: cp-absorb 2s ease-in-out infinite alternate;
  }

  @keyframes cp-absorb {
    0% { stroke: #ff7043; filter: drop-shadow(0 0 2px #d84315); }
    100% { stroke: #ffab91; filter: drop-shadow(0 0 6px #ff7043); }
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
          <div class="cp-air-packet"></div>
          <div class="cp-litharge-drop ld1"></div>
          <div class="cp-litharge-drop ld2"></div>

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

            <!-- Pure Noble Silver Bead ("Le Blick") with Dynamic Expansion -->
            <ellipse class="cp-metal-bead" cx="38" cy="42.5" rx="5" ry="2.2" />

            <!-- Tuyère Blast Pipe (Air Current Injector) -->
            <path d="M 68 24 L 52 36" fill="none" stroke="#b0bec5" stroke-width="2.5" />
            <line x1="51" y1="37" x2="39" y2="42" stroke="#ffccbc" stroke-width="1.4" stroke-dasharray="3 2" />

            <!-- Heat Waves / Radiance -->
            <path d="M 28 36 Q 30 30 28 24" fill="none" stroke="#ff9800" stroke-width="1" opacity="0.7" />
            <path d="M 48 36 Q 46 30 48 24" fill="none" stroke="#ff9800" stroke-width="1" opacity="0.7" />
          </svg>
        </div>
        <div class="cp-label">CUPELLATION FURNACE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-cupellation-calcine')) {
  customElements.define('concept-cupellation-calcine', ConceptCupellationCalcine);
}
