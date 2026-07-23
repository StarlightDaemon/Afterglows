const distillationStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A distillation rig running: the boiling flask bubbles, vapor
     climbs into the angled condenser (coolant coursing through its
     jacket), and pure droplets collect into the receiving flask,
     whose level slowly rises. */
  .ds {
    width: 116px;
    height: 96px;
    position: relative;
  }

  /* Boiling flask, left, over a flame. */
  .ds-boil {
    position: absolute;
    left: 8px;
    bottom: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background: radial-gradient(circle at 40% 60%, rgba(0, 160, 32, 0.5), rgba(0, 80, 16, 0.75));
    overflow: hidden;
  }

  .ds-boil-liquid {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 16px;
    background: linear-gradient(180deg, rgba(0, 170, 34, 0.6), rgba(0, 90, 18, 0.8));
    animation: ds-heat 6s ease-in-out infinite;
  }

  @keyframes ds-heat {
    0%, 100% { filter: brightness(0.85); }
    50% { filter: brightness(1.4); }
  }

  .ds-boil-bubble {
    position: absolute;
    bottom: 2px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(214, 255, 224, 0.85);
    animation: ds-bubble 0.9s ease-in infinite;
  }

  .ds-boil-bubble.b2 { left: 12px; animation-delay: -0.4s; }
  .ds-boil-bubble.b3 { left: 20px; animation-delay: -0.6s; }

  @keyframes ds-bubble {
    0% { transform: translateY(0); opacity: 0; }
    20% { opacity: 0.9; }
    100% { transform: translateY(-14px); opacity: 0; }
  }

  /* Flask neck rising to the condenser inlet. */
  .ds-neck {
    position: absolute;
    left: 20px;
    bottom: 46px;
    width: 6px;
    height: 18px;
    background: rgba(0, 130, 26, 0.8);
    border: 1px solid rgba(0, 204, 0, 0.6);
  }

  /* Condenser: an angled jacket sloping down-right. */
  .ds-condenser {
    position: absolute;
    left: 24px;
    top: 22px;
    width: 66px;
    height: 12px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 6px;
    background: rgba(0, 40, 8, 0.5);
    transform: rotate(24deg);
    transform-origin: 0% 50%;
    overflow: hidden;
  }

  /* Coolant flowing through the jacket (scrolling bands). */
  .ds-coolant {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(90deg,
      rgba(140, 255, 170, 0.5) 0 6px,
      rgba(0, 110, 22, 0.5) 6px 12px);
    animation: ds-coolant 0.8s linear infinite;
  }

  @keyframes ds-coolant {
    to { background-position: -12px 0; }
  }

  /* Inner delivery tube (vapor path) as a bright line. */
  .ds-inner {
    position: absolute;
    left: 2px;
    right: 2px;
    top: 50%;
    height: 2px;
    margin-top: -1px;
    background: rgba(214, 255, 224, 0.7);
  }

  /* Coolant hoses. */
  .ds-hose {
    position: absolute;
    width: 3px;
    height: 14px;
    background: rgba(0, 150, 30, 0.7);
    border-radius: 2px;
  }

  .ds-hose.in { left: 30px; top: 8px; transform: rotate(24deg); }
  .ds-hose.out { left: 78px; top: 40px; transform: rotate(24deg); }

  /* Receiving flask, bottom-right, filling with distillate. */
  .ds-receiver {
    position: absolute;
    right: 8px;
    bottom: 12px;
    width: 26px;
    height: 30px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 0 0 50% 50% / 0 0 40% 40%;
    overflow: hidden;
    background: rgba(0, 20, 4, 0.4);
  }

  .ds-distillate {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 4px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.5), rgba(0, 130, 26, 0.7));
    animation: ds-collect 6s linear infinite;
  }

  @keyframes ds-collect {
    0% { height: 3px; }
    92% { height: 22px; }
    /* Emptied for the next run. */
    96% { height: 22px; }
    100% { height: 3px; }
  }

  /* Droplets falling from the condenser tip into the receiver. */
  .ds-droplet {
    position: absolute;
    right: 16px;
    top: 52px;
    width: 3px;
    height: 5px;
    border-radius: 0 0 50% 50%;
    background: rgba(214, 255, 224, 0.9);
    animation: ds-drip 1.2s ease-in infinite;
  }

  .ds-droplet.d2 { animation-delay: -0.6s; }

  @keyframes ds-drip {
    0% { transform: translateY(0); opacity: 0; }
    15% { opacity: 1; }
    100% { transform: translateY(16px); opacity: 0.3; }
  }

  /* Flame under the boiling flask. */
  .ds-flame {
    position: absolute;
    left: 18px;
    bottom: 10px;
    width: 10px;
    height: 12px;
    border-radius: 50% 50% 40% 40% / 70% 70% 30% 30%;
    background: radial-gradient(ellipse at 50% 80%, #f2ffdd, rgba(140, 255, 170, 0.6) 55%, transparent);
    transform-origin: 50% 100%;
    animation: ds-flame 6s ease-in-out infinite, ds-flick 0.16s steps(2) infinite;
  }

  @keyframes ds-flame {
    0%, 100% { transform: scaleY(0.75); }
    50% { transform: scaleY(1.2); }
  }

  @keyframes ds-flick {
    0% { transform: scaleX(1); }
    100% { transform: scaleX(0.85); }
  }
`;

class ConceptDistillation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${distillationStyles}</style>
      <div class="ds">
        <div class="ds-flame"></div>
        <div class="ds-boil">
          <div class="ds-boil-liquid"></div>
          <div class="ds-boil-bubble"></div>
          <div class="ds-boil-bubble b2"></div>
          <div class="ds-boil-bubble b3"></div>
        </div>
        <div class="ds-neck"></div>
        <div class="ds-condenser">
          <div class="ds-coolant"></div>
          <div class="ds-inner"></div>
        </div>
        <div class="ds-hose in"></div>
        <div class="ds-hose out"></div>
        <div class="ds-droplet"></div>
        <div class="ds-droplet d2"></div>
        <div class="ds-receiver">
          <div class="ds-distillate"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-distillation')) {
  customElements.define('concept-distillation', ConceptDistillation);
}
