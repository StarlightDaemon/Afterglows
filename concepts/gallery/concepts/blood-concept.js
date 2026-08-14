const bloodStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* --- v1: Single-color phosphor blood flow --- */
  .bl {
    width: 116px;
    height: 84px;
    position: relative;
    overflow: hidden;
  }

  .bl-wall {
    position: absolute;
    left: -6px;
    right: -6px;
    height: 8px;
    background: linear-gradient(180deg, rgba(0, 140, 28, 0.8), rgba(0, 70, 14, 0.7));
    border: 1px solid rgba(0, 204, 0, 0.6);
  }

  .bl-wall.top { top: 6px; border-radius: 0 0 8px 8px; animation: bl-wall-top 2.8s ease-in-out infinite; }
  .bl-wall.bottom { bottom: 6px; border-radius: 8px 8px 0 0; animation: bl-wall-bot 2.8s ease-in-out infinite; }

  @keyframes bl-wall-top {
    0%, 100% { transform: translateY(0); }
    22% { transform: translateY(-2.5px); }
    40% { transform: translateY(0); }
  }

  @keyframes bl-wall-bot {
    0%, 100% { transform: translateY(0); }
    22% { transform: translateY(2.5px); }
    40% { transform: translateY(0); }
  }

  .bl-plasma {
    position: absolute;
    left: 0;
    right: 0;
    top: 15px;
    bottom: 15px;
    background: linear-gradient(180deg,
      rgba(0, 90, 18, 0.25),
      rgba(0, 130, 26, 0.35) 50%,
      rgba(0, 90, 18, 0.25));
    animation: bl-plasma 2.8s ease-in-out infinite;
  }

  @keyframes bl-plasma {
    0%, 100% { opacity: 0.7; }
    22% { opacity: 1; }
  }

  .bl-rbc {
    position: absolute;
    width: 16px;
    height: 11px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 50% 50%,
      rgba(0, 110, 22, 0.9) 0 28%,
      rgba(0, 190, 38, 0.9) 55%,
      rgba(0, 130, 26, 0.95));
    border: 1px solid rgba(140, 255, 170, 0.7);
    box-shadow: inset 0 0 4px rgba(0, 40, 8, 0.8);
    animation: bl-flow 2.8s infinite;
  }

  .bl-rbc.r1 { top: 22px; animation-delay: 0s; }
  .bl-rbc.r2 { top: 40px; animation-delay: -0.9s; width: 14px; height: 10px; }
  .bl-rbc.r3 { top: 55px; animation-delay: -1.8s; }
  .bl-rbc.r4 { top: 32px; animation-delay: -2.2s; width: 13px; height: 9px; }

  @keyframes bl-flow {
    0% { left: -18px; transform: rotate(-6deg); }
    22% { left: 34px; transform: rotate(4deg); }
    55% { left: 74px; transform: rotate(-3deg); }
    100% { left: 122px; transform: rotate(5deg); }
  }

  .bl-wbc {
    position: absolute;
    top: 18px;
    width: 19px;
    height: 17px;
    border-radius: 48% 52% 50% 50%;
    background: radial-gradient(circle at 42% 36%,
      rgba(242, 255, 221, 0.9),
      rgba(140, 255, 170, 0.55) 60%,
      rgba(0, 140, 28, 0.6));
    border: 1px solid rgba(190, 255, 205, 0.85);
    animation: bl-wbc 8.4s linear infinite;
  }

  .bl-wbc::after {
    content: '';
    position: absolute;
    left: 22%;
    top: 26%;
    width: 55%;
    height: 48%;
    border-radius: 60% 40% 55% 45%;
    background: rgba(0, 110, 22, 0.75);
  }

  @keyframes bl-wbc {
    0% { left: -24px; transform: rotate(0deg); }
    100% { left: 122px; transform: rotate(300deg); }
  }

  .bl-plt {
    position: absolute;
    width: 5px;
    height: 3px;
    border-radius: 50%;
    background: rgba(214, 255, 224, 0.9);
    animation: bl-flow 2.1s linear infinite;
  }

  .bl-plt.p1 { top: 28px; animation-delay: -0.4s; }
  .bl-plt.p2 { top: 50px; animation-delay: -1.3s; }

  .bl-wave {
    position: absolute;
    top: 14px;
    bottom: 14px;
    left: -20px;
    width: 16px;
    background: linear-gradient(90deg,
      transparent,
      rgba(190, 255, 205, 0.28),
      transparent);
    animation: bl-wave 2.8s ease-out infinite;
  }

  @keyframes bl-wave {
    0% { transform: translateX(0); opacity: 0; }
    6% { opacity: 1; }
    30% { transform: translateX(140px); opacity: 0.7; }
    36%, 100% { transform: translateX(150px); opacity: 0; }
  }

  .bl-bpm {
    position: absolute;
    right: 4px;
    top: 0;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    color: rgba(140, 255, 170, 0.8);
    animation: bl-bpm 2.8s steps(1) infinite;
  }

  @keyframes bl-bpm {
    0%, 8% { opacity: 1; }
    12%, 100% { opacity: 0.45; }
  }

  /* --- v2: Histological vascular hemadynamics ---
     Crimson biconcave erythrocytes, purple-nucleated leukocyte,
     golden platelets, and translucent endothelium vessel walls. */
  .blc {
    width: 116px;
    height: 84px;
    position: relative;
    overflow: hidden;
  }

  .blc-wall {
    position: absolute;
    left: -6px;
    right: -6px;
    height: 8px;
    background: linear-gradient(180deg, #e11d48, #9f1239);
    border: 1px solid #fda4af;
    box-shadow: 0 0 6px rgba(225, 29, 72, 0.3);
  }

  .blc-wall.top { top: 6px; border-radius: 0 0 8px 8px; animation: bl-wall-top 2.8s ease-in-out infinite; }
  .blc-wall.bottom { bottom: 6px; border-radius: 8px 8px 0 0; animation: bl-wall-bot 2.8s ease-in-out infinite; }

  .blc-plasma {
    position: absolute;
    left: 0;
    right: 0;
    top: 15px;
    bottom: 15px;
    background: linear-gradient(180deg,
      rgba(254, 240, 138, 0.08),
      rgba(253, 230, 138, 0.18) 50%,
      rgba(254, 240, 138, 0.08));
    animation: bl-plasma 2.8s ease-in-out infinite;
  }

  /* Red blood cells: Crimson biconcave discs */
  .blc-rbc {
    position: absolute;
    width: 16px;
    height: 11px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 50% 50%,
      #7f1d1d 0 28%,
      #dc2626 55%,
      #991b1b);
    border: 1px solid #f87171;
    box-shadow: inset 0 0 4px #450a0a, 0 0 4px rgba(220, 38, 38, 0.4);
    animation: bl-flow 2.8s infinite;
  }

  .blc-rbc.r1 { top: 22px; animation-delay: 0s; }
  .blc-rbc.r2 { top: 40px; animation-delay: -0.9s; width: 14px; height: 10px; }
  .blc-rbc.r3 { top: 55px; animation-delay: -1.8s; }
  .blc-rbc.r4 { top: 32px; animation-delay: -2.2s; width: 13px; height: 9px; }

  /* White blood cell: Ivory neutrophil with lobed purple nucleus */
  .blc-wbc {
    position: absolute;
    top: 18px;
    width: 19px;
    height: 17px;
    border-radius: 48% 52% 50% 50%;
    background: radial-gradient(circle at 42% 36%,
      #ffffff,
      #e2e8f0 60%,
      #cbd5e1);
    border: 1px solid #94a3b8;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
    animation: bl-wbc 8.4s linear infinite;
  }

  .blc-wbc::after {
    content: '';
    position: absolute;
    left: 22%;
    top: 26%;
    width: 55%;
    height: 48%;
    border-radius: 60% 40% 55% 45%;
    background: radial-gradient(circle, #7c3aed, #4c1d95);
  }

  /* Platelets: Golden fragments */
  .blc-plt {
    position: absolute;
    width: 5px;
    height: 3px;
    border-radius: 50%;
    background: #fbbf24;
    box-shadow: 0 0 3px #f59e0b;
    animation: bl-flow 2.1s linear infinite;
  }

  .blc-plt.p1 { top: 28px; animation-delay: -0.4s; }
  .blc-plt.p2 { top: 50px; animation-delay: -1.3s; }

  .blc-wave {
    position: absolute;
    top: 14px;
    bottom: 14px;
    left: -20px;
    width: 16px;
    background: linear-gradient(90deg,
      transparent,
      rgba(255, 255, 255, 0.25),
      transparent);
    animation: bl-wave 2.8s ease-out infinite;
  }

  .blc-bpm {
    position: absolute;
    right: 4px;
    top: 0;
    font-family: 'Courier New', monospace;
    font-size: 8px;
    font-weight: bold;
    color: #ef4444;
    text-shadow: 0 0 5px rgba(239, 68, 68, 0.8);
    animation: bl-bpm 2.8s steps(1) infinite;
  }
`;

const bloodMarkup = {
  v1: `
    <div class="bl">
      <div class="bl-plasma"></div>
      <div class="bl-wave"></div>
      <div class="bl-rbc r1"></div>
      <div class="bl-rbc r2"></div>
      <div class="bl-rbc r3"></div>
      <div class="bl-rbc r4"></div>
      <div class="bl-wbc"></div>
      <div class="bl-plt p1"></div>
      <div class="bl-plt p2"></div>
      <div class="bl-wall top"></div>
      <div class="bl-wall bottom"></div>
      <div class="bl-bpm">&#9829; 72</div>
    </div>
  `,
  v2: `
    <div class="blc">
      <div class="blc-plasma"></div>
      <div class="blc-wave"></div>
      <div class="blc-rbc r1"></div>
      <div class="blc-rbc r2"></div>
      <div class="blc-rbc r3"></div>
      <div class="blc-rbc r4"></div>
      <div class="blc-wbc"></div>
      <div class="blc-plt p1"></div>
      <div class="blc-plt p2"></div>
      <div class="blc-wall top"></div>
      <div class="blc-wall bottom"></div>
      <div class="blc-bpm">&#9829; 72</div>
    </div>
  `,
};

class ConceptBlood extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${bloodStyles}</style>${bloodMarkup[version] || bloodMarkup.v2}`;
  }
}

if (!customElements.get('concept-blood')) {
  customElements.define('concept-blood', ConceptBlood);
}
