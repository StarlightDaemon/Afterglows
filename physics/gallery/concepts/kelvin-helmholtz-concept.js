const khStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0e1520 0%, #030408 100%);
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

  .kh-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Upper Fast Stream Layer (U1 > 0, to right) */
  .stream-upper {
    fill: rgba(0, 229, 255, 0.12);
  }

  /* Lower Slow Stream Layer (U2 < 0, to left) */
  .stream-lower {
    fill: rgba(255, 170, 0, 0.12);
  }

  /* Rolling Kelvin-Helmholtz Vortex Billow Waveform */
  .billow-wave {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 4px #00ff66);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-u1 { fill: #00e5ff; }
  .lbl-u2 { fill: #ffaa00; }
  .lbl-vort { fill: #00ff66; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(0, 255, 102, 0.85);
    z-index: 10;
  }

  /* Motion pass */
  /* Shear rolls the interface into billows */
  .billow-wave { stroke-dasharray: 7 4; animation: kh-roll 1.8s linear infinite; }
  .stream-upper { animation: kh-shimmer 2.6s ease-in-out infinite alternate; }
  .stream-lower { animation: kh-shimmer 2.6s ease-in-out infinite alternate-reverse; }
  @keyframes kh-roll { to { stroke-dashoffset: -22; } }
  @keyframes kh-shimmer { from { opacity: 0.75; } to { opacity: 1; } }

`;

class PhysicsKelvinHelmholtz extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${khStyles}</style>
      <div class="canvas-box">
        <svg class="kh-svg" viewBox="0 0 130 130">
          <!-- Upper Fast Stream U₁ → -->
          <rect x="10" y="20" width="110" height="40" class="stream-upper" />
          <text x="14" y="32" class="lbl lbl-u1">UPPER STREAM: U₁ → (ρ₁)</text>

          <!-- Lower Slow/Opposing Stream U₂ ← -->
          <rect x="10" y="70" width="110" height="40" class="stream-lower" />
          <text x="14" y="98" class="lbl lbl-u2">LOWER STREAM: ← U₂ (ρ₂)</text>

          <!-- Nonlinear Rolling Vortex Billows (Cat's Eye Pattern) -->
          <path d="
            M 10 65
            C 25 65, 30 45, 45 45
            C 55 45, 58 55, 52 65
            C 44 75, 36 68, 42 60
            C 46 54, 55 58, 65 65
            C 80 65, 85 45, 100 45
            C 110 45, 113 55, 107 65
            C 99 75, 91 68, 97 60
            C 101 54, 110 58, 120 65
          " class="billow-wave" />

          <!-- Vortex Core Indicators -->
          <circle cx="48" cy="58" r="2" fill="#00ff66" />
          <circle cx="103" cy="58" r="2" fill="#00ff66" />

          <text x="56" y="82" class="lbl lbl-vort">VORTEX BILLOWS</text>
          <text x="14" y="116" class="lbl" fill="rgba(255,255,255,0.6)">Ri &lt; 0.25 (UNSTABLE)</text>
        </svg>

        <div class="hud">
          <span>Richardson Number Ri &lt; ¼</span>
          <span>Kelvin-Helmholtz Shear</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-kelvin-helmholtz')) {
  customElements.define('physics-kelvin-helmholtz', PhysicsKelvinHelmholtz);
}
