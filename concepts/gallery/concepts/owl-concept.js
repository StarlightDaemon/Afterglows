const owlStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* An owl on a branch keeping watch: it swivels its head to scan,
     blinks slowly, its chest feathers breathe, and now and then a
     wing shrugs. */
  .ow {
    width: 96px;
    height: 100px;
    position: relative;
  }

  /* Branch. */
  .ow-branch {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 14px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 110, 22, 0.8), rgba(0, 70, 14, 0.7));
  }

  /* Talons gripping. */
  .ow-talon {
    position: absolute;
    bottom: 10px;
    width: 6px;
    height: 8px;
    border-left: 2px solid rgba(140, 255, 170, 0.7);
    border-right: 2px solid rgba(140, 255, 170, 0.7);
    border-radius: 0 0 3px 3px;
  }

  .ow-talon.t1 { left: 38px; }
  .ow-talon.t2 { left: 52px; }

  /* Body: teardrop, gently breathing. */
  .ow-body {
    position: absolute;
    left: 50%;
    bottom: 16px;
    width: 44px;
    height: 46px;
    margin-left: -22px;
    border-radius: 50% 50% 45% 45%;
    background: radial-gradient(ellipse at 50% 35%,
      rgba(190, 255, 205, 0.55),
      rgba(0, 130, 26, 0.7) 60%,
      rgba(0, 80, 16, 0.85));
    border: 1px solid rgba(0, 204, 0, 0.5);
    animation: ow-breathe 3.4s ease-in-out infinite;
  }

  /* Chest feather chevrons. */
  .ow-body::after {
    content: '';
    position: absolute;
    left: 8px;
    right: 8px;
    top: 20px;
    bottom: 4px;
    background:
      repeating-linear-gradient(180deg,
        transparent 0 3px,
        rgba(0, 90, 18, 0.4) 3px 4px);
    border-radius: 0 0 45% 45%;
  }

  @keyframes ow-breathe {
    0%, 100% { transform: scaleX(1) scaleY(1); }
    50% { transform: scaleX(1.03) scaleY(0.98); }
  }

  /* Wings folded at the sides; one shrugs occasionally. */
  .ow-wing {
    position: absolute;
    bottom: 18px;
    width: 14px;
    height: 34px;
    border-radius: 40% 40% 50% 50%;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.65), rgba(0, 80, 16, 0.85));
    border: 1px solid rgba(0, 204, 0, 0.4);
  }

  .ow-wing.left { left: 20px; transform-origin: top center; animation: ow-shrug 6s ease-in-out infinite; }
  .ow-wing.right { right: 20px; transform-origin: top center; animation: ow-shrug 6s ease-in-out infinite; animation-delay: -0.1s; }

  @keyframes ow-shrug {
    0%, 70%, 100% { transform: rotate(0deg); }
    78% { transform: rotate(-4deg) translateY(-2px); }
    86% { transform: rotate(2deg); }
  }

  /* Head: swivels to scan. */
  .ow-head {
    position: absolute;
    left: 50%;
    bottom: 52px;
    width: 42px;
    height: 34px;
    margin-left: -21px;
    border-radius: 50% 50% 40% 40%;
    background: radial-gradient(ellipse at 50% 40%,
      rgba(190, 255, 205, 0.6),
      rgba(0, 140, 28, 0.75) 65%);
    border: 1px solid rgba(0, 204, 0, 0.5);
    transform-origin: 50% 90%;
    animation: ow-swivel 5s ease-in-out infinite;
  }

  /* Ear tufts. */
  .ow-head::before,
  .ow-head::after {
    content: '';
    position: absolute;
    top: -6px;
    width: 8px;
    height: 10px;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    background: rgba(0, 130, 26, 0.85);
  }

  .ow-head::before { left: 4px; transform: rotate(-12deg); }
  .ow-head::after { right: 4px; transform: rotate(12deg); }

  @keyframes ow-swivel {
    0%, 100% { transform: rotate(0deg); }
    20% { transform: rotate(-14deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(16deg); }
  }

  /* Facial disc + big eyes that blink. */
  .ow-eye {
    position: absolute;
    top: 10px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: radial-gradient(circle at 45% 40%, #f2ffdd 0 25%, #2a8a3e 26% 55%, #041a0a 56%);
    border: 2px solid rgba(140, 255, 170, 0.8);
    box-sizing: border-box;
    overflow: hidden;
  }

  .ow-eye.left { left: 4px; }
  .ow-eye.right { right: 4px; }

  /* Eyelid dropping for the blink. */
  .ow-lid {
    position: absolute;
    left: 0;
    right: 0;
    top: -16px;
    height: 16px;
    background: rgba(0, 120, 24, 0.95);
    border-radius: 0 0 50% 50%;
    animation: ow-blink 5s ease-in-out infinite;
  }

  @keyframes ow-blink {
    0%, 40%, 100% { transform: translateY(0); }
    46% { transform: translateY(16px); }
    52% { transform: translateY(0); }
    /* Second slow blink. */
    84% { transform: translateY(0); }
    89% { transform: translateY(16px); }
    94% { transform: translateY(0); }
  }

  /* Beak. */
  .ow-beak {
    position: absolute;
    left: 50%;
    top: 20px;
    width: 5px;
    height: 8px;
    margin-left: -2.5px;
    clip-path: polygon(50% 0, 100% 30%, 50% 100%, 0 30%);
    background: rgba(214, 255, 224, 0.9);
  }
`;

class ConceptOwl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${owlStyles}</style>
      <div class="ow">
        <div class="ow-branch"></div>
        <div class="ow-talon t1"></div>
        <div class="ow-talon t2"></div>
        <div class="ow-wing left"></div>
        <div class="ow-wing right"></div>
        <div class="ow-body"></div>
        <div class="ow-head">
          <div class="ow-eye left"><div class="ow-lid"></div></div>
          <div class="ow-eye right"><div class="ow-lid"></div></div>
          <div class="ow-beak"></div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-owl')) {
  customElements.define('concept-owl', ConceptOwl);
}
