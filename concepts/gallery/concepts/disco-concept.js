const discoStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Mirror ball night: the facet grid crawls across the turning
     ball, thrown spots wheel around the room, and the floor pulses
     on the beat. */
  .disco {
    width: 104px;
    height: 100px;
    position: relative;
    overflow: hidden;
  }

  /* Hanging rod. */
  .disco-rod {
    position: absolute;
    left: 50%;
    top: 0;
    width: 2px;
    height: 10px;
    margin-left: -1px;
    background: rgba(140, 255, 170, 0.7);
  }

  /* The ball: facet grid scrolling sideways reads as rotation. */
  .disco-ball {
    position: absolute;
    left: 50%;
    top: 10px;
    width: 40px;
    height: 40px;
    margin-left: -20px;
    border-radius: 50%;
    background:
      linear-gradient(0deg, rgba(0, 0, 0, 0.35), transparent 40%),
      repeating-linear-gradient(90deg,
        rgba(190, 255, 205, 0.9) 0 3px,
        rgba(0, 110, 22, 0.8) 3px 8px),
      repeating-linear-gradient(0deg,
        rgba(214, 255, 224, 0.4) 0 3px,
        rgba(0, 80, 16, 0.5) 3px 8px);
    background-blend-mode: normal, normal, multiply;
    border: 1px solid rgba(140, 255, 170, 0.7);
    box-shadow: 0 0 16px rgba(0, 204, 0, 0.55), inset -6px -4px 12px rgba(0, 0, 0, 0.5);
    animation: disco-turn 3s linear infinite;
  }

  @keyframes disco-turn {
    to { background-position: 16px 0, 16px 0, 0 0; }
  }

  /* Hot glint racing the facets. */
  .disco-glint {
    position: absolute;
    left: 50%;
    top: 14px;
    width: 8px;
    height: 8px;
    margin-left: -14px;
    border-radius: 50%;
    background: radial-gradient(circle, #f2ffdd, transparent 70%);
    animation: disco-glint 3s linear infinite;
  }

  @keyframes disco-glint {
    0% { transform: translateX(-6px); opacity: 0.3; }
    30% { transform: translateX(10px); opacity: 1; }
    60% { transform: translateX(22px); opacity: 0.35; }
    100% { transform: translateX(-6px); opacity: 0.3; }
  }

  /* Thrown spots: dots riding rotating carriers centred on the ball,
     each at a different radius/speed, flickering as they sweep. */
  .disco-arm {
    position: absolute;
    left: 50%;
    top: 30px;
    width: 0;
    height: 0;
    animation: disco-arm linear infinite;
  }

  .disco-arm.a1 { animation-duration: 3s; }
  .disco-arm.a2 { animation-duration: 3s; animation-delay: -1s; }
  .disco-arm.a3 { animation-duration: 3s; animation-delay: -2s; }
  .disco-arm.a4 { animation-duration: 4.5s; animation-delay: -0.6s; }
  .disco-arm.a5 { animation-duration: 4.5s; animation-delay: -2.8s; }

  @keyframes disco-arm {
    to { transform: rotate(360deg); }
  }

  .disco-spot {
    position: absolute;
    width: 7px;
    height: 5px;
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(214, 255, 224, 0.9), transparent 75%);
    animation: disco-spot 1.5s ease-in-out infinite;
  }

  .disco-arm.a1 .disco-spot { transform: translateX(44px); }
  .disco-arm.a2 .disco-spot { transform: translateX(50px); animation-delay: -0.4s; }
  .disco-arm.a3 .disco-spot { transform: translateX(40px); animation-delay: -0.9s; }
  .disco-arm.a4 .disco-spot { transform: translateX(54px); animation-delay: -0.2s; width: 9px; }
  .disco-arm.a5 .disco-spot { transform: translateX(47px); animation-delay: -1.1s; }

  @keyframes disco-spot {
    0%, 100% { opacity: 0.35; }
    50% { opacity: 1; }
  }

  /* Dance floor: checker tiles pulsing on the beat. */
  .disco-floor {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 22px;
    background:
      repeating-linear-gradient(90deg,
        rgba(0, 204, 0, 0.3) 0 13px,
        rgba(0, 70, 14, 0.35) 13px 26px);
    border-top: 1px solid rgba(0, 204, 0, 0.5);
    transform: perspective(40px) rotateX(30deg);
    transform-origin: bottom center;
    animation: disco-floor 1.5s steps(1) infinite;
  }

  @keyframes disco-floor {
    0% { background-position: 0 0; filter: brightness(1.35); }
    25% { filter: brightness(0.9); }
    50% { background-position: 13px 0; filter: brightness(1.35); }
    75% { filter: brightness(0.9); }
  }
`;

class ConceptDisco extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${discoStyles}</style>
      <div class="disco">
        <div class="disco-rod"></div>
        <div class="disco-arm a1"><div class="disco-spot"></div></div>
        <div class="disco-arm a2"><div class="disco-spot"></div></div>
        <div class="disco-arm a3"><div class="disco-spot"></div></div>
        <div class="disco-arm a4"><div class="disco-spot"></div></div>
        <div class="disco-arm a5"><div class="disco-spot"></div></div>
        <div class="disco-floor"></div>
        <div class="disco-ball"></div>
        <div class="disco-glint"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-disco')) {
  customElements.define('concept-disco', ConceptDisco);
}
