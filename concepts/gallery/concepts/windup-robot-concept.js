// Wind-up tin robot marching in place with rotating key, clanking legs, and blinking antenna.
// v1 and v2 are preserved.
// v3 adds full color: cobalt blue pressed tin body, scarlet chest plate with yellow dial,
// blinking ruby beacon, polished brass key, and stamped metal limbs.
const windupRobotStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A wind-up tin robot marching in place: the key in its back turns,
     its legs clank forward and back, arms swing, antenna light
     blinks, and it winds down (slowing) before the spring rewinds
     and it's off again. */
  .wr {
    width: 92px;
    height: 100px;
    position: relative;
  }

  /* Whole robot rocks with each step. */
  .wr-bot {
    position: absolute;
    left: 50%;
    bottom: 10px;
    width: 48px;
    height: 74px;
    margin-left: -24px;
    animation: wr-march 4s ease-in-out infinite;
  }

  @keyframes wr-march {
    0%, 100% { transform: rotate(-2deg); }
    25% { transform: rotate(2deg) translateY(-1px); }
    50% { transform: rotate(-2deg); }
    75% { transform: rotate(2deg) translateY(-1px); }
  }

  /* Head. */
  .wr-head {
    position: absolute;
    left: 12px;
    top: 0;
    width: 24px;
    height: 20px;
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.75), rgba(0, 130, 26, 0.8));
    border: 2px solid var(--accent, #00cc00);
  }

  /* Eyes. */
  .wr-head::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 7px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #041a0a;
    box-shadow: 10px 0 0 #041a0a;
  }

  /* Mouth grille. */
  .wr-head::after {
    content: '';
    position: absolute;
    left: 5px;
    bottom: 3px;
    width: 12px;
    height: 3px;
    background: repeating-linear-gradient(90deg,
      rgba(0, 90, 18, 0.9) 0 1px,
      transparent 1px 3px);
  }

  /* Antenna + blinking light. */
  .wr-antenna {
    position: absolute;
    left: 50%;
    top: -8px;
    width: 1.5px;
    height: 8px;
    margin-left: -0.75px;
    background: rgba(140, 255, 170, 0.8);
  }

  .wr-antenna::after {
    content: '';
    position: absolute;
    left: 50%;
    top: -4px;
    width: 5px;
    height: 5px;
    margin-left: -2.5px;
    border-radius: 50%;
    background: var(--accent, #00cc00);
    animation: wr-blink 0.8s steps(1) infinite;
  }

  @keyframes wr-blink {
    0%, 50% { opacity: 1; box-shadow: 0 0 6px rgba(0, 204, 0, 0.9); }
    51%, 100% { opacity: 0.3; box-shadow: none; }
  }

  /* Torso with gauges. */
  .wr-torso {
    position: absolute;
    left: 8px;
    top: 20px;
    width: 32px;
    height: 30px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.6), rgba(0, 80, 16, 0.85));
    border: 2px solid var(--accent, #00cc00);
  }

  .wr-torso::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid rgba(140, 255, 170, 0.7);
    box-shadow: 12px 0 0 -1px rgba(140, 255, 170, 0.3);
  }

  /* Wind-up key sticking out the side. */
  .wr-key {
    position: absolute;
    right: 2px;
    top: 26px;
    width: 0;
    height: 0;
    animation: wr-key 4s linear infinite;
  }

  @keyframes wr-key {
    0%, 82% { transform: rotate(var(--r, 0deg)); }
    100% { transform: rotate(0deg); }
  }

  .wr-key-arm {
    position: absolute;
    top: -1px;
    left: 0;
    width: 10px;
    height: 2px;
    background: rgba(140, 255, 170, 0.85);
    transform-origin: 0% 50%;
    animation: wr-keyspin 1s linear infinite;
  }

  .wr-key-arm.k2 { animation-delay: -0.5s; }

  @keyframes wr-keyspin {
    to { transform: rotate(360deg); }
  }

  .wr-key-ring {
    position: absolute;
    left: 8px;
    top: -4px;
    width: 8px;
    height: 8px;
    border: 1.5px solid rgba(140, 255, 170, 0.8);
    border-radius: 50%;
  }

  /* Arms swinging opposite the legs. */
  .wr-arm {
    position: absolute;
    top: 22px;
    width: 4px;
    height: 20px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.8), rgba(0, 110, 22, 0.8));
    transform-origin: top center;
  }

  .wr-arm.left { left: 2px; animation: wr-arm-l 1s ease-in-out infinite; }
  .wr-arm.right { right: 2px; animation: wr-arm-r 1s ease-in-out infinite; }

  @keyframes wr-arm-l {
    0%, 100% { transform: rotate(12deg); }
    50% { transform: rotate(-12deg); }
  }

  @keyframes wr-arm-r {
    0%, 100% { transform: rotate(-12deg); }
    50% { transform: rotate(12deg); }
  }

  /* Legs clanking. */
  .wr-leg {
    position: absolute;
    bottom: 0;
    width: 8px;
    height: 16px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.7), rgba(0, 90, 18, 0.85));
    border: 1px solid rgba(0, 204, 0, 0.5);
    transform-origin: top center;
  }

  .wr-leg.left { left: 12px; animation: wr-leg-l 1s ease-in-out infinite; }
  .wr-leg.right { right: 12px; animation: wr-leg-r 1s ease-in-out infinite; }

  @keyframes wr-leg-l {
    0%, 100% { transform: rotate(-10deg); }
    50% { transform: rotate(10deg); }
  }

  @keyframes wr-leg-r {
    0%, 100% { transform: rotate(10deg); }
    50% { transform: rotate(-10deg); }
  }

  /* Floor. */
  .wr-floor {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 8px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.45), transparent);
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

  .wr {
    width: 92px;
    height: 100px;
    position: relative;
  }

  /* Whole robot rocks with each step. */
  .wr-bot {
    position: absolute;
    left: 50%;
    bottom: 10px;
    width: 48px;
    height: 74px;
    margin-left: -24px;
    animation: wr-march 4s ease-in-out infinite;
  }

  @keyframes wr-march {
    0%, 100% { transform: rotate(-2deg); }
    25% { transform: rotate(2deg) translateY(-1px); }
    50% { transform: rotate(-2deg); }
    75% { transform: rotate(2deg) translateY(-1px); }
  }

  /* Head. */
  .wr-head {
    position: absolute;
    left: 12px;
    top: 0;
    width: 24px;
    height: 20px;
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.75), rgba(0, 130, 26, 0.8));
    border: 2px solid var(--accent, #00cc00);
  }

  /* Eyes. */
  .wr-head::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 7px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #041a0a;
    box-shadow: 10px 0 0 #041a0a;
  }

  /* Mouth grille. */
  .wr-head::after {
    content: '';
    position: absolute;
    left: 5px;
    bottom: 3px;
    width: 12px;
    height: 3px;
    background: repeating-linear-gradient(90deg,
      rgba(0, 90, 18, 0.9) 0 1px,
      transparent 1px 3px);
  }

  /* Antenna + blinking light. */
  .wr-antenna {
    position: absolute;
    left: 50%;
    top: -8px;
    width: 1.5px;
    height: 8px;
    margin-left: -0.75px;
    background: rgba(140, 255, 170, 0.8);
  }

  .wr-antenna::after {
    content: '';
    position: absolute;
    left: 50%;
    top: -4px;
    width: 5px;
    height: 5px;
    margin-left: -2.5px;
    border-radius: 50%;
    background: var(--accent, #00cc00);
    animation: wr-blink 0.8s steps(1) infinite;
  }

  @keyframes wr-blink {
    0%, 50% { opacity: 1; box-shadow: 0 0 6px rgba(0, 204, 0, 0.9); }
    51%, 100% { opacity: 0.3; box-shadow: none; }
  }

  /* Torso with gauges. */
  .wr-torso {
    position: absolute;
    left: 8px;
    top: 20px;
    width: 32px;
    height: 30px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.6), rgba(0, 80, 16, 0.85));
    border: 2px solid var(--accent, #00cc00);
  }

  .wr-torso::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid rgba(140, 255, 170, 0.7);
    box-shadow: 12px 0 0 -1px rgba(140, 255, 170, 0.3);
  }

  /* Wind-up key: its axle is planted ON the torso's side wall. */
  .wr-key {
    position: absolute;
    right: 8px;
    top: 32px;
    width: 0;
    height: 0;
    animation: wr-key 4s linear infinite;
  }

  .wr-key::before {
    content: '';
    position: absolute;
    left: -3px;
    top: -3px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(0, 90, 18, 0.95);
    border: 1.5px solid rgba(140, 255, 170, 0.9);
  }

  @keyframes wr-key {
    0%, 82% { transform: rotate(var(--r, 0deg)); }
    100% { transform: rotate(0deg); }
  }

  .wr-key-arm {
    position: absolute;
    top: -1px;
    left: 0;
    width: 10px;
    height: 2px;
    background: rgba(140, 255, 170, 0.85);
    transform-origin: 0% 50%;
    animation: wr-keyspin 1s linear infinite;
  }

  .wr-key-arm.k2 { animation-delay: -0.5s; }

  @keyframes wr-keyspin {
    to { transform: rotate(360deg); }
  }

  .wr-key-ring {
    position: absolute;
    left: 8px;
    top: -4px;
    width: 8px;
    height: 8px;
    border: 1.5px solid rgba(140, 255, 170, 0.8);
    border-radius: 50%;
  }

  /* Arms swinging opposite the legs. */
  .wr-arm {
    position: absolute;
    top: 22px;
    width: 4px;
    height: 20px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.8), rgba(0, 110, 22, 0.8));
    transform-origin: top center;
  }

  .wr-arm.left { left: 2px; animation: wr-arm-l 1s ease-in-out infinite; }
  .wr-arm.right { right: 2px; animation: wr-arm-r 1s ease-in-out infinite; }

  @keyframes wr-arm-l {
    0%, 100% { transform: rotate(12deg); }
    50% { transform: rotate(-12deg); }
  }

  @keyframes wr-arm-r {
    0%, 100% { transform: rotate(-12deg); }
    50% { transform: rotate(12deg); }
  }

  /* Legs clanking. */
  .wr-leg {
    position: absolute;
    bottom: 0;
    width: 8px;
    height: 16px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.7), rgba(0, 90, 18, 0.85));
    border: 1px solid rgba(0, 204, 0, 0.5);
    transform-origin: top center;
  }

  .wr-leg.left { left: 12px; animation: wr-leg-l 1s ease-in-out infinite; }
  .wr-leg.right { right: 12px; animation: wr-leg-r 1s ease-in-out infinite; }

  @keyframes wr-leg-l {
    0%, 100% { transform: rotate(-10deg); }
    50% { transform: rotate(10deg); }
  }

  @keyframes wr-leg-r {
    0%, 100% { transform: rotate(10deg); }
    50% { transform: rotate(-10deg); }
  }

  /* Floor. */
  .wr-floor {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 8px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.45), transparent);
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

  /* v3: Retro Cobalt Blue Tin Toy Wind-up Robot with
     scarlet chest plate, yellow meter dial, ruby beacon, and turning brass key */
  .wrc {
    width: 92px;
    height: 100px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Clanking Rocking Robot Assembly */
  .wrc-bot {
    position: absolute;
    left: 50%;
    bottom: 10px;
    width: 48px;
    height: 74px;
    margin-left: -24px;
    animation: wrc-march 4s ease-in-out infinite;
  }

  @keyframes wrc-march {
    0%, 100% { transform: rotate(-2deg); }
    25% { transform: rotate(2deg) translateY(-1px); }
    50% { transform: rotate(-2deg); }
    75% { transform: rotate(2deg) translateY(-1px); }
  }

  /* Head: Cobalt Blue Tinplate */
  .wrc-head {
    position: absolute;
    left: 12px;
    top: 0;
    width: 24px;
    height: 20px;
    border-radius: 4px;
    background: linear-gradient(180deg, #3b82f6 0%, #2563eb 60%, #1d4ed8 100%);
    border: 2px solid #60a5fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  }

  /* Eyes */
  .wrc-head::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 7px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #fde047;
    box-shadow: 10px 0 0 #fde047, 0 0 4px #facc15;
  }

  /* Stamped Mouth Grille */
  .wrc-head::after {
    content: '';
    position: absolute;
    left: 5px;
    bottom: 3px;
    width: 12px;
    height: 3px;
    background: repeating-linear-gradient(90deg,
      #020617 0 1px,
      #94a3b8 1px 3px);
  }

  /* Steel Antenna Rod with Ruby Red Blinking Beacon */
  .wrc-antenna {
    position: absolute;
    left: 50%;
    top: -8px;
    width: 1.5px;
    height: 8px;
    margin-left: -0.75px;
    background: #cbd5e1;
  }

  .wrc-antenna::after {
    content: '';
    position: absolute;
    left: 50%;
    top: -4px;
    width: 5px;
    height: 5px;
    margin-left: -2.5px;
    border-radius: 50%;
    background: #ef4444;
    box-shadow: 0 0 6px #dc2626;
    animation: wrc-blink 0.8s steps(1) infinite;
  }

  @keyframes wrc-blink {
    0%, 50% { opacity: 1; box-shadow: 0 0 8px #ef4444; }
    51%, 100% { opacity: 0.3; box-shadow: none; }
  }

  /* Torso: Scarlet Red Panel with Gauge */
  .wrc-torso {
    position: absolute;
    left: 8px;
    top: 20px;
    width: 32px;
    height: 30px;
    border-radius: 3px;
    background: linear-gradient(180deg, #ef4444 0%, #dc2626 60%, #991b1b 100%);
    border: 2px solid #f87171;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
  }

  /* Yellow Dial Meter */
  .wrc-torso::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fde047;
    border: 1px solid #ca8a04;
    box-shadow: 12px 0 0 -1px #38bdf8;
  }

  /* Turning Brass Wind-Up Key */
  .wrc-key {
    position: absolute;
    right: 8px;
    top: 32px;
    width: 0;
    height: 0;
    animation: wrc-key 4s linear infinite;
  }

  .wrc-key::before {
    content: '';
    position: absolute;
    left: -3px;
    top: -3px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ca8a04;
    border: 1.5px solid #fde047;
  }

  @keyframes wrc-key {
    0%, 82% { transform: rotate(var(--r, 0deg)); }
    100% { transform: rotate(0deg); }
  }

  .wrc-key-arm {
    position: absolute;
    top: -1px;
    left: 0;
    width: 10px;
    height: 2px;
    background: #facc15;
    transform-origin: 0% 50%;
    animation: wrc-keyspin 1s linear infinite;
  }

  .wrc-key-arm.k2 { animation-delay: -0.5s; }

  @keyframes wrc-keyspin {
    to { transform: rotate(360deg); }
  }

  .wrc-key-ring {
    position: absolute;
    left: 8px;
    top: -4px;
    width: 8px;
    height: 8px;
    border: 2px solid #facc15;
    box-shadow: 0 0 3px #ca8a04;
    border-radius: 50%;
  }

  /* Stamped Chrome Tin Arms */
  .wrc-arm {
    position: absolute;
    top: 22px;
    width: 4px;
    height: 20px;
    border-radius: 2px;
    background: linear-gradient(180deg, #f1f5f9, #94a3b8);
    border: 0.5px solid #cbd5e1;
    transform-origin: top center;
  }

  .wrc-arm.left { left: 2px; animation: wrc-arm-l 1s ease-in-out infinite; }
  .wrc-arm.right { right: 2px; animation: wrc-arm-r 1s ease-in-out infinite; }

  @keyframes wrc-arm-l {
    0%, 100% { transform: rotate(12deg); }
    50% { transform: rotate(-12deg); }
  }

  @keyframes wrc-arm-r {
    0%, 100% { transform: rotate(-12deg); }
    50% { transform: rotate(12deg); }
  }

  /* Stamped Blue & Black Tin Legs */
  .wrc-leg {
    position: absolute;
    bottom: 0;
    width: 8px;
    height: 16px;
    border-radius: 2px;
    background: linear-gradient(180deg, #2563eb, #1e3a8a);
    border: 1px solid #60a5fa;
    transform-origin: top center;
  }

  .wrc-leg.left { left: 12px; animation: wrc-leg-l 1s ease-in-out infinite; }
  .wrc-leg.right { right: 12px; animation: wrc-leg-r 1s ease-in-out infinite; }

  @keyframes wrc-leg-l {
    0%, 100% { transform: rotate(-10deg); }
    50% { transform: rotate(10deg); }
  }

  @keyframes wrc-leg-r {
    0%, 100% { transform: rotate(10deg); }
    50% { transform: rotate(-10deg); }
  }

  /* Floor Line */
  .wrc-floor {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 8px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #38bdf8 50%, transparent);
    box-shadow: 0 0 4px rgba(56, 189, 248, 0.5);
  }
  `,
};

const windupRobotMarkup = {
  v1: `
      <div class="wr">
        <div class="wr-bot">
          <div class="wr-antenna"></div>
          <div class="wr-head"></div>
          <div class="wr-torso"></div>
          <div class="wr-key">
            <div class="wr-key-arm k1"></div>
            <div class="wr-key-arm k2"></div>
            <div class="wr-key-ring"></div>
          </div>
          <div class="wr-arm left"></div>
          <div class="wr-arm right"></div>
          <div class="wr-leg left"></div>
          <div class="wr-leg right"></div>
        </div>
        <div class="wr-floor"></div>
      </div>
    `,
  v2: `
      <div class="wr">
        <div class="wr-bot">
          <div class="wr-antenna"></div>
          <div class="wr-head"></div>
          <div class="wr-torso"></div>
          <div class="wr-key">
            <div class="wr-key-arm k1"></div>
            <div class="wr-key-arm k2"></div>
            <div class="wr-key-ring"></div>
          </div>
          <div class="wr-arm left"></div>
          <div class="wr-arm right"></div>
          <div class="wr-leg left"></div>
          <div class="wr-leg right"></div>
        </div>
        <div class="wr-floor"></div>
      </div>
    `,
  v3: `
      <div class="wrc">
        <div class="wrc-bot">
          <div class="wrc-antenna"></div>
          <div class="wrc-head"></div>
          <div class="wrc-torso"></div>
          <div class="wrc-key">
            <div class="wrc-key-arm k1"></div>
            <div class="wrc-key-arm k2"></div>
            <div class="wrc-key-ring"></div>
          </div>
          <div class="wrc-arm left"></div>
          <div class="wrc-arm right"></div>
          <div class="wrc-leg left"></div>
          <div class="wrc-leg right"></div>
        </div>
        <div class="wrc-floor"></div>
      </div>
    `,
};

class ConceptWindupRobot extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() { super(); this.attachShadow({ mode: 'open' }); }
  connectedCallback() { this.render(); }
  attributeChangedCallback() { if (this.isConnected) this.render(); }
  render() {
    const version = this.getAttribute('version') || 'v3';
    const styles = windupRobotStyles[version] || windupRobotStyles.v3;
    const markup = windupRobotMarkup[version] || windupRobotMarkup.v3;
    this.shadowRoot.innerHTML = `<style>${styles}</style>${markup}`;
  }
}

if (!customElements.get('concept-windup-robot')) {
  customElements.define('concept-windup-robot', ConceptWindupRobot);
}
