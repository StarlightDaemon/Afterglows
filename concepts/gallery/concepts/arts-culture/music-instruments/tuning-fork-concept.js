const tuningForkStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .tf {
    width: 104px;
    height: 96px;
    position: relative;
  }

  .tf-fork {
    position: absolute;
    left: 34px;
    top: 8px;
    width: 36px;
    height: 80px;
    animation: tf-fork-vibe 0.4s ease-in-out infinite alternate;
  }

  @keyframes tf-fork-vibe {
    0% { transform: rotate(-2deg) translateY(-1px); }
    100% { transform: rotate(2deg) translateY(1px); }
  }

  .tf-prong {
    position: absolute;
    top: 0;
    width: 5px;
    height: 42px;
    border-radius: 3px 3px 0 0;
    background: linear-gradient(180deg, #ffffff, #00ff66 70%);
    box-shadow: 0 0 8px #00ff66;
  }

  .tf-prong.left { left: 4px; animation: tf-shiver-l 0.2s ease-in-out infinite alternate; }
  .tf-prong.right { right: 4px; animation: tf-shiver-r 0.2s ease-in-out infinite alternate; }

  @keyframes tf-shiver-l {
    0% { transform: translateX(-5px) skewX(-4deg); }
    100% { transform: translateX(5px) skewX(4deg); }
  }

  @keyframes tf-shiver-r {
    0% { transform: translateX(5px) skewX(4deg); }
    100% { transform: translateX(-5px) skewX(-4deg); }
  }

  .tf-crown {
    position: absolute;
    top: 40px;
    left: 4px;
    right: 4px;
    height: 10px;
    border: 5px solid #00ff66;
    border-top: none;
    border-radius: 0 0 14px 14px;
    box-sizing: border-box;
    box-shadow: 0 0 6px #00ff66;
  }

  .tf-stem {
    position: absolute;
    top: 50px;
    left: 50%;
    width: 4px;
    height: 18px;
    margin-left: -2px;
    background: #00ff66;
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
    border: 1.5px solid #00ff66;
  }

  .tf-mallet {
    position: absolute;
    right: 2px;
    top: 30px;
    width: 26px;
    height: 4px;
    border-radius: 2px;
    background: #ffffff;
    box-shadow: 0 0 4px #00ff66;
    transform-origin: 100% 50%;
    animation: tf-mallet 1.0s ease-in-out infinite alternate;
  }

  .tf-mallet::before {
    content: '';
    position: absolute;
    left: -7px;
    top: -3px;
    width: 9px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #ffffff, #00ff66 90%);
    box-shadow: 0 0 6px #00ff66;
  }

  @keyframes tf-mallet {
    0% { transform: rotate(-38deg); }
    100% { transform: rotate(6deg); }
  }

  .tf-spark {
    position: absolute;
    left: 62px;
    top: 26px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #00ff66;
    animation: tf-spark 1.0s ease-in-out infinite alternate;
  }

  @keyframes tf-spark {
    0% { transform: scale(0.2); opacity: 0; }
    90% { transform: scale(0.4); opacity: 0; }
    100% { transform: scale(1.6); opacity: 1; }
  }

  .tf-wave {
    position: absolute;
    left: 52px;
    top: 18px;
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 6px #00ff66;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin: -6px;
    animation: tf-wave 1.0s ease-out infinite;
  }

  .tf-wave.v2 { animation-delay: -0.25s; }
  .tf-wave.v3 { animation-delay: -0.5s; }
  .tf-wave.v4 { animation-delay: -0.75s; }

  @keyframes tf-wave {
    0% { transform: scale(0.4); opacity: 1; }
    100% { transform: scale(3.6); opacity: 0; }
  }

  .tf-hz {
    position: absolute;
    right: 2px;
    bottom: 2px;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #00ff66;
    text-shadow: 0 0 4px #00ff66;
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

  /* v2: Polished stainless acoustic tuning fork */
  .tfc {
    width: 104px;
    height: 96px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  .tfc-fork {
    position: absolute;
    left: 34px;
    top: 8px;
    width: 36px;
    height: 80px;
    animation: tfc-fork-vibe 0.4s ease-in-out infinite alternate;
  }

  @keyframes tfc-fork-vibe {
    0% { transform: rotate(-2deg) translateY(-1px); }
    100% { transform: rotate(2deg) translateY(1px); }
  }

  /* Polished steel vibrating prongs */
  .tfc-prong {
    position: absolute;
    top: 0;
    width: 5px;
    height: 42px;
    border-radius: 3px 3px 0 0;
    background: linear-gradient(180deg, #ffffff 0%, #cbd5e1 50%, #64748b 100%);
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
  }

  .tfc-prong.left { left: 4px; animation: tfc-shiver-l 0.2s ease-in-out infinite alternate; }
  .tfc-prong.right { right: 4px; animation: tfc-shiver-r 0.2s ease-in-out infinite alternate; }

  @keyframes tfc-shiver-l {
    0% { transform: translateX(-5px) skewX(-4deg); }
    100% { transform: translateX(5px) skewX(4deg); }
  }

  @keyframes tfc-shiver-r {
    0% { transform: translateX(5px) skewX(4deg); }
    100% { transform: translateX(-5px) skewX(-4deg); }
  }

  /* Steel fork crown arch */
  .tfc-crown {
    position: absolute;
    top: 40px;
    left: 4px;
    right: 4px;
    height: 10px;
    border: 5px solid #94a3b8;
    border-top: none;
    border-radius: 0 0 14px 14px;
    box-sizing: border-box;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
  }

  /* Stem */
  .tfc-stem {
    position: absolute;
    top: 50px;
    left: 50%;
    width: 4px;
    height: 18px;
    margin-left: -2px;
    background: #94a3b8;
  }

  /* Knurled steel grip handle */
  .tfc-grip {
    position: absolute;
    top: 66px;
    left: 50%;
    width: 8px;
    height: 14px;
    margin-left: -4px;
    border-radius: 3px;
    background: linear-gradient(180deg, #64748b 0%, #334155 100%);
    border: 1px solid #cbd5e1;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
  }

  /* Walnut wood mallet with rubber head */
  .tfc-mallet {
    position: absolute;
    right: 2px;
    top: 30px;
    width: 26px;
    height: 4px;
    border-radius: 2px;
    background: #b45309;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    transform-origin: 100% 50%;
    animation: tfc-mallet 1.0s ease-in-out infinite alternate;
  }

  .tfc-mallet::before {
    content: '';
    position: absolute;
    left: -7px;
    top: -3px;
    width: 9px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #fde047, #ca8a04 90%);
    box-shadow: 0 0 6px #eab308;
  }

  @keyframes tfc-mallet {
    0% { transform: rotate(-38deg); }
    100% { transform: rotate(6deg); }
  }

  /* Gold strike impact spark */
  .tfc-spark {
    position: absolute;
    left: 62px;
    top: 26px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 8px #fde047;
    animation: tfc-spark 1.0s ease-in-out infinite alternate;
  }

  @keyframes tfc-spark {
    0% { transform: scale(0.2); opacity: 0; }
    90% { transform: scale(0.4); opacity: 0; }
    100% { transform: scale(1.6); opacity: 1; }
  }

  /* Expanding electric cyan acoustic resonance waves */
  .tfc-wave {
    position: absolute;
    left: 52px;
    top: 18px;
    border: 1.5px solid #38bdf8;
    box-shadow: 0 0 8px #00f0ff;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin: -6px;
    animation: tfc-wave 1.0s ease-out infinite;
  }

  .tfc-wave.v2 { animation-delay: -0.25s; }
  .tfc-wave.v3 { animation-delay: -0.5s; }
  .tfc-wave.v4 { animation-delay: -0.75s; }

  @keyframes tfc-wave {
    0% { transform: scale(0.4); opacity: 1; }
    100% { transform: scale(3.6); opacity: 0; }
  }

  /* Frequency label */
  .tfc-hz {
    position: absolute;
    right: 2px;
    bottom: 2px;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #38bdf8;
    text-shadow: 0 0 5px #00f0ff;
  }
  `,
};

const tuningForkMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="tfc">
        <div class="tfc-wave"></div>
        <div class="tfc-wave v2"></div>
        <div class="tfc-wave v3"></div>
        <div class="tfc-wave v4"></div>
        <div class="tfc-fork">
          <div class="tfc-prong left"></div>
          <div class="tfc-prong right"></div>
          <div class="tfc-crown"></div>
          <div class="tfc-stem"></div>
          <div class="tfc-grip"></div>
        </div>
        <div class="tfc-mallet"></div>
        <div class="tfc-spark"></div>
        <div class="tfc-hz">A = 440 Hz</div>
      </div>
    `,
};

class ConceptTuningFork extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${tuningForkStyles[version] || tuningForkStyles.v2}</style>${tuningForkMarkup[version] || tuningForkMarkup.v2}`;
  }
}

if (!customElements.get('concept-tuning-fork')) {
  customElements.define('concept-tuning-fork', ConceptTuningFork);
}
