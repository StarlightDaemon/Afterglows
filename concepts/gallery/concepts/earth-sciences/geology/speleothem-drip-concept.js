const speleothemStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sp-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 40%, #1a162b 0%, #080612 100%);
    border: 1.5px solid rgba(179, 157, 219, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(179, 157, 219, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sp-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sp-svg {
    width: 76px;
    height: 72px;
  }

  /* Mineral droplet forming, swelling, and plunging down */
  .sp-drop {
    position: absolute;
    width: 4px;
    height: 6px;
    border-radius: 50% 50% 20% 20%;
    background: #ffffff;
    box-shadow: 0 0 8px #e1bee7, 0 0 12px #b39ddb;
    z-index: 6;
    animation: sp-drip-fall 2s cubic-bezier(0.4, 0, 1, 1) infinite;
  }

  @keyframes sp-drip-fall {
    0% { top: 34px; left: 36px; transform: scale(0.6); opacity: 0; }
    20% { top: 36px; left: 36px; transform: scale(1); opacity: 1; }
    35% { top: 38px; left: 36px; transform: scale(1.3, 0.7); }
    75% { top: 62px; left: 36px; transform: scale(0.8, 1.4); opacity: 1; }
    85% { top: 64px; left: 36px; transform: scale(2, 0.3); opacity: 0.8; }
    100% { top: 64px; left: 36px; transform: scale(2.6, 0.1); opacity: 0; }
  }

  /* Calcite crystal luminescence rings */
  .sp-calcite {
    fill: #d1c4e9;
    stroke: #b39ddb;
    stroke-width: 0.8;
  }

  .sp-stalactite {
    animation: sp-pulse-rock 2.4s ease-in-out infinite alternate;
  }

  @keyframes sp-pulse-rock {
    0% { filter: drop-shadow(0 0 1px #9575cd); }
    100% { filter: drop-shadow(0 0 6px #d1c4e9); }
  }

  /* Splash ripple at floor */
  .sp-ripple {
    position: absolute;
    bottom: 22px;
    left: 28px;
    width: 20px;
    height: 8px;
    border-radius: 50%;
    border: 1.5px solid #ffffff;
    box-shadow: 0 0 6px #e1bee7;
    pointer-events: none;
    animation: sp-splash 2s ease-out infinite;
  }

  @keyframes sp-splash {
    0%, 72% { transform: scale(0.1); opacity: 0; }
    75% { transform: scale(0.4); opacity: 1; }
    88% { transform: scale(1.6); opacity: 0.8; }
    100% { transform: scale(2.4); opacity: 0; }
  }

  .sp-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(179, 157, 219, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptSpeleothemDrip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${speleothemStyles}</style>
      <div class="sp-box">
        <div class="sp-stage">
          <div class="sp-drop"></div>
          <div class="sp-ripple"></div>

          <svg class="sp-svg" viewBox="0 0 76 72">
            <!-- Cave Ceiling Rock Mass -->
            <path d="M 8 10 Q 24 16 38 12 Q 52 16 68 10 L 68 6 L 8 6 Z" fill="#28223d" stroke="#5e548e" stroke-width="1" />

            <!-- Ceiling Stalactites -->
            <polygon class="sp-calcite" points="20,12 24,12 22,24" />
            <polygon class="sp-calcite" points="54,12 58,12 56,22" />

            <!-- Central Active Stalactite (Soda straw carrot) -->
            <g class="sp-stalactite">
              <path class="sp-calcite" d="M 33 12 L 43 12 L 40 28 L 39 36 L 37 36 L 36 28 Z" />
              <!-- Calcite Growth Rings -->
              <line x1="35" y1="20" x2="41" y2="20" stroke="#ede7f6" stroke-width="0.8" />
              <line x1="36" y1="26" x2="40" y2="26" stroke="#ede7f6" stroke-width="0.8" />
            </g>

            <!-- Floor Stalagmites & Cave Floor -->
            <path d="M 8 64 Q 26 62 38 64 Q 50 62 68 64 L 68 68 L 8 68 Z" fill="#28223d" stroke="#5e548e" stroke-width="1" />

            <!-- Central Growing Stalagmite Mound -->
            <path class="sp-calcite" d="M 31 64 L 45 64 L 41 52 L 38 48 L 35 52 Z" />

            <!-- Flanking Stalagmites -->
            <polygon class="sp-calcite" points="18,64 24,64 21,56" />
            <polygon class="sp-calcite" points="52,64 58,64 55,58" />
          </svg>
        </div>
        <div class="sp-label">SPELEOTHEM DRIP</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-speleothem-drip')) {
  customElements.define('concept-speleothem-drip', ConceptSpeleothemDrip);
}
