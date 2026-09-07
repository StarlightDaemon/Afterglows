const turntableStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor turntable --- */
  .tt {
    width: 104px;
    height: 104px;
    position: relative;
  }

  .tt-plinth {
    position: absolute;
    inset: 10px;
    border-radius: 8px;
    background: linear-gradient(160deg, #0c2c14 0%, #071c0c 60%, #041106 100%);
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 10px rgba(0, 255, 100, 0.3);
  }

  .tt-platter {
    position: absolute;
    top: 20px;
    left: 16px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background:
      conic-gradient(from 0deg, rgba(0, 255, 100, 0.3) 0deg, transparent 60deg, rgba(0, 255, 100, 0.3) 120deg, transparent 180deg, rgba(0, 255, 100, 0.3) 240deg, transparent 300deg, rgba(0, 255, 100, 0.3) 360deg),
      repeating-radial-gradient(circle at 50% 50%, rgba(140, 255, 170, 0.3) 0 2px, transparent 2px 6px),
      radial-gradient(circle at 50% 50%, #061607 0 28%, #0a2411 90%);
    border: 2px solid #00ff66;
    box-sizing: border-box;
    box-shadow: 0 0 8px rgba(0, 255, 100, 0.4);
    animation: tt-spin 1.2s linear infinite;
  }

  .tt-label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ffffff 0%, #00ff66 70%);
    border: 1.5px solid #ffffff;
    box-shadow: 0 0 6px #00ff66;
  }

  .tt-label::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 4px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #041106;
  }

  .tt-spindle {
    position: absolute;
    top: 49px;
    left: 45px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #00ff66;
    z-index: 3;
  }

  .tt-arm {
    position: absolute;
    top: 22px;
    right: 14px;
    width: 3px;
    height: 46px;
    border-radius: 2px;
    background: linear-gradient(180deg, #ffffff, #00ff66);
    transform-origin: top center;
    box-shadow: 0 0 6px #00ff66;
    animation: tt-track 1.4s ease-in-out infinite alternate;
  }

  .tt-arm::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    width: 9px;
    height: 9px;
    margin-left: -4.5px;
    border-radius: 50%;
    background: #0c2c14;
    border: 1.5px solid #00ff66;
  }

  .tt-arm::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: -2px;
    width: 7px;
    height: 4px;
    border-radius: 2px;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
  }

  .tt-note {
    position: absolute;
    top: 54px;
    left: 62px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1.5px solid #00ff66;
    box-shadow: 0 0 6px #00ff66;
    opacity: 0;
    animation: tt-note 1.0s ease-out infinite;
  }

  .tt-note.n2 { animation-delay: -0.5s; }

  .tt-pip {
    position: absolute;
    bottom: 15px;
    left: 20px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #00ff66;
    animation: tt-pip 0.6s ease-in-out infinite alternate;
  }

  .tt-rpm {
    position: absolute;
    bottom: 13px;
    left: 28px;
    font-family: monospace;
    font-size: 8px;
    font-weight: bold;
    color: #00ff66;
  }

  @keyframes tt-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes tt-track {
    0% { transform: rotate(14deg); }
    100% { transform: rotate(34deg); }
  }

  @keyframes tt-note {
    0% { opacity: 1; transform: scale(0.3) translate(0, 0); }
    100% { opacity: 0; transform: scale(2.4) translate(-14px, -18px); }
  }

  @keyframes tt-pip {
    0% { transform: scale(0.8); opacity: 0.5; }
    100% { transform: scale(1.3); opacity: 1; }
  }

  /* --- v2: Vintage Hi-Fi Audiophile Turntable --- */
  .ttc {
    width: 104px;
    height: 104px;
    position: relative;
  }

  .ttc-plinth {
    position: absolute;
    inset: 10px;
    border-radius: 8px;
    background: linear-gradient(160deg, #78350f 0%, #451a03 60%, #291002 100%);
    border: 1.5px solid #d97706;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.6), inset 0 0 8px rgba(245, 158, 11, 0.2);
  }

  .ttc-platter {
    position: absolute;
    top: 20px;
    left: 16px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background:
      conic-gradient(from 0deg, rgba(255, 255, 255, 0.2) 0deg, transparent 60deg, rgba(255, 255, 255, 0.2) 120deg, transparent 180deg, rgba(255, 255, 255, 0.2) 240deg, transparent 300deg, rgba(255, 255, 255, 0.2) 360deg),
      repeating-radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0 2px, transparent 2px 5px),
      radial-gradient(circle at 50% 50%, #09090b 0 28%, #18181b 90%);
    border: 2px solid #71717a;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    animation: tt-spin 1.2s linear infinite;
  }

  /* Scarlet red vinyl center label */
  .ttc-label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 32%, #ef4444, #b91c1c 75%);
    border: 1.5px solid #fca5a5;
    box-shadow: 0 0 6px #ef4444;
  }

  .ttc-label::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 4px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
  }

  .ttc-spindle {
    position: absolute;
    top: 49px;
    left: 45px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 4px #ffffff;
    z-index: 3;
  }

  /* Polished chrome tonearm */
  .ttc-arm {
    position: absolute;
    top: 22px;
    right: 14px;
    width: 3px;
    height: 46px;
    border-radius: 2px;
    background: linear-gradient(180deg, #f8fafc, #94a3b8);
    transform-origin: top center;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
    animation: tt-track 1.4s ease-in-out infinite alternate;
  }

  .ttc-arm::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    width: 9px;
    height: 9px;
    margin-left: -4.5px;
    border-radius: 50%;
    background: #334155;
    border: 1px solid #cbd5e1;
  }

  /* Gold cartridge headshell */
  .ttc-arm::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: -2px;
    width: 7px;
    height: 4px;
    border-radius: 2px;
    background: #f59e0b;
    box-shadow: 0 0 6px #fbbf24;
  }

  /* Acoustic note pulse */
  .ttc-note {
    position: absolute;
    top: 54px;
    left: 62px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1.5px solid #38bdf8;
    box-shadow: 0 0 6px #38bdf8;
    opacity: 0;
    animation: tt-note 1.0s ease-out infinite;
  }

  .ttc-note.n2 { animation-delay: -0.5s; }

  /* Warm amber strobe pip */
  .ttc-pip {
    position: absolute;
    bottom: 15px;
    left: 20px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #f59e0b;
    box-shadow: 0 0 6px #fbbf24;
    animation: ttc-pip 0.6s ease-in-out infinite alternate;
  }

  .ttc-rpm {
    position: absolute;
    bottom: 13px;
    left: 28px;
    font-family: monospace;
    font-size: 8px;
    font-weight: bold;
    color: #fbbf24;
  }

  @keyframes ttc-pip {
    0% { transform: scale(0.8); opacity: 0.5; }
    100% { transform: scale(1.3); opacity: 1; }
  }
`;

const turntableMarkup = {
  v1: `
    <div class="tt">
      <div class="tt-plinth"></div>
      <div class="tt-platter"><div class="tt-label"></div></div>
      <div class="tt-spindle"></div>
      <div class="tt-note"></div>
      <div class="tt-note n2"></div>
      <div class="tt-arm"></div>
      <div class="tt-pip"></div>
      <span class="tt-rpm">33⅓</span>
    </div>
  `,
  v2: `
    <div class="ttc">
      <div class="ttc-plinth"></div>
      <div class="ttc-platter"><div class="ttc-label"></div></div>
      <div class="ttc-spindle"></div>
      <div class="ttc-note"></div>
      <div class="ttc-note n2"></div>
      <div class="ttc-arm"></div>
      <div class="ttc-pip"></div>
      <span class="ttc-rpm">33⅓</span>
    </div>
  `,
};

class ConceptTurntable extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${turntableStyles}</style>${turntableMarkup[version] || turntableMarkup.v2}`;
  }
}

if (!customElements.get('concept-turntable')) {
  customElements.define('concept-turntable', ConceptTurntable);
}
