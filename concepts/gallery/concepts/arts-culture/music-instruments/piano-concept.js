const pianoStyles = {
  v1: `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .pno {
    width: 112px;
    height: 92px;
    position: relative;
  }

  .pno-case {
    position: absolute;
    left: 2px;
    right: 2px;
    bottom: 8px;
    height: 56px;
    border: 2px solid var(--accent, #00cc00);
    border-radius: 4px;
    background: rgba(0, 25, 5, 0.7);
    overflow: hidden;
  }

  .pno-key {
    position: absolute;
    top: 0;
    width: 14px;
    height: 52px;
    border: 1px solid rgba(0, 204, 0, 0.55);
    border-radius: 0 0 3px 3px;
    background: linear-gradient(180deg, rgba(0, 80, 16, 0.35), rgba(0, 140, 28, 0.25));
    box-sizing: border-box;
  }

  .pno-key.w1 { left: 2px; }
  .pno-key.w2 { left: 17px; }
  .pno-key.w3 { left: 32px; }
  .pno-key.w4 { left: 47px; }
  .pno-key.w5 { left: 62px; }
  .pno-key.w6 { left: 77px; }
  .pno-key.w7 { left: 92px; }

  .pno-sharp {
    position: absolute;
    top: 0;
    width: 9px;
    height: 30px;
    border-radius: 0 0 2px 2px;
    background: linear-gradient(180deg, rgba(0, 200, 40, 0.9), rgba(0, 90, 18, 0.95));
    border: 1px solid rgba(140, 255, 170, 0.5);
    box-sizing: border-box;
    z-index: 2;
  }

  .pno-sharp.b1 { left: 12px; }
  .pno-sharp.b2 { left: 27px; }
  .pno-sharp.b3 { left: 57px; }
  .pno-sharp.b4 { left: 72px; }
  .pno-sharp.b5 { left: 87px; }

  .pno-key.w3 { animation: pno-press 4.8s infinite; }
  .pno-sharp.b3 { animation: pno-press-sharp 4.8s infinite; animation-delay: 1.2s; }
  .pno-key.w5 { animation: pno-press 4.8s infinite; animation-delay: 2.4s; }
  .pno-key.w2 { animation: pno-press 4.8s infinite; animation-delay: 3.6s; }

  @keyframes pno-press {
    0%, 1% { transform: translateY(0); background: linear-gradient(180deg, rgba(0, 80, 16, 0.35), rgba(0, 140, 28, 0.25)); }
    4% { transform: translateY(3px); background: linear-gradient(180deg, rgba(140, 255, 170, 0.8), rgba(0, 204, 0, 0.6)); box-shadow: 0 0 9px rgba(0, 204, 0, 0.8); }
    12% { transform: translateY(3px); }
    18% { transform: translateY(0); background: linear-gradient(180deg, rgba(0, 80, 16, 0.35), rgba(0, 140, 28, 0.25)); box-shadow: none; }
    100% { transform: translateY(0); }
  }

  @keyframes pno-press-sharp {
    0%, 1% { transform: translateY(0); }
    4% { transform: translateY(3px); background: linear-gradient(180deg, #d6ffe0, rgba(0, 204, 0, 0.9)); box-shadow: 0 0 9px rgba(0, 204, 0, 0.9); }
    12% { transform: translateY(3px); }
    18% { transform: translateY(0); background: linear-gradient(180deg, rgba(0, 200, 40, 0.9), rgba(0, 90, 18, 0.95)); box-shadow: none; }
    100% { transform: translateY(0); }
  }

  .pno-note {
    position: absolute;
    bottom: 66px;
    font-family: 'Courier New', monospace;
    font-size: 13px;
    color: #baffc9;
    text-shadow: 0 0 6px rgba(0, 204, 0, 0.9);
    opacity: 0;
    animation: pno-note 4.8s infinite;
  }

  .pno-note.n1 { left: 34px; }
  .pno-note.n2 { left: 60px; animation-delay: 1.2s; }
  .pno-note.n3 { left: 66px; animation-delay: 2.4s; }
  .pno-note.n4 { left: 20px; animation-delay: 3.6s; }

  @keyframes pno-note {
    0% { transform: translateY(6px) rotate(0deg); opacity: 0; }
    4% { opacity: 1; }
    16% { transform: translateY(-12px) rotate(-8deg); opacity: 0.8; }
    26% { transform: translateY(-22px) rotate(6deg); opacity: 0; }
    100% { opacity: 0; }
  }

  .pno-label {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 7px;
    letter-spacing: 3px;
    color: rgba(140, 255, 170, 0.6);
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

  /* v2: Concert grand piano octave with polished ebony body, ivory naturals,
     black obsidian accidentals, brass fallboard, and golden floating musical notes */
  .pnoc {
    width: 112px;
    height: 92px;
    position: relative;
    background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
    border-radius: 6px;
    overflow: hidden;
  }

  /* Polished ebony keybed casing */
  .pnoc-case {
    position: absolute;
    left: 2px;
    right: 2px;
    bottom: 8px;
    height: 56px;
    border: 2px solid #334155;
    border-radius: 4px;
    background: linear-gradient(180deg, #1e293b 0%, #09090b 100%);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.2);
    overflow: hidden;
  }

  /* Pure ivory white natural keys */
  .pnoc-key {
    position: absolute;
    top: 0;
    width: 14px;
    height: 52px;
    border: 1px solid #cbd5e1;
    border-top: none;
    border-radius: 0 0 3px 3px;
    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 85%, #e2e8f0 100%);
    box-shadow: inset 0 -2px 3px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
  }

  .pnoc-key.w1 { left: 2px; }
  .pnoc-key.w2 { left: 17px; }
  .pnoc-key.w3 { left: 32px; }
  .pnoc-key.w4 { left: 47px; }
  .pnoc-key.w5 { left: 62px; }
  .pnoc-key.w6 { left: 77px; }
  .pnoc-key.w7 { left: 92px; }

  /* Jet-black obsidian sharp keys */
  .pnoc-sharp {
    position: absolute;
    top: 0;
    width: 9px;
    height: 30px;
    border-radius: 0 0 2px 2px;
    background: linear-gradient(180deg, #27272a 0%, #09090b 100%);
    border: 1px solid #18181b;
    border-top: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.9), inset 0 1px 1px rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    z-index: 2;
  }

  .pnoc-sharp.b1 { left: 12px; }
  .pnoc-sharp.b2 { left: 27px; }
  .pnoc-sharp.b3 { left: 57px; }
  .pnoc-sharp.b4 { left: 72px; }
  .pnoc-sharp.b5 { left: 87px; }

  /* Key depress animations */
  .pnoc-key.w3 { animation: pnoc-press 4.8s infinite; }
  .pnoc-sharp.b3 { animation: pnoc-press-sharp 4.8s infinite; animation-delay: 1.2s; }
  .pnoc-key.w5 { animation: pnoc-press 4.8s infinite; animation-delay: 2.4s; }
  .pnoc-key.w2 { animation: pnoc-press 4.8s infinite; animation-delay: 3.6s; }

  @keyframes pnoc-press {
    0%, 1% { transform: translateY(0); background: linear-gradient(180deg, #ffffff 0%, #f8fafc 85%, #e2e8f0 100%); }
    4% { transform: translateY(3px); background: linear-gradient(180deg, #fef08a, #facc15); box-shadow: 0 0 10px rgba(250, 204, 21, 0.9); }
    12% { transform: translateY(3px); }
    18% { transform: translateY(0); background: linear-gradient(180deg, #ffffff 0%, #f8fafc 85%, #e2e8f0 100%); box-shadow: none; }
    100% { transform: translateY(0); }
  }

  @keyframes pnoc-press-sharp {
    0%, 1% { transform: translateY(0); }
    4% { transform: translateY(3px); background: linear-gradient(180deg, #fef08a, #ca8a04); box-shadow: 0 0 10px rgba(250, 204, 21, 0.9); }
    12% { transform: translateY(3px); }
    18% { transform: translateY(0); background: linear-gradient(180deg, #27272a 0%, #09090b 100%); box-shadow: none; }
    100% { transform: translateY(0); }
  }

  /* Golden melody note glyphs */
  .pnoc-note {
    position: absolute;
    bottom: 66px;
    font-family: 'Courier New', monospace;
    font-size: 13px;
    font-weight: bold;
    color: #fde047;
    text-shadow: 0 0 8px #facc15;
    opacity: 0;
    animation: pnoc-note 4.8s infinite;
  }

  .pnoc-note.n1 { left: 34px; color: #38bdf8; text-shadow: 0 0 8px #38bdf8; }
  .pnoc-note.n2 { left: 60px; color: #f472b6; text-shadow: 0 0 8px #f472b6; animation-delay: 1.2s; }
  .pnoc-note.n3 { left: 66px; color: #fde047; text-shadow: 0 0 8px #fde047; animation-delay: 2.4s; }
  .pnoc-note.n4 { left: 20px; color: #4ade80; text-shadow: 0 0 8px #4ade80; animation-delay: 3.6s; }

  @keyframes pnoc-note {
    0% { transform: translateY(6px) rotate(0deg); opacity: 0; }
    4% { opacity: 1; }
    16% { transform: translateY(-12px) rotate(-8deg); opacity: 0.9; }
    26% { transform: translateY(-22px) rotate(6deg); opacity: 0; }
    100% { opacity: 0; }
  }

  /* Gold lettering fallboard */
  .pnoc-label {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 7px;
    font-weight: bold;
    letter-spacing: 3px;
    color: #facc15;
  }
  `,
};

const pianoMarkup = {
  v1: `
      <div class="pno">
        <div class="pno-note n1">&#9834;</div>
        <div class="pno-note n2">&#9839;</div>
        <div class="pno-note n3">&#9834;</div>
        <div class="pno-note n4">&#9833;</div>
        <div class="pno-case">
          <div class="pno-key w1"></div>
          <div class="pno-key w2"></div>
          <div class="pno-key w3"></div>
          <div class="pno-key w4"></div>
          <div class="pno-key w5"></div>
          <div class="pno-key w6"></div>
          <div class="pno-key w7"></div>
          <div class="pno-sharp b1"></div>
          <div class="pno-sharp b2"></div>
          <div class="pno-sharp b3"></div>
          <div class="pno-sharp b4"></div>
          <div class="pno-sharp b5"></div>
        </div>
        <div class="pno-label">OCTAVE 4</div>
      </div>
    `,
  v2: `
      <div class="pnoc">
        <div class="pnoc-note n1">&#9834;</div>
        <div class="pnoc-note n2">&#9839;</div>
        <div class="pnoc-note n3">&#9834;</div>
        <div class="pnoc-note n4">&#9833;</div>
        <div class="pnoc-case">
          <div class="pnoc-key w1"></div>
          <div class="pnoc-key w2"></div>
          <div class="pnoc-key w3"></div>
          <div class="pnoc-key w4"></div>
          <div class="pnoc-key w5"></div>
          <div class="pnoc-key w6"></div>
          <div class="pnoc-key w7"></div>
          <div class="pnoc-sharp b1"></div>
          <div class="pnoc-sharp b2"></div>
          <div class="pnoc-sharp b3"></div>
          <div class="pnoc-sharp b4"></div>
          <div class="pnoc-sharp b5"></div>
        </div>
        <div class="pnoc-label">OCTAVE 4</div>
      </div>
    `,
};

class ConceptPiano extends HTMLElement {
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
    this.shadowRoot.innerHTML = `<style>${pianoStyles[version] || pianoStyles.v2}</style>${pianoMarkup[version] || pianoMarkup.v2}`;
  }
}

if (!customElements.get('concept-piano')) {
  customElements.define('concept-piano', ConceptPiano);
}
