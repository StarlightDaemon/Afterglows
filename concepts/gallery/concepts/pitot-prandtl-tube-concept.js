const pitotPrandtlStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pp-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151e28 0%, #03060a 100%);
    border: 1.5px solid rgba(68, 138, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(68, 138, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pp-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pp-svg {
    width: 76px;
    height: 72px;
  }

  /* Traveling high-velocity airstream packet impacting stagnation port */
  .pp-airstream-packet {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #448aff;
    z-index: 6;
    animation: pp-air-shoot 1.6s linear infinite;
  }

  .air1 { top: 26px; animation-delay: 0s; }
  .air2 { top: 34px; animation-delay: 0.5s; }
  .air3 { top: 42px; animation-delay: 1.0s; }

  @keyframes pp-air-shoot {
    0% { transform: translateX(-32px) scale(0.6); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateX(8px) scale(1.3); opacity: 0; }
  }

  /* Static pressure side tap orifice inflow */
  .pp-static-ports {
    animation: pp-static-glow 1.6s ease-in-out infinite alternate;
  }

  @keyframes pp-static-glow {
    0% { stroke: #ffd700; opacity: 0.5; }
    100% { stroke: #ffff00; opacity: 1; filter: drop-shadow(0 0 3px #ffd700); }
  }

  /* Differential U-tube liquid manometer height delta with bold dynamic column surge */
  .pp-manometer-left {
    animation: pp-mano-left 2s ease-in-out infinite alternate;
  }

  .pp-manometer-right {
    animation: pp-mano-right 2s ease-in-out infinite alternate;
  }

  @keyframes pp-mano-left {
    0% { transform: scaleY(0.7); transform-origin: 50px 62px; }
    100% { transform: scaleY(1.4); transform-origin: 50px 62px; }
  }

  @keyframes pp-mano-right {
    0% { transform: scaleY(1.4); transform-origin: 58px 62px; }
    100% { transform: scaleY(0.7); transform-origin: 58px 62px; }
  }

  .pp-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(68, 138, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPitotPrandtlTube extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${pitotPrandtlStyles}</style>
      <div class="pp-box">
        <div class="pp-stage">
          <div class="pp-airstream-packet air1"></div>
          <div class="pp-airstream-packet air2"></div>
          <div class="pp-airstream-packet air3"></div>

          <svg class="pp-svg" viewBox="0 0 76 72">
            <!-- Incoming Relative Airflow Streamlines -->
            <g stroke="#448aff" stroke-width="1.2" stroke-dasharray="6 3" opacity="0.6">
              <path d="M 4 20 L 22 20" />
              <path d="M 4 28 L 22 28" />
              <path d="M 4 36 L 22 36" />
            </g>

            <!-- Prandtl Concentric Pitot-Static Probe Tube (L-Shaped Brass Probe) -->
            <!-- Outer Static Pressure Jacket Tube -->
            <path d="M 22 24 L 54 24 Q 58 24 58 28 L 58 48" fill="none" stroke="#ffd700" stroke-width="6" stroke-linecap="round" />
            <path d="M 22 24 L 54 24 Q 58 24 58 28 L 58 48" fill="none" stroke="#151e28" stroke-width="4.2" stroke-linecap="round" />

            <!-- Inner Stagnation / Total Impact Pressure Tube (P₀) -->
            <path d="M 20 24 L 54 24 Q 56 24 56 26 L 56 48" fill="none" stroke="#448aff" stroke-width="2" stroke-linecap="square" />
            <!-- Total Pressure Stagnation Nose Port -->
            <circle cx="20" cy="24" r="1.8" fill="#448aff" filter="drop-shadow(0 0 3px #448aff)" />

            <!-- Ring of Static Pressure Piezoelectric Piezometer Side Holes -->
            <g class="pp-static-ports">
              <circle cx="34" cy="21" r="1" fill="#ffff00" />
              <circle cx="34" cy="27" r="1" fill="#ffff00" />
              <circle cx="38" cy="21" r="1" fill="#ffff00" />
              <circle cx="38" cy="27" r="1" fill="#ffff00" />
            </g>

            <!-- Differential U-Tube Manometer -->
            <path d="M 50 48 L 50 62 Q 54 66 58 62 L 58 48" fill="none" stroke="#cfd8dc" stroke-width="2.8" />
            <!-- Manometer Indicator Liquid (Dynamic Pressure ΔP = ½ρV²) -->
            <g>
              <rect class="pp-manometer-left" x="48.5" y="52" width="3" height="10" fill="#ff5252" rx="0.5" />
              <rect class="pp-manometer-right" x="56.5" y="52" width="3" height="10" fill="#ff5252" rx="0.5" />
              <!-- Differential Δh marker line -->
              <line x1="46" y1="54" x2="62" y2="54" stroke="#00e5ff" stroke-width="0.6" stroke-dasharray="1 1" />
            </g>

            <!-- Bernoulli Airspeed Velocity Equation -->
            <text x="36" y="14" font-family="monospace" font-size="3.2" fill="#82b1ff" text-anchor="middle">V = √(2(P₀ - P_s)/ρ)</text>
          </svg>
        </div>
        <div class="pp-label">PITOT-PRANDTL TUBE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-pitot-prandtl-tube')) {
  customElements.define('concept-pitot-prandtl-tube', ConceptPitotPrandtlTube);
}
