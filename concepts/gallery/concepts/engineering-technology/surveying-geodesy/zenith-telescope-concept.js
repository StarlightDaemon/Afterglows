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
    animation: zt-zenith-reversal 2.4s ease-in-out infinite alternate;
    transform-origin: 38px 40px;
  }

  @keyframes zt-zenith-reversal {
    0% { transform: rotate(-20deg); }
    100% { transform: rotate(20deg); }
  }

  /* Sensitive Horrebow spirit level bubble oscillation */
  .zt-level-bubble {
    animation: zt-bubble-drift 2.4s ease-in-out infinite alternate;
  }

  @keyframes zt-bubble-drift {
    0% { transform: translateX(-4.5px); }
    100% { transform: translateX(4.5px); }
  }

  /* Filar micrometer spider-wire adjustment */
  .zt-filar-wire {
    animation: zt-wire-shift 1.2s ease-in-out infinite alternate;
  }

  @keyframes zt-wire-shift {
    0% { transform: translateY(-2px); }
    100% { transform: translateY(2px); }
  }

  /* Zenith star photon packet streaming into telescope objective */
  .zt-star-packet {
    position: absolute;
    width: 3.5px;
    height: 3.5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff, 0 0 10px #00e5ff;
    z-index: 6;
    animation: zt-star-fall 1.2s linear infinite;
  }

  .zp1 { top: 8px; left: 34px; animation-delay: 0s; }
  .zp2 { top: 8px; left: 42px; animation-delay: 0.6s; }

  @keyframes zt-star-fall {
    0% { transform: translateY(0); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateY(32px); opacity: 0; }
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
          <div class="zt-star-packet zp1"></div>
          <div class="zt-star-packet zp2"></div>

          <svg class="zt-svg" viewBox="0 0 76 72">
            <!-- Massive Masonry Geodetic Pillar Base -->
            <rect x="22" y="60" width="32" height="6" rx="1" fill="#263238" stroke="#455a64" stroke-width="0.8" />
            <rect x="34" y="52" width="8" height="8" fill="#37474f" stroke="#78909c" stroke-width="0.6" />

            <!-- Sighted Zenith Star Pair Transit Vectors (Top Zenith) -->
            <line x1="34" y1="2" x2="36" y2="12" stroke="#80d8ff" stroke-width="1" stroke-dasharray="3 1.5" />
            <line x1="42" y1="2" x2="40" y2="12" stroke="#80d8ff" stroke-width="1" stroke-dasharray="3 1.5" />

            <circle cx="34" cy="3" r="1.5" fill="#ffffff" filter="drop-shadow(0 0 3px #00e5ff)" />
            <circle cx="42" cy="3" r="1.5" fill="#ffffff" filter="drop-shadow(0 0 3px #00e5ff)" />

            <!-- Vertical Achromatic Zenith Telescope Tube -->
            <g class="zt-vertical-scope">
              <!-- Objective Lens Cell -->
              <rect x="34" y="12" width="8" height="4" rx="1" fill="#ffd700" stroke="#ffb300" stroke-width="0.6" />
              <line x1="35" y1="12" x2="41" y2="12" stroke="#80d8ff" stroke-width="1.4" />

              <!-- Main Brass Telescope Body Tube -->
              <rect x="36" y="16" width="4" height="34" fill="#3e2723" stroke="#ffd700" stroke-width="0.8" />

              <!-- Diagonal Eyepiece & Filar Position Micrometer Box (Bottom) -->
              <rect x="33" y="46" width="10" height="7" rx="1" fill="#212121" stroke="#ffd700" stroke-width="0.6" />
              <circle cx="46" cy="49.5" r="2.2" fill="#ffd700" stroke="#ffb300" stroke-width="0.5" />
              <line class="zt-filar-wire" x1="34" y1="49.5" x2="42" y2="49.5" stroke="#00e5ff" stroke-width="0.8" />

              <!-- Highly Sensitive Horrebow Striding Spirit Level -->
              <rect x="22" y="28" width="12" height="4" rx="1" fill="#0f2622" stroke="#00e676" stroke-width="0.6" />
              <rect class="zt-level-bubble" x="27" y="29" width="3" height="2" rx="0.5" fill="#69f0ae" />
              <line x1="34" y1="30" x2="36" y2="30" stroke="#ffd700" stroke-width="0.8" />

              <!-- Vertical Meridian Circle Setting Arc -->
              <path d="M 44 26 A 14 14 0 0 1 44 42" fill="none" stroke="#ffd700" stroke-width="1" stroke-dasharray="2 1" />
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

if (!customElements.get('concept-zenith-telescope')) {
  customElements.define('concept-zenith-telescope', ConceptZenithTelescope);
}
