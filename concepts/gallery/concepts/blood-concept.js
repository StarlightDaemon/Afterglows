const bloodStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Inside a vessel: red cells stream through with every systolic
     surge - the walls bulge as the pulse passes, cells hurry, then
     the flow relaxes. A white cell tumbles through slower, and
     platelets ride the fast lanes. */
  .bl {
    width: 116px;
    height: 84px;
    position: relative;
    overflow: hidden;
  }

  /* Vessel walls: top and bottom, flexing with the pulse wave. */
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

  /* Plasma glow inside the lumen. */
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

  /* Red cells: biconcave discs (ring look via inner shadow), each
     surging with the pulse (fast early, drifting late). */
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

  /* Surge profile: whoosh forward on systole, coast on diastole. */
  @keyframes bl-flow {
    0% { left: -18px; transform: rotate(-6deg); }
    22% { left: 34px; transform: rotate(4deg); }
    55% { left: 74px; transform: rotate(-3deg); }
    100% { left: 122px; transform: rotate(5deg); }
  }

  /* The white cell: bigger, slower, hugging the wall. */
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

  /* Lobed nucleus. */
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

  /* Platelets: small fast slivers. */
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

  /* Pulse wave: a bright pressure front sweeping the lumen. */
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

  /* BPM tick readout. */
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
`;

class ConceptBlood extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${bloodStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-blood')) {
  customElements.define('concept-blood', ConceptBlood);
}
