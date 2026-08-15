const bohrStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0e1220 0%, #030408 100%);
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

  .bohr-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  /* Nucleus Proton */
  .nucleus {
    fill: #ff5577;
    filter: drop-shadow(0 0 6px #ff5577);
  }

  /* Quantized Bohr Orbit Rings (r_n = n² a₀) */
  .orbit-ring {
    fill: none;
    stroke: rgba(0, 229, 255, 0.35);
    stroke-width: 0.8;
    stroke-dasharray: 2 2;
  }

  /* Orbiting Electron */
  .electron {
    fill: #00e5ff;
    filter: drop-shadow(0 0 4px #00e5ff);
    animation: orbit-electron 3s linear infinite;
    transform-origin: 65px 65px;
  }

  /* Transition Photon Emission (n=3 -> n=2 Balmer H-alpha: Red) */
  .photon-emission {
    fill: none;
    stroke: #ff3344;
    stroke-width: 1.5;
    filter: drop-shadow(0 0 4px #ff3344);
    animation: shoot-photon 3s ease-out infinite;
  }

  .lbl {
    font-size: 5px;
    font-family: monospace;
    font-weight: bold;
  }

  .lbl-n { fill: #00e5ff; }
  .lbl-halpha { fill: #ff3344; }
  .lbl-nucleus { fill: #ff5577; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 5.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    z-index: 10;
  }

  @keyframes orbit-electron {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes shoot-photon {
    0% { transform: translate(0, 0); opacity: 0; }
    40% { opacity: 1; }
    100% { transform: translate(45px, -35px); opacity: 0; }
  }
`;

class PhysicsBohrAtom extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bohrStyles}</style>
      <div class="canvas-box">
        <svg class="bohr-svg" viewBox="0 0 130 130">
          <!-- Quantized Orbits n=1, 2, 3 -->
          <circle cx="65" cy="65" r="16" class="orbit-ring" />
          <circle cx="65" cy="65" r="32" class="orbit-ring" />
          <circle cx="65" cy="65" r="48" class="orbit-ring" />

          <!-- Nucleus +e -->
          <circle cx="65" cy="65" r="5" class="nucleus" />
          <text x="63" y="67" class="lbl lbl-nucleus" fill="#fff">+</text>

          <!-- Orbiting electron on n=2 -->
          <g class="electron">
            <circle cx="97" cy="65" r="2.5" />
          </g>

          <!-- Quantum Leap / Transition photon wave (n=3 -> n=2, Balmer 656nm) -->
          <g class="photon-emission">
            <path d="M 65 17 Q 75 10 85 20 T 100 15" />
            <polygon points="102,15 97,12 98,17" fill="#ff3344" />
          </g>

          <!-- Orbit level labels -->
          <text x="12" y="18" class="lbl lbl-n">n=3 (-1.51 eV)</text>
          <text x="12" y="26" class="lbl lbl-n">n=2 (-3.40 eV)</text>
          <text x="12" y="34" class="lbl lbl-n">n=1 (-13.6 eV)</text>

          <text x="76" y="22" class="lbl lbl-halpha">H-α (656 nm)</text>
        </svg>

        <div class="hud">
          <span>E_n = -13.6 eV / n²</span>
          <span>ΔE = hν = hc/λ</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-bohr-atom')) {
  customElements.define('physics-bohr-atom', PhysicsBohrAtom);
}
