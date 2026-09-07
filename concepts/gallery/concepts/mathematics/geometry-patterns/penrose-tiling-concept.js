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
    width: 84px;
    height: 84px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: pt-fast-turn 4.2s linear infinite;
  }

  @keyframes pt-fast-turn {
    to { transform: rotate(360deg); }
  }

  .pt-tiling-svg {
    width: 100%;
    height: 100%;
  }

  .pt-kite {
    fill: rgba(255, 215, 0, 0.4);
    stroke: #ffd700;
    stroke-width: 1;
  }

  .pt-dart {
    fill: rgba(224, 130, 255, 0.4);
    stroke: #e082ff;
    stroke-width: 1;
  }

  /* Counter-rotating inner 5-fold star core */
  .pt-star-pulse {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #ffd700, 0 0 20px #e082ff;
    animation: pt-center-spin 3s linear infinite;
  }

  @keyframes pt-center-spin {
    from { transform: rotate(360deg) scale(0.8); }
    50% { transform: rotate(180deg) scale(1.25); }
    to { transform: rotate(0deg) scale(0.8); }
  }

  /* Orbiting vertex substitution spark hopping along 5-fold symmetry nodes */
  .pt-vertex-spark {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #ffd700;
    z-index: 6;
    animation: pt-spark-orbit 2.8s linear infinite;
  }

  @keyframes pt-spark-orbit {
    0% { transform: rotate(0deg) translate(28px) rotate(0deg); }
    100% { transform: rotate(-360deg) translate(28px) rotate(360deg); }
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
          <div class="pt-vertex-spark"></div>

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
