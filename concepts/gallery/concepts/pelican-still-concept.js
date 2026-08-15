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

  /* Circulating elixir vapor rising and returning down dual arms */
  .ps-reflux-stream {
    stroke: #ff4081;
    stroke-dasharray: 6 3;
    animation: ps-flow-reflux 2s linear infinite;
  }

  @keyframes ps-flow-reflux {
    to { stroke-dashoffset: -18; }
  }

  /* Boiling bubbling elixir in base matrix */
  .ps-elixir-core {
    position: absolute;
    bottom: 12px;
    width: 24px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffd700 0%, #d500f9 60%, #311b92 100%);
    box-shadow: 0 0 10px #ff4081;
    animation: ps-core-boil 1.8s ease-in-out infinite alternate;
  }

  @keyframes ps-core-boil {
    0% { transform: scale(0.85); filter: brightness(0.8); }
    100% { transform: scale(1.15); filter: brightness(1.3); }
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
          <svg class="ps-vessel-svg" viewBox="0 0 78 64">
            <!-- Glass Body: round belly + alembic cap + dual return arms -->
            <path d="M 39 8 C 46 8, 48 18, 44 26 C 54 30, 58 44, 52 56 C 46 62, 32 62, 26 56 C 20 44, 24 30, 34 26 C 30 18, 32 8, 39 8 Z" fill="rgba(224, 64, 251, 0.12)" stroke="#e040fb" stroke-width="1.5" />
            
            <!-- Left Returning Wing Tube -->
            <path d="M 36 16 C 14 16, 12 42, 28 50" fill="none" stroke="#e040fb" stroke-width="2" />
            <path class="ps-reflux-stream" d="M 36 16 C 14 16, 12 42, 28 50" fill="none" stroke-width="1.2" />

            <!-- Right Returning Wing Tube -->
            <path d="M 42 16 C 64 16, 66 42, 50 50" fill="none" stroke="#e040fb" stroke-width="2" />
            <path class="ps-reflux-stream" d="M 42 16 C 64 16, 66 42, 50 50" fill="none" stroke-width="1.2" />
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
