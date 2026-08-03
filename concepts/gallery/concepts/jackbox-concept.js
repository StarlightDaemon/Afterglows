// v1 is the archived original (unclipped jack, hat as a sibling of the
// head); v2 clips the jester inside the box and fixes the hinge read.
const jackboxStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Jack-in-the-box: the crank turns as a little tune plays (notes
     drifting up), tension builds, then the lid flies open and the
     spring-necked jester springs up bobbing - before folding back in
     to wind again. */
  .jb {
    width: 100px;
    height: 96px;
    position: relative;
  }

  /* Box. */
  .jb-box {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 56px;
    height: 44px;
    margin-left: -28px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.7), rgba(0, 70, 14, 0.9));
    border: 2px solid var(--accent, #00cc00);
    overflow: hidden;
  }

  /* Decorative panel. */
  .jb-box::after {
    content: '';
    position: absolute;
    left: 8px;
    right: 8px;
    top: 8px;
    bottom: 8px;
    border: 1px solid rgba(140, 255, 170, 0.4);
    border-radius: 2px;
    background:
      repeating-linear-gradient(45deg,
        rgba(0, 204, 0, 0.12) 0 4px,
        transparent 4px 8px);
  }

  /* Lid: hinged at the back, flies open at the pop. */
  .jb-lid {
    position: absolute;
    left: 50%;
    bottom: 50px;
    width: 58px;
    height: 8px;
    margin-left: -29px;
    border-radius: 3px 3px 0 0;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.8), rgba(0, 130, 26, 0.85));
    border: 2px solid var(--accent, #00cc00);
    transform-origin: 0% 100%;
    animation: jb-lid 5s ease-out infinite;
    z-index: 4;
  }

  @keyframes jb-lid {
    0%, 54% { transform: rotate(0deg); }
    60% { transform: rotate(-116deg); }
    82% { transform: rotate(-116deg); }
    /* Slam shut. */
    90% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }

  /* Jack: spring + head, springs up out of the box. */
  .jb-jack {
    position: absolute;
    left: 50%;
    bottom: 48px;
    width: 24px;
    height: 0;
    margin-left: -12px;
    animation: jb-jack 5s ease-out infinite;
    z-index: 3;
  }

  @keyframes jb-jack {
    0%, 56% { height: 0; }
    /* Boing up with overshoot. */
    62% { height: 42px; }
    68% { height: 34px; }
    74% { height: 40px; }
    80% { height: 36px; }
    /* Retract. */
    88% { height: 0; }
    100% { height: 0; }
  }

  /* Coil spring drawn along the jack height. */
  .jb-spring {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 16px;
    margin-left: -8px;
    top: 8px;
    background:
      repeating-linear-gradient(180deg,
        transparent 0 2px,
        rgba(140, 255, 170, 0.75) 2px 4px);
    border-radius: 2px;
  }

  /* Jester head at the top of the jack. */
  .jb-head {
    position: absolute;
    left: 50%;
    top: -4px;
    width: 20px;
    height: 16px;
    margin-left: -10px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #f2ffdd, #9ade5a 65%);
    border: 1px solid rgba(0, 204, 0, 0.5);
    animation: jb-bob 0.4s ease-in-out infinite;
  }

  /* Face. */
  .jb-head::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 6px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #041a0a;
    box-shadow: 8px 0 0 #041a0a;
  }

  .jb-head::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 10px;
    width: 8px;
    height: 3px;
    border-radius: 0 0 6px 6px;
    background: rgba(0, 90, 18, 0.9);
  }

  @keyframes jb-bob {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }

  /* Jester hat with bell tips. */
  .jb-hat {
    position: absolute;
    left: 50%;
    top: -10px;
    width: 22px;
    height: 8px;
    margin-left: -11px;
    clip-path: polygon(50% 100%, 0 40%, 15% 0, 40% 40%, 60% 0, 85% 40%, 100% 40%);
    background: rgba(190, 255, 205, 0.85);
  }

  /* Music notes drifting up during the wind. */
  .jb-note {
    position: absolute;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    color: #baffc9;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.8);
    opacity: 0;
    animation: jb-note 5s infinite;
  }

  .jb-note.n1 { left: 20px; bottom: 44px; }
  .jb-note.n2 { left: 68px; bottom: 40px; animation-delay: 0.8s; }
  .jb-note.n3 { left: 42px; bottom: 46px; animation-delay: 1.6s; }

  @keyframes jb-note {
    0%, 4% { transform: translateY(0); opacity: 0; }
    12% { opacity: 1; }
    /* Notes stop when the pop happens (~56%). */
    30% { transform: translateY(-16px) translateX(3px); opacity: 0; }
    56%, 100% { opacity: 0; }
  }

  /* Crank on the side, turning during the wind. */
  .jb-crank {
    position: absolute;
    right: 14px;
    bottom: 26px;
    width: 0;
    height: 0;
    animation: jb-crank 5s linear infinite;
  }

  @keyframes jb-crank {
    0%, 54% { transform: rotate(var(--r, 0deg)); }
    100% { transform: rotate(0deg); }
  }

  .jb-crank-arm {
    position: absolute;
    top: -1px;
    left: 0;
    width: 12px;
    height: 2px;
    background: rgba(140, 255, 170, 0.85);
    transform-origin: 0% 50%;
    animation: jb-crankspin 1.2s linear infinite;
  }

  @keyframes jb-crankspin {
    to { transform: rotate(360deg); }
  }

  .jb-crank-knob {
    position: absolute;
    left: 11px;
    top: -2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #d6ffe0;
  }

  /* Pop flash. */
  .jb-flash {
    position: absolute;
    left: 50%;
    bottom: 56px;
    width: 30px;
    height: 30px;
    margin-left: -15px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(214, 255, 224, 0.5), transparent 70%);
    opacity: 0;
    animation: jb-flash 5s steps(1) infinite;
    z-index: 2;
  }

  @keyframes jb-flash {
    0%, 56% { opacity: 0; }
    58%, 62% { opacity: 1; }
    66%, 100% { opacity: 0; }
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

  /* Jack-in-the-box: the crank turns as a little tune plays (notes
     drifting up), tension builds, then the lid flies open and the
     spring-necked jester springs up bobbing - before folding back in
     to wind again. */
  .jb {
    width: 100px;
    height: 96px;
    position: relative;
  }

  /* Box. */
  .jb-box {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 56px;
    height: 44px;
    margin-left: -28px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.7), rgba(0, 70, 14, 0.9));
    border: 2px solid var(--accent, #00cc00);
    overflow: hidden;
  }

  /* Decorative panel. */
  .jb-box::after {
    content: '';
    position: absolute;
    left: 8px;
    right: 8px;
    top: 8px;
    bottom: 8px;
    border: 1px solid rgba(140, 255, 170, 0.4);
    border-radius: 2px;
    background:
      repeating-linear-gradient(45deg,
        rgba(0, 204, 0, 0.12) 0 4px,
        transparent 4px 8px);
  }

  /* Lid: hinged at the back, flies open at the pop. */
  .jb-lid {
    position: absolute;
    left: 50%;
    bottom: 52px;
    width: 58px;
    height: 8px;
    margin-left: -29px;
    border-radius: 3px 3px 0 0;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.8), rgba(0, 130, 26, 0.85));
    border: 2px solid var(--accent, #00cc00);
    transform-origin: 0% 100%;
    animation: jb-lid 5s ease-out infinite;
    z-index: 4;
  }

  /* Hinge pin where the lid meets the box's top-left corner. */
  .jb-lid::after {
    content: '';
    position: absolute;
    left: -2px;
    bottom: -2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #d6ffe0;
  }

  @keyframes jb-lid {
    0%, 54% { transform: rotate(0deg); }
    60% { transform: rotate(-95deg); }
    82% { transform: rotate(-95deg); }
    /* Slam shut with a bounce. */
    88% { transform: rotate(3deg); }
    92%, 100% { transform: rotate(0deg); }
  }

  /* Jack: spring + head, springs up out of the box. */
  /* The jack rises out of the box mouth; overflow clips the jester
     inside while wound down (it used to show through the closed box). */
  .jb-jack {
    position: absolute;
    left: 50%;
    bottom: 48px;
    width: 24px;
    height: 0;
    margin-left: -12px;
    overflow: hidden;
    animation: jb-jack 5s ease-out infinite;
    z-index: 3;
  }

  @keyframes jb-jack {
    0%, 56% { height: 0; }
    /* Boing up with overshoot. */
    62% { height: 46px; }
    68% { height: 38px; }
    74% { height: 44px; }
    80% { height: 40px; }
    /* Retract. */
    88% { height: 0; }
    100% { height: 0; }
  }

  /* Coil spring drawn from under the head down to the box mouth. */
  .jb-spring {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 16px;
    margin-left: -8px;
    top: 26px;
    background:
      repeating-linear-gradient(180deg,
        transparent 0 2px,
        rgba(140, 255, 170, 0.75) 2px 4px);
    border-radius: 2px;
  }

  /* Jester head pinned to the TOP of the jack so the clip window
     swallows it as the height collapses. */
  .jb-head {
    position: absolute;
    left: 50%;
    top: 9px;
    width: 20px;
    height: 16px;
    margin-left: -10px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #f2ffdd, #9ade5a 65%);
    border: 1px solid rgba(0, 204, 0, 0.5);
    animation: jb-bob 0.4s ease-in-out infinite;
  }

  /* Face. */
  .jb-head::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 6px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #041a0a;
    box-shadow: 8px 0 0 #041a0a;
  }

  .jb-head::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 10px;
    width: 8px;
    height: 3px;
    border-radius: 0 0 6px 6px;
    background: rgba(0, 90, 18, 0.9);
  }

  @keyframes jb-bob {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }

  /* Jester hat with bell tips — a child of the head so it bobs along. */
  .jb-hat {
    position: absolute;
    left: 50%;
    top: -7px;
    width: 22px;
    height: 8px;
    margin-left: -11px;
    clip-path: polygon(50% 100%, 0 40%, 15% 0, 40% 40%, 60% 0, 85% 40%, 100% 40%);
    background: rgba(190, 255, 205, 0.85);
  }

  /* Music notes drifting up during the wind. */
  .jb-note {
    position: absolute;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    color: #baffc9;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.8);
    opacity: 0;
    animation: jb-note 5s infinite;
  }

  .jb-note.n1 { left: 20px; bottom: 44px; }
  .jb-note.n2 { left: 68px; bottom: 40px; animation-delay: 0.8s; }
  .jb-note.n3 { left: 42px; bottom: 46px; animation-delay: 1.6s; }

  @keyframes jb-note {
    0%, 4% { transform: translateY(0); opacity: 0; }
    12% { opacity: 1; }
    /* Notes stop when the pop happens (~56%). */
    30% { transform: translateY(-16px) translateX(3px); opacity: 0; }
    56%, 100% { opacity: 0; }
  }

  /* Crank on the side, its axle planted on the box wall. */
  .jb-crank {
    position: absolute;
    right: 22px;
    bottom: 28px;
    width: 0;
    height: 0;
    animation: jb-crank 5s linear infinite;
  }

  /* Axle boss where the crank meets the box. */
  .jb-crank::before {
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

  @keyframes jb-crank {
    0%, 54% { transform: rotate(var(--r, 0deg)); }
    100% { transform: rotate(0deg); }
  }

  .jb-crank-arm {
    position: absolute;
    top: -1px;
    left: 0;
    width: 12px;
    height: 2px;
    background: rgba(140, 255, 170, 0.85);
    transform-origin: 0% 50%;
    animation: jb-crankspin 1.2s linear infinite;
  }

  @keyframes jb-crankspin {
    to { transform: rotate(360deg); }
  }

  .jb-crank-knob {
    position: absolute;
    left: 11px;
    top: -2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #d6ffe0;
  }

  /* Pop flash. */
  .jb-flash {
    position: absolute;
    left: 50%;
    bottom: 56px;
    width: 30px;
    height: 30px;
    margin-left: -15px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(214, 255, 224, 0.5), transparent 70%);
    opacity: 0;
    animation: jb-flash 5s steps(1) infinite;
    z-index: 2;
  }

  @keyframes jb-flash {
    0%, 56% { opacity: 0; }
    58%, 62% { opacity: 1; }
    66%, 100% { opacity: 0; }
  }
`,
};

const jackboxMarkup = {
  v1: `
      <div class="jb">
        <div class="jb-note n1">&#9834;</div>
        <div class="jb-note n2">&#9835;</div>
        <div class="jb-note n3">&#9834;</div>
        <div class="jb-flash"></div>
        <div class="jb-jack">
          <div class="jb-spring"></div>
          <div class="jb-head"></div>
          <div class="jb-hat"></div>
        </div>
        <div class="jb-box"></div>
        <div class="jb-lid"></div>
        <div class="jb-crank">
          <div class="jb-crank-arm"></div>
          <div class="jb-crank-knob"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="jb">
        <div class="jb-note n1">&#9834;</div>
        <div class="jb-note n2">&#9835;</div>
        <div class="jb-note n3">&#9834;</div>
        <div class="jb-flash"></div>
        <div class="jb-jack">
          <div class="jb-spring"></div>
          <div class="jb-head">
            <div class="jb-hat"></div>
          </div>
        </div>
        <div class="jb-box"></div>
        <div class="jb-lid"></div>
        <div class="jb-crank">
          <div class="jb-crank-arm"></div>
          <div class="jb-crank-knob"></div>
        </div>
      </div>
    `,
};

class ConceptJackbox extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${jackboxStyles[version] || jackboxStyles.v2}</style>${jackboxMarkup[version] || jackboxMarkup.v2}`;
  }
}

if (!customElements.get('concept-jackbox')) {
  customElements.define('concept-jackbox', ConceptJackbox);
}
