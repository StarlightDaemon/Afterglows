const tuningForkStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A 5s strike cycle: the mallet swings in and taps, the prongs
     shiver with decaying amplitude, and wave arcs peel off while the
     ring dies away to stillness. */
  .tf {
    width: 104px;
    height: 96px;
    position: relative;
  }

  /* Fork: two prongs, a crown, a stem and a grip. */
  .tf-fork {
    position: absolute;
    left: 34px;
    top: 8px;
    width: 36px;
    height: 80px;
  }

  .tf-prong {
    position: absolute;
    top: 0;
    width: 5px;
    height: 42px;
    border-radius: 3px 3px 0 0;
    background: linear-gradient(180deg, #baffc9, rgba(0, 204, 0, 0.75));
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.5);
  }

  .tf-prong.left { left: 4px; animation: tf-shiver-l 5s infinite; }
  .tf-prong.right { right: 4px; animation: tf-shiver-r 5s infinite; }

  /* Decaying vibration: violent right after the 12% strike, calm by
     70%. Alternating offsets at 2% steps read as a blur of motion. */
  @keyframes tf-shiver-l {
    0%, 11% { transform: translateX(0); filter: blur(0); }
    12% { transform: translateX(-3px); filter: blur(1px); }
    14% { transform: translateX(2.5px); }
    16% { transform: translateX(-2.5px); }
    18% { transform: translateX(2px); }
    20% { transform: translateX(-2px); }
    24% { transform: translateX(1.6px); }
    28% { transform: translateX(-1.4px); filter: blur(0.6px); }
    34% { transform: translateX(1px); }
    42% { transform: translateX(-0.7px); filter: blur(0.3px); }
    52% { transform: translateX(0.4px); }
    64% { transform: translateX(-0.2px); filter: blur(0); }
    72%, 100% { transform: translateX(0); }
  }

  @keyframes tf-shiver-r {
    0%, 11% { transform: translateX(0); filter: blur(0); }
    12% { transform: translateX(3px); filter: blur(1px); }
    14% { transform: translateX(-2.5px); }
    16% { transform: translateX(2.5px); }
    18% { transform: translateX(-2px); }
    20% { transform: translateX(2px); }
    24% { transform: translateX(-1.6px); }
    28% { transform: translateX(1.4px); filter: blur(0.6px); }
    34% { transform: translateX(-1px); }
    42% { transform: translateX(0.7px); filter: blur(0.3px); }
    52% { transform: translateX(-0.4px); }
    64% { transform: translateX(0.2px); filter: blur(0); }
    72%, 100% { transform: translateX(0); }
  }

  /* Crown joining the prongs. */
  .tf-crown {
    position: absolute;
    top: 40px;
    left: 4px;
    right: 4px;
    height: 10px;
    border: 5px solid rgba(0, 204, 0, 0.75);
    border-top: none;
    border-radius: 0 0 14px 14px;
    box-sizing: border-box;
  }

  .tf-stem {
    position: absolute;
    top: 50px;
    left: 50%;
    width: 4px;
    height: 18px;
    margin-left: -2px;
    background: rgba(0, 204, 0, 0.75);
  }

  .tf-grip {
    position: absolute;
    top: 66px;
    left: 50%;
    width: 8px;
    height: 14px;
    margin-left: -4px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(0, 110, 22, 0.9), rgba(0, 60, 12, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.6);
  }

  /* Mallet: swings in from the right, taps the prong at 12%. */
  .tf-mallet {
    position: absolute;
    right: 2px;
    top: 30px;
    width: 26px;
    height: 4px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.8);
    transform-origin: 100% 50%;
    animation: tf-mallet 5s infinite;
  }

  .tf-mallet::before {
    content: '';
    position: absolute;
    left: -7px;
    top: -3px;
    width: 9px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #d6ffe0, rgba(0, 140, 28, 0.95));
  }

  @keyframes tf-mallet {
    0% { transform: rotate(-38deg); opacity: 0; }
    6% { transform: rotate(-12deg); opacity: 1; }
    12% { transform: rotate(4deg); }
    18% { transform: rotate(-20deg); }
    30% { transform: rotate(-38deg); opacity: 1; }
    40%, 100% { transform: rotate(-38deg); opacity: 0; }
  }

  /* Strike spark. */
  .tf-spark {
    position: absolute;
    left: 62px;
    top: 26px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #f2ffdd;
    opacity: 0;
    animation: tf-spark 5s infinite;
  }

  @keyframes tf-spark {
    0%, 11% { transform: scale(0.3); opacity: 0; }
    13% { transform: scale(1.4); opacity: 1; }
    18% { transform: scale(0.4); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Sound arcs radiating from the prong tips, decaying with the ring. */
  .tf-wave {
    position: absolute;
    left: 52px;
    top: 18px;
    border: 1px solid rgba(140, 255, 170, 0.8);
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin: -6px;
    opacity: 0;
    animation: tf-wave 5s ease-out infinite;
  }

  .tf-wave.v2 { animation-delay: 0.5s; }
  .tf-wave.v3 { animation-delay: 1s; }
  .tf-wave.v4 { animation-delay: 1.6s; }

  @keyframes tf-wave {
    0%, 12% { transform: scale(0.4); opacity: 0; }
    16% { opacity: 0.85; }
    46% { transform: scale(3.4); opacity: 0; }
    100% { opacity: 0; }
  }

  .tf-hz {
    position: absolute;
    right: 2px;
    bottom: 2px;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    letter-spacing: 1px;
    color: rgba(140, 255, 170, 0.75);
    animation: tf-hz 5s steps(1) infinite;
  }

  @keyframes tf-hz {
    0%, 11% { opacity: 0.35; }
    12%, 70% { opacity: 1; }
    72%, 100% { opacity: 0.35; }
  }
`;

class ConceptTuningFork extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${tuningForkStyles}</style>
      <div class="tf">
        <div class="tf-wave"></div>
        <div class="tf-wave v2"></div>
        <div class="tf-wave v3"></div>
        <div class="tf-wave v4"></div>
        <div class="tf-fork">
          <div class="tf-prong left"></div>
          <div class="tf-prong right"></div>
          <div class="tf-crown"></div>
          <div class="tf-stem"></div>
          <div class="tf-grip"></div>
        </div>
        <div class="tf-mallet"></div>
        <div class="tf-spark"></div>
        <div class="tf-hz">A = 440 Hz</div>
      </div>
    `;
  }
}

if (!customElements.get('concept-tuning-fork')) {
  customElements.define('concept-tuning-fork', ConceptTuningFork);
}
