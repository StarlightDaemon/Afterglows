const stanhopeToggleStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .st-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e2024 0%, #050608 100%);
    border: 1.5px solid rgba(144, 202, 249, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(144, 202, 249, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .st-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .st-svg {
    width: 76px;
    height: 72px;
  }

  /* Stanhope compound knuckle toggle lever stroke */
  .st-toggle-arm {
    transform-origin: 38px 22px;
    animation: st-toggle-action 3.4s ease-in-out infinite alternate;
  }

  @keyframes st-toggle-action {
    0% { transform: rotate(-24deg); }
    60% { transform: rotate(16deg); }
    100% { transform: rotate(-20deg); }
  }

  /* Massive iron platen downward high-tonnage impression stroke */
  .st-platen-block {
    animation: st-press-iron 3.4s ease-in-out infinite alternate;
  }

  @keyframes st-press-iron {
    0% { transform: translateY(0); }
    60% { transform: translateY(3px); }
    100% { transform: translateY(0); }
  }

  /* Mechanical advantage force vector multiplication glow */
  .st-force-glow {
    animation: st-force-pulse 3.4s ease-in-out infinite alternate;
  }

  @keyframes st-force-pulse {
    0% { opacity: 0.2; }
    55% { opacity: 1; stroke: #ffeb3b; filter: drop-shadow(0 0 3px #ffeb3b); }
    100% { opacity: 0.2; }
  }

  .st-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(144, 202, 249, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptStanhopeToggle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${stanhopeToggleStyles}</style>
      <div class="st-box">
        <div class="st-stage">
          <svg class="st-svg" viewBox="0 0 76 72">
            <!-- Massive 1800 Lord Stanhope Solid Cast-Iron Monolithic Frame -->
            <!-- Curved Upper Head Arch & Side Stanchions -->
            <path d="M 18 10 C 26 8 50 8 58 10 L 58 58 L 50 58 L 50 20 L 26 20 L 26 58 L 18 58 Z" fill="#212730" stroke="#78909c" stroke-width="1.2" />

            <!-- Solid Cast Iron Bed Base -->
            <rect x="14" y="58" width="48" height="6" rx="1" fill="#1e242c" stroke="#546e7a" stroke-width="0.8" />

            <!-- Stanhope Compound Interlocking Knuckle-Joint Toggle Levers -->
            <g class="st-toggle-arm">
              <!-- Operating Handle Bar -->
              <line x1="38" y1="22" x2="68" y2="14" stroke="#ffd700" stroke-width="1.8" stroke-linecap="round" />
              <circle cx="68" cy="14" r="2" fill="#d7ccc8" />

              <!-- Compound Pivot Knuckle Toggle Linkage Bars -->
              <line class="st-force-glow" x1="38" y1="22" x2="32" y2="30" stroke="#64b5f6" stroke-width="1.6" />
              <line class="st-force-glow" x1="32" y1="30" x2="38" y2="36" stroke="#64b5f6" stroke-width="1.6" />
              <!-- Pivot Pins -->
              <circle cx="38" cy="22" r="1.5" fill="#ffd700" />
              <circle cx="32" cy="30" r="1.8" fill="#ffb300" />
              <circle cx="38" cy="36" r="1.5" fill="#ffd700" />
            </g>

            <!-- Heavy One-Piece Cast-Iron Platen (Prints full folio sheet in one pull) -->
            <g class="st-platen-block">
              <rect x="24" y="36" width="28" height="6" rx="0.5" fill="#37474f" stroke="#90caf9" stroke-width="0.8" />
              <line x1="26" y1="39" x2="50" y2="39" stroke="#b0bec5" stroke-width="0.5" />
            </g>

            <!-- Iron Carriage Bed & Forme of Cast Metal Type -->
            <rect x="22" y="48" width="32" height="5" rx="0.5" fill="#1b222a" stroke="#607d8b" stroke-width="0.6" />
            <line x1="26" y1="46" x2="50" y2="46" stroke="#ffffff" stroke-width="0.8" stroke-dasharray="1.5 1" />

            <!-- High-Pressure Mechanical Advantage Readout -->
            <text x="38" y="62" font-family="monospace" font-size="3" fill="#90caf9" text-anchor="middle">TOGGLE: 1 PULL = FULL FOLIO</text>
          </svg>
        </div>
        <div class="st-label">STANHOPE TOGGLE</div>
      </div>
    `;
  }
}

customElements.define('concept-stanhope-toggle', ConceptStanhopeToggle);
