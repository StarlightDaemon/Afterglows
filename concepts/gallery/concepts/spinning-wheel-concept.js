const spinningWheelStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A spinning wheel drawing yarn: the great wheel turns, its drive
     band running to the little flyer whorl that whirs, twisting raw
     fibre from the distaff into thread that winds onto the bobbin. */
  .sw {
    width: 116px;
    height: 96px;
    position: relative;
  }

  /* The great wheel, left. */
  .sw-great {
    position: absolute;
    left: 6px;
    bottom: 14px;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    border: 2px solid var(--accent, #00cc00);
    background:
      repeating-conic-gradient(rgba(140, 255, 170, 0.55) 0 1.4deg, transparent 1.4deg 30deg),
      radial-gradient(circle, rgba(0, 60, 12, 0.5) 0 20%, transparent 24%);
    box-shadow: 0 0 8px rgba(0, 204, 0, 0.25);
    animation: sw-spin 1.6s linear infinite;
  }

  /* Hub. */
  .sw-great::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 10px;
    height: 10px;
    margin: -5px 0 0 -5px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #d6ffe0, #2a8a3e 75%);
  }

  @keyframes sw-spin {
    to { transform: rotate(360deg); }
  }

  /* Wheel rim highlight. */
  .sw-rim {
    position: absolute;
    left: 6px;
    bottom: 14px;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    border: 3px solid rgba(0, 204, 0, 0.5);
  }

  /* Table / bench. */
  .sw-bench {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 8px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 110, 22, 0.8), transparent);
  }

  .sw-leg {
    position: absolute;
    bottom: 2px;
    width: 3px;
    height: 8px;
    background: rgba(0, 110, 22, 0.7);
  }

  .sw-leg.l1 { left: 30px; }
  .sw-leg.l2 { left: 84px; }

  /* Flyer assembly, upper right: whorl spinning fast. */
  .sw-flyer {
    position: absolute;
    right: 14px;
    top: 20px;
    width: 22px;
    height: 22px;
    animation: sw-flyer 0.4s linear infinite;
  }

  .sw-flyer-arm {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 22px;
    height: 2px;
    margin: -1px 0 0 -11px;
    background: rgba(190, 255, 205, 0.8);
    border-radius: 2px;
  }

  .sw-flyer-arm.a2 { transform: rotate(90deg); }

  @keyframes sw-flyer {
    to { transform: rotate(360deg); }
  }

  /* Bobbin building up thread at the flyer center. */
  .sw-bobbin {
    position: absolute;
    right: 21px;
    top: 27px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(214, 255, 224, 0.9), rgba(0, 130, 26, 0.8) 70%);
    box-shadow: 0 0 5px rgba(0, 204, 0, 0.5);
    animation: sw-bobbin 8s ease-in-out infinite;
  }

  @keyframes sw-bobbin {
    0% { transform: scale(0.7); }
    90% { transform: scale(1.15); }
    96%, 100% { transform: scale(0.7); }
  }

  /* Drive band linking great wheel to flyer. */
  .sw-band {
    position: absolute;
    left: 36px;
    top: 30px;
    width: 46px;
    height: 22px;
    border-top: 1.5px solid rgba(140, 255, 170, 0.6);
    border-bottom: 1.5px solid rgba(140, 255, 170, 0.4);
    transform: skewX(-6deg);
  }

  /* Distaff holding raw fibre. */
  .sw-distaff {
    position: absolute;
    right: 2px;
    top: 2px;
    width: 3px;
    height: 20px;
    background: rgba(0, 110, 22, 0.7);
  }

  .sw-fibre {
    position: absolute;
    right: -2px;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50% 50% 40% 60%;
    background: radial-gradient(circle, rgba(190, 255, 205, 0.45), transparent 70%);
    filter: blur(0.6px);
    animation: sw-fibre 8s ease-in-out infinite;
  }

  @keyframes sw-fibre {
    0% { transform: scale(1); }
    90% { transform: scale(0.6); }
    96%, 100% { transform: scale(1); }
  }

  /* The drawn thread: distaff to bobbin, twisting (dashes scroll). */
  .sw-thread {
    position: absolute;
    right: 26px;
    top: 14px;
    width: 14px;
    height: 14px;
    border-top: 2px solid;
    border-image: repeating-linear-gradient(90deg, rgba(214, 255, 224, 0.9) 0 3px, transparent 3px 6px) 2;
    border-radius: 0;
    animation: sw-thread 0.5s linear infinite;
  }

  @keyframes sw-thread {
    0% { border-image-source: repeating-linear-gradient(90deg, rgba(214, 255, 224, 0.9) 0 3px, transparent 3px 6px); }
    100% { border-image-source: repeating-linear-gradient(90deg, transparent 0 3px, rgba(214, 255, 224, 0.9) 3px 6px); }
  }

  /* Treadle at the base, rocking. */
  .sw-treadle {
    position: absolute;
    left: 14px;
    bottom: 4px;
    width: 30px;
    height: 3px;
    border-radius: 2px;
    background: rgba(140, 255, 170, 0.7);
    transform-origin: 100% 50%;
    animation: sw-treadle 1.6s ease-in-out infinite;
  }

  @keyframes sw-treadle {
    0%, 100% { transform: rotate(-4deg); }
    50% { transform: rotate(4deg); }
  }
`;

class ConceptSpinningWheel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${spinningWheelStyles}</style>
      <div class="sw">
        <div class="sw-bench"></div>
        <div class="sw-leg l1"></div>
        <div class="sw-leg l2"></div>
        <div class="sw-great"></div>
        <div class="sw-rim"></div>
        <div class="sw-band"></div>
        <div class="sw-distaff"></div>
        <div class="sw-fibre"></div>
        <div class="sw-thread"></div>
        <div class="sw-flyer">
          <div class="sw-flyer-arm a1"></div>
          <div class="sw-flyer-arm a2"></div>
        </div>
        <div class="sw-bobbin"></div>
        <div class="sw-treadle"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-spinning-wheel')) {
  customElements.define('concept-spinning-wheel', ConceptSpinningWheel);
}
