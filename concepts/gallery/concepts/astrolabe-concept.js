const astrolabeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ast {
    width: 118px;
    height: 102px;
    position: relative;
    background: #020904;
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Top suspension shackle ring (throne & ring) */
  .ast-throne {
    position: absolute;
    top: 4px;
    width: 24px;
    height: 12px;
    border-radius: 12px 12px 0 0;
    border: 1.5px solid #d6ffe0;
    background: #011406;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
  }

  .ast-ring {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1.5px solid #ffffff;
    box-shadow: 0 0 4px #8cffaa;
  }

  /* Main Brass Mater & Limb */
  .ast-mater {
    position: relative;
    top: 6px;
    width: 78px;
    height: 78px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: #010c04;
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.3), 0 0 8px rgba(0, 204, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Climate plate with stereographic horizon curves (Tympan) */
  .ast-tympan-svg {
    position: absolute;
    inset: 4px;
    width: 70px;
    height: 70px;
    opacity: 0.65;
  }

  /* Rotating Rete openwork celestial star pointer frame */
  .ast-rete-rig {
    position: absolute;
    inset: 4px;
    width: 70px;
    height: 70px;
    animation: ast-rete-spin 20s linear infinite;
  }

  @keyframes ast-rete-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .ast-rete-svg {
    width: 70px;
    height: 70px;
    filter: drop-shadow(0 0 3px #8cffaa);
  }

  /* Star pointers on rete */
  .ast-star-node {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff;
  }
  .ast-star-node.s1 { top: 12px; left: 20px; }
  .ast-star-node.s2 { top: 16px; right: 22px; }
  .ast-star-node.s3 { bottom: 18px; left: 24px; }
  .ast-star-node.s4 { bottom: 14px; right: 20px; }

  /* Pivoting Alidade / Rule pointer */
  .ast-rule {
    position: absolute;
    top: 44px;
    left: 20px;
    width: 76px;
    height: 2px;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff;
    z-index: 6;
    animation: ast-rule-sweep 8s ease-in-out infinite alternate;
  }

  @keyframes ast-rule-sweep {
    0% { transform: rotate(-35deg); }
    100% { transform: rotate(65deg); }
  }

  /* Center horse wedge pin */
  .ast-pin {
    position: absolute;
    top: 41px;
    left: 55px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #8cffaa;
    z-index: 7;
  }

  /* Readout label */
  .ast-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptAstrolabe extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${astrolabeStyles}</style>
      <div class="ast">
        <div class="ast-throne">
          <div class="ast-ring"></div>
        </div>

        <div class="ast-mater">
          <!-- Stereographic horizon almucantars & azimuth arcs -->
          <svg class="ast-tympan-svg" viewBox="0 0 70 70">
            <circle cx="35" cy="35" r="32" stroke="#8cffaa" stroke-width="1" stroke-dasharray="2,2" fill="none" />
            <circle cx="35" cy="42" r="22" stroke="#8cffaa" stroke-width="1" stroke-dasharray="3,2" fill="none" />
            <circle cx="35" cy="48" r="14" stroke="#8cffaa" stroke-width="1" stroke-dasharray="2,2" fill="none" />
            <line x1="4" y1="35" x2="66" y2="35" stroke="rgba(140, 255, 170, 0.7)" stroke-width="1" />
            <line x1="35" y1="4" x2="35" y2="66" stroke="rgba(140, 255, 170, 0.7)" stroke-width="1" />
          </svg>

          <!-- Rotating Rete with eccentric ecliptic ring -->
          <div class="ast-rete-rig">
            <svg class="ast-rete-svg" viewBox="0 0 70 70">
              <!-- Off-center ecliptic ring circle -->
              <circle cx="35" cy="28" r="20" stroke="#d6ffe0" stroke-width="1.8" fill="none" />
              <!-- Fretwork vines connecting pointers -->
              <path d="M 12 35 Q 35 15 58 35" stroke="#8cffaa" stroke-width="1.2" fill="none" />
              <path d="M 20 48 Q 35 60 50 48" stroke="#8cffaa" stroke-width="1.2" fill="none" />
            </svg>
            <div class="ast-star-node s1"></div>
            <div class="ast-star-node s2"></div>
            <div class="ast-star-node s3"></div>
            <div class="ast-star-node s4"></div>
          </div>
        </div>

        <div class="ast-rule"></div>
        <div class="ast-pin"></div>

        <div class="ast-label">ASTROLABE LAT 36°N</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-astrolabe')) {
  customElements.define('concept-astrolabe', ConceptAstrolabe);
}
