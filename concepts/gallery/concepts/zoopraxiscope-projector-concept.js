const zoopraxiscopeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .zp-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 70% 50%, #2b220d 0%, #0c0902 100%);
    border: 1.5px solid rgba(255, 215, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .zp-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .zp-svg {
    width: 76px;
    height: 72px;
  }

  /* Glass Picture Disk Rotation */
  .zp-glass-disk {
    transform-origin: 28px 36px;
    animation: zp-spin-disk 6s linear infinite;
  }

  @keyframes zp-spin-disk {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Counter-Rotating Metal Shutter Disk */
  .zp-shutter-disk {
    transform-origin: 28px 36px;
    animation: zp-spin-shutter 3s linear infinite reverse;
  }

  @keyframes zp-spin-shutter {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Magic Lantern Projection Light Cone */
  .zp-projection-beam {
    fill: url(#zp-beam-grad);
    animation: zp-beam-flicker 0.2s steps(2, end) infinite;
  }

  @keyframes zp-beam-flicker {
    0% { opacity: 0.35; }
    100% { opacity: 1; filter: drop-shadow(0 0 8px #ffd700); }
  }

  /* Projected galloping horse silhouette on distant screen */
  .zp-screen-anim {
    animation: zp-horse-stride 0.6s steps(4, end) infinite;
  }

  @keyframes zp-horse-stride {
    0% { transform: translateY(0); }
    25% { transform: translateY(-4px); }
    50% { transform: translateY(0); }
    75% { transform: translateY(2.5px); }
  }

  .zp-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 215, 0, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptZoopraxiscopeProjector extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${zoopraxiscopeStyles}</style>
      <div class="zp-box">
        <div class="zp-stage">
          <svg class="zp-svg" viewBox="0 0 76 72">
            <defs>
              <linearGradient id="zp-beam-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#ffd54f" stop-opacity="0.8" />
                <stop offset="100%" stop-color="#ff9100" stop-opacity="0.1" />
              </linearGradient>
            </defs>

            <!-- Lantern Housing Box & Chimney on Left -->
            <rect x="4" y="24" width="16" height="24" rx="1" fill="#212121" stroke="#ffb300" stroke-width="1" />
            <path d="M 8 24 L 12 16 L 16 16 L 16 24" fill="#37474f" stroke="#ffb300" stroke-width="0.8" />
            <circle cx="12" cy="36" r="3" fill="#ffffff" filter="drop-shadow(0 0 4px #ffd700)" />

            <!-- Rotating Transparent Glass Picture Disk -->
            <g class="zp-glass-disk">
              <circle cx="28" cy="36" r="18" fill="rgba(255, 215, 0, 0.08)" stroke="#ffd54f" stroke-width="0.8" />
              <!-- Sequential Painted Silhouette Figures on Disk -->
              <circle cx="28" cy="22" r="1.5" fill="#212121" />
              <circle cx="38" cy="26" r="1.5" fill="#212121" />
              <circle cx="42" cy="36" r="1.5" fill="#212121" />
              <circle cx="38" cy="46" r="1.5" fill="#212121" />
              <circle cx="28" cy="50" r="1.5" fill="#212121" />
              <circle cx="18" cy="46" r="1.5" fill="#212121" />
              <circle cx="14" cy="36" r="1.5" fill="#212121" />
              <circle cx="18" cy="26" r="1.5" fill="#212121" />
            </g>

            <!-- Counter-Rotating Slotted Metal Shutter Disk -->
            <g class="zp-shutter-disk">
              <circle cx="28" cy="36" r="19" fill="none" stroke="#ff9800" stroke-width="0.8" stroke-dasharray="8 6" />
            </g>

            <!-- Projection Lens Tube -->
            <rect x="32" y="32" width="6" height="8" fill="#424242" stroke="#ffb300" stroke-width="0.8" />

            <!-- Expanding Projection Light Cone Beam -->
            <polygon class="zp-projection-beam" points="38,36 72,16 72,56" />

            <!-- Distant Projection Screen Surface -->
            <line x1="72" y1="12" x2="72" y2="60" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />

            <!-- Projected Animated Silhouette on Screen -->
            <g transform="translate(68, 36)" class="zp-screen-anim">
              <polygon points="0,-4 3,-2 2,0 -2,0" fill="#212121" />
              <line x1="-1" y1="0" x2="-2" y2="4" stroke="#212121" stroke-width="1" />
              <line x1="1" y1="0" x2="2" y2="4" stroke="#212121" stroke-width="1" />
            </g>
          </svg>
        </div>
        <div class="zp-label">ZOOPRAXISCOPE</div>
      </div>
    `;
  }
}

customElements.define('concept-zoopraxiscope-projector', ConceptZoopraxiscopeProjector);
