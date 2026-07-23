const golfStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A putt that drops: the putter taps, the ball rolls across the
     green toward the cup, curls on the break, rim-lips the hole, and
     falls in - the flag gives a little celebratory shake. */
  .gf {
    width: 116px;
    height: 88px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Green. */
  .gf-green {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 8px;
    height: 34px;
    border-radius: 40% 40% 0 0 / 100% 100% 0 0;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.4), rgba(0, 80, 16, 0.6));
    border-top: 1px solid rgba(0, 204, 0, 0.5);
  }

  /* The cup + flag, right. */
  .gf-cup {
    position: absolute;
    right: 22px;
    bottom: 30px;
    width: 16px;
    height: 6px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(0, 20, 4, 0.95), rgba(0, 40, 8, 0.8));
    border: 1px solid rgba(140, 255, 170, 0.6);
  }

  .gf-flagpole {
    position: absolute;
    right: 29px;
    bottom: 32px;
    width: 2px;
    height: 42px;
    background: rgba(140, 255, 170, 0.8);
    transform-origin: 50% 100%;
    animation: gf-flagpole 6s ease-in-out infinite;
  }

  .gf-flag {
    position: absolute;
    right: 15px;
    bottom: 64px;
    width: 16px;
    height: 10px;
    clip-path: polygon(0 0, 100% 25%, 60% 50%, 100% 75%, 0 100%);
    background: rgba(190, 255, 205, 0.85);
    transform-origin: 0% 50%;
    animation: gf-flag 6s ease-in-out infinite;
  }

  @keyframes gf-flag {
    0%, 66% { transform: scaleX(1) skewY(0deg); }
    /* Celebration shake after the ball drops. */
    72% { transform: scaleX(1.1) skewY(-6deg); }
    78% { transform: scaleX(0.95) skewY(4deg); }
    84% { transform: scaleX(1.05) skewY(-3deg); }
    90%, 100% { transform: scaleX(1) skewY(0deg); }
  }

  @keyframes gf-flagpole {
    0%, 66% { transform: rotate(0deg); }
    74% { transform: rotate(-2deg); }
    82% { transform: rotate(1deg); }
    90%, 100% { transform: rotate(0deg); }
  }

  /* The putter head taps at the start. */
  .gf-putter {
    position: absolute;
    left: 8px;
    bottom: 28px;
    width: 14px;
    height: 6px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(214, 255, 224, 0.9), rgba(0, 130, 26, 0.9));
    transform-origin: 100% 50%;
    animation: gf-tap 6s infinite;
  }

  .gf-putter::before {
    content: '';
    position: absolute;
    left: 4px;
    top: -22px;
    width: 2px;
    height: 24px;
    background: rgba(140, 255, 170, 0.7);
    transform: rotate(12deg);
    transform-origin: bottom center;
  }

  @keyframes gf-tap {
    0% { transform: rotate(-22deg); }
    5% { transform: rotate(4deg); }
    9% { transform: rotate(-8deg); }
    14%, 100% { transform: rotate(-22deg); }
  }

  /* The ball: rolls right, breaks, lips, drops. */
  .gf-ball {
    position: absolute;
    left: 22px;
    bottom: 30px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 36% 30%, #f2ffdd, #baffc9 70%);
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.6);
    animation: gf-roll 6s ease-out infinite;
  }

  @keyframes gf-roll {
    0%, 8% { transform: translate(0, 0) scale(1); opacity: 1; }
    /* Roll toward the cup, curving up then down on the break. */
    30% { transform: translate(30px, -6px) scale(1); }
    52% { transform: translate(56px, 0) scale(1); }
    /* Lip out and around the rim. */
    60% { transform: translate(62px, -3px) scale(0.95); }
    66% { transform: translate(58px, 2px) scale(0.9); }
    /* Drop in. */
    70% { transform: translate(60px, 4px) scale(0.7); opacity: 1; }
    74% { transform: translate(60px, 8px) scale(0.4); opacity: 0; }
    100% { transform: translate(0, 0) scale(1); opacity: 0; }
  }

  .gf-ball { animation-name: gf-roll, gf-ballvis; animation-duration: 6s, 6s; }

  @keyframes gf-ballvis {
    0% { opacity: 0; }
    6% { opacity: 1; }
    73% { opacity: 1; }
    75%, 92% { opacity: 0; }
    96% { opacity: 1; }
  }

  /* Break arrow hint on the green. */
  .gf-break {
    position: absolute;
    left: 44px;
    bottom: 40px;
    font-size: 7px;
    letter-spacing: 1px;
    color: rgba(140, 255, 170, 0.5);
  }

  /* IN callout. */
  .gf-in {
    position: absolute;
    right: 18px;
    bottom: 44px;
    font-size: 9px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #d6ffe0;
    text-shadow: 0 0 6px rgba(0, 204, 0, 0.9);
    opacity: 0;
    animation: gf-in 6s infinite;
  }

  @keyframes gf-in {
    0%, 72% { opacity: 0; transform: scale(0.6); }
    76% { opacity: 1; transform: scale(1.1); }
    82% { transform: scale(1); }
    90% { opacity: 1; }
    94%, 100% { opacity: 0; }
  }
`;

class ConceptGolf extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${golfStyles}</style>
      <div class="gf">
        <div class="gf-green"></div>
        <div class="gf-break">&#8594; break</div>
        <div class="gf-flagpole"></div>
        <div class="gf-flag"></div>
        <div class="gf-cup"></div>
        <div class="gf-ball"></div>
        <div class="gf-putter"></div>
        <div class="gf-in">IN!</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-golf')) {
  customElements.define('concept-golf', ConceptGolf);
}
