const poulsenTelegraphoneStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pt-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151d28 0%, #03060a 100%);
    border: 1.5px solid rgba(33, 150, 243, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(33, 150, 243, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pt-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pt-svg {
    width: 76px;
    height: 72px;
  }

  /* Steel piano wire high-speed transit */
  .pt-steel-wire {
    animation: pt-wire-speed 0.8s linear infinite;
  }

  @keyframes pt-wire-speed {
    to { stroke-dashoffset: -16; }
  }

  /* Rotating brass supply and take-up reels */
  .pt-reel-left {
    transform-origin: 22px 36px;
    animation: pt-spin-reel 1.8s linear infinite;
  }

  .pt-reel-right {
    transform-origin: 54px 36px;
    animation: pt-spin-reel 1.8s linear infinite;
  }

  @keyframes pt-spin-reel {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Electromagnetic record/reproduce magnetic flux field */
  .pt-mag-flux {
    animation: pt-flux-pulse 0.4s ease-in-out infinite alternate;
  }

  @keyframes pt-flux-pulse {
    0% { opacity: 0.3; transform: scaleY(0.85); }
    100% { opacity: 1; transform: scaleY(1.15); filter: drop-shadow(0 0 3px #00e5ff); }
  }

  .pt-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(33, 150, 243, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPoulsenTelegraphone extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${poulsenTelegraphoneStyles}</style>
      <div class="pt-box">
        <div class="pt-stage">
          <svg class="pt-svg" viewBox="0 0 76 72">
            <!-- Cast Iron Base Chassis & Mounting Posts -->
            <rect x="10" y="54" width="56" height="5" rx="1" fill="#1e293b" stroke="#475569" stroke-width="0.8" />

            <!-- Left Supply Reel (Spoked Brass) -->
            <g class="pt-reel-left">
              <circle cx="22" cy="36" r="13" fill="#0f172a" stroke="#ffd700" stroke-width="1" />
              <circle cx="22" cy="36" r="5" fill="#334155" stroke="#ffd700" stroke-width="0.8" />
              <!-- Spokes -->
              <line x1="22" y1="23" x2="22" y2="49" stroke="#ffb300" stroke-width="0.6" />
              <line x1="9" y1="36" x2="35" y2="36" stroke="#ffb300" stroke-width="0.6" />
              <!-- Wound steel wire core -->
              <circle cx="22" cy="36" r="9" fill="none" stroke="#cfd8dc" stroke-width="2.5" />
            </g>

            <!-- Right Take-Up Reel (Spoked Brass) -->
            <g class="pt-reel-right">
              <circle cx="54" cy="36" r="13" fill="#0f172a" stroke="#ffd700" stroke-width="1" />
              <circle cx="54" cy="36" r="5" fill="#334155" stroke="#ffd700" stroke-width="0.8" />
              <!-- Spokes -->
              <line x1="54" y1="23" x2="54" y2="49" stroke="#ffb300" stroke-width="0.6" />
              <line x1="41" y1="36" x2="67" y2="36" stroke="#ffb300" stroke-width="0.6" />
              <!-- Wound steel wire core -->
              <circle cx="54" cy="36" r="9" fill="none" stroke="#cfd8dc" stroke-width="2.5" />
            </g>

            <!-- Fast-Moving Carbon Steel Piano Wire Span -->
            <line class="pt-steel-wire" x1="22" y1="23" x2="54" y2="23" stroke="#e0f7fa" stroke-width="1.2" stroke-dasharray="4 2" />

            <!-- Dual Electromagnet Recording Pole Heads (Straddling Wire) -->
            <!-- Top Pole (North) -->
            <rect x="36" y="14" width="4" height="7" rx="0.5" fill="#c62828" stroke="#ef5350" stroke-width="0.5" />
            <!-- Bottom Pole (South) -->
            <rect x="36" y="25" width="4" height="7" rx="0.5" fill="#1565c0" stroke="#42a5f5" stroke-width="0.5" />

            <!-- Electromagnetic Audio Magnetic Field Flux Glow -->
            <g class="pt-mag-flux">
              <ellipse cx="38" cy="23" rx="4" ry="2.5" fill="none" stroke="#00e5ff" stroke-width="1" />
              <line x1="38" y1="21" x2="38" y2="25" stroke="#ffffff" stroke-width="0.8" />
            </g>

            <!-- Guide Rollers & Wire Tensioners -->
            <circle cx="31" cy="24" r="1.5" fill="#cfd8dc" stroke="#607d8b" stroke-width="0.5" />
            <circle cx="45" cy="24" r="1.5" fill="#cfd8dc" stroke="#607d8b" stroke-width="0.5" />
          </svg>
        </div>
        <div class="pt-label">POULSEN TELEGRAPHONE</div>
      </div>
    `;
  }
}

customElements.define('concept-poulsen-telegraphone', ConceptPoulsenTelegraphone);
