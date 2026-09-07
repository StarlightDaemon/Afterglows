const robinsonAnemometerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ra-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1c15 0%, #060503 100%);
    border: 1.5px solid rgba(234, 179, 8, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(234, 179, 8, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ra-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ra-svg {
    width: 76px;
    height: 72px;
  }

  /* 4-cup horizontal cross spinning in wind */
  .ra-cup-rotor {
    animation: ra-cups-spin 2s linear infinite;
    transform-origin: 38px 24px;
  }

  @keyframes ra-cups-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Gear train counter dial ticks */
  .ra-gear-train {
    animation: ra-gear-tick 1s ease-in-out infinite alternate;
  }

  @keyframes ra-gear-tick {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(15deg); }
  }

  /* Wind streamline flow */
  .ra-wind-flow {
    animation: ra-wind-drift 1.8s linear infinite;
  }

  @keyframes ra-wind-drift {
    0% { stroke-dashoffset: 20; opacity: 0.2; }
    50% { opacity: 0.7; }
    100% { stroke-dashoffset: 0; opacity: 0.2; }
  }

  .ra-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(234, 179, 8, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptRobinsonAnemometer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${robinsonAnemometerStyles}</style>
      <div class="ra-box">
        <div class="ra-stage">
          <svg class="ra-svg" viewBox="0 0 76 72">
            <!-- 1846 Thomas Romney Robinson 4-Hemispherical Cup Anemometer -->
            <!-- Wind Streamlines -->
            <g class="ra-wind-flow" stroke="#fef08a" stroke-width="0.6" stroke-dasharray="4 4" fill="none">
              <path d="M 6 16 L 70 16" />
              <path d="M 6 28 L 70 28" />
            </g>

            <!-- Cast Iron Pedestal Mast & Mounting Spindle -->
            <line x1="38" y1="24" x2="38" y2="58" stroke="#ca8a04" stroke-width="1.6" />
            <polygon points="32,64 44,64 40,58 36,58" fill="#451a03" stroke="#b45309" stroke-width="0.8" />

            <!-- Mechanical Dial Gear Box & Revolution Counter Housing -->
            <circle cx="38" cy="46" r="8" fill="#1c1917" stroke="#eab308" stroke-width="0.9" />
            <circle cx="38" cy="46" r="6" fill="#292524" stroke="#78350f" stroke-dasharray="1.5 1.5" stroke-width="0.5" />
            <!-- Gear Index Pointer -->
            <line class="ra-gear-train" x1="38" y1="46" x2="42" y2="43" stroke="#ef4444" stroke-width="0.8" style="transform-origin: 38px 46px;" />

            <!-- 4-Arm Revolving Cup Rotor (Top) -->
            <g class="ra-cup-rotor">
              <!-- Cross Arms -->
              <line x1="18" y1="24" x2="58" y2="24" stroke="#ca8a04" stroke-width="1.2" />
              <line x1="38" y1="4" x2="38" y2="44" stroke="#ca8a04" stroke-width="1.2" />

              <!-- 4 Hemispherical Brass Cups (Cup 1: Left) -->
              <path d="M 18 19 A 5 5 0 0 0 18 29 Z" fill="#b45309" stroke="#fde047" stroke-width="0.8" />
              <!-- Cup 2: Right -->
              <path d="M 58 19 A 5 5 0 0 1 58 29 Z" fill="#78350f" stroke="#fde047" stroke-width="0.8" />
              <!-- Cup 3: Top -->
              <path d="M 33 4 A 5 5 0 0 0 43 4 Z" fill="#92400e" stroke="#fde047" stroke-width="0.8" />
              <!-- Cup 4: Bottom -->
              <path d="M 33 44 A 5 5 0 0 1 43 44 Z" fill="#b45309" stroke="#fde047" stroke-width="0.8" />

              <!-- Central Spindle Pivot Cap Nut -->
              <circle cx="38" cy="24" r="2.2" fill="#facc15" stroke="#78350f" stroke-width="0.5" />
            </g>
          </svg>
        </div>
        <div class="ra-label">ROBINSON 4-CUP 1846</div>
      </div>
    `;
  }
}

customElements.define('concept-robinson-anemometer', ConceptRobinsonAnemometer);
