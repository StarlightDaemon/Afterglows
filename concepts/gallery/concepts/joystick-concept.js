const joystickStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .joystick {
    width: 92px;
    height: 92px;
    position: relative;
  }

  .joystick-base {
    position: absolute;
    bottom: 20px;
    left: 50%;
    width: 60px;
    height: 16px;
    border-radius: 10px;
    background: linear-gradient(180deg, rgba(0, 55, 0, 0.95), rgba(0, 20, 0, 0.95));
    border: 1px solid rgba(170, 255, 170, 0.35);
    transform: translateX(-50%);
  }

  .joystick-stick {
    position: absolute;
    bottom: 34px;
    left: 50%;
    width: 6px;
    height: 34px;
    border-radius: 999px;
    background: linear-gradient(180deg, #d8ffbb, var(--accent, #00cc00));
    transform-origin: bottom center;
    transform: translateX(-50%) rotate(-16deg);
    animation: joystick-tilt 2.6s ease-in-out infinite;
  }

  .joystick-stick::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #f2ffdd, #35a54a 60%, #0b5c1d);
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.55);
    transform: translateX(-50%);
  }

  .joystick-button {
    position: absolute;
    right: 14px;
    bottom: 28px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #d6ffe0, #2a8a3e 70%);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.5);
    animation: button-flash 1.8s ease-in-out infinite;
  }

  @keyframes joystick-tilt {
    0%, 100% { transform: translateX(-50%) rotate(-16deg); }
    50% { transform: translateX(-50%) rotate(14deg); }
  }

  @keyframes button-flash {
    0%, 100% { opacity: 0.45; }
    50% { opacity: 1; }
  }
`;

class ConceptJoystick extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${joystickStyles}</style>
      <div class="joystick">
        <div class="joystick-base"></div>
        <div class="joystick-stick"></div>
        <div class="joystick-button"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-joystick')) {
  customElements.define('concept-joystick', ConceptJoystick);
}
