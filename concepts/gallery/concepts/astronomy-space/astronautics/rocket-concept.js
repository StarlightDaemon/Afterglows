const rocketStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .rocket {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
  }

  /* Pad and gantry tower. */
  .rocket-pad {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 10px;
    height: 3px;
    background: linear-gradient(90deg, transparent, rgba(140, 255, 170, 0.6), transparent);
  }

  .rocket-gantry {
    position: absolute;
    bottom: 13px;
    left: 26px;
    width: 7px;
    height: 52px;
    background: repeating-linear-gradient(180deg,
      rgba(140, 255, 170, 0.5) 0 2px, transparent 2px 7px),
      linear-gradient(90deg, rgba(20, 70, 35, 0.7), rgba(10, 36, 17, 0.7));
    border: 1px solid rgba(140, 255, 170, 0.35);
    box-sizing: border-box;
  }

  /* The vehicle: sits, shakes at ignition, lifts off, resets. */
  .rocket-ship {
    position: absolute;
    bottom: 13px;
    left: 50%;
    width: 16px;
    height: 44px;
    margin-left: -4px;
    animation: rocket-lift 7s ease-in infinite;
  }

  .rocket-nose {
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 14px;
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    background: linear-gradient(180deg, #b9ff8e, #2a8a3e);
  }

  .rocket-hull {
    position: absolute;
    top: 13px;
    left: 0;
    width: 16px;
    height: 24px;
    border-radius: 0 0 3px 3px;
    background: linear-gradient(90deg, #123c1e 0%, #2a8a3e 45%, #123c1e 100%);
    border: 1px solid rgba(190, 255, 205, 0.55);
    box-sizing: border-box;
  }

  .rocket-window {
    position: absolute;
    top: 17px;
    left: 5px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #d8ffe2;
    border: 1px solid rgba(20, 70, 35, 0.9);
    box-sizing: border-box;
  }

  .rocket-fin {
    position: absolute;
    bottom: 7px;
    width: 7px;
    height: 12px;
    background: linear-gradient(180deg, #2a8a3e, #123c1e);
  }

  .rocket-fin.left { left: -6px; clip-path: polygon(100% 0%, 100% 100%, 0% 100%); }
  .rocket-fin.right { right: -6px; clip-path: polygon(0% 0%, 0% 100%, 100% 100%); }

  /* Exhaust flame: ignites, flickers, stretches on liftoff. */
  .rocket-flame {
    position: absolute;
    bottom: -12px;
    left: 4px;
    width: 8px;
    height: 14px;
    border-radius: 40% 40% 50% 50%;
    background: linear-gradient(180deg, #e6ffd2 0%, #8be08a 45%, transparent 95%);
    filter: blur(0.6px);
    transform-origin: top center;
    animation: rocket-flame 7s linear infinite;
  }

  /* Billowing smoke at the pad during ignition and climb. */
  .rocket-smoke {
    position: absolute;
    bottom: 8px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(140, 230, 160, 0.4), transparent 70%);
    filter: blur(1.5px);
    opacity: 0;
    animation: rocket-smoke 7s ease-out infinite;
  }

  .rocket-smoke.s1 { left: 34px; --drift: -14px; }
  .rocket-smoke.s2 { left: 56px; --drift: 16px; animation-delay: 0.2s; }
  .rocket-smoke.s3 { left: 45px; --drift: -5px; animation-delay: 0.42s; }

  /* Countdown readout. */
  .rocket-count {
    position: absolute;
    top: 8px;
    right: 8px;
    font-family: monospace;
    font-size: 9px;
    color: rgba(140, 255, 170, 0.8);
    animation: rocket-count 7s steps(1, end) infinite;
  }

  .rocket-count::after {
    content: 'T-3';
    animation: rocket-count-text 7s steps(1, end) infinite;
  }

  /* Timeline: 0-30% hold on pad (shake building), 30% ignition,
     30-42% rise slow, 42-70% accelerate off the top, 70-100% reset. */
  @keyframes rocket-lift {
    0%, 18% { transform: translateY(0); }
    22% { transform: translate(-1px, 0); }
    26% { transform: translate(1px, 0); }
    30% { transform: translate(-1px, 0); }
    42% { transform: translateY(-10px); }
    70%, 84% { transform: translateY(-150px); }
    85%, 100% { transform: translateY(0); }
  }

  @keyframes rocket-flame {
    0%, 27% { opacity: 0; transform: scaleY(0.2); }
    31% { opacity: 1; transform: scaleY(0.7); }
    36% { opacity: 1; transform: scaleY(1.1); }
    40% { opacity: 1; transform: scaleY(0.9); }
    50% { opacity: 1; transform: scaleY(1.5); }
    70%, 84% { opacity: 1; transform: scaleY(1.3); }
    85%, 100% { opacity: 0; transform: scaleY(0.2); }
  }

  @keyframes rocket-smoke {
    0%, 28% { opacity: 0; transform: translate(0, 0) scale(0.5); }
    36% { opacity: 0.9; }
    62% { opacity: 0.4; transform: translate(var(--drift, 10px), -18px) scale(2); }
    80%, 100% { opacity: 0; transform: translate(var(--drift, 10px), -26px) scale(2.4); }
  }

  @keyframes rocket-count { 0%, 100% { opacity: 1; } }

  @keyframes rocket-count-text {
    0% { content: 'T-3'; }
    10% { content: 'T-2'; }
    20% { content: 'T-1'; }
    30%, 84% { content: 'GO!'; }
    85%, 100% { content: 'T-3'; }
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

  /* v2: Apollo/Saturn-era aerospace colorization: gloss white launch vehicle
     with emergency red nose cone and delta fins, steel-lattice crimson gantry,
     cyan window, hypergolic fiery rocket exhaust with supersonic core,
     combustion smoke billowing across a midnight space background. */
  .rocketc {
    width: 104px;
    height: 104px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 30%, #0b132b 0%, #030712 100%);
  }

  /* Launch pad and flame trench platform */
  .rocketc-pad {
    position: absolute;
    left: 18px;
    right: 18px;
    bottom: 10px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #64748b 30%, #94a3b8 50%, #64748b 70%, transparent);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  }

  /* Umbilical service gantry tower */
  .rocketc-gantry {
    position: absolute;
    bottom: 13px;
    left: 24px;
    width: 8px;
    height: 54px;
    background:
      repeating-linear-gradient(180deg,
        #dc2626 0 2px, transparent 2px 7px),
      linear-gradient(90deg, #991b1b, #450a0a);
    border: 1px solid #ef4444;
    box-shadow: 0 0 6px rgba(220, 38, 38, 0.3);
    box-sizing: border-box;
  }

  /* The vehicle: sits, shakes at ignition, lifts off, resets. */
  .rocketc-ship {
    position: absolute;
    bottom: 13px;
    left: 50%;
    width: 16px;
    height: 44px;
    margin-left: -4px;
    animation: rocketc-lift 7s ease-in infinite;
  }

  .rocketc-nose {
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 14px;
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    background: linear-gradient(180deg, #ff453a 0%, #b91c1c 100%);
    box-shadow: 0 0 4px rgba(255, 69, 58, 0.5);
  }

  .rocketc-hull {
    position: absolute;
    top: 13px;
    left: 0;
    width: 16px;
    height: 24px;
    border-radius: 0 0 3px 3px;
    background: linear-gradient(90deg, #cbd5e1 0%, #ffffff 40%, #e2e8f0 70%, #94a3b8 100%);
    border: 1px solid #f8fafc;
    box-sizing: border-box;
  }

  .rocketc-window {
    position: absolute;
    top: 17px;
    left: 5px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #e0f2fe, #0284c7);
    border: 1px solid #0369a1;
    box-shadow: 0 0 6px rgba(56, 189, 248, 0.8);
    box-sizing: border-box;
  }

  .rocketc-fin {
    position: absolute;
    bottom: 7px;
    width: 7px;
    height: 12px;
    background: linear-gradient(180deg, #ef4444, #991b1b);
    box-shadow: 0 0 4px rgba(239, 68, 68, 0.4);
  }

  .rocketc-fin.left { left: -6px; clip-path: polygon(100% 0%, 100% 100%, 0% 100%); }
  .rocketc-fin.right { right: -6px; clip-path: polygon(0% 0%, 0% 100%, 100% 100%); }

  /* Rocket plume with incandescent shock diamonds */
  .rocketc-flame {
    position: absolute;
    bottom: -14px;
    left: 3px;
    width: 10px;
    height: 18px;
    border-radius: 40% 40% 50% 50%;
    background: linear-gradient(180deg, #ffffff 0%, #ffeb3b 30%, #ff9800 65%, #ff3d00 90%, transparent 100%);
    box-shadow: 0 0 14px #ff9800, 0 0 24px rgba(255, 61, 0, 0.7);
    filter: blur(0.4px);
    transform-origin: top center;
    animation: rocketc-flame 7s linear infinite;
  }

  /* Billowing launch pad smoke */
  .rocketc-smoke {
    position: absolute;
    bottom: 8px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(245, 230, 210, 0.65) 0%, rgba(160, 174, 192, 0.4) 60%, transparent 80%);
    filter: blur(1.5px);
    opacity: 0;
    animation: rocketc-smoke 7s ease-out infinite;
  }

  .rocketc-smoke.s1 { left: 32px; --drift: -15px; }
  .rocketc-smoke.s2 { left: 54px; --drift: 18px; animation-delay: 0.2s; }
  .rocketc-smoke.s3 { left: 44px; --drift: -6px; animation-delay: 0.42s; }

  /* Launch Control Countdown HUD */
  .rocketc-count {
    position: absolute;
    top: 8px;
    right: 8px;
    font-family: monospace;
    font-size: 9px;
    font-weight: bold;
    animation: rocketc-count-col 7s steps(1, end) infinite;
  }

  .rocketc-count::after {
    content: 'T-3';
    animation: rocketc-count-text 7s steps(1, end) infinite;
  }

  @keyframes rocketc-lift {
    0%, 18% { transform: translateY(0); }
    22% { transform: translate(-1px, 0); }
    26% { transform: translate(1px, 0); }
    30% { transform: translate(-1px, 0); }
    42% { transform: translateY(-10px); }
    70%, 84% { transform: translateY(-150px); }
    85%, 100% { transform: translateY(0); }
  }

  @keyframes rocketc-flame {
    0%, 27% { opacity: 0; transform: scaleY(0.2); }
    31% { opacity: 1; transform: scaleY(0.7); }
    36% { opacity: 1; transform: scaleY(1.1); }
    40% { opacity: 1; transform: scaleY(0.9); }
    50% { opacity: 1; transform: scaleY(1.5); }
    70%, 84% { opacity: 1; transform: scaleY(1.3); }
    85%, 100% { opacity: 0; transform: scaleY(0.2); }
  }

  @keyframes rocketc-smoke {
    0%, 28% { opacity: 0; transform: translate(0, 0) scale(0.5); }
    36% { opacity: 0.95; }
    62% { opacity: 0.45; transform: translate(var(--drift, 10px), -18px) scale(2); }
    80%, 100% { opacity: 0; transform: translate(var(--drift, 10px), -26px) scale(2.4); }
  }

  @keyframes rocketc-count-col {
    0%, 29% { color: #f59e0b; text-shadow: 0 0 6px rgba(245, 158, 11, 0.8); }
    30%, 84% { color: #10b981; text-shadow: 0 0 8px rgba(16, 185, 129, 0.95); }
    85%, 100% { color: #f59e0b; text-shadow: 0 0 6px rgba(245, 158, 11, 0.8); }
  }

  @keyframes rocketc-count-text {
    0% { content: 'T-3'; }
    10% { content: 'T-2'; }
    20% { content: 'T-1'; }
    30%, 84% { content: 'GO!'; }
    85%, 100% { content: 'T-3'; }
  }
  `,
};

const rocketMarkup = {
  v1: `
    <div class="rocket">
      <div class="rocket-gantry"></div>
      <div class="rocket-smoke s1"></div>
      <div class="rocket-smoke s2"></div>
      <div class="rocket-smoke s3"></div>
      <div class="rocket-ship">
        <div class="rocket-flame"></div>
        <div class="rocket-fin left"></div>
        <div class="rocket-fin right"></div>
        <div class="rocket-nose"></div>
        <div class="rocket-hull"></div>
        <div class="rocket-window"></div>
      </div>
      <div class="rocket-pad"></div>
      <span class="rocket-count"></span>
    </div>
  `,
  v2: `
    <div class="rocketc">
      <div class="rocketc-gantry"></div>
      <div class="rocketc-smoke s1"></div>
      <div class="rocketc-smoke s2"></div>
      <div class="rocketc-smoke s3"></div>
      <div class="rocketc-ship">
        <div class="rocketc-flame"></div>
        <div class="rocketc-fin left"></div>
        <div class="rocketc-fin right"></div>
        <div class="rocketc-nose"></div>
        <div class="rocketc-hull"></div>
        <div class="rocketc-window"></div>
      </div>
      <div class="rocketc-pad"></div>
      <span class="rocketc-count"></span>
    </div>
  `,
};

class ConceptRocket extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${rocketStyles[version] || rocketStyles.v2}</style>${rocketMarkup[version] || rocketMarkup.v2}`;
  }
}

if (!customElements.get('concept-rocket')) {
  customElements.define('concept-rocket', ConceptRocket);
}
