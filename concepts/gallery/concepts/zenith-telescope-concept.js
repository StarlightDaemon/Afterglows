const zenithTelescopeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .zt-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151d28 0%, #03060a 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .zt-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .zt-svg {
    width: 76px;
    height: 72px;
  }

  /* Zenith telescope vertical 180-degree meridian reversal (Horrebow-Talcott Method) */
  .zt-vertical-scope {
    animation: zt-zenith-reversal 4.4s ease-in-out infinite alternate;
    transform-origin: 38px 40px;
  }

  @keyframes zt-zenith-reversal {
    0% { transform: rotate(-6deg); }
    50% { transform: rotate(0deg); }
    100% { transform: rotate(6deg); }
  }

  /* Sensitive Horrebow spirit level bubble oscillation */
  .zt-level-bubble {
    animation: zt-bubble-drift 2.2s ease-in-out infinite alternate;
  }

  @keyframes zt-bubble-drift {
    0% { transform: translateX(-1.5px); }
    100% { transform: translateX(1.5px); }
  }

  /* Filar micrometer spider-wire adjustment */
  .zt-filar-wire {
    animation: zt-wire-shift 1.6s ease-in-out infinite alternate;
  }

  @keyframes zt-wire-shift {
    0% { transform: translateY(-1px); }
    100% { transform: translateY(1px); }
  }

  /* Zenith star pair meridian transit rays */
  .zt-zenith-rays line {
    animation: zt-ray-pulse 1.4s ease-in-out infinite alternate;
    stroke: #80d8ff;
    stroke-width: 0.8;
    stroke-dasharray: 3 1.5;
  }

  @keyframes zt-ray-pulse {
    0% { opacity: 0.3; }
    100% { opacity: 1; filter: drop-shadow(0 0 2px #00e5ff); }
  }

  .zt-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptZenithTelescope extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${zenithTelescopeStyles}</style>
      <div class="zt-box">
        <div class="zt-stage">
          <svg class="zt-svg" viewBox="0 0 76 72">
            <!-- Massive Masonry Geodetic Pillar Base -->
            <rect x="22" y="60" width="32" height="6" rx="1" fill="#263238" stroke="#455a64" stroke-width="0.8" />
            <rect x="34" y="52" width="8" height="8" fill="#37474f" stroke="#78909c" stroke-width="0.6" />

            <!-- Sighted Zenith Star Pair Transit Vectors (Top Zenith) -->
            <g class="zt-zenith-rays">
              <line x1="34" y1="2" x2="36" y2="12" />
              <line x1="42" y1="2" x2="40" y2="12" />
            </g>
            <circle cx="34" cy="3" r="1" fill="#ffffff" filter="drop-shadow(0 0 2px #00e5ff)" />
            <circle cx="42" cy="3" r="1" fill="#ffffff" filter="drop-shadow(0 0 2px #00e5ff)" />

            <!-- Vertical Achromatic Zenith Telescope Tube -->
            <g class="zt-vertical-scope">
              <!-- Objective Lens Cell (Top pointing straight to zenith) -->
              <rect x="34" y="12" width="8" height="4" rx="1" fill="#ffd700" stroke="#ffb300" stroke-width="0.6" />
              <line x1="35" y1="12" x2="41" y2="12" stroke="#80d8ff" stroke-width="1.2" />

              <!-- Main Brass Telescope Body Tube -->
              <rect x="36" y="16" width="4" height="34" fill="#3e2723" stroke="#ffd700" stroke-width="0.8" />

              <!-- Diagonal Eyepiece & Filar Position Micrometer Box (Bottom) -->
              <rect x="33" y="46" width="10" height="7" rx="1" fill="#212121" stroke="#ffd700" stroke-width="0.6" />
              <!-- Filar micrometer drum drum knob -->
              <circle cx="46" cy="49.5" r="2.2" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
              <line class="zt-filar-wire" x1="34" y1="49.5" x2="42" y2="49.5" stroke="#00e5ff" stroke-width="0.6" />

              <!-- Highly Sensitive Horrebow Striding Spirit Level (Attached to telescope tube) -->
              <rect x="22" y="28" width="12" height="4" rx="1" fill="#0f2622" stroke="#00e676" stroke-width="0.6" />
              <rect class="zt-level-bubble" x="27" y="29" width="3" height="2" rx="0.5" fill="#69f0ae" />
              <!-- Level support brackets -->
              <line x1="34" y1="30" x2="36" y2="30" stroke="#ffd700" stroke-width="0.8" />

              <!-- Vertical Meridian Circle Setting Arc -->
              <path d="M 44 26 A 14 14 0 0 1 44 42" fill="none" stroke="#ffd700" stroke-width="0.8" stroke-dasharray="1 1" />
            </g>

            <!-- Trunnion Axis Center Pivot -->
            <circle cx="38" cy="40" r="2.8" fill="#ffd700" stroke="#ffb300" stroke-width="0.8" />
          </svg>
        </div>
        <div class="zt-label">ZENITH TELESCOPE</div>
      </div>
    `;
  }
}

customElements.define('concept-zenith-telescope', ConceptZenithTelescope);
