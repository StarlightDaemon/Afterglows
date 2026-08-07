const alchemicalTransmutationStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A lead ingot resting inside a transmutation circle: geometric spoke
     channels pulse with energy, the ingot heats and fades as a glowing
     mass takes its place, that mass morphs from a molten sphere into a
     faceted gold star, then the cycle resets to a fresh ingot. No flask,
     no coil, no drip — this is a material state morph, not a distillery. */
  .alch {
    width: 116px;
    height: 98px;
    position: relative;
  }

  /* Outer transmutation circle */
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
  }

  /* Six geometric energy channels radiating from the ingot to the ring */
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

  /* Solid lead ingot: dark, dull, heats and fades out as the glowing
     mass beneath it takes over. */
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
    0%, 8% { opacity: 1; filter: brightness(0.7); }
    16% { opacity: 1; filter: brightness(1.7) saturate(1.4); box-shadow: 0 0 10px rgba(190, 255, 205, 0.9); }
    24%, 92% { opacity: 0; }
    100% { opacity: 1; filter: brightness(0.7); }
  }

  /* The transmuting mass: molten sphere (clip-path near-circle) morphing
     into a faceted gold 5-point star (same 10-vertex polygon, alternating
     radius) — a real solid -> liquid -> crystal shape change, not a
     boiling/dripping apparatus. */
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
      transform: scale(0.75);
    }
    28% {
      opacity: 1;
      transform: scale(1);
    }
    45% {
      opacity: 1;
      clip-path: polygon(50% 12%, 72% 19%, 86% 38%, 86% 62%, 72% 81%, 50% 88%, 28% 81%, 14% 62%, 14% 38%, 28% 19%);
      background: radial-gradient(circle at 40% 35%, rgba(190, 255, 205, 1), rgba(0, 204, 0, 0.85) 60%, rgba(0, 80, 16, 0.9));
      transform: scale(1.05);
    }
    70% {
      opacity: 1;
      clip-path: polygon(50% 4%, 61% 35%, 94% 36%, 67% 56%, 77% 87%, 50% 68%, 23% 87%, 33% 56%, 6% 36%, 39% 35%);
      background: radial-gradient(circle at 40% 35%, #fff7d6, #ffd84a 55%, #b8860b 100%);
      transform: scale(1) rotate(18deg);
    }
    88% {
      opacity: 1;
      clip-path: polygon(50% 4%, 61% 35%, 94% 36%, 67% 56%, 77% 87%, 50% 68%, 23% 87%, 33% 56%, 6% 36%, 39% 35%);
      background: radial-gradient(circle at 40% 35%, #fff7d6, #ffd84a 55%, #b8860b 100%);
      transform: scale(1.1) rotate(18deg);
    }
    100% { opacity: 0; transform: scale(0.75) rotate(18deg); }
  }
`;

class ConceptAlchemicalTransmutation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${alchemicalTransmutationStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-alchemical-transmutation')) {
  customElements.define('concept-alchemical-transmutation', ConceptAlchemicalTransmutation);
}
