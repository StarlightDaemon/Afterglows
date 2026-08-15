const eiffelTunnelStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .et-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #162224 0%, #030708 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .et-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .et-svg {
    width: 76px;
    height: 72px;
  }

  /* High-speed suction fan rotor spinning in collector diffuser */
  .et-suction-fan {
    transform-origin: 66px 36px;
    animation: et-fan-spin 0.25s linear infinite;
  }

  @keyframes et-fan-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* High-velocity open-jet airflow streamlines through test chamber */
  .et-flow-lines path {
    stroke: #80d8ff;
    stroke-width: 0.8;
    fill: none;
    animation: et-flow-rush 0.8s linear infinite;
  }

  @keyframes et-flow-rush {
    to { stroke-dashoffset: -16; }
  }

  /* Scale airfoil model on aerodynamic balance pitching */
  .et-airfoil-model {
    animation: et-foil-angle 2.8s ease-in-out infinite alternate;
    transform-origin: 38px 36px;
  }

  @keyframes et-foil-angle {
    0% { transform: rotate(-8deg); }
    100% { transform: rotate(12deg); }
  }

  /* Multimanometer alcohol column level deflection */
  .et-manometer-fluid {
    animation: et-fluid-bob 1.4s ease-in-out infinite alternate;
  }

  @keyframes et-fluid-bob {
    0% { transform: scaleY(0.7); }
    100% { transform: scaleY(1.3); }
  }

  .et-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptEiffelAeroTunnel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${eiffelTunnelStyles}</style>
      <div class="et-box">
        <div class="et-stage">
          <svg class="et-svg" viewBox="0 0 76 72">
            <!-- Eiffel Open-Jet Aerodynamic Wind Tunnel Housing -->
            <!-- Bell-Mouth Intake Nozzle (Left) -->
            <path d="M 6 16 C 14 16 18 26 22 26 L 22 46 C 18 46 14 56 6 56 Z" fill="#1e293b" stroke="#78909c" stroke-width="0.8" />
            <!-- Honeycomb Flow Straightener Mesh in Bellmouth -->
            <line x1="16" y1="22" x2="16" y2="50" stroke="#00e5ff" stroke-width="0.6" stroke-dasharray="1 1" />

            <!-- Open Working Test Chamber (Center) -->
            <rect x="22" y="16" width="32" height="40" fill="none" stroke="#334155" stroke-width="0.6" stroke-dasharray="2 2" />

            <!-- Diffuser Collector Cone & Suction Fan Casing (Right) -->
            <path d="M 54 26 C 58 26 62 16 70 16 L 70 56 C 62 56 58 46 54 46 Z" fill="#1e293b" stroke="#78909c" stroke-width="0.8" />

            <!-- High-Speed Suction Fan Rotor (Far Right) -->
            <g class="et-suction-fan">
              <line x1="66" y1="20" x2="66" y2="52" stroke="#ffd700" stroke-width="1.8" stroke-linecap="round" />
              <line x1="53" y1="28" x2="79" y2="44" stroke="#ffd700" stroke-width="1.8" stroke-linecap="round" />
            </g>

            <!-- Accelerated High-Velocity Streamlines -->
            <g class="et-flow-lines" stroke-dasharray="8 4">
              <path d="M 8 30 L 68 30" />
              <path d="M 8 36 L 68 36" />
              <path d="M 8 42 L 68 42" />
            </g>

            <!-- Test Aerofoil Model on Precision Overhead Drag/Lift Balance Pivot -->
            <line x1="38" y1="16" x2="38" y2="34" stroke="#ffd700" stroke-width="0.8" />
            <g class="et-airfoil-model">
              <!-- Cambered Göttingen / Eiffel Aerofoil Cross Section -->
              <path d="M 28 36 Q 38 31 48 35 Q 38 38 28 36 Z" fill="#00e5ff" stroke="#ffffff" stroke-width="0.8" filter="drop-shadow(0 0 2px #00e5ff)" />
            </g>

            <!-- Multitube Alcohol Manometer Pressure Distribution Bank (Bottom) -->
            <g transform="translate(26, 58)">
              <rect x="0" y="0" width="24" height="8" rx="0.5" fill="#0f172a" stroke="#475569" stroke-width="0.5" />
              <g class="et-manometer-fluid" transform-origin="0 8">
                <line x1="4" y1="2" x2="4" y2="8" stroke="#ff5252" stroke-width="1" />
                <line x1="8" y1="4" x2="8" y2="8" stroke="#ff5252" stroke-width="1" />
                <line x1="12" y1="1" x2="12" y2="8" stroke="#ff5252" stroke-width="1" />
                <line x1="16" y1="3" x2="16" y2="8" stroke="#ff5252" stroke-width="1" />
                <line x1="20" y1="5" x2="20" y2="8" stroke="#ff5252" stroke-width="1" />
              </g>
            </g>
          </svg>
        </div>
        <div class="et-label">EIFFEL AERO TUNNEL</div>
      </div>
    `;
  }
}

customElements.define('concept-eiffel-aero-tunnel', ConceptEiffelAeroTunnel);
