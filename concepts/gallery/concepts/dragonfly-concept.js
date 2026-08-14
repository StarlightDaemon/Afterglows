const dragonflyStyles = {
  v1: `
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
    16%, 32% { transform: translate(30px, 20px) rotate(2deg); }
    46%, 62% { transform: translate(66px, 30px) rotate(-6deg); }
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
  `,
  v2: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v2: Iridescent blue darner dragonfly with electric cyan/sapphire abdomen,
     metallic emerald thorax, gold-green compound eyes, vitreous prismatic wings,
     and shimmering wetland pond. */
  .dgc {
    width: 116px;
    height: 84px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #032030 0%, #010c14 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Wetland reed */
  .dgc-reed {
    position: absolute;
    right: 22px;
    bottom: 0;
    width: 2px;
    height: 44px;
    background: linear-gradient(180deg, #4ade80, #15803d);
    transform-origin: 50% 100%;
    animation: dgc-reed 4s ease-in-out infinite;
  }

  .dgc-reed::before {
    content: '';
    position: absolute;
    top: -6px;
    left: -3px;
    width: 8px;
    height: 10px;
    border-radius: 50% 50% 50% 0;
    background: #16a34a;
    border: 0.5px solid #86efac;
  }

  @keyframes dgc-reed {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(4deg); }
  }

  /* Dragonfly flight path */
  .dgc-fly {
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 24px;
    animation: dgc-dart 5s ease-in-out infinite;
  }

  @keyframes dgc-dart {
    0% { transform: translate(10px, 34px) rotate(-4deg); }
    16%, 32% { transform: translate(30px, 20px) rotate(2deg); }
    46%, 62% { transform: translate(66px, 30px) rotate(-6deg); }
    78%, 90% { transform: translate(40px, 12px) rotate(4deg); }
    100% { transform: translate(10px, 34px) rotate(-4deg); }
  }

  .dgc-jitter {
    position: absolute;
    inset: 0;
    animation: dgc-jitter 0.3s ease-in-out infinite;
  }

  @keyframes dgc-jitter {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-1px); }
  }

  /* Segmented sapphire/cyan abdomen */
  .dgc-abdomen {
    position: absolute;
    left: 0;
    top: 11px;
    width: 30px;
    height: 3.5px;
    border-radius: 2px;
    background: repeating-linear-gradient(90deg,
      #00f0ff 0 3px,
      #0284c7 3px 5px);
    box-shadow: 0 0 6px rgba(0, 240, 255, 0.7);
  }

  /* Metallic cyan-emerald thorax */
  .dgc-thorax {
    position: absolute;
    left: 28px;
    top: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #67e8f9 0%, #0d9488 70%, #115e59 100%);
    box-shadow: 0 0 4px rgba(103, 232, 249, 0.5);
  }

  /* Multifaceted gold/green compound eyes */
  .dgc-head {
    position: absolute;
    left: 35px;
    top: 7px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #fef08a 0%, #10b981 70%, #047857 100%);
    box-shadow: 0 0 6px #10b981;
  }

  /* Vitreous prismatic wings */
  .dgc-wing {
    position: absolute;
    width: 22px;
    height: 8px;
    border-radius: 50% 50% 60% 40%;
    background: linear-gradient(135deg, rgba(224, 242, 254, 0.6) 0%, rgba(186, 230, 253, 0.3) 100%);
    border: 1px solid rgba(125, 211, 252, 0.7);
    filter: blur(0.3px);
    transform-origin: 0% 50%;
  }

  .dgc-wing.fl { left: 24px; top: 2px; animation: dgc-wingup 0.1s steps(2) infinite; }
  .dgc-wing.hl { left: 22px; top: 12px; animation: dgc-wingdn 0.1s steps(2) infinite; animation-delay: -0.05s; }
  .dgc-wing.fr { left: 24px; top: 2px; transform: scaleX(-1); animation: dgc-wingup-r 0.1s steps(2) infinite; }
  .dgc-wing.hr { left: 22px; top: 12px; transform: scaleX(-1); animation: dgc-wingdn-r 0.1s steps(2) infinite; animation-delay: -0.05s; }

  @keyframes dgc-wingup {
    0% { transform: rotate(-16deg); }
    100% { transform: rotate(8deg); }
  }
  @keyframes dgc-wingdn {
    0% { transform: rotate(16deg); }
    100% { transform: rotate(-8deg); }
  }
  @keyframes dgc-wingup-r {
    0% { transform: scaleX(-1) rotate(-16deg); }
    100% { transform: scaleX(-1) rotate(8deg); }
  }
  @keyframes dgc-wingdn-r {
    0% { transform: scaleX(-1) rotate(16deg); }
    100% { transform: scaleX(-1) rotate(-8deg); }
  }

  /* Shimmering wetland water ripples */
  .dgc-pond {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 8px;
    background: repeating-linear-gradient(90deg,
      rgba(56, 189, 248, 0.35) 0 4px,
      transparent 4px 10px);
    animation: dgc-pond 3s ease-in-out infinite;
  }

  @keyframes dgc-pond {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(4px); }
  }
  `,
};

const dragonflyMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="dgc">
        <div class="dgc-pond"></div>
        <div class="dgc-reed"></div>
        <div class="dgc-fly">
          <div class="dgc-jitter">
            <div class="dgc-wing hl"></div>
            <div class="dgc-wing hr"></div>
            <div class="dgc-wing fl"></div>
            <div class="dgc-wing fr"></div>
            <div class="dgc-abdomen"></div>
            <div class="dgc-thorax"></div>
            <div class="dgc-head"></div>
          </div>
        </div>
      </div>
    `,
};

class ConceptDragonfly extends HTMLElement {
  static get observedAttributes() { return ['version']; }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }
  render() {
    const version = this.getAttribute('version') || 'v2';
    this.shadowRoot.innerHTML = `<style>${dragonflyStyles[version] || dragonflyStyles.v2}</style>${dragonflyMarkup[version] || dragonflyMarkup.v2}`;
  }
}

if (!customElements.get('concept-dragonfly')) {
  customElements.define('concept-dragonfly', ConceptDragonfly);
}
