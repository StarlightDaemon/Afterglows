const wrenchStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Ratcheting a bolt home: the wrench swings 60 degrees under load,
     backswings free, and with every stroke the hex head turns and
     the bolt rides a step down its exposed thread. */
  .wr {
    width: 104px;
    height: 96px;
    position: relative;
  }

  /* Exposed thread shaft the bolt travels down. */
  .wr-shaft {
    position: absolute;
    left: 50%;
    top: 34px;
    width: 10px;
    height: 46px;
    margin-left: -5px;
    background:
      repeating-linear-gradient(180deg,
        rgba(140, 255, 170, 0.7) 0 2px,
        rgba(0, 80, 16, 0.6) 2px 5px);
    border: 1px solid rgba(0, 204, 0, 0.55);
    border-radius: 2px;
  }

  /* Flange at the bottom. */
  .wr-flange {
    position: absolute;
    left: 50%;
    bottom: 6px;
    width: 42px;
    height: 6px;
    margin-left: -21px;
    border-radius: 3px;
    background: rgba(0, 90, 18, 0.8);
    border: 1px solid rgba(0, 204, 0, 0.6);
  }

  /* Bolt assembly: hex head + washer, stepping down. */
  .wr-bolt {
    position: absolute;
    left: 50%;
    top: 26px;
    width: 0;
    height: 0;
    animation: wr-descend 6s steps(1) infinite;
  }

  @keyframes wr-descend {
    0% { transform: translateY(0); }
    22% { transform: translateY(7px); }
    47% { transform: translateY(14px); }
    72% { transform: translateY(21px); }
    97%, 100% { transform: translateY(0); }
  }

  /* Hex head: rotates 60 degrees per stroke (hex symmetry makes each
     step look identical, which is exactly right). */
  .wr-hex {
    position: absolute;
    left: -13px;
    top: -13px;
    width: 26px;
    height: 26px;
    clip-path: polygon(50% 0, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
    background: linear-gradient(180deg, #baffc9, rgba(0, 130, 26, 0.95));
    animation: wr-hexturn 6s infinite;
  }

  /* Face mark so the turn reads. */
  .wr-hex::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 4px;
    width: 2px;
    height: 8px;
    margin-left: -1px;
    background: rgba(2, 12, 5, 0.85);
  }

  @keyframes wr-hexturn {
    0%, 6% { transform: rotate(0deg); }
    16%, 31% { transform: rotate(60deg); }
    41%, 56% { transform: rotate(120deg); }
    66%, 81% { transform: rotate(180deg); }
    91%, 100% { transform: rotate(180deg); }
  }

  /* The wrench: jaw around the hex, handle out to the right. Power
     stroke drives clockwise with the hex; backstroke returns free. */
  .wr-tool {
    position: absolute;
    left: 50%;
    top: 26px;
    width: 0;
    height: 0;
    animation: wr-stroke 6s infinite, wr-descend 6s steps(1) infinite;
  }

  @keyframes wr-stroke {
    0%, 6% { rotate: -30deg; }
    16% { rotate: 30deg; }
    /* free backswing */
    25%, 31% { rotate: -30deg; }
    41% { rotate: 30deg; }
    50%, 56% { rotate: -30deg; }
    66% { rotate: 30deg; }
    75%, 81% { rotate: -30deg; }
    91% { rotate: 30deg; }
    100% { rotate: -30deg; }
  }

  /* Open jaw: a C shape around the hex. */
  .wr-jaw {
    position: absolute;
    left: -16px;
    top: -16px;
    width: 32px;
    height: 32px;
    border: 5px solid rgba(190, 255, 205, 0.9);
    border-radius: 50%;
    border-right-color: transparent;
    box-sizing: border-box;
    transform: rotate(-45deg);
  }

  .wr-handle {
    position: absolute;
    left: 12px;
    top: -3px;
    width: 40px;
    height: 7px;
    border-radius: 3px 4px 4px 3px;
    background: linear-gradient(90deg, rgba(190, 255, 205, 0.9), rgba(0, 140, 28, 0.85));
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.5);
  }

  /* Effort marks that flash at the end of each power stroke. */
  .wr-effort {
    position: absolute;
    left: 74px;
    top: 30px;
    width: 12px;
    height: 12px;
    opacity: 0;
    animation: wr-effort 6s steps(1) infinite;
  }

  .wr-effort::before,
  .wr-effort::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 1px;
    background: rgba(214, 255, 224, 0.9);
  }

  .wr-effort::before { top: 2px; transform: rotate(24deg); }
  .wr-effort::after { bottom: 2px; transform: rotate(-24deg); }

  @keyframes wr-effort {
    0%, 14% { opacity: 0; }
    16%, 19% { opacity: 1; }
    21%, 39% { opacity: 0; }
    41%, 44% { opacity: 1; }
    46%, 64% { opacity: 0; }
    66%, 69% { opacity: 1; }
    71%, 89% { opacity: 0; }
    91%, 94% { opacity: 1; }
    96%, 100% { opacity: 0; }
  }

  /* Torque spec plate. */
  .wr-label {
    position: absolute;
    left: 4px;
    bottom: 0;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: rgba(140, 255, 170, 0.7);
  }
`;

class ConceptWrench extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${wrenchStyles}</style>
      <div class="wr">
        <div class="wr-shaft"></div>
        <div class="wr-flange"></div>
        <div class="wr-effort"></div>
        <div class="wr-tool">
          <div class="wr-jaw"></div>
          <div class="wr-handle"></div>
        </div>
        <div class="wr-bolt">
          <div class="wr-hex"></div>
        </div>
        <div class="wr-label">M12 &#215; 1.75</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-wrench')) {
  customElements.define('concept-wrench', ConceptWrench);
}
