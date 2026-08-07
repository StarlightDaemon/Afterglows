const gramophoneStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A vintage gramophone horn in full voice: acoustic wave arcs emanate from
     the flared brass bell, the soundbox needle traces the rotating record groove,
     and the horn assembly vibrates in sympathetic acoustic resonance. */
  .gram {
    width: 116px;
    height: 96px;
    position: relative;
  }

  /* Wooden turntable base cabinet */
  .gram-base {
    position: absolute;
    left: 8px;
    bottom: 8px;
    width: 54px;
    height: 16px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(0, 100, 22, 0.8), rgba(0, 35, 8, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.25);
  }

  /* Rotating vinyl record disc */
  .gram-platter {
    position: absolute;
    left: 12px;
    bottom: 22px;
    width: 46px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(0, 20, 5, 0.95), rgba(0, 80, 16, 0.8) 60%, rgba(0, 20, 5, 0.95));
    border: 1px solid var(--accent, #00cc00);
    animation: gram-spin 2.4s linear infinite;
  }

  /* Off-center label mark orbiting the platter's rim: the record is drawn
     edge-on as a flat ellipse, so the readable "it's spinning" cue is this
     mark sweeping around it, not the ellipse shape itself rotating. */
  .gram-platter::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.95);
    box-shadow: 0 0 3px rgba(140, 255, 170, 0.8);
    animation: gram-label-orbit 2.4s linear infinite;
  }

  @keyframes gram-label-orbit {
    0%   { left: 38px; top: 2px; }
    25%  { left: 25px; top: -1px; }
    50%  { left: 5px;  top: 2px; }
    75%  { left: 25px; top: 5px; }
    100% { left: 38px; top: 2px; }
  }

  @keyframes gram-spin {
    0% { filter: drop-shadow(0 0 1px rgba(0, 204, 0, 0.4)); }
    50% { filter: drop-shadow(0 0 4px rgba(140, 255, 170, 0.8)); }
    100% { filter: drop-shadow(0 0 1px rgba(0, 204, 0, 0.4)); }
  }

  /* Center record spindle */
  .gram-spindle {
    position: absolute;
    left: 33px;
    bottom: 25px;
    width: 4px;
    height: 5px;
    border-radius: 2px 2px 0 0;
    background: rgba(190, 255, 205, 0.9);
  }

  /* Tonearm & needle soundbox tracking the record */
  .gram-arm {
    position: absolute;
    left: 48px;
    bottom: 22px;
    width: 18px;
    height: 12px;
    border-top: 2px solid rgba(140, 255, 170, 0.9);
    border-left: 2px solid rgba(140, 255, 170, 0.9);
    border-radius: 4px 0 0 0;
    transform-origin: right bottom;
    animation: gram-needle-jitter 0.15s ease-in-out infinite alternate;
  }

  @keyframes gram-needle-jitter {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(1deg) translateY(-0.5px); }
  }

  /* Flared brass horn assembly with acoustic resonance shudder */
  .gram-horn-rig {
    position: absolute;
    left: 42px;
    top: 10px;
    width: 68px;
    height: 58px;
    animation: gram-horn-vibe 0.3s ease-in-out infinite alternate;
  }

  @keyframes gram-horn-vibe {
    0% { transform: translate(0, 0) rotate(0deg); }
    100% { transform: translate(0.5px, -0.5px) rotate(0.6deg); }
  }

  /* Curved horn neck / conduit */
  .gram-neck {
    position: absolute;
    left: 0;
    bottom: 4px;
    width: 24px;
    height: 32px;
    border-bottom: 3px solid var(--accent, #00cc00);
    border-left: 3px solid var(--accent, #00cc00);
    border-radius: 0 0 0 16px;
    background: transparent;
  }

  /* Exponential flared bell horn */
  .gram-bell {
    position: absolute;
    right: 4px;
    top: 0;
    width: 48px;
    height: 48px;
    clip-path: polygon(0 60%, 15% 45%, 50% 15%, 100% 0%, 100% 100%, 50% 85%, 15% 55%);
    background: radial-gradient(circle at 100% 50%, rgba(190, 255, 205, 0.9), rgba(0, 160, 35, 0.8) 50%, rgba(0, 45, 10, 0.9));
    border: 1px solid var(--accent, #00cc00);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.4);
  }

  /* Concentric acoustic sound waves radiating from the horn throat */
  .gram-wave {
    position: absolute;
    right: -4px;
    top: 6px;
    width: 14px;
    height: 36px;
    border-right: 2px solid rgba(140, 255, 170, 0.9);
    border-radius: 0 18px 18px 0;
    animation: gram-wave-radiate 1.8s cubic-bezier(0.2, 0.7, 0.4, 1) infinite;
    pointer-events: none;
  }

  .gram-wave.w1 { animation-delay: 0s; }
  .gram-wave.w2 { animation-delay: -0.6s; }
  .gram-wave.w3 { animation-delay: -1.2s; }

  @keyframes gram-wave-radiate {
    0% {
      opacity: 0.95;
      transform: translate(-10px, 0) scale(0.5);
    }
    60% {
      opacity: 0.7;
    }
    100% {
      opacity: 0;
      transform: translate(22px, 0) scale(1.6);
    }
  }
`;

class ConceptGramophone extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${gramophoneStyles}</style>
      <div class="gram">
        <div class="gram-base"></div>
        <div class="gram-platter"></div>
        <div class="gram-spindle"></div>
        <div class="gram-arm"></div>
        <div class="gram-horn-rig">
          <div class="gram-neck"></div>
          <div class="gram-bell"></div>
          <div class="gram-wave w1"></div>
          <div class="gram-wave w2"></div>
          <div class="gram-wave w3"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-gramophone')) {
  customElements.define('concept-gramophone', ConceptGramophone);
}
