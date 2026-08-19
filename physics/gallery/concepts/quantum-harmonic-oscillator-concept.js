const qhoStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0d1815 0%, #020605 100%);
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

  .qho-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Parabolic Potential V(x) = 1/2 m ω² x² */
  .parabola {
    fill: none;
    stroke: rgba(0, 229, 255, 0.4);
    stroke-width: 1.2;
    stroke-dasharray: 2 2;
  }

  /* Discrete Energy Levels E_n = (n + 1/2) ℏω */
  .energy-line {
    stroke: rgba(255, 255, 255, 0.25);
    stroke-width: 0.8;
  }

  /* Wavefunction Probability Densities |ψ_n(x)|² */
  .psi-0 {
    fill: rgba(0, 255, 102, 0.15);
    stroke: #00ff66;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px #00ff66);
  }

  .psi-1 {
    fill: none;
    stroke: #ffaa00;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px #ffaa00);
  }

  .psi-2 {
    fill: none;
    stroke: #ff5577;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 3px #ff5577);
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-e0 { fill: #00ff66; }
  .lbl-e1 { fill: #ffaa00; }
  .lbl-e2 { fill: #ff5577; }
  .lbl-pot { fill: #00e5ff; }

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
  /* Stationary states carry e^{-iE_n t/hbar} phase: levels shimmer in turn */
  .psi-0 { animation: qho-phase 3.6s ease-in-out infinite; }
  .psi-1 { animation: qho-phase 3.6s ease-in-out infinite; animation-delay: -1.2s; }
  .psi-2 { animation: qho-phase 3.6s ease-in-out infinite; animation-delay: -2.4s; }
  .psi-0, .psi-1, .psi-2 { transform-box: fill-box; transform-origin: center; }
  .energy-line { animation: qho-level 2.8s ease-in-out infinite alternate; }
  @keyframes qho-phase {
    0%, 100% { opacity: 0.25; stroke-width: 1.2; transform: scaleY(0.85); }
    50% { opacity: 1; stroke-width: 3; transform: scaleY(1.15); filter: drop-shadow(0 0 5px currentColor); }
  }
  @keyframes qho-level { from { opacity: 0.35; stroke-width: 1; } to { opacity: 1; stroke-width: 2.2; } }

  /* Coherent-state wave packet sloshing between the classical turning points
     of the n=2 level. */
  .coherent-packet {
    fill: #ffffff;
    filter: drop-shadow(0 0 5px #00ff66);
    animation: qho-slosh 1.7s ease-in-out infinite alternate;
  }

  @keyframes qho-slosh {
    0% { transform: translate(33px, 45px); }
    100% { transform: translate(97px, 45px); }
  }

`;

class PhysicsQuantumHarmonicOscillator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${qhoStyles}</style>
      <div class="canvas-box">
        <svg class="qho-svg" viewBox="0 0 130 130">
          <!-- Parabolic Potential Well -->
          <path d="M 20 25 Q 65 125 110 25" class="parabola" />
          <text x="76" y="24" class="lbl lbl-pot">V(x) = ½mω²x²</text>

          <!-- Level n=2: E₂ = 5/2 ℏω -->
          <line x1="32" y1="45" x2="98" y2="45" class="energy-line" />
          <path d="M 32 45 Q 42 33 50 45 Q 58 57 65 45 Q 72 33 80 45 Q 88 57 98 45" class="psi-2" />
          <text x="14" y="47" class="lbl lbl-e2">n=2 (⁵⁄₂ℏω)</text>

          <!-- Level n=1: E₁ = 3/2 ℏω -->
          <line x1="42" y1="70" x2="88" y2="70" class="energy-line" />
          <path d="M 42 70 Q 52 58 65 70 Q 78 82 88 70" class="psi-1" />
          <text x="14" y="72" class="lbl lbl-e1">n=1 (³⁄₂ℏω)</text>

          <!-- Level n=0: E₀ = 1/2 ℏω (Zero-Point Energy) -->
          <line x1="50" y1="95" x2="80" y2="95" class="energy-line" />
          <path d="M 50 95 Q 65 80 80 95" class="psi-0" />
          <text x="14" y="97" class="lbl lbl-e0">n=0 (½ℏω)</text>

          <!-- Coherent wave packet on the n=2 level -->
          <circle cx="0" cy="0" r="3" class="coherent-packet" />
        </svg>

        <div class="hud">
          <span>E_n = (n + ½)ℏω</span>
          <span>Zero-Point E₀ = ½ℏω</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-quantum-harmonic-oscillator')) {
  customElements.define('physics-quantum-harmonic-oscillator', PhysicsQuantumHarmonicOscillator);
}
