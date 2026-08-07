const ostrichStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A sprinting ostrich in full bipedal ground stride: long muscular legs
     alternate in high-speed reciprocating strides, the torso bounces with
     every footfall, while the long neck counter-rotates to keep the head level. */
  .ost {
    width: 116px;
    height: 98px;
    position: relative;
  }

  /* Ground track with running dust motes */
  .ost-ground {
    position: absolute;
    left: 6px;
    bottom: 12px;
    width: 104px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(140, 255, 170, 0.8), transparent);
  }

  .ost-dust {
    position: absolute;
    bottom: 14px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.7);
    animation: ost-dust-kick 0.6s linear infinite;
  }

  .ost-dust.d1 { left: 42px; animation-delay: 0s; }
  .ost-dust.d2 { left: 58px; animation-delay: -0.3s; }

  @keyframes ost-dust-kick {
    0% { opacity: 0.9; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(-14px, -8px) scale(0.3); }
  }

  /* Bouncing torso carrier */
  .ost-body-rig {
    position: absolute;
    left: 28px;
    top: 20px;
    width: 60px;
    height: 64px;
    animation: ost-torso-bounce 0.6s ease-in-out infinite alternate;
  }

  @keyframes ost-torso-bounce {
    0% { transform: translateY(0); }
    100% { transform: translateY(-4px); }
  }

  /* Feathery plump torso */
  .ost-torso {
    position: absolute;
    left: 14px;
    top: 18px;
    width: 34px;
    height: 24px;
    border-radius: 50% 60% 45% 55%;
    background: radial-gradient(circle at 40% 40%, rgba(0, 150, 30, 0.9), rgba(0, 35, 8, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
    z-index: 3;
  }

  /* Tail feathers */
  .ost-tail {
    position: absolute;
    left: 6px;
    top: 20px;
    width: 12px;
    height: 10px;
    border-radius: 6px 0 0 6px;
    background: rgba(140, 255, 170, 0.75);
  }

  /* Alternating stride legs */
  .ost-leg {
    position: absolute;
    top: 36px;
    width: 14px;
    height: 34px;
    transform-origin: 4px 0;
    z-index: 2;
  }

  .ost-thigh {
    width: 3px;
    height: 18px;
    background: rgba(140, 255, 170, 0.9);
    border-radius: 1.5px;
    transform: rotate(20deg);
  }

  .ost-shin {
    position: absolute;
    left: 6px;
    top: 14px;
    width: 2.5px;
    height: 18px;
    background: rgba(190, 255, 205, 0.95);
    border-radius: 1px;
    transform: rotate(-35deg);
  }

  .ost-leg.l1 {
    left: 28px;
    animation: ost-stride-1 0.6s linear infinite;
  }

  .ost-leg.l2 {
    left: 36px;
    animation: ost-stride-2 0.6s linear infinite;
  }

  @keyframes ost-stride-1 {
    0% { transform: rotate(35deg); }
    25% { transform: rotate(0deg); }
    50% { transform: rotate(-40deg); }
    75% { transform: rotate(-10deg); }
    100% { transform: rotate(35deg); }
  }

  @keyframes ost-stride-2 {
    0% { transform: rotate(-40deg); }
    25% { transform: rotate(-10deg); }
    50% { transform: rotate(35deg); }
    75% { transform: rotate(0deg); }
    100% { transform: rotate(-40deg); }
  }

  /* Sinuous neck counter-rotating to stabilize head level */
  .ost-neck-rig {
    position: absolute;
    right: 10px;
    top: -8px;
    width: 24px;
    height: 36px;
    animation: ost-neck-stabilize 0.6s ease-in-out infinite alternate;
  }

  @keyframes ost-neck-stabilize {
    0% { transform: translateY(0) rotate(0deg); }
    100% { transform: translateY(4px) rotate(-6deg); }
  }

  .ost-neck {
    position: absolute;
    left: 6px;
    top: 10px;
    width: 3px;
    height: 22px;
    background: rgba(140, 255, 170, 0.9);
    border-radius: 1.5px;
    transform: rotate(15deg);
  }

  /* Gaze-stabilized level head */
  .ost-head {
    position: absolute;
    right: 2px;
    top: 4px;
    width: 12px;
    height: 8px;
    border-radius: 50% 60% 40% 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.8);
  }

  .ost-beak {
    position: absolute;
    right: -4px;
    top: 2px;
    width: 6px;
    height: 3px;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    background: var(--accent, #00cc00);
  }
`;

class ConceptOstrich extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${ostrichStyles}</style>
      <div class="ost">
        <div class="ost-ground"></div>
        <div class="ost-dust d1"></div>
        <div class="ost-dust d2"></div>
        <div class="ost-body-rig">
          <div class="ost-tail"></div>
          <div class="ost-torso"></div>
          <div class="ost-leg l1">
            <div class="ost-thigh"></div>
            <div class="ost-shin"></div>
          </div>
          <div class="ost-leg l2">
            <div class="ost-thigh"></div>
            <div class="ost-shin"></div>
          </div>
          <div class="ost-neck-rig">
            <div class="ost-neck"></div>
            <div class="ost-head">
              <div class="ost-beak"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-ostrich')) {
  customElements.define('concept-ostrich', ConceptOstrich);
}
