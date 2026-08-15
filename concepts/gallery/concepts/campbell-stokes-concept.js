const campbellStokesStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cs-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #201910 0%, #080603 100%);
    border: 1.5px solid rgba(245, 158, 11, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(245, 158, 11, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cs-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cs-svg {
    width: 76px;
    height: 72px;
  }

  /* Solid optical glass sphere caustic shimmer */
  .cs-glass-sphere {
    animation: cs-sphere-glow 3s ease-in-out infinite alternate;
  }

  @keyframes cs-sphere-glow {
    0% { filter: drop-shadow(0 0 2px rgba(251, 191, 36, 0.4)); opacity: 0.85; }
    100% { filter: drop-shadow(0 0 5px rgba(253, 224, 71, 0.9)); opacity: 1; }
  }

  /* Focused solar burn focal point scorching card track */
  .cs-solar-focal-point {
    animation: cs-sun-sweep 6s ease-in-out infinite alternate;
  }

  @keyframes cs-sun-sweep {
    0% { cx: 24px; cy: 52px; }
    50% { cx: 38px; cy: 56px; }
    100% { cx: 52px; cy: 52px; }
  }

  /* Scorched burn trace smoke and sparks */
  .cs-burn-ember {
    animation: cs-ember-flash 1.2s ease-in-out infinite alternate;
  }

  @keyframes cs-ember-flash {
    0% { r: 1.5px; opacity: 0.6; fill: #ea580c; }
    100% { r: 2.6px; opacity: 1; fill: #ffffff; filter: drop-shadow(0 0 3px #f59e0b); }
  }

  /* Solar rays converging through glass sphere */
  .cs-sun-ray {
    animation: cs-ray-shimmer 2.2s ease-in-out infinite alternate;
  }

  @keyframes cs-ray-shimmer {
    0% { opacity: 0.4; }
    100% { opacity: 0.9; }
  }

  .cs-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(245, 158, 11, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCampbellStokes extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${campbellStokesStyles}</style>
      <div class="cs-box">
        <div class="cs-stage">
          <svg class="cs-svg" viewBox="0 0 76 72">
            <!-- 1853 Campbell-Stokes Sunshine Recorder -->
            <!-- Cast Brass Hemispherical Bowl & Latitude Arc Base -->
            <path d="M 16 48 A 24 24 0 0 0 60 48" fill="none" stroke="#b45309" stroke-width="3" />
            <!-- Concentric Grooves for Daily Card Insertion -->
            <path d="M 18 50 A 22 22 0 0 0 58 50" fill="none" stroke="#78350f" stroke-width="1" />

            <!-- Sunburnt Cyan/Sepia Recording Card Strip inside bowl -->
            <path d="M 20 49 A 20 20 0 0 0 56 49" fill="none" stroke="#1e293b" stroke-width="1.8" />
            <!-- Scorched Burn Path on Card -->
            <path d="M 22 51 A 18 18 0 0 0 54 51" fill="none" stroke="#451a03" stroke-width="1.2" stroke-dasharray="3 1" />

            <!-- Incident Parallel Solar Rays -->
            <g class="cs-sun-ray" stroke="#fef08a" stroke-width="0.8" stroke-dasharray="3 2" opacity="0.7">
              <line x1="20" y1="6" x2="32" y2="24" />
              <line x1="38" y1="4" x2="38" y2="24" />
              <line x1="56" y1="6" x2="44" y2="24" />
            </g>

            <!-- Solid Crown Optical Glass Sphere (4-inch diameter) -->
            <g class="cs-glass-sphere">
              <circle cx="38" cy="32" r="14" fill="#0284c7" fill-opacity="0.3" stroke="#e0f2fe" stroke-width="1.2" />
              <!-- Specular Reflection Highlight Crescent -->
              <path d="M 30 24 A 10 10 0 0 1 42 22" fill="none" stroke="#ffffff" stroke-width="1.2" opacity="0.8" />
              <circle cx="33" cy="27" r="2" fill="#ffffff" opacity="0.9" />
            </g>

            <!-- Brass Pedestal & Latitude Clamping Screws -->
            <rect x="36" y="58" width="4" height="8" fill="#d97706" />
            <polygon points="30,66 46,66 42,64 34,64" fill="#92400e" />

            <!-- Concentrated Scorching Caustic Focus & Burning Ember Spot -->
            <circle class="cs-solar-focal-point cs-burn-ember" cx="38" cy="54" r="2" />
          </svg>
        </div>
        <div class="cs-label">CAMPBELL-STOKES</div>
      </div>
    `;
  }
}

customElements.define('concept-campbell-stokes', ConceptCampbellStokes);
