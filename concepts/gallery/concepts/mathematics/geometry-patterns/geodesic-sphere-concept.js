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

  /* Rotating geodesic dome frame with accelerated smooth continuous spin */
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
    animation: gds-spin 3.6s linear infinite;
  }

  @keyframes gds-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .gds-strut {
    fill: none;
    stroke: #00ff66;
    stroke-width: 1.4;
    stroke-linecap: round;
    filter: drop-shadow(0 0 3px rgba(0, 255, 100, 0.6));
  }

  .gds-facets {
    fill: rgba(0, 255, 100, 0.12);
    stroke: rgba(255, 255, 255, 0.6);
    stroke-width: 1;
  }

  .gds-node {
    fill: #ffffff;
    filter: drop-shadow(0 0 4px #8cffaa);
  }

  /* Inner counter-rotating core hub */
  .gds-inner-hub {
    transform-origin: 38px 38px;
    animation: gds-core-rot 2.8s linear infinite reverse;
  }

  @keyframes gds-core-rot {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Traveling tensegrity strut stress spark packet */
  .gds-stress-spark {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00ff66, 0 0 14px #ffffff;
    z-index: 6;
    animation: gds-spark-circuit 2s linear infinite;
  }

  @keyframes gds-spark-circuit {
    0% { transform: rotate(0deg) translate(28px) rotate(0deg); }
    100% { transform: rotate(360deg) translate(28px) rotate(-360deg); }
  }

  /* Core equilibrium tensegrity pulse */
  .gds-core-pulse {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(0, 255, 100, 0.4) 60%, transparent 100%);
    animation: gds-pulse 1.8s ease-in-out infinite alternate;
  }

  @keyframes gds-pulse {
    0% { transform: scale(0.6); opacity: 0.5; }
    100% { transform: scale(1.5); opacity: 1; filter: drop-shadow(0 0 10px #00ff66); }
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
          <div class="gds-stress-spark"></div>

          <svg class="gds-svg" viewBox="0 0 76 76">
            <!-- Triangular geodesic tessellation faces -->
            <polygon class="gds-facets" points="38,8 64,22 64,54 38,68 12,54 12,22" />
            
            <!-- Internal icosahedron diagonal triangulation struts -->
            <line class="gds-strut" x1="38" y1="8" x2="64" y2="54" />
            <line class="gds-strut" x1="64" y1="22" x2="12" y2="54" />
            <line class="gds-strut" x1="64" y1="54" x2="12" y2="22" />
            <line class="gds-strut" x1="38" y1="68" x2="38" y2="8" />
            <line class="gds-strut" x1="12" y1="54" x2="64" y2="22" />

            <!-- Inner counter-rotating pentagonal hub -->
            <g class="gds-inner-hub">
              <polygon points="38,24 52,32 46,48 30,48 24,32" fill="rgba(0, 255, 100, 0.2)" stroke="#ffffff" stroke-width="1.2" />
              <line x1="38" y1="38" x2="38" y2="24" stroke="#00ff66" stroke-width="1" />
              <line x1="38" y1="38" x2="52" y2="32" stroke="#00ff66" stroke-width="1" />
              <line x1="38" y1="38" x2="46" y2="48" stroke="#00ff66" stroke-width="1" />
              <line x1="38" y1="38" x2="30" y2="48" stroke="#00ff66" stroke-width="1" />
              <line x1="38" y1="38" x2="24" y2="32" stroke="#00ff66" stroke-width="1" />
            </g>

            <!-- Joint node vertices -->
            <circle class="gds-node" cx="38" cy="8" r="2.8" />
            <circle class="gds-node" cx="64" cy="22" r="2.8" />
            <circle class="gds-node" cx="64" cy="54" r="2.8" />
            <circle class="gds-node" cx="38" cy="68" r="2.8" />
            <circle class="gds-node" cx="12" cy="54" r="2.8" />
            <circle class="gds-node" cx="12" cy="22" r="2.8" />
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
