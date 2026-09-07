const gripStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ccg-box {
    width: 118px;
    height: 102px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1313 0%, #080303 100%);
    border: 1.5px solid rgba(239, 83, 80, 0.55);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(239, 83, 80, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ccg-stage {
    position: relative;
    width: 96px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Street surface & cable slot line */
  .ccg-street {
    position: absolute;
    top: 28px;
    width: 88px;
    height: 6px;
    background: #37474f;
    border-top: 1.5px solid #78909c;
    border-bottom: 1.5px solid #78909c;
  }

  .ccg-slot-gap {
    position: absolute;
    top: 28px;
    left: 44px;
    width: 8px;
    height: 6px;
    background: #000000;
  }

  /* Cable Car Truck & Grip Lever above street */
  .ccg-lever {
    position: absolute;
    top: 8px;
    left: 45px;
    width: 4px;
    height: 22px;
    background: #c62828;
    border: 1px solid #ff8a80;
    border-radius: 2px;
    transform-origin: bottom center;
    animation: ccg-lever-shift 4s ease-in-out infinite alternate;
  }

  @keyframes ccg-lever-shift {
    0% { transform: rotate(-15deg); }
    100% { transform: rotate(15deg); }
  }

  /* Underground forged steel grip shank descending through slot */
  .ccg-shank {
    position: absolute;
    top: 30px;
    left: 46px;
    width: 4px;
    height: 32px;
    background: #cfd8dc;
    border: 1px solid #78909c;
  }

  /* Lower grip clamping dies */
  .ccg-die-jaws {
    position: absolute;
    bottom: 12px;
    left: 40px;
    width: 16px;
    height: 8px;
    background: #ffb74d;
    border: 1px solid #ffffff;
    border-radius: 2px;
    box-shadow: 0 0 6px #ff9800;
  }

  /* Continuously running underground wire cable */
  .ccg-cable {
    position: absolute;
    bottom: 15px;
    width: 88px;
    height: 3px;
    background: repeating-linear-gradient(90deg, #ffffff 0px 4px, #455a64 4px 8px);
    box-shadow: 0 0 4px #00e5ff;
    animation: ccg-cable-run 0.5s linear infinite;
  }

  @keyframes ccg-cable-run {
    to { background-position: -8px 0; }
  }

  .ccg-label {
    position: absolute;
    bottom: 3px;
    font-size: 6.5px;
    font-family: monospace;
    color: rgba(239, 83, 80, 0.85);
    letter-spacing: 0.5px;
  }
`;

class ConceptCableCarGrip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${gripStyles}</style>
      <div class="ccg-box">
        <div class="ccg-stage">
          <div class="ccg-street"></div>
          <div class="ccg-slot-gap"></div>

          <div class="ccg-cable"></div>

          <div class="ccg-lever"></div>
          <div class="ccg-shank"></div>
          <div class="ccg-die-jaws"></div>
        </div>

        <div class="ccg-label">CABLE CAR GRIP</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-cable-car-grip')) {
  customElements.define('concept-cable-car-grip', ConceptCableCarGrip);
}
