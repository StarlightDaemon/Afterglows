const stereoscopeStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .str {
    width: 118px;
    height: 102px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Wooden shaft rail */
  .str-rail {
    position: absolute;
    top: 50px;
    width: 96px;
    height: 6px;
    background: linear-gradient(180deg, #008818, #011a05);
    border: 1px solid var(--accent, #00cc00);
    border-radius: 2px;
  }

  /* Wooden turned handle below */
  .str-handle {
    position: absolute;
    bottom: 6px;
    left: 28px;
    width: 10px;
    height: 38px;
    background: linear-gradient(90deg, #005510, #8cffaa, #003308);
    border: 1px solid rgba(0, 204, 0, 0.7);
    border-radius: 4px;
  }

  /* Eye hood & dual prism lenses */
  .str-hood {
    position: absolute;
    left: 8px;
    top: 24px;
    width: 32px;
    height: 54px;
    background: #020903;
    border: 1.5px solid #d6ffe0;
    border-radius: 12px 4px 4px 12px;
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 4px 0;
    box-sizing: border-box;
    z-index: 3;
  }

  .str-lens {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff, #8cffaa 40%, #004408 90%);
    border: 1px solid #d6ffe0;
    box-shadow: 0 0 6px #8cffaa;
  }

  /* Sliding stereograph card carriage with active focusing translation */
  .str-carriage {
    position: absolute;
    top: 18px;
    width: 44px;
    height: 66px;
    background: #031005;
    border: 1.5px solid var(--accent, #00cc00);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.4);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 2px;
    box-sizing: border-box;
    animation: str-slide-focus 2.6s ease-in-out infinite alternate;
  }

  @keyframes str-slide-focus {
    0% { transform: translateX(8px); }
    100% { transform: translateX(36px); }
  }

  /* Dual photographic stereo pairs with parallax offset */
  .str-photo {
    width: 34px;
    height: 24px;
    background: #010602;
    border: 1px solid rgba(140, 255, 170, 0.8);
    border-radius: 2px;
    position: relative;
    overflow: hidden;
  }

  /* Parallax landscape inside left/right photo */
  .str-photo-tree {
    position: absolute;
    bottom: 2px;
    width: 6px;
    height: 14px;
    background: #8cffaa;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    animation: str-tree-parallax 2.6s ease-in-out infinite alternate;
  }

  @keyframes str-tree-parallax {
    0% { transform: translateX(-2px); }
    100% { transform: translateX(2px); }
  }

  .str-photo.left .str-photo-tree { left: 8px; }
  .str-photo.right .str-photo-tree { left: 14px; }

  .str-photo-sun {
    position: absolute;
    top: 4px;
    right: 6px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #8cffaa;
  }

  /* Sightlines converging into stereoscopic 3D */
  .str-sightlines {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
  }
`;

class ConceptStereoscope extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${stereoscopeStyles}</style>
      <div class="str">
        <svg class="str-sightlines" viewBox="0 0 118 102">
          <!-- Focal convergence rays -->
          <line x1="30" y1="36" x2="80" y2="44" stroke="rgba(140, 255, 170, 0.5)" stroke-width="1.2" stroke-dasharray="2,2" />
          <line x1="30" y1="64" x2="80" y2="58" stroke="rgba(140, 255, 170, 0.5)" stroke-width="1.2" stroke-dasharray="2,2" />
        </svg>
        <div class="str-handle"></div>
        <div class="str-rail"></div>
        <div class="str-hood">
          <div class="str-lens"></div>
          <div class="str-lens"></div>
        </div>
        <div class="str-carriage">
          <div class="str-photo left">
            <div class="str-photo-sun"></div>
            <div class="str-photo-tree"></div>
          </div>
          <div class="str-photo right">
            <div class="str-photo-sun"></div>
            <div class="str-photo-tree"></div>
          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-stereoscope')) {
  customElements.define('concept-stereoscope', ConceptStereoscope);
}
