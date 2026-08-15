const newtonRingsStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .nr-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #151828 0%, #03040c 100%);
    border: 1.5px solid rgba(0, 229, 255, 0.45);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.15);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nr-stage {
    position: relative;
    width: 90px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nr-svg {
    width: 76px;
    height: 72px;
  }

  /* Concentric Interference Fringe Rings expansion/contraction */
  .nr-rings circle {
    fill: none;
    stroke-linecap: round;
    animation: nr-fringe-breathe 3s ease-in-out infinite alternate;
  }

  .nr-rings circle:nth-child(1) { stroke: #ff1744; animation-delay: 0.2s; }
  .nr-rings circle:nth-child(2) { stroke: #ff9100; animation-delay: 0.4s; }
  .nr-rings circle:nth-child(3) { stroke: #ffd600; animation-delay: 0.6s; }
  .nr-rings circle:nth-child(4) { stroke: #00e676; animation-delay: 0.8s; }
  .nr-rings circle:nth-child(5) { stroke: #00e5ff; animation-delay: 1.0s; }
  .nr-rings circle:nth-child(6) { stroke: #d500f9; animation-delay: 1.2s; }

  @keyframes nr-fringe-breathe {
    0% { transform: scale(0.92); opacity: 0.6; }
    100% { transform: scale(1.08); opacity: 1; filter: drop-shadow(0 0 2px #00e5ff); }
  }

  /* Central Dark Spot of Zero Phase Difference */
  .nr-center-spot {
    fill: #000000;
    stroke: #37474f;
    stroke-width: 0.8;
  }

  .nr-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptNewtonRings extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${newtonRingsStyles}</style>
      <div class="nr-box">
        <div class="nr-stage">
          <svg class="nr-svg" viewBox="0 0 76 72">
            <!-- Optical Flat Glass Base Frame -->
            <rect x="8" y="8" width="60" height="56" rx="2" fill="rgba(0, 229, 255, 0.05)" stroke="rgba(0, 229, 255, 0.3)" stroke-width="1" />

            <!-- Circular Convex Lens Contact Boundary -->
            <circle cx="38" cy="36" r="28" fill="none" stroke="rgba(255, 255, 255, 0.2)" stroke-width="0.8" />

            <!-- Concentric Chromatic Interference Rings (Air film gap: lambda/2 fringes) -->
            <g class="nr-rings" style="transform-origin: 38px 36px;" stroke-width="1.2">
              <circle cx="38" cy="36" r="25" />
              <circle cx="38" cy="36" r="22" stroke-width="1.4" />
              <circle cx="38" cy="36" r="19" stroke-width="1.6" />
              <circle cx="38" cy="36" r="15" stroke-width="1.8" />
              <circle cx="38" cy="36" r="11" stroke-width="2.2" />
              <circle cx="38" cy="36" r="6.5" stroke-width="2.6" />
            </g>

            <!-- Central Destructive Interference Dark Spot -->
            <circle class="nr-center-spot" cx="38" cy="36" r="3.5" />

            <!-- Optical Axis Crosshairs -->
            <line x1="8" y1="36" x2="68" y2="36" stroke="rgba(0, 229, 255, 0.25)" stroke-width="0.5" stroke-dasharray="2 2" />
            <line x1="38" y1="8" x2="38" y2="64" stroke="rgba(0, 229, 255, 0.25)" stroke-width="0.5" stroke-dasharray="2 2" />
          </svg>
        </div>
        <div class="nr-label">NEWTON'S RINGS</div>
      </div>
    `;
  }
}

customElements.define('concept-newton-rings', ConceptNewtonRings);
