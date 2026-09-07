const dioptraLevelStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .dl-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #152220 0%, #030806 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dl-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dl-svg {
    width: 76px;
    height: 72px;
  }

  /* Heron's cog-wheel tangent worm screw rotation */
  .dl-worm-gear {
    transform-origin: 38px 46px;
    animation: dl-turn-worm 3s linear infinite;
  }

  @keyframes dl-turn-worm {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Upper sighting dioptra alidade horizontal sweep */
  .dl-dioptra-bar {
    transform-origin: 38px 24px;
    animation: dl-sweep-bar 3.6s ease-in-out infinite alternate;
  }

  @keyframes dl-sweep-bar {
    0% { transform: rotate(-16deg); }
    100% { transform: rotate(16deg); }
  }

  /* Hydrostatic water-level glass tube meniscus oscillation */
  .dl-water-level {
    animation: dl-water-slosh 2s ease-in-out infinite alternate;
  }

  @keyframes dl-water-slosh {
    0% { transform: translateY(-0.8px); fill: #00e5ff; }
    100% { transform: translateY(0.8px); fill: #80d8ff; }
  }

  .dl-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptDioptraLevel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${dioptraLevelStyles}</style>
      <div class="dl-box">
        <div class="dl-stage">
          <svg class="dl-svg" viewBox="0 0 76 72">
            <!-- Ancient Bronze Column Base & Plinth -->
            <rect x="26" y="58" width="24" height="6" rx="1" fill="#37474f" stroke="#546e7a" stroke-width="0.6" />
            <rect x="36" y="48" width="4" height="10" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />

            <!-- Heron's Toothed Cog-Wheel & Endless Worm-Screw Drive -->
            <circle cx="38" cy="46" r="8" fill="#1b2828" stroke="#ffd700" stroke-width="0.8" stroke-dasharray="1.5 1.5" />
            <!-- Horizontal Tangent Worm Screw -->
            <g class="dl-worm-gear">
              <line x1="26" y1="46" x2="50" y2="46" stroke="#00e5ff" stroke-width="1.2" stroke-dasharray="2 2" />
            </g>

            <!-- U-Shaped Bronze Water Channel (Chorobates / Hydrostatic Water Tube) -->
            <path d="M 12 28 L 12 34 Q 38 36 64 34 L 64 28" fill="none" stroke="#ffd700" stroke-width="1.2" />

            <!-- Vertical Glass Water Sight Tubes at Ends (Water Level Meniscus) -->
            <rect x="10" y="20" width="4" height="12" rx="0.5" fill="rgba(0, 229, 255, 0.1)" stroke="#80d8ff" stroke-width="0.6" />
            <rect class="dl-water-level" x="11" y="25" width="2" height="6" fill="#00e5ff" />

            <rect x="62" y="20" width="4" height="12" rx="0.5" fill="rgba(0, 229, 255, 0.1)" stroke="#80d8ff" stroke-width="0.6" />
            <rect class="dl-water-level" x="63" y="25" width="2" height="6" fill="#00e5ff" />

            <!-- Rotating Sighting Dioptra Bar (Sight Vanes with Pinholes & Crosshair Wires) -->
            <g class="dl-dioptra-bar">
              <!-- Central Alidade Bar -->
              <rect x="12" y="23" width="52" height="2.5" rx="0.5" fill="#4e342e" stroke="#ffd700" stroke-width="0.6" />
              <!-- Left Sighting Vane Slit -->
              <rect x="12" y="16" width="3" height="8" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
              <line x1="13.5" y1="18" x2="13.5" y2="22" stroke="#000000" stroke-width="0.8" />
              <!-- Right Sighting Vane Aperture & Hair -->
              <rect x="61" y="16" width="3" height="8" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
              <circle cx="62.5" cy="20" r="1.2" fill="#00e5ff" />

              <!-- Sighting Vector Ray -->
              <line x1="64" y1="20" x2="76" y2="20" stroke="#00e5ff" stroke-width="0.8" stroke-dasharray="2 1" />
            </g>

            <!-- Water Level Horizon Reference Line -->
            <line x1="8" y1="26" x2="68" y2="26" stroke="#00e5ff" stroke-width="0.5" stroke-dasharray="1 2" opacity="0.7" />
          </svg>
        </div>
        <div class="dl-label">HERON'S DIOPTRA</div>
      </div>
    `;
  }
}

customElements.define('concept-dioptra-level', ConceptDioptraLevel);
