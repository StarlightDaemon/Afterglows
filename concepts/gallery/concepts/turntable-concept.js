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
    border: 1px solid rgba(140, 255, 170, 0.4);
    box-shadow: 0 0 10px rgba(0, 204, 0, 0.2);
  }

  .tt-platter {
    position: absolute;
    top: 20px;
    left: 16px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background:
      repeating-radial-gradient(circle at 50% 50%,
        rgba(140, 255, 170, 0.16) 0 1px, transparent 1px 5px),
      radial-gradient(circle at 50% 50%, #061607 0 28%, #0a2411 90%);
    border: 2px solid rgba(140, 255, 170, 0.5);
    box-sizing: border-box;
    animation: tt-spin 3.2s linear infinite;
  }

  .tt-label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    margin: -9px 0 0 -9px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 32%, #2a8a3e, #123c1e 75%);
    border: 1px solid rgba(190, 255, 205, 0.6);
  }

  .tt-label::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 50%;
    width: 3px;
    height: 3px;
    margin-left: -1.5px;
    border-radius: 50%;
    background: #d8ffbb;
  }

  .tt-spindle {
    position: absolute;
    top: 49px;
    left: 45px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #e6ffd2;
    z-index: 3;
  }

  .tt-arm {
    position: absolute;
    top: 22px;
    right: 14px;
    width: 3px;
    height: 46px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.9), rgba(90, 220, 130, 0.6));
    transform-origin: top center;
    animation: tt-track 9s ease-in-out infinite;
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
    border: 1px solid rgba(190, 255, 205, 0.7);
  }

  .tt-arm::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: -2px;
    width: 7px;
    height: 4px;
    border-radius: 2px;
    background: #d8ffbb;
    box-shadow: 0 0 5px rgba(216, 255, 187, 0.6);
  }

  .tt-note {
    position: absolute;
    top: 58px;
    left: 62px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid rgba(160, 255, 185, 0.7);
    opacity: 0;
    animation: tt-note 1.6s ease-out infinite;
  }

  .tt-note.n2 { animation-delay: -0.8s; }

  .tt-pip {
    position: absolute;
    bottom: 15px;
    left: 20px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.9);
    animation: tt-pip 1.6s ease-in-out infinite;
  }

  .tt-rpm {
    position: absolute;
    bottom: 13px;
    left: 28px;
    font-family: monospace;
    font-size: 8px;
    color: rgba(140, 255, 170, 0.6);
  }

  @keyframes tt-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes tt-track {
    0%, 6% { transform: rotate(0deg); }
    14% { transform: rotate(24deg); }
    82% { transform: rotate(38deg); }
    92%, 100% { transform: rotate(0deg); }
  }

  @keyframes tt-note {
    0% { opacity: 0.8; transform: scale(0.4); }
    100% { opacity: 0; transform: scale(2); }
  }

  @keyframes tt-pip {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; box-shadow: 0 0 5px rgba(140, 255, 170, 0.7); }
  }

  /* --- v2: Vintage Hi-Fi Audiophile Turntable ---
     Oiled walnut wood plinth, deep black grooved vinyl with scarlet red center label,
     polished chrome tonearm with gold cartridge headshell, and amber neon strobe. */
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
      repeating-radial-gradient(circle at 50% 50%,
        rgba(255, 255, 255, 0.12) 0 1px, transparent 1px 4px),
      radial-gradient(circle at 50% 50%, #09090b 0 28%, #18181b 90%);
    border: 2px solid #71717a;
    box-sizing: border-box;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
    animation: tt-spin 3.2s linear infinite;
  }

  /* Scarlet red vinyl center label */
  .ttc-label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    margin: -9px 0 0 -9px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 32%, #ef4444, #b91c1c 75%);
    border: 1px solid #fca5a5;
  }

  .ttc-label::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 50%;
    width: 3px;
    height: 3px;
    margin-left: -1.5px;
    border-radius: 50%;
    background: #ffffff;
  }

  .ttc-spindle {
    position: absolute;
    top: 49px;
    left: 45px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #ffffff;
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
    box-shadow: 0 0 4px rgba(255, 255, 255, 0.4);
    animation: tt-track 9s ease-in-out infinite;
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
    top: 58px;
    left: 62px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #38bdf8;
    opacity: 0;
    animation: tt-note 1.6s ease-out infinite;
  }

  .ttc-note.n2 { animation-delay: -0.8s; }

  /* Warm amber strobe pip */
  .ttc-pip {
    position: absolute;
    bottom: 15px;
    left: 20px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #f59e0b;
    box-shadow: 0 0 4px #fbbf24;
    animation: ttc-pip 1.6s ease-in-out infinite;
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
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; box-shadow: 0 0 8px #f59e0b; }
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
