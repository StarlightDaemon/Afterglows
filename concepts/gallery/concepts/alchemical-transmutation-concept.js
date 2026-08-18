const alchemicalTransmutationStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .alch {
    width: 116px;
    height: 98px;
    position: relative;
  }

  .alch-circle-ring {
    position: absolute;
    left: 10px;
    top: 8px;
    width: 96px;
    height: 82px;
    border-radius: 50%;
    border: 2px solid rgba(0, 140, 30, 0.7);
    box-shadow: inset 0 0 10px rgba(0, 204, 0, 0.2), 0 0 6px rgba(0, 204, 0, 0.25);
  }

  .alch-circle-inner {
    position: absolute;
    left: 24px;
    top: 20px;
    width: 68px;
    height: 58px;
    border-radius: 50%;
    border: 1px dashed rgba(140, 255, 170, 0.5);
    animation: alch-ring-spin 8s linear infinite;
  }

  @keyframes alch-ring-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .alch-channel {
    position: absolute;
    left: 58px;
    top: 49px;
    width: 46px;
    height: 2px;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.9), transparent);
    transform-origin: left center;
    animation: alch-channel-pulse 6s ease-in-out infinite;
  }

  .alch-channel.c1 { transform: rotate(0deg); }
  .alch-channel.c2 { transform: rotate(60deg); }
  .alch-channel.c3 { transform: rotate(120deg); }
  .alch-channel.c4 { transform: rotate(180deg); }
  .alch-channel.c5 { transform: rotate(240deg); }
  .alch-channel.c6 { transform: rotate(300deg); }

  @keyframes alch-channel-pulse {
    0%, 10% { opacity: 0.2; }
    16%, 22% { opacity: 1; }
    44%, 50% { opacity: 1; }
    58%, 100% { opacity: 0.2; }
  }

  .alch-ingot {
    position: absolute;
    left: 44px;
    top: 39px;
    width: 28px;
    height: 20px;
    border-radius: 2px;
    background: linear-gradient(160deg, rgba(60, 90, 70, 0.9), rgba(20, 35, 25, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    z-index: 3;
    animation: alch-ingot-heat 6s ease-in-out infinite;
  }

  @keyframes alch-ingot-heat {
    0%, 8% { opacity: 1; transform: translateY(0) scale(1); filter: brightness(0.7); }
    16% { opacity: 1; transform: translateY(-8px) scale(1.15); filter: brightness(1.7) saturate(1.4); box-shadow: 0 0 10px rgba(190, 255, 205, 0.9); }
    24%, 92% { opacity: 0; transform: translateY(-16px) scale(0.8); }
    100% { opacity: 1; transform: translateY(0) scale(1); filter: brightness(0.7); }
  }

  .alch-shape {
    position: absolute;
    left: 38px;
    top: 25px;
    width: 40px;
    height: 40px;
    clip-path: polygon(50% 12%, 72% 19%, 86% 38%, 86% 62%, 72% 81%, 50% 88%, 28% 81%, 14% 62%, 14% 38%, 28% 19%);
    background: radial-gradient(circle at 40% 35%, rgba(190, 255, 205, 1), rgba(0, 204, 0, 0.85) 60%, rgba(0, 80, 16, 0.9));
    box-shadow: 0 0 10px rgba(140, 255, 170, 0.8);
    opacity: 0;
    z-index: 4;
    animation: alch-shape-morph 6s ease-in-out infinite;
  }

  @keyframes alch-shape-morph {
    0%, 12% {
      opacity: 0;
      clip-path: polygon(50% 12%, 72% 19%, 86% 38%, 86% 62%, 72% 81%, 50% 88%, 28% 81%, 14% 62%, 14% 38%, 28% 19%);
      background: radial-gradient(circle at 40% 35%, rgba(190, 255, 205, 1), rgba(0, 204, 0, 0.85) 60%, rgba(0, 80, 16, 0.9));
      transform: translateY(8px) scale(0.6) rotate(0deg);
    }
    28% {
      opacity: 1;
      transform: translateY(0px) scale(1) rotate(90deg);
    }
    45% {
      opacity: 1;
      clip-path: polygon(50% 12%, 72% 19%, 86% 38%, 86% 62%, 72% 81%, 50% 88%, 28% 81%, 14% 62%, 14% 38%, 28% 19%);
      background: radial-gradient(circle at 40% 35%, rgba(190, 255, 205, 1), rgba(0, 204, 0, 0.85) 60%, rgba(0, 80, 16, 0.9));
      transform: translateY(-12px) scale(1.15) rotate(180deg);
    }
    70% {
      opacity: 1;
      clip-path: polygon(50% 4%, 61% 35%, 94% 36%, 67% 56%, 77% 87%, 50% 68%, 23% 87%, 33% 56%, 6% 36%, 39% 35%);
      background: radial-gradient(circle at 40% 35%, #fff7d6, #ffd84a 55%, #b8860b 100%);
      transform: translateY(-8px) scale(1.2) rotate(270deg);
    }
    88% {
      opacity: 1;
      clip-path: polygon(50% 4%, 61% 35%, 94% 36%, 67% 56%, 77% 87%, 50% 68%, 23% 87%, 33% 56%, 6% 36%, 39% 35%);
      background: radial-gradient(circle at 40% 35%, #fff7d6, #ffd84a 55%, #b8860b 100%);
      transform: translateY(-4px) scale(1.25) rotate(340deg);
    }
    100% { opacity: 0; transform: translateY(8px) scale(0.6) rotate(360deg); }
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

  /* v2: Alchemical transmutation with purple arcane circle, glowing lead ingot,
     and morphing golden star */
  .alchc {
    width: 116px;
    height: 98px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Purple arcane transmutation circle */
  .alchc-circle-ring {
    position: absolute;
    left: 10px;
    top: 8px;
    width: 96px;
    height: 82px;
    border-radius: 50%;
    border: 2px solid #a855f7;
    box-shadow: inset 0 0 10px rgba(168, 85, 247, 0.4), 0 0 10px rgba(168, 85, 247, 0.5);
  }

  .alchc-circle-inner {
    position: absolute;
    left: 24px;
    top: 20px;
    width: 68px;
    height: 58px;
    border-radius: 50%;
    border: 1px dashed #c084fc;
    box-shadow: 0 0 6px rgba(192, 132, 252, 0.4);
    animation: alchc-ring-spin 6s linear infinite;
  }

  @keyframes alchc-ring-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Radiating purple energy channels */
  .alchc-channel {
    position: absolute;
    left: 58px;
    top: 49px;
    width: 46px;
    height: 2px;
    background: linear-gradient(90deg, #c084fc, transparent);
    box-shadow: 0 0 4px #a855f7;
    transform-origin: left center;
    animation: alchc-channel-pulse 6s ease-in-out infinite;
  }

  .alchc-channel.c1 { transform: rotate(0deg); }
  .alchc-channel.c2 { transform: rotate(60deg); }
  .alchc-channel.c3 { transform: rotate(120deg); }
  .alchc-channel.c4 { transform: rotate(180deg); }
  .alchc-channel.c5 { transform: rotate(240deg); }
  .alchc-channel.c6 { transform: rotate(300deg); }

  @keyframes alchc-channel-pulse {
    0%, 10% { opacity: 0.2; }
    16%, 22% { opacity: 1; }
    44%, 50% { opacity: 1; }
    58%, 100% { opacity: 0.2; }
  }

  /* Solid lead ingot heating up */
  .alchc-ingot {
    position: absolute;
    left: 44px;
    top: 39px;
    width: 28px;
    height: 20px;
    border-radius: 2px;
    background: linear-gradient(160deg, #64748b 0%, #334155 60%, #1e293b 100%);
    border: 1.5px solid #94a3b8;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
    z-index: 3;
    animation: alchc-ingot-heat 6s ease-in-out infinite;
  }

  @keyframes alchc-ingot-heat {
    0%, 8% { opacity: 1; transform: translateY(0) scale(1); filter: brightness(0.8); }
    16% { opacity: 1; transform: translateY(-8px) scale(1.15); filter: brightness(2) saturate(2); box-shadow: 0 0 16px #ea580c, 0 0 24px #facc15; }
    24%, 92% { opacity: 0; transform: translateY(-16px) scale(0.8); }
    100% { opacity: 1; transform: translateY(0) scale(1); filter: brightness(0.8); }
  }

  /* Molten mass morphing into faceted gold star */
  .alchc-shape {
    position: absolute;
    left: 38px;
    top: 25px;
    width: 40px;
    height: 40px;
    clip-path: polygon(50% 12%, 72% 19%, 86% 38%, 86% 62%, 72% 81%, 50% 88%, 28% 81%, 14% 62%, 14% 38%, 28% 19%);
    background: radial-gradient(circle at 40% 35%, #ffffff 0%, #fde047 30%, #ea580c 70%, #991b1b 100%);
    box-shadow: 0 0 16px #facc15, 0 0 24px #ec4899;
    opacity: 0;
    z-index: 4;
    animation: alchc-shape-morph 6s ease-in-out infinite;
  }

  @keyframes alchc-shape-morph {
    0%, 12% {
      opacity: 0;
      clip-path: polygon(50% 12%, 72% 19%, 86% 38%, 86% 62%, 72% 81%, 50% 88%, 28% 81%, 14% 62%, 14% 38%, 28% 19%);
      background: radial-gradient(circle at 40% 35%, #ffffff 0%, #fde047 30%, #ea580c 70%, #991b1b 100%);
      transform: translateY(8px) scale(0.6) rotate(0deg);
    }
    28% {
      opacity: 1;
      transform: translateY(0px) scale(1) rotate(90deg);
    }
    45% {
      opacity: 1;
      clip-path: polygon(50% 12%, 72% 19%, 86% 38%, 86% 62%, 72% 81%, 50% 88%, 28% 81%, 14% 62%, 14% 38%, 28% 19%);
      background: radial-gradient(circle at 40% 35%, #ffffff 0%, #fde047 30%, #ea580c 70%, #991b1b 100%);
      transform: translateY(-12px) scale(1.2) rotate(180deg);
    }
    70% {
      opacity: 1;
      clip-path: polygon(50% 4%, 61% 35%, 94% 36%, 67% 56%, 77% 87%, 50% 68%, 23% 87%, 33% 56%, 6% 36%, 39% 35%);
      background: radial-gradient(circle at 40% 35%, #ffffff 0%, #fef08a 30%, #facc15 60%, #b45309 100%);
      box-shadow: 0 0 20px #facc15, 0 0 30px #fde047;
      transform: translateY(-8px) scale(1.2) rotate(270deg);
    }
    88% {
      opacity: 1;
      clip-path: polygon(50% 4%, 61% 35%, 94% 36%, 67% 56%, 77% 87%, 50% 68%, 23% 87%, 33% 56%, 6% 36%, 39% 35%);
      background: radial-gradient(circle at 40% 35%, #ffffff 0%, #fef08a 30%, #facc15 60%, #b45309 100%);
      box-shadow: 0 0 24px #facc15;
      transform: translateY(-4px) scale(1.25) rotate(340deg);
    }
    100% { opacity: 0; transform: translateY(8px) scale(0.6) rotate(360deg); }
  }
  `,
};

const alchemicalTransmutationMarkup = {
  v1: `
      <div class="alch">
        <div class="alch-circle-ring"></div>
        <div class="alch-circle-inner"></div>
        <div class="alch-channel c1"></div>
        <div class="alch-channel c2"></div>
        <div class="alch-channel c3"></div>
        <div class="alch-channel c4"></div>
        <div class="alch-channel c5"></div>
        <div class="alch-channel c6"></div>
        <div class="alch-ingot"></div>
        <div class="alch-shape"></div>
      </div>
    `,
  v2: `
      <div class="alchc">
        <div class="alchc-circle-ring"></div>
        <div class="alchc-circle-inner"></div>
        <div class="alchc-channel c1"></div>
        <div class="alchc-channel c2"></div>
        <div class="alchc-channel c3"></div>
        <div class="alchc-channel c4"></div>
        <div class="alchc-channel c5"></div>
        <div class="alchc-channel c6"></div>
        <div class="alchc-ingot"></div>
        <div class="alchc-shape"></div>
      </div>
    `,
};

class ConceptAlchemicalTransmutation extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${alchemicalTransmutationStyles[version] || alchemicalTransmutationStyles.v2}</style>${alchemicalTransmutationMarkup[version] || alchemicalTransmutationMarkup.v2}`;
  }
}

if (!customElements.get('concept-alchemical-transmutation')) {
  customElements.define('concept-alchemical-transmutation', ConceptAlchemicalTransmutation);
}
