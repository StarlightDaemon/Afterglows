const sewingMachineStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A sewing machine running a seam: the needle bar pumps up and
     down, the take-up lever swings, fabric feeds steadily left and a
     dashed stitch line grows behind the presser foot. */
  .sm {
    width: 116px;
    height: 88px;
    position: relative;
  }

  /* Machine body: C-arm. */
  .sm-arm {
    position: absolute;
    left: 6px;
    top: 6px;
    right: 10px;
    height: 22px;
    border-radius: 6px 8px 4px 4px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.7), rgba(0, 80, 16, 0.85));
    border: 2px solid var(--accent, #00cc00);
  }

  .sm-head {
    position: absolute;
    right: 10px;
    top: 6px;
    width: 20px;
    height: 42px;
    border-radius: 4px 4px 6px 6px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.8), rgba(0, 70, 14, 0.9));
    border: 2px solid var(--accent, #00cc00);
  }

  /* Base bed. */
  .sm-bed {
    position: absolute;
    left: 4px;
    right: 4px;
    bottom: 16px;
    height: 10px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(0, 120, 24, 0.7), rgba(0, 60, 12, 0.85));
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  /* Balance wheel on the right, spinning. */
  .sm-wheel {
    position: absolute;
    right: -2px;
    top: 12px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid rgba(140, 255, 170, 0.8);
    background: radial-gradient(circle, rgba(0, 90, 18, 0.8) 0 40%, rgba(0, 50, 10, 0.6));
    animation: sm-spin 0.6s linear infinite;
  }

  .sm-wheel::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 2px;
    width: 2px;
    height: 6px;
    margin-left: -1px;
    background: rgba(214, 255, 224, 0.9);
  }

  @keyframes sm-spin {
    to { transform: rotate(360deg); }
  }

  /* Take-up lever swinging with the needle. */
  .sm-lever {
    position: absolute;
    right: 24px;
    top: 12px;
    width: 10px;
    height: 3px;
    background: rgba(190, 255, 205, 0.9);
    transform-origin: 100% 50%;
    animation: sm-lever 0.6s ease-in-out infinite;
  }

  @keyframes sm-lever {
    0%, 100% { transform: rotate(-20deg); }
    50% { transform: rotate(20deg); }
  }

  /* Needle bar pumping. */
  .sm-needle {
    position: absolute;
    right: 18px;
    top: 40px;
    width: 2px;
    height: 16px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.9), #d6ffe0);
    animation: sm-needle 0.6s ease-in-out infinite;
  }

  @keyframes sm-needle {
    0%, 100% { transform: translateY(-6px); }
    50% { transform: translateY(2px); }
  }

  /* Presser foot holding fabric. */
  .sm-foot {
    position: absolute;
    right: 14px;
    bottom: 26px;
    width: 12px;
    height: 4px;
    border-radius: 0 0 2px 2px;
    background: rgba(140, 255, 170, 0.85);
  }

  /* Fabric feeding left under the needle. */
  .sm-fabric {
    position: absolute;
    right: 6px;
    bottom: 20px;
    width: 96px;
    height: 12px;
    background:
      repeating-linear-gradient(90deg, rgba(0, 204, 0, 0.16) 0 8px, transparent 8px 16px),
      linear-gradient(180deg, rgba(0, 130, 26, 0.4), rgba(0, 70, 14, 0.5));
    border: 1px solid rgba(0, 204, 0, 0.4);
    animation: sm-feed 2s linear infinite;
  }

  @keyframes sm-feed {
    to { background-position: -16px 0, 0 0; }
  }

  /* Stitch line: dashes trailing behind the needle, scrolling with
     the fabric so new stitches appear at the foot. */
  .sm-stitch {
    position: absolute;
    right: 20px;
    bottom: 24px;
    width: 76px;
    height: 2px;
    background: repeating-linear-gradient(90deg,
      rgba(214, 255, 224, 0.9) 0 4px,
      transparent 4px 8px);
    animation: sm-stitch 1s linear infinite;
  }

  @keyframes sm-stitch {
    to { background-position: -8px 0; }
  }

  /* Thread spool on top. */
  .sm-spool {
    position: absolute;
    left: 24px;
    top: -2px;
    width: 8px;
    height: 12px;
    border-radius: 2px;
    background: repeating-linear-gradient(180deg,
      rgba(190, 255, 205, 0.8) 0 2px,
      rgba(0, 130, 26, 0.7) 2px 4px);
    border: 1px solid rgba(0, 204, 0, 0.5);
  }

  /* Thread path from spool to needle. */
  .sm-thread {
    position: absolute;
    left: 30px;
    top: 8px;
    width: 60px;
    height: 1px;
    background: rgba(140, 255, 170, 0.5);
  }
`;

class ConceptSewingMachine extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${sewingMachineStyles}</style>
      <div class="sm">
        <div class="sm-spool"></div>
        <div class="sm-arm"></div>
        <div class="sm-thread"></div>
        <div class="sm-head"></div>
        <div class="sm-lever"></div>
        <div class="sm-wheel"></div>
        <div class="sm-needle"></div>
        <div class="sm-foot"></div>
        <div class="sm-fabric"></div>
        <div class="sm-stitch"></div>
        <div class="sm-bed"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-sewing-machine')) {
  customElements.define('concept-sewing-machine', ConceptSewingMachine);
}
