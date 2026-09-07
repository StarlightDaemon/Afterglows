const seicheStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .sch {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #031418 0%, #010608 100%);
    border: 1.5px solid rgba(0, 204, 255, 0.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 204, 255, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Lake basin bedrock profile */
  .sch-basin {
    position: relative;
    width: 90px;
    height: 60px;
    background: #021a22;
    border: 1.5px solid #00e5ff;
    border-radius: 4px 4px 16px 16px;
    box-shadow: inset 0 0 8px rgba(0, 229, 255, 0.3);
    overflow: hidden;
  }

  /* Sloshing water body undergoing seiche oscillation */
  .sch-water-plane {
    position: absolute;
    top: 24px;
    left: -10px;
    right: -10px;
    height: 50px;
    background: linear-gradient(180deg, rgba(0, 229, 255, 0.6) 0%, rgba(0, 100, 160, 0.8) 50%, #02121a 100%);
    transform-origin: 50% 0%;
    animation: sch-slosh 4s ease-in-out infinite;
  }

  @keyframes sch-slosh {
    0%, 100% { transform: rotate(-14deg); }
    50% { transform: rotate(14deg); }
  }

  /* Central stationary node line */
  .sch-node-line {
    position: absolute;
    top: 18px;
    bottom: 0;
    left: 50%;
    width: 1px;
    background: #ffffff;
    border-left: 1px dashed rgba(255, 255, 255, 0.6);
    z-index: 5;
  }

  .sch-node-dot {
    position: absolute;
    top: 23px;
    left: 50%;
    width: 5px;
    height: 5px;
    margin-left: -2.5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00e5ff;
    z-index: 6;
  }

  /* Shoreline water level elevation markers */
  .sch-gauge-left, .sch-gauge-right {
    position: absolute;
    top: 8px;
    width: 4px;
    height: 24px;
    border: 1px solid rgba(0, 229, 255, 0.4);
    background: rgba(0, 50, 80, 0.5);
  }

  .sch-gauge-left { left: 4px; }
  .sch-gauge-right { right: 4px; }

  .sch-gauge-float-l {
    position: absolute;
    width: 6px;
    height: 3px;
    left: -1px;
    background: #ffffff;
    box-shadow: 0 0 4px #00e5ff;
    animation: sch-gauge-float-l 4s ease-in-out infinite;
  }

  .sch-gauge-float-r {
    position: absolute;
    width: 6px;
    height: 3px;
    left: -1px;
    background: #ffffff;
    box-shadow: 0 0 4px #00e5ff;
    animation: sch-gauge-float-r 4s ease-in-out infinite;
  }

  @keyframes sch-gauge-float-l {
    0%, 100% { top: 16px; }
    50% { top: 2px; }
  }

  @keyframes sch-gauge-float-r {
    0%, 100% { top: 2px; }
    50% { top: 16px; }
  }

  .sch-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(0, 229, 255, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptSeicheOscillation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${seicheStyles}</style>
      <div class="sch">
        <div class="sch-basin">
          <div class="sch-water-plane"></div>
          <div class="sch-node-line"></div>
          <div class="sch-node-dot"></div>

          <div class="sch-gauge-left">
            <div class="sch-gauge-float-l"></div>
          </div>
          <div class="sch-gauge-right">
            <div class="sch-gauge-float-r"></div>
          </div>
        </div>

        <div class="sch-label">LAKE SEICHE OSCILLATION</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-seiche-oscillation')) {
  customElements.define('concept-seiche-oscillation', ConceptSeicheOscillation);
}
