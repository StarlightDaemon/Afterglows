const skullStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .skull-scene {
    position: relative;
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .skull {
    position: relative;
    width: 54px;
    height: 62px;
    animation: skull-bob 5.2s ease-in-out infinite;
  }

  .skull-cranium {
    position: absolute;
    top: 0;
    left: 0;
    width: 54px;
    height: 46px;
    border-radius: 27px 27px 10px 10px;
    background: linear-gradient(180deg, #17351d 0%, #0c2010 100%);
    box-shadow:
      inset 0 4px 8px rgba(170, 255, 190, 0.25),
      inset 0 -4px 6px rgba(0, 0, 0, 0.55),
      0 0 12px rgba(0, 204, 0, 0.2);
  }

  .skull-jaw {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 30px;
    height: 14px;
    margin-left: -15px;
    border-radius: 4px 4px 8px 8px;
    background: linear-gradient(180deg, #142f1a, #0a1c0e);
    box-shadow: inset 0 2px 3px rgba(170, 255, 190, 0.2);
    transform-origin: top center;
    animation: skull-jaw 5.2s ease-in-out infinite;
  }

  .skull-jaw::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 4px;
    right: 4px;
    height: 3px;
    background: repeating-linear-gradient(90deg, rgba(200, 255, 210, 0.5) 0 3px, transparent 3px 6px);
  }

  .skull-socket {
    position: absolute;
    top: 18px;
    width: 14px;
    height: 15px;
    border-radius: 50% 50% 44% 44%;
    background: #010603;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.9);
  }

  .skull-socket.left { left: 8px; }
  .skull-socket.right { right: 8px; }

  .skull-ember {
    position: absolute;
    top: 4px;
    left: 50%;
    width: 5px;
    height: 5px;
    margin-left: -2.5px;
    border-radius: 50%;
    background: #b8ffc4;
    box-shadow: 0 0 8px 2px rgba(140, 255, 170, 0.9);
    animation: skull-ember 5.2s ease-in-out infinite;
  }

  .skull-socket.right .skull-ember { animation-delay: -2.6s; }

  .skull-nose {
    position: absolute;
    top: 34px;
    left: 50%;
    width: 8px;
    height: 8px;
    margin-left: -4px;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    background: #010603;
  }

  .skull-mote {
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(160, 255, 185, 0.7);
    opacity: 0;
    animation: skull-mote 3.6s ease-out infinite;
  }

  .skull-mote.m1 { left: 22px; bottom: 34px; animation-delay: 0s; }
  .skull-mote.m2 { left: 80px; bottom: 46px; animation-delay: -1.4s; }
  .skull-mote.m3 { left: 54px; bottom: 26px; animation-delay: -2.5s; }

  @keyframes skull-bob {
    0%, 100% { transform: translateY(0) rotate(-1.5deg); }
    50% { transform: translateY(-5px) rotate(1.5deg); }
  }

  @keyframes skull-jaw {
    0%, 58%, 100% { transform: rotate(0deg) translateY(0); }
    66% { transform: rotate(-2deg) translateY(4px); }
    72% { transform: translateY(1px); }
    78% { transform: translateY(4px); }
    84% { transform: translateY(0); }
  }

  @keyframes skull-ember {
    0%, 100% { opacity: 0.35; transform: scale(0.8); }
    30% { opacity: 1; transform: scale(1.25); }
    62% { opacity: 0.55; transform: scale(0.95); }
    78% { opacity: 1; transform: scale(1.35); }
  }

  @keyframes skull-mote {
    0% { opacity: 0; transform: translateY(0); }
    18% { opacity: 0.85; }
    100% { opacity: 0; transform: translateY(-30px); }
  }
`;

class ConceptSkull extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${skullStyles}</style>
      <div class="skull-scene">
        <div class="skull">
          <div class="skull-cranium"></div>
          <div class="skull-socket left"><div class="skull-ember"></div></div>
          <div class="skull-socket right"><div class="skull-ember"></div></div>
          <div class="skull-nose"></div>
          <div class="skull-jaw"></div>
        </div>
        <div class="skull-mote m1"></div>
        <div class="skull-mote m2"></div>
        <div class="skull-mote m3"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-skull')) {
  customElements.define('concept-skull', ConceptSkull);
}
