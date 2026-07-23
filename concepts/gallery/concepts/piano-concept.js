const pianoStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* One octave playing a looped four-note phrase: each key dips and
     lights on its beat and a note glyph floats up from it. White and
     black keys press independently on one shared 4.8s timeline. */
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

  /* White keys. */
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

  /* Black keys. */
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

  /* The phrase: w3 at 0%, b3 at 25%, w5 at 50%, w2 at 75%. */
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

  /* Note glyphs rising from each played key. */
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

  /* Fallboard label. */
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
`;

class ConceptPiano extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${pianoStyles}</style>
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
    `;
  }
}

if (!customElements.get('concept-piano')) {
  customElements.define('concept-piano', ConceptPiano);
}
