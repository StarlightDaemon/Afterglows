const dinesMeteorographStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .dm-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151a22 0%, #050609 100%);
    border: 1.5px solid rgba(148, 163, 184, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(148, 163, 184, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dm-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dm-svg {
    width: 76px;
    height: 72px;
  }

  /* Aerological sounding balloon ascending into stratosphere with turbulent sway */
  .dm-balloon-sway {
    animation: dm-balloon-ascent 3.2s ease-in-out infinite alternate;
  }

  @keyframes dm-balloon-ascent {
    0% { transform: translateY(-5px) rotate(-10deg); }
    100% { transform: translateY(5px) rotate(10deg); }
  }

  /* Microscopic diamond stylus scratching trace onto silvered copper plate */
  .dm-stylus-trace {
    animation: dm-trace-scratch 2s ease-in-out infinite alternate;
  }

  @keyframes dm-trace-scratch {
    0% { transform: rotate(-18deg); stroke: #38bdf8; }
    100% { transform: rotate(18deg); stroke: #ffffff; filter: drop-shadow(0 0 4px #38bdf8); }
  }

  /* Bimetallic temperature coil flexing in sub-zero tropospheric air */
  .dm-bimetal-flex {
    animation: dm-bimetal-coil 2.5s ease-in-out infinite alternate;
  }

  @keyframes dm-bimetal-coil {
    0% { transform: scaleX(0.75) scaleY(1.1); }
    100% { transform: scaleX(1.25) scaleY(0.9); }
  }

  /* Micro-aneroid pressure capsule compression */
  .dm-aneroid-capsule {
    animation: dm-aneroid-breathe 2.5s ease-in-out infinite alternate;
    transform-origin: 32px 50px;
  }

  @keyframes dm-aneroid-breathe {
    0% { transform: scaleY(0.7); }
    100% { transform: scaleY(1.3); }
  }

  .dm-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(148, 163, 184, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptDinesMeteorograph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${dinesMeteorographStyles}</style>
      <div class="dm-box">
        <div class="dm-stage">
          <svg class="dm-svg" viewBox="0 0 76 72">
            <!-- 1907 William Henry Dines Upper-Air Sounding Meteorograph -->
            <!-- Pilot Balloon Tether Cord (Top) -->
            <g class="dm-balloon-sway" style="transform-origin: 38px 10px;">
              <!-- Latex Sounding Balloon (Cutaway Top) -->
              <ellipse cx="38" cy="1" rx="16" ry="12" fill="#0284c7" fill-opacity="0.3" stroke="#38bdf8" stroke-width="1" />
              <!-- Suspension Cords & Spider Web Shock Absorber -->
              <line x1="30" y1="12" x2="38" y2="24" stroke="#94a3b8" stroke-width="0.8" />
              <line x1="46" y1="12" x2="38" y2="24" stroke="#94a3b8" stroke-width="0.8" />

              <!-- Lightweight Polished Aluminum Frame (Weighs only 30 grams!) -->
              <rect x="20" y="24" width="36" height="34" rx="2" fill="#1e293b" stroke="#cbd5e1" stroke-width="1.2" />

              <!-- Highly Polished Silvered Copper Recording Plate (Postage-stamp size) -->
              <rect x="24" y="28" width="16" height="16" rx="1" fill="#0f172a" stroke="#e2e8f0" stroke-width="1" />
              <!-- Scratched Temperature vs Pressure Sounding Curve on Plate -->
              <path d="M 26 40 Q 32 32 36 30" fill="none" stroke="#f43f5e" stroke-width="1.2" />

              <!-- Ultra-Light Bimetallic Temperature Sensor Strip (Right) -->
              <g class="dm-bimetal-flex" style="transform-origin: 48px 32px;">
                <path d="M 44 28 C 48 26, 52 30, 48 34 C 44 38, 52 42, 46 44" fill="none" stroke="#38bdf8" stroke-width="1.4" />
              </g>

              <!-- Micro-Aneroid Pressure Capsule (Bottom) -->
              <g class="dm-aneroid-capsule">
                <ellipse cx="32" cy="50" rx="6" ry="2.5" fill="#334155" stroke="#94a3b8" stroke-width="0.8" />
              </g>

              <!-- Hairspring Diamond Scribing Stylus Arm -->
              <g class="dm-stylus-trace" style="transform-origin: 42px 46px;">
                <line x1="42" y1="46" x2="30" y2="34" stroke-width="1.2" />
                <circle cx="30" cy="34" r="1.2" fill="#ffffff" filter="drop-shadow(0 0 3px #38bdf8)" />
              </g>
            </g>
          </svg>
        </div>
        <div class="dm-label">DINES METEOROGRAPH</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-dines-meteorograph')) {
  customElements.define('concept-dines-meteorograph', ConceptDinesMeteorograph);
}
