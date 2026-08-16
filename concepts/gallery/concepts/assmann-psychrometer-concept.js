const assmannPsychrometerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ap-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #161c24 0%, #05080d 100%);
    border: 1.5px solid rgba(56, 189, 248, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ap-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ap-svg {
    width: 76px;
    height: 72px;
  }

  /* Clockwork suction fan impeller spinning at top */
  .ap-fan-spin {
    animation: ap-fan-rotate 1.2s linear infinite;
    transform-origin: 38px 14px;
    filter: drop-shadow(0 0 3px #bae6fd);
  }

  @keyframes ap-fan-rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Aspirated airflow stream entering bottom chrome radiation tubes */
  .ap-airflow-stream {
    animation: ap-air-flow 1.5s ease-in-out infinite alternate;
  }

  @keyframes ap-air-flow {
    0% { stroke-dashoffset: 0; opacity: 0.2; }
    100% { stroke-dashoffset: 24; opacity: 1; stroke: #ffffff; filter: drop-shadow(0 0 3px #38bdf8); }
  }

  /* Polished chrome radiation shields glinting as air is drawn through */
  .ap-chrome-tube {
    animation: ap-chrome-glint 1.5s ease-in-out infinite alternate;
  }

  @keyframes ap-chrome-glint {
    0% { stroke: #64748b; stroke-width: 0.8; }
    100% { stroke: #f8fafc; stroke-width: 1.8; filter: drop-shadow(0 0 3px #94a3b8); }
  }

  /* Fan housing whir glow while the clockwork motor runs */
  .ap-fan-housing {
    animation: ap-housing-whir 1.4s ease-in-out infinite alternate;
  }

  @keyframes ap-housing-whir {
    0% { stroke: #38bdf8; filter: drop-shadow(0 0 1px #38bdf8); }
    100% { stroke: #ffffff; filter: drop-shadow(0 0 6px #7dd3fc); }
  }

  /* Wet-bulb evaporative cooling differential shimmer */
  .ap-wet-bulb-wick {
    animation: ap-wick-evaporate 2.5s ease-in-out infinite alternate;
  }

  @keyframes ap-wick-evaporate {
    0% { fill: #0284c7; transform: scale(0.8); filter: drop-shadow(0 0 1px #38bdf8); }
    100% { fill: #bae6fd; transform: scale(1.5); filter: drop-shadow(0 0 6px #bae6fd); }
  }

  .ap-wet-bulb-wick {
    transform-box: fill-box;
    transform-origin: center;
  }

  .ap-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(56, 189, 248, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptAssmannPsychrometer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${assmannPsychrometerStyles}</style>
      <div class="ap-box">
        <div class="ap-stage">
          <svg class="ap-svg" viewBox="0 0 76 72">
            <!-- 1887 Richard Assmann Aspirated Precision Psychrometer -->
            <!-- Top Clockwork Centrifugal Suction Fan Housing (Spring Motor) -->
            <rect x="28" y="8" width="20" height="12" rx="2" fill="#1e293b" stroke="#0284c7" stroke-width="0.9" />
            <circle class="ap-fan-housing" cx="38" cy="14" r="5" fill="#0f172a" stroke="#38bdf8" stroke-width="1.2" />

            <!-- Spinning Fan Impeller Blades -->
            <g class="ap-fan-spin" stroke="#bae6fd" stroke-width="1.4">
              <line x1="38" y1="9.5" x2="38" y2="18.5" />
              <line x1="33.5" y1="14" x2="42.5" y2="14" />
              <line x1="35" y1="11" x2="41" y2="17" stroke-width="1" />
            </g>

            <!-- Twin Polished Chrome Radiation Shield Tubes (Double-Walled) -->
            <rect class="ap-chrome-tube" x="23" y="24" width="11" height="34" rx="2" fill="#0f172a" stroke="#94a3b8" stroke-width="0.8" />
            <rect class="ap-chrome-tube" x="42" y="24" width="11" height="34" rx="2" fill="#0f172a" stroke="#94a3b8" stroke-width="0.8" />

            <!-- Aspiration Air Stream Inflow Arrows (2.5 m/s ventilation) -->
            <g class="ap-airflow-stream" stroke="#7dd3fc" stroke-width="2.6" stroke-dasharray="4 4" fill="none">
              <line x1="28.5" y1="64" x2="28.5" y2="24" />
              <line x1="47.5" y1="64" x2="47.5" y2="24" />
            </g>

            <!-- Left: Dry-Bulb Mercury Thermometer Stem -->
            <rect x="27" y="26" width="3" height="26" rx="1.5" fill="#1e293b" stroke="#cbd5e1" stroke-width="0.4" />
            <rect x="28" y="34" width="1" height="18" fill="#ef4444" />
            <circle cx="28.5" cy="53" r="2.2" fill="#ef4444" />

            <!-- Right: Wet-Bulb Thermometer with Muslin Water Wick -->
            <rect x="46" y="26" width="3" height="26" rx="1.5" fill="#1e293b" stroke="#cbd5e1" stroke-width="0.4" />
            <rect x="47" y="38" width="1" height="14" fill="#0284c7" />
            <!-- Moistened Muslin Sock Bulb -->
            <circle class="ap-wet-bulb-wick" cx="47.5" cy="53" r="2.4" />

            <!-- Central Connecting Air Manifold & Carrying Handle -->
            <path d="M 28 24 L 38 20 L 48 24" fill="none" stroke="#64748b" stroke-width="1" />
            <circle cx="38" cy="6" r="2" fill="none" stroke="#94a3b8" stroke-width="0.8" />
          </svg>
        </div>
        <div class="ap-label">ASSMANN PSYCHROMETER</div>
      </div>
    `;
  }
}

customElements.define('concept-assmann-psychrometer', ConceptAssmannPsychrometer);
