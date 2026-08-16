const langleyBolometerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .lb-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201712 0%, #060402 100%);
    border: 1.5px solid rgba(249, 115, 22, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(249, 115, 22, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lb-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lb-svg {
    width: 76px;
    height: 72px;
  }

  /* Infrared thermal radiation ray flux */
  .lb-infrared-flux {
    animation: lb-ir-pulse 2.2s ease-in-out infinite alternate;
  }

  @keyframes lb-ir-pulse {
    0% { opacity: 0.35; stroke: #ea580c; }
    100% { opacity: 0.95; stroke: #f97316; filter: drop-shadow(0 0 3px #ea580c); }
  }

  /* Smoked platinum strip element heating resistance change */
  .lb-platinum-strip {
    animation: lb-strip-glow 2.8s ease-in-out infinite alternate;
  }

  @keyframes lb-strip-glow {
    0% { stroke: #fdba74; stroke-width: 1; }
    100% { stroke: #ffffff; stroke-width: 2.6; filter: drop-shadow(0 0 4px #f97316); }
  }

  /* Sensitive Thomson reflecting galvanometer coil mirror swing */
  .lb-galvo-mirror {
    transform-origin: 56px 36px;
    animation: lb-mirror-swing 3s ease-in-out infinite alternate;
  }

  @keyframes lb-mirror-swing {
    0% { transform: rotate(-18deg); }
    100% { transform: rotate(18deg); }
  }

  .lb-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(249, 115, 22, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptLangleyBolometer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${langleyBolometerStyles}</style>
      <div class="lb-box">
        <div class="lb-stage">
          <svg class="lb-svg" viewBox="0 0 76 72">
            <!-- 1880 Samuel Pierpont Langley Infrared Bolometer -->
            <!-- Heavy Evacuated Brass Spectrobolometer Cylinder Housing -->
            <rect x="10" y="14" width="30" height="44" rx="3" fill="#1c1917" stroke="#ca8a04" stroke-width="0.9" />
            <circle cx="25" cy="36" r="11" fill="#0c0a09" stroke="#78350f" stroke-width="0.6" />

            <!-- Collimated Infrared Radiant Beam Entrance Aperture -->
            <line class="lb-infrared-flux" x1="4" y1="36" x2="19" y2="36" stroke-width="2.6" stroke-dasharray="3 2" />

            <!-- Twin Lampblack-Coated Platinum Foils in Balanced Wheatstone Bridge -->
            <g class="lb-platinum-strip">
              <!-- Exposed Target Strip (Absorbing IR Radiation) -->
              <line x1="22" y1="29" x2="22" y2="43" />
              <!-- Compensating Shielded Reference Strip -->
              <line x1="28" y1="29" x2="28" y2="43" stroke="#94a3b8" stroke-width="1" />
            </g>

            <!-- Bridge Circuit Connecting Leads -->
            <path d="M 22 29 L 25 24 L 28 29" fill="none" stroke="#ca8a04" stroke-width="0.6" />
            <path d="M 22 43 L 25 48 L 28 43" fill="none" stroke="#ca8a04" stroke-width="0.6" />
            <line x1="40" y1="36" x2="48" y2="36" stroke="#fbbf24" stroke-width="0.7" stroke-dasharray="2 1" />

            <!-- Thomson Astatic Reflecting Galvanometer (Right) -->
            <circle cx="56" cy="36" r="13" fill="#1e1b18" stroke="#ea580c" stroke-width="1" />
            <circle cx="56" cy="36" r="9" fill="#0f0e0c" stroke="#b45309" stroke-width="0.5" />

            <!-- Suspended Micro-Galvanometer Mirror & Light Spot Beam -->
            <g class="lb-galvo-mirror">
              <!-- Central Suspended Quartz Fiber & Mirror Dot -->
              <line x1="56" y1="27" x2="56" y2="45" stroke="#f59e0b" stroke-width="1.8" />
              <rect x="53" y="33" width="6" height="6" rx="0.5" fill="#fef08a" stroke="#ca8a04" stroke-width="0.4" />
              <!-- Reflected Scale Spot Ray (Detects 1/100,000 °C!) -->
              <line x1="56" y1="36" x2="68" y2="28" stroke="#ef4444" stroke-width="2" />
              <circle cx="68" cy="28" r="2.2" fill="#f87171" filter="drop-shadow(0 0 3px #ef4444)" />
            </g>
          </svg>
        </div>
        <div class="lb-label">LANGLEY BOLOMETER</div>
      </div>
    `;
  }
}

customElements.define('concept-langley-bolometer', ConceptLangleyBolometer);
