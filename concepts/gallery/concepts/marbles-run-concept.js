const marblesRunStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .marb {
    width: 116px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  .marb-ramp1 {
    position: absolute;
    left: 12px;
    top: 18px;
    width: 70px;
    height: 4px;
    background: linear-gradient(90deg, rgba(0, 140, 30, 0.9), rgba(0, 80, 16, 0.9));
    border: 1px solid var(--accent, #00cc00);
    border-radius: 2px;
    transform: rotate(8deg);
  }

  .marb-funnel {
    position: absolute;
    right: 14px;
    top: 26px;
    width: 28px;
    height: 20px;
    clip-path: polygon(0 0, 100% 0, 65% 100%, 35% 100%);
    background: radial-gradient(circle at 50% 30%, rgba(140, 255, 170, 0.8), rgba(0, 50, 12, 0.95));
    border: 1px solid var(--accent, #00cc00);
  }

  .marb-ramp2 {
    position: absolute;
    left: 28px;
    top: 50px;
    width: 66px;
    height: 4px;
    background: linear-gradient(270deg, rgba(0, 140, 30, 0.9), rgba(0, 80, 16, 0.9));
    border: 1px solid var(--accent, #00cc00);
    border-radius: 2px;
    transform: rotate(-10deg);
  }

  .marb-rocker {
    position: absolute;
    left: 18px;
    top: 60px;
    width: 22px;
    height: 6px;
    border-radius: 3px;
    background: rgba(190, 255, 205, 0.95);
    border: 1px solid var(--accent, #00cc00);
    transform-origin: center center;
    animation: marb-gate-trip 3.6s ease-in-out infinite;
  }

  @keyframes marb-gate-trip {
    0%, 45% { transform: rotate(-15deg); }
    55%, 90% { transform: rotate(15deg); }
    100% { transform: rotate(-15deg); }
  }

  .marb-bell {
    position: absolute;
    left: 14px;
    top: 52px;
    width: 10px;
    height: 8px;
    border-radius: 50% 50% 0 0;
    background: rgba(140, 255, 170, 0.9);
    border: 1px solid var(--accent, #00cc00);
    transform-origin: bottom center;
    animation: marb-bell-ring 3.6s ease-in-out infinite;
  }

  @keyframes marb-bell-ring {
    0%, 58%, 74%, 100% { transform: scale(1) rotate(0deg); box-shadow: none; }
    62% { transform: scale(1.2) rotate(-8deg); box-shadow: 0 0 8px rgba(190, 255, 205, 0.95); }
    68% { transform: scale(1.2) rotate(8deg); box-shadow: 0 0 8px rgba(190, 255, 205, 0.95); }
  }

  .marb-bowl {
    position: absolute;
    left: 86px;
    top: 86px;
    width: 22px;
    height: 10px;
    border-radius: 0 0 10px 10px;
    background: radial-gradient(ellipse at 50% 0%, rgba(0, 140, 30, 0.7), rgba(0, 40, 8, 0.95));
    border: 1px solid var(--accent, #00cc00);
    border-top: none;
  }

  .marb-stair {
    position: absolute;
    height: 4px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.9);
    border: 1px solid var(--accent, #00cc00);
  }

  .marb-stair.s1 { left: 40px; top: 72px; width: 22px; }
  .marb-stair.s2 { left: 62px; top: 80px; width: 22px; }
  .marb-stair.s3 { left: 84px; top: 88px; width: 22px; }

  .marb-ball {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, rgba(190, 255, 205, 1), rgba(0, 204, 0, 0.9));
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.95);
    z-index: 5;
    animation: marb-run-path 3.6s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
  }

  @keyframes marb-run-path {
    0%   { left: 12px; top: 12px; transform: rotate(0deg) scale(1); }
    18%  { left: 74px; top: 20px; transform: rotate(0deg) scale(1); }
    22%  { left: 92px; top: 24px; transform: rotate(140deg) scale(0.95); }
    26%  { left: 96px; top: 30px; transform: rotate(320deg) scale(0.9); }
    30%  { left: 90px; top: 36px; transform: rotate(500deg) scale(0.85); }
    34%  { left: 93px; top: 40px; transform: rotate(660deg) scale(0.82); }
    40%  { left: 86px; top: 44px; transform: rotate(720deg) scale(1); }
    55%  { left: 24px; top: 54px; transform: rotate(720deg) scale(1); }
    65%  { left: 18px; top: 66px; transform: rotate(720deg) scale(1); }
    75%  { left: 48px; top: 68px; transform: rotate(720deg) scale(1); }
    85%  { left: 70px; top: 76px; transform: rotate(720deg) scale(1); }
    95%  { left: 92px; top: 84px; opacity: 1; transform: rotate(720deg) scale(0.95); }
    100% { left: 98px; top: 90px; opacity: 0; transform: rotate(720deg) scale(0.7); }
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

  /* v2: Cherry & beechwood marble run with cyan acrylic funnel,
     brass chime bell, multi-color xylophone stairs, and iridescent glass marble */
  .marbc {
    width: 116px;
    height: 100px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Top wooden ramp */
  .marbc-ramp1 {
    position: absolute;
    left: 12px;
    top: 18px;
    width: 70px;
    height: 4px;
    background: linear-gradient(90deg, #d97706, #b45309);
    border: 1px solid #facc15;
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
    transform: rotate(8deg);
  }

  /* Cyan acrylic spiral funnel */
  .marbc-funnel {
    position: absolute;
    right: 14px;
    top: 26px;
    width: 28px;
    height: 20px;
    clip-path: polygon(0 0, 100% 0, 65% 100%, 35% 100%);
    background: radial-gradient(circle at 50% 30%, #38bdf8 0%, #0284c7 60%, #0f172a 100%);
    border: 1px solid #7dd3fc;
    box-shadow: 0 0 8px rgba(56, 189, 248, 0.6);
  }

  /* Middle wooden ramp */
  .marbc-ramp2 {
    position: absolute;
    left: 28px;
    top: 50px;
    width: 66px;
    height: 4px;
    background: linear-gradient(270deg, #d97706, #b45309);
    border: 1px solid #facc15;
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
    transform: rotate(-10deg);
  }

  /* Brass rocker gate */
  .marbc-rocker {
    position: absolute;
    left: 18px;
    top: 60px;
    width: 22px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(180deg, #fde047, #ca8a04);
    border: 1px solid #facc15;
    box-shadow: 0 0 4px #eab308;
    transform-origin: center center;
    animation: marbc-gate-trip 3.6s ease-in-out infinite;
  }

  @keyframes marbc-gate-trip {
    0%, 45% { transform: rotate(-15deg); }
    55%, 90% { transform: rotate(15deg); }
    100% { transform: rotate(-15deg); }
  }

  /* Brass bell */
  .marbc-bell {
    position: absolute;
    left: 14px;
    top: 52px;
    width: 10px;
    height: 8px;
    border-radius: 50% 50% 0 0;
    background: linear-gradient(180deg, #fef08a, #ca8a04);
    border: 1px solid #facc15;
    box-shadow: 0 0 4px #fde047;
    transform-origin: bottom center;
    animation: marbc-bell-ring 3.6s ease-in-out infinite;
  }

  @keyframes marbc-bell-ring {
    0%, 58%, 74%, 100% { transform: scale(1) rotate(0deg); box-shadow: 0 0 4px #fde047; }
    62% { transform: scale(1.2) rotate(-8deg); box-shadow: 0 0 12px #fde047; }
    68% { transform: scale(1.2) rotate(8deg); box-shadow: 0 0 12px #fde047; }
  }

  /* Beechwood collection bowl */
  .marbc-bowl {
    position: absolute;
    left: 86px;
    top: 86px;
    width: 22px;
    height: 10px;
    border-radius: 0 0 10px 10px;
    background: radial-gradient(ellipse at 50% 0%, #b45309 0%, #451a03 100%);
    border: 1px solid #ca8a04;
    border-top: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
  }

  /* Multi-color xylophone stair rungs */
  .marbc-stair {
    position: absolute;
    height: 4px;
    border-radius: 2px;
  }

  .marbc-stair.s1 { left: 40px; top: 72px; width: 22px; background: #ef4444; border: 1px solid #fca5a5; box-shadow: 0 0 4px #ef4444; }
  .marbc-stair.s2 { left: 62px; top: 80px; width: 22px; background: #facc15; border: 1px solid #fef08a; box-shadow: 0 0 4px #facc15; }
  .marbc-stair.s3 { left: 84px; top: 88px; width: 22px; background: #22c55e; border: 1px solid #86efac; box-shadow: 0 0 4px #22c55e; }

  /* Iridescent glass marble */
  .marbc-ball {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff 0%, #ec4899 40%, #8b5cf6 100%);
    box-shadow: 0 0 8px #f472b6, 0 0 12px #38bdf8;
    z-index: 5;
    animation: marbc-run-path 3.6s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
  }

  @keyframes marbc-run-path {
    0%   { left: 12px; top: 12px; transform: rotate(0deg) scale(1); }
    18%  { left: 74px; top: 20px; transform: rotate(0deg) scale(1); }
    22%  { left: 92px; top: 24px; transform: rotate(140deg) scale(0.95); }
    26%  { left: 96px; top: 30px; transform: rotate(320deg) scale(0.9); }
    30%  { left: 90px; top: 36px; transform: rotate(500deg) scale(0.85); }
    34%  { left: 93px; top: 40px; transform: rotate(660deg) scale(0.82); }
    40%  { left: 86px; top: 44px; transform: rotate(720deg) scale(1); }
    55%  { left: 24px; top: 54px; transform: rotate(720deg) scale(1); }
    65%  { left: 18px; top: 66px; transform: rotate(720deg) scale(1); }
    75%  { left: 48px; top: 68px; transform: rotate(720deg) scale(1); }
    85%  { left: 70px; top: 76px; transform: rotate(720deg) scale(1); }
    95%  { left: 92px; top: 84px; opacity: 1; transform: rotate(720deg) scale(0.95); }
    100% { left: 98px; top: 90px; opacity: 0; transform: rotate(720deg) scale(0.7); }
  }
  `,
};

const marblesRunMarkup = {
  v1: `
      <div class="marb">
        <div class="marb-ramp1"></div>
        <div class="marb-funnel"></div>
        <div class="marb-ramp2"></div>
        <div class="marb-rocker"></div>
        <div class="marb-bell"></div>
        <div class="marb-stair s1"></div>
        <div class="marb-stair s2"></div>
        <div class="marb-stair s3"></div>
        <div class="marb-bowl"></div>
        <div class="marb-ball"></div>
      </div>
    `,
  v2: `
      <div class="marbc">
        <div class="marbc-ramp1"></div>
        <div class="marbc-funnel"></div>
        <div class="marbc-ramp2"></div>
        <div class="marbc-rocker"></div>
        <div class="marbc-bell"></div>
        <div class="marbc-stair s1"></div>
        <div class="marbc-stair s2"></div>
        <div class="marbc-stair s3"></div>
        <div class="marbc-bowl"></div>
        <div class="marbc-ball"></div>
      </div>
    `,
};

class ConceptMarblesRun extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${marblesRunStyles[version] || marblesRunStyles.v2}</style>${marblesRunMarkup[version] || marblesRunMarkup.v2}`;
  }
}

if (!customElements.get('concept-marbles-run')) {
  customElements.define('concept-marbles-run', ConceptMarblesRun);
}
