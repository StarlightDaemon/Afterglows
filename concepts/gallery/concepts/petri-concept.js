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
  }

  .pt-dish {
    position: absolute;
    left: 50%;
    top: 10px;
    width: 88px;
    height: 70px;
    margin-left: -44px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: radial-gradient(ellipse at 42% 36%,
      rgba(0, 90, 18, 0.4),
      rgba(0, 45, 9, 0.55) 60%,
      rgba(0, 25, 5, 0.7));
    box-shadow: inset 0 0 14px rgba(0, 204, 0, 0.2);
  }

  .pt-dish::after {
    content: '';
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    border: 1px solid rgba(0, 204, 0, 0.35);
  }

  .pt-col {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%,
      rgba(190, 255, 205, 0.9),
      rgba(0, 140, 28, 0.8) 55%,
      rgba(0, 90, 18, 0.5));
    border: 1px solid rgba(140, 255, 170, 0.7);
    transform: scale(0);
    animation: pt-grow 10s infinite var(--seed);
    box-sizing: border-box;
  }

  .pt-col.c1 { left: 34px; top: 30px; width: 12px; height: 10px; --seed: 0s; }
  .pt-col.c2 { left: 58px; top: 42px; width: 9px; height: 8px; --seed: 0.7s; }
  .pt-col.c3 { left: 44px; top: 56px; width: 11px; height: 9px; --seed: 1.4s; }
  .pt-col.c4 { left: 66px; top: 26px; width: 8px; height: 7px; --seed: 2.1s; }
  .pt-col.c5 { left: 26px; top: 48px; width: 8px; height: 7px; --seed: 2.8s; }
  .pt-col.c6 { left: 56px; top: 60px; width: 7px; height: 6px; --seed: 3.5s; }
  .pt-col.c7 { left: 38px; top: 18px; width: 7px; height: 6px; --seed: 4.2s; }

  @keyframes pt-grow {
    0%, 8% { transform: scale(0); opacity: 0; }
    12% { transform: scale(0.4); opacity: 1; }
    30% { transform: scale(1); }
    55% { transform: scale(1.06); box-shadow: 0 0 6px rgba(0, 204, 0, 0.5); }
    78% { transform: scale(1.1); opacity: 1; }
    86%, 100% { transform: scale(0); opacity: 0; }
  }

  .pt-halo {
    position: absolute;
    left: 40px;
    top: 35px;
    width: 0;
    height: 0;
    border-radius: 50%;
    border: 1px dashed rgba(140, 255, 170, 0.5);
    animation: pt-halo 10s infinite;
  }

  @keyframes pt-halo {
    0%, 10% { width: 0; height: 0; margin: 0; opacity: 0; }
    20% { opacity: 0.8; }
    60% { width: 34px; height: 28px; margin: -14px 0 0 -17px; opacity: 0.5; }
    80% { width: 40px; height: 34px; margin: -17px 0 0 -20px; opacity: 0; }
    100% { opacity: 0; }
  }

  .pt-sweep {
    position: absolute;
    left: 50%;
    top: 45px;
    width: 44px;
    height: 1.5px;
    background: linear-gradient(90deg, rgba(190, 255, 205, 0.9), transparent);
    transform-origin: 0% 50%;
    animation: pt-sweep 10s linear infinite;
    opacity: 0;
  }

  @keyframes pt-sweep {
    0%, 46% { transform: rotate(0deg); opacity: 0; }
    50% { opacity: 0.9; }
    78% { transform: rotate(360deg); opacity: 0.9; }
    82%, 100% { transform: rotate(360deg); opacity: 0; }
  }

  .pt-count {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-size: 8px;
    letter-spacing: 2px;
    color: #c8ffd6;
    text-shadow: 0 0 5px rgba(0, 204, 0, 0.7);
  }

  .pt-count::before {
    content: 'CFU: 0';
    animation: pt-count 10s steps(1) infinite;
  }

  @keyframes pt-count {
    0% { content: 'CFU: 0'; }
    12% { content: 'CFU: 1'; }
    19% { content: 'CFU: 2'; }
    26% { content: 'CFU: 3'; }
    33% { content: 'CFU: 4'; }
    40% { content: 'CFU: 5'; }
    47% { content: 'CFU: 6'; }
    54% { content: 'CFU: 7'; }
    78% { content: 'CFU: 7 \\2713'; }
    86% { content: 'STERILE'; }
    97% { content: 'CFU: 0'; }
  }

  .pt-flash {
    position: absolute;
    left: 50%;
    top: 10px;
    width: 88px;
    height: 70px;
    margin-left: -44px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.35);
    opacity: 0;
    animation: pt-flash 10s steps(1) infinite;
  }

  @keyframes pt-flash {
    0%, 83% { opacity: 0; }
    84%, 86% { opacity: 1; }
    87%, 100% { opacity: 0; }
  }

  /* --- v2: Chromatic microbiological agar culture ---
     Warm golden agar medium in clear borosilicate glass dish;
     Staph aureus (gold), Serratia (magenta), Pseudomonas (turquoise);
     UV laser scanning sweep and germicidal sterilisation flash. */
  .ptc {
    width: 104px;
    height: 96px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  .ptc-dish {
    position: absolute;
    left: 50%;
    top: 10px;
    width: 88px;
    height: 70px;
    margin-left: -44px;
    border-radius: 50%;
    border: 2px solid rgba(220, 240, 255, 0.85);
    background: radial-gradient(ellipse at 42% 36%,
      #b45309,
      #78350f 60%,
      #451a03);
    box-shadow: inset 0 0 14px rgba(254, 215, 170, 0.3), 0 0 8px rgba(0, 0, 0, 0.6);
  }

  .ptc-dish::after {
    content: '';
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.25);
  }

  /* Multi-strain bacterial colonies */
  .ptc-col {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: pt-grow 10s infinite var(--seed);
    box-sizing: border-box;
  }

  /* Staph aureus (Golden) */
  .ptc-col.c1 {
    left: 34px; top: 30px; width: 12px; height: 10px; --seed: 0s;
    background: radial-gradient(circle at 40% 35%, #fde047, #d97706);
    border: 1px solid #fef08a;
  }
  .ptc-col.c5 {
    left: 26px; top: 48px; width: 8px; height: 7px; --seed: 2.8s;
    background: radial-gradient(circle at 40% 35%, #fde047, #d97706);
    border: 1px solid #fef08a;
  }

  /* Serratia marcescens (Magenta/Crimson) */
  .ptc-col.c2 {
    left: 58px; top: 42px; width: 9px; height: 8px; --seed: 0.7s;
    background: radial-gradient(circle at 40% 35%, #f43f5e, #9f1239);
    border: 1px solid #fda4af;
  }
  .ptc-col.c4 {
    left: 66px; top: 26px; width: 8px; height: 7px; --seed: 2.1s;
    background: radial-gradient(circle at 40% 35%, #f43f5e, #9f1239);
    border: 1px solid #fda4af;
  }

  /* Pseudomonas aeruginosa (Turquoise/Cyan) */
  .ptc-col.c3 {
    left: 44px; top: 56px; width: 11px; height: 9px; --seed: 1.4s;
    background: radial-gradient(circle at 40% 35%, #22d3ee, #0e7490);
    border: 1px solid #a5f3fc;
  }
  .ptc-col.c6 {
    left: 56px; top: 60px; width: 7px; height: 6px; --seed: 3.5s;
    background: radial-gradient(circle at 40% 35%, #22d3ee, #0e7490);
    border: 1px solid #a5f3fc;
  }
  .ptc-col.c7 {
    left: 38px; top: 18px; width: 7px; height: 6px; --seed: 4.2s;
    background: radial-gradient(circle at 40% 35%, #22d3ee, #0e7490);
    border: 1px solid #a5f3fc;
  }

  .ptc-halo {
    position: absolute;
    left: 40px;
    top: 35px;
    width: 0;
    height: 0;
    border-radius: 50%;
    border: 1px dashed rgba(254, 240, 138, 0.7);
    animation: pt-halo 10s infinite;
  }

  /* Ultraviolet laser counting sweep */
  .ptc-sweep {
    position: absolute;
    left: 50%;
    top: 45px;
    width: 44px;
    height: 1.5px;
    background: linear-gradient(90deg, #c084fc, #38bdf8, transparent);
    box-shadow: 0 0 6px #a855f7;
    transform-origin: 0% 50%;
    animation: pt-sweep 10s linear infinite;
    opacity: 0;
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
    content: 'CFU: 0';
    animation: pt-count 10s steps(1) infinite;
  }

  /* Germicidal UV-C flash */
  .ptc-flash {
    position: absolute;
    left: 50%;
    top: 10px;
    width: 88px;
    height: 70px;
    margin-left: -44px;
    border-radius: 50%;
    background: rgba(192, 132, 252, 0.65);
    box-shadow: 0 0 20px #a855f7;
    opacity: 0;
    animation: pt-flash 10s steps(1) infinite;
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
