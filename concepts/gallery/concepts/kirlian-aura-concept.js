const kirlianStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .krl {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #100518 0%, #030005 100%);
    border: 1.5px solid rgba(180, 0, 255, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(180, 0, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* High-voltage photographic electrode plate */
  .krl-plate {
    position: relative;
    width: 82px;
    height: 74px;
    background: #0d0214;
    border: 1.2px solid #b400ff;
    border-radius: 3px;
    box-shadow: inset 0 0 10px rgba(180, 0, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Serrated botanical leaf specimen */
  .krl-leaf {
    position: relative;
    width: 38px;
    height: 52px;
    background: #001a08;
    border: 1.5px solid #00ff66;
    border-radius: 50% 50% 50% 50% / 70% 70% 30% 30%;
    box-shadow: inset 0 0 6px rgba(0, 255, 100, 0.4);
    z-index: 5;
  }

  /* Ethereal violet / cyan electric corona streamers */
  .krl-corona-aura {
    position: absolute;
    inset: -12px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(180, 0, 255, 0.4) 30%, rgba(0, 229, 255, 0.3) 60%, transparent 80%);
    filter: drop-shadow(0 0 8px #b400ff) drop-shadow(0 0 16px #00e5ff);
    animation: krl-aura-pulse 1.8s ease-in-out infinite alternate;
  }

  @keyframes krl-aura-pulse {
    0% { transform: scale(0.92); opacity: 0.7; }
    100% { transform: scale(1.1); opacity: 1; filter: drop-shadow(0 0 12px #ffffff); }
  }

  /* High-frequency corona streamer sparks SVG */
  .krl-streamers-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .krl-streamer {
    fill: none;
    stroke: #ffffff;
    stroke-width: 1.2;
    stroke-linecap: round;
    stroke-dasharray: 3 2;
    filter: drop-shadow(0 0 4px #00e5ff);
    animation: krl-spark-flow 0.4s linear infinite;
  }

  @keyframes krl-spark-flow {
    to { stroke-dashoffset: -8; }
  }

  .krl-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(220, 140, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptKirlianAura extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${kirlianStyles}</style>
      <div class="krl">
        <div class="krl-plate">
          <div class="krl-corona-aura"></div>

          <div class="krl-leaf">
            <svg viewBox="0 0 38 52" style="position: absolute; inset: 0; width: 100%; height: 100%;">
              <!-- Leaf venation structure -->
              <line x1="19" y1="4" x2="19" y2="48" stroke="#00ff66" stroke-width="1.2" />
              <path d="M 19 16 Q 10 12 6 8 M 19 16 Q 28 12 32 8" fill="none" stroke="#00ff66" stroke-width="0.8" />
              <path d="M 19 28 Q 8 24 4 18 M 19 28 Q 30 24 34 18" fill="none" stroke="#00ff66" stroke-width="0.8" />
              <path d="M 19 40 Q 10 36 6 32 M 19 40 Q 28 36 32 32" fill="none" stroke="#00ff66" stroke-width="0.8" />
            </svg>
          </div>

          <svg class="krl-streamers-svg" viewBox="0 0 82 74">
            <!-- Radiating electric streamer discharges -->
            <path class="krl-streamer" d="M 41 10 L 41 2 M 22 20 L 12 12 M 60 20 L 70 12" />
            <path class="krl-streamer" d="M 20 37 L 8 37 M 62 37 L 74 37" />
            <path class="krl-streamer" d="M 24 54 L 14 62 M 58 54 L 68 62 M 41 64 L 41 72" />
          </svg>
        </div>

        <div class="krl-label">KIRLIAN CORONA AURA</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-kirlian-aura')) {
  customElements.define('concept-kirlian-aura', ConceptKirlianAura);
}
