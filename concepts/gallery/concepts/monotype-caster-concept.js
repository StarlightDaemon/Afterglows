const monotypeCasterStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .mc-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #152220 0%, #030807 100%);
    border: 1.5px solid rgba(0, 230, 118, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 230, 118, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mc-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mc-svg {
    width: 76px;
    height: 72px;
  }

  /* Punched 31-channel paper ribbon tape pneumatic feed */
  .mc-paper-tape {
    animation: mc-tape-advance 2.2s linear infinite;
  }

  @keyframes mc-tape-advance {
    to { stroke-dashoffset: -18; }
  }

  /* 225-character matrix case 2D X-Y coordinate positioning shift */
  .mc-matrix-case {
    animation: mc-case-hunt 1.2s steps(4) infinite alternate;
  }

  @keyframes mc-case-hunt {
    0% { transform: translate(-2px, -2px); }
    33% { transform: translate(3px, -1px); }
    66% { transform: translate(-1px, 2px); }
    100% { transform: translate(2px, 3px); }
  }

  /* High-speed metal pump casting single individual type character */
  .mc-type-stream {
    animation: mc-stream-push 1.2s linear infinite;
  }

  @keyframes mc-stream-push {
    0% { transform: translateX(0); }
    100% { transform: translateX(12px); }
  }

  /* Air blast / pneumatic nozzle pressure glow */
  .mc-air-nozzle {
    animation: mc-air-pulse 0.6s ease-in-out infinite alternate;
  }

  @keyframes mc-air-pulse {
    0% { opacity: 0.3; stroke: #69f0ae; }
    100% { opacity: 1; stroke: #ffffff; filter: drop-shadow(0 0 2px #00e676); }
  }

  .mc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 230, 118, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptMonotypeCaster extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${monotypeCasterStyles}</style>
      <div class="mc-box">
        <div class="mc-stage">
          <svg class="mc-svg" viewBox="0 0 76 72">
            <!-- Lanston Monotype Hot-Metal Single-Type Caster Mechanism -->
            <!-- 31-Channel Punched Paper Ribbon Controller (Top) -->
            <rect x="10" y="8" width="56" height="14" rx="1" fill="#fffde7" stroke="#cfd8dc" stroke-width="0.8" />
            <!-- Continuous Stream of Binary Air Control Holes -->
            <g class="mc-paper-tape">
              <line x1="12" y1="12" x2="64" y2="12" stroke="#212121" stroke-width="1.2" stroke-dasharray="2 3" />
              <line x1="12" y1="15" x2="64" y2="15" stroke="#212121" stroke-width="1.2" stroke-dasharray="3 2" />
              <line x1="12" y1="18" x2="64" y2="18" stroke="#212121" stroke-width="1.2" stroke-dasharray="1 3" />
            </g>

            <!-- Pneumatic Air-Tower Cylinder Bank (31 Compressed Air Pins) -->
            <g class="mc-air-nozzle">
              <rect x="30" y="20" width="16" height="5" fill="#37474f" stroke="#00e676" stroke-width="0.6" />
              <line x1="33" y1="20" x2="33" y2="25" stroke-width="0.8" />
              <line x1="38" y1="20" x2="38" y2="25" stroke-width="0.8" />
              <line x1="43" y1="20" x2="43" y2="25" stroke-width="0.8" />
            </g>

            <!-- 15x15 (225 Cell) Movable Brass Matrix Case (Grid of individual brass matrices) -->
            <g class="mc-matrix-case">
              <rect x="26" y="28" width="24" height="18" rx="1" fill="#1b2e22" stroke="#ffd700" stroke-width="1" />
              <!-- Matrix Grid Cells -->
              <line x1="32" y1="28" x2="32" y2="46" stroke="#ffb300" stroke-width="0.5" stroke-dasharray="1 1" />
              <line x1="38" y1="28" x2="38" y2="46" stroke="#ffb300" stroke-width="0.5" stroke-dasharray="1 1" />
              <line x1="44" y1="28" x2="44" y2="46" stroke="#ffb300" stroke-width="0.5" stroke-dasharray="1 1" />
              <line x1="26" y1="34" x2="50" y2="34" stroke="#ffb300" stroke-width="0.5" stroke-dasharray="1 1" />
              <line x1="26" y1="40" x2="50" y2="40" stroke="#ffb300" stroke-width="0.5" stroke-dasharray="1 1" />
              <!-- Selected active character matrix highlight -->
              <rect x="35" y="31" width="3" height="3" fill="#00e676" filter="drop-shadow(0 0 2px #00e676)" />
            </g>

            <!-- Adjustable Mold Blade & Metal Pump Nozzle (Bottom Center) -->
            <rect x="34" y="48" width="8" height="8" rx="0.5" fill="#455a64" stroke="#78909c" stroke-width="0.6" />
            <circle cx="38" cy="52" r="1.5" fill="#ff5722" />

            <!-- Stream of Individual Movable Type Characters Ejected into Line Channel -->
            <g class="mc-type-stream">
              <!-- Individual metal type sorts (Letter A, B, C, D) -->
              <rect x="44" y="50" width="3" height="6" fill="#cfd8dc" stroke="#263238" stroke-width="0.5" />
              <rect x="49" y="50" width="3" height="6" fill="#cfd8dc" stroke="#263238" stroke-width="0.5" />
              <rect x="54" y="50" width="3" height="6" fill="#cfd8dc" stroke="#263238" stroke-width="0.5" />
              <rect x="59" y="50" width="3" height="6" fill="#cfd8dc" stroke="#263238" stroke-width="0.5" />
            </g>

            <!-- Type Output Delivery Channel -->
            <rect x="42" y="56" width="28" height="3" fill="#212121" stroke="#546e7a" stroke-width="0.5" />
          </svg>
        </div>
        <div class="mc-label">MONOTYPE CASTER</div>
      </div>
    `;
  }
}

customElements.define('concept-monotype-caster', ConceptMonotypeCaster);
