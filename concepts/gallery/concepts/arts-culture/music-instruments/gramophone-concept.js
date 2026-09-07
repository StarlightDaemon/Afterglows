const gramophoneStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .gram {
    width: 116px;
    height: 96px;
    position: relative;
  }

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

  .gram-platter::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.95);
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.9);
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

  .gram-spindle {
    position: absolute;
    left: 33px;
    bottom: 25px;
    width: 4px;
    height: 5px;
    border-radius: 2px 2px 0 0;
    background: rgba(190, 255, 205, 0.9);
  }

  .gram-arm {
    position: absolute;
    left: 48px;
    bottom: 22px;
    width: 22px;
    height: 14px;
    border-top: 2.5px solid rgba(140, 255, 170, 0.95);
    border-left: 2.5px solid rgba(140, 255, 170, 0.95);
    border-radius: 4px 0 0 0;
    transform-origin: right bottom;
    animation: gram-needle-track 3.2s ease-in-out infinite alternate;
  }

  @keyframes gram-needle-track {
    0% { transform: rotate(-8deg); }
    100% { transform: rotate(14deg); }
  }

  .gram-horn-rig {
    position: absolute;
    left: 42px;
    top: 10px;
    width: 68px;
    height: 58px;
    transform-origin: 10px 48px;
    animation: gram-horn-vibe 1.2s ease-in-out infinite alternate;
  }

  @keyframes gram-horn-vibe {
    0% { transform: scale(0.92) rotate(-6deg); }
    100% { transform: scale(1.18) rotate(6deg); }
  }

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

  .gram-wave {
    position: absolute;
    right: -4px;
    top: 4px;
    width: 18px;
    height: 40px;
    border-right: 4px solid rgba(140, 255, 170, 0.95);
    border-radius: 0 20px 20px 0;
    box-shadow: 2px 0 8px rgba(140, 255, 170, 0.8);
    animation: gram-wave-radiate 1.4s cubic-bezier(0.2, 0.7, 0.4, 1) infinite;
    pointer-events: none;
  }

  .gram-wave.w1 { animation-delay: 0s; }
  .gram-wave.w2 { animation-delay: -0.45s; }
  .gram-wave.w3 { animation-delay: -0.9s; }

  @keyframes gram-wave-radiate {
    0% {
      opacity: 1;
      transform: translate(-10px, 0) scale(0.4);
    }
    100% {
      opacity: 0;
      transform: translate(32px, 0) scale(2);
    }
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

  /* v2: Vintage oak gramophone with polished morning-glory brass horn,
     spinning black shellac disc with red label, brass tonearm, and acoustic golden sound waves */
  .gramc {
    width: 116px;
    height: 96px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Polished oak turntable base cabinet */
  .gramc-base {
    position: absolute;
    left: 8px;
    bottom: 8px;
    width: 54px;
    height: 16px;
    border-radius: 3px;
    background: linear-gradient(180deg, #9a3412 0%, #451a03 100%);
    border: 1.5px solid #ca8a04;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.2);
  }

  /* Black shellac record disc */
  .gramc-platter {
    position: absolute;
    left: 12px;
    bottom: 22px;
    width: 46px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, #ef4444 0 25%, #18181b 25% 100%);
    border: 1px solid #3f3f46;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
    animation: gramc-spin 2.4s linear infinite;
  }

  /* Revolving record label dot */
  .gramc-platter::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #fde047;
    box-shadow: 0 0 7px #facc15;
    animation: gramc-label-orbit 2.4s linear infinite;
  }

  @keyframes gramc-label-orbit {
    0%   { left: 38px; top: 2px; }
    25%  { left: 25px; top: -1px; }
    50%  { left: 5px;  top: 2px; }
    75%  { left: 25px; top: 5px; }
    100% { left: 38px; top: 2px; }
  }

  @keyframes gramc-spin {
    0% { filter: brightness(0.85); }
    50% { filter: brightness(1.35); }
    100% { filter: brightness(0.85); }
  }

  /* Center gold spindle */
  .gramc-spindle {
    position: absolute;
    left: 33px;
    bottom: 25px;
    width: 4px;
    height: 5px;
    border-radius: 2px 2px 0 0;
    background: #facc15;
  }

  /* Brass tonearm & soundbox needle */
  .gramc-arm {
    position: absolute;
    left: 48px;
    bottom: 22px;
    width: 22px;
    height: 14px;
    border-top: 2.5px solid #facc15;
    border-left: 2.5px solid #facc15;
    border-radius: 4px 0 0 0;
    transform-origin: right bottom;
    animation: gramc-needle-track 3.2s ease-in-out infinite alternate;
  }

  @keyframes gramc-needle-track {
    0% { transform: rotate(-8deg); }
    100% { transform: rotate(14deg); }
  }

  /* Brass horn assembly with acoustic shudder */
  .gramc-horn-rig {
    position: absolute;
    left: 42px;
    top: 10px;
    width: 68px;
    height: 58px;
    transform-origin: 10px 48px;
    animation: gramc-horn-vibe 1.2s ease-in-out infinite alternate;
  }

  @keyframes gramc-horn-vibe {
    0% { transform: scale(0.92) rotate(-6deg); }
    100% { transform: scale(1.18) rotate(6deg); }
  }

  /* Curved brass conduit neck */
  .gramc-neck {
    position: absolute;
    left: 0;
    bottom: 4px;
    width: 24px;
    height: 32px;
    border-bottom: 3.5px solid #facc15;
    border-left: 3.5px solid #facc15;
    border-radius: 0 0 0 16px;
    background: transparent;
  }

  /* Morning-glory flared brass bell */
  .gramc-bell {
    position: absolute;
    right: 4px;
    top: 0;
    width: 48px;
    height: 48px;
    clip-path: polygon(0 60%, 15% 45%, 50% 15%, 100% 0%, 100% 100%, 50% 85%, 15% 55%);
    background: radial-gradient(circle at 100% 50%, #ffffff 0%, #fde047 35%, #eab308 65%, #854d0e 100%);
    box-shadow: 0 0 14px rgba(250, 204, 21, 0.7);
  }

  /* Acoustic golden sound waves */
  .gramc-wave {
    position: absolute;
    right: -4px;
    top: 4px;
    width: 18px;
    height: 40px;
    border-right: 4px solid #fde047;
    border-radius: 0 20px 20px 0;
    box-shadow: 2px 0 10px rgba(250, 204, 21, 0.9);
    animation: gramc-wave-radiate 1.4s cubic-bezier(0.2, 0.7, 0.4, 1) infinite;
    pointer-events: none;
  }

  .gramc-wave.w1 { animation-delay: 0s; }
  .gramc-wave.w2 { animation-delay: -0.45s; }
  .gramc-wave.w3 { animation-delay: -0.9s; }

  @keyframes gramc-wave-radiate {
    0% {
      opacity: 1;
      transform: translate(-10px, 0) scale(0.4);
    }
    100% {
      opacity: 0;
      transform: translate(32px, 0) scale(2);
    }
  }
  `,
};

const gramophoneMarkup = {
  v1: `
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
    `,
  v2: `
      <div class="gramc">
        <div class="gramc-base"></div>
        <div class="gramc-platter"></div>
        <div class="gramc-spindle"></div>
        <div class="gramc-arm"></div>
        <div class="gramc-horn-rig">
          <div class="gramc-neck"></div>
          <div class="gramc-bell"></div>
          <div class="gramc-wave w1"></div>
          <div class="gramc-wave w2"></div>
          <div class="gramc-wave w3"></div>
        </div>
      </div>
    `,
};

class ConceptGramophone extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${gramophoneStyles[version] || gramophoneStyles.v2}</style>${gramophoneMarkup[version] || gramophoneMarkup.v2}`;
  }
}

if (!customElements.get('concept-gramophone')) {
  customElements.define('concept-gramophone', ConceptGramophone);
}
