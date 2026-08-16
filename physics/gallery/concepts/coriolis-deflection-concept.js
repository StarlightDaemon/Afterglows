const coriolisStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #0c181c 0%, #03080a 100%);
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

  /* Rotating coordinate disk */
  .globe-frame {
    position: absolute;
    width: 102px;
    height: 102px;
    border-radius: 50%;
    border: 1.5px solid rgba(0, 229, 255, 0.4);
    background: radial-gradient(circle, rgba(0, 40, 50, 0.4) 0%, transparent 80%);
    box-shadow: 0 0 12px rgba(0, 229, 255, 0.2);
  }

  .spin-indicator {
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    border: 1px dashed rgba(0, 229, 255, 0.4);
    animation: rotate-globe 6s linear infinite;
  }

  /* Orbiting surface markers: the bare dashed ring is rotationally
     near-symmetric, so its rotation rendered as a no-op without them */
  .spin-indicator::before,
  .spin-indicator::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00e5ff;
    box-shadow: 0 0 6px #00e5ff;
  }

  .spin-indicator::before {
    top: -3px;
    left: 50%;
    margin-left: -3px;
  }

  .spin-indicator::after {
    bottom: -3px;
    left: 50%;
    margin-left: -3px;
    opacity: 0.55;
  }

  .pole-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffcc00;
    box-shadow: 0 0 6px #ffcc00;
  }

  /* Trajectory vectors SVG */
  .vector-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
  }

  /* Inertial path (straight dashed) */
  .path-inertial {
    fill: none;
    stroke: rgba(255, 255, 255, 0.35);
    stroke-width: 1.2;
    stroke-dasharray: 2 3;
  }

  /* Rotating frame deflected path */
  .path-deflected {
    fill: none;
    stroke: #00ff66;
    stroke-width: 2;
    filter: drop-shadow(0 0 4px rgba(0, 255, 102, 0.6));
  }

  /* Cyclone streamlines */
  .streamline {
    fill: none;
    stroke: rgba(0, 229, 255, 0.35);
    stroke-width: 1;
  }

  /* Moving projectile packet */
  .projectile-packet {
    position: absolute;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff, #00ff66 60%, #004415 100%);
    box-shadow: 0 0 8px #00ff66;
    offset-path: path("M 65 110 C 65 85, 78 60, 102 38");
    animation: travel-coriolis 2.8s cubic-bezier(0.3, 0, 0.7, 1) infinite;
    z-index: 8;
  }

  /* Coriolis Force Vector Arrow attached to packet */
  .vec-f-coriolis {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 12px;
    height: 2px;
    background: #ffaa00;
    transform: rotate(45deg);
    transform-origin: left center;
    box-shadow: 0 0 4px #ffaa00;
  }

  .vec-f-coriolis::after {
    content: '';
    position: absolute;
    right: 0;
    top: -2px;
    border: 2.5px solid transparent;
    border-left-color: #ffaa00;
  }

  .legend {
    position: absolute;
    top: 6px;
    right: 6px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: 5.5px;
    font-family: monospace;
    text-align: right;
  }

  .leg-def { color: #00ff66; }
  .leg-inr { color: #aaa; }

  .hud {
    position: absolute;
    bottom: 3px;
    left: 4px;
    right: 4px;
    display: flex;
    justify-content: space-between;
    font-size: 6px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    z-index: 10;
  }

  @keyframes rotate-globe {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes travel-coriolis {
    0% { offset-distance: 0%; opacity: 0; }
    10% { opacity: 1; }
    85% { offset-distance: 100%; opacity: 1; }
    95%, 100% { offset-distance: 100%; opacity: 0; }
  }
`;

class PhysicsCoriolisDeflection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${coriolisStyles}</style>
      <div class="canvas-box">
        <div class="globe-frame">
          <div class="spin-indicator"></div>
          <div class="pole-center"></div>
        </div>

        <svg class="vector-svg" viewBox="0 0 130 130">
          <!-- Inertial Straight Track -->
          <line x1="65" y1="110" x2="65" y2="20" class="path-inertial" />
          <!-- Deflected Trajectory -->
          <path d="M 65 110 C 65 85, 78 60, 102 38" class="path-deflected" />
          <!-- Concentric Isobars -->
          <circle cx="65" cy="65" r="24" class="streamline" stroke-dasharray="3 3" />
          <circle cx="65" cy="65" r="38" class="streamline" stroke-dasharray="4 4" />
        </svg>

        <div class="projectile-packet">
          <div class="vec-f-coriolis"></div>
        </div>

        <div class="legend">
          <span class="leg-def">── Deflected (Rotating Frame)</span>
          <span class="leg-inr">┄┄ Inertial Path</span>
        </div>

        <div class="hud">
          <span>a_cor = -2(ω × v)</span>
          <span>f = 2Ω sin φ</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('physics-coriolis-deflection')) {
  customElements.define('physics-coriolis-deflection', PhysicsCoriolisDeflection);
}
