const chatteringTeethStyles = `
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* A classic novelty wind-up chattering teeth toy: spring-wound mechanism snaps
     jaw open and closed in high-speed clattering bursts while little orange shoes
     waddle and hop frantically across the surface. */
  .cht {
    width: 114px;
    height: 98px;
    position: relative;
  }

  /* Whole wind-up toy hopping carrier: the fast per-hop wobble plus a
     slow erratic drift back and forth across the table — the friction
     shuffle that's the whole point of this concept, distinct from
     windup-robot's march-in-place. */
  .cht-rig {
    position: absolute;
    left: 20px;
    top: 14px;
    width: 74px;
    height: 72px;
    animation: cht-waddle 0.35s ease-in-out infinite alternate, cht-shuffle 4.8s ease-in-out infinite;
  }

  @keyframes cht-waddle {
    0% { transform: translateY(0) rotate(-4deg); }
    100% { transform: translateY(-6px) rotate(4deg); }
  }

  @keyframes cht-shuffle {
    0% { margin-left: 0; }
    22% { margin-left: 14px; }
    50% { margin-left: 4px; }
    74% { margin-left: -12px; }
    100% { margin-left: 0; }
  }

  /* Side wind-up wing-key spinning */
  .cht-key {
    position: absolute;
    right: -12px;
    top: 22px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid rgba(190, 255, 205, 1);
    background: rgba(0, 140, 30, 0.9);
    box-shadow: 0 0 4px rgba(140, 255, 170, 0.8);
    animation: cht-key-spin 0.7s linear infinite;
    z-index: 5;
  }

  @keyframes cht-key-spin {
    0% { transform: rotate(0deg) scaleX(1); }
    50% { transform: rotate(180deg) scaleX(0.2); }
    100% { transform: rotate(360deg) scaleX(1); }
  }

  /* Upper jaw and gums */
  .cht-jaw-top {
    position: absolute;
    left: 4px;
    top: 8px;
    width: 62px;
    height: 24px;
    border-radius: 16px 16px 4px 4px;
    background: radial-gradient(circle at 50% 30%, rgba(0, 180, 40, 0.9), rgba(0, 50, 10, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
    transform-origin: right center;
    z-index: 3;
    animation: cht-jaw-up 0.18s ease-in-out infinite alternate;
  }

  @keyframes cht-jaw-up {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-14deg); }
  }

  /* Upper row of square teeth */
  .cht-teeth-top {
    position: absolute;
    left: 6px;
    bottom: 2px;
    width: 50px;
    height: 8px;
    display: flex;
    justify-content: space-between;
  }

  /* Lower jaw and gums */
  .cht-jaw-bot {
    position: absolute;
    left: 4px;
    top: 28px;
    width: 62px;
    height: 24px;
    border-radius: 4px 4px 16px 16px;
    background: radial-gradient(circle at 50% 70%, rgba(0, 180, 40, 0.9), rgba(0, 50, 10, 0.95));
    border: 1.5px solid var(--accent, #00cc00);
    box-shadow: 0 0 6px rgba(0, 204, 0, 0.3);
    transform-origin: right center;
    z-index: 3;
    animation: cht-jaw-down 0.18s ease-in-out infinite alternate;
  }

  @keyframes cht-jaw-down {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(14deg); }
  }

  /* Lower row of square teeth */
  .cht-teeth-bot {
    position: absolute;
    left: 6px;
    top: 2px;
    width: 50px;
    height: 8px;
    display: flex;
    justify-content: space-between;
  }

  /* Tooth pip */
  .cht-tooth {
    width: 7px;
    height: 7px;
    background: rgba(190, 255, 205, 1);
    border: 1px solid var(--accent, #00cc00);
    border-radius: 1px;
    box-shadow: 0 0 3px rgba(140, 255, 170, 0.8);
  }

  /* Waddling feet pair underneath */
  .cht-feet {
    position: absolute;
    left: 12px;
    bottom: 2px;
    width: 48px;
    height: 14px;
    z-index: 2;
  }

  .cht-foot {
    position: absolute;
    bottom: 0;
    width: 18px;
    height: 8px;
    border-radius: 6px 8px 3px 3px;
    background: rgba(140, 255, 170, 0.95);
    border: 1px solid var(--accent, #00cc00);
  }

  .cht-foot.fl { left: 4px; animation: cht-foot-hop-1 0.35s ease-in-out infinite alternate; }
  .cht-foot.fr { right: 4px; animation: cht-foot-hop-2 0.35s ease-in-out infinite alternate; }

  @keyframes cht-foot-hop-1 {
    0% { transform: translateY(0); }
    100% { transform: translateY(-4px); }
  }
  @keyframes cht-foot-hop-2 {
    0% { transform: translateY(-4px); }
    100% { transform: translateY(0); }
  }
`;

class ConceptChatteringTeeth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${chatteringTeethStyles}</style>
      <div class="cht">
        <div class="cht-rig">
          <div class="cht-key"></div>
          <div class="cht-jaw-top">
            <div class="cht-teeth-top">
              <div class="cht-tooth"></div>
              <div class="cht-tooth"></div>
              <div class="cht-tooth"></div>
              <div class="cht-tooth"></div>
              <div class="cht-tooth"></div>
              <div class="cht-tooth"></div>
            </div>
          </div>
          <div class="cht-jaw-bot">
            <div class="cht-teeth-bot">
              <div class="cht-tooth"></div>
              <div class="cht-tooth"></div>
              <div class="cht-tooth"></div>
              <div class="cht-tooth"></div>
              <div class="cht-tooth"></div>
              <div class="cht-tooth"></div>
            </div>
          </div>
          <div class="cht-feet">
            <div class="cht-foot fl"></div>
            <div class="cht-foot fr"></div>
          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('concept-chattering-teeth')) {
  customElements.define('concept-chattering-teeth', ConceptChatteringTeeth);
}
