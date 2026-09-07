const petriStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor petri dish --- */
  .pt {
    width: 104px;
    height: 96px;
    position: relative;
    font-family: 'Courier New', monospace;
    animation: pt-orbit-shake 1.8s linear infinite;
  }

  @keyframes pt-orbit-shake {
    0% { transform: rotate(0deg) translate(4px) rotate(0deg); }
    100% { transform: rotate(360deg) translate(4px) rotate(-360deg); }
  }

  .pt-dish {
    position: absolute;
    left: 50%;
    top: 10px;
    width: 88px;
    height: 70px;
    margin-left: -44px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00ff66);
    background: radial-gradient(ellipse at 42% 36%,
      rgba(0, 90, 18, 0.6),
      rgba(0, 45, 9, 0.75) 60%,
      rgba(0, 25, 5, 0.9));
    box-shadow: inset 0 0 14px rgba(0, 255, 100, 0.3), 0 0 8px rgba(0, 255, 100, 0.2);
  }

  .pt-dish::after {
    content: '';
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    border: 1px solid rgba(0, 255, 100, 0.4);
  }

  .pt-col {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%,
      #ffffff,
      rgba(0, 204, 50, 0.9) 55%,
      rgba(0, 90, 18, 0.7));
    border: 1px solid #00ff66;
    box-shadow: 0 0 6px #00ff66;
    animation: pt-motility 2.0s ease-in-out infinite alternate var(--seed);
    box-sizing: border-box;
  }

  .pt-col.c1 { left: 34px; top: 30px; width: 12px; height: 10px; --seed: 0s; }
  .pt-col.c2 { left: 58px; top: 42px; width: 9px; height: 8px; --seed: -0.3s; }
  .pt-col.c3 { left: 44px; top: 56px; width: 11px; height: 9px; --seed: -0.6s; }
  .pt-col.c4 { left: 66px; top: 26px; width: 8px; height: 7px; --seed: -0.9s; }
  .pt-col.c5 { left: 26px; top: 48px; width: 8px; height: 7px; --seed: -1.2s; }
  .pt-col.c6 { left: 56px; top: 60px; width: 7px; height: 6px; --seed: -1.5s; }
  .pt-col.c7 { left: 38px; top: 18px; width: 7px; height: 6px; --seed: -1.8s; }

  @keyframes pt-motility {
    0% { transform: translate(-4px, -3px) scale(0.85); }
    100% { transform: translate(5px, 4px) scale(1.2); }
  }

  .pt-halo {
    position: absolute;
    left: 44px;
    top: 36px;
    width: 32px;
    height: 26px;
    margin: -13px 0 0 -16px;
    border-radius: 50%;
    border: 1.5px dashed #00ff66;
    animation: pt-halo 1.8s ease-in-out infinite alternate;
  }

  @keyframes pt-halo {
    0% { transform: scale(0.7) rotate(0deg); opacity: 0.4; }
    100% { transform: scale(1.3) rotate(180deg); opacity: 1; }
  }

  .pt-sweep {
    position: absolute;
    left: 50%;
    top: 45px;
    width: 44px;
    height: 2px;
    background: linear-gradient(90deg, #ffffff, #00ff66, transparent);
    box-shadow: 0 0 8px #00ff66;
    transform-origin: 0% 50%;
    animation: pt-sweep 1.4s linear infinite;
  }

  @keyframes pt-sweep {
    0% { transform: rotate(0deg); opacity: 1; }
    100% { transform: rotate(360deg); opacity: 1; }
  }

  .pt-count {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #c8ffd6;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.7);
  }

  .pt-count::before {
    content: 'CFU: ACTIVE';
  }

  .pt-flash {
    display: none;
  }

  /* --- v2: Chromatic microbiological agar culture --- */
  .ptc {
    width: 104px;
    height: 96px;
    position: relative;
    font-family: 'Courier New', monospace;
    animation: pt-orbit-shake 1.8s linear infinite;
  }

  .ptc-dish {
    position: absolute;
    left: 50%;
    top: 10px;
    width: 88px;
    height: 70px;
    margin-left: -44px;
    border-radius: 50%;
    border: 2px solid rgba(220, 240, 255, 0.9);
    background: radial-gradient(ellipse at 42% 36%,
      #b45309,
      #78350f 60%,
      #451a03);
    box-shadow: inset 0 0 14px rgba(254, 215, 170, 0.4), 0 0 10px rgba(0, 0, 0, 0.7);
  }

  .ptc-dish::after {
    content: '';
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.35);
  }

  /* Multi-strain bacterial colonies */
  .ptc-col {
    position: absolute;
    border-radius: 50%;
    animation: pt-motility 2.0s ease-in-out infinite alternate var(--seed);
    box-sizing: border-box;
  }

  /* Staph aureus (Golden) */
  .ptc-col.c1 {
    left: 34px; top: 30px; width: 12px; height: 10px; --seed: 0s;
    background: radial-gradient(circle at 40% 35%, #ffffff, #facc15 60%, #d97706);
    border: 1.5px solid #fef08a;
    box-shadow: 0 0 8px #facc15;
  }
  .ptc-col.c5 {
    left: 26px; top: 48px; width: 8px; height: 7px; --seed: -1.2s;
    background: radial-gradient(circle at 40% 35%, #ffffff, #facc15 60%, #d97706);
    border: 1.5px solid #fef08a;
    box-shadow: 0 0 6px #facc15;
  }

  /* Serratia marcescens (Magenta/Crimson) */
  .ptc-col.c2 {
    left: 58px; top: 42px; width: 9px; height: 8px; --seed: -0.3s;
    background: radial-gradient(circle at 40% 35%, #ffffff, #f43f5e 60%, #9f1239);
    border: 1.5px solid #fda4af;
    box-shadow: 0 0 8px #f43f5e;
  }
  .ptc-col.c4 {
    left: 66px; top: 26px; width: 8px; height: 7px; --seed: -0.9s;
    background: radial-gradient(circle at 40% 35%, #ffffff, #f43f5e 60%, #9f1239);
    border: 1.5px solid #fda4af;
    box-shadow: 0 0 6px #f43f5e;
  }

  /* Pseudomonas aeruginosa (Turquoise/Cyan) */
  .ptc-col.c3 {
    left: 44px; top: 56px; width: 11px; height: 9px; --seed: -0.6s;
    background: radial-gradient(circle at 40% 35%, #ffffff, #22d3ee 60%, #0e7490);
    border: 1.5px solid #a5f3fc;
    box-shadow: 0 0 8px #22d3ee;
  }
  .ptc-col.c6 {
    left: 56px; top: 60px; width: 7px; height: 6px; --seed: -1.5s;
    background: radial-gradient(circle at 40% 35%, #ffffff, #22d3ee 60%, #0e7490);
    border: 1.5px solid #a5f3fc;
    box-shadow: 0 0 6px #22d3ee;
  }
  .ptc-col.c7 {
    left: 38px; top: 18px; width: 7px; height: 6px; --seed: -1.8s;
    background: radial-gradient(circle at 40% 35%, #ffffff, #22d3ee 60%, #0e7490);
    border: 1.5px solid #a5f3fc;
    box-shadow: 0 0 6px #22d3ee;
  }

  .ptc-halo {
    position: absolute;
    left: 44px;
    top: 36px;
    width: 32px;
    height: 26px;
    margin: -13px 0 0 -16px;
    border-radius: 50%;
    border: 1.5px dashed #38bdf8;
    animation: pt-halo 1.8s ease-in-out infinite alternate;
  }

  /* Ultraviolet laser counting sweep */
  .ptc-sweep {
    position: absolute;
    left: 50%;
    top: 45px;
    width: 44px;
    height: 2px;
    background: linear-gradient(90deg, #ffffff, #c084fc, #38bdf8, transparent);
    box-shadow: 0 0 8px #a855f7;
    transform-origin: 0% 50%;
    animation: pt-sweep 1.4s linear infinite;
  }

  .ptc-count {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #38bdf8;
    text-shadow: 0 0 5px rgba(56, 189, 248, 0.8);
  }

  .ptc-count::before {
    content: 'CFU: ACTIVE';
  }

  .ptc-flash {
    display: none;
  }
`;

const petriMarkup = {
  v1: `
    <div class="pt">
      <div class="pt-dish"></div>
      <div class="pt-halo"></div>
      <div class="pt-col c1"></div>
      <div class="pt-col c2"></div>
      <div class="pt-col c3"></div>
      <div class="pt-col c4"></div>
      <div class="pt-col c5"></div>
      <div class="pt-col c6"></div>
      <div class="pt-col c7"></div>
      <div class="pt-sweep"></div>
      <div class="pt-flash"></div>
      <div class="pt-count"></div>
    </div>
  `,
  v2: `
    <div class="ptc">
      <div class="ptc-dish"></div>
      <div class="ptc-halo"></div>
      <div class="ptc-col c1"></div>
      <div class="ptc-col c2"></div>
      <div class="ptc-col c3"></div>
      <div class="ptc-col c4"></div>
      <div class="ptc-col c5"></div>
      <div class="ptc-col c6"></div>
      <div class="ptc-col c7"></div>
      <div class="ptc-sweep"></div>
      <div class="ptc-flash"></div>
      <div class="ptc-count"></div>
    </div>
  `,
};

class ConceptPetri extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${petriStyles}</style>${petriMarkup[version] || petriMarkup.v2}`;
  }
}

if (!customElements.get('concept-petri')) {
  customElements.define('concept-petri', ConceptPetri);
}
