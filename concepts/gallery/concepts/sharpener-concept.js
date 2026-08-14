// Crank pencil sharpener: handle turns, pencil feeds in, curled shavings fall.
// v1 and v2 are preserved.
// v3 adds full color: vintage classroom housing, smoky amber shavings bin,
// yellow No. 2 cedar pencil with pink eraser & brass ferrule, and curled wood shavings.
const sharpenerStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A crank pencil sharpener at work: the handle turns, the pencil
     spins and inches in, curled shavings peel off and fall, and the
     tip emerges honed to a fresh point. */
  .sh {
    width: 116px;
    height: 84px;
    position: relative;
  }

  /* Mounting body of the sharpener, right side. */
  .sh-body {
    position: absolute;
    right: 6px;
    top: 22px;
    width: 34px;
    height: 34px;
    border-radius: 6px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.7), rgba(0, 80, 16, 0.9));
    border: 2px solid var(--accent, #00cc00);
  }

  /* Shavings chamber window. */
  .sh-body::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 8px;
    width: 16px;
    height: 18px;
    border-radius: 3px;
    background: rgba(0, 30, 6, 0.7);
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  /* Crank handle turning. */
  .sh-crank {
    position: absolute;
    right: 2px;
    top: 39px;
    width: 0;
    height: 0;
    animation: sh-turn 1.4s linear infinite;
  }

  @keyframes sh-turn {
    to { transform: rotate(360deg); }
  }

  .sh-crank-arm {
    position: absolute;
    top: -1.5px;
    left: 0;
    width: 18px;
    height: 3px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
    transform-origin: 0% 50%;
  }

  .sh-crank-knob {
    position: absolute;
    left: 16px;
    top: -3px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #d6ffe0, #2a8a3e 75%);
  }

  /* The pencil: spins and creeps rightward into the sharpener (tip
     hidden inside the body while it grinds), then pulls back at the
     cycle's end to show off the fresh point. */
  .sh-pencil {
    position: absolute;
    left: 18px;
    top: 33px;
    width: 68px;
    height: 12px;
    animation: sh-feed 5s ease-in-out infinite;
  }

  /* Barrel: hex facets via banded gradient; the band scroll reads as
     rotation. */
  .sh-barrel {
    position: absolute;
    left: 0;
    top: 0;
    width: 50px;
    height: 12px;
    border-radius: 2px 0 0 2px;
    background:
      linear-gradient(180deg, rgba(0,0,0,0.25), transparent 30%, transparent 70%, rgba(0,0,0,0.25)),
      repeating-linear-gradient(90deg,
        rgba(190, 255, 205, 0.85) 0 5px,
        rgba(0, 110, 22, 0.85) 5px 10px);
    border: 1px solid rgba(0, 204, 0, 0.6);
    animation: sh-spin 0.5s linear infinite;
  }

  @keyframes sh-spin {
    to { background-position: 0 0, 10px 0; }
  }

  /* Eraser end. */
  .sh-eraser {
    position: absolute;
    left: -6px;
    top: 1px;
    width: 6px;
    height: 10px;
    border-radius: 3px 0 0 3px;
    background: rgba(140, 255, 170, 0.8);
  }

  /* The sharpened wood cone + graphite tip. */
  .sh-tip {
    position: absolute;
    left: 50px;
    top: 0;
    width: 16px;
    height: 12px;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    background: linear-gradient(90deg, rgba(0, 150, 30, 0.7), rgba(214, 255, 224, 0.9));
    animation: sh-tip 5s ease-in-out infinite;
  }

  /* Tip goes from blunt (short cone) to sharp (long cone). */
  @keyframes sh-tip {
    0%, 10% { width: 8px; }
    60% { width: 18px; }
    92% { width: 18px; }
    96%, 100% { width: 8px; }
  }

  @keyframes sh-feed {
    0%, 10% { transform: translateX(0); }
    60% { transform: translateX(8px); }
    82% { transform: translateX(8px); }
    /* Withdraw to reveal the fresh point, then a new pencil goes in. */
    88% { transform: translateX(-22px); }
    94% { transform: translateX(-22px); }
    100% { transform: translateX(0); }
  }

  /* Curled shavings peeling off and falling. */
  .sh-shaving {
    position: absolute;
    right: 30px;
    top: 40px;
    width: 8px;
    height: 8px;
    border: 1.5px solid rgba(190, 255, 205, 0.8);
    border-radius: 50% 50% 50% 0;
    border-right-color: transparent;
    opacity: 0;
    animation: sh-shaving 1.6s ease-in infinite;
  }

  .sh-shaving.v2 { animation-delay: -0.6s; right: 34px; }
  .sh-shaving.v3 { animation-delay: -1.1s; right: 26px; }

  @keyframes sh-shaving {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
    20% { opacity: 0.9; }
    100% { transform: translate(-6px, 26px) rotate(160deg); opacity: 0; }
  }

  /* Shaving pile growing below. */
  .sh-pile {
    position: absolute;
    right: 20px;
    bottom: 8px;
    width: 22px;
    height: 6px;
    border-radius: 50% 50% 0 0;
    background: rgba(140, 255, 170, 0.45);
    transform-origin: bottom center;
    animation: sh-pile 5s infinite;
  }

  @keyframes sh-pile {
    0% { transform: scale(0.2, 0.3); }
    82% { transform: scale(1, 1); }
    88% { transform: scale(1, 1); }
    92%, 100% { transform: scale(0.2, 0.3); }
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

  /* A crank pencil sharpener at work: the handle turns, the pencil
     spins and inches in, curled shavings peel off and fall, and the
     tip emerges honed to a fresh point. */
  .sh {
    width: 116px;
    height: 84px;
    position: relative;
  }

  /* Mounting body of the sharpener, right side. */
  .sh-body {
    position: absolute;
    right: 6px;
    top: 22px;
    width: 34px;
    height: 34px;
    border-radius: 6px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.7), rgba(0, 80, 16, 0.9));
    border: 2px solid var(--accent, #00cc00);
  }

  /* Shavings chamber window, low in the body so it doesn't read as the
     intake. */
  .sh-body::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 18px;
    width: 16px;
    height: 12px;
    border-radius: 3px;
    background: rgba(0, 30, 6, 0.7);
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  /* Intake collar on the body's left face, exactly on the pencil axis. */
  .sh-intake {
    position: absolute;
    right: 38px;
    top: 32px;
    width: 5px;
    height: 14px;
    border-radius: 3px 0 0 3px;
    background: #041a0a;
    border: 1.5px solid rgba(140, 255, 170, 0.8);
    border-right: none;
    z-index: 2;
  }

  /* Crank handle turning, its axle flush on the body's right face. */
  .sh-crank {
    position: absolute;
    right: 6px;
    top: 39px;
    width: 0;
    height: 0;
    animation: sh-turn 1.4s linear infinite;
  }

  .sh-crank::before {
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

  @keyframes sh-turn {
    to { transform: rotate(360deg); }
  }

  .sh-crank-arm {
    position: absolute;
    top: -1.5px;
    left: 0;
    width: 18px;
    height: 3px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.85);
    transform-origin: 0% 50%;
  }

  .sh-crank-knob {
    position: absolute;
    left: 16px;
    top: -3px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #d6ffe0, #2a8a3e 75%);
  }

  /* The pencil: spins and creeps rightward into the sharpener (tip
     hidden inside the body while it grinds), then pulls back at the
     cycle's end to show off the fresh point. */
  .sh-pencil {
    position: absolute;
    left: 18px;
    top: 33px;
    width: 68px;
    height: 12px;
    animation: sh-feed 5s ease-in-out infinite;
  }

  /* Barrel: hex facets via banded gradient; the band scroll reads as
     rotation. */
  .sh-barrel {
    position: absolute;
    left: 0;
    top: 0;
    width: 50px;
    height: 12px;
    border-radius: 2px 0 0 2px;
    background:
      linear-gradient(180deg, rgba(0,0,0,0.25), transparent 30%, transparent 70%, rgba(0,0,0,0.25)),
      repeating-linear-gradient(90deg,
        rgba(190, 255, 205, 0.85) 0 5px,
        rgba(0, 110, 22, 0.85) 5px 10px);
    border: 1px solid rgba(0, 204, 0, 0.6);
    animation: sh-spin 0.5s linear infinite;
  }

  @keyframes sh-spin {
    to { background-position: 0 0, 10px 0; }
  }

  /* Eraser end. */
  .sh-eraser {
    position: absolute;
    left: -6px;
    top: 1px;
    width: 6px;
    height: 10px;
    border-radius: 3px 0 0 3px;
    background: rgba(140, 255, 170, 0.8);
  }

  /* The sharpened wood cone + graphite tip. */
  .sh-tip {
    position: absolute;
    left: 50px;
    top: 0;
    width: 16px;
    height: 12px;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    background: linear-gradient(90deg, rgba(0, 150, 30, 0.7), rgba(214, 255, 224, 0.9));
    animation: sh-tip 5s ease-in-out infinite;
  }

  /* Tip goes from blunt (short cone) to sharp (long cone). */
  @keyframes sh-tip {
    0%, 10% { width: 8px; }
    60% { width: 18px; }
    92% { width: 18px; }
    96%, 100% { width: 8px; }
  }

  @keyframes sh-feed {
    0%, 10% { transform: translateX(0); }
    60% { transform: translateX(8px); }
    82% { transform: translateX(8px); }
    /* Withdraw to reveal the fresh point, then a new pencil goes in. */
    88% { transform: translateX(-22px); }
    94% { transform: translateX(-22px); }
    100% { transform: translateX(0); }
  }

  /* Curled shavings peeling off and falling. */
  .sh-shaving {
    position: absolute;
    right: 30px;
    top: 40px;
    width: 8px;
    height: 8px;
    border: 1.5px solid rgba(190, 255, 205, 0.8);
    border-radius: 50% 50% 50% 0;
    border-right-color: transparent;
    opacity: 0;
    animation: sh-shaving 1.6s ease-in infinite;
  }

  .sh-shaving.v2 { animation-delay: -0.6s; right: 34px; }
  .sh-shaving.v3 { animation-delay: -1.1s; right: 26px; }

  @keyframes sh-shaving {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
    20% { opacity: 0.9; }
    100% { transform: translate(-6px, 26px) rotate(160deg); opacity: 0; }
  }

  /* Shaving pile growing below. */
  .sh-pile {
    position: absolute;
    right: 20px;
    bottom: 8px;
    width: 22px;
    height: 6px;
    border-radius: 50% 50% 0 0;
    background: rgba(140, 255, 170, 0.45);
    transform-origin: bottom center;
    animation: sh-pile 5s infinite;
  }

  @keyframes sh-pile {
    0% { transform: scale(0.2, 0.3); }
    82% { transform: scale(1, 1); }
    88% { transform: scale(1, 1); }
    92%, 100% { transform: scale(0.2, 0.3); }
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

  /* v3: Vintage classroom mechanical pencil sharpener with
     amber shavings bin, No. 2 yellow pencil, pink eraser, and cedar shavings */
  .shc {
    width: 116px;
    height: 84px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Cast Iron / Olive Green Sharpener Body */
  .shc-body {
    position: absolute;
    right: 6px;
    top: 22px;
    width: 34px;
    height: 34px;
    border-radius: 6px;
    background: linear-gradient(180deg, #334155 0%, #1e293b 60%, #0f172a 100%);
    border: 2px solid #64748b;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
  }

  /* Smoky Amber Shavings Chamber Window */
  .shc-body::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 18px;
    width: 16px;
    height: 12px;
    border-radius: 3px;
    background: rgba(217, 119, 6, 0.45);
    border: 1px solid #d97706;
    box-shadow: inset 0 0 4px #b45309;
  }

  /* Steel Intake Collar */
  .shc-intake {
    position: absolute;
    right: 38px;
    top: 32px;
    width: 5px;
    height: 14px;
    border-radius: 3px 0 0 3px;
    background: #020617;
    border: 1.5px solid #cbd5e1;
    border-right: none;
    z-index: 2;
  }

  /* Chrome Hand Crank Assembly */
  .shc-crank {
    position: absolute;
    right: 6px;
    top: 39px;
    width: 0;
    height: 0;
    animation: shc-turn 1.4s linear infinite;
  }

  .shc-crank::before {
    content: '';
    position: absolute;
    left: -3px;
    top: -3px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #1e293b;
    border: 1.5px solid #f1f5f9;
  }

  @keyframes shc-turn {
    to { transform: rotate(360deg); }
  }

  .shc-crank-arm {
    position: absolute;
    top: -1.5px;
    left: 0;
    width: 18px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, #f1f5f9, #94a3b8);
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.4);
    transform-origin: 0% 50%;
  }

  .shc-crank-knob {
    position: absolute;
    left: 16px;
    top: -3px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #4ade80, #15803d 75%);
    border: 0.5px solid #86efac;
  }

  /* Pencil Feed Assembly */
  .shc-pencil {
    position: absolute;
    left: 18px;
    top: 33px;
    width: 68px;
    height: 12px;
    animation: shc-feed 5s ease-in-out infinite;
  }

  /* Classic Yellow No. 2 Pencil Barrel */
  .shc-barrel {
    position: absolute;
    left: 0;
    top: 0;
    width: 50px;
    height: 12px;
    border-radius: 2px 0 0 2px;
    background:
      linear-gradient(180deg, rgba(0,0,0,0.3), transparent 30%, transparent 70%, rgba(0,0,0,0.3)),
      repeating-linear-gradient(90deg,
        #facc15 0 5px,
        #eab308 5px 10px);
    border: 1px solid #ca8a04;
    animation: shc-spin 0.5s linear infinite;
  }

  @keyframes shc-spin {
    to { background-position: 0 0, 10px 0; }
  }

  /* Pink Rubber Eraser & Brass Ferrule */
  .shc-eraser {
    position: absolute;
    left: -6px;
    top: 1px;
    width: 6px;
    height: 10px;
    border-radius: 3px 0 0 3px;
    background: #f472b6;
    border-left: 1px solid #ec4899;
    box-shadow: inset 1px 0 0 #fde047;
  }

  /* Honed Cedar Wood Cone + Graphite Core */
  .shc-tip {
    position: absolute;
    left: 50px;
    top: 0;
    width: 16px;
    height: 12px;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    background: linear-gradient(90deg, #fed7aa 0%, #fde68a 70%, #0f172a 75%, #020617 100%);
    animation: shc-tip 5s ease-in-out infinite;
  }

  @keyframes shc-tip {
    0%, 10% { width: 8px; }
    60% { width: 18px; }
    92% { width: 18px; }
    96%, 100% { width: 8px; }
  }

  @keyframes shc-feed {
    0%, 10% { transform: translateX(0); }
    60% { transform: translateX(8px); }
    82% { transform: translateX(8px); }
    88% { transform: translateX(-22px); }
    94% { transform: translateX(-22px); }
    100% { transform: translateX(0); }
  }

  /* Natural Curled Cedar Wood Shavings */
  .shc-shaving {
    position: absolute;
    right: 30px;
    top: 40px;
    width: 8px;
    height: 8px;
    border: 1.5px solid #f59e0b;
    border-radius: 50% 50% 50% 0;
    border-right-color: transparent;
    opacity: 0;
    animation: shc-shaving 1.6s ease-in infinite;
  }

  .shc-shaving.v2 { animation-delay: -0.6s; right: 34px; border-color: #d97706; border-right-color: transparent; }
  .shc-shaving.v3 { animation-delay: -1.1s; right: 26px; border-color: #fbbf24; border-right-color: transparent; }

  @keyframes shc-shaving {
    0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
    20% { opacity: 1; }
    100% { transform: translate(-6px, 26px) rotate(160deg); opacity: 0; }
  }

  /* Growing Shavings Pile */
  .shc-pile {
    position: absolute;
    right: 20px;
    bottom: 8px;
    width: 22px;
    height: 6px;
    border-radius: 50% 50% 0 0;
    background: linear-gradient(180deg, #f59e0b, #b45309);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
    transform-origin: bottom center;
    animation: shc-pile 5s infinite;
  }

  @keyframes shc-pile {
    0% { transform: scale(0.2, 0.3); }
    82% { transform: scale(1, 1); }
    88% { transform: scale(1, 1); }
    92%, 100% { transform: scale(0.2, 0.3); }
  }
  `,
};

const sharpenerMarkup = {
  v1: `
      <div class="sh">
        <div class="sh-shaving"></div>
        <div class="sh-shaving v2"></div>
        <div class="sh-shaving v3"></div>
        <div class="sh-pile"></div>
        <div class="sh-pencil">
          <div class="sh-eraser"></div>
          <div class="sh-barrel"></div>
          <div class="sh-tip"></div>
        </div>
        <div class="sh-body"></div>
        <div class="sh-crank">
          <div class="sh-crank-arm"></div>
          <div class="sh-crank-knob"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="sh">
        <div class="sh-shaving"></div>
        <div class="sh-shaving v2"></div>
        <div class="sh-shaving v3"></div>
        <div class="sh-pile"></div>
        <div class="sh-pencil">
          <div class="sh-eraser"></div>
          <div class="sh-barrel"></div>
          <div class="sh-tip"></div>
        </div>
        <div class="sh-body"></div>
        <div class="sh-intake"></div>
        <div class="sh-crank">
          <div class="sh-crank-arm"></div>
          <div class="sh-crank-knob"></div>
        </div>
      </div>
    `,
  v3: `
      <div class="shc">
        <div class="shc-shaving"></div>
        <div class="shc-shaving v2"></div>
        <div class="shc-shaving v3"></div>
        <div class="shc-pile"></div>
        <div class="shc-pencil">
          <div class="shc-eraser"></div>
          <div class="shc-barrel"></div>
          <div class="shc-tip"></div>
        </div>
        <div class="shc-body"></div>
        <div class="shc-intake"></div>
        <div class="shc-crank">
          <div class="shc-crank-arm"></div>
          <div class="shc-crank-knob"></div>
        </div>
      </div>
    `,
};

class ConceptSharpener extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${sharpenerStyles[version] || sharpenerStyles.v3}</style>${sharpenerMarkup[version] || sharpenerMarkup.v3}`;
  }
}

if (!customElements.get('concept-sharpener')) {
  customElements.define('concept-sharpener', ConceptSharpener);
}
