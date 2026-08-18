const signalStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  /* --- v1: the original four bars --- */
  .sig-bars {
    display: flex;
    align-items: center;
    gap: 6px;
    height: 48px;
    animation: sig-bounce 1.0s ease-in-out infinite alternate;
  }

  @keyframes sig-bounce {
    0% { transform: translateY(-8px) rotate(-6deg); }
    100% { transform: translateY(8px) rotate(6deg); }
  }

  .sb {
    width: 10px;
    height: 38px;
    border-radius: 4px;
    background: #222;
    border: 1px solid #444;
  }

  .sb.active {
    background: linear-gradient(180deg, #ffffff, #00ff66);
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 10px #00ff66;
    animation: sig-bar-pulse 1.0s ease-in-out infinite alternate;
  }

  .sb:nth-child(1) { height: 16px; }
  .sb:nth-child(2) { height: 26px; }
  .sb:nth-child(3) { height: 36px; }
  .sb:nth-child(4) { height: 46px; }

  @keyframes sig-bar-pulse {
    0% { transform: scaleY(0.7); }
    100% { transform: scaleY(1.3); }
  }

  /* --- v2: an antenna hunting for signal --- */
  .sg2 {
    width: 108px;
    height: 76px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  .sg2-mast {
    position: absolute;
    left: 18px;
    bottom: 14px;
    width: 3px;
    height: 38px;
    border-radius: 1.5px;
    background: linear-gradient(180deg, #ffffff, #00ff66 60%, #004411);
    box-shadow: 0 0 6px #00ff66;
    transform-origin: bottom center;
    animation: sg2-mast-gimbal 1.4s ease-in-out infinite alternate;
  }

  @keyframes sg2-mast-gimbal {
    0% { transform: rotate(-18deg); }
    100% { transform: rotate(18deg); }
  }

  .sg2-mast::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -3px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 10px #00ff66;
  }

  .sg2-mast::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: -6px;
    width: 15px;
    height: 3px;
    border-radius: 2px;
    background: #00ff66;
  }

  /* Expanding wave arcs from the mast tip. */
  .sg2-wave {
    position: absolute;
    left: 20px;
    bottom: 48px;
    border: 2px solid #00ff66;
    border-radius: 50%;
    border-left-color: transparent;
    border-bottom-color: transparent;
    box-shadow: 0 0 8px #00ff66;
    animation: sg2-wave 1.0s ease-out infinite;
  }

  .sg2-wave.w1 { width: 14px; height: 14px; animation-delay: 0s; }
  .sg2-wave.w2 { width: 26px; height: 26px; animation-delay: -0.33s; }
  .sg2-wave.w3 { width: 38px; height: 38px; animation-delay: -0.66s; }

  @keyframes sg2-wave {
    0% { opacity: 1; transform: translate(0, 0) rotate(-14deg) scale(0.4); }
    100% { opacity: 0; transform: translate(45px, -24px) rotate(-14deg) scale(2.2); }
  }

  /* Five strength bars */
  .sg2-bars {
    position: absolute;
    right: 6px;
    bottom: 14px;
    display: flex;
    align-items: flex-end;
    gap: 3px;
    height: 52px;
  }

  .sg2-bar {
    width: 8px;
    height: var(--hi);
    background: linear-gradient(180deg, #ffffff, #00ff66);
    border: 1px solid #00ff66;
    border-radius: 2px;
    box-shadow: 0 0 6px #00ff66;
    animation: sg2-lvl 1.0s ease-in-out infinite alternate;
  }

  .sg2-bar.b1 { --lo: 8px;  --hi: 16px; animation-delay: 0s; }
  .sg2-bar.b2 { --lo: 7px;  --hi: 25px; animation-delay: -0.15s; }
  .sg2-bar.b3 { --lo: 6px;  --hi: 34px; animation-delay: -0.3s; }
  .sg2-bar.b4 { --lo: 5px;  --hi: 43px; animation-delay: -0.45s; }
  .sg2-bar.b5 { --lo: 4px;  --hi: 52px; animation-delay: -0.6s; }

  @keyframes sg2-lvl {
    0% { transform: scaleY(0.4) translateY(6px); opacity: 0.5; }
    100% { transform: scaleY(1.1) translateY(0); opacity: 1; }
  }

  .sg2-status {
    position: absolute;
    left: 2px;
    bottom: 0;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 1.5px;
    color: #00ff66;
  }

  .sg2-status::before {
    content: 'LINK OK';
  }
`;

const signalMarkup = {
  v1: `
    <div class="sig-bars">
      <div class="sb active"></div>
      <div class="sb active"></div>
      <div class="sb"></div>
      <div class="sb"></div>
    </div>
  `,
  v2: `
    <div class="sg2">
      <div class="sg2-mast"></div>
      <div class="sg2-wave w1"></div>
      <div class="sg2-wave w2"></div>
      <div class="sg2-wave w3"></div>
      <div class="sg2-bars">
        <div class="sg2-bar b1"></div>
        <div class="sg2-bar b2"></div>
        <div class="sg2-bar b3"></div>
        <div class="sg2-bar b4"></div>
        <div class="sg2-bar b5"></div>
      </div>
      <div class="sg2-status"></div>
    </div>
  `,
};

class ConceptSignal extends HTMLElement {
  static get observedAttributes() {
    return ['version'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${signalStyles}</style>${signalMarkup[version] || signalMarkup.v2}`;
  }
}

if (!customElements.get('concept-signal')) {
  customElements.define('concept-signal', ConceptSignal);
}
