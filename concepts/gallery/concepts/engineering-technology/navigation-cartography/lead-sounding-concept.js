const leadSoundingStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ls-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 60%, #0d2232 0%, #03080e 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ls-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ls-svg {
    width: 76px;
    height: 72px;
  }

  /* Sounding Lead Weight descent and touch */
  .ls-lead-weight {
    animation: ls-heave-drop 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
  }

  @keyframes ls-heave-drop {
    0% { transform: translateY(-16px); }
    100% { transform: translateY(4px); }
  }

  /* Fathom Line Running Through Water */
  .ls-fathom-marks {
    stroke: #b0bec5;
    stroke-width: 1;
  }

  /* Seabed Sediment Touch Plume */
  .ls-sediment-cloud {
    fill: #8d6e63;
    animation: ls-cloud-puff 3.5s ease-out infinite alternate;
  }

  @keyframes ls-cloud-puff {
    0% { transform: scale(0.3); opacity: 0; }
    80% { opacity: 0.8; }
    100% { transform: scale(1.3); opacity: 0.4; }
  }

  .ls-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptLeadSounding extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${leadSoundingStyles}</style>
      <div class="ls-box">
        <div class="ls-stage">
          <svg class="ls-svg" viewBox="0 0 76 72">
            <!-- Ocean Water Column & Depth Strata Lines -->
            <rect x="8" y="8" width="60" height="56" fill="rgba(0, 229, 255, 0.05)" />
            <line x1="8" y1="18" x2="68" y2="18" stroke="rgba(0, 229, 255, 0.15)" stroke-width="0.5" stroke-dasharray="2 2" />
            <line x1="8" y1="32" x2="68" y2="32" stroke="rgba(0, 229, 255, 0.15)" stroke-width="0.5" stroke-dasharray="2 2" />
            <line x1="8" y1="46" x2="68" y2="46" stroke="rgba(0, 229, 255, 0.15)" stroke-width="0.5" stroke-dasharray="2 2" />

            <!-- Ocean Seabed Floor Sand/Silt Bed -->
            <path d="M 8 58 Q 24 56 38 58 Q 54 60 68 58 L 68 66 L 8 66 Z" fill="#3e2723" stroke="#5d4037" stroke-width="1" />

            <!-- Seabed Contact Silt Puff (transform origin at bottom of lead) -->
            <g transform="translate(38, 56)">
              <ellipse class="ls-sediment-cloud" cx="0" cy="0" rx="8" ry="3" />
            </g>

            <!-- Sounding Lead Assembly (Lead weight + fathom line) -->
            <g class="ls-lead-weight">
              <!-- Fathom Braided Hemp Sounding Line -->
              <line x1="38" y1="4" x2="38" y2="38" class="ls-fathom-marks" />

              <!-- Traditional Fathom Line Depth Markers (Leather strips, red bunting, white calico) -->
              <!-- 2 Fathoms: Strip of Black Leather -->
              <rect x="36" y="14" width="4" height="1.5" fill="#212121" />
              <!-- 3 Fathoms: 3 Tails of Leather -->
              <rect x="35" y="22" width="6" height="1.5" fill="#424242" />
              <!-- 5 Fathoms: White Calico Cloth -->
              <rect x="35" y="30" width="6" height="2" fill="#ffffff" />

              <!-- Conical Tapered Lead Weight (Plumbum) -->
              <path d="M 36 38 L 40 38 L 42 54 L 34 54 Z" fill="#78909c" stroke="#b0bec5" stroke-width="1" />
              <!-- Top Attachment Eyelet Ring -->
              <circle cx="38" cy="37" r="1.8" fill="none" stroke="#b0bec5" stroke-width="0.8" />

              <!-- Hollow Arming Cavity at Bottom of Lead (Packed with Tallow Wax) -->
              <ellipse cx="38" cy="54" rx="3.5" ry="1.2" fill="#fff9c4" stroke="#ffeb3b" stroke-width="0.6" />
            </g>
          </svg>
        </div>
        <div class="ls-label">SOUNDING LEAD</div>
      </div>
    `;
  }
}

customElements.define('concept-lead-sounding', ConceptLeadSounding);
