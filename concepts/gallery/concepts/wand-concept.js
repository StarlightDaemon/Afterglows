const wandStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .wand-scene {
    position: relative;
    width: 104px;
    height: 104px;
  }

  .wand {
    position: absolute;
    bottom: 16px;
    left: 12px;
    width: 46px;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(90deg, #143a1e 0%, #0d2a14 70%, #1e5a2c 100%);
    border: 1px solid rgba(0, 204, 0, 0.35);
    transform: rotate(-38deg);
    transform-origin: left bottom;
    box-sizing: border-box;
    animation: wand-flick 4.6s ease-in-out infinite;
  }

  .wand::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 1px;
    width: 10px;
    height: 2px;
    border-radius: 1px;
    background: rgba(140, 255, 170, 0.35);
  }

  .wand-tip {
    position: absolute;
    bottom: 44px;
    left: 46px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #d8ffd0;
    box-shadow: 0 0 8px rgba(200, 255, 212, 0.9);
    animation: wand-charge 4.6s ease-in-out infinite;
  }

  /* Sparks launched from the tip along arcing paths. */
  .wand-spark {
    position: absolute;
    bottom: 46px;
    left: 48px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(220, 255, 228, 0.95);
    box-shadow: 0 0 6px rgba(190, 255, 205, 0.9);
    opacity: 0;
  }

  .wand-spark.p1 { animation: wand-arc1 4.6s ease-out infinite; }
  .wand-spark.p2 { animation: wand-arc2 4.6s ease-out infinite; width: 3px; height: 3px; }
  .wand-spark.p3 { animation: wand-arc3 4.6s ease-out infinite; width: 3px; height: 3px; }
  .wand-spark.p4 { animation: wand-arc4 4.6s ease-out infinite; width: 2.5px; height: 2.5px; }

  /* Four-point star glints where sparks land. */
  .wand-star {
    position: absolute;
    width: 10px;
    height: 10px;
    clip-path: polygon(50% 0, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0 50%, 39% 39%);
    background: rgba(220, 255, 228, 0.95);
    opacity: 0;
  }

  .wand-star.t1 { top: 14px; right: 30px; animation: wand-glint 4.6s ease-in-out infinite; }
  .wand-star.t2 { top: 34px; right: 12px; animation: wand-glint 4.6s ease-in-out infinite; animation-delay: 0.25s; }
  .wand-star.t3 { top: 8px; right: 54px; animation: wand-glint 4.6s ease-in-out infinite; animation-delay: 0.5s; width: 7px; height: 7px; }

  @keyframes wand-flick {
    0%, 34% { transform: rotate(-38deg); }
    42% { transform: rotate(-52deg); }
    48% { transform: rotate(-30deg); }
    56%, 100% { transform: rotate(-38deg); }
  }

  @keyframes wand-charge {
    0%, 30% { opacity: 0.6; transform: scale(0.85); box-shadow: 0 0 6px rgba(200, 255, 212, 0.6); }
    44% { opacity: 1; transform: scale(1.6); box-shadow: 0 0 16px rgba(220, 255, 228, 1); }
    52% { opacity: 0.95; transform: scale(1.1); }
    72%, 100% { opacity: 0.65; transform: scale(0.9); box-shadow: 0 0 6px rgba(200, 255, 212, 0.6); }
  }

  @keyframes wand-arc1 {
    0%, 46% { opacity: 0; transform: translate(0, 0); }
    52% { opacity: 1; }
    76% { opacity: 1; transform: translate(26px, -34px); }
    88%, 100% { opacity: 0; transform: translate(34px, -36px); }
  }

  @keyframes wand-arc2 {
    0%, 48% { opacity: 0; transform: translate(0, 0); }
    54% { opacity: 1; }
    78% { opacity: 1; transform: translate(40px, -22px); }
    90%, 100% { opacity: 0; transform: translate(48px, -20px); }
  }

  @keyframes wand-arc3 {
    0%, 50% { opacity: 0; transform: translate(0, 0); }
    56% { opacity: 1; }
    80% { opacity: 1; transform: translate(14px, -44px); }
    92%, 100% { opacity: 0; transform: translate(18px, -48px); }
  }

  @keyframes wand-arc4 {
    0%, 52% { opacity: 0; transform: translate(0, 0); }
    58% { opacity: 1; }
    84% { opacity: 1; transform: translate(32px, -40px); }
    96%, 100% { opacity: 0; transform: translate(38px, -44px); }
  }

  @keyframes wand-glint {
    0%, 74% { opacity: 0; transform: scale(0.2) rotate(0deg); }
    82% { opacity: 1; transform: scale(1.1) rotate(45deg); }
    94%, 100% { opacity: 0; transform: scale(0.3) rotate(90deg); }
  }
`;

class ConceptWand extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${wandStyles}</style>
      <div class="wand-scene">
        <div class="wand"></div>
        <div class="wand-tip"></div>
        <div class="wand-spark p1"></div>
        <div class="wand-spark p2"></div>
        <div class="wand-spark p3"></div>
        <div class="wand-spark p4"></div>
        <div class="wand-star t1"></div>
        <div class="wand-star t2"></div>
        <div class="wand-star t3"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-wand')) {
  customElements.define('concept-wand', ConceptWand);
}
