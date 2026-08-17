const torricelliBarometerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tb-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1c1d22 0%, #06070a 100%);
    border: 1.5px solid rgba(148, 163, 184, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(148, 163, 184, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tb-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tb-svg {
    width: 76px;
    height: 72px;
  }

  /* Mercury column height breathing with barometric pressure */
  .tb-mercury-column {
    animation: tb-column-breathe 2.6s ease-in-out infinite alternate;
  }

  @keyframes tb-column-breathe {
    0% { y: 26px; height: 32px; }
    100% { y: 12px; height: 46px; }
  }

  /* Convex meniscus riding the top of the column */
  .tb-meniscus {
    animation: tb-meniscus-ride 2.6s ease-in-out infinite alternate;
  }

  @keyframes tb-meniscus-ride {
    0% { transform: translateY(0); }
    100% { transform: translateY(-14px); }
  }

  /* Torricellian vacuum shimmer at top of sealed tube */
  .tb-torricelli-vacuum {
    animation: tb-vacuum-gleam 2.5s ease-in-out infinite alternate;
  }

  @keyframes tb-vacuum-gleam {
    0% { opacity: 0.2; }
    100% { opacity: 0.8; filter: drop-shadow(0 0 2px #38bdf8); }
  }

  /* Atmospheric pressure arrows pushing down on cistern pool */
  .tb-pressure-vector {
    animation: tb-vector-pulse 1.8s ease-in-out infinite alternate;
  }

  @keyframes tb-vector-pulse {
    0% { transform: translateY(0); opacity: 0.5; }
    100% { transform: translateY(2px); opacity: 1; stroke: #38bdf8; }
  }

  .tb-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(203, 213, 225, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptTorricelliBarometer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${torricelliBarometerStyles}</style>
      <div class="tb-box">
        <div class="tb-stage">
          <svg class="tb-svg" viewBox="0 0 76 72">
            <!-- 1643 Evangelista Torricelli Mercury Vacuum Barometer -->
            <!-- Wooden Mounting Plinth & 760mm Height Scale -->
            <rect x="22" y="6" width="32" height="60" rx="2" fill="#1e1814" stroke="#4e342e" stroke-width="0.8" />
            <!-- Millimeter Graduation Ticks (760 mmHg) -->
            <line x1="24" y1="16" x2="29" y2="16" stroke="#fbbf24" stroke-width="0.6" />
            <line x1="24" y1="20" x2="28" y2="20" stroke="#fbbf24" stroke-width="0.4" />
            <line x1="24" y1="24" x2="28" y2="24" stroke="#fbbf24" stroke-width="0.4" />
            <line x1="24" y1="28" x2="28" y2="28" stroke="#fbbf24" stroke-width="0.4" />

            <!-- Bottom Open Mercury Cistern Basin / Reservoir -->
            <ellipse cx="38" cy="58" rx="14" ry="5" fill="#334155" stroke="#94a3b8" stroke-width="0.8" />
            <ellipse cx="38" cy="56" rx="12" ry="4" fill="#94a3b8" />

            <!-- Atmospheric Pressure Downward Vectors (P_atm) -->
            <g class="tb-pressure-vector" stroke="#60a5fa" stroke-width="0.8">
              <line x1="28" y1="46" x2="28" y2="53" marker-end="url(#tb-arrow)" />
              <path d="M 27 51 L 28 54 L 29 51" fill="none" />
              <line x1="48" y1="46" x2="48" y2="53" />
              <path d="M 47 51 L 48 54 L 49 51" fill="none" />
            </g>

            <!-- Inverted Glass Barometer Tube (Sealed at top, immersed at bottom) -->
            <rect x="33" y="8" width="10" height="50" rx="4" fill="#0f172a" fill-opacity="0.4" stroke="#cbd5e1" stroke-width="0.8" />

            <!-- Torricellian Vacuum Space (Top Void) -->
            <rect class="tb-torricelli-vacuum" x="34" y="9" width="8" height="10" rx="3" fill="#0284c7" />

            <!-- Liquid Mercury Column Rising up Tube (760mm hydrostatic balance) -->
            <rect class="tb-mercury-column" x="34" y="26" width="8" height="32" fill="#e2e8f0" />
            <!-- Mercury Convex Meniscus -->
            <ellipse class="tb-meniscus" cx="38" cy="26" rx="4" ry="1.2" fill="#f8fafc" />

            <!-- Glass Reflection Specular Line -->
            <line x1="34.5" y1="12" x2="34.5" y2="54" stroke="#ffffff" stroke-width="0.5" opacity="0.6" />
          </svg>
        </div>
        <div class="tb-label">TORRICELLI 760mm</div>
      </div>
    `;
  }
}

customElements.define('concept-torricelli-barometer', ConceptTorricelliBarometer);
