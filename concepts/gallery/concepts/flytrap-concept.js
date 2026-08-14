// Venus flytrap: v1 and v2 preserved.
// v3 adds authentic Dionaea muscipula coloration: deep digestive anthocyanin
// crimson interior zone, emerald-green exterior lobes and basal rosette,
// ivory-chartreuse interlocking marginal cilia teeth, amber trigger hairs,
// and an iridescent blue-green bottle fly.
const flytrapStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .vt {
    width: 104px;
    height: 96px;
    position: relative;
  }

  .vt-stem {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 4px;
    height: 40px;
    margin-left: -2px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.8), rgba(0, 110, 22, 0.8));
  }

  .vt-base {
    position: absolute;
    left: 50%;
    bottom: 6px;
    width: 26px;
    height: 8px;
    margin-left: -13px;
    border-radius: 50% 50% 40% 40%;
    background: rgba(0, 90, 18, 0.7);
  }

  .vt-head {
    position: absolute;
    left: 50%;
    top: 12px;
    width: 0;
    height: 0;
  }

  .vt-lobe {
    position: absolute;
    top: 0;
    width: 26px;
    height: 34px;
    background: radial-gradient(ellipse at 50% 40%,
      rgba(190, 255, 205, 0.55),
      rgba(0, 160, 32, 0.6) 60%,
      rgba(0, 90, 18, 0.75));
    border: 1px solid rgba(140, 255, 170, 0.7);
    transform-origin: 100% 50%;
  }

  .vt-lobe.left {
    left: -26px;
    border-radius: 80% 20% 30% 70% / 60% 40% 60% 40%;
    animation: vt-snap-l 6s infinite;
  }

  .vt-lobe.right {
    left: 0;
    transform-origin: 0% 50%;
    border-radius: 20% 80% 70% 30% / 40% 60% 40% 60%;
    animation: vt-snap-r 6s infinite;
  }

  .vt-teeth {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 6px;
    background: repeating-linear-gradient(180deg,
      rgba(214, 255, 224, 0.9) 0 2px,
      transparent 2px 6px);
  }

  .vt-lobe.left .vt-teeth { left: -3px; }
  .vt-lobe.right .vt-teeth { right: -3px; }

  .vt-hair {
    position: absolute;
    width: 1px;
    height: 6px;
    background: rgba(140, 255, 170, 0.8);
    animation: vt-twitch 6s infinite;
  }

  .vt-lobe.left .vt-hair.h1 { left: 8px; top: 10px; }
  .vt-lobe.left .vt-hair.h2 { left: 14px; top: 18px; }
  .vt-lobe.right .vt-hair.h1 { right: 8px; top: 10px; }
  .vt-lobe.right .vt-hair.h2 { right: 14px; top: 18px; }

  @keyframes vt-twitch {
    0%, 28% { transform: rotate(0deg); }
    30% { transform: rotate(-12deg); }
    33% { transform: rotate(8deg); }
    36%, 100% { transform: rotate(0deg); }
  }

  @keyframes vt-snap-l {
    0%, 36% { transform: rotate(-32deg); }
    40% { transform: rotate(-2deg); }
    44% { transform: rotate(-6deg); }
    70% { transform: rotate(-6deg); }
    90%, 100% { transform: rotate(-32deg); }
  }

  @keyframes vt-snap-r {
    0%, 36% { transform: rotate(32deg); }
    40% { transform: rotate(2deg); }
    44% { transform: rotate(6deg); }
    70% { transform: rotate(6deg); }
    90%, 100% { transform: rotate(32deg); }
  }

  .vt-fly {
    position: absolute;
    left: 0;
    top: 20px;
    width: 6px;
    height: 4px;
    animation: vt-fly 6s infinite;
  }

  .vt-fly::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: rgba(0, 70, 14, 0.95);
    box-shadow: 0 0 3px rgba(140, 255, 170, 0.6);
  }

  .vt-fly::after {
    content: '';
    position: absolute;
    left: -2px;
    top: -2px;
    width: 8px;
    height: 3px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.4);
    animation: vt-flywing 0.08s steps(2) infinite;
  }

  @keyframes vt-flywing {
    0% { transform: scaleY(1); }
    100% { transform: scaleY(0.5); }
  }

  @keyframes vt-fly {
    0% { left: 4px; top: 8px; opacity: 0; }
    8% { opacity: 1; }
    22% { left: 34px; top: 28px; }
    34% { left: 48px; top: 24px; }
    38% { left: 50px; top: 24px; opacity: 1; }
    41% { left: 50px; top: 24px; opacity: 0; }
    100% { opacity: 0; }
  }

  .vt-glow {
    position: absolute;
    left: 50%;
    top: 24px;
    width: 20px;
    height: 20px;
    margin-left: -10px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 204, 0, 0.4), transparent 70%);
    opacity: 0;
    animation: vt-glow 6s infinite;
  }

  @keyframes vt-glow {
    0%, 42% { opacity: 0; }
    50% { opacity: 0.9; }
    68% { opacity: 0.5; }
    80%, 100% { opacity: 0; }
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

  .vf {
    width: 104px;
    height: 96px;
    position: relative;
  }

  .vf-rosette {
    position: absolute;
    left: 50%;
    bottom: 6px;
    width: 0;
    height: 0;
  }

  .vf-baseleaf {
    position: absolute;
    bottom: 0;
    left: -5px;
    width: 26px;
    height: 9px;
    border-radius: 10% 90% 30% 90% / 60% 90% 40% 90%;
    background: linear-gradient(100deg, rgba(0, 140, 28, 0.7), rgba(0, 80, 16, 0.8));
    transform-origin: 0 50%;
  }

  .vf-baseleaf.b1 { transform: rotate(-160deg); }
  .vf-baseleaf.b2 { transform: rotate(-20deg); }
  .vf-baseleaf.b3 { transform: rotate(-120deg); width: 20px; opacity: 0.8; }
  .vf-baseleaf.b4 { transform: rotate(-60deg); width: 20px; opacity: 0.8; }

  .vf-stem {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 5px;
    height: 40px;
    margin-left: -2.5px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.9), rgba(0, 100, 20, 0.9));
    transform-origin: 50% 100%;
    animation: vf-sway 9s ease-in-out infinite;
  }

  @keyframes vf-sway {
    0%, 100% { transform: rotate(-2deg); }
    30% { transform: rotate(2deg); }
    47% { transform: rotate(-5deg); }
    52% { transform: rotate(1deg); }
    70% { transform: rotate(-1deg); }
  }

  .vf-trap {
    position: absolute;
    left: 50%;
    bottom: 44px;
    width: 0;
    height: 0;
    animation: vf-sway 9s ease-in-out infinite;
  }

  .vf-lobe {
    position: absolute;
    bottom: 0;
    width: 19px;
    height: 27px;
    background: radial-gradient(ellipse at 50% 88%,
      rgba(0, 70, 14, 0.9) 0 16%,
      rgba(0, 160, 32, 0.85) 55%,
      rgba(160, 255, 185, 0.95));
    border: 1.5px solid rgba(0, 204, 0, 0.75);
    clip-path: polygon(
      0 100%, 0 30%, 12% 12%, 30% 4%,
      45% 0, 55% 14%, 68% 2%, 78% 16%, 90% 6%, 100% 20%,
      100% 100%);
    animation-duration: 9s;
    animation-timing-function: cubic-bezier(0.6, 0, 0.2, 1);
    animation-iteration-count: infinite;
  }

  .vf-lobe.left {
    left: -19px;
    transform-origin: 100% 100%;
    animation-name: vf-lobe-l;
  }

  .vf-lobe.right {
    left: 0;
    transform: scaleX(-1);
    transform-origin: 0% 100%;
    animation-name: vf-lobe-r;
  }

  @keyframes vf-lobe-l {
    0%, 44% { transform: rotate(-28deg); }
    46%, 56% { transform: rotate(-2deg); }
    60% { transform: rotate(-6deg); }
    64%, 74% { transform: rotate(-2deg); }
    88%, 100% { transform: rotate(-28deg); }
  }

  @keyframes vf-lobe-r {
    0%, 44% { transform: scaleX(-1) rotate(-28deg); }
    46%, 56% { transform: scaleX(-1) rotate(-2deg); }
    60% { transform: scaleX(-1) rotate(-6deg); }
    64%, 74% { transform: scaleX(-1) rotate(-2deg); }
    88%, 100% { transform: scaleX(-1) rotate(-28deg); }
  }

  .vf-hair {
    position: absolute;
    bottom: 6px;
    width: 1.5px;
    height: 6px;
    background: rgba(214, 255, 224, 0.8);
    opacity: 0;
    animation: vf-hair 9s infinite;
  }

  .vf-hair.h1 { left: -8px; transform: rotate(-16deg); }
  .vf-hair.h2 { left: 6px; transform: rotate(14deg); }

  @keyframes vf-hair {
    0%, 20% { opacity: 0.5; }
    38%, 44% { opacity: 1; }
    46%, 100% { opacity: 0; }
  }

  .vf-fly {
    position: absolute;
    left: 10px;
    top: 8px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #d8ffbb;
    box-shadow: 0 0 5px rgba(216, 255, 187, 0.9);
    opacity: 0;
    animation: vf-fly 9s infinite;
  }

  .vf-fly::after {
    content: '';
    position: absolute;
    left: -1px;
    top: -3px;
    width: 6px;
    height: 3px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.4);
    filter: blur(0.5px);
  }

  @keyframes vf-fly {
    0%, 8% { opacity: 0; transform: translate(0, 0); }
    14% { opacity: 1; transform: translate(14px, 10px); }
    22% { transform: translate(30px, 2px); }
    30% { transform: translate(40px, 14px); }
    36% { transform: translate(44px, 24px); }
    40%, 45% { opacity: 1; transform: translate(42px, 30px); }
    46%, 100% { opacity: 0; transform: translate(42px, 30px); }
  }

  .vf-snap {
    position: absolute;
    left: 50%;
    bottom: 56px;
    width: 22px;
    height: 22px;
    margin-left: -11px;
    border: 1.5px solid rgba(190, 255, 205, 0.9);
    border-radius: 50%;
    opacity: 0;
    animation: vf-snap 9s ease-out infinite;
  }

  @keyframes vf-snap {
    0%, 45% { transform: scale(0.4); opacity: 0; }
    47% { opacity: 0.9; }
    56% { transform: scale(1.7); opacity: 0; }
    100% { opacity: 0; }
  }
  `,
  v3: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* v3: Authentic Dionaea muscipula carnivorous plant with deep anthocyanin
     crimson trap interior, emerald green outer lobes, chartreuse marginal teeth,
     amber trichome trigger hairs, and blue-green bottle fly. */
  .vfc {
    width: 104px;
    height: 96px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #064e3b 0%, #022c22 60%, #01140e 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  .vfc-rosette {
    position: absolute;
    left: 50%;
    bottom: 6px;
    width: 0;
    height: 0;
  }

  .vfc-baseleaf {
    position: absolute;
    bottom: 0;
    left: -5px;
    width: 26px;
    height: 9px;
    border-radius: 10% 90% 30% 90% / 60% 90% 40% 90%;
    background: linear-gradient(100deg, #15803d 0%, #166534 60%, #14532d 100%);
    border: 0.5px solid #22c55e;
    transform-origin: 0 50%;
  }

  .vfc-baseleaf.b1 { transform: rotate(-160deg); }
  .vfc-baseleaf.b2 { transform: rotate(-20deg); }
  .vfc-baseleaf.b3 { transform: rotate(-120deg); width: 20px; opacity: 0.85; }
  .vfc-baseleaf.b4 { transform: rotate(-60deg); width: 20px; opacity: 0.85; }

  .vfc-stem {
    position: absolute;
    left: 50%;
    bottom: 8px;
    width: 5px;
    height: 40px;
    margin-left: -2.5px;
    border-radius: 3px;
    background: linear-gradient(180deg, #22c55e 0%, #15803d 100%);
    border: 0.5px solid #4ade80;
    transform-origin: 50% 100%;
    animation: vfc-sway 9s ease-in-out infinite;
  }

  @keyframes vfc-sway {
    0%, 100% { transform: rotate(-2deg); }
    30% { transform: rotate(2deg); }
    47% { transform: rotate(-5deg); }
    52% { transform: rotate(1deg); }
    70% { transform: rotate(-1deg); }
  }

  .vfc-trap {
    position: absolute;
    left: 50%;
    bottom: 44px;
    width: 0;
    height: 0;
    animation: vfc-sway 9s ease-in-out infinite;
  }

  /* Lobes: rich anthocyanin carmine interior and emerald green exterior */
  .vfc-lobe {
    position: absolute;
    bottom: 0;
    width: 19px;
    height: 27px;
    background: radial-gradient(ellipse at 50% 88%,
      #881337 0%,
      #e11d48 45%,
      #f43f5e 70%,
      #15803d 95%);
    border: 1.5px solid #fde047;
    clip-path: polygon(
      0 100%, 0 30%, 12% 12%, 30% 4%,
      45% 0, 55% 14%, 68% 2%, 78% 16%, 90% 6%, 100% 20%,
      100% 100%);
    box-shadow: 0 0 8px rgba(225, 29, 72, 0.4);
    animation-duration: 9s;
    animation-timing-function: cubic-bezier(0.6, 0, 0.2, 1);
    animation-iteration-count: infinite;
  }

  .vfc-lobe.left {
    left: -19px;
    transform-origin: 100% 100%;
    animation-name: vfc-lobe-l;
  }

  .vfc-lobe.right {
    left: 0;
    transform: scaleX(-1);
    transform-origin: 0% 100%;
    animation-name: vfc-lobe-r;
  }

  @keyframes vfc-lobe-l {
    0%, 44% { transform: rotate(-28deg); }
    46%, 56% { transform: rotate(-2deg); }
    60% { transform: rotate(-6deg); }
    64%, 74% { transform: rotate(-2deg); }
    88%, 100% { transform: rotate(-28deg); }
  }

  @keyframes vfc-lobe-r {
    0%, 44% { transform: scaleX(-1) rotate(-28deg); }
    46%, 56% { transform: scaleX(-1) rotate(-2deg); }
    60% { transform: scaleX(-1) rotate(-6deg); }
    64%, 74% { transform: scaleX(-1) rotate(-2deg); }
    88%, 100% { transform: scaleX(-1) rotate(-28deg); }
  }

  /* Amber trigger hairs */
  .vfc-hair {
    position: absolute;
    bottom: 6px;
    width: 1.5px;
    height: 6px;
    background: #facc15;
    box-shadow: 0 0 3px #fde047;
    opacity: 0;
    animation: vfc-hair 9s infinite;
  }

  .vfc-hair.h1 { left: -8px; transform: rotate(-16deg); }
  .vfc-hair.h2 { left: 6px; transform: rotate(14deg); }

  @keyframes vfc-hair {
    0%, 20% { opacity: 0.5; }
    38%, 44% { opacity: 1; }
    46%, 100% { opacity: 0; }
  }

  /* Iridescent green/blue bottle fly */
  .vfc-fly {
    position: absolute;
    left: 10px;
    top: 8px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 5px #00f0ff;
    opacity: 0;
    animation: vfc-fly 9s infinite;
  }

  .vfc-fly::after {
    content: '';
    position: absolute;
    left: -1px;
    top: -3px;
    width: 6px;
    height: 3px;
    border-radius: 50%;
    background: rgba(224, 242, 254, 0.7);
    filter: blur(0.5px);
  }

  @keyframes vfc-fly {
    0%, 8% { opacity: 0; transform: translate(0, 0); }
    14% { opacity: 1; transform: translate(14px, 10px); }
    22% { transform: translate(30px, 2px); }
    30% { transform: translate(40px, 14px); }
    36% { transform: translate(44px, 24px); }
    40%, 45% { opacity: 1; transform: translate(42px, 30px); }
    46%, 100% { opacity: 0; transform: translate(42px, 30px); }
  }

  /* Golden-green snap shockwave */
  .vfc-snap {
    position: absolute;
    left: 50%;
    bottom: 56px;
    width: 22px;
    height: 22px;
    margin-left: -11px;
    border: 1.5px solid #facc15;
    border-radius: 50%;
    opacity: 0;
    animation: vfc-snap 9s ease-out infinite;
  }

  @keyframes vfc-snap {
    0%, 45% { transform: scale(0.4); opacity: 0; }
    47% { opacity: 1; box-shadow: 0 0 8px #facc15; }
    56% { transform: scale(1.7); opacity: 0; }
    100% { opacity: 0; }
  }
  `,
};

const flytrapMarkup = {
  v1: `
      <div class="vt">
        <div class="vt-base"></div>
        <div class="vt-stem"></div>
        <div class="vt-head">
          <div class="vt-glow"></div>
          <div class="vt-lobe left">
            <div class="vt-teeth"></div>
            <div class="vt-hair h1"></div>
            <div class="vt-hair h2"></div>
          </div>
          <div class="vt-lobe right">
            <div class="vt-teeth"></div>
            <div class="vt-hair h1"></div>
            <div class="vt-hair h2"></div>
          </div>
        </div>
        <div class="vt-fly"></div>
      </div>
    `,
  v2: `
      <div class="vf">
        <div class="vf-rosette">
          <div class="vf-baseleaf b1"></div>
          <div class="vf-baseleaf b2"></div>
          <div class="vf-baseleaf b3"></div>
          <div class="vf-baseleaf b4"></div>
        </div>
        <div class="vf-stem"></div>
        <div class="vf-fly"></div>
        <div class="vf-snap"></div>
        <div class="vf-trap">
          <div class="vf-hair h1"></div>
          <div class="vf-hair h2"></div>
          <div class="vf-lobe left"></div>
          <div class="vf-lobe right"></div>
        </div>
      </div>
    `,
  v3: `
      <div class="vfc">
        <div class="vfc-rosette">
          <div class="vfc-baseleaf b1"></div>
          <div class="vfc-baseleaf b2"></div>
          <div class="vfc-baseleaf b3"></div>
          <div class="vfc-baseleaf b4"></div>
        </div>
        <div class="vfc-stem"></div>
        <div class="vfc-fly"></div>
        <div class="vfc-snap"></div>
        <div class="vfc-trap">
          <div class="vfc-hair h1"></div>
          <div class="vfc-hair h2"></div>
          <div class="vfc-lobe left"></div>
          <div class="vfc-lobe right"></div>
        </div>
      </div>
    `,
};

class ConceptFlytrap extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${flytrapStyles[version] || flytrapStyles.v3}</style>${flytrapMarkup[version] || flytrapMarkup.v3}`;
  }
}

if (!customElements.get('concept-flytrap')) {
  customElements.define('concept-flytrap', ConceptFlytrap);
}
