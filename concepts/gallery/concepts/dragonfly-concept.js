const dragonflyStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A dragonfly working a pond edge: it hovers with four independently
     beating wings, darts sideways to a new hover, and its long
     iridescent abdomen glints as it tilts. A reed sways below. */
  .dg {
    width: 116px;
    height: 84px;
    position: relative;
  }

  /* Reed. */
  .dg-reed {
    position: absolute;
    right: 22px;
    bottom: 0;
    width: 2px;
    height: 44px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.7), rgba(0, 110, 22, 0.7));
    transform-origin: 50% 100%;
    animation: dg-reed 4s ease-in-out infinite;
  }

  .dg-reed::before {
    content: '';
    position: absolute;
    top: -6px;
    left: -3px;
    width: 8px;
    height: 10px;
    border-radius: 50% 50% 50% 0;
    background: rgba(0, 150, 30, 0.7);
  }

  @keyframes dg-reed {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(4deg); }
  }

  /* The dragonfly darts between hovers. */
  .dg-fly {
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 24px;
    animation: dg-dart 5s ease-in-out infinite;
  }

  @keyframes dg-dart {
    0% { transform: translate(10px, 34px) rotate(-4deg); }
    /* Hover. */
    16%, 32% { transform: translate(30px, 20px) rotate(2deg); }
    /* Dart right. */
    46%, 62% { transform: translate(66px, 30px) rotate(-6deg); }
    /* Dart up-left. */
    78%, 90% { transform: translate(40px, 12px) rotate(4deg); }
    100% { transform: translate(10px, 34px) rotate(-4deg); }
  }

  /* Micro hover jitter. */
  .dg-jitter {
    position: absolute;
    inset: 0;
    animation: dg-jitter 0.3s ease-in-out infinite;
  }

  @keyframes dg-jitter {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-1px); }
  }

  /* Long segmented abdomen. */
  .dg-abdomen {
    position: absolute;
    left: 0;
    top: 11px;
    width: 30px;
    height: 3px;
    border-radius: 2px;
    background: repeating-linear-gradient(90deg,
      rgba(214, 255, 224, 0.9) 0 3px,
      rgba(0, 130, 26, 0.85) 3px 5px);
  }

  /* Thorax. */
  .dg-thorax {
    position: absolute;
    left: 28px;
    top: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, rgba(190, 255, 205, 0.85), rgba(0, 140, 28, 0.85));
  }

  /* Head + big eyes. */
  .dg-head {
    position: absolute;
    left: 35px;
    top: 7px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #f2ffdd, #2a8a3e 70%);
  }

  /* Four wings, each beating on its own fast timer. */
  .dg-wing {
    position: absolute;
    width: 22px;
    height: 8px;
    border-radius: 50% 50% 60% 40%;
    background: rgba(190, 255, 205, 0.28);
    border: 1px solid rgba(140, 255, 170, 0.5);
    filter: blur(0.4px);
    transform-origin: 0% 50%;
  }

  .dg-wing.fl { left: 24px; top: 2px; animation: dg-wingup 0.1s steps(2) infinite; }
  .dg-wing.hl { left: 22px; top: 12px; animation: dg-wingdn 0.1s steps(2) infinite; animation-delay: -0.05s; }
  .dg-wing.fr { left: 24px; top: 2px; transform: scaleX(-1); animation: dg-wingup-r 0.1s steps(2) infinite; }
  .dg-wing.hr { left: 22px; top: 12px; transform: scaleX(-1); animation: dg-wingdn-r 0.1s steps(2) infinite; animation-delay: -0.05s; }

  @keyframes dg-wingup {
    0% { transform: rotate(-16deg); }
    100% { transform: rotate(8deg); }
  }
  @keyframes dg-wingdn {
    0% { transform: rotate(16deg); }
    100% { transform: rotate(-8deg); }
  }
  @keyframes dg-wingup-r {
    0% { transform: scaleX(-1) rotate(-16deg); }
    100% { transform: scaleX(-1) rotate(8deg); }
  }
  @keyframes dg-wingdn-r {
    0% { transform: scaleX(-1) rotate(16deg); }
    100% { transform: scaleX(-1) rotate(-8deg); }
  }

  /* Pond shimmer at the bottom. */
  .dg-pond {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 8px;
    background: repeating-linear-gradient(90deg,
      rgba(140, 255, 170, 0.16) 0 4px,
      transparent 4px 10px);
    animation: dg-pond 3s ease-in-out infinite;
  }

  @keyframes dg-pond {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(4px); }
  }
`;

class ConceptDragonfly extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${dragonflyStyles}</style>
      <div class="dg">
        <div class="dg-pond"></div>
        <div class="dg-reed"></div>
        <div class="dg-fly">
          <div class="dg-jitter">
            <div class="dg-wing hl"></div>
            <div class="dg-wing hr"></div>
            <div class="dg-wing fl"></div>
            <div class="dg-wing fr"></div>
            <div class="dg-abdomen"></div>
            <div class="dg-thorax"></div>
            <div class="dg-head"></div>
          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-dragonfly')) {
  customElements.define('concept-dragonfly', ConceptDragonfly);
}
