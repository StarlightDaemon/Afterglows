const penroseStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pt-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1c0e2a 0%, #08030d 100%);
    border: 1.5px solid rgba(224, 130, 255, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(224, 130, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pt-stage {
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: pt-slow-turn 20s linear infinite;
  }

  @keyframes pt-slow-turn {
    to { transform: rotate(360deg); }
  }

  .pt-tiling-svg {
    width: 100%;
    height: 100%;
  }

  .pt-kite {
    fill: rgba(255, 215, 0, 0.35);
    stroke: #ffd700;
    stroke-width: 0.8;
    transition: fill 0.5s;
  }

  .pt-dart {
    fill: rgba(224, 130, 255, 0.35);
    stroke: #e082ff;
    stroke-width: 0.8;
  }

  .pt-star-pulse {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #ffd700, 0 0 20px #e082ff;
    animation: pt-center-glow 3s ease-in-out infinite alternate;
  }

  @keyframes pt-center-glow {
    0% { transform: scale(0.6); opacity: 0.6; }
    100% { transform: scale(1.2); opacity: 1; }
  }

  .pt-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(224, 130, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPenroseTiling extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${penroseStyles}</style>
      <div class="pt-box">
        <div class="pt-stage">
          <svg class="pt-tiling-svg" viewBox="-50 -50 100 100">
            <!-- 5-fold Sun / Star Penrose Tiling Pattern -->
            <g>
              <!-- 5 Kites forming a central star/sun -->
              <polygon class="pt-kite" points="0,0 12,16 0,38 -12,16" transform="rotate(0)" />
              <polygon class="pt-kite" points="0,0 12,16 0,38 -12,16" transform="rotate(72)" />
              <polygon class="pt-kite" points="0,0 12,16 0,38 -12,16" transform="rotate(144)" />
              <polygon class="pt-kite" points="0,0 12,16 0,38 -12,16" transform="rotate(216)" />
              <polygon class="pt-kite" points="0,0 12,16 0,38 -12,16" transform="rotate(288)" />

              <!-- Interstitial Darts -->
              <polygon class="pt-dart" points="0,38 10,48 0,42 -10,48" transform="rotate(36)" />
              <polygon class="pt-dart" points="0,38 10,48 0,42 -10,48" transform="rotate(108)" />
              <polygon class="pt-dart" points="0,38 10,48 0,42 -10,48" transform="rotate(180)" />
              <polygon class="pt-dart" points="0,38 10,48 0,42 -10,48" transform="rotate(252)" />
              <polygon class="pt-dart" points="0,38 10,48 0,42 -10,48" transform="rotate(324)" />

              <!-- Outer Crown Kites -->
              <polygon class="pt-kite" points="0,42 14,35 0,22 -14,35" transform="rotate(36)" />
              <polygon class="pt-kite" points="0,42 14,35 0,22 -14,35" transform="rotate(108)" />
              <polygon class="pt-kite" points="0,42 14,35 0,22 -14,35" transform="rotate(180)" />
              <polygon class="pt-kite" points="0,42 14,35 0,22 -14,35" transform="rotate(252)" />
              <polygon class="pt-kite" points="0,42 14,35 0,22 -14,35" transform="rotate(324)" />
            </g>
          </svg>

          <div class="pt-star-pulse"></div>
        </div>

        <div class="pt-label">PENROSE APERIODIC TILING</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-penrose-tiling')) {
  customElements.define('concept-penrose-tiling', ConceptPenroseTiling);
}
