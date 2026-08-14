const jellyfishStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Pulse-and-glide: the bell contracts (squeezing tall and narrow),
     the body surges upward, then relaxes and sinks while the
     tentacles trail the motion a beat behind. */
  .jelly {
    width: 104px;
    height: 100px;
    position: relative;
  }

  .jelly-body {
    position: absolute;
    left: 50%;
    top: 8px;
    width: 0;
    height: 0;
    animation: jelly-glide 3.6s ease-in-out infinite;
  }

  @keyframes jelly-glide {
    0%, 100% { transform: translateY(10px); }
    30% { transform: translateY(-4px); }
    55% { transform: translateY(0); }
  }

  .jelly-bell {
    position: absolute;
    left: -24px;
    top: 0;
    width: 48px;
    height: 34px;
    border-radius: 50% 50% 14% 14% / 88% 88% 12% 12%;
    background: radial-gradient(ellipse at 50% 28%,
      rgba(190, 255, 205, 0.75),
      rgba(0, 160, 32, 0.5) 55%,
      rgba(0, 70, 14, 0.35) 100%);
    border: 1px solid rgba(140, 255, 170, 0.7);
    box-shadow: 0 0 14px rgba(0, 204, 0, 0.45), inset 0 -4px 8px rgba(0, 204, 0, 0.3);
    animation: jelly-pulse 3.6s ease-in-out infinite;
    transform-origin: 50% 20%;
  }

  @keyframes jelly-pulse {
    0%, 100% { transform: scale(1.06, 0.92); }
    22% { transform: scale(0.82, 1.14); }
    40% { transform: scale(1.1, 0.88); }
    62% { transform: scale(0.98, 1.02); }
  }

  /* Inner organs: a dim four-leaf clover shape seen through the bell. */
  .jelly-organ {
    position: absolute;
    left: -8px;
    top: 8px;
    width: 16px;
    height: 10px;
    border-radius: 50%;
    background: rgba(0, 204, 0, 0.4);
    filter: blur(2px);
    animation: jelly-organ 3.6s ease-in-out infinite;
  }

  @keyframes jelly-organ {
    0%, 100% { opacity: 0.5; }
    25% { opacity: 0.95; }
  }

  /* Tentacles: ribbons hanging from the bell rim, swaying with
     staggered phase so they trail the pulse. */
  .jelly-tent {
    position: absolute;
    top: 30px;
    width: 2px;
    height: 44px;
    border-radius: 1px;
    background: linear-gradient(180deg,
      rgba(140, 255, 170, 0.85),
      rgba(0, 204, 0, 0.35) 60%,
      transparent);
    transform-origin: top center;
    animation: jelly-sway 3.6s ease-in-out infinite;
  }

  .jelly-tent.t1 { left: -18px; animation-delay: -0.5s; height: 36px; }
  .jelly-tent.t2 { left: -9px;  animation-delay: -0.3s; height: 46px; }
  .jelly-tent.t3 { left: 0;     animation-delay: -0.15s; height: 50px; }
  .jelly-tent.t4 { left: 9px;   animation-delay: -0.4s; height: 44px; }
  .jelly-tent.t5 { left: 17px;  animation-delay: -0.6s; height: 38px; }

  @keyframes jelly-sway {
    0%, 100% { transform: rotate(4deg) scaleY(1); }
    25% { transform: rotate(-7deg) scaleY(1.12); }
    50% { transform: rotate(3deg) scaleY(0.94); }
    75% { transform: rotate(-4deg) scaleY(1.05); }
  }

  /* Drifting plankton motes lit by the bell. */
  .jelly-mote {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.8);
    animation: jelly-mote linear infinite;
  }

  .jelly-mote.m1 { left: 16px; top: 70px; animation-duration: 5s; }
  .jelly-mote.m2 { left: 84px; top: 50px; animation-duration: 6.5s; animation-delay: -2s; }
  .jelly-mote.m3 { left: 70px; top: 86px; animation-duration: 5.8s; animation-delay: -3.5s; }

  @keyframes jelly-mote {
    0% { transform: translate(0, 0); opacity: 0; }
    20% { opacity: 0.9; }
    80% { opacity: 0.5; }
    100% { transform: translate(-8px, -16px); opacity: 0; }
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

  /* v2: Deep-sea scyphozoan in true bioluminescence: translucent violet/azure
     swimming bell, hot fuchsia gonadal photophores, glowing electric-cyan
     stinging tentacles, and floating plankton marine snow. */
  .jellyc {
    width: 104px;
    height: 100px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 30%, #031525 0%, #01060e 100%);
  }

  .jellyc-body {
    position: absolute;
    left: 50%;
    top: 8px;
    width: 0;
    height: 0;
    animation: jellyc-glide 3.6s ease-in-out infinite;
  }

  @keyframes jellyc-glide {
    0%, 100% { transform: translateY(10px); }
    30% { transform: translateY(-4px); }
    55% { transform: translateY(0); }
  }

  /* Translucent bioluminescent bell */
  .jellyc-bell {
    position: absolute;
    left: -24px;
    top: 0;
    width: 48px;
    height: 34px;
    border-radius: 50% 50% 14% 14% / 88% 88% 12% 12%;
    background: radial-gradient(ellipse at 50% 28%,
      rgba(232, 215, 255, 0.9) 0%,
      rgba(168, 85, 247, 0.65) 45%,
      rgba(6, 182, 212, 0.45) 80%,
      rgba(2, 132, 199, 0.3) 100%);
    border: 1px solid rgba(103, 232, 249, 0.8);
    box-shadow: 0 0 18px rgba(168, 85, 247, 0.6), inset 0 -4px 10px rgba(6, 182, 212, 0.5);
    animation: jellyc-pulse 3.6s ease-in-out infinite;
    transform-origin: 50% 20%;
  }

  @keyframes jellyc-pulse {
    0%, 100% { transform: scale(1.06, 0.92); }
    22% { transform: scale(0.82, 1.14); }
    40% { transform: scale(1.1, 0.88); }
    62% { transform: scale(0.98, 1.02); }
  }

  /* Internal clover organs: glowing rose-fuchsia photophores */
  .jellyc-organ {
    position: absolute;
    left: -8px;
    top: 8px;
    width: 16px;
    height: 10px;
    border-radius: 50%;
    background: #f43f5e;
    box-shadow: 0 0 10px #f43f5e, 0 0 16px rgba(244, 63, 94, 0.7);
    filter: blur(1.5px);
    animation: jellyc-organ 3.6s ease-in-out infinite;
  }

  @keyframes jellyc-organ {
    0%, 100% { opacity: 0.6; }
    25% { opacity: 1; }
  }

  /* Electric cyan stinging tentacles */
  .jellyc-tent {
    position: absolute;
    top: 30px;
    width: 2px;
    height: 44px;
    border-radius: 1px;
    background: linear-gradient(180deg,
      #67e8f9 0%,
      #06b6d4 40%,
      #3b82f6 75%,
      transparent 100%);
    box-shadow: 0 0 6px rgba(6, 182, 212, 0.7);
    transform-origin: top center;
    animation: jellyc-sway 3.6s ease-in-out infinite;
  }

  .jellyc-tent.t1 { left: -18px; animation-delay: -0.5s; height: 36px; }
  .jellyc-tent.t2 { left: -9px;  animation-delay: -0.3s; height: 46px; }
  .jellyc-tent.t3 { left: 0;     animation-delay: -0.15s; height: 50px; }
  .jellyc-tent.t4 { left: 9px;   animation-delay: -0.4s; height: 44px; }
  .jellyc-tent.t5 { left: 17px;  animation-delay: -0.6s; height: 38px; }

  @keyframes jellyc-sway {
    0%, 100% { transform: rotate(4deg) scaleY(1); }
    25% { transform: rotate(-7deg) scaleY(1.12); }
    50% { transform: rotate(3deg) scaleY(0.94); }
    75% { transform: rotate(-4deg) scaleY(1.05); }
  }

  /* Drifting plankton marine snow */
  .jellyc-mote {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #a5f3fc;
    box-shadow: 0 0 5px #a5f3fc;
    animation: jellyc-mote linear infinite;
  }

  .jellyc-mote.m1 { left: 16px; top: 70px; animation-duration: 5s; }
  .jellyc-mote.m2 { left: 84px; top: 50px; animation-duration: 6.5s; animation-delay: -2s; }
  .jellyc-mote.m3 { left: 70px; top: 86px; animation-duration: 5.8s; animation-delay: -3.5s; }

  @keyframes jellyc-mote {
    0% { transform: translate(0, 0); opacity: 0; }
    20% { opacity: 0.95; }
    80% { opacity: 0.6; }
    100% { transform: translate(-8px, -16px); opacity: 0; }
  }
  `,
};

const jellyfishMarkup = {
  v1: `
    <div class="jelly">
      <div class="jelly-mote m1"></div>
      <div class="jelly-mote m2"></div>
      <div class="jelly-mote m3"></div>
      <div class="jelly-body">
        <div class="jelly-tent t1"></div>
        <div class="jelly-tent t2"></div>
        <div class="jelly-tent t3"></div>
        <div class="jelly-tent t4"></div>
        <div class="jelly-tent t5"></div>
        <div class="jelly-bell"></div>
        <div class="jelly-organ"></div>
      </div>
    </div>
  `,
  v2: `
    <div class="jellyc">
      <div class="jellyc-mote m1"></div>
      <div class="jellyc-mote m2"></div>
      <div class="jellyc-mote m3"></div>
      <div class="jellyc-body">
        <div class="jellyc-tent t1"></div>
        <div class="jellyc-tent t2"></div>
        <div class="jellyc-tent t3"></div>
        <div class="jellyc-tent t4"></div>
        <div class="jellyc-tent t5"></div>
        <div class="jellyc-bell"></div>
        <div class="jellyc-organ"></div>
      </div>
    </div>
  `,
};

class ConceptJellyfish extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${jellyfishStyles[version] || jellyfishStyles.v2}</style>${jellyfishMarkup[version] || jellyfishMarkup.v2}`;
  }
}

if (!customElements.get('concept-jellyfish')) {
  customElements.define('concept-jellyfish', ConceptJellyfish);
}
