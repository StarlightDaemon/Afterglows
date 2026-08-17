const striderStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .wst {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #031407 0%, #000401 100%);
    border: 1.5px solid rgba(0, 204, 0, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Pond water surface plane */
  .wst-pond {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 50%, rgba(140, 255, 170, 0.12), transparent 75%);
  }

  /* Water Strider insect body rig */
  .wst-body-rig {
    position: relative;
    width: 82px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: wst-rowing-stride 1.8s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
  }

  @keyframes wst-rowing-stride {
    0% { transform: translate(-14px, -6px) scale(0.92); }
    30% { transform: translate(16px, 8px) scale(1.08); } /* Power rowing stroke! */
    70% { transform: translate(10px, 4px) scale(1); }
    100% { transform: translate(-14px, -6px) scale(0.92); }
  }

  /* Slender elongated insect body */
  .wst-insect-torso {
    position: relative;
    width: 8px;
    height: 28px;
    background: linear-gradient(180deg, #ffffff, #008818 60%, #011405 100%);
    border: 1.5px solid #d6ffe0;
    border-radius: 4px;
    box-shadow: 0 0 6px #8cffaa;
    z-index: 5;
  }

  /* 6 Elongated hydrophobic leg linkages SVG */
  .wst-legs-svg {
    position: absolute;
    inset: 0;
    width: 82px;
    height: 64px;
    filter: drop-shadow(0 0 2px #8cffaa);
    animation: wst-leg-oar 1.8s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
  }

  @keyframes wst-leg-oar {
    0%, 100% { transform: rotate(0deg); }
    30% { transform: rotate(-18deg) scaleY(1.2); }
  }

  /* Surface tension meniscus depression dimple circles under foot tarsi */
  .wst-dimple {
    position: absolute;
    border-radius: 50%;
    border: 1.5px solid rgba(255, 255, 255, 0.8);
    background: radial-gradient(circle, rgba(214, 255, 224, 0.35), transparent 70%);
    box-shadow: 0 0 6px #8cffaa;
    animation: wst-dimple-breathe 1.8s ease-in-out infinite;
  }

  .wst-dimple.d1 { top: 4px; left: 6px; width: 14px; height: 14px; }
  .wst-dimple.d2 { top: 4px; right: 6px; width: 14px; height: 14px; }
  .wst-dimple.d3 { top: 26px; left: 2px; width: 18px; height: 18px; }
  .wst-dimple.d4 { top: 26px; right: 2px; width: 18px; height: 18px; }
  .wst-dimple.d5 { bottom: 4px; left: 10px; width: 16px; height: 16px; }
  .wst-dimple.d6 { bottom: 4px; right: 10px; width: 16px; height: 16px; }

  @keyframes wst-dimple-breathe {
    0%, 100% { transform: scale(0.85); opacity: 0.6; }
    30% { transform: scale(1.4); opacity: 1; filter: drop-shadow(0 0 10px #ffffff); }
  }

  /* Surface tension caption */
  .wst-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptWaterStrider extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${striderStyles}</style>
      <div class="wst">
        <div class="wst-pond"></div>

        <div class="wst-body-rig">
          <!-- 6 Surface tension meniscus depression dimples -->
          <div class="wst-dimple d1"></div>
          <div class="wst-dimple d2"></div>
          <div class="wst-dimple d3"></div>
          <div class="wst-dimple d4"></div>
          <div class="wst-dimple d5"></div>
          <div class="wst-dimple d6"></div>

          <svg class="wst-legs-svg" viewBox="0 0 82 64">
            <!-- Front short legs -->
            <polyline points="38,24 24,14 13,11" stroke="#d6ffe0" stroke-width="1.2" fill="none" />
            <polyline points="44,24 58,14 69,11" stroke="#d6ffe0" stroke-width="1.2" fill="none" />

            <!-- Middle long rowing legs -->
            <polyline points="38,32 20,32 11,35" stroke="#ffffff" stroke-width="1.8" fill="none" />
            <polyline points="44,32 62,32 71,35" stroke="#ffffff" stroke-width="1.8" fill="none" />

            <!-- Hind steering legs -->
            <polyline points="38,40 26,50 18,56" stroke="#d6ffe0" stroke-width="1.2" fill="none" />
            <polyline points="44,40 56,50 64,56" stroke="#d6ffe0" stroke-width="1.2" fill="none" />
          </svg>

          <div class="wst-insect-torso"></div>
        </div>

        <div class="wst-label">SURFACE TENSION γ=72 mN/m</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-water-strider')) {
  customElements.define('concept-water-strider', ConceptWaterStrider);
}
