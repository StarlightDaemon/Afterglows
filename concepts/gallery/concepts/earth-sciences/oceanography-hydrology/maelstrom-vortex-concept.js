const maelstromStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .mls {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #03141f 0%, #01060a 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Swirling oceanic vortex turntable */
  .mls-vortex-turntable {
    position: relative;
    width: 82px;
    height: 82px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: mls-spin-vortex 4s linear infinite;
  }

  @keyframes mls-spin-vortex {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Logarithmic spiral streamlines SVG */
  .mls-spirals-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .mls-spiral-arm {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1.5;
    stroke-linecap: round;
    filter: drop-shadow(0 0 3px #0088ff);
  }

  .mls-spiral-trail {
    fill: none;
    stroke: rgba(255, 255, 255, 0.6);
    stroke-width: 1;
    stroke-dasharray: 2 3;
  }

  /* Central abyssal drain eye core */
  .mls-eye-core {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #000408;
    border: 1.5px solid #00e5ff;
    box-shadow: inset 0 0 8px #000000, 0 0 10px #00e5ff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mls-drain-pinpoint {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff;
    animation: mls-drain-pulse 1s ease-in-out infinite alternate;
  }

  @keyframes mls-drain-pulse {
    0% { transform: scale(0.6); opacity: 0.5; }
    100% { transform: scale(1.2); opacity: 1; }
  }

  /* Cavitation aeration bubbles spiraling down */
  .mls-bubble {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #8cffff;
  }

  .b-s1 { top: 18px; left: 24px; }
  .b-s2 { top: 22px; right: 20px; }
  .b-s3 { bottom: 18px; right: 28px; }
  .b-s4 { bottom: 26px; left: 16px; }

  .mls-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptMaelstromVortex extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${maelstromStyles}</style>
      <div class="mls">
        <div class="mls-vortex-turntable">
          <svg class="mls-spirals-svg" viewBox="0 0 82 82">
            <!-- 3 Logarithmic inward swirling vortex arms -->
            <path class="mls-spiral-arm" d="M 41 41 C 41 28, 24 20, 10 24 C -2 28, 4 58, 20 68 C 42 82, 70 70, 76 46 C 80 20, 58 4, 34 8" />
            <path class="mls-spiral-trail" d="M 41 41 C 54 41, 62 24, 58 10 C 54 -2, 24 4, 14 20 C 0 42, 12 70, 36 76 C 62 80, 78 58, 74 34" />
            <circle cx="41" cy="41" r="38" fill="none" stroke="rgba(0, 229, 255, 0.25)" stroke-width="1" stroke-dasharray="3 3" />
          </svg>

          <div class="mls-eye-core">
            <div class="mls-drain-pinpoint"></div>
          </div>

          <div class="mls-bubble b-s1"></div>
          <div class="mls-bubble b-s2"></div>
          <div class="mls-bubble b-s3"></div>
          <div class="mls-bubble b-s4"></div>
        </div>

        <div class="mls-label">MAELSTROM VORTEX</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-maelstrom-vortex')) {
  customElements.define('concept-maelstrom-vortex', ConceptMaelstromVortex);
}
