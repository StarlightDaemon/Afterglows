const volvelleStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .vol {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #161005 0%, #080501 100%);
    border: 1.5px solid rgba(255, 187, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(255, 187, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Base parchment calendar disk (outer static ring) */
  .vol-base-ring {
    position: absolute;
    width: 82px;
    height: 82px;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 50%, #2b1f0a 0%, #140d02 100%);
    border: 1.5px solid #ffaa00;
    box-shadow: inset 0 0 8px rgba(255, 170, 0, 0.3), 0 0 6px rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Middle rotating astrological aspect disk */
  .vol-middle-disk {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1.2px dashed rgba(255, 204, 0, 0.7);
    background: rgba(255, 170, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: vol-rot-mid 14s linear infinite;
  }

  @keyframes vol-rot-mid {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Top rotating lunar phase disc with aperture window */
  .vol-lunar-disk {
    position: absolute;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #170f03;
    border: 1px solid #ffffff;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
    animation: vol-rot-lunar 8s linear infinite reverse;
  }

  @keyframes vol-rot-lunar {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .vol-lunar-aperture {
    position: absolute;
    top: 4px;
    left: 50%;
    width: 10px;
    height: 10px;
    margin-left: -5px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff 0%, #ffcc00 60%, transparent 100%);
    box-shadow: 0 0 6px #ffea88;
  }

  /* Central brass grommet rivet pivot pin */
  .vol-pivot-pin {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #ff8800;
    box-shadow: 0 0 6px #ffcc00;
    z-index: 7;
  }

  /* Index pointer arm */
  .vol-index-pointer {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 1.5px;
    background: linear-gradient(90deg, #ffffff 0%, #ffaa00 100%);
    transform-origin: 0% 50%;
    animation: vol-rot-pointer 6s linear infinite;
    z-index: 6;
  }

  @keyframes vol-rot-pointer {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .vol-pointer-tip {
    position: absolute;
    right: -2px;
    top: -2.5px;
    width: 6px;
    height: 6px;
    background: #ffffff;
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
    box-shadow: 0 0 4px #ffffff;
  }

  .vol-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 204, 100, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptVolvelle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${volvelleStyles}</style>
      <div class="vol">
        <div class="vol-base-ring">
          <svg style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;" viewBox="0 0 82 82">
            <!-- 12 Astrological division lines -->
            <circle cx="41" cy="41" r="38" fill="none" stroke="rgba(255, 170, 0, 0.4)" stroke-width="1" stroke-dasharray="2 4" />
            <line x1="41" y1="3" x2="41" y2="79" stroke="rgba(255, 170, 0, 0.3)" stroke-width="0.8" />
            <line x1="3" y1="41" x2="79" y2="41" stroke="rgba(255, 170, 0, 0.3)" stroke-width="0.8" />
          </svg>

          <div class="vol-middle-disk">
            <svg style="position: absolute; inset: 0; width: 100%; height: 100%;" viewBox="0 0 60 60">
              <!-- Trigon aspect triangle -->
              <polygon points="30,6 51,42 9,42" fill="none" stroke="rgba(255, 220, 100, 0.5)" stroke-width="1" />
              <!-- Tetragon aspect square -->
              <rect x="15" y="15" width="30" height="30" fill="none" stroke="rgba(255, 180, 0, 0.3)" stroke-width="0.8" />
            </svg>
          </div>

          <div class="vol-lunar-disk">
            <div class="vol-lunar-aperture"></div>
          </div>

          <div class="vol-index-pointer">
            <div class="vol-pointer-tip"></div>
          </div>

          <div class="vol-pivot-pin"></div>
        </div>

        <div class="vol-label">VOLVELLE WHEEL CHART</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-volvelle')) {
  customElements.define('concept-volvelle', ConceptVolvelle);
}
