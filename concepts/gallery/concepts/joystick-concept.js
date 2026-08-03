// v1 below is the archived original; v2 adds the gimbal socket and cast shadow.
const joystickStyles = {
  v1: `
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
`,
  v2: `
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

  /* Gimbal ring around the stick's pivot, reading as the socket it
     tilts inside rather than the stick floating over a flat panel. */
  .joystick-gimbal {
    position: absolute;
    bottom: 26px;
    left: 50%;
    width: 26px;
    height: 10px;
    margin-left: -13px;
    border-radius: 50%;
    border: 1.5px solid rgba(140, 255, 170, 0.5);
    box-shadow: inset 0 3px 4px rgba(0, 0, 0, 0.5);
  }

  /* Directional shadow the stick casts on the base, leaning opposite
     the stick's tilt. */
  .joystick-shadow {
    position: absolute;
    bottom: 21px;
    left: 50%;
    width: 20px;
    height: 6px;
    margin-left: -10px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.5), transparent 75%);
    transform-origin: 50% 50%;
    animation: joystick-shadow 2.6s ease-in-out infinite;
  }

  @keyframes joystick-shadow {
    0%, 100% { transform: translateX(4px) scaleX(1.15); }
    50% { transform: translateX(-4px) scaleX(0.85); }
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
`,
};

const joystickMarkup = {
  v1: `
      <div class="joystick">
        <div class="joystick-base"></div>
        <div class="joystick-stick"></div>
        <div class="joystick-button"></div>
      </div>
    `,
  v2: `
      <div class="joystick">
        <div class="joystick-base"></div>
        <div class="joystick-shadow"></div>
        <div class="joystick-gimbal"></div>
        <div class="joystick-stick"></div>
        <div class="joystick-button"></div>
      </div>
    `,
};

class ConceptJoystick extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }
  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${joystickStyles[version] || joystickStyles.v2}</style>${joystickMarkup[version] || joystickMarkup.v2}`;
  }
}

if (!customElements.get('concept-joystick')) {
  customElements.define('concept-joystick', ConceptJoystick);
}
