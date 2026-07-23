const crosswalkStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Pedestrian signal on a 9s cycle: WALK with a striding figure,
     then a flashing hand and a 9-to-0 countdown, then steady stop. */
  .cw {
    width: 92px;
    height: 96px;
    position: relative;
  }

  .cw-box {
    position: absolute;
    left: 50%;
    top: 0;
    width: 78px;
    height: 84px;
    margin-left: -39px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(0, 40, 8, 0.6), rgba(0, 18, 4, 0.85));
  }

  .cw-pole {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 4px;
    height: 14px;
    margin-left: -2px;
    background: rgba(0, 204, 0, 0.6);
  }

  /* Left pane: the walker. Torso, head, and two legs that stride. */
  .cw-walker {
    position: absolute;
    left: 10px;
    top: 16px;
    width: 24px;
    height: 46px;
    animation: cw-walk-gate 9s steps(1) infinite;
  }

  @keyframes cw-walk-gate {
    0% { opacity: 1; }
    44% { opacity: 0.12; }
  }

  .cw-head {
    position: absolute;
    top: 0;
    left: 8px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #baffc9;
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.8);
    animation: cw-headbob 0.9s ease-in-out infinite;
  }

  @keyframes cw-headbob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(1.5px); }
  }

  .cw-torso {
    position: absolute;
    top: 9px;
    left: 7px;
    width: 11px;
    height: 18px;
    border-radius: 4px 4px 2px 2px;
    background: #9fe8ae;
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.6);
  }

  /* Legs scissor from the hip. */
  .cw-leg {
    position: absolute;
    top: 25px;
    left: 11px;
    width: 4px;
    height: 18px;
    border-radius: 2px;
    background: #9fe8ae;
    transform-origin: top center;
  }

  .cw-leg.front { animation: cw-leg-front 0.9s ease-in-out infinite; }
  .cw-leg.back { animation: cw-leg-back 0.9s ease-in-out infinite; }

  @keyframes cw-leg-front {
    0%, 100% { transform: rotate(24deg); }
    50% { transform: rotate(-20deg); }
  }

  @keyframes cw-leg-back {
    0%, 100% { transform: rotate(-22deg); }
    50% { transform: rotate(26deg); }
  }

  /* Arm swinging opposite the front leg. */
  .cw-arm {
    position: absolute;
    top: 11px;
    left: 11px;
    width: 3px;
    height: 13px;
    border-radius: 2px;
    background: #7bd88f;
    transform-origin: top center;
    animation: cw-arm 0.9s ease-in-out infinite;
  }

  @keyframes cw-arm {
    0%, 100% { transform: rotate(-24deg); }
    50% { transform: rotate(22deg); }
  }

  /* Right pane: the hand. Flashes during the countdown, then holds. */
  .cw-hand {
    position: absolute;
    right: 12px;
    top: 18px;
    width: 20px;
    height: 24px;
    clip-path: polygon(
      18% 100%, 18% 42%, 6% 30%, 12% 22%, 24% 32%, 24% 12%, 34% 8%, 38% 30%,
      44% 2%, 54% 2%, 56% 30%, 62% 4%, 72% 6%, 72% 32%, 82% 14%, 92% 20%,
      84% 48%, 84% 100%);
    background: rgba(140, 255, 170, 0.9);
    opacity: 0.12;
    animation: cw-hand 9s steps(1) infinite;
  }

  @keyframes cw-hand {
    0% { opacity: 0.12; }
    44% { opacity: 1; }
    48% { opacity: 0.15; }
    52% { opacity: 1; }
    56% { opacity: 0.15; }
    60% { opacity: 1; }
    64% { opacity: 0.15; }
    68% { opacity: 1; }
    /* Steady stop hand to the end of the cycle. */
    72% { opacity: 1; }
  }

  /* Countdown readout under the hand. */
  .cw-count {
    position: absolute;
    right: 14px;
    top: 48px;
    width: 16px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    font-weight: bold;
    color: #d6ffe0;
    text-shadow: 0 0 6px rgba(0, 204, 0, 0.9);
  }

  .cw-count::before {
    content: '';
    animation: cw-count 9s steps(1) infinite;
  }

  @keyframes cw-count {
    0% { content: ''; }
    44% { content: '9'; }
    50% { content: '8'; }
    56% { content: '7'; }
    62% { content: '6'; }
    68% { content: '5'; }
    74% { content: '4'; }
    80% { content: '3'; }
    86% { content: '2'; }
    92% { content: '1'; }
    98% { content: '0'; }
  }

  /* WALK / DONT legend strip along the bottom of the box. */
  .cw-legend {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 2px;
    color: rgba(140, 255, 170, 0.85);
  }

  .cw-legend::before {
    content: 'WALK';
    animation: cw-legend 9s steps(1) infinite;
  }

  @keyframes cw-legend {
    0% { content: 'WALK'; }
    44% { content: 'WAIT'; }
  }
`;

class ConceptCrosswalk extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${crosswalkStyles}</style>
      <div class="cw">
        <div class="cw-pole"></div>
        <div class="cw-box">
          <div class="cw-walker">
            <div class="cw-leg back"></div>
            <div class="cw-torso"></div>
            <div class="cw-arm"></div>
            <div class="cw-leg front"></div>
            <div class="cw-head"></div>
          </div>
          <div class="cw-hand"></div>
          <div class="cw-count"></div>
          <div class="cw-legend"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-crosswalk')) {
  customElements.define('concept-crosswalk', ConceptCrosswalk);
}
