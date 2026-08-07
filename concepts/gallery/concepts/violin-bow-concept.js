const violinBowStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A tensioned violin bow drawing across a taut musical string: stick-slip
     friction drives high-frequency standing wave vibration envelope with glowing
     harmonic nodes, while rosin dust particles puff at the contact point. */
  .vb {
    width: 116px;
    height: 96px;
    position: relative;
    overflow: hidden;
  }

  /* Instrument fingerboard / bridge backdrop */
  .vb-board {
    position: absolute;
    left: 8px;
    top: 50px;
    width: 100px;
    height: 8px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(0, 70, 15, 0.8), rgba(0, 25, 5, 0.95));
    border: 1px solid var(--accent, #00cc00);
  }

  /* Fixed bridge at right */
  .vb-bridge {
    position: absolute;
    right: 14px;
    top: 38px;
    width: 6px;
    height: 24px;
    border-radius: 2px;
    background: rgba(0, 150, 30, 0.9);
    border: 1px solid var(--accent, #00cc00);
  }

  /* Nut / pegbox at left */
  .vb-nut {
    position: absolute;
    left: 10px;
    top: 42px;
    width: 4px;
    height: 18px;
    border-radius: 1px;
    background: rgba(0, 150, 30, 0.9);
    border: 1px solid var(--accent, #00cc00);
  }

  /* Vibrating string standing wave envelope */
  .vb-string-env {
    position: absolute;
    left: 14px;
    top: 45px;
    width: 88px;
    height: 8px;
  }

  .vb-string-core {
    position: absolute;
    left: 0;
    top: 3px;
    width: 100%;
    height: 2px;
    background: rgba(190, 255, 205, 0.95);
    box-shadow: 0 0 6px rgba(140, 255, 170, 0.9);
    animation: vb-string-vibe 0.08s ease-in-out infinite alternate;
  }

  @keyframes vb-string-vibe {
    0% { transform: scaleY(1.8) translateY(-1px); }
    100% { transform: scaleY(0.6) translateY(1px); }
  }

  /* Harmonic stationary node points glowing along the string */
  .vb-node {
    position: absolute;
    top: 1px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 6px rgba(140, 255, 170, 1);
    animation: vb-node-glow 0.8s ease-in-out infinite alternate;
  }

  .vb-node.n1 { left: 24px; }
  .vb-node.n2 { left: 44px; }
  .vb-node.n3 { left: 64px; }

  @keyframes vb-node-glow {
    0% { transform: scale(0.8); opacity: 0.6; }
    100% { transform: scale(1.3); opacity: 1; }
  }

  /* Reciprocating bow stroke */
  .vb-bow {
    position: absolute;
    left: 20px;
    top: 22px;
    width: 68px;
    height: 52px;
    animation: vb-bow-stroke 2.6s ease-in-out infinite;
    z-index: 4;
  }

  @keyframes vb-bow-stroke {
    0%, 100% { transform: translate(-18px, -10px) rotate(-1deg); }
    50% { transform: translate(18px, 12px) rotate(1deg); }
  }

  /* Bow stick (Pernambuco wood) */
  .vb-stick {
    position: absolute;
    left: 42px;
    top: 0;
    width: 4px;
    height: 52px;
    border-radius: 2px;
    background: linear-gradient(180deg, rgba(0, 160, 35, 0.9), rgba(0, 70, 14, 0.95));
    border: 1px solid var(--accent, #00cc00);
  }

  /* Bow horsehair ribbon contacting string */
  .vb-hair {
    position: absolute;
    left: 36px;
    top: 0;
    width: 2px;
    height: 52px;
    background: rgba(190, 255, 205, 0.85);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.7);
  }

  /* Rosin dust particle emission at the bowing friction point */
  .vb-rosin {
    position: absolute;
    left: 54px;
    top: 44px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(190, 255, 205, 1);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.9);
    animation: vb-rosin-puff 1.3s ease-out infinite;
    pointer-events: none;
  }

  .vb-rosin.r1 { animation-delay: 0s; }
  .vb-rosin.r2 { animation-delay: -0.4s; }
  .vb-rosin.r3 { animation-delay: -0.9s; }

  @keyframes vb-rosin-puff {
    0% { opacity: 1; transform: translate(0, 0) scale(1); }
    100% { opacity: 0; transform: translate(calc(6px * var(--rx, 1)), -14px) scale(0.3); }
  }

  .vb-rosin.r1 { --rx: 1.2; }
  .vb-rosin.r2 { --rx: -1; }
  .vb-rosin.r3 { --rx: 0.5; }
`;

class ConceptViolinBow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${violinBowStyles}</style>
      <div class="vb">
        <div class="vb-board"></div>
        <div class="vb-bridge"></div>
        <div class="vb-nut"></div>
        <div class="vb-string-env">
          <div class="vb-string-core"></div>
          <div class="vb-node n1"></div>
          <div class="vb-node n2"></div>
          <div class="vb-node n3"></div>
        </div>
        <div class="vb-bow">
          <div class="vb-stick"></div>
          <div class="vb-hair"></div>
        </div>
        <div class="vb-rosin r1"></div>
        <div class="vb-rosin r2"></div>
        <div class="vb-rosin r3"></div>
      </div>
    `;
  }
}

if (!customElements.get('concept-violin-bow')) {
  customElements.define('concept-violin-bow', ConceptViolinBow);
}
