// Ladybug, rebuilt: v1 and v2 preserved.
// v3 adds authentic Coccinellidae coloration: vibrant scarlet-red domed
// elytra with jet-black spots and white highlight glints, emerald garden leaf,
// obsidian black pronotum/head with white ocular patches, and translucent
// amber flight wings.
const ladybugStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .lb {
    width: 112px;
    height: 84px;
    position: relative;
  }

  .lb-leaf {
    position: absolute;
    left: 8px;
    bottom: 16px;
    width: 96px;
    height: 30px;
    border-radius: 0 100% 40% 100% / 0 100% 40% 100%;
    background: linear-gradient(135deg, rgba(0, 150, 30, 0.5), rgba(0, 80, 16, 0.7));
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  .lb-leaf::after {
    content: '';
    position: absolute;
    left: 6px;
    bottom: 6px;
    width: 84px;
    height: 1px;
    background: rgba(140, 255, 170, 0.4);
    transform: rotate(-8deg);
    transform-origin: 0 50%;
  }

  .lb-bug {
    position: absolute;
    left: 0;
    bottom: 30px;
    width: 26px;
    height: 20px;
    animation: lb-walk 8s ease-in-out infinite;
  }

  @keyframes lb-walk {
    0% { transform: translateX(12px) scaleX(1); }
    34% { transform: translateX(66px) scaleX(1); }
    40%, 62% { transform: translateX(70px) scaleX(1); }
    66% { transform: translateX(66px) scaleX(-1); }
    96% { transform: translateX(12px) scaleX(-1); }
    100% { transform: translateX(12px) scaleX(1); }
  }

  .lb-bob {
    position: absolute;
    inset: 0;
    animation: lb-bob 0.4s ease-in-out infinite;
  }

  @keyframes lb-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-1.5px); }
  }

  .lb-shell {
    position: absolute;
    left: 4px;
    top: 4px;
    width: 18px;
    height: 16px;
  }

  .lb-half {
    position: absolute;
    top: 0;
    width: 9px;
    height: 16px;
    background: radial-gradient(circle at 40% 30%, rgba(190, 255, 205, 0.85), rgba(0, 150, 30, 0.85) 60%, rgba(0, 90, 18, 0.9));
    border: 1px solid rgba(0, 204, 0, 0.6);
  }

  .lb-half::before,
  .lb-half::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(0, 50, 10, 0.9);
  }

  .lb-half::before { top: 4px; left: 2px; }
  .lb-half::after { top: 9px; left: 4px; }

  .lb-half.l { left: 0; border-radius: 60% 20% 40% 80%; transform-origin: 100% 20%; animation: lb-open-l 8s infinite; }
  .lb-half.r { right: 0; border-radius: 20% 60% 80% 40%; transform-origin: 0% 20%; animation: lb-open-r 8s infinite; }

  @keyframes lb-open-l {
    0%, 40% { transform: rotate(0deg); }
    46%, 60% { transform: rotate(-46deg); }
    66%, 100% { transform: rotate(0deg); }
  }

  @keyframes lb-open-r {
    0%, 40% { transform: rotate(0deg); }
    46%, 60% { transform: rotate(46deg); }
    66%, 100% { transform: rotate(0deg); }
  }

  .lb-flight {
    position: absolute;
    left: 5px;
    top: 5px;
    width: 16px;
    height: 14px;
    border-radius: 50% 50% 60% 60%;
    background: rgba(214, 255, 224, 0.4);
    border: 1px solid rgba(140, 255, 170, 0.5);
    opacity: 0;
    animation: lb-flight 8s steps(1) infinite, lb-buzz 0.07s steps(2) infinite;
  }

  @keyframes lb-flight {
    0%, 45% { opacity: 0; }
    47%, 60% { opacity: 0.8; }
    64%, 100% { opacity: 0; }
  }

  @keyframes lb-buzz {
    0% { transform: scaleY(1); }
    100% { transform: scaleY(0.85); }
  }

  .lb-head {
    position: absolute;
    left: 8px;
    top: -2px;
    width: 10px;
    height: 7px;
    border-radius: 50% 50% 40% 40%;
    background: rgba(0, 60, 12, 0.95);
    z-index: 2;
  }

  .lb-head::before,
  .lb-head::after {
    content: '';
    position: absolute;
    top: 2px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #d6ffe0;
  }

  .lb-head::before { left: 2px; }
  .lb-head::after { right: 2px; }

  .lb-ant {
    position: absolute;
    top: -3px;
    width: 5px;
    height: 5px;
    border: 1px solid rgba(140, 255, 170, 0.8);
    border-radius: 50%;
    border-bottom: none;
    border-right: none;
    animation: lb-ant 0.5s ease-in-out infinite;
  }

  .lb-ant.a1 { left: 6px; }
  .lb-ant.a2 { left: 14px; transform: scaleX(-1); }

  @keyframes lb-ant {
    0%, 100% { transform: rotate(-8deg); }
    50% { transform: rotate(8deg); }
  }

  .lb-ant.a2 {
    animation-name: lb-ant2;
  }

  @keyframes lb-ant2 {
    0%, 100% { transform: scaleX(-1) rotate(-8deg); }
    50% { transform: scaleX(-1) rotate(8deg); }
  }

  .lb-leg {
    position: absolute;
    top: 15px;
    width: 5px;
    height: 5px;
    border-left: 1.5px solid rgba(0, 90, 18, 0.9);
    transform-origin: top center;
    animation: lb-step 0.4s ease-in-out infinite;
  }

  .lb-leg.g1 { left: 5px; animation-delay: 0s; }
  .lb-leg.g2 { left: 11px; animation-delay: -0.13s; }
  .lb-leg.g3 { left: 17px; animation-delay: -0.26s; }

  @keyframes lb-step {
    0%, 100% { transform: rotate(-14deg); }
    50% { transform: rotate(14deg); }
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

  .lb {
    width: 112px;
    height: 92px;
    position: relative;
  }

  .lb-leaf {
    position: absolute;
    left: 6px;
    right: 6px;
    bottom: 10px;
    height: 44px;
    border-radius: 4% 96% 30% 96% / 60% 90% 40% 90%;
    background: linear-gradient(120deg, rgba(0, 150, 30, 0.45), rgba(0, 80, 16, 0.6));
    border: 1px solid rgba(0, 204, 0, 0.45);
    overflow: hidden;
  }

  .lb-leaf::before {
    content: '';
    position: absolute;
    left: 4%;
    top: 50%;
    width: 92%;
    height: 1px;
    background: rgba(140, 255, 170, 0.5);
    transform: rotate(-3deg);
  }

  .lb-leaf::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(60deg, transparent 48%, rgba(140, 255, 170, 0.25) 49%, transparent 51%),
      linear-gradient(115deg, transparent 48%, rgba(140, 255, 170, 0.25) 49%, transparent 51%),
      linear-gradient(75deg, transparent 48%, rgba(140, 255, 170, 0.2) 49%, transparent 51%);
  }

  .lb-bug {
    position: absolute;
    left: 14px;
    top: 30px;
    width: 30px;
    height: 24px;
    animation: lb-walk 8s ease-in-out infinite;
  }

  @keyframes lb-walk {
    0% { transform: translate(0, 6px) rotate(8deg); }
    18% { transform: translate(18px, 0) rotate(4deg); }
    34%, 52% { transform: translate(32px, -2px) rotate(0deg); }
    72% { transform: translate(50px, 2px) rotate(-6deg); }
    100% { transform: translate(64px, 8px) rotate(-10deg); }
  }

  .lb-wobble {
    position: absolute;
    inset: 0;
    animation: lb-wobble 0.7s ease-in-out infinite;
  }

  @keyframes lb-wobble {
    0%, 100% { transform: rotate(-2deg); }
    50% { transform: rotate(2deg); }
  }

  .lb-legpair {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 30px;
    height: 2px;
    margin: -1px 0 0 -15px;
    background: rgba(140, 255, 170, 0.7);
    border-radius: 1px;
    animation: lb-paddle 0.7s ease-in-out infinite;
  }

  .lb-legpair.g1 { transform: rotate(46deg); }
  .lb-legpair.g2 { transform: rotate(90deg); animation-delay: -0.23s; }
  .lb-legpair.g3 { transform: rotate(134deg); animation-delay: -0.46s; }

  @keyframes lb-paddle {
    0%, 100% { transform: rotate(var(--a, 46deg)) scaleX(1); }
    50% { transform: rotate(calc(var(--a, 46deg) + 10deg)) scaleX(0.92); }
  }

  .lb-legpair.g1 { --a: 46deg; }
  .lb-legpair.g2 { --a: 90deg; }
  .lb-legpair.g3 { --a: 134deg; }

  .lb-shell {
    position: absolute;
    left: 4px;
    top: 2px;
    width: 22px;
    height: 20px;
  }

  .lb-elytron {
    position: absolute;
    top: 0;
    width: 11px;
    height: 20px;
    background: radial-gradient(circle at 40% 30%, rgba(190, 255, 205, 0.9), rgba(0, 160, 32, 0.9) 55%, rgba(0, 100, 20, 0.95));
    border: 1.5px solid rgba(0, 204, 0, 0.7);
    box-shadow: inset 0 0 4px rgba(0, 60, 12, 0.6);
  }

  .lb-elytron.left {
    left: 0;
    border-radius: 90% 8% 10% 90% / 70% 10% 12% 90%;
    transform-origin: 100% 30%;
    animation: lb-flare-l 8s ease-in-out infinite;
  }

  .lb-elytron.right {
    right: 0;
    border-radius: 8% 90% 90% 10% / 10% 70% 90% 12%;
    transform-origin: 0% 30%;
    animation: lb-flare-r 8s ease-in-out infinite;
  }

  .lb-elytron::before,
  .lb-elytron::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: #041a0a;
  }

  .lb-elytron::before { left: 3px; top: 4px; width: 3.5px; height: 3.5px; }
  .lb-elytron::after { left: 5px; top: 12px; width: 3px; height: 3px; }

  @keyframes lb-flare-l {
    0%, 36%, 50%, 100% { transform: rotate(0deg); }
    41%, 45% { transform: rotate(-34deg) translateY(-1px); }
  }

  @keyframes lb-flare-r {
    0%, 36%, 50%, 100% { transform: rotate(0deg); }
    41%, 45% { transform: rotate(34deg) translateY(-1px); }
  }

  .lb-hindwing {
    position: absolute;
    left: 7px;
    top: 4px;
    width: 16px;
    height: 14px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.35);
    filter: blur(0.5px);
    opacity: 0;
    animation: lb-hind 8s ease-in-out infinite;
  }

  @keyframes lb-hind {
    0%, 38%, 48%, 100% { opacity: 0; transform: scale(0.5); }
    42%, 44% { opacity: 1; transform: scale(1.05); }
  }

  .lb-head {
    position: absolute;
    left: 22px;
    top: 7px;
    width: 9px;
    height: 10px;
    border-radius: 30% 70% 70% 30% / 50% 50% 50% 50%;
    background: linear-gradient(90deg, rgba(0, 90, 18, 0.95), rgba(0, 50, 10, 0.95));
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  .lb-head::before,
  .lb-head::after {
    content: '';
    position: absolute;
    width: 1.8px;
    height: 1.8px;
    border-radius: 50%;
    background: #d6ffe0;
  }

  .lb-head::before { right: 2px; top: 2px; }
  .lb-head::after { right: 2px; bottom: 2px; }

  .lb-antenna {
    position: absolute;
    left: 29px;
    width: 7px;
    height: 5px;
    border-right: 1.2px solid rgba(140, 255, 170, 0.8);
    border-top: 1.2px solid rgba(140, 255, 170, 0.8);
    border-radius: 0 80% 0 0;
    transform-origin: 0 100%;
    animation: lb-antenna 1.1s ease-in-out infinite;
  }

  .lb-antenna.a1 { top: 4px; transform: rotate(-16deg); --w: -16deg; }
  .lb-antenna.a2 { top: 13px; transform: rotate(28deg) scaleY(-1); --w: 28deg; animation-delay: -0.55s; }

  @keyframes lb-antenna {
    0%, 100% { transform: rotate(var(--w)) scaleY(var(--sy, 1)); }
    50% { transform: rotate(calc(var(--w) + 8deg)) scaleY(var(--sy, 1)); }
  }

  .lb-antenna.a2 { --sy: -1; }
  `,
  v3: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v3: Realistic garden ladybug with glossy lacquer crimson-scarlet elytra,
     obsidian black spots, white ocular spots, and emerald leaf with veins. */
  .lbc {
    width: 112px;
    height: 92px;
    position: relative;
    background: radial-gradient(circle at 50% 60%, #064e3b 0%, #022c22 60%, #011c15 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Garden leaf */
  .lbc-leaf {
    position: absolute;
    left: 6px;
    right: 6px;
    bottom: 10px;
    height: 44px;
    border-radius: 4% 96% 30% 96% / 60% 90% 40% 90%;
    background: linear-gradient(120deg, #15803d 0%, #166534 60%, #14532d 100%);
    border: 1.5px solid #22c55e;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    overflow: hidden;
  }

  /* Leaf midrib and lateral veins */
  .lbc-leaf::before {
    content: '';
    position: absolute;
    left: 4%;
    top: 50%;
    width: 92%;
    height: 1.5px;
    background: #86efac;
    transform: rotate(-3deg);
  }

  .lbc-leaf::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(60deg, transparent 48%, rgba(134, 239, 172, 0.35) 49%, transparent 51%),
      linear-gradient(115deg, transparent 48%, rgba(134, 239, 172, 0.35) 49%, transparent 51%),
      linear-gradient(75deg, transparent 48%, rgba(134, 239, 172, 0.3) 49%, transparent 51%);
  }

  .lbc-bug {
    position: absolute;
    left: 14px;
    top: 30px;
    width: 30px;
    height: 24px;
    animation: lbc-walk 8s ease-in-out infinite;
  }

  @keyframes lbc-walk {
    0% { transform: translate(0, 6px) rotate(8deg); }
    18% { transform: translate(18px, 0) rotate(4deg); }
    34%, 52% { transform: translate(32px, -2px) rotate(0deg); }
    72% { transform: translate(50px, 2px) rotate(-6deg); }
    100% { transform: translate(64px, 8px) rotate(-10deg); }
  }

  .lbc-wobble {
    position: absolute;
    inset: 0;
    animation: lbc-wobble 0.7s ease-in-out infinite;
  }

  @keyframes lbc-wobble {
    0%, 100% { transform: rotate(-2deg); }
    50% { transform: rotate(2deg); }
  }

  /* Articulated black legs */
  .lbc-legpair {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 30px;
    height: 2px;
    margin: -1px 0 0 -15px;
    background: #18181b;
    border-radius: 1px;
    animation: lbc-paddle 0.7s ease-in-out infinite;
  }

  .lbc-legpair.g1 { transform: rotate(46deg); }
  .lbc-legpair.g2 { transform: rotate(90deg); animation-delay: -0.23s; }
  .lbc-legpair.g3 { transform: rotate(134deg); animation-delay: -0.46s; }

  @keyframes lbc-paddle {
    0%, 100% { transform: rotate(var(--a, 46deg)) scaleX(1); }
    50% { transform: rotate(calc(var(--a, 46deg) + 10deg)) scaleX(0.92); }
  }

  .lbc-legpair.g1 { --a: 46deg; }
  .lbc-legpair.g2 { --a: 90deg; }
  .lbc-legpair.g3 { --a: 134deg; }

  .lbc-shell {
    position: absolute;
    left: 4px;
    top: 2px;
    width: 22px;
    height: 20px;
  }

  /* Glossy scarlet-red elytra */
  .lbc-elytron {
    position: absolute;
    top: 0;
    width: 11px;
    height: 20px;
    background: radial-gradient(circle at 35% 25%, #ff6b6b 0%, #ef4444 45%, #b91c1c 85%, #7f1d1d 100%);
    border: 1px solid #f87171;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5), inset 0 1px 3px rgba(255, 255, 255, 0.4);
  }

  .lbc-elytron.left {
    left: 0;
    border-radius: 90% 8% 10% 90% / 70% 10% 12% 90%;
    transform-origin: 100% 30%;
    animation: lbc-flare-l 8s ease-in-out infinite;
  }

  .lbc-elytron.right {
    right: 0;
    border-radius: 8% 90% 90% 10% / 10% 70% 90% 12%;
    transform-origin: 0% 30%;
    animation: lbc-flare-r 8s ease-in-out infinite;
  }

  /* Jet-black elytral spots */
  .lbc-elytron::before,
  .lbc-elytron::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: #09090b;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  }

  .lbc-elytron::before { left: 3px; top: 4px; width: 3.5px; height: 3.5px; }
  .lbc-elytron::after { left: 5px; top: 12px; width: 3px; height: 3px; }

  @keyframes lbc-flare-l {
    0%, 36%, 50%, 100% { transform: rotate(0deg); }
    41%, 45% { transform: rotate(-34deg) translateY(-1px); }
  }

  @keyframes lbc-flare-r {
    0%, 36%, 50%, 100% { transform: rotate(0deg); }
    41%, 45% { transform: rotate(34deg) translateY(-1px); }
  }

  /* Hindwings: translucent smoky amber */
  .lbc-hindwing {
    position: absolute;
    left: 7px;
    top: 4px;
    width: 16px;
    height: 14px;
    border-radius: 50%;
    background: rgba(254, 215, 170, 0.7);
    border: 1px solid rgba(251, 146, 60, 0.6);
    filter: blur(0.5px);
    opacity: 0;
    animation: lbc-hind 8s ease-in-out infinite;
  }

  @keyframes lbc-hind {
    0%, 38%, 48%, 100% { opacity: 0; transform: scale(0.5); }
    42%, 44% { opacity: 1; transform: scale(1.05); }
  }

  /* Jet black head with white ocular patches */
  .lbc-head {
    position: absolute;
    left: 22px;
    top: 7px;
    width: 9px;
    height: 10px;
    border-radius: 30% 70% 70% 30% / 50% 50% 50% 50%;
    background: #09090b;
    border: 1px solid #27272a;
  }

  .lbc-head::before,
  .lbc-head::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 2px #ffffff;
  }

  .lbc-head::before { right: 2px; top: 2px; }
  .lbc-head::after { right: 2px; bottom: 2px; }

  /* Whiskered antennae */
  .lbc-antenna {
    position: absolute;
    left: 29px;
    width: 7px;
    height: 5px;
    border-right: 1.5px solid #09090b;
    border-top: 1.5px solid #09090b;
    border-radius: 0 80% 0 0;
    transform-origin: 0 100%;
    animation: lbc-antenna 1.1s ease-in-out infinite;
  }

  .lbc-antenna.a1 { top: 4px; transform: rotate(-16deg); --w: -16deg; }
  .lbc-antenna.a2 { top: 13px; transform: rotate(28deg) scaleY(-1); --w: 28deg; animation-delay: -0.55s; }

  @keyframes lbc-antenna {
    0%, 100% { transform: rotate(var(--w)) scaleY(var(--sy, 1)); }
    50% { transform: rotate(calc(var(--w) + 8deg)) scaleY(var(--sy, 1)); }
  }

  .lbc-antenna.a2 { --sy: -1; }
  `,
};

const ladybugMarkup = {
  v1: `
      <div class="lb">
        <div class="lb-leaf"></div>
        <div class="lb-bug">
          <div class="lb-bob">
            <div class="lb-leg g1"></div>
            <div class="lb-leg g2"></div>
            <div class="lb-leg g3"></div>
            <div class="lb-flight"></div>
            <div class="lb-shell">
              <div class="lb-half l"></div>
              <div class="lb-half r"></div>
            </div>
            <div class="lb-head"></div>
            <div class="lb-ant a1"></div>
            <div class="lb-ant a2"></div>
          </div>
        </div>
      </div>
    `,
  v2: `
      <div class="lb">
        <div class="lb-leaf"></div>
        <div class="lb-bug">
          <div class="lb-wobble">
            <div class="lb-legpair g1"></div>
            <div class="lb-legpair g2"></div>
            <div class="lb-legpair g3"></div>
            <div class="lb-hindwing"></div>
            <div class="lb-shell">
              <div class="lb-elytron left"></div>
              <div class="lb-elytron right"></div>
            </div>
            <div class="lb-head"></div>
            <div class="lb-antenna a1"></div>
            <div class="lb-antenna a2"></div>
          </div>
        </div>
      </div>
    `,
  v3: `
      <div class="lbc">
        <div class="lbc-leaf"></div>
        <div class="lbc-bug">
          <div class="lbc-wobble">
            <div class="lbc-legpair g1"></div>
            <div class="lbc-legpair g2"></div>
            <div class="lbc-legpair g3"></div>
            <div class="lbc-hindwing"></div>
            <div class="lbc-shell">
              <div class="lbc-elytron left"></div>
              <div class="lbc-elytron right"></div>
            </div>
            <div class="lbc-head"></div>
            <div class="lbc-antenna a1"></div>
            <div class="lbc-antenna a2"></div>
          </div>
        </div>
      </div>
    `,
};

class ConceptLadybug extends HTMLElement {
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
    const version = this.getAttribute('version') || 'v3';
    this.shadowRoot.innerHTML = `<style>${ladybugStyles[version] || ladybugStyles.v3}</style>${ladybugMarkup[version] || ladybugMarkup.v3}`;
  }
}

if (!customElements.get('concept-ladybug')) {
  customElements.define('concept-ladybug', ConceptLadybug);
}
