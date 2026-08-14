// Joystick: v1 and v2 preserved.
// v3 adds authentic arcade fightstick colorization:
// textured graphite chassis, polished chrome lever shaft, ruby red balltop knob,
// black dustwasher gimbal collar, and illuminated arcade action buttons.
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
  v3: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v3: Japanese arcade fighting stick with textured graphite casing,
     chrome lever shaft, glossy candy-red balltop, black gimbal socket, and illuminated convex action button. */
  .joystickc {
    width: 92px;
    height: 92px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Heavy graphite fightstick base */
  .joystickc-base {
    position: absolute;
    bottom: 20px;
    left: 50%;
    width: 62px;
    height: 18px;
    border-radius: 10px;
    background: linear-gradient(180deg, #27272a 0%, #09090b 100%);
    border: 1.5px solid #52525b;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.2);
    transform: translateX(-50%);
  }

  /* Gimbal socket collar */
  .joystickc-gimbal {
    position: absolute;
    bottom: 26px;
    left: 50%;
    width: 26px;
    height: 10px;
    margin-left: -13px;
    border-radius: 50%;
    background: #18181b;
    border: 1.5px solid #3f3f46;
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.9);
  }

  /* Directional floor shadow */
  .joystickc-shadow {
    position: absolute;
    bottom: 21px;
    left: 50%;
    width: 20px;
    height: 6px;
    margin-left: -10px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.8), transparent 75%);
    transform-origin: 50% 50%;
    animation: joystickc-shadow 2.6s ease-in-out infinite;
  }

  @keyframes joystickc-shadow {
    0%, 100% { transform: translateX(4px) scaleX(1.15); }
    50% { transform: translateX(-4px) scaleX(0.85); }
  }

  /* Polished steel chrome shaft */
  .joystickc-stick {
    position: absolute;
    bottom: 34px;
    left: 50%;
    width: 6px;
    height: 34px;
    border-radius: 999px;
    background: linear-gradient(90deg, #94a3b8 0%, #ffffff 50%, #64748b 100%);
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.4);
    transform-origin: bottom center;
    transform: translateX(-50%) rotate(-16deg);
    animation: joystickc-tilt 2.6s ease-in-out infinite;
  }

  /* Glossy candy cherry-red balltop */
  .joystickc-stick::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #fecdd3 0%, #ef4444 55%, #991b1b 100%);
    border: 0.5px solid #fda4af;
    box-shadow: 0 0 10px rgba(239, 68, 68, 0.7), inset 0 2px 4px rgba(255, 255, 255, 0.6);
    transform: translateX(-50%);
  }

  /* Glowing arcade action push-button (Arcade Yellow/Amber) */
  .joystickc-button {
    position: absolute;
    right: 14px;
    bottom: 28px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #fef08a, #eab308 70%);
    border: 1px solid #facc15;
    box-shadow: 0 0 8px rgba(250, 204, 21, 0.8);
    animation: buttonc-flash 1.8s ease-in-out infinite;
  }

  @keyframes joystickc-tilt {
    0%, 100% { transform: translateX(-50%) rotate(-16deg); }
    50% { transform: translateX(-50%) rotate(14deg); }
  }

  @keyframes buttonc-flash {
    0%, 100% { opacity: 0.5; filter: brightness(1); }
    50% { opacity: 1; filter: brightness(1.4); box-shadow: 0 0 14px #fde047; }
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
  v3: `
      <div class="joystickc">
        <div class="joystickc-base"></div>
        <div class="joystickc-shadow"></div>
        <div class="joystickc-gimbal"></div>
        <div class="joystickc-stick"></div>
        <div class="joystickc-button"></div>
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
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${joystickStyles[version] || joystickStyles.v3}</style>${joystickMarkup[version] || joystickMarkup.v3}`;
  }
}

if (!customElements.get('concept-joystick')) {
  customElements.define('concept-joystick', ConceptJoystick);
}
