const bubbleChamberStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bub {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #041416 0%, #010608 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 229, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Superheated liquid hydrogen cylindrical viewing window */
  .bub-window {
    position: absolute;
    width: 82px;
    height: 82px;
    border-radius: 50%;
    border: 1.5px solid #00e5ff;
    background: radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.1) 0%, #02141c 80%, #010a0e 100%);
    box-shadow: inset 0 0 14px rgba(0, 229, 255, 0.3), 0 0 8px rgba(0, 229, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Magnetic field perpendicular flux crosshairs */
  .bub-mag-grid {
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    border: 1px dotted rgba(0, 229, 255, 0.2);
  }

  /* Curved particle ionization bubble tracks SVG */
  .bub-tracks-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .bub-track-spiral {
    fill: none;
    stroke: #ffffff;
    stroke-width: 1.2;
    stroke-linecap: round;
    stroke-dasharray: 2 2;
    filter: drop-shadow(0 0 4px #00e5ff);
    animation: bub-pulse-track 2s ease-in-out infinite alternate;
  }

  .bub-track-pair {
    fill: none;
    stroke: #8cffff;
    stroke-width: 1.4;
    stroke-linecap: round;
    stroke-dasharray: 3 1.5;
  }

  .bub-track-muon {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1.6;
    stroke-linecap: round;
  }

  @keyframes bub-pulse-track {
    0% { opacity: 0.6; filter: drop-shadow(0 0 2px #00e5ff); }
    100% { opacity: 1; filter: drop-shadow(0 0 6px #ffffff); }
  }

  /* Boiling nucleation microbubbles expanding along tracks */
  .bub-bubble {
    position: absolute;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #8cffff;
    animation: bub-expand 1.8s ease-out infinite;
  }

  .b-1 { width: 3px; height: 3px; top: 40px; left: 40px; }
  .b-2 { width: 2.5px; height: 2.5px; top: 32px; left: 52px; animation-delay: 0.4s; }
  .b-3 { width: 2px; height: 2px; top: 22px; left: 48px; animation-delay: 0.8s; }
  .b-4 { width: 3.5px; height: 3.5px; top: 58px; left: 28px; animation-delay: 1.2s; }

  @keyframes bub-expand {
    0% { transform: scale(0.4); opacity: 0.3; }
    50% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(0.6); opacity: 0.2; }
  }

  .bub-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptBubbleChamber extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bubbleChamberStyles}</style>
      <div class="bub">
        <div class="bub-window">
          <div class="bub-mag-grid"></div>

          <svg class="bub-tracks-svg" viewBox="0 0 82 82">
            <!-- High-energy straight beam track entering from bottom -->
            <path class="bub-track-muon" d="M 12 70 L 41 41" />
            <!-- Vertex collision: Pair production curling electron / positron paths -->
            <path class="bub-track-pair" d="M 41 41 C 55 35, 68 45, 65 60" />
            <!-- High magnetic field curling tight electron spiral -->
            <path class="bub-track-spiral" d="M 41 41 C 48 30, 56 22, 48 16 C 40 10, 32 18, 36 26 C 40 32, 46 30, 44 24" />
            <!-- Primary vertex node -->
            <circle cx="41" cy="41" r="2.5" fill="#ffffff" />
          </svg>

          <div class="bub-bubble b-1"></div>
          <div class="bub-bubble b-2"></div>
          <div class="bub-bubble b-3"></div>
          <div class="bub-bubble b-4"></div>
        </div>

        <div class="bub-label">BUBBLE CHAMBER TRACKS</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-bubble-chamber')) {
  customElements.define('concept-bubble-chamber', ConceptBubbleChamber);
}
