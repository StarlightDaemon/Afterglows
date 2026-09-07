const guillocheRoseStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .gr-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201a28 0%, #060408 100%);
    border: 1.5px solid rgba(224, 64, 251, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(224, 64, 251, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gr-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gr-svg {
    width: 76px;
    height: 72px;
  }

  /* Rotating undulating geometric guilloché rosette rosette headstock */
  .gr-rosette-spin {
    transform-origin: 38px 36px;
    animation: gr-spin-engine 4.8s linear infinite;
  }

  @keyframes gr-spin-engine {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Rocking headstock barrel cam oscillation */
  .gr-cam-toucher {
    animation: gr-rock-headstock 1.2s ease-in-out infinite alternate;
  }

  @keyframes gr-rock-headstock {
    0% { transform: translateX(-1.2px); }
    100% { transform: translateX(1.2px); }
  }

  /* Intricate geometric spirograph banknote security curve shimmer */
  .gr-guilloche-rings path {
    stroke-width: 0.8;
    fill: none;
    animation: gr-curve-gleam 2s ease-in-out infinite alternate;
  }

  @keyframes gr-curve-gleam {
    0% { stroke: #ea80fc; opacity: 0.6; }
    100% { stroke: #ffffff; opacity: 1; filter: drop-shadow(0 0 2px #e040fb); }
  }

  .gr-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(224, 64, 251, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptGuillocheRoseEngine extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${guillocheRoseStyles}</style>
      <div class="gr-box">
        <div class="gr-stage">
          <svg class="gr-svg" viewBox="0 0 76 72">
            <!-- Ornamental Rose Engine Lathe Bed (Anti-Counterfeiting Banknote Engraver) -->
            <rect x="8" y="58" width="60" height="5" rx="1" fill="#212121" stroke="#4a148c" stroke-width="0.8" />

            <!-- Rocking Headstock Pivot Supports (Left & Right) -->
            <rect x="14" y="46" width="5" height="12" fill="#311b92" stroke="#7c4dff" stroke-width="0.6" />
            <rect x="57" y="46" width="5" height="12" fill="#311b92" stroke="#7c4dff" stroke-width="0.6" />

            <!-- Undulating Rosette Cam Barrel & Rubber Follower (Top Left) -->
            <g class="gr-cam-toucher">
              <circle cx="16" cy="24" r="5" fill="#1a237e" stroke="#ffd700" stroke-width="0.8" stroke-dasharray="1.5 1.5" />
              <!-- Steel Toucher Pin contacting rosette lobes -->
              <line x1="21" y1="24" x2="26" y2="24" stroke="#ffeb3b" stroke-width="1.2" />
            </g>

            <!-- Rotating Precision Banknote Geometric Rosette Pattern Chuck -->
            <g class="gr-rosette-spin">
              <!-- Steel Banknote Plate Round Chuck -->
              <circle cx="38" cy="36" r="22" fill="#0f051d" stroke="#ffd700" stroke-width="1" />

              <!-- Micro-Engraved Mathematical Guilloché Security Curves (Epitrochoid & Hypotrochoid) -->
              <g class="gr-guilloche-rings">
                <!-- Rosette Petal Ring 1 -->
                <path d="M 38 18 Q 48 24 48 36 Q 48 48 38 54 Q 28 48 28 36 Q 28 24 38 18 Z" />
                <!-- Rosette Petal Ring 2 (Rotated 45 deg) -->
                <path d="M 25 23 Q 40 21 49 32 Q 51 47 40 49 Q 25 51 27 36 Q 22 25 25 23 Z" />
                <!-- Rosette Petal Ring 3 (Rotated 90 deg) -->
                <path d="M 20 36 Q 26 46 38 46 Q 50 46 56 36 Q 50 26 38 26 Q 26 26 20 36 Z" />
                <!-- Concentric Fluted Wave Ring -->
                <circle cx="38" cy="36" r="10" stroke-dasharray="2 1" stroke-width="0.6" />
                <circle cx="38" cy="36" r="4" stroke-width="0.8" stroke="#00e5ff" />
              </g>
            </g>

            <!-- Fixed Diamond/Steel Cutting Tool Slide Rest (Right) -->
            <rect x="58" y="34" width="10" height="4" fill="#37474f" stroke="#b0bec5" stroke-width="0.5" />
            <polygon points="58,36 52,35 52,37" fill="#ffffff" filter="drop-shadow(0 0 2px #e040fb)" />
          </svg>
        </div>
        <div class="gr-label">GUILLOCHÉ ROSE ENGINE</div>
      </div>
    `;
  }
}

customElements.define('concept-guilloche-rose-engine', ConceptGuillocheRoseEngine);
