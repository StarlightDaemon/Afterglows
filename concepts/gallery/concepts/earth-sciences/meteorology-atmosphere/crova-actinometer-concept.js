const crovaActinometerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ca-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #221a14 0%, #080503 100%);
    border: 1.5px solid rgba(249, 115, 22, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(249, 115, 22, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ca-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ca-svg {
    width: 76px;
    height: 72px;
  }

  /* Solar insolation radiation flux rays */
  .ca-solar-rays {
    animation: ca-rays-pulse 2.2s ease-in-out infinite alternate;
  }

  @keyframes ca-rays-pulse {
    0% { opacity: 0.4; }
    100% { opacity: 0.95; stroke: #fde047; filter: drop-shadow(0 0 3px #f97316); }
  }

  /* Blackened disk calorimeter heating absorption glow */
  .ca-calorimeter-disk {
    animation: ca-disk-glow 3.5s ease-in-out infinite alternate;
  }

  @keyframes ca-disk-glow {
    0% { fill: #431407; stroke: #ea580c; }
    100% { fill: #b45309; stroke: #fde047; filter: drop-shadow(0 0 4px #ea580c); }
  }

  /* Precision thermometer alcohol/mercury meniscus expansion */
  .ca-thermometer-stem {
    animation: ca-stem-rise 3.5s ease-in-out infinite alternate;
  }

  @keyframes ca-stem-rise {
    0% { y: 34px; height: 16px; }
    100% { y: 22px; height: 28px; }
  }

  .ca-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(249, 115, 22, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCrovaActinometer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${crovaActinometerStyles}</style>
      <div class="ca-box">
        <div class="ca-stage">
          <svg class="ca-svg" viewBox="0 0 76 72">
            <!-- 1877 André Crova Absolute Solar Radiation Actinometer -->
            <!-- Double-Walled Brass Spherical Water-Jacket Chamber -->
            <circle cx="38" cy="38" r="22" fill="#1c1917" stroke="#ca8a04" stroke-width="1.2" />
            <circle cx="38" cy="38" r="18" fill="#292524" stroke="#92400e" stroke-width="0.8" />

            <!-- Collimated Sighting Tube & Diaphragm Aperture (Top Pointing to Sun) -->
            <rect x="33" y="6" width="10" height="12" rx="1" fill="#1c1917" stroke="#f59e0b" stroke-width="0.8" />
            <circle cx="38" cy="6" r="3" fill="#030712" stroke="#ea580c" stroke-width="0.6" />

            <!-- Incoming Solar Direct Insolation Beam (Cal/cm²/min) -->
            <g class="ca-solar-rays" stroke="#fef08a" stroke-width="1" stroke-dasharray="2 1.5">
              <line x1="38" y1="2" x2="38" y2="30" />
              <line x1="35" y1="2" x2="35" y2="30" />
              <line x1="41" y1="2" x2="41" y2="30" />
            </g>

            <!-- Blackened Platinum/Copper Disk Calorimeter Receiver -->
            <circle class="ca-calorimeter-disk" cx="38" cy="36" r="6" stroke-width="1" />

            <!-- Highly Sensitive Enclosed Mercury Thermometer Stem (Left Angle) -->
            <rect x="14" y="20" width="4" height="32" rx="2" fill="#0f172a" stroke="#94a3b8" stroke-width="0.6" />
            <!-- Thermometer Rising Liquid Thread -->
            <rect class="ca-thermometer-stem" x="15.5" y="26" width="1" height="24" fill="#ef4444" />
            <!-- Sensing Bulb Immersed in Disk Calorimeter Core -->
            <circle cx="16" cy="52" r="2.5" fill="#ef4444" />

            <!-- Polar Mount Tripod Base Supporting Equatorial Axis -->
            <polygon points="34,60 42,60 40,66 36,66" fill="#451a03" stroke="#b45309" stroke-width="0.6" />
            <line x1="26" y1="66" x2="50" y2="66" stroke="#b45309" stroke-width="1" />
          </svg>
        </div>
        <div class="ca-label">CROVA ACTINOMETER</div>
      </div>
    `;
  }
}

customElements.define('concept-crova-actinometer', ConceptCrovaActinometer);
