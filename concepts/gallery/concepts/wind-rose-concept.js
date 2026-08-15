const windRoseStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .wnr {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #161005 0%, #060401 100%);
    border: 1.5px solid rgba(255, 187, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 187, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Portolan parchment background with intersecting rhumb lines */
  .wnr-chart {
    position: relative;
    width: 86px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wnr-rhumb-lines-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  /* 32-point compass wind rose disc */
  .wnr-rose-disc {
    position: relative;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: wnr-slow-rot 18s ease-in-out infinite alternate;
  }

  @keyframes wnr-slow-rot {
    0% { transform: rotate(-8deg); }
    100% { transform: rotate(8deg); }
  }

  /* Central Fleur-de-lis / North arrow */
  .wnr-fleur {
    position: absolute;
    top: 4px;
    width: 8px;
    height: 14px;
    background: #ffffff;
    clip-path: polygon(50% 0%, 100% 70%, 75% 70%, 50% 100%, 25% 70%, 0% 70%);
    box-shadow: 0 0 8px #ffffff;
    z-index: 6;
  }

  /* Center brass compass pivot */
  .wnr-pivot {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #ffaa00;
    box-shadow: 0 0 6px #ffea88;
    z-index: 7;
  }

  .wnr-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 204, 100, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptWindRose extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${windRoseStyles}</style>
      <div class="wnr">
        <div class="wnr-chart">
          <svg class="wnr-rhumb-lines-svg" viewBox="0 0 86 76">
            <!-- Portolan 16-point radiating rhumb course lines -->
            <line x1="43" y1="0" x2="43" y2="76" stroke="rgba(255, 170, 0, 0.4)" stroke-width="0.8" />
            <line x1="0" y1="38" x2="86" y2="38" stroke="rgba(255, 170, 0, 0.4)" stroke-width="0.8" />
            <line x1="0" y1="0" x2="86" y2="76" stroke="rgba(0, 229, 255, 0.3)" stroke-width="0.8" stroke-dasharray="2 3" />
            <line x1="0" y1="76" x2="86" y2="0" stroke="rgba(0, 229, 255, 0.3)" stroke-width="0.8" stroke-dasharray="2 3" />
            <line x1="43" y1="38" x2="86" y2="18" stroke="rgba(255, 100, 100, 0.3)" stroke-width="0.8" />
            <line x1="43" y1="38" x2="86" y2="58" stroke="rgba(255, 100, 100, 0.3)" stroke-width="0.8" />
            <line x1="43" y1="38" x2="0" y2="18" stroke="rgba(255, 100, 100, 0.3)" stroke-width="0.8" />
            <line x1="43" y1="38" x2="0" y2="58" stroke="rgba(255, 100, 100, 0.3)" stroke-width="0.8" />
          </svg>

          <div class="wnr-rose-disc">
            <svg viewBox="0 0 64 64" style="position: absolute; inset: 0; width: 100%; height: 100%;">
              <!-- 4 Cardinal large points (N, E, S, W) -->
              <polygon points="32,2 35,28 32,32 29,28" fill="#ffffff" stroke="#ffaa00" stroke-width="0.8" />
              <polygon points="62,32 36,35 32,32 36,29" fill="#ffaa00" stroke="#ffaa00" stroke-width="0.8" />
              <polygon points="32,62 29,36 32,32 35,36" fill="#ffaa00" stroke="#ffaa00" stroke-width="0.8" />
              <polygon points="2,32 28,29 32,32 28,35" fill="#ffaa00" stroke="#ffaa00" stroke-width="0.8" />

              <!-- 4 Half-cardinal points (NE, SE, SW, NW) -->
              <polygon points="53,11 36,28 32,32 28,24" fill="#00e5ff" />
              <polygon points="53,53 36,36 32,32 40,28" fill="#00e5ff" />
              <polygon points="11,53 28,36 32,32 36,40" fill="#00e5ff" />
              <polygon points="11,11 28,28 32,32 24,36" fill="#00e5ff" />

              <!-- Circular compass rose outer ring -->
              <circle cx="32" cy="32" r="28" fill="none" stroke="#ffaa00" stroke-width="1.2" stroke-dasharray="2 3" />
            </svg>

            <div class="wnr-fleur"></div>
            <div class="wnr-pivot"></div>
          </div>
        </div>

        <div class="wnr-label">PORTOLAN WIND ROSE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-wind-rose')) {
  customElements.define('concept-wind-rose', ConceptWindRose);
}
