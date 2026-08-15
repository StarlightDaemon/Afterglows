const siphonophoreStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sph {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 30%, #011406 0%, #000401 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Deep abyss current drift */
  .sph-current {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 30, 8, 0.2) 0%, rgba(0, 10, 3, 0.8) 100%);
  }

  /* Siphonophore colonial chain rig */
  .sph-colony-rig {
    position: relative;
    width: 70px;
    height: 84px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: sph-abyssal-undulate 5s ease-in-out infinite alternate;
  }

  @keyframes sph-abyssal-undulate {
    0% { transform: translateY(-3px) rotate(-2deg); }
    100% { transform: translateY(3px) rotate(2deg); }
  }

  /* Apical pneumatophore gas float bell */
  .sph-float {
    width: 14px;
    height: 12px;
    border-radius: 50% 50% 30% 30%;
    background: radial-gradient(circle at 40% 30%, #ffffff 0%, #8cffaa 45%, #006611 100%);
    border: 1.5px solid #ffffff;
    box-shadow: 0 0 8px #8cffaa, 0 0 14px #ffffff;
    z-index: 5;
  }

  /* Nectosome swimming bells column */
  .sph-nectosome {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2px;
    z-index: 4;
  }

  .sph-bell {
    width: 18px;
    height: 8px;
    border-radius: 50% 50% 20% 20%;
    background: rgba(140, 255, 170, 0.6);
    border: 1px solid #ffffff;
    box-shadow: 0 0 6px #8cffaa;
    margin: 1px 0;
  }

  .sph-bell.b1 { animation: sph-pulse 1.2s ease-in-out infinite; animation-delay: 0s; }
  .sph-bell.b2 { animation: sph-pulse 1.2s ease-in-out infinite; animation-delay: 0.2s; }
  .sph-bell.b3 { animation: sph-pulse 1.2s ease-in-out infinite; animation-delay: 0.4s; }

  @keyframes sph-pulse {
    0%, 100% { transform: scaleX(0.85) scaleY(0.9); opacity: 0.7; }
    50% { transform: scaleX(1.15) scaleY(1.1); opacity: 1; filter: drop-shadow(0 0 6px #ffffff); }
  }

  /* Siphosome stem with specialized zooids & trailing tentilla */
  .sph-siphosome-svg {
    width: 70px;
    height: 48px;
    filter: drop-shadow(0 0 3px #8cffaa);
    animation: sph-tentilla-sway 3s ease-in-out infinite alternate;
  }

  @keyframes sph-tentilla-sway {
    0% { transform: skewX(-4deg); }
    100% { transform: skewX(4deg); }
  }

  /* Luminous zooid bioluminescent nodes */
  .sph-zooid-node {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff;
    animation: sph-zooid-sparkle 2s ease-in-out infinite alternate;
  }

  .sph-zooid-node.z1 { top: 40px; left: 30px; animation-delay: 0.1s; }
  .sph-zooid-node.z2 { top: 48px; right: 30px; animation-delay: 0.6s; }
  .sph-zooid-node.z3 { top: 58px; left: 32px; animation-delay: 1.1s; }

  @keyframes sph-zooid-sparkle {
    0% { opacity: 0.3; transform: scale(0.6); }
    100% { opacity: 1; transform: scale(1.4); }
  }

  /* Caption */
  .sph-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptSiphonophore extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${siphonophoreStyles}</style>
      <div class="sph">
        <div class="sph-current"></div>

        <div class="sph-colony-rig">
          <div class="sph-float"></div>

          <div class="sph-nectosome">
            <div class="sph-bell b1"></div>
            <div class="sph-bell b2"></div>
            <div class="sph-bell b3"></div>
          </div>

          <svg class="sph-siphosome-svg" viewBox="0 0 70 48">
            <!-- Central stem cord -->
            <path d="M 35 0 C 33 16 37 32 35 48" stroke="#d6ffe0" stroke-width="1.8" fill="none" />
            <!-- Trailing tentilla tentacles -->
            <path d="M 35 12 Q 20 28 24 46" stroke="#8cffaa" stroke-width="1" stroke-dasharray="2,2" fill="none" />
            <path d="M 35 22 Q 50 36 44 48" stroke="#8cffaa" stroke-width="1" stroke-dasharray="2,2" fill="none" />
            <path d="M 35 32 Q 22 40 28 48" stroke="#8cffaa" stroke-width="1" stroke-dasharray="2,2" fill="none" />
          </svg>

          <div class="sph-zooid-node z1"></div>
          <div class="sph-zooid-node z2"></div>
          <div class="sph-zooid-node z3"></div>
        </div>

        <div class="sph-label">PELAGIC SIPHONOPHORE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-siphonophore')) {
  customElements.define('concept-siphonophore', ConceptSiphonophore);
}
