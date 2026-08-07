const embroideryHoopStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A wooden embroidery hoop stretched taut with linen: the hoop steps through
     2D X-Y coordinate offsets while a reciprocating needle punches satin stitch
     petals along a floral design with progressive thread tension draw. */
  .emb {
    width: 116px;
    height: 98px;
    position: relative;
  }

  /* Hoop clamp screw bracket at top */
  .emb-clamp {
    position: absolute;
    left: 50%;
    top: 2px;
    width: 18px;
    height: 8px;
    margin-left: -9px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.9);
    border: 1px solid var(--accent, #00cc00);
    z-index: 5;
  }

  /* Coordinate-stepping hoop canvas carrier */
  .emb-canvas-rig {
    position: absolute;
    left: 18px;
    top: 10px;
    width: 80px;
    height: 80px;
    animation: emb-step-coord 3.6s steps(4) infinite;
  }

  @keyframes emb-step-coord {
    0% { transform: translate(0, 0); }
    25% { transform: translate(-4px, -3px); }
    50% { transform: translate(-2px, 4px); }
    75% { transform: translate(3px, -2px); }
    100% { transform: translate(0, 0); }
  }

  /* Outer wooden hoop ring */
  .emb-hoop {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 4px solid rgba(0, 140, 30, 0.9);
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8), 0 0 6px rgba(0, 204, 0, 0.3);
    background: radial-gradient(circle, rgba(0, 50, 12, 0.9), rgba(0, 20, 5, 0.98));
    overflow: hidden;
  }

  /* Stretched linen grid texture */
  .emb-linen {
    position: absolute;
    inset: 0;
    background:
      repeating-linear-gradient(0deg, rgba(140, 255, 170, 0.15) 0 1px, transparent 1px 6px),
      repeating-linear-gradient(90deg, rgba(140, 255, 170, 0.15) 0 1px, transparent 1px 6px);
  }

  /* Pre-printed floral embroidery stitch petals */
  .emb-petal {
    position: absolute;
    width: 14px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(90deg, rgba(140, 255, 170, 0.9), rgba(0, 180, 40, 0.8));
    border: 1px solid var(--accent, #00cc00);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.6);
    animation: emb-petal-glow 3.6s ease-in-out infinite;
  }

  .emb-petal.p1 { left: 24px; top: 32px; --rot: -30deg; transform: rotate(-30deg); animation-delay: 0s; }
  .emb-petal.p2 { left: 42px; top: 22px; --rot: 45deg; transform: rotate(45deg); animation-delay: 0.9s; }
  .emb-petal.p3 { left: 44px; top: 44px; --rot: 120deg; transform: rotate(120deg); animation-delay: 1.8s; }
  .emb-petal.p4 { left: 26px; top: 48px; --rot: 210deg; transform: rotate(210deg); animation-delay: 2.7s; }

  @keyframes emb-petal-glow {
    0%, 10% { opacity: 0.3; transform: scale(0.8) rotate(var(--rot, 0deg)); }
    25%, 80% { opacity: 1; transform: scale(1.05) rotate(var(--rot, 0deg)); }
    100% { opacity: 0.8; }
  }

  /* Center floral French knot */
  .emb-center {
    position: absolute;
    left: 36px;
    top: 36px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.9);
  }

  /* Punching brass embroidery needle */
  .emb-needle-rig {
    position: absolute;
    left: 56px;
    top: 4px;
    width: 20px;
    height: 48px;
    z-index: 6;
    animation: emb-needle-punch 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
  }

  @keyframes emb-needle-punch {
    0%, 100% { transform: translateY(-8px); }
    40% { transform: translateY(18px); }
    60% { transform: translateY(14px); }
  }

  .emb-needle {
    position: absolute;
    left: 8px;
    top: 0;
    width: 2.5px;
    height: 38px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 1), rgba(140, 255, 170, 0.9));
    border-radius: 1px;
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.8);
  }

  .emb-thread {
    position: absolute;
    left: 10px;
    top: 2px;
    width: 18px;
    height: 22px;
    border-right: 1.5px solid rgba(140, 255, 170, 0.95);
    border-top: 1.5px solid rgba(140, 255, 170, 0.95);
    border-radius: 0 10px 0 0;
  }
`;

class ConceptEmbroideryHoop extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${embroideryHoopStyles}</style>
      <div class="emb">
        <div class="emb-clamp"></div>
        <div class="emb-canvas-rig">
          <div class="emb-hoop">
            <div class="emb-linen"></div>
            <div class="emb-petal p1"></div>
            <div class="emb-petal p2"></div>
            <div class="emb-petal p3"></div>
            <div class="emb-petal p4"></div>
            <div class="emb-center"></div>
          </div>
        </div>
        <div class="emb-needle-rig">
          <div class="emb-needle"></div>
          <div class="emb-thread"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-embroidery-hoop')) {
  customElements.define('concept-embroidery-hoop', ConceptEmbroideryHoop);
}
