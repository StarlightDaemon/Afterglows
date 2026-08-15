const phenakistiscopeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pk-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151a28 0%, #04060c 100%);
    border: 1.5px solid rgba(68, 138, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(68, 138, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pk-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pk-svg {
    width: 76px;
    height: 72px;
  }

  /* Rapid rotation of the slotted strobe disk */
  .pk-spinning-disk {
    transform-origin: 38px 36px;
    animation: pk-spin 4s linear infinite;
  }

  @keyframes pk-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Stroboscopic slit flash illusion */
  .pk-viewing-aperture {
    stroke: #82b1ff;
    animation: pk-strobe 0.25s steps(2, start) infinite;
  }

  @keyframes pk-strobe {
    0% { opacity: 0.3; }
    100% { opacity: 1; filter: drop-shadow(0 0 4px #448aff); }
  }

  /* Animated Galloping Horse Figures on Disk Rim */
  .pk-figures path {
    fill: #ffffff;
  }

  .pk-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(68, 138, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPhenakistiscopeDisk extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${phenakistiscopeStyles}</style>
      <div class="pk-box">
        <div class="pk-stage">
          <svg class="pk-svg" viewBox="0 0 76 72">
            <!-- Wooden Handle Stick below disk -->
            <rect x="36" y="36" width="4" height="32" rx="1" fill="#4e342e" stroke="#6d4c41" stroke-width="0.8" />

            <!-- Spinning Phenakistiscope Slotted Disk -->
            <g class="pk-spinning-disk">
              <!-- Disk Base Plate -->
              <circle cx="38" cy="36" r="30" fill="#1e293b" stroke="#3b82f6" stroke-width="1.2" />

              <!-- Radial Viewing Slits around edge (8 equidistant shutter apertures) -->
              <g stroke="#04060c" stroke-width="1.8">
                <line x1="38" y1="6" x2="38" y2="13" />
                <line x1="59.2" y1="14.8" x2="54.2" y2="19.8" />
                <line x1="68" y1="36" x2="61" y2="36" />
                <line x1="59.2" y1="57.2" x2="54.2" y2="52.2" />
                <line x1="38" y1="66" x2="38" y2="59" />
                <line x1="16.8" y1="57.2" x2="21.8" y2="52.2" />
                <line x1="8" y1="36" x2="15" y2="36" />
                <line x1="16.8" y1="14.8" x2="21.8" y2="19.8" />
              </g>

              <!-- Radial Animation Phase Figures on Inner Track -->
              <g class="pk-figures">
                <circle cx="38" cy="18" r="2" />
                <circle cx="50" cy="24" r="2.2" />
                <circle cx="56" cy="36" r="2" />
                <circle cx="50" cy="48" r="1.8" />
                <circle cx="38" cy="54" r="2" />
                <circle cx="26" cy="48" r="2.2" />
                <circle cx="20" cy="36" r="2" />
                <circle cx="26" cy="24" r="1.8" />
              </g>

              <!-- Concentric Guide Rings -->
              <circle cx="38" cy="36" r="22" fill="none" stroke="rgba(59, 130, 246, 0.3)" stroke-width="0.6" stroke-dasharray="2 2" />
              <circle cx="38" cy="36" r="12" fill="#0f172a" stroke="#3b82f6" stroke-width="0.8" />
            </g>

            <!-- Stroboscopic Shutter Flash at Top Slit (Viewpoint through mirror) -->
            <rect class="pk-viewing-aperture" x="36.5" y="5" width="3" height="9" rx="0.5" fill="#60a5fa" />

            <!-- Center Brass Pivot Pin Rivet -->
            <circle cx="38" cy="36" r="3" fill="#ffd700" stroke="#f59e0b" stroke-width="0.8" />
          </svg>
        </div>
        <div class="pk-label">PHENAKISTISCOPE</div>
      </div>
    `;
  }
}

customElements.define('concept-phenakistiscope-disk', ConceptPhenakistiscopeDisk);
