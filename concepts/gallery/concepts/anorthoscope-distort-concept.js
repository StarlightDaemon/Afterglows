const anorthoscopeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ao-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1a162b 0%, #06040e 100%);
    border: 1.5px solid rgba(186, 104, 200, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(186, 104, 200, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ao-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ao-svg {
    width: 76px;
    height: 72px;
  }

  /* Anamorphic Picture Disk Fast Clockwise Spin */
  .ao-picture-disk {
    transform-origin: 38px 36px;
    animation: ao-spin-pic 5s linear infinite;
  }

  @keyframes ao-spin-pic {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Front Slit Shutter Disk Counter-Rotating (4:5 ratio) */
  .ao-slit-disk {
    transform-origin: 38px 36px;
    animation: ao-spin-slit 4s linear infinite reverse;
  }

  @keyframes ao-spin-slit {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Reconstituted Undistorted Image Stroboscopic Glow */
  .ao-reconstituted-figure {
    animation: ao-figure-glow 2s ease-in-out infinite alternate;
  }

  @keyframes ao-figure-glow {
    0% { opacity: 0.5; filter: drop-shadow(0 0 2px #ba68c8); }
    100% { opacity: 1; filter: drop-shadow(0 0 6px #e040fb) drop-shadow(0 0 10px #00e5ff); }
  }

  .ao-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(186, 104, 200, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptAnorthoscopeDistort extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${anorthoscopeStyles}</style>
      <div class="ao-box">
        <div class="ao-stage">
          <svg class="ao-svg" viewBox="0 0 76 72">
            <!-- Rear Anamorphic Picture Disk (Carries stretched distorted spiral curves) -->
            <g class="ao-picture-disk">
              <circle cx="38" cy="36" r="30" fill="#2d1538" stroke="#ba68c8" stroke-width="1" />
              <!-- Stretched Anamorphic Figure Arcs -->
              <path d="M 38 12 Q 58 16 54 36 Q 50 56 38 52 Q 22 48 26 36 Z" fill="none" stroke="#e040fb" stroke-width="1.5" />
              <path d="M 38 18 Q 48 22 46 36 Q 44 48 38 46 Q 30 44 32 36 Z" fill="none" stroke="#ce93d8" stroke-width="1.2" />
            </g>

            <!-- Front Slitted Shutter Disk (Black disc with 4 radial narrow slots) -->
            <g class="ao-slit-disk">
              <circle cx="38" cy="36" r="31" fill="rgba(8, 4, 15, 0.6)" stroke="#4a148c" stroke-width="0.8" />
              <!-- 4 Radial Slit Lines -->
              <g stroke="#ffffff" stroke-width="1.5">
                <line x1="38" y1="8" x2="38" y2="22" />
                <line x1="66" y1="36" x2="52" y2="36" />
                <line x1="38" y1="64" x2="38" y2="50" />
                <line x1="10" y1="36" x2="24" y2="36" />
              </g>
            </g>

            <!-- Reconstituted Symmetrical Image (Optical illusion of perfectly restored central face/star) -->
            <g transform="translate(38, 36)" class="ao-reconstituted-figure">
              <polygon points="0,-10 3,-3 10,-3 4,2 6,9 0,5 -6,9 -4,2 -10,-3 -3,-3" fill="#00e5ff" stroke="#ffffff" stroke-width="0.8" />
              <circle cx="0" cy="0" r="3" fill="#ffd700" />
            </g>

            <!-- Geared Central Hub Mechanism -->
            <circle cx="38" cy="36" r="4" fill="#ffd54f" stroke="#ff8f00" stroke-width="0.8" />
          </svg>
        </div>
        <div class="ao-label">ANORTHOSCOPE</div>
      </div>
    `;
  }
}

customElements.define('concept-anorthoscope-distort', ConceptAnorthoscopeDistort);
