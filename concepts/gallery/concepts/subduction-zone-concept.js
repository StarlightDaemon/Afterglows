const subductionStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sz-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 70% 60%, #211208 0%, #080301 100%);
    border: 1.5px solid rgba(255, 138, 101, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(255, 138, 101, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sz-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sz-svg {
    width: 76px;
    height: 72px;
  }

  /* Oceanic slab subduction descent conveyor */
  .sz-slab-motion {
    stroke-dasharray: 4 3;
    animation: sz-subduct 2s linear infinite;
  }

  @keyframes sz-subduct {
    to { stroke-dashoffset: 14; }
  }

  /* Dewatering volatile fluid bubbles rising from slab */
  .sz-fluids circle {
    fill: #80d8ff;
    animation: sz-fluid-rise 2s ease-in infinite;
  }

  .sz-fluids circle:nth-child(2) { animation-delay: 0.7s; }
  .sz-fluids circle:nth-child(3) { animation-delay: 1.4s; }

  @keyframes sz-fluid-rise {
    0% { transform: translateY(0) scale(0.6); opacity: 0.2; }
    50% { opacity: 1; }
    100% { transform: translateY(-16px) scale(1.2); opacity: 0; }
  }

  /* Magma diapir ascent to volcanic arc chamber */
  .sz-magma-plume {
    stroke: #ff3d00;
    stroke-dasharray: 3 3;
    animation: sz-magma-rise 1.5s linear infinite;
  }

  @keyframes sz-magma-rise {
    to { stroke-dashoffset: -12; }
  }

  /* Volcanic caldera pulse */
  .sz-volcano-glow {
    fill: #ff6e40;
    animation: sz-eruption-pulse 2s ease-in-out infinite alternate;
  }

  @keyframes sz-eruption-pulse {
    0% { opacity: 0.5; filter: drop-shadow(0 0 2px #d84315); }
    100% { opacity: 1; filter: drop-shadow(0 0 8px #ff3d00); }
  }

  .sz-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(255, 138, 101, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptSubductionZone extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${subductionStyles}</style>
      <div class="sz-box">
        <div class="sz-stage">
          <svg class="sz-svg" viewBox="0 0 76 72">
            <!-- Asthenosphere Mantle Bed (Orange heat gradient) -->
            <rect x="8" y="44" width="60" height="22" fill="#2d1508" stroke="rgba(255, 61, 0, 0.3)" stroke-width="0.8" />

            <!-- Subducting Oceanic Lithospheric Plate (Descending slab from left to deep right) -->
            <path d="M 8 36 L 28 36 L 56 64 L 46 64 L 22 40 L 8 40 Z" fill="#37474f" stroke="#78909c" stroke-width="1" />
            <!-- Plate motion markers -->
            <path class="sz-slab-motion" d="M 12 38 L 26 38 L 50 62" fill="none" stroke="#90a4ae" stroke-width="1.2" />

            <!-- Ocean Deep Trench (Above bend) -->
            <path d="M 8 32 L 28 32 L 32 36 L 28 36 L 8 36 Z" fill="#01579b" opacity="0.6" />

            <!-- Overriding Continental Plate with Volcanic Arc Mountain -->
            <path d="M 32 36 L 42 22 L 46 22 L 56 36 L 68 36 L 68 54 L 56 54 L 38 36 Z" fill="#4e342e" stroke="#8d6e63" stroke-width="1" />

            <!-- Magma Chamber below Arc Volcano -->
            <ellipse class="sz-volcano-glow" cx="44" cy="38" rx="6" ry="4" />
            <polygon class="sz-volcano-glow" points="42,22 46,22 44,18" />

            <!-- Rising Magma Diapirs from Dewatering Zone -->
            <line x1="42" y1="52" x2="44" y2="40" class="sz-magma-plume" stroke-width="1.5" />

            <!-- Dewatering Volatiles (H2O escaping slab into mantle wedge) -->
            <g class="sz-fluids">
              <circle cx="38" cy="52" r="1.2" />
              <circle cx="44" cy="56" r="1.2" />
              <circle cx="36" cy="48" r="1" />
            </g>
          </svg>
        </div>
        <div class="sz-label">SUBDUCTION ZONE</div>
      </div>
    `;
  }
}

customElements.define('concept-subduction-zone', ConceptSubductionZone);
