const peacockStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A peacock displaying: the great fan of eyespotted feathers sweeps
     open behind the body, shimmers at full spread, then folds away -
     the bird giving a little shiver at the peak. */
  .pk {
    width: 108px;
    height: 100px;
    position: relative;
  }

  /* The fan: many rays radiating from the base, opening together. */
  .pk-fan {
    position: absolute;
    left: 50%;
    bottom: 22px;
    width: 0;
    height: 0;
  }

  .pk-ray {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 6px;
    height: 44px;
    margin-left: -3px;
    transform-origin: 50% 100%;
    animation: pk-open 6s ease-in-out infinite;
  }

  .pk-quill {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 1.5px;
    height: 100%;
    margin-left: -0.75px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.5), rgba(140, 255, 170, 0.7));
  }

  /* Eyespot at each ray tip. */
  .pk-eye {
    position: absolute;
    left: 50%;
    top: -2px;
    width: 9px;
    height: 11px;
    margin-left: -4.5px;
    border-radius: 50%;
    background: radial-gradient(ellipse at 50% 45%,
      rgba(0, 40, 8, 0.95) 0 28%,
      rgba(190, 255, 205, 0.9) 30% 45%,
      rgba(0, 160, 32, 0.8) 55%,
      rgba(0, 110, 22, 0.6));
    box-shadow: 0 0 4px rgba(0, 204, 0, 0.5);
    animation: pk-shimmer 6s ease-in-out infinite;
  }

  /* Nine rays fanning from -80deg to +80deg. */
  .pk-ray.a1 { --end: -80deg; }
  .pk-ray.a2 { --end: -60deg; }
  .pk-ray.a3 { --end: -40deg; }
  .pk-ray.a4 { --end: -20deg; }
  .pk-ray.a5 { --end: 0deg; height: 50px; }
  .pk-ray.a6 { --end: 20deg; }
  .pk-ray.a7 { --end: 40deg; }
  .pk-ray.a8 { --end: 60deg; }
  .pk-ray.a9 { --end: 80deg; }

  /* Rays start bundled upright, sweep to their spread angle, hold,
     then fold back together. */
  @keyframes pk-open {
    0%, 10% { transform: rotate(0deg) scaleY(0.5); }
    38% { transform: rotate(var(--end)) scaleY(1); }
    68% { transform: rotate(var(--end)) scaleY(1); }
    90%, 100% { transform: rotate(0deg) scaleY(0.5); }
  }

  @keyframes pk-shimmer {
    0%, 38% { filter: brightness(0.8); }
    46% { filter: brightness(1.5); }
    54% { filter: brightness(0.9); }
    62% { filter: brightness(1.4); }
    70%, 100% { filter: brightness(0.9); }
  }

  /* Body and neck in front of the fan. */
  .pk-body {
    position: absolute;
    left: 50%;
    bottom: 14px;
    width: 16px;
    height: 24px;
    margin-left: -8px;
    border-radius: 50% 50% 45% 45%;
    background: radial-gradient(ellipse at 45% 35%, rgba(190, 255, 205, 0.7), rgba(0, 130, 26, 0.85));
    border: 1px solid rgba(0, 204, 0, 0.6);
    z-index: 3;
    animation: pk-shiver 6s ease-in-out infinite;
  }

  @keyframes pk-shiver {
    0%, 44%, 100% { transform: translateX(0); }
    48% { transform: translateX(-1.5px); }
    52% { transform: translateX(1.5px); }
    56% { transform: translateX(-1px); }
    60% { transform: translateX(0); }
  }

  .pk-neck {
    position: absolute;
    left: 50%;
    bottom: 34px;
    width: 6px;
    height: 20px;
    margin-left: -3px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(140, 255, 170, 0.85), rgba(0, 150, 30, 0.8));
    z-index: 3;
  }

  .pk-head {
    position: absolute;
    left: 50%;
    bottom: 52px;
    width: 9px;
    height: 9px;
    margin-left: -4.5px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, rgba(214, 255, 224, 0.9), rgba(0, 140, 28, 0.9));
    z-index: 3;
  }

  /* Crest feathers. */
  .pk-head::before {
    content: '';
    position: absolute;
    left: 50%;
    top: -6px;
    width: 1px;
    height: 6px;
    margin-left: -0.5px;
    background: rgba(140, 255, 170, 0.8);
    box-shadow: -2px 0 0 rgba(140, 255, 170, 0.7), 2px 0 0 rgba(140, 255, 170, 0.7);
  }

  /* Beak. */
  .pk-head::after {
    content: '';
    position: absolute;
    left: -3px;
    top: 3px;
    width: 4px;
    height: 2px;
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
    background: rgba(214, 255, 224, 0.9);
  }

  /* Legs. */
  .pk-leg {
    position: absolute;
    bottom: 4px;
    width: 1.5px;
    height: 12px;
    background: rgba(140, 255, 170, 0.7);
    z-index: 3;
  }

  .pk-leg.l1 { left: 48px; }
  .pk-leg.l2 { left: 56px; }
`;

class ConceptPeacock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    const rays = ['a1','a2','a3','a4','a5','a6','a7','a8','a9']
      .map((c) => `<div class="pk-ray ${c}"><div class="pk-quill"></div><div class="pk-eye"></div></div>`)
      .join('');
    this.shadowRoot.innerHTML = `
      <style>${peacockStyles}</style>
      <div class="pk">
        <div class="pk-fan">${rays}</div>
        <div class="pk-leg l1"></div>
        <div class="pk-leg l2"></div>
        <div class="pk-body"></div>
        <div class="pk-neck"></div>
        <div class="pk-head"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-peacock')) {
  customElements.define('concept-peacock', ConceptPeacock);
}
