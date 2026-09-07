const brownianStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #121408 0%, #050602 100%);
    overflow: hidden;
  }

  .micro-cell {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Microscopic reticle frame */
  .cell-boundary {
    position: absolute;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    border: 1px solid rgba(255, 204, 0, 0.35);
    box-shadow: inset 0 0 12px rgba(255, 204, 0, 0.1);
  }

  /* Jagged random walk track SVG */
  .track-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .walk-line {
    fill: none;
    stroke: rgba(255, 204, 0, 0.4);
    stroke-width: 1;
    stroke-dasharray: 2 2;
  }

  /* Fast thermal solvent molecules */
  .solvent-molecule {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #00ffcc;
    box-shadow: 0 0 4px #00ffcc;
  }

  .m1 { top: 40px; left: 45px; animation: jitter-1 0.4s infinite alternate; }
  .m2 { top: 75px; left: 80px; animation: jitter-2 0.35s infinite alternate; }
  .m3 { top: 55px; left: 70px; animation: jitter-3 0.5s infinite alternate; }
  .m4 { top: 85px; left: 40px; animation: jitter-1 0.3s infinite alternate; }
  .m5 { top: 35px; left: 75px; animation: jitter-2 0.45s infinite alternate; }

  /* Large Colloidal Particle in random walk */
  .colloid-node {
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff, #ffaa00 60%, #663300 100%);
    box-shadow: 0 0 10px #ffaa00, 0 0 16px rgba(255, 170, 0, 0.6);
    z-index: 6;
    animation: random-walk 4.8s steps(8, end) infinite;
  }

  .hud {
    position: absolute;
    bottom: 4px;
    left: 6px;
    right: 6px;
    display: flex;
    justify-content: space-between;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 204, 0, 0.8);
    z-index: 10;
  }

  @keyframes random-walk {
    0% { transform: translate(-10px, -15px); }
    12% { transform: translate(12px, -8px); }
    25% { transform: translate(5px, 16px); }
    37% { transform: translate(-16px, 10px); }
    50% { transform: translate(-6px, -4px); }
    62% { transform: translate(18px, 12px); }
    75% { transform: translate(8px, -18px); }
    87% { transform: translate(-14px, -6px); }
    100% { transform: translate(-10px, -15px); }
  }

  @keyframes jitter-1 {
    0% { transform: translate(0, 0); }
    100% { transform: translate(6px, -8px); }
  }

  @keyframes jitter-2 {
    0% { transform: translate(0, 0); }
    100% { transform: translate(-8px, 6px); }
  }

  @keyframes jitter-3 {
    0% { transform: translate(0, 0); }
    100% { transform: translate(7px, 7px); }
  }
`;

class PhysicsBrownianMotion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${brownianStyles}</style>
      <div class="micro-cell">
        <div class="cell-boundary"></div>

        <svg class="track-svg" viewBox="0 0 130 130">
          <polyline class="walk-line" points="55,50 77,57 70,81 49,75 59,61 83,77 73,47 51,59 55,50" />
        </svg>

        <div class="solvent-molecule m1"></div>
        <div class="solvent-molecule m2"></div>
        <div class="solvent-molecule m3"></div>
        <div class="solvent-molecule m4"></div>
        <div class="solvent-molecule m5"></div>

        <div class="colloid-node"></div>

        <div class="hud">
          <span>BROWNIAN RANDOM WALK</span>
          <span>⟨r²⟩ = 4Dt</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-brownian-motion')) {
  customElements.define('physics-brownian-motion', PhysicsBrownianMotion);
}
