const matterSynthStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .syn {
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

  /* Replicator chamber containment field */
  .syn-chamber {
    position: relative;
    width: 82px;
    height: 82px;
    background: #011206;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 4px;
    box-shadow: inset 0 0 14px rgba(0, 204, 0, 0.3), 0 0 8px rgba(0, 204, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* 4 Corner laser emitter nodes */
  .syn-emitter {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #ffffff;
    border: 1px solid var(--accent, #00cc00);
    border-radius: 2px;
    box-shadow: 0 0 8px #8cffaa;
    z-index: 5;
  }
  .syn-emitter.e1 { top: 2px; left: 2px; }
  .syn-emitter.e2 { top: 2px; right: 2px; }
  .syn-emitter.e3 { bottom: 2px; left: 2px; }
  .syn-emitter.e4 { bottom: 2px; right: 2px; }

  /* Intersecting molecular confinement laser beams */
  .syn-beam-svg {
    position: absolute;
    inset: 0;
    width: 82px;
    height: 82px;
    pointer-events: none;
  }

  /* Materializing object: voxel wireframe to solid cube transition */
  .syn-object-rig {
    position: relative;
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: syn-materialize 4s ease-in-out infinite alternate;
  }

  @keyframes syn-materialize {
    0% {
      transform: scale(0.3) rotate(0deg);
      opacity: 0.2;
      filter: blur(2px) drop-shadow(0 0 4px #8cffaa);
    }
    45% {
      transform: scale(0.85) rotate(45deg);
      opacity: 0.8;
      filter: blur(0.5px) drop-shadow(0 0 12px #ffffff);
    }
    100% {
      transform: scale(1) rotate(90deg);
      opacity: 1;
      filter: blur(0px) drop-shadow(0 0 16px #8cffaa);
    }
  }

  /* Polyhedral crystal mesh */
  .syn-solid-mesh {
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, #d6ffe0 0%, #00aa22 60%, #012208 100%);
    border: 1.5px solid #ffffff;
    box-shadow: 0 0 12px #8cffaa;
    transform: rotate(45deg);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .syn-solid-mesh::after {
    content: '';
    width: 16px;
    height: 16px;
    border: 1px solid #ffffff;
    background: rgba(255, 255, 255, 0.4);
  }

  /* Energy matrix crystallization scan lines */
  .syn-scanline {
    position: absolute;
    width: 100%;
    height: 2px;
    background: #ffffff;
    box-shadow: 0 0 6px #ffffff;
    animation: syn-scan 2s linear infinite;
  }

  @keyframes syn-scan {
    0% { top: 0; opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }

  /* Synthesis status readout */
  .syn-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptMatterSynthesizer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${matterSynthStyles}</style>
      <div class="syn">
        <div class="syn-chamber">
          <div class="syn-emitter e1"></div>
          <div class="syn-emitter e2"></div>
          <div class="syn-emitter e3"></div>
          <div class="syn-emitter e4"></div>

          <svg class="syn-beam-svg" viewBox="0 0 82 82">
            <line x1="6" y1="6" x2="76" y2="76" stroke="rgba(214, 255, 224, 0.7)" stroke-width="1.2" stroke-dasharray="2,2" />
            <line x1="76" y1="6" x2="6" y2="76" stroke="rgba(214, 255, 224, 0.7)" stroke-width="1.2" stroke-dasharray="2,2" />
            <line x1="41" y1="4" x2="41" y2="78" stroke="rgba(140, 255, 170, 0.5)" stroke-width="1" stroke-dasharray="3,3" />
            <line x1="4" y1="41" x2="78" y2="41" stroke="rgba(140, 255, 170, 0.5)" stroke-width="1" stroke-dasharray="3,3" />
          </svg>

          <div class="syn-scanline"></div>

          <div class="syn-object-rig">
            <div class="syn-solid-mesh"></div>
          </div>
        </div>

        <div class="syn-label">SYNTHESIS: 99.8%</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-matter-synthesizer')) {
  customElements.define('concept-matter-synthesizer', ConceptMatterSynthesizer);
}
