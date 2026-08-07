const viseAnvilStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A blacksmith's heavy cast-iron bench vise and horn anvil: an Acme lead screw
     cranks to clamp a glowing hot steel billet between hardened jaws, triggering
     a burst of forging sparks and quench steam wisps. */
  .vis {
    width: 116px;
    height: 98px;
    position: relative;
    overflow: hidden;
  }

  /* Workbench tabletop */
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

  /* Fixed back vise jaw and body */
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

  /* Moveable sliding front jaw */
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

  /* Acme threaded lead-screw rod */
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

  /* Rotating T-handle on lead screw */
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

  /* Glowing hot steel workpiece billet between jaws */
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

  /* Smith's hammer swinging down to strike the billet, timed to land as
     the clamp closes and the billet flashes hot. */
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

  /* Forging clamp spark burst */
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

  /* Anvil body (right) */
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
`;

class ConceptViseAnvil extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${viseAnvilStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-vise-anvil')) {
  customElements.define('concept-vise-anvil', ConceptViseAnvil);
}
