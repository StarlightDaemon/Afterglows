const phantasmagoriaStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pht {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #0d0416 0%, #020005 100%);
    border: 1.5px solid rgba(180, 0, 255, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(180, 0, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Rolling wheeled magic lantern projector on left */
  .pht-lantern {
    position: absolute;
    left: 8px;
    bottom: 22px;
    width: 24px;
    height: 32px;
    background: #1f082e;
    border: 1.5px solid #d400ff;
    border-radius: 3px;
    box-shadow: 0 0 8px rgba(212, 0, 255, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: pht-roll 3s ease-in-out infinite alternate;
  }

  @keyframes pht-roll {
    0% { transform: translateX(0); }
    100% { transform: translateX(10px); }
  }

  /* Chimney / smoke exhaust on lantern */
  .pht-chimney {
    position: absolute;
    top: -8px;
    width: 6px;
    height: 8px;
    background: #381254;
    border: 1px solid #d400ff;
  }

  /* Optical lens tube */
  .pht-lens-tube {
    position: absolute;
    right: -8px;
    top: 10px;
    width: 8px;
    height: 12px;
    background: #ffffff;
    border-radius: 0 2px 2px 0;
    box-shadow: 0 0 8px #ffffff;
  }

  /* Expanding conical projection beam */
  .pht-projection-beam {
    position: absolute;
    left: 36px;
    top: 50%;
    width: 74px;
    height: 56px;
    margin-top: -28px;
    background: linear-gradient(90deg, rgba(212, 0, 255, 0.4) 0%, rgba(140, 0, 255, 0.15) 70%, transparent 100%);
    clip-path: polygon(0 40%, 100% 0, 100% 100%, 0 60%);
    pointer-events: none;
  }

  /* Glowing ghostly apparition specter */
  .pht-specter {
    position: absolute;
    right: 14px;
    top: 50%;
    width: 32px;
    height: 38px;
    margin-top: -19px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: pht-ghost-hover 3s ease-in-out infinite alternate;
  }

  @keyframes pht-ghost-hover {
    0% { transform: scale(0.7) translateY(-3px); opacity: 0.5; filter: blur(1px); }
    100% { transform: scale(1.25) translateY(3px); opacity: 1; filter: drop-shadow(0 0 10px #d400ff); }
  }

  .pht-ghost-head {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffffff 0%, #d400ff 60%, transparent 100%);
    box-shadow: 0 0 12px #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 3px;
  }

  .pht-eye {
    width: 3px;
    height: 4px;
    border-radius: 50%;
    background: #0d0214;
  }

  .pht-ghost-body {
    width: 22px;
    height: 16px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(212, 0, 255, 0.4) 60%, transparent 100%);
    border-radius: 0 0 10px 10px;
    clip-path: polygon(0 0, 100% 0, 85% 100%, 50% 70%, 15% 100%);
  }

  /* Wheels under lantern carriage */
  .pht-wheel-l, .pht-wheel-r {
    position: absolute;
    bottom: -4px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #d400ff;
  }

  .pht-wheel-l { left: 2px; }
  .pht-wheel-r { right: 2px; }

  .pht-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(220, 140, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptPhantasmagoria extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${phantasmagoriaStyles}</style>
      <div class="pht">
        <div class="pht-lantern">
          <div class="pht-chimney"></div>
          <div class="pht-lens-tube"></div>
          <div class="pht-wheel-l"></div>
          <div class="pht-wheel-r"></div>
        </div>

        <div class="pht-projection-beam"></div>

        <div class="pht-specter">
          <div class="pht-ghost-head">
            <div class="pht-eye"></div>
            <div class="pht-eye"></div>
          </div>
          <div class="pht-ghost-body"></div>
        </div>

        <div class="pht-label">PHANTASMAGORIA SPECTER</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-phantasmagoria')) {
  customElements.define('concept-phantasmagoria', ConceptPhantasmagoria);
}
