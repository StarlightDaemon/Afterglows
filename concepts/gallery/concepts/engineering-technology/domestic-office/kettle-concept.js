const kettleStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Stovetop kettle coming to the boil: burner pulses, steam puffs
     climb from the spout, the lid rattles and whistle marks flare at
     the peak of each 5s boil cycle. */
  .kettle {
    width: 110px;
    height: 96px;
    position: relative;
  }

  .kettle-pot {
    position: absolute;
    left: 26px;
    bottom: 14px;
    width: 56px;
    height: 42px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 8px 8px 22px 22px;
    background: linear-gradient(180deg, rgba(0, 60, 12, 0.45), rgba(0, 30, 6, 0.7));
    box-shadow: inset 0 -6px 10px rgba(0, 204, 0, 0.18), 0 0 10px rgba(0, 204, 0, 0.3);
    transform-origin: 50% 100%;
    animation: kettle-heave 0.28s ease-in-out infinite alternate;
  }

  @keyframes kettle-heave {
    0% { transform: translateY(0) rotate(-1.5deg); }
    100% { transform: translateY(-2px) rotate(1.5deg); }
  }

  .kettle-handle {
    position: absolute;
    left: 38px;
    bottom: 48px;
    width: 32px;
    height: 16px;
    border: 2px solid rgba(140, 255, 170, 0.85);
    border-bottom: none;
    border-radius: 16px 16px 0 0;
    transform-origin: 50% 100%;
    animation: kettle-heave 0.28s ease-in-out infinite alternate;
  }

  .kettle-lid {
    position: absolute;
    left: 46px;
    bottom: 55px;
    width: 16px;
    height: 5px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.95);
    box-shadow: 0 0 6px #00ff66;
    animation: kettle-rattle 0.2s ease-in-out infinite alternate;
  }

  @keyframes kettle-rattle {
    0% { transform: translateY(0) rotate(-4deg); }
    100% { transform: translateY(-4px) rotate(4deg); }
  }

  .kettle-spout {
    position: absolute;
    left: 12px;
    bottom: 42px;
    width: 18px;
    height: 8px;
    border: 2px solid var(--accent, #00cc00);
    border-right: none;
    border-radius: 4px 0 0 4px;
    background: rgba(0, 40, 8, 0.6);
    transform: rotate(-18deg);
  }

  .kettle-steam {
    position: absolute;
    left: 14px;
    bottom: 52px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(214, 255, 224, 0.95), rgba(0, 204, 0, 0.6) 50%, transparent 75%);
    box-shadow: 0 0 8px #00ff66;
    filter: blur(0.5px);
    opacity: 0;
    animation: kettle-steam 1.4s ease-out infinite;
  }

  .kettle-steam.p2 { animation-delay: -0.45s; left: 10px; width: 15px; height: 15px; }
  .kettle-steam.p3 { animation-delay: -0.9s; left: 18px; width: 18px; height: 18px; }

  @keyframes kettle-steam {
    0% { transform: translate(0, 0) scale(0.5); opacity: 0; }
    20% { opacity: 1; }
    60% { transform: translate(-10px, -24px) scale(1.6); opacity: 0.7; }
    100% { transform: translate(-4px, -46px) scale(2.4); opacity: 0; }
  }

  .kettle-whistle {
    position: absolute;
    left: 6px;
    bottom: 50px;
    width: 3px;
    height: 10px;
    border-radius: 1.5px;
    background: #ffffff;
    box-shadow: 0 0 8px #00ff66;
    transform-origin: 50% 100%;
    animation: kettle-whistle 0.6s ease-in-out infinite alternate;
  }

  .kettle-whistle.w2 { transform: rotate(-32deg); animation-delay: 0.1s; }
  .kettle-whistle.w3 { transform: rotate(30deg); animation-delay: 0.2s; }

  @keyframes kettle-whistle {
    0% { transform: scaleY(0.6); opacity: 0.5; }
    100% { transform: scaleY(1.4); opacity: 1; }
  }

  .kettle-burner {
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 6px;
    height: 6px;
    border-radius: 3px;
    background: repeating-linear-gradient(90deg,
      #00ff66 0 5px,
      transparent 5px 10px);
    box-shadow: 0 0 10px #00ff66;
    animation: kettle-burner 0.5s ease-in-out infinite alternate;
  }

  @keyframes kettle-burner {
    0% { opacity: 0.6; transform: scaleY(0.85); }
    100% { opacity: 1; transform: scaleY(1.25); }
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

  /* v2: Cherry-red enamelled whistling stovetop kettle with stainless accents,
     billowing white steam, golden whistle rays, and electric blue gas flame burner */
  .kettlec {
    width: 110px;
    height: 96px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Enamelled cherry red pot with stainless base */
  .kettlec-pot {
    position: absolute;
    left: 26px;
    bottom: 14px;
    width: 56px;
    height: 42px;
    border: 2px solid #ef4444;
    border-radius: 8px 8px 22px 22px;
    background: linear-gradient(180deg, #f87171 0%, #dc2626 45%, #991b1b 85%, #64748b 100%);
    box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.6), 0 4px 10px rgba(0, 0, 0, 0.8), 0 0 10px rgba(239, 68, 68, 0.4);
    transform-origin: 50% 100%;
    animation: kettlec-heave 0.28s ease-in-out infinite alternate;
  }

  @keyframes kettlec-heave {
    0% { transform: translateY(0) rotate(-1.5deg); }
    100% { transform: translateY(-2px) rotate(1.5deg); }
  }

  /* Black heat-resistant arched handle with chrome mounts */
  .kettlec-handle {
    position: absolute;
    left: 38px;
    bottom: 48px;
    width: 32px;
    height: 16px;
    border: 3px solid #18181b;
    border-bottom: none;
    border-radius: 16px 16px 0 0;
    box-shadow: 0 -1px 2px #94a3b8;
    transform-origin: 50% 100%;
    animation: kettlec-heave 0.28s ease-in-out infinite alternate;
  }

  /* Chrome lid with black bakelite knob */
  .kettlec-lid {
    position: absolute;
    left: 46px;
    bottom: 55px;
    width: 16px;
    height: 5px;
    border-radius: 2px;
    background: linear-gradient(180deg, #ffffff, #cbd5e1);
    border: 1px solid #94a3b8;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5), 0 0 6px rgba(255, 255, 255, 0.8);
    animation: kettlec-rattle 0.2s ease-in-out infinite alternate;
  }

  @keyframes kettlec-rattle {
    0% { transform: translateY(0) rotate(-4deg); }
    100% { transform: translateY(-4px) rotate(4deg); }
  }

  /* Chrome whistling spout */
  .kettlec-spout {
    position: absolute;
    left: 12px;
    bottom: 42px;
    width: 18px;
    height: 8px;
    border: 2px solid #cbd5e1;
    border-right: none;
    border-radius: 4px 0 0 4px;
    background: linear-gradient(180deg, #f8fafc, #94a3b8);
    transform: rotate(-18deg);
    box-shadow: inset 0 1px 2px #ffffff;
  }

  /* Billowing white vapor steam clouds */
  .kettlec-steam {
    position: absolute;
    left: 14px;
    bottom: 52px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(224, 242, 254, 0.6) 50%, transparent 75%);
    box-shadow: 0 0 8px #ffffff;
    filter: blur(0.5px);
    opacity: 0;
    animation: kettlec-steam 1.4s ease-out infinite;
  }

  .kettlec-steam.p2 { animation-delay: -0.45s; left: 10px; width: 15px; height: 15px; }
  .kettlec-steam.p3 { animation-delay: -0.9s; left: 18px; width: 18px; height: 18px; }

  @keyframes kettlec-steam {
    0% { transform: translate(0, 0) scale(0.5); opacity: 0; }
    20% { opacity: 1; }
    60% { transform: translate(-10px, -24px) scale(1.6); opacity: 0.75; }
    100% { transform: translate(-4px, -46px) scale(2.4); opacity: 0; }
  }

  /* Golden whistle music resonance rays */
  .kettlec-whistle {
    position: absolute;
    left: 6px;
    bottom: 50px;
    width: 3px;
    height: 10px;
    border-radius: 1.5px;
    background: #facc15;
    box-shadow: 0 0 8px #fde047;
    transform-origin: 50% 100%;
    animation: kettlec-whistle 0.6s ease-in-out infinite alternate;
  }

  .kettlec-whistle.w2 { transform: rotate(-32deg); animation-delay: 0.1s; }
  .kettlec-whistle.w3 { transform: rotate(30deg); animation-delay: 0.2s; }

  @keyframes kettlec-whistle {
    0% { transform: scaleY(0.6); opacity: 0.5; }
    100% { transform: scaleY(1.4); opacity: 1; }
  }

  /* Electric blue gas flame burner ring */
  .kettlec-burner {
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 6px;
    height: 6px;
    border-radius: 3px;
    background: repeating-linear-gradient(90deg,
      #38bdf8 0 5px,
      transparent 5px 10px);
    box-shadow: 0 0 10px #00f0ff, 0 0 16px #38bdf8;
    animation: kettlec-burner 0.5s ease-in-out infinite alternate;
  }

  @keyframes kettlec-burner {
    0% { opacity: 0.6; transform: scaleY(0.85); }
    100% { opacity: 1; transform: scaleY(1.25); }
  }
  `,
};

const kettleMarkup = {
  v1: `
      <div class="kettle">
        <div class="kettle-steam"></div>
        <div class="kettle-steam p2"></div>
        <div class="kettle-steam p3"></div>
        <div class="kettle-whistle"></div>
        <div class="kettle-whistle w2"></div>
        <div class="kettle-whistle w3"></div>
        <div class="kettle-spout"></div>
        <div class="kettle-pot"></div>
        <div class="kettle-handle"></div>
        <div class="kettle-lid"></div>
        <div class="kettle-burner"></div>
      </div>
    `,
  v2: `
      <div class="kettlec">
        <div class="kettlec-steam"></div>
        <div class="kettlec-steam p2"></div>
        <div class="kettlec-steam p3"></div>
        <div class="kettlec-whistle"></div>
        <div class="kettlec-whistle w2"></div>
        <div class="kettlec-whistle w3"></div>
        <div class="kettlec-spout"></div>
        <div class="kettlec-pot"></div>
        <div class="kettlec-handle"></div>
        <div class="kettlec-lid"></div>
        <div class="kettlec-burner"></div>
      </div>
    `,
};

class ConceptKettle extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${kettleStyles[version] || kettleStyles.v2}</style>${kettleMarkup[version] || kettleMarkup.v2}`;
  }
}

if (!customElements.get('concept-kettle')) {
  customElements.define('concept-kettle', ConceptKettle);
}
