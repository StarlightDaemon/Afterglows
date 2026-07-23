const staplerStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A stapler doing its one job every 3s: the head rears up, drives
     down with a flash, a fresh staple bites the paper stack, and a
     tiny recoil settles it. The finished staples march up the sheet. */
  .st {
    width: 112px;
    height: 84px;
    position: relative;
  }

  /* Paper stack under the jaw. */
  .st-paper {
    position: absolute;
    left: 20px;
    bottom: 18px;
    width: 74px;
    height: 26px;
    border: 1px solid rgba(140, 255, 170, 0.7);
    border-radius: 1px;
    background:
      linear-gradient(180deg, rgba(0, 40, 8, 0.5), rgba(0, 25, 5, 0.7));
    box-shadow: 2px 2px 0 rgba(0, 90, 18, 0.4), 4px 4px 0 rgba(0, 60, 12, 0.3);
  }

  /* Text ruling on the paper. */
  .st-paper::after {
    content: '';
    position: absolute;
    left: 6px;
    right: 26px;
    top: 6px;
    bottom: 4px;
    background: repeating-linear-gradient(180deg,
      rgba(140, 255, 170, 0.35) 0 1px,
      transparent 1px 5px);
  }

  /* The base of the stapler. */
  .st-base {
    position: absolute;
    left: 6px;
    bottom: 10px;
    width: 72px;
    height: 8px;
    border-radius: 3px 6px 3px 3px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.7), rgba(0, 80, 16, 0.85));
    border: 1px solid rgba(0, 204, 0, 0.6);
    transform-origin: 6px 50%;
  }

  /* The head: hinged at the back, hammers down. */
  .st-head {
    position: absolute;
    left: 6px;
    bottom: 18px;
    width: 68px;
    height: 10px;
    border-radius: 6px 8px 3px 3px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.85), rgba(0, 130, 26, 0.9));
    border: 1px solid rgba(140, 255, 170, 0.7);
    transform-origin: 4px 90%;
    animation: st-strike 3s infinite;
  }

  @keyframes st-strike {
    0%, 30% { transform: rotate(-16deg); }
    /* Drive down. */
    42% { transform: rotate(-1deg); }
    46% { transform: rotate(0deg); }
    /* Recoil. */
    52% { transform: rotate(-6deg); }
    58% { transform: rotate(-3deg); }
    70%, 100% { transform: rotate(-16deg); }
  }

  /* Anvil hint at the strike point. */
  .st-anvil {
    position: absolute;
    left: 60px;
    bottom: 17px;
    width: 10px;
    height: 2px;
    background: rgba(140, 255, 170, 0.6);
  }

  /* Strike flash. */
  .st-flash {
    position: absolute;
    left: 62px;
    bottom: 20px;
    width: 10px;
    height: 10px;
    margin-left: -3px;
    border-radius: 50%;
    background: radial-gradient(circle, #f2ffdd, transparent 70%);
    opacity: 0;
    animation: st-flash 3s steps(1) infinite;
  }

  @keyframes st-flash {
    0%, 44% { opacity: 0; }
    46%, 50% { opacity: 1; }
    54%, 100% { opacity: 0; }
  }

  /* Staples already set into the paper, plus the new one appearing. */
  .st-staple {
    position: absolute;
    bottom: 34px;
    width: 8px;
    height: 4px;
    border: 1.5px solid rgba(214, 255, 224, 0.9);
    border-bottom: none;
    border-radius: 1px 1px 0 0;
  }

  .st-staple.s1 { left: 30px; }
  .st-staple.s2 { left: 44px; }
  .st-staple.s3 { left: 58px; }

  /* The freshly-driven staple pops in at the strike. */
  .st-staple.fresh {
    left: 62px;
    opacity: 0;
    animation: st-fresh 3s steps(1) infinite;
  }

  @keyframes st-fresh {
    0%, 46% { opacity: 0; transform: translateY(-3px); }
    50% { opacity: 1; transform: translateY(0); box-shadow: 0 0 6px rgba(0, 204, 0, 0.8); }
    58% { box-shadow: none; }
    100% { opacity: 1; transform: translateY(0); }
  }
`;

class ConceptStapler extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${staplerStyles}</style>
      <div class="st">
        <div class="st-paper"></div>
        <div class="st-staple s1"></div>
        <div class="st-staple s2"></div>
        <div class="st-staple s3"></div>
        <div class="st-staple fresh"></div>
        <div class="st-anvil"></div>
        <div class="st-base"></div>
        <div class="st-head"></div>
        <div class="st-flash"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-stapler')) {
  customElements.define('concept-stapler', ConceptStapler);
}
