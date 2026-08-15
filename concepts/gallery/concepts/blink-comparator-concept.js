const blinkComparatorStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bc-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151a26 0%, #030408 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bc-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bc-svg {
    width: 76px;
    height: 72px;
  }

  /* Rapid mechanical shutter alternating between photographic sky plate A and B */
  .bc-shutter-paddle {
    transform-origin: 38px 24px;
    animation: bc-toggle-shutter 1.2s steps(1) infinite alternate;
  }

  @keyframes bc-toggle-shutter {
    0% { transform: rotate(-25deg); }
    100% { transform: rotate(25deg); }
  }

  /* Moving celestial body (Pluto / Asteroid) jumping position between alternating blinks */
  .bc-jumping-planet {
    animation: bc-jump-position 1.2s steps(1) infinite alternate;
  }

  @keyframes bc-jump-position {
    0% { transform: translate(-5px, -3px); fill: #ffeb3b; }
    100% { transform: translate(5px, 3px); fill: #00e5ff; }
  }

  /* Fixed background stars remaining stationary during blink */
  .bc-fixed-stars circle {
    fill: #ffffff;
    opacity: 0.85;
  }

  /* Glass photographic plate boundary gleam */
  .bc-plate-border {
    animation: bc-plate-glow 2s ease-in-out infinite alternate;
  }

  @keyframes bc-plate-glow {
    0% { stroke: #78909c; }
    100% { stroke: #b0bec5; filter: drop-shadow(0 0 2px #00e5ff); }
  }

  .bc-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptBlinkComparator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${blinkComparatorStyles}</style>
      <div class="bc-box">
        <div class="bc-stage">
          <svg class="bc-svg" viewBox="0 0 76 72">
            <!-- Zeiss-Pulfrich Stereoscopic Blink Comparator Mechanism (Lowell Observatory Pluto Discovery) -->
            <!-- Left Glass Photographic Sky Plate A (January 23, 1930) -->
            <rect class="bc-plate-border" x="8" y="10" width="26" height="24" rx="1" fill="#090e18" stroke-width="0.8" />
            <text x="12" y="16" font-family="monospace" font-size="3" fill="#90caf9">PLATE A</text>

            <!-- Right Glass Photographic Sky Plate B (January 29, 1930) -->
            <rect class="bc-plate-border" x="42" y="10" width="26" height="24" rx="1" fill="#090e18" stroke-width="0.8" />
            <text x="46" y="16" font-family="monospace" font-size="3" fill="#90caf9">PLATE B</text>

            <!-- Rapid Alternating Prism Shutter Lever (Center) -->
            <g class="bc-shutter-paddle">
              <circle cx="38" cy="24" r="2" fill="#ffd700" />
              <line x1="38" y1="24" x2="38" y2="12" stroke="#ffb300" stroke-width="1.6" />
              <polygon points="36,12 40,12 38,8" fill="#ff5252" />
            </g>

            <!-- Central Binocular Eyepiece Field of View (Bottom) -->
            <circle cx="38" cy="48" r="16" fill="#04070d" stroke="#00e5ff" stroke-width="1.2" />
            <circle cx="38" cy="48" r="14.5" fill="none" stroke="#37474f" stroke-width="0.5" stroke-dasharray="1 1" />

            <!-- Stationary Background Fixed Reference Stars (Identical on both plates) -->
            <g class="bc-fixed-stars">
              <circle cx="28" cy="44" r="1" />
              <circle cx="48" cy="44" r="1" />
              <circle cx="32" cy="56" r="0.8" />
              <circle cx="44" cy="56" r="0.8" />
              <circle cx="38" cy="40" r="1.2" />
            </g>

            <!-- The Jumping Moving Body: Clyde Tombaugh's Planet Pluto Jumping Position on Blink -->
            <g class="bc-jumping-planet">
              <circle cx="38" cy="48" r="1.8" filter="drop-shadow(0 0 3px #00e5ff)" />
              <circle cx="38" cy="48" r="3.2" fill="none" stroke="#ffffff" stroke-width="0.5" stroke-dasharray="1 1" />
            </g>

            <!-- Clyde Tombaugh 1930 Pluto Discovery Annotation -->
            <text x="38" y="66" font-family="monospace" font-size="3" fill="#80d8ff" text-anchor="middle">BLINK DISCOVERY: PLUTO 1930</text>
          </svg>
        </div>
        <div class="bc-label">BLINK COMPARATOR</div>
      </div>
    `;
  }
}

customElements.define('concept-blink-comparator', ConceptBlinkComparator);
