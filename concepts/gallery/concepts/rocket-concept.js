const rocketStyles = `
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
`;

class ConceptRocket extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${rocketStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-rocket')) {
  customElements.define('concept-rocket', ConceptRocket);
}
