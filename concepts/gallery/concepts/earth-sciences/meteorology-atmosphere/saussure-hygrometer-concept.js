const saussureHygrometerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sh-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1a14 0%, #060503 100%);
    border: 1.5px solid rgba(245, 158, 11, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sh-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sh-svg {
    width: 76px;
    height: 72px;
  }

  /* Human hair strand elongating and contracting under humidity */
  .sh-hair-strand {
    animation: sh-hair-expand 4s ease-in-out infinite alternate;
  }

  @keyframes sh-hair-expand {
    0% { y2: 44px; stroke: #fbbf24; }
    100% { y2: 47px; stroke: #fed7aa; }
  }

  /* Index needle sweeping across graduated ivory arc (0 to 100 degrees humidity) */
  .sh-index-pointer {
    transform-origin: 38px 46px;
    animation: sh-pointer-sweep 4s ease-in-out infinite alternate;
  }

  @keyframes sh-pointer-sweep {
    0% { transform: rotate(-35deg); }
    100% { transform: rotate(35deg); }
  }

  /* Counterweight hanging under pulley */
  .sh-counterweight {
    animation: sh-weight-drop 4s ease-in-out infinite alternate;
  }

  @keyframes sh-weight-drop {
    0% { transform: translateY(0); }
    100% { transform: translateY(3px); }
  }

  .sh-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(245, 158, 11, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptSaussureHygrometer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${saussureHygrometerStyles}</style>
      <div class="sh-box">
        <div class="sh-stage">
          <svg class="sh-svg" viewBox="0 0 76 72">
            <!-- 1783 Horace Bénédict de Saussure Human Hair Tension Hygrometer -->
            <!-- Brass Arch Column Uprights & Stand -->
            <path d="M 24 64 L 24 14 Q 38 8 52 14 L 52 64" fill="none" stroke="#b45309" stroke-width="1.2" />
            <rect x="20" y="64" width="36" height="4" rx="1" fill="#292524" stroke="#78350f" stroke-width="0.8" />

            <!-- Top Hair Clamping Pin & Tension Adjuster Screw -->
            <circle cx="38" cy="12" r="2" fill="#d97706" stroke="#fef08a" stroke-width="0.5" />

            <!-- Degreased Human Hair Strand (Extends from top pin to bottom pulley) -->
            <line class="sh-hair-strand" x1="38" y1="14" x2="38" y2="45" stroke-width="0.9" />

            <!-- Lower Grooved Pulley Wheel & Axis Pin -->
            <circle cx="38" cy="46" r="4.5" fill="#1c1917" stroke="#f59e0b" stroke-width="0.8" />

            <!-- Hanging Counterpoise Weight (Maintains Constant Tension) -->
            <g class="sh-counterweight">
              <line x1="38" y1="46" x2="38" y2="56" stroke="#ca8a04" stroke-width="0.6" />
              <polygon points="36,56 40,56 39,61 37,61" fill="#78350f" stroke="#fbbf24" stroke-width="0.5" />
            </g>

            <!-- Engraved Ivory Quadrant Index Scale Arc (Top Fan Arc) -->
            <path d="M 22 28 A 22 22 0 0 1 54 28" fill="none" stroke="#fef08a" stroke-width="1.2" />
            <!-- Scale Division Ticks (Dry 0° ... 100° Extreme Humidity) -->
            <line x1="24" y1="30" x2="26" y2="28" stroke="#d97706" stroke-width="0.6" />
            <line x1="38" y1="24" x2="38" y2="21" stroke="#d97706" stroke-width="0.6" />
            <line x1="52" y1="30" x2="50" y2="28" stroke="#d97706" stroke-width="0.6" />

            <!-- Delicate Long Brass Index Pointer Needle -->
            <g class="sh-index-pointer">
              <line x1="38" y1="46" x2="38" y2="22" stroke="#ef4444" stroke-width="0.9" stroke-linecap="round" />
              <!-- Needle Counterweight Pear -->
              <circle cx="38" cy="50" r="1.5" fill="#ef4444" />
            </g>
          </svg>
        </div>
        <div class="sh-label">SAUSSURE HAIR 1783</div>
      </div>
    `;
  }
}

customElements.define('concept-saussure-hygrometer', ConceptSaussureHygrometer);
