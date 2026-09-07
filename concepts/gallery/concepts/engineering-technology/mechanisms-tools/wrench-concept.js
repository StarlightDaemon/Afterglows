// v1 below is the archived original; v2 fixes three mechanics bugs: the
// nut was "ratcheted home" but stopped 24px short of the flange (the
// flange now sits on a workpiece plate within reach, and the nut seats
// against it with a glow pulse), the descend steps lagged the power
// strokes by 6% of the cycle (now synced to stroke ends), and the loop
// reset teleported nut and wrench 21px back up in plain view (the wrench
// now visibly lifts back to the top of a fresh bolt while the seated nut
// fades out and returns).
const wrenchStyles = {
  v1: `
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
`,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Ratcheting a nut home: three power strokes walk it down the stud
     until it seats against the flange, the wrench lifts back to the
     top, and a fresh nut fades in for the next cycle. */
  .wr {
    width: 104px;
    height: 96px;
    position: relative;
  }

  /* Exposed stud the nut travels down, ending at the flange. */
  .wr-shaft {
    position: absolute;
    left: 50%;
    top: 34px;
    width: 10px;
    height: 30px;
    margin-left: -5px;
    background:
      repeating-linear-gradient(180deg,
        rgba(140, 255, 170, 0.7) 0 2px,
        rgba(0, 80, 16, 0.6) 2px 5px);
    border: 1px solid rgba(0, 204, 0, 0.55);
    border-radius: 2px;
  }

  /* Flange the nut seats against, pulsing once at the seat. */
  .wr-flange {
    position: absolute;
    left: 50%;
    bottom: 28px;
    width: 42px;
    height: 6px;
    margin-left: -21px;
    border-radius: 3px;
    background: rgba(0, 90, 18, 0.8);
    border: 1px solid rgba(0, 204, 0, 0.6);
    animation: wr-seat 6s infinite;
  }

  @keyframes wr-seat {
    0%, 64% { box-shadow: none; }
    68%, 72% { box-shadow: 0 0 10px rgba(0, 204, 0, 0.8); }
    80%, 100% { box-shadow: none; }
  }

  /* Workpiece plate the stud is bolted through. */
  .wr-plate {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 52px;
    height: 20px;
    margin-left: -26px;
    border-radius: 2px;
    border: 1px solid rgba(0, 204, 0, 0.45);
    background:
      repeating-linear-gradient(45deg, rgba(0, 204, 0, 0.15) 0 3px, transparent 3px 8px),
      rgba(0, 30, 6, 0.7);
  }

  /* Nut assembly: steps down at each stroke's end, seats at the
     flange, then fades out and returns to the top while hidden. */
  .wr-bolt {
    position: absolute;
    left: 50%;
    top: 26px;
    width: 0;
    height: 0;
    animation: wr-bolt-y 6s steps(1, end) infinite, wr-bolt-fade 6s infinite;
  }

  @keyframes wr-bolt-y {
    0% { transform: translateY(0); }
    16% { transform: translateY(8px); }
    41% { transform: translateY(16px); }
    66% { transform: translateY(24px); }
    96%, 100% { transform: translateY(0); }
  }

  @keyframes wr-bolt-fade {
    0%, 90% { opacity: 1; }
    94% { opacity: 0; }
    97% { opacity: 0; }
    100% { opacity: 1; }
  }

  /* Hex nut: rotates 60 degrees per stroke, in step with the stroke
     ends (hex symmetry makes each step look identical). */
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
    66%, 100% { transform: rotate(180deg); }
  }

  /* The wrench: three power strokes, then it disengages and rides
     smoothly back up the stud to meet the next nut - no teleport. */
  .wr-tool {
    position: absolute;
    left: 50%;
    top: 26px;
    width: 0;
    height: 0;
    animation: wr-stroke 6s infinite, wr-tool-y 6s infinite;
  }

  @keyframes wr-stroke {
    0%, 6% { rotate: -30deg; }
    16% { rotate: 30deg; }
    /* free backswing */
    25%, 31% { rotate: -30deg; }
    41% { rotate: 30deg; }
    50%, 56% { rotate: -30deg; }
    66%, 74% { rotate: 30deg; }
    /* disengage */
    84%, 100% { rotate: -30deg; }
  }

  @keyframes wr-tool-y {
    0% { transform: translateY(0); animation-timing-function: steps(1, end); }
    16% { transform: translateY(8px); animation-timing-function: steps(1, end); }
    41% { transform: translateY(16px); animation-timing-function: steps(1, end); }
    66% { transform: translateY(24px); }
    76% { transform: translateY(24px); animation-timing-function: ease-in-out; }
    90%, 100% { transform: translateY(0); }
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
    71%, 100% { opacity: 0; }
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
`,
};

const wrenchMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="wr">
        <div class="wr-plate"></div>
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
    `,
};

class ConceptWrench extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${wrenchStyles[version] || wrenchStyles.v2}</style>${wrenchMarkup[version] || wrenchMarkup.v2}`;
  }
}

if (!customElements.get('concept-wrench')) {
  customElements.define('concept-wrench', ConceptWrench);
}
