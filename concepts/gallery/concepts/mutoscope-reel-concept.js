const mutoscopeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .mt-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201a14 0%, #080604 100%);
    border: 1.5px solid rgba(255, 171, 64, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 171, 64, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mt-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mt-svg {
    width: 76px;
    height: 72px;
  }

  /* Rapid Card Flipping Animation at Top Retaining Spring.
     The group carries a translate(36,14) placement, so the keyframes
     re-state it: CSS transform overrides the SVG transform attribute. */
  .mt-card-flip {
    animation: mt-flip 0.4s linear infinite;
  }

  @keyframes mt-flip {
    0% { transform: translate(36px, 14px) rotate(0deg); opacity: 1; }
    50% { transform: translate(36px, 10px) rotate(14deg); }
    100% { transform: translate(36px, 7px) rotate(28deg); opacity: 0.7; }
  }

  /* Reel rotation */
  .mt-card-spokes line {
    stroke: #8d6e63;
    stroke-width: 0.8;
  }

  /* Crank handle rotation */
  .mt-crank {
    transform-origin: 66px 36px;
    animation: mt-spin-crank 2s linear infinite;
  }

  @keyframes mt-spin-crank {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Optical viewing hood glow */
  .mt-view-glow {
    fill: #ffab40;
    animation: mt-flash 0.3s steps(2, end) infinite;
  }

  @keyframes mt-flash {
    0% { opacity: 0.6; }
    100% { opacity: 1; filter: drop-shadow(0 0 4px #ffd700); }
  }

  .mt-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 171, 64, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptMutoscopeReel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${mutoscopeStyles}</style>
      <div class="mt-box">
        <div class="mt-stage">
          <svg class="mt-svg" viewBox="0 0 76 72">
            <!-- Cast Iron Shell Frame Stand -->
            <path d="M 12 58 L 24 36 L 48 36 L 60 58 Z" fill="#2d1c14" stroke="#8d6e63" stroke-width="1" />

            <!-- Circular Rolodex Reel Drum Core -->
            <circle cx="36" cy="36" r="22" fill="#3e2723" stroke="#ffb74d" stroke-width="1.2" />
            <circle cx="36" cy="36" r="8" fill="#1b100a" stroke="#ffb74d" stroke-width="0.8" />

            <!-- Radial Array of Photographic Flip Cards -->
            <g class="mt-card-spokes">
              <line x1="36" y1="28" x2="36" y2="14" />
              <line x1="42" y1="30" x2="52" y2="20" />
              <line x1="44" y1="36" x2="58" y2="36" />
              <line x1="42" y1="42" x2="52" y2="52" />
              <line x1="36" y1="44" x2="36" y2="58" />
              <line x1="30" y1="42" x2="20" y2="52" />
              <line x1="28" y1="36" x2="14" y2="36" />
              <line x1="30" y1="30" x2="20" y2="20" />
            </g>

            <!-- Spring-Steel Stop Finger (Holding and flicking cards at apex) -->
            <path d="M 48 8 L 36 14" fill="none" stroke="#cfd8dc" stroke-width="1.5" stroke-linecap="round" />

            <!-- Actively Flicking Photographic Card at Apex -->
            <g class="mt-card-flip" transform="translate(36, 14)">
              <rect x="-6" y="-8" width="12" height="8" rx="0.5" fill="#fff8e1" stroke="#ffb74d" stroke-width="0.6" />
              <circle cx="0" cy="-4" r="1.5" fill="#5d4037" />
            </g>

            <!-- Hand Crank Arm & Wooden Knob on Side Axle -->
            <g class="mt-crank">
              <line x1="66" y1="36" x2="66" y2="24" stroke="#ffab40" stroke-width="2.5" stroke-linecap="round" />
              <circle cx="66" cy="24" r="3.5" fill="#ffd54f" stroke="#ff8f00" stroke-width="0.8" />
            </g>

            <!-- Brass Ocular Peep Eyepiece Frame at Top -->
            <path d="M 28 6 L 44 6 L 40 10 L 32 10 Z" class="mt-view-glow" stroke="#ff8f00" stroke-width="0.8" />
          </svg>
        </div>
        <div class="mt-label">MUTOSCOPE REEL</div>
      </div>
    `;
  }
}

customElements.define('concept-mutoscope-reel', ConceptMutoscopeReel);
