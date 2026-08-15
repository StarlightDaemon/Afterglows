const chladniPlateStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .cp-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151a24 0%, #06080d 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.4);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cp-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cp-svg {
    width: 76px;
    height: 72px;
  }

  /* Violin bow drawing across edge of plate */
  .cp-bow {
    transform-origin: 12px 38px;
    animation: cp-bow-stroke 1.6s ease-in-out infinite alternate;
  }

  @keyframes cp-bow-stroke {
    0% { transform: translateY(-8px) rotate(-5deg); }
    100% { transform: translateY(8px) rotate(5deg); }
  }

  /* Resonance vibration shimmer */
  .cp-plate {
    transform-origin: 40px 36px;
    animation: cp-plate-vibrate 0.1s linear infinite alternate;
  }

  @keyframes cp-plate-vibrate {
    0% { transform: scale(0.99); }
    100% { transform: scale(1.01); }
  }

  /* Sand nodal lines shifting brightness and pulsation */
  .cp-nodal-lines {
    animation: cp-nodal-glow 1.6s ease-in-out infinite alternate;
  }

  @keyframes cp-nodal-glow {
    0% { opacity: 0.7; stroke: #80d8ff; }
    100% { opacity: 1; stroke: #ffffff; filter: drop-shadow(0 0 2px #00e5ff); }
  }

  .cp-sand-particles {
    animation: cp-sand-jitter 0.2s ease-in-out infinite alternate;
  }

  @keyframes cp-sand-jitter {
    0% { transform: translate(0, 0); }
    100% { transform: translate(0.3px, -0.3px); }
  }

  .cp-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptChladniPlate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${chladniPlateStyles}</style>
      <div class="cp-box">
        <div class="cp-stage">
          <svg class="cp-svg" viewBox="0 0 76 72">
            <!-- Heavy Cast Brass Center Support Stand -->
            <ellipse cx="40" cy="62" rx="14" ry="4" fill="#263238" stroke="#546e7a" stroke-width="0.8" />
            <rect x="38" y="44" width="4" height="18" fill="#37474f" stroke="#78909c" stroke-width="0.8" />
            <!-- Center Clamping Knob -->
            <circle cx="40" cy="36" r="3" fill="#ffd700" stroke="#ffb300" stroke-width="0.8" />

            <!-- Resonating Square Brass/Glass Plate -->
            <g class="cp-plate">
              <rect x="18" y="14" width="44" height="44" rx="1" fill="#1e293b" stroke="#00e5ff" stroke-width="1.2" />

              <!-- Geometric Chladni Nodal Lines (Harmonic Sand Curves) -->
              <g class="cp-nodal-lines" fill="none" stroke-width="1.2" stroke-linecap="round">
                <!-- Concentric hyperbolic nodal lines -->
                <path d="M 18 25 Q 31 31 31 14" />
                <path d="M 62 25 Q 49 31 49 14" />
                <path d="M 18 47 Q 31 41 31 58" />
                <path d="M 62 47 Q 49 41 49 58" />
                <!-- Central cross / diagonal nodal axes -->
                <circle cx="40" cy="36" r="8" stroke-dasharray="1 2" stroke-width="0.8" />
              </g>

              <!-- Lycopodium / Sand Granules at Nodes -->
              <g class="cp-sand-particles" fill="#ffffff" opacity="0.9">
                <circle cx="26" cy="20" r="0.6" />
                <circle cx="28" cy="24" r="0.7" />
                <circle cx="54" cy="20" r="0.6" />
                <circle cx="52" cy="24" r="0.7" />
                <circle cx="26" cy="52" r="0.6" />
                <circle cx="28" cy="48" r="0.7" />
                <circle cx="54" cy="52" r="0.6" />
                <circle cx="52" cy="48" r="0.7" />
                <circle cx="40" cy="28" r="0.5" />
                <circle cx="40" cy="44" r="0.5" />
                <circle cx="32" cy="36" r="0.5" />
                <circle cx="48" cy="36" r="0.5" />
              </g>
            </g>

            <!-- Horsehair Bow Excitation at Left Edge -->
            <g class="cp-bow">
              <!-- Bow stick (wood) -->
              <path d="M 8 20 Q 11 38 8 56" fill="none" stroke="#d7ccc8" stroke-width="1.2" />
              <!-- Horsehair strand rubbing plate rim -->
              <line x1="14" y1="22" x2="14" y2="54" stroke="#ffffff" stroke-width="0.8" stroke-dasharray="2 1" />
              <!-- Acoustic friction point glow -->
              <circle cx="18" cy="38" r="1.5" fill="#00e5ff" filter="drop-shadow(0 0 3px #00e5ff)" />
            </g>
          </svg>
        </div>
        <div class="cp-label">CHLADNI PLATE</div>
      </div>
    `;
  }
}

customElements.define('concept-chladni-plate', ConceptChladniPlate);
