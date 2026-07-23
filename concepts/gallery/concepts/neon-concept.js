const neonStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* An OPEN sign doing what neon does: three letters hold a steady
     hum while the E buzzes, browns out, catches again - and a moth
     loops the whole fixture. */
  .neon {
    width: 112px;
    height: 88px;
    position: relative;
  }

  /* Hanging chains. */
  .neon-chain {
    position: absolute;
    top: 0;
    width: 1.5px;
    height: 14px;
    background: repeating-linear-gradient(180deg,
      rgba(140, 255, 170, 0.8) 0 2px,
      transparent 2px 4px);
  }

  .neon-chain.c1 { left: 26px; }
  .neon-chain.c2 { right: 26px; }

  /* Sign frame. */
  .neon-frame {
    position: absolute;
    left: 8px;
    right: 8px;
    top: 14px;
    height: 44px;
    border: 2px solid rgba(0, 204, 0, 0.6);
    border-radius: 8px;
    background: rgba(0, 18, 4, 0.85);
    box-shadow: inset 0 0 12px rgba(0, 204, 0, 0.15);
    animation: neon-splash 5.5s infinite;
  }

  /* Ambient splash on the frame dims when the E is out. */
  @keyframes neon-splash {
    0%, 34% { box-shadow: inset 0 0 14px rgba(0, 204, 0, 0.3); }
    38%, 55% { box-shadow: inset 0 0 7px rgba(0, 204, 0, 0.12); }
    62%, 100% { box-shadow: inset 0 0 14px rgba(0, 204, 0, 0.3); }
  }

  /* Tube letters. */
  .neon-word {
    position: absolute;
    left: 0;
    right: 0;
    top: 24px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 5px;
    color: #baffc9;
  }

  .neon-letter {
    text-shadow:
      0 0 6px rgba(0, 204, 0, 0.95),
      0 0 14px rgba(0, 204, 0, 0.55),
      0 0 26px rgba(0, 204, 0, 0.3);
    animation: neon-hum 2.2s ease-in-out infinite;
  }

  .neon-letter.l2 { animation-delay: -0.7s; }
  .neon-letter.l3 { animation-delay: -1.3s; }
  .neon-letter.l4 { animation-delay: -1.8s; }

  @keyframes neon-hum {
    0%, 100% { opacity: 0.92; }
    50% { opacity: 1; }
  }

  /* The E: buzzes out and restrikes on its own 5.5s script. */
  .neon-letter.flicker {
    animation: neon-flicker 5.5s steps(1) infinite;
  }

  @keyframes neon-flicker {
    0%, 33% { opacity: 1; }
    34% { opacity: 0.25; }
    35% { opacity: 1; }
    36% { opacity: 0.15; }
    38% { opacity: 0.6; }
    39%, 54% { opacity: 0.12; text-shadow: none; }
    /* Restrike attempts. */
    55% { opacity: 0.7; }
    56% { opacity: 0.2; }
    58% { opacity: 0.9; }
    59% { opacity: 0.3; }
    61%, 100% { opacity: 1; }
  }

  /* Power cable snaking down from the frame. */
  .neon-cable {
    position: absolute;
    right: 18px;
    top: 58px;
    width: 22px;
    height: 22px;
    border: 1.5px solid rgba(0, 204, 0, 0.5);
    border-top: none;
    border-left: none;
    border-radius: 0 0 14px 0;
  }

  /* The moth: loops the sign on a wobbly orbit, drawn to the glow. */
  .neon-moth-orbit {
    position: absolute;
    left: 50%;
    top: 36px;
    width: 0;
    height: 0;
    animation: neon-moth-orbit 4.2s linear infinite;
  }

  @keyframes neon-moth-orbit {
    to { transform: rotate(-360deg); }
  }

  .neon-moth {
    position: absolute;
    left: 46px;
    top: 0;
    width: 6px;
    height: 4px;
    animation: neon-moth 0.24s steps(2) infinite;
  }

  .neon-moth::before,
  .neon-moth::after {
    content: '';
    position: absolute;
    top: 0;
    width: 3px;
    height: 4px;
    border-radius: 50% 50% 40% 40%;
    background: rgba(214, 255, 224, 0.85);
  }

  .neon-moth::before { left: 0; transform-origin: right center; transform: rotate(24deg); }
  .neon-moth::after { right: 0; transform-origin: left center; transform: rotate(-24deg); }

  /* Wingbeat: the two frames of a moth. */
  @keyframes neon-moth {
    0% { transform: scaleX(1); }
    100% { transform: scaleX(0.55); }
  }

  /* OPEN's little static legend. */
  .neon-legend {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 7px;
    letter-spacing: 3px;
    color: rgba(140, 255, 170, 0.55);
  }
`;

class ConceptNeon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${neonStyles}</style>
      <div class="neon">
        <div class="neon-chain c1"></div>
        <div class="neon-chain c2"></div>
        <div class="neon-frame"></div>
        <div class="neon-word">
          <span class="neon-letter l1">O</span><span class="neon-letter l2">P</span><span class="neon-letter l3 flicker">E</span><span class="neon-letter l4">N</span>
        </div>
        <div class="neon-cable"></div>
        <div class="neon-moth-orbit"><div class="neon-moth"></div></div>
        <div class="neon-legend">COME IN WE'RE</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-neon')) {
  customElements.define('concept-neon', ConceptNeon);
}
