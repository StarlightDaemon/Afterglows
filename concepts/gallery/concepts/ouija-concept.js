const ouijaStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .ouija {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background: linear-gradient(160deg, #030a04 0%, #061206 100%);
    border: 1px solid rgba(0, 204, 0, 0.2);
    box-sizing: border-box;
    font-family: monospace;
  }

  .ouija-row {
    position: absolute;
    left: 8px;
    right: 8px;
    display: flex;
    justify-content: space-between;
    color: rgba(140, 230, 155, 0.6);
    font-size: 9px;
    letter-spacing: 1px;
  }

  .ouija-row.r1 { top: 14px; }
  .ouija-row.r2 { top: 34px; }
  .ouija-row.r3 { top: 54px; }

  .ouija-corner {
    position: absolute;
    color: rgba(190, 255, 205, 0.75);
    font-size: 8px;
    letter-spacing: 1px;
  }

  .ouija-corner.yes { top: 3px; left: 8px; }
  .ouija-corner.no { top: 3px; right: 8px; }
  .ouija-corner.bye { bottom: 3px; left: 50%; transform: translateX(-50%); }

  .ouija-planchette {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 32px;
    animation: ouija-glide 9s ease-in-out infinite;
    filter: drop-shadow(0 0 6px rgba(0, 204, 0, 0.45));
  }

  .ouija-plate {
    position: absolute;
    inset: 0;
    clip-path: polygon(50% 0, 88% 22%, 100% 62%, 72% 100%, 28% 100%, 0 62%, 12% 22%);
    background:
      linear-gradient(180deg, rgba(150, 255, 175, 0.55) 0 2px, transparent 2px),
      linear-gradient(180deg, rgba(46, 120, 58, 0.95), rgba(18, 56, 24, 0.97));
    border-radius: 4px;
    box-shadow: inset 0 0 0 1.5px rgba(170, 255, 190, 0.55);
  }

  .ouija-lens {
    position: absolute;
    top: 12px;
    left: 50%;
    width: 11px;
    height: 11px;
    margin-left: -5.5px;
    border-radius: 50%;
    border: 2px solid rgba(170, 255, 190, 0.85);
    background: rgba(220, 255, 228, 0.14);
    box-shadow: 0 0 8px rgba(160, 255, 180, 0.6), inset 0 0 4px rgba(190, 255, 205, 0.5);
    animation: ouija-lens 9s ease-in-out infinite;
  }

  @keyframes ouija-glide {
    0% { transform: translate(10px, 6px) rotate(-6deg); }
    14% { transform: translate(10px, 6px) rotate(-6deg); }
    26% { transform: translate(64px, 4px) rotate(7deg); }
    38% { transform: translate(30px, 26px) rotate(-3deg); }
    52% { transform: translate(58px, 44px) rotate(6deg); }
    66% { transform: translate(14px, 44px) rotate(-8deg); }
    80% { transform: translate(38px, 62px) rotate(3deg); }
    92%, 100% { transform: translate(10px, 6px) rotate(-6deg); }
  }

  @keyframes ouija-lens {
    0%, 10% { box-shadow: 0 0 4px rgba(160, 255, 180, 0.3), inset 0 0 3px rgba(190, 255, 205, 0.3); }
    20%, 30% { box-shadow: 0 0 12px rgba(190, 255, 210, 0.95), inset 0 0 6px rgba(220, 255, 228, 0.8); }
    44% { box-shadow: 0 0 5px rgba(160, 255, 180, 0.4), inset 0 0 3px rgba(190, 255, 205, 0.35); }
    58% { box-shadow: 0 0 12px rgba(190, 255, 210, 0.95), inset 0 0 6px rgba(220, 255, 228, 0.8); }
    74% { box-shadow: 0 0 5px rgba(160, 255, 180, 0.4), inset 0 0 3px rgba(190, 255, 205, 0.35); }
    86%, 100% { box-shadow: 0 0 9px rgba(190, 255, 210, 0.7), inset 0 0 5px rgba(220, 255, 228, 0.6); }
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

  /* v2: Vintage spirit Ouija board with aged parchment grain, gold typography,
     carved walnut planchette with brass lens, and glowing spiritual focus */
  .ouijac {
    position: relative;
    width: 104px;
    height: 104px;
    overflow: hidden;
    background: radial-gradient(circle at 50% 50%, #fef3c7 0%, #fde68a 60%, #b45309 100%);
    border: 2px solid #78350f;
    border-radius: 6px;
    box-shadow: inset 0 0 14px rgba(69, 26, 3, 0.8), 0 4px 10px rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
    font-family: 'Courier New', monospace;
    font-weight: bold;
  }

  /* Letter rows */
  .ouijac-row {
    position: absolute;
    left: 8px;
    right: 8px;
    display: flex;
    justify-content: space-between;
    color: #78350f;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
    font-size: 9px;
    letter-spacing: 1px;
  }

  .ouijac-row.r1 { top: 14px; }
  .ouijac-row.r2 { top: 34px; }
  .ouijac-row.r3 { top: 54px; }

  /* Corner callouts */
  .ouijac-corner {
    position: absolute;
    color: #451a03;
    font-size: 8px;
    letter-spacing: 1px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
  }

  .ouijac-corner.yes { top: 3px; left: 8px; color: #15803d; }
  .ouijac-corner.no { top: 3px; right: 8px; color: #b91c1c; }
  .ouijac-corner.bye { bottom: 3px; left: 50%; transform: translateX(-50%); }

  /* Planchette carrier */
  .ouijac-planchette {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 32px;
    animation: ouijac-glide 9s ease-in-out infinite;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.7));
  }

  /* Carved walnut heart plate with brass border */
  .ouijac-plate {
    position: absolute;
    inset: 0;
    clip-path: polygon(50% 0, 88% 22%, 100% 62%, 72% 100%, 28% 100%, 0 62%, 12% 22%);
    background:
      linear-gradient(180deg, #facc15 0 2px, transparent 2px),
      linear-gradient(180deg, #78350f 0%, #451a03 100%);
    border-radius: 4px;
    box-shadow: inset 0 0 0 1.5px #fde047;
  }

  /* Glowing mystical glass lens */
  .ouijac-lens {
    position: absolute;
    top: 12px;
    left: 50%;
    width: 11px;
    height: 11px;
    margin-left: -5.5px;
    border-radius: 50%;
    border: 2px solid #facc15;
    background: rgba(168, 85, 247, 0.2);
    box-shadow: 0 0 10px #c084fc, inset 0 0 6px #e9d5ff;
    animation: ouijac-lens 9s ease-in-out infinite;
  }

  @keyframes ouijac-glide {
    0% { transform: translate(10px, 6px) rotate(-6deg); }
    14% { transform: translate(10px, 6px) rotate(-6deg); }
    26% { transform: translate(64px, 4px) rotate(7deg); }
    38% { transform: translate(30px, 26px) rotate(-3deg); }
    52% { transform: translate(58px, 44px) rotate(6deg); }
    66% { transform: translate(14px, 44px) rotate(-8deg); }
    80% { transform: translate(38px, 62px) rotate(3deg); }
    92%, 100% { transform: translate(10px, 6px) rotate(-6deg); }
  }

  @keyframes ouijac-lens {
    0%, 10% { box-shadow: 0 0 6px rgba(192, 132, 252, 0.4), inset 0 0 3px #e9d5ff; }
    20%, 30% { box-shadow: 0 0 16px #a855f7, inset 0 0 8px #ffffff; }
    44% { box-shadow: 0 0 6px rgba(192, 132, 252, 0.4), inset 0 0 3px #e9d5ff; }
    58% { box-shadow: 0 0 16px #a855f7, inset 0 0 8px #ffffff; }
    74% { box-shadow: 0 0 6px rgba(192, 132, 252, 0.4), inset 0 0 3px #e9d5ff; }
    86%, 100% { box-shadow: 0 0 12px #c084fc, inset 0 0 6px #ffffff; }
  }
  `,
};

const ouijaMarkup = {
  v1: `
      <div class="ouija">
        <span class="ouija-corner yes">YES</span>
        <span class="ouija-corner no">NO</span>
        <div class="ouija-row r1"><span>A</span><span>B</span><span>C</span><span>D</span><span>E</span><span>F</span><span>G</span></div>
        <div class="ouija-row r2"><span>H</span><span>I</span><span>J</span><span>K</span><span>L</span><span>M</span><span>N</span></div>
        <div class="ouija-row r3"><span>O</span><span>P</span><span>Q</span><span>R</span><span>S</span><span>T</span><span>U</span></div>
        <span class="ouija-corner bye">GOODBYE</span>
        <div class="ouija-planchette">
          <div class="ouija-plate"></div>
          <div class="ouija-lens"></div>
        </div>
      </div>
    `,
  v2: `
      <div class="ouijac">
        <span class="ouijac-corner yes">YES</span>
        <span class="ouijac-corner no">NO</span>
        <div class="ouijac-row r1"><span>A</span><span>B</span><span>C</span><span>D</span><span>E</span><span>F</span><span>G</span></div>
        <div class="ouijac-row r2"><span>H</span><span>I</span><span>J</span><span>K</span><span>L</span><span>M</span><span>N</span></div>
        <div class="ouijac-row r3"><span>O</span><span>P</span><span>Q</span><span>R</span><span>S</span><span>T</span><span>U</span></div>
        <span class="ouijac-corner bye">GOODBYE</span>
        <div class="ouijac-planchette">
          <div class="ouijac-plate"></div>
          <div class="ouijac-lens"></div>
        </div>
      </div>
    `,
};

class ConceptOuija extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${ouijaStyles[version] || ouijaStyles.v2}</style>${ouijaMarkup[version] || ouijaMarkup.v2}`;
  }
}

if (!customElements.get('concept-ouija')) {
  customElements.define('concept-ouija', ConceptOuija);
}
