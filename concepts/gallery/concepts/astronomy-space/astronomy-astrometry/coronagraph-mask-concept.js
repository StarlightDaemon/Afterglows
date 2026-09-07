const coronagraphStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .co-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1a1e28 0%, #030408 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .co-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .co-svg {
    width: 76px;
    height: 72px;
  }

  /* Solar corona plasma streamers & prominences actively billowing outward */
  .co-corona-streamers {
    transform-origin: 38px 36px;
    animation: co-corona-billow 3s ease-in-out infinite alternate;
  }

  @keyframes co-corona-billow {
    0% { transform: scale(0.85) rotate(-6deg); opacity: 0.6; }
    100% { transform: scale(1.25) rotate(8deg); opacity: 1; filter: drop-shadow(0 0 6px #00e5ff); }
  }

  /* Artificial eclipse occulting cone mask sliding into solar focus alignment */
  .co-occulting-cone {
    transform-origin: 38px 36px;
    animation: co-mask-align 3.5s ease-in-out infinite alternate;
  }

  @keyframes co-mask-align {
    0% { transform: translate(-11px, -8px); }
    100% { transform: translate(8px, 6px); }
  }

  /* Deflected intense photospheric heat beam ejected down */
  .co-heat-eject {
    animation: co-heat-flow 1.5s linear infinite;
  }

  @keyframes co-heat-flow {
    0% { transform: translateY(0); opacity: 0.3; }
    50% { opacity: 1; }
    100% { transform: translateY(12px); opacity: 0; }
  }

  /* Lyot diffraction stop ring */
  .co-lyot-stop {
    animation: co-stop-glow 1.8s ease-in-out infinite alternate;
  }

  @keyframes co-stop-glow {
    0% { stroke: #ffd700; opacity: 0.6; }
    100% { stroke: #ffffff; opacity: 1; filter: drop-shadow(0 0 4px #ffd700); }
  }

  .co-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCoronagraphMask extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${coronagraphStyles}</style>
      <div class="co-box">
        <div class="co-stage">
          <svg class="co-svg" viewBox="0 0 76 72">
            <!-- Bernard Lyot 1930 Solar Coronagraph Optical Train Assembly -->
            <!-- Main Precision Optical Bench Housing -->
            <rect x="6" y="24" width="64" height="24" rx="2" fill="#0b131f" stroke="#37474f" stroke-width="0.8" />

            <!-- Objective Singlet Lens (Left: High-purity striation-free glass) -->
            <line x1="12" y1="26" x2="12" y2="46" stroke="#00e5ff" stroke-width="2.5" stroke-linecap="round" />

            <!-- Converging Solar Focus Beam -->
            <polygon points="12,26 38,36 12,46" fill="rgba(255, 235, 59, 0.2)" stroke="none" />

            <!-- Luminous Solar Corona Plasma Streamers & Prominences (Radiating in Shadow) -->
            <g class="co-corona-streamers">
              <!-- Wispy Green/Cyan 530.3nm Coronium Streamers -->
              <path d="M 38 24 Q 46 14 56 12" fill="none" stroke="#69f0ae" stroke-width="1.6" />
              <path d="M 44 32 Q 56 26 66 24" fill="none" stroke="#00e5ff" stroke-width="1.8" />
              <path d="M 44 40 Q 58 46 66 48" fill="none" stroke="#00e5ff" stroke-width="1.8" />
              <path d="M 38 48 Q 46 58 54 60" fill="none" stroke="#69f0ae" stroke-width="1.6" />
              <!-- Hydrogen-Alpha Red Solar Prominence Loops -->
              <path d="M 36 26 Q 32 18 38 18 Q 44 18 40 26" fill="none" stroke="#ff5252" stroke-width="1.6" />
            </g>

            <!-- Mirrored Occulting Cone Disk (Creates artificial total solar eclipse) -->
            <g class="co-occulting-cone">
              <!-- Dark Occulting Shadow Disc -->
              <circle cx="38" cy="36" r="8.5" fill="#05080e" stroke="#ff5252" stroke-width="1.2" />
              <!-- Mirrored Deflection Cone Tip reflecting fierce photospheric heat out side port -->
              <polygon points="38,36 31,29 31,43" fill="#ffd700" filter="drop-shadow(0 0 6px #ffd700) drop-shadow(0 0 3px #ffffff)" />
              <!-- Ejected Heat Beam -->
              <line class="co-heat-eject" x1="33" y1="36" x2="33" y2="48" stroke="#ff9100" stroke-width="2" stroke-dasharray="2 2" />
            </g>

            <!-- Field Lens & Lyot Stop Diaphragm (Blocks diffracted light from objective edge) -->
            <g class="co-lyot-stop">
              <line x1="52" y1="26" x2="52" y2="31" stroke-width="2" />
              <line x1="52" y1="41" x2="52" y2="46" stroke-width="2" />
            </g>

            <!-- Camera Focus Lens (Right) -->
            <line x1="62" y1="28" x2="62" y2="44" stroke="#80d8ff" stroke-width="2" />

            <!-- Monochromatic Coronal Emission Line Formula -->
            <text x="38" y="60" font-family="monospace" font-size="3" fill="#69f0ae" text-anchor="middle">FE XIV CORONAL LINE 530.3nm</text>
          </svg>
        </div>
        <div class="co-label">CORONAGRAPH MASK</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-coronagraph-mask')) {
  customElements.define('concept-coronagraph-mask', ConceptCoronagraphMask);
}
