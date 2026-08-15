const shadowboxStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .shd {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020904;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Shadowbox outer picture frame */
  .shd-frame {
    position: relative;
    width: 86px;
    height: 76px;
    background: #000803;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 4px;
    box-shadow: inset 0 0 14px rgba(0, 204, 0, 0.4), 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Layer 1: Distant celestial moonlit sky backdrop */
  .shd-layer-1 {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 30%, rgba(140, 255, 170, 0.3) 0%, #000802 80%);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 8px;
  }

  .shd-moon {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #ffffff, 0 0 18px #8cffaa;
  }

  /* Layer 2: Distant castle / mountain silhouettes (slow parallax) */
  .shd-layer-2-svg {
    position: absolute;
    inset: 0;
    width: 86px;
    height: 76px;
    opacity: 0.6;
    animation: shd-parallax-2 5s ease-in-out infinite alternate;
  }

  @keyframes shd-parallax-2 {
    0% { transform: translateX(-2px); }
    100% { transform: translateX(2px); }
  }

  /* Layer 3: Midground gothic forest trees */
  .shd-layer-3-svg {
    position: absolute;
    inset: 0;
    width: 86px;
    height: 76px;
    opacity: 0.85;
    animation: shd-parallax-3 5s ease-in-out infinite alternate;
  }

  @keyframes shd-parallax-3 {
    0% { transform: translateX(-4px); }
    100% { transform: translateX(4px); }
  }

  /* Layer 4: Foreground proscenium arch cutouts with wandering wanderer figure */
  .shd-layer-4-svg {
    position: absolute;
    inset: 0;
    width: 86px;
    height: 76px;
    filter: drop-shadow(0 0 3px #8cffaa);
    animation: shd-parallax-4 5s ease-in-out infinite alternate;
  }

  @keyframes shd-parallax-4 {
    0% { transform: translateX(-7px); }
    100% { transform: translateX(7px); }
  }

  /* Hidden footlight stage illumination */
  .shd-footlights {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 14px;
    background: linear-gradient(0deg, rgba(214, 255, 224, 0.4) 0%, transparent 100%);
    pointer-events: none;
    z-index: 6;
  }

  /* Caption */
  .shd-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptShadowboxDiorama extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${shadowboxStyles}</style>
      <div class="shd">
        <div class="shd-frame">
          <div class="shd-layer-1">
            <div class="shd-moon"></div>
          </div>

          <!-- Layer 2: Distant mountains -->
          <svg class="shd-layer-2-svg" viewBox="0 0 86 76">
            <polygon points="0,76 18,36 34,50 56,28 72,48 86,38 86,76" fill="#003308" />
          </svg>

          <!-- Layer 3: Midground Pine Trees -->
          <svg class="shd-layer-3-svg" viewBox="0 0 86 76">
            <polygon points="4,76 14,42 24,76" fill="#006611" />
            <polygon points="20,76 30,36 40,76" fill="#005510" />
            <polygon points="62,76 72,40 82,76" fill="#006611" />
          </svg>

          <!-- Layer 4: Foreground Stage Silhouettes & Figure -->
          <svg class="shd-layer-4-svg" viewBox="0 0 86 76">
            <path d="M 0 0 L 16 0 L 6 76 L 0 76 Z" fill="#011406" stroke="#ffffff" stroke-width="1" />
            <path d="M 86 0 L 70 0 L 80 76 L 86 76 Z" fill="#011406" stroke="#ffffff" stroke-width="1" />
            <!-- Wanderer silhouette standing on bridge -->
            <path d="M 0 66 Q 43 56 86 66 L 86 76 L 0 76 Z" fill="#004408" />
            <!-- Standing figure with lantern -->
            <circle cx="43" cy="48" r="2.5" fill="#ffffff" />
            <rect x="41.5" y="51" width="3" height="7" fill="#ffffff" />
            <circle cx="48" cy="54" r="1.5" fill="#8cffaa" />
          </svg>

          <div class="shd-footlights"></div>
        </div>

        <div class="shd-label">SHADOWBOX DIORAMA 3D</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-shadowbox-diorama')) {
  customElements.define('concept-shadowbox-diorama', ConceptShadowboxDiorama);
}
