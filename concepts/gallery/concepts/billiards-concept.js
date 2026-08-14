const billiardsStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bl {
    width: 116px;
    height: 84px;
    position: relative;
  }

  .bl-table {
    position: absolute;
    inset: 4px;
    border-radius: 6px;
    background: radial-gradient(ellipse at 60% 50%, rgba(0, 120, 24, 0.4), rgba(0, 70, 14, 0.55));
    border: 3px solid rgba(0, 90, 18, 0.9);
    box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.5);
  }

  .bl-pocket {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle, #020602, rgba(0, 40, 8, 0.7));
    border: 1px solid rgba(0, 204, 0, 0.4);
  }

  .bl-pocket.tl { left: 6px; top: 6px; }
  .bl-pocket.tr { right: 6px; top: 6px; }
  .bl-pocket.bl { left: 6px; bottom: 6px; }
  .bl-pocket.br { right: 6px; bottom: 6px; }

  .bl-ball {
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    animation: bl-scatter 5s cubic-bezier(0.2, 0.7, 0.3, 1) infinite;
  }

  .bl-ball::after {
    content: '';
    position: absolute;
    left: 2px;
    top: 1px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.55);
  }

  .bl-ball.r1 { left: 76px; top: 36px; background: radial-gradient(circle at 35% 30%, #d6ffe0, #2a8a3e); --sx: 22px; --sy: -22px; }
  .bl-ball.r2 { left: 84px; top: 31px; background: radial-gradient(circle at 35% 30%, #baffc9, #0a7a2a); --sx: 26px; --sy: -8px; }
  .bl-ball.r3 { left: 84px; top: 41px; background: radial-gradient(circle at 35% 30%, #d6ffe0, #1d6b2a); --sx: 28px; --sy: 12px; }
  .bl-ball.r4 { left: 92px; top: 26px; background: radial-gradient(circle at 35% 30%, #baffc9, #2a8a3e); --sx: 14px; --sy: -26px; }
  .bl-ball.r5 { left: 92px; top: 46px; background: radial-gradient(circle at 35% 30%, #d6ffe0, #0a7a2a); --sx: 16px; --sy: 24px; }
  .bl-ball.r6 { left: 92px; top: 36px; background: radial-gradient(circle at 35% 30%, #f2ffdd, #4fae4f); --sx: 18px; --sy: 8px; animation-name: bl-sink; }

  @keyframes bl-scatter {
    0%, 40% { transform: translate(0, 0); }
    64% { transform: translate(var(--sx), var(--sy)); }
    88% { transform: translate(var(--sx), var(--sy)); }
    96%, 100% { transform: translate(0, 0); }
  }

  @keyframes bl-sink {
    0%, 40% { transform: translate(0, 0) scale(1); opacity: 1; }
    60% { transform: translate(14px, 14px) scale(1); opacity: 1; }
    66% { transform: translate(18px, 18px) scale(0.5); opacity: 0; }
    95% { opacity: 0; }
    100% { transform: translate(0, 0) scale(1); opacity: 1; }
  }

  .bl-cueball {
    position: absolute;
    left: 22px;
    top: 36px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #ffffff, #baffc9 70%);
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.5);
    animation: bl-cueball 5s cubic-bezier(0.3, 0, 0.4, 1) infinite;
  }

  @keyframes bl-cueball {
    0%, 30% { transform: translateX(0); }
    40% { transform: translateX(48px); }
    48% { transform: translateX(40px); }
    88% { transform: translateX(40px); }
    96%, 100% { transform: translateX(0); }
  }

  .bl-cue {
    position: absolute;
    left: -30px;
    top: 39px;
    width: 46px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, rgba(0, 110, 22, 0.9), rgba(214, 255, 224, 0.9));
    transform-origin: 100% 50%;
    animation: bl-cue 5s infinite;
  }

  .bl-cue::after {
    content: '';
    position: absolute;
    right: -2px;
    top: -0.5px;
    width: 3px;
    height: 4px;
    border-radius: 1px;
    background: #d6ffe0;
  }

  @keyframes bl-cue {
    0% { transform: translateX(28px); }
    20% { transform: translateX(20px); }
    36% { transform: translateX(44px); }
    40% { transform: translateX(46px); opacity: 1; }
    50% { transform: translateX(10px); opacity: 0; }
    96% { transform: translateX(10px); opacity: 0; }
    100% { transform: translateX(28px); opacity: 1; }
  }

  .bl-spark {
    position: absolute;
    left: 72px;
    top: 38px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle, #f2ffdd, transparent 70%);
    opacity: 0;
    animation: bl-spark 5s steps(1) infinite;
  }

  @keyframes bl-spark {
    0%, 38% { opacity: 0; }
    40%, 44% { opacity: 1; }
    48%, 100% { opacity: 0; }
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

  /* v2: Tournament pool table with emerald baize felt, mahogany rails,
     ivory cue ball, maple stick, and chromatic pool balls scattering on break */
  .blc {
    width: 116px;
    height: 84px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Emerald baize felt table with mahogany cushion rails */
  .blc-table {
    position: absolute;
    inset: 4px;
    border-radius: 6px;
    background: radial-gradient(ellipse at 60% 50%, #16a34a 0%, #15803d 60%, #14532d 100%);
    border: 3.5px solid #78350f;
    box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.7), 0 4px 10px rgba(0, 0, 0, 0.8);
  }

  /* Leather drop pockets */
  .blc-pocket {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle, #020617, #09090b);
    border: 1px solid #78350f;
    box-shadow: inset 0 0 3px #000000;
  }

  .blc-pocket.tl { left: 6px; top: 6px; }
  .blc-pocket.tr { right: 6px; top: 6px; }
  .blc-pocket.bl { left: 6px; bottom: 6px; }
  .blc-pocket.br { right: 6px; bottom: 6px; }

  /* Chromatic pool balls */
  .blc-ball {
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    animation: blc-scatter 5s cubic-bezier(0.2, 0.7, 0.3, 1) infinite;
  }

  .blc-ball::after {
    content: '';
    position: absolute;
    left: 2px;
    top: 1px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);
  }

  /* Ball rack with distinct billiard colors */
  .blc-ball.r1 { left: 76px; top: 36px; background: radial-gradient(circle at 35% 30%, #fef08a, #eab308 70%, #ca8a04 100%); --sx: 22px; --sy: -22px; }
  .blc-ball.r2 { left: 84px; top: 31px; background: radial-gradient(circle at 35% 30%, #93c5fd, #2563eb 70%, #1e40af 100%); --sx: 26px; --sy: -8px; }
  .blc-ball.r3 { left: 84px; top: 41px; background: radial-gradient(circle at 35% 30%, #fca5a5, #dc2626 70%, #991b1b 100%); --sx: 28px; --sy: 12px; }
  .blc-ball.r4 { left: 92px; top: 26px; background: radial-gradient(circle at 35% 30%, #d8b4fe, #9333ea 70%, #6b21a8 100%); --sx: 14px; --sy: -26px; }
  .blc-ball.r5 { left: 92px; top: 46px; background: radial-gradient(circle at 35% 30%, #fdba74, #ea580c 70%, #9a3412 100%); --sx: 16px; --sy: 24px; }
  /* Solid 8-ball sinks in corner pocket */
  .blc-ball.r6 { left: 92px; top: 36px; background: radial-gradient(circle at 35% 30%, #52525b, #18181b 70%, #09090b 100%); --sx: 18px; --sy: 8px; animation-name: blc-sink; }

  @keyframes blc-scatter {
    0%, 40% { transform: translate(0, 0); }
    64% { transform: translate(var(--sx), var(--sy)); }
    88% { transform: translate(var(--sx), var(--sy)); }
    96%, 100% { transform: translate(0, 0); }
  }

  @keyframes blc-sink {
    0%, 40% { transform: translate(0, 0) scale(1); opacity: 1; }
    60% { transform: translate(14px, 14px) scale(1); opacity: 1; }
    66% { transform: translate(18px, 18px) scale(0.5); opacity: 0; }
    95% { opacity: 0; }
    100% { transform: translate(0, 0) scale(1); opacity: 1; }
  }

  /* Ivory cue ball */
  .blc-cueball {
    position: absolute;
    left: 22px;
    top: 36px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #ffffff, #f1f5f9 70%, #cbd5e1 100%);
    box-shadow: 0 0 6px #ffffff, 0 1px 3px rgba(0, 0, 0, 0.4);
    animation: blc-cueball 5s cubic-bezier(0.3, 0, 0.4, 1) infinite;
  }

  @keyframes blc-cueball {
    0%, 30% { transform: translateX(0); }
    40% { transform: translateX(48px); }
    48% { transform: translateX(40px); }
    88% { transform: translateX(40px); }
    96%, 100% { transform: translateX(0); }
  }

  /* Maple cue stick with blue chalk tip */
  .blc-cue {
    position: absolute;
    left: -30px;
    top: 39px;
    width: 46px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, #9a3412, #fed7aa, #fef08a);
    transform-origin: 100% 50%;
    animation: blc-cue 5s infinite;
  }

  .blc-cue::after {
    content: '';
    position: absolute;
    right: -2px;
    top: -0.5px;
    width: 3px;
    height: 4px;
    border-radius: 1px;
    background: #0284c7;
  }

  @keyframes blc-cue {
    0% { transform: translateX(28px); }
    20% { transform: translateX(20px); }
    36% { transform: translateX(44px); }
    40% { transform: translateX(46px); opacity: 1; }
    50% { transform: translateX(10px); opacity: 0; }
    96% { transform: translateX(10px); opacity: 0; }
    100% { transform: translateX(28px); opacity: 1; }
  }

  /* Kinetic impact flash */
  .blc-spark {
    position: absolute;
    left: 72px;
    top: 38px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle, #fde047 0%, transparent 70%);
    box-shadow: 0 0 8px #facc15;
    opacity: 0;
    animation: blc-spark 5s steps(1) infinite;
  }

  @keyframes blc-spark {
    0%, 38% { opacity: 0; }
    40%, 44% { opacity: 1; }
    48%, 100% { opacity: 0; }
  }
  `,
};

const billiardsMarkup = {
  v1: `
      <div class="bl">
        <div class="bl-table"></div>
        <div class="bl-pocket tl"></div>
        <div class="bl-pocket tr"></div>
        <div class="bl-pocket bl"></div>
        <div class="bl-pocket br"></div>
        <div class="bl-ball r1"></div>
        <div class="bl-ball r2"></div>
        <div class="bl-ball r3"></div>
        <div class="bl-ball r4"></div>
        <div class="bl-ball r5"></div>
        <div class="bl-ball r6"></div>
        <div class="bl-spark"></div>
        <div class="bl-cueball"></div>
        <div class="bl-cue"></div>
      </div>
    `,
  v2: `
      <div class="blc">
        <div class="blc-table"></div>
        <div class="blc-pocket tl"></div>
        <div class="blc-pocket tr"></div>
        <div class="blc-pocket bl"></div>
        <div class="blc-pocket br"></div>
        <div class="blc-ball r1"></div>
        <div class="blc-ball r2"></div>
        <div class="blc-ball r3"></div>
        <div class="blc-ball r4"></div>
        <div class="blc-ball r5"></div>
        <div class="blc-ball r6"></div>
        <div class="blc-spark"></div>
        <div class="blc-cueball"></div>
        <div class="blc-cue"></div>
      </div>
    `,
};

class ConceptBilliards extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${billiardsStyles[version] || billiardsStyles.v2}</style>${billiardsMarkup[version] || billiardsMarkup.v2}`;
  }
}

if (!customElements.get('concept-billiards')) {
  customElements.define('concept-billiards', ConceptBilliards);
}
