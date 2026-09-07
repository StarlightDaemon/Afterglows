const blocksStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .bk {
    width: 100px;
    height: 96px;
    position: relative;
  }

  .bk-floor {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 12px;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 0, 0.5), transparent);
  }

  .bk-block {
    position: absolute;
    left: 50%;
    width: 26px;
    height: 22px;
    margin-left: -13px;
    border-radius: 3px;
    border: 2px solid var(--accent, #00cc00);
    background: linear-gradient(145deg, rgba(190, 255, 205, 0.6), rgba(0, 130, 26, 0.7));
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    font-weight: bold;
    color: #041a0a;
    box-sizing: border-box;
  }

  .bk-block.b1 { bottom: 14px; animation: bk-drop1 6s ease-in infinite; }
  .bk-block.b2 { bottom: 36px; animation: bk-drop2 6s ease-in infinite; }
  .bk-block.b3 { bottom: 58px; animation: bk-drop3 6s ease-in infinite; }

  @keyframes bk-drop1 {
    0% { transform: translateY(-70px); opacity: 0; }
    6% { opacity: 1; }
    14% { transform: translateY(0); }
    18% { transform: translateY(-4px); }
    22% { transform: translateY(0); }
    86% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
    94% { transform: translate(10px, 4px) rotate(30deg); opacity: 0; }
    100% { opacity: 0; }
  }

  @keyframes bk-drop2 {
    0%, 24% { transform: translateY(-92px); opacity: 0; }
    30% { opacity: 1; }
    40% { transform: translateY(0); }
    44% { transform: translateY(-4px); }
    48% { transform: translateY(0); }
    86% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
    93% { transform: translate(-16px, 10px) rotate(-40deg); opacity: 0; }
    100% { opacity: 0; }
  }

  @keyframes bk-drop3 {
    0%, 50% { transform: translateY(-110px); opacity: 0; }
    56% { opacity: 1; }
    66% { transform: translateY(0); }
    70% { transform: translateY(-4px); }
    74% { transform: translateY(2px); }
    80% { transform: translateY(0) rotate(4deg); }
    84% { transform: translate(6px, 0) rotate(14deg); opacity: 1; }
    90% { transform: translate(22px, 30px) rotate(70deg); opacity: 0; }
    100% { opacity: 0; }
  }

  .bk-block.b1::before { content: 'A'; }
  .bk-block.b2::before { content: 'B'; }
  .bk-block.b3::before { content: 'C'; }

  .bk-puff {
    position: absolute;
    left: 50%;
    width: 30px;
    height: 5px;
    margin-left: -15px;
    border-radius: 50%;
    background: rgba(140, 255, 170, 0.4);
    opacity: 0;
  }

  .bk-puff.p1 { bottom: 12px; animation: bk-puff 6s infinite; }
  .bk-puff.p2 { bottom: 34px; animation: bk-puff 6s infinite; animation-delay: 1.56s; }
  .bk-puff.p3 { bottom: 56px; animation: bk-puff 6s infinite; animation-delay: 3.96s; }

  @keyframes bk-puff {
    0%, 10% { transform: scale(0.3); opacity: 0; }
    14% { opacity: 0.7; }
    22% { transform: scale(1.4); opacity: 0; }
    100% { opacity: 0; }
  }

  .bk-star {
    position: absolute;
    left: 50%;
    bottom: 82px;
    margin-left: -6px;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    color: #f2ffdd;
    text-shadow: 0 0 6px rgba(0, 204, 0, 0.9);
    opacity: 0;
    animation: bk-star 6s infinite;
  }

  @keyframes bk-star {
    0%, 66% { opacity: 0; transform: scale(0.5); }
    72% { opacity: 1; transform: scale(1.2); }
    78% { transform: scale(1); }
    82%, 100% { opacity: 0; }
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

  /* v2: Nursery primary color ABC wooden blocks (red, blue, yellow) with star burst */
  .bkc {
    width: 100px;
    height: 96px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Hardwood nursery floor */
  .bkc-floor {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 12px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ca8a04 20%, #78350f 80%, transparent);
    box-shadow: 0 0 4px #eab308;
  }

  /* Blocks: lettered cubes */
  .bkc-block {
    position: absolute;
    left: 50%;
    width: 26px;
    height: 22px;
    margin-left: -13px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Courier New', monospace;
    font-size: 13px;
    font-weight: 900;
    box-sizing: border-box;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
  }

  /* Block A: Crimson Red */
  .bkc-block.b1 {
    bottom: 14px;
    background: linear-gradient(145deg, #ef4444 0%, #dc2626 60%, #991b1b 100%);
    border: 1.5px solid #f87171;
    color: #fef08a;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
    animation: bkc-drop1 6s ease-in infinite;
  }

  /* Block B: Cobalt Blue */
  .bkc-block.b2 {
    bottom: 36px;
    background: linear-gradient(145deg, #3b82f6 0%, #2563eb 60%, #1d4ed8 100%);
    border: 1.5px solid #60a5fa;
    color: #ffffff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
    animation: bkc-drop2 6s ease-in infinite;
  }

  /* Block C: Sunny Yellow */
  .bkc-block.b3 {
    bottom: 58px;
    background: linear-gradient(145deg, #fde047 0%, #eab308 60%, #ca8a04 100%);
    border: 1.5px solid #fef08a;
    color: #1e3a8a;
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.4);
    animation: bkc-drop3 6s ease-in infinite;
  }

  @keyframes bkc-drop1 {
    0% { transform: translateY(-70px); opacity: 0; }
    6% { opacity: 1; }
    14% { transform: translateY(0); }
    18% { transform: translateY(-4px); }
    22% { transform: translateY(0); }
    86% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
    94% { transform: translate(10px, 4px) rotate(30deg); opacity: 0; }
    100% { opacity: 0; }
  }

  @keyframes bkc-drop2 {
    0%, 24% { transform: translateY(-92px); opacity: 0; }
    30% { opacity: 1; }
    40% { transform: translateY(0); }
    44% { transform: translateY(-4px); }
    48% { transform: translateY(0); }
    86% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
    93% { transform: translate(-16px, 10px) rotate(-40deg); opacity: 0; }
    100% { opacity: 0; }
  }

  @keyframes bkc-drop3 {
    0%, 50% { transform: translateY(-110px); opacity: 0; }
    56% { opacity: 1; }
    66% { transform: translateY(0); }
    70% { transform: translateY(-4px); }
    74% { transform: translateY(2px); }
    80% { transform: translateY(0) rotate(4deg); }
    84% { transform: translate(6px, 0) rotate(14deg); opacity: 1; }
    90% { transform: translate(22px, 30px) rotate(70deg); opacity: 0; }
    100% { opacity: 0; }
  }

  .bkc-block.b1::before { content: 'A'; }
  .bkc-block.b2::before { content: 'B'; }
  .bkc-block.b3::before { content: 'C'; }

  /* Dust puffs */
  .bkc-puff {
    position: absolute;
    left: 50%;
    width: 30px;
    height: 5px;
    margin-left: -15px;
    border-radius: 50%;
    background: rgba(254, 240, 138, 0.4);
    opacity: 0;
  }

  .bkc-puff.p1 { bottom: 12px; animation: bkc-puff 6s infinite; }
  .bkc-puff.p2 { bottom: 34px; animation: bkc-puff 6s infinite; animation-delay: 1.56s; }
  .bkc-puff.p3 { bottom: 56px; animation: bkc-puff 6s infinite; animation-delay: 3.96s; }

  @keyframes bkc-puff {
    0%, 10% { transform: scale(0.3); opacity: 0; }
    14% { opacity: 0.7; }
    22% { transform: scale(1.4); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Golden star completion */
  .bkc-star {
    position: absolute;
    left: 50%;
    bottom: 82px;
    margin-left: -6px;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    color: #fde047;
    text-shadow: 0 0 8px #eab308, 0 0 12px #facc15;
    opacity: 0;
    animation: bkc-star 6s infinite;
  }

  @keyframes bkc-star {
    0%, 66% { opacity: 0; transform: scale(0.5); }
    72% { opacity: 1; transform: scale(1.2); }
    78% { transform: scale(1); }
    82%, 100% { opacity: 0; }
  }
  `,
};

const blocksMarkup = {
  v1: `
      <div class="bk">
        <div class="bk-star">&#9733;</div>
        <div class="bk-puff p1"></div>
        <div class="bk-puff p2"></div>
        <div class="bk-puff p3"></div>
        <div class="bk-block b1"></div>
        <div class="bk-block b2"></div>
        <div class="bk-block b3"></div>
        <div class="bk-floor"></div>
      </div>
    `,
  v2: `
      <div class="bkc">
        <div class="bkc-star">&#9733;</div>
        <div class="bkc-puff p1"></div>
        <div class="bkc-puff p2"></div>
        <div class="bkc-puff p3"></div>
        <div class="bkc-block b1"></div>
        <div class="bkc-block b2"></div>
        <div class="bkc-block b3"></div>
        <div class="bkc-floor"></div>
      </div>
    `,
};

class ConceptBlocks extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${blocksStyles[version] || blocksStyles.v2}</style>${blocksMarkup[version] || blocksMarkup.v2}`;
  }
}

if (!customElements.get('concept-blocks')) {
  customElements.define('concept-blocks', ConceptBlocks);
}
