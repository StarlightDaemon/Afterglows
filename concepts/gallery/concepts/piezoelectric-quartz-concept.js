const piezoelectricQuartzStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pq-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1915 0%, #080503 100%);
    border: 1.5px solid rgba(249, 115, 22, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(249, 115, 22, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pq-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pq-svg {
    width: 76px;
    height: 72px;
  }

  /* Hanging weight load applying compression tension to quartz plate */
  .pq-weight-load {
    animation: pq-weight-bounce 2s ease-in-out infinite alternate;
  }

  @keyframes pq-weight-bounce {
    0% { transform: translateY(0); }
    100% { transform: translateY(6px); }
  }

  /* Piezoelectric electrostatic charge spark & field polarization */
  .pq-charge-field {
    animation: pq-charge-pulse 3s ease-in-out infinite alternate;
  }

  @keyframes pq-charge-pulse {
    0% { opacity: 0.3; stroke: #ea580c; }
    50% { opacity: 0.6; }
    100% { opacity: 1; stroke: #fed7aa; filter: drop-shadow(0 0 3px #f97316); }
  }

  /* Electrometer gold needle deflection */
  .pq-electrometer-needle {
    transform-origin: 58px 30px;
    animation: pq-needle-swing 2s ease-in-out infinite alternate;
  }

  @keyframes pq-needle-swing {
    0% { transform: rotate(-28deg); }
    100% { transform: rotate(28deg); }
  }

  .pq-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(249, 115, 22, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPiezoelectricQuartz extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${piezoelectricQuartzStyles}</style>
      <div class="pq-box">
        <div class="pq-stage">
          <svg class="pq-svg" viewBox="0 0 76 72">
            <!-- 1880 Jacques & Pierre Curie Piezoelectric Quartz Electrometer -->
            <!-- Support Frame & Brass Pillar -->
            <line x1="22" y1="10" x2="22" y2="60" stroke="#78350f" stroke-width="1.4" />
            <line x1="14" y1="10" x2="30" y2="10" stroke="#b45309" stroke-width="1.2" />

            <!-- Clamped Quartz Crystal Lamina with Tin Foil Electrode Plates -->
            <g>
              <!-- Quartz Crystal Cut Bar -->
              <rect x="17" y="18" width="10" height="24" rx="1" fill="#431407" stroke="#fdba74" stroke-width="0.8" />
              <!-- Top & Bottom Clamping Jaws -->
              <rect x="15" y="16" width="14" height="3" fill="#d97706" />
              <rect x="15" y="41" width="14" height="3" fill="#d97706" />
              <!-- Surface Electrode Tin Foil Linings -->
              <line x1="17" y1="20" x2="17" y2="40" stroke="#fed7aa" stroke-width="0.6" />
              <line x1="27" y1="20" x2="27" y2="40" stroke="#fed7aa" stroke-width="0.6" />
            </g>

            <!-- Mechanical Weight Pan & Hanging Mass Hook -->
            <g class="pq-weight-load">
              <line x1="22" y1="44" x2="22" y2="52" stroke="#d97706" stroke-width="0.9" />
              <!-- Brass Hanging Weight Cylinder -->
              <polygon points="18,52 26,52 25,58 19,58" fill="#b45309" stroke="#f59e0b" stroke-width="0.7" />
            </g>

            <!-- Piezoelectric Charge Transfer Conductor Wire -->
            <path class="pq-charge-field" d="M 27 30 L 44 30 L 44 24 L 58 24" fill="none" stroke-width="0.9" stroke-dasharray="2 1" />

            <!-- Kelvin/Curie Quadrant Electrometer Housing (Right) -->
            <circle cx="58" cy="30" r="14" fill="#1c1917" stroke="#ea580c" stroke-width="1" />
            <!-- Quadrant Sectors -->
            <path d="M 48 30 A 10 10 0 0 1 58 20 L 58 30 Z" fill="#292524" stroke="#f97316" stroke-width="0.5" />
            <path d="M 68 30 A 10 10 0 0 1 58 40 L 58 30 Z" fill="#292524" stroke="#f97316" stroke-width="0.5" />

            <!-- Deflecting Electrometer Light Gold Foil Vane / Needle -->
            <g class="pq-electrometer-needle">
              <line x1="58" y1="30" x2="58" y2="17" stroke="#fbbf24" stroke-width="1.6" stroke-linecap="round" />
              <!-- Mirror Dot at Pivot -->
              <circle cx="58" cy="30" r="1.5" fill="#fef08a" />
            </g>
          </svg>
        </div>
        <div class="pq-label">CURIE PIEZO 1880</div>
      </div>
    `;
  }
}

customElements.define('concept-piezoelectric-quartz', ConceptPiezoelectricQuartz);
