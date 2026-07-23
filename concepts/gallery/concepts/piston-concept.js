const pistonStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .piston {
    width: 104px;
    height: 104px;
    position: relative;
  }

  /* Cylinder: open-bottomed sleeve the head slides inside. */
  .piston-cyl {
    position: absolute;
    top: 8px;
    left: 50%;
    width: 34px;
    height: 44px;
    margin-left: -17px;
    border: 2px solid rgba(140, 255, 170, 0.6);
    border-bottom: none;
    border-radius: 6px 6px 0 0;
    background: linear-gradient(180deg, rgba(10, 36, 17, 0.9), rgba(5, 18, 7, 0.4));
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.2);
  }

  /* Cooling fins on the cylinder. */
  .piston-fin {
    position: absolute;
    left: -8px;
    right: -8px;
    height: 2px;
    background: rgba(0, 204, 0, 0.3);
  }

  .piston-fin.f1 { top: 8px; }
  .piston-fin.f2 { top: 16px; }
  .piston-fin.f3 { top: 24px; }

  /* Piston head: reciprocates inside the sleeve. */
  .piston-head {
    position: absolute;
    top: 14px;
    left: 50%;
    width: 26px;
    height: 14px;
    margin-left: -13px;
    border-radius: 3px;
    background: linear-gradient(180deg, #8be08a 0%, #2a8a3e 70%);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.45);
    animation: piston-stroke 1.6s ease-in-out infinite;
  }

  .piston-head::after {
    content: '';
    position: absolute;
    left: 3px;
    right: 3px;
    top: 4px;
    height: 1px;
    background: rgba(216, 255, 187, 0.6);
  }

  /* Connecting rod: rocks as it follows the crank pin. */
  .piston-rod {
    position: absolute;
    top: 26px;
    left: 50%;
    width: 3px;
    height: 30px;
    margin-left: -1.5px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.9), rgba(60, 160, 90, 0.7));
    transform-origin: top center;
    animation: piston-rod 1.6s ease-in-out infinite;
  }

  /* Crankshaft disc with offset pin. */
  .piston-crank {
    position: absolute;
    top: 56px;
    left: 50%;
    width: 34px;
    height: 34px;
    margin-left: -17px;
    border-radius: 50%;
    border: 2px solid rgba(140, 255, 170, 0.55);
    background: radial-gradient(circle at 42% 36%, #123c1e, #071c0c 75%);
    box-sizing: border-box;
    animation: piston-crank 1.6s linear infinite;
  }

  .piston-pin {
    position: absolute;
    top: 4px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    border-radius: 50%;
    background: #d8ffbb;
    box-shadow: 0 0 5px rgba(216, 255, 187, 0.7);
  }

  .piston-axle {
    position: absolute;
    top: 71px;
    left: 50%;
    width: 5px;
    height: 5px;
    margin-left: -2.5px;
    border-radius: 50%;
    background: #010401;
    border: 1px solid rgba(190, 255, 205, 0.7);
    z-index: 2;
  }

  /* Exhaust puffs from the side port, one per revolution. */
  .piston-puff {
    position: absolute;
    top: 20px;
    left: 76px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(140, 230, 160, 0.5), transparent 70%);
    filter: blur(1px);
    opacity: 0;
    animation: piston-puff 1.6s ease-out infinite;
  }

  .piston-puff.p2 { animation-delay: -0.8s; top: 24px; }

  .piston-port {
    position: absolute;
    top: 22px;
    left: 67px;
    width: 8px;
    height: 4px;
    border-radius: 2px;
    background: rgba(0, 204, 0, 0.4);
  }

  @keyframes piston-stroke {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(16px); }
  }

  @keyframes piston-rod {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(8px) rotate(9deg); }
    50% { transform: translateY(16px) rotate(0deg); }
    75% { transform: translateY(8px) rotate(-9deg); }
  }

  @keyframes piston-crank {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes piston-puff {
    0%, 45% { opacity: 0; transform: translate(0, 0) scale(0.6); }
    55% { opacity: 0.9; }
    95%, 100% { opacity: 0; transform: translate(16px, -10px) scale(1.8); }
  }
`;

class ConceptPiston extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${pistonStyles}</style>
      <div class="piston">
        <div class="piston-rod"></div>
        <div class="piston-head"></div>
        <div class="piston-cyl">
          <div class="piston-fin f1"></div>
          <div class="piston-fin f2"></div>
          <div class="piston-fin f3"></div>
        </div>
        <div class="piston-port"></div>
        <div class="piston-puff"></div>
        <div class="piston-puff p2"></div>
        <div class="piston-crank">
          <div class="piston-pin"></div>
        </div>
        <div class="piston-axle"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-piston')) {
  customElements.define('concept-piston', ConceptPiston);
}
