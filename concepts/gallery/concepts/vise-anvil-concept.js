const viseAnvilStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .vis {
    width: 116px;
    height: 98px;
    position: relative;
    overflow: hidden;
  }

  .vis-bench {
    position: absolute;
    left: 8px;
    bottom: 12px;
    width: 100px;
    height: 8px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(0, 100, 20, 0.85), rgba(0, 30, 6, 0.98));
    border: 1.5px solid var(--accent, #00cc00);
  }

  .vis-fixed-jaw {
    position: absolute;
    left: 48px;
    top: 26px;
    width: 18px;
    height: 48px;
    border-radius: 4px 4px 0 0;
    background: linear-gradient(180deg, rgba(0, 140, 30, 0.9), rgba(0, 50, 10, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    z-index: 2;
  }

  .vis-slide-jaw {
    position: absolute;
    left: 18px;
    top: 26px;
    width: 18px;
    height: 48px;
    border-radius: 4px 4px 0 0;
    background: linear-gradient(180deg, rgba(0, 140, 30, 0.9), rgba(0, 50, 10, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    z-index: 4;
    animation: vis-clamp 3.6s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
  }

  @keyframes vis-clamp {
    0%, 20% { transform: translateX(0); }
    50%, 80% { transform: translateX(18px); }
    95%, 100% { transform: translateX(0); }
  }

  .vis-screw {
    position: absolute;
    left: 6px;
    top: 48px;
    width: 50px;
    height: 6px;
    background: repeating-linear-gradient(90deg, rgba(190, 255, 205, 1) 0 2px, rgba(0, 80, 16, 0.9) 2px 4px);
    border: 1px solid var(--accent, #00cc00);
    z-index: 3;
  }

  .vis-handle {
    position: absolute;
    left: 2px;
    top: 36px;
    width: 4px;
    height: 30px;
    border-radius: 2px;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.8);
    z-index: 5;
    animation: vis-handle-spin 3.6s linear infinite;
  }

  @keyframes vis-handle-spin {
    0%, 20% { transform: scaleY(1); }
    30%, 45% { transform: scaleY(0.3) rotate(90deg); }
    50%, 80% { transform: scaleY(1); }
    85%, 95% { transform: scaleY(0.3) rotate(-90deg); }
    100% { transform: scaleY(1); }
  }

  .vis-billet {
    position: absolute;
    left: 40px;
    top: 32px;
    width: 12px;
    height: 14px;
    border-radius: 2px;
    background: radial-gradient(circle at 40% 40%, rgba(190, 255, 205, 1), rgba(0, 230, 40, 0.9));
    box-shadow: 0 0 10px rgba(140, 255, 170, 1);
    z-index: 3;
    animation: vis-billet-glow 3.6s ease-in-out infinite;
  }

  @keyframes vis-billet-glow {
    0%, 40% { filter: brightness(1); transform: scale(1); }
    50%, 80% { filter: brightness(1.5) drop-shadow(0 0 6px rgba(190, 255, 205, 1)); transform: scaleX(0.85); }
    100% { filter: brightness(1); transform: scale(1); }
  }

  .vis-hammer-rig {
    position: absolute;
    left: 34px;
    top: 0;
    width: 22px;
    height: 32px;
    transform-origin: top center;
    z-index: 7;
    animation: vis-hammer-swing 3.6s cubic-bezier(0.5, 0, 0.3, 1) infinite;
  }

  @keyframes vis-hammer-swing {
    0%, 40% { transform: rotate(-38deg); }
    48% { transform: rotate(4deg); }
    52% { transform: rotate(-6deg); }
    58%, 100% { transform: rotate(-38deg); }
  }

  .vis-hammer-handle {
    position: absolute;
    left: 10px;
    top: 0;
    width: 3px;
    height: 22px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(0, 160, 35, 0.9), rgba(0, 70, 14, 0.95));
    border: 1px solid var(--accent, #00cc00);
  }

  .vis-hammer-head {
    position: absolute;
    left: 0;
    top: 18px;
    width: 22px;
    height: 10px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.95), rgba(0, 110, 22, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.4);
  }

  .vis-spark {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 1);
    z-index: 6;
    animation: vis-spark-pop 3.6s ease-out infinite;
    pointer-events: none;
  }

  .vis-spark.s1 { left: 42px; top: 30px; animation-delay: 0s; --sx: -12px; --sy: -14px; }
  .vis-spark.s2 { left: 44px; top: 34px; animation-delay: 0s; --sx: 14px; --sy: -10px; }
  .vis-spark.s3 { left: 40px; top: 38px; animation-delay: 0s; --sx: -8px; --sy: 12px; }

  @keyframes vis-spark-pop {
    0%, 48% { opacity: 0; transform: translate(0, 0) scale(0.2); }
    50% { opacity: 1; transform: translate(0, 0) scale(1.4); }
    60% { opacity: 0; transform: translate(var(--sx, 8px), var(--sy, -10px)) scale(0.2); }
    100% { opacity: 0; }
  }

  .vis-anvil {
    position: absolute;
    right: 10px;
    top: 40px;
    width: 32px;
    height: 34px;
    clip-path: polygon(0 0, 100% 0, 85% 50%, 95% 100%, 15% 100%, 25% 50%);
    background: linear-gradient(180deg, rgba(0, 140, 30, 0.9), rgba(0, 40, 8, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
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

  /* v2: Gunmetal steel vise, blazing hot cherry-red glowing billet,
     striking blacksmith hammer with spark shower, and iron anvil */
  .visc {
    width: 116px;
    height: 98px;
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
  }

  /* Timber workbench */
  .visc-bench {
    position: absolute;
    left: 8px;
    bottom: 12px;
    width: 100px;
    height: 8px;
    border-radius: 2px;
    background: linear-gradient(180deg, #78350f 0%, #451a03 100%);
    border: 1px solid #9a3412;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.9);
  }

  /* Fixed gunmetal vise jaw */
  .visc-fixed-jaw {
    position: absolute;
    left: 48px;
    top: 26px;
    width: 18px;
    height: 48px;
    border-radius: 4px 4px 0 0;
    background: linear-gradient(180deg, #475569 0%, #1e293b 60%, #09090b 100%);
    border: 1.5px solid #64748b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
    z-index: 2;
  }

  /* Sliding gunmetal front jaw */
  .visc-slide-jaw {
    position: absolute;
    left: 18px;
    top: 26px;
    width: 18px;
    height: 48px;
    border-radius: 4px 4px 0 0;
    background: linear-gradient(180deg, #475569 0%, #1e293b 60%, #09090b 100%);
    border: 1.5px solid #64748b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
    z-index: 4;
    animation: visc-clamp 3.6s cubic-bezier(0.2, 0.8, 0.3, 1) infinite;
  }

  @keyframes visc-clamp {
    0%, 20% { transform: translateX(0); }
    50%, 80% { transform: translateX(18px); }
    95%, 100% { transform: translateX(0); }
  }

  /* Chrome lead screw */
  .visc-screw {
    position: absolute;
    left: 6px;
    top: 48px;
    width: 50px;
    height: 6px;
    background: repeating-linear-gradient(90deg, #ffffff 0 2px, #334155 2px 4px);
    border: 1px solid #cbd5e1;
    z-index: 3;
  }

  /* Polished steel T-handle */
  .visc-handle {
    position: absolute;
    left: 2px;
    top: 36px;
    width: 4px;
    height: 30px;
    border-radius: 2px;
    background: linear-gradient(180deg, #ffffff, #94a3b8);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
    z-index: 5;
    animation: visc-handle-spin 3.6s linear infinite;
  }

  @keyframes visc-handle-spin {
    0%, 20% { transform: scaleY(1); }
    30%, 45% { transform: scaleY(0.3) rotate(90deg); }
    50%, 80% { transform: scaleY(1); }
    85%, 95% { transform: scaleY(0.3) rotate(-90deg); }
    100% { transform: scaleY(1); }
  }

  /* Blazing hot glowing billet */
  .visc-billet {
    position: absolute;
    left: 40px;
    top: 32px;
    width: 12px;
    height: 14px;
    border-radius: 2px;
    background: radial-gradient(circle at 40% 40%, #ffffff 0%, #fde047 30%, #ea580c 70%, #991b1b 100%);
    box-shadow: 0 0 14px #ea580c, 0 0 24px #facc15;
    z-index: 3;
    animation: visc-billet-glow 3.6s ease-in-out infinite;
  }

  @keyframes visc-billet-glow {
    0%, 40% { filter: brightness(1); transform: scale(1); }
    50%, 80% { filter: brightness(1.6) drop-shadow(0 0 8px #fde047); transform: scaleX(0.85); }
    100% { filter: brightness(1); transform: scale(1); }
  }

  /* Striking blacksmith hammer */
  .visc-hammer-rig {
    position: absolute;
    left: 34px;
    top: 0;
    width: 22px;
    height: 32px;
    transform-origin: top center;
    z-index: 7;
    animation: visc-hammer-swing 3.6s cubic-bezier(0.5, 0, 0.3, 1) infinite;
  }

  @keyframes visc-hammer-swing {
    0%, 40% { transform: rotate(-38deg); }
    48% { transform: rotate(4deg); }
    52% { transform: rotate(-6deg); }
    58%, 100% { transform: rotate(-38deg); }
  }

  .visc-hammer-handle {
    position: absolute;
    left: 10px;
    top: 0;
    width: 3px;
    height: 22px;
    border-radius: 2px;
    background: linear-gradient(180deg, #ca8a04 0%, #78350f 100%);
    border: 0.5px solid #d97706;
  }

  .visc-hammer-head {
    position: absolute;
    left: 0;
    top: 18px;
    width: 22px;
    height: 10px;
    border-radius: 2px;
    background: linear-gradient(180deg, #94a3b8 0%, #334155 100%);
    border: 1px solid #cbd5e1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  }

  /* Incandescent sparks burst */
  .visc-spark {
    position: absolute;
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 0 6px #fde047, 0 0 10px #ea580c;
    z-index: 6;
    animation: visc-spark-pop 3.6s ease-out infinite;
    pointer-events: none;
  }

  .visc-spark.s1 { left: 42px; top: 30px; animation-delay: 0s; --sx: -14px; --sy: -16px; }
  .visc-spark.s2 { left: 44px; top: 34px; animation-delay: 0s; --sx: 16px; --sy: -12px; }
  .visc-spark.s3 { left: 40px; top: 38px; animation-delay: 0s; --sx: -10px; --sy: 14px; }

  @keyframes visc-spark-pop {
    0%, 48% { opacity: 0; transform: translate(0, 0) scale(0.2); }
    50% { opacity: 1; transform: translate(0, 0) scale(1.6); }
    60% { opacity: 0; transform: translate(var(--sx, 8px), var(--sy, -10px)) scale(0.2); }
    100% { opacity: 0; }
  }

  /* Cast iron horn anvil */
  .visc-anvil {
    position: absolute;
    right: 10px;
    top: 40px;
    width: 32px;
    height: 34px;
    clip-path: polygon(0 0, 100% 0, 85% 50%, 95% 100%, 15% 100%, 25% 50%);
    background: linear-gradient(180deg, #64748b 0%, #1e293b 60%, #09090b 100%);
    border: 1.5px solid #94a3b8;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
  }
  `,
};

const viseAnvilMarkup = {
  v1: `
      <div class="vis">
        <div class="vis-bench"></div>
        <div class="vis-anvil"></div>
        <div class="vis-hammer-rig">
          <div class="vis-hammer-handle"></div>
          <div class="vis-hammer-head"></div>
        </div>
        <div class="vis-fixed-jaw"></div>
        <div class="vis-screw"></div>
        <div class="vis-billet"></div>
        <div class="vis-slide-jaw"></div>
        <div class="vis-handle"></div>
        <div class="vis-spark s1"></div>
        <div class="vis-spark s2"></div>
        <div class="vis-spark s3"></div>
      </div>
    `,
  v2: `
      <div class="visc">
        <div class="visc-bench"></div>
        <div class="visc-anvil"></div>
        <div class="visc-hammer-rig">
          <div class="visc-hammer-handle"></div>
          <div class="visc-hammer-head"></div>
        </div>
        <div class="visc-fixed-jaw"></div>
        <div class="visc-screw"></div>
        <div class="visc-billet"></div>
        <div class="visc-slide-jaw"></div>
        <div class="visc-handle"></div>
        <div class="visc-spark s1"></div>
        <div class="visc-spark s2"></div>
        <div class="visc-spark s3"></div>
      </div>
    `,
};

class ConceptViseAnvil extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${viseAnvilStyles[version] || viseAnvilStyles.v2}</style>${viseAnvilMarkup[version] || viseAnvilMarkup.v2}`;
  }
}

if (!customElements.get('concept-vise-anvil')) {
  customElements.define('concept-vise-anvil', ConceptViseAnvil);
}
