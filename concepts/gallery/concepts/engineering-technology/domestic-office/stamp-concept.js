const stampStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A rubber stamp approving paperwork: it lifts, dabs the ink pad,
     swings over and slams the page - APPROVED blooms in a little puff
     of impact - then a fresh sheet slides in for the next. */
  .sp {
    width: 116px;
    height: 88px;
    position: relative;
    font-family: 'Courier New', monospace;
  }

  /* Ink pad, left. */
  .sp-pad {
    position: absolute;
    left: 6px;
    bottom: 14px;
    width: 30px;
    height: 12px;
    border-radius: 3px;
    background: linear-gradient(180deg, rgba(0, 150, 30, 0.6), rgba(0, 80, 16, 0.85));
    border: 1px solid rgba(0, 204, 0, 0.6);
  }

  .sp-pad::after {
    content: '';
    position: absolute;
    inset: 2px;
    border-radius: 2px;
    background: radial-gradient(ellipse, rgba(140, 255, 170, 0.6), rgba(0, 110, 22, 0.6));
  }

  /* The document, right. */
  .sp-doc {
    position: absolute;
    right: 10px;
    bottom: 12px;
    width: 52px;
    height: 40px;
    border: 1px solid rgba(140, 255, 170, 0.7);
    border-radius: 1px;
    background: rgba(0, 30, 6, 0.6);
    animation: sp-doc 5.5s steps(1) infinite;
  }

  /* Ruled lines. */
  .sp-doc::after {
    content: '';
    position: absolute;
    left: 5px;
    right: 5px;
    top: 5px;
    height: 14px;
    background: repeating-linear-gradient(180deg,
      rgba(140, 255, 170, 0.35) 0 1px,
      transparent 1px 4px);
  }

  /* Sheet swap: shudders and refreshes near the end of the cycle. */
  @keyframes sp-doc {
    0%, 86% { transform: translateX(0); }
    88% { transform: translateX(20px); }
    90% { transform: translateX(-4px); }
    92%, 100% { transform: translateX(0); }
  }

  /* The APPROVED mark, stamped onto the doc. */
  .sp-mark {
    position: absolute;
    right: 16px;
    bottom: 22px;
    padding: 2px 4px;
    border: 2px solid rgba(190, 255, 205, 0.9);
    border-radius: 3px;
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #d6ffe0;
    transform: rotate(-12deg) scale(0.6);
    opacity: 0;
    animation: sp-mark 5.5s infinite;
  }

  @keyframes sp-mark {
    0%, 52% { opacity: 0; transform: rotate(-12deg) scale(0.4); }
    56% { opacity: 1; transform: rotate(-12deg) scale(1.15); }
    60% { transform: rotate(-12deg) scale(1); text-shadow: 0 0 6px rgba(0, 204, 0, 0.8); }
    84% { opacity: 1; transform: rotate(-12deg) scale(1); }
    88%, 100% { opacity: 0; }
  }

  /* The stamp: handle + head. Moves pad -> doc, presses down. */
  .sp-stamp {
    position: absolute;
    left: 12px;
    top: 4px;
    width: 20px;
    height: 40px;
    animation: sp-move 5.5s ease-in-out infinite;
  }

  @keyframes sp-move {
    /* Ink the pad. */
    0% { transform: translate(0, 6px); }
    12% { transform: translate(0, 14px); }
    18% { transform: translate(0, 6px); }
    /* Swing over the doc. */
    38% { transform: translate(62px, 0); }
    /* Stamp down. */
    52% { transform: translate(62px, 16px); }
    58% { transform: translate(62px, 4px); }
    64% { transform: translate(62px, 14px); }
    70% { transform: translate(62px, 0); }
    /* Return. */
    92%, 100% { transform: translate(0, 6px); }
  }

  .sp-knob {
    position: absolute;
    left: 4px;
    top: 0;
    width: 12px;
    height: 8px;
    border-radius: 6px 6px 3px 3px;
    background: linear-gradient(180deg, rgba(190, 255, 205, 0.9), rgba(0, 120, 24, 0.9));
  }

  .sp-post {
    position: absolute;
    left: 8px;
    top: 8px;
    width: 4px;
    height: 16px;
    background: rgba(140, 255, 170, 0.8);
  }

  .sp-die {
    position: absolute;
    left: 0;
    top: 24px;
    width: 20px;
    height: 8px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(0, 130, 26, 0.9), rgba(190, 255, 205, 0.8));
    border: 1px solid rgba(0, 204, 0, 0.6);
  }

  .sp-puff {
    position: absolute;
    right: 20px;
    bottom: 26px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    border: 1px solid rgba(190, 255, 205, 0.8);
    opacity: 0;
    animation: sp-puff 5.5s infinite;
  }

  .sp-puff.p2 { animation-delay: 0.06s; right: 30px; }

  @keyframes sp-puff {
    0%, 52% { transform: scale(0.3); opacity: 0; }
    56% { opacity: 0.9; }
    64% { transform: scale(2.2) translateY(-4px); opacity: 0; }
    100% { opacity: 0; }
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

  /* v2: Bureaucratic turned-wood rubber stamp with vermilion red ink pad,
     aged cream parchment document, and vibrant red APPROVED seal mark */
  .spc {
    width: 116px;
    height: 88px;
    position: relative;
    font-family: 'Courier New', monospace;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Vermilion red felt stamp pad in black tin */
  .spc-pad {
    position: absolute;
    left: 6px;
    bottom: 14px;
    width: 30px;
    height: 12px;
    border-radius: 3px;
    background: linear-gradient(180deg, #18181b, #09090b);
    border: 1.5px solid #475569;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  }

  .spc-pad::after {
    content: '';
    position: absolute;
    inset: 2px;
    border-radius: 2px;
    background: radial-gradient(ellipse, #ef4444 0%, #b91c1c 80%);
    box-shadow: inset 0 0 4px #7f1d1d;
  }

  /* Aged cream legal document */
  .spc-doc {
    position: absolute;
    right: 10px;
    bottom: 12px;
    width: 52px;
    height: 40px;
    border: 1.5px solid #d4d4d8;
    border-radius: 1px;
    background: #fefce8;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
    animation: spc-doc 5.5s steps(1) infinite;
  }

  /* Ruled grey lines on parchment */
  .spc-doc::after {
    content: '';
    position: absolute;
    left: 5px;
    right: 5px;
    top: 5px;
    height: 14px;
    background: repeating-linear-gradient(180deg,
      #cbd5e1 0 1px,
      transparent 1px 4px);
  }

  @keyframes spc-doc {
    0%, 86% { transform: translateX(0); }
    88% { transform: translateX(20px); }
    90% { transform: translateX(-4px); }
    92%, 100% { transform: translateX(0); }
  }

  /* Scarlet red APPROVED stamp imprint */
  .spc-mark {
    position: absolute;
    right: 16px;
    bottom: 22px;
    padding: 2px 4px;
    border: 2px solid #dc2626;
    border-radius: 3px;
    font-size: 8px;
    font-weight: 900;
    letter-spacing: 1px;
    color: #dc2626;
    transform: rotate(-12deg) scale(0.6);
    opacity: 0;
    z-index: 5;
    animation: spc-mark 5.5s infinite;
  }

  @keyframes spc-mark {
    0%, 52% { opacity: 0; transform: rotate(-12deg) scale(0.4); }
    56% { opacity: 1; transform: rotate(-12deg) scale(1.15); }
    60% { opacity: 1; transform: rotate(-12deg) scale(1); text-shadow: 0 0 6px rgba(220, 38, 38, 0.8); }
    84% { opacity: 1; transform: rotate(-12deg) scale(1); }
    88%, 100% { opacity: 0; }
  }

  /* Hand stamp assembly */
  .spc-stamp {
    position: absolute;
    left: 12px;
    top: 4px;
    width: 20px;
    height: 40px;
    z-index: 6;
    animation: spc-move 5.5s ease-in-out infinite;
  }

  @keyframes spc-move {
    0% { transform: translate(0, 6px); }
    12% { transform: translate(0, 14px); }
    18% { transform: translate(0, 6px); }
    38% { transform: translate(62px, 0); }
    52% { transform: translate(62px, 16px); }
    58% { transform: translate(62px, 4px); }
    64% { transform: translate(62px, 14px); }
    70% { transform: translate(62px, 0); }
    92%, 100% { transform: translate(0, 6px); }
  }

  /* Turned beechwood handle */
  .spc-knob {
    position: absolute;
    left: 4px;
    top: 0;
    width: 12px;
    height: 8px;
    border-radius: 6px 6px 3px 3px;
    background: linear-gradient(180deg, #d97706 0%, #b45309 60%, #78350f 100%);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  }

  .spc-post {
    position: absolute;
    left: 8px;
    top: 8px;
    width: 4px;
    height: 16px;
    background: linear-gradient(90deg, #facc15, #ca8a04);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  }

  /* Metal mount & rubber die */
  .spc-die {
    position: absolute;
    left: 0;
    top: 24px;
    width: 20px;
    height: 8px;
    border-radius: 2px;
    background: linear-gradient(180deg, #94a3b8 0%, #475569 50%, #dc2626 100%);
    border: 1px solid #64748b;
  }

  /* Red ink dispersion puff */
  .spc-puff {
    position: absolute;
    right: 20px;
    bottom: 26px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    border: 1px solid #ef4444;
    opacity: 0;
    animation: spc-puff 5.5s infinite;
  }

  .spc-puff.p2 { animation-delay: 0.06s; right: 30px; }

  @keyframes spc-puff {
    0%, 52% { transform: scale(0.3); opacity: 0; }
    56% { opacity: 0.9; }
    64% { transform: scale(2.2) translateY(-4px); opacity: 0; }
    100% { opacity: 0; }
  }
  `,
};

const stampMarkup = {
  v1: `
      <div class="sp">
        <div class="sp-pad"></div>
        <div class="sp-doc"></div>
        <div class="sp-mark">APPROVED</div>
        <div class="sp-puff"></div>
        <div class="sp-puff p2"></div>
        <div class="sp-stamp">
          <div class="sp-knob"></div>
          <div class="sp-post"></div>
          <div class="sp-die"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="spc">
        <div class="spc-pad"></div>
        <div class="spc-doc"></div>
        <div class="spc-mark">APPROVED</div>
        <div class="spc-puff"></div>
        <div class="spc-puff p2"></div>
        <div class="spc-stamp">
          <div class="spc-knob"></div>
          <div class="spc-post"></div>
          <div class="spc-die"></div>
        </div>
      </div>
    `,
};

class ConceptStamp extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${stampStyles[version] || stampStyles.v2}</style>${stampMarkup[version] || stampMarkup.v2}`;
  }
}

if (!customElements.get('concept-stamp')) {
  customElements.define('concept-stamp', ConceptStamp);
}
