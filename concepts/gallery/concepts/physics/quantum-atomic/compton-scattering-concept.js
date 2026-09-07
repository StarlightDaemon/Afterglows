const comptonStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #15121c 0%, #030205 100%);
    overflow: hidden;
  }

  .canvas-box {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .compton-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Incident high-frequency X-ray photon (short wavelength λ) */
  .wave-incident {
    fill: none;
    stroke: #00e5ff;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #00e5ff);
  }

  /* Stationary Target Electron */
  .target-electron {
    fill: #ffaa00;
    stroke: #ffffff;
    stroke-width: 0.8;
    filter: drop-shadow(0 0 4px #ffaa00);
  }

  /* Scattered longer-wavelength photon (λ' > λ) */
  .wave-scattered {
    fill: none;
    stroke: #ff5577;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 3px #ff5577);
  }

  /* Recoiling electron trajectory */
  .recoil-electron {
    stroke: #00ff66;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 4px #00ff66);
    stroke-dasharray: 2 2;
  }

  .angle-arc {
    fill: none;
    stroke: rgba(255, 255, 255, 0.4);
    stroke-width: 0.8;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-in { fill: #00e5ff; }
  .lbl-scat { fill: #ff5577; }
  .lbl-recoil { fill: #00ff66; }
  .lbl-theta { fill: #ffaa00; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(255, 85, 119, 0.9);
    z-index: 10;
  }

  /* Motion pass */
  /* Photon wavetrains propagate in and out; recoil electron kicks away */
  .wave-incident { stroke-dasharray: 6 3; animation: cmp-run 1.2s linear infinite; }
  .wave-scattered { stroke-dasharray: 6 3; animation: cmp-run 1.5s linear infinite; }
  .recoil-electron { animation: cmp-recoil 1.5s ease-in-out infinite alternate; }
  .angle-arc { animation: cmp-arc 2.2s ease-in-out infinite alternate; }
  @keyframes cmp-run { to { stroke-dashoffset: -18; } }
  @keyframes cmp-recoil { from { opacity: 0.6; } to { opacity: 1; filter: drop-shadow(0 0 4px currentColor); } }
  @keyframes cmp-arc { from { opacity: 0.5; } to { opacity: 0.95; } }

  /* Event choreography: incident photon flies in, scattered photon leaves at
     angle theta while the struck electron recoils along phi. */
  .ph-in { fill: #8ef2ff; filter: drop-shadow(0 0 5px #00e5ff); animation: cmp-ph-in 2.4s linear infinite; }
  .ph-out { fill: #ff9db1; filter: drop-shadow(0 0 5px #ff5577); animation: cmp-ph-out 2.4s linear infinite; }
  .e-out { fill: #9dffc4; filter: drop-shadow(0 0 5px #00ff66); animation: cmp-e-out 2.4s linear infinite; }

  @keyframes cmp-ph-in {
    0%   { transform: translate(12px, 65px); opacity: 0; }
    6%   { opacity: 1; }
    40%  { transform: translate(54px, 65px); opacity: 1; }
    42%, 100% { transform: translate(54px, 65px); opacity: 0; }
  }

  @keyframes cmp-ph-out {
    0%, 40% { transform: translate(55px, 65px); opacity: 0; }
    42%  { opacity: 1; }
    70%  { transform: translate(85px, 52px); }
    96%  { transform: translate(114px, 36px); opacity: 1; }
    100% { transform: translate(115px, 35px); opacity: 0; }
  }

  @keyframes cmp-e-out {
    0%, 40% { transform: translate(55px, 65px); opacity: 0; }
    42%  { opacity: 1; }
    96%  { transform: translate(104px, 99px); opacity: 1; }
    100% { transform: translate(105px, 100px); opacity: 0; }
  }

`;

class PhysicsComptonScattering extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${comptonStyles}</style>
      <div class="canvas-box">
        <svg class="compton-svg" viewBox="0 0 130 130">
          <!-- Central Collision Event (x=55, y=65) -->
          <circle cx="55" cy="65" r="3" class="target-electron" />

          <!-- Incident Short-Wavelength Photon (λ) -->
          <path d="M 12 65 Q 22 55 32 65 T 52 65" class="wave-incident" />
          <polygon points="53,65 48,62 48,68" fill="#00e5ff" />
          <text x="12" y="55" class="lbl lbl-in">INCIDENT λ</text>

          <!-- Scattered Photon at angle θ (λ' > λ) -->
          <path d="M 55 65 Q 70 45 85 55 T 115 35" class="wave-scattered" />
          <polygon points="116,35 110,36 113,41" fill="#ff5577" />
          <text x="82" y="25" class="lbl lbl-scat">SCATTERED λ'</text>

          <!-- Recoil Electron Path at angle φ -->
          <line x1="55" y1="65" x2="105" y2="100" class="recoil-electron" />
          <circle cx="105" cy="100" r="2.5" fill="#00ff66" />
          <text x="78" y="112" class="lbl lbl-recoil">RECOIL e⁻ (p_e)</text>

          <!-- Scattering Angle θ Arc -->
          <line x1="55" y1="65" x2="110" y2="65" stroke="rgba(255,255,255,0.2)" stroke-width="0.8" stroke-dasharray="2 2" />
          <path d="M 75 65 A 20 20 0 0 0 71 52" class="angle-arc" />
          <text x="78" y="56" class="lbl lbl-theta">θ</text>

          <!-- Scattering event particles -->
          <circle cx="0" cy="0" r="2.8" class="ph-in" />
          <circle cx="0" cy="0" r="2.8" class="ph-out" />
          <circle cx="0" cy="0" r="2.4" class="e-out" />
        </svg>

        <div class="hud">
          <span>λ' - λ = (h/m_e c)(1 - cos θ)</span>
          <span>λ_C = 2.426 pm</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-compton-scattering')) {
  customElements.define('physics-compton-scattering', PhysicsComptonScattering);
}
