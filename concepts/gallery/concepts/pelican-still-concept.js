const pelicanStillStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ps-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 60%, #1e0d22 0%, #06020c 100%);
    border: 1.5px solid rgba(224, 64, 251, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(224, 64, 251, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ps-stage {
    position: relative;
    width: 96px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Glass Pelican circulation flask vessel */
  .ps-vessel-svg {
    position: absolute;
    width: 78px;
    height: 64px;
    filter: drop-shadow(0 0 8px rgba(224, 64, 251, 0.4));
  }

  /* Discrete reflux condensate droplets traveling down return arms */
  .ps-reflux-droplet {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ff4081, 0 0 10px #e040fb;
    z-index: 6;
    animation: ps-drop-flow 2s linear infinite;
  }

  .drop-left {
    offset-path: path("M 36 16 C 14 16, 12 42, 28 50");
    animation-delay: 0s;
  }

  .drop-right {
    offset-path: path("M 42 16 C 64 16, 66 42, 50 50");
    animation-delay: 1s;
  }

  @keyframes ps-drop-flow {
    0% { offset-distance: 0%; opacity: 0; }
    15% { opacity: 1; }
    85% { opacity: 1; }
    100% { offset-distance: 100%; opacity: 0; }
  }

  /* Ascending vapor packet surging up central column */
  .ps-vapor-packet {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffd700;
    box-shadow: 0 0 8px #ffd700;
    z-index: 5;
    animation: ps-vapor-rise 2s ease-in-out infinite;
  }

  @keyframes ps-vapor-rise {
    0% { transform: translateY(14px) scale(0.6); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(-22px) scale(1.3); opacity: 0; }
  }

  /* Boiling bubbling elixir in base matrix */
  .ps-elixir-core {
    position: absolute;
    bottom: 12px;
    width: 26px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffd700 0%, #d500f9 60%, #311b92 100%);
    box-shadow: 0 0 12px #ff4081;
    animation: ps-core-boil 1.6s ease-in-out infinite alternate;
  }

  @keyframes ps-core-boil {
    0% { transform: scale(0.82); filter: brightness(0.8); }
    100% { transform: scale(1.22); filter: brightness(1.4); }
  }

  .ps-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(224, 64, 251, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPelicanStill extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${pelicanStillStyles}</style>
      <div class="ps-box">
        <div class="ps-stage">
          <div class="ps-vapor-packet"></div>
          <div class="ps-reflux-droplet drop-left"></div>
          <div class="ps-reflux-droplet drop-right"></div>

          <svg class="ps-vessel-svg" viewBox="0 0 78 64">
            <!-- Glass Body: round belly + alembic cap + dual return arms -->
            <path d="M 39 8 C 46 8, 48 18, 44 26 C 54 30, 58 44, 52 56 C 46 62, 32 62, 26 56 C 20 44, 24 30, 34 26 C 30 18, 32 8, 39 8 Z" fill="rgba(224, 64, 251, 0.12)" stroke="#e040fb" stroke-width="1.6" />
            
            <!-- Left Returning Wing Tube -->
            <path d="M 36 16 C 14 16, 12 42, 28 50" fill="none" stroke="#e040fb" stroke-width="2.2" />

            <!-- Right Returning Wing Tube -->
            <path d="M 42 16 C 64 16, 66 42, 50 50" fill="none" stroke="#e040fb" stroke-width="2.2" />
          </svg>

          <div class="ps-elixir-core"></div>
        </div>

        <div class="ps-label">PELICAN REFLUX STILL</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-pelican-still')) {
  customElements.define('concept-pelican-still', ConceptPelicanStill);
}
