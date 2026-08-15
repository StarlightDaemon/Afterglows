const geodesicStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .gds {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #031407 0%, #000401 100%);
    border: 1.5px solid rgba(0, 255, 100, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 255, 100, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Rotating geodesic dome frame */
  .gds-sphere-box {
    position: relative;
    width: 76px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .gds-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    animation: gds-spin 12s linear infinite;
  }

  @keyframes gds-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .gds-strut {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1.2;
    stroke-linecap: round;
    filter: drop-shadow(0 0 3px rgba(0, 255, 100, 0.6));
  }

  .gds-facets {
    fill: rgba(0, 255, 100, 0.06);
    stroke: rgba(255, 255, 255, 0.4);
    stroke-width: 0.8;
  }

  .gds-node {
    fill: #ffffff;
    filter: drop-shadow(0 0 4px #8cffaa);
  }

  /* Core equilibrium tensegrity pulse */
  .gds-core-pulse {
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(0, 255, 100, 0.3) 60%, transparent 100%);
    animation: gds-pulse 2.5s ease-in-out infinite alternate;
  }

  @keyframes gds-pulse {
    0% { transform: scale(0.7); opacity: 0.5; }
    100% { transform: scale(1.4); opacity: 1; filter: drop-shadow(0 0 8px #00ff66); }
  }

  .gds-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(140, 255, 170, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptGeodesicSphere extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${geodesicStyles}</style>
      <div class="gds">
        <div class="gds-sphere-box">
          <div class="gds-core-pulse"></div>

          <svg class="gds-svg" viewBox="0 0 76 76">
            <!-- Triangular geodesic tessellation faces -->
            <polygon class="gds-facets" points="38,8 64,22 64,54 38,68 12,54 12,22" />
            
            <!-- Internal icosahedron diagonal triangulation struts -->
            <line class="gds-strut" x1="38" y1="8" x2="64" y2="54" />
            <line class="gds-strut" x1="64" y1="22" x2="12" y2="54" />
            <line class="gds-strut" x1="64" y1="54" x2="12" y2="22" />
            <line class="gds-strut" x1="38" y1="68" x2="38" y2="8" />
            <line class="gds-strut" x1="12" y1="54" x2="64" y2="22" />

            <!-- Inner pentagonal hub -->
            <polygon points="38,24 52,32 46,48 30,48 24,32" fill="rgba(0, 255, 100, 0.12)" stroke="#ffffff" stroke-width="1" />

            <!-- Joint node vertices -->
            <circle class="gds-node" cx="38" cy="8" r="2.5" />
            <circle class="gds-node" cx="64" cy="22" r="2.5" />
            <circle class="gds-node" cx="64" cy="54" r="2.5" />
            <circle class="gds-node" cx="38" cy="68" r="2.5" />
            <circle class="gds-node" cx="12" cy="54" r="2.5" />
            <circle class="gds-node" cx="12" cy="22" r="2.5" />
          </svg>
        </div>

        <div class="gds-label">GEODESIC TENSEGRITY</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-geodesic-sphere')) {
  customElements.define('concept-geodesic-sphere', ConceptGeodesicSphere);
}
