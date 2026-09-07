const antikytheraStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .akt {
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

  /* Bronze frame / case plates */
  .akt-frame {
    position: relative;
    width: 82px;
    height: 82px;
    background: #011205;
    border: 2px solid var(--accent, #00cc00);
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.3), 0 0 8px rgba(0, 204, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Large main drive crown gear (b1) */
  .akt-main-gear {
    position: absolute;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    border: 2px dashed #8cffaa;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.4);
    animation: akt-gear-cw 12s linear infinite;
  }

  @keyframes akt-gear-cw {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Four cross spokes on main gear */
  .akt-spoke {
    position: absolute;
    top: 32px;
    left: 2px;
    width: 60px;
    height: 2px;
    background: rgba(140, 255, 170, 0.7);
  }
  .akt-spoke.s2 { transform: rotate(90deg); }

  /* Epicyclic differential planetary gear (c1) */
  .akt-diff-gear-1 {
    position: absolute;
    top: 6px;
    left: 12px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1.5px dotted #ffffff;
    animation: akt-gear-ccw 4s linear infinite;
  }

  /* Epicyclic differential planetary gear (c2) */
  .akt-diff-gear-2 {
    position: absolute;
    bottom: 8px;
    right: 12px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1.5px dotted #d6ffe0;
    animation: akt-gear-ccw 6s linear infinite;
  }

  @keyframes akt-gear-ccw {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }
  }

  /* Central Solar pointer hand */
  .akt-sun-hand {
    position: absolute;
    width: 2px;
    height: 34px;
    background: #ffffff;
    transform-origin: bottom center;
    box-shadow: 0 0 6px #ffffff;
    z-index: 5;
    animation: akt-sun-orbit 6s linear infinite;
  }

  @keyframes akt-sun-orbit {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .akt-sun-hand::before {
    content: '☀';
    position: absolute;
    top: -6px;
    left: -4px;
    font-size: 8px;
    color: #ffffff;
  }

  /* Moon phase pointer hand with epicyclic anomaly pin-and-slot */
  .akt-moon-hand {
    position: absolute;
    width: 1.5px;
    height: 26px;
    background: #8cffaa;
    transform-origin: bottom center;
    box-shadow: 0 0 6px #8cffaa;
    z-index: 6;
    animation: akt-moon-orbit 2.2s linear infinite;
  }

  @keyframes akt-moon-orbit {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .akt-moon-hand::before {
    content: '☽';
    position: absolute;
    top: -5px;
    left: -3px;
    font-size: 7px;
    color: #8cffaa;
  }

  /* Center arbor boss */
  .akt-hub {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px #8cffaa;
    z-index: 7;
  }

  /* Calendar / Saros cycle readout */
  .akt-label {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: monospace;
    font-size: 7.5px;
    color: #8cffaa;
    letter-spacing: 0.5px;
  }
`;

class ConceptAntikythera extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${antikytheraStyles}</style>
      <div class="akt">
        <div class="akt-frame">
          <div class="akt-main-gear">
            <div class="akt-spoke s1"></div>
            <div class="akt-spoke s2"></div>
          </div>
          <div class="akt-diff-gear-1"></div>
          <div class="akt-diff-gear-2"></div>
          <div class="akt-sun-hand"></div>
          <div class="akt-moon-hand"></div>
          <div class="akt-hub"></div>
        </div>

        <div class="akt-label">SAROS: 223 SYNODIC</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-antikythera')) {
  customElements.define('concept-antikythera', ConceptAntikythera);
}
