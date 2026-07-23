const bowlingStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A strike frame: the ball rolls up the lane (spinning), smashes
     the pin triangle - pins tumble and scatter - STRIKE lights up,
     then the ball returns and pins reset. */
  .bw {
    width: 116px;
    height: 92px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Lane, narrowing toward the pins (perspective). */
  .bw-lane {
    position: absolute;
    left: 50%;
    bottom: 10px;
    width: 90px;
    height: 68px;
    margin-left: -45px;
    clip-path: polygon(30% 0, 70% 0, 100% 100%, 0 100%);
    background: linear-gradient(0deg, rgba(0, 60, 12, 0.5), rgba(0, 30, 6, 0.6));
    border-left: 1px solid rgba(0, 204, 0, 0.4);
    border-right: 1px solid rgba(0, 204, 0, 0.4);
  }

  /* Gutter lines / arrows. */
  .bw-arrow {
    position: absolute;
    left: 50%;
    bottom: 30px;
    width: 4px;
    height: 6px;
    margin-left: -2px;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    background: rgba(140, 255, 170, 0.5);
  }

  /* Pin triangle at the top; each pin tumbles at the hit. */
  .bw-pin {
    position: absolute;
    width: 6px;
    height: 14px;
    border-radius: 50% 50% 40% 40%;
    background: linear-gradient(180deg, rgba(214, 255, 224, 0.9), rgba(0, 130, 26, 0.8));
    border: 1px solid rgba(0, 204, 0, 0.5);
    transform-origin: 50% 100%;
    animation: bw-pin 5s infinite;
  }

  /* Red neck band. */
  .bw-pin::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 3px;
    height: 2px;
    background: rgba(0, 90, 18, 0.8);
  }

  .bw-pin.p1 { left: 55px; top: 8px; --fx: -30px; --fy: -10px; --fr: -120deg; animation-delay: 0s; }
  .bw-pin.p2 { left: 50px; top: 16px; --fx: -20px; --fy: 6px; --fr: 90deg; animation-delay: 0.02s; }
  .bw-pin.p3 { left: 60px; top: 16px; --fx: 24px; --fy: -8px; --fr: 150deg; animation-delay: 0.04s; }
  .bw-pin.p4 { left: 45px; top: 24px; --fx: -34px; --fy: 4px; --fr: -160deg; animation-delay: 0.06s; }
  .bw-pin.p5 { left: 55px; top: 24px; --fx: 6px; --fy: -14px; --fr: 60deg; animation-delay: 0.05s; }
  .bw-pin.p6 { left: 65px; top: 24px; --fx: 32px; --fy: 8px; --fr: 200deg; animation-delay: 0.07s; }

  @keyframes bw-pin {
    0%, 40% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
    /* Struck: fly and tumble. */
    48% { transform: translate(calc(var(--fx) * 0.5), calc(var(--fy) * 0.5)) rotate(calc(var(--fr) * 0.5)); }
    60% { transform: translate(var(--fx), var(--fy)) rotate(var(--fr)); opacity: 0.7; }
    72% { transform: translate(var(--fx), var(--fy)) rotate(var(--fr)); opacity: 0; }
    /* Reset. */
    88% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
    94%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
  }

  /* The ball: rolls up-lane (small at back), hits, returns. */
  .bw-ball {
    position: absolute;
    left: 50%;
    bottom: 12px;
    width: 18px;
    height: 18px;
    margin-left: -9px;
    border-radius: 50%;
    background: radial-gradient(circle at 36% 30%, rgba(190, 255, 205, 0.85), rgba(0, 120, 24, 0.9) 60%, rgba(0, 60, 12, 0.95));
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.5);
    animation: bw-roll 5s ease-in infinite;
  }

  /* Finger holes. */
  .bw-ball::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 4px;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: rgba(0, 40, 8, 0.9);
    box-shadow: 5px 1px 0 rgba(0, 40, 8, 0.9), 2px 5px 0 rgba(0, 40, 8, 0.9);
  }

  @keyframes bw-roll {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    40% { transform: translateY(-52px) scale(0.5); opacity: 1; }
    /* Through the pins and gone. */
    50% { transform: translateY(-60px) scale(0.42); opacity: 0; }
    /* Ball return: slides back small->big at the front. */
    82% { transform: translateY(0) scale(1); opacity: 0; }
    88% { opacity: 1; }
    100% { transform: translateY(0) scale(1); opacity: 1; }
  }

  /* STRIKE flash. */
  .bw-strike {
    position: absolute;
    left: 0;
    right: 0;
    top: 10px;
    text-align: center;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 3px;
    color: #d6ffe0;
    text-shadow: 0 0 8px rgba(0, 204, 0, 1);
    opacity: 0;
    animation: bw-strike 5s infinite;
  }

  @keyframes bw-strike {
    0%, 56% { opacity: 0; transform: scale(0.7); }
    62% { opacity: 1; transform: scale(1.15); }
    68% { transform: scale(1); }
    80% { opacity: 1; }
    86%, 100% { opacity: 0; }
  }
`;

class ConceptBowling extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bowlingStyles}</style>
      <div class="bw">
        <div class="bw-lane"></div>
        <div class="bw-arrow"></div>
        <div class="bw-pin p1"></div>
        <div class="bw-pin p2"></div>
        <div class="bw-pin p3"></div>
        <div class="bw-pin p4"></div>
        <div class="bw-pin p5"></div>
        <div class="bw-pin p6"></div>
        <div class="bw-ball"></div>
        <div class="bw-strike">STRIKE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-bowling')) {
  customElements.define('concept-bowling', ConceptBowling);
}
