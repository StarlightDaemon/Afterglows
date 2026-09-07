const nautilusStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .nau {
    width: 112px;
    height: 92px;
    position: relative;
  }

  .nau-body {
    position: absolute;
    left: 20px;
    top: 18px;
    width: 72px;
    height: 60px;
    animation: nau-swim 3.2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
  }

  @keyframes nau-swim {
    0% { transform: translate(0, 0) rotate(0deg); }
    18% { transform: translate(16px, -3px) rotate(-8deg); }
    45% { transform: translate(10px, 2px) rotate(4deg); }
    75% { transform: translate(3px, 1px) rotate(1deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }

  .nau-shell {
    position: absolute;
    left: 0;
    top: 0;
    width: 52px;
    height: 52px;
    border-radius: 50% 45% 55% 40% / 55% 45% 50% 40%;
    border: 2px solid var(--accent, #00cc00);
    background: radial-gradient(circle at 70% 30%, rgba(0, 100, 24, 0.7), rgba(0, 35, 8, 0.95));
    box-shadow: inset -4px -4px 10px rgba(0, 0, 0, 0.8), 0 0 6px rgba(0, 204, 0, 0.3);
    overflow: hidden;
  }

  .nau-septum {
    position: absolute;
    border: 1px solid rgba(140, 255, 170, 0.45);
    border-radius: 50%;
  }

  .nau-septum.s1 { right: -10px; top: -5px; width: 44px; height: 44px; }
  .nau-septum.s2 { right: -5px; top: 0px; width: 32px; height: 32px; }
  .nau-septum.s3 { right: 2px; top: 8px; width: 20px; height: 20px; }

  .nau-hood {
    position: absolute;
    left: 36px;
    top: 14px;
    width: 22px;
    height: 24px;
    border-radius: 6px 14px 14px 4px;
    background: rgba(0, 140, 30, 0.85);
    border: 1.5px solid var(--accent, #00cc00);
  }

  .nau-eye {
    position: absolute;
    left: 42px;
    top: 24px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 0.95);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.8);
  }

  .nau-siphon {
    position: absolute;
    left: 30px;
    top: 36px;
    width: 14px;
    height: 7px;
    border-radius: 3px 0 0 3px;
    background: rgba(0, 180, 40, 0.7);
    border: 1px solid rgba(140, 255, 170, 0.8);
    transform-origin: right center;
    animation: nau-siphon-jet 3.2s ease-in-out infinite;
  }

  @keyframes nau-siphon-jet {
    0%, 100% { transform: rotate(0deg) scaleX(1); }
    12% { transform: rotate(-10deg) scaleX(0.8); }
    22% { transform: rotate(-5deg) scaleX(1.15); }
    60% { transform: rotate(0deg) scaleX(1); }
  }

  .nau-jet {
    position: absolute;
    left: 14px;
    top: 37px;
    width: 18px;
    height: 5px;
    border-radius: 50%;
    background: radial-gradient(ellipse at right, rgba(140, 255, 170, 0.8), transparent 70%);
    animation: nau-jet-blast 3.2s ease-out infinite;
    pointer-events: none;
  }

  @keyframes nau-jet-blast {
    0%, 10% { opacity: 0; transform: scale(0.2) translateX(8px); }
    16% { opacity: 0.9; transform: scale(1.4) translateX(-6px); }
    30% { opacity: 0; transform: scale(2) translateX(-18px); }
    100% { opacity: 0; }
  }

  .nau-tentacles {
    position: absolute;
    left: 48px;
    top: 22px;
    width: 24px;
    height: 24px;
  }

  .nau-tent {
    position: absolute;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.9), transparent);
    border-radius: 1px;
    transform-origin: left center;
    animation: nau-tent-wave 3.2s ease-in-out infinite;
  }

  .nau-tent.t1 { top: 2px; width: 18px; animation-delay: -0.1s; }
  .nau-tent.t2 { top: 6px; width: 22px; animation-delay: -0.3s; }
  .nau-tent.t3 { top: 11px; width: 20px; animation-delay: -0.5s; }
  .nau-tent.t4 { top: 16px; width: 16px; animation-delay: -0.2s; }
  .nau-tent.t5 { top: 20px; width: 14px; animation-delay: -0.4s; }

  @keyframes nau-tent-wave {
    0%, 100% { transform: rotate(0deg) scaleX(1); }
    18% { transform: rotate(-15deg) scaleX(0.85); }
    45% { transform: rotate(10deg) scaleX(1.1); }
    70% { transform: rotate(-4deg) scaleX(0.95); }
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

  /* v2: Chambered Nautilus with ivory-cream porcelain shell, tiger-chestnut flame bands,
     coral hood, pinhole eye, and hydro-jet cyan bubble burst */
  .nauc {
    width: 112px;
    height: 92px;
    position: relative;
    background: radial-gradient(circle at 50% 30%, #0369a1 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  .nauc-body {
    position: absolute;
    left: 20px;
    top: 18px;
    width: 72px;
    height: 60px;
    animation: nauc-swim 3.2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
  }

  @keyframes nauc-swim {
    0% { transform: translate(0, 0) rotate(0deg); }
    18% { transform: translate(16px, -3px) rotate(-8deg); }
    45% { transform: translate(10px, 2px) rotate(4deg); }
    75% { transform: translate(3px, 1px) rotate(1deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }

  /* Porcelain ivory shell with chestnut tiger stripes */
  .nauc-shell {
    position: absolute;
    left: 0;
    top: 0;
    width: 52px;
    height: 52px;
    border-radius: 50% 45% 55% 40% / 55% 45% 50% 40%;
    border: 1.5px solid #fde68a;
    background:
      repeating-radial-gradient(circle at 70% 30%, #fef3c7 0 6px, #ea580c 6px 10px, #b45309 10px 14px, #fef3c7 14px 20px);
    box-shadow: inset -4px -4px 10px rgba(0, 0, 0, 0.7), 0 4px 10px rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }

  /* Radial chamber septa lines */
  .nauc-septum {
    position: absolute;
    border: 1px solid rgba(254, 243, 199, 0.6);
    border-radius: 50%;
  }

  .nauc-septum.s1 { right: -10px; top: -5px; width: 44px; height: 44px; }
  .nauc-septum.s2 { right: -5px; top: 0px; width: 32px; height: 32px; }
  .nauc-septum.s3 { right: 2px; top: 8px; width: 20px; height: 20px; }

  /* Coral-salmon protective hood */
  .nauc-hood {
    position: absolute;
    left: 36px;
    top: 14px;
    width: 22px;
    height: 24px;
    border-radius: 6px 14px 14px 4px;
    background: linear-gradient(180deg, #fb7185, #e11d48);
    border: 1.5px solid #fda4af;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  }

  /* Pinhole eye with white sclera and dark aperture pupil */
  .nauc-eye {
    position: absolute;
    left: 42px;
    top: 24px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #09090b;
    box-shadow: inset 1px 1px 0 #09090b;
  }

  /* Hyponome / siphon nozzle */
  .nauc-siphon {
    position: absolute;
    left: 30px;
    top: 36px;
    width: 14px;
    height: 7px;
    border-radius: 3px 0 0 3px;
    background: #f472b6;
    border: 1px solid #fbcfe8;
    transform-origin: right center;
    animation: nauc-siphon-jet 3.2s ease-in-out infinite;
  }

  @keyframes nauc-siphon-jet {
    0%, 100% { transform: rotate(0deg) scaleX(1); }
    12% { transform: rotate(-10deg) scaleX(0.8); }
    22% { transform: rotate(-5deg) scaleX(1.15); }
    60% { transform: rotate(0deg) scaleX(1); }
  }

  /* Cyan hydro-jet water plume */
  .nauc-jet {
    position: absolute;
    left: 14px;
    top: 37px;
    width: 18px;
    height: 5px;
    border-radius: 50%;
    background: radial-gradient(ellipse at right, rgba(56, 189, 248, 0.95), transparent 70%);
    box-shadow: 0 0 6px rgba(0, 240, 255, 0.8);
    animation: nauc-jet-blast 3.2s ease-out infinite;
    pointer-events: none;
  }

  @keyframes nauc-jet-blast {
    0%, 10% { opacity: 0; transform: scale(0.2) translateX(8px); }
    16% { opacity: 0.95; transform: scale(1.4) translateX(-6px); }
    30% { opacity: 0; transform: scale(2) translateX(-18px); }
    100% { opacity: 0; }
  }

  /* Sensory tentacles */
  .nauc-tentacles {
    position: absolute;
    left: 48px;
    top: 22px;
    width: 24px;
    height: 24px;
  }

  .nauc-tent {
    position: absolute;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #f472b6, transparent);
    border-radius: 1px;
    transform-origin: left center;
    animation: nauc-tent-wave 3.2s ease-in-out infinite;
  }

  .nauc-tent.t1 { top: 2px; width: 18px; animation-delay: -0.1s; }
  .nauc-tent.t2 { top: 6px; width: 22px; animation-delay: -0.3s; }
  .nauc-tent.t3 { top: 11px; width: 20px; animation-delay: -0.5s; }
  .nauc-tent.t4 { top: 16px; width: 16px; animation-delay: -0.2s; }
  .nauc-tent.t5 { top: 20px; width: 14px; animation-delay: -0.4s; }

  @keyframes nauc-tent-wave {
    0%, 100% { transform: rotate(0deg) scaleX(1); }
    18% { transform: rotate(-15deg) scaleX(0.85); }
    45% { transform: rotate(10deg) scaleX(1.1); }
    70% { transform: rotate(-4deg) scaleX(0.95); }
  }
  `,
};

const nautilusMarkup = {
  v1: `
      <div class="nau">
        <div class="nau-body">
          <div class="nau-jet"></div>
          <div class="nau-siphon"></div>
          <div class="nau-shell">
            <div class="nau-septum s1"></div>
            <div class="nau-septum s2"></div>
            <div class="nau-septum s3"></div>
          </div>
          <div class="nau-hood"></div>
          <div class="nau-eye"></div>
          <div class="nau-tentacles">
            <div class="nau-tent t1"></div>
            <div class="nau-tent t2"></div>
            <div class="nau-tent t3"></div>
            <div class="nau-tent t4"></div>
            <div class="nau-tent t5"></div>
          </div>
        </div>
      </div>
    `,
  v2: `
      <div class="nauc">
        <div class="nauc-body">
          <div class="nauc-jet"></div>
          <div class="nauc-siphon"></div>
          <div class="nauc-shell">
            <div class="nauc-septum s1"></div>
            <div class="nauc-septum s2"></div>
            <div class="nauc-septum s3"></div>
          </div>
          <div class="nauc-hood"></div>
          <div class="nauc-eye"></div>
          <div class="nauc-tentacles">
            <div class="nauc-tent t1"></div>
            <div class="nauc-tent t2"></div>
            <div class="nauc-tent t3"></div>
            <div class="nauc-tent t4"></div>
            <div class="nauc-tent t5"></div>
          </div>
        </div>
      </div>
    `,
};

class ConceptNautilus extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${nautilusStyles[version] || nautilusStyles.v2}</style>${nautilusMarkup[version] || nautilusMarkup.v2}`;
  }
}

if (!customElements.get('concept-nautilus')) {
  customElements.define('concept-nautilus', ConceptNautilus);
}
