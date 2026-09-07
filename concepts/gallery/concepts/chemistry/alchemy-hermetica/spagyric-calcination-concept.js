const spagyricStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sp-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201026 0%, #08030b 100%);
    border: 1.5px solid rgba(224, 64, 251, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(224, 64, 251, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sp-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sp-svg {
    width: 76px;
    height: 72px;
  }

  /* Three Principles streams converging to center */
  .sp-stream-sulfur {
    stroke: #ff5252;
    stroke-dasharray: 3 3;
    animation: sp-flow 1.5s linear infinite;
  }

  .sp-stream-mercury {
    stroke: #00e5ff;
    stroke-dasharray: 3 3;
    animation: sp-flow 1.5s linear infinite;
  }

  .sp-stream-salt {
    stroke: #ffffff;
    stroke-dasharray: 3 3;
    animation: sp-flow 1.5s linear infinite;
  }

  @keyframes sp-flow {
    to { stroke-dashoffset: -12; }
  }

  /* Essence droplets carried from each principle flask into the vessel */
  .sp-drop {
    filter: drop-shadow(0 0 3px currentColor);
    animation-duration: 2.4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .sp-drop.sulfur { animation-name: sp-drop-sulfur; }
  .sp-drop.mercury { animation-name: sp-drop-mercury; animation-delay: -0.8s; }
  .sp-drop.salt { animation-name: sp-drop-salt; animation-delay: -1.6s; }

  @keyframes sp-drop-sulfur {
    0% { transform: translate(0, 0); opacity: 0; }
    15% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(0, 24px); opacity: 0; }
  }

  @keyframes sp-drop-mercury {
    0% { transform: translate(0, 0); opacity: 0; }
    15% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(20px, -14px); opacity: 0; }
  }

  @keyframes sp-drop-salt {
    0% { transform: translate(0, 0); opacity: 0; }
    15% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(-20px, -14px); opacity: 0; }
  }

  /* Golden Quintessence Elixir Orb */
  .sp-quintessence {
    fill: #ffd700;
    animation: sp-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes sp-pulse {
    0% { transform: scale(0.6); fill: #ff8f00; filter: drop-shadow(0 0 3px #ffab00); }
    100% { transform: scale(1.6); fill: #ffffff; filter: drop-shadow(0 0 12px #ffd700) drop-shadow(0 0 16px #e040fb); }
  }

  /* Quintessence vessel ring resonating with the pulse */
  .sp-vessel-ring {
    animation: sp-ring-resonate 2s ease-in-out infinite alternate;
  }

  @keyframes sp-ring-resonate {
    0% { stroke-width: 0.8; stroke: #ab47bc; }
    100% { stroke-width: 3; stroke: #ffffff; }
  }

  /* Ash calcination glow in bottom retort */
  .sp-salt-ash {
    fill: #f5f5f5;
    animation: sp-ash-glow 2.5s ease-in-out infinite alternate;
  }

  @keyframes sp-ash-glow {
    0% { opacity: 0.5; filter: brightness(0.9); }
    100% { opacity: 1; filter: brightness(1.4); }
  }

  .sp-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(224, 64, 251, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptSpagyricCalcination extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${spagyricStyles}</style>
      <div class="sp-box">
        <div class="sp-stage">
          <svg class="sp-svg" viewBox="0 0 76 72">
            <!-- Triangular Principle Framework -->
            <polygon points="38,10 64,56 12,56" fill="none" stroke="rgba(224, 64, 251, 0.2)" stroke-width="1" stroke-dasharray="2 2" />

            <!-- Top Node: Sulfur (Volatile Essential Oil Flask) -->
            <circle cx="38" cy="14" r="7" fill="rgba(255, 82, 82, 0.15)" stroke="#ff5252" stroke-width="1.2" />
            <circle cx="38" cy="14" r="3" fill="#ff1744" />
            <text x="38" y="10" font-size="4" fill="#ff8a80" text-anchor="middle" font-family="sans-serif">🜍</text>

            <!-- Bottom Left Node: Mercury (Spirituous Alcohol Tincture Flask) -->
            <circle cx="18" cy="52" r="7" fill="rgba(0, 229, 255, 0.15)" stroke="#00e5ff" stroke-width="1.2" />
            <circle cx="18" cy="52" r="3" fill="#00b0ff" />
            <text x="18" y="48" font-size="4" fill="#80d8ff" text-anchor="middle" font-family="sans-serif">☿</text>

            <!-- Bottom Right Node: Salt (Calcined White Mineral Ash Crucible) -->
            <circle cx="58" cy="52" r="7" fill="rgba(255, 255, 255, 0.15)" stroke="#ffffff" stroke-width="1.2" />
            <circle class="sp-salt-ash" cx="58" cy="52" r="3" />
            <text x="58" y="48" font-size="4" fill="#cfd8dc" text-anchor="middle" font-family="sans-serif">🜔</text>

            <!-- Converging Principle Conduits -->
            <line x1="38" y1="21" x2="38" y2="33" class="sp-stream-sulfur" stroke-width="2.2" />
            <line x1="24" y1="48" x2="34" y2="40" class="sp-stream-mercury" stroke-width="2.2" />
            <line x1="52" y1="48" x2="42" y2="40" class="sp-stream-salt" stroke-width="2.2" />

            <!-- Principle essence droplets converging on the vessel -->
            <circle class="sp-drop sulfur" cx="38" cy="14" r="2.2" fill="#ff5252" color="#ff5252" />
            <circle class="sp-drop mercury" cx="18" cy="52" r="2.2" fill="#00e5ff" color="#00e5ff" />
            <circle class="sp-drop salt" cx="58" cy="52" r="2.2" fill="#ffffff" color="#ffffff" />

            <!-- Central Quintessence Vessel & Radiant Lapis Stone -->
            <circle class="sp-vessel-ring" cx="38" cy="38" r="8" fill="rgba(224, 64, 251, 0.12)" stroke="#e040fb" stroke-width="1.4" />
            <g transform="translate(38, 38)">
              <circle class="sp-quintessence" cx="0" cy="0" r="4.5" />
            </g>
          </svg>
        </div>
        <div class="sp-label">SPAGYRIC TRIA PRIMA</div>
      </div>
    `;
  }
}

customElements.define('concept-spagyric-calcination', ConceptSpagyricCalcination);
