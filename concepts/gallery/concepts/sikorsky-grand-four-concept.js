const sikorskyGrandStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1a221a 0%, #040805 100%);
    border: 1.5px solid rgba(102, 187, 106, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(102, 187, 106, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sg-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sg-svg {
    width: 76px;
    height: 72px;
  }

  /* 4-engine giant biplane high-altitude flight path */
  .sg-plane-flight {
    animation: sg-heavy-cruise 4.2s ease-in-out infinite alternate;
    transform-origin: 38px 36px;
  }

  @keyframes sg-heavy-cruise {
    0% { transform: translateY(-3px) rotate(-1.5deg); }
    100% { transform: translateY(3px) rotate(1.5deg); }
  }

  /* 4 inline tractor propellers synchronized high-speed spinning */
  .sg-prop-1 { transform-origin: 16px 34px; animation: sg-prop-rev 0.3s linear infinite; }
  .sg-prop-2 { transform-origin: 28px 34px; animation: sg-prop-rev 0.3s linear infinite; }
  .sg-prop-3 { transform-origin: 48px 34px; animation: sg-prop-rev 0.3s linear infinite; }
  .sg-prop-4 { transform-origin: 60px 34px; animation: sg-prop-rev 0.3s linear infinite; }

  @keyframes sg-prop-rev {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Enclosed passenger cabin lighted windows */
  .sg-cabin-lights {
    animation: sg-window-glow 2s ease-in-out infinite alternate;
  }

  @keyframes sg-window-glow {
    0% { fill: #fff59d; }
    100% { fill: #ffffff; filter: drop-shadow(0 0 2px #fff59d); }
  }

  .sg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(102, 187, 106, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptSikorskyGrandFour extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${sikorskyGrandStyles}</style>
      <div class="sg-box">
        <div class="sg-stage">
          <svg class="sg-svg" viewBox="0 0 76 72">
            <!-- 1913 Sikorsky Grand (Russky Vityaz / Ilya Muromets) 4-Engine Multi-Engine Aircraft -->
            <g class="sg-plane-flight">
              <!-- Massive 28-Meter Span Upper Biplane Wing -->
              <rect x="6" y="24" width="64" height="3" rx="0.5" fill="#dcedc8" stroke="#66bb6a" stroke-width="0.8" />
              <!-- Lower Biplane Wing -->
              <rect x="12" y="38" width="52" height="3" rx="0.5" fill="#dcedc8" stroke="#66bb6a" stroke-width="0.8" />

              <!-- Interplane Pine Struts & Pratt Truss Bracing Wires -->
              <g stroke="#8d6e63" stroke-width="0.8">
                <line x1="16" y1="27" x2="16" y2="38" />
                <line x1="28" y1="27" x2="28" y2="38" />
                <line x1="38" y1="27" x2="38" y2="38" />
                <line x1="48" y1="27" x2="48" y2="38" />
                <line x1="60" y1="27" x2="60" y2="38" />
              </g>
              <g stroke="#cfd8dc" stroke-width="0.4" stroke-dasharray="1 1">
                <line x1="16" y1="27" x2="28" y2="38" />
                <line x1="28" y1="27" x2="16" y2="38" />
                <line x1="48" y1="27" x2="60" y2="38" />
                <line x1="60" y1="27" x2="48" y2="38" />
              </g>

              <!-- Central Enclosed Heated Glass Passenger Cabin & Cockpit Promenade (First in aviation) -->
              <rect x="34" y="34" width="8" height="12" rx="1" fill="#2e382e" stroke="#ffd700" stroke-width="0.6" />
              <!-- Cabin Glass Windows -->
              <g class="sg-cabin-lights">
                <rect x="35.5" y="36" width="2" height="2" />
                <rect x="38.5" y="36" width="2" height="2" />
                <rect x="35.5" y="40" width="2" height="2" />
                <rect x="38.5" y="40" width="2" height="2" />
              </g>

              <!-- 4 In-Line 100-HP Argus Tractor Engines Mounted on Lower Wing -->
              <!-- Engine Nacelles 1, 2, 3, 4 -->
              <rect x="14" y="32" width="4" height="8" rx="0.5" fill="#37474f" stroke="#78909c" stroke-width="0.5" />
              <rect x="26" y="32" width="4" height="8" rx="0.5" fill="#37474f" stroke="#78909c" stroke-width="0.5" />
              <rect x="46" y="32" width="4" height="8" rx="0.5" fill="#37474f" stroke="#78909c" stroke-width="0.5" />
              <rect x="58" y="32" width="4" height="8" rx="0.5" fill="#37474f" stroke="#78909c" stroke-width="0.5" />

              <!-- 4 Spinning Two-Bladed Wooden Propellers -->
              <g class="sg-prop-1"><line x1="16" y1="26" x2="16" y2="42" stroke="#ffeb3b" stroke-width="1.2" stroke-linecap="round" /></g>
              <g class="sg-prop-2"><line x1="28" y1="26" x2="28" y2="42" stroke="#ffeb3b" stroke-width="1.2" stroke-linecap="round" /></g>
              <g class="sg-prop-3"><line x1="48" y1="26" x2="48" y2="42" stroke="#ffeb3b" stroke-width="1.2" stroke-linecap="round" /></g>
              <g class="sg-prop-4"><line x1="60" y1="26" x2="60" y2="42" stroke="#ffeb3b" stroke-width="1.2" stroke-linecap="round" /></g>

              <!-- Multi-Wheel Tandem Landing Gear Bogie (Bottom) -->
              <circle cx="35" cy="49" r="1.5" fill="#212121" />
              <circle cx="41" cy="49" r="1.5" fill="#212121" />
              <line x1="33" y1="49" x2="43" y2="49" stroke="#616161" stroke-width="0.8" />
            </g>
          </svg>
        </div>
        <div class="sg-label">SIKORSKY GRAND FOUR</div>
      </div>
    `;
  }
}

customElements.define('concept-sikorsky-grand-four', ConceptSikorskyGrandFour);
